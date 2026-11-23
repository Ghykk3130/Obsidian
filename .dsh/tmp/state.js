(() => {
  const p = app.plugins && app.plugins.plugins && app.plugins.plugins.simplewick;
  const mj = window.MathJax;
  return {
    obsidian: app.version,
    pluginLoaded: !!p,
    pluginVersion: p && p.manifest ? p.manifest.version : null,
    mathJax: !!mj,
    patched: !!(mj && mj.tex2chtml && mj.tex2chtml.__simplewick),
    enabled: app.plugins.enabledPlugins ? [...app.plugins.enabledPlugins].includes("simplewick") : null,
    active: app.workspace.getActiveFile() ? app.workspace.getActiveFile().path : null,
  };
})()
