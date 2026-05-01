考虑多电子体系hamiltonian：
$$H=T+V+V_{\text{ee}}$$
其中$V=\sum_{i}v(\mathbf{r}_{i})$为可加势能，$V_{\text{ee}}$为相互作用能。我们先来研究多体波函数与电子密度的关系。考虑电子密度算子$\sum_{i}\delta(\mathbf{r}-\mathbf{r}_{i})$。那么：
$$\begin{align}
n(\mathbf{r}) & = \int d^{3}r_{1}\dots d^{3}r_{N} \Psi^{*} \sum_{i}\delta(\mathbf{r}-\mathbf{r}_{i})\Psi \\
 & = \sum_{i} \int d^{3}r_{1}\dots d^{3}r_{N}\delta(\mathbf{r}-\mathbf{r}_{i})|\Psi|^{2} \\
 & = \sum_{i}\int d^{3}r_{2}\dots d^{3}r_{N}|\Psi(\mathbf{r},\mathbf{r}_{2},\dots,\mathbf{r}_{N})|^{2} \\
 & = N \int d^{3}r_{2}\dots d^{3}r_{N}|\Psi(\mathbf{r},\mathbf{r}_{2},\dots,\mathbf{r}_{N})|^{2}
\end{align}$$
其中第二步到第三步是因为交换任意两个位置，只会多出一个负号。

我们接下来证明Hohenberg-Kohn定理：

>[!Success] Theorem 1 (Hohenberg-Kohn theorem)
>The addable potential $v$ is a one to one mapping of the electron density $n$.
## Proof.

首先，如果$v$确定，那么$\Psi$显然唯一确定，那么$n$也唯一确定。

如果$n$确定，假设存在两个可加势$v_{1},v_{2}$，且$v_{1}(\mathbf{r})-v_{2}(\mathbf{r})\neq\text{ const.}$。令：
$$\begin{align}
 & H_{1}=T+V_{\text{ee}}+\sum_{i} v_{1}(\mathbf{r}_{i}) \\
 & H_{2}=T+V_{\text{ee}}+\sum_{i}v_{2}(\mathbf{r}_{i})
\end{align}$$

它们分别解出的波函数为$\Psi_{1},\ \Psi_{2}$。那么考虑：
$$\begin{align}
E_{1} & = \bra{\Psi_{1}} H_{1} \ket{\Psi_{1}}  \\
 & = \bra{\Psi_{1}} (T+V_{\text{ee}})\ket{\Psi_{1}} + \sum_{i} \int d^{3}r_{1}\dots d^{3}r_{N}|\Psi|^{2} v_{1}(\mathbf{r}_{i})
\end{align}$$