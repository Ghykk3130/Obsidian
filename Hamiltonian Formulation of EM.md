
考虑一个带电粒子$e$在电磁场中运动。其Lagrangian为：
$$L=\frac{1}{2}mv^{2}-e\phi+e\vec{v}\cdot \vec{A}$$
我们有正则坐标$\vec{r}$，以及相对应的正则动量：
$$\vec{p}= \frac{\partial L}{\partial \vec{v}}=m\vec{v}+e\vec{A}$$
我们考虑Legendre变换：
$$\begin{align}
 & dL= \frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ \frac{\partial L}{\partial \vec{v}}\cdot d\vec{v} \\
\implies & dL= \frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ d\left( \frac{\partial L}{\partial \vec{v}}\cdot \vec{v} \right)- \vec{v}\cdot d\left( \frac{\partial L}{\partial \vec{v}} \right)=\frac{\partial L}{\partial \vec{r}}\cdot d\vec{r}+ d(\vec{p}\cdot \vec{v})-\vec{v}\cdot d\vec{p} \end{align}$$
原来$\vec{r},\vec{v}$是独立坐标。现在将$\vec{r},\vec{p}$选择为独立坐标。那么我们有：
$$\begin{align}
& d(\vec{p}\cdot \vec{v}-L)= \frac{\partial}{\partial \vec{r}}(\vec{p}\cdot \vec{v}-L)\cdot d\vec{r}+ \frac{\partial}{\partial \vec{p}}(\vec{p}\cdot \vec{v}-L )\cdot d\vec{p} \\
\implies & dH= \frac{\partial H}{\partial \vec{r}}\cdot d\vec{r}+\frac{\partial H}{\partial \vec{p}}\cdot d\vec{p}
\end{align}$$
其中必须存在：
$$\begin{align}
 & H=\vec{p}\cdot \vec{v}-L 
\end{align}$$于是：
$$\begin{align}
H & =\vec{p}\cdot \vec{v}-L \\
 & = mv^{2}+e\vec{v}\cdot \vec{A}-\left( \frac{1}{2}mv^{2}-e\phi+e\vec{v}\cdot \vec{A} \right) \\
 & = \frac{1}{2}mv^{2}+e\phi \\
 & = \frac{1}{2m}|\vec{p}-e\vec{A} |^{2}+e\phi
\end{align}$$
## Remark
注意，其中的$\vec{p}$不是机械动量，而是正则动量。

## Ex:

我们可以又Hamilton's equation restore Lorentz force law：
$$\begin{align}
\frac{\partial H}{\partial r_{j}} & = \frac{1}{2m} \frac{\partial}{\partial r_{j}}(p_{i}^{2}+e^{2}A_{i}^{2}-2ep_{i}A_{i}) + e \frac{\partial \phi}{\partial r_{j}} \\
 & = \frac{1}{2m} \left( e^{2} 2A_{i} \frac{\partial A_{i}}{\partial r_{j}}-2ep_{i} \frac{\partial A_{i}}{\partial r_{j}} \right)+e \frac{\partial \phi}{\partial r_{j}} \\
 & = e^{2} \frac{A_{i}}{m} \frac{\partial A_{i}}{\partial r_{j}}- e\left( v_{i}+e \frac{A_{i}}{m} \right) \frac{\partial A_{i}}{\partial r_{j}} + e\frac{\partial \phi }{\partial r_{j}}\\
 & = -ev_{i} \frac{\partial A_{i}}{\partial r_{j}}+e \frac{\partial \phi}{\partial r_{j}}
\end{align}$$
所以正则动量的变化为：
$$p_{j}= - \frac{\partial H}{\partial r_{j}}=ev_{i} \frac{\partial A_{i}}{\partial r_{j}}$$
于是，机械动量变化为：
$$\begin{align}
m  \dot{v}_{j} & = \dot{p}_{j}-e   \dot{A}_{j} \\
 & = \dot{p}_{j}- e \left(  \frac{\partial A_{j}}{\partial t}+ \frac{\partial A_{j}}{\partial r_{k}}  \dot{r}_{k} \right)
\end{align}$$
这是因为，$\dot{A}_{j}= \frac{DA_{j}}{Dt}$实际上是随体导数。于是：
$$\begin{align}
m  \dot{v}_{j} & = ev_{i} \frac{\partial A_{i}}{\partial r_{j}} - e \frac{\partial A_{j}}{\partial t}- e v_{k} \frac{\partial A_{j}}{\partial r_{k}}-e \frac{\partial \phi}{\partial r_{j}}
\end{align}$$
另一方面，我们有：
$$\begin{align}
e(\vec{v}\times \vec{B})_{j} & = e(\vec{v}\times(\nabla \times \vec{A}))_{j} \\
 & = e\epsilon_{jlm}v_{l}\epsilon_{mnp}\partial_{n}A_{p} \\
 & = e \epsilon_{mjl}\epsilon_{mnp}v_{l}\partial_{n}A_{p} \\
 & = e (\delta_{jn}\delta_{lp}-\delta_{jp}\delta_{\ln} )v_{l}\partial_{n}A_{p} \\
 & = ev_{l}\partial_{j}A_{l}-ev_{l}\partial_{l}A_{j}
\end{align}$$
所以：
$$m  \dot{v}_{j}= e(\vec{v}\times \vec{B})_{j}-e \frac{\partial \phi}{\partial r_{j}}  -e \frac{\partial A_{j}}{\partial t}=e(\vec{v}\times \vec{B})_{j}+eE_{j}$$
