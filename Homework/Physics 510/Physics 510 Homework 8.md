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
$$F=F_{H}+F_{p^{}}+F_{e^{}}$$
Know that at equilibrium, we must have:
$$T_{H}=T_{p}=T_{e}$$
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
$$\frac{n_{p}}{n}=5.0263 \times 10^{-32}$$
I noticed that this number is extremely sensitive to how many digits you keep in the computation process, since it's such a small number and computers have difficulty handling it. The order of magnitude should be correct.
## (d).
Since we are solving:
$$\frac{n_{p}^{2}}{n_{H}}= \frac{n_{p}^{2}}{n-n_{p}}= \left(  \frac{2\pi m_{e}kT}{h^{2}} \right)^{3/2}e^{-\beta\epsilon_{0}}$$
If we define $a = \left( \frac{2\pi m_{e}kT}{h^{2}} \right)^{3/2}e^{-\beta\epsilon_{0}}$, then it's easy to find (since it's just a quadratic equation)
 that:
 $$n_{p}= \frac{-a+\sqrt{ a^{2}+4an }}{2}$$
 Then:
 $$\frac{n_{p}}{n}= \frac{- \frac{a}{n}+ \sqrt{ \left(  \frac{a}{n} \right)^{2} + \frac{4a}{n}}}{2}$$
Set $x:= \frac{a}{n}$, then we have:
$$\begin{align}
\frac{\partial}{\partial n}\left(  \frac{n_{p}}{n} \right)  & = \frac{-1+ \frac{1}{2} \frac{2x+4}{\sqrt{ x^{2}+4x }}}{2 } \frac{\partial x}{\partial n}
\end{align}$$
Observe that:
$$\begin{align}
-1+ \frac{1}{2} \frac{2x+4}{\sqrt{ x^{2}+4x }} & > -1+ \frac{1}{2} \frac{2x+4}{\sqrt{ x^{2}+4x+4 }} \\
 &=-1+ \frac{1}{2} \frac{2x+4}{x+2} \\
 & = 0
\end{align}$$
Obviously, $\frac{\partial x}{\partial n}=- \frac{a}{n^{2}}<0$. Therefore $\frac{\partial}{\partial n}\left(  \frac{n_{p}}{n} \right)<0$. As n decreases, the degree of ionization indeed increases.
# 3.
## (a).
Know that at equilibrium, the temperature must be the same. Then consider the change in Gibbs' free energy induced by the change of particle numbers:
$$\delta G = \mu_{H_{2}}\delta N_{H_{2}}+\mu_{N_{2}}\delta N_{N_{2}}+\mu_{NH_{3}}\delta N_{NH_{3}}$$
Know that the constraint is:
$$\delta N_{H_{2}}=3\delta N_{N_{2}},-2\delta N_{N_{2}}=\delta N_{NH_{3}}$$
Then must have:
$$2\mu_{NH_{3}}=\mu_{N_{2}}+3\mu_{H_{2}} \tag{*}$$
## (b).
Similar to part (b) of 2, If I assume that the energy stored in one N-H bound is $\epsilon_{1}$, the energy stored in H-H bound is $\epsilon_{2}$, and the energy stored in N-N bound is $\epsilon_{3}$, I can write down the chemical potentials (by energy stored, I mean the amount of energy it takes to break the bounds. It should be a positive value.):
$$\begin{align}
 & \mu_{NH_{3}}=- \frac{1}{\beta} \ln\left(  \frac{V}{N_{NH_{3}}h^{3}} \left( \frac{2\pi(m_{N}+3m_{H})}{\beta} \right)^{3/2}\right) = - \frac{1}{\beta}\ln\left( \frac{V}{N_{NH_{3}}} \frac{1}{\lambda_{3}^{3}} \right)-3\epsilon_{1}\\
 & \mu_{H_{2}}=- \frac{1}{\beta}\ln\left(  \frac{V}{N_{H_{2}}h^{3}}\left(  \frac{4\pi m_{H}}{\beta} \right)^{3/2} \right)=- \frac{1}{\beta}\ln\left(  \frac{V}{N_{H_{2}}} \frac{1}{\lambda_{1}^{3}} \right)-\epsilon_{2} \\
 & \mu_{N_{2}}= - \frac{1}{\beta}\ln\left(  \frac{V}{N_{N_{2}}h^{3}}\left(  \frac{4\pi m_{N} }{\beta} \right)^{3/2} \right)= - \frac{1}{\beta}\ln\left(  \frac{V}{N_{N_{2}}} \frac{1}{\lambda_{2}^{3}} \right)-\epsilon_{3}
\end{align}$$
## (c).
Then substituting into $(*)$ to get:
$$\begin{align}
 & - \frac{2}{\beta}\ln\left(  \frac{V}{N_{NH_{3}}} \frac{1}{\lambda_{3}^{3}} \right)-6\epsilon_{1}=- \frac{3}{\beta}\ln\left(  \frac{V}{N_{H_{2}}} \frac{1}{\lambda_{1} ^{3}} \right)- \frac{1}{\beta} \ln\left(  \frac{V}{N_{N_{2}}} \frac{1}{\lambda_{2}^{3}} \right) -3\epsilon_{2}-\epsilon_{3}\\
\implies & N_{a}^{2}[NH_{3}]^{2}\lambda_{3}^{6}\exp(-6\epsilon_{1} \beta+3\epsilon_{2}\beta+\epsilon_{3}\beta)= N_{a}^{3}[H_{2}]^{3}\lambda_{1}^{9}N_{a}[N_{2}]\lambda_{2}^{3} \\
\implies & \frac{[NH_{3}]^{2}}{[H_{2}]^{3}[N_{2}]}= \frac{\lambda_{1}^9\lambda_{2}^{3}}{\lambda_{3}^{6}}N_{a}^{2}\exp(\beta(6\epsilon_{1}-3\epsilon_{2}-\epsilon_{3}))=\frac{\lambda_{1}^9\lambda_{2}^{3}}{\lambda_{3}^{6}}N_{a}^{2}\exp(-\beta \Delta\epsilon)
\end{align}$$
where $\Delta\epsilon=-6\epsilon_{1}+3\epsilon_{2}+\epsilon_{3}$, that is the energy absorbed into the system per forward reaction. (For one reaction, need to break 3 H-H bounds, 1 N-N bound, and form 6 N-H bounds. Then the energy released is $6\epsilon_{1}-3\epsilon_{2}-\epsilon_{3}$. By one reaction, I mean three H2 and one N2 are turned into two NH3.)  

# 4.
First find the partition function of the solid. Assume that an energy of $\epsilon_{0}$ would be released if one particle in the gas phase gets absorbed into the solid phase. Assume that there are $N$ particles in the solid. Then:
$$\begin{align}
Z & =\sum_{\text{All states}}\exp\left( -\beta\left( \sum_{i}\hbar E_{i}-N\epsilon_{0} \\
 \right) \right) \\
 & = e^{\beta N\epsilon_{0}} \left( \sum_{\text{All states of particle 1}}\exp(-\beta E_{1}) \right)^{3N} \\
 & = e^{\beta N\epsilon_{0}} \left(  \frac{1}{1-e^{-\beta \hbar \omega}} \right)^{3N}
\end{align}$$
Then we get:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
 & = \frac{3N}{\beta}\ln( 1- e^{-\beta \hbar \omega})-N\epsilon_{0}
\end{align}$$
Therefore, the chemical potential of the solid is given by:
$$\mu_{s}= \left( \frac{\partial F}{\partial N} \right)_{T,V}= \frac{3}{\beta}\ln(1-e^{-\beta \hbar \omega})-\epsilon_{0}$$
By the similar technique we used in problem 2, I can write down the chemical potential of the gas phase:
$$\mu_{g}= - \frac{1}{\beta}\ln\left(  \frac{V_{g}}{N_{g}} \frac{1}{\lambda^{3}} \right)$$
We know that at equilibrium, the temperatures of the solid and the gas are the same. Assume that the total volume of the system is unchanged. Then the change in Free energy is given by:
$$\delta F=\mu_{s}\delta N+\mu_{g}\delta N_{g}=0$$
Know that the constraint is $\delta N+\delta N_{g}=0$. Then:
$$\mu_{s}=\mu_{g}$$
Then:
$$\begin{align}
 & - \frac{1}{\beta}\ln\left(  \frac{V_{g}}{N_{g}} \frac{1}{\lambda^{3}} \right) = \frac{3}{\beta}\ln(1-e^{-\beta \hbar \omega})-\epsilon_{0} \\
\implies & \frac{N_{g}}{V_{g}}= \frac{1}{\lambda^{3}}(1-e^{-\beta \hbar \omega_{0}})^{3}e^{-\beta \epsilon_{0}}
\end{align}$$
Finally, we get:
$$\begin{align}
p_{g} & = \frac{N_{g}kT}{V_{g}}=\frac{kT}{\lambda^{3}}(1-e^{- \beta \hbar \omega})^{3}e^{-\beta\epsilon_{0}} \\
 & = \frac{(2\pi m)^{3/2}}{h^{3}}(kT)^{5/2}(1-e^{-\beta \hbar \omega})^{3}e^{-\beta\epsilon_{0}}
\end{align}$$
