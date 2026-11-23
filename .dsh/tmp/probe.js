// Render candidates in the live Obsidian, replicating renderMath + finishRenderMath.
const fs = require("fs");

const OUT = process.argv[2];
const CASES = JSON.parse(fs.readFileSync(process.argv[3], "utf8"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const list = await fetch("http://127.0.0.1:9222/json/list").then((r) => r.json());
  const target = list.find((t) => t.type === "page" && /obsidian/i.test(t.url || ""));
  if (!target) { console.log("no target"); return; }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();
  const send = (method, params) => new Promise((resolve, reject) => {
    const mid = id++;
    pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id);
      msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
    }
  });
  await new Promise((res, rej) => { ws.addEventListener("open", res, { once: true }); ws.addEventListener("error", rej, { once: true }); });
  await send("Page.enable", {});
  await send("Runtime.enable", {});

  const evalJs = async (expr) => {
    const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true });
    if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 600));
    return r.result && r.result.value;
  };

  const rect = await evalJs(`(async () => {
    const mj = window.MathJax;
    document.querySelectorAll('#sw-probe').forEach(e => e.remove());
    // let Obsidian run its own math pipeline once, so the CHTML glyph rules and
    // web fonts are initialised exactly as they are for a normal note.
    for (const leaf of app.workspace.getLeavesOfType('markdown')) {
      const pm = leaf.view && leaf.view.previewMode;
      if (pm && typeof pm.rerender === 'function') { try { pm.rerender(true); } catch (_) {} }
    }
    await new Promise(r => setTimeout(r, 1500));
    await new Promise(r => requestAnimationFrame(r));
    const box = document.createElement('div');
    box.id = 'sw-probe';
    box.style.cssText = 'position:absolute;left:40px;top:40px;z-index:99999;background:#fff;color:#111;' +
      'padding:16px 24px;border:1px solid #ddd;font-size:30px;line-height:1.7';
    const cases = ${JSON.stringify(CASES)};
    for (const c of cases) {
      const lab = document.createElement('div');
      lab.textContent = c.label;
      lab.style.cssText = 'font:12px Consolas,monospace;color:#666;margin-top:10px';
      box.appendChild(lab);
      const d = document.createElement('div');
      try { d.appendChild(mj.tex2chtml(c.tex, { display: true })); }
      catch (e) { d.textContent = 'ERROR: ' + e.message; }
      box.appendChild(d);
    }
    document.body.appendChild(box);
    document.head.appendChild(mj.chtmlStylesheet());
    for (const s of document.querySelectorAll('style[id^="MJX-"]')) {
      s.dataset.change = s.dataset.change === '1' ? '2' : '1';
    }
    void box.offsetHeight;
    // the web fonts must be in before CHTML glyphs have their real size
    try { await document.fonts.ready; } catch (_) {}
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    await new Promise(r => setTimeout(r, 600));
    const r2 = box.getBoundingClientRect();
    return { x: r2.x, y: r2.y, w: r2.width, h: r2.height };
  })()`);

  await sleep(300);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    clip: { x: rect.x, y: rect.y, width: rect.w, height: rect.h, scale: 2 },
  });
  fs.writeFileSync(OUT, Buffer.from(shot.data, "base64"));
  console.log("png:", fs.statSync(OUT).size, JSON.stringify(rect));
  await evalJs(`(() => { const e = document.querySelector('#sw-probe'); if (e) e.remove(); return true; })()`);
  ws.close();
}

main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
