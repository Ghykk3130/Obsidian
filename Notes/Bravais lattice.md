# 1. Bravais lattice的基本定义

考虑一个$\mathbb{R}^d$中的晶体。可以定义Bravais晶体为：

>[!Note] Definition 1.1
>Define the Bravais lattice as $\Lambda=\left\{  \sum_{j}n_{j}\vec{a}_{j}|n_{j}\in \mathbb{Z}  \right\}$, where $\{ \vec{a}_{j} \}$ forms a linearly independent basis of $\mathbb{R}^d$.

给定一个原子位置构成的点集，选择这些原子位置构成点集不一定形成一个Bravais lattice。
## Ex: Honey comb/graphene
![[Drawing 2026-01-25 16.48.54.excalidraw|center|300]]
若取honey comb lattice的每个原子构成点集，可以证明这不是一个Bravais lattice。FTSOC，假设构成一个Bravais lattice。注意到Bravais lattice具有封闭性。但是$\vec{R}_{A}-\vec{R}_{B}$显然不指向任何原子，不在晶体中。





可以定义primitive cell为这样一个区域：

>[!Note] Definition 1.2
>Define $\Omega \subset \mathbb{R}^d$ as a primitive cell if:
>- $(\Omega+\vec{R}_{1}) \cap(\Omega+\vec{R}_{2})=0,\ \forall \vec{R}_{1},\vec{R}_{2}\in \Lambda,\ \vec{R}_{1}\neq \vec{R}_{2}$.
>- $\bigcup_{\vec{R}\in \Lambda}(\Omega+\vec{R})=\mathbb{R}^d$

我们选好一个Bravais lattice
# 2. 

>[!Note] Definition 2.1
>Given metric spaces $(X,d_{X}),(Y,d_{Y})$, an isometry $f:X\rightarrow Y$ is a function such that $d_{Y}(f(a),f(b))=d_{X}(a,b),\forall a,b\in X$
>

我们有如下定理：

>[!Success] Theorem 2.1
>Let $E:\mathbb{R}^d\rightarrow \mathbb{R}^d$ be an isometry. Then $E=T\circ W$ for some unique $W\in O(d),\ T\text{ a translation}$.
>
## Proof.

令$E^{'}(x)=E(x)-E(0)$。利用$\mathbb{R}^d$自带的内积，容易证明$E^{'}$是线性的：
$$\begin{align}
||E^{'}(\alpha x+y)-\alpha E^{'}(x)-E^{'}(y) || & = ||E(\alpha x+y)-E(0)-\alpha E(x)  +\alpha E(0)-E(y)+E(0)|| \\
 & = ||E(\alpha x+y)-\alpha E(x)+\alpha E(0)-E(y)|| \\
 & = \langle E(\alpha x+y)-\alpha E(x)+\alpha E(0)-E(y),E(\alpha x+y)-\alpha E(x)+\alpha E(0)-E(y)\rangle \\
 & = \langle E(\alpha x+y),E(\alpha x+y)\rangle-\alpha\langle E(x),E(\alpha x+y)\rangle-\langle E(y),E(\alpha x+y)\rangle-\alpha\langle E(\alpha x+y ) ,E(x)\rangle+\alpha^{2}\langle E(x),E(x)\rangle+\alpha\langle E(y),E(x)\rangle-\langle E(\alpha x+y),E(y)\rangle+\alpha \langle E(x),E(y)\rangle+\langle E(y),E(y)\rangle \\
 & = \langle \alpha x+y,\alpha x+y\rangle - \alpha\langle x,\alpha x+y\rangle - \langle y, \alpha x+y\rangle-\alpha\langle \alpha x+y,x\rangle+\alpha^{2}\langle x,x \rangle+\alpha\langle y, x\rangle - \langle \alpha x+y,y\rangle+\alpha\langle x,y\rangle+\langle y,y\rangle \\
 & = \alpha^{2}\langle x,x\rangle+\alpha\langle y,x\rangle+\alpha\langle x,y\rangle+\langle y,y\rangle-\alpha^{2}\langle x,x\rangle-\alpha\langle x,y\rangle-\alpha\langle y,x\rangle-\langle y,y\rangle-\alpha^{2}\langle x,x\rangle-\alpha\langle y,x\rangle+\alpha^{2}\langle x,x\rangle+\alpha\langle y,x\rangle-\alpha\langle x,y\rangle-\langle y,y\rangle+\alpha\langle x,y\rangle+\langle y,y\rangle \\
 & = 0
\end{align}$$
容易证明$E^{'}$是正交的：
$$\begin{align}
||E^{'}(x)|| & = ||E(x)-E(0) || \\
 & = \langle E(x)-E(0),E(x)-E(0)\rangle \\
 & = ||x||^{2} 
\end{align}$$
故$E^{'}\in O(d)$。令$T=T_{E(0)}$即可。

接下来证明唯一性。考虑$E=T_{1}\circ W_{1}=T_{2} \circ W_{2}$。则：
$$W_{1}(x)+t_{1}=W_{2}(x)+t_{2},\ \forall x$$
取$x=0$，则$T_{1}=T_{2}$。然后$W_{1}=T_{1}^{-1}E,\ W_{2}=T_{2}^{-1}E$相等。
>[!Right]
>$\blacksquare$

那么给定一个$\mathbb{R}^d$中的晶体$\Lambda$，由于晶体有对称性，考虑这样一个集合：
$$G=\{ E\text{ isometry} |E\Lambda=\Lambda\}$$
容易证明$G$是一个群。封闭性显然。Identity取$\mathbb{1}$。若$E=T_{t}\circ W$，则$E^{-1}=W^{-1} \circ T_{t}^{-1}$。现在须证明$E^{-1}$为isometry。注意到：
$$\begin{align}
E^{-1}(x)=W^{-1}(x-t)=W^{-1}(x)-W^{-1}(t)
\end{align}$$
所以$E^{-1}=T_{-W^{-1}(t)}\circ W^{-1}$，是一个isometry。然后我们可作如下定义：

>[!Note] Definition 2.2
>Given a lattice $\Lambda$, the space group is defined as:
>$$G=\{ E\text{ isometry }|E\Lambda=\Lambda \}$$

我们可以把正交部分提取出来：
$$P=\{ W\in O(d)|E=T \circ W,\ E\in G \}$$
容易证明$P$是一个群。封闭性：取$E_{1}=T_{1} \circ W_{1},\ E_{2}=T_{2} \circ W_{2}$。则：
$$\begin{align}
E_{1}E_{2}(x)= E_{1}(W_{2}(x)+t_{2})=W_{1}W_{2}(x)+W_{1}(t_{2})+t_{1}
\end{align}$$
所以$W_{1},W_{2}$可以作为$E_{1}E_{2}=T_{W_{1}(t_{2})+t_{1}}\circ W_{1}W_{2}\in G$的$O(d)$部分。

接下来取identity为$\mathbb{1}$。给定$W$，考虑其逆$W^{-1}$即可。

>[!Note] Definition 2.3
>Given a space group $G$, the point group is defined as:
>$$P=\{ W\in O(d)|E=T \circ W,\ E\in G \}$$

点群中的旋转操作必定是离散的。我们有：

>[!Success] Theorem 2.2
>Let $d=1\text{ or }2$, $R\in P$ be a rotation. Then the order of rotation cannot be other than $1,2,3,4,6$.
## Proof.

我们来算一下这个共轭变换的具体结果。设 $g = T_{\mathbf{t}} \circ W$，平移算符为 $T_{\mathbf{R}}$：
$$
\begin{align}

g \circ T_{\mathbf{R}} \circ g^{-1} &= (T_{\mathbf{t}} \circ W) \circ T_{\mathbf{R}} \circ (W^{-1} \circ T_{-W^{-1}\mathbf{t}}) \

&= T_{\mathbf{t}} \circ (W \circ T_{\mathbf{R}} \circ W^{-1}) \circ T_{-W^{-1}\mathbf{t}}

\end{align}$$

利用我们之前讨论的不交换性，$W \circ T_{\mathbf{R}} \circ W^{-1} = T_{W\mathbf{R}}$。代入得：
$$
\begin{align}

g \circ T_{\mathbf{R}} \circ g^{-1} &= T_{\mathbf{t}} \circ T_{W\mathbf{R}} \circ T_{- \mathbf{t}} \

&= T_{W\mathbf{R} + \mathbf{t} - \mathbf{t}} \

&= T_{W\mathbf{R}}

\end{align}
$$
**这个结论非常震撼：**

无论 $\mathbf{t}$ 是什么（哪怕是复杂的滑移、旋转轴偏移），**旋转矩阵 $W$ 作用在任何一个格矢 $\mathbf{R}$ 上，其结果 $W\mathbf{R}$ 必须仍然是一个合法的格矢。**