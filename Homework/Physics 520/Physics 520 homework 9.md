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

Imagine some of down spins are moved to the up spins, so that the Fermi energy of up spins is lifted to $E_{F}+\delta E$, and the Fermi energy of the down spins is lifted to $E_{F}-\delta E$. Let $\bar{n}$ be the spinless DOS. Let $\delta n_{\uparrow},\ \delta n_{\downarrow}$ denote the induced change in the density of up spins and down spins.

Then we have:
$$\begin{align}
\Delta E & = \delta E \delta E\bar{n}(E_{F})+U(n_{\uparrow}+\delta n_{\uparrow})(n_{\downarrow}-\delta n_{\downarrow})-Un_{\uparrow}n_{\downarrow} \\
 & = (\delta E)^{2}\bar{n}-U\delta n_{\uparrow}\delta n_{\downarrow}
\end{align}$$
where we assumed $n_{\uparrow}=n_{\downarrow}$. Know that:
$$\begin{align}
\delta n_{\uparrow}=\delta E \bar{n}(E_{F}),\ \delta n_{\downarrow}=\delta E \bar{n}(E_{F}) 
\end{align}$$
Then we have:
$$\begin{align}
\Delta E & = (\delta E)^{2}\bar{n}-U(\delta E)^{2} \bar{n}^{2}
\end{align}$$
The induced magnetization is:
$$\begin{align}
M & = \mu_{B}(n_{\uparrow}+\delta n_{\uparrow}-n_{\downarrow}+\delta n_{\downarrow}) \\
 & = \mu_{B} 2\delta E \bar{n}
\end{align}$$
So after adding Zeeman interaction into the energy change, we get:
$$\begin{align}
\Delta E & = (\delta E)^{2}\bar{n}-U(\delta E)^{2}\bar{n}^{2}-MB \\
 & = \frac{M^{2}}{4\mu^{2}_{B}\bar{n}}(1-U \bar{n})-MB
\end{align}$$
To minimize, we take the derivative:
$$\begin{align}
 & \frac{M}{2\mu_{B}^{2}\bar{n}}(1-U\bar{n})-B=0 \\
\implies & M= \frac{2\mu_{B}^{2}\bar{n}(E_{F})B}{1-U \bar{n}(E_{F})} \\
 \implies & \chi= \frac{2\mu_{0}\mu_{B}^{2}\bar{n}(E_{F})}{1-U\bar{n}(E_{F})}
\end{align}$$
Notice that if $U$ is large, the susceptibility is indeed enhanced. 
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
 & = nE_{\text{min}}+C\left[ \left(  \frac{n}{2}^{} \right)^{5/3}(1+\alpha)^{5/3}+\left(  \frac{n}{2} \right)^{5/3}(1-\alpha)^{5/3} \right] \\
 & \approx nE_{\text{min}}+C\left(  \frac{n}{2} \right)^{5/3}\left[ 1+ \frac{5}{3}\alpha^{}+ \frac{5}{9}\alpha^{2} - \frac{5}{81}\alpha^{3}+ \frac{5}{243}\alpha^{4}+(\alpha \leftrightarrow -\alpha) \right] \\
 & = nE_{\text{min}}+ 2C\left(  \frac{n}{2} \right)^{5/3} \left[ 1+ \frac{5}{9}\alpha^{2}+ \frac{5}{243}\alpha^{4} \right]
\end{align}$$
Obviously, this is a monotonically increasing function of $\alpha$. The only point where it takes zero is $\alpha=0$. So $\alpha=0$ gives the lowest possible energy.
## (c)

We have:
$$\begin{align}
H_{\text{interaction}} & = U\sum_{i}n^{i}_{\uparrow}n^{i}_{\downarrow} \\
 & = U \frac{n^{2}}{4}\sum_{i}(1+\alpha)(1-\alpha) \\
 & = \frac{1}{4}Un^{2}N(1-\alpha^{2})
\end{align}$$
## (d)

We have:
$$\begin{align}
 &  E_{\text{interaction}}= \frac{1}{4}Un^{2}N(1-\alpha^{2}) \\
\implies &  \frac{E_{\text{interaction}}}{V}= \frac{1}{4}Un^{3}(1-\alpha^{2})
\end{align}$$
Then:
$$\begin{align}
\frac{E}{V}= nE_{\text{min}}+ 2C\left(  \frac{n}{2} \right)^{5/3} \left[ 1+ \frac{5}{9}\alpha^{2}+ \frac{5}{243}\alpha^{4} \right]+ \frac{1}{4}Un^{3}(1-\alpha^{2})
\end{align}$$
We know that from phase transition theory, the stability changes if the coefficient of the second-order term changes sign. So we set:
$$\begin{align}
 & 2C\left(  \frac{n}{2} \right)^{5/3} \frac{5}{9}- \frac{1}{4}Un^{3}=0 \\
\implies & U_{c}= \frac{5}{9}C \left(  \frac{2}{n} \right)^{4/3}
\end{align}$$
Ignoring the constant terms, we have:
$$\begin{align}
\frac{E}{V} & = \left( 2C\left(  \frac{n}{2} \right)^{5/3} \frac{5}{9}- \frac{1}{4}Un^{3} \right)\alpha^{2}+ \frac{10}{243}C\left(  \frac{n}{2} \right)^{5/3}\alpha^{4} \\
 & = \left( 2C\left(  \frac{n}{2} \right)^{5/3} \frac{5}{9}- \frac{1}{4}U_{c}n^{3}+ \frac{1}{4}(U_{c}-U)n^{3} \right)\alpha^{2}+ \frac{10}{243}C\left(  \frac{n}{2} \right)^{5/3}\alpha^{4} \\
 & = \frac{1}{4}(U_{c}-U)n^{3}\alpha^{2}+ \frac{10}{243}C\left(  \frac{n}{2} \right)^{5/3}\alpha^{4}
\end{align}$$
We differentiate and ignore the $\alpha=0$ solution:
$$\begin{align}
 & \frac{1}{2}(U_{c}-U)n^{3}\alpha+ \frac{40}{243}C\left(  \frac{n}{2} \right)^{5/3}\alpha^{3}=0 \\
\implies & \alpha= \pm \sqrt{ \frac{243}{40C}2^{2/3}n^{4/3}(U-U_{c}) }
\end{align}$$
Then:
$$\begin{align}
M & = \mu_{B}n\alpha \\
 & = \pm \mu_{B}n^{5/3}2^{1/3}\sqrt{  \frac{243}{40C}(U-U_{c}) }
\end{align}$$
# Problem 3
## (a)

Since $\mathcal{H}^{'}$ doesn't operate on spins, we know that $\ket{+}$ must mix with $\ket{+}$, and $\ket{-}$ must mix with $\ket{-}$. Then we have:
$$\begin{align}
\bra{\psi_{\mathbf{k}^{'}\pm}} \cos(\mathbf{q}\cdot \mathbf{r})\ket{\psi_{\mathbf{k}\pm}}  & = \frac{1}{V}\int d^{3}r e^{-i\mathbf{k}^{'}\cdot \mathbf{r}} \cos(\mathbf{q}\cdot \mathbf{r}) e^{i\mathbf{k}\cdot \mathbf{r}} \\
 & = \frac{1}{V}\int d^{3}r e^{-i\mathbf{k}^{'}\cdot \mathbf{r}} \frac{e^{i\mathbf{q}\cdot \mathbf{r}}+e^{-i\mathbf{q}\cdot \mathbf{r}}}{2}e^{i\mathbf{k}\cdot \mathbf{r}} \\
 & = \frac{1}{2}(\delta(-\mathbf{k}^{'}+\mathbf{q}+\mathbf{k}=0)+\delta(-\mathbf{k}^{'}-\mathbf{q}+\mathbf{k}=0))
\end{align}$$
Therefore:
$$\begin{align}
\sum_{\mathbf{k}^{'}} \psi_{\mathbf{k}^{'}\pm} \frac{\bra{\psi_{\mathbf{k}^{'}\pm}} \mathcal{H}^{'}\ket{\psi_{\mathbf{k}\pm}} }{E_{\mathbf{k}^{'}}-E_{\mathbf{k}}} & = \frac{1}{2}\cdot\left( \pm \frac{g}{2}\mu_{0}\mu_{B}H_{\mathbf{q}} \right) \left[  \frac{\psi_{(\mathbf{k}+\mathbf{q})\pm}}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+  \frac{\psi_{(\mathbf{k}-\mathbf{q}})\pm}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}}  \right] \\
 & = \pm \frac{g}{4}\mu_{0}\mu_{B}H_{\mathbf{q}}\left[  \frac{e^{i(\mathbf{k}+\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}} + \frac{e^{i(\mathbf{k}-\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}}\right] \frac{1}{\sqrt{ V }}\ket{\pm} 
\end{align}$$
Then the perturbed ket is:
$$\begin{align}
\psi_{\mathbf{k}\pm}(\mathbf{r})= \frac{1}{\sqrt{ V }}\left( e^{i\mathbf{k}\cdot \mathbf{r}}\pm \frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}}{4}\left[  \frac{e^{i(\mathbf{k}+\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+ \frac{e^{i(\mathbf{k}-\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}} \right] \right)\ket{\pm} 
\end{align}$$
Keeping only the terms that are linear in $H_{\mathbf{q}}$, we get:
$$\begin{align}
|\psi_{\mathbf{k}\pm}(\mathbf{r}) |^{2} & = \frac{1}{V}\left( e^{-i\mathbf{k}\cdot \mathbf{r}}\pm \frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}}{4}\left(  \frac{e^{-i(\mathbf{k}+\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+ \frac{e^{-i(\mathbf{k}-\mathbf{q})\cdot \mathbf{r} }}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}} \right) \right)(\text{c.c.}) \\
 & \approx \frac{1}{V}\pm  \frac{1}{V}\frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}}{4}e^{-i\mathbf{k}\cdot \mathbf{r}}\left(  \frac{e^{i(\mathbf{k}+\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+ \frac{e^{i(\mathbf{k}-\mathbf{q})\cdot \mathbf{r}}}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}} \right)\pm \text{c.c.} \\
 & = \frac{1}{V}\pm  \frac{1}{V}\frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}}{2}\cos(\mathbf{q}\cdot \mathbf{r})\left(  \frac{1}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+ \frac{1}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}} \right) \\
 & = \frac{1}{V}\pm  \frac{1}{V}\frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}m_{e}}{\hbar^{2}}\cos(\mathbf{q}\cdot \mathbf{r})\left(  \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2}}+ \frac{1}{|\mathbf{k}-\mathbf{q}|^{2}-k^{2}}^{} \right) \\
 & = \frac{1}{V}\left(1\pm \frac{1}{V}\frac{g\mu_{0}\mu_{B}H_{\mathbf{q}}}{2}\cos(\mathbf{q}\cdot \mathbf{r})\left(  \frac{1}{E_{\mathbf{k}+\mathbf{q}}-E_{\mathbf{k}}}+ \frac{1}{E_{\mathbf{k}-\mathbf{q}}-E_{\mathbf{k}}} \right)\right)
\end{align}$$
Then according to the problem, the next step is to calculate the magnetization. It suffices to calculate:
$$\begin{align}
\int_{k<k_{F}} d^{3}k \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2}} & = 2\pi \int k^{2}\sin \theta dkd\theta \frac{1}{2kq\cos \theta+q^{2}} \\
 & = -\frac{2\pi}{q}\int k^{2}dk d(\cos \theta) \frac{1}{2k\cos \theta+q} \\
 & = - \frac{2\pi}{q}\int k^{2}dk \frac{1}{2k} \ln\left| \frac{-2k+q }{2k+q} \right| \\
 & = - \frac{\pi}{q}\int dk k \ln\left| \frac{-2k+q}{2k+q} \right|
\end{align}$$
It suffices to compute:
$$\begin{align}
\int dx x \ln\left| \frac{1-x}{1+x} \right| & = \frac{x^{2}}{2}\ln\left| \frac{1-x}{1+x} \right|- \int dx \frac{x^{2}}{2} \frac{1+x}{1-x} \frac{d}{dx} \frac{1-x}{1+x} \\
 & = \frac{x^{2}}{2}\ln\left| \frac{1-x}{1+x} \right| + \int dx \frac{x^{2}}{1-x^{2}}
\end{align}$$
Know that:
$$\begin{align}
\int dx \frac{x^{2}}{1-x^{2}} & = \int dx (-1)+ \int dx \frac{1}{1-x^{2}} \\
 & = -x+  \frac{1}{2} \int dx \left(  \frac{1}{1-x}+ \frac{1}{1+x} \right) \\
 & = -x+ \frac{1}{2}(-\ln|1-x|+\ln|1+x|)+C \\
 & = -x+ \frac{1}{2}\ln\left| \frac{1+x}{1-x} \right|+C
\end{align}$$
Then:
$$\begin{align}
\int dx x \ln\left| \frac{1-x}{1+x} \right| & = -x+ \frac{x^{2}-1}{2}\ln\left| \frac{1-x}{1+x} \right|+C
\end{align}$$
Then we have:
$$\begin{align}
\int d^{3}k \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2} } & = - \frac{\pi}{q}\left(  \frac{q}{2} \right)^{2} \left[ - \frac{2k}{q}+ \frac{\left(  \frac{2k}{q} \right)^{2}-1}{2}\ln\left| \frac{q-2k}{q+2k} \right| \right]_{0}^{k_{F}} \\
 & = - \frac{\pi q}{4}\left[ - \frac{2k_{F}}{q}+ \frac{\left(  \frac{2k_{F}}{q} \right)^{2}-1}{2}\ln\left| \frac{q-2k_{F}}{q+2k_{F}} \right| \right]
\end{align}$$
Then by replacing $q$ with $-q$, we easily get:
$$\begin{align}
\int_{k<k_{F}} d^{3}k \frac{1}{|\mathbf{k}-\mathbf{q}|^{2}-k^{2}} = \frac{\pi q}{4}\left[ \frac{2k_{F}}{q}+ \frac{\left(  \frac{2k_{F}}{q} \right)^{2}-1}{2}\ln\left| \frac{q+2k_{F}}{q-2k_{F}} \right| \right]
\end{align}$$
Then:
$$\begin{align}
\int d^{3}k \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2} }+ \int d^{3}k \frac{1}{|\mathbf{k}-\mathbf{q}|^{2}-k^{2}} & = \frac{\pi q}{2}\left[  \frac{2k_{F}}{q}+ \frac{\left(  \frac{2k_{F}}{q} \right)^{2}-1}{2} \ln\left| \frac{q+2k_{F}}{q-2k_{F}} \right| \right]
\end{align}$$
Therefore:
$$\begin{align}
M_{\mathbf{q}} & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}H_{\mathbf{q}}}{\hbar^{2}(2\pi)^{3}} \cdot \frac{\pi q}{2}\left[  \frac{2k_{F}}{q}+ \frac{\left(  \frac{2k_{F}}{q} \right)^{2}-1}{2} \ln\left| \frac{q+2k_{F}}{q-2k_{F}} \right| \right] \\
\end{align}$$
## (b)

Then we calculate the susceptibility:
$$\begin{align}
\chi_{\mathbf{q}} & = \frac{M_{\mathbf{q}}}{H_{\mathbf{q}}} \\
 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}(2\pi)^{3}} \cdot \frac{\pi q}{2}\left[  \frac{2k_{F}}{q}+ \frac{\left(  \frac{2k_{F}}{q} \right)^{2}-1}{2} \ln\left| \frac{q+2k_{F}}{q-2k_{F}} \right| \right] \\
 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}(2\pi)^{3}} \cdot \pi k_{F}\left[ 1+ \frac{\left(  \frac{2k_{F}}{q}  \right)- \frac{q}{2k_{F}} }{2}\ln\left| \frac{q+2k_{F}}{q-2k_{F}} \right| \right] \\
 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}8\pi^{2}}k_{F}\left[ 1+ \frac{1-x^{2}}{2x}\ln\left| \frac{x+1}{x-1} \right| \right],\ x= \frac{q}{2k_{F}} \\
 & = \chi_{0}f\left(  \frac{q}{2k_{F}} \right),\ \chi_{0}= \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}4\pi^{2}}k_{F},\ f(x)= \frac{1}{2}\left( 1+   \frac{1-x^{2}}{2x} \ln\left|  \frac{x+1}{x-1}\right|  \right),\ x= \frac{q}{2k_{F}}
\end{align}$$
Take $q\rightarrow 0$, we have $x\rightarrow 0$. Then:
$$\begin{align}
\frac{1-x^{2}}{2x}\ln\left| \frac{x+1}{x-1} \right| & \approx \frac{1-x^{2}}{2x}\ln\left| (x+1)^{2} \right| \\
 & = \frac{1-x^{2}}{x}\ln(1+x) \\
 & \approx 1-x^{2}
\end{align}$$
So:
$$\begin{align}
f(x) & \approx \frac{1}{2}(1+1-x^{2}) \\
 & \approx 1
\end{align}$$
Then:
$$\begin{align}
\chi & = \chi_{0} \\
 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}4\pi^{2}}k_{F} \\
 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{h^{2}}k_{F}
\end{align}$$
## (c)

For the 2D case, it suffices to evaluate:
$$\begin{align}
\int_{k<k_{F}}d^{2}k \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2}} & = \int kdkd\phi \frac{1}{2kq\cos \phi+q^{2}} 
\end{align}$$
We first evaluate integrals of this type:
$$\begin{align}
\int_{0}^{2\pi} d \phi \frac{1}{b\cos \phi+a}
\end{align}$$
Observe that:
$$\begin{align}
\cos \phi & = \cos ^{2} \frac{\phi}{2}-\sin ^{2} \frac{\phi}{2} \\
 & = \frac{1- \tan ^{2} \frac{\phi}{2} }{\sec ^{2} \frac{\phi}{2} } \\
 & = \frac{1-\tan ^{2} \frac{\phi}{2} }{1+ \tan ^{2} \frac{\phi}{2}}
\end{align}$$
Set $y= \tan \frac{\phi}{2}$, we have:
$$\begin{align}
 dy & = \sec ^{2} \frac{\phi }{2} \frac{d\phi}{2 } \\
\implies d\phi & = \frac{2dy}{\sec ^{2} \frac{\phi}{2}}= \frac{2dy}{1+y^{2}}
\end{align}$$
Then:
$$\begin{align}
d\phi \frac{1}{a\cos \phi+b} & = \frac{2dy}{1+y^{2} }  \frac{1}{b \frac{1-y^{2}}{1+y^{2}}+a}= \frac{2dy}{b(1-y^{2})+a(1+y^{2})}
\end{align}$$
Know that $y$ is only monotonic for $(0,\pi)$ and $(\pi,2\pi)$. So we split the integral:
$$\begin{align}
\int_{0}^{2\pi} d\phi \frac{1}{b\cos \phi+a} & = \left( \int_{0}^{\infty}+ \int _{-\infty}^{0} \right) \frac{2dy}{b(1-y^{2})+a(1+y^{2})} \\
 & = \int _{-\infty}^{\infty} dy \frac{2}{b(1-y^{2})+a(1+y^{2})} \\
 & = \int dy \frac{2}{a+b+ (a-b)y^{2}} \\
 & = \frac{2}{a+b}\int dy \frac{1}{1+ \frac{a-b}{a+b}y^{2}} \\
 & = \frac{2}{a+b}\sqrt{  \frac{a+b}{a-b} } \left[\arcsin\left(  \frac{a-b}{a+b}y^{} \right)\right]_{-\infty}^{\infty} \\
 & = 2\pi \sqrt{ \frac{1}{a^{2}-b^{2}} }
\end{align}$$
Therefore:
$$\begin{align}
\int_{k<k_{F}}d^{2}k \frac{1}{|\mathbf{k}+\mathbf{q}|^{2}-k^{2}} & = \frac{1}{q} \int k dk 2\pi \sqrt{ \frac{1}{q^{2}-(2k)^{2}} } \\
 & = \frac{\pi}{4q} \int d((2k)^{2})\sqrt{  \frac{1}{q^{2}-(2k)^{2}} } \\
 & = \frac{\pi}{2q}(q-\sqrt{ q^{2}-(2k_{F})^{2} })
\end{align}$$
Then similarly we get:
$$\begin{align}
\int_{k<k_{F}} d^{2}k \frac{1}{|\mathbf{k}-\mathbf{q}|^{2}-k^{2}} & = - \frac{\pi}{2q}(-q-\sqrt{ q^{2}-(2k_{F})^{2} })
\end{align}$$
Then:
$$\begin{align}
M_{\mathbf{q}} & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}H_{\mathbf{q}}}{\hbar^{2}} \frac{1}{(2\pi)^{2}} \cdot \frac{\pi}{4q}\arcsin\left(  \frac{2k_{F}}{q} \right) \\
\implies \chi_{\mathbf{q}} & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{h^{2}}  \cdot \frac{\pi}{2q}\arcsin\left(  \frac{2k_{F}}{q} \right)
\end{align}$$
For the 1D case, we have:
$$\begin{align}
\int_{0}^{k_{F}} dk \frac{1}{(k+q)^{2}-k^{2}} & = \int dk \frac{1}{2kq+q^{2}} \\
 & = \frac{1}{q}\int dk \frac{1}{2k+q} \\
 & = \frac{1}{2q} \ln\left| \frac{2k_{F}+q}{q} \right|
\end{align}$$
Then:
$$\begin{align}
\int_{0}^{k_{F}} dk \frac{1}{(k-q)^{2}-k^{2}} & = - \frac{1}{2q}\ln\left| \frac{2k_{F}-q}{q} \right|
\end{align}$$
Then:
$$\begin{align}
\chi_{\mathbf{q}} & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e}}{\hbar^{2}} \frac{1}{2\pi} \left(  \frac{1}{2q}\ln\left| \frac{2k_{F}+q}{q} \right|- \frac{1}{2q}\ln\left| \frac{2k_{F}-q}{1} \right| \right) \\
	 & = \frac{g^{2}\mu_{0}\mu_{B}^{2}m_{e} }{\hbar^{2}} \frac{1}{4q} \ln\left| \frac{2k_{F}+q}{2k_{F}-q} \right|

\end{align}$$

