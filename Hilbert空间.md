考虑一个可数维的矢量空间$\mathcal{H}^{'}$ ，正交基为$\{ \ket{n} \}$。考虑该空间中的子集：
$$\mathcal{H}=\{ \ket{\psi} =\sum c_{n}\ket{n}|\ \{ c_{n} \}\in l^2(\mathbb{C}) \} $$
容易证明，$\mathcal{H}$实际上是一个子空间。那么：

>[!Proposition 1]
>$$\mathcal{H} \cong l^2(\mathbb{N},\mathbb{C})$$

^proposition1
## Remark
$l^{2}(\mathbb{N},\mathbb{C})$表示，其中的数列是以自然数来做Index，数列取值为$\mathbb{C}$。
## Proof.
我们定义isomorphism:
$$\begin{align}
  \phi: & \mathcal{H}\rightarrow l^{2}(\mathbb{N},\mathbb{C}),\ \sum c_{n}\ket{n} \mapsto \{ c_{n} \}
\end{align}$$
这显然是bijective的。接下来验证对内积的保持。我们有：
$$\begin{align}
\bra{\psi_{1}} \psi_{2}\rangle_{\mathcal{H}}  & = \sum c_{1n}^{*}c_{2n} \\
 & = \bra{\phi(\psi_{1})}\phi(\psi_{2})\rangle_{l^{2}} 
\end{align}$$
>[!Right]
>$\blacksquare$

我们回忆起Hilbert空间的定义：

>[!Definition 1]
>A completer inner product space is called a Hilbert space. By complete, I mean that all Cauchy sequences under this inner product converge inside this space.

我们知道$l^{2}(\mathbb{N},\mathbb{C})$是一个Hilbert空间，所以$\mathcal{H}$也是一个Hilbert空间。

于是我们可以定义：

>[!Definition 2]
>In quantum mechanics, let $\mathcal{H}^{'}$ be a countable dimensional inner product space over complex field. Let $\{ \ket{n} \}$ be an orthonormal basis. Set:
>$$\mathcal{H}=\left\{  \ket{\psi} =\sum c_{n}\ket{n}\ |\ \{ c_{n} \}\in l^{2}(\mathbb{N},\mathbb{C})  \right\}$$
>
>we call $\mathcal{H}$ a Hilbert space.


### ？？？
而我们又知道，$l^{2}(\mathbb{N},\mathbb{C}) \subset L^{2}(\mathbb{R},\mathbb{C})$。所以，对于$L^{2}(\mathbb{R},\mathbb{C})$中的每个函数$f(x)$，我们可以用[[Hilbert空间^proposition1|proposition 1]]中同样地isomorphism给它强行map到一个矢量。即：
$$\phi ^{-1}(f(x))=f(x)\ket{x} $$
我们将所有这些强行map出来的矢量收集在一起，令：
$$\mathscr{H}=\phi ^{-1}(L^{2})$$
那么显然：
$$\mathcal{H}\subset\mathscr{H}$$
我们得到了一个更大的矢量空间！

>[!Definition 3]
>Define the rigged Hilbert space:
>$$\mathscr{H}=\phi ^{-1}(L^{2}(\mathbb{R},\mathbb{C}))$$

那么我们实际上可以用rigged Hilbert空间中的基$\ket{x}$来展开$\mathcal{H}$中的矢量。但是这些基却不都属于$\mathcal{H}$。实际上，只有$\ket{x},\text{ where }x\in \mathbb{N}$才是属于$\mathcal{H}$的。
