/*
 * SimpleWick for Obsidian
 *
 * A MathJax port of the public definitions in simplewick.sty v1.2a.
 * The original package uses TeX boxes and dimensions.  MathJax does not
 * expose those TeX primitives, so the contraction marks below use stretchy
 * overbrace/underbrace nodes over invisible copies of the supplied math.
 * The four argument grouping and the optional height argument are retained.
 */

const { Plugin, Notice } = require("obsidian");

// MathJax's config-macros syntax is [replacement, totalArgumentCount,
// optionalFirstArgumentDefault].  A total count of 5 therefore means the
// optional height plus the four required arguments from simplewick.sty.
const SIMPLEWICK_MACROS = {
  // Private helpers.  They are intentionally prefixed to avoid colliding with
  // macros in a user's vault.
  simplewickAbove: [
    String.raw`\hphantom{#2}\overset{\overbrace{\vphantom{\rule{0pt}{#1}}\phantom{#3#4#5}}}{\vphantom{#3#4#5}}`,
    5
  ],
  simplewickBelow: [
    String.raw`\hphantom{#2}\underset{\underbrace{\vphantom{\rule{0pt}{#1}}\phantom{#3#4#5}}}{\vphantom{#3#4#5}}`,
    5
  ],

  // \acontraction[height]{before}{start}{bridge}{end}
  acontraction: [String.raw`\simplewickAbove{#1}{#2}{#3}{#4}{#5}`, 5, "1ex"],

  // \acontracted[height]{before}{start}{bridge}{end}
  acontracted: [
    String.raw`\simplewickAbove{#1}{#2}{#3}{#4}{#5}{#2#3#4#5}`,
    5,
    "1ex"
  ],

  // The package's historical spelling is an alias of \acontraction.
  contraction: [String.raw`\simplewickAbove{#1}{#2}{#3}{#4}{#5}`, 5, "1ex"],

  // \bcontraction[height]{before}{start}{bridge}{end}
  bcontraction: [String.raw`\simplewickBelow{#1}{#2}{#3}{#4}{#5}`, 5, "1ex"],

  // \bcontracted[height]{before}{start}{bridge}{end}
  bcontracted: [
    String.raw`\simplewickBelow{#1}{#2}{#3}{#4}{#5}{#2#3#4#5}`,
    5,
    "1ex"
  ],

  // MathJax already uses fixed rendering metrics for TeX glue.  Grouping the
  // argument preserves the macro's scope and is the closest portable mapping.
  nomathglue: [String.raw`{#1}`, 1],

  simplewickcontact: String.raw`\texttt{kolorenc@fzu.cz}`
};

const MACRO_NAMES = Object.keys(SIMPLEWICK_MACROS);

function getMathJax() {
  return typeof window !== "undefined" && window.MathJax ? window.MathJax : null;
}

function getTexConfig(mathJax) {
  if (!mathJax.config) mathJax.config = {};
  if (!mathJax.config.tex) mathJax.config.tex = {};
  if (!mathJax.config.tex.macros) mathJax.config.tex.macros = {};
  return mathJax.config.tex;
}

/**
 * Best-effort registration for an input jax that was created before this
 * plugin loaded. MathJax's internal modules are deliberately optional here:
 * Obsidian versions that do not expose them still receive tex.macros and the
 * startup hook below.
 */
function installIntoActiveInputJax(mathJax) {
  const startup = mathJax.startup;
  const inputJaxCollection = startup && startup.document && startup.document.inputJax;
  const inputJax = Array.isArray(inputJaxCollection)
    ? inputJaxCollection.find((jax) => jax && (jax.name === "TeX" || jax.constructor?.name === "TeX")) || inputJaxCollection[0]
    : inputJaxCollection;
  // MathJax 3 stores the parser state as _parseOptions after startup. Older
  // builds expose parseOptions directly, so support both layouts.
  const parseOptions = inputJax && (inputJax._parseOptions || inputJax.parseOptions);
  const handlers = parseOptions && parseOptions.handlers;
  if (!handlers) return null;

  let map;
  if (typeof handlers.retrieve === "function") {
    try {
      map = handlers.retrieve("configmacros-map");
    } catch (_error) {
      map = null;
    }
  }
  // In Obsidian's bundled MathJax, handlers.get('macro')._configuration.items
  // contains the active MacroMap instances. The config-macros map is the one
  // that must be updated after the input jax has already been constructed.
  if (!map && typeof handlers.get === "function") {
    const macroHandler = handlers.get("macro");
    const items = macroHandler && macroHandler._configuration && macroHandler._configuration.items;
    for (const entry of Object.values(items || {})) {
      const candidate = entry && entry.item;
      if (candidate && candidate._name === "configmacros-map") {
        map = candidate.map;
        break;
      }
    }
  }
  if (!map || typeof map.add !== "function") return null;

  const texInternals = mathJax._ && mathJax._.input && mathJax._.input.tex;
  const Macro = texInternals && texInternals.Token && texInternals.Token.Macro;
  const newcommand = texInternals && texInternals.newcommand && texInternals.newcommand.NewcommandMethods;
  const macroMethod =
    (newcommand && newcommand.default && newcommand.default.Macro) ||
    (newcommand && newcommand.Macro);
  if (typeof Macro !== "function" || typeof macroMethod !== "function") return null;

  const previous = new Map();
  const added = new Map();
  for (const name of MACRO_NAMES) {
    const old = typeof map.lookup === "function" ? map.lookup(name) : null;
    previous.set(name, old || null);
    const definition = typeof SIMPLEWICK_MACROS[name] === "string"
      ? [SIMPLEWICK_MACROS[name]]
      : SIMPLEWICK_MACROS[name];
    const replacement = new Macro(name, macroMethod, definition);
    map.add(name, replacement);
    added.set(name, replacement);
  }
  return { map, previous, added };
}

/**
 * Add the definitions both to the startup configuration and, when possible,
 * to an already-created TeX input jax.  The latter makes the plugin tolerant
 * of Obsidian versions that initialize MathJax before community plugins load.
 */
function installIntoMathJax(mathJax) {
  if (!mathJax) return null;

  const tex = getTexConfig(mathJax);
  const macros = tex.macros;
  const previous = new Map();

  for (const name of MACRO_NAMES) {
    previous.set(name, {
      present: Object.prototype.hasOwnProperty.call(macros, name),
      value: macros[name]
    });
    macros[name] = SIMPLEWICK_MACROS[name];
  }

  // MathJax reads tex.macros while its startup document is being built.  Hook
  // defaultReady so a plugin loaded during startup is registered before that
  // document is created.  The wrapper is restored on unload.
  const startup = mathJax.startup;
  let originalDefaultReady = null;
  let wrappedDefaultReady = null;
  if (startup && typeof startup.defaultReady === "function") {
    originalDefaultReady = startup.defaultReady;
    wrappedDefaultReady = function simplewickDefaultReady() {
      // Keep the config current in case another plugin replaced tex.macros.
      const currentTex = getTexConfig(mathJax);
      Object.assign(currentTex.macros, SIMPLEWICK_MACROS);
      return originalDefaultReady.apply(this, arguments);
    };

    // Avoid wrapping the same startup object more than once.
    if (!startup.defaultReady.__simplewickWrapped) {
      wrappedDefaultReady.__simplewickWrapped = true;
      wrappedDefaultReady.__simplewickOriginal = originalDefaultReady;
      startup.defaultReady = wrappedDefaultReady;
    } else {
      wrappedDefaultReady = startup.defaultReady;
      originalDefaultReady = wrappedDefaultReady.__simplewickOriginal || null;
    }
  }

  // If MathJax is already running, update the active input-jax options too.
  // This is harmless on builds that expose only config.tex.macros and lets a
  // subsequent typeset pass see the definitions on builds that expose options.
  const activeDocument = startup && startup.document;
  const inputJax = activeDocument && activeDocument.inputJax;
  const activeMapState = installIntoActiveInputJax(mathJax);
  if (inputJax) {
    if (inputJax.options && inputJax.options.macros) {
      Object.assign(inputJax.options.macros, SIMPLEWICK_MACROS);
    }
    if (inputJax.parseOptions && inputJax.parseOptions.options && inputJax.parseOptions.options.macros) {
      Object.assign(inputJax.parseOptions.options.macros, SIMPLEWICK_MACROS);
    }
  }

  return {
    mathJax,
    tex,
    macros,
    previous,
    startup,
    originalDefaultReady,
    wrappedDefaultReady,
    activeMapState
  };
}

function uninstallFromMathJax(state) {
  if (!state) return;

  const restore = (macros) => {
    if (!macros) return;
    for (const name of MACRO_NAMES) {
      const old = state.previous.get(name);
      if (!old) continue;
      // Do not erase a value installed by a later plugin/user after us.
      if (macros[name] !== SIMPLEWICK_MACROS[name]) continue;
      if (old.present) macros[name] = old.value;
      else delete macros[name];
    }
  };

  restore(state.macros);
  if (state.tex && state.tex.macros !== state.macros) restore(state.tex.macros);

  if (state.activeMapState) {
    const { map, previous, added } = state.activeMapState;
    for (const name of MACRO_NAMES) {
      if (!map || typeof map.lookup !== "function" || map.lookup(name) !== added.get(name)) continue;
      const old = previous.get(name);
      if (old && typeof map.add === "function") map.add(name, old);
      else if (typeof map.remove === "function") map.remove(name);
    }
  }

  if (
    state.startup &&
    state.wrappedDefaultReady &&
    state.startup.defaultReady === state.wrappedDefaultReady &&
    state.originalDefaultReady
  ) {
    state.startup.defaultReady = state.originalDefaultReady;
  }
}

class SimpleWickPlugin extends Plugin {
  async onload() {
    this._simplewickState = null;
    this._simplewickTimer = null;

    const tryInstall = () => {
      if (this._simplewickState) return true;
      const mathJax = getMathJax();
      if (!mathJax) return false;
      this._simplewickState = installIntoMathJax(mathJax);
      return Boolean(this._simplewickState);
    };

    if (!tryInstall() && typeof window !== "undefined" && window.setInterval) {
      // MathJax can be loaded lazily by Obsidian.  Retry briefly rather than
      // failing plugin startup when the renderer is not ready yet.
      this._simplewickTimer = window.setInterval(() => {
        if (tryInstall()) {
          window.clearInterval(this._simplewickTimer);
          this._simplewickTimer = null;
        }
      }, 250);
      this.register(() => {
        if (this._simplewickTimer !== null) {
          window.clearInterval(this._simplewickTimer);
          this._simplewickTimer = null;
        }
      });
    }

    this.addCommand({
      id: "show-macro-list",
      name: "Show SimpleWick macro list",
      callback: () => {
        new Notice("SimpleWick: \\acontraction, \\acontracted, \\contraction, \\bcontraction, \\bcontracted, \\nomathglue, \\simplewickcontact");
      }
    });
  }

  onunload() {
    if (this._simplewickTimer !== null && typeof window !== "undefined") {
      window.clearInterval(this._simplewickTimer);
      this._simplewickTimer = null;
    }
    uninstallFromMathJax(this._simplewickState);
    this._simplewickState = null;
  }
}

module.exports = SimpleWickPlugin;

