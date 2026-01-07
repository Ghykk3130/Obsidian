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

