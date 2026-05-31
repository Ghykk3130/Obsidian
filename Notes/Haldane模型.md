# 1. Haldane模型

考虑蜂窝晶格的如下hamiltonian：
$$\begin{align}
H & = -t\sum_{\langle i,j\rangle}(c^{\dagger}_{A,i}c_{B,j}+ c_{B,j}^{\dagger}c_{A,i})-t^{'}\sum_{\langle \langle i,j\rangle \rangle}e^{i\phi_{ij}}(c^{\dagger}_{A,i}c_{A,j}+c_{B,i}^{\dagger}c_{B,j})
\end{align}$$
其中，$A,i$表示第$i$个$A$原子。$\sum_{\langle i,j\rangle}c^{\dagger}_{A,i}c_{B,j}$表示对第$i$个$A$原子和第$j$个$B$原子求和，要求这两个原子最邻近。$\langle \langle i,j\rangle \rangle$表示这两个原子要次邻近。若$i\rightarrow j$的路径沿六边形绕出的小圆弧为顺时针，则取$\frac{\pi}{2}$。若为逆时针，则取$- \frac{\pi}{2}$。

![[Pasted image 20260530170459.png|center|300]]
显然第一项为：
$$\begin{align}
-t\sum_{i,\delta}(c^{\dagger}_{A,i}c_{B,i+\delta}+c_{B,i+\delta}^{\dagger}c_{A,i})
\end{align}$$
考虑Fourier变换$c_{A,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{A,k},\ c_{B,i}= \frac{1}{\sqrt{ N }}\sum_{k}e^{ikR_{i}}c_{B,k}$。由[[石墨烯的tight-binding模型]]可得这一项为：
$$-t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c_{B,k}^{\dagger}c_{A,k}),\ f(k)=\sum_{\delta}e^{ik\delta}$$
容易计算：
$$f(k)  = e^{iak_{x}}+e^{- i \frac{a}{2}k_{x}}2 \cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)$$
类似地，第二项可以写为：
$$\begin{align}
-t^{'}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}(c^{\dagger}_{A,i}c_{A,i+\delta^{'}}+c^{\dagger}_{B,i}c_{B,i+\delta^{'}})
\end{align}$$
代入Foueri变化，则其中第一项为：
$$\begin{align}
-\frac{t^{'}}{N}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}\sum_{k,k^{'}}e^{-ikR_{i}}e^{ik^{'}(R_{i}+\delta^{'})}c^{\dagger}_{A,k}c_{A,k^{'}}
\end{align}$$
将$\delta^{'}$按顺时针逆时针分为$\delta^{'}_{c},\ \delta^{'}_{cw}$。那么：
$$\begin{align}
-\frac{t^{'}}{N}\sum_{i,\delta^{'}_{c}}e^{i\phi_{i,i+\delta^{'}_{c}}}\sum_{k,k^{'}}e^{-ikR_{i}}e^{ik^{'}(R_{i}+\delta^{'}_{c})}c^{\dagger}_{A,k}c_{A,k^{'}} & = - \frac{t^{'}}{N}  \sum_{\delta^{'}_{c}} e^{i\phi_{i,i+\delta^{'}_{c}}} \sum_{k,k^{'}}\sum_{i}e^{iR_{i}(k^{'}-k)}e^{ik^{'}\delta^{'}_{c}} c^{\dagger}_{A,k}c_{A,k^{'}} \\
 & = -t^{'}\sum_{\delta^{'}_{c}}e^{i\phi_{i,i+\delta^{'}_{c}}} e^{ik\delta^{'}_{c}}\sum_{k}c^{\dagger}_{A,k}c_{A,k} \\
 & = -t^{'}\sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}\sum_{k}c^{\dagger}_{A,k }c_{A,k}
\end{align}$$
同理容易得到逆时针项为$-t^{'}\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}}\sum_{k}c^{\dagger}_{A,k}c_{A,k}$。相加得到：
$$\begin{align}
-t^{'}\sum_{i,\delta^{'}}e^{i\phi_{i,i+\delta^{'}}}c^{\dagger}_{A,i}c_{A,i+\delta^{'}} & = -t^{'}\sum_{k}c^{\dagger}_{A,k}c_{A,k}\left( \sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}+\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}} \right)
\end{align}$$
我们计算：
$$\begin{align}
\left( \sum_{\delta^{'}_{c}}ie^{ik\delta^{'}_{c}}+\sum_{\delta^{'}_{cw}}(-i)e^{ik\delta^{'}_{cw}} \right) & = -ie^{ik\delta^{'}_{1}}+ie^{-ik\delta^{'}_{1}}+ie^{ik\delta^{'}_{2}}-ie^{-ik\delta^{'}_{2}}-ie^{ik\delta^{'}_{3}}+ie^{-ik\delta^{'}_{3}} \\
 & = 2(i)^{2}(-\sin k\delta_{1}^{'}+\sin k\delta^{'}_{2}-\sin k\delta^{'}_{3}) \\
 & = -2\left( \sin \sqrt{ 3 }ak_{y}-2\cos \frac{3}{2}ak_{x}\sin \frac{\sqrt{ 3 }}{2}ak_{y} \right) \\
 & =-2g(k)
\end{align}$$
其中，
$$g(k)= \sin \sqrt{ 3 }ak_{y}-2\cos \frac{3}{2}ak_{x}\sin \frac{\sqrt{ 3 }}{2}ak_{y}$$
对于$B$子格，容易发现$A$子格的顺时针路径对应其逆时针路径，而$A$子格的逆时针路径对应其顺时针路径。于是容易写出：
$$\begin{align}
H & = -t\sum_{k}(f(k)c^{\dagger}_{A,k}c_{B,k}+f^{*}(k)c^{\dagger}_{B,k}c_{A,k})+2t^{'}\sum_{k}g(k)(c^{\dagger}_{A,k}c_{A,k}-c^{\dagger}_{B,k}c_{B,k}) \\
 & = \sum_{k}\begin{pmatrix}
c^{\dagger}_{A,k} & c^{\dagger}_{B,k}
\end{pmatrix} \begin{pmatrix}
2t^{'}g(k) & -tf(k) \\
-tf^{*}(k) & -2t^{'}g(k)
\end{pmatrix} \begin{pmatrix}
c_{A,k} \\
c_{B,k}
\end{pmatrix}
\end{align}$$
对角化得到色散关系：
$$\boxed{E_{\pm}(k)=\pm \sqrt{ t^{2}|f(k)|^{2}+4t^{'2}g^{2}(k) }}$$
我们发现对比起最邻近tight-binding模型，Haldane模型能隙打开。

![[Pasted image 20260530191658.png|center|500]]

# 2. 同伦群

我们一般性地定义同伦：

>[!Note] Definition 2.1
>Let $X,Y$ be topological spaces. Given continuous mappings $f,g:X\rightarrow Y$, we say $f,g$ are homotopic to each other if there exists a continuous function $F:X\times[0,1]\rightarrow Y$ such that
>$$F(x,0)=f(x),\ F(x,1)=g(x)$$
>Write $f\sim g$.

可以证明，互为同伦的映射构成等价类。可以将这些同伦类收集起来构成同伦集：

>[!Note] Definition 2.2
>Let $X,Y$ be topological space. Let $C(X,Y)=\{ f:X\rightarrow Y| f\text{ continuous} \}$. Define free homotopy set as:
>$$[X,Y]=C(X,Y)/ \sim$$
>Fix $x_{0}\in X,\ y_{0}\in Y$, define the based homotopy set as: 
>$$[X,Y]_{0}=\{ f\in C(X,Y)|f(x_{0})=y_{0} \}/ \sim$$

若$X$是具有周期性结构的$S^{n}$，那么函数$f:X=S^{n}\rightarrow Y$不管在$Y$中看起来多复杂，其在$S^{n}$中绕一圈后必定在$Y$中也绕回原来的位置。
## Ex:

例如$f:S^{1}\rightarrow Y$。考虑$f$从$f(e^{i\theta})$出发。显然必有$f(e^{i\theta})=f(e^{i(\theta+ 2\pi)})$。所以不管在$0\sim 2\pi$之间发生了什么，绕到$2\pi$后又必须回来。

>[!Note] Definition 2.2
>Given a topological space $Y$, $y_{0}\in Y,\ s_{0}\in S^{n}$, define its nth order homotopy group as:
>$$\pi_{n}(Y,y_{0})=[S^{n},Y]_{0}$$

由于$S^{n}$的周期性结构，$s_{0}$点的选取是不重要的。
## Ex:

例如$\pi_{1}(Y,y_{0})$就是必定经过$y_{0}$的一些loop。

将$S^{n}$记为$[0,1]^{n}$，其中认为$0$和$1$等价，实际上应该写成商集。那么构建这样一种运算：

>[!Note] Definition 2.3
>Given $f,g:S^{n}=[0,1]^{n}\rightarrow Y$, $f(0)=g(0)=y_{0}$, $s_{1}=\left( \frac{1}{2}, \frac{1}{2},\dots \right),\ s_{2}=(1,1,\dots)$, define the product of $f,g$ as:
>$$f*g(s)= \left\{\begin{align}
 & g(2s),\ 0\leq s< s_{1} \\
 & f(2s-s_{2}),\ s_{1}\leq x\leq s_{2}
\end{align}\right.$$

可以证明，$[f*g]=[f]*[g]$。这构成了同伦群的群运算。

对于集合$Y$，若其中任意两点之间存在一条曲线连接，那么称$Y$是arcwise connected的。可以证明，若$Y$是arcwise connected的，那么$\pi_{n}(Y,y_{0}) \cong \pi_{n}(Y,y_{1}),\ \forall y_{0},\ y_{1}\in Y$。所以我们省略$y_{0}$的标记，直接将同伦群记为$\pi_{n}(Y)$。若$Y$是一个“中间有洞”的结构，那么这些同伦群同构于整数。

>[!Success] Theorem 2.1
>$\pi_{n}(S^{n}) \cong \mathbb{Z}$

## Ex:

例如$\pi_{1}(S^{1})$。所有绕在$Y$中绕一圈的loop构成的同伦类和$1\in \mathbb{Z}$同构。所有在$Y$中绕两圈的loop构成的同伦类和$2\in \mathbb{Z}$同构，...。因为$S^{1}$中间有洞，所以更复杂的loop不会出现。


类似地，可以证明$[T^{2},S^{2}]$也是一个群，因为$T^{2}$也具有周期结构。并且也有$[T^{2},S^{2}]\cong\mathbb{Z}$。其中第一Chern数将每个同伦群类的函数映射成相应的整数。

>[!Note] Definition 2.4
>Take $[f]\in[T^{2},S^{2}]$, and take $\mathbf{m}\in[f]$. Define the first Chern number as:
>$$C_{1}= \frac{1}{4\pi}\int d^{2}k \mathbf{m}\cdot\left(  \frac{\partial \mathbf{m}}{\partial k_{x}}\times \frac{\partial \mathbf{m}}{\partial k_{y}} \right) $$

所以处于同一个同伦类中的函数都具有相同的Chern数。

# 3. Haldane模型与拓扑

记$\psi_{k}= \begin{pmatrix}c^{}_{A,k} \\ c_{B,k}\end{pmatrix}$。那么hamiltonian写为$H=\sum_{k}\psi_{k}^{\dagger}H(k)\psi_{k}$。其中：
$$\begin{align}
H(k) & = -t\mathrm{Re}f(k)\tau^{x}+t\mathrm{Im}f(k)\tau^{y}+2t^{'}g(k)\tau^{z}  = \mathbf{d}(k)\cdot \boldsymbol{\tau}
\end{align}$$
我们有$\mathbf{d}(k)=(-t\mathrm{Re}f(k),t\mathrm{Im}f(k),2t^{'}g(k))$。接下来在$K= \frac{4\pi}{3a}\left( 0, \frac{1}{\sqrt{ 3 }} \right),\ K^{'}= \frac{4\pi}{3a}\left( 0,- \frac{1}{\sqrt{ 3 }} \right)$附近展开能谱。
$$\begin{align}
  & K:\ f(k)=f(K+q)\approx \frac{3}{2 }a(iq_{x}-q_{y}),\ g(k)=g(K+q)\approx - \frac{3}{2}\sqrt{ 3 } a \\
 & K^{'}:\ f(k)=f(K+q)\approx \frac{3}{2}a(iq_{x}+q_{y}),\ g(k)=g(K+q)\approx \frac{3}{2}\sqrt{ 3 }a
\end{align}$$
那么在$K$点附近，$\mathbf{d}=(v_{F}q_{y},v_{F}q_{x}, -m)$：
$$H(k)=v_{F}\boldsymbol{\alpha}\cdot \mathbf{q}-m \beta$$
在$K^{'}$点附近，$\mathbf{d}=(-v_{F}q_{y},v_{F}q_{x},m)$：
$$H(k)=v_{F}\boldsymbol{\alpha}\cdot     \tilde{\mathbf{q}}  +m\beta$$
其中$v_{F}= \frac{3}{2}at,\ m=3\sqrt{ 3 }t^{'},\ \boldsymbol{\alpha}=(\alpha^{1},\alpha^{2})=(\tau^{y},\tau^{x}),\ \beta=\tau^{z},\ \mathbf{q}=(q_{x},q_{y}),\  \tilde{\mathbf{q}}=(q_{x},-q_{y})$。容易计算：
$$E_{\pm}(\mathbf{k})= \pm d(\mathbf{k})$$















定义$\hat{\mathbf{d}}= \frac{\mathbf{d}}{d}$。于是$\hat{\mathbf{d}}$是一个$T^{2}\rightarrow S^{2}$的映射。









