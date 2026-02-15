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

 & \rho \frac{\partial \phi}{\partial t}+ \frac{1}{2}\rho |\nabla \phi |^{2}+ \rho g\eta+p{0}=f(t)\text{ on the surface} \\

\implies &  \rho \frac{\partial \phi}{\partial t}+ \rho g\eta+ p_{0} =f(t) \\

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
$$We should take the real part as the physical solution at the end. Substitute into the Laplace equation to get: $$\partial_{yy}A=k^{2}A$$ We integrate to obtain: $$A(y)= Be^{ky}+Ce^{-ky}\tag{*}$$ Consider the boundary condition on the seabed: $$\partial_{y}\phi=0\implies \partial_{y}A=0\text{ at }y=-h$$ Substitute in the solution to get: $$A(y)= B \cosh(k(y+h))$$ Here $B$ is a constant different than the $B$ in $(*)$. Now we have another two boundary conditions: $$\begin{align}  & \partial_{t}\phi+g\eta=0 \implies \partial_{tt}\phi+g\partial_{t}\eta=0\implies -\omega^{2} A+g\partial_{t}\eta=0\text{ at }y=0 \\  & \partial_{y}\phi=\partial_{t}\eta \implies \partial_{y}A=\partial_{t}\eta\text{ at }y=0 \end{align}$$ Then combine the two to eliminate $\eta$: $$\begin{align}  & \partial_{y}A= \frac{\omega^{2}}{g}A\text{ at }y=0 \\ \implies & k\sinh(kh)= \frac{\omega^{2}}{g}\cosh(kh) \\ \implies & \omega^{2}=gk\tanh(kh) \\ \implies &  c^{2}= \frac{g}{k}\tanh(kh) \end{align}$$The above results are valid as long as $\eta\ll 1, \partial_{x}\phi,\ \partial_{y}\phi\ll 1, \partial_{x}\eta\ll 1$. And the spatial or time derivative of $\partial_{x}\phi,\ \partial_{y}\phi,\ \partial_{x}\eta$ be $\ll 1$. And we ignore the second-ordered small terms.

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

# Acheson 3.6

Define the velocity potential $\phi(x,y,t)$ for $y>h(x,t)$ and $y< h(x,t)$. Consider the Fourier transform:
$$\begin{align}
\phi(x,y,t)= \int_{\mathbb{R}^{2}}dkd\omega \tilde{\phi}(k,y,t)e^{i(kx-\omega t)}
\end{align}$$
Then the Laplace equation reduces to:
$$\nabla^{2}\phi=0\implies \partial_{yy}\tilde{\phi}=k^{2}\tilde{\phi}\implies \tilde{\phi}=Be ^{{|k|y}}+C e^{{-|k|}y}$$
Know that:
$$\begin{align}
 & u < \infty\text{ at } y=\pm\infty \\
\implies & |\nabla \phi |<  \infty\text{ at }y=\pm \infty \\
\implies & \left|\partial_{x}\int dkd\omega \tilde{\phi}e^{i(kx-\omega t)} \right|< \infty  \text{ at }y=\pm \infty\\
\implies & \left|\int dkd\omega \tilde{\phi} (ik)e^{i(kx-\omega t)}\right|<\infty \text{ at }y=\pm \infty\implies \tilde{\phi}= C e^{-|k|y}\text{ for }y >h,\ \tilde{\phi}=B e^{|k|y}\text{ for }y<h
\end{align}$$
Then we transform $\eta$:
$$\begin{align}
\tilde{\eta}(k^{'},\omega^{'}) & = \left( \frac{1}{2\pi} \right)^{2}\int_{\mathbb{R}^{2}}dxdt A e^{i(kx-\omega t)}e^{-i(k^{'}x-\omega^{'}t)} \\
 & = A \delta(k^{'}-k)\delta(\omega^{'}-\omega)
\end{align}$$
For $y>h$, assume that $\mathbf{U}=U  \hat{\mathbf{x}}$. we have:
$$\begin{align}
 & \partial_{y}\phi= \partial_{t}\eta+ U \partial_{x}\eta \text{ at }y=0\\
\implies &  \partial_{y}\tilde{\phi}= -i\omega^{'} \tilde{\eta}+iUk^{'} \tilde{\eta}\text{ at }y=0 \\
\implies  & C= \frac{iUk^{'}-i\omega^{'}}{|k^{'}|}A\delta(k^{'}-k )\delta(\omega^{'}-\omega)
\end{align}$$
Then:
$$\begin{align}
\phi & = \int_{\mathbb{R}^{2}}dk^{'}d\omega^{'}\frac{iUk^{'}-i\omega^{'}}{|k^{'}|}A\delta(k^{'}-k )\delta(\omega^{'}-\omega)e^{-|k^{'}|y}e^{i(k^{'}x-\omega^{'}t)} \\
 & = \frac{iUk-i\omega}{|k|}A e^{-|k|y}e^{i(kx-\omega t)}
\end{align}$$
Then:
$$\begin{align}
 & \left.\rho_{1} \frac{\partial \phi}{\partial t}\right|_{y=0}+\rho_{1} g\eta+p_{1}(x,y=\eta,t)=0 \\
\implies & p_{1}(x,y=\eta,t)= -\rho_{1} \frac{Uk\omega-\omega^{2}}{|k|}Ae^{i(kx-\omega t)}-\rho_{1}gA e^{i(kx-\omega t)}
\end{align}$$For $y< h$, we have:
$$\begin{align}
 & \partial_{y}\phi=\partial_{t}\eta\text{ at }y=0
 \\
\implies & \partial_{y}\tilde{\phi}=-i\omega^{'} A\delta(k^{'}-k)\delta(\omega^{'}-\omega)\text{ at }y=0 \\
\implies 
 & B= -i \frac{\omega^{'}}{|k^{'}|}A\delta(k^{'}-k )\delta(\omega^{'}-\omega)\end{align}$$
 Then:
 $$\begin{align}

\phi & = \int_{\mathbb{R}^{2}}dk^{'}d\omega^{'}(-i) \frac{\omega^{'}}{|k^{'}|}A\delta(k^{'}-k)\delta(\omega^{'}-\omega)e^{|k^{'}|y}e^{i(k^{'}x-\omega^{'}t)} \\
 & = -i \frac{\omega}{|k|} Ae^{|k|y}e^{i(kx-\omega t)}
\end{align}$$
Then:
$$\begin{align}
 & \left. \rho_{2} \frac{\partial \phi}{\partial t}\right|_{y=0}+\rho_{2}g\eta+p_{2}(x,y=\eta,t)=0 \\
\implies & p_{2}(x,y=\eta,t)= \rho_{2} \frac{\omega^{2}}{|k|}Ae^{i(kx-\omega t)}-\rho_{2}gAe^{i(kx-\omega t)}
\end{align}$$
Therefore:
$$\begin{align}
 & p_{2}-p_{2}=-T\nabla \eta^{2} \\
\implies & (\rho_{2}-\rho_{1})\omega^{2}+\rho_{1}Uk\omega-|k |(k^{2}T+(\rho_{1}+\rho_{2})g)=0
\end{align}$$






