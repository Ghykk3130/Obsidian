# Occupation number

考虑任意数量的boson构成的系统。（下面的推导没有依赖boson数量固定的假设！所以也能适用于光子。）计算某个能级$\epsilon_{k}$上的平均粒子数$\langle n_{k}\rangle$。将整个系统当做巨正则系综，则：
$$\begin{align}
\langle n_{k}\rangle & = \frac{1}{Q} \sum_{\{ n_{j} \}}n_{k}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)
\end{align}$$
约掉$j\neq k$的部分得到：
$$\begin{align}
\langle n_{k}\rangle & = \frac{\sum_{\{ n_{j} \}}n_{k}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)}{\sum_{\{ n_{j} \}}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)} \\
 & = \frac{\sum_{n_{k}}n_{k}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})}{\sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})} \\
 & = \frac{\partial}{\partial \alpha}\ln\left( \sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k}) \right)
\end{align}$$
容易得到：
$$\sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})= \frac{1}{1-\exp(-\beta\epsilon_{k}+\alpha)}$$
所以：
$$\langle n_{k}\rangle= \frac{1}{\exp(\beta\epsilon_{k}-\alpha)-1}$$
定义fugacity $\mathcal{z}=e^{\alpha}=e^{\beta \mu}$，则：
$$\langle n_{k}\rangle= \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon_{k}}-1}$$

