# Sakurai 5.13

The hamiltonian is given by:
$$H=H_{0}+H_{\text{FS}}+H_{\delta}- |e|z\epsilon$$
Now $\{ \ket{n,j,l,s,m_{j}} \}$ is a good basis that diagonalizes $H_{0}+H_{\text{FS}}+H_{\delta}$. Since $|e|z\epsilon$ is small compared with the fine structure, and is definitely small compared with energy levels in $H_{0}$, we can fix $n=2,j= \frac{1}{2}$ and work in the subspace with $l=0,1$. 

Since $H_{0}+H_{\text{FS}}$ is an identity in this subspace, we ignore them because they don't affect diagonalization. Then we need the matrix element $\bra{n,j,l^{'},s,m_{j}^{'}} (H_{\delta}-|e|z\epsilon) \ket{n,j,l,s,m_{j}}$. 

Obviously, by selection rule, 
$$\begin{align}
\bra{n,j,l^{'},s,m_{j}^{'}} z \ket{n,j,l,s,m_{j}}  & = \bra{n,l^{'}} r\ket{n,l} \bra{j,m_{j}^{'}} \cos \theta \ket{j,m_{j}}  \\
 & = \bra{n,l^{'}} r\ket{n,l} \bra{j,m_{j}} \cos \theta \ket{j,m_{j}}\delta_{m_{j},m_{j}^{'}} 
\end{align}$$
Then evaluate $\bra{n,j,l^{'},s,m_{j}}z \ket{n,j,l,s,m_{j}}$. By parity selection rule, we have:
$$\bra{2^{2}S_{1 /2},m_{j}}z \ket{2^{2}S_{1 /2},m_{j}} =0,\ \bra{2^{2}P_{1 /2},m_{j}}z \ket{2^{2}P_{1 /2},m_{j}} =0 $$
since $z$ is odd. 

We observe:
$$\begin{align}
\bra{n,j,l^{'},s,m_{j}^{'}} H_{d}\ket{n,j,l,s,m_{j}} = \bra{n,j,l^{'},s,m_{j}} H_{d}\ket{n,j,l,s,m_{j}} \delta_{m_{j},m_{j}^{'}}
\end{align}$$
it suffices to fix $m_{j}$. 


Therefore:
$$H_{\delta}-|e|z\epsilon \overset{\wedge}{=} \begin{pmatrix}
\delta & -|e|\epsilon \bra{2s} z \ket{2p}  \\
-|e|\epsilon \bra{2p} z\ket{2s}  & 0
\end{pmatrix}$$



# Problem 4
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

Let $\alpha$ be the collective quantum number other than the angular quantum numbers. Treat $H_{B}$ as a perturbation. Then $\{ \ket{\alpha,J,L,S,m_{J} }\}$ is a good basis that diagonalizes $A\mathbf{L}\cdot \mathbf{S}$. Now have:
$$\begin{align}
\bra{\alpha,J,L,S,m_{J}^{'}} S_{z}\ket{\alpha,J,L,S,m_{J}}  & = \frac{\langle \mathbf{S}\cdot \mathbf{J}\rangle_{\alpha,J,L,S,m_{J}}  }{\hbar^{2}J(J+1)} \bra{\alpha,J,L,S,m_{J}^{'}} J_{z}\ket{\alpha,J,L,S,m_{J}}  \\
 & = \frac{\langle \mathbf{S}\cdot \mathbf{J}\rangle_{\alpha,J,L,S,m_{J}}}{\hbar^{2}J(J+1)} \hbar m_{J}\delta_{m_{J},m_{J}^{'}}
\end{align}$$
know that $J_{z}$ must be diagonal under this basis, and we just showed that $S_{z}$ is also diagonal under this basis. Therefore $H_{B}$ is diagonal under this basis. We next compute:
$$\begin{align}
\langle \mathbf{S}\cdot \mathbf{J}\rangle_{\alpha,J,L,S,m_{J}} & = \langle S^{2}\rangle+\langle \mathbf{S}\cdot \mathbf{L}\rangle \\
 & = \hbar^{2}S(S+1)+ \frac{\hbar^{2}}{2}(J(J+1)-S(S+1)-L(L+1)) \\
 & = \frac{\hbar^{2}}{2}(J(J+1)+S(S+1)-L(L+1))
\end{align}$$
Then:
$$\begin{align}
\langle S_{z}\rangle_{\alpha,J,L,S,m_{J}} & = \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)}\hbar m_{J}
\end{align}$$
Then:
$$\begin{align}
\langle H_{B}\rangle_{\alpha,J,L,S,m_{J}} & = \mu_{B}B \frac{1}{\hbar}(\langle J_{z}\rangle+\langle S_{z}\rangle) \\
 & = \mu_{B}B\left( 1+ \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)} \right)m_{J}
\end{align}$$
So:
$$g_{J}=\left( 1+ \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)} \right)$$
# Problem 5
## (a)

Adopting the formula:
$$g_{J}=\left( 1+ \frac{J(J+1)+S(S+1)-L(L+1)}{2J(J+1)} \right)$$
It's easy to calculate that for $3^{2}S_{1 /2}$, $J=\frac{1}{2},S=1,L=0$. we get $g_{J}=2$. For $3^{2}P_{3 /2}$, $J=\frac{3}{2},S=1,L=1$, we get $g_{J}=\frac{2}{3}$. For $3^{2}P_{1 /2}$, $J=\frac{1}{2},S=1,L=1$, we get $g_{J}=\frac{4}{3}$.

![[Drawing 2026-03-15 03.30.40.excalidraw|center|500]]
## (b)

We know that the dipole interaction is:
$$H_{d}=-|e|\mathbf{r}\cdot \mathbf{E}$$
Then is suffices to consider the non-zero matrix elements of $\mathbf{r}\cdot \mathbf{E}$. Know that:
$$\begin{align}
 & x= \frac{r^{(1)}_{-1}-r^{(1)}_{1}}{\sqrt{ 2 }} \\
 & y= - \frac{r^{(1)}_{-1}- r^{(1)}_{1}}{\sqrt{ 2 }i} \\
 & z=r^{(1)}_{0}
\end{align}$$
Then as long as the matrix elements of one of $r^{(1)}_{1},r^{(1)}_{-1},r^{(1)}_{0}$ are non-zero, then the transition is allowed. Know that:
$$\bra{J^{'},m_{J}^{'}} r^{(1)}_{q}\ket{J,m_{J}} \propto \bra{J,1,m_{J},q} J^{'},m_{J}^{'}\rangle$$
Then:
$$\Delta m_{J}=\pm 1,\ 0,\ |J-1|\leq J^{'}\leq J+1$$
Know that $\ket{3S},\ket{3D}$ are even, $\ket{3P}$ is odd, and $\mathbf{r}$ is odd, then the upper state must be $\ket{3P}$ by parity selection rule. Then the allowed transitions are:
$$\begin{array}{c|c|c} 
\text{lower state} & \text{upper state} & \Delta E_{B} /B(MHz /\text{Gauss})  \\
\hline \ket{3^{2}S_{1 /2},- \frac{1}{2}}  & \ket{3^{2}P_{1 /2}, \frac{1}{2}}  & 1.865 \\
\hline \ket{3^{2}S_{1 /2}, -\frac{1}{2}}     &  \ket{3^{2}P_{1 /2}, - \frac{1}{2} } & 0.933 \\
\hline \ket{3^{2}S_{1 /2},- \frac{1}{2}}  & \ket{3^{2}P_{3 /2 }, \frac{1}{2}}  & 2.332 \\
\hline  \ket{3^{2}S_{ 1 /2  },- \frac{1}{2} } & \ket{3^{2}P_{3/2}, - \frac{1}{2}}  & 0.466 \\
\hline  \ket{3^{2}S_{ 1 /2}, - \frac{1}{2}}  & \ket{3^{2}P_{3 /2},- \frac{3}{2}}  & -1.399 \\
\hline \ket{3^{2}S_{1 /2}, \frac{1}{2}}  & \ket{3^{2}P_{1 /2}, \frac{1}{2}}  &  -0.933\\
\hline\ket{3^{2}S_{1 /2}, \frac{1}{2}}  & \ket{3^{2}P_{1 /2}, -\frac{1}{2}}  &  -1.865\\
\hline \ket{3^{2}S_{ 1 /2}, \frac{1}{2} } &  \ket{3^{2}P_{ 3/2}, \frac{1}{2} } &  -0.466\\
\hline \ket{3^{2}S_{ 1/ 2}, \frac{1}{2}} &  \ket{3^{2}P_{3 /2}, - \frac{1}{2}}  & -2.332 \\
\hline \ket{3^{2}S_{ 1 /2}, \frac{1}{2}}  & \ket{3^{2}P_{3 /2}, \frac{3}{2}}  &   1.399 
\end{array}$$
## (c)

The fine structure splitting is given by:
$$\begin{align}
\Delta \nu_{\text{FS}}= |c \frac{1}{\lambda_{1}}- c \frac{1}{\lambda_{2} }|=515.742\ GHz
\end{align}$$
Then we find the field:
$$B= \frac{\Delta \nu_{\text{FS}}}{2.332\ MHz/ \text{Gauss}} \approx 22.1\ T$$
The field should be much smaller than this value, so $B< 0.2 T$ is good.


