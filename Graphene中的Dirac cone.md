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
  代入Hamiltonian得到：
  $$\begin{align}
 & H\ket{\psi_{\vec{k}}} =E(\vec{k})\ket{\psi_{\vec{k}}} \\
\implies & -\frac{tc_{A}}{\sqrt{ 2N }}\sum_{\vec{R}}(e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},B} +e^{i\vec{k}\cdot(\vec{R}-\vec{a}_{1})  }\ket{\vec{R},B} +e^{i\vec{k}\cdot(\vec{R}-\vec{a}_{2})}\ket{\vec{R},B} )-\frac{tc_{b}}{\sqrt{ 2N }}\sum_{\vec{R}}(e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},A} +e^{i\vec{k}\cdot(\vec{R}+\vec{a}_{1})}\ket{\vec{R},A} +e^{i\vec{k}\cdot(\vec{R}+\vec{a}_{3})}\ket{\vec{R},A} )= E(\vec{k})\ket{\psi_{\vec{k}}} \\
\implies & -tc_{B} \left( \frac{1}{\sqrt{ 2N }} \sum_{}e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},{A}}  \right)  (1+e^{i\vec{k}\cdot \vec{a}_{1}}+e^{i\vec{k}\cdot \vec{a}_{2}})-tc_{A}\left( \frac{1}{\sqrt{ 2N }}\sum e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},B}  \right)(1+e^{-i\vec{k}\cdot \vec{a}_{1}}+e^{-i\vec{k}\cdot \vec{a}_{2}})=E(\vec{k})\ket{\psi_{\vec{k}}} 
\end{align}$$
令：
$$\frac{1}{\sqrt{ 2N }}\sum e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},A}  =\begin{pmatrix}
1 \\
0
\end{pmatrix},\ \frac{1}{\sqrt{ 2N }}\sum e^{i\vec{k}\cdot \vec{R}}\ket{\vec{R},B} =\begin{pmatrix}
0 \\
1
\end{pmatrix}$$
则：
$$\begin{pmatrix}
0 & \gamma(\vec{k}) \\
\gamma(\vec{k})^{*} & 0 
\end{pmatrix}\begin{pmatrix}
c_{A} \\
c_{B}
\end{pmatrix}=E(\vec{k})\begin{pmatrix}
c_{A} \\
c_{B}
\end{pmatrix}, \gamma(\vec{k})=t(1+e^{i\vec{k}\cdot \vec{a}_{1}}+e^{i\vec{k}\cdot \vec{a}_{2}})$$
显然：
$$\begin{align}
E(\vec{k}) & =\pm|\gamma(\vec{k}) | \\
 & = \pm t|1+e^{i\vec{k}\cdot \vec{a}_{1}}+e^{i\vec{k}\cdot \vec{a}_{2}}| \\
 & = \pm t\left|1+\exp\left[ i\left(  \frac{3}{2}ak_{x}+ \frac{\sqrt{ 3 }}{2}ak_{y} \right) \right]+\exp\left[ i \left(  \frac{3}{2}ak_{x}- \frac{\sqrt{ 3 }}{2}ak_{y} \right) \right] \right| \\
 & = \pm t\left|1+2\exp\left( i \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) \right| \\
 & = \pm \sqrt{ 1+4\sin\left(  \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4 \cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) }
\end{align}$$
# 2. Dirac cone

考虑倒格晶体基矢：
$$\vec{b}_{i}\cdot \vec{a}_{j}=2\pi\delta_{ij}$$
容易得到：
$$\vec{b}_{1}=\frac{2\pi}{{ 3 }a} (1,\sqrt{ 3 }),\ \vec{b}_{2}= \frac{2\pi}{{ 3 }a}(1 ,-\sqrt{ 3 })$$


注意到两条能带有交点：
$$$$