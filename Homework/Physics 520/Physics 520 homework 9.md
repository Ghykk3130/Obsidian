# Problem 1
## (a)

The Zeeman perturbation is:
$$\begin{align}
H_{Z}=g\mu_{B}BS
\end{align}$$
So for $n_{\uparrow}$, this gives an energy of $\mu_{B}B$. For $n_{\downarrow}$, this gives an energy of $-\mu_{B}B$. We have:
$$\begin{align}
M & = -\mu_{B}(n_{\uparrow}-n_{\downarrow}) \\
 & = -\mu_{B} \left( \int_{0}^{\infty}dE \frac{1}{2} \rho(E)f(E+\mu_{B}B)- \int_{0}^{\infty}dE \frac{1}{2}\rho(E)f(E-\mu_{B}B)  \right) \\
 & = -\frac{\mu_{B}}{2}\int_{0}^{\infty}dE \rho(E)[f(E+\mu_{B}B)-f(E-\mu_{B}B)] \\
 & \approx- \frac{\mu_{B}}{2}\int_{0}^{\infty}dE \rho(E) \frac{\partial f}{\partial E} 2\mu_{B}B \\
 & = -\mu_{B}^{2}B \int_{0}^{\infty}dE \rho(E) \frac{\partial f}{\partial E} \\
 & =  \mu_{B}^{2}B \int_{0}^{\infty}dE \rho(E)\delta(E-E_{F}) \\
 & = \mu_{B}^{2}B \rho(E_{F})
\end{align}$$
Here $\rho(E)$ is the unsplit DOS, so the $\frac{1}{2}$ factor comes from splitting. The minus sign in the front counts for the negative charge carried by electrons. Then:
$$\begin{align}
\chi & = \frac{M}{B / \mu_{0}} \\
 & = \mu_{0}\mu_{B}^{2}\rho(E_{F})
\end{align}$$
Consider a dispersion:
$$E= \frac{\hbar^{2}k^{2}}{2m^{*}}$$
This is just a ball with radius $\propto \sqrt{ m^{*}E }$. Then:
$$\begin{align}
\rho_{E} & \propto \frac{(\sqrt{ m^{*}E  })^{2} \sqrt{ m^{*} }  \frac{1}{\sqrt{ E }}  }{(2\pi /L)^{3}} \\
 & \propto (m^{*})^{\frac{3}{2}}\sqrt{ E }
\end{align}$$
So the larger the effective mass is, the larger Pauli susceptibility would be. Since the Fermi temperature is typically much higher than the melting point, then the Pauli susceptibility is almost independent of temperature.
## (b)

The energy is calculated by:
$$\begin{align}
U & = \int_{0}^{\infty}dE \rho(E)E
\end{align}$$
Since turning on $B$ field would change $\rho(E)$, then $U$ would change as well. We only need to take $- \frac{\partial U}{\partial B}$ to find the magnetization. 

Since the larger $m^{*}$ is, the smaller $\omega_{c}$ would be. This means that the Landau level spacing would be smaller. Then if we draw the $\rho(E)$ v.s. $E$ diagram, the "Christmas tree" of Landau DOS would look more contracted. Therefore $U(B)$ would be smaller. Then $\frac{\partial U}{\partial B}\approx \frac{U(B)-U(0)}{B}$ would be smaller. Then the susceptibility would be smaller.  This is consistent with the qualitative expression for Landau susceptibility:
$$\chi= - \frac{\mu_{0}e^{2}k_{F}}{12\pi^{2}m^{*}}$$
## (c)

Copper is paramagnetic probably because the effective mass is large, so that the Pauli paramagnetism outweighs the Landau diamagnetism. Conversely, graphite is diamagnetic probably because its effective mass is small. 
## (d)

# Problem 2
## (a)

 We know that:
$$\begin{align}
\frac{E}{V} & = \int_{k<k_{F}} \frac{d^{3}k}{(2\pi)^{3}} \left( E_{\text{min}}+ \frac{\hbar^{2}k^{2}}{2m^{*}} \right)
\end{align}$$
We know that:
$$\begin{align}
 &  \frac{\frac{4}{3}k_{F}^{3}}{(2\pi /L)^{3} }=N \\
\implies & \frac{1}{(2\pi)^{3}} \frac{4}{3}\pi k_{F}^{3} =n
\end{align}$$
Therefore:
$$\begin{align}
\int_{k<k_{F}} \frac{d^{3}k}{(2\pi)^{3}}E_{\text{min}} & = \frac{1}{(2\pi)^{3}} \frac{4}{3}\pi k_{F}^{3}E_{\text{min}}= E_{\text{min}}n
\end{align}$$
We also have:
$$\begin{align}
\int_{k<k_{F}} \frac{d^{3}k}{(2\pi)^{3}} \frac{\hbar^{2}k^{2}}{2m^{*}} & = \frac{1}{(2\pi)^{3}} \frac{\hbar^{2}}{2m^{*}} 4\pi \int_{0}^{k_{F}} k^{2}dk k^{2} \\
 & = \frac{1}{(2\pi)^{3}} \frac{\hbar^{2}}{2m^{*}}4\pi \frac{k_{F}^{5}}{5} \\
 & = \frac{6^{5/3}}{20}\pi^{3} \frac{\hbar^{2}}{m^{*}}n^{5/3}
\end{align}$$
Therefore:
$$\begin{align}
\frac{E}{V} & = E_{\text{min}}n+ Cn^{5/3},\ C= \frac{6^{5/3}}{20}\pi^{3} \frac{\hbar^{2}}{m^{*}}
\end{align}$$
## (b)

We can treat each group of spins as non-interacting Fermi gas. Then:
$$\begin{align}
\frac{E}{V} & = n_{\uparrow}E_{\text{min}}+Cn_{\uparrow}^{5/3}+ n_{\downarrow}E_{\text{min}}+Cn_{\downarrow}^{5/3} \\
 & = nE_{\text{min}}+C(n_{\uparrow}^{5/3}+n_{\downarrow}^{5/3}) \\
 & = nE_{\text{min}}+C\left[ \left(  \frac{n}{2}^{} \right)^{5/3}(1+\alpha)^{5/3}- \left(  \frac{n}{2} \right)^{5/3}(1-\alpha)^{5/3} \right] \\
 & \approx nE_{\text{min}}+C\left(  \frac{n}{2} \right)^{5/3}\left[ 1+ \frac{5}{3}\alpha^{}+ \frac{5}{9}\alpha^{2} - \frac{5}{81}\alpha^{3}+ \frac{5}{243}\alpha^{4} \right]
\end{align}$$
We know that for $0<\alpha < 1$, we must have:
$$\begin{align}
\frac{5}{81}\alpha^{3} < \frac{5}{9}\alpha^{3}< \frac{5}{9}\alpha^{2}
\end{align}$$
Then we must have:
$$\frac{5}{3}\alpha+ \frac{5}{9}\alpha^{2}- \frac{5}{81}\alpha^{3}+ \frac{5}{243}\alpha^{4}\geq 0$$
The only point where it takes zero is $\alpha=0$. So $\alpha=0$ gives the lowest possible energy.
## (c)

We have:
$$\begin{align}
H_{\text{interaction}} & = U\sum_{i}n^{i}_{\uparrow}n^{i}_{\downarrow} \\
 & = U \frac{n^{2}}{4}\sum_{i}(1+\alpha)(1-\alpha) \\
 & = \frac{1}{4}Un^{2}N(1-\alpha^{2})
\end{align}$$
## (d)

