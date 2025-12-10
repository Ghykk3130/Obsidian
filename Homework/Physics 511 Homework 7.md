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
 & = \sqrt{ 2mE }\left(  \frac{E}{\alpha} \right)^{1/6}\int_{-1}^1du\sqrt{ 1-u^{6} }
\end{align}$$
Then easy to find that:
$$E=\left( \left( n+ \frac{1}{2} \right)\hbar \pi \right)^{3/2}\alpha^{1/4}(2m)^{-3/4}\left( \int_{-1}^1du\sqrt{ 1-u^6 } \right)^{-3/2}$$
For $n=0$, I have:
$$E = 0.801 \hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$$
For $n=4$, I have:
$$E = 21.622 \hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$$
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

I found that if $K = 1.2$, diverges to $-\infty$. If $K = 1.1$, diverges to $\infty$. Observe that $\frac{|1.1-1.2|}{|1.1|}<0.1$, then take the mean and conclude that $K \approx 1.15$.  Then $E = 1.15\hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$

**For $n = 4$:**

I found that if $K = 21$, diverges to $\infty$. If $K = 22$, diverges to $-\infty$. Observe that $\frac{|22-21|}{|21|}<0.1$, then take the mean and conclude that $K \approx 21.5$.  Then $E = 21.5\hbar^{3/2}\alpha^{1/4}(2m)^{-3/4}$

I found that the result for $n=0$ is far from the WKB prediction, but the result for $n=4$ is close to the WKB prediction. 

The solution for $n=4$ has the correct number of nodes. Notice that the classical turning point is given by $V=E$. This condition is equivalent to $\xi^6=K$. Then found that for $n=4$, the classical allowed region is roughly $[-1.67,1.67]$. Obviously, for $K=21.5$, there are four nodes in this region.
<div style="text-align:center">
<img src="Pasted image 20251101214703.png" width="300">
</div>

# 2.
We compute:
$$\begin{align}
\bra{\vec{p}^{''},t} \vec{p}^{'},t_{0}\rangle & =\bra{\vec{p}^{''},t_{0}} \mathscr{U}(t,t_{0})\ket{\vec{p}^{'},t_{0}}  \\
 & = \bra{\vec{p}^{''},t_{0}} \exp\left( - \frac{i}{\hbar} \frac{p^{2}}{2m}(t-t_{0}) \right) \ket{\vec{p}^{'},t_{0}}  \\
 & = \bra{\vec{p}^{''},t_{0}} \vec{p}^{'},t_{0}\rangle \exp\left( - \frac{i}{\hbar} \frac{p^{'2}}{2m}(t-t_{0}) \right) \\
 & = \delta^{3}(\vec{p}^{''}-\vec{p}^{'})\exp\left( - \frac{i}{\hbar} \frac{p^{'2}}{2m}(t-t_{0}) \right)
\end{align}$$
# 3.
## a).
For $x\neq 0$, I have:
$$- \frac{\hbar^{2}}{2m}\psi=E\psi$$
There are two independent solutions $\exp\left( \pm \sqrt{ -\frac{2mE}{\hbar^{2}} }x \right)$. Considering boundedness, easy to find that:
$$\psi(x)=\left\{\begin{align}
 & A\exp\left( -\sqrt{ - \frac{2mE}{\hbar^{2}} }x \right),x\geq0 \\
 & B\exp\left( \sqrt{ -\frac{2mE}{\hbar^{2} }x } \right),x<0
\end{align}\right.$$
where $A,B$ are constants.

Since $\delta(x)$ is even, $\psi(0)\neq 0$, I must conclude that $\psi(x)$ is even. So:
$$\psi(x)=\left\{\begin{align}
 & A\exp\left( -\sqrt{ - \frac{2mE}{\hbar^{2}} }x \right),x\geq0 \\
 & A\exp\left( \sqrt{ -\frac{2mE}{\hbar^{2} }x } \right),x<0
\end{align}\right.$$
For normalization, consider:
$$\begin{align}
 & \int_{0}^{\infty}dx|\psi(x)|^{2}=\frac{1}{2} \\
\implies & |A|^{2} \frac{1}{2} \sqrt{ -\frac{\hbar^{2}}{2mE} }= \frac{1}{2} \\
\implies & A = \left(  - \frac{2mE}{\hbar^{2}} \right)^{1/4}
\end{align}$$
So:
$$\psi(x)=\left\{\begin{align}
 & \left( - \frac{2mE}{\hbar^{2}} \right)^{1/4}\exp\left( -\sqrt{ - \frac{2mE}{\hbar^{2}} }x \right),x\geq0 \\
 & \left( - \frac{2mE}{\hbar^{2}} \right)^{1/4}\exp\left( \sqrt{ -\frac{2mE}{\hbar^{2} }x } \right),x<0
\end{align}\right.$$
Consider the boundary condition:
$$\left[\frac{d}{dx}\psi\right]_{-\epsilon}^{\epsilon}=- \frac{2m\lambda}{\hbar^{2}}\psi(0)$$
Then we obtain:
$$\begin{align}
 & -2\sqrt{ \frac{-2mE}{\hbar^{2}} }= - \frac{2m\lambda}{\hbar^{2}} \\
\implies & E =- \frac{m\lambda^{2}}{2\hbar^{2}}
\end{align}$$
Therefore:
$$\psi(x)=\left( \frac{m\lambda}{\hbar^{2}} \right)^{1/2}\exp\left( - \frac{m\lambda}{\hbar^{2}}|x| \right)$$
## b).
We have:
$$\begin{align}
\psi(x,t) & = \int dx^{'}K(x,t,x^{'},0)\psi(x^{'},0)
\end{align}$$
where $\psi(x^{'},0)$ is the wavefunction I found in $a)$, $K(x,t,x^{'},0)$ is the propagator of the free particle. Explicitly, I have:
$$\psi(x,t)=\int_{\mathbb{R}} dx^{'}\sqrt{ \frac{m}{2\pi i\hbar t} }\exp\left(  \frac{im(x-x^{'})^{2}}{2\hbar t} \right)\left( \frac{m\lambda}{\hbar^{2}} \right)^{1/2}\exp\left( - \frac{m\lambda}{\hbar^{2}}|x^{'}| \right)$$
# 4.
We compute:
$$\begin{align}
\psi(x^{'},t) & = \int_{\mathbb{R}} dxK(x^{'},t,x,0)N\exp\left( - \frac{x^{2}}{2a^{2}} \right) \\
 & = \int dx \sqrt{ \frac{m}{2\pi i\hbar t} }\exp\left( \frac{im(x^{'}-x)^{2}}{2\hbar t} \right)N\exp\left( - \frac{x^{2}}{2a^{2}} \right)  \\
\end{align}$$
Know that:
$$\begin{align}
\int_{\mathbb{R}} dx\exp\left( \frac{im(x^{'}-x)^{2}}{2\hbar t}- \frac{x^{2}}{2a^{2}} \right)  & = \int dx\exp\left( \left( \frac{im}{2\hbar t}- \frac{1}{2a^{2}} \right)\left( x- \frac{1}{2} \frac{im}{\hbar t}\left( \frac{im}{2\hbar t}- \frac{1}{2a^{2}} \right)^{-1}x^{'} \right)^{2}- \frac{1}{4} \frac{m^{2}}{\hbar^{2}t^{2}}\left( \frac{im}{2\hbar t}- \frac{1}{2a^{2}} \right)^{-1}x^{'2}+ \frac{im}{2\hbar t}x^{'2} \right) \\
 & =\int dx\exp\left( \left(  \frac{im}{2\hbar t}- \frac{1}{2a^{2}} \right)\left( x- \frac{1}{2} \frac{im}{\hbar t}\left(  \frac{im}{2\hbar t}- \frac{1}{2a^{2}} \right)^{-1}x^{'} \right)^{2}+ \frac{im}{2\hbar t}\left(  \frac{m}{-m- \frac{i\hbar t}{a^{2}}}+1 \right)x^{'2} \right) \\  

 & = \frac{\sqrt{ \pi }}{\sqrt{ -\frac{im}{2\hbar t}+ \frac{1}{2a^{2}} }}\exp\left( \frac{im}{2\hbar t}\left(  \frac{m}{-m- \frac{i\hbar t}{^{2}}}+1 \right)x^{'2} \right)
\end{align}$$
Therefore, I have:
$$\begin{align}
\psi(x^{'},t) & = \frac{\sqrt{ \pi }}{\sqrt{ - \frac{im}{2\hbar t}+ \frac{1}{2a^{2}} }}\exp\left(  \frac{im}{2\hbar t}\left(  \frac{m}{-m- \frac{i\hbar t}{a^{2}}}+1 \right)x^{'2} \right)N \sqrt{ \frac{m}{2\pi i\hbar t} } \\
 & = \sqrt{  \frac{m}{m+ \frac{i\hbar t}{a^{2}}} }N\exp\left(  \frac{im}{2\hbar t}\left(  \frac{m}{-m- \frac{i\hbar t}{a^{2}}}+1 \right)x^{'2} \right) \\
 & = \sqrt{ \frac{m}{m+ \frac{i\hbar t}{a^{2}}} }N\exp\left( -\frac{m}{2a^{2}} \frac{1}{m+ \frac{i\hbar t}{a^{2}}}x^{'2} \right) \\
 & = \sqrt{ \frac{ma^{2}}{ma^{2}+i\hbar t} }N\exp\left( - \frac{m}{2a^{2}m+ 2i\hbar t}x^{'2} \right)
\end{align}
$$


