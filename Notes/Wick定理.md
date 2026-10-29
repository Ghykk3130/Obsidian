考虑一些自由场的时序乘积$T\phi(x_{1})\phi(x_{2})\dots$。不妨简写为$T\phi_{1}\phi_{2}\dots$。对于任意自由场，可以分解：
$$\begin{align}
\phi(x) & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a_{\mathbf{p}}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}e^{ip\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}a_{\mathbf{p}}e^{-ip\cdot x}+ \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}a_{\mathbf{p}}^{\dagger}e^{ip\cdot x} \\
 & = \phi^{+}(x)+\phi^{-}(x)
\end{align}$$
其中，$\phi^+$只包含湮灭算子，$\phi^{-}$只包含生成算子。那么$\phi^{+},\phi^{-}$可以形成正规序。那么可以将$T\phi(x_{1})\phi(x_{2})\dots$按照这个分解展开，再通过commutator弄成正规序。$\overbrace  {a}$



令$N$为正规序算子


若$x^{0}>y^{0}$，那么：
$$\begin{align}
\bra{0} [\phi^{+}(x),\phi^{-}(y)]\ket{0}  & = \bra{0} (\phi^{+}(x)\phi^{-}(y)-\phi^{-}(y)\phi^{+}(x))\ket{0}  \\
 & = \bra{0} \phi^{+}(x)\phi^{-}(y)\ket{0} 
\end{align}$$
注意到Feynman传播子为：
$$\begin{align}
\bra{0} T\phi(x)\phi(y)\ket{0}  & = \bra{0} \phi(x)\phi(y)\ket{0}  \\
 & = \bra{0}( \phi^{+}(x)\phi^{+}(y)+\phi^{+}(x)\phi^{-}(y)+\phi^{-}(x)\phi^{+}(y)+\phi^{-}(x)\phi^{-}(y))\ket{0}  \\
 & = \bra{0} \phi^{+}(x)\phi^{-}(y)\ket{0} 
\end{align}$$
对于$x^{0}<y^{0}$，也可同样得证。所以：
$$\begin{align}
\bra{0} 
\end{align}$$
