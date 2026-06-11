# 1. ANE的scaling law

我们先来讨论Peltier张量$\boldsymbol{\alpha}$的分解。在[[AHE]]中，我们已知$\sigma_{xy}$可分解为两部分：
$$\sigma_{xy}=\sigma_{xy}^{\text{A}}+\sigma_{xy}^{\text{O}}$$
而$\sigma_{xy}^{A}$可分解为三部分：
$$\sigma^{\text{A}}_{xy}= \sigma_{xy}^{\text{int}}+\sigma_{xy}^{\text{sk}}+\sigma_{xy}^{\text{sj}}$$
由Mott relation $\boldsymbol{\alpha} \propto \left. \frac{\partial \boldsymbol{\sigma}}{\partial \mu}\right|_{\mu=\epsilon_{F}}$，我们可以将$\alpha_{xy}$相应拆分。于是显然，我们有scaling law：
$$\alpha^{\text{int}}_{xy},\ \alpha^{\text{sj}}_{xy}\propto M\tau^{0},\ \alpha^{\text{sk}}_{xy}\propto M\tau,\ \alpha^{\text{O}}_{xy}\propto B$$
于是anomalous Peltier coefficient的scaling law可以写为：
$$\alpha^{\text{A}}_{xy}=M(a\sigma_{x x}+b)$$
现在研究$\mathbf{S}$的分解。我们知道输运张量存在关系$\mathbf{S}= \frac{\boldsymbol{\alpha}}{\boldsymbol{\sigma}}$。我们有：
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
>[!Quote]
>在$S_{xy}= \frac{\alpha_{xy}}{\sigma_{x x}}- \tan \theta_{H}S_{x x}$中，可以认为Nernst电场由两项贡献。一个是Peltier电流输运产生的电场，一个是Seebeck电场被“偏转”产生的横向电场。很多时候，这两项贡献完全相同从而抵消。这被称为Sondheimer cancellation。

约等于号是近似到小Hall angle $\sigma_{xy}\approx 0$。由于$\alpha_{xy},\sigma_{xy}$都有分解，相应地，$S_{xy}$也存在分解。显然，有如下scaling law：
$$S_{xy}^{\text{O}}\propto B,\ S_{xy}^{\text{A}}\propto M$$
但是，关于$\sigma_{x x}$的scaling law就较为复杂了。
# 2. Sondheimer cancellation

我们知道：
$$\begin{align}
 & \alpha_{x y} = - \frac{\pi^{2}k^{2}T}{3|e|}  \frac{\partial \sigma_{x y}}{\partial\epsilon_{F}} \\
 & S_{x x}= - \frac{\pi^{2}k^{2}T}{3|e|} \frac{\partial \ln \sigma_{x x}}{\partial\epsilon_{F}}
\end{align}$$


那么得到Nernst系数：
$$\begin{align}
S_{ xy} & = - \frac{\pi^{2}k^{2}T}{3|e|}\left[  \frac{1}{\sigma_{x x}} \frac{\partial \sigma_{xy}}{\partial\epsilon_{F}}- \tan \theta \frac{\partial \ln \sigma_{x x}}{\partial\epsilon_{F}} \right] \\  & = - \frac{\pi^{2}k^{2}T}{3|e|}\left[ \frac{1}{\sigma_{x x}} \frac{\partial \sigma_{xy}}{\partial\epsilon_{F}}-  \frac{\sigma_{xy}}{\sigma_{x x}^{2}} \frac{\partial \sigma_{x x}}{\partial\epsilon_{F}}\right]\\

 &= - \frac{\pi^{2}k^{2}T}{3|e|} \frac{\partial}{\partial\epsilon_{F}}\left(  \frac{\sigma_{xy}}{\sigma_{x x}} \right) \\
 & = - \frac{\pi^{2}k^{2}T}{3|e|} \frac{\partial}{\partial\epsilon_{F}}\tan \theta_{H}
\end{align}$$
所以，如果Hall angle不随化学势的改变而改变，那么Nernst系数为零。因为$\theta_{H}(\epsilon_{F})$描述的是处于费米能级处粒子的输运响应。所以
