# Table of contents

## 1. Point-set topology
1.1 [[Lie Group#^56c0f4|Topology and subspace]]
1.2 [[Lie Group#^599821|Basis]]
1.3 [[Lie Group#^b7fdc8|Second and first countability]]
1.4 [[Lie Group#^370a40|Separation]]

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


# 1.5 Product topology

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

>[!Definition 4]
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


