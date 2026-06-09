考虑一个二维系统。考虑一个k-space中的二带Dirac hamiltonian：
$$\begin{align}
H(\mathbf{k}) & = v(k_{x}\sigma_{x}+k_{y}\sigma_{y})+\Delta \sigma_{z}
\end{align}$$
容易计算色散关系为$E_{\pm}(\mathbf{k})=\pm \sqrt{ v^{2}k^{2}+\Delta^{2} }$。能隙为$2|\Delta|$。

令$\mathbf{d}=(vk_{x},vk_{y},\Delta),\ H(\mathbf{k})=\mathbf{d}\cdot \boldsymbol{\sigma}$，我们知道Berry curvature为：
$$\begin{align}
\Omega_{\pm}(\mathbf{k}) & = \mp \frac{1}{2} \hat{\mathbf{d}}\cdot\left(  \frac{\partial  \hat{\mathbf{d}}}{\partial k_{x}}\times \frac{\partial  \hat{\mathbf{d}}}{\partial k_{y}} \right) \\
 & = \mp \frac{\Delta v^{2}}{2(v^{2}k^{2}+\Delta^{2})^{3/2}}
\end{align}$$
若费米能级在能隙中，那么价带全部填满。可以由TKNN公式得到一个Dirac点产生的Hall conductivity：
$$\begin{align}
\sigma_{H} & = \frac{e^{2}}{\hbar}C_{1} \\
 & = \frac{1}{2}\text{sgn}(\Delta) \frac{e^{2}}{\hbar}
\end{align}$$
![[Pasted image 20260609164507.png|center|200]]
若费米能级在导带中，令$E_{D}$为Dirac cone中心的能量。此时由于不是绝缘体，TKNN公式失效。我们直接计算：
$$\begin{align}
\sigma_{H} & = -|e| \int \frac{d^{2}k}{(2\pi)^{2}} 
\end{align}$$


![[Pasted image 20260609164727.png|center|200]]