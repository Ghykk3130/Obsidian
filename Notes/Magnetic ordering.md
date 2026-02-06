# 1. Brillouin函数与paramagnet

考虑磁场中的spin-j粒子。spin之间没有coupling，alignment完全由磁场操纵，为paramagnet。

令磁场平行于z-axis，为quantization axis。我们写出Hamiltonian：
$$H=-\mu_{B}g\mathbf{J}\cdot \mathbf{B}$$
我们在正则系综计算该粒子构成晶体的平均magnetization。正则系综有density operator：
$$\rho= \frac{e^{-\beta H}}{Z}\ket{n} \bra{n} $$
其中$\ket{n}$是Hamiltonian本征态。那么此处显然：
$$\rho= \frac{1}{Z}\exp\left( \beta \mu_{B}gBm_{j} \right)\ket{m_{j}} \bra{m_{j}} $$
容易得到：
$$\begin{align}
  \langle m_{j} \rangle & = \frac{1}{Z}\sum_{m_{j}=-j}^j m_{j}\exp(\beta \mu_{B}Bgm_{j}) \\
 & =  \frac{\partial}{\partial(\beta \mu_{B}Bg)}\ln Z
\end{align}$$
其中$g$为Lande g factor, 是$j$的函数。令粒子数体密度为$n$。则：
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
![[Pasted image 20260205210820.png|center|400]]
## Ex:

$B_{1 /2}(y)= \tanh(y)$ reduces to spin-1/2 systems.


## Ex:

高温低场下$y\ll 1$。我们展开Brillouin函数。注意到对于$\coth$：
$$\begin{align}
\coth x & = \frac{\cosh x}{\sinh x} \\
 & = \frac{1+ \frac{1}{2}x^{2}+ \frac{1}{4!}x^4+\dots }{x+ \frac{1}{3!}x^{3}+ \frac{1}{5!}x^{5}+\dots } \\
 & = \frac{1+ \frac{1}{2}x^{2}+ \frac{1}{4!}x^{4}+\dots}{x\left( 1+ \frac{1}{3!}x^{2}+ \frac{1}{5!}x^{4}+\dots \right)} \\
 & \approx \frac{1}{x}\left( 1+\frac{1}{2}x^{2}+ \frac{1}{4!}x^{4}+\dots \right)\left[ 1-\left(  \frac{1}{3!}x^{2}+ \frac{1}{5!}x^{4}+\dots \right)+\left(  \frac{1}{3!}x^{2}+ \frac{1}{5!}x^{4}+\dots \right)^{2}+\dots \right] \\
 & \approx \frac{1}{x}\left( 1+ \frac{1}{3 }x^{2} \right)
\end{align}$$
那么：
$$B_{j}(y)\approx \frac{j+1}{3j}y$$
那么：
$$M\approx \frac{1}{3}n(\mu_{B}g)^{2}B\beta j(j+1)$$
于是得到classical Curie's law：
$$\chi = \frac{\partial M}{\partial B}= \frac{1}{3}n(\mu_{B}g)^{2}\beta j(j+1) \propto \frac{1}{T}$$
## Ex:

低温高场下，$B_{j} \approx 1$。那么$M \approx M_{s}$ saturates。

# 2. FM相

假设无orbital angular momentum。选择z-axis为quantization axis，令$\mathbf{B} \parallel z\text{-axis}$。考虑Hamiltonian：
$$H=-\sum_{i,j}J_{ij}\mathbf{S}_{i}\cdot \mathbf{S}_{j}-\mu_{B}g\sum_{i}\mathbf{B}\cdot \mathbf{S}_{i}$$
在铁磁中，$J_{ij}>0$。为了引入平均场，我们作：
$$\begin{align}
H & =-\sum_{i}\mu_{B}g\mathbf{S}_{i}\cdot\left(  \frac{1}{\mu_{B}g}\sum_{j}J_{ij}\mathbf{S}_{j}+B \right)
\end{align}$$
令平均场为：
$$\mathbf{B}_{mf}= \left\langle\frac{1}{\mu_{B}g}\sum_{j}J_{ij}\mathbf{S}_{j}\right\rangle$$
显然，$\mathbf{B}_{mf}\propto \mathbf{M}$。我们令比例常数为$\lambda$。显然$J_{ij}>0 \implies \lambda> 0$。那么我们有磁场$\mathbf{B}+\mathbf{B}_{mf}$。Hamiltonian写为：
$$H=-\mu_{B}g\sum_{i}\mathbf{S}_{i}\cdot(\mathbf{B}+\lambda \mathbf{M})$$
根据对称性，假设$\mathbf{B}_{mf}=\lambda \mathbf{M}\parallel \mathbf{B}$。于是，我们解：
$$\begin{align}
 & M=M_{s}B_{j}(y),\ y= \beta\mu_{B}(B+\lambda {M})j
\end{align}$$
我们将$M$写为$y$的函数：
$$M=M_{s}B_{j}(y),\ M= \frac{y}{\lambda\beta g\mu_{B}j}- \frac{B}{\lambda}$$
有graphical solution：
![[Drawing 2026-02-05 22.53.26.excalidraw|center|400]]
## Ex:

显然，在零场时，直线过原点。改变温度，就是改变斜率。有从三个交点到一个交点的相变。当然三角点时计算自由能只有非零磁化稳定。
## Ex:

显然在有磁场时，低温下存在两个交点。容易证明$M>0$稳定。计算magnetizaiton，即$\frac{\partial M}{\partial B}$。移动$B$，就是移动y-intercept，但这时$M$已经不怎么变化，$\chi$为零。

## 2.1 零场解

零场时，phase transition发生在两曲线相切时。从一个交点变为三个交点。高温条件下，$B_{j}(y)\approx \frac{j+1}{3j}y$。且$\frac{B}{\lambda}\approx 0$。令斜率相等得到：
$$\begin{align}
 & \frac{j+1}{3j}= \frac{1}{\lambda\beta g \mu_{B}j}\implies T_{C}= \frac{j+1}{3k}M_{s}\lambda g \mu_{B}
\end{align}$$
称为Curie温度。
![[Pasted image 20260205221007.png|center|400]]

>[!Note] Definition 2.1.1
>Define the order of phase transition as the order of derivatives of $F$ that is discontinous.

因为$dF=-SdT-pdV-mdB$。所以$M \propto \frac{\partial F}{\partial B}$。而$M$的导数在Curie温度不连续，所以是second-ordre phase transition。
## 2.2 低场解

>[!Success] Proposition 2.2.1 (Curie-Weiss law)
Under high temperature, $\chi \propto \frac{1}{T-T_{C}}$
## Proof.

高温下，可作近似：
$$B_{j}(y)\approx \frac{j+1}{3j}y$$
于是：
$$\begin{align}
 M & = M_{s}B_{j}(y) \\
 & \approx M_{s} \frac{j+1}{3j}y \\
 & = M_{s} \frac{j+1}{3j} \cdot \beta g\mu_{B}(B+\lambda M)j \\
 & = M_{s} \frac{1}{3} \beta g\mu_{B}(B+\lambda M) \frac{3kT_{C}}{M_{s}\lambda g\mu_{B}} \\
 & = \frac{T_{C}}{T\lambda}(B+\lambda M) \\
\end{align}$$
解得：
$$M= \frac{T_{C}}{T-T_{C}} \frac{B}{\lambda}$$
于是：
$$\chi= \frac{T_{C}}{T-T_{C}} \frac{1}{\lambda}\propto \frac{1}{T-T_{C}}$$
>[!Right]
>$\blacksquare$


