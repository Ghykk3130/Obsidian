# Sakurai 5.1
## (a)

We take $b$ as a tuning parameter. First, observe that:
$$\Delta_{0}^{(1)}= \bra{0^{(0)}} x\ket{0^{(0)}} =0$$
because $\ket{0^{(0)}}$ has even parity, and $x$ is odd. Then we calculate:
$$\begin{align}
\Delta_{0} ^{(2)} & = \sum_{n\neq 0} \frac{|\bra{0^{(0)}} x\ket{n^{(0)}} |^{2}}{E_{0}^{(0)}-E_{n}^{(0)}}
\end{align}$$
We have:
$$\begin{align}
\bra{0^{(0)}} x \ket{n^{(0)}}  & = \bra{0^{(0)}}  \sqrt{ \frac{\hbar}{2m\omega} }(a^{\dagger}+a)\ket{n^{(0)}}  \\
 & = \sqrt{ \frac{\hbar}{2m\omega} } \bra{0^{(0)}} (\sqrt{ n+1 }\ket{n+1^{(0)}} + \sqrt{ n }\ket{n-1^{(0)}} ) \\
  & = \sqrt{ \frac{\hbar}{2m\omega} } \delta_{n,1}
\end{align}$$
Therefore:
$$\begin{align}
\Delta_{0}^{(2)} & = \frac{\hbar}{2m\omega} \frac{1}{\frac{1}{2}\hbar \omega- \frac{3}{2}\hbar \omega}= - \frac{1}{2m\omega^{2}}
\end{align}$$
The energy correction is:
$$b^{2} \Delta_{0}^{(2)}= - \frac{b^{2}}{2m\omega^{2}}$$
## (b)

The Hamiltonian is given by:
$$\begin{align}
H & = \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2}+bx \\
 & = \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}\left( x+ \frac{b}{m\omega^{2}} \right)^{2}- \frac{b^{2}}{2m\omega^{2}}
\end{align}$$
Then clearly, if $\langle x\ket{n^{(0)}}$ are the eigensolutions to $\frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2}$, then $\bra{x+ \frac{b}{m\omega^{2}}}n^{(0)}\rangle$ are the eigensolutions to $\frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}\left( x+ \frac{b}{m\omega^{2}} \right)^{2}- \frac{b^{2}}{2m\omega^{2}}$. Then new eigenenergies are clearly:
$$E_{n}= \left( n+ \frac{1}{2} \right)\hbar \omega- \frac{b^{2}}{2m\omega^{2}}$$
The energy shift is clearly consistent with our calculation in part a).

# Sakurai 5.3

Clearly, the eigenfunctions are given by:
$$\psi_{n_{x},n_{y}}(x)= \frac{2}{L}\sin\left( \frac{n_{x}\pi}{L}x \right)\sin\left( \frac{n_{y}\pi}{L}y \right)$$
Know that the eigenenergy is:
$$E_{n_{x},n_{y}}= \frac{\hbar^{2}}{2m}\left( \frac{\pi}{L} \right)^{2}(n_{x}^{2}+n_{y}^{2})$$
So the ground state corresponds to $n_{x}=1,\ n_{y}=1$. The first excited states correspond to $n_{x}=1,\ n_{y}=2\text{ or }n_{x}=2,\ n_{y}=1$. Explicitly:
$$\begin{align}
 & \text{Ground state: }\psi_{1,1}(x,y)= \frac{2}{L}\sin\left( \frac{\pi}{L}x \right)\sin\left( \frac{\pi}{L}y \right) \\
 & \text{First excited states: } \psi_{2,1}(x,y)=\frac{2}{L} \sin\left( \frac{2\pi}{L}x \right)\sin\left( \frac{\pi}{L}y \right)\text{, }\psi_{1,2}(x,y)= \frac{2}{L} \sin\left( \frac{\pi}{L}x \right)\sin\left( \frac{2\pi}{L}y \right)
\end{align}$$
The zeroth order energy eigenfunction for the ground state is:
$$\bra{x,y} 1,1^{(0)}\rangle= \frac{2}{L}\sin\left(  \frac{\pi}{L}x \right)\sin\left( \frac{\pi}{L}y \right)$$
We have:
$$\begin{align}
 \Delta_{1,1}^{(0)} & = \frac{4}{L^{2}}\int_{[0,L]^{2}} dx dy \sin ^{2}\left( \frac{\pi}{L}x \right) \sin ^{2}\left(  \frac{\pi}{L}y \right)xy \\ & = \frac{4}{L^{2}}\left( \int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi}{L}x \right) \right)
\end{align}$$
It suffices to compute:
$$\begin{align}
\int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi}{L}x \right) & = \int dx x \frac{1-\cos\left( \frac{2\pi}{L}x \right)}{2}
\end{align}$$
We have:
$$\begin{align}
 \int_{0}^{L}dx x \cos\left( \frac{2\pi}{L}x \right) & = \int dx x \cos\left( \frac{2\pi}{L}\lambda x \right)\text{ with }\lambda=1 \\
 & = \frac{L}{2\pi}\int dx \frac{\partial}{\partial \lambda}\sin\left( \frac{2\pi}{L}\lambda x \right) \\
 & = \frac{L}{2\pi} \frac{\partial}{\partial \lambda}\left[  \frac{L}{2\pi \lambda}(\cos(2\pi \lambda)-1) \right] \\
 & = \left( \frac{L}{2\pi} \right)^{2}\left[ - \frac{1}{\lambda^{2}}(\cos_{2}\pi \lambda-1)- 2\pi \frac{1}{\lambda}\sin(2\pi \lambda) \right]\text{ with }\lambda=1 \\
 & = 0
\end{align}$$
Then:
$$\begin{align}
\int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi}{L}x \right) & = \int dx \frac{x}{2}= \frac{L^{2}}{4}
\end{align}$$
Therefore:
$$\begin{align}
\Delta_{1,1}^{(0)} & = \frac{4}{L^{2}}\left( \frac{L^{2}}{4} \right)^{2} = \frac{L^{2}}{4}
\end{align}$$
The first order energy shift of the ground state is $\lambda \frac{L^{2}}{4}$.


