# 1. 相对论修正

若电子的运动速度很快，hamiltonian中动能项不再是$\frac{p^{2}}{2m}$。相对论动能为：
$$\begin{align}
K & = \sqrt{ m^{2}c^{4}+p^{2}c^{2} }-mc^{2} \\
 & = mc^{2}\sqrt{ 1+ \frac{p^{2}}{m^{2}c^{2}} }-mc^{2} \\
 & \approx mc^{2}\left( 1+ \frac{p^{2}}{2m^{2}c^{2}}- \frac{1}{8} \frac{p^{4}}{m^{4}c^{4}} \right)-mc^{2} \\
 & = \frac{p^{2}}{2m}- \frac{1}{8} \frac{p^{4}}{m^{3}c^{2}}
\end{align}$$
所以存在微扰

>[!Success] Proposition 1.1
$$H_{\text{rel}}=- \frac{1}{8} \frac{p^{4}}{m^{3}c^{2}}$$

接下来对角化微扰。我们注意到矩阵在$\{ \ket{n,l,m} \}$基下已经是对角的了。因为：
$$\begin{align}
p^{4}\text{ is a scalar operator}\implies[\mathbf{L},p^{4}]=0
\end{align}$$
>[!Quote] Idea
>在不方便将$[\mathbf{L},p^{4}]=0$转化为有用的条件时，可以考虑：
>$$[\mathbf{L},p^{4}]\implies[L^{2},p^{4}]=0,\ [L_{z},p^{4}]=0$$

所以：
$$[L^{2},p^{4}]=0,\ [L_{z},p^{4}]=0$$
回忆起：
$$[A,B]=0\implies\text{Eigensubspaces of A are invariant subspaces of B}$$
我们在简并子空间$\text{span}\{ \ket{n,l,m} \}_{l,m}$中操作。注意到$\text{span}\{ \ket{n,l,m} \}_{l}$是$L_{z}$的特征子空间，因为$L_{z}$的本征子空间中$m$是固定的。$[L_{z},p^{4}]=0$告诉我们，$\text{span}\{ \ket{n,l,m} \}_{n,l}$是$p^{4}$的不变子空间。在这个子空间中，$\text{span}\{ \ket{n,l,m} \}$是$L^{2}$的特征子空间。因为$L^{2}$特征子空间要求$l(l+1)-m(m+1)$固定，而$m$已经固定，$l>0$只能解出一个$l$，所以$l$也固定。所以固定$n$，$p^{4}\ket{n,l,m}$只能和$\ket{l,m}$平行。

所以：
$$\begin{align}
\Delta E_{n,l,m} & =- \frac{1}{8} \frac{1}{m^{3}c^{2}}\bra{n,l,m} p^{4}\ket{n,l,m}  \\
 & = - \frac{1}{2}mc^{2}Z^{4} \alpha^{4}\left[ - \frac{3}{4n^{4}}+ \frac{1}{n^{3}\left( l+ \frac{1}{2} \right)} \right]
\end{align}$$

>[! Success] Proposition 1.2
>The energy shift of $\ket{n,l,m}$ is given by:
>$$\Delta E_{n,l,m}=- \frac{1}{2}mc^{2}Z^{4}\alpha^{4}\left[ - \frac{3}{4n^{4}}+ \frac{1}{n^{3}\left( l+ \frac{1}{2} \right)} \right]$$

注意到，若$n,l\gg 1$，则有：
$$\Delta E_{n,l,m}\text{ dominated by } \frac{\alpha^{4}}{n^{4}}$$
若$n,l \sim 1$，则有：
$$\Delta E_{n,l,m}\text{ dominated by } \frac{\alpha^{4}}{n^{3}}$$
# 2. L-S coupling

电子受到的电场在电子系中变换为磁场，和电子自旋耦合在一起。则存在微扰：
$$H_{\text{LS}}=\mu_{B} g \frac{1}{\hbar}\mathbf{S}\cdot \mathbf{B}$$
其中没有负号是因为电子偶极矩为$-\mu_{B}g\mathbf{S}$。考虑磁场：
$$\begin{align}
\mathbf{B} & = - \frac{1}{c^{2}}\mathbf{v}\times \mathbf{E} 
\end{align}$$
而电场可以写为势能$V$的导数：
$$\begin{align}
\mathbf{E} & =- \nabla \phi \\
  & = - \nabla\left( - \frac{V}{|e|} \right) \\
 & = \frac{1}{|e|} \hat{\mathbf{r}} \frac{\partial V}{\partial r}
\end{align}$$
这里假设了球对称性。那么：
$$\begin{align}
\mathbf{B} & = - \frac{1}{c^{2} }\mathbf{v}\times \frac{1}{|e|}  \hat{\mathbf{r}} \frac{\partial V}{\partial r} \\
 & = - \frac{1}{c^{2}|e|} \mathbf{v}\times \mathbf{r} \frac{1}{r} \frac{\partial V}{\partial r} \\
 & = \frac{1}{mc^{2}|e|} \mathbf{L} \frac{1}{r} \frac{\partial V}{\partial r}
\end{align}$$
那么：
$$\begin{align}
H_{\text{LS}} & = \mu_{B}g \frac{1}{\hbar}\mathbf{S}\cdot \frac{1}{mc^{2}|e|} \mathbf{L} \frac{1}{r} \frac{\partial V}{\partial r} \\
 & = \frac{1}{m^{2}c^{2}} \frac{1}{r} \frac{\partial V}{\partial r}\mathbf{L}\cdot \mathbf{S}
\end{align}$$
但是，这里我们假设了电子自身参考系平动。但实际上，电子自身参考系还会转动，导致场的变换更为复杂。实际上：

>[!Success] Proposition 2.1
>$$H_{\text{LS}}= \frac{1}{2m^{2}c^{2}} \frac{1}{r} \frac{\partial V}{\partial r}\mathbf{L}\cdot \mathbf{S}$$

接下来，我们需要微扰的矩阵元。为此，我们先研究一下的正交关系：

>[!Success] Proposition 2.2
>We have:
>$$\bra{l^{'},s,m_{l}^{'},m_{s}^{'}} l,s,m_{l},m_{s}\rangle=\delta_{l,l^{'}}\delta_{m_{l},m_{l}^{'}}\delta_{m_{s},m_{s}^{'}}$$
## Proof.

$$\begin{align}
\bra{l^{'},s,m_{l}^{'},m_{s}^{'}} l,s,m_{l},m_{s} \rangle & = \bra{l^{'},m_{l}^{'}} l,m_{l}\rangle \bra{s,m_{s}^{'}} s,m_{s}\rangle \\
 & = \delta_{l,l^{'}}\delta_{m_{l},m_{l}^{'}}\delta_{m_{s},m_{s}^{'}}
\end{align}$$
>[!Right]
>$\blacksquare$

接下来：

>[!Success] Proposition 2.3
>We have:
>$$\bra{j^{'},l^{'},s,m_{j}^{'}} j,l,s,m_{j}\rangle=\delta_{j,j^{'}}\delta_{l,l^{'}}\delta_{m_{j},m_{j}^{'}}$$
## Proof.




事实上，在$\{ \ket{n,j,m_{j}} \}_{j,m_{j}}$下，矩阵是对角化的。因为：
$$\begin{align}
\bra{n,j^{'},m_{j}^{'}} \frac{1}{r} \frac{\partial V}{\partial r}\mathbf{L}\cdot \mathbf{S}\ket{n,j,m_{j}}  & =  \bra{n,l^{'}} \frac{1}{r} \frac{\partial V}{\partial r}\ket{n,l}  \bra{j^{'},m_{j}^{'}} \mathbf{L}\cdot \mathbf{S} \ket{j,m_{j}} 
\end{align}$$
首先：
$$\begin{align}
\mathbf{L}\cdot \mathbf{S} \ket{j,m_{j}}  & = \frac{1}{2}(J^{2}-L^{2}-S^{2})\ket{j,m_{j}}  \\
 & = \frac{\hbar^{2}}{2}\left[ j(j+1)-l(l+1)- \frac{3}{4} \right]\ket{j,m_{j}} 
\end{align}$$
所以：
$$\begin{align}
\bra{j^{'},m_{j}^{'}} \mathbf{L} \cdot \mathbf{S} \ket{j,m_{j}}  & =  \frac{\hbar^{2}}{2}\left[ j(j+1)-l(l+1)-\frac{3}{4} \right] \delta _{m_{j},m_{j}^{'}}\delta_{l,l^{'}}
\end{align}$$
$$\bra{j^{'},l^{'},s,m_{j}^{'}} j,l,s,m_{j}\rangle=\delta_{m_{j}^{'},m_{j}}\delta_{l^{'},l}\text{ or }\delta_{m_{j}^{'},m_{j}}\delta_{j^{'},j}$$





我们可以定义spin-angular function。考虑展开$\ket{n,j,m_{j}}$：
$$\begin{align}
\bra{\mathbf{r}} n,j,m_{j} \rangle & = \bra{\mathbf{r}} \left( C_{m_{j}- \frac{1}{2},  \frac{1}{2} }^{j,m_{j}}\ket{m_{j}- \frac{1}{2}, \frac{1}{2}} +C_{m_{j}+ \frac{1}{2}, - \frac{1}{2} }^{j,m_{j}}\ket{m_{j}+ \frac{1}{2}, - \frac{1}{2} }   \right) \\
 & = R_{nl}(\mathbf{r}) \left[ C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}Y_{l}^{m_{j}- \frac{1}{2} }(\theta,\phi)\chi_{+}+C_{m_{j}+ \frac{1}{2}, - \frac{1}{2}}^{j,m_{j}}Y_{l}^{m_{j}+ \frac{1}{2}}(\theta,\phi)\chi_{-} \right]
\end{align}$$
我们将angular项分离，定义：

>[!Note] Definition 2.1
>Define the spin-angular function:
>$$\mathscr{Y}_{l}^{j,m_{j}}=C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}Y_{l}^{m_{j}- \frac{1}{2} }(\theta,\phi)\chi_{+}+C_{m_{j}+ \frac{1}{2}, - \frac{1}{2}}^{j,m_{j}}Y_{l}^{m_{j}+ \frac{1}{2}}(\theta,\phi)\chi_{-} $$







所以接下来需要考量：
$$\begin{align}
\bra{n,j^{'},m_{j}^{'}} \frac{1}{r} \frac{\partial V}{\partial r}\ket{n,j,m_{j}}  & = \bra{n,j^{'},m_{j}^{'}} \frac{1}{r} \frac{\partial V}{\partial r} \ket{n,l}  \left[ C_{m_{j}-\frac{1}{2},  \frac{1}{2} }^{j,m_{j}}\ket{m_{j}- \frac{1}{2}, \frac{1}{2}} +C_{m_{j}+ \frac{1}{2}, - \frac{1}{2} }^{j,m_{j}}\ket{m_{j}+ \frac{1}{2}, -\frac{1}{2}}  \right] \\
 & = \left[ C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j,m_{j}}C_{m_{j}- \frac{1}{2}, \frac{1}{2}}^{j^{'},m_{j}^{'}*}+ C_{m_{j}+ \frac{1}{2}, -\frac{1}{2}}^{j,m_{j}}C_{m_{j}+ \frac{1}{2}, -\frac{1}{2}}^{j^{'},m_{j}^{'}*} \right]\bra{n,l^{'}}  \frac{1}{r} \frac{\partial V}{\partial r}\ket{n,l} 
\end{align}$$
那么，我们必有：
$$m_{j}= m_{j}^{'}$$
并且$l=l^{'}$，否则$\bra{n,j^{'},m_{j}^{'}},\ \ket{m_{j}\mp \frac{1}{2}, \pm \frac{1}{2}}$属于不同的$l$的子空间，内积为零。






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

