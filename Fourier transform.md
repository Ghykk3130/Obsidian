# 1. x-space bounded and continuous

考虑Hilbert空间$L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$中的函数。我们希望将它们写成级数。取Hilbert空间的基$\psi_{q}(x)=Ae^{iqx},\ q= \frac{2\pi n}{L}$。

我们容易得到$\psi_{q}$的orthogonality和completeness。为此，我们先定义：

>[!Note] Definition 1.1
>Define the Dirichlet kernel:
>$$D_{N}(x)= \sum_{-N}^Ne^{inx}$$

我们先证以下引理：

>[!Note] Theorem 1.1 (Riemann-Lebesgue lemma)
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

>[!Note] Proposition 1.1
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

于是：

>[!Note] Proposition 1.2
>Orthogonality: $\int_{-\frac{L}{2}}^{\frac{L}{2}}dx\psi_{q^{'}}^{*}(x)\psi_{q}(x)=|A|^{2}L\delta_{q,q^{'}}$
>Completeness: $\sum_{q}\psi_{q}(x)=AL\delta(x)$
## Proof.

**Orthogonality:**

我们有：
$$\begin{align}
\int_{- \frac{L}{2}}^{\frac{L}{2}}dx\psi ^{*}_{q^{'}}\psi_{q} & = |A|^{2}\int dxe^{i(q-q^{'})x} \\
 & = |A|^{2} \frac{2}{(q-q^{'})}  \sin\left( \frac{(q-q^{'})L}{2} \right) \\
 & = |A|^{2}L\delta_{q,q^{'}}
\end{align}$$
最后一步是因为$q=\frac{2\pi n}{L}$。代入便是显然。

**Completeness:**

我们有：
$$\begin{align}
\sum_{q}\psi_{q}(x) & = \sum_{n\in \mathbb{Z}}A\exp\left( i \frac{2\pi n}{L}x \right) \\
 & = \lim_{ N \to \infty }  \sum_{-N}^NA\exp\left( i \frac{2\pi n}{L}x \right) \\
 & = \lim_{ N \to \infty }  A \frac{\exp\left( - i\frac{2\pi N}{L}x \right)-\exp\left( i \frac{2\pi (N+1)}{L}x \right)}{1- \exp\left( i \frac{2\pi}{L}x \right)} \\
 & = \lim_{ N \to \infty } A \frac{e^{i \frac{\pi}{L}x}\left( \exp\left( -i \frac{2\pi}{L}\left( N- \frac{1}{2} \right)x \right) -\exp\left( i \frac{2\pi}{L}\left( N- \frac{1}{2} \right) x\right) \right)}{e^{i \frac{\pi}{L}x}\left( \exp\left( - i \frac{\pi}{L}x \right)-\exp\left( i \frac{\pi}{L}x \right) \right)} \\
 & = \lim_{ N \to \infty } A \frac{\sin\left( \frac{2\pi}{L}\left( N- \frac{1}{2} \right)x \right)}{\sin\left(  \frac{\pi}{L}x \right)} \\
 & = A\lim_{ N \to \infty } D_{N-1}\left( \frac{2\pi x}{L} \right) \\
 & = 2\pi A \delta\left( \frac{2\pi x}{L} \right) \\
 & = AL\delta(x)
\end{align}$$
>[!Right]
>$\blacksquare$

于是可以得到：

>[!Note] Theorem 1.2
>Let $f(x)\in L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$. Then :
>$$f= \sum_{q}\tilde{f}(q)\psi_{q}(x)\text{, where }\tilde{f}(q)= \frac{1}{AL}\int_{- \frac{L}{2}}^{\frac{L}{2}} dx f e^{-iqx}$$
## Proof.
$$\begin{align}
\sum_{q}\tilde{f}(q)\psi_{q}(x) & = \sum_{q}\left( \frac{1}{AL} \int_{{- \frac{L}{2}}}^{\frac{L}{2}} dx^{'}f(x^{'}) \right)A e^{iqx} \\
 & = \frac{1}{L}\int dx^{'}f(x^{'})\sum_{q}\exp(iq(x-x^{'})) \\
 & = \frac{1}{L} \int dx^{'}f(x^{'}) \frac{1}{A}AL\delta(x-x^{'}) \\
 & = f(x)
\end{align}$$
>[!Right]
>$\blacksquare$

By convention，取$A=\frac{1}{L}$。

# 2. x-space is unbounded and continuous

令$L\rightarrow \infty$。则$q= \frac{2\pi n}{L}$连续化。则：
$$\sum_{q} \leadsto \frac{L}{2\pi}\int dq$$
故：

>[!Note] Proposition 2.1
>Orthogonality: $\int_{\mathbb{R}}dx \psi_{q}^{*}(x)\psi_{q^{'}}(x)=|A|^{2}\delta(q-q^{'})$
>Completeness: $\frac{1}{2\pi}\int_{\mathbb{R}} dq\psi_{q}=A\delta(x)$
## Proof.

Completeness由于测度替换便是显然。写得更explicit一点就是：
$$\int_{\mathbb{R}}dq e^{iqx}=2\pi\delta(x)$$
那么orthogonality就是显然。
>[!Right]
>$\blacksquare$

于是可以得到：

>[!Note] Theorem 2.2
>Let $f(x)\in L^{2}$. Then :
>$$f(x)= \frac{1}{2\pi} \int_{\mathbb{R}}dq\tilde{f}(q)e^{iqx}\text{, where }\tilde{f}(q)= \int_{\mathbb{R}} dx f(x) e^{-iqx}$$

# 3. x-space is unbounded and discrete

令$f\in l^{2}$。其横坐标$x_{n}=na\in a\mathbb{Z}$。我们取Hilbert空间的基$\psi_{q}(x_{n})=Ae^{iqx_{n}}$。发现：
$$\psi_{q+ \frac{2\pi}{a}}(x_{n})=A\exp\left( iqx_{n}+iq \frac{2\pi}{a}x_{n} \right)=A\exp(iqx_{n})=\psi_{q}(x_{n})$$
所以Hilbert空间的基为：$\psi_{q}(x_{n}),\ q\in\left[ - \frac{\pi}{a}, \frac{\pi}{a} \right)$。

>[!Note] Proposition 3.1
>Orthogonality: $\sum_{n=-\infty}^{\infty} \psi ^{*}_{q}(x_{n})\psi_{q^{'}}(x_{n})= |A|^{2} \frac{2\pi}{a}\delta(q-q^{'})$
>Completeness: $\int_{- \frac{\pi}{a}}^{\frac{\pi}{a}} dq\psi_{q}(x_{n})= A \frac{2\pi}{a}\delta_{n,0}$

## Proof.

**Orthogonality:**
$$\begin{align}
\sum_{-\infty}^{\infty}\psi_{q}^{*}(x_{n})\psi_{q^{'}}(x_{n}) & = \lim_{ M \to \infty }|A|^{2}\sum_{-M}^M \exp(i(q^{'}-q)na ) \\
 & = \lim_{ M \to \infty } |A|^{2}D_{M}((q^{'}-q)a) \\
 & = 2\pi|A|^{2}\delta((q^{'}-q)a) \\
\end{align}$$
注意此处$q,q^{'}\in\left[ -\frac{\pi}{a}, \frac{\pi}{a} \right)\implies (q-q^{'})\in\left( - \frac{2\pi}{a}, \frac{2\pi}{a} \right)$，不然$\lim_{ M \to \infty }D_{M}$不能被reduce成单个的dirac delta。

**Completeness:**

若$n\neq 0$，则：
$$\begin{align}
\int_{- \frac{\pi}{a}}^{\frac{\pi}{a}}dq Ae^{iqx_{n}} & = \frac{1}{ix_{n}}(e^{in\pi}-e^{-in\pi})=0
\end{align}$$
若$n=0$，则：
$$\int_{- \frac{\pi}{a}}^{\frac{\pi}{a}}dq Ae^{iqx_{n}}=A \frac{2\pi}{a}$$
>[!Right]
>$\blacksquare$

于是可以得到：

>[!Note] Theorem 3.1
>Let $f(x_{n})\in l^1$. Then:
>$$f(x_{n})= \int_{- \frac{\pi}{a}}^{\frac{\pi}{a}}dq \tilde{f}(q) \psi_{q}(x_{n})\text{ where }\tilde{f}(q)= \frac{a}{2\pi |A|^{2}} \sum_{-\infty}^{\infty} f(x_{n})\psi_{q}^{*}(x_{n})$$
## Proof.
$$\begin{align}
\int_{- \frac{\pi}{a}}^{\frac{\pi}{a} }dq \frac{a}{2\pi A}\sum_{n^{'}=-\infty}^{\infty}f(x_{n^{'}})e^{-iqx_{n^{'}}} \cdot A e^{iqx_{n}} & = \frac{a}{2\pi }\sum_{n^{'}}f(x_{n^{'}}) \int dq e^{iq(x_{n}-x_{n^{'}}) } \\
 & = \frac{a}{2\pi}\sum_{n^{'}}f(x_{n^{'}})2\pi \delta(a(n-n^{'}))  \\
 & = f(x_{n}) 
\end{align}$$
>[!Right]
>$\blacksquare$

# 4. x-space is bounded and discrete










