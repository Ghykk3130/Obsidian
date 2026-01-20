
# 1. Skyrmion的概念

我们用$\hat{n}=(\sin \Theta \cos \Phi,\sin\Theta \sin \Phi,\cos\Theta)$来描述各点的spin。一般定义在$\mathbb{R}^{2}$上。考虑skyrmion为这样一种$\hat{n}$的矢量场：
- 在$r\rightarrow \infty$时，$\Theta=0$，在$r\rightarrow 0$时，$\Theta=\pi$
- skyrmion在$x,y$面上投影是球对称的。

所以$\Theta=\Theta(r),\Phi=\Phi(\phi)$。定义vorticity $m= \frac{1}{2\pi}[\Phi(\phi)]^{2\pi}_{0}$。即转一圈下来，$\Phi$变化多少。显然$\Phi (\text{ mod }2\pi)=0$。所以$m\in \mathbb{Z}$。另外定义helicity $\gamma=\Phi-m\phi$。这两个参数可以给skyrmion分类。
## Ex：
![[Pasted image 20260120002933.png|center|800]]

例如第一行第二个，$\Phi=\phi+\pi$。所以$m=1,\gamma=\pi$。

# 2. DM作用

考虑两个site上有两个spin。一个电子在这两个site之间跳跃。若不考虑电子自身LS耦合，可以计算体系能量为$J\vec{S}_{1}\cdot \vec{S}_{2}$为Heisenberg exchange。

若考虑电子自身LS耦合，可以计算出额外能量$\vec{D}\cdot(\vec{S}_{1}\times \vec{S}_{2})$称为DM interaction。显然比Heisenberg exchange弱。

在spin texture中，可以计算近距离spin间的DM interaction：
$$\begin{align}
\vec{D}_{ij}\cdot(\vec{S}_{i}\times \vec{S}_{j} ) & = \vec{D}\cdot(\hat{n}\times(\hat{n}+\delta \vec{r}\cdot \nabla \hat{n})) \\
 & = \vec{D}\cdot(\hat{n}\times(\delta \vec{r}\cdot \nabla \hat{n}))
\end{align}$$
其中，$\hat{n}$对应$\vec{S}_{i}$，而通过近距离泰勒展开得到附近的spin $\vec{S}_{j}=\delta \vec{r}\cdot \nabla \hat{n}$。注意，$\delta \vec{r}$只能取一个lattice point到邻近的lattice point的矢量。某些情况下有$\vec{D}=D  \hat{\delta r}$。所以在立方晶系中，若令lattice parameter为$a$，则$\delta \vec{r}=a\hat{x},a\hat{y},\text{or }a\hat{z}$。所以设$\delta \vec{r}=ae_{\mu}$：
$$\begin{align}
\text{DM interaction} & = D  \hat{\delta r} \cdot(\hat{n}\times(\delta \vec{r}\cdot \nabla \hat{n})) \\
 & = D  \hat{\delta r}_{i}  \epsilon_{ijk} \hat{n}_{j}\delta r_{l}\partial_{l}\hat{n}_{k} \\
 & = D\delta_{i\mu}\epsilon_{ijk}\hat{n}_{j}\delta_{l\mu}\partial_{l}\hat{n}_{k} \\
 & = D\epsilon_{\mu jk}\hat{n}_{j}\partial_{\mu}\hat{n}_{k} \\
 & = -D\hat{n}\cdot(\nabla \times \hat{n})
\end{align}$$
将符号吸收进常数得到$D\hat{n}\cdot(\nabla \times \hat{n})$。

在skyrmion体系中，可以计算得到：
$$H_{DM}=D\sin((m-1)\phi+\gamma)\left(  \frac{d\Theta}{dr}+ \frac{m}{2r}\sin{2}\Theta \right)$$
可见$m=1,\gamma= \pm\frac{\pi}{2}$体系有DM能量极值。

# 3. Berry curvature

考虑localized波函数：
$$\ket{\chi}= \begin{pmatrix}
\cos \frac{\Theta}{2} \\
e^{i\Phi}\sin \frac{\Theta}{2}
\end{pmatrix} $$
可以由$\vec{r}=r\cos\Theta \hat{x}+r\sin\Theta \hat{y}$引出一个Berry curvature。

可以证明，real-space Berry curvature对semiclassical EOM的修正为：
$$\hbar\dot{\vec{k}}=\vec{F}+\hbar \vec{v}\times \vec{\Omega}$$
生成一个等效磁场。容易计算若位移方向为

