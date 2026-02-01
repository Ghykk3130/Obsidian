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

Let ${\gamma}\subset \mathbb{R}^{3}$ be a streamline. Then the constraint along $\gamma$ is:
$$\frac{dx}{u_{0}}= \frac{dy}{kt}$$
and in particular, $dz=0$. We can solve:
$$y=\frac{kt}{u_{0}}x+y_{0},\ z=z_{0}$$
Then the streamlines are given by $\left( x, \frac{kt}{u_{0}}x+y_{0},z_{0} \right)$, where $y_{0},z_{0}$ depends on the initial condition. This clealy describes a straight line. Several representative streamlines are as follows:
![[Pasted image 20260128153258.png|center|500]]
![[Pasted image 20260128153403.png|center|500]]
To solve the path of the particles, we have:
$$\frac{dx}{dt}=u_{0},\ \frac{dy}{dt}=kt,\ \frac{dz}{dt}=0$$
Then:
$$x=u_{0}t+C_{1},\ y= \frac{1}{2}kt^{2}+C_{2},\ z=C_{3}\implies y-C_{2}= \frac{k}{2u_{0}^{2}}(x-C_{1})^{2}$$
The path is clearly a parabolic curve in a plane parallel to the xy plane.

# Acheson 2.1
## (i)

Know that for air, we have $\nu \sim 10^{-5} m^{2} /s$. Then:
$$\begin{align}
R  & \approx \frac{150\times 5}{10^{-5} }=7.5 \times 10^7\ 
\end{align}$$
So the order of magnitude is $10^7$. The order of magnitude of the boundary layer thickness is given by:
$$\delta \sim \mathcal{O}\left( LR^{-1/2}\right)$$
So $\delta$ is of order $10^{-4} m$.
## (ii)

Know that for water, we have $\nu \sim 10^{-6} m^{2} /s$. Then:
$$R\approx \frac{0.05 \times{0}.02}{10^{-6}}=10^3$$
So the order of magnitude is $10^3$.
## (iii)

Know that for syrup, we have $\nu \sim 10^{-2}m^{2} /s$. Then:
$$R\approx\frac{10^{-2}\times 0.02}{10^{-2}}=2\times 10^{-2}$$
So the order of magnitude is $10^{-2}$
## (iv)

We have:
$$R\approx \frac{10^{-4}\times 10^{-5}}{10^{-6}}=10^{-3}$$
So the order of magnitude is $10^{-3}$.
# Acheson 2.2

We have:
$$\begin{align}
 & \mathbf{u}\cdot \nabla \mathbf{u}= - \frac{1}{\rho}\nabla p +\nu \nabla^{2}\mathbf{u} \\
\implies & (U\mathbf{u}^{'}) \frac{1}{a} \nabla^{'}(U\mathbf{u}^{'})= - \frac{1}{\rho} \frac{1}{a} \nabla^{'}p+ \nu \frac{1}{a^{2}} \nabla^{'2}(U\mathbf{u}^{'}) \\
\implies & \mathbf{u}^{'}\cdot \nabla^{'}\mathbf{u}^{'}= - \nabla^{'}\left(  \frac{p}{\rho U^{2}} \right)+ \frac{\nu}{aU}\nabla^{'2}\mathbf{u}^{'} \\
\implies & \mathbf{u}^{'}\cdot \nabla^{'}\mathbf{u}^{'}= - \nabla^{'}p^{'}+ \frac{1}{R} \nabla^{'2}\mathbf{u}^{'} 
\end{align}$$
Notice that the boundary conditions also transforms:
$$\begin{align}
 &\mathbf{u}=0\text{ on } x^{2}+y^{2}=a^{2}\implies \mathbf{u}^{'}=0\text{ on }x^{'2}+y^{'2}=1 \\
 & \mathbf{u}=(U,0,0)\text{ as }x^{2}+y^{2}  \rightarrow \infty \implies \mathbf{u}^{'}=(1,0,0)\text{ as }x^{'2}+y^{'2}\rightarrow \infty
\end{align}$$
Then the boundary conditions are parameter-free. Notice that the only parameter comes from $R$ in the equation. Therefore, the streamline pattern should only depend on $R$.
# Acheson 2.3
## (i)

We substitute the solution into the equation. We have:
$$\frac{\partial \mathbf{u}}{\partial t}=0$$
$$\begin{align}
\mathbf{u}\cdot \nabla \mathbf{u} & = v \frac{\partial}{\partial y}\left( \frac{P}{2\mu}(h^{2}-y^{2})\hat{x} \right)=0
\end{align}$$
$$\begin{align}
\nabla^{2}\mathbf{u} & = \frac{\partial^{2}}{\partial y^{2}}\left( \frac{P}{2\mu}(h^{2}-y^{2})\hat{x} \right)= - \frac{P}{\mu}\hat{x}
\end{align}$$
$$\nabla p= - P \hat{x}$$
Then clearly:
$$\begin{align}
\frac{\partial \mathbf{u}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{u} & = 0= - \left( - \frac{P}{\rho}\hat{x} \right)+ \frac{\mu}{\rho}\left( - \frac{P}{\mu}\hat{x} \right)= - \frac{1}{\rho}\nabla p+ \frac{\mu}{\rho}\nabla^{2}\mathbf{u}
\end{align}$$
The boundary condition is satisfied, since at $y=\pm h$, $u= \frac{P}{2\mu}(h^{2}-y^{2})=0$.
## (ii)

Similarly, we compute:
$$\frac{\partial \mathbf{u}}{\partial t}=0$$
$$\mathbf{u}\cdot \nabla \mathbf{u}=\hat{z} u_{r}\frac{\partial}{\partial r}\left(  \frac{P}{4\mu}(a^{2}-r^{2}) \right)=0$$
$$\nabla^{2}\mathbf{u}= \hat{z} \frac{1}{r} \frac{\partial}{\partial r}\left( r \frac{\partial u_{r}}{\partial r} \right)=\hat{z} \frac{1}{r}\left( - \frac{P}{\mu}r \right)=- \frac{P}{\mu}\hat{z} $$
Then clearly:
$$\frac{\partial \mathbf{u}}{\partial t}+\mathbf{u} \cdot \nabla \mathbf{u}=0=-\left( - \frac{P}{\rho}\hat{z} \right)+ \frac{\mu}{\rho}\left( - \frac{P}{\mu}\hat{z} \right)=- \frac{1}{\rho}\nabla p+ \frac{\mu}{\rho}\nabla^{2}\mathbf{u}$$
At $r=a$, we have $u_{z}=\frac{P}{4\mu}(a^{2}-r^{2})=0$ so that the boundary condition is satisfied.
# Acheson 2.5

We have that:
$$\begin{align}
 & \frac{\partial u}{\partial t}+(u \partial_{x}+ v \partial_{y})u= - \frac{1}{\rho} \frac{dp}{dx}+ \nu \partial_{y}^{2}u \\
\implies &  \frac{\partial u}{\partial t}+v \frac{\partial u}{\partial y}= \frac{P}{\rho}+\nu \frac{\partial^{2}u}{\partial y^{2}}
\end{align}$$
Observe that the fluid is incompressible:
$$\frac{\partial u}{\partial x}+ \frac{\partial v}{\partial y}=0\implies \frac{\partial v}{\partial y}=0$$
By the assumption in the problem, velocities only does not depend on $x$. So $v=\text{const.}$ Since we have $v=0$ on the wall, we obtain $v=0$. So:
$$\frac{\partial u}{\partial t}=\nu \frac{\partial^{2}u}{\partial y^{2}}+ \frac{P}{\rho}$$
The boundary condition is clearly $u(y=\pm h,t)=0$. The initial condition is $u(y,0)=0$.

Let $u(y,t)=u_{1}(y)+u_{2}(y,t)$, where:
$$\begin{align}
 & 0= \nu \frac{\partial^{2}u_{1}}{\partial y^{2}}+ \frac{P}{\rho} \\
 & \frac{\partial u_{2}}{\partial t}=\nu \frac{\partial^{2}u_{2}}{\partial y^{2}} \\
 & u_{1},u_{2}=0\text{ on the wall},\ u_{1},u_{2}=0\text{ at }t=0
\end{align}$$
Then:
$$\begin{align}
 & 0= \nu \frac{\partial^{2}u_{1}}{\partial y^{2}}+\frac{P}{\rho} \\
\implies & u_{1}= - \frac{P}{2\rho \nu}y^{2}+Ay+B
\end{align}$$
$$\begin{align}
 & - \frac{P}{2\rho \nu}h^{2}+Ah+B=0,\ - \frac{P}{2\rho \nu}h^{2}-Ah+B=0\implies u_{1}= \frac{P}{2\mu}(h^{2}-y^{2})
\end{align}$$
Now consider $u_{2}$. Notice that the basis $\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)$ satisfies the boundary condition. Then assume:
$$u_{2}=  \sum_{m \in \mathbb{Z}} \sum_{n=0}^{\infty} \cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)e^{i\omega_{m} t}  \hat{u}_{2}$$
Then we must have:
$$\sum_{m,n} i\omega_{m}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)e^{i\omega_{m}t}  \hat{u}_{2}= \nu\sum_{m,n} \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2} \cos\left( \frac{y}{h}\left( \frac{\pi_{2}}{2}+n\pi \right) \right)e^{i\omega_{m}t}\hat{u}_{2}$$
Then fix $n$, it suffices to let:
$$\sum_{m} i\omega_{m}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)e^{i\omega_{m}t}  \hat{u}_{2}= \nu\sum_{m} \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2} \cos\left( \frac{y}{h}\left( \frac{\pi_{2}}{2}+n\pi \right) \right)e^{i\omega_{m}t}\hat{u}_{2}$$
Then it suffices to let:
$$i\omega_{m}= \nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2},\ \forall m$$



Substituting into the wave equation:
$$\begin{align}
 & -\left[ \frac{1}{h}\left(  \frac{\pi}{2}+n\pi \right) \right]^{2}\nu=i\omega_{m} 
\end{align}$$
So:
$$u_{2}=\int_{\mathbb{R}}d\omega \sum_{n=0}^{\infty}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)\exp\left[ - \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}\nu t \right]    \hat{u}_{2}$$
The initial condition implies:
$$$$