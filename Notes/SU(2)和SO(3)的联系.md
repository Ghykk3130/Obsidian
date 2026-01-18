## Caveat
注意，我们有：
$$\exp\left( \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)=\begin{pmatrix}
e^{i\frac{\phi}{2}} & ie^{-i\alpha}\sin \beta \sin \frac{\phi}{2} \\
ie^{i\alpha}\sin \beta \sin \frac{\phi}{2} & e^{-i \frac{\phi}{2}}
\end{pmatrix}$$
而我们想知道$\exp\left(  \frac{-i\vec{\sigma}\cdot \hat{n}}{2} \right)$是什么。注意我们不能naive地将$\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)$表达式中所有的$i$替换成$-i$。因为$\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)$表达式中，并不是所有的$i$都来源于$\frac{i\vec{\sigma}\cdot \hat{n}}{2}$前面的那一个$i$。在$\sigma=\sigma_{1}\hat{x}+\sigma_{2}\hat{y}+\sigma_{3}\hat{z}$中，也存在$\hat{y}$。正确的想法应该是，$\exp\left(  \frac{-i\vec{\sigma}\cdot \hat{n}}{2} \right)$是$\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)$的Hermitian。因为：
$$\begin{align}
\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)^{^{\dagger}} & =\exp\left(  \left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2} \right)^{^{\dagger}}  \right) \\
 & =\exp\left(  \frac{-i\vec{\sigma}^{^{\dagger}}\cdot \hat{n}}{2} \right) \\
 & =\exp\left(  \frac{-i\vec{\sigma}\cdot \hat{n}}{2} \right)
\end{align}$$
其中$\vec{\sigma}^{^{\dagger}}=\vec{\sigma}$是因为$\sigma_{i},i=1,2,3$都是Hermitian的。



