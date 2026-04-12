# Skyrmion的种类

Skyrmion有三种：
- 以DM作用诱导的skyrmion，出现在chiral magnet中，尺寸较小，没有helicity switching。大小较小，10nm-100nm。
- 以anisotropy诱导的skyrmion，出现在有easy axis，并且有长程偶极作用的晶体中。存在helicity switching。大小较大，100nm-1mum。
- 以四极矩作用诱导的skyrmion。大小很小，约1nm。

# 第二种skyrmion形成机制

自由能泛函为：
$$\begin{align}
 & F=h\int d^{2}x\left(  \frac{c_{\parallel}}{2}\partial_{i}\mathbf{M}_{\parallel}\cdot \partial_{i}\mathbf{M}_{\parallel}+ \frac{c_{\perp}}{2}\partial_{i}M_{z}\cdot \partial_{i}M_{z}+ \frac{a}{2}\mathbf{M}^{2}+ \frac{\Delta}{2}\mathbf{M}_{\parallel}^{2}+ \frac{b}{2}(\mathbf{M}^{2})^{2} \right)+F_{d} \\
 & F_{d}=2\pi hS \sum_{\mathbf{q}}[f(ah)|m_{z}(\mathbf{q})|^{2}+(1-f(qh))|\mathbf{q}\cdot \mathbf{m}_{\parallel}(\mathbf{q})|^{2}]
\end{align}$$
其中，两个导数是交换作用，$\mathbf{M}$二次项和四次项是Landau相变项，$\mathbf{M}^{2}_{\parallel}$项是anisotropy项，$F_{d}$是偶极作用。
- 定义$Q= \frac{\Delta}{4\pi}$。若$Q>1$，代表anisotropy较大，则为了favor anisotropy，同时又降低偶极作用，系统垂直形成stripe。若$Q<1$，偶极作用取胜，形成面内均匀磁化。
- 在降温过程中，Stripe的wall从Ising-type变成Bloch-type。这是为了降低交换能。这类似于chiral magnet中的相变。
- Stripe两侧的wall的helicity是相反的。假设wall垂直于x方向，分量在y,z方向上。因为面内磁化不引起梯度，所以面内磁化$M_{y}$不受到偶极作用牵制。如果$M_{y}$在两侧wall的符号不同，那么相对来说$M_{y}$的导数更加陡峭（在stripe这么多的距离内翻转了更多），产生更大的交换能（$\propto (\nabla \mathbf{M})^{2}$）。所以两侧wall $M_{y}$符号相同。而两侧wall $M_{z}$的翻转趋势相反，所以helicity相反。
![[2b0b5d96abe794dd94da4120dd48e86f.jpg|center|300]]
- 通过加磁场，stripe会逐渐断裂开来，形成bubble。具体来说，bubble是被$\mathbf{M}^{4}$项所favor的。当bubble形成时，降温使得bubble的wall从Ising-type变为Bloch-type。因为wall上spin的连续性，导致两侧$M_{y}$符号相反。从而两侧的Bloch wall的helicity相同。形成skyrmion。
![[ff9e81ae8ea1003adedba620aa732e55.jpg|center|100]]

