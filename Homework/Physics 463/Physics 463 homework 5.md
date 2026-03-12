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
Then the total number of states is:
$$\begin{align}
\sum_{k\in\text{FBZ}} 1 & = \frac{Na}{2\pi} \sum \Delta k \\
 & \approx \frac{Na}{2\pi}\int_{\text{FBZ}}dk
\end{align}$$
The approximation is precise under thermodynamic limit. We know that:
$$\begin{align}
 & \omega^{2}= \frac{4C}{M}\sin ^{2}\left( \frac{ka}{2} \right) \\
\implies & 2\omega d\omega=  \frac{8C}{M} \sin\left( \frac{ka}{2} \right)\cos\left( \frac{ka}{2} \right) \frac{a}{2}dk = \frac{2aC}{M}\sin(ka)dk \\
\end{align}$$
We also know:
$$\begin{align}
 & \omega^{2}= \frac{4C}{M}\sin ^{2}\left( \frac{ka}{2} \right)= \frac{2C}{M}(1-\cos ka) \\
\implies & \cos ka=1- \frac{M}{2C}\omega^{2}
\end{align}$$
Then:
$$\begin{align}
 & 2\omega d\omega= \frac{2aC}{M}\sqrt{ 1-\left( 1- \frac{M}{2C}\omega^{2} \right)^{2} } dk  \\
\implies & 2d\omega= \frac{a}{2}\sqrt{ \frac{4C}{M}-\omega^{2} }dk= \frac{a}{2}\sqrt{ \omega_{m}^{2}-\omega^{2} }dk \\
\implies & dk=  \frac{4 }{a} \frac{1}{\sqrt{ \omega^{2}_{m}-\omega^{2} }}d\omega
\end{align}$$
Then then number of states is:
$$\begin{align}
\frac{Na}{2\pi}\int_{\text{FBZ}}dk & = \int \frac{2N}{\pi} \frac{1}{\sqrt{ \omega _{m}^{2}-\omega^{2} }}d\omega 
\end{align}$$
Then the density of states is:
$$D(\omega)= \frac{2N}{\pi} \frac{1}{\sqrt{ \omega^{2}_{m}-\omega^{2} }}$$

