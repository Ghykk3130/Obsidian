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
显然有两个本征态，为2-level system。考虑$\vec{h}=(x,y,z)=h(\sin \theta \cos \phi,\sin \theta \sin \phi,\cos \theta)$。则本征态为：
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

>[!Note] Definition 1
>Define Chern number: $C=\frac{1}{\pi}\oint d\vec{S}\cdot \vec{\Omega}$

Chern number统计积分面包裹区域内的monopole数量的算术和。我们刚刚得到了$C^{-}=1$。容易计算$C^{+}=-1$。

# 3. Berry phase in Bloch bands

考虑Bloch wave $\ket{\psi_{n,\vec{q}}}$。将$\vec{q}$作为parameter可以引出Berry phase。

例如外加磁场时，$\vec{q}$形成闭合回路。

例如一维晶格外加电场时，$\vec{q}$线性增大。我们可以强制构建$u_{n,{q}}({r})=e^{i{q}r}\psi_{n,q}(r)$。由此可以引出Berry phase：
$$\gamma_{n}= \int_{\text{BZ}}dq i \bra{u_{n,q}}  \frac{\partial}{\partial q}\ket{u_{n,q}} $$
注意到这不是环路积分，所以不一定有规范不变性。但是：
$$\begin{align}
\gamma_{n} & = \int_{\text{BZ}} dq i \bra{u_{n,q}} \frac{\partial}{\partial q}\ket{u_{n,q}}  \\
 & = \int dq i\left( - r+\bra{\psi_{n,q}}  \frac{\partial}{\partial{q}}\ket{\psi_{n,q}}  \right)
\end{align}$$