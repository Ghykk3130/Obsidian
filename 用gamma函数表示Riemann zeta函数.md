
回忆起Riemann zeta function的定义：

>[!Note] Definition 1
>$$\zeta(x)= \sum_{n=1}^{\infty} \frac{1}{n^x}$$

我们试图将它表示为gamma函数。统计力学中经常遇见积分：
$$\int_{0}^{\infty}dx \frac{x^n}{e^{x}-1}$$
我们claim这玩意是Riemann zeta函数。为了凑出级数形式，我们写：
$$\begin{align}
\int_{0}^{\infty}dx \frac{x^n}{e^x-1 } & =\int dx x^n \frac{e^{-x}}{1-e^{-x}}
\end{align}$$
注意到$\frac{e^{-x}}{1-e^{-x}}$这玩意长得像几何级数：
$$\frac{e^{-x}}{1-e^{-x}}= \sum_{n=1}^{\infty} e^{-nx}$$
所以我们有：
$$\begin{align}
\int dx \frac{x^n}{e^{x}-1} & =\sum_{m=1}^{\infty} \int dx x^{n}e^{-mx} \\
 & = \sum_{m=1}^{\infty} \frac{1}{m^{n+1}}\Gamma(n+1) \\
 & = \zeta(n+1)\Gamma(n+1)
\end{align}$$
