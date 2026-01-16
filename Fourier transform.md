# 1. Fourier transform

考虑Hilbert空间$L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$中的函数。我们可以将它们写成级数：

>[!Note] Theorem 1.1
>Let $f\in L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$. Then :
>$$f= \sum_{q}\tilde{f}(q)\psi_{q}(x)\text{, where }\psi_{q}(x)= Ae^{iqx},\ q= \frac{2\pi n}{L},\ n\in \mathbb{Z}$$

我们容易得到$\psi_{q}$的orthogonality和completeness。

>[!Note] Proposition 1.1
>Orthogonality: $\int_{-\frac{L}{2}}^{\frac{L}{2}}dx\psi_{q^{'}}^{*}(x)\psi_{q}(x)=|A|^{2}L\delta_{q,q^{'}}$
>Completeness: $\sum_{q}\psi_{q}(x)=AL\delta(x)$
## Proof.
我们有：
$$\begin{align}
\int_{- \frac{L}{2}}^{\frac{L}{2}}dx\psi ^{*}_{q^{'}}\psi_{q} & = |A|^{2}\int dxe^{i(q-q^{'})x} \\
 & = |A|^{2} \frac{2}{(q-q^{'})}  \sin\left( \frac{(q-q^{'})L}{2} \right) \\
 & = |A|^{2}L\delta_{q,q^{'}}
\end{align}$$
最后一步是因为$q=\frac{2\pi n}{L}$。代入便是显然。

对于completeness，我们有：
$$\begin{align}
\sum_{q}\psi_{q}(x) & = \sum_{n\in \mathbb{Z}}A\exp\left( i \frac{2\pi n}{L}x \right) \\
 & = \lim_{ N \to \infty }  \sum_{-N}^NA\exp\left( i \frac{2\pi n}{L}x \right) \\
 & = \lim_{ N \to \infty }  A \frac{\exp\left( - i\frac{2\pi N}{L}x \right)-\exp\left( i \frac{2\pi N}{L}x \right)}{1- \exp\left( i \frac{2\pi}{L}x \right)} \\
 & = \lim_{ N \to \infty } A \frac{e^{i \frac{\pi}{L}x}\left( \exp\left( -i \frac{2\pi}{L}\left( N- \frac{1}{2} \right)x \right) -\exp\left( i \frac{2\pi}{L}\left( N- \frac{1}{2} \right) x\right) \right)}{e^{i \frac{\pi}{L}x}\left( \exp\left( - i \frac{\pi}{L}x \right)-\exp\left( i \frac{\pi}{L}x \right) \right)} \\
 & = \lim_{ N \to \infty } A \frac{\sin\left( \frac{2\pi}{L}\left( N- \frac{1}{2} \right)x \right)}{\sin\left(  \frac{\pi}{L}x \right)}
\end{align}$$
可以定义：

>[!Note] Definition 1.1
>Define the Dirichlet kernel:
>$$D_{N}(x)= \sum_{-N}^Ne^{inx}$$

我们先证以下引理：

>[!Note] Theorem 1.2 (Riemann-Lebesgue lemma)
>Let $f\in L^1([a,b])$, then:
>$$\lim_{ \lambda \to \infty } \int_{a}^bdxf(x)e^{i\lambda x}=0$$
## Proof.

**方法一：**

取$f(x)=\mathbb{1}$，容易证明：
$$\lim_{ \lambda \to \infty } \int_{a}^b\mathbb{1}e^{i\lambda x}=\lim_{ \lambda \to \infty } \frac{e^{i\lambda b}-e^{i\lambda a}}{i\lambda}=0$$
所以对于简单函数，即$f(x)=\sum_{j}c_{j}\mathbb{1}_{E_{j}}$，容易证明：
$$\lim_{ \lambda \to \infty } \int_{a}^bdxf(x)e^{i\lambda x}=0$$
因为简单函数在$L^1$中稠密，then done。

**方法二：**

我们有：
$$\begin{align}
\int_{a}^b dx f(x)e^{i\lambda x} & = \frac{1}{i\lambda}\left[f(x)e^{i\lambda x}\right]^b_{a}-  \frac{1}{i\lambda} \int dxf^{'}e^{i\lambda x}
\end{align}$$
由于右手边都是bounded的，显然$\lim_{ \lambda \to \infty }\text{RHS}=0$。
>[!Right]
>$\blacksquare$




