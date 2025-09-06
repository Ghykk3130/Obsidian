Setup: 考虑两个角动量ket $\ket{j_{1},m_{1}}, \ket{j_{2},m_{2}}$。它们对应的observable为$J_{1}^{2},J_{1z},J_{2}^{2},J_{2z}$。它们张的量积组成角动量相加的ket $\ket{j_{1},j_{2},m_{2},m_{2}}$。我们有到另一组基$\ket{j_{1},j_{2},j,m}$。它们对应的observable为$J^{2},J_{1}^{2},J_{2}^{2},J_{z}$。我们想知道由$\ket{j_{1}j_{2},j,m}$换到$\ket{j_{1},j_{2},m_{1},m_{2}}$的变换矩阵是什么。为此我们将推导一个关于这个矩阵元的递推关系。

变换矩阵的矩阵元显然为$\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$。称这个矩阵元为Clebsch-Gordan coefficient。
>[! Definition 1]
>Let $\ket{j_{1},j_{2},m_{1},m_{2}},\ket{j_{1},j_{2},j,m}$ be angular momentum kets, with $j_{1},j_{2},m_{1},m_{2},j,m$ corresponding to observables $J_{1}^{2},j_{2}^{2},J_{1z},J_{2z},J^{2},J_{z}$ respectively. $\vec{J}=\vec{J_{1}}+\vec{J_{2}}$. Then call $\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$ the Clebsch-Gordan coefficient.
## Remark
不难发现，CG系数就是新基矢$\ket{j_{1},j_{2},j,m}$在老基矢$\ket{j_{1},j_{2},m_{1},m_{2}}$上的投影。


>[! Proposition 1]
>The CG coefficient is zero unless $m_{1}+m_{2}=m$

## Proof.
考虑$\bra{j_{1},j_{2},m_{1},m_{2}}J_{z}\ket{j_{1},j_{2},j,m}$
On one hand, 它等于$m\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$
OTOH, 它等于$\bra{j_{1},j_{2},m_{1},m_{2}}(J_{1z}+J_{2z})\ket{j_{1},j_{2},j,m}=(m_{1}+m_{2})\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$

令这两个相等，会发现CG系数在$m\neq m_{1}+m_{2}$时必为零。
>[!Right]
>$\blacksquare$

接下来为了获得不同的$m_{1},m_{2},m$对应的Clebsch-Gordan系数之间的递推关系，fix $j_{1},j_{2},j$, 我们考虑：
$J_{\pm}\ket{j_{1},j_{2},j,m}=(J_{1\pm}+J_{2\pm})\ket{j_{1},j_{2},j,m}$

为了引入Clebsch-Gordan系数，我们将右手边展开得到：
$J_{\pm}\ket{j_{1},j_{2},j,m}=(J_{1\pm}+J_{2\pm})\sum_{m_{1},m_{2}} \ket{j_{1},j_{2},m_{1},m_{2}}\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$
$\sqrt{ j(j+1)-m(m\pm{1}) }\ket{j_{1},j_{2},j,m \pm 1}=\sum \sqrt{ j_{1}(j_{1}+1)-m_{1}(m_{1}\pm{1}) }\ket{j_{1},j_{2},m_{1}\pm 1,m_{2}}\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle + \sum \sqrt{ j_{2}(j_{2}+1)-m_{2}(m_{2}\pm 1) }\ket{j_{1},j_{2},m_{1},m_{2}\pm 1}\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$

为了在左手边也得到Clebsh-Gordan系数，我们在左右两边左乘$\langle j_{1},j_{2},m_{1}^{'},m_{2}^{'}|$，利用正交性得到：
$\sqrt{ j(j+1)-m(m\pm 1) }\bra{j_{1},j_{2},m_{1}^{'},m_{2}^{'}}j_{1},j_{2},j,m\pm 1 \rangle=\sqrt{ j_{1}(j_{1}+1)-m_{1}^{'}(m_{1}^{'}\mp 1) } \bra{j_{1},j_{2},m_{1}^{'} \mp 1,m_{2}^{'}}j_{1},j_{2},j,m \rangle+\sqrt{ j_{2}(j_{2}+1)-m_{2}^{'}(m_{2}^{'}\mp 1) }\bra{j_{1},j_{2},m_{1}^{'}\mp 1, m_{2}^{'}}j_{1},j_{2},j,m \rangle$或者去掉撇写为：

$\sqrt{ j(j+1)-m(m\pm 1) }\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m \pm 1\rangle=\sqrt{ j_{1}(j_{1}+1) -m_{1}(m_{1}\mp 1)}\bra{j_{1},j_{2},m_{1} \mp 1,m_{2}}j_{1},j_{2},j,m\rangle + \sqrt{ j_{2}(j_{2}+1)-m_{2}(m_{2}\mp 1) }\bra{j_{1},j_{2},m_{1},m_{2}\mp 1}j_{2},j_{2},j,m\rangle$
>[! Proposition 2]
>$\sqrt{ j(j+1)-m(m\pm 1) }\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m \pm 1\rangle=\sqrt{ j_{1}(j_{1}+1) -m_{1}(m_{1}\mp 1)}\bra{j_{1},j_{2},m_{1} \mp 1,m_{2}}j_{1},j_{2},j,m\rangle + \sqrt{ j_{2}(j_{2}+1)-m_{2}(m_{2}\mp 1) }\bra{j_{1},j_{2},m_{1},m_{2}\mp 1}j_{2},j_{2},j,m\rangle$
>or
>$\sqrt{ (j \mp m)(j\pm m +1) } \bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m \pm 1\rangle=\sqrt{ (j_{1} \pm m_{1})(j_{1} \mp m_{1} + 1) }\bra{j_{1},j_{2},m_{1}\mp 1,m_{2}}j_{1},j_{2},j,m\rangle + \sqrt{ (j_{2} \pm m_{2})(j_{2} \mp m_{2} + 1) }\bra{j_{2},j_{2},m_{1},m_{2}\mp 1}j_{1},j_{2},j,m \rangle$

## Caveat
注意此处的磁角量子数的关系是$m_{1} +m_{2} \mp 1=m$。下面这个例子很容易因为这点算不对。

## Remark
写出递推式的技巧：注意在对于一个不为零的CG系数，总有$m_{1}+m_{2}=m$ （当然实际上是caveat中那个等式）。所以CG系数写半边的$m$就应立刻知道另一半。省略$j_{1},j_{2},m,j$, 例如在下面的ex中，$\bra{m_{1}=m- \frac{1}{2},m_{2}= \frac{1}{2}}$的另一半就一定是$\ket{m}$

# Ex: $\vec{L}+\vec{S}$ for electrons

## Big picture

我们考虑的是$\ket{l,s,j,m}$在$\ket{l,s,m_{l},m_{s}}$上的投影。这个投影的大小就是CG系数。我们忽略一些量子数将CG系数简写为$\bra{m_{l},m_{s}}l,s\rangle$。

我们知道CG系数非零的条件：CG系数非零要求 1) $m=m_{l}+m_{s}$。2) $|l-s|\leq j\leq l+s$。因此$j$有两种取值$l\pm \frac{1}{2}$(除非$l=0$。)，此外$m_{l}$还有两种取值$\pm \frac{1}{2}$。

固定$l=l,s= \frac{1}{2}$, CG系数$\bra{m_{l},m_{s}}j,m\rangle$就有四个自由度。$m=m_{l}+m_{s}$消去一个自由度。我们用$m_{l},m_{s},j$来描述剩下的三个自由度。在这三个自由度中，$j$的那个自由度只能取$l \pm s=l \pm \frac{1}{2}$两个值。$m_{s}$的那个自由度也只能取$\pm \frac{1}{2}$两个值。 而$m_{l}$的那个自由度可以取$-l,...,l$的$2l+1$个值。

我们接下来用$m_{s},j,m$这三个变量，不过自由度的限制还是一样的。

CG系数的非零条件让我们可以知道$\ket{j,m}$在哪些$\ket{m_{l},m_{s}}$上有投影。所以

$\ket{l+ \frac{1}{2},m}$在$\ket{m- \frac{1}{2}, \frac{1}{2}}$和$\ket{m+ \frac{1}{2}, -\frac{1}{2}}$上有投影
$\ket{l- \frac{1}{2},m}$在$\ket{m- \frac{1}{2}, \frac{1}{2}}$和$\ket{m+ \frac{1}{2}, -\frac{1}{2}}$上有投影

这个投影的系数就是CG系数。

## When $m_{s}= \frac{1}{2},j=l+ \frac{1}{2}, m \text{ arbitrary}$

在这种情况下可以得到一个CG系数。

Fix $j_{1}=l,j_{2}=s=\frac{1}{2}, j=l+ \frac{1}{2},m_{s}=\frac{1}{2},m=m$
我们观察proposition 2中式子就会发现，右手边是左手边的$m_{1},m_{2}$分别加一对应的CG系数。Proposition 2不好处理，因为右手边含有两个CG系数。在某些特殊情况下，右手边可以只含一个CG系数。例如我们取了$m_{2}=m_{s}=\frac{1}{2}$，所以$m_{2}+1$对应的CG系数是0（因为超过了$s$）

我们选择一直增加$m_{1}=m_{l}$到它的上限$l$，以此来获得一系列CG系数的递推式。省略量子数$l,s$就有：

$$\begin{align}
\sqrt{ \left( l+m+\frac{3}{2} \right)\left( l-m+\frac{1}{2} \right) }\bra{m-\frac{1}{2},  \frac{1}{2} }l+ \frac{1}{2}, m \rangle  & =\sqrt{ \left( l-m+ \frac{1}{2} \right) \left( l+m+ \frac{1}{2} \right) }\bra{m+ \frac{1}{2}, \frac{1}{2}}l+ \frac{1}{2},m+1\rangle \\ \sqrt{ \left( l+m+\frac{5}{2} \right)\left( l-m-\frac{1}{2} \right) }\bra{m+\frac{1}{2},  \frac{1}{2} }l+ \frac{1}{2}, m+1 \rangle  & =\sqrt{ \left( l-m- \frac{1}{2} \right) \left( l+m+ \frac{3}{2} \right) }\bra{m+ \frac{3}{2}, \frac{1}{2}}l+ \frac{1}{2},m+2\rangle \\ \dots\\ \sqrt{ (2l+1) \cdot 1 }\bra{l-1, \frac{1}{2}} l+ \frac{1}{2},l- \frac{1}{2}\rangle  & = \sqrt{ 1\cdot 2l }\bra{l, \frac{1}{2}} l+ \frac{1}{2}, l +\frac{1}{2}\rangle
  
\end{align}$$

$\implies \bra{m- \frac{1}{2}, \frac{1}{2}}l + \frac{1}{2}, m\rangle= \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }\bra{l, \frac{1}{2}}l+ \frac{1}{2}, l+ \frac{1}{2}\rangle$
我们知道$\ket{l, \frac{1}{2}}=\ket{l+ \frac{1}{2},l+ \frac{1}{2}}$ up to a phase factor。因为当$m=l+ \frac{1}{2}$时，我们只能得到$m_{l}=l,s= \frac{1}{2}$。也就是说$\ket{l+ \frac{1}{2},l+ \frac{1}{2}}$只在$m_{l}=l,s= \frac{1}{2}$这个态上有分量。一般情况下，$m$可以在很多态下有分量，因为$m$可以以很多种方式拆分成$m_{l},s$。但在上限处只有唯一的拆分。

>[!Convention 1]
$\bra{l, \frac{1}{2}}l+ \frac{1}{2},l+ \frac{1}{2}\rangle=1$ 

$\implies \bra{m- \frac{1}{2}, \frac{1}{2}}l+ \frac{1}{2}, m\rangle=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$

## General case

由big picture, 我们知道： $$\left\{ \begin{align}
\ket{l+ \frac{1}{2},m}  & =A\ket{m- \frac{1}{2}, \frac{1}{2}} +B\ket{m+ \frac{1}{2}, -\frac{1}{2}} \\
\ket{l- \frac{1}{2},m}  & =C\ket{m- \frac{1}{2}, \frac{1}{2}} +D\ket{m+ \frac{1}{2},- \frac{1}{2}} 
\end{align} \right.$$
其中$A,B,C,D$为相应CG系数。我们仅仅是获得了$A=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$。

>[! Idea]
我们可以利用基的正交性获得其他的CG系数。

考虑基变换矩阵：$\begin{pmatrix}\ket{l+ \frac{1}{2},m } & \ket{l- \frac{1}{2},m}\end{pmatrix}= \begin{pmatrix}\ket{m- \frac{1}{2}, \frac{1}{2}} & \ket{m+ \frac{1}{2},-\frac{1}{2}}\end{pmatrix}\begin{pmatrix}A & C \\ B & D\end{pmatrix}$

Orthogonality $\implies$ $\begin{pmatrix}A & C \\ B & D\end{pmatrix}=\begin{pmatrix}\cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha\end{pmatrix}$ for some $\alpha$

Know: $\cos\alpha=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$

$\implies \sin\alpha= \pm \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }=\bra{m+ \frac{1}{2}, - \frac{1}{2}}l+ \frac{1}{2},m\rangle$

接下来确定符号。

注意到$\bra{m+ \frac{1}{2}, -\frac{1}{2}}l+ \frac{1}{2},m\rangle$的ket部分是$\ket{j,m}$这个老基，我们很难将它和新基$\ket{m_{l},m_{s}}$联系起来。所以我们想把$\ket{j,m}$换掉。

>[! Idea]
>Convention 1可以建立新老基之间的联系。

Convention 1 $\implies$ $\ket{l+ \frac{1}{2},l+ \frac{1}{2}}=\ket{l, \frac{1}{2}}$
$\ket{l+ \frac{1}{2},m}= \frac{J_{-}^k}{C}\ket{l+ \frac{1}{2}, l+ \frac{1}{2}}$ for some $k$ and $C>0$

于是：
$\bra{m+ \frac{1}{2}, - \frac{1}{2}}l+ \frac{1}{2},m\rangle=\bra{m+ \frac{1}{2}, -\frac{1}{2}} \frac{J_{-}^k}{C}\ket{l+ \frac{1}{2}, l+ \frac{1}{2} }=\bra{m+ \frac{1}{2}, -\frac{1}{2}} \frac{J_{-}^k}{C}\ket{l, \frac{1}{2}}$

容易证明矩阵$J_{-}$在$\ket{m_{l},m_{s}}$下的矩阵元都为正。即：
$\bra{m_{l}^{'},m_{s}^{'}}J_{-}\ket{m_{l},m_{s}}=\bra{m_{l}^{'},m_{s}^{'}}(L_{-}+S_{-})\ket{m_{l},m_{s}}=\hbar \sqrt{ l(l+1)-m_{l}(m_{l}-1) }\bra{m_{l}^{'},m_{s}^{'}}m_{l}-1,m_{s}\rangle+ \hbar \sqrt{ s(s+1)-m_{s}(m_{s}-1) }\bra{m_{l}^{'},m_{s}^{'}}m_{l},m_{s}-1\rangle$
所以$\frac{J_{-}^k}{C}$的矩阵元都为正。所以应当取正号。

因此：
>[!Proposition 3]
$\begin{pmatrix}\ket{j=l+ \frac{1}{2},m } & \ket{j=l- \frac{1}{2},m}\end{pmatrix}= \begin{pmatrix}\ket{m_{l}=m-\frac{1}{2},m_{s}=\frac{1}{2}} & \ket{m_{l}=m+ \frac{1}{2},m_{s}=-\frac{1}{2}}\end{pmatrix}\begin{pmatrix}\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} } & -\sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} } \\ \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} } & \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }\end{pmatrix}$


将态$\ket{j= l+ \frac{1}{2},m}= \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }\ket{m_{l}=m- \frac{1}{2},m_{s}= \frac{1}{2}}+ \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }\ket{m_{l}=m+ \frac{1}{2},m_{s}= -\frac{1}{2}}$在表象下展开得到$\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }Y_{l}^{m- 1/2}(\theta,\phi)X_{+}+ \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }Y_{l}^{m+1/2}(\theta,\phi)X_{-}$

同样将$\ket{j=l- \frac{1}{2},m}=-\sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }\ket{m_{l}=m- \frac{1}{2},m_{s}= \frac{1}{2}}+ \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }\ket{m_{l}=m+ \frac{1}{2},m_{s}= -\frac{1}{2}}$在表象下展开得到$-\sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }Y_{l}^{m- 1/2}(\theta,\phi)X_{+}+ \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }Y_{l}^{m+1/2}(\theta,\phi)X_{-}$

>[!Definition 2]
>Spin-angular functions:
>$\mathcal{Y}_{l}^{j=l \pm 1/2,m}= \pm \sqrt{ \frac{l \pm m+ \frac{1}{2}}{2l+1} }Y_{l}^{m- 1/2}(\theta,\phi)X_{+}+ \sqrt{ \frac{l \mp m+\frac{1}{2}}{2l+1} }Y_{l}^{m+ 1/2}(\theta,\phi)X_{-}$

>[! Proposition 4]
>$\int d\theta d\phi \sin \theta(\mathcal{Y}_{l^{'}}^{j^{'},m^{'}})^{*}\mathcal{Y_{l}^{j,m}}$ is nonzero unless $(j^{'},l^{'},m^{'})=(j,l,m)$
>

^f94e92

## Proof.
我们知道$\int d\theta d\phi \sin \theta(\mathcal{Y}_{l^{'}}^{j^{'},m^{'}})^{*}\mathcal{Y_{l}^{j,m}}= \bra{l^{'},s= \frac{1}{2},j^{'},m^{'}}l,s= \frac{1}{2},j,m\rangle$
于是proposition 4便是显然
>[! Right]
>$\blacksquare$


