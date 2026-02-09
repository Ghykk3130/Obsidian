# 1. Dirac comb与Dirac delta

我们先定义：

>[!Note] Definition 1.1
>Define the Dirichlet kernel:
>$$D_{N}(x)= \sum_{-N}^Ne^{inx}$$

我们先证以下引理：

>[!Success] Theorem 1.1 (Riemann-Lebesgue lemma)
>Let $f\in L^1([a,b])$, then:
>$$\lim_{ \lambda \to \infty } \int_{a}^bdxf(x)e^{i\lambda x}=0$$
## Proof.

**方法一：**

取$f(x)=\mathbb{1}$，容易证明：
$$\lim_{ \lambda \to \infty } \int_{a}^b\mathbb{1}e^{i\lambda x}=\lim_{ \lambda \to \infty } \frac{e^{i\lambda b}-e^{i\lambda a}}{i\lambda}=0$$
所以对于简单函数，即$f(x)=\sum_{j=1}^Nc_{j}\mathbb{1}_{E_{j}}$，容易证明：
$$\lim_{ \lambda \to \infty } \int_{a}^bdxf(x)e^{i\lambda x}=0$$
因为简单函数在$L^1$中 稠密，then done。

**方法二：**

我们有：
$$\begin{align}
\int_{a}^b dx f(x)e^{i\lambda x} & = \frac{1}{i\lambda}\left[f(x)e^{i\lambda x}\right]^b_{a}-  \frac{1}{i\lambda} \int dxf^{'}e^{i\lambda x}
\end{align}$$
由于右手边都是bounded的，显然$\lim_{ \lambda \to \infty }\text{RHS}=0$。
>[!Right]
>$\blacksquare$

接下来：

>[!Success] Proposition 1.1
$$\lim_{ N \to \infty } D_{N}(x)=\sum_{m}2\pi\delta(x-2\pi m)$$
## Proof.
我们有：
$$\begin{align}
D_{N}(x) & = \sum_{-N}^N e^{inx} \\
 & = \frac{e^{-iNx}-e^{i(N+1)x }}{1-e^{-ix} } \\
 & = \frac{\exp\left( -i \left( N + \frac{1}{2} \right) \right)-\exp\left( i\left( N+ \frac{1}{2} \right) \right)}{\exp\left(  \frac{ix}{2} \right)-\exp\left( - \frac{ix}{2} \right) } \\
 & = \frac{\sin\left( \left( N+ \frac{1}{2} \right)x \right)}{\sin\left( \frac{x}{2} \right)}
\end{align}$$
注意到$D_{N}(x+2\pi)=D_{N}(x)$。只需证明在$[-\pi,\pi]$中，$D_{N}(x)=2\pi\delta(x)$。先验证在零处爆掉：
$$\lim_{ x \to 0 } D_{N}(x)= \frac{\left( N+ \frac{1}{2} \right)x}{ \frac{1}{2}x}=N+ \frac{1}{2}\rightarrow \infty \text{ as }N\rightarrow \infty$$
接下来：
$$\begin{align}
\int_{-\pi}^{\pi}dxD_{N}(x) & = \sum_{-{N}}^N\int dx e^{inx} \\ & =\sum_{n\neq 0}\int dxe^{inx}+\int dx \\

 & =0+2\pi=2\pi 
\end{align}$$
所以：
$$\lim_{ N \to \infty } \int_{-\pi}^{\pi}dxD_{N}(x)=\int dx\lim_{ N \to \infty } D_{N}(x)=2\pi$$
然而，又因为：
$$\lim_{ N \to \infty } \int_{a}^bdxD_{N}(x)= \lim_{ N \to \infty } \int_{a}^bdx \frac{\sin\left( \left( N+ \frac{1}{2} \right)x \right)}{\sin\left( \frac{x}{2} \right)}=0=\int dx \lim_{ N \to \infty }  \frac{\sin\left( \left( N+ \frac{1}{2} \right)x \right)}{\sin\left( \frac{x}{2} \right)}\text{ for }0 \notin[a,b]$$
所以：
$$\int_{U\ni{0}}dx \lim_{ N \to \infty } D_{N}(x)=2\pi$$
接下来，$\forall f\in L^1$，我们有：
$$\begin{align}
\int_{a}^bdx f(x)\lim_{ N \to \infty } D_{N}(x) & = \lim_{ N \to \infty } \int dxf(x)D_{N}(x) \\
 & = \lim_{ N \to \infty } \int dx \frac{f(x)}{\sin\left(  \frac{x}{2} \right)} \sin\left( \left( N+ \frac{1}{2} \right)x \right) \\
 & =0\text{ for all }[a,b] \not\ni 0 
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Success] Proposition 1.2
>$$\int_{\mathbb{R}}dq e^{iqx}=2\pi\delta(x)$$
## Proof.

考虑$x\in\left[ - \frac{L}{2}, \frac{L}{2} \right]$。那么$\frac{2\pi x}{L}\in[-\pi,\pi]$。所以：
$$\sum_{n\in \mathbb{Z}}e^{in \frac{2\pi x}{L}}=2\pi \sum_{m\in \mathbb{Z}}\delta\left( \frac{2\pi x}{L}-2\pi m \right)=2\pi\delta\left( \frac{2\pi x}{L} \right)=L\delta (x)$$
令$L\rightarrow \infty$。则$q= \frac{2\pi n}{L}$连续化。则：
$$\sum_{q} \leadsto \frac{L}{2\pi}\int dq$$
故：
$$\int_{\mathbb{R}}dqe^{iqx}=2\pi\delta(x)$$
>[!Right]
>$\blacksquare$
# 2. x-space bounded and continuous

考虑Hilbert空间$L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$中的函数。我们希望将它们写成级数。取Hilbert空间的基$\psi_{q}(x)=e^{iqx},\ q= \frac{2\pi n}{L}$。

于是可以得到：

>[!Success] Theorem 2.1
>Let $f(x)\in L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$. Then :
>$$f(x)= \sum_{n\in \mathbb{Z}}\tilde{f}(q_{n})e^{iq_{n}x}\text{, where }\tilde{f}(q_{n})= \frac{1}{L}\int_{- \frac{L}{2}}^{\frac{L}{2}} dx f(x) e^{-iq_{n}x}$$
## Proof.

令$f(x)=\sum_{n}\tilde{f}(q_{n})e^{iq_{n}x},\ q_{n}= \frac{2\pi n}{L}$。那么我们有：
$$\begin{align}
 & f(x)e^{-iq_{n^{'}}x}=\sum_{n}\tilde{f}(q_{n})e^{i(q_{n}-q_{n^{'}})x} \\
\implies & \int_{-\frac{L}{2}}^{\frac{L}{2}}dxf(x)e^{-iq_{n^{'}}x}= \sum_{n}\tilde{f}\int_{- \frac{L}{2}}^{\frac{L}{2}}dxe^{i(q_{n}-q_{n^{'}})x}
\end{align}$$
容易证明：
$$\begin{align}
  \text{If }n\neq n^{'}:  & \\
 & \int_{- \frac{L}{2}}^{\frac{L}{2}}dxe^{i(q_{n}-q_{n^{'}})x} = \frac{2i\sin\left( i(q_{n}-q_{n^{'}}) \frac{L}{2} \right)}{i(q_{n}-q_{n^{'}}) }=0 \\
\text{If }n=n^{'}: &  \\
 & \int_{-\frac{L}{2}}^{\frac{L}{2}}dx 1=L
\end{align}$$
那么：
$$\int_{-\frac{L}{2}}^{\frac{L}{2}}dxf(x)e^{-iq_{n^{'}}x}= \sum_{n}\tilde{f}\int_{- \frac{L}{2}}^{\frac{L}{2}}dxe^{i(q_{n}-q_{n^{'}})x}=L\tilde{f}(q_{n^{'}})$$
>[!Right]
>$\blacksquare$

Fourier变换前面的系数有一个自由度。若我们取基$\psi_{q}= \frac{1}{\sqrt{ L }}e^{iqx}$。这时我们作展开：
$$f(x)= \frac{1}{\sqrt{ L }} \sum \tilde{f}(q_{n}) e^{iq_{n}x}$$
那么由上面推导，我们得到：
$$\frac{1}{\sqrt{ L }}\tilde{f}(q_{n})= \frac{1}{L} \int_{-\frac{L}{2}}^{\frac{L}{2}}dxf(x)e^{-iq_{n}x}\implies \tilde{f}(q_{n})= \frac{1}{\sqrt{ L }}\int dxf(x)e^{-iq_{n}x}$$

# 3. x-space is unbounded and continuous

>[!Success] Theorem 3.1
>Let $f(x)\in L^{2}$. Then :
>$$f(x)= \frac{1}{2\pi} \int_{\mathbb{R}}dq\tilde{f}(q)e^{iqx}\text{, where }\tilde{f}(q)= \int_{\mathbb{R}} dx f(x) e^{-iqx}$$
## Proof.

令$f(x)= \frac{1}{2\pi}\int_{\mathbb{R}}dq\tilde{f}(q)e^{iqx}$，那么：
$$\begin{align}
 & f(x)e^{-iq^{'}x}= \frac{1}{2\pi}\int dq\tilde{f}(q)e^{i(q-q^{'})x} \\
\implies & \int_{\mathbb{R}}dxf(x)e^{-iq^{'}x}= \frac{1}{2\pi}\int dq\tilde{f}(q)\int_{\mathbb{R}}dxe^{i(q-q^{'})x} \\
\implies & \int dxf(x)e^{-iq^{'}x}= \frac{1}{2\pi}\int dq\tilde{f}(q)2\pi\delta(q-q^{'})= \tilde{f}(q^{'}) 
\end{align}$$
>[!Right]
>$\blacksquare$

# 3. x-space is unbounded and discrete

考虑$x-\text{space}$离散化，只能取间隔为$a$的点。令$f\in l^{2}$。其横坐标$x_{n}=na\in a\mathbb{Z}$。我们取Hilbert空间的基$e^{iqx_{n}}$。发现：
$$\exp\left( i\left( q+ \frac{2\pi}{a} \right)x_{n} \right)=\exp(iqx_{n})$$
所以可以约束：$q\in\left[ - \frac{\pi}{a}, \frac{\pi}{a} \right)$。于是可以得到：

>[!Success] Theorem 3.1
>Let $f(x_{n})\in l^1$. Then:
>$$f(x_{n})= \int_{- \frac{\pi}{a}}^{\frac{\pi}{a}}dq \tilde{f}(q) e^{iqx_{n}}\text{ where }\tilde{f}(q)= \frac{a}{2\pi } \sum_{-\infty}^{\infty} f(x_{n})e^{-iqx_{n}}$$
## Proof.

令$f(x_{n})=\int_{- \frac{\pi}{a}}^{\frac{\pi}{a}}dq\tilde{f}(q)e^{iqx_{n}}$。那么：
$$\begin{align}
 & f(x_{n})e^{-iq^{'}x_{n}}=\int_{- \frac{\pi}{a}}^{\frac{\pi}{a}} dq \tilde{f}(q)e^{i(q-q^{'})x_{n}} \\
\implies & \sum_{n\in \mathbb{Z}}f(x_{n})e^{-iq^{'}x_{n}}=\int dq\tilde{f}(q)\sum_{n\in \mathbb{Z}}e^{i(q-q^{'})x_{n}}=\int dq\tilde{f}(q)  2\pi \delta((q-q^{'})a)= \frac{2\pi}{a}\tilde{f}(q^{'})
\end{align}$$
>[!Right]
>$\blacksquare$
# 4. x-space is bounded and discrete

考虑$x-\text{space}$离散化且有界，仅仅只有$N$个点。令$x_{n}=na,\ n=0,\dots,N-1$。考虑$f\in l^{2}(\{ 0,\dots,N-1 \})$。取Hilbert空间的基$e^{iq_{m}x_{n}}\text{, where }q_{m}= \frac{2\pi m}{Na}$。注意到：
$$\begin{align}
\exp\left( i\left( q_{m}+ \frac{2\pi}{a} \right)x_{n} \right)=\exp(iq_{m}x_{n})
\end{align}$$
所以限制$q_{m}\in \left[0, \frac{2\pi}{a}\right)\implies m=0,\dots,N-1$。
## Remark

由此可见，只要x-space是离散的，q-space就是bounded的。

>[!Success] Theorem 4.1
>Let $f(x_{n})\in l^1(\{ 0,\dots,N-1 \})$. Then:
>$$f(x_{n})= \sum_{m=0}^{N-1}\tilde{f}(q_{m})e^{iq_{m}x_{n}}\text{ where }\tilde{f}(q_{m})= \frac{1}{N}\sum_{n=0}^{N-1}f(x_{n})e^{-iq_{m}x_{n}}$$
## Proof.

令$f(x_{n})=\sum_{m=0}^{N-1}\tilde{f}(q_{m})e^{iq_{m}x_{n}}$。那么：
$$\begin{align}
 & f(x_{n})e^{-iq_{m^{'}}x_{n}}=\sum_{m=0}^{N-1}\tilde{f}(q_{m})e^{i(q_{m}-q_{m^{'}})x_{n}} \\
\implies & \sum_{n=0}^{N-1}f(x_{n})e^{-iq_{m^{'}}x_{n}}=\sum_{m}\tilde{f}(q_{m})\sum_{n=0}^{N-1}e^{i(q_{m}-q_{m^{'}})x_{n}}
\end{align}$$
注意到：
$$\begin{align}
\text{If }m\neq m^{'} & : \\
 & \sum_{n=0}^{N-1}e^{i(q_{m}-q_{m^{'}})x_{n}}=\frac{1-e^{i(q_{m}-q_{m^{'}})aN}}{1-e^{i(q_{m}-q_{m^{'}})a}}=0 \\
\text{If }m=m^{'} & : \\
 & \sum_{n=0}^{N-1}e^{i(q_{m}-q_{m^{'}})x_{n}}=N 
\end{align}$$
所以：
$$\begin{align}
\sum_{m}\tilde{f}(q_{m})\sum_{n=0}^{N-1}e^{i(q_{m}-q_{m^{'}})x_{n}} & =\sum_{m}\tilde{f}(q_{m})N\delta_{mm^{'}}=N\tilde{f}(q_{m^{'}})
\end{align}$$
>[!Right]
>$\blacksquare$









