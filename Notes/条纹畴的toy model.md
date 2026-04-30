我们先研究方波的Fourier变换。考虑方波$f(x)=\text{sgn}\left(  \cos\left( \frac{2\pi}{\lambda}x \right) \right),\ x\in[0,L]$。那么显然k空间离散：$k= \frac{2\pi n}{\lambda}$。我们有：
$$\begin{align}
 & f(x)= \sum_{k} f_{k} e^{ikx} \\
\implies  f_{k} & = \frac{1}{\lambda}\int_{- \lambda/4 }^{3\lambda /4}dx f(x)e^{-ikx} \\
 & = \frac{1}{\lambda} \left[\int_{-\lambda /4}^{\lambda /4} dx e^{-ikx}- \int_{\lambda /4}^{3\lambda /4}dx e^{-ikx}\right] \\
 & = \frac{1}{\lambda} \left( \frac{1}{-ik} \right)\left[  e^{-ik \frac{\lambda}{4}}- e^{ ik \frac{\lambda}{4}}- e^{ -ik \frac{3\lambda}{4}}+ e^{-ik \frac{\lambda}{4}} \right] \\
 & = \frac{1}{\lambda}\left( - \frac{1}{ik} \right)2i \sin\left(  \frac{k\lambda}{4} \right)\left( 1- e^{-ik \frac{\lambda}{2}} \right) \\
 & = - \frac{2}{\lambda k}e^{-ik \frac{\lambda}{2}}\sin\left( \frac{k\lambda}{4} \right)\left( 1- e^{-ik \frac{\lambda}{2}} \right)
\end{align}$$

注意到仅当$n$为奇时，$f_{k}$才非零。所以：
$$f_{k}=  \frac{2}{\pi n}\sin\left( \frac{n\pi}{2} \right),\ k= \frac{2\pi n}{\lambda},\ n\text{ odd}$$
故：
$$\begin{align}
f(x) & = \sum_{n\text{ odd}} \frac{2}{\pi n}\sin\left( \frac{n\pi}{2} \right)e^{i \frac{2\pi n}{\lambda}x}
\end{align}$$

现考虑样本厚度为$t$，条纹畴法线为x轴。

![[Pasted image 20260428163037.png|center|300]]

条纹畴$\mathbf{M}= \hat{\mathbf{z}} M\text{sgn}\left( \cos\left(  \frac{2\pi}{2w}x \right) \right)$。那么显然：
$$\begin{align}
M_{z} & = \frac{M}{\pi}\sum_{n\text{ odd}} \frac{2}{n}\sin\left(  \frac{n\pi}{2} \right)\exp\left( i \frac{n\pi}{w}x \right)  \\
 & = \frac{M}{\pi}\sum_{n\text{ odd},\ n>0} \frac{2}{n} \sin\left(  \frac{n\pi}{2} \right)2 \cos\left(  \frac{\pi n}{w}x \right) \\
 & = \frac{4M}{\pi}\sum_{m=0}^{\infty} \frac{(-1)^{m}}{(2m+1)}\cos\left(  \frac{(2m+1)\pi}{w}x \right)
\end{align}$$
由于$\nabla \cdot \mathbf{B}=0\implies \nabla \cdot \mathbf{H}=-\nabla \cdot \mathbf{M}$，假设$\nabla \times \mathbf{H}=0$，我们令$\mathbf{H}=-\nabla \phi$，磁荷为$\nabla \cdot \mathbf{M}$。得到Poisson方程$\nabla^{2}\phi=\nabla \cdot \mathbf{M}$。现在取一支Fourier分量$\frac{4M}{\pi} \frac{(-1)^{m}}{2m+1}\cos\left(  \frac{(2m+1)\pi}{w}x \right)$，我们计算该分量的磁荷。由于对称性，我们有$\phi=\phi(x,z)$。在样品上表面去一个厚度很小的盒子。在盒子上积分Poisson方程得到边界条件：
$$\begin{align} 
 &  [\hat{\mathbf{n}}\cdot \nabla \phi]^{\text{out}}_{in} = \mathbf{M}\cdot(-\hat{\mathbf{n}}) \\
\implies & [\partial_{z}\phi]^{\text{out}}_{\text{in} }= -M_{z}
\end{align}$$
在其它位置，可以计算$\nabla \cdot \mathbf{M}=0$。于是有Laplace方程$\nabla^{2}\phi=0$。接下来解Laplace方程。由于$\phi$对于x的dependence应该和源一致。所以不妨猜测：
$$\phi=f(z)\cos(k_{m}x),\ k_{m}= \frac{(2m+1)\pi}{w}$$
代入Laplace方程，结合$f(z=\pm \infty)=0$的边界条件，得到样本外部的解：
$$\begin{align}
 &  \frac{\partial^{2}f}{\partial z^{2}}-k_{m}^{2}f=0 \\
\implies & f(z)=e^{-k_{m}|z|}
\end{align}$$
由空间反演后得到相同的磁化，相同的磁场，所以磁场必定是$z$的偶函数。那么$\phi$必定是$z$的奇函数。那么在样品内部必定得到：
$$f(z)=\sinh(k_{m}z)$$
所以在上表面，样品内外的磁势分别为：
$$\phi=A_{m} e^{-k_{m}z}\cos(k_{m}x)\text{ outside, }\phi= B_{m}\sinh(k_{m}z)\cos(k_{m}x)\text{ inside}$$
磁势由于$M$的有界性从而是连续的。容易由此得到：
$$B_{m}=2A_{m} \frac{1}{e^{k_{m}t}-1}$$
接下来匹配样本上表面的边界条件：
$$\begin{align}
 & \left.\partial_{z}\phi\right|_{z= \frac{t}{2}^{+}}- \left.\partial_{z}\phi\right|_{z= \frac{t}{2}^{-}}=-M_{z} \\
\implies & -k_{m} A_{m}e^{- k_{m}t /2} - k_{m}2A_{m} \frac{1}{e^{k_{m}t}-1}\cosh(k_{m}t /2)= - \frac{4M}{\pi} \frac{(-1)^{m}}{2m+1} \\
\implies & A_{m}= \frac{4M}{\pi k_{m}} \frac{(-1)^{m}}{2m+1}\sinh\left(  \frac{k_{m}t}{2} \right)
\end{align}$$
接下来计算样品上半部分退磁能$E= - \frac{\mu_{0}}{2} \int_{z\geq 0} d^{3}r\mathbf{H}\cdot \mathbf{M}$。首先，显然有：
$$\begin{align}
\int_{z\geq 0}d^{3}r \mathbf{H}\cdot \mathbf{M} &  = -\int d^{3}r \nabla \cdot(\mathbf{M}\phi)+\int d^{3}r \phi \nabla \cdot \mathbf{M} \\
 & = \int d^{3}r \phi \nabla \cdot \mathbf{M}
\end{align}$$
这是因为，第一项转化为面积分，$\phi$在$\partial\{ z\geq 0 \}$上都是零。由于$\nabla \cdot \mathbf{M}$唯一非零的地方是表面，我们不妨将作：
$$\begin{align}
\int d^{3}r \phi \nabla \cdot \mathbf{M} & = \int_{\mathbb{R}^{2}} dxdy \phi\left( x,z= \frac{t}{2} \right)\int_{0}^{\infty} dz \nabla \cdot \mathbf{M} \\
 & = \int dx dy \phi [M_{z}]_{0}^{\infty} \\
 & = -A_{m}e^{- k_{m}t /2}\int dxdy\cos(k_{m}x) \frac{4M}{\pi}  \frac{(-1)^{m}}{2m+1}\cos(k_{m}x)  \\
 & = - \left( \frac{4M}{\pi(2m+1)} \right)^{2} \frac{e^{-k_{m}t /2}}{k_{m}}\sinh\left( \frac{k_{m}t}{2} \right) L_{y}\int dx \cos ^{2}(k_{m}x) \\
 & = \frac{-16M^{2}}{\pi^{2}(2m+1)^{2}}  \frac{e^{-k_{m}t /2}}{2k_{m}} \sinh\left( \frac{k_{m}t}{2}  \right) S \\
 & = \frac{-4M^{2}}{\pi^{2}(2m+1)^{2}k_{m}}(1-e^{-k_{m}t})S
\end{align}$$
其中，$S$为样品xy面面积。那么上半部分退磁能为$\frac{2M^{2}\mu_{0}}{\pi^{2}(2m+1)^{2}k_{m}}(1-e^{-k_{m}t})S$。上下半平面显然退磁能一样。所以总退磁能为：
$$E= \frac{4M^{2}\mu_{0}}{\pi^{2}(2m+1)^{2}k_{m}}(1-e^{-k_{m}t})S$$
将各个Fourier分量求和：
$$E_{\text{dip}}= \sum_{m=0}^{\infty} \frac{4M^{2}\mu_{0}}{\pi^{2}(2m+1)^{2}k_{m}}(1-e^{-k_{m}t})S$$
若$t\rightarrow 0$，由于$\sum_{m=0}^{\infty} \frac{1}{(2m+1)^{2}}= \frac{\pi^{2}}{8}$，我们有：
$$E_{\text{dip}}\approx \frac{4M^{2}\mu_{0}}{\pi^{2}}\sum_{m} \frac{1}{(2m+1)^{2}k_{m}}k_{m}tS= \frac{1}{2}\mu_{0}M^{2}V$$
这称为薄膜极限。若$t\rightarrow \infty$，我们有：
$$E_{\text{dip}}\approx \frac{4M^{2}\mu_{0}S}{\pi^{3}}\sum_{m} \frac{1}{(2m+1)^{3}}\approx \frac{4M^{2}\mu_{0}}{\pi^{3}}S$$
>[!Success]
>The energy of the strip state:
>$$E_{\text{dip}}= \sum_{m=0}^{\infty} \frac{4M^{2}\mu_{0}}{\pi^{2}(2m+1)^{2}k_{m}}(1-e^{-k_{m}t})S$$
>$$E_{\text{dip}}\approx \frac{1}{2}\mu_{0}M^{2}V\text{ for thin film, }E_{\text{dip}}\approx \frac{4M^{2}\mu_{0}}{\pi^{3}}S\text{ for thick sample}$$

我们没有考虑畴壁。如果加上畴壁能$\sigma_{w}tL_{y}\cdot \frac{L_{x}}{2}$，令畴壁厚度为$\delta$，可以在$\delta \sim t$标度下得到Kittel率，即：$\delta \propto \sqrt{ t }$。

