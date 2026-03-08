考虑浅水波的两个方程：

>[!Success] Proposition 1
>For shallow wave, we have the mass conservation:
>$$\frac{\partial h}{\partial t}+ \frac{\partial}{\partial x}(uh)=0$$
## Proof.

考虑一个小区域$[x,x+\delta x]$。则流入该区域内质量为：
$$-(-\rho u(x,t)h(x,t)+ \rho u(x+\delta x,t)h(x+\delta x,t))\approx - \rho \frac{\partial}{\partial x}(uh)\delta x$$
其中我假设了$u(x,t)$没有$y$的dependence。那么：
$$\frac{\partial}{\partial t}(\delta x h \rho)=- \rho \frac{\partial}{\partial x}(uh)\delta x  \implies \frac{\partial}{\partial t}h+ \frac{\partial}{\partial x}(uh)=0$$
>[!Right]
>$\blacksquare$

>[!Success] Proposition 2
>For shallow wave, we have:
>$$\frac{\partial}{\partial t}(uh)+ \frac{\partial}{\partial x}\left(  u^{2}h+ \frac{1}{2} gh^{2} \right)=0$$
## Proof.

我们有：
$$\frac{\partial}{\partial t}(\rho u_{i})+ \frac{\partial \Pi_{ij}}{\partial r_{j}}=0,\ \Pi_{ij}=\rho u_{i}u_{j}+p\delta_{ij}$$
所以：
$$\begin{align}
\frac{\partial}{\partial t}(\rho u)+ \frac{\partial}{\partial x}(\rho u^{2}+p)+ \frac{\partial}{\partial y}(\rho uv)=0
\end{align}$$
我们积分：
$$\begin{align}
 & \int_{0}^{h}dy \frac{\partial}{\partial t}(\rho u)+ \int_{0}^{h}dy \frac{\partial}{\partial x}(\rho u^{2}+p)+ \int_{0}^{h}dy \frac{\partial}{\partial y}(\rho uv)=0
\end{align}$$
容易知道：
$$\frac{\partial}{\partial t}\mathbb{1}_{[0,h]}= \lim_{ \delta t \to 0 }  \frac{\mathbb{1}_{\left[ 0,h+ \frac{\partial h}{\partial t}\delta t \right]}- \mathbb{1}_{[0,h]}}{\delta t}= \frac{\partial h}{\partial t}\delta(y-h)$$
所以：
$$\begin{align}
\frac{\partial}{\partial t}\int_{0}^{h}dy\rho u & = \frac{\partial}{\partial t}\int_{\mathbb{R}}dy\mathbb{1}_{[0,h] \rho u} \\
 & = \frac{\partial h}{\partial t}\rho u|_{y=h}+ \int_{0}^{h}dy \frac{\partial}{\partial t}(\rho u)
\end{align}$$
故若假设$u$没有$y$ dependence：
$$\begin{align}
\int_{0}^{h}dy \frac{\partial}{\partial t}(\rho u) & = -\frac{\partial h}{\partial t}\rho u|_{y=h}+\frac{\partial}{\partial t}\int_{0}^{h}dy\rho u \\
 & = -\frac{\partial h}{\partial t}\rho u|_{y=h}+ \rho\frac{\partial}{\partial t}( uh) 
\end{align}$$
类似地：
$$\begin{align}
\int_{0}^{h}dy \frac{\partial}{\partial x}(\rho u^{2}+p) & = -\frac{\partial h}{\partial x}(\rho u^{2}+p)|_{y=h}+ \frac{\partial}{\partial t}\int_{0}^{h}dy (\rho u^{2}+p)
\end{align}$$
不妨设大气压为零，令压力为静压力$p=\rho g(h-y)$，那么：
$$\begin{align}
\int_{0}^{h}dy \frac{\partial}{\partial x}(\rho u^{2}+p) & =- \frac{\partial h}{\partial x}(\rho u^{2}+p)|_{y=h}+ \frac{\partial}{\partial t}\left( \rho u^{2}h+ \frac{1}{2}\rho gh^{2} \right)
\end{align}$$
接下来：
$$\begin{align}
\int_{0}^{h}dy \frac{\partial}{\partial y}(\rho uv) & = [\rho uv]_{0}^{h}= \rho uv|_{y=h}= \rho u\left( u \frac{\partial h}{\partial x}+  \frac{\partial h}{\partial t} \right)|_{y=h}
\end{align}$$
那么：
$$\begin{align}
 & -\frac{\partial h}{\partial t}\rho u|_{y=h}+ \rho\frac{\partial}{\partial t}( uh) - \frac{\partial h}{\partial x}(\rho u^{2}+p)|_{y=h}+ \frac{\partial}{\partial t}\left( \rho u^{2}h+ \frac{1}{2}\rho gh^{2} \right)+\rho u\left( u \frac{\partial h}{\partial x}+  \frac{\partial h}{\partial t} \right)|_{y=h}=0 \\
\implies & \rho \frac{\partial}{\partial t}(uh)+ \frac{\partial}{\partial x}\left( \rho u^{2}h+ \frac{1}{2}\rho gh^{2} \right)=0
\end{align}$$
>[!Right]
>$\blacksquare$

考虑浅水中某点$x_{s}$两侧发生$u,h$的突变，分别为$u_{1},h_{1}$和$u_{2},h_{2}$，那么我们可以得到：

>[!Success] Proposition 3
>$$\begin{align}
 & u_{1}h_{1}=u_{2}h_{2} \\
 & u_{1}^{2}h_{1}+ \frac{1}{2}gh_{1}^{2}= u_{2}^{2}h_{2}+ \frac{1}{2}gh_{2}^{2}
\end{align}$$
## Proof.

考虑定常流动，我们有：
$$\begin{align}
 & \frac{\partial}{\partial x}(uh)=0 \\
 & \frac{\partial}{\partial x}\left( u^{2}h+ \frac{1}{2}gh^{2} \right)=0
\end{align}$$
则在区域$[x_{s}-\epsilon,x_{s}+\epsilon]$内积分即可。
>[!Right]
>$\blacksquare$

我们定义Froude数：

>[!Note] Definition 1
>Define the Froude number: $\text{Fr}= \frac{u}{\sqrt{ gh }}$

那么可以证明：

>[!Success] Proposition 4
>$$\frac{h_{2}}{h_{1}}= \frac{-1+ \sqrt{ 1+8\text{Fr}_{1}^{2} }}{2}$$
## Proof.

令$q= u_{1}h_{1}=u_{2}h_{2}$。我们有：
$$\begin{align}
 & u_{1}^{2}h_{1}+ \frac{1}{2}gh_{1}^{2}= u_{2}^{2}h_{2}+ \frac{1}{2}gh_{2}^{2} \\
\implies & \frac{q^{2}}{h_{2}}+ \frac{1}{2}gh_{2}^{2}= \frac{q^{2}}{h_{1}}+ \frac{1}{2}gh_{1}^{2} \\
\implies & \frac{q^{2}}{h_{1}^{2}h_{2}}+ \frac{1}{2}g\left(  \frac{h_{2}}{h_{1}} \right)^{2}= \frac{q^{2}}{h_{1}^{3}}+ \frac{1}{2}g \\
\implies & \text{Fr}_{1}^{2}\left(  \frac{h_{1}}{h_{2}} \right)+ \frac{1}{2}g\left(  \frac{h_{2}}{h_{1}} \right)^{2}= \text{Fr}_{1}^{2}+ \frac{1}{2} \\
\implies &  2\text{Fr}_{1}^{2}\left(  \frac{1}{r}-1 \right)= (1-r)(1+r)\text{ where }r= \frac{h_{2}}{h_{1}} \\
\end{align}$$
我们忽略trivial solution $r=1$。那么：
$$-2\text{Fr}_{1}^{2} \frac{1}{r}=1+r\implies r= \frac{-1\pm \sqrt{ 1+8\text{Fr}_{1}^{2} }}{2}$$
取正解即可。
>[!Right]
>$\blacksquare$




