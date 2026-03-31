# 1.相互作用绘景

考虑一个hamiltonian可以分为两部分$H=H_{0}+V$。一般来说，$H_{0}$是不含时的，$V$是一个含时的微扰。我们定义相互作用绘景下的ket和算子：
$$\begin{align}
 & A_{I}= e^{ \frac{i}{\hbar}H_{0}t}A_{s}e^{- \frac{i}{\hbar}H_{0}t} \\
 & \ket{\psi_{I}} =e^{\frac{i}{\hbar}H_{0}t}\ket{\psi_{S}} 
\end{align}$$
那么容易证明：
$$\begin{align}
i\hbar \partial_{t}\ket{\psi_{I}}  & = i\hbar\left(  \frac{i}{\hbar}H_{0}e^{ \frac{i}{\hbar}H_{0}t}\ket{\psi_{S}}  \right)+i\hbar e^{ \frac{i}{\hbar}H_{0}t}\partial_{t}\ket{\psi_{S}}  \\
 & = - H_{0}e^{ \frac{i}{\hbar}H_{0}t} \ket{\psi_{S}} + e^{ \frac{i}{\hbar}H_{0}t}(H_{0}+V)\ket{\psi_{S}}  \\
 & = e^{ \frac{i}{\hbar}H_{0}t}V \ket{\psi_{S} } \\
 & = V_{I}\ket{\psi_{I}}  
\end{align}$$
即相互作用绘景下的态演化由$V$驱动。还可以得到：
$$\begin{align}
\frac{dA_{I}}{dt} & =  \frac{i}{\hbar}H_{0}e^{ \frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t}- \frac{i}{\hbar}e^{ \frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t} H_{0} \\
 & = \frac{1}{i\hbar}[A_{I},H_{0}]
\end{align}$$
即相互作用绘景下算子的演化由$H_{0}$驱动。

>[!Success] Proposition 1.1
>Under interaction picture, we have:
>$$\begin{align}
 & \ket{\psi_{I}} =e^{\frac{i}{\hbar}H_{0}t}\ket{\psi_{S}} ,\ A_{I}=e^{\frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t} \\
 & i\hbar \partial_{t}\ket{\psi_{I}} =V_{I}\ket{\psi_{I}} ,\ \frac{dA_{I}}{dt}= \frac{1}{i\hbar}[V_{I},H_{0}]
\end{align}
> $$

特别地，定义相互作用绘景下的时间演化算子$U_{I}$：
$$\ket{\psi_{I};t_{0},t_{}} =U_{I}(t,t_{0})\ket{\psi_{I};t_{0},t_{0}} $$
则$U_{I}$的运动方程为：
$$i\hbar \partial_{t}U_{I}=V_{I}U_{I}$$
我们可以将相互作用绘景和Schrodinger绘景下的时间演化算子联系起来：
$$\begin{align}
\ket{\psi_{I};t_{0},t}  & = e^{ \frac{i}{\hbar}H_{0}t}\ket{\psi_{S};t_{0},t}  \\
 & = e^{ \frac{i}{\hbar}H_{0}t}U(t,t_{0})\ket{\psi_{S};t_{0},t_{0}} \\
 & = e^{ \frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}\ket{\psi_{I};t_{0},t_{0}} \\ \\
\implies U_{I}(t,t_{0}) & = e^{\frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}  
\end{align}$$

>[!Success] Proposition 1.2
>$U_{I}(t,t_{0})=e^{\frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}$

在相互作用绘景下，我们一般将$\ket{\psi_{I}}$在Schrodinger绘景的本征态下展开：
$$\ket{\psi_{I}} =\sum_{n} c_{n}(t)\ket{n} $$
我们想要得到$c_{n}(t)$的演化。我们从相互作用绘景下的Schrodinger方程入手：
$$\begin{align}
 & i\hbar \partial_{t}\ket{\psi_{I}} =V_{I}\ket{\psi_{I}}  \\
\implies &  i\hbar \partial_{t}\bra{n} \psi_{I}\rangle= \sum_{m}\bra{n} V_{I}\ket{m} \bra{m} \psi_{I}\rangle=\sum_{m}\bra{n} e^{ \frac{i}{\hbar}H_{0}t}V e^{- \frac{i}{\hbar}H_{0}t}\ket{m} \bra{m} \psi_{I}\rangle \\
\implies & i\hbar \partial_{t}c_{n}= \sum_{m} e^{i\omega_{nm}t} V_{nm} c_{m},\ \omega_{nm}= \frac{E_{n}-E_{m}}{\hbar}
\end{align}$$
# 2. Transition rate

一般来说，$V(t_{0})=0$。我们想要得到$t$时刻观测$H_{0}$的谱，检查系统坍缩到本征态$\ket{f}$的概率。

若系统$t_{0}$时刻处于本征态$\ket{i}$，我们不妨取一个phase，使得系统在Schrodinger绘景中处于$e^{- \frac{i}{\hbar}E_{n}t_{0}}\ket{i}$。那么在相互作用绘景中系统处于$\ket{i}$。那么：
$$c_{f}(t)=\bra{f} U_{I}(t,t_{0})\ket{i} $$
注意到在Schrodinger绘景下系统坍缩到本征态$\ket{f}$的概率为$|\bra{f}U(t,t_{0})e^{- \frac{i}{\hbar}E_{n}t_{0}}\ket{i}|^{2}=|\bra{f}U_{I}(t,t_{0})\ket{i}|^{2}=|c_{f}(t)|^{2}$。所以我们希望得到$U_{I}(t,t_{0})$。

对于$U_{I}$作Dyson级数展开：
$$\begin{align}
 & i\hbar \partial_{t}U_{I}(t,t_{0})=V_{I}(t)U_{I}(t,t_{0}) \text{ with }U(t_{0},t_{0})=1 \\
\implies  & U_{I}= 1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} V_{I}(t_{1})U_{I}(t_{1},t_{0}) \\
\implies & U_{I}=1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1}V_{I}(t_{1})\left( 1- \frac{i}{\hbar}\int_{t_{0}}^{t_{1}}dt_{2}V_{I}(t_{2})U_{I}(t_{2},t_{0}) \right) \\
\implies & U_{I}= 1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1}V_{I}(t_{1})+ \left( -\frac{i}{\hbar} \right)^{2} \int_{t_{0}}^{t}dt_{1}\int_{t_{0}}^{t_{1}}dt_{2}  V_{I}(t_{1})V_{I}(t_{2})+\dots+ \left( - \frac{i}{\hbar} \right)^{n} \int_{t_{0}}^{t}dt_{1}\dots \int_{t_{0}}^{t_{n-1}}dt_{n}V_{I}(t_{1})\dots V_{I}(t_{n})+\dots
\end{align}$$
假设$V_{I}$很小，我们只需要取前几项即可。将$c_{f}$以$V_{I}$的阶数展开：
$$c_{f}=c_{f}^{(0)}+c_{f}^{(1)}+\dots$$
可以得到：
$$\begin{align}
 & c_{f}^{(0)}=\delta_{fi} \\
 & c_{f}^{(1)}=- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} \bra{f} V_{I}(t_{1})\ket{i} = - \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} e^{i\omega_{fi}t_{1}} V_{fi}(t_{1}) \\
 & c_{f}^{(2)}=\left( - \frac{i}{\hbar} \right)^{2} \int_{t_{0}}^{t}dt_{1} \int_{t_{0}}^{t_{1}}dt_{2} \bra{f} V_{I}(t_{1})V_{I}(t_{2})\ket{i} =\left( - \frac{i}{\hbar} \right)^{2}\sum_{m}\int_{t_{0}}^{t}dt_{1}\int_{t_{0}}^{t_{1}}dt_{2} e^{i\omega_{fm}t_{1}}e^{i\omega_{mi}t_{2}}  V_{fm}(t_{1})V_{mi}(t_{2})
\end{align}$$
于是若$f\neq i$，我们有：
$$P(i\rightarrow f)=|c_{f}|^{2}=|c_{f}^{(1)}+c_{f}^{(2)}+\dots|^{2}$$
