我们知道，超导体中不存在磁场。那么超流为：
$$\begin{align}
 & \mathbf{j}_{s}=-en_{s}\mathbf{v}_{s} \\
\implies & \frac{\partial}{\partial t}\mathbf{j}_{s}=-en_{s} \frac{\partial \mathbf{v}_{s}}{\partial t} \\
\implies &  \boxed{\frac{\partial}{\partial t}\mathbf{j}_{s}=  \frac{n_{s}e^{2}}{m}\mathbf{E}}
\end{align}$$
这成为第一London方程。其中没有考虑$\frac{\partial n_{s}}{\partial t}$是因为假设输运已经稳定，不存在$n_{s}$的变化。

>[!Quote]
>为什么不是$\frac{\partial \mathbf{v}_{s}}{\partial t}= \frac{-e}{m}(\mathbf{E}+\mathbf{v}_{s}\times \mathbf{B})$？这是因为，我们选择了London gauge $\nabla \cdot \mathbf{A}=0,\ \phi=0$。这会导致正则动量$\mathbf{p}=0$。从而有：
>$$\begin{align}
 & \mathbf{p}=m\mathbf{v}_{s}-e\mathbf{A}=0 \\
\implies & \frac{\partial \mathbf{v}_{s}}{\partial t}= \frac{e}{m}(-\mathbf{E})
\end{align}$$

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

接下来：
$$\begin{align}
 & \nabla \times \mathbf{j}_{s}= - \frac{n_{s}e^{2}}{m}(\nabla \times \mathbf{A}) \\
\implies & \nabla \times\left( \mathbf{j}_{s}+ \frac{n_{s}e^{2}}{m}\mathbf{A} \right)=0 \\
\implies & \mathbf{j}_{s}+ \frac{n_{s}e^{2}}{m}\mathbf{A}=\nabla \chi\text{, for some }\chi
\end{align}$$
我们选择$\mathbf{A}$的规范，令：
$$\begin{align}
 & \mathbf{j}_{s}+ \frac{n_{s}e^{2}}{m}\mathbf{A}=0 \\
\implies & \mathbf{j}_{s}=- \frac{n_{s}e^{2}}{m}\mathbf{A}
\end{align}$$

