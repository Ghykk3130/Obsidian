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

>[! Convention]
>- 对于物点，像点，若为实，则与vertex的距离为正。若为虚，则与vertex的距离为负。
>- 对于反射面，若曲率中心在入射光同侧，即concave，则曲率半径为负。若曲率中心在入射光对侧，即concave，则曲率半径为正。

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

# 3.8 Refraction at a spherical surface

和3.7中一样，我们希望建立物距，相距，以及折射面曲率半径之间的关系。

令物点为$O$，像点为$I$。我们通过物点发出的两束光确定像点。令一束光通过vertex，一束光不通过vertex。显然在这种情况下成虚像。我们考虑傍轴近似。
![[Pasted image 20250909192255.png|500]]

我们有：
$$\begin{align}
s^{'} & = \frac{h}{\tan \alpha^{'}} \\
\end{align}$$
而$\alpha^{'}=\phi+\theta_{2}$。我们很清楚$\phi$应当如何描述：
$$\begin{align}
\phi \approx &\tan \phi \approx \frac{h}{R}
\end{align}$$
接下来我们来描述$\theta_{2}$。我们知道$\theta_{2}$和$\theta_{1}$之间的关系：
$$n_{1}\sin\theta_{1}=n_{2}\sin \theta_{2}\implies n_{1}\theta_{1}=n_{2}\theta_{2}$$
而我们知道$\theta_{1}$如何描述：
$$\begin{align}
\tan \theta_{1} & =\tan (\alpha-\phi) \\
 & =\frac{\tan \alpha-\tan \phi}{1+\tan \alpha \tan \phi} \\
 & = \frac{ \frac{h}{s}- \frac{h}{R}}{1+ \frac{h^{2}}{sR}} \\
 & \approx \frac{h}{s}- \frac{h}{R}
\end{align}$$
于是我们有：
$$\begin{align}
\theta_{2}  & = \frac{n_{1}}{n_{2}}\theta_{1} \\
 &  \approx  \frac{n_{1}}{n_{2}}\tan \theta_{1} \\
 & = \frac{n_{1}}{n_{2}}\left(  \frac{h}{s}- \frac{h}{R} \right)
\end{align}$$
于是接下来：
$$\begin{align}
\tan \alpha^{'} & = \frac{\tan \phi+ \tan \theta_{2}}{1-\tan \phi \tan \theta_{2}} \\
 & \approx \frac{ \frac{h}{R}+ \frac{n_{1}}{n_{1}}\left(  \frac{h}{s}- \frac{h}{R} \right)}{1- \frac{h}{R} \frac{n_{2}}{n_{1}}\left(  \frac{h}{s}- \frac{h}{R} \right)} \\
 & = \frac{ \frac{n_{1}}{n_{2}} \frac{R-s}{sR} \frac{h}{R}}{1-  \frac{n_{1}}{n_{2}} \frac{/R-s}{sR} \frac{h^{2}}{R}} \\
 &  \approx \frac{n_{1}}{n_{2}} \frac{R-s}{sR}h+ \frac{h}{R}
\end{align}$$
于是接下来：
$$\begin{align}
s^{'} & = \frac{h}{\tan \alpha^{'} \\
} \\
\implies &  \frac{n_{1}}{s}- \frac{n_{2}}{s^{'}}= \frac{n_{1}-n_{2}}{R}
\end{align}$$
我们采用和3.6一样的符号convention。因为像为虚像，所以像距为负。又因为曲面曲率中心在光入射的方向，所以曲率半径为负。于是修改符号后得到：

>[! Proposition 1]
>Assume the light comes from a medium $n_{1}$, and goes in to a medium $n_{2}$. For a refractive surface with curvature radius $R$ under paraxial approximation, together with an object and its conjugate image, the following equation is satisfied:
>$$\frac{n_{1}}{s}+ \frac{n_{2}}{s^{'}}= \frac{n_{2}-n_{1}}{R}$$

同样地，我们可以考虑transverse magnification。
![[Pasted image 20250909194940.png|500]]

为了考虑transversee magnification，我们考虑一个垂直于光轴的物体。同样我们认为物体足够矮，以致于所有的物点都具有同样地像距。于是我们只需要确定物体像的首尾就可以画出像。令物体首发出两束光。为了简便，一束垂直于球面，另一束经过vertex。令物体尾发出一束光进经过vertex。因为像距一样，物体尾像应该处在物体首像与光轴的垂线上。那么由几何关系可得：
$$ \begin{align}
\frac{h_{i}}{s^{'}-R} & = \frac{h_{o}}{s+R} \\
\end{align}$$
用方程$\frac{n_{1}}{s}+ \frac{n_{2}}{s^{'}}= \frac{n_{2}-n_{1}}{R}$带入消元，我们最后得到：
$$\frac{h_{i}}{h_{o}}= \frac{s^{'}}{s} \frac{n_{1}}{n_{2}}$$
我们adopt magnification的sign convention，得到：
$$m= - \frac{s^{'}}{s} \frac{n_{1}}{n_{2}}$$
>[! Proposition 2]
>Consider a reflective surface under paraxial approximation. Its magnification is:
>$$m = - \frac{s^{'}}{s} \frac{n_{1}}{n_{2}}$$

## Ex: Thick lens

考虑两个反射面，曲率半径都为$30cm$，一个convex，一个convace。先暂时忽略途中lens的厚度。
![[Pasted image 20250909200116.png|600]]

则第一个折射面成像为：
$$\frac{n_{1}}{s_{1}}+ \frac{n_{2}}{s_{2}}= \frac{n_{2}-n_{1}}{R}$$
解得：$s_{2}=40cm$

为了考虑第二个折射面成像，必须引入虚物点的概念。若光沿着成第一个折射面像点的路径入射，会被第二个折射面汇聚形成实像。我们反过来考虑光从第二个折射面像点出射，然后在第一个折射面像点处形成虚像。那么我们有：
$$\frac{n_{1}}{s_{3}}- \frac{n_{2}}{s_{2}}= \frac{n_{2}-n_{1}}{R}$$
我们rearrange一下：
$$\frac{n_{2}}{-s_{2}}+ \frac{n_{1}}{s_{3}}= \frac{n_{1}-n_{2}}{-R}$$
这就相当于光从物距为$-s_{2}$处的物体发出，然后在$s_{3}$处成像。这就相当于，将第一个折射面的像点当作第二个折射面的物点，只不过这个物点是“虚”的，因此物距取负。

现在考虑lens的厚度。则第一个折射面像到第二个折射面的距离为：$40-10=30cm$

考虑一个$30cm$处的虚物点。在第二个折射面有：
$$\frac{n_{2}}{-30}+ \frac{n_{1}}{s_{3}}= \frac{n_{1}-n_{2}}{-R}$$
解得：$s_{3}=9cm$。于是最终像为实像，且距离第二个折射面$9cm$。

我们还可以考虑overall magnification：
$$m_{1}= - \frac{s_{2}}{s_{1}} \frac{n_{1}}{n_{2}}=-1，m_{1}= - \frac{s_{3}}{-30} \frac{n_{2}}{n_{1}}= \frac{2}{5},m=m_{1}m_{2}=- \frac{2}{5}$$

## Remark
关于将第一个折射面的像点当做第二个折射面的物点，对于薄透镜来说有以下规律：
- 虚像点对应实物点。
- 实像点对应虚物点。
注意这对于厚透镜不一定成立。对于厚透镜来说（若光从左侧射入光具组）：
- 若第一个折射面像点在第二个折射面左侧，当做实物点。
- 若第一个折射面像点在第二个折射面右侧，当做虚物点。
注意到厚透镜的规律是薄透镜规律的generalization。

>[!Idea 1]
这些规律通过上面的推导是显然的。因为若光在第二个折射面之前汇聚了，时间反演后仍然会在第二个折射面之前汇聚，所以会被当做实像。再时间反演一次，就会被当做实物。若光在第二个折射面之后汇聚，则时间反演之后，反向延长线会在第二个折射面之后汇聚，所以被当做虚像。再时间反演一次，会被当做虚物。

^idea381

![[15ad46b53bb104f65a10a1af508f01c7.jpg|500]]


# 3.9 Thin lenses

考虑薄透镜。则在第一个和第二个折射面我们有：
$$\begin{align}
 & \frac{n_{1}}{s_{1}}+ \frac{n_{2}}{s_{1}^{'}}= \frac{n_{2}-n_{2}}{R_{1}} \\
 & \frac{n_{2}}{s_{2}}+ \frac{n_{1}}{s_{2}^{'}}= \frac{n_{1}-n_{2}}{R_{2}}
\end{align}$$
因为是薄透镜，所以我们有：
$$s_{2}=-s_{1}^{‘}$$
带入后将两式相加得到：

>[! Proposition 1 (lensmaker equation)]
>Consider a thin lens. The material of the lens has a refractive index $n_{2}$, the surrounding medium has a refractive index $n_{1}$. The signed radius of curvatures for are $R_{1},R_{2}$. Then:
>$$\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{n_{2}-n_{1}}{n_{1}}\left(  \frac{1}{R_{1}}- \frac{1}{R_{2}} \right)$$


令物距$s_{1}$为$\infty$，将对应的像距提取出来定义为焦距。于是：

>[! Definition 1]
>The focal length of a thin lens is defined as:
>$$f= \left(  \frac{n_{2}-n_{1}}{n_{1}}\left(  \frac{1}{R_{1}}- \frac{1}{R_{2}} \right) \right)^{-1}$$
>where $n_{1},n_{2}$ are the refractive indices of the lens and the surrounding medium. $R_{1},R_{2}$ are the radii of curvature.

于是我们可以得到：

$$\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f}$$
我们可以计算magnification：
$$\begin{align}
 & m_{1}= - \frac{s_{1}^{'}}{s_{1}} \frac{n_{1 }}{n_{2}} \\
 &  m_{2}= - \frac{s_{2}^{'}}{s_{2}} \frac{n_{2}}{n_{1}}= \frac{s_{2}^{'}}{s_{1}^{'}} \frac{n_{2}}{n_{1}} \\
\implies  & m=m_{1}m_{2}= -\frac{s_{2}^{'}}{s_{1}}
\end{align}$$
>[! Proposition 2]
>The overall transverse magnification through a thin lens is:
>$$m= - \frac{s_{2}^{'}}{s_{1}}$$

![[Pasted image 20250909222633.png|600]]

# 3.10 Vergence and refractive power

我们从另一个视角解读方程$\frac{1}{s}+ \frac{1}{s^{'}}= \frac{1}{f}$。

物点发出的球面波经过薄透镜，球面波波前的曲率被改变了。这是因为光穿过透镜时，在透镜中个个部分光程不一样。这就导致光从透镜穿出时波前是变形的。

我们发现，$s$是物点发出的球面波的波前在薄透镜处的曲率半径，$s^{'}$是球面波刚穿过薄透镜时波前的曲率半径。显然物点是透镜前球面波的曲率中心，像点是透镜后球面波的曲率中心。这是因为在物点和像点，光线汇聚，波前缩成一个点。而波前在同一介质中是球面对称的，所以缩成的点必为球心。

我们将这两个波前对应的曲率作单独的定义：

>[! Definition 1]
>Define the vergence of the source and image as:
>$$V= \frac{1}{s}, V^{'}= \frac{1}{s^{'}}$$

>[! Definition 2]
>Define the refractive power of a thin lens as:
>$$P= \frac{1}{f}$$

于是我们发现，波前曲率的改变由refractive power决定：

>[!Proposition 1]
>$$V+V^{'}=P$$

将多个薄透镜放在一起，总体的refractive power是每个透镜的refractive power相加。这是因为：

考虑两个薄透镜放在一起。则：
$$\begin{align}
 & \frac{1}{s_{1}}+ \frac{1}{s_{1}^{'}}= \frac{1}{f_{1}} \\
 &  \frac{1}{s_{2}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{2}}
\end{align}$$
由[[Pedrottis' introduction to optics#^05ee05|idea 3.8.1]]，我们知道：
$$s_{2}= - s_{1}^{'}$$
于是两式相加得到：
$$\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{1}}+ \frac{1}{f_{2}}= \frac{1}{f}$$
所以自然有：
$$P=P_{1}+P_{2}$$
## Remark
我们注意到，薄透镜叠加的顺序是不重要的。无论是透镜1放在透镜2前面，还是透镜2放在透镜1前面，上式都不会改变，且都有：$V+V^{'}=P$。

>[!Proposition 2]
>For thin lenses with refractive powers $P_{1},P_{2},\dots,P_{N}$ placed together, the equivalence refractive power is:
>$$P=P_{1}+\dots+P_{N}$$

# 3.11 Newtonian equation

我们除了表示物距，相距，焦距之间的关系，我们还可以表示物点到左焦点距离，像点到右焦点距离，以及焦距之间的关系。
![[Pasted image 20250909231225.png|600]]

显然我们有：
$$\begin{align}
 &  \frac{h_{o}}{h_{i}}= \frac{x}{f}, \frac{h_{o}}{h_{i}}= \frac{f}{x^{'}} \\
\implies &  x x^{'}=f^{2}
\end{align}$$

# 4.4 $\sim$ 4.6 ABCD matrix

考虑一个azimuthal symmetric的光学系统。考虑傍轴近似。则光学系统中取一个垂直光轴的平面，穿过平面上某点的一束光线由光线方向，光线距离轴的距离，两个参数描述。记为$\begin{pmatrix}y \\ \alpha\end{pmatrix}$

Convention：光线若向光轴以上方向传播，则$\alpha$为正。反之则为负。
## Translation

考虑光线在同一介质中沿直线传播。取两个相距$L$的平面。
<div style="text-align:center">
<img src="Pasted image 20250913184240.png" width="300">
</div>
则两平面上同一光线显然满足：
$$\begin{align}
 & y_{1}=L\alpha_{0}+y_{0} \\
 & \alpha_{1}=\alpha_{0}+0
\end{align}$$
于是对应的ABCD矩阵为：
$$\begin{pmatrix}
1 & L \\
0 & 1
\end{pmatrix}$$
## Refraction

考虑光线通过一个spherical refractor。设光线通过球面上某点。在两种介质中的该点取两个平面观察光线。注意到这两个平面几何上是重合的。
<div style="text-align:center">
<img src="Pasted image 20250913184655.png" width="300">
</div>
于是显然有：
$$\begin{align}
 & y^{'}=y \\
 & (\alpha^{'}+\phi )n^{'}=(\alpha+\phi)n \\
 & \phi=\frac{y}{R}
\end{align}$$
这里需要注意我们的sign convention不能错。接下来解得：
$$\begin{align}
 & y^{'}=y \\
 & \alpha^{'}= \frac{n}{n^{'}}\alpha+(  \frac{n}{n^{'}} -1  
)\frac{y}{R}
\end{align}$$
于是对应的ABCD matrix为：
$$\begin{pmatrix}
1 & 0 \\
\frac{1}{R}\left(  \frac{n}{n^{'}}-1 \right) &  \frac{n}{n^{'}}
\end{pmatrix}$$
## Reflection

考虑光线通过一个spherical reflector。取光线与球面交点，作两个观察平面。一个观察reflection之前的光，一个观察reflection之后的光。
<div style="text-align:center">
<img src="Pasted image 20250913185841.png" width="350">
</div>
同样注意sign convention。我们有：
$$\begin{align}
 & y^{'}=y \\
 & \alpha-\phi=\alpha^{'}+\phi \\
 & \phi= \frac{y}{-R}
\end{align}$$
解得：
$$\begin{align}
 & y^{'}=y  \\
 & \alpha^{'}=\alpha+ \frac{2y}{R}
\end{align}$$
于是对应的ABCD矩阵为：
$$\begin{pmatrix}
1 & 0 \\
\frac{2}{R} & 1
\end{pmatrix}$$
我们注意到上面三种情况有以下规律：

>[!Proposition 1]
>Consider an ABCD matrix $M$. The refractive indices of the final and initial media are given by:
>$$\det M= \frac{n_{i}}{n_{f}}$$

## Thick lens

我们考虑如下情况。
<div style="text-align:center">
<img src="Pasted image 20250913190654.png" width="300">
</div>
取光线与第一个surface还有第二个surface的交点，分别作input plane和output plane。则联系这两平面上矢量$\begin{pmatrix}y \\ \alpha \end{pmatrix}$的变换显然是：
$$M=\begin{pmatrix}
1 & 0 \\
\frac{1}{R_{2}}\left(  \frac{n_{L}}{n^{'}}-1 \right) & 1
\end{pmatrix}\begin{pmatrix}
1 & t \\
0 & 1
\end{pmatrix}\begin{pmatrix}
1 & 0 \\
\frac{1}{R_{1}}\left(  \frac{n}{n_{L}}-1 \right) & 0
\end{pmatrix}$$
注意到，因为$\det(AB)=\det A\det B$，所以我们同样有：
$$\det M=\frac{n}{n^{'}}$$

我们可以利用ABCD矩阵找到某物或像通过光具组的conjugate。令$M=\begin{pmatrix}A & B \\ C & D\end{pmatrix}$
若给定object plane上物点$y$，考虑该物点发出的一束光$\begin{pmatrix}y  \\ \alpha\end{pmatrix}$。则在image plane上，该光线为:
$$\begin{pmatrix}
y^{'} \\
\alpha^{'}
\end{pmatrix}= \begin{pmatrix}
A & B \\
C & D
\end{pmatrix}\begin{pmatrix}
y  \\
\alpha
\end{pmatrix}$$
我们希望$y^{'}$是一个定值$\forall \alpha$。于是必须有：
$$B=0$$
据此可以计算出像点。注意ABCD矩阵包含了像距的信息。在光通过最后一个光学器件后，还要被translate到image plane的矩阵作用。所以解$B=0$会给出image plane的位置。

# 4.7 Cardinal points

 首先考虑一个光具组。定义六个点：
 1. 两个焦点。光从光具组两侧平行入射后与光轴的交点。
 2. 两个principal points。光从焦点出射。定义光具组前该光线和光具组后该光线的交点为principal points。因为有两个焦点所以有两个principal points。
 3. 两个nodal points。光轴上某点以至于光向该点入射，会平行地出射。出射光与光轴的交点显然为第二个nodal point。

这六个点的位置可由ABCD矩阵完全表示。我们用这些点相对于某些平面的位置来描述这些点。我们作如下sign convention：从某平面向光线前进方向测量的距离为正，反之则为负。

<div style="text-align:center">
<img src="Pasted image 20250913204535.png" width="400">
</div>
令$F_{1},F_{2}$为两个焦点，$H_{1},H_{2}$为两个principal points，$N_{1},N_{2}$为两个nodal points。这些点之间的相对距离已在图上标出。

我们先来看焦点。为此，先做如下命题：

>[! Proposition 1]
>Under paraxial approximation, the rays coming out from an arbitrary point on the focal plane would be directed parallel.
## Proof.
因为是傍轴近似，焦平面上一点几乎就在光轴上。我们知道该点成像一定在无穷远处。所以从光具组出射的光不能再有限的位置交汇，自然是平行光。
>[! Right]
>$\blacksquare$

我们取过$F_{1}$焦平面，output plane两个平面。这两个平面之间的ABCD矩阵为：
$$\begin{pmatrix}
A & B \\
C & D
\end{pmatrix}\begin{pmatrix}
1 & -p \\
0 & 1
\end{pmatrix}= \begin{pmatrix}
A & -pA+B \\
C & -pC+D
\end{pmatrix}$$
我们希望任意从焦平面出射的光$\begin{pmatrix}y  \\ \alpha\end{pmatrix}$，最终都平行。即want $\begin{pmatrix}y^{'} \\ \alpha^{'}\end{pmatrix}$ such that $\alpha^{'}$ is independent from $\alpha$。我们有：
$$\begin{pmatrix}
y^{'} \\
\alpha^{'}
\end{pmatrix}=\begin{pmatrix}
A & -pA+B \\
C & -pC+D
\end{pmatrix}\begin{pmatrix}
y \\
\alpha
\end{pmatrix}$$
于是$-pC+D=0\implies p= \frac{D}{C}$


为了找到$q$，我们取input plane，second focal plane两个平面之间的ABCD矩阵：
$$\begin{pmatrix}
1 & q  \\
0 & 1
\end{pmatrix}\begin{pmatrix}
A & B \\
C & D
\end{pmatrix}=\begin{pmatrix}
A+qC & B+qD \\
C & D
\end{pmatrix}$$
我们要求：当入射光为平行光，$\alpha=\text{const.}$，$y^{'}$ is independent from $y$。于是：
$$A+qC=0\implies q= - \frac{A}{C}$$

接下来找$f_{1},f_{2}$。注意在sign convention下，图中$f_{1}<0$。它是$F_{1}$到principal plane的距离。principal point定义，我们找$F_{1}$射出光线在object space与该光线在imga space的交点。显然，该光线在image space为：
$$\begin{align}
 & \begin{pmatrix}
y^{'} \\
\alpha^{'}
\end{pmatrix}=\begin{pmatrix}
A & B \\
C & D
\end{pmatrix}\begin{pmatrix}
1 & -p \\
0 & 1\end{pmatrix}\begin{pmatrix}
0  \\
\alpha
\end{pmatrix} \\
 & \text{with } p= \frac{D}{C} \\
\implies & y^{'}= \alpha\frac{BC-DA}{C}=- \alpha\frac{\det M}{C}
\end{align}$$
将其除以$\tan \alpha=\alpha$显然可以得到$-f_{1}$。于是：
$$f_{1}= \frac{\det M}{C}= \frac{n_{i}}{n_{f}} \frac{1}{C}$$

若入射光平行于光轴，则：
$$\begin{align}
 & \begin{pmatrix}
y^{'} \\
\alpha^{'}
\end{pmatrix}= \begin{pmatrix}
1 & q \\
0 & 1
\end{pmatrix}\begin{pmatrix}
A & B  \\
C & D
\end{pmatrix}\begin{pmatrix}
y \\
0
\end{pmatrix} \\
 & \text{with }q=- \frac{A}{C} \\
\implies & \alpha=Cy
\end{align}$$
于是：
$$f_{2}=- \frac{y}{Cy}= - \frac{1}{C}$$
那么$r, s$便很容易找到了：
$$\begin{align}
 & r=-f_{1}-(-p)= \frac{D- \frac{n_{i}}{n_{f}}}{C} \\
 & s=-(f_{2}-q)=\frac{1-A}{C}
\end{align}$$

接下来找$v,w$。我们考虑：
$$\begin{align}
 & \begin{pmatrix}
y^{'} \\
\alpha^{'}
\end{pmatrix}= \begin{pmatrix}
A & B \\
C & D
\end{pmatrix}\begin{pmatrix}
y \\
\alpha
\end{pmatrix} \\
 & \text{with } \alpha^{'}=\alpha,\ \frac{y}{\alpha}=\text{const.} \\
\implies & Cy+D\alpha=\alpha,\text{const.}= \frac{1-D}{C}  \\
\implies & v= - \frac{y}{\alpha}= \frac{1-D}{C}
\end{align}$$
同时：
$$\begin{align}
w=- \frac{y^{'}}{\alpha^{'}}= \frac{\det M-A}{C}= \frac{ \frac{n_{i}}{n_{f}}-A }{C}
\end{align}$$
<div style="text-align:center">
<img src="Pasted image 20250913220433.png" width="400">
</div>

注意到：
1. 若$n_{i}=n_{f}$，则nodal points和principal points重合。
2. 若$n_{i}=n_{f}$，则焦点到principal points的距离大小相同。
3. nodal points间间距等于principal points间间距。

# 6.1 Stops

考虑一个光具组。光具组中每个元件都有边缘，都有可能造成从上一个光具组传来的光线不能完全进入这个光具组。那么是否存在一个元件，以至于一旦光线可以穿过这个元件，那么光线也穿过其它所有的元件？

我们考虑物空间中所有元件的像。若物点发出的光线朝着某元件的像上的某一点射出，那么最终在不考虑其它元件的情况下，该光线一定会到达该元件上同一点。

只要物点发出光线与任何一个元件边缘的像相交，那么就必然会被这个元件边缘阻拦。因此应当找所有不被阻拦的光线的最大集合。显然就应当找所有元件中，物空间中像的张角最小的。我们定义：

>[! Definition 1]
>Consider the images of potential stops of an optical system in the object space. The stop whose image subtends the smallest angle as seen from the object point is the aperture stop.

>[!Definition 2]
>Define the image of the aperture stop in the object space as the entrance pupil, the image of the aperture stop in the image space as the exit pupil.

>[!Definition 3]
>Define the ray from an object point that actually passes through the axial point of the aperture stop as the chief ray.

只有一个光学元件的光具组是无法产生clipping的。因为物体上任意一点都存在一条光线通过光具组。但一旦加上另一个光学元件，物体上就可能存在一点以至于所有该点发出光线都无法通过光具组。

上面的aperture stop就相当于这第一个光学元件。我们来决定这第二个可以产生clipping的光学元件是什么。称这为field stop。我们考虑物点发出一束光线真实地通过aperture stop。那么显然最有可能clip这个光线的光学元件边缘就是field stop。

这就相当于在aperture stop所在空间中，看各个光学元件的成像。其中成像张角最小的光学元件边缘为field stop。

>[!Definition 4]
>Consider the images of potential stops of an optical system in the aperture stop space. The stop whose image subtends the smallest angle as seen from the axial point of the aperture stop is the field stop.


