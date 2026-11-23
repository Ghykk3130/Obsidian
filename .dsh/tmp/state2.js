(() => {
  const leaves = app.workspace.getLeavesOfType("markdown").map((l) => ({
    path: l.view && l.view.file ? l.view.file.path : null,
    mode: l.view && l.view.getMode ? l.view.getMode() : null,
    visible: !!(l.view && l.view.containerEl && l.view.containerEl.offsetParent !== null),
    w: l.view && l.view.containerEl ? l.view.containerEl.offsetWidth : null,
  }));
  const pv = document.querySelector(".markdown-preview-view");
  const r = pv ? pv.getBoundingClientRect() : null;
  return {
    active: app.workspace.getActiveFile() ? app.workspace.getActiveFile().path : null,
    leaves,
    previewRect: r ? { w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.x), y: Math.round(r.y) } : null,
    containers: document.querySelectorAll("mjx-container").length,
    previewContainers: document.querySelectorAll(".markdown-preview-view mjx-container").length,
    docTitle: document.title,
    innerW: window.innerWidth,
    innerH: window.innerHeight,
  };
})()
