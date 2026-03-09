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

Define the velocity potential $\phi(x,y,t)$ for $y>h(x,t)$ and $y< h(x,t)$. For $y<h$, we make the ansatz:
$$\phi(x,y,t)= \phi_{0}(k,y,t)e^{i(kx-\omega t)}$$
Then the Laplace equation reduces to:
$$\nabla^{2}\phi=0\implies \partial_{yy}\phi_{0}=k^{2}\phi_{0}\implies \phi_{0}=Be ^{{|k|y}}+C e^{{-|k|}y}$$
we have:
$$\begin{align}

 & \partial_{y}\phi=\partial_{t}\eta\text{ at }y=0

 \\

\implies & \partial_{y}\phi_{0}=-i\omega \text{ at }y=0 \\

\implies 

 & B= -i \frac{\omega^{}}{|k^{}|}A\end{align}$$
 Then:
 $$\begin{align}

\phi &  = -i \frac{\omega}{|k|} Ae^{|k|y}e^{i(kx-\omega t)}

\end{align}$$
Then we choose the gauge such that the time dependent constant is zero in Bernoulli's equation:
$$\begin{align}

 & \left. \rho_{1} \frac{\partial \phi}{\partial t}\right|_{y=0}+\rho_{1}g\eta+p_{2}(x,y=\eta,t)=0 \\

\implies & p_{2}(x,y=\eta,t)= \rho_{1} \frac{\omega^{2}}{|k|}Ae^{i(kx-\omega t)}-\rho_{1}gAe^{i(kx-\omega t)}

\end{align}$$
For $y>h$, assume that $\mathbf{U}=U  \hat{\mathbf{x}}$. Then $\phi \sim Ux$ at least for $y=\infty$, and $\forall x,t\in \mathbb{R}$. Then $\phi \not\in L^{1}$, we cannot perform Fourier transform. We make the ansatz:
$$\phi=Ux+ \phi_{0}(y) e^{{i(kx-\omega t)}}$$
we have:
$$\nabla^{2}\phi=0\implies \phi_{0}(y)=C e^{-|k|y}\text{ for boundedness at }y=\infty$$
Then:
$$\begin{align}

 & \partial_{y}\phi= \partial_{t}\eta+ (\partial_{x}\phi) \partial_{x}\eta \text{ at }y=0\\

\implies & -|k|C =-i\omega Ae^{i(kx-\omega t)} +ikUAe^{i(kx-\omega t)}\\

\implies  & C=  \frac{i\omega-ikU}{|k|}Ae^{i(kx-\omega t)}

\end{align}$$
Then:
$$\phi=Ux+ \frac{i\omega-ikU}{|k|}A e^{-|k|y}e^{i(kx-\omega t)}$$
Then:
$$\begin{align}

 & \nabla \phi = \begin{pmatrix}

U+ \frac{k^{2}U-k\omega}{|k|} Ae^{-|k|y}e^{i(kx-\omega t)} \\

  (ikU-i\omega)Ae^{-|k|y}e^{i(kx-\omega t)}

\end{pmatrix}

\end{align}$$
Ignore $\mathcal{O}(A^{2})$ terms, we have:
$$|\nabla \phi|^{2}\approx U^{2}+ 2U \frac{k^{2}U-k\omega}{|k|}Ae^{-|k|y}e^{i(kx-\omega t)}$$
Then, choose the gauge such that the time dependent constant in Bernoulli's equation is zero:
$$\begin{align}

 & \left.\rho_{2} \frac{\partial \phi}{\partial t}\right|_{y=0}+\frac{1}{2}\rho_{2}\left(U^{2}+ 2U \frac{k^{2}U-k\omega}{|k|}Ae^{i(kx-\omega t)}\right)+\rho_{2} g\eta+p_{1}(x,y=\eta,t)=0\end{align}$$
 Rechoose the gauge to eliminate $\frac{1}{2}\rho_{2}U^{2}$. Then we have:
  $$\begin{align}

 & \left.\rho_{2} \frac{\partial \phi}{\partial t}\right|_{y=0}+\frac{1}{2}\rho_{2}\left( 2U \frac{k^{2}U-k\omega}{|k|}Ae^{i(kx-\omega t)}\right)+\rho_{2} g\eta+p_{1}(x,y=\eta,t)=0 \\

\implies & p_{1}(x,y=\eta,t)= -\rho_{2} \frac{\omega^{2}-kU\omega}{|k|}Ae^{i(kx-\omega t)}-\rho_{2}gA e^{i(kx-\omega t)}-\rho_{2}U \frac{k^{2}U-k\omega}{|k|}Ae^{i(kx-\omega t)}

\end{align}$$
Therefore:
$$\begin{align}

 & p_{2}-p_{1}=-T\nabla \eta^{2} \\

\implies & \rho_{1} \frac{\omega^{2}}{|k|}Ae^{i(kx-\omega t)}-\rho_{1}gAe^{i(kx-\omega t)}+\rho_{2} \frac{\omega^{2}-kU\omega}{|k|}Ae^{i(kx-\omega t)}+\rho_{2}gA e^{i(kx-\omega t)}+\rho_{2}U \frac{k^{2}U-k\omega}{|k|}Ae^{i(kx-\omega t)}-Tk^{2}A e^{i(kx-\omega t)}=0 \\

\implies & (\rho_{2}+\rho_{1})\omega^{2}-2\rho_{2}kU\omega+\rho_{2}U^{2}k^{2}-|k|(Tk^{2}+(\rho_{1}-\rho_{2})g)=0

\end{align}$$
In general, we can solve $\omega(k)$. There are two roots in $\mathbb{C}$ with opposite imaginary parts. If $\mathrm{Im}(\omega)> 0,\ \text{for some }k\in \mathbb{R}$, the velocity potential would include a $e^{\mathrm{Im}(\omega)t}$ term, which leads to instability for some $k$. Since the imaginary parts of the two solutions are of opposite signs, the positive imaginary part must exist if there are no real roots. Then we have:
$$\begin{align}
 & 4\rho_{2}^{2}k^{2}U^{2}-4(\rho_{2}+\rho_{1})[\rho_{2}U^{2}k^{2}-|k|(Tk^{2}+(\rho_{1}-\rho_{2})g)]<0 \\
\implies & \rho_{1}\rho_{2}U^{2}k^{2}> (\rho_{1}+\rho_{2})|k|[k^{2}T+(\rho_{1}-\rho_{2})g] \\
\implies & U^{2}> \left( \frac{1}{\rho_{1}}+ \frac{1}{\rho_{2}} \right) \left( T|k|+ \frac{\rho_{1}-\rho_{2}}{|k|}g \right),\ \text{for some } k\in \mathbb{R} \\
\end{align}$$
Then it suffices to let:
$$\begin{align}
 & U^{2}> min\left( \left( \frac{1}{\rho_{1}}+ \frac{1}{\rho_{2}} \right)\left( T|k|+ \frac{\rho_{1}-\rho_{2}}{|k|}g \right) \right) \\
 \implies & U^{2}> \left( \frac{1}{\rho_{1}}+ \frac{1}{\rho_{2}} \right)2 \sqrt{ T(\rho_{1}-\rho_{2})g }
\end{align}$$
The minimum is found by using AM-GM inequality.
# Acheson 3.10

Consider the solution:
$$\eta(x,t)= \int_{\mathbb{R}}dk  \hat{\eta}({k},\omega(k))e^{i(kx-\omega t)}$$
We consider the stationary phase approximation. We first consider the phase:
$$i(kx-\omega t)= it\left(  \frac{kx}{t}-\omega \right)=it\phi(k)$$
By Riemann-Lebesgue lemma, the integral approximates zero as $t\rightarrow \infty$ if the interval over which we are integrating does not contain stationary points. So the integral is non-trivial only around the stationary point: 
$$\begin{align}
\eta(x,t) & = \int_{B(k_{0},\delta k)}dk   \hat{\eta}(k,\omega(k)) e^{it\phi(k)}\text{ where }k_{0}\text{ is the stationary point.}
\end{align}$$
Since $\delta k$ is small, we can approximate:
$$\begin{align}
\eta(x,t) & \approx \int_{B(k_{0},\delta k)}dk  \hat{\eta} \exp\left( i\left(t\phi(k_{0})+ \frac{t}{2}\phi^{''}(k_{0})(k-k_{0})^{2}\right) \right) \\
 & = e^{i(k_{0}x-\omega(k_{0})t)}\int_{B(k_{0},\delta k)}dk  \hat{\eta}\exp\left( i \frac{t}{2}\phi^{''}(k_{0})(k-k_{0})^{2} \right)
\end{align}$$
Since as $t\rightarrow \infty$, the Gaussian becomes infinitely narrow, we can approximate and extend the integral to $\mathbb{R}$:
$$\begin{align}
\eta(x,t) & \approx e^{i(k_{0}x-\omega(k_{0})t)} \hat{\eta}(k_{0},\omega(k_{0})) \int_{\mathbb{R}} dk \exp\left( i \frac{t}{2}\phi^{''}(k_{0})(k-k_{0})^{2}  \right) \\
 & = e^{i(k_{0}x-\omega(k_{0})t)  }  \hat{\eta}(k_{0},\omega(k_{0}) ) \sqrt{ \frac{2\pi}{-it \phi^{''}(k_{0})} } \\
 & = e^{i(k_{0}x-\omega(k_{0})t)  }  \hat{\eta}(k_{0},\omega(k_{0}) ) \sqrt{ \frac{2\pi}{it \omega^{''}(k_{0})} }
\end{align}$$
To find the stationary point, we have:
$$\phi^{'}(k_{0})= \frac{x}{t}- \omega^{'}(k_{0})=0\implies \frac{x}{t}- \sqrt{  \frac{T}{\rho} } \frac{3}{2}\sqrt{ k_{0} }=0\implies k_{0}= \frac{x^{2}}{t^{2}} \frac{\rho}{T} \frac{4}{9}$$
Therefore, the phase is given by:
$$\begin{align}
k_{0}x-\omega(k_{0})t &  = \frac{x^{2}}{t^{2}} \frac{\rho}{T} \frac{4}{9} x- \frac{\rho}{T} \frac{x^{3}}{t^{3}} \frac{9}{27}t \\
 & = \frac{4}{27} \frac{x^{3}}{t^{2}} \frac{\rho}{T}
\end{align}$$
Clearly, $\hat{\eta}(k_{0},\omega(k_{0}))$ is a function of $x,t$. Know that $\hat{ \eta}$ depends on the initial condition, so $\hat{\eta}(k_{0},\omega(k_{0}))$ depends on the initial condition. $\sqrt{ \frac{2\pi}{it\omega^{''}(k_{0})} }$ is also a function of $x,t$, and gives an extra phase factor coming from the imaginary number. Therefore, taking the real part, the solution can be written as:
$$\begin{align}
\eta(x,t) & \approx A(x,t) \cos\left(  \frac{4}{27}  \frac{x^{3}\rho}{Tt^{2}}+\epsilon\right)
\end{align}$$
Consider the local wave number:
$$k_{\text{loc}}= \frac{\partial \phi}{\partial x}= \frac{4}{9} \frac{x^{2}\rho}{Tt^{2}}$$
For points on the crest, we have:
$$\frac{4}{27} \frac{x^{3}\rho}{Tt^{2}}=\text{const.}\implies x \propto t ^{2/3}$$
Therefore:
$$\lambda_{\text{loc}}= \frac{2\pi}{k_{\text{loc}}}\propto t^{2/3}$$
So the local wavelength increases. 

# Acheson 3.13

Let $\mathbf{u}=\nabla \phi$, we have the wave equation:
$$\begin{align}
\frac{\partial^{2}}{\partial t^{2}}\phi- a_{0}^{2}\nabla^{2}\phi=0,\text{ where }a_{0}^{2}= \gamma \frac{p_{0}}{\rho_{0}}
\end{align}$$
Assume that the solution is spherical symmetric, then $\phi=\phi(r)$. We make the ansatz:
$$\phi= \frac{e^{i(kr-\omega t)}}{r}$$
Then:
$$\begin{align}
\nabla^{2}\phi & = \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r} \right)\phi \\
 & = \frac{1}{r^{2}} \frac{\partial}{\partial r}(ik e^{i(kr-\omega t)}r- e^{i(kr-\omega t)}) \\
 & = -k^{2} e^{i(kr-\omega t)}
\end{align}$$
Then we have the dispersion relation:
$$\begin{align}
 & -\omega^{2} +k^{2}a_{0}^{2}=0 \\
\implies & k^{2}= \frac{\omega^{2}}{a_{0}^{2}}\implies k=\pm \frac{\omega}{a_{0}}
\end{align}$$
So we have:
$$\phi= A \frac{1}{r}\exp\left( i\left(  \frac{\omega}{a_{0}}r-\omega t \right) \right)+ B \frac{1}{r}\exp\left( i\left( - \frac{\omega}{a_{0}}r-\omega t \right) \right)$$
Require that $\phi< \infty$ as $r\rightarrow 0$. Then must have $B=-A$. Then after rewriting the constant:
$$\begin{align}
\phi=A \frac{1}{r} \sin\left(  \frac{\omega}{a_{0}}r \right) e^{-i\omega t}
\end{align}$$
The boundary is given by:
$$F(r)=r-L=0$$
So on the boundary, we have:
$$\begin{align}
\frac{DF}{Dt} & = \dot{r}=0
\end{align}$$
We know that:
$$\mathbf{r}=r  \hat{\mathbf{r}}\implies  \mathbf{u}= \dot{r}  \hat{\mathbf{r}}+ r \boldsymbol{\omega}\times  \hat{\mathbf{r}}\implies u_{r}= \dot{r}$$
since $\boldsymbol{\omega}\times   \hat{\mathbf{r}}$ is perpendicular to $\hat{\mathbf{r}}$. Then the boundary condition is:
$$u_{r}|_{r=L}=0$$
Then:
$$\begin{align}
u_{r}|_{r=L} & = \frac{\partial}{\partial r}\phi\text{ at }r=L \\
 & = A \frac{\cos\left(  \frac{\omega}{a_{0}}L \right) \frac{\omega}{a_{0}}e^{-i\omega t}L-\sin\left(  \frac{\omega}{a_{0}}L \right)e^{-i\omega t}}{L^{2}}=0 \\
\implies  & \cos\left( \frac{\omega}{a_{0}}L \right) \frac{\omega}{a_{0}} L -\sin\left( \frac{\omega}{a_{0}}L \right)=0 \\
\implies & \tan\left( \frac{\omega}{a_{0}}L \right)= \frac{\omega}{a_{0}}L
\end{align}$$
# Acheson 3.18

Know that in the region $x<0,\ t<0$, the plate doesn't move. Therefore on the $C_{\pm}$ characteristic curves, we have:
$$\begin{align}
 & \frac{\partial t}{\partial \xi_{\pm}}=1,\  \frac{\partial x}{\partial \xi_{\pm}}=u\pm c\text{ where }\xi_{\pm} \text{ are the parameters} \\
\implies & \frac{d x}{d t}=u\pm c
\end{align}$$
Since $u=0,\ c=c_{0}$, we have:
$$\frac{d x }{d t}=\pm c_{0}$$
Then the characteristic curves $C_{\pm}$ are all linear with slopes $\pm c_{0}$ in the region $x<0,\ t<0$. Consider the region slightly above $t=0$. Given a point $P$ that is the intersection of the characteristic curves emanating from $x<0,\ t<0$, we have:
$$\frac{d x}{d t}=\pm c_{0}$$
Therefore, the curves remain linear. Clearly, this region is bounded by $x=-c_{0}t$. Then, consider a $C_{-}$ curve intersecting with $C_{+}$ curves emanating from the region $x<-c_{0}t$. Suppose we have the Riemann invariants:
$$\begin{align}
 & R_{-}=u-2c \\
 & R_{+}=u+2c=2c_{0}
\end{align}$$
Then given any intersection, $u,c$ are fixed. Then the slope $\frac{dx}{dt}= u-c$ of $C_{-}$ is fixed. Then $C_{-}$ is linear. Different $C_{-}$ curves cannot intersect at points with non-zero $u,c$, since the slope $u-c$ is different for different curves. But they have different slopes, then they have to intersect at the origin. Then we have:
$$\begin{align}
 & \frac{dx}{dt}=  \frac{x}{t}=u-c \\
 & u+2c=2c_{0}
\end{align}\implies c=\frac{1}{3}\left( 2c_{0}- \frac{x}{t} \right)$$
Now assume that $C_{+}$ curves emanating from the $x<0,\ t<0$ region intersect $x=Vt$, since $V<2c_{0}$, and $x=Vt$ is a more strict boundary than $x=2c_{0}t$. Then we have:
$$\begin{align}
R_{+}=u+2c=V+2c=2c_{0}\implies c= c_{0}- \frac{V}{2}\text{ on }x=Vt
\end{align}$$
Then for $C_{-}$ curves intersecting $x=Vt$, we have:
$$R_{-}=u-2c=V-2\left( c_{0}- \frac{V}{2} \right)=2V-2c_{0}$$
Then at the intersections of the $C_{+},\ C_{-}$ curves, we have:
$$\begin{align}
 & R_{-}= u-2c=2V-2c_{0} \\
 & R_{+}=u+2c=2c_{0}
\end{align}\implies c= c_{0}- \frac{V}{2},\ u=V$$
Similarly, we conclude that $C_{-}$ curves are linear since $u,c$ are fixed. They are all parallel since they have the same slope defined by $\frac{dx}{dt}=u-c= \frac{3}{2}V-c_{0}$. Clearly, they are defined up to the origin. So the boundary is given by:
$$\frac{x}{t}= \frac{3}{2}V-c_{0}$$
In conclusion:
$$c=\left\{\begin{align}
 & c_{0},\ x< -c_{0}t \\
 & \frac{1}{3}\left( 2c_{0}- \frac{x}{t} \right),\ -c_{0}t<x< \left( \frac{3}{2}V-c_{0} \right)t \\
 & c_{0}- \frac{V}{2},\ \left( \frac{3}{2}V-c_{0} \right)t<x< Vt
\end{align}\right.$$
# Acheson 3.20

The energy density is clearly:
$$\epsilon= \rho gy+ \frac{1}{2}\rho |\mathbf{u}|^{2}$$
Therefore:
$$\begin{align}
\frac{\partial\epsilon}{\partial t} & = \frac{\partial}{\partial t}\left( \rho hy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)  \\
 & = \frac{1}{2} \rho \frac{\partial }{\partial t }(\mathbf{u}\cdot \mathbf{u}) \\
 & = \rho \mathbf{u}\cdot \frac{\partial}{\partial t}\mathbf{u} 
\end{align}$$
We have:
$$\begin{align}
 & \rho\left( \frac{\partial \mathbf{u}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{u} \right)=-\nabla p-\rho \nabla \chi \\
\implies & \rho \frac{\partial \mathbf{u}}{\partial t}=-\nabla p-\rho \nabla \chi- \rho \mathbf{u}\cdot \nabla \mathbf{u} =-\nabla p-\rho \nabla \chi-\rho \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right)+ \rho\mathbf{u}\times(\nabla \times \mathbf{u})
\end{align}$$
Then:
$$\begin{align}
\frac{\partial\epsilon}{\partial t} & = -\mathbf{u}\cdot\left( \nabla p+\rho \nabla \chi+\rho \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right)+\rho \mathbf{u}\times(\nabla \times \mathbf{u})  \right) \\
 & = -\mathbf{u}\cdot\left( \nabla p+\rho \nabla \chi+\rho \nabla\left( \frac{1}{2}|\mathbf{u}|^{2} \right) \right) \\
 & = -\mathbf{u}\cdot \nabla\left( p+\rho gy+\frac{1}{2}\rho|\mathbf{u}|^{2} \right)
\end{align}$$
Know that:
$$\begin{align}
\nabla \cdot\left( \left( p+\rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)\mathbf{u} \right) & = \mathbf{u}\cdot \nabla\left( p+ \rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)+\left( p+ \rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)\nabla \cdot \mathbf{u} \\
 & =  \mathbf{u}\cdot \nabla\left( p+ \rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)
\end{align}$$
Then:
$$\frac{\partial\epsilon}{\partial t}=-\nabla \cdot\left( \left( p+\rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)\mathbf{u} \right)$$
Then the flux across a closed boundary given by:
$$\begin{align}
\mathscr{F} & = -\int_{S} dA \frac{\partial\epsilon}{\partial t} \\
 & = \int_{S}dA\nabla \cdot\left( \left( p+\rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)\mathbf{u} \right) \\
 & = \int_{\partial S}dl \hat{\mathbf{n}}  \cdot\left( p+ \rho gy+\frac{1}{2}\rho|\mathbf{u}|^{2} \right)\mathbf{u}
\end{align}$$
We can extend this to a vertical line:
$$\mathscr{F}= \int_{0}^{h}dy \left( p+ \rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)u$$
For fluids before the jump, we have:
$$\begin{align}
  \mathscr{F}_{1}  & = \int_{0}^{h}dy\left( p+ \rho gy+ \frac{1}{2}\rho|\mathbf{u}|^{2} \right)u \\
 & \approx \int_{0}^{h}dy\left( p+\rho gy+ \frac{1}{2}\rho U_{1}^{2} \right)U_{1} \\
 & \approx \int_{0}^{h}dy\left( \rho g(h_{1}-y)+ \rho gy+ \frac{1}{2}\rho U_{1}^{2} \right)U_{1} \\
 & = \rho gh_{1}^{2}+ \frac{1}{2}\rho U_{1}^{3}h_{1}
\end{align}$$
Here we ignored the velocity in the $y$ direction, and we approximate the pressure by hydrostatic pressure. We also assumed that $u$ does not depend on $y$. Similarly:
$$\mathscr{F}_{2}= \rho gh_{2}^{2}+ \frac{1}{2}\rho U_{2}^{3}h_{2}$$
Then we have the energy loss:
$$\begin{align}
\Delta E & = \rho gh_{1}^{2}+ \frac{1}{2}\rho U_{1}^{3}h_{1}- \rho gh_{2}^{2}- \frac{1}{2}\rho U_{2}^{3}h_{2} \\
 & = q\left[ \rho g(h_{1}-h_{2})+ \frac{1}{2}\rho(U_{1}^{2}-U_{2}^{2}) \right]
\end{align}$$
where $q=h_{1}u_{1}=h_{2}u_{2}$. We have:
$$\begin{align}
 & \frac{1}{2}gh_{1}^{2}+ U_{1}^{2}h_{1}= \frac{1}{2}gh_{2}^{2}+ U_{2}^{2}h_{2} \\
\implies & \frac{1}{2}g(h_{1}^{2}-h_{2}^{2})=h_{2}U_{2}^{2}-h_{1}U_{1}^{2} \\
\implies & \frac{1}{2}g(h_{1}^{2}-h_{2}^{2})=\frac{q^{2}}{h_{2}}- \frac{q^{2}}{h_{1}} = q^{2} \frac{h_{1}-h_{2}}{h_{1}h_{2}}
\end{align}$$
We assume that $h_{1} \neq h_{2}$, then:
$$\begin{align}
 & \frac{1}{2}g(h_{1}+h_{2})= \frac{q^{2}}{h_{1}h_{2}} \\
\implies & q^{2}= \frac{1}{2}gh_{1}h_{2}(h_{1}+h_{2})
\end{align}$$
Therefore:
$$U_{1}^{2}= \frac{q^{2}}{h_{1}^{2}}= \frac{gh_{2}(h_{1}+h_{2})}{2h_{1}},\ U_{2}^{2}= \frac{q^{2}}{h_{2}^{2}}= \frac{gh_{1}(h_{1}+h_{2})}{2h_{2}}$$
Then:
$$\begin{align}
\frac{1}{2}(U_{1}^{2}-U_{2}^{2}) & = \frac{1}{2}\left[ \frac{gh_{2}(h_{1}+h_{2})}{2h_{1}}- \frac{gh_{1}(h_{1}+h_{2})}{2h_{2}} \right] \\
 & = \frac{g(h_{1}+h_{2})}{4}\left( \frac{h_{2}}{h_{1}}- \frac{h_{1}}{h_{2}} \right) \\
 & = \frac{g(h_{1}+h_{2})^{2}(h_{2}-h_{1})}{4h_{1}h_{2}}
\end{align}$$
Then:
$$\begin{align}
\Delta E & = \rho q\left( -g(h_{1}-h_{1})+ \frac{g(h_{1}+h_{2})^{2}(h_{2}-h_{1})}{4h_{1}h_{2}} \right) \\
 & = \rho gq(h_{2}-h_{1})\left( \frac{(h_{1}+h_{2})^{2}}{4h_{1}h_{2}}-1 \right) \\
 & = \rho gq(h_{2}-h_{1}) \frac{(h_{2}-h_{1})^{2}}{4h_{1}h_{2}} \\
 & = \frac{\rho gq}{4h_{1}h_{2}}(h_{2}-h_{1})^{3} \\
 & = \frac{\rho gU_{1}}{4h_{2}}(h_{2}-h_{1})^{3}
\end{align}$$
# Acheson 4.4

We have the Laplace equation:
$$\nabla^{2}\phi=0\implies\begin{align}
\left[ \frac{1}{r} \frac{\partial}{\partial r}\left( r \frac{\partial}{\partial r} \right)+ \frac{1}{r^{2}} \frac{\partial^{2}}{\partial \theta^{2}} \right]\phi=0
\end{align}$$
with the boundary conditions:
$$\begin{align}
 & \mathbf{u}|_{r=\infty}=U \hat{\mathbf{x}} \\
 & u_{r}|_{r=a}= 0
\end{align}$$
The second boundary condition is due to that the flow cannot penetrate the cylinder.

Let $\phi=R(r)\Theta(\theta)$. Then:
$$\begin{align}
 & \Theta \frac{1}{r} \frac{\partial}{\partial r}\left(  r \frac{\partial}{\partial r}R \right)+ \frac{1}{r^{2}}R \frac{\partial^{2}}{\partial \theta^{2}}\Theta=0 \\
\implies & \frac{r}{R} \frac{\partial}{\partial r}\left( r \frac{\partial}{\partial r}R \right)+ \frac{1}{\Theta} \frac{\partial^{2}}{\partial \theta^{2}}\Theta=0 \\
\implies &  \frac{r}{R} \frac{\partial}{\partial r}\left( r \frac{\partial}{\partial r}R \right)=n^{2},\ \frac{1}{\Theta} \frac{\partial^{2}}{\partial \theta^{2}}\Theta=-n^{2}
\end{align}$$
Then we have:
$$\begin{align}
 & r^{2}  \frac{\partial^{2}}{\partial r^{2}}R+r \frac{\partial}{\partial r}R- n^{2}R=0 \\
 & \frac{\partial^{2}}{\partial \theta^{2}}\Theta=-n^{2}\Theta
\end{align}$$
Since we have:
$$\begin{align}
 & \mathbf{u}|_{r=\infty}=U  \hat{\mathbf{x}}= U(\cos \theta  \hat{\mathbf{r}}- \sin \theta  \hat{\boldsymbol{\theta}}) 
\end{align}$$
Then we can conclude that the angular dependence should imply that $n=1$ in $\frac{\partial^{2}}{\partial \theta^{2}}\Theta=-n^{2}\Theta$.

Then:
$$\begin{align}
 & r^{2}  \frac{\partial^{2}}{\partial r^{2}}R+ r \frac{\partial}{\partial r}R-R=0
\end{align}$$
We make the ansatz $R=r^{\lambda}$. Then we obtain:
$$\begin{align}
 & \lambda(\lambda-1)+\lambda-1=0 \\
\implies & \lambda=\pm 1
\end{align}$$
Then:
$$R(r)= Ar+ \frac{C}{r}$$
Therefore:
$$\begin{align}
 \phi(r,\theta)=\left( Ar+ \frac{C}{r} \right)\cos \theta
\end{align}$$
We compute:
$$\begin{align}
\mathbf{u} & = \left( \hat{\mathbf{r}} \frac{\partial}{\partial r}+ \hat{\boldsymbol{\theta}} \frac{1}{r} \frac{\partial}{\partial \theta} \right)\phi= \hat{\mathbf{r}}\left( A- \frac{C}{r^{2}} \right)\cos \theta- \hat{\boldsymbol{\theta}}\left( A+ \frac{C}{r^{2}} \right)\sin \theta
\end{align}$$
Then:
$$\mathbf{u}|_{r=\infty}=U (\cos \theta  \hat{\mathbf{r}}- \sin \theta  \hat{\boldsymbol{\theta}})\implies A= U$$
We then compute:
$$\begin{align}
u_{r} & = \left( U- \frac{C}{r^{2}} \right)\cos \theta
\end{align}$$
Then:
$$u_{r}|_{r=a}=0\implies C=Ua^{2}$$
Then:
$$\phi(r,\theta)= U\left( r+ \frac{a^{2}}{r} \right)\cos \theta$$
Now introduce the circulation. Notice that the circulation $\frac{\Gamma}{2\pi}\theta$ has the property that $\nabla^{2}\left( \frac{\Gamma}{2\pi}\theta \right)=0$, and it satisfies the boundary conditions. Therefore we can add it to the original solution:
$$\phi(r,\theta)=U\left( r+\frac{a^{2}}{r} \right)\cos \theta+ \frac{\Gamma}{2\pi}\theta$$
Then:
$$\begin{align}
 & u_{r}= \frac{\partial \phi}{\partial r}=U\left( 1- \frac{a^{2}}{r^{2}} \right)\cos \theta \\
 & u_{\theta}=-U\left( 1+ \frac{a^{2}}{r^{2}} \right)\sin \theta+ \frac{\Gamma}{2\pi r}
\end{align}$$
To find the stagnation point, we set:
$$\begin{align}
 & U\left( 1- \frac{a^{2}}{r^{2}} \right)\cos \theta=0 \\
\implies & r=a\text{ or }\theta=\frac{\pi}{2}\text{ or }  \frac{3\pi}{2}
\end{align}$$
If $r=a$, we have:
$$\begin{align}
 & u_{\theta}=-U 2 \sin \theta+ \frac{\Gamma}{2\pi a}=0 \\
\implies &  \sin \theta= \frac{\Gamma}{4\pi Ua}=- \frac{1}{2}B
\end{align}$$
So if $B\leq 2$, we have stagnation points at $r=a$, with $\sin \theta=- \frac{B}{2}$. There are two points since obviously $\sin \theta=- \frac{B}{2}$ has two solutions.

If $B>2$, only $\theta= \frac{\pi}{2}\text{ or }  \frac{3\pi}{2}$ would produce stagnation points. Then:
$$\begin{align}
 & U\left( 1+ \frac{a^{2}}{r^{2}} \right)\sin \theta= \frac{\Gamma}{2\pi r} \\
\implies & U\left( 1+ \frac{a^{2}}{r^{2}} \right)\sin \theta= - \frac{BUa}{r } \\
\implies & \left( 1+ \frac{a^{2}}{r^{2}} \right)\sin \theta=-B \frac{a}{r}
\end{align}$$
Since $\text{RHS}<0,\ (1+ \frac{a^{2}}{r^{2}})>0$, we must have $\sin \theta <0$. So we take $\theta=\frac{3\pi}{2}$. Then:
$$\begin{align}
 & \left( 1+ \frac{a^{2}}{r^{2}} \right)
- \frac{Ba}{r}=0 \\
\implies & \frac{r}{a}= \frac{B\pm \sqrt{ B^{2}-4 }}{2}\end{align}$$
We must have $\frac{r}{a}>1$, so we take:
$$\begin{align}
\frac{r}{a}= \frac{B+ \sqrt{ B^{2}-4 }}{2}= \frac{B}{2}+ \left( \frac{B^{2}}{4}-1 \right)^{1/2}
\end{align}\text{ with }\theta= \frac{3\pi}{2}$$
Clearly, the positions of the stagnations points vary as we tune $B$. When $B\leq 2$, as we increase $B$, clearly the solution to $\sin \theta=- \frac{B}{2}$ moves closer to each other and annihilate at $\theta=\frac{3\pi}{2}$. Then if we further increase $B$, the point moves off the surface of the cylinder vertically, with $\frac{r}{a}= \frac{B}{2}+\left( \frac{B^{2}}{4}-1 \right)^{1/2}$. 
# Acheson 4.5

Take a line element $d  \hat{\mathbf{l}}$ oriented counterclockwise along $C$. Then the force is:
$$d F_{x}=-dl p  \sin \theta,\ dF_{y}= dlp \cos \theta$$
Then the torque is:
$$d\mathcal{N}= xdF_{y}-ydF_{x}$$
Observe that:
$$\begin{align}
z(dF_{x}-idF_{y}) & = xdF_{x}+ydF_{y}-ixdF_{y}+iydF_{x}
\end{align}$$
Then:
$$d\mathcal{N}= -\mathrm{Im}(z(dF_{x}-idF_{y}))=\mathrm{Re}(iz(dF_{x}-idF_{y}))$$
We know that:
$$\begin{align}
dF_{x}-idF_{y} & = -dlp \sin \theta- i dlp \cos \theta  \\
 & = -idlpe^{-i\theta} 
\end{align}$$
Recall the Bernoulli's theorem:
$$\frac{1}{2}\rho|\mathbf{u}|^{2}+ p=k\text{ for some constant }k$$
Then:
$$dF_{x}-idF_{y}= -idl\left( k- \frac{1}{2}\rho|\mathbf{u}|^{2} \right)e^{-i\theta}$$
Observe that:
$$\begin{align}
\frac{dw}{dz} & = \frac{dw}{dx} \\
 & = \frac{\partial \phi}{\partial x}+ i \frac{\partial \psi}{\partial x} \\
 & = u-iv
\end{align}$$
Since the velocity on $C$ cannot have perpendicular component, we have $(u,v)\parallel d  \hat{\mathbf{l}}$. Then:
$$\begin{align}
\frac{dw}{dz} & = |\mathbf{u}|\cos \theta-i |\mathbf{u}|\sin \theta \\
 & = |\mathbf{u}| e^{-i\theta}
\end{align}$$
Therefore:
$$\begin{align}
dF_{x}-idF_{y} & = \left[ \frac{1}{2}\rho e^{2i\theta}\left(  \frac{dw}{dz} \right)^{2}-k \right] i e^{-i\theta}dl \\
 & = \frac{1}{2}i \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl- ki(dx-idy)
\end{align}$$
Then:
$$\begin{align}
iz(dF_{x}-idF_{y}) & = - \frac{1}{2}z \rho e^{i\theta}\left(  \frac{dw}{dz} \right)^{2}dl+ kz(dx-dy) \\
 & = - \frac{1}{2}z \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl+ k(xdx+ydy) \\
\end{align}$$
Then:
$$\begin{align}
\mathcal{N} & = \oint_{C} \mathrm{Re}(iz(dF_{x}-idF_{y})) \\
 & = \oint \mathrm{Re}\left( - \frac{1}{2}z\rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2} dl\right)+ \oint k(xdx+ydy) \\
 & = \oint \mathrm{Re}\left( - \frac{1}{2}z \rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl \right)+ k\left[ \frac{1}{2}x^{2}+ \frac{1}{2}y^{2} \right]_{(x_{0},y_{0})}^{(x_{0},y_{0})} \\
 & = \mathrm{Re}\left( \oint\left( - \frac{1}{2}z\rho e^{i\theta}\left( \frac{dw}{dz} \right)^{2}dl \right) \right)+0 \\
 & = \mathrm{Re}\left( \oint\left( - \frac{1}{2}z\rho\left( \frac{dw}{dz} \right)^{2}dz \right) \right)
\end{align}$$
We can move $\mathrm{Re}$ out of the integral since in general:
$$\int \mathrm{Re}((f+ig)dl)= \int fdl=\mathrm{Re}\left( \int fdl+ i  \int gdl \right)=\mathrm{Re}\left( \int(f+ig)dl \right)\text{ for }f(x,y),g(x,y)\in \mathbb{R}$$
# Acheson 4.8

We have the transformation:
$$Z= z+ \frac{a^{2}}{z}$$
Then:
$$\begin{align}
\frac{Z-2a}{Z+2a } & = \frac{z+ \frac{a^{2}}{z}-2a}{z+ \frac{a^{2}}{z}+2a} \\
 & = \frac{(z-a)^{2}}{(z+a)^{2}}
\end{align}$$
Then we have:
$$\begin{align}
 & \text{arg}\left( \frac{Z-2a}{Z+2a} \right)= \text{arg}\left( \left( \frac{z-{a}}{z+a} \right)^{2} \right) \\
\implies & \text{arg}(Z-2a)-\text{arg}(Z+2a)= 2 \text{arg}\left( \frac{z-a}{z+a} \right)=2\text{arg}(z-a)-2\text{arg}(z+a)
\end{align}$$
Consider the circle in the $z$-plane. 
![[Drawing 2026-03-08 21.56.19.excalidraw|300|center]]
It's obvious from geometry that given a point $z$ on the circle, we have:
$$\text{arg}(z-a)-\text{arg}(z+a)=\beta$$
Then:
$$\text{arg}(Z-2a)-\text{arg}(Z+2a)=2\beta$$
Therefore, the transformed circle is a circle intersecting the $x$-axis at $\pm 2a$, subtending an angle of $2\beta$.

In the $z$-plane, by problem 4.4, we have:
$$\phi(r,\theta)= U\left( r+ \frac{a^{2}}{r} \right)\cos \theta+ \frac{\Gamma}{2\pi }\theta$$
Cauchy-Riemann condition implies that:
$$\begin{align}
 & r \frac{\partial \phi}{\partial r}= \frac{\partial \psi}{\partial \theta} \\
\implies & \frac{\partial \psi}{\partial \theta}=U\cos \theta\left( r- \frac{a^{2}}{r} \right) \\
\implies & \psi=U\sin \theta\left( r- \frac{a^{2}}{r} \right)+f(r)
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial \phi}{\partial \theta}=- r \frac{\partial \psi}{\partial r} \\
\implies &  \frac{df}{dr}=- \frac{\Gamma}{2\pi r}\implies f(r)= - \frac{\Gamma}{2\pi}\ln r+C
\end{align}$$
Without loss of generality, set $C=0$. We have:
$$\begin{align}
w(z) & = U\left( r+ \frac{a^{2}}{r} \right)\cos \theta+ \frac{\Gamma}{2\pi}\theta+ i \left[ U\sin \theta\left( r- \frac{a^{2}}{r} \right)- \frac{\Gamma}{2\pi}\ln r \right] \\
 & = Ur(\cos \theta+i\sin \theta)+ U \frac{a^{2}}{r}(\cos \theta- i\sin \theta)+ \frac{\Gamma}{2\pi}(\theta-i\ln r) \\
 & = Ur e^{i\theta}+ U \frac{a^{2}}{re^{i\theta}}+ \frac{\Gamma}{2\pi}(-i)(\ln r+i\theta) \\
 & = U\left(  z+ \frac{a^{2}}{z} \right)+ \frac{\Gamma}{2\pi i}\ln z
\end{align}$$
Now if the circle is centered at $ia\cot \beta$, with radius $a\csc \beta$ we have:
$$\begin{align}
w(z) & = U\left( (z-ia\cot \beta )+ \frac{a^{2}\csc ^{2}\beta}{z-ia\cot \beta}  \right)+ \frac{\Gamma}{2\pi i}\ln(z-ia\cot \beta)
\end{align}$$
Let $\tilde{w}$ be the transformed complex potential in the $Z$-plane. Then:
$$\begin{align}
\tilde{w}(Z) & = w(z)\text{ where }Z= z+ \frac{a^{2}}{z}
\end{align}$$
We can solve:
$$\begin{align}
 & Z=z+ \frac{a^{2}}{z} \\
\implies &  z^{2}-Zz+a^{2}=0 \\
\implies & z= \frac{Z\pm \sqrt{ Z^{2}-4a^{2} }}{2}
\end{align}$$
We must have that $z\approx Z\text{ at }r\rightarrow \infty$. Therefore must conclude that:
$$z= \frac{Z+\sqrt{ Z^{2}-4a^{2} }}{2}$$
Then:
$$\begin{align}
\tilde{w}(Z) & = U\left( \left( \frac{Z+\sqrt{ Z^{2}-4a^{2} }}{2} -ia\cot \beta\right) + \frac{a^{2}\csc ^{2}\beta}{\frac{Z+\sqrt{ Z^{2}-4a^{2} }}{2}-ia\cot \beta} \right)+ \frac{\Gamma}{2\pi i}\ln\left( \frac{Z+\sqrt{ Z^{2}-4a^{2} }}{2}-ia\cot \beta \right)
\end{align}$$
We have the complex velocity:
$$\begin{align}
\frac{d\tilde{w}}{dZ} & = \frac{dw}{dz} \frac{dz}{dZ} \\
 & = \frac{dw}{dz} \frac{1}{1- \frac{a^{2}}{z^{2}}}
\end{align}$$
Note that at the leading and trailing edges, we have $z=\pm a$. Then we must conclude that:
$$\left. \frac{dw}{dz}\right|_{z=\pm a}=0$$
so that the velocity doesn't blow up. Let $R=a\csc ^{2}\beta$, we have:
$$\begin{align}
\frac{dw}{dz} & = U\left( 1- \frac{R^{2}}{(z-ia\cot \beta)^{2}} \right)+ \frac{\Gamma}{2\pi i(z-ia\cot \beta)}
\end{align}$$
At $z=a$, we have:
$$\begin{align}
\frac{dw}{dz} & = U\left( 1- \frac{R^{2}}{(a-ia\cot \beta)^{2}} \right)+ \frac{\Gamma}{2\pi i(a-ia\cot \beta)} \\
 & = U\left( 1- \frac{R^{2}}{\left( \frac{a}{\sin \beta}e^{-i\left( \frac{\pi}{2}-\beta \right)} \right)^{2}} \right)+ \frac{\Gamma}{2\pi i\left( \frac{a}{\sin \beta}e^{-i\left( \frac{\pi}{2}-\beta \right)} \right)} \\
 & = U(1- e^{2i(\pi /2-\beta)})+ \frac{\Gamma}{2\pi i\mathrm{Re}^{-i(\pi /2-\beta)}} \\
 & = U(1+e^{-i{2}\beta})+ \frac{\Gamma}{2\pi \mathrm{Re}^{i\beta} }=0
\end{align}$$
Then:
$$\begin{align}
 & Ue^{-i\beta}(e^{i\beta}+e^{-i\beta})+ \frac{\Gamma e^{-i\beta}}{2\pi R}=0 \\
\implies & 2U\cos \beta+ \frac{\Gamma}{2\pi R}=0 \\
\implies & \Gamma=-4\pi RU\cos \beta=-4\pi Ua\cot \beta
\end{align}$$
Similarly, at $z=-a$, we have:
$$\begin{align}
\frac{dw}{dz} & = U\left( 1- \frac{R^{2}}{(a+ia\cot \beta)^{2}} \right)- \frac{\Gamma}{2\pi i(a+ia\cot \beta)} \\
 & = U\left( 1- \frac{R^{2}}{\left( \frac{a}{\sin \beta}e^{-i\left( \beta- \frac{\pi}{2}\right)} \right)^{2}} \right)+ \frac{\Gamma}{2\pi i\left( \frac{a}{\sin \beta}e^{-i\left( \beta- \frac{\pi}{2}\right)} \right)} \\
 & = U\left( 1- e^{2i\left( \beta- \frac{\pi}{2} \right)} \right)+ \frac{\Gamma}{2\pi i\mathrm{Re}^{-i\left( \beta- \frac{\pi}{2} \right)}} \\
 & = U(1+e^{i{2}\beta})- \frac{\Gamma}{2\pi \mathrm{Re}^{-i\beta} }=0
\end{align}$$
Then:
$$\begin{align}
 & Ue^{i\beta}(e^{i\beta}+ e^{-i\beta})+ \frac{\Gamma e^{i\beta} }{2\pi R}=0 \\
\implies & 2U\cos \beta+ \frac{\Gamma}{2\pi R}=0 \\
\implies & \Gamma=-4\pi Ua\cot \beta
\end{align}$$
# Acheson 4.10

Let $S$ be the boundary of the control region $ABCDA$ and the boundary of the airfoil $C$. Then:
$$-\int_{S}p n_{x}dl= \int_{S}\rho u(\mathbf{u}\cdot \mathbf{n})dl$$
On $C$, we have:
$$F_{x}=-\int_{C}pn_{x}dl$$
where $n_{x}$ points out of the airfoil. Since $\mathbf{u}\cdot \mathbf{n}=0$ on $C$, we have:
$$\int_{C}\rho u(\mathbf{u}\cdot \mathbf{n})dl=0$$
Then:
$$-\int_{\text{ABCDA}}pn_{x}dl+F_{x}=\int_{\text{ABCDA}}\rho u(\mathbf{u}\cdot \mathbf{n})dl$$
Assume that on AD, we have $\mathbf{u}=(U,0)$. On BC, we have $\mathbf{u}=(u^{'},v^{'})$.

Since AB, DC are streamlines, we must have mass conservation throughout ABCDA:
$$\rho Ud=\rho u^{'}d\implies u^{'}=U$$
Here the integrals along AB and CD cancel out because the velocities on them are exactly the same. 

Let the pressure be $p,p^{'}$ on AD, BC. Then Bernoulli's theorem implies that:
$$p+ \frac{1}{2}\rho U^{2}=p^{'}+ \frac{1}{2}\rho\left( U^{2}+ \frac{\Gamma^{2}}{d^{2}}
\right)\implies p-p^{'}= \frac{1}{2}\rho \frac{\Gamma^{2}}{d^{2}}$$
Then we have:
$$\begin{align}
F_{x} & = \int_{\text{ABCDA}} pn_{x}dl+ \int_{\text{ABCDA}} \rho u(\mathbf{u}\cdot \mathbf{n})dl \\
 & = -p^{'}d+pd+ \int_{\text{BC}} \rho U \cdot U dy+ \int_{\text{AD}}\rho U(-U)dy \\
 & = \frac{1}{2}\rho \frac{\Gamma^{2}}{d}+\rho U^{2}d-\rho U^{2}d \\
 & = \frac{\rho \Gamma^{2}}{2d}
\end{align}$$
For the same reason, the integrals along AB, CD are not considered because they cancel out. 

There is no contradiction because the two systems rely on fundamentally different far-field boundary conditions. The Kutta-Joukowski theorem assumes an isolated body where the flow returns to a uniform state at infinity, yielding zero drag. In contrast, here the downstream flow is permanently deflected, and the velocity to the right infinity is no longer $U  \hat{\mathbf{x}}$. This creates a global static pressure drop that leads to a non-zero drag.
# HW2S1
## a)

We have:
$$\begin{align}
w(z) & = z^{2/3}  \\
 & = r^{2/3} e^{\frac{2}{3}i\theta} \\
 & = r^{2/3} \cos \frac{2}{3}\theta+ i r ^{2/3} \sin \frac{2}{3}\theta
\end{align}$$
Then we have the stream function:
$$\psi=r^{2/3} \sin \frac{2}{3}\theta$$
We know that the equipotential line of $\psi$ defines streamlines, since:
$$\begin{align}
d\psi & = \frac{\partial \psi}{\partial x}dx+ \frac{\partial \psi}{\partial y}dy \\
 & = -vdx+ udy=0 \\
\implies & \frac{dy}{dx}= \frac{v}{u}
\end{align}$$
Know that on the boundary, there's no perpendicular velocity component, then the boundary is a streamline. Then we must have:
$$\psi=C\text{ for some constant }C$$
on the boundary. If the boundary has a corner, we must conclude that the equipotential line passes through $r=0$ so that $C=0$. Otherwise, the equipotential line does not give a corner and is given by:
$$r^{2/3}\sin \frac{2}{3}\theta=C,\ C\neq 0$$
Therefore, we have:
$$r^{2/3}\sin \frac{2}{3}\theta=0\implies r=0\text{ or }\theta=0\text{ or }  \frac{3}{2}\pi$$
Then, the flow is limited in the first three quadrants.
## b)
![[Pasted image 20260309005734.png|center|500]]
## c)

We know that:
$$|\mathbf{u}|= |  \frac{dw}{dz}|= \frac{2}{3}r^{-1/3}$$
Then the constant in Bernoulli's theorem is:
$$\frac{1}{2}\rho|\mathbf{u}|^{2}+ p=0+0\text{ at }r=\infty$$
Then on the boundary wall, we have:
$$\begin{align}
 & p+ \frac{1}{2}\rho \frac{4}{9}r^{-2/3}=0 \\
\implies & p=- \frac{2}{9} \rho r^{-2/3}
\end{align}$$
# HW2S2

For $\phi= \frac{A\omega}{k}e^{ky}\sin(kx-\omega t)$, we have:
$$\begin{align}
 & \frac{\partial \psi}{\partial y}= \frac{\partial \phi}{\partial x}= A\omega e^{ky}\cos(kx-\omega t) \\
\implies  & \psi= \frac{A\omega}{k}e^{ky}\cos(kx-\omega t)+f(x,t)
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial \psi}{\partial x}=- \frac{\partial \phi}{\partial y} =-\frac{A\omega}{k}ke^{ky}\sin(kx-\omega t) \\
\implies &  -\frac{A\omega}{k}ke^{ky}\sin(kx-\omega t)+ \frac{\partial f}{\partial x}= - \frac{A\omega}{k}ke^{ky}\sin(kx-\omega t) \\
\implies & f=C\text{ for some constant }C
\end{align}$$
Without loss of generality, take $C=0$. This is because only the derivative of $\psi$ would contribute to velocities, and there is a gauge freedom.

Then:
$$w(z)= \frac{A\omega}{k}e^{ky}(\sin(kx-\omega t)+i\cos(kx-\omega t))= i \frac{A\omega}{k}e^{ky}e^{-i(kx-\omega t)}= i \frac{A\omega}{k}e^{-ikz+i\omega t}$$
![[Pasted image 20260309014003.png|center|600]]


For the second case, suppose the surface is given by:
$$\eta=A\cos(kx-\omega t)$$
we propose an ansatz:
$$\phi=\phi_{0}(y) \sin(kx-\omega t)$$
We have:
$$\nabla^{2}\phi=0$$
with boundary conditions:
$$\begin{align}
 & \partial_{y}\phi=0\text{ at }y=-h \\
 & \partial_{y}\phi=\partial_{t}\eta\text{ at }y=0 \\
 & \partial_{t}\phi+g\eta=0\text{ at }y=0
\end{align}$$
Then:
$$\begin{align}
 & \nabla^{2}\phi=0\implies \partial_{yy}\phi_{0}=k^{2}\phi_{0}\implies \phi_{0}(y)=Be^{ky}+Ce^{-ky}
\end{align}$$
Then:
$$\partial_{y}\phi=0\text{ at }y=-h\implies \phi_{0}(y)=B\cosh(k(y+h))$$
Then:
$$\phi=B\cosh(k(y+H))\sin(kx-\omega t)$$
Then:
$$\begin{align}
 & \left.\frac{\partial \phi}{\partial y}\right|_{y=0}= Bk\sinh(kh)\sin(kx-\omega t)= \frac{\partial \eta}{\partial t}= A \omega \sin(kx-\omega t) \\
\implies & B= \frac{A\omega}{k\sinh(kh)}
\end{align}$$
Then:
$$\phi= \frac{A\omega}{k\sinh(kh)}\cosh(k(y+h))\sin(kx-\omega t)$$
Similarly, we compute:
$$\begin{align}
 & \frac{\partial \psi}{\partial y}= \frac{\partial \phi}{\partial x}= \frac{A\omega}{\sinh(kh)}\cosh(k(y+h))\cos(kx-\omega t) \\
\implies & \psi=\frac{A\omega}{k \sinh(kh)}\sinh(k(y+h))\cos(kx-\omega t)+f(x,t)
\end{align}$$
Similarly:
$$\begin{align}
 & \frac{\partial \psi}{\partial x}=- \frac{\partial \phi}{\partial y} \\
\implies & \frac{\partial f}{\partial x}=0 \\
\implies  & f=0
\end{align}$$
Here we take $f=0$ again without loss of generality. Then:
$$w(z)= \frac{A\omega}{k\sinh(kh)}(\sin(kx-\omega t)\cosh(k(y+h))+i\cos(kx-\omega t)\sinh(k(y+h)))$$
Know that:
$$\begin{align}
  \sin(\alpha+i\beta)  & = \sin \alpha \cos(i\beta)+ \cos \alpha \sin(i\beta) \\
 & = \sin \alpha \cosh \beta+i\cos \alpha \sin \beta
\end{align}$$
Then:
$$\begin{align}
w(z) & = \frac{A\omega}{k\sinh(kh)}\sin(k(z+ih)-\omega t)
\end{align}$$
![[Pasted image 20260309014104.png|center|600]]



