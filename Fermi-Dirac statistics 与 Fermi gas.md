


>[!Note] Definition 1
>Define the Fermi-Dirac integral:
>$$f_{n}(\mathcal{z})=\frac{1}{\Gamma(n)}\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^x+1}\text{ for }0\leq z < \infty$$

>[!Note] Proposition 1
$$f_{n}(\mathcal{z})=\sum_{k}(-1)^{k-1} \frac{\
\mathcal{z}^k}{k!}$$
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




# Sommerfeld expansion

