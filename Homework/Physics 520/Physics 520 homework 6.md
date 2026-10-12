# Problem 1
## (a)

We have:
$$\begin{align}
(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2} & = (\boldsymbol{\sigma}\cdot \mathbf{p})^{2}+e^{2}(\boldsymbol{\sigma}\cdot \mathbf{A})^{2}+ (\boldsymbol{\sigma}\cdot \mathbf{p})(e\boldsymbol{\sigma}\cdot \mathbf{A})+(e\boldsymbol{\sigma}\cdot \mathbf{A})(\boldsymbol{\sigma}\cdot \mathbf{p})
\end{align}$$
We then compute:
$$\begin{align}
(\boldsymbol{\sigma} \cdot \mathbf{p})(e\boldsymbol{\sigma} \cdot \mathbf{A}) & = e \mathbf{p}\cdot \mathbf{A}+ie\boldsymbol{\sigma}\cdot(\mathbf{p}\times \mathbf{A}) \\
 & = e(-i\hbar \nabla \cdot \mathbf{A}-i\hbar \mathbf{A}\cdot \nabla)+ ie(-i\hbar)\boldsymbol{\sigma}\cdot(\nabla \times \mathbf{A}) \\
 & = e(-i\hbar \nabla \cdot \mathbf{A}-i\hbar \mathbf{A}\cdot \nabla)+e\hbar \boldsymbol{\sigma}\cdot(\mathbf{B}-\mathbf{A}\times \nabla)
\end{align}$$
Similarly:
$$\begin{align}
(e\boldsymbol{\sigma}\cdot \mathbf{A})(\boldsymbol{\sigma}\cdot \mathbf{p}) & = e\mathbf{A}\cdot \mathbf{p}+i(-i\hbar)\boldsymbol{\sigma}\cdot(\mathbf{A} \times \mathbf{p}) \\
 & = e(-i\hbar)\mathbf{A}\cdot \nabla+e\hbar \boldsymbol{\sigma}\cdot(\mathbf{A}\times \nabla)
\end{align}$$
Then:
$$\begin{align}
e^{2}(\boldsymbol{\sigma}\cdot \mathbf{A})^{2}+ (\boldsymbol{\sigma}\cdot \mathbf{p})(e\boldsymbol{\sigma}\cdot \mathbf{A})+(e\boldsymbol{\sigma}\cdot \mathbf{A})(\boldsymbol{\sigma}\cdot \mathbf{p}) & = e^{2}A^{2}+e\hbar \mathbf{B}\cdot \boldsymbol{\sigma}-i\hbar \nabla \cdot \mathbf{A}-2i\hbar \mathbf{A}\cdot \nabla
\end{align}$$
