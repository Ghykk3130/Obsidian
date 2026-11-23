/*
 * SimpleWick — Peskin-style field contractions for Obsidian.
 *
 * Obsidian renders every piece of math through MathJax.tex2chtml(latex, opts)
 * (that is what the public renderMath() API does).  We wrap that function and
 * rewrite contraction commands into a small LaTeX construction that draws the
 * mark the way Peskin & Schroeder print it: a horizontal rule with a short
 * vertical hook dropping down at each end, reaching towards the two fields.
 *
 * The mark is built from primitives every MathJax build has:
 *
 *     \rlap{\rule[raise]{w}{h}} \overline{\vphantom{\rule{0pt}{strut}} ... }
 *     \llap{\rule[raise]{w}{h}}
 *
 * `\overline` supplies the horizontal rule with exactly the width of the
 * fields (plus a small overhang from \hspace), and the two \rule's are zero
 * width laps placed at the left and right ends, so their hooks line up with
 * the ends of the rule without measuring anything.
 *
 * Because TeX in MathJax cannot measure a box, the hook geometry is expressed
 * in em against the baseline.  Nested contractions are handled by raising the
 * outer rule: the rewriter tracks the tallest mark it produced inside a body
 * and gives the enclosing one a taller strut, so stacked rules stay apart.
 *
 * Syntax
 *   \wick[n]{X}                  typeset X, rule with hooks above
 *   \bwick[n]{X}                 same, rule with hooks below
 *   \contraction[n]{pre}{A}{mid}{B}   typeset pre A mid B, mark over A mid B
 *   \bcontraction[n]{pre}{A}{mid}{B}  same, mark below
 *   \wickcross[n]{A}{B}{C}     crossing marks: over A+B (low) and B+C (high)
 *   \bwickcross[n]{A}{B}{C}    same, below
 *   \acontraction, \contracted, \acontracted, \bcontracted — aliases
 *
 * `n` is the height of the rule above the baseline, in em (default 1.05).
 */

const { Plugin, MarkdownView, Notice, loadMathJax } = require("obsidian");

// Geometry, all in em against the baseline.
const DEFAULT_STRUT = 1.05; // rule height when nothing forces it higher
const HOOK_DROP = 0.35; // how far a hook reaches down below the rule
const HOOK_W = 0.05; // hook thickness
// \overline puts its rule RAIL_GAP above the top of the box (0.18em is what
// Obsidian's CHTML output uses: mjx-over { padding-bottom: 0.18em }).  The hook
// is made long enough to run into the rule instead of stopping short of it.
const RAIL_GAP = 0.18;
const RAIL_THICK = 0.06;
const HOOK_LEN = HOOK_DROP + RAIL_GAP + RAIL_THICK / 2; // 0.56
const STACK_GAP = 0.30; // minimum clearance between stacked rules
const RAIL = RAIL_GAP + RAIL_THICK + 0.02; // height a finished mark adds above its strut
// For crossing marks the later rule sits exactly one hook-drop higher, so its
// hooks land on the earlier rule — the way Peskin prints Eq. (4.39).
const CROSS_GAP = HOOK_DROP;

/** name -> { below: boolean, arity: 1 | 3 | 4 } */
const CONTRACTION_COMMANDS = Object.create(null);
for (const name of ["wick", "contraction", "acontraction", "contracted", "acontracted"]) {
  CONTRACTION_COMMANDS[name] = { below: false, arity: name === "wick" ? 1 : 4 };
}
for (const name of ["bwick", "bcontraction", "bcontracted"]) {
  CONTRACTION_COMMANDS[name] = { below: true, arity: name === "bwick" ? 1 : 4 };
}
CONTRACTION_COMMANDS.wickcross = { below: false, arity: 3 };
CONTRACTION_COMMANDS.bwickcross = { below: true, arity: 3 };

// Cheap reject so ordinary formulas never enter the character loop.
const TRIGGER = /\\[ab]?(?:wick|contraction|contracted)/;

const IS_LETTER = /[A-Za-z]/;
const IS_SPACE = /[ \t\r\n]/;

const fmt = (n) => (Math.round(n * 100) / 100).toFixed(2);

/**
 * s[i] must be "{". Returns the balanced group starting there, honouring
 * backslash escapes (so "\{" does not open a group) and "\\" line breaks.
 */
function matchGroup(s, i) {
  if (s[i] !== "{") return null;
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (c === "\\") {
      j++; // skip the escaped character, whatever it is
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return { content: s.slice(i + 1, j), end: j + 1 };
    }
  }
  return null;
}

/** s[i] must be "[". Returns the optional argument up to the first unescaped "]". */
function matchOptional(s, i) {
  if (s[i] !== "[") return null;
  for (let j = i + 1; j < s.length; j++) {
    const c = s[j];
    if (c === "\\") {
      j++;
      continue;
    }
    if (c === "]") return { content: s.slice(i + 1, j), end: j + 1 };
  }
  return null;
}

function skipSpaces(s, i) {
  while (i < s.length && IS_SPACE.test(s[i])) i++;
  return i;
}

/**
 * A rule with hooks, spanning the natural width of `widthText`.
 * `widthText` is either the real content (a wrapping mark) or a \phantom of it
 * (an overlay mark, where the real content is printed afterwards).
 */
function railAbove(widthText, strut) {
  const raise = fmt(strut - HOOK_DROP);
  const hook = `\\rule[${raise}em]{${fmt(HOOK_W)}em}{${fmt(HOOK_LEN)}em}`;
  return (
    `\\rlap{${hook}}` +
    `\\overline{\\vphantom{\\rule{0pt}{${fmt(strut)}em}}${widthText}}` +
    `\\llap{${hook}}`
  );
}

/** Same, mirror-below the baseline. */
function railBelow(widthText, strut) {
  const raise = fmt(-(strut + HOOK_LEN - HOOK_DROP));
  const hook = `\\rule[${raise}em]{${fmt(HOOK_W)}em}{${fmt(HOOK_LEN)}em}`;
  return (
    `\\rlap{${hook}}` +
    `\\underline{\\vphantom{\\rule[-${fmt(strut)}em]{0pt}{0.01em}}${widthText}}` +
    `\\llap{${hook}}`
  );
}

/**
 * Two crossing marks sharing the middle segment: one over A+B, one over B+C.
 * Both are zero-width overlays laid on top of the text A B C that follows, so
 * the same tokens are printed once and marked twice.
 */
function crossMarks(A, B, C, h1, h2, below) {
  const rail = below ? railBelow : railAbove;
  // low mark: starts at the very beginning, covers A+B
  const low = `\\rlap{${rail(`\\phantom{${A}${B}}`, h1)}}`;
  // high mark: starts after A, covers B+C
  const high = `\\rlap{\\phantom{${A}}\\rlap{${rail(`\\phantom{${B}${C}}`, h2)}}}`;
  return `${high}${low}${A}${B}${C}`;
}

/**
 * Rewrite contractions inside `s`.
 * Returns { tex, top } where `top` is how far the tallest mark reaches above
 * the baseline, so an enclosing mark can be placed above it.
 */
function transformNode(s) {
  if (typeof s !== "string" || !TRIGGER.test(s)) return { tex: s, top: 0 };

  let out = "";
  let i = 0;
  let top = 0;
  let touched = false;

  while (i < s.length) {
    const c = s[i];

    if (c !== "\\") {
      out += c;
      i++;
      continue;
    }

    // "\\" is a line break, not the start of a command.
    if (s[i + 1] === "\\") {
      out += "\\\\";
      i += 2;
      continue;
    }

    let j = i + 1;
    let name = "";
    while (j < s.length && IS_LETTER.test(s[j])) {
      name += s[j];
      j++;
    }

    const spec = name ? CONTRACTION_COMMANDS[name] : null;
    if (!spec) {
      // Control symbol (\{, \,, …) or an unrelated command: copy it verbatim
      // and resume after it so its letters are not rescanned.
      const stop = j === i + 1 ? i + 1 : j;
      out += s.slice(i, stop);
      i = stop;
      continue;
    }

    // optional [height], then 1 or 4 mandatory {...} groups
    let k = skipSpaces(s, j);
    let explicit = null;
    if (s[k] === "[") {
      const opt = matchOptional(s, k);
      if (opt) {
        const n = parseFloat(opt.content);
        if (Number.isFinite(n) && n > 0) explicit = n;
        k = skipSpaces(s, opt.end);
      }
    }

    if (s[k] !== "{") {
      // Not a call we understand (e.g. the user defined the name themselves).
      out += s.slice(i, j);
      i = j;
      continue;
    }

    const groups = [];
    let cursor = k;
    while (groups.length < spec.arity) {
      cursor = skipSpaces(s, cursor);
      const g = matchGroup(s, cursor);
      if (!g) break;
      groups.push(g.content);
      cursor = g.end;
    }

    if (groups.length !== spec.arity) {
      out += s.slice(i, j);
      i = j;
      continue;
    }

    touched = true;

    // The marked span: one group for \wick, A mid B for the 4-arg forms,
    // the three segments for \wickcross.
    const parts =
      spec.arity === 1 ? [groups[0]]
        : spec.arity === 3 ? groups
          : [groups[1], groups[2], groups[3]];
    const nodes = parts.map(transformNode);
    const body = nodes.map((n) => n.tex).join("");
    const bodyTop = nodes.reduce((m, n) => Math.max(m, n.top), 0);
    const strut = explicit !== null ? explicit : Math.max(DEFAULT_STRUT, bodyTop + STACK_GAP);

    if (spec.arity === 4) {
      const pre = transformNode(groups[0]);
      out += pre.tex;
      top = Math.max(top, pre.top);
    }

    if (spec.arity === 3) {
      const h2 = strut + CROSS_GAP;
      out += crossMarks(nodes[0].tex, nodes[1].tex, nodes[2].tex, strut, h2, spec.below);
      if (!spec.below) top = Math.max(top, h2 + RAIL);
    } else {
      out += spec.below ? railBelow(body, strut) : railAbove(body, strut);
      if (!spec.below) top = Math.max(top, strut + RAIL);
    }

    i = cursor;
  }

  return { tex: touched ? out : s, top };
}

/** Public entry point: rewrite contractions, return the LaTeX string. */
function transformContractions(s) {
  return transformNode(s).tex;
}

class SimpleWickPlugin extends Plugin {
  async onload() {
    this._patch = null;
    this._cancelled = false;
    this.register(() => {
      this._cancelled = true;
    });

    this.addCommand({
      id: "wrap-contraction-above",
      name: "Wrap selection in field contraction (mark above)",
      editorCallback: (editor) => this.wrapSelection(editor, "wick"),
    });

    this.addCommand({
      id: "wrap-contraction-below",
      name: "Wrap selection in field contraction (mark below)",
      editorCallback: (editor) => this.wrapSelection(editor, "bwick"),
    });

    this.addCommand({
      id: "show-status",
      name: "Show contraction support status",
      callback: () => {
        new Notice(this.isActive() ? "SimpleWick: active." : "SimpleWick: inactive — MathJax was not patched.");
      },
    });

    // Do not block Obsidian's startup on MathJax.  Notes rendered before the
    // patch lands are fixed up by the re-render at the end of install().
    this._installing = this.install();
  }

  wrapSelection(editor, command) {
    const selected = editor.getSelection();
    const inner = selected.trim();
    if (!inner) return;
    const leading = selected.slice(0, selected.indexOf(inner));
    const trailing = selected.slice(leading.length + inner.length);
    editor.replaceSelection(`${leading}\\${command}{${inner}}${trailing}`);
  }

  async install() {
    try {
      if (typeof loadMathJax === "function") {
        await loadMathJax();
      }
    } catch (error) {
      console.error("SimpleWick: loadMathJax() failed", error);
    }

    // MathJax may still be warming up (or loadMathJax may be missing on an old
    // build); poll briefly instead of giving up.
    const mathJax = await this.waitForMathJax(200, 60);
    if (this._cancelled) return;
    if (!mathJax) {
      console.error("SimpleWick: MathJax.tex2chtml never became available; contractions are inactive");
      new Notice("SimpleWick: MathJax was not found, contractions are inactive.");
      return;
    }

    const original = mathJax.tex2chtml;
    const patched = function (tex, options) {
      let input = tex;
      if (typeof tex === "string" && tex.indexOf("\\") >= 0) {
        try {
          input = transformContractions(tex);
        } catch (error) {
          console.error("SimpleWick: could not rewrite contractions", error);
          input = tex;
        }
      }
      return original.call(this, input, options);
    };
    // Mark the wrapper so a second install (plugin reload) does not stack.
    patched.__simplewick = true;
    if (!original.__simplewick) {
      mathJax.tex2chtml = patched;
      this._patch = { mathJax, original, patched };
    }

    this.rerenderActiveNote();
  }

  async waitForMathJax(intervalMs, attempts) {
    for (let n = 0; n < attempts && !this._cancelled; n++) {
      const mj = typeof window !== "undefined" ? window.MathJax : null;
      if (mj && typeof mj.tex2chtml === "function") return mj;
      if (n < attempts - 1) {
        await new Promise((resolve) => window.setTimeout(resolve, intervalMs));
      }
    }
    const mj = typeof window !== "undefined" ? window.MathJax : null;
    return mj && typeof mj.tex2chtml === "function" ? mj : null;
  }

  isActive() {
    const mj = typeof window !== "undefined" ? window.MathJax : null;
    return !!(mj && typeof mj.tex2chtml === "function" && mj.tex2chtml.__simplewick);
  }

  rerenderActiveNote() {
    try {
      const view = this.app.workspace.getActiveViewOfType(MarkdownView);
      const preview = view && view.previewMode;
      if (preview && typeof preview.rerender === "function") preview.rerender(true);
    } catch (error) {
      // A non-markdown view, or an Obsidian version without previewMode: the
      // next render picks up the patch anyway.
    }
  }

  onunload() {
    const patch = this._patch;
    if (patch && patch.mathJax.tex2chtml === patch.patched) {
      patch.mathJax.tex2chtml = patch.original;
    }
    this._patch = null;
  }
}

module.exports = SimpleWickPlugin;
module.exports.transformContractions = transformContractions;
module.exports.CONTRACTION_COMMANDS = CONTRACTION_COMMANDS;
