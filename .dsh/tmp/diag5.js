(async () => {
  const mj = window.MathJax;
  document.querySelectorAll("#sw-diag").forEach((e) => e.remove());
  const host = document.querySelector(".cm-editor") || document.querySelector(".markdown-preview-view") || document.body;
  const box = document.createElement("div");
  box.id = "sw-diag";
  box.style.cssText = "position:absolute;left:40px;top:40px;z-index:99999;background:#fff;color:#111;font-size:30px";
  host.appendChild(box);
  const node = mj.tex2chtml("\\wick{\\phi(x)\\phi(y)}", { display: true });
  box.appendChild(node);
  document.head.appendChild(mj.chtmlStylesheet());
  for (const s of document.querySelectorAll('style[id^="MJX-"]')) {
    s.dataset.change = s.dataset.change === "1" ? "2" : "1";
  }
  void box.offsetHeight;
  await new Promise((r) => setTimeout(r, 400));

  const c = node.querySelector("mjx-c");
  const r = c ? c.getBoundingClientRect() : null;
  const out = {
    hostTag: host.tagName,
    hostClass: String(host.className).slice(0, 60),
    containerW: Math.round(node.getBoundingClientRect().width),
    cRect: r ? { w: Math.round(r.width), h: Math.round(r.height) } : null,
    cFont: c ? getComputedStyle(c).fontFamily : null,
    cFontSize: c ? getComputedStyle(c).fontSize : null,
  };
  box.remove();
  return out;
})()
