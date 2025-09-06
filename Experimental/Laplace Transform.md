# 1
>[! Definition 1]
>Let $f(t)$ be a function. The Laplace transform of $f$ is given by
>$F(s)=\int_{0-}^{\infty}f(t)e^{-st}dt$, where $s =\sigma+j\omega\in \mathbb{C}$

## Remark
Easy to see that $s$ has the dimension of time.

>[! Proposition 2]
>If $|f(t)| <\infty, \forall t>0$, then $\exists \sigma_{c} \in \mathbb{R}$ such that $\forall \sigma \geq \sigma_{c}$, we have $|F(s)| < \infty$. This is the region of convergence.

## Proof.

Easy to see that $|F(s)|\leq\int_{0-}^{\infty}|f(t)e^{-st}|dt=\int_{0-}^{\infty}f(t)e^{-\sigma t}dt$ if you recall the definition of integration.
Then the proposition is trivial.
>[!Right]
>$\blacksquare$

>[! Definition 2]
>Given $F(s)$, the inverse Laplace transform is given by
>$f(t)= \frac{1}{2\pi i}\int_{\sigma_{1-j\infty}}^{\sigma_{1}+j\infty}F(s)e^{st}ds$, for some $\sigma_{1} \geq \sigma_{c}$

## Remark
We haven't showed that this is well defined, but it actually is.

## Ex

$\mathcal{L}(\delta)=1$

# 2
>[! Proposition 1]
>$\mathcal{L}(af(t)+g(t))=a\mathcal{L}(f)+\mathcal{L}(g)$

>[!Proposition 2]
>$\mathcal{L}(f(at))= \frac{1}{a}F\left( \frac{s}{a} \right)$

## Proof.
$\mathcal{L}(f(at))=\int_{0-}^{\infty}f(at)e^{-st}dt= \frac{1}{a}\int_{0-}^{\infty}f(at)e^{- \frac{s}{a}at}d(at)= \frac{1}{a}F\left( \frac{s}{a} \right)$
>[!Right]
>$\blacksquare$

>[!Proposition 3]
>$\mathcal{L}(f(t-a) \mathbb{1}_{[a,\infty)}(t))=e^{-as}F(s)$

## Proof.
$\mathcal{L}(f(t-a)\mathbb{1}_{[a,\infty)})=\int_{a-}^{\infty}f(t-a)e^{-st}dt=e^{-as}\int_{a-}^{\infty}f(t-a)e^{-s(t-a)}d(t-a) =e^{-as}F(s)$
>[!Right]
>$\blacksquare$

>[! Proposition 4]
>$L[e^{-at}f(t)]=F(a+s)$

>[! Proposition 5]
>$\mathcal{L}[f^{'}(t)]=sF(s)-f(0-)$











