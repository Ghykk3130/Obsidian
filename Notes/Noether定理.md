# 1. 场的变换

考虑一个函数$f(x)$。若存在变换$x^{'}=Tx$，那么相应地可以保持$f$的functional form不变，将函数值随点搬运，定义$f(Tx)$。如果我们认为$f(Tx)=(f\circ T)(x)$仍然是$x$的函数，那么这会引出一个新的函数$f\circ T$。这称为$f$的pullback，即将坐标变换吸收到函数本身中去引出的新函数。所以如果采用pullback的视角，坐标系不需要相应变换。我们仍然在$\{ x \}$系中工作。

>[!Definition 1]
>Given a function $f(x)$ and a transformation $x^{}\mapsto x^{'}=Tx$, define the pullback of $f$ as $f\circ T$.

考虑进行某个连续变换使得$\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu})$。这个变换可能是参考系本身的变换$T:x^{\mu}\mapsto x^{'\mu}$引出的pullback。例如，如果$\phi$是标量场，那么我们要求：
$$\phi^{'}(x^{'\mu})=\phi(x^{\mu})$$

>[!Quote]
>千万不能认为，等式$\phi^{'}(x^{'\mu})=\phi(x^{\mu})$的含义是，场$\phi^{'}$对于新坐标$x^{'\mu}$的dependence和场$\phi$对于$x^{\mu}$的dependence一样。这仅仅是一个数值的等式，它并不能给出functional form的任何信息! 

为了解出$\phi^{'}$的functional form，我们作：
$$\begin{align}
\phi^{'}(x^{'\mu}) & =\phi(x^{\mu}) \\
 & = \phi(T^{-1}x^{'\mu})
\end{align}$$
所以$\phi^{'}$是$T^{-1}$相应pullback出一个新场$\phi^{'}=\phi\circ T^{-1}$。重新将$\phi^{'}$的自变量命名为$x^{\mu}$，那么$\phi^{'},\phi$就是$\{ x^{\mu} \}$系上的两个不同场构型。

在此基础上，还有可能发生场的规范变换$\phi^{'}(x^{\mu})\mapsto e^{i\alpha}\phi^{'}(x^{\mu})$。我们通过将$e^{i\alpha}\phi^{'}$命名为新的$\phi^{'}$来将规范变换也吸收进$\phi^{'}$。这相当于将规范变换也pullback进函数本身里面。
# 2. Noether定理

$\mathcal{L}(\phi,\partial_{\mu}\phi)$是场的函数。针对$\phi,\phi^{'}$两个场，保持$\mathcal{L}(\phi,\partial_{\mu}\phi)$的functional form不变，将$\phi(x^{\mu}),\ \phi^{'}(x^{\mu})$代入，得到lagrangian在两种场构型下在每个时空点$x^{\mu}$的值。将它们分别称为$\mathcal{L},\ \mathcal{L}^{'}$。它们都depend on老的坐标$\{ x^{\mu} \}$。

$\mathcal{L}^{'}$相当于$\mathcal{L}$的pullback。于是，我们在原参考系$\{ x^{\mu} \}$中得到一个新的lagrangian构型。

定义：
$$\begin{align}
 & S= \int_{\Omega}d^{4}x\mathcal{L} \\
 & S^{'}=\int_{\Omega^{}}d^{4} x\mathcal{L}^{'}
\end{align}$$
如果在该变换下，作用量保持不变，即任何时间段的作用量$S=S^{'}$，称系统具有这个变换的对称性。

>[!Note] Definition 1
>If under the continuous transformation $\phi(x^{\mu})\rightarrow \phi^{'}(x^{\mu})$, we have $S=S^{'}$ for any time interval, then we say that the system has the symmetry corresponding to the transformation.

可以证明，如果系统具有$\phi(x^{\mu})\mapsto \phi^{'}(x^{\mu})$对称性，那么EOM的解具有不变性。其中，EOM的解的不变性是指，如果$\phi(x^{\mu})$满足Euler-Lagrange方程，那么$\phi^{'}(x^{\mu})$也满足同一个Euler-Lagrange方程。

>[!Success] Proposition 2
>If the system has the symmetry of $\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu})$, then the solution to the EOM is invariant. 
#



现在我们演技对称性与守恒的关系。本着李群的精神，我们考虑无穷小变换：
$$\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu}(x^{\mu}))=\phi(x^{\mu})+\alpha \Delta \phi(x^{\mu})$$
其中，无穷小参数为$\alpha$。相应地，为了保证$S$的不变性$\mathcal{L}$必须满足：
$$\mathcal{L}(\phi,\partial_{\mu}\phi)\mapsto \mathcal{L}^{'}(\phi^{'},\partial_{\mu}\phi^{'})+\alpha \partial_{\mu}\mathcal{J}^{\mu}(\phi,\partial_{\mu}\phi)$$
由于场是$x^{\mu}$的函数，$\mathcal{J}^{\mu}$也可以写成$x^{\mu}$的函数。要求$\mathcal{J}^{\mu}$在$x^{1,2,3}=\infty$时为零。上式之所以能保证作用量不变，是因为：
$$\int_{t_{1}}^{t_{2}} dt\int_{\mathbb{R}^{3}}d^{3}x \partial_{\mu}J^{\mu}(\phi,\partial_{\mu}\phi)$$