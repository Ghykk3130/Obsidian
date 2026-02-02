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

>[!Success] Proposition 1.2
>Let $T_{ij}$ be a type-$(0,2)$ symmetric tensor. We have the decomposition: $T_{ij}=\left( T_{ij}- \frac{1}{3}Tr(T)\delta_{ij} \right)+ \frac{1}{3}Tr(T)\delta_{ij}=$. Then $T^{\perp},T^{\parallel}$ are perpendicular.
## Proof.

WLOG，选择坐标系使得$T_{ij}$对角化。那么：
$$T^{\perp}_{ij}=T_{ii}\delta_{ij}- \frac{1}{3}Tr(T)\delta_{ij}=Tr(T)-Tr(T)=0$$
所以自然：
$$\langle T^{\perp}v,T^{\parallel}v\rangle=0,\ \forall v$$
>[!Right]
>$\blacksquare$

我们知道，$p$一定是应力张量的一部分。由于$p$描述挤压作用，我们一定可以分解：
$$T_{ij}=-p\delta_{ij}+T^{'}_{ij}$$

>[!Note] Definition 1.1
>Define:
>- Hydrostatic pressure(tensor): $-p\delta_{ij}$
>- Viscous stress tensor: $T^{'}_{ij}=T_{ij}+p\delta_{ij}$

考虑速度梯度的分解：
$$\frac{\partial u_{i}}{\partial r_{j}}= \frac{1}{2}\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}} \right)+ \frac{1}{2}\left( \frac{\partial u_{i}}{\partial r_{j}}- \frac{\partial u_{j}}{\partial r_{i}} \right)=E_{ij}+\Omega_{ij}$$
其中$E_{ij}$对称，称为strain rate tensor。$\Omega_{ij}$无迹反对称，称为vortivity tensor。

>[!Note] Definition 1.2
>Define:
>- Strain rate tensor: $E_{ij}= \frac{1}{2}\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}} \right)$
>- Vorticity tensor: $\Omega_{ij}= \frac{1}{2}\left( \frac{\partial u_{i}}{\partial r_{j}}- \frac{\partial u_{j}}{\partial r_{i}} \right)$

假设为欧氏空间，注意到：
$$\begin{align}
(*\Omega)_{i} & = \frac{1}{2}\epsilon_{ijk}\Omega^{jk} \\
 & = \frac{1}{2}\epsilon_{ijk}\Omega_{jk} \\
 & = \frac{1}{2}\epsilon_{ijk}(\partial_{j}v_{k}-E_{jk}) \\
 & = \frac{1}{2}\epsilon_{ijk}\partial_{j}v_{k} \\ & = \frac{1}{2}\omega_{i}

\end{align}$$
其中$\epsilon_{ijk}E_{jk}=0$是因为$E_{jk}$是对称张量。这就是为什么$\Omega_{ij}$被称为vorticity tensor。

我们假设流体为Newtonian的，即$T^{'}_{ij}$对$\partial_{i}u_{j}$线性响应。注意到$\sigma_{ij}=T_{ij}+p\delta_{ij}$为对称张量。又因为$\Omega_{ij}$反对称。所以$T^{'}_{ij}$只取决于$E_{ij}$。

>[!Note] Definition 1.3
>We say a fluid is Newtonian if there exists a tensor $C_{ijkl}$ independent of spacetime such that:
>$$T^{'}_{ij}=C_{ijkl} E_{kl}$$

假设$T^{'}_{ij}$ isotropic，则：
$$T^{'}_{ij}=a\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}} \right)+b\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}}$$
于是重设系数，可写成：
$$\begin{align}
T_{ij} & =-p\delta_{ij}+a\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}} \right)+b\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}} \\
 & =-p\delta_{ij}+\mu\left( \frac{\partial u_{i}}{\partial r_{j}}+\frac{\partial u_{j}}{\partial r_{i}} - \frac{2}{3}\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}} \right)+ \zeta \delta_{ij} \frac{\partial u_{k}}{\partial r_{k}}
\end{align}$$
其中，$\frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}}- \frac{2}{3}\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}}$无迹。
## Ex:

考虑不可压缩流体。则$\frac{\partial u_{k}}{\partial r_{k}}=0$。那么$T_{ij}=-p\delta_{ij}+\mu\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}} \right)$
# 2. Navier-Stokes方程

对于粘滞流体列出牛二：
$$\begin{align}
 & \int_{V(t)} d^{3}r \rho \frac{D{u}_{i}}{Dt}=\int_{\partial V}dS \hat{n}_{j}T_{ij} \\
\implies & \int d^{3}r\rho\left( \frac{\partial u_{i}}{\partial t}+ u_{j} \frac{\partial}{\partial r_{j}}u_{i} \right)=\int d^{3}r \partial_{j}T_{ij} \\
\implies & \rho\left( \frac{\partial u_{i}}{\partial t}+ u_{j} \frac{\partial u_{i}}{\partial r_{j}} \right)= \frac{\partial}{\partial r_{j}}\left( -p\delta_{ij}+\eta\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}}- \frac{2}{3}\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}} \right)+ \zeta \delta_{ij} \frac{\partial u_{k}}{\partial r_{k}} \right) \\
\implies & \rho\left( \frac{\partial u_{i}}{\partial t}+ u_{j} \frac{\partial u_{i}}{\partial r_{j}} \right)=- \frac{\partial p}{\partial r_{i}}+ \frac{\partial}{\partial r_{j}} \left[\eta\left( \frac{\partial u_{i}}{\partial r_{j}}+ \frac{\partial u_{j}}{\partial r_{i}}- \frac{2}{3}\delta_{ij} \frac{\partial u_{k}}{\partial r_{k}} \right)\right]+ \frac{\partial}{\partial r_{i}}\left( \zeta  \frac{\partial u_{k}}{\partial r_{k}} \right)
\end{align}$$
假设$\eta,\zeta$都是常数，则：
$$\begin{align}
\rho\left( \frac{\partial u_{i}}{\partial t}+u_{j} \frac{\partial u_{i}}{\partial r_{j}} \right) & = - \frac{\partial p}{\partial r_{i}}+\eta \frac{\partial^{2}u_{i}}{\partial r_{j}^{2}}+ \eta \frac{\partial^{2}u_{j}}{\partial r_{i}r_{j}}+ \left( \zeta- \frac{2}{3}\eta \right) \frac{\partial^{2} u_{k}}{\partial r_{i}\partial r_{k}} \\
 & = - \frac{\partial p}{\partial r_{i}}+ \eta \frac{\partial^{2}u_{i}}{\partial r_{j}^{2}}+\left( \zeta+ \frac{1}{3}\eta \right) \frac{\partial^{2}u_{k}}{\partial r_{i}\partial r_{k}}
\end{align}$$
即：
$$\rho\left( \frac{\partial \mathbf{u}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{u} \right)=- \nabla p+ \eta \nabla^{2}\mathbf{u}+\left( \zeta+ \frac{1}{3}\eta \right)\nabla \nabla \cdot \mathbf{u}$$
假设不可压缩流体，则$\nabla \cdot \mathbf{u}=0$。获得：
$$\frac{\partial \mathbf{u}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{u}=- \frac{1}{\rho}\nabla p+ \frac{\eta}{\rho}\nabla^{2}\mathbf{u}$$
>[!Note] Definition 2.1
>Call $\eta$ dynamic viscosity. Define the kinetic viscosity $\nu= \frac{\eta}{\rho}$.

>[!Success] Proposition 2.1 (Navier-Stokes equation)
The velocity field of an incompressible, Newtonian, isotropic fluid satisfies:
$$\frac{\partial \mathbf{u}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{u}=- \frac{1}{\rho}\nabla p+ \nu\nabla^{2}\mathbf{u}$$
# 3. Reynold's number

考虑stationary NS方程以及边界条件：
$$\begin{align}
\mathbf{u}\cdot \nabla \mathbf{u}= - \frac{1}{\rho}\nabla p+\nu \nabla^{2}\mathbf{u},\ \mathbf{u}|_{\partial \Sigma}=0
\end{align}$$
我们可以作rescaling。令$\mathbf{u}= \frac{\mathbf{u}^{'}}{U},\ \mathbf{r}= \frac{\mathbf{r}^{'}}{L},\ p= \frac{p^{'}}{P}$。代入方程得到：
$$\begin{align}
 & \frac{U^{2}}{L} \mathbf{u}^{'}\cdot \nabla^{'}\mathbf{u}^{'}=- \frac{1}{\rho LP}\nabla^{'}p^{'}+ \frac{\nu U}{L^{2}}\nabla^{'2}\mathbf{u}^{'} \\
\implies & \mathbf{u}^{'}\cdot \nabla^{'}\mathbf{u}^{'}= - \frac{1}{\rho PU^{2}}\nabla^{'}p^{'}+ \frac{\nu}{UL}\nabla^{'2}\mathbf{u}^{'}
\end{align}$$
$U,L,P$为自由变量，没有约束。令$\rho PU^{2}=1$产生一个约束。令$R=\frac{\nu}{UL}$。相应地，boundary发生变化$\Sigma=  \frac{1}{L} \Sigma^{'}$。现在方程reduce成为：
$$\mathbf{u}^{'}\cdot \nabla^{'} \mathbf{u}^{'}=- \nabla^{'} p^{'}+R\nabla^{'2}\mathbf{u}^{'},\ \mathbf{u}^{'}|_{\partial \Sigma^{'}}=0 $$
现在$U,L$是自由的。注意到，若两个体系可以通过选取$U,L$使得rescaling后的boundary condition一样，那么两个系统的$\mathbf{u}^{'}$就一样。称为law of similarity。

>[!Note] Definition 2.2
>Let $U$ be the typical speed of a fluid. Let $L$ be the extension of the fluid. Then define Reynolds number $R= \frac{UL}{\nu}$

