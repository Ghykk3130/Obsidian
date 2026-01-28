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
 \frac{D\vec{u}}{Dt}  & = \frac{\partial\vec{u}}{\partial t}+ \vec{u}\cdot \nabla \vec{u}\\
 & = 0 + \vec{u}\cdot \nabla \vec{u} \\
 & =  (\alpha x\partial_{x}-\alpha y \partial_{y})(\alpha x \hat{x}-\alpha y \hat{y}) \\
 & = \alpha^{2}x \hat{x}+\alpha^{2}y \hat{y}\end{align}$$
 We also observe that:
 $$\begin{align}
 \left(\frac{\partial \vec{u}}{\partial t}\right)_{\vec{x}} & =  \frac{\partial}{\partial t}(\alpha Xe^{\alpha t}\hat{x}-\alpha Ye^{-\alpha t}\hat{y}) \\
 & = \alpha^{2}Xe^{\alpha t}\hat{x}+\alpha^{2}Ye^{-\alpha t}\hat{y} \\
 & = \alpha^{2} x \hat{x}+\alpha^{2}y \hat{y} 
\end{align}$$
So we have that:
$$\left( \frac{\partial \vec{u}}{\partial t} \right)_{\vec{x}}= \frac{D\vec{u}}{Dt}$$
These results are expected because the Lagrangian description $\vec{x}(\vec{\alpha}, t)$ acts as the inverse mapping to the Eulerian labeling, explicitly tracking a specific particle's path through space. Since this mapping $\vec{x}(\vec{\alpha},t)$ defines exactly where the particle labeled $\vec{x}$ is at $t$, its time derivative is, by fundamental definition, that particle's velocity $\vec{u}$. For velocity, since the Eulerian velocity field $\vec{u}$ depends on the position $\vec{x}$, and $\vec{x}$ is determined by that Lagrangian mapping, taking the time derivative requires the chain rule, which mathematically results in the material derivative $\frac{D \vec{u}}{Dt}$. 

To express $c$ in terms of $x,y,t$, we do:
$$c=\beta x^{2}ye^{-\alpha t}=\beta(Xe^{\alpha t})^{2}Ye^{-\alpha t}e^{-\alpha t}=\beta X^{2}Y$$
# Acheson 1.8

Let $\vec{\gamma}=\vec{\gamma}(s)$ be a streamline. Then:
$$\frac{d \vec{\gamma}}{ds}= \frac{u_{0}}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}\hat{x}+ \frac{kt}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}\hat{y}\implies \vec{\gamma}=\left( \frac{u_{0}s}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}+x_{0}, \frac{kts}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}+y_{0},z_{0} \right)$$
where $(x_{0},y_{0},z_{0})$ depends on the initial condition. Since:
$$\frac{\frac{u_{0}s}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}}{\frac{kts}{\sqrt{ u_{0}^{2}+k^{2}t^{2} }}}= \frac{u_{0}}{kt}\text{ is a constant independent of }s$$
Then $\vec{\gamma}(s)$ describes a straight line. Several representative streamlines are as follows:
![[Pasted image 20260128153258.png|center|500]]
![[Pasted image 20260128153403.png|center|500]]
To solve the path of the particles, we have:
$$\frac{dx}{dt}=u_{0},\ \frac{dy}{dt}=kt,\ \frac{dz}{dt}=0$$
Then:
$$x=u_{0}t+C_{1},\ y= \frac{1}{2}kt^{2}+C_{2},\ z=C_{3}\implies y-C_{2}= \frac{k}{2u_{0}^{2}}(x-C_{1})^{2}$$
The path is clearly a parabolic curve in a plane parallel to the xy plane.

