# 1. Hamiltonian

考虑一个TI层叠在一起的heterostructure。每两层TI之间由一个正常的insulator层隔开。

显然层数$i$可以作为一个量子数。Fix $i$之后，每层电子是2D的，故$\vec{k}_{\perp}=(k_{x},k_{y})$也是一个量子数。还有电子的自旋$\sigma$也是一个量子数。

当电子在层内时，以晶格动量$\hbar \vec{k}_{\perp}$运动。晶体场平均下来是$\parallel \hat{z}$的。在电子系中耦合出一个$\sim \vec{k}_{\perp}\times \hat{z}$的磁场。于是与自旋耦合产生：
$$-(\vec{k}_{\perp}\times \hat{z})\cdot \vec{\sigma}=-(\hat{z}\cdot \vec{\sigma})\times \vec{k}_{\perp}$$
将系数作为$v_{F}$，得到Hamiltonain $v_{F}(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}$。在另一个表面，由于晶体场方向相反，得到Hamiltonian为$-v_{F}(\hat{z}\times \vec{\sigma})\cdot \vec{k}_{\perp}$。

