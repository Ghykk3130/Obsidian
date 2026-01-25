# 1. Bravais lattice的基本定义

考虑一个$\mathbb{R}^d$中的晶体。可以定义Bravais晶体为：

>[!Note] Definition 1.1
>Define the Bravais lattice as $\Lambda=\left\{  \sum_{j}n_{j}\vec{a}_{j}|n_{j}\in \mathbb{Z}  \right\}$, where $\{ \vec{a}_{j} \}$ forms a linearly independent basis of $\mathbb{R}^d$.

给定一个原子位置构成的点集，选择这些原子位置构成点集不一定形成一个Bravais lattice。
## Ex: Honey comb/graphene
![[Drawing 2026-01-25 16.48.54.excalidraw|center|300]]
若取honey comb lattice的每个原子构成点集，可以证明这不是一个Bravais lattice。FTSOC，假设构成一个Bravais lattice。注意到Bravais lattice具有封闭性。但是$\vec{R}_{A}-\vec{R}_{B}$显然不指向任何原子，不在晶体中。





可以定义primitive cell为这样一个区域：

>[!Note] Definition 1.2
>Define $\Omega \subset \mathbb{R}^d$ as a primitive cell if:
>- $(\Omega+\vec{R}_{1}) \cap(\Omega+\vec{R}_{2})=0,\ \forall \vec{R}_{1},\vec{R}_{2}\in \Lambda,\ \vec{R}_{1}\neq \vec{R}_{2}$.
>- $\bigcup_{\vec{R}\in \Lambda}(\Omega+\vec{R})=\mathbb{R}^d$

我们选好一个Bravais lattice
# 2. 

>[!Note] Definition 2.1
>Given metric spaces $(X,d_{X}),(Y,d_{Y})$, an isometry $f:X\rightarrow Y$ is a function such that $d_{Y}(f(a),f(b))=d_{X}(a,b),\forall a,b\in X$
>

我们有如下定理：

>[!Success] Proposition 2.1
>Let $E:\mathbb{R}^d\rightarrow \mathbb{R}^d$ be an isometry. Then $E=W+t$ for some $W\in O(d),\ t\text{ a translation}$.
>
## Proof.

令$E^{'}(x)=E(x)-E(0)$。容易证明$E^{'}$是线性的：
