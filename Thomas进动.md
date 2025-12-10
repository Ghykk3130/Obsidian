# g factor

电子绕核运动。对于orbital angular momentum来说，显然角动量与偶极矩成正比。即$\vec{\mu}=  \frac{e}{2m}\vec{L}$

同样地，对于spin angular momentum，我们假设$\vec{\mu}$和$\vec{S}$成正比·。定义$g$ factor为$\vec{\mu}=g \frac{e}{2m} \vec{S}$
# Thomas进动如何影响Hamiltonian

Setup: 和Zeeman effect的setup一样。电子在球对称有心电场与磁场下运动。选择$g=2$。我们想知道电子的转动部分Hamiltonian是什么。

先来看没有Thomas进动时的Hamiltonian。我们引出Hamiltonian的策略是通过基本的运动学方程来引出。

设电子在场中平动，即不存在Thomas进动。因为电子是很小一块的局域电流，所以用磁偶极子来描述电子。我们选择电子的质心系，以至于平移惯性力的矩为零。因此：

$\frac{d\vec{S}}{dt} =\vec{\mu}\times \vec{B}^{'}$， 其中$\vec{B}^{'}$为Lorentz变换后再电子系中看到的磁场。

所以：$\frac{d\vec{S}}{dt}=\vec{\mu}\times\left( \vec{B}-  \frac{\vec{v}}{c^2}\times\vec{E} \right)\ \dots\ 1)$

>[! Proposition 1]
>$\frac{d \vec{S}}{dt}=\vec{\mu}\times \vec{B} \Leftrightarrow H=-\vec{\mu}\cdot \vec{B}$

## Proof.
我们证明必要性。
将$\vec{S}$看做一个广义坐标与广义动量的函数。此处广义坐标选择偶极子的orientation $\phi,\theta,\psi$ , 广义动量选择与它们conjugate的角动量。因为这里Hamiltonian没有平动项，我们忽略了平动自由度。换言之，我们想象偶极子的位置是固定不动的。它只能旋转。

于是：
$\frac{d S_{i}}{dt}=  \frac{\partial S_{i}}{\partial q_{j}}\dot{q_{j}}+  \frac{\partial S_{i}}{\partial p_{k}}\dot{p_{k}}=  \frac{\partial S_{i}}{\partial q_{j}}  \frac{\partial H}{\partial p_{j}} -  \frac{\partial S_{i}}{\partial p_{k}}  \frac{\partial H}{\partial q_{k}}=\{S_{i}, H\}$ 
$\{S_{i},H\} = \{S_{i}, -\mu_{j}B_{j}\} = -\gamma\{S_{i}, S_{j} B_{j}\}= -\gamma\{S_{i}, S_{j}\}B_{j}-\gamma S_{j}\{S_{i}, B_{j}\}=-\gamma\{S_{i}, S_{j}\}B_{j} = -\gamma\epsilon_{ijk}S_{k}B_{j}=\gamma(\vec{S}\times \vec{B})_{i}$($B_{j}$显然是一个与角度无关的量，因此$\{S_{i},B_{j}\}=0$。)
于是：$\frac{d\vec{S}}{dt} = \vec{\mu}\times \vec{B}$
 >[!right]
 $\blacksquare$
 
于是$1)$对应的Hamiltonian为：$U^{'}=-\vec{\mu}\cdot\left( \vec{B}-  \frac{\vec{v}}{c^{2}}\times\vec{E} \right)\ \dots\ 2)$
因为电场为球对称有心场，所以若电势能为$V = V(r)$, 则$\vec{E}=  \frac{1}{e} (-\nabla V) =  \frac{1}{e}\left( -  \frac{\vec{r}}{r}  \frac{dV}{dr} \right)$

将$\vec{\mu}=  \frac{e}{m}\vec{S}, \vec{L}=m\vec{r}\times \vec{v}, \vec{E}=-  \frac{\vec{r}}{re}  \frac{dV}{dr}$ 代入$2)$可得：
$U^{'} = -\frac{e}{m}\vec{S}\cdot \vec{B} + \frac{1}{rm^{2}c^{2}}  \frac{dV}{dr}\vec{L}\cdot \vec{S}$


但是由于电子自身还可以旋转， 所以$\frac{d\vec{S}}{dt} = \vec{\mu}\times \vec{B}^{'}$是不正确的。右手边缺少旋转惯性力的矩。$\frac{d\vec{S}}{dt} = \vec{\mu}\times \vec{B}^{'}$仅在一个瞬间和刚体系重合的，不旋转的系中成立。

>[! Proposition 2]
>Let $e_{1}^{'},e_{2}^{'}.e_{3}^{'}$, $e_{1},e_{2},e_{3}$ be two instantaneously overlapping frames, with $e_{1}^{'},e_{2}^{'}.e_{3}^{'}$ rotating at $\vec{\omega}$, $e_{1},e_{2},e_{3}$ non-rotating. 
>Let $\vec{G}=\sum_{j}e_{j}^{'}G_{j}^{'} = \sum_{j}e_{j}G_{j}$ be a vector. Then
>$\begin{pmatrix} \dot{G_{1}^{'}}  \\ \dot{G_{2}^{'}}   \\ \dot{G_{3}^{'}}\end{pmatrix} + \vec{\omega}\times \begin{pmatrix} G_{1}^{'}   \\ G_{2}^{'}   \\ G_{3}^{'}\end{pmatrix} = \begin{pmatrix} \dot{G_{1}}   \\ \dot{G_{2}}   \\ \dot{G_{3}} \end{pmatrix}$

## Proof.
我们在两个系中写出$\vec{G}$的导数：
$$\left\{\begin{align}
\frac{d\vec{G}}{dt}  & = \dot{e_{j}}G_{j}+e_{j}\dot{G_{j}} = e_{j}\dot{G_{j}} \\
\frac{d\vec{G}}{dt} & =\dot{e_{j}^{'}}G_{j}^{'}+e_{j}^{'}\dot{G_{j}^{'}}
\end{align} \right.$$
我们知道：
$\dot{e_{j}^{'}} = \vec{\omega}\times e_{j}^{'}$

因此我们将第二个式子继续写下去$\frac{d\vec{G}}{dt} = \vec{\omega}\times e_{j}^{'}G_{j}^{'}+e_{j}^{'}\dot{G_{j}^{'}}$
然后因为两个坐标系是瞬间重合的。所以：$\frac{d\vec{G}}{dt} = \vec{\omega}\times e_{j}^{'}G_{j}^{'}+e_{j}^{'}\dot{G_{j}^{'}} =\vec{\omega}\times e_{j}G_{j}^{'}+e_{j}\dot{G_{j}^{'}}$

我们按分量写开就有$\dot{{G_{i}}} = \epsilon_{ijk}\omega_{j}G^{'}_{k} + \dot{G^{'}_{i}}$
>[!right]
>$\blacksquare$

因此假设电子在以$\vec{\omega_{T}}$进动，在与转动刚体系瞬间重合的平动系中，有$\frac{d\vec{S}}{dt} = \vec{\mu}\times \vec{B^{'}}$。其中$\vec{S}$是平动系中分量构成的矢量。若$\vec{S}^{'}$为转动系中分量构成的矢量，则
Proposition 2 $\implies$$\vec{S}^{'} + \omega_{T}\times \vec{S}^{'} = \vec{\mu}\times \vec{B}^{'}$$\implies$$\frac{\vec{dS}^{'}}{dt} = \vec{S}^{'}\times\left(   \frac{e}{m}\vec{B}^{'}+\omega_{T} \right)$ 
因此，电子的旋转Hamiltonian会存在一个与$\omega_{T}$有关的修正项$-\vec{S}^{'}\cdot \vec{\omega_{T}}$。

# 一些相对论相关结论

>[! Proposition 3]
>Two parallel successive Lorentz boosts is equivalent to a single Lorentz boost.

## Proof.
考虑参考系$S_{1},S_{2},S_{3}$。其中$S_{2}$相对于$S_1$有$\beta,\gamma$, $S_{3}$相对于$S_{2}$有$\beta^{'},\gamma^{'}$。采用自然单位制$c = 1$。设四矢量为：$\begin{pmatrix}t & x & y & z\end{pmatrix}^t$。WLOG令速度方向为$x$轴。

于是从$S_{1}$到$S_{2}$有洛伦兹矩阵$\begin{pmatrix}\gamma & -\beta \gamma & 0 & 0 \\ -\beta \gamma & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$
从$S_{2}$到$S_{3}$有洛伦兹矩阵$\begin{pmatrix}\gamma^{'} & -\beta^{'}\gamma^{'} & 0 & 0 \\ -\beta^{'}\gamma^{'} &\gamma^{'} & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$
于是从$S_{1}$到$S_{3}$就有$\begin{pmatrix}\gamma^{'} & -\beta^{'}\gamma^{'} & 0 & 0 \\ -\beta^{'}\gamma^{'} &\gamma^{'} & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}\begin{pmatrix}\gamma & -\beta \gamma & 0 & 0 \\ -\beta \gamma & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}= \begin{pmatrix}\gamma \gamma^{'}(1+\beta \beta^{'}) & -\gamma \gamma^{'}(\beta+\beta^{'} ) & 0 & 0 & \\ -\gamma \gamma^{'}(\beta+\beta^{'}) & \gamma \gamma^{'}(1+\beta \beta^{'}) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$

显然这等于一个$\gamma^{''}=\gamma \gamma^{'}(1+\beta \beta^{'})$, $\beta^{''}=\frac{\beta+\beta^{'}}{1+\beta \beta^{'}}$的Lorentz boost.
>[!Right]
>$\blacksquare$


>[! Proposition 4]
>Let $K,K^{'}$ be two frames. $K^{'}$ is translating with velocity $\vec{v}$ as viewed in $K$. Then
>$\vec{x}^{'} = \vec{x}+(\gamma-1)  \frac{\vec{v}\cdot \vec{x}}{v^{2}}\vec{v}-\gamma \vec{v}t$
>$t^{'} = \gamma\left( t -  \frac{\vec{v}\cdot \vec{x}}{c^{2}} \right)$

## Proof.
在平行方向上，显然
$\vec{x}_{\parallel}^{'} = \gamma(\vec{x}_{{\parallel}} - \vec{v}t) = \gamma\left(   \frac{\vec{x}\cdot \vec{v}}{v^{2}}\vec{v}-\vec{v}t \right)$
在垂直方向则有：$\vec{x}_{\perp}^{'} = \vec{x}_{\perp} = \vec{x}-  \frac{\vec{x}\cdot \vec{v}}{v^{2}}\vec{v}$
于是：$\vec{x} =\vec{x} + (\gamma - 1)  \frac{\vec{v}\cdot \vec{x}}{v^{2}}\vec{v} - \gamma \vec{v}t$
>[!Right]
>$\blacksquare$

>[! Proposition 5]
>The Lorentz boost in an arbitrary direction is:
>$\begin{pmatrix}\gamma & -\gamma \beta_{x} & -\gamma \beta_{y} & -\gamma \beta_{z} \\ -\gamma \beta_{x} & 1+(\gamma-1)  \frac{\beta_{x}^2}{\beta^2} & (\gamma-1) \frac{\beta_{y}\beta_{x}}{\beta^{2}} & (\gamma-1) \frac{\beta_{z}\beta_{x}}{\beta^{2}} \\ -\gamma \beta_{y} & (\gamma-1) \frac{\beta_{x}\beta_{y}}{\beta^{2}} & 1+(\gamma-1) \frac{\beta_{y}^{2}}{\beta^{2}} & (\gamma-1) \frac{\beta_{z}\beta_{y}}{\beta^{2}} \\ -\gamma \beta_{z} & (\gamma-1) \frac{\beta_{x}\beta_{z}}{\beta^{2}} & (\gamma-1) \frac{\beta_{y}\beta_{z}}{\beta^{2}} & 1+(\gamma-1) \frac{\beta_{z}^{2}}{\beta^{2}}\end{pmatrix}$
## Proof.
用proposition 4展开即可。略。
>[!Right]
>$\blacksquare$
>
>
# Thomas进动推导1
考虑$S_{1}$为lab frame。$S_{2}$以$\vec{\beta}$相对于$S_{1}$运动，$S_{3}$以$\vec{\beta}^{'}$相对于$S_{2}$运动。其中$\vec{\beta}^{'}$为小量。
>[! Theorem 1]
>In general, let $L$ be an element of Lorentz group. Then $L=RL_{0}$, where $R$ is a rotation, $L_{0}$ is a Lorentz bost.

## Remark
我们可以证到洛伦兹群中变换有六个自由度。自然其中三个由平动$\vec{v}$给出，另外三个则由转动给出。

洛伦兹群中变换$\Lambda$满足$\Lambda^{t}\eta \Lambda=\eta$, $\eta$为Minkowski度规。

写开便有$\Lambda_{\gamma \delta}\eta_{\gamma \lambda}\Lambda_{\lambda \beta}=\eta_{\delta \beta}$
这看似是16个方程，但实际上有多余。因为显然可以验证左手边是对称的。所以原本$4\times{4}$个自由度会消去对角线一侧的6个。因此现在我们有$16-6=10$个方程，也就是10个约束。于是只有6个自由度。



我们想知道从$S_{1}$到$S_{3}$的变换对应的rotation和Lorentz boost是什么。

WLOG, 令$S_{1}$的$x,y$平面为$\vec{\beta},\vec{\beta}^{'}$张成的平面，且$x$轴和$\vec{\beta}$重合。令$S_{2}$与$S_{1}$的坐标轴平行。

于是从$S_{1}$到$S_{2}$的变换为：$L=\begin{pmatrix}\gamma & -\gamma \beta & 0 & 0  \\ -\gamma \beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$
从$S_{2}$到$S_{3}$的变换为(显然从$S_{2}$到$S_{3}$的变换是一个Lorentz boost, 且是一个$xy$平面内的boost)：$L^{'}=\begin{pmatrix}\gamma^{'} & -\gamma^{'}\beta_{x}^{'} & -\gamma^{'}\beta_{y}^{'} & 0 \\ -\gamma^{'}\beta_{x}^{'} & 1+(\gamma^{'}-1) \frac{\beta_{x}^{'2 }}{\beta^{'2}} & (\gamma^{'}-1) \frac{\beta_{y}^{'}\beta_{x}^{'}}{\beta^{'2}} & 0 \\  -\gamma^{'}\beta_{y}^{'} & (\gamma^{'}-1) \frac{\beta_{x}^{'}\beta_{y}^{'}}{\beta^{'2}} & 1+(\gamma^{'}-1) \frac{\beta_{y}^{'2}}{\beta^{'2}} & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$接着保留到$\beta^{'}$的一次项。（注意$\gamma^{'}$是含有$\beta^{'}$的。我们有$\gamma^{'}=(1-\beta^{'2})^{-1/2}=1+ \frac{1}{2}\beta^{'2}$）:
$L^{'}=\begin{pmatrix}1 & -\beta_{x}^{'} & -\beta_{y}^{'} & 0 \\ -\beta_{x}^{'} & 1 & 0 & 0 \\ -\beta_{y}^{'} & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$

于是从$S_{1}$到$S_{3}$的变换为：
$L^{''}=L^{'}L= \begin{pmatrix}\gamma+\gamma \beta \beta_{x}^{'} & -\gamma \beta-\gamma \beta_{x}^{'} & -\beta_{y}^{'} & 0 \\ -\gamma \beta_{x}^{'}-\gamma \beta & \gamma \beta_{x}^{'}\beta+\gamma & 0 & 0 & \\ -\gamma \beta_{y}^{'} & \gamma \beta_{y}^{'}\beta & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$
接着我们试图将这个分解为一个rotation右乘一个boost。设从$S_{1}$到$S_{3}$的Lorentz boost为$\vec{\beta}^{''},\gamma^{''}$。
>[! Idea]
>我们假设$L^{''}=RL_{0}$。我们算出$L^{''}$后，只需要两边右乘$L_{0}^{-1}$就可以得到对应的旋转。

因为$L_{0}^{-1}$显然是$\vec{\beta}^{''},\gamma^{''}$的函数。为了$L^{''}$能顺利和$L_{0}^{-1}$相乘，我们将$L^{''}$矩阵元全部近似为$\beta^{''},\gamma^{''}$的函数。因为$\beta^{'} \ll 1$，而且$\vec{\beta}$与$S_{1}$的$x$轴重合，显然我们有：

$\gamma \simeq \gamma^{''},\beta^{''} \simeq \beta_{x},\beta \simeq \beta^{''}$

而且因为第一个boost $\vec{\beta}$并不在$S_{2}$方向上，所以在$S_{2}$中看$\vec{\beta}^{'}$和在$S_{1}$中看$\vec{\beta}^{'}$（也就是$\vec{\beta}^{''}$）有一个简单的联系：$\gamma^{''}\beta^{''}_{y}=\gamma^{'}\beta_{y}^{'}\simeq \beta^{'}_{y}$

于是保留到不为零的最低阶有：$L^{''}\simeq \begin{pmatrix}\gamma^{''} & -\gamma^{''}\beta_{x}^{''} & -\gamma^{''}\beta_{y}^{''}  & 0\\ -\gamma^{''}\beta_{x}^{''} & \gamma^{''} & 0 & 0  \\ -\gamma^{''2}\beta_{y}^{''} & \gamma^{''2}\beta_{y}^{''}\beta_{x}^{''} & 1 & 1 \\ 0 & 0 & 0 & 1\end{pmatrix}$

显然$L_{0}^{-1}$是一个参数为$-\vec{\beta}^{''},\gamma^{''}$的在$S_{1}$的$xy$平面之内的Lorentz boost。于是（近似之后）：$L_{0}^{-1}=\begin{pmatrix}\gamma^{''}  & \gamma^{''}\beta_{x}^{''} & \gamma^{''}\beta_{y}^{''} & 0 \\ \gamma^{''}\beta_{x}^{''} & \gamma^{''} & (\gamma^{''}-1) \frac{\beta_{y}^{''}}{\beta_{x}^{''}} & 0 \\ \gamma^{''}\beta_{y}^{''} & (\gamma^{''}-1) \frac{\beta_{y}^{''}}{\beta_{x}^{''}} & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$

于是
$R=L^{''}L_{0}^{-1}=\begin{pmatrix}1 & 0 & 0 & 0  \\ 0 & 1 & (\gamma-1) \frac{\beta_{y}^{''}}{\beta} & 0 \\ 0 & -(\gamma-1) \frac{\beta_{y}^{''}}{\beta} & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}$
注意其中$(3,2)$元素的负号是因为方向。

这相当于一个$xy$平面内的无穷小转动$\Delta \vec{\Omega}=(\gamma-1) \frac{\beta_{y}^{''}}{\beta} \hat{z}=(\gamma-1) \frac{\vec{\beta}\times \vec{\beta}_{y}^{''}}{\beta^{2}}=(\gamma-1) \frac{\vec{\beta}\times \vec{\beta}^{''}}{\beta^{2}}$ 

>[! Proposition 6]
>Let $S_{1},S_{{2}},S_{3}$ be reference frames. $S_{2}$ is moving with $\vec{\beta}$ as viewed in $S_{1}$. $S_{3}$ is moving with $\vec{\beta}^{''}$ as viewed in $S_1$. Assume the velocity of $S_{3}$ is small as viewed in $S_{2}$. Then the axes of $S_{3}$ is rotated with respected to the axes of $S_{2}$ by 
>$(\gamma-1) \frac{\vec{\beta}\times \vec{\beta}^{''}}{\beta^{2}}$
## Caveat 
为什么角度不是$-(\gamma-1) \frac{\beta_{y}^{''}}{\beta}\hat{z}$?这是因为Lorentz变换中，矢量本身是不变的。我们只是在不同系中看同一矢量。因此假如旋转矩阵为$\mathcal{R}$，则
$\begin{pmatrix}e_{1}^{'} & e_{2}^{'} & e_{3}^{'} & e_{4}^{'}\end{pmatrix}=\begin{pmatrix}e_{1} & e_{2} & e_{3} & e_{4}\end{pmatrix}\mathcal{R}$
所以$\begin{pmatrix}t \\ x \\ y \\ z\end{pmatrix}=\mathcal{R}\begin{pmatrix}t^{'} \\ x^{'} \\ y^{'} \\ z^{'}\end{pmatrix}$
所以我们得到的变换阵反而应该是$\mathcal{R}^{-1}=R$。


于是考虑一个运动的电子。设在lab frame为$S_{1}$, 电子在$t$时刻速度为$\vec{v}$，参考系为$S_{2}$，电子在$t+\delta t$时刻速度为$\vec{v}+\delta \vec{v}$。这些速度都是在lab frame中观察到的。于是相对于$S_{2}$，$S_{3}$的轴旋转了$(\gamma-1) \frac{\vec{v}\times(\vec{v}+\delta \vec{v})}{v^{2}}=(\gamma-1) \frac{\vec{v}\times\delta \vec{v}}{v^{2}}$
于是进动角速度为$\vec{\omega}=(\gamma-1) \frac{\vec{v}\times \vec{a}}{v^{2}}$
在低速运动的情况下，$\vec{\omega}=(\gamma-1) \frac{\vec{v}\times \vec{a}}{v^{2}} \simeq \frac{1}{2c^{2}}\vec{v}\times \vec{a}$

# Thomas进动下的spin-orbit coupling

于是在Zeeman effect中，电子的Thomas precession角速度为$\vec{\omega_{T}}= \frac{1}{2c^{2}}\vec{v}\times \vec{a}= \frac{1}{2c^{2}}\vec{v}\times\left(  -\frac{1}{m} \frac{dV}{dr} \frac{\vec{r}}{r} \right)= \frac{1}{2m^{2}rc^{2}} \frac{dV}{dr} \vec{L}$

于是在Thomas进动修正下，角动量演化方程为$\frac{d\vec{S}^{'}}{dt}=\vec{S}^{'}\times\left(  \frac{e}{2m}\vec{B}^{'} + \vec{\omega_{T}} \right)$。于是最终Hamiltonian多一个修正项$-\vec{S}^{'}\cdot \vec{\omega}=- \frac{1}{2m^{2}rc^{2}} \frac{dV}{dr}\vec{L}\cdot \vec{S}^{'}$。

于是正确的角动量演化的Hamiltonian为$U^{'}= -\frac{e}{m}\vec{S}^{'}\cdot \vec{B} + \frac{1}{2m^{2}rc^{2}} \frac{dV}{dr}\vec{L}\cdot \vec{S}^{'}$
或者去掉撇写为$U=- \frac{e}{m}\vec{S}\cdot \vec{B}+ \frac{1}{2m^{2}rc^{2}} \frac{dV}{dr}\vec{L}\cdot \vec{S}$


# Thomas进动的推导 2

一般地，考虑一个质点在某时刻于lab frame中以$\vec{v}$运动。然后经过$\delta t$, 质点以$\vec{v}+\delta \vec{v}$运动。 设质点以$\vec{v}$运动时，自身的参考系为$K^{'}$， 以$\vec{v} +\delta \vec{v}$运动时，自身的参考系为$K^{''}$。考虑相对论效应。我们想知道$K^{'},K^{''}$中的坐标如何联系。

>[! Caveat]
>$K^{'},K^{''}$并非是以一个相对速度为$\delta \vec{v}$的洛伦兹平动联系起来的。

首先，在考虑相对论效应时，速度并不是直接相加的。多多少少前面要乘以一个$\gamma$系数之类的玩意。所以尽管在lab frame中，它们的速度相差$\delta \vec{v}$, 它们的相对速度并不是$\delta \vec{v}$。

因此想要获得$K^{'},K^{''}$两个系中坐标的联系，我们先作变换$K^{'} \overset{-\vec{v}}{\rightarrow}K$, 再作变换$K \overset{\vec{v}+\delta \vec{v}}{\rightarrow}K^{''}$。因为所有问题中的速度都是相对于lab frame $K$的。


所以，作$K^{'} \overset{-\vec{v}}{\rightarrow} K$:
$$\begin{align}
\vec{x}  & =\vec{x}^{'}+(\gamma_{v}-1) \frac{\vec{v}\cdot \vec{x}^{'}}{v^{2}}\vec{v}+\gamma_{v}\vec{v}t^{'} \\
t & =\gamma_{v}\left( t^{'}+ \frac{\vec{v}\cdot \vec{x}^{'}}{c^{2}} \right)
\end{align}$$
其中，$\gamma_{v} = \left( 1 - \frac{v^{2}}{c^{2}} \right)^{-1/2}$
接着，再作$K \overset{\vec{w}=\vec{v} + \delta \vec{v}}{\rightarrow} K^{''}$:
$t^{''}=\gamma_{w}\left( t- \frac{\vec{w}\cdot \vec{x}}{c^{2}} \right)=\gamma_{w}\left( \gamma_{v}\left( t^{'}+ \frac{\vec{v}\cdot \vec{x}^{'}}{c^{2}}- \frac{\vec{w}}{c^{2}}\cdot\left( \vec{x}^{'}+(\gamma_{v}-1) \frac{\vec{v}\cdot \vec{x}^{'}}{v^{2}}+\gamma_{v}\vec{v}t^{'} \right) \right) \right)$
收集$t^{'}$系数得到：
$\gamma_{w}\left( \gamma_{v}- \frac{\gamma_{v}}{c^{2}}\vec{v}\cdot \vec{w} \right)$
我们保留到$\delta \vec{v}$的一阶，就有$\gamma_{w}=\left( 1-\frac{(\vec{v}+\delta \vec{v})^2}{c^2} \right)^{-1/2} = \left( 1- \beta^2- \frac{2\vec{v}\cdot\delta \vec{v}}{c^{2}} \right)^{-1/2}=(1-\beta^2)^{-1/2}\left( 1-  \frac{2\vec{v}\cdot\delta \vec{v}}{c^{2}(1-\beta^{2})} \right)=\gamma_{v}\left( 1+  \frac{\gamma_{v}^{2}}{c^{2}}\vec{v}\cdot\delta\vec{v} \right)$注意这里做近似时$\delta v$是小量，而非通常的$\vec{v}$。
于是将$\gamma_{w}$带进去后$t^{'}$的系数为$1$。

收集$\vec{x}^{'}$的系数，省略一堆计算得到：
$\gamma_{w}\left(   \frac{\gamma_{v}}{c^{2}}\vec{v} - \frac{\vec{w}}{c^{2}}  \frac{1}{c^{2}w^{2}}(\vec{v}\cdot \vec{w})(\gamma_{v}-1)\vec{v}\right)=- \frac{\gamma_{v}}{c^{2}}\delta \vec{v}- \frac{\gamma_{v}}{c^{2}v^{2}}(\gamma_{v}-1)(\vec{v}\cdot\delta \vec{v})\vec{v}$
于是：
$t^{''}=t^{'}- \frac{\gamma_{v}}{c^{2}}\vec{x}^{'}\cdot\left( \delta \vec{v}+(\gamma_{v}-1)  \frac{(\vec{v}\cdot\delta\vec{v})\vec{v}}{v^{2}} \right)$

和正常的洛伦兹变换$t^{''}=\gamma\left( t^{'}-  \frac{\Delta \vec{v}\cdot \vec{x}^{'}}{c^{2}} \right)$比较可以得到：$\gamma=1, \Delta \vec{v}=\gamma_{v}\left( \delta \vec{v}+(\gamma_{v}-1) \frac{(\vec{v}\cdot\delta\vec{v})\vec{v}}{v^{2}} \right)$



$$\text{Term C} = \gamma_w t \mathbf{w} \approx \gamma_v\left(1 + \gamma_v^2 \frac{\mathbf{v}\cdot\mathbf{\delta v}}{c^2}\right) \cdot \gamma_v\left(t' + \frac{\mathbf{x}'\cdot\mathbf{v}}{c^2}\right) \cdot (\mathbf{v}+\mathbf{\delta v})$$Keeping only terms up to first order in **δv**:$$ \approx \gamma_v^2 \left( t' + \frac{\mathbf{x}'\cdot\mathbf{v}}{c^2} + t'\gamma_v^2 \frac{\mathbf{v}\cdot\mathbf{\delta v}}{c^2} \right) (\mathbf{v}+\mathbf{\delta v}) $$$$ \approx \gamma_v^2 \left( t'\mathbf{v} + \frac{(\mathbf{x}'\cdot\mathbf{v})}{c^2}\mathbf{v} + t'\gamma_v^2 \frac{(\mathbf{v}\cdot\mathbf{\delta v})}{c^2}\mathbf{v} + t'\mathbf{\delta v} \right)$$


