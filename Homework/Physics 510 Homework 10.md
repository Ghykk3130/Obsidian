# 1.
## (a).
The identity operator for two particle Hilbert space is given by:
$$I=\sum_{m,n}\ket{mn} \bra{mn} $$
Consider:
$$\begin{align}
\bra{mn}_{F} \sum_{i,j}\ket{ij} \bra{ij} mn\rangle_{F} & = \frac{1}{\sqrt{ 2 }}(\bra{mn} -\bra{nm} )\sum_{ij}\ket{ij} \bra{ij} \frac{1}{\sqrt{ 2 }}(\ket{mn} -\ket{nm} ) \\
 & = \frac{1}{2}(\bra{mn} -\bra{nm} )(\ket{mn} -\ket{nm} ) \\
 & = 1
\end{align}$$
I can also compute:
$$\begin{align}
\bra{mn} \sum_{i,j}\ket{ij} \bra{ij} mn\rangle & = \bra{mn} mn\rangle \\
 & =1 
\end{align}$$

# 2.
## (a).
Know that:
$$\begin{align}
Z & =\sum_{n=0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}k_{n}^{2}}{2m} \right) \\
 & \approx \int_{0}^{\infty}dn\exp\left( -\beta \frac{\hbar^{2}k_{n}^{2}}{2m} \right) \\
 & = \frac{L}{2\pi} \int_{0}^{\infty}dk\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right)
\end{align}$$
Therefore:
$$A=\frac{L}{2\pi}$$
## (b).
>[!Note] Claim
$$\exp(-x^{2})\leq \frac{1}{x^{2}},\forall x\geq 1$$
## Proof of claim
Let $f(y)=ye^{-y}$

Then:
$$\begin{align}
f^{'}(y) & = (1-y)e^{-y}<0,\forall y>1 \\

\end{align}$$
Know that:
$$f(1)=\frac{1}{e}<1$$
Then:
$$f(y)<1,\forall y>1$$
substituting in $y=x^{2}$ and rearranging the terms should complete the proof.
>[!Right]
>$\blacksquare$

Then:
$$\begin{align}
 & 0\leq \exp\left( - \beta \frac{\hbar^{2}k_{n}^{2}}{2m} \right)\leq \frac{2m}{\beta \hbar^{2}} \frac{1}{k_{n}^{2}} \\
\implies & \sum 0 \leq \sum \exp\left( -\beta \frac{\hbar^{2}k_{n}^{2} }{2m} \right) \leq \frac{2m}{\beta \hbar^{2}}\sum \frac{1}{k_{n}^{2}} \\
\implies & 0 \leq \sum \exp\left( -\beta \frac{\hbar^{2}k_{n}^{2} }{2m} \right) \leq \frac{2m}{\beta \hbar^{2}}\left(  \frac{L}{2\pi} \right)^{2} \frac{\pi^{2}}{6} 
\end{align}$$
## (c).

# 3.
## (a).
We want the energy increase from the bound state to the ionized state to be comparable with $kT$. Know that the ionization or dissociation energies are:
$$\begin{align}
 & E_{H}=13.6\ eV \\
 & E_{He}=54.4\ eV \\
 & E_{\alpha}=28.3\ MeV
\end{align}$$
Then setting $\frac{E}{kT}=1$ to find:
$$\begin{align}
 & T_{H}= 1.58\times 10^5K \\
 & T_{He}=6.31\times 10^5K \\
 & T_{\alpha}=3.28\times 10^{11}K
\end{align}$$
