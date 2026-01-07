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


