考虑一些自由场的时序乘积$T\phi(x_{1})\phi(x_{2})\dots$。不妨简写为$T\phi_{1}\phi_{2}\dots$。对于任意自由场，可以分解：
$$\begin{align}
\phi(x) & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a_{\mathbf{p}}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}a_{\mathbf{p}}e^{-ip\cdot x}+ \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}a_{\mathbf{p}}^{\dagger}e^{ip\cdot x} \\
 & = \phi^{+}(x)+\phi^{-}(x)
\end{align}$$
其中，$\phi^+$只包含湮灭算子，$\phi^{-}$只包含生成算子。那么$\phi^{+},\phi^{-}$可以形成正规序。那么可以将$T\phi(x_{1})\phi(x_{2})\dots$按照这个分解展开，再通过commutator弄成正规序。

令$N$为正规序算子。我们定义Wick contraction：
$$\text{contraction of }\phi_{1}\phi_{2}=T\phi_{1}\phi_{2}-N\phi_{1}\phi_{2}=D_{F}(x_{1}-x_{2}) \mathbb{1}$$
多个算子乘积的二算子Wick contraction定义为两个算子contraction乘上剩下的normal ordering。

更一般的Wick contraction的定义为，要算的东西减去normal ordering。例如：
$$\begin{align}
\text{contraction of }a_{\mathbf{p}}\phi & = a_{\mathbf{p}}\phi-Na_{\mathbf{p}}\phi \\
 & = a_{\mathbf{p}}(\phi^{+}+\phi^{-})-(a_{\mathbf{p}}\phi^{+}+\phi^{-}a_{\mathbf{p}}) \\
 & = [a_{\mathbf{p}},\phi^{-}] \\
 & = [a_{\mathbf{p}},\phi] \\
 & = \frac{e^{ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }}
\end{align}$$
## Ex:

$$\begin{align}
  & \text{contraction of }a_{\mathbf{p}}\phi= \frac{e^{ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }} \\
 & \text{contraction of }\phi a_{\mathbf{p}}= 0 \\
 & \text{contraction of }a^{\dagger}_{\mathbf{p}}\phi= 0 \\
 & \text{contraction of }\phi a_{\mathbf{p}}^{\dagger}= \frac{e^{-ip\cdot x}}{\sqrt{ 2E_{\mathbf{p}} }}
\end{align}$$
中间两个为零是因为已经处于正规序。第一项$a_{\mathbf{p}}\phi$的理解是，相当于生成一个离开的粒子。所以是$\sim e^{ip\cdot x}$。$\phi a^{\dagger}_{\mathbf{p}}$的理解是，相当于生成一个进入的粒子，所以是$\sim e^{-ip\cdot x}$。


>[!Success] Theorem 1 (Wick's theorem)
>Let $T$ be the time-ordering operator, $N$ be the normal ordering operator. Then:
>$$\begin{align}
\bra{0} T\phi(x_{1})\dots \phi(x_{n})\ket{0} = \bra{0} N \phi(x_{1})\dots \phi(x_{n})\ket{0} + \text{all possible contractions} 
\end{align}$$

Wick定理还有变体。如果将commutator定义为生成湮灭算符的contraction，那么：

>[!Success] Theorem 2
>$$\text{Any order of the product of annihilation and creation operators}=\text{Normal order}+\text{all possible contractions}$$

