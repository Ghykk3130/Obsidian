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

>[!Quote] $\mathbf{k}$对应的本征态的简并问题
>$\mathbf{k}$对应的本征值为$e^{i\mathbf{k}\cdot \mathbf{R}}$。由于$T_{\mathbf{R}}=\exp\left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{R} \right)$，所以任何$\ket{\mathbf{p}}$有$-\frac{\mathbf{p}}{\hbar}\cdot \mathbf{R}=\mathbf{k}\cdot \mathbf{R}$都在$e^{i\mathbf{k}\cdot \mathbf{R}}$本征空间中。我们再选取一个量子数$n$区分这些简并的态。所以本征态写为$\ket{\psi_{n,\mathbf{k}}}$。
>
>又注意到，$e^{i\mathbf{k}\cdot \mathbf{R}}=e^{i(\mathbf{k}+\mathbf{G})\cdot \mathbf{R}}$。所以任何$\ket{\psi_{n,\mathbf{k}}}$与$\ket{\psi_{m,\mathbf{k}+\mathbf{G}}}$属于相同特征子空间。但这只是在增加上面构造出来的特征子空间的简并度而已。我们可以规定$\mathbf{k}\in\text{BZ}$，将$\mathbf{k}+\mathbf{G}$中的态通过重写$n$的方式归入$\ket{\psi_{n,\mathbf{k}}}$中。这称为reduced zone shceme。从上述论证可以看出，固定$n,\mathbf{k}$，得到的子空间就是一维的。

我们暂时先在reduced zone scheme中工作。现在我们知道$\{ \ket{\psi_{n,\mathbf{k}}} \}_{n}$张成子空间是$H$的不变子空间。我们可以不妨重新选取$\ket{\psi_{n,\mathbf{k}}}$使其也成为$H$本征态。那么需要满足：
$$\left( \frac{p^{2}}{2m}+V(\mathbf{r}) \right)\ket{\psi_{n,\mathbf{k}}}=\epsilon_{n}(\mathbf{k})\ket{\psi_{n,\mathbf{k}}}  $$
容易证明$\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}$，其中$u_{n,\mathbf{k}}(\mathbf{r}+\mathbf{R})=u_{n,\mathbf{k}}(\mathbf{r})$。只需要：$$\ket{\psi_{n,\mathbf{k}}} =e^{i\mathbf{k}\cdot \mathbf{r}}e^{-i\mathbf{k}\cdot \mathbf{r}}\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}},\ \ket{u_{n,\mathbf{k}}} =e^{-i\mathbf{k}\cdot \mathbf{r}}\ket{\psi_{n,\mathbf{k}}}   $$由于$e^{-i\mathbf{k}\cdot \mathbf{r}}\mathbf{p}e^{i\mathbf{k}\cdot \mathbf{r}}=\mathbf{p}+\hbar \mathbf{k}$，我们得到k空间中本征方程：
$$\left( \frac{|\mathbf{p}+\hbar \mathbf{k}|^{2}}{2m}+V(\mathbf{r}) \right)\ket{u_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k})\ket{u_{n,\mathbf{k}}} $$
固定$\mathbf{k}$，$\ket{u_{n,\mathbf{k}}}$自带的边界条件使得$\epsilon_{n}(\mathbf{k})$离散化，从而$n$是离散的。

>[!Success] Theorem 1.1 (Bloch's theorem)
>For an electron in a periodic potential, its wavefunction can be written as $\ket{\psi_{n,\mathbf{k}}}=e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}$, where $u_{n,\mathbf{k}}(\mathbf{r}+\mathbf{R})=u_{n,\mathbf{k}}(\mathbf{r}),\ \forall \mathbf{R}\in \Lambda$.

# 2. 两种scheme

刚刚我们规定$\mathbf{k}\in\text{BZ}$，但这不是Bloch定理所必须要求的。假设不规定$\mathbf{k}\in\text{BZ}$，通过重新标记量子数，我们可以将刚刚我们吸收进$\ket{\psi_{n,\mathbf{k}}}$的$\ket{\psi_{m,\mathbf{k}+\mathbf{G}}}$再拿出来。那我们在每个BZ，而不只是某一个BZ，有如下方程：
$$\left( \frac{p^{2}}{2m}+V(\mathbf{r}) \right)\ket{\psi_{n,\mathbf{k}}} =\epsilon_{n}(\mathbf{k})\ket{\psi_{n,\mathbf{k}}} $$
如果要看某个$\mathbf{k}$对应的能带结构，只需要找出这个$\mathbf{k}$在哪个BZ中，相应地看这个$\mathbf{k}$的$\epsilon_{n}(\mathbf{k})$即可。这称为extended zone scheme。由于本质上我们只是改了一下labeling，并不影响能谱。也就是说两种scheme下，若将能谱看成$(n,\mathbf{k})$到实数的映射，则值域是一样的。
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



