(async () => {
  const mj = window.MathJax;
  document.querySelectorAll("#sw-diag").forEach((e) => e.remove());
  const host = document.querySelector(".cm-editor") || document.body;
  const box = document.createElement("div");
  box.id = "sw-diag";
  box.style.cssText = "position:absolute;left:40px;top:40px;z-index:99999;background:#fff;color:#111;font-size:30px";
  host.appendChild(box);
  const node = mj.tex2chtml("\\wick{\\phi(x)\\phi(y)}", { display: true });
  box.appendChild(node);

  // Obsidian's $te(): detach the stale sheet, append the fresh one, toggle data-change
  const before = [...document.querySelectorAll('style[id^="MJX-CHTML"]')].length;
  for (const s of document.querySelectorAll('style[id^="MJX-CHTML"]')) s.remove();
  const sheet = mj.chtmlStylesheet();
  sheet.dataset.change = "1";
  document.head.appendChild(sheet);
  sheet.dataset.change = "2";
  void box.offsetHeight;
  await new Promise((r) => setTimeout(r, 400));

  const c = node.querySelector("mjx-c");
  const r = c ? c.getBoundingClientRect() : null;
  const out = {
    sheetsBefore: before,
    ruleCount: sheet.sheet ? sheet.sheet.cssRules.length : null,
    hasGlyphRule: sheet.sheet ? [...sheet.sheet.cssRules].some((rule) => /c1D719/.test(rule.cssText)) : null,
    cRect: r ? { w: Math.round(r.width), h: Math.round(r.height) } : null,
    cFont: c ? getComputedStyle(c).fontFamily : null,
    containerW: Math.round(node.getBoundingClientRect().width),
  };
  box.remove();
  return out;
})()
