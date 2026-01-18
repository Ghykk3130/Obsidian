
# 1. Big picture

考虑一些带电粒子在电磁场中运动。我们选取这些粒子的笛卡尔坐标与速度作为广义坐标与广义速度。

# 2. A charged particle in field

我们先考虑能给出运动方程（牛顿第二定律）的Lagrangian。即我构造一个$L$使得$\frac{d}{dt} \frac{\partial L}{\partial \vec{v}}=\frac{\partial L}{\partial \vec{r}}$$\implies$$\frac{d\vec{p}}{dt}=e(\vec{E}+\vec{v}\times \vec{B})$ 我们逆向工程来构造这个$L$。

注意到Lagrange方程右手边$\frac{\partial L}{\partial \vec{r}}$是一个梯度。我们联想：势的梯度即是场。于是我们希望Lagrangian是一些势，然后求梯度得到运动方程右手边的$e(\vec{E}+\vec{v}\times \vec{B})$。而左手边对时间的全导数也和Lagrange方程左手边类似。为此，我们将运动方程右手边改写成势的导数。

$$\begin{align}
\frac{d\vec{p}}{dt} & =e\left( -\nabla \phi- \frac{\partial \vec{A}}{\partial t}+ \vec{v} \times(\nabla \times \vec{A}) \right) \\
 & =e\left( -\nabla \phi - \frac{\partial \vec{A}}{\partial t}+\nabla(\vec{v} \cdot \vec{A})- (\vec{v}\cdot \nabla )\vec{A} \right)
\end{align}$$
其中得到$\vec{v}\times(\nabla \times \vec{A})=\nabla(\vec{v}\cdot \vec{A})-(\vec{v}\cdot \nabla)\vec{A}$只需要用分量展开计算即可。

现在右手边有两个梯度了，可惜$\frac{\partial \vec{A}}{\partial t},(\vec{v}\cdot \nabla)\vec{A}$不是梯度。

[[Maxwell Stress Tensor and Momentum#^f76f4c|Maxwell Stress Tensor and Momentum Idea 3]]$\implies$我们的想法是把不能写成梯度的项吸收到左手边。但是，要吸收到左手边就要求写成时间的全导数形式。但$\frac{\partial \vec{A}}{\partial t},(\vec{v}\cdot \nabla)\vec{A}$不是这种形式。但两者都是矢势的导数。所以我们希望对矢势求全导数看看这两个玩意是否包含在内。我们有：

$\frac{d\vec{A}}{dt}= \frac{\partial \vec{A}}{\partial t}+ \frac{\partial \vec{A}}{\partial \vec{r}}\cdot \vec{v}= \frac{\partial \vec{A}}{\partial t}+ (\vec{v}\cdot \nabla)\vec{A}$

于是：

$$\begin{align}
\frac{d}{dt}(\vec{p}+e\vec{A}) & =e(-\nabla \phi+\nabla(\vec{v}\cdot \vec{A})) \\
 & =\nabla(-e\phi+e\vec{v}\cdot \vec{A})
\end{align}$$
接下来来猜Lagrangian。由Lagrange方程形式可知，我们希望：
$$\left\{ \begin{align}
\frac{\partial L}{\partial \vec{v}} & =\vec{p}+e\vec{A} \\
\frac{\partial L}{\partial \vec{r}} & =\nabla(-e\phi+e\vec{v}\cdot \vec{A})
\end{align}\right.$$
由第二个式子可知$$L=-e\phi+e\vec{v}\cdot \vec{A}+\text{ some terms that don't include $\vec{r}$ explicitly}$$
现在我们用第一个式子修改这个Lagrangian。显然$\frac{\partial (e\vec{v}\cdot \vec{A}）}{\partial \vec{v}}=e\vec{A}$。所以加上的那些不含$\vec{r}$的项微分会得到$\vec{p}$。即构造$W$使得$\frac{\partial W}{\partial \vec{v}}=\vec{p}$

若不考虑相对论，则$\vec{p}=m\vec{v} \implies W= \frac{1}{2}mv^{2}$
若考虑相对论，则$\vec{p}=\gamma m\vec{v}\implies W= \frac{-mc^{2}}{\gamma}$

将得到的Lagrangian拆为两项$L_{p}= \frac{1}{2}mv^{2} \text{ or } \frac{-mc^{2}}{\gamma}$, $L_{pf}=-e\phi+e\vec{v}\cdot \vec{A}$，称为free particle term和particle-field interaction term。

>[! Proposition 1]
>The free particle term plus the particle-field interaction term of the non-relativistic Lagrangian is：
>$L_{p}+L_{pf}= \frac{1}{2}mv^{2}-e\phi+e\vec{v}\cdot \vec{A}$
>The relativistic Lagrangian is：
>$L_{p}+L_{pf}= \frac{-mc^{2}}{\gamma}-e\phi+e\vec{v}\cdot \vec{A}$
>The continuum version is:
>$L_{p}+L_{pf}=\int d^{3}r\left( \frac{1}{2}\rho_{m}v^{2}+\vec{J}\cdot \vec{A}-\rho \phi \right)$ where $\rho_{m}$ is the mass density


>[! Corollary 1]
>The canonical momentum conjugate to $\vec{v}$ is $\vec{p}+e\vec{A}$

## Proof.
$\text{canonical momentum}= \frac{\partial (L_{p}+L_{pf})}{\partial \vec{v}}=\vec{p}+e\vec{A}$
>[! RIght]
>$\blacksquare$

我们回忆起电磁动量密度$\epsilon_{0}\vec{E}\times \vec{B}$，于是不禁想问，正则动量中的电磁项$e\vec{A}$与电磁动量$\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B}$有何关系。

>[! Proposition 2]
>Choose Coulomb gauge ($\nabla \cdot \vec{A}=0$). Let $S$ be the inertial frame in which $e$ is instantaneously motionless. Then
> $e\vec{A}$ is part of $\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B}$ 

## Remark

更详细地讲，我们将证到在这个参考系与规范下，$e\vec{A}$即是电荷$e$产生电场与外磁场叉乘产生的电磁动量。这描述了电荷$e$与外场的作用，而外场自身的作用，即外电场$\times$外磁场产生的电磁动量与此无关。
## Proof.

考虑一个随$e$运动的惯性系$S$，即和$e$的速度一致的系。（但加速度可以不一致。）我们想证明这个系中的电磁动量$\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B}$包含正则动量中的电磁项。

在$S$中，$e$速度为零$\implies$$e$产生的磁场为零。所以总场为：$e$产生的电场，外电场，外磁场。

要计算电磁动量$\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B}$，我们需要计算$\text{(e产生电场+外电场)}\times外磁场$。

>[! Claim]
>$e\vec{A}$ is equal to the EM momentum produced by $\text{E field of e} \times \text{external B field}$ in this setup.

令$e$产生的电场$=$$\vec{E}$， 外场磁场$=$$\vec{B}$。令$\vec{B}$对应的矢势为$\vec{A}$。于是：

$$\begin{align}
\vec{p}_{em} & =\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B} \\
 & =\epsilon_{0}\int d^{3}r\vec{E}\times(\nabla \times \vec{A})
\end{align}$$
上述式子中，为了尽可能贴近$e\vec{A}$，我们将$\vec{B}$化掉。我们同时也想将$\vec{E}$化为$\rho$来贴近$e$，但是这需要$\vec{E}$的导数。这里是做不到的。于是我们期待后续分部积分之类的操作能引出$\vec{E}$的导数。于是：
$$\begin{align}
p_{em,i} & =\epsilon_{0}\int d^{3}r \epsilon_{ijk}E_{j}\epsilon_{klm}(\partial_{l}A_{m}) \\
 & =\epsilon_{0}\int d^{3}r (\delta_{il}\delta_{jm}-\delta_{im}\delta_{jl})(\partial_{l}(A_{m}E_{j})-A_{m}\partial_{l}E_{j}) \\
 & =\epsilon_{0}\int d^{3}r (\partial_{i}(E_{j}A_{j})-A_{j}\partial_{i}E_{j})-\epsilon_{0}\int d^{3}r(\partial_{j}(E_{j}A_{i})-A_{i}\partial_{j}E_{j}) \\
 & =\epsilon_{0}\int d^{3}r \partial_{i}(\delta_{ij}\vec{E}\cdot \vec{A})-\epsilon_{0}\int d^{3}rA_{j}\partial_{i}E_{j}-\epsilon_{0}\int d^{3}r\partial_{j}(E_{j}A_{i})+ \epsilon_{0}\int d^{3}rA_{i}\delta_{ij}\nabla \cdot \vec{E}
\end{align}$$
我们注意到最后一项$\epsilon_{0}\int d^{3}rA_{i}\delta_{ij}\nabla \cdot \vec{E}=\int d^{3}rA_{i}\delta_{ij}\rho=\int d^{3}rA_{i}e\delta^{3}(\vec{r}-\vec{r_{0}})=eA_{i}$已经是我们想要的了。所以我们希望前面三项全部化为零。

>[! Idea 1]
>体积分化为零的一个方法是散度定理化为面积分然后积到无穷。

所以我们用散度定理。第一项和第三项都很好用散度定理。其中对第一项用散度定理参考[[Maxwell Stress Tensor and Momentum#^762215|Maxwell Stress Tensor and Momentum Idea 3]]。 第二项的散度定理参考[[Maxwell Stress Tensor and Momentum#^c89458|Maxwell Stress Tensor and Momentum Idea 2]]。具体来说，因为$e$在$S$中静止，所以自身不产生磁场，即$\nabla \times \vec{E}=0$。于是对第二项用散度定理操作如下：
$$\begin{align}
\epsilon_{0}\int d^{3}rA_{j}\partial_{i}E_{j} & =\epsilon_{0}\int d^{3}rA_{j}(\partial_{j}E_{i}) \\
 & =\epsilon_{0}\int d^{3}r(\partial_{j}(A_{j}E_{i})-E_{i}\partial_{j}A_{j}) \\& =\epsilon_{0}\int d^{3}r\partial_{j}(A_{j}E_{i}) \text{ (by Coulomb gauge)} \\
 & =\epsilon_{0}\int da_{j}A_{j}E_{i} \\
 & =0\text{ if the surface integral is taken to infinity}
\end{align}$$
>[!Right]
>$\blacksquare$ 
## Ex:
A neutral and point-like particle possesses an electric dipole moment $\vec{p}(t)$ and a magnetic dipole moment $\vec{m}$. Find a suitable Lagrangian $L_{0}=L_{p}+L_{pf}$ for this particle under external fields $\vec{E}(\vec{r},t),\vec{B}(\vec{r},t)$. All the field terms should be expressed using $\vec{E},\vec{B}$.

$L_{p}$项十分简单。即$L_{p}= \frac{1}{2}mv^{2}$。现在考虑$L_{pf}$项。我们知道：$L_{pf}=\int d^{3}r(\vec{J}\cdot \vec{A}-\rho \phi)$ 

我们来计算$\vec{J}$。因为没有自由电荷，电流就全是电和磁极化电流。即：
$\vec{J}= \frac{\partial \vec{P}}{\partial t}+\nabla \times \vec{M}$

其中$\vec{P}=\vec{p}\delta(\vec{r}-\vec{r_{0}}),\vec{M}=\vec{m}\delta(\vec{r}-\vec{r_{0}})+\vec{P}\times \vec{v}$, where $\vec{r_{0}}=\vec{r_{0}}(t)$ is the trajectory of the particle. 关于$\vec{P}\times \vec{v}$，见[[电流与电荷#^cb56dc]]。

### Caveat
我们不能有$\vec{J}=\nabla \times (\vec{m}\delta(\vec{r}-\vec{r_{0}}))+(-\nabla \cdot \vec{P})\vec{v}$。即我们naive地将磁极化电流和电极化电荷运动产生的电流相加。关键点在于电极化电荷运动产生的电流并非$(-\nabla \cdot \vec{P})\vec{v}$。这是因为我们允许电偶极子转动，即$\vec{p}=\vec{p}(t)$。这就是说电极化电荷$-\nabla \cdot \vec{P}$不是在以均一的速度$\vec{v}$运动。所以唯一合理的计算方法是$\vec{J}=\nabla \times \vec{M}+ \frac{\partial \vec{P}}{\partial t}$。

所以：
$$\begin{align}
\vec{J} & = \frac{\partial}{\partial t}(\vec{p}\delta(\vec{r}-\vec{r_{0}}))+\nabla \times(\vec{m}\delta(\vec{r}-\vec{r_{0}})+\vec{p}\delta(\vec{r}-\vec{r_{0}})\times \vec{v}) \\
 & =\dot{\vec{p}}\delta-\vec{p}(\nabla\delta)\cdot \vec{v}-\vec{m}\times \nabla\delta+(\vec{v}\cdot \nabla)(\vec{p}\delta)-(\vec{p}\cdot \nabla)(\vec{v}\delta) \\
 & =\dot{\vec{p}}-\vec{m}\times \nabla\delta-(\vec{p}\cdot \nabla)(\vec{v}\delta)
\end{align}$$
接着：
$$\begin{align}
\int d^{3}r\vec{J}\cdot \vec{A} & =\int d^{3}rA_{i}(\dot{p_{i}}\delta-\epsilon_{ijk}m_{j}(\partial_{k}\delta)-v_{i}p_{j}(\partial_{j}\delta)) \\
 & =\vec{A}\cdot \dot{\vec{p}}-\int d^{3}r\epsilon_{ijk}m_{j}(\partial_{k}\delta)A_{i} -\int d^{3}rv_{i}p_{j}(\partial_{j}\delta)A_{i} \\
 & =\vec{A}\cdot  \dot{\vec{p}} -\epsilon_{ijk}m_{j}\int d^{3}r(\partial_{k}(A_{i}\delta)-\delta(\partial_{k}A_{i}))-v_{i}p_{j}\int d^{3}r(\partial_{j}(\delta A_{i})-\delta(\partial_{j}A_{i})) \\
 & =\vec{A}\cdot   \dot{\vec{p}}-\epsilon_{ijk}m_{j}\int da_{k}A_{i}\delta +\epsilon_{ijk}m_{j}\int d^{3}r\delta(\partial_{k}A_{i})-v_{i}p_{j}\int da_{j}\delta A_{i}+v_{i}p_{j}\int d^{3}r\delta(\partial_{j}A_{i}) \\
 & =\vec{A}\cdot  \dot{\vec{p}}+\epsilon_{ijk}m_{j}(\partial_{k}A_{i})+v_{i}p_{j}(\partial_{j}A_{i}) \\
 & =\vec{A}\cdot  \dot{\vec{p}} + \vec{m}\cdot(\nabla \times \vec{A})+(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A}) \\
 & =\vec{A}\cdot  \dot{\vec{p}}+\vec{m}\cdot \vec{B} +(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A})
\end{align}$$
上述面积分消失是因为idea 1。此处注意应做到将尽量多的$\vec{A}$都写为$\vec{B}$。

接下来看：
$$\begin{align}
-\int d^{3}r\rho \phi & =\int d^{3}\nabla \cdot(\vec{p}\delta(\vec{r}-\vec{r_{0}}))\phi \\
 & =\int d^{3}r\partial_{i}(p_{i}\delta)\phi \\
 & =\int d^{3}r(\partial_{i}(p_{i}\delta \phi)-p_{i}\delta (\partial_{i}\phi)) \\
 & =\int da_{i}p_{i}\delta \phi-\int d^{3}rp_{i}\delta(\partial_{i}\phi) \\
 & =-\int d^{3}rp_{i}\delta(\partial_{i}\phi) \\
 & =-p_{i}(\partial_{i}\phi) \\
 & =-\vec{p}\cdot \nabla \phi
\end{align}$$

于是：
$L_{pf}=\vec{A}\cdot  \dot{\vec{p}}+\vec{m}\cdot \vec{B}+(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A})-\vec{p}\cdot \nabla \phi$

我们接下来只需要把所有的$\vec{A},\phi$化为$\vec{B},\vec{E}$即可。我们有：
$$\begin{align}
L_{pf} & =\vec{A}\cdot  \dot{\vec{p}}+\vec{m}\cdot \vec{B} +(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A})+\vec{p}\cdot\left( \vec{E}+ \frac{\partial \vec{A}}{\partial t} \right)  \\
 & = \frac{\partial}{\partial t}(\vec{A}\cdot \vec{p})+\vec{m}\cdot \vec{B}+(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A})+\vec{p}\cdot \vec{E}
\end{align}$$
接下来需要处理$(\vec{p}\cdot \nabla)(\vec{v}\cdot \vec{A})$。我们可以用material derivative来处理。于是我们希望出现$\vec{v}\cdot \nabla$。容易证到$(\vec{p}\cdot \nabla)(\vec{A}\cdot \vec{v})=\vec{p}\cdot(\vec{v}\times \vec{B})+(\vec{v}\cdot \nabla)(\vec{p}\cdot \vec{A})$。于是：
$$\begin{align}
L_{pf} & =\frac{\partial}{\partial t}(\vec{A}\cdot \vec{p})+\vec{m}\cdot \vec{B}+\vec{p}\cdot(\vec{E}+\vec{v}\times \vec{B})+(\vec{v}\cdot \nabla)(\vec{p}\cdot \vec{A}) \\
 & = \frac{d}{d t}(\vec{A}\cdot \vec{p})+\vec{m}\cdot \vec{B}+\vec{p}\cdot(\vec{E}+\vec{v}\times \vec{B})
\end{align}$$

因为在由Hamilton原理得到运动方程时，我们计算$\delta S=\delta \int_{t_{1}}^{t_{2}}(L_{p}+L_{pf})dt=0$。其中$\delta \int_{t_{1}}^{t_{2}} \frac{d}{dt}(\vec{A}\cdot \vec{p})dt=\delta(\vec{A}\cdot \vec{p})|_{t_{1}}^{t_{2}}=0$。是否在Lagrangian中加上这一项不会印象作用量的变分。所以我们可以从Lagrangian中去掉这一项。最后结果：

$L_{0}=L_{p}+L_{pf}= \frac{1}{2}mv^{2}+\vec{m}\cdot \vec{B}+\vec{p}\cdot(\vec{E}+\vec{v}\times \vec{B})$

# 3. Free-field term

描述free-field的广义坐标：

将电磁场看做一个有着动量，能量的系统。我们可以用$\vec{E}(\vec{r}),\vec{B}(\vec{r})$来作为广义坐标来描述电磁场的“运动”。$\vec{E}(\vec{r}),\vec{B}(\vec{r})$随时间的演化由Maxwell方程给出。因为$\vec{E},\vec{B}$完全由$\phi,\vec{A}$决定，我们也可以选取$\phi(\vec{r}),\vec{A}(\vec{r})$来描述电磁场的“运动”。

自由度分析：

对于$\vec{E}(\vec{r})$来说，每一点$\vec{r}$处$\vec{E}$有三个分量，故有三个自由度。而$\vec{r}$的取值遍布$\mathbb{R}^{3}$，所以总体来说有$3|\mathbb{R}^{3}|$个自由度。这对于$\vec{B}$来说也是一样。所以总体上来讲，一个遍布全空间的电磁场有$6|\mathbb{R}^{3}|$个自由度。

Lagrangian:

我们宣称$L_{f}= \int dr^{3}\mathcal{L}_{f}= \frac{\epsilon_{0}}{2}\int d^{3}r\left( E^{2}- c^{2}B^{2} \right)$。Lagrangian应当是对于所有自由度的项相加。例如说一个free-particle有三个自由度，其Lagrangian为$\frac{1}{2}mv_{1}^{2}+ \frac{1}{2}mv_{2}^{2}+ \frac{1}{2}mv_{3}^{2}$。所以我们对于这里对于连续变量$\vec{r}$“相加”，也就是积分，还要对于$\vec{E},\vec{B}$的分量相加，得到全空间free-field的Lagrangian $L_{f}$。其中$\mathcal{L}_{f}$为Lagrangian密度。

因为在前面我们已经有$L_{p}+L_{pf}=\sum_{i} \frac{1}{2}m_{i}v_{i}^{2}+\int d^{3}r(\vec{J}\cdot \vec{A}-\rho \phi)$，所以在free-field term中选取$\phi,\vec{A}$作为广义坐标是更consistent的。于是我们有：

>[! Proposition 1]
>The free-field Lagrangian is:
>$$L_{f}=\int d^{3}r\mathcal{L}_{f}= \frac{\epsilon_{0}}{2}\int d^{3}r\left( E^{2}- c^{2}B^{2} \right)= \frac{\epsilon_{0}}{2}\int d^{3}r\left( \left( -\nabla \phi- \frac{\partial \vec{A}}{\partial t} \right)^{2}- c^{2}(\nabla \times \vec{A})^{2} \right)$$
## Remark
我们可以naive地写下Lagrange方程，即对Lagrangian求广义速度，广义坐标的导然后建立ODE。但这样做是不对的。我们对于广义速度，广义坐标求导建立Lagrange方程建立在这样的事实上：Lagrangian仅为广义坐标，广义速度的显函数。

但这里，$L_{f}$含有$\nabla \phi,\nabla \times \vec{A}$，它们既不是广义坐标，也不是广义速度（广义坐标的时间导数）。它们是广义坐标的空间倒数。因此我们建立的Lagrange方程是不一样的。

于是我们先对于Lagrangian仅为广义坐标，广义速度，和时间的显函数的情况作如下proposition

>[! Proposition 2]
>Let $L(q_{k},\dot{q_{k}},t)$ be the Lagrangian of the system. Then the Lagrange equation that governs the system is
>$$\frac{d}{dt}\left( \frac{\partial L}{\partial \dot{q_{k}}} \right)- \frac{\partial L}{\partial q_{k}}=0$$
## Proof.
$$\begin{align}
S & =\int_{t_{1}}^{t_{2}}dtL(q_{k},\dot{q_{k}},t) \\
\implies\delta S  & =\int_{t_{1}}^{t_{2}}dt\left( \frac{\partial L}{\partial q_{k}}\delta q_{k}+ \frac{\partial L}{\partial \dot{q_{k}}}\delta  \dot{q_{k}} \right)
\end{align}$$
>[! Idea 1]
>为了利用$\delta q_{k}$的独立性写出Lagrange方程，我们希望integrand为$()\delta q_{k}$的形式，然后将$()$中内容等于零就可以了。为了将integrand写为这种形式，我们对广义速度项作integration by parts。

^67894a

所以：
$$\begin{align}
\delta S & =\int_{t_{1}}^{t_{2}}dt\left(  \frac{\partial L}{\partial q_{k}} \delta q_{k}+ \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{k}}}\delta q_{k} \right)- \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{k}}} \right)\delta q_{k}\right) \\
 & =\int_{t_{1}}^{t_{2}}dt\left(  \frac{\partial L}{\partial q_{k}}\delta q_{k} - \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{k}}} \right)\delta q_{k} \right) \\
 & =\int_{t_{1}}^{t_{2}}dt\left(  \frac{\partial L}{\partial q_{k}} - \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{k}}} \right) \right)\delta q_{k}=0 \\
\implies  & \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{k}}} \right)- \frac{\partial L}{\partial q_{k}} =0
\end{align}$$
>[! RIght]
>$\blacksquare$

现在我们的$L_{f}=L_{f}(q_{k}, \dot{q_{k}},\partial_{j}q_{k},t)$，于是我们用同样的方法导出新的Lagrange方程。

>[! Proposition 3]
>Let $\mathcal{L}_{f}(q_{k},\dot{q_{k}},\partial_{j}q_{k},t)$ be the free-field Lagrangian density. Then the Lagrange equation is:
>$$\frac{d}{dt}\left(  \frac{\partial \mathcal{L}_{f}}{\partial  \dot{q_{k}}} \right)= \frac{\partial \mathcal{L}_{f}}{\partial q_{k}}- \partial_{j} \frac{\partial \mathcal{L}_{f}}{\partial(\partial_{j}q_{k})}$$
## Proof.
$$\begin{align}
S & =\int_{t_{1}}^{t_{2}}dt\int d^{3}r\mathcal{L}_{f}(q_{k}, \dot{q_{k}}, \partial_{j}q_{k},t) \\
\implies \delta S & =\int dt\int d^{3}r \left(  \frac{\partial \mathcal{L}_{f}}{\partial q_{k}}\delta q_{k}+ \frac{\partial \mathcal{L}_{f}}{\partial  \dot{q_{k}}}\delta  \dot{q_{k}}+ \frac{\partial \mathcal{L}_{f}}{\partial (\partial_{j}q_{k})}\delta(\partial_{j}q_{k}) \right) \\
 & =\int dt\int d^{3}r\left(  \frac{\partial \mathcal{L}_{f}}{\partial q_{k}}\delta q_{k} + \frac{d}{dt}\left(  \frac{\partial \mathcal{L}_{f}}{\partial  \dot{q_{k}}} \delta q_{k} \right)- \frac{d}{dt}\left(  \frac{\partial \mathcal{L}_{f}}{\partial  \dot{q_{k}}} \right)\delta q_{k}+ \partial_{j}\left(  \frac{\partial \mathcal{L}_{f}}{\partial (\partial_{j}q_{k})}\delta q_{k} \right) -\partial_{j}\left(  \frac{\partial \mathcal{L}_{f}}{\partial(\partial_{j}q_{k})} \right)\delta q_{k} \right) \\
 & = \int dt\int d^{3}r\left(  \frac{\partial \mathcal{L}_{f}}{\partial q_{k}}\delta q_{k} + - \frac{d}{dt}\left(  \frac{\partial \mathcal{L}_{f}}{\partial  \dot{q_{k}}} \right)\delta q_{k} -\partial_{j}\left(  \frac{\partial \mathcal{L}_{f}}{\partial(\partial_{j}q_{k})} \right)\delta q_{k} \right) =0 \\
\end{align}$$
注意我们同样运用了idea 2。其中$\partial_{j}\left(  \frac{\partial \mathcal{L}_{f}}{\partial(\partial_{j}q_{k})}\delta q_{k} \right)$积分为零是因为散度定理，面积分积到无穷。于是proposition 5自然得证。
>[!RIght]
>$\blacksquare$

我们还可以注意到$\mathcal{L}_{f}$的symmetry properties。
>[! Proposition 4]
>$\mathcal{L}_{f}= \frac{\epsilon_{0}}{2}(E^{2}-c^{2}B^{2})$ is invariant under rotation, space inversion, and time reversal. That is $\mathcal{L}_{f}$ is a scalar.

## Proof.
我们的变换全是被动变换，因此“绝对的”电磁场矢量都没有变换。此处$\vec{E},\vec{B}$为电磁场矢量在不同基下的component。

因为rotation和space inversion都是orthogonal transformation，所以$E^{'2}=E^{2},B^{'2}=B^{2}$。令$A=\text{rotation or space inversion}$，则：
$$\mathcal{L}_{f}^{'}(\vec{r},t)=\mathcal{L}_{f}(A\vec{r},t)= \frac{\epsilon_{0}}{2}(E^{2}(A\vec{r},t)-c^{2}B^{2}(A\vec{r},t))=\frac{\epsilon_{0}}{2}(E^{2}(\vec{r},t)-c^{2}B^{2}(\vec{r},t))= \mathcal{L}_{f}(\vec{r},t)$$
这也就是说$\mathcal{L}_{f}$这个函数按照[[Symmetries in EM#^2ab4f4]]变换dependence成为$\mathcal{L}_{f}^{'}$后，在$\vec{r}$的取值还是不变。这也就是说函数对于$\vec{r}$的dependence没有改变。这也就是说该函数在不同基下的表象没有变化。

同样地，令$A=\text{time reversal}$，我们知道$\vec{E}(\vec{r},At)=\vec{E}(\vec{r},t),\vec{B}(\vec{r},At)=-\vec{B}(\vec{r},t)$。则：
$$\mathcal{L}_{f}^{'}(\vec{r},t)=\mathcal{L}_{f}(\vec{r},At)= \frac{\epsilon_{0}}{2}(E^{2}(\vec{r},At)-c^{2}B^{2}(\vec{r},At))= \frac{\epsilon_{0}}{2}(E^{2}(\vec{r},t)-c^{2}B^{2}(\vec{r},t))=\mathcal{L}_{f}(\vec{r},t)$$
dependence同样没有任何变化。
>[!Right]
>$\blacksquare$
# 4. EM equations

我们现在有完整的粒子$+$电磁场的Lagrangian：

>[! Proposition 1]
>The Lagrangian of the system of particles moving in fields is:
>$$L_{EM}= L_{p}+L_{pf}+L_{f}=\sum_{i} \frac{1}{2}m_{i}v_{i}^{2}+\int d^{3}r(\vec{J}\cdot \vec{A}-\rho \phi)+ \int d^{3}r \frac{\epsilon_{0}}{2}(E^{2}-c^{2}B^{2})$$

我们现在来看Lagrange方程如何产生Coulomb-Lorentz law以及Maxwell方程。

考虑一些自由粒子$m_{i}$在场中运动，每个带有电荷$e_{i}$。则：
$$L_{EM}=\sum_{i} \frac{1}{2}m_{i}v_{i}^{2}+e_{i}(\vec{v_{i}}\cdot \vec{A}-\phi)+\int d^{3}r\mathcal{L}_{f}$$
然后：
$$\begin{align}
\frac{d}{dt}\left(  \frac{\partial L_{EM}}{\partial \vec{v_{i}}} \right) & = \frac{\partial L_{EM}}{\partial \vec{r_{i}}} \\ \implies
\frac{d}{dt}(m_{i}\vec{v_{i}}+e_{i}\vec{A}) & =e_{i}\nabla_{i}(\vec{v_{i}}\cdot \vec{A}-\phi) \\
\implies \frac{d}{dt}(m_{i}\vec{v_{i}}) & =e_{i}(\vec{E}+\vec{v_{i}}\times \vec{B})
\end{align}$$
这便是Colomb-Lorentz law。因为$L_{EM}$不含$\vec{r_{i}}$的空间导数，所以Lagrange方程还是最标准的Lagrange方程。

接下来将$L_{EM}$写为广义坐标$\vec{A},\phi$的函数：
$$L_{EM}=L_{p}+\int d^{3}r(\vec{J}\cdot \vec{A}-\rho \phi)+\int d^{3}r \frac{\epsilon_{0}}{2}\left( \left( -\nabla \phi- \frac{\partial \vec{A}}{\partial t} \right)^{2}-c^{2}(\nabla \times \vec{A})^{2} \right)$$
然后我们用Proposition 5写出Lagrange方程。
$$\begin{align}
\frac{d}{dt}\left(  \frac{\partial (\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial    \dot{A_{i}}} \right) & = \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial A_{i}}- \partial_{k}\left(  \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial(\partial_{k}A_{i})} \right) \\
\implies \frac{d}{dt}(\epsilon_{0}(\nabla \phi+ \dot{\vec{A}})_{i} ) & =J_{i}+\epsilon_{0}c^{2}\epsilon_{jki}\partial_{k}B_{j} \\
\implies \nabla \times \vec{B} & =\mu_{0}\vec{J}+ \frac{1}{c^{2}} \frac{\partial \vec{E}}{\partial t}
\end{align}$$
注意一些计算细节：
在计算$\partial_{k}\left( \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial(\partial_{k}A_{i})} \right)$时，我们要计算：
$$\begin{align}
\frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial(\partial_{k}A_{i})} & =\frac{\partial}{\partial(\partial_{k}A_{i})}\left( - \frac{\epsilon_{0}}{2}c^{2}\left( \sum_{jlm}\epsilon_{jlm}\partial_{l}A_{m} \right)^{2} \right)  \\
 & =-\epsilon_{0}\left( \sum_{jlm}\epsilon_{jlm}\partial_{l}A_{m} \right)\left( \sum_{jlm}\epsilon_{jlm}\delta_{lk}\delta_{im} \right) \\
 & =-\epsilon_{0}\sum_{j}B_{j}\epsilon_{jki} \\
\implies\partial_{k}\left( \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial(\partial_{k}A_{i})} \right) & =-\epsilon_{0}\sum_{j}\epsilon_{jki}\partial_{k}B_{j}=\epsilon_{0}(\nabla \times \vec{B})_{i}
\end{align}$$
其中第一行右手边平方内如果用Eistein约定来写可能产生歧义，所以我们特意不省略求和。

接下来：
$$\begin{align}
0=\frac{d}{dt}\left(  \frac{\partial (\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial    \dot{\phi_{}}} \right) & = \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial \phi_{}}- \partial_{k}\left(  \frac{\partial(\mathcal{L}_{pf}+\mathcal{L}_{f})}{\partial(\partial_{k}\phi_{})} \right) \\
\implies 0 & =-\rho + \epsilon_{0}\partial_{k}E_{k} \\
\implies \nabla \cdot \vec{E} & = \frac{\rho}{\epsilon_{0}}
\end{align}$$

另外两个其次Maxwell方程由$\vec{A},\phi$的定义显然成立，即：
$$\vec{E}=-\nabla \phi- \frac{\partial \vec{A}}{\partial t},\vec{B}=\nabla \times \vec{A}\implies \nabla \times \vec{E}= - \frac{\partial \vec{B}}{\partial t},\nabla \cdot \vec{B}=0$$
# 5. Relativistic formulation

我们回忆起下面一些电磁场中的矢量与张量：
$$\left\{ \begin{align}
 & (A^i)=\left(  \frac{\phi}{c} ,\vec{A} \right) \\
 & (J^i)=(c\rho,\vec{J}) \\
 & F^{lm}F_{lm}=2\left( B^{2}- \frac{E^{2}}{c^{2}} \right)
\end{align}\right.$$
于是我们可以将relativistic Lagrangian改写。即：
$$L= - \frac{mc^{2}}{\gamma}-\int d^{3}r(J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm})$$

>[! Proposition 1]
The relativistic Lagrangian of a particle-field system is: 
$$L= -\frac{mc^{2}}{\gamma}-\int d^{3}r(J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm})$$

>[! Proposition 2]
>The action $S=\int dtL$ is an invariant.
## Proof.

在任何一个惯性系中观察电荷与场相互作用的系统，考虑这个系统的作用量积分：
$$\begin{align}
S & =\int dtL \\
 & =-\int dt \frac{mc^{2}}{\gamma}- \int dtd^{3}r\left( J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm} \right) \\
 & =-\int d\tau mc^{2}-\int d^4x \frac{1}{c}\left( J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm} \right)
\end{align}$$
首先，$d\tau$是标量。所以$\int d\tau mc^{2}$是一个不变量。

然后来看第二项。如果我们把$\int d^4x$当做流形上的，将4-form映到实数的积分，并把$d^4x=dx^0\wedge\dots \wedge dx^3$看做一个测度，则显然该测度不变。因为$\sqrt{ |g| }d^4x=d^4x$（Minkowski度规下$|g|=1$）是一个不变量。而$J^iA_{i},F^{lm}F_{lm}$都是标量，在不同系中取值都一样。所以$d^4x \frac{1}{c}\left( J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm} \right)$就是一个在任何系中都不变的4-form。具体来说，在任何系中的同一点（by同一点，I mean 绝对矢量实体指示的一点。），它的取值都一样。所以$\int$算子就只会把它映到同一个值。所以第二项也是一个不变量。

或者也可以运用多元微积分知识，回忆$d^4x^{'}=| \frac{\partial x^{i^{'}}}{\partial x^i}|d^4x$。而Jacobian $\frac{\partial x^{i^{'}}}{\partial x^i}$就是Lorentz群中的矩阵。它们要么是boost，要么是旋转，determinant都为一。所以$d^4x^{'}=d^4x$

因此作用量$S$是一个不变量。
>[!Right]
>$\blacksquare$

我们可以给出Lagrange方程。令$L(r_{i}(t),\dot{r_{i}}(t))= -\frac{mc^{2}}{\gamma}- \int d^{3}r\left( J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm} \right)= -\frac{mc^{2}}{\gamma}+\int d^{3}r \mathcal{L}(r_{i}(t),\dot{r_{i}}(t),A_{i}(\vec{r},t),\partial_{j}A_{i}(\vec{r},t))$
其中，$r_{i}$指的是质点坐标的分量$i$。（这里我们只放了一个质点在电磁场里面。）$\vec{r}$是用来描述场的空间分布的坐标。注意$J^i$中含有质点位置$\dot{r_{i}}$和空间位置$\vec{r}$的dependence，$F^{lm}{F_{lm}}$中含有空间位置$\vec{r}$和$\partial_{j}A_{i}$的dependence。（因为$F_{lm}=\partial_{l}A_{m}-\partial_{m}A_{l}$）
## Remark
这里我们应当发现，对于场来说，时间$t$和空间$\vec{r}$具有相同地位，都是parametrize其演化的量。一般地力学系统是广义坐标$q_{i}=q_{i}(t)$由一个参数parametrize。在电磁场这个“力学”系统中，是广义坐标$A_{i}=A_{i}(\vec{r},t)$由四个参数parametrize。

具体严格来说，构造这个Lagrange方程应当参考[[Hamilton原理与Lagrange方程]]，并将参数由一个$t$增加到四个$\vec{r},t$。这个generalization应当很trivial。我们这里就不严格地推一下Lagrange方程。运用[[Lagrangian Formulation of EM#^67894a| Lagrangian formulation of EM idea 3.1]]。

对于质点坐标$r_{i}$来说：
$$\begin{align}
S=\int dt L(r_{i}(t),  \dot{r_{i}}(t)) \implies \frac{\partial L}{\partial r_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{r_{i}}}=0
\end{align}$$
对于势$A_{i}(\vec{r},t)$来说：
$$\begin{align}
S & =\int dtL= -\int dt \frac{mc^{2}}{\gamma}+ \int dtd^{3}r\mathcal{L} =\int dtL_{f}+ \int dtd^{3}r\mathcal{L}\\
\end{align}$$
$$\begin{align}
\implies \delta S & =\int dt \left( \frac{\partial L_{f}}{\partial r_{i}}\delta r_{i}+ \frac{\partial L_{f}}{\partial  \dot{r_{i}}}\delta  \dot{r_{i}} \right)+ \int dtd^{3}r \left(  \frac{\partial \mathcal{L}}{\partial r_{i}}\delta r_{i}+ \frac{\partial\mathcal{L}}{\partial  \dot{r_{i}}}\delta  \dot{r_{i}}+ \frac{\partial \mathcal{L}}{\partial A_{i}}\delta A_{i}+ \frac{\partial \mathcal{L}}{\partial(\partial_{j})A_{i}}\delta(\partial_{j}A_{i}) \right) \\
  & =\int dt\left(  \frac{\partial}{\partial r_{i}}\left( L_{f}+ \int d^{3}r\mathcal{L} \right)\delta r_{i}+ \frac{\partial}{\partial  \dot{r_{i}}}\left( L_{f}+ \int d^{3}r\mathcal{L} \right)\delta  \dot{r_{i}}  \right)+ \int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}+ \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i}})\delta(\partial_{j}A_{i}) \right) \\
 & =\int dt\left( \frac{\partial L}{\partial r_{i}}\delta r_{i}+ \frac{\partial L }{\partial  \dot{r_{i}} }\delta  \dot{r_{i}} \right)+\int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}+ \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})}\delta(\partial_{j}A_{i}) \right) \\
 & =\int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}+ \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})}\delta(\partial_{j}A_{i}) \right)  \\
 & =\int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}+ \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})}\partial_{j}\delta A_{i}  \right) \\
 & =\int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}+ \partial_{j}\left(  \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})}\delta A_{i} \right)- \partial_{j}\left(  \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})} \right)\delta A_{i} \right) \\
 & =\int dtd^{3}r\left(  \frac{\partial\mathcal{L}}{\partial A_{i}}\delta A_{i}- \partial_{j}\left(  \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})} \right)\delta A_{i} \right)=0
\end{align}$$
其中倒数第二步到倒数第一步运用了散度定理，并且在全空间积分后为零。
$$\implies \frac{\partial\mathcal{L}}{\partial A_{i}}- \partial_{j}\left(  \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})} \right)=0$$
>[! Proposition 3]
>Write the Lagrangian as:
>$$L= -\frac{mc^{2}}{\gamma}- \int d^{3}r\left( J^iA_{i}+ \frac{1}{4\mu_{0}}F^{lm}F_{lm} \right)= -\frac{mc^{2}}{\gamma}+ \int d^{3}r\mathcal{L}$$
>Then the Lagrange equations are:
>$$\begin{align}  & \frac{\partial L}{\partial r_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{r_{i}}}=0 \\  & \frac{\partial\mathcal{L}}{\partial A_{i}}- \partial_{j}\left(  \frac{\partial\mathcal{L}}{\partial(\partial_{j}A_{i})} \right)=0
\end{align}$$





