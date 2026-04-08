# Acheson 5.6

Fix $t$, assume that $C(t)$ is a closed material curve (loop) consisting of the same fluid particles as time proceeds, parametrized by $\boldsymbol{\alpha}(s,t)$, $s\in[0,1]$, with $\boldsymbol{\alpha}(0,t)=\boldsymbol{\alpha}(1,t)$. Then we have: $$\mathscr{C}(t) = \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \mathbf{a}(\boldsymbol{\alpha}(s,t),t)$$ Since the limits of integration are fixed and the integrand is smooth, we may differentiate under the integral sign. The total time derivative of $\mathbf{a}(\boldsymbol{\alpha}(s,t),t)$ with $s$ fixed is precisely the material derivative, since $\boldsymbol{\alpha}(s,t)$ is the trajectory of a fluid particle. Therefore: $$\frac{d}{dt}\mathscr{C} = \int_{0}^{1}ds \left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a}+ \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt}$$ By definition, if $s$ is fixed, because $\boldsymbol{\alpha}(s,t)$ describes positions of the same group of particles, we have: $$\frac{\partial \boldsymbol{\alpha}}{\partial t}\bigg|_{s} =\mathbf{u}(\boldsymbol{\alpha}(s,t),t)$$ Since $\boldsymbol{\alpha}$ is smooth, partial derivatives commute. Expanding $\frac{\partial}{\partial s}\mathbf{u}(\boldsymbol{\alpha}(s,t),t)$ by the chain rule: $$\frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} = \frac{\partial }{\partial s} \frac{\partial \boldsymbol{\alpha}}{\partial t} = \frac{\partial}{\partial s}\mathbf{u}(\boldsymbol{\alpha}(s,t),t), \qquad \left(\frac{\partial}{\partial s}\mathbf{u}\right)_i = \frac{\partial u_i}{\partial x_j}\frac{\partial \alpha_j}{\partial s}$$ The material derivative expands as: $$\frac{D\mathbf{a}}{Dt} = \frac{\partial \mathbf{a}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{a}$$ Writing $dx_i = \frac{\partial \alpha_i}{\partial s}ds$ and substituting, the first integral becomes: $$\int_{0}^{1}ds\left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a} = \int_0^1 ds, \frac{\partial u_i}{\partial x_j}\frac{\partial \alpha_j}{\partial s} a_i = \int_{C(t)} a_i \frac{\partial u_i}{\partial x_j} dx_j = \int_{C(t)} a_j \frac{\partial u_j}{\partial x_i}dx_i$$ where in the last step we relabelled $i\leftrightarrow j$. The second integral becomes: $$\int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt} = \int_{C(t)} d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{a} \right)$$ Then adopting Einstein summation convention, we have: $$\frac{d}{dt}\mathscr{C} = \int_{C(t)}\left( \frac{\partial a_{i}}{\partial t}dx_{i}+u_{j} \left(\frac{\partial}{\partial x_{j}}a_{i}\right)dx_{i}+ dx_{i} \left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} \right)$$ We force out the cross product term by adding and subtracting $u_j\frac{\partial a_j}{\partial x_i}dx_i$: $$\begin{align} u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} & = dx_{i}\left( u_{j} \frac{\partial}{\partial x_{j}}a_{i}+ a_{j} \frac{\partial}{\partial x_{i}}u_{j} \right) \  = dx_{i}\left( u_{j} \frac{\partial a_{i}}{\partial x_{j}}- u_{j} \frac{\partial a_{j}}{\partial x_{i}}+ u_{j} \frac{\partial a_{j}}{\partial x_{i}}+a_{j} \frac{\partial u_{j}}{\partial x_{i}} \right) \end{align}$$ Recall that: $$\begin{align} [(\nabla \times \mathbf{a})\times \mathbf{u}]_{i}  = \epsilon_{ijk}\epsilon_{jlm}\left( \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \  = (\delta_{kl}\delta_{im}-\delta_{km}\delta_{il}) \left( \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \ & = u_{k} \frac{\partial a_{i}}{\partial x_{k}}- u_{k} \frac{\partial a_{k}}{\partial x_{i}} \end{align}$$ and that $u_j\frac{\partial a_j}{\partial x_i} + a_j\frac{\partial u_j}{\partial x_i} = \frac{\partial}{\partial x_i}(u_j a_j) = (\nabla(\mathbf{u}\cdot\mathbf{a}))_i$ by the product rule. Therefore: $$\begin{align} u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j}  = dx_{i}\left[ ((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ \frac{\partial}{\partial x_{i}}(u_{j}a_{j}) \right] \  = dx_{i}[((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ (\nabla(\mathbf{u}\cdot \mathbf{a}))_{i}] \end{align}$$ Then: $$\begin{align} \frac{d}{dt}\mathscr{C}  = \int_{C(t)}d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u}+ \nabla(\mathbf{u}\cdot \mathbf{a}) \right) \ & = \int_{C(t)}d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u} \right) \end{align}$$The last step holds because $\nabla(\mathbf{u}\cdot\mathbf{a})$ is a gradient, so its line integral around any closed loop $C(t)$ vanishes by the fundamental theorem of calculus: $$\oint_{C(t)} d\mathbf{x}\cdot \nabla(\mathbf{u}\cdot \mathbf{a})= [\mathbf{u}\cdot \mathbf{a}]_{\boldsymbol{\alpha}(0,t)}^{\boldsymbol{\alpha}(1,t)}=0$$ since $\boldsymbol{\alpha}(0,t)=\boldsymbol{\alpha}(1,t)$. 
# Acheson 5.10

We consider a point vortex of circulation $\Gamma$ located at $z_{0} = d + iy_{0}$ in the right half-plane $x > 0$. The complex potential for a single isolated vortex in an unbounded fluid is given by $w_{1}(z) = - \frac{i\Gamma}{2\pi}\ln(z - z_{0}) = - \frac{i\Gamma}{2\pi}\ln(z - d - iy_{0})$.

The physical boundary condition requires that the solid wall at $x=0$ is impenetrable, meaning the normal velocity component is zero. This implies that the wall $x=0$ must be a streamline of the flow. To enforce this boundary condition, we use the method of images. We place a fictitious image line vortex with opposite circulation $-\Gamma$ at the mirrored position across the y-axis, $z_{0}^{*} = -d + iy_{0}$, and mathematically remove the physical wall. Due to the exact geometric symmetry of the opposing vortices, the normal flow components along the line $x=0$ perfectly cancel each other out, thereby naturally satisfying the non-penetration boundary condition. The complex potential contributed by this image vortex is $w_{2}(z) = \frac{i\Gamma}{2\pi}\ln(z - (-d + iy_{0})) = \frac{i\Gamma}{2\pi}\ln(z + d - iy_{0})$.

Because the constructed image line vortex is located in the region $x < 0$, the mathematical singularity it introduces lies completely outside our physical domain of interest ($x \geq 0$). Therefore, the superposition of these potentials still strictly satisfies the Laplace equation everywhere within the physical domain $x \geq 0$ (except at the real vortex location). We can then claim that the total complex potential is:
$$w(z)= - \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})+ \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0})$$
By the fundamental uniqueness theorem of potential flow, since this constructed $w(z)$ satisfies both the governing Laplace equation in the domain and the boundary condition at the wall, it is the unique and exact solution to the problem.

To rigorously verify that $x=0$ is indeed a streamline, we evaluate the complex potential on the y-axis by setting $z=iy$. The argument of the logarithm for the real vortex term becomes $z-d-iy_{0} = -d + i(y-y_{0})$. We express this in polar form. Let the magnitude be $|c| = \sqrt{(-d)^{2} + (y-y_{0})^{2}} = \sqrt{d^{2} + (y-y_{0})^{2}}$, and let the phase angle be $\theta$. Then, $z-d-iy_{0}=|c|e^{i\theta}$.

For the image vortex term, the argument is $z+d-iy_{0} = d + i(y-y_{0})$. The magnitude of this complex number is identically $\sqrt{d^{2} + (y-y_{0})^{2}} = |c|$. Because its real part is inverted relative to the first term while its imaginary part remains exactly the same, its phase angle in the complex plane is precisely $\pi-\theta$. Therefore, we can write $z+d-iy_{0}=|c|e^{i(\pi-\theta)}$.

Substituting these polar representations into the complex potential evaluated at $z=iy$:
$$
\begin{align}

w(iy) & = - \frac{i\Gamma}{2\pi}\ln(|c|e^{i\theta})+ \frac{i\Gamma }{2\pi}\ln(|c|e^{i(\pi-\theta)}) \\

& = - \frac{i\Gamma}{2\pi}(\ln|c|+i\theta)+ \frac{i\Gamma }{2\pi}(\ln|c|+i(\pi-\theta)) \\

& = - \frac{i\Gamma\ln|c|}{2\pi} + \frac{\Gamma\theta}{2\pi} + \frac{i\Gamma\ln|c|}{2\pi} - \frac{\Gamma(\pi-\theta)}{2\pi} \\

& = \frac{\Gamma}{2\pi}(2\theta-\pi)

\end{align}
$$
Because both $\Gamma$ and $\theta$ are purely real quantities, the resulting complex potential $w(iy)$ is entirely real. Since the complex potential is defined as $w = \phi + i\psi$, this implies:
$$\implies \mathrm{Im}(w) = \psi =0$$
Because the stream function $\psi$ is a constant (zero) along the entire y-axis, $x=0$ mathematically defines a continuous streamline, strictly proving that no fluid flow penetrates through the wall.

According to Helmholtz's vortex theorems, a point vortex does not induce a translational velocity upon itself. Its motion is dictated entirely by the local regular velocity field induced by all other sources—in this case, solely the image vortex. The regular part of the complex potential governing the motion of the vortex at $z_{0} = d+iy_{0}$ is $w^{'}(z)= \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0})$. We find the complex velocity induced at the location of the real vortex by differentiating this potential and evaluating it at $z = d+iy_{0}$:
$$
\begin{align}

\frac{dw^{'}}{dz} & = \frac{d}{dz}\left( \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0}) \right) 

 = \frac{i\Gamma}{2\pi} \frac{1}{z+d-iy_{0}}

\end{align}
$$
Evaluating this at the instantaneous location of the real vortex $z = d+iy_{0}$:
$$
\begin{align}

\left.\frac{dw^{'}}{dz}\right|_{z=d+iy_{0}} & = \frac{i\Gamma}{2\pi} \frac{1}{(d+iy_{0})+d-iy_{0}} = \frac{i\Gamma}{2\pi} \frac{1}{2d}  = i\frac{\Gamma}{4\pi d}

\end{align}
$$
Recalling the definition of complex velocity $\frac{dw}{dz} = u - iv$, we equate the real and imaginary components:
$$u - iv = 0 + i\frac{\Gamma}{4\pi d}$$
Then we find the instantaneous velocity components of the vortex itself:
$$u=0,\ v_{0}= - \frac{\Gamma}{4\pi d}$$
This shows the vortex moves strictly parallel to the wall in the negative y-direction at a constant speed.

We now analyze the specific instant when the real vortex crosses the x-axis, meaning $y_{0}=0$. The instantaneous position of the real vortex is simply $z=d$, and the total complex potential simplifies to:
$$w(z)=- \frac{i\Gamma}{2\pi}\ln(z-d)+ \frac{i\Gamma}{2\pi}\ln(z+d)$$
We first compute the general complex velocity field $\frac{dw}{dz} = u-iv$ in the fluid domain:
$$
\begin{align}

\frac{dw}{dz} & = \frac{d}{dz}\left(- \frac{i\Gamma}{2\pi}\ln(z-d)+ \frac{i\Gamma}{2\pi}\ln(z+d)\right) \\

& = - \frac{i\Gamma}{2\pi} \frac{1}{z-d}+ \frac{i\Gamma}{2\pi} \frac{1}{z+d} \\

& = \frac{i\Gamma}{2\pi} \left( \frac{-(z+d) + (z-d)}{(z-d)(z+d)} \right) \\

& = - \frac{i\Gamma d}{\pi(z^{2}-d^{2})}

\end{align}
$$
To find the fluid velocity directly on the solid boundary, we evaluate this derivative at $x=0$, corresponding to $z=iy$:
$$
\begin{align}

\left.\frac{dw}{dz}\right|_{z=iy} & = - \frac{i\Gamma d}{\pi((iy)^{2}-d^{2})} \\

& = - \frac{i\Gamma d}{\pi(-y^{2}-d^{2})} \\

& = \frac{i\Gamma d}{\pi(y^{2}+d^{2})}

\end{align}
$$
Applying $\frac{dw}{dz} = u-iv$, we have $u-iv = \frac{i\Gamma d}{\pi(y^{2}+d^{2})}$. Equating real and imaginary parts yields $u=0$ (consistent with the non-penetration boundary condition) and:
$$v= - \frac{\Gamma d}{\pi(y^{2}+d^{2})}$$
Because the real vortex is dynamically moving, the overall potential field is unsteady. The temporal derivative of the velocity potential $\phi$ is the real part of the temporal derivative of the complex potential:
$$
\begin{align}

\frac{\partial \phi}{\partial t}=\mathrm{Re}\left( \frac{\partial w}{\partial t} \right)

\end{align}
$$
The explicit unsteadiness in the complex potential is induced entirely by the geometric movement of the vortex position $y_{0}$ over time. Since the vortex only translates in the y-direction, we apply the chain rule with respect to $y_{0}$, noting that $\frac{dy_{0}}{dt} = v_{0}$:
$$
\begin{align}

\frac{\partial w}{\partial t} & = \frac{\partial w}{\partial y_{0}} \frac{dy_{0}}{dt} \\

& = \frac{\partial w}{\partial y_{0}}v_{0} \\

& = \frac{\partial}{\partial y_{0}}\left( - \frac{i\Gamma}{2\pi}\ln(z-d-iy_{0})+ \frac{i\Gamma}{2\pi}\ln(z+d-iy_{0}) \right) v_{0} \\

& = \left( - \frac{i\Gamma}{2\pi} \frac{-i}{z-d-iy_{0}}+ \frac{i\Gamma}{2\pi} \frac{-i}{z+d-iy_{0}} \right) v_{0}

\end{align}
$$
We evaluate this unsteady derivative specifically on the wall ($z=iy$) at the moment the vortex is at $y_{0}=0$. Substituting $z=iy$, $y_{0}=0$, and the previously derived vortex velocity $v_{0} = - \frac{\Gamma}{4\pi d}$:
$$
\begin{align}

\left.\frac{\partial w}{\partial t}\right|_{z=iy, y_{0}=0} & = \left( - \frac{i\Gamma}{2\pi} \frac{-i}{iy-d}+ \frac{i\Gamma}{2\pi} \frac{-i}{iy+d} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\

& = \left( -\frac{\Gamma}{2\pi(iy-d)} + \frac{\Gamma}{2\pi(iy+d)} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\

& = \frac{\Gamma}{2\pi}\left( \frac{-(iy+d) + (iy-d)}{(iy-d)(iy+d)} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\

& = \frac{\Gamma}{2\pi}\left( \frac{-2d}{-y^{2}-d^{2}} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\

& = \frac{\Gamma}{2\pi}\left( \frac{2d}{y^{2}+d^{2}} \right) \left( - \frac{\Gamma}{4\pi d} \right) \\

& = - \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}

\end{align}
$$
Because this resulting expression contains no imaginary components, its real part is exactly itself. So:
$$\frac{\partial \phi}{\partial t}= - \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}$$
Adopting the result of exercise 5.9, the unsteady Bernoulli equation is given by:
$$\frac{p}{\rho}+ \frac{1}{2}v^{2}+ \frac{\partial \phi}{\partial t}=0$$
Here we explicitly ignore the gravitational potential term, since the flow is strictly two-dimensional and horizontal. We also choose the far-field gauge for the potential $\phi$ such that as $y \to \pm\infty$, the velocity $v \to 0$, the unsteady term $\frac{\partial \phi}{\partial t} \to 0$, and the reference pressure $p \to 0$. This ensures the constant on the right-hand side is zero. Solving for the pressure distribution $p$ along the wall:
$$
\begin{align}

p & = - \rho \frac{\partial \phi}{\partial t}- \frac{1}{2}\rho v^{2} \\

& = -\rho \left( - \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})} \right) - \frac{1}{2}\rho \left( - \frac{\Gamma d}{\pi(y^{2}+d^{2})} \right)^{2} \\

& =\rho \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}- \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}}

\end{align}
$$
The total normal force exerted by the fluid on the solid boundary is the integral of this pressure distribution over the entire infinite length of the y-axis:
$$
\begin{align}

F=\int_{-\infty}^{\infty}p , dy

\end{align}
$$
By linearity, we separate the integral into two parts. It suffices to evaluate them individually. For the first term, we employ the substitution $y = dx$, yielding $dy = d \, dx$:
$$
\begin{align}

\int_{-\infty}^{\infty} \frac{1}{y^{2}+d^{2}} , dy & = \int_{-\infty}^{\infty} \frac{1}{(dx)^{2}+d^{2}} (d , dx) \\

& = \frac{d}{d^{2}} \int_{-\infty}^{\infty} \frac{1}{x^{2}+1} , dx \\

& = \frac{1}{d} [\arctan x]_{-\infty}^{\infty} \\ & = \frac{1}{d} \left( \frac{\pi}{2} - \left(-\frac{\pi}{2}\right) \right) \\ & = \frac{\pi}{d} \end{align}
$$
For the second term, we employ the trigonometric substitution $y = d\tan\theta$, yielding $dy = d\sec^{2}\theta \, d\theta$. The limits of integration $y \to \pm\infty$ correspond to $\theta \to \pm\frac{\pi}{2}$:
$$\begin{align} \int_{-\infty}^{\infty} \frac{1}{(y^{2}+d^{2})^{2}} , dy & = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1}{(d^{2}\tan^{2}\theta+d^{2})^{2}} (d\sec^{2}\theta , d\theta) \\

& = \frac{d}{d^{4}} \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{\sec^{2}\theta}{(\tan^{2}\theta+1)^{2}} , d\theta \\

& = \frac{1}{d^{3}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{\sec^{2}\theta}{\sec^{4}\theta} , d\theta \\

& = \frac{1}{d^{3}} \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^{2}\theta , d\theta \\

& = \frac{1}{d^{3}}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1+\cos(2\theta)}{2} , d\theta \\

& = \frac{1}{2d^{3}} \left[ \theta + \frac{\sin(2\theta)}{2} \right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \\ & = \frac{1}{2d^{3}} \left( \frac{\pi}{2} - \left(-\frac{\pi}{2}\right) \right) \\ & = \frac{\pi }{2d^{3}} \end{align} 
$$
Then, substituting these evaluated integrals back into the total force equation: 
$$
\begin{align} F & = \int_{-\infty}^{\infty}p , dy \\

& = \int_{-\infty}^{\infty} \left( \rho \frac{\Gamma^{2}}{4\pi^{2}(y^{2}+d^{2})}- \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}} \right) dy \\

& = \frac{\rho \Gamma^{2}}{4\pi^{2}} \int_{-\infty}^{\infty} \frac{1}{y^{2}+d^{2}} , dy - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}} \int_{-\infty}^{\infty} \frac{1}{(y^{2}+d^{2})^{2}} , dy \\

& = \frac{\rho \Gamma^{2}}{4\pi^{2}} \left( \frac{\pi}{d} \right)- \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}}\left( \frac{\pi}{2d^{3}} \right) \\

& = \frac{\rho \Gamma^{2}}{4\pi d} - \frac{\rho \Gamma^{2} \pi d^{2}}{4\pi^{2} d^{3}} \\

& = \frac{\rho \Gamma^{2}}{4\pi d} - \frac{\rho \Gamma^{2}}{4\pi d} \\

& = 0

\end{align}
$$
If we analyze a hypothetical alternative scenario where the vortex is artificially held permanently fixed at the coordinate $(d,0)$, its geometric position does not change with time. Because the potential field relies entirely on the fixed vortex positions, there is no explicit time dependence, meaning $\frac{\partial \phi}{\partial t}=0$. The unsteady Bernoulli equation strictly reduces to the steady Bernoulli equation. Maintaining the same zero-gauge far-field boundary conditions, the equation is:
$$p+\frac{1}{2}\rho v^{2}=0 \implies p=- \frac{1}{2}\rho v^{2}$$
Substituting the exact same instantaneous geometric velocity profile $v$ derived previously:
$$p = - \frac{1}{2}\rho \left( - \frac{\Gamma d}{\pi(y^{2}+d^{2})} \right)^{2} = - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}}$$
Then, we integrate this purely steady pressure distribution to find the force required to hold the vortex in place or the force felt by the wall:
$$
\begin{align}

F & = \int_{-\infty}^{\infty} \left( - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}(y^{2}+d^{2})^{2}} \right) dy \\

& = - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}} \int_{-\infty}^{\infty} \frac{1}{(y^{2}+d^{2})^{2}} , dy \\

\end{align}
$$
Substituting the analytical result for the second integral derived in the previous section:
$$
\begin{align}

F & = - \frac{\rho \Gamma^{2}d^{2}}{2\pi^{2}} \left( \frac{\pi}{2d^{3}} \right) \\

& = - \frac{\rho \Gamma^{2} \pi d^{2}}{4\pi^{2} d^{3}} \\

& = - \frac{\rho \Gamma^{2}}{4\pi d}

\end{align}
$$

# Acheson 5.16

We consider a material volume $V$ bounded by a closed surface $\partial V$ that moves with the fluid flow. For simplicity, we operate under the standard assumption of incompressible flow ($\nabla \cdot \mathbf{u} = 0$), which implies the volume of the fluid parcel is invariant. Thus, by the Reynolds Transport Theorem, the time derivative of the integral over the moving volume is equal to the integral of the material derivative of the integrand.

It suffices to evaluate the material derivative of the helicity density, $\frac{D}{Dt}(\mathbf{u}\cdot \boldsymbol{\omega})$. By the standard product rule of calculus, we have:
$$\frac{D}{Dt}(\mathbf{u}\cdot \boldsymbol{\omega})= \frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega}+ \mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt}$$
We first evaluate the term $\frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega}$. The governing equation for the fluid velocity is the Euler equation. Assuming a constant density $\rho$ and a conservative body force represented by the potential $\chi$ (such that the body force per unit mass is $-\nabla \chi$), the Euler equation is:
$$\begin{align}

\frac{D\mathbf{u}}{Dt} & = - \frac{1}{\rho}\nabla p - \nabla \chi \\

& = - \nabla\left( \frac{p}{\rho}+\chi \right)

\end{align}$$
Taking the dot product of this equation with the vorticity vector $\boldsymbol{\omega}$:
$$\begin{align}

\frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega} & = - \boldsymbol{\omega}\cdot \nabla\left( \frac{p}{\rho}+\chi \right)

\end{align}$$
We apply the vector calculus identity $\nabla \cdot (f\mathbf{A}) = \nabla f \cdot \mathbf{A} + f(\nabla \cdot \mathbf{A})$, where we let the scalar $f = \frac{p}{\rho}+\chi$ and the vector $\mathbf{A} = \boldsymbol{\omega}$. This yields $\nabla\left( \frac{p}{\rho}+\chi \right) \cdot \boldsymbol{\omega} = \nabla \cdot\left( \boldsymbol{\omega}\left( \frac{p}{\rho}+\chi \right) \right) - \left( \frac{p}{\rho}+\chi \right)\nabla \cdot \boldsymbol{\omega}$. By fundamental definition, vorticity is the curl of the velocity field ($\boldsymbol{\omega} = \nabla \times \mathbf{u}$). Since the divergence of any curl is identically zero, we always have $\nabla \cdot \boldsymbol{\omega} = \nabla \cdot (\nabla \times \mathbf{u}) = 0$. Therefore, the second term vanishes entirely, and we obtain:

$$\begin{align}

\frac{D\mathbf{u}}{Dt}\cdot \boldsymbol{\omega} & = -\nabla \cdot\left( \boldsymbol{\omega}\left( \frac{p}{\rho}+\chi \right) \right)+\left( \frac{p}{\rho}+\chi \right)\nabla \cdot \boldsymbol{\omega} \\

& = -\nabla \cdot\left( \boldsymbol{\omega}\left( \frac{p}{\rho}+\chi \right) \right)

\end{align}$$
Next, we evaluate the term $\mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt}$. The material derivative of the vorticity is governed by the vorticity transport equation. Taking the curl of the Euler equation for an inviscid fluid provides the evolution of vorticity:
$$\begin{align}

\frac{D\boldsymbol{\omega}}{Dt}=\boldsymbol{\omega}\cdot \nabla \mathbf{u}

\end{align}$$
Taking the dot product of this with the velocity vector $\mathbf{u}$ yields $\mathbf{u}\cdot(\boldsymbol{\omega}\cdot \nabla \mathbf{u})$. To expand this rigorously without ambiguous vector notation, we switch to Einstein summation convention, where $u_{i}$ and $\omega_{j}$ are the components of $\mathbf{u}$ and $\boldsymbol{\omega}$, and $\partial_{j}$ denotes the partial derivative with respect to the spatial coordinate $x_{j}$:
$$\begin{align}

\mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt} & = \mathbf{u}\cdot(\boldsymbol{\omega}\cdot \nabla \mathbf{u}) \\

& = u_{i}(\omega_{j} \partial_{j}u_{i}) \\

& = \omega_{j} (u_{i} \partial_{j}u_{i})

\end{align}$$
Using the chain rule in reverse, we note that $u_{i} \partial_{j}u_{i} = \frac{1}{2}\partial_{j}(u_{i}u_{i}) = \partial_{j}\left( \frac{1}{2}|\mathbf{u}|^{2} \right)$. Substituting this back into the expression:
$$\begin{align}

\omega_{j} \partial_{j}\left( \frac{1}{2}u_{i}^{2} \right) & = \boldsymbol{\omega}\cdot \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right)

\end{align}$$
We apply the same vector identity for the divergence of a scalar times a vector, this time with the scalar $f = \frac{1}{2}|\mathbf{u}|^{2}$ and vector $\mathbf{A} = \boldsymbol{\omega}$:
$$\begin{align}

\boldsymbol{\omega}\cdot \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right) & = \nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)- \frac{1}{2}|\mathbf{u}|^{2} \nabla \cdot \boldsymbol{\omega}

\end{align}$$
Because $\nabla \cdot \boldsymbol{\omega} = 0$, the final term disappears, leaving:
$$\begin{align}

\mathbf{u}\cdot \frac{D\boldsymbol{\omega}}{Dt} & = \nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)

\end{align}$$
Now we combine these two expanded terms to construct the material derivative of the helicity density, and substitute it back into the volume integral:
$$\begin{align}

\frac{d}{dt}\int_{V} dV \boldsymbol{\omega}\cdot \mathbf{u} & = \int_{V} dV \frac{D}{Dt}(\mathbf{u}\cdot \boldsymbol{\omega}) \\

& = \int_{V} dV\left( -\nabla \cdot\left(\left( \frac{p}{\rho}+\chi \right)\boldsymbol{\omega}\right) +\nabla \cdot\left( \frac{1}{2}|\mathbf{u}|^{2}\boldsymbol{\omega} \right)\right)

\end{align}$$
Because both terms within the integral are exact divergences, we use the linearity of the divergence operator to factor it out:
$$\begin{align}

\int_{V} dV \frac{D}{Dt}(\mathbf{u}\cdot \boldsymbol{\omega}) & = \int_{V} dV \nabla \cdot\left[ \left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right)\boldsymbol{\omega} \right]

\end{align}$$

Applying the Gauss divergence theorem, we transform this volume integral over $V$ into a surface integral over the closed boundary $\partial V$, where $\hat{\mathbf{n}}$ is the outward-pointing unit normal vector on the surface $dS$:

$$\begin{align}

\int_{V} dV \nabla \cdot\left[ \left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right)\boldsymbol{\omega} \right] & = \int_{\partial V}dS \hat{\mathbf{n}}\cdot \left[ \boldsymbol{\omega}\left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right) \right] \\

& = \int_{\partial V}dS (\hat{\mathbf{n}}\cdot \boldsymbol{\omega})\left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right)

\end{align}$$
For this final integral to be mathematically evaluated, we look at the physical boundary conditions. Because $\hat{\mathbf{n}}\cdot \boldsymbol{\omega} = 0$ at all points on $\partial V$, we have:
$$\begin{align}

\int_{\partial V}dS \hat{\mathbf{n}}\cdot \boldsymbol{\omega}\left( \frac{1}{2}|\mathbf{u}|^{2}- \frac{p}{\rho}-\chi \right) & = 0

\end{align}$$

# Acheson 5.25

Let $\mathbf{u}$ be the unique irrotational velocity field satisfying the conditions given in the problem. Because the domain $V$ is simply connected and the field is irrotational ($\nabla \times \mathbf{u} = \mathbf{0}$), it can be globally expressed as the gradient of a single-valued scalar velocity potential, meaning $\mathbf{u} = \nabla \phi$.

Let $\mathbf{u}^{'}$ be another valid velocity field satisfying those same kinematic conditions ($\nabla \cdot \mathbf{u}^{'} = 0$ in $V$, and $\mathbf{u}^{'} \cdot \hat{\mathbf{n}} = f(\mathbf{x},t)$ on $\partial V$), but not necessarily irrotational. To prove the theorem, it suffices to show that the kinetic energy of the arbitrary field $\mathbf{u}^{'}$ is greater than or equal to the kinetic energy of the irrotational field $\mathbf{u}$ (assuming uniform density $\rho=1$ for the integration without loss of generality):
$$\int_{V} \frac{1}{2}|\mathbf{u}^{'}|^{2} \, dV - \int_{V} \frac{1}{2}|\mathbf{u}|^{2} \, dV \geq 0$$
We define a difference velocity field $\mathbf{w}=\mathbf{u}^{'}-\mathbf{u}$. This allows us to write the arbitrary field as $\mathbf{u}^{'} = \mathbf{u} + \mathbf{w}$. Substituting this into the energy difference integral, we expand the squared vector magnitude:
$$\begin{align}

\int_{V} \frac{1}{2}|\mathbf{u}^{'}|^{2}  dV - \int_{V} \frac{1}{2}|\mathbf{u}|^{2}  dV & = \int_{V} \frac{1}{2}|\mathbf{u}+\mathbf{w} |^{2}  dV - \int_{V} \frac{1}{2}|\mathbf{u}|^{2}  dV \\

& = \int_{V} \frac{1}{2}(|\mathbf{u}|^{2} + 2\mathbf{u}\cdot\mathbf{w} + |\mathbf{w}|^{2})  dV - \int_{V} \frac{1}{2}|\mathbf{u}|^{2}  dV \\

& = \frac{1}{2}\int_{V} |\mathbf{w}|^{2}  dV + \int_{V} \mathbf{u}\cdot \mathbf{w}  dV

\end{align}$$
To evaluate the cross-term integral $\int_{V} \mathbf{u}\cdot \mathbf{w} \, dV$, we use the fundamental property of the irrotational field $\mathbf{u}=\nabla \phi$:
$$\begin{align}

\int_{V} \mathbf{u}\cdot \mathbf{w}  dV & = \int_{V} \nabla \phi \cdot \mathbf{w}  dV

\end{align}$$
Using the standard vector calculus identity for the divergence of a scalar multiplied by a vector, $\nabla \cdot (\phi \mathbf{w}) = \nabla \phi \cdot \mathbf{w} + \phi (\nabla \cdot \mathbf{w})$, we can isolate the integrand $\nabla \phi \cdot \mathbf{w} = \nabla \cdot (\phi \mathbf{w}) - \phi \nabla \cdot \mathbf{w}$. Substituting this back gives:
$$\begin{align}

\int_{V} \nabla \phi \cdot \mathbf{w}  dV & = \int_{V} [\nabla \cdot(\phi \mathbf{w})-\phi \nabla \cdot \mathbf{w}]  dV

\end{align}$$
We know that both original velocity fields are strictly incompressible within $V$. Because the divergence operator is linear, the divergence of their difference $\mathbf{w}$ is exactly zero everywhere in the fluid domain:
$$\nabla \cdot \mathbf{w}=\nabla \cdot (\mathbf{u}^{'}-\mathbf{u}) = \nabla \cdot \mathbf{u}^{'}-\nabla \cdot \mathbf{u} = 0 - 0 = 0$$
Because $\nabla \cdot \mathbf{w} = 0$, the second term in the integrand vanishes entirely. We are left with the volume integral of a pure divergence. We then apply the Gauss divergence theorem to convert this volume integral over $V$ into a surface integral over the closed boundary $\partial V$ (or $S$):
$$\begin{align}

\int_{V} \mathbf{u}\cdot \mathbf{w} , dV & = \int_{V} \nabla \cdot(\phi \mathbf{w})  dV \\

& = \int_{\partial V} (\phi \mathbf{w}) \cdot \hat{\mathbf{n}}  dS \\

& = \int_{\partial V} \phi (\mathbf{w} \cdot \hat{\mathbf{n}})  dS

\end{align}$$
We evaluate the normal component of the difference field, $\mathbf{w} \cdot \hat{\mathbf{n}}$, directly on the boundary surface. Both the irrotational field and the arbitrary field are defined to satisfy the exact same boundary condition $\mathbf{v} \cdot \hat{\mathbf{n}} = f(\mathbf{x},t)$. Therefore, the normal component of the difference field is identically zero everywhere on $\partial V$:

$$\begin{align}

\hat{\mathbf{n}}\cdot \mathbf{w} & = \hat{\mathbf{n}}\cdot (\mathbf{u}^{'} - \mathbf{u}) \\

& = \hat{\mathbf{n}}\cdot \mathbf{u}^{'}- \hat{\mathbf{n}}\cdot \mathbf{u} \\

& = f(\mathbf{x},t)-f(\mathbf{x},t) \\

& =0

\end{align}$$
Because $\hat{\mathbf{n}}\cdot \mathbf{w}=0$ everywhere on the boundary, the entire surface integral is zero. Therefore:
$$\int_{V} \mathbf{u}\cdot \mathbf{w} \, dV = 0$$
Returning to our initial expansion of the energy difference, the cross-term vanishes completely. We are left with only the integral of the squared magnitude of the difference field:

$$\begin{align}

\int_{V} \frac{1}{2}|\mathbf{u}^{'}|^{2}  dV - \int_{V} \frac{1}{2}|\mathbf{u}|^{2}  dV

& = \frac{1}{2}\int_{V} |\mathbf{w}|^{2}  dV\geq 0

\end{align}$$
This definitively proves that $\int_{V} \frac{1}{2}|\mathbf{u}^{'}|^{2} \, dV \geq \int_{V} \frac{1}{2}|\mathbf{u}|^{2} \, dV$. 
# Acheson 6.6

To process the cross product mathematically without ambiguity, we express the velocity field using Einstein summation convention and the Levi-Civita permutation symbol $\epsilon_{ijk}$. The $i$-th and $j$-th Cartesian components of the velocity field are written respectively as:$u_{i} = \epsilon_{ikl}\Omega_{k}x_{l}$, $u_{j} = \epsilon_{jkl}\Omega_{k}x_{l}$.

We compute the spatial partial derivatives $\frac{\partial u_{i}}{\partial x_{j}}$ and $\frac{\partial u_{j}}{\partial x_{i}}$. Because the flow is a uniform rotation, the angular velocity vector $\boldsymbol{\Omega}$ is a spatial constant. Therefore, its components $\Omega_{k}$ can be factored out of the partial derivative operator, alongside the constant isotropic tensor $\epsilon_{ikl}$. By definition of independent orthogonal spatial coordinates, the spatial derivative of one coordinate with respect to another is the Kronecker delta, $\frac{\partial x_{l}}{\partial x_{i}} = \delta_{li}$.

Expanding the entire summation step-by-step:
$$\begin{align}

\frac{\partial u_{j}}{\partial x_{i}}+ \frac{\partial u_{i}}{\partial x_{j}} & = \frac{\partial}{\partial x_{i}}(\epsilon_{jkl}\Omega_{k}x_{l})+ \frac{\partial}{\partial x_{j}}(\epsilon_{ikl}\Omega_{k}x_{l}) \\

& = \epsilon_{jkl}\Omega_{k}\frac{\partial x_{l}}{\partial x_{i}} + \epsilon_{ikl}\Omega_{k}\frac{\partial x_{l}}{\partial x_{j}} \\

& = \epsilon_{jkl}\Omega_{k}\delta_{li}+ \epsilon_{ikl}\Omega_{k}\delta_{lj} \\  & = \epsilon_{jki}\Omega_{k}+\epsilon_{ikj}\Omega_{k}\\

& = \epsilon_{jki}\Omega_{k}-\epsilon_{jki}\Omega_{k} \\

& = 0

\end{align}$$
Multiplying this result by the dynamic viscosity constant $\mu$, we conclude:
$$\mu\left( \frac{\partial u_{j}}{\partial x_{i}}+ \frac{\partial u_{i}}{\partial x_{j}} \right) = \mu(0) = 0$$
# Acheson 6.8

We begin with the fundamental local Taylor series expansion of the velocity field around the origin $\mathbf{x} = \mathbf{0}$:
$$\mathbf{u}(\mathbf{x}) = \mathbf{u}(\mathbf{0}) + (\nabla \mathbf{u}) \mathbf{x}$$
Because the velocity field is strictly linear with respect to the spatial coordinates, higher-order terms vanish completely. The local translation part evaluated at the origin is simply $\mathbf{u}(\mathbf{0}) = (0,0,0)^T$, indicating no bulk translation at the origin. The spatial variations of the flow are entirely captured by the velocity gradient tensor $\nabla \mathbf{u}$, defined component-wise as the Jacobian matrix where the element in the $i$-th row and $j$-th column is $\frac{\partial u_{i}}{\partial x_{j}}$. Evaluating these partial derivatives, we find that the only non-zero component is $\frac{\partial u_{1}}{\partial x_{2}} = \beta$. Thus, the velocity gradient tensor is represented by:
$$\begin{align}

\nabla \mathbf{u} & \overset{\wedge}{=} \begin{pmatrix}

0 & \beta & 0 \\

0 & 0 & 0 \\

0 & 0 & 0

\end{pmatrix}

\end{align}$$
By the fundamental theorem of tensor decomposition, any second-rank tensor can be uniquely uniquely expressed as the sum of a symmetric tensor and an antisymmetric tensor. We decompose the velocity gradient into the symmetric strain rate tensor $e_{ij} = \frac{1}{2}\left(\frac{\partial u_{i}}{\partial x_{j}} + \frac{\partial u_{j}}{\partial x_{i}}\right)$ and the antisymmetric rotation tensor $\Omega_{ij} = \frac{1}{2}\left(\frac{\partial u_{i}}{\partial x_{j}} - \frac{\partial u_{j}}{\partial x_{i}}\right)$. Applying this decomposition strictly yields:
$$\begin{align}

\begin{pmatrix}

0 & \beta & 0 \\

0 & 0 & 0 \\

0 & 0 & 0

\end{pmatrix} = \begin{pmatrix}

0 & \frac{\beta}{2} & 0 \\

\frac{\beta}{2} & 0 & 0 \\

0 & 0 & 0

\end{pmatrix}+\begin{pmatrix}

0 & \frac{\beta}{2} & 0 \\

-\frac{\beta}{2} & 0 & 0 \\

0 & 0 & 0

\end{pmatrix}

\end{align}$$
Here, the pure straining part corresponds to the symmetric matrix $e_{ij}$, and the rotation part corresponds to the antisymmetric matrix $\Omega_{ij}$.

To rigorously analyze the rigid-body rotation part, we calculate the local velocity field it induces by multiplying the rotation tensor by the position vector:
$$\begin{align}

\mathbf{u}_{\text{rot}} = \Omega_{ij} \mathbf{x} & = \begin{pmatrix}

0 & \frac{\beta}{2} & 0 \\

-\frac{\beta}{2} & 0 & 0 \\

0 & 0 & 0

\end{pmatrix}\begin{pmatrix}

x_{1} \\

x_{2} \\

x_{3}

\end{pmatrix}= \begin{pmatrix}

\frac{\beta}{2}x_{2} \\

-\frac{\beta}{2}x_{1} \\

0

\end{pmatrix}

\end{align}$$
To determine the physical axis and rate of this rotation, we compute the macroscopic vorticity field $\boldsymbol{\omega}$ associated with this pure rotational velocity component using the formal definition $\boldsymbol{\omega} = \nabla \times \mathbf{u}_{\text{rot}}$:
$$\begin{align}

\boldsymbol{\omega} & = \begin{vmatrix}

\hat{\mathbf{x}} & \hat{\mathbf{y}} & \hat{\mathbf{z}} \\

\frac{\partial}{\partial x_{1}} & \frac{\partial}{\partial x_{2}} & \frac{\partial}{\partial x_{3}} \\

\frac{\beta}{2}x_{2} & -\frac{\beta}{2}x_{1} & 0

\end{vmatrix} \\

& = \left( 0 - 0 \right)\hat{\mathbf{x}} - \left( 0 - 0 \right)\hat{\mathbf{y}} + \left( \frac{\partial}{\partial x_{1}}\left(-\frac{\beta}{2}x_{1}\right) - \frac{\partial}{\partial x_{2}}\left(\frac{\beta}{2}x_{2}\right) \right)\hat{\mathbf{z}} \\

& = \left( -\frac{\beta}{2} - \frac{\beta}{2} \right)\hat{\mathbf{z}} \\

& = -\beta \hat{\mathbf{z}}

\end{align}$$
Because the vorticity points in the negative z-direction, it dictates a rigid rotation in the clockwise direction within the $x_{1}x_{2}$-plane (or $xy$-plane) at an angular velocity of $\frac{\beta}{2}$.

For the pure straining part represented by the symmetric tensor $e_{ij}$, we find its principal axes by solving the standard eigenvalue problem $\det(e_{ij} - \lambda I) = 0$: $$\begin{align} \begin{vmatrix} -\lambda & \frac{\beta}{2} & 0 \\ \frac{\beta}{2} & -\lambda & 0 \\ 0 & 0 & -\lambda \end{vmatrix} & = 0 \\ -\lambda\left( \lambda^{2} - \left(\frac{\beta}{2}\right)^{2} \right) & = 0 \end{align}$$
The roots of this characteristic polynomial provide the eigenvalues $\lambda = \frac{\beta}{2}, -\frac{\beta}{2}, 0$. The zero eigenvalue corresponds to the $x_{3}$-axis, meaning the entire deformation happens strictly within the two-dimensional $x_{1}x_{2}$-plane. To find the principal direction corresponding to the positive strain rate $\lambda_{1} = \frac{\beta}{2}$, we solve the corresponding system $(e_{ij} - \frac{\beta}{2} I)\mathbf{v}_{1} = \mathbf{0}$:
$$\begin{align}

\begin{pmatrix}

-\frac{\beta}{2} & \frac{\beta}{2} & 0 \\

\frac{\beta}{2} & -\frac{\beta}{2} & 0 \\

0 & 0 & -\frac{\beta}{2}

\end{pmatrix} \begin{pmatrix}

v_{1} \\

v_{2} \\

v_{3}

\end{pmatrix} = \begin{pmatrix}

0 \\

0 \\

0

\end{pmatrix}

\end{align}$$
This yields $v_{1} = v_{2}$ and $v_{3} = 0$. Normalizing this vector gives the unit principal axis $\hat{\mathbf{v}}_{1} = \frac{1}{\sqrt{ 2 }} \begin{pmatrix}1 \\ 1 \\ 0\end{pmatrix}$.

Similarly, for the negative strain rate $\lambda_{2} = -\frac{\beta}{2}$, we solve $(e_{ij} + \frac{\beta}{2} I)\mathbf{v}_{2} = \mathbf{0}$:

$$\begin{align}

\begin{pmatrix}

\frac{\beta}{2} & \frac{\beta}{2} & 0 \\

\frac{\beta}{2} & \frac{\beta}{2} & 0 \\

0 & 0 & \frac{\beta}{2}

\end{pmatrix} \begin{pmatrix}

v_{1} \\

v_{2} \\

v_{3}

\end{pmatrix} = \begin{pmatrix}

0 \\

0 \\

0

\end{pmatrix}

\end{align}$$
This yields $v_{1} = -v_{2}$ and $v_{3} = 0$. Normalizing this vector gives the unit principal axis $\hat{\mathbf{v}}_{2} = \frac{1}{\sqrt{ 2 }} \begin{pmatrix}1 \\ -1 \\ 0\end{pmatrix}$.

The third orthogonal eigenvector trivially corresponding to $\lambda_{3}=0$ is $\hat{\mathbf{v}}_{3} = \begin{pmatrix}0 \\ 0 \\ 1\end{pmatrix}$.

These explicitly derived eigenvalues and eigenvectors confirm that the pure straining motion induces an exact linear extensional stretch at a rate of $\frac{\beta}{2}$ along the $45^\circ$ diagonal defined by $\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\ 1 \\ 0 \end{pmatrix}$, and a simultaneous equivalent linear contraction at a rate of $-\frac{\beta}{2}$ along the perpendicular $-45^\circ$ diagonal defined by $\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 \\ -1 \\ 0 \end{pmatrix}$.
# Acheson 6.12

For an incompressible, Newtonian fluid, the viscous stress tensor $\tau_{ij}$ is defined linearly by the rate-of-strain tensor:
$$\tau_{ij} = \mu \left( \frac{\partial u_{i}}{\partial x_{j}} + \frac{\partial u_{j}}{\partial x_{i}} \right)$$
The net viscous force per unit volume, denoted as $f_{i}$, acting on any differential fluid element $dV$ is the spatial divergence of this viscous stress tensor. We compute this divergence using Einstein summation convention: $$\begin{align} f_{i} & = \frac{\partial \tau_{ij}}{\partial x_{j}} \\ & = \mu \frac{\partial}{\partial x_{j}} \left( \frac{\partial u_{i}}{\partial x_{j}} + \frac{\partial u_{j}}{\partial x_{i}} \right) \\ & = \mu \frac{\partial^{2} u_{i}}{\partial x_{j} \partial x_{j}} + \mu \frac{\partial}{\partial x_{i}} \left( \frac{\partial u_{j}}{\partial x_{j}} \right) \end{align}$$
By the fundamental assumption of incompressibility, the divergence of the velocity field is strictly zero, meaning $\nabla \cdot \mathbf{u} = \frac{\partial u_{j}}{\partial x_{j}} = 0$. Consequently, the second term vanishes entirely, and we are left with $f_{i} = \mu \nabla^{2} u_{i}$. This rigorously proves that the total net viscous force exerted on an infinitesimal volume $dV$ is indeed given by $\mu \nabla^{2}\mathbf{u} dV$.

We now evaluate this net volume force using the standard vector calculus identity for the vector Laplacian of the velocity field $\mathbf{u}$:
$$\begin{align}

\nabla^{2}\mathbf{u} & = \nabla(\nabla \cdot \mathbf{u})- \nabla \times(\nabla \times \mathbf{u})

\end{align}$$
Because the fluid is defined as incompressible, $\nabla \cdot \mathbf{u} = 0$. Furthermore, the problem specifies that the flow driven by the rotating cylinder at $r=a$ is strictly irrotational in the domain $r \ge a$. By definition, an irrotational flow possesses zero vorticity everywhere, meaning $\nabla \times \mathbf{u} = \mathbf{0}$. Substituting both conditions into the identity yields: $$\begin{align} \nabla^{2}\mathbf{u} & = \nabla(0) - \nabla \times(\mathbf{0}) \\ & = \mathbf{0} \end{align}$$This mathematical result strictly confirms that the total net viscous force evaluated over any differential volume $dV$ within the specified domain is zero. However, the foundational flaw in the quoted argument lies in equating the net macroscopic volume force ($\nabla \cdot \tau$) with the local surface traction forces. The assertion that $\nabla^{2}\mathbf{u} = \mathbf{0}$ simply dictates that for any arbitrarily chosen fluid particle, the vector sum of all viscous stresses acting over its entire closed boundary perfectly balances to zero. It fundamentally does not imply that the local viscous stress tensor $\tau_{ij}$ itself is a zero tensor.

To calculate the physical interaction between the solid boundary and the fluid, we must examine the local surface traction vector $\mathbf{t}$, which is defined by the Cauchy stress principle as $\mathbf{t} = \tau \cdot \hat{\mathbf{n}}$, where $\hat{\mathbf{n}}$ is the unit normal vector pointing out of the fluid at the boundary. For a fluid particle in direct, microscopic contact with the cylinder wall at $r=a$, the local shear stress exerted by the fluid on the cylinder wall is characterized by the component $\tau_{r\theta}$. The fact that the net volume force on this specific boundary fluid particle is zero merely means that the non-zero surface traction force exerted by the solid cylinder on the particle is perfectly canceled out by the equal and opposite viscous shear stresses exerted on that exact same particle by the adjacent layers of fluid situated at infinitesimally larger radii.

By Newton's third law of motion, the cylinder exerts a local shear force on the fluid particle, and the fluid particle exerts an equal and opposite local shear force back onto the solid cylinder. To determine if a macroscopic torque exists, we must integrate this specific surface traction over the entire closed surface area $S$ of the cylinder. The net torque $T$ is defined by:
$$T = \int_{S} \mathbf{r} \times (\tau \cdot \hat{\mathbf{n}}) \, dS$$
For the specific velocity field defined by the problem, $\mathbf{u} = \frac{\Omega a^{2}}{r}\hat{\mathbf{e}}_{\theta}$, the relevant off-diagonal term of the viscous stress tensor in cylindrical coordinates is given by $\tau_{r\theta} = \mu r \frac{\partial}{\partial r}\left(\frac{u_{\theta}}{r}\right)$. Evaluating this derivative yields a strictly non-zero shear stress at the boundary $r=a$. Because $\tau_{r\theta}$ is non-zero, the surface traction $\mathbf{t}$ is non-zero, and the subsequent spatial integration results in a strictly non-zero net torque acting on the cylinder. Therefore, the irrotational nature of the flow implies zero net force on fluid elements, but it does not imply zero local shear stress, nor does it imply zero torque on the solid boundary driving the flow.
# HW3S1

Assume that the positions of the three vortices in the complex plane are denoted by $z_{j}$, where $j \in \{1, 2, 3\}$. Let their respective non-zero circulations be $\Gamma_{j}$. According to potential flow theory, the complex potential $w_{j}(z)$ induced by a single isolated point vortex located at $z_{j}$ with circulation $\Gamma_{j}$ is given by:
$$w_{j}(z)= -\frac{i\Gamma_{j}}{2\pi}\ln(z-z_{j})$$
The complex velocity field induced by this specific vortex at any arbitrary point $z$ is the spatial derivative of the complex potential with respect to $z$, denoted as $\frac{dw_{j}}{dz} = u - iv$:
$$u-iv = \frac{d}{dz}\left(-\frac{i\Gamma_{j}}{2\pi}\ln(z-z_{j})\right) = -\frac{i\Gamma_{j}}{2\pi(z-z_{j})} = \frac{\Gamma_{j}}{2\pi i(z-z_{j})}$$
According to Helmholtz's vortex theorems, a point vortex does not induce a translational velocity upon itself. Its motion is governed entirely by the superposition of the local velocity fields induced by all other point vortices in the system. Therefore, the complex conjugate of the velocity of the $j$-th vortex, denoted as $\frac{dz^{*}_{j}}{dt}$, is the sum of the complex velocities induced by all $k$-th vortices where $k \neq j$:
$$\begin{align}

\frac{dz^{*}_{j}}{dt} & = \frac{1}{2\pi i}\sum_{k\neq j} \frac{\Gamma_{k}}{z_{j}-z_{k}}

\end{align}$$
The problem requires that the positions of the three vortices remain fixed in time, which strictly dictates their instantaneous velocities must be identically zero. We set $\frac{dz^{*}_{j}}{dt} = 0$ for $j=1, 2, 3$, obtaining the following closed system of three coupled equations: $$\begin{align} \frac{\Gamma_{2}}{z_{1}-z_{2}} + \frac{\Gamma_{3}}{z_{1}-z_{3}} & = 0 \tag{1} \\ \frac{\Gamma_{3}}{z_{2}-z_{3}} + \frac{\Gamma_{1}}{z_{2}-z_{1}} & = 0 \tag{2} \\ \frac{\Gamma_{1}}{z_{3}-z_{1}} + \frac{\Gamma_{2}}{z_{3}-z_{2}} & = 0 \tag{3} \end{align}$$
We first analyze equation (1) to determine the necessary geometric arrangement of the vortices. Rearranging equation (1) yields:
$$\begin{align}

\frac{\Gamma_{3}}{z_{1}-z_{3}} & = -\frac{\Gamma_{2}}{z_{1}-z_{2}} \\

\implies \frac{\Gamma_{3}}{\Gamma_{2}} & = -\frac{z_{1}-z_{3}}{z_{1}-z_{2}}

\end{align}$$
Because the circulations $\Gamma_{2}$ and $\Gamma_{3}$ are strictly real scalar quantities, their ratio $\frac{\Gamma_{3}}{\Gamma_{2}}$ must be a real number. Consequently, the ratio of the complex differences $-\frac{z_{1}-z_{3}}{z_{1}-z_{2}}$ is also an element of $\mathbb{R}$. Geometrically, the argument of this complex ratio must be an integer multiple of $\pi$. This strictly implies that the vectors represented by the complex numbers $z_{1}-z_{3}$ and $z_{1}-z_{2}$ are collinear. Because they share the common origin point $z_{1}$, we rigorously conclude that the three spatial coordinates $z_{1}$, $z_{2}$, and $z_{3}$ must lie on a single straight line.

Next, we derive the algebraic relationship between the circulations required to maintain this stationary configuration. From equations (1) and (2), we isolate the terms $z_{1}-z_{3}$ and $z_{2}-z_{3}$ respectively:

From (1):
$$z_{1}-z_{3} = -\frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{2}} = \frac{\Gamma_{3}(z_{2}-z_{1})}{\Gamma_{2}}$$
From (2):
$$z_{2}-z_{3} = -\frac{\Gamma_{3}(z_{2}-z_{1})}{\Gamma_{1}} = \frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{1}}$$
We introduce the trivial geometric identity valid for any three points in the complex plane:
$$z_{1}-z_{2} + z_{2}-z_{3} + z_{3}-z_{1} = 0$$
To substitute our derived expressions into this identity, we multiply the first term by $\frac{\Gamma_{3}}{\Gamma_{3}}$ to obtain a common factor, and substitute the negative of the expression from (1) for the third term:
$$\begin{align}

\frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{3}} + \frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{1}} - \frac{\Gamma_{3}(z_{2}-z_{1})}{\Gamma_{2}} & = 0 \\

\frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{3}} + \frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{1}} + \frac{\Gamma_{3}(z_{1}-z_{2})}{\Gamma_{2}} & = 0

\end{align}$$
Factoring out the common term $\Gamma_{3}(z_{1}-z_{2})$:
$$\implies \Gamma_{3}(z_{1}-z_{2})\left( \frac{1}{\Gamma_{1}} + \frac{1}{\Gamma_{2}} + \frac{1}{\Gamma_{3}} \right) = 0$$
By the initial premise of the problem, the circulations are non-zero, meaning $\Gamma_{3} \neq 0$. Furthermore, for three distinct point vortices to exist without overlapping, their positions must not be degenerate, meaning $z_{1}-z_{2} \neq 0$. Dividing the entire equation by this strictly non-zero factor rigorously yields the necessary algebraic condition for the circulations:
$$\frac{1}{\Gamma_{1}} + \frac{1}{\Gamma_{2}} + \frac{1}{\Gamma_{3}} = 0$$
Any configuration of three distinct collinear points with circulations satisfying this reciprocal sum equation will remain strictly stationary. As an explicit concrete example, we can select circulations $\Gamma_{1} = 2$, $\Gamma_{2} = 2$, and $\Gamma_{3} = -1$. We first check the sum condition:
$$\frac{1}{2} + \frac{1}{2} + \frac{1}{-1} = 1 - 1 = 0$$
We map these to three distinct collinear spatial coordinates, for instance, $z_{1} = 1$, $z_{2} = -1$, and $z_{3} = 0$. We verify this specific arrangement by plugging these values back into the original system of equations to ensure $\frac{dz^{*}_{j}}{dt}=0$ is satisfied for all indices $j$:

For vortex 1 at $z_{1}=1$:
$$\frac{dz^{*}_{1}}{dt} \propto \frac{\Gamma_{2}}{z_{1}-z_{2}} + \frac{\Gamma_{3}}{z_{1}-z_{3}} = \frac{2}{1 - (-1)} + \frac{-1}{1 - 0} = \frac{2}{2} - 1 = 0$$
For vortex 2 at $z_{2}=-1$:
$$\frac{dz^{*}_{2}}{dt} \propto \frac{\Gamma_{1}}{z_{2}-z_{1}} + \frac{\Gamma_{3}}{z_{2}-z_{3}} = \frac{2}{-1 - 1} + \frac{-1}{-1 - 0} = \frac{2}{-2} + 1 = -1 + 1 = 0$$
For vortex 3 at $z_{3}=0$:
$$\frac{dz^{*}_{3}}{dt} \propto \frac{\Gamma_{1}}{z_{3}-z_{1}} + \frac{\Gamma_{2}}{z_{3}-z_{2}} = \frac{2}{0 - 1} + \frac{2}{0 - (-1)} = -2 + 2 = 0$$
# HW3S2

We consider a steady viscous flow driven by a constant pressure gradient through a pipe aligned with the z-axis. For a unidirectional pipe flow, we assume the velocity field has only a z-component and depends only on the cross-sectional coordinates. Thus, we formally define the velocity field as $\mathbf{u}=w(x,y)\hat{\mathbf{z}}$.

To govern the flow, we start with the incompressible Navier-Stokes equation. We evaluate the convective acceleration term, $(\mathbf{u}\cdot \nabla) \mathbf{u}$. Because the velocity vector only has a z-component, the dot product expands as:
$$\begin{align}

\mathbf{u}\cdot \nabla \mathbf{u} & = \left( w \frac{\partial}{\partial z} \right) (w \hat{\mathbf{z}}) \\

& = w \frac{\partial w}{\partial z} \hat{\mathbf{z}}

\end{align}$$
Because our assumed velocity profile $w(x,y)$ has no geometric dependence on the axial coordinate $z$, the partial derivative $\frac{\partial w}{\partial z}$ is strictly zero. Thus, the nonlinear convective term vanishes completely: $\mathbf{u}\cdot \nabla \mathbf{u} = \mathbf{0}$. Furthermore, because the physical problem defines the flow as steady, the explicit local time derivative is zero: $\frac{\partial \mathbf{u}}{\partial t}=\mathbf{0}$. The total material derivative of the velocity field is therefore zero. Assuming gravity is negligible or absorbed into a modified pressure, the full Navier-Stokes equation reduces exactly to the steady Stokes equation: $$\begin{align} \mu \nabla^{2}\mathbf{u} & = \nabla p \end{align}$$Decomposing this vector equation into its Cartesian components yields $0 = \frac{\partial p}{\partial x}$ and $0 = \frac{\partial p}{\partial y}$, which implies the pressure $p$ is a function of $z$ alone. For the z-component, we substitute the given constant axial pressure gradient $\frac{dp}{dz} = -P$. This forms a rigorous two-dimensional Poisson equation for the axial velocity: $$\begin{align} \mu \nabla^{2}w(x,y) & = -P \end{align}$$The physical no-slip boundary condition for a viscous fluid strictly implies that the fluid velocity must be zero exactly at the solid walls of the pipe. The geometric equations defining the pipe's triangular boundaries are given as the planes $x=1$, $x+2-\sqrt{3}y=0$, and $x+2+\sqrt{3}y=0$. To satisfy the boundary condition $w=0$ everywhere on these walls, we construct a polynomial ansatz by multiplying the linear equations of the three boundary planes together, scaled by an undetermined constant $C$:
$$w(x,y)=C(x-1)(x+2-\sqrt{ 3 }y)(x+2+\sqrt{ 3 }y)$$
By construction, this function evaluates to zero at any coordinate $(x,y)$ that lies on any of the three lines defining the cross-section. We now must rigorously determine if a constant $C$ exists such that this ansatz satisfies the governing Poisson equation. We first expand the algebraic expression:
$$\begin{align}

w(x,y) & = C(x-1)[(x+2)^{2}-(\sqrt{3}y)^{2}] \\

& = C(x-1)(x^{2}+4x+4-3y^{2}) \\

& = C(x^{3}+4x^{2}+4x-3xy^{2}-x^{2}-4x-4+3y^{2}) \\

& = C(x^{3}+3x^{2}+3y^{2}-3xy^{2}-4)

\end{align}$$
Next, we take the second-order partial spatial derivatives to compute the two-dimensional Laplacian $\nabla^{2}w = \frac{\partial^{2}w}{\partial x^{2}} + \frac{\partial^{2}w}{\partial y^{2}}$. For the x-direction:
$$\begin{align}

\frac{\partial w}{\partial x} & = C(3x^{2}+6x-3y^{2}) \\

\frac{\partial^{2}w}{\partial x^{2}} & = C(6x+6)

\end{align}$$
For the y-direction:
$$\begin{align}

\frac{\partial w}{\partial y} & = C(6y-6xy) \\

\frac{\partial^{2}w}{\partial y^{2}} & = C(6-6x)

\end{align}$$
Summing these to form the Laplacian:
$$\begin{align}

\nabla^{2}w & = C(6x+6) + C(6-6x) \\

& = 12C

\end{align}$$
We substitute this constant Laplacian back into the original steady governing Poisson equation:
$$\begin{align}

\mu(12C) & = -P \\

\implies C & = - \frac{P}{12\mu}

\end{align}$$
Because $C$ evaluates to a true spatial constant, the proposed polynomial $w(x,y)$ is the exact and unique mathematical solution to the boundary value problem.

To rigorously compute the net tangential force per unit length on the pipe due to the viscous stress, we first consider the force exerted by the pipe walls onto the fluid volume. By integrating the axial component of the Navier-Stokes momentum balance over the fluid cross-section, the total tangential viscous force exerted on the fluid per unit axial length, denoted as $f_{\text{fluid}}$, is exactly equal to the area integral of the Laplacian of the velocity field scaled by dynamic viscosity:
$$f_{\text{fluid}} = \iint_{A} \mu \nabla^{2}w \, dxdy$$
Substituting the previously derived relation $\mu \nabla^{2}w = -P$:
$$\begin{align}

f_{\text{fluid}} & = \iint_{A} (-P) , dxdy \\

& = -P \iint_{A} 1 , dxdy \\

& = -PA

\end{align}$$
Here, $A$ represents the total geometric area of the triangular cross-section. We define the vertices of this triangle by finding the intersection points of the boundary lines.

Intersection of $x=1$ and $x+2-\sqrt{3}y=0$ yields $1+2-\sqrt{3}y=0 \implies y=\sqrt{3}$. The vertex is $(1, \sqrt{3})$.

Intersection of $x=1$ and $x+2+\sqrt{3}y=0$ yields $1+2+\sqrt{3}y=0 \implies y=-\sqrt{3}$. The vertex is $(1, -\sqrt{3})$.

Intersection of $x+2-\sqrt{3}y=0$ and $x+2+\sqrt{3}y=0$ implies $\sqrt{3}y = -\sqrt{3}y$, so $y=0$. Substituting $y=0$ gives $x=-2$. The vertex is $(-2, 0)$.

The triangle has a vertical base along the line $x=1$ with a length of $\sqrt{3} - (-\sqrt{3}) = 2\sqrt{3}$. The corresponding horizontal height from $x=-2$ to $x=1$ is exactly $3$. The area is:
$$A = \frac{1}{2} \cdot \text{base} \cdot \text{height} = \frac{1}{2}(2\sqrt{3})(3) = 3\sqrt{3}$$
Therefore, the tangential force per unit length exerted by the walls onto the fluid is $-3\sqrt{3}P$, pointing in the negative z-direction. By Newton's third law of motion, the tangential viscous force exerted by the fluid onto the pipe wall is exactly equal in magnitude and opposite in direction. This yields a net tangential force per unit length on the pipe of $+AP = 3\sqrt{3}P$ acting purely in the $+z$ direction.