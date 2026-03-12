# Kittel 4.3

We have that:
$$\begin{align}
 & M_{1}  \ddot{u}_{n}= -2C u_{n}+Cv_{n}+Cv_{n-1} \\
 & M_{2} \ddot{v}_{n}= -2C v_{n}+Cu_{n}+Cu_{n+1}
\end{align}$$
We make the ansatz:
$$u_{n}=A e^{i(naq-\omega t)},\ v_{n}=Be^{i(naq-\omega t)}$$
Substitute in to get:
$$\begin{align}
 & -\omega^{2}M_{1}A=-2C A+CB(1+e^{-iaq}) \\
 & -\omega^{2}M_{2}B=-2CB+CA (1+e^{iaq})
\end{align}$$
Set $q= \frac{\pi}{a}$, we get:
$$\begin{align}
 & -\omega^{2}M_{1}A=-2CA \\
 & -\omega^{2}M_{2}B=-2CB
\end{align}$$
Know that the angular velocity of the two branches are given by:
$$\omega^{2}= \frac{2C}{M_{1}}\text{ or }  \frac{2C}{M_{2}}$$
Then for $\omega^{2}= \frac{2C}{M_{1}}$,
$$\begin{align}
 & -2CA=-2CA\implies A\text{ is free of constraint} \\
 & -2C \frac{M_{2}}{M_{1}}B=-2CB \implies B=0
\end{align}$$
Then $M_{2}$ don't move. Similarly, for $\omega^{2}= \frac{2C}{M_{2}}$, 
$$\begin{align}
 & -2C \frac{M_{1}}{M_{2}}A=-2CA\implies A=0 \\
 & -2CB=-2CB\implies B\text{ is free of constraint}
\end{align}$$
Then $M_{1}$ don't move.
# Kittel 4.5

Observe that the force environment of the neighboring two atoms are different, we have to treat them as two different atoms. 

![[Drawing 2026-03-12 00.25.50.excalidraw|center|500]]

Then the equation of motion of $u_{n}$ is:
$$m \ddot{u}_{n}= 10C(v_{n}-u_{n})-C(u_{n}-v_{n-1})$$
The equation of motion of $v_{n}$ is:
$$m \ddot{v}_{n}=C(u_{n+1}-v_{n})-10C(v_{n}-u_{n})$$
We make the ansatz:
$$u_{n}=Ae^{i(nak-\omega t)},\ v_{n}=Be^{i(nak-\omega t)}$$
Then we have:
$$\begin{align}
 & -\omega^{2}mA=-11CA+10CB+CBe^{-ika} \\
 & -\omega^{2}mB=-11CB+10CA+CAe^{ika}
\end{align}$$
We can solve:
$$\begin{align}
 & -\omega^{2}m=-11C+C(1+ e^{ika})C  \frac{10+e^{-ika}}{11C-\omega^{2}m} \\
\implies & m^{2}\omega^{4}-22mc\omega^{2}+20C^{2}-20C^{2}\cos(ka) \\
\implies & \omega^{2}_{\pm}= 11 \frac{C}{m}\pm \frac{C}{m}\sqrt{ 121-40\sin ^{2}\left( \frac{ka}{2} \right) } 
\end{align}$$
Then at $k=0$, we have:
$$\omega^{2}_{\pm}=  \left\{\begin{align}
 & 22 \frac{C}{m} \\
 & 0
\end{align}\right.\implies \omega_{+}= \sqrt{ \frac{22C}{m} },\ \omega_{-}=0$$
At $k= \frac{\pi}{a}$, we have:
$$\omega^{2}_{\pm}= \left\{\begin{align}
 & 20 \frac{C}{m} \\
 & 2 \frac{C}{m}
\end{align}\right.\implies \omega_{+}= \sqrt{ \frac{20C}{m} },\ \omega_{-}= \sqrt{ \frac{2C}{m} }$$
![[9eafeee1db7f4d13ddef893c34b80595.jpg|center|300]]
# Kittel 5.1
## (a)

Know that the wavenumber satisfies the condition:
$$Nak=2\pi m,\ m\in \mathbb{Z}\implies \Delta k= \frac{2\pi}{Na}$$
Then the density of modes in the $|k|$-space is:
$$D^{'}(|k|)= 2 \cdot \frac{Na}{2\pi}= \frac{Na}{\pi}$$
We know that:
$$\begin{align}
\omega= 2 \sqrt{ \frac{C}{M} }  \left|\sin\left( \frac{ka}{2} \right)\right|\implies \frac{d\omega}{d|k|} & = a \sqrt{ \frac{C}{M} }\cos\left( \frac{|k|a}{2} \right)
\end{align}$$
Then the density of modes is:
$$\begin{align}
D(\omega) & = \frac{1}{a} \sqrt{ \frac{M}{C} } \frac{1}{\cos\left( \frac{|k|a}{2} \right)} \cdot \frac{Na}{\pi} \\
 & = \frac{1}{a}\sqrt{ \frac{M}{C} } \frac{1}{\sqrt{ 1- \frac{M}{4C}\omega^{2} }} \frac{Na}{\pi} \\
 & = \frac{2N}{\pi} \frac{1}{\sqrt{ \frac{4C}{M}-\omega^{2} }} \\
 & = \frac{2N}{\pi} \frac{1}{\sqrt{ \omega_{m}^{2}-\omega^{2} }}
\end{align}$$
The second step is because:
$$\begin{align}
 & \omega^{2}= \frac{4C}{M}\sin ^{2}\left( \frac{ka}{2} \right) \\
\implies & \sin ^{2}\left( \frac{ka}{2} \right)= \frac{M}{4C}\omega^{2} \\
\implies & \cos\left( \frac{ka}{2} \right)= \sqrt{ 1- \frac{M}{4C}\omega^{2} }\text{ since }\cos\left( \frac{ka}{2} \right)\geq 0\text{ in FBZ}
\end{align}$$
## (b)

We know that:
$$\omega=\omega_{0}-AK^{2}\implies K^{2}= \frac{\omega_{0}-\omega}{A}$$
If $\omega< \omega_{0}$, this is a sphere of radius $\sqrt{ \frac{\omega_{0}-\omega_{}}{A} }$. Now we vary $\omega$ by $d\omega$. Then the volume enclosed by the sphere is varied by:
$$\begin{align}
dV & = 4\pi\left( \sqrt{ \frac{\omega_{0}-\omega_{}}{A} } \right)^{2}d\left( \sqrt{ \frac{\omega_{0}-\omega }{A} } \right) \\
 & = -4\pi{ \frac{\omega_{0}-\omega}{A} } \frac{1}{2} \frac{1}{\sqrt{ A }} \frac{1}{\sqrt{ \omega_{0}-\omega }}d\omega \\
 & = - \frac{2\pi}{A^{3/2}} \sqrt{ \omega_{0}-\omega }d\omega
\end{align}$$
Since one mode takes a volume of $\left( \frac{2\pi}{L} \right)^{3}$ in the $K$-space, then the number of modes varied is:
$$- \left( \frac{2\pi}{L} \right)^{3}\frac{2\pi}{A^{3/2}}\sqrt{ \omega_{0}-\omega }d\omega$$
Then the density of modes is:
$$D(\omega)=\left( \frac{2\pi}{L} \right)^{3} \frac{2\pi}{A^{3/2}}\sqrt{ \omega_{0}-\omega }$$
If $\omega>\omega_{0}$, then there is no region in the $K$-space that satisfies the dispersion relation. Then there is zero number of modes changes corresponding to variation $d\omega$. Then:
$$D(\omega)=0$$
# Kittel 5.4

# (a)

We assume that the dispersion relation is given by:
$$\omega=ck$$
where $\mathbf{k}$ is two-dimensional. Then $\omega=ck$ defines a circle on a plane with radius $\frac{\omega}{c}$. If we vary $\omega$ by $d\omega$, then the area enclosed by the circle changes by:
$$dS= 2\pi \frac{\omega}{c} \cdot \frac{d\omega}{c}$$
So the number of modes changes by:
$$2\pi \frac{\omega}{c}\cdot \frac{d\omega}{c}\cdot\left( \frac{L}{2\pi} \right)^{2}= \frac{A}{2\pi} \frac{\omega}{c^{2}}d\omega\text{ where }A=L^{2}$$
Then the density of modes is:
$$D(\omega)= \frac{A}{2\pi} \frac{\omega}{c^{2}}$$
Then we find the internal energy:
$$\begin{align}
U & = \int_{0}^{\omega_{D}} d\omega D(\omega) \frac{\hbar \omega}{e^{\beta \hbar \omega}-1} \\
 & = \int d\omega \frac{A}{2\pi} \frac{\omega}{c^{2}} \frac{\hbar \omega}{e^{\beta \hbar \omega}-1} \\
 & = \frac{A}{2\pi} \frac{\hbar}{c^{2}}\left( \frac{1}{\beta \hbar} \right)^{3} \int_{0}^{\beta \hbar \omega_{c}}dx \frac{x^{2}}{e^{x}-1}
\end{align}$$
Now let $T\rightarrow 0$ so that $\beta \rightarrow \infty$. Then:
$$\begin{align}
U & = \frac{A}{2\pi} \frac{\hbar}{c^{2}}\left( \frac{1}{\beta \hbar} \right)^{3} \int_{0 }^{\infty}dx \frac{x^{2}}{e^{x}-1} \\
 & = \frac{A}{2\pi} \frac{1}{c^{2}\hbar^{2}}k^{3}T^{3} \Gamma(2)\zeta(2)
\end{align}$$
Then clearly:
$$C= \frac{\partial U}{\partial T}\propto T^{2}$$
## (b)

Consider the dispersion relation is modified into:
$$\omega(\mathbf{k})=\sqrt{ c^{2}k_{x}^{2}+c^{2}k_{y}^{2}+\delta^{2}k_{z}^{2} }\text{ where }\delta\ll c$$
From the occupation number of bosons $\frac{1}{e^{\hbar \omega \beta}-1}$, we know that the mode is highly occupied only when $\hbar \omega$ is small compared with $kT$. So here in this case, only $k_{x},k_{y}=0$ states contribute significantly, since $k_{x},k_{y}$ are too large compared with $kT$. Therefore, the system can be approximated by a 1D system with $k_{z}$ active. Then clearly, for a 1D system, 
$$\begin{align}
U & \propto \int_{0}^{\omega_{D}}d\omega \frac{\hbar \omega}{e^{\beta \hbar \omega}-1} \\
 & \propto T^{2} \int_{0}^{\infty} dx\frac{x}{e^{x}-1}\propto T^{2}
\end{align}$$
So:
$$C= \frac{\partial U}{\partial T}\propto T$$

