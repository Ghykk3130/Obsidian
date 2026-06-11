# 1. 推迟Green函数

令$A,B$为Schrodinger绘景中的可观测量。令$A(t)=e^{iHt}Ae^{-iHt}$为Heisenberg绘景中的$A$算子。那么定义Green函数为：

>[!Note] Definition 1.1
>Define the retarded and advanced Green functions:
>$$G^{R}_{AB}(t)=-i\theta(t) \langle [A(t),B]_{\pm}\rangle,\ G^{A}_{AB}(t)=i\theta(-t)\langle [A(t),B]_{\pm}\rangle$$
>where $+$ is for fermions and $-$ is for bosons.

采用Zubarev记号，记$G^{R}_{AB}(t)=\langle\langle A|B\rangle \rangle$。我们可以将Green函数变换到频域。为了收敛性，给频率加上小虚部。我们有：
$$\begin{align}
G^{R}_{AB}(\omega)=\int_{-\infty}^{\infty}dt e^{i(\omega+i 0^{+})t}G^{R}_{AB}(t)=\langle \langle A|B \rangle \rangle_{\omega}
\end{align}$$
我们计算：
$$\begin{align}
G^{R}_{AB}(\omega) & = -i \int_{-\infty}^{\infty}dt e^{i(\omega+i 0^{+})t}\theta(t)  \frac{1}{Z} \sum_{n} e^{-\beta E_{n}} \bra{n} [A(t),B]_{\pm}\ket{n} \\
 & = -\frac{i}{Z} \int_{0}^{\infty} dt e^{i(\omega+i 0^{+})t} \sum_{n} e^{-\beta E_{n}}\left[ \bra{n} e^{iHt}Ae^{-iHt}B \ket{n}\pm \bra{n} B e^{iHt}A e^{-iHt}\ket{n} \right]    \\
 & = -\frac{i}{Z} \int dt e^{i(\omega+i 0^{+})t}\sum_{n,m}e^{-\beta E_{n}}[\bra{n} e^{iHt}A e^{-iHt}\ket{m} \bra{m} B\ket{n} \pm \bra{n} B \ket{m} \bra{m} e^{iHt}Ae^{-iHt}\ket{n}  ] \\
 & = -\frac{i}{Z} \sum_{n,m}e^{-\beta E_{n}} \int dt [\exp(i(\omega+i 0^{+}+E_{n}-E_{m})t)A_{nm}B_{mn}\pm \exp(i(\omega+i 0^{+}+E_{m}-E_{n})t)B_{nm}A_{mn}] \\
 & = -\frac{i}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[ \frac{\exp(i(\omega+i 0^{+}+E_{n}-E_{m})\infty)-1}{i(\omega+i 0^{+}+E_{n}-E_{m})}A_{nm}B_{mn}\pm \frac{\exp(i(\omega+i 0^{+}+E_{m}-E_{n})\infty)-1}{i(\omega+i 0^{+}+E_{m}-E_{n})}B_{nm}A_{mn} \right] 
\end{align}$$
由于$i 0^{+}$，所以分子可以收敛。那么得到Lehmann谱表示：
$$\boxed{G^{R}_{AB}(\omega)=  \frac{1}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[  \frac{A_{nm}B_{mn}}{\omega+i 0^{+}+E_{n}-E_{m}}\pm \frac{B_{nm}A_{mn}}{\omega+i 0^{+}+E_{m}-E_{n}}  \right]}$$
容易看出，另一种写法是：
$$G^{R}_{AB}(\omega)= \frac{1}{Z}\sum_{n}e^{-\beta E_{n}}\left[ \bra{n} A \frac{1}{\omega+i 0^{+}+E_{n}-H}B\ket{n}\pm \bra{n} B \frac{1}{\omega+i 0^{+}+E_{n}-H}A\ket{n}  \right]$$
同理，容易计算超前Green函数：
$$\begin{align}
G^{A}_{AB}(\omega)=   \frac{1}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[  \frac{A_{nm}B_{mn}}{\omega-i 0^{+}+E_{n}-E_{m}}\pm \frac{B_{nm}A_{mn}}{\omega-i 0^{+}+E_{m}-E_{n}}  \right]
\end{align}$$
所以得到：
$$\boxed{G^{R}_{AB}(\omega)=G^{A*}_{AB}(\omega)}$$
回忆起$\frac{1}{x+i 0^{+}}= \frac{1}{x}-i\pi \delta(x)$。不妨假设$A_{nm}B_{mn},\ B_{nm}A_{mn}\in \mathbb{R}$。那么可以计算：
$$\mathrm{Im}G^{R}_{AB}(\omega)=- \frac{\pi}{Z}\sum_{n,m}e^{-\beta E_{n}}[A_{nm}B_{mn}\delta(\omega+E_{n}-E_{m})\pm B_{nm}A_{mn}\delta(\omega+E_{m}-E_{n})]$$
>[!Quote]
>实际上，Green函数由于要进入卷积计算，都可以看作是分布函数。例如$\frac{1}{x+ i{0}^{+}}\in\mathcal{D}^{'}(\mathbb{R})$实际上是一个线性泛函，定义为：
>$$\left\langle  \frac{1}{x + i 0^{+}},g \right\rangle= \lim_{ \epsilon \to 0 ^{+} } \int_{\mathbb{R}}dx \frac{1}{x+i\epsilon}g(x)$$
>而$\frac{1}{x+i 0^{+}}= \frac{1}{x}-i\pi\delta(x)$实际上应该写为$\frac{1}{x+i 0^{+}}= \mathcal{P} \frac{1}{x}-i\pi\delta(x)$。应当将$\frac{1}{x}$当成其Cauchy主值来理解。

定义谱函数：
$$\boxed{A_{AB}(\omega)=- \frac{1}{\pi}\mathrm{Im}G^{R}_{AB}(\omega)}$$
我们容易得到：
$$\begin{align}
\int_{-\infty}^{\infty}d \omega^{'} \frac{A_{AB}(\omega^{'})}{\omega+i 0^{+}-\omega^{'}} & = \frac{1}{Z}\sum_{m,n}e^{-\beta E_{n}} \int d \omega^{'} \left[  \frac{A_{nm}B_{mn}\delta(\omega^{'}+E_{n}-E_{m})}{\omega+i 0^{+}-\omega^{'}}\pm \frac{B_{nm}A_{mn}\delta(\omega^{'}+E_{m}-E_{n})}{\omega+i 0^{+}-\omega^{'}} \right] \\
 & = \frac{1}{Z}\sum_{m,n} e^{-\beta E_{n}}\left[ \frac{A_{nm}B_{mn}}{\omega+ i 0^{+}+E_{n}-E_{m}}\pm \frac{B_{nm}A_{mn}}{\omega+ i 0^{+}+E_{m}-E_{n}} \right] \\
 & = G^{R}_{AB}(\omega)
\end{align}$$
类似地：
$$\begin{align}
\int_{\infty}^{-\infty}d\omega^{'} \frac{A_{AB}(\omega^{'})}{\omega-i 0^{+}-\omega^{'}}= G^{A}_{AB}(\omega)
\end{align}$$

>[!Success] Proposition 1.1
>$$G^{R}_{AB}(\omega)= \int_{-\infty}^{\infty}d\omega^{'} \frac{A_{AB}(\omega^{'})}{\omega+i 0^{+}-\omega^{'}},\ G^{A}_{AB}(\omega)= \int_{-\infty}^{\infty}d\omega^{'} \frac{A_{AB}(\omega^{'})}{\omega-i 0 ^{+}-\omega^{'}}$$

接下来，我们还可以证明推迟Green函数的运动方程：

>[!Success] Proposition 1.2
>$$\omega \langle\langle A|B\rangle\rangle_{\omega}= \langle [A,B]_{\pm}\rangle + \langle \langle [A,H]|B\rangle\rangle_{\omega}$$
>This equation holds for both retarded and advanced Green functions.
## Proof.

我们有：
$$\begin{align}
\frac{d}{dt}G^{R}_{AB}(t) & = -i \delta(t) \langle [A(t),B]_{\pm}\rangle-i\theta(t) \frac{d}{dt}\langle [A(t),B]_{\pm}\rangle
\end{align}$$
由于$\delta(t)$只在$t=0$显著，所以第一项为$-i\delta(t)\langle [A,B]_{\pm}\rangle$。因为$\langle .\rangle$运算本质是求加权平均，容易证明是线性的。所以：
$$\begin{align}
\frac{d}{dt}\langle [A(t),B]_{\pm}\rangle & = \left\langle  \left[  \frac{d}{dt}A(t),B \right]_{\pm} \right\rangle \\
 & = \langle \left[ \frac{1}{i}[A(t),H],B \right]_{\pm}\rangle \\
 & = -i \langle[[A(t),H],B ]_{\pm}\rangle
\end{align}$$
所以得到：
$$\begin{align}
 & \frac{d}{dt}G^{R}_{AB}(t)=-i\delta(t)\langle [A,B]_{\pm}\rangle-i \langle \langle[A,H]|B\rangle\rangle \\
\implies & \int_{-\infty}^{\infty}dt e^{i\omega t} \frac{d}{dt}G^{R}_{AB}(t) =-i \langle[A,B]_{\pm}\rangle -i\langle\langle[A,H]|B\rangle\rangle_{\omega} \\
\implies & -i\omega\langle\langle A|B\rangle\rangle_{\omega}=-i\langle[A,B]_{\pm}\rangle-i \langle\langle[A,H]|B\rangle\rangle_{\omega}
\end{align}$$
类似地可以证明对于超前Green函数也成立。
>[!Right]
>$\blacksquare$

我们还可以证明Green函数的谱定理：

>[!Success] Proposition 1.3
>$$\langle BA \rangle = \int_{-\infty}^{\infty} d\omega f_{F/B}(\omega)A_{AB}(\omega)$$
## Proof.

我们有：
$$\begin{align}
 & \int_{-\infty}^{\infty}d\omega f(\omega) \frac{1}{Z}\sum_{n,m}e^{-\beta E_{n}}[A_{nm}B_{mn}\delta(\omega+E_{n}-E_{m})\pm B_{nm}A_{mn}\delta(\omega+E_{m}-E_{n})] \\
 = &  \frac{1}{Z}\sum_{n,m}e^{-\beta E_{n}}[A_{nm}B_{mn}f(E_{m}-E_{n})\pm B_{nm}A_{mn}f(E_{n}-E_{m})] \\
 = & \frac{1}{Z}\sum_{n,m}(e^{-\beta E_{n}}\pm e^{-\beta E_{m}})A_{nm}B_{mn}f(E_{m}-E_{n}) \\
 = &  \frac{1}{Z}\sum_{n,m}e^{-\beta E_{m}}(e^{\beta(E_{m}-E_{n})}\pm 1)A_{nm}B_{mn} \frac{1}{e^{\beta(E_{m}-E_{n})}\pm 1}  \\
 = & \frac{1}{Z}\sum_{n,m}e^{-\beta E_{m}} \bra{m} B \ket{n} \bra{n} A\ket{m} \\
 = & \langle BA\rangle 
\end{align}$$
>[!Right]
>$\blacksquare$
## Ex:

考虑真空中费米子处于某个特定能量中。则$H=\epsilon c^{\dagger}c$。我们想求$\langle c^{\dagger}c\rangle$。由谱定理，我们需要$\langle \langle c|c^{\dagger}\rangle\rangle_{\omega}$。利用运动方程。注意到：
$$[c,H]= \epsilon cc^{\dagger}c-\epsilon c^{\dagger}c^{2}=\epsilon c-2\epsilon c^{\dagger}c^{2}=\epsilon c$$
所以：
$$\begin{align}
 & \omega\langle\langle c|c^{\dagger}\rangle\rangle_{\omega}= \langle [c,c^{\dagger}]_{+}\rangle + \epsilon\langle\langle c|c^{\dagger}\rangle\rangle_{\omega} \\
\implies & (\omega-\epsilon)\langle\langle c|c^{\dagger}\rangle\rangle_{\omega}=1
\end{align}$$
注意这是一个分布函数的方程。即我们希望$\langle (\omega-\epsilon) \langle\langle c|c^{\dagger}\rangle\rangle_{\omega},g\rangle=\langle 1,g\rangle$。显然，由于$\mathcal{P} \frac{1}{\omega-\epsilon}$满足要求。这是特解。而注意到Dirac delta作为分布函数满足$(\omega-\epsilon)\delta(\omega-\epsilon)=0$，得到一个齐次解。那么：
$$\langle\langle c|c^{\dagger}\rangle\rangle_{\omega}= \mathcal{P} \frac{1}{\omega-\epsilon}+a\delta(\omega-\epsilon)$$
我们通过条件$G^{R}_{cc^{\dagger}}(t)=0\text{ for }t<0$来确定$a$。考虑：
$$\begin{align}
G^{R}_{cc^{\dagger}}(t) & = \frac{1}{2\pi}\int_{-\infty}^{\infty} d\omega e^{-i\omega t} \left[  \mathcal{P} \frac{1}{\omega-\epsilon}+a\delta(\omega-\epsilon) \right] \\
 & = \frac{a}{2\pi}e^{-i\epsilon t}+ \frac{1}{2\pi}\int_{-\infty}^{\infty}d\omega e^{-i\omega t}\mathcal{P} \frac{1}{\omega-\epsilon} 
\end{align}$$
接下来研究积分，$x<0$：
$$\begin{align}
\int_{-\infty}^{\infty}dk e^{-ikx} \mathcal{P} \frac{1}{k} & = \lim_{ \delta \to 0^{+} } \int_{|k|>\delta}dk \frac{e^{-ikx}}{k} \\
\end{align}$$
注意到极点为$k=0$。取上半平面，绕开极点，逆时针的积分路劲$C$。那么：
$$\begin{align}
 & \oint_{C} dk \frac{e^{-ikx}}{k}=0 \\
\implies & \lim_{ \delta \to 0^{+} } \int_{|k|>\delta } dk \frac{e^{-ikx}}{k}- i\pi=0 \\
\implies &  \int_{-\infty}^{\infty}dk e^{-ikx}\mathcal{P} \frac{1}{k} = i\pi
\end{align}$$
所以得到：
$$\begin{align}
 & G^{R}_{cc^{\dagger}}(t)  = \frac{a}{2\pi} e^{-i\epsilon t} + \frac{i\pi}{2\pi}e^{-i\epsilon t} =0 \\
 \implies & a=-i\pi
\end{align}$$
于是得到推迟Green函数的谱函数$A^{R}_{cc^{\dagger}}(\omega)= \delta(\omega-\epsilon)$。于是可以得到：
$$\begin{align}
\langle c^{\dagger}c\rangle & = \int_{-\infty}^{\infty}d\omega f_{F}(\omega) \delta(\omega-\epsilon)=f_{F}(\epsilon)
\end{align}$$



