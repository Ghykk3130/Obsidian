# 1. Local equilibrium

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

# 2. Linear response

对于一个体元构成的热力学系统，我们可以选择一系列热力学量的体密度$a_{i}$来描述它。这些热力学量的体密度可以根据连续性方程引出对应流量：
$$\frac{\partial a_{i}}{\partial t}=-\nabla \cdot \vec{J}_{i}$$
将[[Thermal Transport#^8f38a3|proposition 1.4]]推广。我们发现，经验性地：
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
# 3. Under magnetic field

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

# 4. Seebeck effect, Peltier effect

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
其中，我们在[[Thermal Transport#^8f38a3|proposition 1.4]]已经算过$\vec{X}_{q},\vec{X}_{n}$了。所以我们有：
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

# 5. Fermi-Dirac distribution as Radon-Nikodym

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

# 6. Boltzmann equation

我们作下面近似：

>[!Note] Postulate 1 (relaxation time approximation)
>Let $\tau(\vec{k})$ be the average time between collisions for electrons in state $\vec{k}$. Then
>$$\frac{df_{\vec{k}}(\vec{r})}{dt}= - \frac{f_{\vec{k}}(\vec{r})-f^0}{\tau(\vec{k})}$$
## Remark
我们稍稍变个形得到：
$$\frac{d}{dt}(f_{\vec{k}}(\vec{r})-f^0)=- \frac{1}{\tau}(f_{\vec{k}}(\vec{r})-f^0)$$
显然，这代表着$f_{\vec{k}}(\vec{r})-f^0$呈characteristic time为$\tau$的指数衰减。

>[!Note] Postulate 2
>We assume that:
>- $$\frac{\partial f_{\vec{k}}(\vec{r})}{\partial \vec{r}}= \frac{\partial f_{\vec{k}}(\vec{r})}{\partial T} \frac{\partial T}{\partial \vec{r}}\approx \frac{\partial f^0}{\partial T} \nabla T$$
>- $$\frac{\partial f_{\vec{k}}(\vec{r})}{\partial \vec{k}}=\frac{\partial f_{\vec{k}}(\vec{r})}{\partial\epsilon_{\vec{k}}} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}\approx \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \vec{v}_{\vec{k}}$$
## Remark
这即是在假设：
- r-dependence完全来自于$T$的r-dependence。以至于$\frac{\partial f_{\vec{k}}}{\partial \vec{r}}= \frac{\partial f_{\vec{k}}}{\partial T} \frac{\partial T}{\partial \vec{r}}$
	- k-dependence完全来自于$\epsilon_{\vec{k}}$的k-dependence。以至于$\frac{\partial f_{\vec{k}}}{\partial \vec{k}}= \frac{\partial f_{\vec{k}}}{\partial\epsilon_{\vec{k}}} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}$
- $f_{\vec{k}}$与$f^0$偏离不太大，以至于$\frac{\partial f_{\vec{k}}}{\partial T} \frac{\partial T}{\partial \vec{r}}\approx \frac{\partial f^0}{\partial T}\nabla T$，$\frac{\partial f_{\vec{k}}}{\partial\epsilon_{\vec{k}}} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}}\approx \frac{\partial f^0}{\partial\epsilon_{\vec{k}}} \vec{v}_{\vec{k}}$。


在相空间中，每一点都在根据semiclassical EOM流动：
$$\begin{align}
 & \vec{v}_{\vec{k}}= \frac{1}{\hbar} \frac{\partial\epsilon_{\vec{k}}}{\partial \vec{k}} \\
 & \hbar  \dot{\vec{k}}=e\vec{E}
\end{align}$$
所以$f_{\vec{k}}(\vec{r})$随着电子的流动也不断变动。可以求它的随体导数。可以得到Boltzmann方程：

>[!Note] Proposition 1 (Boltzmann equation)
>Consider Bloch electrons moving in an electric field. Then:
>$$\vec{v}_{\vec{k}}\cdot \frac{\partial f^0}{\partial T}\nabla T+e\vec{v}_{\vec{k}}\cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\cdot \vec{E}+\frac{f_{\vec{k}}(\vec{r})-f^0}{\tau}=0$$
## Proof.
一方面我们有：
$$\begin{align}
\frac{df_{\vec{k}}(\vec{r})}{dt} & = \vec{v}_{\vec{k}}\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial \vec{r}}+ \frac{\partial \vec{k}}{\partial t }\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial \vec{k}} \\
 & = \vec{v}_{\vec{k}}\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial T}\nabla T+ \frac{e}{\hbar}\vec{E}\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial \vec{k}} \\
 & =\vec{v}_{\vec{k}}\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial T}\nabla T+ \frac{e}{\hbar}\vec{E}\cdot \frac{\partial f_{\vec{k}}(\vec{r})}{\partial\epsilon_{\vec{k}}} \vec{v}_{\vec{k}} \\
 & = \vec{v}_{\vec{k}}\cdot \frac{\partial f^0}{\partial T}\nabla T+ \frac{e}{\hbar}\vec{E}\cdot \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{v}_{\vec{k}}
\end{align}$$
另一方面，我们有：
$$\frac{df_{\vec{k}}(\vec{r})}{dt}=- \frac{f_{\vec{k}}(\vec{r})-f^0}{\tau}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>The current density is given by:
>$$\vec{J}^e=  \frac{1}{4\pi^{3}} \int d^{3}k\left(f^0e\vec{v}_{\vec{k}}-e \tau\vec{v}_{\vec{k}}\vec{v}_{\vec{k}}\cdot\left( \frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E} \right)\right)$$
## Proof.
单位相空间体积内的电子数量为：
$$d^{3}kd^{3}r f_{\vec{k}}(\vec{r})$$
这坨电子产生的电流为：
$$\begin{align}
d^{3}kd^{3}rf_{\vec{k}}e\vec{v}_{\vec{k}} & = d^{3}kd^{3}r\left(f^0-\tau \vec{v}_{\vec{k}}\cdot\left(  \frac{\partial f^0}{\partial T} \nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)\right)e\vec{v}_{\vec{k}}
\end{align}$$
所以r-space中单位体积中的电流，也就是电流密度为：
$$\begin{align}
\vec{J}^e & = \frac{1}{4\pi^{3}}\int d^{3}k\left( f^0- \tau \vec{v}_{\vec{k}}\cdot\left(  \frac{\partial f^0}{\partial T}\nabla T+e \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}  \right)\right)e\vec{v}_{\vec{k}}
\end{align}$$

>[!Right]
>$\blacksquare$

>[!Note] Corollary 1
>$$\sigma=- \frac{1}{4\pi^{3}} e^{2}\int d^{3}k\tau \vec{v}_{\vec{k}}\vec{v}_{\vec{k}} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}$$
## Proof.
令$\nabla T=0$。则：
$$\begin{align}
\vec{J}^e & = \frac{1}{4\pi^{3}}\int d^{3}k\left(f^0e\vec{v}_{\vec{k}}- e^{2}\tau \vec{v}_{\vec{k}}\vec{v}_{\vec{k}} \frac{\partial f^0}{\partial\epsilon_{\vec{k}}}\vec{E}\right)
\end{align}$$
