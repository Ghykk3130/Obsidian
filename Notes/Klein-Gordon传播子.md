考虑非齐次Klein-Gordon方程：
$$\begin{align}
(\Box+m^{2})\phi(x)=j(x)
\end{align}$$
如果存在Green函数$D(x-y)$满足：
$$\begin{align}
(\Box+m^{2})D(x-y)=-i\delta(x-y)
\end{align}$$
那么显然非齐次解可以写为：
$$\begin{align}
\phi(x)= i \int d^{4}yD(x-y) j(y)
\end{align}$$
为了解出Green函数，我们作Fourier变换：
$$\begin{align}
D(x-y)= \int \frac{d^{4}p}{(2\pi)^{4} }  \tilde{D} e^{-ip\cdot(x-y)},\ \delta(x-y)= \int \frac{d^{4}p}{(2\pi)^{4} } e^{-ip\cdot(x-y)}
\end{align}$$
那么代入方程，根据基的独立性脱去积分后得到：
$$\begin{align}
 & (-p^{2}+m^{2}) \tilde{D}(p)= -i \\
\implies & \tilde{D} = \frac{i}{p^{2}-m^{2}}
\end{align}$$
那么Green函数为：
$$\begin{align}
D(x-y) & =  \int \frac{d^{4}p}{(2\pi)^{4}} \frac{i}{p^{2}-m^{2}}e^{-ip\cdot(x-y)}
\end{align}$$
但这个方程显然不可积，因为$p^{0}$的积分线穿过了奇点。所以怎么办？是看作广义函数，通过一些argument说明在广义函数上，稍微偏离奇点结果是一样的吗？显然在精确意义下，$D$是积不出来的。


我们希望找到分布函数$D$。如果：
$$\begin{align}
(\Box+m^{2})D_{av}(x-y)=-i\delta_{av}(x-y)
\end{align}$$
那么：
$$\begin{align}
\phi & =i \langle D,j\rangle \\
 & = i \int d^{4}x D_{av}j \\
 & = j
\end{align}$$
为了找到$D_{av}$，我们对于$D_{av}$进行Fourier变换。

那么，在我的notation下，是否有：
$$\begin{align}
\left( \frac{1}{p^{2}-m^{2}}  \right)_{av}= P\left(  \frac{1}{p^{2}-m^{2}} \right)+i\pi \delta_{av}(p^{2}-m^{2})
\end{align}$$

我好像有点懂了，但又没懂。我们希望：
$$\tilde{D}_{av}(p^{2}-m^{2})=i$$
对所有点满足。于是我们不妨让：
$$\tilde{D}_{av}= \frac{i}{p^{2}-m^{2}+i\epsilon}$$
其中$\epsilon$非常非常小。那么：
$$\begin{align}
\tilde{D}_{av} (p^{2}-m^{2})= i \frac{p^{2}-m^{2}}{p^{2}-m^{2}+i\epsilon}
\end{align}$$
显然在$p^{2}-m^{2}\neq 0$时是成立的。但是在$p^{2}-m^{2}=0$时照样不成立啊。

还是说，我们希望的不是$$\tilde{D}_{av}(p^{2}-m^{2})=i$$
对所有点满足。而是$\tilde{D}_{av}$Fourier变换回去再积分等等总之一系列操作之后给出正确的KG场解吗？