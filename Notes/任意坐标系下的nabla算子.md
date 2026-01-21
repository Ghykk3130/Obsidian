
# 1. 旋度

我们知道$*dA=\nabla \times A$。左手边$dA$是一个2-form，是coordinates-independent的。相应地，$*dA$也是coordinates-independent的。所以可通过$*dA$得到任意坐标系下旋度。

虽然应求$*dA$，但求其musical isomorphism，即对应的逆变张量是更轻松的。我们有：

>[!Note] Proposition 1.1
$$(\nabla \times A)^k= \frac{1}{|g|}\tilde{\epsilon}_{kij}\partial_{i}A_{j}$$
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
$$g=dr^{2}+r^{2}d\phi^{2}+dz^{2}$$
为了方便起见，选择$dr,r d\phi,dz$作为余切空间基矢。


物理上，例如位移之类的矢量是三维空间中的逆变矢量。因为自然基底是切空间中矢量。那么考虑这样一个逆变矢量：
$$A=A^re_{r}+A^{\phi}e_{\phi}+A^{z}e_{z}$$
注意到：
$$\begin{align}
 & |\partial_{r} |=\sqrt{ g(\partial_{r},\partial_{r}) } = 1 \\
 & |\partial_{\phi}|=\sqrt{ g(\partial_{\phi},\partial_{\phi}) } =r \\
 & |\partial_{z} |=\sqrt{ g(\partial_{z},\partial_{z}) }=1
\end{align}$$
所以有：
$$e_{r}=\partial_{r},\ e_{\phi}= \frac{1}{r}\partial_{\phi},\ e_{z}= \partial_{z}$$
所以：
$$A= A^{r}\partial_{r}+ \frac{A^{\phi}}{r} \partial_{\phi}+ A^z\partial_{z}$$
所以：
$$A^{\flat}= A^{r}dr+ rA^{\phi}d\phi+ A^zdz$$
所以：
$$\begin{align}
 & (\nabla \times A)^r= \frac{1}{r}( \partial_{\phi}A^z-\partial_{z}(rA^{\phi}) ) \\
 & (\nabla \times A)^{\phi}= \frac{1}{r}(\partial_{z}A^r-\partial_{r}A^z)  \\
 & (\nabla \times A)^z= \frac{1}{r}(\partial_{r}(rA^{\phi})-\partial_{\phi}A^r)
\end{align}$$
所以：
$$\begin{align}
\nabla \times A & = \frac{1}{r}(\partial_{\phi}A^z-\partial_{z}(rA^{\phi}))\partial_{r}+ \frac{1}{r}(\partial_{z}A^r-\partial_{r}A^z)\partial_{\phi}+ \frac{1}{r}(\partial_{r}(rA^{\phi})-\partial_{\phi}A^r )\partial_{z} \\
 & = \frac{1}{r}(\partial_{\phi}A^z-\partial_{z}(rA^{\phi}))e_{r}+ (\partial_{z}A^r-\partial_{r}A^z)e_{\phi}+ \frac{1}{r}(\partial_{r}(rA^{\phi})-\partial_{\phi}A^r)e_{z}
\end{align}$$


