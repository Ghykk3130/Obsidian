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
![[Pasted image 20261019163438.png|centering|600]]
We then calculate the specific heat:
$$\begin{align}
c & = \frac{1}{N} T \frac{\partial S }{\partial T} \\
 & = - \frac{1}{N}T \cdot Nk_{B} \frac{\partial}{\partial T}\left(  \frac{y^{2}}{\cosh ^{2}y} \right) \\
 & = -k_{B}T \frac{2y \cosh ^{2}y-2\cosh y\sinh y \cdot y^{2}}{\cosh ^{4}y} \frac{\partial y}{\partial T} \\
 & = k_{B}^{} \frac{2y^{2}\cosh ^{2}y-2y^{3}\cosh y\sinh y}{\cosh ^{4}y} \\
 & = 2k_{B}y^{2} \text{sech}^{2}y(1-y \tanh y)
\end{align}$$
![[Pasted image 20261019163631.png|centering|600]]
## (c)

Without loss of generality, we let $\mathbf{B}=B \hat{\mathbf{z}}$. We have:
$$\begin{align}
\langle m_{J}\rangle & = \sum_{m_{J}}m_{J}\exp(-\beta g_{J} \mu_{B}m_{J}B) \\ & = -\sum_{m_{J}} \frac{\partial}{\partial(\beta g_{J}\mu_{B}B)} \exp(-\beta g_{J}\mu_{B}m_{J}B) \\

 & = - \frac{\partial}{\partial x}\ln Z, x= \beta g_{J}\mu_{B}B
\end{align}$$
We calculate the partition function:
$$\begin{align}
Z & = \sum_{m_{J}=-J}^{J} \exp(-xm_{J}) \\
 & = \frac{e^{Jx}}{1-e^{-x}}- \frac{e^{-x(J+1)}}{1-e^{-x}} \\
 & = \frac{\exp\left(  \frac{2J+1}{2} x\right)- \exp\left( - \frac{2J+1}{2}x \right)}{e^{x /2}-e^{-x /2}} \\
 & = \frac{\sinh\left(  \frac{2J+1}{2}x \right)}{\sinh(x /2)}
\end{align}$$
Then
$$\begin{align}
\langle m_{j}\rangle & = \frac{1}{2}\coth\left(  \frac{x}{2} \right)- \frac{2J+1}{2}\coth\left( \frac{2J+1}{2}x \right) 
\end{align}$$
Then we have:
$$\begin{align}
M & = n\mu_{B}g_{J}\langle m_{J}\rangle  \\
   &   = M_{s} B_{J}(y),\ M_{s}=n\mu_{B}g_{J}J,\ y=Jx=J\mu_{B}g_{J}\beta B
\end{align}$$
## (d)

For $y\ll 1$, we have:
$$\begin{align}
\coth(y) & \approx  \frac{1+ \frac{1}{2!}x^{2}}{x+ \frac{1}{3!}x^{3}} \\
 & \approx \frac{1+ \frac{1}{2}x^{2}}{x}\left( 1- \frac{1}{6}x^{2} \right) \\
 & \approx \frac{1}{x}+ \frac{x}{3}
\end{align}$$
Then we expand the Brillouin function:
$$\begin{align}
B_{J}(y) & \approx \frac{2J+1}{2J}\left(  \frac{2J}{2J+ 1} \frac{1}{y} + \frac{2J+1}{6J}y \right)- \frac{1}{2J} \left(\frac{2J}{y}+ \frac{y}{6J}\right) \\
 & =  \frac{J+1}{3J}y
\end{align}$$

Then we get the low-temperature magnetization:
$$\begin{align}
M & = M_{s} \frac{J+1}{3J}y \\
 & = ng_{J}\mu_{B}J \frac{J+1}{3J} J \beta \mu_{B}BJ g_{J} \\
 & = \frac{n B}{3k_{B}T}g_{J}^{2} \mu_{B}^{2}J(J+1) \\
 & = \frac{nB}{3k_{B}T }\mu_{\text{eff}}^{2},\ \mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) }
\end{align}$$
## (e)

The shell is exactly half-filled. We have:
$$S= \frac{7}{2},\ L=0,\ J= \frac{7}{2}$$
Then Lande g-factor is:
$$\begin{align}
g_{J} & = \frac{3}{2}+ \frac{S(S+1)-L(L+1)}{2J(J+1)} \\
 & = 2
\end{align}$$
The effective moment is:
$$\begin{align}
\mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) } \\
 & = \sqrt{ 63 }\mu_{B}
\end{align}$$
# Problem 2








