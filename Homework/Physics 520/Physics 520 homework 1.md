# Problem 1
## (1)

![[b6b008242f3cc06a5cb15010ad864727.jpg|centering|300]]

给定实空间晶格，可以证明$[T_{{R}},H]=0$。于是可以用$T_{R}$本征矢对角化hamiltonian。猜测本征矢为$e^{ikx}f(x)$，满足$f(x+R)=f(x)$。

我们发现，$e^{i(k+G)x}f(x)=e^{ikx}(e^{iGx}f(x))$。令$f^{'}(x)=e^{iGx}f(x)$的话，其实这个本征态也是$e^{ikx}f(x)$的形式。我们不妨将所有对于$k+G$的信息吸收进$f$，然后通过解Schrodinger方程获得$f$。

代入Schrodinger方程：
$$\left(  \frac{(p-\hbar k)^{2}}{2m}+V \right)f(x)=Ef(x)$$
把$f$解出来即可。实际上，固定$k$，$f$有很多解。每个能级是退化的。这些$f$的degeneracy实际上就是刚刚将$k+G$吸收进$k$的degeneracy。

标记为$f_{n}$。每个对应能量$E_{n}$。于是将Bloch态标记为$\ket{n,k}$。