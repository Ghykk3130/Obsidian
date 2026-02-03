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
\psi(\mathbf{r}_{0}) & \propto \int_{\text{sample}} d^{3}rn(\mathbf{r}) e^{i(\mathbf{k}\cdot \mathbf{r}+\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}
	\end{align}$$因为$\delta,\mathbf{r}_{0}$对于所有lattice point都一样，所以：
$$\psi(\mathbf{r}_{0})\propto \int_{\text{sample}}d^{3}r n(\mathbf{r})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}}$$
定义scattering amplitude：

>[!Note] Definition 1
>Define the scattering amplitude:
>$$F=\int_{\text{sample}}d^{3}rn(\mathbf{r})e^{i\Delta \mathbf{k}\cdot \mathbf{r}}$$

显然当$\Delta \mathbf{k}\in \Lambda ^{*}$时，所有phase都为零，形成constructive interference。

