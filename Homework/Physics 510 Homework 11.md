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

The energy is given by:
$$U= \sum_{j}n_{j}^{+}\left( \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right)+\sum_{j}n_{j}^{-}\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right)$$
where $j$ is the index of kinetic energy levels. $\vec{k}_{j}$ is the wavevector corresponding to this kinetic energy. $n_{j}^{\pm}$ is the occupation number of the spin state

The number of particles is:
$$N=\sum_{j}n_{j}^{+}+\sum_{j}n_{j}^{-}$$
## (b).
The grand partition function is given by:
$$\begin{align}
Q & = \sum_{\{ n_{j}^{+},n_{j}^{-} \}}\exp\left( -\beta \sum_{j}n_{j}^{+}\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B-\mu \right)- \beta \sum_{j}n_{j}^{-}\left( \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B-\mu \right) \right) \\
 & = \sum_{\{ n_{j}^{+} \}}\exp\left( -\beta \sum_{j} n_{j}^{+} \left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B-\mu \right) \right)\sum_{\{ n_{j}^{-} \}}\exp\left( -\beta \sum_{j}n_{j}^{-}\left( \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B_{0}-\mu \right) \right) \\
 & = \prod_{j} \sum_{n_{j}^{+}}\exp\left( -\beta n_{j}^{+}\left( \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B-\mu \right) \right)\prod_{j}\sum_{n_{j}^{-}}\exp\left( -\beta n_{j}^{-}\left(  \frac{habr^{2}k_{j}^{2}}{2m}+\mu_{0}B-\mu \right) \right) \\
 & = \prod_{j}\left( 1+\mathcal{z}\exp\left( -\beta\left( \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right) \right)\prod_{j}\left( 1+\mathcal{z}\exp\left( -\beta \left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right) \right) \\
 & = \prod_{j}\left( 1+\mathcal{z}\exp\left( -\beta\left( \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right) \right)\left( 1+\mathcal{z}\exp\left( -\beta \left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right) \right)
\end{align}$$
Then, the grand potential is given by:
$$\begin{align}
\phi & = - \frac{1}{\beta} \ln Q \\
 & = -kT\sum_{j}\left( \ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m} -\mu_{0}B\right) \right) \right) +\ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right) \right)\right)
\end{align}$$
The notation here may look a little bit messy. Here each $j$ is uniquely associated with a $\vec{k}_{j}$. So the sum is over all $\vec{k}_{j}$ that satisfies the boundary condition. In other words, the sum can be written as $\sum_{\vec{k}_{j}}$. So we can also write:
$$\phi=-kT\sum_{\vec{k}_{j}}\left( \ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m} -\mu_{0}B\right) \right) \right) +\ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right) \right)\right)$$

## (c).
We know that:
$$\begin{align}
N & = -\left(  \frac{\partial \phi}{\partial \mu} \right)_{T,V} \\
 & = - \frac{\partial\mathcal{z}}{\partial \mu} \frac{\partial \phi}{\partial\mathcal{z}} \\
 & = - \beta\mathcal{z} \frac{\partial \phi}{\partial z}
\end{align}$$
We then have:
$$\begin{align}
\frac{\partial}{\partial\mathcal{z}} kT\sum_{\vec{k}_{j}}\left( \ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m} -\mu_{0}B\right) \right) \right) +\ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right) \right)\right) & = kT \sum_{\vec{k}_{j}} \left[\frac{\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right)}{1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right)}+ \frac{\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right)}{1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right)}\right]
\end{align}$$
Then we have:
$$\begin{align}
N & = \sum_{\vec{k}_{j}} \left[\frac{\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right)}{1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B \right) \right)}+ \frac{\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right)}{1+\mathcal{z}\exp\left( -\beta\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B \right) \right)}\right] \\
 & = \sum_{\vec{k}_{j}}\left[\frac{1}{\mathcal{z}^{-1}\exp(\beta(\epsilon_{\vec{k}_{j}}-\mu_{0}B))+1}+ \frac{1}{\mathcal{z}^{-1}\exp(\beta(\epsilon_{\vec{k}_{j}}+\mu_{0}B))+1}\right]
\end{align}$$
Now we replace the sum with an integral. We have:
$$\begin{align}
\sum_{\vec{k}_{j}} & \leadsto \frac{V}{(2\pi)^{3}}\int_{\mathbb{R}^{3}} d^{3}k\\
 & = \frac{V}{(2\pi)^{3}}\int_{0}^{\infty}  dk{4}\pi k^{2} \\
 & = \frac{V}{(2\pi)^{3}} \frac{2\pi m\sqrt{ 2m }}{\hbar^{3}}\int_{0}^{\infty}d\epsilon\epsilon^{1/2} \\
 & = \frac{Vm^{3/2} }{\sqrt{ 2 }\pi^{2}\hbar^{3} } \int d\epsilon\epsilon^{1/2}
\end{align}$$
Then we have:
$$\begin{align}
N  & \approx \frac{Vm^{3/2} }{\sqrt{ 2 }\pi^{2}\hbar^{3} } \int d\epsilon\epsilon^{1/2}\left[\frac{1}{\mathcal{z}^{-1}\exp(\beta(\epsilon-\mu_{0}B))+1}+ \frac{1}{\mathcal{z}^{-1}\exp(\beta(\epsilon+\mu_{0}B))+1}\right] \\
 & = \frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}}\int d\epsilon\epsilon^{1/2}\left[ \frac{1}{(\mathcal{z}e^{\beta \mu_{0}B})^{-1}\exp(\beta\epsilon)+1 }+ \frac{1}{(\mathcal{z}e^{-\beta \mu_{0}B})^{-1}\exp(\beta\epsilon)+1}\right] \\
 & = \frac{Vm^{3/2}(kT)^{3/2} }{\sqrt{ 2 }\pi^{2}\hbar^{3} } \frac{\sqrt{ \pi }}{2 } (f_{3/ 2}(\mathcal{z}e^{\beta \mu_{0}B})+f_{3/ 2 }(\mathcal{z}e^{-\beta \mu_{0}B})) \\
 & = \frac{V}{(2\pi \lambda)^{3}}(f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B})+f_{3 /2}(\mathcal{z}e^{-\beta \mu_{0}B}))
\end{align}$$
## (d).
We have:
$$\begin{align}
\langle M \rangle & = \frac{1}{Q}\sum_{\{ n_{j}^{+},n_{j}^{-} \}} \mu_{0}\left( \sum_{j}n_{j}^{+}-\sum_{j}n_{j}^{-} \right)\exp\left( -\beta \sum_{j}(\epsilon_{\vec{k}_{j}}-\mu_{0}B-\mu) -\beta \sum_{j}(\epsilon_{\vec{k}_{j}}+\mu_{0}B+\mu)\right) \\
 & = \frac{1}{Q}\sum_{\{ n_{j}^{+},n_{j}^{-} \}} \frac{\partial}{\partial(\beta B)}\exp\left( -\beta \sum_{j}(\epsilon_{\vec{k}_{j}}-\mu_{0}B-\mu) -\beta \sum_{j}(\epsilon_{\vec{k}_{j}}+\mu_{0}B+\mu)\right) \\
 & = \frac{\partial}{\partial(\beta B)}\ln Q
\end{align}$$
We can compute:
$$\begin{align}
\frac{\partial}{\partial(\beta B)}\ln Q & = \frac{\partial}{\partial(\beta B)}\sum_{\vec{k}_{j}}\left( \ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \epsilon_{\vec{k}_{j}} -\mu_{0}B\right) \right) \right) +\ln\left( 1+\mathcal{z}\exp\left( -\beta\left(  \epsilon_{\vec{k}_{j}}+\mu_{0}B \right) \right) \right)\right) \\
 & = \sum_{\vec{k}_{j}} \left[\frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu_{0}B)) }{1+ \mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu_{0}B))}+ \frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}+\mu_{0}B))}{1+\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}+\mu_{0}B))}\right]
\end{align}$$
Similarly, we can use integrals to approach the sum:
$$\begin{align}
\langle M \rangle  & \approx
\end{align}$$