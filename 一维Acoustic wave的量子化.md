# 量子化
描述一维粒子链的变量选取：ii）每个粒子偏移平衡的位置$x_j$ ii）每个粒子的动量$p_j$。则系统有Hamiltonian以及Lagrangian:

$\begin{aligned} & H=\frac{p_1^2}{2 m_1}+\cdots+\frac{p_N^2}{2 m_N}+\frac{1}{2} k\left(x_1-x_2\right)^2+\cdots+\frac{1}{2} k\left(x_N-x_{N-1}\right)^2 \\ & \mathcal{L}=\frac{p_1^2}{2 m_1}+\cdots+\frac{p_N^2}{2 m_N}-\frac{1}{2} k\left(x_1-x_2\right)^2-\cdots-\frac{1}{2} k\left(x_N-x_{N-1}\right)^2\end{aligned}$

我们的主要问题是：如何作change of variables使得$H, \mathcal{L}$看起来像$N$个uncoupled的SHO相加？（即例（例如说对于Hamiltonian）N个$\frac{p^2}{2m} + \frac{1}{2}k x^2$相加 ）事先声明。下面的各种系数会搞得很麻烦。真正快速推导时建议把所有$m_j$取为$1$，最后再根据量纲还原回去。

>[!Idea]
>要decouple一大堆变量，首先尝试将要简化的式子（例如这里的Hamiltonian）写成变量组成的向量的矩阵乘法。只需要将矩阵对角化，再根据对角化的特征基做change of variables即可。


>[!Idea]
>势能项$\frac{1}{2} k\left(x_1-x_2\right)^2+\cdots+\frac{1}{2} k\left(x_N-x_{N-1}\right)^2$可以写成一个实二次型，而实二次型对应对称阵，必可对角化。对角化的基变换可以自然地decouple。

令$V = \frac{1}{2} k\left(x_1-x_2\right)^2+\cdots+\frac{1}{2} k\left(x_N-x_{N-1}\right)^2$。 写成实二次型为$V = \frac{1}{2} x_a V_{ab}x_b$ （采用Einstein求和约定）

我们设特征值为$\omega_j^2$，对应的特征矢为$s_j$， 则该实二次型可写为：

1）$\left(x_1 \cdots x_n\right)\left(s_1 \cdots s_N\right)\left(\begin{array}{ccc}\omega_1^2 & & \\ & \ddots & \\ & & \\ & & \omega_N^2\end{array}\right)\left(\begin{array}{c}s_1^t \\ \vdots \\ s_N^t\end{array}\right)\left(\begin{array}{c}x_1 \\ \vdots \\ x_N\end{array}\right)$

或者为了方便前面添一项$\sqrt{m_j}$并把多余的吸收进中间的对角阵。重新将$\omega_j^2/m_j$命名为$\omega_j^2$（为什么这样吸收？只是为了后面的形式上好看而已。你可以不吸收试试看。）写为：

$\left(\sqrt{m_1} x_1 \cdots \sqrt{m_N} x_N\right)\left(s_1 \cdots \cdots s_{N 1}\right)\left(\begin{array}{ccc}\omega_1^2  & & \\ & \ddots & \\ & & \\ & & \omega_N^2 \end{array}\right)\left(\begin{array}{c}s_1^t \\ \vdots \\ \\ \\ s_N^t\end{array}\right)\left(\begin{array}{c}\sqrt{m_1} x_1 \\ \vdots \\ \sqrt{m_N} x_N\end{array}\right)$

于是作change of variables：2）$\left(\begin{array}{c}\sqrt{m_1}x_1 \\ \vdots \\ \sqrt{m_N}x_N\end{array}\right) \leadsto\left(\begin{array}{c}s_1^t \\ \vdots \\ s_N^t\end{array}\right)\left(\begin{array}{c}\sqrt{m_1}x_1 \\ \vdots \\ \sqrt{m_N}x_N\end{array}\right) = \left(\begin{array}{c}y_1 \\ \vdots \\ y_N \end{array}\right) = Y$  

则势能项为: $\begin{aligned} V & =\frac{1}{2}\left(y_1 \cdots y_N\right)\left(\begin{array}{ccc}\omega_1^2 & & \\ & & \ddots \\ & & \\ & & \omega_N^2\end{array}\right)\left(\begin{array}{c}y_1 \\ \vdots \\ y_N\end{array}\right) \\ & =\frac{1}{2} \omega_j^2 y_j^2\end{aligned}$

为了获得与每个$y_j$对应的动量，我们改造一下动能项，对$p_j$作相似的change of variables。我们是把势能项写成矩阵乘法形式才得以change of variables的。所以我们把动能项也写成矩阵乘法然后微调：

$\begin{aligned} K & =\frac{p_1^2}{2 m_1}+\cdots+\frac{p_N^2}{2 m_N} \\ & =\frac{1}{2}\left(\frac{p_1}{\sqrt{m_1}} \cdots \frac{p_N}{\sqrt{m N}}\right)\left(\begin{array}{c}\frac{p_1}{\sqrt{m_1}} \\ \vdots \\ \frac{p_N}{\sqrt{m_N}}\end{array}\right) \\ & =\frac{1}{2}\left(\frac{p_1}{\sqrt{m_1}} \cdots \frac{p_N}{\sqrt{m_N}}\right)\left(s_1 \cdots s_N\right)\left(\begin{array}{c}s_1^t \\ \vdots \\ s_N^t\end{array}\right)\left(\begin{array}{c}\frac{p_1}{\sqrt{m_1}} \\ \vdots \\ \frac{p_N}{\sqrt{m_N}}\end{array}\right)\end{aligned}$
最后一步是因为对称阵的特征矢互相垂直，我们不妨将他们Gram-Schmidth化。于是：

$\left(\begin{array}{c}\frac{p_1}{\sqrt{m_1}} \\ \vdots \\ \frac{p_N}{\sqrt{m_N}}\end{array}\right) \leadsto\left(\begin{array}{c}s_1^t \\ \vdots \\ s_N^t\end{array}\right)\left(\begin{array}{c}\frac{p_1}{\sqrt{m_1}} \\ \vdots \\ \frac{p_N}{\sqrt{m_N}}\end{array}\right)=P$


>[!Caveat]
为什么坐标变了，与之相对地conjugate momentum也要变呢？这是因为量子力学要求commutation relation必须在一对conjugate的坐标与动量之间被满足，即$[x_i,p_j] = i\hbar \delta_{ij}$ 。 如果$x_i$变了而$p_i$没变，则commutation relation 不能被满足。相应的动量算符在变换后的坐标表象下就不再是$\frac{\hbar}{i} \nabla$ 。我们就不方便再坐标表象下解Schrodinger方程了。

则Hamiltonian可以写为：

3）$H = \frac{1}{2}P_j^2 + \frac{1}{2} \omega_j^2 y_j^2$ 

看着不太舒服，因为$m$包含到$P_j$里面去了。但本质上和SHO别无二致。接下来验证commutation relation: 容易验证$[y_i,P_j] = i\hbar \delta_{ij}$ 。于是整个space可以分解为$N$个一维的SHO的space的张量积。而commutation relation保证了每个SHO的空间里面$y_j, P_j$都可以和正常的SHO一样简单地解出来。

# 一维链的量子态与phonon

由3）$\Rightarrow$ 系统整体的态为$|\psi \rangle = |\psi_1\rangle ...|\psi_N \rangle$ ， 其中$|\psi_j \rangle$ 是自然频率为$\omega_j$的SHO的态。

用Hamiltonian作用一下得到系统能量：$E_{n_1, ..., n_N} = (\frac{1}{2} + n_1) \hbar \omega_1 + ... + (\frac{1}{2}+ n_N) \hbar \omega$ 

若$n_1$增加了$1$， 则称在normal mode $\omega_1$ 产生了一个phonon。这个phonon带有的能量为$\hbar \omega_1$ 。
# 经典解

我们可以经典地解出$x_j$随时间的演化。通过上述推导，显然$\mathcal{L} = \frac{1}{2}P_j^2 - \frac{1}{2} \omega_j^2 y_j^2$ , 且$P_j = \dot{y_j}$ 

则显然$\ddot{y_j} = \omega_j^2 y_j$ $\Rightarrow$$y_j = A_j exp(-i \omega_j t)$ 

我们可以很轻易地通过对2）求逆将$x_j$解出来。显然每个$x_j$都是许多$exp(-i\omega_i t)$的线性组合。每个纯的$exp(-i\omega_i t)$称为一个经典的normal mode。 根据初始条件可以进一步解出线性组合的系数。

Remark: 一个有$N$个自由度的系统有$N$个normal modes。
