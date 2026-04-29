考虑一个存在anisotropy和交换的系统。那么：
$$\begin{align}
E & = E_{\text{ex}}+ E_{\text{ani}}+E_{\text{dip}}+E_{\text{Ze}}
\end{align}$$
第一项为交换能，第二项为各向异性能，第三项为偶极能，第四项为Zeeman能。注意，我们后面写的其实都是这些能量在xy面内的面密度。

磁泡假设为一个z方向均匀磁化的圆柱体，背景是一个$-z$方向均匀磁化的无限大平面。磁泡与背景通过Bloch畴壁连接。磁泡和背景都是以$M$饱和磁化。

![[Pasted image 20260429145929.png|center|400]]
假设没有磁泡，完全是铁磁背景。此时翻转一部分自旋形成磁泡，不考虑畴壁，可以证明多出来的能量增量为$-\mu_{0}M^{2}I(d)2\pi rt^{2}$, 其中$I(d)=- \frac{2}{3\pi} \left[  \frac{d^{2}+(1-d^{2}E(u^{2}))}{u}- \frac{K(u^{2})}{u} \right]$，$d= \frac{2r}{t},\ u^{2}= \frac{d^{2}}{1+d^{2}}$，$K,E$是椭圆积分。

如果考虑畴壁，假设畴壁厚度$w\gg t$。由于是Bloch壁，所以没有体磁荷。又由于畴壁很宽，面磁荷在局部上分布近似均匀。我们借助无限大均匀磁化样本的结果，得到能量为$\frac{1}{2}\mu_{0}M_{z}^{2}t$。

>[!Quote] 无限大均匀磁化样本
>对于这种样本呢，我们有方程$\nabla \cdot \mathbf{H}=-\nabla \cdot \mathbf{M}$。唯一$\nabla \cdot \mathbf{M}\neq 0$的地方就是上下表面。在上表面取厚度很小的盒子积分，得到：
$$H_{\text{out}}(\text{up})-H_{\text{in}}(\text{up})=M_{z}$$
同理，在下表面：
$$-H_{\text{out}}(\text{dn})+H_{\text{in}}(\text{dn})=M_{z}$$
不妨令$H_{\text{out}}=0,\ H_{\text{in}}=-M_{z}$，满足边界条件。所以退磁能为$\frac{\mu_{0}}{2}tM_{z}^{2}$。此时，

注意到各向异性能为$-Km_{z}^{2}t$。所以不妨定义有效各项异性常数$K_{\text{eff}}=K- \frac{\mu_{0}}{2}M^{2}$。在磁泡内外，由于翻转形成磁泡并不会影响各项异性能，也不会改变$\frac{\mu_{0}}{2}tM_{z}^{2}$，不妨讲这个背景能量设为0。所以唯一的能量改变就在畴壁中。令磁泡半径为$r$，样本厚度为$t$，所以畴壁中的有效能量为$2\pi rt \sigma_{w}$。

翻转形成磁泡造成的Zeeman能增量为：








我已经知道：
$$E= \sigma_{w}2\pi rt+2m\mu_{0}MH\pi r^{2}t-\mu_{0}M^{2}I(d)2\pi rt^{2}$$
所以取$\frac{dE}{dr}$得到：
$$\frac{d}{dr}( I(d)r)= \frac{\sigma_{2}2\pi}{\mu_{0}M^{2}2\pi t}+ \frac{4\mu_{0}MH\pi}{\mu_{0}M^{2}2\pi t}r$$
