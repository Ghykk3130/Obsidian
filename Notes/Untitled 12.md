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






