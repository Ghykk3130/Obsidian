# 1. Schrodinger's picture

我们先考虑接受Shrodinger绘景。即：
- 任何物理上可能的态遵循$\mathscr{U}(t,t_{0})$演化。
- 任何可观测量，如果它量子化之前不含时间，那么量子化之后也不含时间，不随时间演化。

我们必须深刻理解什么事物理上可能的态。我们称所有算子Hamiltonian的domain中的态为物理上可能的态。或者说按照某个可观测量的谱展开后平方可积的态也是物理上可能的态。

## Ex: 
$\ket{x}$不是物理上可能的态。

首先将$\ket{x}$按算子$x$的谱展开后不属于$L^{2}$。因为：
$$\bra{x^{'}} x\rangle=\delta(x^{'}-x),\ \delta(x^{'}-x)\not\in L^{2}$$
而且，$\ket{x}$也不属于$H$的domain。这是因为在坐标表象下，$\ket{x} \rightsquigarrow \delta(x^{'}-x)$，$H \rightsquigarrow -\frac{\hbar^{2}}{2m}\nabla^{'2}+V(x^{'})$。而显然$\delta$不在$\nabla^{2}$的domain当中。

# 2. Heisenberg's picture

在Schrodinger绘景中，系统的Hilbert空间中的矢量在随着时间变化。令$\ket{\alpha}$为$t_{0}$时刻的一个物理矢量。那么在$t$时刻我们可以观测可观测量$X$，得到：
$$\bra{\alpha} \mathscr{U}^{^{\dagger}}(t,t_{0})X\mathscr{U}(t,t_{0})\ket{\alpha} $$
物理上我们只能知道在$t$时刻，用$t_{0}$时刻处于$\ket{\alpha}$的态观测$X$得到的概率分布。如果我们要建立一套别的绘景，必须保证在新绘景下，在$t$时刻，用$t_{0}$时刻处于$\ket{\alpha}$的态观测$X$得到的概率分布和Schrodinger绘景一样。

因为只有矩阵元是我们真正物理上能观测到的，所以只要保证了矩阵元在绘景变换下不变，我们的新绘景就是一套与Schrodinger绘景等价的，同样描述物理世界的绘景。

因为我们知道整个空间在Schrodinger绘景下不断变换，要保证矩阵元不变的话，可以要求在另一套绘景下空间没有发生改变。而算子实体（算子是一种$(1,1)$型张量）在不断变化。显然必须要有：
$$X^{(H)}(t,t_{0})=\mathscr{U}^{^{\dagger}}(t,t_{0})X^{(S)}\mathscr{U}(t,t_{0})$$

>[!Definition 1]
>Let $X^{S}$ be an observable in Schrodinger's picture. Let $\mathscr{U}(t,t_{0})$ be the time evolution operator calculated Using $H^{(S)}$. Then define:
>$$X^{(H)}=\mathscr{U}^{\dagger}X^S\mathscr{U}$$

在$H^{(S)}$不存在time dependence时，显然time evolution operator只取决于time interval长度，不取决于起始时间。于是有时我们直接写$\mathscr{U}(t),X^{(H)}(t)$
## Ex:
对于Hamiltonian，若$H^{(S)}$不存在time dependence，那么$\mathscr{U}(t,t_{0})=\exp\left( - \frac{i}{\hbar}H^{(S)}(t-t_{0}) \right)$。那么：
$$H^{(H)}=\mathscr{U}^{^{\dagger}}H^{(S)}\mathscr{U}=H^{(S)}$$
这是因为$\mathscr{U}$显然和$H^{(S)}$可交换，移到前面和$\mathscr{U}^{^{\dagger}}$相乘消掉了。

然而还有另外一种计算Heisenberg绘景下的Hamiltonian的方法。即直接将Heisinberg绘景下的可观测量带入到$H^{(S)}$中计算。我们尚未证明，这两种方法计算出来的Hamiltonian是一样的。我们通过下一例来说明：

## Ex:
我们设$H^{(S)}=H^{(S)}(x,p)$是$x,p$的多项式。这个假设是合理的，因为很多物理系统符合这个假设。例如说谐振子。那么我们可以展开：
$$\begin{align}
H^{(S)}(x^{(H)},p^{(H)}) & =\sum_{k,l}a_{k,l}(x^{(H)})^k (p^{(H)})^{l} \\
 & = \sum a_{k,l} \left(\mathscr{U}^{\dagger }x^{(S)}\mathscr{U}\right)^k\left(\mathscr{U}^{\dagger }p^{(S)}\mathscr{U}\right)^l \\
 & = \sum a_{k,l} \mathscr{U}^{\dagger }(x^{(S)})^k\mathscr{U}\mathscr{U}^{\dagger }(p^{(S)})^l\mathscr{U} \\
 & = \mathscr{U}^{\dagger}\sum a_{k,l}(x^{(S)})^k(p^{S})^l\mathscr{U} \\
 & = \mathscr{U}^{\dagger}H^{S}\mathscr{U} \\
 & = H^{H}
\end{align}$$
所以我们有：

>[!Proposition 1]
>Let $H^{(H)}=\mathscr{U}^{\dagger}H^{(S)}\mathscr{U}$. Then:
>$$H^{(H)}(t)=H^{(S)}(x^{(H)}(t),p^{(H)}(t))$$



