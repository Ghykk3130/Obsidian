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

考虑自旋不再局限于xy面内。令第n个自旋与x轴夹角为$\theta$，在yz面上投影极角为$\phi_{n}$。不妨设$\phi_{n}=nq+\psi$。

那么：
$$\begin{align}
\epsilon & = -J_{1}\mathbf{m}_{n}\cdot \mathbf{m}_{n+1}-J_{2}\mathbf{m}_{n}\cdot \mathbf{m}_{n+1}-g\mu_{B}Bm^{x}_{n} \\
 & = -J_{1}(\cos ^{2}\theta+\sin ^{2}\theta \cos q)-J_{2}(\cos ^{2}\theta+\sin ^{2}\theta \cos 2q)-g\mu_{B}B\cos \theta \\
 
 & = -J_{1}-J_{2}+\sin ^{2}\theta[J_{1}(1-\cos q)+J_{2}(1-\cos_{2}1)]-g\mu_{B}B\cos \theta
\end{align}$$
极值化得到：
$$\begin{align}
 & \frac{\partial\epsilon}{\partial \theta}  = \sin \theta\left[ 2\cos \theta(J_{1}(1-\cos_{}q)+J_{2}(1-\cos{2}q)) +g\mu_{B}B\right]=0 \\
 &  \frac{\partial\epsilon}{\partial q}=\sin ^{2}\theta(J_{1}\sin q+4J_{2} \sin 2q)=0
\end{align}$$
我们排除铁磁态$\theta=0$，得到：
$$\begin{align}
 & \cos \theta= - \frac{g\mu_{B}B}{2(J_{1}(1-\cos q)+J_{2}(1-\cos_{}2q))} \\
 & J_{1} \sin q+4J_{2} \sin 2q=0
\end{align}$$
Fan state存在的条件为$0< \cos \theta <1$。