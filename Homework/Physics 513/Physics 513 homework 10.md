# Problem 1
## (a1)

We have:
$$\begin{align}
T\Phi^{i}(x)\Phi^{j}(y)= \theta(x^{0}-y^{0})\Phi^{i}(x)\Phi^{j}(y)+\theta(y^{0}-x^{0})\Phi^{j}(y)\Phi^{i}(x)
\end{align}$$
It suffices to compute:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} 
\end{align}$$
If $i\neq j$, we know that $a^{i}_{\mathbf{p}},a^{j}_{\mathbf{p}}$, $b^{i}_{\mathbf{p}},b^{j}_{\mathbf{p}}$ commute. Then the result is necessarily zero because we can move them around and annihilate them with vacuum. If $i=j$, we have:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} = D_{W}(x-y)
\end{align}$$
Then:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} = \delta^{ij}D_{W}(x-y)
\end{align}$$
Then:
$$\begin{align}
\bra{0} T\Phi^{i}(x)\Phi^{j}(y)\ket{0}  & = \theta(x^{0}-y^{0})\delta^{ij}D_{W}(x-y)+\theta(y^{0}-x^{0})\delta^{ij}D_{W}(y-x) \\
 & = \delta^{ij}D_{F}(x-y)
\end{align}$$
## (a2)

We know that the vertex factor is just the "degeneracy" of each contraction result after multiplying the coefficient. 

It's obvious that $\bra{f} \Phi^{i}\Phi^{j}\Phi^{k}\Phi^{l}\ket{i}$ takes the same value for any permutation of $i,j,k,l$. Take 
$$\mathcal{L}_{\text{int}}=- \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2}$$
as a 4th order polynomial. Then we need to count the coefficient. We know that the coefficient in front of $\Phi^{i}\Phi^{j}\Phi^{k}\Phi^{l}$ is $\frac{\partial^{4}}{\partial \Phi_{i}\partial \Phi_{j}\partial \Phi_{k}\partial \Phi_{l}}\left( - \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2} \right)$. We compute:
$$\begin{align}
\frac{\partial}{\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} & = \frac{\partial}{\partial \Phi^{i}}(\Phi^{n}\Phi^{n}\Phi^{m}\Phi^{m}) \\
 & = 2\Phi^{i}(\Phi^{m})^{2}+ (\Phi^{n})^{2} 2\Phi^{i} \\
 & = 4\Phi^{i}(\Phi^{n})^{2}
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial^{2}}{\partial \Phi^{j}\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} = 4\delta^{ij}(\Phi^{n})^{2}+ 8\Phi^{i}\Phi^{j} \\
\implies &  \frac{\partial^{3}}{\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}= 8\delta^{ij}\Phi^{k}+8\delta^{ki}\Phi^{j}+8\Phi^{i}\delta^{jk} \\
\implies & \frac{\partial^{4}}{\partial \Phi^{l}\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}  = 8\delta^{ij}\delta^{kl}+8\delta^{ik}\delta^{jl}+8\delta^{il}\delta^{jk}
\end{align}$$
Then the vertex factor is:
$$\begin{align}
- \frac{\lambda }{4}i\cdot8(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+ \delta^{il}\delta^{jk})=-2\lambda i(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk})
\end{align}$$
If we take $i=j=k=l$, we get $-6\lambda i$, which is consistent with $\phi^{4}$ theory.
## (a3)

For $\Phi^{1}\Phi^{2}\rightarrow \Phi^{1}\Phi^{2}$, we take $i=1,j=2,k=1,l=2$. Then we get:
$$\begin{align}
i\mathcal{M}=-2\lambda i
\end{align}$$
Then the cross-section is:
$$\begin{align}
 & \frac{d\sigma}{d\Omega}= \frac{1}{64\pi^{2}E^{2}_{\text{CM}}} \frac{|\mathbf{p}_{f}|}{|\mathbf{p}_{i}|}|\mathcal{M} |^{2}
\end{align}$$
In the center of mass frame, we must have:
$$\begin{align}\sqrt{ |\mathbf{p}_{i}|^{2}+m_{1}^{2} }+\sqrt{ |\mathbf{p}_{i} |^{2}+m_{2}^{2} }= \sqrt{ |\mathbf{p}_{f} |^{2}+m_{1}^{2}  }+\sqrt{ |\mathbf{p}_{f}|^{2}+m_{2}^{2} }\implies|\mathbf{p}_{i} |=|\mathbf{p}_{f}|
\end{align}$$
Then:
$$\begin{align}
 &  \frac{d\sigma}{d\Omega}= \frac{1}{64\pi^{2}E^{2}_{\text{CM}}} |\mathcal{M} |^{2} \\
\implies & \sigma= \frac{1}{2} \int d\Omega \frac{1}{64\pi^{2}E^{2}_{\text{CM}} }|\mathcal{M} |^{2} \\ & = \frac{1}{2} 4\pi \frac{1}{64\pi^{2}E^{2}_{\text{CM}}}|\mathcal{M} |^{2} \\
 & = \frac{\lambda^{2}}{8\pi E^{2}_{\text{CM}}}
\end{align}$$
For $\Phi^{1}\Phi^{1}\rightarrow \Phi^{2}\Phi^{2}$, we take $i=j=2,\ k=l=1$. Then we get:
$$\begin{align}
i\mathcal{M}=-2\lambda i
\end{align}$$
Then clearly, we still have:
$$\sigma= \frac{\lambda^{2}}{8\pi E^{2}_{\text{CM}}}$$
For $\Phi^{1}\Phi^{1}\rightarrow \Phi^{1}\Phi^{1}$, we take $i=j=k=l=1$. Then we get:
$$\begin{align}
i\mathcal{M}= -6\lambda i
\end{align}$$
Then clearly, we have:
$$\begin{align}
\sigma= \frac{9\lambda^{2}}{8\pi E^{2}_{\text{CM}}}
\end{align}$$
# (b)

The potential is given by:
$$\begin{align}
V & = \frac{1}{2}m^{2}\Phi^{i}\Phi^{i}+ \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2}
\end{align}$$
Take $\Phi^{i}\Phi^{i}$ as the variable, the minimum is obviously achieved at:
$$\begin{align}\Phi^{i}\Phi^{i}=- \frac{\frac{1}{2}m^{2}}{2 \cdot \frac{\lambda}{4}}=- \frac{m^{2}}{\lambda}= \frac{\mu^{2}}{\lambda}=v^{2}
\end{align}$$
Now we have:
$$\begin{align}
\mathcal{L} & = \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}+ \frac{1}{2} \partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}m^{2}\pi^{i}\pi^{i}- \frac{1}{2}m^{2}(v+\sigma)^{2}- \frac{\lambda}{4}(\pi^{i}\pi^{i}(v+\sigma)^{2})^{2} \\
 & = \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{1}{2}m^{2}\pi^{i}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}- \frac{\lambda}{2}\pi^{i}\pi^{i}(v^{2}+\sigma^{2}+2v\sigma)+  \\
 & \frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}m^{2}(v^{2}+\sigma^{2}+2v\sigma)- \frac{\lambda}{4}(v+\sigma)^{4} \\
 & = \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}+ \frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}m^{2}\sigma^{2}- \frac{3}{2}\lambda v^{2}\sigma^{2}- \frac{\lambda}{4}\sigma^{4}- \frac{1}{2}m^{2}v^{2}-m^{2}v\sigma \\
 & - \frac{\lambda}{4}v^{2}- \lambda v^{3}\sigma-\lambda v\sigma^{3}- \frac{\lambda}{2}\pi^{i}\pi^{i}\sigma^{2}- \lambda v\pi^{i}\pi^{i}\sigma \\
 & =\left[ \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}\right]+ \left[\frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \mu^{2}\sigma^{2}- \frac{\lambda}{4}\sigma^{4}\right]- \frac{1}{2}m^{2}v^{2}-m^{2}v\sigma \\
 & - \frac{\lambda}{4}v^{2}- \lambda v^{3}\sigma-\lambda v\sigma^{3}- \frac{\lambda}{2}\pi^{i}\pi^{i}\sigma^{2}- \lambda v\pi^{i}\pi^{i}\sigma  \\
 & = \left[ \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}\right]+ \left[\frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2} 2\mu^{2}\sigma^{2}- \frac{\lambda}{4}\sigma^{4}\right] \\
 & -\lambda v\sigma^{3}- \frac{\lambda}{2}\pi^{i}\pi^{i}\sigma^{2}- \lambda v\pi^{i}\pi^{i}\sigma+ \frac{1}{4}\mu v^{2}
\end{align}$$
Then obviously, $\pi^{i}$ fields are massless. $\sigma$ field has mass $m_{\sigma}^{2}=2\mu^{2}$. 

We find the interaction lagrangian:
$$\begin{align}
\mathcal{L}_{\text{int}} & = - \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}- \frac{\lambda}{4}\sigma^{4}-\lambda v\sigma^{3}- \frac{1}{2}\pi^{i}\pi^{i}\sigma^{2}-\lambda v\pi^{i}\pi^{i}\sigma
\end{align}$$
Then the $\pi$-field propagator is:
$$\begin{align}
\frac{i\delta^{ij}}{p^{2}+i\epsilon}
\end{align}$$
The $\sigma$-field propagator is:
$$\frac{i}{p^{2}-2\mu^{2}+i\epsilon}$$
The vertex factor associated with $- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}$ interaction is:
$$-2\lambda i(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk})$$
![[a977d970caf868d5b0eb47c9a267b07e.jpg|centering|200]]
We find the vertex factor associated with $- \frac{\lambda}{4}\sigma^{4}$ interaction:
$$\begin{align}
 &  \frac{\partial^{4}}{\partial \sigma^{4}}\sigma^{4}=24 \\
\implies & - \frac{\lambda}{4}i \cdot{24}=-6\lambda i
\end{align}$$
![[dd9b81a791cec0312d8d3864a90cf591.jpg|centering|200]]
We find the vertex factor associated with $-\lambda v\sigma^{3}$:
$$\begin{align}
 & \frac{\partial^{3}}{\partial \sigma^{3}}\sigma^{3}=6 \\
\implies & -\lambda v i \cdot{6}=-6\lambda vi
\end{align}$$
![[e836f139b25fe128f006f86c94ffc7a3.jpg|centering|200]]
We find the vertex factor associated with $- \frac{1}{2}\pi^{i}\pi^{i}\sigma^{2}$:
$$\begin{align}
 & \frac{\partial^{4}}{\partial \pi^{i}\partial \pi^{j}\partial \sigma^{2}} (\pi^{i}\pi^{i}\sigma^{2})=4\delta^{ij} \\
\implies & - \frac{1}{2}i\cdot 4 \delta^{ij}=-2i\delta^{ij}
\end{align}$$
![[7e8d438bd81921a801414463ef969ff7.jpg|centering|200]]
We find the vertex factor associated with $-\lambda v\pi^{i}\pi^{i}\sigma$:
$$\begin{align}
 & \frac{\partial^{3}}{\partial \pi^{i}\partial \pi^{j}\partial \sigma}(\pi^{i}\pi^{i}\sigma)=2\delta^{ij} \\
\implies & -\lambda vi \cdot 2 \delta^{ij}= -2i\lambda v \delta^{ij}
\end{align}$$
![[fa2d6e65e9fa4f55e455ef8fb6606aa6 1.jpg|centering|200]]
# (c)

![[9747f08ddeb607447115a418331a604d.jpg|centering|500]]
We have:
$$\begin{align}
i\mathcal{M} & = (-2i\lambda v\delta^{ij}) \frac{i}{(p_{i}+p_{j})^{2}-2\mu^{2}+i\epsilon} (-2i\lambda v\delta^{kl})+ (-2i\lambda v\delta^{ik}) \frac{i}{(p_{i}-p_{k})^{2}-2\mu^{2}+i\epsilon} (-2i\lambda v\delta^{jl})+(-2i\lambda v\delta^{jk}) \frac{i}{(p_{j}-p_{k})^{2}-2\mu^{2}+i\epsilon} (-2i\lambda v\delta^{il}) \\
 &  -2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta jk) \\
 & = -4\lambda^{2}v^{2}i \left[   \frac{\delta^{ij}\delta^{kl}}{(p_{i}+p_{j})^{2}-2\mu^{2}+i\epsilon}+ \frac{\delta^{ik}\delta^{jl}}{(p_{i}-p_{k})^{2}-2\mu^{2}+i\epsilon}+ \frac{\delta^{jk}\delta^{il}}{(p_{j}-p_{k})^{2}-2\mu^{2}+i\epsilon}  \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{jk}\delta^{il}) \\
 & = 4\lambda^{}m^{2}i \left[   \frac{\delta^{ij}\delta^{kl}}{(p_{i}+p_{j})^{2}-2\mu^{2}+i\epsilon}+ \frac{\delta^{ik}\delta^{jl}}{(p_{i}-p_{k})^{2}-2\mu^{2}+i\epsilon}+ \frac{\delta^{jk}\delta^{il}}{(p_{j}-p_{k})^{2}-2\mu^{2}+i\epsilon}  \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{jk}\delta^{il}) 
\end{align}$$
If we take $p_{i}=p_{j}=p_{k}=p_{l}=0$. Then:
$$\begin{align}
i\mathcal{M} & =  4\lambda^{}m^{2}i \left[   \frac{\delta^{ij}\delta^{kl}}{2m^{2}+i\epsilon}+ \frac{\delta^{ik}\delta^{jl}}{2m^{2}+i\epsilon}+ \frac{\delta^{jk}\delta^{il}}{2m^{2}+i\epsilon}  \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{jk}\delta^{il}) \\
 & = 2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{jk}\delta^{il})-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{jk}\delta^{il}) \\
 & = 0
\end{align}$$

For $N=2$, we take those delta functions to be equal to $1$. Then:
$$\begin{align}
i\mathcal{M} & = 4\lambda m^{2}i\left[  \frac{1}{s^{}-2\mu^{2}+i\epsilon}+ \frac{1}{t^{}-2\mu^{2}+i\epsilon}+ \frac{1}{u^{}-2\mu^{2}+i\epsilon} \right]-6i\lambda \\
 & = 2i\lambda\left[  \frac{2m^{2}}{s-2\mu^{2}+i\epsilon}+ \frac{2m^{2}}{t-2\mu^{2}+i\epsilon}+ \frac{2m^{2}}{u-2\mu^{2}+i\epsilon}-3 \right] \\
 & = 2i\lambda\left[  \frac{2\mu^{2}}{2\mu^{2}-i\epsilon-s}-1+ \frac{2\mu^{2}}{2\mu^{2}-i\epsilon-t}-1+ \frac{2\mu^{2}}{2\mu^{2}-i\epsilon-u}-1 \right]
\end{align}$$
Observe that:
$$\begin{align}
\frac{2\mu^{2}}{2\mu^{2}-i\epsilon-s}-1 & = \frac{2\mu^{2}}{2\mu^{2}\left( 1- \frac{i\epsilon+s}{2\mu^{2}} \right)} -1\\
 & \approx 1+ \frac{i\epsilon+s}{2\mu^{2}}-1 \\
 & = \frac{s}{2\mu^{2}}
\end{align}$$
Then
$$\begin{align}
i\mathcal{M} & = 2i\lambda\left[  \frac{s}{2\mu^{2}}+ \frac{t}{2\mu^{2}}+ \frac{u}{2\mu^{2}} \right] \\
 & = 2i\lambda \frac{4m_{\pi}^{2}}{2\mu^{2}} \\
 & = 0\text{ since }m_{\pi}=0
\end{align}$$
## (d)

Now:
$$\begin{align}
V & = \frac{1}{2}m^{2}\Phi^{i}\Phi^{i}+ \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2}-a\Phi^{N}
\end{align}$$
We have:
$$\begin{align}
 & \frac{\partial V}{\partial \Phi^{j}}= (M^{2}+\lambda \Phi^{i}\Phi^{i})\Phi^{j}=0,\ j=1,\dots,N-1 \\
 & \frac{\partial V}{\partial \Phi^{N}} = (m^{2}+\lambda \Phi^{i}\Phi^{i})\Phi^{N}-a=0
\end{align}$$
Know that $a\neq 0$. Then $m^{2}+\lambda \Phi^{i}\Phi^{i}\neq 0$. Then $\Phi^{j}=0$. Then $v^{2}=\Phi^{i}\Phi^{i}=\Phi^{N}\Phi^{N}$. We take $\Phi^{N}=v$. Then the second equation reduces to:
$$\begin{align}
(m^{2}+\lambda v^{2})v-a=0
\end{align}$$
We know that:
$$\begin{align}
\mathcal{L} & = \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}+ \frac{1}{2} \partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}m^{2}\pi^{i}\pi^{i}- \frac{1}{2}m^{2}(v+\sigma)^{2}- \frac{\lambda}{4}(\pi^{i}\pi^{i}(v+\sigma)^{2})^{2} -a(v+\sigma)\\
 & = \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{1}{2}m^{2}\pi^{i}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}- \frac{\lambda}{2}\pi^{i}\pi^{i}(v^{2}+\sigma^{2}+2v\sigma)+  \\
 & \frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}m^{2}(v^{2}+\sigma^{2}+2v\sigma)- \frac{\lambda}{4}(v+\sigma)^{4}+a(v+\sigma) \\
  & = \left[   \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{1}{2}(m^{2}+\lambda v^{2})\pi^{i}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}  \right]+\left[  \frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}(m^{2}+3\lambda v^{2})\sigma^{2}- \frac{\lambda}{4}\sigma^{4} \right] \\
 & - \frac{\lambda}{2}\pi^{i}\pi^{i}\sigma^{2}- \lambda v \pi^{i}\pi^{i}\sigma-m^{2}v\sigma- \lambda v^{3}\sigma-\lambda v\sigma^{3}+a\sigma- \frac{1}{2}m^{2}v^{2}- \frac{\lambda }{4}v^{4}+av \\
 & = \left[   \frac{1}{2}\partial_{\mu}\pi^{i}\partial^{\mu}\pi^{i}- \frac{1}{2}(m^{2}+\lambda v^{2})\pi^{i}\pi^{i}- \frac{\lambda}{4}(\pi^{i}\pi^{i})^{2}  \right]+\left[  \frac{1}{2}\partial_{\mu}\sigma \partial^{\mu}\sigma- \frac{1}{2}(m^{2}+3\lambda v^{2})\sigma^{2}- \frac{\lambda}{4}\sigma^{4} \right] \\
 & - \frac{\lambda}{2}\pi^{i}\pi^{i}\sigma^{2}- \lambda v \pi^{i}\pi^{i}\sigma-\lambda v\sigma^{3}- \frac{1}{2}m^{2}v^{2}- \frac{\lambda }{4}v^{4}+av 
\end{align}$$
Clearly, the masses are:
$$\begin{align}
m_{\pi}^{2}=m^{2}+\lambda v^{2},\ m_{\sigma}^{2}= m^{2}+3\lambda v^{2}
\end{align}$$
Know that $a\neq 0$. Then $m^{2}+\lambda v^{2}=m_{\pi}^{2}\neq 0$. Pions are massive.

Observe that:
$$\begin{align}
m_{\pi}^{2} & = m^{2}+\lambda v^{2}= \frac{a}{v} \\
m_{\sigma}^{2} & = m^{2}+3\lambda v^{2}= -2m^{2}+ \frac{3a}{v} \\
\lambda v & =  \frac{a}{v^{2}}- \frac{m^{2}}{\lambda} \\
\lambda & = \frac{a}{v^{3}}- \frac{m^{2}}{\lambda v}
\end{align}$$
So the relevant terms $\sim \mathcal{O}(a)$ are:
$$\begin{align}
 - \frac{1}{4} \frac{a}{v^{3}}(\pi^{i}\pi^{i})^{2} - \frac{1}{2} \frac{a}{v}\pi^{i}\pi^{i}- \frac{1}{2} \frac{3a}{v}\sigma^{2}- \frac{a}{v^{2}}\pi^{i}\pi^{i}\sigma- \frac{a}{v^{2}}\sigma^{3}
\end{align}$$


