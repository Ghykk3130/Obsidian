(async () => {
  const mj = window.MathJax;
  document.querySelectorAll("#sw-measure").forEach((e) => e.remove());
  const box = document.createElement("div");
  box.id = "sw-measure";
  box.style.cssText = "position:absolute;left:40px;top:40px;z-index:99999;background:#fff;font-size:100px";
  document.body.appendChild(box);
  const node = mj.tex2chtml("\\wick{\\phi(x)\\phi(y)}", { display: true });
  box.appendChild(node);
  await new Promise((r) => setTimeout(r, 400));

  const R = (e) => {
    if (!e) return null;
    const r = e.getBoundingClientRect();
    return { l: +r.left.toFixed(1), r: +r.right.toFixed(1), w: +r.width.toFixed(1) };
  };
  const over = node.querySelector("mjx-over");
  const glyphs = [...node.querySelectorAll("mjx-c")];
  const hooks = [...node.querySelectorAll("mjx-mspace")];
  const math = node.querySelector("mjx-math");
  const out = {
    fontSize: getComputedStyle(node.querySelector("mjx-math")).fontSize,
    math: R(math),
    over: R(over),
    firstGlyph: R(glyphs[0]),
    lastGlyph: R(glyphs[glyphs.length - 1]),
    hooks: hooks.map(R),
    innerHTMLHead: node.innerHTML.slice(0, 700),
  };
  // offsets in em
  if (out.over && out.firstGlyph && out.hooks.length >= 2) {
    const em = parseFloat(out.fontSize);
    out.offsetsEm = {
      hookLeftVsGlyphLeft: +((out.hooks[0].l - out.firstGlyph.l) / em).toFixed(3),
      hookRightVsGlyphRight: +((out.hooks[out.hooks.length - 1].r - out.lastGlyph.r) / em).toFixed(3),
      overLeftVsHookLeft: +((out.over.l - out.hooks[0].l) / em).toFixed(3),
      overRightVsHookRight: +((out.over.r - out.hooks[hooks.length - 1].r) / em).toFixed(3),
    };
  }
  box.remove();
  return out;
})()
