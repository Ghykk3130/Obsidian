# 1. Wannier函数

我们定义Wannier函数：

>[!Note] Definition 1.1
>Given $R_{j}\in \Lambda$, the Bloch basis $\{ \ket{n,k} \}$, we define the Wannier state:
>$$\ket{n,j} = \frac{1}{\sqrt{ N }}\sum_{k}e^{-ikR_{j}}\ket{n,k} $$

我们经常略去能带指标$n$不写。记$w(x-R_{j})=\bra{x}j\rangle$为Wannier函数。

>[!Quote]
>我们看到，Wannier函数实际上是一个中心在$R_{j}$的函数。我们考虑：
>$$\begin{align}
|w(x-R_{j})|^{2} & = \frac{1}{N}\sum_{k,k^{'}}e^{-i(k-k^{'})R_{j}}\psi_{k^{'}}(x)^{*}\psi_{k}(x) \\
 & = \frac{1}{N}\sum_{k,k^{'}}\psi_{k^{'}}^{*}(x)\psi_{k}(x) \\
 & = |w(x) |^{2}
\end{align}$$
>也就是说，这个在原点的Wannier函数一样。

# 2. 单粒子部分

令一次量子化hamiltonian为：
$$\begin{align}
H & = \sum_{i}\left( - \frac{\hbar^{2}}{2m}\nabla_{i}^{2}+U(r_{i}) \right)+ \frac{1}{2}\sum_{i\neq j}v(r_{i}-r_{j})
\end{align}$$
我们先将单粒子部分$H_{0}=\sum_{i}\left( - \frac{\hbar^{2}}{2m}\nabla_{i}^{2}+U(r_{i}) \right)$二次量子化。我宣称，Bloch基$\{ \ket{n,k} \}$是不方便的。我们使用Wannier基$\{ \ket{n,j} \}$。那么我们求：
$$\begin{align}
\bra{j} \left(  - \frac{\hbar^{2}}{2m}\nabla^{2}+U \right)\ket{j^{'}}  & = \int d^{d}x w^{*}(x-R_{j})\left( - \frac{\hbar^{2}}{2m}\nabla^{2}+U \right)w(x-R_{j^{'}})
\end{align}$$
我们令：
$$\epsilon_{j}= \bra{j} \left( - \frac{\hbar^{2}}{2m}\nabla^{2}+U \right)\ket{j^{}} ,\ t_{j,j^{'}}= \left\{ \begin{align}
 & - \bra{j} \left( - \frac{\hbar^{2}}{2m}\nabla^{2}+U \right)\ket{j^{'}}\text{ for }j^{'}\neq j \\
 & 0\text{ for }j^{'}=j
\end{align}\right. $$
于是：
$$\begin{align}
H_{0} & = \sum_{j,j^{'},\sigma} \bra{j} H_{0} \ket{j^{'}} c^{\dagger}_{j,\sigma}c_{j^{'},\sigma} \\
 & = \sum_{j,\sigma}\epsilon_{j}c^{\dagger}_{j,\sigma}c_{j,\sigma}-\sum_{j ,\sigma}\sum_{j^{'}\neq j}t_{j,j^{'}} c^{\dagger}_{j,\sigma}c_{j^{'},\sigma} 
\end{align}$$
由于第一项对于固定粒子数系统只是常数，不妨令：
$$H_{0}=-\sum_{j,m,\sigma}t_{jm}c^{\dagger}_{j,\sigma}c_{m,\sigma}$$
我们有：
$$\begin{align}
H_{0} & = -\sum_{j,m,\sigma}t_{jm}\ket{j,\sigma} \bra{0} 0\rangle\bra{m,\sigma}  \\
 & = \sum_{j,m,\sigma}t_{jm}\ket{j,\sigma} \bra{m,\sigma} 
\end{align}$$
考虑存在一组本征基$\{ \ket{n,\sigma} \}$将$H_{0}$对角化，对角元为$\mathcal{E}_{n}$。那么$H_{0}$写为：
$$\begin{align}
H_{0} & =\sum_{n,\sigma}\mathcal{E}_{n}\ket{n,\sigma} \bra{n,\sigma} \\
 & = \sum_{n,\sigma}\mathcal{E}_{n}\ket{n,\sigma} \bra{0} 0\rangle\bra{n,\sigma}  \\
 & = \sum_{n,\sigma}\mathcal{E}_{n}c^{\dagger}_{n,\sigma}c_{n,\sigma}
\end{align} $$
新的生成湮灭算符定义为$c_{n,\sigma}=\ket{0}\bra{n,\sigma},\ c^{\dagger}_{n,\sigma}=\ket{n,\sigma}\bra{0}$。
## Ex: STM

考虑两个费米气体，中间用一个隧穿结连接。隧穿结可以想象为两个费米气体盒子公共的一个壁$a\delta(x)$，这个壁上有无限势能，构成delta函数。左侧的自由费米子态有$\{ \ket{L,k} \}$，右侧的自由费米子态有$\{ \ket{R,p} \}$。这些态构成完整的基。那么，最一般的二次量子化hamiltonian为：
$$\begin{align}
H & = \sum_{k,p}H_{Lk,Lp}c^{\dagger}_{Lk}c_{Lp}+\sum_{k,p}H_{Rk,Rp}c^{\dagger}_{Rk}c_{Rp}+\sum_{k,p}H_{Lk,Rp}c^{\dagger}_{Lk}c_{Rp}+\sum_{k,p}H_{Rk,Lp}c^{\dagger}_{Rk}c_{Lp}
\end{align}$$因为在左右两侧隧穿结的势都是零，hamiltonian就是可加动能，于是：
$$H_{Lk,Lp}= \mathcal{E}_{p}\bra{Lk} Lp\rangle=\mathcal{E}_{p}\delta_{k,p}$$
容易证明：
$$\begin{align}
H_{Lk,Rp} & = \bra{Lk}  \frac{p^{2}}{2m}\ket{Rp} + \bra{Lk} a\delta(x)\ket{Rp}  \\
 & = 0+ \bra{Lk} a\delta(x)\ket{Rp} \\
 & = \int d^{d}x \frac{1}{V}e^{-ikx}e^{ipx}a\delta(x)=0
\end{align}$$
这是因为$\frac{1}{\sqrt{ V }}e^{-ikx}$被完全限制在左侧，$\frac{1}{\sqrt{ V }}e^{ipx}$被完全限制在右侧。


故hamiltonian写为：
$$\begin{align}
H & = \sum_{k}\mathcal{E}_{k}c^{\dagger}_{Lk}c_{Lk}+\sum_{p}\mathcal{E}_{p}c^{\dagger}_{Rp}c_{Rp}+\sum_{k,p}T_{Lk,Rp}(c^{\dagger}_{Lk}c_{Rp}+c^{\dagger}_{Rp}c_{Lk})
\end{align}$$

