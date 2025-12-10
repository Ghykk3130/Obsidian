# Laplace's method

考虑一个存在极值的函数$f(x)$。我们假设极值点在$x_{0}$。如果这个函数有这样一些性质：
- 函数只在极值点比较小的领域内显著
- $f^{''}(x_{0})<0$
- $f\in C^{2}$

则我们可以近似如下积分：
$$\int dx\exp(\lambda f(x)),\lambda\gg 1$$
## Handwave

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
在只有$\lambda$取极限时，$(x-x_{0})^{2},(x-x_{0})^{3}$都是$\mathcal{O}(1)$的。因而$(\sqrt{ \lambda }(x_{0}-x))^{2},(\sqrt{ \lambda }(x-x_{0}))^{3}$都是同阶的。而三次项外面还有一个$\lambda^{-1/2}$，在取$\lambda\gg 1$时直接消失。而这对于任意三阶以上的项也是一样。所以只有二阶项显著。所以：
$$\begin{align}
\int dx\exp(\lambda f(x)) & \approx e^{\lambda f(x_{0})}\int_{\mathbb{R}}dx\exp\left( \frac{1}{2}\lambda f^{''}(x_{0})(x-x_{0})^{2} \right) \\
 & = e^{\lambda f(x_{0})} \sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }
\end{align}$$

>[!Theorem 1]
>Let $f\in C^{2}([a,b])$, such that:
>- $f(x_{0})$ is a global maximum for some unique $x_{0}\in[a,b]$
>- $f^{''}(x_{0})<0$
>
>Then:
>$$\lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{  \frac{2\pi}{-\lambda f^{''}(x_{0})} }}=1$$
## Proof.
我们从handwave可以看出，泰勒展开可以控制$\int dx \exp(\lambda f(x))$的大小。我们的思路是通过泰勒展开控制它的大小，并除以$e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }$之后取极限看能不能得到什么。

我们取一个领域$|x-x_{0}|<\delta$。我们知道再这个领域内有：
$$\exists c\in B(x_{0},\delta)\text{ s.t. }f(x)= f(x_{0})+ \frac{1}{2}f^{''}(c)(x-x_{0})^{2},\forall x\in B(x_{0},\delta)$$
只要控制了这一项的大小，我们就控制了$\exp(\lambda f(x))$的大小，从而控制了$\int dx\exp(\lambda f(x))$的大小。

我们注意到$f^{''}$的连续性。如果我们取$\delta$足够小，以至于：
$$\forall x\in B(x_{0},\delta), |f^{''}(x)-f^{''}(x_{0})|<\epsilon ,\text{ for some }\epsilon$$
那么显然：
$$f^{''}(x)>f^{''}(x_{0})-\epsilon,\forall x \in B(x_{0},\delta)$$
所以：
$$f(x)> f(x_{0})+ \frac{1}{2}(f^{''}(x_{0})-\epsilon)(x-x_{0})^{2}$$
所以我们可以控制：
$$\begin{align}
\int_{a}^{b}dx\exp(\lambda f(x)) & >\int_{B(x_{0},\delta)}dx\exp(\lambda f(x)) \\
 & > \int_{B(x_{0},\delta)}dxe^{\lambda f(x_{0})}\exp\left(  \frac{\lambda}{2}(f^{''}(x_{0})-\epsilon)(x-x_{0})^{2} \right)
\end{align}$$
注意到：
$$\begin{align}
\int_{B(x_{0},\delta)}dx \exp\left(  \frac{\lambda}{2}(f^{''}(x_{0})-\epsilon)(x-x_{0})^{2} \right) & \approx \sqrt{ \frac{2}{\lambda} } \sqrt{ \frac{\pi}{-f^{''}(x_{0})+\epsilon} }, \text{ when }\lambda\gg 1
\end{align}$$
因此：
$$\begin{align}
\frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{\lambda} } } & > \frac{1}{\sqrt{  \frac{2\pi}{\lambda} }}\int_{B(x_{0},\delta)}dxe^{\lambda f(x_{0})}\exp\left(  \frac{\lambda}{2}(f^{''}(x_{0})-\epsilon)(x-x_{0})^{2} \right) \\
\implies \lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{\lambda} } } & \geq \sqrt{  \frac{1}{-f^{''}(x_{0})+\epsilon} } \\
\implies \lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }} & \geq \sqrt{ \frac{-f^{''}(x_{0})}{-f^{''}(x_{0})+\epsilon} },\forall\epsilon>0
\end{align}$$
所以显然：
$$\lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }}\geq1$$
于是找到了一个lower bound。同样地，我们也可以找upper bound。我们先取$\epsilon<|f(x_{0})|$。我们取$B(x_{0},\delta)$以至于：
$$x\in B(x_{0},\delta)\implies |f(x)-f(x_{0})|<\epsilon<|f(x_{0})|$$
所以这次Taylor展开带来的控制为：
$$f(x)<f(x_{0})+ \frac{1}{2}(f(x_{0})+\epsilon)(x-x_{0})^{2}$$

因为$x_{0}$是最大值，则：
$$\exists \eta>0\text{ s.t. }x \notin B(x_{0},\delta)\implies f(x)<f(x_{0})-\eta$$
于是这允许我们控制tail：
$$\begin{align}
\int_{a}^bdx\exp(\lambda f(x)) & =\int_{a}^{x_{0}-\delta}dx\exp(\lambda f(x))+\int_{B(x_{0},\delta)}dx\exp(\lambda f(x))+\int_{x_{0}+\delta}^bdx\exp(\lambda f(x)) \\
 & < (x_{0}-\delta-a) \exp(\lambda f(x_{0})-\lambda\eta)+(b-x_{0}-\delta)\exp(\lambda f(x_{0})-\lambda\eta)+\int_{B(x_{0},\delta)}dx\exp(\lambda f(x)) \\
 & <(b-a)\exp(\lambda(f(x_{0})-\eta))+ \int_{B_{x_{0},\delta}}dx\exp(\lambda f(x) ) \\
 & <(b-a)\exp(\lambda(f(x_{0})-\eta ))+\int_{B(x_{0},\delta)}dxe^{\lambda f(x_{0})}\exp\left(  \frac{\lambda}{2}(f^{''}(x_{0})+\epsilon)(x-x_{0})^{2} \right)
\end{align}$$
那么和找lower bound时一样，我们有：
$$\begin{align}
\lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }} & \leq\lim_{ \lambda \to \infty }  \frac{(b-a)\exp(-\lambda\eta))}{\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }}+ \sqrt{ \frac{-f^{''}(x_{0})}{-f^{''}(x_{0})+\epsilon} } \\
 & =\sqrt{ \frac{-f^{''}(x_{0})}{-f^{''}(x_{0})+\epsilon} },\forall\epsilon>0
\end{align}$$
于是显然：
$$\lim_{ \lambda \to \infty } \frac{\int_{a}^bdx\exp(\lambda f(x))}{e^{\lambda f(x_{0})}\sqrt{ \frac{2\pi}{-\lambda f^{''}(x_{0})} }}\leq 1$$
>[!Right]
>$\blacksquare$

