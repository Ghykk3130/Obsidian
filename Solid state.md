# 1. Reciprocal lattice 

(c.f. Mermin chapter 5)

>[!Note] Definition 1
>A Bravais lattice (direct lattice) is a $\mathbb{Z}$-module over $\mathbb{R}^{3}$. A lattice point is an element in the Bravais lattice.
## Remark
一个晶体中的粒子不一定是一个lattice point。

具体来说，所有Bravias晶体中的点都可写为$n_{1}\vec{a}_{1}+n_{2}\vec{a}_{2}+n_{3}\vec{a}_{e},n_{j}\in \mathbb{Z},\vec{a}_{j}\in \mathbb{R}^{3}$的形式。

>[!Note] Definition 2
>A primitive cell is $P\subset \mathbb{R}^{3}$ such that:
>- $\sqcup_{\vec{R}\text{ lattice point}}(P+\vec{R})=\mathbb{R}^{3}$
>- $P$ contains only one lattice point.
## Ex:
给定一个Bravais lattice的primitive vector $\vec{a}_{j}$。$\left\{  \sum_{j}n_{j}\vec{a}_{j}|0\leq n_{j} <1  \right\}$是一个primitive cell。


>[!Note] Definition 3
>Given a Bravais lattice, we call $\vec{K}$ a point in the reciprocal lattice if
>$$\forall \vec{R}\in \text{Bravais lattice },\vec{r}\in \mathbb{R}^{3},\ \exp(i\vec{K}\cdot\vec{r})=\exp(i\vec{K}\cdot(\vec{R}+\vec{r}))$$

>[!Note] Proposition 1
>$\vec{K}$ belongs to the reciprocal lattice if and only if $\exp(i\vec{K}\cdot \vec{R})=1$.
## Proof.
显然。
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>A reciprocal lattice is a Bravais lattice.
## Proof.
给定一个Bravais晶体，构造：
$$\vec{b}_{i}= \frac{2\pi\epsilon_{ijk}(\vec{a}_{j}\times \vec{a}_{k})}{|(\vec{a}_{j}\times \vec{a}_{k})\cdot \vec{a}_{i}|}$$
STS：若$\exp(i\vec{K}\cdot \vec{R})=1,\forall \vec{R}\in \text{Bravais lattice}$，那么$\frac{\vec{K}\cdot \vec{b}_{i}}{|\vec{b}_{i}|^{2}}\in \mathbb{Z}$。

取$\vec{R}=\vec{a}_{l}$。那么我们有：
$$\begin{align}
 & \exp(i\vec{K}\cdot \vec{R})  =\exp\left( i \sum_{i} \frac{2\pi\epsilon_{ijk}(\vec{a}_{j}\times \vec{a}_{k})}{|(\vec{a}_{j}\times \vec{a}_{k})\cdot \vec{a}_{i}|}\cdot \vec{a}_{l} \right)=1 \\
\end{align}$$
容易看出，仅当$i=l$时，求和里面的东西和$\vec{a}_{l}$点积才不为零。这可以通过explicit计算得到。那么：
$$\begin{align}
i\sum_{i} \frac{2\pi\epsilon_{ijk}(\vec{a}_{j}\times \vec{a}_{k})}{|(\vec{a}_{j}\times \vec{a}_{k})\cdot \vec{a}_{i}|}\cdot \vec{a}_{l} & = 2\pi i
\end{align}$$
那么我们有：
$$\vec{b}_{i}\cdot \vec{a}_{l}=2\pi\delta_{il}$$
接下来仍取$\vec{R}=\vec{a}_{l}$。那么：
$$\begin{align}
\exp(i\vec{K}\cdot \vec{R}) & =\exp \left(i\sum_{i} \frac{\vec{K}\cdot \vec{b}_{i}}{|\vec{b}_{i}|^{2}}\vec{b}_{i}\cdot \vec{a}_{l}\right) \\
 & = \exp\left( i \frac{\vec{K}\cdot \vec{b}_{i}}{|\vec{b}_{i}|^{2}} 2\pi\right)=1
\end{align}$$
那么必有：
$$\frac{\vec{K}\cdot \vec{b}_{i}}{|\vec{b}_{i}|^{2}}\in \mathbb{Z}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 3
>The reciprocal of a reciprocal lattice is the direct lattice.
## Proof.
考虑一个Bravais lattice $\{ \vec{R} \}$。我们构造出reciprocal lattice:
$$\{ \vec{K}|\exp(i\vec{K}\cdot \vec{R})=1 \}$$
我们又从reciprocal lattice构造出reciprocal of the reciprocal lattice:
$$\{ \vec{G}|\exp(i\vec{G}\cdot \vec{K})=1 \}$$
那么容易证到：
$$\{ \vec{R} \}\subset \{ \vec{G} \}\tag{*}$$
因为$\{ \vec{K} \}$是Bravais lattice，那么$\{ \vec{G} \}$也为Bravais lattice。由$(*)$，$\{ \vec{R} \}$的primitive vector一定也是$\{ \vec{G} \}$的primitive vector。而它们的“系数”又都是全体$\mathbb{Z}$，那么必有：
$$\{ \vec{R} \}=\{ \vec{G} \}$$
>[!Right]
>$\blacksquare$




