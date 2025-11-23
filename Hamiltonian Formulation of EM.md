
考虑一个带电粒子$e$在电磁场中运动。其Lagrangian为：
$$L=\frac{1}{2}mv^{2}-e\phi+e\vec{v}\cdot \vec{A}$$
我们有正则坐标$\vec{r}$，以及相对应的正则动量：
$$\vec{p}= \frac{\partial L}{\partial \vec{v}}=m\vec{v}+e\vec{A}$$
我们考虑Legendre变换：
$$\begin{align}
 & dL= \frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ \frac{\partial L}{\partial \vec{v}}\cdot d\vec{v} \\
\implies & dL= \frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ d\left( \frac{\partial L}{\partial \vec{v}}\cdot \vec{v} \right)- \vec{v}\cdot d\left( \frac{\partial L}{\partial \vec{v}} \right)=\frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ d(\vec{p}\cdot \vec{v})-\vec{v}\cdot d\vec{p} \end{align}$$
原来$\vec{r},\vec{v}$是独立坐标。现在将$\vec{r},\vec{p}$选择为独立坐标。那么我们有：
$$\begin{align}
& d(\vec{p}\cdot \vec{v}-L)= \frac{\partial}{\partial \vec{r}}(\vec{p}\cdot \vec{v}-L)\cdot d\vec{r}+ \frac{\partial}{\partial \vec{p}}(\vec{p}\cdot \vec{v}-L )\cdot d\vec{p} \\
\implies & dH= \frac{\partial H}{\partial \vec{r}}\cdot d\vec{r}+\frac{\partial H}{\partial \vec{p}}\cdot d\vec{p}
\end{align}$$
其中必须存在：
$$\begin{align}
 & H=\vec{p}\cdot \vec{v}-L 
\end{align}$$于是：
$$\begin{align}
H & =\vec{p}\cdot \vec{v}-L \\
 & = mv^{2}+e\vec{v}\cdot \vec{A}-\left( \frac{1}{2}mv^{2}-e\phi+e\vec{v}\cdot \vec{A} \right) \\
 & = \frac{1}{2}mv^{2}+e\phi \\
 & = \frac{1}{2m}|\vec{p}-e\vec{A} |^{2}+e\phi
\end{align}$$
## Remark
注意，其中的$\vec{p}$不是机械动量，而是正则动量。

