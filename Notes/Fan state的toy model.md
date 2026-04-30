# 1. Helical state

考虑一个z方向的一维链。链上自旋局限于xy面内。自旋之间等距，存在邻近和次邻近交换$J_{1},J_{2}$。令$\phi_{n}$表示第n个自旋的方向。施加磁场$(B,0,0)$。则hamiltonian为：
$$\begin{align}
H & = -\sum_{n}[J_{1}\cos(\phi_{n+1}-\phi_{n})+J_{2}\cos(\phi_{n+2}-\phi_{n})+g\mu_{B}B \cos(\phi_{n})]
\end{align}$$
在磁场为零时，我们假设$\phi_{n}=n\phi$。那么单格点能量为：
$$\epsilon=-J_{1}\cos \phi-J_{2}\cos{2}\phi$$
那么：
$$\frac{\partial\epsilon}{\partial \phi}=\sin \phi(J_{1}+4J_{2}\cos \phi)=0$$
存在共线解$\phi=0,\pi$，和螺旋解$\cos \phi=- \frac{J_{1}}{4J_{2}}$。后者只在$|J_{1}|<4|J_{2}|$时存在。为了判断稳定性，我们求二阶导：
$$\frac{\partial^{2}\epsilon}{\partial \phi^{2}}= J_{1}\cos \phi+4J_{2}(2\cos ^{2}\phi-1)$$

- 若$J_{1}>0,\ J_{2}>- \frac{J_{1}}{4}$，FM态稳定。邻近交换铁磁，次邻近交换弱反铁磁或者铁磁。
- 若$J_{1}<0, J_{2}> \frac{J_{1}}{4}$，AFM态稳定。邻近交换反铁磁，次邻近交换弱反铁磁或者铁磁。
- 若$J_{2}<0$，且螺旋态存在，则螺旋态稳定。次邻近交换反铁磁，且比较大。
# 2. Fan state

先考虑加大磁场，发生从helical到fan的相变。
