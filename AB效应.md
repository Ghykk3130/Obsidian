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
>$$\vec{A}\leadsto \vec{A}+ \nabla \Lambda(\vec{r},t),\ \phi\leadsto \phi- \frac{\partial}{\partial t}\Lambda(\vec{r},t)$$

回忆起电子在电磁场中运功的Hamiltonian：
$$H= \frac{1}{2m}|\vec{p}-e\vec{A}|^{2}+e\phi$$
其中$\vec{p}$为正则动量。$\vec{\Pi}=m\vec{v}$为机械动量。有$\vec{p}= \vec{\Pi}+e\vec{A}$。