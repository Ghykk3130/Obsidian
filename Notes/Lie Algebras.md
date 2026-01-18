# I.

考虑$SO(3)$。显然，$\{R_{x}(\alpha),R_{y}(\beta),R_{z}(\gamma)|\alpha,\beta,\gamma \in \mathbb{R}\}$为$SO(3)$的一个generator。（此处generator指一些相互作用可以产生整个群的元素。不是指Lie algebra的generator。）

对于一个generator，例如$R_{z}(\phi)$，可以计算转动角度无穷小的generator的表示。因为：
$$R_{z}(\phi)=\begin{pmatrix}
\cos \phi & -\sin \phi & 0 \\
\sin \phi & \cos \phi & 0 \\
0 & 0 & 1
\end{pmatrix}$$
所以令$\alpha\rightarrow 0$，我们有：
$$R_{z}(\phi)=\begin{pmatrix}
1 & -\phi  & 0\\
\phi & 1 & 0 \\
  0 & 0 & 1
\end{pmatrix}=I-i\phi \begin{pmatrix}
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$
那么我们反过来考虑，是否$R_{z}(\phi)$可以表示为$i\phi \begin{pmatrix}0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$的积分呢？我们作如下命题：

>[!Proposition 1]
>Given $R_{i}(\phi),i=x,y,z$, there exists some $T_{i}$ such that:
>$$R_{i}(\phi)=\exp(-i\phi T_{i})$$
>
## Proof.

WLOG, 令$i=z$。根据上面的motivation，我们不妨猜$T_{z}=\begin{pmatrix}0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$

