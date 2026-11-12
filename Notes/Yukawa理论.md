Yukawa理论描述费米子场与标量场的相互作用。我们假设Yukawa相互作用lagrangian为：
$$\begin{align}
\mathcal{L}_{\text{Y}}=-g\bar{\psi}\phi \psi
\end{align}$$
假设散射过程为两个费米子变两个费米子。省略掉自旋，我们试图计算二阶项：
$$\begin{align}
 \int d^{4}x d^{4}y \bra{\mathbf{p}^{'},\mathbf{k}^{'}} \frac{1}{2!}(-ig)\bar{\psi}_{x}\phi_{x}\psi_{x}(-ig)\bar{\psi}_{y}\phi_{y}\psi_{y}\ket{\mathbf{p},\mathbf{k}} 
\end{align}$$
我们先来讨论费米子的Feynman规则。我们考虑$\psi \ket{\mathbf{p},s}$中$\psi$和$(a_{\mathbf{p}}^{s})^{\dagger}$缩并。得到：
$$\begin{align}
\text{contraction of }\psi (a^{s}_{\mathbf{p}})^{\dagger}  & = \int \frac{d^{3}k}{(2\pi)^{^{3}}} \frac{1}{\sqrt{ 2E_{\mathbf{k}} }} \sum_{r}\text{ contraction of }a_{\mathbf{k}}^{r} (a_{\mathbf{p}}^{s})^{\dagger} u^{r}(k)^{}e^{-ik\cdot x}\\
 & = u^{s}(p)  \frac{e^{-ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }}  
\end{align}$$
同理，我们有其它缩并：
$$\begin{align}
 & \text{contraction of }\bar{\psi}(b^{s}_{\mathbf{p}})^{\dagger}= \bar{v}^{s}(p) \frac{e^{-ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }} \\
 & \text{contraction of }a^{s}_{\mathbf{p}}\bar{\psi}=\bar{u}^{s}(p) \frac{e^{ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }} \\
 & \text{contraction of }b^{s}_{\mathbf{p}}\psi= v^{s}(p) \frac{e^{ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }}
\end{align}$$
此外，不要忘了$\phi$的缩并：
$$\begin{align}
 & \text{contraction of }\phi c_{\mathbf{p}}^{\dagger}=  \frac{e^{-ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }} \\
 & \text{contraction of }c_{\mathbf{p}}\phi= \frac{e^{ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }}
\end{align}$$
Yukawa理论的总lagrangian为：
$$\begin{align}
\mathcal{L}= \bar{\psi}(i\rlap{/}\partial-m)\psi+ \frac{1}{2}(\partial \phi)^{2}- \frac{1}{2}m^{2}\phi^{2}- g\bar{\psi}\phi \psi
\end{align}$$
容易证明该lagrangian具有$U(1)$对称性。对应的守恒流为：
$$j^{\mu}=\bar{\psi}\gamma^{\mu}\psi$$
而空间部分对应守恒荷为：
$$\begin{align}
Q & = \int d^{3}x \psi ^{\dagger}(x)\psi(x) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}}\sum_{s}((a^{s}_{\mathbf{p}})^{\dagger}a^{s}_{\mathbf{p}}- (b^{s}_{\mathbf{p}})^{\dagger}b^{s}_{\mathbf{p}})
\end{align}$$
所以费米子携带荷$+1$。反费米子携带荷$-1$。


如果我们看的是M-matrix，那么我们就要去掉平面波积分得到的$(2\pi)^{4}\delta$，以及normalization最终会消掉的$\frac{1}{\sqrt{ 2E_{\mathbf{p}} }}$。Feynamn规则则总结为下图：
![[Pasted image 20261112143440.png|centering|600]]
其中实线上的箭头表示荷的流动。如果荷的流动荷动量方向相反，则在实线下面另用箭头标出。




