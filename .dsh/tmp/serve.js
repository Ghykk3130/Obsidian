// Serves Peskin page images through a local HTTP server so pdf.js can fetch them.
const http = require("http");
const fs = require("fs");
const { execFile } = require("child_process");

const PDF = "D:\\textbooks\\An Introduction To Quantum Field Theory (Michael E. Peskin Daniel V. Schroeder) (Z-Library).pdf";
const PORT = 8766;

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>pdf</title>
<style>body{margin:0;background:#888}#out{display:flex;gap:6px;padding:6px}canvas{background:#fff}
#log{position:fixed;left:0;top:0;z-index:9;background:#fff;color:#000;font:13px monospace;margin:0;padding:6px;white-space:pre-wrap;max-width:900px}</style>
</head><body><pre id="log">start</pre><div id="out"></div>
<script type="module">
const log = (m) => { document.getElementById('log').textContent += '\\n' + m; };
try {
import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.min.mjs';
log('import ok');
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@4.7.76/build/pdf.worker.min.mjs';
const doc = await pdfjsLib.getDocument('/peskin.pdf').promise;
log('doc ok pages=' + doc.numPages);
for (const n of [112,113]) {
  const page = await doc.getPage(n);
  const vp = page.getViewport({scale:1.35});
  const c = document.createElement('canvas');
  c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
  await page.render({canvasContext:c.getContext('2d'), viewport:vp}).promise;
  document.getElementById('out').appendChild(c);
  log('page ' + n + ' drawn');
}
log('DONE');
} catch (e) { log('ERROR ' + (e && e.message ? e.message : e)); }
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

server.listen(PORT, "127.0.0.1", () => {
  const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const out = "D:\\Obsidian\\Physics\\.dsh\\tmp\\peskin.png";
  execFile(edge, [
    "--headless=new", "--disable-gpu", "--no-first-run",
    "--user-data-dir=D:\\Obsidian\\Physics\\.dsh\\tmp\\edgeprofile3",
    "--screenshot=" + out, "--window-size=1450,1100", "--virtual-time-budget=60000",
    `http://127.0.0.1:${PORT}/`,
  ], { timeout: 120000 }, (err) => {
    if (err) console.log("edge:", err.message);
    console.log("png:", fs.existsSync(out) ? fs.statSync(out).size : "none");
    server.close();
  });
});
