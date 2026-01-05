# 1. Adiabatic evolution

考虑Hamiltonian $H=H(\vec{R})$。其中系数集$\vec{R}=\vec{R}(t)$。令Hamiltonian随时间缓慢演化，即$H$对于$\vec{R}$是$C^{\infty}$的，对于$t$也是$C^{\infty}$的，且$\dot{\vec{R}}\rightarrow 0$。此外，令$H(\vec{R})$本征态是non-degenerate $\forall \vec{R}$。

那么任意时刻$H(\vec{R}(t))$都可以解得一套本征态。由于本征子空间都是一维的，所以如果fix $t$，这些本征态有$U(1)-\text{arbitrariness}$。为了解决这种任意性，我们只需要一个额外的方程。我们选择本征矢$\ket{n(t)}$的演化垂直于$\ket{n(t)},\ \forall t$。即：
$$\begin{align}
 & \bra{n(t)}  \frac{\partial}{\partial t}\ket{n(t)} =0 \\
\implies & \dot{\vec{R}}\cdot \bra{n}  \frac{\partial}{\partial \vec{R}}\ket{n} =0
\end{align}$$
称这为parallel transport condition。

>[!Note] Definition 1
>Consider a Hamiltonian $H=H(\vec{R}(t))$. Define the parallel transport condition as $\bra{n(t)} \frac{\partial}{\partial t}\ket{n(t)}= \dot{\vec{R}}\cdot \bra{n} \frac{\partial}{\partial \vec{R}}\ket{n}=0$.

>[!Note] Theorem 1 (quantum adiabatic theorem)
>Let $\dot{\vec{R}}\rightarrow 0$, then if $\ket{\psi(0)}=\ket{n(0)}$, then $\ket{\psi(t)}$ is colinear with $\ket{n(t)}\text{, for all }t$.
## Proof.

考虑参数$\vec{R}$由$\vec{R}(t_{0})$变为$\vec{R}(t)$。变化速率极其缓慢。令$\ket{\psi(t)}$为$t$时刻波函数。则可以作展开：
$$\begin{align} \ket{\psi(t)} =\sum_{j}\exp\left( - \frac{i}{\hbar}\int_{t_{0}}^tdt^{'}E_{j}(t^{'}) \right)a_{j}(t)\ket{j(t)} 
\end{align}$$
代入$i\hbar \frac{\partial}{\partial t}\ket{\psi(t)}=H(t)\ket{\psi(t)}$可得：
$$\begin{align}
 & \sum_{j}E_{j}(t)\exp(\dots)a_{j}(t)\ket{j(t)} + \sum_{j}\exp(\dots)  \dot{a}_{j}(t)\ket{j(t)} + \sum_{j}\exp(\dots)a_{j}(t) \frac{\partial}{\partial t}\ket{j(t)} =\sum_{j}\exp(\dots)a_{j}(t)E_{j}(t)\ket{j(t)} \\
\implies & \sum_{j}\exp(\dots)  \dot{a}_{j}(t)\ket{j(t)} =- \sum_{i}\exp(\dots) a_{i}(t) \frac{\partial}{\partial t}\ket{i(t)} \\
\implies & \exp\left( - \frac{i}{\hbar}\int dt^{'}E_{j} \right)  \dot{a}_{j}(t) = - \sum_{i}\exp\left( - \frac{i}{\hbar}\int dt^{'}E_{i} \right) a_{i}(t) \bra{j(t)}  \frac{\partial}{\partial t}\ket{i(t)} \\
\implies &   \dot{a}_{j}(t)= -\sum_{i}\exp\left( - \frac{i}{\hbar}\int_{t_{0}}^tdt^{'}(E_{i}(t^{'})-E_{j}(t^{'})) \right) a_{i}(t) \bra{j(t)}  \frac{\partial}{\partial t}\ket{i(t)}     
\end{align}$$

为了考虑绝热演化的情况，我们force out $\dot{ \vec{R}}$：
$$\begin{align}
\dot{a}_{j} & = -  \dot{\vec{R}} \cdot \sum_{i}\exp\left( - \frac{i}{\hbar}\int dt^{'}(E_{i}-E_{j}) \right)a_{i}\bra{j} \frac{\partial}{\partial t}\ket{i} 
\end{align}$$
由于$C^{\infty}$假设，则$|\bra{j} \frac{\partial}{\partial \vec{R}}\ket{i}|<\infty$。右手边$\dot{\vec{R}}$后面都是bounded的。所以令$\dot{\vec{R}}\rightarrow{0}$则有：
$$\dot{a}_{j}=0$$
所以在绝热演化中，波函数在本征态$\ket{j}$的分量系数都以$\exp\left( - \frac{i}{\hbar}\int_{t_{0}}^tdt^{'}E_{j} \right)$变化。
>[!Right]
>$\blacksquare$



