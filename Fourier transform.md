# 1. Fourier transform

考虑Hilbert空间$L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$中的函数。我们可以将它们写成级数：

>[!Note] Theorem 1
>Let $f\in L^{2}\left( \left[ - \frac{L}{2}, \frac{L}{2} \right] \right)$. Then :
>$$f= \sum_{q}\tilde{f}(q)\psi_{q}(x)\text{, where }\psi_{q}(x)= Ae^{iqx},\ q= \frac{2\pi n}{L},\ n\in \mathbb{Z}$$

我们容易得到$\psi_{q}$的orthogonality和completeness。

>[!Note] Proposition 1
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
\sum_{q}\psi_{q}(x) & = 
\end{align}$$


