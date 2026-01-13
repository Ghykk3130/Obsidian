# 1. Berry curvature

我们已经知道Berry connection是一个1-form：
$$\vec{A}_{n}(\vec{R})= i \bra{n}  \frac{\partial}{\partial \vec{R}}\ket{n} $$
可以定义Berry curvature为一个2-form：
$$\Omega_{\mu \nu}^n(\vec{R})= dA_{n}= \frac{\partial}{\partial R^\mu}A^n_{\nu}- \frac{\partial}{\partial R^{\nu}}A^n_{\mu}$$
于是对Berry phase积分用Stokes公式有：
$$\gamma_{n}= \int_{\partial \Sigma}dR^{\mu}A^n_{\mu}=\int dR^\mu \wedge dR^{\nu} \frac{1}{2}\Omega^n_{\mu\nu}$$

# 2. 2-level system example

考虑一个Hamiltonian：
$$H=\vec{h}\cdot \vec{\sigma}$$
显然有两个本征态，为2-level system。考虑$\vec{h}$为$h(\sin \theta \cos \phi,\sin \theta \sin \phi,\cos \theta)$。则本征态为：
$$\ket{u_{+}} = \begin{pmatrix}
\cos \frac{\theta}{2}e^{-i\phi} \\
\sin \frac{\theta}{2} 
\end{pmatrix},\ \ket{u_{-}} = \begin{pmatrix}
\sin \frac{\theta}{2}e^{-i\phi} \\
-\cos \frac{\theta}{2}
\end{pmatrix}$$
那么容易计算：
$$\begin{align}
A^{-}_{\theta}=0,\ A^{-}_{\phi}= \sin ^{2} \frac{\theta}{2}
\end{align}$$
于是：
$$\Omega^{-}_{\theta \phi}= \partial_{\theta} A^{-}_{\phi}- \partial_{\phi}A^{-}_{\theta}= \frac{1}{2}\sin \theta$$
若$\theta=\theta(R_{1},R_{2}),\phi=\phi(R_{1},R_{2})$，那么：
$$\Omega^{-}_{R_{1}R_{2}}= \Omega^{-}_{\theta \phi} \frac{\partial(\theta,\phi)}{\partial(R_{1},R_{2})}= -\frac{1}{2} \frac{\partial(\cos \theta,\phi)}{\partial(R_{1},R_{2})}= \frac{1}{2} \frac{\partial(\phi,\cos \theta)}{\partial(R_{1},R_{2})}$$


