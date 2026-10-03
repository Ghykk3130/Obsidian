# 1. Lorentz群的李代数

>[!Success] Proposition 1.1
>$\mathfrak{so}(1,3)=\{ X\in \text{M}(4,\mathbb{R})|X_{}^{\mu \nu}+X_{}^{\nu \mu}=0 \}$
## Proof.

任取一个李代数中的元素$X$。那么：
$$\begin{align}
 & (e^{tX})^{T}ge^{tX}=g,\ \forall t\in \mathbb{R} \\
\implies &  \left. \frac{d}{dt}  \right|_{t=0} (e^{tX^{T}}ge^{tX})=0 \\
\implies & X^{T}g+gX=0 \\  \implies & (X^{T}g+gX)^{\mu}{}_{\nu}=0 \\
\implies & (X^{T}g)^{\mu}{}_{\nu}+(gX)^{\mu}{}_{\nu}=0 \\

\implies & (X^{T})^{\mu}{}_{\rho}g^{\rho}{}_{\nu}+g^{\mu}{}_{\rho}X^{\rho}{}_{\nu}=0 \\
\implies & X_{\rho}{}^{\mu}g^{\rho}{}_{\nu}+g^{\mu}{}_{\rho}X^{\rho}{}_{\nu}=0 \\
\implies & X_{\nu}{}^{\mu}+X^{\mu}{}_{\nu}=0 \\
\implies &  X_{}^{\nu \mu}+X_{}^{\mu \nu}=0
\end{align}$$
反过来可以证明，如果$X$满足$X_{}^{\mu \nu}+X_{}^{\nu \mu}=0$，那么：
$$\begin{align}
 & X^{T}g=-gX \\
\implies & (X^{T})^{2}g=-(X^{T}g)X=(-1)^{2}gX^{2} \\
\implies & (X^{T})^{n}g=(-1^{})^{n}gX^{n}
\end{align}$$
于是：
$$\begin{align}
(e^{tX})^{T}g e^{tX} & = e^{tX^{T}}ge^{tX} \\
 & = \sum_{n} \frac{1}{n!}(tX^{T})^{n}ge^{tX} \\
 & = g\sum_{n}  \frac{1}{n!}(-tX)^{n}e^{tX} \\
 & = g e^{-tX}e^{tX} \\
 & =g
\end{align}$$
那么$X$满足李代数条件。
>[!Right]
>$\blacksquare$

于是$X_{}^{\mu \nu}$是一个反对称阵。有六个自由分量，取为李代数的基底，称为生成元。我们将李代数的参数写成纯虚数，那么李代数的基底也要乘以虚数。不妨取：
$$\begin{align}
 & K_{1}= i\begin{pmatrix}  0 & 1 &  &    \\
1 & 0 &   &   \\
 &  & 0 &  \\
 &  &  & 0
\end{pmatrix},\ K_{2}= i\begin{pmatrix}
0 &  & 1 &  \\
 & 0 &  &  \\
1 &  & 0 &  \\
 &  &  & 0
\end{pmatrix},\ K_{3}= i\begin{pmatrix}
0 &  &  & 1 \\
 & 0 &  &  \\
 &  & 0 &  \\
1 &  &  & 0
\end{pmatrix} \\ & 
 J_{1}=i\begin{pmatrix}
0 &  &  &  \\
 & 0 &  &  \\
 &  & 0 & -1 \\
 &  & 1 & 0
\end{pmatrix},\  J_{3}=i\begin{pmatrix}
0 &  &  &  \\
 & 0 & -1 &  \\
 & 1 & 0 &  \\
 &  &  & 0
\end{pmatrix},\ J_{2}=\begin{pmatrix}
0 &  &  &  \\
 & 0 &  & 1 \\
 &  & 0 &  \\
 & -1 &  & 0
\end{pmatrix},\ 
\end{align}$$
$K_{i}$看起来不像反对称矩阵。但我们要求的是$(K_{i})^{\mu \nu}$反对称。上面写得都是$(K_{i})^{\mu}{}_{\nu}$。将一个空间指标降下来自然就堆成了。李群中元素写为：
$$\exp(-i\theta_{i}J_{i}-i\beta_{i}K_{i})$$
## Ex:

考虑$J_{3}=i\begin{pmatrix}0 &  &  &  \\  & 0 & 1 &  \\  &  -1 & 0 &    \\  &  &  & 0\end{pmatrix}$作为一个生成元。它产生的有限变换为：
$$\begin{align}
\exp\left(i\theta J_{3}\right) = \begin{pmatrix}
0 &  &  &  \\
 & 0 & -\sin \theta &  \\
 & \sin \theta & 0 &  \\
 &  &  & 0
\end{pmatrix}+\begin{pmatrix}
1 &  &  &  \\
 & \cos \theta &  &  \\
 &  & \cos \theta &  \\
 &  &  & 1
\end{pmatrix} =\begin{pmatrix}
 1 &  &  &  \\
 & \cos \theta & -\sin \theta &  \\
 & \sin \theta & \cos \theta &  \\
 &  &  & 1
\end{pmatrix}
\end{align}$$
是绕z轴的旋转。
## Ex:

考虑$K_{1}=i\begin{pmatrix}0 & 1 &  &  \\ 1 & 0 &  &  \\  &  & 0 &  \\  &  &  & 0\end{pmatrix}$作为一个生成元。它产生的有限变换为：
$$\begin{align}
\exp\left(i\xi K_{1}\right)=\begin{pmatrix}
0 & \sinh \xi &  &  \\
\sinh \xi & 0 &  &  \\
 &  & 0 &  \\
 &  &  & 0
\end{pmatrix} + \begin{pmatrix}
\cosh \xi &  &  &  \\
 & \cosh \xi &  &  \\
 &  & 1 &  \\
 &  &  & 1
\end{pmatrix}= \begin{pmatrix}
\cosh \xi & \sinh \xi &  &  \\
\sinh \xi & \cosh \xi &  &  \\
 &  & 1 &  \\
 &  &  & 1
\end{pmatrix}
\end{align}$$
令$\cosh \xi=\gamma$。那么$v^{2}= \frac{\gamma^{2}-1}{\gamma^{2}}= \tanh ^{2}\xi$。于是$v=\tanh \xi$。那么$\gamma v=\sinh \xi$。是x方向的boost。

可以验证这个Lorentz algebra满足的结构常数为：
$$\begin{align}
 & [J_{i},J_{j}]=i\epsilon_{ijk}J_{k} \\
 & [J_{i},K_{j}]=i\epsilon_{ijk}K_{k} \\
 & [K_{i},K_{j}]=-i\epsilon_{ijk}J_{k}
\end{align}$$
我们可以构建：
$$\begin{align}
\mathcal{J}^{\mu \nu}=\begin{pmatrix}
0 & K_{1} & K_{2} & K_{3} \\
-K_{1} & 0 & J_{3} & -J_{2} \\
-K_{2} & -J_{3} & 0 & J_{1} \\
-K_{3} & J_{2} & -J_{1} & 0
\end{pmatrix}
\end{align}$$
那么Lorentz algebra的结构常数也可以写为：
$$\boxed{[\mathcal{J}^{\mu \nu},\mathcal{J}^{\rho \sigma}]=i(g^{\mu \sigma}\mathcal{J}^{\nu \rho}+ g^{\nu \rho}\mathcal{J}^{\mu \sigma}-g^{\mu \rho}\mathcal{J}^{\nu \sigma}-g^{\nu \sigma}\mathcal{J}^{\mu \rho})}$$
可以证明：
$$\begin{align}
\boxed{(\mathcal{J}^{\mu \nu})^{\alpha}{}_{\beta}=i(g^{\mu \alpha}\delta^{\nu}{}_{\beta}-g^{\mu \beta}\delta^{\nu}{}_{\alpha})}
\end{align}$$
于是李群中元素可以写为：
$$\exp\left( - \frac{i_{}}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right)$$
其中，$\omega_{\mu \nu}$为参数，满足$\omega_{\mu \nu}=-\omega_{\nu \mu}$。其中$\frac{1}{2}$只是为了去重复。

# 2. Lorentz群的表示

给定一个Lorentz变换$x^{'\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}$。对于一个标量场$\phi(x)$，我们通常有：
$$\begin{align}
 & \phi_{}^{'}(x^{'})=\phi_{}(x) \\
\implies & \phi^{'}_{}(x^{'})= \phi_{}(\Lambda ^{-1}x^{'})
\end{align}$$
或者可以写成$\phi^{'}_{}(x)=\phi_{}(\Lambda ^{-1}x)$。通过将所有变化吸收进场的functional dependence本身。

对于一个矢量场，假设$\phi_{a}(x)$是矢量场的component，那么不同component会混合。我们一般有：
$$\phi_{a}^{'}(x)=M_{ab}(\Lambda)\phi_{b}(\Lambda ^{-1}x)$$
考虑两次Lorentz变换$x\rightarrow x^{'}=\Lambda_{1}x\rightarrow x^{''}=\Lambda_{2}\Lambda_{1}x$。我们有：
$$\begin{align}
\phi^{''}_{a}(x) & =M_{ab}(\Lambda_{2})\phi^{'}_{b}(\Lambda_{2} ^{-1}x) \\
 & = M_{ab}(\Lambda_{2})M_{bc}(\Lambda_{1})\phi_{c}^{}(\Lambda_{1}^{-1}\Lambda_{2}^{-1}x) \\
 & = M_{ab}(\Lambda_{2})M_{bc}(\Lambda_{1})\phi_{c}((\Lambda_{2}\Lambda_{1})^{-1}x) \end{align}$$
 另一方面，$\phi_{a}^{''}(x)=M_{ac}(\Lambda_{2}\Lambda_{1})\phi_{c}((\Lambda_{2}\Lambda_{1})^{-1}x)$。所以：
 $$M_{ac}(\Lambda_{2}\Lambda_{1})=M_{ab}(\Lambda_{2})M_{bc}(\Lambda_{1})$$
这构成Lorentz群的一个表示。

