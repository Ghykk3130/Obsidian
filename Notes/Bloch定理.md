# 1. Bloch定理

电子在晶格中受到周期性平均场，使得多体Schrodinger方程可以解耦。单电子Hamiltonian为：
$$H= \frac{p^{2}}{2m}+V(\mathbf{r})$$
其中$V(\mathbf{r}+\mathbf{R})=V(\mathbf{r}),\ \forall \mathbf{R}\in \Lambda$。我们想找到本征态。注意到：
$$T_{\mathbf{R}}^{\dagger}HT_{\mathbf{R}}= \frac{1}{2m}T^{\dagger}_{\mathbf{R}}p^{2}T_{\mathbf{R}}+T^{\dagger}_{\mathbf{R}}V(\mathbf{r})T_{\mathbf{R}}=H$$
所以$[T_{\mathbf{R}},H]=0$。那么我们来研究$T_{\mathbf{R}}$本征空间。注意到$T_{\mathbf{R}}=\exp\left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)$为酉算子，所以本征值模长为一，设为$e^{i\theta(\mathbf{R})}$。由于$T_{\mathbf{R}_{1}+\mathbf{R}_{2}}=T_{\mathbf{R}_{1}}T_{\mathbf{R}_{2}}$，所以：
$$\begin{align}
 & e^{i\theta(\mathbf{R}_{1}+\mathbf{R}_{2})}=e^{i(\theta(\mathbf{R}_{1})+\theta(\mathbf{R}_{2}))} \\
\implies & \theta(\mathbf{R}_{1}+\mathbf{R}_{2})=\theta(\mathbf{R}_{1})+\theta(\mathbf{R}_{2})
\end{align}$$
线性函数符合这个条件。所以可令$\theta(\mathbf{R})=\mathbf{k}\cdot \mathbf{R}$，相应地本征态为$\ket{\psi_{\mathbf{k}}}$。

>[!Quote] 如何在$e^{i\mathbf{k}\cdot \mathbf{R}}$对应特征子空间中对角化$H$？
现在我们已经知道$e^{i\mathbf{k}\cdot \mathbf{R}}$对应特征子空间是$H$的不变子空间。这个特征子空间一般是简并的，由所有形如$\ket{\psi_{\mathbf{k}}}$的态张成。我们不妨加一个变量区分简并，将特征矢记为$\ket{\psi^{(l)}_{k}}$。那么$\{ \ket{\psi_{\mathbf{k}}^{(l)}} \}$是$H$不变子空间。
>
>我们不妨设$\ket{\psi_{\mathbf{k}}^{(l)}}$就是$H$本征态。这总是可以做到的。因为即使不是本征态，也一定可以重新选取本征基。但由于平移算符的谱是连续的，$H$的谱是离散的，维度不同，所以我们大多数情况在一个特征子空间中，只能选出一个态为$H$本征态。将这个本征态记为$\ket{\psi_{\mathbf{k}}}$

这种表示方式称为extended zone scheme，$\mathbf{k}$的大小范围没有限制。

注意到$\ket{\psi_{\mathbf{k}}}$与$\ket{\psi_{\mathbf{k}+\mathbf{G}}}$有相同本征值，因为$e^{i\mathbf{k}\cdot \mathbf{R}}=e^{i(\mathbf{k}+\mathbf{G})\cdot \mathbf{R}}$。所以我们不妨将$e^{i(\mathbf{k}+\mathbf{G})\cdot \mathbf{R}}$的特征子空间折叠进$e^{i\mathbf{k}\cdot \mathbf{R}}$特征子空间。那么$\mathbf{k}$被限制在BZ内。我们用$n$标记这些新折叠进来的$\ket{\psi_{\mathbf{k}+\mathbf{G}}}$，记为$\ket{\psi_{n,\mathbf{k}}}$。这称为reduced zone scheme。

容易证明$\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}$，其中$u_{n,\mathbf{k}}(\mathbf{r}+\mathbf{R})=u_{n,\mathbf{k}}(\mathbf{r})$。只需要：$$\ket{\psi_{n,\mathbf{k}}} =e^{i\mathbf{k}\cdot \mathbf{r}}e^{-i\mathbf{k}\cdot \mathbf{r}}\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}},\ \ket{u_{n,\mathbf{k}}} =e^{-i\mathbf{k}\cdot \mathbf{r}}\ket{\psi_{n,\mathbf{k}}}   $$由于$e^{-i\mathbf{k}\cdot \mathbf{r}}\mathbf{p}e^{i\mathbf{k}\cdot \mathbf{r}}=\mathbf{p}+\hbar \mathbf{k}$，我们得到k空间中本征方程：
$$\left( \frac{|\mathbf{p}+\hbar \mathbf{k}|^{2}}{2m}+V(\mathbf{r}) \right)\ket{u_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k})\ket{u_{n,\mathbf{k}}} $$

>[!Success] Theorem 1.1 (Bloch's theorem)
>For an electron in a periodic potential, its wavefunction can be written as $\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}$, where $u_{n,\mathbf{k}}(\mathbf{r}+\mathbf{R})=u_{n,\mathbf{k}}(\mathbf{r}),\ \forall \mathbf{R}\in \Lambda$.

# 2. 两种scheme的比较

## Ex：

自由电子气


## 3. 能带的对称性

省略band index $n$。$\epsilon(\mathbf{k})$应该具有对称性。

>[!Success] Proposition 3.1
$\epsilon(\mathbf{k})=\epsilon(-\mathbf{k})$
## Proof.

若$\psi_{\mathbf{k}}(\mathbf{r})$为一Bloch态，有本征值$\epsilon(\mathbf{k})$，那么$\psi_{\mathbf{k}}^{*}(\mathbf{r})$也满足Schrodinger方程，拥有本征值$\epsilon(\mathbf{k})$。注意到：
$$\begin{align}
 & T_{\mathbf{R}}\psi_{-\mathbf{k}}(\mathbf{r})=e^{-i\mathbf{k}\cdot \mathbf{R}}\psi_{-\mathbf{k}}(\mathbf{r}) \\
 & T_{\mathbf{R}}\psi ^{*}_{\mathbf{k}}(\mathbf{r})=e^{-i\mathbf{k}\cdot \mathbf{R}}\psi_{-\mathbf{k}}(\mathbf{r})
\end{align}$$
因为$\psi_{-\mathbf{k}},\ \psi ^{*}_{\mathbf{k}}$有相同的平移本征值，它们应该同属于一个能量本征空间。前者能量为$\epsilon(-\mathbf{k})$，后者能量为$\epsilon(\mathbf{k})$。所以$\epsilon(\mathbf{k})=\epsilon(-\mathbf{k})$。
>[!Right]
>$\blacksquare$



