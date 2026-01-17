# 1.
## a).
The most general Hamiltonians are all Hermitian matrices. That means their matrix elements are allowed to take complex values. If you require the entries of the Hamiltonian to be real, then you restrict yourself to the subgroup of $2\times 2$ real symmetric matrices.
## b).
Suppose $\hat{H}=A \mathbb{1}+B\sigma_{z}+C\sigma_{x}$. Then the representation matrix of $H$ is:
$$\begin{pmatrix}
A+B & C \\
C & A-B 
\end{pmatrix}$$
Then set:
$$\begin{align}
 & A+B=H_{11} \\
 & C=H_{12} \\
 & A-B=H_{22}
\end{align}$$
We obtain:
$$A= \frac{H_{11}+H_{22}}{2}, B= \frac{H_{11}-H_{22}}{2},C=H_{12}$$
## c).
Since any vector is an eigenvector of $A\mathbb{1}$ with eigenvalue $A$, it suffices to study the eigenvalues of $B\sigma_{z}+C\sigma_{x}$. 

In the spin-1/2 system, I know that:
$$\begin{align}
B\sigma_{z}+C\sigma_{x} & = \left(  \frac{2C}{\hbar}\hat{x}+ \frac{2B}{\hbar}\hat{z} \right) \cdot \vec{S} \\
 & = \frac{2}{\hbar}\sqrt{ B^{2}+C^{2} } \left(  \frac{C}{\sqrt{ B^{2}+C^{2} }}\hat{x}+ \frac{B}{\sqrt{B^{2}+C^{2}}}\hat{z} \right) \cdot \vec{S}
\end{align}$$
So the eigenvalues of $B\sigma_{z}+C\sigma_{x}$ should be the eigenvalue of the spin operator in the $\frac{C}{\sqrt{ C^{2}+B^{2} }}\hat{x}+ \frac{B}{\sqrt{ B^{2}+C^{2} }}\hat{z}$ direction, multiplied by $\frac{2}{\hbar} \sqrt{ B^{2}+C^{2} }$.

We know that this operator must have eigenvalues $\pm \frac{\hbar}{2}$. Then the eigenvalues of $B\sigma_{z}+C\sigma_{x}$ are $\pm\sqrt{ B^{2}+C^{2} }$. Then the eigenvalues of $A\mathbb{1}+B\sigma_{z}+C\sigma_{x}$ are $A \pm \sqrt{ B^{2}+C^{2} }$.
## d).
Since any vector is an eigenvector of $A\mathbb{1}$, it suffices to consider the eigenvectors of $B\sigma_{z}+C\sigma_{x}$.  

This should be the eigenvectors of the spin operator in the $\frac{C}{\sqrt{ B^{2}+C^{2} }}\hat{x}+ \frac{B}{\sqrt{ B^{2}+C^{2} }}\hat{z}$. If we define $\alpha ,\beta$ such that:
$$\sin \beta \cos \alpha=\frac{C}{\sqrt{ B^{2}+C^{2} }},\sin \beta \sin \alpha=0,\cos \beta=\frac{B}{\sqrt{ B^{2}+C^{2} }}$$
Or more explicitly, $\alpha=0,\tan \beta= \frac{C}{B}$, then, we can conclude that the eigenvectors are:
$$\begin{pmatrix}
\cos \frac{\beta}{2} \\
e^{i\alpha}\sin \frac{\beta}{2}
\end{pmatrix}, \begin{pmatrix}
\sin \frac{\beta}{2} \\
-e^{i\alpha}\cos \frac{\beta}{2}
\end{pmatrix}$$
or more explicitly:
$$\frac{1}{\sqrt{ 2B^{2}+2C^{2} \mp {2}B\sqrt{ B^{2}+C^{2} } }}\begin{pmatrix}
C \\
-B\pm \sqrt{ B^{2}+C^{2} }
\end{pmatrix}$$
# 2.
## a).
$$\begin{align}
\langle S_{x}^{2}\rangle & =\left\langle +\hat{n}| \frac{\hbar^{2}}{4}\mathbb{1}|+\hat{n} \right\rangle \\
 & = \frac{\hbar^{2}}{4}
\end{align}$$
$$\begin{align}
\langle S_{x}\rangle & =\langle +\hat{n}|S_{x}|+\hat{n}\rangle \\
 & = \frac{\hbar}{2}\langle +\hat{n}| \begin{pmatrix}
0 & 1 \\
1 & 0 
\end{pmatrix} |+\hat{n}\rangle \\
 & = \frac{\hbar}{2} \begin{pmatrix}
 \cos \frac{\beta}{2} &  e^{-i\alpha}\sin \frac{\beta}{2}
\end{pmatrix} \begin{pmatrix}
e^{i\alpha}\sin \frac{\beta}{2} \\
\cos \frac{\beta}{2}
\end{pmatrix} \\
 & =\left( e^{i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2}+ e^{-i\alpha}\sin \frac{\beta}{2} \cos \frac{\beta}{2} \right) \frac{\hbar}{2} \\
\end{align}$$
Then:
$$\begin{align}
\langle S_{x} \rangle^{2} & = \frac{\hbar^{2}}{4} |e^{i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2}+e^{-i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2} |^{2} \\
 & = \hbar^{2} \cos ^{2} \alpha \sin ^{2} \frac{\beta}{2}\cos ^{2}  \frac{\beta}{2} \\
 & = \frac{\hbar^{2}}{4}\cos ^{2}\alpha \sin ^{2}\beta
\end{align}$$
Then: 
$$\langle \Delta S_{x}^{2}\rangle=\frac{\hbar^{2}}{4}- \frac{\hbar^{2}}{4}\cos ^{2}\alpha \sin ^{2}\beta= \frac{\hbar^{2}}{4} (1-\cos ^{2}\alpha \sin ^{2}\beta)$$
## b).
 $$\begin{align}
\langle S_{y}^{2}\rangle & = \frac{\hbar^{2}}{4}\langle +\hat{n}|+\hat{n}\rangle \\
 & =\frac{\hbar^{2}}{4}
\end{align}$$
$$\begin{align}
\langle S_{y}\rangle & =\langle +\hat{n}|S_{y}|+\hat{n}\rangle \\
 & = \frac{\hbar}{2}\langle +\hat{n} |\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} |+\hat{n}\rangle \\
 & = \frac{\hbar }{2} \begin{pmatrix}
\cos \frac{\beta}{2} & e^{i\alpha}\sin \frac{\beta}{2}
\end{pmatrix} \begin{pmatrix}
 -ie^{i\alpha}\sin \frac{\beta}{2} \\
i \cos \frac{\beta}{2}
\end{pmatrix} \\
 & =\frac{\hbar}{2}\left( -ie^{i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2}+ i e^{-i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2} \right)
\end{align}$$
Then:
$$\begin{align}
\langle S_{y}\rangle^{2} & = \frac{\hbar^{2}}{4 }|-ie^{i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2}+ie^{-i\alpha}\sin \frac{\beta}{2}\cos \frac{\beta}{2}|^{2} \\
 & =\hbar^{2}  \sin ^{2}\alpha \sin ^{2} \frac{\beta}{2}\cos ^{2} \frac{\beta}{2} \\
 & = \frac{\hbar^{2}}{4}\sin ^{2}\alpha \sin ^{2}\beta
\end{align}$$
Then:
$$\langle \Delta S_{y}^{2}\rangle= \frac{\hbar^{2}}{4}(1- \sin ^{2}\alpha \sin ^{2}\beta)$$
## c).
We know that $\hat{S}_{z}=\frac{\hbar}{2}\begin{pmatrix}1 & 0 \\ 0 & -1 \end{pmatrix}$. Then we have:
$$\begin{align}
\langle \hat{S}_{z}\rangle & =\langle +\hat{n}| \hat{S}_{z} |+\hat{n}\rangle \\
  & = \frac{\hbar}{2}\begin{pmatrix}
\cos \frac{\beta}{2} & e^{-i\alpha}\sin \frac{\beta}{2}
\end{pmatrix}\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}\begin{pmatrix}
\cos \frac{\beta}{2} \\
e^{i\alpha}\sin \frac{\beta}{2}
\end{pmatrix} \\
 & =\frac{\hbar}{2}\begin{pmatrix}
\cos \frac{\beta}{2} & e^{-i\alpha}\sin \frac{\beta}{2}
\end{pmatrix}\begin{pmatrix}
\cos \frac{\beta}{2} \\
-e^{i\phi}\sin\frac{\beta}{2}
\end{pmatrix} \\
 & =\frac{\hbar}{2}\cos ^{2} \frac{\beta}{2}- \sin ^{2} \frac{\beta}{2} \\
 & =\frac{\hbar}{2}\cos \beta
\end{align}$$
We also know that:
$$\begin{align} \langle\Delta S_{x}^{2}\rangle \langle\Delta S_{y}^{2}\rangle & = \left( \frac{\hbar^{2}}{4} \right)^{2}(1-\cos ^{2}\alpha \sin ^{2}\beta)(1-\sin ^{2}\alpha \sin ^{2}\beta) \\
 & =\left( \frac{\hbar^{2}}{4} \right)^{2}(1-\sin ^{2}\beta+\sin ^{2}\alpha \cos ^{2}\alpha \sin^{4}\beta) \\
 & =\left( \frac{\hbar^{2}}{4} \right)^{2}(\cos ^{2}\beta+\sin ^{2}\alpha \cos ^{2}\alpha \sin^{4}\beta) \\
 & \geq\left( \frac{\hbar^{2}}{4} \right)^{2}\cos ^{2}\beta \\
 & = \frac{\hbar^{2}}{4} \langle \hat{S}_{y}\rangle^{2} 
\end{align}$$
This is consistent with the uncertainty relation that:
$$[A,B]=iC\implies \sigma_{A}\sigma_{B}\geq \frac{\langle C\rangle^{}}{2}\text{ or  }\sigma_{A}^{2}\sigma_{b}^{2}\geq \frac{\langle C\rangle^{2}}{4}$$
with $A=\hat{S}_{x},B=\hat{S}_{y},C=\hbar\hat{S}_{z}$

# 3.
Let $\psi_{n}$ be the unnormalized orthogonal functions.

We pick $\psi_{0}=u_{0}=1$

Then:
$$\begin{align}
\psi_{1} & =u_{1}- \frac{\langle \psi_{0}|u_{1}\rangle}{\langle\psi_{0}|\phi_{0}\rangle}\psi_{0} \\
\langle\psi_{0}|u_{1}\rangle & =\frac{1}{2}\int_{-1}^{1}\psi_{0}(x)u_{1}(x)dx=0 \\
\implies & \psi_{1}(x)  =x
\end{align}$$
Then:
$$\begin{align}
\psi_{2} & =u_{2}-\frac{\langle\psi_{0}|u_{2}\rangle}{\langle \psi_{0}|\psi_{0}\rangle}\psi_{0}- \frac{\langle\psi_{1}|u_{2}\rangle}{\langle\psi_{1}|\psi_{1}\rangle}\psi_{1} \\
\langle\psi_{0}|u_{2}\rangle & =\frac{1}{2}\int_{-1}^{1}x^{2}dx=\frac{1}{3} \\
\langle\psi_{0}|\phi_{0}\rangle & =\frac{1}{2}\int_{-1}^{1}dx=1 \\
\langle \psi_{1}|u_{2}\rangle & =\frac{1}{2}\int_{-1}^{1}x\cdot x^{2}dx=0 \\
\implies & \psi_{2}(x)=x^{2}-\frac{1}{3}
\end{align}$$
Then:
$$\begin{align}
\psi_{3} & =u_{3}- \frac{\langle\psi_{0}|u_{3}\rangle}{\langle\psi_{0}|\psi_{0}\rangle}\psi_{0}- \frac{\langle\psi_{1}|u_{3}\rangle}{\langle\psi_{1}|\psi_{1}\rangle}\psi_{1}- \frac{\langle\psi_{2}|u_{3}\rangle}{\langle\psi_{3}|\psi_{3}\rangle}\psi_{3} \\
\langle\psi_{0}|u_{3}\rangle & =\frac{1}{2}\int_{-1}^{1}1\cdot x^{3}dx=0 \\
\langle\psi_{1}|u_{3} \rangle & =\frac{1}{2}\int_{-1}^{1}x\cdot x^{3}dx=\frac{1}{5} \\
\langle\psi_{1}|\psi_{1}\rangle & =\frac{1}{2}\int_{-1}^{1}x^{2}dx=\frac{1}{3} \\
\langle \psi_{2}|u_{3}\rangle & =\frac{1}{2}\int_{-1}^{1}\left( x^{2}- \frac{1}{3} \right)x^{3}dx=0 \\
\implies \psi_{3}(x) & =x^{3}- \frac{3}{5}x
\end{align}$$
Then we normalize:
$$\begin{align}
 & \langle\psi_{0}|\psi_{0}\rangle= \frac{1}{2}\int_{-1}^{1}dx=1 \\
 & \langle\psi_{1}|\psi_{1}\rangle=\frac{1}{2}\int_{-1}^{1}x^{2}dx=\frac{1}{3} \\
 & \langle\psi_{2}|\psi_{2}\rangle=\frac{1}{2}\int_{-1}^{1}\left( x^{2}- \frac{1}{3} \right)^{2}dx=\frac{4}{45} \\
 &\langle\psi_{3}|\psi_{3}\rangle=\frac{1}{2}\int_{-1}^{1}\left( x^{3}- \frac{3}{5}x \right)^{2}dx=\frac{4}{175}
\end{align}$$
Then by dividing $\psi_{i}$ with the its magnitude, we obtain:
$$\begin{align}
 & \phi_{0}(x)=1 \\
 & \phi_{1}(x)= \sqrt{ 3 } x \\
 & \phi_{2}(x)=\left( \frac{4}{45} \right)^{-1/2}\left( x^{2}-\frac{1}{3} \right) \\
 & \phi_{3}(x)=\left( \frac{4}{175} \right)^{-1/2}\left( x^{3}- \frac{3}{5}x \right)
\end{align}$$
Clearly, these are proportional to the Legendre polynomials.
