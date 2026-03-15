# Problem 4.
## (a)

Consider a magnetic field along the z-axis. Consider a single electron. Then the canonical momentum is given by:
$$\boldsymbol{\pi}=\mathbf{p}+e\mathbf{A}$$
The dipole energy of the spin is given by:
$$-(-\mu_{B})B \frac{1}{\hbar}s_{z}$$
Then the hamiltonian is given by:
$$\begin{align}
H & = \frac{|\mathbf{p}+e\mathbf{A}|^{2} }{2m}+V+\mu_{B}B \frac{1}{\hbar}s_{z}
\end{align}$$
Choose the gauge such that:
$$\mathbf{A}= - \frac{1}{2}B(y  \hat{\mathbf{x}}-x  \hat{\mathbf{y}})$$
Then we have:
$$\begin{align}
|\mathbf{p}+e\mathbf{A}|^{2} & = p^{2}+e^{2}A^{2}+2e\mathbf{p}\cdot \mathbf{A} \\
 & = p^{2}+e^{2} \frac{1}{4}B^{2}(x^{2}+y^{2})+ B(-p_{x}y+xp_{y}) \\
 & = p^{2}+ \frac{e^{2}}{4}B^{2}(x^{2}+y^{2})-Bl_{z}
\end{align}$$
Then:
$$\begin{align}
H & = \frac{p^{2}}{2m}+V+ \frac{|e|}{2m}B(l_{z}+2s_{z})+ \frac{1}{8} \frac{e^{2}B^{2}}{m} (x^{2}+y^{2})
\end{align}$$
As in the textbook, we ignore the diamagnetism term $\frac{1}{8} \frac{e^{2}B^{2}}{m}(x^{2}+y^{2})$. Then the interaction energy between one electron and the magnetic field is:
$$\begin{align}
\frac{|e|}{2m}B(l_{z}+2s_{z}) 
\end{align}$$
If we add up the interaction energies of multiple electrons, we get:
$$H_{B}= \frac{|e|}{2m}B(L_{z}+2S_{z})= \mu_{B}B \frac{1}{\hbar}(L_{z}+2S_{z})= \mu_{B}B \frac{1}{\hbar}(J_{z}+S_{z})$$
![[Drawing 2026-03-15 02.38.53.excalidraw|center|500]]
In the semiclassical picture, both $\mathbf{L},\mathbf{S}$ are in precession. Then $\mathbf{J}$ is rotating around the z-axis. Then:
$$\begin{align}
\langle S_{z}\rangle & = S \cos \beta \frac{J_{z}}{J}
\end{align}$$
From geometry, we know:
$$\cos \beta= \frac{S^{2}+J^{2}-L^{2}}{2SJ}$$
Then:
$$\begin{align}
\langle S_{z}\rangle & = \frac{S^{2}+J^{2}-L^{2}}{2J^{2} }J_{z}
\end{align}$$
Then:
$$\begin{align}
\langle H_{B}\rangle & = \mu_{B}B\hbar\left( J_{z}+ \frac{S^{2}+J^{2}-L^{2}}{2J^{2}}J_{z} \right)
\end{align}$$
Quantize by setting $S^{2}=\hbar^{2} S(S+1),\ J^{2}=\hbar^{2}J(J+1),\ L^{2}=\hbar^{2}L(L+1),J_{z}=m_{J}\hbar$. Then:
$$\begin{align}
\langle H_{B}\rangle & = \mu_{B}B\left( 1+ \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)} \right)m_{J}
\end{align}$$
## (b)

Let $\alpha$ be the collective quantum number other than the angular quantum numbers. Treat $H_{B}$ as a perturbation. Then the original basis is $\{ \ket{\alpha,J,L,S,m_{J} }\}$. Now want a basis that diagonalize:
$$A\mathbf{L}\cdot \mathbf{S}+ \mu_{B}B \frac{1}{\hbar}(J_{z}+S_{z})$$
