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
此时，我们有：
$$\begin{align}
\delta F  & = \frac{\partial F}{\partial \mathbf{x} }\cdot \delta \mathbf{x} =0
\end{align}$$
但是由于约束，$\delta \mathbf{x}$不是任意的，所以我们不能直接脱去$\delta \mathbf{x}$。此时我们引入一个自由变量$\lambda$。我们构造辅助泛函：
$$\mathcal{F}(\mathbf{x})=F(\mathbf{x})-\lambda G(\mathbf{x})$$
我们发现，对$\lambda$变分，可以使得约束自动满足：
$$\frac{\partial\mathcal{F}}{\partial \lambda} \delta \lambda=0 \implies G(\mathbf{x})=0$$
所以我们不妨将$\lambda,\mathbf{x}$都看作自由变量，对这两个变量作极值化。这等价于对于不自由的$\mathbf{x}$作极值化。我们有：
$$\begin{align}
\frac{\partial\mathcal{F}}{\partial \mathbf{x}}\cdot\delta \mathbf{x} & = \frac{\partial F}{\partial \mathbf{x}} \cdot \delta \mathbf{x}- \lambda \frac{\partial G}{\partial \mathbf{x}}\cdot\delta \mathbf{x}=0\implies \frac{\partial F}{\partial \mathbf{x}}- \lambda \frac{\partial G}{\partial \mathbf{x}}=0
\end{align}$$
