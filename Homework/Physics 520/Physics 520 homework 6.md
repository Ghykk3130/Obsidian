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

We have:
$$\begin{align}
[\mathbf{S},H] & = \left[ \mathbf{S}, \frac{(\mathbf{p}+e\mathbf{A})^{2}}{2m_{e}}+g\mu_{B}\mathbf{S}\cdot \mathbf{B} \right] \\
 & = [\mathbf{S},g\mu_{B}\mathbf{S}\cdot \mathbf{B}] 
\end{align}$$
Then we compute:
$$\begin{align}
[S_{i},S_{j} B_{j}] & = [S_{i},S_{j}]B_{j} \\
 & = i\epsilon_{ijk}S_{k}B_{j} \\
 
\end{align}$$
Then:
$$\begin{align}
[\mathbf{S},H] & = g\mu_{B}(-i)\mathbf{S}\times \mathbf{B}
\end{align}$$
Then by Ehrenfest theorem, we have:
$$\begin{align}
\frac{d}{dt}\langle \mathbf{S}\rangle & = \frac{1}{i\hbar}\langle [\mathbf{S},H]\rangle \\
 & = \frac{g\mu_{B}}{\hbar}\mathbf{B}\times \mathbf{S}
\end{align}$$
# Problem 2
## (a)

All atoms have diamagnetic term $\sum_{i} \frac{e^{2}}{12m_{e}}B^{2} \langle r_{i}^{2}\rangle$ in the energy. This term is always diamagnetic because it increases as $B$ increases. Then $- \frac{\partial H}{\partial B}<0$. The Zeeman coupling would induce $\mu_{B}g_{J}m_{J}B$ in the energy. This term could be diamagnetic or paramagnetic. If the calculated susceptibility due to the diamagnetic term outweighs that of Zeeman term, then the atom would be paramagnetic. Otherwise, the atom would be diamagnetic. 
## (b)

We first maximize $S$. This is because we want spins to be as "parallel" as possible to each other, in order to minimize the exchange energy. 

Then we maximize $L$. This because we want the electrons to "rotate" in the same direction, so that the Coulomb interaction between them is minimized.

Then if the shell is more than half-filled, we choose $J=L+S$. 



