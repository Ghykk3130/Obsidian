
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
$$\Omega^{+}_{d_{1},d_{2}}=\Omega_{\theta \phi}^{+} \frac{\partial(\theta,\phi)}{\partial (d_{1},d_{2})}$$
可以计算：
$$\Omega_{d_{1},d_{2}}^{+}=- \frac{d_{3}}{2d^{3}},\ \Omega^{+}_{d_{2},d_{3}}= -\frac{d_{1}}{2d^{3}},\ \Omega_{d_{3},d_{1}}^{+}= -\frac{d_{2}}{2d^{3}}$$
取一个在BZ中包裹Weyl点的体积$V$。计算Chern number可以发现：
$$C= \frac{1}{2\pi} \int_{\partial V}\boldsymbol{\Omega}=-1$$
类似地：
$$\Omega_{d_{1},d_{2}}^{-}= \frac{d_{3}}{2d^{3}},\ \Omega^{-}_{d_{2},d_{3}}= \frac{d_{1}}{2d^{3}},\ \Omega_{d_{3},d_{1}}^{-}= \frac{d_{2}}{2d^{3}}$$
$$C=1$$
所以可以猜想Poisson方程：
$$\nabla \cdot\left( \frac{\boldsymbol{\Omega}}{2\pi} \right)=\sum_{i}\chi_{i}\delta^{3}(\mathbf{k}-\mathbf{k}_{i})$$
其中$\mathbf{k}_{i}$为Weyl node位置，$\chi_{i}$为Weyl node chirality。

同理还可以计算$\Omega^{+}_{k_{i},k_{j}}$：
$$\begin{align}
\Omega^{+}_{k_{i},k_{j}} & = \Omega_{d_{l},d_{m}}^{+} \frac{\partial(d_{l},d_{m})}{\partial(k_{i},k_{j})} \\
  & = - \epsilon_{lmn}\frac{d_{n}}{2d^{3}}\left( \frac{\partial d_{l}}{\partial k_{i}} \frac{\partial d_{m}}{\partial k_{j} }- \frac{\partial d_{l}}{\partial k_{j}} \frac{\partial d_{m}}{\partial k_{i}}  \right) \\
 & = - \frac{\mathbf{d}}{2d^{3}}\cdot\left( \frac{\partial \mathbf{d}}{\partial k_{i}}\times \frac{\partial \mathbf{d}}{\partial k_{j}} \right)
\end{align}$$
