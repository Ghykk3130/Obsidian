# 1. 广义函数

我们取任意$C^{\infty}$函数，称为测试函数。广义函数是测试函数的泛函。

一般来说，一个性质足够好的函数可以引出一个广义函数。令$f$为一个性质足够好的函数。取测试函数$g$。那么：
$$g \mapsto \int_{-\infty}^{\infty}dxf(x)g(x)$$
就是一个广义函数。

当然，不是所有的广义函数都拥有一个函数与之对应。例如说Dirac delta：
$$\delta:g \mapsto \int_{-\infty}^{\infty}\delta(x)g(x)=g(0)$$
尽管我们形式上想象了一个函数$\delta$，但它实际上不是一个合法的函数。真实的Dirac delta应该被想象成$\delta: g\mapsto g(0)$。把它写成一个$\delta$“函数”和$g$的积分只是一个形式上的对应。原则上，广义函数$\delta$和它对应的函数$\delta$应该在符号上有所区分。但是我们不区分它们的符号。如果$\delta$被写在积分里面，就当作是广义函数相应的函数。如果没有积分，则一般当成广义函数本身。

类似的广义函数还有principal value：
$$P \frac{1}{x}:g\mapsto \int_{-\infty}^{\infty}dxP \frac{1}{x}g(x)=\lim_{ \epsilon \to 0^{+} }  \int_{|x|>\epsilon}dx \frac{1}{x}g(x)$$
此外还有：
$$\frac{1}{x-i\epsilon}:g \mapsto \lim_{ \epsilon \to 0^{+} } \int_{-\infty}^{\infty}  \frac{1}{x-i\epsilon}g(x)$$
有时我们直接省略外面的极限符号不写。我们可以证明如下引理：

>[!Success] Theorem1.1
>$$\frac{1}{x-i\epsilon}= P \frac{1}{x}+i\pi\delta(x)$$
## Proof.

任取测试函数$g$。我们取contour：
![[24fd794455aa6fef3032eee3dd7b8e00.jpg|centering|400]]
一方面，由留数定理轻易得到：
$$\begin{align}
\oint_{C}dx \frac{1}{x-i\epsilon}g(x)=  2\pi ig(i\epsilon)
\end{align}$$
另一方面：
$$\oint_{C}= \int_{-\infty}^{\infty}+ \int_{\infty}^{\delta}+ \int_{\text{small circle}} + \int_{-\delta}^{-\infty}$$
其中small circle就是在$i\epsilon$附近凸起的一小段。显然由小圆弧引理：
$$\int_{\text{small circle}}dx \frac{1}{x-i\epsilon}g(x)= \pi i g(i\epsilon)$$
于是：
$$\begin{align}
\int_{-\infty}^{\infty}dx \frac{1}{x-i\epsilon}g(x)= \int_{-\infty}^{-\delta} dx \frac{1}{x-i\epsilon}g(x)+ \int_{\delta}^{\infty} dx\frac{1}{x-i\epsilon}g(x) +\pi i g(i\epsilon)
\end{align}$$
两边取$\epsilon \rightarrow 0^{+}$得到：
$$\begin{align}
\lim_{ \epsilon \to 0^{+} } \int_{-\infty}^{\infty}dx \frac{1}{x-i\epsilon}g(x)= \int_{-\infty}^{-\delta}dx \frac{1}{x}g(x)+ \int_{\delta}^{\infty}dx \frac{1}{x}g(x)+ i\pi g(0)
\end{align}$$
再取$\delta\rightarrow 0^{+}$得到：
$$\begin{align}
\frac{1}{x-i\epsilon}= P \frac{1}{x}+i\pi\delta(x)
\end{align}$$
>[!Right]
>$\blacksquare$
# 2. Klein-Gordon方程的Green函数

考虑非齐次Klein-Gordon方程：
$$\begin{align}
(\Box+m^{2})\phi(x)=j(x)
\end{align}$$
如果存在Green函数$D(x-y)$满足：
$$\begin{align}
(\Box_{x}+m^{2})D(x-y)=-i\delta(x-y)
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
\end{align}$$
这里，$\tilde{D}(p)$是一个广义函数。

>[!Quote]
>如果一旦一个广义函数$\tilde{D}$满足：
>$$(-p^{2}+m^{2})\tilde{D}(p)=-i$$
>那么$D$就将符合:
>$$\begin{align}
  (\Box+m^{2})D & = \int \frac{d^{4}p}{(2\pi)^{4}} \tilde{D} (\Box+m^{2})e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{4}p}{(2\pi)^{4} }(-p^{2}+m^{2})\tilde{D}e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{4}p}{(2\pi)^{4}}(-i) e^{-ip\cdot(x-y)} \\
 & = -i\delta(x-y) 
\end{align}$$
