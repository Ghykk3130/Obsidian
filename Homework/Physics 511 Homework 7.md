# 1.
## a).
Assume that $x_{1},x_{2}$ are the classical turning points. We have the quantization rule:
$$\begin{align}
 & \int_{x_{1}}^{x_{2}}dx^{'}\sqrt{ 2m(E-V) }=\left( n+ \frac{1}{2} \right)\hbar \pi \\
\implies  & \int dx^{'}\sqrt{ 2m(E-\alpha x^6) } = \left(  n+ \frac{1}{2} \right) \hbar \pi
\end{align}$$
We compute:
$$\begin{align}
  \int_{x_{1}}^{x_{2}} dx^{'}\sqrt{ 2m(E-\alpha x^6) } & = \sqrt{ 2mE }\int_{x_{1}}^{x_{2}}dx^{'}\sqrt{ 1- \frac{\alpha}{E}x^{'6} } \\
 & = \sqrt{ 2mE }\cdot 2\cdot \int_{0}^{x_{2}}dx^{'}\sqrt{ 1- \frac{\alpha}{E}x^{'6} } \\
 & = \sqrt{ 2mE }\cdot 2 \cdot \left(  \frac{E}{\alpha} \right)^{1/6} \int_{0}^1 du\sqrt{ 1-u^6 }  \\
 & = \sqrt{ 2mE }\left(  \frac{E}{\alpha} \right)^{1/6}\int_{-1}^1du\sqrt{ 1-u^{2} }
\end{align}$$
Then easy to find that:
$$E=\left( \left( n+ \frac{1}{2} \right)\hbar \pi \right)^{3/2}\alpha^{1/4}(2m)^{-3/4}\left( \int_{-1}^1du\sqrt{ 1-u^6 } \right)^{-3/2}$$
For $n=0$, I have:
$$E = 3.586 \hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$$
For $n=4$, I have:
$$E = 23.950 \hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$$
## b).
Set$x=a\xi$. Then we have:
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(V-E)\psi=0 \\
\implies & \frac{s^{2}}{d\xi^{2}}\psi- \frac{2ma^{2}}{\hbar^{2}}(\alpha a^6\xi^6-E)\psi=0
\end{align}$$
Set $\frac{2ma^{2}}{\hbar^{2}}\alpha a^6=1$, we find:
$$K = \frac{2mE}{\hbar^{2}}\left(  \frac{\hbar^{2}}{2m\alpha} \right)^{1/4}$$
Then we have:
$$\frac{d^{2}}{d\xi^{2}}\psi-(\xi^6-K)\psi=0$$
## c).
**For n = 0:**

I found that if $K = 1.2$, diverges to $-\infty$. If $K = 1.1$, diverges to $\infty$. Observe that $\frac{|1.1-1.2|}{|1.1|}<0.1$, then conclude that $K = 1.1$.  Then $E = 1.1\hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$

**For $n = 4$:**

I found that if $K = 21$, diverges to $\infty$. If $K = 22$, diverges to $-\infty$. Observe that $\frac{|22-21|}{|21|}<0.1$, then conclude that $K = 22$.  Then $E = 22\hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$

