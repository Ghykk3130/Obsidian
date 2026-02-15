# Acheson 3.1

Let $\eta\ll 1, \partial_{x}\phi,\ \partial_{y}\phi\ll 1, \partial_{x}\eta\ll 1$. Let the spatial or time derivative of $\partial_{x}\phi,\ \partial_{y}\phi,\ \partial_{x}\eta$ be $\ll 1$. We ignore the second-ordered small terms.

Consider the free boundary condition on the surface ($y=\eta$):
$$\partial_{y}\phi= \partial_{t}\eta+ (\partial_{x}\phi) \partial_{x}\eta\text{ on the surface}$$
We approximate:
$$\begin{align}

 & \partial_{y}\phi|_{y=\eta}\approx \partial_{y}\phi|_{y=0}+ \partial_{yy}\phi|_{y=0}\eta \approx \partial_{y}\phi|{y=0}

\end{align}$$
Then:
$$\partial_{y}\phi=\partial_{t}\eta\text{ at }y=0$$
Consider the Bernoulli equation on the surface:
$$\begin{align}

 & \rho \frac{\partial \phi}{\partial t}+ \frac{1}{2}\rho |\nabla \phi |^{2}+ \rho g\eta+p{0}=f(t)\text{ on the surface} \

\implies &  \rho \frac{\partial \phi}{\partial t}+ \rho g\eta+ p_{0} =f(t) \

\implies &  \partial_{t}\phi+g\eta= g(t)\text{, where }g(t)= \frac{f(t)-p_{0}}{\rho}\text{ at }y= \eta

\end{align}$$
We approximate:
$$\partial_{t}\phi|_{y=\eta}\approx \partial_{t}\phi|_{y=0}+ \partial_{yt}\phi|_{y=0}\eta \approx \partial_{t}\phi|_{y=0}$$
Then we have:
$$\partial_{t}\phi+g\eta=g(t)\text{ at }y=0$$
Observe that there is a gauge degree of freedom in $\phi$, since if we do the replacement:
$$\phi\leadsto \phi+ \Lambda(t)$$
the velocity field $\mathbf{u}=\nabla \phi$ is invariant. Then we choose the gauge such that:
$$\partial_{t}\phi+g\eta=0\text{ at }y=0$$
Next, consider the boundary condition on the seabed:
$$\partial_{y}\phi=0\text{ at }y=-h$$
Then we solve the Laplace equation in 2D:
$$\nabla^{2}\phi=\partial_{xx}\phi + \partial_{yy}\phi=0$$
with the above boundary conditions. Consider the following ansatz:
$$\phi(x,y)=A(y)\exp(i(kx-\omega t))
$$We should take the real part as the physical solution at the end. Substitute into the Laplace equation to get: $$\partial_{yy}A=k^{2}A$$ We integrate to obtain: $$A(y)= Be^{iky}+Ce^{-iky}\tag{*}$$ Consider the boundary condition on the seabed: $$\partial_{y}\phi=0\implies \partial_{y}A=0\text{ at }y=-h$$ Substitute in the solution to get: $$A(y)= B \cosh(k(y+h))$$ Here $B$ is a constant different than the $B$ in $(*)$. Now we have another two boundary conditions: $$\begin{align}  & \partial_{t}\phi+g\eta=0 \implies -i\omega A+g\eta=0\text{ at }y=0 \\  & \partial_{y}\phi=\partial_{t}\eta \implies \partial_{y}A=-i\omega \eta\text{ at }y=0 \end{align}$$ Then combining the two to eliminate $\eta$: $$\begin{align}  & \partial_{y}A= \frac{\omega^{2}}{g}A\text{ at }y=0 \\ \implies & k\sinh(kh)= \frac{\omega^{2}}{g}\cosh(kh) \\ \implies & \omega^{2}=gk\tanh(kh) \\ \implies &  c^{2}= \frac{g}{k}\tanh(kh) \end{align}$$The above results are valid as long as $\eta\ll 1, \partial_{x}\phi,\ \partial_{y}\phi\ll 1, \partial_{x}\eta\ll 1$. And the spatial or time derivative of $\partial_{x}\phi,\ \partial_{y}\phi,\ \partial_{x}\eta$ be $\ll 1$. And we ignore the second-ordered small terms.

Then we have:
$$\phi=B\cosh(k(y+h))e^{i(kx-ckt)}$$
$B$ can be determined by $\partial_{y}\phi=\partial_{t}\eta\text{ at }y=0$ once the $\eta(x,0)$ is given as the initial condition.

We take the real part to write:
$$\phi=B\cosh(k(y+h))\cos(kx-ckt)$$
Then:
$$\begin{align}
 \mathbf{u} & = \nabla \phi=Bk\begin{pmatrix}-
\cosh(k(y+h))\sin(kx-ckt) \\
\sinh(k(y+h))\cos(kx-ckt)
\end{pmatrix}
\end{align}$$
Assume that $x,y$ are close to their starting point $\mathbf{r}_{0}=(x_{0},y_{0})$. Then the velocity is approximated by:
$$\mathbf{u}\approx Bk\begin{pmatrix}
-\cosh(k(y_{0}+h))\sin(kx_{0}-ckt) \\
\sinh(k(y_{0}+h))\cos(kx_{0}-ckt)
\end{pmatrix}$$
We solve the pathline:
$$\begin{align}
 & \frac{D\mathbf{r}}{Dt}=\mathbf{u} \\
\implies & \mathbf{r}=- \frac{B}{c}\begin{pmatrix}
\cosh(k(y_{0}+h))\cos(kx_{0}-ckt) \\
\sinh(k(y_0+h))\sin(kx_{0}-ckt)
\end{pmatrix}+\mathbf{r}_{0}
\end{align}$$
This is obviously an ellipse. The representative pathlines are drawn for $k=1,h=1,B=0.5,g=9.8$
![[Pasted image 20260214230535.png|center|500]]


