# 1. N维球体积
我们想要计算：
$$m(B(0,R))=\int_{B(0,R)}d^Nx$$
我们注意到一个方便计算的$\mathbb{R}^N$中的积分：
$$\begin{align}
\int_{\mathbb{R}^N}d^Nx\exp\left( -  \sum_{j }x_{j}^{2}  \right) & = \int_{-\infty}^{\infty}dx_{1} \exp(-x_{1}^{2})\dots \int_{-\infty}^{\infty}dx_{N}\exp(-x_{N}^{2}) \\
 & = \pi^{N/2}
\end{align}\tag{*}$$
我们注意到，整个积分范围可以拆分成一层一层的球壳。则：
$$d^Nx=dm(B(0,R))= \frac{\partial}{\partial R}m(B(0,R))dR$$
而：
$$\begin{align}
\frac{\partial}{\partial R}m(B(0,R)) & = \frac{\partial}{\partial R}\left( \int_{B(0,R)}d^Nx \right)  \\
 & = \frac{\partial}{\partial R}\left(R^N\int_{B(0,1)}d^Nx\right) \\
 & = NR^{N-1}\int_{B(0,1)} d^Nx
\end{align}$$
于是代入$(*)$便有：
$$\begin{align}
\int_{0}^{\infty}dR\ NR^{N-1}\exp(-R^{2}) \left(\int_{B(0,1)}d^Nx\right) & =\pi^{N/2} \\
\implies \frac{N}{2}\Gamma\left(  \frac{N}{2} \right) \left( \int_{B(0,1)}d^Nx \right)  & = \pi^{N/2} \\
\implies \int_{B(0,1)}d^Nx & = \frac{\pi^{N/2}}{\frac{N}{2}\Gamma\left(  \frac{N}{2} \right)}
\end{align}$$
所以：
$$\int_{B(0,R)}d^Nx= \frac{\pi^{N/2}}{ \frac{N}{2}\Gamma\left(  \frac{N}{2} \right)}R^N \tag{**}$$
# 2. N维球面积

我们知道测度可以拆分：
$$d^Nx=dRdS$$于是N维球体积积分可以拆分：
$$\begin{align}
m(B(0,R))=\int_{B(0,R)}d^Nx & =\int_{0}^{R}dR^{'}\int_{\partial B(0,R^{'})}dS
\end{align}$$
两边微分得到表面积：
$$\frac{\partial}{\partial R}m(B(0,R))= \int_{\partial B(0,R)}dS$$

代入$(* *)$得到：
$$\int_{\partial B(0,R)}dS= \frac{2\pi^{N/2}}{\Gamma\left(  \frac{N}{2} \right) }R^{N-1}$$
