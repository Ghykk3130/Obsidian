# 1. Dirac方程

考虑Dirac矩阵$\gamma^{\mu}$。若$\mu=0,1,2,3$，旋量表示空间维数为$4$，可以取：
$$\gamma^{0}=\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix},\ \gamma^{i}=\begin{pmatrix}
0 & \sigma^{i} \\
-\sigma^{i} & 0
\end{pmatrix}$$
这称为Weyl表示。容易计算：
$$\begin{align}
S^{0 i}= \frac{i}{4}[\gamma^{0},\gamma^{i}]= - \frac{i}{2}\begin{pmatrix}
\sigma^{i} & 0 \\
0 & -\sigma^{i}
\end{pmatrix}
\end{align}$$
$$\begin{align}
S^{ij} & = \frac{i}{4}[\gamma^{i},\gamma^{j}] \\
 & = \frac{i}{4}\begin{pmatrix}
-\sigma^{i}\sigma^{j} +\sigma^{j}\sigma^{i} & 0 \\
0 & -\sigma^{i}\sigma^{j}+\sigma^{j}\sigma^{i}
\end{pmatrix} \\
 & = \frac{1}{2}\epsilon^{ijk}\begin{pmatrix}
\sigma^{k} & 0 \\
0 & \sigma^{k}
\end{pmatrix}
\end{align}$$
考虑一个四个分量的矢量场$\psi_{a}(x)$。我们通过$x\rightarrow \Lambda x$，并将$\Lambda$吸收进functional dependence，引出一个新的场的构型$\psi^{'}_{a}(x)$。令$\Lambda=\exp\left( - \frac{i}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right)$的旋量表示为$\Lambda_{\frac{1}{2}}=\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right)$。如果：
$$\begin{align}
\psi^{'}_{a}(x)= (\Lambda_{\frac{1}{2}})_{ab}\psi_{b}(\Lambda ^{-1}x)
\end{align}$$
那么称$\psi_{a}(x)$为Dirac旋量。上式简记为$\psi^{'}(x)=\Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x)$。
## Ex:

我们可以证明Klein-Gordon方程对于Dirac旋量是不变的。

>[!Quote]
>这是什么意思呢？对于任意场$\psi(x)$，变换$x\rightarrow \Lambda x$，并将$\Lambda$吸收进场的functional dependence。这引出一个新的场的构型$\psi^{'}(x)$。Klein-Gordon方程不变的意思是，如果$(\Box+m^{2})\psi(x)=0$。那么可以推出$(\Box+m^{2})\psi^{'}(x)=0$

>[!Success] Proposition 1.1
>The Klein-Gordon equation is invariant under transformations of Dirac spinors.
## Proof.

这是显然。因为：
$$\begin{align}
(\Box+m^{2})\psi^{'}_{a}(x) & = (\Box+m^{2})\left( \Lambda_{\frac{1}{2}} \right)_{ab}\psi_{b}(\Lambda ^{-1}x) \\
 & = \left( \Lambda_{\frac{1}{2}} \right)_{ab}(\Box+m^{2})\psi_{b}(\Lambda ^{-1}x) \\
 & = 0
\end{align}$$
>[!Right]
>$\blacksquare$

进一步的，我们猜Dirac方程：
$$\boxed{(i\gamma^{\mu}\partial_{\mu}-m^{})\psi=0}$$
它是针对Dirac旋量不变的。

>[!Success] Proposition 1.2
>The Dirac equation is invariant under transformations of Dirac spinors.
## Proof.

我们有：
$$\begin{align}
(i\gamma^{\mu}\partial_{\mu}-m)\psi^{'}(x) & = (i\gamma^{\mu}\partial_{\mu}-m)\Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x)  \\
 & = i\gamma^{\mu}\Lambda_{\frac{1}{2}}\partial_{\mu}\psi(\Lambda ^{-1}x)-m\Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x) \\
 & = i \Lambda_{\frac{1}{2}}\Lambda ^{-1}_{\frac{1}{2}}\gamma^{\mu}\Lambda_{\frac{1}{2}}\partial_{\mu}\psi-m\Lambda_{\frac{1}{2}}\psi \\
 & = i\Lambda_{\frac{1}{2}}\Lambda^{\mu}{}_{\nu}\gamma^{\nu}\partial_{\nu}\psi-m\Lambda_{\frac{1}{2}}\psi
\end{align}$$
我们计算：
$$\begin{align}
\frac{\partial}{\partial x^{\mu}}\psi(\Lambda ^{-1}x) & = \frac{\partial y^{\rho} }{\partial x^{\mu}} \frac{\partial}{\partial y^{\rho}}\psi(y),\ y=\Lambda ^{-1}x \\
 & = (\Lambda ^{-1})^{\rho}{}_{\mu}\partial_{\rho}\psi
\end{align}$$
于是：
$$\begin{align}
(i\gamma^{\mu}\partial_{\mu}-m)\psi^{'}(x) & = i \Lambda_{ \frac{1}{2}}\Lambda^{\mu}{}_{\nu}\gamma^{\nu}(\Lambda ^{-1})^{\rho}{}_{\mu}\partial_{\rho}\psi(y)-m\Lambda_{\frac{1}{2}}\psi(y) \\
 & = i\Lambda_{\frac{1}{2}}\delta^{\rho}{}_{\nu}\gamma^{\nu}\partial_{\rho}\psi-m\Lambda_{\frac{1}{2}}\psi \\
 & = \Lambda_{\frac{1}{2}}(i\gamma^{\nu}\partial_{\nu}-m )\psi \\
 & = 0
\end{align}$$
>[!Right]
>$\blacksquare$

## Ex:

可以证明，如果一个矢量场满足Dirac方程，那么它满足Klein-Gordon方程：
$$\begin{align}
 & (i\gamma^{\mu}\partial_{\mu}-m)\psi=0 \\
\implies & (-i^{}\gamma^{\nu}\partial_{\nu}-m)(i\gamma^{\mu}\partial_{\mu}-m)\psi=0 \\
\implies & (\gamma^{\nu}\gamma^{\mu}\partial_{\nu}\partial_{\mu}+m^{2})\psi=0
\end{align}$$
注意到：
$$\begin{align}
\gamma^{\nu}\gamma^{\mu}\partial_{\nu}\partial_{\mu} & = \frac{1}{2}\gamma^{\nu}\gamma^{\mu}\partial_{\nu}\partial_{\mu}+ \frac{1}{2}\gamma^{\nu}\gamma^{\mu}\partial_{\nu}\partial_{\mu}  \\
 & = \frac{1}{2}\gamma^{\nu}\gamma^{\mu}\partial_{\nu}\partial_{\mu}+ \frac{1}{2}\gamma^{\nu}\gamma^{\mu}\partial_{\mu}\partial_{\nu} \\
 & = \frac{1}{2}\{ \gamma^{\nu},\gamma^{\mu} \}\partial_{\nu}\partial_{\mu} \\
 & = \Box
\end{align}$$
那么得证。

我们定义Dirac conjugate：
$$\bar{\psi}=\psi ^{\dagger}\gamma^{0}$$
我们发现，通过坐标变换诱导的新场的Dirac conjugate为：
$$\begin{align}
\bar{\psi^{'}}(x) & = \psi^{' {\dagger}}(x) \gamma^{0} \\
 & = \left( \Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x) \right)^{\dagger} \gamma^{0} \\
 & = \psi ^{\dagger} \Lambda_{\frac{1}{2}}^{\dagger}\gamma^{0}
\end{align}$$
考虑$\Lambda_{\frac{1}{2}}=\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right)$。对于空间部分，显然$\{ \gamma^{i},\gamma^{0} \}=2g^{i{0}}=0$。


构造lagrangian：
$$\mathcal{L}= \bar{\psi}(i\gamma^{\mu }\partial_{\mu}-m)\psi$$



