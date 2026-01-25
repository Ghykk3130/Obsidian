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
