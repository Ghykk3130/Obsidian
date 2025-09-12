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
