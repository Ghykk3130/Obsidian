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
应该可以算出，该点具有$C\neq 0$。由于总Chern number守恒，必然存在另一个Weyl点，且Hamiltonian为：
$$H=-v_{F}\vec{\sigma}\cdot \vec{k}$$
以至于算出$-C$的Chern number。

现在考虑一个具体的例子。考虑一个有两个orbital的系统。用一个赝自旋描述这两个orbital。每个orbital上电子有动量$\hbar \vec{k}$，以及自旋。Hilbert空间为orbital的Hilbert空间，动量的Hilbert空间，以及自旋Hilbert空间的张量积。

考虑如下Hamiltonian：
$$H=v_{F}\tau_{x}\vec{\sigma}\cdot \vec{k}+m\tau_{z}+b\sigma_{z}+ b^{'}\tau_{z}\sigma_{x}$$
第一项为Weyl动能。在系统完全处于两个orbital中的一个是不存在。第二项是能隙，假设能隙大小为$2m$。第三项是说两个obital都施加$z$方向磁场的偶极项。第四项是说两个orbital施加$x$方向相反的磁场的偶极项。

可以计算当横向磁场$b^{'}=0$时，系统具有四条能带：
$$\epsilon_{s\mu}=s\sqrt{ m^{2}+b^{2}+v^{2}k^{2}+\mu_{2}b\sqrt{ v^{2}k_{z}^{2}+m^{2} } },\ s=\pm 1,\mu=\pm 1$$
代码如下：
```Mathematica
sx = {{0, 1}, {1, 0}};
sy = {{0, -I}, {I, 0}};
sz = {{1, 0}, {0, -1}};
s0 = {{1, 0}, {0, 1}};

H11 = m s0 + b sz;
H12 = v (kx sx + ky sy + kz sz);
H21 = H12;
H22 = -m s0 + b sz;

H = ArrayFlatten[{{H11, H12}, {H21, H22}}];
Eigenvalues[H]
```

令$k_{x}=0$，可以作$\epsilon_{s\mu}(k_{y},k_{z})$：
![[Pasted image 20260127210056.png|center|600]]
最左侧：$m=0,b=0$。四条能带在原点重合，称为Dirac node。 中：$m>b$。只是一个普通的semiconductor。右：$m<b$。最右显然产生了两个Weyl nodes。称为Zeeman splitting。
# 2. WSM with broken $\tau$ symmetry

考虑一个simple cubic lattice。每个点上有两条orbital，为$s,p$轨道。由$s$轨道的wannier态组合出一个Bloch态，由$p$轨道的wannier态组合出一个Bloch态。则固定$\mathbf{k}$后Hilbert空间是二维。

注意到：
$$\tau_{z} \begin{pmatrix}
1 \\
0 
\end{pmatrix}= \begin{pmatrix}
1 \\
0
\end{pmatrix},\ \tau_{z}\begin{pmatrix}
0 \\
1 
\end{pmatrix}=- \begin{pmatrix}
0 \\
1
\end{pmatrix}$$
因为$s$是偶宇称，$p$是奇宇称，所以$\tau_{z}$为宇称算符在$s,p$基下的表示。

所以：
$$\tau_{z}^{\dagger}\mathbf{k}\tau_{z}=-\mathbf{k}$$
$$\implies\tau_{z}^{\dagger}H(\mathbf{k})\tau_{z}=H(-\mathbf{k})$$
可由tight-binding得到：
$$H=t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)\tau_{z}+t_{x}(\sin k_{x}a)\tau_{x}+t_{y}(\sin k_{y}a)\tau_{y}$$
注意到，在Hamiltonian零点附近作一阶展开，可以得到：
$$H=t_{z}\tau_{z}+t_{x}adk_{x}\tau_{x}+t_{y}adk_{y}\tau_{y}$$
这正是$v_{x}=t_{x}a,v_{y}=t_{y}a,v_{z}=t_{z}$


>[!Quote] Note: TRIM 点
>在FBZ的$S^3$topology下，考虑$-\mathbf{k}=\mathbf{k}$的点，即$-\mathbf{k}=\mathbf{k}+\mathbf{G}$的点，称为TRIM(time-reversal-inverted-momentum)点。
>
>例如simple cubic lattice，其reciprocal lattice仍为simple cubic lattice。就选择八个各点构成的最小立方体为FBZ。则$-\mathbf{k}=\mathbf{k}+\mathbf{G}\implies 2\mathbf{k}=G$。那么$\mathbf{k}$可以取原点$\Gamma$，靠近原点的三条边的中心点$X,Y,Z$，靠近原点的三个面的中心点$M$，体对角线中心点$R$。
>![[Drawing 2026-01-28 23.16.15.excalidraw|center|350]]

注意到simple cubic lattice的TRIM点坐标分量要么是$\frac{\pi}{a}$，要么是$0$。所以在TRIM点上，Hamiltonian reduce为：
$$H=t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)\tau_{z}$$
在TRIM点，两个能级分别为$\pm t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)$。
其中$t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)$对应$\ket{s}$组合出的Bloch态，$-t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)$对应$\ket{p}$组合出的Bloch态。

由于Boltzmann factor，低温下电子占据能量更低的态。所以若$t_{z}(2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a)$变号，电子占据的态switch。Parity相应switch。

注意到，在$\Gamma$点$2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a$是最容易负的，在$R$点$2-\cos k_{x}a-\cos k_{y}a+\gamma-\cos k_{z}a$是最容易正的。在$\gamma=0$，$\Gamma$和其它TRIM点parity不同。可以证明，奇数个parity不同的TRIM点暗示Weyl点的存在。

还发现，若$\gamma=0$，在$k_{z}=0$上算得$C=1$，在$k_{z}=\frac{\pi}{a}$上算得$C=0$。所以在$k_{z}=\text{const.}$平面沿z扫时，必定扫过$\boldsymbol{\Omega}$奇点，即Weyl点。




