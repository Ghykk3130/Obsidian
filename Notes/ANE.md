我们先来讨论Peltier张量$\boldsymbol{\alpha}$的分解。在[[AHE]]中，我们已知$\sigma_{xy}$可分解为两部分：
$$\sigma_{xy}=\sigma_{xy}^{\text{A}}+\sigma_{xy}^{\text{O}}$$
而$\sigma_{xy}^{A}$可分解为三部分：
$$\sigma^{\text{A}}_{xy}= \sigma_{xy}^{\text{int}}+\sigma_{xy}^{\text{sk}}+\sigma_{xy}^{\text{sj}}$$
由Mott relation $\boldsymbol{\alpha} \propto \left. \frac{\partial \boldsymbol{\sigma}}{\partial\epsilon}\right|_{\epsilon=\epsilon_{F}}$，我们可以将$\alpha_{xy}$相应拆分。

我们知道输运张量存在关系$\mathbf{S}= \frac{\boldsymbol{\alpha}}{\boldsymbol{\sigma}}$。我们有：
$$\begin{align}
\boldsymbol{\sigma}= \begin{pmatrix}
\sigma_{x x} & \sigma_{xy} \\
 -\sigma_{xy} & \sigma_{x x}
\end{pmatrix} \implies \boldsymbol{\sigma}^{-1}= \frac{1}{\sigma_{x x}^{2}+\sigma_{xy}^{2}  } \begin{pmatrix}
\sigma_{ x x} & - \sigma_{xy} \\
\sigma_{xy} & \sigma_{x x}
\end{pmatrix}
\end{align}$$
于是得到：
$$\begin{align}
 & S_{x x}= \frac{\sigma_{x x}\alpha_{x x}+\sigma_{xy}\alpha_{xy}}{\sigma_{x x}^{2}+\sigma_{xy}^{2}}\approx \frac{\alpha_{x x}}{\sigma_{x x}} \\
 & S_{xy}= \frac{\sigma_{x x}\alpha_{xy}-\sigma_{xy}\alpha_{x x}}{\sigma_{xx }^{2}+\sigma_{xy}^{2}}\approx \frac{\alpha_{xy} }{\sigma_{x x} }- \frac{\sigma_{xy}}{\sigma_{x x}} \frac{\alpha_{x x}}{\sigma_{x x}}= \frac{\alpha_{xy}}{\sigma_{x x}}- \tan \theta_{H} S_{x x}
\end{align}$$
约等于号是近似到小Hall angle $\sigma_{xy}\approx 0$。