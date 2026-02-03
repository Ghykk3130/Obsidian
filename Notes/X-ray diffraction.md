
考虑放置在空间中的样品，以及在极远处$\mathbf{r}_{0}$的观测仪器。用平面波照射样品。假设平面波不能穿过样品，只能引起样品内电子的振动。而电子振动发出的球面波传播至$\mathbf{r}_{0}$被观测。

令照射的平面波phase为$e^{i\mathbf{k}\cdot \mathbf{r}}$。则位于$\mathbf{r}\in \Lambda$的波与位于原点的波相位差为：
$$\Delta \phi_{1}=\mathbf{k}\cdot \mathbf{r}$$
假设散射后振幅$\propto n(\mathbf{r})\text{ local charge density}$。则在$\mathbf{r}_{0}$观察$\mathbf{r}$点，原点产生的球面波。由于观测点在无限远处，波矢近似为$\mathbf{k}^{'}=k  \hat{\mathbf{r}}_{0}$。由于观测点在无限远处，球面波分母的距离衰减项对所有点都几乎一样。我们有：
$$\begin{align}
 & \psi_{\mathbf{r}}(\mathbf{r}_{0}) \propto n(\mathbf{r}) {e^{i(\mathbf{k}\cdot \mathbf{r}-\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}}  \\
 & \psi_{0}(\mathbf{r}_{0})\propto n(0)e^{i(0-\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-0)+\delta)} 
\end{align}$$
其中，$\delta$为从平面波传播到电子，到引起的电子振动的滞后。由于$\mathbf{r},0$环境一样，都是lattice point，可以假设它们电子振动都滞后$\delta$。所以最后：
$$\begin{align}
\psi(\mathbf{r}_{0}) & \propto \int_{\text{sample}} d^{3}rn(\mathbf{r}) e^{i(\mathbf{k}\cdot \mathbf{r}-\mathbf{k}^{'}\cdot(\mathbf{r}_{0}-\mathbf{r})+\delta)}
	\end{align}$$因为$\delta,\mathbf{r}_{0}$对于所有lattice point都一样，所以：
$$\psi(\mathbf{r}_{0})\propto \int_{\text{sample}}d^{3}r n(\mathbf{r})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}}$$
定义scattering amplitude：

>[!Note] Definition 1
>Define the scattering magnitude:
>$$F=\int_{\text{sample}}d^{3}rn(\mathbf{r})e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}}$$

