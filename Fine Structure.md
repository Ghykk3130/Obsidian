# Big picture

在初量的氢原子模型中，有两个主要的误差来源（当然还有其他的）：1）相对论下，动能项不再是$\frac{p^{2}}{2m}$。2）lab frame下的电场在电子系中变换为磁场，与电子这个磁偶极子相互作用，使得Hamiltonian需要添加一些项。

# 动能项修正
>[! Idea]
>一般推导Hamiltonian的方法：我们先经典地写出Hamiltonian，再量子化。

若不考虑相对论效应，动能为$\frac{1}{2}mv^{2}= \frac{p^{2}}{2m}$。

若考虑相对论效应，动能为$\gamma mc^{2}-mc^{2}$。我们希望更精确地近似这个相对论动能，例如近似到二阶。
## 一个错误的思路
$K=\gamma mc^{2}-mc^{2}= \frac{1}{\sqrt{ 1-\beta^{2} }}mc^{2}-mc^{2} \simeq \left( 1+ \frac{1}{2}\beta^{2}- \frac{3}{8}\beta^{4} \right)mc^{2}-mc^{2} = \frac{1}{2}\beta^{2}mc^{2}- \frac{3}{8}\beta^{4}mc^{2}$

我们最终这样做的话，我们发现没办法顺利化成动量$p$的函数。注意这里要用的动量不再是非相对论的$mv$而是相对论的$\gamma mv$。你尝试带入这个动量就会发现$\gamma$中含有的速度项又没法化成动量。所以我们需要一个直接完全是动量的函数的式子来表达动能，再作近似。

## 正确的思路
$K=\gamma mc^{2}-mc^{2}=\sqrt{ m^{2}c^{4}+p^{2}c^{2} }-mc^{2}$ 这显然完全是一个动量的函数。于是：

$K=mc^{2}\sqrt{ 1+ \frac{p^{2}}{m^{2}c^{2}} }-mc^{2} \simeq mc^{2}\left( 1+ \frac{p^{2}}{2m^{2}c^{2}}- \frac{1}{8} \frac{p^4}{m^4c^4} \right)-mc^{2}= \frac{p^{2}}{2m}- \frac{1}{8} \frac{p^4}{m^{3}c^{2}}$

## Energy correction
这相当于引入一个微扰$\lambda \frac{1}{8} \frac{p^4}{m^{3}c^{2}}, \lambda=1$。一般情况下，fix $n$, 将会有许多$\ket{l,s,m_{l},m_{s}}$与之对应。所以这是一个degenerate perturbation。为什么要固定$n$呢？因为没微扰时，固定$n$，所有相应的态能量都一样的。我们是从此开始微扰的。

所以我们想要对角化$\bra{n,l^{'},s^{'},m_{l}^{'},m_{s}^{'}} \frac{1}{8} \frac{p^4}{m^{3}c^{2}}\ket{n,l,s,m_{l},m_{s}}$。

但这显然已经对角化了，因为$\ket{l,s,m_{l},m_{s}}$是算子$L_{z}$的本征态。$p^{4}$为标量算子$\implies$$[p^{4},\vec{L}]=0\implies[p^4,L_{z}]=0,[p^4,L^{2}]=0$
### Caveat
你不能直接说任取一组$L_{z},L^{2}$的特征基，就可以使$p^4$对角化。因为只是存在一组基同时对角化，而不是任取一组基就能同时对角化。况且使得$p^4,L_{z}$与$p^4,L^{2}$同时对角化的特征基还不一定一样。所以宣称$\ket{n,l,s,m_{l},m_{s}}$能将$p^4$对角化是没有道理的。


我们要更精细地论证。$[p^4,L_{z}]=0,[p^4,L^{2}]=0\implies$$L_{z},L^{2}$的特征子空间是$p^4$的不变子空间。
$L_{z},L^{2}$的共同特征子空间的ket为$\ket{l,m_{l}}$。但是这是degenerate的，因为实际上我们没有考虑$\ket{n,l,s,m_{l},m_{s}}$中的$n,s,m_{s}$。我们仅仅知道$p^4$作用在$\ket{n,l,s,m_{l},m_{s}}$上不会改变$l,m_{l}$以至于跳出$L^{2},L_{z}$的特征子空间。并且，$p^4$作用在$\ket{n,l,s,m_{l},m_{s}}$上也不会改变$m_{s}$。于是：

$p^4\ket{n,l,s,m_{l},m_{s}}=\text{a linear combination of }\ket{n^{'},l,s,m_{l},m_{s}}$ with $l,s,m_{l}$ fixed. (这里$s$没变是因为$s$只能取$\frac{1}{2}$。)

所以矩阵元$\bra{n^{''},l^{''},s^{''},m_{l}^{''},m_{s}^{''}}p^4\ket{n,l,s,m_{l},m_{s}}$只有$l^{''}=l,s^{''}=s,m_{l}^{''}=m_{l},m_{s}=m_{s}^{''}$时是非零的。

而考虑微扰时，我们已经固定$n$了，因为我们考虑的是对某个特定的能级$n$的所有degenerate的态进行微扰。所以不妨令$n^{''}=n$。

$\implies$$\bra{n,l^{''},s^{''},m_{l}^{''},m_{s}^{''}} \frac{1}{8} \frac{p^4}{m^{3}c^{2}}\ket{n,l,s,m_{l},m_{s}}$已经“对角化”。

所以first order energy correction就是特征值，也就是对角线上的元素，也就是$\bra{n,l,s,m_{l},m_{s}} \frac{1}{8} \frac{p^4}{m^{3}c^{2}}\ket{n,l,s,m_{l},m_{s}}=E_{n}^{(0)}\left(  \frac{Z^{2}\alpha^{2}}{n^{2}} \left( - \frac{3}{4}+ \frac{n}{l+ \frac{1}{2}} \right)\right)$

>[! Proposition 1]
>The first-order energy correction due to relativistic correction in kinetic energy is
>$E_{n}^{(0)}\left(  \frac{Z^{2}\alpha^{2}}{n^{2}}\left( - \frac{3}{4} + \frac{n}{l+ \frac{1}{2}} \right) \right)$

# Spin-orbit interaction

原子内的电场在电子系中变换为磁场，和电子的磁偶极矩产生作用。

原子的电场为$\vec{E}=- \frac{1}{|e|} \nabla V$ , where $V$ is the scalar potential energy.

Spherical symmetry $\implies$ $\vec{E}= - \frac{1}{|e|} \frac{\partial V}{\partial r} \frac{\vec{r}}{r}$

于是在平动电子系中看到磁场为$\vec{B}=- \frac{\vec{v}}{c^{2}}\times \vec{E}= -\frac{\vec{L}}{mc^{2}} \frac{1}{|e|} \frac{1}{r} \frac{\partial V}{\partial r}$

[[Thomas进动]] $\implies$ $\text{perturbation }W= \frac{1}{2m^{2}c^{2}}\vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr}$

同样地，我们固定$n$。现在这是一个degenerate perturbation问题。但是$\vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr}$的表示在$\ket{n,l,s,j,m}$下已是对角化的，因为：

$\vec{L}\cdot \vec{S}\ket{n,l,s,j,m}= \frac{J^{2}-L^{2}-S^{2}}{2}\ket{n,l,s,j,m}= \frac{j(j+1)-l(l+1)-s(s+1)}{2}\hbar^{2}\ket{n,l,s,j,m}$ 
$\implies \vec{L}\cdot \vec{S} \text{ digonalized}$ （看不出来的话你往上面这个式子左乘一个$\bra{n,l^{'},s,j^{'},m^{'}}$试试）

$\bra{n,l^{'},s^{},j^{'},m^{'}} \frac{1}{r} \frac{dV}{dr} \ket{n,l,s,j,m}=\int dr d\theta d\phi r^{2}\sin \theta (R_{nl^{'}}\mathcal{Y}_{l^{'}}^{j^{'},m^{'}})^{*} \frac{1}{r} \frac{dV}{dr} R_{nl} \mathcal{Y}_{l}^{j,m}= \int dr r^{2} (R_{nl^{'}})^{*}R_{nl} \frac{1}{r} \frac{dV}{dr} \int d\theta d\phi \sin \theta (\mathcal{Y}_{l^{'}}^{j^{'},m^{'}})^{*} \mathcal{Y}_{l}^{j,m}$
vanishes unless $(j^{'},l^{'},m^{'})=(j,l,m)$ (c.f. [[Clebsch-Gordan系数#^f94e92]])

所以$\vec{L}\cdot \vec{S}, \frac{1}{r} \frac{dV}{dr}$的表示都是对角化的，它们相乘的表示自然是对角化的。

## Energy correction

能量修正就是$\frac{1}{2m^{2}c^{2}}\vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr}$表示对角线上的元素，也就是平均值$\frac{1}{2m^{2}c^{2}} \bra{n,l,s,j,m} \vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr} \ket{n,l,s,j,m}$。
我们有：
$$\begin{align}
\bra{n,l,s,j,m} \vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr} \ket{n,l,s,j,m}  & =\int dr d\theta d\phi r^{2} \sin \theta (R_{nl}\mathcal{Y}_{l}^{j,m})^{*}\vec{L} \cdot \vec{S} \frac{1}{r} \frac{dV}{dr} R_{nl}\mathcal{Y}_{l}^{j,m} \\
 & =\int dr r^{2} (R_{nl})^{*}R_{nl} \frac{1}{r} \frac{dV}{dr}\int d\theta d\phi \sin \theta (\mathcal{Y}_{l}^{j,m})^{*}\vec{L}\cdot \vec{S} \mathcal{Y}_{l}^{j,m} \\
 & = \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle  \int d\theta d\phi \sin \theta\frac{ j(j+1)\hbar^{2}-l(l+1)\hbar^{2}-s(s+1)\hbar^{2}}{2} |\mathcal{Y}_{l}^{j,m}|^{2},\text{ where $j=l \pm \frac{1}{2}$} \\ 
 &= \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle \frac{j(j+1)\hbar^{2}-l(l+1)\hbar^{2}-s(s+1)\hbar^{2}}{2}
\\ &= \frac{1}{2} \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle \left( \begin{cases}
\left( l+ \frac{1}{2} \right)\left( l+ \frac{1}{2} + 1 \right)\hbar^{2} \\
\left( l- \frac{1}{2} \right)\left( l- \frac{1}{2} +1\right)\hbar^{2}
\end{cases} -l(l+1)\hbar^{2}- \frac{3}{4} \hbar^{2}\right)\\ &=  \frac{1}{2} \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle \begin{cases}
l\hbar^{2} , j= l + \frac{1}{2}\\
-(l+1)\hbar^{2}, j= l- \frac{1}{2}
\end{cases}
\end{align}$$

所以能量修正为：
$$\frac{1}{2m^{2}c^{2}}\bra{n,l,s,j,m} \vec{L}\cdot \vec{S} \frac{1}{r} \frac{dV}{dr} \ket{n,l,s,j,m}= \frac{1}{2m^{2}c^{2}} \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle \frac{\hbar^{2}}{2} \begin{cases}
l,j= l+ \frac{1}{2} \\
-(l+1), j= l- \frac{1}{2}
\end{cases}$$

>[! Proposition 2 (lande interval rule)]
>The energy shift of level $\ket{n,l,s,j,m}$ due to LS interaction is $$\frac{1}{2m^{2}c^{2}} \left\langle  \frac{1}{r} \frac{dV}{dr}  \right\rangle \frac{\hbar^{2}}{2} \begin{cases}
l,j= l+ \frac{1}{2} \\
-(l+1), j= l- \frac{1}{2}
\end{cases}$$

## Remark

半经典的直觉：
若$\vec{L}$和$\vec{S}$是"aligned"的，即$j=l+ \frac{1}{2}$，那么电子系中的磁场就和$\vec{S}$ align。而$\vec{\mu}$和$\vec{S}$方向相反，所以磁场就和$\vec{\mu}$方向相反。这刚好对应的是能量较高的态。反之也可作类似推理。

