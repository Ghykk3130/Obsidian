>[! Proposition 2]
>For an isolated system, I have:
>$$\Delta S \geq 0$$
## Proof.
考虑封闭系统从$A$到$B$。系统与环境$T$交换热量$\delta Q=0$。设这条路径为$I$。

为了计算系统从$A$到$B$的熵变，我们构造一条从$A$到$B$的虚拟的，reversible的路径$II$。在这条路径上，我们不假设系统是封闭的。因为这只是一个纯虚拟的构造。

由Clausius定理，我们有：
$$\begin{align}
 & \int_{I} \frac{\delta Q}{T}+ \int_{-II} \frac{\delta Q_{rev}}{T} \leq{0} \\
\implies & \int_{II} \frac{\delta Q_{rev}}{T} \geq \int_{I} \frac{\delta Q}{T} \\
 \implies  & \Delta S \geq 0
\end{align}$$
>[!Right]
>$\blacksquare$
## Remark
1. 如何理解$\int_{I} \frac{\delta Q}{T}$？这可以看作系统和宇宙中每个部分分别作依次作热交换，但交换的热量都是零。所以$\int_{I} \frac{\delta Q}{T}=0$。也就是说，将宇宙划分为无数个局部恒温的小块。这些小块就是[[熵#^theorem1|theorem 1.1]]证明中的$T_{i}$。系统和每个小块交换的热量都为零
2. 可能会担心，因为从$A$到$B$的过程不是quasi-static的，所以无法定义路径$I$。但是这个路径并不是系统自身的p-V图里的。原则上，我只需要知道系统在小块$T$交换的热量$\delta Q(T)$，我就可以计算了。这完全是系统外部的信息，跟系统自身状态是否well-defined无关。

