
考虑具有DM作用的系统的自由能泛函：
$$\begin{align}
F[\mathbf{M}] & = \int d^{3}r[J(\nabla \mathbf{M})^{2}+2D\mathbf{M}\cdot(\nabla \times \mathbf{M})+r_{0}M^{2}+UM^{4}-\mathbf{B}\cdot \mathbf{M}]
\end{align}$$
其中$r_{0}M^{2}+UM^{4}$为Landau铁磁项，$-\mathbf{B}\cdot \mathbf{M}$为Zeeman项。我们考虑一个ansatz：
$$\mathbf{M}(\mathbf{r})=\mathbf{M}_{0}+\sum_{j}\mathbf{m}_{\mathbf{q}_{j}}e^{i\mathbf{q}_{j}\cdot \mathbf{r}}$$
为保证$\mathbf{M}$是实的，令$\mathbf{m}_{-\mathbf{q}_{j}}=\mathbf{m}_{\mathbf{q}_{j}}^{*}$。

接下来计算：
$$\begin{align}
(\nabla \mathbf{M})_{ij} & = \partial_{i}M_{j} \\
 & = \partial_{i}(m_{\mathbf{q}_{k}})_{j}e^{i\mathbf{q}_{k}\cdot \mathbf{r}} \\ & = i(\mathbf{q}_{k})_{i}(m_{\mathbf{q}_{k}})_{j}e^{i\mathbf{q}_{k}\cdot \mathbf{r}}
\end{align}$$
所以：
$$(\nabla \mathbf{M})^{2}= |(\nabla \mathbf{M})_{ij}|^{2}=(\mathbf{q}_{k})_{i}^{2}(m_{\mathbf{q}_{k}})_{j}^{2}=q^{2} m_{\mathbf{q}_{k}}^{2}$$
接下来：
$$\begin{align}
\mathbf{M}\cdot(\nabla \times \mathbf{M}) & = M_{i} \epsilon_{ijk}\partial_{j}M_{k} \\
 & = \epsilon_{ijk} ((M_{0})_{i}+(m_{\mathbf{q}_{l}})_{i }e^{i\mathbf{q}_{l}\cdot \mathbf{r}} ) \partial_{j}((m_{\mathbf{q}_{n}})_{k}e^{i\mathbf{q}_{n}\cdot \mathbf{r}}) \\
 & = \epsilon_{ijk}((M_{0})_{i}+(m_{\mathbf{q}_{l}})_{i}e^{i\mathbf{q}_{l}\cdot \mathbf{r}})i(\mathbf{q}_{n})_{j}(m_{\mathbf{q}_{n}})_{k}e^{i\mathbf{q}_{n}\cdot \mathbf{r}} \\
 & = i \epsilon_{ijk}(M_{0})_{i}(\mathbf{q}_{n})_{j}(m_{\mathbf{q}_{n}})_{k}e^{i\mathbf{q}_{n}\cdot \mathbf{r}}+i\epsilon_{ijk}(m_{\mathbf{q}_{l}})_{i}(\mathbf{q}_{n})_{j}(m_{\mathbf{q}_{n}})_{k}e^{i(\mathbf{q}_{l}+\mathbf{q}_{n})\cdot \mathbf{r}} \\
 & = i\mathbf{M}_{0}\cdot(\mathbf{q}_{n}\times \mathbf{m}_{\mathbf{q}_{n}})e^{i\mathbf{q}_{n}\cdot \mathbf{r}}+i \mathbf{m}_{\mathbf{q}_{l}} \cdot(\mathbf{q}_{n}\times \mathbf{m}_{\mathbf{q}_{n}})e^{i(\mathbf{q}_{l}+\mathbf{q}_{n})\cdot \mathbf{r}}
\end{align}$$

