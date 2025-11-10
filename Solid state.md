# 1.1 Reciprocal lattice 

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

>[!Note] Proposition 4
>Let $\vec{a}_{j}$ be primitive vectors. Let $f:\vec{a}_{i}\mapsto \frac{2\pi\epsilon_{ijk}(\vec{a}_{j}\times \vec{a}_{k})}{|(\vec{a}_{j}\times \vec{a}_{k})\cdot \vec{a}_{i}|}$. Then $f^{2}=\mathbb{1}$

^e18cb6

## Proof.
暴力计算即可。
>[!Right]
>$\blacksquare$


## Ex:
考虑两种常见晶体：face-centered cubic lattice (FCC), body-centered cubic lattice (BCC)。它们常见的primitive vector的选择为：
<div style="text-align:center">
<img src="496a375ad4b007471e8c865938953e2f.jpg" width="300">
</div>
<div style="text-align:center">
<img src="cc7933a2e02e2139d8ca6a0c95bb364c.jpg" width="300">
</div>
令FCC lattice的cubic cell的长度为$a$。则三个primitive vector为：
$$\begin{align}
 & \vec{a}_{1}= \frac{a}{2}\hat{y}+ \frac{a}{2}\hat{z} \\
 & \vec{a}_{2}= \frac{a}{2}\hat{x}+ \frac{a}{2}\hat{z} \\
 & \vec{a}_{3}=\frac{a}{2}\hat{x}+ \frac{a}{2}\hat{y}
\end{align}$$
可以计算三个reciprocal lattice的primitive vector：
$$\begin{align}
 & \vec{b}_{1}= \frac{2\pi}{a}(\hat{\hat{x}}+\hat{y}-\hat{z}) \\
 & \vec{b}_{2}= \frac{2\pi}{a}(\hat{x}-\hat{y}+\hat{z}) \\
 & \vec{b}_{3}= \frac{2\pi}{a}(-\hat{x}+\hat{y}+\hat{z})
\end{align}$$
注意到若BCC的cubic cell长度为$a^{'}$，那么它的三个primitive vector为：
$$\begin{align}
 &\vec{a}_{1}^{'}= \frac{a^{'}}{2}\hat{x}+ \frac{a^{'}}{2}\hat{y}- \frac{a^{'}}{2}\hat{z} \\
 & \vec{a}_{2}^{'}= \frac{a^{'}}{2}\hat{x}- \frac{a^{'}}{2}\hat{y}+ \frac{a^{'}}{2}\hat{z} \\
 & \vec{a}_{3}^{'}=- \frac{a^{'}}{2}\hat{x}+  \frac{a^{'}}{2}\hat{y}+ \frac{a^{'}}{2}\hat{z}
\end{align}$$
那么，FCC的reciprocal lattice正是一个cubic cell长度为$\frac{4\pi}{a}$的BCC晶体！如果换一下FCC primitive vector的顺序，会多出来的负号。

那么由[[Solid state#^e18cb6|proposition 1.4]]容易看出，cubic cell长度为$a$的bcc晶体的reciprocal lattice是cubic cell长度为$\frac{4\pi}{a}$的fcc晶体。

>[!Note] Proposition 5
>Let $v$ be the volume of a primitive cell. Then the volume of the corresponding primitive cell in the reciprocal lattice is $\frac{(2\pi) ^{3}}{v}$.
## Proof.
Given $\vec{a}_{j}$，我们有：
$$\vec{b}_{i}= \frac{2\pi\epsilon_{ijk}\vec{a}_{j}\times \vec{a}_{k}}{|\vec{a}_{i}\cdot(\vec{a}_{j}\times \vec{a}_{k})|}$$
那么：
$$\begin{align}
|(\vec{b}_{1}\times \vec{b}_{2})\cdot \vec{b}_{3}| & = (2\pi)^{3}\left|\left(  \frac{\vec{a}_{2}\times \vec{a}_{3}}{|\vec{a}_{1}\cdot(\vec{a}_{2}\times \vec{a}_{3})|}\cdot \frac{\vec{a}_{3}\times \vec{a}_{1}}{|\vec{a}_{2}\cdot(\vec{a}_{3}\times \vec{a}_{1})|}  \right)\cdot \frac{\vec{a}_{1}\times \vec{a}_{2}}{|\vec{a}_{3}\cdot(\vec{a}_{1}\times \vec{a}_{2})|}\right| \\
 & = (2\pi)^{3} \left|\frac{[(\vec{a}_{2}\times \vec{a}_{3})\cdot \vec{a}_{1}][ (\vec{a}_{1}\times \vec{a}_{2})\cdot\vec{a}_{3}]}{|\vec{a}_{1}\cdot(\vec{a}_{2}\times \vec{a}_{3}) ||\vec{a}_{2}\times(\vec{a}_{3}\times \vec{a}_{1})||\vec{a}_{3}\cdot(\vec{a}_{1}\times \vec{a}_{2})|}\right| \\
 & = \frac{(2\pi)^{3}}{v}
\end{align}$$
>[!Right]
>$\blacksquare$
# 1.2 Brillouin zone
(c.f. Mermin chapter 5)

>[!Note] Definition 1
>Given $\vec{r}\in \mathbb{R}^{3}$, define the k-space as:
>$$\text{k-space}= \{ \vec{k}\in \mathbb{R}^{3}|\exp(i\vec{k}\cdot \vec{r})=1 \}$$
>Call $\{ \vec{r} \}$ the r-space.

容易看出，direct lattice是r-space的子集，reciprocal lattice是k-space的子集。并且：

>[!Note] Proposition 1
>Given an r-space, its k-space is its dual space.

>[!Note] Definition 2
>Define the first Brillouin zone (FBZ):
>$$\text{FBZ}=\{ \vec{k}\in \text{k-space}||\vec{k}|\leq |\vec{k}-\vec{K}|,\forall \vec{K}\in \text{reciprocal lattice},\vec{K}\neq 0 \}$$

## Ex:
考虑一个二维的square lattice。则其FBZ为：
<div style="text-align:center">
<img src="6b0c21b0026bf8fe35c89d383fe222cf 1.jpg" width="400">
</div>




# 2.1 Bloch's theorem

考虑一个Bravais晶体$\{ \vec{R} \}$。这个晶体中的势能一定满足：
$$U(\vec{r}+\vec{R})=U(\vec{r})$$
我们可以研究这个势能下Schrodinger方程的解。

>[!Note] Proposition 1
>Let $T_{\vec{R}}$ be the translation operator. Under the position representation, its operation is $T_{\vec{R}}:\psi(\vec{r})\mapsto \psi(\vec{r}+\vec{R})$. Then $[T_{\vec{R}},H]=0$
## Proof.
Given $\psi(\vec{r})$，我们有：
$$T_{\vec{R}}H\psi(\vec{r})=T_{\vec{R}}\left( \left.- \frac{\hbar^{2}}{2m}\nabla^{2}\psi\right|_{\vec{r}}+U(\vec{r})\psi(\vec{r}) \right)=- \frac{\hbar^{2}}{2m}\nabla^{2}T_{\vec{R}}\psi+U(\vec{r}+\vec{R})\psi(\vec{r}+\vec{R})=HT_{\vec{R}}\psi(\vec{r})$$
其中求导和translation可以交换是因为，给定某点$\vec{r}$，找到$\vec{r}+\vec{R}$处的导数，和先到$\vec{r}+\vec{R}$点，再找这点导数是一样的。
>[!Right]
>$\blacksquare$


>[!Note] Theorem 1 (Bloch's theorem)
>Consider a periodic potential $U$ such that $U(\vec{r}+\vec{R})=U(\vec{r}),\forall \vec{R}\in \text{Bravais lattice}$. Then the solution to the Schrodinger's equation is $\psi_{nk}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{nk}(\vec{r})$, where $u_{nk}(\vec{r}+\vec{R})=u_{nk}(\vec{r}),\forall \vec{R}\in \text{Bravais lattice}$.
>

^f343da

为了证Bloch定理，我们先给出它的等价形式：

>[!Note] Corollary 1
>$\exists u_{nk}\text{ s.t. }u_{nk}(\vec{r}+\vec{R})=u_{nk}(\vec{r}),\ \psi_{nk}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{nk}(\vec{r})$ if and only if $\psi_{nk}(\vec{r}+\vec{R})=e^{i\vec{k}\cdot \vec{R}}\psi_{nk}(\vec{r})$.

^36bbd7

## Proof.
($\Rightarrow$): 显然。
($\Leftarrow$): 令$u_{nk}(\vec{r})=e^{-i\vec{k}\cdot \vec{r}}\psi_{nk}(\vec{r})$。则显然：
$$\psi_{nk}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{nk}(\vec{r})$$
而且，$u_{nk}$有合适的周期性。因为：
$$u_{nk}(\vec{r}+\vec{R})=e^{-i\vec{k}\cdot \vec{r}-i\vec{k}\cdot \vec{R}}e^{i\vec{k}\cdot \vec{R}}\psi_{nk}(\vec{r})=e^{-i\vec{k}\cdot \vec{r}}\psi_{nk}(\vec{r})=u_{nk}(\vec{r})$$
>[!Right]
>$\blacksquare$

下面可以证Bloch定理：
## Proof of Bloch's theorem.

要找$H$的本征态，就是找$T_{\vec{R}}$的本征态$\forall \vec{R}\in \text{Bravais lattice}$。我们试图构造$\vec{k}$，使得这些本征态满足：
$$\psi_{nk}(\vec{r}+\vec{R})=e^{i\vec{k}\cdot \vec{R}}\psi_{nk}(\vec{r})$$
略去下标不写，取本征态$\psi_{}(\vec{r})$，我们令$T_{\vec{R}}\psi(\vec{r})=c(\vec{R})\psi(\vec{r})$，其中$C(\vec{R})$为本征值。那么我们有：
$$\begin{align}
T_{\vec{R}^{'}}T_{\vec{R}}\psi(\vec{r}) & =T_{\vec{R}^{'}}c(\vec{R})\psi(\vec{r})=c(\vec{R}^{'})c(\vec{R})\psi(\vec{r})
\end{align}$$
OTOH，由于translation operator性质$T_{\vec{R}^{'}}T_{\vec{R}}=T_{\vec{R}^{'}+\vec{R}}$，且$\vec{R}^{'}+\vec{R}\in \text{Bravais lattice}$，那么必有：
$$T_{\vec{R}^{'}}T_{\vec{R}}\psi(\vec{r})=T_{\vec{R}^{'}+\vec{R}}\psi(\vec{r})=c(\vec{R}^{'}+\vec{R})\psi(\vec{r})$$
那么saffices to let $c(\vec{R}^{'}+\vec{R})=c(\vec{R}^{'})c(\vec{R})$。

那么接下来，若$\vec{R}=\sum_{i}n_{i}\vec{a}_{i}$，我有：
$$\begin{align}
c(\vec{R}) & =c\left( \sum_{i}n_{i}\vec{a}_{i} \right)  \\
 & = c(\vec{a}_{1})^{n_{1}}c(\vec{a}_{2})^{n_{2}}c(\vec{a}_{3})^{n_{3}} \\
 & = \exp(n_{1}\ln c(\vec{a}_{1})+n_{2}\ln c(\vec{a}_{2})+n_{3}\ln c(\vec{a}_{3})) \\
\end{align}\tag{*}$$
我们希望，$(*)$可以写为$\exp(i\vec{k}\cdot \vec{R})$的形式。令$\vec{k}=\sum_{j}x_{j}\vec{b}_{j}$，我们有：
$$c(\vec{R})=\exp(2\pi i(x_{1}n_{1}(\vec{k}_{1}\cdot \vec{a}_{1})+x_{2}n_{2}(\vec{k}_{2}\cdot \vec{a}_{2})+x_{3}n_{3}(\vec{k}_{3}\cdot \vec{a}_{3})))$$
那么只需要令：
$$x_{i}= \frac{\ln c(\vec{a}_{i})}{2\pi i(\vec{k}_{i}\cdot \vec{a}_{i})}$$
，我们就成功构造出了$\vec{k}$。然后由[[Solid state#^36bbd7|corollary 2.1.1]]，自然可以证到[[Solid state#^f343da|theorem 2.1.1]]。
>[!Right]
>$\blacksquare$

>[!Note] Definition 1
>Given a solution $\psi_{nk}(\vec{r})$ in Bloch's theorem, call the corresponding $\vec{k}$ the Bloch wave vector.
>

对于一个足够大固体，我们假设再固体边缘的边界条件不重要，即任何边界条件在热力学极限下都一样。若固体是$L\times L\times L$立方体，我们假设周期性边界条件：
$$\begin{align}
 & \psi(x+L,y,z)=\psi(x,y,z) \\
 & \psi(x,y+L,z)=\psi(x,y,z) \\
 & \psi(x,y,z+L)=\psi(x,y,z)
\end{align}$$
>[!Note] Proposition 2
>The allowed number of Bloch vectors in a k-space primitive cell is the total number of primitive cells in the r-space.
## Proof.
考虑一个bulk晶体。在$\vec{a}_{1},\vec{a}_{2},\vec{a}_{3}$方向上分别有$N_{1},N_{2},N_{3}$个primitive cell。那么由periodic boundary condition，我们有：
$$\psi\left( \vec{r}+\sum_{i}N_{i}\vec{a}_{i} \right)=\psi(\vec{r})$$
OTOH，由Bloch's theorem，我们有：
$$\psi\left( \vec{r}+\sum_{i}N_{i}\vec{a}_{i} \right)=\exp\left( i\vec{k}\cdot \sum_{i}N_{i}\vec{a}_{i} \right)\psi(\vec{r})$$
那么必有：
$$\exp\left( i\vec{k}\cdot \sum_{i}N_{i}\vec{a}_{i} \right)=1$$
那么令$\vec{k}=\sum_{j}x_{j}\vec{b}_{j}$，我们有：
$$\vec{k}\cdot \sum_{i}N_{i}\vec{a}_{i}=2\pi \sum_{i}x_{i}N_{i}=2\pi n,n\in \mathbb{Z}$$
由于$N_{i}$是一个比较大的任意整数，我们必有：
$$x_{i}= \frac{n_{i}}{N_{i}},\text{for some }n_{i}\in \mathbb{Z}$$
一个k-space的primitive cell是$\vec{b}_{1},\vec{b}_{2},\vec{b}_{3}$张成的。而$\vec{k}=\sum_{i} \frac{n_{i}}{N_{i}}\vec{b}_{i}$。所以$n_{i}$有$N_{i}$种选择。那么总共选择的个数为$N_{1}N_{2}N_{3}$。这就是r-space中primitive cell的个数。
>[!Right]
>$\blacksquare$


