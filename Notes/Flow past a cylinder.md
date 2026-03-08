考虑一个无限长圆柱，半径$r_{0}$。假设流动对于$z$有平移对称性，可以用极坐标描述系统。则存在Laplace方程：
$$\begin{align}
 & \nabla^{2}\phi=0 \\
\implies &  \left[\frac{1}{r} \frac{\partial}{\partial r}\left( r \frac{\partial}{\partial r} \right)+ \frac{1}{r^{2}} \frac{\partial^{2}}{\partial \theta^{2}}\right]\phi=0
\end{align}$$
我们有边界条件：

>[!Success] Proposition 1
>We have the boundary conditions:
>$$\begin{align}
 & u|_{r=\infty}=U  \hat{\mathbf{x}} \\
 & u_{r}|_{r=r_{0}}=0
\end{align}$$
## Proof.

在无穷远处，必有：
$$\mathbf{u}|_{r=\infty}=U  \hat{\mathbf{x}}$$
在圆柱体表面，必有：
$$\begin{align}
 & \frac{D}{Dt}(r-r_{0})=0 \\
\implies & \dot{r}=0
\end{align}$$
注意到：
$$\begin{align}
 & \mathbf{r}=r  \hat{\mathbf{r}} \\
\implies & \mathbf{u}= \dot{r}  \hat{\mathbf{r}}+ r \boldsymbol{\omega}\times  \hat{\mathbf{r}}\implies u_{r}= \dot{r}
\end{align}$$
所以：
$$\begin{align}
u_{r}|_{r=r_{0}}=0
\end{align}$$
>[!Right]
>$\blacksquare$

我们知道Laplace方程存在通解：
$$\begin{align}
\phi(r,\theta) & = (A_{0}+B_{0}\ln r)(C_{0}+ D_{0}\theta)+\sum_{n=1}^{\infty}\left( A_{n}r^{n}\cos(n\theta+\alpha_{n})+ \frac{B_{n}}{r^{n}}\cos(n\theta+\beta_{n}) \right)
\end{align}$$
我们来匹配边界条件。不妨先令$A_{0},B_{0},C_{0},D_{0}=0$。我们求速度。注意到无穷远处，我们有：
$$\begin{align}
\mathbf{u} & = U  \hat{\mathbf{x}} \\
 & = U(\cos \theta  \hat{\mathbf{r}}-\sin \theta  \hat{\boldsymbol{\theta}})
\end{align}$$
所以求和中只能保留$n=1$项，得到：
$$\phi(r,\theta)=U r \cos \theta+ \frac{B_{1}}{r}\cos \theta$$
我们考虑$u_{r}|_{r=r_{0}}=0$，得到：
$$\phi(r,\theta)= U\cos \theta\left(r+ \frac{r_{0}^{2}}{r}\right)$$
我们求出速度场：
$$\mathbf{u}(r,\theta)=\left( \hat{\mathbf{r}} \frac{\partial}{\partial r}+ \hat{\boldsymbol{\theta}} \frac{1}{r} \frac{\partial}{\partial \theta} \right)\phi=  \hat{\mathbf{r}}U \cos \theta\left(  1- \frac{r_{0}^{2}}{r^{2}} \right)- \hat{\boldsymbol{\theta}} \frac{1}{r} \sin \theta\left(  r+ \frac{r_{0}^{2}}{r} \right)$$
定义：

>[!Note] Definition 1
>Define the stagnation points as points such that $|\mathbf{u}|=0$

那么可以求出stagnation point： $r=r_{0},\ \theta=0,\ \pi$


注意到第一项$(A_{0}+B_{0}\ln r)(C_{0}+D_{0}\theta)$引出的速度为：
$$  \hat{\mathbf{r}} \frac{B_{0}}{r}(C_{0}+D_{0}\theta)+  \hat{\boldsymbol{\theta}} \frac{1}{r}D_{0}(A_{0}+B_{0}\ln r)\rightarrow 0\text{ as }r\rightarrow \infty$$
所以不受影响。