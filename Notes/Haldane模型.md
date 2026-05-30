# 1. Haldane模型

考虑蜂窝晶格的如下hamiltonian：
$$\begin{align}
H & = -t\sum_{\langle i,j\rangle}(c^{\dagger}_{A,i}c_{B,j}+ c_{B,j}^{\dagger}c_{A,i})-t^{'}\sum_{\langle \langle i,j\rangle \rangle}e^{i\phi_{ij}}(c^{\dagger}_{A,i}c_{A,j}+c_{B,i}^{\dagger}c_{B,j})
\end{align}$$
其中，$A,i$表示第$i$个$A$原子。$\sum_{\langle i,j\rangle}c^{\dagger}_{A,i}c_{B,j}$表示对第$i$个$A$原子和第$j$个$B$原子求和，要求这两个原子最邻近。$\langle \langle i,j\rangle \rangle$表示这两个原子要次邻近。若$i\rightarrow j$的路径沿六边形绕出的小圆弧为顺时针，则取$\frac{\pi}{2}$。若为逆时针，则取$- \frac{\pi}{2}$。

![[Pasted image 20260530170459.png|center|300]]
显然第一项为：
$$\begin{align}
-t\sum_{i,\delta}(c^{\dagger}_{A,i}c_{B,i+\delta}+c_{B,i+\delta}^{\dagger}c_{A,i})
\end{align}$$
考虑Fourier变换$c_{A,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{A,k},\ c_{B,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{B,k}$。由[[石墨烯的tight-binding模型]]可得这一项为：
$$-t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c_{B,k}^{\dagger}c_{A,k}),\ f(k)=\sum_{\delta}e^{ik\delta}$$
类似地，第二项可以写为：
$$\begin{align}
-t^{'}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}(c^{\dagger}_{A,i}c_{A,i+\delta^{'}}+c^{\dagger}_{B,i}c_{B,i+\delta^{'}})
\end{align}$$
代入Foueri变化，则其中第一项为：
$$\begin{align}
-\frac{t^{'}}{N}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}\sum_{k,k^{'}}e^{-ikR_{i}}e^{ik^{'}(R_{i}+\delta^{'})}c^{\dagger}_{A,k}c_{A,k^{'}}
\end{align}$$
将$\delta^{'}$按顺时针逆时针分为$\delta^{'}_{c},\ \delta^{'}_{cw}$。那么：
$$\begin{align}
-\frac{t^{'}}{N}\sum_{i,\delta^{'}_{c}}e^{i\phi_{i,i+\delta^{'}_{c}}}\sum_{k,k^{'}}e^{-ikR_{i}}e^{ik^{'}(R_{i}+\delta^{'}_{c})}c^{\dagger}_{A,k}c_{A,k^{'}} & = - \frac{t^{'}}{N}  \sum_{\delta^{'}_{c}} e^{i\phi_{i,i+\delta^{'}_{c}}} \sum_{k,k^{'}}\sum_{i}e^{iR_{i}(k^{'}-k)}e^{ik^{'}\delta^{'}_{c}} c^{\dagger}_{A,k}c_{A,k^{'}} \\
 & = -t^{'}\sum_{\delta^{'}_{c}}e^{i\phi_{i,i+\delta^{'}_{c}}} e^{ik\delta^{'}_{c}}\sum_{k}c^{\dagger}_{A,k}c_{A,k} \\
 & = -t^{'}\sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}\sum_{k}c^{\dagger}_{A,k }c_{A,k}
\end{align}$$
同理容易得到逆时针项为$-t^{'}\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}}\sum_{k}c^{\dagger}_{A,k}c_{A,k}$。相加得到：
$$\begin{align}
-t^{'}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}c^{\dagger}_{A,i}c_{A,i+\delta^{'}} & = -t^{'}\sum_{k}c^{\dagger}_{A,k}c_{A,k}\left( \sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}+\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}} \right)
\end{align}$$
我们计算：
$$\begin{align}
\left( \sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}+\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}} \right) & = -ie^{ik\delta^{'}_{1}}+ie^{-ik\delta^{'}_{1}}+ie^{ik\delta^{'}_{2}}-ie^{-ik\delta^{'}_{2}}-ie^{ik\delta^{'}_{3}}+ie^{-ik\delta^{'}_{3}} \\
 & = 2(i)^{2}(-\sin k\delta_{1}^{'}+\sin k\delta^{'}_{2}-\sin k\delta^{'}_{3}) \\
 & = -2\left( \sin \sqrt{ 3 }ak_{y}-2\cos \frac{3}{2}ak_{x}\sin \frac{\sqrt{ 3 }}{2}ak_{y} \right) \\
 & =-2g(k)
\end{align}$$
对于$B$子格，容易发现$A$子格的顺时针路径对应其逆时针路径，而$A$子格的逆时针路径对应其顺时针路径。于是容易写出：
$$\begin{align}
H & = -t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c^{\dagger}_{B,k}c_{A,k})+2t^{'}\sum_{k}g(k)(c^{\dagger}_{A,k}c_{A,k}-c^{\dagger}_{B,k}c_{B,k}) \\
 & = \sum_{k}\begin{pmatrix}
c^{\dagger}_{A,k} & c^{\dagger}_{B,k}
\end{pmatrix} \begin{pmatrix}
2t^{'}g(k) & -tf(k) \\
-tf^{*}(k) & -2t^{'}g(k)
\end{pmatrix} \begin{pmatrix}
c_{A,k} \\
c_{B,k}
\end{pmatrix}
\end{align}$$
对角化得到色散关系：
$$\boxed{E_{\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+4t^{'2}g^{2}(k) }}$$
我们发现对比起最邻近tight-binding模型，Haldane模型能隙打开。

![[Pasted image 20260530191658.png|center|500]]

# 2. 同伦

我们一般性地定义同伦：

>[!Note] Definition 2.1
>Let $X,Y$ be topological spaces. Given $f,g:X\rightarrow Y$, we say $f,g$ are homotopic to each other if there exists a continuous function $F:X\times[0,1]\rightarrow Y$ such that
>$$F(x,0)=f(x),\ F(x,1)=g(x)$$
>Write $f\sim g$.



