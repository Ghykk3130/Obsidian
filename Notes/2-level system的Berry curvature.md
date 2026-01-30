
考虑一个二能级系统Hamiltonian：
$$H(\mathbf{k})=\mathbf{d}(\mathbf{k})\cdot \boldsymbol{\tau}$$
不妨取将$\mathbf{d}$球坐标化，即$\mathbf{d}=d(\sin \theta \cos \phi,\sin \theta \sin \phi,\cos \theta)$。那么容易得到本征态：
$$\ket{u_{+}} =\begin{pmatrix}
\cos \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix},\ \ket{u_{-}} =\begin{pmatrix}
\sin \frac{\theta}{2} \\
-e^{i\phi}\cos  \frac{\theta}{2}
\end{pmatrix}$$
计算$\ket{u_{+}}$的Berry connection：
$$\begin{align}
 & A^{+}_{\phi  }= i\bra{u_{+}} \frac{\partial}{\partial \phi}\ket{u_{+}} =- \sin ^{2} \frac{\theta}{2} \\
 & A^{+}_{\theta}=i\bra{u_{+}}  \frac{\partial}{\partial \theta}\ket{u_{+} }=0   
\end{align}$$
则：
$$\Omega_{\theta \phi}^{+}= \partial_{\theta}A^{+}_{\phi}-\partial_{\phi}A^{+}_{\theta}=- \frac{1}{2}\sin \theta$$
接着，我们想获得$\Omega^{+}_{d_{1},d_{2}}$。注意到$\boldsymbol{\Omega}^{+}$为一个协变2-form，根据张量不变性：
$$\begin{align}
\Omega^{+}_{\theta \phi} d\theta \wedge d\phi & = \Omega_{\theta \phi}^{+}\left( \frac{\partial \theta}{\partial d_{1}}dd_{1}+ \frac{\partial \theta}{\partial d_{2}}dd_{2} \right)\wedge\left( \frac{\partial \phi}{\partial d_{1}}dd_{1}+ \frac{\partial \phi}{\partial d_{2}} dd_{2}\right) \\
 & = \Omega_{\theta \phi}^{+}\left( \frac{\partial \theta}{\partial d_{1}} \frac{\partial \phi}{\partial d_{2}}- \frac{\partial \theta}{\partial d_{2}} \frac{\partial \phi}{\partial d_{1}} \right)dd_{1}\wedge dd_{2} \\
 & = \Omega_{d_{1},d_{2}}^{+}dd_{1}\wedge dd_{2}
\end{align}$$
所以：
$$\Omega^{+}_{d_{1},d_{2}}=\Omega_{\theta \phi}^{+} \frac{\partial(\theta,\phi)}{\partial (d_{1},d_{2})}= \frac{1}{2} \frac{\partial(\cos \theta,\phi)}{\partial (d_{1},d_{2})}$$




若$\theta=\theta(R_{1},R_{2}),\phi=\phi(R_{1},R_{2})$，那么容易证明：
$$\Omega^{-}_{R_{1}R_{2}}= \Omega^{-}_{\theta \phi} \frac{\partial(\theta,\phi)}{\partial(R_{1},R_{2})}= -\frac{1}{2} \frac{\partial(\cos \theta,\phi)}{\partial(R_{1},R_{2})}= \frac{1}{2} \frac{\partial(\phi,\cos \theta)}{\partial(R_{1},R_{2})}$$
于是：
$$\begin{align}
 & \Omega^{-}_{xy}= \frac{z}{2h^{3}},\ \Omega_{yz}^{-}= \frac{x}{2h^{3}},\ \Omega_{zx}^{-}= \frac{y}{2h^{3}}
\end{align}$$
于是，有矢量形式的Berry curvature：
$$\vec{\Omega}_{-}= \frac{\vec{h}}{2h^{3}}$$
这相当于一个原点处monopole产生的场，即：
$$\nabla \cdot \vec{\Omega}_{-}=2\pi\delta(\vec{h})$$
故：
$$\gamma_{-}=\oint d\vec{S}\cdot \vec{\Omega}_{-}=2\pi$$
我们发现，原点$\vec{h}=0$处$\ket{u_{\pm}}$重合。所以Berry curvature的源的奇点对应态重合的点。