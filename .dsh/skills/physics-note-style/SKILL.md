---
name: physics-note-style
description: "用用户本人的物理学笔记风格撰写物理笔记：中英混排、以推导为主体、theorem–proof–remark 分层。默认输出到 DSH 聊天，用 KaTeX 安全子集（禁用 \\ket、\\bra、\\mathscr 等），保证公式能渲染；落盘 Obsidian 时再切换 callout/wikilink。"
whenToUse: "当任务要求按用户的笔记风格写物理内容，或需要把一段物理知识/推导整理成可直接在聊天里阅读的笔记时；明确要求写入 Obsidian 时也用，但切换到落盘版语法。"
---

# 物理笔记写作风格（physics-note-style）

读这份 skill 后，你要写的不是"介绍某个物理主题的文章"，而是一篇**用户自己在 Obsidian 里推公式时留下的笔记**：以系统/模型为起点，公式推进为主干，中文只做粘合与评论，最后停在一个结果、一个 caveat 或一个 QED 上。

## 一、先记住语料事实

- 232 篇纯物理笔记，约 157 万字符；中位数约 3.8k 字符。
- 主题：凝聚态（输运、拓扑、磁性、超导、半导体）、量子力学、量子场论、统计力学、热力学与流体、电动力学、群论与张量、微分几何。
- 中文为主，英文术语直接嵌入、不翻译；中文字符与英文词之比约 1.5:1。
- 没有 YAML frontmatter，没有标签体系；文件名就是标题；同一主题写不下就开 `xxx2.md`（如 `Bloch定理2`、`半经典输运2`）。
- 公式极密：平均每篇约 55 个行内公式、17 个独立公式环境；表格几乎为零（全库 1 个），项目符号很少（平均每篇 1 个），加粗很少（平均每篇 0.5 处）。
- 标题通常只有 1–3 个一级标题、4–6 个二级标题，三级标题很少。
- 不是每篇都完整：有截断、重复编号、错别字。**这是工作笔记的痕迹，不要刻意复制错误，但要保留"边写边想"的粗粝感。**

## 二、语言：中文骨架 + 英文术语

### 2.1 人称与语气

- 默认主语是"我们"：我们考虑、我们知道、我们想计算、我们得到。平均每 500 字出现一次。
- "你"只用于设问，且立刻自答：
  - "你可能会说，这不一定啊，因为……但是……"
  - "你可能会问，特征值有可能变化吗？"
- 语气是"边推边讲"，不是"成文后润色"：允许短句、破折号、括号补充、半截话。
- 对自己不确定的地方要标记，不装作确定：
  - "我们宣称 lagrangian 为……"
  - "我们必须认为……"
  - "严格来说……""物理上……""数学上……"
  - "这里我们先 handwave 一下。"

### 2.2 高频句式（直接套）

起题：

- "考虑一个……"
- "给定……"
- "我们想知道……"
- "考虑这样一个问题：……"

设定：

- "假设……"
- "令……为……"
- "不妨设 / 不妨令 / WLOG……"
- "我们取……"
- "其中，……为……"

推进：

- "于是……""所以……""从而……""代入得到……""联立得到……""整理得……"
- "注意到……""注意，……""这里……""此处……"
- "显然……""容易证明……""容易计算……""可以证明……"（引用已知结论时才用）
- "最后一步用了……"
- "这就得到……"

收束与检查：

- "于是我们得到……"
- "这说明……"
- "如果……那么……，这与……矛盾。"
- "取极限……""量纲上……""数量级上……"

### 2.3 词汇选择

保留英文，不要翻译：Hamiltonian / hamiltonian、Lagrangian、Berry phase / Berry curvature、Chern number、tight-binding、Wannier、Bloch、Fermi surface、BZ、k-space、gap、band、mode、scaling、toy model、caveat、remark、proof、ansatz、normalization、projector、trace、generator、representation、spinor、chiral、helical、domain wall、skyrmion、magnon、plasmon、polaron。

中文连接与判断：于是、所以、但是、注意到、其中、即、也就是、实际上、严格来说、物理上、数学上、量纲、数量级、极限、对称性、守恒、自由度、基底、本征态、期望值、矩阵元、抵消、发散、截断、重整化。

少量语气词（只在解释性段落，不要每段都用）：嘛、呢、罢了、这玩意、那坨东西、带回去、弄成、算出来。

避免：综上所述、总而言之、值得注意的是、众所周知、不言而喻、本文将、让我们一起来、作为作文结构的"首先/其次/最后"。

### 2.4 标点与排版

- 中文全角标点：，。：；？！；公式内用英文标点。
- 冒号极常用，用于"其中，X 为……"的同位定义（全库约 4700 个）。
- 括号补充说明，破折号插入语。
- 不用 emoji，不用表格，不用水平分割线，不堆加粗。
- 一句话通常只推一步；公式之间的连接词不超过一行。

### 2.5 语感锚点（可模仿的原句）

- "考虑一个二维系统。考虑一个 k-space 中的二带 Dirac hamiltonian。"
- "我们来对角化 hamiltonian。不妨猜测解为……"
- "显然，将 $\sum_{\sigma}$ 提到外面，这就是两个 Haldane 模型的 hamiltonian 之和。"
- "我们宣称有如下等时对易关系。"
- "我们必须认为，Hilbert space 是 system-specific 的。"
- "可以证明，满壳层总角动量为零。先看单个壳层。"
- "此处我们引入汤川势来避免电子距离为零时的奇点。在最终计算出结果，取 $\mu=0$ 即可。"
- "这很好理解，因为它是许许多多有明确定义的波矢、角频率的本征解'模糊地'叠加起来的嘛。"
- "你可能会说，这不一定啊，因为……但是……"

## 三、知识点是怎么搭起来的

### 3.1 五个基本动作

1. **从对象出发，不从定义出发。** 先写"考虑一个……系统"，再写 Hamiltonian / 配分函数 / 作用量；定义在用到时给。
2. **假设显式化。** 每个近似都写出来（忽略相互作用、只保留最近邻、取线性项、绝热、单带、$T=0$），并说明为什么可以这么做。
3. **约化到已知。** 新模型先想办法写成已知模型的组合：
   - Kane-Mele = 两个自旋相反的 Haldane；
   - 有相互作用的费米液体 = 绝热连到自由费米气；
   - 二维问题 = 一维问题 + 一个 quantum number。
4. **对称性先于计算。** 能用时间反演、空间反演、镜面对称、旋转对称把张量元或响应系数杀掉，就先杀，再算。
5. **算完必须检查。** 极限（$k\to0$、$m\to0$、$T\to0$、$\hbar\to0$）、量纲、符号、已知特例、求和规则。检查结果用一句物理判断写出来："无能隙""能隙打开""是绝缘体""自旋流非零"。

### 3.2 分层推进

一次只加一个新东西，按以下任一条链推进：

- 经典 → 量子（先写经典运动方程 / Poisson bracket，再换 commutator）
- 单粒子 → 多体（先写单粒子谱，再填占据数）
- 自由 → 相互作用（先对角化 $H_0$，再把 $V$ 当微扰或做 RPA）
- 一维 → 二维 → 三维（每条链都从头算一遍，不写"同理可推广"）
- 一般 → 特例（先给 general 的 $H(\mathbf{k})$，再取 $k$ 点、节点、临界点）

### 3.3 证明分三层

- **Handwave**：量级 / 直觉 / 泰勒展开，先看出答案。
- **Theorem / Proposition**：用英文精确陈述，条件写全。
- **Proof.**：中文严格推导，每步只做一件事；聊天里结束用单独一行 `$\blacksquare$`，落盘 Obsidian 时再套 `> [!Right]`。

"可以证明"只用于真正标准的结论（如 TKNN、Kramers、Wick），不要用它跳过本文该推的步骤。

### 3.4 三类注解

- **Remark**：逻辑辨析、定义陷阱、为什么必须这样、常见误解。常用编号 1. 2.。
- **Caveat**：适用范围、假设失效、符号约定、未考虑项。
- **Quote**：旁支问题、补充推导、提醒。把"这里其实有个 subtlety"放进 Quote，不打断主线。

## 四、八种结构模板

### A. 概念 / 定理型

适用：熵、密度矩阵、不确定关系、对称性。

```
# 1. <概念的热力学 / 量子 / 数学 formulation>
（一段：我们想知道什么；给最小设定）
$$ ... $$
> [!Note] Definition 1
> <英文陈述>
## Remark
（这个定义哪里反直觉）
## Proof.
（严格推导）
> [!Right]
> $\blacksquare$
## Ex:
（一个具体系统，算到底）
## Caveat
（适用范围）
# 2. <另一个 formulation>
```

开头示范："考虑一个二能级系统的密度矩阵。若系统是两个纯态的等比例经典混合，则："

结尾：停在最后一个公式或 Caveat，不总结。

### B. 模型型

适用：紧束缚、Haldane、Kane-Mele、Ising、Hubbard、toy model。

```
# 1. <模型名>
（假设 + 基底 + Hamiltonian）
$$H=...$$
（对角化 / 猜解 / 傅里叶变换）
$$\epsilon(\mathbf{k})=...$$
（能带 / 相图 / 极限）
## Remark
（与已知模型的关系、参数范围）
# 2. <对称性 / 变体>
```

必须有的动作：写清基底与矩阵元、猜 Bloch 型解、给出色散、讨论填充与费米面、指认拓扑或序。

### C. 效应 / 响应型

适用：AHE、ANE、QHE、磁光、Planar Hall。

```
# 1. 关于<效应>的一般讨论
（响应张量 + 经验关系）
$$\sigma_{xy}=...$$
（分解成 ordinary + anomalous，再分解成 intrinsic / skew / side jump）
（各自的 $\tau$ 标度与 $M$ 标度）
# 2. <机制一>
（微观模型 + 散射矩阵元 + 推出标度）
# 3. <机制二>
```

必须有的动作：先现象学分解，再逐机制推导，最后回到 $\rho_{xy}$ 的标度。

### D. Toy model / 估算型

适用：磁泡、条纹畴、dam break、hydraulic jump、最大功。

```
（一句话说清几何与假设）
$$E=E_{\text{ex}}+E_{\text{ani}}+E_{\text{dip}}+E_{\text{Ze}}$$
（逐项估算，保留主导项，扔掉常数背景）
（对半径 / 角度 / 时间求极值）
（得到 scaling：$r_{c}\propto...$）
```

必须有的动作：能量 / 时间尺度逐项列，明确"哪项可以忽略、为什么"，最后给出标度关系而不是精确解。

### E. 场论 / 推导型

适用：标量场量子化、Dirac 场、路径积分、Feynman 规则。

```
# 1. <方程>
（从对称性 / 作用量出发，宣称 Lagrangian）
（Euler-Lagrange → 运动方程）
# 2. 生成湮灭算符
（模式展开，boxed 结果）
（等时对易关系 → 对易关系）
# 3. 算符的对角化 / 传播子
```

必须有的动作：boxed 关键公式、显式写出归一化因子、检查自由场极限。

### F. 问题解决 memo

适用：实验或计算中遇到的具体问题。

```
（一段：现象 + 为什么 naive 做法不行 + "怎么办呢？"）
（第一步构造可观测量）
（自洽方程）
（解出并说明适用范围）
```

长度 300–1500 字符，不写标题也可以。

### G. 大综合笔记

适用：群论、Solid state、Transport、张量分析。

```
# Table of Contents
1.1 [[note#^id|Title]]
# 1. <章>
## Definition / Proposition / Ex:
^blockid
```

规则：每节可独立阅读；用 block id 和 wikilink 做目录；定义用英文，评论用中文。

### H. 数学 / 群论型

适用：Lie group、张量、微分几何。

骨架更短：定义 → 例子 → 命题 → 三行证明。允许 `Done` 结尾；叙述更冷，少物理评论。

## 五、输出格式与渲染兼容性

### 5.1 先决定输出目标

默认输出到 DSH 聊天，不是 Obsidian 文件。聊天渲染器只认标准 Markdown + KaTeX，不认 Obsidian 专有语法：

| 落盘 Obsidian | 聊天里改成 |
|---|---|
| `> [!Note] Definition 1` | `**Definition 1.**` |
| `> [!Right]` + `$\blacksquare$` | 单独一行 `$\blacksquare$` |
| `[[Haldane模型]]` | 文字 `Haldane 模型`，或 `[Haldane 模型](路径)` |
| `^theorem1` | 省略 |
| `![[Pasted image...]]` | 普通图片链接，或省略 |

只有用户明确说"写进 Obsidian / 保存到 Notes / 新建一篇"时，才用左列语法。第四节模板按落盘版写；聊天里把 callout 换成加粗小标题即可。

### 5.2 KaTeX 安全子集（DSH Web）

聊天用 KaTeX 渲染 `$...$` 和 `$$...$$`。未定义宏不会报错，而是把整段公式显示成红色原文——这就是"渲染不成功"。

**不要用**：`\ket{}`、`\bra{}`、`\braket{}`、`\abs{}`、`\norm{}`、`\expectationvalue{}`、`\mel{}{}{}`、`\ip{}{}`、`\ev{}`、`\dv{}{}`、`\pdv{}{}`、`\dd`、`\qty{}`、`\pqty{}`、`\bm{}`、`\tr`、`\Tr`、`\mathscr{}`、`\ce{}`、`\SI{}{}`。

**替换表**：

| 不要写 | 写成 |
|---|---|
| `\ket{\psi}` | `|\psi\rangle` |
| `\bra{\psi}` | `\langle\psi|` |
| `\braket{\phi|\psi}` | `\langle\phi|\psi\rangle` |
| `\abs{x}` | `|x|` 或 `\lvert x\rvert` |
| `\norm{x}` | `\|x\|` |
| `\bm{\sigma}` | `\boldsymbol{\sigma}` |
| `\mathscr{L}` | `\mathcal{L}` |
| `\tr` / `\Tr` | `\operatorname{tr}` |
| `\dv{f}{x}` | `\frac{df}{dx}` |
| `\pdv{f}{x}` | `\frac{\partial f}{\partial x}` |
| `\qty(...)` | `\left(...\right)` |

**排版规则**：

- 行内只用 `$...$`；不要在行内写 `\begin{align}`。
- 独立公式 `$$` 单独起行、单独收行，`$$` 内不要空行；`$$` 前后各留一个空行，避免被并进上一段。
- 单行公式直接 `$$ ... $$`；多行才用 `$$\begin{aligned} ... \end{aligned}$$`，每行 `&` 数量一致。
- 关键结果 `\boxed{}`；编号用 `\tag{1}`，不要用 `\tag{*}`。
- 中文写在公式外，不要塞进 `\text{}`；不要用 Unicode 数学符号（`−`、`×`、`≈`、`→`），用 `-`、`\times`、`\approx`、`\to`。
- `\left` / `\right` 必须成对。
- 张量用 `\mathbf{}` 或 `\vec{}`；算符用 `\hat{}` 或 `\mathcal{}`。
- 自然单位制要明说："采用自然单位制 $c=1$"。

如果公式还是红字：把它拆成更小的 `$$` 块，逐个删宏定位。九成是 `\ket`、`\bra`、`\mathscr`、`\bm`、`\tag{*}` 或 `\left/\right` 不配对。

聊天版最小骨架（照这个排最稳）：

```
**Definition 1.** ...

$$ ... $$

**Proof.** ...

$$ ... $$

$\blacksquare$
```

### 5.3 结构

- `# 1. xxx`、`# 2. xxx` 作大节（编号可重复，不必全局连续）。
- `## Proof.`、`## Remark`、`## Ex:`、`## Caveat`、`## Big picture`、`## Handwave` 作小节。
- `###` 很少用；需要三级时用 `## 2.1`。
- 标题中英混排是正常的："# 1. 熵的热力学 formulation"。

### 5.4 落盘版专用（聊天不要用）

Callout：

```
> [!Note] Definition 1
> Let ... We call ... if ...
```

证明结束：

```
> [!Right]
> $\blacksquare$
```

（新笔记统一用这个；旧笔记里的 `Done` / `STS` 不再使用。）

引用与图：

- 跨笔记：`[[Haldane模型]]`；带锚点：`[[熵#^theorem1|theorem 1.1]]`。
- 图片：`![[Pasted image 2026...png|center|400]]`。
- 定理块 id：`^theorem1`、`^d5e805`。
- 文献只用轻量标注："(c.f. Mermin chapter 5)"。

聊天里这些都不渲染，改成 5.1 的写法。

## 六、写作流程

1. 判断类型（A–H），定长度：单点 1.5–4k 字符；单模型 4–10k；效应 5–12k；大专题 15k+。
2. 列 3–6 个 H1，先定推导链，不写引言。
3. 第一段：系统 + 已知 + 目标，3 句以内。
4. 写方程链；每个方程前一句"为什么"，后一句"所以"。
5. 关键结果 boxed；需要编号时用 `\tag{1}`，不要用 `\tag{*}`。
6. 加 1–3 个 Remark/Caveat，必须具体到这一步推导，不写泛泛的"需要注意"。
7. 删除任何总结段、任何"本文将"、任何表格。
8. 只输出 markdown 正文，不加"以下是笔记"之类的前后缀；不要用 ``` 包整篇，也不要用 Obsidian callout（聊天里会显示成普通引用块）。

## 七、不要做

- 不要写科普式开头（"物理学中有一种重要的现象……"）。
- 不要写"综上所述 / 小结 / 结论"。
- 不要用表格做对比；要对比就分小节各算一遍。
- 不要每段加粗；加粗只给定义名或关键判断。
- 不要把所有术语翻成中文；Hamiltonian 不要写成"哈密顿量"（除非句子需要）。
- 不要为了完整补一堆背景；背景只在"用到"时出现。
- 不要伪造引用、文献、实验数据。
- 不要故意写错别字；但也不要润色成论文腔。
- 不要在结尾强行升华；停在公式 / QED / Caveat 就好。
- 不要用 KaTeX 不支持的宏（`\ket`、`\bra`、`\mathscr`、`\bm`、`\tag{*}` 等），聊天里会整段显示成红字。

## 八、自检

- [ ] 第一句是不是"考虑 / 给定 / 我们想知道"？
- [ ] 每个符号是否定义？每个近似是否说明？
- [ ] 是否至少有一次"注意到"或"不妨"或"显然"（但"显然"每节不超过 2 次）？
- [ ] 证明是否以 `$\blacksquare$` 结束？
- [ ] 是否有至少一个 Remark 或 Caveat，且内容是具体的？
- [ ] 是否有"约化到已知模型"或"对称性论证"？
- [ ] 结尾是否停在结果，而不是总结？
- [ ] 中文里是否自然夹着英文术语？
- [ ] 公式里没有 `\ket`、`\bra`、`\mathscr`、`\bm`、`\tag{*}` 等禁用宏？
- [ ] 整篇没有被 ``` 包起来？callout 已换成聊天可渲染的加粗标题？

## 九、范例（照这个密度写）

下面围栏只用于展示；实际回答不要用 ``` 包整篇，否则聊天会把它显示成代码块。

```markdown
# 1. 模型

考虑一个二维电子气，结构反演对称性被界面破坏。电子感受到 Rashba 自旋轨道耦合。我们取：

$$\begin{aligned}
H & = \frac{p^{2}}{2m}+\alpha(\boldsymbol{\sigma}\times \mathbf{k})\cdot \hat{\mathbf{z}}
\end{aligned}$$

其中 $\alpha$ 为 Rashba 系数。将第二项写开：

$$\begin{aligned}
(\boldsymbol{\sigma}\times \mathbf{k})\cdot \hat{\mathbf{z}} & = \sigma_{x}k_{y}-\sigma_{y}k_{x}
\end{aligned}$$

于是：

$$H= \frac{\hbar^{2}k^{2}}{2m}+\alpha(k_{y}\sigma_{x}-k_{x}\sigma_{y})$$

# 2. 能带与自旋结构

令 $k_{x}=k\cos \phi,\ k_{y}=k\sin \phi$。那么：

$$\begin{aligned}
H & = \frac{\hbar^{2}k^{2}}{2m}+\alpha k(\sin \phi \sigma_{x}-\cos \phi \sigma_{y})
\end{aligned}$$

这是 $\mathbf{d}\cdot\boldsymbol{\sigma}$ 型的二能级 hamiltonian，$\mathbf{d}=\alpha k(\sin \phi,-\cos \phi,0)$。容易得到：

$$\begin{aligned}
\epsilon_{\pm}(k) & = \frac{\hbar^{2}k^{2}}{2m}\pm \alpha k
\end{aligned}$$

本征态为：

$$\begin{aligned}
|+\rangle & = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-ie^{i\phi}\end{pmatrix},\ |-\rangle=\frac{1}{\sqrt{2}}\begin{pmatrix}1\\ ie^{i\phi}\end{pmatrix}
\end{aligned}$$

计算 $|+\rangle$ 的自旋期望值：

$$\begin{aligned}
\langle \sigma_{x}\rangle & = 2\mathrm{Re}(a^{*}b)=\sin \phi \\
\langle \sigma_{y}\rangle & = 2\mathrm{Im}(a^{*}b)=-\cos \phi
\end{aligned}$$

所以 $\langle \boldsymbol{\sigma}\rangle=(\sin \phi,-\cos \phi)$，垂直于 $\mathbf{k}$。绕费米面一圈，自旋转 $2\pi$。这就是 spin-momentum locking。

## Remark
两条支的自旋相反。因此 $\mathbf{k}$ 与 $-\mathbf{k}$ 上的自旋也相反。这是时间反演对称性要求的：$\mathcal{T}$ 将 $\mathbf{k}\to-\mathbf{k}$、$\boldsymbol{\sigma}\to-\boldsymbol{\sigma}$。在 $\mathbf{k}=0$ 处两支简并，即 Kramers 简并。

# 3. 对称性

$H$ 在时间反演下不变：

$$\begin{aligned}
\mathcal{T}H(\mathbf{k})\mathcal{T}^{-1} & = H(-\mathbf{k})
\end{aligned}$$

但空间反演被界面破坏，所以 $\epsilon_{\uparrow}(\mathbf{k})\neq \epsilon_{\downarrow}(\mathbf{k})$，自旋简并消失。

## Caveat
真实界面还有 Dresselhaus 项 $\beta(\sigma_{x}k_{x}-\sigma_{y}k_{y})$。当 $\alpha=\beta$ 时，两者合起来变成一个 $\mathbf{k}$ 相关的规范场，自旋沿固定方向进动，这就是 persistent spin helix。只取 Rashba 会漏掉这个极限。
```

## 十、判断标准

写完以后问自己：这读起来像不像一个人**为了搞懂一个问题**而写下的推导，而不是为了交作业而写的报告？如果是，就对了。