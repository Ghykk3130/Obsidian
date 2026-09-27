# Problem 1
## (a)

As we turn on the magnetic field, the energy levels of the conduction and valence bands are quantized into Landau levels. Therefore, only photons with energy quantized that way can excite electrons. 

Let $\nu$ be the frequency of the photon. Then we have:
$$\begin{align}
h\nu=\Delta E_{g}+\left( l_{h}+ \frac{1}{2} \right)\hbar \omega_{h}+\left( l_{e}+ \frac{1}{2} \right)\hbar \omega_{e}
\end{align}$$
Sine the spacing between the dips is even, we conclude that the selection rule $l_{h}=l_{e}$ must exist. Otherwise, assuming that in general $\omega_{h}\neq \omega_{e}$, we would get uneven spacing that are combinations of $\hbar \omega_{h}$ and $\hbar \omega_{e}$. 

Then we have:
$$\begin{align}
h\nu & = \Delta E_{g}+ l_{e}\hbar(\omega_{h}+\omega_{e})+ \frac{1}{2}\hbar(\omega_{h}+\omega_{e})
\end{align}$$
Therefore the absorbed photon energy is nothing but a linear function of $l_{e}$ with interception $\Delta E_{g}+ \frac{1}{2}\hbar(\omega_{h}+\omega_{e})$. We can read from the graph that:
$$\Delta E=\hbar(\omega_{h}+\omega_{e})\approx 0.039\ eV$$
which is just the energy difference between each photon absorption dip. 

Since there are no other strong minima beyond the graph, we conclude that $l_{e}=0$ corresponds to the leftmost peak, which is $h\nu \approx 0.44\ eV$. Then:
$$\begin{align}
\Delta E_{g} & =h\nu- \frac{1}{2}\hbar(\omega_{h}+\omega_{e}) \\
 & =0.44\ eV- \frac{1}{2}\times 0.039\ eV \\
 & \approx 0.421\ eV
\end{align}$$
## (b)

The potential felt by the renormalized electron is $-\frac{1}{4\pi\epsilon} \frac{e^{2}}{r}$. By Virial's theorem, we have:
$$\begin{align}
 & \frac{1}{2}m^{*}v^{2}= \frac{1}{8\pi\epsilon} \frac{e^{2}}{r}
\end{align}$$
By Bohr quantization, we have:
$$m^{*}vr=n\hbar$$
Then we have:
$$\begin{align}
 & \frac{1}{2}m^{*}\left(  \frac{n\hbar}{m^{*}r} \right)^{2}= \frac{1}{8\pi\epsilon} \frac{e^{2}}{r} \\
\implies & r= \frac{4\pi\epsilon \hbar^{2}}{m^{*}e^{2}} n^{2}
\end{align}$$
Then we have:
$$\begin{align}
E_{n} & = \frac{1}{2}m^{*}v^{2}- \frac{1}{4\pi\epsilon} \frac{e^{2}}{r} \\
 & = - \frac{1}{8\pi\epsilon} \frac{e^{2}}{r} \\
 & = - \frac{m^{*}e^{4}}{8\epsilon^{2}h^{2}} \frac{1}{n^{2}}
\end{align}$$
Observe that $|E_{1}| \propto \frac{m^{*}}{\epsilon_{r}^{2}}$. Then we have:
$$\begin{align}
|E_{1}| & = 13.6 \frac{m^{*}}{m_{0}} \frac{1}{\epsilon_{r}^{2}}\ eV \\

\end{align}$$
We have:
$$\begin{align}
m^{*} & = m_{0} \frac{|E_{1}|}{13.6} \epsilon_{r}^{2} \\
 & \approx 0.036m_{0}
\end{align}$$
This should be the effective mass of the electron. Write $m^{*}_{e}=0.036m_{0}$. 

From part (a) we have:
$$\begin{align}
 & \Delta E= \hbar(\omega_{h}+\omega_{e}) =\hbar eB\left( \frac{1}{m_{h}^{*}}+ \frac{1}{m_{e}^{*}} \right) \\
\implies &  \frac{1}{m^{*}_{h}}=\frac{\Delta E}{\hbar eB}- \frac{1}{m^{*}_{e}}\approx 6.391\times 10^{31}\text{ kg}^{-1}
\end{align}$$
Then:
$$m^{*}_{h}\approx 1.565 \times 10^{-31}\text{ kg}$$
# Problem 2
# (a)

From the plot I observe that $\nu=1,\ \nu=2$ splitting is quite pronounced. And this splitting feature begins to show roughly at $B=4\ T$.

## (b)
![[d8cc28a2c4779c13b56e7ca7a579826a.jpg|centering|300]]
We always assume that the linewidth is finite due to a finite lifetime. Say the lifetime is $\tau$. For small field, $g^{*}\mu_{B}B \ll \frac{\hbar}{\tau}$. Then the two peaks look like one peak. Only when the field becomes comparable to $\frac{\hbar}{\tau}$ or even larger can we resolve the difference between two peaks, which is $g^{*}\mu_{B}B$. 

When we increase the temperature, $\tau$ would be shortened due to collision. Then the linewidth $\frac{\hbar}{\tau}$ increases. So when we are scanning the field through a specific peak, even if we are slightly away from the peak, we still get available states. Therefore the peaks are wider. And the peaks are also larger because we have more available states, meaning that more electrons can be excited and create current through the sample.
## (c)

We have:
$$\begin{align}
n & = \frac{N}{L^{2}} \\
 & = \frac{A/(2\pi /L)^{2} }{L^{2}} \\
 & = \frac{A}{(2\pi)^{2}}
\end{align}$$
Where $A$ is the area enclosed by the Fermi surface. Recall that:
$$\begin{align}
F & = \frac{\hbar}{2\pi e}A
\end{align}$$
Then:
$$\begin{align}
n & = \frac{e}{h}F
\end{align}$$
We observed a peak at $B=2.5\ T$, another peak at $B=8\ T$. So:
$$\begin{align}
F & = \frac{1}{\frac{1}{2.5}- \frac{1}{8}} \\
 & \approx 3.64\ T
\end{align}$$
Then:
$$\begin{align}
n\approx 8.79\times 10^{14}\ m^{-2}
\end{align}$$
In the above calculation, we ignored the spin degeneracy. Now add back the spin degeneracy to get:
$$n\approx 1.76\times 10^{15}\ m^{-2}$$


# Problem 3
## (a)

Choose the Landau gauge $\mathbf{A}=eBx  \hat{\mathbf{y}}$. We have:
$$\begin{align}
H & = \frac{1}{2m}(p_{x}^{2}+(p_{y}+eBx)^{2})+ \frac{1}{2}m\omega_{0}^{2}x^{2} \\
\end{align}$$
Observe that:
$$\begin{align}
[p_{y},H ] & = \frac{1}{2m}[p_{y},(p_{y}+eBx)^{2}] =0 
\end{align}$$
We guess the eigen function: $\psi= e^{ik_{y}y}f(x)$. Then we have:
$$\begin{align}
 & H\psi(\mathbf{r})=E\psi(\mathbf{r}) \\
\implies & \frac{1}{2m}(p_{x}^{2}+ (\hbar k_{y}+eBx)^{2})e^{ik_{y}y}f(x)+ \frac{1}{2}m^{}\omega_{0}^{2}x^{2}e^{ik_{y}y}f(x)=Ee^{ik_{y}y}f(x) \\
\implies &  \frac{1}{2m}(p_{x}^{2}+(\hbar k_{y}+eBx)^{2}+ m^{2}\omega_{0}^{2}x^{2})f=Ef
\end{align}$$
We compute:
$$\begin{align}
(\hbar k_{y}+eBx)^{2}+m^{2}\omega_{0}^{2}x^{2} & = \hbar^{2}k_{y}^{2}+e^{2}B^{2}x^{2}+2\hbar k_{y}eBx+m^{2}\omega_{0}^{2}x^{2} \\
 & = \left(1- \frac{\hbar^{2}k_{y}^{2}e^{2}B^{2}}{e^{2}B^{2}+m^{2}\omega_{0}^{2}}\right)\hbar^{2}k_{y}^{2}+ (e^{2}B^{2}+m^{2}\omega_{0}^{2})\left( x+ \frac{\hbar k_{y}eB}{e^{2}B^{2}+m^{2}\omega_{0}^{2}} \right)^{2} \\
 & = \frac{m^{2}\omega_{0}^{2}}{e^{2}B^{2}+m^{2}\omega_{0}^{2}} \hbar^{2}k_{y}^{2}+(e^{2}B^{2}+m^{2}\omega_{0}^{2})\left( x+ \frac{\hbar k_{y}eB}{e^{2}B^{2}+m^{2}\omega_{0}^{2}} \right)^{2}
\end{align}$$
We define:
$$\Omega_{c}= \sqrt{ \frac{e^{2}B^{2}+m^{2}\omega_{0}^{2}}{m^{2}} },\ x_{0}= \frac{\hbar k_{y}eB}{e^{2}B^{2}+m^{2}\omega_{0}^{2}}$$
Then:
$$\begin{align}
(\hbar k_{y}+eBx)^{2}+m^{2}\omega_{0}^{2}x^{2} & = \hbar^{2}k_{y}^{2} \left(\frac{\omega_{0}}{\Omega_{c}}\right)^{2}+ m^{2}\Omega_{c}^{2}\left( x+ x_{0} \right)
\end{align}$$Then:
$$\begin{align}
 & \left[  \frac{p_{x}^{2}}{2m}+ \frac{\hbar^{2}k_{y}^{2}}{2m}\left(  \frac{\omega_{0}}{\Omega_{c}} \right)^{2}+ \frac{1}{2}m\Omega_{c}^{2}(x+x_{0})^{2} \right]f=Ef
\end{align}$$
Then clearly $\frac{p_{x}^{2}}{2m}+ \frac{1}{2}m\Omega_{c}^{2}(x+x_{0})^{2}$ forms a harmonic oscillator. We have:
$$\begin{align}
E(l,k_{y})= \left( \frac{1}{2}+l \right)\hbar \Omega_{c}+ \frac{\hbar^{2}k_{y}^{2}}{2m}\left(  \frac{\omega_{0}}{\Omega_{c}} \right)^{2}
\end{align}$$
## (b)

Here we plot the perturbed Landau levels. Notice that if we are close to the sample edge, then $\omega_{0}$ would become very large, so that the potential $\frac{1}{2}m\omega_{0}^{2}x^{2}$ can still confine the electrons to the sample. 

If $\epsilon_{F}$ is between the jth ant the (j+1)th level, then there are j levels below. If we are close to the sample edge, then $x_{0}$ would be close to the sample edge. This would correspond to some $k_{y}$ on the $E\text{ v.s. }k_{y}$ plot. Nearby these $k_{y}$'s, the slope of the dispersion would become so large such that $\epsilon_{F}$ intersects with the first j levels. By the argument above, each of such interactions correspond to a state on the edge. Then there would be j channels on the sample edge.  
![[5694cce8c04d25a30dc4e235e1095b12.jpg|centering|400]]
## (c)

Assume that $\mu_{L}>\mu_{R}=\epsilon_{F}$. Assume that the potential connecting the sample and the electron reservoirs are infinitely flat, so that the energy conservation is assumed as electrons are emitted or received. 

For electrons coming our from the left, the occupation number is $f(E-\mu_{L})$. For electrons coming out from the right, the occupation number is $f(E-\mu_{R})$. It is very clear that the electrons traveling on the two edges have the opposite velocity, since the perturbed Landau level is an even function of $k_{y}$, so that the group velocity is an odd function of $k_{y}$. Each electron carries charge $-e$. 

Then:
$$\begin{align}
I & = - 2\frac{e}{L} \sum_{n}\sum_{k_{y}} \frac{1}{\hbar} \frac{\partial E(n,k_{y})}{\partial k_{y} }(f(E-\mu_{L})-f(E-\mu_{R})) \\
 & = - 2\frac{e}{L }\sum_{n} \int_{-\infty}^{\infty} \frac{dk_{y}}{2\pi /L } \frac{1}{\hbar} \frac{\partial E}{\partial k_{y}}(f(E-\mu_{L})-f(E-\mu_{R})) \\
 & = - 2\frac{e}{h}\sum_{n} \int_{-\infty}^{\infty} dk_{y} \frac{\partial E}{\partial k_{y}}(\theta(\mu_{L}-E)-\theta(\mu_{R}-E)) \\
 & = - 2\frac{e}{h}\sum_{n} \int_{E_{n}}^{\infty}dE(\theta(\mu_{L}-E)-\theta(\mu_{R}-E)),\ E_{n}= \left( n+ \frac{1}{2} \right) \hbar \Omega_{c} \\
 & = - 2\frac{e}{h}\sum_{E_{n}\leq \mu_{R}}(\mu_{L}-E_{n}-\mu_{R}+E_{n}) \\
 & = -2 \frac{e}{h}(\mu_{L}-\mu_{R})j
\end{align}$$
Here $j$ is the number of Landau levels below $\mu_{R}=\epsilon_{F}$. In the derivation above, we also assume $\mu_{L}-\mu_{R}<\hbar \Omega_{c}$. The 2 counts for spin degeneracy. Then:
$$\begin{align}
R & = \frac{V}{I} \\
 & = \frac{(\mu_{L}-\mu_{R}) /(-e)}{-2 \frac{e}{h}(\mu_{L}-\mu_{R})j} \\
 & = \frac{h}{e^{2}} \frac{1}{2j} 
\end{align}$$
The detected longitudinal voltage is in fact the Hall voltage, since on the two edges, the electrons are distributed according to $\mu_{L}, \mu_{R}$ respectively. If we measure the Hall volage, it would give us $\frac{\mu_{L}-\mu_{R}}{-e}$, which is equal to what we measure along the longitudinal direction. 
## (d)

For simplicity, assume that $\mathbf{B}$ points out of plane. Assume that $\mu_{L}>\mu_{R}$. If the carrier is hole, then the current flows clockwise. 

$V_{1,4}, V_{1,2},V_{1,3}, V_{4,6},V_{4,5}$ gives the Hall voltage. Since the upper edge carries the same chemical potential as $1$, and the lower edge carries the same chemical potential as $4$. 

Then by the same reasoning, $V_{1,6},V_{1,5},V_{6,5},V_{2,4},V_{3,4},V_{2,3}$ gives zero resistance, since these terminal share the same chemical potential. 

If the carrier is electron, then the current flows counterclockwise.

Then $V_{1,4},V_{1,6},V_{1,5},V_{2,4},V_{3,4}$ gives the Hall resistance. $V_{1,2},V_{1,3},V_{2,3},V_{4,6},V_{4,6},V_{5,6}$ gives zero resistance. The reasoning is similar.
## (e)

For simplicity, assume that $\mathbf{B}$ points out of plane. Assume that $\mu_{L}>\mu_{R}$. If the carrier is hole, then the current flows clockwise. 

Then $V_{L,R},V_{T,R}$ gives the Hall resistance. Since upper edge, which connects $L,T$ has the same chemical potential. $V_{L,T}$ then measures the zero longitudinal resistance. 

If the carrier is electron, then the current flows counterclockwise. Then $V_{L,R},V_{L,T}$ gives the Hall resistance. $V_{T,R}$ gives the zero longitudinal resistance. The reasoning is similar.



