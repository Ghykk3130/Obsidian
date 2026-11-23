// Render one Peskin page at high scale and capture clipped regions over CDP.
const http = require("http");
const fs = require("fs");
const { spawn } = require("child_process");

const PDF = "D:\\textbooks\\An Introduction To Quantum Field Theory (Michael E. Peskin Daniel V. Schroeder) (Z-Library).pdf";
const PORT = 8767;
const CDP = 9334;
const PAGE = Number(process.argv[2] || 112);
const SCALE = Number(process.argv[3] || 4);

// [name, xFrac, yFrac, wFrac, hFrac]
const CLIPS = [
  ["A", 0.18, 0.16, 0.64, 0.12],
  ["B", 0.16, 0.54, 0.68, 0.08],
  ["C", 0.16, 0.62, 0.68, 0.10],
];

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>pdf</title>
<style>body{margin:0;background:#fff}#out{padding:0}canvas{display:block}
#log{position:fixed;left:0;bottom:0;z-index:9;background:#eee;color:#000;font:12px monospace;margin:0;padding:2px}</style>
</head><body><pre id="log">start</pre><div id="out"></div>
<script type="module">
const log=(m)=>{document.getElementById('log').textContent+=' | '+m};
import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs').then(async (pdfjsLib)=>{
  log('import ok');
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs';
  const doc=await pdfjsLib.getDocument('/peskin.pdf').promise;
  const page=await doc.getPage(${PAGE});
  const vp=page.getViewport({scale:${SCALE}});
  const c=document.createElement('canvas');
  c.width=Math.floor(vp.width); c.height=Math.floor(vp.height);
  c.style.width=vp.width+'px'; c.style.height=vp.height+'px';
  await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
  document.getElementById('out').appendChild(c);
  log('drew ${PAGE} ' + c.width + 'x' + c.height);
  document.title='DONE';
}).catch(e=>{log('ERR '+e.message); document.title='FAIL'});
</script></body></html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/peskin.pdf") {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    fs.createReadStream(PDF).pipe(res);
  } else {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  }
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await new Promise((r) => server.listen(PORT, "127.0.0.1", r));
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const child = spawn(edge, [
    "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
    `--remote-debugging-port=${CDP}`,
    "--user-data-dir=D:\\Obsidian\\Physics\\.dsh\\tmp\\edgeprofile5",
    "--window-size=1600,1200",
    `http://127.0.0.1:${PORT}/`,
  ], { stdio: "ignore" });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    await sleep(500);
    try {
      const list = await fetch(`http://127.0.0.1:${CDP}/json/list`).then((r) => r.json());
      target = list.find((t) => t.type === "page" && /127\.0\.0\.1/.test(t.url || ""));
    } catch (_) {}
  }
  if (!target) { console.log("no target"); child.kill(); server.close(); return; }

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
  await new Promise((res, rej) => { ws.addEventListener("open", res, {once:true}); ws.addEventListener("error", rej, {once:true}); });
  await send("Page.enable", {});
  await send("Runtime.enable", {});

  let title = "";
  for (let i = 0; i < 120; i++) {
    await sleep(500);
    const r = await send("Runtime.evaluate", { expression: "document.title", returnByValue: true });
    title = r.result && r.result.value;
    if (title === "DONE" || title === "FAIL") break;
  }
  console.log("title:", title);

  const rectRes = await send("Runtime.evaluate", {
    expression: "(()=>{const c=document.querySelector('canvas');const r=c.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height};})()",
    returnByValue: true,
  });
  const rect = rectRes.result.value;
  console.log("canvas", JSON.stringify(rect));

  for (const [name, xf, yf, wf, hf] of CLIPS) {
    const shot = await send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
      clip: { x: rect.x + xf * rect.w, y: rect.y + yf * rect.h, width: wf * rect.w, height: hf * rect.h, scale: 1 },
    });
    const out = `D:\\Obsidian\\Physics\\.dsh\\tmp\\peskin${name}.png`;
    fs.writeFileSync(out, Buffer.from(shot.data, "base64"));
    console.log(name, fs.statSync(out).size);
  }

  ws.close();
  child.kill();
  server.close();
  setTimeout(() => process.exit(0), 300);
}

main().catch((e) => { console.error(e); process.exit(1); });
