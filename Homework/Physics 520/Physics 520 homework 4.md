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
