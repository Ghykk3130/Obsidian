# 1. Hohenberg-Kohn定理

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

>[!Success] Theorem 1.1 (Hohenberg-Kohn theorem)
>The addable potential $v$ is a one to one mapping of the ground state electron density $n$.
## Proof.

首先，如果$v$确定，那么$\Psi$显然唯一确定，那么基态电子密度$n$也唯一确定。

如果$n$确定，假设存在两个可加势$v_{1},v_{2}$，且$v_{1}(\mathbf{r})-v_{2}(\mathbf{r})\neq\text{ const.}$。令：
$$\begin{align}
 & H_{1}=T+V_{\text{ee}}+\sum_{i} v_{1}(\mathbf{r}_{i}) \\
 & H_{2}=T+V_{\text{ee}}+\sum_{i}v_{2}(\mathbf{r}_{i})
\end{align}$$
它们分别解出基态波函数为$\Psi_{1},\ \Psi_{2}$。那么考虑：
$$\begin{align}
E_{1} & = \bra{\Psi_{1}} H_{1} \ket{\Psi_{1}}  \\
 & = \bra{\Psi_{1}} (T+V_{\text{ee}})\ket{\Psi_{1}} + \sum_{i} \int d^{3}r_{1}\dots d^{3}r_{N}|\Psi|^{2} v_{1}(\mathbf{r}_{i}) \\
 & = \bra{\Psi_{1}} (T+V_{\text{ee}})\ket{\Psi_{1}} + \int d^{3}r v_{1}(\mathbf{r})n(\mathbf{r})
\end{align}$$
$$\begin{align}
E_{2} & = \bra{\Psi_{2}} (T+V_{\text{ee}} )\ket{\Psi_{2}} +\int d^{3}rv_{2}(\mathbf{r})n(\mathbf{r})
\end{align}$$
由于$\Psi_{2}$并不是$H_{1}$的基态，那么
$$\begin{align}
E_{1}<\bra{\Psi_{2}} H_{1}\ket{\Psi_{2}}  & = \bra{\Psi_{2}} (T+V_{\text{ee}})\ket{\Psi_{2}} +\int d^{3}rv_{1}(\mathbf{r})n(\mathbf{r}) \\
 & = E_{2}+\int d^{3}r(v_{1}-v_{2}) n
\end{align}$$
同理：
$$\begin{align}
E_{2}< \bra{\Psi_{1}} H_{2}\ket{\Psi_{1}}   & = E_{1}+\int d^{3}r(v_{2}-v_{1})n
\end{align}$$
相加得到$E_{1}+E_{2}<E_{1}+E_{2}\ \rightarrow \leftarrow$。所以$v$是up to a constant唯一确定的。
>[!Right]
>$\blacksquare$

那么如果确定基态电子密度$n$，就确定了hamiltonian。然后系统的任何性质就都确定了。于是$T,V_{\text{ee}}$就都是$n$的泛函。基态总能量写为：
$$E(n)= T(n)+V_{\text{ee}}(n)+\int d^{3}rvn $$
我们只需要对于$n$最小化$E(n)$即可。

# 2. 

定义电子的自作用为Hartree能：
$$V_{H}= \frac{1}{2} \frac{1}{4\pi\epsilon_{0}}\int d^{3}r d^{3}r^{'} \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|^{2}}n(\mathbf{r}^{})n(\mathbf{r}^{'})$$
其中$\frac{1}{2}$是为了减去重复计数。这个自作用并不是精确的，只是一个经典的naive近似。那么能量泛函写为：
$$\begin{align}
E(n) & = T(n)+V_{\text{ee}}(n)+\int d^{3}r vn \\
 & = T_{0}(n)+ V_{H}(n)+ \int d^{3}r vn+E_{\text{ex}}(n)
\end{align}$$
其中，$T_{0}$为电子密度为$n$的自由电子气的动能。交换能$E_{\text{ex}}$定义为：
$$E_{\text{ex}}= T-T_{0}+V_{\text{ee}}-V_{H}$$

