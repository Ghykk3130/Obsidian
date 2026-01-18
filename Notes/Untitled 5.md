# 1. 流体的描述

考虑流体中的任意微元。假设微元初始位置为$\vec{\alpha}$，则理论上可以解得$t$时刻位置$\vec{x}(\vec{\alpha},t)$。我们称$(\mathbb{R}^{3},x_{t})$为一个流体。

我们可以定义每个微元的速度：

>[!Note] Definition 1.1
>Given a volume element starting from $\vec{\alpha}$, define its velocity as: $\vec{u}(\vec{\alpha},t)= \frac{\partial}{\partial t}\vec{x}(\vec{\alpha},t)$

上述定义称为Lagrangian速度场，explicit依赖于初始条件。给定$\vec{x}(\vec{\alpha},t)$，我们可以反解出$\vec{\alpha}(\vec{x},t)$。所以速度同样可以写成$\vec{u}=\vec{u}(\vec{x},t)$，称为Eulerian速度场。我们可以追溯某体元的流动，定义物质导数：

>[!Note] Definition 1.2
>Given $\vec{x}(\vec{\alpha},t)$ a trajectory, $f=f(\vec{x},t)$ a function, define its material derivative as: $\frac{D}{Dt}f(\vec{x},t)= \frac{\partial f}{\partial t}+\vec{u}\cdot \nabla f$

固定$t$，$\vec{u}(\vec{x},t)$是$\mathbb{R}^{3}$上一个vector field。我们可以定义streamline：

>[!Note] Definition 1.3
>We say $\vec{\gamma}:\mathbb{R}\rightarrow \mathbb{R}^{3}$ is a streamline if $\frac{d\vec{\gamma}(s)}{d\tau}=\vec{u}(\vec{\gamma}(\tau),t)$

也就是说，沿着streamline定义的切矢刚好是速度。我们作：
$$\begin{align}
 &  \frac{d\vec{\gamma}}{d\tau}=\vec{u}\implies \frac{d\vec{\gamma}}{ud\tau}= \hat{u}\implies \frac{d\vec{\gamma}}{d\left( \int d\tau u \right)}=\hat{u}
\end{align}$$
而：
$$\begin{align}
\int ud\tau=\int\sqrt{ \sum_{i}\left( \frac{\partial \gamma_{i}}{\partial \tau} \right)^{2} }d\tau=s
\end{align}$$
就是弧长。所以我们可以重新选取$s$作为参数parametrize $\vec{\gamma}$。这称为自然坐标。
## Ex:
若$\vec{\gamma}(s)$为streamline，而$s$为沿streamline的弧长，容易证明$\frac{d\vec{\gamma}}{ds}$为单位向量：
$$\begin{align}
ds & = \sqrt{ \sum_{i}\left( \frac{d\gamma_{i}}{ds} \right)^{2} } ds\implies \left| \frac{d\vec{\gamma}}{ds}  \right|= \sqrt{ \sum_{i}\left( \frac{d\gamma_{i}}{ds} \right)^{2} }=1
\end{align}$$

## Ex:
注意到：
$$\vec{u}\cdot \nabla f= \frac{d \gamma_{i}}{d \tau} \frac{\partial f}{\partial x_{i}}= \frac{\partial f}{\partial \tau}$$
所以$\vec{u}\cdot \nabla$就是streamline定义的切向量。$\vec{u}\cdot \nabla\in T(\mathbb{R}^{3})$。

# 2. Incompressibility

任取流体中一个可测集$M$染色。让这个集合流动。若这个集合体积不变，则称流体不可压缩：

>[!Note] Definition 2.1
>We say a fluid is incompressible if:
>$$\int_{\vec{x}(M,t)}dV=\int_{M}dV,\ \forall t\in \mathbb{R},M\subset \mathbb{R}^{3}\text{ measurable}$$

为此，我们先证明引理：

>[!Note] Lemma 2.1
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

>[!Note] Proposition 2.1
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
# 3. Ideal fluids

理想流体为满足如下条件的流体：
- 不可压缩
- $\rho=\text{const.}$ on the entire space
- 流体内部相互作用由面元受力$p(\vec{x},t) \hat{n}dS$描述，没有剪切力。
## Ex:
可以构造满足条件1却不满足条件2的流体。考虑$\mathbb{R}^{3}$中的不可压缩流体被分为两个部分。区域$1$内流体密度为常数。区域$2$内流体密度为另一常数。尽管在流动中两区域体积各自维持不变，但是密度在全空间中并不是常量。

>[!Note] Proposition 3.1
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


>[!Note] Proposition 3.2 (Euler's EOM)
>
## Proof.

对于体元$dV$用牛二：
$$\begin{align}
 & -\nabla pdV- \nabla \chi \rho dV=\rho dV \frac{D\vec{u}}{Dt} \\
\implies & \rho\left( u\cdot \nabla \vec{u}+ \frac{\partial \vec{u}}{\partial t} \right)=-\nabla (p+\rho \chi) \\
\implies &  \frac{\partial \vec{u}}{\partial t}+u\cdot \nabla \vec{u}=-\nabla\left(  \frac{p}{\rho}+\chi \right)
\end{align}$$




