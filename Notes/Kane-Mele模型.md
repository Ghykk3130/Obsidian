# 1. Kane-Mele模型

考虑蜂窝晶格。在[[Haldane模型]]的基础上加入自旋。假设电子在进行次邻近跃迁时，由于SOI产生了依赖自旋的项。Hamiltonian写为：
$$\begin{align}
H & = -t\sum_{\langle i,j\rangle,\sigma}(c^{\dagger}_{A,i,\sigma}c_{B,j,\sigma}+c_{B,j,\sigma}^{\dagger}c_{A,i,\sigma}  )-t^{'}\sum_{\langle \langle i,j\rangle \rangle,\sigma}\sigma e^{i\phi_{ij}}(c^{\dagger}_{A,i,\sigma}c_{A,j,\sigma}+c^{\dagger}_{B,i,\sigma}c_{B,j,\sigma})
\end{align}$$
显然，将$\sum_{\sigma}$提到外面，这就是两个Haldane模型的hamiltonian之和，其中自旋向上的Haldane模型的次邻近耦合系数为$t^{'}$，自旋向下的Haldane模型的次邻近耦合系数为$-t^{'}$。显然，Fourier变换可以得到：
$$H=\sum_{k,\sigma} \begin{pmatrix}
c^{\dagger}_{A,k,\sigma} & c^{\dagger}_{B,k,\sigma}
\end{pmatrix} \begin{pmatrix}
2t^{'}g(k)\sigma &  -tf(k) \\
-tf^{*}(k) & -2t^{'}g(k)\sigma
\end{pmatrix}  \begin{pmatrix}
c_{A,k,\sigma} \\
c_{B,k,\sigma}
\end{pmatrix}$$
令$\psi_{k}=(c_{A,k,\uparrow},c_{B,k,\uparrow},c_{A,k,\downarrow}, c_{B,k,\downarrow})^{\text{T}}= \begin{pmatrix}c_{\uparrow} \\ c_{\downarrow}\end{pmatrix} \otimes \begin{pmatrix}c_{A,k} \\ c_{B,k}\end{pmatrix}$。那么：
$$\begin{align}
H & = \sum_{k}\psi_{k}^{\dagger}H(k)\psi_{k}
\end{align}$$
而：
$$\begin{align}
H(k)=\begin{pmatrix}
H_{\uparrow} (k) & 0 \\
0 & H_{\downarrow}(k)
\end{pmatrix}
\end{align},\ H_{\uparrow}(k)=\begin{pmatrix}
2t^{'}g(k) & -tf(k) \\
-tf^{*}(k) & -2t^{'}g(k)
\end{pmatrix},\ H_{\downarrow}(k)=\begin{pmatrix}
-2t^{'}g(k) & -tf(k) \\
-tf^{*}(k) & 2t^{'}g(k)
\end{pmatrix}$$
注意到：
$$\begin{align}
 & H_{\uparrow}(k)= 2t^{'}g(k)\tau^{z}-t\mathrm{Re}f(k)\tau^{x}+t\mathrm{Im}f(k)\tau^{y} \\
 & H_{\downarrow}(k)=-2t^{'}g(k)\tau^{z}-t\mathrm{Re}f(k)\tau^{x}+t\mathrm{Im}f(k)\tau^{y}
\end{align}$$
于是：
$$H(k)=2t^{'}g(k) s^{z}\otimes \tau^{z}-t\mathrm{Re}f(k)I_{2\times 2}\otimes \tau^{x}+t\mathrm{Im}f(k)I_{2\times{2}} \otimes \tau^{y}$$
其中，$\boldsymbol{s}$作用在自旋自由度上，$\boldsymbol{\tau}$作用在轨道自由度上。（即A, B原子。）

子块$H_{\uparrow}(k)$对角化得到两条能带：
$$E_{\uparrow,\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+4t^{'2}g^{2}(k) }$$
子块$H_{\downarrow,\pm}(k)$对角化得到两条能带：
$$E_{\downarrow,\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+4t^{'2}g^{2}(k) }$$
可以看到，两种自旋的能带完全一样的。但是，它们的Chern数不同。显然，由[[Kane-Mele模型]]，两种自旋的Chern数分别为：
$$C^{\uparrow}_{1}=\text{sgn}(t^{'}),\ C^{\downarrow}_{1}=\text{sgn}(-t^{'})=-\text{sgn}(t^{'})$$
于是$C_{1}=C^{\uparrow}_{1}+C^{\downarrow}_{1}=0$。这使得$\sigma_{H}=0$。对于两种自旋，可以得到各自的自旋流：
$$\mathbf{J}^{\uparrow}_{s}= \frac{\hbar }{2e}\mathbf{J}^{\uparrow},\ \mathbf{J}^{\downarrow}_{s}=- \frac{\hbar}{2e}\mathbf{J}^{\downarrow}$$
结合TKNN公式，Hall自旋流为：
$$\begin{align}
\mathbf{J}^{H}_{s} & = \frac{\hbar}{2e}(\mathbf{J}^{\uparrow}-\mathbf{J}^{\downarrow}) \\
 & = \frac{\hbar}{2e}(C^{\uparrow}_{1}-C^{\downarrow}_{1}) \frac{e^{2}}{h} \\
 & = \frac{e}{2\pi}\text{sgn}(t^{'})
\end{align}$$
当$t^{'}\neq 0$时，自旋流非零。
# 2. Kane-Mele模型的对称性

## 时间反演对称性

对于任意可观测量$X$，由于：
$$\bra{\psi} X\ket{\psi}= \bra{X^{\dagger}\psi} \psi\rangle=\bra{\mathcal{T}\psi} \mathcal{T}X^{\dagger}\psi\rangle=\bra{\mathcal{T}\psi} \mathcal{T}X^{\dagger}\mathcal{T}^{-1}\ket{\mathcal{T}\psi} =\bra{\mathcal{T}\psi} \mathcal{T}X\mathcal{T}^{-1}\ket{\mathcal{T}\psi}  $$
所以时间反演后的算子变为$\mathcal{T}X^{}\mathcal{T}^{-1}$。对于非厄米的算子，我们作如下命题：

>[!Success] Proposition 2.1
>$\mathcal{T}\ket{a}\bra{b}\mathcal{T}^{-1}=\ket{\mathcal{T}a}\bra{\mathcal{T}b}$
## Proof.

任取$\ket{\psi}$。那么：
$$\begin{align}
\mathcal{T}\ket{a} \bra{b} \mathcal{T}^{-1}\ket{\psi}  & = \mathcal{T}\ket{a} \bra{b} \mathcal{T}^{-1}\psi \rangle \\
 & = \mathcal{T}\ket{a} \bra{\psi} \mathcal{T}b\rangle \\
 & = \bra{\mathcal{Tb}} \psi\rangle \mathcal{T}\ket{a}  \\
 & = \bra{\mathcal{T}b} \psi\rangle \ket{\mathcal{T}a}  \\
 & = \ket{\mathcal{T}a} \bra{\mathcal{T}b} \psi\rangle
\end{align}$$
>[!Right]
>$\blacksquare$

对于spin-1/2粒子，时间反演算子为$-i\sigma_{y}K$。它将$\ket{\uparrow}$映成$\ket{\downarrow}$，将$\ket{\downarrow}$映成$-\ket{\uparrow}$。对于动量本征态$\ket{k}$，时间反演算子将动量反转为$\ket{-k}$。于是：
$$\begin{align}
\mathcal{T}c_{k,\uparrow}\mathcal{T}^{-1} & = \mathcal{T}\ket{0_{k,\uparrow}} \bra{k,\uparrow} \mathcal{T}^{-1} \\
 & = \ket{\mathcal{T}0_{k,\uparrow}} \bra{\mathcal{T}k\uparrow} \\
 & = \ket{0_{-k,\downarrow}} \bra{-k,\downarrow} \\
 & = c_{-k,\downarrow}  
\end{align}$$
类似地：
$$\begin{align}
\mathcal{T}c_{k,\downarrow}\mathcal{T}^{-1} & = \mathcal{T}\ket{0_{k,\downarrow}} \bra{k,\downarrow} \mathcal{T}^{-1} \\
 & = -c_{-k,\uparrow}
\end{align}$$
于是：
$$\begin{align}
\mathcal{T}H\mathcal{T}^{-1} & = \mathcal{T}\sum_{k,\sigma}[2t^{'}g(k)\sigma(c^{\dagger}_{A,k,\sigma}c_{A,k,\sigma}-c^{\dagger}_{B,k,\sigma}c_{B,k,\sigma})-tf(k)c^{\dagger}_{A,k,\sigma}c_{B,k,\sigma}-tf^{*}(k)c^{\dagger}_{B,k,\sigma}c_{A,k,\sigma}]\mathcal{T}^{-1} \\
 & = \sum_{k,\sigma}[2t^{'}g(k)\sigma(c^{\dagger}_{A,-k,-\sigma}c_{A,-k,-\sigma}-c^{\dagger}_{B,-k,-\sigma}c_{B,-k,-\sigma})-tf^{*}(k)c^{\dagger}_{A,-k,-\sigma}c_{B,-k,-\sigma}-tf(k)c^{\dagger}_{B,-k,-\sigma}c_{A,-k,-\sigma}] \\
 & = \sum_{k,\sigma}[2t^{'}g(-k)(-\sigma)(c^{\dagger}_{A,k,\sigma}c_{A,k,\sigma}-c^{\dagger}_{B,k,\sigma}c_{B,k,\sigma})-tf^{*}(-k)c^{\dagger}_{A,k,\sigma}c_{B,k,\sigma}-tf(-k)c^{\dagger}_{B,k,\sigma}c_{A,k,\sigma}]
\end{align}$$
注意到$g(-k)=-g(k),\ f(-k)=f^{*}(k)$，故：
$$\mathcal{T}H\mathcal{T}^{-1}=H$$
所以Kane-Mele模型具有时间反演对称性。

>[!Success] Proposition 2.2
>Kane-Mele model preserves times-reversal symmetry.

接下来，注意到：
$$\begin{align}
\mathcal{T} \psi_{k}\mathcal{T}^{-1} & = \begin{pmatrix}
c_{A,-k,\downarrow} \\
c_{B,-k,\downarrow} \\
-c_{A,-k,\uparrow} \\
-c_{B,-k,\uparrow}
\end{pmatrix}= \begin{pmatrix}
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
-1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0
\end{pmatrix} \begin{pmatrix}
c_{A,-k,\uparrow} \\
c_{B,-k,\uparrow} \\
c_{A,-k,\downarrow} \\
c_{B,-k,\downarrow}
\end{pmatrix}=(i s ^{y}\otimes I_{2\times {2}}) \psi_{-k}
\end{align}$$
此处两边夹上$\mathcal{T}$仅仅是对于$\psi_{k}$矩阵中的元素作pointwise的作用，而不是对矩阵本身作用。其中$s^{y}=\sigma_{y}$为Pauli矩阵。

>[!Quote] 矩阵直积
>矩阵直积规定为：
>$$A \otimes B= \begin{pmatrix}
A_{11} B& A_{12}B  & \dots \\
A_{21} B  & A_{22}B & \dots \\
\dots  & \dots & \dots
\end{pmatrix}$$
>而矩阵直积的运算性质基本上和算子直积相同。

那么：
$$\begin{align}
\mathcal{T}H\mathcal{T}^{-1} & = \mathcal{T}\sum_{k}\psi_{k}^{\dagger}H(k)\psi_{k} \mathcal{T}^{-1}\\
 & = \sum_{k}\mathcal{T}\psi ^{\dagger}_{k}\mathcal{T}^{-1}\mathcal{T}H(k)\mathcal{T}^{-1} \mathcal{T}\psi_{k}\mathcal{T}^{-1} \\
 & = \sum_{k}\psi ^{\dagger}_{-k}(is^{y}\otimes I_{2\times{2}} )^{\dagger} \mathcal{T}H(k)\mathcal{T}^{-1} (i s ^{y}\otimes I_{2 \times 2}) \psi _{-k}
\end{align}$$
容易证明：
$$\begin{align}
\mathcal{T}H(k)\mathcal{T}^{-1} & = \mathcal{T}\begin{pmatrix}
2t^{'}g(k) & -2t f(k) \\
-2tf^{*}(k) & -2t^{'}g(k) 
\end{pmatrix} \mathcal{T}^{-1} \\
 & = \begin{pmatrix}
2t^{'}g(k) & -2t f^{*}(k) \\
-2tf(k) & -2t^{'}g(k) \\
 
\end{pmatrix} \\
 & = H^{*}(k)
\end{align}$$
于是：
$$\begin{align}
\mathcal{T}H\mathcal{T}^{-1} & = \sum_{k}\psi ^{\dagger}_{-k}(i s ^{y}\otimes I_{2 \times 2})^{\dagger}H^{*}(k)(i s ^{y}\otimes I_{2 \times 2})\psi_{-k} \\
 & = \sum_{k}\psi ^{\dagger}_{-k}(i s ^{y}\otimes I _{ 2 \times 2})^{\dagger} K H(k)K(i s ^{y}\otimes I_{2 \times 2})\psi_{-k}
\end{align}$$
由于$is ^{y}\otimes I_{2\times 2}$是实矩阵，所以$K(i s ^{y}\otimes I_{2 \times 2})=(is ^{y}\otimes I_{2\times 2})K$。且注意到$is ^{y},\ I_{2\times 2}$都是unitary的。于是$(i s^{y}\otimes I_{2\times 2})^{-1}=(is ^{y})^{-1}\otimes I_{2\times 2}^{-1}=(i s ^{y})^{\dagger}\otimes I_{2\times 2}^{\dagger}=(is ^{y}\otimes I_{2\times 2})^{\dagger}$。那么：
$$\begin{align}
\mathcal{T}H\mathcal{T}^{-1} & = \sum_{k}\psi ^{\dagger}_{-k}K(is ^{y}\otimes I_{2\times 2})^{\dagger}H(k)(is ^{y}\otimes I_{2 \times 2})K\psi_{-k} \\
 & = \sum_{k}\psi ^{\dagger}_{-k}[(is ^{y}\otimes I_{2\times 2})K]^{-1} H(k)[(is ^{y}\otimes I_{2\times 2})K]\psi_{-k}
\end{align}$$
定义$\Theta=(is ^{y}\otimes I_{2\times 2})K$。于是便有：
$$\mathcal{T}H \mathcal{T}^{-1}=\sum_{k}\psi ^{\dagger}_{-k}\Theta ^{-1}H(k)\Theta \psi_{-k}$$
而由于$\mathcal{T}H\mathcal{T}^{-1}=H=\sum_{k}\psi ^{\dagger}_{k}H(k)\psi_{k}=\sum_{k}\psi ^{\dagger}_{-k}H(-k)\psi_{-k}$。所以必有：
$$\boxed{\Theta ^{-1}H(k)\Theta=H(-k)}$$
而容易计算：
$$\begin{align}
\Theta ^{-1}H(k)\Theta & = \begin{pmatrix}
0 & -I_{2 \times 2} \\
I_{2\times 2} & 0
\end{pmatrix} \begin{pmatrix}
H^{*}_{\uparrow}(k) & 0 \\
0 & H^{*}_{\downarrow}(k)
\end{pmatrix} \begin{pmatrix}
0 & I_{2\times 2} \\
-I_{2\times 2} & 0
\end{pmatrix} \\
 & = \begin{pmatrix}
H^{*}_{\downarrow}(k ) & 0 \\
0 & H^{*}_{\uparrow}(k)
\end{pmatrix}
\end{align}$$
于是必有$H_{\uparrow}(-k)=H^{*}_{\downarrow}(k),\ H_{\downarrow}(-k)=H^{*}_{\uparrow}(k)$。

## 空间反演对称性

对于任意可观测量$X$，由于：
$$\bra{\psi} X\ket{\psi} = \bra{\mathcal{P}\psi} \mathcal{P}X \mathcal{P}^{\dagger}\ket{\mathcal{P}\psi} $$
所以空间反演后可观测量变为$\mathcal{P}X\mathcal{P}^{\dagger}$。

我们先研究$\mathcal{P}$对湮灭算符的作用：
$$\begin{align}
\mathcal{P}^{}c_{A,k,\sigma}\mathcal{P}^{\dagger} & = \mathcal{P}^{}\ket{0_{A,k,\sigma}} \bra{A,k,\sigma} \mathcal{P}^{\dagger} \\
 & = \ket{\mathcal{P}0_{A,k,\sigma}} \bra{\mathcal{P}A,k,\sigma} \\
 & = \ket{0_{B,-k,\sigma}} \bra{B,-k,\sigma}  \\
 & = c_{B,-k,\sigma}  
\end{align}$$
>[!Quote]
>具体来说，要计算$\mathcal{P}\ket{A,k,\sigma}$，可以考虑平移。在实空间中，首先对于$R$指示的格子中的$A$点有：
>$$\ket{A,R,\sigma} =T_{R}\ket{A,0,\sigma} $$
>由于$\mathcal{P}T_{R}\mathcal{P}^{\dagger}=\exp\left( - \frac{i}{\hbar}\mathcal{P}p\mathcal{P}^{\dagger}R \right)=\exp\left(  \frac{i}{\hbar}pR \right)=T_{-R}$，我们有：
>$$\begin{align}
\mathcal{P}\ket{A,R,\sigma} & = \mathcal{P}T_{R}\ket{A,0,\sigma}  \\
 & = T_{-R}\mathcal{P}\ket{A,0,\sigma}  \\
 & = T_{-R}\mathcal{P}T_{r_{A}}\ket{0,0,\sigma}  \\
 & = T_{-R}T_{-r_{A}}\mathcal{P}\ket{0,0,\sigma}=T_{-R}T_{-r_{A}}\ket{0,0,\sigma} =T_{-R}\ket{B,0,\sigma}=\ket{B,-R,\sigma}    
\end{align} $$
>Fourier变换得到：
>$$\begin{align}
\ket{A,k,\sigma}  & = \frac{1}{\sqrt{ N }}\sum_{R}e^{-ikR}\ket{A,R,\sigma}  \\
 \implies & \mathcal{P}\ket{A,k,\sigma}  & = \frac{1}{\sqrt{ N }}\sum_{R}e^{-ikR}\ket{B,-R,\sigma}  \\
 & = \frac{1}{\sqrt{ N }}\sum_{R}e^{ikR}\ket{B,R,\sigma}  \\
 & = \frac{1}{\sqrt{ N }}\sum_{R}e^{-i(-k)R}\ket{B,R,\sigma}  \\
 & =  \ket{B,-k,\sigma} 
\end{align}$$
>对$B$同理。

同理，$\mathcal{P}c_{B,k,\sigma}\mathcal{P}^{\dagger}=c_{A,-k,\sigma}$。于是：
$$\begin{align}
\mathcal{P}\psi_{k}\mathcal{P}^{-1} & = \begin{pmatrix}
c_{B,-k,\uparrow} \\
c_{A,-k,\uparrow} \\
c_{B,-k,\downarrow} \\
c_{A,-k,\downarrow}
\end{pmatrix}= \begin{pmatrix}
0 & 1 & 0 & 0 &  \\
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0
\end{pmatrix} \begin{pmatrix}
c_{A,-k,\uparrow} \\
c_{B,-k,\uparrow} \\
c_{A,-k,\downarrow} \\
c_{B,-k,\downarrow}
\end{pmatrix}= (I_{2\times 2}\otimes \tau^{x})\psi_{-k}
\end{align}$$
于是：
$$\begin{align}
\mathcal{P}H\mathcal{P}^{\dagger} & = \mathcal{P}\sum_{k}\psi ^{\dagger}_{k}H(k)\psi_{k}\mathcal{P}^{\dagger} \\
 & = \sum_{k}\mathcal{P}\psi ^{\dagger}_{k}\mathcal{P}^{\dagger}\mathcal{P}H(k)\mathcal{P}^{\dagger} \mathcal{P}\psi_{k}\mathcal{P}^{\dagger} \\
 & = \sum_{k}\psi ^{\dagger}_{-k}(I_{2 \times 2}\otimes \tau^{x})^{\dagger}H(k)(I_{2 \times 2}\otimes \tau^{x})\psi_{-k}
\end{align}$$
定义$\pi=I_{2\times 2}\otimes \tau^{x}$。那么可以写：
$$\begin{align}
\mathcal{P}H\mathcal{P}^{\dagger}= \sum_{k}\psi ^{\dagger}_{-k}\pi ^{\dagger}H(k)\pi \psi_{-k}
\end{align}$$
而：
$$\begin{align}
\pi ^{\dagger}H(k)\pi & = \begin{pmatrix}
\tau^{x} & 0 \\
0 & \tau^{x} 
\end{pmatrix} \begin{pmatrix}
H_{\uparrow}(k) & 0 \\
0 & H_{ \downarrow}(k)
\end{pmatrix}\begin{pmatrix}
\tau^{x} & 0 \\
0 & \tau^{x}
\end{pmatrix} \\
 & = \begin{pmatrix}
\tau^{x}H_{\uparrow}(k)\tau^{x} & 0 \\
0 & \tau^{x}H_{\downarrow}(k)\tau^{x}
\end{pmatrix}
\end{align}$$
可以计算：
$$\begin{align}
\tau^{x}H_{\uparrow}(k)\tau^{x} & = \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \begin{pmatrix}
2t^{'}g(k) & -2tf(k) \\
-2tf^{*}(k) & -2t^{'}g(k)
\end{pmatrix} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \\
 & = \begin{pmatrix}
-2t^{'}g(k) & -2tf^{*}(k) \\
-2tf(k) & 2t^{'}g(k)
\end{pmatrix} \\
 & = \begin{pmatrix}
2t^{'}g(-k) & -2tf(-k) \\
-2tf^{*} (-k) & -2t^{'}g(-k)
\end{pmatrix} \\
 & = H_{\uparrow}(-k)
\end{align}$$
同理$\tau^{x}H_{\downarrow}(k)\tau^{x}=H_{\downarrow}(-k)$。于是：
$$\boxed{\pi ^{\dagger}H(k)\pi=H(-k)}$$那么：
$$\begin{align}
\mathcal{P}H\mathcal{P}^{\dagger} & = \sum_{k}\psi ^{\dagger}_{-k}H(-k)\psi_{-k} \\
 & = \sum_{k}\psi ^{\dagger}_{k}H(k)\psi_{k} \\
 & = H
\end{align}$$

>[!Success] Proposition 2.3
>The Kane-Mele model preserves the space-inversion symmetry.

# 3. Fu-Kane公式

令$\boldsymbol{\tau},\ \mathbf{s}$分别为动量$\pm k$，自旋$\uparrow,\downarrow$的Pauli矩阵。定义Dirac矩阵：

>[!Note] Definition 3.1
>Define the Dirac matrices:
>$$\Gamma^{1,2,3,4,5}=(I_{2\times 2}\otimes \tau^{x},I_{2\times 2}\otimes \tau^{y},s ^{x}\otimes \tau^{z},s ^{y} \otimes \tau^{z}, s ^{ z}\otimes \tau^{z})$$
>Define the commutators of Dirac matrices:
>$$\Gamma^{ab}= \frac{[\Gamma^{a},\Gamma^{b}]}{2i}$$


可以证明，$I_{4\times 4},\ \Gamma^{a},\ \Gamma^{ab}$是16个互相线性独立的矩阵。它们构成$\text{Mat}_{4\times 4}(\mathbb{C})$的基。那么记Kane-Mele模型的hamiltonian为：
$$H(k)=d_{0}(k)I+\sum_{a}d_{a}(k)\Gamma^{a}+\sum_{a<b}d_{ab}(k)\Gamma^{ab}$$
可以硬算：
$$\begin{align}
 & \Theta ^{-1}\Gamma^{1}\Theta=\Gamma_{1} \\
 & \Theta ^{-1}\Gamma^{a}\Theta=-\Gamma^{a},\ a>1 \\
 & \Theta ^{-1}\Gamma^{1b}\Theta=\Gamma^{1b},\ b>1 \\
 & \Theta ^{-1}\Gamma^{ab}\Theta=-\Gamma^{ab},\ 1<a<b \\
 & \pi ^{\dagger}\Gamma^{1}\pi=\Gamma_{1} \\
 & \pi ^{\dagger}\Gamma^{a}\pi=-\Gamma^{a},\ a>1 \\
 & \pi ^{\dagger} \Gamma^{1b}\pi=-\Gamma^{1b},\ b>1 \\
 & \pi ^{\dagger}\Gamma^{ab}\pi=\Gamma^{ab},\ 1<a<b
\end{align}$$
那么：
$$\Theta ^{-1}H(k)\Theta=d_{0}(k)I+d_{1}(k)\Gamma^{1}-\sum_{a=2}^{5}d_{a}(k)\Gamma^{a}+\sum_{b=2}^{5}d_{1b}(k)\Gamma^{1b}-\sum_{1<a<b}^{5}d_{ab}(k)\Gamma^{ab}$$
我们知道$\Theta ^{-1}H(k)\Theta=H(-k)$。所以$d_{0},d_{1},d_{1b},\ b>1$为偶函数，$d_{a},d_{ab},\ a,b>1$为奇函数。而：
$$\pi ^{\dagger}H(k)\pi=d_{0}(k)I+d_{1}(k)\Gamma^{1}-\sum_{a=2}^{5}d_{a}(k)\Gamma^{a}-\sum_{b=2}^{5}d_{1b}(k)\Gamma^{1b}+\sum_{1<a<b}^{5}d_{ab}(k)\Gamma^{ab}$$
我们知道$\pi ^{\dagger}H(k)\pi=H(-k)$。所以$d_{0},d_{1},d_{ab},\ a,b>1$为偶函数，$d_{a},d_{1b},\ b>1$为奇函数。故$d_{ab}=0,\ d_{1b}=0,\ a,b>1$。所以：
$$H(k)=d_{0}(k)I+\sum_{a=1}^{5}d_{a}(k)\Gamma^{a}$$

>[!Success] Proposition 3.1
>For the Kane-Mele model, the symmetry requires $H(k)=d_{0}(k)I+\sum_{a=1}^{5}d_{a}(k)\Gamma^{a}$

那么在TRIM点$\Gamma_{i}$，由于$-k=k$，且$d_{a},\ a>1$都是奇函数，所以$H(\Gamma_{i})=d_{0}(\Gamma_{i})I+d_{1}(\Gamma_{i})\Gamma^{1}$。令本征态为$\ket{u(\Gamma_{i})}$，容易解得色散关系：
$$\begin{align}
 & [d_{0}(\Gamma_{i})I+d_{1}(\Gamma_{i})\Gamma^{1}]\ket{u(\Gamma_{i})} =\lambda \ket{u(\Gamma_{i})} \\
\implies & \lambda_{\pm}=d_{0}(\Gamma_{i})\pm|d_{1}(\Gamma_{i})| 
\end{align}$$
注意到$\Gamma^{1}=I_{2\times 2}\otimes \tau^{x}=\pi$，我们可以得到空间反演后的本征态：
$$\pi \ket{u(\Gamma_{i})} = \frac{\lambda-d_{0}(\Gamma_{i})}{d_{1}(\Gamma_{i})}\ket{u(\Gamma_{i})} $$我们研究绝缘体。假设电子处在$\lambda_{-}$。于是：
$$\begin{align}
\pi \ket{u(\Gamma_{i})} =- \frac{|d_{1}(\Gamma_{i}) |}{d_{1}(\Gamma_{i})} \ket{u(\Gamma_{i})} 
\end{align}$$
所以$\ket{u(\Gamma_{i})}$的宇称为$\delta_{i}=-\text{sgn}(d_{1}(\Gamma_{i}))$。我们定义Fu-Kane公式：
$$\boxed{(-1)^{\nu}=\prod_{i}\delta_{i}}$$
不妨考虑将保持时空反演对称性的所有可能的hamiltonian收集起来，构成空间$\mathscr{H}$。不妨设$\epsilon_{F}=0$，那么依据$0$是否属于这些hamiltonian的能谱，可将空间分解为有能隙算子和无能隙算子。即$\mathscr{H}=\mathscr{H}^{\text{gap}} \oplus \mathscr{H}^{\text{gapless}}$。那么从$T^{2}\rightarrow \mathscr{H}^{\text{gap}}$可以构成一些同伦映射。系统hamiltonian就是这样的映射。可以证明$[T^{2},\mathscr{H}^{\text{gap}}] \cong \mathbb{Z}_{2}$。可以证明$\nu$就是hamiltonian构成的同伦类的isomorphism。于是$\nu$是一个$\mathbb{Z}_{2}$拓扑不变量。其中，$\nu=0$称为平凡绝缘体。$\nu=1$称为拓扑绝缘体。











