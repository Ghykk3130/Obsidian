// Open the usage note (to initialise Obsidian's math CSS), then measure the mark.
const fs = require("fs");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const list = await fetch("http://127.0.0.1:9222/json/list").then((r) => r.json());
  const target = list.find((t) => t.type === "page" && /obsidian/i.test(t.url || ""));
  if (!target) { console.error("no target"); process.exit(2); }

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();
  const send = (method, params) => new Promise((resolve, reject) => {
    const mid = id++;
    pending.set(mid, { resolve, reject });
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const p = pending.get(msg.id); pending.delete(msg.id);
      msg.error ? p.reject(new Error(JSON.stringify(msg.error))) : p.resolve(msg.result);
    }
  });
  await new Promise((res, rej) => { ws.addEventListener("open", res, { once: true }); ws.addEventListener("error", rej, { once: true }); });
  await send("Runtime.enable", {});
  const evalJs = async (expr) => {
    const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true });
    if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails).slice(0, 700));
    return r.result && r.result.value;
  };

  await evalJs(`(async () => {
    const f = app.vault.getAbstractFileByPath("Notes/SimpleWick 用法.md");
    const leaf = app.workspace.getLeaf("tab");
    await leaf.openFile(f);
    if (leaf.view && leaf.view.setState) leaf.view.setState({ mode: "preview" }, { history: false });
    await new Promise(r => setTimeout(r, 2500));
    return true;
  })()`);

  const out = await evalJs(fs.readFileSync(process.argv[2], "utf8"));
  console.log(JSON.stringify(out, null, 2));
  ws.close();
}

main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
