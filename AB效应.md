# 1. 规范变换

考虑：
$$\vec{E}=-\nabla \phi- \frac{\partial}{\partial t}\vec{A},\ \vec{B}=\nabla \times \vec{A}$$
若作：
$$\vec{A} \leadsto \vec{A}+\nabla \Lambda$$
则$\vec{B}$不变。相应地，若要维持$\vec{E}$不变，电势可作变换：
$$\phi\leadsto \phi- \frac{\partial \Lambda}{\partial t}$$
所以定义规范变换：

>[!Note] Definition 1
>Define the gauge transformation:
>$$\vec{A}\leadsto  \tilde{\vec{A}}=  \vec{A}+ \nabla \Lambda(\vec{r},t),\ \phi\leadsto  \tilde{\phi}=  \phi- \frac{\partial}{\partial t}\Lambda(\vec{r},t)$$

回忆起电子在电磁场中运功的Hamiltonian：
$$H= \frac{1}{2m}|\vec{p}-e\vec{A}|^{2}+e\phi$$
其中$\vec{p}$为正则动量。$\vec{\Pi}=m\vec{v}$为机械动量。有$\vec{p}= \vec{\Pi}+e\vec{A}$。

那么考虑一类特殊的规范变换$\Lambda=\Lambda(\vec{r})$。相应地，波函数也应当变换。想用联系变换前后波函数。考虑变换前后我们有：
$$\begin{align}
 & \text{Before: } \left[  \frac{1}{2m}|\vec{p}-e\vec{A}|^{2}+e\phi \right]\ket{\alpha} = E\ket{\alpha}  \\
 & \text{After: }\left[  \frac{1}{2m}|\vec{p}-e   \tilde{\vec{A}} |^{2}+e  \tilde{\phi}  \right]\ket{\tilde{\alpha}} =E \ket{\tilde{\alpha}} 
\end{align}$$

>[!Note] Proposition 1
>Let $\Lambda=\Lambda(\vec{r})$ induce a gauge transformation. Let $\ket{\alpha},\ket{\tilde{\alpha}}$ be the states with the same eigenvalue before and after the transformation. Then:
>$$\ket{\tilde{\alpha}} =\exp\left( \frac{i}{\hbar}e\Lambda \right)\ket{\alpha} $$

^f7e488

## Proof.

注意到：
$$\begin{align}
\exp\left( - \frac{i}{\hbar}e\Lambda \right)(\vec{p}-e  \tilde{\vec{A}})\exp\left(  \frac{i}{\hbar}e\Lambda \right)  & = \exp\left( - \frac{i}{\hbar}e\Lambda \right)(\vec{p}-e\vec{A}-e\nabla \Lambda )\exp\left(  \frac{i}{\hbar}e\Lambda \right) \\
 & = \exp\left( - \frac{i}{\hbar}e\Lambda \right)(-i\hbar \nabla)\exp\left( \frac{i}{\hbar}e\Lambda \right)+\exp\left( - \frac{i}{\hbar}e\Lambda \right)(-e\vec{A}-e\nabla \Lambda)\exp\left( \frac{i}{\hbar}e\Lambda \right) \\
 & = \exp\left( - \frac{i}{\hbar}e\Lambda \right)(-i\hbar)\left( \frac{ie}{\hbar}\nabla \Lambda \right)\exp\left( \frac{i}{\hbar}e\Lambda \right)+(-i\hbar \nabla)+\exp\left( - \frac{i}{\hbar}e\Lambda \right)(-e\vec{A}-e\nabla \Lambda)\exp\left( \frac{i}{\hbar}e\Lambda \right)  \\
 & = e\nabla \Lambda+\vec{p}-e\vec{A}-e\nabla \vec{A}\\
 & =\vec{p}-e\vec{A}
\end{align} $$
所以：
$$\begin{align}
\exp\left( - \frac{i}{\hbar}e\Lambda \right)|\vec{p}-e  \tilde{\vec{A}} |^{2}\exp\left( \frac{i}{\hbar}e\Lambda \right) & = \exp\left( - \frac{i}{\hbar}e\Lambda \right)(\vec{p}-e  \tilde{\vec{A}})\cdot \exp\left(  \frac{i}{\hbar}e\Lambda \right)\exp\left( - \frac{i}{\hbar}e\Lambda \right)(\vec{p}-e  \tilde{\vec{A}})\exp\left( \frac{i}{\hbar}e\Lambda \right)  \\
 & = |\vec{p}-e\vec{A} |^{2}
\end{align}$$
所以：
$$\begin{align}
 &  \left[\frac{1}{2m}|\vec{p}-e  \tilde{\vec{A}} |^{2}+e\tilde{\phi}\right]e^{\frac{i}{\hbar}e\Lambda}\ket{\alpha} =Ee^{\frac{i}{\hbar}e\Lambda}\ket{\alpha}  \\
\Leftrightarrow &  \frac{1}{2m}e^{- \frac{i}{\hbar}e\Lambda}|\vec{p}-e  \tilde{\vec{A}} |^{2}e^{\frac{i}{\hbar}e\Lambda}\ket{\alpha} + e \phi \ket{\alpha} =E\ket{\alpha}  \\
\Leftrightarrow &  \left[ \frac{1}{2m}|\vec{p}-e\vec{A}|^{2} +e\phi\right]\ket{\alpha} =E\ket{\alpha} 
\end{align}$$
>[!Right]
>$\blacksquare$
# 2. Berry phase与AB效应

考虑一个电子装在一个小盒子里。盒子在磁场中缓慢绕圈。令$\vec{R}$为盒子中参考点坐标。令$\vec{r}$为粒子坐标。则粒子Hamiltonian为：
$$H=\frac{1}{2m}|\vec{p}-e\vec{A}(\vec{r})|^{2}$$
因为盒子小，近似为：
$$H= \frac{1}{2m}|\vec{p}-\vec{A}(\vec{R})|^{2}$$
那么所有的time-dependence来自于$\vec{R}=\vec{R}(t)$。于是我们可以计算Berry phase。为了计算Berry phase，我们需要本征态。令：
$$\frac{p^{2}}{2m}\ket{n} =E_{n}\ket{n} $$
为无磁场时的本征态。假设盒子处磁场很弱，为零。则$\frac{\partial}{\partial \vec{R}} \times \vec{A}(\vec{R})=0$。所以构造标势：$\vec{A}=\frac{\partial}{\partial \vec{R}}\Lambda$。所以磁标势的出现可以看做一种规范变换。令：
$$\frac{1}{2m}|\vec{p}-e\vec{A}|^{2}\ket{\tilde{n}} =E_{n}\ket{\tilde{n}} $$
为有磁场时本征态。那么[[AB效应#^f7e488|proposition 1.1]]：
$$\begin{align}
\ket{\tilde{n}} = \exp\left( \frac{i}{\hbar}e \Lambda \right)\ket{n}=\exp\left( \frac{i}{\hbar}e \int_{\vec{R}_{0}}^\vec{R}d\vec{r}^{'}\cdot \vec{A}(\vec{r}^{'}) \right) 
\end{align}$$
