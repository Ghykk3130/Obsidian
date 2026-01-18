# Table of contents

## 1. Point-set topology
1.1 [[Lie Group#^56c0f4|Topology and subspace]]
1.2 [[Lie Group#^599821|Basis]]
1.3 [[Lie Group#^b7fdc8|Second and first countability]]
1.4 [[Lie Group#^370a40|Separation]]
1.5 [[Lie Group#^7c0218|Product topology]]
## 2. Manifolds
2.1 [[Lie Group#^cbd87d|Topological manifolds]]
2.2 [[Lie Group#^bd22b3|Compatible charts]]
2.3 [[Lie Group#^f2d166|Smooth manifolds]]
# 1.1 Topology and subspace

^56c0f4

>[!Definition 1]
>Given a set $S$, a topology on $S$ is $\mathcal{T}$ such that:
>- $\phi,S\in\mathcal{T}$
>- $A_{\lambda}\in S\implies\cup_{\lambda}A_{\lambda}\in \mathcal{T}$
>- $A_{\lambda}\in S\implies\cap_{\lambda\in \text{finite set}}A_{\lambda}\in \mathcal{T}$

>[!Definition 2]
>Given a topological space $(A,\mathcal{T})$, $A\in S$ is open if $A\in\mathcal{T}$.

>[!Proposition 1]
>$A$ is open if and only if $\forall p \in A,\exists V \subset A,V\in\mathcal{T}$.
## Proof.
（$\Rightarrow$）:
给定$p\in A$，取$V=A$。
（$\Leftarrow$）:
给定$p\in A$，取$V_{p}\in\mathcal{T}$ such that $p\in V_{p}$。容易证明：
$$\cup_{p\in A}V_{p}=A$$
>[!Right]
>$\blacksquare$
## Ex:
- $\{\phi,X\}$是一个拓扑。
- $P(X)$是一个拓扑。
## Ex:
$\mathcal{T}=\{\phi,\mathbb{R}\}\cup\{A|\exists B\text{ finite s.t.}A=B^{c}\}$是一个拓扑。

**Proof.**

不妨取$A_{\lambda}\in\mathcal{T}$。WLOG设$A_{\lambda}\in \{A|\exists B\text{ finite s.t. } A=B^{c} \}$。

若$\cup_{\lambda}A_{\lambda}=\mathbb{R}$，则显然成立。

若$\cup_{\lambda}A_{\lambda}\neq \mathbb{R}$，那么想证明$(\cup_{\lambda}A_{\lambda})^{c}$是一有限集。即$\exists 0<R<\infty \text{ s.t. } (\cup_{\lambda}A_{\lambda})^{c}\subset(-R,R)$ 。这是显然。因为：
$$\begin{align}
(\cup A_{\lambda})^{c} & =\cap A_{\lambda}^{c} \subset A_{\Lambda}^{c},\forall \Lambda 
\end{align}$$
那么，fix $\Lambda$，总存在$R<\infty\text{ s.t. }A_{\Lambda}^{c}\subset(-R,R)$。于是：
$$(\cup A_{\lambda})^{c}\subset A_{\Lambda}^{c}\subset(-R,R)$$
>[!Right]
>$\blacksquare$

令$(S,\mathcal{T})$为一拓扑空间，取$A\subset S$。我们发现$\{A\cap B|B\in \mathcal{T}\}$具有拓扑的性质。任取$A\cap B_{\alpha}\in S$，显然：
$$\begin{align}
 & \cup(A\cap B_{\alpha})=A\cap(\cup B_{\alpha}) \in \{ A\cap B|B\in\mathcal{T} \} \\
 & \cap_{\alpha\in \text{ finite set}}(A\cap B_{\alpha})=A\cap(\cap B_{\alpha}) \in \{ A\cap B|B\in\mathcal{T} \} \\
 & \phi\in \{ A\cap B|B\in\mathcal{T} \} \\
 & A\in \{ A\cap B|B\in\mathcal{T} \}
\end{align}$$
于是$\{ A\cap B|B\in\mathcal{T} \}$是一个$A$上的拓扑。于是定义：

>[! Definition 3 (subspace topology)]
>Let $(S,\mathcal{T})$ be a topological space. Given $A\subset S$, define the subspace topology as:
>$$\mathcal{T}_{A}=\{ A\cap B|B\in\mathcal{T} \}$$
>Call $(A,\mathcal{T}_{A})$ a subspace.

但是$A$中开集不一定是$S$中开集。我们做如下命题：

>[!Proposition 2]
>$A$ is open relative to $S$ if and only if:
>$$\mathcal{T}_{A}\subset\mathcal{T}$$
## Proof.
（$\Rightarrow$）:
取$U\in\mathcal{T}_{A}$。于是：
$$U=A\cap B,\exists B\in\mathcal{T}\implies U\in\mathcal{T}$$
（$\Leftarrow$）:
WTS：$A\in\mathcal{T}$
Know：
$$A\cap B_{\alpha}\in\mathcal{T},\forall B_{\alpha}\in\mathcal{T}$$
STS：
$$\cup_{\alpha}(A\cap B_{\alpha})=A$$
LHS属于RHS是显然。要证RHS属于LHS，取$B_{\alpha}=X$即可。

>[!Right]
>$\blacksquare$

## Ex:
考虑$\mathbb{R}$上的自然拓扑，即所有开集构成的拓扑。考虑$A=[0,1]$。则$A$在自然拓扑下不是开集。于是考虑$\mathcal{T}_{A}$中一个集合$\left( -\frac{1}{2}, \frac{1}{2} \right)\cap A=[0, \frac{1}{2})$。这是相对$A$的开集，却不是相对$\mathbb{R}$的开集。

# 1.2 Basis

^599821

>[! Definition 1]
>Let $(S,\mathcal{T})$ be a topological space. $\mathcal{B}\subset\mathcal{T}$ is a basis if:
>given $A\in S \text{ open}$, $\forall p\in A$, $\exists B\in\mathcal{B}$ such that $p\in B\subset A$
## Ex:
令$S=\mathbb{R}^n$。则$\mathcal{B}=\{ \text{all open balls} \}$是一个基。这是因为$\mathbb{R}^{n}$中任意一个开集，其中任取一点，显然有一个该集合中的球包含这一点。

>[!Theorem 1]
>$\mathcal{B}$ is a basis if and only if any open set is a union of sets in $\mathcal{B}$.

^theorem121
## Proof.
($\Rightarrow$):
任取$A\in\mathcal{T}$，显然：
$$\forall p\in A,\exists B\in\mathcal{B}_{p}\text{ s.t. }p\in B_{p}\subset A$$
容易证明：
$$\cup_{p\in A}B_{p}=A$$
($\Leftarrow$):
任取$A\in\mathcal{T},p\in A$。则$A=\cup_{\alpha}B_{\alpha}$, for some $B_{\alpha}\in \mathcal{B}$。于是取出$B_{\alpha}\text{ s.t. }p\in B_{\alpha}$。则：
$$p\in B_{\alpha}\subset A$$
>[!Right]
>$\blacksquare$

>[!Proposition 1]
>Let $S$ be a set. $\mathcal{B}$ is a basis for some topology $\mathcal{T}$ if and only if:
>- $S=\cup_{B\in\mathcal{B}}B$
>- Given $B_{1},B_{2}\in\mathcal{B},p\in B_{1}\cap B_{2}\neq \phi$, $\exists B\in\mathcal{B}\text{ s.t. }p\in B\subset B_{1}\cap B_{2}$

^proposition121
## Proof.
($\Rightarrow$):
若$\mathcal{B}$为一基，那么显然成立。
($\Leftarrow$):
首先需要将这个topology构造出来。令$\mathcal{T}=\{ A|A\text{ is a union of sets in }\mathcal{B} \}$。任取$B_{1},B_{2}\in \mathcal{T}$。令$p\in B_{1}\cap B_{2}$，$B_{p}\in \mathcal{T}\text{ s.t. }p\in B\subset B_{1}\cap B_{2}$。则：
$$B_{1}\cap B_{2}=U_{p\in B_{1}\cap B_{2}}B_{p}\in\mathcal{T}$$
接下来，令$B_{\alpha}$为任意一个$\mathcal{B}$中的collection。于是显然：
$$\cup_{\alpha}B_{\alpha}\in\mathcal{T}$$
于是$\mathcal{T}$是一个拓扑。

由[[Lie Group#^63f197|theorem 1.2.1]]，显然$\mathcal{B}$是$\mathcal{T}$的一个基。
>[!Right]
>$\blacksquare$

>[!Proposition 2]
>Let $(S,\mathcal{T})$ be a topological space. Let $(A,\mathcal{T}_{A})$ be a subspace. Let $\{ B_{\alpha} \}$ be a basis of $(S,\mathcal{T})$. Then $\{ B_{\alpha}\cap A \}$ is a basis of $(A,\mathcal{T}_{A})$.
## Proof.
任取$U\cap A\in\mathcal{T}_{A}$，其中$U\in\mathcal{T}$。则存在一些$B_{\alpha}$使得：
$$U=\cup B_{\alpha}$$
于是：
$$U\cap A=(\cup B_{\alpha})\cap A=\cup(B_{\alpha}\cap A)$$
而$B_{\alpha}\cap A\in\mathcal{T}_{A}$。
>[!Right]
>$\blacksquare$

# 1.3 Second and first countablility

^b7fdc8

>[! Definition 1]
>Let $(S,\mathcal{T})$ be a topological space. The topological space is said to be second countable if there exists a basis $\mathcal{B}$ such that $\mathcal{B}$ is countable. 

我们定义，$\mathbb{R}^{n}$中一点$x$如果每个分量都是有理数，即$x\in\mathbb{Q}^{n}$，那么称该点为rational point。

>[!Lemma 1]
>Every open set in $\mathbb{R}^{n}$ contains a rational point.

^lemma131
## Proof.
任取一开集$U\in \mathbb{R}^{n} \text{ open}$。任取$U$内一点$p$，则一定可以作一个n维球$B(p,r)\subset U$。则：
$$x\in B(p,r)\implies d(x,p)<r\implies \sum_{j}(x_{j}-p_{j})^{2}<r^{2}$$
因为有理数在$\mathbb{R}$中稠密，一定存在：
$$\exists x_{j}\in \mathbb{Q}\text{ s.t. }(x_{j}-p_{j})^{2}< \frac{r^{2}}{n}\ ,\forall j$$
>[!Right]
>$\blacksquare$

>[!Proposition 1]
>Let $\mathcal{B}_{rat}$ be the set of all balls with rational centers and radii in $\mathbb{R}^{n}$. Then $\mathcal{B}_{rat}$ is a basis of $(\mathbb{R}^{n},\text{narual topology on }\mathbb{R}^{n})$
## Proof.
考虑$\mathbb{R}^{n}$上任意一个开集。将在开集内任意点作一个开集内的小球。易证开集是所有这些小球的并。

所以只需要证明任意一个球是有理球的并即可。

任取$B(a,r)$。在其中每个有理点$x\in B(a,r)\cap\mathbb{Q}^{n}$，我们以$x$为中心构造一系列球$B(x,s_{j})$，其中$s_{j}\in\mathbb{Q},s_{j}<min\{ d(x,a),d(x,B(a,r)^{c}) \}$。

STS $B(a,r)=\cup_{x\in B(a,r)\cap\mathbb{Q}^{n},j}B(x,s_{j})$。

显然，RHS属于LHS。接下来来看是否LHS属于RHS。任取$y\in B(a,r)$。想证明：
$$\exists x\in B(a,r)\cap\mathbb{Q}^{n}\text{ s.t. }y\in B(x,s_{j})\text{ for some }s_{j}$$
如果想让$y$处于以$x$为球心的球内，那么就得让$x$也处于以$y$为球心的球内。那么不妨作：
$$B(y,l),\text{ s.t. }l < \frac{1}{4} min\{ d(y,a),d(y,B(a,r)^{c}) \}< \frac{1}{8}r$$
这样做是为了画$y$为圆心的球，在球内找到$x$后再画以$x$为球心相同半径的球不会画出$B(a,r)$。只要要求这个球半径$<\frac{1}{4}r$即可。（画个图就看出来了）而现在这个球半径$< \frac{1}{8}r$。

<div style="text-align:center">
<img src="e5785bbda01e7e755db1a4314f364b8c.jpg" width="200">
</div>

由[[Lie Group#^lemma131|lemma 1.3.1]]，$\exists x\in B(y,l)\text{ rational point}$。则：
$$y\in B(x,l)$$
更进一步地：
$$y\in B\left( x,l+ \frac{1}{4}r \right)$$
而我们一定有$B\left( x,l+ \frac{1}{8}r \right)\in B(a,r)$。这是因为$B(y,l),B(x,l)$两个球最大就延伸到略小于$\sim 4\cdot \frac{1}{8}r$的位置。我们还有$r- 4\cdot \frac{1}{8}=\frac{1}{2}r$的空隙。将这个空隙拆成两半分给$x$为圆心的球的半径就得到上式。

而一定存在$s_{j}\text{ s.t. }l<s_{j}< l+ \frac{1}{4}r$。于是$y\in B(x,s_{j})$。
>[!Right]
>$\blacksquare$

于是：

>[!Proposition 1]
>$\mathbb{R}^{n}$ with the natural topology is second countable.
## Proof.
这是因为$|\{ rational balls \}|=|\mathbb{Q}^{n}\times\mathbb{Q}^{+}|=|\mathbb{Q}|$
>[!Right]
>$\blacksquare$

>[!Proposition 2]
>Any uncountable set with discrete topology is not second countable.
## Proof.
设$S$为一不可数集。则$P(S)$为discrete topology。FTSOC，设存在一个基$\mathcal{B}\ \text{countable}$。

因为任取一点$x\in S$，则$\{ x \}$为开集。那么：
$$\exists B_{\alpha}\in\mathcal{B}\text{ s.t. }\cup B_{\alpha}=\{ x \}$$
显然，只存在一个这样的$B_{\alpha}$，即$B_{\alpha}=\{ x \}$。这对于每个$x \in S$都成立。于是$\mathcal{B}$知道包含$S$中所有单点。所以：
$$|\mathcal{B}|>|S| \ \rightarrow\leftarrow $$
>[!Right]
>$\blacksquare$

>[!Definition 2]
>Let $(S,\mathcal{T})$ be a topological space. Given $p\in S$, a collection of open sets $\mathcal{B}$ is a neighborhood basis at $p$ if
>$$\forall U\text{ open},\ \exists B\in\mathcal{B}\text{ s.t. }p\in B_{}\subset U$$

>[!Definition 3]
>A topological space $(S,\mathcal{T})$ is first countable if 
>$$\forall p\in S,\ \exists \text{ a countable neighborhood basis}$$
## Ex:
考虑一个不可数集$S$，以及它的离散拓扑$P(S)$。显然该拓扑空间是first countable的。因为任意一点$p$都可以选择$\{ p \}$作为neighborhood basis。

>[!Theorem 1]
>Any second countable topological space is first countable.
## Proof.
这是显然。令$(S,\mathcal{T})$为拓扑空间。任取$p\in S，p\in U\text{ open }$。取countable basis为neiborhood basis。则neiborhood basis也是countable的。
>[!Right]
>$\blacksquare$

# 1.4 Separation

^370a40

>[!Definition 1]
>A topological space $(S,\mathcal{T})$ is Hausdorff if 
>$$\forall x,y\in S,x\neq y, \exists U,V \text{ open and disjoint s.t. } x\in U,y\in V$$

>[!Definition 2]
>A Hausdorff topological space $(S,\mathcal{T})$ is normal if
>$$\forall F,G\subset S \text{ closed and disjoint },\exists U,V\subset S\text{ open and disjoint s.t. } F\subset U,\ G\subset V$$

>[!Proposition 1]
>Any singleton set in a Hausdorff topological space is closed.
## Proof.
任取$x\in S$。想要证明$S\backslash\{ x \}$为开集。任取$y\in S\backslash\{ x \}$。则：
$$\exists U,V\text{ open and disjoint s.t. }y\in U,x\in V$$
于是：
$$y\in U\subset S\backslash\{ x \}$$
因为集合内任意一点都存在一个小开集，所以$S\backslash\{ x \}$是开集。
>[!Right]
>$\blacksquare$

>[!Proposition 2]
>Any subspace of a Hausdorff topological space is Hausdorff.
## Proof.
考虑$(A,\mathcal{T}_{A})$为一子拓扑空间。任取$x,y\in A,\ x\neq y$。于是：
$$\exists U,V\text{ open w.r.t. S and disjoint s.t. }x\in U,y\in V$$
那么显然$U\cap A,V\cap A$还是disjoint的，并且也open w.r.t. $A$。
>[!Right]
>$\blacksquare$

>[!Definition 3]
>Let $S$ be a topological space. S is connect if
>- there exists $U,V\subset S\text{ open, nonempty, disjoint s.t. }S=U\cup V$

>[!Proposition 3]
>A subspace $A\subset S$ is connect if and only if there exist open sets $U,V\subset S$ such that
>- $U\cap A\neq \phi,V\cap A \neq \phi$
>- $U\cap V\cap A=\phi$
>- $A\subset U\cup V$
>
>The pair $U,V$ is called a separation of $A$

^proposition143
## Proof.
($\Leftarrow$):
容易证明：
$$(U\cap A)\cap(V\cap A)=\phi,(U\cap A)\cup(V\cap A)=A$$
而$U\cap A,V\cap A$都是open relative to $A$的。于是$A$不连通。
($\Rightarrow$):
若$A$不连通，则$A$中一定存在两个open sets $U\cap A,V\cap A\text{ nonempty},U,V\subset S\text{ open}$ such that:
$$(U\cap A)\cap(V\cap A)=\phi,(U\cap A)\cup(V\cap A)=A$$
于是上面三条性质便是显然。
>[!Right]
>$\blacksquare$

>[!Proposition 4]
>If $f:X\rightarrow Y$ is a continuous map, and $X$ is connected, then $f(X)$ is connected.
## Proof.
FTSOC，设$f(X)$ disconnected。则一定存在$U,V\subset Y\ \text{open}$使得：
- $f(X)\subset U   \sqcup V$
- $f(X)\cap U ,f(X)\cap V\neq \phi$
于是·显然：
$$f^{-1}(U)\cap f^{-1}(V)=\phi$$
而且$f^{-1}(U),f^{-1}(V)$都是开集。并且：
$$f(X)\subset U\cup V \implies X\subset f^{-1}(U)\cup f^{-1}(V)$$
则由[[Lie Group#^af7aaa|proposition 1.4.3]]可知，$X$是不连通的。$\rightarrow\leftarrow$
>[!Right]
>$\blacksquare$

>[! Proposition 5]
>Let $\{ A_{\alpha} \}$ be a sequence with a common point $p\in A_{\alpha},\forall \alpha$. Then:
>$$A_{\alpha}\text{ connected }\forall \alpha \implies\cup_{\alpha}A_{\alpha}\text{ connected }$$

^proposition145
## Proof.
FTSOC设$\cup_{\alpha}A_{\alpha}$不连通。WTS: 存在一个$A_{\alpha}$不连通。

考虑一对$\cup_{\alpha}A_{\alpha}$的separation $U,V$。因为：
$$p\in\cup_{\alpha}A_{\alpha}\subset U \sqcup V$$
不妨设$p\in U$。于是：
$$\begin{align}
 (\cup_{\alpha}A_{\alpha})\cap V \neq \phi & \implies A_{\alpha^{'}}\cap V\neq \phi\text{ for some }\alpha^{'} \\
\end{align}$$
而：
$$p\in U \implies U\cap A_{\alpha^{'}}\neq \phi$$
而因为$U,V$是开且disjoint的，所以$A_{\alpha^{'}}$是不连通的。$\rightarrow\leftarrow$
>[!Right]
>$\blacksquare$

>[!Definition 4]
>Given a point $x\in S$, Define the union of all the connected set containing $x$ as the connected component of $S$ containing $x$. Write $C_{x}$

>[! Proposition 6]
>Let $x,y\in S$. Then $C_{x},C_{y}$ are either disjoint or identical.
## Proof.
若$C_{x}\cap C_{y}\neq \phi$，则由[[Lie Group#^1759a6|proposition 1.4.5]]可知，$C_{x}\cup C_{y}$是联通的，且$x\in C_{x}\cup C_{y}$。于是由于$C_{x}$是所有包含$x$的联通集的并，所以：
$$C_{x}\cup C_{y}\subset C_{x}$$
而$C_{x}\in C_{x}\cup C_{y}$。所以$C_{x}=C_{x}\cup C_{y}$。同理可得$C_{y}=C_{x}\cup C_{y}$。所以$C_{x}=C_{y}$。
>[!Right]
>$\blacksquare$

>[!Corollary 1]
>Let $f:X\rightarrow Y$ be continuous and surjective. Then:
>- the number of connected components in $X$ $\geq$ the number of connected components in $Y$.
## Proof.
因为$X=\cup_{x\in X}C_{x}$，而每个$C_{x}$不是identical就是disjoint，那么$X$一定可以写为disjoint connected components的并。令：
$$X=\sqcup_{\alpha}C_{\alpha}$$
则：
$$\begin{align}
f(X)=\cup_{\alpha}f(C_{\alpha})=Y
\end{align}$$
因为$f(C_{\alpha})$都是联通的，但是$f(C_{\alpha})$之间不一定disjoint。所以$Y$中connected component一定更少。
>[!Right]
>$\blacksquare$

>[!Corollary 2]
Let $f:X\rightarrow Y$ be a homeomorphism. Then:
>- the number of connected components in $X$ $=$ the number of connected components in $Y$.

^corollary142
## Proof.
这是显然，因为$f,f^{-1}$都是continuous且surjective的。
>[!Right]
>$\blacksquare$

# 1.5 Product topology

^7c0218

考虑两个拓扑空间$X,Y$。我们在其中分别取开集$U,V$，构成一个集合$\mathcal{B}=\{ U\times V|U\subset X,V\subset Y,\ U,V\text{ open} \}$

容易证明：
$$(U_{1}\times V_{1})\cap(U_{2}\times V_{2})=(U_{1}\cap U_{2})\times(V_{1}\cap V_{2})\in\mathcal{B}$$
既然这个$\mathcal{B}$中任意两个集合之交仍属于$\mathcal{B}$，那么取$\mathcal{B}$中所有集合的任意并构成一个集合$\mathcal{T}$，那么$\mathcal{T}$就是一个拓扑。这就是[[Lie Group#^bab950|proposition 1.2.1]]。那么$\mathcal{B}$就是拓扑$\mathcal{T}$的基。

>[!Definition/proposition 1]
>Let $X,Y$ be two topological spaces. Then $X\times Y$ is a topological space. $\{ U\times V|U\subset X,V\subset Y,U,V\text{open} \}$ forms a basis of $X\times Y$. Call this the basis of the product topology.
## Remark
$U\times V$指的是$\{ (x,y)|x\in U,y\in V \}$。

>[!Proposition 2]
>Let $X,Y$ be topological spaces. $\{ U_{i} \},\{ V_{j} \}$ be bases of $X,Y$. Then
>$\{ U_{i}\times V_{j} \}$ is a basis of $X\times Y$.
## Proof.
回忆起：$X\times Y$中的拓扑是所有$X,Y$中开集的Caetesian product生成的。任取一个$X\times Y$中开集，一定可以拆成很多Cartesian product的并。只需要证明每个Cartesian product可以由$U_{i}\times V_{j}$并出来即可。

任取$U\times V \subset X\times Y,\ U,V\text{ open}$。令$U=\cup_{i}U_{i},V=\cup_{j}V_{j}$。容易证明：
$$(\cup_{i}U_{i})\times(\cup_{j}V_{j})=\cup_{i,j}(U_{i}\times V_{j})$$
>[!Right]
>$\blacksquare$

>[!Corollary 1]
>The product of two second countable topological spaces is second countable.

>[!Proposition 3 ]
>The product of two Hausdorff topological spaces is Hausdorff.
## Proof.
任取$(x_{1},y_{1}),(x_{2},y_{2})\in X\times Y,(x_{1},y_{1})\neq (x_{2},y_{2})$。

若$x_{1}\neq x_{2},y_{1}\neq y_{2}$，则取：
$$U_{1},U_{2}\text{ disjoint, open, s.t. }x_{1}\in U_{1},x_{2}\in U_{2}$$
$$V_{1},V_{2}\text{ disjoint, open, s.t. }y_{1}\in V_{1},y_{2}\in V_{2}$$
于是显然$(x_{1},y_{1})\in U_{1}\times V_{1},(x_{2},y_{2})\in U_{2}\times V_{2}$，且$(U_{1}\times V_{1})\cap(U_{2}\times V_{2})=\phi$。

若WLOG $x_{1}=x_{2},y_{1}\neq y_{2}$，则因为$V_{1}\cap V_{2}=\phi$，所以上述论证仍然成立。
>[!Right]
>$\blacksquare$

>[!Proposition 4]
>Let $X_{1},\dots,X_{N}$ be topological spaces. Define the projection map
>$$\pi_{\alpha_{i}}:\prod_{\alpha} X_{\alpha}\rightarrow X_{\alpha_{i}},(x_{1},\dots,x_{N}) \mapsto x_{\alpha_{i}}$$
>Then $\pi_{\alpha_{i}}$ is continuous.
## Proof.
这是显然。因为任取一个开集$U\subset X_{\alpha_{i}}$，其原像为：
$$X_{1}\times \dots \times U\times X_{\alpha_{i+1}}\times\dots \times X_{N}$$
这显然是一个开集。
>[!Right]
>$\blacksquare$

# 2.1 Topological manifolds

^cbd87d

>[!Definition 1]
>Given topological spaces $X,Y$, a function $f:X\rightarrow Y$. $f$ is a homeomorphism if:
>- $f$ is bijective
>- $f$ is continuous
>- $f^{-1}$ is continuous
## Ex:
考虑$X=[0,1]\text{ with topology }\{ [a,b) \}$， $Y=[0,1]\text{ with natural topology}$， $f(x)=x$。则$f$不是一个homeomorphism。

显然，$f$是双射的。接下来验证$f$是连续的。显然要验证连续性只需要取一个basis中的开集验证即可。我们取$(a,b)$。则：
$$f^{-1}((a,b))=(a,b)=\cup_{n}[a+1/ n,b)$$
但是$f^{-1}$不是连续的。取$[a,b) \subset X\text{ open}$。则其原像为$[a,b)\subset Y$。但这显然不open。

>[!Definition 3]
>Let $M$ be a topological space. We say $M$ is locally Euclidean of dimension n if
>- $\forall p\in M$, there is a neighborhood $U\ni p\text{ open}$, a homeomorphism $\phi:U\rightarrow \mathbb{R}^n$ onto some open set in $\mathbb{R}^n$
>
>Call $(U,\phi)$ a chart.

>[!Definition 5]
>Let $M$ be a topological space. We call $M$ a topological manifold if it is:
>- Hausdorff
>- second countable
>- locally Euclidean
## Ex:
- $\mathbb{R}^n$是一个拓扑流形。任取$p\in \mathbb{R}^n$，考虑chart $(\mathbb{R}^n,\mathbb{1})$即可。$\mathbb{R}^n$显然是Hausdorff与second countable的。
- 考虑$\mathbb{R}^n$的任意子空间$A$。则$A$也是一个拓扑流形。对任意一点$p\in A$，取chart $(A,\mathbb{1}_{A})$。因为Hausdorff和second countable的性质都会自动继承到子空间，所以$A$自然具有这两种性质。

## Ex:
$A=\{ (x,y)\in \mathbb{R}^{2}|y=x^{2/3} \}$是一个1维拓扑流形。因为$\mathbb{R}^{2}$是Hausdorff且second countable的，那么$A$作为$\mathbb{R}^{2}$的子空间也是Hausdorff与second countable的。

接下来构造chart。任取$p=(x,y)\in A$。考虑chart $(A,\phi:(x,y)\mapsto x)$ 。画个$y=x^{2/3}$的图我们知道这一定是个双射。
<div style="text-align:center">
<img src="Pasted image 20250921214322.png" width="100">
</div>
接下来验证locally Euclidean。homeomorphism的codomian是$\mathbb{R}$。任取$\mathbb{R}$的一个基$(a,b)$。则原像为：
$$\phi ^{-1}((a,b))=\{ (x,y)|y=x^{2/3},x\in(a,b) \}$$
画个图可以知道，一定存在一个开集$B\in \mathbb{R}^{2}\text{ s.t. }B\cap A=\phi^{-1}((a,b))$。因为$B\cap A$是oepn relative to $A$的，所以$\phi$连续。

考虑$\phi ^{-1}$的连续性。取$A$的一个基$B\cap A$，其中$B\in \mathbb{R}^{2}$为一开球。该开球一定与cusp相交处有限多条线段。那么考虑这些线段在$\phi ^{-1}$下的原像，即$(\phi ^{-1})^{-1}(\text{these lines})=\phi(\text{these lines})$。即将它们投影到$x$轴上。显然这些投影都是open relative to $\mathbb{R}$的。

## Ex:
考虑一个$\mathbb{R}^{2}$中的十字。它不是topological manifold。因为在$p$点不locally Euclidean。
<div style="text-align:center">
<img src="Pasted image 20250921220023.png" width="100">
</div>
考虑在p的一个到$\mathbb{R}^n$的chart $(U,f)$。

>[!Idea]
对于任意一个chart $(U,f)$，都可以不妨设$f(U)$是一个以$0$为中心的开球，且$f(p)=0$。

这是因为对于任意的neighborhood $U$，考虑它的像$f(U)$。由于$f(U)$是开的，自然可以在$f(p)$附近取一个完全属于$f(U)$的小开球。因为$f$是homeomorphism，所以这个小开球的原像也在$U$内，且包含$p$。那么自然可以新设这个小开球的原像为$U$。这时$f(U)$就是一个$\mathbb{R}^{n}$中以$f(p)$为原点的小开球$B(f(p),\epsilon)$。显然存在一个从$B(f(p),\epsilon)$到$B(0,\epsilon)$的homeomorphism $\phi$。定义$\phi\circ f$为新的$f$即得到上述reduction。

显然：
$$U \setminus\{ p \}\text{ is disconnected}$$
则：
$$f^{-1}\text{ coninuous }\implies f^{-1}(U \setminus \{ p \})=B(0,\epsilon)\setminus \{ 0 \}\text{ disconnected}$$
$$\implies n=1$$
$U\setminus \{ p \}$有四个connected component。而$(-\epsilon,0)\cup(0,\epsilon)$只有两个connected component。但是由[[Lie Group#^db2309|corollary 1.4.2]]，homeomorphism应保持connected components的数目。$\rightarrow \leftarrow$

# 2.2 Compatible charts

^bd22b3

>[!Definition 1]
>Let $M$ be a locally Euclidean space, (not necessarily second countable or Hausdorff.) $(U,\phi),(V,\psi)$ be charts. Define the transition functions:
>- $\phi\circ\psi ^{-1}:\psi(U\cap V)\mapsto \phi(U\cap V)$
>- $\psi\circ\phi ^{-1}:\phi(U\cap V)\mapsto \psi(U\cap V)$

>[!Definition 2]
>Let $(U,\phi),(V,\psi)$ be charts. Then they are $C^{\infty}\text{-compatible}$ (compatible) if their transition functions $\in C^{\infty}$.

>[!Definition 3]
>Let $M$ be a locally Euclidean space. An atlas on $M$ is a set of pairwise compatible charts that cover $M$.

## Ex:
考虑$\mathbb{C}$中的单位圆$S^1$。
<div style="text-align:center">
<img src="Pasted image 20250928112331.png" width="200">
</div>
即：
$$S^1=\{ e^{it}|0 \leq t <2\pi \}$$
我们构造：
$$\begin{align}
 & U_{1}=S^{1} \setminus \{ -1 \} \\
 & U_{2}=S^{1} \setminus \{ 1 \}
\end{align}$$
则：
$$\begin{align}
 & U_{1}=\{ e^{it}|-\pi<t<\pi \} \\
 & U_{2}=\{ e^{it}|0<t<2\pi \}
\end{align}$$
构造：
$$\begin{align}
 & \phi_{1}:U_{1}\rightarrow \mathbb{R},\ e^{it}\mapsto t \\
 & \phi_{2}:U_{2}\rightarrow \mathbb{R},\ e^{it}\mapsto t
\end{align}$$
则$\phi_{1},\phi_{2}$是homeomorphism。而$(U_{1},\phi_{1}),(U_{2},\phi_{2})$是chart。

**Caveat: 如果$U_{1},U_{2}$中$t$的取值范围不是$\mathbb{R}$中开集，那么$\phi_{1}(U_{1}),\phi_{2}(U_{2})$就不是开集。那么$(U_{1},\phi_{1}),(U_{2},\phi_{2})$就不是chart。**

需要注意，$U_{1}\cap U_{2}$在$U_{1},U_{2}$中相应parameter $t$的取值范围内有两种不同的表达方式：
$$\begin{align}
U_{1}\cap U_{2} & =\{ e^{it}|-\pi<t<0,\ 0<t<\pi \} \\
 & =\{ e^{it}|0<t<\pi,\ \pi < t <2\pi \}
\end{align}$$
先来研究$\phi_{2}^{}\circ\phi_{1}^{-1}$。它的domain为：
$$\phi_{1}(U_{1}\cap U_{2})=(-\pi,0)\cup(0,\pi)$$
取$t\in(-\pi,0)$，则它的映射如下：
$$t\overset{\phi_{1}^{-1}}{\rightarrow}e^{it}\overset{\phi_{2}^{}}{\rightarrow}\pi+t$$
取$t\in(0,\pi)$，则它的映射如下：
$$t\overset{\phi_{1}^{-1}}{\rightarrow}e^{it}\overset{\phi_{2}^{}}{\rightarrow}t$$
于是：
$$\phi_{2}^{}\circ\phi_{1}^{-1}(t)=\left\{ \begin{align}
 & \pi+t,t\in(-\pi,0) \\
 & t,t\in(0,\pi)
\end{align}\right.$$
显然它是$C^{\infty}$的。再来研究$\phi_{1}^{}\circ\phi_{2}^{-1}$。它的domain为：
$$\phi_{2}(U_{1}\cap U_{2})=(0,\pi)\cup(\pi,2\pi)$$
同样容易得到：
$$\phi_{1}\circ \phi_{2}^{-1}(t)= \left\{\begin{align}
 & t, t\in(0,\pi) \\
 & t-\pi,t\in(\pi,2\pi)
\end{align}\right.$$
这两个函数显然都是$C^{\infty}$的。于是这两个chart构成一个atlas。
## Caveat
若$(U_{1},\phi_{1}),(U_{2},\phi_{2})$ compatible，且$(U_{2},\phi_{2}),(U_{3},\phi_{3})$ compatible，那么$(U_{1},\phi_{1}),(U_{2},\phi_{2})$不一定compatible。

这不是因为$U_{1}\cap U_{2}\cap U_{3}$可能为空。（如果为空，则$(U_{1},\phi_{1}),(U_{2},\phi_{2})$ trivially compatible。）这是因为我们唯一可能构造的$U_{1},U_{3}$之间的transition function为：
$$(\phi_{3}\circ\phi_{2}^{-1})\circ(\phi_{2}\circ\phi_{1}^{-1})$$
它是定义在$U_{1}\cap U_{2}\cap U_{3}$上的$C^{\infty}$函数。但是这个构造在$(U_{1}\cap{U_{3}})\setminus(U_{1}\cap U_{2}\cap U_{3})$上是无定义的。我可以随意在令$\phi_{1},\phi_{3}$在这部分复合出一个不$C^{\infty}$的transition function，而不受到题中任何限制。因此compatibiltity不是equivalence relation。

>[!Definition 4]
>A chart is compatible with an atlas if it is compatible with all charts in that atlas.

>[!Lemma 1]
>Let $\{ (U_{\alpha},\phi_{\alpha}) \}$ be an atlas, $(V,\psi),(W,\sigma)$ be charts. If $(V,\psi),(W,\sigma)$ are compatible with the atlas respectively, then they are compatible.
## Proof.
首先验证，$\sigma\circ\psi ^{-1}$在$\psi(V\cap W)$上是$C^{\infty}$的。任取$x\in \psi(V\cap W)$，则一定存在$\alpha$使得：
$$x\in \psi(V\cap W\cap U_{\alpha})$$
那么$\phi_{\alpha}\circ\psi ^{-1}$必定在$x$是$C^{\infty}$的。由于$\phi_{\alpha}\circ \psi ^{-1}(x)$在$\sigma\circ\phi_{\alpha}^{-1}$的domain之内，且$\sigma\circ \phi_{\alpha}^{-1}$是$C^{\infty}$的，那么：
$$(\sigma\circ\phi_{\alpha}^{-1})\circ(\phi_{\alpha}\circ\psi ^{-1})=\sigma\circ\psi ^{-1}|_{\psi(V\cap W\cap W_{\alpha})}\in C^{\infty}$$
而这对于任意$x\in \psi(V\cap W)$都成立。那么：
$$\sigma\circ\psi ^{-1}\in C^{\infty}$$
类似的，容易证明$\psi\circ\sigma ^{-1}\in C^{\infty}$。
>[!Right]
>$\blacksquare$

# 2.3 Smooth manifolds

^f2d166
>[!Definition 1]
>Let $M$ be a locally Euclidean space. Let $\mathfrak{M}$ be an atlas. Then $\mathfrak{M}$ is called the maximal atlas if
>$$\mathfrak{M}\subset\mathfrak{U}\text{ atlas } \implies \mathfrak{U}= \mathfrak{M}$$
## Remark
我们发现，一个locally Euclidean space可以有很多个maximal atlas。只要这些maximal atlas不相互包含就可以了。这其中并没有什么矛盾。

>[!Definition 2]
>A smooth ($C^{\infty}$) manifold is a topological manifold with a maximal atlas. Also call smooth manifolds manifolds.

>[!Proposition 1]
>Let $M$ be a locally Euclidean space. Given an atlas $\mathfrak{U}$ over $M$, $\mathfrak{U}$ must be contained in a unique maximal atlas.
## Proof.
我们先构造出一个最大的atlas，然后证明这个最大的atlas是unique的。任取一个atlas $\mathfrak{U}$，将所有和$\mathfrak{U}$ compatible的chart全部加到$\mathfrak{U}$中构成一个更大的集合$\mathfrak{M}$。

$\mathfrak{M}$显然是一个atlas。因为所有和$\mathfrak{U}$ compatible的chart都相互compatible。所以$\mathfrak{M}$中chart全部compatible。

若存在一个更大的atlas $\mathfrak{N}$ such that $\mathfrak{M}\subset\mathfrak{N}$，则任取$(U,\phi)\in\mathfrak{N}$，$(U,\phi)$必定和$\mathfrak{M}$中所有的chart compatible。$\implies$ $(U,\phi)$必定和$\mathfrak{U}$ compatible。$\implies (U,\phi)\subset\mathfrak{M}$。$\implies\mathfrak{N}\subset\mathfrak{M}\implies\mathfrak{N}=\mathfrak{M}$

现在证明这种构造是唯一的。不妨设我们按照上面相同步骤构造出$\mathfrak{M}^{'}$。则$\mathfrak{M}^{'}$中任取一个chart都和$\mathfrak{U}$ compatible，从而属于$\mathfrak{M}\implies\mathfrak{M}^{'}\subset\mathfrak{M}$。同理可证$\mathfrak{M}\subset\mathfrak{M}^{'}$。
>[!Right]
>$\blacksquare$
## Remark
从上面证明可以看出，验证一个拓扑空间是否是manifold只需要：
- 验证second countable和Hausdorff
- 找出一个atlas
我们只要找出了一个atlas，就一定可以从这个atlas拓展到一个maximal atlas。


>[!Definition 3]
>Define the projection operator:
>$$r^{i}:\mathbb{R}^n\rightarrow \mathbb{R},\ x\mapsto \text{ the ith coordinate of }x$$
>Given a manifold and a chart $(U,\phi)$, define the local coordinates on $U$ as a function: $x^{i}=r^{i}\circ\phi$
>Sometimes denote $\phi$ by $(x^1,\dots,x^n)$.

# 2.4 Examples of smooth manifolds

## Ex:
$\mathbb{R}^n$是一个光滑流形。

显然$\mathbb{R}^n$是second countable且Hausdorff的。考虑一个chart $(\mathbb{R}^n,\mathbb{1})$，$\mathbb{1}$显然是一个homeomorphism。再考虑一个atlas $\{ (\mathbb{R}^n,\mathbb{1}) \}$。因为这玩意里面只有一个chart，所以vacuously compatible，构成一个atlas。

## Ex:
令$M$为一光滑流形。则$V\subset M\text{ open}$也是一个光滑流形。

显然$V$是second countable且Hausdorff的。令$\{ (U_{\alpha},\phi_{\alpha}) \}$为$M$的一个atlas。则$\{ (U_{\alpha}\cap V,\phi_{\alpha}|_{U_{\alpha}\cap V}) \}$是$V$的一个atlas。这是因为：

任取$(U_{\alpha_{1}}\cap V,\phi_{\alpha_{1}}|_{U_{\alpha_{1}}\cap V}),(U_{\alpha_{2}}\cap V,\phi_{\alpha_{2}}|_{U_{\alpha_{2}}\cap V})$，容易证明$\phi_{\alpha_{1}}|_{U_{\alpha_{1} }\cap V},\phi_{\alpha_{2}}|_{U_{\alpha_{2}}\cap V}$都是两个开集之间的homeomorphism。现在来看它们是否compatible。略去restriction的符号不写，$\phi_{\alpha_{1}}\circ\phi_{\alpha_{2}}^{-1}$是一个restrict到$\phi_{\alpha_{2}}(U_{\alpha_{1}}\cap U_{\alpha_{2}}\cap V)$上的函数。而没有restriction时，$\phi_{\alpha_{1}}\circ\phi_{\alpha_{2}}^{-1}$是$C^{\infty}$的。任何$C^{\infty}$函数restrict到开集上还是$C^{\infty}$。于是$\phi_{\alpha_{1}}\circ\phi_{\alpha_{2}}^{-1}$restrict到$\phi_{\alpha_{2}}(U_{\alpha_{1}}\cap U_{\alpha_{2}}\cap V)$上是$C^{\infty}$的。由于对称性，另一个transition function也是$C^{\infty}$的。

## Ex:
考虑一个离散集$S$。（离散集的定义就是$|S|\leq|\mathbb{Q}|$。）则$S$是一个0-manifold。

我们先来看$\mathbb{R}^0$是什么。$\mathbb{R}^0$是一个只含有一个什么都没有的tuple的集合。即$\mathbb{R}^0=\{ () \}$。

我们定义$S$的拓扑为$P(S)$。显然$S$是second countable且Hausdorff的。任取一点$p\in S$，取开集$\{ p \}\ni p$。令$\phi:\{ p \}\rightarrow \mathbb{R}^{0},\ p\mapsto()$。显然$\phi$是一个homeomorphism。于是考虑$\{ (\{ p\in S \},\phi) \}$。这个集合中每个chart定义域都没有交集，所以trivially compatible，故构成一个atlas。

## Ex:
我们可以反过来证明，若$S$是一个0-manifold，则$S$必定为离散集。

任取$p\in S$。考虑$U\ni p\text{ open}$。则存在一个homeomorphism $\phi:U\rightarrow \mathbb{R}^0$。因为homeomorphism是双射，所以$|U|=|\mathbb{R}^0|=1$。$\implies U=\{ p \}$。$\implies \text{ S has discrete topology}$。

于是显然所有singleton set构成一个baisi。second countable$\implies$$S$中包含单个点的个数至多是可数个。

>[!Definition 1]
>Let $f:\mathbb{R}^n\rightarrow \mathbb{R}^m$ be a function. Let $f(x)=(f_{1}(x),\dots,f_{m}(x))$. We say that $f\in C^{\infty}$ if
>$$\frac{\partial^k f_{j}}{\partial x_{1}^{k_{1}} \dots \partial x_{n}^{k_{n}}}\in C^0(\mathbb{R}^n),\ \forall k\in \mathbb{N},\ k_{1}+\dots+k_{n}=k,\ j\in \{ 1,\dots,m \}$$

>[!Definition 2]
>Let $f:A \subset \mathbb{R}^n\rightarrow \mathbb{R}^m$ be a function. The graph of $f$ is:
>$$\Gamma(f)=\{ (x,f(x))|x\in A \}\subset \mathbb{R}^n\times \mathbb{R}^m$$

## Ex:
令$f:A \subset \mathbb{R}^n\rightarrow \mathbb{R}^m,\ A\text{ open},\ f\in C^{\infty}$。则$\Gamma(f)$是一个光滑流形。

直觉上来讲，$\Gamma(f)$应该是一个n-manifold，因为其自变量只有$n$个“自由度”。从$\Gamma(f)$到$\mathbb{R}^n$的homeomorphism应该大概是将graph投影到“x轴”上的算子。只不过这里的“x轴”是n维的。

定义投影算子$\phi:\mathbb{R}^n\times \mathbb{R}^m\rightarrow \mathbb{R}^n,\ (x,f(x))\mapsto x$。我们来验证$\phi$是连续的。

验证$\phi$连续只需要验证它的分量连续。提取出$\phi$的第$j$个分量$\phi_{j}(x)=x_{j}$。这玩意显然是连续的。甚至是可导的。

接下来验证$\phi ^{-1}$是连续的。显然$\phi ^{-1}:\mathbb{R}^n\rightarrow \mathbb{R}^n\times \mathbb{R}^m,\ x\mapsto(x,f(x))$。提取出$\phi ^{-1}$的第$j$个分量。这个分量要么是$f_{k}(x)\text{ for some }k$，要么是$x_{l}\text{ for some }l$。显然两者都是连续的。

$\phi$显然是injective的，于是规定了合适的codomin后它是bijective的。从而$\phi$是一个homeomorphism。

>[!Idea 1]
>若找到一个对于全空间$M$都适用的homeomorphism $\phi$，且$\phi(M)\subset \mathbb{R}^n$是开集的话，则可以直接用$(M,\phi)$ 构成一个single chart。这个single chart自然构成一个trivial atlas。

^76428d

任取$x\in A$，取$\Gamma(f) \ni x \text{ open}$。则$(\Gamma(f),\phi)$是一个chart。这个chart构成一个trivial atlas。又因为$\Gamma(f)\subset \mathbb{R}^n\times \mathbb{R}^m\text{ second countable and Hausdorff}$，所以$\Gamma(f)$是一个n-manifold。
## Remark
1. 上述证明中，若$A$不是开集，那么$\phi(\Gamma(f))$就不是一个$\mathbb{R}^n$中的开集。于是$\phi$就构不成一个chart。因为要构成chart要求$\phi$的像是$\mathbb{R}^n$中开集，而不是$\mathbb{R}^n$的某个子空间的开集。由此可见[[Lie Group#^76428d|idea 2.4.1]]中假设$\phi(M)\subset \mathbb{R}^n$为开集十分重要。
2. 其实上述证明只需要$f\in C^0$就可以证明$\Gamma(f)$是一我们定义下的个光滑n-manifold。但是有的地方对光滑流形的定义不一样，所以我们才要求$f\in C^{\infty}$。

>[!Definition 3]
>Define the general linear group:
>$$GL(n,\mathbb{R})=\{ A\in M_{n}(\mathbb{R})|A\text{ non-singular} \}$$
>where $M_{n}(\mathbb{R})$ is the group of $n\times n$ real matrices.

## Ex:
$GL(n,\mathbb{R})$是一个$n^{2}$-manifold。因为显然$M_{n}(\mathbb{R})$和$\mathbb{R}^{n^{2}}$同构，所以$GL(n,\mathbb{R})$可以看做$\mathbb{R}^{n^{2}}$的一个子集。我们直接用$\mathbb{R}^{n^{2}}$的自然拓扑定义$GL(n,\mathbb{R})$的拓扑。

接下来只用证$GL(n,\mathbb{R})$同构于$\mathbb{R}^{n^{2}}$的某个开子集$A$即可。因为一旦证到同构，根据[[Lie Group#^76428d|idea 2.4.1]]，可以构造出chart $(A,\mathbb{1})$。

注意到$\det$函数是一个关于所有矩阵元的多项式，所以$\det$连续。因此$\det ^{-1}(\mathbb{R} \setminus \{ 0 \})$是开集。而$GL(n,\mathbb{R})$正是同构于$A=\det ^{-1}(\mathbb{R} \setminus \{ 0 \})$。

## Ex:
$GL(n,\mathbb{C})$是一个$2n^{2}$-manifold。这是因为$M_{n}(\mathbb{C})$和$\mathbb{C}^{n^{2}}$同构，而$\mathbb{C}^{n^{2}}$又和$\mathbb{R}^{2n^{2}}$同构。于是$GL(n,\mathbb{C})$和$\mathbb{R}^{2n^{2}}$同构。直接用$\mathbb{R}^{2n^{2}}$的自然拓扑定义$GL(n,\mathbb{C})$的拓扑。则接下来的证明和$GL(n,\mathbb{R})$就一样了。















