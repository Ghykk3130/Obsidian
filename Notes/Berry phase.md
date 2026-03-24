# 1. 绝热近似

假设hamiltonian是含时的，则每一瞬间可以写下方程：
$$H(t)\ket{n(t)} =E_{n}(t)\ket{n(t)} $$
称$\ket{n(t)}$为instantaneous ket。

令$\ket{\psi(t)}$为系统的态。我们知道若$H(t)$不含时，$\ket{\psi(t)}$在instantaneous ket上的投影应该出现一个phase $d_{n}(t)=- \frac{1}{\hbar}\int_{0}^{t}dt^{'}E_{n}(t^{'})$。我们将这个phase分离出来：
$$\ket{\psi(t)} =\sum_{n}c_{n}(t) e^{id_{n}(t)} \ket{n(t)} $$
为了解得$c_{n}$，我们考虑：
$$\begin{align}
 & i\hbar \partial_{t} \ket{\psi(t)} =H(t)\ket{\psi(t)}  \\
\implies & i\hbar \sum_{n} \frac{\partial c_{n}}{\partial t}e^{id_{n}}\ket{n} + \sum_{n}c_{n}e^{id_{n}}E_{n}\ket{n} + i\hbar \sum_{n} c_{n}e^{id_{n}}\ket{\frac{\partial}{\partial t}n} =H\ket{\psi}  \\
\implies & \sum_{n} \frac{\partial c_{n}}{\partial t}e^{id_{n}}\ket{n} +\sum_{n}c_{n}e^{id_{n}}\ket{\frac{\partial}{\partial t}n} =0 \\
\implies & \frac{\partial c_{n}}{\partial t}=-\sum_{n^{'}}c_{n^{'}}e^{i(d_{n^{'}}-d_{n})}\bra{n}  \frac{\partial}{\partial t}n^{'}\rangle
\end{align}$$
我们接下来将方程解耦。注意到若$m\neq n$，我们有：
$$\begin{align}
 & H(t)\ket{n(t)} =E_{n}(t)\ket{n(t)}  \\
\implies & \frac{\partial H}{\partial t}\ket{n} +H\ket{\frac{\partial}{\partial t }n}= \frac{\partial E_{n}}{\partial t}\ket{n} +E_{n }\ket{\frac{\partial}{\partial t}n} \\
\implies & \bra{m}  \frac{\partial H}{\partial t}\ket{n} =(E_{n}-E_{m})\bra{m}  \frac{\partial}{\partial t}n\rangle  
\end{align}$$
故：
$$\frac{\partial c_{n}}{\partial t}=-c_{n}\bra{n} \frac{\partial}{\partial t}n\rangle-\sum_{m\neq n}c_{m} e^{i(d_{m}-d_{n})}  \frac{\bra{n} \partial H /\partial t\ket{m} }{E_{m}-E_{n}} $$
绝热近似假设能级之间间隔很大，以至于后面一项求和可以忽略。那么：
$$\frac{\partial c_{n}}{\partial t}=-c_{n}\bra{n}  \frac{\partial}{\partial t}n\rangle$$
解得：
$$c_{n}(t)=c_{n}(0)\exp\left( -\int_{0}^{t}dt^{'}\bra{n}  \frac{\partial}{\partial t^{'}}n\rangle \right)$$
记Berry phase为：
$$\gamma_{n}=i \int_{0}^{t} dt^{'} \bra{n}  \frac{\partial }{\partial t^{'}}n\rangle$$
于是：
$$\ket{\psi(t)} =\sum_{n}e^{id_{n}(t)}e^{i\gamma_{n}(t)}c_{n}(0)\ket{n(t)} $$
>[!Success] Proposition 1.1
>Under adiabatic approximation, we have:
>$$\ket{\psi(t)} = \sum_{n}e^{id_{n}(t)}e^{i\gamma_{n}(t)}c_{n}(0)\ket{n(t)}  $$
>where $d_{n}(t)=- \frac{1}{\hbar}\int_{0}^{t}dt^{'}E_{n}(t^{'})$ is the dynamic phase, $\gamma_{n}(t)=i \int_{0}^{t}dt^{'}\bra{n {}} \frac{\partial}{\partial t^{'}}n\rangle$ is the Berry phase.

容易证到Berry phase总是实的：
$$\begin{align}
 & \bra{n} n\rangle=1\implies \bra{\frac{\partial}{\partial t}n} n\rangle+ \bra{n}  \frac{\partial}{\partial t}n\rangle=0\implies \bra{n}  \frac{\partial}{\partial t}n\rangle\text{ is imaginary}\implies i \int_{0}^{t}dt^{'}\bra{n}  \frac{\partial}{\partial t^{'}}n\rangle\in \mathbb{R}
\end{align}$$
## Ex:
若$\frac{\partial}{\partial t}H=0$，那么：
$$\begin{align}
\theta_{n} & = - \frac{1}{\hbar}E_{n}t
\end{align}$$
$$\begin{align}
\gamma_{n} & = i \int_{0}^t dt^{'}\bra{n,t}  \frac{\partial}{\partial t} \ket{n,t}  \\
 & = i \left( - \frac{i}{\hbar}E_{n} \right)\int_{0}^t dt^{'}= \frac{1}{\hbar}E_{n}t
\end{align}$$
所以若一开始位于$\ket{\psi,0}=\ket{n,0}$，那么之后就有$\ket{\psi,t}=\ket{n,t}$。

# 2. Berry phase

假设所有的time dependence都来源于参数$\mathbf{R}(t)$。假设$\mathbf{R}$在参数空间中作周期运动。那么一个周期累积的Berry phase为：
$$\begin{align}
\gamma_{n}= i\int_{0}^{T}dt\bra{n}  \frac{\partial}{\partial t}n\rangle= i \oint_{\partial S} d\mathbf{R}\cdot \bra{n}  \frac{\partial}{\partial \mathbf{R}}n\rangle
\end{align}$$
将$i\bra{n} \frac{\partial}{\partial \mathbf{R}}n\rangle=\mathbf{A}_{n}$定义为Berry connection。可以将线积分化为面积分：
$$\gamma_{n}= \int_{S}d^{2}R^{}  \hat{\mathbf{n}}\cdot (\nabla \times \mathbf{A}_{n})$$
将$\nabla \times \mathbf{A}_{n}=\boldsymbol{\Omega}_{n}$定义为Berry curvature。

Berry curvature具有规范自由度。注意到$\mathbf{A}_{n}\leadsto \mathbf{A}_{n}+ \nabla f(\mathbf{R})$，都不会改变Berry phase。容易证明这种规范变换可由ket加上一个phase引起：
$$\ket{n(\mathbf{R})} \leadsto e^{-if(\mathbf{R})}\ket{n(\mathbf{R})} $$
Berry curvature可以进一步写开：

>[!Note] Proposition 1
>$$\boldsymbol{\Omega}_{n}=i\bra{\frac{\partial}{\partial \mathbf{R}}n} \times \ket{\frac{\partial}{\partial \mathbf{R}}n}  $$
## Proof.

我们知道$A_{ni}=i\bra{n} \frac{\partial}{\partial R_{i}}n\rangle$。故：
$$\begin{align}
\Omega_{ni} & =i \epsilon_{ijk}  \frac{\partial}{\partial R_{j}}\left( \bra{n}  \frac{\partial}{\partial R_{k}}n\rangle \right) \\
 & = i\epsilon_{ijk}\bra{\frac{\partial}{\partial R_{j}}n}  \frac{\partial}{\partial R_{k}}n\rangle+ i\epsilon_{ijk}\bra{n}  \frac{\partial^{2}}{\partial R_{j}\partial R_{k}}n\rangle
\end{align}$$
注意到第二项实际上是$(i \bra{n} \nabla \times \ket{\nabla n})_{i}=0$。所以只剩下第一项。
>[!Right]
>$\blacksquare$

还可以有另一种形式：

>[!Note] Proposition 2
>$$\vec{B}_{n}= i \sum_{m\neq n}  \frac{\bra{n,t}  \partial H / \partial \vec{R}\ket{m,t} \times \bra{m,t}  \partial H / \partial \vec{R} \ket{n,t} }{(E_{m}-E_{n})^{2}}$$
## Proof.
$$\begin{align}
\vec{B}_{n} & = i \left(  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger}\times \frac{\partial}{\partial \vec{R}}\ket{n,t}  \\
 & = i\sum_{m}\left(  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger} \ket{m,t} \bra{m,t} \times \frac{\partial}{\partial \vec{R}}\ket{n,t}  \\
 & = i\sum_{m}\left( \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger}\times \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} 
\end{align}$$
我们有：
$$\bra{n,t}  \frac{\partial}{\partial \vec{t}}\ket{n,t}= \dot{\vec{R}}\cdot \bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \text{ is imaginary}$$
所以$\bra{n,t} \frac{\partial}{\partial \vec{R}}\ket{n,t}$是虚数域上的欧氏空间矢量。所以：
$$\begin{align}
\left( \bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger}\times \bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}  & = -\bra{n,t}  \frac{\partial}{\partial \vec{R}} \ket{n,t} \times \bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} =0
\end{align}$$
故：
$$\begin{align}
\vec{B}_{n} & = i \sum_{m\neq n } \left( \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger}\times \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t}
\end{align}$$
回忆起：
$$\begin{align}
 &  \bra{m,t}  \frac{\partial}{\partial t} \ket{n,t} = \frac{\bra{m,t}  \dot{H}\ket{n,t} }{E_{n}-E_{m}} \\
\implies & \dot{\vec{R}}\cdot \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} = \dot{\vec{R}}\cdot \frac{\bra{m,t}  \partial H / \partial \vec{R}\ket{n,t} }{E_{n}-E_{m}},\ \forall \vec{R} \\
\implies &  \bra{m,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} =  \frac{\bra{m,t}  \partial H / \partial \vec{R}\ket{n,t} }{E_{n}-E_{m}}
\end{align}$$
Then done.
>[!Right]
>$\blacksquare$

# 3. 磁场中的Spin-1/2粒子

考虑一个spin-1/2粒子。施加磁场$\vec{R}$。想要计算Berry phase。我们有：
$$H=- g \frac{e}{2m}\vec{S}\cdot \vec{R}=- \frac{e}{m}\vec{S}\cdot \vec{R}$$
所以：
$$\frac{\partial H}{\partial \vec{R}}= - \frac{e}{m}\vec{S}$$
取$\hat{z}\parallel \vec{R}$。则：
$$\begin{align}
\bra{\pm} \frac{\partial H}{\partial \vec{R}}\ket{\mp}  & = - \frac{e}{m}\bra{\pm} \vec{S}\ket{\mp}  
\end{align}$$
对$\vec{S}$作球张量分解：
$$\begin{align}
\vec{S}= \frac{1}{2}(S_{+}+S_{-})\hat{x}+ \frac{1}{2i}(S_{+}-S_{-})\hat{y}+ S_{z}\hat{z}
\end{align}$$
于是容易得到：
$$\begin{align}
\bra{\pm}  \vec{S} \ket{\mp }  & =\frac{\hbar}{2}(\hat{x}\mp i \hat{y})
\end{align}$$
接下来：
$$\bra{\pm} \vec{S}\ket{\mp } \times \bra{\mp } \vec{S}\ket{\pm} = \pm \frac{\hbar^{2}}{2}i\hat{z}\left( - \frac{e}{m} \right)^{2}$$
另外地：
$$\begin{align}
(E_{\pm}-E_{\mp})^{2} & = \left( - \frac{e}{m} \frac{\hbar}{2}R - \frac{e}{m} \frac{\hbar}{2}R \right)^{2}= \left( - \frac{e}{m} \right)^{2} \hbar^{2}R^{2}
\end{align}$$
故：
$$\vec{B}_{\pm}= \mp \frac{1}{2R^{2}}\hat{R}$$
所以Berry phase为：
$$\gamma_{n}(C)= \mp \frac{1}{2}\int_{C} d\vec{S}\cdot \frac{\hat{R}}{R^{2}}=\mp \frac{1}{2}\Omega(C)$$
其中$\Omega(C)$为$\vec{R}$绕出的闭合曲线对应的立体角。
