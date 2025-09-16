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

令$(S,\mathcal{T})$为一拓扑空间，取$A\subset S$。我们发现$\{A\cap B|B\in \mathcal{T}\}$具有拓扑的性质。任取$A\$



 
