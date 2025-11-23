# Table of Contents
# 1. Lattice structure
1.1 [[Solid state#^d5e805|Reciprocal lattice]]
1.2 [[Solid state#^84395a|Brillouin zone]]
# 2. Band structure
2.1 [[Solid state#^e9a184|Bloch's theorem]]
2.2 [[Solid state#^384a0c|Band structure]]
2.3 [[Solid state#^790c0e|Density of levels]]
2.4 [[Solid state#^48c77b|Tight-binding approximation]]

# 3. Models of electronic structure
3.1 [[Solid state#^c01609|Drude model]]
3.2 [[Solid state#^999493|Semiclassical model]]
3.3 [[Solid state#^7a571e|Bloch electrons in a magnetic field]]

# 1.1 Reciprocal lattice 

^d5e805

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

^84395a

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

>[!Note] Proposition 2
>FBZ is symmetric with respect to the origin. That means $\vec{k}\in \text{FBZ}\implies-\vec{k}\in \text{FBZ}$

^proposition122
## Proof.
取$\vec{k}\in \text{FBZ}$，则：
$$|\vec{k}|\leq |\vec{K}-\vec{k}|,\forall \vec{K}\in \text{Bravais lattice}$$
我们取$\vec{K}_{min}$ such that:
$$|\vec{K}_{min}-\vec{k}|\leq |\vec{K}-\vec{k}|,\forall \vec{K}$$
则有：
$$|\vec{K}_{min}-\vec{k}|\leq |-\vec{K}-\vec{k}|=|\vec{K}+\vec{k}|,\forall \vec{K}$$
于是：
$$|-\vec{k}|=|\vec{k}|\leq |\vec{K}_{min}-\vec{k}|\leq |\vec{K}+\vec{k}|,\forall \vec{K}$$
于是$\vec{k}\in \text{FBZ}$。
>[!Right]
>$\blacksquare$
# 2. Band structure
# 2.1 Bloch's theorem

^e9a184

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
略去下标不写，取本征态$\psi_{}(\vec{r})$，我们令$T_{\vec{R}}\psi(\vec{r})=c(\vec{R})\psi(\vec{r})$，其中$c(\vec{R})$为本征值。那么我们有：
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
# 2.2 Band structure

^384a0c

我们已经知道，晶体内电子波函数存在解$\psi_{}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{}(\vec{r})$。我们可以根据Schrodinger方程得到$u(\vec{r}e)$需要满足的方程：

>[!Note] Proposition 1
>$\left( - \frac{\hbar^{2}}{2m}(i\vec{k}+\nabla)+V \right)u=\epsilon u$, denote $H_{\vec{k}}=\left( - \frac{\hbar^{2}}{2m}(i\vec{k}+\nabla)^{2}+V \right)$
## Proof.
我们知道：
$$\left( - \frac{\hbar^{2}}{2m}\nabla^{2}+V \right)\psi=\epsilon \psi$$
我们先计算：
$$\begin{align}
\nabla \psi & = \nabla(e^{i\vec{k}\cdot \vec{r}}u(\vec{r})) \\
 & = i\vec{k}e^{i\vec{k}\cdot \vec{r}}u(\vec{r})+ e^{i\vec{k}\cdot \vec{r}}\nabla u(\vec{r}) \\
 & = e^{i\vec{k}\cdot \vec{r}}(i\vec{k}+\nabla )u
\end{align}$$
然后：
$$\begin{align}
\nabla^{2}\psi & =\nabla \cdot \nabla \psi \\
 & = \nabla \cdot(e^{i\vec{k}\cdot \vec{r}}(i\vec{k}+\nabla)u) \\
 & = \partial_{i}e_{i}\cdot(e^{i\vec{k}\cdot \vec{r}}(ik_{j}e_{j}+e_{j}\partial_{j})u) \\
 & = \partial_{i}(e^{i\vec{k}\cdot \vec{r}}(ik_{i}+\partial_{i})u) \\
 & = ik_{i}e^{i\vec{k}\cdot \vec{r}}(ik_{i}+\partial_{i})u+ e^{i\vec{k}\cdot \vec{r}}(ik_{i}+\partial_{i})\partial_{i}u \\
 & = e^{i\vec{k}\cdot \vec{r}}(ik_{i}+\partial_{i})^{2}u \\
 & = e^{i\vec{k}\cdot \vec{r}}(i\vec{k}+\nabla)^{2}u
\end{align}$$
所以代入后约掉$e^{i\vec{k}\cdot \vec{r}}$就是显然。
>[!Right]
>$\blacksquare$


注意到该方程式有一个parameter $\vec{k}$。Impose boundary condition:
$$u(\vec{r}+\vec{R})=u(\vec{r})$$
我们就只考虑一个primitive cell中的解。那么能级会量子化。这引出第二个parameter $n$。所以我们加上所有parameter的脚标得到：
$$\left( - \frac{\hbar^{2}}{2m}(i\vec{k}+\nabla)^{2}+V(\vec{r})\right)u_{nk}(\vec{r})=\epsilon_{n}(\vec{k})u_{nk}(\vec{r})$$
则称$\epsilon_{n}(\vec{k})$为band structure。每个$\epsilon_{n}(\vec{k})$描述了一个non-degenerate的电子能量本征态。

>[!Note] Definition 1
>Fix $n$, $\epsilon_{n}(\vec{k})$ is called an energy band.
## Remark
在绘制band sturcture时，我们通常选取first Brillouin zone中从原点$\Gamma$开始的一条曲线，沿这条曲线画出$\epsilon_{n}(\vec{k})$ v.s. $\vec{k}$。


我们只需要研究reciprocal primitive cell中的$\epsilon_{n}(\vec{k})$。这是因为，给定$\vec{k}+\vec{K},\vec{k}$，分别算出$u_{n,\vec{k}+\vec{K}},u_{n,\vec{k}}$，$\epsilon_{n}(\vec{k}+\vec{K}),\epsilon_{n}(\vec{k})$，我们宣称：

>[!Note] Proposition 1
$\epsilon_{n}(\vec{k}+\vec{K})=\epsilon_{n}(\vec{k})$
## Proof.
回忆起，对于$\psi_{n,\vec{k}}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$，它必满足方程：
$$\left( -\frac{\hbar^{2}}{2m}(i\vec{k}+\nabla)^{2}+V \right)u(\vec{r})=\epsilon u(\vec{r})\tag{*}$$
而：
$$\begin{align}
\psi_{n,\vec{k}+\vec{K}}(\vec{r}) & =e^{i(\vec{k}+\vec{K})\cdot \vec{r}}u_{n,\vec{k}+\vec{K}}(\vec{r}) \\
 & = e^{i\vec{k}\cdot \vec{r}}(e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}+\vec{K}}(\vec{r}))
\end{align}\tag{**}$$
而$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}+\vec{K}}(\vec{r})$也具有周期性：
$$\begin{align}
e^{i\vec{K}\cdot(\vec{r}+\vec{R}) }u_{n,\vec{k}+\vec{K}}(\vec{r}+\vec{R}) & = e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}+\vec{K}}(\vec{r})
\end{align}$$
所以$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}+\vec{K}}(\vec{r})$也是一个Bloch定理中的$u_{n,\vec{k}}$函数。将$(* *)$代入Schrodinger方程，发现$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$以相同的$n,\vec{k}$系数满足$(*)$。所以$\psi_{n,\vec{k}},\psi_{n,\vec{k}+\vec{K}}$，或者说$u_{n,\vec{k}},u_{n,\vec{k}+\vec{K}}$算出来本征值一样的。
>[!Right]
>$\blacksquare$
## Remark
我们已经解得所有的特征值为$\epsilon_{n}(\vec{k})$的本征态$\psi_{n,\vec{k}}$。我们知道，$\psi_{n,\vec{k}+\vec{K}}$和$\psi_{n,\vec{k}}$在同一个能量特征子空间中，所以$\psi_{n,\vec{k}+\vec{K}}$一定可以由$\psi_{n,\vec{k}}$线性组合表示出来，就不是独立的态。所以要考虑线性独立的态，就只需要考虑FBZ中的态。这也是为什么我们作统计力学平均时，只在FBZ中积分。

## Ex:
考虑$V$，有五个价电子。则一个可能的band structure是：
<div style="text-align:center">
<img src="Pasted image 20251109234839.png"  width="200">
</div>

Gamma代表first Brillouin zone原点，图是沿$[1\ 0\ 0]$画的。$X$代表$[1\ 0\ 0]$和first Brillouin zone的交点。五个价电子在某个相同的Bloch波矢$\vec{k}$上占据五个不同的态$n$。在做DFT calculation的时候，必须选择一种orbital configuration。因为不同的orbital上势非常地不同。


我们发现，若约束能量$\epsilon_{n}(\vec{k})$，我们可以得到k-space中的一个等能量面。当然，真实电子的$\vec{k}$只能取该等能量面上的一些离散的，符合periodic boundary condition的点。但是我们完全可以将所有东西都连续化。

对于一个电子体系，在$0K$下，存在一个电子最高的能量$\epsilon_{F}$。则定义：

>[!Note] Definition 2
>Fix $n$, define a branch Fermi surface of an electron system as:
>$$\{ \vec{k}|\epsilon_{n}(\vec{k})=\epsilon_{F} \}\subset \text{k-space}$$
>Define the set of all branches of the Fermi surface with all possible $n$ as the Fermi surface.
## Ex:
考虑自由电子，即$U=0$。显然任意一个电子满足方程：
$$- \frac{\hbar^{2}}{2m}\nabla^{2}\psi=\epsilon(\vec{k})\psi$$
容易得到band structure: $\epsilon(\vec{k})= \frac{\hbar^{2}k^{2}}{2m}$。则Fermi surface为$\partial B\left( 0,\sqrt{ \frac{2m\epsilon_{F}}{\hbar^{2}} } \right)$，是一个球面。这个Fermi surface就一个branch。

>[!Note] Definition 3
>- The valence band is $\epsilon_{n}$ with the largest $n$ such that $\epsilon_{n}(\vec{k})\leq \epsilon_{F},\forall \vec{k}\in \text{first Brilloin zone}$.
>- The conduction band is $\epsilon_{n}$ with the smallest $n$ such that $\epsilon_{n}(\vec{k})\geq \epsilon_{F},\forall \vec{k}\in \text{first Brilloin zone}$.

>[!Note] Definition 4
>Define:
>- Metal: Fermi level can cross some bands
>- Semiconductor: Fermi level doesn't intersect any bands, and the energy gap between the conduction band and the valence band is small.
>	- Direct gap semiconductor: the extrema of the conduction and valence bands are attained at the same $\vec{k}$
>	- Indirect gap semiconductor: the extrema of the conduction and valence bands are attained at different $\vec{k}$
>- Insulator: Fermi level doesn't intersect any bands, and the energy gap between the conduction band and the valence band is large.
 
# 2.3 Density of levels

^790c0e

我们经常要计算如下形式的求和：
$$2\sum_{n,\vec{k}}Q(\vec{k})$$
## Ex:
例如说，我要计算某个给定能带中的电子数。考虑fermion的Fermi-Dirac分布：
$$\langle n\rangle= \frac{1}{\exp(\beta(\epsilon-\mu))+1}$$
而每个电子又有两个spin。所以能带$\epsilon_{n}(\vec{k})$中电子数为：
$$2\sum_{n,\vec{k}} \frac{1}{\exp(\beta(\epsilon_{n}(\vec{k})-\mu))+1}$$

我们可以将求和近似为积分。我们有：
$$\sum_{\vec{k}}\sim \int d^{3}n$$
而由于periodic boundary condition，每个$\vec{k}$须满足：
$$\vec{k}=\sum_{i} \frac{n_{i}}{N_{i}}\vec{b}_{i}$$
where $N_{i}$是$\vec{b}_{i}$方向上primitive cell的个数，$n_{i}$为任意整数。那么由Jacobian，显然有：
$$\int d^{3}n=N_{1}N_{2}N_{3}  \frac{1}{|\vec{b}_{1}\cdot(\vec{b}_{2}\times \vec{b}_{3})|} \int d^{3}k= N \frac{1}{(2\pi)^{3} /v}\int d^{3}k=V \frac{1}{(2\pi)^{3}}\int d^{3}k $$
其中，$\vec{k}$只取k-space中primitive cell中的对偶矢。

我们显然可以用等能量面将测度拆分：
$$d^{3}k=d\epsilon_{} \frac{dS}{|\nabla\epsilon_{n}|}$$
所以积分可以写为：
$$\begin{align}
\frac{V}{(2\pi)^{3}} \int d\epsilon \int \frac{dS}{|\nabla\epsilon_{n}|}
\end{align}$$
则即算单位体积中的$2\sum_{n,\vec{k}}Q(\vec{k})$就有：
$$\begin{align}
\frac{1}{V} 2\sum_{n,\vec{k}}\sim \frac{1}{4\pi^{3}}\int d\epsilon \int \frac{dS}{|\nabla\epsilon_{n}|}
\end{align}$$
可以定义测度：

>[!Note] Definition 1
>Define the density of levels associated with the band $\epsilon_{n}$: $g(\epsilon)= \frac{1}{4\pi^{3}}\int \frac{dS}{|\nabla\epsilon_{n}|}$

# 2.4 Tight-binding approximation

^48c77b

考虑一个晶体。对于晶体中的一个电子，存在Hamiltonian $H$。我们假设，这个Hamiltonian可以拆为一个isolated原子的Hamiltonina $H_{at}$，和一个一堆原子组合在一起，形成的势能差异$\Delta U$。

## 2.4.1 Naive tight-binding approximation

我们假设naive tight-binding model：
- 电子是tight-binding的，即电子的运动足够局域，以至于波函数$\psi_{n,\vec{k}}(\vec{r})$在$\vec{r}$较大（假设原子核在原点）时，几乎为零。
- 势能差异$\Delta U(\vec{r})$在$\vec{r}$较小时几乎为零。也就是说在电子距离核较近时，感受到的作用几乎就是一个单独原子的作用，不存在其它原子的"perturbation" $\Delta U$。而$\Delta U(\vec{r})$仅在$\vec{r}$较大时才有appreciable的值。
- 我们假设，在$\psi_{n,\vec{k}}(\vec{r})\neq 0$时，电子离核较近，$\Delta U(\vec{r})=0$。在一定远的距离，$\psi_{n,\vec{k}}$足够小时，我们强行令$\psi_{n,\vec{k}}$为零。那么假设在$\Delta U(\vec{r})\neq 0$，电子离核较远，$\psi_{n,\vec{k}}(\vec{r})=0$。
### Remark
在naive tight-binding model中，对于$H_{at}$的具体形式，我们假设它为$\frac{p^{2}}{2m}+U$，其中$U$是isolated原子的势能。$U$在离第一个原子近时，就是第一个原子isolated时的势能，在离第二个原子近时，就是第二个原子isolated时的势能,...所以$U$实际上是一个原子的isolated时势能的无限重复，是一个空间上的分段函数。可以将第一个原子isolated时势能平移$\vec{R}$得到位于$\vec{R}$原子时的势能。所以实际上$\psi_{n}(\vec{r}-\vec{R})$也是$H_{at}$本征态$\forall \vec{R}\in \text{Bravais lattice}$。


>[!Note] Proposition 1
>Let $\psi_{n}(\vec{r})$ be the eigenstate of an isolated atom. Then $\psi_{n}(\vec{r}-\vec{R}),\forall \vec{R}\in \text{Bravais lattice}$ is an eigenstate of a lattice electron in the naive tight-binding model.
## Proof.
在naive tight-binding model下，令$\psi_{n}(\vec{r})$为isolated原子的本征态。Fix $\vec{R}$，则有：
$$(H_{at}+\Delta U)\psi_{n}(\vec{r}-\vec{R})=H_{at}\psi_{n}(\vec{r}-\vec{R})=E_{n}\psi_{n}(\vec{r}-\vec{R})$$
其中，$\Delta U$可以忽略，是因为naive tight-binding modle中，只有在$\Delta U$很小的地方，才有不可忽略的$\psi_{n}(\vec{r}-\vec{R})$。

另外需注意，在$H_{at}$作用在$\psi_{n}(\vec{r}-\vec{R})$时，势能自动取$\vec{R}$处原子的isolated势能。这是因为当$\vec{r}$显著不同于$\vec{R}$时，$\psi_{n}$已经很小了。这就是remark中的内容。
>[!Right]
>$\blacksquare$

这也就是说，$\psi_{n}(\vec{r}-\vec{R})$是$H_{at}$本征值为$E_{n}$的本征态，那么真正的波函数$\psi_{n,\vec{k}}$就必是$\psi_{n}(\vec{r}-\vec{R})$的线性组合！（注意$\psi_{n}$本身是degenerate的。线性组合相加时还应考虑$l,m$的degeneracy。）这也就是说，$\{ \psi_{n}(\vec{r}-\vec{R}) \}$是一组合适的基。

那么就有：
$$\psi_{n,\vec{k}}(\vec{r})=\sum_{\vec{R}}\sum_{\text{degenerate states of }\psi_{n}}c_{\vec{R}}\psi_{n}(\vec{r}-\vec{R})$$
我们需要选取合适的$c_{\vec{R}}$，以至于$\psi_{n,\vec{k}}(\vec{r})$满足Bloch条件。令$c_{\vec{R}}=e^{i\vec{k}\cdot \vec{R}}$，则可以满足Bloch条件：
$$\begin{align}
\psi_{n,\vec{k}}(\vec{r}+\vec{R}^{'}) & =\sum_{\vec{R}}\sum_{\text{degenerate states of }\psi_{n} }e^{i\vec{k}\cdot \vec{R}}\psi_{n}(\vec{r}+\vec{R}^{'}-\vec{R}) \\
 & = e^{i\vec{k}\cdot \vec{R}^{'}}\sum_{\vec{R}}\sum_{\text{degenerate states of }\psi_{n}} e^{i\vec{k}\cdot(\vec{R}-\vec{R}^{'})}\psi_{n}(\vec{r}+\vec{R}^{'}-\vec{R}) \\
 & = e^{i\vec{k}\cdot \vec{R}^{'}}\sum_{\vec{R}}\sum_{\text{degenerate states of }\psi_{n}} e^{i\vec{k}\cdot \vec{R}}\psi_{n}(\vec{r}-\vec{R}) \\
 & = e^{i\vec{k}\cdot \vec{R}^{'}}\psi_{n,\vec{k} }(\vec{r})
\end{align}$$
所以naive tight-binding model中波函数为：
$$\psi_{n,\vec{k}}(\vec{r})=\sum_{\vec{R}}\sum_{\text{degenerate states of }\psi_{n}} e^{i\vec{k}\cdot \vec{R}}\psi_{n}(\vec{r}-\vec{R})$$
但是这种approximation太过于粗糙，因为$\psi_{n,\vec{k}}$得到的能量是$E_{n}$ independent of $\vec{k}$。它不足以揭示band structure。所以进一步有：
## 2.4.2 Tight-binding approximation

假设tight-binding model：
- 电子是tight-binding的，即电子的运动足够局域，以至于波函数$\psi_{n,\vec{k}}(\vec{r})$在$\vec{r}$较大（假设原子核在原点）时，几乎为零。
- 势能差异$\Delta U(\vec{r})$在$\vec{r}$较小时几乎为零。也就是说在电子距离核较近时，感受到的作用几乎就是一个单独原子的作用，不存在其它原子的"perturbation" $\Delta U$。而$\Delta U(\vec{r})$仅在$\vec{r}$较大时才有appreciable的值。
- 我们假设，在$\psi_{n,\vec{k}}(\vec{r})$较大时，电子离核较近，$\Delta U(\vec{r})$很小。在$\Delta U(\vec{r})$较大时，电子离核较远，$\psi_{n,\vec{k}}(\vec{r})$很小。

那么这时，我们不再有$\psi_{n,\vec{k}}(\vec{r})=\sum_{\vec{R}}c_{\vec{R}}\psi_{n}(\vec{r}-\vec{R})$。我们的$\psi_{n}$受到一定微扰。我们写：
$$\psi_{n,\vec{k}}(\vec{r})=\sum_{\vec{R}}c_{\vec{R}}\phi(\vec{r}-\vec{R})$$
因为$\ket{\psi_{n}}$形成Hilbert空间中完备基，我们可以展开：
$$\phi(\vec{r})=\sum_{m}b_{m}\psi_{m}(\vec{r})$$
那么相同地，取$c_{\vec{R}}=e^{i\vec{k}\cdot \vec{R}}$，容易证明$\psi_{n,\vec{k}}$满足Bloch条件。这样，波函数就有如下形式：
$$\psi_{n,\vec{k}}(\vec{r})=\sum_{\vec{R}}e^{i\vec{k}\cdot \vec{R}}\phi(\vec{r}-\vec{R})$$
接下来我们有： 
$$\begin{align}
 & (H_{at}+\Delta U(\vec{r}))\psi_{n,\vec{k}}(\vec{r})=\epsilon_{n}(\vec{k})\psi_{n,\vec{k}}(\vec{r}) \\
\implies & \int d^{3}r\psi ^{*}_{m}(\vec{r})(H_{at}+\Delta U)\psi_{n,\vec{k}}(\vec{r})= \int d^{3}r\psi ^{*}_{m}(\vec{r})\epsilon_{n}(\vec{k})\psi_{n,\vec{k}}(\vec{r}) \\
\implies & \int d^{3}rE_{m}\psi ^{*}_{m}\psi_{n,\vec{k}}+\int d^{3}r\psi_{m}^{*}\Delta U\psi_{n,\vec{k}}=\int d^{3}r \epsilon_{n}(\vec{k})\psi ^{*}_{m}(\vec{r})\psi_{n,\vec{k}}(\vec{r}) \\
\implies & E_{m}\sum_{\vec{R},l}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R})+\sum_{\vec{R},l}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\Delta U(\vec{r})\psi_{l}(\vec{r}-\vec{R})=\epsilon_{n}(\vec{k})\sum_{\vec{R},l}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R})
\end{align}\ . . . \ (*)$$
注意到：
$$\begin{align}
\sum_{\vec{R},l }e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R}) &  = \sum_{l}\sum_{\vec{R}\neq{0}}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R}) + \sum_{l}b_{l}\delta_{ml} \\
 & = \sum_{l}\sum_{\vec{R}\neq{0}}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R})+b_{m}
\end{align}$$
所以$(*)$变为：
$$\begin{align}
 & E_{m}b_{m}+E_{m}\sum_{l}\sum_{\vec{R}\neq 0}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R})+\sum_{l}\sum_{\vec{R}\neq 0}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\Delta U(\vec{r})\psi_{l}(\vec{r}-\vec{R})+\sum_{l}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\Delta U(\vec{r})\psi_{l}(\vec{r})=\epsilon_{n}(\vec{k})b_{m}+\epsilon_{n}(\vec{k})\sum_{l}\sum_{\vec{R}\neq 0}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\psi_{l}(\vec{r}-\vec{R}) \\
\implies  & (E_{m}-\epsilon_{n}(\vec{k}))b_{m}=(\epsilon_{n}(\vec{k})-E_{m})\sum_{l}\sum_{\vec{R}\neq 0} \int d^{3}rb_{l}\psi_{m}^{*}(\vec{r})\psi_{l}(\vec{r}-\vec{R})-\sum_{l}\sum_{\vec{R}\neq 0}e^{i\vec{k}\cdot \vec{R}}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\Delta U(\vec{r})\psi_{l}(\vec{r}-\vec{R})-\sum_{l}\int d^{3}rb_{l}\psi ^{*}_{m}(\vec{r})\Delta U(\vec{r})\psi_{l}(\vec{r})
\end{align}\ . . . \ (* *)$$
### Remark
理论上来说，我们可以算出任意$b_{m}$，进而算出$\phi(\vec{r})$，从而得到$\psi_{n,\vec{k}}(\vec{r})$。上面所有的结果都是精确的，没有用到任何近似。如果对于所有的$\psi_{m}$都相应地计算出$b_{m}$，那么得到的结果就是完全精确的。


但实际上，由于波函数$\psi_{n}(\vec{r})$的定域性，$(* *)$右手边第一项第二项都很小。又由于，$\Delta U$在$\psi_{n}(\vec{r})$显著时会很小，右手边第三项也很小。这就导致左手边较大的$b_{m}$都是在$\epsilon_{n}(\vec{k})$接近某个$E_{m}$时获得的。所以有显著贡献的项就只有$E_{m}$本征态，最多再加上其它一些也离得很近的本征波函数。

### Ex:
例如存在一个能带$\epsilon_{n}(\vec{k})$非常接近$E_{1s}$。$E_{1}$对应的本征态就只有$1s$一个。那么我们就只取$1s$这一个本征态作$\psi_{m}$来作近似。算出来的band称为d-band。

### Ex:
例如存在一个能带$\epsilon_{n}(\vec{k})$非常接近$E_{2p}$。$E_{2p}$对应的本征态有$2p$共三个。那么我们就取$2p$作$\psi_{m}$来作近似。算出来的band称为p-band。

### Ex:
对于过渡金属，一般有一个s-shell和partially filled d-shell。因为$E_{ns}$和$E_{(n-1)d}$非常接近，我们把$ns,(n-1)d$的本征态都作为基。这种现象称为hybridization。
## Remark
在多电子体系中，一般$E_{ns}\neq E_{np}$。只是氢原子里面它们一样。


# 3.1 Drude model

^c01609

考虑这样一种电子运动的经典模型：
- 电子之间无碰撞和库伦相互作用。电子与离子核之间无库伦相互作用·。
- 电子可以和离子核碰撞，使得速度突变。突变后速度与突变前速度无关。
- 离子核不会在外场作用下产生polarization。

可以得到电子的equation of motion。令碰撞之间平均时间为$\tau$。那么追踪$t$时刻任意动量为$\vec{p}$的电子，希望得到$\vec{p}(t+dt)$。电子有$\frac{dt}{\tau}$的概率发生碰撞。若不发生碰撞，显然$\vec{p}(t+dt)=\vec{p}(t)+\vec{f}dt$。若发生碰撞，因为速度是随机的，平均下来大概是零。那么动量就纯靠$\vec{f}$获取。则有$\vec{p}(t+dt)=\vec{f}dT$。其中$dT<dt$为碰撞后到$t+dt$的时间。于是平均下来：
$$\begin{align}
\vec{p}(t+dt) & = \left( 1- \frac{dt}{\tau} \right)(\vec{p}(t)+\vec{f}dt)+ \frac{dt}{\tau}\vec{f}dT \\
 & = \vec{p}(t)+\vec{f}dt- \frac{\vec{p}(t)}{\tau}dt+\mathcal{O}(dt^{2}) \\
\implies \frac{d\vec{p}}{dt} & =- \frac{\vec{p}}{\tau}+\vec{f}
\end{align}$$
>[!Note] Proposition
>The equation of motion of electrons under Drude model is:
>$$\frac{d\vec{p}}{dt}=- \frac{\vec{p}}{\tau}+\vec{f}$$
## 3.1.1 电子对电场的response

下面研究金属中电子在电场下的response。考虑电场的Fourier分解：
$$\vec{E}(\vec{r},t)=\int d^{3}kd\omega \vec{E}(\vec{k},\omega)e^{i(\vec{k}\cdot \vec{r}-\omega t)}$$
于是电子的equation of motion为：
$$\frac{d\vec{p}}{dt}=- \frac{\vec{p}}{\tau}+e\int d^{3}kd\omega \vec{E}(\vec{k},\omega)e^{i(\vec{k}\cdot \vec{r}-\omega t)}$$
对$\vec{p}$作Fourier分解。令：
$$\vec{p}(\vec{r},t)=\int d^{3}kd\omega\vec{p}(\vec{k},\omega)e^{i(\vec{k}\cdot \vec{r}-\omega t)}$$
那么：
$$\begin{align}
 & -i\omega \vec{p}(\vec{k},\omega)=- \frac{\vec{p}(\vec{k},\omega)}{\tau}+e\vec{E}(\vec{k},\omega) \\
\implies & \vec{p}(\vec{k},\omega)= \frac{e\vec{E}(\vec{k},\omega)}{\frac{1}{\tau}-i\omega} \\
 
\end{align}$$

所以可以得到电流密度：
$$\begin{align}
 & \vec{j}(\vec{r},t)=ne \frac{\vec{p}(\vec{r},t)}{m}=\frac{ne^{2}}{m} \int d^{3}kd\omega \frac{\vec{E}(\vec{k},\omega)}{\frac{1}{\tau}-i\omega}e^{i(\vec{k}\cdot \vec{r}-\omega t)}
\end{align}$$
或者提取出它的Fourier component得到：
$$\vec{j}(\vec{k},\omega)= \frac{ne^{2}}{m} \frac{\vec{E}(\vec{k},\omega)}{\frac{1}{\tau}-i\omega}$$
定义$\sigma(\omega)= \frac{ne^{2}}{m} \frac{1}{\frac{1}{\tau}-i\omega}$，则：
$$\vec{j}(\vec{k},\omega)=\sigma(\omega)\vec{E}(\vec{k},\omega)$$

## 3.1.2 Dielectric constant

考虑方程：
$$\begin{align}
 & \nabla \times \vec{H}=\frac{4\pi}{c}\vec{j}+ \frac{1}{c} \frac{\partial \vec{D}}{\partial t} \end{align}$$
容易证明，对于任意函数$\vec{f}(\vec{r},t)$，在Fourier变换后空间可以得到相应算子。即：
$$\begin{align}
 & \nabla \times \vec{f}(\vec{r},t)=\nabla \times \int d^{3}kd\omega \vec{f}(\vec{k},\omega)e^{i(\vec{k}\cdot \vec{r}-\omega t)}=\epsilon_{ijk}e_{i}\partial_{j}\int d^{3}kd\omega f_{k}e^{i(\vec{k}\cdot \vec{r}-\omega t)}=ie_{i}\epsilon_{ijk}k_{j}\int d^{3}kd\omega f_{k}e^{i(\vec{k}\cdot \vec{r}-\omega t)}=\int d^{3}kd\omega (i\vec{k})\times(\vec{k},\omega) \vec{f}e^{i(\vec{k}\cdot \vec{r}-\omega t)} \\
  & \nabla \cdot \vec{f}(\vec{r},t)=\int d^{3}kd\omega (i\vec{k})\cdot \vec{f}(\vec{r},t) \\
& \frac{\partial}{\partial t}\vec{f}(\vec{r},t)=\int d^{3}kd\omega(-i\omega)\vec{f}(\vec{k},\omega)e^{i(\vec{k}\cdot \vec{r}-\omega t)}
\end{align}$$
所以在Fourier变换后空间，上述方程写为：
$$\begin{align}
 & i\vec{k}\times \vec{H}= \frac{4\pi}{c}\vec{j}+ \frac{-i\omega}{c}\vec{D} \\
 
\end{align}$$
回忆起本构关系：
$$\vec{D}(\vec{r},t)=\vec{E}(\vec{r},t)+4\pi\vec{P}(\vec{r},t)$$
我们在Drude model中假设所有电子的运动都是自由电流，不算在polarization中。唯有离子核可以产生polarization。但是我们假设过离子核不会被外场拉扯出polarization，所以$\vec{P}=0$。所以$\vec{D}(\vec{r},t)=\vec{E}(\vec{r},t)$。这在Fourier变换后也一样。

利用$\vec{j}(\vec{k},\omega)=\sigma(\omega)\vec{E}(\vec{k},\omega)$，我们有：
$$\begin{align}
i\vec{k}\times \vec{H} & = \frac{4\pi \sigma}{c}\vec{E}- \frac{i\omega}{c}\vec{D} \\
 & =\frac{4\pi \sigma}{c}\vec{E}- \frac{i\omega}{c} \vec{E} \\
 & = -  \frac{i\omega}{c} \left( \frac{4\pi i\sigma}{\omega}+1 \right)\vec{E}
\end{align}$$
于是我们可以提取出一个等效dielectric constant，假设所有电流都是Bound电流。
## Remark
什么电流是自由电流，什么电流是极化出来的电流，这都取决于定义。我可以规定一些电荷的移动为自由电流，那么其它的就都不是自由电流。我们最好将真空Maxwell方程和物质中Maxwell方程当做两套平行的公理接受。我可以规定一些电荷为自由电荷，它们的移动是自由电流。然后根据物质中Maxwell方程解出$\vec{D}$。相应地，我也可以在同一点，考虑所有电荷，根据真空Maxwell方程解出$\vec{E}$。它们的差异就是$\vec{P}$。它描述电场对于不是自由电荷那部分的电荷的极化。根据我对自由电荷的定义不同，解得的$\vec{D}$不同，（$\vec{E}$总是相同的。）我就得到不同的极化。这是自然的，因为我对于束缚电荷的定义本来就改变了，这些束缚电荷的极化改变也很正常。

于是得到：

>[!Note] Proposition 1
>If we treat all charges in metal as bound charges, the Drude model gives:
$$\epsilon(\omega)= 1+ \frac{4\pi i\sigma(\omega)}{\omega}$$

我们还可以得到趋肤效应。考虑：
$$\begin{align}
 & i\vec{k}\times(i\vec{k}\times \vec{H})  =- \frac{i\omega}{c}\epsilon (i\vec{k})\times\vec{E} \\
\end{align}$$
因为我们假设$\mu=1$，所以：
$$i\vec{k}\cdot \vec{B}=0\implies i\vec{k}\cdot \vec{H}=0$$
故：
$$k^{2}\vec{H}= \frac{\omega}{c}\epsilon \vec{k}\times \vec{E}$$
回忆起：
$$\text{Real space}: \nabla \times \vec{E}=- \frac{1}{c} \frac{\partial}{\partial t}\vec{B}\implies \text{After Fourier transform: } i\vec{k}\times \vec{E}=- \frac{1}{c}(-i\omega)\vec{B}=\frac{i\omega}{c}\vec{H}$$
故：
$$k^{2}\vec{H}= \frac{\omega^{2}}{c^{2}}\epsilon \vec{H}\tag{*}$$
根据$\epsilon$的正负，$\vec{H}$有可能exponential decay或者oscillatory。我们下面来估计$\epsilon$：
$$\begin{align}
\epsilon & =1+ \frac{4\pi i\sigma}{\omega} \\
 & = 1+ \frac{4\pi i}{\omega} \frac{ne^{2}}{m} \frac{1}{\frac{1}{\tau}-i\omega} \\
 & = 1+ 4\pi i \frac{ne^{2}\tau}{m\omega} \frac{1}{1-i\tau \omega} \\
 & \approx 1- \frac{4\pi ne^{2}\tau}{m} \frac{1}{\omega^{2}}\text{ if }\tau \omega\gg 1
\end{align}$$
则若电场振动越快，$\epsilon$就越正。$\epsilon$越正，我就越有从$(*)$解得实的$\omega$。实的$\omega$ Fourier逆变换回去就是oscillatory。电磁波就越有可能穿透。此时金属就变透明了。



# 3.2 Semiclassical model

^999493

(c.f. Mermin chapter 12)

## 3.2.1 Semiclassical velocity
### 3.2.1.1群速理解

考虑一个periodic potential中的电子。它的波函数可以是Bloch态的叠加。（容易验证，这个态是一个Bloch态。）我们写：
$$\psi(\vec{r},t)=\sum_{\vec{k}}g(\vec{k})\psi_{n,\vec{k}}(\vec{r})\exp\left( - \frac{i}{\hbar}\epsilon_{n}(\vec{k})t \right)$$
我们假设，波函数足够局域，以至于$\vec{k}$都被局限在$\vec{k}_{c}$周围。那么对于时间相位可以展开：
$$\epsilon_{n}(\vec{k})=\epsilon_{n}(\vec{k}_{c})+\nabla_{\vec{k}}\epsilon_{n}\cdot(\vec{k}-\vec{k}_{c})$$
其中，$\epsilon_{n}(\vec{k}_{c})$较大，为快相位。$\nabla_{\vec{k}}\epsilon_{n}\cdot(\vec{k}-\vec{k}_{c})$较小，为慢相位，决定envelope的运动。容易得到群速：
$$v_{g}= \frac{1}{\hbar} \nabla_{\vec{k}}\epsilon_{n}$$

因为波包足够小，我们给波包assign一个大概的位置$\vec{r}$。显然波包的这个大概位置只能大概以群速运动。则要求：
$$\dot{\vec{r}}=\frac{1}{\hbar}\nabla_{\vec{k}}\epsilon_{n}$$
### 3.2.1.2 平均速度理解

考虑一个Bloch态$\psi_{n,\vec{k}}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$

>[!Note] Proposition 1
>$$\langle \vec{v}\rangle= \frac{1}{\hbar} \frac{\partial}{\partial \vec{k}}\epsilon_{n}$$
## Proof.
我们想要计算：
$$\langle \vec{v} \rangle = \frac{1}{m}\langle \vec{p}\rangle= \frac{1}{m} \int d^{3}r \psi_{n,\vec{k}}^{*}(-i\hbar \nabla)\psi_{n,\vec{k}}$$
>[!Note] Claim
>$$\frac{\partial\epsilon_{n}}{\partial \vec{k}}=  \bra{u_{n,\vec{k}}} \frac{\partial  H_{\vec{k}}}{\partial \vec{k}}\ket{u_{n,\vec{k}}} $$
### Proof of claim
考虑：
$$H_{\vec{k}+d\vec{k}}= H_{\vec{k}}+ \frac{\partial H_{\vec{k}}}{\partial \vec{k}} \cdot d\vec{k}$$
这相当于是Hamiltonian的一个perturbation。则一阶能量微扰为：
$$\begin{align}
d\epsilon_{n} & = \bra{\psi_{n,\vec{k}}} \frac{\partial H_{\vec{k}}}{\partial \vec{k}}\cdot d\vec{k}\ket{\psi_{n,\vec{k}}} \\
 & = \bra{u_{n,\vec{k}}}  \frac{\partial H_{\vec{k}}}{\partial \vec{k}}\cdot d\vec{k}\ket{u_{n,\vec{k}}}   
\end{align}$$
而另一方面，显然能量微扰又为：
$$\epsilon_{n}(\vec{k}+d\vec{k})=\epsilon_{n}(\vec{k})+ \frac{\partial\epsilon_{n}}{\partial \vec{k}}\cdot d\vec{k}$$
所以必有：
$$\frac{\partial\epsilon_{n}}{\partial \vec{k}}\cdot d\vec{k}= \bra{u_{n,\vec{k}}}  \frac{\partial H_{\vec{k}}}{\partial \vec{k}}\ket{u_{n,\vec{k}}} \cdot d\vec{k},\forall d\vec{k}$$
脱去$d\vec{k}$即可。

回到正题。我们发现：
$$\begin{align}
\frac{\partial H_{\vec{k}}}{\partial \vec{k}} & = \frac{\partial}{\partial \vec{k}}\left( - \frac{\hbar^{2}}{2m}(i\vec{k}+\nabla)^{2}+V \right) \\
 & = - \frac{\hbar^{2}}{m}(i\vec{k}+\nabla)i \\
 & = \frac{\hbar^{2}}{m}(\vec{k}-i\nabla)
\end{align}$$
于是便有：
$$\begin{align}
\frac{\partial\epsilon_{n}}{\partial \vec{k}} & =\int d^{3}r u_{n,\vec{k}}^{*} \frac{\hbar^{2}}{m}(\vec{k}-i\nabla)u_{n,\vec{k}}
\end{align}$$
另一方面：
$$\begin{align}
\langle \vec{v} \rangle  & = \frac{1}{m} \int d^{3}r \psi_{n,\vec{k}}^{*}(-i\hbar \nabla)\psi_{n,\vec{k}} \\
 & = \frac{1}{m}\int d^{3}r e^{-i\vec{k}\cdot \vec{r}}u_{n,\vec{k}}^{*}(-i\hbar \nabla)(e^{i\vec{k}\cdot \vec{r}}u_{n,\vec{k}}) \\
 & = \frac{1}{m}\int d^{3}re^{-i\vec{k}\cdot \vec{r}}u_{n,\vec{k}}^{*}(-i\hbar)e^{i\vec{k}\cdot \vec{r}}(i\vec{k}+\nabla)u_{n,\vec{k}} \\
 & = \int d^{3}r u_{n,\vec{k}}^{*} \frac{\hbar}{m} (\vec{k}-i\nabla)u_{n,\vec{k}} \\
\end{align}$$
Then done。
>[!Right]
>$\blacksquare$

那么如果有一个波包：
$$\psi=\sum_{\vec{k}}g(\vec{k})\psi_{n,\vec{k}}e^{- \frac{i}{\hbar}\epsilon_{n}(\vec{k})}$$
如果波包足够局域，$\vec{k}$集中在$\vec{k}_{c}$附近，那么在每个$\ket{\psi_{n,\vec{k}}}$平均下速度都大概是$\frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}$。

# 3.2.2 Current conduction

在任意温度下，我们可以考虑一个band $\epsilon_{n}(\vec{k})$在FBZ中的平均电流密度。显然：
$$\begin{align}
\vec{j} & = \frac{1}{V} \sum_{\vec{k}\in \text{FBZ}}\langle n_{\vec{k}}\rangle e \vec{v}
\end{align}$$
因为电子的spin具有2-fold degeneracy，我们有：
$$\langle n_{\vec{k}}\rangle= \frac{2}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1}$$

>[!Note] Proposition 1
>A completely filled band contributes no current.
## Remark
By completely filled, I mean $\langle n_{\vec{k}}\rangle=1$. By contributes, I mean the total current density in this band from the FBZ.
## Proof.
我们有：
$$\begin{align}
\vec{j} & = \frac{2}{V} \sum_{\vec{k}\in \text{FBZ}} \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1} e \frac{1}{\hbar} \frac{\partial\epsilon_{n}(\vec{k})}{\partial \vec{k}}  \\
\end{align}$$
我们用积分估计求和。转换测度：
$$\begin{align}
\sum_{\vec{k}\in \text{FBZ}} & = \sum_{n_{1},n_{2},n_{3}\text{ such that }\vec{k}\in \text{FBZ}} \Delta n_{1}\Delta n_{2}\Delta n_{3} \\
 & =  \left( \frac{L}{2\pi} \right)^{3} \sum_{k_{1},k_{2},k_{3}\text{ such that }\vec{k}\in \text{FBZ}} \Delta k_{1}\Delta k_{2}\Delta k_{3} \\
 & \approx\left(  \frac{L}{2\pi} \right)^{3} \int_{\text{FBZ}}d^{3}k \\
 & = \frac{V}{(2\pi)^{3}}\int_{\text{FBZ}}d^{3}k \\
\end{align}$$
所以我们需要积分：
$$\begin{align}
\vec{j} & = \frac{2}{\hbar(2\pi)^{3}}\int_{\text{FBZ}} d^{3}k \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1} \frac{\partial\epsilon_{n}(\vec{k})}{\partial \vec{k}} 
\end{align}$$
这个积分一般不是零。但是若这个能带完全充满，我们有：
$$\frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1}=1$$
则：
$$\begin{align}
\vec{j} & = \frac{2e}{\hbar(2\pi)^{3}}\int_{\text{FBZ}}d^{3}k \frac{\partial\epsilon_{n}(\vec{k})}{\partial \vec{k}} \\
 & = \frac{2e}{\hbar(2\pi)^{3}}\int_{\text{FBZ}}d^{3}k \partial_{k_{i}}\epsilon_{n}(\vec{k})e_{i}
\end{align}$$
运用散度定理则有：
$$\begin{align}
 \frac{2e}{\hbar(2\pi)^{3}} \int_{\text{FBZ}} d^{3}k\partial_{k_{i}} \epsilon_{n}(\vec{k})e_{i} & = \frac{2e}{\hbar(2\pi)^{3}} \int_{\partial \text{FBZ}} d\vec{S} \cdot\epsilon_{n}(\vec{k})e_{i}
\end{align}$$

因为$\epsilon_{n}(\vec{k})=\epsilon_{n}(\vec{k}+\vec{K})$，所以$\epsilon_{n}(\vec{k})$在$\partial \text{FBZ}$的对径点的取值是一样的。又因为这两点处面元$d\vec{S}$负号相反，所以积分刚好是零。
>[!Right]
>$\blacksquare$

## 3.2.3 Effective mass tensor

假设$\epsilon_{n}(\vec{k})$存在一个极值点$\vec{k}^{*}$。则：
$$\begin{align}
\epsilon_{n}(\vec{k}) & \approx\epsilon_{n}(\vec{k}^{*})+ \sum_{i,j}\frac{1}{2} \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}(k_{i}-k_{i}^{*})(k_{j}-k_{j}^{*})
\end{align}$$
我们定义：

>[!Note] Definition 1
>$$m_{ij}^{*}= \frac{1}{\hbar^{2}}\left( \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}} \right)^{-1}$$

我们可以计算effective mass tensor的逆：

>[!Note] Proposition 1
>$$m_{ij}^{*-1}=  \frac{\delta_{ij}}{m}+ \frac{1}{m^{2}} \sum_{n^{'}\neq n} \frac{2}{\epsilon_{n}(\vec{k})-\epsilon_{n^{'}}(\vec{k})}(\bra{\psi_{n^{'},\vec{k}}} p_{i}\ket{\psi_{n,\vec{k}}} \bra{\psi_{n,\vec{k}}} p_{j}\ket{\psi_{n^{'},\vec{k}}} )$$
## Proof.

那么，能量的展开可以写为：
$$\epsilon_{n}(\vec{k})=\epsilon_{n}(\vec{k}^{*})+ \sum_{i,j} \frac{\hbar^{2}}{2}(k_{i}-k_{i}^{*})m^{*-1}_{ij}(k_{j}-k_{j}^{*})$$
我们可以计算出$m_{ij}^{*-1}$。

>[!Note] Idea 1
>我们遇到$\epsilon_{n}(\vec{k})$对于$\vec{k}$的任意阶导数时，可以使用perturbation计算。

考虑能量展开到二阶：
$$\epsilon_{n}(\vec{k}+d\vec{k})=\epsilon_{n}(\vec{k})+ \sum_{i} \frac{\partial\epsilon_{n}}{\partial k_{i}}dk_{i}+ \frac{1}{2}\sum_{i,j} \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}dk_{i}dk_{j}$$
我们想要计算$\frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}$。我们知道，若将$H_{\vec{k}+d\vec{k}}-H_{\vec{k}}$看作微扰，则这个微扰也会引起同样的能量变化。

因为微扰的小量的阶数应当相对应，我们需要考虑$\mathcal{O}(d^{2}k)$的微扰。我们将Hamiltonian微扰展开到二阶：
$$H_{\vec{k}+d\vec{k}}\approx H_{\vec{k}}+ \sum_{i}\frac{\partial H_{\vec{k}}}{\partial k_{i}} dk_{i}+ \frac{1}{2} \sum_{i,j} \frac{\partial^{2}H_{\vec{k}}}{\partial k_{i}\partial k_{j}}dk_{i}dk_{j}$$
则$\mathcal{O}(d^{2}k)$微扰可以来自$\sum_{i} \frac{\partial H_{\vec{k}}}{\partial k_{i}}dk_{i}$的二阶微扰，也可以来自$\frac{1}{2}\sum_{i,j} \frac{\partial^{2}H_{\vec{k}}}{\partial k_{i}\partial k_{j}}dk_{i}dk_{j}$的一阶微扰。

具体地，$\sum_{i} \frac{\partial H_{\vec{k}}}{\partial k_{i}}dk_{i}$引起的能量微扰为：
$$\begin{align}
 & \text{second order perturbation}=\sum_{n^{'}\neq n} \frac{|\bra{\psi_{n^{'},\vec{k}}} \sum_{i}\frac{\partial H_{\vec{k}}}{\partial k_{i}}dk_{i}\ket{\psi_{n^{},\vec{k}}} |^{2} }{\epsilon_{n^{}}(\vec{k})-\epsilon_{n^{'}}(\vec{k})} 
\end{align}$$
$\frac{1}{2}\sum_{i,j} \frac{\partial^{2}H_{\vec{k}}}{\partial k_{i}\partial k_{j}}dk_{i}dk_{j}$引起的能量微扰为：
$$\begin{align}
\text{first order perturbation}= \bra{\psi_{n,\vec{k}}} \frac{1}{2}\sum_{i,j} \frac{\partial^{2}H_{\vec{k}}}{\partial k_{i}\partial k_{j}}dk_{i}dk_{j}\ket{\psi_{n,\vec{k}}} 
\end{align}$$
所以两个微扰加起来，$dk_{i}dk_{j}$的系数为：
$$\begin{align}
 & \sum_{n^{'}\neq n} \frac{1}{\epsilon_{n^{}}(\vec{k})-\epsilon_{n^{'}}(\vec{k})}\left( \bra{\psi_{n^{'},\vec{k}}} \frac{\partial H_{\vec{k}}}{\partial k_{i}}\ket{\psi_{n,\vec{k}}}\bra{\psi_{n,\vec{k}}} \frac{\partial H_{\vec{k}}}{\partial k_{j}} \ket{\psi_{n^{'},\vec{k}}} \right) \\
 & +\bra{\psi_{n,\vec{k}}} \frac{1}{2} \frac{\partial^{2}H_{\vec{k}}}{\partial k_{i}\partial k_{j}}\ket{\psi_{n,\vec{k}}}  \\
 
\end{align}$$
我们知道：
$$\frac{\partial H_{\vec{k}}}{\partial k_{i}}=\frac{\hbar^{2}}{m}k_{i}+ \frac{\hbar}{m}p_{i}$$
所以$dk_{i}dk_{j}$系数为：
$$\begin{align}
 & \sum_{n^{'}\neq n} \frac{1}{\epsilon_{n^{}}(\vec{k})-\epsilon_{n}^{'}(\vec{k}) } \left(  \frac{\hbar^{2}}{m^{2}} \bra{\psi_{n^{'},\vec{k}}} p_{i}\ket{\psi_{n,\vec{k}}}\bra{\psi_{n,\vec{k}}} p_{j}\ket{\psi_{n^{'},\vec{k}}}    \right) + \frac{\hbar^{2}}{m} \frac{1}{2}\delta_{ij}
\end{align}$$
而OTOH，能量展开中$dk_{i}dk_{j}$系数为：
$$ \frac{1}{2} \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}$$
所以：
$$\frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}=\sum_{n^{'}\neq n} \frac{2}{\epsilon_{n^{}}(\vec{k})-\epsilon_{n^{'}}(\vec{k}) } \left(  \frac{\hbar^{2}}{m^{2}} \bra{\psi_{n^{'},\vec{k}}} p_{i}\ket{\psi_{n,\vec{k}}}\bra{\psi_{n,\vec{k}}} p_{j}\ket{\psi_{n^{'},\vec{k}}}  \right) + \frac{\hbar^{2}}{m} \delta_{ij}$$
所以effective mass tensor的逆为：
$$m_{ij}^{*-1}= \frac{1}{\hbar^{2}} \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}= \frac{\delta_{ij}}{m}+ \frac{1}{m^{2}} \sum_{n^{'}\neq n} \frac{2}{\epsilon_{n}(\vec{k})-\epsilon_{n^{'}}(\vec{k})}(\bra{\psi_{n^{'},\vec{k}}} p_{i}\ket{\psi_{n,\vec{k}}} \bra{\psi_{n,\vec{k}}} p_{j}\ket{\psi_{n^{'},\vec{k}}} )$$
>[!Right]
>$\blacksquare$
>
## 3.2.4 Semiclassical equation of motion


因为电子就大概在$\vec{r}$，所以当$\vec{r}$随时间演化时，电子大概也在跟着移动。考虑存在一个势能$V(\vec{r})$。则在每个时间点必须遵守能量守恒：
$$\begin{align}
 & \frac{d}{dt}(\epsilon_{n}(\vec{k}(t))+V(\vec{r}(t)))=0 \\
\implies &  \frac{\partial\epsilon_{n}}{\partial \vec{k}}\cdot  \dot{\vec{k}}+ \frac{\partial V}{\partial \vec{r}}  \dot{\vec{r}}=0 \\
\implies & \frac{\partial\epsilon_{n}}{\partial \vec{k}}\cdot  \dot{\vec{k}}+ (-\vec{F})\cdot \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}=0 \\
\implies & \frac{\partial\epsilon_{n}}{\partial \vec{k}}\cdot(\hbar\dot{\vec{k}}-\vec{F})=0 \\

\end{align}$$
注意上述过程，我们假设电子不会在不同的额能带之间跳跃，即$n$是运动积分。
若存在：
$$\hbar  \dot{\vec{k}} =\vec{F}$$
则上式成立。

>[!Note] Postulate
>In the semiclassical model of electron motion, we assume:
>$$\begin{align}
 & \vec{v}= \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}} \\
 & \hbar  \dot{\vec{k}}=\vec{F} \\
 & \text{number of electrons around }\vec{k}= \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1}d^{3}k\end{align}$$
## Remark
最好将semiclassical EOM想成一个电子处于$\epsilon_{n}(\vec{k})$中，它的半经典运动由semiclassical EOM描述。

>[!Note] Proposition 1
>$$\overset{\leftrightarrow}{m}^{*}\cdot \frac{d\vec{v}}{dt}=\vec{F}$$
## Proof.
$$\begin{align}
\overset{\leftrightarrow}{m}^{*}\cdot \frac{d\vec{v}}{dt} & =  \left(  \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}\right)^{-1}e_{i}e_{j} \cdot  \dot{v_{l}}e_{l} \\ & = \left( \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}} \right)^{-1}e_{i}e_{j} \cdot e_{l} \frac{1}{\hbar} \frac{d}{dt} \frac{\partial\epsilon_{n}}{\partial k_{l}} \\
 & = \left( \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}} \right)^{-1}e_{i}\delta_{jl} \frac{1}{\hbar} \frac{\partial k_{m}}{\partial t} \frac{\partial^{2}\epsilon_{n}}{\partial k_{m}\partial k_{l}} \\
	 & = \left(  \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}} \right)^{-1}e_{i} \frac{1}{\hbar}  \dot{k_{}}_{m} \frac{\partial^{2}\epsilon_{n}}{\partial k_{j}\partial k_{m}} \\
	 & = \delta_{im}e_{i} \frac{1}{\hbar}  \dot{k}_{m} \\
	 & = \frac{1}{\hbar}  \dot{k}_{i}e_{i} \\
	 & = \vec{F}

\end{align}$$
>[!Right]
>$\blacksquare$
## Ex:
考虑一个一维晶体具有band structure $\epsilon_{n}(k)=-C\cos(ak)$。外加恒定电场$E$。则这个band中电子EOM为：
$$\hbar  \dot{ {k}}=eE\implies {k}= \frac{e}{\hbar}Et+{k}_{0}$$
则电子速度为：
$$v= \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial k}= \frac{aC}{\hbar}\sin(ak)= \frac{aC}{\hbar}\sin\left( a\left(  \frac{e}{\hbar}Et+k_{0} \right) \right)$$
得到一个震荡的速度。


## 3.2.5 Holes

>[!Note] Definition 1
>We say a band with band structure $\epsilon_{n}(\vec{k})$ is completely filled if 
>$$\langle n_{\vec{k}}\rangle= \frac{2}{\mathscr{z}^{-1}e^{\beta\epsilon_{n}(\vec{k})}+1}=2,\forall \vec{k}$$
## Remark
这等价于$\langle n_{\vec{k}}\rangle =2,\forall \vec{k}\in \text{FBZ}$。因为$\epsilon_{n}(\vec{k}+\vec{K})=\epsilon_{n}(\vec{k})$。我们可以将$\vec{k}$完全规定在FBZ中。

>[!Note] Proposition 1
>The total $\vec{k}$ of a completely filled band is zero.
## Proof.
我们有：
$$\begin{align}
\text{total }\vec{k} & =\sum_{\vec{k}\in \text{FBZ}} \langle n_{\vec{k}}\rangle \vec{k} \\
 & \approx \frac{V}{(2\pi)^{3}}\int_{\text{FBZ}} d^{3}k  2\vec{k}
\end{align}$$
由[[Solid state#^proposition122|proposition 1.2.2]]可知，FBZ关于k-space原点对称。所以上面积分为零。
>[!Right]
>$\blacksquare$

考虑任取一个$\vec{k}_{0}\in \text{FBZ}$，找到这个轨道的占据数$\langle n_{\vec{k}_{0}}\rangle=2$，我们从中去掉一个电子，即令$\langle n_{\vec{k}_{0}}\rangle=1$。

那么此时，这个能带的总$\vec{k}$，即$\sum_{\vec{k}\in \text{FBZ}}\langle n_{\vec{k}}\rangle \vec{k}$，就变为$-\vec{k}_{0}$。我们令：
$$\vec{k}_{h}=-\vec{k}_{0}$$
这时，能带的总能量，即$\sum_{\vec{k}\in \text{FBZ}}\langle n_{\vec{k}}\rangle\epsilon_{n}(\vec{k})$，就变为$-\epsilon_{n}(\vec{k}_{0})$。我们令：
$$\epsilon_{nh}(\vec{k}_{h})=-\epsilon_{n}(\vec{k}_{0})$$


我们再来看这个能带上的电流密度。本来电流密度为$\vec{j}=\frac{1}{V}\sum_{\vec{k}\in \text{FBZ}}\langle n_{\vec{k}}\rangle e \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}=0$。去掉一个$\vec{k}_{0}$处的电子得到：
$$\vec{j}=- \frac{1}{V}e \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}=- \frac{1}{V}e \frac{1}{\hbar} \frac{\partial(-\epsilon_{nh})}{\partial(-\vec{k}_{h})}=- \frac{1}{V}e \frac{1}{\hbar} \frac{\partial\epsilon_{nh}}{\partial \vec{k}_{h}}$$
我们令$q_{h}=-e=|e|$。




于是我们可以认为，去掉一个完全充满的能带内处于$\epsilon_{n}(\vec{k})$的电子，等价于一个空的能带上存在一个处于$-\epsilon_{n}(\vec{k})$的粒子。如果这个粒子以$\epsilon_{nh}(\vec{k}_{h})=-\epsilon_{n}(-\vec{k}_{h})$移动，我们可以计算它的速度$\vec{v}_{h}= \frac{1}{\hbar} \frac{\partial\epsilon_{nh}}{\partial \vec{k}_{h}}$。我们再令这个粒子带有电荷$|e|$。那么我们知道这个粒子产生的电流等于完全充满的能带缺一个电子的电流。

定义这个粒子为hole。

>[!Note] Definition 2
>Given an electron in $\epsilon_{n}(\vec{k})$, define the corresponding hole as a particle that:
>- has charge $|e|$.
>- has wavevector $\vec{k}_{h}=-\vec{k}$.
>- has energy $\epsilon_{nh}(\vec{k}_{h})=-\epsilon_{n}(\vec{k})$

我们可以计算hole的effective mass tensor：

>[!Note] Proposition 2
>For an electron and the corresponding hole, we have:
>$$\overset{\leftrightarrow}{m}^{*}_{h}(\vec{k}_{h})=- \overset{\leftrightarrow}{m}^{*}(\vec{k})$$
## Proof.
$$\begin{align}
m^{*}_{hij}(\vec{k}_{h}) & = \left.\frac{1}{\hbar^{2}} \frac{\partial^{2}\epsilon_{nh}}{\partial k_{hi}\partial k_{hj}}\right|_{k_{hi},k_{hj}} \\
 & =\left. - \frac{1}{\hbar^{2}} \frac{\partial^{2}(-\epsilon_{nh})}{\partial(-k_{hi})\partial(-k_{hj})}\right|_{k_{hi},k_{hj}} \\
 & = \left.- \frac{1}{\hbar^{2}} \frac{\partial^{2}\epsilon_{n}}{\partial k_{i}\partial k_{j}}\right|_{k_{i}=-k_{hi},k_{j}=-k_{hj}} \\
 & = - m^{*}_{ij}(\vec{k})
\end{align}$$
>[!Right]
>$\blacksquare$

# 3.3 Bloch electrons in a magnetic field

^7a571e

## 3.3.1 Semiclassical motion in the "phase space"

由于半经典EOM为：
$$\begin{align}
 & \vec{v}= \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}} \\
 & \hbar  \dot{\vec{k}}= \vec{F}
\end{align}$$
所以，一个Bloch电子的运动可以由一个$6$维的$\{ \vec{r} \}\times \{ \vec{k} \}$空间。这个空间可以类比于经典力学中的相空间。

首先研究在k-space中的运动。

>[!Note] Proposition 1
>$\vec{k}$ is constrained on the intersection of the constant energy surface and a plane perpendicular to $\vec{B}$.
## Proof.
我们有：
$$\begin{align}
 & \vec{v}= \frac{1}{\hbar}  \frac{\partial\epsilon_{n}}{\partial \vec{k}} \\
 & \hbar  \dot{\vec{k}}= e\vec{v}\times \vec{B}
\end{align}$$
容易注意到：
$$\dot{\vec{k}}\cdot \vec{B}=0$$
所以$\vec{k}$的trajectory总是垂直于$\vec{B}$。

又注意到：
$$\begin{align}
\frac{D\epsilon_{n}}{D t} & = \frac{\partial\epsilon_{n}}{\partial \vec{k}} \cdot \frac{\partial \vec{k}}{\partial t} \\
 & = \hbar \vec{v}\cdot e(\vec{v}\times \vec{B}) \\
 & =0
\end{align}$$
所以电子总在k-space中等能量面与$\vec{B}$垂直面的交线上运动。

![[Drawing 2025-11-22 00.07.40.excalidraw|center|300]]
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>For an electron and a hole with the same initial conditions $\vec{v}(0),\vec{k}(0)$，they trace out the same trajectory in opposite directions.
## Proof.

考虑一个electron和一个hole。假设它们初始条件一样。则显然根据半经典EOM，它们$0$时刻瞬时的k-space速度会相反，因为电荷相反。所以它们绕行的轨道方向刚好瞬时相反。

因为瞬时的$\dot{\vec{k}}$相反，而trajctory又一定是约束在等能量面和$\vec{B}$垂面的交线上的，所以它们的trajectory一定重合。

然后，因为一个微分方程决定的trajectory不能自己交自己，它们一定会沿着constant energy surface和$\vec{B}$垂面的交线一致朝一个方向运动，而不会在某点减速到零然后重复走过的路径。所以，他们就刚好以相反的方向，沿着同一个trajectory绕动。
>[!Right]
>$\blacksquare$


我们还可以研究r-space中运动。

>[!Note] Proposition 3
>The projection of $\vec{r}(t)$ on a plane perpendicular to $\vec{B}$ has the same shape as $\vec{k}(t)$.
## Proof.
考虑：
$$\begin{align}
 & \hbar  \dot{\vec{k}}= e\vec{v}\times \vec{B} \\
\implies & \hbar \int_{0}^t  \dot{\vec{k}}dt= \int_{0}^t dt e\vec{v}\times \vec{B} \\
 \implies &  \hbar(\vec{k}(t)-\vec{k}(0))=e(\vec{r}(t)-\vec{r}(0) )\times \vec{B} \\
\implies & \vec{r}(t)\times \vec{B} = \frac{\hbar}{e}(\vec{k}(t)-\vec{k}(0))+\vec{r}(0)\times \vec{B}
\end{align}$$
这代表，$\vec{r}\times \vec{B}$按照$\vec{k}$以相同的轨迹运动，只不过放大并且平移了一下。这代表着，$\vec{r}$垂直于$\vec{B}$的component的trajectory和$\vec{k}$的trajectory一样。
## Remark
不过$\vec{r}$平行于$\vec{B}$的componenet是完全free的。换句话说，仅仅是$\vec{r}$投影到$\vec{B}$垂面上和$\vec{k}$的trajectory一个形状。


上述讨论的trjectory一般我们取Fermi surface为等能量面。因为在温度极低但不为零的情况下，占据数$\langle n_{\vec{k}}\rangle$会接近$2\mathbb{1}_{\left[ -\infty,\epsilon_{F} \right]}(\epsilon_{n}(\vec{k}))$。在$\epsilon_{n}(\vec{k})$显著低于$\epsilon_{F}$时，占据数都是满的，是$2$，不贡献电流。在$\epsilon_{n}(\vec{k})$显著高于$\epsilon_{F}$时，占据数都是$0$，也不贡献电流。仅仅只有$\epsilon_{F}$周围很小区域内的电子能够贡献电流。所以我们研究这些电子的运动。

## 3.3.2 Cyclotron frequency

对于一个封闭的k-space轨道，我们试图计算$\vec{k}$转一圈花费的时间。我们今后为了简化，有时用$\epsilon$表示能带的能量。

>[!Note] Proposition 1
>Consider a closed trajectory in the k-space. Let $A(\epsilon)$ be the area enclosed by the trajectory. Then the time it takes to traverse the trajectory is:
>$$T=\frac{\hbar^{2}}{|e|B} \frac{\partial A}{\partial\epsilon}$$
## Proof.
对于等能量面$\epsilon(\vec{k})=E$，上的trajectory $\Gamma$， 我们首先有：
$$\begin{align}
T & =\oint_{\Gamma} dk \frac{1}{|\dot{\vec{k}}|}
\end{align}$$
我们将其代换成能量：
$$\begin{align}
\dot{\vec{k}} & = \frac{e}{\hbar}\vec{v}\times \vec{B} \\
 & = \frac{e}{\hbar^{2}} \frac{\partial\epsilon}{\partial \vec{k}}\times \vec{B} \\
 & = \frac{eB}{\hbar^{2}} \left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp}
\end{align}$$
那么：
$$T= \frac{\hbar^{2}}{eB} \oint dk \left|\
\left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp}\right|^{-1}$$
考虑另一个等能量面$\epsilon(\vec{k})=E+\delta E$。考虑这个等能量面与$\Gamma$共面的trajectory $\Sigma$。对于$\Gamma$上每一点$\vec{k}$，作垂直于$\vec{B}$方向，垂直于$\Gamma$切线，沿$\Gamma$所在平面向外延伸$\delta k \hat{n}$的矢量落在$\Sigma$上。那么显然有：
$$\begin{align}  & E+\delta E=\epsilon(\vec{k}+\delta k\hat{n})=\epsilon(\vec{k})+ \frac{\partial\epsilon}{\partial \vec{k}}\cdot\delta k\hat{n}=E+ \frac{\partial\epsilon}{\partial \vec{k}}\cdot\delta k\hat{n} \\
 \implies& 
\delta E= \frac{\partial\epsilon}{\partial \vec{k}}\cdot \delta k\hat{n}= \frac{\partial\epsilon}{\partial \vec{k}}\cdot \delta k \frac{\left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp}}{| \left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp} |} = \delta k \frac{|\left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp}|^{2}}{|\left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp}|}=\delta k\left| \left( \frac{\partial\epsilon}{\partial \vec{k}} \right)_{\perp} \right|
\end{align}$$
所以我们有：
$$\begin{align}
T & = \frac{\hbar^{2}}{eB}\oint_{\Gamma}dk \frac{\delta k}{\delta E} \\
 & = \frac{\hbar^{2}}{eB} \frac{\delta A}{\delta E} = \frac{\hbar^{2}}{eB} \frac{\partial A}{\partial\epsilon}
\end{align}$$

![[Drawing 2025-11-22 02.48.48.excalidraw|center]]

>[!Right]
>$\blacksquare$

## Ex:
考虑自由电子。我们有$\epsilon(\vec{k})= \frac{\hbar^{2}k^{2}}{2m}$。于是:
$$A= \pi \frac{\hbar^{2}}{2m}k^{2}$$
于是：
$$T= \frac{\hbar^{2}}{em} \frac{\partial A}{\partial\epsilon}= \frac{\pi \hbar^{2}}{em}$$
## 3.3.3 An intuitive picture of Bloch electron motion

考虑k-space的FBZ中所有能带$\epsilon_{n}(\vec{k})$。每条能带中都有一定的占据数$f(\epsilon_{n})=\langle n_{\vec{k}}\rangle= \frac{2}{\mathcal{z}^{-1}e^{\beta\epsilon_{n}}+1}$。也就是说，在任何时候在k-space中看一眼，处于能带$\epsilon_{n}(\vec{k})$的电子个数大概就是$f(\epsilon_{n})$那么多个。

在没有任何外加场的情况下，电子在k-space中不动，静止于这些能带之中。应该想象，这些电子形成一个“连续体”。任何k-space中一个体元$d^{3}k$内，都存在$\frac{1}{4\pi^{3}}d^{3}k\sum_{n}f(\epsilon_{n})$那么多个电子。

当外加磁场后，这一坨“连续体”中的每个电子开始沿着各自属于的能带的等能量面滑动。它们的轨道应该都垂直于$\vec{B}$。

## 3.3.4 Landau levels

考虑恒定磁场中的自由带电粒子$q$。我们将这个系统量子化。我们有Hamiltonian：
$$H=\frac{1}{2m}|\vec{p}-q\vec{A}|^{2}$$
WLOG我们令$\vec{B} \parallel z$，选择Landau gauge猜到：
$$\vec{A}=xB\hat{y}$$
于是Hamiltonian为：
$$H= \frac{1}{2m}(p_{x}^{2}+(p_{y}-qxB)^{2}+p_{z}^{2})$$
于是我们想要解：
$$\frac{1}{2m}(p_{x}^{2}+(p_{y}-qxB)^{2}+p_{z}^{2})\psi=E\psi$$
注意到：
$$[p_{y},H]=0,[p_{z},H]=0$$
于是$H$可以被$p_{y},p_{z}$本  征态的对角化。于是可以猜解：
$$\psi(\vec{r})=\exp(ik_{y}y+ik_{z}z)X(x)$$
代入Schrodinger方程就有：
$$\begin{align}
 & \frac{1}{2m}\left( -\hbar^{2} \frac{\partial^{2}X}{\partial x^{2}}+(\hbar k_{y}-qxB)^{2}X+\hbar^{2}k_{z}^{2}X \right) =EX \\
\implies & - \frac{\hbar^{2}}{2m} \frac{\partial^{2}X}{\partial x^{2}}+ \frac{1}{2}m \left( \frac{qB}{m} \right)^{2}\left( x- \frac{\hbar}{qB}k_{y} \right)^{2}X=\left( E- \frac{\hbar^{2}k_{z}^{2}}{2m} \right) X \end{align}$$
这显然是个$\omega=\frac{qB}{m}$，中心在$\frac{\hbar}{qB}k_{y}$的harmonic oscillator。于是显然：
$$\begin{align}
E_{n,k_{z}}- \frac{\hbar^{2}k_{z}^{2}}{2m}= \hbar \frac{qB}{m}\left( n+ \frac{1}{2} \right)\implies E_{n,k_{z}}= \frac{\hbar qB}{m}\left( n+\frac{1}{2} \right)+ \frac{\hbar^{2}k_{z}^{2}}{2m}=\hbar \omega_{c}\left( n+ \frac{1}{2} \right)+ \frac{\hbar^{2}k_{z}^{2}}{2m}
\end{align}$$
称$E_{n,k_{z}}$为Landau level。

>[!Note] Proposition 1
>If the $x,y$ coordinates of the electron are constrained in some area $A$, the each Landau level has degeneracy $N= \frac{qBA}{2\pi \hbar}$
## Handwave

可以解得Landau gauge下波函数为：
$$\psi_{n,k_{z}}\propto e^{ik_{y}y+ik_{z}z}H_{n}\left( x- \frac{\hbar}{qB}k_{y} \right)\exp\left( - \frac{\left( x- \frac{\hbar}{qB}k_{y} \right)^{2}}{2 \frac{\hbar}{qB}k_{y}} \right)$$
所以概率密度为：
$$|\psi_{n,k_{z}}|^{2}= H_{n}^{2}\left( x- \frac{\hbar}{qB}k_{y} \right)\exp\left( - \frac{\left( x- \frac{\hbar}{qB}k_{y} \right)^{2}}{ \frac{\hbar}{qB}k_{y}} \right)$$
所以电子在$x$方向被限制在$\frac{\hbar}{qB}k_{y}$周围。

要考虑degeneracy，就是考虑$E_{n,k_{z}}= \frac{\hbar qB}{m}\left( n+ \frac{1}{2} \right)+ \frac{\hbar^{2}k_{z}^{2}}{2m}$对应多少态。那么我们需要fix $n,k_{z}$，然后看有多少可本征态。显然唯一的degeneracy就只能来自于$k_{y}$。

首先在periodic BC下，$k_{y}= \frac{2\pi n_{y}}{L_{y}}$。但这样还是有无限多个态。我们进一步想到，因为电子在$x$方向被限制在$\frac{\hbar}{qB}k_{y}$周围，而$0\leq x\leq L_{x}$，所以$k_{y}$具有bound：
$$0 \leq \frac{\hbar}{qB}k_{y} \leq L_{x}$$
所以degeneracy为：
$$\begin{align}
N & = \sum_{n_{y}\text{ s.t. }0\leq k_{y}\leq \frac{qBL_{x}}{\hbar}} 1 \\
 & \approx \frac{L_{y}}{2\pi} \int_{0}^{\frac{qBL_{x}}{\hbar}} dk_{y} \\
 & = \frac{qB}{2\pi \hbar}L_{x}L_{y} = \frac{qB}{2\pi \hbar}A
\end{align}$$

## 3.3.5 Onsager-Bohr-Sommerfeld quantization

对于一个磁场中的经典电子，考虑它的Bohr-Sommerfeld quantization：
$$\oint d\vec{r}\cdot \vec{p}= 2\pi \hbar(n+\gamma)$$
其中，$\vec{r}$为欧氏空间坐标，$\vec{p}$为正则动量。它们互为共轭。（注意，不是机械动量$m\vec{v}$，而是正则动量$m\vec{v}+e\vec{A}$！！！）

现在，我们缩小系统尺度，以至于经典电子变成Bloch electron。我们想找一个共轭于$\vec{r}$的量来做quantization。

一方面，我们知道，共轭于$\vec{r}$的动量为：
$$\vec{p}=m\vec{v}+e\vec{A}$$
另一方面，对于经典电子，我们有：
$$m  \dot{\vec{v}}=e\vec{v}\times \vec{B}$$
而对于Bloch电子，我们有：
$$\hbar  \dot{\vec{k}}=e\vec{v}\times \vec{B}$$
所以，晶格动量可以类比为机械动量，即$m\vec{v}\leadsto \hbar \vec{k}$。所以：
$$\text{conjugate momentum of }\vec{r}\sim \hbar \vec{k}+e\vec{A}$$
所以引出quantization rule：

>[!Note] Proposition 1
>The quantization rule of Bloch electrons in a magnetic filed is approximated by:
>$$\oint d\vec{r}_{\perp}\cdot (\hbar \vec{k}+e\vec{A})_{\perp}=2\pi \hbar(n+\gamma)$$
>where $\perp$ projects vectors onto the plane perpendicular to $\vec{B}$.
## Remark
为什么我们只在垂直于磁场方向的平面上量子化呢？这是因为，r-space中轨道可能不是闭合的。仅仅是r-space中轨道投影到垂直于磁场方向上闭合。在沿磁场方向，电子完全可能有不回归的运动。而Bohr-Sommerfeld quantization只对于闭合轨道作量子化。


我们可以进一步地引出电子k-space中轨道面积的quantization：

>[!Note] Corollary 1
>The quantization of the area enclosed by the trajectory of a Bloch electron in the k-space is approximated by:
>$$A_{n}= \frac{2\pi |e|B}{\hbar}(n+\gamma)$$
## Proof.
我们有：
$$\begin{align}
 & \hbar  \dot{\vec{k}}=e\vec{v}\times \vec{B} \\
\implies & \hbar d\vec{k}=ed\vec{r}\times \vec{B} \\

\implies & \hat{B}\times(\hbar d\vec{k})=e\hat{B}\times(d\vec{r}\times \vec{B}) \\
\implies & \hbar \hat{B}\times d\vec{k}= e Bd\vec{r}-(\hat{B}\cdot d\vec{r})\vec{B} \\
\implies & \hbar(\hat{B}\times d\vec{k})_{\perp}=eBd\vec{r}_{\perp}
\end{align}$$
所以：
$$\begin{align}
\oint d\vec{r}_{\perp}\cdot \hbar  {\vec{k}}_{\perp} & = \frac{\hbar^{2}}{eB} \oint(\hat{B}\times d\vec{k})_{\perp}\cdot  {\vec{k}}_{\perp} \\
 & = -\frac{\hbar^{2}}{eB } 2A \\
 & = \frac{2\hbar^{2}}{|e|B}A
\end{align}$$
注意此处$A$表示面积。

我们还要计算：
$$\begin{align}
\oint d\vec{r}_{\perp} \cdot e\vec{A}_{\perp}
\end{align}$$
因为$\vec{B}$是匀强磁场，（至少局部是）所以$\vec{A}$自动垂直于$\vec{B}$。所以：
$$\begin{align}
\oint d\vec{r}_{\perp}\cdot e\vec{A}_{\perp}=\oint d\vec{r}\cdot e\vec{A}=e\int d\vec{S}_{r}\cdot\nabla \times \vec{A}=e\int d\vec{S}_{r}  \cdot\vec{B}=e  {S}_{r\perp}  {B}
\end{align}$$
**Caveat:**
- 这里我们的面积是r-space中的面积。我们需要将其化为k-space中轨道面积。

回忆起：
$$\begin{align}
\hbar   \dot{\vec{k}}=e\vec{v}\times \vec{B}\implies e\vec{r}(t)\times \vec{B}=\hbar(\vec{k}(t)-\vec{k}(0))+e\vec{r}(0)\times \vec{B}
\end{align}$$
所以在垂直于磁场方向，显然有：
$$A=\left(\frac{eB}{\hbar}\right)^{2}S_{r\perp} $$
**Caveat:**
- 一定要加平方。半径比是$\frac{eB}{\hbar}$。

所以存在quantization：
$$\begin{align}
 & 2 \frac{\hbar^{2}}{|e|B}A+ e \frac{\hbar^{2}}{|e|^{2}B^{2}}B  A=2\pi \hbar(n+\gamma)  \\
\implies & 2 \frac{\hbar^{2}}{|e|B}A- \frac{\hbar^{2}}{|e|B}A=2\pi \hbar(n+\gamma) \\

\implies & A= \frac{2\pi |e|B}{\hbar }(n+\gamma)
\end{align}$$
将$A$写成$A_{n}$即可。
>[!Right]
>$\blacksquare$

>[!Note] Corollary 2
>The quantization of the magnetic flus through the area enclosed by the trajectory of a Bloch electron in the r-space is approximated by:
>$$\phi_{n}=(n+\gamma) \frac{2\pi \hbar}{|e|}$$
## Proof.
关于r-space和k-space中面积，我们有：
$$A=\left(  \frac{eB}{\hbar} \right)^{2}S_{r\perp}$$
所以：
$$\begin{align}
\phi_{n} & =BS_{r\perp} \\
 & = B \left( \frac{\hbar}{eB} \right)^{2}A_{n} \\
 & = \frac{\hbar^{2}}{e^{2}B} \frac{2\pi|e|B}{\hbar}(n+\gamma) \\
 & = \frac{2\pi \hbar}{|e|}(n+\gamma)
\end{align}$$
>[!Right]
>$\blacksquare$

我们现在知道，若外加磁场，电子在k-space中等能量面的一个垂直于磁场的slice上绕动，形成一个loop。这个loop的面积是离散的。

我们关心Fermi surface附近$kT$范围内的电子。因为那些$\epsilon<\epsilon_{F}=kT$上的电子轨道占据数在$T\rightarrow 0$时为$2$；那些$\epsilon>\epsilon_{F}+kT$的电子轨道占据数在$T\rightarrow {0}$时为0。它们在低温都不贡献电流。

对于在Fermi surface上的电子，我用一个垂直于磁场的平面去切Fermi surface来看它们的loop。由于这些loop的面积是离散的，我们可以想象许多这些loop拉长形成的tube，称为Landau tube。实际上允许存在的$\vec{k}$就只能在Fermi surface和Landau tube的交线上。

所以我们不得不认为Fermi surface上的accessible area被迫被挤压成了离散的形状。

![[Drawing 2025-11-23 03.35.32.excalidraw|center]]
## Remark
你可能会说，在Fermi surface上任何$\vec{k}$位置体元内，都有不为零的电子数$\frac{1}{4\pi^{3}}d^{3}k\sum_{n}f(\epsilon_{n})$。所以在除了Landau tube与Fermi surface的交线之外的Fermi surface上的区域，不也有非零的占据数吗？但是，$f(\epsilon_{n})$的含义是，若存在一个non-degenerate量子态，对应能量$\epsilon_{n}$，并且这个量子态是accessible的，那么这个态的占据数为$f(\epsilon_{n})$。如果这个态本身不accessible，那么我在推导$f(\epsilon_{n})=\text{number of particles}\times \text{the probability corresponding to this number of particles}$时，就不可能让任何粒子落在这个态上，即$\text{number of particles}=0$。





