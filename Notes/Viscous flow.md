# 1. Stress tensor

定义$\boldsymbol{\tau}$为单位面积$dS  \hat{\mathbf{n}}$上一侧流体物质向另一侧流体物质施加的力。定义stress tensor $\mathbf{T}$ such that：
$$\boldsymbol{\tau}=\mathbf{T}\cdot  \hat{\mathbf{n}}$$
可以证明，stress tensor为对称张量。

>[!Success] Proposition 1.1
>$\mathbf{T}$ is symmetric.
## Proof.

考虑一个小立方体。考虑绕$z$轴的torque。
![[Drawing 2026-01-29 18.26.22.excalidraw|center|400]]
容易得到：
$$\tau_{z}= \left(-\frac{L}{2}T_{xy}- \frac{L}{2}T_{xy}+ \frac{L}{2}T_{yx}+\frac{L}{2}T_{yx}\right)L^{2}= L^{3}(T_{yx}-T_{xy})$$
而我们知道，惯量张量$\mathbf{I} \sim \rho L^{3} \cdot L^{2} \sim\mathcal{O}(L^5)$。回忆：
$$\boldsymbol{\tau}= \frac{d}{dt}(\mathbf{I}\cdot \boldsymbol{\omega})= \mathbf{I}\cdot   \dot{\boldsymbol{\omega}}  +\boldsymbol{\omega}\times(\mathbf{I}\cdot \boldsymbol{\omega})$$
分解在$z$方向有：
$$\tau_{z}=I_{zi}  \dot{\omega}_{i}  +\epsilon_{zij}\omega_{i}I_{jk}\omega_{k}$$
因为$\tau_{z}\sim \mathcal{O}(L^{3}),\ \mathbf{I}\sim\mathcal{O}(L^5)$，所以在$L\rightarrow 0$时，必有$\dot{\omega}\rightarrow  \infty$，或者$\omega^{2}\rightarrow \infty$。两种情况都不可能，除非$T_{yx}=T_{xy}$
>[!Right]
>$\blacksquare$

对于对称张量，我们总可以做如下分解：

>[!Success] Proposition 
>Let $T_{ij}$ be a type-$(0,2)$ symmetric tensor. We have the decomposition: $T_{ij}=\left( T_{ij}- \frac{1}{3}Tr(T)\delta_{ij} \right)+ \frac{1}{3}Tr(T)\delta_{ij}=$. Then $T^{\perp},T^{\parallel}$ are perpendicular.
## Proof.

WLOG，选择坐标系使得$T_{ij}$对角化。那么：
$$T^{\perp}_{ij}=T_{ii}\delta_{ij}- \frac{1}{3}Tr(T)\delta_{ij}=Tr(T)-Tr(T)=0$$
所以自然：
$$\langle T^{\perp}v,T^{\parallel}v\rangle=0,\ \forall v$$
>[!Right]
>$\blacksquare$



