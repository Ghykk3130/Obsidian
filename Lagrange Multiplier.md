# 1. 力学中的Lagrange multiplier

考虑一个Lagrange系统。我们选择了一套坐标$\{ q_{i} \}$，但是这些坐标之间存在一个约束$f(q_{1},\dots,q_{N})=0$。那么显然我们不能naive地对所有$q_{i}$写下Lagrange方程，然后解得trajectory。这是因为Lagrange方程的推导依赖于广义坐标的独立性。

那么我们还是需要作用量的变分为零。一系列操作后得到：
$$\delta S=\int_{t_{1}}^{t_{2}}dt\left( \frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q}_{i}} \right)\delta q_{i}=0 \tag{*}$$
因为$\delta q_{i}$之间不相互独立，我们显然写不出Lagrange方程。那么它们之间的约束是怎样的呢？考虑：
$$\delta f= \frac{\partial f}{\partial q_{i}}\delta q_{i}=0 \tag{**}$$
那么我们有：
$$\int dt\left(  \frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q}_{i}}- \lambda \frac{\partial f}{\partial q_{i}} \right)\delta q_{i}=0,\forall \lambda$$
我们可以选择$\lambda$以至于$\delta q_{1}$被消掉。只需要满足：
$$\frac{\partial L}{\partial q_{1}}- \frac{d}{dt} \frac{\partial L}{\partial   \dot{q}_{1}}-\lambda \frac{\partial f}{\partial q_{1}}=0$$
因为最终运动方程一定存在，全部都是$t$的函数。只需要按照上式计算出$\lambda$即可。所以无需担心$\lambda$的存在性。

因为我们消掉了$\delta q_{1}$，剩下的变量全部都独立了。于是必须有：
$$\frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q}_{i}}- \lambda \frac{\partial f}{\partial q_{i}}=0,\forall i \neq 1$$
于是我们获得$N$个方程：
$$\frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q}_{i}}- \lambda \frac{\partial f}{\partial q_{i}}=0,\forall i $$
此外还有一个方程：
$$f(q_{1},\dots,q_{N})=0$$
所以存在唯一解。

反过来容易证明，若有方程：
$$\left\{\begin{align}
 & \frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q}_{i}}-\lambda \frac{\partial f}{\partial q_{i}}=0 \\
 & f(q_{1},\dots,q_{N})=0
\end{align} \right.$$
则一定有：
$$\left\{ \begin{align}
 & \delta S=0 \\
 & f(q_{1},\dots,q_{N})=0
\end{align}\right.$$
第一个等式保证我们的运动方程是合乎物理规律的。第二个等式保证我们的运动方程是符合约束的。

# 2. Generalization

广义上来讲，若我们想extremize任意一个$\mathbb{R}^N$上的函数$F=F(x_{1},\dots,x_{N})$，subject to the constraint $G(x_{1},\dots,x_{N})=0$，我们必须要求:
$$\left\{ \begin{align}
 & \delta F=0 \\
 & G(x_{1},\dots,x_{N})=0
\end{align}\right. \tag{1}$$
那么我们必有：
$$\left\{ \begin{align}
 & \frac{\partial F}{\partial x_{i}}\delta x_{i}=0 \\
 & \frac{\partial G}{\partial x_{i}}\delta x_{i} =0
\end{align}\right.$$
遵循相同的思路，第一个式子无法脱去$\delta x_{i}$，因为不独立。我们必有：
$$\left( \frac{\partial F}{\partial x_{i}}- \lambda \frac{\partial G}{\partial x_{i}} \right)\delta x_{i}=0,\forall \lambda$$
我们刻意选择$\lambda$，以至于$\delta x_{1}$的系数被消掉。那么$\delta x_{i},i\neq 1$立刻独立。于是我们必有：
$$\left\{ \begin{align}
 & \frac{\partial F}{\partial x_{i}}- \lambda \frac{\partial G}{\partial x_{i}}=0,\forall i \\
 & G(x_{1},\dots,x_{N})=0
\end{align}\right. \tag{2}$$
还容易证明，这组方程和一下方程组等价：
$$\left\{ \begin{align}
 & \frac{\partial}{\partial x_{i}}(F-\lambda G)=0,\forall i \\
 & G(x_{1},\dots,x_{N})=0
\end{align}\right. \tag{3}$$
容易证明，方程组$(1),(2),(3)$其实都等价。

方程组$(3)$的第一个式子可以看作在取$F-\lambda G$的极值。




