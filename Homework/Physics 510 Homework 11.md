# 1.
## (a).
Know that the probability of finding a state in $\{ n_{k} \}=(n_{1},n_{2},\dots)$ is given by:
$$\frac{\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k} +\beta \mu \sum_{k}n_{k}\right)}{Q}$$
The grand partition function is given by:
$$\begin{align}
Q & = \sum_{\{ n_{j} \}}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\beta \mu \sum_{j}n_{j} \right) \\
 & = \left(\sum_{n_{1}}\exp(-\beta n_{1}\epsilon_{1}+\beta \mu n_{1})\right)\left(\sum_{n_{2}}\exp(-\beta n_{2}\epsilon_{2}+\beta \mu n_{2})\right)\dots \\
 & = \left(1+\mathcal{z}^{}e^{-\beta\epsilon_{1}} \right)(1+\mathcal{z}^{}e^{-\beta\epsilon_{2}})\dots \\
 & = \prod_{j}(1+\mathcal{z}^{}e^{-\beta\epsilon_{j}})
\end{align}$$
Therefore, the probability is:
$$\begin{align}
\frac{\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k}+\beta \mu \sum_{k}n_{k} \right)}{\prod_{j}(1+\mathcal{z}^{}e^{-\beta\epsilon_{j}})}=  \frac{\prod_{k}\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{\prod_{j}(1+\mathcal{z}^{}e^{-\beta\epsilon_{j}})}= \prod_{k} \frac{\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{1+\mathcal{z}e^{-\beta\epsilon_{k}}}
\end{align}$$
## (b).
Know that the occupation number is:
$$\langle n_{k}\rangle= \frac{1}{1+\mathcal{z}^{-1}e^{\beta\epsilon_{k}}}$$
Then:
$$\mathcal{z}^{-1}e^{\beta\epsilon_{k}}= \frac{1-\langle n_{k}\rangle}{\langle n_{k}\rangle}\implies\mathcal{z}e^{-\beta\epsilon_{k}}= \frac{\langle n_{k}\rangle}{1-\langle n_{k}\rangle}$$
So the denominator is:
$$\begin{align}
1+\mathcal{z}e^{-\beta\epsilon_{k}}= \frac{1}{1-\langle n_{k}\rangle}
\end{align}$$
Know that the numerator is:
$$\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})=\left\{\begin{align}
 & \mathcal{z}e^{-\beta\epsilon_{k}},n_{k}=1 \\
 & 1,n_{k}=0
\end{align}\right.$$
Then we have:
$$\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})= (\mathcal{z}e^{-\beta\epsilon_{k}})^{n_{k}}= \left( \frac{\langle n_{k}\rangle}{1-\langle n_{k}\rangle} \right)^{n_{k}}$$
Then the probability is
$$\begin{align}
\prod_{k} \frac{\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{1+\mathcal{z}e^{-\beta\epsilon_{k}}}= \prod_{k} \langle n_{k}\rangle^{n_{k}}(1-\langle n_{k}\rangle)^{1-n_{k}}
\end{align}$$
## (c).
We first compute the grand potential:
$$\begin{align}
\phi & = - \frac{1}{\beta}\ln Q \\
 & = - \frac{1}{\beta}\ln\left( \prod_{k}(1+\mathcal{z}e^{-\beta\epsilon_{k}}) \right) \\
 & = - \frac{1}{\beta}\ln\left( \prod_{k} \frac{1}{1-\langle n_{k}\rangle} \right) \\
 & = \frac{1}{\beta}\sum_{k}\ln(1-\langle n_{k}\rangle)
\end{align}$$
Then we have:
$$\begin{align}
S & = - \left( \frac{\partial \phi}{\partial T} \right)_{V,\mu} \\
 & = -\left(k\sum_{k}\ln(1-\langle n_{k}\rangle)+kT \sum_{k} \frac{ \frac{\partial}{\partial T} \langle n_{k}\rangle}{1-\langle n_{k}\rangle}\right) \\
 & = -k\sum_{k}\left(\ln(1-\langle n_{k}\rangle)+ \frac{1}{1-\langle n_{k}\rangle} T \frac{\partial}{\partial T}\langle n_{k}\rangle\right)
\end{align}$$
We can compute:
$$\begin{align}
\frac{1}{1-\langle n_{k}\rangle}T \frac{\partial}{\partial T}\langle n_{k}\rangle & = (1+\mathcal{z}e^{-\beta\epsilon_{k}})T \mathcal{z}^{-1}(\epsilon_{k}-\mu)e^{\beta\epsilon_{k}} \frac{-k\beta^{2}}{(\mathcal{z}^{-1}e^{\beta\epsilon_{k}}+1)^{2}} \\
 & = \frac{-k\beta^{2}}{(\mathcal{z}^{-1}e^{\beta\epsilon_{k}}+1)} (\epsilon_{k}-\mu)T \\
 & = -\beta(\epsilon_{k}-\mu)\langle n_{k}\rangle
\end{align}$$
So we have:
$$\begin{align}
S & =-k\sum_{k}(\ln(1-\langle n_{k}\rangle)-\beta(\epsilon_{k}-\mu)\langle n_{k}\rangle) \\
 & = -k\sum\left( \ln\left( 1-\langle n_{k}\rangle\right)- \ln\left(  \frac{1-\langle n_{k}\rangle}{\langle n_{k}\rangle} \right) \langle n_{k}\rangle\right)  \\
 & = -k\sum((1-\langle n_{k}\rangle)\ln(1-\langle n_{k}\rangle)+ \langle n_{k}\rangle \ln\langle n_{k}\rangle)
\end{align}$$
To distinguish the Boltzmann constant from the summation index, we write:
$$S=-k_{B}\sum_{k}((1-\langle n_{k}\rangle)\ln(1-\langle n_{k}\rangle)+\langle n_{k}\rangle \ln\langle n_{k}\rangle)$$
## (d).
Know that as $T\rightarrow 0$, either $\langle n_{k}\rangle\rightarrow 1\text{ or }0$. Then we have:
$$\begin{align}
S\rightarrow -k_{B}\sum_{k\text{ s.t. }\langle n_{k}\rangle\rightarrow 1}(1-\langle n_{k}\rangle)\ln(1-\langle n_{k}\rangle)-k_{B}\sum_{k\text{ s.t. }\langle n_{k}\rangle \rightarrow 0} \langle n_{k}\rangle \ln\langle n_{k}\rangle
\end{align}$$
It suffices to find $\lim_{ x \to 0 } x\ln x$. Know that:
$$\begin{align}
\lim_{ x \to 0 } x \ln x & = \lim_{ x \to 0 }\frac{ (\ln x)^{'}}{ (\frac{1}{x})^{'} }= \lim_{ x \to 0 } -x=0
\end{align}$$
Then we can conclude that:
$$S\rightarrow 0\text{ as }T\rightarrow{0}$$
This result makes sense because as we cool down, all levels below the fermi energy should be filled. Such state should occur more and more frequently as the temperature is lowered. At extremely low temperature, this state dominates, meaning that the system would almost certainly be in this state. Therefore the entropy should vanish.

# 2.
## (a).
Notice that $\vec{p}$ and $\vec{\sigma}$ operate on different Hilbert spaces, so the eigenstates of the system is given by the tensor product of free particle states and spin states.

Then the kinetic energy is still the free particle kinetic energy. Then the energy is:
$$\begin{align}
U & = \sum_{i} \frac{\hbar^{2}k_{i}^{2}}{2m} - \sum_{j}n_{j}^{+}\mu_{0}B+\sum_{j}n_{j}^{-}\mu_{0}B
\end{align}$$
Since each $\frac{\hbar^{2}k_{i}^{2}}{2m}$ corresponds to some non-zero occupation number, then I can rewrite the energy as:
$$U= \sum_{j}\left( \frac{\hbar^{2}k_{n_{j}^{+}}^{2}}{2m}\delta_{n_{j}^{+},1}-n_{j}^{+}\mu_{0}B\right)+\sum_{j}\left( \frac{\hbar^{2}k_{n_{j}^{-}}^{2}}{2m}\delta_{n_{j}^{-},1}+n_{j}^{-}\mu_{0}B \right)$$
Here, $\vec{k}_{n_{j}^{\pm}}$ means the free particle wavevector of the electrons in the slot $n_{j}^{\pm}$. The reason why the kinetic energy is multiplied by a delta function is because only when the occupation number $n_{j}^{\pm}$ is non-zero, meaning that there is actually an electron in the slot, will we count the kinetic energy of that electron.

The number of particles is:
$$N=\sum_{j}n_{j}^{+}+\sum_{j}n_{j}^{-}$$
## (b).
The grand partition function is given by:
$$\begin{align}
\phi & = \sum_{\{ n_{j}^{+},n_{j}^{-} \}}\sum_{\vec{k}_{n_{j}^{+}},\vec{k}_{n_{j}^{-}}}\exp\left(-\beta\sum_{j}\left( \frac{\hbar^{2}k_{n_{j}^{+}}^{2}}{2m}\delta_{n_{j}^{+},1}-n_{j}^{+}\mu_{0}B-\mu n_{j}^{+}\right)-\beta\sum_{j}\left( \frac{\hbar^{2}k_{n_{j}^{-}}^{2}}{2m}\delta_{n_{j}^{-},1}+n_{j}^{-}\mu_{0}B - \mu n_{j}^{-}\right)\right) \\
 & = \left(\sum_{n_{0}^{+}}\sum_{\vec{k}_{n_{0}^{+}}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{0}^{+}}^{2}}{2m}\delta_{n_{0}^{+},1}+\beta n_{0}^{+}\mu_{0}B+\beta \mu n_{0}^{+} \right)\right)\left(\sum_{n_{0}^{-}}\sum_{\vec{k}_{n_{0}^{-}}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{0}^{-}}^{2}}{2m}\delta_{n_{0}^{-},1}-\beta n_{0}^{-}\mu_{0}B+ \beta n_{0}^{-} \right)\right)\dots \\
 & = \prod_{j}\left(\sum_{n_{j}^{+}}\sum_{\vec{k}_{n_{j}^{+}}^{}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{j}^{+}}^{2} }{2m}\delta_{n_{j}^{+},1}+ \beta n_{j}^{+}\mu_{0}B+\beta \mu n_{j}^{+} \right)\right)\prod_{j^{'}}\left(\sum_{n_{j}^{-}}\sum_{\vec{k}_{n_{j}^{-}}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{j}^{-}}^{2}}{2m}\delta_{n_{j}^{-},1}- \beta n_{j}^{-}\mu_{0}B+\beta \mu n_{j}^{-} \right)\right)
\end{align}$$
Know that:
$$\begin{align}
\sum_{\vec{k}} \exp\left( -\beta \frac{\hbar^{2}k^{2} }{2m}  \right)  & \approx \frac{V}{(2\pi)^{3}}\int_{\mathbb{R}^{3}}d^{3}k\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right) \\
 & = \frac{V}{(2\pi )^{3}} \int_{0}^{\infty}dk 4\pi k^{2}\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right) \\
 & = \frac{V}{(2\pi)^{3}}2\pi\int_{2}\pi dk^{2}(k^{2})^{1/2}\exp\left( -\beta \frac{\hbar^{2}k^{2}}{2m} \right) \\
 & = \frac{V}{(2\pi)^{3}} \left( \frac{2\pi m}{\beta \hbar} \right)^{3/2} \\
 & = \frac{V}{(2\pi \lambda)^{3}}
\end{align}$$
Then we have:
$$\begin{align}
\prod_{j}\left(\sum_{n_{j}^{+}}\sum_{\vec{k}_{n_{j}^{+}}^{}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{j}^{+}}^{2} }{2m}\delta_{n_{j}^{+},1}+ \beta n_{j}^{+}\mu_{0}B+\beta \mu n_{j}^{+} \right)\right) & = \prod_{j}\left(\sum_{n_{j}^{+}}\left(  \frac{V}{(2\pi \lambda)^{3}} \right)^{\delta_{n_{j}^{+}},1}\exp(\beta n_{j}^{+}\mu_{0}B+\beta \mu n_{j}^{+})\right) \\
 & = \prod_{j}\left(1+ \frac{V}{(2\pi \lambda)^{3}}\exp(\beta \mu_{0}B+\beta \mu)\right)
\end{align}$$
Similarly, we can compute:
$$\begin{align}
\prod_{j^{'}}\left(\sum_{n_{j}^{-}}\sum_{\vec{k}_{n_{j}^{-}}}\exp\left( -\beta \frac{\hbar^{2}k_{n_{j}^{-}}^{2}}{2m}\delta_{n_{j}^{-},1}- \beta n_{j}^{-}\mu_{0}B+\beta \mu n_{j}^{-} \right)\right) & = \prod_{j^{'}}\left(\sum_{n_{j}^{-}}\left( \frac{V}{(2\pi \lambda)^{3}} \right)^{\delta_{n_{j}^{-},1}}\exp(- \beta n_{j}^{-}\mu_{0}B+\beta \mu n_{j}^{-})\right) \\
 &= \prod_{j^{'}}\left( 1+ \frac{V}{(2\pi \lambda)^{3}} \exp(-\beta \mu_{0}B+\beta \mu)\right)
\end{align}$$
Then we have that:
$$\begin{align}
\ln Q & = \sum_{j}\ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\exp(\beta \mu_{0}B+\beta \mu) \right)+\sum_{j^{'}}\ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\exp(-\beta \mu_{0}B+\beta \mu) \right) \\
 & = \sum_{j}\left( \ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\mathcal{z}^{}e^{\beta \mu_{0}B} \right)+ \ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\mathcal{z}^{}e^{-\beta\mu_{0}B} \right) \right)
\end{align}$$
Then we must have:
$$\begin{align}
\phi & = - \frac{1}{\beta}\ln Q \\
 & = -kT \sum_{j}\left( \ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\mathcal{z}^{}e^{\beta \mu_{0}B} \right)+ \ln\left( 1+ \frac{V}{(2\pi \lambda)^{3}}\mathcal{z}^{}e^{-\beta\mu_{0}B} \right) \right)
\end{align}$$

