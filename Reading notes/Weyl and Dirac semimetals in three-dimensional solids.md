# 1. Weyl点

考虑两条degenerate的能带。局限子在这个子空间的Hamiltonian是$2\times{2}$的。于是有：
$$H(\vec{k})=f_{0}(\vec{k})\mathbb{1}+f_{1}(\vec{k})\sigma_{x}+f_{2}(\vec{k})\sigma_{y}+f_{3}(\vec{k})\sigma_{z}$$
  容易通过与spin-1/2系统类比得到两条能带的能量：
$$E_{\pm}= f_{0}(\vec{k})\pm \sqrt{ f_{1}^{2}(\vec{k})+f_{2}^{2}(\vec{k})+f_{3}^{2}(\vec{k}) }$$

若$\sum_{i}f_{i}(\vec{k})\sigma_{i}$部分有三个独立变量，则一定存在某点，使得$f_{i}=0,\text{ for }i=1,2,3$。该点称为Weyl点。注意到任意足够好的三个函数$f_{1}(\vec{k}),f_{2}(\vec{k}),f_{3}(\vec{k})$为零定义出来的面的交点为Weyl点。而给原先Hamiltonian加上perturbation之后，这三个函数还是足够好的，仍然可以产生Weyl点。称为Weyl点的topological stability。

  以$\vec{k}$作为参数可以引出Berry curvature。可以定义Weyl点的Chirality，即Chern number：
$$C= \frac{1}{2\pi}\oint_{\Sigma}d\vec{S}\cdot \vec{\Omega}$$
>[!Quote] Note 1: torus
令$S^1$为圆环。即$S^1 \cong \mathbb{R} / 2\pi \mathbb{Z}$。称$S^1$为2-torus。称$S^1\times S^1$为2-torus。可以generalize到2-torus。考虑一个三维中的甜甜圈曲面
![[Drawing 2026-01-20 20.41.10.excalidraw|center|400]]
选取图中那样的坐标$\theta,\phi\in S^1$，所以为一个2-torus。

容易证到：

>[!Note] Proposition 1.1
>The total Chern number in FBZ is zero.
## Proof.

因为FBZ有3-torus的topology，即$k_{x},k_{y},k_{z}$都是重复的，所以在Brillouin zone的一对对径点，有相同的态，进而有相同的$\vec{\Omega}$。但是面元$d\vec{S}$的方向相反。所以：
$$C= \frac{1}{2\pi}\oint_{\text{BZ}}d\vec{S}\cdot \vec{\Omega}=0$$
>[!Right]
>$\blacksquare$

>[!Quote] Note 2: 对称性
>定义宇称算符$P$作用在Hilbert空间上。要求：
>$$\bra{\psi} P^{\dagger}\vec{r}P\ket{\psi} =-\bra{\psi} \vec{r}\ket{\psi} \implies \{ \vec{r},P \}=0$$
>进而可以计算其它动力学量。显然将系统整体translate了再对称等于先对称再沿反方向translate：
>$$\begin{align}
P\left( 1- \frac{i}{\hbar}\vec{p}\cdot d\vec{r} \right)=\left( 1+ \frac{i}{\hbar}\vec{p}\cdot d\vec{r} \right)P\implies \{ \vec{p},P \}=0
\end{align}$$
>然后可以获得任意力学量。例如说$\vec{j}$。知道$\vec{j}=\frac{e}{m}\vec{p}$。而$\left[ \frac{e}{m},P \right]=0$。所以$\{ \vec{j},P \}=0$。然后因为$\vec{B}=\frac{\mu_{0}}{4\pi}\int \frac{\hat{r}\times \vec{{j}}}{r^{2}}$，故$[\vec{B},P]=0$，当然前提是$\vec{B}$是系统中产生的磁场。
>
>可以考虑time-reversal算符作用在Hilbert空间上，描述系统时间取反后的运动情况。例如自由电子气加上磁场后Hamiltonian为：
$$H= \sum_{i} \frac{p^{2}_{i}}{2m}- n_{\uparrow}h\mu+n_{\downarrow}h\mu$$
若考虑time-reversal，由于自旋是角动量，全部翻转。而$p^{2}_{i}$不变。所以Hamiltonian变为：
$$\sum_{i} \frac{p^{2}_{i}}{2m}+n_{\uparrow}h\mu-n_{\downarrow}h\mu$$
不等于原来的Hamiltonian。称为time-reversal symmetry breaking。
>
>令$G$为parity或者time-reversal。若$[G,H]=0$，系统具有对称性。那么若$H\ket{\psi}=E\ket{\psi}$为一个态，则$GH\ket{\psi}=EG\ket{\psi}=HG\ket{\psi}$$\implies$$G\ket{\psi}$也是$E$对应的本征态。若$G$是不可约的，那么$G\ket{\psi},\ket{\psi}$就是线性独立的。这造成了degeneracy。若对称性破缺，导致$[G,H]\neq{0}$，那么自然$G\ket{\psi}$也就不是$E$对应的本征态。Degeneracy removed!

令$\vec{k}_{0}$是Weyl点。不妨设$f(\vec{k}_{0})=0$。则在附近一阶展开得到：
$$H= \delta{k}_{i} \frac{\partial f_{i}}{\partial k_{i}}\sigma_{i}$$
一般来说，$\frac{\partial f_{1}}{\partial k_{1}}= \frac{\partial f_{2}}{\partial k_{2}}= \frac{\partial f_{3}}{\partial k_{3}}$，令其为$v_{F}$。令$\vec{k}_{0}$为原点。则Hamiltonian写为：
$$H=v_{F}\vec{\sigma}\cdot \vec{k}$$





