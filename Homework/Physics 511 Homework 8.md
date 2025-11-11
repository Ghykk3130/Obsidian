# 1.
Let $\gamma_{1},\gamma_{2}$ be the spaces corresponding to the two tubes. Let $\Sigma$ be the plane that blocks the beam at the opening of the two tubes. Then I have a potential:
$$V(\vec{r},t)=\left\{\begin{align}
 & \infty,\vec{r}\in \Sigma \\
 & qV_{1},\vec{r}\in \gamma_{1},t_{0}\leq t \leq T^{'} \\
 & qV_{2},\vec{r}\in \gamma_{2} \\
 & 0,\text{elsewhere},t_{0}\leq t\leq T^{'}
\end{align}\right.$$
Let $\psi(\vec{r},0)$ be the wavefunction at $0$. Then at $t$, the wave function on the screen is:
$$\psi(\vec{r},t)=\int d^{3}r^{'}K(\vec{r},t,\vec{r}^{'},0)\psi(\vec{r}^{'},0)
$$
Since the potential on $\Sigma$ is $\infty$ in the path integral, the paths can only be taken to pass through $\gamma_{1},\gamma_{2}$:
$$\begin{align}
K(\vec{r},t,\vec{r}^{'},0) & = \int_{\Gamma \text{ through }\gamma_{1},\gamma_{2}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)} \\
 & = \int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)e^{\frac{i}{\hbar}S(\Gamma)}+\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)}
\end{align}$$
Assuming that $0\leq t_{0}\leq T^{'}\leq t$, I can compute:
$$\begin{align}
\int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)} & = \int\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int_{0}^tdT\left( \frac{p^{2}}{2m}-qV_{1}\mathbb{1}_{[t_{0},T^{'}]}(T) \right) \right) \\
 & = \exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)
\end{align}$$
Similarly:
$$\int_{\Gamma \text{ through }\gamma_{2}}=\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0})\right)\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma ) \exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)$$
Due to symmetry, I have:
$$\int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)=\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)$$
Denote this integral by $K^{'}$. Then I have:
$$\begin{align}
\psi(\vec{r},t)=\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int d^{3}r^{'}K^{'}\psi(\vec{r}^{'},{0} )+ \exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0}) \right)\int d^{3}r^{'}K^{'}\psi(\vec{r}^{'},0)
\end{align}$$
Denote $\int d^{3}r^{'}K^{'}\psi(\vec{r}^{'},0)$ by $\psi^{'}(\vec{r},t)$. Then the wavefunction on the screen is:
$$\psi(\vec{r},t)=\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0})\right)\psi^{'}(\vec{r},t)+\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0})  \right)\psi^{'}(\vec{r},t)$$
Then the intensity is given by:
$$\begin{align}
I & =|\psi(\vec{r},t)|^{2} \\
 & = 2|\psi^{'}(\vec{r},t)|^{2}+2|\psi^{'}(\vec{r},t)|^{2}\cos\left( \frac{q}{\hbar}(V_{2}-V_{2})(T^{'}-t_{0}) \right)
\end{align}$$
# 2)
## a).
$$\begin{align}
S_{x}S_{y} & = \frac{\hbar^{2}}{2}\begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}\begin{pmatrix}
0 & -i &0 \\
i & 0 &-i \\
0 & i & 0  
\end{pmatrix} \\
 & = \frac{\hbar^{2}}{2}\begin{pmatrix}
i & 0 & -i \\
0 & 0 & 0 \\
i & 0 & -i
\end{pmatrix}
\end{align}$$
$$\begin{align}
S_{y}S_{x} & = \frac{\hbar^{2}}{2}\begin{pmatrix}
0 & -i & 0 \\
i & 0 & -i \\
0 & i & 0
\end{pmatrix}\begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix} \\
 & = \frac{\hbar^{2}}{2}\begin{pmatrix}
-i & 0 & -i \\
0 & 0 & 0 \\
i & 0 & i
\end{pmatrix}
\end{align}$$
Then clearly,
$$[S_{x},S_{y}]=\hbar^{2}\begin{pmatrix}
i & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -i
\end{pmatrix}=i\hbar S_{z}$$
## b).
I have:
$$\begin{align}
\begin{pmatrix}
1 & -2i & -3
\end{pmatrix}\begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix}\begin{pmatrix}
1 \\
2i \\
-3
\end{pmatrix} & = \begin{pmatrix}
1 & -2i & -3
\end{pmatrix}\begin{pmatrix}
2i \\
-2 \\
2i
\end{pmatrix} \\
 & = 0
\end{align}$$
Therefore, I must conclude:
$$\langle s_{x}\rangle=0$$
## c).
Compute the eigen values of the matrix $S_{x}$:
$$\begin{align}
 & \begin{vmatrix}
\lambda & -1 & 0 \\
-1 & \lambda & -1 \\
0 & -1 & \lambda
\end{vmatrix}=0 \\
\implies & \lambda(\lambda^{2}-2)=0 \\
\implies & \lambda=0,\pm \sqrt{ 2 }
\end{align}$$
Obviously, $\lambda=\sqrt{ 2 }$ corresponds to the $+\hbar$ outcome of the $S_{x}$ measurement. Then the corresponding eigen vector is:
$$\begin{align}
 & \begin{pmatrix}
    \sqrt{ 2 } & -1 & 0 \\
-1 & \sqrt{ 2 } & -1 \\
0 & -1 & \sqrt{ 2 }
\end{pmatrix}\ket{m_{x}=1}   =0 \\
\implies & \ket{m_{x}=1} = \begin{pmatrix}
\frac{1}{2} \\
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{2}
\end{pmatrix}
\end{align}$$
Then we compute:
$$\begin{align}
|\bra{m_{x}=1} \psi\rangle|^{2} & = \left|\frac{1}{\sqrt{ 14 }}\begin{pmatrix}
\frac{1}{2} & \frac{1}{\sqrt{ 2 }} & \frac{1}{2} 
\end{pmatrix}\begin{pmatrix}
1 \\
2i \\
-3
\end{pmatrix}\right|^{2} \\
 & = \frac{3}{14}
\end{align}$$

# 3).
## a).
$$\begin{align}
G_{1} & = -i\hbar\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{pmatrix}
\end{align}$$
$$G_{2}=-i\hbar \begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0   \\
1 & 0 & 0 
\end{pmatrix}$$
$$G_{3}=-i\hbar \begin{pmatrix}
0 & 1 & 0 \\
-1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$
Then clearly:
$$G_{1}G_{2}= - \hbar^{2}\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{pmatrix}\begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
1 & 0 & 0
\end{pmatrix}=-\hbar^{2} \begin{pmatrix}
0 & 0 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$
$$G_{2}G_{1}=-\hbar^{2}\begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
1 & 0 & 0
\end{pmatrix}\begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{pmatrix}=-\hbar^{2}\begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$
Then:
$$[G_{1},G_{2}]=-\hbar^{2}\begin{pmatrix}
0 & -1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}=i\hbar G_{3}$$
## b).
Know that $G_{3}=-i\hbar \begin{pmatrix}0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0\end{pmatrix}$
Compute the eigenvalues:
$$\begin{align}
 & \begin{vmatrix}
\lambda & -1 & 0 \\
1 & \lambda & 0 \\
0 & 0 & \lambda
\end{vmatrix}=0 \\
\implies & \lambda=0,\pm i
\end{align}$$
Then multiplying by $-i\hbar$ to get the eigenvalues $0,\pm \hbar$. Then for 0, compute:
$$\begin{pmatrix}
0 & -1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}\ket{0} =0\implies \ket{0} = \begin{pmatrix}
0 \\
0 \\
1
\end{pmatrix}$$
For $\hbar$, compute:
$$\begin{pmatrix}
-i & -1 & 0 \\
1 & -i & 0 \\
0 & 0 & -i
\end{pmatrix}\ket{\hbar} =0\implies \ket{\hbar} = \frac{1}{\sqrt{ 2 }} \begin{pmatrix}
-i \\
1 \\
0
\end{pmatrix}$$
For $-\hbar$, compute:
$$\begin{pmatrix}
i & -1 & 0 \\
1 & i & 0 \\
0 & 0 & i
\end{pmatrix}\ket{-\hbar} =0\implies \ket{-\hbar} =\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
i \\
1 \\
0
\end{pmatrix}$$
## c).
Clearly, $S_{z}$ is the diagonalized $G_{3}$. Explicitly, I have:
$$\begin{pmatrix}
- \frac{i}{\sqrt{ 2 }} & 0 & \frac{i}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{\sqrt{ 2 }} \\
0 & 1 & 0
\end{pmatrix}\begin{pmatrix}
\hbar & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -\hbar
\end{pmatrix}\begin{pmatrix}
- \frac{i}{\sqrt{ 2 }} & 0 & \frac{i}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{\sqrt{ 2 }} \\
0 & 1 & 0
\end{pmatrix}^{\dagger}=G_{3}$$
So the transformation matrix is:
$$P=\begin{pmatrix}
- \frac{i}{\sqrt{ 2 }} & 0 & \frac{i}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{\sqrt{ 2 }} \\
0 & 1 & 0
\end{pmatrix}$$
# 4)
Know that this corresponds to a rotation $\exp\left( - \frac{i}{\hbar}S_{y}2\theta \right)$

First diagonalize $S_{y}$:
$$S_{y}= \begin{pmatrix}
- \frac{1}{\sqrt{ 5 }} &  \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 5 }} \\
- \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i & 0 &  \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i \\
\frac{\sqrt{ 2 }}{\sqrt{ 5 }}i &  \frac{1}{\sqrt{ 2 }} & -  \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i
\end{pmatrix}\begin{pmatrix}
\hbar & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -\hbar
\end{pmatrix}\begin{pmatrix}
- \frac{1}{\sqrt{ 5 }} &  \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 5 }} \\
- \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i & 0 &  \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i \\
\frac{\sqrt{ 2 }}{\sqrt{ 5 }}i &  \frac{1}{\sqrt{ 2 }} & -  \frac{\sqrt{ 2 }}{\sqrt{ 5 }}i
\end{pmatrix}^{\dagger}$$
Denote the transformation matrix as $P$. Then it suffices to compute:
$$\begin{align}
\exp\left( - \frac{i}{\hbar}S_{y}2\theta \right) & = \exp(- i 2\theta Pdiag(1,0,-1)P^{\dagger}) \\
 & = \sum_{j}( -2i\theta)^j \frac{1}{j!}P ^{\dagger}diag(1,0,-1)^jP^{\dagger}
\end{align}$$
If $j$ is even, I have:
$$\begin{align}
\sum_{j\text{ even}}(-2i\theta)^j \frac{1}{j!}P^{\dagger}diag(1,0,-1)^jP^{\dagger} & =\sum_{j\text{ even}} (-2i\theta)^j \frac{1}{j!} P diag(1,0,1)P^{\dagger} \\
 & = \cosh(-2i\theta)Pdiag(1,0,1)P^{\dagger} \\
 & = \cos(2\theta)Pdiag(1,0,1)P^{\dagger} \\
 & = \cos(2\theta) \begin{pmatrix}
\frac{2}{5} &  0 & 0 \\
0 &  \frac{4}{5} & - \frac{4}{5} \\
0 & - \frac{4}{5} & \frac{4}{5}
\end{pmatrix}
\end{align}$$
If $j$ is odd, I have:
$$\begin{align}
\sum_{j\text{ odd}}(-2i\theta)^j \frac{1}{j!}Pdiag(1,0,-1)^jP^{\dagger} & =\sum_{j\text{ odd}}(-2i\theta)^j \frac{1}{j!}Pdiag(1,0,-1)P^{\dagger}  \\
 & = \sinh(-2i\theta)Pdiag(1,0,-1)P^{\dagger} \\
 & = -i\sin (2\theta) \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
0 & -i & 0 \\
i & 0 & -i \\
0 & i & 0
\end{pmatrix} \\
 & = \sin (2\theta) \begin{pmatrix}
0 & - \frac{1}{\sqrt{ 2 }} & 0 \\
\frac{1}{\sqrt{ 2 }} & 0 & 0 \frac{1}{\sqrt{ 2 }} \\
0 & \frac{1}{\sqrt{ 2 }} & 0
\end{pmatrix}
\end{align}$$
Therefore:
$$\exp\left( - \frac{i}{\hbar }S_{y}2\theta \right)=\cos(2\theta) \begin{pmatrix}
\frac{2}{5} &  0 & 0 \\
0 &  \frac{4}{5} & - \frac{4}{5} \\
0 & - \frac{4}{5} & \frac{4}{5}
\end{pmatrix}+\sin (2\theta) \begin{pmatrix}
0 & - \frac{1}{\sqrt{ 2 }} & 0 \\
\frac{1}{\sqrt{ 2 }} & 0 & 0 \frac{1}{\sqrt{ 2 }} \\
0 & \frac{1}{\sqrt{ 2 }} & 0
\end{pmatrix}$$
Therefore:
$$\exp\left( - \frac{i}{\hbar}S_{y}2\theta \right)\begin{pmatrix}
1 \\
0 \\
0
\end{pmatrix}=\begin{pmatrix}
\frac{2}{5}\cos 2\theta \\
\frac{1}{\sqrt{ 2 }}\sin 2\theta \\
0
\end{pmatrix}$$

