# Problem 1
## (a)

Consider performing a Lorentz transformation on the 4-momentum. Observe that the Jacobian matrix is exactly $\Lambda^{\alpha}{}_{\beta}$ since:
$$k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}\implies \frac{\partial k^{'\mu}}{\partial k^{\nu}}=\Lambda^{\mu}{}_{\nu}$$
We know that $d^{4}k^{'}=| \frac{\partial k^{'\mu}}{\partial k^{\nu}} |d^{4}k$. By definition, the Lorentz group preserves the Minkowski metric, and therefore their determinant can only be $\pm 1$. And we define our familiar Lorentz transformation to have determinant $+1$ without considering spatial inversion or time reversal. 

Then apparently $d^{4}k^{'}=d^{4}k$.
## (b)

 Assume $k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}$. Then we need to evaluate:
 $$\int d^{4}k^{'} \delta(k^{'{2}}-m^{2})\theta(k^{'0})=\int d^{4}k \delta(k^{' 2}-m^{2})\theta(k^{'0})$$
 The root of the equation $k^{'2}-m^{2}$ is given by:
 $$\begin{align}
 & k^{'2}-m^{2}=0  \Leftrightarrow k^{2}-m^{2}=0
\end{align}$$
since $k^{'2}=k^{2}$. But there should be a gradient gets forces out. We need:
$$\begin{align}
\left| \frac{\partial k^{'\mu}}{\partial k^{\nu}} \right|= 1
\end{align}$$
Assume that $k^{0}>0$. $k^{'0}$ is certainly unchanged under rotation. Under boost in $k^{3}$ direction, we have $k^{'0}=\gamma k^{0}-\gamma v k^{3}\geq \gamma k^{0}-\gamma k^{3}=\gamma(\sqrt{ m^{2}+k_{1}^{2}+k_{2}^{2}+k_{3}^{2} }-k^{3})\geq{0}$. Then we know that $\text{sgn}(k^{'0})=\text{sgn}(k^{0})$. Then we have:
$$\begin{align}
\int d^{4}k\delta(k^{'2}-m^{2})\theta(k^{'0}) & = \int d^{4}k \frac{\delta(k^{2}-m^{2})}{| \frac{\partial k^{'\mu}}{\partial k^{\nu}} |}\theta(k^{0}) \\
 & = \int d^{4}k \delta(k^{2}-m^{2})\theta(k^{0})
\end{align}$$

