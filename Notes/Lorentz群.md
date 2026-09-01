定义四矢量为$\mathbf{x}=(t,x,y,z)=(x^{0},x^{1},x^{2},x^{3})$。将其component定义为逆变。定义Minkowski度规为：
$$g_{\mu \nu}= \text{diag}(1,-1,-1,-1)$$
我们定义$g_{\mu \nu}$的逆：
$$\begin{align}
g^{\mu \nu}g_{\nu \lambda }=\delta^{\mu}_{\ \lambda}
\end{align}$$
接下来，我们可以作一个变换$x^{\mu}\mapsto x_{\mu}:x_{\mu}=g_{\mu \nu}x^{\nu}$。可以证明，这个映射是1 to 1的。考虑：
$$\begin{align}
 & x_{\mu}=g_{\mu \nu}x^{\nu}=g_{\mu \nu}y^{\nu} \\
\implies & g^{\lambda \mu}g_{\mu \nu}x^{\nu}=g^{\lambda \mu}g_{\mu \nu}y^{\nu} \\
\implies & x^{\lambda}=y^{\lambda}
\end{align}$$
那么，$x^{\mu},\ x_{\mu}$可以表示同一个矢量。将$x_{\mu }$称为协变。

类似于对于矢量的指标升降，可以对张量的指标也升降。具体来说，给定逆变张量$T^{\mu \nu}$，定义$T_{\mu \nu}=g_{\mu \lambda}g_{\nu \gamma}T^{\lambda \gamma}$。我们同样可以对其中一个指标升降。这样造成4种映射。可以证明这四种映射全是双射。那么它们就是对于同一个张量的不同表示。

## Ex:

可以证明，Minkowski度规可以对自己升降：
$$\begin{align}
 & g_{\mu \nu}  = g_{\mu \lambda}\delta^{\lambda}_{\ \nu}= g_{\mu \lambda}g^{\lambda \eta}g_{\eta \nu}= g_{\mu \lambda}g_{\eta \nu}g^{\lambda \eta} \\
 & g^{\mu \nu}= g^{\mu \lambda}\delta^{\nu}_{\ \lambda}= g^{\mu \lambda}g^{\nu \eta}g_{\eta \lambda} 
\end{align}$$
## Ex:

Kronecker delta的指标也可以被升降。我们有：
$$\begin{align}
\delta^{\mu}_{\ \nu}= g^{\mu \lambda}g_{\lambda \nu}=g^{\mu \lambda}g_{\nu \eta }\delta_{\lambda}^{\ \eta}
\end{align}$$

