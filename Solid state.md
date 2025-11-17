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

我们已经知道，晶体内电子波函数存在解$\psi_{}(\vec{r})=e^{i\vec{k}\cdot \vec{r}}u_{}(\vec{r})$。将波函数带入Schrodinger方程得到：
$$\left( - \frac{\hbar^{2}}{2m}\nabla^{2}- \frac{i\hbar^{2}}{2m}\vec{k}\cdot \nabla+ \frac{\hbar^{2}k^{2}}{2m}+U(\vec{r})\right)u(\vec{r})=\epsilon u(\vec{r})$$
注意到该方程式有一个parameter $\vec{k}$。Impose boundary condition:
$$u(\vec{r}+\vec{R})=u(\vec{r})$$
我们就只考虑一个primitive cell中的解。那么能级会量子化。这引出第二个parameter $n$。所以我们加上所有parameter的脚标得到：
$$\left( - \frac{\hbar^{2}}{2m}\nabla^{2}+ \frac{\hbar^{2}k^{2}}{2m}+U(\vec{r}) \right)u_{nk}(\vec{r})=\epsilon_{n}(\vec{k})u_{nk}(\vec{r})$$
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
$$\left( - \frac{\hbar^{2}}{2m}\nabla^{2}- \frac{i\hbar^{2}}{2m}\vec{k}\cdot \nabla+ \frac{\hbar^{2}k^{2}}{2m}+U(\vec{r})\right)u(\vec{r})=\epsilon u(\vec{r})\tag{*}$$
而：
$$\begin{align}
\psi_{n,\vec{k}+\vec{K}}(\vec{r}) & =e^{i(\vec{k}+\vec{K})\cdot \vec{r}}u_{n,\vec{k}}(\vec{r}) \\
 & = e^{i\vec{k}\cdot \vec{r}}(e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r}))
\end{align}\tag{**}$$
而$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$也具有周期性：
$$\begin{align}
e^{i\vec{K}\cdot(\vec{r}+\vec{R}) }u_{n,\vec{k}}(\vec{r}+\vec{R}) & = e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})
\end{align}$$
所以$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$也是一个Bloch定理中的$u_{n,\vec{k}}$函数。将$(* *)$代入Schrodinger方程，发现$e^{i\vec{K}\cdot \vec{r}}u_{n,\vec{k}}(\vec{r})$以相同的$n,\vec{k}$系数满足$(*)$。所以$\psi_{n,\vec{k}},\psi_{n,\vec{k}+\vec{K}}$，或者说$u_{n,\vec{k}},u_{n,\vec{k}+\vec{K}}$算出来本征值一样的。$\psi_{n,\vec{k}},\psi_{n,\vec{k}+\vec{K}}$最多相差一个phase factor
>[!Right]
>$\blacksquare$
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

# 3.1 Tight-binding approximation

考虑一个晶体。对于晶体中的一个电子，存在Hamiltonian $H$。我们假设，这个Hamiltonian可以拆为一个isolated原子的Hamiltonina $H_{at}$，和一个一堆原子组合在一起，形成的势能差异$\Delta U$。

## 3.1.1 Naive tight-binding approximation

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
## 3.1.2 Tight-binding approximation

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


# 4. Drude model

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
## 4.1 电子对电场的response

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

## 4.2 Dielectric constant

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







