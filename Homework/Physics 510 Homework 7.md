# 1.
We need:
$$\begin{align}
U & = \langle H \rangle \\
 & = \frac{\int_{\mathbb{R}^{N+1}} dxd^NyH\exp(-\beta H)}{\int_{\mathbb{R}^{N+1}}dxd^Ny\exp(-\beta H)} \\
 & = \frac{- \frac{\partial}{\partial \beta}\int dxd^Ny\exp(-\beta H)}{\int dxd^Ny\exp(-\beta H)} \\
 & = - \frac{\partial}{\partial \beta}\ln\left( \int dxd^Ny\exp(-\beta H) \right)
\end{align}$$
Now compute:
$$\begin{align}
\int dxd^Ny \exp(-\beta H) & = \int_{\mathbb{R}}dx\exp(-\beta c(x-x^{*})^{2})\int_{\mathbb{R}^{N} }d^Ny \exp(-\beta H_{I}) \\
 & = \frac{\sqrt{ \pi }}{\sqrt{ \beta c }}\int d^Ny\exp(-\beta H_{I})\end{align}
$$
Then:
$$\ln\left( \int dxd^Ny\exp(-\beta H) \right)= \frac{1}{2}\ln \pi- \frac{1}{2}\ln \beta- \frac{1}{2}\ln c+\ln\left( \int d^Ny\exp(-\beta H_{I}) \right)$$
Then:
$$\begin{align}
U & = \frac{1}{2} \frac{1}{\beta}- \frac{\partial}{\partial \beta}\ln\left( \int d^Ny\exp(-\beta H_{I}) \right) \\
 & = \frac{1}{2}kT+U_{I}\text{, where }U_{I}= - \frac{\partial}{\partial \beta}\ln\left( \int d^Ny\exp(-\beta H_{I}) \right)
\end{align}$$
# 2.
