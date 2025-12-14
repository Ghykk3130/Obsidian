# 2.
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

