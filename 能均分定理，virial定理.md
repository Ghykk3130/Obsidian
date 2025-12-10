>[!Proposition 1]
>Let $\eta_{i}$ be the canonical variables. Then:
>$$\langle \eta_{i} \frac{\partial H}{\partial \eta_{j}} \rangle= \delta_{ij}kT$$
## Proof.
### Method 1

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
### Method 2
我们选用正则系综。于是：
$$\begin{align}
\left\langle  \eta_{i} \frac{\partial H}{\partial \eta_{j}}  \right\rangle & = \frac{\int \frac{d^{6N}\eta}{N!h^{3N}} e^{-\beta H}\eta_{i} \frac{\partial H}{\partial \eta_{j}}}{Z}
\end{align}$$
现在，我们想处理积分：
$$\int_{\mathbb{R}^{6N}} \frac{d^{6N}\eta}{N!h^{3N}} e^{-\beta H} \eta_{i} \frac{\partial H}{\partial \eta_{j}}$$
我们可能想用derivative trick，但是这好像和通常的derivative trick不一样。

>[!Idea]
>存在两种derivative trick。
>- $He^{-\beta H}= - \frac{\partial}{\partial \beta}e^{-\beta H}$。这种比较trivial。
>- $\frac{\partial H}{\partial \eta_{j}}e^{-\beta H}=- \frac{1}{\beta} \frac{\partial}{\partial \eta_{j}}(-\beta H)e^{-\beta H}=- \frac{1}{\beta} \frac{\partial}{\partial \eta_{j}}e^{-\beta H}$。这种在求正则坐标导数时更常用到。

于是：
$$\begin{align}
\int_{\mathbb{R}^{6N}}d^{6N}\eta e^{-\beta H}\eta_{i} \frac{\partial H}{\partial \eta_{j}} & = - \frac{1}{\beta} \int d^{6N}\eta\ \eta_{i}\frac{\partial}{\partial \eta_{j}}e^{-\beta H}
\end{align}$$
我们先积$\eta_{j}$。分部积分有：
$$\begin{align}
\int_{\mathbb{R}}d \eta_{j}\  \eta_{i} \frac{\partial}{\partial \eta_{j}}e^{-\beta H}  & = \left[ \eta_{i} \frac{\partial}{\partial \eta_{j}} e^{-\beta H}\right]_{-\infty}^{\infty}- \int_{\mathbb{R}} d \eta_{j}  \frac{\partial \eta_{i}}{\partial \eta_{j}}e^{-\beta H} \\
 & = - \int_{\mathbb{R}} d \eta_{j}  \frac{\partial \eta_{i}}{\partial \eta_{j}}e^{-\beta H} \\
 & = -\delta_{ij} \int d \eta_{j} e^{-\beta H}
\end{align}$$
于是显然
$$\begin{align}
\left\langle  \eta_{i} \frac{\partial H}{\partial \eta_{j}}  \right\rangle & = \frac{\int \frac{d^{6N}\eta}{N!h^{3N}} e^{-\beta H}\eta_{i} \frac{\partial H}{\partial \eta_{j}}}{Z} \\ & = \frac{ \frac{1}{\beta}\delta_{ij}Z}{Z} \\
 & = \frac{1}{\beta}\delta_{ij} \\
 & = \delta_{ij}kT
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

>[!Note] Corollary 2 (virial theorem in SM)
>Let $\langle T \rangle$ denote the average kinetic energy of a system. Then:
>$$\bar{T}=  \langle T \rangle= -\frac{1}{2} \langle \sum_{i} \vec{r_{i}}\cdot  \vec{F}_{i}\rangle$$
>
>where $i$ is the index for the ith particle.
## Proof.
首先由于ergodic hypothesis，我们有：
$$\bar{T}=\langle T \rangle$$
设粒子数为$N$。选取每个粒子的Cartesian坐标，及其conjugate momentum作为正则坐标。一方面，我们知道：
$$\begin{align}
\left\langle  p_{ij} \frac{\partial H}{\partial p_{ij}} \right\rangle &= \langle p_{ij} \frac{p_{ij}}{m_{i}} \rangle = kT
\end{align}$$
其中，$i$为第i个粒子 的index，$j$为第i个粒子第j个分量的index。

那么：
$$\begin{align}
\langle T \rangle & = \sum_{i,j} \left\langle  \frac{p_{ij}^{2}}{2m_{i}}  \right\rangle \\
 & = \frac{3}{2} NkT
\end{align}$$
另一方面：
$$\langle r_{ij} \frac{\partial H}{\partial r_{ij}}\rangle= kT$$
那么：
$$\begin{align}
\sum_{i,j}r_{ij} \frac{\partial H}{\partial r_{ij}} & = \sum_{} r_{ij} \frac{\partial V}{\partial r_{ij}} \\
 & = -\sum r_{ij}F_{ij} \\
 & = -\sum \vec{r}_{i} \cdot \vec{F_{i}}  \\
 \implies \sum\left\langle \vec{r}_{i} \cdot \vec{F}_{i}  \right\rangle & = -3NkT 
\end{align}$$
那么显然：
$$\langle T \rangle= - \frac{1}{2} \langle \sum \vec{r}_{i} \cdot \vec{F}_{i}\rangle$$
>[!Right]
>$\blacksquare$

>[!Note] Theorem 1 (virial theorem in classical mechanics)
>$$\bar{T}= - \frac{1}{2} \overline{\sum_{i}\vec{r}_{i} \cdot \vec{F}_{i}}$$
>
>where $i$ is the index for the ith particle in the system.
## Proof.
$$\begin{align}
\sum_{i} \vec{r}_{i} \cdot \vec{F}_{i} & =\sum \vec{r}_{i} \cdot\dot{\vec{p}}_{i} \\
 & = \sum \frac{d}{dt}(\vec{r}_{i} \cdot \vec{p}_{i})- \sum  \dot{\vec{r}}_{i} \cdot \vec{p}_{i} \\
 & = \sum \frac{d}{dt}(m_{i} \vec{r_{i}} \cdot  \dot{\vec{r}}_{i})- \sum \frac{\partial H}{\partial   \vec{p}_{i} }\cdot  \vec{p}_{i} \\
 & = \sum \frac{d}{dt} \left(  \frac{1}{2}m_{i} |\vec{r}_{i}|^{2} \right)- \sum \frac{\vec{p}_{i}}{m_{i}} \cdot   \vec{p}_{i} \\
 & = \frac{d}{dt}T- \frac{1}{2}T
\end{align} \tag{*}$$
注意到：
$$\begin{align}
\overline{ \frac{d}{dt}T} & = \lim_{ t_{0} \to \infty } \frac{1}{t_{0}} \int_{0}^{t_{0}} dt \frac{d}{dt}T \\
 & = \lim_{ t_{0} \to \infty }  \frac{1}{t_{0}} [T]_{0}^{t_{0}} \\
 & = 0 
\end{align}$$
这是因为动能是有限的，除以一个趋于无穷的$t_{0}$必定为零。接下来将$(*)$两边取时间平均即可。
>[!Right]
>$\blacksquare$

>[!Proposition 2]
If the potential energy is a $-\alpha$ order homogenous function of all the position variables, then
$$\langle T \rangle= - \frac{\alpha}{2} \langle V \rangle$$
>
>or $$\bar{T}= - \frac{\alpha}{2} \bar{V}$$
## Proof.
这是因为由欧拉定理，我们有：
$$\begin{align}
  \sum_{i} \vec{r}_{i} \cdot \vec{F}_{i}   & = - \sum \vec{r}_{i} \cdot \frac{\partial V}{\partial \vec{r}_{i}} \\
 & = \alpha V 
\end{align}$$
于是便有：
$$\begin{align}
\langle T \rangle & = - \frac{\alpha}{2} \langle V \rangle
\end{align}$$
对于时间平均同理。
>[!Right]
>$\blacksquare$





