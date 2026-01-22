# 1. Hamiltonian

考虑一个TI层叠在一起的heterostructure。每两层TI之间由一个正常的insulator层隔开。

显然层数$i$可以作为一个量子数。Fix $i$之后，每层分为上下两个表面，作为一个量子数。这个上下表面的量子数自己构成一个二维Hilbert空间，被称为pseudo-spin。令$\vec{\tau}$为pseudo-spin的自旋算符。

每个表面的电子是2D的，故$\vec{k}_{\perp}=(k_{x},k_{y})$也是一个量子数。还有电子的自旋$\sigma$也是一个量子数。

当电子在层内时，以晶格动量$\hbar \vec{k}_{\perp}$运动。晶体场平均下来是$\parallel \hat{z}$的。在电子系中耦合出一个$\sim \vec{k}_{\perp}\times \hat{z}$的磁场。于是与自旋耦合产生：
$$-(\vec{k}_{\perp}\times \hat{z})\cdot \vec{\sigma}=-(\hat{z}\cdot \vec{\sigma})\times \vec{k}_{\perp}$$
将系数作为$v_{F}$，得到Hamiltonain $v_{F}(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}$。在另一个表面，由于晶体场方向相反，得到Hamiltonian为$-v_{F}(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}$。回忆起$c^{\dagger}c$是粒子数算符。结合两种情况写出Hamiltonian就是：
$$\tau^zv_{F}(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}c_{\vec{k}_{\perp}}^{\dagger}c_{\vec{k}_{\perp}}$$

若加上磁场，层内电子自旋还会和磁场耦合。得到Hamiltonian为$m\sigma^zc^{^{\dagger}}_{\vec{k}_{\perp}}c_{\vec{k}_{\perp}}$。

考虑同一层上下表面电子的tunneling。注意到：
$$\tau^x=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}$$
$\tau^x$能将上表面态，在不改变其他量子数的情况下flip到下表面。所以表示tuneling的Hamiltonian为$\Delta_{S}\tau^xc^{\dagger}_{\vec{k}_{\perp}}c_{\vec{k}_{\perp}}$。

考虑不同层之间的tuneling。只存在两种：1）从某层上表面tuneling到更上一层的下表面。2）从某层下表面tuneling到更下一层的上表面。

前者Hamiltonian为$\frac{1}{2}\Delta_{D}\tau^{-}c^{\dagger}_{\vec{k}_{\perp},i+1}c_{\vec{k}_{\perp},i}$。这里的$\tau^{-}$表示，若原来为上表面态，则经过tuneling后会被flip到下表面态。而若原本就是下表面态，则经过$\tau^{-}$作用为零，不可能tunel到更上一层的下表面。后者Hamiltonian为$\frac{1}{2}\Delta_{D}\tau^{+}c^{\dagger}_{\vec{k}_{\perp},i-1}c_{\vec{k}_{\perp},i}$。道理相同。

我们propose系统Hamiltonian：
$$H=\sum_{\vec{k}_{\perp},i,j}\left[ v_{F}\tau^z(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}\delta_{ij}+m\sigma^z\delta_{ij}+\Delta_{S}\tau^x\delta_{ij}+ \frac{1}{2}\Delta_{D}\tau^{+}\delta_{j,i+1}+ \frac{1}{2}\Delta_{D}\tau^{-}\delta_{j,i-1} \right]c^{^{\dagger}}_{\vec{k}_{\perp},i}c_{\vec{k}_{\perp},j}$$

