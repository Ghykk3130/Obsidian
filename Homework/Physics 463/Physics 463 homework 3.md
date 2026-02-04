# 1.
## (a)

Given a lattice vector $\mathbf{R}$, it must belong to some lattice plane defined by $\hat{\mathbf{n}}$. Say this plane is the $m$th plane from the plane crossing the origin along the $\hat{n}$ direction. Then:
$$\mathbf{R}\cdot \hat{\mathbf{n}}=2\pi md$$
Then:
$$\begin{align}
 & \mathbf{R}\cdot \frac{2\pi}{d}  \hat{\mathbf{n}}=2\pi m
\end{align}$$
So clearly, $\frac{2\pi}{d}  \hat{\mathbf{n}}$ is a reciprocal lattice vector.
## (b)

For the sake of contradiction, assume the length is $d^{'}>d$. Then:
$$\begin{align}
\mathbf{R}\cdot \frac{2\pi}{d^{'}}  \hat{\mathbf{n}}= 2\pi m \frac{d^{}}{d^{'}} \notin 2\pi \mathbb{Z}
\end{align}$$
Then $\frac{2\pi}{d^{'}}  \hat{\mathbf{n}}$ is not a reciprocal lattice vector $\rightarrow \leftarrow$.
## (c)

Let $\mathbf{G}=\sum_{j}v_{j}\mathbf{b}_{j}$ be the shortest reciprocal lattice vector along some direction. Then $g.c.d.(v_{1},\dots,v_{d})=1$, where $d$ is the dimension of the system.

>[!Success] Claim 1
>Given $n\in \mathbb{Z}$, there exists some $\mathbf{R}$ lattice vectors such that $\mathbf{G}\cdot \mathbf{R}=2\pi n$
## Proof of claim.

Since $g.c.d.(v_{1},\dots,v_{d})=1$, generalized Bezout's identity implies:
$$\sum_{j}n_{j}^{'}v_{j}=1\text{ for some }n_{j}^{'}\in \mathbb{Z}$$
Then set $n_{j}:=nn_{j}^{'}\in \mathbb{Z}$, $\mathbf{R}=\sum n_{j}\mathbf{a}_{j}$. We have:
$$\begin{align}
\mathbf{R} \cdot \mathbf{G} & = 2\pi \sum v_{j}n_{j}=2\pi n
\end{align}$$
>[!Right]
>$\blacksquare$

Now the non-empty set $\{ \mathbf{R}|\mathbf{G}\cdot \mathbf{R}=2\pi n \}$ forms a plane. Note that these planes are disjoint:
$$\{ \mathbf{R}|\mathbf{G}\cdot \mathbf{R}=2\pi n \}\cap \{ \mathbf{R}|\mathbf{G}\cdot \mathbf{R}=2\pi m \}=\phi \text{ for }m\neq n$$
Since fix the projection of a lattice vector $\mathbf{R}$ onto $\mathbf{G}$ is unique. 

Note that any lattice point must belong to some plane defined this way. Since given $\mathbf{R}$, we must have $\mathbf{G}\cdot \mathbf{R}=2\pi n\text{ for some }n$. Therefore:
$$\bigcup_{n\in \mathbb{Z}}\{ \mathbf{R}|\mathbf{G}\cdot \mathbf{R}=2\pi m \}=\text{Bravais lattice}$$
Then clearly, the normal of $\{ \mathbf{R}|\mathbf{G}\cdot \mathbf{R}=2\pi m \}$ is along $\mathbf{G}$ by the definition of planes. The plane separation is clearly:
$$d= \frac{1}{G} (2\pi (m+1)-2\pi m)= \frac{2\pi}{G}$$
# 2.
## (a)

Choose the primitive vectors $\mathbf{a}_{1}=a \hat{\mathbf{x}},\ \mathbf{a}_{2}=a  \hat{\mathbf{y}}$. Then the reciprocal primitive vectors are:
$$\mathbf{b}_{1}= \frac{2\pi}{a}  \hat{\mathbf{x}},\ \mathbf{b}_{2}= \frac{2\pi}{a}  \hat{\mathbf{y}}$$
Let $\mathbf{R}=n_{1}\mathbf{a}_{1}+n_{2}\mathbf{a}_{2}$.Notice that the lattice planes are given by:
$$\frac{n_{1}}{2na}+ \frac{n_{2}}{na}=1,\ n\in \mathbb{Z}$$
Then the normal vectors are in the direction $(1,2)$. In terms of reciprocal primitive vectors, it is in the direction $\mathbf{b}_{1}+2\mathbf{b}_{2}$. Notice that $g.c.d.(1,2)=1$, so it is the shortest reciprocal lattice corresponding to the lattice planes. So $\mathbf{G}=\mathbf{b}_{1}+2\mathbf{b}_{2}$.
## (b)

It is easy to see from geometry that $d= \frac{a}{\sqrt{ 5 }}$. $\hat{\mathbf{n}}=\left( \frac{1}{\sqrt{ 5 }}, \frac{2}{\sqrt{ 5 }} \right)$. Then:
$$\frac{2\pi}{d}  \hat{\mathbf{n}}= \frac{2\pi}{\frac{a}{\sqrt{ 5 }}}\left( \frac{1}{\sqrt{ 5 }}\hat{x}+ \frac{2}{\sqrt{ 5 }}\hat{y} \right)=\frac{2\pi}{a}(\hat{x}+2\hat{y})=\mathbf{b}_{1}+2\mathbf{b}_{2}=\mathbf{G}$$
## (c)

The Miller index is clearly $(12)$.
# Kittel 2.5
## (a)

![[Drawing 2026-02-03 17.30.27.excalidraw|center|400]]
Note that the atoms with numbers can be chosen as bases. Choose the primitive vectors along the three edges extending from 1. Let the length of the cube be $a$. Then:
$$\begin{align}
\mathbf{a}_{1}= a \hat{\mathbf{x}},\ \mathbf{a}_{2}= a  \hat{\mathbf{y}},\ \mathbf{a}_{3}=a  \hat{\mathbf{z}}
\end{align}$$
Then the positions of atoms are given by:
$$\begin{array}
{|c|c|c|c|}\hline 
 1:(0,0,0)  &   2:\left( \frac{1}{2}, \frac{1}{2},0  \right)   & 3  :\left( 0, \frac{1}{2}, \frac{1}{2}  \right) &  4:\left( \frac{1}{2}, 0 , \frac{1}{2} \right) \\ \hline
  5:\left( \frac{1}{4}, \frac{1}{4}, \frac{3}{4} \right) & 6:\left( \frac{3}{4}, \frac{3}{4}, \frac{3}{4}  \right) & 7:\left( \frac{1}{4}, \frac{3}{4}, \frac{1}{4} \right) & 8:\left( \frac{3}{4}, \frac{1}{4}, \frac{1}{4} \right) \\
\hline  
\end{array}$$
Let $\mathbf{G}=\sum_{j}v_{j}\mathbf{b}_{j}$, we calculate the phases by $\mathbf{G}\cdot \mathbf{r}$:
$$\begin{array}
{|c|c|c|}\hline {1}:0 & 2:\pi(v_{1}+v_{2}) & 3:\pi(v_{2}+v_{3}) & 4:\pi (v_{1}+v_{3}) \\
\hline 5: \frac{\pi}{2}v_{1}+ \frac{\pi}{2}v_{2}+ \frac{3}{2}\pi v_{3} & 6: \frac{3}{2}\pi(v_{1}+v_{2}+v_{3}) & 7: \frac{\pi}{2}v_{1}+ \frac{3}{2}\pi v_{2}+ \frac{\pi}{2}v_{3} & 8: \frac{3}{2}\pi v_{1}+ \frac{\pi}{2} v_{2}+ \frac{\pi }{2}v_{3} \\
\hline
\end{array}$$
Since these are all carbon atoms, the atomic form factors $f$ are the same. Then we have:
$$\begin{align}
S_{\mathbf{G}} & =\left( \exp(i\cdot{0})+ \exp\left(  i\pi(v_{1}+v_{2}) \right) +\exp(i\pi(v_{2}+v_{3}))+\exp(i\pi(v_{1}+v_{3}))+\exp\left( i \frac{\pi}{2}(v_{1} \right.\right.\\
 & \left.\left.+v_{2}+3v_{3}) \right) +\exp\left(  i \frac{3}{2}\pi (v_{1}+v_{2}+v_{3})\right)  +\exp\left( i \frac{\pi}{2}(v_{1}+3v_{2}+v_{3}) \right)+\exp\left( i \frac{\pi}{2}(3v_{1}+v_{2}+v_{3}) \right)\right)f \\
 & = (1+(-1)^{v_{1}+v_{2}}+(-1)^{v_{2}+v_{3}}+(-1)^{v_{1}+v_{3}}+i^{v_{1}+v_{2}+3v_{3}}+(-i)^{v_{1}+v_{2}+v_{3}}+i^{v_{1}+3v_{2}+v_{3}}+i^{3v_{1}+v_{2}+v_{3}} )f \\
 & = (1+(-1)^{v_{1}+v_{2}}+(-1)^{v_{2}+v_{3}}+(-1)^{v_{1}+v_{3}}+i^{v_{1}+v_{2}+v_{3}}((-1)^{v_{1}}+(-1)^{v_{2}}+(-1)^{v_{3}}+(-1)^{v_{1}+v_{2}+v_{3}}))f
\end{align}$$
## (b)

Note that $S_{\mathbf{G}}$ depends only on whether $v_{j}$'s are odd or even, not on their magnitude. 

Suppose $v_{1},v_{2},v_{3}$ are all odd. Then the phase is complex since $i^{v_{1}+v_{2}+v_{3}}$ is imaginary. Note that the real part $1+(-1)^{v_{1}+v_{2}}+(-1)^{v_{2}+v_{3}}+(-1)^{v_{1}+v_{3}}=-2\neq 0$. So $S_{\mathbf{G}}\neq 0$.

Suppose one of $v_{1},v_{2},v_{3}$ is odd, others are even. Without loss of generality, let $v_{1}$ be odd. Then the real part of the phase is $-1+1+1-1=0$. The imaginary part of the phase is $-1+1+1-1=0$. So $S_{\mathbf{G}}=0$.

Suppose two of $v_{1},v_{2},v_{3}$ are odd, the other is even. Without loss of generality, let $v_{1},v_{2}$ be odd. Then the real part of the phase is $1+1-1-1=0$. The imaginary part of the phase is $-1-1+1+1=0$. So $S_{\mathbf{G}}=0$.

Suppose $v_{1},v_{2},v_{3}$ are all even. If $\frac{v_{1}+v_{2}+v_{3}}{2}$ is even, then the phase factor is $4+4(-1)^{\frac{v_{1}+v_{2}+v_{3}}{2}}=8\neq 0$. If $\frac{v_{1}+v_{2}+v_{3}}{2}$ is odd, then the phase factor is $0$.

Therefore, for $S_{\mathbf{G}}\neq 0$, we either have $v_{1},v_{2},v_{3}$ all odd, or $v_{1},v_{2},v_{3}, \frac{v_{1}+v_{2}+v_{3}}{2}$ all even. The latter one is equivalent to $v_{1},v_{2},v_{3}$ all even and $v_{1}+v_{2}+v_{3}=4n\text{ for some }n\in \mathbb{Z}$.
# Kittel 2.6

We have:
$$\begin{align}
f_{\mathbf{G}}=\int_{\mathbb{R}^{3}}d^{3}r(\pi a_{0}^{3})^{-1}\exp\left( - \frac{2r}{a_{0}} \right)e^{i\mathbf{G}\cdot \mathbf{r}}
\end{align}$$
Choose the z axis to align with $\mathbf{G}$. Let $\omega=\frac{2}{a_{0}}-iG\cos \theta$.Then:
$$\begin{align}
\int_{\mathbb{R}^{3}}d^{3}r \exp\left( - \frac{2r}{a_{0}}+i\mathbf{G}\cdot \mathbf{r} \right) & =2\pi\int d\theta dr r^{2}\sin \theta\exp\left( - \frac{2r}{a_{0}}+iGr\cos \theta \right) \\
 & = 2\pi \int_{0}^{\pi} d\theta \sin \theta \int_{0}^{\infty} drr^{2}\exp(-\omega r)
\end{align}$$
We have:
$$\begin{align}
\int_{\mathbb{R}}drr^{2}\exp(-\omega r) & = \int dr \frac{\partial^{2}}{\partial \omega^{2}}\exp(-\omega r) \\
 & = \frac{\partial^{2}}{\partial \omega^{2}}\int dr\exp(-\omega r) \\
 & = \frac{\partial^{2}}{\partial \omega^{2}}\left( \frac{1}{\omega} \right) \\
 & = \frac{2}{\omega^{3}} \\
 & = 2 \left( \frac{2}{a_{0}}-iG\cos \theta \right)^{-3}
\end{align}$$
Now:
$$\begin{align}
\int_{0  }^{\pi}d\theta \sin \theta 2\left( \frac{2}{a_{0}}-iG\cos \theta \right)^{-3} & = - \frac{1}{-iG} 2 \cdot\left( - \frac{1}{2} \right) \left[ \left( \frac{2}{a_{0}}-iG\cos \theta \right)^{-2} \right]_{0}^{\pi} \\
 & = \frac{i}{G}\left[ \frac{1}{\left( \frac{2}{a_{0}}+iG \right)^{2}}- \frac{1}{\left( \frac{2}{a_{0}}-iG \right)^{2}} \right] \\
 & = \frac{8}{a_{0}} \frac{1}{\left( \frac{4}{a_{0}^{2}}+G^{2} \right)^{2}}
\end{align}$$
Then:
$$\begin{align}
f_{\mathbf{G}} & = 2\pi \cdot \frac{1}{\pi a_{0}^{3}} \cdot \frac{8}{a_{0}} \frac{1}{\left( \frac{4}{a_{0}^{2}}+G^{2} \right)^{2}} \\
 & = \frac{16}{(4+G^{2}a_{0}^{2})^{2}}
\end{align}$$
# Kittel 2.7
## (a)

![[Drawing 2026-02-03 19.56.43.excalidraw|center|200]]
Note that the dots in the plot are not atoms, but lattice points. Notice that the path length difference between the nearest sites is $a\cos \theta$. Assuming that the scattering is elastic so that the wavelength does not change. The condition for constructive interference is clearly:
$$n\lambda={a}\cos \theta$$
## (b)

Let the x axis align with the atom chain. 
![[Drawing 2026-02-03 20.13.42.excalidraw|center|300]]
Then the scattering amplitude is:
$$F=\sum_{\mathbf{R}}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}(f_{A}e^{i\Delta \mathbf{k}\cdot \mathbf{r}_{A}}+f_{B}e^{i\Delta \mathbf{k}\cdot \mathbf{r}_{B}})$$
where $\mathbf{r}_{A},\mathbf{r}_{B}$ are the positions of $A,B$ in their primitive cell. Without loss of generality, let the origin of the primitive cell coincide with $A$. Then:
$$\mathbf{r}_{A}=0,\ \mathbf{r}_{B}= \frac{a}{2}  \hat{\mathbf{x}}$$
Observe that $\Delta k_{x}= k\cos \theta$. So:
$$\begin{align}
F=\sum_{\mathbf{R}}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}\left( f_{A}+f_{B}e^{i \frac{ka}{2} \cos \theta} \right)
\end{align}$$
So we obtain the intensity:
$$I\propto|f_{A}+f_{B}e^{i \frac{ka}{2}\cos \theta}|^{2}=|f_{A}+f_{B}\exp\left( i \frac{\pi a}{\lambda}\cos \theta \right)|^{2}$$
If $n$ is odd, we have $\frac{a\cos \theta}{\lambda}$ odd. So $I\propto|f_{A}-f_{B}|^{2}$. If $n$ is even, we have $\frac{a\cos \theta}{\lambda}$ even. So $I\propto|f_{A}+f_{B}|^{2}$.
## (c)

Notice that if $f_{A}=f_{B}$, there are no peaks for odd $n$. The distinction between atom A and atom B vanishes. The physical lattice no longer has a periodicity of $a$; instead, it is now a simple mono-atomic line with a periodicity of $a/2$ (since the atoms are now identical and equally spaced by $a/2$).

Because the real lattice spacing has halved to $a' = a/2$, the reciprocal lattice spacing doubles. In the original indexing based on $a$, only the "even" peaks ($n=2, 4, 6...$) correspond to the allowed diffraction angles for a lattice of spacing $a/2$. The "odd" peaks correspond to a periodicity of $a$ that no longer physically exists, so they interfere destructively and vanish.



