考虑一个离子与电子构成的电中性体系。则体系总hamiltonian为：
$$\begin{align}
H & = T_{e}(\mathbf{r})+V_{e e}(\mathbf{r})+T_{n}(\mathbf{R})+V_{nn}(\mathbf{R})+V_{en}(\mathbf{r},\mathbf{R})
\end{align}$$
其中，$\mathbf{r},\mathbf{R}$为所有电子，离子的collective coordinates。$V_{ee},V_{nn},V_{en}$为库伦作用。

我们定义电子hamiltonian：
$$\begin{align}
H_{e} & = T_{e}(\mathbf{r})+V_{ee}(\mathbf{r})+ V_{en}(\mathbf{r},\mathbf{R})
\end{align}$$
将$\mathbf{R}$视为参数，可以解得波函数$\chi_{m}(\mathbf{r},\mathbf{R})$满足：
$$H_{e}\chi_{m}=E_{m}\chi_{m}$$
由于$\chi_{n}$构成Hilbert空间完备基，我们可以展开系统总波函数：
$$\psi(\mathbf{r},\mathbf{R})= \sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R})$$
>[!Quote] 为什么展开系数$\phi_{n}=\phi_{n}(\mathbf{R})$一定是$\mathbf{R}$的函数？
>这是因为存在正交关系：
>$$\int d^{3}r \chi_{m^{'}}^{*}(\mathbf{r},\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R})=\delta_{m^{'}m}$$
>故：
>$$\phi_{m}= \int d^{3}r \psi(\mathbf{r},\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R})$$
>$\mathbf{r}$被积掉了。

那么接下来：
$$\begin{align}
 & (H_{e}+T_{n}(\mathbf{R})+V_{nn}(\mathbf{R}))\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R})=E\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R}) \\
\end{align}$$
我们知道：
$$\begin{align}
H_{e}\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R}) & = \left( T_{e}(\mathbf{r})+V_{e e}(\mathbf{r})+V_{en}(\mathbf{r},\mathbf{R})  \right)\sum_{m}\phi_{m}\chi_{m} \\
 & = \sum_{m}\phi_{m}T_{e}\chi
\end{align}$$







令$\mathbf{R}_{n}$为离子平衡位置。我们作：
$$\begin{align}
H & = (T_{e}(\mathbf{r})+V_{e e}(\mathbf{r})+V_{en}(\mathbf{r},\mathbf{R}_{n}) )+T_{n}(\mathbf{R})+V_{nn}(\mathbf{R})+V_{en}(\mathbf{r},\mathbf{R})-V_{en}(\mathbf{r},\mathbf{R}_{n}) \\
 
\end{align}$$
可以定义电子Hamiltonian：
$$H_{e}(\mathbf{r},\mathbf{R}_{n})=T_{e}(\mathbf{r})+V_{e e}(\mathbf{r})+V_{en}(\mathbf{r},\mathbf{R}_{n})$$
其中$\mathbf{R}_{n}$为固定参数。

令电子波函数为$\chi_{m}(\mathbf{r})$。这构成Hilbert空间的完备基。接下来可以将总波函数展开：
$$\psi(\mathbf{r},\mathbf{R})=\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r})$$
>[!Quote] 为什么$\phi_{m}=\phi_{m}(\mathbf{R})$ ？
>因为我们有：
>$$\begin{align}
\phi_{m} & = \int d^{3}r \psi(\mathbf{r},\mathbf{R})\chi_{m}^{*}(\mathbf{r})
\end{align}$$

