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