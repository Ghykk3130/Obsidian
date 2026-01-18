# 1. Adiabatic evolution

>[!Note] Proposition 1
>Let $\ket{\psi(t)}= \sum_{n} e^{i\theta_{n}(t)}c_{n}(t)\ket{n,t},\ \theta_{n}(t)= - \frac{1}{\hbar}\int_{0}^tdt^{'}E_{n}(t^{'})$ be a state. Fix $m$, if $| \frac{\bra{m,t}  \dot{H}\ket{n,t}}{E_{n}-E_{m}}|\ll \frac{E_{m}}{\hbar},\ \forall n\neq m,t\geq 0$, then:
>$$c_{m}(t)=c_{m}(0) e^{i\gamma_{m}(t)}\text{ where }\gamma_{m}(t)=i \int_{0}^tdt^{'}\bra{m,t^{'}} \partial / \partial t\ket{m,t^{'}} \in \mathbb{R}$$
## Proof.

我们考虑含时系统波函数的演化。即$H=H(t)$。我们有：
$$i\hbar \frac{\partial}{\partial t}\ket{\psi,t} =H\ket{\psi,t} $$
令$\ket{n,t}$为fix $t$后的本征态。我们作：
$$\ket{\psi,t} =\sum_{n}e^{i\theta_{n}(t)}c_{n}(t)\ket{n,t},\ \theta_{n}=- \frac{1}{\hbar}\int_{0}^tdt^{'}E_{n}(t^{'}) $$
代入Schrodinger方程就有：
$$\begin{align}
 & i\hbar\left( \sum_{n} i \frac{\partial \theta_{n} }{\partial t }e^{i\theta_{n}}c_{n}\ket{n,t} +\sum_{n}e^{i\theta_{n}}  \dot{c}_{n}\ket{n,t} + \sum_{n}e^{i\theta_{n}}c_{n} \frac{\partial}{\partial t}\ket{n,t}  \right)=\sum_{n}e^{i\theta_{n}}c_{n} E_{n}\ket{n,t} \\
\implies & \sum \left( E_{n}e^{i\theta_{n}}c_{n}\ket{n,t} +e^{i\theta_{n}}  \dot{c}_{n}\ket{n,t} +e^{i\theta_{n}}c_{n} \frac{\partial}{\partial t}\ket{n,t}  \right) =\sum e^{i\theta_{n}}c_{n}E_{n}\ket{n,t} \\
\implies & e^{i\theta_{m}}c_{m}E_{m}= e^{i\theta_{m}}c_{m}E_{m}+ e^{i\theta_{m} }  \dot{c}_{m}+ \sum_{n} e^{i\theta_{n}}c_{n} \bra{m,t}  \frac{\partial}{\partial t} \ket{n,t} \\
\implies &   \dot{c}_{m}= - \sum_{n}e^{i(\theta_{n}-\theta_{m}) } c_{n} \bra{m,t}  \frac{\partial}{\partial t}\ket{n,t}     
\end{align}$$
注意到：
$$\begin{align}
 & H\ket{n,t} =E_{n}(t)\ket{n,t} \\
\implies &  \dot{H}\ket{n,t} + H \frac{\partial}{\partial t}\ket{n,t} = \dot{E}_{n}\ket{n,t} +E_{n} \frac{\partial}{\partial t} \ket{n,t} \\
\implies & \bra{m,t}   \dot{H}\ket{n,t} + E_{m}\bra{m,t}  \frac{\partial}{\partial t}\ket{n,t} = \dot{E}_{n}\delta_{mn} + E_{n}\bra{m,t}  \frac{\partial}{\partial t} \ket{n,t} \\
\implies  & \bra{m,t}  \frac{\partial}{\partial t}\ket{n,t} =  \frac{\bra{m,t}   \dot{H}\ket{n,t} }{E_{n}-E_{m}}\text{ for }m\neq n    
\end{align}$$
于是有：
$$\begin{align}
\dot{c}_{m} & = -c_{m}\bra{m,t}  \frac{\partial}{\partial t}\ket{m,t} - \sum_{n\neq m}e^{i(\theta_{n}-\theta_{m}) }c_{n}  \frac{\bra{m,t}  \dot{H}\ket{n,t} }{E_{n}-E_{m}} 
\end{align}$$
若：
$$\begin{align}
| \frac{\bra{m,t}  \dot{H}\ket{n,t} }{E_{n}-E_{m}} |  & \ll |\bra{m,t}  \frac{\partial}{\partial t}\ket{m,t}  | \\
 & = \frac{1}{\hbar} |\bra{m,t}  H \ket{m,t} |= \frac{E_{m}}{\hbar}
\end{align}$$
则：
$$c_{m}(t)= c_{m}(0)e^{i\gamma_{m}(t)}\text{ where }\gamma_{m}(t)= i\int_{0}^tdt^{'}\bra{m,t^{'}}  \frac{\partial}{\partial t^{'}}\ket{m,t^{'}} $$
又注意到：
$$\begin{align}
 & \bra{m,t^{'}} m,t^{'}\rangle=1 \\
\implies & \left(  \frac{\partial}{\partial t}\ket{m,t^{'}} ^{} \right)^{\dagger}\ket{m,t^{'}} + \bra{m,t^{'}}  \frac{\partial}{\partial t}\ket{m,t^{'}} =0 \\
\implies & \left( \bra{m,t^{'}}  \frac{\partial}{\partial t}\ket{m,t^{'}}  \right)^{\dagger}+ \bra{m,t^{'}}  \frac{\partial}{\partial t}\ket{m,t^{'}} =0 \\
\implies & \bra{m,t^{'}  } \frac{\partial}{\partial t}\ket{m,t^{'}} \text{ is imaginary}
\end{align}$$
## Remark
这即是说，只要系统演化足够慢$\dot{H}\rightarrow 0$，那么任取系统态$\ket{\psi}$在本征态$\ket{m,t}$上投影，其演化参数都为$e^{i\theta_{m}}e^{i\gamma_{m}}$。

## Ex:
考虑$\dot{H}\rightarrow 0$。若最开始$\ket{\psi,0}=\ket{n,0}$，那么之后系统会一直处于态$\ket{n,t}$之中。

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

假设所有的time-dependence都来自于参数$\vec{R}(t)$。假设$\vec{R}\in \mathbb{R}^{3}$。那么就有：
$$\gamma_{n}=i \int_{0}^tdt^{'}\bra{n,t^{'}} \frac{\partial }{\partial t^{'}}\ket{n,t^{'}}=\int dt^{'}i \dot{\vec{R}}\cdot \bra{n,t^{'}}  \frac{\partial }{\partial \vec{R}}\ket{n,t^{'}}   $$

>[!Note] Definition 1
>Define the Berry connection:
>$$\vec{A}_{n}(\vec{R})= i\bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} \in \mathbb{R}^{3}$$

考虑$\vec{R}(t)$随时间演化一直在$C\subset \mathbb{R}^{3}$上周期性绕圈的情况。令周期为$T$。那么：

>[!Note] Definition 2
>Define the Berry phase as $\gamma_{n}(T)$.

然后：
$$\begin{align}
\gamma_{n}(T) & = \int_{0}^Tdt^{'} \dot{\vec{R}}\cdot \vec{A}_{n} \\
 & = \oint_{C} d\vec{R}\cdot \vec{A}_{n} \\
 & = \oint_{C}d\vec{S}\cdot \left( \frac{\partial}{\partial \vec{R}}\times \vec{A}_{n} \right) 
\end{align}$$

>[!Note] Definition 3
>Define the Berry curvature:
>$$\vec{B}_{n}(\vec{R})= \frac{\partial}{\partial \vec{R}}\times \vec{A}_{n}\in \mathbb{R}^{3}$$

显然，对于任意一个态$\ket{n(\vec{R})}$，其相应的Berry connection不是唯一的。因为$\ket{n(\vec{R})}$可以随便加上一个phase而物理实质不变，即$U(1)-\text{arbitrariness}$。所以，若作$\ket{n,t}\leadsto e^{i\delta(\vec{R})}\ket{n,t}$，那么相应地：
$$\begin{align}
\vec{A}_{n} & \leadsto i\bra{n,t} e^{-i\delta} \frac{\partial}{\partial \vec{R}}(e^{i\delta}\ket{n,t} ) \\
 & = i\bra{n,t} e^{-i\delta}\left( i \frac{\partial\delta}{\partial \vec{R}}e^{i\delta}\ket{n,t} + e^{i\delta} \frac{\partial}{\partial \vec{R}}\ket{n,t}  
 \right) \\
 & = \vec{A}_{n}- \frac{\partial\delta}{\partial \vec{R}}
\end{align}$$
所以波函数作$U(1)$变换，$\vec{A}_{n}$应加减某函数梯度。相应地，显然$\vec{B}_{n}$不变，$\gamma_{n}(T)$不变。物理实质不变。所以Berry curvature和Berry phase是相应变换下的不变量。

Berry curvature可以进一步写开：

>[!Note] Proposition 1
>$$\vec{B}_{n}=i \left( \frac{\partial}{\partial \vec{R}} \ket{n,t}  \right)^{\dagger}\times \frac{\partial}{\partial \vec{R}}\ket{n,t} $$
## Proof.
$$\begin{align}
\vec{B}_{n} & = \frac{\partial}{\partial \vec{R}}\times \vec{A}_{n} \\
 & = i\frac{\partial}{\partial \vec{R}}\times \bra{n,t}  \frac{\partial}{\partial \vec{R}}\ket{n,t} \\
 & = ie_{k}\epsilon_{ijk} \frac{\partial}{\partial R_{i}}\bra{n,t}  \frac{\partial}{\partial R_{j}}\ket{n,t}  \\
 & = ie_{k}\epsilon_{ijk}\left(  \frac{\partial}{\partial R_{i}}\ket{n,t}  \right)^{\dagger} \frac{\partial}{\partial R_{j}}\ket{n,t} + ie_{k} \bra{n,t}  \frac{\partial}{\partial R_{i}} \frac{\partial}{\partial R_{j}} \ket{n,t}  \\
 & = i\left(  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger} \times \frac{\partial}{\partial \vec{R}}\ket{n,t} + i\bra{n,t}  \frac{\partial}{\partial \vec{R}}\times\left(  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right) \\
 & =  i\left(  \frac{\partial}{\partial \vec{R}}\ket{n,t}  \right)^{\dagger} \times \frac{\partial}{\partial \vec{R}}\ket{n,t}
\end{align}$$
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
