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
 & = \frac{2}{\hbar}\sqrt{ B^{2}+C^{2} } \left(  \frac{C}{\sqrt{ B^{2}+C^{2} }}\hat{x}+ \frac{B}{B^{2}+C^{2}}\hat{z} \right) \cdot \vec{S}
\end{align}$$
So the eigenvalues of $B\sigma_{z}+C\sigma_{x}$ should be the eigenvalue of the spin operator in the $\frac{C}{\sqrt{ C^{2}+B^{2} }}\hat{x}+ \frac{B}{\sqrt{ B^{2}+C^{2} }}\hat{z}$ direction, multiplied by $\frac{2}{\hbar} \sqrt{ B^{2}+C^{2} }$.

We know that this operator must have eigenvalues $\pm \frac{\hbar}{2}$. Then the eigenvalues of $B\sigma_{z}+C\sigma_{x}$ are $\pm\sqrt{ B^{2}+C^{2} }$. Then the eigenvalues of $A\mathbb{1}+B\sigma_{z}+C\sigma_{x}$ are $A \pm \sqrt{ B^{2}+C^{2} }$.
## c).
Since any vector is an eigenvector of $A\mathbb{1}$, it suffices to consider the eigenvectors of $B\sigma_{z}+C\sigma_{x}$.  

This should be the eigenvectors of the spin operator in the $\frac{C}{\sqrt{ B^{2}+C^{2} }}\hat{x}+ \frac{B}{B^{2}+C^{2}}\hat{z}$. Obviously, the eigenvectors are:
$$\begin{pmatrix}
\sqrt{ \frac{\frac{B}{\sqrt{ B^{2}+C^{2} }}+1 }{2} } \\
\sqrt{ \frac{1- \frac{B}{\sqrt{ B^{2}+C^{2} }}}{2} }
\end{pmatrix}, \begin{pmatrix}
\sqrt{  \frac{1- \frac{B}{B^{2}+C^{2}}}{2} } \\
-\sqrt{ \frac{ \frac{B}{\sqrt{ B^{2}+C^{2} }}+1}{2} }
\end{pmatrix}$$

# 2.
## 2).
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
 \cos \frac{\theta}{2} &  e^{-i\alpha}\sin \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix}
e^{i\alpha}\sin \frac{\theta}{2} \\
\cos \frac{\theta}{2}
\end{pmatrix} \\
 & =\left( e^{i\alpha}\sin \frac{\theta}{2}\cos \frac{\theta}{2}+ e^{-i\alpha}\sin \frac{\theta}{2} \cos \frac{\theta}{2} \right) \frac{\hbar}{2} \\
\end{align}$$
Then:
$$\begin{align}
\langle S_{x} \rangle^{2} & = \frac{\hbar^{2}}{4} |e^{i\alpha}\sin \frac{\theta}{2}\cos \frac{thera}{2}+e^{-i\alpha}\sin \frac{\theta}{2}\cos \frac{\theta}{2} |^{2} \\
 & = \hbar^{2} \cos ^{2} \alpha \sin ^{2} \frac{\theta}{2}\cos ^{2}  \frac{\theta}{2} \\
 & = \frac{\hbar^{2}}{4}\cos ^{2}\alpha \sin ^{2}\theta
\end{align}$$
Then: 
$$\langle \Delta S_{x}^{2}\rangle=\frac{\hbar^{2}}{4}- \frac{\hbar^{2}}{4}\cos ^{2}\alpha \sin ^{2}\theta= \frac{\hbar^{2}}{4} \sin ^{2}\alpha \sin ^{2}\theta$$
