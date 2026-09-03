考虑一个晶体具有离散平移对称性。那么：
$$T_{R}^{\dagger}HT_{R}=H\implies[T_{R},H]=0,\ \forall R\in \Lambda$$
我们可以用$T_{R}$的本征矢对角化$H$。先研究$T_{R}$的本征矢。回忆起$T_{R}=\exp\left( - \frac{i}{\hbar}pR \right)$是酉算子。那么本征值模长为$1$。局限在某个特定的本征子空间上，设本征值为$e^{i\theta(R)}$。显然，$T_{R_{1}+R_{2}}=T_{R_{1}}T_{R_{2}}$。不妨设$T_{R_{1}},T_{R_{2}}$都是对角化的，那么这个本征子空间对应的矩阵元就是$e^{i\theta(R_{1})},\ e^{i\theta(R_{2})}$。那么必须得到：
$$e^{i\theta(R_{1}+R_{2})}=e^{i\theta(R_{1})}e^{i\theta(R_{2})}$$
显然，取$\theta(R)=kR$符合要求。现在，不妨猜$T_{R}$的本征矢为$e^{ikx}u_{k}(x)$。其中$u_{k}(x+R)=u_{k}(x)$。用$T_{R}$作用发现确实得到特征值$e^{ikR}$。

注意到$e^{i(k+G)x}u_{k}(x)=e^{ikx}(e^{iGx}u_{k}(x))$。令$u^{'}_{k}(x)=e^{iGx}u_{k}(x)$发现和$e^{ikx}u_{k}(x)$形式一样。所以不妨将这种关于$G$的degeneracy吸收到$u_{k}(x)$中。即强行规定$k \in\text{FBZ}$。如果过$k \not\in \text{FBZ}$，则通过将$e^{iGx}$分离出来吸收进$u_{k}$来强行让$k\in\text{FBZ}$。这称为reduced zone scheme。

接下来代入Schrodinger方程确定$u_{k}(x)$即可。由于$u_{k}(x)$的周期性，我们在$x\in[0,R]$中解方程。边界条件使得解自然是离散的。 添加一个下标将不同的解标记为$u_{n,k}(x)$。那么Bloch态记为$\bra{x}n,k\rangle=e^{ikx}u_{n,k}(x)$。

>[!Quote]
>注意到，一个$k$对应许多Bloch态$n$。如果采用reduce zone scheme，这种“degeneracy”来自于将$G$吸收进$u_{n,k}$的操作，以及Schrodinger方程解的“intrinsic degeneracy”。

如果不规定$k\in\text{FBZ}$，同样代入Schrodinger方程，可以解得$u_{k,n}(x)$。这称为extended zone scheme。但是这里由于没有吸收$G$进入$u_{n,k}$，只存在Schrodinger方程的解的“intrinsic degeneracy”。我们看到更大的，完整的Brillouin区，但是由$n$标记的能带数变少了。将所有能带折叠进入FBZ将得到和reduced zone scheme一样的能带数。
## Ex:

Free electron gas in the extended zone scheme。我们有方程：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m}\nabla^{2}(e^{ikx}u)=E^{ikx}u
\end{align}$$
其中，$u(x)=u(x+R)$。猜解$u=e^{-iGx}$。代入得到色散关系：
$$E= \frac{\hbar^{2}(k-G)^{2}}{2m}$$
