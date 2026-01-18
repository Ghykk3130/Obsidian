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
suppress量子数$j_{1},j_{2},j$<我们有：
$$\begin{align}
 & \bra{m_{1},m_{2}} J_{\pm}\ket{m} = \bra{m_{1},m_{2}} (J_{1\pm}+J_{2\pm})\ket{m}  \\
\implies & \hbar \sqrt{ j(j+1)-m(m\pm{1}) }\bra{m_{1},m_{2}} m\pm 1\rangle= \hbar \sqrt{ j_{1}(j_{1}+1)-m_{1}(m_{1} \mp 1) }\bra{m_{1}\mp 1,m_{2}} m\rangle+ \hbar \sqrt{ j_{2}(j_{2}+1)-m_{2}(m_{2}\mp 1) }\bra{m_{1},m_{2} \mp 1} m\rangle \\
\end{align}$$
约掉$\hbar$ then done。 
>[!Right]
>$\blacksquare$

>[!Note] Proposition 3
>$\bra{j_{1},j_{2},m_{1},m_{2}}j_{1},j_{2},j,m\rangle$ is nonzero only when $|j_{1}-j_{2}|\leq j \leq j_{1}+j_{2}$.

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
## Caveat
只有斜向右上或者向左下的三角形是可以的。这取决于CG系数递推公式的形式。


# 3. $\vec{L}+\vec{S}$ 

我们以$j=l+ \frac{1}{2}$为例。suppress $j,l,s$，我们需要分解$\ket{m}$。而显然可以分解为$\ket{m-\frac{1}{2}, \frac{1}{2}},\ket{m+ \frac{1}{2},- \frac{1}{2}}$。

>[!Note] Proposition 1
$$\bra{m- \frac{1}{2}, \frac{1}{2}} m\rangle= \sqrt{  \frac{l+m+ \frac{1}{2}}{2l+1} }$$
## Proof.

我们考虑$\bra{m- \frac{1}{2}, \frac{1}{2}}m\rangle$。我们考虑如下的路径：

![[Drawing 2025-12-16 22.07.21.excalidraw|center|400]]

我们之所以考虑这个路径是因为左上角显然为零。CG递推式比较简单。我们有：
$$\begin{align}
 & \sqrt{ \left( l+ \frac{1}{2} \right)\left( l+ \frac{3}{2} \right)-m(m+1) }\bra{m- \frac{1}{2}, \frac{1}{2} }m\rangle= \sqrt{ l(l+1)-\left( m- \frac{1}{2} \right)\left( m+ \frac{1}{2} \right) }\bra{m+ \frac{1}{2}, \frac{1}{2} }m\rangle \\
  \implies &  \sqrt{ \left( l-m + \frac{1}{2}\right)\left( l+m+ \frac{3}{2} \right)  }\bra{m- \frac{1}{2}, \frac{1}{2}} m\rangle= \sqrt{ \left( l-m+ \frac{1}{2} \right)\left( l+m+ \frac{1}{2} \right) }\bra{m+ \frac{1}{2}, \frac{1}{2}} m\rangle \\
\implies & \bra{m- \frac{1}{2}, \frac{1}{2}} m\rangle= \sqrt{ \frac{l+m+ \frac{1}{2}}{l+m+ \frac{3}{2}} }\bra{m+ \frac{1}{2}, \frac{1}{2}} m\rangle
\end{align}$$
如果我们一直往左走，就有：
$$\begin{align}
\bra{m- \frac{1}{2}, \frac{1}{2}} m\rangle  & = \sqrt{ \frac{l+m+\frac{1}{2}}{l+m+ \frac{3}{2}} } \sqrt{ \frac{l+m+ \frac{3}{2}}{l+m+ \frac{5}{2}}  }\bra{m+ \frac{3}{2}, \frac{1}{2}} m\rangle \\
 & = \sqrt{  \frac{l+m+ \frac{1}{2}}{l+m+ \frac{5}{2}} }\bra{m+ \frac{3}{2}, \frac{1}{2} }m\rangle \\
 & =\dots \\
 & = \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }\bra{l, \frac{1}{2}} l+ \frac{1}{2}\rangle 
\end{align}$$
因为$\bra{l, \frac{1}{2}}l+ \frac{1}{2}\rangle=1$，所以容易得到：
$$\bra{m- \frac{1}{2}, \frac{1}{2}} m\rangle= \sqrt{  \frac{l+m+ \frac{1}{2}}{2l+1} }$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
$$\bra{m+ \frac{1}{2}, - \frac{1}{2}} j=l+ \frac{1}{2},m\rangle=\sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }$$
$$\bra{m- \frac{1}{2}, \frac{1}{2}} j=l- \frac{1}{2},m\rangle= - \sqrt{  \frac{l-m+ \frac{1}{2}}{2l+1} }$$
$$\bra{m+ \frac{1}{2}, - \frac{1}{2}} j=l- \frac{1}{2},m\rangle=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} } $$
## Proof.

可以通过正交性得到其它CG系数。In general， 我们知道： $$\left\{ \begin{align}
\ket{j=l+ \frac{1}{2},m}  & =A\ket{m- \frac{1}{2}, \frac{1}{2}} +B\ket{m+ \frac{1}{2}, -\frac{1}{2}} \\
\ket{j=l- \frac{1}{2},m}  & =C\ket{m- \frac{1}{2}, \frac{1}{2}} +D\ket{m+ \frac{1}{2},- \frac{1}{2}} 
\end{align} \right.$$
其中$A,B,C,D$为相应CG系数。我们仅仅是获得了$A=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$。因为变换前后的矢量各自都是互相垂直的。所以一定有：
Orthogonality $\implies$ $\begin{pmatrix}A & C \\ B & D\end{pmatrix}=\begin{pmatrix}\cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha\end{pmatrix}$ for some $\alpha$

Know: $\cos\alpha=\sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$

$\implies \sin\alpha= \pm \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }=\bra{m+ \frac{1}{2}, - \frac{1}{2}}l+ \frac{1}{2},m\rangle$

接下来确定符号。我们有：
$$\begin{align}
\bra{m+ \frac{1}{2}, -\frac{1}{2}} m \rangle & =  \bra{m+ \frac{1}{2}, -\frac{1}{2} }  \frac{J_{-}^k}{C }\ket{l+ \frac{1}{2}}=\bra{m+ \frac{1}{2},- \frac{1}{2}}  \frac{J_{-}^k}{C }\ket{l, \frac{1}{2}}\text{, for some }k,C  
\end{align}$$
容易证明矩阵$J_{-}$在$\ket{m_{l},m_{s}}$下的矩阵元都为正。（无论怎么用$J_{-}$作用在$\ket{m_{l},m_{s}}$上，都只会得到正数的系数不是吗？）所以：
$$\bra{m+ \frac{1}{2}, \frac{1}{2}} m\rangle \geq 0$$
所以：
$$B= \sqrt{ \frac{l-m+ \frac{1}{2}}{2l+1} }, C=- \sqrt{  \frac{l-m+ \frac{1}{2}}{2l+1} },A=D= \sqrt{ \frac{l+m+ \frac{1}{2}}{2l+1} }$$
>[!Right]
>$\blacksquare$





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


