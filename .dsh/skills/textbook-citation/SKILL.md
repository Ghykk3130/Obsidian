---
name: textbook-citation
description: "推导物理内容时，先在已抽取文本的教材中检索，按教材路线推导并给出书名、节号、印刷页码（附 PDF 页码）。当前覆盖 Peskin、Schwartz 的 QFT 与 Annett 的超导/超流（第 1–4 章）；不凭记忆编造页码。"
whenToUse: "当用户要求推导、复核或解释一个物理结果，并希望注明教材出处时；或需要确认某本教材在哪一页讲了某个推导时。"
---

# 教材出处引用（textbook-citation）

这个 skill 让推导**有据可查**：先在你已经抽取成文本的教材里找到对应段落，按教材的路线推，并在推导开头和结果处标出书名、节号、页码。找不到就明说，绝不编页码。

## 一、当前可引用的教材

只有下面三本已经抽取成文本；`D:\textbooks` 里的其它 PDF 一律**不能**按页引用。

| slug | 教材 | 版本 | 页数 | 页码换算 |
|---|---|---|---|---|
| `peskin` | Peskin & Schroeder, *An Introduction to Quantum Field Theory* | Westview, 1995 | 865 | 印刷页 = PDF 页 − 23 |
| `schwartz` | Matthew D. Schwartz, *Quantum Field Theory and the Standard Model* | Cambridge, 2014 | 870 | 印刷页 = PDF 页 − 20 |
| `annett` | James F. Annett, *Superconductivity, Superfluids and Condensates* | Oxford, 2004 | 141 | 印刷页 = PDF 页 − 3 |

**注意 Annett 这个 PDF 只含第 1–4 章**（London、Ginzburg-Landau、宏观相干态、BCS），到约 p.136 结束；第 5 章以后不在文件里。引用超导/超流时优先用它，但不要假装它覆盖整本书。

数据在 `.dsh/textbooks/`：`catalog.json` 是书目，`text/<slug>.txt` 是逐页文本（`\f` 分页）。

## 二、标准流程

0. **确认书目**：

```
.\.dsh\skills\textbook-citation\scripts\lookup.cmd list
```

1. **先检索**。用教材里的英文术语，不要用中文意译：

```
.\.dsh\skills\textbook-citation\scripts\lookup.cmd search "Ward identity" --limit 8
.\.dsh\skills\textbook-citation\scripts\lookup.cmd search "optical theorem" --book peskin
.\.dsh\skills\textbook-citation\scripts\lookup.cmd search "beta function" --any --limit 10
```

2. **读命中页，确认是正文**。用页码打开，检查页眉的小节标题和上下文：

```
.\.dsh\skills\textbook-citation\scripts\lookup.cmd page peskin 243
.\.dsh\skills\textbook-citation\scripts\lookup.cmd page schwartz 279
```

如果命中的是 `Contents`、`Index`、`Bibliography` 页，或只有一句提及，换关键词再搜，不要拿它当出处。

3. **按教材路线推导**。推导的写法仍按 `physics-note-style`：公式为主、中文粘合、`## Proof.`/`## Remark` 等结构不变。引用不改变笔记结构，只在节标题或结果后加出处。

4. **写出处**。至少给：书名（或 slug 对应的短名）、节号、印刷页码；能确认式号时再加式号。

## 三、引用格式

行内短引用：

```
（Peskin & Schroeder, §7.4, p. 243）
（Schwartz, §14.8, p. 279）
```

带式号（只有在你从该页文本里真的看到式号时才写）：

```
（Peskin & Schroeder, §7.4, Eq. (7.69), p. 243）
```

首次出现给完整信息，后文可简写：

```
Peskin & Schroeder, *An Introduction to Quantum Field Theory* (Westview, 1995), §7.4, p. 243.
```

多本对照：

```
（Peskin §7.4, p. 243；Schwartz §14.8, p. 279）
```

中文教材（以后抽取后）用：

```
（汪志诚《热力学·统计物理》第五版，§4.2，第 123 页）
```

页码范围写 `pp. 243–245`。印刷页拿不到时写 `PDF p. 266`，并说明是 PDF 页。

## 四、硬规则

1. **页码只能来自本次会话的 `lookup.cmd` 输出**。不许凭记忆写页码，也不许从别的 PDF 阅读器“估计”一个。
2. **只引用已抽取的教材**。当前有 `annett`、`peskin`、`schwartz`；其它书即使就在 `D:\textbooks`，也不能给页码。
3. **先验证再引用**。打开命中页，确认页眉小节和内容对得上；目录页、索引页、习题答案页不算推导出处。
4. **区分印刷页与 PDF 页**。默认给印刷页，括号里附 PDF 页；front matter 直接标 `PDF p. N (front matter)`。
5. **检索不到就明说**。写“已抽取的教材中未检索到对应推导”，然后独立推导；不要为了凑出处编一个页码。
6. **引用要短**。原文摘录不超过两句；推导步骤用你自己的话复述，公式用 LaTeX 重排。
7. **扫描/OCR 文本层的公式可能错位、缺字**（Annett 尤其明显，Peskin 也有）。不要把抽出来的公式原样当译文；以页码和式号为准，必要时用 `page ... --pdf` 对照 PDF 页。

## 五、检索技巧

- 用教材的原词：`Ward identity`、`Ward–Takahashi`、`LSZ`、`Källén–Lehmann`、`optical theorem`、`beta function`、`anomalous dimension`、`Coleman–Weinberg`。
- 超导/超流用 Annett 的原词：`London equation`、`penetration depth`、`coherence length`、`Ginzburg-Landau`、`flux quantization`、`Abrikosov`、`Cooper pair`、`BCS gap`、`Josephson`、`Macroscopic Coherent State`。
- 引号表示短语，多个词默认 AND；结果太少加 `--any`。
- 先宽后窄：先全库搜，再 `--book` 限定；命中页读标题，顺着小节号找前后页。
- 同一概念在两本书里叫法可能不同（Ward identity / Ward–Takahashi identity），两种都试。
- 页码偏移是全书统一估计的；正文通常可靠，前言、附录、索引可能偏几页，引用前看页眉确认。

## 六、新增教材

用户会逐步指定要抽取的书。流程：

1. 在 `.dsh/textbooks/books.json` 追加一条：

```json
{
  "slug": "kittel",
  "file": "D:\\textbooks\\Introduction to Solid State Physics (Charles Kittel) (Z-Library).pdf",
  "title": "Introduction to Solid State Physics",
  "authors": "Charles Kittel",
  "year": 2005,
  "publisher": "Wiley"
}
```

2. 抽取：

```
.\.dsh\skills\textbook-citation\scripts\build.cmd --slug kittel
```

3. 把新书加进本 skill 第一节的表格，并写明页码换算（`offset` 在 `catalog.json` 里；印刷页 = PDF 页 + offset）。

只支持有文本层的 PDF。纯图片扫描版抽出来是空的，需要先 OCR；`build.cmd` 输出里 `chars` 接近 0 就说明是这种情况。有些扫描版自带 OCR 文本层（Annett 就是），能直接搜，但公式常有错位。

## 七、边界

- 目前覆盖 QFT 两本（Peskin、Schwartz）加超导/超流一本（Annett 第 1–4 章）；其它领域（凝聚态、统计、电动力学、数学）暂时没有可引用页码。
- 检索是字面匹配，不是语义搜索；问“拓扑绝缘体的有效模型”未必能命中，换教材里的说法再试。
- 页码换算对整本书用一个 offset；如果书里有多个页码序列（前言罗马数字、正文阿拉伯数字），以页眉显示为准。
- 教材的作用是**校准推导路线和符号**，不是代替你自己的推导；最终笔记仍要能独立读懂。
- 如果当前工作目录不是 vault，给 `lookup.cmd` 加 `--data-dir D:\Obsidian\Physics\.dsh\textbooks`。

## 八、示例

问：推导 Ward–Takahashi 恒等式。

```
先检索：lookup.cmd search "Ward identity" --limit 5
命中：peskin p. 243 (§7.4)；schwartz p. 279 (§14.8)
```

回答按 Peskin 路线写：

```
## Proof.（Peskin & Schroeder, §7.4, p. 243）

从三点函数出发。流守恒给出

$$
\partial_\mu j^\mu = 0,
$$

在动量空间把外部光子接到电子线上，得到

$$
-i k_\mu \Gamma^\mu(p+k,p) = S^{-1}(p+k) - S^{-1}(p).
$$

这就是 Peskin Eq. (7.69), p. 243 的 Ward–Takahashi 恒等式。
```

如果换 Schwartz 的路径，则引 `Schwartz, §14.8, p. 279`，不要混用两套符号而不说明。

超导的例子：

```
先检索：lookup.cmd search "London equation" --book annett
命中：annett p. 14–18（§1.8）
```

回答里写 `（Annett, §1.8, p. 14）`，并说明他的伦敦方程是从 Drude 模型 + 超流电子密度 $n_s$ 唯象引入的；不要把它写成 BCS 微观推导。
