# Problem 1
## (a)

Consider performing a Lorentz transformation on the 4-momentum. Observe that the Jacobian matrix is exactly $\Lambda^{\alpha}{}_{\beta}$ since:
$$k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}\implies \frac{\partial k^{'\mu}}{\partial k^{\nu}}=\Lambda^{\mu}{}_{\nu}$$
We know that $d^{4}k^{'}=| \frac{\partial k^{'\mu}}{\partial k^{\nu}} |d^{4}k$. By definition, the Lorentz group preserves the Minkowski metric, and therefore their determinant can only be $\pm 1$. And we define our familiar Lorentz transformation to have determinant $+1$ without considering spatial inversion or time reversal. 

Then apparently $d^{4}k^{'}=d^{4}k$.
## (b)

Assume $k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}$. By part (a) we have:
 $$\int d^{4}k^{'} \delta(k^{'{2}}-m^{2})\theta(k^{'0})=\int d^{4}k \delta(k^{' 2}-m^{2})\theta(k^{'0})$$
View $k^{'2}$ as a function of $k^{2}$. We have $k^{'2}=k^{2}$ by Lorentz invariance. Then:
$$\begin{align}
\delta(k^{'2}-m^{2})= \delta(k^{2}-m^{2})
\end{align}$$
Next we show that $\text{sgn}(k^{0})$ is invariant. $k^{0}$ is certainly unchanged under rotation. Then consider a boost in $k^{3}$ direction. If $k^{0}>0$, we have $k^{'0}=\gamma k^{0}-\gamma v k^{3}\geq \gamma k^{0}-\gamma k^{3}=\gamma(\sqrt{ m^{2}+(k^{1})^{2}+(k^{2})^{2}+(k^{3})^{2} }-k^{3})>{0}$. If $k^{0}<0$, we have $k^{'0}=\gamma(-\sqrt{ m^{2}+(k^{1})^{2}+(k^{2})^{2}+(k^{3})^{2} }-k^{3})< 0$. Then without loss of generality, we conclude that $\text{sgn}(k^{0})$ is unchanged under Lorentz transformation. Then $\theta(k^{'0})=\theta(k^{0})$. 

Therefore:
$$\begin{align}
\int d^{4}k\delta(k^{'2}-m^{2})\theta(k^{'0}) 
 & = \int d^{4}k \delta(k^{2}-m^{2})\theta(k^{0})
\end{align}$$
## (c)
$$\begin{align}
k^{2}-m^{2} & = (k^{0})^{2}-|\mathbf{k} |^{2}-m^{2} \\
 & = (k^{0})^{2}-\omega_{\mathbf{k}}^{2}
\end{align}$$
Set $k^{2}-m^{2}=0$ to find:
$$k^{0}=\pm \omega_{\mathbf{k}}$$
## (d)

View $\omega_{\mathbf{k}}$ as a constant, and $k^{2}$ as a function of $k^{0}$. We have:
$$\begin{align}
\int d^{4}k\delta(k^{2}-m^{2})\theta(k^{0}) & = \int_{\mathbb{R}^{3}}d^{3}k\int_{-\infty}^{\infty}dk^{0}\delta(k^{2}-m^{2})\theta(k^{0}) \\
 & = \int_{\mathbb{R}^{3}} d^{3}k\int_{0}^{\infty}dk^{0}\delta(k^{2}-m^{2})\theta(k^{0})
\end{align}$$
We notice that the solution to $k^{2}-m^{2}$ is given by $k^{0}=\pm \omega_{\mathbf{k}}$. But since $k^{0}\geq{0}$, we have:
$$\begin{align}
\delta(k^{2}-m^{2}) & = \frac{\delta(k^{0}-\omega_{\mathbf{k}})}{|\partial k^{2} /\partial k^{0}  |}+ \frac{\delta(k^{0}+\omega_{\mathbf{k}})}{|  \partial rk^{2}  /k^{0} |} \\
 & = \frac{\delta(k^{0}-\omega_{\mathbf{k}})}{|\partial k^{2} /\partial k^{0} |} \\
 & = \frac{\delta(k^{0}-\omega_{\mathbf{k}})}{2k_{0}|_{k_{0}=\omega_{\mathbf{k}}}} \\
 & = \frac{\delta(k^{0}-\omega_{\mathbf{k}})}{2\omega_{\mathbf{k}}}
\end{align}$$
Then we have:
$$\begin{align}
\int d^{4}k\delta(k^{2}-m^{2})\theta(k^{0}) & = \int_{\mathbb{R}^{3}}d^{3}k \int_{0}^{\infty}dk^{0} \frac{\delta(k^{0}-\omega_{\mathbf{k}})}{2\omega_{\mathbf{k}}}\theta(k^{0}) \\
 & = \int_{\mathbb{R}^{3}}d^{3}k \frac{1}{2\omega_{\mathbf{k}}}
\end{align}$$
## (e)

Say $k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}$. Then:
$$\begin{align}
 &  \int d^{4}k\delta(k^{2}-m^{2})\theta(k^{0})= \int d^{4}k^{'}\delta(k^{'2}-m^{2})\theta(k^{'0}) \\
\implies & \int_{}d^{3}k \frac{1}{(2\pi)^{3}\omega_{\mathbf{k}}}=\int d^{3}k^{'} \frac{1}{(2\pi)^{3}\omega_{\mathbf{k}^{'}}}
\end{align}$$
It is indeed Lorentz-invariant.
# Problem 2
## (a1)

The lagrangian is $\mathcal{L}= \partial_{\mu}\phi ^{*}\partial^{\mu}\phi-m^{2}\phi^{2}$. Then we have:
$$\begin{align}
\pi_{1} & = \frac{\partial\mathcal{L}}{\partial \dot{\phi}}=\dot{\phi}^{*} \\
\pi_{2} & = \frac{\partial\mathcal{L}}{\partial   \dot{\phi}^{*}}=\dot{\phi}
\end{align}$$
Since $\pi_{1},\pi_{2}$ are complex conjugate to each other, denote them as $\pi,\pi ^{*}$. We then have:
$$\begin{align}
\mathcal{H} & = \pi ^{*}  \dot{\phi}^{*}+\pi  \dot{\phi}-\mathcal{L} \\
 & = \dot{\phi}  \dot{\phi}^{*}+  \dot{\phi}^{*} \dot{\phi}- \partial_{\mu}\phi ^{*}\partial^{\mu}\phi+m^{2}\phi ^{*}\phi \\
 & = \dot{\phi}  \dot{\phi}^{*}+(\nabla \phi ^{*})\cdot(\nabla \phi)+m^{2}\phi ^{*}\phi \\
 & = \pi ^{*}\pi+\nabla \phi ^{*}\cdot \nabla \phi+m^{2}\phi ^{*}\phi
\end{align}$$
Then:
$$H= \int d^{3}x  (\pi ^{*}\pi+\nabla \phi ^{*}\cdot\nabla \phi+m^{2}\phi ^{*}\phi)$$
## (a2)

Assume that the following fields have the same time $t$. We suppress the variable $t$. We have:
$$\begin{align}
[\phi(\mathbf{x}^{'}),\pi ^{*}(\mathbf{x})\pi(\mathbf{x})] & = \phi(\mathbf{x}^{'})\pi ^{*}(\mathbf{x})\pi(\mathbf{x})- \pi ^{*}(\mathbf{x})\pi(\mathbf{x})\phi(\mathbf{x}^{'}) \\
 & = \pi ^{*}\phi \pi-\pi ^{*}\pi \phi \\
 & = \pi ^{*}(i\delta^{3}(\mathbf{x}^{'}-\mathbf{x})+\pi \phi)-\pi ^{*}\pi \phi \\
 & = i\pi ^{*}\delta^{3}(\mathbf{x}^{'}-\mathbf{x})
\end{align}$$
$$\begin{align}
[\phi(\mathbf{x}^{'}),\nabla \phi ^{*}(\mathbf{x})\cdot \nabla \phi(\mathbf{x})] & = \phi(\mathbf{x}^{'})\nabla \phi ^{*}(\mathbf{x})\cdot \nabla \phi (\mathbf{x})-\nabla \phi ^{*}(\mathbf{x})\cdot \nabla \phi(\mathbf{x}) \phi(\mathbf{x}^{'}) \\
 & = \nabla \phi ^{*}\cdot \phi \nabla \phi-\nabla \phi ^{*}\cdot (\nabla \phi )\phi \\
 & = \nabla \phi ^{*}\cdot (\nabla \phi)\phi-\nabla \phi ^{*}\cdot(\nabla \phi)\phi \\
 & = 0
\end{align}$$
$$\begin{align}
[\phi(\mathbf{x}^{'}),\phi ^{*}(\mathbf{x})\phi(\mathbf{x})] & = \phi(\mathbf{x}^{'})\phi ^{*}(\mathbf{x})\phi(\mathbf{x})-\phi ^{*}(\mathbf{x})\phi(\mathbf{x})\phi(\mathbf{x}^{'}) \\
 & = \phi ^{*}(\mathbf{x})\phi(\mathbf{x})\phi(\mathbf{x}^{'})-\phi ^{*}(\mathbf{x})\phi(\mathbf{x})\phi(\mathbf{x}^{'}) \\
 & =0
\end{align}$$
Then we have:
$$\begin{align}
[\phi(\mathbf{x}^{'}),H] & = \left[ \phi(x^{'}),\int d^{3}x(\pi ^{*}\pi+\nabla \phi ^{*}\cdot\nabla \phi+m^{2}\phi ^{*}\phi) \right] \\
 & = \int d^{3}x([\phi,\pi ^{*}\pi]+[\phi,\nabla \phi ^{*}\cdot \nabla \phi]+m^{2}[\phi,\phi ^{*}\phi]) \\
 & = \int d^{3}x i\pi(\mathbf{x})\delta^{3}(\mathbf{x}^{'}-\mathbf{x}) \\
 & = i\pi ^{*}(\mathbf{x}^{'}) 
\end{align}$$
From Heisenberg's EOM we get:
$$\partial_{t}\phi=\pi ^{*}\tag{1}$$
Similarly, we compute:
$$\begin{align}
[\pi(\mathbf{x}^{'}),\pi ^{*}(\mathbf{x})\pi(\mathbf{x})] & = 0
\end{align}$$
$$\begin{align}
[\pi(\mathbf{x}^{'}),\nabla \phi ^{*}\cdot \nabla \phi] & = \pi \nabla \phi ^{*}\cdot \nabla \phi-\nabla \phi ^{*}\cdot \nabla \phi \pi \\
 & = \nabla \phi ^{*}\cdot \nabla(\pi(\mathbf{x}^{'})\phi(\mathbf{x}))-\nabla \phi ^{*}\cdot \nabla \phi \pi \\
 & = \nabla \phi ^{*}\cdot \nabla(\phi(\mathbf{x})\pi(\mathbf{x}^{'})-i\delta^{3}(\mathbf{x}-\mathbf{x}^{'}))-\nabla \phi ^{*}\cdot \nabla \phi \pi \\
 & = -i\nabla \phi ^{*}\cdot \nabla\delta^{3}(\mathbf{x}-\mathbf{x}^{'})
\end{align}$$
$$\begin{align}
[\pi(\mathbf{x}^{'}),\phi ^{*}(\mathbf{x})\phi(x)] & = \pi \phi ^{*}\phi-\phi ^{*}\phi \pi \\
 & = \phi ^{*}\pi \phi-\phi ^{*}\phi \pi \\
 & = \phi ^{*}(-i\delta^{3}(\mathbf{x}-\mathbf{x}^{'})+ \phi \pi)-\phi ^{*}\phi \pi \\
 & = -i\phi ^{*}\delta^{3}(\mathbf{x}-\mathbf{x}^{'})
\end{align}$$
Then we have:
$$\begin{align}
[\pi(\mathbf{x}^{'}),H] & = \int d^{3}x([\pi(\mathbf{x}^{'}),\pi ^{*}(\mathbf{x})\pi(\mathbf{x})]+ [\pi(\mathbf{x}^{'}),\nabla \phi ^{*}\cdot \nabla \phi]+m^{2}[\pi(\mathbf{x}^{'}),\phi ^{*}(\mathbf{x})\phi(\mathbf{x})]) \\
 & = -i \int d^{3}x \nabla \phi ^{*}(\mathbf{x})\cdot \nabla\delta^{3}(\mathbf{x}-\mathbf{x}^{'})-im^{2}\int d^{3}x \phi ^{*}(\mathbf{x})\delta^{3}(\mathbf{x}-\mathbf{x}^{'}) \\
 & = -i \int d^{3}x \nabla \cdot(\nabla \phi ^{*}\delta^{3}(\mathbf{x}-\mathbf{x}^{'} ))+ i \int d^{3}x \delta^{3}(\mathbf{x}-\mathbf{x}^{'})\nabla^{2}\phi^{*}-im^{2}\phi ^{*}(\mathbf{x}^{'}) \\ & = i\nabla^{2}\phi ^{*}(\mathbf{x}^{'})-im^{2}\phi ^{*}(\mathbf{x}^{'})

\end{align}$$
The divergence term vanishes because that integral over $\mathbb{R}^{3}$ can be viewed as the limit of integrating over a big box. By divergence theorem, it's just an integral over the boundary of the box. Since $\mathbf{x}^{'}$ is finite, we can always choose a box that is large enough so that $\mathbf{x}^{'}$ is within the box, and the surface integral vanishes.

From Heisenberg's EOM we get:
$$\partial_{t}\pi=\nabla^{2}\phi ^{*}-m^{2}\phi ^{*}\tag{2}$$
Taking derivative of (1) to get $\partial_{t}^{2}\phi=\partial_{t}\pi ^{*}\implies \partial_{t}\pi=\partial_{t}^{2}\phi ^{*}$. Then equate this with (2) to get:
$$\partial_{t}^{2}\phi ^{*}=\nabla^{2}\phi ^{*}-m^{2}\phi ^{*}\implies(\Box^{2}+m^{2})\phi ^{*}=0$$
Similarly, we can also obtain $(\Box^{2}+m^{2})\phi=0$.
## (b)

Set:
$$\begin{align}
 & \phi(\mathbf{x} )=\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}  (a_{\mathbf{p} }e^{i\mathbf{p} \cdot \mathbf{x}}+a^{\dagger}_{\mathbf{p}}e^{-i\mathbf{p}\cdot \mathbf{x}}) \\
 & \pi(\mathbf{x})= \int \frac{d^{3}p}{(2\pi)^{3}}\left( -i \sqrt{ \frac{1}{2\omega_{\mathbf{p}}} }  \right)(a_{\mathbf{p}}e^{i\mathbf{p}\cdot \mathbf{x}}-a_{\mathbf{p}}^{\dagger}e^{-i\mathbf{p}\cdot \mathbf{x}})
\end{align}$$
We compute:
$$\begin{align}
\int d^{3}x \pi ^{\dagger}(\mathbf{x})\pi(\mathbf{x}) & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{4 \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}}}(e^{-i\mathbf{p}\cdot \mathbf{x}}a_{\mathbf{p}}^{\dagger}-e^{i\mathbf{p}\cdot \mathbf{x}}a_{\mathbf{p}})(e^{i\mathbf{p}^{'}\cdot \mathbf{x} }a_{\mathbf{p}^{'}}-e^{-i\mathbf{p}^{'}\cdot \mathbf{x}}a_{\mathbf{p}^{'}}^{\dagger}) \\
 & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{4\omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}}}(e^{-i\mathbf{p}\cdot \mathbf{x}}a^{\dagger}_{\mathbf{p}}-e^{-i\mathbf{p}\cdot \mathbf{x}}a_{-\mathbf{k}})(e^{i\mathbf{p}^{'}\cdot \mathbf{x}}a_{\mathbf{p}^{'}}-e^{i\mathbf{p}\cdot \mathbf{x}}a^{\dagger}_{-\mathbf{p}^{'}} ) \\
 & = \int \frac{d^{3}p d^{3}p^{'}}{(2\pi )^{3}} \frac{1}{4\omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}}}\delta^{3}(\mathbf{p}^{'}-\mathbf{p})(a^{\dagger}_{\mathbf{p}}-a^{}_{-\mathbf{p}})(a_{\mathbf{p}^{'}}-a_{-\mathbf{p}^{'}}^{\dagger}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{4\omega_{\mathbf{p}}^{2}}(a^{\dagger}_{\mathbf{p}}-a_{-\mathbf{p}} )(a_{\mathbf{p}}-a^{\dagger}_{-\mathbf{p}})
\end{align}$$






