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


考虑four-field formulation。引入$\mathbf{H},\mathbf{D}$场。我们有：
$$\begin{align}
\mathbf{H} & = \mu_{0}^{-1}\mathbf{B}+\mathbf{M} \\
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
\mathbf{D} & = \epsilon_{0}\chi \mathbf{E},\ \mathbf{H}=\chi_{m}^{-1}\mathbf{M}
\end{align}$$





