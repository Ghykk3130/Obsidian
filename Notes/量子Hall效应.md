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
平板几何y方向是periodic boundary condition，x方向是open boundary condition，磁场均匀施加在z方向。圆盘几何是磁场垂直于圆盘。圆柱几何其实是圆柱面，磁场沿径向，y方向其实是$-\hat{\boldsymbol{\phi}}$方向，z方向是$\hat{\mathbf{r}}$方向。

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

考虑平板几何$x\in[0,L_{x}],\\ y\in[0,L_{y}]$，y方向有周期性边界条件，$\mathbf{B}=B  \hat{\mathbf{z}}$。显然$\mathbf{A}=A x \hat{\mathbf{y}}=A x dy$。我们希望圆盘几何和平板几何同胚。令$r$为到内环的距离，$R$为内外环的距离。构造同胚：
$$\phi= \frac{y}{L_{y}}2\pi,\  \frac{r}{R} = \frac{x}{L_{x}}$$
这样两个构型的几何就是同胚的。接下来将平板几何的矢势pushforward到圆盘几何。则有：
$$\begin{align}
\mathbf{A}   =Axdy & = A  \frac{L_{x}r}{R} \left( \frac{\partial y}{\partial \phi}d\phi+ \frac{\partial y}{\partial r}dr \right) \\
 & = A \frac{L_{x}L_{y}r}{2\pi R}d\phi
\end{align}$$

>[!Quote] 如何从度规得知切矢量长度，以及切矢量和自然基矢的关系？
>例如极坐标度规$g=dr\otimes dr+r^{2}d\phi \otimes d\phi$。我们可以切矢量长度：
>$$\begin{align}
 & \langle \partial_{r},\partial_{r}\rangle= g_{rr} \partial_{r}\otimes \partial_{r}= dr(\partial_{r})dr(\partial_{r})=1\implies|\partial_{r} |=1 \\
 & \langle \partial_{\phi},\partial_{\phi}\rangle= g_{\phi \phi} \partial_{\phi}\otimes \partial_{\phi}=r^{2}d\phi(\partial_{\phi})d\phi(\partial_{\phi})=r^{2}\implies  |\partial_{\phi}|=r
\end{align}$$
>我们又知道：
>$$\begin{align}
dl & = dx  \hat{\mathbf{x}}+dy \hat{\mathbf{y}} \\
 & = dx \partial_{x}+dy \partial_{y} \\
 & = \left(  \frac{\partial x}{\partial r}dr+ \frac{\partial x}{\partial \phi}d\phi \right)\left(  \frac{\partial r}{\partial x}\partial_{r}+ \frac{\partial \phi}{\partial x}\partial_{\phi} \right)+ \left(  \frac{\partial y}{\partial r}dr+ \frac{\partial y}{\partial \phi}d\phi \right)\left(  \frac{\partial r}{\partial y}\partial_{r}+ \frac{\partial \phi}{\partial_{y}} \partial_{\phi}\right) \\
 & = dr \partial_{r}+d\phi \partial_{\phi}
\end{align}$$
>另一方面$dl= dr  \hat{\mathbf{r}}+r d\phi \hat{\boldsymbol{\phi}}$。所以$\partial_{\phi}=r \hat{\boldsymbol{\phi}}$。又因为$d\phi(\partial_{\phi})=1$，所以$d\phi= \frac{1}{r} \hat{\boldsymbol{\phi}}$。

我们知道测度为$dr^{2}+(r+R_{\text{in}})^{2}d\phi^{2}$。那么有$d\phi= \frac{1}{r+R_{\text{in}}}  \hat{\boldsymbol{\phi}}$。故$\mathbf{A}= A \frac{L_{x}L_{y}}{2\pi R} \frac{r}{r+R_{\text{in}}}  \hat{\boldsymbol{\phi}}$。








