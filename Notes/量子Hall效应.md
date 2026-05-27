# 1. AB效应

考虑一个电子在真空中运动，本征态满足：
$$\frac{p^{2}}{2m}\ket{n} =E_{n}\ket{n} $$
现在加上磁场。全空间没有其它电荷源，以至于$\nabla^{2}\phi=0$。$\phi(\infty)=0\implies \phi=0$。于是电子的hamiltonian为：
$$H= \frac{1}{2m}|\mathbf{p}-e\mathbf{A}|^{2}= \frac{1}{2m}|\mathbf{p}+|e|\mathbf{A}|^{2}$$
假设磁场满足$\nabla \times \mathbf{A}=0$，那么构造磁标势$\mathbf{A}=\nabla \chi$。那么：
$$\begin{align}
e^{- \frac{i}{\hbar}|e|\chi}\mathbf{p} e^{ \frac{i}{\hbar}|e|\chi} & = e^{- \frac{i}{\hbar}|e|\chi}(-i\hbar) e^{ \frac{i}{\hbar}|e|\chi} \left( \frac{i}{\hbar}|e|\nabla \chi+\nabla \right) \\
 & = -i\hbar \nabla+|e|\mathbf{A}=\mathbf{p}+|e|\mathbf{A}
\end{align}$$
那么显然$e^{ \frac{i}{\hbar}|e|\chi}|\mathbf{p}+|e|\mathbf{A}|^{2}e^{- \frac{i}{\hbar}|e|\chi}=p^{2}$。于是：
$$\begin{align}
 &  \frac{p^{2}}{2m}\ket{n} =E_{n}\ket{n}  \\
 \implies & \frac{1}{2m}|\mathbf{p}+|e|\mathbf{A} |^{2} e^{- \frac{i}{\hbar}|e|\chi}\ket{n}= E_{n} e^{- \frac{i}{\hbar}|e|\chi}\ket{n}  
\end{align}$$
于是$\ket{n^{'}}=e^{- \frac{i}{\hbar}|e|\chi}\ket{n}$为加上磁场后的本征态。

现在考虑一个电子波包$\ket{\psi}=\sum_{n}c_{n}\ket{n}$在真空中运动。加上磁场后由于每个本征态都获得$e^{- \frac{i}{\hbar}|e|\chi}$的相位，波包获得相同的相位变成$\ket{\psi^{'}}=\sum_{n}c_{n}\ket{n^{'}}=\sum_{n}c_{n}e^{- \frac{i}{\hbar}|e|\chi}\ket{n}=e^{- \frac{i}{\hbar}|e|\chi}\ket{\psi}$。现在假设波包在$0\sim t$的时间从$a$运动到$b$。那么：
$$\begin{align}
\bra{\mathbf{r}} \psi^{'}(t)\rangle & = \bra{\mathbf{r}} \mathscr{U}(t,0)\sum_{n}c_{n}e^{- \frac{i}{\hbar}|e|\chi}\ket{n} \\
 & = e^{- \frac{i}{\hbar}|e|\chi(\mathbf{r})}\sum_{n}c_{n}e^{- \frac{i}{\hbar}E_{n}t}\bra{\mathbf{r}} n\rangle \\
 & \approx e^{- \frac{i}{\hbar}|e|\chi(b)}\sum_{n}c_{n}e^{- \frac{i}{\hbar}E_{n}t}\bra{\mathbf{r}} n\rangle \\
 & = e^{- \frac{i}{\hbar}|e|\chi(b)}\bra{\mathbf{r}}\psi(t)\rangle  
\end{align}$$
其中取$\chi(b)$是因为波包局域在$b$周围。注意到：
$$\begin{align}
\bra{\mathbf{r}} \psi^{'}(0)\rangle & = \bra{\mathbf{r}} \sum_{n}c_{n}e^{- \frac{i}{\hbar}|e|\chi}\ket{n}  \\
 & = e^{- \frac{i}{\hbar}|e|\chi(\mathbf{r})}\bra{\mathbf{r}}\psi(0)\rangle \\
 & \approx e^{- \frac{i}{\hbar}|e|\chi(a)}\bra{\mathbf{r}} \psi(0)\rangle 
\end{align}$$
所以比起无磁场的相同路径上波函数，额外pick up的相位为：
$$- \frac{|e|}{\hbar}(\chi(b)-\chi(a))=- \frac{|e|}{\hbar}\int_{a}^{b}d\mathbf{r}\cdot \mathbf{A}$$
若波包绕了周期为$T$的一圈，那么显然$\bra{\mathbf{r}}\psi(T)\rangle= \bra{\mathbf{r}}\psi(0)\rangle$。所以pick up的所有相位都为Berry phase，为：
$$\boxed{\Delta \phi= \frac{e}{\hbar}\oint d\mathbf{r}\cdot \mathbf{A} }$$
# 2. Laughlin规范

