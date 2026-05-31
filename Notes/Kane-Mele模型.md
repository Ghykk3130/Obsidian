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
令$\psi_{k}=(c_{A,k,\uparrow},c_{B,k,\uparrow},c_{A,k,\downarrow}, c_{B,k,\downarrow})$。那么：
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
子块$H_{\uparrow}(k)$对角化得到两条能带：
$$E_{\uparrow,\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+t^{'2}g^{2}(k) }$$
子块$H_{\downarrow,\pm}(k)$对角化得到两条能带：
$$E_{\downarrow,\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+t^{'2}g^{2}(k) }$$
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

对于spin-1/2粒子，时间反演算子为$-i\sigma_{y}$。它将$\ket{\uparrow}$映成$\ket{\downarrow}$，将$\ket{\downarrow}$映成$-\ket{\uparrow}$。对于动量本征态$\ket{k}$，时间反演算子将动量反转为$\ket{-k}$。于是：
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


 


