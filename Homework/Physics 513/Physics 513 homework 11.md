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
\end{pmatrix} \\
u^{-} & \approx \sqrt{ \frac{E}{2} } \begin{pmatrix}
(1- \hat{\mathbf{p}}\cdot \boldsymbol{\sigma})\xi_{-} \\
0
\end{pmatrix}
\end{align}$$
By definition, observe that:
$$\begin{align}

\end{align}$$
