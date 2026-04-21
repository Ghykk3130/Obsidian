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

To solve the equation, we separate the variables. Let $u_{\phi}=R(r)\Theta(\theta)$