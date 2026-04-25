考虑自由电子气加上磁场$\mathbf{B}=B \hat{\mathbf{z}}$。则引入Zeeman作用$V=g\mu_{B} \frac{S_{z}}{\hbar}B= \mu_{B}\sigma_{z}B$。那么两种自旋的电子能量分别为：
$$\begin{align}
 & E_{\uparrow}= \frac{\hbar^{2}k^{2}}{2m}+\mu_{B}B \\
 & E_{\downarrow}= \frac{\hbar^{2}k^{2}}{2m}-\mu_{B}B
\end{align}$$
令无场时自由电子气态密度为$g(E)$。因为每个能量$E$包含两种自旋，所以上下自旋电子在无场时态密度为$\frac{1}{2}g(E)$。加上场后，由于态密度只来自于动能部分，我们有：
$$\begin{align}
 & n_{\uparrow}= \frac{1}{2}\int_{0}^{\infty} dE g(E)f(E_{\uparrow})= \frac{1}{2}\int_{0}^{\infty}dE g(E)f(E+\mu_{B}B) \\
 & n_{\downarrow}= \frac{1}{2}\int_{0}^{d\infty}dE g(E)f(E_{\downarrow})= \frac{1}{2}\int_{0}^{\infty}dE g(E)f(E- \mu_{B}B)
\end{align}$$
磁化为：
$$\begin{align}
M & = (-\mu_{B})(n_{\uparrow}-n_{\downarrow}) \\
 & = \frac{\mu_{B}}{2}\int_{0}^{\infty}dE g(E)[f(E- \mu_{B}B)-f(E+\mu_{B}B) ] \\
 & \approx -\mu_{B}^{2} B \int_{0}^{\infty}dE g(E) \frac{\partial f}{\partial E}
\end{align}$$
对于巡游电子，我们假设$E-\mu \gg kT$。那么$f(E)= \frac{1}{e^{\beta(E-{\mu})}+1}\approx e^{-\beta(E-\mu)}$， 我们有$\frac{\partial f}{\partial E}\approx - \beta E f$。于是：
$$\begin{align}
M & \approx \frac{\mu_{B}^{2}B}{kT}\int_{0}^{\infty}dE f(E)g(E) \\
 & = \frac{n\mu_{B}^{2}B}{kT}
\end{align}$$
得到：
$$\chi= \frac{n\mu_{0}\mu_{B}}{kT}$$
这称为Pauli顺磁。


