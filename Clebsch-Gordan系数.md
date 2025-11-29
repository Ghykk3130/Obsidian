# 1. Recursion relation

考虑$\vec{J}_{1},\vec{J}_{2}$。它们引出的算子$J_{1}^{2},J_{1z},J_{2}^{2},J_{2z}$的本征态张成一组完备基。令本征态为$\ket{j_{1},j_{2},m_{1},m_{2}}$，简记为$\ket{m_{1},m_{2}}$。

现在考虑$\vec{J}=\vec{J}_{1}+\vec{J}_{2}$。这同样是Hilbert空间上的一个算子。可以证明$J^{2},J_{z},J_{1}^{2},J_{2}^{2}$本征态也张成一组完备基。令本征态为$\ket{j_{1},j_{2},j,m}$，简记为$\ket{j,m}$。

Clebsh-Gorden系数即这两组基作基变换的系数。定义：

>[!Note] Definition 1
>Define the Clebsh-Gorden coefficient as $\bra{m_{1},m_{2}}j,m\rangle$

我们作如下命题：

>[!Note] Proposition 1
>$\bra{m_{1},m_{2}}j,m\rangle=0$ if $m_{1}+m_{2}\neq m$.

^823fd7

## Proof.
我们有：
$$\begin{align}
 & J_{z}\ket{j,m} = \hbar m\ket{j,m} \\
\implies & \bra{m_{1},m_{2}} J_{z}\ket{j,m} =\hbar m\bra{m_{1},m_{2}} j,m\rangle \\
\implies & \bra{m_{1},m_{2}} (J_{1z}+J_{2z})\ket{j,m} =\hbar m\bra{m_{1},m_{2}}  j,m\rangle \\
\implies & (m_{1}+m_{2})\bra{m_{1},m_{2}}j,m\rangle=m\bra{m_{1},m_{2}} j,m\rangle 
\end{align}$$
>[!Right]
>$\blacksquare$

我们可以证明，CG系数有如下递推公式：

>[!Note] Proposition 2
>$$\sqrt{ (j \pm m +1) (j \mp m)}\bra{m_{1},m_{2}} j,m\pm 1\rangle=\sqrt{ (j_{1} \mp m_{1}+1)(j_{1}\pm m_{1} ) }\bra{m_{1}\mp{1},m_{2}} j,m\rangle+\sqrt{ (j_{2} \mp m_{2}+1)(j_{2}\pm m_{2}) }\bra{m_{1},m_{2}\mp 1} j,m\rangle$$
## Remark
上述公式的记忆方法为：左手边系数是右手边$m$通过$J_{\pm}$作用在右手边$j,m$得到的系数。右手边系数为左手边通过$J_{1\mp},J_{2\mp}$作用在左手边$m_{1},m_{2}$得到的的系数。
## Proof.
我们有：
$$\begin{align}
 & J_{\pm} \ket{j,m} = (J_{1\pm}+J_{2\pm} )\ket{j,m} \\
\implies &  \hbar \sqrt{ (j\pm m +1)(j \mp m) }\ket{j,m\pm{1}} =(J_{1\pm}+J_{2\pm})\ket{j,m}  
\end{align}$$
我们在两边左乘一个$\bra{m_{1},m_{2}}$。根据[[Clebsch-Gordan系数#^823fd7|proposition 1.1]]，必须要求$m_{1}+m_{2}=m\pm{1}$。然后：
$$\begin{align}
  \hbar \sqrt{ (j\pm m + 1)(j\mp m) }\bra{m_{1},m_{2}} j,m\pm 1\rangle & =\bra{m_{1},m_{2}} (J_{1\pm}+ J_{2\pm})\ket{j,m}   \\
 & = \left(\hbar \sqrt{ (j_{1} \mp m_{1}+1)(j_{1}\pm m_{1}) }\bra{m_{1}\mp 1,m_{2}} +\hbar \sqrt{ j_{2}\mp m_{2}+1 }(j_{2}\pm m_{2})\bra{m_{1},m_{2}\mp 1} \right)\ket{j,m} 
\end{align}$$
约掉$\hbar$即可。
>[!Right]
>$\blacksquare$
# 2. $\vec{S}_{1}+\vec{S}_{2}$

我们知道$\vec{S}_{1},\vec{S}_{2}$各自构成一个$SO(3)$的二维不可约表示。于是它们Hilbert空间的张量积构成一个$SO(3)$的四维不可约表示。

令$\vec{S}=\vec{S}_{1}+\vec{S}_{2}$。假设我们想知道$\ket{j=1,m=0}$的所有CG系数。

我们知道，这个态必定是$\ket{m_{1}=\frac{1}{2},m_{2}=- \frac{1}{2}},\ket{m_{1}=- \frac{1}{2},m_{2}=\frac{1}{2}}$的线性组合。

我们首先令递推公式中出现上面三个中一个的CG系数。然后刻意令递推公式中的某项为零矢量。

例如说，我们想从$\bra{m_{1}=\frac{1}{2},m_{2}=- \frac{1}{2}}j=1,m=0\rangle$开始。注意到$m_{1}=\frac{3}{2}$的话一定会出一个零矢量。所以我们考虑递推公式：
$$\begin{align}
 & \sqrt{ 1(1+1)-0(0+1) }\bra{m_{1}=\frac{3}{2},m_{2}=- \frac{1}{2}} j=1,m=1\rangle=\sqrt{ \frac{1}{2}\left( \frac{1}{2}+1 \right)-\frac{3}{2}\left( \frac{3}{2}-1 \right) }\bra{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle+\sqrt{ \frac{1}{2}\left( \frac{1}{2}+1 \right)-\left( -\frac{1}{2} \right)\left( -\frac{1}{2}-1 \right) }\bra{m_{1}=\frac{3}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle \\
\implies & 0=\bra{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle
\end{align}$$
我们将刚刚的行动用下图标出来：

![[Drawing 2025-11-28 21.16.24.excalidraw|center]]

我们相当于从右上角通过递推公式下降到了左上角和右下角。并且因为左上角和右下角CG系数为零，我们得到了左上角CG系数也为零。

接下来我们按照这个地图，如何才能走到$m_{1}=-\frac{1}{2},m_{2}=\frac{1}{2}$呢？

![[Drawing 2025-11-28 21.22.29.excalidraw|center]]

但是这有一个问题，就是我们不知道$m_{1}=-\frac{1}{2},m_{2}=-\frac{1}{2}$点的值。为了得到这点的值，我们从该点往左下方走：

![[Drawing 2025-11-28 21.25.38.excalidraw|center|450]]

但是显然，$m_{1}=-\frac{3}{2},m_{2}=-\frac{1}{2}$和$m_{1}=-\frac{1}{2}, m_{2}=-\frac{3}{2}$点的CG系数都是零。所以$m_{1}=-\frac{1}{2},m_{2}=-\frac{1}{2}$点的CG系数也是零。所以在$m_{1}=-\frac{1}{2},m_{2}=-\frac{1}{2}$点列递推公式有：
$$\begin{align}
 & \sqrt{ 1(1+1)-0(0-1) }\bra{m_{1}=-\frac{1}{2}, m_{2}=-\frac{1}{2}} j=1,m=-1\rangle=\sqrt{ \frac{1}{2}\left( \frac{1}{2}+1 \right)-\left( -\frac{1}{2} \right)\left( -\frac{1}{2}+1 \right) }\bra{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle+\sqrt{ \frac{1}{2}\left( \frac{1}{2}+1 \right)-\left( -\frac{1}{2}\left( -\frac{1}{2}+1 \right) \right) }\bra{m_{1}=-\frac{1}{2},m_{2}=\frac{1}{2}}j=1,m=0\rangle  \\
\implies & 0=\bra{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle+\bra{m_{1}=-\frac{1}{2},m_{2}=\frac{1}{2}} j=1,m=0\rangle \\
\implies & \bra{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} j=1,m=0\rangle=-\bra{m_{1}=-\frac{1}{2},m_{2}=\frac{1}{2}} j=1,m=0\rangle
\end{align}$$

我们得到了$\ket{j=1,m=0}$在$\ket{m_{1},m_{2}}$基下展开的所有CG系数的相对大小！之后显然通过normalization可以得到：
$$\ket{j=1,m=0} =\frac{1}{\sqrt{ 2 }}\left( \ket{m_{1}=\frac{1}{2},m_{2}=-\frac{1}{2}} -\ket{m_{1}=-\frac{1}{2},m_{2}=\frac{1}{2}}  \right)$$
# 3. $\vec{L}+\vec{S}$ 

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


