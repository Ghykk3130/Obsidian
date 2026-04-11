# 1. 离散情形

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

# 2. 连续化

不妨重新定义交换常数，将Heisenberg交换写为：
$$H=-J\sum_{<ij>}\mathbf{S}_{i}\cdot \mathbf{S}_{j}$$
令$\mathbf{S}_{i},\mathbf{S}_{j}$夹角为$\phi_{ij}$，那么：
$$H=-J\sum_{<ij>}S^{2}\cos \phi_{ij}$$
假设$\phi_{ij}$很小，重新选取能量零点展开后得到：
$$\begin{align}
H & = \frac{JS^{2}}{2}\sum_{<ij>}\phi_{ij}^{2}
\end{align}$$
令$\mathbf{m}_{i}= \frac{\mathbf{M}_{i}}{M_{i}}$为磁矩密度的方向。那么$\phi_{ij}=|\mathbf{m}_{i}-\mathbf{m}_{j}|$。
![[Drawing 2026-04-10 20.16.16.excalidraw|center|500]]
代入$\mathbf{m}_{j}$的展开$\mathbf{m}_{j}=\mathbf{m}_{i}+ \mathbf{r}_{ij}\cdot \nabla \mathbf{m}_{i}$，则有：
$$\begin{align}
H & = \frac{JS^{2}}{2}\sum_{<ij>}|\mathbf{r}_{ij}\cdot \nabla \mathbf{m}_{i} |^{2}
\end{align}$$
若晶体是简单立方晶体，重写系数然后连续化得到：
$$\begin{align}
H & = \frac{JS^{2}}{2}\sum_{<ij>}2a^{2}(\nabla \mathbf{m})^{2} \\
 & = \frac{JS^{2}}{2}\cdot 2a^{2}\cdot \frac{1}{a^{3}}\int d^{3}r(\nabla \mathbf{m} )^{2} \\
 & = J \int d^{3}r(\nabla \mathbf{m})^{2}
\end{align}$$