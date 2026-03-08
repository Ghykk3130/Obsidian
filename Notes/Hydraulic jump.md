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

