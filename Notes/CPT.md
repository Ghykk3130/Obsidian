# 1. Spinor表示

我们知道Lorentz代数有六个生成元$J_{i},K_{i}$。作变换：
$$J^{+}_{i}= \frac{1}{2}(J_{i}+iK_{i}),\ J^{-}_{i}= \frac{1}{2}(J_{i}-iK_{i})$$
容易证明它们各自符合角动量代数：
$$[J^{+}_{i},J^{+}_{j}]=i\epsilon_{ijk}J^{+}_{k},\ [J^{-}_{i},J^{-}_{j}]=i\epsilon_{ijk}J^{-}_{k}$$
并且它们相互之间对易：
$$[J^{+}_{i},J^{-}_{j}]=0$$
于是可以认为，这组算子作用在不同的“自由度”上。这两个“自由度”直积成为总的底空间。

角动量代数可以构造ladder operator，从而构造出一系列$\mathfrak{su}(2)$的不可约表示。令$\{ J^{+}_{i} \}$构造出的不可约表示为$2j^{+}+1$维，底空间为$\{ \ket{j^{+},m_{j^{+}}} \}$。令$\{ J^{-}_{i} \}$构造出的不可约表示为$2j^{-}+1$维，底空间为$\{ \ket{j^{-},m_{j^{-}}} \}$。那么总的底空间就是$\{ \ket{j^{+},m_{j^{+}}} \}\otimes \{ \ket{j^{-},m_{j^{-}}} \}$。

对于任何Lorentz变换：
$$\begin{align}
\exp\left( - i\theta_{i}J_{i}- i\beta_{i}K_{i} \right) & = \exp(-i\theta _{i}(J^{+}_{i}+J^{-}_{i})-\beta_{i}(J^{+}_{i}-J^{-}_{i})) \\
 & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}-(i\theta_{i}-\beta_{i})J^{-}_{i}) \\
 & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}) \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})
\end{align}$$
其中最后一步是因为$[J^{+}_{i},J^{-}_{i}]=0$。那么Lorentz变换的作用就是：
$$\begin{align}
\exp(-i\theta_{i}J_{i}-i\beta_{i}K_{i}) \ket{j^{+},m_{j^{+}}} \otimes \ket{j^{-},m_{j^{-}}}  & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i})\ket{j^{+},m_{j^{+}}} \otimes \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})\ket{j^{-},m_{j^{-}}} 
\end{align}$$
## Ex:

不妨令$j^{+}=\frac{1}{2}$, $j^{-}=0$。$J^{+}_{i}= \frac{1}{2}\sigma^{i},\ J^{-}_{i}=0$。那么底空间是二维的。记为$\left( \frac{1}{2},0 \right)$。底空间中矢量记为$\psi_{L}\in \left\{  \ket{\frac{1}{2},m_{j^{+}}}  \right\} \otimes \{ \ket{0,0} \}$。称为left-handed Weyl spinor。

相应地，取$j^{-}= \frac{1}{2}, j^{+}=0$。$J^{-}_{i}= \frac{1}{2}\sigma^{i},\ J^{+}_{i}=0$。生成的表示称为right-handed Weyl spinor。
## Ex:

我们将左右手Weyl spinor拼起来得到$\psi= \begin{pmatrix}\psi_{L} \\ \psi_{R} \end{pmatrix}$。对于任意一个Lorentz变换：
$$\begin{align}
\psi_{L}\otimes \psi_{R}\rightarrow\exp(-i\theta_{i}J_{i}-i\beta_{i}K_{i}) \psi_{L}\otimes \psi_{R}  & = \exp(-(i\theta_{i}+\beta_{i})J^{+}_{i})\psi_{L} \otimes \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})\psi_{R} 
\end{align}$$
这个关系可以被等价地写成：
$$\begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}\rightarrow 
\begin{pmatrix}
\exp(-(i\theta_{i}+\beta_{i})J^{+}_{i}) & 0 \\
0 & \exp(-(i\theta_{i}-\beta_{i})J^{-}_{i})
\end{pmatrix} \begin{pmatrix}
\psi_{L} \\
\psi_{R}
\end{pmatrix}
$$
于是这也构成一个Lorentz表示。称为Dirac spinor。
# 2. 

