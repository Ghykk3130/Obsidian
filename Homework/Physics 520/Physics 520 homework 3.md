# Problem 1
## (a)

The electron in the k-space moves on an orbit that is an intersection of a plane perpendicular to the magnetic field and an energy contour.
## (b)

Know that:
$$\begin{align}
\dot{\mathbf{k}}\cdot \mathbf{B} & = \frac{1}{\hbar}(-e\mathbf{v}\times \mathbf{B})\cdot \mathbf{B}=0
\end{align}$$
Then the orbit in the k-space is perpendicular to $\mathbf{B}$. Assume that the band is parabolic $\epsilon= \frac{\hbar^{2}k^{2}}{2m}$. Then:
$$\begin{align}
\mathbf{v} & = \frac{\partial\epsilon}{\hbar\partial \mathbf{k}} \\
 & = \frac{\hbar \mathbf{k}}{m}
\end{align}$$
Since $\mathbf{k}$ is 


We have:
$$\begin{align}
\mathbf{v} \cdot  \dot{\mathbf{k}} & = \mathbf{v}\cdot \frac{1}{\hbar}(-e\mathbf{v}\times \mathbf{B})=0
\end{align}$$
This means that the infinitesimal movements in $\mathbf{r}$ and $\mathbf{k}$ are perpendicular. Then the path in the real space and in the k-space are perpendicular. 

Let $\hat{\mathbf{e}}_{\parallel}= \frac{\mathbf{B}}{B}$, $\hat{\mathbf{e}_{}}_{\perp}= \frac{\mathbf{k}_{\perp}}{k_{\perp}}$. Define $\hat{\mathbf{e}}_{\phi}=\hat{\mathbf{e}_{}}_{\perp}\times   \hat{\mathbf{e}}_{\parallel}$. For parabolic band, we have:
$$\begin{align}
 & \dot{\mathbf{k}}= \frac{1}{\hbar}(-e) \mathbf{v}\times \mathbf{B}= \frac{1}{\hbar}(-e) \frac{\partial}{\hbar\partial \mathbf{k}}\left(  \frac{\hbar^{2}k^{2}}{2m} \right)\times \mathbf{B} \\
\implies & \dot{\mathbf{k}}= \frac{-eB}{m} \mathbf{k}\times \mathbf{B} 
\end{align}$$
Decompose to get:
$$\begin{align}
 & \frac{d}{dt}(k_{\parallel} \hat{\mathbf{e}}_{\parallel})= \dot{k}_{\parallel} \hat{\mathbf{e}}_{\parallel}= - \frac{e}{m}\mathbf{k}\times \mathbf{B}=0 \\
 & \frac{d}{dt}(k_{\perp}  \hat{\mathbf{e}}_{\perp})= \dot{ k}_{\perp}  \hat{\mathbf{e}}_{\perp}+ k_{\perp} \frac{d}{dt}  \hat{\mathbf{e}}_{\perp}= \frac{-eB}{m}k_{\perp}  \hat{\mathbf{e}}_{\phi}
\end{align}$$
The first equation just gives $\dot{ k}_{\parallel}=0$. The second equation gives:
$$\begin{align}
 & \dot{k}_{\perp}+ k_{\perp}  \hat{\mathbf{e}}_{\perp}\cdot \frac{d}{dt}  \hat{\mathbf{e}}_{\perp}=0 \\
\implies &  \dot{k}_{\perp}+ k_{\perp} \frac{1}{2} \frac{d}{dt}|\hat{\mathbf{e}}_{\perp}|^{2}= \dot{k}_{\perp}=0
\end{align}$$
And:
$$\begin{align}
\frac{d}{dt}  \hat{\mathbf{e}}_{\perp}= \frac{-eB}{m}  \hat{\mathbf{e}}_{\phi}
\end{align}$$
Let $\hat{\mathbf{e}}_{\perp}=\cos(\omega t+\varphi) \hat{\mathbf{x}}+ \sin(\omega t+\varphi) \hat{\mathbf{y}}$, $\hat{\mathbf{e}}_{\phi}=\sin(\omega t+\varphi) \hat{\mathbf{x}}- \cos(\omega t+\varphi) \hat{\mathbf{y}}$. Then $\omega= \frac{eB}{m}$. Then the k-space orbit is circular with angular frequency $\frac{eB}{m}$ and radius $k_{\perp}$. Now:
$$\begin{align}
\mathbf{v}= \frac{\hbar}{m}\mathbf{k}\implies  \dot{\mathbf{r}}= \frac{\hbar}{m}\mathbf{k}= \frac{\hbar}{m}(k_{\parallel} \hat{\mathbf{e}}_{\parallel}+ k_{\perp} \hat{\mathbf{e}}_{\perp})
\end{align}$$
Decompose:
$$\begin{align}
\dot{x}= \frac{\hbar k_{\perp}}{m} \cos (\omega t+\varphi)\implies x= k_{\perp} \frac{\hbar}{eB}\sin(\omega t+ \varphi)
\end{align}$$
Clearly, the radius is scaled with a factor $\frac{\hbar}{eB}$. 
# Problem 2
## (a)

Let $\mathbf{B}=B \hat{\mathbf{z}}$. Choose the Landau gauge so that $\mathbf{A}=xB \hat{\mathbf{y}}$. Then:
$$\begin{align}
H & = \frac{|\mathbf{p}+exB \hat{\mathbf{y}}|^{2}}{2m_{e}} \\
 & = \frac{1}{2m_{e}}(p_{x}^{2}+(p_{y}+exB)^{2})
\end{align}$$
Observe that :
$$\begin{align}
[p_{y},H] =0
\end{align}$$
Then write the eigenstate as $\psi(\mathbf{r})= e^{ik_{y}y}f(x)$. Then:
$$\begin{align}
 & \frac{1}{2m_{e}}(p_{x}^{2}+(p_{y}+exB)^{2})e^{ik_{y}y}f(x)=E e^{ik_{y}y}f(x) \\
\implies & \frac{1}{2m_{e}}(\hbar k_{y}+exB)^{2}e^{ik_{y}y}f+ e^{ik_{y}y} \frac{1}{2m_{e}}p_{x}^{2}f=E e^{ik_{y}y}f \\
\implies & \left[  \frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}} \right]f=Ef
\end{align}$$
Observe that $\frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}}$ is just the hamiltonian of a harmonic oscillator centered at $x_{0}=- \frac{\hbar k_{y}}{eB}$ with angular frequency $\omega_{c}= \frac{eB}{m_{e}}$. Then we obtain the spectrum:
$$\begin{align}
E_{n}= \left( n+ \frac{1}{2} \right)\hbar \frac{eB}{m_{e}}
\end{align}$$
## (b)

We have:
$$\begin{align}
 & E_{n+1}-E_{n}= \hbar \frac{eB}{m_{e}}
\end{align}$$
For a quadratic dispersion, it is easy to show that:
$$\begin{align}
m_{\text{CR}} & =  \frac{\hbar^{2}}{2\pi} \frac{\partial A}{\partial E} \\
 & = \frac{\hbar^{2}}{2\pi} \frac{\partial}{\partial E}\pi k^{2} \\
 & = \frac{\hbar^{2}}{2\pi} \frac{\partial}{\partial E} \frac{2\pi m_{e}}{\hbar^{2}}E \\
 & = m_{e}
\end{align}$$
Then:
$$\begin{align}
 & E_{n+1}-E_{n}= \hbar \frac{eB}{ \frac{\hbar^{2}}{2\pi} \frac{\partial A}{\partial E}} \\
\implies & A_{n+1}-A_{n}= \frac{2\pi eB}{\hbar}
\end{align}$$
Therefore, each Landau level has degeneracy:
$$\begin{align}
g & = 2\frac{A_{n+1}-A_{n}}{(2\pi / L)^{2} } \\
 & = \frac{2eB}{h}L^{2}
\end{align}$$
Where $2$ counts for the spin degeneracy. The density of states is clearly given by:
$$\begin{align}
\rho(E) & = \sum_{n} \frac{2eB}{h}L^{2}\delta\left( E- \left( n+ \frac{1}{2} \right)\hbar \omega_{c} \right)
\end{align}$$
## (c)

Let $\mathbf{B}=B \hat{\mathbf{z}}$. Choose the Landau gauge so that $\mathbf{A}=xB \hat{\mathbf{y}}$. Then:
$$\begin{align}
H & = \frac{|\mathbf{p}+exB \hat{\mathbf{y}}|^{2}}{2m_{e}} \\
 & = \frac{1}{2m_{e}}(p_{x}^{2}+p_{z}^{2}+(p_{y}+exB)^{2})
\end{align}$$
Observe that :
$$\begin{align}
[p_{y},H] =0,\ [p_{z},H]=0
\end{align}$$
Then write the eigenstate as $\psi(\mathbf{r})= e^{ik_{y}y+ik_{z}z}f(x)$. Then:
$$\begin{align}
 & \frac{1}{2m_{e}}(p_{x}^{2}+p_{z}^{2}+(p_{y}+exB)^{2})e^{ik_{y}y+ik_{z}z}f(x)=E e^{ik_{y}y+ik_{z}z}f(x) \\
\implies & \frac{1}{2m_{e}}(\hbar^{2}k_{z}^{2}+(\hbar k_{y}+exB)^{2})e^{ik_{y}y+ik_{z}z}f+ e^{ik_{y}y+ik_{z}z} \frac{1}{2m_{e}}p_{x}^{2}f=E e^{ik_{y}y+ik_{z}z}f \\
\implies & \left[  \frac{p_{x}^{2}}{2m_{e}}+  \frac{\hbar^{2}k_{z}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}} \right]f=Ef
\end{align}$$
Observe that $\frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}}$ is just the hamiltonian of a harmonic oscillator centered at $x_{0}= -\frac{\hbar k_{y}}{eB}$ with angular frequency $\omega_{c}= \frac{eB}{m_{e}}$. Then we obtain the spectrum:
$$\begin{align}
E(n,k_{z})= \left( n+ \frac{1}{2} \right)\hbar \frac{eB}{m_{e}}+ \frac{\hbar^{2}k_{z}^{2}}{2m_{e}}
\end{align}$$
To obtain the DOS, we first argue that if we fix $n,k_{z}$, we get a Landau level $\left( n+ \frac{1}{2} \right)\hbar \omega_{c}+ \frac{\hbar^{2}k_{z}^{2}}{2m_{e}}$. The number of states contained in this level is just $2 \frac{eB}{h}L^{2}$, same as 2D, since if $k_{z}$ is fixed, we are essentially sweeping in 2D. As $E$ moves across this level when we adjust it by $dE$, the number of states requires is therefore $2 \frac{eB}{h}L^{2}$. Then:
$$\begin{align}
\rho(E) & = 2 \frac{eB}{h}L^{2} \sum_{n,k_{z}}\delta\left( E- E_{n}- \frac{\hbar^{2}k_{z}^{2}}{2m_{e}} \right),\ E_{n}= \left(  n+ \frac{1}{2} \right)\hbar \omega_{c} \\
 & = 2 \frac{eB}{h}L^{2} \sum_{n} \frac{L}{2\pi}\int_{-\infty}^{\infty} dk_{z}\delta\left( E-E_{n}- \frac{\hbar^{2}k_{z}^{2}}{2m_{e}} \right)\text{, as we take the thermodynamic limit} \\
\end{align}$$
Since:
$$\begin{align}
\delta\left( E-E_{n}- \frac{\hbar^{2}k_{z}^{2}}{2m_{e}} \right) & =  \left[\frac{\delta\left( k_{z}- \sqrt{ \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)}{\left| \frac{\partial}{\partial k_{z}} \frac{\hbar^{2}}{2m_{e}}k_{z}^{2} \right|}+ \frac{\delta\left( k_{z}+ \sqrt{ \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)}{\left| \frac{\partial}{\partial k_{z}} \frac{\hbar^{2}}{2m_{e}}k_{z}^{2} \right|}\right]\Theta(E-E_{n})  \\
 & = \frac{1}{\hbar \sqrt{  \frac{2}{m_{e}} }(E-E_{n})}\left( \delta\left( k_{z}- \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)+ \delta\left( k_{z}+ \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right) \right)\Theta(E-E_{n})
\end{align}$$
The Heaviside function is just to ensure that $k_{z}$ has real solutions. Then:
$$\begin{align}
\rho(E) & = \frac{2eB}{2\pi h}V \sum_{n} \int_{-\infty}^{\infty} \frac{1}{\hbar \sqrt{  \frac{2}{m_{e}} }(E-E_{n})}\left( \delta\left( k_{z}- \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)+ \delta\left( k_{z}+ \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right) \right)\Theta(E-E_{n}) \\
 & = \frac{2eB}{\pi h}V \sum_{n} \frac{\Theta(E-E_{n})}{\hbar \sqrt{ \frac{2}{m_{e}}(E-E_{n}) }} \\
 & = \frac{2eB}{h^{2}}\sqrt{ 2m_{e} }V \sum_{n} \frac{\Theta\left( E-\left( n+ \frac{1}{2}\hbar \omega_{c} \right) \right)}{\sqrt{ E-\left( n+ \frac{1}{2}\hbar \omega_{c} \right) }}
\end{align}$$
# Problem 3

The reason why there are two frequencies observed is because all the Bellies have the same area, and all the necks have the same area. Therefore overall they give two distinct oscillation frequencies.

Know that the each extremal orbit corresponds to a period given by:
$$\Delta\left(  \frac{1}{B} \right)= \frac{2\pi e}{h} \frac{1}{A_{F}}$$
By direct counting, we find that the ratio between the shorter period and the longer period is $\frac{1}{52}$. The shorter period corresponds to a larger extremal orbit, which should be the Belly. The longer period corresponds to  a shorter extremal orbit, which should be the neck. Then the radius ratio between the neck and the belly should be $\sqrt{ 52 }$. 
# Problem 4

To deduce property (a), we rotate $\mathbf{B}$ around to detect the oscillation frequency for all angles. If the frequency keeps the same, then we know that the extremal orbits have the same area. Then the Fermi surface is isotropic and therefore spherical. 

To deduce property (b), we first take the oscillation frequency $F$, and calculate:
$$\begin{align}
 & \frac{1}{F}= \frac{2\pi e}{h} \frac{1}{A_{F}}= \frac{2\pi e}{h} \frac{1}{\pi k_{F}^{2}} \\
\implies & k_{F}= \sqrt{  \frac{2eF}{h} }
\end{align}$$

We calculate the frequency:
$$\begin{align}
F & = \frac{hk_{F}^{2}}{2e} \\
 & = \frac{6.628 \times 10^{-34} \times(9.1\times 10^{9})^{2}}{ 2 \times 1.6 \times 10^{-19}}\ T \\
 & \approx 17150\ T
\end{align}$$
We calculate the Fermi energy:
$$\begin{align}
\epsilon_{F} & = \frac{\hbar^{2}k_{F}^{2}}{2m^{*}} \\
 & = \frac{\left( \frac{6.628}{6.28}\times 10^{-34} \right)^{2}\times(9.1\times 10^{9})^{2}}{2 \times 1.3 \times 9.1 \times 10^{-31}}\ J \\
 & \approx 1.43 \times 10^{-18}\ J
\end{align}$$


