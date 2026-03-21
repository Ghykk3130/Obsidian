# 1. Sudden approximation

考虑hamiltonian在$t=0$到$t>0$中快速跃变了一下。我们想知道这个跃变过程带来的时间演化。我们假设$t$很小。那么令$T$为$t$的time scale，考虑rescaling $s= \frac{t}{T}$。那么：
$$\begin{align}
 & i\hbar \frac{\partial}{\partial t}\mathscr{U}=H\mathscr{U} \\
\implies &  i \frac{\partial}{\partial s}\mathscr{U}= \frac{H}{\hbar/T }\mathscr{U}
\end{align}$$
显然$T\rightarrow 0$。这使得$\text{RHS}=0$。那么两侧积分得到：
$$\mathscr{U}(t,0)\approx 1$$
## Ex:

考虑一个一维无限方深势阱$[-a,a]$。在$t=0$时极快地压缩势阱成为$\left[ - \frac{a}{2}, \frac{a}{2} \right]$。压缩前波函数是$\ket{x},\ x\in[-a,a]$的线性组合，压缩后波函数是$\ket{x},\ x\in\left[ - \frac{a}{2}, \frac{a}{2} \right]$的线性组合。显然$\mathscr{U}\neq 1$。为什么sudden approximation失效了？因为$i \frac{\partial}{\partial s}\mathscr{U}= \frac{H}{\hbar /T}\mathscr{U}$要求$\frac{H}{\hbar /T}\rightarrow 0\text{ as }T\rightarrow 0$。但是如果$H$中包含$\infty$，例如无限深势阱，那么这个假设就失效了。



