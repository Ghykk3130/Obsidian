
考虑一个晶体。晶体每点原子只有一个态$\ket{\psi}$，允许两个spin。令：
$$\ket{i,\sigma_{i}} =T(\vec{R}_{i})\ket{\psi} \otimes \ket{\sigma} $$
其中$\ket{\sigma_{i}}$是自旋态，$i$表示第$i$个site。

考虑这个晶体中的多电子体系。假设单电子在periodic potential中的Hamiltonian为$H_{0}$。则多电子体系Hamiltoanian一定包含单电子Hamiltonian加出来的additive operator。

由于电子间的相互作用，$\ket{i,\sigma_{i}}$不是$H_{0}$本征态。所以$H_{0}$单纯对每个电子作用，加起来的additive operator为：
$$\begin{align}
\sum_{i,\sigma i,j,\sigma_{j}}\bra{i,\sigma_{i}} H_{0}\ket{j,\sigma_{j}}   c_{i \sigma_{i}}^{\dagger}c_{j\sigma_{j}}
\end{align}$$
我们假设$\ket{i,\sigma_{i}},\ket{j,\sigma_{j}}$重合很小，以至于：
$$\sum_{i,\sigma_{i},j,\sigma_{j}}\bra{i,\sigma_{i}} H_{0}\ket{j,\sigma_{j}}c_{i\sigma_{i}}^{\dagger}c_{j\sigma_{j}} = \frac{1}{2} \sum_{<i,j>,\sigma}\bra{i,\sigma} H_{0} \ket{j,\sigma}c_{i\sigma}^{\dagger}c_{j\sigma}=-t\sum_{<i,j>,\sigma}c_{i\sigma}^{\dagger}c_{j\sigma} $$
也就是说只有$i,j$邻近，且自旋相同时才有非零的term。

此外，我们还要考虑电子之间的interaction。令two-particle interaction为$V$。假设只有两电子占据同一个site时才有interaction。那么总interaction term为：
$$\begin{align}
 \frac{1}{2} \sum_{i,\sigma_{i 1},\sigma_{i 2},\sigma_{i 3},\sigma_{i 4}}\bra{i,\sigma_{i 1},i,\sigma_{i 2} }V\ket{i,\sigma_{i 4},i,\sigma_{i 3}} c_{i \sigma_{i 1}}^{\dagger}c_{i \sigma_{i 2}}^{\dagger} c_{i \sigma_{i 3}}c_{i \sigma_{i 4}} & = \frac{1}{2}\sum_{i,\sigma_{i 1},\sigma_{i 2},\sigma_{i 3},\sigma_{i 4}} \bra{i,i} V \ket{i,i}  \bra{\sigma_{i 1},\sigma_{i 2}} \sigma_{i 3},\sigma_{i 4}\rangle c_{i \sigma_{i 1}}^{\dagger}c_{i \sigma_{i 2}}^{\dagger}c_{i \sigma_{i 3}}c_{i \sigma_{i 4}} \\ & =
  \frac{1}{2}\sum_{i}\bra{i,i} V \ket{i,i}  c_{i \uparrow}^{\dagger}c_{i \downarrow}^{\dagger}c_{i \downarrow}c_{i \uparrow} \\
 & + \frac{1}{2}\sum_{i  }\bra{i,i} V\ket{i,i}  c_{i \downarrow}^{\dagger}c_{i \uparrow}^{\dagger}c_{i,\uparrow}c_{i,\downarrow} \\
  & = \sum_{i} \bra{i,i} V \ket{i,i} c_{i \uparrow}^{\dagger}c_{i \uparrow}c_{i \downarrow}^{\dagger}c_{i \downarrow} \\
 & = \sum_{i}\bra{i,i} V \ket{i,i} n_{i \uparrow}n_{i \downarrow} \\
 & = U \sum_{i} n_{i \uparrow}n_{i \downarrow}
\end{align}$$
其中，$V$不对自旋ket作用。第二行到第四行中间我运用了一系列commutation relation。

那么：

>[!Note] Proposition 1
>The Hubbard Hamiltonian for a single-band crystal is:
$$H= -t \sum_{<i,j>,\sigma}c_{i \sigma}^{\dagger}c_{j \sigma}+U \sum_{i}n_{i \uparrow}n_{i \downarrow}$$

