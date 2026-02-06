# 1. Brillouin函数

考虑磁场中的spin-j粒子。我们在正则系综计算该粒子构成晶体的平均magnetization。令$m_{j}$为磁量子数，容易得到：
$$\begin{align}
  \langle m_{j} \rangle & = \frac{1}{Z}\sum_{m_{j}=-j}^j m_{j}\exp(\beta \mu_{B}Bgm_{j}) \\
 & =  \frac{\partial}{\partial(\beta \mu_{B}Bg)}\ln Z
\end{align}$$
令粒子数体密度为$n$。则：
$$M=n\mu_{B}g\langle m_{j}\rangle=n \frac{\partial}{\partial (\beta B)}\ln Z$$
我们容易计算：
$$\begin{align} Z & = \sum_{m_{j}}\exp(\beta \mu_{B}gBm_{j}) \\
 & = \frac{\exp(-\beta \mu_{B}Bj)}{1-\exp(\beta \mu_{B}gB)}- \frac{\exp(\beta \mu_{B}gB(j+1))}{1-\exp(\beta \mu_{B}gB)} \\
 & = \frac{\exp\left( \beta \mu_{B}gB \frac{1}{2} \right)\left( \exp\left( -\beta \mu_{B}gB\left( j+ \frac{1}{2} \right) \right)-\exp\left( \beta \mu_{B}gB\left( j+ \frac{1}{2} \right) \right) \right)}{\exp\left( \beta \mu_{B}gB \frac{1}{2} \right)\left( \exp\left( -\beta \mu_{B}gB \frac{1}{2} \right)-\exp\left( \beta \mu_{B}gB \frac{1}{2} \right) \right) } \\
 & = \frac{\sinh\left( \beta \mu_{B}gB\left( j+ \frac{1}{2} \right) \right)}{\sinh\left( \beta \mu_{B}B \frac{1}{2} \right)}
\end{align}$$
那么：
$$\begin{align}
M & = n\mu_{B}g j\left[  \frac{2j+1}{2j}\coth\left( \beta \mu_{B} gBj+ \frac{\beta \mu_{B}gB}{2} \right) - \frac{1}{2j}\coth\left(  \frac{\beta \mu_{B}gB}{2} \right)\right]
\end{align}$$
令$y= \beta \mu_{B}gBj,\ M_{s}=n\mu_{B}gj$，我们有：
$$M=M_{j}\left[ \frac{2j+1}{2j}\coth\left( \frac{2j+1}{2j}y \right)- \frac{1}{2j}\coth\left( \frac{y}{2j} \right) \right]$$
定义：

>[!Note] Definition 1.1
>Define the Brillouin function:
>$$B_{j}(y)= \frac{2j+1}{2j}\coth\left( \frac{2j+1}{2j}y \right)- \frac{1}{2j}\coth\left( \frac{y}{2j} \right)$$

则magnetization可以写为：
$$M=M_{s}B_{j}(y)$$
## Ex:

$B_{1 /2}(y)= \tanh(y)$ reduces to spin-1/2 systems.



