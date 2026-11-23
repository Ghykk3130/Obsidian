(async () => {
  const mj = window.MathJax;
  document.querySelectorAll("#sw-diag").forEach((e) => e.remove());
  const box = document.createElement("div");
  box.id = "sw-diag";
  box.style.cssText = "position:absolute;left:40px;top:40px;z-index:99999;background:#fff;font-size:30px";
  document.body.appendChild(box);
  const node = mj.tex2chtml("\\wick{\\phi(x)\\phi(y)}", { display: true });
  box.appendChild(node);
  document.head.appendChild(mj.chtmlStylesheet());
  for (const s of document.querySelectorAll('style[id^="MJX-"]')) {
    s.dataset.change = s.dataset.change === "1" ? "2" : "1";
  }
  void box.offsetHeight;
  try { await document.fonts.ready; } catch (_) {}
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  const math = node.querySelector("mjx-math");
  const mi = node.querySelector("mjx-mi");
  const c = node.querySelector("mjx-c");
  const cs = math ? getComputedStyle(math) : null;
  const csC = c ? getComputedStyle(c) : null;
  const out = {
    container: node.getBoundingClientRect().toJSON(),
    mathRect: math ? math.getBoundingClientRect().toJSON() : null,
    miRect: mi ? mi.getBoundingClientRect().toJSON() : null,
    cRect: c ? c.getBoundingClientRect().toJSON() : null,
    mathFontSize: cs && cs.fontSize,
    mathFontFamily: cs && cs.fontFamily,
    cFontFamily: csC && csC.fontFamily,
    cFontSize: csC && csC.fontSize,
    fontsStatus: document.fonts.status,
    fontsSize: document.fonts.size,
    loadedFamilies: [...document.fonts].map((f) => f.family + ":" + f.status).slice(0, 20),
    sheets: [...document.querySelectorAll("style")].map((s) => s.id).filter((id) => id && id.startsWith("MJX")),
  };
  box.remove();
  return out;
})()
