# 前置讨论
## 我们为什么需要研究约束力的虚功？

### 为什么需要广义坐标？

对于一个系统，我们由牛顿力学可以解出系统的运动方程。我们首先需要写出

i）一系列将力与坐标的微分方程$F_i = m_i\vec{a_i}$的方程。但是通常情况下，对于$F_i$，我们不会知道约束力。例如说想象一个单摆，我们很清楚的知道重力，但是却不清楚绳上弹力。

ii）但是就算我们不知道约束力，我们知道约束方程 。于是可以写出一系列坐标受到约束的方程$f(x_1, ..., x_{3N}) = 0$ 。 我们只需要不断地联立消元就可以解出每个坐标的运动方程。

这显然是麻烦的。因为

i)坐标在这种情况下会有冗余。我们显然只需要少于3N个坐标就可以描述系统了。

ii)我还需要通过约束方程把这些冗余的坐标消去，解实际上少于3N个的微分方程，然后再通过约束方程把这些冗余的坐标随时间的演化反解出来。
>[! Idea 1]
所以我们相当于为了消元多算了很多步，为了把消掉的元再反解回去，又再多算了那么多步。那么为什么我们不直接用最精简的方式，毫无冗余地描述出系统，然后解最少微分方程就可以了呢？这样上面两个冗余的步骤就都不需要做了。我们用广义坐标$q_i$来最精简地描述这个系统。显然广义坐标个数等于系统自由度。

### 虚功的一个性质

>[! Idea 2]
这个时候我们可以注意到一个事实。对于大部分约束来说，假设时间静止，我们随便在约束允许的范围下摆弄约束力（但是要求这些变动无穷小），这些约束力在约束允许的范围下无论怎样合功都是零。

一些例子：

i)例如说考虑一个刚体，显然由于点间距离不变，且作为约束这些距离的相互作用力共线相反，约束力的功之和为零。（这个情况下我们对约束力是比较了解到，因此可以直接讨论约束力。）（至于为什么要作合，这是因为单个力肯定不能得到功为零的结论。正是牛三中的一对力才做功加起来才相互抵消。）

ii)例如说考虑一个纯滚动球体，球与地面间的摩擦力约束了球与地面接触的那一点不能动，进而约束了描述球运动的广义坐标。（如果球接触的那一点可以动，自然自由度会更多）而满足这个点不动这一约束后这个摩擦约束力的虚功显然为零。
>[! Caveat]
>在刚体的例子中你可能会说其实约束力合力也是零。因为毕竟是内力来约束的，而内力和是零。那么我们为什么不直接用约束力合力为零这个条件。但是上面这个例子说明了为什么我们必须求的是虚功，而不是只是约束力就可以。约束力不一定是零但是虚功一定是零。

iii)例如说考虑一个轻杆连接到两个点，和刚体类似的，约束力的和功为零。（注意一定要作合。）

iv)例如说考虑约束在一个球面上的点。显然支持力垂直于约束面。

我们还可以有其他推导：

我们想证明：1）$\vec{N} \cdot \delta \stackrel{\rightharpoonup}{r}=0$ 其中$\vec{N}$表示约束力

我们将约束力$\vec{N}$对应的约束想象成一个由$f(x_1,...,x_{3N})=0$定义的光滑面。那么满足这个约束的虚位移一定是在这个光滑面内的。这个面的法线是 $\nabla f$ 。 于是$\nabla f \cdot \delta \vec{r} = 0$ 。 而约束力一定也是沿法线的。于是得证。

目前阶段，我们可以认为Lagrange力学研究的体系都是满足这一种虚功为零的约束的。

我们的想法是通过约束力的这个良好性质，经过一些数学变换，得到不需要考虑约束力的运动微分方程。这组微分方程是关于广义坐标的。

# 虚功原理

考虑系统的静力学平衡。（注意这里对i不是Einstein约定。这是单纯要求系统内每个点都平衡）我们有：

3）$\vec{F}_i+\vec{N}_i=0$ 其中$F_i$是质点i受到的主动力之合，$N_i$是质点i受到约束力之和

为了利用那个虚功的性质，我们两边点乘虚位移并求和 （此处采用Einstein约定）：

4）$\begin{aligned} & \vec{F}_i \cdot \delta \stackrel{\rightharpoonup}{r_i}+\overrightarrow{N_i} \cdot \delta \vec{r}_i=0 \\ & \Rightarrow \vec{F}_i \cdot \delta \vec{r}_i=0\end{aligned}$

这就是虚功原理 （再次注意是求合了的。单个约束力的虚功不是零，必须是合功是零。同时也可以这样思考，因为几何坐标的约束没有被消去，$\delta r_i$ 不是任意的，因此不能说力是零。）我们在用虚功原理解决问题时，实际上是将静力学问题转化成了动力学问题。当然，运用虚功原理的前提是我们清楚主动力是什么。

现在我们已经在静力学中成功消去约束力的影响了。但是我们还想研究如何在动力学中消去约束力的影响。其实动力学和静力学没什么不同，只不过把惯性力加上就可以。
# d'Alembert原理

我们来看虚功原理在非惯性系里面的版本。其实就是把惯性力加到主动力里面的虚功原理。d'Alembert原理没什么特别的，就是牛二移个项。其物理含义是惯性系里面力产生加速度，非惯性系里面是力与平移惯性力之合作用之下物体平衡。 写作：

5）$\vec{F}_i+\vec{N}_i-\dot{\vec{p}}_i=0$

我们点乘虚位移求合后就是：

6） $\left(\vec{F}_i-\dot{\vec{p}}_i\right) \cdot \delta \vec{r}_i=0$

有时候6）也被叫做d'Alembert原理。（还是注意是求合。沾上合虚功为零这个性质的玩意就要求合）


# 最小势能原理

我们考虑最普遍的情况。假设我们在非惯性系中发现惯性力的旋度为零，就可以将其写为一个势能函数，并加到本来的势能中去。记总势能为$V$。 在平衡位置附近作符合约束的小虚变动（泰勒展开保留到一阶）：$V(\vec{r}+\delta \vec{r}) = V(\vec{r}) + \nabla V \cdot \delta \vec{r}$ 

由于d'Alembert原理，我们可以得到$\delta V = \nabla V \cdot \delta \vec{r} = -(\vec{F} - \dot{\vec{p}})\cdot \delta \vec{r} = 0$ 

特殊地，如果我们选取广义坐标，消去所有的约束，就可以直接得到势能对广义坐标梯度为零：

$\nabla V \cdot \delta \vec{r} = \frac{\partial V}{\partial x_j} \frac{\partial {x_j}}{\partial q_i} \delta q_i = \frac{\partial V}{\partial q_i} \delta q_i = 0,\forall \delta q_i \Rightarrow \frac{\partial V}{\partial q_i} = 0$ 

# Lagrange方程

d'Alembert原理是不方便操作的。因为我们想得到广义坐标的方程。d'Alembert还只是关于几何坐标的方程，因此严重依赖于系统的具象几何构型。 而且我们也还没有消掉冗余的几何坐标。我们尽量把所有几何坐标要么代成广义坐标，要么弄成能量（无论如何选择广义坐标，描述能量总是比较容易的。这也是我们把那些东西代成能量的原因）

首先考虑6）的第一项：

7） $\begin{aligned} \vec{F}_i \cdot \delta \vec{r}_i & =\vec{F}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j \\ & =Q_j \delta q_j\end{aligned}$
注意这里我们用了Einstein约定对i求了一次和。顺便可以定义广义力为$Q_j = \vec{F_i}\cdot \frac{\partial \vec{r_i}}{\partial q_i}$ （也是对i求了合）

然后考虑6）的第二项：

8）$\begin{aligned} & \dot{\vec{p}}_i \cdot \delta \stackrel{\rightharpoonup}{r_i}=m_i \ddot{\vec{r}}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \delta q_j \\ & =\left(m_i \frac{d}{d t}\left(\dot{\vec{r}}_i \cdot \frac{\partial \vec{r}_i}{\partial q_j}\right)-m_i \dot{\vec{r}} \cdot \frac{d}{d t} \frac{\partial \vec{r}_i}{\partial q_j}\right) \delta q_j \\ & =\left(m_i \frac{d}{d t}\left(\vec{v}_i \cdot \frac{\partial \vec{v}_i}{\partial \dot{q}_j}\right)-m_i \vec{v}_i \cdot \frac{d}{d t} \frac{\partial \vec{v}_i}{\partial \dot{q}_j}\right) \delta q_j\end{aligned}$
$\begin{aligned} & =\left(\frac{d}{d t} \frac{\partial}{\partial \dot{q}_j}\left(\frac{1}{2} m_i v_i^2\right)-\frac{\partial}{\partial q_j}\left(\frac{1}{2} m_i v_i^2\right)\right) \delta q_j \\ & =\left(\frac{d}{d t} \frac{\partial}{\partial \dot{q}_j} T-\frac{\partial}{\partial q_j} T\right) \delta q_j\end{aligned}$

相减便有：

9）$\left(\frac{d}{d t} \frac{\partial}{\partial \dot{q_j}} T-\frac{\partial}{\partial q_j} T-Q_j\right) \delta q_j=0$

又因为广义坐标相互独立。（在用运动方程建立起关系之前，必须认为它们是相互独立的）于是：

10）$\frac{d}{d t} \frac{\partial}{\partial \dot{q_j}} T-\frac{\partial}{\partial q_j} T-Q_j=0, \forall j$

如果我们假设主动力都是保守力，然后$Q_j$也可以写成能量：

11） $\begin{aligned} Q_j=\vec{F_i} \cdot \frac{\partial \vec{r}_i}{\partial q_j} & =-\nabla_i V_i \cdot \frac{\partial \vec{r}_i}{\partial q_j} \\ & =-\frac{\partial V_i}{\partial q_j}=-\frac{\partial V}{\partial q_j}\end{aligned}$注意这里是对i求合的

如果我们假设势能与广义速度无关，于是将11）带入10）并在对广义速度微分那里里面多减个V就有：

12）$\frac{d}{d t} \frac{\partial}{\partial \dot{q}_j}(T-V)-\frac{\partial}{\partial q_j}(T-V)=0$

得到Lagrange方程。
