# Big picture

考虑一个电荷分布$\Omega$，其中一部分$V \subset \Omega$受到的力为$\vec{F}=\int d^{3}r\rho(\vec{E}+\vec{v}\times \vec{B})$

我们希望将其改写为一个压力张量的形式，即写成$\vec{F}=\int d\vec{a}\cdot \text{strees tensor}$ 的形式，即压力张量在表面上积分。

# Maxwell stress tensor

我们用分量形式计算。

$F_{i}=\int_{{V}}d^{3}r\rho(E_{i}+\epsilon_{ijk}v_{j}B_{k})$

我们先来处理电场项$\int d^{3}r\rho E_{i}$。

>[! Idea 1]
>为了使得压力张量为场的函数，我们将消去一切的source term（即$\rho,\vec{J}$）。消去的方法为将它们写成场的导数。

^2ae259

于是
$$\begin{align}
\int d^{3}r\rho E_{i} & =\epsilon_{0}\int d^{3}r(\partial_{j}E_{j})E_{i} \\
 & =\epsilon_{0}\int d^{3}r(\partial_{j}(E_{i}E_{j})-(\partial_{j}E_{i})E_{j} ) 
\end{align}$$
为了执行idea 1，我们希望用散度定理将体积分化为面积分。注意到$\int d^{3}r\partial_{j}(E_{i}E_{j})$已经可以用散度定理了。接下来来处理$\int d^{3}r(\partial_{j}E_{i})E_{j}$

要用散度定理，我们希望把所有东西都拿到微分算子里面。一个方法是分部积分。但是上面我们已经用过了，再分部就回去了。

>[! Idea 2]
所以我们可以用某种等式改写$(\partial_{j}E_{i})E_{j}$，再作分部积分，这样就不会分部回去了。

^c89458

回忆起：$\nabla \times \vec{E}=- \frac{\partial \vec{B}}{\partial t}\implies\epsilon_{ijk}\partial_{j}E_{k}=-\partial_{t}B_{i}\implies\epsilon_{ilm}\epsilon_{ijk}\partial_{j}E_{k}=-\partial_{t}B_{i}\epsilon_{ilm}$
展开计算后得到$\partial_{l}E_{m}-\partial_{m}E_{l}=-\partial_{t}B_{i}\epsilon_{ilm}$ 或者更换指标写为$\partial_{j}E_{i}-\partial_{i}E_{j}=-\partial_{t}B_{l}\epsilon_{lji}$

于是：
$$\begin{align}
\int d^{3}r(\partial_{j}E_{i})E_{j} & =\int d^{3}r(\partial_{i}E_{j}-\partial_{t}B_{l}\epsilon_{lji})E_{j} \\
 & =\int d^{3}r(\partial_{i}  E_{j})E_{j}-\int d^{3}r(\partial_{t}B_{l})E_{j}\epsilon_{lji} \\
 & = \frac{1}{2}  \int d^{3}r\partial_{i}(E_{j}^{2})-\int d^{3}r\epsilon_{ilj}(\partial_{t}B_{l})E_{j} \\
 & = \frac{1}{2}\int d^{3}r \delta_{ij}\partial_{i}(E^{2})-\int d^{3}r\epsilon_{ilj}(\partial_{t}B_{l})E_{j}  \ \dots \ *)
\end{align}$$
## Caveat

在将可以求和的分量求和时，我们要保持未求和的状态。具体来说就是$E_{j}^{2}$不能直接写成$E^{2}$。因为我们在写分量式时还没有对$j$求和。所以如果我们将求和号写出来，我们应该这样： $\sum_{j}E_{j}^{2}=\sum_{j}\delta_{ij}E^{2}$。所以我们应当将$E_{j}$写为$\delta_{ij}E^{2}$。

>[! Proposition 1]
>Divergence theorem: $\int d^{3}r \nabla \cdot \overset{\leftrightarrow}{T}=\int d\vec{a} \cdot \overset{\leftrightarrow}{T}$
>In component form: $\int d^{3}r \partial_{j}T_{ji}=\int da_{j}T_{ji}$

但是我们发现$*)$第一项因为是对$i$分量求导而不是对$j$分量求导，无法用散度定理。但是我们可以用$\delta_{ij}$的性质作改写。

>[! Idea 3]
>我们可以作改写$\frac{1}{2}\int d^{3}r \delta_{ij}\partial_{i}(E^{2})=\frac{1}{2}\int d^{3}r \delta_{ij}\partial_{j}(E^{2})$

^762215

于是：
$\int d^{3}r (\partial_{j}E_{i})E_{j}= \frac{1}{2}\int da_{j}\delta_{ij}E^{2}-\int d^{3}r \epsilon_{ilj}(\partial_{t}B_{l})E_{j}$

于是电场项可写为：$\epsilon_{0}\int da_{j}E_{i}E_{j}- \frac{1}{2}\epsilon_{0}\int da_{j}\delta_{ij}E^{2}+\epsilon_{0}\int d^{3}r\epsilon_{ilj}(\partial_{t}B_{l})E_{j}$（我对$\int d^{3}r\partial_{j}(E_{j}E_{i})$又用了一次散度定理。）


接下来处理磁场项。思路和电场项类似，就不赘述了。直接计算：
$$\begin{align}
\int d^{3}r \epsilon_{ijk}\rho v_{j}B_{k} & =\int d^{3}\epsilon_{ijk}J_{j}B_{k} \\
 & =\int d^{3}r\epsilon_{ijk}\left(  \frac{1}{\mu_{0}}\epsilon_{jlm}(\partial_{l}B_{m})-\epsilon_{0}(\partial_{t}E_{j}) \right)B_{k} \\ \\
 & = \frac{1}{\mu_{0}} \int d^{3}r\epsilon_{ijk}\epsilon_{jlm}(\partial_{l}B_{m})B_{k}-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} \\
 & = \frac{1}{\mu_{0}} \int d^{3}r(\delta_{kl}\delta_{im}-\delta_{km}\delta_{il})(\partial_{l}(B_{m}B_{k})-(\partial_{l}B_{k})B_{m})-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} \\
 & = \frac{1}{\mu_{0}}\int d^{3}r(\partial_{l}(B_{i}B_{l})-(\partial_{l}B_{l})B_{i}-\partial_{i}(B_{k}^{2})+(\partial_{i}B_{k})B_{k} -\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} \\
 & = \frac{1}{\mu_{0}}\int d^{3}r\partial_{l}(B_{i}B_{l})- \frac{1}{2\mu_{0}}\int d^{3}r\delta_{ik}\partial_{i}(B^{2})-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} \\  & = \frac{1}{\mu_{0}}\int d^{3}r\partial_{l}(B_{i}B_{l})- \frac{1}{2\mu_{0}}\int d^{3}r\delta_{ik}\partial_{k}(B^{2})-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} \\

 & = \frac{1}{\mu_{0}}\int da_{l}B_{l}B_{i}- \frac{1}{2\mu_{0}}\int da_{k}\delta_{ik}(B^{2})-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} 
\end{align}$$

接下来，显然我们希望磁场项和电场项相加后，$\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k}$会被消掉，因为电场项中也含有长得很像这个的一项，而且不能很好地用散度定理。我们单独来看这两项相加：
$$\begin{align}
\epsilon_{0}\int d^{3}r\epsilon_{ilj}(\partial_{t}B_{l})E_{j}-\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}E_{j})B_{k} & =\epsilon_{0}\int d^{3}r\epsilon_{ijk}(E_{k}\partial_{t}B_{j}-B_{k}\partial_{t}E_{j}) \text{ (we changes the indices)} \\
 & =\epsilon_{0}\int d^{3}r\epsilon_{ijk}(\partial_{t}(B_{j}E_{k})-B_{j}\partial_{t}E_{k}-B_{k}\partial_{t}E_{j}) \\
 & =\epsilon_{0}\int d^{3}r\epsilon_{ijk}\partial_{t}(B_{j}E_{k}) \text{  (the latter two terms are simply two cross products in reverse order)} \\
\end{align}$$
所以最终得到：
$F_{i}=\epsilon_{0}\int da_{j}E_{j}E_{i} + \frac{1}{\mu_{0}}\int da_{j}B_{j}B_{i} - \frac{\epsilon_{0}}{2}\int da_{j}\delta_{ij}E^{2}- \frac{1}{2\mu_{0}}\int da_{j}\delta_{ij}B^{2}+ \epsilon_{0}\int d^{3}r \epsilon_{ijk}\partial_{t}(B_{j}E_{k})$

写成张量形式：$\vec{F}=\epsilon_{0}\int d\vec{a} \cdot (\vec{E}\vec{E})+ \frac{1}{\mu_{0}}\int d\vec{a} \cdot (\vec{B}\vec{B})- \frac{\epsilon_{0}}{2}\int d\vec{a} \cdot I E^{2}- \frac{1}{2\mu_{0}}\int d\vec{a}\cdot IB^{2}+\epsilon_{0}\int d^{3}r \frac{\partial}{\partial t}(\vec{B}\times \vec{E})$

现在右手边除了$\epsilon_{0}\int d^{3}r \frac{\partial}{\partial t}(\vec{B}\times \vec{E})$都是压力张量的面积分形式。我们作如下定义：

>[! Definition 1]
>Define Maxwell tensor $\overset{\leftrightarrow}{T}=\epsilon_{0}\vec{E}\vec{E}+ \frac{1}{\mu_{0}}\vec{B}\vec{B}- \frac{\epsilon_{0}}{2}IE^{2}- \frac{1}{2\mu_{0}}IB^{2}$


# EM momentum

那如何处理$\epsilon_{0}\int d^{3}r \frac{\partial}{\partial t}(\vec{B}\times \vec{E})$呢？

>[! Idea 4]
>一般推导新物理量时，等式一边已成想要的形式，外加一些不想要的项。一般把不想要的项移到等式另一边构成新物理量。

^f76f4c

顺带一提，电磁场拉氏量的推导也借用了idea 4。
于是：
$$\begin{align}
\vec{F}-\epsilon_{0}\int d^{3}r \frac{\partial}{\partial t}(\vec{B}\times \vec{E}) & =\int d\vec{a}\cdot \overset{\leftrightarrow}{T} \\
\frac{d}{dt}\vec{p}_{mech}+ \frac{d}{dt}\int d^{3}r\epsilon_{0}\vec{E}\times \vec{B} & =\int d\vec{a}\cdot \overset{\leftrightarrow}{T}
\end{align}$$


于是定义$\epsilon_{0}\vec{E}\times \vec{B}$为电磁动量密度，左手边就是动量的时间导数，符合牛顿第二定律。

>[! Definition 2]
>Define the electromagnetic momentum density $\vec{g}=\epsilon_{0}\vec{E}\times \vec{B}$

很自然地，我们有下面这个等式：
>[! Proposition 2]
>$\frac{d}{dt}(m\vec{v})+\frac{d}{dt}\left( \int d^{3}r\epsilon_{0}\vec{E}\times \vec{B} \right)=\oint \overset{\leftrightarrow}{T}\cdot d\vec{a}$
>
## Remark
这即是说，电磁场也是一个具有动量的动力学系统。它与带电粒子交换动量。当带电粒子在电磁场中运动时，粒子和场应该合起来被看做一个系统。这个系统的动量改变由Maxwell stress tensor描述。即Maxwell stress tensor不单单是带电粒子受到的电磁作用力而已。它还抽象地包括场受到的“电磁作用力”。