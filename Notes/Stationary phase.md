
>[!Success] Theorem 1 (generalized Riemann-Lebesgue lemma)
>Let $\phi^{'}(x)\neq 0$ in $[a,b]$. Then:
>$$\lim_{ \lambda \to \infty } \int_{a}^{b}dx f(x)e^{i\lambda \phi(x)}=0$$
>
## Proof.

注意到若$\phi^{'}(x)\neq 0$，我们有：
$$\begin{align}
e^{i\lambda \phi(x)} & = \frac{1}{i\lambda \phi^{'}(x)} \frac{\partial}{\partial x}e^{i\lambda \phi(x)}
\end{align}$$
那么：
$$\begin{align}
\int_{a}^{b}dxf(x)e^{i\lambda \phi(x)} & = \int dx f(x) \frac{1}{i\lambda \phi^{'}(x)} \frac{\partial}{\partial x} e^{i\lambda \phi(x)} \\
 & = \left[ f(x) \frac{1}{i\lambda \phi^{'}(x)} e^{i\lambda \phi(x)} \right]_{a}^{b}-  \frac{1}{i\lambda} \int_{a}^{b}dx e^{i\lambda \phi(x)} \frac{\partial}{\partial x}\left(  \frac{f(x)}{ \phi^{'}(x)} \right)
\end{align}$$
若$f(x),\phi^{'}(x)$性质足够好，那么$\frac{\partial}{\partial x}\left(\frac{f(x)}{\phi^{'}(x)}\right)$在$[a,b]$有界，那么$\left|\int_{a}^{b}dx e^{i\lambda \phi(x)} \frac{\partial}{\partial x}\left(  \frac{f(x)}{\phi^{'}(x)} \right)\right|< \infty$。那么令$\lambda \rightarrow \infty$，显然积分为零。
>[!Right]
>$\blacksquare$

那么可以得到：

>[!Success] Proposition 1
>We have the asymptotic behavior as $\lambda \rightarrow \infty$:
>$$\int_{a}^{b} dx f(x)e^{i\lambda \phi(x)} \sim e^{i\lambda \phi(x_{0})}f(x_{0})\sqrt{ \frac{2\pi}{-i\lambda \phi^{''}(x_{0})} }$$
>where $x_{0}$ is the stationary point of $\phi(x)$.
## Handwave

由于在$\phi(x)\neq 0$的区域，积分后取$\lambda\rightarrow \infty$都是零，所以只需要考虑驻点$x_{0}$的邻域：
$$\begin{align}
\int_{a}^{b} dx f(x)e^{i\lambda \phi(x)} & \sim \int_{B(x_{0},\delta x)} dx f(x) \exp\left( i\lambda\left( \phi(x_{0})+ \frac{1}{2}\phi^{''}(x_{0})(x-x_{0})^{2} \right) \right) \\
 & = e^{i\lambda \phi(x_{0})} \int_{B(x_{0},\delta x)}dxf(x)\exp\left( i \frac{\lambda}{2}\phi^{''}(x_{0})(x-x_{0})^{2} \right)
\end{align}$$
注意到$\exp\left( i \frac{\lambda}{2}\phi^{''}(x_{0})(x-x_{0})^{2} \right)$是面积为$\sqrt{ \frac{2\pi}{-i\lambda \phi^{''}(x_{0})} }$的Gauss函数，所以若$\lambda\rightarrow \infty$，该Gauss函数变成$\sqrt{ \frac{2\pi}{-i\lambda \phi^{''}(x_{0})} }\delta(x-x_{0})$。所以：
$$\begin{align}
\int_{a}^{b}dxf(x)e^{i\lambda \phi(x)} & \sim e^{i\lambda \phi(x_{0})} \int_{B(x_{0},\delta x)}f(x) \sqrt{ \frac{2\pi}{-i\lambda \phi^{''}(x_{0})} }\delta(x-x_{0}) \\
 & = e^{i\lambda \phi(x_{0})}f(x_{0}) \sqrt{ \frac{2\pi}{-i\lambda \phi^{''}(x_{0})} }
\end{align}$$
>[!Right]
>$\blacksquare$

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

## Ex:

考虑某个波：
$$\psi(x,t)= \int dk \tilde{\psi}(k)e^{{i(kx-\omega(k)t)}}$$
其中，存在色散关系$\omega=\omega(k)$。我们考虑$t\rightarrow \infty$时的渐进行为。我们有：
$$i(kx-\omega t)= it\left( k \frac{x}{t}-\omega \right)$$
所以将$k \frac{x}{t}-\omega$当作phase。固定$x,t$，若存在驻点$k_{0}$满足：
$$ \frac{x}{t}-\omega^{'}(k_{0})=0$$
那么有：
$$\begin{align}
\psi(x,t) & \sim e^{i(k_{0}x- \omega(k_{0})t)} \tilde{\psi}(k_{0}) \sqrt{ \frac{2\pi}{it \partial^{2}\omega(k_{0}) /\partial k^{2}} }
\end{align}$$
若不存在驻点，则积分直接为零，没有波。所以长时间后，在给定时空点，只能观测到群速度符合该点的波。然后该波的振幅随着时间衰减。

