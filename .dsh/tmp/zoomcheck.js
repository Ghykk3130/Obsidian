// Open the usage note, then render large previews of the mark and screenshot them.
const fs = require("fs");

const OUT = process.argv[2] || "D:\\Obsidian\\Physics\\.dsh\\tmp\\zoom.png";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CASES = [
  ["\\wick{\\phi(x)\\phi(y)}", "above"],
  ["\\wick{\\bar\\psi(x)\\,\\gamma^\\mu\\,\\psi(y)}", "fermion"],
  ["\\wick{\\phi_1\\wick{\\phi_2\\phi_3}\\phi_4}", "nested"],
  ["\\wickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4}", "crossing"],
];

async function main() {
  const list = await fetch("http://127.0.0.1:9222/json/list").then((r) => r.json());
  const target = list.find((t) => t.type === "page" && /obsidian/i.test(t.url || ""));
  if (!target) { console.error("no target"); process.exit(2); }

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
  try { await send("Page.bringToFront", {}); } catch (_) {}

  const evalJs = async (expr) => {
    const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true });
    if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 700));
    return r.result && r.result.value;
  };

  // 1. open the note so Obsidian's own math pipeline initialises fonts + glyph CSS
  const opened = await evalJs(`(async () => {
    const f = app.vault.getAbstractFileByPath("Notes/SimpleWick 用法.md");
    const leaf = app.workspace.getLeaf("tab");
    await leaf.openFile(f);
    if (leaf.view && leaf.view.setState) leaf.view.setState({ mode: "preview" }, { history: false });
    await new Promise(r => setTimeout(r, 3000));
    return { mode: leaf.view.getMode ? leaf.view.getMode() : null,
             containers: document.querySelectorAll(".markdown-preview-view mjx-container").length };
  })()`);
  console.log("opened:", JSON.stringify(opened));

  // 2. big overlay
  const rect = await evalJs(`(async () => {
    const mj = window.MathJax;
    document.querySelectorAll('#sw-zoom').forEach(e => e.remove());
    const box = document.createElement('div');
    box.id = 'sw-zoom';
    box.style.cssText = 'position:absolute;left:30px;top:30px;z-index:2147483000;background:#fff;color:#111;' +
      'padding:20px 26px;border:1px solid #ddd;font-size:90px;line-height:1.4';
    const cases = ${JSON.stringify(CASES)};
    for (const [tex, label] of cases) {
      const lab = document.createElement('div');
      lab.textContent = label;
      lab.style.cssText = 'font:12px Consolas,monospace;color:#888;margin-top:6px';
      box.appendChild(lab);
      const d = document.createElement('div');
      d.style.margin = '4px 0 10px';
      try { d.appendChild(mj.tex2chtml(tex, { display: true })); }
      catch (e) { d.textContent = 'ERROR: ' + e.message; }
      box.appendChild(d);
    }
    document.body.appendChild(box);
    try { await document.fonts.ready; } catch (_) {}
    await new Promise(r => setTimeout(r, 800));
    const r2 = box.getBoundingClientRect();
    return { x: r2.x, y: r2.y, w: r2.width, h: r2.height };
  })()`);
  console.log("overlay:", JSON.stringify(rect));

  await sleep(500);
  const shot = await send("Page.captureScreenshot", {
    format: "png",
    clip: { x: rect.x, y: rect.y, width: rect.w, height: Math.min(rect.h, 1500), scale: 1 },
  });
  fs.writeFileSync(OUT, Buffer.from(shot.data, "base64"));
  console.log("png:", fs.statSync(OUT).size);
  await evalJs(`(() => { const e = document.querySelector('#sw-zoom'); if (e) e.remove(); return true; })()`);
  ws.close();
}

main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
