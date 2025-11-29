# 1.
## (a).
Know that the probability of finding a state in $(n_{1},n_{2},\dots)$ is given by:
$$\frac{\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k} +\beta \mu \sum_{k}n_{k}\right)}{G}$$
The grand partition function is given by:
$$\begin{align}
G & = \sum_{\{ n_{k} \}}\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k}+\beta \mu \sum_{k}n_{k} \right) \\
 & = \left(\sum_{n_{1}}\exp(-\beta n_{1}\epsilon_{1}+\beta \mu n_{1})\right)\left(\sum_{n_{2}}\exp(-\beta n_{2}\epsilon_{2}+\beta \mu n_{2})\right)\dots \\
 & = \left(1+\mathcal{z}^{}e^{-\beta\epsilon_{1}} \right)(1+\mathcal{z}^{}e^{-\beta\epsilon_{2}})\dots \\
 & = \prod_{k}(1+\mathcal{z}^{}e^{-\beta\epsilon_{k}})
\end{align}$$
Therefore, the probability is:
$$\begin{align}
\frac{\exp\left( -\beta \sum_{k}n_{k}\epsilon_{k}+\beta \mu \sum_{k}n_{k} \right)}{\prod_{k}(1+\mathcal{z}^{}e^{-\beta\epsilon_{k}})}= \prod_{k} \frac{\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{1+\mathcal{z}^{}e^{-\beta\epsilon_{k}}}
\end{align}$$
where $n_{k}=0\text{ or }1,\forall k$.
## (b).
Know that the occupation number is:
$$\langle n_{k}\rangle= \frac{1}{1+\mathcal{z}^{-1}e^{\beta\epsilon_{k}}}$$
Then:
$$\mathcal{z}^{-1}e^{\beta\epsilon_{k}}= \frac{1-\langle n_{k}\rangle}{\langle n_{k}\rangle}\implies\mathcal{z}e^{-\beta\epsilon_{k}}= \frac{\langle n_{k}\rangle}{1-\langle n_{k}\rangle}$$
Then the probability is
$$\begin{align}
\prod_{k} \frac{\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})}{\frac{1}{1-\langle n_{k}\rangle}}= \prod_{k}\exp(-\beta n_{k}\epsilon_{k}+\beta \mu n_{k})(1-\langle n_{k}\rangle)
\end{align}$$
## (c).
 
