
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
$$g=dr^{2}+r^{2}d\phi^{2}+dz^{2}$$
为了方便起见，选择$dr,r d\phi,dz$作为余切空间基矢。那么，相应的切空间基底为$e_{r}, \frac{1}{r}e_{\theta}, e_{z}$。

此时，在新基底下，度规张量为$\delta_{ij}$。所以我们不需要担心raising, lowering index的影响。且$\sqrt{ |g| }$也会消失。

考虑一个物理矢量：
$$A=A^re_{r}+ A^{\theta}e_{\theta}+A^{z}e_{z}$$
我们在新基下写这个矢量：
$$A=A^re_{r}+ rA^{\theta} \frac{e_{\theta}}{r}+ A^{z}e_{z}$$
降指标非常轻松：
$$A^{\flat}= A^r dr+ rA^{\theta} (r d\theta)+A^zdz$$