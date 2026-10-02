给定一个Lorentz变换$x^{'\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}$。对于一个标量场$\phi(x)$，我们通常有：
$$\begin{align}
 & \phi_{}^{'}(x^{'})=\phi_{}(x) \\
\implies & \phi^{'}_{}(x^{'})= \phi_{}(\Lambda ^{-1}x^{'})
\end{align}$$
或者可以写成$\phi^{'}_{}(x)=\phi_{}(\Lambda ^{-1}x)$。通过将所有变化吸收进场的functional dependence本身。

对于一个矢量场，假设$\phi_{a}(x)$是矢量场的component，那么不同component会混合。我们一般有：
$$\phi_{a}^{'}(x)=M_{ab}(\Lambda)\phi_{b}(\Lambda ^{-1}x)$$
# 1. Lorentz群的李代数









SO(3)的表示

给定任意李群的表示$\{ R \}$，我们可以考虑无穷小变换：
$$\begin{align}
R(\theta)=1-i \theta_{i}J_{i}
\end{align}$$
其中，$J_{i}$称为生成元。我们可以把有限变换拆分成无穷小变换，从而用指数表示有限变换：
$$\begin{align}
R(\theta) & = \lim_{ N \to \infty } \left( 1- i \frac{\theta_{i}}{N}J_{i} \right)^{N} \\
 & = \exp\left( -i \theta_{i}J_{i} \right)
\end{align}$$




任取李代数中元素$X,\ Y$。令$\alpha$为一无穷小参数。（$\alpha$不是矢量。）考虑：
$$\begin{align}
\exp(-i\alpha X)Y \exp(i\alpha X) & = (1-i\alpha X)Y(1+i\alpha X) \\
 & = Y-i\alpha[X,Y]
\end{align}$$







任意考虑两个无穷小变换，修正到二阶，$R(\alpha),R(\beta)$。不妨记$R(\alpha)=\exp(- i\alpha_{i}J_{i})=\exp(-A)$，$R(\beta)=\exp(-i\beta_{i}J_{i})=\exp(-B)$。我们有：
$$\begin{align}
R(\alpha)R(\beta)R^{-1}(\alpha)R^{-1}(\beta) & =\left( 1-A+ \frac{A^{2}}{2} \right)\left( 1-B+ \frac{B^{2}}{2} \right)\left( 1+A+ \frac{A^{2}}{2} \right)\left( 1+B+ \frac{B^{2}}{2} \right) \\
 & = 1+(-A-B+A+B)+ \left( AB-A^{2}-AB-BA-B^{2}+AB+ \frac{A^{2}}{2}+ \frac{B^{2}}{2}+ \frac{A^{2}}{2}+ \frac{B^{2}}{2} \right) \\
 & = 1+AB-BA \\
 & = 1+ [A,B] \\
 & = 1-\alpha_{i}\beta_{j}[J_{i},J_{j}]
\end{align}$$
因为左手边显然还是一个无穷小变换。所以一定存在$\gamma$使得：
$$\begin{align}
i\gamma_{i}J_{i}=\alpha_{i}\beta_{j}[J_{i},J_{j}]
\end{align}$$



生成元将满足一定的对易关系$[J_{i},J_{j}]=$




可以证明，如果过两个表示的生成元的对易关系一样，那么两个表示等价。

考虑绕z轴无穷小旋转。我们有：
$$R_{\hat{\mathbf{z}}}(\theta)= \begin{pmatrix}
\cos \theta & -\sin \theta & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1
\end{pmatrix}\approx 1+ \theta\begin{pmatrix}
0 & -1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1
\end{pmatrix}=1-i\theta \begin{pmatrix}
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & i
\end{pmatrix}$$
不妨定义：
$$J_{z}= \begin{pmatrix}
0 & -i & 0 \\
i & 0 & 0 \\
0 & 0 & i
\end{pmatrix}$$
同理可以得到：
$$\begin{align}
J_{x}= \begin{pmatrix}
i & 0 & 0 \\
0 & 0 & -i \\
0 & i & 0
\end{pmatrix},\ J_{y}=\begin{pmatrix}
0 & 0 & -i \\
0 & i & 0 \\
i & 0 & 0
\end{pmatrix}
\end{align}$$



