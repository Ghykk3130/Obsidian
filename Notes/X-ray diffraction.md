# 1. Bragg's formulation

将lattice plane当做镜面，入射波发生镜面反射。则仅仅在$2d\sin \theta=2\pi n$时可出现散射峰。

# 2. Laue's formulation
## 2.1 Geometric formulation

考虑放置在空间中的样品，以及在极远处$\mathbf{r}_{0}$的观测仪器。用平面波照射样品。假设平面波不能穿过样品，只能引起样品内电子的振动。而电子振动发出的球面波传播至$\mathbf{r}_{0}$被观测。

令照射的平面波phase为$e^{i\mathbf{k}\cdot \mathbf{r}}$。考虑两晶格点$1,2$，$\mathbf{r}_{1}-\mathbf{r}_{2}=\mathbf{r}$。
![[Drawing 2026-02-03 00.59.24.excalidraw|center|400]]
散射后，假设$\omega$不变，色散关系不变，那么波矢大小仍为$k$。显然$1$的path length多$\mathbf{r}\cdot \frac{\mathbf{k}}{k}- \mathbf{r}\cdot \frac{\mathbf{k}^{'}}{k}$。所以相位差为：
$$\Delta \phi=k\left( \mathbf{r}\cdot \frac{\mathbf{k}}{k}- \mathbf{r}\cdot \frac{\mathbf{k}^{'}}{k} \right)=\mathbf{r}\cdot(\mathbf{k}-\mathbf{k}^{'})=\mathbf{r}\cdot \Delta \mathbf{k}$$
所以constructive interference条件为：
$$\mathbf{r}\cdot \Delta \mathbf{k}=2\pi n,\ \forall \mathbf{r}\in \Lambda \Leftrightarrow \Delta \mathbf{k}\in \Lambda ^{*}$$

## 2.2 Quantitative formulation

考虑晶格点$\mathbf{r}$。假设散射后振幅$\propto n(\mathbf{r})\text{ local charge density}$。则在$\mathbf{r}_{0}$观察$\mathbf{r}$点产生的球面波。由于观测点在无限远处，球面波分母的距离衰减项对所有点都几乎一样。我们有：
$$\begin{align}
 & \psi_{\mathbf{r}}(\mathbf{r}_{0}) \propto n(\mathbf{r}) {e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}}  
\end{align}$$
其中，$\mathbf{k}\cdot \mathbf{r}$为平面波传播至$\mathbf{r}$的phase。$\delta$为从平面波传播到$\mathbf{r}$，到引起的电子振动的滞后产生的phase。$\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})$为球面波传播到$\mathbf{r}_{0}$产生的phase。由于lattice point环境都一样，可以假设$\delta$为常数。所以最后：
$$\begin{align}
\psi(\mathbf{r}_{0}) & \propto \int_{\text{sample}} d^{3}rn(\mathbf{r}) e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)} \approx \int_{\mathbb{R}^{3}}d^{3}rn(\mathbf{r})e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}
	\end{align}$$因为$\delta,\mathbf{r}_{0}$对于所有lattice point都一样，所以：
$$\psi(\mathbf{r}_{0})\propto \int_{\mathbb{R}^{3}}d^{3}r n(\mathbf{r})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}}$$
定义scattering amplitude：

>[!Note] Definition 2.2.1
>Define the scattering amplitude:
>$$F=\int_{\mathbb{R}^{3}}d^{3}rn(\mathbf{r})e^{i\Delta \mathbf{k}\cdot \mathbf{r}}$$

显然当$\Delta \mathbf{k}\in \Lambda ^{*}$时，所有phase都为零，形成constructive interference。
# 3. Structure factor, atomic form factor

我们知道$n(\mathbf{r})=n(\mathbf{r}+\mathbf{R}),\ \forall \mathbf{R}\in \Lambda$。所以：
$$\begin{align}
F & = \int_{\mathbb{R}^{3}}d^{3}r n(\mathbf{r})e^{i\Delta \mathbf{k}\cdot \mathbf{r}} \\
 & = \sum_{\mathbf{R}\in \Lambda} \int_{\text{primitive cell}}d^{3}r^{}n(\mathbf{r})e^{i\Delta \mathbf{k}\cdot(\mathbf{r}+\mathbf{R})} \\
 & = \sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}\int_{\text{primitive cell}} d^{3}r n(\mathbf{r})e^{i\Delta \mathbf{k}\cdot \mathbf{r}} \\
 & = \sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}S(\Delta \mathbf{k})
\end{align}$$
注意到：
$$\begin{align}
\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}} & = \sum_{\mathbf{R}\in \Lambda}\exp\left( i\sum_{j} \Delta k_{j}\mathbf{b}_{j} \cdot \sum_{l}n_{l}\mathbf{a}_{l} \right) \\
 & = \sum_{n_{1},n_{2},n_{3}\in \mathbb{Z} }\exp\left( i 2\pi \sum_{j}\Delta k_{j}n_{j} \right) \\
 & = \prod_{j}\sum_{n_{j}}\exp(i{2}\pi \Delta k_{j}n_{j}) \\
 & = \prod_{j}\sum_{m_{j}\in \mathbb{Z}}2\pi\delta(2\pi \Delta k_{j}-2\pi m_{j})
\end{align}$$
所以：
$$\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}\neq 0\text{ for }\Delta \mathbf{k}\in \Lambda ^{*}$$
所以只有在这些点上，$F$才非零。定义：

>[!Note] Definition 3.1
>Define the structure factor:
>$$S_{\mathbf{G}}= \int_{\text{primitive cell}}d^{3}r n(\mathbf{r})e^{i\mathbf{G}\cdot \mathbf{r}}$$
## Remark

在$F=\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}S(\Delta \mathbf{k})$中，前面的$\sum_{\mathbf{R}\in \Lambda}e^{i\Delta \mathbf{k}\cdot \mathbf{R}}$是三维中的Dirac comb。所以可以将$S(\Delta \mathbf{k})$当做包络，包住Dirac comb。实际情况中，sample不是无限大，所以$\sum e^{i\Delta \mathbf{k}\cdot \mathbf{R}}$也就不是Dirac comb。


