# 1. Incompressibility

任取流体中一个可测集$M$染色。让这个集合流动。若这个集合体积不变，则称流体不可压缩：

>[!Note] Definition 1.1
>We say a fluid is incompressible if:
>$$\int_{\vec{x}(M,t)}dV=\int_{M}dV,\ \forall t\in \mathbb{R},M\subset \mathbb{R}^{3}\text{ measurable}$$

为此，我们先证明引理：

>[!Note] Lemma 1.1
>Let $J=| \frac{\partial \vec{x}(\vec{\alpha},t)}{\partial \vec{\alpha}} |$ be the Jacobian. Then $\frac{\partial J}{\partial t}=J\nabla \cdot \vec{u}$
## Remark

注意，$J$是$\vec{\alpha},t$的函数。上式右手边$\frac{\partial J}{\partial t}$代表fix $\vec{\alpha}$对$t$求导，然后再某个时间$t$ evaluate。上式右边则是追踪从同一个$\vec{\alpha}$出发的粒子，计算完$J\nabla \cdot \vec{u}$后也在$t$处evaluate。
## Proof.
采用Einstein约定。
$$\begin{align}
\frac{\partial J}{\partial t} & = \frac{\partial}{\partial t}\left(\epsilon_{\mu_{1},\dots,\mu_{N}} \frac{\partial x_{\mu_{1}}}{\partial \alpha_{1}}\dots \frac{\partial x_{\mu_{N}}}{\partial \alpha_{N}} \right)\\
 & = \epsilon_{\mu_{1},\dots,\mu_{N} } \frac{\partial u_{\mu_{1}}}{\partial \alpha_{1}}\dots \frac{\partial x_{\mu_{N}}}{\partial \alpha_{N} }+\dots+ \epsilon_{\mu_{1},\dots,\mu_{N} } \frac{\partial x_{\mu_{1}}}{\partial \alpha_{1}}\dots \frac{\partial u_{\mu_{N}}}{\partial \alpha_{N}} \\
 & = C_{1\mu_{1}} \frac{\partial u_{\mu_{1}}}{\partial \alpha_{1}}+\dots+ C_{N\mu_{N}} \frac{\partial u_{\mu_{N}}}{\partial \alpha_{N}}
\end{align}$$
其中$C_{ij}$为$\frac{\partial \vec{x}}{\partial \vec{\alpha}}$的cofactor matrix。要证明$\epsilon_{\mu_{1},\dots,\mu_{N}} \frac{\partial x_{\mu_{2}}}{\partial \alpha_{2}}\dots \frac{\partial x_{\mu_{N}}}{\partial \alpha_{N}}=C_{1\mu_{1}}$也很简单。只需要把determinant沿第一行用cofactor展开，再和直接的$\epsilon_{\mu_{1},\dots,\mu_{N}} \frac{\partial x_{\mu_{1}}}{\partial \alpha_{1}}\dots \frac{\partial x_{\mu_{N}}}{\partial \alpha_{N}}$展开作对比即可。接下来回忆起：
$$\left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}= \frac{1}{J}C^t$$
所以：
$$C_{1\mu_{1}}=C^t_{\mu_{1},1}=J\left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{1},1}$$
故：
$$\begin{align}
\frac{\partial J}{\partial t} & = J\left[ \left(  \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{1},1} \frac{\partial u_{\mu_{1}}}{\partial \alpha_{1}} +\dots+ \left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{N},N} \frac{\partial u_{\mu_{N}}}{\partial \alpha_{N}} \right] \\
 & = J\left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{j},j} \frac{\partial u_{\mu_{j}}}{\partial \alpha_{j}} \\
 & = J\left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{j},j} \frac{\partial x_{\mu_{k}}}{\partial \alpha_{j}} \frac{\partial u_{\mu_{j}}}{\partial x_{\mu_{k}}} \\
 & = J\left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)^{-1}_{\mu_{j},j} \left( \frac{\partial \vec{x}}{\partial \vec{\alpha}} \right)_{j,\mu_{k}} \frac{\partial u_{\mu_{j}}}{\partial x_{\mu_{k}}} \\
 & = J\delta_{\mu_{k},\mu_{j}} \frac{\partial u_{\mu_{j}}}{\partial x_{\mu_{k}}} \\
 & = J \frac{\partial u_{\mu_{j}}}{\partial x_{\mu_{j}}} \\
 & = J\nabla \cdot \vec{u}
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 1.1
>A fluid is incompressible if and only if $\nabla \cdot \vec{u}=0$
## Proof.

若流体是不可压缩的，则：
$$\begin{align}
 & \frac{d}{dt}  \int_{\vec{x}(M,t)}dV=0 \\
\implies & \frac{d}{dt}\int_{M} JdV=0 \\
\implies &  \int_{M} \frac{\partial J}{\partial t}dV=0 \\
\implies & \int_{M}J\nabla \cdot \vec{u}dV=0,\ \forall M\text{ measurable} \\
\implies & \nabla \cdot \vec{u}=0
\end{align}$$
若$\nabla \cdot \vec{u}$，则只需将上述过程反过来即可。
>[!Right]
>$\blacksquare$
# 2. Ideal fluids

理想流体为满足如下条件的流体：
- 不可压缩
- $\rho=\text{const.}$ on the entire space
- 流体内封闭体积受到流体其他部分作用由面元受力$p(\vec{x},t) \hat{n}dS$描述，没有剪切力。其中$\hat{n}$指向体积内部。

第三点可能担心面元受有限力，从而获得无限加速度。但是面元两侧体积各自受指向两侧的大小为$pdS$的力。由牛三，面元受力为这两个力的反作用力，合力为零。
## Ex:
可以构造满足条件1却不满足条件2的流体。考虑$\mathbb{R}^{3}$中的不可压缩流体被分为两个部分。区域$1$内流体密度为常数。区域$2$内流体密度为另一常数。尽管在流动中两区域体积各自维持不变，但是密度在全空间中并不是常量。

>[!Note] Proposition 2.1
>The force exerted on a volume element $dV$ of an ideal fluid is $-\nabla p dV$
>
## Proof.
体积$V$受力为：
$$\begin{align}
-\int_{\partial V} p\hat{n}dS & = -\int pn_{i}e_{i}dS=-\int e_{i}\partial_{i}pdV=-\int \nabla p dV
\end{align}$$
若体积$V$为小量，则受力为$-\nabla p dV$。
>[!Right]
>$\blacksquare$

令$\vec{g}$为引力场。不考虑相对论效应，有$\nabla \times \vec{g}=0$。令$\vec{g}=-\nabla \chi$。


>[!Note] Proposition 2.2 (Euler's EOM)
>For an ideal fluid, we have that:
>$$\frac{\partial \vec{u}}{\partial t}+ (\nabla \times \vec{u})\times \vec{u}= -\nabla\left( \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right)$$
## Proof.

对于体元$dV$用牛二：
$$\begin{align}
 & -\nabla pdV- \nabla \chi \rho dV=\rho dV \frac{D\vec{u}}{Dt} \\
\implies & \rho\left( \vec{u}\cdot \nabla \vec{u}+ \frac{\partial \vec{u}}{\partial t} \right)=-\nabla (p+\rho \chi) \\
\implies &  \frac{\partial \vec{u}}{\partial t}+\vec{u}\cdot \nabla \vec{u}=-\nabla\left(  \frac{p}{\rho}+\chi \right)
\end{align}$$
注意到：
$$\begin{align}
(\nabla \times \vec{u})\times \vec{u}+ \frac{1}{2}\nabla u^{2} & = \epsilon_{ijk}e_{i}\epsilon_{jlm}(\partial_{l}u_{m})u_{k}+ \frac{1}{2} e_{i} \partial_{i}(u_{k}^{2}) \\
 & = -\epsilon_{jik}\epsilon_{jlm}(\partial_{l}u_{m})u_{k}e_{i}+ e_{i}u_{k}\partial_{i}u_{k} \\
 & = -(\delta_{il}\delta_{km}-\delta_{im}\delta_{kl})(\partial_{l}u_{m})u_{k}e_{i}+ e_{i }u_{k} \partial_{i}u_{k} \\
 & = -(\partial_{i}u_{k})u_{k}e_{i}+ (\partial_{k}u_{i})u_{k}e_{i}+e_{i}u_{k}\partial_{i}u_{k} \\
 & = u_{k}\partial_{k}u_{i}e_{i} \\
 & = \vec{u}\cdot \nabla \vec{u}
\end{align}$$
所以：
$$\begin{align}
\frac{\partial \vec{u}}{\partial t}+ (\nabla \times \vec{u})\times \vec{u}= -\nabla\left( \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right)
\end{align}$$
>[!Right]
>$\blacksquare$

注意到上式长得像正则方程。记$H= \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi$。
## Ex:

对于steady flow，我们有：
$$\begin{align}
 & (\nabla \times \vec{u})\times \vec{u}=-\nabla\left( \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right) \\
\implies & 0= -\vec{u}\cdot \nabla H \\
\implies &  \frac{\partial \vec{\gamma}}{\partial \tau}\cdot \nabla H=0 \\
\implies &  \frac{\partial}{\partial \tau}H(\vec{\gamma}(\tau),t)=0
\end{align}$$
其中$\vec{\gamma}(\tau)$为streamline。则fix $t$，一条流线上的Hamiltonian为常量。
## Ex:

对于steady, irrotational flow，即$\frac{\partial \vec{u}}{\partial t}=0, \nabla \times \vec{u}=0$，我们有：
$$\nabla H=0$$
故$H$为常量。





