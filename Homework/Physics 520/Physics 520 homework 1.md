# Problem 1

We have $\mathbf{b}_{1}= \frac{2\pi}{a}  \hat{\mathbf{x}},\ \mathbf{b}_{2}= \frac{2\pi}{a}  \hat{\mathbf{y}}$ spanning the reciprocal lattice. Then the first Brillouin zone is a square with length $\frac{2\pi}{a}$ centered at $0$.
![[b6b008242f3cc06a5cb15010ad864727.jpg|centering|300]]
The three high-symmetry segments are completely specified by constraints on $k_{x},k_{y}$:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & k_{x}= \frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
If the direction of the plotted path matters, $k_{y}$ decreases on $M\rightarrow X$, and $k_{x}$ decreases on $X\rightarrow \Gamma$.

Let $\mathbf{G}= \frac{2\pi}{a}(n_{x},n_{y})$. Then:
$$E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}- \frac{2\pi}{a}n_{x} \right)^{2}+\left( k_{y}- \frac{2\pi}{a}n_{y} \right)^{2} \right]$$
From $\Gamma\rightarrow M$, we have:
$$E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}- \frac{2\pi}{a}n_{x} \right)^{2}+\left( k_{x}- \frac{2\pi}{a}n_{y} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a}$$
From $M\rightarrow X$, we have:
$$E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}(1-2n_{x})^{2}+ \left( k_{y}- \frac{2\pi}{a}n_{y} \right)^{2} \right],\quad k_{x}= \frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a}$$
From $X\rightarrow \Gamma$, we have:
$$E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}- \frac{2\pi}{a}n_{x} \right)^{2}+4 \frac{\pi^{2}}{a^{2}}n_{y}^{2} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}$$
It is useful to define $E_{0}= \frac{\hbar^{2}\pi^{2}}{2m_{e}a^{2}}$ and $q_{i}= \frac{ak_{i}}{\pi}$. Then:
$$\frac{E}{E_{0}}=(q_{x}-2n_{x})^{2}+(q_{y}-2n_{y})^{2}$$
and the plotted part of each curve is the part satisfying $\frac{E}{E_{0}}\leq 10$ on the constrained path.

**For $\mathbf{G}=0$:**

Take $n_{x}=0,\ n_{y}=0$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}(2k_{x}^{2}),\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left( \frac{\pi^{2}}{a^{2}}+k_{y}^{2} \right),\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}k_{x}^{2},\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[9b95f89639111d180225ad4831bc840b.jpg|centering|300]]
**For $\mathbf{G}= \frac{2\pi}{a} \hat{\mathbf{x}}:$**

Take $n_{x}=1,\ n_{y}=0$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+k_{x}^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left( \frac{\pi^{2}}{a^{2}}+k_{y}^{2} \right),\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}-\frac{2\pi}{a} \right)^{2},\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[e397e3110a4f7d58903dd8a32db6c52b.jpg|centering|300]]
**For $\mathbf{G}= -\frac{2\pi}{a}  \hat{\mathbf{x}}:$**

Take $n_{x}=-1,\ n_{y}=0$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}+\frac{2\pi}{a} \right)^{2}+k_{x}^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left( \frac{9\pi^{2}}{a^{2}}+k_{y}^{2} \right),\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}+\frac{2\pi}{a} \right)^{2},\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[b1cf1a8d5fa264522ff5eeb605b6d09e.jpg|centering|300]]
**For $\mathbf{G}= \frac{2\pi}{a} \hat{\mathbf{y}}$:**

Take $n_{x}=0,\ n_{y}=1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ k_{x}^{2}+\left( k_{x}-\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}-\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}^{2}+\frac{4\pi^{2}}{a^{2}} \right),\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[d50b544474bb78038b2b769f204c9eac.jpg|centering|300]]
**For $\mathbf{G}=- \frac{2\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=0,\ n_{y}= - 1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ k_{x}^{2}+\left( k_{x}+\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}+\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}^{2}+\frac{4\pi^{2}}{a^{2}} \right),\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[e9fe743e210eb191f71c2bdd70ab2122.jpg|centering|300]]
**For $\mathbf{G}= \frac{2\pi}{a}  \hat{\mathbf{x}}+ \frac{2\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=1,\ n_{y}=1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ 2\left( k_{x}-\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}-\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+\frac{4\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[9e852bc6cd6908e5c9f9a0ce8ea397a1.jpg|centering|300]]
**For $\mathbf{G}=\frac{2\pi}{a} \hat{\mathbf{x}}- \frac{2\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=1,\ n_{y}=-1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+\left( k_{x}+\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}+\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+\frac{4\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[5ae625922ff714d6970936cddec3c77f.jpg|centering|300]]
**For $\mathbf{G}=- \frac{2\pi}{a}  \hat{\mathbf{x}}+ \frac{2\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=-1,\ n_{y}=1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}+\frac{2\pi}{a} \right)^{2}+\left( k_{x}-\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{9\pi^{2}}{a^{2}}+\left( k_{y}-\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}+\frac{2\pi}{a} \right)^{2}+\frac{4\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[29fc2e8a72c2073267052dcabe9d8240.jpg|centering|300]]
**For $\mathbf{G}= - \frac{2\pi}{a}  \hat{\mathbf{x}}- \frac{2\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=-1,\ n_{y}=-1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ 2\left( k_{x}+\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{9\pi^{2}}{a^{2}}+\left( k_{y}+\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}+\frac{2\pi}{a} \right)^{2}+\frac{4\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[443bad11be3ddcbaeee5359c2f7864b4.jpg|centering|300]]
**For $\mathbf{G}= \frac{4\pi}{a}  \hat{\mathbf{x}}$:**

Take $n_{x}=2,\ n_{y}=0$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{4\pi}{a} \right)^{2}+k_{x}^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left( \frac{9\pi^{2}}{a^{2}}+k_{y}^{2} \right),\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}-\frac{4\pi}{a} \right)^{2},\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
The curve is:
![[2b3b2050065bb313d9f0e1726c1917ec.jpg|centering|300]]
**For $\mathbf{G}=- \frac{4\pi}{a}  \hat{\mathbf{x}}$:**

Take $n_{x}=-2,\ n_{y}=0$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}+\frac{4\pi}{a} \right)^{2}+k_{x}^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left( \frac{25\pi^{2}}{a^{2}}+k_{y}^{2} \right),\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}+\frac{4\pi}{a} \right)^{2},\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
Since $E\geq 16E_{0}$ on these segments, we do not need to plot this curve.

**For $\mathbf{G}= \frac{4\pi}{a} \hat{\mathbf{y}}$:**

Take $n_{x}=0,\ n_{y}=2$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ k_{x}^{2}+\left( k_{x}-\frac{4\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}-\frac{4\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}^{2}+\frac{16\pi^{2}}{a^{2}} \right),\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
On $\Gamma\rightarrow M$ and $M\rightarrow X$, the closest point is $M$, where $E=10E_{0}=\frac{10\hbar^{2}\pi^{2}}{2m_{e}a^{2}}$. On $X\rightarrow \Gamma$, the minimum is $16E_{0}$. Therefore this $\mathbf{G}$ only contributes the endpoint $M$ at the cutoff energy, not a finite curve below the cutoff.

**For $\mathbf{G}= \frac{4\pi}{a}  \hat{\mathbf{x}}+ \frac{2\pi}{a}\hat{\mathbf{y}}$:**

Take $n_{x}=2,\ n_{y}=1$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{4\pi}{a} \right)^{2}+\left( k_{x}-\frac{2\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{9\pi^{2}}{a^{2}}+\left( k_{y}-\frac{2\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{4\pi}{a} \right)^{2}+\frac{4\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
On $\Gamma\rightarrow M$ and $M\rightarrow X$, the closest point is $M$, and:
$$E(M)= \frac{\hbar^{2}}{2m_{e}}\left[ \left( \frac{\pi}{a}- \frac{4\pi}{a} \right)^{2}+\left( \frac{\pi}{a}- \frac{2\pi}{a} \right)^{2} \right]=10E_{0}$$
Every other point on the path has $E>10E_{0}$. So this case contributes only the point $M$ at the cutoff, not a finite curve.

**For $\mathbf{G}= \frac{2\pi}{a}  \hat{\mathbf{x}}+ \frac{4\pi}{a}\hat{\mathbf{y}}$:**

Take $n_{x}=1,\ n_{y}=2$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+\left( k_{x}-\frac{4\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}-\frac{4\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \left( k_{x}-\frac{2\pi}{a} \right)^{2}+\frac{16\pi^{2}}{a^{2}} \right],\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
By the same calculation:
$$E(M)= \frac{\hbar^{2}}{2m_{e}}\left[ \left( \frac{\pi}{a}- \frac{2\pi}{a} \right)^{2}+\left( \frac{\pi}{a}- \frac{4\pi}{a} \right)^{2} \right]=10E_{0}$$
and every other point on the path has $E>10E_{0}$. So this case also only contributes the point $M$ at the cutoff.

**For $\mathbf{G}=- \frac{4\pi}{a}  \hat{\mathbf{y}}$:**

Take $n_{x}=0,\ n_{y}=-2$. The dispersion on the three line segments is:
$$
\begin{array}{ll}
\Gamma\rightarrow M: & E= \frac{\hbar^{2}}{2m_{e}}\left[ k_{x}^{2}+\left( k_{x}+\frac{4\pi}{a} \right)^{2} \right],\quad 0\leq k_{x}=k_{y}\leq \frac{\pi}{a},\\
M\rightarrow X: & E= \frac{\hbar^{2}}{2m_{e}}\left[ \frac{\pi^{2}}{a^{2}}+\left( k_{y}+\frac{4\pi}{a} \right)^{2} \right],\quad k_{x}=\frac{\pi}{a},\quad 0\leq k_{y}\leq \frac{\pi}{a},\\
X\rightarrow \Gamma: & E= \frac{\hbar^{2}}{2m_{e}}\left( k_{x}^{2}+\frac{16\pi^{2}}{a^{2}} \right),\quad k_{y}=0,\quad 0\leq k_{x}\leq \frac{\pi}{a}.
\end{array}
$$
Since $E\geq 16E_{0}$ on these segments, we do not need to plot this curve.

We do not consider other $\mathbf{G}$'s because minimizing $(q_{x}-2n_{x})^{2}+(q_{y}-2n_{y})^{2}$ over the three constrained path segments gives a value larger than $10$ for all remaining integer pairs $(n_{x},n_{y})$.

Then combine everything together, we obtain the spaghetti diagram. Each curve is labeled with a number. 
![[Pasted image 20260909021636.png|centering|600]]
The degeneracy list of the numbered curves is:

| Curve | $(n_{x},n_{y})$  |
| ----- | ---------------- |
| 1     | $(0,0)$          |
| 2     | $(0,1),(1,0)$    |
| 3     | $(-1,0),(0,-1)$  |
| 4     | $(1,1)$          |
| 5     | $(1,-1),(-1,1)$  |
| 6     | $(-1,-1)$        |
| 7     | $(-1,0),(2,0)$   |
| 8     | $(0,-1),(1,-1)$  |
| 9     | $(0,1),(1,1)$    |
| 10    | $(0,0),(1,0)$    |
| 11    | $(2,0)$          |
| 12    | $(-1,0)$         |
| 13    | $(1,1),(1,-1)$   |
| 14    | $(0,1),(0,-1)$   |
| 15    | $(1,0)$          |
| 16    | $(0,0)$          |
| 17    | $(-1,1),(-1,-1)$ |

There are also endpoint-only degeneracies at $M$ where $E=10E_{0}$, the states
$$(-1,0),\ (2,0),\ (-1,1),\ (2,1),\ (0,-1),\ (1,-1),\ (0,2),\ (1,2)$$
are all degenerate. The endpoint-only cases are $(0,2),(2,1),(1,2)$.
