# 1. QED顶点

我们提出QED lagrangian：
$$\begin{align}
\mathcal{L} & = \bar{\psi}(i \rlap{/}\partial-m)\psi- \frac{1}{4}F_{\mu \nu}F^{\mu \nu}- e \bar{\psi} \gamma^{\mu}\psi A_{\mu}
\end{align}$$
这是自由费米子场和自由电磁场lagrangian直接相加，加上一个coupling $-e \bar{\psi}\gamma^{\mu}\psi A_{\mu}$。可以证明，这个lagrangian保有$U(1)$对称性。相应的Noether荷为电荷。

我们将四维势量子化：
$$\begin{align}
A_{\mu} & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}\sum_{r=0}^{3}( a_{\mathbf{p}}\epsilon^{r}_{\mu}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}(\epsilon^{r}_{\mu})^{*}e^{ip\cdot x})
\end{align}$$
我们提出polarization的正交关系：
$$\begin{align}
\sum_{r} \epsilon^{r}_{\mu}(\epsilon^{r}_{\nu})^{*}=-g_{\mu \nu}
\end{align}$$
定义光子propagator：
$$\begin{align}
\bra{0} TA_{\mu}(x)A_{\nu}(y)\ket{0} = \int \frac{d^{4}p}{(2\pi)^{4} } \frac{-ig_{\mu \nu}}{p^{2}+i\epsilon}e^{-ip\cdot(x-y)}
\end{align}$$
可以证明如下Feynman规则：
![[Pasted image 20261121003036.png|centering|500]]

