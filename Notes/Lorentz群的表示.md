给定一个Lorentz变换$x^{'\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}$。对于一个标量场$\phi(x)$，我们通常有：
$$\begin{align}
 & \phi_{}^{'}(x^{'})=\phi_{}(x) \\
\implies & \phi^{'}_{}(x^{'})= \phi_{}(\Lambda ^{-1}x^{'})
\end{align}$$
或者可以写成$\phi^{'}_{}(x)=\phi_{}(\Lambda ^{-1}x)$。通过将所有变化吸收进场的functional dependence本身。

对于一个矢量场，假设$\phi_{a}(x)$是矢量场的component，那么不同component会混合。我们一般有：
$$\phi_{a}^{'}(x)=M_{ab}(\Lambda)\phi_{b}(\Lambda ^{-1}x)$$
# 1. SO(3)的表示





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



