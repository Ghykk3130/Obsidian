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
所以$\vec{u}\cdot \nabla$就是streamline定义的切向量。



