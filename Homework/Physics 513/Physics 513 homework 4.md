# Problem 1
## (a)

Let $\mathcal{z}=Re^{i\theta}$. Then we have:
$$\begin{align}
\int_{\mathcal{C}} \frac{1}{\mathcal{z}}d\mathcal{z} & = \int_{0}^{2\pi}  \frac{1}{\mathrm{Re}^{i\theta}}  Rie^{i\theta}d\theta \\
 & = i \int_{0}^{2\pi}d\theta \\
 & = 2\pi i
\end{align}$$
## (b)

If the contour is traversed in the clockwise direction, then we take $\int_{2\pi}^{0} d\theta=- \int_{0}^{2\pi}d\theta$. The integral just gets a minus sign. Then the result is just $-2\pi i$.
## (c)

We have:
$$\begin{align}
\int_{\mathcal{C}}dz z^{n} & = \int_{0}^{2\pi} d\theta i\mathrm{Re}^{i\theta} R^{n}e^{ in \theta} \\
 & = iR^{n+1} \frac{1}{i(n+1)}[e^{i(n+1)\theta}]^{2\pi}_{0} \\
 & = 0
\end{align}$$
This is because $(n+1)\in \mathbb{Z}$, which dictates the exponential to rotate back to the starting point. 
## (d)

For $n=-1$ we just computed the result in part (a), which is $2\pi i$.

For $n< -1$ we still have:
$$\begin{align}
\int_{\mathcal{C}}dz z^{n} & = \int_{0}^{2\pi} Ri e^{i\theta}d\theta R^{n}e^{ni\theta} \\
 & = iR^{n+1} \int_{0}^{2\pi}d\theta e^{(1+n)i\theta} \\
 & = iR^{n+1} \frac{1}{(1+n)i}[e^{(1+n)i\theta}]_{0}^{2\pi} \\
 & = 0
\end{align}$$
## (e)

The integrand is:
$$\begin{align}
\frac{1}{1+R^{2}e^{2i\phi}}
\end{align}$$
For $R\rightarrow \infty$ the integrand is suppressed to zero. We have:
$$\begin{align}
 & \left|\int_{0}^{\pi} d\phi \frac{1}{1+R^{2}e^{2i\phi}} \right|\leq \int_{0}^{\pi}d\phi \left| \frac{1}{1+R^{2}e^{2i\phi}} \right|\rightarrow0\text{ as }R\rightarrow \infty \\
\implies & \int_{0}^{\pi}d\phi \frac{1}{1+R^{2}e^{2i\phi}}  \rightarrow  0\text{ as }R\rightarrow \infty
\end{align}$$
Then the integral does not change its value by the closing of the contour.
## (f)
$$\begin{align}
\frac{1}{1+z^{2}} & = \frac{1}{(z-i)(z+i)} \\
 & = \frac{1}{2i}\left(  \frac{1}{z-i}- \frac{1}{z+i} \right)
\end{align}$$
Then clearly:
$$\begin{align}
 & z_{0}=i,\ A= \frac{1}{2i} \\
 & z_{0}^{'}=-i,\ A^{'}=- \frac{1}{2i}
\end{align}$$
## (g)

The pole $z_{0}=i$ is inside the contour. Therefore:
$$\begin{align}
\int_{-\infty}^{\infty}dz \frac{1}{1+z^{2}} & = \oint_{\mathcal{C}} dz \frac{1}{1+z^{2}} \\
 & = \oint_{\mathcal{C}}dz \frac{1}{2i}\left(  \frac{1}{z-i}- \frac{1}{z+i} \right) \\
 & = \frac{1}{2i}\cdot 2\pi i \\
 & = \pi
\end{align}$$
The $\frac{1}{z+i}$ does not contribute since its pole is not enclosed by the contour. 
## (h)

If we close the contour in the lower half-plane, then since we are going clockwise, we get a minus sign:
$$\begin{align}
\int_{-\infty}^{\infty}dz \frac{1}{1+z^{2}} & =  \oint_{\mathcal{C}^{'}} dz \frac{1}{1+z^{2}} \\
 & =  \oint dz \frac{1}{2i}\left( \frac{1}{z-i}-\frac{1}{z+i} \right) \\
 & = -2\pi(-i) \cdot \frac{1}{2i} \\
 & = \pi
\end{align}$$
Here only the pole $z_{0}^{'}=-i$ contributes.
## (i)

We have:
$$\begin{align}
I & = \int_{-\infty}^{\infty}dx \frac{1}{1+x^{2}} \\
 & = \int dx  \frac{d}{dx}(\arctan x) \\
 & = [\arctan x]_{-\infty}^{\infty} \\
 & = \frac{\pi}{2}-\left( - \frac{\pi}{2} \right) \\
 & = \pi
\end{align}$$
# Problem 2
## (a)

We need to evaluate:
$$\begin{align}
\int d^{3}p \frac{e^{-ip\cdot x}}{E_{\mathbf{p}}} & = \int d\phi d\theta dr r^{2}\sin \theta \frac{e^{-iE_{\mathbf{p}}t}e^{ir|\mathbf{x}|\cos \theta}}{E_{\mathbf{p}}} \\
 & = -2\pi \int d(\cos \theta) \int_{0}^{\infty}dr r^{2} \frac{e^{-iE_{\mathbf{p}}t}e^{ir|\mathbf{x}|\cos \theta}}{E_{\mathbf{p}}} \\
 &= -2\pi \int dr r^{2} \frac{e^{-iE_{\mathbf{p}}t}}{E_{\mathbf{p}}} \frac{1}{ir|\mathbf{x}|} (e^{ir|\mathbf{x}|}-e^{-ir|\mathbf{x}|} ) \\
 & = -4\pi \int dr \frac{r}{|\mathbf{x}|}  \frac{e^{-iE_{\mathbf{p}}t}}{E_{\mathbf{p}}}\sin(r|\mathbf{x}|) \\
 & = -4\pi \int_{0}^{\infty} dr  \frac{r}{|\mathbf{x}|}  \frac{e^{-irt}}{r} \sin(r|\mathbf{x}|)   \\
 & = -4\pi \int_{0}^{\infty}dr \frac{1}{|\mathbf{x}|} e^{-irt}\sin(r|\mathbf{x}|)
\end{align}$$
For convergence, we replace $t\leadsto t-i\epsilon$. We have:
$$\begin{align}
\int_{0}^{\infty}dr e^{-ir(t-i\epsilon)}\sin(r|\mathbf{x}|) & = \frac{1}{2i}\int_{0}^{\infty} dr e^{-irt-r\epsilon}(e^{ir|\mathbf{x}|}-e^{-ir|\mathbf{x}|}) \\
 & = \frac{1}{2i}\left(  \frac{1}{i|\mathbf{x}|-it-\epsilon} - \frac{1}{-i|\mathbf{x}|-it-\epsilon} \right) \\
 & = \frac{1}{2i} \frac{-2i|\mathbf{x}|}{(it+\epsilon)^{2}+|\mathbf{x}|^{2}} \\
 & = \frac{-|\mathbf{x}|}{(it+\epsilon)^{2}+|\mathbf{x}|^{2}}
\end{align}$$
Then we get:
$$\begin{align}
D_{W}(x) & =  \frac{1}{2(2\pi)^{3}} \cdot (-4\pi)  \frac{-1}{(it+\epsilon)^{2}+|\mathbf{x}|^{2}} \\
 & = \frac{1}{4\pi^{2}} \frac{1}{|\mathbf{x}|^{2}-(t-i\epsilon)^{2}} 
\end{align}$$
## (b)

We first want to rewrite the Wightman function. We have:
$$\begin{align}
\frac{1}{(t-i\epsilon)^{2}-|\mathbf{x}|^{2}} & = \frac{1}{(t-|\mathbf{x}|-i\epsilon)(t+|\mathbf{x}|-i\epsilon)} \\
 & = \frac{1}{2r} \frac{t+|\mathbf{x}|-i\epsilon-(t-|\mathbf{x}|-i\epsilon)}{(t-|\mathbf{x}|-i\epsilon)(t+|\mathbf{x}|-i\epsilon)} \\
 & = \frac{1}{2r}\left(  \frac{1}{t-|\mathbf{x}|-i\epsilon}- \frac{1}{t+|\mathbf{x}|-i\epsilon}  \right)
\end{align}$$
Then we compute:
$$\begin{align}
D_{W}(x) & = \frac{1}{8\pi^{2}r}\left(  \frac{1}{t+|\mathbf{x}|-i\epsilon}- \frac{1}{t-|\mathbf{x}|-i\epsilon} \right) \\
 & = \frac{1}{8\pi^{2}r}\left(  \frac{P}{t+|\mathbf{x}|}- \frac{P}{t-|\mathbf{x}|} +i\pi\delta(t+|\mathbf{x}|)-i\pi\delta(t-|\mathbf{x}|)\right)
\end{align}$$
We know that :
$$\begin{align}
D_{W}(-x)= \bra{0} \phi(0)\phi(x)\ket{0} 
\end{align}$$
Then:
$$\begin{align}
\bra{0} [\phi(x),\phi(0)]\ket{0}  & = D_{W}(x)-D_{W}(-x) \\
 & = \frac{1}{8\pi^{2}r}(2i\pi\delta(t+|\mathbf{x}|)-2i\pi\delta(t-|\mathbf{x}|)) \\
 & = \frac{i}{4\pi^{}r}(\delta(t+|\mathbf{x}|)-\delta(t-|\mathbf{x}|))
\end{align}$$
Then we have:
$$\begin{align}
D(x) & = \frac{1}{4\pi^{}r}(\delta(t+|\mathbf{x}|)-\delta(t-|\mathbf{x}|))
\end{align}$$
Similarly, the Hadamard function is given by:
$$\begin{align}
D_{1}(x) & = \bra{0} \{ \phi(x),\phi(0) \}\ket{0}  \\
 & = D_{W}(x)+D_{W}(-x) \\
 & = \frac{1}{8\pi^{2}r}\left(  \frac{2P}{t+|\mathbf{x}|} - \frac{2P}{t-|\mathbf{x}|}\right) \\
 & = \frac{1}{4\pi^{2} r}\left(  \frac{P}{t+|\mathbf{x}|} - \frac{P}{t-|\mathbf{x}|}\right)
\end{align}$$
# Problem 3
## (a)

Recall that Wightman function is defined as:
$$D_{W}(x)= \int \frac{d^{3}p}{(2\pi)^{3}} \frac{e^{-ip\cdot x}}{2E_{\mathbf{p}}}$$
In the last homework, we showed that $\frac{d^{3}p}{E_{\mathbf{p}}}$ is Lorentz-invariant. Also notice that $p\cdot x$ is Lorentz-invariant.

Then we are free to choose reference frame such that $x^{'\mu}=(0,\mathbf{r})$. This is always possible for a spacelike $x$. Suppose in the frame $\mathcal{O}$, we choose the x axis to be parallel to the spatial coordinate. Then we consider a Lorentz boost in the x direction with $v= \frac{t}{x}< 1$. Then:
$$\begin{align}
t^{'}= \gamma t-\gamma v x=0
\end{align}$$
And we clearly have:
$$x^{'2}=-r^{2}=x^{2}$$
Here we denote $r=|\mathbf{r}|$. Then in the new frame, we have:
$$\begin{align}
D_{W}(x^{'})  & = \int \frac{d^{3}p^{'}}{(2\pi)^{3}} \frac{e^{-ip^{'}\cdot x^{'}}}{2E_{\mathbf{p}^{'}}} \\
 & = \frac{1}{2(2\pi)^{3}}\int d\phi d\theta dp^{'} p^{'2} \sin \theta \frac{e^{ip^{'}r\cos \theta}}{E_{\mathbf{p}^{'}}}  \\
 & =  \frac{-1}{2(2\pi)^{3}} 2\pi \int dp^{'}p^{'2}  \frac{1}{ip^{'}r} \frac{1}{E_{\mathbf{p}^{'}}}(e^{-ip^{'}r}-e^{ip^{'}r})
\end{align}$$
We rewrite $p^{'}$ as $p$, then we get:
$$\begin{align}
D_{W}(x^{'}) & = - \frac{i}{2(2\pi)^{2}r}\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}(e^{ipr}-e^{-ipr})
\end{align}$$
Notice that this is a function of $r$. So we can write:
$$\begin{align}
D_{W}(r) & = - \frac{i}{2(2\pi)^{2}r}\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}(e^{ipr}-e^{-ipr})
\end{align}$$
We take $r\leadsto r+i\epsilon$ to write:
$$\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}e^{ip(r+i\epsilon)}=\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}e^{ipr}e^{-p\epsilon}$$
We take $r\leadsto r-i\epsilon$ to write:
$$\begin{align}
\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}e^{-ip(r-i\epsilon)} & = \int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}e^{ipr}e^{-p\epsilon}
\end{align}$$
Now it suffices to compute:
$$\begin{align}
\int_{0}^{\infty}dp \frac{p}{\sqrt{ p^{2}+m^{2} }}(e^{ipr}-e^{-ipr})  & = \int_{0}^{\infty} dp \frac{p}{\sqrt{ p^{2}+m^{2} }} e^{-p\epsilon}(e^{ipr}-e^{-ipr}) \\
& = 2i\int dp  e^{-p\epsilon} \frac{p}{\sqrt{ p^{2}+m^{2} }}\sin(pr) \\
 & = -2i \int dp e^{-p\epsilon}\frac{1}{\sqrt{ p^{2}+m^{2} }} \frac{\partial}{\partial r}(\cos(pr)) \\
 & = -2i \frac{\partial}{\partial r}\int_{0}^{\infty}dpe^{-p\epsilon} \frac{\cos(pr)}{\sqrt{ p^{2}+m^{2} }}
\end{align}$$
We change the variable by setting $p=m\sinh t$. Then clearly:
$$\begin{align}
\int_{0}^{\infty}dp e^{-p\epsilon}\frac{\cos(pr)}{\sqrt{ p^{2}+m^{2} }} & = \int_{0}^{\infty} e^{-m\epsilon\sinh t}m \cosh tdt \frac{\cos(mr\sinh t)}{m\cosh t} \\
 & = \int_{0}^{\infty}dt e^{-m\epsilon \sinh t}\cos(mr\sinh t) \\
\end{align}$$
Here we take $\epsilon\rightarrow 0$. Then:
$$\begin{align}
\lim_{ \epsilon \to 0^{+} }  \int_{0}^{\infty}dpe^{-p\epsilon} \frac{\cos(pr)}{\sqrt{ p^{2}+m^{2} }} & = \int_{0}^{\infty}dt \cos(mr\sinh t) \\
 & = K_{0}(mr) 
\end{align}$$
Then:
$$\begin{align}
\frac{\partial}{\partial r}K_{0}(mr) & = -mK_{1}(mr)
\end{align}$$
Therefore:
$$\begin{align}
D_{W}(x) & = - \frac{i}{2(2\pi)^{2}r}(-2i) \lim_{ \epsilon \to 0^{+} }  \frac{\partial}{\partial r}\int_{0}^{\infty}dp  e^{-p\epsilon} \frac{\cos(pr)}{\sqrt{ p^{2}+m^{2} }}\\  & = - \frac{i}{2(2\pi)^{2}r}(-2i) \frac{\partial}{\partial r}K_{0}(mr)\\

 & = - \frac{i}{2(2\pi)^{2}r}(-2i)(-m)K_{1}(mr) \\
 & = \frac{m}{(2\pi)^{2}r}K_{1}(mr) \\
 & = \frac{m}{4\pi^{2}\sqrt{ -x^{2} }}K_{1}(m\sqrt{ -x^{2} })
\end{align}$$
## (b)

We have:
$$\begin{align}
\bra{0}[\phi(x),\phi(0)]\ket{0}  & = \bra{0} \phi(x)\phi(0)\ket{0} - \bra{0} \phi(0)\phi(x)\ket{0}  \\
 & = D_{W}(x)-D_{W}(-x) \\
 & = \frac{m}{4\pi^{2}\sqrt{ -x^{2} }}K_{1}(m\sqrt{ -x^{2} })- \frac{m}{4\pi^{2}\sqrt{ -x^{2} }}K_{1}(m\sqrt{ -x^{2} }) \\
 & = 0
\end{align}$$
Then the commutator function just gives $D(x)=0$. 

Next we compute the Wightman function:
$$\begin{align}
D_{1}(x) & = \bra{0} \{ \phi(x),\phi(0) \} \ket{0}  \\
 & = D_{W}(x)+D_{W}(-x) \\
 & = \frac{m}{2\pi^{2}\sqrt{ -x^{2} }}K_{1}(m\sqrt{ -x^{2} })
\end{align}$$
Witch back to $-x^{2}=r^{2}$. Take $r\rightarrow \infty$, we have:
$$\begin{align}
D_{1}(r) & \approx \frac{m}{2\pi^{2}r} \sqrt{ \frac{\pi}{2mr} }e^{-mr} \\
 &= \frac{1}{2\sqrt{ 2 }\pi^{3/2} } \sqrt{ m } \frac{e^{-mr}}{r^{3 /2}} 
\end{align}$$
# Problem 4
## (a)

Say $x^{0}> y^{0}$. Then $T(\phi(x)\phi(y))=\phi(x)\phi(y)$. Say $y^{0}>x^{0}$, we get the opposite: $T(\phi(x)\phi(y))=\phi(y)\phi(x)$. Therefore, we have:
$$\begin{align}
T(\phi(x)\phi(y)) & = \theta(x^{0}-y^{0}) \phi(x)\phi(y)+\theta(y^{0}-x^{0})\phi(y)\phi(x)
\end{align}$$
$$\begin{align}
\bra{0} \phi(x)\phi(y)\ket{0}  & = \bra{0} \int \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{2\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} } } (a_{\mathbf{p}}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}e^{ip\cdot x})(a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot y}+a^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot y})\ket{0} \\
 & = \int \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{2\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} }}\bra{0} a_{\mathbf{p}}a^{\dagger}_{\mathbf{p}^{'}}\ket{0} e^{-ip\cdot x}e^{ip^{'}\cdot y} \\ 
\end{align}$$
Since $a_{\mathbf{p}}a^{\dagger}_{\mathbf{p}^{'}}=a^{\dagger}_{\mathbf{p}^{'}}a_{\mathbf{p}}+(2\pi)^{3}\delta(\mathbf{p}-\mathbf{p}^{'})$, and $\bra{0}a^{\dagger}_{\mathbf{p}^{'}}a_{\mathbf{p}}\ket{0}=0$. Then:
$$\begin{align}
\bra{0} \phi(x)\phi(y)\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{-ip\cdot(x-y)}
\end{align}$$
Define this as $D_{W}(x-y)$. By the same manner, $\bra{0}\phi(y)\phi(x)\ket{0}=D_{W}(y-x)$. Then:
$$\begin{align}
\bra{0} T(\phi(x)\phi(y))\ket{0}  & = \theta(x^{0}-y^{0})\bra{0} \phi(x)\phi(y)\ket{0} +\theta(y^{0}-x^{0})\bra{0} \phi(y)\phi(x)\ket{0}  \\
 & = \theta(x^{0}-y^{0})D_{W}(x-y)+\theta(y^{0}-x^{0})D_{W}(y-x)
\end{align}$$
## (b)

We have:
$$\begin{align}
(\Box+m^{2})D_{W}(x-y) & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\partial_{\mu}\partial^{\mu}+m^{2})e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(-p^{2}+m^{2})e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(-E_{\mathbf{p}}^{2}+|\mathbf{p}|^{2}+m^{2})e^{-ip\cdot(x-y)} \\
 & = 0
\end{align}$$
## (c)

We have:
$$\begin{align}
D_{F}(x-y) & = \theta(x^{0}-y^{0})D_{W}(x-y)+ \theta(y^{0}-x^{0})D_{W}(y-x) \\
 & = \theta(x^{0}-y^{0})D_{W}(x-y)+\theta(y^{0}-x^{0})[D_{W}(x-y)- \bra{0} [\phi(x),\phi(y)] \ket{0} ] \\
 & = D_{W}(x-y)-\theta(y^{0}-x^{0})\bra{0} [\phi(x),\phi(y)]\ket{0} 
\end{align}$$
Since $D_{W}(x-y)$ satisfies the homogeneous Klein-Gordon equation, we focus on $-\theta(y^{0}-x^{0})\bra{0}[\phi(x),\phi(y)]\ket{0}$. 

Observe that:
$$\begin{align}
(\Box+m^{2})\bra{0} [\phi(x),\phi(y)]\ket{0}  & = (\Box+m^{2})(D_{W}(x-y)-D_{W}(y-x)) \\
 & = 0
\end{align}$$
Then:
$$\begin{align}
(\Box+m^{2})(\theta(y^{0}-x^{0})\bra{0} [\phi(x),\phi(y)]\ket{0} ) & = \Box( \theta \bra{0} [\phi(x),\phi(y)]\ket{0} ) +m^{2}( \theta \bra{0} [\phi(x),\phi(y)]\ket{0} ) \\
 & = (\Box \theta) \bra{0 } [\phi(x),\phi(y)]\ket{0} + (\partial_{\mu}\theta)\partial^{\mu}\bra{0} [\phi(x),\phi(y)]\ket{0}  \\
  & + \theta \Box\bra{0} [\phi(x),\phi(y)]\ket{0} + m^{2} \theta \bra{0} [\phi(x),\phi(y)]\ket{0}  \\
 & = \partial_{t}\delta(x^{0}-y^{0}) \bra{0 } [\phi(x),\phi(y)]\ket{0} + \delta(x^{0}-y^{0}) \partial_{t}\bra{0} [\phi(x),\phi(y)]\ket{0}  \\
 & = \delta(x^{0}-y^{0})\partial_{t}\bra{0} [\phi(x),\phi(y)]\ket{0} 
\end{align}$$
Here we used the relation $[\phi(x),\phi(y)]=0$ for equal-times commutator. We are allowed to use it because in the second to last line, we $x^{0}=y^{0}$ due to the Dirac delta. We compute:
$$\begin{align}
\partial_{t}\bra{0} [\phi(x),\phi(y)]\ket{0}  & = \bra{0} [\partial_{t}\phi(x),\phi(y)]\ket{0}  \\
 & = \bra{0} [\pi(x),\phi(y)]\ket{0}  \\
\end{align}$$
Since $\delta(x^{0}-y^{0})$ enforces equal time, we evaluate this for equal-times commutator:
$$\begin{align}
\bra{0} [\pi(x),\phi(y)]\ket{0} = -i \delta^{3}(\mathbf{x}-\mathbf{y})
\end{align}$$
Then:
$$\begin{align}
(\Box+m^{2})(\theta(y^{0}-x^{0})\bra{0} [\phi(x),\phi(y)]\ket{0} ) & = \delta(x^{0}-y^{0})(-i)\delta^{3}(\mathbf{x}-\mathbf{y}) \\
 & = -i\delta(x-y)
\end{align}$$
# Problem 5
## (a)

We compute:
$$\begin{align}
[\mathcal{J}^{\mu \nu},\mathcal{J}^{\rho \sigma}]^{\alpha}{}_{\beta} & = (\mathcal{J}^{\mu \nu})^{\alpha}{}_{\gamma}(\mathcal{J}^{\rho \sigma})^{\gamma}{}_{\beta}- (\mathcal{J}^{\rho \sigma})^{\alpha}{}_{\gamma}(\mathcal{J}^{\mu \nu})^{\gamma}{}_{\beta} 
\end{align}$$
We compute:
$$\begin{align}
(\mathcal{J}^{\mu \nu})^{\alpha}{}_{\gamma}(\mathcal{J}^{\rho \sigma})^{\gamma}{}_{\beta} & = (-1)(g^{\mu \alpha}\delta^{\nu}{}_{\gamma}-g^{\nu \alpha}\delta^{\mu}{}_{\gamma})(g^{\rho \gamma}\delta^{\sigma}{}_{\beta}-g^{\sigma \gamma}\delta^{\rho}{}_{\beta} ) \\
 & = (-1)(g^{\mu \alpha}g^{\rho \nu}\delta^{\sigma}{}_{\beta}-g^{\nu \alpha}g^{\rho \mu}\delta^{\sigma}{}_{\beta}-g^{\mu \alpha}g^{\sigma \nu}\delta^{\rho}{}_{\beta}+g^{\nu \alpha}g^{\sigma \mu}\delta^{\rho}{}_{\beta})
\end{align}$$
By replacing $\mu\leftrightarrow \rho,\ \sigma\leftrightarrow \nu$, we obtain:
$$\begin{align}
(\mathcal{J}^{\rho \sigma})^{\alpha}{}_{\gamma}(\mathcal{J}^{\mu \nu})^{\gamma}{}_{\beta} & = (-1)(g^{\rho \alpha}g^{\mu \sigma}\delta^{\nu}{}_{\beta}-g^{\sigma \alpha}g^{\mu \rho}\delta^{\nu}{}_{\beta}-g^{\rho \alpha}g^{\nu \sigma}\delta^{\mu}{}_{\beta}+g^{\sigma \alpha}g^{\nu \rho}\delta^{\rho}{}_{\beta})
\end{align}$$
Then we have:
$$\begin{align}
[\mathcal{J}^{\mu \nu},\mathcal{J}^{\rho \sigma}]^{\alpha}{}_{\beta} & = (-1)(g^{\mu \alpha}g^{\rho \nu}\delta^{\sigma}{}_{\beta}-g^{\nu \alpha}g^{\rho \mu}\delta^{\sigma}{}_{\beta}-g^{\mu \alpha}g^{\sigma \nu}\delta^{\rho}{}_{\beta}+g^{\nu \alpha}g^{\sigma \mu}\delta^{\rho}{}_{\beta}) \\
 & +(g^{\rho \alpha}g^{\mu \sigma}\delta^{\nu}{}_{\beta}-g^{\sigma \alpha}g^{\mu \rho}\delta^{\nu}{}_{\beta}-g^{\rho \alpha}g^{\nu \sigma}\delta^{\mu}{}_{\beta}+g^{\sigma \alpha}g^{\nu \rho}\delta^{\rho}{}_{\beta}) \\
 & = (-1)g^{\rho \nu}(g^{\mu \alpha}\delta^{\sigma}{}_{\beta}-g^{\sigma \alpha}\delta^{\rho}{}_{\beta})+g^{\rho \mu}(g^{\nu \alpha}\delta^{\sigma}{}_{\beta}-g^{\sigma \alpha}\delta^{\nu}{}_{\beta}) \\
 & +g^{\sigma \nu}(g^{\mu \alpha}\delta^{\rho}{}_{\beta}-g^{\rho \alpha}\delta^{\mu}{}_{\beta})-g^{\sigma \mu}(g^{\nu \alpha}\delta^{\rho}{}_{\beta}-g^{\rho \alpha}\delta^{\nu}{}_{\beta}) \\
 & = i g^{\rho \nu}(\mathcal{J}^{\mu \sigma})^{\alpha}{}_{\beta}-i g^{\rho \mu}(\mathcal{J}^{\nu \sigma})^{\alpha}{}_{\beta}-i g^{\sigma \nu}(\mathcal{J}^{\mu \rho})^{\alpha}{}_{\beta}+i g^{\sigma \mu}(\mathcal{J}^{\nu \rho})^{\alpha}{}_{\beta}
\end{align}$$
Therefore, we conclude that:
$$\begin{align}
[\mathcal{J}^{\mu \nu},\mathcal{J}^{\rho \sigma}] & = i(g^{\nu \rho}\mathcal{J}^{\mu \sigma}-g^{\mu \rho}\mathcal{J}^{\nu \sigma}-g^{\nu \sigma}\mathcal{J}^{\mu \rho}+g^{\mu \sigma}\mathcal{J}^{\nu \rho})
\end{align}$$
## (b)

We compute:
$$\begin{align}
[\gamma^{\mu},S^{\rho \sigma}] & = \frac{i}{4}[\gamma^{\mu},[\gamma^{\rho},\gamma^{\sigma}]] \\
 & = \frac{i}{4}[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}-\gamma^{\sigma}\gamma^{\rho}] \\
 & = \frac{i}{4}(\{ \gamma^{\mu},\gamma^{\rho} \}\gamma^{\sigma}-\gamma^{\rho}\{ \gamma^{\mu},\gamma^{\sigma} \}-\{ \gamma^{\mu},\gamma^{\sigma} \}\gamma^{\rho}+\gamma^{\sigma}\{ \gamma^{\mu},\gamma^{\rho} \}) \\
 & = \frac{i}{2}(g^{\mu \rho}\gamma^{\sigma}-\gamma^{\rho}g^{\mu \sigma}-g^{\mu \sigma}\gamma^{\rho}+\gamma^{\sigma }g^{\mu \rho}) \\
 & = i(g^{\rho \mu}\gamma^{\sigma}-g^{\sigma \mu}\gamma^{\rho}) \\
 & = i(g^{\rho \mu}\delta^{\sigma}{}_{\nu}\gamma^{\nu}-g^{\sigma \mu}\delta^{\rho}{}_{\nu}\gamma^{\nu} ) \\
 & = (\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}\gamma^{\nu}
\end{align}$$
## (c)

We compute:
$$\begin{align}
[S^{\mu \nu},S^{\rho \sigma}] & = - \frac{1}{16}\left[[\gamma^{\mu},\gamma^{\nu}],[\gamma^{\rho},\gamma^{\sigma}]\right] \\
 & = - \frac{1}{16}([\gamma^{\mu}\gamma^{\nu},\gamma^{\rho}\gamma^{\sigma}]-[\gamma^{\nu}\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}]-[\gamma^{\mu}\gamma^{\nu},\gamma^{\sigma}\gamma^{\rho}]+[\gamma^{\nu}\gamma^{\mu},\gamma^{\sigma}\gamma^{\rho}])
\end{align}$$
We have:
$$\begin{align}
[\gamma^{\mu}\gamma^{\nu},\gamma^{\rho}\gamma^{\sigma}] & = \gamma^{\mu}[\gamma^{\nu},\gamma^{\rho}\gamma^{\sigma}]+[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}]\gamma^{\nu} \\
 & = \gamma^{\mu}(\{ \gamma^{\nu},\gamma^{\rho} \}\gamma^{\sigma}-\gamma^{\rho}\{ \gamma^{\nu},\gamma^{\sigma} \})+(\{ \gamma^{\mu},\gamma^{\rho} \}\gamma^{\sigma}-\gamma^{\rho}\{ \gamma^{\mu},\gamma^{\sigma} \})\gamma^{\nu} \\
 & = 2(g^{\nu \rho}\gamma^{\mu}\gamma^{\sigma}-g^{\nu \sigma}\gamma^{\mu}\gamma^{\rho}+g^{\mu \rho}\gamma^{\sigma}\gamma^{\nu}-g^{\mu \sigma}\gamma^{\rho}\gamma^{\nu}) \\

\end{align}$$
By replacing $\mu\leftrightarrow \nu$, we obtain:
$$\begin{align}
[\gamma^{\nu}\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}] & = 2(g^{\mu \rho}\gamma^{\nu}\gamma^{\sigma}-g^{\mu \sigma}\gamma^{\nu}\gamma^{\rho}+g^{\nu \rho}\gamma^{\sigma}\gamma^{\mu}-g^{\nu \sigma}\gamma^{\rho}\gamma^{\mu})
\end{align}$$
Then:
$$\begin{align}
[\gamma^{\mu}\gamma^{\nu},\gamma^{\rho},\gamma^{\sigma}]-[\gamma^{\nu}\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}] & = 2g^{\nu \rho}[\gamma^{\nu},\gamma^{\sigma}]-2g^{\nu \sigma}[\gamma^{\mu}\gamma^{\rho}]+2g^{\mu \rho}[\gamma^{\sigma},\gamma^{\nu}]-2g^{\mu \sigma}[\gamma^{\rho},\gamma^{\nu}] \\
 & = \frac{8}{i}(g^{\nu \rho}S^{\nu \sigma}-g^{\nu \sigma}S^{\mu \rho}+g^{\mu \rho}S^{\sigma \nu}-g^{\mu \sigma}S^{\rho \nu})
\end{align}$$
By replacing $\mu\leftrightarrow \nu,\ \sigma\leftrightarrow \rho$, we obtain:
$$\begin{align}
[\gamma^{\nu}\gamma^{\mu},\gamma^{\sigma}\gamma^{\rho}]-[\gamma^{\mu}\gamma^{\nu},\gamma^{\sigma}\gamma^{\rho}] & = \frac{8}{i}(g^{\mu \sigma}S^{\nu \rho}-g^{\mu \rho}S^{\nu \sigma}+g^{\nu \sigma}S^{\rho \mu}-g^{\nu \rho}S^{\sigma \mu})
\end{align}$$
Then recall that $S^{\mu \nu}= \frac{i}{4}[\gamma^{\mu},\gamma^{\nu}]=- \frac{i}{4}[\gamma^{\nu},\gamma^{\mu}]=-S^{\nu \mu}$. We add together the results above:
$$\begin{align}
[S^{\mu \nu},S^{\rho \sigma}] & = - \frac{1}{16} \frac{8}{i}(2g^{\nu \rho}S^{\mu \sigma}-2g^{\nu \sigma}S^{\mu \rho}+2g^{\mu \rho}S^{\sigma \nu}-2g^{\mu \sigma}S^{\rho \nu}) \\
 & = i(g^{\nu \rho}S^{\mu \sigma}-g^{\nu \sigma}S^{\mu \rho}+g^{\mu \rho}S^{\sigma \nu}-g^{\mu \sigma}S^{\rho \nu}) \\
 & = i(g^{\nu \rho}S^{\mu \sigma}-g^{\mu \rho}S^{\nu \sigma}-g^{\nu \sigma}S^{\mu \rho}+g^{\mu \sigma}S^{\nu \rho})
\end{align}$$

