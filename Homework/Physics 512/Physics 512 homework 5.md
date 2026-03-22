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
Then the first order energy shift is $$
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

