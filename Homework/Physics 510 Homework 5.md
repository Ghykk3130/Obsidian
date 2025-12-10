# 1.
## a).
Observe that if $n$ is odd, then $\langle x^n\rangle$ vanishes. This is because the integrand is an odd function.

Then assume $n$ is even. Then:
$$\begin{align}
\int_{-\infty}^{\infty}dx x^n \exp(-ax^{2}) & =\int dx \frac{\partial^{n/2}}{\partial(-a)^{n/2}} \exp(-ax^{2}) \\
 & = (-1)^{n/2} \left(  \frac{d}{da} \right)^{n/2}\int dx\exp(-ax^{2}) \\
 & =(-1)^{n/2}\left(  \frac{d}{da} \right)^{n/2}\left(  \frac{\sqrt{ \pi }}{\sqrt{ a }} \right) \\
 & = (-1)^{n/2}\left( - \frac{1}{2} \right) \dots\left( - \frac{1}{2}- \left( \frac{n}{2}-1 \right) \right)a^{- \frac{1}{2}- \frac{n}{2}} \sqrt{ \pi } \\
 & = (-1)^n \left(  \frac{1}{2} \cdot \frac{3}{2}\cdot\dots \cdot \frac{n-1}{2} \right)a^{- \frac{1}{2}- \frac{n}{2}}\sqrt{ \pi } \\
 & = \frac{1}{2}\cdot \frac{3}{2}\cdot \dots \cdot \frac{n-1}{2}a^{- n/2}\sqrt{ \frac{\pi}{a} }
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


First observe that the integrand is an even function. So:
$$\begin{align}
K_{\nu}(x) & =\int_{0}^{\infty}dt\exp(-x\cosh t)\cosh \nu t \\ & =\frac{1}{2}\int_{-\infty}^{\infty}dt\exp(-x\cosh t)\cosh \nu t \\
\end{align}$$
### Method 1
We have that:
$$\cosh \nu t= \frac{\exp(\nu t)+\exp(-\nu t)}{2}$$
Therefore:
$$K_{\nu}(x)= \frac{1}{4}\int dt\exp(-x\cosh t+\nu t)+ \frac{1}{4}\int dt\exp(-x\cosh t-\nu t)$$
We know that as $x\rightarrow \infty$, we have:
$$\begin{align}
 & -x\cosh t+\nu t=-x\left( \cosh t- \frac{\nu t}{x} \right) \sim-x\cosh t \\
 & -x\cosh t-\nu t=-x\left( \cosh t+ \frac{\nu t}{x} \right)\sim-x\cosh t
\end{align}$$
Then:
$$\begin{align}
K_{\nu}(x) & = \frac{1}{4}\int dt\exp(-x\cosh t)+ \frac{1}{4}\int dt \exp(-x\cosh t) \\
 & = \frac{1}{2}\int dt\exp(-x\cosh t),\text{ for }x\gg 1
\end{align}$$
We to find the maximum of $-\cosh t$, we set:
$$\begin{align}
 & \frac{d}{dt}(-\cosh t)=-\sinh t=0 \\
\implies & t=0
\end{align}$$
Also:
$$\begin{align}
\frac{d^{2}}{dt^{2}}(-\cosh t)|_{t=0} & = -\cosh(0)=-1
\end{align}$$
$$-\cosh(0)=-1$$
Therefore we have:
$$\begin{align}
K_{\nu}(x) & = \frac{1}{2}e^{x(-\cosh(0))} \sqrt{  \frac{2\pi}{-x\left(  \frac{d^{2}}{dt^{2}(-\cosh t)} \right)|_{t=0}} } \\
 & = \frac{1}{2}e^{-x} \sqrt{  \frac{2\pi}{x} },\text{ for }x\gg 1
\end{align}$$
### Method 2
We observe that:
$$\begin{align}
K_{\nu}(x) & =\int_{0}^{\infty}dt\exp(-x\cosh t)\cosh \nu t \\ & =\frac{1}{2}\int_{-\infty}^{\infty}dt\exp(-x\cosh t)\cosh \nu t \\

 & = \frac{1}{2} \frac{1}{\nu} \int d(\sinh vt)\exp(-x\cosh t)
\end{align}$$

We set $\tau:=\sinh vt$. Then we want to find the inverse. We have:
$$\begin{align}
\tau & =\sinh vt\implies t= \frac{1}{\nu}\sinh ^{-1}(\tau)
\end{align}$$
Then we know:
$$K_{\nu}(x)= \frac{1}{2} \frac{1}{\nu}\int d\tau \exp\left( -x \cosh\left(  \frac{1}{\nu}\sinh ^{-1}(\tau) \right) \right)$$
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
K_{\nu}(x) & \approx  \frac{1}{2} \frac{1}{\nu}e^{xf(0)}\sqrt{  \frac{2\pi}{-xf^{''}(0)} } \\
 & = \frac{1}{2} \frac{1}{\nu}e^{-x}\sqrt{  \frac{2\pi}{x / \nu^{2}} } \\
 & = \frac{1}{2} e^{-x}\sqrt{ \frac{2\pi}{x} }
\end{align}$$

# 3.
>[!Lemma 1]
>$$\delta(f(x))=\sum_{i} \frac{\delta(x-x_{i})}{|f^{'}(x_{i})|},\text{ where }x_{i}\text{ are the zeros.}$$
### Proof.
Let $\{ x_{i} \}$ be a sequence of zeros of $f$. WLOG assume that $x_{1}<x_{2}<\dots<x_{N}$ Since the set $\{ x_{i} \}$ is discrete, pick a sequence of points $\{ y_{j} \}$ such that $f$ is monotone in $[y_{j-1},y_{j}],\forall j$. Then $x_{i}$'s have to fall into some of such intervals. We set:
$$g_{j}:=\mathbb{1}_{[y_{j-1},y_{j}]}f$$
Then $g_{j}$ is monotone $\forall j$. Now it suffices to show that:
$$\delta(g_{j}(x))=\frac{\delta(x-x_{i}^{(j)})}{|g_{j}^{'}(x_{i}^{j})|},\text{ where }x_{i}^{j} \text{ is the zero point of }f\text{ that falls into }[y_{j-1},y_{j}] $$
Then $\forall A\subset \mathbb{R}$, if $x_{i}^{j}\in A$, we have:
$$\begin{align}
\int_{x\in A}d(g_{j}(x)) \frac{\delta(x-x_{i}^{j})}{|g^{'}(x_{i}^j)|} & = \int dx |g_{j}^{'}(x)| \frac{\delta(x-x_{i}^j)}{|g^{'}(x_{i}^j)|} \\
 & = |g_{j}^{'}(x)_{i}^j| \cdot \frac{1}{|g_{j}^{'}(x_{i}^j)|} \\
 & =1=\int d(g_{j}(x))\delta(g_{j}(x))
\end{align}$$
Since $A$ is arbitrary, we have:
$$\delta(g_{j}(x))=\frac{\delta(x-x_{i}^{(j)})}{|g_{j}^{'}(x_{i}^{j})|}$$
If $x_{i}^j \notin A$, obviously I have:
$$\delta(g_{j}(x))=0=\frac{\delta(x-x_{i}^{(j)})}{|g_{j}^{'}(x_{i}^{j})|}$$
Then since $f=\sum_{j}g_{j}$, done.
>[!Right]
>$\blacksquare$

Generalize to continuum, we get:

>[! Corollary 1]
$$\delta(f(\vec{x}))=\int_{f^{-1}(\{ 0 \})}dS^{'} \frac{\delta(\vec{x}-\vec{x}^{'})}{|\nabla f|_{\vec{x}^{'}}|}$$

Then we need to evaluate:
$$\begin{align}
\Omega & = \frac{1}{h^{3N}} \int dq_{1}\dots dq_{3N}dp_{1}\dots dp_{3N} \delta(E-H(p_{i},q_{i})) \\
 & = \frac{1}{h^{3N}}\int d\Omega \int_{H^{-1}(E)} dS^{'} \frac{\delta(q_{1}-q_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'})}{|\nabla(E-H)|}
\end{align}$$
We know that:
$$H=\sum_{i} \frac{p^{2}_{i}}{2m}$$
Set $H=E$ to get:
$$\sqrt{ \sum_{i}p_{i}^{2} }=\sqrt{ 2mE }$$
Therefore:
$$H^{-1}(E)= \mathbb{R}^{3N}\times \partial B(0,\sqrt{ 2mE }),\text{ where } B(0,\sqrt{ 2mE })\text{ is the 3N-dimensional ball centered at }0$$
We also know that:
$$\begin{align}
\nabla(E-H) & =-\nabla H \\
 & = -\sum_{i} \frac{p_{i}}{m} \hat{p_{i}} \\
\implies & |\nabla(E-H)|=\sqrt{ \sum_{i} \left( \frac{p_{i}}{m} \right)^{2} }
\end{align}$$
Note that in the integral, this gradient need to be evaluated at the coordinates with prime. Then I have:
$$\begin{align}
\int_{H^{-1}(E)} dS^{'} \frac{\delta(q_{1}-q_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'})}{|\nabla(E-H)|} & =\int_{\mathbb{R}^{3N}}dq^{'}_{1}\dots  dq^{'}_{3N} \delta(q_{1}-q_{1}^{'})\dots\delta(q_{3N}-q_{3N}^{'}) \int_{ \partial B(0,\sqrt{ 2mE })} \frac{\delta(p_{1}-p_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'})}{\sqrt{ \sum_{i}\left(  \frac{p_{i}}{m} \right)^{2} }} \\
 & = 1 \cdot \int_{\partial B(0,\sqrt{ 2mE })}dS^{'}_{p} \delta(p_{1}-p_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'})\frac{1}{\sqrt{ \sum_{i} \left(  \frac{p_{i}^{'}}{m} \right)^{2} }}
\end{align}$$
Now we can evaluate:
$$\begin{align}
\Omega & = \frac{1}{h^{3N}}\int d\Omega\int_{\partial B(0,\sqrt{ 2mE })}dS^{'}_{p} \delta(p_{1}-p_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'})\frac{1}{\sqrt{ \sum_{i} \left(  \frac{p_{i}^{'}}{m} \right)^{2} }}  \\
 & = \frac{1}{h^{3N}}\int dq_{1}\dots dq_{3N} \int_{\partial B(0,\sqrt{ 2mE })}dS^{'}_{p}\int dp_{1}\dots dp_{3N} \delta(p_{1}-p_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'} ) \frac{1}{\sqrt{ \sum_{i}\left(  \frac{p_{i}^{'}}{m} \right)^{2} }}
\end{align}$$
We have:
$$\begin{align}
\int dq_{1}\dots dq_{3N} & = \int_{0}^L dq_{1}\dots \int_{0}^Ldq_{3N} \\
 & =L^{3N}=V^N
\end{align}$$
We also have:
$$\begin{align}
\int dp_{1}\dots dp_{3N} \delta(p_{1}-p_{1}^{'})\dots\delta(p_{3N}-p_{3N}^{'} ) \frac{1}{\sqrt{ \sum_{i}\left(  \frac{p_{i}^{'}}{m} \right)^{2} }} & = \frac{1}{\sqrt{ \sum_{i}\left(  \frac{p_{i}^{'}}{m} \right)^{2} }}
\end{align}$$
Then the expression reduces to:
$$\begin{align}
\Omega & = \frac{V^N}{h^{3N}}\int_{\partial B(0,\sqrt{ 2mE })}dS^{'}_{p} \frac{1}{\sqrt{ \sum_{i}\left(  \frac{p_{i}^{'}}{m} \right)^{2} }}
\end{align}$$
This is just an integration on an 3N-dimensional sphere. We change to spherical coordinates to get:
$$\sqrt{ \sum_{i}\left(  \frac{p_{i}^{'}}{m} \right)^{2} }= \sqrt{ \frac{2E}{m} }$$
Therefore:
$$\begin{align}
\int_{\partial B(0,\sqrt{ 2mE })}dS^{'}_{p} \frac{1}{\sqrt{ \sum_{i} \left(  \frac{p_{i}^{'}}{m} \right)^{2} }}  & =\int_{\partial B(0,\sqrt{ 2mE })} (2mE)^{ \frac{3N-1}{2}} \frac{1}{\sqrt{ \frac{2E}{m} }}\sin \phi_{1}sin^{2}\phi_{2}\dots \sin^{3N-2}\phi_{3N-2}d\phi_{1}\dots d\phi_{3N-2}d\theta  \\
 & = (2mE)^{\frac{3N-1}{2}} \left( \frac{2E}{m} \right)^{-1/2} \frac{2\pi^{3N/2}}{\Gamma\left( \frac{3N}{2} \right)} \\
 & = (2E)^{3N/2-1}m^{3N/2} \frac{2\pi^{3N/2}}{\Gamma\left( \frac{3N}{2} \right)}
\end{align}$$
This is because the integral above is separable, and I have:
$$\begin{align}
 & \int_{0}^{\pi}\sin \phi_{1 }d\phi_{1}=2 \\
 & \int_{0}^{\pi}\sin ^{2}\phi_{2}d\phi_{2}= \frac{\pi}{4 } \\
 & \dots \\
 & \int_{0}^{\pi}\sin^{3N-2}\pi_{3N-2}d\phi_{3N-2}=\sqrt{ \pi } \frac{\Gamma\left( \frac{3N-1}{2} \right)}{\Gamma\left( \frac{3N-2}{2} \right)} \\
 & \int_{0}^{2\pi}d\theta=2\pi
\end{align}$$
Then:
$$\Omega= \frac{V^N}{h^{3N}} \frac{(2\pi mE)^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)E}$$
Therefore:
$$\begin{align}
\ln(\Omega) & =\ln\left(  \frac{V^N}{h^{3N}} \frac{(2\pi mE)^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)E} \right) \\
 & = N \ln\left(  \frac{V}{h^{3}} (2\pi mE)^{3/2} \right)-\ln\left( \Gamma\left( \frac{3N}{2} \right) \right)-\ln E
\end{align}$$
If we take $N\rightarrow \infty$, we get:
$$\begin{align}
\ln(\Omega) & =N\ln\left(  \frac{V}{h^{3}}(2\pi mE)^{3/2} \right) -\frac{3N}{2}\ln\left(  \frac{3N}{2} \right)+ \frac{3N}{2} \\
 & = N\ln\left( \frac{V}{h^{3}}  \left(  \frac{4\pi mE}{3N } \right)^{3/2}\right)+ \frac{3}{2}N
\end{align}$$
Then we have:
$$S=kN\left[\ln\left( \frac{V}{h^{3}}  \left(  \frac{4\pi mE}{3N } \right)^{3/2}\right)+ \frac{3}{2}\right]$$

# 4.
## a).
Fix the system  energy $U$. Want to find the number of states with total energy $U$. Obviously, there are $\frac{U}{\hbar \omega_{0}}$ quanta of energies for us to distribute among the $3N$ degrees of freedom. 

This is equivalent to the problem of partition a set of $\frac{U}{\hbar \omega_{0}}$ elements into $3N$ subsets (possibly empty set.) We add $3N$ elements such that all the sets are non-empty. So we partition a set of $\frac{U}{\hbar \omega_{0}}+3N$ elements into $3N$ non-empty subsets. This is equivalent to putting $3N-1$ partitions into $\frac{U}{\hbar \omega_{0}}+3N-1$ slots. So:
$$\Omega(U,N)= \frac{\left(  \frac{U}{\hbar \omega_{0}} +3N-1\right)!}{(3N-1)!\left(  \frac{U}{\hbar \omega_{0}} \right)!}$$
So as $N\rightarrow \infty$:
$$\begin{align}
\ln \Omega & \approx \left(  \frac{U}{\hbar \omega_{0}}+3N-1 \right)\ln\left(  \frac{U}{\hbar \omega_{0}}+3N-1 \right)- \left( \frac{U}{\hbar \omega_{0}}+3N-1 \right)- (3N-1)\ln(3N-1)+(3N-1)- \frac{U}{\hbar \omega_{0}}\ln\left(  \frac{U}{\hbar \omega_{0}} \right)+ \frac{U}{\hbar \omega_{0}} \\
 & = (3N-1)\ln\left(  \frac{\frac{U}{\hbar \omega_{0}}}{3N-1}+1 \right)+ \frac{U}{\hbar \omega_{0}}\ln\left(  1 + (3N-1) \frac{\hbar \omega_{0}}{U} \right) \\
 & \approx 3N\ln\left(  \frac{1}{3N} \frac{U}{\hbar \omega_{0}}+1 \right)+ \frac{U}{\hbar \omega_{0}}\ln\left( 1+ 3N \frac{\hbar \omega_{0}}{U} \right)
\end{align}$$
Therefore:
$$S=k\ln \Omega=3Nk\ln\left(  \frac{1}{3N} \frac{U}{\hbar \omega_{0}}+1 \right)+ k\frac{U}{\hbar \omega_{0}}\ln\left( 1+ 3N \frac{\hbar \omega_{0}}{U} \right)$$
## b).
First we observe that:
$$\begin{align}
\frac{1}{T} & = \left(  \frac{\partial S}{\partial U} \right)_{N}  \\
 &  =  3Nk \frac{ \frac{1}{3N} \frac{1}{\hbar \omega_{0}}}{ \frac{1}{3N} \frac{U}{\hbar \omega_{0}}+1}+ \frac{k}{\hbar \omega_{0}} \ln\left(  1+ 3N \frac{\hbar \omega_{0}}{U} \right)+ k \frac{U}{\hbar \omega_{0}} \frac{ - \frac{3N\hbar \omega_{0}}{U^{2}}}{1+ 3N \frac{\hbar \omega_{0}}{U}} \\
 & = \frac{k}{\hbar \omega_{0}}\ln\left( 1+ 3N \frac{\hbar \omega_{0}}{U} \right)
\end{align}$$
Therefore, we can solve for $U$:
$$\begin{align}
 &  \frac{\hbar \omega_{0}}{kT}= \ln\left( 1+3N \frac{\hbar \omega_{0}}{U} \right) \\
\implies & \exp\left(  \frac{\hbar \omega_{0}}{kT} \right)=1+3N \frac{\hbar \omega_{0}}{U} \\
\implies & U= 3N\hbar \omega_{0} \frac{1}{\exp\left(  \frac{\hbar \omega_{0}}{kT} \right)-1}
\end{align}$$
Know that:
$$C=\left( \frac{\partial U}{\partial T} \right)_{N}= -\frac{1}{T^{2}} \left( \frac{\partial U}{\partial( 1 / T)} \right)_{N}$$
we first evaluate:
$$\begin{align}
\left(  \frac{\partial U}{\partial( 1 / T)} \right)_{N} & =3N\hbar \omega_{0} \frac{-1}{\left( \exp\left(  \frac{\hbar \omega_{0}}{kT} \right)-1 \right)^{2}} \cdot \frac{\hbar \omega_{0}}{k}\exp\left(  \frac{\hbar \omega_{0}}{kT} \right) \\
 & = -\frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{\exp\left(  \frac{\hbar \omega_{0}}{kT}\right) + \exp\left( - \frac{\hbar \omega_{0}}{kT} \right)-2}
\end{align}$$
Then:
$$\begin{align}
C & = \frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{T^{2}} \frac{1}{\exp\left(  \frac{\hbar \omega_{0}}{kT}\right) + \exp\left( - \frac{\hbar \omega_{0}}{kT} \right)-2} \tag{1} \\
 & = \frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{T^{2}} \frac{1}{2\cosh\left(  \frac{\hbar \omega_{0}}{kT} \right)-2} \\
 & = 3Nk \left(  \frac{\hbar \omega_{0}}{2kT\sinh\left(  \frac{\hbar \omega_{0}}{2kT} \right)} \right)^{2}
\end{align}$$
A schematic plot (the units are not specified because this is just a schematic to show the overall trend):
<div style="text-align:center">
<img src="heat_capacitance (2).png" width="400">
</div>
## c).
Clearly, as $T\rightarrow 0+$, we have:
$$\begin{align}
C  & \approx \frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{T^{2}} \frac{1}{\exp\left(  \frac{\hbar \omega_{0}}{kT} \right)} \\
 & = \frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{T^{2}}\exp\left( - \frac{\hbar \omega_{0}}{kT} \right)
\end{align}$$

As $T\rightarrow \infty$, I can approximate the denominator by:
$$\begin{align}
\exp\left(  \frac{\hbar \omega_{0}}{kT} \right)+ \exp\left(  - \frac{\hbar \omega_{0}}{kT} \right)-2  & \approx 1+ \frac{\hbar \omega_{0}}{kT}+ \frac{1}{2}\left(  \frac{\hbar \omega_{0}}{kT} \right)^{2}+ 1- \frac{\hbar \omega_{0}}{kT}+ \frac{1}{2}\left(  \frac{\hbar \omega_{0}}{kT} \right)^{2}-2 \\
 & = \left(  \frac{\hbar \omega_{0}}{kT} \right)^{2}
\end{align}$$
Then substitute this into $1)$ to find:
$$C=\frac{3N(\hbar \omega_{0})^{2}}{k} \frac{1}{T^{2}} \left(  \frac{kT}{\hbar \omega_{0}} \right)^{2}=3Nk$$
# 5.
First find the number of states. Let $E$ be the total energy. Then we need to choose $\frac{E}{\epsilon}$ particles to be in the excited state. So:
$$\Omega= \frac{N!}{\left(  \frac{E}{\epsilon} \right)!\left( N- \frac{E}{\epsilon} \right)!}$$
Then as $N\rightarrow \infty$, we have:
$$\begin{align}
\ln \Omega  & \approx N\ln(N)-N- \frac{E}{\epsilon}\ln\left( \frac{E}{\epsilon} \right)+ \frac{E}{\epsilon}- \left( N- \frac{E}{\epsilon} \right)\ln\left( N- \frac{E}{\epsilon} \right)+ \left( N- \frac{E}{\epsilon} \right) \\
 & = \left( N- \frac{E}{\epsilon} \right)\ln\left(  \frac{N}{N- \frac{E}{\epsilon}} \right)+ \frac{E}{\epsilon}\ln\left( N \frac{\epsilon}{E} \right) 
\end{align}$$
Therefore:
$$S=k\left( N- \frac{E}{\epsilon} \right)\ln\left(  \frac{N}{N- \frac{E}{\epsilon}} \right)+ k\frac{E}{\epsilon}\ln\left( N \frac{\epsilon}{E} \right)$$
Then I can find the temperature:
$$\begin{align}
\frac{1}{T} & =\left( \frac{\partial S}{\partial E} \right)_{N} \\
 & = \frac{k}{\epsilon}\ln\left( N \frac{\epsilon}{E}-1 \right)
\end{align}$$

Then we found $E(T)$:
$$E(T)= \frac{N\epsilon}{1+\exp\left( \frac{\epsilon}{kT} \right)} \tag{2}$$
here $E=\alpha N\epsilon$. We have:
$$\begin{align}
C & = \left(\frac{\partial E}{\partial T}\right)_{N} \\
  & = N\epsilon \frac{-1}{\left( 1+\exp\left(  \frac{\epsilon}{kT} \right) \right)^{2}} \cdot \left( - \frac{\epsilon}{kT^{2}} \right)\exp\left(  \frac{\epsilon}{kT} \right) \\
 & = \frac{N\epsilon^{2}}{kT^{2}} \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+ \exp\left(  - \frac{\epsilon}{kT} \right)+2} \\
 & = \frac{N\epsilon^{2}}{kT^{2}} \frac{1}{2\cosh\left( \frac{\epsilon}{kT} \right)+2}
\end{align}$$
## b).
Inverse $1)$ to find:
$$\begin{align}
\alpha N\epsilon & = \frac{N\epsilon}{1+\exp\left(  \frac{\epsilon}{kT} \right)} \\
\implies & \frac{1}{\alpha}-1  =\exp\left(  \frac{\epsilon}{kT} \right) \\
\implies  & \ln\left(  \frac{1}{\alpha}-1 \right) = \frac{\epsilon}{kT} \\
\implies & T= \frac{\epsilon}{k} \frac{1}{\ln\left(  \frac{1}{\alpha}-1 \right)}
\end{align}$$
Observe from the denominator that $T$ changes sign around $\alpha= \frac{1}{2}$. If $\frac{1}{2} <\alpha<1$, then $T<0$. If $0<\alpha< \frac{1}{2}$, the $T>0$.

## c).
### i).
No, it cannot. Consider the ideal monatomic gas being studies as an isolated system, with $V,M$ fixed. (I am not talking about the situation in this problem. I just study its property in general. The notation is strange here because $M$ is the number of particles. ) if I put in more energy into the system, the energy surface in the phase space must expand, and the number of accessible states increases. Then I must have:
$$\left( \frac{\partial S}{\partial U} \right)_{V,M}>0$$

Then I must have:
$$\frac{1}{T}>0\implies T>0$$
So when this ideal gas is placed in thermal contact with the 2-state system, at equilibrium, their temperatures must be the same. And this temperature has to therefore also be positive. 
### ii).
Let $T_{f}$ be the final temperature, $T_{i}=\frac{\epsilon}{k} \frac{1}{\ln\left(  \frac{1}{\alpha}-1 \right)}$ be the initial temperature of the 2-state system. Then since the system is isolated, I must have:
$$\int_{T_{i}}^{T_{f}}CdT=\int_{T_{0}}^{T_{f}}C_{gas}dT$$
We first find the antiderivative of $C$:
$$\begin{align}
\int CdT & = \int\frac{N\epsilon^{2}}{kT^{2}} \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+ \exp\left(  - \frac{\epsilon}{kT} \right)+2}dT \\
 & = \frac{N\epsilon^{2}}{k}\int \frac{1}{T^{2}} \frac{\exp\left(  \frac{\epsilon}{kT} \right)}{\left( \exp\left(  \frac{\epsilon}{kT} \right)+1 \right)^{2}}dT \\
 & = \frac{N\epsilon^{2}}{k}\left(  -\frac{k}{\epsilon} \right)\int \frac{1}{\left( \exp\left(  \frac{\epsilon}{kT} \right)+1 \right)^{2} }d\left(  \exp\left(  \frac{\epsilon}{kT} \right)+1 \right) \\
 & = \frac{N\epsilon^{2}}{k} \frac{k}{\epsilon} \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+1} \\
 & = N\epsilon \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+1} 
\end{align}$$
I ignored the integration constant because we are going to do definite integrals later anyway. The antiderivative of $C_{gas}$ is easy to find:
$$\begin{align}
\int C_{gas}dT & =\int \frac{3}{2}MkdT=\frac{3}{2}MkT
\end{align}$$
Then to find the final temperature, set:
$$\begin{align}
 & N\epsilon \frac{1}{\exp\left( \frac{\epsilon}{kT_{f}} \right)+1}- N\epsilon \frac{1}{\exp\left(  \frac{\epsilon}{kT_{i}} \right)+1}= \frac{3}{2}Mk(T_{f}-T_{0}) \\
\implies & N\epsilon \frac{1}{\exp\left(  \frac{\epsilon}{kT_{f}} \right)+1}-\alpha N\epsilon= \frac{3}{2}MkT_{f}- \frac{3}{2}MkT_{0}
\end{align}$$
This equation is generally transcendental, so we do not have an explicit solution of $T_{f}$. But $T_{f}$ is determined by the equation above.



