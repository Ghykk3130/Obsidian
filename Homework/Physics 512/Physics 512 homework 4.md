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
 & = 3\sqrt{ 3 }a_{0} \frac{1}{\sqrt{ 3 }} \\
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
## (a)

Let $H_{0}=AL^{2}+BL_{z}$. Obviously, the basis that diagonalizes $H_{0}$ is $\{ \ket{l,m_{l}} \}$. The energies are:
$$\langle H_{0}\rangle= A\hbar^{2}l(l+1)-Bm_{l}\hbar $$
We assume that the eigen subspaces are non-degenerate. Observe that:
$$\begin{align}
\bra{l,m_{l}} L_{y}\ket{l,m_{l}}  & = \bra{l,m_{l}} \frac{L_{+}-L_{-}}{2i}\ket{l,m_{l}}  \\
 & = 0
\end{align}$$
So the first order perturbation gives zero shift. We then consider:
$$\begin{align}
\sum_{(l^{'},m_{l}^{'})\neq (l,m_{l})} \frac{|\bra{l^{'},m_{l}^{'}}L_{y}\ket{l,m_{l}}  |^{2}}{E_{l,m_{l}}-E_{l^{'},m_{l}^{'}} } & = \sum_{m_{l}^{'}} \frac{|\bra{l,m_{l}^{'}} L_{y}\ket{l,m_{l}} |^{2}}{E_{l,m_{l}}-E_{l,m_{l}^{'}}} 
\end{align}$$
This is because $\{ \ket{l,m_{l}} \}$ is an invariant subspace, and $L_{y}$ does not mix states with different $l$'s. Then the only non-zero matrix elements are:
$$\begin{align}
 & \bra{l,m_{l}^{}+1}L_{y}\ket{l,m_{l}} = \bra{l,m_{l}+1}  \frac{L_{+}-L_{-}}{2i}\ket{l,m_{l}} = \frac{\sqrt{ m_{l}+1 }\hbar}{2i}  \\
 & \bra{l,m_{l}-1}L_{y}\ket{l,m_{l}} = \bra{l,m_{l}-1}  \frac{L_{+}-L_{-}}{2i}\ket{l,m_{l}} = \frac{\sqrt{ m_{l} }\hbar}{2i} 
\end{align}$$
Then:
$$\begin{align}
\sum_{m_{l}^{'}} \frac{|\bra{l,m_{l}^{'}} L_{y}\ket{l,m_{l}} |^{2}}{E_{l,m_{l}}-E_{l,m_{l}^{'}}} & = \frac{(m_{l}+1)\hbar^{2} /4 }{-B\hbar}+ \frac{m_{l} \hbar^{2} /4}{B\hbar} \\
 & = - \frac{\hbar}{4B}
\end{align}$$
Then the energy eigenvalue is:
$$E=A\hbar l(l+1)-Bm_{l}\hbar- \frac{C^{2}}{4B}\hbar$$
## (b)

**$3z^{2}-r^{2}$:**

We know that $3z^{2}-r^{2}\propto r^{(2)}_{0}$. Therefore:
$$\begin{align}
\bra{n^{'},l^{'},m_{l}^{'},m_{s}^{'}} (3z^{2}-r^{2})\ket{n,l,m_{l},m_{s}} \propto \delta_{m_{s},m_{s}^{'}}\bra{2,l,0,m_{l}} l^{'},m_{l}^{'}\rangle 
\end{align}$$
The delta function is due to that $3z^{2}-r^{2}$ does not operate on spins. Then:
$$\begin{align}
 & \Delta m_{l}=0,\ \Delta m_{s}=0,\ |l-2|\leq l^{'}\leq l+2
\end{align}$$
Know that $3z^{2}-r^{2}$ is even, so $\Delta l^{}$ must be even. So:
$$\Delta l=0,\pm 2$$
**$xy$:**

We know that $xy\propto r^{(2)}_{2}-r^{(2)}_{-2}$. For the selection rule, it suffices to let one of the matrices of $r^{(2)}_{2},r^{(2)}_{-2}$ to be non-zero. 

For $r^{(2)}_{2}$, we have:
$$\begin{align}
\bra{n^{'},l^{'},m_{l}^{'},m_{s}^{'}} r^{(2)}_{2}\ket{n,l,m_{l},m_{s}}  & \propto \delta_{m_{s},m_{s}^{'}} \bra{2,l,2,m_{l}} l^{'},m_{l}^{'}\rangle
\end{align}$$
Then:
$$\begin{align}
\Delta m_{l}=2,\ \Delta m_{s}=0,\ |l-2|\leq l^{'}\leq l+2
\end{align}$$
Know that $r^{(2)}_{2}$ is even, then we must have $\Delta l$ even. So:
$$\Delta l=0,\pm 2$$
For $r^{(2)}_{-2}$, we have:
$$\begin{align}
\bra{n^{'},l^{'},m_{l}^{'},m_{s}^{'}} r^{(2)}_{-2}\ket{n,l,m_{l},m_{s}}  & \propto \delta_{m_{s},m_{s}^{'}} \bra{2,l,-2,m_{l}} l^{'},m_{l}^{'}\rangle
\end{align}$$
Then:
$$\Delta m_{l}=-2,\ \Delta m_{s}=0,\ |l-2|\leq l^{'}\leq l+2$$
Since $r^{(2)}_{-2}$ is even, we must have $\Delta l$ even. So:
$$\Delta l=0,\pm 2$$
In conclusion, $\Delta m_{l}=\pm 2,\ \Delta m_{s}=0,\ \Delta l=\pm 2,0$. 
# Sakurai 5.18

Without loss of generality, let $\mathbf{B}\parallel  \hat{\mathbf{z}}$. We can choose the gauge such that:
$$\mathbf{A}= \frac{1}{2}B(-y \hat{\mathbf{x}}+ x  \hat{\mathbf{y}})$$
Then the diamagnetism hamiltonian is:
$$H_{L}= \frac{e^{2}}{8mc^{2}}B^{2}(x^{2}+y^{2})$$
For the ground state, we restrict to the subspace with $n=1,j= \frac{1}{2}$. We switch to the $\{ \ket{n,l,m_{l},m_{s}} \}$ basis for convenience. Then $l=0,\ m_{l}=0$. Since $x^{2}+y^{2}$ does not operate on spins, its matrix is diagonal in $m_{s}$. Then the matrix is diagonalized. We need:
$$\begin{align}
\bra{1s,m_{l}=0}(x^{2}+y^{2})\ket{1s,m_{l}=0} & = \langle r^{2}\sin ^{2}\theta \rangle \\
 & =\bra{1s} r^{2}\ket{1s} \bra{0,0} \sin ^{2}\theta \ket{0,0} 
\end{align}  $$
We have:
$$\begin{align}
\bra{0,0} \sin ^{2}\theta \ket{0,0}  & = \int_{S^{2}}d\Omega \frac{1}{4\pi}\sin ^{2}\theta \\
 & = 2\pi \cdot \frac{1}{4\pi}\int_{0}^{\pi}d\theta \sin ^{3}\theta \\
 & = -\frac{1}{2}\int d(\cos \theta)(1-\cos ^{2}\theta) \\
 & = \frac{2}{3}
\end{align}$$
We then compute:
$$\begin{align}
\bra{1s} r^{2}\ket{1s}  & = \frac{1}{\pi a_{0}^{3}}\int_{\mathbb{R}^{2}}dr r^{2} \cdot r^{2} e^{-2r/a_{0}} \\
 & = \frac{1}{\pi a_{0}^{3}}  \frac{4!}{\left( \frac{2}{a_{0}} \right)^{5}} \\
 & = \frac{3}{4\pi}a_{0}^{2}
\end{align}$$
So:
$$\begin{align}
\langle H_{L}\rangle & = \frac{e^{2}}{8mc^{2}}B^{2} \frac{1}{2\pi}a_{0}^{2}
\end{align}$$
Then:
$$\chi= - \frac{e^{2}}{8mc^{2}\pi}a_{0}^{2}$$
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
![[Drawing 2026-03-15 02.38.53.excalidraw|200]]
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

![[Drawing 2026-03-15 03.30.40.excalidraw|300]]
## (b)

We know that the E1 transitions are induced by:
$$d=-|e|\mathbf{r}$$
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
The field should be much smaller than this value. Let's say only under 1 percent is good. So $B< 0.2 T$ is good.


