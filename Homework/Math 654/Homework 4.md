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
\implies &  \frac{d^{2}\Theta}{d\theta^{2}}+\cot \theta \frac{d\Theta}{d\theta}+\left( \lambda- \frac{1}{\sin \theta \theta} \right)\Theta=0
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

