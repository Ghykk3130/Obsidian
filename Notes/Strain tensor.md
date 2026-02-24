考虑固体当中存在形变映射$\mathbf{R}(\mathbf{r})$。那么对于固体中相隔$d\mathbf{r}$的两点，我们有：
$$\begin{align}
(dR)^{2} =|\mathbf{R}(\mathbf{r}+d\mathbf{r})-\mathbf{R}(\mathbf{r}) |^{2} & = \left(\frac{\partial \mathbf{R}}{\partial \mathbf{r}}\cdot d\mathbf{r}\right)\cdot\left( \frac{\partial \mathbf{R}}{\partial \mathbf{r}}\cdot d\mathbf{r} \right) \\
 & = \frac{\partial R_{i}}{\partial r_{j}}dr_{j} \frac{\partial R_{i}}{\partial r_{k}}dr_{k} \\
\end{align}$$
那么形变量为：
$$\begin{align}
(dR)^{2}-(dr)^{2} & = \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}dr_{j}dr_{k}- dr_{i}^{2} \\
 & = \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}dr_{j}dr_{k}- \delta_{jk}dr_{j}dr_{k} \\
 & = \left( \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}-\delta_{jk} \right)dr_{j}dr_{k}
\end{align}$$
令形变梯度为$\boldsymbol{\Lambda}=\frac{\partial \mathbf{R}}{\partial \mathbf{r}}$。那么不妨定义strain tensor：

>[!Note] Definition 1
>Define the strain tensor:
>$$\epsilon_{jk}= \Lambda_{ij}\Lambda_{ik}-\delta_{jk}$$


