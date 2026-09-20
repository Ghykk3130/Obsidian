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

Assume that the following fields have the same time $t$. We have:
$$\begin{align}
[\phi({x}^{'}),\pi ^{*}({x})\pi({x})] & = \phi({x}^{'})\pi ^{*}({x})\pi({x})- \pi ^{*}({x})\pi({x})\phi({x}^{'}) \\
 & = \pi ^{*}\phi \pi-\pi ^{*}\pi \phi \\
 & = \pi ^{*}(i\delta^{3}({x}^{'}-{x})+\pi \phi)-\pi ^{*}\pi \phi \\
 & = i\pi ^{*}\delta^{3}(\mathbf{x}^{'}-\mathbf{x})
\end{align}$$
$$\begin{align} [\phi({x}^{'}),\nabla \phi ^{*}({x})\cdot \nabla \phi({x})] & = \phi({x}^{'})\nabla \phi ^{*}({x})\cdot \nabla \phi ({x})-\nabla \phi ^{*}({x})\cdot \nabla \phi({x}) \phi({x}^{'}) \\ & = \nabla \phi ^{*}\cdot \phi \nabla \phi-\nabla \phi ^{*}\cdot (\nabla \phi )\phi \\ & = \nabla \phi ^{*}\cdot (\nabla \phi)\phi-\nabla \phi ^{*}\cdot(\nabla \phi)\phi \\ & = 0 \end{align}$$
$$\begin{align} [\phi({x}^{'}),\phi ^{*}({x})\phi({x})] & = \phi({x}^{'})\phi ^{*}({x})\phi({x})-\phi ^{*}({x})\phi({x})\phi({x}^{'}) \\ & = \phi ^{*}({x})\phi({x})\phi({x}^{'})-\phi ^{*}({x})\phi({x})\phi({x}^{'}) \\ & =0 \end{align}$$
Then we have:
$$\begin{align} [\phi({x}^{'}),H] & = \left[ \phi(x^{'}),\int d^{3}x(\pi ^{*}\pi+\nabla \phi ^{*}\cdot\nabla \phi+m^{2}\phi ^{*}\phi) \right] \\ & = \int d^{3}x([\phi,\pi ^{*}\pi]+[\phi,\nabla \phi ^{*}\cdot \nabla \phi]+m^{2}[\phi,\phi ^{*}\phi]) \\ & = \int d^{3}x i\pi({x})\delta^{3}({\mathbf{x}}^{'}-{\mathbf{x}}) \\ & = i\pi ^{*}({x}^{'}) \end{align}$$
From Heisenberg's EOM we get:
$$\partial_{t}\phi=\pi ^{*}\tag{1}$$
Similarly, we compute:

$$\begin{align} [\pi({x}^{'}),\pi ^{*}({x})\pi({x})] & = 0 \end{align}$$
$$\begin{align} [\pi({x}^{'}),\nabla \phi ^{*}\cdot \nabla \phi] & = \pi \nabla \phi ^{*}\cdot \nabla \phi-\nabla \phi ^{*}\cdot \nabla \phi \pi \\ & = \nabla \phi ^{*}\cdot \nabla(\pi({x}^{'})\phi({x}))-\nabla \phi ^{*}\cdot \nabla \phi \pi \\ & = \nabla \phi ^{*}\cdot \nabla(\phi({x})\pi({x}^{'})-i\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'}))-\nabla \phi ^{*}\cdot \nabla \phi \pi \\ & = -i\nabla \phi ^{*}\cdot \nabla\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'}) \end{align}$$
$$\begin{align} [\pi({x}^{'}),\phi ^{*}({x})\phi(x)] & = \pi \phi ^{*}\phi-\phi ^{*}\phi \pi \\ & = \phi ^{*}\pi \phi-\phi ^{*}\phi \pi \\ & = \phi ^{*}(-i\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'})+ \phi \pi)-\phi ^{*}\phi \pi \\ & = -i\phi ^{*}\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'}) \end{align}$$
Then we have:
$$\begin{align} [\pi({x}^{'}),H] & = \int d^{3}x([\pi({x}^{'}),\pi ^{*}({x})\pi({x})]+ [\pi({x}^{'}),\nabla \phi ^{*}\cdot \nabla \phi]+m^{2}[\pi({x}^{'}),\phi ^{*}({x})\phi({x})]) \\ & = -i \int d^{3}x \nabla \phi ^{*}({x})\cdot \nabla\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'})-im^{2}\int d^{3}x \phi ^{*}({x})\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'}) \\ & = -i \int d^{3}x \nabla \cdot(\nabla \phi ^{*}\delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'} ))+ i \int d^{3}x \delta^{3}({\mathbf{x}}-{\mathbf{x}}^{'})\nabla^{2}\phi^{*}-im^{2}\phi ^{*}({x}^{'}) \\ & = i\nabla^{2}\phi ^{*}({x}^{'})-im^{2}\phi ^{*}({x}^{'}) \end{align}$$
The divergence term vanishes because that integral over $\mathbb{R}^{3}$ can be viewed as the limit of integrating over a big box. By divergence theorem, it's just an integral over the boundary of the box. Since ${x}^{'}$ is finite, we can always choose a box that is large enough so that ${x}^{'}$ is within the box, and the surface integral vanishes.

From Heisenberg's EOM we get:
$$\partial_{t}\pi=\nabla^{2}\phi ^{*}-m^{2}\phi ^{*}\tag{2}$$
Taking derivative of (1) to get $\partial_{t}^{2}\phi=\partial_{t}\pi ^{*}\implies \partial_{t}\pi=\partial_{t}^{2}\phi ^{*}$. Then equate this with (2) to get:
$$\partial_{t}^{2}\phi ^{*}=\nabla^{2}\phi ^{*}-m^{2}\phi ^{*}\implies(\Box^{2}+m^{2})\phi ^{*}=0$$
Similarly, we can also obtain $(\Box^{2}+m^{2})\phi=0$.
## (b)

Set:
$$\begin{align} & \phi({x} )=\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{{\mathbf{p}}} }} (a_{{p} }e^{-i{p} \cdot {x}}+b^{\dagger}_{{p}}e^{i{p}\cdot {x}}) \\ &  \\
 & \phi ^{*}(x)= \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}(a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}+ b_{\mathbf{p}}e^{-ip\cdot x}) \\
 & \pi(x)= \partial_{t}\phi ^{*}(x)= \int \frac{d^{3}p}{(2\pi)^{3}} i \sqrt{ \frac{\omega_{\mathbf{p}}}{2} }(a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}-b_{\mathbf{p}}e^{-ip\cdot x}) \\
 & \pi ^{*}(x)= \partial_{t}\phi_{x}= \int \frac{d^{3}p}{(2\pi)^{3}}\left( -i \sqrt{  \frac{\omega_{\mathbf{p}}}{2} }(a_{\mathbf{p}}e^{-ip\cdot x}-b^{\dagger}_{\mathbf{p}}e^{ip\cdot x}) \right) \end{align}$$
We compute:
$$\begin{align}
\int d^{3}x \pi ^{*}\pi & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} }}{2}(a_{\mathbf{p}}e^{-ip\cdot x}-b^{\dagger}_{\mathbf{p}}e^{ip\cdot x})(a^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}-b_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}) \\
 & = \int d^{3}pd^{3}p^{'} \frac{1}{(2\pi)^{3}} \frac{\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} }}{2}[a_{\mathbf{p}}a^{\dagger}_{\mathbf{p}^{'}}\delta^{3}(\mathbf{p}-\mathbf{p}^{'})- b^{\dagger}_{\mathbf{p}}a^{\dagger}_{\mathbf{p}^{'}}\delta^{3}(\mathbf{p}+\mathbf{p}^{'})- a_{\mathbf{p}}b_{\mathbf{p}^{'}}\delta^{3}(\mathbf{p}+\mathbf{p}^{'})+ b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}^{'}}\delta^{3}(\mathbf{p}-\mathbf{p}^{'}) ] \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{\omega_{\mathbf{p}}}{2}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}})
\end{align}$$
Similarly:
$$\begin{align}
\int d^{3}x \nabla \phi ^{*} \cdot \nabla \phi & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6} } \frac{1}{2\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} }} (i\mathbf{p}a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}-i\mathbf{p}b_{\mathbf{p}}e^{-ip\cdot x})(-i\mathbf{p}^{'}a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}+i\mathbf{p}^{'}b^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = \int  \frac{d^{3}p}{(2\pi)^{3}} \frac{|\mathbf{p}|^{2}}{2}( a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}+b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}})
\end{align}$$
$$\begin{align}
\int d^{3}x m^{2}\phi ^{*}\phi & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6} } \frac{1}{2\sqrt{ \omega_{\mathbf{p}}\omega_{\mathbf{p}^{'}} }}( a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}+b_{\mathbf{p}}e^{-ip\cdot x})(a_{\mathbf{p}^{' }}e^{-ip^{'}\cdot x}+ib^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{m^{2}}{2\omega_{\mathbf{p}}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}+a_{\mathbf{p}}b_{-\mathbf{p}}e^{-2ip^{0}t}+b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}})
\end{align}$$
Then we have:
$$\begin{align}
H & = \int d^{3}x(\pi ^{*}\pi+\nabla \phi ^{*}\cdot \nabla \phi+m^{2}\phi ^{*}\phi) \\
 & =  \int \frac{d^{3}p}{(2\pi)^{3}} \frac{\omega_{\mathbf{p}}}{2}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}}) \\
 & +\int  \frac{d^{3}p}{(2\pi)^{3}} \frac{|\mathbf{p}|^{2}}{2\omega_{\mathbf{p}}}( a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}+b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}}) \\
 & +\int \frac{d^{3}p}{(2\pi)^{3}} \frac{m^{2}}{2\omega_{\mathbf{p}}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}+a_{\mathbf{p}}b_{-\mathbf{p}}e^{-2ip^{0}t}+b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{\omega_{\mathbf{p}}}{2}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}}) \\
 & + \int \frac{d^{3}p}{(2\pi)^{3}} \frac{\omega_{\mathbf{p}}}{2}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}+a_{\mathbf{p}}b_{-\mathbf{p}}e^{-2ip^{0}t}+b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \omega_{\mathbf{p}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}}) + \int \frac{d^{3}p}{(2\pi)^{3}}(b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}) \\
 & + \int \frac{d^{3}p}{(2\pi)^{3}}(a_{\mathbf{p}}b_{-\mathbf{p}}e^{-2ip^{0}t}-b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t})
\end{align}$$
Observe that the last two terms vanish. Because:
$$\begin{align}
\int d^{3}p (b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}) & = \int d^{3}p (b^{\dagger}_{-\mathbf{p}}a^{\dagger}_{\mathbf{p}}-a^{\dagger}_{-\mathbf{p}}b^{\dagger}_{\mathbf{p}}) \\
 & = -\int d^{3}p(b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}) \\
\implies \int d^{3}p (b^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}) & =0
\end{align}$$
Similarly, $\int d^{3}p (a_{\mathbf{p}}b_{-\mathbf{p}}-b_{\mathbf{p}}a_{-\mathbf{p}})=0$. Then:
$$H= \int \frac{d^{3}p}{(2\pi)^{3}}\omega_{\mathbf{p}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}})$$
Clearly, $a_{\mathbf{p}},\ b^{\dagger}_{\mathbf{p}}$ are independent with each other. Since they both correspond to $\omega_{\mathbf{p}}=\sqrt{ \vert{}\mathbf{p}\vert{}^{2}+m^{2} }$, meaning that they represent two different kinds of bosons with the same $m$.
## (c)

We have:
$$\begin{align}
\int d^{3}x \phi ^{*}\pi ^{*} & = \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}}\left( - \frac{i}{2} \right) \sqrt{ \frac{\omega_{\mathbf{p}^{'}}}{\omega_{\mathbf{p}}} }(a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}+b_{\mathbf{p}}e^{-ip\cdot x})(a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}-b^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = - \frac{i}{2} \int \frac{d^{3}p}{(2\pi)^{3}}( a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}+b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}-a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}})
\end{align}$$
Similarly:
$$\begin{align}
\int d^{3}x \pi \phi & =  \int d^{3}x \frac{d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{i}{2} \sqrt{ \frac{\omega_{\mathbf{p}}}{\omega_{\mathbf{p}^{'}}} }(a_{\mathbf{p}}^{\dagger}e^{ip\cdot x}-b_{\mathbf{p}}e^{-ip\cdot x})(a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}+ b^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = \frac{i}{2} \int \frac{d^{3}p}{(2\pi)^{3}}( a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-b_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}+a^{\dagger}_{\mathbf{p}}b^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}-b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}}) 
\end{align}$$
Then:
$$\begin{align}
\int d^{3}x(\phi ^{*}\pi ^{*}-\pi \phi) & = - \frac{i}{2} \int \frac{d^{3}p}{(2\pi)^{3}}(2a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-2b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}})
\end{align}$$
Then:
$$Q=\frac{i}{2}\int d^{3}x(\phi ^{*}\pi ^{*}-\pi \phi)= \frac{1}{2}\int \frac{d^{3}p}{(2\pi)^{3}}(a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}-b_{\mathbf{p}}b^{\dagger}_{\mathbf{p}})$$
Obviously, the charge carried by the type created by $a^{\dagger}_{\mathbf{p}}$ is $\frac{1}{2}\int \frac{d^{3}p}{(2\pi)^{3}}a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}$. The charge carried by the type created by $b^{\dagger}_{\mathbf{p}}$ is $-\frac{1}{2}\int \frac{d^{3}p}{(2\pi)^{3}}b^{\dagger}_{\mathbf{p}}b_{\mathbf{p}}$.
# Problem 3
## (a)

We have:
$$\begin{align}
\frac{d}{dt}(f,g) & = i \int d^{3}x \frac{\partial}{\partial t}( f^{*} \partial_{0}g-g \partial_{0}f^{*}) \\
 & = i \int d^{3}x (\partial_{0}f^{*}\partial_{0}g+ f^{*}\partial_{0}^{2}g-\partial_{0}g \partial_{0}f^{*}- g\partial_{0}^{2}f^{*})  \\
 & = i \int d^{3}x (f^{*}\partial_{0}^{2}g-g\partial_{0}^{2}f^{*})
\end{align}$$
From Klein-Gordon equation:
$$\begin{align}
 & \partial_{0}^{2}g= \nabla^{2}g-m^{2}g \\
 & \partial_{0}^{2}f^{*}=\nabla^{2}f^{*}-m^{2}f^{*}
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}(f,g) & = i \int d^{3}x(f^{*}\nabla^{2}g-m^{2}f^{*}g-g\nabla^{2}f^{*}+m^{2}gf^{*}) \\
 & = i \int d^{3}x \nabla \cdot(f^{*}\nabla g)- i \int d^{3}x \nabla f^{*}\cdot \nabla g- i \int d^{3}x \nabla \cdot(g\nabla f^{*})+ i \int d^{3}x \nabla g\cdot \nabla f^{*} \\
 & = i \int d^{3}x \nabla \cdot(f^{*}\nabla g)-i \int d^{3}x \nabla \cdot(g\nabla f^{*}) \\
 & = 0
\end{align}$$
In the second to last line, the two integrals vanish since they are just two boundary terms. 
## (b)

We have:
$$\begin{align}
 & \phi_{H}(x) = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}(a_{\mathbf{p}}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}) \\
\implies & \int d^{3} x e^{-i \mathbf{p}\cdot \mathbf{x}}\phi_{H}(x)=  \int \frac{d^{3}p^{'}}{(2\pi)^{3}} \frac{1}{\sqrt{ 2\omega_{\mathbf{p}^{'}} }}(a_{\mathbf{p}}e^{-ip^{'0}t} e^{i(\mathbf{p}-\mathbf{p}^{'})\cdot \mathbf{x} }+a^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'0}t}e^{-i(\mathbf{p}+\mathbf{p}^{'})\cdot \mathbf{x}}) \\
\implies & \int d^{3}x e^{-i\mathbf{p}\cdot \mathbf{x}}\phi_{H}(x)= \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}(a_{\mathbf{p}}e^{-ip^{'0}t}+ a^{\dagger}_{-\mathbf{p}}e^{ip^{'0}t}) 
\end{align}$$
Similarly, we have:
$$\begin{align}
 & \pi_{H}(x)= \int \frac{d^{3}p}{(2\pi)}^{} \left( -i \sqrt{ \frac{\omega_{\mathbf{p}}}{2} }  \right)(a_{\mathbf{p}}e^{-ip\cdot x}-a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}) \\
\implies & \int d^{3} x e^{-i\mathbf{p}\cdot \mathbf{x}}\pi_{H}(x)= -i \sqrt{ \frac{\omega_{\mathbf{p}}}{2} }(a_{\mathbf{p}}e^{-ip^{'0}t}-a^{\dagger}_{-\mathbf{p}}e^{ip^{'0}t})
\end{align}$$
Then it's easy to solve:
$$\begin{align}
 & a_{\mathbf{p}}e^{-ip^{'0}t}= \frac{1}{2} \int d^{3}x e^{-i\mathbf{p}\cdot \mathbf{x}}\left( \sqrt{ 2\omega_{\mathbf{p}} }\phi_{H}(x)+ i \sqrt{ \frac{2}{\omega_{\mathbf{p}}} }\pi_{H}(x)  \right) \\
\implies & a_{\mathbf{P}}= \frac{1}{2} \int d^{3}x e^{ip\cdot x}\left( \sqrt{ 2\omega_{\mathbf{p}} }\phi_{H}(x)+i \sqrt{ \frac{2}{\omega_{\mathbf{p}}} }\pi_{H}(x) \right) \\
 & =   \int d^{3}x \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}( \omega_{\mathbf{p}}\phi_{H}(x)e^{ip\cdot x}+ i \pi_{H}(x)e^{ip\cdot x}) \\
 & = \int d^{3}x \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}(-i\phi_{H}(x)\partial_{0}e^{ip\cdot x}+ i e^{ip\cdot x}\partial_{0}\phi_{H}(x)) \\
 & = i \int d^{3}x \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}e^{ip\cdot x}  \overset{\leftrightarrow}{\partial_{0}}\phi_{H}(x) \\
 & = (f_{p}(x),\phi_{H}(x))
\end{align}$$
## (c)

From part (b), we get:
$$\begin{align}
a^{\dagger}_{\mathbf{p}} & = \left( \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }}\int d^{3}x  \omega_{\mathbf{p}}\phi_{H}(x)e^{ip\cdot x}+ i \pi_{H}(x)e^{ip\cdot x} \right)^{\dagger} \\
 & =  \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }} \int d^{3}x (\omega_{\mathbf{p}}\phi_{H}(x)e^{-ip\cdot x}-i\pi_{H}(x)e^{-ip\cdot x}) 
\end{align}$$
We have:
$$\begin{align}
[a_{\mathbf{k}},a^{\dagger}_{\mathbf{p}}] & = \left[  \frac{1}{\sqrt{ 2\omega_{\mathbf{k}} }}\int d^{3}x (\omega_{\mathbf{k}}\phi_{H}(x)e^{ik\cdot x}+i\pi_{H}(x)e^{ik\cdot x}), \frac{1}{\sqrt{ 2\omega_{\mathbf{p}} }} \int d^{3}x^{'}(\omega_{\mathbf{p}}\phi_{H}(x^{'})e^{-ip\cdot x^{'}}-i\pi_{H}(x^{'})e^{-ip\cdot x^{'}})\right] \\
 & = \frac{1}{2\sqrt{ \omega_{\mathbf{k}}\omega_{\mathbf{p}} }}\int d^{3}x d^{3}x^{'}(-i\omega_{\mathbf{k}}e^{ik\cdot x-ip\cdot x^{'}}[\phi_{H}(x),\pi_{H}(x^{'})]+i\omega_{\mathbf{p}}e^{ik\cdot x-ip\cdot x^{'}}[\pi_{H}(x),\phi_{H}(x^{'})]) \\
 & = \frac{1}{2\sqrt{ \omega_{\mathbf{k}}\omega_{\mathbf{p}} }} \int d^{3}x (\omega_{\mathbf{k}}e^{i(k-p)\cdot {x}}+\omega_{\mathbf{p}}e^{i(k-p)\cdot x}) \\
 & = \frac{1}{2\sqrt{ \omega_{\mathbf{k}}\omega_{\mathbf{p}} }} (2\pi)^{3}(\omega_{\mathbf{K}}\delta^{3}(\mathbf{k}-\mathbf{p})+\omega_{\mathbf{p}}\delta^{3}(\mathbf{k}-\mathbf{p})) \\
 & = (2\pi)^{3} \delta^{3}(\mathbf{k}-\mathbf{p})
\end{align}$$



