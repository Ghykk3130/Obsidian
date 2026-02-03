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

For the sake of contradiction, assume the length is $d^{'}<d$. Then:
$$\begin{align}
\mathbf{R}\cdot \frac{2\pi}{d^{'}}  \hat{\mathbf{n}}= 2\pi m \frac{d^{'}}{d} \notin 2\pi \mathbb{Z}
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

