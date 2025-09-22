# 1.
## a).
We know that $\ket{R},\ket{L}$ is a complete basis. Then:
$$\begin{align}
\ket{\psi}  & =a\ket{x} +b\ket{y}  \\
 & =a(\ket{R} \bra{R} +\ket{L} \bra{L} ) \ket{x} +b(\ket{R} \bra{R} +\ket{L} \bra{L} )\ket{y}  \\
 & =(a\bra{R} x\rangle+b\bra{R} y\rangle)\ket{R} +(a\bra{L} x\rangle+b\bra{L} y\rangle)\ket{L} \\
 & =\frac{1}{\sqrt{ 2 }}(a-ib)\ket{R} + \frac{1}{\sqrt{ 2 }}(a+ib)\ket{L}    
\end{align}$$
Therefore its representation under $R-L$ basis is:
$$\begin{pmatrix}
\frac{1}{\sqrt{ 2 }}(a+ib) \\
\frac{1}{\sqrt{ 2 }}(a-ib)
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 & i \\
1 & -i

\end{pmatrix}\begin{pmatrix}
a \\
b
\end{pmatrix}$$
So the matrix is:
$$X=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & i \\
1 & -i
\end{pmatrix}$$
## b).
$$\begin{align}
XX^{^{\dagger}} & = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & i  \\
 1 & -i 
\end{pmatrix}\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
-i & i
\end{pmatrix} \\
 & =\frac{1}{2}\begin{pmatrix}
2 & 0 \\
0 & 2
\end{pmatrix} \\
  & =I
\end{align} 
$$
# 2.
## i).
Since $A$ is already block-diagonalized, its top left $2\times 2$ block and bottom left $2\times 2$ block already corresponds two invariant subspaces. Then it suffices to work in these two invariant subspaces to diagonalize. 

For each block, set:
$$\begin{align}
 & \begin{vmatrix}
\lambda & -x \\
-x & \lambda 
\end{vmatrix}=0 \\
\implies & \lambda=\pm x
\end{align}$$
Then the diagonalized $A$ would be:
$$\begin{pmatrix}
x & 0 & 0 & 0 \\
0 & -x & 0 & 0 \\
0 & 0 & x & 0 \\
0 & 0 & 0 & -x
\end{pmatrix}$$
So it has degeneracy in its spectrum. Each eigensubspace has a degree of degeneracy of 2.

## ii).
Since $A,B$ are block diagonalized, it suffices to show the two blocks commute respectively. For the top right block, I have:
$$\begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix}\begin{pmatrix}
q & 0 \\
0 & q
\end{pmatrix}=q \begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix} = \begin{pmatrix}
q & 0  \\
0 & q
\end{pmatrix}\begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix}$$
For the bottom left block, I have:
$$\begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix}\begin{pmatrix}
z & 0 \\
0 & z
\end{pmatrix}=z \begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix} = \begin{pmatrix}
z & 0  \\
0 & z
\end{pmatrix}\begin{pmatrix}
0 & x \\
x & 0
\end{pmatrix}$$
Then obviously $[A,B]=0$.

To further find an eigenbasis that diagonalize both matrix, just work in the two 2-dimensional eigenspaces of $B$ and choose some new basis for these two subspaces to diagonalize the top right and bottom left blocks of $A$.

