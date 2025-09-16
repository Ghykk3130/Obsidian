# 1.1

>[!Definition 1]
>Given a set $S$, a topology on $S$ is $\mathcal{T}$ such that:
>- $\phi,S\in\mathcal{T}$
>- $A_{\lambda}\in S\implies\cup_{\lambda}A_{\lambda}\in \mathcal{T}$
>- $A_{\lambda}\in S\implies\cap_{\lambda\in\{1,\dots,N\}}A_{\lambda}\in \mathcal{T}$

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

# 1.2

>[! Definition 1]
>Let $(S,\mathcal{T})$ be a topological space. $\mathcal{B}\subset\mathcal{T}$ is a basis if:
>given $A\in S \text{ open}$, $\forall p\in A$, $\exists B\in\mathcal{B}$ such that $p\in B\subset A$
## Ex:
令$S=\mathbb{R}^n$。则$\mathcal{B}=\{ \text{all open balls} \}$是一个基。这是因为$\mathbb{R}^{n}$中任意一个开集，其中任取一点，显然有一个该集合中的球包含这一点。

>[!Theorem 1]
>$\mathcal{B}$ is a basis if and only if any open set is a union of sets in $\mathcal{B}$.
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



