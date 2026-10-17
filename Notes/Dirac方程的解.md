# 1. 

首先证明，Dirac方程的解都满足Klein-Gordon方程：
$$\begin{align}
 & (i\rlap{/}\partial-m)\psi=0 \\
\implies & (-i\gamma^{\mu}\partial_{\mu}-m)(i \partial_{\nu}\gamma^{\nu}-m)\psi=0  \\
\implies & (\gamma^{\mu}\gamma^{\nu}\partial_{\mu}\partial_{\nu}-m^{2})\psi=0
\end{align}$$
由于求导可以换序：
$$\begin{align}
  \gamma^{\mu}\gamma^{\nu}\partial_{\mu}\partial_{\nu} & = \frac{1}{2}\gamma^{\mu}\gamma^{\nu}\partial_{\mu}\partial_{\nu}+ \frac{1}{2}\gamma^{\mu}\gamma^{\nu}\partial_{\nu}\partial_{\mu} \\
 & = \frac{1}{2}\gamma^{\mu}\gamma^{\nu}\partial_{\mu}\partial_{\nu}+ \frac{1}{2}\gamma^{\nu}\gamma^{\mu}\partial_{\mu}\partial_{\nu} \\
 & = g^{\mu \nu}\partial_{\mu}\partial_{\nu} \\
 & = \Box
\end{align}$$
所以：
$$(\Box+m^{2})\psi=0$$
那么解的$x$-dependent部分可以写成$e^{-ip\cdot x}$。其中$p^{0}=\pm \sqrt{ |\mathbf{p}| ^{2}+m^{2}}$。那么通解为两支解相加：
$$\begin{align}
\psi & = \int \frac{d^{3}p}{(2\pi)^{3}}u(p)e^{-i\sqrt{ |\mathbf{p}|^{2}+m^{2} }t+i\mathbf{p}\cdot \mathbf{x}}+ \int \frac{d^{3}p}{(2\pi)^{3}}v(p)e^{i\sqrt{ |\mathbf{p}|^{2}+m^{2} }+i\mathbf{p}\cdot \mathbf{x}}
\end{align}$$
但是我们习惯将$p^{0}$取成正的。重写积分变量得到：
$$\begin{align}
\psi & = \int \frac{d^{3}p}{(2\pi)^{3}}u(p)e^{-i\sqrt{ |\mathbf{p}|^{2}+m^{2} }t+i\mathbf{p}\cdot \mathbf{x}}+ \int \frac{d^{3}p}{(2\pi)^{3}}v(p)e^{i\sqrt{ |-\mathbf{p}|^{2}+m^{2} }-i\mathbf{p}\cdot \mathbf{x}} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}}u(p)e^{-ip\cdot x}+ \int \frac{d^{3}p}{(2\pi)^{3}}v(p)e^{ip\cdot x}
\end{align}$$
其中$p^{0}=\sqrt{ |\mathbf{p}| ^{2}+m^{2}}$，不需要负的色散。

我们还需要进一步约束$u,v$。分别将两支解代入Dirac方程，得到：
$$\begin{align}
(\rlap{/}p-m)u(p)=0,\ (-\rlap{/}p-m)v(p)=0
\end{align}$$
这两个方程不是很好解。但是由于这两个方程应该在任何系都成立，不妨在静止系查看：
$$\begin{align}
\rlap{/}p-m & = \gamma^{\mu}p_{\mu}-m \\
 & = \begin{pmatrix}
-m & p\cdot \sigma \\
p\cdot \bar{\sigma} & -m
\end{pmatrix} \\
 & = \begin{pmatrix}
-m & m \\
m & -m
\end{pmatrix} \\
 & = m\begin{pmatrix}
-1 & 1 \\
1 & -1
\end{pmatrix}
\end{align}$$
不妨取$\mathbf{p}=p^{3} \hat{\mathbf{z}}$。那么：
$$\begin{align}
\rlap{/}p-m & = \begin{pmatrix}
-m & 0 & E-p^{3} & 0 \\
0 & -m & 0 & E+p^{3} \\
E+p^{3} & 0 & -m & 0 \\
0 & E-p^{3} & 0 & -m
\end{pmatrix} \\
 & = \begin{pmatrix}
-\sqrt{ (E-p^{3})(E+p^{3}) } & 0 & E-p^{3} & 0 \\
0 & -\sqrt{ (E-p^{3})(E+p^{3}) } & 0 & E+p^{3} \\
E+p^{3} & 0 & -\sqrt{ (E-p^{3})(E+p^{3}) } & 0 \\
0 & E-p^{3} & 0 & -\sqrt{ (E-p^{3})(E+p^{3}) }
\end{pmatrix}
\end{align}$$
于是方程变为：
$$\begin{align}
 & \begin{pmatrix}
-\sqrt{ (E-p^{3})(E+p^{3}) } & 0 & E-p^{3} & 0 \\
0 & -\sqrt{ (E-p^{3})(E+p^{3}) } & 0 & E+p^{3} \\
E+p^{3} & 0 & -\sqrt{ (E-p^{3})(E+p^{3}) } & 0 \\
0 & E-p^{3} & 0 & -\sqrt{ (E-p^{3})(E+p^{3}) }
\end{pmatrix}u(p)=0 \\
\implies & \begin{pmatrix}
-\sqrt{ E+p^{3} } & 0 & \sqrt{ E-p^{3} } & 0 \\
0 & \sqrt{ E-p^{3} } & 0 & \sqrt{ E+p^{3} }   \\
\sqrt{ E+p^{3} } & 0 & \sqrt{ E-p^{3} } & 0 \\
0 & \sqrt{ E-p^{3} } & 0 & -\sqrt{ E+p^{3} }
\end{pmatrix}u(p)=0
\end{align}$$
于是显然：
$$\begin{align}
u(p)= \begin{pmatrix}
\sqrt{ E-p^{3} } 
\end{pmatrix}
\end{align}$$
最后得到：
$$\begin{align}
 & u^{s}(p)=\begin{pmatrix}
\sqrt{ p\cdot \sigma }\xi^{s} \\
\sqrt{ p\cdot \bar{\sigma} }\xi^{s}
\end{pmatrix},\ \xi^{s}=\begin{pmatrix}
1 \\
0 
\end{pmatrix}\text{ or }\begin{pmatrix}
0 \\
1
\end{pmatrix} \\
 & v^{s}(p)=\begin{pmatrix}
\sqrt{ p\cdot \sigma }\eta^{s} \\
-\sqrt{ p\cdot \bar{\sigma}  } \eta^{s}
\end{pmatrix},\ \eta^{s}=\begin{pmatrix}
1 \\
0
\end{pmatrix}\text{ or }\begin{pmatrix}
0 \\
1
\end{pmatrix}
\end{align}$$

# 2. 

容易计算：
$$\begin{align}
\bar{u}^{s}(p)u^{s ^{'} }(p) & = \begin{pmatrix}
(\xi^{s})^{\dagger} \sqrt{ p\cdot \sigma }  & (\xi^{s})^{\dagger}\sqrt{ p\cdot \bar{\sigma} } 
\end{pmatrix} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \begin{pmatrix}
\sqrt{ p\cdot \sigma }\xi^{s  ^{'}} \\
\sqrt{ p\cdot \bar{\sigma} }\xi^{s  ^{'}}
\end{pmatrix} \\
 & =  \begin{pmatrix}
(\xi^{s})^{\dagger} \sqrt{ p\cdot \sigma }  & (\xi^{s})^{\dagger}\sqrt{ p\cdot \bar{\sigma} } 
\end{pmatrix} \begin{pmatrix}
\sqrt{ p\cdot \bar{\sigma} }\xi^{s  ^{'}} \\
\sqrt{ p\cdot \sigma }\xi^{s ^{'}}
\end{pmatrix} \\
 & = (\xi^{s})^{\dagger}\sqrt{ (p\cdot \sigma)(p\cdot \bar{\sigma}) }\xi^{s ^{'}}+ (\xi^{s})^{\dagger}\sqrt{ (p\cdot \bar{\sigma})(p\cdot \sigma) } \xi^{s ^{'}}\\
 & = 2m \delta_{s s ^{'}}
\end{align}$$
因为：
$$\begin{align}
(p\cdot \sigma)(p\cdot \bar{\sigma}) & = \begin{pmatrix}
E-p^{3} & 0 \\
0 & E+p^{3}
\end{pmatrix} \begin{pmatrix}
E+p^{3} & 0 \\
0 & E-p^{3}
\end{pmatrix} \\
 & = m^{2} \mathbb{1}
\end{align}$$
另外，容易计算：
$$\begin{align}
\bar{v}^{s}(p)v^{s ^{'}}(p)=-2m\delta_{s s ^{'}}
\end{align}$$
同样地，可以计算：
$$\begin{align}
(u^{s})^{\dagger}(p)u^{s ^{'}}(p) & = \begin{pmatrix}
(\xi^{s})^{\dagger} \sqrt{ p\cdot \sigma } & (\xi^{ s ^{}})^{\dagger} \sqrt{ p\cdot  \bar{\sigma} }
\end{pmatrix}   \begin{pmatrix}
 \sqrt{ p\cdot \sigma }  \xi^{s ^{'}} \\
\sqrt{ p\cdot \bar{\sigma} } \xi^{s ^{'}}
\end{pmatrix} \\
 & = (\xi^{s})^{\dagger}p\cdot \sigma \xi^{s ^{'}}+ (\xi^{s})^{\dagger}p\cdot \bar{\sigma} \xi^{s ^{'}} \\
 & = (\xi^{s})^{\dagger}(E-p^{3}\sigma^{3})\xi^{s ^{'}}+ (\xi^{s})^{\dagger}(E+p^{3}\sigma^{3})  \xi^{s ^{'}} \\
 & = 2E (\xi^{s})^{\dagger}(\xi^{s ^{'}}) \\
 & = 2E \delta_{s s ^{'}}
\end{align}$$
另外，容易计算：
$$\begin{align}
(v^{s})^{\dagger}(p)v^{s ^{'}}(p) = 2E\delta_{s s ^{'}}
\end{align}$$

另外，我们还可以计算：
$$\begin{align}
\sum_{s}u^{s}(p)\bar{u}^{s}(p)=\rlap{/}p+m
\end{align}$$
$$\sum_{s}v^{s}(p)\bar{v}^{s}(p)=\rlap{/}p-m$$























>[!Warning]
>注意，此处每个$1$实际上都是$2\times{2}$矩阵。

这已经是一个分块矩阵。不妨设解为$\begin{pmatrix}a \\ b\end{pmatrix}$，其中$a,b$都是$2\times 1$矢量。代入得到约束：
$$\begin{align}
\begin{pmatrix}
-1 & 1 \\
1 & -1
\end{pmatrix} \begin{pmatrix}
a \\
b
\end{pmatrix}=0 \implies a=b
\end{align}$$
于是将解记为$\begin{pmatrix}\xi \\ \xi\end{pmatrix}$。但是$\xi$这个$2 \times 1$矢量内部就没有约束了。实际上$\xi^{1}= \begin{pmatrix}1 \\ 0 \end{pmatrix}$或者$\xi^{2}=\begin{pmatrix}0 \\ 1\end{pmatrix}$。于是静止系中：
$$u^{s}(p=(m,0))=\begin{pmatrix}
\xi^{s} \\
\xi^{s}
\end{pmatrix} $$
将其直接通过一个boost变到运动系中：
$$\begin{align}
u^{s}(p=(E,0,0,p_{z})) & = 
\end{align}$$

