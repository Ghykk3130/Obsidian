// Evaluate a JS expression file inside the running Obsidian and print the result.
const fs = require("fs");

async function main() {
  const expr = fs.readFileSync(process.argv[2], "utf8");
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
  const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true, userGesture: true });
  if (r.exceptionDetails) { console.error(JSON.stringify(r.exceptionDetails, null, 2).slice(0, 1200)); process.exitCode = 1; }
  else console.log(JSON.stringify(r.result && r.result.value, null, 2));
  ws.close();
}

main().catch((e) => { console.error("ERR", e.message); process.exit(1); });
