
考虑一个存在极值的函数$f(x)$。我们假设极值点在$x_{0}$。如果这个函数有这样一些性质：
- 函数只在极值点比较小的领域内显著
- $f^{''}(x_{0})<0$
- $f\in C^{2}$

则我们可以近似如下积分：
$$\int dx\exp(\lambda f(x)),\lambda\gg 1$$
考虑$f(x)$以$x_{0}$为中心的展开。我们有：
$$\begin{align}
f(x)  & \approx f(x_{0})+f^{'}(x_{0})(x-x_{0})+ \frac{1}{2}f^{''}(x_{0})(x-x_{0})^{2}+ \frac{1}{3!}f^{'''}(x_{0})(x-x_{0})^{3} \\
 & = f(x_{0})+ \frac{1}{2}f^{''}(x_{0})(x-x_{0})^{2}+ \frac{1}{3!}f^{'''}(x_{0})(x-x_{0})^{3}
\end{align}$$
于是我们有：
$$\begin{align}
\int dx\exp(\lambda f(x))  &  \approx \exp(\lambda f(x_{0}))\int dx\exp\left(  \frac{1}{2}\lambda f^{''}(x_{0})(x-x_{0})^{2}+ \frac{1}{6}\lambda f^{'''}(x_{0})(x-x_{0})^{3} \right)
\end{align}$$
我们来看指数里面的项：
$$\begin{align}
\frac{1}{2}\lambda f^{''}(x_{0})(x-x_{0})^{2}+ \frac{1}{6}\lambda f^{'''}(x_{0})(x-x_{0})^{3} & = \frac{1}{2}f^{''}(x_{0})(\sqrt{ \lambda }(x-x_{0}))^{2}+ \frac{1}{6}f^{'''}(x_{0})\lambda^{-1/2}(\sqrt{ \lambda }(x-x_{0}))^{3}
\end{align}$$
在只有$\lambda$取极限时，$(x-x_{0})^{2},(x-x_{0})^{3}$都是$\mathcal{O}(1)$的。于是
