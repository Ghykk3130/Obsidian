(async () => {
  await app.plugins.disablePlugin("simplewick");
  await app.plugins.enablePlugin("simplewick");
  await new Promise((r) => setTimeout(r, 1000));
  const p = app.plugins.plugins.simplewick;
  return {
    loaded: !!p,
    version: p && p.manifest.version,
    patched: !!(window.MathJax && window.MathJax.tex2chtml && window.MathJax.tex2chtml.__simplewick),
    hasCross: !!(p && p.constructor),
  };
})()
