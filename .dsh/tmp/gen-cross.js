// Generate a CHTML test page from the real transform output.
const fs = require("fs");

const [src, outPath] = process.argv.slice(2);
const code = fs.readFileSync(src, "utf8");
const stub = { Plugin: class {}, MarkdownView: class {}, Notice: class {}, loadMathJax: async () => {} };
const m = { exports: {} };
const exported = new Function("module", "exports", "require", code + "\n;return module.exports;")(
  m, m.exports, (n) => (n === "obsidian" ? stub : null)
);
const t = exported.transformContractions;

const cases = [
  ["crossing: (1,3) low + (2,4) high", "\\wickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4}"],
  ["crossing with wider middle: (1,3)+(2,5)", "\\wickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4\\phi_5}"],
  ["below crossing", "\\bwickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4}"],
  ["nested for comparison: (1,4)+(2,3)", "\\wick{\\phi_1\\wick{\\phi_2\\phi_3}\\phi_4}"],
  ["plain wick (regression)", "\\wick{\\phi(x)\\phi(y)} = D_F(x-y)"],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const rows = cases
  .map(([label, tex]) => `<div class="lab">${label}</div><div class="box" data-tex="${esc(t(tex))}"></div>`)
  .join("\n");

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>chtml-cross</title>
<style>
 body{background:#fff;color:#111;margin:0;padding:10px;font-family:Georgia,serif;}
 .lab{font:11px Consolas,monospace;color:#666;margin-top:10px;}
 .box{font-size:34px;min-height:52px;}
</style>
<script>
window.MathJax={tex:{packages:{'[+]':["ams","mathtools","color","enclose","boldsymbol","html","bbox","cancel","physics","braket","mhchem"]},inlineMath:[],displayMath:[],processEscapes:false,processEnvironments:false,processRefs:false},output:{fontPath:'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'},startup:{typeset:false},options:{enableMenu:false}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"></script>
</head><body>
${rows}
<script>
MathJax.startup.promise.then(async () => {
  document.head.appendChild(MathJax.chtmlStylesheet());
  for (const el of document.querySelectorAll('.box')) {
    try { el.appendChild(MathJax.tex2chtml(el.dataset.tex, {display: true})); }
    catch (e) { el.textContent = 'ERROR: ' + e.message; }
  }
  // same refresh Obsidian's finishRenderMath() performs
  for (const s of document.querySelectorAll('style[id^="MJX-"]')) {
    s.dataset.change = s.dataset.change === '1' ? '2' : '1';
  }
  void document.body.offsetHeight;
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  await new Promise(r => setTimeout(r, 300));
  const w = [...document.querySelectorAll('.box mjx-container')].map(c => Math.round(c.getBoundingClientRect().width));
  document.title = 'DONE ' + JSON.stringify(w);
});
</script></body></html>`;

fs.writeFileSync(outPath, html, "utf8");
console.log("wrote", outPath);
