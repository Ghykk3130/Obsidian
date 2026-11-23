const fs = require('node:fs');
const path = require('node:path');
const out = process.argv[2];
const dir = path.join(process.env.DSH_INSTALL_DIR, '..', 'dsh-web-frontend', 'dist', 'assets');
const hits = [];
for (const name of fs.readdirSync(dir)) {
  if (!name.endsWith('.js')) continue;
  const t = fs.readFileSync(path.join(dir, name), 'utf8');
  let i = -1, n = 0;
  while ((i = t.indexOf('J2(', i + 1)) >= 0 && n < 8) {
    hits.push(`### ${name} @${i}\n` + t.slice(Math.max(0, i - 500), i + 600).replace(/\n/g, ' '));
    n++;
  }
}
fs.writeFileSync(out, hits.join('\n\n'));
