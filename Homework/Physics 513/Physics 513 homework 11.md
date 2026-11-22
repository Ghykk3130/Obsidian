# Problem 1
## (a)

We know that:
$$i\mathcal{M}= -g^{2}\left[  \bar{u}_{\lambda^{'}}(p^{'})u_{\lambda}(p) \frac{i}{(k-k^{'})^{2}-m^{2}} \bar{u}_{\mu^{'}}(k^{'})u_{\mu}(k) -  \bar{u}_{\mu^{'}}(k^{'}) u_{\lambda}(p) \frac{i}{(k-p^{'})^{2}-m^{2}} \bar{u}_{\lambda^{'}}(p^{'})u_{\mu}(k)\right]$$
On the first vertex, we have:
$$\begin{align}
\bar{u}_{\lambda^{'}}(p^{'})u_{\lambda}(p) & = \bar{u}(p^{'})P_{-\lambda^{'}}P_{\lambda}u(p) \\
 & = \bar{u}(p^{'})u(p)\delta_{-\lambda^{'},\lambda}
\end{align}$$
Then we must get $\delta_{-\mu^{'},\mu}$ on the second vertex. Similarly, for the second term, the first vertex gives $-\mu^{'}=\lambda$, the second vertex gives $-\lambda^{'}=\mu$. Then for $\mathcal{M}$ to be non-zero, we either have:
$$\begin{align}
(\lambda^{'},\mu^{'})=(-\lambda,-\mu)
\end{align}$$
This is the non-vanishing condition for the first term. Or:
$$(\lambda^{'},\mu^{'})=(-\mu,-\lambda)$$
This is the non-vanishing condition for the second term. Here the minus sign just means flipping the chirality. 
## (b)

If $(\lambda,\mu)=(L,L)$, then the non-vanishing conditions of both terms are satisfied. The only non-vanishing option is $(\lambda^{'},\mu^{'})=(R,R)$.

If $(\lambda,\mu)=(R,R)$, it is similar. We have $(\lambda^{'},\mu^{'})=(L,L)$ for $i\mathcal{M}$ to be non-vanishing. 

If $(\lambda,\mu)=(L,R)$ and $(\lambda^{'},\mu^{'})=(R,L)$, then the first term is non-vanishing. If $(\lambda,\mu)=(L,R)$ and $(\lambda^{'},\mu^{'})=(L,R)$, then the second term is non-vanishing. 

If $(\lambda,\mu)=(R,L)$ and $(\lambda^{'},\mu^{'})=(L,R)$, then the first term is non-vanishing. If $(\lambda,\mu)=(R,L)$ and $(\lambda^{'},\mu^{'})=(R,L)$, then the second term is non-vanishing. 

If none of the above is satisfied, then $i\mathcal{M}=0$.
## (c)

We have:
$$\begin{align}
\xi_{+}= \begin{pmatrix}
\cos  \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix},\ \xi_{-}= \begin{pmatrix}
 -e^{-i\phi}\sin \frac{\theta}{2} \\
\cos \frac{\theta}{2}
\end{pmatrix}
\end{align}$$

>[!Success] Lemma
>$$\sqrt{ p\cdot \sigma }= \frac{p\cdot \sigma+m}{\sqrt{ 2(E+m) }}$$
## Proof of lemma.

We have:
$$\begin{align}
p\cdot \sigma & = E- |\mathbf{p}| \hat{\mathbf{p}}\cdot \boldsymbol{\sigma}
\end{align}$$
Then:
$$\begin{align}
(p\cdot \sigma+m)^{2} & = (E-\mathbf{p}\cdot \boldsymbol{\sigma}+m)^{2} \\
 & = (E+m)^{2}+|\mathbf{p} |^{2}-2(E+m)\mathbf{p}\cdot \boldsymbol{\sigma} \\
 & = (E+m)^{2}+E^{2}-m^{2}-2(E+m)\mathbf{p}\cdot \boldsymbol{\sigma} \\
 & = 2(E+m)(E-\mathbf{p}\cdot \boldsymbol{\sigma}) \\
 & = 2(E+m)p\cdot \sigma
\end{align}$$
Then:
$$\begin{align}
p\cdot \sigma= \frac{(p\cdot \sigma+m)^{2}}{2(E+m)}
\end{align}$$
>[!Right]
>$\blacksquare$

We have:
$$\begin{align}
u & = \frac{1}{\sqrt{ 2(E+m) }}\begin{pmatrix}
(p\cdot \sigma+m) \xi \\
(p\cdot \bar{\sigma}+m)\xi
\end{pmatrix}
\end{align}$$
Under relativistic limit, we have:
$$\begin{align}
p\cdot \sigma+m & = E-|\mathbf{p}| \hat{\mathbf{p}}\cdot \boldsymbol{\sigma}+m \\
 & \approx E- |\mathbf{p}| \hat{\mathbf{p}}\cdot \boldsymbol{\sigma} \\
 & \approx E- E \hat{\mathbf{p}}\cdot \boldsymbol{\sigma}
\end{align}$$
Then:
$$\begin{align}
u & \approx \frac{1}{\sqrt{ 2(E+m) }}\begin{pmatrix}
(E(1-\hat{\mathbf{p}}\cdot \boldsymbol{\sigma}))\xi \\
E(1-\hat{\mathbf{p}}\cdot   \bar{\boldsymbol{\sigma}})\xi
\end{pmatrix} \\
 & \approx \sqrt{ \frac{E}{2} } \begin{pmatrix}
(1- \hat{\mathbf{p}}\cdot \boldsymbol{\sigma})\xi \\
(1- \hat{\mathbf{p}}\cdot   \bar{\boldsymbol{\sigma}} )\xi
\end{pmatrix}
\end{align}$$
Observe that:
$$\begin{align}
 & (1- \hat{\mathbf{p}}\cdot \boldsymbol{\sigma})\xi_{+}  = (1-1)\xi_{+}=0 \\
 & (1- \hat{\mathbf{p}}\cdot  \bar{\boldsymbol{\sigma}} )\xi_{-}= (1+(-1))\xi_{-}=0
\end{align}$$
Then:
$$\begin{align}
u^{+} & \approx \sqrt{ \frac{E}{2} }\begin{pmatrix}
0 \\
(1- \hat{\mathbf{p}}\cdot  \bar{\boldsymbol{\sigma}})\xi_{+}
\end{pmatrix} = \sqrt{ 2E } \begin{pmatrix}
0 \\
\xi_{+}
\end{pmatrix}\\
u^{-} & \approx \sqrt{ \frac{E}{2} } \begin{pmatrix}
(1- \hat{\mathbf{p}}\cdot \boldsymbol{\sigma})\xi_{-} \\
0
\end{pmatrix}= \sqrt{ 2E } \begin{pmatrix}
\xi_{-} \\
0
\end{pmatrix}
\end{align}$$
By definition, observe that:
$$\begin{align}
\frac{1\pm \gamma^{5}}{2} & = \begin{pmatrix}
0 & 0 \\
0 & 1
\end{pmatrix}\text{ or }\begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
 & \frac{1+ \gamma^{5}}{2} u^{+}=u^{+} \\
 & \frac{1- \gamma^{5}}{2}u^{-}= u^{-} 
\end{align}$$
Therefore by definition they are chiral spinors. We have:
$$\begin{align}
 & u_{R}= u^{+} = \sqrt{ 2E } \begin{pmatrix}
0 \\
0 \\
\cos \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \\
 & u_{L}=u^{-}=\sqrt{ 2E } \begin{pmatrix}
 -e^{-i\phi}\sin \frac{\theta}{2} \\
\cos  \frac{\theta}{2} \\
0 \\
0
\end{pmatrix}
\end{align}$$

## (d)

We observe that $\bar{u}_{R}$ only has non-zero values in the first two entries. $\bar{u}_{L}$ only has non-zero values in the last two entries. Therefore, only:
$$\begin{align}
\bar{u}_{R}u_{L}\neq 0,\ \bar{u}_{L}u_{R}\neq 0
\end{align}$$
Others are all zero. Then clearly:
$$\bar{u}_{\lambda^{'}}u_{\lambda}\propto \delta_{-\lambda^{'},\lambda}$$
This recovers the selection rule.
## (e)

We have:
$$\begin{align}
\bar{u}_{R} & = \sqrt{ 2E } \begin{pmatrix}
0 & 0 & \cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \gamma^{0} \\
 & = \sqrt{ 2E }\begin{pmatrix}
\cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2} & 0 & 0
\end{pmatrix}
\end{align}$$
By definition, $\mathbf{p}^{},\mathbf{k}$ should have angle $\theta=0$, and $\theta = \pi$. $\mathbf{p}^{'}$ should have angle $\theta$, $\mathbf{k}^{'}$ should have angle $\pi-\theta$, due to momentum conservation. We choose our frame such that $\phi=0$.

Then:
$$\begin{align}
\bar{u}_{R}(p^{'})u_{L}(p) & = 2E \sin \frac{\theta}{2} \\
\bar{u}_{R}(k^{'})u_{L}(k) & = -2E \sin \frac{\theta}{2} \\
\bar{u}_{R}(p^{'})u_{L}(k) & = -2E \cos \frac{\theta}{2} \\
\bar{u}_{R}(k^{'})u_{L}(p) & = 2E \cos \frac{\theta}{2}
\end{align}$$
## (f)

We have:
$$\begin{align}
i\mathcal{M}_{R R,LL} &  = -g^{2}\left[  \bar{u}_{R}(p^{'})u_{L}(p) \frac{i}{(k-k^{'})^{2}-m^{2}}\bar{u}_{R}(k^{'})u_{L}(k)- \bar{u}_{R}(k^{'})u_{L}(p) \frac{i}{(k-p^{'})^{2}-m^{2}}\bar{u}_{R}(p^{'})u_{L}(k) \right] \\
 & = -g^{2} 4E^{2}\left(  \frac{i}{(k-k^{'})^{2}-m^{2}}\sin ^{2} \frac{\theta}{2}+ \frac{i}{(k-p^{'})^{2}-m^{2}}\cos ^{2} \frac{\theta}{2} \right) \\
 & \approx -g^{2}4E^{2}\left(  \frac{i}{(k-k^{'})^{2}}\sin ^{2} \frac{\theta}{2}+ \frac{i}{(k-p^{'})^{2}}\cos ^{2} \frac{\theta}{2} \right)
\end{align}$$
Notice that:
$$\begin{align}
(k-k^{'})^{2} & = -4|\mathbf{k}|^{2} \sin ^{2} \frac{\theta}{2} \\
 & \approx -4E^{2} \sin ^{2} \frac{\theta}{2} \\
(k-p^{'})^{2} & = -4|\mathbf{k}|^{2} \cos ^{2} \frac{\theta}{2} \\
 & \approx -4E^{2} \cos ^{2} \frac{\theta}{2}
\end{align}$$
Then:
$$\begin{align}
i\mathcal{M}_{RR,L L } & =-g^{2} 4E^{2} \left( - \frac{1}{4E^{2}} \right)(2i) \\
 & = 2i g^{2}
\end{align}$$
Next, we compute:
$$\begin{align}
i\mathcal{M}_{LR,LR} & = g^{2} \bar{u}_{L}(k^{'})u_{R}(p) \frac{i}{(k-p^{'})^{2}-m^{2}} \bar{u}_{R}(p^{'})u_{L}(k) \\
 & = g^{2} 4E^{2} \cos ^{2} \frac{\theta}{2}  \frac{i}{(k-p^{'})^{2}-m^{2}} \\
 & \approx g^{2} 4E^{2} \cos ^{2} \frac{\theta}{2} \frac{i}{(k-p^{'})^{2}} \\
 & = -ig^{2}
\end{align}$$
## (g)

For the spin average, we find that there are 2 terms of the $\mathcal{M}_{R R,L L}$-type, 4 terms of $\mathcal{M}_{LR,LR}$-type. There are $16$ options in total. We sum the final four options, so each carries coefficient $\frac{1}{4}$. Then:
$$\begin{align}
\overline{|\mathcal{M}|^{2}} & = \frac{2}{4} (2g^{2})^{2}+ \frac{4}{4}(g^{2})^{2} \\
 & = 3g^{4}
\end{align}$$

# Problem 2
## (a)

![[23ca828460e638741bec1154446c3f99.jpg|centering|500]]
For the first diagram, we have:
$$\begin{align}
(-1)(-ie)^{2}\bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\mu}(k) \frac{-ig_{\rho \sigma}}{(p-k^{'})^{2}} \bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\lambda}(p)
\end{align}$$
For the second diagram, we have:
$$\begin{align}
(-ie) ^{2} \bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\lambda}(p)\frac{-ig_{\rho \sigma}}{(p-p^{'})^{2}}\bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\mu}(k) 
\end{align}$$
Then we have:
$$\begin{align}
i\mathcal{M} & = (-ie)^{2}\left[ \bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\lambda}(p)\frac{-ig_{\rho \sigma}}{(p-p^{'})^{2}}(-ie)\bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\mu}(k)-\bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\mu}(k) \frac{-ig_{\rho \sigma}}{(p-k^{'})^{2}} \bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\lambda}(p)\right]
\end{align}$$
For the two cases, we are effectively considering:
$$\begin{align}
\bra{0} a_{\mathbf{k}^{'}}a_{\mathbf{p}^{'}} \bar{\psi}\gamma^{\mu}\psi A_{\mu}\bar{\psi}\gamma^{\nu}\psi A_{\nu}a_{\mathbf{p}}a_{\mathbf{k}}\ket{0} 
\end{align}$$
If we draw the contraction lines for the first case, we find that the lines cross each other for odd number of times. Then we get a minus sign out. If we draw the contraction lines for the second case, we find that the lines cross each other for even number of times. Then we still have plus sign. 
## (b)

We have:
$$\begin{align}
\bar{u}_{\lambda^{'}}(p)\gamma^{\mu}u_{\lambda}(p) & = \bar{u} P_{-\lambda^{'}} \gamma^{\mu}P_{\lambda}u \\
 & = \bar{u}\gamma^{\mu}P_{\lambda^{'} }P_{\lambda}u \\
 & = \delta_{\lambda^{'}\lambda}\bar{u}\gamma^{\mu}u
\end{align}$$
We know from Gorden's identity that:
$$\begin{align}
\bar{u}(p^{'})\gamma^{\mu}u(p) & = \bar{u}(p^{'})\left[  \frac{(p^{'}+p)^{\mu}}{2m}+ \frac{i\sigma^{\mu \nu}q_{\nu}}{2m} \right]u(p) \\
 & = \bar{u}(p^{'}) \frac{2p^{\mu}}{2m}u(p) \\
 
\end{align}$$
Then:
$$\begin{align}
\bar{u}_{\lambda^{'}}(p)\gamma^{\mu}u_{\lambda}(p)=  \frac{p^{\mu}}{m}2m \delta_{\lambda^{'}\lambda}=  2p^{\mu}\delta_{\lambda \lambda^{'}}
\end{align}$$
## (c)

Observe that in the forward limit, we have $p \approx p^{'}$, $k\approx k^{'}$. Then clearly $(-ie) ^{2} \bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\lambda}(p)\frac{-ig_{\rho \sigma}}{(p-p^{'})^{2}}\bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\mu}(k)$ dominates. Then:
$$\begin{align}
i\mathcal{M} & \approx (-ie)^{2} 2p^{\rho}\delta_{\lambda \lambda^{'}} \frac{-ig_{\rho \sigma}}{(p-p^{'})^{2}} 2p^{\sigma}\delta_{\mu^{'}\mu} \\
 & = (-ie)^{2} \frac{-4ip^{2}}{(p-p^{'})^{2}}\delta_{\lambda^{'}\lambda}\delta_{\mu^{'}\mu}
\end{align}$$
The helicity would be largest if $\lambda=\lambda^{'},\mu=\mu^{'}$, meaning that the chirality does not change. 
## (d)

For backward limit, $p-k^{'}\approx 0$. Then $(-1)(-ie)^{2}\bar{u}_{\lambda^{'}}(p^{'})\gamma^{\rho}u_{\mu}(k) \frac{-ig_{\rho \sigma}}{(p-k^{'})^{2}} \bar{u}_{\mu^{'}}(k^{'})\gamma^{\sigma}u_{\lambda}(p)$ dominates. Similarly, we notice that there would be $\delta_{\lambda^{'}\mu}\delta_{\mu^{'}\lambda}$ term. Then the largest amplitude would be when $\lambda^{'}=\mu,\ \mu^{'}=\lambda$.  
# Problem 3
## (a)

We consider $\sum_{i,j}p_{i}\cdot p_{j}$. Observe that:
$$\begin{align}
p_{i}\cdot p_{i} & = m_{i}^{2}
\end{align}$$
Also:
$$\begin{align}
 & s= (p_{1}+p_{2})^{2}=m_{1}^{2}+m_{2}^{2}+2p_{1}\cdot p_{2} \\
\implies & p_{1}\cdot p_{2}= \frac{s-m_{1}^{2}-m_{2}^{2}}{2}
\end{align}$$
Similarly:
$$\begin{align}
t=(p_{1}-p_{3})^{2}\implies p_{1}\cdot p_{3}= \frac{m_{1}^{2}+m_{3}^{2}-t}{2}
\end{align}$$
$$u=(p_{1}-p_{4})^{2}\implies p_{1}\cdot p_{4}= \frac{m_{1}^{2}+m_{4}^{2}-u}{2}$$
Since $p_{1}+p_{2}=p_{3}+p_{4}$, we have:
$$\begin{align}
s=(p_{3}+p_{4})^{2}\implies p_{3}\cdot p_{4}= \frac{s-m_{3}^{2}-m_{4}^{2}}{2}
\end{align}$$
$$t=(p_{4}-p_{2})^{2}\implies p_{2}\cdot p_{4}= \frac{m_{2}^{2}+m_{4}^{2}-t}{2}$$
$$u=(p_{3}-p_{2})^{2}\implies p_{2}\cdot p_{3}= \frac{m_{2}^{2}+m_{3}^{2}-u}{2}$$
Then all $p_{i}\cdot p_{j}$ are expressed.
## (b)

We have:
$$\begin{align}
s+t+u & = (p_{1}+p_{2})^{2}+(p_{1}-p_{3})^{2}+(p_{1}-p_{4})^{2} \\
 & = m_{1}^{2}+m_{2}^{2}+2p_{1}\cdot p_{2}+m_{1}^{2}+m_{3}^{2}-2p_{1}\cdot p_{3}+m_{1}^{2}+m_{4}^{2}-2p_{1}\cdot p_{4} \\
 & = m_{1}^{2}+m_{2}^{2}+m_{3}^{2}+m_{4}^{2}+2m_{1}^{2}+ 2p_{1}\cdot((p_{2}-p_{3}-p_{4})) \\
 & = m_{1}^{2}+m_{2}^{2}+m_{3}^{2}+m_{4}^{2}+ 2m_{1}^{2}-2p_{1}^{2} \\
 & = m_{1}^{2}+m_{2}^{2}+m_{3}^{2}+m_{4}^{2}
\end{align}$$
## (c)

We first find that:
$$\begin{align}
s_{1} & = p_{1}^{2}=0
\end{align}$$
since the particles are massless. By momentum conservation, meaning that $p_{1}+(p_{2}+p_{3}+p_{4}+p_{5})=0$, we know that:
$$s_{2345}=(-p_{1})^{2}=0$$
By similar method, it is easy to show that $s_{i}=0,\ \forall i$ and $s_{ijkl}=0,\ \forall \text{ distinct}i,j,k,l$. These Mandelson variables are determined and are not free.

Next we consider $s_{ij}$. Still due to momentum conservation, $s_{ijk}$ are known once $s_{ij}$ are known. This reduces to degree of freedom to $\frac{5!}{2!3!}=10$.

From the handwavy point of view, we aregue that there are five degrees of freedom, because we know that the natural free dynamical variables are $p_{i}$, and there are five of them. And changing to Mandelson variables does not reduce the degree of freedom. 

To show this more rigorously, we observe the constraint:
$$\begin{align}
s_{12}+s_{13}+s_{14}+s_{15} & = 2(p_{1}\cdot p_{2}+p_{1}\cdot p_{3}+p_{1}\cdot p_{4}+p_{1}\cdot p_{5}) \\
 & = -2p_{1}\cdot p_{1} \\
 & = 0
\end{align}$$
Similarly, it's easy to show (with $i$ fixed):
$$\begin{align}
\sum_{j\neq i}s_{ij}=0
\end{align}$$
There are five such equations in total. This would give $10-5=5$ degree of freedom. 



