# SimpleWick Obsidian test

This note verifies the SimpleWick plugin in the active vault.

## Test formulas

Inline contraction: $\acontraction{}{A}{B}{C} ABC$

Display contraction mark:

$$
\acontraction{}{A}{B}{C}
\acontraction[2ex]{A}{B}{C}{D}
ABCD
$$

Convenience forms:

$$
\acontracted[1.5ex]{}{a_i}{a_j}{a_k}
\qquad
\bcontracted{}{b_i}{b_j}{b_k}
$$

Compatibility and helpers:

$$
\contraction{}{x}{y}{z} xyz
\nomathglue{\bar G_1(q_1)\,\bar G_2(q_2)}
$$

Contact macro: $\simplewickcontact$

## Test result

Tested directly in Obsidian 1.14.5 on October 28, 2026 using the active vault
`D:/Obsidian/Physics` after a clean restart.

- Plugin load from `.obsidian/plugins/simplewick/`: PASS
- Automatic enablement from `community-plugins.json`: PASS
- MathJax macro rendering: PASS
- Optional height argument (`[2ex]`, `[1.5ex]`): PASS
- Convenience and compatibility macros: PASS
- Contact and `\nomathglue` helpers: PASS
- Rendered MathJax containers inspected: 5
- MathJax error-colored nodes detected: 0
- Over/under contraction structures detected: 28

All public macros in this note rendered without an undefined-control-sequence
error. The same result is documented in [[SimpleWick Obsidian Report.pdf]].

