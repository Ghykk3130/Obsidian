# 1.
Let $\gamma_{1},\gamma_{2}$ be the spaces corresponding to the two tubes. Let $\Sigma$ be the region where the classical paths are forbidden. Let $\delta_{1},\delta_{2}$ be the exits of the two tubes. Then I have a potential:
$$V(\vec{r},t)=\left\{\begin{align}
 & \infty,\vec{r}\in \Sigma \\
 & qV_{1},\vec{r}\in \gamma_{1},t_{0}\leq t \leq T^{'} \\
 & qV_{2},\vec{r}\in \gamma_{2},,t_{0}\leq t\leq T^{'} \\
 & 0,\text{elsewhere}
\end{align}\right.$$
Let $\psi(\vec{r},0)$ be the wavefunction at $0$. Then at $t$, the wave function on the screen is:
$$\psi(\vec{r},t)=\int d^{3}r^{'}K(\vec{r},t,\vec{r}^{'},0)\psi(\vec{r}^{'},0)
$$
Since the potential on $\Sigma$ is $\infty$ in the path integral, paths that pass through $\Sigma$ would contribute $S=\infty$, and $\int\mathscr{D}e^{\frac{i}{\hbar}S}$ vanishes. Therefore the paths can only be taken to pass through $\gamma_{1},\gamma_{2}$. Truncate the propagator at the exits of the two tubes:
$$\begin{align}
K(\vec{r},t,\vec{r}^{'},0) & = \int_{\delta_{1} \cup\delta_{2}} d^{3}r^{''} K(\vec{r},t,\vec{r}^{''},t^{''})K(\vec{r}^{''},t^{''},\vec{r}^{'},0)
\end{align}$$
Then I have:
$$\begin{align}
\psi(\vec{r},t) & = \int d^{3}r^{'}\int_{\delta_{1}\cup\delta_{2}}d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})K(\vec{r}^{''},t^{''},\vec{r}^{'},0)\psi(\vec{r}^{{'}},0)
\end{align}$$
Consider:
$$\begin{align}
K(\vec{r}^{''},t^{''},\vec{r}^{'},0) & = \int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)} \\
 & = \int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)e^{\frac{i}{\hbar}S(\Gamma)}+\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)}
\end{align}$$
Assuming that $0\leq t_{0}\leq T^{'}\leq t$, I can compute:
$$\begin{align}
\int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)e^{ \frac{i}{\hbar}S(\Gamma)} & = \int\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int_{0}^tdT\left( \frac{p^{2}}{2m}-qV_{1}\mathbb{1}_{[t_{0},T^{'}]}(T) \right) \right) \\
 & = \exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int_{\Gamma \text{ through }\gamma_{1}}\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)
\end{align}$$
Similarly:
$$\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma)e^{\frac{i}{\hbar}S(\Gamma)}=\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0})\right)\int_{\Gamma \text{ through }\gamma_{2}}\mathscr{D}(\Gamma ) \exp\left( \frac{i}{\hbar}\int dT \frac{p^{2}}{2m} \right)$$
Denote these two integrals by $K^{}_{1}(\vec{r}^{''},t^{''},\vec{r}^{'},0),K_{2}^{}(\vec{r}^{''},t^{''},\vec{r}^{'},0)$. Then I have:
$$\begin{align}
\psi(\vec{r},t) & =\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int d^{3}r^{'}\int_{\delta_{1}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})K_{1}(\vec{r}^{''},t^{''},\vec{r}^{'},0) \psi(\vec{r}^{'},0)\\
 & +\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0}) \right)\int d^{3}r^{'}\int_{\delta_{2}}d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})K_{2}(\vec{r}^{''},t^{''},\vec{r}^{'},0)\psi(\vec{r}^{'},0) 
\end{align}$$
 First compute $\int d^{3}r^{'}K_{i}(\vec{r}^{''},t^{''},\vec{r}^{'},0)\psi(\vec{r}^{'},0),\ i=1,2$. We make the following argument:

For simplicity, let $\Pi$ be the operator that finds the symmetric point of a given point with respect to the plane that separates the two tubes symmetrically. Due to symmetry, for each path $\vec{R}_{1}(t)$ through tube 1 connecting $\vec{r}^{'},\vec{r}^{''}$，there must exist a path through tube 2 connecting $\Pi\vec{r}^{'},\Pi\vec{r}^{''}$ which is $\Pi\vec{R}_{1}(t)$. Then kinetic energy as a function of time are the same on this two paths. Therefore, if I define:
$$\phi_{i}(\vec{r}^{''},t^{''})=\int_{\delta_{i}}d^{3}r^{'}K_{i}(\vec{r}^{''},t^{''},\vec{r}^{'},0)\psi(\vec{r}^{'},0)$$
I must conclude:
$$\phi_{1}(\vec{r}^{''},t^{''})=\phi_{2}(\Pi \vec{r}^{''},t^{''})$$
Then:
$$\begin{align}
\psi(\vec{r},t) & =\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int_{\delta_{1}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\\
 & +\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0}) \right)\int_{\delta_{2}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{2}(\vec{r}^{''},t^{''}) \\
  & =\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int_{\delta_{1}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\\
 & +\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0}) \right)\int_{\delta_{2}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\Pi\vec{r}^{''},t^{''})  \\
& =\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0}) \right)\int_{\delta_{1}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\\
 & +\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0}) \right)\int_{\delta_{2}} d^{3}r^{''}K(\vec{r},t,\Pi\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''}) 
\end{align}$$
I know that $K$ is just the free-space propagator. Recall that:
$$K(\vec{r},t,\vec{r}^{''},t^{''}) =A(t,t^{''})\exp\left(  \frac{im}{2\hbar\ (t-t^{''})}|\vec{r} ^{''}-\vec{r}|^{2} \right),A(t,t^{''})=\left(  \frac{m}{2\pi \hbar(t-t^{''}) } \right)^{3/2} e^{-\frac{3}{4}\pi i} $$

If I assume that the exits $\delta_{1},\delta_{2}$ are small, and close to each other, I can let the spacing between the exits of the two tubes be $2d$. Let the line connecting the point $\vec{r}$ on the screen and the midpoint of the two exits subtends angle $\theta$ with respect to the $\delta_{1}\cup\delta_{2}$ plane. Then:
$$K(\vec{r},t,\vec{r}^{''},t^{''}) \approx A(t,t^{''})\exp\left(  \frac{im}{2\hbar\ (t-t^{''})}d^{2}\cos ^{2}\theta \right) $$
$$K(\vec{r},t,\Pi\vec{r}^{''},t^{''}) \approx A(t,t^{''})\exp\left(  \frac{im}{2\hbar\ (t-t^{''})}d^{2}\cos ^{2}\theta \right) $$
Then I have:
$$\int_{\delta_{1}} d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})
 = \int_{\delta_{2}} d^{3}r^{''}K(\vec{r},t,\Pi\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''}) $$
Denote this integral by $\psi^{'}(\vec{r},t)$. Then:
$$\psi(\vec{r},t)=\exp\left( - \frac{i}{\hbar}qV_{1}(T^{'}-t_{0})\right)\psi^{'}(\vec{r},t)+\exp\left( - \frac{i}{\hbar}qV_{2}(T^{'}-t_{0})  \right)\psi^{'}(\vec{r},t)$$
Then the intensity is given by:
$$\begin{align}
I & =|\psi(\vec{r},t)|^{2} \\
 & = 2|\psi^{'}(\vec{r},t)|^{2}+2|\psi^{'}(\vec{r},t)|^{2}\cos\left( \frac{q}{\hbar}(V_{2}-V_{1})(T^{'}-t_{0}) \right)
\end{align}$$
If I don't make the above approximations, I have:
$$\begin{align}
I & =\left|\int_{\delta_{1}}d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\right|^{2}+\left|\int_{\delta_{2}}d^{3}r^{''}K(\vec{r},t,\Pi\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\right|^{2} \\
 & +2\cos\left(  \frac{q}{\hbar}(V_{2}-V_{1})(T^{'}-t_{0}) \right)\mathrm{Re}(\left(\int_{\delta_{1}}d^{3}r^{''}K(\vec{r},t,\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\right)^{*}\left(\int_{\delta_{2}}d^{3}r^{''}K(\vec{r},t,\Pi\vec{r}^{''},t^{''})\phi_{1}(\vec{r}^{''},t^{''})\right))
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
Compute the eigenvalues of the matrix $S_{x}$:
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
Know that this corresponds to a rotation $\exp\left( - \frac{i}{\hbar}S_{y}\theta \right)$

First diagonalize $S_{y}$:
$$S_{y}= \begin{pmatrix}
- \frac{1}{2} &  \frac{i}{\sqrt{ 2 }} & \frac{1}{2} \\
- \frac{1}{2} & - \frac{i}{\sqrt{ 2 }} & \frac{1}{2} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{\sqrt{ 2 }}
\end{pmatrix}\begin{pmatrix}
 -\hbar & 0 & 0 \\
0 & \hbar & 0 \\
0 & 0 & 0
\end{pmatrix}\begin{pmatrix}
- \frac{1}{2} &  \frac{i}{\sqrt{ 2 }} & \frac{1}{2} \\
- \frac{1}{2} & - \frac{i}{\sqrt{ 2 }} & \frac{1}{2} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{\sqrt{ 2 }}
\end{pmatrix}^{\dagger}$$
Denote the transformation matrix as $P$. Then it suffices to compute:
$$\begin{align}
\exp\left( - \frac{i}{\hbar}S_{y}\theta \right) & = \exp\left( - i \theta  Pdiag(-1,1,0)P^{\dagger} \right) \\
 & = \sum_{j}( -2i\theta)^j \frac{1}{j!}P ^{}diag(-1,1,0)^jP^{\dagger}
\end{align}$$
If $j\geq 2$ is even, I have:
$$\begin{align}
\sum_{j\text{ even}}(-i\theta)^j \frac{1}{j!}P^{\dagger}diag(-1,1,0)^jP^{\dagger} 
& =\sum_{j\text{ even}} (-i\theta)^j \frac{1}{j!} P diag(1,1,0)P^{\dagger} +P diag(1,1,0)P^{\dagger}-P diag(1,1,0)P^{\dagger}\\
 & = \cosh(-i\theta)Pdiag(1,1,0)P^{\dagger}-P daig(1,1,0)P^{\dagger} \\
 & = (\cos(\theta)-1)Pdiag(1,1,0)P^{\dagger} \\
 & = (\cos(\theta)-1) \begin{pmatrix}
\frac{1}{2} & 0 & -\frac{1}{2} \\
0 & 1 & 0 \\
- \frac{1}{2} & 0 & \frac{1}{2}
\end{pmatrix}
\end{align}$$
If $j=0$, I have a term $1$.

If $j$ is odd, I have:
$$\begin{align}
\sum_{j\text{ odd}}(-i\theta)^j \frac{1}{j!}Pdiag(-1,1,0)^jP^{\dagger} & =\sum_{j\text{ odd}}(-i\theta)^j \frac{1}{j!}Pdiag(-1,1,0)P^{\dagger}  \\
 & = \sinh(-i\theta)Pdiag(-1,1,0)P^{\dagger} \\
 & = -i\sin (\theta) \begin{pmatrix}
0 & - \frac{i}{\sqrt{ 2 }} & 0 \\
\frac{i}{\sqrt{ 2 }} & 0 & -\frac{i}{\sqrt{ 2 }} \\
0 & \frac{i}{\sqrt{ 2 }} & 0
\end{pmatrix} \\
 
\end{align}$$
Therefore:
$$\exp\left( - \frac{i}{\hbar }S_{y}\theta \right)=1+(\cos \theta-1)\begin{pmatrix}
\frac{1}{2} & 0 & -\frac{1}{2} \\
0 & 1 & 0 \\
- \frac{1}{2} & 0 & \frac{1}{2}
\end{pmatrix}-i\sin(\theta)\begin{pmatrix}
0 & - \frac{i}{\sqrt{ 2 }} & 0 \\
\frac{i}{\sqrt{ 2 }} & 0 & - \frac{i}{\sqrt{ 2 }} \\
0 &  \frac{i}{\sqrt{ 2 }} & 0
\end{pmatrix}$$
Therefore:
$$\exp\left( - \frac{i}{\hbar}S_{y}\theta \right)\begin{pmatrix}
1 \\
0 \\
0
\end{pmatrix}=\begin{pmatrix}
1+ \frac{1}{2}(\cos  \theta-1) \\
\frac{1}{\sqrt{ 2 }}\sin \theta \\
- \frac{1}{2}(\cos \theta-1)
\end{pmatrix}=\begin{pmatrix}
\cos ^{2} \frac{\theta}{2} \\
\frac{1}{\sqrt{ 2 }}\sin \theta \\
\sin ^{2} \frac{\theta}{2}
\end{pmatrix}$$

