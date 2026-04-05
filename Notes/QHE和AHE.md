# 1. QHE

考虑一个二维绝缘体加上电场$\mathbf{E}=E \hat{\mathbf{y}}$。则速度方程为：
$$\mathbf{v}= \frac{\partial\epsilon}{\hbar \partial \mathbf{k}}- \frac{|e|}{\hbar}\mathbf{E}\times \boldsymbol{\Omega}= \frac{\partial\epsilon}{\hbar \partial \mathbf{k}}- \frac{|e|}{\hbar}\Omega_{k_{x},k_{y}}E  \hat{\mathbf{x}}$$
那么积分可以得到Hall conductivity：
$$\begin{align}
j_{x} & = \frac{1}{A} \frac{A}{(2\pi)^{2}}\int_{\text{BZ}} d^{2}k e\mathbf{v} \\
 & = \frac{e^{2}}{\hbar(2\pi)^{2}} \int_{\text{BZ}} d^{2}k \Omega_{k_{x},k_{y}} E    \\
 & = \frac{e^{2}}{h}C E \\
\implies \sigma_{xy} & = \frac{e^{2}}{h}C
\end{align}$$
这即是TKNN公式。由于$C$是量子化的，$\sigma_{xy}$也是量子化的。

# 2. AHE

考虑一个二维电子气。若系统在z方向空间反演对称性破缺，例如存在z方向的势能梯度$\nabla V$，则存在spin-orbit coupling项$\frac{\hbar}{4m^{2}c^{2}}(\nabla V\times \mathbf{p})\cdot \boldsymbol{\sigma}$。

>[!Quote] 一个非对称性诱导出势能梯度的例子
例如$Pt/ Co / AlO_{x}$构成的heterostructure中，$Pt /Co$界面和$Co / AlO_{x}$界面的非对称性会诱导出这样的coupling。在界面处，由于化学势的不同，电子会迁移从而建立电场。而电场由于屏蔽，几乎只存在在分界处。

可以由微扰证明，该项等效于k空间的$\lambda(\mathbf{k}\times \boldsymbol{\sigma})\cdot  \hat{\mathbf{z}}$，称为Rashba项。则Hamiltonian可以写为：
$$H(\mathbf{k})= \frac{\hbar^{2}k^{2}}{2m}+ \lambda(\mathbf{k}\times \boldsymbol{\sigma})\cdot  \hat{\mathbf{z}}- \Delta \sigma_{z}$$
其中$-\Delta \sigma_{z}$代表平均场和该电子的交换耦合，取$\Delta>0$用来模拟铁磁体系。$m$为有效质量。

容易看出，本征态为$\ket{u_{\mathbf{k}}}$和方向在$(\lambda k_{x}, -\lambda k_{y},-\Delta)$的两个本征态的直积。显然能带结构为：
$$\begin{align}
\epsilon_{\pm}(\mathbf{k})= \frac{\hbar^{2}k^{2}}{2m}\pm \frac{\hbar}{2} \sqrt{ \lambda^{2}k^{2}+\Delta^{2} }
\end{align}$$
![[Pasted image 20260405160854.png|center|300]]

回忆起任意二参数Berry curvature可以由球坐标换元得到：
$$\Omega_{k_{x},k_{y}}= \frac{1}{2} \left|\frac{\partial(\phi,\cos \theta)}{\partial(k_{x},k_{y})}\right|$$
容易计算：
$$\Omega_{\pm}= \mp \frac{\Delta \lambda^{2}}{(\lambda^{2}k^{2}+\Delta^{2})^{3/2}}$$
则这两条能带贡献的Hall conductivity可以写为：
$$\begin{align}
\sigma_{xy} & = \frac{e^{2}}{\hbar} \frac{1}{(2\pi)^{2}} \int d^{2}kf(\epsilon_{-}) \Omega_{-} +\frac{e^{2}}{\hbar} \frac{1}{(2\pi)^{2}}\int d^{2}kf(\epsilon_{+})\Omega_{+}
\end{align}$$
若$\epsilon_{F}$太小，那么$f(\epsilon_{+})=0$，只有第一项贡献，积分区域为Fermi circle内部。由于$\epsilon_{F}$越高，Fermi circle就越大，且$\Omega_{-}>0$，我们知道$\sigma_{xy}$会随着$\epsilon_{F}$的上涨而上涨。若$\epsilon_{F}$，过大，则第一项和第二项都会贡献。此时第一项$f(\epsilon_{-})$，积分区域取BZ，为常数。第二项积分区域为Fermi circle内部。由于$\Omega_{+}<0$，$\epsilon_{F}$增大会导致$\sigma_{xy}$变小。故只有Fermi level在$\pm \Delta$之间时贡献主要Hall conductivity。

![[Pasted image 20260405161624.png|center|300]]

