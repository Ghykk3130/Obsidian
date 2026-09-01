# 1. 微分几何基础

考虑一个性质足够好的流形$M$。给定流形上函数$f:M\rightarrow \mathbb{R}$。取一点$p\in M$，以及过$p$的曲线$\mathbf{x}:\mathbb{R}\rightarrow M,\ t\mapsto \mathbf{x}(t)$。不妨设曲线都在$t=0$时过$p$点。我们可以构造：
$$X_{p}:f\mapsto \left.\frac{d}{dt}\right|_{t=0}f(\mathbf{x}(t))$$
固定$p$，集合$T_{p}(M)=\{ X_{p} \}$满足矢量空间的性质。例如线性封闭：取$X_{p},\ Y_{p}$，构造$aX_{p}+Y_{p}$。那么是否存在一条曲线$\mathbf{z}$使得$\mathbf{z}$诱导出来的$Z_{p}=aX_{p}+Y_{p}$呢？令：
$$\mathbf{z}(t)=p+ t(a \left. \frac{d\mathbf{x}}{dt} \right|_{t=0}+ \left.  \frac{d\mathbf{y}}{dt} \right|_{t=0}) $$
那么：
$$\begin{align}
Z_{p}(f) & = \left. \frac{d}{dt}  \right|_{t=0}f(\mathbf{z}(t)) \\
 & = \frac{dz^{\mu}}{dt} \frac{\partial f}{\partial z^{\mu}} \\
 & = \left( a \frac{dx^{\mu}}{dt}+ \frac{dy^{\mu}}{dt} \right) \frac{\partial f}{\partial x^{\mu}} \\
 & = a \frac{df(\mathbf{x}(t))}{dt}+ \frac{df(\mathbf{y}(t))}{dt} \\
 & = aX_{p}(f)+Y_{p}(f)
\end{align}$$
这里$\frac{\partial f}{\partial z^{\mu}}$可以被写成$\frac{\partial f}{\partial x^{\mu}}$，因为反正是对于$f$的自变量在微分，只是一个dummy variable。另外，这里直接默认了在流形$M$上已经取好了chart，可以直接谈论坐标分量。

将这样定义出来的矢量称为切矢量。它们是流形上的泛函。

>[!Note] Definition 1.1
>Given a manifold $M$, take a point $p\in M$, and a curve $\mathbf{x}: \mathbb{R}\rightarrow M,\ t\mapsto \mathbf{x}(t)$, define the tangent vector:
>$$X_{p}:C^{\infty}(M)\rightarrow \mathbb{R},\ f\mapsto \left. \frac{d}{dt} \right|_{t=0}f(\mathbf{x}(t))$$
>Define the tangent space at $p$ as:
>$$T_{p}(M)=\{ X_{p}|\mathbf{x}(t)\text{ passes through }p \}$$
>Define the tangent bundle as:
>$$T(M)=\cup_{p\in M}T_{p}(M)$$

那么，$T_{p}$是否存在基矢量呢？给定任意曲线$\mathbf{x}(t)$，它诱导的矢量为：
$$\begin{align}
X_{p} & = \left. \frac{d}{dt} \right|_{t=0} \\
 & = \left.\frac{d x^{\mu}(t)}{dt}\right|_{t=0} \left.\frac{\partial}{\partial x^{\mu}}\right|_{p}
\end{align}$$
前面的$\frac{dx^{\mu}}{dt}$仅仅是一个线性组合系数。所以$\frac{\partial}{\partial x^{\mu}}$为基矢量。
## Ex:

在naive的欧氏空间中，任取矢量$\mathbf{v}=(v^{1},\dots,v^{n})\in \mathbb{R}^{n}$。基矢量为$\mathbf{e}_{k}=(0,\dots,1,\dots,0)$。任取一点$p\in \mathbb{R}^{n}$。我们构造同构：$\phi:\mathbb{R}^{n}\rightarrow T_{p}(\mathbb{R}^{n}),\ \mathbf{v}\mapsto v^{i} \frac{\partial}{\partial x^{i}}$。那么：
$$\phi(\mathbf{e}_{1})= \frac{\partial}{\partial x^{1}}$$

接下来，定义切空间基矢$\frac{\partial}{\partial x^{\mu}}$的对偶矢量为$dx^{\mu}$，满足$dx^{\mu}\left(  \frac{\partial}{\partial x^{\nu}} \right)=\delta^{\mu}{}_{\nu}$。此处$\delta^{\mu}_{\ \nu}$只是一个单纯的函数。我们认为无论上下标在哪个位置，Kronecker delta都是一样的。定义余切空间$T^{*}_{p}(M)$。定义余切丛$T^{*}(M)=\cup_{p\in M}T^{*}_{p}(M)$。

# 2. 指标升降

物理上将四维的实空间记为$V$。可以取$\{ \mathbf{e}_{\mu} \}$作为一组基。然后，我们可以构造$V^{*}$。通过$\langle \mathbf{e}^{\mu} ,\mathbf{e}_{\nu}\rangle=\delta^{\mu}{}_{\nu}$构造对偶空间的基。

>[!Warning]
>Kronecker delta的指标不可被升降。

对于$\mathbf{x}=x^{\mu}\mathbf{e}_{\mu}\in V$，$x^{\mu}=(t,x,y,z)$，称$x^{\mu}$为逆变分量。

>[!Quote]
>这里的潜台词实际上是，$\mathbf{x}=x^{\mu}\mathbf{e}_{\mu}$。而$\mathbf{e}_{\mu}\in V$是协变的基矢量。

定义Minkowski度规为一个双线性型$g:V\times V\rightarrow \mathbb{R}$。记$g=g_{\mu \nu}\mathbf{e}^{\mu}\mathbf{e}^{\nu}$。规定：
$$g_{\mu \nu}= \text{diag}(1,-1,-1,-1)$$
我们定义$g_{\mu \nu}$的逆：
$$\begin{align}
g^{\mu \nu}g_{\nu \lambda }=\delta^{\mu}{}_{\lambda}
\end{align}$$
注意到，$g$可以诱导一个单线性映射。任取$\mathbf{x}\in V$，可以构造$g(\mathbf{x},\cdot)\in V^{*}$。我们定义$\mathbf{x}^{\flat}=g(\mathbf{x},\cdot)$。将$\mathbf{x}^{\flat}$的分量记为协变分量。我们有：
$$\boxed{x_{\mu}=\mathbf{x}^{\flat}(\mathbf{e}_{\mu})=\langle x^{\nu}\mathbf{e}_{\nu},\mathbf{e}_{\mu}\rangle= g_{\mu \nu}x^{\nu}}$$
类似于对于矢量的指标升降，可以对张量的指标也升降。具体来说，给定逆变张量$T^{\mu \nu}$，定义$T_{\mu \nu}=g_{\mu \lambda}g_{\nu \gamma}T^{\lambda \gamma}$。我们同样可以对其中一个指标升降。这样造成4种映射，分别是$V\times V\rightarrow \mathbb{R},\ V\times V^{*}\rightarrow \mathbb{R},\ V^{*}\times V\rightarrow \mathbb{R},\ V^{*}\times V^{*}\rightarrow \mathbb{R}$。
## Ex:

可以证明，Minkowski度规可以对自己升降：
$$\begin{align}
 & g_{\mu \nu}  = g_{\mu \lambda}\delta^{\lambda}{}_{\nu}= g_{\mu \lambda}g^{\lambda \eta}g_{\eta \nu}= g_{\mu \lambda}g_{\eta \nu}g^{\lambda \eta} \\
 & g^{\mu \nu}= g^{\mu \lambda}\delta^{\nu}{}_{\lambda}= g^{\mu \lambda}g^{\nu \eta}g_{\eta \lambda} 
\end{align}$$

# 3. Lorentz变换

考虑一个映射$\Lambda$将$V$中每个点变换：$x^{'\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}$。我们首先证明：

>[!Success] Proposition 3.1
>$$dx^{'\mu}= \frac{\partial x^{'\mu}}{\partial x^{\nu}}dx^{\nu}$$
## Proof.

左右手都是$T^{*}_{p}(V)$中的元素。只需要证明对于$V$中矢量的作用是一样的即可。任取$\frac{\partial}{\partial x^{'\lambda}}\in T_{p}(V)$。那么左手边：
$$\begin{align}
dx^{'\mu}\left(  \frac{\partial}{\partial x^{'\lambda}} \right)=\delta^{\mu}{}_{\lambda}
\end{align}$$
右手边：
$$\begin{align}
  &  \frac{\partial x^{'\mu}}{\partial x^{\nu}}dx^{\nu}\left(  \frac{\partial}{\partial x^{'\lambda}} \right)  \\
 = &  dx^{\nu}\left(  \frac{\partial x^{'\mu}}{\partial x^{\nu}} \frac{\partial}{\partial x^{'\lambda}} \right) \\
 = &  dx^{\nu}\left(  \frac{\partial x^{'\mu}}{\partial x^{'\lambda}} \frac{\partial}{\partial x^{\nu}} \right) \\
 = &  dx^{\nu}\left(  \delta^{\mu \lambda} \frac{\partial}{\partial x^{\nu}} \right)=\delta^{\mu \lambda}=\delta^{\mu}{}_{\lambda}
\end{align}$$
其中第二行利用了$dx^{\nu}$泛函的线性性。而第三行中由于$\frac{\partial}{\partial x^{\nu}}$只是$V$上的泛函，本身就是naive的导数，其微分性质和普通导数没有区别。随意变换顺序也没问题。现在左右手两边对于基矢量作用都相同，所以都是一样的对偶矢。
>[!Right]
>$\blacksquare$

可以证明，变换的Jacobian矩阵的系数其实就是这个微分系数：
$$\begin{align}
dx^{'\mu} & = \frac{\partial x^{'\mu}}{\partial x^{\nu} }dx^{\nu} \\
 & = \Lambda^{\mu}{}_{\lambda} \frac{\partial x^{\lambda}}{\partial x^{\nu}}dx^{\nu} \\
 & = \Lambda^{\mu}{}_{\nu}dx^{\nu} \\
\implies \frac{\partial x^{'\mu}}{\partial x^{\nu}} & = \Lambda^{\mu}{}_{\nu}
\end{align}$$
## Ex:
$$\begin{align}
\Lambda_{\mu}{}^{\nu} & = g_{\mu \lambda}g^{\nu \gamma}\Lambda^{\lambda}{}_{\gamma} \\
 & = g_{\mu \lambda}g^{\nu \gamma} \frac{\partial x^{'\lambda}}{\partial x^{\gamma}} \\
 & = \frac{\partial(g_{\mu \lambda}x^{'\lambda})}{\partial(g^{\nu \gamma}x^{\gamma})} \\
 & = \frac{\partial(g_{\mu \lambda}x^{' \lambda})}{\partial(g_{\nu \gamma}x^{\gamma})} \\
 & = \frac{\partial x^{'}_{\mu}}{\partial x_{\nu}}
\end{align}$$

规定Lorentz变换保持Minkowski度规。具体来说：
$$\begin{align}
 & x^{'}_{\mu}x^{'\mu}=x_{\mu}x^{\mu} \\
\implies & g_{\mu \nu}x^{'\nu}x^{'\mu}=g_{\mu \nu}x^{\nu}x^{\mu} \\
\implies & g_{\mu \nu}\Lambda^{\nu}{}_{\eta}\Lambda^{\mu}{}_{\gamma}x^{\eta}x^{\gamma}=g_{\gamma \eta}x^{\eta}x^{\gamma} \\
\implies & g_{\mu \nu}\Lambda^{\nu}{}_{\eta}\Lambda^{\mu}{}_{\gamma}=g_{\gamma \eta} \\
\implies & g_{\nu \mu}\Lambda^{\nu}{}_{\eta}\Lambda^{\mu}{}_{\gamma}=g_{\eta \gamma}
\end{align}$$

>[!Note] Definition 2.1
>A Lorentz transformation is a 2-tensor $\Lambda$ such that:
>$$g_{\nu \mu}\Lambda^{\nu}{}_{\eta}\Lambda^{\mu}{}_{\gamma}=g_{\eta \gamma}$$

可以证明$(\Lambda ^{-1})^{\mu}{}_{\nu}=\Lambda_{\nu}{}^{\mu}$。我们有：
$$\begin{align}
\Lambda_{\nu}{}^{\mu}\Lambda^{\nu}{}_{\rho} & = g_{\nu \alpha}g^{\mu \beta}\Lambda^{\alpha}{}_{\beta}\Lambda^{\nu}{}_{\rho} \\
 & = g^{\mu \beta}g_{\beta \rho} \\
 & = \delta^{\mu}{}_{\rho}
\end{align}$$

>[!Success] Proposition 3.2
>$$(\Lambda ^{-1})^{\mu}{}_{\nu}=\Lambda_{\nu}{}^{\mu}$$

