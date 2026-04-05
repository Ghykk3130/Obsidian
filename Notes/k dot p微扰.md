# 1. 无自旋粒子的能量

考虑具有晶体周期性的平均场下，电子的Schrodinger方程：
$$\left( \frac{p^{2}}{2m}+V \right)\ket{\psi_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k}) \ket{\psi_{n,\mathbf{k}}} $$
其中$\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}$为Bloch态。那么k空间中Schrodinger方程写为：
$$\begin{align}
 & \left( \frac{|\mathbf{p}+\hbar \mathbf{k}|^{2}}{2m}+V \right)\ket{u_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k})\ket{u_{n,\mathbf{k}}} \\
 & \left(  \frac{p^{2}}{2m}+V+ \frac{\hbar}{m}\mathbf{k}\cdot \mathbf{p}+ \frac{\hbar^{2}k^{2}}{2m} \right)\ket{u_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k})\ket{u_{n,\mathbf{k}}} 
\end{align} $$
将$\frac{\hbar}{m}\mathbf{k}\cdot \mathbf{p}+ \frac{\hbar^{2}k^{2}}{2m}$当作微扰。注意到unperturbed的Schrodinger方程对应$\mathbf{k}=0$：
$$\left( \frac{p^{2}}{2m}+V \right)\ket{u_{n,0}} =\epsilon_{n}(0)\ket{u_{n,0}} $$
接下来进行微扰。由于$\mathbf{p}$有奇宇称，所以：
$$\begin{align}
\bra{u_{n,0}} \mathbf{k}\cdot \mathbf{p}\ket{u_{n,0}}  & = \mathbf{k}\cdot \bra{u_{n,0}} \mathbf{p}\ket{u_{n,0}} =0
\end{align}$$
而：
$$\bra{u_{n,0}}  k^{2}\ket{u_{n,0}} =k^{2}$$
故一阶修正为$\frac{\hbar^{2}k^{2}}{2m}$。接下来计算二阶修正。显然由于$k^{2}$在$\{ \ket{u_{n,0}} \}$基下已经对角化，二阶修正为零。而$\frac{\hbar}{m} \mathbf{k}\cdot \mathbf{p}$产生的二阶修正为：
$$\begin{align}
\frac{\hbar^{2}}{m^{2}}\sum_{n^{'}\neq n}  \frac{|\bra{u_{n^{'},0}} \mathbf{k}\cdot \mathbf{p}\ket{u_{n,0}} |^{2}}{\epsilon_{n}-\epsilon_{n^{'}}} & = \frac{\hbar^{2}k^{2}}{m^{2}} \sum_{n^{'}\neq n} \frac{|p_{n^{'}n}|^{2}}{\epsilon_{n}-\epsilon_{n^{'}}} 
\end{align}$$
故修正后能量为：
$$\epsilon_{n}(\mathbf{k})=\epsilon_{n}(0)+ \frac{\hbar^{2}k^{2}}{2m}+ \frac{\hbar^{2}k^{2}}{m^{2}}\sum_{n^{'}\neq n} \frac{|p_{n^{'}n}|^{2}}{\epsilon_{n}-\epsilon_{n^{'}}}$$
定义有效质量：

>[!Note] Definition 1.1
>Define the effective mass by:
>$$\frac{1}{m^{*}}= \frac{1}{m}+ \frac{2}{m^{2}}\sum_{n^{'}\neq n} \frac{|p_{n^{'}n}|^{2}}{\epsilon_{n}-\epsilon_{n^{'}}}$$

于是能量色散可以写为：

>[!Success] Proposition 1.1
>The energy dispersion near the $\Gamma$ point is:
>$$\epsilon_{n}(\mathbf{k})=\epsilon_{n}(0)+ \frac{\hbar^{2}k^{2}}{2m^{*}}$$
# 2. Rashba项

现在考虑自旋，但是暂不考虑不同电子自旋的交换作用。这将会引入一个spin-orbit coupling项$\frac{\hbar}{4m^{2}c^{2}}(\nabla V\times \mathbf{p})\cdot \boldsymbol{\sigma}$。那么Hamiltonian为：
$$H= \frac{p^{2}}{2m}+V+ \frac{\hbar}{4m^{2}c^{2}}(\nabla V\times \mathbf{p})\cdot \boldsymbol{\sigma}$$
通过$\mathbf{p}\leadsto \mathbf{p}+\hbar \mathbf{k}$得到k空间的Hamiltonian：
$$\begin{align}
H(\mathbf{k} ) & = \frac{|\mathbf{p}+\hbar \mathbf{k}|^{2}}{2m}+V+ \frac{\hbar}{4m^{2}c^{2}}(\nabla V\times(\mathbf{p}+\hbar \mathbf{k}))\cdot \boldsymbol{\sigma} \\
 & = \frac{p^{2}}{2m}+ V+ \frac{\hbar^{2}k^{2}}{2m}+ \frac{\hbar}{m}\mathbf{k}\cdot \mathbf{p}+ \frac{\hbar}{4m^{2}c^{2}}(\nabla V\times \mathbf{p})\cdot \boldsymbol{\sigma}+ \frac{\hbar^{2}}{4m^{2}c^{2}}(\nabla V\times \mathbf{k})\cdot \boldsymbol{\sigma}
\end{align}$$
