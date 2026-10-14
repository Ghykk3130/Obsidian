# Problem 1
## (a)

We have:
$$\begin{align}
(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2} & = (\mathbf{p}+e\mathbf{A} )^{2}+i\boldsymbol{\sigma}\cdot[(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A})]
\end{align}$$
We compute:
$$\begin{align}
(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A}) & = e\mathbf{p}\times \mathbf{A}+e\mathbf{A}\times \mathbf{p} \\ & = e(-i\hbar)\nabla \times \mathbf{A}+e\mathbf{A}\times \mathbf{p} 

\end{align}$$
We have:
$$\begin{align}
(\nabla \times \mathbf{A})_{i} & = \epsilon_{ijk}\partial_{j}A_{k} \\
 & = \epsilon_{ijk}(\partial_{j}A_{k})+\epsilon_{ijk}A_{k}\partial_{j} \\
 & = B_{i}-(\mathbf{A}\times \nabla)_{i}
\end{align}$$
Then:
$$\begin{align}
(\mathbf{p}+e\mathbf{A})\times(\mathbf{p}+e\mathbf{A})  & = e(-i\hbar)(\mathbf{B}-A\times \nabla)+e\mathbf{A}\times \mathbf{p} \\  & = e(-i\hbar)\mathbf{B}
\end{align}$$
Then:
$$\begin{align}
(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2} & = (\mathbf{p}+e\mathbf{A})^{2}+e\hbar \mathbf{B}\cdot \boldsymbol{\sigma} \\
 & = (\mathbf{p}+e\mathbf{A})^{2}+ 2e\hbar \mathbf{B}\cdot \mathbf{S}
\end{align}$$
Then:
$$\begin{align}
\frac{(\boldsymbol{\sigma}\cdot(\mathbf{p}+e\mathbf{A}))^{2}}{2m_{e}} & = \frac{(\mathbf{p}+e\mathbf{A})^{2}}{2m_{e}}+ \frac{e\hbar}{m_{e}}\mathbf{B}\cdot \mathbf{S} \\
 & = \frac{(\mathbf{p}^{}+e\mathbf{A})^{2}}{2m_{e}}+ 2 \mu_{B}\mathbf{B}\cdot \mathbf{S} \\
 & = \frac{(\mathbf{p}+e\mathbf{A} )^{2}}{2m_{e} }+g\mu_{B}\mathbf{B}\cdot \mathbf{S},\ g=2
\end{align}$$
## (b)

We have:
$$\begin{align}
[\mathbf{S},H] & = \left[ \mathbf{S}, \frac{(\mathbf{p}+e\mathbf{A})^{2}}{2m_{e}}+g\mu_{B}\mathbf{S}\cdot \mathbf{B} \right] \\
 & = [\mathbf{S},g\mu_{B}\mathbf{S}\cdot \mathbf{B}] 
\end{align}$$
Then we compute:
$$\begin{align}
[S_{i},S_{j} B_{j}] & = [S_{i},S_{j}]B_{j} \\
 & = i\epsilon_{ijk}S_{k}B_{j} \\
 
\end{align}$$
Then:
$$\begin{align}
[\mathbf{S},H] & = g\mu_{B}(-i)\mathbf{S}\times \mathbf{B}
\end{align}$$
Then by Ehrenfest theorem, we have:
$$\begin{align}
\frac{d}{dt}\langle \mathbf{S}\rangle & = \frac{1}{i\hbar}\langle [\mathbf{S},H]\rangle \\
 & = \frac{g\mu_{B}}{\hbar}\mathbf{B}\times \mathbf{S}
\end{align}$$
# Problem 2
## (a)

All atoms have diamagnetic term $\sum_{i} \frac{e^{2}}{12m_{e}}B^{2} \langle r_{i}^{2}\rangle$ in the energy. This term is always diamagnetic because it increases as $B$ increases. Then $- \frac{\partial H}{\partial B}<0$. The Zeeman coupling would induce $\mu_{B}g_{J}m_{J}B$ in the energy. This term could be diamagnetic or paramagnetic. If the calculated susceptibility due to the diamagnetic term outweighs that of Zeeman term, then the atom would be paramagnetic. Otherwise, the atom would be diamagnetic. 
## (b)

We first maximize $S$. This is because we want spins to be as "parallel" as possible to each other, in order to minimize the exchange energy. 

Then we maximize $L$. This because we want the electrons to "rotate" in the same direction, so that the Coulomb interaction between them is minimized.

Then if the shell is less than half-filled, we choose $J=|L-S|$. This is because the LS coupling favors anti-parallel alignments. If the shell is more than half-filled, we choose $J=L+S$. This is because the net orbital angular momentum and net spin are from different spins.

 (i) The electron configuration is $[\text{Ne}]3s^{2}3p^{4}$. Then $S=1$, $L=1$, $J= 2$.
 (ii) The electron configuration is $[\text{Ar}]4s^{2}3d^{3}$. Then $S=\frac{3}{2}$, $L=3$, $J=\frac{3}{2}$.
 (iii) The electron configuration is $[\text{Kr}]5s^{2}4d^{2}$. Then $S=1$, $L=3$, $J=2$.
 (iv) The electron configuration is $[\text{Xe}]6s^{2}4f^{10}$。Then $S=2$, $L=6$, $J= 8$.
## (c)

$f$ holds 11 electrons. So $S=\frac{3}{2}$, $L=6$, $J= \frac{15}{2}$. Then Lande g factor is:
$$g_{J}= \frac{3}{2}+ \frac{S(S+1)-L(L+1)}{2J(J+1)}= \frac{6}{5}$$
Then effective moment is therefore:
$$\mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) }=  \frac{3}{5}\sqrt{ 255 } \mu_{B}$$
## (d)

Similarly, $f$ holds 7 electrons. So $S= \frac{7}{2}$, $L=0$, $J= \frac{7}{2}$. Then:
$$g_{J}= \frac{3}{2}+ \frac{S(S+1)-L(L+1)}{2J(J+1)}= 2$$
Then:
$$\mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) }= \sqrt{ 63 }\mu_{B}$$
## (e)

(i) 

The electron configuration of Mn is $[\text{Ar}]4s^{2} 3d^{5}$. Then $S=\frac{5}{2}$, $L=0$, $J= \frac{5}{2}$. 

We calculate:
$$g_{J}= \frac{3}{2}+ \frac{S(S+1)-L(L+1)}{2J(J+1)}= 2$$
Then:
$$\mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) }= \sqrt{ 35 }\mu_{B}$$
Then the susceptibility is given by:
$$\begin{align}
\chi & = \frac{n\mu_{0}}{3k_{B}T} 35 \mu_{B}^{2}
\\
 & = \frac{p\mu_{0}}{3k_{B}^{2}T^{2}}35\mu_{B}^{2} \\
 & \approx 1.65 \times 10^{-7}
\end{align}$$

(ii)

Mn has 25 electrons. The number of core electrons is 20. We have:
$$\begin{align}
\chi & = \frac{\partial M}{\partial H} \\
 & = -\frac{\partial}{\partial H} \frac{\partial \Delta E}{\partial B} \\
 & = - \frac{Zn\mu_{0}e^{2}\langle r^{2}\rangle}{6m_{e}}
\end{align}$$
So:
$$\begin{align}
\chi & = -20  \frac{p\mu_{0}e^{2}\langle r^{2}\rangle}{6k_{B}Tm_{e}} \cdot  \\
 & \approx -4.28 \times 10^{-10}\end{align}$$

# Problem 3

The first point that I didn't know is that when the temperature is close to $\theta_{\text{CW}}$, then the Curie-Weiss law breaks down. This is close to the phase transition critical point, and the fluctuation is strong. Because the mean-field approximation assumes small fluctuation, then it breaks down.

The second point that I didn't know is that Curie-Weiss law requires localized moments. Then the unfilled shell that's producing the net moment must be sufficiently localized. But how localized they are also affect exchange. For example, in rare earth magnets, because 4f electrons are too localized, the exchange is weak. Therefore ordering often takes place $< 1\ \text{K}$. 

The third thing that I didn't know is that the crystal field splitting can lead to different moments due to different angular momenta in those split states. Therefore the moments can deviate greatly from Hund's rule, as in the 3d element case. Since the 3d wavefunctions are much extended, they interact more strongly with the crystal fields, which may exceed the energy lowering predicted by Hund's rule.





 



