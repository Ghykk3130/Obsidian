# 前置讨论

考虑一个unperturbed的方程$H_{0}\ket{0}=E_{0}\ket{0}$。若给予Hamiltonian一个微扰$\lambda V$, $\lambda$为小量，我们想知道1)本征能量怎么变 2)本征矢怎么变

# Non-degenerate perturbation

设$E_{0}$对应的特征子空间是一维的。
我们对$H_{0}+\lambda V$相应的本征矢，本征能作如下展开：
$$\left\{\begin{align}
\ket{\psi}  & =\ket{0} +\lambda \ket{1} +\lambda^{2}\ket{2} +\dots \\
E & =e_{0}+\lambda \Delta_{1}+\lambda^{2}\Delta_{2}+\dots
\end{align}\right.$$
于是得到方程$(H_{0}+\lambda V)(\ket{0}+\lambda \ket{1}+\lambda^{2}\ket{2}+\dots)=(E_{0}+\lambda \Delta_{1}+\lambda^{2}\Delta_{2}+\dots)(\ket{0}+\lambda \ket{1}+\lambda^{2}\ket{2}+\dots)$

比对系数得到：
$$\begin{align}
\lambda^{0}:H_{0}\ket{0}  & =E_{0}\ket{0} \ \dots \ 1) \\
\lambda^{1}:H_{0}\ket{1} +V\ket{0}  & =\Delta_{1}\ket{0} +E_{0}\ket{1} \ \dots \ 2)  \\
\lambda^{2}:V\ket{1} +H_{0}\ket{2}  & =\Delta_{1}\ket{1} +\Delta_{2}\ket{0} +E_{0}\ket{2} \ \dots \ 3) \\
\dots 
\end{align}$$
## 零阶
$\lambda^{0}$对应的方程不包含任何有用信息。
## 一阶
因为我们想获得$\Delta_{1}$，所以将$\lambda^{1}$对应方程左右两边左乘$\bra{0}$得到：$\bra{0}H_{0}\ket{1}+\bra{0}V\ket{0}=\Delta_{1}\bra{0}0\rangle+E_{0}\bra{0}1\rangle \implies E_{0}\bra{0}1\rangle+\bra{0}V\ket{0}=\Delta_{1}\bra{0}0\rangle+E_{0}\bra{0}1\rangle \implies \bra{0}V\ket{0}=\Delta_{1}\bra{0}0\rangle$
显然$\ket{0}$是事先归一化的。于是$\Delta_{1}=\bra{0}V\ket{0}$

### Caveat
但是这里好像有一个问题，就是我们要求$\ket{\psi}$是归一化的，但是它的“一部分”$\ket{0}$好像已经归一化了。$\bra{\psi}\psi\rangle=\bra{0}0\rangle+\lambda(\bra{1}0\rangle+\bra{0}1\rangle)+O(\lambda^{2})$ $\implies \bra{1}0\rangle+\bra{0}1\rangle=0$
接着我们就不知道能继续得到怎样的结论了。

于是我们作如下规定：注意到$(H_{0}+\lambda V)\ket{\psi}=E\ket{\psi}$不能确定 $\ket{\psi}$ 的phase。于是WLOG, choose the phase of $\ket{\psi}$ such that $\bra{0}\psi\rangle \in \mathbb{R}$ 
于是：$\bra{0}(\ket{0}+\lambda \ket{1}+\lambda^{2}\ket{2}+\dots)=1+\lambda \bra{0}1\rangle+\lambda^{2}\bra{0}2\rangle+\dots \in \mathbb{R} \implies \bra{0}1\rangle, \bra{0}2\rangle, \dots\in \mathbb{R}$

于是$\bra{1}0\rangle+\bra{0}1\rangle=0 \implies \bra{0}1\rangle=0$


我们还想获得本征矢的一阶correction $\ket{1}$。
>[!Idea]
>我们通过获得$\ket{1}$在$H_{0}$的本征基上的一套投影以获得$\ket{1}$。因为方程$H_{0}\ket{1}+V\ket{0}=\Delta_{1}\ket{0}+E_{0}\ket{1}$便于投影操作。但是这个方程不能获得关于$\ket{0}$空间中投影的信息。因此我们分1) $\ket{0}$空间中投影 2) 其他特征子空间中投影 两种情况考虑。

### Caveat
首先，$\bra{0}1\rangle=0\implies$$\ket{1}$在$E_{0}$的特征子空间没有投影。但是如果$E_{0}$的特征子空间是degenerate的话，我们就不能得到这个结论了。

考虑任意一个非$\ket{0}$的特征矢$\ket{\phi}$。对$3)$左右两边左乘$\bra{\phi}$，由特征矢的正交性得到：
$\bra{\phi}1\rangle=\frac{\bra{\phi}V\ket{0}}{E_{0}-E_{\phi}}$

于是$\ket{1}=\sum_{\phi\neq_{0} } \frac{\bra{\phi}V\ket{0}}{E_{0}-E_{\phi}}\ket{\phi}$

## 二阶

同样对$2)$，左右两边左乘$\bra{0}$得到$\Delta_{2}=\bra{0}V\ket{1}=\bra{0}V \sum_{\phi\neq_{0}} \frac{\bra{\phi}V\ket{0}}{E_{0}-E_{\phi}}\ket{\phi}=\sum_{\phi \neq_{0}} \frac{|\bra{\phi}V\ket{0}|^{2}}{E_{0}-E_{\phi}}$

接下来获得本征矢二阶correction $\ket{2}$。
同样地，先来考察在$\ket{0}$空间中的投影。
$\bra{\psi}\psi\rangle=(\bra{0}+\lambda \bra{1}+\lambda^{2}\bra{2}+\dots)(\ket{0}+\lambda \ket{1}+\lambda^{2}\ket{2}+\dots)=1 \implies \bra{\psi}\psi\rangle=\bra{0}0\rangle+\lambda(\bra{0}1\rangle+\bra{1}0\rangle)+\lambda^{2}(\bra{1}1\rangle+\bra{2}0\rangle+\bra{0}2\rangle) +O(\lambda^{3})=1$ $\implies \bra{1}1\rangle+\bra{2}0\rangle+\bra{0}2\rangle=0$
$\overset{\bra{2}0\rangle \in \mathbb{R}}{\implies} \bra{0}2\rangle= -\frac{1}{2}\bra{1}1\rangle$

接下来再对于$\ket{2}$作任意特征矢$\ket{\phi},\phi\neq_{0}$的投影即可。

>[! Proposition 1]
>For degenerate perturbation, 
>first order correction: $\Delta_{1}= \bra{0}V\ket{0}$, $\ket{1}=\sum_{\phi\neq 0} \frac{\bra{\phi}V\ket{0}}{E_{0}-E_{\phi}}\ket{\phi}$
>second order correction: $\Delta_{2}= \sum_{\phi\neq{0}} \frac{|\bra{\phi}V\ket{0}|^{2}}{E_{0}-E_{\phi}}$
>where $\ket{\phi}$ is an eigenstate of the unperturbed Hamiltonian $H_0$, $\ket{0}$ is the non-degenerate eigenstate of $H_{0}$ in study.

# Degenerate perturbation

无论是否是degenrate的，我们都可以将$E_{0}$特征子空间中的微扰后态矢作展开$\ket{\psi}=\ket{0}+\lambda \ket{1}+\dots$

于是$1),2),3)$依然都成立。不过问题是在non-degenerate perturbation中，我们显然有$\ket{0}=\text{unperturbed ket}$，但是在degenerate perturbation中，我们不能再显然地得到$\ket{0}$。我们仅仅知道$\ket{0}$是unperturbed kets的线性组合。

接下来试图获得$\Delta_{1}$。设$E_{0}$特征子空间的特征矢为$\ket{\phi^i}$。我们故技重施，对$2)$左右两边右乘$\bra{\phi^{i}}$得到：

$\bra{\phi^i}V\ket{0}=\Delta_{1}\bra{\phi^i}0\rangle \ \dots \ 4)$

看似不好处理，因为我们不知道$\ket{0}$。一个很自然的想法是将$\ket{0}$写成$\ket{\phi^i}$的线性组合来处理。于是对$4)$左手边插入完备性关系，再由orthogonality得到：

$\sum_{i^{'}}\bra{\phi^i}V\ket{\phi^{i^{'}}}\bra{\phi^{i^{'}}}0\rangle=\Delta_{1}\bra{\phi^i}0\rangle$

这是一个特征方程：$A\begin{pmatrix}\bra{\phi^1}0\rangle \\ \bra{\phi^2}0\rangle \\ . \\ . \\ .\end{pmatrix}=\Delta_{1}\begin{pmatrix}\bra{\phi^1}0\rangle \\ \bra{\phi^2}0\rangle \\ . \\ . \\ .\end{pmatrix}, \text{where }A_{ii^{'}}=\bra{\phi^i}V\ket{\phi^{i^{'}}}$
于是剩下的工作就是将$\bra{\phi^i}V\ket{\phi^{i^{'}}}$对角化。于是：
1) 有多少个特征值就有多少个first order energy correction
2) 有多少特征矢就有多少个$\ket{0}$

具体来说，若有一套基$\ket{\phi^i}$使得$\bra{\phi^i}V\ket{\phi^{i^{'}}}$是对角化的，那么也就是说再这套基下，矢量$\begin{pmatrix}1 \\ 0 \\ . \\ . \\ . \\ 0\end{pmatrix},\begin{pmatrix}0 \\ 1 \\ . \\ . \\ . \\ 0\end{pmatrix},\dots,\begin{pmatrix}0 \\ 0 \\ . \\ . \\ . \\ 1\end{pmatrix}$可使矩阵对角化。于是令$\begin{pmatrix}\bra{\phi^1}0\rangle \\ \bra{\phi^2}0\rangle  \\ . \\ . \\ .\end{pmatrix}$等于这些矢量，就可以得到$\ket{0}=\phi^1,\phi^2,\dots$

## Remark
若上述对角化不能使得所有特征子空间都是一维的，也就是说有可能几个$\ket{0}$对应相同的$\Delta_{1}$，以至于degeneracy没有完全去除，那么我们可以计算高阶微扰。



