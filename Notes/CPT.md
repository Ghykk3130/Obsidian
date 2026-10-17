# 1. Spinor表示

我们知道Lorentz代数有六个生成元$J_{i},K_{i}$。作变换：
$$J^{+}_{i}= \frac{1}{2}(J_{i}+iK_{i}),\ J^{-}_{i}= \frac{1}{2}(J_{i}-iK_{i})$$
容易证明它们各自符合角动量代数：
$$[J^{+}_{i},J^{+}_{j}]=i\epsilon_{ijk}J^{+}_{k},\ [J^{-}_{i},J^{-}_{j}]=i\epsilon_{ijk}J^{-}_{k}$$
并且它们相互之间对易：
$$[J^{+}_{i},J^{-}_{j}]=0$$
于是可以认为，这组算子作用在不同的“自由度”上。这两个“自由度”直积成为总的底空间。

角动量代数可以构造ladder operator，从而构造出一系列$\mathfrak{su}(2)$的不可约表示。令$\{ J^{+}_{i} \}$构造出的不可约表示为$2j^{+}+1$维，底空间为$\{ \ket{j^{+},m_{j^{+}}} \}$。令$\{ J^{-}_{i} \}$构造出的不可约表示为$2j^{-}+1$维，底空间为$\{ \ket{j^{-},m_{j^{-}}} \}$。那么总的底空间就是$\{ \ket{j^{+},m_{j^{+}}} \}\otimes \{ \ket{j^{-},m_{j^{-}}} \}$。

对于任何Lorentz变换：
$$\begin{align}
\exp\left( - i\theta_{i}J_{i}- i\beta_{i}K_{i} \right) & = \exp(-i\theta _{i}(J^{+}_{i}+J^{-}_{i})-\beta_{i}(J^{+}_{i}-J^{-}_{i})) \\
 & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}-(i\theta_{i}-\beta_{i})J^{-}_{i}) \\
 & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}) \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})
\end{align}$$
其中最后一步是因为$[J^{+}_{i},J^{-}_{i}]=0$。那么Lorentz变换的作用就是：
$$\begin{align}
\exp(-i\theta_{i}J_{i}-i\beta_{i}K_{i}) \ket{j^{+},m_{j^{+}}} \otimes \ket{j^{-},m_{j^{-}}}  & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i})\ket{j^{+},m_{j^{+}}} \otimes \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})\ket{j^{-},m_{j^{-}}} 
\end{align}$$
## Ex:

不妨令$j^{+}=\frac{1}{2}$, $j^{-}=0$。$J^{+}_{i}= \frac{1}{2}\sigma^{i},\ J^{-}_{i}=0$。那么底空间是二维的。记为$\left( \frac{1}{2},0 \right)$。底空间中矢量记为$\psi_{L}\in \left\{  \ket{\frac{1}{2},m_{j^{+}}}  \right\} \otimes \{ \ket{0,0} \}$。称为left-handed Weyl spinor。

相应地，取$j^{-}= \frac{1}{2}, j^{+}=0$。$J^{-}_{i}= \frac{1}{2}\sigma^{i},\ J^{+}_{i}=0$。生成的表示称为right-handed Weyl spinor。
## Ex:

我们将左右手Weyl spinor拼起来得到$\psi= \begin{pmatrix}\psi_{L} \\ \psi_{R} \end{pmatrix}$。对于任意一个Lorentz变换：
$$\begin{align}
\psi_{L}\otimes \psi_{R}\rightarrow\exp(-i\theta_{i}J_{i}-i\beta_{i}K_{i}) \psi_{L}\otimes \psi_{R}  & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i})\psi_{L} \otimes \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})\psi_{R} 
\end{align}$$
这个关系可以被等价地写成：
$$\begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}\rightarrow 
\begin{pmatrix}
\exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}) & 0 \\
0 & \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})
\end{pmatrix} \begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}
$$
于是这也构成一个Lorentz表示。称为Dirac spinor。
# 2. Parity

规定离散变换的表示都是酉表示。不妨令宇称算符引出变换：
$$\begin{align}
U(P)a_{\mathbf{p}}U^{-1}(P) & = \eta_{a}a_{-\mathbf{p}},\ U(P)b_{\mathbf{p}}U^{-1}(P)=\eta_{b}b_{-\mathbf{p}}
\end{align}$$
其中$\eta_{a},\eta-b$是引出的相位。那么作用在场上得到：
$$\begin{align}
U(P)\psi(x)U^{-1}(P) & = U(P)\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+ (b^{s}_{\mathbf{p}})^{\dagger} v^{s}(p)e^{ip\cdot x})U^{-1}(P) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}( \eta_{a}a^{s}_{-\mathbf{p}}u^{s}e^{-ip\cdot x}+\eta ^{*}_{b}(b^{s}_{-\mathbf{p}})^{\dagger} v^{s}e^{ip\cdot x})
\end{align}$$
由于：
$$\begin{align}
u^{}(p) & = \begin{pmatrix}
\sqrt{ p\cdot \sigma } \xi \\
\sqrt{ p\cdot \bar{\sigma} }\xi 
\end{pmatrix} \\
 & = \begin{pmatrix}
\sqrt{ \tilde{p}\cdot \bar{\sigma} }\xi \\
\sqrt{ \tilde{p}\cdot \sigma }\xi 
\end{pmatrix} \\
 & = \gamma^{0} \begin{pmatrix}
\sqrt{ \tilde{p}\cdot \sigma }\xi \\
\sqrt{ \tilde{p}\cdot \bar{\sigma} }\xi
\end{pmatrix} \\
 & = \gamma^{0} u(\tilde{p})
\end{align}$$
$$\begin{align}
v(p) & = \begin{pmatrix}
\sqrt{ p\cdot \sigma }\eta \\
-\sqrt{ p\cdot \sigma }\eta
\end{pmatrix} \\
 & = \begin{pmatrix}
\sqrt{ \tilde{p}\cdot \bar{\sigma} }\eta \\
-\sqrt{ \tilde{p}\cdot {\sigma} }\eta
\end{pmatrix} \\
 & = -\gamma^{0} v(\tilde{p})
\end{align}$$
所以：
$$\begin{align}
U(P)\psi(x)U^{-1}(P) & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(\eta_{a}a^{s}_{-\mathbf{p}}\gamma^{0}u^{s}(\tilde{p})e^{-i\tilde{p}\cdot \tilde{x}}- \eta ^{*}_{b}(b^{s}_{-\mathbf{p}})^{\dagger} \gamma^{0} v^{s(\tilde{p})}e^{i\tilde{p} \cdot \tilde{x}})
\end{align}$$
假设$\eta ^{*}_{b}=-\eta_{a}$，那么：
$$\begin{align}
 & U(P)\psi(x)U^{-1}(P)  = \eta_{a}\gamma^{0}\psi(\tilde{x}) \\
 \implies   &  \boxed{U(P)\psi(x)U^{-1}(P)=\eta_{a}\gamma^{0}\psi(Px)}
\end{align}$$
由于真实物理量都是fermion bilinear，所以要求$\eta_{a}^{2}=\eta_{b}^{2}=\pm 1$。
## Ex:

我们有：
$$\begin{align}
U(P)\bar{\psi}(x)U^{-1}(P) & = U(P)\psi ^{\dagger}\gamma^{0}U^{-1}(P) \\
 & = U(P)\psi ^{\dagger}U^{-1}(P)\gamma^{0} \\
 & = (U^{-1}(P))^{\dagger}\psi ^{\dagger}U^{\dagger}(P)\gamma^{0} \\
 & = (U(P)\psi U^{-1}(P))^{\dagger}\gamma^{0} \\
 & = \eta ^{*}_{a}\bar{\psi}(Px)\gamma^{0}
\end{align}$$
## Ex:

对fermion bilinear标量，我们有：
$$\begin{align}
U(P)\bar{\psi}(x)\psi(x)U^{-1}(P) & = U(P)\bar{\psi}U^{-1}(P)U(P)\psi(x)U^{-1}(P) \\
 & = \eta ^{*}_{a}\bar{\psi}(Px)\gamma^{0}\eta_{a}\gamma^{0}\psi(Px) \\
 & = |\eta_{a}|^{2}\bar{\psi}\psi(Px) \\
 & = \bar{\psi}\psi(Px)
\end{align}$$
## Ex:

对于fermion bilinear矢量，可以计算：
$$\begin{align}
U(P)\bar{\psi}(x)\gamma^{\mu}\psi(x)U^{-1}(P) & = U\bar{\psi}U^{-1}U\gamma^{\mu}U^{-1}U\psi U^{-1} \\
 & = \eta ^{*}_{a}\bar{\psi}(Px)\gamma^{0} \gamma^{\mu}\eta_{a}\gamma^{0} \psi(Px) \\
 & = \bar{\psi}(\gamma^{\mu})^{\dagger}\psi(Px) \\
 & = \left\{ \begin{aligned}
 & \bar{\psi}\gamma^{\mu}\psi(Px),\ \mu=0 \\
 & -\bar{\psi}\gamma^{\mu}\psi(Px),\ \mu=1,2,3
\end{aligned}\right.
\end{align}$$
可见空间部分变换时获得负号。
## Ex:

对于fermion bilinear赝标量：
$$\begin{align}
U(P)i\bar{\psi}(x)\gamma^{5}\psi(x)U^{-1}(P) & = i \eta ^{*}_{a}\bar{\psi}(Px)\gamma^{0}\gamma^{5}\eta_{a}  \gamma^{0}\psi(Px) \\
 & = -i\bar{\psi}\gamma^{5}\psi(Px)
\end{align}$$


# 2. Time reversal

我们定义spin-flip算子：
$$\xi^{-s}=-i\sigma^{2}(\xi^{s})^{*}=\begin{pmatrix}
0 & -1 \\
1 & 0
\end{pmatrix}(\xi^{s})^{*}$$
若取$\xi^{s}=\begin{pmatrix}1 \\ 0\end{pmatrix},\ \begin{pmatrix}0 \\ 1\end{pmatrix}$。容易计算：
$$(\xi^{-1},\xi^{-2})=(\xi^{2},-\xi^{1})$$
不妨选取：
$$(\eta^{1},\eta^{2})=(\xi^{-1},\xi^{-2})=(\xi^{2},-\xi^{1})$$
我们可以证明：
$$\begin{align}
\sqrt{ \tilde{p}\cdot \sigma } \sigma^{2}=\sigma^{2}\sqrt{ p\cdot \sigma ^{*} }
\end{align}$$
## Ex:

不妨取z轴和$p^{3}$平行。那么：
$$\begin{align}
\sqrt{ \tilde{p}\cdot \sigma }\sigma^{2} & = \begin{pmatrix}
\sqrt{ E+p^{3} } & 0 \\
0 & \sqrt{ E -p^{3} }
\end{pmatrix} \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & -i\sqrt{ E+p^{3} } \\
i\sqrt{ E-p^{3} } & 0
\end{pmatrix}
\end{align}$$
而：
$$\begin{align}
\sigma^{2}\sqrt{ p\cdot \sigma ^{*} } & = \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} \begin{pmatrix}
\sqrt{ E-p^{3} } & 0 \\
0 & \sqrt{ E+p^{3} }
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & -i\sqrt{ E+p^{3} }  \\
i\sqrt{ E-p^{3} } & 0
\end{pmatrix}
\end{align}$$

于是：
$$\begin{align}
u^{-s}(\tilde{p}) & = \begin{pmatrix}
\sqrt{ \tilde{p}\cdot \sigma }\xi^{-s} \\
\sqrt{ \tilde{p}\cdot \bar{\sigma} }\xi^{-s}
\end{pmatrix} \\
 & = \begin{pmatrix}
\sqrt{ \tilde{p}\cdot \sigma }(-i\sigma^{2})(\xi^{s})^{*} \\
\sqrt{ \tilde{p}\cdot \bar{\sigma} }(-i\sigma^{2})(\xi^{s})^{*}
\end{pmatrix} \\
 & = \begin{pmatrix}
-i \sigma^{2}\sqrt{ p\cdot \sigma ^{*} }(\xi^{s})^{*} \\
-i\sigma^{2}\sqrt{ {p}\cdot \bar{\sigma}^{*} }(\xi^{s})^{*}
\end{pmatrix} \\
 & = -i \begin{pmatrix}
\sigma^{2} & 0 \\
0 & \sigma^{2}
\end{pmatrix} (u^{s}(p))^{*} \\
 & = -\gamma^{1}\gamma^{3}(u^{s}(p))^{*}
\end{align}$$
类似地，可以证明：
$$v^{-s}(\tilde{p})=-\gamma^{1}\gamma^{3}(v^{s}(p))^{*}$$
假设：
$$\begin{align}
U(T)a^{s}_{\mathbf{p}}U^{-1}(T)=a^{-s}_{-\mathbf{p}},\ U(T)b^{s}_{\mathbf{p}}U^{-1}(T)=b^{-s}_{-\mathbf{p}}
\end{align}$$
我们规定$U(T)$不仅对于算子作用，还将c-number映射为其复共轭。

那么：
$$\begin{align}
U(T)\psi(x)U^{-1}(T) & = U(T)\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+ (b^{s}_{\mathbf{p}})^{\dagger} v^{s}(p)e^{ip\cdot x})U^{-1}(T) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(a^{-s}_{-\mathbf{p}}(u^{s})^{*}e^{ip\cdot x}+(b^{-s}_{-\mathbf{p}})^{\dagger}(v^{s})^{*}e^{-ip\cdot x}) \\
 & =-\gamma^{3}\gamma^{1} \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(a^{-s}_{-\mathbf{p}}u^{-s}(\tilde{p})e^{ip\cdot x}+(b^{-s}_{-\mathbf{p}})^{\dagger}v^{-s}(\tilde{p})e^{-ip\cdot x}) \\
 & = \gamma^{1}\gamma^{3}\int \frac{d^{3}\tilde{p}}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\tilde{\mathbf{p}}} }}\sum_{s}(a^{-s}_{\tilde{\mathbf{p}}}u^{-s}(\tilde{p})e^{i\tilde{p}\cdot \tilde{x}}+(b^{-s}_{\tilde{\mathbf{p}}})^{\dagger}v^{-s}(\tilde{p})e^{-i\tilde{p}\cdot \tilde{x}}) \\
 \implies &  \boxed{U(T)\psi(x)U^{-1}(T) = \gamma^{1}\gamma^{3}\psi(Tx)}
\end{align}$$
最后一步是因为$\tilde{p}\cdot \tilde{x}=-\tilde{p}\cdot(-t,\mathbf{x})=-\tilde{p}\cdot Tx$。
# 3. Charge conjugation

不妨假设charge conjugation将粒子变成反粒子：
$$U(C)a^{s}_{\mathbf{p}}U^{-1}(C)=b^{s}_{\mathbf{p}},\ U(C)b^{s}_{\mathbf{p}}U^{-1}(C)=a^{s}_{\mathbf{p}}$$
我们计算：
$$\begin{align}
(v^{s}(p))^{*} & = \begin{pmatrix}
\sqrt{ p\cdot \sigma }\eta^{s} \\
-\sqrt{ p\cdot \bar{\sigma} }\eta^{s}
\end{pmatrix}^{*} \\
 & = \begin{pmatrix}
\sqrt{ p\cdot \sigma }(-i\sigma^{2})(\xi^{s})^{*} \\
\sqrt{ p\cdot \bar{\sigma} }(i\sigma^{2})(\xi^{s})^{*}
\end{pmatrix}^{*} \\
 & = \begin{pmatrix}
\sqrt{ p\cdot \sigma ^{*} }(-i\sigma^{2})\xi^{s} \\
\sqrt{ p\cdot \bar{\sigma}^{*} } (i\sigma^{2})\xi^{s}
\end{pmatrix} \\
 & = \begin{pmatrix}
-i\sigma^{2}\sqrt{ \tilde{p}\cdot \sigma }\xi^{s} \\
i\sigma^{2}\sqrt{ \tilde{p}\cdot \bar{\sigma} }\xi^{s}
\end{pmatrix} \\
 & = \begin{pmatrix}
-i\sigma^{2}\sqrt{ p\cdot \bar{\sigma} }\xi^{s} \\
i\sigma^{2}\sqrt{ p\cdot \sigma }\xi^{s}
\end{pmatrix} \\
 & =\begin{pmatrix}
0 & -i\sigma^{2} \\
i\sigma^{2} & 0
\end{pmatrix} u^{s}(p) \\
 & = -i\gamma^{2}u^{s}(p)
\end{align}$$
同理可证：
$$v^{s}(p)=-i\gamma^{2}(u^{s}(p))^{*}$$
于是：
$$\begin{align}
U(C)\psi(x)U^{-1}(C) & = U(C)\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(b^{s}_{\mathbf{p}})^{\dagger}v^{s}(p)e^{ip\cdot x})U^{-1}(C) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(b^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(a^{s}_{\mathbf{p}})^{\dagger}v^{s}(p)e^{ip\cdot x}) \\
 & = -i\gamma^{2}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\sum_{s}(b^{s}_{\mathbf{p}}(v^{s}(p))^{*}e^{-ip\cdot x}+(a^{s}_{\mathbf{p}})^{\dagger}(u^{s}(p))^{*}e^{ip\cdot x}) \\
 & = -i\gamma^{2}\psi ^{*}(x)
\end{align}$$
其中$\psi ^{*}$表示对于场算符求dagger，对于其它部分求$*$。我们定义$\psi^{T}$为对于spinor转置。那么：
$$\begin{align}
U(C)\psi(x)U^{-1}(C) & = -i\gamma^{2}\psi ^{*}(x) \\
 & = -i\gamma^{2}(\psi ^{\dagger})^{T} \\
 & = -i\gamma^{2}(\bar{\psi}\gamma^{0})^{T} \\
 & = -i(\gamma^{2})^{T}(\bar{\psi}\gamma^{0})^{T} \\
 & = -i(\bar{\psi}\gamma^{0}\gamma^{2})^{T}
\end{align}$$
其中，容易通过直接计算证明$(\gamma^{2})^{T}=\gamma^{2}$。
