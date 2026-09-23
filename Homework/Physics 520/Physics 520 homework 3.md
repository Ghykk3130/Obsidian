# Problem 1
## (a)

The electron in the k-space moves on an orbit that is an intersection of a plane perpendicular to the magnetic field and an energy contour.
## (b)

Know that in the real space, $\mathbf{v}_{\perp}$ would induce a Lorentz force that is in the plane perpendicular to the field, contributing to the circular motion in the same plane. The $\mathbf{v}_{\parallel}$ component does not induce a force. 

This means that the infinitesimal movements in $\mathbf{r}$ and $\mathbf{k}$ are perpendicular. Then the path in the real space and in the k-space are $90^{\circ}$ away. 

We also have:
$$\begin{align}
\dot{\mathbf{k}} & = \frac{1}{\hbar}(-e)\mathbf{v}\times \mathbf{B} \\
\implies & d\mathbf{k}= \frac{1}{\hbar}(-e)d\mathbf{r}\times \mathbf{B}= \frac{1}{\hbar}(-e)B  dr_{\perp}  \widehat{\mathbf{v}\times \mathbf{B}}
\end{align}$$
Then it's clear that the radius ratio between the real space path and the k-space path is $\frac{\hbar}{eB}$. 


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
To further convert the delta function to a delta function of $k_{z}$, we recall that given $f(x)$ with roots $x_{0}$, we have:
$$\delta(f(x))= \sum_{x_{0}} \frac{\delta(x-x_{0})}{|f^{'}(x_{0})|}$$
Then:
$$\begin{align}
\delta\left( E-E_{n}- \frac{\hbar^{2}k_{z}^{2}}{2m_{e}} \right) & =  \left[\frac{\delta\left( k_{z}- \sqrt{ \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)}{\left| \frac{\partial}{\partial k_{z}} \frac{\hbar^{2}}{2m_{e}}k_{z}^{2} \right|}+ \frac{\delta\left( k_{z}+ \sqrt{ \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)}{\left| \frac{\partial}{\partial k_{z}} \frac{\hbar^{2}}{2m_{e}}k_{z}^{2} \right|}\right]\Theta(E-E_{n})  \\
 & = \frac{1}{\hbar \sqrt{  \frac{2}{m_{e}}(E-E_{n}) }}\left( \delta\left( k_{z}- \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)+ \delta\left( k_{z}+ \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right) \right)\Theta(E-E_{n})
\end{align}$$
The Heaviside function is just to ensure that $k_{z}$ has real solutions. Then:
$$\begin{align}
\rho(E) & = \frac{2eB}{2\pi h}V \sum_{n} \int_{-\infty}^{\infty} \frac{1}{\hbar \sqrt{  \frac{2}{m_{e}}(E-E_{n}) }}\left( \delta\left( k_{z}- \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right)+ \delta\left( k_{z}+ \sqrt{  \frac{2m_{e}}{\hbar^{2}}(E-E_{n}) } \right) \right)\Theta(E-E_{n}) \\
 & = \frac{2eB}{\pi h}V \sum_{n} \frac{\Theta(E-E_{n})}{\hbar \sqrt{ \frac{2}{m_{e}}(E-E_{n}) }} \\
 & = \frac{2eB}{h^{2}}\sqrt{ 2m_{e} }V \sum_{n} \frac{\Theta\left( E-\left( n+ \frac{1}{2}\hbar\right) \omega_{c}  \right)}{\sqrt{ E-\left( n+ \frac{1}{2}\hbar \omega_{c} \right) }}
\end{align}$$
# Problem 3

The reason why there are two frequencies observed is because all the Bellies have the same area, and all the necks have the same area. Therefore overall they give two distinct oscillation frequencies.

Know that the each extremal orbit corresponds to a period given by:
$$\Delta\left(  \frac{1}{B} \right)= \frac{2\pi e}{\hbar} \frac{1}{A_{F}}$$
I count that between two peaks of the envelope, there are $52$ small peaks, meaning that their frequency ratio is $\frac{1}{52}$. The shorter period corresponds to a larger extremal orbit, which should be the Belly. The longer period corresponds to a smaller extremal orbit, which should be the neck. Know that $R \propto \sqrt{ A }$. Then the radius ratio between the neck and the belly should be $\frac{1}{\sqrt{ 52 }}$. 
# Problem 4

To deduce property (a), we rotate $\mathbf{B}$ around to detect the oscillation frequency for all angles. If the frequency keeps the same, then we know that the extremal orbits have the same area. Then the Fermi surface is isotropic and therefore spherical. 

To deduce property (b), we first take the oscillation frequency $F$, and calculate:
$$\begin{align}
 & \frac{1}{F}= \frac{2\pi e}{\hbar} \frac{1}{A_{F}}= \frac{2\pi e}{\hbar} \frac{1}{\pi k_{F}^{2}} \\
\implies & k_{F}= \sqrt{  \frac{2eF}{\hbar} }
\end{align}$$
We calculate the frequency:
$$\begin{align}
F & = \frac{\hbar k_{F}^{2}}{2e} \\
 & = \frac{ \frac{6.628}{6.28} \times 10^{-34} \times(9.1\times 10^{9})^{2}}{ 2 \times 1.6 \times 10^{-19}}\ T \\
 & \approx 2730.89\ T
\end{align}$$
We calculate the electron density:
$$\begin{align}
n & = \frac{N}{V} \\
 & = \frac{1}{V} \frac{\frac{4}{3}\pi k_{F}^{3}}{(2\pi /L)^{3}}\cdot 2 \\
 & = \frac{1}{3} \frac{k_{F}^{3}}{\pi^{2}} \\
 & = \frac{1}{3} \times \frac{1}{3.14^{2}}\times(9.1 \times 10^{9})^{3} \\
 & \approx 2.55 \times 10 ^{28}\ m^{-3}
\end{align}$$
We calculate the Fermi energy:
$$\begin{align}
\epsilon_{F} & = \frac{\hbar^{2}k_{F}^{2}}{2m^{*}} \\
 & = \frac{\left( \frac{6.628}{6.28}\times 10^{-34} \right)^{2}\times(9.1\times 10^{9})^{2}}{2 \times 1.3 \times 9.1 \times 10^{-31}}\ J \\
 & \approx 3.9\times 10^{-19}\ J
\end{align}$$
Next we calculate the bulk modulus. Observe that the functional dependence $F$ on volume could be obtained by:
$$\begin{align}
F & = \frac{\hbar k_{F}^{2}}{2e} \\
 & = \frac{\hbar}{2e}( 2\pi^{2}n)^{2/3} \\
 & = \frac{\hbar}{2e}\left(  \frac{2\pi^{2}N}{V} \right)^{2/3}
\end{align}$$
Then we have:
$$\begin{align}
 & \frac{F(P)}{F(0) }= \left(  \frac{V(0)}{V(P)} \right)^{2/3} 
\end{align}$$
On the other hand, we have:
$$\begin{align}
dV & = - \frac{V}{B}dP 
\end{align}$$
So for small $P$ we have:
$$\begin{align}
\frac{F(P)}{F(0)} & = \left(  \frac{V(0)}{V(0)- \frac{V(0)}{B}P} \right)^{2/3} \\
 & \approx \left( 1+ \frac{1}{B}P \right)^{2/3} \\
 & \approx 1+ \frac{2}{3} \frac{1}{B}P
\end{align}$$
Then compare with the graph to get:
$$\begin{align}
 & \frac{2}{3} \frac{1}{B}=\text{slope}= 0.12\ \text{GPa}^{-1} \\
\implies & B\approx 5.56\text{ GPa}
\end{align}$$
# Problem 5

## (a)

We calculate:
$$\begin{align}
\frac{df}{d \eta} & = \frac{-1}{(e^{\eta}+1)^{2}}e^{\eta} \\
  & = \frac{-1}{(e^{\eta /2}+e^{-\eta /2})^{2}} \\
 & = - \frac{1}{4} \frac{1}{\cosh ^{2}( \eta /2)}
\end{align}$$
## (b)

Then we need to evaluate:
$$\begin{align}
\delta A= \int_{-\infty}^{\infty}d \eta\cos\left( 2\pi \frac{k_{B}T}{\hbar \omega}\eta \right)\left( - \frac{1}{4} \right) \frac{1}{\cosh ^{2}(\eta /2)}
\end{align}$$
It suffices to evaluate:
$$I= \int_{-\infty}^{\infty}d \eta \cos(\alpha \eta) \frac{1}{\cosh ^{2}(\eta /2)}$$
We extend this integral to complex. We want to evaluate:
$$I^{'}= \int_{-\infty}^{\infty} d \eta \frac{e^{i\alpha \eta}}{\cosh ^{2}(\eta /2)}$$
Take $\alpha>0$. We took a contour that is from $-\infty$ to $\infty$ on the real axis, and then a counterclockwise circular path connecting back to $-\infty$. Since $e^{i\alpha \eta}\rightarrow 0$ for $\eta$ traveling on the second part of the contour, we have:
$$I^{'}= \oint d \eta \frac{e^{i\alpha \eta}}{\cosh ^{2}(\eta /2)}$$
It's easy to find the singularities of the integrand. Take $\eta=i\omega$, then the denominator becomes $\cos ^{2}(\omega /2)$. We take $\frac{\omega}{2}  = \frac{\pi}{2}+ m\pi$. Then $\eta_{m}=i\left(  \pi+2m\pi \right)$ on the imaginary axis. 

We find the residual around $\eta_{m}$. We have:
$$\begin{align}
\cosh ^{2}\left(  \frac{\eta_{m}+\delta \eta}{2} \right) & = \left(  \cosh\left(  \frac{\eta_{m}}{2}\ \right)\cosh\left(  \frac{\delta \eta_{}}{2} \right)+ \sinh\left(  \frac{\eta_{m}}{2} \right)\sinh\left(  \frac{\delta \eta_{}}{2} \right)  \right)^{2} \\
 & = \sinh ^{2}\left(  \frac{\eta_{m}}{2} \right)\sinh ^{2}\left(  \frac{\delta \eta}{2} \right) \\
 & = -\sinh ^{2}\left(  \frac{\delta \eta}{2} \right) \\
  & \approx -  \frac{(\delta \eta)^{2}}{4}
\end{align}$$
Also:
$$\begin{align}
e^{i\alpha (\eta_{m}+\delta \eta)} & = e^{i\alpha \eta_{m}}e^{i\alpha\delta \eta} \\
 & \approx e^{i\alpha \eta_{m}}(1+i\alpha\delta \eta)
\end{align}$$
Then:
$$\begin{align}
\frac{e^{i\alpha(\eta_{m}+\delta \eta)}}{\cosh ^{2}((\eta_{m}+\delta \eta) /2)} & \approx -4 \frac{e^{i\alpha \eta_{m}}+i\alpha^{}e^{i\alpha \eta_{m}}\delta \eta}{(\delta \eta)^{2}}
\end{align}$$
Clearly, the residual is:
$$\begin{align}
-4i\alpha^{}e^{i\alpha \eta_{m}}
\end{align}$$
Then by residual theorem, we have:
$$\begin{align}
I^{'} & = 2\pi i \sum_{m}(-4i)\alpha^{}e^{i\alpha \eta_{m}} \\
 & = 8\pi \alpha^{} \frac{e^{-\alpha \pi }}{1-e^{-2\alpha \pi}} \\
 & = 4\pi \alpha^{} \frac{1}{\sinh(\alpha \pi )}
\end{align}$$
Then:
$$\begin{align}
I & = \text{Re}(I^{'}) \\
 & = 4\pi \alpha^{} \frac{1}{\sinh(\alpha \pi )}
\end{align}$$
Therefore, we have:
$$\begin{align}
\delta A & = - \frac{1}{4} \frac{4\pi\left(  \frac{2\pi k_{B}T}{\hbar \omega} \right)}{\sinh\left(  \frac{2\pi^{2} k_{B}T}{\hbar \omega} \right)} \\
 & = -\frac{\frac{2\pi^{2}k_{B}T}{\hbar \omega}}{\sinh\left(  \frac{2\pi^{2}k_{B}T}{\hbar \omega } \right)}
\end{align}$$
Then we have:
$$a= \frac{2\pi^{2}k_{B}}{\hbar \omega}= \frac{2\pi^{2}mk_{B}}{\hbar eB}$$
The dependence of $a$ on physical constants is very clear from the expression above.





