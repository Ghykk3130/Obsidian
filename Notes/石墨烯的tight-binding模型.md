# 1. 无自旋石墨烯的tight-binding模型

石墨烯的一个元胞里有不等价的$A,B$两个碳原子。考虑每个碳原子在只有一个导电电子轨道。用$i$标记所有碳原子，那么hamiltonian可以写为：
$$H=-t\sum_{\langle i,j\rangle}c^{\dagger}_{i}c_{j}$$
若假设一次量子化的可加hamiltonian为$H_{0}$，那么$t=-\bra{i}H_{0}\ket{j}$。我们假设若$i,j$不邻近的话，波函数重叠太少，以至于$t=0$。hamiltonian还可以写为：
$$\boxed{H=-t\sum_{i,\delta}(c^{\dagger}_{A,i}c_{B,i+\delta}+c^{\dagger}_{B,i+\delta}c_{A,i})}$$
其中，$i$标记元胞，$i+\delta$标记离$A$最近的三个元胞（包含$i$）。

>[!Quote]
>这个hamiltonian没有重复计数。固定$i$，求和路径如下所示：
>![[Pasted image 20260530150426.png|center|400]]
>总共有三个$\delta$的路径，每个往返都计入。

我们作Fourier变换$c_{A,{i}}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{A,k},\ c_{B,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{B,i}$。其中，$N$为总元胞数。于是：
$$\begin{align}
H & = -t\sum_{i,\delta} \left(  \frac{1}{N}\sum_{k,k^{'}}e^{-ikR_{i}}c_{A,k}^{\dagger}e^{ik^{'}(R_{i}+\delta)}c_{B,k^{'}}+\text{h.c.} \right) \\
 & = -t  \frac{1}{N} \sum_{\delta}\sum_{k,k^{'}}\sum_{i}e^{iR_{i}(k^{'}-k)}e^{ik^{'}\delta}c_{A,k}^{\dagger}c_{B,k^{'}}+\text{h.c.} \\
 & = -t\sum_{\delta}\sum_{k,k^{'}}\delta_{k^{'}=k}e^{ik^{'}\delta}c_{A,k}^{\dagger}c_{B,k^{'}}+\text{h.c.} \\
 & = -t\sum_{k} \sum_{\delta}e^{ik\delta}c^{\dagger}_{A,k}c_{B,k}+\text{h.c.} \\
 & = -t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c_{B,k}^{\dagger}c_{A,k}),\ f(k)=\sum_{\delta}e^{ik\delta} \\
 & = \sum_{k}\begin{pmatrix}
c^{\dagger}_{A,k} & c_{B,k}^{\dagger} 
\end{pmatrix} \begin{pmatrix}
0 &  -tf(k)  \\
-tf^{*}(k)  &0 
\end{pmatrix} \begin{pmatrix}
c^{}_{A,k} \\
c^{}_{B,k}
\end{pmatrix} \\
 & = \sum_{k}\psi_{k}^{\dagger}H(k) \psi_{k},\ \psi_{k}=\begin{pmatrix}
c_{A,k} \\
c_{B,k}
\end{pmatrix}
\end{align}$$
对角化hamiltonian得到色散关系$E_{\pm}(k)=\pm t^{}|f(k)|$。因为$\delta$有如下三种取值：
$$\delta_{1}=a(1,0),\ \delta_{2}=a\left( - \frac{1}{2}, \frac{\sqrt{ 3 }}{2} \right),\ \delta_{3}= a\left( - \frac{1}{2},- \frac{\sqrt{ 3 }}{2} \right)$$
所以：
$$\begin{align}
f(k) & = e^{iak_{x}}+e^{- i \frac{a}{2}k_{x}}2 \cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)
\end{align}$$
于是：
$$\boxed{\begin{align}
E_{\pm}(k) & = \pm t\sqrt{ 1+4\cos\left(  \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+ 4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) } \\
 & = \pm t \sqrt{ 3+ 4\cos \left(  \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+2\cos(\sqrt{ 3 }ak_{y}) }
\end{align}}$$

![[Pasted image 20260530155447.png|center|500]]

取实空间基矢$\mathbf{a}_{1}= \frac{3}{2}a\left( 1, \frac{1}{\sqrt{ 3 }} \right),\ \mathbf{a}_{2}= \frac{3}{2}a\left(  \frac{1}{\sqrt{ 3 }},1 \right)$。容易计算k-space的基矢$\mathbf{G}_{1}= \frac{4\pi}{3a}(1,0),\ \mathbf{G}_{2}= \frac{4\pi}{3a}\left(  - \frac{1}{2}, \frac{\sqrt{ 3 }}{2} \right)$。于是FBZ的六个顶点为：
$$\frac{4\pi}{3a}\left( 0,\pm \frac{1}{\sqrt{ 3 }} \right),\  \frac{4\pi}{3a}\left( \pm \frac{1}{2}, \pm \frac{1}{2\sqrt{ 3 }} \right)$$
将这六个顶点称为K点。这六个点只有两个独立，即其它都相差一个$\mathbf{G}\in \Lambda ^{*}$。这两个独立的点取为$\frac{4\pi}{3a}\left( 0, \pm \frac{1}{\sqrt{ 3 }} \right)$，称为$K$和$K^{'}$点。容易证明K点上的能量为零。将FBZ这个六边形的边心称为M点。

在$K$点附近展开：
$$\begin{align}
f(K+q) & = e^{iaq_{x}}+ e^{-i \frac{a}{2}q_{x} }2\cos\left(  \frac{2\pi}{3}+ \frac{\sqrt{ 3 }}{2}q_{y} \right) \\
 & \approx 1+iaq_{x}+2\left( 1- i \frac{a}{2}q_{x} \right)\left( - \frac{1}{2}- \frac{3}{4}q_{y} \right) \\
 & = i \frac{3}{2}aq_{x}- \frac{3}{2}aq_{y}
\end{align}$$
故：
$$\begin{align}
H(q) & = \begin{pmatrix}
0 & -ta\left( i \frac{3}{2}q_{x}- \frac{3}{2}q_{y} \right)  \\
-ta\left( -i \frac{3}{2}q_{x}- \frac{3}{2}q_{y} \right) & 0
\end{pmatrix} \\
 & = \frac{3at}{2}q_{x}\tau^{y}+ \frac{3at}{2}q_{y}\tau^{x}
\end{align}$$
我们知道，Dirac矩阵定义为$\alpha^{1}=\tau^{y},\ \alpha^{2}=\tau^{x}$。令$v_{F}= \frac{3at}{2}$，于是：
$$H(q)=v_{F}\boldsymbol{\alpha}\cdot \mathbf{q}$$
容易计算$E(q)=\pm v_{F}q$。这个线性色散关系称为Dirac cone。

# 2. 对称性
## 时间反演对称性

回忆起，对于任意可观测量$A$，其时间反演后被映射为$\mathcal{T}A \mathcal{T}^{-1}$。虽然$c_{k}$不是可观测量，我们仍然可以研究$\mathcal{T}c_{k}\mathcal{T}^{-1}$。任取$\ket{\psi}$。考虑：
$$\begin{align}
\mathcal{T}c_{k}\mathcal{T}^{-1} \ket{\psi}  & = \mathcal{T}\ket{0_{k}} \bra{k} \mathcal{T}^{-1}\psi\rangle \\
 & = \bra{\mathcal{T}^{-1}\psi} k\rangle \mathcal{T}\ket{0_{k}}  \\
 & = \bra{\mathcal{T}k}\psi\rangle\ket{0_{-k} } \\
 & = \bra{-k} \psi \rangle \ket{0_{-k}}  \\
 & = c_{-k}\ket{\psi}    
\end{align}$$
得到$\mathcal{T}c_{k}\mathcal{T}^{-1}=c_{-k}$。同理可得$\mathcal{T}c_{k}^{\dagger}\mathcal{T}^{-1}=c^{\dagger}_{-k}$。故：

>[!Success] Proposition 2.1
>$\mathcal{T}c_{k}\mathcal{T}^{-1}=c_{-k},\ \mathcal{T}c^{\dagger}_{k}\mathcal{T}^{-1}=c^{\dagger}_{-k}$

那么：
$$\mathcal{T}\psi_{k}\mathcal{T}^{-1}=\psi_{-k},\ \mathcal{T}\psi_{k}^{\dagger}\mathcal{T}^{-1}=\psi ^{\dagger}_{-k}$$
其中，$\mathcal{T}$的作用是element-wise的。我们考虑：
$$\begin{align}
\mathcal{T}H \mathcal{T}^{-1} & = \mathcal{T}\sum_{k}\psi ^{\dagger}_{k}H(k)\psi_{k}\mathcal{T}^{-1} \\
 & = \sum_{k}\mathcal{T}\psi ^{\dagger}_{k}\mathcal{T}^{-1} \mathcal{T}H(k)\mathcal{T}^{-1} \mathcal{T}\psi_{k}\mathcal{T}^{-1} \\
 & = \sum_{k}\psi ^{\dagger}_{-k} \mathcal{T}H(k)\mathcal{T}^{-1} \psi_{-k}
\end{align}$$
容易计算：
$$\begin{align}
\mathcal{T}H(k)\mathcal{T}^{-1} & = \begin{pmatrix}
0 & \mathcal{T}(-2tf(k))\mathcal{T^{-1}} \\
\mathcal{T}(-2tf^{*}(k))\mathcal{T}^{-1} & 0
\end{pmatrix}
\end{align}= \begin{pmatrix}
0 & -2tf^{*}(k) \\
-2tf(k) & 0
\end{pmatrix}= \begin{pmatrix}
0 & -2tf(-k) \\
-2tf^{*}(-k) & 0
\end{pmatrix}=H(-k)$$
故：
$$\mathcal{T}H\mathcal{T}^{-1}=\sum_{k}\psi ^{\dagger}_{-k}H(-k)\psi_{-k}=\sum_{k}\psi ^{\dagger}_{k}H(k)\psi_{k}=H$$
>[!Success] Proposition 2.2
>The tight-binding model for graphene preserves time-reversal symmetry.

## 自旋翻转对称性

考虑给系统加上自旋。由于hamiltonian不与自旋相关，所以上下自旋拥有相同能量。所以每条能带都是二重简并的。

# 3. 有自旋石墨烯tight-binding模型

现在加上自旋。显然hamiltonian可以写为：
$$H=-t\sum_{i,\delta,\sigma}(c^{\dagger}_{A,i,\sigma}c_{B,i+\delta,\sigma}+c^{\dagger}_{B,i+\delta,\sigma}c_{A,i,\sigma})$$
那么显然，经过Fourier变换，得到：
$$H=\sum_{k,\sigma} \begin{pmatrix}
c^{\dagger}_{A,k,\sigma} & c^{\dagger}_{B,k,\sigma}
\end{pmatrix} \begin{pmatrix}
0 & -tf(k) \\
-tf^{*}(k) & 0
\end{pmatrix} \begin{pmatrix}
c_{A,k,\sigma} \\
c_{B,k,\sigma}
\end{pmatrix}$$
令$\psi_{k}=\begin{pmatrix}c_{A,k,\uparrow} \\ c_{B,k,\uparrow} \\ c_{A,k,\downarrow} \\ c_{B,k,\downarrow}\end{pmatrix}=\begin{pmatrix}c_{\uparrow} \\ c_{\downarrow} \end{pmatrix} \otimes \begin{pmatrix}c_{A,k} \\ c_{B,k}\end{pmatrix}$。那么hamiltonian可以写为：
$$H=\sum_{k}\psi_{k}^{\dagger} H(k)\psi_{k}$$
$$H(k)=-t\mathrm{Re}f(k)I_{2\times 2}\otimes \tau^{x}+t\mathrm{Im}f(k)I_{2\times 2}\otimes \tau^{y}$$
显然，$H(k)$分块对角化。在$\sigma=\uparrow$不变子空间中对角化得到能谱$\epsilon_{\pm,\uparrow}(k)=\pm t|f(k)|$。在$\sigma=\downarrow$不变子空间中对角化得到能谱$\epsilon_{\pm,\downarrow}(k)=\pm t|f(k)|$。所以$t|f(k)|$能带是二重简并的，$-t|f(k)|$能带也是二重简并的。







