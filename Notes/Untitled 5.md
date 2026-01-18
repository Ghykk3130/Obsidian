# 1. 流体的描述

考虑流体中的任意微元。假设微元初始位置为$\vec{\alpha}$，则理论上可以解得$t$时刻位置$\vec{x}(\vec{\alpha},t)$。我们称$(\mathbb{R}^{3},x_{t})$为一个流体。

我们可以定义每个微元的速度：

>[!Note] Definition 1.1
>Given a volume element starting from $\vec{\alpha}$, define its velocity as: $\vec{u}(\vec{\alpha},t)= \frac{\partial}{\partial t}\vec{x}(\vec{\alpha},t)$

给定$\vec{x}(\vec{\alpha},t)$，我们可以反解出$\vec{\alpha}(\vec{x},t)$。所以速度同样可以写成$\vec{u}=\vec{u}(\vec{x},t)$。我们可以追溯某体元的流动，定义物质导数：

>[!Note] Definition 1.2
>Given $\vec{x}(\vec{\alpha},t)$ a trajectory, $f=f(\vec{x},t)$ a function, define its material derivative as: $\frac{D}{Dt}f(\vec{x},t)= \frac{\partial f}{\partial t}+\vec{u}\cdot \nabla f$

固定$t$，$\vec{u}(\vec{x},t)$是$\mathbb{R}^{3}$上一个vector field。我们可以定义streamline：

>[!Note] Definition 1.3
>We say $\vec{\gamma}:\mathbb{R}\rightarrow \mathbb{R}^{3}$ is a streamline if $\frac{d\vec{\gamma}(s)}{ds}=\vec{u}(\vec{\gamma}(s),t)$

也就是说，沿着streamline定义的切矢刚好是速度。