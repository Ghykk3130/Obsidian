# Problem 1
## (1)

![[b6b008242f3cc06a5cb15010ad864727.jpg|centering|300]]

给定实空间晶格，可以证明$[T_{{R}},H]=0$。于是可以用$T_{R}$本征矢对角化hamiltonian。猜测本征矢为$e^{ikx}f(x)$，满足$f(x+R)=f(x)$。

我们发现，$e^{i(k+G)x}f(x)=e^{ikx}(e^{iGx}f(x))$。令$f^{'}(x)=e^{iGx}f(x)$的话，其实这个本征态也是$e^{ikx}f(x)$的形式。我们不妨将所有对于$k+G$的信息吸收进$f$，即强行规定$k\in\text{FBZ}$。然后通过解Schrodinger方程获得$f$。这样得到的是reduced zone scheme。

代入Schrodinger方程：
$$\left(  \frac{(p-\hbar k)^{2}}{2m}+V \right)f(x)=Ef(x)$$
把$f$解出来即可。实际上，固定$k$，$f$有很多解。每个能级是退化的。这些$f$的degeneracy实际上就是刚刚将$k+G$吸收进$k$的degeneracy。

标记为$f_{n}$。每个对应能量$E_{n}$。于是将Bloch态标记为$\ket{n,k}$。

我们同样也可以不规定$k\in \text{FBZ}$，那么将$e^{ikx}f$代入Schrodinger方程，同样，$f$也可能有几个解，但是没有reduced zone scheme的多。$f$的degeneracy来自两方面：一方面来自于$k+G$引起的degeneracy，另一方面来自于微分方程解的intrinsic degeneracy。在reduced zone schceme中，两个degeneracy都被算进$n$中。在extended zone scheme中，只有第二种degeneracy被算进$n$中，所以看起来能带要少一点。但实际上，把能带全部都折叠到FBZ，是一样多的。