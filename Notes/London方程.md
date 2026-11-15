我们知道，超导体中不存在磁场。那么超流为：
$$\begin{align}
 & \mathbf{j}_{s}=-en_{s}\mathbf{v}_{s} \\
\implies & \frac{\partial}{\partial t}\mathbf{j}_{s}=-en_{s} \frac{\partial \mathbf{v}_{s}}{\partial t} \\
\implies &  \boxed{\frac{\partial}{\partial t}\mathbf{j}_{s}=  \frac{n_{s}e^{2}}{m}\mathbf{E}}
\end{align}$$
这成为第一London方程。其中没有考虑$\frac{\partial n_{s}}{\partial t}$是因为假设输运已经稳定，不存在$n_{s}$的变化。

接下来：
$$\begin{align}
 & \frac{\partial}{\partial t}(\nabla \times \mathbf{j}_{s}) = - \frac{n_{s}e^{2}}{m} \frac{\partial \mathbf{B}}{\partial t} \\
\implies & \frac{\partial}{\partial t}\left( \nabla \times \mathbf{j}_{s}+ \frac{n_{s}e^{2}}{m}\mathbf{B} \right)=0
\end{align}$$
接下来回忆起：
$$\begin{align}
 & \nabla \times \mathbf{B}= \mu_{0}\mathbf{j}_{s} \\
\implies & \nabla \times(\nabla \times \mathbf{B})=\nabla(\nabla \cdot \mathbf{B})-\nabla^{2}\mathbf{B}=-\nabla^{2}\mathbf{B} =\mu_{0}\nabla \times \mathbf{j}_{s}
\end{align}$$
于是：
$$\begin{align}
 &  \frac{\partial}{\partial t}\left(  \nabla^{2}-\frac{n_{s}e^{2}\mu_{0}}{m}  \right)\mathbf{B}=0 \\
\implies &  \frac{\partial}{\partial t}(\lambda^{2}\nabla^{2}-1)\mathbf{B}=0,\ \lambda^{2}= \frac{m}{n_{s}e^{2}\mu_{0}}
\end{align}$$
那么$(\lambda^{2}\nabla^{2}-1)\mathbf{B}=C(\mathbf{r})$必定为一独立于时间的常数。我们假设：
$$\begin{align}
(\lambda^{2}\nabla^{2}-1 )\mathbf{B}=0
\end{align}$$
那么：
$$\begin{align}
 & \mu_{0}\lambda^{2}\nabla \times \mathbf{j}_{s}=-\mathbf{B} \\
\implies  & \boxed{ \nabla \times \mathbf{j}_{s}=- \frac{n_{s}e^{2}}{m}\mathbf{B} }
\end{align}$$
这称为第二London方程。
