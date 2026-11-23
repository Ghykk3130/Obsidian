(() => {
  const cs = [...document.querySelectorAll("mjx-container")];
  const info = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const c = el.querySelector("mjx-c");
    const cr = c ? c.getBoundingClientRect() : null;
    return {
      rect: { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) },
      cRect: cr ? { w: Math.round(cr.width), h: Math.round(cr.height) } : null,
      where: el.closest(".markdown-preview-view") ? "preview" : el.closest(".cm-editor") ? "livepreview" : "other",
      jax: el.getAttribute("jax"),
    };
  };
  return {
    total: cs.length,
    first: info(cs[0]),
    second: info(cs[1]),
    active: app.workspace.getActiveFile() ? app.workspace.getActiveFile().path : null,
    modes: app.workspace.getLeavesOfType("markdown").map((l) => (l.view.getMode ? l.view.getMode() : "?")),
  };
})()
