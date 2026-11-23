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

  const mineC = node.querySelector("mjx-c");
  const noteC = document.querySelector("mjx-container mjx-c");
  const out = {
    mineHTML: node.innerHTML.slice(0, 900),
    noteCHTML: noteC ? noteC.outerHTML.slice(0, 300) : null,
    mineText: mineC && mineC.textContent,
    noteText: noteC && noteC.textContent,
    mineDisplay: mineC && getComputedStyle(mineC).display,
    noteDisplay: noteC && getComputedStyle(noteC).display,
    mineVisibility: mineC && getComputedStyle(mineC).visibility,
    mineAncestors: (() => {
      const names = [];
      let e = mineC;
      while (e && e !== box) { names.push(e.tagName.toLowerCase()); e = e.parentElement; }
      return names;
    })(),
  };
  box.remove();
  return out;
})()
