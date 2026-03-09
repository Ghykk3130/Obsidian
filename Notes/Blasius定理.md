考虑二维流体。不妨令$\zeta=x+iy$。对于速度势$\phi$，我们定义：
$$w(\zeta)=\phi+i\psi$$
我们要求Riemann-Cauchy条件：
$$\frac{\partial \phi}{\partial x}= \frac{\partial \psi}{\partial y},\ \frac{\partial \phi}{\partial y}=- \frac{\partial \psi}{\partial x}$$
>[!Success] Theorem 1 (Blasius' theorem)
>For a 2D irrotational flow past a body with boundary $C$, we have:
>$$F_{x}-iF_{y}=\frac{1}{2}i\rho \oint d\zeta\left( \frac{dw}{d\zeta} \right)^{2}$$
## Proof.

考虑$C$上的一个线元$d  \hat{\mathbf{l}}$。改线元应该是逆时针沿$C$绕动的线上的线元。令$\theta$为$dl$与$x$轴的夹角。那么线元上的压力为：
$$d F_{x}=-dl p  \sin \theta,\ dF_{y}= dlp \cos \theta$$
所以：
$$\begin{align}
dF_{x}-idF_{y} & = -dlp \sin \theta- i dlp \cos \theta  \\
 & = -idlpe^{-i\theta} 
\end{align}$$
我们有Bernoulli定理：
$$\frac{1}{2}\rho|\mathbf{u}|^{2}+ p=k\text{ for some constant }k$$
那么：
$$dF_{x}-idF_{y}= -idl\left( k- \frac{1}{2}\rho|\mathbf{u}|^{2} \right)e^{-i\theta}$$
注意到：
$$\begin{align}
\frac{dw}{d\zeta} & = \frac{dw}{dx} \\
 & = \frac{\partial \phi}{\partial x}+ i \frac{\partial \psi}{\partial x} \\
 & = u_{x}-iu_{y}
\end{align}$$
因为物体表面的flow不存在垂直component，所以$(u_{x},u_{y})\parallel d  \hat{\mathbf{l}}$。所以：
$$\begin{align}
\frac{dw}{d\zeta} & = u\cos \theta-i u\sin \theta \\
 & = u e^{-i\theta}
\end{align}$$
所以：
$$\begin{align}
dF_{x}-idF_{y} & = \left[ \frac{1}{2}\rho e^{2i\theta}\left(  \frac{dw}{d\zeta} \right)^{2}-k \right] i e^{-i\theta}dl \\
 & = \frac{1}{2}i \rho e^{i\theta}\left( \frac{dw}{d\zeta} \right)^{2}dl- ki(dx-idy)
\end{align}$$
那么沿$C$积分得到：
$$F_{x}-iF_{y}= \oint_{C} \frac{1}{2}i\rho e^{i\theta}\left( \frac{dw}{d\zeta} \right)^{2}dl= \frac{1}{2}i\rho \oint d\zeta\left( \frac{dw}{d\zeta} \right)^{2}$$
>[!Right]
>$\blacksquare$



