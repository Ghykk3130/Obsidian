考虑一个函数$f(x)$。若存在变换$x^{'}=Tx$，那么相应地可以保持$f$的functional form不变，将函数值随点搬运，定义$f(Tx)$。如果我们认为$f(Tx)=(f\circ T)(x)$仍然是$x$的函数，那么这会引出一个新的函数$f\circ T$。这称为$f$的pullback，即将坐标变换吸收到函数本身中去引出的新函数。所以如果采用pullback的视角，坐标系不需要相应变换。我们仍然在$\{ x \}$系中工作。这种视角被称为变换的主动视角。

>[!Definition 1]
>Given a function $f(x)$ and a transformation $x^{}\mapsto x^{'}=Tx$, define the pullback of $f$ as $f\circ T$.

考虑进行某个连续变换使得$\phi(x^{\mu})\mapsto \phi^{'}(x^{\mu})$。这个变换可能是参考系本身的变换$x^{\mu}\mapsto x^{'\mu}$引出的pullback，也可能是场的规范变换$\phi(x^{\mu})\mapsto \phi^{'}(x^{\mu})=e^{iq\theta}\phi(x^{\mu})$。我们把这两种效应都吸收进$\phi^{'}$，并认为$\phi^{'}$仍然是原坐标$x^{\mu}$的函数。于是，我们在原参考系$\{ x^{\mu} \}$中产生了一个新的场的构型。

保持$\mathcal{L}(\phi,\partial_{\mu}\phi)$的functional form不变，将$\phi^{'}$代入得到函数值，通过强行令这个函数值depend on老的坐标$\{ x^{\mu} \}$，这会相应定义一个$\mathcal{L}$的pullback $\mathcal{L}^{'}$。于是，我们在原参考系$\{ x^{\mu} \}$中得到一个新的lagrangian构型。

定义：
$$\begin{align}
 & S= \int_{\Omega}d^{4}x\mathcal{L} \\
 & S^{'}=\int_{\Omega^{}}d^{4} x\mathcal{L}^{'}
\end{align}$$
如果在该变换下，作用量保持不变，即任何时间段的作用量$S=S^{'}$，称系统具有这个变换的对称性。

>[!Note] Definition 1
>If under the continuous transformation $\phi(x^{\mu})\rightarrow \phi^{'}(x^{'\mu})$, we have $S=S^{'}$ for any time interval, then we say that the system has the symmetry corresponding to the transformation.

可以证明，如果系统具有$\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu})$对称性，那么EOM具有不变性。其中，不变性是指functional form的不变性。这是显然，因为$S,S^{'}$分别对于$(\phi,\partial_{\mu}\phi),(\phi^{'},\partial_{\mu}\phi^{'})$的functional dependence不变，












而EOM是使用变分Euler-Lagrange方程推导的，所以是不变的。

>[!Success] Proposition 2
>If the system has the symmetry of $\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu})$, then the EOM is invariant. 

现在我们演技对称性与守恒的关系。本着李群的精神，我们考虑无穷小变换：
$$\phi(x^{\mu})\mapsto \phi^{'}(x^{'\mu}(x^{\mu}))=\phi(x^{\mu})+\alpha \Delta \phi(x^{\mu})$$
其中，无穷小参数为$\alpha$。相应地，为了保证$S$的不变性$\mathcal{L}$必须满足：
$$\mathcal{L}(\phi,\partial_{\mu}\phi)\mapsto \mathcal{L}^{'}(\phi^{'},\partial_{\mu}\phi^{'})+\alpha \partial_{\mu}\mathcal{J}^{\mu}(\phi,\partial_{\mu}\phi)$$
由于场是$x^{\mu}$的函数，$\mathcal{J}^{\mu}$也可以写成$x^{\mu}$的函数。要求$\mathcal{J}^{\mu}$在$x^{1,2,3}=\infty$时为零。上式之所以能保证作用量不变，是因为：
$$\int_{t_{1}}^{t_{2}} dt\int_{\mathbb{R}^{3}}d^{3}x \partial_{\mu}J^{\mu}(\phi,\partial_{\mu}\phi)$$