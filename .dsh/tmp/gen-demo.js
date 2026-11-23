// Build a render page from the real transform output.
const fs = require("fs");

const path = process.argv[2];
const outPath = process.argv[3];
const src = fs.readFileSync(path, "utf8");
const stub = { Plugin: class {}, MarkdownView: class {}, Notice: class {}, loadMathJax: async () => {} };
const m = { exports: {} };
const exported = new Function("module", "exports", "require", src + "\n;return module.exports;")(
  m, m.exports, (n) => (n === "obsidian" ? stub : null)
);
const t = exported.transformContractions;

const demos = [
  ["Peskin (4.36): propagator as a contraction", String.raw`\wick{\phi(x)\phi(y)} = D_F(x-y)`],
  ["Peskin (4.37) shape, inside a T-product", String.raw`\langle 0 | T\{ \wick{\phi(x)\phi(y)} \} | 0 \rangle`],
  ["fermion line", String.raw`\wick{\bar\psi(x)\,\gamma^\mu\,\psi(y)}`],
  ["stacked (nested) — outer rail lifts automatically", String.raw`\wick{\bar\psi(x)\,\wick{\gamma^\mu}\,\psi(y)}`],
  ["several disjoint contractions", String.raw`\wick{\phi_1\phi_2}\,\wick{\phi_3\phi_4}`],
  ["4-arg form: prefix outside the mark", String.raw`i\contraction{}{A_\mu}{}{\,B^\mu} = i\,A_\mu B^\mu`],
  ["mark below", String.raw`\bwick{\phi(x)\phi(y)}`],
  ["inline in a sentence", String.raw`\text{so } \wick{\phi(x)\phi(y)} \text{ is the propagator}`],
  ["explicit taller rail", String.raw`\wick[1.5]{\wick[1.05]{\bar\psi(x)}\,\psi(y)}`],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const rows = demos
  .map(([label, tex]) => `<div class="row"><div class="label">${label}</div><div class="box" data-tex="${esc(t(tex))}"></div></div>`)
  .join("\n");

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>wick demo</title>
<style>
 body{background:#fff;color:#111;font-family:Georgia,serif;padding:10px;}
 .row{margin:4px 0;padding:3px 10px;border-left:3px solid #e3e3e3;}
 .label{font-family:Consolas,monospace;font-size:11px;color:#666;}
 .box{font-size:30px;min-height:52px;margin-top:2px;}
</style>
<script>
window.MathJax={tex:{packages:{'[+]':["enclose","ams","boldsymbol","color","html","mathtools","physics","braket","cancel"]},inlineMath:[],displayMath:[],processEscapes:false,processEnvironments:false,processRefs:false},startup:{typeset:false},options:{enableMenu:false}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js"></script>
</head><body>
${rows}
<script>
MathJax.startup.promise.then(()=>{
  document.head.appendChild(MathJax.svgStylesheet());
  for (const el of document.querySelectorAll('.box')) {
    try { const n=MathJax.tex2svg(el.dataset.tex,{display:true}); el.textContent=''; el.appendChild(n); }
    catch(e){ el.textContent='ERROR: '+e.message; }
  }
  document.title='DONE';
});
</script></body></html>`;

fs.writeFileSync(outPath, html, "utf8");
console.log("wrote", outPath);
