考虑两个电子拥有总hamiltonian：
$$H=H_{1}+H_{2}+V\text{, where }V(\mathbf{r}_{1},\mathbf{r}_{2})= \frac{e^{2}}{4\pi\epsilon} \frac{1}{|\mathbf{r}_{1}-\mathbf{r}_{2}|}$$
设$H_{1}$具有本征态$\ket{\phi_{1}}$，$H_{2}$具有本征态$\ket{\phi_{2}}$，两个电子的空间态被锁死在这两个态的空间里面，不跃迁到别的态。那么系统Hilbert空间的基为：
$$\begin{align}
 & \ket{\psi_{1,1}} = \frac{1}{\sqrt{ 2 }} \ket{\phi_{1}} \wedge \ket{\phi_{2}} \otimes \ket{+,+}  \\
 & \ket{\psi_{1,0}} = \frac{1}{\sqrt{ 2 }}\ket{\phi_{1}} \wedge \ket{\phi_{2}}  \otimes \frac{1}{\sqrt{ 2 }}(\ket{+,-} +\ket{-,+} ) \\
 & \ket{\psi_{1,-1}} = \frac{1}{\sqrt{ 2 }}\ket{\phi_{1}} \wedge \ket{\phi_{2}} \otimes \ket{-,-}  \\
 & \ket{\psi_{0,0}} = \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1},\phi_{2}} +\ket{\phi_{2},\phi_{1}}  )\otimes \frac{1}{\sqrt{ 2 }} (\ket{+,-} -\ket{-,+} )  
\end{align}$$
将自旋态直接耦合，则：
$$\begin{align}
 & \ket{\psi_{1,1}} = \frac{1}{\sqrt{ 2 }}\ket{\phi_{1}}  \wedge \ket{\phi_{2}} \otimes \ket{1,1}  \\
 & \ket{\psi_{1,0}} = \frac{1}{\sqrt{ 2 }}\ket{\phi_{1}} \wedge \ket{\phi_{2}} \otimes \ket{1,0}  \\
 & \ket{\psi_{1,-1}} = \frac{1}{\sqrt{ 2 }}\ket{\phi_{1}} \wedge \ket{\phi_{2}}  \otimes \ket{1,-1}  \\
 & \ket{\psi_{0,0}} = \frac{1}{\sqrt{ 2 }}(\ket{\phi_{1},\phi_{2}} +\ket{\phi_{2},\phi_{1}} )\otimes \ket{0,0}  
\end{align}$$
显然由于spin态互相垂直，$H$在这组基的表示下对角化。容易得到对角元：
$$\begin{align}
 & \bra{\psi_{1,1}}H\ket{\psi_{1,1}} =\bra{\psi_{1,0}} H\ket{\psi_{1,0}} =\bra{\psi_{1,-1}} H\ket{\psi_{1,-1}} = \epsilon_{1}+\epsilon_{2}+ C-J \\
  & \bra{\psi_{1,0}}H \ket{\psi_{1,0}} =\epsilon_{1}+\epsilon_{2}+C+J 
\end{align}$$
其中$\epsilon_{1}=\bra{\phi_{1}}H_{1}\ket{\phi_{1}},\ \epsilon_{2}=\bra{\phi_{2}}H_{2}\ket{\phi_{2}},\ C=\bra{\phi_{1},\phi_{2}}V\ket{\phi_{1},\phi_{2}},\ J=\bra{\phi_{1},\phi_{2}}V\ket{\phi_{2},\phi_{1}}$。

注意到双自旋系统的可观测量$\mathbf{\sigma}_{1}\cdot \mathbf{\sigma}_{2}$在基$\ket{S,m_{S}}$下也是对角的，并且triplet的对角元为$\frac{\hbar^{2}}{4}$，singlet的对角元为$- \frac{3}{4}\hbar^{2}$。所以不妨作如下映射：
$$\ket{\psi_{1,1}} \leftrightarrow \ket{1,1} ,\ \ket{\psi_{1,0}} \leftrightarrow \ket{1,0} ,\ \ket{\psi_{1,-1}} \leftrightarrow \ket{1,-1} ,\ \ket{\psi_{0,0}} \leftrightarrow \ket{0,0} $$
那么$H$可以等效为：
$$H=-2J \boldsymbol{\sigma}_{1}\cdot \boldsymbol{\sigma}_{2}+\epsilon_{0}\text{, where }\epsilon_{0}=\epsilon_{1}+\epsilon_{2}+C+ \frac{J}{2}$$


