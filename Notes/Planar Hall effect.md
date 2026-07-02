考虑一个二维材料。磁场沿$x^{'}$轴。在任意方向施加电场，引出电流。那么可以构造电阻率张量：
$$\begin{align}
\begin{pmatrix}
E_{x^{'}} \\
E_{y^{'}}^{} 
\end{pmatrix}= \begin{pmatrix}
\rho_{\parallel} & \rho_{x^{'}y^{'}} \\
\rho_{y^{'}x^{'}} & \rho_{\perp}
\end{pmatrix} \begin{pmatrix}
J_{x^{'}} \\
J_{y^{'}}
\end{pmatrix}
\end{align}$$
因为系统具有沿$x^{'}$轴的镜面对称性。于是必有：
$$\begin{align}
\begin{pmatrix}
E_{x^{'}} \\
-E_{y^{'}}
\end{pmatrix}= \begin{pmatrix}
\rho_{\parallel} & \rho_{x^{'}y^{'}} \\
 \rho_{y^{'}x^{'}} & \rho_{\perp}
\end{pmatrix} \begin{pmatrix}
J_{x^{'}} \\
-J_{y^{'}}
\end{pmatrix}
\end{align}$$
于是容易得到$\rho_{x^{'}y^{'}}=\rho_{y^{'}x^{'}}=0$。即：
$$\begin{align}
\begin{pmatrix}
E_{x^{'}} \\
E_{y^{'}}^{} 
\end{pmatrix}= \begin{pmatrix}
\rho_{\parallel} & 0 \\
0 & \rho_{\perp}
\end{pmatrix} \begin{pmatrix}
J_{x^{'}} \\
J_{y^{'}}
\end{pmatrix}
\end{align}$$
此时将系统整体，包括磁场整体旋转，使得$\mathbf{B}$和新的x轴呈$\alpha$角。令$R= \begin{pmatrix}\cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha\end{pmatrix}$。那么：
$$\begin{align}
\begin{pmatrix}
E_{x} \\
E_{y}
\end{pmatrix}=R\begin{pmatrix}
E_{x^{'}} \\
E_{y^{'}}
\end{pmatrix}= R\begin{pmatrix}
\rho_{\parallel} & 0 \\
0 & \rho_{\perp}
\end{pmatrix}R^{-1}R \begin{pmatrix}
J_{x^{'}} \\
J_{y^{'}}
\end{pmatrix}= R \begin{pmatrix}
\rho_{\parallel} & 0 \\
0 & \rho_{\perp}
\end{pmatrix} R^{-1} \begin{pmatrix}
J_{x} \\
J_{y}
\end{pmatrix}
\end{align}$$
于是得到新的电导张量。令$J_{y}=0$。可以得到：
$$\begin{align}
 & \rho_{x x}= \rho_{\perp}+(\rho_{\parallel}-\rho_{\perp})\cos ^{2}\alpha \\
 & \rho_{yx}= (\rho_{\parallel}-\rho_{\perp})\sin \alpha \cos \alpha
\end{align}$$
其中，$\rho_{yx}=(\rho_{\parallel}-\rho_{\perp})\sin \alpha \cos \alpha$被称为planar Hall effect贡献。显然$\rho_{yx}$是随磁场对称的。

