考虑一个晶体。实空间中的点用$R$标记。每个点$R$有两条轨道，用$\tau=\pm$标记。每条轨道可以放入自旋为$\sigma=\uparrow,\downarrow$的电子。

若电子处在$\pm$轨道有$\frac{m}{2}$的能量差异，那么hamiltonian中出现一项：
$$\begin{align}
m\sum_{R,\sigma}(c^{\dagger}_{{R},+,\sigma}c_{{R},+,\sigma}-c^{\dagger}_{R,-,\sigma}c_{R,-,\sigma})
\end{align}$$
令$\psi_{R}=\begin{pmatrix}c_{R,+,\uparrow} \\ c_{R,+,\downarrow} \\ c_{R,-,\uparrow} \\ c_{R,-,\downarrow}\end{pmatrix}=\begin{pmatrix}c_{R,+} \\ c_{R,-} \end{pmatrix} \otimes \begin{pmatrix}c_{\uparrow} \\ c_{\downarrow}\end{pmatrix}$。那么：
$$\begin{align}
m\sum_{R,\sigma}(c^{\dagger}_{{R},+,\sigma}c_{{R},+,\sigma}-c^{\dagger}_{R,-,\sigma}c_{R,-,\sigma})
=m\sum_{R}\psi_{R}^{\dagger}\tau^{x}\otimes I_{2\times 2}\psi_{R}\end{align}$$
若处在特定的轨道$\tau$中，电子由于Zeeman作用使得$\sigma=\uparrow,\downarrow$有$\frac{b}{2}$的能量差异，那么hamiltonian中出现一项：$$b\sum_{R,\tau}(c^{\dagger}_{R,\tau,\uparrow}c_{R,\tau,\uparrow}-c^{\dagger}_{R,\tau,\downarrow}c_{R,\tau,\downarrow})=b\sum_{R}\psi ^{\dagger}_{R}I_{2 \times 2}\otimes \sigma^{z}\psi_{R}$$若电子在不同的轨道之间跳跃，则存在hopping项$t\sum_{R}\sum_{\delta}c^{\dagger}_{R,\tau,}$