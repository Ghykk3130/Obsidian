# 1. Sudden approximation

考虑hamiltonian在$t=0$到$t>0$中快速跃变了一下。我们想知道这个跃变过程带来的时间演化。我们假设$t$很小。那么令$T$为$t$的time scale，考虑rescaling $s= \frac{t}{T}$。那么：
$$\begin{align}
 & i\hbar \frac{\partial}{\partial t}\mathscr{U}=H\mathscr{U} \\
\implies &  i \frac{\partial}{\partial s}\mathscr{U}= \frac{H}{\hbar/T }\mathscr{U}
\end{align}$$
显然$T\rightarrow 0$。这使得$\text{RHS}=0$。那么：
$$\mathscr{U}(t,0)\approx 1$$
