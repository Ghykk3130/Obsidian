
考虑一个由广义坐标，广义速度与时间描述的系统。其Lagrangian显含$q_{i},\dot{q_{i}},t$。则$L=L(q_{i},\dot{q_{i}},t)$。

假设给定$t_{1},t_{2},q_{i}(t_{1}),q_{i}(t_{2})$这个boundary condition，我们想知道系统在$t_{1}$至$t_{2}$这段时间内如何演化，即我们想获得$q_{i}(t)$，那我们需要考虑系统的作用量$S=\int_{t_{1}}^{t_{2}}dtL$

Hamilton原理要求，从无数条$q_{i}(t_{1})$到$q_{i}(t_{2})$的曲线中，系统会选择使得$S$取到极值的曲线演化。换句话说，只要曲线偏离一点，$S$就会偏大（或偏小）。那么我们就想严格描述什么叫“曲线偏离一点”。

令系统的真实演化为$q_{i}(t)$。我们考虑曲线系：
$$\left\{\begin{align}
 & q_{i}(t,\epsilon)=q_{i}(t)+\epsilon \eta_{i}(t) \\
 & \eta_{i}(t_{1})=\eta_{i}(t_{2}) =0
\end{align}\right. \text{ such that }q_{i}(t),\eta_{i}(t) \in C^{\infty}([t_{1},t_{2}]) $$
这个曲线系$q_{i}(t,\epsilon)$显然能描述任何一个从$q_{i}(t_{1})$到$q_{i}(t_{2})$的性质良好的曲线。

对于任何一个关于这个曲线系中曲线的函数，它都一定包含$\epsilon$。于是可以定义：

>[!Definition 1]
>Let $f$ be a function of $\epsilon$, define $\delta: \text{family of curves} \rightarrow \text{a single curve}$ as:
>$$\delta f= \frac{\partial f}{\partial\epsilon}|_{\epsilon=0}$$
## Remark
更严格得讲，这里的偏导数是物质导数。即$\frac{\partial}{\partial\epsilon}$应当严格写为$\frac{D}{Dt}$。它implicitly地对$\epsilon$求导。$\frac{\partial}{\partial t}$严格来说只是explicitly地求导。
## Ex:
广义坐标的变分为：$\delta q_{i}(t)= \frac{\partial q_{i}(t,\epsilon)}{\partial\epsilon}|_{\epsilon=0}=\eta_{i}(t)$
于是显然有$\delta q_{i}(t_{1})=\delta q_{i}(t_{2})=0$
## Ex:
当我们选择曲线系中任意一条曲线$q_{i}(t,\epsilon)$带入作用量后，得到：
$$S(\epsilon)= \int dtL(q_{i}(t,\epsilon),\dot{q_{i}}(t,\epsilon),t)$$
我们同样可以定义$S$的变分：$\delta S= \frac{\partial S(\epsilon)}{\partial\epsilon}|_{\epsilon=0}$

于是我们可以陈述Hamilton原理了。

>[!Postulate 1]
>The evolution of a mechanical system is such that $\delta S=0$.

我们来看变分算子的一些性质。我们发现它和微分，积分这两个线性算子都交换。

>[! Proposition 1]
>For $f(t,\epsilon)\in C^{\infty}([t_{1},t_{2}]\times \mathbb{R})$, I have:
>1) $\delta \int dtf=\int dt\delta f$ if $f \in L^1([t_{1},t_{2}])$
>2) $\delta \partial_{t}f=\partial_{t}\delta f$
## Proof.
1：
$$\begin{align}
\delta \int dtf(t,\epsilon) & = \frac{\partial}{\partial\epsilon}\int dtf(t,\epsilon) \\
 & =\int dt   \frac{\partial}{\partial\epsilon}f \\
 & =\int dt\delta f
\end{align}$$
2：
$$\begin{align}
\delta(\partial_{t}f(t,\epsilon)) & = \frac{\partial^{2}}{\partial\epsilon \partial t }f \\
 & =\frac{\partial^{2}}{\partial t\partial\epsilon }f \\
 & = \partial_{t}(\delta f)
\end{align}$$
>[!Right]
>$\blacksquare$

结合[[Lagrangian Formulation of EM#^67894a|Lagrangian formulation of EM idea 3.1]]，于是接下来可以导出Lagrange方程。考虑：
$$\begin{align}
\delta S & =\delta \int_{t_{1}}^{t_{2}}dtL(q_{i}(t,\epsilon),\dot{q_{i}}(t,\epsilon),t) \\
 & =\int dt \delta L \\
 & =\int dt \left( \frac{\partial L}{\partial q_{i}}\delta q_{i}+ \frac{\partial L }{\partial  \dot{q_{i}} }\delta  \dot{q_{i}} \right) \\
 & =\int dt\left(  \frac{\partial L}{\partial q_{i}}\delta q_{i} + \frac{\partial L}{\partial  \dot{q_{i}}} \frac{d}{dt}(\delta q_{i}) \right) \\
 & = \int dt \left(  \frac{\partial L}{\partial q_{i}}\delta q_{i} + \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{i}}}\delta q_{i} \right) -  \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{i}}} \right)\delta q_{i}\right) \\
 & =\int dt\left(  \frac{\partial L}{\partial q_{i}}- \frac{d}{dt}\left(  \frac{\partial L}{\partial  \dot{q_{i}}} \right) \right)\delta q_{i}=0 
\end{align}$$
因为$\delta q_{i}=\eta_{i}(t)$具有独立性，所以需要要求：
$$ \frac{\partial L}{\partial q_{i}}- \frac{d}{dt} \frac{\partial L}{\partial  \dot{q_{i}}}=0, \forall i$$





