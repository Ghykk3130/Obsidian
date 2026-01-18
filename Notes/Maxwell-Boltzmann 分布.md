将一个粒子当做一个canonical ensemble。则粒子有动量$\vec{p}$的概率（密度）为：

1） $C \exp \left(-\frac{p^2}{2 m k T}\right)=C \exp \left(-\frac{m v^2}{2 k T}\right)$ (此处没有用配分函数normalize，所以前面写个C)

## 一个细节

注意这里我们得到的是三维空间中的速度分布。上式的含义是取到速度$\vec{v}$的概率密度为：

$C \exp \left(-\frac{m v^2}{2 k T}\right)$ 

这其中没有任何的degeneracy。

但是我们想获得的分布是：取到速率$v$的概率密度是多少？
每个速率$v$对应的态实际上是degenerate的。在一个半径为$v$的球面上的任何一个矢量$\vec{v}$都应该被考虑在内。因此，取到速率$v$的概率密度应该比取到速度$\vec{v}$的概率密度要大。

>[!Remark]
>直觉上来讲，因为半径为$v$的球面上的任意一个矢$\vec{v}$都应该被算作是速率$v$对应的态，因此我们只需要将球的表面积那么多个$\vec{v}$的概率密度相加，即大概$v^2$那么多个$\vec{v}$的概率密度相加就可以得到$v$所对应的概率密度。所以1）前面乘上一个$v^2$就可以。

接下来继续推导。既然取到$\vec{v}$的概率密度是1），那么取到$v \sim v + dv$的概率就是对下面这个区域积分：

![[e52b70d387936a1f84d47fd589a0bf4.jpg|200]]

$\begin{aligned} & \iiint C \exp \left(-\frac{m v^2}{2 k T}\right) d v_x d v_y d v z \\ = & \iiint C \exp \left(-\frac{m v^2}{2 k T}\right) v^2 \sin \theta d v d \theta d \varphi \\ = & C \exp \left(-\frac{m v^2}{2 k T}\right) v^2 \iiint \sin \theta d v d \theta d \varphi \\ = & C \exp \left(-\frac{m v^2}{2 k T}\right) v^2 d v 4 \pi\end{aligned}$

里面那坨可以提出来是因为$dv$很小，那一坨可以认为没有变化。
我们可以将$C$在1）中就normalize了，得到$C = (\frac{m}{2\pi kT})^{3/2}$ 。于是得到：

>[! Note]
>速度取到$v \sim v + dv$之间的概率为 $4 \pi\left(\frac{m}{2 \pi k T}\right)^{3 / 2} v^2 \exp \left(-\frac{m v^2}{2 k T}\right) dv$

