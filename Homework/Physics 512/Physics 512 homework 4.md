# Sakurai 5.13

The hamiltonian is given by:
$$H=H_{0}+H_{\text{FS}}+H_{\delta}- |e|z\epsilon$$
Now $\{ \ket{n,j,l,s,m_{j}} \}$ is a good basis that diagonalizes $H_{0}+H_{\text{FS}}+H_{\delta}$. Since $|e|z\epsilon$ is small compared with the fine structure, and is definitely small compared with energy levels in $H_{0}$, we can fix $n=2,j= \frac{1}{2}$ and work in the subspace with $l=0,1$. 

Since $H_{0}+H_{\text{FS}}$ is a scalar in this subspace, and the representation of an identity is always an identity in any basis, we can ignore them because they don't affect diagonalization. Inside the subspace with $n=2,j= \frac{1}{2}$, we can switch back to the $\{ \ket{n,l,s,m_{l},m_{s}} \}$ basis since it's easier to work out the matrix elements of $z$. 


 Since both $H_{\delta},z$ don't operate on spins, the total matrix is also diagonalized with respect to $m_{s}$. Then we can also fix $m_{s}$. We have:
 $$\begin{align}
\bra{n=2,l^{'},m_{l}^{'}, m_{s}^{}} z \ket{n=2,l,m_{l},m_{s}}  & = \bra{2l^{'}} r \ket{2l} \bra{l^{'},m_{l}^{'}} \cos \theta \ket{l,m_{l}}   
\end{align}$$
Since $\cos \theta$ is odd, we must have $l^{'}\neq l$, or the matrix element vanishes by the parity selection rule. Moreover, since $\cos \theta=\left( \frac{\mathbf{r}}{r} \right)^{(1)}_{0}$, we must have $m_{l}^{'}= m_{l}$. Then the only non-zero matrix elements are:
$$\begin{align}
 & \bra{2,l^{'}=0,m_{l}^{'}=0,m_{s}}z \ket{2,l=1,m_{l}=0,m_{s}} = \bra{2s} r \ket{2p}\bra{0,0} \cos \theta \ket{1,0}  
\end{align}$$
and its complex conjugate. We compute:
$$\begin{align}
\bra{2s} r\ket{sp} \bra{0,0} \cos \theta \ket{1,0}  & = 3\sqrt{ 3 }a_{0} \int_{S^{2}}d\Omega Y_{0}^{0*} \cos \theta Y_{l}^{0} \\
 & = 3a_{0}
\end{align}$$
Next, we compute $\bra{2,l^{'},m_{l}^{'},m_{s}^{}}H_{\delta}\ket{2,l,m_{l},m_{s}}$. Know that $H_{\delta}= \delta \ket{2s}\bra{2s}$, then the only non-zero matrix elements are:
$$\bra{2s}H_{\delta}\ket{2s} \delta_{m_{l},m_{l}^{'}}= \delta\delta_{m_{l},m_{l}^{'}}$$
Therefore, we have:
$$\begin{align}
H_{\delta}-|e|z\epsilon \overset{\wedge}{=} \begin{pmatrix}
 \delta & -3|e|a_{0}\epsilon \\
-3|e|a_{0}\epsilon & 0
\end{pmatrix}
\end{align}$$
where the first column corresponds to $\ket{n=2,l=0,m_{l}=0,m_{s}}$, and the second column corresponds to $\ket{n=2,l=1,m_{l}=0,m_{s}}$.

We can subtract a scalar $\frac{\delta}{2}\mathbb{1}$ from the matrix, and this doesn't affect diagonalization, since the representation of an identity is always an identity in any basis. Then we rewrite:
$$H_{\delta}-|e|z\epsilon  \overset{\wedge}{=} \begin{pmatrix}
\delta /2 & -3|e|a_{0}\epsilon \\
-3|e|a_{0}\epsilon & - \delta /2
\end{pmatrix}$$
We compute the eigenvalues:
$$\begin{align}
 & \left( \frac{\delta}{2}-E \right)\left( - \frac{\delta}{2}-E \right)- 9e^{2}a_{0}^{2}\epsilon^{2}=0 \\
\implies & E_{\pm}= \pm \sqrt{ \frac{\delta^{2}}{4}+9e^{2}a_{0}^{2}\epsilon^{2} }
\end{align}$$
If the field is weak, we have:
$$\begin{align}
E_{\pm} & =\pm  \frac{\delta}{2}\sqrt{ 1+ \frac{36e^{2}a_{0}^{2}\epsilon^{2}}{\delta^{2}} } \\
 & \approx \pm  \frac{\delta}{2}\left( 1+ \frac{18e^{2}a_{0}^{2}\epsilon^{2}}{\delta^{2}} \right) \\
\end{align}$$
Then the energy level shifts are clearly $\pm \frac{9e^{2}a_{0}^{2}\epsilon^{2}}{\delta}\propto \epsilon^{2}$.

If the field is strong, we have:
$$\begin{align}
E_{\pm} & = \pm3|e|a_{0}\epsilon \sqrt{ 1+ \frac{\delta^{2}}{36e^{2}a_{0}^{2}\epsilon^{2}} } \\
 & \approx \pm 3|e|a_{0}\epsilon\left( 1+ \frac{\delta^{2}}{72e^{2}a_{0}^{2}\epsilon^{2}} \right) \\
 & = \pm 3|e|a_{0}\epsilon+\mathcal{O}(\delta^{2})
\end{align}$$
Then the energy level shifts are $\pm 3|e|a_{0}\epsilon+\mathcal{O}(\delta)\approx \pm 3|e|a_{0}\epsilon \approx \epsilon$ if we ignore the $\mathcal{O}(\delta)$ term.
# Sakurai 5.17



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


