# 1.
## a).
Observe that if $n$ is odd, then $\langle x^n\rangle$ vanishes. This is because the integrand is an odd function.

Then assume $n$ is even. Then:
$$\begin{align}
\int_{-\infty}^{\infty}dx x^n \exp(-ax^{2}) & =\int dx \frac{\partial^{n/2}}{\partial(-a)^{n/2}} \exp(-ax^{2}) \\
 & = (-1)^{n/2} \left(  \frac{d}{da} \right)^{n/2}\int dx\exp(-ax^{2}) \\
 & =(-1)^{n/2}\left(  \frac{d}{da} \right)^{n/2}\left(  \frac{\sqrt{ \pi }}{\sqrt{ a }} \right) \\
 & = (-1)^{n/2}\left( - \frac{1}{2} \right) \dots\left( - \frac{1}{2}- \frac{n}{2} \right)a^{- \frac{1}{2}- \frac{n}{2}-1} \sqrt{ \pi } \\
 & = (-1)^n \left(  \frac{1}{2} \cdot \frac{3}{2}\cdot\dots \cdot \frac{n+1}{2} \right)a^{- \frac{3}{2}- \frac{n}{2}}\sqrt{ \pi }
\end{align}$$
## b).
$$\begin{align}
\int_{\infty}^{\infty}dx\exp\left( - \frac{(x-\mu)^{2}}{2\sigma^{2}} \right)  & = \sqrt{ 2 }\sigma \int d\left(  \frac{x-\mu}{\sqrt{ 2 }\sigma} \right)\exp\left( - \frac{(x-\mu)^{2}}{2\sigma^{2}} \right) \\
 & = \sigma \sqrt{ 2\pi }
\end{align}$$
## c).
$$\begin{align}
\int_{-\infty}^{\infty}dx\exp(-(a^{2}x^{2}+bx)) & =\int dx\exp\left( -a^{2}\left( x+ \frac{b}{2a^{2}} \right)^{2} + \frac{b^{2}}{4a^{2}} \right) \\
 & =\exp\left(  \frac{b^{2}}{4a^{2}} \right) \frac{1}{a} \int d\left( a\left( x+ \frac{b}{2a^{2}} \right) \right)\exp\left( -a^{2}\left( x+ \frac{b}{2a^{2}} \right)^{2} \right) \\
 & = \exp\left(  \frac{b^{2}}{4a^{2}} \right) \frac{\sqrt{ \pi }}{a}
\end{align}$$
# 2.
