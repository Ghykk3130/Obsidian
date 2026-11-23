// Screenshot a selector (or the viewport) in the running Obsidian.
const fs = require("fs");

const OUT = process.argv[2];
const SELECTOR = process.argv[3] || null;

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
  await new Promise((r) => setTimeout(r, 500));

  let clip;
  if (SELECTOR) {
    const r = await send("Runtime.evaluate", {
      expression: `(() => {
        const nodes = [...document.querySelectorAll(${JSON.stringify(SELECTOR)})];
        let best = null, bestArea = 0;
        for (const e of nodes) { const r = e.getBoundingClientRect(); const a = r.width * r.height; if (a > bestArea) { bestArea = a; best = r; } }
        if (!best) return null;
        return { x: best.x, y: best.y, width: best.width, height: best.height };
      })()`,
      returnByValue: true,
    });
    clip = r.result.value;
    if (!clip) { console.error("selector not found:", SELECTOR); process.exit(3); }
  }

  const shot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: false,
    ...(clip ? { clip: { ...clip, scale: 1.5 } } : {}),
  });
  fs.writeFileSync(OUT, Buffer.from(shot.data, "base64"));
  console.log("png:", fs.statSync(OUT).size, JSON.stringify(clip || "viewport"));
  ws.close();
}

main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
