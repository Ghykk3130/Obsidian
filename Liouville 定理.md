>[!Definition]
>Given a Hamiltonian system, define the phase flow $g^t$ as:
>$$g^{t}:(q(0)),p(0)\rightarrow(q(t),p(t))$$
>where $(q(0),p(0))$ is an arbitrary point in the phase space, $(q(t),p(t))$ is the solution of the Hamilton's equation starting from $(q(0),p(0))$ at time $t$.

>[!Proposition 1]
>Phase flows constitute a 1-parameter group.
## Proof.
任取一点$(q(0),p(0))$，则$g^{t_{1}}g^{t_{2}}(q(0),p(0))=g^{t_{1}}(q(t_{2}),p(t_{2}))$。其中，$(q(t_{2}),p(t_{2}))$为从$(q(0),p(0))$开始，经过$t_{2}$后的解。而$g^{t_{1}}(q(t_{2}),p(t_{2}))$为从$(q(t_{2}),p(t_{2}))$开始经过$t_{1}$后的解。这个解显然等于从$(q(0),p(0))$开始经过$t_{1}+t_{2}$后的解。于是：
$$g^{t_{1}}g^{t_{2}}=g^{t_{1}+t_{2}}\in \{ \text{phase flow} \}$$
取$q^0=\mathbb{1}$为单位元。显然任取$g^{t}$，我们有：
$$g^{-t}g^{t}=\mathbb{1}$$
这是因为Hamilton方程的可逆性。
>[!Right]
>$\blacksquare$

因为Lebesgue测度是一个空间上可测集到$\mathbb{R}$的函数。因为空间变换，了，所有点发生一个变换，导致可测集也发生变换。我们必须认为存在一个“可测集实体”不变。它由“矢量实体”代表的点构成。我们还要认为存在一个“测度实体”不变。但是因为由可测点表示构成的可测集表示不停地在变化，测度的functional dependence必须要发生一个变化得到一个新的测度的表示。

考虑某个Lebesgure-measurable set $M$。我们可以对它作一个变换$M\mapsto g^{t}M$。我们可以用Lebesgue测度测它得到$m(M),m(g^{t}M)$。显然固定$t$，$m\circ g^t$是一个新的长得像测度的玩意。实际上我们可以证明它是一个测度：

>[!Proposition 2]
>$m\circ g^t$ is a measure.
>
## Proof.
任取disjoint可测集$M_{1},M_{2}$。我们假设$g^t$的性质足够好，以至于将可测集映到可测集，我们有：
$$\begin{align}
m\circ g^t(M_{1} \sqcup M_{2} ) & =m(g^t(M_{1})\sqcup g^t(M_{2})) \\
  & = m\circ g^t(M_{1})\sqcup m\circ g^t(M_{2})
\end{align}$$
>[!Right]
>$\blacksquare$

我们发现，其实这个测度$m\circ g^t$就是Lebesgue测度。

>[!Theorem 1]
>$$m\circ g^t=m,\forall t\in \mathbb{R}$$
## Proof.
我们任取可测集$M$。于是STS:$m\circ g^t(M)=m(M)$。

$$\begin{align}
\text{LHS} & = m(g^t(M)) \\
 & = \int_{g^t(M)}dqdp \\
 & = \int_{M}d((g^t)^{-1}q)d((g^t)^{-1}p) \\
 & = \int_{M}d(g^{-t}q)d(g^{-t}p)
\end{align}$$


其实将$t$的符号换一下无所谓。因为如果保持负号，最终可以证到$m\circ g^{-t}$不变。而$t\in \mathbb{R}$。所以不妨将$-t$写成$t$。于是上式可用Jacobian换回原坐标：
$$\int_{M}d(g^tq)d(g^tp)=\int_{M} \frac{\partial(g^tq,g^tp)}{\partial(q,p)}dqdp$$
因为我们想用上Hamilton方程。我们希望出现正则坐标的时间导数。但是上式没有。我们发现要证$m\circ g^t(M)=m(M)$，即证$\frac{d}{dt}(m\circ g^t(M))=0$。

于是：
$$\begin{align}
\frac{d}{dt}(m\circ g^t(M) ) & =\frac{d}{dt}\int_{M} \frac{\partial(g^tq,g^tp)}{\partial(q,p)}dqdp \\
 &= \int_{M} \frac{\partial}{\partial t}\left(  \frac{\partial(g^tq_{},g^tp)}{\partial(q,p)} \right)dqdp
\end{align}$$
不妨记$q^{'}=g^tq,p^{'}=g^tp$。并将一套正则坐标统一记为$(q,p)=\eta,(q^{'},p^{'})=\eta^{'}$。则Jacobian的时间导为：
$$\begin{align}
\frac{\partial}{\partial t}\left(  \frac{\partial(q^{'},p^{'})}{\partial(q,p)} \right) & = \frac{\partial}{\partial t}\left( \frac{\partial(\eta_{1}^{'},\dots,\eta_{N}^{ '})}{\partial(\eta_{1},\dots,\eta_{N})} \right) \\
 & = \sum_{j} \frac{\partial(\eta_{1}^{'},\dots,\partial\eta^{'}_{j} / \partial t,\dots,\eta^{'}_{N})}{\partial(\eta_{1},\dots ,\eta_{N})}
\end{align}$$
这是因为Jacobian是一个determinant。而determinant是矩阵元的多项式。由多项式的符合求导，可以得到上式。你可以用$N$元permitation展开看一下就很明显了。

**Caveat:千万不要写成$\frac{\partial}{\partial t}\left( \frac{\partial(\eta_{1}^{'},\dots,\eta_{N}^{ '})}{\partial(\eta_{1},\dots,\eta_{N})} \right) \\= \frac{\partial(\partial\eta_{1}^{'} / \partial t,\dots,\partial\eta^{'}_{j} / \partial t,\dots,\partial\eta^{'}_{N} / \partial t)}{\partial(\eta_{1},\dots ,\eta_{N})}$

而由于：
$$\frac{\partial}{\partial \eta_{k}}\left(  \frac{\partial \eta_{j}^{'}}{\partial t} \right)=\sum_{l}\frac{\partial \eta_{l}^{'}}{\partial \eta_{k}} \frac{\partial }{\partial \eta_{l}^{'}}\left(  \frac{\partial \eta_{j}^{'}}{\partial t} \right)$$
所以Jacobian中第$j$行就都长这样。我们可以根据determinant的线性性将求和移到外面：
$$\begin{align}
\sum_{j} \frac{\partial(\eta_{1}^{'},\dots,\partial\eta^{'}_{j} / \partial t,\dots,\eta^{'}_{N})}{\partial(\eta_{1},\dots ,\eta_{N})} 
 & = \sum_{j,l} \frac{\partial}{\partial \eta_{l}^{'}} \frac{\partial \eta_{j}^{'}}{\partial t} \frac{\partial(\eta_{1}^{'},\dots,\eta^{'}_{l} ,\dots,\eta^{'}_{N})}{\partial(\eta_{1},\dots ,\eta_{N})}
\end{align}$$
由行列式性质，我们知道除非$l=j$，不然行列式为零。所以：
$$\sum_{j,l} \frac{\partial}{\partial \eta_{l}^{'}} \frac{\partial \eta_{j}^{'}}{\partial t} \frac{\partial(\eta_{1}^{'},\dots,\eta^{'}_{l} ,\dots,\eta^{'}_{N})}{\partial(\eta_{1},\dots ,\eta_{N})}=\left(\sum_{j} \frac{\partial  \dot{\eta}_{j}^{'}}{\partial \eta_{j}^{'}}\right) \frac{\partial(\eta_{1}^{'},\dots,\eta_{N}^{N})}{\partial(\eta_{1},\dots,\eta_{N})}$$
接下来容易看出：
$$\begin{align}
\sum_{j} \frac{\partial  \dot{\eta}_{j}^{'}}{\partial \eta_{j}^{'}} & =\sum_{i} \left(\frac{\partial^{2}H}{\partial q_{i}\partial p_{j}}- \frac{\partial^{2}H}{\partial q_{i}\partial p_{j}  }\right)=0
\end{align}$$
>[!Right]
>$\blacksquare$

