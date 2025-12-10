# 1.

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

Claim that:
>[!Note] Claim
>$\ket{n_{1}\dots n_{N}}_{F},\ket{n_{\sigma{1}}\dots n_{\sigma N}}_{F}\forall \sigma\in S_{N}$ represent the same state.
## Proof of claim
Given $\sigma\in S_{N}$, I have:
$$\begin{align}
\ket{n_{1}\dots n_{N}} _{F} & = \frac{1}{\sqrt{ N! }} \sum_{\delta\in S_{N}}(sgn\delta )\ket{n_{\delta{1}}\dots n_{\delta N} } 
\end{align}$$
Similarly, I can also write down:
$$\ket{n_{\sigma 1}\dots n_{\sigma N}} _{F}=\frac{1}{\sqrt{ N! }} \sum_{\delta^{'}\in S_{N}}(sgn\delta^{'})\ket{n_{\delta^{'} \sigma 1}\dots n_{\delta^{'} \sigma N}} $$
Obviously:
$$\sum_{\delta^{'}\in S_{N}}(sgn\delta^{'})\ket{n_{\delta^{'}\sigma 1}\dots n_{\delta^{'} \sigma N}} =\sum_{\delta^{'}}(sgn\sigma)(sgn\delta^{'})\ket{n_{\delta^{'} 1}\dots n_{\delta^{'} N}} $$
So $\ket{n_{1}\dots n_{N}}_{F},\ket{n_{\sigma 1}\dots n_{\sigma N}}_{F}$ differ only by a sign, thus represent the same physical state.
>[!Right]
>$\blacksquare$

Therefore we only need to sum over independent states:
$$\begin{align}
I & =\sum_{n_{1}< n_{2}<\dots<n_{N}}\ket{n_{1}\dots n_{N}} _{F}\bra{n_{1} \dots n_{N}} _{F}
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
It's obvious from the plot that:
$$\sum_{{n}=0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}k_{n}^{2}}{2m} \right)=\sum_{n=0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L}^{} \right)^{2} \right)\geq \frac{L}{2\pi}\int_{0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right)$$
<div style="text-align:center">
<img src="31c55fba2a72bf93689505242fc94df3.jpg" width="350">
</div>



It's also obvious that if I shift the boxes in the Riemann sum to the left by $\Delta n=1$, which corresponds to $\Delta k=\frac{2\pi}{L}$, then the curve would be bounded below by the discrete sum. That is:
$$\sum_{n=0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi(n+1)}{L} \right)^{2} \right)\leq \frac{L}{2\pi}\int_{0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right)$$
## (c).
Notice that as $L$ gets larger, the arguments of the exponentials of the upper and lower bounds get more close to each other, because $L$ is on the denominator. Especially, as $L\rightarrow \infty$, I have:
$$\begin{align}
\lim_{ L \to \infty } \left( \sum_{n}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left(  \frac{2\pi(n+1)}{L} \right)^{2} \right)-\sum_{n}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L} \right)^{2} \right) \right) & = \lim_{ L \to \infty } \sum_{n}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left(  \frac{2\pi(n+1)}{L} \right)^{2} \right) \\
 & -\lim_{ L \to \infty } \sum_{n}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L} \right)^{2} \right)  \\
 & = \sum_{n}\lim_{ L \to \infty } \exp\left( -\beta \frac{\hbar^{2}}{2m}\left(  \frac{2\pi(n+1)}{L} \right)^{2} \right) \\
 & -\sum_{n}\lim_{ L \to \infty } \exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L} \right)^{2} \right) \\
 & = 0
\end{align}$$
Notice that the reason why I can exchange the integral and the sum is because $\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L} \right)^{2} \right)$ is bounded above by some $L^1$ function.

Therefore, under the thermodynamic limit, by squeeze theorem, I must have:
$$\sum_{n=0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}}{2m}\left( \frac{2\pi n}{L}^{} \right)^{2} \right)= \frac{L}{2\pi}\int_{0}^{\infty}\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right)$$

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
Use $T=1.6\times 10^{7}K$, and the formula $\lambda = \frac{h}{\sqrt{ 2\pi mkT }}$, I get:
$$\begin{align}
 & \lambda_{e} = 1.86346 \times 10^{-11}\ m \\
 & \lambda_{p}=4.34876 \times 10^{-13}\ m \\
 & \lambda_{\alpha}= 2.18187 \times 10^{-13}\ m
\end{align}$$
## (c).
According to the estimation in $(a)$, I can assume that all hydrogen and helium are completely ionized. Then I have:
$$\begin{align}
 & n_{e}= \frac{\rho_{H}}{m_{p}}+ \frac{\rho_{He}}{4m_{p}}\cdot 2=6.57 \times 10^{31} \\
 & n_{p}= \frac{\rho_{H}}{m_{p}}=3.59 \times 10^{31} \\
 & n_{\alpha}= \frac{\rho_{He}}{4m_{p}}= 1.49 \times 10^{31}
\end{align}$$
So I have:
$$\begin{align}
 & n_{e}\lambda_{e}^{3}=0.425 \\
 & n_{p}\lambda_{p}^{3}=2.95 \times 10^{-6} \\
 & n_{\alpha}\lambda_{\alpha}^{3}=1.55 \times 10^{-7}
\end{align}$$
They are all smaller than $1$. So all three particles are not degenerate.
## (d).
Since the particles are approximated as ideal gases, I have:
$$\begin{align}
p & = n_{e}KT+n_{p}KT+n_{\alpha}kT=2.57 \times 10^{16}\ Pa
\end{align}$$
## (e).
From blackbody radiation, I know that:
$$U= \frac{\pi^{2}k^4}{15c^{3}\hbar^{3}}VT^4$$
Then:
$$p= \frac{1}{3} \frac{U}{V}= \frac{\pi^{2}k^4}{45c^{3}\hbar^{3}}T^4=1.65 \times 10^{13} Pa$$
## (f).
Obviously, the pressure created by ions is the main contribution to the counterbalance of the gravitational pull. 

# 4.
## (a).
Know that if $T<T_{c}$, a significant number of particles will fall into the ground state. Know that:
$$N= \frac{V}{\lambda^{3}}g_{3/ 2}(\mathcal{z})+ \frac{\mathcal{z}}{1-\mathcal{z}}\implies 1= \frac{1}{n\lambda^{3}}g_{3 /2}(\mathcal{z})+  \frac{1}{N}  \frac{\mathcal{z}}{1-\mathcal{z}}$$
Then we must have that $\mathcal{z}=1$ in order for the term corresponding to the ground state $\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$ to have a non-trivial contribution under thermodynamic limit.

Then the energy is given by:
$$\begin{align}
U & =\sum_{\vec{k}}\epsilon_{\vec{k}} \langle n_{\vec{k}}\rangle
\end{align}$$
Now approximate the sum with an integral:
$$\begin{align}
\sum_{\vec{k}}  & =\sum_{k_{1},k_{2},k_{3}}\Delta n_{1}\Delta n_{2}\Delta n_{3} \\
 & = \left(  \frac{L}{2\pi} \right)^{3} \sum_{k_{1},k_{2},k_{3}}\Delta k_{1}\Delta k_{2}\Delta k_{3} \\
 & \approx\left( \frac{L}{2\pi} \right)^{3} \int_{\mathbb{R}^{3}} d^{3}k \\
 & = \left( \frac{L}{2\pi} \right)^{3} \int_{0}^{\infty} dk 4\pi k^{2} \\
 & = 4\sqrt{ 2 }V\pi \frac{m^{3/2}}{h^{3}}\int_{0}^{\infty} d\epsilon\epsilon^{1/2}
\end{align}$$
Then:
$$\begin{align}
U & \approx 4\sqrt{ 2 }V\pi \frac{m^{3/2}}{h^{3}}\int_{0}^{\infty} d\epsilon\epsilon^{1/2} \frac{\epsilon}{\mathcal{z}^{-1}e^{\beta\epsilon}-1} \\
 & = 4\sqrt{ 2 }V\pi \frac{m^{3/2}}{h^{3}} (kT)^{5/2}\int dx \frac{x^{3/2}}{e^x-1} \\
 & = \frac{1}{\lambda^{3}}V kT \frac{3}{2} \frac{1}{\Gamma\left( \frac{5}{2} \right)}\int dx \frac{x^{3/2}}{e^x-1} \\
 & = \frac{3}{2}kT \frac{V}{\lambda^{3}}g_{5 /2}(1)
\end{align}$$
where I took $\mathcal{z}=1$ as argued above.

## (b).
We compute:
$$\begin{align}
C_{V} & =\left(  \frac{\partial U}{\partial T} \right)_{V,N} \\
 & = \frac{\partial}{\partial T}\left(  \frac{3}{2}kT \frac{V}{\lambda^{3}}g_{5 /2}(1) \right) \\
 & = \frac{3}{2}Vkg_{5 /2}(1)\left(  \frac{\sqrt{ 2\pi mk }}{h} \right)^{3} \frac{\partial}{\partial T}T^{5/2} \\
 & = \frac{15}{4}\left(  \frac{\sqrt{ 2\pi mk }}{h} \right)^{3}V kg_{5 /2}(1)T^{3/2} \\
 & = \frac{15}{4}k \frac{V}{\lambda^{3}}g_{5 /2}(1)
\end{align}$$
I observe that $C_{V}\propto T^{3/2}$
## (c).

Know that above $T_{c}$, the term $\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$ is negligible under thermodynamic limit. Therefore, $\mathcal{z}$ is given by:
$$N= \frac{V}{\lambda^{3}}g_{3 /2}(\mathcal{z})\tag{*}$$
From $(a)$ we know that:
$$U= \frac{1}{\lambda^{3}}VkT \frac{3}{2} \frac{1}{\Gamma\left( \frac{5}{2} \right)}\int dx \frac{x^{3/2}}{\mathcal{z}^{-1}e^x-1}$$
Substitute in $(*)$ to get:
$$\begin{align}
U & = \frac{3}{2} NkT \frac{g_{5 /2}(\mathcal{z})}{g_{ 3 /2 }(\mathcal{z})}
\end{align}$$
## (d).
We have:
$$\begin{align}
 & N = \frac{V}{\lambda^{3}} g_{3 /2}(\mathcal{z}) \\
\implies & \frac{\partial}{\partial T}N = \frac{\partial}{\partial T}\left( \frac{V}{\lambda^{3}}g_{3 /2}(\mathcal{z}) \right) \\
\implies & 0= \frac{\partial}{\partial T}\left(  \frac{1}{\lambda^{3}} \right)g_{3 /2}(\mathcal{z})+ \frac{1}{\lambda^{3}} \frac{\partial\mathcal{z}}{\partial T} \frac{\partial}{\partial\mathcal{z}}g_{3 /2}(\mathcal{z}) \\
\implies & \frac{3}{\lambda} \frac{\partial \lambda}{\partial T}g_{ 3 /2}(\mathcal{z})= \frac{\partial\mathcal{z}}{\partial T} \frac{1}{\mathcal{z}}g_{1 /2}(\mathcal{z}) \\
\implies & 3 \frac{\partial}{\partial T}\ln \lambda g_{3 /2 }(\mathcal{z})= \frac{\partial\mathcal{z}}{\partial T} \frac{1}{\mathcal{z}} g_{1 /2}(\mathcal{z}) \\
\implies & \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T} = - \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})}
\end{align}$$
## (e).
We compute:
$$\begin{align}
C_{V} & = \left(  \frac{\partial U}{\partial T} \right)_{N,V} \\
 & = \frac{3}{2}Nk \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}+ \frac{3}{2}NkT \frac{\partial}{\partial T} \left(  \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}\mathcal(z)} \right)
\end{align}$$
It suffices to know:
$$\begin{align}
 & \frac{\partial}{\partial T}g_{5 /2}(\mathcal{z})  = \frac{\partial\mathcal{z}}{\partial T} \frac{\partial }{\partial\mathcal{z}}g_{5 /2}(\mathcal{z})= \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T}g_{3 /2}(\mathcal{z})= - \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}^{2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})} \\
 &  \frac{\partial}{\partial T}g_{3 /2}(\mathcal{z})= \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T}g_{1 /2}(\mathcal{z})= - \frac{3}{2} \frac{1}{T}g_{3 /2}(\mathcal{z})
\end{align}$$
Therefore:
$$\begin{align}
\frac{3}{2}NkT \frac{\partial}{\partial T}\left(  \frac{g_{ 5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})} \right) & = \frac{3}{2}NkT \frac{- \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}^{3}(\mathcal{z})g_{1 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})}+ \frac{3}{2} \frac{1}{T}g_{3 /2}(\mathcal{z})g_{5 /2}(\mathcal{z})}{g^{2}_{3 /2}(\mathcal{z})} \\
 & = \frac{9}{4}Nk\left(  \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}- \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2 }( \mathcal{z})} \right)
\end{align}$$
Then we have:
$$C_{V}= Nk\left(  \frac{15}{4} \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}- \frac{9}{4} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})} \right)$$
## (f).
Observe that under high $T$, the occupation number of excited states $\frac{V}{\lambda^{3}} g_{3 /2}(\mathcal{z})$ must be very large. Then ground state occupation number $\frac{\mathcal{z}}{1-\mathcal{z}}$ must be negligible. Then the solution of $\mathcal{z}$ is given by:
$$N= \frac{V}{\lambda^{3}}g_{3 /2}(\mathcal{z})$$
Know that as $T\rightarrow \infty$, $\lambda\rightarrow{0}$, so that $\mathcal{z}\rightarrow 0$. Also know that $g_{n}(\mathcal{z})\approx\mathcal{z}$ around $0$. So:
$$C_{V}\approx Nk\left(  \frac{15}{4} \frac{\mathcal{z}}{\mathcal{z}}- \frac{9}{4} \frac{\mathcal{z}}{\mathcal{z}} \right)= \frac{3}{2}Nk$$
## (g).

<div style="text-align:center">
<img src="Pasted image 20251116210714.png" width="500">
</div>
