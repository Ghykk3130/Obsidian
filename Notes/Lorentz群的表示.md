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

于是$X_{}^{\mu \nu}$是一个反对称阵。有六个自由分量，取为李代数的基底，称为生成元。

每个李群中元素$e^{tX}$都可以写成$e^{-it(iX)}$。于是我们可以将找到的六个反对称基底乘上$i$，并相应地在变换系数前面乘上$-i$。不妨取：
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
>[!Quote]
>李代数是实数域上的代数，对于Lie bracket封闭。那么为什么Lie bracket的结果却不是生成元的实系数的线性组合？这是因为我们前面已经给生成元乘上了虚数。令没有乘上虚数的生成元为$J^{'}_{i},K^{'}_{i}$。那么这些对易关系相应地变化。例如：
>$$[J_{i},J_{j}]=i\epsilon_{ijk}J_{k}\implies[iJ^{'}_{i},iJ^{'}_{j}]=i\epsilon_{ijk}iJ^{'}_{k}\implies[J^{'}_{i},J^{'}_{j}]=\epsilon_{ijk}J^{'}_{k}$$
>所以现在李代数并不对于Lie bracket封闭。而是对于$\frac{1}{i}[\cdot,\cdot]$封闭。

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
\boxed{(\mathcal{J}^{\mu \nu})^{\alpha}{}_{\beta}=i(g^{\mu \alpha}\delta^{\nu}{}_{\beta}-g^{\nu \alpha}\delta^{\mu}{}_{\beta})}
\end{align}$$
于是李群中元素可以写为：
$$\exp\left( - \frac{i_{}}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right)$$
其中，$\omega_{\mu \nu}$为参数，满足$\omega_{\mu \nu}=-\omega_{\nu \mu}$。其中$\frac{1}{2}$只是为了去重复。

# 2. Lorentz群的矢量表示

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
# 3. Lorentz群的旋量表示

假设存在一列矩阵$\gamma^{\mu}\in\text{M}(n)$，满足：
$$\begin{align}
\boxed{\{ \gamma^{\mu},\gamma^{\nu} \}= 2 g^{\mu \nu}\mathbb{1}}
\end{align}$$
称为Dirac矩阵。我们再定义：
$$\boxed{S^{\mu \nu}= \frac{i}{4}[\gamma^{\mu},\gamma^{\nu}]}$$
可以证明：
$$[S^{\mu \nu},S^{\rho \sigma}]=i(g^{\mu \sigma}S^{\nu \rho}+g^{\nu \rho}S^{\mu \sigma}-g^{\mu \rho}S^{\nu \sigma}-g^{\nu \sigma}S^{\mu \rho})$$
于是$\{ S^{\mu \nu} \}$构成Lorentz代数的表示。我们用$\{ S^{\mu \nu} \}$生成一个表示，称为Lorentz群的旋量表示。
## Ex:

若$j=1,2,3$，旋量表示空间维数为$2$，可以取：
$$\begin{align}
\gamma^{j}=i\sigma^{j}
\end{align}$$
满足反对易关系$\{ \gamma^{i},\gamma^{j} \}=2g^{ij}$。这是一个Lorentz代数的表示。


>[!Quote]
>实际上，每个李代数生成的表示只是和单位元简单连通的李群的子群的表示，而不是整个李群的表示。因为这里我们局限在$\text{SO}^{+}(1,3)$，即包含单位元，由旋转，boost生成的Lorentz群分支。这个分支是简单连通的，不含$P,T$，所以$S^{\mu \nu}$可以生成这个分支的表示。

显然，$S^{\mu \nu}$是反对称的。若考虑一个Lorentz变换：
$$\Lambda=\exp\left( - \frac{i}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right)$$
它的旋量表示就是：
$$D(\Lambda)=\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right)$$

>[!Quote]
>这里，$\omega_{\mu \nu}$必须是反对称的。假设这个表示是$N$维空间上的，而我们知道$S^{\mu \nu}=-S^{\nu \mu}$。所以Dirac矩阵最多构造出对角线以上的$(N-1)!$那么多个独立基底。我们可以将求和拓展到对角线另一侧，并自然地要求$\omega_{\mu \nu}=-\omega_{\nu \mu}$。

>[!Success] Proposition 3.1
>$$[\gamma^{\mu},S^{\rho \sigma}]=(\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}\gamma^{\nu}$$
## Proof.

我们考虑对易子公式：
$$[AB,C]=ABC-CAB=ABC+ACB-ACB-CAB=A\{ B,C \}-\{ A,C \}B$$
我们计算：
$$\begin{align}
[\gamma^{\mu},S^{\rho \sigma}] & = \frac{i}{4}[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}-\gamma^{\sigma}\gamma^{\rho}] \\
 & = \frac{i}{4}[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}-(2g^{\sigma \rho}-\gamma^{\rho}\gamma^{\sigma})] \\
 & = \frac{i}{2}[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}]- \frac{i}{2}[\gamma^{\mu},g^{\sigma \rho}] \\
 & = \frac{i}{2}[\gamma^{\mu},\gamma^{\rho}\gamma^{\sigma}] \\
 & = - \frac{i}{2}(\gamma^{\rho}\{ \gamma^{\sigma},\gamma^{\mu} \}-\{ \gamma^{\rho},\gamma^{\mu} \}\gamma^{\sigma}) \\
 & = i(\gamma^{\sigma}g^{\rho \mu}-\gamma^{\rho}g^{\sigma \mu}) \\
 & = i(g^{\rho \mu}\delta^{\sigma}{}_{\nu}-g^{\sigma \mu}\delta^{\rho}{}_{\nu})\gamma^{\nu} \\
 & = (\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu} \gamma^{\nu}
\end{align}$$
>[!Right]
>$\blacksquare$

我们可以证明Dirac矩阵在李群旋量表示的共轭下按照四矢量变换。

>[!Success] Proposition 3.2
>Given $D(\Lambda)=\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right)$, we have:
>$$D^{-1}(\Lambda)\gamma^{\mu}D(\Lambda)=\Lambda^{\mu}{}_{\nu}\gamma^{\nu}$$
## Proof.

令$Y= - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu}$，$X=- \frac{i}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu}$。我们计算：
$$\begin{align}
e^{-Y}\gamma^{\mu}e^{Y} & = \gamma^{\mu}+[\gamma^{\mu},Y]+ \frac{1}{2!}[[\gamma^{\mu},Y],Y]+\dots
\end{align}$$
容易发现：
$$\begin{align}
[\gamma^{\mu},Y] & = - \frac{i}{2}\omega_{\rho \sigma}[\gamma^{\mu},S^{\rho \sigma}] \\
 & = - \frac{i}{2}\omega_{\rho \sigma}(\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}\gamma^{\nu} \\
 & = X^{\mu}{}_{\nu}\gamma^{\nu}
\end{align}$$
$$\begin{align}
[[\gamma^{\mu},Y],Y ] & = \left[ - \frac{i}{2}\omega_{\rho \sigma}(\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}\gamma^{\nu},Y \right] \\
 & = - \frac{i}{2}\omega_{\rho \sigma}(\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}[\gamma^{\nu},Y] \\
 & = \left( - \frac{i}{2} \right)^{2} \omega_{\rho \sigma} (\mathcal{J}^{\rho \sigma})^{\mu}{}_{\nu}\omega_{\alpha \beta}(\mathcal{J}^{\alpha \beta})^{\nu}{}_{\lambda}\gamma^{\lambda} \\
 & = \left( - \frac{i}{2} \right)^{2}((\omega_{\rho \sigma}\mathcal{J}^{\rho \sigma})^{2})^{\mu}{}_{\lambda}\gamma^{\lambda} \\
 & = (X^{2})^{\mu}{}_{\lambda}\gamma^{\lambda}
\end{align}$$
所以：
$$\begin{align}
e^{-Y}\gamma^{\mu}e^{Y} & = (e^{X})^{\mu}{}_{\nu}\gamma^{\nu}= \Lambda^{\mu}{}_{\nu}\gamma^{\nu}
\end{align}$$
>[!Right]
>$\blacksquare$
## Ex:

容易证明：
$$\begin{align}
D^{-1}(\Lambda)S^{\mu \nu}D(\Lambda) & = \frac{i}{4}D^{-1}(\Lambda)[\gamma^{\mu},\gamma^{\nu}]D(\Lambda) \\
 & = \frac{i}{4}(D^{-1}\gamma^{\mu}DD^{-1}\gamma^{\nu} D-D^{-1} \gamma^{\nu}D D^{-1}\gamma^{\mu}D) \\
 & = \frac{i}{4}(\Lambda^{\mu}{}_{\alpha}\gamma^{\alpha}\Lambda^{\nu}{}_{\beta}\gamma^{\beta}- \Lambda^{\nu}{}_{\beta}\gamma^{\beta}\Lambda^{\mu}{}_{\alpha}\gamma^{\alpha}) \\
 & = \Lambda^{\mu}{}_{\alpha}\Lambda^{\nu}{}_{\beta}S^{\alpha \beta}
\end{align}$$
