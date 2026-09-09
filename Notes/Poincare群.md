# 1. 半直积

给定两个群$G,H$，我们先定义群的直积：

>[!Note] Definition 1.1
>Given two groups $G,H$, we define the product group as $G\times H=\{ (g,h)|g\in G,\ h\in H \}$, with the operation $(g_{1},h_{1})(g_{2},h_{2})=(g_{1}g_{2},h_{1}h_{2})$.

容易证明，$G\times H$是一个群。

同样给定两个群$G,H$，如果过假设每个$H$中的元素$h$都可以定义一个$G$的自同构$\phi_{h}:G\rightarrow G$，那么可以构造半直积：

>[!Note] Definition 1.2
>Given two groups $G,H$, assume that $\phi_{h}$ defines an isomorphism $\phi_{h}:G\rightarrow G$ such that $\phi_{h_{1}}\phi_{h_{2}}=\phi_{h_{1}h_{2}}$. Then the semi product group is defined as $G \rtimes H=\{ (g,h)|g\in G,\ h\in H \}$ with the operation $(g_{1},h_{1})(g_{2},h_{2})=(g_{1}\phi_{h_{1}}g_{2},h_{1}h_{2})$.

首先，显然群作用是封闭的。我们来构造逆。给定$(g,h)$，发现：
$$\begin{align}
(g,h)(\phi ^{-1}_{h}g^{-1},h^{-1})= (g\phi_{h}\phi ^{-1}_{h}g^{-1},hh^{-1})=(1,1)
\end{align}$$
所以的确构成一个群。

>[!Quote]
>之所以用符号$G \rtimes H$是因为$G \times 1$构成$G \rtimes H$的正规子群。任取$(g,h)\in G \rtimes H$，我们计算：
>$$\begin{align}
 (g,h)(g_{0},1)(g,h)^{-1} & = (g,h)(g_{0},1)(\phi_{h}^{-1}g^{-1},h^{-1}) \\
 & = (g,h)(g_{0}\phi_{1} \phi_{h}^{-1}g^{-1},h^{-1}) \\
 & = (g \phi_{h}g_{0}\phi_{1}\phi_{h}^{-1}g^{-1},1)\in G \rtimes 1
\end{align}$$

# 2. Poincare群

不妨定义时空平移变换为：
$$x^{'\mu}=x^{\mu}+a^{\mu}$$
定义Poincare群为保持线元平方不变的群，即isometry。记为$\text{ISO}(1,3)$。可以证明Poincare变换一定可以分解为如下形式：
$$x^{'\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}+a^{\mu}$$
记群元素为$(a,\Lambda)$。可以证明$\text{ISO}(1,3)=T \rtimes \text{SO}(1,3)$，其中$T$为时空流形上的平移群。因为：
$$\begin{align}
(a_{2},\Lambda_{2})(a_{1},\Lambda_{1})x & = (a_{2},\Lambda_{2})(\Lambda_{1}x+a_{1}) \\
 & = \Lambda_{2} \Lambda_{1}x+\Lambda_{2}a_{1}+a_{2} \\
 & = (a_{1}+\Lambda_{2}a_{1},\Lambda_{2}\Lambda_{1})x
\end{align}$$



