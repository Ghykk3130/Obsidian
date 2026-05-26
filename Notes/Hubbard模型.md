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
考虑对角化$t_{jm}$。我们有：
$$\begin{align}
H_{0} & = -\sum_{j,m,\sigma}t_{jm}\ket{j,\sigma} \bra{0} 0\rangle\bra{m,\sigma}  \\
 & = \sum_{j,m,\sigma}
\end{align}$$



令：
$$A  (-t) A^{\dagger}=\mathcal{E}$$
其中，$\mathcal{E}$为对角阵。那么：
$$\begin{align}
H_{0} & = \sum_{j,m,\sigma}\sum_{k,l} A^{*}_{kj}\mathcal{E}_{kl}A_{lm}c^{\dagger}_{j,\sigma}c_{m,\sigma} \\
 & = \sum_{j,m,k,\sigma}A^{*}_{kj}\mathcal{E}_{kk}A_{km}c^{\dagger}_{j,\sigma}c_{m,\sigma} \\
 & = \sum_{k,\sigma}\mathcal{E}_{kk}\left( \sum_{j}A_{kj}^{*}c^{\dagger}_{j,\sigma} \right)\left( \sum_{m}A_{km}c_{m,\sigma} \right)
\end{align}$$
简写对角元$\mathcal{E}_{kk}=\mathcal{E}_{k}$，令$c_{k,\sigma}=\sum_{m}A_{km}c_{m,\sigma}$。那么：
$$H_{0}=\sum_{n,\sigma}\mathcal{E}_{n}c^{\dagger}_{n,\sigma}c_{n,\sigma}$$

