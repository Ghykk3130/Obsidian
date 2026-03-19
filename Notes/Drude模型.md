忽略电子间相互作用，电子与原子实的库伦作用。假设电子与原子实唯一的作用为碰撞后的散射，散射后平均速度为零。这称为Drude模型。

我们可以得到运动方程：

>[!Success] Proposition 1
>Let $\tau$ be the average time between collisions, $\mathbf{f}$ be external forces on the electrons. $\mathbf{p}$ is the ensemble average of the momentum. Then:
>$$\frac{d\mathbf{p}}{dt}=- \frac{\mathbf{p}}{\tau}+\mathbf{f}$$
## Proof.

在$dt$时间内，电子与核碰撞次数为$\frac{dt}{\tau}$。则未发生碰撞概率为$1- \frac{dt}{\tau}$。那么：
$$\begin{align}
 & \sum_{i} \mathbf{p}_{i}(t+dt) =\left( 1- \frac{dt}{\tau} \right)\sum_{i}\left(\mathbf{p}_{i}(t)+\mathbf{f}_{i}dt\right) +\mathcal{O}(dt^{2})
\end{align}$$
$\sum_{i}(\mathbf{p}_{i}(t)+\mathbf{f}_{i}dt)$是为发生碰撞粒子在$t+dt$时的动量。发生碰撞的粒子本身占据$\frac{dt}{\tau}$的比例，由于速度减到零，又在$dt$内加速，最终产生$dt$的二阶小量，忽略。接下来：
$$\begin{align}
 & \sum_{i}\mathbf{p}_{i}(t)+ \sum_{i} \frac{\partial \mathbf{p}_{i}}{\partial t}dt= \left( 1- \frac{dt}{\tau} \right)\sum_{i}(\mathbf{p}_{i}(t)+\mathbf{f}_{i}dt) \\
\implies & \sum_{i} \frac{\partial \mathbf{p}_{i}}{\partial t} = - \frac{1}{\tau}\sum_{i}\mathbf{p}_{i}+\sum_{i}\mathbf{f}_{i} \\
\implies & \frac{\partial\langle \mathbf{p}\rangle}{\partial t}=- \frac{1}{\tau}\langle \mathbf{p}\rangle+ \langle f\rangle
\end{align}$$
去掉平均符号即可。
>[!Right]
>$\blacksquare$

## Ex:

考虑存在$z$方向磁场。在xy面内用电场驱动电子。那么：
$$\begin{align}
 & \frac{d\mathbf{p} }{dt}=- \frac{\mathbf{p}}{\tau}+e\mathbf{v}\times \mathbf{B}+e\mathbf{E} \\

\end{align}$$
考虑稳态输运，则$\frac{d\mathbf{p}}{dt}=0$。那么：
$$\begin{align}
 &  \frac{m}{\tau}v_{x}=ev_{y}B+eE_{x} \\
 & \frac{m}{\tau}v_{y}=e(-v_{x}B)+eE_{y}
\end{align}$$
若导线接在x方向，而y方向没有导线，不允许电子流动。那么$v_{y}=0$。回忆起$j_{x}=nev_{x}$，可以得到：
$$E_{y}= \frac{B}{ne}j_{x}$$
于是得到Hall resistivity：
$$\rho_{yx}= \frac{B}{ne}$$

 


