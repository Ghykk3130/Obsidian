# 1.
## (a).
The partition function is given by:
$$Z=e^{\beta\epsilon}+e^{-\beta\epsilon}+1+1=2\cosh(\beta\epsilon)+2$$
Then:
$$\begin{align}
\langle U \rangle & = - \frac{1}{Z} \frac{\partial}{\partial \beta}Z \\
 & = - \frac{1}{2\cosh(\beta\epsilon)+2} 2\epsilon \sinh(\beta\epsilon) \\
 &= - \frac{\epsilon \sinh(\beta\epsilon)}{\cosh(\beta\epsilon)+1}
\end{align}$$
## (b).
The probability that the system is in $\epsilon$ is:
$$\frac{e^{-\beta\epsilon}}{2\cosh(\beta\epsilon)+2} \rightarrow \left\{ \begin{align}
 & \frac{1}{4},\text{ as }T\rightarrow \infty \\
 & 0,\text{ as }T\rightarrow 0
\end{align}\right.$$

The probability that the systems is in $0$ is:
$$2 \cdot \frac{e^{0}}{2\cosh(\beta\epsilon)+2}=\frac{1}{\cosh(\beta\epsilon)+1}\rightarrow \left\{\begin{align}
 & \frac{1}{2},\text{ as }T\rightarrow \infty \\
 & 0,\text{ as }T\rightarrow \infty
\end{align} \right.$$
The probability that the system is in $-\epsilon$ is:
$$\frac{e^{\beta\epsilon}}{2\cosh(\beta\epsilon)+2}\rightarrow \left\{ \begin{align}
 & \frac{1}{4},\text{ as }T\rightarrow \infty \\
 & 1, \text{ as }T\rightarrow \infty
\end{align}\right.$$
These results make sense because if $T$ is very high, then the factor $\exp(-\beta E)$ for all states are basically the same, since the energy differences are flattened out by the small $\beta$. This means that all states are equally probable. If $T$ is very low, then the factor $e^{-\beta\epsilon}$ would be very small for all states except for the state with the lowest energy. Because the $\beta$ becomes very large, and only the highest $-\epsilon$ value would dominate.  This means that all states except for the ground state are highly  improbable. This is also consistent with our instinct that in general a system would rest in its lowest state at zero temperature. 

# 2.
## (a).
Let $\Sigma(E,N)$ denote $\int_{\{ H\leq E \}} \frac{d^{N}qd^{N}p}{h^N}$. Consider the change of variables: $x_{i}=m\omega q_{i}$. Then the I have:
$$\begin{align}
 & H=\sum_{j}\left(  \frac{p_{j}^{2}}{2m}+ \frac{1}{2}m\omega q_{j}^{2} \right) \leq E \\
\implies & \sum_{i}(p_{i}^{2}+x_{i}^{2})\leq 2mE 
\end{align}$$
So this region corresponds to a $2N$-dimensional ball in the space spanned by $p_{i},x_{i}$. Then:
$$\begin{align}
\Sigma(E,N) & =\int_{\{ H\leq E \}} \frac{d^{N}qd^{N}p}{h^N} \\
 & = \frac{1}{(m\omega h)^{N}}\int_{\{ H\leq E \}}d^Nxd^Np \\
 & = \frac{1}{(m\omega h)^N} \frac{\pi^N}{N\Gamma(N)} (2mE)^N 
\end{align}$$
So if I thicken the energy shell by $\Delta E$, I know that:
$$\begin{align}
\Omega(E,N) & = \frac{\partial}{\partial E}\Sigma(E,N) \Delta E \\
 & = \left(  \frac{2\pi}{\omega h} \right)^{N} \frac{1}{N\Gamma(N)}NE^{N-1}\Delta E
\end{align}$$
Then take $N\rightarrow \infty$ to get:
$$\begin{align}
\ln \Omega & \approx N\ln\left(  \frac{2\pi}{\omega h} \right)-\ln N- \ln(N-1)!+\ln N+(N-1)\ln E +\ln \Delta E\\
 & \approx N \ln\left(  \frac{2\pi}{\omega h} \right)-N\ln N+N+N\ln E \\
 & = N\ln\left(  \frac{E}{N} \frac{1}{\omega \hbar} \right)+N
\end{align}$$
So:
$$S=kN\left(\ln\left(  \frac{E}{N} \frac{1}{\omega \hbar} \right)+1\right)$$

## (b).
We know that the probability that we find the system to be in a volume element in the phase space is:
$$\rho d^Nqd^Np= \frac{1}{h^N}d^Nqd^Np \frac{\exp(-\beta H)}{Z}$$
Therefore for normalization, the partition function is given by:
$$\begin{align}
Z= \frac{1}{h^N}\int_{\mathbb{R}^{2N}} d^Nqd^Np  \exp(-\beta H)
\end{align}$$
Again, if we set $x_{i}=m\omega q_{i}$, then:
$$\begin{align}
Z & = \frac{1}{h^N} \left( \frac{1}{m\omega}  \right)^N \int d^Nxd^Np\exp\left( - \frac{\beta}{2m} \left( \sum_{i}p_{i}^{2}+x_{i}^{2} \right) \right)
\end{align}$$
Consider we change the measure:
$$dSdR=d^Nxd^Np$$
Here we set $R=\sqrt{ \sum_{i}(p_{i}^{2}+x_{i}^{2}) }$, and $S$ is the surface area of an 2N-ball with radius $R$. We know that the volume of a 2N-ball is given by:
$$V=\frac{\pi^N}{N\Gamma(N)}R^{2N}$$
Then the surface area is:
$$S= \frac{\partial}{\partial R} \frac{\pi^N}{N\Gamma(N)}R^{2N}=\frac{2\pi^N}{\Gamma(N)}R^{2N-1}$$
Then I have:
$$\begin{align}
Z & = \left(  \frac{1}{hm\omega} \right)^N\int dSdR \exp\left( - \frac{\beta}{2m} R^{2}\right) \\
 & = \left(  \frac{1}{hm\omega} \right)^N \int_{0}^{\infty}dR \exp\left( - \frac{\beta}{2m}R^{2} \right)  \int_{\text{2N-sphere with radius }R} dS \\
 & = \left(  \frac{1}{hm\omega} \right)^N\int dR \exp\left( - \frac{ \beta}{2m}R^{2} \right) \frac{2\pi^N}{\Gamma(N)}R^{2N-1} 
\end{align}$$
It suffices to evaluate: 
$$\begin{align}
\int_{0}^{\infty}dR \exp\left( - \frac{\beta}{2m}R^{2} \right)R^{2N-1}  & = \left(  \frac{2m}{\beta} \right)^{2N}\int_{0}^{\infty}dy\exp(-y^{2})y^{2N-1}\text{ with }y= \sqrt{ \frac{\beta}{2m} }R \\
 & = \frac{1}{2}\left(  \frac{2m}{\beta} \right)^{2N}\int dy^{2}\exp(-y^{2})(y^{2})^{N-1} \\
 & = \frac{1}{2} \left(  \frac{2m}{\beta} \right)^{2N}\Gamma(N)
\end{align}$$
Then I have:
$$\begin{align}
Z & = \left(  \frac{1}{hm\omega} \right)^N \frac{2\pi^N}{\Gamma(N)}\cdot \frac{1}{2} \left( \frac{2m}{\beta} \right)^{2N}\Gamma(N) \\
 & = \left(  \frac{2\pi}{\omega h\beta} \right)^N \\
 & = \left(  \frac{1}{\omega \hbar \beta} \right)^N 
\end{align}$$







## (a).
The number of available quanta is $\frac{E}{\hbar \Omega}$. So the number of ways to distribute it is given by:
$$\Omega= \frac{N!}{\left(  \frac{E}{\hbar \omega} \right)!\left(  N- \frac{E}{\hbar \omega} \right)!}$$
Then take $N\rightarrow \infty$:
$$\begin{align}
\ln \Omega & \approx N\ln N-N- \left(  \frac{E}{\hbar \omega} \right)\ln\left(  \frac{E}{\hbar \omega} \right)- \frac{E }{\hbar \omega }- \left( N- \frac{E}{\hbar \omega} \right)\ln\left( N- \frac{E}{\hbar \omega} \right)-\left( N- \frac{E}{\hbar \omega} \right) \\
 & = \frac{E}{\hbar \omega}\ln\left( N \frac{\hbar \omega}{E} \right)+\left(N- \frac{E}{\hbar \omega} \right) \ln\left(  \frac{N}{N- \frac{E}{\hbar \omega}} \right)
\end{align}$$
So:
$$S=\frac{kE}{\hbar \omega}\ln\left( N \frac{\hbar \omega}{E} \right)+k\left(N- \frac{E}{\hbar \omega} \right) \ln\left(  \frac{N}{N- \frac{E}{\hbar \omega}} \right) $$
## (b).
The partition function is:
$$\begin{align}
Z & =\sum_{\text{all states}} \exp(-\beta H) \\
 & =  \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)\dots\left( \sum_{\text{all states of N}} \exp(-\beta H_{N}) \right) \\
 & = \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)^N \\
 & = \left( \sum_{n} \exp(-\beta n\hbar \omega) \right)^N \\
 & = \left(  \frac{1}{1-\exp(-\beta \hbar \omega)} \right)^N
\end{align}$$
## (c).



