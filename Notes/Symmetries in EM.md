# 1. Parity of vectors

>[! Definition 1]
>A tensor whose components transform according to rotation matrices is called a rotational tensor.

## Remark
我们此处讨论的正交变换全为被动变换。矢量的变换仅为它们的component的变换。特别地，位置矢量本身没有变化，只是其component在变化。所以位置矢量的标量函数，例如$\rho$不会变化。

我们假设电磁学中所有的物理量都是rotational tensor。Rotational tensor根据旋转矩阵变换。我们想知道它们在其它正交变换下如何变换。我们根据此将rotational tensor分类：

>[! Definition 2]
>Let $A$ be an orthogonal transformation. $v_{i}$ be a 1-rotational tensor. Then 
>if $v_{i}^{'}=(\det A)A_{ij}v_{j}$, that is the determinant gets involved explicitly, call this tensor an axial tensor (pseudovector).
>If $v_{i}^{'}=A_{ij}v_{j}$, call this tensor a polar tensor.

>[! Proposition 1]
>Let $\vec{v},\vec{w}$ be polar vectors. Then $\vec{v}\times \vec{w}$ is an axial vector.
>

## Proof.
令$\vec{m}=\vec{v}\times \vec{w}$。我们作如下变换：

$\vec{v} \overset{A}{\rightarrow}\vec{v}^{'}, \vec{w} \overset{A}{\rightarrow}\vec{w}^{'}$

我们想知道$\vec{m}^{'}$是什么。我们有：
$$\begin{align}
m^{'}_{i} & =\epsilon_{ijk}v_{j}^{'}w_{k}^{'} \\
 & =\epsilon_{ijk}A_{jl}v_{l}A_{km}w_{m} \ \dots\ *)
\end{align}$$
为了证明是轴矢量，我们需要引入$\det A$。回忆起：
$\det A=\sum_{\sigma}(sgn\sigma)A_{1\sigma(1)}A_{2\sigma(2)}A_{3\sigma(3)}=\epsilon_{ijk}A_{1i}A_{2j}A_{3k}$ 

我们发现$\epsilon_{ijk}A_{jl}v_{l}A_{km}w_{km}$中只有两个$A$。所以我们引入更多$A$。我们作：
$$\begin{align}
m_{i}^{'} & =\epsilon_{pjk}\delta_{pi}A_{jl}v_{l}A_{km}w_{m} \\
 & =\epsilon_{pjk}A_{pq}A_{iq}A_{jl}A_{km}v_{l}w_{m} \\
\end{align}$$
>[! Claim 1]
>$\epsilon_{lmn}\det A=\epsilon_{ijk}A_{il}A_{jm}A_{kn}$

^556fe8

### Proof of claim.
我们已经知道$\det A=\epsilon_{ijk}A_{1i}A_{2j}A_{3k}=\epsilon_{ijk}A_{i 1}A_{j 2}A_{k 3}$。（这通过$\det(A)=\det(A^t)$就可以看出来。）则claim 1就是显然。因为：
1) 若$(l,m,n)$是偶排列，则$(l,m,n)$是对$(1,2,3)$进行偶数此改变得到的。则在claim 1等式的右手边我们就一定有：$RHS=\epsilon_{ijk}A_{p 1}A_{q 2}A_{r 3}$ where $(p,q,r)$ is a even permutation of $(i,j,k)$ 。于是我们再对$(i,j,k)$作even permutation换到$(p,q,r)$，而不改变符号。于是：$RHS=\epsilon_{pqr}A_{p 1}A_{q 2}A_{r 3}$ 即得证
2) 若$(l,m,n)$是奇排列，则思路类似可以得证。

于是接下来：
$$\begin{align}
m_{i}^{'} & =(\epsilon_{pjk}A_{pq}A_{jl}A_{km})A_{iq}v_{l}w_{m} \\
 & =(\det A)\epsilon_{qlm}A_{iq}v_{l}w_{m} \\
 & =(\det A)A_{iq}m_{q}
\end{align}$$
>[! Right]
>$\blacksquare$
## Remark
1) 我们知道$A$是orthogonal matrix，于是$\det A=1\ or\ -1$。例如若$A=inversion=-I$，则$\det A=-1$。
2) 显然$(\{\text{polar vector}, \text{axial vector}\},\times)\cong(\{-1,1\},\cdot)$ ，且$\text{polar vector}$和$-1$对应，$\text{axial vector}$和$1$对应。

>[! Proposition 2]
>$$\begin{align} \text{axial vector} \times \text{polar vector} & =\text{polar vector} \\ \text{axial vector} \times \text{axial vector}  & =\text{axial vector} \\\text{polar vector} \times \text{polar vector} & =\text{axial vector}
\end{align}$$
## Proof.
这是显然。我们只需要仿照proposition 1的证明，在$*）$中变换时加入一些$detA$即可。
>[! Right]
>$\blacksquare$
## Ex:
Show that $\vec{B}$ is an axial vector.

我们回忆起$\nabla \times \vec{B}=\mu_{0}\vec{J}$。我们只需要知道$\nabla$以及$\vec{J}$如何变换就可以知道$\vec{B}$是什么矢量了。
我们先来看$\nabla$如何变换：
若我们设坐标$\vec{r}$根据旋转矩阵$R$变换，则：
$$\begin{align}
\nabla_{i}^{'} & = \frac{\partial}{\partial r_{i}^{'}} \\
 & =\frac{\partial}{\partial r_{k}} \frac{\partial r_{k}}{\partial r_{i}^{'}} \\
\end{align}$$
我们知道：
$$r_{i}^{'}=R_{ij}r_{j} \implies r_{i}=R^{-1}_{ij}r_{j}^{'}$$
于是：
$$\begin{align}
\nabla^{'}_{i} & =R^{-1}_{ki} \frac{\partial}{\partial r_{k}} \\
 & =R_{ik} \frac{\partial}{\partial r_{k}} \\
 & =R_{ik}\nabla_{k}
\end{align}$$
于是$\nabla$和$\vec{r}$一样变换。变换没有显含$\det R$。因为$\vec{r}$是极矢量，所以显然$\nabla$是极矢量。
接下来有$\vec{v}=\dot{\vec{r}},\vec{J}=\rho \vec{v}$。因为是被动变换，实际的空间位置矢量没有变换，所以$\rho$的取值仍就是变换前位置的取值。而$\vec{v}$和$\vec{r}$一样变换。所以$\vec{J}$也是极矢量。所以我们现在有：
$$\text{axial vector} \times \vec{B}=\text{axial vector}$$
所以$\vec{B}$就只能是轴矢量。

## Ex:
Show that $\vec{E}$ is a polar vector.

我们已知$\vec{B}$的类型，我们想把$\vec{E}$和$\vec{B}$联系起来。我们知道$\nabla \times \vec{E}=\frac{\partial \vec{B}}{\partial t}$。而$\nabla$是极矢量，$\frac{\partial \vec{B}}{\partial t}$和$\vec{B}$一样是轴矢量。于是$\vec{E}$也一定是极矢量。

# 2. 方程在空间变换下的不变性

## 2.1 函数的表象变换

令$f=f(\vec{r})$。当空间发生一个基变换:
$$\begin{pmatrix}
e_{1}^{'} & e_{2}^{'} & e_{3}^{'}
\end{pmatrix}=\begin{pmatrix}
e_{1} & e_{2} & e_{3} 
\end{pmatrix}A$$
则：
$$\begin{pmatrix}
e_{1}^{'} & e_{2}^{'} & e_{3}^{'}
\end{pmatrix}\begin{pmatrix}
r_{1}^{'} \\
r_{2}^{'} \\
r_{3}^{'}
\end{pmatrix}= \begin{pmatrix}
e_{1} & e_{2} & e_{3}
\end{pmatrix}A\begin{pmatrix}
r_{1}^{'} \\
r_{2}^{'} \\
r_{3}^{'}
\end{pmatrix}$$
以被动变换视角，这就相当于在原基下的$\begin{pmatrix}r_{1} \\  r_{2}\\r_{3}\end{pmatrix}$变换为了新基下的$\begin{pmatrix}r_{1}^{'} \\ r_{2}^{'} \\ r_{3}^{'}\end{pmatrix}$。我们有：
$$\begin{pmatrix}
r_{1} \\
r_{2} \\
r_{3}
\end{pmatrix}=A \begin{pmatrix}r_{1}^{'} \\
r_{2}^{'} \\
r_{3}^{'}
\end{pmatrix}$$
我们在新基下建立一个新的函数$f^{'}$。这个函数在同一点取值必须和原函数$f$一样。因为$\vec{r},\vec{r}^{'}$代表的是不同基下的同一个点，所以我们要求：
$$f^{'}(\vec{r}^{'})=f(\vec{r})\implies f^{'}(A^{-1}\vec{r})=f(\vec{r})\implies f^{'}(\vec{r})=f(A\vec{r})$$
这也就是说，函数也和矢量一样，应该有一个“绝对的”函数作为“绝对的”矢量的函数，但是在不同基下，因为矢量分量不同，函数对这些分量的dependence不一样，表现为函数的表象不一样。

## 2.2 方程的表象变换

若考虑一个电磁学方程$f(\vec{E}(\vec{r}),\vec{B}(\vec{r}),\nabla,\partial_{t})=0$，我们作$e_{i}^{'}=e_{j}A_{ji}$，则相应地：
$$\vec{E}\rightarrow \vec{E}^{'},\vec{B}\rightarrow \vec{B}^{'},\nabla\rightarrow \nabla^{'}$$
我们没有理由认为$f(\vec{E}^{'},\vec{B}^{'},\nabla^{'},\partial_{t})$还等于$0$。如果真的还等于$0$，那就是说在不同的表象下，方程没有变化。那就称方程的形式不变。 ^2ab4f4

>[! Definition 3]
>Consider an equation $f(\phi(\vec{r}))=0$. 
>We perform $e_{i}^{'}=e_{j}A_{ji}$, and define:
>$$\vec{\phi}^{'}(\vec{r})=\vec{\phi}(A\vec{r})$$
>If
>$$f(\phi^{'}(\vec{r}))=0$$
>then we say the equation $f(\phi)=0$ is invariant under $A$.
## Ex:
方程$\frac{\partial \vec{E}}{\partial t}=\vec{r}\times \vec{B}$不具有空间平移对称性。

我们考虑作$\vec{r}\rightarrow \vec{r}+\vec{c},\forall \vec{c}\text{ constant}$。然后定义：
$$\vec{E}^{'}(\vec{r})=\vec{E}(\vec{r}+\vec{c}),\vec{B}^{'}=\vec{B}(\vec{r}+\vec{c})$$
于是我们想验证：
$$\frac{\partial \vec{E}^{’}}{\partial t} \overset{?}{=}\vec{r}\times \vec{B}^{'}$$
此处为什么右手边是$\vec{r}$而非$\vec{r}+\vec{c}$？这是因为$\vec{E}^{'},\vec{B}^{'}$都是$\vec{r}$的函数，我们需要验证方程在任意一点$\vec{r}$的情况，而因此不需要变动$\vec{r}$为$\vec{r}+\vec{c}$。

根据原方程我们有：
$$\frac{\partial \vec{E}(\vec{r})}{\partial t}=\vec{r}\times \vec{B}(\vec{r})\implies \frac{\partial \vec{E}(\vec{r}+\vec{c})}{\partial t}=(\vec{r}+\vec{c})\times \vec{B}(\vec{r}+\vec{c})\implies \frac{\partial \vec{E}^{'}(\vec{r})}{\partial t}=(\vec{r}+\vec{c})\times \vec{B}^{'}(\vec{r})$$
所以等式$\frac{\partial \vec{E}^{’}}{\partial t} \overset{?}{=}\vec{r}\times \vec{B}^{'}$不成立。

## Ex:
Lorentz force law $\vec{F}=\rho(\vec{E}+\vec{v}\times \vec{B})$ is unchanged under any transformation on $\vec{r}$.

我们考虑密度形式的方程$\vec{f}(\vec{r})=\rho(\vec{r})(\vec{E}(\vec{r})+\vec{v}\times \vec{B}(\vec{r}))$
因为该方程对所有$\vec{r}$均成立，所以：
$$\begin{align}
\vec{f}(A\vec{r}) & =\rho(A\vec{r})(\vec{E}(A\vec{r})+\vec{v}(A\vec{r})\times \vec{B}(A\vec{r})) \\
\implies\vec{f}^{'} & =\rho^{'}(\vec{E}^{'}+\vec{v}^{'}\times \vec{B}^{'})
\end{align}$$
## Ex:
Maxwell方程对于translation, inversion, rotation这些orthogonal transformation都不变。


我们拿$\frac{\partial \vec{E}}{\partial t}=\nabla \times \vec{B}$举例子。我们考虑一个正交变换$A$。若$e_{i}^{'}=e_{j}A_{ji}$，则相应地，因为$\vec{E},\nabla$是极矢量，$\vec{B}$是轴矢量，它们会作如下变换：
$$\begin{align}
E^{'}_{i}(A\vec{r}) & =E^{'}_{i}(\vec{r})=A_{ij}E^{'}_{j}(\vec{r}) \\
B^{'}_{i}(A\vec{r}) & =B^{'}_{i}(\vec{r})=(\det A) A_{ij}B^{'}_{j}(\vec{r}) \\
\nabla^{'}_{i} & =A_{ij}\nabla_{j}
\end{align}$$
此处$\vec{E}^{'}(\vec{r})=\vec{E}^{'}(A\vec{r}),\vec{B}^{'}(\vec{r})=\vec{B}^{'}(A\vec{r})$是因为我们作的是被动变换，其中$\vec{r},A\vec{r},\vec{E},\vec{B}$什么的都是同一矢量在不同基下的分量形成的tuple。所以$\vec{r}$和$A\vec{r}$实际上是同一个矢量，$\vec{E}^{'},\vec{B}^{'}$在此处取值不变。另外$\vec{B}$变换式中多出的$\det A$是由于$\vec{B}$是轴矢量。

其实不用计算都知道，在inversion和rotation下，方程是不变的。因为唯一可能的差异是符号差异，而符号的consistency是由轴矢量，极矢量的性质保证的。

当然也可以直接计算。例如若为inversion，则$\det A=-1,A=-I$。带入计算应当相当容易。若为rotation，取$\det A=1$。我们只需要证到两个rotational vector的外积还是一个rotational vector即可。这样等式右边按旋转矩阵变换，左边也按旋转矩阵变换，应当很容易证明了。


若作平移变换$\vec{r}\rightarrow \vec{r}+\vec{c}$，则：
$$\begin{align}
\frac{\partial \vec{E}(\vec{r}+\vec{c})}{\partial t} & = \frac{\partial}{\partial(\vec{r}+\vec{c})}\times \vec{B}(\vec{r}+\vec{c}) \\
 \implies \frac{\partial \vec{E}^{'}(\vec{r})}{\partial t} & =\frac{\partial}{\partial \vec{r}}\times \vec{B}^{'}(\vec{r})
\end{align}$$
方程形式显然不变。

# 3. Discrete symmetries of EM

考虑两种discrete transformation, space inversion and time inversion。我们想知道在这两种transformation下，各种电磁学中的函数如何变化。

先来看space inversion。根据parity，矢量要么是极矢量，要么是轴矢量。两种各自的变换规律为：
$$\begin{align}
v_{i}^{'}&=A_{ij}v_{j}\text{  if $\vec{v}$ is a polar vector}\\
v_{i}^{'}&=(\det A)A_{ij}v_{j}\text{  if $\vec{v}$ is an axial vector}
\end{align}$$
若是space inversion，只需要取$A=-I$即可计算变换规律。

然后对于time inversion，只需要知道$\vec{v}\rightarrow-\vec{v}$，运用$\vec{F}=q(\vec{E}+\vec{v}\times \vec{B})$推导动力学量与场量之间的关系即可。

例如想知道$\vec{A}$如何变化，就先想知道$\vec{B}$如何变化。由于$\vec{F}$含有时间二阶导，所以$\vec{F}\rightarrow \vec{F}$。又$\vec{v}\rightarrow-\vec{v}$，$q$是标量函数不会变化，根据$\vec{F}=q(\vec{E}+\vec{v}\times \vec{B})$匹配符号可知$\vec{B}\rightarrow-\vec{B}$。又$\nabla \times \vec{A}=\vec{B}$，且显然$\nabla\rightarrow \nabla$，所以$\vec{A}\rightarrow-\vec{A}$。

我们容易得到下表：
![[Pasted image 20250728010454.png|400]]

# 4. Dual symmetry of EM

考虑无源Maxwell方程：
$$\begin{align}
\nabla \cdot \vec{E} & =0 \\
\nabla \times \vec{E} & =-\frac{\partial \vec{B}}{\partial t} \\
\nabla \cdot \vec{B} & =0 \\
\nabla \times \vec{B} & =\mu_{0}\epsilon_{0} \frac{\partial \vec{E}}{\partial t} 
\end{align}$$
我们注意到第二式和第四式很像。那么有没有办法将第四式改为第二式的形式呢？我们有：
$$\begin{align}
\nabla \times \vec{B} & = \frac{1}{c^{2}} \frac{\partial \vec{E}}{\partial t} \\
\implies \nabla \times(c\vec{B}) & =- \frac{\partial}{\partial t}\left( - \frac{1}{c}\vec{E} \right)
\end{align}$$
相应地，第二式也可改为第四式的形式：
$$\begin{align}
\nabla \times \vec{E} & = -\frac{\partial \vec{B}}{\partial t} \\
\implies \nabla \times\left( - \frac{1}{c}\vec{E} \right) & = \frac{1}{c^{2}} \frac{\partial}{\partial t}(c\vec{B})
\end{align}$$
也就是说，我们若作变换：
$$\vec{E}\rightarrow c\vec{B},\vec{B}\rightarrow - \frac{1}{c}\vec{E}$$则Maxwell方程还是成立！（那两个散度方程显然也还是成立的。）

>[! Proposition 3]
>If $\vec{E},\vec{B}$ are the solution to the source-free Maxwell equations, then
>$\vec{E}^{'}=c\vec{B},\vec{B}^{'}=- \frac{\vec{E}}{c}$ are also the solution to the source-free Maxwell equations.









