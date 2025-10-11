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
 & 0,\text{ as }T\rightarrow 0
\end{align} \right.$$
The probability that the system is in $-\epsilon$ is:
$$\frac{e^{\beta\epsilon}}{2\cosh(\beta\epsilon)+2}\rightarrow \left\{ \begin{align}
 & \frac{1}{4},\text{ as }T\rightarrow \infty \\
 & 1, \text{ as }T\rightarrow 0
\end{align}\right.$$
These results make sense because if $T$ is very high, then the factor $\exp(-\beta E)$ for all states are basically the same, since the energy differences are flattened out by the small $\beta$. This means that all states are equally probable. If $T$ is very low, then the factor $e^{-\beta\epsilon}$ would be very small for all states except for the state with the lowest energy. Because the $\beta$ becomes very large, and only the highest $-\epsilon$ value would dominate.  This means that all states except for the ground state are highly  improbable. This is also consistent with our instinct that in general a system would rest in its lowest state at zero temperature. (if there is only one particle in the system, so that I don't worry about the Pauli exclusion.)

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

## (c).
Know that:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
 & =  \frac{N}{\beta}\ln( \omega \hbar \beta)
\end{align}$$
Then because $\beta=\frac{1}{kT}\implies d\beta=- \frac{1}{kT^{2}}dT$, I get:
$$\begin{align}
S  & = - \left( \frac{\partial F}{\partial T} \right)_{N,V} \\
 & = k\beta^{2} \frac{\partial F}{\partial \beta} \\
 & = Nk\beta^{2}\left( - \frac{1}{\beta^{2}}\ln(\omega \hbar \beta)+ \frac{1}{\beta}\cdot \frac{1}{\beta} \right) \\
 & = Nk(1- \ln(\omega \hbar \beta))
\end{align}$$
We know that:
$$\begin{align}
E & = - \frac{\partial}{\partial \beta}\ln Z \\
 & =  \frac{\partial}{\partial \beta}N\ln(\omega \hbar \beta) \\
 & = \frac{N}{\beta}
\end{align}$$
Therefore:
$$\begin{align}
S & = Nk\left( 1+ \ln\left( \frac{1}{\omega \hbar \beta} \right) \right) \\
 & = Nk\left( 1+ \ln\left(  \frac{E}{N} \frac{1}{\hbar \omega} \right) \right)
\end{align}$$
This is the same as the entropy that I found in part $(a)$.

## (d).
$$\begin{align}
C & = T\left(  \frac{\partial S}{\partial T} \right)_{N,V} \\
 & = -\beta \frac{\partial S}{\partial \beta} \\
 & = -\beta \cdot \left( - Nk \frac{1}{\beta} \right) \\
 & = Nk
\end{align}$$
# 3.
## (a).
The partition function is:
$$\begin{align}
Z & =\sum_{\text{all states}} \exp(-\beta H) \\
 & =  \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)\dots\left( \sum_{\text{all states of N}} \exp(-\beta H_{N}) \right) \\
 & = \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)^N \\
 & = \left( \sum_{n} \exp(-\beta n\hbar \omega) \right)^N \\
 & = \left(  \frac{1}{1-\exp(-\beta \hbar \omega)} \right)^N
\end{align}$$
## (b).
We know that:
$$\begin{align}
Prob(\text{oscillator k is in state n}) & = \sum_{\text{all states of oscillators i, }i\neq k} \frac{\exp(-\beta(E_{1}+\dots+E_{k}+\dots+E_{N}) )}{Z} \\
 & = \frac{\exp(-\beta E_{k})}{Z}\sum_{\text{all states of oscillators i, }i\neq k}\exp(-\beta E_{1})\dots \exp(-\beta E_{N}) \\
 & = \frac{\exp(-\beta E_{k})}{Z} \left( \sum_{l}\exp(-\beta l\hbar \omega) \right)^{N-1} \\ & = \frac{\exp(-\beta n\hbar \omega)}{Z}\left(  \frac{1}{1-\exp(-\beta \hbar \omega)} \right)^{N-1} \\

 & = \exp(-\beta n\hbar \omega)(1-\exp(-\beta \hbar \omega))
\end{align}$$
## (c).
We have:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
 & = \frac{N}{\beta}\ln(1-e^{-\beta \hbar \omega})
\end{align}$$
Then:
$$\begin{align}
S & =- \left( \frac{\partial F}{\partial T} \right)_{V,N} \\
 & = k\beta^{2} \frac{\partial F}{\partial \beta} \\
 & = k\beta^{2}\left(  - \frac{N}{\beta^{2}}\ln(1-e^{-\beta \hbar \omega})+ \frac{N}{\beta} \frac{\omega \hbar e^{-\beta \hbar \omega}}{1-e^{-\beta \hbar \omega}} \right) \\
 & = -Nk\ln(1-e^{-\beta \hbar \omega})+ k\beta N\omega \hbar\frac{e^{-\beta \hbar \omega}}{1- e^{-\beta \hbar \omega}} 
\end{align}$$
Then I have:
$$\begin{align}
C & = T \left( \frac{\partial S}{\partial T} \right)_{N,V} \\
 & = -\beta \frac{\partial S}{\partial \beta} \\
 & = -\beta\left( -Nk\hbar \omega \frac{e^{-\beta \hbar \omega}}{1-e^{-\beta \hbar \omega}}+Nk\hbar \omega \frac{e^{-\beta \hbar \omega}}{1-e^{-\beta \hbar \omega}}-k\beta N(\hbar \omega)^{2} \frac{-e^{-\beta \hbar \omega}(1-e^{-\beta \hbar \omega})-\hbar \omega e^{-\beta 2\hbar \omega}}{(1-e^{-\beta \hbar \omega})^{2}} \right) \\
 & = Nk(\beta \hbar \omega)^{2}  \frac{e^{-\beta \hbar \omega}}{(1-e^{-\beta \hbar \omega})^{2}} \\
 & = Nk(\beta \hbar \omega)^{2} \frac{1}{2\cosh(\beta \hbar \omega)-2}
\end{align}$$
As $T\rightarrow \infty$, I have $\beta \rightarrow 0$. Then:
$$\begin{align}
\cosh(\beta \hbar \omega)  & \approx 1+ \frac{1}{2}(\beta \hbar \omega)^{2}
\end{align}$$
So:
$$\begin{align}
C  & \approx Nk(\beta \hbar \omega)^{2} \frac{1}{2+(\beta \hbar \omega)^{2}-2} \\
 & = Nk
\end{align}$$
This is consistent with the classical harmonic oscillators.

## (d).
I already found the entropy in part $(c)$:
$$S = -Nk\ln(1-e^{-\beta \hbar \omega})+ k\beta N\omega \hbar\frac{e^{-\beta \hbar \omega}}{1- e^{-\beta \hbar \omega}} $$
As $T\rightarrow 0,\beta\rightarrow{\infty}$, obviously:
$$-Nk\ln(1-e^{-\beta \hbar \omega})\rightarrow 0$$
For the second term:
$$\begin{align}
k\beta N\omega \hbar \frac{e^{-\beta \hbar \omega}}{1-e^{-\beta \hbar \omega}} & \approx Nk\omega \hbar \beta e^{-\beta \hbar \omega}\approx 0
\end{align}$$
Then we have:
$$\lim_{ T \to 0 } S=0$$
This is because at low temperature, the Boltzmann factor $e^{-\beta E}$ would only dominate if $E$ is the smallest. Recall that for a specific configuration of the system, meaning that each oscillator has some specified energy, then the probability would be $Prob=\frac{\exp(-\beta E_{1})\dots \exp(-\beta E_{N})}{Z}$. But since the states with smallest $E$'s would dominate, the the most probable configuration of the system would be that all oscillators rest in $E=0$. all other configurations are highly unlikely because of the large $\beta$. Since there is only one possible configuration, the entropy vanishes because $\ln 1=0$. This is also an example of the third law, which basically says that the entropy goes to zero as $T$ goes to zero.

# 4.
## (a).
The contribution to the partition function is given by:
$$\begin{align}
Z & = \int \frac{d\theta d\phi dp_{\theta}dp_{\phi}}{h^{2}} \exp(- \beta H) \\
 & = \frac{1}{h^2} \int_{0}^\pi d\phi \int_{\mathbb{R}}dp_{\theta} \exp\left( - \frac{\beta }{2I}{p_{\theta}^{2}} \right)\int_{0}^\pi d\theta \int_{\mathbb{R}}dp_{\phi}\exp\left( - \frac{\beta}{2I} \frac{p_{\phi}^{2}}{\sin ^{2}\theta} + \beta \mu\epsilon \cos \theta\right) \\
 & = \frac{1}{h^2} 2\pi \sqrt{  \frac{2I}{\beta} }\sqrt{ \pi } \int_{0}^\pi d\theta \sqrt{ \frac{2I}{\beta} } \sin \theta \exp(\beta \mu\epsilon \cos \theta) \sqrt{ \pi } \\
 & = \frac{1}{h^2} 2\pi \sqrt{  \frac{2I}{\beta} }\sqrt{ \pi } \sqrt{ \frac{2I}{\beta }}\sqrt{ \pi } \int_{-1}^1d(\cos \theta)\exp(\beta \mu\epsilon \cos \theta) \\
 & = \frac{1}{h^2} 2\pi \sqrt{  \frac{2I}{\beta} }\sqrt{ \pi } \sqrt{ \frac{2I}{\beta }}\sqrt{ \pi } \frac{2}{\beta \mu\epsilon} \sinh(\beta \mu\epsilon) \\
 & = \frac{1}{h^{2}} \frac{8\pi^{2}I}{\beta^{2}\mu\epsilon}\sinh(\beta \mu\epsilon)
\end{align}$$
## (b).
We know that the average is given by:
$$\begin{align}
\langle \mu \cos \theta \rangle & = \frac{\int \frac{d\theta d\phi dp_{\theta}dp_{\phi}}{h^{2}}\exp(-\beta H)\mu \cos \theta}{\int \frac{d\theta d\phi dp_{\theta}dp_{\phi}}{h^{2}}\exp(-\beta H)}
\end{align}$$
The reason why we didn't write out other degrees of freedom is because all degrees of freedom that are not related to $\theta,\phi$ would be factor out in the integral, and cancel exactly for they both appear in the numerator and denominator.

The denominator is simply $Z$. Now find the numerator:
$$\begin{align}
\int \frac{d\theta d\phi dp_{\theta}dp_{\phi}}{h^{2}}\exp(-\beta H)\mu \cos \theta & = \frac{1}{h^{2}} \int_{0}^{2\pi}d\phi \int_{\mathbb{R}}dp_{\theta}\exp\left( - \frac{\beta}{2I}p_{\theta}^{2} \right) \int_{0}^{\pi}d\theta \int_{\mathbb{R}}dp_{\phi}\exp\left( - \frac{\beta}{2I} \frac{p_{\phi}^{2}}{\sin ^{2}\theta}+\beta \mu\epsilon \cos \theta \right)\mu \cos \theta \\
 & = \frac{\mu}{h^{2}}\cdot 2\pi \cdot \sqrt{ \frac{2I}{\beta} }\sqrt{ \pi } \cdot \int_{0}^{\pi}d\theta \sqrt{  \frac{2I}{\beta} }\sqrt{ \pi }\sin \theta \cos \theta \exp(\beta \mu\epsilon \cos \theta)
\end{align}$$
Obviously:
$$\begin{align}
\int_{0}^\pi d\theta \sin \theta \cos \theta \exp(\beta \mu\epsilon \cos \theta)  & = \int_{-1}^1d(\cos \theta)\cos \theta \exp(\beta \mu\epsilon \cos \theta ) \\
 & =\int_{-1}^{1}d(\cos \theta) \frac{\partial}{\partial(\beta \mu\epsilon) }\exp(\beta \mu\epsilon \cos \theta) \\
 & = \frac{\partial}{\partial(\beta \mu\epsilon)}\left(  \frac{2}{\beta \mu \epsilon} \sinh(\beta \mu\epsilon) \right) \\
 & = - \frac{2}{\beta^{2}\mu^{2}\epsilon^{2}}\sinh(\beta \mu\epsilon)+ \frac{2}{\beta \mu\epsilon}\cosh(\beta \mu\epsilon)
\end{align}$$
So:
$$\int \frac{d\theta d\phi dp_{\theta}dp_{\phi}}{h^{2}}\exp(-\beta H)\mu \cos \theta=\frac{1}{h^{2}} \frac{8\pi^{2}I}{\beta^{3}\mu\epsilon^{2}}(-\sinh(\beta \mu\epsilon)+\beta \mu\epsilon \cosh(\beta \mu\epsilon))$$
Then: 
$$\begin{align}
\langle \mu \cos \theta \rangle & = \frac{\frac{1}{h^{2}} \frac{8\pi^{2}I}{\beta^{3}\mu\epsilon^{2}}(-\sinh(\beta \mu\epsilon)+\beta \mu\epsilon \cosh(\beta \mu\epsilon))}{\frac{1}{h^{2}} \frac{8\pi^{2}I}{\beta^{2}\mu\epsilon}\sinh(\beta \mu\epsilon)} \\
 & = \frac{1}{\beta\epsilon}(-1+\beta \mu\epsilon \coth(\beta \mu\epsilon))
\end{align}$$

## (c).
Consider the expansion of $\coth x$: 
$$\begin{align}
\coth x & = \frac{\cosh x}{\sinh x} \\
 & = \frac{\sum_{n\text{ even}} \frac{x^n}{n!}}{\sum_{l\text{ odd}} \frac{x^l}{l!}} \\
 & =\frac{1}{x} \frac{\sum_{n \text{ even}} \frac{x^n}{n!}}{\sum_{l\text{ odd}} \frac{x^{l-1}}{l!}} \\
 & = \frac{1}{x} \left( \sum_{n\text{ even}} \frac{x^n}{n!} \right)\left(1- \left(\sum_{l\text{ odd}} \frac{x^{l-1}}{l!}\right)+ \left(\sum_{l\text{ odd}} \frac{x^{l-1}}{l!}\right)^2-\dots\right)
\end{align}$$
For terms after $\frac{1}{x}$, I have:
$$\left( \sum_{n\text{ even}} \frac{x^n}{n!} \right)\left(1- \left(\sum_{l\text{ odd}} \frac{x^{l-1}}{l!}\right)+ \left(\sum_{l\text{ odd}} \frac{x^{l-1}}{l!}\right)^2-\dots\right)=1+ \frac{x^{2}}{3}+\mathcal{O}(x^{3})$$
Then:
$$\begin{align}
\langle \mu \cos \theta \rangle & = \frac{1}{\beta\epsilon}\left( -1+ \beta \mu\epsilon \cdot \left( \frac{1}{\beta \mu\epsilon}\left( 1+ \frac{(\beta \mu\epsilon)^{2}}{3}+\mathcal{O}(\epsilon^{3}) \right) \right) \right) \\
 & = \frac{1}{3}\beta \mu^{2}\epsilon+ \mathcal{O}(\epsilon^{2})
\end{align}$$
Then clearly:
$$\begin{align}
\left.\frac{\partial P}{\partial\epsilon} \right|_{\epsilon=0 } & =\left. \frac{1}{3}\beta \mu^{2}+ \mathcal{O}(\epsilon) \right|_{\epsilon=0} \\
 & = \frac{1}{3}\beta \mu^{2}
\end{align}$$
## (d).
We know that:
$$\begin{align}
U & = - \frac{\partial}{\partial \beta}\ln Z \\
 & = - \frac{1}{Z} \frac{\partial}{\partial \beta}Z \\
 & = - \frac{1}{\frac{8\pi^{2}I}{h^{2}\mu\epsilon} \frac{1}{\beta^{2}}\sinh(\beta \mu\epsilon)} \cdot \frac{8\pi^{2}I}{h^{2}\mu\epsilon} \left(  - \frac{2}{\beta^{3}}\sinh(\beta \mu\epsilon)+ \frac{1}{\beta^{2}}\cdot \mu\epsilon \cosh(\beta \mu\epsilon) \right) \\
 & = \frac{2}{\beta}-\mu\epsilon \coth(\beta \mu\epsilon)
\end{align}$$
Then as $T\rightarrow \infty,\beta\rightarrow 0$, I have :
$$\begin{align}
U  & \approx \frac{2}{\beta}-\mu\epsilon \cdot \frac{1}{\beta \mu\epsilon}\left( 1 + \frac{(\beta \mu\epsilon)^{2}}{3} \right) \\
 & = \frac{1}{\beta}+ \frac{1}{3}\beta \mu^{2}\epsilon^{2} \\
 & \approx \frac{1}{\beta}=kT
\end{align}$$
The high temperature limit makes sense, because this is consistent with the equipartition theorem. We have two rotational degrees of freedom, and each of them contributes $kT$ to the internal energy.

As $T\rightarrow 0,\beta\rightarrow \infty$, I have:
$$\begin{align}
\frac{2}{\beta}\rightarrow 0, \coth(\beta \mu\epsilon)\rightarrow {1}
\end{align} $$
So:
$$U\rightarrow-\mu\epsilon$$
Or without ignoring the $\mathcal{O}(T)$ term, I have:
$$U \approx 2kT-\mu\epsilon$$
This also makes sense, because at low $T$, the Boltzmann factor $e^{-\beta E}$ would heavily favor $E$ that are more negative. We know that the lowest possible energy of this configuration is that $H=-\mu\epsilon$, which means that the dipole is aligned with the field, and there is no rotation. Then this state would dominate and contribute most in the ensemble. 
## (e).
I have:
$$\begin{align}
C & = \left( \frac{\partial U}{\partial T} \right)_{N,V} \\
 & = -k\beta^{2} \frac{\partial U}{\partial \beta} \\
 & = -k\beta^{2}\left( - \frac{2}{\beta^{2}}+\left(  \frac{\mu\epsilon}{\sinh(\beta \mu\epsilon)} \right)^{2} \right) \\
 & = k\left( 2- \left(  \frac{\beta \mu\epsilon}{\sinh(\beta \mu\epsilon)} \right)^{2} \right)
\end{align}$$
A schematic sketch of the temperature dependence (this is only about the overall pattern. The exact numbers should be meaningless.):
<div style="text-align:center">
<img src="heat_capacitance (3).png" width="400">
</div>
