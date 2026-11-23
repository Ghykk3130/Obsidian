// Serve the PDF + drive headless Edge over CDP, screenshot only after the page is done.
const http = require("http");
const fs = require("fs");
const { spawn } = require("child_process");

const PDF = "D:\\textbooks\\An Introduction To Quantum Field Theory (Michael E. Peskin Daniel V. Schroeder) (Z-Library).pdf";
const PORT = 8766;
const CDP = 9333;
const OUT = "D:\\Obsidian\\Physics\\.dsh\\tmp\\peskin.png";
const PAGES = process.argv.slice(2).map(Number);

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>pdf</title>
<style>body{margin:0;background:#888}#out{display:flex;gap:6px;padding:6px}canvas{background:#fff}
#log{position:fixed;left:0;bottom:0;z-index:9;background:#fff;color:#000;font:12px monospace;margin:0;padding:4px;white-space:pre-wrap;max-width:1200px}</style>
</head><body><pre id="log">start</pre><div id="out"></div>
<script type="module">
const log=(m)=>{document.getElementById('log').textContent+=' | '+m};
try{
import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs').then(async (pdfjsLib)=>{
  log('import ok');
  pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs';
  const doc=await pdfjsLib.getDocument('/peskin.pdf').promise;
  log('pages='+doc.numPages);
  for(const n of ${JSON.stringify(PAGES)}){
    const page=await doc.getPage(n);
    const vp=page.getViewport({scale:1.4});
    const c=document.createElement('canvas');
    c.width=Math.floor(vp.width); c.height=Math.floor(vp.height);
    await page.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
    document.getElementById('out').appendChild(c);
    log('drew '+n);
  }
  document.title='DONE';
}).catch(e=>{log('ERR '+e.message); document.title='FAIL'});
}catch(e){log('ERR2 '+e.message); document.title='FAIL'}
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
    "--user-data-dir=D:\\Obsidian\\Physics\\.dsh\\tmp\\edgeprofile4",
    "--window-size=1450,1100",
    `http://127.0.0.1:${PORT}/`,
  ], { stdio: "ignore" });

  let target = null;
  for (let i = 0; i < 60 && !target; i++) {
    await sleep(500);
    try {
      const list = await fetch(`http://127.0.0.1:${CDP}/json/list`).then((r) => r.json());
      target = list.find((t) => t.type === "page" && /127\.0\.0\.1/.test(t.url || ""));
    } catch (_) { /* not up yet */ }
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

  const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
  fs.writeFileSync(OUT, Buffer.from(shot.data, "base64"));
  console.log("png:", fs.statSync(OUT).size);

  ws.close();
  child.kill();
  server.close();
  setTimeout(() => process.exit(0), 300);
}

main().catch((e) => { console.error(e); process.exit(1); });
