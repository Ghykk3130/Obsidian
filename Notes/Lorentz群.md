# 1. 微分几何基础

考虑一个性质足够好的流形$M$。给定流形上函数$f:M\rightarrow \mathbb{R}$。取一点$p\in M$，以及过$p$的曲线$\mathbf{x}:\mathbb{R}\rightarrow M,\ t\mapsto \mathbf{x}(t)$。不妨设曲线都在$t=0$时过$p$点。我们可以构造：
$$X_{p}:f\mapsto \left.\frac{d}{dt}\right|_{t=0}f(\mathbf{x}(t))$$
固定$p$，集合$\{ X_{p} \}$满足矢量空间的性质。例如线性性：取$X_{p},\ Y_{p}$，构造$aX_{p}+Y_{p}$。那么是否存在一条曲线$\mathbf{z}$使得$\mathbf{z}$诱导出来的$Z_{p}=aX_{p}+Y_{p}$呢？令：
$$\mathbf{z}(t)=p+ t(a \left. \frac{d\mathbf{x}}{dt} \right|_{t=0}+ \left.  \frac{d\mathbf{y}}{dt} \right|_{t=0}) $$
那么：
$$\begin{align}
Z_{p}(f) & = \left. \frac{d}{dt}  \right|_{t=0}f(\mathbf{z}(t)) \\
 & = \frac{dz^{\mu}}{dt} \frac{\partial f}{\partial z^{\mu}} \\
 & = \left( a \frac{dx^{\mu}}{dt}+ \frac{dy^{\mu}}{dt} \right) \frac{\partial f}{\partial x^{\mu}} \\
 & = a \frac{df(\mathbf{x}(t))}{dt}+ \frac{df(\mathbf{y}(t))}{dt} \\
 & = aX_{p}(f)+Y_{p}(f)
\end{align}$$

# 1. 指标升降

物理上将四维的实空间记为$V$。可以取$\{ \mathbf{e}_{\mu} \}$作为一组基。然后，我们可以构造$V^{*}$。通过$\langle \mathbf{e}^{\mu} ,\mathbf{e}_{\nu}\rangle=\delta^{\mu}{}_{\nu}$构造对偶空间的基。此处$\delta^{\mu}_{\ \nu}$只是一个单纯的函数。我们认为无论上下标在哪个位置，Kronecker delta都是一样的。

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

# 2. Lorentz变换

定义Lorentz变换为保持Minkowski的变换。具体来说：

>[!Note] Definition 2.1
>A Lorentz transformation is a (1,1)-type tensor $\Lambda$ such that:
>$$\Lambda_{\mu}{}^{\nu}\Lambda_{\lambda}{}^{\gamma}g_{\nu \gamma}=g_{\mu \lambda}$$

令Lorentz变换为$\Lambda$。在进行变换时，保持矢量实体的不变性，而基矢量变化$\mathbf{e}_{\mu}\rightarrow \mathbf{e}_{\mu}^{'}$。那么：
$$\begin{align}
 & \mathbf{x}= x^{\mu}\mathbf{e}_{\mu}=x^{'\mu}\mathbf{e}_{\mu}^{'} \\
\implies & x^{\mu}\mathbf{e}^{'}_{\nu}\mathbf{e}^{'\nu}(\mathbf{e}_{\mu})=x^{'\mu}\mathbf{e}^{'}_{\nu}\mathbf{e}^{'\nu}(\mathbf{e}^{'}_{\mu} )=x^{'\mu}\mathbf{e}^{'}_{\nu}\delta^{\nu}{}_{\mu}=x^{'\mu}\mathbf{e}^{'}_{\mu}\\
\end{align}$$
可以定义$\mathbf{e}^{'\nu}(\mathbf{e}_{\mu})=\Lambda^{\nu}{_{\mu}}$。那么$x^{'\mu}=\Lambda^{\mu}{_{\nu}}x^{\nu}$。


