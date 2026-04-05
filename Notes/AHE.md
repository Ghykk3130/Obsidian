# 1. Skew scattering 机制

考虑电子在杂质离子附近运动。杂质离子的电场通过spin-orbit coupling耦合，产生能量：
$$H_{\text{SO}}=\lambda_{\text{SO}}(\nabla V \times \mathbf{v})\cdot \mathbf{S}$$
我们采用半经典视角，求出力：
$$\begin{align}
\mathbf{F}_{\text{SO}} & =-\nabla H_{\text{SO}} \\
 & = -\lambda_{\text{SO}}\nabla[(\mathbf{S}\times \mathbf{v})\cdot \nabla V] \\
 & = -\lambda_{\text{SO}}(\mathbf{S}\times \mathbf{v})\cdot \nabla \nabla V 
\end{align}$$

>[!Quote] 为什么$\mathbf{S}\times \mathbf{v}$可以提出来？
>在通过势能求得力的时候，我们将速度和位置当做独立坐标。即$\mathbf{F}=-\nabla U(\mathbf{r},\mathbf{v})$时，$\nabla$仅对$\mathbf{r}$作用。这是合理的。回忆起正则方程：
>$$\dot{\mathbf{p}}=- \frac{\partial H}{\partial \mathbf{r}}$$
>这里$(\mathbf{r},\mathbf{p})$时独立的正则坐标。而$\dot{\mathbf{p}}$正是力的定义。所以求导应当只对坐标求导。

假设$V=V(\mathbf{r})$是球对称势。那么：
$$\begin{align}
(\mathbf{S}\times \mathbf{v})\cdot \nabla \nabla V & = (\mathbf{S}\times \mathbf{v})_{r} \frac{\partial}{\partial r}\left(  \frac{\partial V}{\partial r}  \hat{\mathbf{r}} \right) \\
 & = (\mathbf{S}\times \mathbf{v})_{r} \frac{\partial^{2}V}{\partial \mathbf{r}}  \hat{\mathbf{r}}
\end{align}$$
若电子在xy面内绕杂质离子作圆周运动，自旋沿z方向极化，那么：
$$\mathbf{F}_{\text{SO}}= \lambda_{0}e  \mathbf{v}\times \mathbf{S}$$
则半经典输运方程给出：
$$m^{*} \frac{d\mathbf{v}}{dt}= - \frac{m^{*}\mathbf{v}}{\tau}+e\mathbf{E}+\lambda_{0}e\mathbf{v}\times \mathbf{S}$$
稳态输运中，令LHS为零。我们在y方向通电流，在x方向断路测电压。x方向方程为：
$$\begin{align}
 & 0= eE_{x}+\lambda_{0}ev_{y}S \\
\implies & E_{x}\propto S j_{y}\implies \rho_{xy}\propto S\propto M
\end{align}$$


