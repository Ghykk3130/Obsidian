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
\frac{\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k}+\beta \mu \sum_{k}n_{k} \right)}{\prod_{j}(1+\mathcal{z}^{}e^{-\beta\epsilon_{j}})}=  \frac{\prod_{k}\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{\prod_{j}(1+\mathcal{z}^{}e^{-\beta\epsilon_{j}})}
\end{align}$$
## (b).
Know that the occupation number is:
$$\langle n_{j}\rangle= \frac{1}{1+\mathcal{z}^{-1}e^{\beta\epsilon_{j}}}$$
Then:
$$\mathcal{z}^{-1}e^{\beta\epsilon_{j}}= \frac{1-\langle n_{j}\rangle}{\langle n_{j}\rangle}\implies\mathcal{z}e^{-\beta\epsilon_{j}}= \frac{\langle n_{j}\rangle}{1-\langle n_{j}\rangle}$$
Then the probability is
$$\begin{align}
\frac{\prod_{k}\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{\prod_{j}\frac{1}{1-\langle n_{j}\rangle}}= \prod_{j,k}\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})(1-\langle n_{j}\rangle)
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
\frac{1}{1-\langle n_{k}\rangle}T \frac{\partial}{\partial T}\langle n_{k}\rangle & = (1+\mathcal{z}e^{-\beta\epsilon_{k}})T \mathcal{z}^{-1}\epsilon_{k}e^{\beta\epsilon_{k}} \frac{-k\beta^{2}}{(\mathcal{z}^{-1}e^{\beta\epsilon_{k}}+1)^{2}} \\
 & = \frac{-k\beta^{2}}{(\mathcal{z}^{-1}e^{\beta\epsilon_{k}}+1)} \epsilon_{k}T \\
 & = -\beta\epsilon_{k}\langle n_{k}\rangle
\end{align}$$
So we have:
$$\begin{align}
S=-k\sum_{k}(\ln(1-\langle n_{k}\rangle)-\beta\epsilon_{k}\langle n_{k}\rangle)
\end{align}$$
Note that here the index $k$ and the Boltzmann constant $k$ are not the same thing. To distinguish, we rewrite it as:
$$S=-k_{B}\sum_{k}(\ln(1-\langle n_{k}\rangle)-\beta\epsilon_{k}\langle n_{k}\rangle)$$



