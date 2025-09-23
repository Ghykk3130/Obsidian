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

## iii).
Consider the top left block of $A$. We know that the eigenvalues are $\lambda=\pm x$. Then we calculate the eigenvectors restricted to this invariant subspace. If $\lambda=x$, then:
$$\begin{align}
 & (A-\lambda I)v=0 \\
\implies & \begin{pmatrix}
x & -x \\
-x & x
\end{pmatrix}v=0 \\
\implies & \begin{pmatrix}
x & -x \\
0 & 0
\end{pmatrix}v=0 \\
\implies & v= \frac{1}{\sqrt{ 2 }} \begin{pmatrix}
1 \\
1
\end{pmatrix}
\end{align}$$
Similarly, if $\lambda=-x$, I have:
$$\begin{align}
 & \begin{pmatrix}
-x & -x \\
-x & -x
\end{pmatrix}v=0 \\
\implies & \begin{pmatrix}
-x & -x \\
0 & 0
\end{pmatrix}v=0 \\
\implies & v= \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
-1
\end{pmatrix}
\end{align}$$
If we write it in terms of the basis of the whole space, these two eigenvectors are:
$$\frac{1}{\sqrt{ 2 }}(\ket{1} \pm \ket{2} )$$

Similarly, if we work on the bottom right block, we still compute:
$$(A-\lambda I)v=0$$
Since this block is exactly the same as the top left block, and the eigenvalues are the same, we obtain the same representation of eigenbvectos:
$$\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
\pm 1
\end{pmatrix}$$
But since this block is spanned by $\ket{3},\ket{4}$, the eigenvectors are:
$$\frac{1}{\sqrt{ 2 }}(\ket{3} \pm \ket{4} )$$
Note that we just choose new bases in the eigensubspaces of $B$, the representation of $B$ should be unchanged, meaning that $B$ is still diagonalized. Then the common eigenbasis is:
$$\frac{1}{\sqrt{ 2 }}(\ket{1} \pm \ket{2} ), \frac{1}{\sqrt{ 2 }}(\ket{3} \pm \ket{4} )$$
# 3.
## a).
Know that:
$$\begin{align}
 \langle p\rangle & =\bra{\psi} p\ket{\psi} \\
 &=\int_{-\infty}^{\infty} dx\bra{\psi} x\rangle \bra{x} p\ket{\psi}  \\
  & = \int dx \psi ^{*}(x)\left( -i\hbar \frac{\partial}{\partial x} \right)\psi(x) 
\end{align}$$
We compute:
$$\begin{align}
 \frac{\partial}{\partial x}\psi & = \frac{1}{\pi^{1/4}\sqrt{ d }} \exp\left( ikx- \frac{x^{2}}{2d^{2}} \right)
\end{align}$$
Then:
$$\begin{align}
\langle p \rangle & =\int dx(-i\hbar)\left( ik- \frac{x}{d^{2}} \right) \frac{1}{\pi^{1/2}d} epx\left( -ikx_{} -\frac{x^{2}}{2d^{2}} \right)\exp\left( ikx- \frac{x^{2}}{2d^{2}} \right) \\
 & =\int dxi\hbar\left( ik- \frac{x}{d^{2}} \right) \frac{1}{\pi^{1/2}d}\exp\left( - \frac{x^{2}}{d^{2}} \right) \\
\end{align}$$
Know by Gaussian integral that:
$$\begin{align}
\int_{-\infty}^{\infty} dx\exp\left(  - \frac{x^{2}}{d^{2}} \right) & = \sqrt{ \pi }d
\end{align}$$
Also, since $x\exp\left( - \frac{x^{2}}{d^{2}} \right)$ is odd, its integral is zero. Then we get:
$$\begin{align}
\langle p \rangle & =(-i\hbar) \frac{1}{\pi^{1/2}d}ik \int dx \exp\left(  - \frac{x^{2}}{d^{2}} \right) \\
 & = \frac{\hbar k}{\pi^{1/2}}\sqrt{ \pi }d \\
 & =\hbar k
\end{align}$$

Similarly, we know that:
$$\begin{align}
\langle p^{2} \rangle & =\int_{-\infty}^{\infty}dx \psi(x)^{*}p^{2}\psi(x) \\
 & = \int dx\psi ^{*}(x)\left( - \hbar^{2} \frac{\partial^{2}}{\partial x^{2}} \right) \psi(x)
\end{align}$$
We compute:
$$\begin{align}
\frac{\partial^{2}}{\partial x^{2}} \psi& = \frac{1}{\pi^{1/4}\sqrt{ d }}\left(  \exp\left( ikx- \frac{x^{2}}{2d^{2}} \right)\left( ik- \frac{x}{d^{2}} \right)^{2}+ \exp\left( ikx- \frac{x^{2}}{2d^{2}} \right)\left(  - \frac{1}{d^{2}} \right) \right) \\
 & = \frac{1}{\pi^{1/4}\sqrt{ d }}\exp\left( ikx- \frac{x^{2}}{2d^{2}} \right)\left(  \frac{x^{2}}{d^4}- 2ik \frac{x}{d^{2}}- \frac{1}{d^{2}}- k^{2} \right)
\end{align}$$
Therefore:
$$\begin{align}
\int dx\psi ^{*}(x)( - \hbar^{2}) \frac{\partial^{2}}{\partial x^{2}}  \psi(x)   & = \frac{-\hbar^{2}}{\pi^{1/2}d}\int dx \exp\left(  - \frac{x^{2}}{d^{2}} \right)\left(  \frac{x^{2}}{d^4}- 2ik \frac{x}{d^{2}} - \frac{1}{d^{2}}- k^{2} \right) \\
 & = \frac{-\hbar^{2}}{\pi^{1/2}d}\int dx\exp\left(  - \frac{x^{2}}{d^{2}} \right)\left(  \frac{x^{2}}{d^4}- \frac{1}{d^{2}}- k^{2} \right)
\end{align}$$
This is because again $x\exp\left(  - \frac{x^{2}}{d^{2}} \right)$ is odd.

Then it suffices to compute:
$$\begin{align}
\int_{-\infty}^{\infty}dx x^{2}\exp\left( - \frac{x^{2}}{d^{2}} \right) & =2\int_{0}^{\infty}dx x^{2}\exp\left( - \frac{x^{2}}{d^{2}} \right) \\
 & =2 d^{3}\int d\left(  \frac{x}{d} \right) \frac{x^{2}}{d^{2}}\exp\left(  - \frac{x^{2}}{d^{2}} \right) \\
 & = 2d^{3}\Gamma(2) \\
 & = 2d^{3}
\end{align}$$
Therefore:
$$\begin{align}
\langle p^{2} \rangle & = \frac{-\hbar^{2}}{\pi^{1/2}d}\left(  \frac{1}{d}- \sqrt{ \pi } \frac{1}{d}- \sqrt{ \pi }dk^{2} \right) \\
 & =\hbar^{2}\left(  \frac{1}{\pi^{1/2}d^{2}}( \sqrt{ \pi }-1) +k^{2} \right)
\end{align}$$
Then I have:
$$\begin{align}
\langle p^{2}\rangle- \langle p \rangle^{2} & =\hbar^{2}\left(  \frac{1}{\pi^{1/2}d^{2}}(\sqrt{ \pi }-1)+ k^{2} \right) - \hbar^{2}k^{2} \\
 & = \frac{\hbar^{2}}{\pi^{1/2}d^{2}}(\sqrt{ \pi }-1)
\end{align}$$
## b).
I have:
$$\begin{align}
\langle p \rangle & = \bra{\psi} p\ket{\psi}  \\
 & = \int_{-\infty}^{\infty}dp \bra{\psi} p\rangle \bra{p} p\ket{\psi}  \\
 & =\int dp \bra{\psi} p\rangle p \bra{p} \psi\rangle \\
 & =\int dpp |\psi(p)|^{2}
\end{align}$$
Know that:
$$\begin{align}
|\psi(p)|^{2} & = \frac{d}{\hbar \sqrt{ \pi }}\exp\left(  - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right)
\end{align}$$
Then it suffices to compute:
$$\begin{align}
\int dp p \exp\left(  - \frac{(p-\hbar k)^{2}}{\hbar^{2}}d^{2} \right)  & =\int dp(p-\hbar k)\exp\left(  - \frac{( p-\hbar k)^{2}}{\hbar^{2}}d^{2} \right)+ \int dp \hbar k \exp\left(  - \frac{(p-\hbar k)^{2}}{\hbar^{2}}d^{2} \right) \\
 &= \int dp \hbar k\exp\left(  - \frac{( p- \hbar k)^{2}}{\hbar^{2}}d^{2} \right)
\end{align}$$
This is again because $\int dp(p-\hbar k)\exp\left(  - \frac{( p- \hbar k)^{2}}{\hbar^{2}}d^{2} \right)=\int d(p-\hbar k)(p-\hbar k)\exp\left(  - \frac{(p-\hbar k)^{2}}{\hbar^{2}}d^{2} \right)$, and $(p-\hbar k)\exp\left(  - \frac{( p- \hbar k)^{2}}{\hbar^{2}}d^{2} \right)$ is odd with respect to $p-\hbar k$.

Then:
$$\begin{align}
\int dp\hbar k\exp\left(  - \frac{(p-\hbar k)^{2}}{\hbar^{2}}d^{2} \right)  & =\hbar k \sqrt{ \pi } \frac{\hbar}{d}  \\
 & =\sqrt{ \pi } \frac{\hbar^{2}k}{d}
\end{align}$$
Therefore:
$$\begin{align}
\langle p \rangle & = \frac{d}{\hbar \sqrt{ \pi }}\sqrt{ \pi } \frac{\hbar^{2}k}{d} \\
 & =\hbar k
\end{align}$$

Next, we consider:
$$\begin{align}
\langle p^{2} \rangle & =\int_{-\infty}^{\infty} dp p^{2}|\psi(p)|^{2} \\
 & =\frac{d}{\hbar \sqrt{ \pi }} \int dp p^{2} \exp\left(  -  \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}}  \right) \\
 & =\frac{d}{\hbar \sqrt{ \pi }} \int dp((p-\hbar k)^{2}+2\hbar kp-\hbar^{2}k^{2})\exp\left(  - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right)
\end{align}$$
We compute:
$$\begin{align}
\int dpp^{2}(p-\hbar k)^{2}\exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) & = \frac{h^{3}}{d^{3}}\int_{-\infty}^{\infty} d\left( (p-\hbar k) \frac{d}{\hbar}  \right)(p-\hbar k)^{2} \frac{d^{2}}{\hbar^{2}} \exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) \\
 & =2\frac{h^{3}}{d^{3}}\int_{0}^{\infty} d\left( (p-\hbar k) \frac{d}{\hbar}  \right)(p-\hbar k)^{2} \frac{d^{2}}{\hbar^{2}} \exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) \\
 & = \frac{\hbar^{3}}{d^{3}} 2 \Gamma(2) \\
 & =2 \frac{h^{3}}{d^{3}}
\end{align}$$
Then we have:
$$\begin{align}
\int dpp^{2}\exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) & = \frac{\hbar^{3}}{d^{3}}2+ 2\hbar k\sqrt{ \pi } \frac{\hbar^{2}k}{d}- \hbar^{2}k^{2} \sqrt{ \pi } \frac{\hbar}{d} \\
 & =2 \frac{\hbar^{3}}{d^{3}}+ \sqrt{ \pi } \frac{\hbar^{3}k^{2}}{d}
\end{align}$$
Then:
$$\begin{align}
\langle p^{2} \rangle & = \frac{d}{\hbar \sqrt{ \pi }}\left(  2 \frac{\hbar^{3}}{d^{3}}+ \sqrt{ \pi } \frac{\hbar^{3}k^{2}}{d} \right) \\
 & = \frac{2}{\sqrt{ \pi }} \frac{\hbar^{2}}{d^{2}}+ \hbar^{2}k^{2}
\end{align}$$
Then:
$$\langle p^{2} \rangle- \langle p \rangle^{2}= \frac{2}{\sqrt{ \pi }} \frac{\hbar^{2}}{d^{2}}$$
These results are all consistent with $a).$

