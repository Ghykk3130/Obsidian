# 1.

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
