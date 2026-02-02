# Acheson 1.3

We have that:
$$u_{\theta}=\left\{\begin{align}
 & \Omega r ,\ r< a \\
 & \frac{\Omega a^{2}}{r},\ r>a 
\end{align}\right.$$
Then:
$$\boldsymbol{\omega}= \left\{\begin{align}
 &  2\Omega \hat{\mathbf{z}},\ r <a \\
 & 0,\ r >a
\end{align}\right.$$
Then:
$$\boldsymbol{\omega}\times \mathbf{u}=\left\{\begin{align}
 &  2\Omega^{2}r(-\hat{\mathbf{r}}),\ r<a \\
 & 0,\ r>a
\end{align}\right.$$
Then we have:
$$\begin{align}
 & \frac{\partial \mathbf{u}}{\partial t}+\boldsymbol{\omega}\times \mathbf{u}=-\nabla\left(  \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right) \\
 \implies & \boldsymbol{\omega}\times \mathbf{u}=-\nabla\left(  \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right)\end{align}$$
Choose an integration path that is perpendicular to the z axis, from $r=0$ to $r=\infty$.
$$ \begin{align}
\implies & \int_{0}^{\infty}d\vec{r}\cdot(\boldsymbol{\omega}\times \mathbf{u})=-\left[ \frac{1}{2}u^{2}+\chi \right]_{r=0}^{\infty}-  \frac{1}{\rho}[p]_{r=0}^{\infty} \\
\implies &  -\Omega^{2}a^{2}= - \frac{1}{\rho}(p(r=\infty)-p(r=0)) \\
\implies & p\left( r=\infty \right)-p(r=0)= \rho \Omega^{2}a^{2}
\end{align}$$

Now consider the free surface. The surface is an equal pressure surface. Then choose a integration path on the surface. Then path is perpendicular to $\nabla p$. Then we have:
$$\begin{align}
 \implies & \int_{0}^{\infty}d\vec{r}\cdot(\boldsymbol{\omega}\times \mathbf{u})=- \left[ \frac{1}{2}u^{2} \right]_{r=0}^{\infty}-\chi(r=\infty)+\chi(r=0) \\
\implies & - \Omega^{2}a^{2}=0-g\Delta z \\
\implies & \Delta z= \frac{\Omega^{2}a^{2}}{g}
\end{align}$$
# Acheson 1.4

We have:
$$\begin{align}
 &  \frac{\partial \mathbf{u}}{\partial t}+\boldsymbol{\omega}\times \mathbf{u}=-\nabla\left( \frac{1}{2}u^{2}+ \frac{p}{\rho}+\chi \right) \\
\implies & \rho \mathbf{u}\cdot \frac{\partial \mathbf{u}}{\partial t}=-\mathbf{u}\cdot\nabla\left( \frac{1}{2}\rho u^{2}+p+\rho \chi \right) \\
\implies & \int_{V} dV\rho \mathbf{u}\cdot \frac{\partial \mathbf{u}}{\partial t}=-\int_{V}dV \mathbf{u}\cdot \nabla\left( \frac{1}{2}\rho u^{2}+p+\rho \chi \right) \\
\implies & \int_{V}dV \frac{1}{2}\rho \frac{\partial u^{2}}{\partial t}=-\int_{S}dS \hat{n}\cdot \vec{u}\left( p+\rho \chi+ \frac{1}{2}\rho u^{2} \right) \\
\implies &  \frac{d}{dt}\int_{V}dV \frac{1}{2}\rho u^{2}=- \int_{S}dS\hat{n}\cdot \vec{u}\left( p+\rho \chi+ \frac{1}{2}\rho u^{2} \right)
\end{align}$$
# Acheson 1.7

A sketch of the streamline is:
![[Drawing 2026-01-24 21.48.03.excalidraw|center|400]]

The concentration of the pollutant doesn't change because:
$$\begin{align}
\frac{Dc}{Dt} & = \frac{\partial c}{\partial t}+\mathbf{u}\cdot \nabla c \\
 & = -\alpha \beta x^{2}ye^{-\alpha t}+(2\beta xye^{-\alpha t}\hat{x}+\beta x^{2}e^{-\alpha t}\hat{y})\cdot( \alpha \hat{\mathbf{x}}-\alpha \hat{\mathbf{y}}) \\
 & = -\alpha \beta x^{2}ye^{-\alpha t}+2\alpha \beta x^{2}ye^{-\alpha t}-\alpha \beta x^{2}ye^{-\alpha t} \\
 & = 0
\end{align}$$
In Lagrangian description, we have that:
$$\begin{align}
\frac{\partial \mathbf{x}}{\partial t} & = \alpha Xe^{\alpha t}\hat{\mathbf{x}}- \alpha Ye^{-\alpha t}\hat{\mathbf{y}} = \alpha x \hat{\mathbf{x}}-\alpha y \hat{\mathbf{y}}=\mathbf{u}
\end{align}$$
We can also compute:
$$\begin{align}
 \frac{D\mathbf{u}}{Dt}  & = \frac{\partial \mathbf{u}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{u}\\
 & = 0 + \mathbf{u}\cdot \nabla \mathbf{u} \\
 & =  (\alpha x\partial_{x}-\alpha y \partial_{y})(\alpha x \hat{x}-\alpha y \hat{y}) \\
 & = \alpha^{2}x \hat{\mathbf{x}}+\alpha^{2}y \hat{\mathbf{y}}\end{align}$$
 We also observe that:
 $$\begin{align}
 \left(\frac{\partial \mathbf{u}}{\partial t}\right)_{\mathbf{x}} & =  \frac{\partial}{\partial t}(\alpha Xe^{\alpha t}\hat{\mathbf{x}}-\alpha Ye^{-\alpha t}\hat{\mathbf{y}}) \\
 & = \alpha^{2}Xe^{\alpha t}\hat{\mathbf{x}}+\alpha^{2}Ye^{-\alpha t}\hat{\mathbf{y}} \\
 & = \alpha^{2} x \hat{\mathbf{x}}+\alpha^{2}y \hat{\mathbf{y}} 
\end{align}$$
So we have that:
$$\left( \frac{\partial \mathbf{u}}{\partial t} \right)_{\mathbf{x}}= \frac{D\mathbf{u}}{Dt}$$
These results are expected because the Lagrangian description $\mathbf{x}(\boldsymbol{\alpha}, t)$ acts as the inverse mapping to the Eulerian labeling, explicitly tracking a specific particle's path through space. Since this mapping $\vec{x}(\vec{\alpha},t)$ defines exactly where the particle labeled $\mathbf{x}$ is at $t$, its time derivative is, by fundamental definition, that particle's velocity $\mathbf{u}$. For velocity, since the Eulerian velocity field $\mathbf{u}$ depends on the position $\mathbf{x}$, and $\mathbf{x}$ is determined by that Lagrangian mapping, taking the time derivative requires the chain rule, which mathematically results in the material derivative $\frac{D \mathbf{u}}{Dt}$. 

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

For a particular solution, assume that $v=w=0$ since the pressure gradient is in the x direction. Since the system is translational-symmetric in the x,z direction, we can consider $u=u(y,t)$.

Then:
$$\begin{align}
 &  \frac{\partial u}{\partial t}= \frac{P}{\rho}+ \frac{\mu}{\rho} \nabla^{2}u \\
\end{align}$$
Assume that the flow is steady. Then:
$$\begin{align}
 & \mu \nabla^{2}u=\mu \frac{\partial^{2}}{\partial y^{2}}u=- P \\
\implies & u=- \frac{P}{2\mu }y^{2}+Ay+B
\end{align}$$
On the boundary we have:
$$- \frac{P}{2\mu }h^{2}+Ah+B=0,\ - \frac{P}{2\mu }h^{2}-Ah+B=0\implies A=h^{2},B=0 $$
Then:
$$u=\frac{P}{2\mu}(h^{2}-y^{2}),\ v=w=0$$
## (ii)

For a particular solution, assume that $u_{r},u_{\theta}=0$. This is because the pressure gradient is along the z direction. Since the system is rotational-symmetric, we consider $u_{z}=u(r)$. Then:
$$\frac{\partial u_{z}}{\partial t}=\frac{P}{\rho}+ \frac{\mu}{\rho} \nabla^{2}u_{z }= \frac{P}{\rho}+ \frac{\mu}{\rho} \frac{1}{r} \frac{d}{d r}\left( r \frac{d u_{z}}{d r} \right)$$
Consider steady solution:
$$\begin{align}
 &  \mu \frac{1}{r} \frac{d }{d r }\left( r \frac{d}{dr}u_{z} \right)=-P \\
\implies & r \frac{d}{dr}u_{z}=- \frac{P}{2\mu}r^{2}+A \\
\implies &  u_{z}=- \frac{P}{4\mu}r^{2}+A\ln r+B
\end{align}$$
Set $A=0$ because of boundedness. Then on the boundary:
$$\begin{align}
 & 0=- \frac{P}{4\mu}a^{2}+B\implies B= \frac{P}{4\mu}a^{2}
\end{align}$$
So:
$$u_{z}= \frac{P}{4\mu}(a^{2}-r^{2}),\ u_{r}=u_{\theta}=0$$
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
$$\sum_{m,n} i\omega_{m}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)e^{i\omega_{m}t}  \hat{u}_{2}= -\nu\sum_{m,n} \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2} \cos\left( \frac{y}{h}\left( \frac{\pi_{2}}{2}+n\pi \right) \right)e^{i\omega_{m}t}\hat{u}_{2}$$
By linear independency, we have:
$$i\omega_{m} \hat{u}_{2}=- \frac{\nu}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}\hat{u}_{2}$$
So for $m,n\text{ such that }\hat{u}_{2}(m,n)\neq 0$, we have
$$i\omega_{m}=-\nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}$$
Claim that fixing $m$, there exists at most one $n$ such that $\hat{u}_{2}(m,n)=0$. Otherwise, $\omega_{m}$ is mapped to multiple values$\rightarrow \leftarrow$. Due to this constraint, we rewrite the angular frequency as a function of n, denoted by $\omega_{n}$. Then:
$$i\omega_{n}=- \nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2},\ n\in \mathbb{N}$$
Then:
$$u_{2}=\sum_{n\in \mathbb{N}}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)\exp\left( - \nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}t \right)  \hat{u}_{2}$$
The initial condition implies:
$$\begin{align}
 &  \frac{P}{2\mu}(h^{2}-y^{2})+\sum_{n\in \mathbb{N} } \cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)  \hat{u}_{2}= 0 \\
\implies &  \hat{u}_{2}= - \frac{1}{h} \int_{-h}^hdy \frac{P}{2\mu}(h^{2}-y^{2})\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \\
 \right)
\end{align}$$
We first compute:
$$\begin{align}
\int_{-h}^h dy \cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)= \frac{4h(-1)^n}{\pi+2n\pi }
\end{align}$$
Next:
$$\begin{align}
\int_{-h}^h dyy^{2}\cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right) & = - \frac{\partial^{2}}{\partial \omega^{2}} \int_{-h}^h\cos(\omega y)\text{ where }\omega= \frac{1}{h}\left( \frac{\pi}{2}+n\pi \right)  \\
 & = - \frac{\partial^{2}}{\partial \omega^{2}}\left( \frac{2}{\omega} \sin \omega h \right) \\
 & = \frac{4h\cos \omega h  }{\omega^{2} }- \frac{4\sin \omega h}{\omega^{3}}+ \frac{2h^{2}\sin(\omega h) }{\omega} \\
 & = \frac{4(-1)^nh^{3}(-8+(\pi+2n\pi)^{2})}{(\pi+2n\pi)^{3}} 
\end{align}$$
Then:
$$\hat{u}_{2}= - \frac{16(-1)^nh^{2}{P}}{\mu(\pi+2n\pi)^{3}}$$
So:
$$u_{2}=-\sum _{n\in \mathbb{N}} \cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)\exp\left( - \nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}t \right) \frac{16(-1)^nh^{2}P}{\mu(\pi+2n\pi)^{3}}  $$
We have:
$$u(y,t)= \frac{P}{2\mu}(h^{2}-y^{2})-\sum _{n\in \mathbb{N}} \cos\left( \frac{y}{h}\left( \frac{\pi}{2}+n\pi \right) \right)\exp\left( - \nu \frac{1}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}t \right) \frac{16(-1)^nh^{2}P}{\mu(\pi+2n\pi)^{3}}  $$
Observe that if $t \gg \frac{h^{2}}{\nu}$, the exponent $- \frac{\nu}{h^{2}}\left( \frac{\pi}{2}+n\pi \right)^{2}t \rightarrow -\infty$. So $u_{2}$ can be ignored. We have $u(y,t) \approx u(y,t)$.
# HW1S1
## a)
Consider the constraint on a streamline:
$$\begin{align}
 & \frac{dx}{-y}= \frac{dy}{x+t} \\
\implies & -ydy=(x+t)dx \\
\implies & - \frac{1}{2 }y^{2}= \frac{1}{2}x^{2}+tx+C
\end{align}$$
Since the streamline crosses the origin, we have:
$$0=0+C\implies C=0$$
Set $t=1$ to obtain:
$$- \frac{1}{2}y^{2}= \frac{1}{2}x^{2}+x$$
## b)
We have:
$$\frac{dx}{dt}=u=-y,\ \frac{dy}{dt}=v=x+t$$
Decouple the equations to get:
$$\begin{align}
 & \frac{d^{2}y}{dt^{2}}=-y+1 \\
\implies  & y-1=A\cos t+B\sin t
\end{align}$$
Know that at $t=0, y=0$. Then:
$$0-1=A\implies A=-1$$
Know that $\frac{dy}{dt}|_{t=0}=v(x=0,t=0)=0$ at the origin. Then:
$$0= B$$
So:
$$y= -\cos t+1$$
Then:
$$\begin{align}
 & \frac{dx}{dt}=\cos t-1\implies x=\sin t-t+C
\end{align}$$
Know that at $t=0,x=0$. Then $C=0$. So:
$$x=\sin t-t$$
The pathline is clearly a cycloid with $R=1$. The pathline with $0 < t < 6\pi$ is shown below:
![[Pasted image 20260201174303.png|center|700]]
## c)

Let the particle passes through the origin at $\tau$. :
$$y-1=A\cos t+B\sin t$$
with the conditions that:
$$A\cos \tau+B\sin \tau=0-1,\ \left.\frac{dy}{dt}\right|_{t=\tau}=-A\sin \tau+B\cos \tau=\tau$$
Then it's easy to solve:
$$y=(-\cos \tau=\tau \sin \tau)\cos t+(-\sin \tau+\tau \cos \tau)\sin t+1$$
Similarly, for $x$:
$$x=\sin t-t+C$$
We have:
$$\sin \tau-\tau+C=0\implies C=-\sin \tau+\tau$$
Then:
$$x=\sin t-t-\sin \tau+\tau$$
Let $t=6\pi$. We have:
$$x=-6\pi-\sin \tau+\tau,\ y=-\cos \tau-\tau \sin \tau+1$$
with $0\leq \tau \leq 6\pi$.
 ![[Pasted image 20260201182608.png|center|300]]

# HW1S2

For a particular solution, assume that $u_{r},u_{\theta}=0$. This is because the pressure gradient is along the z direction. Since the system is rotational-symmetric, we consider $u_{z}=u(r)$. Then:
$$\frac{\partial u_{z}}{\partial t}=\frac{P}{\rho}+ \frac{\mu}{\rho} \nabla^{2}u_{z }= \frac{P}{\rho}+ \frac{\mu}{\rho} \frac{1}{r} \frac{d}{d r}\left( r \frac{d u_{z}}{d r} \right)$$
Consider steady solution:
$$\begin{align}
 &  \mu \frac{1}{r} \frac{d }{d r }\left( r \frac{d}{dr}u_{z} \right)=-P \\
\implies & r \frac{d}{dr}u_{z}=- \frac{P}{2\mu}r^{2}+A \\
\implies &  u_{z}=- \frac{P}{4\mu}r^{2}+A\ln r+B
\end{align}$$
On the boundary we have:
$$\begin{align}
 & 0=- \frac{P}{4\mu}R_{i}^{2}+A\ln R_{i}+B= - \frac{P}{4\mu}R_{o}^{2}+A\ln R_{o }+B \\
\implies & A= \frac{P}{4\mu} \frac{R_{i}^{2}-R_{o}^{2}}{\ln (R_{i} /R_{o})},\ B= \frac{P}{4\mu} \frac{R_{o}^{2}\ln R_{i}-R_{i}^{2}\ln R_{o}}{\ln(R_{i } /R_{o})}
\end{align}$$
Then:
$$\begin{align}
u_{z} & =\frac{P}{4\mu}\left( -r^{2}+ \frac{R_{i}^{2}-R_{o}^{2}}{\ln(R_{i} / R_{o})}\ln r+ \frac{R_{o}^{2}\ln R_{i}-R_{i}^{2}\ln R_{o}}{\ln(R_{i} /R_{o})} \right)
 \\
 & = \frac{P}{4\mu}\left( -r^{2}+ \frac{R_{o}^{2}\ln(R_{i} /r)-R_{i}^{2}\ln(R_{o} /r)}{\ln(R_{i} /R_{o})}  \\
\right) \\
 & = \frac{P}{4\mu}\left( -r^{2}+ R_{o}^{2}-R_{o}^{2}+ \frac{R_{o}^{2}\ln(R_{i} /r)-R_{i}^{2}\ln(R_{o} /r)}{\ln(R_{i} /R_{o})} \right) \\
 & = \frac{P}{4\mu}\left( -r^{2}+R_{o}^{2}+ (R_{o}^{2}-R_{i}^{2}) \frac{\ln(R_{o} /r)}{\ln(R_{i} /R_{o})} \right)\end{align}
$$
Observe that for $r\neq 0$, as $R_{i}\rightarrow{0}+$，we have $\frac{\ln(R_{o} /r)}{\ln(R_{i} /R_{o})}\rightarrow 0$. So:
$$u_{z}\rightarrow \frac{P}{4\mu}(R_{o}^{2}-r^{2})$$
So the flow that is not on the central axis converges to the flow in a cylindrical pipe. 


 