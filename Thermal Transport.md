# Local equilibrium

假设系统整体不处在热力学平衡。为了描述系统，我们作如下假设：
- 系统的每个体元由于体系小，relaxation time极短，都处于热力学平衡之中。
- 系统每个体元虽然很小，但仍然是宏观的热力学系统，符合统计力学规律。

对于任意一个体积，我们可以定义熵流：

>[!Note] Definition 1
>Given a volume $\Sigma$, define the entropy current out of the volume as $\vec{J}_{s}$ such that:
>$$S_{out}=\oint_{\partial\Sigma}d\vec{A} \cdot \vec{J}_{s}$$

那么对于任何一个体元，我们必有：
$$\frac{Ds}{Dt}=-\nabla \cdot \vec{J}_{s}+ \frac{\partial s}{\partial t}=-\nabla \cdot \vec{J}_{s}+\Theta$$
其中$s$为熵的体积密度。$\Theta$为局部熵产生率。

我们从而可以将某点熵的变化归为两类。一种是从外界流入的，一种是该点内部产生的。对于有限体积，同样可以做类似定义：

>[!Note] Definition 2
>Given a volume $\Sigma_{}$, define the entropy as:
>$$S=S_{i}+S_{e}$$
>The entropy from the external world is $S_{e}=-\oint d\vec{A}\cdot \vec{J}_{s}$.
>The entropy created inside is $S_{i}=\int d^{3}r\Theta$.



