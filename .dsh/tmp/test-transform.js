// Tests for the SimpleWick rewriter.
// Usage: node test-transform.js <path-to-main.js>
const fs = require("fs");

const path = process.argv[2];
const src = fs.readFileSync(path, "utf8");

const stub = { Plugin: class {}, MarkdownView: class {}, Notice: class {}, loadMathJax: async () => {} };
const moduleObj = { exports: {} };
const exported = new Function("module", "exports", "require", src + "\n;return module.exports;")(
  moduleObj, moduleObj.exports, (n) => (n === "obsidian" ? stub : null)
);
const t = exported.transformContractions;
if (typeof t !== "function") { console.error("FAIL: transformContractions not exported"); process.exit(1); }

let failed = 0;
const check = (name, cond, extra) => {
  if (cond) console.log("PASS  " + name);
  else { failed++; console.log("FAIL  " + name); if (extra) console.log("   " + extra); }
};
const struts = (tex) => [...tex.matchAll(/\\rule\{0pt\}\{([\d.]+)em\}/g)].map((m) => Number(m[1]));

// 1. shape of a simple mark
{
  const out = t("\\wick{\\phi(x)\\phi(y)}");
  console.log("\n--- \\wick output ---\n" + out + "\n");
  check("no command left", !/\\wick/.test(out));
  check("hook starts at strut - drop", out.includes("\\rlap{\\rule[0.70em]{0.05em}{0.56em}}"));
  check("hook reaches into the rule", out.includes("\\llap{\\rule[0.70em]{0.05em}{0.56em}}"));
  check("has overline rail", out.includes("\\overline{"));
  check("no horizontal overhang", !out.includes("\\hspace"));
  check("default strut 1.05em", struts(out)[0] === 1.05, JSON.stringify(struts(out)));
  check("body preserved", out.includes("\\overline{\\vphantom{\\rule{0pt}{1.05em}}\\phi(x)\\phi(y)}"));
}

// 2. below variant
{
  const out = t("\\bwick{A B}");
  check("below uses underline", out.includes("\\underline{"));
  check("below has no overline", !out.includes("\\overline{"));
  check("below hook raised past the rule", out.includes("\\rule[-1.26em]{0.05em}{0.56em}"), out);
}

// 3. nesting raises the outer rail
{
  const out = t("\\wick{a\\wick{b}c}");
  const s = struts(out);
  console.log("\n--- nested output ---\n" + out + "\n");
  check("two rails", s.length === 2, JSON.stringify(s));
  check("outer rail above inner", s[0] > s[1] + 0.2, JSON.stringify(s));
  check("outer = inner top + gap", Math.abs(s[0] - (s[1] + 0.26 + 0.30)) < 0.005, JSON.stringify(s));
}

// 4. explicit height overrides
{
  const out = t("\\wick[1.4]{X}");
  check("explicit 1.40em", struts(out)[0] === 1.4, JSON.stringify(struts(out)));
}

// 5. 4-arg form keeps the prefix outside the mark
{
  const out = t("\\contraction{i}{A_\\mu}{}{\\,B^\\mu}");
  check("prefix outside", out.startsWith("i\\rlap{"), out.slice(0, 30));
  check("body joined", out.includes("\\overline{\\vphantom{\\rule{0pt}{1.05em}}A_\\mu\\,B^\\mu}"));
}

// 6. untouched cases
{
  const same = [
    ["unrelated command", "\\frac{a}{b}\\wicked{x}"],
    ["line break then text", "\\\\wick{x}"],
    ["unbalanced", "\\wick{a"],
    ["no brace", "\\wick x"],
    ["plain math", "\\phi(x)\\phi(y)"],
  ];
  for (const [name, input] of same) check("untouched: " + name, t(input) === input, t(input));
}

// 7. escaped braces survive
{
  const out = t("\\wick{\\{a\\}}");
  check("escaped braces preserved", out.includes("\\{a\\}"), out);
}

// 8. line break inside body survives
{
  const out = t("\\wick{a\\\\b}");
  check("line break preserved", out.includes("a\\\\b"), out);
}

// 9. idempotent
{
  const inputs = ["\\wick{a}", "\\wick{a\\wick{b}c}", "\\contraction{p}{A}{m}{B}", "\\bwick{x}"];
  let ok = true;
  for (const inp of inputs) if (t(t(inp)) !== t(inp)) ok = false;
  check("idempotent", ok);
}

// 10. crossing marks
{
  const out = t("\\wickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4}");
  const s = struts(out);
  check("cross: two rails", s.length === 2, JSON.stringify(s));
  check("cross: later rail higher", s[0] > s[1], JSON.stringify(s));
  check("cross: gap equals hook drop", Math.abs(s[0] - (s[1] + 0.35)) < 0.005, JSON.stringify(s));
  check("cross: real text printed last", out.endsWith("\\phi_1\\phi_2\\phi_3\\phi_4"), out.slice(-40));
  check("cross: low rail spans A+B", out.includes("\\phantom{\\phi_1\\phi_2\\phi_3}"));
  check("cross: high rail spans B+C", out.includes("\\phantom{\\phi_2\\phi_3\\phi_4}"));
}

// 11. crossing, below
{
  const out = t("\\bwickcross{a}{b}{c}");
  check("below-cross rails below", (out.match(/\\underline\{/g) || []).length === 2, out);
  check("below-cross two negative rails", (out.match(/\\rule\[-1\.26em\]/g) || []).length === 2, out);
  check("below-cross second rail lower", (out.match(/\\rule\[-1\.61em\]/g) || []).length === 2, out);
}

console.log(failed === 0 ? "\nall good" : `\n${failed} failing`);
process.exit(failed === 0 ? 0 : 1);
