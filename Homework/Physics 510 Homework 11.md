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
 & = \prod_{j} \sum_{n_{j}^{+}}\exp\left( -\beta n_{j}^{+}\left( \frac{\hbar^{2}k_{j}^{2}}{2m}-\mu_{0}B-\mu \right) \right)\prod_{j}\sum_{n_{j}^{-}}\exp\left( -\beta n_{j}^{-}\left(  \frac{\hbar^{2}k_{j}^{2}}{2m}+\mu_{0}B-\mu \right) \right) \\
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
 & = \frac{V}{\lambda^{3}}(f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B})+f_{3 /2}(\mathcal{z}e^{-\beta \mu_{0}B}))
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
 & = \sum_{\vec{k}_{j}} \left[\frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu_{0}B)) }{1+ \mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu_{0}B))}-\frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}+\mu_{0}B))}{1+\mathcal{z}\exp(-\beta(\epsilon_{\vec{k}_{j}}+\mu_{0}B))}\right]
\end{align}$$
Similarly, we can use integrals to approach the sum:
$$\begin{align}
\langle M \rangle  & \approx  \frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}}\int d\epsilon\epsilon^{1/2}\left[\frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon-\mu_{0}B)) }{1+ \mathcal{z}\exp(-\beta(\epsilon-\mu_{0}B))}- \frac{\mu_{0}\mathcal{z}\exp(-\beta(\epsilon+\mu_{0}B))}{1+\mathcal{z}\exp(-\beta(\epsilon+\mu_{0}B))}\right] \\
 & = \frac{Vm^{3/2} }{\sqrt{ 2 }\pi^{2}\hbar^{3}}\mu_{0} \frac{\sqrt{ \pi }}{2}(f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B})-f_{ 3 /2}(\mathcal{z}e^{-\beta \mu_{0}B})) \\
 & = \frac{V}{\lambda^{3}}\mu_{0}(f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B})-f_{ 3 /2}(\mathcal{z}e^{-\beta \mu_{0}B}))
\end{align}$$
## (e).
Know that:
$$\begin{align}
 & f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B}) \approx f_{3 /2}(\mathcal{z})+ \frac{\partial}{\partial B}f_{3 /2}(\mathcal{z}e^{\beta \mu_{0}B})B= f_{3 /2}(\mathcal{z})+ \beta \mu_{0} f_{1 /2 }(\mathcal{z})B \\
 & f_{3 /2}(\mathcal{z}e^{-\beta \mu_{0}B})\approx f_{3 /2}(\mathcal{z})+ \frac{\partial}{\partial B}f_{3 / 2}(\mathcal{z}e^{-\beta \mu_{0}B})B= f_{3 /2}(\mathcal{z})- \beta \mu_{0} f_{1 /2}(\mathcal{z})B  
\end{align}$$
Then we must have:
$$\begin{align}
N & \approx \frac{V}{\lambda^{3}}(2f_{3 /2}(\mathcal{z})+\beta \mu_{0}f_{1 /2}(\mathcal{z})-\beta \mu_{0}f_{1 /2}(\mathcal{z})) \\
 & = 2 \frac{V}{\lambda^{3}}f_{3 /2}(\mathcal{z})
\end{align}$$
Similarly:
$$\begin{align}
M & \approx \frac{V}{\lambda^{3}} \mu_{0}(2\beta \mu_{0}f_{1 /2}(\mathcal{z})B) \\
 & = 2 \frac{V}{\lambda^{3}}\mu_{0}^{2}\beta B f_{1 /2}(\mathcal{z})
\end{align}$$
Then:
$$\begin{align}
\chi  & \approx 2 \frac{V}{\lambda^{3}}\mu_{0}^{2}\beta f_{1 /2}(\mathcal{z})
\end{align}$$
Know that in Sommerfeld expansion, we have:
$$f_{1 /2}(\mathcal{z})\approx \frac{(\beta\epsilon_{F})^{1/2}}{\Gamma\left( \frac{3}{2} \right)}\text{ as }T\rightarrow 0$$
Then:
$$\chi= \frac{(\beta \epsilon_{F})^{1/2}}{\Gamma\left( \frac{3}{2} \right)} 2 \frac{V}{\lambda^{3}}\mu_{0}^{2}\beta= \frac{4}{\sqrt{ \pi }} \frac{V}{\lambda^{3}}\beta^{3/2}\mu_{0}^{2}\epsilon_{F}^{1/2}$$
We also observe that:
$$f_{3 /2}(\mathcal{z})\approx \frac{(\beta\epsilon_{F})^{3/2}}{\Gamma\left( \frac{5}{2} \right)}\text{ as }T\rightarrow 0$$
So:
$$N = \frac{4}{3\sqrt{ \pi }}\epsilon_{F}^{3/2}\beta^{3/2}2 \frac{V}{\lambda^{3}}$$
We can write $\chi$ in terms of $N$:
$$\begin{align}
\chi= \frac{3N}{2} \frac{\mu_{0}^{2}}{\epsilon_{F}}
\end{align}$$
# 3.
We can calculate the grand partition function of ideal Bose gas:
$$\begin{align}
Q_{B}  & = \sum_{\{ n_{j} \}}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{\vec{k}_{j}}+\beta \mu \sum_{j}n_{j} \right) \\
& = \sum_{\{ n_{j} \}}\exp\left( -\beta \sum_{j}n_{j}(\epsilon_{\vec{k}_{j}}-\mu) \right) \\
 & = \prod_{j}\sum_{n_{j}} \exp(-\beta n_{j}(\epsilon_{\vec{k}_{j}}-\mu)) \\
 & = \prod_{j} \frac{1}{1-\exp(-\beta (\epsilon_{\vec{k}_{j}}-\mu))}
\end{align}$$
Then the grand potential of ideal Bose gas is：
$$\begin{align}
\phi_{B} & =- \frac{1}{\beta}\ln Q_{B} \\
 & = \frac{1}{\beta}\sum_{j}\ln(1-\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu))) \\
\end{align}$$
If we approximate the sum with an integral:
$$\begin{align}
\phi_{B} & =\frac{1}{\beta}\sum_{j}\ln(1-\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu))) \\
 & \approx \frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}}kT \int d\epsilon \epsilon^{1/2}\ln(1-\mathcal{z}e^{-\beta\epsilon}) \\
\end{align} $$
We compute:
$$\begin{align}
\int_{0}^{\infty}d\epsilon \epsilon^{1/2}\ln(1-\mathcal{z}e^{-\beta\epsilon}) & = -\int d\epsilon \epsilon^{1/2} \sum_{k=0}^{\infty} \frac{1}{k}(\mathcal{z}e^{-\beta\epsilon})^k \\
 & = -\sum_{k} \frac{1}{k} \mathcal{z}^k \int d\epsilon \epsilon^{1/2} e^{-k\beta\epsilon} \\
 & = -\sum_{k} \frac{1}{k}\mathcal{z}^k  \left(  \frac{1}{k\beta} \right)^{3/2}\Gamma\left( \frac{3}{2} \right) \\
 & = -g_{5 /2 }(\mathcal{z}) \beta^{-3/2}\Gamma\left( \frac{3}{2} \right)
\end{align}$$
Then
$$\begin{align}
\phi_{B} & \approx -\frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}} \beta^{-5/2}\Gamma\left( \frac{3}{2} \right)g_{5 /2}(\mathcal{z}) \\
 & = -\frac{V}{\lambda^{3}}kT g_{5 /2}(\mathcal{z})
\end{align}$$
Then the pressure is given by:
$$p_{b}=- \frac{\partial \phi_{B}}{\partial V}= \frac{kT}{\lambda^{3}}g_{5 /2}(\mathcal{z})$$
Similarly, the grand partition function of ideal Fermi gas is:
$$\begin{align}
Q_{F}  & = \prod_{j}\sum_{n_{j}}\exp(-\beta n_{j}(\epsilon_{\vec{k}_{j}}-\mu)) \\
 & = \prod_{j}(1+\exp(-\beta(\epsilon_{\vec{k}_{j}}-\mu)))
\end{align}$$
The grand potential of ideal Fermi gas is:
$$\phi_{F}= -\frac{1}{\beta}\sum_{j}\ln(1+\exp(-\beta(\epsilon_{\vec{k}}-\mu)))$$
Similarly, if we approximate the sum with an integral, we have:
$$\phi_{F}=- \frac{V}{\lambda^{3}}kT f_{5 /2}(\mathcal{z})$$
Then we find the pressure:
$$p_{f}= \frac{kT}{\lambda^{3}}f_{5 /2}(\mathcal{z})$$
Then for ideal classical gas, we can easily obtain:
$$p_{c}= \frac{NkT}{V}=nkT$$
We observe that for the two quantum gases, there is an constraint their fugacity:
$$\begin{align}
 & N= \sum_{\vec{k}_{j}} \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{\vec{k}_{j}}}+1}\approx \frac{V}{\lambda^{3}} f_{3 /2}(\mathcal{z})\text{ for fermions} \\
 & N= \sum_{\vec{k}_{j}} \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{\vec{k}_{j}}}-1}\approx \frac{V}{\lambda^{3}} g_{3 /2}(\mathcal{z})\text{ for bosons}
\end{align}$$
Then it's easy to compute that:
$$\begin{align}
 & \frac{p_{b}}{p_{c}}= \frac{g_{5 /2}(\mathcal{z})}{n\lambda^{3} }= \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})} \\
 & \frac{p_{f}}{p_{c}}= \frac{f_{5 /2}(\mathcal{z})}{n\lambda^{3}}= \frac{f_{5 /2}(\mathcal{z})}{f_{3 /2 }(\mathcal{z})} 
\end{align}$$
The fugacity can be solved using the constraint above in terms of the temperature, so that the plot versus the temperature can be made.
## (i).
![[Pasted image 20251201014119.png|center|500]]
## (ii).
![[Pasted image 20251201014145.png|center|500]]

# 4.
We have that:
$$\begin{align}
 & n_{1}(r)=n_{0}\exp(-\beta e\phi(r)) \\
 & n_{2}(r)=n_{0}\exp(\beta e\phi(r))
\end{align}$$
Then:
$$\begin{align}
 & \nabla^{2}\phi=- \frac{\rho}{\epsilon} \\
\implies & \nabla^{2}\phi=- \frac{1}{\epsilon}(en_{1}-en_{2}) \\
\implies & \nabla^{2}\phi= - \frac{n_{0}e}{\epsilon}(\exp(-\beta e\phi)-\exp(\beta e\phi)) \\
 \implies & \nabla^{2}\phi= \frac{n_{0}e}{\epsilon} 2\sinh(\beta e\phi)
\end{align}$$
Under weak field, we must have that:
$$\sinh(\beta e\phi)\approx \beta e\phi$$
Then we have:
$$\begin{align}
 & \nabla^{2}\phi= 2 \frac{n_{0}e^{2}\beta}{\epsilon}\phi \\
 & \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r} \right)\phi= \frac{2n_{0}e^{2}\beta}{\epsilon}\phi,  \text{ for }r>a
\end{align}$$
It's easy to solve that:
$$\phi=\frac{\phi_{0}}{r}  \exp\left( -\kappa r \right),\ \kappa= \sqrt{ \frac{2n_{0}e^{2}\beta}{\epsilon} }$$
We know that for $r\leq a$, we have that:
$$\begin{align}
 & \nabla^{2}\phi= - \frac{1}{\epsilon} \frac{Q}{\frac{4}{3}\pi a^{3}} \\
\implies & \phi=- \frac{Q}{8\pi\epsilon a^{3}}r^{2}+C
\end{align}$$
Know that the charge is uniformly distributed, then the boundary condition at the surface of the particle is:
$$\left.\nabla \phi\right|^{\text{out}}_{\text{in}}=0$$
Also since the field is finite near the boundary, we must have:
$$\phi|_{ \text{in}}=\phi|_{\text{out}}\tag{*}$$
Then we obtain:
$$\begin{align}
 & \frac{\phi_{0}}{a^{2}}\exp(-\kappa a)+ \frac{\phi_{0}}{a}\kappa \exp(-\kappa a)= \frac{Q}{4\pi\epsilon a^{2}} \\
\implies & \phi_{0}= \frac{Q}{4\pi\epsilon}\exp(\kappa a) \frac{1}{1+\kappa a}
\end{align}$$
Note that the condition $(*)$ is not needed, because we don't need to know the potential inside the particle to solve the problem.

Then we have:
$$\phi(r)= \frac{Q}{4\pi\epsilon r} \frac{1}{1+\kappa a} \exp(\kappa(a-r))\text{ where }\kappa=\sqrt{ \frac{2n_{0}e^{2}\beta}{\epsilon} }$$
So:
$$\begin{align}
 & n_{1}(r)= n_{0}\exp(-\beta e\phi(r)) \\
 & n_{2}(r)=n_{0}\exp(\beta e\phi(r))
\end{align}$$
In the weak field limit, I can further approximate:
$$\begin{align}
 & n_{1}(r)\approx n_{0}(1-\beta e\phi(r)) \\
 & n_{2}(r)\approx n_{0}(1+\beta e\phi(r))
\end{align}$$
with the $\phi(r)$ as solved above.

