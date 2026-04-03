
对于一个Bloch态$e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}$，我们想知道$\Theta e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}$是否还具有相同的波矢$\mathbf{k}$。为此，我们先证明如下命题：

>[!Success] Proposition 1
>$[T_{\mathbf{R}},\Theta]=0$
## Proof.

我们知道$T_{\mathbf{R}}=e^{- \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R}}$。它可以泰勒展开，我们只需要研究泰勒展开的每一项和$\Theta$如何作用即可。我们有：
$$\begin{align}
\Theta \left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right) \Theta ^{-1} & = \Theta \left( - \frac{i}{\hbar} \right)\Theta ^{-1} \Theta \mathbf{p}\Theta ^{-1} \cdot \mathbf{R} \\
 & = \frac{i}{\hbar}\Theta \Theta ^{-1}(-\mathbf{p})\cdot \mathbf{R} \\
 & = - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R}
\end{align}$$
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

对于空间反演，同理我们证明下面命题：

>[!Success] Proposition 2
>$\pi ^{\dagger}T_{\mathbf{R}}\pi=T_{-\mathbf{R}}$
## Proof.

显然：
$$\pi ^{\dagger}\mathbf{p}\pi=-\mathbf{p}\implies \pi ^{\dagger}T_{\mathbf{R}}\pi=\pi ^{\dagger}\exp\left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)\pi=\exp\left( \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)=T_{-\mathbf{R}}$$
>[!Right]
>$\blacksquare$

那么：
$$\begin{align}
T_{\mathbf{R}}\pi e^{i\mathbf{k}\cdot \mathbf{R}}\ket{u_{\mathbf{k}}}  & = \pi T_{-\mathbf{R}}e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}}  \\
  & = e^{-i\mathbf{k}\cdot \mathbf{R}}\pi e^{i\mathbf{k}\cdot \mathbf{x}}\ket{u_{\mathbf{k}}} 
\end{align}$$
所以波矢同样也变为$-\mathbf{k}$。

