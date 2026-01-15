# 1. Graphene的tight-binding

![[Drawing 2026-01-15 01.08.49.excalidraw|center|300]]

可以证明，将graphene每个原子作为晶格点不构成Bravais lattice。每个unit cell里面必须包含两个原子。这两个原子中的一个必须由另一个平移之后旋转得到。用$A,B$标记。

没有理由认为，在原点处晶格中，$A$和$B$（即平移后的$A$）的本征态是正交的。我们强行作一次正交化。

令：
$$H= -t\sum_{\vec{R}\in \Lambda}(\ket{\vec{R},A} \bra{\vec{R},B} + \ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{1},B} +\ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{2},B}+\text{h.c.}) +\epsilon_{0,A} \sum_{\vec{R}\in \Lambda}\ket{\vec{R},A} \bra{\vec{R},A} +\epsilon_{0,B}\sum_{\vec{R}\in \Lambda}\ket{\vec{R},B} \bra{\vec{R},B} $$
直觉上讲，$\epsilon_{0,A}=\epsilon_{0,B}$，因为$A,B$原子仅仅是周围环境旋转了一下，on-site energy应该是一样的。那么：
$$\begin{align}
\text{diagonal term}= \epsilon_{0}\sum_{\vec{R}\in \Lambda}(\ket{\vec{R},A} \bra{\vec{R},A} +\ket{\vec{R},B} \bra{\vec{R},B} )=\epsilon_{0}
\end{align}$$
不妨设$\epsilon_{0}=0$。化简之后：
$$H=-t\sum_{\vec{R}\in \Lambda}(\ket{\vec{R},A} \bra{\vec{R},B} + \ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{1},B} +\ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{2},B}+\text{h.c.})$$
考虑ansatz：
$$\ket{\psi_{\vec{k}}} = \frac{1}{\sqrt{ 2N }} \sum_{\vec{R}\in \Lambda} e^{i\vec{k}\cdot \vec{R}}(c_{A}\ket{\vec{R},A} +c_{B}\ket{\vec{R},B} )$$

