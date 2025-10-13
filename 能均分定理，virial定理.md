>[!Proposition 1]
>Consider a microcanonical ensemble. Let $\eta_{i}$ be the canonical variable. Then:
>$$\langle \eta_{i} \frac{\partial H}{\partial \eta_{j}} \rangle= \delta_{ij}kT$$
## Proof.
我们采取微正则系综的近似。我们稍稍拓展一下等能量面，然后最后取热力学极限。我们有：
$$\begin{align}
\left\langle  \eta_{i} \frac{\partial H}{\partial \eta_{j}} \right\rangle = & \frac{\int_{E<H<E+\Delta E} \frac{d^{6N}\eta}{N!h^{3N}} \ \eta_{i} \frac{\partial H}{\partial \eta_{j}}}{\int_{E<H<E+\Delta E} \frac{d^{6N}\eta}{N!h^{3N}} } \\
& = \frac{\int_{E<H<E+\Delta E} d^{6N}\eta\ \eta_{i} \frac{\partial H}{\partial \eta_{j}}}{\int_{E<H<E+\Delta E} d^{6N}\eta} \\
 & = \frac{ \Delta E\frac{\partial}{\partial E }\int_{H<E} d^{6N} \eta\ \eta_{i} \frac{\partial H}{\partial \eta_{j}} }{\Delta E \frac{\partial}{\partial E}\int_{H<E}d^{6N}\eta} \\
 & = \frac{\frac{\partial}{\partial E}\int_{H<E}d^{6N}\eta\ \eta_{i} \frac{\partial H}{\partial \eta_{j}}}{\frac{\partial}{\partial E} \int_{H<E}d^{6N}\eta}
\end{align}$$
我们来处理分子。因为$E$为一常数。所以我们有：
$$\begin{align}
\text{numerator} & = \int_{H<E} d^{6N}\eta\ \eta_{i} \frac{\partial}{\partial \eta_{j}}(H-E) \\
 & = \int_{H<E} d^{6N-1}\eta \int d\eta_{j}\ \eta_{i } \frac{\partial}{\partial \eta_{j}}(H-E)
\end{align}$$
我们先研究：
$$\begin{align}
\int d \eta_{j}\ \eta_{i} \frac{\partial}{\partial \eta_{j}}(H-E) & = \int d \eta_{j} \left[\frac{\partial}{\partial \eta_{j}}(\eta_{i}(H-E))- \frac{\partial \eta_{i}}{\partial \eta_{j}}(H-E)\right]
\end{align}$$
总体的积分范围为$H(\vec{\eta})<E$。所以对于这个单独的积分，我们是固定了所有$\eta_{k},k \neq j$，然后根据$H<E$确定一个$\eta_{j}$的范围。我们注意到：
$$\begin{align}
\int d \eta_{j} \frac{\partial}{\partial \eta_{j}}(\eta_{i}(H-E)) & =\left[\eta_{i}(H-E)\right]_{\text{ the boundary of the range of }\eta_{j}} 
\end{align}$$
但是，$\eta_{j}$的范围的boundary肯定落在$H=E$上。（例如说我们积一个二维的圆$\int_{x^{2}+y^{2}<1}dxdy$。如果先积$y$，那么$y$一定取值为$-\sqrt{ 1-x^{2} }<y<\sqrt{ 1-x^{2} }$，所以一定可以取到边界。）所以：
$$\int \det a_{j} \frac{\partial}{\partial \eta_{j}}(\eta_{i}(H-E))=0$$
那么我们有：
$$\begin{align}
\text{numerator} & =-\int_{H<E}d^{6N-1}\eta \int d \eta_{j} \frac{\partial \eta_{i}}{\partial \eta_{j}}(H-E) \\
 &= -\int_{H<E}d^{6N} \eta \frac{\partial \eta_{i}}{\partial \eta_{j}}(H-E) \\
 & = - \int_{H<E} d^{6N}\eta \delta_{ij}(H-E) 
\end{align}$$
利用统计力学的数学基础[[统计力学的数学基础#^587d49|definition 2.2]]，我们将积分拆为：
$$\begin{align}
\text{numerator} & = - \int_{0}^E dE^{'}\int_{\partial \Sigma_{E^{'}}} d\Omega\delta_{ij}(H-E)
\end{align}$$
>[!Lemma 1]
>$$\frac{\partial}{\partial \alpha}\int_{h(\alpha)}^{g(\alpha)}dxf(\alpha,x)= \int_{h(\alpha)}^{g(\alpha)} \frac{\partial}{\partial \alpha}f(\alpha,x)+ g^{'}(\alpha)f(\alpha,g(\alpha))- h^{'}(\alpha)f(\alpha,h(\alpha))$$
## Proof of lemma.
$$\begin{align}
\frac{\partial}{\partial \alpha }\int_{h(\alpha)}^{g(\alpha)}dxf(\alpha,x) & = \frac{\partial}{\partial \alpha}\int_{\mathbb{R}} dx \mathbb{1}_{(-\infty,g(\alpha)]} \mathbb{1}_{[h(\alpha),\infty)}f(\alpha,x) \\
 & =\int dx \left(  \frac{\partial}{\partial \alpha}\mathbb{1}_{\text{(}-\infty,g(\alpha)\text{]}} \right)\mathbb{1}_{[h(\alpha),\infty)} f(\alpha,x) \\
 & +\int dx\mathbb{1}_{(-\infty,g(\alpha)]} \left(  \frac{\partial}{\partial \alpha}\mathbb{1}_{[h(\alpha),\infty)} \right)f(\alpha,x)
 \\
 & + \int dx \mathbb{1}_{(-\infty,g(\alpha)]} \mathbb{1}_{[h(\alpha),\infty)} \frac{\partial}{\partial \alpha}f(\alpha ,x) \\
 & = \int dx g^{'}(\alpha)\left(  \frac{\partial}{\partial g(\alpha)}\mathbb{1}_{\text{(}-\infty,g(\alpha)\text{]}} \right)\mathbb{1}_{[h(\alpha),\infty)} f(\alpha,x) \\
 & +\int dx h^{'}(\alpha) \mathbb{1}_{(-\infty,g(\alpha)]} \left(  \frac{\partial}{\partial h(\alpha)}\mathbb{1}_{[h(\alpha),\infty)} \right)f(\alpha,x)
 \\
 & + \int dx \mathbb{1}_{(-\infty,g(\alpha)]} \mathbb{1}_{[h(\alpha),\infty)} \frac{\partial}{\partial \alpha}f(\alpha ,x) \\
 & = \int dx g^{'}(\alpha)\delta(x-g(\alpha))\mathbb{1}_{[h(\alpha),\infty)} f(\alpha,x) \\
 & -\int dx h^{'}(\alpha) \mathbb{1}_{(-\infty,g(\alpha)]} \delta(x-h(\alpha))f(\alpha,x)
 \\
 & + \int dx \mathbb{1}_{(-\infty,g(\alpha)]} \mathbb{1}_{[h(\alpha),\infty)} \frac{\partial}{\partial \alpha}f(\alpha ,x) \\
 & =\int_{h(\alpha)}^{g(\alpha)} \frac{\partial}{\partial \alpha}f(\alpha,x)+ g^{'}(\alpha)f(\alpha,g(\alpha))- h^{'}(\alpha)f(\alpha,h(\alpha))
\end{align}$$
于是，回到主证明，我们有：
$$\begin{align}
\frac{\partial}{\partial E}\left(- \int_{0}^E dE^{'}\int_{\partial \Sigma_{E^{'}}} d\Omega\delta_{ij}(H-E)\right) & = -\int_{\partial \Sigma_{E}}d\Omega \delta_{ij}(H-E)- \int_{0}^{E} dE^{'}\int_{\partial \Sigma_{E^{'}}} d\Omega \delta_{ij} \cdot (-1) \\
 & =  \int_{0}^{E} dE^{'}\int_{\partial \Sigma_{E^{'}}} d\Omega \delta_{ij}  \\
 & = \delta_{ij} \int_{H<E} d^{6N} \eta
\end{align}$$
于是：
$$\begin{align}
\left\langle  \eta_{i} \frac{\partial H}{\partial \eta_{j}}  \right\rangle & = \delta_{ij} \frac{\int_{H<E} d^{6N}\eta}{ \frac{\partial}{\partial E}\int_{H<E}d^{6N}\eta} \\ & =\delta_{ij} \frac{\int_{H<E} \frac{d^{6N}\eta}{N!h^{3N}}}{ \frac{\partial}{\partial E}\int_{H<E} \frac{d^{6N}\eta}{N!h^{3N}}}
  \\
& = \delta_{ij} \frac{1}{ \frac{\partial}{\partial E}\ln\left(  \int_{H<E} \frac{d^{6N}\eta}{N!h^{3N}}\right)} \\
 & = \delta_{ij} \frac{k}{ \frac{\partial S}{\partial E}} \\
 & = \delta_{ij} kT
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Corollary 1 (equipartition theorem)
>Let the system have $N$ independent canonical variables. The Hamiltonian is homogeneous to the second order for each variable. Then $\langle H \rangle= \frac{1}{2}NkT$.
## Remark
有时，存在$N$个独立的正则坐标也叫做有$N$个自由度。注意这里的自由度和经典力学中不同。经典力学中自由度只计算广义坐标数量。这里的自由度需要算上所有的正则坐标数量。
## Proof.
我们知道：
$$\left\langle  \eta_{j} \frac{\partial H}{\partial \eta_{j}} \right\rangle= kT\implies \sum_{j} \langle \eta_{j} \frac{\partial H}{\partial \eta_{j}} \rangle=NkT$$
我们知道$H$是$\eta_{j}$的二阶齐次函数。由[[守恒律#^5de27c|守恒律 lemma 3.1]]，我们有：
$$\sum_{j}\left\langle  \eta_{j} \frac{\partial H}{\partial \eta_{j}} \right\rangle= 2 \langle H \rangle=NkT$$
于是得到：
$$\langle H \rangle = \frac{1}{2}NkT$$
>[!Right]
>$\blacksquare$
## Ex:
考虑一个理想气体，有$N$个粒子。那么一共有$6N$个独立的正则坐标。于是显然：
$$\langle H \rangle = 3NkT$$

>[!Note] Corollary 2 (virial theorem)
>Let $\langle T \rangle$



