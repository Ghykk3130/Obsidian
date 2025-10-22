# 1.
## a.
We compute:
$$\begin{align}
a \ket{\lambda} & = a e^{-|\lambda|^{2}/2 }e^{\lambda a^{\dagger}}\ket{0}  \\
 & = e^{-|\lambda|^{2}/2}a \sum_{j} \frac{1}{j!} \lambda^j (a^{\dagger})^j \ket{0} \\
 & = e^{-|\lambda|^{2}/2} a \sum \frac{1}{j!} \sqrt{ j! } \ket{j} \\
 & = e^{-|\lambda|^{2}/2}\sum \frac{1}{j!}\lambda^j \sqrt{ j! } \sqrt{ j }\ket{j-1} \\
 & = e^{-|\lambda|^{2}/2} \lambda\sum \frac{1}{(j-1)!} \lambda^{j-1}\sqrt{ (j-1)! } \ket{j-1} \\
 & = e^{-|\lambda|^{2}/2}\lambda\sum \frac{1}{(j-1)!} (a^{\dagger})^{j-1}\ket{0} \\
 & = \lambda \ket{\lambda}       
\end{align}$$
So $\ket{\lambda}$ is an eigenket of the annihilation operator.

Now compute the modulus:
$$\begin{align}
\bra{\lambda} \lambda \rangle & = \bra{0} e^{-|\lambda|^{2}/2}e^{\lambda a} e^{-|\lambda|^{2}/2} e^{\lambda a^{\dagger}}\ket{0} \\
 & = e^{-|\lambda|^{2}} \bra{0} e^{\lambda ^{*} a} e^{\lambda a^{\dagger}}\ket{0} \\
 & = e^{-|\lambda|^{2}} \left( \sum_{k} \frac{1}{k!} \lambda ^{*k} \bra{0} a^k  \right) \left( \sum_{j} \frac{1}{j!} \lambda^j a^{\dagger j} \ket{0}  \right) \\
 & = e^{-|\lambda|^{2}}\sum_{j,k} \frac{1}{k!} \frac{1}{j!} \lambda ^{*k}\lambda ^j \sqrt{ k! } \sqrt{ j! } \bra{k} j\rangle \\
 & = e^{-|\lambda|^{2}}\sum_{k} \frac{1}{k!} (|\lambda|^{2})^{k} \\
 & = e^{-|\lambda|^{2}}e^{|\lambda|^{2}} \\
 & = 1  
\end{align}$$
Then $\ket{\lambda}$ is normalized.

## b.
Know that:
$$\left\{ \begin{align}
 & a = \sqrt{  \frac{m\omega}{2\hbar} }\left(  x + \frac{ip}{m\omega} \right) \\
 &  a^{\dagger} = \sqrt{  \frac{m\omega}{2\hbar} } \left(  x- \frac{ip}{m\omega} \right)
\end{align}\right.$$
So:
$$
\left\{ \begin{align}
 & x = \sqrt{  \frac{\hbar}{2m\omega} }(a+a^{\dagger}) \\
 & p = i \sqrt{  \frac{m\omega \hbar}{2} }(a^{\dagger}-a)
\end{align} \right.
$$
Therefore I have:
$$\begin{align}
\langle x^{2} \rangle  & = \left\langle  \frac{\hbar}{2m\omega}(a+a^{\dagger})^{2} \right\rangle \\
 & = \frac{\hbar}{2m\omega}( \langle a^{2}\rangle+\langle a^{\dagger{2}}\rangle+ \langle aa^{\dagger}\rangle+\langle a^{\dagger}a \rangle) \\
 & = \frac{\hbar}{2m\omega}( \langle a^{2} \rangle+ \langle a^{\dagger 2}\rangle + \langle [a,a^{\dagger}] \rangle+ 2\langle a^{\dagger}a \rangle) \\
 & = \frac{\hbar}{2m\omega}( \langle a^{2} \rangle+ \langle a^{\dagger 2}\rangle + \langle \mathbb{1} \rangle+ 2\langle a^{\dagger}a \rangle)
\end{align}$$
Know that:
$$\begin{align}
 & \langle a^{2} \rangle = \bra{\lambda} a^{2} \ket{\lambda} = \lambda^{2} \bra{\lambda} \lambda \rangle = \lambda^{2} \\
 &  \langle a^{\dagger 2}\rangle= \bra{\lambda} a^{\dagger 2} \ket{\lambda} =\lambda ^{*2} \bra{\lambda}\lambda \rangle = \lambda ^{*2} \\
 & \langle a^{\dagger}a \rangle = \bra{\lambda} a^{\dagger} a \ket{\lambda} = \lambda ^{*} \lambda \bra{\lambda }\lambda \rangle = |\lambda|^{2}  
\end{align}$$
Then:
$$\begin{align}
\langle x^{2} \rangle = \frac{\hbar}{2m\omega}(\lambda^{2}+ \lambda ^{*2}+ 2|\lambda|^{2}+1)
\end{align}$$
Similarly:
$$\begin{align}
\langle x \rangle  & =\sqrt{  \frac{\hbar}{2m\omega} }(\langle a \rangle + \langle a^{\dagger} \rangle) \\
 & = \sqrt{  \frac{\hbar}{2m\omega} }(\lambda+\lambda ^{*}) 
\end{align}$$
So:
$$\begin{align}
\langle x^{2} \rangle- \langle x \rangle^{2} & = \frac{\hbar}{2m\omega}
\end{align}$$
I can do the same thing to $p$:
$$\begin{align}
\langle p^{2} \rangle & =- \frac{m\omega \hbar}{2}( \langle a^{2}\rangle+ \langle a^{\dagger 2} \rangle- \langle aa^{\dagger} \rangle-\langle a^{\dagger}a \rangle) \\
 & = - \frac{m\omega \hbar}{2}( \langle a^{2} \rangle + \langle a^{\dagger 2}\rangle - \langle \mathbb{1} \rangle -2 \langle aa^{\dagger}\rangle) \\
 & = - \frac{m\omega \hbar}{2}( \lambda^{2}+ \lambda ^{*2}- 2|\lambda|^{2}-1)
\end{align}$$
Also:
$$\begin{align}
\langle p \rangle & = i \sqrt{ \frac{m\omega \hbar}{2} }( \langle a^{\dagger}\rangle- \langle a \rangle) \\
 & = i \sqrt{  \frac{m\omega \hbar}{2} }(\lambda ^{*}-\lambda)
\end{align}$$
So:
$$\langle p^{2} \rangle - \langle p \rangle^{2}= \frac{m\omega \hbar}{2}$$
Then we obtain:
$$\begin{align}
\sigma_{x}^{2} \sigma_{p}^{2}= \frac{\hbar^{2}}{4}= \frac{1}{4}|\langle [x,p]\rangle|^{2}
\end{align}$$
## c.
We compute:
$$\begin{align}
\ket{\lambda}  & = e^{-|\lambda|^{2}/2 }\sum_{j} \frac{1}{j!}\lambda^{j}  (a^{\dagger})^{j} \ket{0}  \\
 & = e^{-|\lambda|^{2}/2} \sum \frac{1}{j!} \lambda^{j} \sqrt{ j! }\ket{j} 
\end{align}$$
Then we know:
$$f(j)= e^{-|\lambda|^{2}/2} \frac{1}{j!}\lambda^{j} \sqrt{ j! }$$
Then:
$$\begin{align}
|f(j)|^{2} & =e^{-|\lambda|^{2}} \left(  \frac{1}{j!} \right)^{2} (|\lambda|^{2})^j j! \\
 & = e^{-|\lambda|^{2}} \frac{1}{j!} ( |\lambda|^{2})^j
\end{align}$$
By comparing the coefficients, we found that its a Poisson distribution with $\mu=|\lambda|^{2}$

To find the maximum value of $|f(j)|^{2}$, assume that when $j=n$, increasing the index would lead to a decrease in the probability. Then suffices to solve:
$$\begin{align}
 & \frac{|f(n+1)|^{2}}{|f(n)|^{2}} \leq 1 \\
\implies &  \frac{1}{n+1}|\lambda|^{2} \leq 1 \\
\implies  & n \geq |\lambda|^{2}-1,\ n\in \mathbb{N}
\end{align}$$
If $|\lambda|^{2}\in \mathbb{N}$, then both $n=|\lambda|^{2}-1$ and $n=|\lambda|^{2}$ are equally likely. Therefore, conclude that $n=|\lambda|^{2}-1$ or $n=|\lambda|^{2}$ are both with the maximum probability. Then the energy associated with them are $\left( |\lambda|^{2}- \frac{1}{2} \right)\hbar \omega$ and $\left( |\lambda|^{2}+ \frac{1}{2} \right)\hbar \omega$ respectively. 

If $|\lambda|^{2}\not\in \mathbb{N}$, then 
$$n= \lceil |\lambda|^{2}-1 \rceil=\lceil |\lambda|^{2} \rceil-1   $$
Then the most probable energy is $\left(   \lceil |\lambda|^{2} \rceil-\frac{1}{2} \right)\hbar \omega$

## d.

Set $\lambda:= \sqrt{  \frac{m\omega}{2\hbar} }l$. Claim: translation with parameter $l$ generates a coherent state with $\lambda$.

We compute:
$$\begin{align}
\exp\left( - \frac{i}{\hbar}p l \right)\ket{0}  & = \exp\left(  \frac{1}{\hbar} \sqrt{ \frac{m\omega \hbar}{2} }(a^{\dagger}-a)l \right)\ket{0}  \\
 & = \exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger}- \sqrt{  \frac{m\omega}{2\hbar} }la \right)\ket{0} 
\end{align}$$
By Baker-Campbell-Hausdorff lemma, I know that:
$$\begin{align}
\exp\left( \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger} \right) \exp\left( - \sqrt{ \frac{m\omega}{2\hbar} }la \right)  & = \exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger}- \sqrt{ \frac{m\omega}{2\hbar} }la+ \frac{1}{2}\left( \sqrt{  \frac{m\omega}{2\hbar} }l \right)^{2}[a^{\dagger},-a]+ \frac{1}{12} \left(  \sqrt{ \frac{m\omega}{2\hbar} }l \right)^{3}[a^{\dagger},[a^{\dagger},a] +\frac{1}{12} \left(  \sqrt{ \frac{m\omega}{2\hbar} } l\right)^{2}[-a,[-a,a^{\dagger}]]+\dots\right)
\end{align}$$
Know that $[a^{\dagger},-a]=1$, so the higher order commutators vanish. Then I get:
$$\begin{align}
\exp\left( \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger}  \right)\exp\left( - \sqrt{  \frac{m\omega}{2\hbar} }la \right) & = \exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger} - \sqrt{ \frac{m\omega}{2\hbar} }la + \frac{1}{2} \frac{m\omega}{2\hbar}l^{2}\right) \\
 & = \exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger}- \sqrt{ \frac{m\omega}{2\hbar} }la \right) \exp\left(  \frac{1}{2} \frac{m\omega}{2\hbar}l^{2} \right)
\end{align}$$
Therefore:
$$\begin{align}
\exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger}-\sqrt{ \frac{m\omega}{2\hbar} }la \right)\ket{0}  & =\exp\left( - \frac{1}{2} \frac{m\omega}{2\hbar}l^{2} \right) \exp\left(  \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger} \right)\exp\left( - \sqrt{ \frac{m\omega}{2\hbar} } la\right) \ket{0} \\
 & = \exp\left( - \frac{1}{2} \frac{m\omega}{2\hbar}l^{2} \right)\exp\left( \sqrt{ \frac{m\omega}{2\hbar} }la^{\dagger} \right)\ket{0} \\
 & = \exp\left( - \frac{|\lambda|^{2}}{2} \right)\exp( \lambda a^{\dagger})\ket{0}   
\end{align}$$
This is indeed a coherent state. 

Notice that the second step is because the Taylor expansion of $\exp\left(  - \sqrt{ \frac{m\omega}{2\hbar} }la \right)\ket{0}$ would contain polynomials of $a$ acting on $\ket{0}$. But any $a^n\ket{0}$ with $n\neq 0$ would yield $0$. Therefore $\exp\left( - \sqrt{ \frac{m\omega}{2\hbar} }la \right)\ket{0}=\ket{0}$
