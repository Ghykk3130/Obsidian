# YCOB的结构
- $Cu$形成kagome层。由于kagome的frutstration，最低能量态有大量degeneracy，导致剧烈fluctuation，形成QSL。
- 比起herbertsmithite，YCOB中$Y$代替了herbertsmithite中的$Zn$。由于$Zn$，$Cu$半径相近，grow的时候容易相互替换，导致herbertsmithite不纯。而因为$Y$半径比$Cu$明显大，就不会替换。所以YCOB更纯。

# Gauge field

考虑spinon：
$$\vec{S}=\frac{1}{2}f_{\alpha}^{\dagger}\vec{\sigma}_{\alpha \beta}f_{\beta}$$
若作$f_{\alpha}\leadsto e^{i\phi}f_{\alpha}$，则$\vec{S}=\frac{1}{2}f_{\alpha}^{\dagger}e^{-i\phi}\vec{\sigma}_{\alpha \beta}f_{\beta}e^{i\phi}=\frac{1}{2}f_{\alpha}^{\dagger}\sigma_{\alpha \beta}f_{\beta}$不变。这代表着场算符$f_{\alpha}$的选取具有$SU(1)$任意性。

考虑interaction hamiltonian：
$$\begin{align}
H_{ij} & = -\chi_{ij}f_{i}^{\dagger}f_{j}+\text{h.c.}
\end{align}$$
这表示粒子在$i,j$态之间跃迁。此时，若$i,j$态各自的场算符作不同的$SU(1)$变换，则：
$$\begin{align}
H_{ij} & \leadsto-\chi^{'}_{ij}f_{i}^{\dagger}e^{-i\phi_{i}}f_{j}e^{i\phi_{j}}+\text{h.c.} \\
 & = -(\chi_{ij}^{'}e^{-i(\phi_{i}-\phi_{j})})f_{i}^{\dagger}f_{j}+\text{h.c.}
\end{align}$$
为了保持$H_{ij}$不变，那么跳跃积分必须满足：
$$\chi^{'}_{ij}e^{-i(\phi_{i}-\phi_{j})}=\chi_{ij}$$
那么就需要令跳跃积分$\chi_{ij}$有相位$a_{ij}$，使得相位作变换：
$$a_{ij}\leadsto a_{ij}+\phi_{i}-\phi_{j}$$
在YCOB中，对于kagome的一个三角，在三角上任意一点的spin构造出场算符。则沿着一个方向，顺时针或逆时针，检查场算符相位的增加。那么一圈下来相位变换为$\frac{2\pi}{3}$。

因为$\ket{\psi_{\alpha}}=f_{\alpha}^{\dagger}\ket{0}$，所以沿着某个方向比较本征态，一圈下来相位变换为$-\frac{2\pi}{3}$。