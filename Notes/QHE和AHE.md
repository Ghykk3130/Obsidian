# 1. QHE

考虑一个二维绝缘体加上电场$\mathbf{E}=E \hat{\mathbf{y}}$。则速度方程为：
$$\mathbf{v}= \frac{\partial\epsilon}{\hbar \partial \mathbf{k}}- \frac{|e|}{\hbar}\mathbf{E}\times \boldsymbol{\Omega}= \frac{\partial\epsilon}{\hbar \partial \mathbf{k}}- \frac{|e|}{\hbar}\Omega_{k_{x},k_{y}}E  \hat{\mathbf{x}}$$
那么积分可以得到Hall conductivity：
$$\begin{align}
j_{x} & = \frac{1}{A} \frac{A}{(2\pi)^{2}}\int_{\text{BZ}} d^{2}k e\mathbf{v} \\
 & = \frac{e^{2}}{\hbar(2\pi)^{2}} \int_{\text{BZ}} d^{2}k \Omega_{k_{x},k_{y}} E    \\
 & = \frac{e^{2}}{h}C E \\
\implies \sigma_{xy} & = \frac{e^{2}}{h}C
\end{align}$$
这即是TKNN公式。由于$C$是量子化的，$\sigma_{xy}$也是量子化的。

# 2. AHE

