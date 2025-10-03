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
First observe that:
$$\begin{align}
K_{\nu}(x) & =\int_{0}^{\infty}dt\exp(-x\cosh t)\cosh \nu t \\
 & = \frac{1}{\nu} \int d(\sinh vt)\exp(-x\cosh t)
\end{align}$$
We set $\tau:=\sinh vt$. Then we want to find the inverse. We have:
$$\begin{align}
\tau & =\sinh vt\implies t= \frac{1}{\nu}\sinh ^{-1}(\tau)
\end{align}$$
Then we know:
$$K_{\nu}(x)= \frac{1}{\nu}\int d\tau \exp\left( -x \cosh\left(  \frac{1}{\nu}\sinh ^{-1}(\tau) \right) \right)$$
We find $\sinh ^{-1}$ by setting $y=\sinh x$. Then:
$$\begin{align}
y & = \sinh x \\
 & = \frac{\exp(x)-\exp(-x)}{2} \\
\implies  & (e^x)^{2}-2ye^x-1=0 \\
\implies & e^x= y\pm \sqrt{ y^{2}+1 }
\end{align}$$
Since $e^x>0$, we take:
$$e^x=y+\sqrt{ y^{2}+1 }\implies x=\ln(y+\sqrt{ y^{2}+1 })$$
Then we set:
$$\begin{align}
f(\tau) & =- \cosh\left(  \frac{1}{\nu}\sinh ^{-1}(\tau) \right) \\
 & =-\cosh\left(  \frac{1}{\nu}\ln(\tau+\sqrt{ \tau^{2}+1 }) \right) \\
 & = - \frac{1}{2}\left( \exp\left(  \frac{1}{\nu}\ln(\tau+\sqrt{ \tau^{2}+1 }) \right)+\exp\left( - \frac{1}{\nu}\ln(\tau+\sqrt{ \tau^{2}+1 }) \right) \right) \\
 & = - \frac{1}{2}((\tau+\sqrt{ \tau^{2}+1 })^{1/\nu}+(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu})
\end{align}$$
It suffices to find the maximum of this function. We have:
$$\begin{align}
f^{'}(\tau)=\left(  - \frac{1}{2\nu}(\tau+ \sqrt{ \tau^{2}+1 })^{1/\nu-1}+ \frac{1}{2\nu}(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-1} \right)\left( 1+ \frac{\tau}{\sqrt{ \tau^{2}+1 }} \right)
\end{align}$$
Notice that in our substitution, we have $t>0\implies \tau>0$. So we get:
$$\begin{align}
f^{'}(\tau) & =\left(  - \frac{1}{2\nu}(\tau+ \sqrt{ \tau^{2}+1 })^{1/\nu-1}+ \frac{1}{2\nu}(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-1} \right)\left( 1+ \frac{\tau}{\sqrt{ \tau^{2}+1 }} \right)=0 \\
\implies & \left(  - \frac{1}{2\nu}(\tau+ \sqrt{ \tau^{2}+1 })^{1/\nu-1}+ \frac{1}{2\nu}(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-1} \right)=0 \\
\implies & (\tau+\sqrt{\tau^{2}+1  })^{2/\nu}=1 \\
\implies & \tau=0
\end{align}$$
Then we find the second derivative at $\tau=0$:
$$\begin{align}
f^{''}(0) & =\left( - \frac{1}{2\nu}\left(  \frac{1}{\nu}-1 \right)(\tau+\sqrt{ \tau^{2}+1 })^{1/\nu-2}+ \frac{1}{2\nu}\left( - \frac{1}{\nu}-1 \right)(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-2} \right)\left( 1+ \frac{\tau}{\sqrt{ \tau^{2}+1 }} \right)^{2}|_{\tau=0}+ \left(  - \frac{1}{2\nu}(\tau+ \sqrt{ \tau^{2}+1 })^{1/\nu-1}+ \frac{1}{2\nu}(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-1} \right)\left(  \frac{\sqrt{ \tau^{2}+1 }- \frac{\tau}{\sqrt{ \tau^{2}+1 }}}{\tau^{2}+1} \right)|_{\tau=0} \\
 & = \left( - \frac{1}{2\nu}\left(  \frac{1}{\nu}-1 \right)(\tau+\sqrt{ \tau^{2}+1 })^{1/\nu-2}+ \frac{1}{2\nu}\left( - \frac{1}{\nu}-1 \right)(\tau+\sqrt{ \tau^{2}+1 })^{-1/\nu-2} \right)\left( 1+ \frac{\tau}{\sqrt{ \tau^{2}+1 }} \right)^{2}|_{\tau=0} \\
 &= - \frac{1}{\nu^{2}}
\end{align}$$
We also find:
$$f(0)=-1$$
Then we have:
$$\begin{align}
K_{\nu}(x) & \approx  \frac{1}{\nu}e^{xf(0)}\sqrt{  \frac{2\pi}{-xf^{''}(0)} } \\
 & = \frac{1}{\nu}e^{-x}\sqrt{  \frac{2\pi}{x / \nu^{2}} }
\end{align}$$

# 3.
>[!Lemma 1]
>$$\delta(f(x))=\sum_{i} \frac{\delta(x-x_{i})}{|f^{'}(x_{i})|},\text{ where }x_{i}\text{ are the zeros.}$$
### Proof.

