# 1. Schrodinger's picture

我们先考虑接受Shrodinger绘景。即：
- 任何系统的态遵循$\mathscr{U}(t,t_{0})$演化。
- 任何可观测量，如果它量子化之前不含时间，那么量子化之后也不含时间，不随时间演化。

在Schrodinger绘景中，任何可观测量的特征矢构成Hilbert空间的基。我们认为时间演化是一个主动变换。即：
- 作为基的可观测量特征矢不动
- 系统的态对应的矢量实体在随时间变动，从而引起它的表示的变化。
## Remark
可观测量特征矢不动是一个自然的假设。由此可以推导可观测量不随时间变化。考虑可观测量的谱分解，则因为每个投影算子都是特征矢张量积做出来的，它们不会变化。你可能会问，特征值有可能变化吗？但其实上面假设已经隐含了特征值不变。因为我们得到特征矢量的方式就是固定一个特征值，看它的特征子空间。上面我们假设特征矢不变，也就是说fix一个特征值，找它的特征矢，都是不变的。前提是特征值已经fix了。
# 2. Heisenberg's picture

在Schrodinger绘景中，系统的Hilbert空间中的矢量在随着时间变化。令$\ket{\alpha}$为$t_{0}$时刻的一个物理矢量。那么在$t$时刻我们可以观测可观测量$X$，得到：
$$\bra{\alpha} \mathscr{U}^{^{\dagger}}(t,t_{0})X\mathscr{U}(t,t_{0})\ket{\alpha} $$
物理上我们只能知道在$t$时刻，用$t_{0}$时刻处于$\ket{\alpha}$的态观测$X$得到的概率分布。如果我们要建立一套别的绘景，必须保证在新绘景下，在$t$时刻，用$t_{0}$时刻处于$\ket{\alpha}$的态观测$X$得到的概率分布和Schrodinger绘景一样。

因为只有矩阵元是我们真正物理上能观测到的，所以只要保证了矩阵元在绘景变换下不变，我们的新绘景就是一套与Schrodinger绘景等价的，同样描述物理世界的绘景。

因为我们知道整个空间在Schrodinger绘景下不断变换，要保证矩阵元不变的话，可以要求在另一套绘景下空间没有发生改变。而算子实体（算子是一种$(1,1)$型张量）在不断变化。显然必须要有：
$$X^{(H)}(t,t_{0})=\mathscr{U}^{^{\dagger}}(t,t_{0})X^{(S)}\mathscr{U}(t,t_{0})$$

>[!Definition 1]
>Let $X^{S}$ be an observable in Schrodinger's picture. Let $\mathscr{U}(t,t_{0})$ be the time evolution operator calculated Using $H^{(S)}$. Then define:
>$$X^{(H)}=\mathscr{U}^{\dagger}X^{(S)}\mathscr{U}$$

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


在Heisenberg绘景中，我们认为时间演化是被动变换，即：
- 系统的态的矢量实体没有变化
- 作为基的可观测量特征矢随时间演化，造成系统的态的表示也在不断变化。

注意这些基的变换方式是协变的。因为：
$$X^{(H)}=\mathscr{U}^{\dagger}X^{(S)}\mathscr{U}= \sum x\mathscr{U}^{\dagger} \ket{x,0} \bra{x,0}\mathscr{U} $$
所以必须认为：
$$\ket{x,t} =\mathscr{U}^{\dagger}\ket{x,0} $$
即变换方式逆着主动变换。因为主动变换和矢量实体表示的变换一样，又因为矢量实体表示的变换是逆变，所以主动变换是逆变。所以这些基是协变的。



