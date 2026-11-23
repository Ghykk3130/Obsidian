# SimpleWick 用法

这是 SimpleWick 插件的说明书。本页里所有渲染出来的数学公式都是插件当场画出来的——每一段都能在上面找到对应的源码，可以对着看效果。

Peskin 里 Wick 收缩的画法是：一条横线，两端各垂下一个小钩子，指住被收缩的两个场。LaTeX 里传统做法是 `simplewick` 包或者 `simpler-wick`（TikZ），MathJax 都没有。SimpleWick 包住 Obsidian 的渲染函数 `MathJax.tex2chtml`，把 `\wick{...}` 改写成 MathJax 自带的 `\rlap` / `\overline` / `\rule` 组合，阅读视图和实时预览都生效。

## 1. 语法总表

| 写法 | 效果 |
|---|---|
| `\wick{X}` | 排出 X，上方一条横线 + 两端下垂钩子 |
| `\bwick{X}` | 同上，横线在下方 |
| `\wick[n]{X}` | `n` 指定横线高度，数字，单位 em（默认 1.05） |
| `\wickcross{A}{B}{C}` | 交叉收缩：一条盖 A+B（低），一条盖 B+C（高） |
| `\bwickcross{A}{B}{C}` | 同上，线在下方 |
| `\contraction[n]{前}{A}{中}{B}` | 排出「前 A 中 B」，标记只盖「A 中 B」 |
| `\bcontraction[n]{前}{A}{中}{B}` | 同上，标记在下方 |

`\acontraction`、`\contracted`、`\acontracted`、`\bcontracted` 是别名。

## 2. 最基本的例子

源码：

```latex
\wick{\phi(x)\phi(y)} = D_F(x-y)
```

效果：

$$
\wick{\phi(x)\phi(y)} = D_F(x-y)
$$

塞进 T-乘积里也一样：

```latex
\langle 0 | T\{ \wick{\phi(x)\phi(y)} \} | 0 \rangle
```

$$
\langle 0 | T\{ \wick{\phi(x)\phi(y)} \} | 0 \rangle
$$

## 3. 费米子线

横线要跨过中间的 $\gamma^\mu$，把整段包进 `\wick{...}` 就行：

```latex
\wick{\bar\psi(x)\,\gamma^\mu\,\psi(y)}
```

$$
\wick{\bar\psi(x)\,\gamma^\mu\,\psi(y)}
$$

## 4. 四种配对方式

四个场两两收缩，一共三种配法。**写法不一样，不要混**：

### (1,2)(3,4) 互不相交

```latex
\wick{\phi_1\phi_2}\,\wick{\phi_3\phi_4}
```

$$
\wick{\phi_1\phi_2}\,\wick{\phi_3\phi_4}
$$

### (1,4)(2,3) 嵌套

内层写在参数里面，外层会自动抬高一点，两条线不会贴在一起：

```latex
\wick{\phi_1\wick{\phi_2\phi_3}\phi_4}
```

$$
\wick{\phi_1\wick{\phi_2\phi_3}\phi_4}
$$

### (1,3)(2,4) 交叉

两条线的区间**重叠但互不包含**，普通 `\wick` 做不到，要用 `\wickcross`。把表达式切成三段 A｜B｜C：

```latex
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}
```

$$
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}
$$

A = `\phi_1`，B = `\phi_2\phi_3`（两条线共用），C = `\phi_4`。第一条线盖 A+B 就是 (1,3)，第二条盖 B+C 就是 (2,4)。后一条自动高一档，左钩正好落在前一条线上——Peskin (4.39) 里就是这么印的。

更长的情况同理，比如 (1,3) 和 (2,5)：

```latex
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4\phi_5}
```

$$
\wickcross{\phi_1}{\phi_2\phi_3}{\phi_4\phi_5}
$$

### 非相邻的两个场，(1,3) 单独一条

中间隔着 φ₂ 也要让线跨过去，所以把中间那段一起包进来：

```latex
\wick{\phi_1\phi_2\phi_3}\,\phi_4
```

$$
\wick{\phi_1\phi_2\phi_3}\,\phi_4
$$

## 5. 写 Wick 定理的展开式

```latex
T\{\phi_1\phi_2\phi_3\phi_4\}
= \phi_1\phi_2\phi_3\phi_4
+ \wick{\phi_1\phi_2}\,\phi_3\phi_4
+ \wick{\phi_1\phi_2\phi_3}\,\phi_4
+ \wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}
+ \cdots
```

$$
T\{\phi_1\phi_2\phi_3\phi_4\}
= \phi_1\phi_2\phi_3\phi_4
+ \wick{\phi_1\phi_2}\,\phi_3\phi_4
+ \wick{\phi_1\phi_2\phi_3}\,\phi_4
+ \wickcross{\phi_1}{\phi_2\phi_3}{\phi_4}
+ \cdots
$$

## 6. 标记只盖一部分：`\contraction`

`\contraction` 的四个参数都会原样排出来，但标记只盖后三个。适合「横线要从某个位置开始，前面还有别的东西」：

```latex
g\,\contraction{}{\bar\psi(x)}{}{\psi(x)}
```

$$
g\,\contraction{}{\bar\psi(x)}{}{\psi(x)}
$$

## 7. 微调

单个公式想改高度，用可选参数（只认数字，单位一律当 em）：

```latex
\wick[1.6]{\phi(x)\phi(y)}
```

$$
\wick[1.6]{\phi(x)\phi(y)}
$$

**注意**：钩子长度是写死的 0.42em，横线高度取 `max(内容高度, n)`。所以内容比 $n$ 高时（比如 `\frac{a}{b}` 大约 2.4em），横线会被内容顶上去，而钩子还停在 1.4em 左右，就会脱节。这种情况要把 $n$ 给到比内容还高：

```latex
\wick[2.6]{\frac{a}{b}}
```

$$
\wick[2.6]{\frac{a}{b}}
$$

想全局改，编辑 `.obsidian/plugins/simplewick/main.js` 顶部的常量，然后重载：

| 常量 | 默认 | 作用 |
|---|---|---|
| `DEFAULT_STRUT` | 1.05 | 横线离基线多高 |
| `HOOK_DROP` | 0.35 | 钩子往下垂多少 |
| `HOOK_LEN` | 0.56 | 钩子总长（末端 0.21 埋进横线，保证拐角无缝） |
| `HOOK_W` | 0.05 | 钩子粗细 |
| `STACK_GAP` | 0.30 | 叠线时两条横线的最小间距 |
| `CROSS_GAP` | 0.35 | 交叉时第二条线比第一条高多少 |

钩子贴在**内容的两端**，不在横线两端的出头处——所以它落在场的正上方。

## 8. 命令

`Ctrl+P` 里搜：

- **Wrap selection in field contraction (mark above)** —— 选中一段公式，一键包成 `\wick{...}`
- **Wrap selection in field contraction (mark below)** —— 同上，`\bwick{...}`
- **Show contraction support status** —— 显示 `active` 说明挂上了 MathJax

## 9. 排错

| 现象 | 原因 / 处理 |
|---|---|
| 公式里出现红色的 `\wick{...}` | 插件没生效，先跑状态命令；或 `Ctrl+R` 重载 |
| 只有一条直线、没有钩子 | 跑的是 1.1.0 旧版，重载应用 |
| 行内公式用了之后行距变大 | 正常，标记占 1.05em 高；嫌挤就把 `DEFAULT_STRUT` 调小 |
| 横线离字太远 / 太近 | 用 `\wick[n]` 微调 |
| 交叉线没有叠好 | 检查三段切分：共用段必须放在第二个参数 |
| 导出成纯 LaTeX（Pandoc）后报错 | 预期之内，`\wick` 不是标准宏；导 PDF 没问题 |

## 10. 实现

`\wick{X}` 展开成：

```latex
\rlap{\rule[0.70em]{0.05em}{0.56em}}          ← 左钩子，零宽
\overline{\vphantom{\rule{0pt}{1.05em}} ... }  ← 横线，宽度 = 内容宽度
\llap{\rule[0.70em]{0.05em}{0.56em}}          ← 右钩子
```

`\overline` 天然等于内容宽度，两条零宽的 `\rule` 用 lap 贴在**内容**两端（不是横线出头处），所以钩子正好在场正上方。`\overline` 的横线在内容顶部上方 0.18em，钩子多留 0.21em 钻进去，拐角就是严丝合缝的直角。MathJax 里没法像 TikZ 那样量高度，所以钩子参数都是相对基线的 em 定值。

`\wickcross` 换成**零宽覆盖**：两条线各自包在 `\rlap` 里，宽度由 `\phantom{A B}` 给出，第二条前面加 `\phantom{A}` 把起点推后，真正的内容只排一次——所以两条线可以重叠，不受包含关系限制。
