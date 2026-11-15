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

Then we have:
$$\begin{align}
i\mathcal{M} & = -4\lambda^{2}v^{2}i\left[  \frac{\delta^{ij}\delta^{kl}}{s-m^{2}_{\sigma}}+ \frac{\delta^{ik}\delta^{jl}}{t-m^{2}_{\sigma} }+ \frac{\delta^{il}\delta^{jk}}{u-m_{\sigma}^{2}} \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk}) \\
 & = -4\lambda^{2}v^{2}i\left[  \frac{\delta^{ij}\delta^{kl}}{4m^{2}_{\pi}-m^{2}_{\sigma}}- \frac{\delta^{ik}\delta^{jl}}{m^{2}_{\sigma}}- \frac{\delta^{il}\delta^{jk}}{m^{2}_{\sigma}}   \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk}) 
\end{align}$$
Know that:
$$\begin{align}
m_{\sigma}^{2}= 2\lambda v^{2}+ m^{2}+\lambda v^{2}= 2\lambda v^{2}+m^{2}_{\pi}
\end{align}$$
Then:
$$\begin{align}
i\mathcal{M} & = -2\lambda^{}i\left[  \frac{m^{2}_{\sigma}-m^{2}_{\pi}}{4m^{2}_{\pi}-m^{2}_{\sigma}}\delta^{ij}\delta^{kl}- \frac{m^{2}_{\sigma}-m^{2}_{\pi}}{m^{2}_{\sigma}} \delta^{ik}\delta^{jl}- \frac{m^{2}_{\sigma}-m^{2}_{\pi}}{m^{2}_{\sigma}}\delta^{il}\delta^{jk} \right]-2i\lambda(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk})  \\
 & = -2\lambda i\left[   \frac{3m^{2}_{\pi}}{4m^{2}_{\pi}-m^{2}_{\sigma}} \delta^{ij}\delta^{kl}+ \frac{m^{2}_{\pi}}{m^{2}_{\sigma}}\delta^{ik}\delta^{jl}+ \frac{m^{2}_{\pi}}{m^{2}_{\sigma}}\delta^{il}\delta^{jk} \right] \\
 & = -2\lambda m^{2}_{\pi}i\left[   \frac{3}{4m^{2}_{\pi}-m^{2}_{\sigma}} \delta^{ij}\delta^{kl}+ \frac{1}{m^{2}_{\sigma}}\delta^{ik}\delta^{jl}+ \frac{1}{m^{2}_{\sigma}}\delta^{il}\delta^{jk} \right]
\end{align}$$
Observe that:
$$\begin{align}
m_{\pi}^{2} & = m^{2}+\lambda v^{2}= \frac{a}{v} \\
m_{\sigma}^{2} & = m^{2}+3\lambda v^{2}= -2m^{2}+ \frac{3a}{v} \\

\end{align}$$
So:
$$\begin{align}
i\mathcal{M} & \approx -2\lambda  \frac{a}{v}i\left[  \frac{3}{2m^{2}}\delta^{ij}\delta^{kl}- \frac{1}{2m^{2}}\delta^{ik}\delta^{jl}- \frac{1}{2m^{2}}\delta^{il}\delta^{jk}  \right]
\end{align}$$
We know that $a$ is small, so the solution of $v$ could be approximated by:
$$\begin{align}
 & v(m^{2}+\lambda v^{2})=a \\
\implies & m^{2}+\lambda v^{2}\approx 0 \\
\implies & v\approx \sqrt{ \frac{\mu^{2}}{\lambda} }
\end{align}$$
Then:
$$\begin{align}
i\mathcal{M} & \approx - 2 a^{2} \frac{\lambda^{3/2}}{\mu^{}}i\left[  \frac{3}{2m^{2}}\delta^{ij}\delta^{kl}- \frac{1}{2m^{2}}\delta^{ik}\delta^{jl}- \frac{1}{2m^{2}}\delta^{il}\delta^{jk}  \right] \\
 & = ia \frac{\lambda^{3 /2}}{\mu^{3}}(3\delta^{ij}\delta^{kl}- \delta^{ik}\delta^{jl}-\delta^{il}\delta^{jk})
\end{align}$$
# Problem 2
## (a)

We have that:
$$\begin{align}
\bra{p^{'}} \bar{\psi}\gamma^{\mu}\psi \ket{p}  & =  e^{-i(p-p^{'})\cdot x}\bar{u}(p^{'})\gamma^{\mu}u(p)
\end{align}$$
Then to the first order, we have:
$$\begin{align}
\bra{p^{'}} iT \ket{p}  & = -ie\int d^{4}xA_{\mu}e^{-i(p-p^{'})\cdot x}\bar{u}(p^{'})\gamma^{\mu}u(p) \\
 & = -ie \bar{u}(p^{'})\gamma^{\mu}u(p)\tilde{A}_{\mu}(p^{'}-p),\ \tilde{A}_{\mu}(q)=\int d^{4}x e^{iq\cdot x}A_{\mu}(x)
\end{align}$$
## (b1)

We first assume an incoming wave:
$$\begin{align}
\int \frac{d^{3}p}{(2\pi)^{3}}A(\mathbf{p}) a^{\dagger}_{\mathbf{p}}\ket{0} = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}A(\mathbf{p})\ket{\mathbf{p}} 
\end{align}$$
Then if we displace this wave along the collision plane by the collision parameter $\mathbf{b}$, we get the incoming wave:
$$\begin{align}
\ket{i}  & = e^{-i\mathbf{b}\cdot \mathbf{p}} \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}A(\mathbf{p})\ket{\mathbf{p}}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}A(\mathbf{p})e^{-i\mathbf{b}\cdot \mathbf{p}}\ket{\mathbf{p}} 
\end{align}$$
The probability that this wave scattered into the state $\ket{\mathbf{k}}$ is:
$$ \begin{align}
\frac{d^{3}k}{(2\pi)^{3}} \left|  \frac{1}{\sqrt{ 2E_{\mathbf{k}} }}\bra{\mathbf{k}} iT\ket{i}    \right|^{2}= \frac{d^{3}k}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{k}}}|\bra{\mathbf{k}} iT\ket{i}  |^{2}
\end{align} $$
Then the infinitesimal cross-section is:
$$\begin{align}
d\sigma & = \int d^{2}b \frac{d^{3}k}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{k}}}|\bra{\mathbf{k}} iT\ket{i}  |^{2} \\
 & = \frac{d^{3}k}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{k}}} \int d^{2}b\int  \frac{d^{3}p_{1}}{(2\pi)^{3} } \frac{d^{3}p_{2}}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }} \bra{\mathbf{k}} iT\ket{\mathbf{p}_{1}} \bra{\mathbf{p}_{2}} (iT)^{\dagger}\ket{\mathbf{k}} A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})e^{-i(\mathbf{p}_{1}-\mathbf{p}_{2})\cdot \mathbf{b}} 
\end{align}$$
We first decompose $\mathbf{p}_{i}=\mathbf{p}_{i}^{\perp}+\mathbf{p}_{i}^{\parallel}$, where $\mathbf{p}^{\perp}_{i}$ is the component perpendicular to the axis. Then:
$$\begin{align}
\int d^{2}b e^{-i(\mathbf{p}_{1}-\mathbf{p}_{2})\cdot \mathbf{b}} & = \int d^{2}b e^{-i(\mathbf{p}^{\perp}_{1}-\mathbf{p}^{\perp}_{2})\cdot \mathbf{b}} \\
 & = (2\pi)^{2} \delta(\mathbf{p}^{\perp}_{1}-\mathbf{p}^{\perp}_{2})
\end{align}$$
Then:
$$\begin{align}
 & \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{d^{3}p_{2}}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }} \bra{\mathbf{k}} iT \ket{\mathbf{p}_{1}} \bra{\mathbf{p}_{2}} (iT)^{\dagger}\ket{\mathbf{k}} A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})(2\pi)^{2}\delta(\mathbf{p}^{\perp}_{1}-\mathbf{p}^{\perp}_{2}) \\
  =  & \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{dp_{2}^{\parallel}}{(2\pi)^{3}}(2\pi)^{2} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }}\bra{\mathbf{k}} iT \ket{\mathbf{p }_{1}}\bra{\mathbf{p}_{2}} (iT)^{\dagger}\ket{\mathbf{k}} A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})\text{ with }\mathbf{p}_{1} ^{\perp}=\mathbf{p}_{2}^{\perp} \\
 = & \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{dp_{2}^{\parallel}}{(2\pi)^{3}}(2\pi)^{2} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }}(2\pi)i\mathcal{M}(p_{1}\rightarrow k)\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}})(2\pi)(-i)\mathcal{M}(p_{2}\rightarrow k) \delta(E_{\mathbf{k}}-E_{\mathbf{p}_{2}}) A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2}) \\
 = &  \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{dp_{2}^{\parallel}}{(2\pi)^{3}}(2\pi)^{4} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }}\mathcal{M}\mathcal{M}^{*}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}})A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})\left[  \frac{\delta(p_{2}^{\parallel}-p_{1}^{\parallel})}{p_{1}^{\parallel} / E_{\mathbf{k}}}+ \frac{\delta(p_{2}^{\parallel}+p_{1}^{\parallel})}{-p_{1}^{\parallel} / E_{\mathbf{k}}}  \right]
\end{align}$$
Assume that $A(\mathbf{p})$ is strongly peaked around $\mathbf{p}_{i}$. Then:
$$\begin{align}
 & \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{dp_{2}^{\parallel}}{(2\pi)^{3}}(2\pi)^{4} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }}\mathcal{M}\mathcal{M}^{*}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}})A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})\left[  \frac{\delta(p_{2}^{\parallel}-p_{1}^{\parallel})}{p_{1}^{\parallel} / E_{\mathbf{k}}}+ \frac{\delta(p_{2}^{\parallel}+p_{1}^{\parallel})}{-p_{1}^{\parallel} / E_{\mathbf{k}}}  \right] \\
 = &  \int \frac{d^{3}p_{1}}{(2\pi)^{3}} \frac{dp_{2}^{\parallel}}{(2\pi)^{3}}(2\pi)^{4} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{1}} }} \frac{1}{\sqrt{ 2E_{\mathbf{p}_{2}} }}\mathcal{M}\mathcal{M}^{*}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}})A(\mathbf{p}_{1})A^{*}(\mathbf{p}_{2})  \frac{\delta(p_{2}^{\parallel}-p_{1}^{\parallel})}{p_{1}^{\parallel} / E_{\mathbf{k}}}  \\
 = &  \int \frac{d^{3}p_{1}}{(2\pi)^{3}} (2\pi) \frac{1}{ 2E_{\mathbf{p}_{1}} }|\mathcal{M} |^{2} |A(\mathbf{p}_{1})|^{2} \frac{1}{v_{1}^{\parallel}}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}})
\end{align}$$
Then also because that $A(\mathbf{p})$ is strongly peaked, we have:
$$\begin{align}
 & \int \frac{d^{3}p_{1}}{(2\pi)^{3}} (2\pi) \frac{1}{ 2E_{\mathbf{p}_{1}} }|\mathcal{M} |^{2} |A(\mathbf{p}_{1})|^{2} \frac{1}{v_{1}^{\parallel}}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{1}}) \\
\approx & 2\pi \frac{1}{2E_{\mathbf{p}_{i}}} |\mathcal{M}(p_{i}\rightarrow k) |^{2} \frac{1}{v_{i}^{\parallel}}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{i}}) \int \frac{d^{3}p_{1}}{(2\pi)^{3}}|A(\mathbf{p}_{1})|^{2} 
\end{align}$$
The normalization of $A$ is obtained by setting:
$$\begin{align}
 & \left(\int \frac{d^{3}p^{'}}{(2\pi)^{3}}A(\mathbf{p}^{'}) a^{\dagger}_{\mathbf{p}^{'}}\ket{0}\right)^{\dagger}\left(\int \frac{d^{3}p}{(2\pi)^{3}}A(\mathbf{p}) a^{\dagger}_{\mathbf{p}}\ket{0}\right)^{}=1 \\
\implies & \int \frac{d^{3}p^{'}}{(2\pi)^{3}} \frac{d^{3}p}{(2\pi)^{3}}A^{*}(\mathbf{p}^{'})A(\mathbf{p}) \bra{0} a_{\mathbf{p}^{'}}a_{\mathbf{p}}^{\dagger}\ket{0} =1 \\
\implies & \int \frac{d^{3}p}{(2\pi)^{3}}|A(\mathbf{p}) |^{2}=1
\end{align}$$
Then:
$$\begin{align}
 & 2\pi \frac{1}{2E_{\mathbf{p}_{i}}} |\mathcal{M}(p_{i}\rightarrow k) |^{2} \frac{1}{v_{i}^{\parallel}} \delta(E_{\mathbf{k}}-E_{\mathbf{p}_{i}}) \int \frac{d^{3}p_{1}}{(2\pi)^{3}}|A(\mathbf{p}_{1})|^{2} \\
= &  2\pi \frac{1}{2E_{\mathbf{p}_{i}}} |\mathcal{M} |^{2} \frac{1}{v^{\parallel}_{i}} \delta(E_{\mathbf{k}}-E_{\mathbf{p}_{i}})\\
 = & 2\pi \frac{1}{2E_{\mathbf{p}_{i}}}|\mathcal{M}|^{2} \frac{1}{v_{i}}\delta(E_{\mathbf{k}}-E_{\mathbf{p}_{i}})
\end{align}$$
This is because we assume incoming $\mathbf{v}_{i}$ is parallel to the axis. Then:
$$\begin{align}
d\sigma & = \frac{d^{3}k}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{k}}} 2\pi \frac{1}{2E_{\mathbf{p}_{i}}} |\mathcal{M}|^{2} \frac{1}{v_{i}} \delta(E_{\mathbf{k}}-E_{\mathbf{p}_{i}})\\
 & = \frac{1}{v_{i}} \frac{1}{2E_{i}} \frac{d^{3}p_{f}}{(2\pi)^{3}} \frac{1}{2E_{f}}|\mathcal{M}|^{2} 2\pi\delta(E_{f}-E_{i})
\end{align}$$
In the last line, we switch to the notation in the problem, and rearrange the terms. 
## (b2)

We integrate:
$$\begin{align}
 & \sigma= \frac{1}{v_{i}} \frac{1}{2E_{i}} \int \frac{d\Omega dp_{f}p^{2}_{f}}{(2\pi)^{3}} \frac{1}{2E_{f}} |\mathcal{M} |^{2}2\pi\delta(E_{f}-E_{i}) \\
\implies &  \frac{d\sigma}{d\Omega}= \frac{1}{v_{i}} \frac{1}{2E_{i}} \int_{0}^{\infty} \frac{dp_{f}}{(2\pi)^{3}}p^{2}_{f} \frac{1}{2E_{f}}|\mathcal{M} |^{2}2\pi\delta(E_{f}-E_{i}) \\
 & \phantom{www}= \frac{1}{v_{i}} \frac{1}{2E_{i}} \int_{0}^{\infty} \frac{dp_{f}}{(2\pi)^{3}}  \frac{p^{2}_{f}}{2E_{f}}|\mathcal{M}|^{2}   \frac{\delta(|\mathbf{p}_{f}|=|\mathbf{p}_{i}|)}{|\mathbf{p}_{i} | /E_{i}}2\pi \\
 & \phantom{www}= \frac{1}{v_{i}} \frac{|\mathbf{p}_{i}|}{2E_{i}} \frac{1}{2(2\pi)^{3}} |\mathcal{M}|^{2}    2\pi \\
 & \phantom{www}= \frac{1}{16\pi^{2}}|\mathcal{M}|^{2}
\end{align}$$
## (c)

We have the Fourier transform:
$$\begin{align}
\tilde{A}_{0} & = \int d^{3}r e^{i\mathbf{q}\cdot \mathbf{r}} \frac{Ze}{4\pi r}e^{-\epsilon r}
\end{align}$$
The $e^{-\epsilon r}$ is just for convergence. We compute:
$$\begin{align}
\int d^{3}r e^{i\mathbf{q}\cdot \mathbf{r}} \frac{e^{-\epsilon r}}{r} & = 2\pi \int r^{2} \sin \theta dr d\theta e^{iqr\cos \theta} \frac{e^{-\epsilon r}}{r} \\
 & = (-2\pi) \int dr \frac{1}{iqr}(e^{-iqr}-e^{iqr}) \frac{e^{-\epsilon r}}{r} \\
 & = \frac{2\pi}{iq}\int dr (e^{iqr}-e^{-iqr})e^{-\epsilon r} \\
 & = \frac{2\pi}{iq}\left(  \frac{-1}{iq-\epsilon}- \frac{1}{iq+\epsilon} \right) \\
 & = \frac{2\pi}{iq} \frac{-2}{iq}\text{ if we take }\epsilon\rightarrow 0 \\
 & = \frac{4\pi}{q^{2}}
\end{align}$$
Then:
$$\begin{align}
\tilde{A}_{0}(\mathbf{q})= \frac{Ze}{|\mathbf{q}|^{2}}
\end{align}$$
We compute:
$$\begin{align}
\bra{\mathbf{p}_{f}}iT \ket{\mathbf{p}_{i}}  & = -ie \bar{u}(p_{f})\gamma^{\mu}u(p_{i})\tilde{A}_{\mu}(p_{f}-p_{i}) \\
 & = -ie \bar{u}\gamma^{0 }u\tilde{A}_{0} \\
 & = -ie u^{\dagger}u\tilde{A}_{0}  
\end{align}$$
Know that:
$$\begin{align}
u^{\dagger}(p_{f})u(p_{i}) & = \begin{pmatrix}
\xi ^{\dagger} \sqrt{ p_{f}\cdot \sigma } & \xi ^{\dagger}\sqrt{ p_{f}\cdot \bar{\sigma} }
\end{pmatrix} \begin{pmatrix}
 \sqrt{ p_{i}\cdot \sigma }\xi \\
\sqrt{ p_{i}\cdot \bar{\sigma} }\xi
\end{pmatrix} \\
 & = \xi ^{\dagger}(\sqrt{ p_{f}\cdot \sigma }\sqrt{ p_{i}\cdot \sigma }+\sqrt{ p_{f}\cdot \bar{\sigma} }\sqrt{ p_{i}\cdot \bar{\sigma} })\xi
\end{align}$$
Under non-relativistic limit, we choose the spatial axis to be align with the third direction, we study (keep to $\mathcal{O}\left(  \frac{|\mathbf{p}|^{2}}{m^{2}} \right)$):
$$\begin{align}
\sqrt{ q\cdot \sigma } & = \sqrt{ E-\mathbf{q}\cdot \boldsymbol{\sigma} } \\
  & = \sqrt{ \begin{pmatrix}
E-q^{3} & 0 \\0 & E+q^{3}
\end{pmatrix} } \\
 & = \begin{pmatrix}
\sqrt{ E-q^{3} } & 0 \\
0 & \sqrt{ E+q^{3} }
\end{pmatrix} \\
\sqrt{ E\pm q^{3} } & = \sqrt{ \sqrt{ |\mathbf{q}|^{2}+m^{2} }\pm q^{3} } \\
 & \approx \sqrt{  m+ \frac{|\mathbf{q}|^{2}}{2m}\pm q^{3} } \\
 & = \sqrt{ m }\sqrt{ 1+ \frac{|\mathbf{q}|^{2}}{2m^{2}}\pm \frac{q^{3}}{m} }  \\
 & \approx \sqrt{ m }\left( 1+ \frac{|\mathbf{q}|^{2}}{4m^{2}}\pm \frac{q^{3}}{2m}- \frac{1}{8}\left(  \frac{|\mathbf{q}|^{2}}{2m^{2}}\pm \frac{q^{3}}{m} \right)^{2} \right) \\
 & \approx \sqrt{ m }\left( 1+ \frac{|\mathbf{q}|^{2}}{8m^{2}}\pm \frac{q^{3}}{2m} \right)\\
\implies \sqrt{ q\cdot \sigma } & = \sqrt{ m }\left( 1+ \frac{|\mathbf{q}|^{2}}{8m^{2}} \right) - \frac{q^{3}}{2\sqrt{ m }}\sigma^{3} \\
 & = \sqrt{ m }\left( 1+ \frac{|\mathbf{q}|^{2}}{8m^{2}} - \frac{1}{2m}\mathbf{q}\cdot \boldsymbol{\sigma}\right)
\end{align}$$
Therefore if $\frac{|\mathbf{p}|}{m}\ll 1$:
$$\begin{align}
\sqrt{ p_{f} \cdot\sigma} \sqrt{ p_{i}\cdot \sigma }+ \sqrt{ p_{f}\cdot \bar{\sigma} }\sqrt{ p_{i}\cdot \bar{\sigma} } & = m\left( 1+ \frac{|\mathbf{p}_{f}|^{2}}{8m^{2}}- \frac{\mathbf{p}_{f}\cdot \boldsymbol{\sigma}}{2m} \right)\left( 1+ \frac{|\mathbf{p}_{i}|^{2}}{8m^{2}}- \frac{\mathbf{p}_{i}\cdot \boldsymbol{\sigma}}{2m} \right)+ (\sigma \leftrightarrow -\sigma) \\
 & = m\left( 1+ \frac{|\mathbf{p}_{f}|^{2}}{8m^{2}}+ \frac{|\mathbf{p}_{i}|^{2}}{8m^{2}}- \frac{\mathbf{p}_{f}\cdot \sigma}{2m}- \frac{\mathbf{p}_{i}\cdot \boldsymbol{\sigma}}{2m}+ \frac{(\mathbf{p}_{f}\cdot\sigma)(\mathbf{p}_{i}\cdot \boldsymbol{\sigma})}{4m^{2}} \right)+(\sigma\leftrightarrow -\sigma) \\
 & = m\left( 2+ \frac{|\mathbf{p}_{f}|^{2}}{4m^{2}}+ \frac{|\mathbf{p}_{i}|^{2}}{4m^{2}}+ \frac{(\mathbf{p}_{f}\cdot \boldsymbol{\sigma})(\mathbf{p}_{i}\cdot \boldsymbol{\sigma})}{2m^{2}} \right) \\
 & \approx 2m
\end{align}$$
Then:
$$\begin{align}
u^{\dagger}(p_{f})u(p_{i}) & \approx 2m \xi ^{\dagger} \xi \\
 & =2m \delta^{s r}\text{ where }s,r\text{ are spins for }i,f
\end{align}$$
Then:
$$\begin{align}
\bra{p_{f},r} iT \ket{p_{i},s} \approx -ie 2m\delta^{s r} \frac{Ze}{|\mathbf{p}_{f}-\mathbf{p}_{i} |^{2}} 2\pi \delta(E_{f}-E_{i})
\end{align}$$
where the extra $2\pi\delta(E_{f}-E_{i})$ comes from the temporal Fourier transformation. Remember that we only did spatial part at the beginning. Since $A$ does not depend on time, the temporal part just gives $2\pi\delta$. Then:
$$\begin{align}
|\mathcal{M}|^{2} & = 4m^{2}\delta^{s r} \frac{Z^{2}e^{4}}{|\mathbf{p}_{f}-\mathbf{p}_{i}|^{4}} \\
 & = 4m^{2} \delta^{s r} \frac{Z^{2}e^{4}}{(2mv \sin \theta /2)^{4}} \\
 & = \delta^{s r} \frac{Z^{2}e^{4}}{4m^{2}v^{4} \sin ^{4} \frac{\theta}{2}}
\end{align}$$
Then:
$$\begin{align}
\frac{d\sigma}{d\Omega} & = \frac{1}{16\pi^{2}}|\mathcal{M}|^{2} \\
 & = \delta^{s r} \frac{Z^{2}\alpha^{2}}{4m^{2}v^{4} \sin ^{4} \frac{\theta}{2}}
\end{align}$$
If we are completely in classical, we don't have spins. We can just remove the $\delta^{s r}$ in the front, and write:
$$\begin{align}
 \frac{d\sigma}{d\Omega}= \frac{Z^{2}\alpha^{2}}{4m^{2}v^{4}\sin ^{4} \frac{\theta}{2}}
\end{align}$$
# Problem 3
## (a)

Know that:
$$\begin{align}
\bra{\mathbf{p}^{'}}iT \ket{p} & = -ie \bar{u}(p^{'})\gamma^{\mu}u(p)\tilde{A}_{\mu}(p^{'}-p) \\
 & = -ie \bar{u}(p^{'})\gamma^{0}u(0)\tilde{A}_{0}(p^{'}-p) 2\pi\delta(E_{\mathbf{p}^{'}}-E_{\mathbf{p}}) \\
\end{align}$$
Then clearly:
$$\begin{align}
i\mathcal{M} & = -ie \bar{u}^{s ^{'}}(p^{'})\gamma^{0}u^{s}(p)\tilde{A}_{0}(\mathbf{q}),\ \mathbf{q}=\mathbf{p}^{'}-\mathbf{p}
\end{align}$$
where:
$$\begin{align}
\tilde{A}_{0}(\mathbf{q}) & = \frac{Ze}{|\mathbf{q}|^{2}} \\
 & = \frac{Ze}{4|\mathbf{p}|^{2}\sin ^{2} \frac{\theta}{2}}
\end{align}$$
## (b)

We have:
$$\begin{align}
\sum_{s,r}\left| \bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p) \right| & = \sum_{s,r}(\bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p))(\bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p))^{*} \\
 & = \sum_{s,r} (\bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p))(\bar{u}^{r}(p)\gamma^{0}u^{s}(p^{'})) \\
 & = \sum_{s}\bar{u}^{s}(p^{'})\gamma^{0}\sum_{r}u^{r}(p)\bar{u}^{r}(p)\gamma^{0}u^{s}(p^{'}) \\
  & = \sum_{s}\bar{u}^{s}(p^{'})\gamma^{0}(\rlap{/}p+m)\gamma^{0}u^{s}(p^{'}) \\
 & = \sum_{s}\bar{u}^{s}_{a}A_{ab}u_{b}^{s},\ A=\gamma^{0}(\rlap{/}p+m)\gamma^{0} \\
 & = A_{ab} \sum_{s}\bar{u}^{s}_{a}u^{s}_{b} \\
 & = A_{ab}(\rlap{/}p^{'}+m)_{ba} \\
 & =\text{Tr}( \gamma^{0}(\rlap{/}p+m)\gamma^{0}(\rlap{/}p^{'}+m)) \\
 & = \text{Tr}(\gamma^{0}\rlap{/}p\gamma^{0}\rlap{/}p^{'})+\text{Tr}(m\rlap{/}p^{'})+\text{Tr}(m^{2})+\text{Tr}(\gamma^{0}\rlap{/}p\gamma^{0}m)
\end{align}$$
We claim that the trace of an odd number of gamma matrices multiplied together is zero. Here is the proof. Take:
$$\begin{align}
\text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}}) & = \text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}}\gamma^{5}\gamma^{5}) \\
 & = \text{Tr}(\gamma^{5}\gamma^{r_{1}}\dots \gamma^{r_{n}}\gamma^{5}) \\
 & = (-1)^{^{n}}\text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}}\gamma^{5}\gamma^{5}) \\
 & = (-1)^{n}\text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}}) \\
 & = -\text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}})\text{ for }n\text{ odd} \\
\implies\text{Tr}(\gamma^{r_{1}}\dots \gamma^{r_{n}}) & =0
\end{align}$$
Therefore:
$$\begin{align}
\sum_{s,r}\left| \bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p) \right| & = \text{Tr}(\gamma^{0}\rlap{/}p\gamma^{0}\rlap{/}p^{'})+\text{Tr}(m^{2}) \\
 & = \text{Tr}(\gamma^{0}\rlap{/}p\gamma^{0}\rlap{/}p^{'})+ 4m^{2}
\end{align}$$
In order to compute the first term, we claim that:

>[!Success] Claim
>$$\text{Tr}(\gamma^{\mu}\gamma^{\nu}\gamma^{\rho}\gamma^{\sigma})=4(g^{\mu \nu}g^{\rho \sigma}-g^{\mu \rho}g^{\nu \sigma}+g^{\nu \rho}g^{\mu \sigma})$$
## Proof of claim

Know that:
$$\begin{align}
\text{Tr}(\gamma^{\mu}\gamma^{\nu}) & = \frac{1}{2}(\text{Tr}(\gamma^{\mu}\gamma^{\nu})+\text{Tr}(\gamma^{\nu}\gamma^{\mu}) ) \\
 & = \frac{1}{2}\text{Tr}\{ \gamma^{\mu},\gamma^{\nu} \} \\
 & = 4g^{\mu \nu}
\end{align}$$
Then:
$$\begin{align}
\text{Tr}(\gamma^{\mu}\gamma^{\nu}\gamma^{\rho}\gamma^{\sigma}) & = \text{Tr}((2g^{\mu \nu}-\gamma^{\nu}\gamma^{\mu})\gamma^{\rho}\gamma^{\sigma}) \\
 & = 2g^{\mu \nu}\text{Tr}(\gamma^{\rho}\gamma^{\sigma})-\text{Tr}(\gamma^{\nu}\gamma^{\mu}\gamma^{\rho}\gamma^{\sigma}) \\
 & = 8g^{\mu \nu}g^{\rho \sigma}-\text{Tr}(\gamma^{\nu}(2g^{\mu \rho}-\gamma^{\rho}\gamma^{\mu})\gamma^{\sigma}) \\
 & = 8g^{\mu \nu}g^{\rho \sigma}-8g^{\mu \rho}g^{\nu \sigma}+\text{Tr}(\gamma^{\nu}\gamma^{\rho}\gamma^{\mu}\gamma^{\sigma}) \\
 & = 8g^{\mu \nu}g^{\rho \sigma}-8g^{\mu \rho}g^{\nu \sigma}+\text{Tr}(\gamma^{\nu}\gamma^{\rho}(2g^{\mu \sigma}-\gamma^{\sigma}\gamma^{\mu})) \\
 & = 84(g^{\mu \nu}g^{\rho \sigma}-g^{\mu \rho}g^{\nu \sigma}+g^{\nu \rho}g^{\mu \sigma})-\text{Tr}(\gamma^{\nu}\gamma^{\rho}\gamma^{\sigma}\gamma^{\mu}) \\
\implies\text{Tr}(\gamma^{\mu}\gamma^{\nu}\gamma^{\rho}\gamma^{\sigma}) & =4(g^{\mu \nu}g^{\rho \sigma}-g^{\mu \rho}g^{\nu \sigma}+g^{\nu \rho}g^{\mu \sigma})
\end{align}$$
>[!Right]
>$\blacksquare$

Then:
$$\begin{align}
\text{Tr}(\gamma^{0}\rlap{/}p\gamma^{0}\rlap{/}p^{'}) & = p_{\mu}p^{'}_{\nu}4(g^{0\mu}g^{0\nu}-g^{00}g^{\mu \nu}+g^{\mu{0}}g^{0\nu}) \\
 & = p_{\mu}p^{'}_{\nu}4(2g^{0\mu}g^{0\nu}-g^{00}g^{\mu \nu}) \\
 & = 4(2p^{0}p^{' 0}-p\cdot p^{'}) \\
 & = 4(p^{0}p^{' 0}+\mathbf{p}\cdot \mathbf{p}^{'}) \\
 & = 4(E^{2}+\mathbf{p}\cdot \mathbf{p}^{'})
\end{align}$$
Then:
$$\begin{align}
\frac{1}{2}\sum_{s,r}\left| \bar{u}^{s}(p^{'})\gamma^{0}u^{r}(p)  \right|^{2} & = \frac{1}{2}(4E^{2}+4\mathbf{p}\cdot \mathbf{p}^{'}+4m^{2}) \\
 & = 2(E^{2}+|\mathbf{p}|^{2}\cos \theta+E^{2}-|\mathbf{p}|^{2} ) \\
 & = 2\left( 2E^{2}-2|\mathbf{p}|^{2}\sin ^{2} \frac{\theta}{2}  \right) \\
 & = 4E^{2}\left( 1- \beta^{2}\sin ^{2} \frac{\theta}{2} \right)
\end{align}$$
## (c)

Clearly:
$$\begin{align}
\frac{d\sigma}{d\Omega} & = \frac{1}{16\pi^{2}} \frac{1}{2}\sum_{\text{spins}}|\mathcal{M} |^{2} \\
 & = \frac{1}{16\pi^{2}} 4E^{2}\left( 1- \beta^{2} \sin ^{2} \frac{\theta}{2} \right)  \frac{Z^{2}e^{4}}{16|\mathbf{p}|^{4}\sin ^{4} \frac{\theta}{2}} \\
 & = \frac{Z^{2}\alpha^{2}}{4|\mathbf{p}|^{2}\beta^{2} \sin ^{4} \frac{\theta}{2}}\left( 1- \beta^{2} \sin ^{2} \frac{\theta}{2} \right)
\end{align}$$
In the non-relativistic limit, take $E\approx m,\ \beta \approx 0$. We have:
$$\begin{align}
\frac{d\sigma}{d\Omega} & \approx \frac{Z^{2}\alpha^{2}}{4 \frac{m^{4}v^{4}}{m^{2}}\sin ^{4} \frac{\theta}{2} }(1) \\
 & = \frac{Z^{2}\alpha^{2}}{4m^{2}v^{4}\sin ^{4} \frac{\theta}{2}}
\end{align}$$
This is exactly the classical Rutherford's formula.





