# 1. Linear potential

对于任意一个线性势能$V(x)=kx$，我们可以化简Schrodinger方程为Airy方程。首先写出Schrodinger方程：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+kx\psi=E\psi \implies \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(-kx+E)\psi=0
\end{align}$$
令$y = ax$，则：
$$\begin{align}
\frac{\hbar^{2}}{2m}a^{2} \frac{d^{2}}{dy^{2}}\psi+\left( -\frac{k}{a}y+E \right)\psi=0
\end{align}$$
Set $\frac{\hbar^{2}}{2m}a^{2}=1, \frac{k}{a}=b$，则：
$$\begin{align}
 & \frac{d^{2}}{dy^{2}}\psi+(-by+E)\psi=0 \\
 \implies &  \frac{d^{2}}{b^{2/3}dy^{2}}\psi+\left( -b^{1/3}y+ \frac{E}{b^{2/3}} \right)\psi=0
\end{align}$$
Set $\xi= b^{1/3}y- \frac{E}{b^{2/3}}$，则：
$$\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0$$
>[!Note] Definition 1
>Define the Airy equation: $\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0$
>Call the particular solutions to the Airy equation Airy functions. Write $Ai(\xi),Bi(\xi)$. 

# 2. WKB

考虑一个任意的势阱$V(x)$，我们想估计波函数。定义classical turning point为$x_{0}\text{ s.t. }V(x_{0})=E$。假设$V(x_{0})^{'}\neq 0$。

**classical turning point两侧较远区域：**

我们有：
$$- \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(V-E)\psi=0\implies \frac{d^{2}}{dx^{2}}\psi+ \frac{2m(E-V)}{\hbar^{2}}\psi=0$$
Set $k(x):= \sqrt{ \frac{2m(E-V)}{\hbar^{2}} }$，则Schrodinger方程可以写为：
$$\frac{d^{2}}{dx^{2}}\psi+k(x)^{2}\psi=0$$
我们猜近似解$\psi(x)=\exp\left( \frac{i}{\hbar}W(x) \right)$，则$W(x)$需满足：
$$\frac{i}{\hbar} \frac{d^{2}}{dx^{2}}W- \frac{1}{\hbar^{2}}\left(  \frac{d}{dx}W \right)^{2}+k^{2}=0 \tag{*}$$
假设$\hbar \left|\frac{d^{2}}{dx^{2}}W\right| \ll \left| \frac{d}{dx}W \right|^{2}$。则我们可以解得一个近似解：
$$W= \pm \int^xdx^{'}\hbar k(x^{'}) $$
其中，$\int^x$的意思是常数待定的定积分。将该解代入$(*)$得到：
$$\begin{align}
 & \pm ik^{'}(x)- \frac{1}{\hbar^{2}}\left(  \frac{d}{dx}W \right)^{2}+k^{2}=0 \\
\implies & W =  \frac{i\hbar}{2}\ln k(x)\pm \int^x\hbar k(x^{'})dx^{'}
\end{align}$$
于是得到波函数的近似解：
$$\psi_{\pm}(x)= \frac{1}{\sqrt{ k(x) }}\exp\left(  \pm i\int^xdx^{'}k(x^{'}) \right)$$
不妨再乘上常数，写为：
$$\psi_{\pm}(x)= \frac{C_{\pm}}{\sqrt{ k(x) }}\exp\left( \pm i \int^xdx^{'}k(x^{'}) \right) \tag{**}$$

**Classical turning point邻域：**

我们线性近classical turning point邻域的势能：
$$V(x)\approx V(x_{0})+V^{'}(x_{0})(x-x_{0})$$
于是在该区域内，有Schrodinger方程：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(V(x_{0}+V^{'}(x_{0})(x-x_{0})-E))\psi=0 \\
\implies & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi + V^{'}(x_{0})(x-x_{0})\psi=0
\end{align}$$
令$y = a(x-x_{0}),\frac{\hbar^{2}}{2m}a^{2}=1, \frac{V^{'}(x_{0})}{a}=b,\xi= b^{1/3}y- \frac{E}{b^{2/3}}$。则该方程变为一个Airy方程：
$$\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0$$
我们可以解得：
$$\psi(x)=AAi(\xi)+BBi(\xi),\text{ where }\xi=\left(  \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x-x_{0})-E \left(  \frac{V^{'2}\hbar^{2}}{2m} \right)^{-1/3}$$

**边界条件：**

波函数要求，在$x_{0}$的邻域到较远区域，上面两种情况的解可以join。并且在$\pm \infty$处波函数为$0$。

我们假设邻域的边界对于邻域解来说已经算很远了，即邻域的边界上我们取领域解的$\pm \infty$渐进解。

Know:
$$\begin{align}
 & Ai(z) \sim \frac{1}{2\sqrt{ \pi }}z^{-1/4}\exp\left( - \frac{2}{3} z^{3/2} \right)\text{ at }\infty \\
 & Bi(z)\sim \frac{1}{\sqrt{ \pi }}z^{-1/4}\exp\left( \frac{2}{3}z^{3/2} \right)\text{ at }\infty
\end{align}$$
在邻域的边界上，势阱线性近似同样有效。于是将$V(x)=V(x_{0})+V^{'}(x_{0})(x-x_{0})$代入$(* *)$可以得到边界上的非邻域解：
$$\psi_{\pm}= $$
