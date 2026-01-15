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
>Define Chern number: $C=\frac{1}{2\pi}\oint d\vec{S}\cdot \vec{\Omega}$

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

# 4. Anomalous velocity

在晶体中加恒电场$\vec{E}$。我们有：
$$H= \frac{p^{2}}{2m}+V+e\phi$$
由于$\phi(\vec{r})$破坏了周期势的对称性，我们不能考虑Bloch解。现考虑消去$e\phi$。考虑规范变换引出$\vec{A}(t)=\nabla \Lambda(t,\vec{r})$，使得$\phi$刚好被消去，即$\partial_{t}\Lambda(t,\vec{r})-\phi(\vec{r})=0$。显然可取$\Lambda=-\vec{E}\cdot \vec{r}t$。那么，变换之后的Hamiltonian为：
$$H= \frac{|\vec{p}+e\vec{A}|^{2}}{2m}+V$$
此时，我们不能直接得到semiclassical EOM，因为该方程前提是Hamiltonian为$\frac{p^{2}}{2m}+V,\ V\text{ is periodic}$。我们必须重新选取晶格动量。

>[!Note] Proposition 4.1
>$$\left[ \frac{|\vec{p}+e\vec{A}|^{2}}{2m}+V,T(\vec{R}) \right]=0$$
## Proof.

容易证明：
$$[\vec{p}+e\vec{A}(t),T(\vec{R})]=0$$
则$[\frac{|\vec{p}+e\vec{A}|^{2}}{2m},T(\vec{R})]=0$。接下来：
$$\begin{align}
[V,T(\vec{R})]\psi(\vec{r}) & = (V(\vec{r})T(\vec{R})-T(\vec{R})V(\vec{r}))\psi(\vec{r}) \\
 & = V(\vec{r})\psi(\vec{r}-\vec{R})-T(\vec{R})(V(\vec{r})\psi(\vec{r})) \\
 & = V(\vec{r})\psi(\vec{r}-\vec{R})-V(\vec{r}-\vec{R})\psi(\vec{r}-\vec{R}) \\
 & = V(\vec{r})\psi(\vec{r}-\vec{R})-V(\vec{r})\psi(\vec{r}-\vec{R}) \\
 & =0
\end{align}$$
故$[V,T(\vec{R})]=0$
>[!Right]
>$\blacksquare$

那么选取$H,T(\vec{R})$的simultaneous ket $\ket{\psi_{n,\vec{q}}}$作为本征态。则有：
$$T(\vec{R})\ket{\psi_{n,\vec{q}}} = \exp\left( - i\vec{q}\cdot \vec{R} \right)\ket{\psi_{n,\vec{q}}} $$
即：
$$\psi_{n,\vec{q}}(\vec{r}-\vec{R})=\exp(-i\vec{q}\cdot \vec{R})\psi_{n,\vec{q}}(\vec{r})$$
接下来容易证明：
$$\begin{align}
 & \left( \frac{|\vec{p}+e\vec{A}|^{2}}{2m^{}}+V \right)\ket{\psi_{n,\vec{q}}} =\epsilon_{n,\vec{q}}\ket{\psi_{n,\vec{q}}} \\
\implies & \exp\left(  i\frac{e}{\hbar}\vec{A}  \cdot \vec{r}\right)\left(  \frac{|\vec{p}+e\vec{A}|^{2}}{2m}+V \right)\exp\left( -i \frac{e}{\hbar}\vec{A}\cdot \vec{r} \right)\exp\left(  i \frac{e}{\hbar}\vec{A} \cdot \vec{r}\right)\ket{\psi_{n,\vec{q}}}=\epsilon_{n,\vec{q}}\exp\left(  i\frac{e}{\hbar}\vec{A} \cdot \vec{r}\right)\ket{\psi_{n,\vec{q}}} \\
\implies &    \left( \frac{p^{2}}{2m}+V \right)\exp\left( i \frac{e}{\hbar}\vec{A} \cdot \vec{r}\right)\ket{\psi_{n,\vec{q}}} =\epsilon_{n,\vec{q}}\exp\left( i \frac{e}{\hbar}\vec{A}\cdot \vec{r} \right)\ket{\psi_{n,\vec{q}}} 
\end{align}$$
所以$\ket{u_{n,\vec{q}}}=\exp\left( i \frac{e}{\hbar}\vec{A}\cdot \vec{r} \right)\ket{\psi_{n,\vec{q}}}$可以满足semiclassical EOM。容易看出：
$$u_{n,\vec{q}}(\vec{r}+\vec{R})=\exp\left( i \left(\frac{e}{\hbar}\vec{A}+\vec{q}\right) \right)u_{n,\vec{q}}(\vec{r})$$
所以波矢为：
$$\vec{k}= \vec{q}+ \frac{e}{\hbar}\vec{A}$$
也可将$\ket{u_{n,\vec{q}}}$记为$\ket{u_{n,\vec{k}}}$。那么此时，$\ket{u_{n,\vec{k}}}$满足$\vec{k}-\text{dependent}$边界条件，而Hamiltonian是$\vec{k}-\text{independent}$的。那么再作3中变换，使得Hamiltonian为$\vec{k}-\text{dependent}$，而边界条件$\vec{k}-\text{independent}$。那么可将$\vec{k}$作为参数引出Berry phase。

>[!Note] Proposition 4.2
>$$\dot{\vec{q}}=0$$
## Proof.

容易证明$[H(t_{1}),H(t_{2})]=0,\ \forall t_{1},t_{2}$，且$[H(t),T(\vec{R})]=0,\ \forall t$。那么：
$$\ket{\psi_{n,\vec{q}}(t)} =\exp\left( - \frac{i}{\hbar}\int H \right)\ket{\psi_{n,\vec{q}}(0)} $$
假设$0$时刻波矢为$\vec{q}$。想证明$t$时刻波矢仍为$\vec{q}$。我们有：
$$\begin{align}
T(\vec{R})\ket{\psi_{n,\vec{q}}(t)}  & =T(\vec{R})\exp\left( - \frac{i}{\hbar}\int H \right)\ket{\psi_{n,\vec{q}}(0)}  \\
 & = \exp\left( - \frac{i}{\hbar}\int H \right)T(\vec{R})\ket{\psi_{n,\vec{q}}(0)}  \\
 & = e^{-i\vec{q}\cdot \vec{R}}\ket{\psi_{n,\vec{q}}(t)} 
\end{align}$$
>[!Right]
>$\blacksquare$


所以：
$$\begin{align}
\dot{\vec{k}} & =  \dot{\vec{q}}+ \frac{e}{\hbar}(-\vec{E}) \\
 & = - \frac{1}{\hbar}e\vec{E}
\end{align}$$
此外，令$\ket{u_{n}(t)}$为$H(t)=H(\vec{k}(t))$的瞬时本征态。我们知道若$0$时刻系统处于态$\ket{u_{n}(0)}$，绝热演化，则$t$时刻：
$$\ket{\psi(t)} = \ket{u_{n}(t)} -i\hbar \sum_{m \neq n}  \frac{\ket{u_{m}(t)} \bra{u_{m}(t)}  \frac{\partial}{\partial t}\ket{u_{n}(t)} }{\epsilon_{n}-\epsilon_{m}}=\ket{u_{n}(t)} + \sum_{m\neq n} a_{m} \ket{u_{m}(t)} $$
前面可能还有有一个phase factor。考虑：
$$\begin{align}
{\vec{v}} & = \bra{\psi}  \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}}\ket{\psi}  \\
 & = \left( \bra{u_{n}} + \sum_{m\neq n} a_{m}^{*} \bra{u_{m}}  \right)  \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}} \left( \ket{u_{n}} + \sum_{m^{'}\neq n} a_{m^{'}}\ket{u_{m^{'}}}  \right) \\
 & \approx \bra{u_{n} }  \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}} \ket{u_{n}} + \sum_{m\neq n} a_{m}^{*}\bra{u_{m} } \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}} \ket{u_{n}} +\text{c.c}  
\end{align}$$
其中由于$a_{m}$是小量，我忽略了二阶项。我们知道：
$$\begin{align}
 & H\ket{u_{n}} =\epsilon_{n}\ket{u_{n}}  \\
\implies &  \frac{\partial H}{\partial \vec{k}}\ket{u_{n}} + H \left(  \frac{\partial}{\partial \vec{k}}\ket{u_{n}}  \right)= \frac{\partial\epsilon_{n}}{\partial \vec{k}}\ket{u_{n}} +\epsilon_{n} \frac{\partial}{\partial \vec{k}}\ket{u_{n}}  \\
\implies & \bra{u_{m}}  \frac{\partial H}{\partial \vec{k}}\ket{u_{n}} + \bra{u_{m}} H \left(  \frac{\partial}{\partial \vec{k}}\ket{u_{n}}  \right)= \bra{u_{m}}  \frac{\partial\epsilon_{n}}{\partial \vec{k}}\ket{u_{n}} +\epsilon_{n} \bra{u_{m}}  \frac{\partial}{\partial \vec{k}}\ket{u_{n}}   \\
\implies & \bra{u_{m}}  \frac{\partial H}{\partial \vec{k}}\ket{u_{n}} = (\epsilon_{n}-\epsilon_{m}) \bra{u_{m}}  \frac{\partial}{\partial \vec{k}}\ket{u_{n}} +   \frac{\partial\epsilon_{n}}{\partial \vec{k}}\delta_{mn}
\end{align}$$
所以平均速度第一项：
$$\bra{u_{n}} \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}} \ket{u_{n}} =  \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}$$
而第二项为：
$$\begin{align}
\sum_{m\neq n} a_{m}^{*} \bra{u_{m}}  \frac{1}{\hbar} \frac{\partial H}{\partial \vec{k}} \ket{u_{n}} +\text{c.c.} & = \sum a_{m}^{*} \frac{\epsilon_{n}-\epsilon_{m}}{\hbar} \bra{u_{m}}  \frac{\partial}{\partial \vec{k}}\ket{u_{n}}+\text{c.c.}  \\
 & = \sum i \left( \frac{\partial}{\partial t}\bra{u_{n}}  \right)\ket{u_{m}}  \bra{u_{m}}  \frac{\partial}{\partial \vec{k}}\ket{u_{n}} +\text{c.c.} \\
 & = i \left(  \frac{\partial}{\partial t} \bra{u_{n}}  \right)(1- \ket{u_{n}}  \bra{u_{n}} ) \frac{\partial}{\partial \vec{k}} \ket{u_{n}} +\text{c.c.} \\
 & = i \left(  \frac{\partial}{\partial t} \bra{u_{n}}  \right) \frac{\partial}{\partial \vec{k}} \ket{u_{n}} +\text{c.c.}
\end{align}$$
最后一步是因为我选取parallel transport gauge，使得$\left( \frac{\partial}{\partial t}\bra{u_{n}} \right)\ket{u_{n}}=0$。接下来：
$$\begin{align}
\text{expr} & = i   \dot{\vec{k}} \cdot \left(  \frac{\partial}{\partial \vec{k}} \bra{u_{n}}  \right) \frac{\partial}{\partial \vec{k}} \ket{u_{n}} -i \left(  \frac{\partial}{\partial \vec{k}}\bra{u_{n}}  \right)  \dot{\vec{k}} \cdot \frac{\partial}{\partial \vec{k}}\ket{u_{n}}   \\
 & = -i  \dot{\vec{k}}\times\left(  \frac{\partial}{\partial \vec{k}}\bra{u_{n}}  \times \frac{\partial}{\partial \vec{k}}\ket{u_{n}} 
 \right) \\
 & = -  \dot{\vec{k}}\times \vec{\Omega}\end{align}$$所以得到：

>[!Note] Proposition 4.3 
>$$\dot{\vec{k}}= - \frac{1}{\hbar}e\vec{E},\ \vec{v}= \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}-  \dot{\vec{k}}\times \vec{\Omega}$$

## Symmetry considerations

>[!Note] Definition 4.4
>Define the time reversal operation $\tau:\vec{r}(t)\mapsto   \tilde{\vec{r}}(t)=\vec{r}(-t)$

其它物理量应由于轨迹的改变而相应地改变。容易证明：
$$\begin{align}
\tilde{\vec{v}}(t) & = \frac{d  \tilde{\vec{r}}(t)}{dt}= -\vec{v}(-t)
\end{align}$$

# 5. Anomalous Hall effect

Anomalous Hall effect为仅仅用电场驱动电子，却观察到Hall voltage的现象。

## Handwave

若某一个band有non-trivial的Berry curvature，那么：
$$\begin{align}
\vec{v} & = \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}} - \dot{\vec{k}}\times \vec{\Omega} \\
 & = \frac{1}{\hbar} \frac{\partial\epsilon_{n}}{\partial \vec{k}}+ \frac{e}{\hbar}\vec{E}\times \vec{\Omega}
\end{align}$$
考虑parabolic band approximation，即$\epsilon_{n}\propto k^{2}$。则第一项正比于$\vec{k}$。而$\dot{\vec{k}}= - \frac{e}{\hbar}\vec{E}$。所以第一项沿电场方向增大，知道BZ边界，又变小，作Bloch oscillation。第二项则是垂直于电场方向，产生Hall voltage。

可以计算Hall conductivity：

## Proof.

$$\begin{align}
\vec{j}_{\perp} & = \frac{1}{(2\pi)^{3}}\int_{\text{BZ} }d^{3}k f(\vec{k}) e \vec{v}_{\perp} \\
 & = \frac{1}{(2\pi)^{3}}\int_{\text{BZ} }d^{3}k f(\vec{k}) \frac{e^{2}}{\hbar}\vec{E}\times \vec{\Omega}
\end{align}$$
取$\vec{E}$为$x$方向，$\vec{\Omega}$在$xz$面内。则：
$$\begin{align}
j_{y} & = -\frac{1}{(2\pi)^{3}}\int d^{3}kf(\vec{k}) \frac{e^{2}}{\hbar}E\Omega_{z}
\end{align}$$
所以容易得到Hall conductivity：
$$\sigma_{yx}= - \frac{1}{(2\pi)^{3}} \frac{e^{2}}{\hbar} \int_{\text{BZ} }d^{3}k f(\vec{k})\Omega_{z}$$
