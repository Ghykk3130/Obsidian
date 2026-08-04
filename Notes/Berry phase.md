# 1. Berry phase的第一种引入方式

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
>Under adiabatic approximation, the zeroth order corrected $\ket{n}$ is:
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

当然，上面仅仅是针对小量$\frac{\bra{n}\partial H / \partial t \ket{m}}{E_{m}-E_{n}}$的零阶近似。我们还可以获得一阶近似。我们知道在保留零阶项时，$c_{n}$的演化为：
$$\frac{\partial c_{n}}{\partial t}=-c_{n} \bra{n} \partial_{t}n\rangle\implies c_{n}=e^{i\gamma_{n}}$$
对于$m\neq n$的项，我们有：
$$\begin{align}
\frac{\partial c_{m}}{\partial t}=-c_{m}\bra{m} \partial_{t}m\rangle \implies c_{m}=c_{m}(0)\exp\left( - \int_{0}^{t}dt^{'}\bra{m} \partial_{t^{'}}m\rangle \right)=0\text{ since }c_{m}(0)=0
\end{align}$$
我们将$c_{m}$的微分方程保留到一阶，并在RHS代入这个解：
$$\begin{align}
 & \frac{\partial c_{m}}{\partial t}=-c_{m}\bra{n} \partial_{t}n\rangle - \sum_{l\neq m} c_{l}e^{i(d_{l}-d_{m})}\bra{m} \partial_{t}l\rangle \\
 \implies&  \frac{\partial c_{m}}{\partial t}=-c_{n}e^{i(d_{n}-d_{m})}\bra{m} \partial_{t}n\rangle
\end{align}$$
积分得到：
$$\begin{align}
c_{m} & = -\int_{0}^{t}dt^{'}c_{n}(t^{'}) e^{i(d_{n}(t^{'})-d_{m}(t^{'}))} \bra{m}  \partial_{t^{'}}n\rangle +c_{m}(0)\\
 & = -\int dt^{'} c_{n} \frac{1}{i(  \dot{d}_{n}-  \dot{d}_{m}) }  \frac{\partial}{\partial t^{'}} e^{i(d_{n}-d_{m})} \bra{m} \partial_{t^{'}}n\rangle = -i\hbar\int dt^{'}c_{n} \frac{1}{E_{n}-E_{m}} \frac{\partial}{\partial t^{'}}e^{i(d_{n}-d_{m})} \bra{m} \partial _{t^{'}}n\rangle \\
 & = -i\hbar\left[  c_{n} \frac{e^{i(d_{n}-d_{m})}}{E_{n}-E_{m}}\bra{m} \partial_{t}n\rangle \right]_{0}^{t}+i\hbar \int dt^{'} \frac{\partial}{\partial t^{'}}\left( c_{n} \frac{1}{E_{n}-E_{m}}\bra{m} \partial_{t^{'}}n\rangle \right)e^{i(d_{n}-d_{m})} \\
 & \approx -i\hbar\left[  c_{n} \frac{e^{i(d_{n}-d_{m})}}{E_{n}-E_{m}}\bra{m} \partial_{t}n\rangle \right]_{0}^{t}
\end{align}$$
我们在第一步代入$c_{m}(0)=0$。倒数第二行到倒数第一行是因为后一项是小量的导数，更小，直接忽略。我们假设在$t=0$时刻，hamiltonian开始从静止极慢地开启，那么$t=0$时刻$\bra{m}\partial_{t}n\rangle=0$。最终得到：
$$c_{m}=-i\hbar c_{n} \frac{e^{i(d_{n}-d_{m})}}{E_{n}-E_{m}}\bra{m} \partial_{t}n\rangle=-i\hbar e^{i\gamma_{n}} \frac{e^{i(d_{n}-d_{m})}}{E_{n}-E_{m}} \bra{m} \partial_{t}n\rangle$$
所以一阶修正后的态为：
$$\ket{\psi} =e^{i\gamma_{n}}e^{id_{n}}\ket{n} -i\hbar e^{i\gamma_{n}}e^{id_{n}}\sum_{m\neq n}  \frac{\ket{m} \bra{m} \partial_{t}n\rangle}{E_{n}-E_{m}} $$
>[!Success] Proposition 1.2
>The first order corrected $\ket{n}$ is:
>$$\ket{\psi} =e^{i\gamma_{n}}e^{id_{n}}\left( \ket{n} - i\hbar \sum_{m\neq n} \frac{\ket{m} \bra{m} \partial_{t}n\rangle}{E_{n}-E_{m}} \right)$$

^291c90
# 2. Berry phase的第二种引入方式

一般来说，若不同时刻的hamiltonian不对易，那么求解时间演化必须用Dyson级数展开。这非常困难。但是，在时间演化非常缓慢的情况下，即绝热演化，可以比较容易地近似求解。

在任意时刻存在instantaneous Schrodinger equation：
$$H(t)\ket{n(t)} =E_{n}(t)\ket{n(t)} $$
由于整个系统的基在不断地转动，我们构造基变换算符$W(t)=\sum_{n}\ket{n(t)}\bra{n(0)}$。

>[!Warning]
>注意，$W$不是时间演化算符。你可能认为，$W$作用在初态$\ket{n(0)}$上得到$\ket{n(t)}$，所以是时间演化算符。但$\ket{n(t)}$并不是$\ket{n(0)}$自然根据Schrodinger方程流动，演化成的态。$\ket{n(t)}$是相当任意的，只是符合瞬时Schrodinger方程的任意一组本征态而已，并不唯一。既然它不唯一，显然就不一定是$\ket{n(0)}$自然流动到$t$的态。因为这个态是唯一的。$\{ \ket{n(t)} \}$就如同是流形上任意取的local坐标架一样，具有任意性。

令系统从$\ket{\psi(0)}$开始，通过Schrodinger方程流动到$t$的态为$\ket{\psi(t)}$。我们可以尝试将坐标轴转回去。令：
$$\ket{\phi(t)} =W^{\dagger}(t)\ket{\psi(t)} $$
那么容易得到$\ket{\phi}$遵守的Shrodinger方程：
$$\begin{align}
  i\hbar \frac{\partial}{\partial t}\ket{\phi(t)} & = i\hbar \frac{\partial W^{\dagger}}{\partial t}\ket{\psi} + i\hbar W^{\dagger} \frac{\partial \ket{\psi} }{\partial t}  \\
 & = i\hbar  \frac{\partial W^{\dagger}}{\partial t }\ket{\psi}  + W^{\dagger}H\ket{\psi} \\
 & = (i\hbar (\partial_{t}W^{\dagger})W+W^{\dagger}HW) \ket{\phi}    
\end{align}$$
于是可以定义等效hamiltonian $H_{\text{eff}}=i\hbar(\partial_{t}W^{\dagger})W+W^{\dagger}HW$。








算符$H_{0}(t)=\sum_{n}E_{n}(t)\ket{n(0)}\bra{n(0)}$。那么$H_{0}$在任意时刻都对易。接下来构造含时微扰：
$$V(t)=H(t)-H_{0}(t)=\sum_{n}E_{n}(t)(\ket{n(t)} \bra{n(t)} -\ket{n(0)} \bra{n(0)} )$$
令系统在Schrodinger绘景下的态为$\ket{\psi(t)}$，那么可以变换到相互作用绘景：
$$\ket{\psi_{I}(t)} =e^{\frac{i}{\hbar}H_{0}t}\ket{\psi(t)} $$
我们不妨作展开$\ket{\psi_{I}(t)}=\sum_{n}c_{n}(t)\ket{n(0)}$。那么代入Schrodinger方程：
$$\begin{align}
 & i\hbar \partial_{t}\ket{\psi_{I}} =V\ket{\psi_{I}} 
\end{align}$$




# 3. Berry curvature

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

>[!Success] Proposition 1
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
## Ex:

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
# 4. 陈数在2-torus上的量子化

我们将Berry curvature在整个BZ的积分定义为陈数。例如说，对于二维系统，定义：
$$C= \frac{1}{2\pi}\int_{\text{BZ}}dk_{x} dk_{y} \Omega_{k_{z}}$$
我们可以证明，陈数必为整数。不妨设$\text{BZ}=\left\{  \mathbf{k}|0\leq k_{x }< \frac{2\pi}{a},\ 0\leq k_{y}< \frac{2\pi}{b}  \right\}$。展开在平面上得到：

![[Drawing 2026-04-02 16.22.11.excalidraw|center|500]]

由于$\Omega_{k_{z}}= \frac{\partial}{\partial k_{x}} A_{k_{y}}- \frac{\partial}{\partial k_{y}} A_{k_{x}}$，运用Stokes公式得到：
$$\begin{align}
 C & = \frac{1}{2\pi}\left( \int_{\text{AB}}dk_{x} A_{k_{x}}(k_{x},0)+\int_{\text{BC}} dk_{y}A_{k_{y}}\left( \frac{2\pi}{a}, k_{y} \right)+\int_{\text{CD}}dk_{x}A_{k_{x}}\left( k_{x}, \frac{2\pi}{b} \right)+\int_{\text{DA}}dk_{y}A_{k_{y}}(0,k_{y}) \right) \\
 & = \frac{1}{2\pi}\left[ \int_{0}^{\frac{2\pi}{a}}dk_{x}\left( A_{k_{x}}(k_{x},0)-A_{k_{x}}\left( k_{x}, \frac{2\pi}{b} \right) \right)+\int_{0}^{\frac{2\pi}{b}}dk_{y}\left( A_{k_{y}}\left( \frac{2\pi}{a}, k_{y} \right)-A_{k_{y}}(0,k_{y}) \right) \right]
\end{align}$$
由于$\ket{\psi(k_{x},0)},\ \ket{\psi\left( k_{x}, \frac{2\pi}{b} \right)}$表达的是同一个态，它们最多相差一个相位。显然这个相位应该是$k_{x}$的函数。即：
$$\ket{\psi(k_{x},0)} =e^{i\theta(k_{x})}\ket{\psi\left( k_{x}, \frac{2\pi}{b} \right)} $$
同理：
$$\ket{\psi\left( \frac{2\pi}{a},k_{y} \right)} =e^{i\phi(k_{y})}\ket{\psi(0,k_{y})} $$
那么：
$$\begin{align}
 A_{k_{x}}(k_{x},0)-A_{k_{z}}\left( k_{x}, \frac{2\pi}{b} \right) & = i \bra{\psi(k_{x},0)}  \frac{\partial}{\partial k_{x}}\ket{\psi(k_{x},0)} -i \bra{\psi\left( k_{x}, \frac{2\pi}{b} \right)}  \frac{\partial}{\partial k_{x}}\ket{\psi\left( k_{x}, \frac{2\pi}{b} \right)}  \\
 & = i \bra{\psi\left( k_{x}, \frac{2\pi}{b} \right)}e^{-i\theta(k_{x})}  \frac{\partial}{\partial k_{x}} e^{i\theta(k_{x})} \ket{\psi\left( k_{x}, \frac{2\pi}{b} \right)}-i \bra{\psi\left( k_{x}, \frac{2\pi}{b} \right)}  \frac{\partial}{\partial k_{x}}\ket{\psi\left( k_{x}, \frac{2\pi}{b} \right)} \\
 & = -  \frac{\partial \theta}{\partial k_{x}} \\
A_{k_{y}}\left( \frac{2\pi}{a}, k_{y} \right)- A_{k_{y}}(0,k_{y}) & = - \frac{\partial \phi}{\partial k_{y}}
\end{align}$$
积分得到陈数：
$$\begin{align}
C & = \frac{1}{2\pi}\left( - \int_{0}^{\frac{2\pi}{a}}dk_{x} \frac{\partial \theta}{\partial k_{x}}- \int_{0}^{\frac{2\pi}{b}}dk_{y} \frac{\partial \phi}{\partial k_{y}} \right)= \frac{1}{2\pi}\left( \theta(0)-\theta\left( \frac{2\pi}{a} \right)+\phi(0)- \phi\left( \frac{2\pi}{b} \right) \right)
\end{align}$$
我们想要证明这是个整数。在ABCD四个角上的态存在如下关系：
$$\begin{align}
 & \ket{\psi\left( \frac{2\pi}{a},0 \right)} =e^{i\phi(0)}\ket{\psi(0,0)}  \\
  & \ket{\psi\left( 0, \frac{2\pi}{b} \right)} =e^{-i\theta(0)}\ket{\psi(0,0)}  \\
 & \ket{\psi\left( \frac{2\pi}{a}, \frac{2\pi}{b} \right)} = e^{-i\theta\left(  \frac{2\pi}{a} \right)}\ket{\psi\left(  \frac{2\pi}{a}, 0 \right)}  \\
 & \ket{\psi\left(  \frac{2\pi}{a}, \frac{2\pi}{b} \right)} = e^{i\phi\left( \frac{2\pi}{b} \right)}\ket{\psi\left( 0, \frac{2\pi}{b} \right)} 
\end{align}$$
联立得到：
$$\begin{align}
e^{-i\theta\left( \frac{2\pi}{a} \right)}e^{i\phi(0)}=e^{i\phi\left( \frac{2\pi}{b} \right)}e^{-i\theta(0)}\implies \theta(0)-\theta\left( \frac{2\pi}{a} \right)+\phi(0)- \phi\left( \frac{2\pi}{b} \right)=2\pi m,\ m\in \mathbb{Z}
\end{align}$$
于是$C\in \mathbb{Z}$。



