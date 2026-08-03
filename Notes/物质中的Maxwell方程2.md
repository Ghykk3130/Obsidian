# 1. Lorentz平均

假设微观层面上Maxwell方程成立。定义Lorentz平均算符为：
$$\begin{align}
\langle f\rangle(\mathbf{R}) & = \frac{1}{\Omega}\int_{\Omega}d^{3}r f(\mathbf{r}+\mathbf{R}) 
\end{align}$$
其中$\Omega$的大小远大于$f(\mathbf{r})$变化的characterestic length。假设微观上Maxwell方程成立，既对于任意$(\mathbf{r},t)$，总有：
$$\begin{align}
 & \nabla \cdot \mathbf{E}(\mathbf{r},t)= \frac{\rho(\mathbf{r},t)}{\epsilon_{0}} \\
 & \nabla \times \mathbf{E}(\mathbf{r},t) =- \frac{\partial \mathbf{B}(\mathbf{r},t)}{\partial t} \\
 & \nabla \cdot \mathbf{B}(\mathbf{r},t)=0 \\
 & \nabla \times \mathbf{B}(\mathbf{r},t) = \mu_{0}\mathbf{j}(\mathbf{r},t)+\mu_{0}\epsilon_{0} \frac{\partial \mathbf{E}(\mathbf{r},t)}{\partial t}
\end{align}$$
容易证明：
$$\begin{align}
 & \nabla_{\mathbf{R}} \cdot  \langle\mathbf{E}\rangle(\mathbf{R},t)= \frac{\langle\rho\rangle(\mathbf{R},t)}{\epsilon_{0}} \\
 & \nabla_{\mathbf{R}} \times \langle\mathbf{E}\rangle(\mathbf{R},t) =- \frac{\partial \langle \mathbf{B}\rangle(\mathbf{R},t)}{\partial t} \\
 & \nabla_{\mathbf{R}} \cdot \langle \mathbf{B}\rangle(\mathbf{R},t)=0 \\
 & \nabla _{\mathbf{R}}\times \langle \mathbf{B}\rangle(\mathbf{R},t) = \mu_{0}\langle\mathbf{j}\rangle(\mathbf{R},t)+\mu_{0}\epsilon_{0} \frac{\partial \langle\mathbf{E}\rangle(\mathbf{R},t)}{\partial t}
\end{align}$$
因为求导算符是线性的。例如：
$$\begin{align}
\langle \nabla\times \mathbf{E}(\mathbf{r},t)\rangle(\mathbf{R}) & = \frac{1}{\Omega}\int_{\Omega}d^{3}r \nabla \times \mathbf{E}(\mathbf{r}+\mathbf{R},t) \\  & = \frac{1}{\Omega}\int d^{3}r \nabla_{\mathbf{R}}\times \mathbf{E}(\mathbf{r}+\mathbf{R},t) \\
 & = \nabla_{\mathbf{R}}\times \frac{1}{\Omega}\int d^{3}r \mathbf{E}(\mathbf{r}+\mathbf{R},t) \\

 & = \nabla_{\mathbf{R}}\times\langle\mathbf{E}\rangle(\mathbf{R},t)
\end{align}$$
那么宏观上真空中Maxwell方程成立。

>[!Quote]
>微观层面上，有：
>$$\mathbf{f}(\mathbf{r},t)=\rho(\mathbf{r},t)\mathbf{E}(\mathbf{r},t)+\mathbf{j}(\mathbf{r},t)\times \mathbf{B}(\mathbf{r},t) $$
>但是，由于$\langle \rho \mathbf{E}\rangle\neq \langle \rho\rangle \langle\mathbf{E}\rangle,\ \langle\mathbf{j}\times \mathbf{B}\rangle\neq \langle \mathbf{j}\rangle\times\langle \mathbf{B}\rangle$，所以宏观层面Lorentz力公式并不对。例如想计算一个样本总受力，就不能naive地使用微观Lorentz力公式。
>
>定义$\delta \cdot=\cdot-\langle \cdot\rangle$。假设偏离平均的差异的平均为零。既$\langle \cdot\rangle=0$。那么：
>$$\begin{align}
 \langle \rho \mathbf{E}\rangle 
 & = \langle \rho\rangle \langle \mathbf{E}\rangle+ \langle \delta \rho\rangle \langle \mathbf{E}\rangle+ \langle \delta \mathbf{E}\rangle \langle \rho\rangle+ \langle \delta \rho\delta \mathbf{E}\rangle \\
 & = \langle \rho\rangle\langle \mathbf{E}\rangle+ \langle \delta \rho\delta \mathbf{E}\rangle
\end{align}$$
>同理，可以得到$\langle \mathbf{j}\times \mathbf{B}\rangle=\langle\mathbf{j}\rangle \times\langle\mathbf{B}\rangle+\langle \delta \mathbf{j}\times\delta \mathbf{B}\rangle$。
>
>如果电荷，电流的空间变化非常缓慢，那么则有$\langle \delta \rho\delta \mathbf{E}\rangle\approx{0},\ \langle \delta \mathbf{j}\times \delta \mathbf{B}\rangle\approx{0}$。于是宏观上近似有$\langle f\rangle\approx \langle\rho\rangle\langle \mathbf{E}\rangle+\langle \mathbf{j}\rangle\times\langle\mathbf{B}\rangle$。
>
>一个反例是偶极。考虑$x+ \frac{a}{2},\ x- \frac{a}{2}$的位置分别有+-静电荷。那么：
>$$\begin{align}
F & = qE\left( x+ \frac{a}{2} \right)- qE\left( x- \frac{a}{2} \right) \\
 & \approx qE(x)+ q \nabla E \frac{a}{2}-qE(x)+ q \nabla E \frac{a}{2} \\
 & = q a\cdot \nabla E
\end{align}$$
>如果对偶极naive地使用Lorentz力公式，只会得到$F=\langle q \rangle\langle E\rangle=0\cdot \langle E\rangle=0$。

# 2. Polarization

考虑电中性样本。固定一些电荷$\rho_{f}$，产生电场$\mathbf{E}_{\text{ext}}$。那么样本中的电荷将重新分布。这些电荷产生电场$\mathbf{E}_{b}$。则总电场为$\mathbf{E}=\mathbf{E}_{\text{ext}}+\mathbf{E}_{b}$。令样本重新分布后产生的面电荷为$\sigma_{b}$，体电荷为$\rho_{b}$。那么：
$$\begin{align}
\int_{\partial\text{sample}} d^{2}r \sigma_{b}+\int_{\text{sample}} d^{3}r \rho_{b}=0
\end{align}$$
若存在一个分布$\mathbf{P}$，使得$\sigma_{b}= \hat{\mathbf{n}}\cdot \mathbf{P},\ \rho_{b}=-\nabla \cdot \mathbf{P}$，那么上述方程自动满足。

为了获得$\mathbf{P}$的物理意义，我们作：
$$\begin{align}
\int_{\text{sample}} d^{3}r P_{j} & = \int d^{3}r P_{i}\delta_{ij} \\
 & = \int d^{3}r P_{i}\partial_{i}r_{j} \\
 & = \int d^{3}r \partial_{i}(P_{i}r_{j})-\int d^{3}r r_{j}\partial_{i}P_{i} \\
 & = \int_{\partial\text{sample}} d^{2}r  \hat{n}_{i}P_{i}r_{j}+ \int d^{3}r r_{j}\rho_{b} \\
 & = \int d^{2} r r_{j} \sigma_{b}+ \int d^{3}r r_{j}\rho_{b} \\
 & = p_{j}
\end{align}$$
所以$\mathbf{P}$可以被视作某种局部的偶极。Lorentz模型提供一种近似$\mathbf{P}$的方法。Lorentz模型中，样本的微观粒子是偶极，然后将偶极分布连续化得到$\mathbf{P}$。即$\mathbf{P}(\mathbf{R})= \frac{1}{\Omega}\int d^{3}r \rho(\mathbf{R}+\mathbf{r})$，其中$\Omega$是一个比样本小得多，但是比微观偶极大得多的尺度。

# 3. Magnetization

考虑一块样品。固定一些电流$\mathbf{j}_{f}$，产生磁场$\mathbf{B}_{\text{ext}}$。那么，样品作为响应将自身磁化产生磁场$\mathbf{B}_{M}$。则总磁场为$\mathbf{B}=\mathbf{B}_{\text{ext}}+\mathbf{B}_{M}$。令$\mathbf{B}_{M}$的源为$\mathbf{j}_{M}$。

样品磁化可以来源于自旋角动量和轨道角动量。考虑一个角动量的分布：
$$\mathbf{M}(\mathbf{r})=\sum_{i}\mathbf{m}_{i}\delta(\mathbf{r}-\mathbf{r}_{i})$$
那么$\mathbf{B}_{M}$来源于磁矩分布$\mathbf{M}$。已知原点处偶极$\mathbf{m}$产生的外磁场等价于原点处的电流$\nabla \times(\mathbf{m}\delta(\mathbf{r}))$。所以$\mathbf{M}(\mathbf{r})$可以等效为电流$\mathbf{j}_{M}=\nabla \times \mathbf{M}$。

已知$\mathbf{r}^{'}$处的偶极矩产生的磁场为：
$$\mathbf{B}(\mathbf{r})=\mu_{0}\left[ \mathbf{m}\delta(\mathbf{r}-\mathbf{r}^{'})-\nabla \frac{1}{4\pi} \frac{\mathbf{m}\cdot(\mathbf{r}-\mathbf{r}^{'})}{|\mathbf{r}-\mathbf{r}^{'}|^{3}} \right]$$
那么样品自身磁化产生的磁场为：
$$\begin{align}
\mathbf{B}_{M}(\mathbf{r}) & = \int d^{3}r^{'} \mu_{0}\mathbf{M}(\mathbf{r}^{'})\delta(\mathbf{r}-\mathbf{r}^{'})- \int d^{3}r^{'}\mu_{0} \nabla \frac{1}{4\pi} \frac{\mathbf{M}\cdot(\mathbf{r}-\mathbf{r}^{'})}{|\mathbf{r}-\mathbf{r}^{'}|^{3}} \\
 & = \mu_{0}(\mathbf{M}(\mathbf{r})+\mathbf{H}_{M}(\mathbf{r})),\ \mathbf{H}_{M}(\mathbf{r})=- \int d^{3}r^{'} \nabla \frac{1}{4\pi} \frac{\mathbf{M}\cdot(\mathbf{r}-\mathbf{r}^{'})}{|\mathbf{r}-\mathbf{r}^{'}|^{3}}
\end{align}$$
可以证明，
$$\begin{align}
 & \mathbf{H}_{M}=-\nabla \psi_{M} \\
 & \psi_{M}(\mathbf{r}) = \frac{1}{4\pi}\int d^{3}r^{'} \frac{\rho ^{*}(\mathbf{r}^{'})}{|\mathbf{r}-\mathbf{r}^{'}|}+ \frac{1}{4\pi}\int d^{2}r^{'} \frac{\sigma ^{*}(\mathbf{r}^{'})}{|\mathbf{r}-\mathbf{r}^{'}|},\ \rho ^{*}=-\nabla \cdot \mathbf{M},\ \sigma ^{*}=\mathbf{M}\cdot  \hat{\mathbf{n}}
\end{align}$$
将$\mathbf{H}_{M}$称为退磁场。我们发现，$\mathbf{H}_{M}$是一个关于$\mathbf{M}$的复杂函数。可以证明，在椭圆体样本中，$\mathbf{H}_{M}=-\mathbf{N}\cdot \mathbf{M}$，其中$\mathbf{N}$为退磁张量。
## Ex:

对于薄膜样品，沿着z方向磁化，有$N=1$。


接下来：
$$\begin{align}
\nabla \times \mathbf{B} & = \nabla \times \mathbf{B}_{M}+\nabla \times \mathbf{B}_{f} \\
 & = \mu_{0}(\nabla \times \mathbf{M}+\mathbf{j}_{f})
\end{align}$$
于是，定义：
$$\mathbf{H}=\mu_{0}^{-1}\mathbf{B}-\mathbf{M}$$
则有：
$$\begin{align}
 & \nabla \times \mathbf{H}=\mathbf{j}_{f},\ \nabla \cdot \mathbf{H}=\rho ^{*}
\end{align}$$
但应当注意，虽然看起来$\mathbf{H}$只有一个源$\mathbf{j}_{f}$，实际上$\mathbf{H}$却是两个场的叠加：
$$\begin{align}
\mathbf{H} & = \mu_{0}^{-1}\mathbf{B}-\mathbf{M} \\
 & = \mu_{0}^{-1}\mathbf{B}_{\text{ext}}+\mathbf{H}_{M}
\end{align}$$
其中，$\mathbf{H}_{M}$无旋。

>[!Quote]
>将样品放入测量仪器中，仪器上磁场读数一般为$B_{\text{ext}}$。所以，样品内部一个磁矩感受到的磁场实际上是：
>$$\begin{align}
\mathbf{B} & = \mu_{0}(\mathbf{H}+\mathbf{M}) \\
 & = \mu_{0}(\mu_{0}^{-1}\mathbf{B}_{\text{ext}}-\mathbf{N}\cdot \mathbf{M}+\mathbf{M}) \\
 & = \mathbf{B}_{\text{ext}}+\mu_{0}(1-\mathbf{N})\cdot \mathbf{M}
\end{align}$$
## Ex:

对于磁性薄膜，我们有总磁场$\mathbf{B}=\mu_{0}(\mathbf{H}_{\text{ext}}+(1-\mathbf{N})\cdot \mathbf{M})$。那么样本中的自旋感受到的Zeeman coupling为$g\mu_{B}\mu_{0}\mathbf{S}\cdot(\mathbf{H}_{\text{ext}}+(1-\mathbf{N})\cdot \mathbf{M})$。考虑样品是铁磁的，并且不存在外场。那么Zeeman coupling为$g\mu_{B}\mu_{0}\mathbf{S}\cdot(1-\mathbf{N})\cdot \mathbf{M}$。由于$\mathbf{N}$是取决于磁化方向的，选取磁化方向在z轴时$N=1$为最大值。此时Zeeman能被最小化。



我们知道：
$$\begin{align}
\mathbf{M} & = \chi \mathbf{H} \\
\mathbf{H} & = \mu_{0}^{-1}\mathbf{B}_{\text{ext}}-\mathbf{N}\cdot \mathbf{M}
\end{align}$$
所以：
$$\begin{align}
 & \frac{\mathbf{M}}{\chi}= \mu_{0}^{-1}\mathbf{B}_{\text{ext}}-\mathbf{N}\mathbf{M} \\
\implies & \mathbf{M} = \frac{\mathbf{B}_{\text{ext}}}{\mu_{0}(\mathbf{N}+ 1 /\chi)}
\end{align}$$
我们可以得到一个表观susceptibility：
$$\chi^{'}= \frac{\mathbf{M}}{\mu_{0}^{-1}\mathbf{B}_{\text{ext}}}=  \frac{1}{\mathbf{N}+1 /\chi}$$
这一般是实验上测得的磁化率。


# 4. 物质中的Maxwell方程

考虑four-field formulation。引入$\mathbf{H},\mathbf{D}$场。我们有：
$$\begin{align}
\mathbf{H} & = \mu_{0}^{-1}\mathbf{B}-\mathbf{M} \\
\mathbf{D} & = \epsilon_{0}\mathbf{E}+\mathbf{P}
\end{align}$$
在物质中，我们有：
$$\begin{align}
 & \nabla \cdot \mathbf{D}  = \rho_{f},\ \nabla \cdot\mathbf{B}=0 \\
 & \nabla \times \mathbf{E}= - \frac{\partial \mathbf{B}}{\partial t},\ \nabla \times \mathbf{H}= \mathbf{j}_{f}+ \frac{\partial \mathbf{D}}{\partial t}
\end{align}$$
进行变量数统计。一般，$\rho_{f},\ \mathbf{j}_{f}$给定。上面第一行2个方程构成约束，第二行6个方程构成演化。

>[!Quote]
>将$\nabla \cdot \mathbf{D}=\rho_{f},\ \nabla \cdot \mathbf{B}=0$称为约束方程。因为单独给出这两个方程，并不能决定解在“相空间”中的流动。它们唯一地作用只是将解约束在“相空间”的子流形上。
>
>可以证明，一旦初始条件确定满足约束方程，那么解就永远在子流形中流动了。例如，容易得到：
>$$\begin{align}
 & \nabla \cdot(\nabla \times \mathbf{E})=0=- \frac{\partial}{\partial t}(\nabla \cdot \mathbf{B})
\end{align}$$
>所以，若$\nabla \cdot \mathbf{B}(\mathbf{r},t=0)=0$，那么此后任意时刻就永远满足$\nabla \cdot \mathbf{B}(\mathbf{r},t)=0$。所以约束方程如同不等式，不能真正用等式约束变量。

那么实际上只有6个方程。但是$\mathbf{E},\mathbf{D},\mathbf{B},\mathbf{H}$共有12个变量。此时还需要本构关系$\mathbf{D}=\mathbf{D}(\mathbf{E},\mathbf{B}),\ \mathbf{H}=\mathbf{H}(\mathbf{E},\mathbf{B})$给出另外6个方程。线性近似下，本构关系为：
$$\begin{align}
 & \mathbf{D} = \epsilon \mathbf{E},\ \mathbf{H}=\mu ^{-1}\mathbf{B}
\end{align}$$
有时，也写成：
$$\begin{align}
\mathbf{D} & = \epsilon_{0}\chi_{e} \mathbf{E},\ \mathbf{H}=\chi_{}^{-1}\mathbf{M}
\end{align}$$





