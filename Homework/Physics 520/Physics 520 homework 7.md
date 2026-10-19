# Problem 1
## (a)

We have:
$$\begin{align}
M & = \frac{nB}{3k_{B}T} \mu_{\text{eff}}^{2} \\
 & = \frac{nB}{3k_{B}T}\left( 2 \mu_{B}\cdot \frac{3}{4} \right)^{2} \\
 & = \frac{3}{4} \frac{nB\mu_{B}^{2}}{k_{B}T}
\end{align}$$
Then susceptibility is given by:
$$\begin{align}
\chi & = \frac{M}{\mu_{0}B} \\
 & = \frac{3}{4} \frac{n\mu_{0}\mu_{B}^{2}}{k_{B}T}
\end{align}$$
## (b)

Know that the internal energy is:
$$\begin{align}
U & = Ng_{J}\mu_{B}\langle m_{J}\rangle B  \\
 & = N\mu_{B}g_{J}J B_{J}(y)\\
 & = N\mu_{B}B \tanh(y)
\end{align}$$
Then we take the derivative:
$$\begin{align}
S & = \frac{\partial U}{\partial T} \\
 & = N\mu_{B}B \frac{\partial \tanh(y)}{\partial y} \frac{\partial y}{\partial T} \\
 & = N\mu_{B}B \frac{1}{\cosh ^{2}y} \left( - \frac{\mu_{B}B}{k_{B}T^{2}} \right) \\
 & = - \frac{N\mu_{B}^{2}B^{2}}{\cosh ^{2}y} \frac{1}{k_{B}T^{2}} \\
 & = -  Nk_{B} \frac{y^{2}}{\cosh ^{2}y} ,\ y=\beta \mu_{B}B
\end{align}$$
We then calculate the specific heat:
$$\begin{align}
c & = \frac{1}{N} T \frac{\partial S }{\partial T} \\
 & = - \frac{1}{N}T \cdot Nk_{B} \frac{\partial}{\partial T}\left(  \frac{y^{2}}{\cosh ^{2}y} \right) \\
 & = -k_{B}T \frac{2y \cosh ^{2}y-2\cosh y\sinh y \cdot y^{2}}{\cosh ^{4}y} \frac{\partial y}{\partial T} \\
 & = k_{B}^{} \frac{2y^{2}\cosh ^{2}y-2y^{3}\cosh y\sinh y}{\cosh ^{4}y} \\
 & = 2k_{B}y^{2} \text{sech}^{2}y(1-y \tanh y)
\end{align}$$



