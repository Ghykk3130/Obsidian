(async () => {
  const mj = window.MathJax;
  document.querySelectorAll("#sw-diag").forEach((e) => e.remove());
  const box = document.createElement("div");
  box.id = "sw-diag";
  box.style.cssText = "position:absolute;left:40px;top:40px;z-index:99999;background:#fff;font-size:30px";
  document.body.appendChild(box);
  const node = mj.tex2chtml("\\wick{\\phi(x)\\phi(y)}", { display: true });
  box.appendChild(node);

  const s1 = mj.chtmlStylesheet();
  document.head.appendChild(s1);
  const s2 = mj.chtmlStylesheet();
  for (const s of document.querySelectorAll('style[id^="MJX-"]')) {
    s.dataset.change = s.dataset.change === "1" ? "2" : "1";
  }
  void box.offsetHeight;
  try { await document.fonts.ready; } catch (_) {}
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  const mine = node.querySelector("mjx-c");
  const note = document.querySelector("mjx-container mjx-c");
  const probeCss = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el, "::before");
    const r = el.getBoundingClientRect();
    return {
      className: el.className,
      before: { content: cs.content, fontFamily: cs.fontFamily, fontSize: cs.fontSize, width: cs.width },
      rect: { w: Math.round(r.width), h: Math.round(r.height) },
    };
  };
  const out = {
    sameStyleElement: s1 === s2,
    styleId: s1 && s1.id,
    styleRuleCount: s1 && s1.sheet ? s1.sheet.cssRules.length : null,
    mine: probeCss(mine),
    note: probeCss(note),
    headStylesheets: [...document.querySelectorAll('style[id^="MJX-"]')].map((s) => ({
      id: s.id,
      rules: s.sheet ? s.sheet.cssRules.length : null,
    })),
  };
  box.remove();
  return out;
})()
