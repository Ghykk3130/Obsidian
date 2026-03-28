# Acheson 5.6

Fix $t$, assume that $C(t)$ is parametrized by $\boldsymbol{\alpha}(s,t), s\in[0,1]$. Then we have:
$$\begin{align}
\mathscr{C}(t) & = \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \mathbf{a}(\boldsymbol{\alpha}(s,t),t)
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{0}^{1}ds \left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a}+ \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt}
\end{align}$$
By definition, if $s$ is fixed, because $\boldsymbol{\alpha}(s,t)$ describes positions of the same group of particles, we have:
$$\frac{\partial \boldsymbol{\alpha}}{\partial t}=\mathbf{u}(\boldsymbol{\alpha}(s,t),t)$$
Then:
$$\begin{align}
\frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} & = \frac{\partial }{\partial s} \frac{\partial \boldsymbol{\alpha}}{\partial t} \\
 & = \frac{\partial}{\partial s}\mathbf{u}(\boldsymbol{\alpha}(s,t),t) \\
\frac{D\mathbf{a}}{Dt} & = \frac{\partial \mathbf{a}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{a}
\end{align}$$
We then have:
$$\begin{align}
\int_{0}^{1}ds\left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a} & = \int_{C(t)} d\boldsymbol{u}\cdot \mathbf{a} \\
 & = \int_{C(t)} d\mathbf{x}\cdot(\nabla \mathbf{u})\cdot \mathbf{a} \\
\int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt} & = \int_{C(t)} d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{a} \right)
\end{align}$$
Then adopting Einstein summation convention, we have:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{C(t)}\left(  \frac{\partial a_{i}}{\partial t}dx_{i}+u_{j} \left(\frac{\partial}{\partial x_{j}}a_{i}\right)dx_{i}+ dx_{i} \left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} \right)
\end{align}$$
We force out the cross product by:
$$\begin{align}
u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} & = dx_{i}\left( u_{j} \frac{\partial}{\partial x_{j}}a_{i}+ a_{j} \frac{\partial}{\partial x_{i}}u_{j} \right) \\
 & = dx_{i}\left( u_{j} \frac{\partial}{\partial x_{j}} a_{i}- u_{j} \frac{\partial}{\partial x_{i}}a_{j}+ u_{j} \frac{\partial}{\partial x_{i}}a_{j}+a_{j} \frac{\partial}{\partial x_{i}}u_{j} \right)
\end{align}$$
Recall that:
$$\begin{align}
[(\nabla \times \mathbf{a})\times \mathbf{u}]_{i} & = \epsilon_{ijk}\epsilon_{jlm}\left(  \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \\
 & = (\delta_{kl}\delta_{im}-\delta_{km}\delta_{il}) \left( \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \\
 & = u_{k} \frac{\partial}{\partial x_{k}}a_{i}- u_{k} \frac{\partial}{\partial x_{i}}a_{k}
\end{align}$$
Then we have:
$$\begin{align}
u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} & = dx_{i}\left[ ((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ \frac{\partial}{\partial x_{i}}(u_{j}a_{j})  \right] \\
 & = dx_{i}[((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ (\nabla(\mathbf{u}\cdot \mathbf{a}))_{i}]
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{C(t)}d\mathbf{x}\cdot\left(  \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u}+ \nabla(\mathbf{u}\cdot \mathbf{a}) \right) \\
 & = \int_{C(t)}d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u} \right)
\end{align}$$
The last step is because $\int d\mathbf{x}\cdot \nabla(\mathbf{u}\cdot \mathbf{a})= [\mathbf{u}\cdot \mathbf{a}]_{i}^{f}=0$ on any loop. 
# Acheson 5.10

We know that the complex potential for the vortex at $(d,y_{0})$ is $- \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})$. Know that the boundary condition is such that the flow cannot penetrate $x=0$. Then by method of image, if we put a line vortex with opposite vorticity at $(-d,y_{0})$, and remove the wall $x=0$, because of the symmetry of the problem, there is no flow penetrating $x=0$. Then the boundary condition is automatically satisfied. The Laplace equation in $x\geq 0$ is still satisfied since the line vortex we constructed is in $x<0$. Then we claim that:
$$w(z)= - \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})+ \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0})$$
is a solution to the problem. By uniqueness theorem, this is the only solution.

We can verify that $x=0$ is indeed a streamline. Set $z=iy, z-d-iy_{0}=|c|e^{i\theta}$. Then $z+d-iy_{0}=|c|e^{i(\pi-\theta)}$. Then:
$$\begin{align}
w & = - \frac{i\Gamma}{2\pi}(\ln|c|+i\theta)+ \frac{i\Gamma }{2\pi}(\ln|c|+i(\pi-\theta)) \\
 & = \frac{\Gamma}{2\pi}(2\theta-\pi)\\
\implies \mathrm{Im}(w) & =0
\end{align} $$
So $\psi=0$. Therefore $x=0$ indeed defines a streamline, so that no flow penetrates through.



