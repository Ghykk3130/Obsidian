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
$$\boxed{\bar{\psi}=\psi ^{\dagger}\gamma^{0}}$$
我们发现，通过坐标变换诱导的新场的Dirac conjugate为：
$$\begin{align}
\bar{\psi^{'}}(x) & = \psi^{' {\dagger}}(x) \gamma^{0} \\
 & = \left( \Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x) \right)^{\dagger} \gamma^{0} \\
 & = \psi ^{\dagger} \Lambda_{\frac{1}{2}}^{\dagger}\gamma^{0}
\end{align}$$
考虑$\Lambda_{\frac{1}{2}}=\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right)$。我们知道$(\gamma^{i})^{\dagger}=-\gamma^{i},\ (\gamma^{0})^{\dagger}=\gamma^{0}$。所以：
$$\begin{align}
(S^{ij})^{\dagger} & = - \frac{i}{4}[\gamma^{i},\gamma^{j}]^{\dagger} \\
 & = - \frac{i}{4}(\gamma^{j}\gamma^{i}-\gamma^{i}\gamma^{j}) \\
 & = S^{ij}
\end{align}$$
而$\gamma^{0}$与$\gamma^{i}$反对易。所以：
$$\begin{align}
(S^{ij})^{\dagger}\gamma^{0} &=S^{ij}\gamma^{0} = \frac{i}{4}[\gamma^{i},\gamma^{j}]\gamma^{0} \\
 
 & = \gamma^{0}S^{ij}
\end{align}$$
类似地：
$$\begin{align}
(S^{0i})^{\dagger} & = - \frac{i}{4}[\gamma^{0},\gamma^{i}]^{\dagger} \\
 & = - \frac{i}{4}(-\gamma^{i}\gamma^{0}+\gamma^{0}\gamma^{i}) \\
 & = - S^{0i}
\end{align}$$
还有：
$$\begin{align}
(S^{0i})^{\dagger}\gamma^{0} & = -S^{0i}\gamma^{0} = - \frac{i}{4}[ \gamma^{0},\gamma^{i}]\gamma^{0}  \\
 & =\gamma^{0}S^{0i}
\end{align}$$
故：
$$\begin{align}
\bar{\psi^{'}} & = \psi ^{\dagger}\exp\left( \frac{i}{2}\omega_{\mu \nu}(S^{\mu \nu})^{\dagger} \right) \gamma^{0} \\
 & = \psi ^{\dagger}\gamma^{0}\exp\left(  \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right) \\
 & = \psi ^{\dagger}\gamma^{0}\Lambda_{\frac{1}{2}}^{-1} \\
 & = \bar{\psi}(\Lambda ^{-1}x)\Lambda ^{-1}_{\frac{1}{2}}
\end{align}$$

构造lagrangian：
$$\boxed{\mathcal{L}= \bar{\psi}(i\gamma^{\mu }\partial_{\mu}-m)\psi=\bar{\psi}(i\rlap{/}\partial-m)\psi}$$
可以证明这个lagrangian是不变的：
$$\begin{align}
\bar{\psi^{'}}(x)(i\gamma^{\mu}\partial_{\mu}-m)\psi^{'}(x) &  =  \bar{\psi}(\Lambda ^{-1}x)\Lambda ^{-1}_{\frac{1}{2}}(i\gamma^{\mu}\partial_{\mu}-m)\Lambda_{\frac{1}{2}}\psi(\Lambda ^{-1}x) \\
 & = \bar{\psi}\left( i \Lambda^{\mu}{}_{\nu}\gamma^{\nu} \frac{\partial}{\partial x^{\mu}}-m  \right)\psi(\Lambda ^{-1}x) \\
 & = \bar{\psi}(i\Lambda^{\mu}{}_{\nu}\gamma^{\nu}(\Lambda ^{-1})^{\rho}{}_{\mu} \partial_{\rho}-m)\psi \\
 & = \bar{\psi}(i\gamma^{\mu}\partial_{\mu}-m)\psi
\end{align}$$
# 2. Weyl方程

将Dirac旋量分成两个二维的旋量。写作：
$$\psi(x)= \begin{pmatrix}
\psi_{L}(x) \\
\psi_{R}(x)
\end{pmatrix}$$
称$\psi_{L},\psi_{R}$为Weyl旋量。这样一来，Dirac方程变为：
$$\begin{align}
 & (i\gamma^{\mu}\partial_{\mu}-m)\begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}=0 \\
\implies & \begin{pmatrix}
-m & i(\partial_{0}+\boldsymbol{\sigma}\cdot \nabla) \\
i(\partial_{0}-\boldsymbol{\sigma}\cdot \nabla) & -m
\end{pmatrix} \begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}=0
\end{align}$$
定义$\sigma^{\mu}:=(1,\boldsymbol{\sigma}),\ \bar{\sigma}^{\mu}=(1,-\boldsymbol{\sigma})$。那么：
$$\begin{align}
\begin{pmatrix}
-m & i\sigma^{\mu}\partial_{\mu} \\
i\bar{\sigma}^{\mu}\partial_{\mu} & -m
\end{pmatrix} \begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}=0
\end{align}$$
若是无质量粒子。那么得到解耦的方程：
$$\begin{align}
i\sigma^{\mu}\partial_{\mu}\psi_{R}=0,\ i \bar{\sigma}^{\mu}\partial_{\mu}\psi_{L}=0
\end{align}$$
称为Weyl方程。

# 3. Dirac方程的解

注意到Dirac旋量符合Klein-Gordon方程。那么将解写为一个Klein-Gordon方程的本征模$\psi(x)=u(p)e^{-ip\cdot x}$。$u(p)$是一个4-component column vector。代入Dirac方程得到动量空间中的方程：
$$\begin{align}
 & (\gamma^{\mu}p_{\mu}-m)u(p)=0
\end{align}$$
在静止参考系中，我们有$p_{i}=0$。那么解得：
$$\begin{align}
u(p_{0})= \sqrt{ m }\begin{pmatrix}
\xi \\
\xi
\end{pmatrix}
\end{align}$$
其中，不妨取$\xi ^{\dagger}\xi=1$。

考虑任意方向的boost。不妨取坐标系使得boost在$x^{3}$方向。在Dirac spinor表示中，计算：
$$\begin{align}
K_{3} & = S^{03} \\
 & = \frac{i}{4}[\gamma^{0},\gamma^{3}] \\
 & = \frac{i}{2}\begin{pmatrix}
-\sigma^{3} & 0 \\
0 & \sigma^{3}
\end{pmatrix}
\end{align}$$
于是boost的表示就是：
$$\begin{align}
\Lambda_{\frac{1}{2}} & = \exp\left( - i\eta K_{3} \right)  \\
 & = \exp\left( - \frac{1}{2}\eta \begin{pmatrix}
\sigma^{3}& 0 \\
0 & -\sigma^{3}
\end{pmatrix} \right)
\end{align}$$
那么运动参考系中的Dirac spinor就是：
$$\begin{align}
u^{'}(p) & = \Lambda_{\frac{1}{2}}u(\Lambda ^{-1}p) \\
 & = \Lambda_{\frac{1}{2}}u(p_{0}) \\
 & = \exp\left( - \frac{1}{2} \eta \begin{pmatrix}
\sigma^{3}& 0 \\
0 & -\sigma^{3}
\end{pmatrix} \right)\sqrt{ m }\begin{pmatrix}
\xi \\
\xi
\end{pmatrix} \\
 & = \left[ \cosh \frac{\eta}{2} -\sinh \frac{\eta}{2} \begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3} 
\end{pmatrix} \right] \sqrt{ m }\begin{pmatrix}
\xi \\
\xi 
\end{pmatrix} \\
 & = \begin{pmatrix}
e^{\eta /2}\left(  \frac{1-\sigma^{3}}{2} \right) + e^{- \eta /2} \left(  \frac{1+\sigma^{3}}{2} \right) & 0 \\
0 & e^{\eta /2}\left(  \frac{1+\sigma^{3}}{2} \right)+ e^{-\eta /2}\left(  \frac{1-\sigma^{3}}{2} \right)
\end{pmatrix} \sqrt{ m }\begin{pmatrix}
\xi \\
\xi
\end{pmatrix} 
\end{align}$$
注意到：
$$\begin{align}
\sqrt{ m }e^{ \eta /2} & = \sqrt{ me^{\eta} } \\
 & = \sqrt{ m\cosh \eta+m\sinh \eta } \\
 & = \sqrt{ m\gamma+m\gamma v } \\
 & = \sqrt{ E+p^{3} }
\end{align}$$
所以得到动量空间中的解：
$$\begin{align}
u^{'}(p)=\begin{pmatrix}
\left( \sqrt{ E+p^{3} } \frac{1-\sigma^{3}}{2}+\sqrt{ E-p^{3} } \frac{1+\sigma^{3}}{2}  \right)\xi \\
\left( \sqrt{ E+p^{3} } \frac{1+\sigma^{3}}{2} + \sqrt{ E-p^{3} } \frac{1-\sigma^{3}}{2} \right)\xi
\end{pmatrix}
\end{align}$$
注意到$\frac{1-\sigma^{3}}{2},\ \frac{1+\sigma^{3}}{2}$是投影算子。

>[!Quote] 投影算子
>回忆起投影算子$\{ P_{i} \}$的要求：
>1. $\sum_{i}P_{i}=1$
>2. $P_{i}P_{j}=\delta_{ij}$
>可以一一验证$\frac{1-\sigma^{3}}{2},\ \frac{1+\sigma^{3}}{2}$满足这些要求。

那么：
$$\begin{align}
\sqrt{ E+p^{3} } \frac{1-\sigma^{3}}{2 }+ \sqrt{ E-p^{3} } \frac{1+\sigma^{3}}{2} & = \sqrt{ (E+p^{3}) \frac{1-\sigma^{3}}{2}+(E-p^{3}) \frac{1+\sigma^{3}}{2}  } \\
 & = \sqrt{ E-p^{3}\sigma^{3} } \\
 & = \sqrt{ p\cdot \sigma }
\end{align}$$
同理可得：
$$\begin{align}
\sqrt{ E+p^{3} } \frac{1+\sigma^{3}}{2}+\sqrt{ E-p^{3} } \frac{1-\sigma^{3}}{2} & = \sqrt{ p\cdot \bar{\sigma} }
\end{align}$$
其中$\sigma=(1,\boldsymbol{\sigma}),\ \bar{\sigma}=(1,-\boldsymbol{\sigma})$。现在得到的解不取决于参考系。忽略prime不写可以得到解：
$$\psi(x)=u(p)e^{-ip\cdot x},\ u(p)= \begin{pmatrix}
\sqrt{ p\cdot \sigma }\xi \\
\sqrt{ p\cdot \bar{\sigma} }\xi
\end{pmatrix}$$
其中$\xi ^{\dagger}\xi=1$。我们一般取$\xi=\begin{pmatrix}1 \\ 0\end{pmatrix}$或者$\xi=\begin{pmatrix}0 \\ 1\end{pmatrix}$。







