# 1. Bragg's formulation

将lattice plane当做镜面，入射波发生镜面反射。则仅仅在$2d\sin \theta=2\pi n$时可出现散射峰。

# 2. Laue's formulation
## 2.1 Geometric formulation

考虑放置在空间中的样品，在极远处的观测仪器。用平面波照射样品。假设平面波不能穿过样品，只能引起样品内电子的振动。而电子振动发出的球面波。由于在极远处观察，传播到观测点的波矢$\mathbf{k}^{'}$相互之间近乎于平行。

令照射的平面波phase为$e^{i\mathbf{k}\cdot \mathbf{r}}$。考虑两晶格点$1,2$，$\mathbf{r}_{1}-\mathbf{r}_{2}=\mathbf{r}$。
![[Drawing 2026-02-03 00.59.24.excalidraw|center|400]]
散射后，假设$\omega$不变，色散关系不变，那么波矢大小仍为$k$。显然$1$的path length多$\mathbf{r}\cdot \frac{\mathbf{k}}{k}- \mathbf{r}\cdot \frac{\mathbf{k}^{'}}{k}$。所以相位差为：
$$\Delta \phi=k\left( \mathbf{r}\cdot \frac{\mathbf{k}}{k}- \mathbf{r}\cdot \frac{\mathbf{k}^{'}}{k} \right)=\mathbf{r}\cdot(\mathbf{k}-\mathbf{k}^{'})=-\mathbf{r}\cdot \Delta \mathbf{k}$$
所以constructive interference条件为：
$$\mathbf{r}\cdot \Delta \mathbf{k}=2\pi n,\ \forall \mathbf{r}\in \Lambda \Leftrightarrow \Delta \mathbf{k}\in \Lambda ^{*}$$
>[!Success] Proposition 2.1.1 (Laue's condition)
>The peak corresponds to $\Delta \mathbf{k}=\mathbf{G}\in \Lambda ^{*}$
## Ex:

考虑入射波方向不变，观测方向不变。改变波长使得peak出现。这称为Laue法：
![[Pasted image 20260207162956.png|center|200]]
## Ex:

考虑入射波方向，波长不变。sample呈粉状，orientation随机。我们在一个圆周上观察peak是否出现。这称为powder X-ray diffraction：
![[Pasted image 20260207163200.png|center|200]]

我们可以得到Laue formulation和Bragg formulation的等价性。我们由Laue衍射条件推出Bragg衍射条件：

考虑$\Delta \mathbf{k}=\mathbf{G}\in \Lambda ^{*}$。那么考虑$\mathbf{G}$方向最短倒格矢$\tilde{\mathbf{G}}= \frac{\mathbf{G}}{n}$。我们发现，对于$\tilde{\mathbf{G}}$定义的晶面，有：
$$d= \frac{2\pi}{\tilde{G}}= \frac{2\pi n}{G}$$
令$\mathbf{k}$与$\tilde{\mathbf{G}}$定义的晶面夹角为$\theta$。那么：
$$2kd \sin \theta=2k \frac{2\pi n}{\Delta k}\sin \theta= 2k \frac{2\pi n}{2k\sin \theta}\sin \theta=2\pi n$$
再由Bragg衍射条件推出Laue条件：

定义$\Delta \mathbf{k}=\mathbf{k}^{'}-\mathbf{k}$。那么：
$$\begin{align}
\Delta \mathbf{k}\cdot \mathbf{R} & = md\Delta k= \frac{mn\pi }{k\sin \theta}\Delta k= \frac{mn\pi}{k\sin \theta} 2k\sin \theta=2mn\pi \implies \Delta \mathbf{k}\in \Lambda ^{*}
\end{align}$$
## 2.2 Quantitative formulation

考虑晶格点$\mathbf{r}$。假设散射后振幅$\propto n(\mathbf{r})\text{ local charge density}$。则在$\mathbf{r}_{0}$观察$\mathbf{r}$点产生的球面波。由于观测点在无限远处，球面波分母的距离衰减项对所有点都几乎一样。我们有：
$$\begin{align}
 & \psi_{\mathbf{r}}(\mathbf{r}_{0}) \propto n(\mathbf{r}) {e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}}  
\end{align}$$
其中，$\mathbf{k}\cdot \mathbf{r}$为平面波传播至$\mathbf{r}$的phase。$\delta$为从平面波传播到$\mathbf{r}$，到引起的电子振动的滞后产生的phase。$\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})$为球面波传播到$\mathbf{r}_{0}$产生的phase。由于lattice point环境都一样，可以假设$\delta$为常数。所以最后：
$$\begin{align}
\psi(\mathbf{r}_{0}) & \propto \int_{\text{sample}} d^{3}rn(\mathbf{r}) e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)} \approx \int_{\mathbb{R}^{3}}d^{3}rn(\mathbf{r})e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}
	\end{align}$$因为$\delta,\mathbf{r}_{0}$对于所有lattice point都一样，所以：
$$\psi(\mathbf{r}_{0})\propto \int_{\mathbb{R}^{3}}d^{3}r n(\mathbf{r})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}}$$
定义scattering amplitude：

>[!Note] Definition 2.2.1
>Define the scattering amplitude:
>$$F=\int_{\mathbb{R}^{3}}d^{3}rn(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}}$$

显然当$\Delta \mathbf{k}\in \Lambda ^{*}$时，所有phase都为零，形成constructive interference。
# 3. Structure factor, atomic form factor

我们知道$n(\mathbf{r})=n(\mathbf{r}+\mathbf{R}),\ \forall \mathbf{R}\in \Lambda$。所以：
$$\begin{align}
F & = \int_{\mathbb{R}^{3}}d^{3}r n(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}} \\
 & = \sum_{\mathbf{R}\in \Lambda} \int_{\text{primitive cell}}d^{3}r^{}n(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot(\mathbf{r}+\mathbf{R})} \\
 & = \sum_{\mathbf{R}\in \Lambda}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}\int_{\text{primitive cell}} d^{3}r n(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}} \\
 & = \sum_{\mathbf{R}\in \Lambda}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}S(\Delta \mathbf{k})
\end{align}$$
注意到：
$$\begin{align}
\sum_{\mathbf{R}\in \Lambda}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}} & = \sum_{\mathbf{R}\in \Lambda}\exp\left(-i\sum_{j} \Delta k_{j}\mathbf{b}_{j} \cdot \sum_{l}n_{l}\mathbf{a}_{l} \right) \\
 & = \sum_{n_{1},n_{2},n_{3}\in \mathbb{Z} }\exp\left(- i 2\pi \sum_{j}\Delta k_{j}n_{j} \right) \\
 & = \prod_{j}\sum_{n_{j}}\exp(-i{2}\pi \Delta k_{j}n_{j}) \\
 & = \prod_{j}\sum_{m_{j}\in \mathbb{Z}}2\pi\delta(-2\pi \Delta k_{j}-2\pi m_{j})
\end{align}$$
所以：
$$\sum_{\mathbf{R}\in \Lambda}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}\neq 0\text{ for }\Delta \mathbf{k}\in \Lambda ^{*}$$
所以只有在这些点上，$F$才非零。所以得到衍射峰条件：

>[!Success] Proposition 3.1 (Laue's condition)
>The peak corresponds to $\Delta \mathbf{k}=\mathbf{G}\in \Lambda ^{*}$

定义：

>[!Note] Definition 3.1
>Define the structure factor:
>$$S_{\mathbf{G}}= \int_{\text{primitive cell}}d^{3}r n(\mathbf{r})e^{-i\mathbf{G}\cdot \mathbf{r}}$$
## Remark

在$F=\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}S(\Delta \mathbf{k})$中，前面的$\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}$是三维中的Dirac comb。所以可以将$S(\Delta \mathbf{k})$当做包络，包住Dirac comb。实际情况中，sample不是无限大，所以$\sum e^{i\Delta \mathbf{k}\cdot \mathbf{R}}$也就不是Dirac comb。


考虑$n_{}(\mathbf{r})$在primitive cell中可以分为多个部分，例如多个原子的电子密度。令：
$$n(\mathbf{r})=\sum_{j}n_{j}(\mathbf{r}-\mathbf{r}_{j})$$
假设$n_{j}$足够局域，那么：
$$\begin{align}
S_{\mathbf{G}} & = \int_{\text{primitive cell}}d^{3}r\sum_{j}n_{j}(\mathbf{r}-\mathbf{r}_{j})e^{-i\mathbf{G}\cdot \mathbf{r}} \\ & =\int_{\mathbb{R}^{3}}d^{3}r\sum_{j}n_{j}(\mathbf{r}-\mathbf{r}_{j})e^{-i\mathbf{G}\cdot \mathbf{r}} \\

 & = \sum_{j}\int_{\mathbb{R}^{3}}d^{3}rn_{j}(\mathbf{r}-\mathbf{r}_{j})e^{-i\mathbf{G}\cdot \mathbf{r}} \\
 & = \sum_{j}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}}\int d^{3}rn_{j}(\mathbf{r})e^{-i\mathbf{G}\cdot \mathbf{r}}
\end{align}$$
定义：

>[!Note] Definition 3.2
>Define atomic form factor:
>$$f_{j}=\int_{\mathbb{R}^{3}}d^{3}rn_{j}(\mathbf{r})e^{-i\mathbf{G}\cdot \mathbf{r}}$$

那么sturcture factor可以分解为：
$$S_{\mathbf{G}}=\sum_{j}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}}f_{j}$$
## Ex:

考虑一维双分子链的衍射。令入射波波矢垂直于分子链。Let the x axis align with the atom chain. 
![[Drawing 2026-02-03 20.13.42.excalidraw|center|300]]
Then the scattering amplitude is:
$$F=\sum_{\mathbf{R}}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}(f_{A}e^{-i\Delta \mathbf{k}\cdot \mathbf{r}_{A}}+f_{B}e^{-i\Delta \mathbf{k}\cdot \mathbf{r}_{B}})$$
where $\mathbf{r}_{A},\mathbf{r}_{B}$ are the positions of $A,B$ in their primitive cell. Without loss of generality, let the origin of the primitive cell coincide with $A$. Then:
$$\mathbf{r}_{A}=0,\ \mathbf{r}_{B}= \frac{a}{2}  \hat{\mathbf{x}}$$
Observe that $\Delta k_{x}= k\cos \theta$. So:
$$\begin{align}
F=\sum_{\mathbf{R}}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}\left( f_{A}+f_{B}e^{-i \frac{ka}{2} \cos \theta} \right)
\end{align}$$
So we obtain the intensity:
$$I\propto|f_{A}+f_{B}e^{-i \frac{ka}{2}\cos \theta}|^{2}=|f_{A}+f_{B}\exp\left( -i \frac{k a}{\lambda}\cos \theta \right)|^{2}$$
Note that the constructive interference condition is:
$$n\lambda=a\cos \theta$$
If $n$ is odd, at peaks, we have $\frac{a\cos \theta}{\lambda}$ odd. So $I\propto|f_{A}-f_{B}|^{2}$. If $n$ is even, at peaks, we have $\frac{a\cos \theta}{\lambda}$ even. So $I\propto|f_{A}+f_{B}|^{2}$.

>[!Warning]
>注意constructive interference条件为$n\lambda=a\cos \theta$。这必须要将lattice point当做出射波波源来做。因为lattice point才是保持周期性的最小单位。单独用$A,B$原子作的话每个原子可能$\delta$系数都不同，无法计量相位差。

# 4. Practical considerations 

考虑我们拿到一个一种元素构成的cubic lattice的样品。假设我们不知道它是cubic，如何确定？
## Ex:

考虑simple cubic lattice。首先我们用PXRD，得到一系列peak的$\theta$。在Bragg视角下，reflection都是晶面反射形成的。
![[Drawing 2026-02-07 20.36.04.excalidraw|center|400]]
我们计算cubic lattice的晶面。考虑晶面$(hkl)$。则对应reciprocal lattice模长为：
$$G= \sqrt{ h^{2}+k^{2}+l^{2} } \frac{2\pi}{a}$$
所以晶面间距为：
$$d= \frac{2\pi}{G}= \frac{a}{\sqrt{ h^{2}+k^{2}+l^{2} }}$$
则Bragg条件得到：
$$2 \sin \theta \frac{a}{\sqrt{ h^{2}+k^{2}+l^{2} }}=n\lambda \implies \sin ^{2}\theta= \frac{n^{2}\lambda^{2}}{4a^{2}}(h^{2}+k^{2}+l^{2}) \text{ where }g.c.d.(h,k,l)=1$$
这等价于：
$$\sin ^{2}\theta= \frac{\lambda^{2}}{4a^{2}}(h^{'2}+k^{'2}+l^{'2})\text{ where }h^{'},k^{'},l^{'}\in \mathbb{Z}$$
这是因为，对于任意$(h^{'},k^{'},l^{'})$，都可以令$n=g.c.d.(h^{'},k^{'},l^{'})$，然后把$n$提出来。可以等效地将$(h^{'},k^{'},l^{'})=n(h,k,l)$看作虚晶面。那么$(hkl)$晶面的$n$级反射就等价于$(nh\ nk\ nl)$虚晶面的一级反射。

那么，遍历可能的$(h^{'},k^{'},l^{'})$，我们得到一列$\{ \sin ^{2}\theta \}$。因为$a$尚未确定，这些$\sin ^{2}\theta$的相对大小如果与实验一致，那么实验得到的句式cubic lattice。

当然，这是simple cubic lattice的情况。更复杂的cubic lattice可能某些符合Laue条件波矢却不出现峰。
## Ex:

考虑bcc晶体。则：
$$\begin{align}
S_{(hkl)} & =e^0 f+e^{i{2}\pi\left( \frac{h}{2}+ \frac{k}{2}+ \frac{l}{2} \right) }f= (1+(-1)^{h+k+l})f
\end{align}$$
显然，若structure factor为零，那么scattering amplitude也为零了。所以存在selection rule：
$$\text{non-zero reflection only if }h+k+l\text{ is even}$$












