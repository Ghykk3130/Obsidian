# 1. Weyl点

考虑两条degenerate的能带。局限子在这个子空间的Hamiltonian是$2\times{2}$的。于是有：
$$H(\vec{k})=f_{0}(\vec{k})\mathbb{1}+f_{1}(\vec{k})\sigma_{x}+f_{2}(\vec{k})\sigma_{y}+f_{3}(\vec{k})\sigma_{z}$$
容易通过与spin-1/2系统类比得到两条能带的能量：
$$E_{\pm}= f_{0}(\vec{k})\pm \sqrt{ f_{1}^{2}(\vec{k})+f_{2}^{2}(\vec{k})+f_{3}^{2}(\vec{k}) }$$
若$\sum_{i}f_{i}(\vec{k})\sigma_{i}$部分有三个独立变量，则一定存在某点，使得$f_{i}=0,\text{ for }i=1,2,3$。该点称为Weyl点。

以$\vec{k}$作为参数可以引出Berry curvature。可以定义Weyl点的Chirality，即Chern number：
$$C= \frac{1}{2\pi}\oint_{\Sigma}d\vec{S}\cdot \vec{\Omega}$$
## Note 1: torus

令$S^1$为圆环。即$S^1 \cong \mathbb{R} / 2\pi \mathbb{Z}$。称$S^1$为2-torus。称$S^1\times S^1$为2-torus。可以generalize到2-torus。考虑一个三维中的甜甜圈曲面
![[Drawing 2026-01-20 20.41.10.excalidraw|center|400]]
选取图中那样的坐标$\theta,\phi\in S^1$，所以为一个2-torus。

容易证到：

>[!Note] Proposition 1.1
>The total Chern number in FBZ is zero.
## Proof.

因为FBZ有3-torus的topology，即$k_{x},k_{y},k_{z}$都是重复的，所以在Brillouin zone的一对对径点，有相同的态，进而有相同的$\vec{\Omega}$。但是面元$d\vec{S}$的方向相反。所以：
$$C= \frac{1}{2\pi}\oint_{\text{BZ}}d\vec{S}\cdot \vec{\Omega}=0$$
## Note 2: 对称性

定义宇称算符$P$作用在Hilbert空间上。要求：
$$\bra{\psi} P^{\dagger}\vec{r}P\ket{\psi} =-\bra{\psi} \vec{r}\ket{\psi} \implies \{ \vec{r},P \}=0$$
进而可以计算其它动力学量。




