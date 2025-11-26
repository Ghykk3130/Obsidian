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
# 3. Seebeck effect

在讨论Seebeck effect之前，我们先讨论电化学势。若粒子不带电，则粒子数变化引起的内能变化为$dU=\mu_{c} dN$。但如果粒子带电，则还需要额外引起$e\phi dN$的内能变化。所以热力学第一定律写为：
$$dU=TdS-pdV+\mu_{c}dN+e\phi dN$$
也就是说，化学势可以分为两部分：
$$\begin{align}
\mu=\frac{\partial U}{\partial N}=\mu_{c}+e\phi=\mu_{c}+\mu_{e}
\end{align}$$
也就是说，$e\phi$可以当做一个化学势$\mu_{e}$，称为电化学势。


考虑一块金属中存在热流与电子流。则我们有：
$$\begin{align}
 & \vec{J}_{q}=L_{qq}\vec{X}_{q}+L_{qn}\vec{X}_{n} \\
 & \vec{J}_{n}=L_{nq}\vec{X}_{q}+L_{nn}\vec{X}_{n}  
\end{align}$$
其中，我们在[[Thermal Transport#^8f38a3|proposition 1.4]]已经算过$\vec{X}_{q},\vec{X}_{n}$了。所以我们有：
$$\begin{align}
 & \vec{J}_{q}=L_{qq}\nabla\left( \frac{1}{T} \right)+L_{qn}\left( -\frac{\nabla \mu}{T} \right) \\
 & \vec{J}_{n}=L_{nq}\nabla\left( \frac{1}{T} \right)+L_{nn}\left( - \frac{\nabla \mu}{T} \right)
\end{align}$$
考虑两种金属，没有电流。在金属B上任意一点测电压。

![[Drawing 2025-11-25 17.49.35.excalidraw|center]]

令$\vec{J}_{n}=0$则有：
$$\begin{align}
 & L_{nq}\nabla\left( \frac{1}{T} \right)+L_{nn}\left( - \frac{\nabla \mu}{T} \right)=0 \\
\implies & -L_{nq} \frac{\nabla T}{T^{2}}-L_{nn} \frac{\nabla \mu}{T}=0 \\
\implies & \nabla \mu=- \frac{L_{nq}}{L_{nn}} \frac{\nabla T}{T}
\end{align}$$
在两种金属线$A,B$上分别积分，我们得到：
$$\begin{align}
 & \mu_{2}-\mu_{1}= -\int_{T_{1}}^{T_{2}}dT \frac{L_{nq}^A}{L_{nn}^A} \frac{1}{T} \\
 & \mu_{l}-\mu_{1}=-\int_{T_{1}^{}}^TdT \frac{L_{nq}^B}{L_{nn}^B} \frac{ 1}{T} \\
 & \mu_{2}-\mu_{r}=- \int_{T}^{T_{2}}dT \frac{L_{nq}^B}{L_{nn}^B} \frac{1}{T}
\end{align}$$
消元得到：
$$\mu_{r}-\mu_{l}=\int_{T_{1}}^{T_{2}}dT\left( \frac{L_{nq}^B}{L_{nn}^B}- \frac{L_{nq}^A}{L_{nn}^A} \right)  \frac{1}{T}$$
我们知道，$V$两侧不存在温度差，所以$\mu_{cr}=\mu_{cl}$。所以化学势差全部是电化学势差。于是便有：
$$\Delta \phi=\frac{1}{e}(\mu_{r}-\mu_{l})=\int_{T_{1}}^{T_{2}}dT\left( \frac{L_{nq}^B}{eL_{nn}^B}- \frac{L_{nq}^A}{eL_{nn}^A} \right)  \frac{1}{T}$$
我们取测电压的点为$T_{2}$点，并固定$T_{1}$，对于$T_{2}$微分，我们有：
$$\frac{\partial \phi}{\partial T}=\frac{L_{nq}^B}{eTL_{nn}^B}- \frac{L_{nq}^A}{eTL_{nn}^A}$$
定义Seebeck coefficient：
$$\begin{align}
 & S_{B}= \frac{L_{nq}^B}{eTL_{nn}^B}, S_{A}= \frac{L_{nq}^A}{eTL_{nn}^A},S_{BA}=S_{B}-S_{A}
\end{align}$$
所以，在两金属线交点的B金属部分，温度梯度引起一个电势梯度：
$$\Delta \phi=(S_{B}-S_{A})\Delta T$$
