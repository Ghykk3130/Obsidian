
回忆起Riemann zeta function的定义：

>[!Note] Definition 1
>$$\zeta(x)= \sum_{n=1}^{\infty} \frac{1}{n^x},\text{ for }x>1$$

我们试图将它表示为gamma函数。统计力学中经常遇见积分：
$$\int_{0}^{\infty}dx \frac{x^n}{e^{x}-1}$$
我们claim这玩意是Riemann zeta函数。为了凑出级数形式，我们写：
$$\begin{align}
\int_{0}^{\infty}dx \frac{x^n}{e^x-1 } & =\int dx x^n \frac{e^{-x}}{1-e^{-x}}
\end{align}$$
>[!Note] Idea 1
>统计力学中，遇到这种分子$x$的多少次方，分母代$e^{-x}$，可以尝试化成几何级数的形式。

^45f9a5

^idea1
注意到$\frac{e^{-x}}{1-e^{-x}}$这玩意长得像几何级数：
$$\frac{e^{-x}}{1-e^{-x}}= \sum_{n=1}^{\infty} e^{-nx}$$
所以我们有：
$$\begin{align}
\int dx \frac{x^n}{e^{x}-1} & =\sum_{m=1}^{\infty} \int dx x^{n}e^{-mx} \\
 & = \sum_{m=1}^{\infty} \frac{1}{m^{n+1}}\Gamma(n+1) \\
 & = \zeta(n+1)\Gamma(n+1)
\end{align}$$
## Caveat.
注意，当$n+1<1$时，这一步就会失败：
$$\sum_{m=1}^{\infty} \frac{1}{m^{n+1}}\Gamma(n+1)  = \zeta(n+1)\Gamma(n+1)$$
这是因为，当$n+1<1$时，$\sum_{m=1}^{\infty} \frac{1}{m^{n+1}}$就不是Riemann zeta函数。Riemann zeta函数$\zeta(x)=\sum_{n} \frac{1}{n^x}$的定义仅适用于$x>1$。当$x<1$时，Riemann zeta函数通过某种解析延拓定义，也就不再是那个级数了。