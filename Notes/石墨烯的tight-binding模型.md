石墨烯的一个元胞里有不等价的$A,B$两个碳原子。考虑每个碳原子在只有一个导电电子轨道。用$i$标记所有碳原子，那么hamiltonian可以写为：
$$H=-t\sum_{\langle i,j\rangle}c^{\dagger}_{i}c_{j}$$
若假设一次量子化的可加hamiltonian为$H_{0}$，那么$t=-\bra{i}H_{0}\ket{j}$。我们假设若$i,j$不邻近的话，波函数重叠太少，以至于$t=0$。hamiltonian还可以写为：
$$H=-t\sum_{i,\delta}(c^{\dagger}_{A,i}c_{B,i+\delta}+c^{\dagger}_{B,i+\delta}c_{A,i})$$
其中，$i$标记元胞，$i+\delta$标记离$A$最近的三个元胞（包含$i$）。

>[!Quote]
>这个hamiltonian没有重复计数。固定$i$，求和路径如下所示：
>![[Pasted image 20260530150426.png|center|400]]
>总共有三个$\delta$的路径，每个往返都计入。

我们作Fourier变换$c_{A,{i}}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{A,k},\ c_{B,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{B,i}$。其中，$N$为总元胞数。于是：
$$\begin{align}
H & = -t\sum_{i,\delta} \left(  \frac{1}{N}\sum_{k,k^{'}}e^{-ikR_{i}}c_{A,k}^{\dagger}e^{ik^{'}(R_{i}+\delta)}c_{B,k^{'}}+\text{h.c.} \right) \\
 & = -t  \frac{1}{N} \sum_{\delta}\sum_{k,k^{'}}\sum_{i}e^{iR_{i}(k^{'}-k)}e^{ik^{'}\delta}c_{A,k}^{\dagger}c_{B,k^{'}}+\text{h.c.} \\
 & = -t\sum_{\delta}\sum_{k,k^{'}}\delta_{k^{'}=k}e^{ik^{'}\delta}c_{A,k}^{\dagger}c_{B,k^{'}}+\text{h.c.} \\
 & = -t\sum_{k} \sum_{\delta}e^{ik\delta}c^{\dagger}_{A,k}c_{B,k}+\text{h.c.} \\
 & = -t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c_{B,k}^{\dagger}c_{A,k}),\ f(k)=\sum_{\delta}e^{ik\delta} \\
 & = \sum_{k}\begin{pmatrix}
c^{\dagger}_{A,k} & c_{B,k} 
\end{pmatrix} \begin{pmatrix}
0 &  -tf(k)  \\
-tf^{*}(k)  &0 
\end{pmatrix} \begin{pmatrix}
c^{\dagger}_{A,k} \\
c^{}_{B,k}
\end{pmatrix}
\end{align}$$
对角化hamiltonian得到色散关系$E_{\pm}(k)=\pm t^{2}|f(k)|$。因为$\delta$有如下三种取值：
$$\delta_{1}=a(1,0),\ \delta_{2}=a\left( - \frac{1}{2}, \frac{\sqrt{ 3 }}{2} \right),\ \delta_{3}= a\left( - \frac{1}{2},- \frac{\sqrt{ 3 }}{2} \right)$$
所以：
$$\begin{align}
f(k) & = e^{iak_{x}}+e^{- i \frac{a}{2}k_{x}}2 \cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)
\end{align}$$
于是：
$$\begin{align}
E_{\pm}(k) & = \pm t\sqrt{ 1+4\cos\left(  \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+ 4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) } \\
 & = \pm t \sqrt{ 3+ 4\cos \left(  \frac{3}{2}ak_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+2\cos(\sqrt{ 3 }ak_{y}) }
\end{align}$$

