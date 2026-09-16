# Problem 1
## (a)

Consider performing a Lorentz transformation on the 4-momentum. Observe that the Jacobian matrix is exactly $\Lambda^{\alpha}{}_{\beta}$ since:
$$k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}\implies \frac{\partial k^{'\mu}}{\partial k^{\nu}}=\Lambda^{\mu}{}_{\nu}$$
We know that $d^{4}k^{'}=| \frac{\partial k^{'\mu}}{\partial k^{\nu}} |d^{4}k$. By definition, the Lorentz group preserves the Minkowski metric, and therefore their determinant can only be $\pm 1$. And we define our familiar Lorentz transformation to have determinant $+1$ without considering spatial inversion or time reversal. 

Then apparently $d^{4}k^{'}=d^{4}k$.
## (b)

 Assume $k^{'\mu}=\Lambda^{\mu}{}_{\nu}k^{\nu}$. Then we need to evaluate:
 $$\int d^{4}k^{'} \delta(k^{'{2}}-m^{2})\theta(k^{'0})=\int d^{4}k \delta(k^{' 2}-m^{2})\theta(k^{'0})$$
View $k^{'2}$ as a function of $k^{2}$. We have $k^{'2}=k^{2}$ by Lorentz invariance. Then:
$$\begin{align}
\delta(k^{'2}-m^{2})= \frac{\delta(k^{2}-m^{2})}{|dk^{'2} /dk^{2} |}=\delta(k^{2}-m^{2})
\end{align}$$
Next we show that $\text{sgn}(k^{0})$ is invariant. $k^{0}$ is certainly unchanged under rotation. Then consider a boost in $k^{3}$ direction. If $k^{0}>0$, we have $k^{'0}=\gamma k^{0}-\gamma v k^{3}\geq \gamma k^{0}-\gamma k^{3}=\gamma(\sqrt{ m^{2}+(k^{1})^{2}+(k^{2})^{2}+(k^{3})^{2} }-k^{3})>{0}$. If $k^{0}<0$, we have $k^{'0}=\gamma(-\sqrt{ m^{2}+(k^{1})^{2}+(k^{2})^{2}+(k^{3})^{2} }-k^{3})< 0$. Then without loss of generality, we conclude that $\text{sgn}(k^{0})$ is unchanged under Lorentz transformation. Then $\theta(k^{'0})=\theta(k^{0})$. 

Therefore:
$$\begin{align}
\int d^{4}k\delta(k^{'2}-m^{2})\theta(k^{'0}) 
 & = \int d^{4}k \delta(k^{2}-m^{2})\theta(k^{0})
\end{align}$$


