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
