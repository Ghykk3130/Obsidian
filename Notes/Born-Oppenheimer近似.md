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
 & = \sum_{m}\phi_{m}T_{e}\chi_{m}+\sum_{m}\phi_{m}(V_{e e}+V_{en})\chi_{m} \\
 & = \sum_{m}\phi_{m}E_{m}\chi_{m}
\end{align}$$
还知道：
$$\begin{align}
T_{n}(\mathbf{R})\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R}) & = - \frac{\hbar^{2}}{2M}\sum_{j} \nabla^{2}_{\mathbf{R}_{j}}\sum_{m}\phi_{m}\chi_{m}
\end{align}$$
其中$M$为离子质量。我们计算：
$$\begin{align}
\nabla^{2}_{\mathbf{R}_{j}}\sum_{m}\phi_{m}\chi_{m} & = \nabla_{\mathbf{R}_{j}}\cdot \sum_{m}(\chi_{m}\nabla_{\mathbf{R}_{j}} \phi_{m}+\phi_{m}\nabla_{\mathbf{R}_{j}} \chi_{m}) \\
 & = \sum_{m}(\chi_{m}\nabla^{2}_{\mathbf{R}_{j}}\phi_{m}+(\nabla_{\mathbf{R}_{j}}\phi_{m})\cdot \nabla_{\mathbf{R}_{j}}\chi_{m}+\phi_{m}\nabla^{2}_{\mathbf{R}_{j}}\chi_{m}+(\nabla_{\mathbf{R}_{j}}\chi_{m})\cdot \nabla_{\mathbf{R}_{j}}\phi_{m} ) \\
 & = \sum_{m}(\chi_{m}\nabla^{2}_{\mathbf{R}_{j}}\phi_{m}+\phi_{m}\nabla^{2}_{\mathbf{R}_{j}}\chi_{m}+2(\nabla_{\mathbf{R}_{j}}\phi_{m})\cdot(\nabla_{\mathbf{R}_{j}}\chi_{m}))
\end{align}$$
所以：
$$\begin{align}& (H_{e}+T_{n}(\mathbf{R})+V_{nn}(\mathbf{R}))\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R})=E\sum_{m}\phi_{m}(\mathbf{R})\chi_{m}(\mathbf{r},\mathbf{R}) \\
 \implies& \sum_{m}\phi_{m}E_{m}\chi_{m}+ \sum_{m}T_{n} \phi_{m}\chi_{m}+\sum_{m}V_{nn}\phi_{m}\chi_{m} = \sum_{m}E\phi_{m}\chi_{m} \\
\implies & \sum_{m}\phi_{m}E_{m}\chi_{m}- \frac{\hbar^{2}}{2M}\sum_{j,m}(\chi_{m}\nabla^{2}_{\mathbf{R}_{j}}\phi_{m}+\phi_{m}\nabla^{2}_{\mathbf{R}_{j}}\chi_{m}+2(\nabla_{\mathbf{R}_{j}}\phi_{m})\cdot(\nabla_{\mathbf{R}_{j}}\chi_{m}))+\sum_{m}V_{nn}\phi_{m}\chi_{m}=\sum_{m}E\phi_{m}\chi_{m}
\end{align}$$
两边同时乘以$\chi_{k}^{*}$，并对$\mathbf{r}$积分得到：
$$\begin{align}
 & \phi_{k}E_{k}- \frac{\hbar^{2}}{2M}\sum_{j}\nabla^{2}_{\mathbf{R}_{j}}\phi_{m}- \frac{\hbar^{2}}{2M}\sum_{j,m}\chi ^{*}_{k}[\phi_{m}\nabla^{2}_{\mathbf{R}_{j}}\chi_{m}+2(\nabla_{\mathbf{R}_{j}}\phi_{m})\cdot(\nabla_{\mathbf{R}_{j}}\chi_{m})] +V_{nn}\phi_{k}=E\phi_{k} \\
\implies & \left[ - \frac{\hbar^{2}}{2M}\sum_{j}\nabla^{2}_{\mathbf{R}_{j}}+V_{nn}+E_{k}-E\right]\phi_{k}= \sum_{m}\Lambda_{km}\phi_{m} \\
 & \text{where }\Lambda_{km}= \frac{\hbar^{2}}{2M}\sum_{j}\chi_{k}^{*} (\nabla^{2}_{\mathbf{R}_{j}}\chi_{m}+2(\nabla_{\mathbf{R}_{j}}\chi_{m})\cdot \nabla_{\mathbf{R}_{j}})
\end{align}$$
到目前为止，结果都是精确的。接下来，我们作数量级估计：
$$\nabla_{\mathbf{R}_{j}}\sim \frac{1}{a}\text{ where }a\text{ is the characterestic length of ions}$$
而$\chi_{m}$仅在原子尺度上显著，$\phi_{\mathbf{k}}$在离子尺度上显著。所以$\chi_{m}$对于$|\nabla_{\mathbf{R}_{j}}\chi_{m}|\ll |\nabla_{\mathbf{R}_{j}\phi_{k}}|$。所以比起等号左手边，$\Lambda_{km}\approx 0$。

于是：
$$(T_{n}(\mathbf{R})+V_{nn}(\mathbf{R}))\phi_{k}(\mathbf{R})=(E_{k}-E)\phi_{k}(\mathbf{R})$$
我们陈述结果：

>[!Note] Born-Oppenheimer approximation
>In solving the Schrodinger equation:
>$$(T_{e}(\mathbf{r})+V_{e e}(\mathbf{r})+T_{n}(\mathbf{R})+V_{nn}(\mathbf{R})+V_{en}(\mathbf{r},\mathbf{R}))\psi=E\psi $$
>We can assume that:
>$$\begin{align}
 & \psi(\mathbf{r},\mathbf{R})=\phi(\mathbf{R})\chi({\mathbf{r},\mathbf{R}}
)\end{align}$$
>where:
>$$\begin{align}
 & (T_{e}+V_{e e}+V_{en})\chi=E_{e}\chi \\
 & (T_{n}+V_{nn})\phi=E_{n}\phi
\end{align}$$
And
$$E=E_{e}+E_{n}$$




