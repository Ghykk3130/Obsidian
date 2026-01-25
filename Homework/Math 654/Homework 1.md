# Acheson 1.3

We have that:
$$u_{\theta}=\left\{\begin{align}
 & \Omega r ,\ r< a \\
 & \frac{\Omega a^{2}}{r},\ r>a 
\end{align}\right.$$
Then:
$$\vec{\omega}= \left\{\begin{align}
 &  2\Omega \hat{z},\ r <a \\
 & 0,\ r >a
\end{align}\right.$$
Then:
$$\vec{\omega}\times \vec{u}=\left\{\begin{align}
 &  2\Omega^{2}r(-\hat{r}),\ r<a \\
 & 0,\ r>a
\end{align}\right.$$
Then we have:
$$\begin{align}
 & \frac{\partial \vec{u}}{\partial t}+\vec{\omega}\times \vec{u}=-\nabla\left(  \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right) \\
 \implies & \vec{\omega}\times \vec{u}=-\nabla\left(  \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right)\end{align}$$
Choose an integration path that is perpendicular to the z axis, from $r=0$ to $r=\infty$.
$$ \begin{align}
\implies & \int_{0}^{\infty}d\vec{r}\cdot(\vec{\omega}\times \vec{u})=-\left[ \frac{1}{2}u^{2}+\chi \right]_{r=0}^{\infty}-  \frac{1}{\rho}[p]_{r=0}^{\infty} \\
\implies &  -\Omega^{2}a^{2}= - \frac{1}{\rho}(p(r=\infty)-p(r=0)) \\
\implies & p\left( r=\infty \right)-p(r=0)= \rho \Omega^{2}a^{2}
\end{align}$$

Now consider the free surface. The surface is an equal pressure surface. Then choose a integration path on the surface. Then path is perpendicular to $\nabla p$. Then we have:
$$\begin{align}
 \implies & \int_{0}^{\infty}d\vec{r}\cdot(\vec{\omega}\times \vec{u})=- \left[ \frac{1}{2}u^{2} \right]_{r=0}^{\infty}-\chi(r=\infty)+\chi(r=0) \\
\implies & - \Omega^{2}a^{2}=0-g\Delta z \\
\implies & \Delta z= \frac{\Omega^{2}a^{2}}{g}
\end{align}$$
# Acheson 1.4

We have:
$$\begin{align}
 &  \frac{\partial \vec{u}}{\partial t}+\vec{\omega}\times \vec{u}=-\nabla\left( \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right) \\
\implies & \rho \vec{u}\cdot \frac{\partial \vec{u}}{\partial t}=-\vec{u}\cdot\nabla\left( \frac{1}{2}\rho u^{2}+p+\rho \chi \right) \\
\implies & \int_{V} dV\rho \vec{u}\cdot \frac{\partial \vec{u}}{\partial t}=-\int_{V}dV \vec{u}\cdot \nabla\left( \frac{1}{2}\rho u^{2}+p+\rho \chi \right) \\
\implies & \int_{V}dV \frac{1}{2}\rho \frac{\partial u^{2}}{\partial t}=-\int_{S}dS \hat{n}\cdot \vec{u}\left( p+\rho \chi+ \frac{1}{2}\rho u^{2} \right) \\
\implies &  \frac{d}{dt}\int_{V}dV \frac{1}{2}\rho u^{2}=- \int_{S}dS\hat{n}\cdot \vec{u}\left( p+\rho \chi+ \frac{1}{2}\rho u^{2} \right)
\end{align}$$
# Acheson 1.7

A sketch of the streamline is:
![[Drawing 2026-01-24 21.48.03.excalidraw|center|400]]

The concentration of the pollutant doesn't change because:
$$\begin{align}
\frac{Dc}{Dt} & = \frac{\partial c}{\partial t}+\vec{u}\cdot \nabla c \\
 & = -\alpha \beta x^{2}ye^{-\alpha t}+(2\beta xye^{-\alpha t}\hat{x}+\beta x^{2}e^{-\alpha t}\hat{y})\cdot( \alpha \hat{x}-\alpha \hat{y}) \\
 & = -\alpha \beta x^{2}ye^{-\alpha t}+2\alpha \beta x^{2}ye^{-\alpha t}-\alpha \beta x^{2}ye^{-\alpha t} \\
 & = 0
\end{align}$$
In Lagrangian description, we have that:
$$\begin{align}
\frac{\partial \vec{x}}{\partial t} & = \alpha Xe^{\alpha t}\hat{x}- \alpha Ye^{-\alpha t}\hat{y} = \alpha x \hat{x}-\alpha y \hat{y}=\vec{u}
\end{align}$$
We can also compute:
$$\begin{align}
 \frac{D{u}_{i}}{Dt}  & = \frac{\partial u_{i}}{\partial t}+ u_{j}\partial_{j}u_{i} \\
 & = \end{align}$$