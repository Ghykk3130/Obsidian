
# 1. 旋度

我们知道$*dA=\nabla \times A$。左手边$dA$是一个2-form，是coordinates-independent的。相应地，$*dA$也是coordinates-independent的。所以可通过$*dA$得到任意坐标系下旋度。

虽然应求$*dA$，但求其musical isomorphism，即对应的逆变张量是更轻松的。我们有：

>[!Note] Proposition 1.1
$$(\nabla \times A)^k= \frac{1}{\sqrt{ |g| }}\tilde{\epsilon}_{kij}\partial_{i}A_{j}$$
## Proof.
$$\begin{align}
(*dA)^k & = \frac{1}{2}\epsilon^{kij}(dA)_{ij} \\
 & = \frac{1}{2} \frac{1}{\sqrt{ |g| }}\tilde{\epsilon}_{kij}(dA)_{ij}
\end{align}$$
而易得：
$$\begin{align}
dA & = \partial_{i}A_{j} dx^i\wedge dx^j \\
 & = \partial_{i}A_{j}\tilde{\epsilon}_{\mu_{i},\mu_{j} }dx^{\mu_{i}}\otimes dx^{\mu_{j}} \\
 & = \partial_{\mu_{i}}A_{\mu_{j} }\tilde{\epsilon}_{\mu_{i},\mu_{j}}dx^i\otimes dx^j \\
 & = (\partial_{i}A_{j}-\partial_{j}A_{i})dx^i\otimes dx^j
\end{align}$$
于是：
$$\begin{align}
(*dA)^k & = \frac{1}{2} \frac{1}{\sqrt{ |g| }}\tilde{\epsilon}_{kij}(\partial_{i}A_{j}-\partial _{j}A_{i}) \\
 & = \frac{1}{2} \frac{1}{\sqrt{ |g| }}(\tilde{\epsilon}_{kij}\partial_{i}A_{j}+\tilde{\epsilon}_{kij}\partial_{i}A_{j}) \\
 & = \frac{1}{\sqrt{ |g| }}\tilde{\epsilon}_{kij}\partial_{i}A_{j}
\end{align}$$
>[!Right]
>$\blacksquare$

之后再降指标得到$(\nabla \times A)_{k}$即可。
## Ex:

考虑cylindrical coordinates的度规张量：
$$g=dr^{2}+r^{2}d\theta^{2}+dz^{2}$$
考虑一个物理矢量：
$$\begin{align}
A & =A^re_{r}+ A^{\theta}e_{\theta}+A^{z}e_{z} \\
 & = A^r\partial_{r}+ \frac{A^{\theta}}{r}  \partial_{\theta}+A^z\partial_{z}
\end{align}$$
我们降指标：
$$A^{\flat}= A^r dr+ r^{}A^{\theta} d\theta+A^zdz$$
求外微分非常轻松：
$$\begin{align}
 & (dA)_{r,\theta}= \partial_{r}(r^{}A^{\theta})-\partial_{\theta}A^r=-(dA)_{\theta,r} \\
 & (dA)_{\theta,z}= \partial_{\theta}A^z-\partial_{z}(r^{}A^{\theta})=-(dA)_{z,\theta} \\
 & (dA)_{z,r}= \partial_{z}A^r-\partial_{r}A^{z}=-(dA)_{r,z}
\end{align}$$
可以求Hodge dual：
$$\begin{align}
 & (*dA)^r= \frac{1}{\sqrt{ |g| }} \left[ \frac{1}{2}(dA)_{\theta,z}- \frac{1}{2}(dA)_{z,\theta} \right]= \frac{1}{r} (dA)_{\theta,z}= \frac{1}{r}\partial_{\theta}A^z- \partial_{z}A^{\theta} \\
 & (*dA)^{\theta}= \frac{1}{\sqrt{ |g| }}\left[\frac{1}{2}(dA)_{z,r}- \frac{1}{2}(dA)_{r,z}\right]= \frac{1}{r} (dA)_{z,r}=  \frac{1}{r}\partial_{z}A^r- \frac{1}{r}\partial_{r}A^z \\
 & (*dA)^z=  \frac{1}{\sqrt{ |g| }}\left[ \frac{1}{2}(dA)_{r,\theta}- \frac{1}{2}(dA)_{\theta,r}\right]= \frac{1}{r}(dA)_{r,\theta}= \frac{1}{r}\partial_{r}(rA^{\theta})- \frac{1}{r}\partial_{\theta}A^r
\end{align}$$
再换到$e_{r},e_{\theta},e_{z}$基，得到：
$$\begin{align}
 & (\nabla \times A)^r= \frac{1}{r}\partial_{\theta}A^z-\partial_{z}A^{\theta} \\
 & (\nabla \times A)^{\theta}= \partial_{z}A^r- \partial_{r}A^z \\
 & (\nabla \times A)^{z}= \frac{1}{r}\partial_{r}(rA^{\theta})- \frac{1}{r}\partial_{\theta}A^r
\end{align}$$
## Ex:

考虑spherical coordinated度规张量：
$$g= dr^{2}+ r^{2}d\theta^{2}+r^{2}\sin ^{2}\theta d\phi^{2}$$
我们有：
$$\begin{align}
A & = A^re_{r}+A^{\theta}e_{\theta}+A^{\phi}e_{\phi} \\
 & = A^r\partial_{r}+ \frac{A^{\theta}}{r}\partial_{\theta}+ \frac{A^{\phi}}{r\sin \theta}\partial_{\phi}
\end{align}$$
降指标：
$$\begin{align}
A^{\flat}= A^r dr + rA^{\theta}d\theta+ r\sin \theta A^{\phi}d\phi
\end{align}$$
我们求外微分：
$$\begin{align}
 & (dA)_{r,\theta}= \partial_{r}\left( \frac{A^{\theta}}{r} \right)- \partial_{\theta}A^r \\
 & (dA)_{\theta,\phi}= \partial_{\theta}\left(  \frac{A^{\phi}}{r\sin \theta} \right)- \partial_{\phi}\left( \frac{A^{\theta}}{r} \right) \\
 & (dA)_{\phi,r}= \partial_{\phi}A^r- \partial_{r}\left( \frac{A^{\phi}}{r\sin \theta} \right)
\end{align}$$
求Hodge dual：
$$\begin{align}
 & (*dA)^r= \frac{1}{r^{2}\sin \theta} (dA)_{\theta,\phi}= \frac{1}{r^{2}\sin \theta} \left[ \partial_{\theta}\left(  \frac{A^{\phi}}{r\sin \theta} \right) - \partial_{\phi}\left(  \frac{A^{\theta}}{r} \right)\right] \\
 & (*dA)_{\theta}= \frac{1}{r^{2}\sin \theta} (dA)_{\phi,r}= \frac{1}{r^{2}\sin \theta}\left[ \partial_{\phi}A^r-\partial_{r}\left(  \frac{A^{\phi}}{r\sin \theta} \right) \right] \\
 & (*dA)_{\phi}= \frac{1}{r^{2}\sin \theta} (dA)_{r,\theta}= \frac{1}{r^{2}\sin \theta}\left[ \partial_{r}\left(  \frac{A^{\theta}}{r} \right)- \partial_{\theta}A^r \right] 
\end{align}$$
换到正交基得到：
