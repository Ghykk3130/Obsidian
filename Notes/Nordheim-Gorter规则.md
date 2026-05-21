考虑一条能带。若该条能带存在多种散射机制，用$i$标记散射机制。我们知道若只存在一种散射机制，则：
$$\begin{align}
\sigma & = e^{2}K_{0} \\
 & = e^{2} \int_{-\infty}^{\infty}d\epsilon N(\epsilon)\left( - \frac{\partial f^{0}}{\partial\epsilon} \right) \frac{1}{3}v^{2}\tau \\
 & \approx e^{2}N(\epsilon_{F}) \frac{1}{3}v^{2}\tau(\epsilon_{F})=C\tau(\epsilon_{F})
\end{align}$$
对于第$i$种散射机制，若这种机制单独存在，我们有：
$$\begin{align}
\sigma_{i} & =C\tau_{i}
\end{align}$$
显然因为是一条能带，$C$对于任何$i$都一样。显然，总散射律是各个散射机制散射率之和：
$$\begin{align}
w & = \sum_{i}w_{i} \implies \frac{1}{\tau}=\sum_{i} \frac{1}{\tau_{i}}
\end{align}$$
那么：
$$\sigma= C\tau= \frac{C}{\sum_{i}1 /\tau_{i} }= \frac{1}{\sum_{i}1 /\sigma_{i}}$$
故：
$$\begin{align}
\rho & = - \frac{\pi^{2}k^{2}T}{3|e|} \left.\frac{\partial}{\partial\epsilon}(\ln \sigma)\right|_{\epsilon=\epsilon_{F}}
\end{align}$$