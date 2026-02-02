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

