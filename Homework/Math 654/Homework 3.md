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

We know that the complex potential for the vortex at $(d,y_{0})$ is $- \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})$. Know that the boundary condition is such that the flow cannot penetrate $x=0$. Then by method of image, if we put a line vortex with opposite circulation at $(-d,y_{0})$, and remove the wall $x=0$, because of the symmetry of the problem, there is no flow penetrating $x=0$. Then the boundary condition is automatically satisfied. The Laplace equation in $x\geq 0$ is still satisfied since the line vortex we constructed is in $x<0$. Then we claim that:
$$w(z)= - \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})+ \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0})$$
is a solution to the problem. By uniqueness theorem, this is the only solution.

We can verify that $x=0$ is indeed a streamline. Set $z=iy, z-d-iy_{0}=|c|e^{i\theta}$. Then $z+d-iy_{0}=|c|e^{i(\pi-\theta)}$. Then:
$$\begin{align}
w & = - \frac{i\Gamma}{2\pi}(\ln|c|+i\theta)+ \frac{i\Gamma }{2\pi}(\ln|c|+i(\pi-\theta)) \\
 & = \frac{\Gamma}{2\pi}(2\theta-\pi)\\
\implies \mathrm{Im}(w) & =0
\end{align} $$
So $\psi=0$. Therefore $x=0$ indeed defines a streamline, so that no flow penetrates through.

Know that the motion of the vortex at $(d,y_{0})$ is due to $w^{'}(z)= \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0})$. We have:
$$\frac{dw^{'}}{dz}= \frac{i\Gamma}{2\pi} \frac{1}{z+d-iy_{0}}= \frac{i\Gamma}{2\pi} \frac{1}{2d}$$
Then:
$$u=0,\ v= - \frac{\Gamma}{4\pi d}$$
If $y_{0}=0$, we have that:
$$w=- \frac{i\Gamma}{2\pi}\ln(z-d)+ \frac{i\Gamma}{2\pi}\ln(z+d)$$
We first compute the complex velocity:
$$\begin{align}
\frac{dw}{dz} & = - \frac{i\Gamma}{2\pi} \frac{1}{z-d}+ \frac{i\Gamma}{2\pi} \frac{1}{z+d}  \\
 & = - \frac{i\Gamma d}{\pi(z^{2}-d^{2})}
\end{align}$$
At $x=0$, we have $\frac{dw}{dz}= - \frac{i\Gamma d}{\pi(z^{2}-d^{2})}= \frac{i\Gamma d}{\pi(y^{2}+d^{2})}$. Then:
$$v= - \frac{\Gamma d}{\pi(y^{2}+d^{2})}$$
For the potential, we have:
$$\begin{align}
\frac{\partial \phi}{\partial t}=\mathrm{Re}\left( \frac{\partial w}{\partial t} \right)
\end{align}$$
The change is induced entirely by the movement of the vortex. Since the vortex only moves in the y direction, we then compute:
$$\begin{align}
\frac{\partial w}{\partial t} & = \frac{\partial w}{\partial y_{0}}v_{0} \\
 & = \left( - \frac{i\Gamma}{2\pi} \frac{-i}{z-d-iy_{0}}+ \frac{i\Gamma}{2\pi} \frac{-i}{z+d-iy_{0}} \right) v_{0} \\
 & = \left( - \frac{i\Gamma}{2\pi} \frac{-i}{iy-d}+ \frac{i\Gamma}{2\pi} \frac{-i}{iy+d} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\
 & = - \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}
\end{align}$$
So:
$$\frac{\partial \phi}{\partial t}= - \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}$$
Adopting the result of exercise 5.9, we have:
$$\frac{p}{\rho}+ \frac{1}{2}v^{2}+ \frac{\partial \phi}{\partial t}=0$$
Here we ignore the gravitational potential, since the flow is 2d. We also choose the gauge for $\phi$ such that the right hand side is zero. Then:
$$\begin{align}
p & = - \rho \frac{\partial \phi}{\partial t}- \frac{1}{2}\rho v^{2} \\
 & =\rho \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}- \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}}
\end{align}$$
Then:
$$\begin{align}
F=\int_{\mathbb{R}}dyp
\end{align}$$
It suffices to evaluate:
$$\begin{align}
\int_{\mathbb{R}} dy \frac{1}{y^{2}+d^{2}} & = \frac{1}{d} \int_{\mathbb{R}} dx \frac{1}{x^{2}+1} \\
 & = \frac{1}{d} [\arctan x]_{-\infty}^{\infty} \\
 & = \frac{\pi}{d}
\end{align}$$
$$\begin{align}
\int_{\mathbb{R}}dy \frac{1}{(y^{2}+d^{2})^{2}} & = \frac{1}{d^{3}} \int_{\mathbb{R}} dx \frac{1}{(x^{2}+1)^{2}} \\
 & = \frac{1}{d^{3}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}d\theta \sec ^{2}\theta \frac{1}{\sec ^{4}\theta} \\
 & = \frac{1}{d^{3}} \int d\theta \cos ^{2}\theta \\ & = \frac{1}{d^{3}}\int d\theta \frac{1+\cos{2}\theta}{2} \\

 & = \frac{\pi }{2d^{3}}
\end{align}$$
Then:
$$\begin{align}
F & = \int_{\mathbb{R}}pdy \\
 & = \frac{\rho \Gamma^{2}}{4\pi^{2}} \frac{\pi}{d}- \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}}\left( \frac{\pi}{2d^{3}} \right) \\
 & = 0
\end{align}$$
If the vortex is places at $(d,0)$, then $\frac{\partial \phi}{\partial t}=0$. The Bernoulli equation is:
$$p+\frac{1}{2}\rho v^{2}=0\implies p=- \frac{1}{2}\rho v^{2}= - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}}$$
Then:
$$\begin{align}
F & = \int_{\mathbb{R}}dy\left( - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}} \right) \\
 & = - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}} \frac{\pi}{2d^{3}} \\
 & = - \frac{\rho \Gamma^{2}}{4\pi d}
\end{align}$$
# Acheson 5.16

It suffices to evaluate $\frac{D}{Dt}(\mathbf{u}\cdot \boldsymbol{\omega})= \frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega}+ \mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt}$. We have:
$$\begin{align}
\frac{D\mathbf{u}}{Dt} & = - \nabla\left(  \frac{p}{\rho}+\chi \right)
\end{align}$$
Then:
$$\begin{align}
\frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega} &  = - \boldsymbol{\omega}\cdot \nabla\left(  \frac{p}{\rho}+\chi \right)  \\
 & = -\nabla \cdot\left( \boldsymbol{\omega}\cdot\left( \frac{p}{\rho}+\chi \right) \right)+\left( \frac{p}{\rho}+\chi \right)\nabla \cdot \boldsymbol{\omega} \\
 & = -\nabla \cdot\left( \boldsymbol{\omega}\cdot\left( \frac{p}{\rho}+\chi \right) \right)
\end{align}$$
We also have the vorticity equation:
$$\begin{align}
\frac{D\boldsymbol{\omega}}{Dt}=\boldsymbol{\omega}\cdot \nabla \mathbf{u}
\end{align}$$
Then:
$$\begin{align}
\mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt} & = \mathbf{u}\cdot(\boldsymbol{\omega}\cdot \nabla \mathbf{u}) \\
 & = u_{i}\omega_{j} (\partial_{j}u_{i}) \\
 & = \omega_{j} \partial_{j}\left( \frac{1}{2}u_{i}^{2} \right) \\
 & = \boldsymbol{\omega}\cdot \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right) \\
 & = \nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)- \frac{1}{2}|\mathbf{u}|^{2} \nabla \cdot \boldsymbol{\omega} \\
 & = \nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}\int_{V} dV \boldsymbol{\omega}\cdot \mathbf{u} &  = \int_{V} dV\left( -\nabla \cdot\left(\left( \frac{p}{\rho}+\chi \right)\boldsymbol{\omega}\right) +\nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)\right) \\
 & = \int dV \nabla \cdot\left[ \left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right)\boldsymbol{\omega} \right] \\
 & = \int_{\partial V}dS  \hat{\mathbf{n}}\cdot \boldsymbol{\omega}\left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right) \\
 & =0
\end{align}$$
The helicity is clearly conserved.
# Acheson 5.25

Say $\mathbf{u}$ is the irrotational velocity field satisfying the conditions given in the problem. $\mathbf{u}^{'}$ is another velocity field satisfying those conditions, but not necessarily irrotational. It suffices to show that $\int_{V}dV \frac{1}{2}|\mathbf{u}^{'}|^{2}- \int_{V}dV \frac{1}{2}|\mathbf{u}|^{2}\geq 0$

Set $\mathbf{w}=\mathbf{u}^{'}-\mathbf{u}$. Then:
$$\begin{align}
\int_{V}dV \frac{1}{2}|\mathbf{u}^{'}|^{2}- \int_{V}dV \frac{1}{2}|\mathbf{u}|^{2} &  = \int dV \frac{1}{2}|\mathbf{u}+\mathbf{w} |^{2}- \int dV \frac{1}{2}|\mathbf{u}|^{2} \\
 & = \frac{1}{2}\int_{}dV |\mathbf{w}|^{2}+ \int dV \mathbf{u}\cdot \mathbf{w}
\end{align}$$
Assume that $\mathbf{u}=\nabla \phi$. Then:
$$\begin{align}
\int dV\mathbf{u}\cdot \mathbf{w} & = \int dV \nabla \phi \cdot \mathbf{w} \\
 & = \int dV[\nabla \cdot(\phi \boldsymbol{\omega})-\phi \nabla \cdot \boldsymbol{\omega}]
\end{align}$$
Know that:
$$\nabla \cdot \boldsymbol{\omega}=\nabla \cdot \mathbf{u}^{'}-\nabla \cdot \mathbf{u}=0$$
Then:
$$\begin{align}
\int dV \mathbf{u}\cdot \mathbf{w} & = \int dV \nabla \cdot(\phi \boldsymbol{\omega}) \\
 & = \int_{\partial V}dS  \hat{\mathbf{n}}\cdot \phi \boldsymbol{\omega}
\end{align}$$
On the boundary, we have:
$$\begin{align}
\hat{\mathbf{n}}\cdot \boldsymbol{\omega} & = \hat{\mathbf{n}}\cdot \mathbf{u}^{'}-  \hat{\mathbf{n}}\cdot \mathbf{u} \\
 & = f(\mathbf{x},t)-f(\mathbf{x},t) \\
 & =0
\end{align}$$
Therefore:
$$\int dV \mathbf{u}\cdot \mathbf{w}=0$$
So:
$$\begin{align}
\int_{V}dV \frac{1}{2}|\mathbf{u}^{'}|^{2}- \int_{V}dV \frac{1}{2}|\mathbf{u}|^{2} 
 & = \frac{1}{2}\int_{}dV |\mathbf{w}|^{2}\geq 0
\end{align}$$
# Acheson 6.6

If $\mathbf{u}=\boldsymbol{\Omega}\times \mathbf{x}$, we have:
$$\begin{align}
\frac{\partial u_{j}}{\partial x_{i}}+ \frac{\partial u_{i}}{\partial x_{j}} & = \frac{\partial}{\partial x_{i}}(\epsilon_{jkl}\Omega_{k}x_{l})+ \frac{\partial}{\partial x_{j}}(\epsilon_{ikl}\Omega_{k}x_{l}) \\
 & = \epsilon_{jkl}\Omega_{k}\delta_{il}+ \epsilon_{ikl}\Omega_{k}\delta_{jl} \\
 & = \epsilon_{jki}\Omega_{k}+\epsilon_{ikj}\Omega_{k} \\
 & = \epsilon_{jki}\Omega_{k}-\epsilon_{jki}\Omega_{k} \\
 & =0
\end{align}$$
Then $\mu\left(  \frac{\partial u_{j}}{\partial x_{i}}+ \frac{\partial u_{i}}{\partial x_{j}} \right)=0$
# Acheson 6.8

The velocity field is $\mathbf{u}=(\beta x_{2},0,0)$. Then the velocity gradient is represented by:
$$\nabla \mathbf{u} \overset{\wedge}{=}\begin{pmatrix}
0 & 0 & 0 \\
\beta & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$
The following decomposition applies:
$$\begin{align}
\begin{pmatrix}
0 & 0 & 0 \\
\beta & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}= 0+  \begin{pmatrix}
 0 &  \frac{\beta}{2} & 0 \\
\frac{\beta}{2} & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}+\begin{pmatrix}
0 & - \frac{\beta}{2} & 0 \\
\frac{\beta}{2} & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
\end{align}$$
The translation part corresponds to $0$, the rotation part corresponds to $\begin{pmatrix}0 & - \frac{\beta}{2} & 0 \\ \frac{\beta}{2} & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$, and the straining part corresponds to $\begin{pmatrix}0 & \frac{\beta}{2} & 0 \\ \frac{\beta}{2} & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$.

Obviously, the eigenvalues of the straining part are $\pm \frac{\beta}{2},0$, with eigen vectors $\frac{1}{\sqrt{ 2 }} \begin{pmatrix}1 \\ 1 \\ 0\end{pmatrix},\ \frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\ -1 \\ 0\end{pmatrix},\ \begin{pmatrix}0  \\ 0 \\  1\end{pmatrix}$. 


