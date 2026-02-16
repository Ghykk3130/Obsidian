考虑我们在一定边界条件下解波动方程。对解作Fourier变换得到：
$$\psi(x,t)=\int_{\mathbb{R}^{2}}dkd\omega \tilde{\psi}(k,\omega)e^{i(kx-\omega t)}$$
假设波动方程得到一个色散关系：
$$f(k,\omega)\tilde{\psi}(k,\omega)=0$$
其中$f(k,\omega)=0$引出色散关系$\omega=\omega(k)$。

>[!Quote] Idea 1
>假设$\tilde{\psi}$是有界函数，那么必定得到在不符合色散关系的区域，$\tilde{\psi}=0$。那么积分$\int_{\mathbb{R}^{2}}dkd\omega \tilde{\psi}e^{i(kx-\omega t)}=0$，得到trivial解。
>
>想要得到non-trivial的解，我们必须放弃$\tilde{\psi}$的有界性。显然$\tilde{\psi}=A\delta(\omega-\omega(k))$。其中$A=A(k,\omega)$为任意有界函数。但是由于Dirac delta的约束，我们不妨直接写$A=A(k)$。那么非平凡解为：
>$$\psi(x,t)=\int_{\mathbb{R}^{}}dkA(k)e^{i(kx-\omega(k)t)}$$

我们想知道，在$t\rightarrow \infty$时，解的渐近行为。我们写：
$$\begin{align}
\psi(x,t) & = \int dkA(k)\exp\left( it\left( k \frac{x}{t}- \omega \right) \right) \\
 & = \int dkA(k)e^{it\phi(k,t)}\text{, where }\phi(k,t)=k \frac{x}{t}-\omega
\end{align}$$
那么由Laplace's method，我们得到：
$$\psi(x,t)\approx A(k_{0})e^{it \phi(k_{0},t)}\sqrt{ \frac{2\pi}{it\phi^{''}(k_{0},t)} }\text{ as }t\rightarrow \infty$$
其中$k_{0}$为$\phi$的极值点。那么此处，我们有：
$$\left.\frac{\partial}{\partial k}\left( k \frac{x}{t}-\omega(k) \right)\right|_{k=k_{0}}=0\implies \frac{x}{t}=\omega^{'}(k_{0})$$
可以将$k_{0}$写为$x,t$的函数。那么：
$$\psi(x,t)\approx A(k_{0})e^{i(k_{0}x-\omega(k_{0})t)}\sqrt{ \frac{2\pi}{-it\omega^{''}(k_{0})} }$$
所以任意一点$x,t$上的波动，都是一个平面波$e^{i(k_{0}x-\omega(k_{0})t)}$乘上某依赖于$x,t$的系数。
