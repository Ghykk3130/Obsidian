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
# 2. 拓扑基础

讨论二维QHE主要有三种几何：
![[Pasted image 20260527125955.png|center|400]]
平板几何y方向是periodic boundary condition，x方向是open boundary condition，磁场均匀施加在z方向。圆盘几何是磁场仅在中间孔洞中。圆柱几何其实是圆柱面，磁场从中间穿过，y方向其实是$\hat{\boldsymbol{\phi}}$方向，z方向是$\hat{\mathbf{r}}$方向。

我们宣称这三种几何是homeomorphic的。它们本质上都是$[0,1]\times S^{1}$。现在它们的几何对应上了。我们要求它们的场也要有某种对应。我们先来定义什么是拉回：

>[!Note] Definition 2.1
>Given two manifolds $M,N$, and a homeomorphism $f:M\rightarrow N$. Let $g(y),\ y\in N$ be a function over $N$. Then the pullback of $g$ is a function over $M$ defined as:
>$$f^{*}g(x)=g(f(x)),\ x\in M$$
>If $h(x),\ x\in M$ is a function over $M$, then the pushforward of $h$ is a function over $N$ defined as:
>$$f_{*}h(y)= (f^{-1})^{*} h(y)= h(f^{-1}(y)),\ y\in N$$

同样的，pushforward和pullback可以对向量场或者切向量场定义。其中只需要对向量场或者切切向量场的基进行变换。
## Ex:

考虑$f:M\rightarrow N$。考虑$M$上的向量场$v=v^{i} \frac{\partial}{\partial x^{i}}$。那么这个向量场pushforward到$N$就是：
$$\begin{align}
f_{*}v & = v^{i} \frac{\partial y^{j}}{\partial x^{i}} \frac{\partial }{\partial y^{j}}= w^{j} \frac{\partial}{\partial y^{j}},\ w^{j}= v^{i} \frac{\partial y^{j}}{\partial x^{i}}
\end{align}$$

我们宣称，矢势$\mathbf{A}$是余切向量场。这是因为$\mathbf{A}$可以作线积分$\int_{C}\mathbf{A}=\int_{C}A_{i}dx^{i}$。于是$\mathbf{B}=d\mathbf{A}$是1-form。那么在上述QHE的几何里面，在几何构型同胚的情况下，我们还要求矢势可以pushforward。下面举例：

考虑平板几何$x\in[0,L_{x}],\\ y\in[0,L_{y}]$，y方向有周期性边界条件，$\mathbf{B}=B  \hat{\mathbf{z}}$。显然$\mathbf{A}=A  \hat{\mathbf{y}}=A  dy$。我们希望圆盘几何和平板几何同胚。构造同胚：
$$\phi= \frac{y}{L_{y}}2\pi,\ \frac{r-R_{\text{in}}}{R_{\text{out}}-R_{\text{in}}}= \frac{x}{L_{x}}$$
这样两个构型的几何就是同胚的。接下来将平板几何的矢势pushforward到圆盘几何。则有：
$$\begin{align}
\mathbf{A}   =Ady & = A \left( \frac{\partial y}{\partial \phi}d\phi+ \frac{\partial y}{\partial r}dr \right) \\
 & = A \frac{L_{y}}{2\pi}d\phi= A \frac{L_{y}}{2\pi} \hat{\boldsymbol{\phi}}
\end{align}$$



