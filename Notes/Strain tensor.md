考虑固体当中存在形变映射$\mathbf{R}(\mathbf{r})$。那么对于固体中相隔$d\mathbf{r}$的两点，我们有：
$$\begin{align}
(dR)^{2} =|\mathbf{R}(\mathbf{r}+d\mathbf{r})-\mathbf{R}(\mathbf{r}) |^{2} & = \left(\frac{\partial \mathbf{R}}{\partial \mathbf{r}}\cdot d\mathbf{r}\right)\cdot\left( \frac{\partial \mathbf{R}}{\partial \mathbf{r}}\cdot d\mathbf{r} \right) \\
 & = \frac{\partial R_{i}}{\partial r_{j}}dr_{j} \frac{\partial R_{i}}{\partial r_{k}}dr_{k} \\
\end{align}$$
那么，度规由$\delta_{jk}$变为$\frac{\partial R_{i}}{\partial r_{j}}  \frac{\partial R_{i}}{\partial r_{k}}$。那么形变量为：
$$\begin{align}
(dR)^{2}-(dr)^{2} & = \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}dr_{j}dr_{k}- dr_{i}^{2} \\
 & = \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}dr_{j}dr_{k}- \delta_{jk}dr_{j}dr_{k} \\
 & = \left( \frac{\partial R_{i}}{\partial r_{j}} \frac{\partial R_{i}}{\partial r_{k}}-\delta_{jk} \right)dr_{j}dr_{k}
\end{align}$$
令形变梯度为$\boldsymbol{\Lambda}=\frac{\partial \mathbf{R}}{\partial \mathbf{r}}$。那么不妨定义strain tensor为度规的变化，代表形变的程度：

>[!Note] Definition 1
>Define the strain tensor:
>$$\epsilon_{jk}= \frac{1}{2}(\Lambda_{ij}\Lambda_{ik}-\delta_{jk})$$

Strain tensor是$\{ \mathbf{r} \}$上的张量场。所以$\boldsymbol{\epsilon}=\boldsymbol{\epsilon}(\mathbf{r})$。我们假设弹性能密度是strain tensor的泛函，即$u=u(\boldsymbol{\epsilon})$。在平衡位置附近展开得到：
$$u(\boldsymbol{\epsilon}_{0}+d\boldsymbol{\epsilon})\approx u(\boldsymbol{\epsilon}_{0})+ \frac{\partial u}{\partial \epsilon_{ij}} d\epsilon_{ij}+ \frac{1}{2} \frac{\partial^{2}u}{\partial\epsilon_{ij}\partial\epsilon_{kl}}d\epsilon_{ij}d\epsilon_{kl}= u(\epsilon_{0})+ \frac{1}{2} \frac{\partial^{2}u}{\partial\epsilon_{ij}\partial\epsilon_{kl}}d\epsilon_{ij}d\epsilon_{kl}$$

