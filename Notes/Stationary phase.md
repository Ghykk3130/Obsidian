
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

