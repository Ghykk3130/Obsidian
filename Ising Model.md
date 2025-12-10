# Table of contents
## 1. 无耦合的自旋系统

1.1 [[Ising Model#^d2d6c4|无耦合的自旋系统]]
## 2. 双电子体系

2.1 [[Ising Model#^ac0a90|双电子体系]]
## 3. Ising model

3.1 [[Ising Model#^905a3e|Ising model]]
3.2 [[Ising Model#^989fdc|Mean-field approximation]]
## 4. Ising model的模拟

4.1 [[Ising Model#^660f47|Markov process]]
4.2 [[Ising Model#^991ea4|Metropolis algorithm]]

# 1. 无耦合的自旋系统

^d2d6c4

考虑一个有$N$个spin-1/2粒子的系统。自旋之间无相互耦合，粒子的运动足够局域（本来自旋应该产生一个dipole的磁场，和别的自旋相互作用的。）考虑$z$方向外场$\vec{B}$。

则系统Hamiltonian为$H=\sum_{i} (\frac{p_{i}^{2}}{2m} -\mu_{iz}{B_{}})$。系统波函数本征态为：
$$\psi=\psi_{1}(\vec{r}_{1})\dots \psi_{N}(\vec{r}_{N})\chi_{1}\dots \chi_{N}$$
我们声称，不需要作对称化或者反对称化。这是因为粒子的运动足够局域。$\psi_{i}(\vec{r}_{i}),\psi_{j}(\vec{r}_{j})$之间几乎没有重叠，相乘为零。

因为粒子运动足够局域，可以认为动量足够小。进而：
$$H=\sum_{i} - \mu_{iz}B_{}=\sum_{i}- \mu B_{}\sigma_{iz}$$
其中，$\mu$为dipole大小，$\sigma_{iz}$作用在本征态上可以得到$\pm 1$。所以：
$$\begin{align}
Z & = \sum_{\text{all states}}\exp\left( \sum_{i}\beta\mu B_{}\sigma_{iz} \right) \\
 & = \left( \sum_{\text{all states of 1}}\exp(\mu B_{}\sigma_{iz}) \right)^N \\
 & = (\exp(\mu \beta B)+\exp(-\mu \beta B))^N
\end{align}$$
我们abuse了notaion一下，用$S_{i}^z$表示Pauli matrix $\sigma_{iz}$的两个可能本征值$\pm 1$。

可以计算整个体系的total dipole:
$$\begin{align}
\langle m \rangle & = \frac{\sum_{\{ S_{i}^z \}}\exp\left( \sum_{i}\beta\mu BS_{i}^z  \right)\sum_{i}\mu S_{i}^z}{\sum_{\{ S_{i}^z \}}\exp\left( \sum_{i}\beta\mu BS_{i}^z \right) } \\
 & = \frac{1}{Z\beta} \frac{\partial}{\partial B}Z \\
 & = \frac{1}{\beta} \frac{\partial}{\partial B}\ln Z \\
 & = N\mu \tanh\left(  \beta \mu B \right)
\end{align}$$
令体系体积为$V$，则magnetization为：
$$M= \frac{\langle m \rangle}{V}= \frac{N}{V}\mu \tanh(\beta \mu B)=n\mu \tanh(\beta \mu B)$$

高温弱场下，$\tanh(\beta \mu B)\approx \beta \mu B$。则：
$$M\approx N\beta \mu^{2}B \propto B$$
低温强场下，$\tanh(\beta \mu B)\approx 1$。则：
$$M \approx n\mu$$
称为paramagnetic。

# 2. 双电子体系

^ac0a90

考虑相互耦合的两个电子。忽略自旋耦合，系统Hamiltonian为：
$$H=\frac{p_{1}^{2}}{2m}+ \frac{p_{2}^{2}}{2m}+\frac{1}{4\pi\epsilon_{0}} \frac{|e|^{2}}{|\vec{r}_{1}-\vec{r}_{2}|}$$
解得系统空间本征态$\ket{\psi}$。这个态一定是自由单电子波函数张量积混合出来的。这是因为自由单电子波函数构成单电子Hilbert空间中的完备基。两个单电子的Hilbert空间的张量积空间就是双电子体系的Hilbert空间。它的基一定是单电子波函数的基的张量积。

那么$\ket{\psi}$一定是$\{ \ket{\psi_{1}}\otimes \ket{\psi_{2}} \}$这些基矢的线性叠加。那么可以对$\ket{\psi}$作对称化或者反对称化。

双电子体系还具有两个自由电子自旋空间张量积弄出来的双电子自旋空间。这个空间的基是$\{ \ket{\chi_{1}}\otimes \ket{\chi_{2}} \}$。

那么双电子体系的Hilbert空间的任意一个基矢一定是$\ket{\psi_{1}}\otimes \ket{\psi_{2}}\otimes \ket{\chi_{1}}\otimes \ket{\chi_{2}}$。

>[!Note] Proposition 1
>The total ket cannot be an entangles state of the spatial kets and the spin kets. 
## Proof.
考虑双电子空间矢量$\ket{\psi}$，双电子自旋矢量$\ket{\chi}$。其中，$\ket{\psi},\ket{\chi}$又各自是单电子空间张量积中的态。

系统允许的total ket必定是一个antisymmetric的态。

to be continued ...



若双电子自旋态为singlet，则空间函数应该是symmetric。即：
$$\ket{\psi} = \frac{1}{\sqrt{ 2 }}(\ket{\psi_{1}} \otimes \ket{\psi_{2}} +\ket{\psi_{2}} \otimes \ket{\psi_{1}} )$$
可以计算势能平均。令势能为$V(\vec{r}_{1},\vec{r}_{2})$，则：
$$\begin{align}
\langle V \rangle & = \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2}(\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})+\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2}))V(\vec{r}_{1},\vec{r}_{2})(\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2})+\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2})) \\
 & = \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2} \psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2}) \\
 & + \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2}\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2}) \\
 & + \frac{1}{2} \int d^{3}r_{1}d^{3}r_{2}\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2}) \\
 & + \frac{1}{2} \int d^{3}r_{1}d^{3}r_{2}\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2}) \\
\end{align}$$
注意到第一项和第四项一样，第二项和第三项一样。所以有：
$$\begin{align}
\langle V \rangle & = \int d^{3}r_{1}d^{3}r_{2} \psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2})+\int d^{3}r_{1}d^{3}r_{2}\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2})
\end{align}$$
Set:
$$\left\{\begin{align}
 & K=  \int d^{3}r_{1}d^{3}r_{2} \psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2})\\
 & J=\int d^{3}r_{1}d^{3}r_{2}\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2})
\end{align}\right.$$
则：
$$\langle V \rangle =K+J$$

若双电子态为triplet，则空间函数应该是antisymmetric。即：
$$\ket{\psi} = \frac{1}{\sqrt{ 2 }}(\ket{\psi_{1}} \otimes \ket{\psi_{2}} -\ket{\psi_{2}} \otimes \ket{\psi_{1}} )$$
则：
$$\begin{align}
\langle V \rangle & = \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2}(\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})-\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2}))V(\vec{r}_{1},\vec{r}_{2})(\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2})-\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2})) \\
 & = \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2} \psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2}) \\
 & - \frac{1}{2}\int d^{3}r_{1}d^{3}r_{2}\psi_{1}^{*}(\vec{r}_{1})\psi_{2}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2}) \\
 & - \frac{1}{2} \int d^{3}r_{1}d^{3}r_{2}\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2})V\psi_{1}(\vec{r}_{1})\psi_{2}(\vec{r}_{2}) \\
 & + \frac{1}{2} \int d^{3}r_{1}d^{3}r_{2}\psi_{2}^{*}(\vec{r}_{1})\psi_{1}^{*}(\vec{r}_{2})V\psi_{2}(\vec{r}_{1})\psi_{1}(\vec{r}_{2}) \\ \\
 & =K-J
\end{align}$$
## Remark
- 那么假定两个电子被定死在空间中，几乎没有动能，则自旋态会影响体系能量！而且这种影响是通过交换作用，而不是通过在Hamiltonina中直接出现自旋coupling，来改变体系能量的！
- 把singlet看做是两个自旋态“anti-aligned”，（这很符合直觉，因为singlet态总自旋为零），而把triplet看作是两个自旋态“aligned”。则直觉上来讲，因为电子是fermion，aligned时喜欢远离对方，造成平均库伦势更小。anti-aligned时可以离得更近一些，使得体系具有更低能量。

# 3. Ising model
## 3.1 Ising model

^905a3e

考虑一堆电子。设这些电子只与临近电子相互作用。其作用方式如同上面双电子体系一般。

任取一对临近电子$i,j$，定义triplet自旋态和singlet自旋态能量相加的一半为零。那么triplet，singlet自旋态能量分别为$\pm J$。我们假设只有spin的z component在发生exchange interaction。电子能量为：
$$-JS^z_{i}S_{j}^z,\text{ where }S_{i}^z,S_{j}^z=\pm{1}$$
那么系统Hamiltonian写为：
$$H=-J\sum_{\langle i,j\rangle}S_{i}^zS_{j}^z$$
定义$J>0$的固体为ferromagnetic。$J<0$的固体为antiferromagnetic。这是因为$J>0$时，aligned具有更低能量，favored。$J<0$时，anti-aligned具有更低能量，favored。ferromagnetic时，存在净磁化。anti-ferromagnetic时，不存在净磁化。

加上$z$方向磁场后，得到：
$$H=- \mu B \sum_{i}S_{i}^z-J\sum_{\langle i,j\rangle}S_{i}^zS_{j}^z$$
## Remark
在晶体中，磁性来源于valence electron的自旋。首先，内层电子总角动量为零，没有净角动量来相互耦合。核自旋对应的磁矩很小，而且因为没有spatial part，不参与交换作用，所以不计入Ising model。所以Ising model中的自旋都是价电子自旋。

## 3.2 Mean-field approximation

^989fdc

考虑：
$$\begin{align}
H & = -\mu B\sum_{i }S_{i}^z-J\sum_{i}S_{i}^zn_{D}\langle S_{}^z \rangle \\
 & = -\mu \sum_{i}(B+n_{D}J\langle S_{}^z\rangle)S_{i}^z
\end{align}$$
其中，$n_{D}$为邻近离子数。

于是可以将$B+n_{D}J\langle S_{}^z\rangle$视为一个等效的平均场。于是现在问题和无耦合自旋系统一样。于是显然：
$$M=n\mu \tanh(\beta \mu (B+n_{D}J\langle S^z\rangle))$$
我们可以反过来求解$\langle S^z\rangle$。我们知道：
$$M=n\mu \langle S^z\rangle=n\mu  \langle S^z\rangle$$
于是必有：
$$\langle S^z\rangle=\tanh(\beta \mu (B+n_{D}J\langle S^z\rangle))$$
如果要考虑自发磁化，则令外场$B=0$。则需要解：
$$\langle S^z \rangle=\tanh(n_{D}\beta J\langle S^z\rangle)$$

通过画图容易看出，若$\beta Jn_{D}<1$，则只有$\langle S^z\rangle=0$一个解。
![[Drawing 2025-12-02 22.50.21.excalidraw|center]]

若$\beta Jn_{D}>1$，则有三个解。容易证明$\langle S^z\rangle=0$的解自由能为极大，不能稳定平衡。故取非零解。这是从paramagnetic到ferromagnetic的phase transition。其中相变温度称为Curie temperature。


对于anti-ferromagnetic物体，$J<0$，则无论如何$\langle \sigma \rangle$都为零。任何温度下都没有自发磁化。

对于ferromagnetic物体，$J>0$经历phase transition。在温度从高到低，$\langle \sigma \rangle$的值从$0$变为$\pm \sigma_{0}$。magnetization中$0$变为$\pm n\mu \sigma_{0}$。ferromagnetic固体经历phase transition，从自发磁化为零的paramagnetic转变为非零的magnetization。

## 3.3 Critical exponent



# 4. Ising model的模拟
## 4.1 Markov process

^660f47

考虑一个态空间$\{ \mu \}$，可以定义转移概率$P:\{ \mu \}^{2}\rightarrow \mathbb{R}$。它将两个态映成它们两个之间转移的概率。例如$P(\mu\rightarrow \nu)$表示从$\mu$转移到$\nu$的概率。

需要注意，$P(\mu\rightarrow \nu)\neq P(\nu\rightarrow \mu)$ in general。

>[!Note] Postulate 1
>Must require that:
>- $$\sum_{\nu}P(\mu\rightarrow \nu)=1,\forall \mu$$
>- $$P(\mu\rightarrow \nu)>0,\forall \mu,\nu$$


>[!Note] Definition 1
>We say that $P$ is ergodic if given $\nu$, there always exists $\{ \mu_{i} \}_{1}^N\subset \{ \mu \}$ finite, with $\mu_{N}=\nu$, such that $P(\mu_{i-1}\rightarrow \mu_{i})\neq 0,\forall i$ for all $\mu_{1}$.
## Remark
这即是说，要到达态空间某一点，可以从任意一点出发，经过有限步骤流到这一点。即态空间是irreducible的。

>[!Note] Definition 2
>Define the transition matrix $P_{\nu \mu}=P(\mu\rightarrow \nu)$

>[!Note] Proposition 2
>$P$ ergodic $\implies\ (P_{\nu \mu})$ irreducible.
## Proof.
若$(P_{\nu \mu})$是分块对角化的。那么在一个块对应的子空间里出发的态就永远不可能到达别的块对应的子空间，自然不ergodic。
>[!Right]
>$\blacksquare$
## Remark
当然，这不是说$P$不可分块对角化。只是在这个基下不是分块对角的就行了。


若我们事先有某种分布$p_{\mu}$，经过transition之后，这个分布被变换为一个新的分布，即：
$$p^{'}_{\mu}=\sum_{\nu}p_{\nu}P_{\mu \nu}$$
也就是说，我们问，在经过一次流动之后，出现在态$\mu$的概率是多少？显然是出现在态$\nu$的概率乘上从$\nu$一次流到$\mu$的概率。

那么若经过一次流动之后出现在态$\mu$的概率不变，我们认为系统已经达到平衡。即：
$$p_{\mu}=p^{'}_{\mu}=\sum_{\nu}p_{\nu}P_{\mu \nu}$$
>[!Note] Proposition 3
>The condition that the system reaches simple equilibrium is that:
>$$p_{\mu}=\sum_{\nu}p_{\nu}P_{\mu \nu}$$

^6328f7

注意到：
$$\begin{align}
 & p_{\mu}=\sum_{\nu}p_{\nu}P_{\mu \nu} \\
\implies & \sum_{\nu}p_{\mu}P_{\nu \mu}=\sum_{\nu}p_{\nu}P_{\mu \nu}
\end{align}$$
所以满足[[Ising Model#^6328f7|proposition 4.1.3]]的充分条件为：
$$p_{\mu}P_{\nu \mu}=p_{\nu}P_{\mu \nu}$$
>[!Note] Definition 3
>If the system satisfies that $p_{\mu}P_{\nu \mu}=p_{\nu}P_{\mu \nu},\forall \mu,\nu$, we say that the system is in detailed balancing.

这即是说，$p$是$P$特征值为$1$的特征向量。

>[!Note] Proposition 4
>Let $\lambda$ be an eigenvalue of $P$. Then $|\lambda|<1$.
## Proof.
令：
$$Pp=\lambda p$$
取$p_{k}$ such that $|p_{k}|\geq |p_{j}|,\forall j$。于是：
$$\begin{align}
 & \sum_{j} P_{kj}p_{j}=\lambda p_{k} \\
\implies & |\lambda p_{k} |\leq \sum_{j}|P_{kj}p_{j} |\leq \sum_{j}|P_{kj} ||p_{k}| \\
\implies & |\lambda|\leq \sum_{j}P_{kj}=1
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 5
>$P$ is diagonalizable if detailed balancing is satisfied.
## Proof.
令$D_{ij}= \frac{1}{\sqrt{ p_{j} }}\delta_{ij}$。令$S=DPD^{-1}$。STS：$S$ is symmetric。

我们有：
$$\begin{align}
S_{il} & = \sum_{j,k}\delta_{ij} \frac{1}{\sqrt{ p _{i}}}P_{jk} \delta_{kl} \sqrt{ p_{l}  } \\
 & = \sqrt{ \frac{p_{l}}{p_{i}} }P_{il} \\
 & = \frac{P_{il}p_{l}}{\sqrt{ p_{i}p_{l} }}
\end{align}$$
相似地：
$$S_{li}= \frac{P_{li}p_{i}}{\sqrt{ p_{i}p_{l} }}$$
由于detailed balancing，我们有：
$$S=S^t$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 6
>Let $P$ be ergodic and satisfies detailed balancing for some distribution.
>$$\lim_{ N \to \infty } P^Np\in \text{eigensubspace with eigenvalue }1,\forall p$$
## Proof.
考虑$P$的谱分解：
$$P=\sum_{i}\lambda_{i} \ket{i} \bra{i} $$
则在求$P^N$时，只有特征值为$1$的投影算子会dominate。于是在$N\rightarrow \infty$时，$P^Np$就在特征子空间$1$中。
>[!Right]
>$\blacksquare$

但是，我们还没有证明特征值为$1$的特征子空间是非简并的。我们作如下命题：

>[!Note] Proposition 7
>Let $P$ be ergodic, then its eigensubspace with eigenvalue $1$ is non-degenerate.
## Proof.
考虑两个特征值为$1$的特征矢：
$$p=Pp,q=Pq$$
令：
$$w=p-cq,\text{ where }c=min(\{  \frac{p_{i}}{q_{i}} \})$$
于是：
$$w_{i}\geq 0,\forall i$$
那我们显然有：
$$w=Pw$$显然$\exists k \text{ s.t. }w_{k}=0$。那么对于任意$w_{j}$，一定存在一条路径$\{ \mu_{n}\}_{1}^N\text{ with }\mu_{1}=j,\mu_{N}=k$，such that
$$P_{\mu_{n+1},\mu_{n}}>0$$
那么现在我们有：
$$\begin{align}
 & 0=w_{k}=\sum_{i}P_{ki}w_{i} \\
\implies & w_{i}=0\text{ if }P_{ki}>0
\end{align}$$
因为$P_{k \mu_{N-1}}>0$，所以$w_{\mu_{N-1}}=0$。一直重复上述步骤，最终可以证到$w_{\mu_{1}}=w_{j}=0$。

所以$w=0$，所以$p=cq$。
>[!Right]
>$\blacksquare$

那么，只要存在某分布$p$，我们可以构造$P$，满足ergodicity，针对$p$的detailed balancing。一旦满足针对$p$的detailed balancing，容易看出$p$就一定在特征子空间$1$中。样一来，无论从任何初始分布开始，都一定可以到达特征子空间$1$。并且由于ergodicity，该特征子空间非简并，所以就一定会到达$p$。

## 4.2 Metropolis algorithm

^991ea4

我们想要模拟Boltzmann分布。注意到我们只需要选择$P$以满足：
- $\sum_{\nu}P_{\nu \mu}=1,\forall \mu$
- $P(\nu\rightarrow \mu)p_{\nu}=P(\mu\rightarrow \nu)p_{\mu},\forall \mu,\nu$
- $P$ ergodic
那么构造出来的动力系统就会使得我们从任意分布开始，最后得到Boltzmann分布。我们先不管ergodicity。

考虑如下的naive构造：
$$\text{Set }P(\nu\rightarrow \mu):= \frac{e^{-\beta E_{\mu}}}{Z}$$
这样既满足归一性，又满足detailed balancing。但是计算$Z=\sum_{\mu}e^{-\beta E_{\mu}}$是不方便的，如果$|\{ \mu \}|$很大的话。

注意到可以作如下构造：

>[!Note] Proposition 1
>Let $P(\mu\rightarrow \nu)=g(\mu\rightarrow \nu)A(\mu\rightarrow \nu)\ \forall \nu\neq \mu$ such that:
>- $$\sum_{\nu \text{ s.t. }g(\mu\rightarrow \mu)\neq 0}g(\mu\rightarrow \nu)=1,\ g(\mu\rightarrow \nu)\text{ all equal }\forall \mu,\nu,\mu\neq \nu$$
>- $$A(\mu\rightarrow \nu)= min\left( 1, \frac{p_{\nu}}{p_{\mu}} \right),\forall \nu\neq \mu$$ 
>
>Let $P(\mu\rightarrow \mu)=1-\sum_{\nu\neq \mu}P(\mu\rightarrow \nu)$
Then the normalization and detailed balancing conditions are satisfied.
## Proof.
显然$\sum_{\nu\neq \mu}P(\mu\rightarrow \nu)<1$。所以$P(\mu\rightarrow \mu)$是well-defined的。于是normalization condition自动满足。

考虑detailed balancing。我们注意到$P(\mu\rightarrow \mu)$自动满足detailed balancing：
$$P(\mu\rightarrow \mu)p_{\mu}=P(\mu\rightarrow \mu)p_{\mu}$$
若$\mu\neq \nu$，WLOG令$E_{\nu}>E_{\mu}$。于是：
$$\begin{align}
  P(\mu\rightarrow \nu)p_{\mu} & = g(\mu\rightarrow \nu) \frac{p_{\nu}}{p_{\mu}} p_{\mu}\\
 & = g(\mu\rightarrow \nu)e^{-\beta E_{\nu}}
\end{align}$$
还有：
$$\begin{align}
P(\nu\rightarrow \mu)p_{\nu} & = g(\nu\rightarrow \mu) \cdot 1 \cdot p_{\nu} \\
 & = g(\mu\rightarrow \nu)e^{-\beta E_{\nu}}
\end{align}$$
显然两者相等，满足detailed balancing。
>[!Right]
>$\blacksquare$

接下来构造Metropolis algorithm。令$\mu$为some arrangement of spins，$N$为spin的数量。则令：
$$g(\mu\rightarrow \nu)= \left\{\begin{align}
 & \frac{1}{N},\nu \text{ is obtained from }\mu \text{ with one spin flip} \\
 & 0,\text{otherwise}
\end{align}\right.$$
则：
$$P(\mu\rightarrow \nu)= \left\{\begin{align}
 & \frac{1}{N}min(1, e^{-\beta(E_{\nu}-E_{\mu})}),\nu \text{ is obtained from }\mu \text{ with one spin flip} \\
 & 0,\text{otherwise}
\end{align}\right.$$
这显然是ergodic的。因为任何以种arrangement of spins都可以通过任意另一种arrangement of spins通过每次翻转一次，翻转有限次得到。每次翻转一次保证了每次transition概率不为零。

下面为模拟magnetization的代码：
```Python
import numpy as np
import matplotlib.pyplot as plt

init_state = np.ones(N)

  

M = [np.sum(init_state)]

  

for i in range(steps):

  # Choose a spin to flip

  j = np.random.randint(0,N)

  

  # Calculate the energy change

  delta_E = 2*J*init_state[(j-1)%N]*init_state[j]+2*init_state[j]*init_state[(j+1)%N]+2*h*mu*init_state[j]

  

  # Judge whether to flip the spin

  prod = np.exp(-beta*delta_E)

  

  if prod >= 1:

    init_state[j] = -init_state[j]

  if prod < 1:

    threshold = np.random.uniform(0,1)

    if threshold < prod:

      init_state[j] = -init_state[j]

  M.append(np.sum(init_state))

  

plt.plot(range(steps+1), M)
```
