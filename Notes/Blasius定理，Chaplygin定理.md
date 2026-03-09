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

>[!Success] Theorem 2 (Chaplygin's equation)
>For a 2D irrotational flow past a body with boundary $C$, we have:
>$$\begin{align}
\mathcal{N}  = \mathrm{Re}\left( \oint\left( - \frac{1}{2}z\rho\left( \frac{dw}{dz} \right)^{2}dz \right) \right)
\end{align}$$
## Proof.

Take a line element $d  \hat{\mathbf{l}}$ oriented counterclockwise along $C$. Then the force is:
$$d F_{x}=-dl p  \sin \theta,\ dF_{y}= dlp \cos \theta$$
Then the torque is:
$$d\mathcal{N}= xdF_{y}-ydF_{x}$$
Observe that:
$$\begin{align}
z(dF_{x}-idF_{y}) & = xdF_{x}+ydF_{y}-ixdF_{y}+iydF_{x}
\end{align}$$
Then:
$$d\mathcal{N}= -\mathrm{Im}(z(dF_{x}-idF_{y}))=\mathrm{Re}(iz(dF_{x}-idF_{y}))$$
We know that:
$$\begin{align}
dF_{x}-idF_{y} & = -dlp \sin \theta- i dlp \cos \theta  \\
 & = -idlpe^{-i\theta} 
\end{align}$$
Recall the Bernoulli's theorem:
$$\frac{1}{2}\rho|\mathbf{u}|^{2}+ p=k\text{ for some constant }k$$
Then:
$$dF_{x}-idF_{y}= -idl\left( k- \frac{1}{2}\rho|\mathbf{u}|^{2} \right)e^{-i\theta}$$
Observe that:
$$\begin{align}
\frac{dw}{dz} & = \frac{dw}{dx} \\
 & = \frac{\partial \phi}{\partial x}+ i \frac{\partial \psi}{\partial x} \\
 & = u-iv
\end{align}$$
Since the velocity on $C$ cannot have perpendicular component, we have $(u,v)\parallel d  \hat{\mathbf{l}}$. Then:
$$\begin{align}
\frac{dw}{dz} & = |\mathbf{u}|\cos \theta-i |\mathbf{u}|\sin \theta \\
 & = |\mathbf{u}| e^{-i\theta}
\end{align}$$
Therefore:
$$\begin{align}
dF_{x}-idF_{y} & = \left[ \frac{1}{2}\rho e^{2i\theta}\left(  \frac{dw}{dz} \right)^{2}-k \right] i e^{-i\theta}dl \\
 & = \frac{1}{2}i \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl- ki(dx-idy)
\end{align}$$
Then:
$$\begin{align}
iz(dF_{x}-idF_{y}) & = - \frac{1}{2}z \rho e^{i\theta}\left(  \frac{dw}{dz} \right)^{2}dl+ kz(dx-dy) \\
 & = - \frac{1}{2}z \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl+ k(xdx+ydy) \\
\end{align}$$
Then:
$$\begin{align}
\mathcal{N} & = \oint_{C} \mathrm{Re}(iz(dF_{x}-idF_{y})) \\
 & = \oint \mathrm{Re}\left( - \frac{1}{2}z\rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2} dl\right)+ \oint k(xdx+ydy) \\
 & = \oint \mathrm{Re}\left( - \frac{1}{2}z \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl \right)+ k\left[ \frac{1}{2}x^{2}+ \frac{1}{2}y^{2} \right]_{(x_{0},y_{0})}^{(x_{0},y_{0})} \\
 & = \mathrm{Re}\left( \oint\left( - \frac{1}{2}z\rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl \right) \right)+0 \\
 & = \mathrm{Re}\left( \oint\left( - \frac{1}{2}z\rho\left( \frac{dw}{dz} \right)^{2}dz \right) \right)
\end{align}$$
>[!Right]
>$\blacksquare$




