
# 束缚电荷

考虑一个本身不带电的物体。则$\rho = 0$ everywhere。 在外部电场的作用下，它的电荷分布发生了改变，这个微扰使得$\rho$不再处处是零。我们想知道这些微扰产生的$\rho$是产生了怎样的电场，进而进一步通过他们产生的电场反过来计算出微扰产生的电荷。

一个错误的想法：
我们将带电体放在原点。我们假设微扰产生了电荷分布$\rho$。则因为我们想计算这些$\rho$产生的电场，我们先计算标势然后微分：

$\begin{aligned} V(\vec{r})=\frac{1}{4 \pi \varepsilon_0} \int \frac{\rho d \tau}{\left|\vec{r}-\vec{r}^{\prime}\right|} & \approx \frac{1}{4 \pi \varepsilon_0} \int \frac{\rho d \tau}{r}+\left(-\vec{r}^{\prime}\right) \cdot \nabla \frac{\rho d \tau}{r} \\ & =\frac{1}{4 \pi \varepsilon_0} \int \frac{\rho d \tau}{r}+\vec{r}^{\prime} \cdot \frac{\hat{r} \rho d \tau}{r^2} \\ & =\frac{1}{4 \pi \varepsilon_0} \frac{Q}{r}+\frac{1}{4 \pi \varepsilon_0} \frac{\hat{r}}{r^2} \cdot \vec{p}\end{aligned}$
 这是错误的因为我们如果这样做，我们就是在假设带电体足够小。但显然这并不总是真的。我们应当研究的是任意带电体的产生的电场。

>[! Idea]
正确的思路不是对于整个带电体作偶极展开，因为可能太大了。正确的思路是对于每个小体元作偶极展开来用偶极近似它的外场。体元总是足够小的，满足偶极近似的条件。最后把所有小偶极产生的电场加起来。

这时候自然就不能假设带电体放在原点了，因为在原点处做小展开的近似失效了。我们假设小体元在$\vec{r}^{'}$。我们假设小体元带自由电荷$\rho d\tau$， 偶极$\vec{P} d\tau$ ,则这个小体元产生的势是整体电荷产生的势加上电荷分布微扰（偶极）产生的势（见[[多级展开#^bda914]]）：

$d V(\vec{r})=\frac{1}{4\pi \epsilon_{0}}  \frac{\rho d\tau}{|\vec{r} - \vec{r}^{'}|} + \frac{1}{4 \pi \varepsilon_0} \frac{\widehat{\left(\vec{r}-\vec{r}^{\prime}\right)} \cdot \vec{P} d \tau}{\left|\vec{r}-\vec{r}^{\prime}\right|^{2}} d \tau =  \frac{1}{4\pi \epsilon_0}  \frac{\rho d\tau}{R}+\frac{1}{4 \pi \varepsilon_0} \frac{\hat{R} \cdot \vec{P} d \tau}{R^{2}} d \tau$

于是：1）$V(\vec{r})=\frac{1}{4\pi \epsilon_0} \int \frac{\rho d\tau}{R}+\frac{1}{4 \pi \varepsilon_0} \int \frac{\hat{R} \cdot \vec{P} d \tau}{R^2}$

现在我们的目标是把1）右手边弄成大概是$V(\vec{r})=\frac{1}{4 \pi \varepsilon_0} \int \frac{\rho d \tau}{R}$ 的形式，以便通过比较得出产生这些偶极的电荷是什么。我们右手边第一项已经好了。于是想要将1）右手边第二项分母的$R^2$弄成$R$。 我们分部积分。现将integrand里面想积掉的东西写成导数：

$\begin{aligned}  \frac{1}{4 \pi \varepsilon_0} \int \frac{\hat{R} \cdot \vec{P} d \tau}{R^2}&=\frac{1}{4 \pi \varepsilon_0} \int \nabla^{\prime}\left(\frac{1}{R}\right) \cdot \vec{P} d \tau \\ & =\frac{1}{4 \pi \varepsilon_0} \int \nabla^{\prime} \cdot\left(\frac{\vec{P}}{R}\right) d \tau-\frac{1}{4 \pi \varepsilon_0} \int \frac{1}{R} \nabla^{\prime} \cdot \vec{P} d \tau \\ & =\frac{1}{4 \pi \varepsilon_0} \int \frac{\vec{P} \cdot d a}{R}+\frac{1}{4 \pi \varepsilon_0} \int \frac{-\nabla^{\prime} \cdot \vec{P}}{R} d \tau\end{aligned}$

定义电荷$\sigma_b = \vec{P}\cdot \hat{n}, \rho_b = -\nabla\cdot \vec{P}$  于是称这两个玩意为束缚电荷，$\rho$为自由电荷。

由此我们可以看出，自由电荷一定是在电中性基础上多出来的电荷，束缚电荷是即便是电中性也会由于极化产生的电荷。（在非可极化材料中，一旦使得材料极化的电场消失，那么束缚电荷就会消失。但是在可磁化材料中，即便这个电场消失，束缚电荷也继续存在。）自由电荷和束缚电荷都是真实的。

# 对$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$的改写

我们现在知道，对于任意一个带电体，在静磁场（$\nabla \times \vec{E}=-\frac{\partial \vec{B}}{\partial t}=0$）中有：$\vec{E} =\frac{1}{4\pi\epsilon_{0}}\int \frac{\rho \hat{R}}{R^2}d^3r^{'} +\frac{1}{4\pi\epsilon_{0}}\int \frac{-\nabla \cdot \vec{P}}{R^2}d^3r^{'}+\frac{1}{4\pi\epsilon_{0}}\int \frac{\vec{P}\cdot \vec{d}a}{R^2}$
我们将它改写成微分形式即:
$\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}-\frac{\nabla \cdot \vec{P}}{\epsilon_{0}}$ 
我们令$\rho_{f} =\rho$为自由电荷，而原方程$\nabla \cdot \vec{E}=\frac{\rho}{\epsilon_{0}}$中$\rho$为总电荷，于是我们比较:
$$\left. \begin{align}
\nabla \cdot \vec{E}  & =\frac{\rho_{f}}{\epsilon_{0}} + \frac{\rho_{b}}{\epsilon_{0}} \\
\nabla \cdot \vec{E} & =\frac{\rho}{\epsilon_{0}}
\end{align}\right\}$$
即可知道，电荷可以分为两类，即束缚电荷和自由电荷。写作$\rho=\rho_{f}+\rho_{b}$
>[! Proposition 1]
$\nabla \cdot \vec{E}=  \frac{1}{\epsilon_{0}}\rho=\frac{1}{\epsilon_{0}}(\rho_{f}+\rho_{b}) = \frac{1}{\epsilon_{0}}(\rho_{f}-\nabla \cdot \vec{P})$
# 对$\nabla \times \vec{B}=\mu_{0}\vec{J}+\mu_{0}\epsilon_{0}  \frac{\partial \vec{E}}{\partial t}$的改写

>[! Idea]
>由电荷引出相应电流，或者由电流引出相应电荷，需要用到流守恒。

我们直接将$\nabla\times \vec{B}=\mu_{0}\vec{J}+\mu_{0}\epsilon_{0}  \frac{\partial \vec{E}}{\partial t}$左右点乘一个$\nabla$即可得到流守恒 $\nabla \cdot \vec{J}=-  \frac{\partial \rho}{\partial t}$。因为$\rho$被我们分为了两种，我们可以将电流$\vec{J}$也分为两种。即：
$\nabla \cdot \vec{J}=-  \frac{\partial \rho_{f}}{\partial t} -  \frac{\partial \rho_{b}}{\partial t}$ 。定义$\nabla \cdot \vec{J_{f}}=-  \frac{\partial \rho_{f}}{\partial t},\nabla \cdot \vec{J_{p}}=-  \frac{\partial \rho_{b}}{\partial t}$ 分别为自由电流，电极化电流。但是这并不保证是否还有其他散度为零的量可以加到总电流$\vec{J}$中。

我们又由静电场($\frac{\partial \vec{E}}{\partial t} = 0$，无位移电流)中多级展开知道：$\vec{B}=  \frac{\mu_{0}}{4\pi}\int  \frac{\vec{J}\times \hat{R}}{R^2}d^3r^{'} +  \frac{\mu_{0}}{4\pi}\int  \frac{\nabla\times \vec{M}}{R^2}d^3r^{'} +  \frac{\mu_{0}}{4\pi}\int  \frac{\vec{M}\times d\vec{a}}{R^2}$ 
改写成微分形式即：
$\nabla\times\vec{B}=\mu_{0}\vec{J}+\mu_{0}\nabla\times \vec{M}$（这里没有$\frac{\partial \vec{E}}{\partial t}$是因为是静电场。非静电场已经在上一段处理过了。）
于是在上述两种电流之上，还应再添加一种电流$\vec{J_{m}}=\nabla\times \vec{M}$，即磁极化电流。我们发现磁极化电流显然不能造成电荷变化，因为$\nabla \cdot \vec{J_{m}} = 0$，散度为零，所以可以加到总电流$\vec{J}$中而不影响流守恒。

所以在静电情况下有三种电流$\vec{J} = \vec{J_{f}}+ \vec{J_{p}}+ \vec{J_{m}}$, 而在非静电情况下还应加上位移电流$\vec{J_{d}}$。注意此处我们所说的“总电流”$\vec{J}$不包含位移电流。这种定义是合理的因为位移电流只是在没有真实电流的情况下“补偿”真实电流，自然不应算在真实总电流当中。
>[! Proposition 2]
>$\nabla\times \vec{B}=\mu_{0}\left( \vec{J}+\epsilon_{0}  \frac{\partial \vec{E}}{\partial t} \right)=\mu_{0}(\vec{J_{f}}+\vec{J_{p}}+\vec{J_{m}}+\vec{J_{d}})=\mu_{0}\left( \vec{J_{f}}+  \frac{\partial \vec{P}}{\partial t}+ \nabla \times \vec{m} +\epsilon_{0}  \frac{\partial \vec{E}}{\partial t} \right)$

## Remark

1. 在自由电流，电极化电流，磁极化电流，位移电流四种电流中，只有位移电流不是由真实电荷运动引起的。特别注意，磁极化电流是由真实电荷引起的。即产生磁偶极矩的磁场产生一个涡旋电场，这个涡旋电场再驱动电荷运动。
2. 刚刚我们通过电偶极矩引出了电极化电流。我们不禁想问，其它的电流是否可以反过来引出其它的电荷。我们知道：自由电流对应自由电荷变化，电极化电流对应束缚电荷变化，位移电流对应负的总电荷（自由电荷$+$束缚电荷）变化。那么磁极化电流对应什么电荷变化？流守恒$\implies$$\nabla \cdot(\nabla \times \vec{M})=0= -\frac{\partial \rho}{\partial t}$不对应任何电荷变化。这也就是说，磁极化电流引起的“电荷流动”十分均匀，在任意一点任意一段时间，磁极化电流带入的电荷等于带出的电荷。


# 物质中的Maxwell方程

现在我们有：
$$\left\{\begin{align}
\nabla \cdot \vec{E}  & =  \frac{1}{\epsilon_{0}}(\rho_{f}-\nabla \cdot \vec{P})  \\
\nabla\times \vec{E} & =-  \frac{\partial \vec{B}}{\partial t}  \\
\nabla \cdot \vec{B} & =0 \\
\nabla\times \vec{B} & =\mu_{0}\left( \vec{J_{f}}+  \frac{\partial \vec{P}}{\partial t} +\nabla\times \vec{M}+\epsilon_{0}  \frac{\partial \vec{E}}{\partial t} \right)
\end{align}\right.$$
我们将第一式中的$\frac{1}{\epsilon_{0}}\nabla \cdot\vec{P}$吸收进左手边得到：$\nabla \cdot(\epsilon_{0}\vec{E}+\vec{P})=\rho_{f}$ $\Rightarrow$$\nabla \cdot \vec{D}=\rho_{f}$
我们将第四式中的$\mu_{0}\nabla\times \vec{M}$吸收进左手边得到：$\nabla\times\left(   \frac{1}{\mu_{0}}\vec{B}-\nabla\times \vec{M} \right)= \vec{J_{f}}+  \frac{\partial \vec{P}}{\partial t}+\epsilon_{0}  \frac{\partial \vec{E}}{\partial t}$ $\Rightarrow$$\nabla\times \vec{H}= \vec{J_{f}}+  \frac{\partial \vec{p}}{\partial t}+\epsilon_{0}  \frac{\partial \vec{E}}{\partial t}$ $\Rightarrow$$\nabla \times \vec{H}=\vec{J_{f}}+  \frac{\partial\vec{D}}{\partial t}$

>[!Proposition 3]
>$$\left\{ \begin{align}
  \nabla \cdot \vec{D} & =\rho_{f}  \\ \nabla\times \vec{E} & =-  \frac{\partial \vec{B}}{\partial t}  \\ \nabla \cdot \vec{B} & =0 \\\nabla\times \vec{H} & =\vec{J_{f}}+  \frac{\partial \vec{D}}{\partial t}
\end{align}\right.$$

## Remark
应知道，物质之中的Maxwell方程对于任意一种介质都成立。我们此处仅仅是在线性介质的情况下推导出了物质中的Maxwell方程。物质中的Maxwell方程本身是先验存在的。