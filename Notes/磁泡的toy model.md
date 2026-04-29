考虑一个存在anisotropy和交换的系统。那么：
$$\begin{align}
E & = E_{\text{ex}}+ E_{\text{ani}}+E_{\text{dip}}+E_{\text{Ze}}
\end{align}$$
第一项为交换能，第二项为各向异性能，第三项为偶极能，第四项为Zeeman能。注意，我们后面写的其实都是这些能量在xy面内的面密度。

磁泡假设为一个z方向均匀磁化的圆柱体，背景是一个$-z$方向均匀磁化的无限大平面。磁泡与背景通过Bloch畴壁连接。磁泡和背景都是以$M$饱和磁化。

![[Pasted image 20260429145929.png|center|400]]
首先容易写出：
$$E_{\text{ani}}= Km_{z}^{2}=K$$
因为磁泡内外磁化都是均匀，唯一的交换发生在畴壁。令磁泡半径为$r$，样本厚度为$t$，所以：
$$E_{\text{ex}}=2\pi rt \sigma_{w}$$
假设没有磁泡，完全是铁磁背景。我们有方程$\nabla \cdot \mathbf{H}=-\nabla \cdot \mathbf{M}$。唯一$\nabla \cdot \mathbf{M}\neq 0$的地方就是上下表面。在上表面取厚度很小的盒子积分，得到：
$$H_{\text{out}}(\text{up})-H_{\text{in}}(\text{up})=M$$
同理，在下表面：
$$-H_{\text{out}}(\text{dn})+H_{\text{in}}(\text{dn})=M$$
不妨令$H_{\text{out}}=0,\ H_{\text{in}}=-M$，满足边界条件。所以退磁能为$\frac{\mu_{0}}{2}tM^{2}$。此时，翻转一部分自旋形成磁泡，可以证明多出来的能量增量为$-\mu_{0}M^{2}I(d)2\pi rt^{2}$, 其中$I(d)=- \frac{2}{3\pi} \left[  \frac{d^{2}+(1-d^{2}E(u^{2}))}{u}- \frac{K(u^{2})}{u} \right]$，$d= \frac{2r}{t},\ u^{2}= \frac{d^{2}}{1+d^{2}}$，$K,E$是椭圆积分。








我已经知道：
$$E= \sigma_{w}2\pi rt+2m\mu_{0}MH\pi r^{2}t-\mu_{0}M^{2}I(d)2\pi rt^{2}$$
所以取$\frac{dE}{dr}$得到：
$$\frac{d}{dr}( I(d)r)= \frac{\sigma_{2}2\pi}{\mu_{0}M^{2}2\pi t}+ \frac{4\mu_{0}MH\pi}{\mu_{0}M^{2}2\pi t}r$$
