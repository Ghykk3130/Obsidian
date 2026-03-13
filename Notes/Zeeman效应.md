
考虑给氢原子加上磁场。则Hamiltonian为：
$$\begin{align}
H & = \frac{|\mathbf{p}+e\mathbf{A}|^{2} }{2m}+V+\mu_{B}B \frac{1}{\hbar}S_{z}
\end{align}$$
令$\mathbf{B}=B  \hat{\mathbf{z}}$，则可以选取规范使得：
$$\mathbf{A}= - \frac{1}{2}B(y  \hat{\mathbf{x}}-x  \hat{\mathbf{y}})$$
那么，我们有：
$$\begin{align}
|\mathbf{p}+e\mathbf{A}|^{2} & = p^{2}+e^{2}A^{2}+2e\mathbf{p}\cdot \mathbf{A} \\
 & = p^{2}+e^{2} \frac{1}{4}B^{2}(x^{2}+y^{2})+ B(-p_{x}y+xp_{y}) \\
 & = p^{2}+ \frac{e^{2}}{4}B^{2}(x^{2}+y^{2})-BL_{z}
\end{align}$$
所以Hamiltonian为：
$$\begin{align}
H & = \frac{p^{2}}{2m}+V+ \frac{|e|}{2m}B(L_{z}+2S_{z})+ \frac{1}{4}e^{2}B^{2}(x^{2}+y^{2})
\end{align}$$
加上L-S coupling，为：
$$H= \frac{p^{2}}{2m}+V+ \frac{1}{2m^{2}c^{2}} \frac{1}{r} \frac{\partial V}{\partial r}+ \frac{|e|}{2m}B(L_{z}+2S_{z})$$

我们忽略抗磁项$\frac{1}{4}e^{2}B^{2}(x^{2}+y^{2})$，然后考虑微扰：
$$H_{B}= \frac{|e|}{2m}B(L_{z}+2S_{z})= \mu_{B}B \frac{1}{\hbar}(L_{z}+g_{s}S_{z})$$
