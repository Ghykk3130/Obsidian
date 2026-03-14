
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
H & = \frac{p^{2}}{2m}+V+ \frac{|e|}{2m}B(L_{z}+2S_{z})+ \frac{1}{8} \frac{e^{2}B^{2}}{m} (x^{2}+y^{2})
\end{align}$$
加上L-S coupling，为：
$$H= \frac{p^{2}}{2m}+V+ \frac{1}{2m^{2}c^{2}} \frac{1}{r} \frac{\partial V}{\partial r}\mathbf{L}\cdot \mathbf{S}+ \frac{|e|}{2m}B(L_{z}+2S_{z})+ \frac{1}{8}  \frac{e^{2}B^{2}}{m} (x^{2}+y^{2})$$
我们忽略抗磁项，然后考虑unperturbed hamiltonian以及微扰：
$$\begin{align}  & H_{0} = \frac{p^{2}}{2m}+V+ \frac{1}{2m^{2}c^{2}} \frac{1}{r} \frac{\partial V}{\partial r}\mathbf{L}\cdot \mathbf{S}\\

 & H_{B}= \frac{|e|}{2m}B(L_{z}+2S_{z})= \mu_{B}B \frac{1}{\hbar}(L_{z}+g_{s}S_{z})
\end{align}$$
由于$H_{0}$的一阶微扰本征态$\ket{n,j,l,m_{j}}$都是non-degenerate的，我们可以直接$H_{B}$带来的一阶能量修正。我们需要：
$$\langle L_{z}+2S_{z}\rangle_{n,j,l,m_{j}}=\langle J_{z}+S_{z}\rangle_{n,j,l,m_{j}}$$
我们有：
$$\begin{align}
\langle J_{z}\rangle & = m_{j}\hbar
\end{align}$$
接着，略去量子数$n$，我们有：
$$\begin{align}
S_{z}\ket{j,l,m_{j}}  & = S_{z}\left( C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}\ket{m_{j}- \frac{1}{2}, \frac{1}{2}  }+C_{m_{j}+ \frac{1}{2}, -\frac{1}{2}}^{j,m_{j}}\ket{m_{j}+ \frac{1}{2}, - \frac{1}{2}}   \right) \\
 & = \frac{\hbar}{2} C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}\ket{m_{j}- \frac{1}{2}, \frac{1}{2}  }- \frac{\hbar}{2} C_{m_{j}+ \frac{1}{2}, -\frac{1}{2}}^{j,m_{j}}\ket{m_{j}+ \frac{1}{2}, - \frac{1}{2}} 
\end{align}$$
那么：
$$\begin{align}
\langle S_{z}\rangle & = \frac{\hbar}{2}|C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}|^{2}- \frac{\hbar^{}}{2} |C_{m_{j}+ \frac{1}{2},- \frac{1}{2} }^{j,m_{j}}|^{2} \\
 & = \frac{\hbar}{2}C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}2}- \frac{\hbar}{2}C_{m_{j}+ \frac{1}{2},- \frac{1}{2} }^{j,m_{j}2} \\
\end{align}$$
这是因为CG系数by convention都是实数。接下来：
$$\begin{align}
\langle S_{z}\rangle_{j=l\pm \frac{1}{2},m_{j}} & = \frac{\hbar}{2} \frac{1}{2l+1}\left[ \left( l\pm m_{j}+ \frac{1}{2} \right)-\left( l \mp m_{j}+ \frac{1}{2} \right) \right] \\
 & = \pm \frac{m_{j}\hbar}{2l+1}
\end{align}$$
那么：
$$\Delta E_{n,j=l\pm \frac{1}{2}, l,m_{j}}= \mu_{B}Bm_{j}\left( 1\pm \frac{1}{2l+1} \right)$$
可将$g_{j= l\pm \frac{1}{2}}= 1\pm \frac{1}{2l+1}$定义为$j$的Lande g factor。

