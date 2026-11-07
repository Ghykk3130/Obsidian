# 1. Orbit-stabilizer theorem

回忆起定义：
$$G /H = \{ gH|g\in G \}$$
它是$H$的左陪集的集合。我们陈述Lagrange定理：

>[!Success] Theorem 1.1
>Let $H$ be a subgroup of $G$. Then $|G|=|G/ H| \cdot|H|$.
## Proof.

任取子群$H$。首先我们发现左陪集互不相交。例如取$g_{1}H,\ g_{2}H$。如果它们相交，那么$\exists h_{1},\ h_{2}\in H$ such that:
$$\begin{align}
 & g_{1}h_{1}=g_{2}h_{2} \\
\implies & g_{1}^{-1}g_{2}=h_{1}h_{2}^{-1}\in H
\end{align}$$
于是$g_{2}\in g_{1}H$。令$g_{2}=g_{1}h\text{ for some }h\in H$。那么由于$hH=H$，所以$g_{2}H=g_{1}hH=g_{1}H$。

然后任取$g\in G$，由于$e\in H$，那么$g=ge\in gH$。所以$G / H$刚好将$G$分成互不相交的部分。

由于每个$gH$中有$|H|$个元素，并且一共有$|G /H|$这么多个左陪集。而且这些左陪集刚好将集合分成互不相交的部分。所以：
$$|G|=|G /H|\cdot|H|$$
>[!Right]
>$\blacksquare$

接下来我们定义orbit和stabilizer：

>[!Note] Definition 1.1
>Let $G$ act on $X$. Given $x\in X$, we define:
>$$\begin{align}
 & \text{Orbit: }\text{orb}_{}(x) = \{ gx\in X|\forall g\in G \} \\
 & \text{Stabilizer: }\text{stab}_{}(x)= \{ g| g x =x \}
\end{align}$$

容易证明，$\text{stab}(x)\subset G$是一个子群。显然，$\text{orb}(x)=G /\text{stab}(x)$。那么于是：

>[!Success] Theorem 1.2
>Let $G$ be a group, Let $G$ act on $X$. For any $x\in X$, we have $|G|=|\text{orb}(x)|\cdot|\text{stab}|(x)$.
# 2. Feynman图

我们以$\phi^{4}$理论为例子。考虑微扰$\mathcal{H}_{\text{int}}= \frac{\lambda}{4!}\phi^{4}$。假设我们计算如下矩阵元：
$$\begin{align}
\bra{0} \phi(x_{1})\phi(x_{2})  T \exp\left( -i \int d^{4}z   \frac{\lambda}{4!}\phi^{4}(z) \right) \phi(x_{A})\phi(x_{B})\ket{0}  
\end{align}$$
假设我们展开到二阶：
$$\begin{align}
\left(  \frac{-i\lambda}{4!} \right)^{2} \frac{1}{2!}  \int d^{4}z_{1} d^{4}{z_{2}} \bra{0} \phi(x_{1})\phi(x_{2})T\{ \phi^{4}(z_{1})\phi^{4}(z_{2}) \} \phi(x_{A})\phi(x_{B})\ket{0} 
\end{align}$$
我们简写为：
$$\begin{align}
\left(  \frac{-i\lambda}{4!} \right)^{2} \frac{1}{2!}\int d^{4}z_{1}d^{4}z_{2} \bra{0} \phi_{1}\phi_{2}T\{ \phi^{4}_{z_{1}}\phi^{4}_{z_{2}}  \} \phi_{A}\phi_{B}\ket{0} 
\end{align}$$
我们使用Wick定理，考虑如下式子的所有完全缩并：
$$\begin{align}
\bra{0} \phi_{1}\phi_{2}\phi^{4}_{z_{1}}\phi^{4}_{z_{2}}\phi_{A}\phi_{B}\ket{0} 
\end{align}$$
缩并后得到一个Feynman propagator的多项式。


我们把每个$\phi$当成一个点画在一张图上，然后图上每连接两个点代表一次缩并。将没有进行积分的点称为外点，进行积分的点称为内点。其中，$\phi^{4}_{z_{1}}$对应的点实际上都是同一个点，因为他们的变量名都是一样的。$\phi^{4}_{z_{2}}$对应的点实际上也都是同一个点。

当我任意画一张Feynman图，我们实际上选择了一种缩并方式。但是这种缩并方式可能是"degenerate"的。即别的连接方式不同的Feyman图，可能缩并出来得到同样的结果。我们对于这个图所有的合法操作是交换顶点内部四个点的顺序，以及交换顶点本身。将这个群记为$G$。对于$n$阶Feynman图，显然$|G|=n! \cdot(4!)^{n}$。这是因为有$n$个顶点，顶点内部有$4!$种交换，顶点之间有$n!$种交换。


由于$\phi^{4}_{z_{1}}$对应的点实际上都是同一个点，那么permute这四个点得到的是同一种缩并。有$4!$种方式。同理，由于$\phi^{4}_{z_{2}}$对应的点实际上也都是同一个点，那么我们又得到一个$4!$。那么任何一张Feynman图都有$(4!)^{2}$的degeneracy。这刚好和$\frac{\lambda}{4!}\phi^{4}$的分母抵消。

所以我们只需要数模掉内点交换带来的degeneracy剩下的不同的Feynman图。这种Feynman图的个数称为symmetry factor。







