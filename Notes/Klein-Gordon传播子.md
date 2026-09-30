# 1. 广义函数

我们取任意$C^{\infty}$函数，称为测试函数。广义函数是测试函数的泛函。

一般来说，一个性质足够好的函数可以引出一个广义函数。令$f$为一个性质足够好的函数。取测试函数$g$。那么：
$$g \mapsto \int_{-\infty}^{\infty}dxf(x)g(x)$$
就是一个广义函数。

当然，不是所有的广义函数都拥有一个函数与之对应。例如说Dirac delta：
$$\delta:g \mapsto \int_{-\infty}^{\infty}\delta(x)g(x)=g(0)$$
尽管我们形式上想象了一个函数$\delta$，但它实际上不是一个合法的函数。真实的Dirac delta应该被想象成$\delta: g\mapsto g(0)$。把它写成一个$\delta$“函数”和$g$的积分只是一个形式上的对应。原则上，广义函数$\delta$和它对应的函数$\delta$应该在符号上有所区分。但是我们不区分它们的符号。如果$\delta$被写在积分里面，就当作是广义函数相应的函数。如果没有积分，则一般当成广义函数本身。

类似的广义函数还有principal value：
$$P \frac{1}{x}:g\mapsto \int_{-\infty}^{\infty}dxP \frac{1}{x}g(x)=\lim_{ \epsilon \to 0^{+} }  \int_{x>|\epsilon|}dx \frac{1}{x}g(x)$$
此外还有：
$$\frac{1}{x-i\epsilon}:g \mapsto \lim_{ \epsilon \to 0^{+} } \int_{-\infty}^{\infty}  \frac{1}{x-i\epsilon}g(x)$$
我们可以证明如下引理：

>[!Success] Theorem1.1
>$$\frac{1}{x-i\epsilon}= P \frac{1}{x}+i\pi\delta(x)$$



# 2. 

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