# Sakurai 5.4
## (a)

The hamiltonian is additive:
$$H=\left( \frac{p_{x}^{2}}{2m}+\frac{1}{2}m\omega^{2}x^{2} \right)+\left( \frac{p_{y}^{2}}{2m}+ \frac{1}{2}m\omega^{2} y^{2}\right)$$
Therefore the Fock state $\ket{n_{x}}\otimes \ket{n_{y}}$ would solve the Schrodinger equation. Then eigen energy is:
$$E= \left( n_{x}+ \frac{1}{2} \right)\hbar \omega+ \left( n_{y}+ \frac{1}{2} \right)\hbar \omega=(n_{x}+n_{y}+1)\hbar \omega$$
The lowest energy is $\hbar \omega$, with no degeneracy. The second lowest level is $2\hbar \omega$, with degeneracy $g=2$. The third lowest level is $3\hbar \omega$, with degeneracy $g=3$.
## (b)

Set $\hbar=1$. 

**For $E=\hbar \omega$:**

we compute:
$$\begin{align}
\bra{0,0} xy\ket{0,0} = \bra{0} x\ket{0} \bra{0} y\ket{0} =0
\end{align}$$
This is because $x,y$ are odd. Then the energy shift is $\Delta E=0$. Next we need $\bra{n_{x},n_{y}} xy\ket{0,0}= \bra{n_{x}}x\ket{0}\bra{n_{y}}y\ket{0}$. Know that $x= \sqrt{ \frac{1}{2m\omega} }(a^{\dagger}+a)$, we obtain:
$$\bra{n_{x}} x \ket{0} = \bra{n_{x}}  \sqrt{ \frac{1}{2m\omega} }(a^{\dagger}+a)\ket{0} = \sqrt{ \frac{1}{2m\omega} } \delta_{n_{x},1}$$
Therefore:
$$\bra{n_{x},n_{y}} xy\ket{0,0} = \frac{1}{2m\omega}\delta_{n_{x},1}\delta_{n_{y},1}$$
It suffices to consider $n_{x}=1,\ n_{y}=1$. Know that $E_{0,0}-E_{1,1}=-2\omega$. Then the perturbed ket is:
$$\ket{0,0^{'}} = \ket{0,0}- \frac{\delta}{4}\ket{1,1}  $$
**For $E=2\hbar \omega$:**

Now restrict to the basis $\{ \ket{1,0},\ket{0,1} \}$. Know that:
$$\begin{align}
\bra{1,0} xy\ket{1,0} =\bra{1} x\ket{1} \bra{0} y\ket{0} =0=\bra{0,1} xy\ket{0,1}   
\end{align}$$
since $x,y$ are odd. Next we have:
$$\begin{align}
\bra{1,0} xy \ket{0,1}  & = \bra{1} x \ket{0} \bra{0} y\ket{1}  \\
 & = \frac{1}{2m\omega}\bra{1} (a^{\dagger}_{x}+a_{x})\ket{0} \bra{0} (a_{y}^{\dagger}+a_{y})\ket{1}  \\
 & = \frac{1}{2m\omega} 
\end{align}$$
Then:
$$xy \overset{\wedge}{=}\begin{pmatrix}
0 & \frac{1}{2m\omega} \\
\frac{1}{2m\omega} & 0
\end{pmatrix}$$
The eigen equation is:
$$\lambda^{2}-\frac{1}{4m^{2}\omega^{2}}=0\implies \lambda= \pm \frac{1}{2m\omega }$$
Then the first order energy shift is $\Delta E= \pm \frac{\delta}{2}\hbar \omega$. For $\Delta E= \frac{\delta}{2}\hbar \omega$, we have the eigenvector $\frac{1}{\sqrt{ 2 }} \begin{pmatrix}1 \\ 1\end{pmatrix}$. For $\Delta E= - \frac{\delta}{2}\hbar \omega$, we have the eigenvector $\frac{1}{\sqrt{ 2 }} \begin{pmatrix}1 \\ -1\end{pmatrix}$. So the unperturbed kets should be $\frac{1}{\sqrt{ 2 }}(\ket{1,0}+\ket{0,1}),\ \frac{1}{\sqrt{ 2 }}(\ket{1,0}-\ket{0,1})$.

**For $E=3\hbar \omega$:**

Now restrict to the basis $\{ \ket{2,0},\ket{0,2},\ket{1,1} \}$. Similarly, by parity selection rule, only $\bra{1,1}xy \ket{2,0}, \bra{1,1}xy\ket{0,2}$ and their conjugates are nonvanishing. We have:
$$\begin{align}
\bra{1} x\ket{2}  & = \bra{1}  \sqrt{ \frac{1}{2m\omega} }(a^{\dagger}+a)\ket{2} = \sqrt{ \frac{1}{m\omega} } \\
\bra{1} y\ket{0}  & = \bra{1}  \sqrt{ \frac{1}{2m\omega} }(a^{\dagger}+a)\ket{0} = \sqrt{ \frac{1}{2m\omega} }
\end{align}$$
Then:
$$\bra{1,1} xy\ket{2,0} = \frac{1}{\sqrt{ 2 }m\omega}$$
Similarly, $\bra{1,1}xy\ket{0,2}= \frac{1}{\sqrt{ 2 }m\omega}$. Then the representation is:
$$xy \overset{\wedge}{=}\begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }m\omega} \\
0 & 0 &  \frac{1}{\sqrt{ 2 }m\omega} \\
\frac{1}{\sqrt{ 2 }m\omega} &  \frac{1}{\sqrt{ 2 }m\omega} & 0
\end{pmatrix}$$
The eigen equation is:
$$\begin{align}
 & \lambda\left( \lambda^{2}- \frac{1}{2m^{2}\omega^{2}} \right)- \frac{1}{2m^{2}\omega^{2}}\lambda= \lambda\left( \lambda^{2}- \frac{1}{m^{2}\omega^{2}} \right)=0\implies \lambda=0,\ \pm \frac{1}{m\omega}
\end{align}$$
Then the energy shifts are $\Delta E=0,\ \pm \delta \hbar \omega$. 

For $\Delta E=0$, the eigen vector is $\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\ -1 \\ 0\end{pmatrix}$. For $\Delta E= \delta \hbar \omega$, the eigen vector is $\begin{pmatrix}1 /2  \\ 1 /2 \\ 1/ \sqrt{ 2 }\end{pmatrix}$. For $\Delta E=-\delta \hbar \omega$, the eigen vector is $\begin{pmatrix} - 1 /2 \\ - 1 /2 \\ 1 /\sqrt{ 2 }  \end{pmatrix}$. Then the unperturbed kets are $\frac{1}{\sqrt{ 2 }}(\ket{2,0}-\ket{0,2}),\ \frac{1}{2}\ket{2,0}+ \frac{1}{2}\ket{0,2}+ \frac{1}{\sqrt{ 2 }}\ket{1,1},\ - \frac{1}{2}\ket{2,0}- \frac{1}{2}\ket{0,2}+ \frac{1}{\sqrt{ 2 }}\ket{1,1}$. 
## (c)

We first convert the hamiltonian into a quadratic form:
$$\begin{align}
H & = \frac{p_{x}^{2}}{2m}+ \frac{p_{y}^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2}+ \frac{1}{2}m\omega^{2}y^{2}+ \delta m\omega^{2}xy \\
 & = \begin{pmatrix}
p_{x} & p_{y} & x & y 
\end{pmatrix}\begin{pmatrix}
 \frac{1}{2m} &  0 & 0 & 0 \\
0 &  \frac{1}{2m} & 0 & 0 \\
0 & 0 &  \frac{1}{2}m\omega^{2} &  \frac{1}{2}\delta m\omega^{2}  \\
0 & 0 &  \frac{1}{2}\delta m\omega^{2} &  \frac{1}{2}m\omega^{2}
\end{pmatrix} \begin{pmatrix}
p_{x} \\
p_{y} \\
x \\
y
\end{pmatrix}
\end{align}$$
We observe that the matrix is diagonalizable. We first diagonalize the block on the lower left. We find the eigen values:
$$\begin{align}
 & \left( \frac{1}{2}m\omega^{2}-\lambda \right)^{2}- \left( \frac{1}{2}\delta m\omega^{2} \right)^{2}=0\implies \lambda= \frac{1}{2}m\omega^{2}\pm \frac{1}{2}\delta m\omega^{2}
\end{align}$$
The eigen vectors are $\begin{pmatrix} \frac{1}{\sqrt{ 2 }} \\  \frac{1}{\sqrt{ 2 }} \end{pmatrix},\ \begin{pmatrix} \frac{1}{\sqrt{ 2 }} \\ - \frac{1}{\sqrt{ 2 }} \end{pmatrix}$. Then we have:
$$\begin{align}
\begin{pmatrix}
 \frac{1}{2m} &  0 & 0 & 0 \\
0 &  \frac{1}{2m} & 0 & 0 \\
0 & 0 &  \frac{1}{2}m\omega^{2} &  \frac{1}{2}\delta m\omega^{2}  \\
0 & 0 &  \frac{1}{2}\delta m\omega^{2} &  \frac{1}{2}m\omega^{2}
\end{pmatrix}= P\ \text{diag}\left( \frac{1}{2m}, \frac{1}{2m},  \frac{1}{2}m\omega^{2}+ \frac{1}{2}\delta m\omega^{2},  \frac{1}{2}m\omega^{2}- \frac{1}{2}\delta m\omega^{2} \right)P^{\dagger}
\end{align}$$
where:
$$P= \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 &  \frac{1}{\sqrt{ 2 }} &  \frac{1}{\sqrt{ 2 }} \\
0 & 0 &  \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}$$
Since the block on the top left is a scalar, it is always a scalar under any basis. So we can rechoose our $P$:
$$P=\begin{pmatrix}
\frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} & 0 & 0 \\
\frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }} & 0 & 0 \\
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 2 }}
\end{pmatrix}$$
Set $X= \frac{x+y}{\sqrt{ 2 }},\ Y= \frac{x-y}{\sqrt{ 2 }},\ p_{X}= \frac{p_{x}+p_{y}}{\sqrt{ 2 }},\ p_{Y}= \frac{p_{x}-p_{y}}{\sqrt{ 2 }}$. Then the hamiltonian is:
$$H= \frac{p_{X}^{2}}{2m}+ \frac{p_{Y}^{2}}{2m}+ \frac{1}{2}m\omega^{2}(1+\delta)X^{2}+ \frac{1}{2}m\omega^{2}(1-\delta)Y^{2}$$
Then the energy levels are clearly:
$$E= \left( n_{X}+ \frac{1}{2} \right)\hbar \sqrt{ 1+\delta }\omega+ \left( n_{Y}+ \frac{1}{2} \right)\hbar \sqrt{ 1-\delta }\omega$$
For $n_{X}=n_{Y}=0$, we have:
$$E= \frac{1}{2}\hbar \sqrt{ 1+\delta }\omega+ \frac{1}{2}\hbar \sqrt{ 1-\delta }\omega \approx \frac{1}{2}\hbar \omega$$
This is consistent with the case where $n_{x}=n_{y}=0$, and the energy shift is approximately zero. Adopting the ideas from second quantization, the ket $\ket{n_{X}=0,\ n_{Y}=0}$ is a vacuum ket. While $\ket{n_{x}=0,\ n_{y}=0}$ is also a vacuum ket, we know that the states are also consistent.
 
For $n_{X}=1,n_{Y}=0$, or $n_{X}=0, n_{Y}=1$, we have:
$$\begin{align}
E & = \frac{3}{2}\sqrt{ 1+\delta }\hbar \omega+ \frac{\hbar}{2}\sqrt{ 1-\delta }\omega  \\
 & \approx \frac{3}{2}\left( 1+ \frac{\delta}{2} \right)\hbar \omega+ \frac{1}{2}\left( 1- \frac{\delta}{2} \right)\hbar \omega \\
 & = 2\hbar \omega+ \frac{\delta}{2}\hbar \omega
\end{align}$$
or
$$\begin{align}
E & = \frac{1}{2}\sqrt{ 1+\delta }\hbar \omega+ \frac{3}{2}\hbar \omega \sqrt{ 1-\delta } \\
 & \approx \frac{1}{2}\left( 1+ \frac{\delta}{2} \right)\hbar \omega+ \frac{3}{2}\left( 1- \frac{\delta}{2} \right)\hbar \omega \\
 & = 2\hbar \omega- \frac{\delta}{2}\hbar \omega
\end{align}$$
The energies are consistent with our previous analysis. To obtain the kets, we first observe that:
$$\begin{align}
c_{X}^{\dagger} & =\sqrt{ \frac{m\omega}{2} }X+ \frac{i}{\sqrt{ 2m\omega }}p_{X} \\
 & = \sqrt{ \frac{m\omega }{2} } \frac{x+y}{\sqrt{ 2 }}+ \frac{i}{\sqrt{ 2m\omega }} \frac{p_{x}+p_{y}}{\sqrt{ 2 }} \\
 & =  \frac{1}{\sqrt{ 2 }} a_{x}^{\dagger}+ \frac{1}{\sqrt{ 2 }} a_{y}^{\dagger}
\end{align}$$
Similarly,
$$c^{\dagger}_{Y}= \frac{1}{\sqrt{ 2 }}a^{\dagger}_{x}- \frac{1}{\sqrt{ 2 }}a^{\dagger}_{y}$$
Therefore:
$$\begin{align}
\ket{n_{X}=1,n_{Y}=0}  & = c_{X}^{\dagger}\ket{0}  \\
 & = \frac{1}{\sqrt{ 2 }}\ket{n_{x}=1,n_{y}=0} + \frac{1}{\sqrt{ 2 }}\ket{n_{x}=0,n_{y}=1} \\
\ket{n_{X}=0,n_{Y}=1}  & = c_{Y}^{\dagger}\ket{0}  \\
 & =  \frac{1}{\sqrt{ 2 }}\ket{n_{x}=1,n_{y}=0} - \frac{1}{\sqrt{ 2 }}\ket{n_{x}=0,n_{y}=1}
\end{align}$$
Clearly, the states are consistent with our previous results from perturbation. 

For $n_{X}=2,n_{Y}=0$ or $n_{X}=0,n_{Y}=2$ or $n_{X}=n_{Y}=1$, we have:
$$\begin{align}
E & = \frac{5}{2}\hbar \sqrt{ 1+\delta }\omega+ \frac{\hbar}{2}\sqrt{ 1-\delta }\omega \\
 & \approx 3\hbar \omega+\delta \hbar \omega
\end{align}$$
or
$$E= \frac{\hbar}{2}\hbar\sqrt{ 1+\delta }\omega+ \frac{5}{2}\hbar\sqrt{ 1-\delta }\omega \approx {3}\hbar \omega-\delta \hbar \omega$$
or 
$$E= \frac{3}{2}\hbar \sqrt{ 1+\delta }\omega+ \frac{3}{2}\hbar \sqrt{ 1-\delta }\omega \approx 3\hbar \omega$$
The corresponding kets are:
$$\begin{align}
  \ket{n_{X}=2,n_{Y}=0} & = \frac{c_{X}^{\dagger}}{\sqrt{ 2 } }\ket{n_{X}=1,n_{Y}=0} = \frac{1}{2}\ket{n_{x}=2,n_{y}=0} + \frac{1}{\sqrt{ 2 }}\ket{n_{x}=1,n_{y}=1} + \frac{1}{2}\ket{n_{x}=0,n_{y}=2} \\
\ket{n_{X}=0,n_{Y}=2}  & = \frac{c_{Y}^{\dagger}}{\sqrt{ 2 }}\ket{n_{X}=0,n_{Y}=1} =  - \frac{1}{2}\ket{n_{x}=2,n_{y}=0}- \frac{1}{2}\ket{n_{x}=0,n_{y}=2}+ \frac{1}{\sqrt{ 2 }}\ket{n_{x}=1,n_{y}=1} \\
\ket{n_{X}=1,n_{Y}=1} & = c_{Y}^{\dagger}\ket{n_{X}=1,n_{Y}=0} = \frac{1}{\sqrt{ 2 }}(\ket{n_{X}=2,n_{y}=0}-\ket{n_{x}=0,n_{y}=2})
\end{align}$$
These results are all consistent with perturbation.
# Sakurai 5.10
## (a)

Obviously, the eigen energy is:
$$E= \frac{\hbar^{2}}{2m}(k_{x}^{2}+k_{y}^{2}),\ k_{i}= \frac{\pi n_{i}}{a}$$
The first lowest state corresponds to $E=0$. There is no degeneracy. The second lowest state corresponds to $E= \frac{\hbar^{2}\pi^{2}}{2a^{2}m}$. The degeneracy is $2$. The third lowest state corresponds to $E= \frac{\hbar^{2}\pi^{2}}{a^{2}m}$. There is no degeneracy.
## (b)
### (i)

For the first lowest state, we have $n_{x}=n_{y}=0$. For simplicity, we shift the potential, so that $V=0$ in $\left[ - \frac{a}{2}, \frac{a}{2} \right]^{2}$. The eigen energy should be unchanged. Then by parity selection rule we have:
$$\bra{0,0} xy\ket{0,0} =\bra{0} x\ket{0} \bra{0} y\ket{0} =0$$
Therefore, we resort to second order perturbation, and the energy shift is of order $\lambda^{2}$ in this case.

For the second lowest state, we have $n_{x}=1,n_{y}=0$ or $n_{x}=0,n_{y}=1$. By parity selection rule, the only non vanishing matrix elements are $\bra{1,0}xy\ket{0,1}$ and its conjugate. It suffices to compute:
$$\begin{align}
\bra{1} x\ket{0}  & = \frac{2}{a}\int_{- \frac{a}{2}}^{\frac{a}{2}} dx x \cos\left( \frac{\pi}{a}x \right)\sin\left( \frac{2\pi}{a}x \right) \\
 & = \frac{1}{a}\int_{- \frac{a}{2}}^{\frac{a}{2}}dx x\left( \sin\left( \frac{3\pi}{a}x \right)+\sin\left( \frac{\pi}{a}x \right) \right) \\
\end{align}$$
We have:
$$\begin{align}
\int_{- \frac{a}{2}}^{\frac{a}{2}}dx x \sin\left( \frac{3\pi}{a}x \right) & = \left[ -x\cos\left( \frac{3\pi}{a} x\right) \frac{a}{3\pi}\right]_{- \frac{a}{2}}^{\frac{a}{2}}+ \int dx \cos\left( \frac{3\pi}{a}x \right) \frac{a}{3\pi} \\
 & = -2\left( \frac{a}{3\pi} \right)^{2}  \\
\int_{- \frac{a}{2}}^{\frac{a}{2}}dx x \sin\left( \frac{\pi}{a}x \right) & =\left[  -x \cos\left( \frac{\pi}{a}x \right) \frac{a}{\pi} \right]_{- \frac{a}{2}}^{\frac{a}{2}}+\int dx \cos\left( \frac{\pi}{a}x \right) \frac{a}{\pi} \\
 & = 2 \left( \frac{a}{\pi} \right)^{2}
\end{align}$$
Then:
$$\bra{1} x\ket{0} = \frac{16}{9} \frac{a}{\pi^{2}}$$
Similarly, $\bra{0}y\ket{1}= \frac{16}{9} \frac{a}{\pi^{2}}$. Then:
$$xy \overset{\wedge}{=}\begin{pmatrix}
0 & \frac{16}{9} \frac{a}{\pi^{2}} \\
\frac{16}{9} \frac{a}{\pi^{2}} & 0
\end{pmatrix}$$
The eigen values are $\pm \frac{16}{9} \frac{a}{\pi^{2}}$. The eigen shifts are $\Delta E= \pm \frac{16}{9} \frac{a}{\pi^{2}}\lambda$, linear in $\lambda$.

For the third lowest state, we have $n_{x}=1,n_{y}=1$. By parity selection rule, we have:
$$\bra{1,1} xy\ket{1,1} =\bra{1} x\ket{1} \bra{1} y\ket{1} =0$$
Then we resort to second order perturbation, and conclude that the energy shift is quadratic in $\lambda$.
### (ii)

As argued above, if we keep the $\mathcal{O}(\lambda)$ terms, the energy shift for the lowest level is $0$. The energy shift for the second lowest level is $\pm \frac{16}{9} \frac{a}{\pi^{2}}\lambda$. The energy shift for the third lowest level is $0$. 
### (iii)

![[Drawing 2026-03-23 21.34.08.excalidraw|500]]
# Sakurai 5.37

We rotate the $\ket{+z}$ state to get the $\ket{\uparrow}$ defined by $\mathbf{B}$. The rotation is given by:
$$\mathscr{D}(R)=\mathscr{D}(R_{z}(\phi)R_{y}(\theta))= \exp\left( - \frac{i}{\hbar}J_{z}\phi \right)\exp\left( - \frac{i}{\hbar}J_{y}\theta \right)$$
Know that:
$$\exp\left( - \frac{i}{\hbar}J_{y}\theta \right)=\cos \frac{\theta}{2}-i \sigma_{y}\sin \frac{\theta}{2} \overset{\wedge}{=} \begin{pmatrix}
\cos \frac{\theta}{2} &  - \sin \frac{\theta}{2} \\
\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}$$
Then:
$$\begin{align}
\ket{\uparrow} &  \overset{\wedge}{=} \exp\left( - \frac{i}{\hbar}J_{z}\phi \right) \begin{pmatrix}
\cos \frac{\theta}{2} & - \sin \frac{\theta}{2} \\
\sin \frac{\theta}{2} &  \cos \frac{\theta}{2} 
\end{pmatrix} \begin{pmatrix}
1 \\
0
\end{pmatrix} \\
 & = \begin{pmatrix}
e^{- \frac{i\phi}{2}} & 0 \\
0 & e^{ \frac{i\phi}{2}}
\end{pmatrix} \begin{pmatrix}
\cos \frac{\theta}{2} \\
\sin \frac{\theta}{2}
\end{pmatrix} \\
 & = \begin{pmatrix}
e^{- \frac{i\phi}{2}}\cos \frac{\theta}{2} \\
e^{ \frac{i\phi}{2}}\sin \frac{\theta}{2}
\end{pmatrix}
\end{align}$$
We have that:
$$\begin{align}
 \frac{\partial}{\partial B}\ket{\uparrow(B,\theta,\phi)}  & = 0 \\
\frac{\partial}{\partial \theta}\ket{\uparrow}  & = \begin{pmatrix}
- \frac{1}{2}e^{- \frac{i\phi}{2}}\sin \frac{\theta}{2} \\
 \frac{1}{2}e^{ ^{ \frac{i\phi}{2}}\cos \frac{\theta}{2} } 
\end{pmatrix} \\
\frac{\partial}{\partial \phi}\ket{\uparrow}  & = \begin{pmatrix}
- \frac{i}{2} e^{- \frac{i\phi}{2}}\cos \frac{\theta}{2} \\
 \frac{i}{2}e^{i \frac{\phi}{2}}\sin \frac{\theta}{2}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
 & A_{\uparrow B}=0 \\
 & A_{\uparrow \theta}=i \begin{pmatrix}
e^{ \frac{i\phi}{2}{} } \cos \frac{\theta}{2} & e^{ - \frac{i\phi}{2}}\sin \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix}
- \frac{1}{2B} e^{- \frac{i\phi}{2}}\sin \frac{\theta}{2} \\
 \frac{1}{2B} e^{\frac{i\phi}{2}} \cos \frac{\theta}{2}
\end{pmatrix}=0 \\
 & A_{\uparrow \phi}=i \begin{pmatrix}
e^{\frac{i\phi}{2}}\cos \frac{\theta}{2}  & e^{- \frac{i\phi}{2}}\sin \frac{\theta}{2} 
\end{pmatrix} \begin{pmatrix}
- \frac{i}{2B\sin \theta} e^{- \frac{i\phi}{2}}\cos \frac{\theta}{2} \\
 \frac{i}{2B\sin \theta}e^{i \frac{\phi}{2}}\sin \frac{\theta}{2}
\end{pmatrix}= \frac{1}{2B\sin \theta}\cos \theta= \frac{\cot \theta}{2B}
\end{align}$$
Then the Berry connection is $\mathbf{A}_{\uparrow}= \frac{\cot \theta}{2B} \hat{\boldsymbol{\phi}}$. Then we compute the Berry phase. Obviously, $\Omega_{\uparrow \theta}, \Omega_{\uparrow \phi}=0$. We have:
$$\begin{align}
\Omega_{\uparrow B} & = \frac{1}{B\sin \theta} \frac{\partial}{\partial \theta}(A_{\uparrow \phi}\sin \theta) \\
 & = - \frac{1}{2B^{2}}
\end{align}$$
Then the Berry phase is:
$$\begin{align}
\gamma_{+} & = \int d\theta d\phi B^{2} \sin \theta \left( - \frac{1}{2B^{2}} \right) \\
 & = - \frac{1}{2}\int d\theta d\phi \sin \theta \\
 & = - \frac{\Omega}{2}
\end{align}$$
Here $\Omega$ should be not be confused with the Berry curvature. It is the solid angle subtended by $\mathbf{B}$. I just ran out of notations. 

# Problem 4

Before the compression, the system is in state $\ket{0}$. By sudden approximation, the state after the compression is $\ket{0}$. Know that the effective angular frequency after the compression is $\sqrt{ \eta }\omega$, then the state at $t>0$ is given approximately by:
$$\ket{\psi(t)} = \bra{0} 0^{'}\rangle \exp\left( - i \frac{1}{2} \sqrt{ \eta }\omega t \right)\ket{0^{'}} + \bra{0} 1^{'} \rangle \exp\left( -i \frac{3}{2}\sqrt{ \eta }\omega t \right)\ket{1^{'}} + \bra{0} 2^{'}\rangle \exp\left( -i \frac{5}{2}\sqrt{ \eta } \omega t \right)\ket{2^{'}} $$
where $\ket{n^{'}}$ denote the eigenstates after the compression. Since $\ket{0}$ is even, $\ket{1^{'}}$ is odd, we have $\bra{0}1^{'}\rangle=0$. Then:
$$\ket{\psi(t)} = \bra{0} 0^{'}\rangle \exp\left( - i \frac{1}{2} \sqrt{ \eta }\omega t \right)\ket{0^{'}} + \bra{0} 2^{'}\rangle \exp\left( -i \frac{5}{2}\sqrt{ \eta } \omega t \right)\ket{2^{'}} $$
We then evaluate the projection components. Set $\hbar=1$ for simplicity.
$$\begin{align}
\bra{0} 0^{'}\rangle & = \int_{\mathbb{R}}dx \left(  \frac{m\omega}{\pi} \right)^{1/4}\exp\left( - \frac{m\omega x^{2}}{2} \right)\left(  \frac{m\sqrt{ \eta }\omega}{\pi} \right)^{1/4}\exp\left( - \frac{m\sqrt{ \eta }\omega x^{2}}{2} \right) \\
 & = \left( \frac{m\omega}{\pi} \right)^{1/2}\eta^{1/8}\int dx\exp\left( -m\omega\left(  \frac{1}{2}+ \frac{\sqrt{ \eta }}{2} \right)x^{2} \right) \\
 & = \left( \frac{m\omega}{\pi} \right)^{1/2}\eta^{1/8}\sqrt{  \frac{\pi}{m\omega(1+\sqrt{ \eta }) /2} } \\
 & = \sqrt{ \frac{2 \eta^{1/4}}{1+\eta^{1/2}} }
\end{align}$$
$$\begin{align}
\bra{0} 2^{'}\rangle & = \int_{\mathbb{R}}dx \left( \frac{m\omega}{\pi} \right)^{1/4}\exp\left( - \frac{m\omega x^{2}}{2} \right) \frac{1}{\sqrt{ 8 }}\left(  \frac{m\omega \sqrt{ \eta }}{\pi} \right)^{1/4}(4m\omega \sqrt{ \eta }x^{2}-1)\exp\left( - \frac{m\omega \sqrt{ \eta }}{2}x^{2} \right) \\
 & = \frac{1}{\sqrt{ 8 }}\left( \frac{m\omega}{\pi} \right)^{1/2}\eta^{1/8}\int dx(4m\sqrt{ \eta }\omega x^{2}-1)\exp\left( -m\omega\left(  \frac{1}{2}+ \frac{\sqrt{ \eta }}{2} \right)x^{2} \right)
\end{align}$$
Now it suffices to evaluate:
$$\begin{align}
\int_{\mathbb{R}}dx x^{2} e^{-x^{2}} & = \frac{1}{2}\int_{0}^{\infty}d(x^{2}) (x^{2})^{1/2}e^{-x^{2}} \\
 & = \frac{1}{4}\Gamma\left( \frac{3}{2} \right) \\
 & = \frac{\sqrt{ \pi }}{8}
\end{align}$$
Then:
$$\begin{align}
\bra{0} 2^{'}\rangle & = \frac{1}{\sqrt{ 8 }}\left( \frac{m\omega}{\pi} \right)^{1/2}\eta^{1/8} \left[ 4m\sqrt{ \eta }\omega\left( \frac{1}{m\omega(1+\sqrt{ \eta })/2 } \right)^{3/2} \frac{\sqrt{ \pi }}{8}- \left( \frac{1}{m\omega(1+\sqrt{ \eta }) /2} \right)^{1/2}\sqrt{ \pi }   \right] \\
 & = \left[ \sqrt{ 2 } \sqrt{ \frac{\pi}{m\omega} }\left( \frac{\eta^{1/3}}{1+\eta^{1/2}} \right)^{3/2}- \sqrt{ 2 } \sqrt{ \frac{\pi}{m\omega} }\left( \frac{1}{1+\sqrt{ \eta }} \right)^{1/2} \right] \frac{1}{\sqrt{ 8 }}\left( \frac{m\omega}{\pi} \right)^{1/2}\eta^{1/8} \\
 & = \frac{1}{2}\left( \frac{\eta^{5/12}}{1+\eta^{1/2}} \right)^{3/2}- \frac{1}{2}\left( \frac{\eta^{1/4}}{1+\eta^{1/2}} \right)^{1/2}
\end{align}$$
If we denote $\bra{0}0^{'}\rangle=A,\ \bra{0}2^{'}\rangle=C,\ \frac{1}{2}\sqrt{ \eta }\omega=\omega_{A},\ \frac{3}{2}\sqrt{ \eta }\omega=\omega_{C}$, then $\ket{\psi}=Ae^{-i\omega_{A}t}\ket{0^{'}}+Ce^{-i\omega_{C}t}\ket{2^{'}}$. Know that:
$$x= \sqrt{ \frac{1}{2m\omega} }(a^{\dagger}+a)\implies x^{2}= \frac{1}{2m\omega}(a^{\dagger{2}}+a^{2}+a^{\dagger}a+aa^{\dagger})$$
We first compute:
$$\begin{align}
\bra{\psi} a^{\dagger 2}   \ket{\psi}  & = (Ae^{i\omega_{A}t}\bra{0^{'}} +Ce^{i\omega_{C}t}\bra{2^{'}}  )a^{\dagger 2}(Ae^{-i\omega_{A}t}\ket{0^{'}} +Ce^{-i\omega_{C}t}\ket{2^{'}} ) \\ & =CA e^{i(\omega_{C}-\omega_{A})t} \bra{2^{'}} a^{\dagger 2}\ket{0^{'}}    \\

 & = CA e^{i(\omega_{C}-\omega_{A}t)}\sqrt{ 2 } 
\end{align}$$
$$\begin{align}
\bra{\psi} a^{2}\ket{\psi}  & = AC e^{i(\omega_{A}-\omega_{C})t}\bra{0^{'}} a^{2}\ket{2^{'}}  \\
 & = AC e^{i(\omega_{A}-\omega_{C})t}\sqrt{ 2 }
\end{align}$$
$$\begin{align}
\bra{\psi} a^{\dagger}a \ket{\psi}  & = (Ae^{i\omega_{A}t}\bra{0^{'}} +Ce^{i\omega_{C}t}\bra{2^{'}} )a^{\dagger}a (Ae^{-i\omega_{A}t}+Ce^{-i\omega_{C}t}\ket{2^{'}} ) \\
 & = Ce^{i\omega_{C}t}\sqrt{ 2 }\bra{1^{'}} C e^{-i\omega_{C}t}\ket{1^{'} }\sqrt{ 2 } \\
 & = 2C^{2}  
\end{align}$$
$$\begin{align}
\bra{\psi} aa^{\dagger}\ket{\psi}  & = Ae^{i\omega_{A}t}\bra{1^{'}} A e^{-i\omega_{A}t}\ket{1^{'}}  \\
 & = A^{2} 
\end{align}$$
Then:
$$\begin{align}
\bra{\psi} x^{2}\ket{\psi}  & = \frac{1}{2m\omega}(CAe^{i(\omega_{C}-\omega_{A})t}+AC e^{i(\omega_{A}-\omega_{C})t}+2C^{2}+A^{2}) \\
 & = \frac{1}{2m\omega}(2AC\cos((\omega_{A}-\omega_{C})t)+2C^{2}+A^{2})
\end{align}$$
If we add back $\hbar$, we get:
$$\begin{align}
\bra{\psi} x^{2}\ket{\psi}  & = \frac{\hbar}{2m\omega}(2AC\cos(\sqrt{ \eta }\omega t)+2C^{2}+A^{2})
\end{align}$$
where $A=\sqrt{ \frac{2 \eta^{1/4}}{1+\eta^{1/2}} }, C=\frac{1}{2}\left( \frac{\eta^{5/12}}{1+\eta^{1/2}} \right)^{3/2}- \frac{1}{2}\left( \frac{\eta^{1/4}}{1+\eta^{1/2}} \right)^{1/2}$

