(async () => {
  const path = "SimpleWick-test.md";
  const md = [
    "# SimpleWick 测试",
    "",
    "交叉收缩 (1,3)+(2,4)：",
    "",
    "$$",
    "\\wickcross{\\phi_1}{\\phi_2\\phi_3}{\\phi_4}",
    "$$",
    "",
    "不相交 (1,2)+(3,4)：",
    "",
    "$$",
    "\\wick{\\phi_1\\phi_2}\\,\\wick{\\phi_3\\phi_4}",
    "$$",
    "",
    "嵌套 (1,4)+(2,3)：",
    "",
    "$$",
    "\\wick{\\phi_1\\wick{\\phi_2\\phi_3}\\phi_4}",
    "$$",
    "",
    "普通两场：",
    "",
    "$$",
    "\\wick{\\phi(x)\\phi(y)} = D_F(x-y)",
    "$$",
  ].join("\n");

  let file = app.vault.getAbstractFileByPath(path);
  if (file) await app.vault.delete(file);
  file = await app.vault.create(path, md);

  const leaf = app.workspace.getLeaf("tab");
  await leaf.openFile(file);
  const view = leaf.view;
  if (view && view.setState) view.setState({ mode: "preview" }, { history: false });
  await new Promise((r) => setTimeout(r, 2500));
  return {
    created: path,
    mode: view && view.getMode ? view.getMode() : null,
    mathContainers: document.querySelectorAll(".markdown-preview-view mjx-container").length,
  };
})()
