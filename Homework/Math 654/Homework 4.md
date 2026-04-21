# Acheson 7.2

We first compute:
$$\begin{align}
 & (\nabla \times \mathbf{u})_{r}= \frac{1}{r\sin \theta} \frac{\partial}{\partial \theta}(u_{\phi}\sin \theta) \\
 & (\nabla \times \mathbf{u})_{\theta}= - \frac{1}{r} \frac{\partial}{\partial r}(ru_{\phi}) \\
 & (\nabla \times \mathbf{u})_{\phi}=0
\end{align}$$
Then we have:
$$\begin{align}
  [\nabla \times(\nabla \times \mathbf{u})]_{\phi} &  = \frac{1}{r}\left[  \frac{\partial}{\partial r}(r(\nabla \times \mathbf{u})_{\theta})- \frac{\partial}{\partial \theta}(\nabla \times \mathbf{u})_{r} \right] \\
 & = \frac{1}{r} \frac{\partial}{\partial r}\left( - \frac{\partial}{\partial r}(ru_{\phi}) \right)- \frac{1}{r} \frac{\partial}{\partial \theta}\left(  \frac{1}{r\sin \theta} \frac{\partial}{\partial \theta}(u_{\phi}\sin \theta) \right) \\
 & = - \frac{1}{r}\left[  \frac{\partial^{2}}{\partial r^{2}}(ru_{\phi})+ \frac{1}{r} \frac{\partial}{\partial \theta}\left(  \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}(u_{\phi}\sin \theta) \right) \right] \\
[\nabla \times(\nabla \times \mathbf{u})]_{r} & =0 \\
 [\nabla \times(\nabla \times \mathbf{u})]_{\theta} & =0
\end{align}$$

Then we have:
$$\begin{align}
 & \nabla p= -\mu \nabla \times(\nabla \times \mathbf{u}) \\
\implies & \frac{1}{r\sin \theta} \frac{\partial p}{\partial \phi}= \frac{\mu}{r}\left[  \frac{\partial^{2}}{\partial r^{2}}(ru_{\phi})+ \frac{1}{r} \frac{\partial}{\partial \theta}\left(  \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}(u_{\phi}\sin \theta) \right) \right]
\end{align}$$
Know that the right hand side is a function of $r,\theta$. Then it's easy to solve:
$$p=f(r,\theta)\phi+ g(r,\theta)$$
for some functions $f,g$. Since $p$ is single-valued, we must conclude $f(r,\theta)=0$, or the multi-valued $\phi$ would create a multi-valued pressure. Then $\frac{\partial p}{\partial \phi}=0$. Therefore:
$$\frac{\partial^{2}}{\partial r^{2}}(ru_{\phi})+ \frac{1}{r} \frac{\partial}{\partial \theta}\left[  \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}(u_{\phi}\sin \theta) \right]=0$$
For a point $(a,\theta,\phi)$ on the rigid sphere, its velocity is:
$$\begin{align}
\mathbf{v} & = \Omega  \hat{\mathbf{z}}\times  a \hat{\mathbf{r}} \\
 & = a\Omega \sin \theta  \hat{\boldsymbol{\phi}}
\end{align}$$
Then, the boundary conditions are:
$$\begin{align}
 & \mathbf{u}=a\Omega \sin \theta  \hat{\boldsymbol{\phi}}\text{ at }r=a \\
 & \mathbf{u}=0\text{ as }r\rightarrow \infty
\end{align}$$

To solve the equation, we separate the variables. Let $u_{\phi}=R(r)\Theta(\theta)$. Then:
$$\begin{align}
 & \Theta \frac{d^{2}}{dr^{2}}(rR)+ \frac{R}{r} \frac{d}{d\theta}\left(  \frac{1}{\sin \theta} \frac{d}{d\theta}(\Theta \sin \theta) \right) =0 \\
\implies &  \frac{r}{R} \frac{d^{2}}{dr^{2}}(rR)=- \frac{1}{\Theta} \frac{d}{d\theta}\left(  \frac{1}{\sin \theta} \frac{d}{d\theta}(\Theta \sin \theta) \right)
\end{align}$$
Then:
$$\begin{align}
 & \frac{d}{d\theta}\left[  \frac{1}{\sin \theta}\left( \frac{d\Theta}{d\theta}\sin \theta+\Theta \cos \theta \right) \right]+\lambda \Theta=0 \\
\implies &  \frac{d^{2}\Theta}{d\theta^{2}}+\cot \theta \frac{d\Theta}{d\theta}+\left( \lambda- \frac{1}{\sin ^{2} \theta } \right)\Theta=0
\end{align}$$
Let $x=\cos \theta$. Then:
$$(1-x^{2}) \frac{d^{2}\Theta}{dx^{2}}- 2x \frac{d\Theta}{dx}+\left( \lambda- \frac{1}{1-x^{2}} \right)\Theta=0$$
Observe that this is an associated Legendre equation with $m=1$. The solution is given by:
$$\Theta(\theta)=P_{l}^{m=1}(\cos \theta),\ l\geq 1$$
with $\lambda=l(l+1)$. The radial equation is:
$$\begin{align}
 & r \frac{d^{2}}{dr^{2}}(rR)=l(l+1)R \\
\implies & r^{2} R^{''}+2rR^{'}-l(l+1)R=0
\end{align}$$
We make the ansatz $R=r^{k}$. We obtain the characteristic equation:
$$\begin{align}
 & k(k-1)+2k-l(l+1)=0 \\
\implies & (k-l)(k+l+1)=0 \\
\implies & k=l\text{ or }-l-1
\end{align}$$
Then the general solution is:
$$u_{\phi}= \sum_{l=1}^{\infty}\left( a_{l}r^{l}+ \frac{b_{l}}{r^{l+1}} \right)P_{l}^{1}(\cos \theta)$$
We impose the boundary conditions:
$$u_{\phi}(r\rightarrow \infty)=0\implies a_{l}=0$$
Recall that $P_{1}^{1}(\cos \theta)=\sin \theta$. The boundary condition $u_{\phi}(a,\theta)=a\Omega \sin \theta$ implies that only $l=1$ term of the associated Legendre polynomial could exist. We substitute in this result and fix $b_{1}$:
$$\begin{align}
 & \frac{b_{1}}{a^{2}}\sin \theta=a\Omega \sin \theta \\
\implies & b_{1}=\Omega a^{3}
\end{align}$$
Then we conclude that:
$$u_{\phi}(r,\theta)= \frac{\Omega a^{3}}{r^{2}}\sin \theta$$
We compute the stress tensor:
$$\begin{align}
\sigma_{\phi,r} & = \mu\left( \frac{1}{r\sin \theta} \frac{\partial u_{r}}{\partial \phi}+ r \frac{\partial}{\partial r}\left( \frac{u_{\phi}}{r} \right) \right) \\
 & = \mu r \frac{\partial}{\partial r}\left( \frac{u_{\phi}}{r} \right) \\
 & = \mu r\left( -3 \frac{\Omega a^{3}}{r^{4}}\sin \theta \right)=-3\mu \Omega\left(  \frac{a^{3}}{r^{3}} \right)\sin \theta \\
\sigma_{\theta,r} & = \mu\left( r \frac{\partial}{\partial r}\left(  \frac{u_{\theta}}{r}+ \frac{1}{r} \frac{\partial u_{r}}{\partial \theta} \right) \right)=0 \\
\sigma_{r,r} & = -p+ 2\mu \frac{\partial u_{r}}{\partial r}=-p
\end{align}$$
Since the normal vectors on the surface of the rigid sphere is $\hat{\mathbf{r}}$, The stress is:
$$\begin{align}
 & T_{\phi}  = \sigma_{\phi,r}=- 3\mu \Omega \sin \theta \\
 & T_{\theta}=\sigma_{\theta,r}=0 \\
 & T_{r}=\sigma_{r,r}=-p
\end{align}$$
Obviously, $T_{\theta},T_{r}$ don't contribute any torque. $T_{\phi}$ would produce a torque of $a\sin \theta T_{\phi}$. We have:
$$\begin{align}
\tau^{'} & = \int_{0}^{2\pi}d\phi\int_{0}^{\pi}d\theta a^{2}\sin \theta T_{\phi}(a\sin \theta) \\
 & = -3\mu \Omega a^{3}(2\pi)\int_{0}^{\pi}d\theta\sin ^{3}\theta
\end{align}$$
Know that:
$$\begin{align}
\int_{0}^{\pi}d\theta \sin ^{3}\theta & = \int d\theta \sin \theta (1-\cos ^{2}\theta) \\
 & = -\int d(\cos \theta)(1-\cos ^{2}\theta) \\
 & = -\left[ \cos \theta- \frac{\cos ^{3}\theta}{3} \right]_{0}^{\pi} \\
 & = \frac{4}{3}
\end{align}$$
Then:
$$\tau^{'}=-8\pi \mu \Omega a^{3}$$
The torque applied to maintain the rotation is therefore by Newton's third law:
$$\tau=8\pi \mu \Omega a^{3}$$

# Acheson 7.5

The no-slip boundary condition gives:
$$\begin{align}
 & \text{At }\theta=\Omega t\text{ : }u_{r}=0,\ u_{\theta}=\Omega r \\
 & \text{At }\theta=-\Omega t\text{ : }u_{r}=0,\ u_{\theta}=-\Omega r
\end{align}$$
For the stream function in polar coordinates:
$$u_{r}= \frac{1}{r} \frac{\partial \psi}{\partial \theta},\ u_{\theta}= - \frac{\partial \psi}{\partial r}$$
Therefore:
$$\begin{align}
 & - \left. \frac{\partial \psi}{\partial r}  \right|_{\theta=\pm \Omega t}=\pm \Omega r\implies \psi(r,\pm \Omega t)=\mp \frac{1}{2}\Omega r^{2}+f(\theta) \\
 & \left.  \frac{1}{r} \frac{\partial \psi}{\partial \theta}  \right|_{\theta=\pm \Omega t}=0\implies \left. \frac{\partial \psi}{\partial \theta}  \right|_{\theta=\pm \Omega t}=0
\end{align}$$
Since at $r=0$, $\frac{\partial \psi}{\partial r}=f(\theta)$ is uniquely defined for any $\theta$, we must conclude that $f$ is independent of $\theta$, and therefore is a constant. Without loss of generality, take $f=0$. Then:
$$\begin{align}
 & \psi(r,+ \Omega t)= \mp \frac{1}{2}\Omega r^{2} \\
 & \left.  \frac{\partial \psi}{\partial \theta}  \right|_{\theta=\pm \Omega t}=0
\end{align}$$
Under the assumption that the Reynold's number is small, we have:
$$\begin{align}
 & \nabla p=\mu \nabla^{2}\mathbf{u} \\
 & \nabla \cdot \mathbf{u}=0
\end{align}$$
Then:
$$0=\nabla \times \nabla p=\mu \nabla \times \nabla^{2}\mathbf{u}$$
We adopt Einstein's summation convention:
$$\begin{align}
(\nabla \times \nabla^{2}\mathbf{u}) _{i} & = \epsilon_{ijk}\partial_{j}\partial_{l}^{2}u_{k} \\
 & = \partial_{l}^{2}(\epsilon_{ijk}\partial_{j}u_{k}) \\
 & = \nabla^{2}(\nabla \times \mathbf{u})_{i}
\end{align}$$
Then:
$$\begin{align}
\nabla^{2}(\nabla \times \mathbf{u})=0
\end{align}$$
The only existent component of $\nabla \times \mathbf{u}$ is:
$$\begin{align}
(\nabla \times \mathbf{u})_{z}= \frac{1}{r} \frac{\partial}{\partial r}(ru_{\theta})- \frac{1}{r} \frac{\partial u_{r}}{\partial \theta}
\end{align}$$
after we add a z-axis for convenience. Then:
$$\begin{align}
  (\nabla \times \mathbf{u})_{z} & = \frac{1}{r} \frac{\partial}{\partial r}\left( -r \frac{\partial \psi}{\partial r} \right)- \frac{1}{r} \frac{\partial}{\partial \theta}\left(  \frac{1}{r} \frac{\partial \psi}{\partial \theta} \right) \\
 & = - \frac{\partial^{2}\psi}{\partial r^{2}}- \frac{1}{r} \frac{\partial \psi}{\partial r}- \frac{1}{r^{2}} \frac{\partial^{2}\psi}{\partial \theta^{2}} \\
 & =-\nabla^{2}\psi
\end{align}$$
Then:
$$\begin{align}
 & \nabla^{2}(\nabla \times \mathbf{u})=0 \\
\implies & \nabla^{2}(\nabla \times \mathbf{u})_{z}=0 \\
\implies & \nabla^{4}\psi=0\implies\left( \frac{\partial^{2}}{\partial r^{2}}_{  } + \frac{1}{r} \frac{\partial}{\partial r}+ \frac{1}{r^{2}} \frac{\partial^{2}}{\partial \theta^{2}} \right)^{2}\psi=0
\end{align}$$
We make the ansatz that $\psi(r,\theta,t)= r^{2}g(\theta,t)$. Then:
$$\begin{align}
\nabla^{2}\psi & = \frac{\partial^{2}}{\partial r^{2}}(r^{2}g)+ \frac{1}{r} \frac{\partial}{\partial r}(r^{2}g)+ \frac{1}{r^{2}} \frac{\partial^{2}}{\partial \theta^{2}}(r^{2}g) \\
 & = 4g+ \frac{\partial^{2}}{\partial \theta^{2}}g
\end{align}$$
Then:
$$\begin{align}
\nabla^{2}(\nabla^{2}\psi) & = \nabla^{2}\left( 4g+  \frac{\partial^{2}}{\partial \theta^{2}}g \right) \\
 & = \frac{1}{r^{2}} \frac{\partial^{2}}{\partial \theta^{2}}\left( 4g+  \frac{\partial^{2}}{\partial \theta^{2}}g \right) \\
 & = \frac{1}{r^{2}}\left(  4 \frac{\partial^{2}}{\partial \theta^{2}}g+ \frac{\partial^{4}}{\partial \theta^{4}}g \right)=0 \\
\implies  & 4 \frac{\partial^{2}}{\partial \theta^{2}}g+ \frac{\partial^{4}}{\partial \theta^{4}}g=0
\end{align}$$
We integrate:
$$\begin{align}
 & 4 \frac{\partial}{\partial \theta}g+ \frac{\partial^{3}}{\partial \theta^{3}}g=A \\
\implies & 4g+ \frac{\partial^{2}}{\partial \theta^{2}}g=A\theta+B
\end{align}$$
We rewrite the constants:
$$\begin{align}
 & 4(g+A\theta+B)+ \frac{\partial^{2}}{\partial \theta^{2}}g=0 \\
\implies & 4(g+A\theta+B)+ \frac{\partial^{2}}{\partial \theta^{2}}(g+A\theta+B)=0
\end{align}$$
Obviously, the solution to the homogeneous equation above is $C\cos 2\theta+D\sin{2}\theta$. Then rewrite the constants, and we obtain:
$$g=A\cos{2}\theta+B\sin 2\theta+C\theta+D$$
We have:
$$\begin{align}  &  g(\Omega t)=- \frac{1}{2}\Omega   \implies A\cos 2\Omega t + B\sin 2 \Omega t + C \Omega t + D = -\frac{1}{2}\Omega  \\   & g^{}(-\Omega t)= \frac{1}{2}\Omega  \implies A\cos 2 \Omega t - B\sin 2\Omega t - C\Omega t + D = \frac{1}{2}\Omega \ \\   & g^{'}(\Omega t)= 0 \implies -2A\sin 2\Omega t + 2B\cos 2\Omega t + C = 0  \\   & g^{'}(-\Omega t)=0\implies 2A\sin 2\Omega t + 2B\cos 2\Omega t + C = 0  \end{align}$$
Add and subtract the third and fourth equations:
$$\begin{align}
 & 2B\cos 2\Omega t +C=0 \\
 & A \sin 2 \Omega t=0 \implies A=0
\end{align}$$
Add and subtract the first and second equations:
$$\begin{align}
 & 2 A \cos 2\Omega t+2D=0\implies D=0 \\
 & 2B \sin 2\Omega t+ 2C \Omega t =-\Omega
\end{align}$$
Then:
$$\begin{align}
 & 2B \sin 2\Omega t+ 2(-2B\cos 2\Omega t)\Omega t=-\Omega \\
\implies & B= \frac{-\Omega /2}{\sin 2\Omega t-2\Omega t \cos 2\Omega t}
\end{align}$$
We then have:
$$\begin{align}
C & = -2B \cos 2\Omega t= \frac{\Omega \cos 2 \Omega t}{\sin 2\Omega t-2 \Omega t \cos 2\Omega t}
\end{align}$$
Then:
$$\begin{align}
g & = \frac{-\Omega /2}{\sin 2\Omega t-2\Omega t \cos 2\Omega t} \sin 2\Omega t+ \frac{\Omega \cos 2\Omega t}{\sin 2 \Omega t-2\Omega t \cos 2\Omega t}\theta \\
 & = \frac{- \Omega /2}{\sin 2\Omega t-2\Omega t\cos 2\Omega t}(\sin 2\theta-2\theta \cos 2\Omega t)
\end{align}$$
Finally:
$$\begin{align}
\psi & = r^{2}g \\
 & = - \frac{1}{2}\Omega r^{2}\left(  \frac{\sin 2\theta-2\theta \cos 2\Omega t}{\sin 2\Omega t-2\Omega t \cos 2\Omega t} \right)
\end{align}$$
Now take $2\Omega t= \frac{\pi}{2}$. Then:
$$\begin{align}
\psi & = - \frac{1}{2}\Omega r^{2}\sin{2}\theta \\
 & = -\Omega r^{2}\sin \theta \cos \theta \\
 & = -\Omega xy
\end{align}$$
Recall that the streamlines are given by $\psi=\text{const.}$ Therefore:
$$-\Omega xy=\text{const.}$$
This indeed defines a hyperbola. 

Know that:
$$\begin{align}
u_{r} & = \frac{1}{r} \frac{\partial \psi}{\partial \theta} \\
 & = \frac{1}{r}(-\Omega r^{2} \cos 2\theta) \sim \mathcal{O}(\Omega r^{})\\
u_{\theta} & = - \frac{\partial \psi}{\partial r} \\
 & = -\Omega r \sin 2\theta\sim \mathcal{O}(\Omega r^{})
\end{align}$$
Then the characteristic velocity scale of the system is $\Omega r$. Since the boundaries are moving with $\Omega t$, the characteristic time scale of the system is $\frac{1}{\Omega}$. The characteristic length scale is naturally $r$. Therefore:
$$\begin{align}
 & \left| \frac{\partial \mathbf{u}}{\partial t}  \right|\sim \mathcal{O}\left( \frac{U}{T} \right) \sim \mathcal{O}(\Omega^{2}r) \\
 & |\mathbf{u}\cdot \nabla \mathbf{u} |\sim \mathcal{O}\left( U \cdot \frac{1}{r}\cdot U \right) \sim \mathcal{O}(\Omega^{2}r) \\
 & |\nu \nabla^{2}\mathbf{u}|\sim \mathcal{O}\left( \nu \frac{U}{r^{2}} \right)\sim \mathcal{O}\left( \frac{\nu \Omega}{r} \right)
\end{align}$$
In order for the viscous terms to dominate, we must have:
$$\Omega^{2}r\ll \frac{\nu \Omega}{r}\implies \frac{\Omega r^{2}}{\nu}\ll 1$$
# Acheson 8.2

Know that:
$$\nabla \cdot \mathbf{u}=0$$
We can introduce the flow function $\psi$. We have:
$$\begin{align}
 & \frac{\partial \psi}{\partial y}=u \\
\implies &  \psi=\int_{\text{stagnation point} }^{y} dy^{'}u =\int d(\eta^{'} g(x)) \alpha x f^{'}(\eta^{'})= \alpha x g(x)f(\eta)+C
\end{align}$$
Know that on the surface of the cylinder, we have $\psi=C$. The surface naturally defines a line of constant $\psi$ since no flow can penetrate the surface. Without loss of generality, we can take $C=0$. Then:
$$\begin{align}
v & = - \frac{\partial \psi}{\partial x} \\
 & = - \frac{\partial \psi}{\partial x}- \frac{\partial \psi}{\partial \eta} \frac{\partial \eta}{\partial x} \\
 & = -\alpha g(x)f(\eta)- \frac{\partial \psi}{\partial \eta}\left( - \frac{y g^{'}}{g^{2}} 
 \right) \\
 & = -\alpha g(x)f(\eta)- \frac{\partial \psi}{\partial \eta}\left( -\eta \frac{g^{'}}{g} \right) \\
 & = -\alpha g f -\alpha x g^{'} f+ \alpha x g f^{'}\left( - \frac{\eta g^{'}}{g} \right) \\
 & = -\alpha f (g+x g^{'})+ \alpha x \eta g^{'}f^{'}
\end{align}$$
Here the x derivatives in the first and second lines are different. The x derivative in the first line means to extract out all x dependence. The x derivatives in the second line just means to extract out the explicit x dependence. Then:
$$\begin{align}
 & \frac{\partial u}{\partial x}   = \frac{\partial}{\partial x}(\alpha x f^{'})= \alpha f^{'}+\alpha xf^{''}\left( - \eta \frac{g^{'}}{g} \right) \\
 & u \frac{\partial u}{\partial x}= \alpha x f^{'}\left( \alpha f^{'}- \alpha x \eta \frac{g^{'}}{g}f^{''} \right)= \alpha^{2}x f^{'2}-\alpha^{2} x^{2} \eta \frac{g^{'}}{g} f^{'}f^{''}
\end{align}$$
$$\begin{align}
 & \frac{\partial u}{\partial y}=\alpha x f^{''} \frac{1}{g} \\
 & v \frac{\partial u}{\partial y}=(-\alpha f(g+xg^{'})+\alpha x\eta g^{'}f^{'})\left(  \frac{\alpha x }{g} f^{''} \right) = -\alpha^{2} x\left( 1+ \frac{xg^{'}}{g} \right)ff^{''}+ \alpha^{2} x^{2} \eta \frac{g^{'}}{g} f^{'}f^{''}
\end{align}$$
$$\begin{align}
 & \frac{\partial^{2}u}{\partial y^{2}}= \frac{\partial}{\partial y}\left(  \frac{\alpha x}{g} f^{''} \right)= \frac{\alpha x}{g^{2}}f^{'''}
\end{align}$$
We have the momentum equation:
$$\begin{align}
 &  u \frac{\partial u}{\partial x}+ v \frac{\partial u}{\partial y}= U \frac{d U}{dx}+ \nu \frac{\partial^{2}u}{\partial y^{2}} \\
\implies & \alpha^{2}x f^{'2}-\alpha^{2} x^{2} \eta \frac{g^{'}}{g} f^{'}f^{''}-\alpha^{2} x\left( 1+ \frac{xg^{'}}{g} \right)ff^{''}+ \alpha^{2} x^{2} \eta \frac{g^{'}}{g} f^{'}f^{''} = \alpha x \cdot \alpha+\nu \frac{\alpha x}{g^{2}}f^{'''} \\
\implies & \alpha^{2}xf^{'2}-\alpha^{2}x\left( 1+ \frac{xg^{'}}{g} \right)f f^{''}=\alpha^{2}x + \frac{\nu \alpha x}{g^{2}}f^{'''} \\
\implies & f^{'2}-\left( 1+ \frac{xg^{'}}{g} \right)f f^{''}=1+ \frac{\nu}{\alpha g^{2}}f^{'''} \\
\implies & \frac{\nu}{\alpha g^{2}(x)}f^{'''}(\eta)+\left( 1+ \frac{xg^{'}(x)}{g(x)} \right)f(\eta) f^{''}(\eta)+1-f^{'2}(\eta)=0
\end{align}$$
Know that $x,\eta$ are independent from each other. If $g(x)$ is not a constant, then $f(\eta)$ satisfies an infinite set of differential equations, defined at each $x$. This is improbable for any non-trivial $f$. Therefore we must conclude that $g(x)=\text{const., }\forall x$. Then we have:
$$\begin{align}
 & \frac{\nu}{\alpha g^{2}}f^{'''}(\eta)+ff^{''}+1-f^{'2}=0 \tag{*}
\end{align}$$
We rescale: $\tilde{\eta}=\lambda \eta$, $\tilde{f}(\tilde{\eta})=\gamma f(\eta)$. Then:
$$\frac{d}{d \eta}f= \frac{\lambda}{\gamma} \frac{d}{d \tilde{\eta}} \tilde{f}$$
Know that:
$$u=\alpha x \frac{d}{d \eta}f= \frac{\lambda}{\gamma}\alpha x \frac{d}{d \tilde{\eta}}\tilde{f}$$
We choose $\gamma=\lambda$. Then:
$$\begin{align}
 &  \frac{d^{2}}{d \eta^{2}}f= \lambda \frac{d^{2}}{d \tilde{\eta}^{2}}\tilde{f} \\
 & \frac{d^{3}}{d \eta^{3}} f= \lambda^{2} \frac{d^{3}}{d \tilde{\eta}^{3}}\tilde{f}
\end{align}$$
Substitute into $(*)$ to obtain:
$$\begin{align}
 & \frac{\nu}{\alpha g^{2}} \lambda \frac{d^{3}}{d \tilde{\eta}^{3}}\tilde{f}+ \frac{1}{\lambda}\tilde{f}  \cdot \lambda \frac{d^{2}}{d  \tilde{\eta}^{2}} \tilde{f}+1- \left( \frac{d}{d \tilde{\eta}}\tilde{f} \right) ^{2}=0 \\
\implies & \left( \frac{\nu \lambda^{2}}{\alpha g^{2}} \right) \frac{d^{3}}{d \tilde{\eta}^{3}}\tilde{f}+ \tilde{f} \frac{d^{2}}{d \tilde{\eta}^{2}}\tilde{f}+1- \left( \frac{d}{d \tilde{\eta}}\tilde{f} \right)^{2}=0
\end{align}$$
Set $\frac{\nu \lambda^{2}}{\alpha g^{2}}=1\implies \lambda=g \sqrt{ \frac{\alpha}{\nu} }$. Then $\tilde{\eta}=\lambda \eta= g \frac{\sqrt{ \alpha }}{\sqrt{ \nu }}\cdot \frac{y}{g}= \frac{y}{\sqrt{ \nu /\alpha }}$. We obtain:
$$\tilde{f}^{'''}+ \tilde{f} \tilde{f}^{''}+1- \tilde{f}^{'2}=0$$
The boundary conditions are:
$$u(x,0)=\alpha x  \tilde{f}^{'}(0)=0\implies \tilde{f}^{'}(0)=0\text{ at }y=0,\ \tilde{\eta}=0$$
$$v(x,0)= - \alpha \sqrt{ \frac{\nu}{\alpha} }\tilde{f}(0)=0\implies \tilde{f}(0)=0\text{ at }y=0,\ \tilde{\eta}=0$$
$$u(x,\infty)=\alpha x \tilde{f}^{'}(\infty)=U\implies \tilde{f}^{'}(\infty)=1\text{ as }y\rightarrow \infty,\ \tilde{\eta}\rightarrow \infty$$
To be conformal with the notations in the problem, just replace $\tilde{f}$ by $f$, $\tilde{\eta}$ by $\eta$. 
# Acheson 8.3

From the definition of the stream function:
$$\begin{align}

u & = \frac{\partial \psi}{\partial y}= \frac{\partial}{\partial y}(F(x)f(\eta)) \\

& = F(x)f^{'}(\eta) \frac{\partial \eta}{\partial y}= \frac{F(x)}{g(x)}f^{'}(\eta)

\end{align}$$
Impose the mainstream condition as $\eta \rightarrow \infty$:
$$\begin{align}

\lim_{ \eta \rightarrow \infty } u & = U(x) \\

\implies \frac{F(x)}{g(x)}\lim_{ \eta \rightarrow \infty } f^{'}(\eta) & = U(x)

\end{align}$$
Since $\lim_{ \eta \rightarrow \infty } f^{'}(\eta)$ must be a constant, say $c$, if the limit exists, we have:
$$\begin{align}

c \frac{F(x)}{g(x)} & = U(x)\implies F(x)= \frac{1}{c}U(x)g(x)

\end{align}$$
For convenience, choose $c=1$. We then have $F(x)=U(x)g(x)$. The stream function and the $x$-component velocity are:
$$\begin{align}

\psi & = U(x)g(x)f(\eta) \\

u & = U(x)f^{'}(\eta)

\end{align}$$
We compute the necessary derivatives for the momentum equation. First, the $y$-component velocity:
$$\begin{align}

v & = - \frac{\partial \psi}{\partial x}= - \frac{\partial}{\partial x}(Ugf) \\

& = -(U^{'}g+Ug^{'})f-Ugf^{'} \frac{\partial \eta}{\partial x} \\

& = -(U^{'}g+Ug^{'})f-Ugf^{'}\left( -\eta \frac{g^{'}}{g} \right) \\

& = -(U^{'}g+Ug^{'})f+U\eta g^{'}f^{'}

\end{align}$$
Then the spatial derivatives of $u$:
$$\begin{align}

\frac{\partial u}{\partial x} & = \frac{\partial}{\partial x}(Uf^{'}) \\

& = U^{'}f^{'}+Uf^{''}\left( -\eta \frac{g^{'}}{g} \right)= U^{'}f^{'}-U\eta \frac{g^{'}}{g}f^{''} \\

\frac{\partial u}{\partial y} & = \frac{\partial}{\partial y}(Uf^{'}) \\

& = Uf^{''} \frac{1}{g}= \frac{U}{g}f^{''} \\

\frac{\partial^{2}u}{\partial y^{2}} & = \frac{\partial}{\partial y}\left( \frac{U}{g}f^{''} \right)= \frac{U}{g^{2}}f^{'''}

\end{align}$$
We construct the convective terms:
$$\begin{align}

u \frac{\partial u}{\partial x} & = (Uf^{'}) \left( U^{'}f^{'}-U\eta \frac{g^{'}}{g}f^{''} \right) \\

& = UU^{'}f^{'2}-U^{2}\eta \frac{g^{'}}{g}f^{'}f^{''} \\

v \frac{\partial u}{\partial y} & = \left( -(U^{'}g+Ug^{'})f+U\eta g^{'}f^{'} \right)\left( \frac{U}{g}f^{''} \right) \\

& = -U\left( U^{'}+U \frac{g^{'}}{g} \right)ff^{''}+U^{2}\eta \frac{g^{'}}{g}f^{'}f^{''}

\end{align}$$
Adding them up, the cross terms containing $\eta$ exactly cancel out:
$$\begin{align}

u \frac{\partial u}{\partial x}+v \frac{\partial u}{\partial y} & = UU^{'}f^{'2}-U\left( U^{'}+U \frac{g^{'}}{g} \right)ff^{''} \\

& = UU^{'} \left[ f^{'2}-\left( 1+ \frac{Ug^{'}}{U^{'}g} \right)ff^{''} \right]

\end{align}$$
Substitute into the boundary layer momentum equation $u \frac{\partial u}{\partial x}+ v \frac{\partial u}{\partial y} = U \frac{dU}{dx}+ \nu \frac{\partial^{2}u}{\partial y^{2}}$:
$$\begin{align}

UU^{'} \left[ f^{'2}-\left( 1+ \frac{Ug^{'}}{U^{'}g} \right)ff^{''} \right] = UU^{'}+\nu \frac{U}{g^{2}}f^{'''}

\end{align}$$
Assuming $U^{'} \neq 0$, divide both sides by $UU^{'}$ (if $U^{'}=0$, it is just the Blasius flow we treated in the last homework, which is not our interest here):
$$\begin{align}

f^{'2}-\left( 1+ \frac{Ug^{'}}{U^{'}g} \right)ff^{''}= 1+ \frac{\nu}{g^{2}U^{'}}f^{'''}

\end{align}$$
For this equation to admit a similarity solution $f(\eta)$, the coefficients must be independent of $x$, as we argued in Acheson 8.2. We introduce constants $C_{1}$ and $C_{2}$:
$$\begin{align}

\frac{\nu}{g^{2}U^{'}} & = C_{1} \\

1+ \frac{Ug^{'}}{U^{'}g} & = C_{2}

\end{align}$$
From the first condition, we have $g^{2}= \frac{\nu}{C_{1}U^{'} }$. Differentiating with respect to $x$:
$$\begin{align}

2gg^{'} & = - \frac{\nu U^{''}}{C_{1}U^{'2}} \\

\implies \frac{g^{'}}{g} & = \frac{1}{2g^{2}}\left( - \frac{\nu U^{''}}{C_{1}U^{'2}} \right)= \frac{C_{1}U^{'}}{2\nu}\left( - \frac{\nu U^{''}}{C_{1}U^{'2}} \right)= - \frac{U^{''}}{2U^{'}}

\end{align}$$
Substitute this into the second condition:
$$\begin{align}

1+ \frac{U}{U^{'}}\left( - \frac{U^{''}}{2U^{'}} \right) & = C_{2} \\

\implies \frac{UU^{''}}{U^{'2}} & = 2(1-C_{2}) \equiv K

\end{align}$$
We solve the differential equation $UU^{''}=KU^{'2}$, which can be rewritten as:
$$\begin{align}

\frac{U^{''}}{U^{'}} & = K \frac{U^{'}}{U}

\end{align}$$
Integrating with respect to $x$:
$$\begin{align}

\int \frac{dU^{'}}{U^{'}} & = K\int \frac{dU}{U} \\

\ln U^{'} & = K\ln U + \ln C \\

U^{'} & = CU^{K}

\end{align}$$
This is a separable equation $\frac{dU}{U^{K}}=Cdx$. We consider two cases based on the value of $K$.

If $K=1$:

$$\begin{align}

\int \frac{dU}{U} & = \int Cdx \\

\ln U & = Cx+D \\

\implies U(x) & \propto e^{\alpha x}

\end{align}$$
If $K \neq 1$:

$$\begin{align}

\int U^{-K}dU & = \int Cdx \\

\frac{U^{1-K}}{1-K} & = Cx+D \\

U^{1-K} & = (1-K)(Cx+D)

\end{align}$$
Let $m= \frac{1}{1-K}$. We obtain:
$$\begin{align}

U(x) & \propto (x-x_{0})^{m}

\end{align}$$
Consider the specific case $U(x)=Ax^{m}$ with $A>0$. Then $U^{'}=mAx^{m-1}$. From the condition $g^{2}U^{'}=\text{const.}$, we have:
$$\begin{align}

g^{2}(x^{m-1}) & \propto 1 \\

\implies g(x) & \propto x^{ \frac{1-m}{2} }

\end{align}$$
Choose the specific proportional constant as given in the problem:
$$\begin{align}

g(x) & = \left[ \frac{2\nu}{(m+1)Ax^{m-1}} \right]^{ \frac{1}{2} }

\end{align}$$
We evaluate the two constant coefficients in the differential equation with this choice of $g(x)$. First coefficient: 
$$\begin{align} g^{2}U^{'} & = \left [\frac{2\nu}{(m+1)Ax^{m-1}} \right]= \frac{2m\nu}{m+1} \\ \implies \frac{\nu}{g^{2}U^{'}} & = \frac{\nu}{ \frac{2m\nu}{m+1} }= \frac{m+1}{2m} \end{align}$$ Second coefficient: Since $g \propto x^{ \frac{1-m}{2} }$, we have $\frac{g^{'}}{g}= \frac{1-m}{2x}$. Also $\frac{U}{U^{'}}= \frac{x}{m}$. Then: $$\begin{align} 1+ \frac{U}{U^{'}} \frac{g^{'}}{g} & = 1+\left( \frac{x}{m} \right)\left( \frac{1-m}{2x} \right)= 1+ \frac{1-m}{2m}= \frac{m+1}{2m} \end{align}$$
Substitute these back into the differential equation:
$$\begin{align}

f^{'2}-\left( \frac{m+1}{2m} \right)ff^{''} & = 1+\left( \frac{m+1}{2m} \right)f^{'''}

\end{align}$$
Multiply by $\frac{2m}{m+1}$:
$$\begin{align}

\frac{2m}{m+1}f^{'2}-ff^{''} & = \frac{2m}{m+1}+f^{'''} \\

\implies f^{'''}+ff^{''}+ \frac{2m}{m+1}(1-f^{'2}) & = 0

\end{align}$$
The boundary conditions are:
$$\begin{align}

u(x,0) & = U(x)f^{'}(0)=0\implies f^{'}(0)=0 \\

v(x,0) & = 0\implies f(0)=0 \\

u(x,\infty) & = U(x)f^{'}(\infty)=U(x)\implies f^{'}(\infty)=1

\end{align}$$
For flow past a flat plate, the mainstream velocity is constant $U(x)=U_{0}$. This corresponds to $m=0$. Substituting $m=0$ into the Falkner-Skan equation yields:
$$\begin{align}

f^{'''}+ff^{''}+0 & = 0\implies f^{'''}+ff^{''}=0

\end{align}$$
It is worth noting an apparent mathematical contradiction in the derivation regarding the flow past a flat plate ($m=0$). During the intermediate steps, we explicitly assumed $U^{'} \neq 0$ to divide the momentum equation by $U U^{'}$, which seemingly precludes the constant mainstream velocity case where $U^{'} = 0$. Consequently, the coefficient $\frac{m+1}{2m}$ exhibits an algebraic singularity at $m=0$. However, this contradiction is resolved in the final step when we multiply the entire equation by $\frac{2m}{m+1}$. This operation acts as an algebraic restoration that effectively eliminates the removable singularity in the parameter space. By taking the limit as $m \rightarrow 0$, the term $\frac{2m}{m+1}(1-f^{'2})$ smoothly vanishes, and the Falkner-Skan equation elegantly and safely degenerates into the classic Blasius equation ($f^{'''}+ff^{''}=0$). Thus, the final unified equation remains perfectly well-posed and valid even for the boundary case that was temporarily excluded during the derivation.

For flow near a forward stagnation point, $U(x)=\alpha x$, which corresponds to $m=1$. Substituting $m=1$ yields:
$$\begin{align}

f^{'''}+ff^{''}+ \frac{2}{2}(1-f^{'2}) & = 0\implies f^{'''}+ff^{''}+1-f^{'2}=0

\end{align}$$