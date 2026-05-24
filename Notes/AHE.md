# 1. AHE的定义

考虑conductivity张量：
$$\boldsymbol{\sigma}=\begin{pmatrix}
\sigma_{x x} & \sigma_{xy} \\
-\sigma_{xy} & \sigma_{x x}
\end{pmatrix}$$
求逆得到resistivity张量：
$$\begin{align}
\boldsymbol{\rho} & = \frac{1}{\sigma_{x x}^{2}+\sigma_{xy}^{2} }\begin{pmatrix}
\sigma_{x x} & -\sigma_{xy} \\
\sigma_{xy} & \sigma_{x x}
\end{pmatrix}
\end{align}$$
于是得到Hall resistivity和Hall conductivity的关系：
$$\rho_{xy}= \frac{-\sigma_{xy}}{\sigma^{2}_{x x}+\sigma^{2}_{xy}}$$
若Hall angle非常小，则$\sigma_{xy}\approx 0$。于是得到：
$$\rho_{xy}= - \frac{\sigma_{xy}}{\sigma_{x x}^{2}}=-\sigma_{xy}\rho_{x x}^{2}$$
宏观上，我们有经验公式：
$$\rho_{xy}=R_{0}H+R_{1}M$$
称$R_{0}$为Hall coefficient，$R_{1}$为anomalous Hall coefficient。

一般来说，$\sigma_{xy}$可以拆成两部分：$\sigma_{xy}=\sigma_{xy}^{\text{OD}}+\sigma_{xy}^{\text{AHE}}$，即ordinary和anomalous两部分。我们知道$\sigma_{xy}^{\text{OD}}= \frac{|e|B}{n}$。这就贡献了$R_{0}H$部分。$\sigma_{xy}^{\text{AHE}}$贡献了$R_{1}M$部分。而$\sigma_{xy}^{\text{AHE}}$又可进一步拆分为三种微观机制：
$$\sigma_{xy}^{\text{AHE}}=\sigma_{xy}^{\text{int}}+\sigma_{xy}^{\text{sk}}+\sigma_{xy}^{sj}$$
分别为intrinsic, skew symmetric和side jump。

# 2. Skew scattering 机制

考虑一个杂质离子有势能$V$，磁矩$\mathbf{M}$。一个准粒子被杂质散射。假设在散射过程中，$\boldsymbol{\sigma}$由于与杂质离子的$\mathbf{M}$强耦合而始终平行于$\mathbf{M}$。那么$\boldsymbol{\sigma}$为一常量。则准粒子的hamiltonian写为：
$$H= \frac{p^{2}}{2m^{*}}+V+ \frac{\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\cdot(\nabla V\times \mathbf{p})$$
将$\frac{p^{2}}{2m^{*}}$当作unperturbed hamiltonian，拥有本征矢$\{ \ket{\mathbf{k}} \}$。将$V+ \frac{\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\cdot(\nabla V\times \mathbf{p})$当作微扰。我们计算散射矩阵元。考虑：
$$\begin{align}
\bra{\mathbf{k}^{'}} V \ket{\mathbf{k}}  & = \frac{1}{L^{3}}\int d^{3}r e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} V(\mathbf{r}) =V(\mathbf{k}^{'}-\mathbf{k})
\end{align}$$
然后：
$$\begin{align}
\bra{\mathbf{k}^{'}} \boldsymbol{\sigma}\cdot(\nabla V\times \mathbf{p})\ket{\mathbf{k}}  & = \boldsymbol{\sigma}\cdot \bra{\mathbf{k}^{'}} \nabla V\times \mathbf{p}  \ket{\mathbf{k}} \\
 & = \boldsymbol{\sigma}\cdot[\bra{\mathbf{k}^{'}} \nabla V\ket{\mathbf{k}} \times \hbar \mathbf{k}] 
\end{align}$$
我们有：
$$\begin{align}
\bra{\mathbf{k}^{'}} \nabla V\ket{\mathbf{k}}  & = \frac{1}{L^{3}}\int d^{3}r e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} \nabla V \\
 & = \frac{1}{L^{3}}\int d^{3}r  \left[\nabla(Ve^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}})- Vi(\mathbf{k}-\mathbf{k}^{'})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} \right] \\
 & = \frac{i(\mathbf{k}^{'}-\mathbf{k})}{L^{3}} \int d^{3}r V e^{-i(\mathbf{k}^{'}-\mathbf{k})\cdot \mathbf{r}} \\
 & = i(\mathbf{k}^{'}-\mathbf{k})V(\mathbf{k}^{'}-\mathbf{k})
\end{align}$$
那么：
$$\begin{align}
W & = \frac{2\pi}{\hbar} |V(\mathbf{k}^{'}-\mathbf{k})+ V(\mathbf{k}^{'}-\mathbf{k})\lambda \mathbf{M}\cdot(\mathbf{k}^{'}\times \mathbf{k})|^{2} \\
 & = w_{\mathbf{k}\rightarrow \mathbf{k}^{'}}|1+\lambda \mathbf{M}\cdot(\mathbf{k}^{'}\times \mathbf{k}) |^{2}
\end{align}$$
其中$w_{\mathbf{k}\rightarrow \mathbf{k}^{'}}= \frac{2\pi}{\hbar}|\bra{\mathbf{k}^{'}}V\ket{\mathbf{k}}|^{2}$为无SOI时散射率。由此可见，不同方位的$\mathbf{k}^{'}$会影响散射率，使得某个特定方向的$\mathbf{k}^{'}$是被favor的。Skew symmetric机制与散射率有关。因此与$\tau$有关。可以证明，$\sigma^{\text{sk}}_{xy}\propto \tau \propto \frac{1}{\rho_{x x}}$。于是最终对于$R_{1}M$的贡献是$\propto \rho_{x x}^{2}\cdot \frac{1}{\rho_{x x}}\propto \rho_{xx}$的。

# 3. Side jump机制

相同模型。有hamiltonian：
$$H= \frac{p^{2}}{2m^{*}}+V+ \frac{\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\cdot(\nabla V\times \mathbf{p})$$
我们由Erenfest定理求准粒子经典速度：$\mathbf{v}= \frac{d}{dt} \langle \mathbf{r}\rangle= \frac{1}{i\hbar}\langle [\mathbf{r},H]\rangle$。显然$\left[ \mathbf{r}, \frac{p^{2}}{2m^{*}} \right]$给出一个平凡的速度$\mathbf{v}_{0}= \frac{\mathbf{p}}{m^{*}}$。而$[\mathbf{r},V]=0$无贡献。那么考虑：
$$\begin{align}
[r_{i}, \sigma_{j}\epsilon_{jkl}(\nabla V)_{k}p_{l}] & = \epsilon_{jkl}\sigma_{j}(\nabla V)_{k}[r_{i},p_{l}] \\
 & = i\hbar \epsilon_{ijk}\sigma_{j}(\nabla V)_{k}
\end{align}$$
故$[\mathbf{r},\boldsymbol{\sigma}\cdot(\nabla V\times \mathbf{p})]= i\hbar \boldsymbol{\sigma}\times \nabla V$。于是得出一个非平凡速度：
$$\mathbf{v}^{\text{sj}}=  \frac{\hbar}{4m^{2}c^{2}} \langle \boldsymbol{\sigma}\times \nabla V \rangle= \frac{\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\times \nabla V$$
最后一步是转换到半经典的图像。我们有：$\dot{\mathbf{p}}=-\nabla V$。于是：
$$\mathbf{v}^{\text{sj}}= \frac{-\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\times  \dot{\mathbf{p}}$$
那么我们计算从散射开始到结束，以$\mathbf{v}^{\text{sj}}$运动了多少：
$$\begin{align}
\delta \mathbf{r}^{\text{sj}} & = \int_{i}^{f}dt \mathbf{v}^{\text{sj}} \\
 & = - \frac{\hbar}{4m^{2}c^{2}}\boldsymbol{\sigma}\times \int_{i}^{f}d\mathbf{p} \\
 & = - \frac{\hbar^{2}}{4m^{2}c^{2}}\boldsymbol{\sigma}\times(\mathbf{k}^{'}-\mathbf{k})\propto \mathbf{M}\times \Delta \mathbf{k}
\end{align}$$
这让粒子在实空间于垂直于$\mathbf{M}$的方向上位移。我们看到，side jump机制与散射率无关。因此与$\tau$无关。最终对于anomalous Hall resistivity的贡献是与$\tau \propto \sigma_{x x}$无关的。


