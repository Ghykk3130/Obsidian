# 1. Fourier transform

考虑Hilbert空间$L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$中的函数。我们可以将它们写成级数：

>[!Note] Theorem 1
>Let $f\in L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$. Then :
>$$f= \sum_{q}\tilde{f}(q)\psi_{q}(x)\text{, where }\psi_{q}(x)= Ae^{iqx},\ q= \frac{2\pi n}{L},\ n\in \mathbb{Z}$$

我们容易得到$\psi_{q}$的orthogonality和completeness。

>[!Note] Proposition 1
>$\int_{-\frac{L}{2}}^{\frac{L}{2}}dx\psi_{q^{'}}^{*}(x)\psi_{q}(x)=|A|^{2}L\delta_{q,q^{'}}$
## Proof.
我们有：
$$\begin{align}
\int_{- \frac{L}{2}}^{\frac{L}{2}}dx\psi ^{*}_{q^{'}}\psi_{q} & = |A|^{2}\int dxe^{i(q-q^{'})x} \\
 & = |A|^{2} \frac{2}{(q-q^{'})}  \sin\left( \frac{(q-q^{'})L}{2} \right) \\
 & = 
\end{align}$$

