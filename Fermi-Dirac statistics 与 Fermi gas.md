


>[!Note] Definition 1
>Define the Fermi-Dirac integral:
>$$f_{n}(\mathcal{z})=\frac{1}{\Gamma(n)}\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^x+1}\text{ for }0\leq z < \infty$$

>[!Note] Proposition 1
>$$f_{n}(\mathcal{z})=\sum_{k}(-1)^{k-1} \frac{\
\mathcal{z}^k}{k!}\text{ for }\mathcal{z}<1$$
## Proof.
我们有：
$$\begin{align}
\int_{0}^{\infty}dx\frac{x^{n-1}}{\mathcal{z}^{-1}e^x+1} & = \int dx\frac{x^{n-1}\mathcal{z}e^{-x}}{1+\mathcal{z}e^{-x}} \\
 & = \int dxx^{n-1}\mathcal{z}e^{-x} \sum_{k=0}^{\infty}(-\mathcal{z}e^{-x})^k \\
 & = \int dxx^{n-1}\sum_{k}(-1)^k\mathcal{z}^{k+1}e^{-(k+1)x} \\
 & = \int dx x^{n-1} \sum_{k=1}^{\infty}(-1)^{k-1}\mathcal{z}^ke^{-kx} \\
 & = \sum_{k}(-1)^{k-1}\mathcal{z}^{k}\int dx x^{n-1}e^{-kx} \\
 & = \sum_{k}(-1)^{k-1}\mathcal{z}^k\left(  \frac{1}{k } \right)^n \Gamma(n)
\end{align}$$
其中为了使得几何级数收敛，我们要求$|-\mathcal{z}e^{-x}|<1,\forall x\geq 0 \implies \mathcal{z}<1$。
所以：
$$\begin{align}
f_{n}(\mathcal{z}) & = \frac{1}{\Gamma(n)}\int dx x^{n-1} \frac{1}{\mathcal{z}^{-1}e^x+1}  \\
 & = \sum_{k}(-1)^{k-1} \frac{\mathcal{z}^k}{k^n}
\end{align}$$

>[!Right]
>$\blacksquare$

>[!Note] Proposition 2 (Sommerfeld expansion)
>$$f_{n}(\mathcal{z})= \frac{\mathcal{z}^n}{\Gamma(n+1)}\left[1+\sum_{j=1}^{\infty}2 \binom{n-1}{2j-1}ny^{-2j}\Gamma(2j)\zeta(2j)\left( 1- \frac{1}{2^{2j-1}} \right)\right],\ y=\ln\mathcal{z}\text{  for }\mathcal{z}\rightarrow \infty$$
## Proof.
我们令$\mathcal{z}=e^y$，$F_{n}(y)=\Gamma(n)f_{n}(\mathcal{z})$。于是便有：
$$\begin{align}
F_{n}(y) & = \int_{0}^{\infty}dx \frac{x^{n-1}}{e^{x-y}+1} \\
 
\end{align}$$
我们考虑再$y$处给它来个truncation。就有：
$$\begin{align}
F_{n}(y) & = \int_{0}^{\infty}dx x^{n-1}\left( \mathbb{1}_{x\leq y}+ \frac{1}{e^{x-y}+1}-\mathbb{1}_{x\leq y} \right) \\
 & = \frac{y^n}{n}+ \int_{0}^{\infty}dx x^{n-1}\left(  \frac{1}{e^{x-y}+1}-\mathbb{1}_{x\leq y} \right) \\
 & = \frac{y^n}{n}+ \int_{0}^y dx x^{n-1}\left(  \frac{1}{e^{x-y}+1}-1 \right)+ \int_{y}^{\infty}dx x^{n-1} \frac{1}{e^{x-y}+1} \\
 & = \frac{y^n}{n}+ \int_{0}^y dx x^{n-1} \frac{-e^{x-y}}{e^{x-y}+1}+ \int_{y}^{\infty}dx x^{n-1}\frac{1}{e^{x-y}+1} \\
 & = \frac{y^n}{n}+ \int_{0}^ydx \frac{-x^{n-1}}{1+e^{y-x}}+ \int_{y }^{\infty}dx \frac{x^{n-1}}{e^{x-y}+1} \\
 & = \frac{y^n}{n}+ \int_{y}^{0}du \frac{(y-u)^{n-1}}{1+e^u }+ \int_{0}^{\infty}du \frac{(y+u)^{n-1}}{1+e^u} \\
 & = \frac{y^n}{n}- \int_{0}^{y}du \frac{(y-u)^{n-1}}{1+e^u} + \int_{0}^{\infty}du \frac{(y+u)^{n-1}}{1+e^u} \\
 & \approx \frac{y^n}{n}- \int_{0}^{\infty}du \frac{(y-u)^{n-1}}{1+e^u} + \int_{0}^{\infty}du \frac{(y+u)^{n-1}}{1+e^{u}} 
\end{align}$$
二项式展开有：
$$\begin{align}
-(y-u)^{n-1}+(y+u)^{n-1} & = - \sum_{k}\binom{n-1}{k}(-u)^ky^{n-1-k}+ \sum_{k}\binom{n-1}{k}u^ky^{n-1-k} \\
 & = 2\sum_{k\text{ odd}} \binom{n-1}{k}u^ky^{n-1-k} \\
 & = 2\sum_{j=0}^{\infty}\binom{n-1}{2j+1 }u^{2j+1}y^{n-2j-2}
\end{align}$$
故：
$$\begin{align}
F_{n}(y) & = \frac{y^n}{n}+ 2\sum_{j}\binom{n-1}{2j+1}y^{n-2j-2}\int_{0}^{\infty}du \frac{u^{2j+1}}{1+e^u}
\end{align}$$
我们知道：
$$\begin{align}
\int_{0}^{\infty}du \frac{u^{2j+1}}{1+e^u} & = \int du u^{2j+1}\sum_{l=0}^{\infty}(-e^u)^l \\
 & = \sum_{l} (-1)^l \int du u^{2j+1}e^{lu} \\
 & = \sum_{l}(-1)^l \frac{1}{l^{2j+2}}\Gamma(2j+2) \\
 & = \Gamma(2j+2) \sum_{l}(-1)^l \frac{1}{l^{2j+2}}
\end{align}$$
我们试图将$\sum_{l}(-1)^l \frac{1}{l^{2j+2}}$变成Riemann zeta函数。我们有：
$$\begin{align}
\sum_{l=0}^{\infty}(-1)^l \frac{1}{l^{2j+2}} & = 1- \frac{1}{2^{2j+2}}+ \frac{1}{3^{2j+2}}- \frac{1}{4^{2j+2}}+\dots \\
 & = \left( 1+ \frac{1}{2^{2j+2}}+ \frac{1}{3^{2j+2}}+\dots \right) -2\left( \frac{1}{2^{2j+2}}+ \frac{1}{4^{2j+2}}+\dots \right) \\
 & = \sum_{l=0}^{\infty} \frac{1}{l^{2j+2}}- 2\sum_{l=0}^{\infty} \frac{1}{(2l)^{2j+2}} \\
 & = \sum_{l} \frac{1}{l^{2j+2}}\left( 1-  \frac{2}{2^{2j+2}} \right) \\
 & = \zeta(2j+2)\left( 1- \frac{1}{2^{2j+1}} \right)
\end{align}$$
于是：
$$\begin{align}
F_{n}(y) & = \frac{y^n}{n}+ 2\sum_{j=0}^{\infty}\binom{n-1}{2j+1}y^{n-2j-2} \zeta(2j+2)\left( 1- \frac{1}{2^{2j+1}} \right) \\
 & = \frac{y^n}{n}+ 2\sum_{j=1}^{\infty}\binom{n-1}{2j-1}y^{n-2j} \zeta(2j)\Gamma(2j)\left( 1- \frac{1}{2^{2j-1}} \right)
\end{align}$$
接下来便是显然。
>[!Right]
>$\blacksquare$

