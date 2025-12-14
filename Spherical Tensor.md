
# 1. Decompose $V\in \mathbb{R}^{3}$

我们知道给定$SO(3)$，配备辅助空间$\mathbb{R}^{3}$，总能找到$\mathscr{D}(SO(3))$作为$SO(3)$的表示。我们总能找到一个不可约表示$\{ (\mathscr{D}^{(j)}_{m^{'}m}) \}$，配备辅助空间$\{ \ket{j,m} \}$。

对于$V\in \mathbb{R}^{3}$，若$V$按照$SO(3)$变换，则称$V$为Catesian vector。相应地，对于$V^{(q)}\in \{ \ket{q,k} \}$，若$V^{(q)}$按照Wigner-D matrix 变换，则称$V^{(q)}$为spherical tensor。

>[!Note] Definition 1
>- $V\in \mathbb{R}^{3}$ is a Cartesian vector if the components of $V$ transform according to $SO(3)$. Explicitly, $V_{i}^{'}=R_{ji}V_{j}$
>- $V^{(q)}\in \{ \bra{q,k} \}$ is a spherical tensor of rank $q$ if the components of $V^{(q)}$ transform according to $\{ (\mathscr{D}^{(q)}_{k^{'}k}) \}$. Explicitly $V^{(q)'}_{k}=\mathscr{D}^{(q)}_{lk}V^{(q)}_{l}$
## Remark
实际上，我们并不关心这两个玩意是什么空间里的。只要变换性质符合，它们就都是同构的。或许应该在定义里模掉变换性质一样的等价关系吧。

对于球张量，正因为其本体是不变量，而展开在基$\{ \bra{q,k} \}$下，所以其分量会逆着$\bra{k,q}$变换，也就是和$\ket{k,q}$有一样的变换性质。



那么我们不经要问，对于Cartesian tensor $V$，是否能用$\phi$将它映成spherical tensor $V^{(q)}$，使得用$R$变换$V$等于用$\mathscr{D}(R)$变换$V^{(q)}$然后再映回Cartesian tensor？即是否存在一种respect group operation的isomorphism？

![[Drawing 2025-12-13 00.38.44.excalidraw|center|300]]

>[!Note] Proposition 1
>Given a Cartesian vector $V$, set:
>$$V^{(1)}_{\pm 1}= \mp\frac{1}{\sqrt{ 2 }}(V_{x}\pm iV_{y}),V^{(1)}_{0}=V_{z}$$
>Then $V^{(1)}$ is a spherical tensor.

^b27b94

## Proof.
只需要暴力计算即可。令$V^{(1)}=\phi V$。我们想证到：
$$\phi ^{-1}\mathscr{D}(R)\phi=R,\ \forall R\tag{*}$$
实际上，显然只需要证到对于infinitesimal rotation $R$成立即可。

取$R=R_{\hat{n}}(\epsilon)$，于是$\mathscr{D}(R)=1- \frac{i}{\hbar}\vec{J}\cdot \hat{n}\epsilon$。然后可以在$\{ \ket{j=1,m} \}$基下算出$J_{x},J_{y},J_{z}$的表示矩阵。然后带进去就算出Wigner-D matrix。接下来可以验证$(*)$的确成立。
>[!Right]
>$\blacksquare$

那么接下来，$V^{(1)}$构成的空间自然就成为了Wigner-D matrix的一个不可约子空间。你可能会说，$V^{(1)}$不一定是$\{ \ket{j=1,m} \}$中的矢量。但是我们并不关心，因为只要符合$\mathscr{D}(R)$的变换就都是同构的。那么不可约的性质也是自然而然的了。


# 2. Spherical tensor的递推公式

现在考虑$\bigotimes_{1}^NR$，配备辅助空间$\bigotimes_{1}^N\mathbb{R}^{3}$。我们作如下定义：

>[!Note] Definition 1
>$V\in \bigotimes_{1}^N\mathbb{R}^{3}$ is a Cartesian tensor if the components of $V$ transform according to $SO(3)$. 

>[!Note] Lemma 1
>$$\mathscr{D}^{(k_{1})}_{q_{1}m_{1}}(R)\mathscr{D}_{q_{2}m_{2}}^{(k_{2})}(R)=\sum_{J,\mu,\nu}\bra{k_{1},k_{2},q_{1},q_{2}}k_{1},k_{2}, J,\mu\rangle \bra{k_{1},k_{2},J,\nu} k_{1},k_{2},m_{1},m_{2}\rangle\mathscr{D}_{\mu \nu}^{(J)}(R) $$
## Proof.
略去$k_{1},k_{2}$不写。略去$R$不写。我们有：
$$\begin{align}
  \mathscr{D}^{(k_{1})}_{q_{1}m_{1}}\mathscr{D}_{q_{2}m_{2}}^{(k_{2})} & =\bra{q_{1}} \mathscr{D}\ket{m_{1}} \bra{q_{2}} \mathscr{D}\ket{m_{2}}  \\
 & = \bra{q_{1}} \mathscr{D}^{(k_{1})}\ket{m_{1}} \bra{q_{2}} \mathscr{D}^{(k_{2}) }\ket{m_{2}} \\
 & = \bra{q_{1},q_{2}} \mathscr{D}^{(k_{1})}\otimes\mathscr{D}^{(k_{2}) }\ket{m_{1},m_{2}} \\
 & = \bra{q_{1},q_{2}} \mathscr{D}\ket{m_{1},m_{2}}   
\end{align}$$
其中，$\mathscr{D}^{(k_{1})}$表示$\mathscr{D}$限制在$\{ \ket{k_{1},m_{1}} \}$上。

然后我们有：
$$\begin{align}
\bra{q_{1},q_{2}} \mathscr{D}\ket{m_{1},m_{2}}  & = \bra{q_{1},q_{2}} J,\mu\rangle \bra{J,\mu} \mathscr{D}\ket{J^{'},\nu}\bra{J^{'},\nu} m_{1},m_{2}\rangle \\
 & = \bra{q_{1},q_{2}} J,\mu \rangle \bra{J,\mu} \mathscr{D}\ket{J,\nu} \bra{J,\nu} m_{1},m_{2} \rangle \\
 & = \bra{q_{1},q_{2}} J,\mu\rangle \bra{J,\nu} m_{1},m_{2}\rangle \mathscr{D}^{(J)}_{\mu\nu}   
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Theorem 1
>Let $X^{(k_{1})}_{q_{1}},Z^{(k_{2})}_{q_{2}}$ be spherical tensors. Then:
>$$T^{(k)}_{q}=\sum_{q_{1},q_{2}}\bra{k_{1},k_{2},q_{1},q_{2}} k_{1},k_{2},k,q\rangle X^{(k_{1})}_{q_{1}}Z^{(k_{2})}_{q_{2}}$$
>is a spherical tensor.

^63f622

## Remark
这就完全类比于：
$$\ket{k,q} =\sum_{q_{1},q_{2}}\ket{q_{1},q_{2}} \bra{q_{1},q_{2}} k_{},q\rangle$$
这个定理即是在证明如下交换图：
![[Drawing 2025-12-13 18.32.35.excalidraw|center|400]]
## Proof.
略去$k_{1},k_{2}$不写。考虑：
$$\begin{align}
\tilde{T}^{(k)}_{q} & = \bra{q_{1},q_{2}} k,q\rangle \tilde{X}^{(k_{1})}_{q_{1}}\tilde{Z}^{(k_{2})}_{q_{2}} \\
 & = \bra{q_{1},q_{2}}k,q\rangle \mathscr{D}^{(k_{1})}_{q_{1}^{'}q_{1}}X^{(k_{1})}_{q_{1}^{'}}\mathscr{D}^{(k_{2})}_{q_{2}^{'},q_{2} }Z^{(k_{2})}_{q_{2}^{'}} \\
 & = \bra{q_{1},q_{2}} k,q\rangle \bra{q_{1}^{'},q_{2}^{'}} J,\mu\rangle \bra{J,\nu} q_{1},q_{2} \rangle \mathscr{D}^{(J)}_{\mu \nu}X^{(k_{1})}_{q_{1}^{'}}Z^{(k_{2})}_{q_{2}^{'}} \\
 & = \bra{J,\nu} k,q\rangle \bra{q_{1}^{'},q_{2}^{'}}   J,\mu\rangle \mathscr{D}^{(J)}_{\mu \nu}X^{(k_{1})}_{q_{1}^{'}}Z^{(k_{2})}_{q_{2}^{'}} \\
 & = \bra{q_{1}^{'},q_{2}^{'}} k,\mu\rangle \mathscr{D}^{(k)}_{\mu q}X^{(k_{1})}_{q_{1}^{'}}Z^{(k_{2})}_{q_{2}^{'}} \\
 & = \mathscr{D}^{(k)}_{\mu q}T^{(k)}_{\mu}
\end{align}$$
>[!Right]
>$\blacksquare$
# 3. 分解任意阶Cartesian tensor

我们考虑Cartesian 3-tensor $T_{ijk}$。我们试图通过一个线性变换把它变换为一些列球张量。

固定$j,k$，那$T_{ijk}$就是一个一阶Cartesian tensor。我们显然可以作：
$$\begin{align}
 & T^{(1)}_{\pm1,jk}=\mp \frac{T_{xjk}\pm iT_{yjk}}{\sqrt{ 2 }} \\
 & T_{0,jk}^{(1)}=T_{zjk}
\end{align}$$
那么现在我们得到了$T_{\alpha,jk}^{(1)}$，其第一个component按照Wigner-D matrix变换，第二三个component按照$SO(3)$变换。

固定$\alpha,k$，那么$T^{(1)}_{\alpha,jk}$还是一个一阶Cartesian tensor。我们显然可以作：
$$\begin{align}
 & T_{\alpha, \pm{1},k}^{(1,1)}= \mp \frac{T_{\alpha,xk}^{(1)}\pm iT^{(1)}_{\alpha,yk}}{\sqrt{ 2 }} \\
 & T_{\alpha,0,k}^{(1,1)}=T_{\alpha,zk}^{(1)}
\end{align}$$
这样得到了$T_{\alpha \beta,k}^{(1,1)}$。我们再对最后一个component作类似变换。最终得到$T_{\alpha \beta \gamma}^{(1,1,1)}$。注意这玩意不叫spherical tensor。它的三个component都按Wigner-D matrix变换。

现在我们可以通过[[Spherical Tensor#^63f622|theorem 2.1]]，将前两个component相加。具体来说，有：
$$T_{\lambda \gamma}^{(j_{1},1)}=\sum_{\alpha,\beta}\bra{\alpha,\beta} j_{1},\lambda\rangle T_{\alpha \beta \gamma}^{(1,1,1)}$$
此处$0\leq j_{1}\leq 1+1=2$。然后再将$T_{\lambda,\gamma}^{(j_{1},1)}$的两个component相加：
$$T^{(j)}_{\delta}=\sum_{\lambda, \gamma}\bra{\lambda, \gamma} j,\delta\rangle T^{(j_{1},1)}_{\lambda \gamma}$$
最终得到的$T^{(j)}_{\delta}$就是$T_{ijk}$的线性组合。此处$j\leq j_{1}+1\leq 3$。$j\geq |j_{1}-1|\geq 0$。

于是我们就可以写出这个线性变换的变换矩阵了。我们发现，当$j_{1}=0$时，我们可以耦合出$j=1$，对应$3$个分量。当$j_{1}=1$时，我们可以耦合出$j=0,1,2$，对应$9$个分量。当$j_{1}=2$时，我们可以耦合出$j=1,2,3$，对应$15$个分量。总共$27$个分量。而$T_{ijk}$也有$27$个分量。所以我们可以写出变换阵$P$ such that:
$$\text{vector formed by components of spherical tensors}=P\text{ vector formed by }T_{ijk}$$
显然，$P$可以分为两个变换的复合。定义：
- $\phi$为[[Spherical Tensor#^b27b94|proposition 1.1]]中变换。将一个Cartesian tensor的components变为一个spherical tensor的components
- $\psi$为[[Spherical Tensor#^63f622|theorem 2.1]]中变换。将两个spherical tensor components耦合乘另一个spherical tensor component。

则$P=(\psi \otimes \psi \otimes \psi) \circ(\phi \otimes \phi \otimes \phi)$。而我们已经有：
- [[Spherical Tensor#^b27b94|proposition 1.1]] $\implies$ $\phi ^{-1}\mathscr{D}\phi=R$
- [[Spherical Tensor#^63f622|theorem 2.1]] $\implies$ $\mathscr{D}\psi=\psi\mathscr{D}$

可以证明下面交换图成立：

>[!Note] Proposition 1
>$$P^{-1} \mathscr{D}\otimes\mathscr{D}\otimes\mathscr{D}P=R\otimes R\otimes R$$

![[Drawing 2025-12-13 17.02.26.excalidraw|center|300]]
## Proof.
$$\begin{align}
P ^{-1} \mathscr{D}\otimes \mathscr{D} \otimes \mathscr{D}P & = (\bigotimes \psi \bigotimes\phi)^{-1} \bigotimes\mathscr{D}(\bigotimes\psi \bigotimes\phi) \\
 & = (\bigotimes\phi)^{-1}(\bigotimes\psi)^{-1} \bigotimes(\mathscr{D}\psi \phi) \\
 & = \bigotimes\phi ^{-1} \bigotimes\psi ^{-1} \bigotimes(\psi\mathscr{D}\phi) \\
  & =  \bigotimes\phi ^{-1} \bigotimes\psi ^{-1} \bigotimes(\psi\phi R) \\
 & = \bigotimes\phi ^{-1} \bigotimes\phi \bigotimes R \\
 & = \bigotimes R
\end{align}$$
>[!Right]
>$\blacksquare$

上述过程可以generalize到任意阶的Cartesian tensor。




$$\sum_{m}P^{(l)}_{m}Q^{(l)}_{-m}(-1)^m=\vec{P}\cdot \vec{Q}$$


