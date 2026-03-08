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

Define the velocity potential $\phi(x,y,t)$ for $y>h(x,t)$ and $y< h(x,t)$. For $y<h$, consider the Fourier transform:
$$\begin{align}

\phi(x,y,t)= \int_{\mathbb{R}^{2}}dkd\omega \tilde{\phi}(k,y,t)e^{i(kx-\omega t)}

\end{align}$$
Then the Laplace equation reduces to:
$$\nabla^{2}\phi=0\implies \partial_{yy}\tilde{\phi}=k^{2}\tilde{\phi}\implies \tilde{\phi}=Be ^{{|k|y}}+C e^{{-|k|}y}$$
Know that:
$$\begin{align}

 & u < \infty\text{ at } y=-\infty \\

\implies & |\nabla \phi |<  \infty\text{ at }y=- \infty \\

\implies & \left|\partial_{x}\int dkd\omega \tilde{\phi}e^{i(kx-\omega t)} \right|< \infty  \text{ at }y=- \infty\\

\implies & \left|\int dkd\omega \tilde{\phi} (ik)e^{i(kx-\omega t)}\right|<\infty \text{ at }y=- \infty\implies  \tilde{\phi}=B e^{|k|y}\text{ for }y<h

\end{align}$$
Then we transform $\eta$:
$$\begin{align}

\tilde{\eta}(k^{'},\omega^{'}) & = \left( \frac{1}{2\pi} \right)^{2}\int_{\mathbb{R}^{2}}dxdt A e^{i(kx-\omega t)}e^{-i(k^{'}x-\omega^{'}t)} \\

 & = A \delta(k^{'}-k)\delta(\omega^{'}-\omega)

\end{align}$$
we have:
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
Similarly, we conclude that $C_{-}$ curves are linear since $u,c$ are fixed. They are all parallel since they have the same slope defined by $\frac{dx}{dt}=u-c= \frac{3}{2}V-c_{0}$. 
