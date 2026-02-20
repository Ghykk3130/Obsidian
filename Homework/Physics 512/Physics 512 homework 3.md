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
 \Delta_{1,1}^{(1)} & = \frac{4}{L^{2}}\int_{[0,L]^{2}} dx dy \sin ^{2}\left( \frac{\pi}{L}x \right) \sin ^{2}\left(  \frac{\pi}{L}y \right)xy \\ & = \frac{4}{L^{2}}\left( \int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi}{L}x \right) \right)
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
 & = \left( \frac{L}{2\pi} \right)^{2}\left[ - \frac{1}{\lambda^{2}}(\cos_{} 2\pi \lambda-1)- 2\pi \frac{1}{\lambda}\sin(2\pi \lambda) \right]\text{ with }\lambda=1 \\
 & = 0
\end{align}$$
Then:
$$\begin{align}
\int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi}{L}x \right) & = \int dx \frac{x}{2}= \frac{L^{2}}{4}
\end{align}$$
Therefore:
$$\begin{align}
\Delta_{1,1}^{(1)} & = \frac{4}{L^{2}}\left( \frac{L^{2}}{4} \right)^{2} = \frac{L^{2}}{4}
\end{align}$$
The first order energy shift of the ground state is $\lambda \frac{L^{2}}{4}$.

Now consider the first excited states. The subspace is 2-fold degenerate. Then we compute:
$$\begin{align}
\bra{1,2} xy\ket{1,2}  & = \bra{1} x\ket{1}\bra{2} y\ket{2}   
\end{align}$$
The by similar techniques, we have:
$$\begin{align}
\bra{1} x\ket{1}  & = \frac{2}{L} \int_{0}^{L}dx x \sin ^{2}\left( \frac{\pi x}{L} \right) \\
 & = \frac{L}{2} 
\end{align}$$
$$\begin{align}
\bra{2} y\ket{2}  & = \frac{2}{L}\int_{0}^{L}dy y \sin ^{2}\left(  \frac{2\pi y}{L} \right) \\
 & = \frac{L}{2}
\end{align}$$
Obviously, $\bra{1,2}xy\ket{1,2}=\bra{1}x\ket{1}\bra{2}y\ket{2}=\bra{1}y\ket{1}\bra{2}x\ket{2}=\bra{2,1}xy\ket{2,1}$. Next we compute:
$$\bra{1,2} xy \ket{2,1} =\bra{1} x\ket{2} \bra{2} y\ket{1}  $$
We have:
$$\begin{align}
\bra{1} x\ket{2}  & = \frac{2}{L}\int_{0}^{L}dx x \sin\left( \frac{\pi x}{L} \right)\sin\left( \frac{2\pi x}{L} \right) \\
 & = \frac{2}{L}\left( - \frac{1}{2}\int dx x \cos \left( \frac{3\pi}{L}x \right)+ \frac{1}{2}\int dx x \cos\left( \frac{\pi x}{L} \right) \right) 
\end{align}$$
We have:
$$\begin{align}
 \int_{0}^{L}dx x \cos\left( \frac{3\pi}{L}x \right) & = \int dx x \cos\left( \frac{3\pi}{L}\lambda x \right)\text{ with }\lambda=1 \\
 & = \frac{L}{3\pi}\int dx \frac{\partial}{\partial \lambda}\sin\left( \frac{3\pi}{L}\lambda x \right) \\
 & = \frac{L}{3\pi} \frac{\partial}{\partial \lambda}\left[  \frac{L}{3\pi \lambda}(\cos(2\pi \lambda)-1) \right] \\
 & = \left( \frac{L}{3\pi} \right)^{2}\left[ - \frac{1}{\lambda^{2}}(\cos_{} 3\pi \lambda-1)- 3\pi \frac{1}{\lambda}\sin(3\pi \lambda) \right]\text{ with }\lambda=1 \\
 & = 2\cdot\left( \frac{L}{3\pi} \right)^{2}
\end{align}$$
Similarly:
$$\int_{0}^{L}dx x \cos\left( \frac{\pi x}{L} \right)= 2\cdot\left( \frac{L}{\pi} \right)^{2}$$
Therefore:
$$\bra{1} x \ket{2} = \frac{2}{L}\left( - \left( \frac{L}{3\pi} \right)^{2}+ \left( \frac{L}{\pi} \right)^{2} \right)= \frac{16}{9} \frac{L}{\pi^{2}}$$
By symmetry, we know $\bra{2}y \ket{1}= \frac{16}{9} \frac{L}{\pi^{2}}$. Then we have:
$$\bra{1,2} xy \ket{2,1} = \left( \frac{16}{9} \frac{L}{\pi^{2}} \right)^{2}= \frac{256}{81} \frac{L^{2}}{\pi^{4}}$$
Again, by symmetry, we know:
$$\bra{2,1} xy \ket{1,2} = \frac{256}{81} \frac{L^{2}}{\pi^{4}}$$
Then:
$$xy  \overset{\wedge}{=} \begin{pmatrix}
\frac{L^{2}}{4} &  \frac{256}{81} \frac{L^{2}}{\pi^{4}} \\
\frac{256}{81} \frac{L^{2}}{\pi^{4}} & \frac{L^{2}}{4}
\end{pmatrix}$$
The eigenequation is:
$$\left( \frac{L^{2}}{4}-\nu \right)^{2}- \left( \frac{256}{81} \frac{L^{2}}{\pi^{4}} \right)=0\implies \nu= \frac{L^{2}}{4}\pm \frac{256}{81} \frac{L^{2}}{\pi^{4}}$$
So the first order energy shifts of the first excited states are $\left(\frac{L^{2}}{4}\pm \frac{256}{81} \frac{L^{2}}{\pi^{4}}\right)\lambda$.
# Sakurai 5.9
## (a)

The subspace is 2-fold degenerate. Treat $\lambda$ as a tuning parameter, we need:
$$\bra{n,1,m^{'}} (x^{2}-y^{2})\ket{n,1,m} $$
Know that:
$$r^{(2)}_{-2}= \frac{\sqrt{ 6 }}{4}(x-iy)^{2},\ r^{(2)}_{2}= \frac{\sqrt{ 6 }}{4}(x+iy)^{2}$$
Therefore:
$$x^{2}-y^{2} \propto r^{(2)}_{2}+ r^{(2)}_{-2}$$
Then the matrix element is given by:
$$\bra{n,1,m^{'}} (x^{2}-y^{2})\ket{n,1,m} \propto \bra{n,1,m^{'}} (r^{(2)}_{2}+ r^{(2)}_{-2})\ket{n,1,m} $$
Know that:
$$\begin{align}
\bra{n,1,m^{'}} r^{(2)}_{2}\ket{n,1,m}  & \propto \bra{1,2,m,2} 1,m^{'}\rangle\text{ is non-zero only when }m=-1,\ m^{'}=1
\end{align}$$
$$\bra{n,1,m^{'}} r^{(2)}_{-2}\ket{n,1,m} \propto \bra{1,2,m,-2}1,m^{'}\rangle\text{ is non-zero only when }m=1,\ m^{'}=-1 $$
Then it suffices to diagonalize:
$$V=\begin{pmatrix}
0 & \bra{1,2,1,-1} 1,-1\rangle \\
\bra{1,2,-1,2} 1,1\rangle & 0
\end{pmatrix}= \begin{pmatrix}
0 & \sqrt{ \frac{3}{5} } \\
\sqrt{ \frac{3}{5} } & 0
\end{pmatrix}$$
where $m^{'}=-1,m=-1$ is on the top left. It's easy to find that the eigenkets are:
$$\ket{\psi_{1}} = \frac{1}{\sqrt{ 2 }}(\ket{n,1,1} + \ket{n,1,-1} ),\ \ket{\psi_{2}} = \frac{1}{\sqrt{ 2 }}(\ket{n,1,1} -\ket{n,1,-1} )$$
Then obviously the degeneracy is removed.
# Sakurai 5.11
## (a)

We compute the eigen energies:
$$\begin{align}
 & \begin{vmatrix}
E_{1}^{0}-E & \lambda \Delta \\
\lambda \Delta & E_{2}^{0} -E
\end{vmatrix} =0\\
\implies & E^{2}-(E_{1}^{0}E_{2}^{0})E+E_{1}^{0}E_{2}^{0}-\lambda^{2}\Delta^{2}=0 \\
\implies & E_{\pm}= \frac{E_{1}^{0}+E_{2}^{0}\pm \sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} }}{2}
\end{align}
$$
To solve for the eigen states:
$$\begin{align}
 & \begin{pmatrix}
E_{1}^{0}-\frac{E_{1}^{0}+E_{2}^{0}\pm \sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} }}{2} & \lambda \Delta \\
\lambda \Delta & E_{2}^{0}-\frac{E_{1}^{0}+E_{2}^{0}\pm \sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} }}{2}
\end{pmatrix}\ket{\psi} =0 \\
\implies & \begin{pmatrix}
\frac{E_{1}^{0}-E_{2}^{0}\mp \sqrt{  \delta }}{2} & \lambda \Delta \\
\lambda \Delta &  \frac{E_{2}^{0}-E_{1}^{0}\mp \sqrt{ \delta }}{2}
\end{pmatrix}\ket{\psi} =0\text{ where }\delta= (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} \\
\implies &  \begin{pmatrix}
\frac{E_{1}^{0}-E_{2}^{0}\pm \sqrt{ \delta }}{2} & \lambda \Delta  \\
0 & 0
\end{pmatrix}\ket{\psi} =0 \\
\implies & \ket{\psi_{\pm}} = \frac{1}{C_{\pm}}\begin{pmatrix}
\lambda \Delta \\
\frac{E_{1}^{0}-E_{2}^{0}\mp \sqrt{ \delta }}{2}
\end{pmatrix}\text{ where }C_{\pm}^{2}= \frac{1}{4}[(E_{1}^{0}-E_{2}^{0})^{2}+\delta\mp 2\sqrt{ \delta }(E_{1}^{0}-E_{2}^{0})^{}] +\lambda^{2}\Delta^{2},\ \delta=(E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2}
\end{align}$$
Or adopting the notation in the book,
$$\begin{align}
 & \ket{\psi_{2}} = \frac{1}{C_{2}}\begin{pmatrix}
\lambda \Delta \\
\frac{E_{1}^{0}-E_{2}^{0}- \sqrt{ \delta }}{2}
\end{pmatrix},\ C_{2}^{2}= \frac{1}{4}[(E_{1}^{0}-E_{2}^{0})^{2}+\delta- 2\sqrt{ \delta }(E_{1}^{0}-E_{2}^{0})]+\lambda^{2}\Delta^{2} \\
 & E_{2}= \frac{E_{1}^{0}+E_{2}^{0}+ \sqrt{ \delta }}{2} \\
  & \ket{\psi_{1}} = \frac{1}{C_{1}}\begin{pmatrix}
\lambda \Delta \\
\frac{E_{1}^{0}-E_{2}^{0}+ \sqrt{ \delta }}{2}
\end{pmatrix},\ C_{1}^{2}= \frac{1}{4}[(E_{1}^{0}-E_{2}^{0})^{2}+\delta+ 2\sqrt{ \delta }(E_{1}^{0}-E_{2}^{0})]+\lambda^{2}\Delta^{2} \\
 & E_{1}= \frac{E_{1}^{0}+E_{2}^{0}- \sqrt{ \delta }}{2}
\end{align}$$
where $\delta=(E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2}$
## (b)

Obviously,
$$\begin{align}
 & \Delta_{1}^{(0)}=0,\ \Delta_{2}^{(0)}=0
\end{align}$$
Since the perturbation operator is zero on the diagonal. Then:
$$\begin{align}
 & \ket{\phi_{1}^{(1)}} = \ket{\phi_{2}^{(0)}}  \frac{V_{21}}{E_{1}^{0}-E_{2}^{0}}= \ket{\phi_{2}^{(0)}}  \frac{\Delta}{E_{1}^{0}-E_{2}^{0}}
\end{align}$$
Similarly,
$$\ket{\phi_{2}^{(1)}} = \ket{\phi_{1}^{(0)}}  \frac{\Delta}{E_{2}^{0}-E_{1}^{0}}$$
So the kets are:
$$\begin{align}
 & \ket{\phi_{1}} = \ket{\phi_{1}^{(0)}} + \ket{\phi_{2}^{(0)}}  \frac{\lambda \Delta}{E_{1}^{0}-E_{2}^{0}}+\mathcal{O}(\lambda^{2}) \\
 &  \ket{\phi_{2}} = \ket{\phi_{2}^{(0)}} + \ket{\phi_{1}^{(0)} } \frac{\lambda \Delta}{E_{2}^{0}-E_{1}^{0} }+ \mathcal{O}(\lambda^{2}) 
\end{align}$$
Next we compute the energy shifts:
$$\begin{align}
 & \Delta_{1}^{(2)}= \frac{|V_{21}|^{2}}{E_{1}^{0}-E_{2}^{0} }= \frac{\Delta^{2}}{E_{1}^{0}-E_{2}^{0}} \\
 & \Delta_{2}^{(2)}= \frac{\Delta^{2}}{E_{2}^{0}-E_{1}^{0}}
\end{align}$$
So:
$$\begin{align}
 & E_{1}= E_{1}^{(0)}+ \frac{\lambda^{2}\Delta^{2}}{E_{1}^{0}-E_{2}^{0}} +\mathcal{O}(\lambda^{3}) \\
 & E_{2}=E_{2}^{(0)}+ \frac{\lambda^{2}\Delta^{2}}{E_{2}^{0}-E_{1}^{0}}+\mathcal{O}(\lambda^{3})
\end{align}$$
To compare with the exact solutions, we first notice that:
$$\begin{align}
\sqrt{ \delta } & = \sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} } \\
 & \approx E_{2}^{0}-E_{1}^{0}+\mathcal{O}(\lambda^{2})
\end{align}$$
Therefore:
$$\begin{align}
\ket{\psi_{2}}  & \propto \begin{pmatrix}
\lambda \Delta \\
\frac{E_{1}^{0}-E_{2}^{0}-\sqrt{ \delta }}{2} 
\end{pmatrix} \\
 & \approx \begin{pmatrix}
\lambda \Delta \\
E_{1}^{0}-E_{2}^{0}
\end{pmatrix}\text{ up to }\mathcal{O}(\lambda)
\end{align}$$
To normalize, we compute:
$$\begin{align}
\sqrt{ \lambda^{2}\Delta^{2}+ (E_{1}^{0}-E_{2}^{0})^{2} } & \approx E_{2}^{0}-E_{1}^{0}+ \mathcal{O}(\lambda^{2})
\end{align}$$
Therefore:
$$\begin{align}
(\lambda^{2}\Delta^{2}+(E_{1}^{0}-E_{2}^{0})^{2})^{-1/2} & \approx \frac{1}{E_{2}^{0}-E_{1}^{0}}+\mathcal{O}(\lambda^{2})
\end{align}$$
Without loss of generality, we take the normalization constant to be negative. (The arbitrariness of the sign is due because we have $\text{normalization constant}^{2}=\text{something}$, we can choose it to be either positive or negative.) Then:
$$\ket{\psi_{2}} =-\frac{1}{E_{2}^{0}-E_{1}^{0}}\begin{pmatrix}
\lambda \Delta \\
E_{1}^{0}-E_{2}^{0}
\end{pmatrix}= \ket{\phi_{2}^{(0)}} + \ket{\phi_{1}^{(0)}} \frac{\lambda \Delta}{E_{1}^{0}-E_{2}^{0}}\text{ up to }\mathcal{O}(\lambda^{}) $$
This is consistent with our perturbation. 

Then expand the energy:
$$\begin{align}
E_{2} & = \frac{E_{1}^{0}+E_{2}^{0}+\sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} }}{2} \\
 & = \frac{E_{1}^{0}+E_{2}^{0}+(E_{2}^{0}-E_{1}^{0})\sqrt{ 1+ \frac{4\lambda^{2}\Delta^{2}}{(E_{2}^{0}-E_{1}^{0})} }}{2} \\
 & \approx \frac{1}{2}\left[ E_{1}^{0}+E_{2}^{0}+(E_{2}^{0}-E_{1}^{0})\left( 1- \frac{2\lambda^{2}\Delta^{2}}{E_{2}^{0}-E_{1}^{0}} \right) \right]\text{ up to }\mathcal{O}(\lambda^{2}) \\
 & = E_{2}^{0}+ \frac{\lambda^{2}\Delta^{2}}{E_{1}^{0}-E_{2}^{0}}
\end{align}$$
This is also consistent with our perturbation.

Similarly, we can expand the exact solutions for $1$, and obtain:
$$\begin{align}
 & \ket{\phi_{1}} = \ket{\phi_{1}^{(0)}} + \ket{\phi_{2}^{(0)}}  \frac{\lambda \Delta}{E_{1}^{0}-E_{2}^{0}}+\mathcal{O}(\lambda^{2}) \\
 & E_{1}= E_{1}^{(0)}+ \frac{\lambda^{2}\Delta^{2}}{E_{1}^{0}-E_{2}^{0}} +\mathcal{O}(\lambda^{3}) 
\end{align}$$
They are also consistent with our perturbation.
## (c)

Set $E_{1}^{0}=E_{2}^{0}=E$. We perform degenerate perturbation. Treat $\lambda$ as the tuning parameter, we need to diagonalize:
$$V=\begin{pmatrix}
0 &  \Delta \\
 \Delta & 0
\end{pmatrix}$$
The eigen equation is:
$$x^{2}-\Delta^{2}=0\implies x=\pm \Delta$$
So the first order eigen energy corrections are:
$$\lambda\Delta_{l_{2}}^{(1)}=\lambda\Delta,\ \lambda\Delta_{l_{1}}^{(1)}=-\lambda\Delta$$
The corresponding first order eigenket corrections are:
$$\ket{l_{2}^{(0)}}= \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1}^{(0)}} + \ket{\phi_{2}^{(0)}} ),\ \ket{l_{1}^{(0)}}= \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1}^{(0)}} - \ket{\phi_{2}^{(0)}} ) $$
Now we show that the expansion of the exact solutions is consistent with this. We first approximate:
$$\begin{align}
\sqrt{ \delta } & = \sqrt{ (E_{1}^{0}-E_{2}^{0})^{2}+4\lambda^{2}\Delta^{2} } \\
 & =  2\lambda \Delta \sqrt{ 1+ \frac{(E_{1}^{0}-E_{2}^{0})^{2}}{4\lambda^{2}\Delta^{2}} } \\
 & \approx 2\lambda \Delta+\mathcal{O}((E_{1}^{0}-E_{2}^{0})^{2})
\end{align}$$
Therefore:
$$\begin{align}
\ket{\psi_{1}}  & \propto \begin{pmatrix}
\lambda \Delta \\
 \frac{2\lambda \Delta}{2}
\end{pmatrix}+\mathcal{O}(E_{1}^{0}-E_{2}^{0})
\end{align}$$
We normalize to get:
$$\ket{\psi_{2}} \approx\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
1
\end{pmatrix}= \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1}^{(0)}} +\ket{\phi_{2}^{(0)}} )\text{ up to }\mathcal{O}(1)$$
We find the energy approximation:
$$\begin{align}
E_{2} & = \frac{E_{1}^{0}+E_{2}^{0}+\sqrt{ \delta }}{2} \\
 & \approx \frac{E_{1}^{0}+E_{2}^{0}+2\lambda \Delta}{2} \\
 & \approx \frac{E+E+2\lambda \Delta}{2}=E+\lambda \Delta\text{ up to }\mathcal{O}(E_{1}^{0}-E_{2}^{0})
\end{align}$$
Clearly, these are consistent with degenerate perturbation.

Similarly, we obtain:
$$\begin{align}
 & \ket{\psi_{1}} \approx \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1}^{(0)}} -\ket{\phi_{2}^{(0)}} )\text{ up to }\mathcal{O}(1) \\
 & E_{1}\approx E-\lambda \Delta\text{ up to }\mathcal{O}(E_{1}^{0}-E_{2}^{0})
\end{align}$$
These are also consistent with perturbation. 
# Sakurai 5.14

Without loss of generality, let:
$$\mathbf{E}=E  \hat{\mathbf{z}}$$
Then the perturbation is $-|e| E z$. Treat $-|e|E$ as the tuning parameter. It suffices to diagonalize $\bra{3,l^{'},m^{'}}z\ket{3,l,m}$.

Clearly, $z=r^{(1)}_{0}$. Therefore by selection rule, the non-zero matrix elements are:
$$\bra{3,1,0} z\ket{3,0,0},\ \bra{3,2,0} z\ket{3,1,0} ,\ \bra{3,2,1} z\ket{3,1,1} ,\ \bra{3,2,-1} z\ket{3,1,-1} \text{ and their complex conjugates}$$
By looking up the table of radial and angular matrix elements of hydrogen eigen states, we can evaluate:
$$\begin{align}
 & \bra{3,1,0} z\ket{3,0,0} = \bra{3,1} r\ket{3,0} \bra{1,0} \cos \theta \ket{0,0} =- 3\sqrt{ 6 }a_{0} \\
 & \bra{3,2,0} z\ket{3,1,0} =\bra{3,2} r\ket{3,1} \bra{2,0} \cos \theta \ket{1,0} =- 3\sqrt{ 3 }a_{0} \\
 & \bra{3,2,1} z\ket{3,1,1} =\bra{3,2} r\ket{3,1} \bra{2,1} \cos \theta \ket{1,1} =- \frac{9}{2}a_{0} \\
 & \bra{3,2,-1} z \ket{3,1,-1} =\bra{3,2} z\ket{3,1} \bra{2,-1} \cos \theta \ket{1,-1} =- \frac{9}{2}a_{0}
\end{align}$$
We sort the matrix elements in the order $\{ \ket{3,2,2},\ket{3,2,1},\ket{3,1,1},\ket{3,2,0},\ket{3,1,0},\ket{3,0,0},\ket{3,2,-1},\ket{3,1,-1},\ket{3,2,-1}\}$. Then clearly, the matrix is block diagonalized. In the subspace corresponding to $\{ \ket{3,2,0},\ket{3,1,0},\ket{3,0,0} \}$, The perturbation is represented by:
$$\begin{align}
z \overset{\wedge}{=} \begin{pmatrix}
0 & -3\sqrt{ 3 } a_{0} & 0 \\
-3\sqrt{ 3 }a_{0} & 0 & -3\sqrt{ 6 }a_{0} \\
0 & -3\sqrt{ 6 }a_{0} & 0
\end{pmatrix}
\end{align}$$
The eigen equation is:
$$\begin{align}
 & x(x^{2}-54a_{0}^{2})-3\sqrt{ 3 }a_{0}^{2} \cdot 3\sqrt{ 3 }x=0 \\
\implies & x(x^{2}-81)a_{0}^{2} =0 \\
\implies  & x=0\text{ or }\pm 9a_{0}
\end{align}$$
For $x=0$, we can find the eigenket:
$$\ket{\psi_{1}} = \begin{pmatrix}
- \frac{2}{\sqrt{ 6 }} \\0 \\

\frac{1}{\sqrt{ 3 }}
\end{pmatrix}=- \frac{2}{\sqrt{ 6 }}\ket{3,2,0} + \frac{1}{\sqrt{ 3 }}\ket{3,0,0}\text{, with 1st order energy shift }\Delta_{1}^{(1)}=0 $$
For $x= 9a_{0}$, we can find the eigenket:
$$\ket{\psi_{2}} =\begin{pmatrix}
- \frac{1}{\sqrt{ 6 }} \\
\frac{ 1}{\sqrt{ 2 }} \\
- \frac{1}{\sqrt{ 3 }}
\end{pmatrix}=- \frac{1}{\sqrt{ 6 }} \ket{3,2,0} + \frac{1}{\sqrt{ 2 }}\ket{3,1,0} - \frac{1}{\sqrt{ 3 }}\ket{3,0,0}\text{, with 1st order energy shift }\Delta_{2}^{(1)}=-9|e|Ea_{0}  $$

For $x=-9a_{0}$, we can find the eigenket:
$$\ket{\psi_{3}} =\begin{pmatrix}
\frac{1}{\sqrt{ 6 }}   \\ \frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 3 }}
\end{pmatrix}= \frac{1}{\sqrt{ 6 }}\ket{3,2,0} + \frac{1}{\sqrt{ 2 }}\ket{3,1,0} - \frac{1}{\sqrt{ 3 }}\ket{3,0,0} \text{, with 1st order energy shift }\Delta_{3}^{(1)}=9|e|Ea_{0}$$
In the subspace corresponding to $\{ \ket{3,2,1},\ket{3,1,1} \}$, the perturbation is represented by:
$$z \overset{\wedge}{=}\begin{pmatrix}
0 & - \frac{9}{2}a_{0} \\
- \frac{9}{2}a_{0} & 0
\end{pmatrix}$$
The eigen equation is:
$$x^{2}- \left( \frac{9}{2}a_{0} \right)^{2}=0\implies x=\pm \frac{9}{2}a_{0}$$
For $x= \frac{9}{2}a_{0}$, we can find the eigenket:
$$\ket{\psi_{4}} =\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
-1
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\ket{3,2,1} - \frac{1}{\sqrt{ 2 }}\ket{3,1,1}\text{, with 1st order energy shift }\Delta_{4}^{(1)}=- \frac{9}{2}|e|Ea_{0} $$
For $x=-\frac{9}{2}a_{0}$, we can find the eigenket:
$$\ket{\psi_{5}} = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
1
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\ket{3,2,1} + \frac{1}{\sqrt{ 2 }}\ket{3,1,1} \text{, with 1st order energy shift }\Delta_{4}^{(1)}=\frac{9}{2}|e|Ea_{0}$$
In the subspace corresponding to $\{ \ket{3,2,-1},\ket{3,1,-1} \}$, the perturbation is represented by:
$$z \overset{\wedge}{=}\begin{pmatrix}
0 & - \frac{9}{2}a_{0} \\
- \frac{9}{2}a_{0} & 0
\end{pmatrix}$$
The eigen equation is:
$$x^{2}- \left( \frac{9}{2}a_{0} \right)^{2}=0\implies x=\pm \frac{9}{2}a_{0}$$
For $x= \frac{9}{2}a_{0}$, we can find the eigenket:
$$\ket{\psi_{4}} =\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
-1
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\ket{3,2,-1} - \frac{1}{\sqrt{ 2 }}\ket{3,1,-1}\text{, with 1st order energy shift }\Delta_{4}^{(1)}=- \frac{9}{2}|e|Ea_{0} $$
For $x=-\frac{9}{2}a_{0}$, we can find the eigenket:
$$\ket{\psi_{5}} = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
1
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\ket{3,2,-1} + \frac{1}{\sqrt{ 2 }}\ket{3,1,-1} \text{, with 1st order energy shift }\Delta_{4}^{(1)}=\frac{9}{2}|e|Ea_{0}$$
Other kets do not need modification, and their first order energy shifts are zero. 

Notice that in the problem, we are asked to calculate energy shifts to the lowest non-vanishing order. It's not clear whether we should calculate the second order energy shifts for the states with zero first order energy shift. This would be extremely tedious and cannot be carried out analytically. In principle, we just need to adopt the formula $\Delta^{(2)}=\sum_{n\neq 3,l,m} \frac{|\bra{3,l^{'},m^{'}}V\ket{n,l,m}|^{2}}{E_{3}^{(0)}-E_{n}^{(0)}}$, and throw the rest of the job to Mathematica. We need to truncate at some finite point to obtain an approximation (since the sum is infinite). 






