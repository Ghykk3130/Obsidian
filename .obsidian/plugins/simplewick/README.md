# SimpleWick

在 Obsidian 里画 Peskin & Schroeder 那种 **field contraction**（Wick 收缩）记号：
一条横线，两端各有一段竖直的"钩子"垂下来指向被收缩的两个场 —— 就是书里
(p. 89, Eq. 4.35–4.36) 那个样子。

## 怎么实现的

Obsidian 渲染任何公式都走 `MathJax.tex2chtml()`；插件包住这个函数，把
`\wick{...}` 改写成下面这套 TeX 原语（都是 MathJax 自带的）：

```latex
\rlap{\rule[0.70em]{0.05em}{0.42em}}
\overline{\vphantom{\rule{0pt}{1.05em}}\hspace{0.09em} ... \hspace{0.09em}}
\llap{\rule[0.70em]{0.05em}{0.42em}}
```

`\overline` 负责横线，宽度正好等于场的宽度（`\hspace` 让横线两端略微出头）；
两条零宽的 `\rule` 用 `\rlap`/`\llap` 贴在左右两端，就是钩子。全程不需要测量盒子宽度。

嵌套时外层横线会**自动抬高**：改写器知道里面那条线有多高，会给外层一个更高的
`struts`，所以叠两条不会贴在一起。

## 语法

```
\wick{...}              横线 + 两端钩子，在上方
\bwick{...}             同上，在下方
\wick[1.4]{...}         手动指定横线高度（单位 em，默认 1.05）
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
