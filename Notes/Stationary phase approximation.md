考虑我们在一定边界条件下解波动方程。对解作Fourier变换得到：
$$\psi(x,t)=\int_{\mathbb{R}^{2}}dkd\omega \tilde{\psi}(k,\omega)e^{i(kx-\omega t)}$$
假设波动方程得到一个色散关系：
$$f(k,\omega)\tilde{\psi}(k,\omega)=0$$
其中$f(k,\omega)=0$引出色散关系$\omega=\omega(k)$。

>[!Quote] Idea 1
>假设$\tilde{\psi}$是有界函数，那么必定得到在不符合色散关系的区域，$\tilde{\psi}=0$。那么积分$\int_{\mathbb{R}^{2}}dkd\omega \tilde{\psi}e^{i(kx-\omega t)}=0$，得到trivial解。
>
>想要得到non-trivial的解，我们必须放弃$\tilde{\psi}$的有界性。显然$\tilde{\psi}=C\delta(\omega-\omega(k))$。其中$C=C(k,\omega)$为任意有界函数。但是由于Dirac delta的约束，我们不妨直接写$C=C(k)$。那么非平凡解为：
>$$\psi(x,t)=\int_{\mathbb{R}^{}}dkC(k)e^{i(kx-\omega(k)t)}$$

我们想知道，在$t\rightarrow \infty$时，解的渐近行为。

