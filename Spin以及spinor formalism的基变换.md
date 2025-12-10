
# 关于Spin概念的梳理

## Spin的引入

我们首先应当认为spin是一个角动量。角动量的定义由orital angular momentum的对易关系generalize得来，即满足$[L_{i}, L_{j}] = i \hbar \epsilon_{ijk} L_{k}$的可观测量。 于是我们必须假设spin有这样的对易关系。

然后我们在Stern-Gerlach实验中注意到：任何轴向spin（$S_z$）只存在两个量，然后我们又由广义角动量理论知道角动量的ket是$| s, m_{s} \rangle$ ,于是我们下结论$m_{s} = \frac{1}{2}\ or\ -\frac{1}{2}$。 然后因为$m_s$由被$s$给bound住，于是只能有$s = \frac{1}{2}$ 。所以spin算符的本征矢只有$|s = \frac{1}{2}, m_s = \pm \frac{1}{2} \rangle$两个。所以任意的spin的态都是这两个矢的线性组合。记为$| \pm \rangle$ 

## Spin的物理图像

>[! Caveat]
>注意spin不是物理空间中的上下两个方向，而是选定物理空间中的一条轴，将这条轴方向上的spin的本征态找出来，然后取Hilbert空间中的两个eigenket而已

一个物理直觉上的图像是spin在三维空间中处于叠加态，然后在任意一个轴上都可以观测这个spin的轴向分量，这样的轴向分量就只有两个值。这并不代表着粒子就在这两方向上旋转，因为不确定性关系，spin的另外两个分量一定不能确定下来。

如果要想象Hilbert空间中的情况，可以按照Bloch sphere思考。物理空间中轴$(\theta, \phi)$方向的spin一定对应着Hilbert空间中为$cos\theta | + \rangle + sin \theta e^{i\phi} | - \rangle$ 的本征态。

# Two-electron System

## 为什么要考虑角动量相加而不单独考虑每个角动量?

量子地来讲，我们发现如果有两个粒子存在，且有相互作用，那么Hamiltonian会多出一些项。接下来有几种情况

1. "orbit-orbit coupling“：如果这这种相互作用是纯粹由粒子位置产生的，那么Hamiltonian会多出$\nu(|\vec{r_1} - \vec{r_2}|)$ 。 Recall：要验证一个算子是否“守恒”（即开始时有一个这个算子的本征矢。随后让时间演化，这个本征矢一直待在这个本征空间里面，也就是说再用这个算子观测一下会测出和开始一样的量。这就是“守恒”的含义），就只需要验证这两个算子是否交换。 经过计算后可以发现正是这个可恶的$\nu$使得$[H, \vec{L_1}], [H, \vec{L_2}] \neq 0$ 。但是$[H, \vec{L_1}+ \vec{L_2}] = 0$ 。我们可以称这个$\nu$为"orbit-orbit coupling term"。经典的直觉是，如果两个粒子（无自旋）有相互作用，那么它们分别的orbital角动量不会守恒。但是总角动量会守恒。
2. “spin-orbit coupling”：即便是只有一个粒子存在，它自己的spin和orbit也会相互影响。这种相互作用是spin-orbit coupling, 与自旋以及粒子的位置有关，那么Hamiltonian会多出$a\vec{L} \cdot \vec{S}$ 。同样地，可以算到只有把$\vec{L}$与$\vec{S}$相加才会守恒。经典的直觉是一个物体的角动量可以分解成orbital的和spin的（例如天体），然后总角动量是这两个之和，会守恒。
3. “spin-spin coupling”： 两个粒子的spin也会相互影响。Hamiltonian会多出$a\vec{S_1}\cdot \vec{S_2}$ 。同上。但是这次不存在经典的直觉。

那么我们可以粗略地下结论：一旦Hamiltonian多出了异于平凡的Hamiltonian（就是简单的动能加上势能）的项， 那么很有可能就会出现单独量不守恒，加起来守恒的情况。

所以考虑角动量合是更有意义的。

# 基变换


>[! Idea]
设$\vec{S_1}, \vec{S_2}$是electron的spin，也就是说$s_{j} = \frac{1}{2}, m_{sj} = \pm \frac{1}{2}, j \in  {1, 2}$ 。 设 $\vec{S} : = \vec{S_1} + \vec{S_2}$ 。 我想要
i）新的量子数$s, m$  
ii）新的基矢量 $|s, m \rangle$ 
such that $S^2 | s, m \rangle = s(s+1)\hbar^2|s, m \rangle$ , $S_z |s, m \rangle = m\hbar | s, m \rangle$ 
更数学地讲，这其实就是将$S^2$对角化。因此我们需要一个基变换，找到$S^2$的本征基。然后再相应地凑出量子数。

为此，我们先来看$S^2$在现在这个基下的矩阵是什么，再直接把这个矩阵对角化即可。

为了看旧基下的矩阵，我们先来看$S^2$作用在旧基$| s_1, m_{s_1} \rangle, | s_2, m_{s_2} \rangle$上是怎样的。为此，我们将$S^2$用$\vec{S_1}, \vec{S_2}$写开：

1） $S^2 = S_1^2 + S_2^2 + \vec{S_1}\cdot \vec{S_2} + \vec{S_2} \cdot \vec{S_1} = S_1^2 + S_2^2 + 2\vec{S_1}\cdot \vec{S_2}$ (合在一起了是因为可交换。因为是分别作用在张量基的分量上的，所以commutable) 

我们很清楚$S_1^2, S_2^2$会如何作用在旧基上，但是却不太清楚后面一项如何作用在旧基上。我们把后面一项写开就有:

2） $\vec{S_1} \cdot \vec{S_2} = S_{1x} S_{2x} + S_{1y} S_{2y} + S_{1z} S_{2z}$ 

我们很清楚$S_{1z}S_{2z}$如何作用在旧基上，但是却不清楚前面两项如何作用。我们回想起：

$S_{1\pm} = S_{1x} \pm i S_{1y}, S_{2\pm} = S_{2x} \pm i S_{2y}$ ， 而且我们很清楚$S_{1\pm}, S_{2\pm}$如何作用在旧基上。于是反解一下：

$S_{jx} = \frac{1}{2} (S_{j+} + S_{j-})$
$S_{jy} = \frac{1}{2i} (S_{j+} - S_{j-})$  $j \in {1, 2}$ 

Recall: 

$S_{-} | s, m \rangle = \sqrt{s(s+1)- m(m-1)} \hbar |s, m-1 \rangle$
$S_{+} | s, m \rangle = \sqrt{s(s+1)- m(m+1)} \hbar |s, m+1 \rangle$

于是：

$\vec{S_1} \cdot \vec{S_2} |s_1, m_{s_1} \rangle \otimes |s_2, m_{s_2} \rangle= S_{1x} S_{2x} |s_1, m_{s_1} \rangle \otimes |s_2, m_{s_2} \rangle+ S_{1y} S_{2y}|s_1, m_{s_1} \rangle \otimes |s_2, m_{s_2} \rangle + S_{1z} S_{2z}|s_1, m_{s_1} \rangle \otimes |s_2, m_{s_2} \rangle$
我们对每个旧基算一下$m_{s_1} = \pm\frac{1}{2}, m_{s_2} = \pm\frac{1}{2}$ ( 注意恒有$s_1 = \frac{1}{2}, s_2 = \frac{1}{2}$， 所以下面写的时候其实可以不写这两个量子数。我们为了清晰还是写一下)则  

$\vec{S_1} \cdot \vec{S_2} | \frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2}, \frac{1}{2}\rangle = \frac{1}{4}\hbar^2 |\frac{1}{2}, \frac{1}{2} \rangle \otimes |\frac{1}{2},\frac{1}{2} \rangle$

$\vec{S_1} \cdot \vec{S_2} | \frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2}\rangle = \frac{1}{4}\hbar^2 |\frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2} \rangle$

$\vec{S_1} \cdot \vec{S_2} | \frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2}\rangle = \frac{1}{2} \hbar^2| \frac{1}{2},-\frac{1}{2}\rangle \otimes |\frac{1}{2}, \frac{1}{2}\rangle + \frac{1}{4} \hbar^2 |\frac{1}{2}, \frac{1}{2}\rangle \otimes | \frac{1}{2}, -\frac{1}{2} \rangle$ 

$\vec{S_1} \cdot \vec{S_2} | \frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, \frac{1}{2}\rangle = \frac{1}{2} \hbar^2| \frac{1}{2},\frac{1}{2}\rangle \otimes |\frac{1}{2}, -\frac{1}{2}\rangle + \frac{1}{4} \hbar^2 |\frac{1}{2}, -\frac{1}{2}\rangle \otimes | \frac{1}{2}, \frac{1}{2} \rangle$ 

然后可以得到：

$S^2| \frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2}, \frac{1}{2}\rangle  = 2 \hbar^2|\frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2},\frac{1}{2} \rangle$ 

$S^2| \frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2}\rangle  = 2 \hbar^2|\frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2},-\frac{1}{2} \rangle$ 

$S^2| \frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2}\rangle  = \hbar^2 (|\frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2},\frac{1}{2} \rangle + |\frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2},-\frac{1}{2} \rangle)$ 

$S^2| \frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, \frac{1}{2}\rangle = \hbar^2 (|\frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2},\frac{1}{2} \rangle+ |\frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2},-\frac{1}{2} \rangle)$ 

于是在四个旧基矢下，$S^2$就有矩阵：

$\left(\begin{array}{cccc}2 \hbar^2 & 0 & 0 & 0 \\ 0 & 2 \hbar^2 & 0 & 0 \\ 0 & 0 & \hbar^2 & \hbar^2 \\ 0 & 0 & \hbar^2 & \hbar^2\end{array}\right)$

我们先取第一个，第二个旧基作为新基$|s, m \rangle = | \frac{1}{2}, \frac{1}{2} \rangle \otimes | \frac{1}{2}, \frac{1}{2}\rangle  ,\ | \frac{1}{2}, -\frac{1}{2} \rangle \otimes | \frac{1}{2}, -\frac{1}{2}\rangle$  ， 显然$s$应该对应1，因为$1*(1+1) \hbar^2 = 2\hbar^2$ 。

为了得到相应的$m$， 我们用$S_{z} = S_{1z} + S_{2z}$作用一下刚取得两个新基，很显然可以得到第一个新基对应$m = 1$，第二个新基对应$m = -1$ 。

接下来将右下角的块对角化。可以得到两个特征值$0,2$， 分别对应特征矢$\begin{aligned} & \frac{1}{\sqrt{2}}\left(\left|\frac{1}{2}, \frac{1}{2}\right\rangle \otimes\left|\frac{1}{2},-\frac{1}{2}\right\rangle\right. \\ & \left.-\left|\frac{1}{2},-\frac{1}{2}\right\rangle \otimes\left|\frac{1}{2}, \frac{1}{2}\right\rangle\right)\end{aligned}$

以及$\begin{aligned} & \frac{1}{\sqrt{2}}\left[\left|\frac{1}{2}, \frac{1}{2}\right\rangle \otimes\left|\frac{1}{2},-\frac{1}{2}\right\rangle\right. \\ & \left.+\left|\frac{1}{2},-\frac{1}{2}\right\rangle \otimes\left|\frac{1}{2}, \frac{1}{2}\right\rangle\right)\end{aligned}$
这两个对应的$m$显然是0。

于是我们得到基变换（我们略去$l$不写，用$\pm$表示单个粒子自旋量子数为$\pm \frac{1}{2}$）：

>[! Note]
Singlet: $|s=0, m=0\rangle=\frac{1}{\sqrt{2}}(|+,-\rangle-|-,+\rangle)$      没有角动量
>
Triplet: $\begin{aligned} & |s=1, m=1\rangle=|+,+\rangle \\ & |s=1, m=0\rangle=\frac{1}{\sqrt{2}}(|+,-\rangle+|-,+\rangle) \\ & |s=1, m=-1\rangle=|-,-\rangle\end{aligned}$      角动量为$2\hbar^2$ 


注意到原来我们需要十个量子数来定态，每个粒子五个量子数。这五个量子数分为能量的量子数和角动量量子数。角动量量子数又分为orbital以及spin量子数。每个粒子需要的量子数为：能量一个$n$， orbital三个，$n, l, m$， spin两个, $s, m_s$ 。对应的可观测量为$H= H_1 + H_2, L_{1}^2, L_{2}^2, L_{1z}, L_{2z}, S_1^2, S_2^2, S_{1z}, S_{2z}$ 。 在基变换之后仍然需要十个量子数。我新找的$s,m$仅仅只是描述自旋合的。要描述轨道角动量还需要原先两个粒子的orbital量子数，总共需要的可观测量为$H, L_1^2, L_2^2, L_{1z}, L_{2z}, S_1^2, S_2^2, S^2, S_z$   

>[!Remark]
>考虑一个角动量$\vec{L}$，为什么我们只需要两个量子数$|l, m_l\rangle$就可以完全确定它的态？按理说我们有三个自由度，应该要三个量才对。如果我们试图在$|l, m_l\rangle$基础上加一个量，会发现做不到。$m_l$确定了z向角动量，而$l$确定了角动量大小。按理说我们再确定一个x或者y项的角动量就可以完全确定角动量矢量在空间中的大小和方向了。但是由于不确定性关系，确定了z向角动量后，就不可能确定x以及y的角动量。于是我们只能“最精确”地确定两个自由度。

