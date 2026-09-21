# 1. k空间电子轨道

假设给系统加上磁场微扰。容易证明：
$$\begin{align}
\dot{\mathbf{k}}\cdot \mathbf{B} & = \frac{1}{\hbar}e (\mathbf{v} \times \mathbf{B}) \cdot \mathbf{B}=0
\end{align}$$
所以$\mathbf{k}$轨道垂直于$\mathbf{B}$。又因为：
$$\begin{align}
\frac{dE }{dt} & = \frac{\partial\epsilon}{ \partial \mathbf{k}}{\cdot}   \dot{\mathbf{k}}  \\
 & = \hbar \mathbf{v}\cdot \frac{1}{\hbar}e(\mathbf{v}\times \mathbf{B})\cdot \mathbf{B} \\
 & =0 
\end{align}$$
所以$\mathbf{k}$轨道在等能量面上。故$\mathbf{k}$轨道为一垂直于$\mathbf{B}$的平面与等能量面的交线。

若轨道闭合，我们计算电子在轨道上绕一圈的周期：
$$\begin{align}
\tau & = \oint \frac{dk}{|\dot{\mathbf{k}}|} \\
 & = \oint \frac{dk}{ \frac{|e|B}{\hbar} v_{\perp} } \\
 & = \oint \frac{\hbar^{2}}{|e|B} \frac{dk}{|(\partial E / \partial \mathbf{k})_{\perp} |} 
\end{align}$$
考虑一个从等能量面指向周围等能量面的矢量$\delta \mathbf{k}$。令$\delta \mathbf{k} \parallel   \hat{\mathbf{e}}_{\perp}$。其中$\hat{\mathbf{e}}_{\perp}$为垂直于$\mathbf{B}$的自然坐标系基矢量。那么：
$$\begin{align}
|\delta E| & = \left|\frac{\partial\epsilon}{\partial \mathbf{k}}\cdot\delta \mathbf{k} \right|= \left|\left(  \frac{\partial E}{\partial \mathbf{k}} \right)_{\perp}\right|\delta k
\end{align}$$
于是：
$$\begin{align}
\tau & = \oint \frac{\hbar^{2}}{|e|B} \frac{1}{|\delta E|} \delta kdk
\end{align}$$
发现$\oint \delta kdk$实际上是$\delta \mathbf{k}$连接的两个等能量面上的轨道之间所夹的面积。
![[Pasted image 20260921111906.png|centering|200]]
所以：
$$\begin{align}
\tau & = \frac{\hbar^{2}}{|e|B} \frac{\delta A}{|\delta E|} \\
 \implies  & \boxed{\tau = \frac{\hbar^{2}}{|e|B} \left| \frac{\partial A}{\partial E} \right|}
\end{align}$$
相应的角频率为：
$$\begin{align}
\boxed{\omega_{c}  = \frac{|e|B}{m_{\text{CR}}},\ m_{\text{CR}}= \frac{\hbar^{2}}{2\pi}\left| \frac{\partial A}{\partial E} \right|}
\end{align}$$
# 2. Landau level

考虑作Pierls代换，机械动量变成$\mathbf{p}\leadsto \mathbf{p}-e\mathbf{A}$。令$\mathbf{B}=B \hat{\mathbf{z}}$。取Landau规范$\mathbf{A}= xB \hat{\mathbf{y}}$。那么hamiltonian变成：
$$\begin{align}
H & = \frac{|\mathbf{p}-exB \hat{\mathbf{y}}|^{2}}{2m} \\
 & = \frac{1}{2m}(p_{x}^{2}+(p_{y}-exB)^{2}+p_{z}^{2})
\end{align}$$
注意到$[p_{y},H]=[p_{z},H]=0$。那么令本征态为$\psi=e^{ik_{y}y+ik_{z}z}f(x)$。解得：
$$\begin{align}
\left[\frac{1}{2m}  (\hbar k_{y}-exB)^{2}+ \frac{\hbar^{2}k_{z}^{2}}{2m} +   \frac{p_{x}^{2}}{2m} \right]f=Ef
\end{align}$$
注意到$\frac{p_{x}^{2}}{2m}+ \frac{1}{2m}(\hbar k_{y}-exB)^{2}$部分只是一个谐振子。所以能谱为：
$$\boxed{E(n,k_{z})= \left( \frac{1}{2}+n \right)\hbar \omega_{c}+ \frac{\hbar^{2}k^{2}_{z}}{2m},\ \omega_{c}= \frac{|e|B}{m}}$$
## Ex:

在二维系统中，令$k_{z}=0$。于是$E_{n}= ( \frac{1}{2}+n) \hbar \omega_{c}$。DOS如下：
![[Pasted image 20260921113556.png|centering|400]]
我们是在原先能带基础上开启磁场微扰。假设费米液体图景，每个$\mathbf{k}$态都绝热得演化成准粒子态，所以态仍然可以用$\mathbf{k}$来标记。不过能谱已经变为Landau level。

我们假设磁场的微扰非常小，以至于用$\mathbf{k}$标记的准粒子态仍然满足色散关系：
$$E= \frac{\hbar^{2}k^{2}}{2m}$$
固定$n$，联立Landau能级$E(n,k_{z})$与这个色散得到：
$$\begin{align}  & \frac{\hbar^{2}k^{2}}{2m}=\left(  \frac{1}{2}+n \right)\hbar \omega_{c}+ \frac{\hbar^{2}k_{z}^{2}}{2m}\\

\implies & \frac{\hbar^{2}}{2m}(k_{x}^{2}+k_{y}^{2})= \left(  \frac{1}{2}+n \right)\hbar \omega_{c}
\end{align}$$
它所定义出来的面称为Landau tube。注意到Landau tube并非等能量面。![[Pasted image 20260921114441.png|centering|200]]
由于k-space orbit能量不变，并且现在的等能量面已经退化成Landau tube和自由电子气等能量面的交线，那么电子只能在这些交线上运动。而且由于k-space orbit必须垂直于$\mathbf{B}$，所以这些交线必定$\perp \mathbf{B}$。

我们可以得到相邻Landau tube之间（在同一水平面上）相差的面积。我们有：
$$\begin{align}
 & E(l+1,k_{z})-E(l,k_{z})= \frac{|e|B}{m} \hbar
\end{align}$$
容易计算在这个setup下：
$$\begin{align}
m_{\text{CR}} & = \frac{\hbar^{2}}{2\pi} \frac{\partial A}{\partial E} \\
 & = \frac{\hbar^{2}}{2\pi} \frac{\partial}{\partial E}\pi(k_{x}^{2}+k_{y}^{2}) \\
 & = \frac{\hbar^{2}}{2\pi} \frac{\partial}{\partial E} \frac{2m}{\hbar^{2}}\pi E \\
 & = m
\end{align}$$
其中，$A(l,k_{z})$为Landau tube在$k_{z}=\text{const.}$平面上交出的面积。于是：
$$\begin{align}
 & E(l+1,k_{z} )-E(l,k_{z})= \frac{|e|B}{m}\hbar \\
\implies & E(l+1,k_{z} )-E(l,k_{z})= \frac{|e|B}{ \frac{\hbar^{2}}{2\pi} \frac{\partial A}{\partial E}  }\hbar \\
\implies & A(l+1,k_{z})-A(l,k_{z})= \frac{2\pi|e|B}{\hbar}
\end{align}$$
令$A(0,k_{z})= \frac{2\pi|e|B}{\hbar}\gamma,\ \gamma<1$。我们有：
$$\boxed{A(l,k_{z})= \frac{2\pi|e|B}{\hbar}(l+\gamma)}$$
# 3. Degeneracy

考虑二维系统。我们可以获得一个Landau tube中的态数。我们有：
$$\delta A=A(l+1)-A(l)= \frac{2\pi|e|B}{\hbar}$$
故：
$$\delta N= \frac{\delta A}{(2\pi /L)^{2}}= \frac{|e|B}{h} L^{2}$$


