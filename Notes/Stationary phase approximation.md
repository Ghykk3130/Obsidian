考虑我们在一定边界下解波动方程，最终的解为Fourier模的积分：
$$\psi(x,t)= \int_{\mathbb{R}^{2}} dkd\omega\tilde{\psi}(k,\omega)e^{i(kx-\omega t)}$$
我们想知道，在$t\rightarrow \infty$时，解的渐进行为。

>[!Quote] 一个naive的想法
>可能会想用Riemann-Lebesgue引理。我么想求：
>$$\lim_{ t \to \infty } \int_{\mathbb{R}^{2}}dkd\omega\tilde{\psi}(k,\omega)e^{i(kx-\omega t)}$$
>那么我们直接分部积分：
>$$\begin{align}
 \int dkd\omega\tilde{\psi}(k,\omega)e^{i(kx-\omega t)} & = \int d\omega e^{-i\omega t}\int dk\tilde{\psi}e^{ikx} \\
 & = \left[ - \frac{1}{it}e^{-i\omega t}\int dk\tilde{\psi}e^{ikx} \right]_{-\infty}^{\infty}- \int d\omega dk\left(  \frac{e^{-i\omega t}}{-it} \right)\left( \frac{\partial \tilde{\psi}}{\partial \omega} \right)e^{ikx}
\end{align}$$
>由于$t$在分母，显然取$t\rightarrow \infty$不就全为零了吗？
>但这样忽略了色散关系$\omega=\omega(k)$。即$\omega$和$k$并不独立。这是波动方程的结构所决定的。



