# 1.相互作用绘景

考虑一个hamiltonian可以分为两部分$H=H_{0}+V$。一般来说，$H_{0}$是不含时的，$V$是一个含时的微扰。我们定义相互作用绘景下的ket和算子：
$$\begin{align}
 & A_{I}= e^{ \frac{i}{\hbar}H_{0}t}A_{s}e^{- \frac{i}{\hbar}H_{0}t} \\
 & \ket{\psi_{I}} =e^{\frac{i}{\hbar}H_{0}t}\ket{\psi_{S}} 
\end{align}$$
那么容易证明：
$$\begin{align}
i\hbar \partial_{t}\ket{\psi_{I}}  & = i\hbar\left(  \frac{i}{\hbar}H_{0}e^{ \frac{i}{\hbar}H_{0}t}\ket{\psi_{S}}  \right)+i\hbar e^{ \frac{i}{\hbar}H_{0}t}\partial_{t}\ket{\psi_{S}}  \\
 & = - H_{0}e^{ \frac{i}{\hbar}H_{0}t} \ket{\psi_{S}} + e^{ \frac{i}{\hbar}H_{0}t}(H_{0}+V)\ket{\psi_{S}}  \\
 & = e^{ \frac{i}{\hbar}H_{0}t}V \ket{\psi_{S} } \\
 & = V_{I}\ket{\psi_{I}}  
\end{align}$$
即相互作用绘景下的态演化由$V$驱动。还可以得到：
$$\begin{align}
\frac{dA_{I}}{dt} & =  \frac{i}{\hbar}H_{0}e^{ \frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t}- \frac{i}{\hbar}e^{ \frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t} H_{0} \\
 & = \frac{1}{i\hbar}[A_{I},H_{0}]
\end{align}$$
即相互作用绘景下算子的演化由$H_{0}$驱动。

>[!Success] Proposition 1.1
>Under interaction picture, we have:
>$$\begin{align}
 & \ket{\psi_{I}} =e^{\frac{i}{\hbar}H_{0}t}\ket{\psi_{S}} ,\ A_{I}=e^{\frac{i}{\hbar}H_{0}t}A_{S}e^{- \frac{i}{\hbar}H_{0}t} \\
 & i\hbar \partial_{t}\ket{\psi_{I}} =V_{I}\ket{\psi_{I}} ,\ \frac{dA_{I}}{dt}= \frac{1}{i\hbar}[V_{I},H_{0}]
\end{align}
> $$

特别地，定义相互作用绘景下的时间演化算子$U_{I}$：
$$\ket{\psi_{I};t_{0},t_{}} =U_{I}(t,t_{0})\ket{\psi_{I};t_{0},t_{0}} $$
则$U_{I}$的运动方程为：
$$i\hbar \partial_{t}U_{I}=V_{I}U_{I}$$
我们可以将相互作用绘景和Schrodinger绘景下的时间演化算子联系起来：
$$\begin{align}
\ket{\psi_{I};t_{0},t}  & = e^{ \frac{i}{\hbar}H_{0}t}\ket{\psi_{S};t_{0},t}  \\
 & = e^{ \frac{i}{\hbar}H_{0}t}U(t,t_{0})\ket{\psi_{S};t_{0},t_{0}} \\
 & = e^{ \frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}\ket{\psi_{I};t_{0},t_{0}} \\ \\
\implies U_{I}(t,t_{0}) & = e^{\frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}  
\end{align}$$

>[!Success] Proposition 1.2
>$U_{I}(t,t_{0})=e^{\frac{i}{\hbar}H_{0}t}U(t,t_{0})e^{- \frac{i}{\hbar}H_{0}t_{0}}$

在相互作用绘景下，我们一般将$\ket{\psi_{I}}$在Schrodinger绘景的本征态下展开：
$$\ket{\psi_{I}} =\sum_{n} c_{n}(t)\ket{n} $$
我们想要得到$c_{n}(t)$的演化。我们从相互作用绘景下的Schrodinger方程入手：
$$\begin{align}
 & i\hbar \partial_{t}\ket{\psi_{I}} =V_{I}\ket{\psi_{I}}  \\
\implies &  i\hbar \partial_{t}\bra{n} \psi_{I}\rangle= \sum_{m}\bra{n} V_{I}\ket{m} \bra{m} \psi_{I}\rangle=\sum_{m}\bra{n} e^{ \frac{i}{\hbar}H_{0}t}V e^{- \frac{i}{\hbar}H_{0}t}\ket{m} \bra{m} \psi_{I}\rangle \\
\implies & i\hbar \partial_{t}c_{n}= \sum_{m} e^{i\omega_{nm}t} V_{nm} c_{m},\ \omega_{nm}= \frac{E_{n}-E_{m}}{\hbar}
\end{align}$$
# 2. Transition rate

一般来说，$V(t_{0})=0$。我们想要得到$t$时刻观测$H_{0}$的谱，检查系统坍缩到本征态$\ket{f}$的概率。

若系统$t_{0}$时刻处于本征态$\ket{i}$，我们不妨取一个phase，使得系统在Schrodinger绘景中处于$e^{- \frac{i}{\hbar}E_{n}t_{0}}\ket{i}$。那么在相互作用绘景中系统处于$\ket{i}$。那么：
$$c_{f}(t)=\bra{f} U_{I}(t,t_{0})\ket{i} $$
注意到在Schrodinger绘景下系统坍缩到本征态$\ket{f}$的概率为$|\bra{f}U(t,t_{0})e^{- \frac{i}{\hbar}E_{n}t_{0}}\ket{i}|^{2}=|\bra{f}U_{I}(t,t_{0})\ket{i}|^{2}=|c_{f}(t)|^{2}$。所以我们希望得到$U_{I}(t,t_{0})$。

对于$U_{I}$作Dyson级数展开：
$$\begin{align}
 & i\hbar \partial_{t}U_{I}(t,t_{0})=V_{I}(t)U_{I}(t,t_{0}) \text{ with }U(t_{0},t_{0})=1 \\
\implies  & U_{I}= 1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} V_{I}(t_{1})U_{I}(t_{1},t_{0}) \\
\implies & U_{I}=1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1}V_{I}(t_{1})\left( 1- \frac{i}{\hbar}\int_{t_{0}}^{t_{1}}dt_{2}V_{I}(t_{2})U_{I}(t_{2},t_{0}) \right) \\
\implies & U_{I}= 1- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1}V_{I}(t_{1})+ \left( -\frac{i}{\hbar} \right)^{2} \int_{t_{0}}^{t}dt_{1}\int_{t_{0}}^{t_{1}}dt_{2}  V_{I}(t_{1})V_{I}(t_{2})+\dots+ \left( - \frac{i}{\hbar} \right)^{n} \int_{t_{0}}^{t}dt_{1}\dots \int_{t_{0}}^{t_{n-1}}dt_{n}V_{I}(t_{1})\dots V_{I}(t_{n})+\dots
\end{align}$$
假设$V_{I}$很小，我们只需要取前几项即可。将$c_{f}$以$V_{I}$的阶数展开：
$$c_{f}=c_{f}^{(0)}+c_{f}^{(1)}+\dots$$
可以得到：
$$\begin{align}
 & c_{f}^{(0)}=\delta_{fi} \\
 & c_{f}^{(1)}=- \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} \bra{f} V_{I}(t_{1})\ket{i} = - \frac{i}{\hbar}\int_{t_{0}}^{t}dt_{1} e^{i\omega_{fi}t_{1}} V_{fi}(t_{1}) \\
 & c_{f}^{(2)}=\left( - \frac{i}{\hbar} \right)^{2} \int_{t_{0}}^{t}dt_{1} \int_{t_{0}}^{t_{1}}dt_{2} \bra{f} V_{I}(t_{1})V_{I}(t_{2})\ket{i} =\left( - \frac{i}{\hbar} \right)^{2}\sum_{m}\int_{t_{0}}^{t}dt_{1}\int_{t_{0}}^{t_{1}}dt_{2} e^{i\omega_{fm}t_{1}}e^{i\omega_{mi}t_{2}}  V_{fm}(t_{1})V_{mi}(t_{2})
\end{align}$$
于是若$f\neq i$，我们有：
$$P(i\rightarrow f)=|c_{f}|^{2}=|c_{f}^{(1)}+c_{f}^{(2)}+\dots|^{2}$$
# 3. Constant drive

考虑如下含时微扰：
$$V=\left\{\begin{align}
 & 0,\ t\leq0 \\
 & V,\ t>0
\end{align}\right.$$
则对于$f\neq i$，我们有：
$$\begin{align}
c^{(1)}_{f} & = \left( - \frac{i}{\hbar} \right)\int_{0}^{t}dt^{'}e^{i\omega_{fi}t^{'}}V_{fi}(t^{'}) \\
 & = \frac{-1}{E_{f}-E_{i}} V_{fi}(e^{i\omega_{fi}t}-1) \\
 & = \frac{-1}{E_{f}-E_{i} }V_{fi}e^{ i\frac{\omega_{fi}}{2}t}2i \sin\left(  \frac{i\omega_{fi}t}{2} \right)
\end{align}$$
则：
$$\begin{align}
P(i\rightarrow f) & = |c^{(1)}_{f} |^{2} \\
 & = \frac{|V_{fi}|^{2}}{(E_{f}-E_{i})^{2}} 4 \sin ^{2}\left(  \frac{\omega_{fi}t}{2} \right) \\
 & = \frac{|V_{fi}|^{2}}{\hbar^{2}}t^{2} \text{sinc}^{2}\left(  \frac{E_{f}-E_{i}}{2\hbar}t \right)\text{, where } \text{sinc}x= \frac{\sin x}{x}
\end{align}$$
![[Pasted image 20260405210936.png|center|500]]

则转移走的概率为：
$$\sum_{f\neq i}P(i\rightarrow f) \approx \int dE_{f}\rho(E_{f})P(i\rightarrow f)$$
其中$\rho$为态密度。

我们先来求解积分$\int_{\mathbb{R}}dx \frac{\sin x}{x}$。

>[!Success] Proposition 3.1
>$\int_{\mathbb{R}}dx \frac{\sin x}{x}=\pi$
## Proof.

我们决定采用复分析的方法。我们有：
$$\int_{\mathbb{R}}dx \frac{\sin x}{x}= \mathrm{Im}\left(\int_{\mathbb{R}} dz \frac{e^{iz}}{z}\right)$$
其中，在$z=0$存在一个一阶奇点，留数为$1$。
![[Drawing 2026-04-05 20.03.17.excalidraw|center|500]]
构造上面的contour。由于contour内没有奇点：
$$\begin{align}
 & \oint_{C}dz \frac{e^{iz}}{z} =\int_{\text{DA}}+\int_{\text{AB}}+\int_{\text{BC}}+\int_{CD} =0 
\end{align}$$
由于$\int_{\text{AD}}$半径取为无限，所以$\int_{\text{AD}}=0$。由小圆引力，在BC上顺时针积分半圆对应$-i\pi$。则：
$$\int_{\text{AB}}+\int_{CD}=i\pi$$
取小圆半径$\rightarrow 0$。则：
$$\int_{\mathbb{R}}dz \frac{e^{iz}}{z}= \int_{\text{AB}}+\int_{\text{CD}}=i\pi$$
>[!Right]
>$\blacksquare$

>[!Success] Proposition 3.2
>$\int_{\mathbb{R}}dx \frac{\sin ^{2}x}{x^{2}}=\pi$
## Proof.

类似地：
$$\int_{\mathbb{R}}dx \frac{\sin ^{2}x}{x^{2}}= \int_{\mathbb{R}}dx \frac{1-\cos{2}x}{2x^{2}}=\mathrm{Re}\left( \int_{\mathbb{R}}dz \frac{1-e^{2iz}}{2z^{2}} \right)$$
取相同的contour，发现$0$处有一留数为$-i$的奇点。于是：
$$\int_{\text{AB}}+\int_{\text{CD}}= \pi$$
取小圆半径$\rightarrow 0$，然后取实部即可。
>[!Right]
>$\blacksquare$

我们发现$\int_{\mathbb{R}}dE_{f}\text{sinc}^{2}\left( \frac{E_{f}-E_{i}}{2\hbar} t\right)= \frac{2\pi \hbar}{t}= \frac{h}{t}$，而当$t\rightarrow 0$时，只有$E_{i}$附近的取值显著。所以：
$$\text{sinc}^{2}\left(  \frac{E_{f}-E_{i}}{2\hbar}t \right)\rightarrow \frac{h}{t}\delta(E_{f}-E_{i})\text{ as }t\rightarrow \infty$$
这是合理的，因为$\text{sinc}^{2}\left(  \frac{E_{f}-E_{i}}{2\hbar}t \right)$的高度$\sim \frac{1}{t^{2}}$，而宽度$\sim t$。

那么：
$$\begin{align}
\sum_{f\neq i}P(i\rightarrow f) & \approx \int_{\mathbb{R}}dE_{f}\rho(E_{f}) \frac{|V_{fi}|^{2}}{\hbar^{2}}t^{2} \frac{h}{t}\delta(E_{f}-E_{i}) \\
 & \approx \left.\frac{2\pi}{\hbar}t \overline{|V_{fi} |^{2}}\rho(E_{f})\right|_{E_{f} \approx E_{i}} \text{ for large }t
\end{align}$$
定义transition rate为transition probability的Radon-Nikodym导数。具体来说：
$$w_{i\rightarrow f}= \frac{\partial}{\partial t}\left( \sum_{f\neq i}P(i\rightarrow f) \right)= \left.\frac{2\pi}{\hbar} \overline{|V_{fi}|^{2}}\rho(E_{f})\right|_{E_{f}\approx E_{i}}$$
有时直接将转移到单态$f$的transition rate写为$w_{i\rightarrow f}= \frac{2\pi}{\hbar} \overline{|V_{fi}|^{2}}\delta(E_{f}-E_{i})$。则总transition rate需要乘上态密度再积分。

