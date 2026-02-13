# 1.
## a)
Let $\mathbf{B}$ align with the z-axis. Then denote $\ket{e}=\ket{+  \hat{\mathbf{z}}},\ \ket{g}=\ket{-  \hat{\mathbf{z}}}$. We have that:
$$\begin{align}
C & = \sqrt{ \Gamma }\ket{g} \bra{e}  \\
 & = \begin{pmatrix}
0 & \sqrt{ \Gamma } \\
0 & 0
\end{pmatrix} \\
D_{g} & = \sqrt{ \gamma_{g} }\ket{g} \bra{g}  \\
 & = \begin{pmatrix}
\sqrt{ \gamma_{g} } & 0 \\
0 & 0
\end{pmatrix} \\
D_{e} &=\sqrt{ \gamma_{e} }\ket{e} \bra{e}  \\
 & =\begin{pmatrix}
0 & 0 \\
0 & \sqrt{ \gamma_{e} }
\end{pmatrix}
\end{align}$$
Then it's easy to calculate:
$$\begin{align}
  - \frac{1}{2} C^{\dagger}C\rho + \text{h.c.}+ C\rho C^{\dagger} & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma  } & 0
\end{pmatrix}  \begin{pmatrix}
0 & \sqrt{ \Gamma } \\
0 & 0
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
0 & \sqrt{ \Gamma }  \\
0 & 0 
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} &  \rho_{e e}
\end{pmatrix} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma } & 0
\end{pmatrix} \\
 & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\Gamma \rho_{eg} & \Gamma \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
\Gamma \rho_{e e} & 0 \\
0 & 0
\end{pmatrix} \\
 & =\begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}\Gamma\rho_{ge} \\
- \frac{1}{2}\Gamma \rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
Similarly:
$$\begin{align}
- \frac{1}{2}\sum_{m}D_{m}^{\dagger}D_{m}\rho + \text{h.c.} \sum_{m} D_{m}\rho D_{m}^{\dagger} & = - \frac{1}{2}  \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{g} } & 0
\end{pmatrix} \begin{pmatrix}
 0 & \sqrt{ \gamma_{g} } \\
0 & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}- \frac{1}{2}\begin{pmatrix}
0 & \sqrt{ \gamma_{e} } \\
 0 & 0
\end{pmatrix}\begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{e} } & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}+ \text{h.c.} \\
 & + \begin{pmatrix}
0 & \sqrt{ \gamma_{g} } \\
0 & 0
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix} \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{g} } & 0
\end{pmatrix}+ \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{e} } & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg }
 & \rho_{ge} \\
\rho_{eg} & \rho_{e e}\end{pmatrix}\begin{pmatrix}
0 & \sqrt{ \gamma_{e} } \\
 0 & 0
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & - \frac{1}{2}\gamma_{g}\rho_{ge} \\
- \frac{1}{2}\gamma_{g}\rho_{eg} & -\gamma_{g}\rho_{e e}
\end{pmatrix}+ \begin{pmatrix}
-\gamma_{e}\rho_{gg} & - \frac{1}{2}\gamma_{e}\rho_{ge} \\ - \frac{1}{2}\gamma_{e}\rho_{eg} & 0
\end{pmatrix}+ \begin{pmatrix}

\gamma_{g}\rho_{e e} & 0 \\
0 & 0
\end{pmatrix}+ \begin{pmatrix}
0 & 0 \\
0 & \gamma_{e} \rho_{gg}
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & - \frac{1}{2}(\gamma_{g}+\gamma_{e})\rho_{ge} \\
- \frac{1}{2} (\gamma_{g}+\gamma_{e})\rho_{eg} & 0
\end{pmatrix}
\end{align}$$
Then we have:
$$\begin{align}
L & = \begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{ge} \\
 - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{eg} & -\Gamma \rho_{e e }
\end{pmatrix}
\end{align}$$
We then calculate:
$$\begin{align}
H & = -\mathbf{B}\cdot \mathbf{S} \\
 & =- BS_{z} \\
 & = \begin{pmatrix}
-\mu_{B}B & 0 \\
0 & \mu_{B}B
\end{pmatrix}
\end{align}$$
Then we have:
$$\begin{align}
 - \frac{1}{i\hbar}[\rho,H]+L & = \begin{pmatrix}
\Gamma \rho_{e e} &  - \frac{1}{i\hbar} 2\mu_{B}B\rho_{ge}- \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{ge} \\
 \frac{1}{i\hbar}2\mu_{B}B\rho_{eg}- \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
The initial condition is given by:
$$\ket{+  \hat{\mathbf{x}}} = \frac{\sqrt{ 2 }}{2}\ket{g} + \frac{\sqrt{ 2 }}{2}\ket{e} \implies \rho(t=0)= \begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{pmatrix}$$
Then it's easy to solve:
$$\begin{align}
 & \rho_{e e}(t)=\frac{1}{2} e^{-\Gamma t} \\
 & \rho_{gg}(t)=1- \frac{1}{2}e^{-\Gamma t} \\
 & \rho_{ge}(t)=  \frac{1}{2} \exp\left(  \frac{i}{\hbar}2\mu_{B}B t\right)\exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & \rho_{eg}^{}(t) = \frac{1}{2}\exp\left( - \frac{i}{\hbar}2\mu_{B}Bt  \right)\exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right)
\end{align}$$

Let $\mathbf{B}=(u,v,w)$ be the Bloch vector. Then:
$$\begin{align}
 & \rho_{e e}= \frac{1-w}{2},\  \rho_{ge}= \frac{u-iv}{2} \\
\implies  & u= \cos\left(  \frac{1}{\hbar}2\mu_{B}Bt \right) \exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & v= - \sin\left(  \frac{1}{\hbar}2\mu_{B}Bt \right) \exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & w=1-e^{-\Gamma t}
\end{align}$$
## b)
We have:
$$\begin{align}
u^{2}+v^{2}+w^{2} & = \exp(-(\Gamma+\gamma_{g}+\gamma_{e})t)+(1-e^{-\Gamma t})^{2} \\
 & = \exp(-(\Gamma+\gamma_{g}+\gamma_{e})t)+1- 2e^{-\Gamma t}+e^{-2\Gamma t }
\end{align}$$
If $\Gamma,\gamma_{e},\gamma_{g}$ are not all zero, then we claim that the ensemble is impure for $t>0$. Since the time derivative of $u^{2}+v^{2}+w^{2}$ is given by:
$$\begin{align}
-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+ 2\Gamma e^{-\Gamma t}-2\Gamma e^{-2\Gamma t} & = -(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+2\Gamma e^{-\Gamma t}(1-e^{-\Gamma t}) \\
 & < -(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+2\Gamma e^{-\Gamma t}\text{ for }t>0 \\
 & <-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+\Gamma e^{-\Gamma t} \\
 & <-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+\Gamma e^{-(\Gamma+\gamma_{g}+\gamma_{e})t} \\
 & = -(\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}<0
\end{align}$$
Then the length of the Bloch vector is monotonically decreasing. It's obvious that at $t=0$, $u^{2}+v^{2}+w^{2}=1$. Then the ensemble is impure for $t> 0$.
# 2.
## a.
It's easy to compute that:
$$\begin{align}
  L & =- \frac{1}{2} C^{\dagger}C\rho + \text{h.c.}+ C\rho C^{\dagger} \\
 & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma  } & 0
\end{pmatrix}  \begin{pmatrix}
0 & \sqrt{ \Gamma } \\
0 & 0
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
0 & \sqrt{ \Gamma }  \\
0 & 0 
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} &  \rho_{e e}
\end{pmatrix} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma } & 0
\end{pmatrix} \\
 & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\Gamma \rho_{eg} & \Gamma \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
\Gamma \rho_{e e} & 0 \\
0 & 0
\end{pmatrix} \\
 & =\begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}\Gamma\rho_{ge} \\
- \frac{1}{2}\Gamma \rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
Let $E_{e}=h \times 100MHz,\ E_{g}=0$, we have:
$$H= \begin{pmatrix}
E_{g} & 0  \\
 0 & E_{e}
\end{pmatrix}$$
Then:
$$\begin{align}
  \begin{pmatrix}
\dot{\rho}_{gg} & \dot{\rho}_{ge} \\
\dot{\rho}_{eg} & \dot{\rho}_{e e}
\end{pmatrix}= - \frac{1}{i\hbar}[\rho,H]+L & =  \begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}\Gamma \rho_{ge}- \frac{1}{i\hbar}(E_{e}-E_{g})\rho_{ge} \\
 - \frac{1}{2}\Gamma \rho_{eg}+ \frac{1}{i\hbar}(E_{e}-E_{g})\rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
With the initial condition:
$$\rho(t=0)= \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }}
\end{pmatrix}  \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} &  \frac{1}{\sqrt{ 2 }}
\end{pmatrix}= \begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{pmatrix}$$

Then it's easy to solve:
$$\begin{align}
 & \rho_{e e}(t)=\frac{1}{2}e^{-\Gamma t}= \frac{1}{2}e^{- 2\pi \times  10^{7}t},\ \rho_{gg}=1- \frac{1}{2}e^{-\Gamma t}=1- \frac{1}{2}e^{-2\pi  \times 10^{7}t} \\
 & \rho_{ge}(t)= \frac{1}{2}\exp\left( \frac{i}{\hbar}(E_{e}-E_{g})t \right)e^{- \frac{\Gamma}{2}t}= \frac{1}{2}\exp(i 2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t},\ \rho_{eg}(t)= \frac{1}{2}\exp(-i 2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}
\end{align}$$
## b.
We have:
$$\begin{align}
d\rho & = \begin{pmatrix}
0 & \rho ^{*} \\
\rho & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}= \begin{pmatrix}
d^{*}\rho_{eg} & d^{*}\rho_{e e} \\
d\rho_{gg} & d\rho_{ge}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
Tr(d\rho) & = d^{*}\rho_{eg}+d\rho_{ge} \\
 & = 2\mathrm{Re}(d\rho_{ge}) \\
 & = 2(\mathrm{Re}(d)\mathrm{Re}(\rho_{ge})-\mathrm{Im}(d)\mathrm{Im}(\rho_{ge})) \\
 & = \mathrm{Re}(d)\cos(\Omega t)e^{-\omega_{0}t}- \mathrm{Im}(d) \sin (\Omega t)e^{-\omega_{0}t}
\end{align}$$
where $\Omega= \frac{E_{e}-E_{g}}{\hbar},\ \omega_{0}=- \frac{\Gamma}{2}$.

Therefore:
$$\begin{align}
E & = sTr(d\rho)  \\
 & =s\mathrm{Re}(d)\cos(\Omega t)e^{-\omega_{0}t}-s\mathrm{Im}(d)\sin(\Omega t)e^{-\omega_{0}t} \\
 & = s\mathrm{Re}(d)\cos(2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}- s\mathrm{Im}(d) \sin (2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}
\end{align}$$
## c.
We have that:
$$\begin{align}
\tilde{E}(\omega) & = \int_{0}^{\infty}dt[s\mathrm{Re}(d)\cos(\Omega t)e^{-\omega_{0} t}-s\mathrm{Im}(d)\sin(\Omega t)e^{-\omega_{0} t}]e^{-i\omega t}
\end{align}$$
We decompose:
$$\cos(\Omega t)= \frac{e^{i\Omega t}+e^{-i\Omega t}}{2},\ \sin(\Omega t)= \frac{e^{i\Omega t}-e^{-i\Omega t}}{2i}$$
Then it suffices to compute:
$$\begin{align}
\int_{0}^{\infty}dt e^{\pm i\Omega t}e^{-\omega_{0} t}e^{-i\omega t} & = \frac{-1}{\pm i\Omega-\omega_{0}-i\omega}
\end{align}$$
Then we have that:
$$\begin{align}
\tilde{E}(\omega) & = s\mathrm{Re}(d) \frac{1}{2} \left(  \frac{-1}{i\Omega-\omega_{0}-i\omega}+ \frac{-1}{-i\Omega-\omega_{0}-i\omega}  \right)-s\mathrm{Im}(d) \frac{1}{2i}\left(  \frac{-1}{i\Omega-\omega_{0}-i\omega}- \frac{-1}{-i\Omega-\omega_{0}-i\omega} \right) \\
 & = \frac{1}{i(\omega-\Omega)+\omega_{0}} \frac{s}{2}(\mathrm{Re}(d)+i\mathrm{Im}(d))+ \frac{1}{i(\omega+\Omega)+\omega_{0}} \frac{s}{2} (\mathrm{Re}(d)-i\mathrm{Im}(d)) \\
 & = \frac{1}{i(\omega-\Omega)+\omega_{0}} \frac{s}{2}d+ \frac{1}{i(\omega+\Omega)+\omega_{0}} \frac{s}{2}d^{*}
\end{align}$$
Let $\tilde{E}_{+}(\omega)= \frac{1}{i(\omega-\Omega)+\omega_{0}} \frac{s}{2}d,\ \tilde{E}_{-}(\omega)= \frac{1}{i(\omega+\Omega)+\omega_{0}} \frac{s}{2}d^{*}$, then we have:
$$\begin{align}
|\tilde{E}(\omega) |^{2} & = |\tilde{E}_{+}|^{2}+ |\tilde{E}_{-}|^{2}+2\mathrm{Re}(\tilde{E}_{+}^{*}\tilde{E}_{-})
\end{align}$$
Since we have $\Omega= 2\pi \times 10^{8} s^{-1} \gg \omega_{0}=\pi \times 10^{7} s^{-1}$, $\tilde{E}_{+}$ is only prominent around $\omega \approx \Omega$, $\tilde{E}_{-}$ is only prominent around $\omega \approx -\Omega$. Then we take $2\mathrm{Re}(\tilde{E}^{*}_{+}\tilde{E}_{-})\approx 0$.

Then we have:
$$\begin{align}
|\tilde{E}(\omega) |^{2} & \approx \frac{1}{4}s^{2}|d|^{2} \frac{1}{(\omega-\Omega)^{2}+\omega_{0}^{2}}+ \frac{1}{4}s^{2}|d|^{2}  \frac{1}{(\omega+\Omega)^{2}+\omega_{0}^{2}}
\end{align}$$
For realistic purposes, we only observe the part that peaks around the positive frequency. Then we have:
$$|\tilde{E}(\omega)|^{2} \propto \frac{1}{(\omega-\Omega)^{2}+\omega_{0}^{2}}$$
We convert to frequency by $\nu= \frac{\omega}{2\pi}$. Then:
$$|\tilde{E}(\nu)|^{2}\propto \frac{1}{(2\pi \nu-\Omega)^{2}+\omega_{0}^{2}}, \text{ where }\Omega= \frac{E_{e}-E_{g}}{\hbar}= 2\pi \times 10^{8}\ s^{-1},\ \omega_{0}= \frac{\Gamma}{2}= \pi \times 10^{7}\ s^{-1}$$
Note that here I wrote $s^{-1}$ because they are angular frequencies, not frequencies. The function is a  Lorentzian centered at $\nu= \frac{\Omega}{2\pi}=100\ MHz$. To find the FWHM, we set:
$$\begin{align}
 & (2\pi \nu-\Omega)^{2}=\omega_{0}^{2} \\
\implies & 2\pi \Delta \nu= 2\omega_{0}\implies \Delta \nu= \frac{\omega_{0}}{\pi}=10\ MHz
\end{align}$$

# 3.
## a.
Obviously, by problem 1, we have:
$$\begin{align}
 & - \frac{1}{i\hbar}[\rho,H]+L  = \begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}(\Gamma+\gamma_{e})\rho_{ge}- \frac{1}{i\hbar}(E_{e}-E_{g})\rho_{ge} \\
- \frac{1}{2}(\Gamma+\gamma_{e})\rho_{eg}+ \frac{1}{i\hbar }(E_{e}-E_{g})\rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
Then we can solve:
$$\begin{align}
 & \rho_{e e}(t)= \frac{1}{2}e^{-\Gamma t}= \frac{1}{2}e^{-2\pi \times 10^{7} t} \\
 & \rho_{ge}(t)= \frac{1}{2}\exp\left( \frac{i}{\hbar}(E_{e}-E_{g})t \right)e^{- \frac{1}{2}(\Gamma+\gamma_{e})t}= \frac{1}{2}\exp(i 2\pi \times 10^{8} t)e^{- 6 \pi \times 10^{7}t} \\
 & \rho_{gg}(t)=1-\rho_{e e}(t),\ \rho_{eg}(t)=\rho ^{*}_{ge}(t)
\end{align}$$
Then:
$$\begin{align}
Tr(d\rho) & = d^{*}\rho_{eg}+d\rho_{ge} \\
 & = 2\mathrm{Re}(d\rho_{ge}) \\
 & = 2(\mathrm{Re}(d)\mathrm{Re}(\rho_{ge})-\mathrm{Im}(d)\mathrm{Im}(\rho_{ge})) \\
 & = \mathrm{Re}(d)\cos(2\pi \times 10^{8}t)e^{-6\pi \times 10^{7}t}- \mathrm{Im}(d) \sin (2\pi \times 10^{8}t)e^{-6\pi \times 10^{7}t}
\end{align}$$
Therefore:
$$\begin{align}
E & = sTr(d\rho)  \\
 & = s\mathrm{Re}(d)\cos(2\pi \times 10^{8}t)e^{-6\pi \times 10^{7}t}- s\mathrm{Im}(d) \sin (2\pi \times 10^{8}t)e^{-6\pi \times 10^{7}t}
\end{align}$$
Let $\Omega=\frac{E_{e}-E_{g}}{\hbar}= 2\pi \times 10^{8} s^{-1},\ \omega_{1}=\frac{1}{2}(\Gamma+\gamma_{e})=6\pi \times 10^{7} s^{-1}$. Then similarly we obtain:
$$\begin{align}
| \hat{E}(\nu) |^{2} & = \frac{1}{(2\pi \nu-\Omega)^{2}+\omega_{1}^{2}}
\end{align}$$
This is a Lorentzian centered at $\nu= \frac{\Omega}{2\pi}= 100\ MHz$. Then obviously, by substituting $\omega_{0}$ in problem 2 with $\omega_{1}$, we have:
$$\text{FWHM}= \frac{\omega_{1}}{\pi}= 60\ MHz$$
## b.

We know that:
$$\begin{align}
P(t) & \propto|[\rho]|^{2} \\
 & = (\mathrm{Re}(d)\cos(\Omega t)e^{-\omega_{1}t}-\mathrm{Im}(d)\sin(\Omega t)e^{-\omega_{1}t})^{2} \\
 & = [\mathrm{Re}^{2}(d)\cos ^{2}(\Omega t)+\mathrm{Im}^{2}(d)\sin ^{2}(\Omega t)-2\mathrm{Re}(d)\mathrm{Im}(d)\cos(\Omega t)\sin(\Omega t)]e^{-2\omega_{1}t} \\
 & = (\mathrm{Re}(d)\cos(\Omega t)-\mathrm{Im}(d)\sin(\Omega t))^{2}e^{-(\Gamma+\gamma_{e})t} \\
 
\end{align}$$
Since $\Gamma\gg \Omega$, we treat $e^{-(\Gamma+\gamma_{e})t}$ as an envelope. The decay time is given by $\frac{1}{\Gamma+\gamma_{e}}= \frac{1}{120\pi}\ \mu s\approx 2.65\ ns$.




