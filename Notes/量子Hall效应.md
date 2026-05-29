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
为了使得饶了一圈后的波函数和一圈之前的波函数还是一样的，必须要求$\Delta \phi=2\pi n$。注意到磁通量为$\Phi=  \oint d\mathbf{r}\cdot \mathbf{A}$，于是磁通量必须是$\Phi= n \frac{h}{e}$。这称为磁通量子：

>[!Note] Definition 1.1
>Define the flux quantum $\Phi_{0}= \frac{h}{e}$.

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
# 3. Landau量子化
## 二维情形

考虑二维电子气。其中磁场$\mathbf{B}$平行于z方向。选取Landau规范则有$\mathbf{A}=(0,Bx,0)$。那么机械动量为$\mathbf{p}-e\mathbf{A}=(p_{x},p_{y}-eBx)$。其中$e<0$。于是hamiltonian为：
$$\begin{align}
H & = \frac{1}{2m}|\mathbf{p}-e\mathbf{A} |^{2} \\
 & = - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\left( \partial_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)
\end{align}$$
注意到$[p_{y},H]=0$。那么$p_{y}$的本征子空间为$H$的不变子空间。注意到$p_{y}$的y方向动量为$\hbar k$的本征态为$e^{iky}f_{n}(x)$。那么固定$k$，这些函数张成的空间是$H$的不变子空间。我们选取$f_{n}$来使得$H$对角化。$n$为$H$本征空间指标，即能级的指标。那么：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\left( \partial_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)e^{iky}f_{n}=E_{n}e^{iky}f_{n} \\
\implies & - \frac{\hbar^{2}}{2m}e^{-iky}\left( \partial_{x}^{2}+ \left( \partial_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)e^{iky}f_{n}=E_{n}f_{n} \\
\implies & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\left( \partial_{y}+ik- \frac{ieBx}{\hbar} \right)^{2} \right) f_{n}(x)=E_{n}f_{n}(x) \\
\implies & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\left( ik- \frac{ieBx}{\hbar} \right)^{2} \right)f_{n}=E_{n}f_{n} \\
\implies & \left[  \frac{p_{x}^{2}}{2m}+ \frac{1}{2}m\frac{e^{2}B^{2}}{m^{2}}\left( x- \frac{k\hbar}{eB} \right)^{2} \right]f_{n}=E_{n}f_{n}
\end{align}$$
所以这是一个频率为$\omega_{c}= \frac{|e|B}{m}$，中心在$x_{0}=\frac{k\hbar}{eB}$的一维谐振子。$E_{n}= \left( n+ \frac{1}{2} \right)\hbar \omega_{c}$。定义$l^{2}= \frac{\hbar}{|e|B}$为磁长度。
## Ex:

考虑最低的Landau level $n=0$。那么$f_{n}$就是最低谐振子的态，概率密度为Gaussian的。容易看出$|e^{ik_{}y}f_{n}(x)|=|f_{n}(x)|^{2}$。所以一个Landau level的所有态就是xy面上的条带：

![[Pasted image 20260528141159.png|center|500]]

这些条带被称为Landau规范轨道。

>[!Quote] 磁长度的物理意义
>我们知道对于谐振子$\frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}$，基态波函数为宽度为$\sqrt{  \frac{\hbar }{m\omega} }$。所以这里磁长度$l=\sqrt{ \frac{\hbar}{m\omega_{c}} }$也就是这个等效谐振子的波函数宽度的length scale。
>
>在$lp\gg \hbar$时，粒子运动接近经典，为磁场中的回旋运动。

显然，每个Landau level，即固定$n$，其degeneracy全部来自于$k$。我们知道$k= \frac{2\pi n}{L_{y}}$，并且显然需要限制$0\leq \frac{k\hbar}{|e|B}=kl^{2}\leq L_{x}$。所以能取得$k$的数量为：
$$\boxed{N= \frac{L_{x}L_{y}}{2\pi l^{2}}= \frac{L_{x}L_{y}|e|B}{h}}$$
这就是每个Landau能级的degeneracy。只与外场和sample geometry有关。Landau能级定义出来的等能量面就是Landau环，即：
$$\frac{\hbar^{2}}{2m}(k_{x}^{2}+k_{y}^{2})=\left( n+ \frac{1}{2} \right)\hbar \omega_{c}$$
可以看出，每个Landau环不是紧贴在一起的。它们在k-space中每个都间隔有限距离，是离散的。Landau环面积$\propto B$。

因为费米面本身也是等能量面，所以Landau环扩张到费米面时必定和费米面重合。因此费米海中的Landau环个数必定是整数。如果Landau level必须要填满，那么令填满的Landau能级数量为$\nu$。于是Hall conductivity就是：
$$\sigma_{xy}= \frac{ne}{B}= \frac{1}{L_{x}L_{y}}N\nu \frac{e}{B}=-\nu \frac{e^{2}}{h}$$
## 三维情形

考虑三维电子气。令磁场平行于z方向。类似地，我们有：
$$H= - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\partial_{z}^{2}+ \left( \partial_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)$$
同样地，由于$[p_{y},H]=0,\ [p_{z},H]=0$，我们取ansatz $e^{ik_{z}z}e^{ik_{y}y}f_{n}(x)$。于是：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\partial_{z}^{2}+ \left( \partial_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)e^{ik_{z}z}e^{ik_{y}y}f_{n}(x)=E_{}e^{ik_{z}z}e^{ik_{y}y}f_{n}(x) \\
  \implies & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}-k_{z}^{2}+\left( \partial_{y}+ik_{y}- \frac{ieBx}{\hbar} \right)^{2} \right)f_{n}(x)=E_{}f_{n}(x) \\
\implies & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}-k_{z}^{2}-\left( k_{y}- \frac{eBx}{\hbar } \right)^{2} \right)f_{n}=E_{}f_{n} \\
\implies & \left[  \frac{p_{x}^{2}}{2m}+ \frac{1}{2m}(\hbar k_{y}-eBx)^{2}+ \frac{\hbar^{2}k_{z}^{2}}{2m} \right]f_{n}=Ef_{n} 
\end{align}$$
显然，这是一个中心在$x=\frac{\hbar k_{y}}{eB}$的谐振子。能量为$E_{n,k_{z}}=\left( n+ \frac{1}{2} \right)\hbar \omega_{c}+ \frac{\hbar^{2}k_{z}^{2}}{2m}$。固定$k_{z},n$，简并度显然还是$N= \frac{L_{x}L_{y}|e|B}{h}$。

电子能带给出的能谱为$\frac{\hbar^{2}k^{2}}{2m}$。联立得：
$$\frac{\hbar^{2}}{2m}(k_{x}^{2}+k_{y}^{2})= \left( n+ \frac{1}{2} \right)\hbar \omega_{c}$$
所以一个Landau level，即固定$k_{z},n$，就是k-space中垂直于z方向的一个Landau环。

# 4. Laughlin规范

考虑圆柱面QHE几何。$\hat{\mathbf{y}}$切于圆柱面，$\mathbf{x}$平行于圆柱中轴朝上。外磁场$\mathbf{B}=B  \hat{\mathbf{z}}$垂直于圆柱面，外电场$\mathbf{E}=E  \hat{\mathbf{y}}$。则矢势为$\mathbf{A}=Bx \hat{\mathbf{y}}$。

我们通过规范变换将电场吸收进矢势。现考虑往圆柱中心竖直添加一个磁场，称为Laughlin磁场。令Laughlin磁场向上磁通量为$\Phi_{L}$。那么Laughlin矢势必须满足$\mathbf{E}=- \frac{\partial \mathbf{A}}{\partial t}$。现固定$t$，那么由$\oint  d\mathbf{r}\cdot \mathbf{A}=\Phi_{L}$可得矢势$\mathbf{A}=\frac{\Phi_{L}}{L_{y}} \hat{\mathbf{y}}$。

>[!Quote]
>为什么这个矢势是一个常矢量？这不就代表它不产生磁场吗？其实，我们通过上述积分得到的矢势仅是矢势在圆柱面上的取值。矢势其实可以有空间dependence，只是我们已经在圆柱面上取值了。但因为我们是将$[0,1]\times S^{1}$嵌入到三维空间了，所以实际上在圆柱面上这个矢势就是一个常数。所以如果我们生活在圆柱面上，这就只是一个规范变换，没有引起任何圆柱面世界中的磁场。
>

接下来同Landau量子化一样，我们取$e^{ik_{y}y}f_{n}(x)$作为本征态。那么，现在重写二维Landau量子化中的hamiltonian：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m}\left( \partial_{x}^{2}+\left( ik_{y}- \frac{ieBx}{\hbar} - \frac{ie\Phi_{L}}{\hbar L_{y}}\right)^{2} \right)f_{n}=E_{n}f_{n} \\
 & \left[ \frac{p_{x}^{2}}{2m}+ \frac{e^{2}B^{2}}{2m} \left( x- \frac{\hbar k_{y}}{eB}+ \frac{\Phi_{L}}{L_{y}B} \right)^{2} \right]f_{n}=E_{n}f_{n}
\end{align}$$
于是谐振子中心为：
$$\begin{align}
x_{0} & =\frac{\hbar k_{y}}{eB}- \frac{\Phi_{L}}{L_{y}B} \\
 & = \frac{\Phi_{0}}{L_{y}B}\left( m- \frac{\Phi_{L}}{\Phi_{0}} \right)
\end{align}$$
我们发现，固定$\Phi_{L}$，则Landau规范轨道之间的距离为$\frac{\Phi_{0}}{L_{y}B}$。而$m$，即追踪某一个Landau规范轨道，$\Phi_{L}$每改变$\Phi_{0}$都会让该轨道沿x方向移动到下一个轨道的位置。那么此时一个电子被从圆柱面上边缘泵至下边缘，或者反之。所以一个Landau能级中输运一个电荷所需时间为：
$$\Delta t= \frac{\Phi_{0}}{\partial \Phi_{L} /\partial t}= \frac{\Phi_{0}}{L_{y}\partial A /\partial t}= - \frac{\Phi_{0}}{EL_{y}}$$
那么电流为$I= \frac{e}{-\frac{\Phi_{0}}{EL_{y}}}=- \frac{e^{2}}{h}L_{y}E$。电流密度为$j=- \frac{e^{2}}{h}E$。电导率为$- \frac{e^{2}}{h}$。如果有$\nu$个全满的Landau能级，每个都发生上述泵涌，那么电导率为$- \nu\frac{e^{2}}{h}$。

我们看到，量子Hall电导来自于全满能带。

# 5. 边缘态

考虑二维QHE的圆柱面几何。在quantum oscillation的平台上固定$\mathbf{B}$。我们发现Landau规范轨道不贡献电流。因为$E_{n}=\left( n+ \frac{1}{2} \right)\hbar \omega_{c}$为定值，那么$\frac{\partial E_{n}}{\hbar \partial \mathbf{k}}=0$。

一般来说，样品上存在将电子约束在内的势能$V$。在bulk中，$V$为一常数，可以忽略。但是在样品边缘，由于$V$不再平坦，它会微扰作为本征态的Landau规范轨道。这些微扰后的态称为边缘态。它们的能谱不是$E_{n}=\left( n+ \frac{1}{2} \right)\hbar \omega_{c}$，而是有k dependence。它们能够贡献非零电流。

>[!Quote]
>边缘态如何表现在k-space中呢？边缘态似乎是一个实空间中的概念，和k-space没有关系。但实际上，注意到Landau规范轨道的中心与$k_{y}$是有关的，即$x_{0}= \frac{k_{y}\hbar}{eB}$。所以对于某些$k_{y}$，其Landau规范轨道会接近样品边缘，从而受到$V$的微扰。

>[!Quote] 一个经典图像
>如何理解bulk中的Landau规范轨道无电流，但是边缘有电流呢？
>
>![[Pasted image 20260528161749.png|center|300]]
>在经典极限下，Landau规范轨道退化为磁场中的回旋运动。在bulk中由于邻近的回旋运动抵消，从而无电流。在边缘，回旋运动会回弹着一直往一个方向走，所以有净电流。

现计算边缘态色散关系。令$V(\mathbf{r},n)$为第n个Landau能级的约束势能。若$V(\mathbf{r},n)$相对于Landau规范轨道的波包宽度来说变化是缓慢的，那么$V$就是近似对角的。这带来一阶微扰：
$$\begin{align}
\int dx dy e^{-ik_{y}y}f^{*}_{n}(x)V(\mathbf{r},n)e^{ik_{y}y}f_{n}(x) & \approx V(x_{0},n)\int dxdy |e^{ik_{y}y}f_{n}(x) |^{2} \\
 & =V(x_{0}, n)
\end{align}$$
将$V(x_{0},n)$记为$V(k_{y},n)$。

那么修正的能谱为：
$$E_{n}(k_{y})= \left( n+ \frac{1}{2} \right)\hbar \omega_{c}+ V(k_{y},n)$$
我们又知道，只有贴近费米面的态能够导电，所以只有$k_{y}$ such that $E_{n}(k_{y})\approx\epsilon_{F}$的边缘态才能导电。令$k_{F}^{n}$为费米面上的边缘态，满足：
$$\left( n+ \frac{1}{2} \right)\hbar \omega_{c}+V(k_{F}^{n},n)=\epsilon_{F}$$
那么在$k_{{y}}^{n}$附近展开有：
$$E_{n}(k_{y})\approx \epsilon_{F}+ \frac{\partial V}{\partial k_{y}}(k_{y}-k_{F}^{n})=\epsilon_{F}+\hbar v_{F}^{n}(k_{y}-k_{F}^{n})$$
其中，$v^{n}_{F}= \frac{\partial V}{\hbar\partial k_{y}}= \frac{\partial E_{n}(k_{y})}{\hbar \partial k_{y}}$为边缘态的费米速度。显然，这个费米速度是平行于$\mathbf{\hat{y}}$的，即沿着上下边缘跑的。注意到：
$$ \frac{\partial V}{\hbar \partial k_{y}}= \frac{\partial V}{\hbar\partial x_{0}} \frac{\partial x_{0}}{\partial k_{y}}$$
在上下边缘，$\frac{\partial V}{\partial x_{0}}$符号相反，所以上下边缘的边缘态的速度相反。此时净电流为零。若一个上边缘电压为$V$，下边缘电压为零，则上边缘电流为：
$$\begin{align}
I^{\text{up}}_{n} & =  e \int \frac{dk_{y}}{2\pi} v_{F}^{n}f_{F}(E_{n}(k_{y})+eV) \\
 & \approx e \int \frac{dk_{y}}{2\pi}v_{F}^{n}\left( f_{F}(E_{n})+ \frac{\partial f_{F}}{\partial E_{n}}eV \right) \\
 & = e \int \frac{dk_{y}}{2\pi}v_{F}^{n}(f_{F}(E_{n})-\delta(E_{n})eV)
\end{align}$$
下边缘电流相反：
$$\begin{align}
I^{\text{dn}}_{n} & = -e \int \frac{dk_{y}}{2\pi}v_{F}^{n}f_{F}(E_{n}(k_{y}))
\end{align}$$
那么净电流为：
$$\begin{align}
I_{n} & = I^{\text{up}}_{n}+I^{\text{dn}}_{n}  \\
 & = -e^{2}V \int \frac{dk_{y}}{2\pi}v^{n}_{F}\delta(E_{n}) \\
 & = -e^{2}V\int \frac{dk_{y}}{2\pi}v_{F}^{n}\delta(\epsilon_{F}+\hbar v^{n}_{F}(k_{y}-k^{n}_{F})) \\
 & = - \frac{e^{2}V}{h}
\end{align}$$
于是总Hall电流为$I=-\sum_{n} \frac{e^{2}}{h}V=-n \frac{e^{2}}{h}V$。得到Hall conductivity $-n \frac{e^{2}}{h}$。

