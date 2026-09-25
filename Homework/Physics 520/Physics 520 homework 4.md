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
$$\nu= \frac{N}{\Phi / \Phi_{0}}=  \frac{nL^{2}\Phi_{0}}{\Phi} = \frac{nh}{eB}$$

# Problem 3
## (a)

Choose the Landau gauge $\mathbf{A}=eBx  \hat{\mathbf{y}}$. We have:
$$\begin{align}
H & = \frac{1}{2m}(p_{x}^{2}+(p_{y}+eBx)^{2}+p_{z}^{2})+ \frac{1}{2}m\omega_{0}^{2}x^{2} \\
\end{align}$$
Observe that:
$$\begin{align}
[p_{y},H ] & = \frac{1}{2m}[p_{y},(p_{y}+eBx)^{2}] =0 \\
[p_{z},H] & = \frac{1}{2m}[p_{z},p_{z}]=0
\end{align}$$
We guess the eigen function: $\psi= e^{ik_{y}y+ik_{z}z}f(x)$. Then we have:
$$\begin{align}
 & H\psi(\mathbf{r})=E\psi(\mathbf{r}) \\
\implies & \frac{1}{2m}(p_{x}^{2}+ (\hbar k_{y}+eBx)^{2}+ \hbar^{2}k_{z}^{2})e^{ik_{y}y+ik_{z}z}f(x)+ \frac{1}{2}m^{}\omega_{0}^{2}x^{2}e^{ik_{y}y+ik_{z}z}f(x)=Ee^{ik_{y}y+ik_{z}z}f(x) \\
\implies &  \frac{1}{2m}(p_{x}^{2}+(\hbar k_{y}+eBx)^{2}+\hbar^{2}k_{z}^{2}+ m^{2}\omega_{0}^{2}x^{2})f=Ef
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
 & \left[  \frac{p_{x}^{2}}{2m}+ \frac{\hbar^{2}k_{y}^{2}}{2m}\left(  \frac{\omega_{0}}{\Omega_{c}} \right)^{2}+ \frac{\hbar^{2}k_{z}^{2}}{2m} + \frac{1}{2}m\Omega_{c}^{2}(x+x_{0})^{2} \right]f=Ef
\end{align}$$
Then clearly $\frac{p_{x}^{2}}{2m}+ \frac{1}{2}m\Omega_{c}^{2}(x+x_{0})^{2}$ forms a harmonic oscillator. We have:
$$\begin{align}
E(l,k_{y},k_{z})= \left( \frac{1}{2}+l \right)\hbar \Omega_{c}+ \frac{\hbar^{2}k_{y}^{2}}{2m}\left(  \frac{\omega_{0}}{\Omega_{c}} \right)^{2}+ \frac{\hbar^{2}k_{z}^{2}}{2m}
\end{align}$$
