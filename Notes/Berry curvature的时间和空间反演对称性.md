
# 1. Bloch态的时间和空间反演

若一个系统的各个可观测量满足如下关系：
$$\pi ^{\dagger} \mathbf{p}\pi=-\mathbf{p},\ \pi ^{\dagger}\mathbf{J}\pi=\mathbf{J},\ \pi ^{\dagger}\mathbf{x}\pi=-\mathbf{x},\dots$$
则我们称系统具有空间反演对称性。这表示，系统在$\{ \ket{\psi} \}$和$\{ \pi \ket{\psi} \}$下的各个可观测量平均值符合一个具有空间反演对称性的经典系统的相应规律。类似地，若可观测量满足如下关系：
$$\Theta \mathbf{p} \Theta ^{-1}=-\mathbf{p},\ \Theta \mathbf{J}\Theta ^{-1}=-\mathbf{J},\ \Theta \mathbf{x}\Theta ^{-1}=\mathbf{x},\dots$$
则称系统具有时间反演对称性。

>[!Quote] 判断一个晶体对称性的方式
>上面说的仅仅是定义。在实际的晶体中，我们将晶体看作是$\Lambda$，以及附着在$\Lambda$上每个点的物理量，例如$\mathbf{M}$。实际上构成$\Lambda$本身的坐标也是物理量中的一种。所以晶体可以抽象地看待成$\{ (A_{i},B_{i},\dots) \}$。其中，$i$为晶格点的指标，$A,B,\dots$为物理量。例如$\{ (\mathbf{R}_{i},\mathbf{M}_{i},\dots) \}$。
>
>我们朴素地将晶体施加经典的变换，例如考虑$\{ \pi(A_{i},B_{i},\dots) \}$。我们只需要看这个（无序）集合和原来集合是否相等即可。若相等，即有空间反演对称性。

对于一个Bloch态$e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}$，若系统具有时间反演对称性，我们想知道$\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}$是否还具有相同的波矢$\mathbf{k}$。为此，我们先证明如下命题：

>[!Success] Proposition 1
>$[T_{\mathbf{R}},\Theta]=0$
## Proof.

我们知道$T_{\mathbf{R}}=e^{- \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R}}$。它可以泰勒展开，我们只需要研究泰勒展开的每一项和$\Theta$如何作用即可。我们有：
$$\begin{align}
\Theta \left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right) \Theta ^{-1} & = \Theta \left( - \frac{i}{\hbar} \right)\Theta ^{-1} \Theta \mathbf{p}\Theta ^{-1} \cdot \mathbf{R} \\
 & = \frac{i}{\hbar}\Theta \Theta ^{-1}(-\mathbf{p})\cdot \mathbf{R} \\
 & = - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R}
\end{align}$$
此处$\Theta \mathbf{p}\Theta ^{-1}=-\mathbf{p}$要求系统具有时间反演对称性。

>[!Warning]
>注意千万不要把$i$直接提到$\Theta$外面。$\Theta$是反线性算符！

所以$\Theta T_{\mathbf{R}}\Theta ^{-1}=T_{\mathbf{R}}$。
>[!Right]
>$\blacksquare$

于是我们检测时间反演后的Bloch态的特征值：
$$\begin{align}
T_{\mathbf{R}}\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} & =  \Theta T_{\mathbf{R}}e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}  \\
 & = \Theta e^{i\mathbf{k}\cdot \mathbf{R}}e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}  \\
 & = e^{-i\mathbf{k}\cdot \mathbf{R}}\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} 
\end{align}$$
所以本征值变为$e^{-i\mathbf{k}\cdot \mathbf{R}}$。这代表波矢变成了$-\mathbf{k}$。

接下来研究$\Theta \ket{u_{\mathbf{k}}}$是什么。同理：
$$\Theta(i\mathbf{k}\cdot \mathbf{x})\Theta ^{-1}=\Theta i\Theta ^{-1}\mathbf{k}\cdot \Theta \mathbf{x}\Theta ^{-1}=-i\mathbf{k}\cdot \mathbf{x}$$
所以：
$$\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} =e^{-i\mathbf{k}\cdot \mathbf{x} }\Theta\ket{u_{\mathbf{k}}} $$
另一方面，我们刚刚证明了$\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}=e^{-\mathbf{k}\cdot \mathbf{x}}\ket{u_{-\mathbf{k}}}$。所以：
$$\Theta \ket{u_{\mathbf{k}}} =\ket{u_{-\mathbf{k}}} $$


若系统具有空间反演对称性，同理我们证明下面命题：

>[!Success] Proposition 2
>$\pi ^{\dagger}T_{\mathbf{R}}\pi=T_{-\mathbf{R}}$
## Proof.

显然：
$$\pi ^{\dagger}\mathbf{p}\pi=-\mathbf{p}\implies \pi ^{\dagger}T_{\mathbf{R}}\pi=\pi ^{\dagger}\exp\left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)\pi=\exp\left( \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)=T_{-\mathbf{R}}$$
其中$\pi ^{\dagger}\mathbf{p}\pi=-\mathbf{p}$要求系统具有空间反演对称性。
>[!Right]
>$\blacksquare$

那么：
$$\begin{align}
T_{\mathbf{R}}\pi e^{i\mathbf{k}\cdot \mathbf{R}}\ket{u_{\mathbf{k}}}  & = \pi T_{-\mathbf{R}}e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}  \\
  & = e^{-i\mathbf{k}\cdot \mathbf{R}}\pi e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} 
\end{align}$$
所以波矢同样也变为$-\mathbf{k}$。

要研究$\pi \ket{u_{\mathbf{k}}}$，同理：
$$\pi e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} =\pi e^{i\mathbf{k}\cdot \mathbf{x}}\pi ^{\dagger}\pi \ket{u_{\mathbf{k}}} =e^{-i\mathbf{k}\cdot \mathbf{x}}\pi \ket{u_{\mathbf{k}}} $$
对比$\pi e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}=e^{-i\mathbf{k}\cdot \mathbf{x}}\ket{u_{-\mathbf{k}}}$，我们得到：
$$\pi \ket{u_{\mathbf{k}}} =\ket{u_{-\mathbf{k}}} $$
# 2. Berry curvature的时间和空间反演对称性

若系统具有时间反演对称性，则：
$$\boldsymbol{\Omega}(\mathbf{k})=i \bra{ \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}} \times \ket{ \frac{\partial \mathbf{}}{\partial \mathbf{k}}u_{\mathbf{k}}}$$
而：
$$\begin{align}
\boldsymbol{\Omega}(-\mathbf{k}) & = i\bra{ \frac{\partial}{\partial \mathbf{k}}u_{-\mathbf{k}}} \times \ket{ \frac{\partial}{\partial \mathbf{k}}u_{-\mathbf{k}}}  \\
 & = i \bra{ \Theta\frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}} \times  \ket{ \Theta \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}}  \\
 & =i \mathbf{e}_{i}\mathbf{e}_{j} \bra{ \Theta \frac{\partial}{\partial k_{i}}u_{\mathbf{k}}} \Theta \frac{\partial}{\partial k_{j}}u_{\mathbf{k}}\rangle- \text{c.c.} \\
 & = i \mathbf{e}_{i}\mathbf{e}_{j} \bra{ \frac{\partial}{\partial k_{j}}u_{\mathbf{k}}}  \frac{\partial}{\partial k_{i}}u_{\mathbf{k}}\rangle-\text{c.c.} \\
 & = -\boldsymbol{\Omega}(\mathbf{k})  
\end{align}$$
>[!Quote] 为什么$\ket{ \frac{\partial}{\partial \mathbf{k}}\Theta u_{\mathbf{k}}}=\ket{ \Theta \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}}$？
>回到定义。因为$\delta \mathbf{k}\in \mathbb{R}^{3}$我们有：
>$$\begin{align}
 & \frac{1}{\delta k_{j}}(\ket{\Theta u_{\mathbf{k}+\delta \mathbf{k}}} - \ket{\Theta u_{\mathbf{k}}} )= \Theta \frac{1}{\delta k_{j}}(\ket{u_{\mathbf{k}+\delta \mathbf{k}}} -\ket{u_{\mathbf{k}}} )
\end{align}$$
>两边取极限，将右手边极限拿进$\Theta$即可。

若系统具有空间反演对称性，则：
$$\begin{align}
\boldsymbol{\Omega}(-\mathbf{k}) & = i\bra{ \frac{\partial}{\partial \mathbf{k}}u_{-\mathbf{k}}} \times \ket{ \frac{\partial}{\partial \mathbf{k}}u_{-\mathbf{k}}}  \\
 & = i \bra{ \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}} \pi ^{\dagger}\times \pi \ket{ \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}}  \\
 & = i \bra{ \frac{\partial \mathbf{}}{\partial \mathbf{k}}u_{\mathbf{k}}}\times \ket{ \frac{\partial}{\partial \mathbf{k}}u_{\mathbf{k}}} =\boldsymbol{\Omega}(\mathbf{k}) 
\end{align}$$

$$\text{Broken symmetry}\implies C\neq 0$$