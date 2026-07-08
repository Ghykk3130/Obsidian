假设微观层面上Maxwell方程成立。定义平均算符为：
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

>[!Warning]
>微观层面上，有：
>$$\mathbf{f}(\mathbf{r},t)=\rho(\mathbf{r},t)\mathbf{E}(\mathbf{r},t)+\rho(\mathbf{r},t)\mathbf{v}(\mathbf{r},t)\times \mathbf{B}(\mathbf{r},t) $$
>但是，由于$\langle \rho \mathbf{E}\rangle\neq \langle \rho\rangle \langle\mathbf{E}\rangle,\ \langle\rho \mathbf{v}\times \mathbf{B}\rangle\neq \langle \rho\rangle \langle \mathbf{v}\rangle\times\langle \mathbf{B}\rangle$，所以宏观层面Lorentz力公式并不对。例如想计算一个样本总受力，就不能naive地使用微观Lorentz力公式。

