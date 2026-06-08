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

考虑两个费米气体，中间用一个隧穿结连接。假设跃迁矩阵元与左右无关，那么hamiltonian写为：
$$\begin{align}
H & = \sum_{k}\mathcal{E}_{k}c^{\dagger}_{Lk}c_{Lk}+\sum_{p}\mathcal{E}_{p}c^{\dagger}_{Rp}c_{Rp}+\sum_{k,p}T_{k,p}(c^{\dagger}_{Lk}c_{Rp}+c^{\dagger}_{Rp}c_{Lk})
\end{align}$$
我们计算从左侧跃迁到右侧的transition rate：
$$\begin{align}
w_{L\rightarrow R } & = \frac{2\pi}{\hbar}\sum_{i,f}|\bra{f} H\ket{i}  |^{2}\delta(\epsilon_{f}=\epsilon_{i}) \\
\end{align}$$
若$\ket{i}=\ket{\dots,n_{Lk},\dots,n_{Rp},\dots}$，而$\ket{f}\propto c^{\dagger}_{Rp}c_{Lk}\ket{i}$，那么：
$$\begin{align}
|\bra{f} H\ket{i}|^{2}  & = |\bra{f} T_{k,p} c^{\dagger}_{Lk}c_{Rp}\ket{i}|^{2}  \\
 & = |\bra{f} T_{k,p}\sqrt{ 1-n_{Lk} }\sqrt{ n_{Rp} }|f\rangle|^{2} \\
 & = |T_{k,p }|^{2} (1-n_{Lk})n_{Rp}
\end{align}$$
于是：
$$\begin{align}
w_{L\rightarrow R} & = \frac{2\pi}{\hbar}\sum_{k,p} |T_{k,p} |^{2} (1-n_{Lk})n_{Rp}\delta(\mathcal{E}_{k}=\mathcal{E}_{p}) \\
\end{align}$$
同理$w_{R\rightarrow L}= \frac{2\pi }{\hbar}\sum_{k,p}|T_{k,p}|^{2}(1-n_{Lk})n_{Rp}\delta(\mathcal{E}_{k}=\mathcal{E}_{p})$。于是可以计算向右隧穿的隧穿电流：
$$\begin{align}
I & = e(w_{L\rightarrow R}-w_{R\rightarrow L}) \\
 & =-\frac{2\pi |e|}{\hbar}\sum_{k,p}|T_{k,p} |^{2}(n_{Rp}-n_{Lk})\delta(\mathcal{E}_{k}=\mathcal{E}_{p})
\end{align}$$
令$\xi_{k}=\mathcal{E}_{k}-\mu_{L},\ \xi_{p}=\mathcal{E}_{p}-\mu_{R}$。假设给左侧加上电压$V$。那么$\mu_{L}-\mu_{R}=-|e|V$。假设$T_{k,p}=T$为常数，那么：
$$\begin{align}
I & = - \frac{2\pi|e|}{\hbar}|T|^{2}\sum_{k,p}(-\theta(\xi_{p})+\theta(\xi_{k}))\delta(\xi_{k}-\xi_{p}=|e|V) \\
 & = \frac{2\pi|e|}{\hbar}|T|^{2}\int d\omega N_{R}(\omega)N_{L}(\omega-|e|V)(\theta(\omega+|e|V)-\theta(\omega)) \\
 & \approx \frac{2\pi|e|}{\hbar}|T|^{2} \int d\omega N_{R}(\omega)N_{L}(\omega-|e|V) \frac{\partial \theta}{\partial \omega}|e|V \\
 & \approx \frac{2\pi|e|}{\hbar}|T|^{2}\int d\omega N_{R}(\omega-|e|V)N_{L}(\omega-|e|V) \frac{\partial \theta}{\partial \omega}|e|V
\end{align}$$
最后一步是因为我们假设了弱场。于是：
$$\begin{align}
\frac{dI}{d(|e|V)} & = \frac{2\pi|e|}{\hbar}|T|^{2}\int d\omega N_{R}(\omega-|e|V)N_{L}(\omega-|e|V) \frac{\partial \theta}{\partial \omega} \\
 & \approx \frac{2\pi|e|}{\hbar}|T|^{2}N_{R}(-|e|V)N_{L}(-|e|V)
\end{align}$$
假设$N_{L}(-|e|V)$已知，那么可以测出$N_{R}(-|e|V)$的大小。

