# 3.
## a)
Pick $\ket{a}$ and extend to a complete orthonormal basis. Then:
$$\hat{P}_{\bar{a}}= \sum_{\beta\neq a}\ket{\beta}\bra{\beta}  +0 \ket{a} \bra{a} $$
So $0$ would be observed with probability 1.

## b)
Pick $\ket{c}=\ket{b}- \ket{a}\bra{a}b\rangle$, together with $\ket{a}$, extend to a complete basis. Then:
$$\begin{align}
\hat{P}_{\bar{a} }= \sum_{\beta\neq a,c } \ket{\beta} \bra{\beta} + \ket{c} \bra{c} + 0\ket{a} \bra{a}  
\end{align}$$
So $0$ would be observed with probability $|\bra{a}b\rangle|^{2}$. $1$ would be observed with probability $1- |\bra{a}b\rangle|^{2}$.

# 3.
Easy to find the eigenvectors of $\vec{J}\cdot \hat{n}$:
$$\begin{align}
 & \lambda=1 \leadsto \begin{pmatrix}
\cos ^{2} \frac{\theta}{2} \\
\sqrt{ 2 }\cos \frac{\theta}{2}\sin \frac{\theta}{2} \\
\sin ^{2} \frac{\theta}{2}
\end{pmatrix} \\
 & \lambda=-1 \leadsto \begin{pmatrix}
\sin ^{2} \frac{\theta}{2} \\
-\sqrt{ 2 }\sin \frac{\theta}{2}\cos \frac{\theta}{2} \\
  \cos ^{2} \frac{\theta}{2}
\end{pmatrix} \\
 & \lambda=0\leadsto \begin{pmatrix}
- \frac{1}{\sqrt{ 2 }}\sin \theta \\
\cos \theta \\
 \frac{1}{\sqrt{ 2 }}\sin \theta
\end{pmatrix}
\end{align}$$
Then the probability to get $\hbar$ is $\cos^4 \frac{\theta}{2}$, the probability to get $-\hbar$ is $\sin^4 \frac{\theta}{2}$, the probability to get $0$ is $\frac{1}{2}\sin ^{2}\theta$

# 4.
## a)
Let $x=x^{'}$. We have that:
$$\begin{align}
K(0,t^{'};0,0) & = \sqrt{ \frac{m\omega}{\pi \hbar} } \frac{1}{\sqrt{ e^{i\omega t^{'}}-e^{-i\omega t^{'}} }} \\
 & = \sqrt{ \frac{m\omega}{\pi \hbar} } e^{- \frac{i\omega t^{'}}{2}} \sum_{k=0}^{\infty} \binom{-\frac{1}{2}}{k} (-e^{-2i\omega t^{'}})^k
\end{align}
$$
Collecting the exponents, and set it equal to $- \frac{i}{\hbar}E_{k}t^{'}$, we get:
$$- \frac{i\omega t^{'}}{2}- 2ki\omega t^{'}=- \frac{i}{\hbar}E_{k}t^{'}\implies E_{k}=\left( \frac{1}{2}+2k \right)\hbar \omega$$
## b)
Using the notation in the problem, we have:
$$K(0,t^{'};0,0)= \sqrt{ \frac{m\omega}{\pi \hbar} }\sum_{n=0}^{\infty}c_{n}\exp\left( - \frac{i}{\hbar}\left( \frac{1}{2}+2n \right)\hbar \omega t^{'} \right)$$
We only need to set $n=1$. Then we get:
$$\sqrt{ \frac{m\omega}{\pi \hbar} } \frac{1}{2} \exp\left( - \frac{i}{\hbar} \frac{5}{2}\hbar \omega t^{'} \right)$$
OTOH, I know that this is equal to:
$$|\psi_{2}(0)|^{2}\exp\left( - \frac{i}{\hbar} \frac{5}{2}\hbar \omega t^{'} \right)$$
So:
$$|\psi_{2}(0)|^{2}= \frac{1}{2}\sqrt{  \frac{m\omega}{\pi \hbar} }$$
# 5.
## a)
Proton has $\frac{1}{2}$ spin. We can observe $\frac{3}{4}\hbar^{2}, \frac{15}{4}\hbar^{2}$.
## b)
Let $\vec{J}=\vec{L}+\vec{S}$. Then:
$$\vec{L}\cdot \vec{S}= \frac{1}{2}(J^{2}-L^{2}-S^{2})$$
The ket $\ket{l,s,j,m}$ diagonalize this operator. Then the eigenvalues are:
$$\begin{align}
E & = \alpha \frac{\hbar^{2}}{2}(j(j+1)-l(l+1)-s(s+1)) \\
 & = \alpha \frac{\hbar^{2}}{2}(j(j+1)-4)
\end{align}$$
So we have:
$$E_{1}= -2\alpha \hbar^{2},E_{2}=-\alpha \hbar^{2},E_{3}=\alpha \hbar^{2}$$
## c)
