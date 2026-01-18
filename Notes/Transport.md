# Table of contents
## 1. Phenomenological description

1.1 [[Transport#^5f818e|Local equilibrium]]
1.2 [[Transport#^d58cc9|Linear response]]
1.3 [[Transport#^2e7f01|Under magnetic field]]
1.4 [[Transport#^8ab9b9|Seebeck effect, Peltier effect]]
## 2. Semiclassical description

2.2 [[Transport#^1c8799|Fermi-Dirac meets Radon-Nikodym]]
2.3 [[Transport#^4ead2c|相空间结构]]
2.4 [[Transport#^e4631f|Thermoelectric coefficients]]
2.5 [[Transport#^7be923|Magnetoresistivity, Hall conductivity]]

# Phenomenological description
## 1.1 Local equilibrium

^5f818e

假设系统整体不处在热力学平衡。为了描述系统，我们作如下假设：
- 系统的每个体元由于体系小，relaxation time极短，都处于热力学平衡之中。
- 系统每个体元虽然很小，但仍然是宏观的热力学系统，符合统计力学规律。

对于任意一个体积，我们可以定义一系列流密度：

>[!Note] Definition 1
>Given a volume, 
>- define the heat flux density as $\vec{J}_{q}$ such that:
>$$\frac{\partial Q}{\partial t}= - \oint d\vec{A}\cdot \vec{J}_{q}$$
>- define the particle flux density as $\vec{J}_{n}$ such that:
>$$\frac{\partial N}{\partial t}=-\oint d\vec{A}\cdot \vec{J}_{n}$$
>- define the internal energy flux density as $\vec{J}_{u}$ such that:
>$$\frac{\partial U}{\partial t}=-\oint d\vec{A}\cdot \vec{J}_{u}$$
## Remark
以上定义，都是在假设体积内部没有$Q,N,U$的源。

显然，它们都有微分形式：
$$\begin{align}
 & \frac{\partial q}{\partial t}=-\nabla \cdot \vec{J}_{q} \\
 & \frac{\partial n}{\partial t}=- \nabla \cdot \vec{J}_{n} \\
 & \frac{\partial u}{\partial t}=- \nabla \cdot \vec{J}_{u}
\end{align}$$

对于熵，体积内部是可以有源的。即便是封闭体系，没有熵的流入，体系的熵还是可以增加。

我们可以将熵的变化进行细分：对于任何一个体元，我们必有：
$$\frac{Ds}{Dt}=-\nabla \cdot \vec{J}_{s}+ \frac{\partial s}{\partial t}=-\nabla \cdot \vec{J}_{s}+\Theta$$
其中$s$为熵的体积密度。$\Theta$为局部熵产生率。

我们从而可以将某点熵的变化归为两类。一种是从外界流入的，一种是该点内部产生的。对于有限体积，同样可以做类似定义：

>[!Note] Definition 2
>Given a volume,
>- define the entropy as:
>$$S=S_{i}+S_{e}$$
>- define the entropy flux density as:
>$$\frac{\partial S_{e}}{\partial t}=- \oint d\vec{A}\cdot \nabla \vec{J}_{s}$$
>- define the local entropy production rate as:
>$$\frac{\partial S_{i}}{\partial t}=\int d^{3}r\Theta$$

显然具有微分形式：
$$\frac{\partial s}{\partial t}= -\nabla \cdot \vec{J}_{s}+\Theta$$

>[!Note] Proposition 1
>$$\Theta\geq 0$$
## Proof.
由热力学第二定律，这是显然。
>[!Right]
>$\blacksquare$

在接下来的过程中，我们都将假设体积不被压缩，以至于$-pdV=0$。我们获得热力学第一定律的密度形式：

>[!Note] Proposition 2
>Assuming that the volumes cannot be compressed. Then:
>$$Tds=du-\sum_{i}\mu_{i}dn_{i}$$
## Proof.
由热力学第一定律，这是显然。
>[!Right]
>$\blacksquare$

广义地来讲，某点熵密度是各种热力学量的密度的函数。熵密度不能显含时间。这是因为若所有热力学量不变，单看熵对时间的偏导，熵不可能变化，因为熵是state quantity。我们写：
$$s=s(a_{1},\dots,a_{n})$$
于是，该点熵的时间导数为：
$$\begin{align}
\frac{\partial s}{\partial t } & =\sum_{i} \frac{\partial s}{\partial a_{i}} \frac{\partial a_{i}}{\partial t} \\
 & = \sum_{i} \frac{\partial s}{\partial a_{i}}(-\nabla \cdot \vec{J}_{i}) \\
 & = -\nabla \cdot\left(  \sum_{i} \frac{\partial s}{\partial a_{i}}\vec{J}_{i} \right)+ \sum_{i} \vec{J}_{i}\cdot \nabla\left( \frac{\partial s}{\partial a_{i}} \right)
\end{align}$$
比较发现：
$$\begin{align}
 & \vec{J}_{s}=\sum_{i} \frac{\partial s}{\partial a_{i}}\vec{J}_{i} \\
 & \Theta=\sum_{i}\vec{J}_{i}\cdot \nabla\left( \frac{\partial s}{\partial a_{i}} \right)
\end{align}$$
上述第一个表达式中，熵流密度其实还可以加上任意一个梯度为零的函数。我们只是选取了这个函数为零的规范。

可以定义热力学力：

>[!Note] Definition 3
>Given a local thermodynamic quantity $a_{i}$, define the thermodynamic force conjugate to $a_{i}$ as:
>$$\vec{X}_{i}= \nabla\left( \frac{\partial s}{\partial a_{i}} \right)$$

于是：

>[!Note] Proposition 3
>$$\Theta=\sum_{i}\vec{J}_{i}\cdot \vec{X}_{i}$$

现在研究只有热流与物质流的情况。

>[!Note] Proposition 4
>$$\vec{J}_{u}=\vec{J}_{q}+\mu\vec{J}_{n}$$
## Proof.
任取一点。对于该点有：
$$\begin{align}
 & du=dq+\mu dn \\
\implies & \frac{\partial u}{\partial t}=\frac{\partial q}{\partial t}+\mu \frac{\partial n}{\partial t} \\
\implies & \vec{J}_{u}=\vec{J}_{q}+\mu \vec{J}_{n}
\end{align}$$
>[!Right]
>$\blacksquare$


>[!Note] Postulate 1
>The Fourier law of heat conduction:
>$$\vec{J}_{q}=-\kappa \nabla T$$

## Ex:
$\kappa$总是大于零的。考虑一个系统，我们选内能和粒子数作为独立变量。若仅有内能流。则局域熵产生率为：
$$\Theta=\vec{J}_{u}\cdot \vec{X}_{u}$$
我们有：
$$\begin{align}
\vec{X}_{u}=\nabla\left(\left(\frac{\partial s}{\partial u}\right)_{n}\right)=\nabla\left( \frac{1}{T} \right)
\end{align}$$
所以：
$$\begin{align}
 & \Theta \geq 0
 \\ \implies & \vec{J}_{u}\cdot \nabla\left( \frac{1}{T} \right) =-\vec{J}_{u}\cdot \frac{1}{T^{2}}\nabla T\geq 0 \\
\implies & \kappa  \frac{|\nabla T |^{2}}{T^{2}}\geq 0 \\
\implies & \kappa\geq 0
\end{align}$$
## Ex:
选择内能和粒子数作为独立变量，我们还可以计算粒子流对应的热力学力：
$$\begin{align}
\vec{X}_{n} & = \nabla\left( \left(\frac{\partial s}{\partial n}\right)_{u} \right) \\
 & = \nabla\left( - \frac{\mu}{T} \right)
\end{align}$$

## Ex:
若选择粒子数和热作为独立变量，则相应地热力学力表达式会变化。

对于粒子流对应的热力学力，我们就需要计算$\nabla\left( \left( \frac{\partial s}{\partial n} \right)_{q} \right)$。但这是做不到的。所以我们通过下面另一种特殊方法来做。我们有：
$$\begin{align}
\Theta & =\vec{J}_{u}\cdot \vec{X}_{u}+\vec{J}_{n}\cdot \vec{X}_{n} \\
 & =(\vec{J}_{q}+\mu \vec{J}_{n})\cdot \nabla\left( \frac{1}{T} \right)+\vec{J}_{n}\cdot \nabla\left( - \frac{\mu}{T} \right) \\
 &= \vec{J}_{q}\cdot \nabla\left( \frac{1}{T} \right)+ \vec{J}_{n}\cdot \nabla\left( \frac{\mu}{T} \right)-\vec{J}_{n} \frac{1}{T}\cdot \nabla \mu+\vec{J}_{n}\cdot \nabla\left( - \frac{\mu}{T} \right) \\
 & = \vec{J}_{q}\cdot \nabla\left( \frac{1}{T} \right)- \vec{J}_{n}\cdot \frac{1}{T}\nabla \mu
\end{align}$$
所以热流对应的热力学力为$\nabla\left( \frac{1}{T} \right)$，粒子流对应的热力学力为$- \frac{1}{T}\nabla \mu$。

## 1.2 Linear response

^d58cc9

对于一个体元构成的热力学系统，我们可以选择一系列热力学量的体密度$a_{i}$来描述它。这些热力学量的体密度可以根据连续性方程引出对应流量：
$$\frac{\partial a_{i}}{\partial t}=-\nabla \cdot \vec{J}_{i}$$
将[[Transport#^8f38a3|proposition 1.4]]推广。我们发现，经验性地：
- 局部熵产生率一般可以写成流量的线性组合：
$$\Theta=\sum_{i}\vec{J}_{i}\cdot \vec{X}_{i}$$     我们将线性组合的系数$\vec{X}_{i}$定义为热力学力。
- 在系统平衡时，$\vec{X}  _{i}=0,\forall i$。

我们重新排布下标，将所有矢量都拆成其分量。例如$J_{i}$表示某个流量的某个分量。

一般来说，在平衡位置，所有热力学量密度没有变化。流量为零$J_{i}=0$。同时，我们经验性地知道，在平衡位置，热力学力$X_{i}=0$。稍稍偏离平衡位置，可以作展开：
$$\begin{align}
J_{i}= \sum_{j} \frac{\partial J_{i}}{\partial X_{j}}X_{j }+ \sum_{j,k} \frac{\partial^{2}J_{i}}{\partial X_{j}\partial X_{k}}X_{j}X_{k}+\dots
\end{align}$$
则在平衡位置附近，热力学力和流量呈线性关系：
$${J}_{i}=\sum_{j}  \frac{\partial J_{i}}{\partial X_{j}}X_{j}=  \sum_{j}L_{ij}X_{j}$$
存在如下定理：

>[!Note] Theorem 1 (Onsager's relation)
>$$L_{ij}(\vec{B})=L_{ji}(-\vec{B})$$

## Ex:

当存在两种流量，两种热力学力时，存在如下约束：
$$\Theta=\sum_{i}J_{i}X_{i}=\sum_{i,j}L_{ij}X_{i}X_{j}\geq 0$$
所以$(L_{ij})$为正定。这就要求特征方程根永远为非负。
$$\begin{vmatrix}
L_{11}-\lambda & L_{12} \\
L_{12} & L_{22}-\lambda 
\end{vmatrix}=0\implies \lambda^{2}-(L_{11}+L_{22})\lambda+L_{11}L_{22}-L_{12}^{2}=0$$
所以：
$$\begin{align}
 & L_{11}L_{22}-L_{12}^{2}\geq 0 \\
 & L_{11}+L_{22}>0
\end{align}$$
容易看出$L_{11}L_{22}$同号。所以等价于：
$$\begin{align}
 & L_{11}L_{22}-L_{12}^{2}\geq 0 \\
 & L_{11}>0
\end{align}$$
## 1.3 Under magnetic field

^2e7f01

为了给表示分量的下标流出位置，我们把$e,q$等下标移到右上方去。

选取热流和电流作为独立变量。在没有磁场时，我们有：
$$\begin{align}
 & \vec{J}^e=\sigma \vec{E}-\alpha \nabla T \\
 & \vec{J}^q=\beta \vec{E}-\kappa^{'}\nabla T
\end{align}\tag{*}$$
定义：

>[!Note] Definition 1
>Define:
>- Seebeck coefficient: $S=\frac{\vec{E}}{-\nabla T}$ when $\vec{J}^e=0$
>- Peltier coefficient: $\Pi=\frac{\vec{J}^q}{\vec{J}^e}$ when $\nabla T=0$

当存在磁场时，$(*)$中系数都进化成张量。可以定义：

>[!Note] Definition 2
>Define:
>- Nernst coefficient: $N=\frac{E_{y}}{(-\nabla_{x}T)}$
>- Ettingshausen coefficient: $\epsilon=\frac{\nabla_{y}T}{J^e_{x}}$

## 1.4 Seebeck effect, Peltier effect

^8ab9b9

在讨论Seebeck effect之前，我们先讨论电化学势。若粒子不带电，则粒子数变化引起的内能变化为$dU=\mu_{c} dN$。但如果粒子带电，则还需要额外引起$e\phi dN$的内能变化。所以热力学第一定律写为：
$$dU=TdS-pdV+\mu_{c}dN+e\phi dN$$
也就是说，化学势可以分为两部分：
$$\begin{align}
\mu=\frac{\partial U}{\partial N}=\mu_{c}+e\phi=\mu_{c}+\mu_{e}
\end{align}$$
也就是说，$e\phi$可以当做一个化学势$\mu_{e}$，称为电化学势。


考虑一块金属中存在热流与电子流。则我们有：
$$\begin{align}
 & \vec{J}_{}^q=L_{qq}\vec{X}_{q}+L_{qn}\vec{X}_{n} \\
 & \vec{J}_{}^n=L_{nq}\vec{X}_{q}+L_{nn}\vec{X}_{n}  
\end{align}$$
其中，我们在[[Transport#^8f38a3|proposition 1.4]]已经算过$\vec{X}_{q},\vec{X}_{n}$了。所以我们有：
$$\begin{align}
 & \vec{J}_{}^q=L_{qq}\nabla\left( \frac{1}{T} \right)+L_{qn}\left( -\frac{\nabla \mu}{T} \right) \\
 & \vec{J}_{}^n=L_{nq}\nabla\left( \frac{1}{T} \right)+L_{nn}\left( - \frac{\nabla \mu}{T} \right)
\end{align}\tag{*}$$

>[!Note] Proposition 1
>We can express everything in terms of kinematic coefficients:
>- $$S=\frac{L_{nq}}{eTL_{nn}}$$
>- $$\sigma=\frac{e^{2}L_{nn}}{T}$$
>- $$\kappa=\frac{L_{nn}L_{qq}-L_{nq}^{2}}{T^{2}L_{nn}}$$
## Proof.
$S$：

在$(*)$中令$\vec{J}_{n}=0$，容易得到Seebeck coefficient。

$\sigma$：

由$(*)$，在温度均匀情况下，我们有：
$$\vec{J}^e=\sigma \vec{E}$$
我们知道：
$$\begin{align}
\vec{E} & =-\nabla \phi \\
 & =-\nabla(e\mu_{e}) \\
 & = -e\nabla \mu 
\end{align}$$
这是因为温度均匀，$\nabla \mu_{c}=0$。然后：
$$\begin{align}
\vec{J} & =e\vec{J}_{}^n \\
 & = eL_{nn}\left( - \frac{\nabla \mu}{T} \right)
\end{align}$$
这同样是因为温度均匀，$\vec{X}_{q}=0$。那么：
$$\begin{align}
 \vec{J}^e & = \frac{e^{2}L_{nn}}{T}\vec{E}
\end{align}$$
$\kappa$：

在没有粒子流的情况下，我们有：
$$\vec{J}_{}^q=-\kappa \nabla T$$
另一方面，我们知道：
$$\vec{J}_{}^q=L_{qq}\nabla\left( \frac{1}{T} \right)+L_{qn}\vec{X}_{n}$$
令$\vec{J}_{}^n=L_{nq}\nabla\left( \frac{1}{T} \right)+L_{nn}\vec{X}_{n}=0$得到：
$$\begin{align}
\vec{J}_{}^q & =L_{qq}\nabla\left( \frac{1}{T} \right)- \frac{L_{nq}}{L_{nn}}\nabla\left( \frac{1}{T} \right) \\
 & = \frac{1}{T^{2}}  \frac{L_{nq}^{2}-L_{nn}L_{qq} }{L_{nn}}\nabla T
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>$$\vec{J}_{}^s=S\vec{J}^e- \frac{1}{T}\kappa \nabla T$$
## Proof.
我们现在有：
$$\begin{align}
 & S=\frac{L_{nq}}{eTL_{nn}} \\
 & \sigma= \frac{e^{2}L_{nn}}{T} \\
 & \kappa=\frac{L_{nn}L_{qq}-L_{nq}^{2}}{T^{2}L_{nn}}
\end{align}$$
容易解得：
$$\begin{align}
 & L_{nn}=\frac{\sigma T}{e^{2}} \\
 & L_{nq}=\frac{\sigma T^{2}S}{e} \\
 & L_{qq}=\kappa T^{2}+\sigma T^{3}S^{2}
\end{align}$$
所以：
$$\begin{align}
 & \vec{J}_{}^n=\frac{\sigma T}{e^{2}}\left( - \frac{\nabla \mu}{T} \right)+ \frac{\sigma T^{2}S}{e}\nabla\left( \frac{1}{T} \right) \\
 & \vec{J}_{}^q=(\kappa T^{2}+\sigma T^{3}S^{2})\nabla\left( \frac{1}{T} \right)+\frac{\sigma T^{2}S}{e}\left( - \frac{\nabla \mu}{T} \right)
\end{align}$$
消去$\nabla \mu$得到：
$$eTS\vec{J}_{}^n=\vec{J}_{}^q+\kappa \nabla T$$
代入$\vec{J}^e=e\vec{J}_{}^n,\vec{J}_{}^q=T\vec{J}_{}^s$得到：
$$\vec{J}^s=S\vec{J}^e- \frac{\kappa}{T}\nabla T$$
>[!Right]
>$\blacksquare$

>[!Note] Theorem 1 (Kelvin's relation)
>$$\Pi=ST$$
## Proof.
根据上一个proposition，令$\nabla T=0$，我们有：
$$\begin{align}
 & \vec{J}^s=S\vec{J}^e \\
 \implies & \frac{\vec{J}^q}{T}=S\vec{J}^e \\
\implies & \Pi=ST
\end{align}$$
>[!Right]
>$\blacksquare$

# 2. Semiclassical description

## 2.1 Fermi-Dirac meets Radon-Nikodym

^1c8799

我们知道，若系统处于平衡态，则有Fermi-Dirac distribution:
$$f^0(\vec{k})= \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{\vec{k}}}+1}$$
我们可以统计系统总粒子数得到：
$$\begin{align}
N & =2 \sum_{\vec{k}}f^0(\vec{k})
\end{align}$$
因为存在周期性边界条件：
$$k_{i} = \frac{2\pi n_{i}}{L_{i}}$$
所以可在热力学极限下将求和化为积分：
$$\sum_{\vec{k}}=\sum_{k_{1},k_{2},k_{3}}\Delta n_{1}\Delta n_{2}\Delta n_{3}=\frac{V}{(2\pi)^{3}}\sum_{k_{1},k_{2},k_{3}} \Delta k_{1}\Delta k_{2}\Delta k_{3} \leadsto \frac{V}{(2\pi)^{3}}\int d^{3}k$$
所以我们便有：
$$N=\frac{V}{4\pi^{3}}\int d^{3}kf^0(\vec{k})= \frac{1}{4\pi^{3}}\int d^{3}kd^{3}rf^0(\vec{k})$$
所以，$f^0(\vec{k})$可以看做粒子数测度在相空间上的Radon-Nikodym derivative。它告诉我们，给定相空间中体积$d^{3}kd^{3}r$，其中就有$\frac{1}{4\pi^{3}} d^{3}kd^{3}rf^0$那么多粒子。

更一般地将，若系统不处于平衡态，这个Radon-Nikodym derivative还有r-dependence。我们就记为$f_{\vec{k}}(\vec{r})$。

## 2.2 相空间结构

^4ead2c

首先粒子遵循半经典运动方程：
$$\begin{align}
 &   \dot{\vec{r}}= \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}} }{\partial \vec{k}} \\
 & \hbar   \dot{\vec{k}}= \vec{F}= - \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}}
\end{align}$$
令$f(\vec{r},\vec{k},t)$为任意分布函数，首先可以证明continuity equation：

>[!Note] Proposition 1 (continuity equation)
>$$\frac{\partial f}{\partial t}= - \frac{\partial}{\partial \vec{r}}\cdot (\dot{\vec{r}}f)-  \frac{\partial}{\partial \vec{k}}\cdot (\dot{\vec{k}}f)+ \left(\frac{\partial f}{\partial t}\right)_{\text{prod}}$$

^02e261

## Remark
其中，$\frac{\partial f}{\partial t}$表示空间某一点，由于物质流入加物质净产生造成的变化。$\left( \frac{\partial f}{\partial t} \right)_{\text{prod}}$表示空间某一点，由于物质净产生造成的变化。在数学上，$\frac{\partial f}{\partial t}$是固定$\vec{r},\vec{k}$，求时间的explicit偏导。而$\left( \frac{\partial f}{\partial t} \right)_{\text{prod}}$在数学上不能由$f(\vec{r},\vec{k},t)$直接得到，所以写成偏导符号有误导性。
## Proof.
$$\begin{align}
 & \int d^{3}r d^{3}k \frac{\partial f}{\partial t}= \int d\vec{S}\cdot(\dot{\vec{r}}f+  \dot{\vec{k}}f)+ \int d^{3}r d^{3}k \left( \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
\implies & \frac{\partial f}{\partial t}= -\nabla \cdot(  \dot{\vec{r}}f+  \dot{\vec{k}}f)+\left(  \frac{\partial f}{\partial t} \right)_{\text{prod}}
\end{align}$$
>[!Right]
>$\blacksquare$
## Remark
注意，我们写6-散度$\nabla \cdot$时，我们在假设相空间是六维，三个$\vec{r}$的基矢和三个$\vec{k}$基矢是正交的。

然后可以证到相空间速度无散：

>[!Note] Proposition 2
>$$ \frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}})+ \frac{\partial}{\partial \vec{k}}\cdot(\dot{\vec{k}})=0$$

^a49010

## Proof.
$$\begin{align}
\frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}})+ \frac{\partial}{\partial \vec{k}}\cdot(\dot{\vec{k}}) & =  \frac{1}{\hbar} \frac{\partial}{\partial \vec{r}}\cdot \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}- \frac{1}{\hbar} \frac{\partial}{\partial \vec{k}}\cdot \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}} \\
 & = \frac{1}{\hbar} \frac{\partial^{2}\epsilon_{\vec{k}}}{\partial r_{i}\partial k_{i}}- \frac{1}{\hbar} \frac{\partial^{2}\epsilon_{\vec{k}}}{\partial k_{i}\partial r_{i}} \\
 & =0
\end{align}$$
>[!Right]
>$\blacksquare$
## Remark
在这里，我们假设$\vec{r}$基矢和$\vec{k}$基矢都是$e_{1},e_{2},e_{3}$。这是在物理空间中的操作，并非是在相空间的操作。不需要认为$\vec{r},\vec{k}$基矢都是垂直的。


我可以证明Liouville定理：

>[!Note] Proposition 3 (Liouville's theorem)
>Let $f(\vec{r},\vec{k},t)$ be the distribution function of the number of particles. Then:
>$$\frac{Df}{Dt}=\left( \frac{\partial f}{\partial t} \right)_{\text{prod}}\text{ along a trajectory}$$
## Proof.
一方面我们有：
$$\begin{align}
  \frac{Df}{Dt} & = \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}+  \dot{\vec{r}}\cdot \frac{\partial f}{\partial \vec{r}}+ \frac{\partial f}{\partial t}\\
 & = -\frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}}\cdot \frac{\partial f}{\partial \vec{k}}+ \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}\cdot \frac{\partial f}{\partial r}- \nabla \cdot (\dot{\vec{r}}f+  \dot{\vec{k}}f) +\left( \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
 & = - \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}}\cdot \frac{\partial f}{\partial \vec{k}}+ \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}} }{\partial \vec{k} }\cdot \frac{\partial f}{\partial \vec{r}}- \frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}})f-  \dot{\vec{r}}\cdot \frac{\partial}{\partial \vec{r}} f - \frac{\partial}{\partial \vec{k}}\cdot(\dot{ \vec{k}})f-  \dot{\vec{k}}\cdot \frac{\partial}{\partial \vec{k}} f+\left(  \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
 & = - \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}}\cdot \frac{\partial f}{\partial \vec{k}}+ \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}\cdot \frac{\partial f}{\partial \vec{r}}- \frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}})f - \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}\cdot \frac{\partial f}{\partial \vec{r}}- \frac{\partial}{\partial \vec{k}}\cdot(\dot{\vec{k}})f+ \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{r}} \cdot \frac{\partial f}{\partial \vec{k}}+\left(  \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
 & = - \frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}})f- \frac{\partial}{\partial \vec{k}}\cdot(\dot{\vec{k}})f+\left( \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
 & = \left( \frac{\partial f}{\partial t} \right)_{\text{prod}}
\end{align}$$
>[!Right]
>$\blacksquare$

我们还可以结合[[Transport#^02e261|proposition 6.1.1]]，[[Transport#^a49010|proposition 6.1.2]]得到Boltzmann输运方程：

>[!Note] Proposition 4 (Boltzmann transport equation)
>$$\frac{\partial f}{\partial t}+\dot{\vec{r}}\cdot \frac{\partial f}{\partial \vec{r}}+  \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}=\left( \frac{\partial f}{\partial t} \right)_{\text{prod}}=\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}+ s(\vec{r},\vec{k},t)$$
>where $\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}$ is the net production of electrons by scattering. $s(\vec{r},\vec{k},t)$ is the net production of electrons by recombination.
## Remark

$\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}$是由于能带中粒子撞到东西，导致$\vec{k}$突变而被撞进局部体元的。粒子通过k-流自然流入体元的算作$\dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}$。这两个发生在同一条能带中。而$s$描述的是电子和空穴结合，比如电子从其他能带进来这个能带，导致电子真正产生或者消灭。

## Proof.
$$\begin{align}
  &  \frac{\partial f}{\partial t}= - \frac{\partial}{\partial \vec{r}}\cdot(\dot{\vec{r}}f)- \frac{\partial}{\partial \vec{k}}\cdot(\dot{\vec{k}}f )+\left( \frac{\partial f}{\partial t} \right)_{\text{prod}} \\
\implies & \frac{\partial f}{\partial t}=- \dot{\vec{r}}\cdot \frac{\partial f}{\partial \vec{r}}- \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}+\left( \frac{\partial f}{\partial t} \right)_{\text{prod}}
\end{align}$$
这是因为相空间6-速度无散。接下来移项即可。
>[!Right]
>$\blacksquare$
## 2.3 Relaxation time approximation

我们希望得到$\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}$。我们假设：
- 粒子平均每$\tau$时间碰撞一次。
- 粒子碰撞后恢复局域温度下的Fermi-Dirac distribution。

所以考虑$t\sim t+dt$，在相空间体元$d^{3}r d^{3}k$内由于碰撞引起的粒子数变化：
$$\begin{align}
 & \frac{d^{3}r d^{3}k}{4\pi^{3}} f\left( 1- \frac{dt}{\tau} \right)\leadsto \frac{d^{3}r d^{3}k}{4\pi^{3}}f\left( 1- \frac{dt}{\tau} \right) \\
 &  \frac{d^{3}r d^{3}k}{4\pi^{3}}f \frac{dt}{\tau}\leadsto \frac{d^{3}r d^{3}k}{4\pi^{3}}f^0 \frac{dt}{\tau}
\end{align}$$
这即是说，体元内粒子数为$\frac{d^{3}r d^{3}k}{4\pi^{3}}f$。其中，有$\left( 1-\frac{dt}{\tau} \right)$的比例不发生变化。有$\frac{dt}{\tau}$的比例发生碰撞，恢复Fermi-Dirac分布。所以由碰撞引起的总变化为：
$$\begin{align}
\frac{d^{3}r d^{3}k}{4\pi^{3}} (df)_{\text{coll}} & = \frac{d^{3}r d^{3}k}{4\pi^{3}}f\left( 1- \frac{dt}{\tau} \right)- \frac{d^{3} r d^{3}k}{4\pi^{3}}f\left( 1- \frac{dt}{\tau} \right)+ \frac{d^{3}r d^{3}k}{4\pi^{3}}f^0 \frac{dt}{\tau}- \frac{d^{3}r d^{3}k}{4\pi^{3}}f \frac{dt}{\tau} \\
 & = \frac{d^{3}r d^{3}k}{4\pi^{3} } (f^0-f) \frac{dt}{\tau}
\end{align}$$
于是：
$$\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}= \frac{f^0-f}{\tau}$$
>[!Note] Postulate 1 (relaxation time approximation)
>$$\left( \frac{\partial f}{\partial t} \right)_{\text{coll}}= \frac{f^0-f}{\tau}$$


## 2.4 Thermoelectric coefficients

^e4631f

不考虑电子在不同能带中跳跃的情况。那么不会发生recombination，即$s=0$。

现在我们得到了relaxation time approximation下的Boltzmann transport equation：
$$\frac{\partial f}{\partial t}+\dot{\vec{r}}\cdot \frac{\partial f}{\partial \vec{r}}+  \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}= \frac{f^0-f}{\tau}$$
我们假设输运已经达到稳态。那么有:
$$\frac{\partial f}{\partial t}=0$$
我们假设，$f$仅仅偏离$f^0$一点点，以至于：
$$\frac{\partial f}{\partial \vec{r}}\approx \frac{\partial f^0}{\partial \vec{r}}, \frac{\partial f}{\partial \vec{k}}\approx \frac{\partial f^0}{\partial \vec{k}}$$
那么我们有：
$$\begin{align}
 &  \dot{\vec{r}}\cdot \frac{\partial f^0}{\partial \vec{r}}+ \dot{\vec{k}}\cdot \frac{\partial f^0}{\partial \vec{k}}= \frac{f^0-f}{\tau} \\
\end{align}$$
我们回忆：
$$f^0(\vec{k})= \frac{1}{e^{\beta(\epsilon_{\vec{k}}-\mu)}+1}$$
则$r-\text{dependence}$只能来源于$T$。由Sommerfeld expansion，fermion在低温下$\mu$偏离$\epsilon_{F}$很小，所以为常量。唯一的$k-\text{dependence}$来源于$\epsilon_{\vec{k}}$。于是：
$$\begin{align}
 & \dot{\vec{r}}\cdot \frac{\partial f^0}{\partial T}\nabla T+ \dot{\vec{k}}\cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}= \frac{f^0-f}{\tau} \\
\implies & \vec{v}\cdot \frac{\partial f^0}{\partial T}\nabla T+ \vec{F} \cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}=\frac{f^0-f}{\tau}
\end{align}$$
现在考虑外场为电场，则$\vec{F}=e\vec{E}$。


>[!Note] Proposition 3
>The current density is given by:
>$$\vec{J}^e=  \frac{1}{4\pi^{3}} \int_{\text{FBZ}} d^{3}k\left(f^0e\vec{v}_{{}}-e \tau\vec{v}_{{}}\vec{v}_{{}}\cdot\left( \frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E} \right)\right)$$
## Proof.

考虑某能带$\epsilon_{\vec{k}}$的电流密度：
$$\vec{J}^e(\vec{r})= \frac{1}{4\pi^{3}}\int_{\text{FBZ}} d^{3}k f(\vec{k},\vec{r}) \vec{v}e$$
考虑Boltzmann输运方程：
$$\vec{v}\cdot \frac{\partial f^0}{\partial T}\nabla T+ e\vec{E} \cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}=\frac{f^0-f}{\tau}$$
把$f$解出来代入即可。

>[!Right]
>$\blacksquare$

>[!Note] Corollary 1
>$$\sigma=- \frac{1}{4\pi^{3}} e^{2}\int_{\text{FBZ}} d^{3}k\tau \vec{v}_{{}}\vec{v}_{{}} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$
>$$\alpha=  \frac{1}{4\pi^{3}}e\int_{\text{FBZ}} d^{3}k\tau \vec{v}_{{}}\vec{v}_{{}} \frac{\partial f^0}{\partial T}=-\frac{1}{4\pi^{3}}\int_{}d^{3}k \tau \vec{v} \vec{v} \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\partial \epsilon_{\vec{k}}}$$
>where $\sigma,\alpha$ are defined by $\vec{J}^e=\sigma \vec{E}-\alpha \nabla T$

## Proof.
我们有：
$$\vec{J}^e=  \frac{1}{4\pi^{3}} \int d^{3}k\left(f^0e\vec{v}_{{}}-e \tau\vec{v}_{{}}\vec{v}_{{}}\cdot\left( \frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E} \right)\right)$$
一般情况下，$\epsilon_{\vec{k}}$是$\vec{k}$的偶函数。即：
$$\epsilon_{\vec{k}}=\epsilon_{-\vec{k}}$$
所以$f^0$也是$\vec{k}$的偶函数。所以$\vec{v}_{\vec{k}}= \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}$是$\vec{k}$的奇函数。所以：
$$\int_{FBZ} d^{3}kf^0e\vec{v}_{}=0$$
接下来匹配系数即可。

$\alpha$的两种表达方式只需要知道$\frac{\partial f^0}{\partial T}=- \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\epsilon_{\vec{k}}}$即可。这个可以暴力计算证明
>[!Right]
>$\blacksquare$

>[!Note] Proposition 4
>The heat flux density is given by:
>$$\vec{J}^q= \frac{1}{4\pi^{3}}\int d^{3}k (\epsilon_{\vec{k}}-\mu)\tau \vec{v}_{}\vec{v}_{{}}\cdot\left( \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E} \right)$$
## Proof.
回忆起：
$$\vec{J}^q=\vec{J}^u-\mu \vec{J}^n$$
我们有：
$$\begin{align}
\vec{J}^u & = \frac{1}{4\pi^{3}} \int d^{3}k \epsilon_{\vec{k}}f_{\vec{k}}\vec{v}_{} \\
 & = \frac{1}{4\pi^{3}}\int d^{3}k\epsilon_{\vec{k}}\vec{v}_{}\left(f^0-\tau \vec{v}_{}\cdot\left(  \frac{\partial f^0}{\partial T} \nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)\right) \\
 & = \frac{1}{4\pi^{3}} \int d^{3}k\left(-\tau\epsilon_{\vec{k}}\vec{v}_{}\vec{v}_{}\cdot\left(\frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)\right)
\end{align}$$
这同样是因为$\epsilon_{\vec{k}}$的对称性，导致$\int_{FBZ} d^{3}k\epsilon_{\vec{k}}\vec{v}_{\vec{k}}f^0=0$。

类似地：
$$\begin{align}
\vec{J}^n & = \frac{1}{4\pi^{3}}\int d^{3}k f_{\vec{k}}\vec{v}_{} \\
 & = \frac{1}{4\pi^{3}}\int d^{3}k\vec{v}_{}\left(f^0-\tau \vec{v}_{}\cdot\left(  \frac{\partial f^0}{\partial T} \nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)\right) \\
 & = \frac{1}{4\pi^{3}} \int d^{3}k\left(-\tau\vec{v}_{}\vec{v}_{}\cdot\left(\frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)\right)
\end{align}$$
容易通过直接计算证到：
$$\frac{\partial f^0}{\partial T}=- \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\epsilon_{\vec{k}}}$$
那么将上述所有表达式代入计算即可。
>[!Right]
>$\blacksquare$

>[!Note] Corollary 2
>$$\kappa=-\int d^{3}k\tau \vec{v}_{}\vec{v}_{} \frac{(\epsilon_{\vec{k}}-\mu)^{2}}{T} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$
>where $\kappa$ is defined as: $\vec{J}^q=-\kappa \nabla T\text{ when }\vec{E}=0$
## Proof.
显然。
>[!Right]
>$\blacksquare$

>[!Note] Proposition 5
>Under the parabolic band approximation that $\epsilon_{\vec{k}}=E_{c}+ \frac{\hbar^{2}k^{2}}{2m^{*}}$, we have that:
>$$\int_{\text{FBZ}} d^{3}k \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\vec{v}= \int_{\text{FBZ}}d^{3}k \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}v^{2} \mathbb{1}$$
## Proof.
先看integrand：
$$\frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\vec{v}= \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}v_{i}v_{j}e_{i}e_{j}= \left( \frac{\hbar^{2}}{m^{*}} \right)^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}k_{i}k_{j}e_{i}e_{j}$$
积分中我们只需要考虑Fermi surface附近的项就行了。因为如果不在Fermi surface附近，低温下我们必有：
$$\frac{\partial f^0}{\partial\epsilon_{\vec{k}}}=0$$
而Fermi surface又是球形的。在Fermi surface附近，$\frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$显然为一定值。而对于每个Fermi surface附近的点$k_{i}k_{j}$，都一定存在另一个Fermi surface附近的点$-k_{i}k_{j}$，来和它抵消。
![[Drawing 2025-12-06 20.20.40.excalidraw|center|300]]
例如图中八点$(k_{1},k_{2},k_{3}),(-k_{1},k_{2},k_{3}),(k_{1},-k_{2},k_{3}),(k_{1},k_{2},-k_{3}),(-k_{1},-k_{2},k_{3}),(-k_{1},k_{2},-k_{3}),(k_{1},-k_{2},-k_{3}),(-k_{1},-k_{2},-k_{3})$
它们每个点的坐标两两相乘，全部加起来交叉项都会抵消。即：
$$\sum_{n=1}^8\sum_{i,j=1}^3 k_{ni}k_{nj}e_{i}e_{j}=\sum_{n}\sum_{i}k_{ni}^{2}e_{i}e_{i}=\sum_{n}k_{n}^{2}\mathbb{1}$$
其中$n$是点的index，$ni,nj$是第$n$个点的第$i,j$分量的index。所以在积分中，我只需要求对角项的积分就可以了。即：
$$\int_{\text{FBZ}} d^{3}k \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\vec{v}= \int_{\text{FBZ}}d^{3}k \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}v^{2} \mathbb{1}$$
>[!Right]
>$\blacksquare$

所以在这种情况下，上面的量可以全部改写为标量。

>[!Note] Proposition 6
>Under parabolic band approximation, we have:
>$$\sigma=- \frac{1}{4\pi^{3}} e^{2}\int_{\text{FBZ}} d^{3}k\tau v^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$
>$$\alpha=  \frac{1}{4\pi^{3}}e\int_{\text{FBZ}} d^{3}k\tau v^{2} \frac{\mu-\epsilon_{\vec{k}}}{T} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$
>$$\kappa=-\int d^{3}k\tau v^{2} \frac{(\epsilon_{\vec{k}}-\mu)^{2}}{T} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$

## Ex:

我们计算粒子流：
$$\begin{align}
\vec{J}^n & = \frac{1}{4\pi^{3}}\tau\int d^{3}k \vec{v}\vec{v}\cdot \frac{\nabla T}{T}(\epsilon_{\vec{k}}-\mu) \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}
\end{align}$$
WLOG令$\nabla T \parallel x$，那么：
$$\begin{align}
J^n_{x} & = \frac{1}{4\pi^{3}} \tau\int d^{3}k v_{x}^{2} \frac{\nabla T}{T}(\epsilon_{\vec{k}}-\mu) \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}
\end{align}\tag{*}$$
在低温下，Fermi-Dirac分布不是完全sharp。这种不sharp可以理解为valence band中一些电子被kick到conduction band，在valence band留下holes。所以对于电子，$J^n_{x}$反平行于$\nabla T$。

对于空穴，我们先计算价带电子粒子流。还是用$(*)$。所以$J^n_{x}$平行于$\nabla T$。然而空穴粒子流等于负电子粒子流，所以空穴粒子流$J^n_{x,h}$反平行于$\nabla T$。计算电流时，应当两种载流子的电流加起来。因为导带和价带中电子的流动都是真实的电荷移动。

## 2.5 Magnetoresistivity, Hall conductivity

^7be923

定义：

>[!Note] Definition 1
>Set $g(\vec{r},\vec{k}):=f(\vec{r},\vec{k})-f^0(\vec{k})$

那么：

>[!Note] Proposition 1
>If both $\vec{E},\vec{B}$ are present, $\nabla T=0$, then under relaxation approximation, I have:
>$$ \frac{\partial f}{\partial t}+ e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \vec{E}+ \frac{g}{\tau}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial g}{\partial \vec{k}}=0$$
## Proof.
首先我们有：
$$\frac{\partial f}{\partial t}+\vec{v}\cdot \frac{\partial f}{\partial \vec{r}}+ \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}= \frac{f^0-f}{\tau}$$
假设小偏离，那么：
$$\frac{\partial f}{\partial t}+\vec{v}\cdot \frac{\partial f^0}{\partial \vec{r}}+ \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}= -\frac{g}{\tau}$$
我们暂不假设$\frac{\partial f}{\partial \vec{k}}$的小偏离。

因为$\nabla T=0$，而所有的$r-\text{dependence}$来源于$T$，所以：
$$\begin{align}
 & \frac{\partial f}{\partial t}+  \dot{\vec{k}}\cdot \frac{\partial f}{\partial \vec{k}}= -\frac{g}{\tau} \\
\implies &  \frac{\partial f}{\partial t}+ \frac{1}{\hbar}(e\vec{E}+e\vec{v}\times \vec{B})\cdot \frac{\partial f}{\partial \vec{k} }+ \frac{g}{\tau}=0 \\
\implies &  \frac{\partial f}{\partial t}+ \frac{1}{\hbar}e\vec{E}\cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial f}{\partial \vec{k}}+ \frac{g}{\tau}=0 \\
\implies &  \frac{\partial f}{\partial t}+ e \frac{\partial f^0}{\partial\epsilon_{\vec{k}} }\vec{v}\cdot \vec{E}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot\left( \frac{\partial f^0}{\partial \vec{k}}+ \frac{\partial g}{\partial \vec{k}} \right)+ \frac{g}{\tau}=0 \\
\implies & \frac{\partial f}{\partial t}+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \vec{E}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot\left(  \frac{1}{\hbar}\vec{v} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}+ \frac{\partial g}{\partial \vec{k}} \right)+ \frac{g}{\tau}=0 \\
\implies & \frac{\partial f}{\partial t}+ e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \vec{E}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial g}{\partial \vec{k}}+ \frac{g}{\tau}=0
\end{align}$$
其中第二行到第三行，对于$\vec{E}$那一项我们假设了小偏离。
>[!Right]
>$\blacksquare$

>[!Note] Definition 2
>Define electron mobility $\overset{\leftrightarrow}{\mu_{}}_{n}:= \frac{|e|\tau}{\hbar} \frac{\partial \vec{v}}{\partial \vec{k}}$

>[!Note] Proposition 2
>$$\overset{\leftrightarrow}{\mu}_{n}= \frac{|e|\tau}{\overset{\leftrightarrow}{m}^{*}} $$
## Proof.
$$\begin{align}
\overset{\leftrightarrow}{\mu}_{n} & =\frac{|e|\tau}{\hbar} \frac{\partial}{\partial \vec{k}}\left( \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}} \right) \\
 & = |e|\tau \frac{1}{\hbar^{2}} \frac{\partial^{2}\epsilon_{\vec{k}}}{\partial \vec{k}\partial \vec{k}} \\
  & = |e|\tau \frac{1}{\overset{\leftrightarrow}{m}^{*}}
\end{align}$$
>[!Right]
>$\blacksquare$

在大多数情况下，可以假设有效质量的逆是一个标量。这样一来，mobility就是一个scalar。记为$\mu_{n}$

那么：

>[!Note] Proposition 3
>Assume that mobility is a scalar. Then when $\frac{\partial f}{\partial t}=0$:
>$$g= \vec{v}\cdot\left( -\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}+\mu_{n} \vec{B}\times \frac{\partial}{\partial \vec{v}}g \right)$$

^ddce4d

## Proof.

令$\frac{\partial f}{\partial t}=0$，稳态输运，我们有：
$$ \begin{align}
 & e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \vec{E}+ \frac{g}{\tau}+ \frac{e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial g}{\partial \vec{k}}=0 \\
\implies & g= -\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}} }\vec{v}\cdot \vec{E}- \frac{\tau e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial}{\partial \vec{k}}g
\end{align}$$
容易算得：
$$\begin{align}
 \frac{\tau e}{\hbar} (\vec{v}\times \vec{B})\cdot \frac{\partial}{\partial \vec{k}} & =  \frac{\tau e}{\hbar} (\vec{v}\times \vec{B})\cdot e_{j} \frac{\partial}{\partial k_{j}} \\
 & =  \frac{\tau e}{\hbar} (\vec{v}\times \vec{B})\cdot e_{j} \frac{\partial v_{i}}{\partial k_{j}} \frac{\partial}{\partial v_{i}} \\
 & = \frac{\tau e}{\hbar} (\vec{v}\times \vec{B})\cdot\left( e_{j}e_{i} \frac{\partial v_{i}}{\partial k_{j}}\cdot e_{k} \frac{\partial}{\partial v_{k}} \right) \\
 & = -(\vec{v}\times \vec{B})\cdot\left( \overset{\leftrightarrow}{\mu}_{n} \cdot \frac{\partial}{\partial \vec{v}} \right)
\end{align}$$
假设mobility是scalar，那么：
$$\begin{align}
\frac{\tau e}{\hbar}(\vec{v}\times \vec{B})\cdot \frac{\partial}{\partial \vec{k}} & = -(\vec{v}\times \vec{B})\cdot\left( \mu_{n}e_{i}e_{i} \cdot \frac{\partial}{\partial \vec{v}} \right) \\
 & =- (\vec{v}\times \vec{B})\cdot\left( \mu_{n}e_{i} \frac{\partial}{\partial v_{i}} \right) \\
 & = -(\vec{v}\times \vec{B})\cdot \mu_{n} \frac{\partial}{\partial \vec{v}} \\
 & = -\mu_{n}\vec{v}\cdot\left( \vec{B}\times \frac{\partial}{\partial \vec{v}} \right)
\end{align}$$
所以我们有：
$$g=\vec{v}\cdot\left( -\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}+\mu_{n}\vec{B}\times \frac{\partial}{\partial \vec{v}}g \right)$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 4
>A solution to the equation in proposition 7.2.2 is:
>$$g=-\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \frac{\vec{E}+\mu_{n}\vec{B}\times \vec{E}+\mu_{n}^{2}\vec{B}\vec{B}\cdot \vec{E}}{1+\mu_{n}^{2}B^{2}}$$
## Proof.

我们尝试解这个方程。首先解$\vec{B}=0$的情况。我们有：
$$g=\vec{v}\cdot\left( -\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E} \right)$$
这本身就是一个解了。令：
$$\vec{G}_{0}=-\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}$$
则解可以写为：
$$g=\vec{v}\cdot \vec{G}_{0}$$
现在如果有磁场$\vec{B}$，我们仍然猜：
$$g=\vec{v}\cdot \vec{G}$$
代入方程得到：
$$\begin{align}
 & \vec{v}\cdot \vec{G}=\vec{v}\cdot\left( \vec{G}_{0}+ \mu_{n}\vec{B}\times \frac{\partial}{\partial \vec{v}} (\vec{v}\cdot \vec{G})\right) \\
\implies & \vec{v}\cdot \vec{G}= \vec{v}\cdot(\vec{G}_{0}+ \mu_{n}\vec{B}\times \vec{G})
\end{align}$$
所以it suffices to let：
$$\vec{G}=\vec{G}_{0}+\mu_{n}\vec{B}\times \vec{G}\tag{*}$$
现在只需要解出$\vec{G}$。考虑：
$$\begin{align}
 & \mu_{n}\vec{B}\times \vec{G}=\mu_{n}\vec{B}\times \vec{G}_{0}  +\mu_{n}\vec{B}\times(\mu_{n}\vec{B}\times \vec{G}) \\
\implies & \vec{G}-\vec{G}_{0} =\mu_{n}\vec{B}\times \vec{G}_{0}+\mu_{n}\vec{B}\times(\mu_{n}\vec{B}\times \vec{G}) \\
\implies & \vec{G}-\vec{G}_{0}=\mu_{n}\vec{B}\times \vec{G}_{0}+\mu_{n}^{2}\vec{B}(\vec{B}\cdot \vec{G})-\mu_{n}^{2}B^{2}\vec{G} \\
\implies & \vec{G}= \frac{\mu_{n}\vec{B}\times \vec{G}_{0}+\mu_{n^{}}^{2}\vec{B}(\vec{B}\cdot \vec{G})+\vec{G}_{0}}{\mu_{n}^{2}B^{2}+1}
\end{align}$$
注意到由于$(*)$，我们有：
$$\vec{B}\cdot \vec{G}=\vec{B}\cdot \vec{G}_{0}$$
所以：
$$\vec{G}=\frac{\vec{G}_{0}+\mu_{n}\vec{B}\times \vec{G}_{0}+\mu_{n}^{2}\vec{B}(\vec{B}\cdot \vec{G}_{0})}{1+\mu_{n}^{2}B^{2}}$$
所以：
$$g=-\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \frac{\vec{E}+\mu_{n}\vec{B}\times \vec{E}+\mu_{n}^{2}\vec{B}\vec{B}\cdot \vec{E}}{1+\mu_{n}^{2}B^{2}}$$
>[!Right]
>$\blacksquare$
## Ex:
假设$\vec{E}\perp \vec{B}$，则：
$$g=-\tau e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot \frac{\vec{E}+\mu_{n}\vec{B}\times \vec{E}}{1+\mu_{n}^{2}B^{2}}$$
则电流密度可以写为：
$$\begin{align}
\vec{J}^e & = \frac{1}{4\pi^{3}}\int_{\text{FBZ}} d^{3}k(f^0+g)e\vec{v} \\
 & = \frac{1}{4\pi^{3}}\int d^{3}kge\vec{v} \\
 & = \frac{1}{4\pi^{3}}\int d^{3}k  \frac{ -\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\vec{v} }{1+\mu_{n}^{2}B^{2}}\cdot \vec{E}+ \frac{1}{4\pi^{3}}\int d^{3}k \frac{-\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\mu_{n}\vec{v}\vec{v}}{1+\mu_{n}^{2}B^{2} }\cdot (\vec{B}\times \vec{E})
\end{align}$$
回忆起，我们推导的时候已经用了parabolic band approximation。那么现在：
$$\begin{align}
\vec{J}^e= \frac{1}{4\pi^{3}}\int d^{3}k \frac{-\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}v^{2}}{1+\mu_{n}^{2}B^{2}}\vec{E}+ \frac{1}{4\pi^{3} }\int d^{3}k \frac{-\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\mu_{n}v^{2}}{1+\mu_{n}^{2}B^{2} }\vec{B}\times \vec{E}
\end{align}$$
于是可以定义：
$$\begin{align}
 & \sigma_{\parallel}= \frac{1}{4\pi^{3}}\int_{\text{FBZ}}d^{3}k \frac{-\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}v^{2}}{1+\mu_{n}^{2}B^{2}} \\
 & \sigma_{\perp}= \frac{1}{4\pi^{3}}\int d^{3}k \frac{-\tau e^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\mu_{n}v^{2}}{1+\mu_{n}^{2}B^{2}}B
\end{align}$$
则给定$\vec{E}$与垂直于$\vec{E}$的$\vec{B}$，电流在$\vec{E}$方向上有response coefficient $\sigma_{\parallel}$，在$\vec{B}\times \vec{E}$方向上有response coefficient $\sigma_{\perp}$。

注意到：
$$\begin{align}
 & \sigma_{\parallel}= \frac{\sigma}{1+\mu_{n}^{2}B^{2}} \\
 & \sigma_{\perp}= \frac{\mu_{n}B\sigma}{1+\mu_{n}^{2}B^{2}}
\end{align}$$
回顾$\sigma$的公式，容易看出$\sigma> 0$。于是$\sigma_{\parallel}> 0$。乍看之下$\sigma_{\perp}> 0$<但是回顾上面的推导,我们发现若载流子是hole，则将[[Transport#^ddce4d|proposition 7.2.3]]中$\mu_{n}$前面会多负号，导致$\sigma_{\perp}< 0$。

## Remark
我们发现，$\sigma \propto \tau$，$\mu_{n} \propto \tau^{2}$。在弱场脏样品下，我们有$\sigma_{\parallel}\propto \tau$。表现为Ohmic resistance。电子主要被电场驱动，被散射拖慢。在强场纯净样品下，我们有$\sigma_{\parallel}\propto \frac{\tau}{\tau^{2}}= \frac{1}{\tau}$。所以样品越纯净，反而$\sigma_{\parallel}$越小，电子被束缚在垂直于电场的“圆周轨道“里。电子被磁场拖慢。

而对于$\sigma_{\perp}$，弱场情况下有$\sigma_{\perp}\propto \tau^{3}$，强场情况下有$\sigma_{\perp}\propto \tau$，都是样品越纯净，conductance越大。













# 7. Electrons and holes

我们可以将测度$d^{3}k$写成对能量$\epsilon_{\vec{k}}$的测度。显然我们有：
$$\begin{align}
\int d^{3}k & = \int d\epsilon \int_{\text{constant }\epsilon} \frac{dS}{|\nabla\epsilon_{\vec{k}}|}
\end{align}$$
而我们发现，各种transport的常数经常会需要积分：
$$\int d^{3}k\tau(\vec{k}) \vec{v}_{\vec{k}}\vec{v}_{\vec{k}}\dots=\int d\epsilon \int_{\text{constant }\epsilon} \frac{dS}{|\nabla\epsilon _{\vec{k}}|}\tau \vec{v}_{\vec{k}}\vec{v}_{\vec{k}}\dots$$
所以我们不妨定义测度：
$$\overset{\leftrightarrow}{\Xi}(\epsilon)=  \frac{h}{8\pi^{3}} \int_{\text{constant }\epsilon} \frac{dS}{|\nabla\epsilon_{\vec{k}}|}\tau \vec{v}_{\vec{k}}\vec{v}_{\vec{k}}$$
在大多数情况下，$\overset{\leftrightarrow}{\Xi}$是一个对角阵，且是一个scalar tensor。这时候就往往将其写作${\Xi}$，其中$\Xi$为其对角元。

容易证明：

>[!Note] Proposition 1
>If $\overset{\leftrightarrow}{\Xi}$ is a scalar tensor, then:
>$$\begin{align}
 & \sigma= -2 \frac{e^{2}}{h}\int d\epsilon \Xi(\epsilon) \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \\
 & \alpha=2 \frac{ek}{h}\int d\epsilon \Xi(\epsilon) \frac{\epsilon-\mu}{kT} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \\
 & \kappa= -2 \frac{ek^{2}T}{h}\int d\epsilon \Xi(\epsilon) \left( \frac{(\epsilon-\mu)^{2}}{kT} \right)^{2} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} 
 \end{align}$$






## ??? Relaxation time approximation

我们假设在给定band，每一点上有碰撞的平均时间$\tau(\vec{r}_{},\vec{k}_{})$。令非平衡态的粒子数测度为$f_{\vec{k}}(\vec{r})$。那么在任意相空间体元$d^{3}r d^{3}k$中，在时间$t$周围$dt$内损失粒子数为：
$$\frac{d^{3}r d^{3}k}{4\pi^{3}}f_{\vec{k}}(\vec{r})\cdot \frac{dt}{\tau(\vec{r},\vec{k})}$$
>[!Note] Postulate 1 (relaxation time approximation)
>We assume that the number of particles scattered off the band is a constant within $dt$.

也就是说，无论$d^{3}r d^{3}k$中电子是多是少，$dt$内散射损失电子数为常量。所以可以取$f_{\vec{k}}(\vec{r})=f^0(\vec{k})$计算损失：
$$\frac{d^{3}r d^{3}k}{4\pi^{3}}f^0(\vec{k})\cdot \frac{dt}{\tau(\vec{r},\vec{k})}\tag{*}$$
在稳态输运中，每一点的$f_{\vec{k}}(\vec{r})$不随时间变化。所以散射进入这一点的粒子数也就必须等于$(*)$。

>[!Note] Proposition 1
>$$f_{\vec{k}}(\vec{r}(t))= \int_{-\infty}^{t}dt^{'}  f^0(\vec{k}^{'}) \frac{1}{\tau(\vec{r}(t^{'}),\vec{k}(t^{'}))}P(\vec{r},\vec{k},t,t^{'}) $$
## Proof.

$t$时存于$d^{3}r d^{3}k$中电子一定来源于$-\infty$到$t$中散射进入$f_{\vec{k}}(\vec{r})$的电子。这些电子的轨迹都完全一致，因为它们都需要在$t$时刻到达$\vec{r},\vec{k}$。它们有的在$t$时刻之前又被散射出去，有的被保留。令$P(\vec{r},\vec{k},t,t^{'})$为$t^{'}$时刻散射进来的电子一直到$t$不损失的概率。

那么$t^{'}$时刻散射进来的电子数为：
$$\frac{d^{3}r^{'}d^{3}k^{'}}{4\pi^{3}} f_{\vec{k}^{'}}(\vec{r}^{'}) \frac{dt^{'}}{\tau(\vec{r}^{'},\vec{k}^{'})}$$
其中$\vec{r}^{'},\vec{k}^{'}$为按照semiclassical EOM从$\vec{r},\vec{k}$追溯回$t^{'}$的位置。$d^{3}r^{'}d^{3}k^{'}$为按照semiclassical EOM将$d^{3}r d^{3}k$流回$t^{'}$的体元。由Liouville定理，我们有：
$$\frac{d^{3}r^{'}d^{3}k^{'}}{4\pi^{3}}f_{\vec{k}^{'}}(\vec{r}^{'}) \frac{dt^{'}}{\tau(\vec{r}^{'},\vec{k}^{'})}= \frac{d^{3}r d^{3}k}{4\pi^{3}}f_{\vec{k}^{'}}(\vec{r}^{'}) \frac{dt^{'}}{\tau(\vec{r}^{'},\vec{k}^{'})}$$
所以$d^{3}r d^{3}k$内粒子数为以往所有$t^{'}$时刻散射进来的粒子数之和，注意乘上存活概率：
$$ \int_{-\infty}^{t}dt^{'} \frac{d^{3}r d^{3}k}{4\pi^{3}} f^0(\vec{k}^{'}) \frac{1}{\tau(\vec{r}(t^{'}),\vec{k}(t^{'}))}P(\vec{r},\vec{k},t,t^{'}) $$
另一方面，$d^{3}r d ^{3}k$内粒子数为：
$$\frac{d^{3}r d^{3}k}{4\pi^{3}}f_{\vec{k}}(\vec{r})$$
所以：
$$f_{\vec{k}}(\vec{r}(t))= \int_{-\infty}^{t}dt^{'}  f^0(\vec{k}^{'}) \frac{1}{\tau(\vec{r}(t^{'}),\vec{k}(t^{'}))}P(\vec{r},\vec{k},t,t^{'}) $$
>[!Right]
>$\blacksquare$
## 6.2 Boltzmann equation

>[!Note] Proposition 1
>If $\tau=\text{const.}$, then $P(\vec{r},\vec{k},t,t^{'})=\exp\left( -\frac{t-t^{'}}{\tau} \right)$
## Proof.
首先我们有：
$$\begin{align}
 & P(\vec{r},\vec{k},t+dt,t^{'})=P(\vec{r},\vec{k},t,t^{'})\left( 1- \frac{dt}{\tau} \right) \\
\implies & \frac{\partial P}{\partial t}= - \frac{P}{\tau}
\end{align}$$
并且有：
$$P(\vec{r},\vec{k},t^{'},t^{'})=1$$
于是容易解得命题中方程。
>[!Right]
>$\blacksquare$

>[!Note] Proposition 1
>If $\tau=\text{const.}$, we have:
>$$\begin{align}
f_{\vec{k}}(\vec{r}) & =f^0(\vec{k})- \int_{-\infty}^{t}dt^{'} \exp\left( - \frac{t-t^{'}}{\tau} \right) \frac{\partial f^0}{\partial\epsilon_{\vec{k}^{'}}}\vec{v}^{'}\cdot\left( \vec{F}^{'}- \frac{\epsilon_{\vec{k}^{'}}-\mu^{'}}{T^{'}} \nabla^{'} T^{'} - \nabla^{'}\mu^{'}\right)
\end{align}$$
## Proof.
我们有：
$$\begin{align}
f_{\vec{k}}(\vec{r}) & = \int_{-\infty}^{t}dt^{'} \frac{1}{\tau} \exp\left( - \frac{t-t^{'}}{\tau} \right)f^0(\vec{k}^{'}) \\
  & = \left[f^0(\vec{k}^{'})\exp\left( - \frac{t-t^{'}}{\tau} \right)\right]_{-\infty}^{t}- \int_{-\infty}^{t} dt^{'} \exp\left( - \frac{t-t^{'}}{\tau} \right) \frac{d}{dt^{'}}f^0(\vec{k}^{'}) \\
 & = f^0(\vec{k})-\int_{-\infty}^{t}dt^{'}\exp\left( - \frac{t-t^{'}}{\tau} \right) \left( \frac{\partial f^0}{\partial\epsilon_{\vec{k}^{'}}} \frac{\partial\epsilon _{\vec{k}^{'}}}{\partial \vec{k}^{'}}\cdot \frac{\partial \vec{k}^{'}}{\partial t}+ \frac{\partial f^0}{\partial T^{'}} \frac{\partial T^{'}}{\partial \vec{r}^{'}}\cdot \frac{\partial \vec{r}^{'}}{\partial t}+ \frac{\partial f^0}{\partial \mu^{'}} \frac{\partial \mu^{'}}{\partial \vec{r}^{'}}\cdot \frac{\partial \vec{r}^{'}}{\partial t} \right)
\end{align}$$
容易通过直接计算证到：
$$\begin{align}
 & \frac{\partial f^0}{\partial T}=- \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\epsilon_{\vec{k}}} \\
 & \frac{\partial f^0}{\partial \mu}=- \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}
\end{align}$$
且通过semiclassical EOM代入$\frac{\partial \vec{k}}{\partial t}, \frac{\partial \vec{r}}{\partial t}$，得到：
$$\begin{align}
f_{\vec{k}}(\vec{r}) & =f^0(\vec{k})- \int_{-\infty}^{t}dt^{'} \exp\left( - \frac{t-t^{'}}{\tau} \right) \frac{\partial f^0}{\partial\epsilon_{\vec{k}^{'}}}\vec{v}^{'}\cdot\left( \vec{F}^{'}- \frac{\epsilon_{\vec{k}^{'}}-\mu^{'}}{T^{'}} \nabla^{'} T^{'} - \nabla^{'}\mu^{'}\right)
\end{align}$$
>[!Right]
>$\blacksquare$

在忽略$\nabla \mu$，外场只有弱电场的情况下，可以得到Boltzmann方程：

>[!Note] Proposition 2 (Boltzmann equation)
>Consider Bloch electrons moving in a weak electric field and weak thermal gradient. Suppose that $\tau=\text{const.}$ Then:
>$$ \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot\left( e\vec{E}- \frac{\epsilon_{\vec{k}}-\mu}{T}\nabla T \right)+ \frac{f_{\vec{k}}(\vec{r})-f^0(\vec{k})}{\tau}=0$$
>or
>$$\vec{v}_{}\cdot \frac{\partial f^0}{\partial T}\nabla T+e\vec{v}\cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\cdot \vec{E}+\frac{f_{\vec{k}}(\vec{r})-f^0}{\tau}=0$$
## Proof.
令：
$$\begin{align}
 & \vec{F}= e\vec{E} \\
 & \nabla \mu=0
\end{align}$$
则有：
$$\begin{align}
 f_{\vec{k}}(\vec{r}) & =f^0(\vec{k})- \int_{-\infty}^{t}dt^{'}\exp\left( - \frac{t-t^{'}}{\tau} \right) \frac{\partial f^{0}}{\partial\epsilon_{\vec{k}^{'}} }\vec{v}^{'} \cdot\left( e\vec{E}^{'}- \frac{\epsilon_{\vec{k}^{'}}-\mu^{'}}{T^{'}} \nabla^{'}T^{'} \right) \\
 & = f^0(\vec{k})- \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot\left( e\vec{E}- \frac{\epsilon_{\vec{k}}-\mu}{T}\nabla T \right) \int_{-\infty}^tdt^{'}\exp\left( - \frac{t-t^{'}}{\tau} \right) \\
 & = f^0(\vec{k})-\frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot\left( e\vec{E}- \frac{\epsilon_{\vec{k}}-\mu}{T}\nabla T \right) \tau \\
\end{align}$$
其中，integrand那一坨可以提出来是因为我们假设线性相应，$\vec{E},\nabla T$都很小，所以根据semiclassical EOM，电子的$\vec{k},\vec{r}$都几乎不变。

接下来移项可得：
$$ \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}\cdot\left( e\vec{E}- \frac{\epsilon_{\vec{k}}-\mu}{T}\nabla T \right)+ \frac{f_{\vec{k}}(\vec{r})-f^0(\vec{k})}{\tau}=0$$
要将上下两个形式联系起来只需要回想：
$$\begin{align}
 & \frac{\partial f^0}{\partial T}=- \frac{\epsilon_{\vec{k}}-\mu}{T} \frac{\partial f^0}{\epsilon_{\vec{k}}} \\
 & \frac{\partial f^0}{\partial \mu}=- \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}
\end{align}$$
>[!Right]
>$\blacksquare$

