# SimpleWick

在 Obsidian 里画 Peskin & Schroeder 那种 **field contraction**（Wick 收缩）记号：
一条横线，两端各有一段竖直的"钩子"垂下来指向被收缩的两个场 —— 就是书里
(p. 89, Eq. 4.35–4.36) 那个样子。

## 怎么实现的

Obsidian 渲染任何公式都走 `MathJax.tex2chtml()`；插件包住这个函数，把
`\wick{...}` 改写成下面这套 TeX 原语（都是 MathJax 自带的）：

```latex
\rlap{\hspace{0.25em}\rule[0.70em]{0.05em}{0.56em}}
\hspace{0.25em}\overline{\hspace{-0.25em} ... \hspace{-0.25em}}
\llap{\rule[0.70em]{0.05em}{0.56em}}
```

`\hspace{0.25em}` 把横线起点向里挪，`\overline` 里配一个 `\hspace{-0.25em}` 把宽度减回去，
所以横线和钩子仍是直角，而钩子落在**场**上、不是表达式最外沿——Peskin 原书就是这样排的。
钩子顶端算到横线里（`\overline` 的横线在内容顶部上方 0.18em，钩子多留 0.21em），拐角无缝。

嵌套时外层横线会**自动抬高**：改写器知道里面那条线有多高，会给外层一个更高的
`struts`，所以叠两条不会贴在一起。

## 语法

```
\wick{...}              横线 + 两端钩子，在上方
\bwick{...}             同上，在下方
\wick[1.4]{...}         手动指定横线高度（单位 em，默认 1.05）
\wickcross{A}{B}{C}     交叉收缩：一条线盖 A+B（低），一条盖 B+C（高）
\bwickcross{A}{B}{C}    同上，在下方
\contraction{前}{A}{中}{B}   排出「前 A 中 B」，标记只覆盖「A 中 B」
\bcontraction{前}{A}{中}{B}  同上，标记在下方
```

`\acontraction`、`\contracted`、`\acontracted`、`\bcontracted` 是别名。

## 例

```latex
\wick{\phi(x)\phi(y)} = D_F(x-y)
```

```latex
\langle 0 | T\{ \wick{\phi(x)\phi(y)} \} | 0 \rangle
```

费米子线（横线跨过中间的 $\gamma^\mu$）：

```latex
\wick{\bar\psi(x)\,\gamma^\mu\,\psi(y)}
```

叠两条（内层只收缩 $\gamma^\mu$，外层自动抬高）：

```latex
\wick{\bar\psi(x)\,\wick{\gamma^\mu}\,\psi(y)}
```

几个互不相交的收缩：

```latex
\wick{\phi_1\phi_2}\,\wick{\phi_3\phi_4}
```

## 交叉收缩

两条线**重叠但互不包含**时用 `\wickcross`。把表达式切成三段 A｜B｜C，
`\wickcross` 会画一条线盖 A+B、另一条盖 B+C：

```latex
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}
```

就是 (1,3) 与 (2,4) 同时收缩。后一条线自动高一档，它的钩子正落在前一条线上——
Peskin (4.39) 里就是这么印的。

三种配对方式对照（四个场）：

```latex
\wick{\phi_1\phi_2}\,\wick{\phi_3\phi_4}      % (1,2)(3,4) 不相交
\wick{\phi_1\wick{\phi_2\phi_3}\phi_4}        % (1,4)(2,3) 嵌套
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}      % (1,3)(2,4) 交叉
```

## 命令

- **Wrap selection in field contraction (mark above)** — 选中公式，一键包成 `\wick{...}`
- **Wrap selection in field contraction (mark below)** — 同上，`\bwick{...}`
- **Show contraction support status** — 检查是否成功挂上 MathJax

## 注意

- 阅读视图和实时预览都走同一个渲染函数，两边都生效。
- 钩子长度、横线高度都是相对**基线**写死的 em 值（MathJax 里没法测量盒子）。
  内容特别高（比如 `\frac`）时横线会显得偏低，用 `\wick[1.8]{...}` 手动抬。
- 导 PDF 走同一套 DOM，没问题；导成纯 LaTeX（Pandoc）时 `\wick` 不是标准宏，
  需要那边的 simplewick 之类的包。
