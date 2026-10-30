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





