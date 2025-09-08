# 1.1

考虑一个光源，在四周观察光源可以有多种描述光源的方式。首先取一个面元，计算光在这点的能流密度。于是能流密度，也就是intensity，是该点在空间中的位置，以及面的orientation的函数。

为了消去面的orientation的dependence，我们可以计算光通量的立体角分布。于是作如下定义，定义其为通量的Radon-Nikodym导数：

>[!Definition 1]
>Define the radiant intensity: $I_{e}(\theta,\phi)\text{ such that } d\phi_{e}=I_{e}d\Omega$.
## Ex:
例如，考虑一个围绕光源的球面上的一点。在该点作球面的切面有intensity $I$。则该点radiant intensity为：
$$I_{e}=\frac{d\phi_{e}}{d\Omega}=\frac{r^{2}\sin \theta d\theta d\phi I}{\sin \theta d\theta d\phi}=r^{2}I$$
若randiant intensity为常数，则$I= \frac{I_{e}}{r^{2}}$，得到平方衰减。

我们还可以定义其他的量。

>[!Definition 2]
>Define the energy flux density of a closed surface as 
>1) radiant exitance $M_{e}$ if flow out.
>2) irradiance $E_{e}$ if flow in.

在光场中，出现两种情况可以改变我看到的光的亮度。

1）我转动观测面，即使该点$I_{e}$不变，看到的“亮度”会改变。所以我们将观测面投影到垂直于观测点和光源的线的面上，可以衡量这个“亮度”。

2）将光源想象成面状。光源本身发生了旋转。我们要将“光源面”投影到垂直于观测点和光源的连线上，可以衡量这个“亮度”。

为了消去这两种互转动的影响，我们作如下定义：

>[!Definition 3]
>Define the radiance: $L_{e}\text{ such that }dI_{e}=dA\cos \theta L_{e}$.
## Remark
在上述第一种情况中，应当用观测面的面积。第二种情况中，应当用“光源面”的面积。

我们定义一类各方向看上去一样亮的光源。

>[! Definition 4]
>A perfect diffuse emitter (or Lambertian surface) is an emitter whose $L_{e}$ is constant.
## Remark
注意，这里计算$L_{e}$应投影光源面积。

>[!Proposition 1 (Lambert's cosine law)]
>Let $I(0)$ denote the radiant intensity of a perfect diffuse emitter observed from the normal direction. Then:
>$$I(\theta)=I(0)\cos \theta$$
## Remark
我们看到，反直觉的是，对于一个各向亮度一样的Lambertian surface，randiant intensity却各向不一样。这说明，一个各向看上去一样亮的物体，实际上中间光强最强。在边缘位置反而光强很弱。
## Proof.
我们知道：
$$\begin{align}
I(\theta) & =dA\cos \theta L_{e} \\
I(0) & =dA\cos{0}L_{e}=dAL_{e}
\end{align}$$
所以命题便是显然
>[!Right]
>$\blacksquare$

空间中考虑一个任意的光场。在光场中任取一个面元$dA_{1}$。在$dA_{1}$上考虑所有的能流密度$\vec{S}$，以$dA_{1}$为底作一个高度无穷低的，“包住”所有$dA_{1}$上能流密度的曲面“围墙”，或者说管状邻域。能流密度要么完全在“围墙”内，要么与“墙壁相切”。然后给“围墙”封一个“顶”。这个“顶”离$dA_{1}$无穷近。然后我们又可以由这个“顶”出发，构建另一个管状邻域，...这样下去，就构建出了一个完全把从$dA_{1}$出来的能流密度包裹在内的tube。将这个tube称为beam。注意这个tube应该是无穷细的。所以我们可以再tube中取点，研究这些点的$L$。

于是任何beam中的点观察光场，都全部是由beam的某横截面，比如$dA_{1}$散发出来的。因为能流密度被完全局限在beam中了。我们可以证到，beam中任意横截面观察到的randiance相等。

>[!Proposition 2]
>In a uniform, non-absorbing medium, $L_{e}$ of the source is constant along a beam.
## Remark
此处radiance of the source就代表$L_{e}=\frac{dI_{e}}{dA\cos \theta}$中$dA$应取源的面积，$I_{e}$是某点观察的randiant intensity
## Proof.
![[Pasted image 20250826213826.png|500]]
在空间中取一点。延展这一点的管状邻域形成beam。考虑beam的两个点，及它们对应的横截面$dA_{1},dA_{2}$。假设能量由$dA_{1}$流向$dA_{2}$。于是$dA_{2}$处有randiance of $dA_{1}$为：
$$\begin{align}
L_{1} & = \frac{dI_{e_{2}}}{dA_{1}\cos \theta_{1}} \\
 & =\frac{d^{2}\phi_{e_{1}}r^{2}}{dA_{1}\cos \theta_{1}dA_{2}\cos \theta_{2}}
\end{align}$$
其中$\frac{dA_{2}\cos \theta_{2}}{r^{2}}$是相对于$dA_{1}$的立体角。

接下来如何计算$L_{2}$，即randiance of $dA_{2}$呢？$L_{2}$应该是$dA_{2}$发出来的。要测量它我们需要再$dA_{2}$之后再取一面元。但这样势必会引入新的物理量。我们想利用与有关的物理量来表示它。

>[!Idea]
>可以利用光路可逆以避免新变量的依赖。

time reversal之后，$dA_{2}$处的radiance显然还是不变的。而且这样一来，光就是发出来的，而可以在$dA_{1}$处测量。因此：
$$\begin{align}
L_{2} & =\frac{dI_{e_{1}}}{dA_{2}\cos \theta_{2} } \\
 & =\frac{d^{2}\phi_{e_{2}}r^{2}}{dA_{2}\cos \theta_{2}dA_{1}\cos \theta_{1}}
\end{align}$$

因为beam把所有能流密度都包在里面，且介质中不会损失能量，所以$d^{2}\phi_{e_{2}}=d^{2}\phi_{e_{1}}$。于是$L_{1}=L_{2}$
>[!Right]
>$\blacksquare$

对于一束beam，因为整条beam上$L$，$d^{2}\phi_{e}$都是守恒的。于是可以定义新的守恒量：

>[!Definition 5]
>Define etendue (optical throughout) of a beam: $E=\frac{d^{2}\phi_{e}}{L}=dAd\Omega$

于是在整条beam上任取，面元$dA_{1},dA_{2},\dots$,全部垂直于面元对应的点的能流密度。则$L=\frac{d^{2}\phi_{e}}{dA_{n}d\Omega_{n}}$。于是：
$$E=dA_{1}d\Omega_{1}=dA_{2}d\Omega_{2}=\dots$$

# 3.5

>[!Definition 1]
>Paraxial approximation assumes that all rays make small angles with the optical axis, and stay close to the axis.

这也就是说，光场在Poynting矢量与optical axis夹角较大，或者距离较远的地方的贡献非常弱。这里说贡献非常弱并不是说光场在这里实际上很弱。它们可能实际上不弱，但是并不会经过我们的optical system。

一般来说，观察介质中物体不能形成像。
![[Pasted image 20250903124522.png|300]]

因为：
$$\begin{align}
 & s^{'}=s \frac{\tan \theta_{1}}{\tan \theta_{2}} 
\end{align}$$
而我们没有理由认为$\frac{\tan \theta_{1}}{\tan \theta_{2}}$是常数。

但是，在傍轴近似下，$\frac{\tan \theta_{1}}{\tan \theta_{2}}=\frac{\sin \theta_{1}}{\sin \theta_{2}}= \frac{\theta_{1}}{\theta_{2}}= \frac{n_{2}}{n_{1}}$是一个常数。所以能形成一个像。

# 3.6 Imaging by an optical system

>[!Definition 1]
>Define the equal-phase plane of a light field as a wavefront.

>[! Definition 2]
>For a ray, let $A,B$ be two points on this ray. Then the optical path length is defined by the line integral in the direction of propagation: $\int_{A}^B nds$.
## Remark
注意，若从$A$到$B$是逆着光传播方向的，上述线积分为负。

>[!Proposition 1 (Fermat's principle)]
>Between two physical points that a ray can pass through, with the optical system in between fixed, the trajectory of the ray is such that $\delta \int nds=0$.

^proposition361
[[Pedrottis' introduction to optics#^77f83f]]

将光学系统看做一系列反射，折射的各向同性介质的组合。则物点产生的光与光学系统相交的那一部分，经过光学系统得到新的光场。若新的光场的光线汇聚于一点，则将该点称为像点。

物点和像点互为共轭。当物点发出的所有光线都汇聚于一点，也就是像点，称成的像为perfect image。

考虑一个反射面。我们想知道怎样的反射面可以形成perefect image。

>[! Proposition 2]
>For any object and the image conjugate to it, the optical path lengths of all rays reaching the image are the same.
## Proof.
所有形成像点的ray的光程都取极值。这些极值必须是同一个极值，因为这些ray相隔无限近，在光具组上的变化是连续的。
>[!Right]
>$\blacksquare$
>

我们可以考虑：什么样的光具组可以形成perfect image？

先考虑reflector。令reflector的曲线由$\vec{r}(s)$描述。若光线实际交汇，形成实像，则根据[[Pedrottis' introduction to optics#^77f83f|proposition 3.6.1]]，我们一定有：
$$|\vec{r_{o}}-\vec{r}|+|\vec{r}-\vec{r_{i}}|=\text{const.}$$
于是$\vec{r}(s)$一定是椭圆或者抛物线。$\vec{r_{o}},\vec{r_{i}}$一定在焦点上。

若光线不实际交汇，而在反向延长线上形成虚像，则在反向延长线上部分的光程由于逆着光传播的方向，光程差为负。于是这就要求：
$$|\vec{r_{o}}-\vec{r}|-|\vec{r}-\vec{r_{i}}|=\text{const.}$$
于是$\vec{r}(s)$为双曲线。
![[Pasted image 20250903224637.png|500]]

若光具组为refractor。当光线实际交汇形成像时，我们有：
$$n_{1}|\vec{r_{o}}-\vec{r}|+n_{2}|\vec{r}-\vec{r_{i}}|=\text{const.}$$
选取坐标轴，使得物点在原点，像点在$s+s^{'}$的位置，折射面穿过$x$轴上$(s, 0)$点。那么：
$$n_{1}s+n_{2}s_{}{'}=n_{1}\sqrt{ x^{2}+y^{2} }+n_{2}\sqrt{ (x-s-s^{'})^{2}+y^{2} }$$这是一个卵形面。

若成像在无限处，即平行光，那么取$s^{'}\rightarrow \infty$并在右手边展开到一阶。于是：
$$\left( \frac{n_{2}}{n_{1}} \right)^{2}x^{2}+2 \frac{n_{2}}{n_{1}}\left( 1- \frac{n_{2}}{n_{1}} \right)sx+ \left(  1- \frac{n_{2}}{n_{1}} \right)^{2}s^{2}=x^{2}+y^{2}$$
若$n_{2}>n_{1}$，则为双曲线。反之则为椭圆。
![[Pasted image 20250903232009.png|500]]

# 3.7 Reflection at a spherical surface

我们知道，任何曲面在傍轴近似下都可以看做一个局部球面。而在存在paraxial approximation的时候，球面是可以成像的。

我们想知道，物距，像距，和球面镜曲率之间的关系。
![[Pasted image 20250907224417.png]]

在旁轴近似下，我们显然有：
$$\begin{align}
s^{'} & \approx s \frac{\tan \alpha}{\tan \alpha^{'}} \\

\end{align}$$
我们在旁轴近似下忽略$VQ$就有：
$$\tan \alpha \approx \frac{h}{s}$$
但是$\alpha^{'}$就不是很好表示出来。但我们发现，$\phi$可以很容易地描述，因为$\phi \approx \tan \phi \approx \frac{h}{R}$。于是我们试图将$\alpha^{'}$写为$\alpha$和$\phi$的函数。我们有：
$$\begin{align}
 & \alpha+\alpha^{'}=2\theta \\
 & \alpha+\phi=\theta
\end{align}$$
于是：
$$\alpha^{'}=\alpha+2\phi$$
于是接下来的任务就是表示$\tan \alpha^{'}$：
$$\begin{align}
\tan \alpha^{'} & =\tan(\alpha+2\phi) \\
 & = \frac{\tan \alpha+\tan 2\phi}{1-\tan \alpha \tan w\phi} 
\end{align}$$
而我们显然有：
$$\begin{align}
 & \alpha \approx \tan \alpha= \frac{h}{s} \\
 & \phi \approx \tan \phi= \frac{h}{R} \\
\implies & \tan 2\phi \approx 2\phi \approx \frac{2h}{R}
\end{align}$$
于是：
$$\begin{align}
\tan \alpha^{'} & = \frac{\frac{h}{s}+ \frac{2h}{R}}{1- \frac{2h^{2}}{R^{2}}} \\
 & \approx \frac{\frac{h}{s}+ \frac{2h}{R}}{1} \\
\implies \frac{h}{s^{'}} & \approx \frac{h}{s}+ \frac{2h}{R} \\
\implies \frac{1}{s}- \frac{1}{s^{'}} & =- \frac{2}{R}
\end{align}$$

我们采用以下规定：
- 对于物点，像点，若为实，则与vertex的距离为正。若为虚，则与vertex的距离为负。
- 对于反射面，若曲率中心在入射光同侧，即concave，则曲率半径为负。若曲率中心在入射光对侧，即concave，则曲率半径为正。

于是反射面公式可以改写为：

>[!Proposition 1]
>For a reflective surface with curvature radius $R$ under paraxial approximation, together with an object and its conjugate image, the following equation is satisfied:
>$$\frac{1}{s}+ \frac{1}{s^{'}}=\frac{-2}{R}$$

^proposition371

考虑入射光为平行光。令$s \rightarrow \infty$，我们得到：
$$s^{'}= - \frac{R}{2}$$
我们定义这为焦距：

>[! Definition 2]
>Define the focal length of a reflective surface with curvature radius $R$:
>$$f= - \frac{R}{2}$$
## Remark
我们发现，焦距的物理意义是无限远物体的像距。因此焦距是带符号的。

我们还可以研究物体在垂直于optical axis的方向上放大了多少倍。

>[! Definition 2]
>Define the (transverse) magnification: 
>$$m= \frac{h_{i}}{h_{o}}$$
>where $h_{i},h_{o}$ are the signed transverse heights.
## Remark
1). 此处transverse指的是垂直于optical axis的方向。
2). Signed height的sign取正，如果和物体同向。反之取负。

因此考虑一个垂直于optical axis的，足够矮的物体，以至于物体发出的光能使用傍轴近似。

![[Pasted image 20250907232910.png|300]]

在傍轴近似下，物体能够成像。由[[Pedrottis' introduction to optics|proposition 3.7.1]]，因为物体上任何物点的物距都一样，所以它们conjugate的像点的相距也一样。因此像也是垂直于optical axis。

因为像垂直于optical axis，是一条直线，我们只需要考虑物点的首尾conjugate的像点就可以画出像了。

我们令物体首发出两束光，以确定其conjugate的像点。为了方便，令其中一束光经过vertex。再令物体尾发出一束光经过vertex。我们不需要第二束光来确定物体尾conjugate的像点，因为它一定在物体首conjugate的像点与optical axis的垂线上。

由几何关系，结合物，像距符号的convention，我们得到magnification：
$$m= -\frac{s^{'}}{s}$$
>[! Proposition 2]
>Consider a reflective surface under paraxial approximation. Its magnification is:
>$$m= - \frac{s_{i}}{s_{o}}$$

