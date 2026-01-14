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

考虑Bloch wave $\ket{\psi_{n,\vec{q}}}$。其中，Hamiltonian $H= \frac{p^{2}}{2m}+V$是常量，而边界条件为$\psi_{n,\vec{q}}(\vec{r}+\vec{R})=e^{i\vec{q}\cdot \vec{R}}\psi_{n,\vec{q}}(\vec{r})$ depending on $\vec{q}$。所以不符合Berry phase的formalism。但是考虑：
$$\begin{align}
 & H\ket{\psi_{n,\vec{q}}} =\epsilon_{n,\vec{q}}\ket{\psi_{n,\vec{q}}}  \\
\implies & e^{-i\vec{q}\cdot \vec{r}} He^{i\vec{q}\cdot \vec{r}}e^{-i\vec{q}\cdot \vec{r}}\ket{\psi_{n,\vec{q}}} =\epsilon_{n,\vec{q}}e^{-i\vec{q}\cdot \vec{r}}\ket{\psi_{n,\vec{q}}} 
\end{align}$$
令$H(\vec{q})=e^{-i\vec{q}\cdot \vec{r}}He^{i\vec{q}\cdot \vec{r}},\ \ket{u_{n,\vec{q}}}=e^{-i\vec{q}\cdot \vec{r}}\ket{\psi_{n,\vec{q}}}$。则$H(\vec{q})$ depends on $\vec{q}$，边界条件为$u_{n,\vec{q}}(\vec{r}+\vec{R})=u_{n,\vec{q}}(\vec{r})$不取决于$\vec{q}$。符合Berry phase formalism。

于是将$\vec{q}$作为parameter可以引出Berry phase。
## Ex:

例如外加磁场时，$\vec{q}$形成闭合回路。可以计算Berry phase。
## Ex: Zak's phase

一维晶格外加电场时，$\vec{q}$线性增大。考虑open path Berry phase：
$$\gamma_{n}=i \int_{\text{BZ}}dq \bra{u_{n,q}} \frac{\partial}{\partial q}\ket{u_{n,q}} $$
我们宣称，可以选择规范使得$\gamma_{n}$是gauge-independent的。注意到$\ket{\psi_{n,q}},\ket{\psi_{n,q+G}}$满足的边界条件一样，原始的Hamiltonian一样，所以$\ket{\psi_{n,q}},\ket{\psi_{n,q+G}}$是一个态。那么可以选择规范使得：
$$\ket{u_{n,q+G}} =\ket{u_{n,q}}  $$
若对于$\ket{u_{n,q}}$再作一次$U(1)$变换，令$\ket{u_{n,q}^{'}}=e^{i\theta(q)}\ket{u_{n,q}}$，使得规范的选择符合：
$$\begin{align}
 \ket{u_{n,q+G}} =\ket{u_{n,q}} 
\end{align}$$
那么：
$$\begin{align}
\gamma_{n}^{'} & =i \int_{\text{BZ}}dq \bra{u_{n,q}^{'}}  \frac{\partial}{\partial q}\ket{u_{n,q}^{'}}  \\
 & = - [\theta(q)]^{G}_{0}+\gamma_{n}
\end{align}$$
而我们有：
$$\begin{align}
 & u^{'}_{n,q+G}(r)=u_{n,q}^{'}(r) \\
\implies & e^{i\theta(q+G)}\ket{u_{n,q+G}} =e^{i\theta(q)} \ket{u_{n,q}}  \\
\implies & \theta(q+G)-\theta_{}(q)=2\pi n
\end{align}$$
所以$\gamma_{n}^{'}=\gamma_{n}$。我们只考虑$\{ \gamma_{n} \} / 2\pi \mathbb{Z}$。
