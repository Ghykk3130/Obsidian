# Problem 1
## (a)

Let $\mathcal{z}=Re^{i\theta}$. Then we have:
$$\begin{align}
\int_{\mathcal{C}} \frac{1}{\mathcal{z}}d\mathcal{z} & = \int_{0}^{2\pi}  \frac{1}{\mathrm{Re}^{i\theta}}  Rie^{i\theta}d\theta \\
 & = i \int_{0}^{2\pi}d\theta \\
 & = 2\pi i
\end{align}$$
## (b)

If the contour is traversed in the clockwise direction, then we take $\int_{2\pi}^{0}=- \int_{0}^{2\pi}$. Then the result is just $-2\pi i$.
## (c)

If $n=0$, we clearly have:
$$\begin{align}
\int_{\mathcal{C}}dz=0
\end{align}$$
since we go back to the starting point.

If $n=1$, we get $2\pi i$ as in part (a).

If $n>1$, we have:
$$\begin{align}
\int_{\mathcal{C}}dz \frac{1}{z^{n} } & = \int_{0}^{2\pi} Ri e^{i\theta}d\theta \frac{1}{R^{n}e^{ni\theta}} \\
 & = \frac{i}{R^{n-1}} \int_{0}^{2\pi}d\theta e^{(1-n)i\theta} \\
 & = \frac{i}{R^{n-1}} \frac{1}{(1-n)i}[e^{(1-n)i\theta}]_{0}^{2\pi} \\
 & = 0
\end{align}$$
## (d)

For $n\leq -1$ we still have:
$$\begin{align}
\int_{\mathcal{C}}dz \frac{1}{z^{n} } & = \int_{0}^{2\pi} Ri e^{i\theta}d\theta \frac{1}{R^{n}e^{ni\theta}} \\
 & = \frac{i}{R^{n-1}} \int_{0}^{2\pi}d\theta e^{(1-n)i\theta} \\
 & = \frac{i}{R^{n-1}} \frac{1}{(1-n)i}[e^{(1-n)i\theta}]_{0}^{2\pi} \\
 & = 0
\end{align}$$
## (e)

The integrand is:
$$\begin{align}
\frac{1}{1+R^{2}e^{2i\phi}}
\end{align}$$
For $R\rightarrow \infty$ the integrand is suppressed to zero. We have:
$$\begin{align}
 & \left|\int_{0}^{\pi} d\phi \frac{1}{1+R^{2}e^{2i\phi}} \right|\leq \int_{0}^{\pi}d\phi \left| \frac{1}{1+R^{2}e^{2i\phi}} \right|=0 \\
\implies & \int_{0}^{\pi}d\phi \frac{1}{1+R^{2}e^{2i\phi}}  =0
\end{align}$$
Then the integral does not change its value by the closing of the contour.
## (f)
$$\begin{align}
\frac{1}{1+z^{2}} & = \frac{1}{(z-i)(z+i)} \\
 & = \frac{1}{2i}\left(  \frac{1}{z-i}- \frac{1}{z+i} \right)
\end{align}$$
Then clearly:
$$\begin{align}
 & z_{0}=i,\ A= \frac{1}{2i} \\
 & z_{0}^{'}=-i,\ A^{'}=- \frac{1}{2i}
\end{align}$$
## (g)

The pole $z_{0}=i$ is inside the contour. Therefore:
$$\begin{align}
\int_{-\infty}^{\infty}dz \frac{1}{1+z^{2}} & = \oint_{\mathcal{C}} dz \frac{1}{1+z^{2}} \\
 & = \oint_{\mathcal{C}}dz \frac{1}{2i}\left(  \frac{1}{z-i}- \frac{1}{z+i} \right) \\
 & = \frac{1}{2i}\cdot 2\pi i \\
 & = \pi
\end{align}$$
The $\frac{1}{z+i}$ does not contribute since its pole is not enclosed by the contour. 
## (f)

If we close the contour in the lower half-plane, then since we are going clockwise, we get a minus sign:
$$\begin{align}
\int_{-\infty}^{\infty}dz \frac{1}{1+z^{2}} & =  \oint_{\mathcal{C}^{'}} dz \frac{1}{1+z^{2}} \\
 & =  \oint dz \frac{1}{2i}\left( \frac{1}{z-i}-\frac{1}{z+i} \right) \\
 & = -2\pi(-i) \cdot \frac{1}{2i} \\
 & = \pi
\end{align}$$
Here only the pole $z_{0}^{'}=-i$ contributes.
## (h)

We have:
$$\begin{align}
I & = \int_{-\infty}^{\infty}dx \frac{1}{1+x^{2}} \\
 & = \int dx  \frac{d}{dx}(\arctan x) \\
 & = [\arctan x]_{-\infty}^{\infty} \\
 & = \frac{\pi}{2}-\left( - \frac{\pi}{2} \right) \\
 & = \pi
\end{align}$$


