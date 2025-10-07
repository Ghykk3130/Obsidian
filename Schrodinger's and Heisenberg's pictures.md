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
$$X^{H}(t,t_{0})=\mathscr{U}^{^{\dagger}}(t,t_{0})X^{S}\mathscr{U}(t,t_{0})$$



