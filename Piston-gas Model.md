# 问题陈述

**1. 考虑一个理想气体被装在绝热刚性容器中（energy transfer through work variables and heat variables is prohibited），刚性容器上方是开口的，被一个质量为$M$的活塞压住。活塞与气体的接触面是绝热的。整个体系竖直地置于引力场中，远离其他物质。**

**2. 在1的基础上，最开始系统处于平衡。我们在活塞上方放置重物$m$。有两种放置方式：直接将$m$放上去，或者将$m$无限细分，quasi-static地放上去。我们问这两种情况下系统最终平衡时活塞高度是多少。**

# 关于隔板

热力学中，我们认为隔板是一种对粒子坐标进行限制的东西。隔板相当于一个无限深势阱。系统通过隔板和外界隔开。

>[!Definition 1]
>A system that has no interaction with other systems is called isolated (thermally isolated).

物理上，我们想象一个远离任何物质的系统。那这个系统就是isolated的。它因为远离任何物质，不可能和其他系统形成interaction Hamiltonian。或者，我们也可以想象这个系统是和其他物质有接触的，不过一个魔法隔板将任何与其他系统的coupling隔绝。要计算任何可加量都是直接相加，不需要计interaction term。这个隔板本身没有任何内部结构，不能传递能量，动量。本身也不具有能量和动量，不是一个力学结构。

>[!Definition 2]
>A system that can exchange energy but matter with other systems is called closed.

我们应当将closed的系统想象成一个被隔板包围的系统。我们应该把这里的隔板想象成一个无限轻薄的，隔绝物质的膜。它本身有一定的内部结构，可以作为系统和外界交换能量，动量的媒介。（例如内部可以激发出一些声子来导热。或者隔板本身可以移动来对气体做功。）但是由于它无限轻薄，自身Hamiltonian无限小，在计算总Hamiltonian的时候可以忽略。

又因为隔板无限轻薄，它质量也是无限小。隔板必须时刻处在平衡状态。所以稍微有不平衡，隔板就会以“无限的加速度”瞬移到平衡位置。（在平衡位置会立即以无限的加速度“刹车”，因为隔板本身无限轻，若稍有一点不平衡就会无限快地回到平衡位置。）这个隔板也不是力学结构，因为没有质量，其动量无法计算，无法加入Hamiltonian中。

>[!Definition 3]
>A system that can exchange both particles and energy with other systems is called open.

这种情况就相当于隔板不存在了。

# 系统能量

对于上面$1$中系统，总能量是多少？我们知道的事实是：
- 对于质量$M$的活塞置于引力场中，$M$加地球构成的体系完全与外界isolated。则系统的能量为$KE_{piston}+PE_{piston}$。
- 对于与外界隔离的理想气体，由于与外界没有相互作用，且内部粒子之间由于$Gm^{2}\ll r^{2}v^{2}$，（粒子之间距离大，速度快）也没有相互作用，内能就是所有粒子的动能相加。若为单原子气体，则平衡态时有$U_{gas}=\frac{3}{2}NkT$。

但是，一般来说，允许两个系统接触，总能量并不是两个系统isolated时的能量直接相加。应当还要包含一个interaction term。例如说，一个粒子自身isolated时能量为自己的动能。但两个粒子相互作用时，总能量为两个粒子动能相加减去intraction引力势能。

我们来看piston$+$gas体系的总能量。因为理想气体和piston之间的唯一作用是弹性碰撞，我们先来研究一下弹性碰撞。

弹性碰撞这种作用方式的特点为：在物体不接触时，相互作用为零。我们考虑两个粒子水平方向上的一维碰撞。不计两个粒子的引力作用，则体系Hamiltonian为$\frac{1}{2}m_{1}v_{1}^{2}+\frac{1}{2}m_{2}v_{2}^{2}+U_{collision}(x_{1},x_{2})$。其中，$U_{collision}$应满足：
$$\begin{align}
 & U_{collision}(x_{1},x_{2})  =0,x_{1}\neq x_{2} \\
 & U_{collision}(x_{1},x_{2})  =\infty,x_{1}=x_{2} \\
 & -\frac{\partial U_{collision} }{\partial x_{1} }- \frac{\partial U_{collision}}{\partial x_{2}}  =0\text{ when }x_{1}=x_{2}
\end{align}\dots*)$$
其中第三个式子是牛顿第三定律的要求，前两个式子是弹性碰撞这种短程作用的要求。注意第二个式子其实不能到无限，最多到$\frac{1}{2}m_{1}v_{1}^{2}+ \frac{1}{2}m_{2}v_{2}^{2}$，因为动能不能为负。写出Hamilton方程：
$$\begin{align}
\frac{\partial U_{collision}}{\partial x_{1}} & =-m_{1}  \ddot{x_{1}} \\
\frac{\partial U_{collision}}{\partial x_{2}} & =-m_{2}  \ddot{x_{2}} 
\end{align}\dots*  *)$$
因为$U_{collision}$差不多就是一个二维的dirac delta，所以上面的运动方程在全空间除了$x_{1}=x_{2}$这一点都化为：
$$\begin{align}
0 & =-m_{1}  \ddot{x_{1}} \\
0 & =-m_{2}  \ddot{x_{2}}
\end{align}$$
而$U_{collision}$唯一的作用就是给出一个对$x_{1},x_{2}$的限制。所以我们看到，系统总能量就是两个粒子isolated时能量的和。

另一种解释是，因为和piston交换相互作用的粒子就只有薄薄一层，在气体粒子数$N\rightarrow \infty$的极限下，根本就不存在与piston相互作用的粒子。所以没有相互作用能。

>[!Claim 1]
>The total energy of the system is $KE_{piston}+PE_{pistion}+U_{gas}$
## Proof.
首先，将piston单独置于引力场中，体系能量为：
$$KE_{piston}+PE_{piston}$$
将理想气体单独置于引力场中，体系能量为：
$$\frac{1}{2}mv_{i}^{2}+mgz_{i}$$
然而，由于理想气体分子速度太大，我们有：
$$v_{i}^{2}\gg gz_{i}$$
所以理想气体单独置于引力场中体系能量为：
$$\frac{1}{2}mv_{i}^{2}=U_{gas}$$
现在将piston与理想气体同时置于引力场中。则体系能量形式上应为：
$$KE_{piston}+PE_{piston}+U_{gas}-H_{interaction}$$
因为piston与理想气体的相互作用也是弹性碰撞，所以$H_{interaction}=0$。
>[!Right]
>$\blacksquare$
## Remark
实际上，理想气体单独置于引力场中，引力会使得气体的浓度不均匀。但因为我们假设$v_{i}\gg gz_{i}$，引力对气体的作用极其微弱，所以可以认为气体浓度是均匀地。

# 两种平衡

在这个体系中，存在两种截然不同的平衡即活塞的机械平衡和理想气体的热力学平衡。这两种平衡是没有关系的。例如，假设理想气体的豫驰时间非常快，则气体时时处在热力学平衡中。但是活塞可能仍然在运动，不处于机械平衡中。

我们必须假设，在足够长的时间后，系统同时达到机械平衡和热力学平衡。

>[!Idea 1]
>我们这样看待这个系统：系统存在两个时间尺度。一个是热力学平衡的时间尺度，一个是机械平衡的时间尺度。我们用state quantities $p,V$ 等描述理想气体在一个比热力学平衡时间大得多的时间尺度上，与外界的作用。我们用piston的正则坐标描述系统在机械运动时间尺度上piston作为一个刚体与外界的作用。

气体相与“刚体相”都是一大堆粒子组成的。前者内部粒子没有相互作用，后者内部粒子之间被紧紧约束着。因为是刚体，内部粒子不可能震动，不可能激发出声子导热。这也就构成了piston绝热的性质。
# 解题

我们来解决$2$。

**第一种方式：**

显然在$m$放上去后把手拿开，系统是isolated的。那么能量是一个运动积分。于是：
$$mgh_{i}+Mgh_{i}+ \frac{3}{2}NkT_{i}=mg{h_{f}}+Mgh_{f}+ \frac{3}{2}NkT_{f}$$
我们此处忽略了活塞的厚度。并且我们假设，在初态和末态，气体处于热力学平衡。不然我们无法写出气体能量$\frac{3}{2}NkT$。因为气体处于热力学平衡，所以$pV=NkT$。则：
$$\begin{align}
mgh_{i}+Mgh_{i}+ \frac{3}{2}p_{i}Ah_{i} =mgh_{f}+ Mgh_{f}+ \frac{3}{2}p_{f}Ah_{f}
\end{align}$$
在初态，由于在放上$m$之前有机械平衡，我们有$p_{i}A=Mg$（注意不是$p_{i}A=(m+M)g$）。末态的机械平衡则有$p_{f}A=(m+M)g$。联立即可解得$h_{f}$。

**第二种方式：**
## Caveat
第二种方式中，体系不是isolated的。因为我们在连续不断地放置$m$，每次放置的$dm$都是从不同高度放下来的，所以体系不封闭。

同样，初末态的机械平衡导出：
$$\begin{align}
 & p_{i}A=Mg \\
 & p_{f}A=(m+M)g
\end{align}$$
 若可以建立$p$和$V$的关系，就很舒服了。因为是准静态过程，任何点的$(p,V)$都是well-defined的。建立$p,V$的关系应当相当可行。因为$p,V$都是理想气体的宏观量，我们自然需要回想起有关的微分方程。我们有：
 $$\begin{align}
 & dU=-pdV \\
 & U=\frac{3}{2}NkT=\frac{3}{2}pV
\end{align}$$
$$\implies pV^{-5/3}=\text{constant}$$
联立即可解得$h_{f}$。



