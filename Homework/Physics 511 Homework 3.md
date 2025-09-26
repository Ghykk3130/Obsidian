>[!Note]
>Sometimes, there will be problems with latex matrix expression rendering. I am totally aware of this issue but cannot fix it. Please don't take points off if you see this.
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
\frac{1}{\sqrt{ 2 }}(a-ib) \\
\frac{1}{\sqrt{ 2 }}(a+ib)
\end{pmatrix}=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}1 & -i \\
1 & i

\end{pmatrix}\begin{pmatrix}
a \\
b
\end{pmatrix}$$
So the matrix is:
$$X=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & -i \\
1 & i
\end{pmatrix}$$
## b).
$$\begin{align}
XX^{^{\dagger}} & = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & -i  \\
 1 & i 
\end{pmatrix}\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
i & -i
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
\int_{-\infty}^{\infty}dx x^{2}\exp\left( - \frac{x^{2}}{d^{2}} \right) & = d^{3}\int dt t^{2} \exp(-t^{2}) \\
 & =d^{3} 2 \int_{0}^{\infty}dtt^{2} \exp(-t^{2}) \\
 & =d^{3}2 \int \frac{1}{2} d(t^{2})(t^{2})^{1/2}\exp(-t^{2}) \\
 & =d^{3}\int d(t^{2})(t^{2})^{-1/2}\exp(-t^{2}) \\
 & = d^{3} \Gamma\left( \frac{3}{2} \right) \\
 & =d^{3} \frac{1}{2} \Gamma\left(  \frac{1}{2} \right) \\
 & = \frac{\sqrt{ \pi }}{2}d^{3}
\end{align}$$
Therefore:
$$\begin{align}
\langle p^{2} \rangle & = - \frac{\hbar^{2}}{\pi^{1/2}d}\left(  \frac{1}{d^4} \frac{\sqrt{ \pi }}{2}d^{3}- \left(  \frac{1}{d^{2}}+ k^{2} \right)d\sqrt{ \pi } \right) \\
 & = \frac{1}{2} \frac{\hbar^{2}}{d^{2}}+ k^{2}\hbar^{2}
\end{align}$$
Then I have:
$$\begin{align}
\langle p^{2}\rangle- \langle p \rangle^{2} & = \frac{1}{2} \frac{\hbar^{2}}{d^{2}}+k^{2}\hbar^{2}- k^{2}\hbar^{2} \\
 & = \frac{1}{2} \frac{\hbar^{2}}{d^{2}}
\end{align}$$
Then:
$$\Delta p= \sqrt{ \frac{1}{2} } \frac{\hbar}{d}$$
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
Borrowing the result from $a).$ We compute:
$$\begin{align}
\int dp(p-\hbar k)^{2}\exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) & = \frac{\hbar^{3}}{d^{3}}\int_{-\infty}^{\infty} d\left( (p-\hbar k) \frac{d}{\hbar}  \right)(p-\hbar k)^{2} \frac{d^{2}}{\hbar^{2}} \exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) \\
  & = \frac{\hbar^{3}}{d^{3}} \int dt t^{2} \exp(-t^{2}) \\
 & =\frac{\hbar^{3}}{d^{3}}2 \int_{0}^{\infty}  dt t^{2} \exp(-t^{2}) \\
 & = \frac{\hbar^{3}}{d^{3}}2 \frac{1}{4}\sqrt{ \pi } \\
 & = \frac{1}{2} \sqrt{ \pi } \frac{\hbar^{3}}{d^{3}}
\end{align}$$
Then we have:
$$\begin{align}
\int dpp^{2}\exp\left( - \frac{(p-\hbar k)^{2}d^{2}}{\hbar^{2}} \right) & = \frac{\sqrt{ \pi }}{2} \frac{\hbar^{3}}{d^{3}}+ 2\hbar k \sqrt{ \pi } \frac{\hbar^{2}k}{d}  - \hbar^{2}k^{2}\sqrt{ \pi } \frac{\hbar}{d} \\
 & = \frac{\sqrt{ \pi }}{2} \frac{\hbar^{3}}{d^{3}}+ \sqrt{ \pi } \frac{\hbar^{3}}{k^{2}}d
\end{align}$$
Then:
$$\begin{align}
\langle p^{2} \rangle & = \frac{d}{\hbar \sqrt{ \pi }}\left(  \frac{\sqrt{ \pi }}{2} \frac{\hbar^{3}}{d^{3}}+ \sqrt{ \pi } \frac{\hbar^{3}}{k^{2}}d \right) \\
 & = \frac{1}{2} \frac{\hbar^{2}}{d^{2}}+ \hbar^{2}k^{2}
\end{align}$$
Then:
$$\langle p^{2} \rangle- \langle p \rangle^{2}= \frac{1}{2} \frac{\hbar^{2}}{d^{2}}$$
Then:
$$\Delta p= \sqrt{ \frac{1}{2} } \frac{\hbar}{d}$$
These results are all consistent with $a).$
## c).
We need to compute $\langle x^{2} \rangle- \langle x \rangle^{2}$. 

We have:
$$\begin{align}
\langle x \rangle & = \bra{\psi} x\ket{\psi}  \\
 & =\int_{-\infty}^{\infty}dx \bra{\psi} x\rangle\bra{x} x\ket{\psi}  \\
 & =\int dx x |\psi(x)|^{2}
\end{align}$$
Know that:
$$\begin{align}
|\psi(x)|^{2} & = \frac{1}{\pi^{1/2}d} \exp\left(  - \frac{x^{2}}{d^{2}} \right)
\end{align}$$
Clearly $\langle x \rangle =0$ because $x \exp\left(  - \frac{x^{2}}{d^{2}} \right)$ is odd. 

Then borrowing the result from $b).$, we have:
$$\begin{align}
\langle x^{2} \rangle & = \int_{-\infty}^{\infty}dx x\exp\left( - \frac{x^{2}}{d^{2}} \right) \\
 & =d^{3} \int dtt^{2}\exp(-t^{2}) \\
 & = d^{3}2 \int_{0}^{\infty}dtt^{2}\exp(-t^{2}) \\
 & =2d^{3} \frac{1}{4}\sqrt{ \pi } \\
 & = \frac{1}{2}\sqrt{ \pi }d^{3}
\end{align}$$
Then:
$$\begin{align}
\langle x^{2} \rangle & - \frac{1}{\pi^{1/2}d} \frac{1}{2}\sqrt{ \pi }d^{3} \\
 & = \frac{1}{2}d^{2}
\end{align}$$
Then:
$$\langle x^{2} \rangle- \langle x \rangle^{2}= \frac{1}{2} d^{2}$$
Then I have:
$$\begin{align}
(\langle x^{2} \rangle- \langle x \rangle^{2})(\langle p^{2} \rangle- \langle p \rangle^{2}) & = \frac{1}{2}d^{2}\cdot \frac{1}{2} \frac{\hbar^{2}}{d^{2}} \\
 & = \frac{1}{4} \hbar^{2} \\
 & =\frac{1}{4}|\langle [x,p]\rangle|^{2}
\end{align}$$
# 4.
## a).
We compute:
$$\begin{align}
\int dpW(x,p,t) & =\int dp \int dy \frac{1}{\pi} \psi ^{*}(x+y,t)\psi(x-y,t) \\
 & = \frac{1}{\pi}\int dy \psi ^{*}(x+y,t)\psi(x-y,t)\int dpe^{2ipy} \\
 & = \frac{1}{\pi}\int dy \psi ^{*}(x+y,t)\psi(x-y,t)2\pi\delta(2y) \\
 & = \frac{1}{\pi}\int dy \psi ^{*}(x+y,t)\psi(x-y,t) \pi\delta(y) \\
 & =  \frac{1}{\pi}\pi \psi ^{*}(x,t)\psi(x,t) \\
 & = |\psi(x,t)|^{2} 
\end{align}$$
## b).
Know that:
$$\psi(x,t)=  \frac{1}{\sqrt{ 2\pi }}\int dp\phi(p,t)e^{ipx}$$
Note that in the following computation we shall suppress the variable $t$, because writing it out every time is inconvenient. We will put back $t$ at the end. Then substitute in to get:
$$\begin{align}
\int Wdx & =\int dx \frac{1}{\pi} \int dy \psi ^{*}(x+y,t)\psi(x-y,t)e^{2ipy}\left( \int dp^{'}\phi(p)e^{i p^{'}(x+y)} \right)^{*}\int dp^{''} \phi(p^{''})e^{ip^{''}(x-y)} \\
 & =\int dx \frac{1}{\pi}\int dye^{2ipy} \frac{1}{2\pi} \int dp^{'}\phi ^{*}(p^{'})e^{-ip^{'}(x+y)}\int dp^{''}\phi(p^{''})e^{ip^{''}(x-y)} \\
 & =\int dp^{'}\phi ^{*}(p^{'})\int dp^{''}\phi(p^{''}) \frac{1}{\pi} \frac{1}{2\pi }\int dx e^{ix(p^{''}-p^{'})}\int dye^{-iy(p^{'}+p^{''})}e^{2ipy } \\
 &= \int dp^{'}\phi ^{*}(p^{'})\int dp^{''}\phi(p^{''}) \frac{1}{2\pi^{2}}(2\pi)^{2}\delta(p^{''}-p^{'})\delta(2p-p^{'}-p^{''}) \\
 \end{align}$$
 Then consider a change of variable:
 $$\begin{align}
 & p^{''}-p^{'}=X \\
 & p^{''}+p^{'}=Y
\end{align}$$
Then I have:
$$\begin{align}
 & p^{''}= \frac{1}{2}(X+ Y) \\
 & p^{'}= \frac{1}{2}(Y- X)
\end{align}$$
I also have the Jacobian matrix relating the change of the infinitesimal measure on the corresponding manifolds:
$$dp^{'}dp^{''}=|\begin{vmatrix}
\partial p^{'} / \partial X & \partial p^{'} / \partial Y \\
\partial p^{''} / \partial X  &  \partial p^{''} / \partial Y
\end{vmatrix}|dXdY= |\begin{vmatrix}
- \frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{vmatrix}|dXdY= \frac{1}{2}dXdY
$$
Then I have:
$$\begin{align}
\int Wdx & =\iint \frac{1}{2} dXdY\phi ^{*}\left(  \frac{1}{2}(Y-X) \right)\cdot 2 \cdot \phi\left(  \frac{1}{2}(X+Y) \right) \delta(X)\delta(2p-Y) \\
 & =\int dY \phi ^{*}\left(  \frac{Y}{2} \right)\phi\left( \frac{Y}{2} \right)\delta(2p-Y) \\
 & =\phi ^{*}(p)\phi(p) \\
 & =|\phi(p) |^{2}
\end{align}$$
Add back $t$ to get:
$$|\phi(p,t)|^{2}= \int W(x,p,t)dx$$
## c).
Similarly, during the computation, we don't write out $t$ explicitly. I have:
$$\begin{align}
2\pi \iint dxdpW_{1}^{*}W_{2} & = 2\pi \int dx \int dp \frac{1}{\pi^{2}}\cdot\left(  \int dy_{1}\psi ^{*}(x_{y})\psi_{1}(x-y)e^{2ipy_{1}} \right)^{*}\int dy_{2}\psi_{2}^{*}(x+y_{2})\psi_{2}(x-y_{2})e^{2ipy_{2}} \\
 & = \frac{2}{\pi}\int dx \int dy_{1}\int dy_{2}\psi_{1}(x+y_{1})\psi ^{*}(x-y_{2})\psi ^{*}_{2}(x+y_{2})\psi(x-y_{2})\int dpe^{2ip(y_{2}-y_{1})} \\
 & = \frac{2}{\pi}\int dx \int dy_{1} \int dy_{2} \psi_{1}(x+y_{1})\psi_{1} ^{*}(x-y_{1})\psi_{2} ^{*}(x+y_{2} )\psi_{2}(x-y_{2}) \cdot 2\pi \cdot \delta(2(y_{2}-y_{1})) \\
 & = 2\int dx \int dy_{1} \int dy_{2} \psi_{1}(x+y_{1})\psi_{1} ^{*}(x-y_{1})\psi_{2} ^{*}(x+y_{2})\psi(x-y_{2})\delta(y_{2}-y_{1})
\end{align}$$
We change the variables:
$$\begin{align}
 &  y_{1}-y_{1}=Y \\
 & y_{2}+y_{1}=X
\end{align}$$
$$\implies \begin{align}
 & y_{2} = \frac{1}{2}(X+Y) \\
 & y_{1}=  \frac{1}{2}(X-Y)
\end{align}$$
Then I have:
$$dy_{1}dy_{2}= |\begin{vmatrix}
\partial y_{1} / \partial X &  \partial y_{1} / \partial Y \\
\partial y_{2} / \partial X  &  \partial y_{2} / \partial Y
\end{vmatrix}|dXdY= |\begin{vmatrix}
\frac{1}{2} & - \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{vmatrix}|dXdY= \frac{1}{2}dXdY$$
Therefore:
$$\begin{align}
2\pi \iint dxdp W_{1}^{*}W_{2} & =2\int dx \iint dXdY \frac{1}{2} \psi_{1}\left( x+ \frac{1}{2}(X-Y) \right)\psi ^{*}_{1}\left( x- \frac{1}{2}(X-Y) \right)\psi ^{*}_{2}\left( x+ \frac{1}{2}(X+Y) \right)\psi_{2}\left( x- \frac{1}{2}(X+Y) \right)\delta(Y) \\
 & = \int dx \int dX \psi_{1}\left( x+ \frac{X}{2} \right)\psi ^{*}_{1}\left( x- \frac{X}{2} \right)\psi ^{*}_{2}\left( x+ \frac{X}{2} \right) \psi_{2}\left( x- \frac{X}{2} \right)
\end{align}$$
We change the variables again:
$$\begin{align}
 & \alpha = x+ \frac{X}{2} \\
 & \beta= x- \frac{X}{2}
\end{align}$$
$$\implies \begin{align}
 & x= \frac{1}{2}(\alpha+ \beta ) \\
 & X= \alpha-\beta
\end{align}$$
Then again I have:
$$dxdX= |\begin{vmatrix}
\frac{1}{2} &  \frac{1}{2} \\
1 & -1
\end{vmatrix}|d\alpha d\beta=d\alpha d\beta$$
Then:
$$\begin{align}
2 \pi \iint dxdp W_{1}W_{2} & =\int d\alpha  \int d\beta \psi_{1}(\alpha)\psi ^{*}_{1}(\beta)\psi ^{*}_{2}(\alpha)\psi_{2}(\beta) \\
 & = \int d\alpha \psi_{1}(\alpha)\psi_{2}^{*}(\alpha)\int d \beta \psi_{1}^{*}(\beta)\psi_{2}(\beta) \\
 & = \bra{\psi_{2}} \psi_{1}\rangle \bra{\psi_{1}} \psi_{2}\rangle \\
 & = |\bra{\psi_{1}}  \psi_{2} \rangle |^{2}
\end{align}$$
