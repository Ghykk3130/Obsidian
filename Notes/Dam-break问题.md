考虑一个二维流体。$t<0$时在$x=0$存在一个大坝，将高度为$h_{0}$的水挡在左侧。初始条件为：
$$u_{x}(x,t)=0\text{ for }t<0,\ h(x,t)=\left\{\begin{align}
 & h_{0},\ t<0,\ x<0 \\
 & 0,\ t<0, x>0
\end{align}\right.$$
在$t=0$时拆掉大坝。我们希望得到$\mathbf{u}(x,y,t),\ h(x,t)$。考虑非线性波[[非线性波]]，我们只需要解得$R_{\pm}$即可。我们已经知道，在$x<0,\ t<0$区域，存在：
$$\begin{align}
 & R_{+}=u_{x}+2c=2c_{0} \\
 & R_{-}=u_{x}-2c=-2c_{0}
\end{align}\text{ where }c_{0}=\sqrt{ gh_{0} }$$
因为$R_{\pm}$沿着世界线$C_{\pm}$是不变量，我们希望通过$C_{\pm}$将$R_{\pm}$的值拓展到未知的区域中。

>[!Success] Proposition 1
>In the region $\{ (x,t)|x\leq 0,\ x\leq c_{0}t \}$, the world lines $\mathcal{C}_{\pm}$ straight lines with slopes $\pm \frac{1}{c_{0}}$.
## Proof.

回忆起这些世界线的定义：
$$\begin{align}
 &  \frac{\partial t}{\partial \xi_{\pm}}=1 \\
 &  \frac{\partial x}{\partial \xi_{\pm}}=u_{x}\pm c
\end{align}$$
所以在$x\leq 0,\ t\leq 0$区域内，显然沿着$\mathcal{C}_{\pm}$中一条世界线有：
$$\frac{\partial t}{\partial x}= \frac{1}{\pm c_{0}}$$
![[Drawing 2026-03-07 20.20.08.excalidraw|center|300]]
现在考虑$x<0,\ t>0$区域。假设任意一条$x\leq 0,\ t\leq 0$区域内$\mathcal{C}_{-}$线交$x$轴于$A$点。假设任意一条从$A$左侧延伸出来的$\mathcal{C}_{+}$线都与$\mathcal{C}_{-}$线稠密地相交。由于这两条线上恒有：
$$\begin{align}
 & R_{+}= 2c_{0}=u_{x}+2c \\
 & R_{-}=-2c_{0}=u_{x}-2c
\end{align}$$
所以在任意一个交点，都有：
$$\begin{align}
 & u_{x}=0,\ c=c_{0}
\end{align}$$
所以该交点处，$\mathcal{C}_{\pm}$线切线斜率被约束为$\frac{1}{\pm c_{0}}$。由于这些交点稠密，这些$\mathcal{C}_{\pm}$线一定是连续地，斜率不变地从$x\leq 0,\ t\leq 0$区域延伸过来的。最远处可以到达$t=- \frac{1}{c_{0}}x$。
![[Pasted image 20260307203239.png|center|300]]
>[!Right]
>$\blacksquare$

>[!Success] Proposition 2
>$\mathcal{C}_{-}$ worldlines are straight lines passing through the origin in the region $\{ (x,t)|x\geq-c_{0}t,\ x\leq 2c_{0} t \}$
## Proof.

任意考虑一条$\mathcal{C}_{-}$世界线，假设从$\{ (x,t)|x\leq 0,\ x\leq -c_{0}t \}$区域延伸出来的$\mathcal{C}_{+}$线和它稠密地相交。那么对于任意一个交点，存在：
$$\begin{align}
 & R_{+}=2c_{0}=u_{x}+2c \\
 & R_{-}=\text{const.}=u_{x}-2c
\end{align}$$
所以$u_{x},c$为定值。所以$\mathcal{C}_{-}$线切线斜率$\frac{1}{u_{x}-c_{}}$为定值。所以$\mathcal{C}_{-}$为直线。

