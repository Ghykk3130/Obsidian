# 1.
For fermions, since we restrict ourselves to the subspace spanned by the anti-symmetrized kets, the identity operator is $I=\sum_{m,n}\ket{mn}_{F}\bra{mn}_{F}$.
For bosons, we are in the subspace spanned by the symmetrized kets, the identity operator is $I=\sum_{m,n}\ket{mn}_{B}\bra{mn}_{B}$.
## (a).
I have:
$$\begin{align}
\ket{mn} _{F}\bra{mn} _{F} & = \frac{1}{\sqrt{ 2 }}(\ket{mn} -\ket{nm} ) \frac{1}{\sqrt{ 2 }}(\bra{mn} -\bra{nm} ) \\
 & = \frac{1}{2}(\ket{mn} \bra{mn} +\ket{nm} \bra{nm} -\ket{nm} \bra{mn} -\ket{mn} \bra{nm} ) 
\end{align}$$
Also:
$$\begin{align}
\ket{nm} _{F}\bra{nm} _{F} & = \frac{1}{\sqrt{ 2 }}(\ket{nm} -\ket{mn} ) \frac{1}{\sqrt{ 2 }}(\bra{nm} -\bra{mn} ) \\
 & = \frac{1}{2}(\ket{mn} \bra{mn} +\ket{nm} \bra{nm} -\ket{nm} \bra{mn} -\ket{mn} \bra{nm} )
\end{align}$$
I observe that:
$$\ket{mn} _{F}\bra{mn} _{F}=\ket{nm} _{F}\bra{nm} _{F}$$
## (b).
For three particles, for each $\ket{n_{1}n_{2}n_{3}},n_{i}\neq n_{j}\text{ for }i\neq j$, I have a corresponding anti-symmetrization. That means that I have $3! = 6$ duplicates.

For $N$ particles, for each $\ket{n_{1}\dots n_{N}},n_{i}\neq n_{j}\text{ for }i\neq j$, I have a corresponding anti-symmetrization. That means that I have $N!$ duplicates. 

## (c).
>[!Note] Claim
>$$\ket{n_{1}\dots n_{N}}_{F} \bra{n_{1}\dots n_{N}}_{F} =\ket{n_{\sigma{1}}\dots n_{\sigma N}}_{F}\bra{n_{\sigma 1}\dots n_{\sigma N}}_{F},\forall \sigma\in S_{N}  $$
## Proof of claim
Given $\sigma\in S_{N}$, I have:
$$\begin{align}
\ket{n_{1}\dots n_{N}} _{F} & = \frac{1}{\sqrt{ N! }} \sum_{\delta\in S_{N}}(sgn\delta )\ket{n_{\delta{1}}\dots n_{\delta N} } 
\end{align}$$
Then:
$$\begin{align}
\ket{n_{1}\dots n_{N}} _{F}\bra{n_{1}\dots n_{N}} _{F} & = \frac{1}{N!}\sum_{\delta,\gamma\in S_{N}}(sgn \delta)(sgn \gamma)\ket{n_{\delta 1}\dots n_{\delta N}}  \bra{n_{\gamma 1}\dots n_{\gamma N}} 
\end{align}$$
Similarly, I can also write down:
$$\ket{n_{\sigma 1}\dots n_{\sigma N}} _{F}\bra{n_{\sigma 1}\dots n_{\sigma N}} _{F}=\frac{1}{N!} \sum_{\delta^{'},\gamma^{'}\in S_{N}}(sgn\delta^{'})(sgn\gamma^{'})\ket{n_{\delta^{'} \sigma 1}\dots n_{\delta^{'} \sigma N}} \bra{n_{\gamma^{'} \sigma 1}\dots n_{\gamma^{'} \sigma N}} $$
Observe that:
$$\begin{align}
\ket{n_{\sigma 1}\dots n_{\sigma N}} _{F}\bra{n_{\sigma 1}\dots n_{\sigma N}} _{F} & = \frac{1}{N!} \sum_{\delta^{'},\gamma^{'}\in S_{N}}(sgn\delta^{'})(sgn\gamma^{'})\ket{n_{\delta^{'} \sigma 1}\dots n_{\delta^{'} \sigma N}} \bra{n_{\gamma^{'} \sigma 1}\dots n_{\gamma^{'} \sigma N}} \\
 & =  \frac{1}{N!} \sum_{\delta^{'},\gamma^{'}}(sgn\delta^{'})(sgn\sigma)(sgn\gamma^{'})(sgn\sigma)\ket{n_{\delta^{'} \sigma 1}\dots n_{\delta^{'} \sigma N}} \bra{n_{\gamma^{'} \sigma 1}\dots n_{\gamma^{'} \sigma N}} \\
 & = \frac{1}{N!}  \sum_{\delta^{'},\gamma^{'}}(sgn(\delta^{'}\sigma))(sgn(\gamma^{'}\sigma))\ket{n_{\delta^{'} \sigma 1}\dots n_{\delta^{'} \sigma N}} \bra{n_{\gamma^{'} \sigma 1}\dots n_{\gamma^{'} \sigma N}} \\
\end{align}$$
Then obviously, 
$$\ket{n_{1}\dots n_{N}}_{F} \bra{n_{1}\dots n_{N}}_{F} =\ket{n_{\sigma{1}}\dots n_{\sigma N}}_{F}\bra{n_{\sigma 1}\dots n_{\sigma N}}_{F}$$
>[!Right]
>$\blacksquare$

Therefore:
$$\begin{align}
I & =\sum_{\sigma\in S_{N}}\ket{n_{\sigma 1}\dots n_{\sigma N}}_{F}\bra{n_{\sigma 1}\dots n_{\sigma N}}_{F}   \\
 & = N! \ket{n_{1}\dots n_{N}} _{F} \bra{n_{1}\dots n_{N}} _{F} \\
  & = N! \frac{1}{N!} \sum_{\delta,\gamma\in S_{N}}(sgn \delta)(sgn \gamma)\ket{n_{\delta 1}\dots n_{\delta N}}  \bra{n_{\gamma 1}\dots n_{\gamma N}} \\
 & = \sum_{\delta,\gamma\in S_{N}}(sgn \delta)(sgn \gamma)\ket{n_{\delta 1}\dots n_{\delta N}}  \bra{n_{\gamma 1}\dots n_{\gamma N}}
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
## (b).
Use $T=1.6\times 10^{7}K$, and the formula $\lambda = \frac{\hbar}{\sqrt{ 2\pi mkT }}$, I get:
$$\begin{align}
 & \lambda_{e} = 1.86346 \times 10^{-11}\ m \\
 & \lambda_{p}=4.34876 \times 10^{-13}\ m \\
 & \lambda_{\alpha}= 2.18187 \times 10^{-13}\ m
\end{align}$$
