# 1. Drude模型推导

考虑同时存在电子和空穴。那么它们满足方程：
$$\begin{align}
 & 0= - \frac{m^{*}_{e}\mathbf{v}_{e}}{\tau_{e}}-|e|(\mathbf{E}+\mathbf{v}_{e}\times \mathbf{B}) \\
 & 0=- \frac{m^{*}_{h}\mathbf{v}_{h}}{\tau_{h}}+|e|(\mathbf{E}+\mathbf{v}_{h}\times \mathbf{B})
\end{align}$$
定义迁移率$\mu_{e}= \frac{|e|\tau_{e}}{m^{*}_{e}},\ \mu_{h}= \frac{|e|\tau_{h}}{m^{*}_{h}}$。那么容易解得：
$$\begin{align}
 & \mathbf{v}_{e}=-\mu_{e}(\mathbf{E}+\mathbf{v}_{e}\times \mathbf{B}) \\
 & \mathbf{v}_{h}=\mu_{h}(\mathbf{E}+\mathbf{v}_{h}\times \mathbf{B})
\end{align}$$
不妨令磁场在z方向。那么对电子计算解得：
$$\begin{align}
 & v_{e}^{x}= - \frac{\mu_{e}}{1+\mu_{e}^{2}B^{2}}(E_{x}-\mu_{e}BE_{y}) \\
 & v_{e}^{y}=- \frac{\mu_{e}}{1+\mu_{e}^{2}B^{2}}(\mu_{e}BE_{x}+E_{y})
\end{align}$$
利用$\mathbf{J}_{e}=-n_{e}|e|\mathbf{v}_{e}$，得到：
$$\begin{align}
\mathbf{J}_{e}= \frac{n_{e}|e|\mu_{e}}{1+\mu_{e}^{2}B^{2} }\begin{pmatrix}
1 & -\mu_{e}B \\
\mu_{e}B & 1
\end{pmatrix}\mathbf{E}
\end{align}$$
于是得到电导张量：
$$\boldsymbol{\sigma}_{e}= \frac{n_{e}|e|\mu_{e}}{1+\mu_{e}^{2}B^{2}}\begin{pmatrix}
1 & -\mu_{e}B \\
\mu_{e}B & 1
\end{pmatrix}$$
同理，可以对空穴解得：
$$\boldsymbol{\sigma}_{h}= \frac{n_{h}|e|\mu_{h}}{1+\mu_{h}^{2}B^{2}}\begin{pmatrix}
1 & \mu_{h}B \\
-\mu_{h}B & 1
\end{pmatrix}$$
由于$\mathbf{J}=\mathbf{J}^{}_{e}+\mathbf{J}_{h}=\boldsymbol{\sigma}\mathbf{E}$，所以可以得到总电导张量：
$$\begin{align}
 & \boldsymbol{\sigma}=\begin{pmatrix}
\sigma_{x x} & \sigma_{xy} \\
-\sigma_{xy} & \sigma_{x x}
\end{pmatrix} \\
 & \sigma_{x x}=|e|\left(  \frac{n_{e}\mu_{e}}{1+\mu_{e}^{2}B^{2}}+ \frac{n_{h}\mu_{h}}{1+\mu_{h}^{2}B^{2}} \right) \\
 & \sigma_{xy}=|e|B\left( - \frac{n_{e}\mu_{e}^{2}}{1+\mu_{e}^{2}B^{2}}+ \frac{n_{h}\mu^{2}_{h}}{1+\mu^{2}_{h}B^{2}} \right)
\end{align}$$
接下来求电导张量。由于：
$$\boldsymbol{\rho}=\boldsymbol{\sigma}^{-1}= \frac{1}{\sigma_{x x}^{2}+\sigma_{xy}^{2}}\begin{pmatrix}
\sigma_{x x} & -\sigma_{xy} \\
\sigma_{xy} & \sigma_{x x}
\end{pmatrix}$$
那么可以解得电阻率：
$$\begin{align}
\rho_{x x} & = \frac{\sigma_{x x}}{\sigma_{x x}^{2}+\sigma_{xy}^{2}} \\
 & = \frac{n_{e}\mu_{e}+n_{h}\mu_{h}+(n_{e}\mu_{h}+n_{h}\mu_{e})\mu_{e}\mu_{h}B^{2}}{|e|[(n_{e}\mu_{e}+n_{h}\mu_{h})^{2}+(n_{h}-n_{e})^{2}\mu_{e}^{2}\mu_{h}^{2}B^{2}]} \\
 & = \frac{\sigma_{e}+\sigma_{h}+(\sigma_{e}\mu_{h}^{2}+\sigma_{h}\mu_{e}^{2})B^{2}}{(\sigma_{e}+\sigma_{h})^{2}+(\sigma_{h}\mu_{e}-\sigma_{e}\mu_{h})^{2}B^{2}}
\end{align}$$
可以计算MR：
$$\begin{align}
\text{MR} & = \frac{\rho_{x x}(B)-\rho_{x x}(0)}{\rho_{x x}(0)} \\
 & = \frac{\rho_{x x}(B)}{\rho_{x x}(0)}-1 \\
 & = \frac{\sigma_{e}\sigma_{h}(\mu_{e}+\mu_{h})^{2}B^{2}}{(\sigma_{e}+\sigma_{h})^{2}+(\sigma_{h}\mu_{e}-\sigma_{e}\mu_{h})^{2}B^{2}}
\end{align}$$


