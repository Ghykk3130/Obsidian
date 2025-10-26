# 1.
Suppose the system is enlarged by a factor of $\lambda$. Then by extensivity we have:
$$\begin{align}
U(\lambda S,\lambda V,\lambda N) & = \lambda U(S,V,N)
\end{align}$$
Then differentiate with respect to $\lambda$ to get:
$$\begin{align}
 & \left(\frac{\partial U}{\partial S}\right)_{V,N} S+ \left(  \frac{\partial U}{\partial V} \right)_{S,N}V+ \left(  \frac{\partial U}{\partial N} \right)_{S,V}N= U \\
\implies & T(\lambda S,\lambda V,\lambda N)S-p(\lambda S,\lambda V,\lambda N)V+\mu(\lambda S,\lambda V,\lambda N) N=U(S,V,N)
\end{align}$$
Note that the derivatives above are taken with respect to $S,V,N$ according to the functional dependence of $U$ on $S,V,N$. They are not the same as the variables $S,V,N$ as in $\lambda S,\lambda V,\lambda N$. Also the derivatives should be evaluated at $\lambda S,\lambda V,\lambda N$. 

Then take $\lambda=1$ to get:
$$U(S,V,N)= T(S,V,N)S-p(S,V,N)V+\mu(S,V,N)N$$
# 2.
## (a).
Assume that the interaction between particles is weak, such that:
$$F=F_{H}+F_{p^{+}}+F_{e^{-}}$$
Let $\mu_{p},\mu_{e}$ be the chemical potentials of $p^{+},e^{-}$ at the excited states. Consider the change induced by particle numbers. Then at equilibrium, I have:
$$\delta F=\mu_{H}\delta N_{H}+\mu_{p}\delta N_{p}+\mu_{e}\delta N_{e}=0$$
Substitute in the constraint $\delta N_{H}=-\delta N_{p}=-\delta N_{e}$ to get:
$$\mu_{H}=\mu_{p}+\mu_{e}$$
## (b).
 First want to calculate the free energy of ideal monatomic gas. Consider the partition function:
 $$\begin{align}
Z & = \int \frac{d^{3N}qd^{3N}p}{h^{3N}N!} \exp\left( - \beta \sum_{i} \frac{p_{i}^{2}}{2m} \right)
\end{align}$$
Know that:
$$\begin{align}
\int d^{3N}q= V^N
\end{align}$$
$$\begin{align}
\int d^{3N}p \exp\left( -\beta \sum \frac{p_{i}^{2}}{2m} \right) & = \left( \int dp_{1} \exp\left( -\beta \frac{p_{1}^{2}}{2m} \right) \right)^{3N} \\
 & = \left( \frac{2\pi m}{\beta} \right)^{3N/2}
\end{align}$$
Therefore:
$$Z= \frac{V^N}{h^{3N}N!} \left(  \frac{2\pi m}{\beta} \right)^{3N/2}$$
Then:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
 & \approx - \frac{1}{ \beta}\left( N \ln\left(  \frac{V}{Nh^{3}}\left(  \frac{2\pi m}{\beta} \right)^{3/2} \right)+N \right)
\end{align}$$
Then we calculate the chemical potential from the free energy. We find:
$$\begin{align}
\mu & = \left(\frac{\partial F}{\partial N}\right)_{T,V} \\
 & =  - \frac{1}{\beta}\ln\left(  \frac{V}{Nh^{3}}\left(  \frac{2\pi m}{\beta} \right)^{3/2} \right)+ \frac{N}{\beta} \frac{1}{\left(  \frac{2\pi m}{\beta} \right)^{3/2}} \frac{V}{N^{2}h^{3}}\left(  \frac{2\pi m}{\beta} \right)^{3/2}- \frac{1}{\beta} \\
 & = - \frac{1}{\beta}\ln\left(  \frac{V}{Nh^{3}} \left(  \frac{2\pi m}{\beta} \right)^{3/2} \right)
\end{align}$$
Therefore, we have:
$$\begin{align}
 & \mu_{p}= - \frac{1}{\beta}\ln\left(  \frac{V}{N_{p}h^{3}}\left(  \frac{2\pi m_{p}}{\beta} \right)^{3/2} \right) \\
 & \mu_{e}= - \frac{1}{\beta}\ln\left(  \frac{V}{N_{e}h^{3}}\left(  \frac{2\pi m_{e}}{\beta} \right)^{3/2} \right)
\end{align}$$
For the Hydrogen atom, the Hamiltonian is given by:
$$H=\sum_{i} \frac{p_{i}^{2}}{2m_{H}}-N\epsilon_{0}$$
This would lead to a term $e^{\beta N\epsilon_{0}}$ in $Z$, which leads to a term $-N\epsilon_{0}$ in $F_{H}$, which leads to a term $-\epsilon_{0}$ in $\mu_{H}$. So:
$$\mu_{H}= - \frac{1}{\beta}\ln\left(  \frac{V}{N_{H}h^{3}}\left(  \frac{2\pi m_{H}}{\beta} \right)^{3/2} \right)-\epsilon_{0}$$
Then:
$$\begin{align}
 & \mu_{H}=\mu_{p}+\mu_{e} \\
\implies & - \ln\left(  \frac{V}{N_{H}h^{3}}\left(  \frac{2\pi m_{H}}{\beta} \right)^{3/2} \right)-\beta\epsilon_{0}=- \ln\left(  \frac{V}{N_{p}h^{3}}\left(  \frac{2\pi m_{p}}{\beta} \right)^{3/2} \right)- \ln\left(  \frac{V}{N_{e}h^{3}}\left(  \frac{2\pi m_{e}}{\beta} \right)^{3/2} \right) \\
\implies & n_{H}h^{3}\left(  \frac{2\pi m_{H}}{\beta} \right)^{-3/2}e^{-\beta\epsilon_{0}}= n_{p}h^{3}\left(  \frac{2\pi m_{p}}{\beta} \right)^{-3/2} n_{e}h^{3}\left(  \frac{2\pi m_{e}}{\beta} \right)^{-3/2} \\
\implies & h^{-3}n_{H}e^{-\beta\epsilon_{0}}\left(  \frac{2\pi m_{e}}{\beta} \right)^{3/2}= n_{p}n_{e} \\
\implies & \frac{n_{p}n_{e}}{n_{H}} = \left(  \frac{2\pi m_{e}kT}{h^{2}} \right)^{3/2}e^{-\beta\epsilon_{0}}
\end{align}$$
where we assumed that $m_{H}\approx m_{p}$.

## (c).
Know that $n_{p}=n_{e}$. Therefore, need to solve:
$$\left\{\begin{align}
 & \frac{n_{p}^{2}}{n_{H}}= \left(  \frac{2\pi m_{e}kT}{h^{2}} \right)^{3/2}e^{-\beta\epsilon_{0}} \\
 & n_{p}+n_{H}= 10^{20}
\end{align}\right.$$
Then easy to find that:
$$n_{p}= 5.68 \times 10^{-12},n_{H}=10^{20}$$
Therefore:
$$\frac{n_{p}}{n}=5.68 \times 10^{-32}$$
## (d).
Since we are solving:
$$\frac{n_{p}^{2}}{n_{H}}= \frac{n_{p}^{2}}{n-n_{p}}= \left(  \frac{2\pi m_{e}kT}{h^{2}} \right)^{3/2}e^{-\beta\epsilon_{0}}$$
We found that 