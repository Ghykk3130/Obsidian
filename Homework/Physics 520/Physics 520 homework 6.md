# Problem 1
## (a)

We have:
$$\begin{align}
(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2} & = (\mathbf{p}+e\mathbf{A} )^{2}+i\boldsymbol{\sigma}\cdot[(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A})]
\end{align}$$
We compute:
$$\begin{align}
(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A}) & = e\mathbf{p}\times \mathbf{A}+e\mathbf{A}\times \mathbf{p} \\ & = e(-i\hbar)\nabla \times \mathbf{A}+e\mathbf{A}\times \mathbf{p} 

\end{align}$$
We have:
$$\begin{align}
(\nabla \times \mathbf{A})_{i} & = \epsilon_{ijk}\partial_{j}A_{k} \\
 & = \epsilon_{ijk}(\partial_{j}A_{k})+\epsilon_{ijk}A_{k}\partial_{j} \\
 & = B_{i}-(\mathbf{A}\times \nabla)_{i}
\end{align}$$
Then:
$$\begin{align}
(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A})  & = e(-i\hbar)(\mathbf{B}-A\times \nabla)+e\mathbf{A}\times \mathbf{p} \\  & = e(-i\hbar)\mathbf{B}
\end{align}$$
Then:
$$\begin{align}
(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2} & = (\mathbf{p}+e\mathbf{A})^{2}+e\hbar \mathbf{B}\cdot \boldsymbol{\sigma} \\
 & = (\mathbf{p}+e\mathbf{A})^{2}+ 2e\hbar \mathbf{B}\cdot \mathbf{S}
\end{align}$$
Then:
$$\begin{align}
\frac{(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2}}{2m_{e}} & = \frac{(\mathbf{p}+e\mathbf{A})^{2}}{2m_{e}}+ \frac{e\hbar}{m_{e}}\mathbf{B}\cdot \mathbf{S} \\
 & = \frac{(\mathbf{p}^{}+e\mathbf{A})^{2}}{2m_{e}}+ 2 \mu_{B}\mathbf{B}\cdot \mathbf{S} \\
 & = \frac{(\mathbf{p}+e\mathbf{A} )^{2}}{2m_{e} }+g\mu_{B}\mathbf{B}\cdot \mathbf{S},\ g=2
\end{align}$$
## (b)


