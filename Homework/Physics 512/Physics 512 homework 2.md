# 1.
## a)
We have that:
$$\begin{align}
C & = \sqrt{ \Gamma }\ket{g} \bra{e}  \\
 & = \begin{pmatrix}
0 & \sqrt{ \Gamma } \\
0 & 0
\end{pmatrix} \\
D_{g} & = \sqrt{ \gamma_{g} }\ket{g} \bra{g}  \\
 & = \begin{pmatrix}
\sqrt{ \gamma_{g} } & 0 \\
0 & 0
\end{pmatrix} \\
D_{e} &=\sqrt{ \gamma_{e} }\ket{e} \bra{e}  \\
 & =\begin{pmatrix}
0 & 0 \\
0 & \sqrt{ \gamma_{e} }
\end{pmatrix}
\end{align}$$
Then it's easy to calculate:
$$\begin{align}
  - \frac{1}{2} C^{\dagger}C\rho + \text{h.c.}+ C\rho C^{\dagger} & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma  } & 0
\end{pmatrix}  \begin{pmatrix}
0 & \sqrt{ \Gamma } \\
0 & 0
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
0 & \sqrt{ \Gamma }  \\
0 & 0 
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} &  \rho_{e e}
\end{pmatrix} \begin{pmatrix}
0 & 0 \\
\sqrt{ \Gamma } & 0
\end{pmatrix} \\
 & = - \frac{1}{2} \begin{pmatrix}
0 & 0 \\
\Gamma \rho_{eg} & \Gamma \rho_{e e}
\end{pmatrix}+\text{h.c.}+ \begin{pmatrix}
\Gamma \rho_{e e} & 0 \\
0 & 0
\end{pmatrix} \\
 & =\begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}\Gamma\rho_{ge} \\
- \frac{1}{2}\Gamma \rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
Similarly:
$$\begin{align}
- \frac{1}{2}\sum_{m}D_{m}^{\dagger}D_{m}\rho + \text{h.c.} \sum_{m} D_{m}\rho D_{m}^{\dagger} & = - \frac{1}{2}  \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{g} } & 0
\end{pmatrix} \begin{pmatrix}
 0 & \sqrt{ \gamma_{g} } \\
0 & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}- \frac{1}{2}\begin{pmatrix}
0 & \sqrt{ \gamma_{e} } \\
 0 & 0
\end{pmatrix}\begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{e} } & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}+ \text{h.c.}+ \begin{pmatrix}
0 & \sqrt{ \gamma_{g} } \\
0 & 0
\end{pmatrix}\begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix} \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{g} } & 0
\end{pmatrix}+ \begin{pmatrix}
0 & 0 \\
\sqrt{ \gamma_{e} } & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg }
 & \rho_{ge} \\
\rho_{eg} & \rho_{e e}\end{pmatrix}\begin{pmatrix}
0 & \sqrt{ \gamma_{e} } \\
 0 & 0
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & - \frac{1}{2}\gamma_{g}\rho_{ge} \\
- \frac{1}{2}\gamma_{g}\rho_{eg} & -\gamma_{g}\rho_{e e}
\end{pmatrix}+ \begin{pmatrix}
-\gamma_{e}\rho_{gg} & - \frac{1}{2}\gamma_{e}\rho_{ge} \\ - \frac{1}{2}\gamma_{e}\rho_{eg} & 0
\end{pmatrix}+ \begin{pmatrix}

\gamma_{g}\rho_{e e} & 0 \\
0 & 0
\end{pmatrix}+ \begin{pmatrix}
0 & 0 \\
0 & \gamma_{e} \rho_{gg}
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & - \frac{1}{2}(\gamma_{g}+\gamma_{e})\rho_{ge} \\
- \frac{1}{2} (\gamma_{g}+\gamma_{e})\rho_{eg} & 0
\end{pmatrix}
\end{align}$$
Then we have:
$$\begin{align}
L & = \begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{ge} \\
 - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{eg} & -\Gamma \rho_{e^{  }}
\end{pmatrix}
\end{align}$$
We then calculate:
$$\begin{align}
H & = -\mathbf{B}\cdot \mathbf{S} \\
 & =- BS_{z} \\
 & = \begin{pmatrix}
-\mu_{B}B & 0 \\
0 & \mu_{B}B
\end{pmatrix}
\end{align}$$
Then we have:
$$\begin{align}
 - \frac{1}{i\hbar}[\rho,H]+L & = \begin{pmatrix}
\Gamma \rho_{e e} &  - \frac{1}{i\hbar} 2\mu_{B}B\rho_{ge}- \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{ge} \\
- \frac{1}{i\hbar}2\mu_{B}B\rho_{eg}- \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
The initial condition is given by:
$$\ket{+  \hat{\mathbf{x}}} = \frac{\sqrt{ 2 }}{2}\ket{g} + \frac{\sqrt{ 2 }}{2}\ket{e} \implies \rho(t=0)= \begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{pmatrix}$$
Then it's easy to solve:
$$\begin{align}
 & \rho_{e e}(t)=\frac{1}{2} e^{-\Gamma t} \\
 & \rho_{gg}(t)=1- \frac{1}{2}e^{-\Gamma t} \\
 & \rho_{ge}(t)=  \frac{1}{2} \exp\left(  \frac{i}{\hbar}2\mu_{B}B t\right)\exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & \rho_{eg}^{}(t) = \frac{1}{2}\exp\left( - \frac{i}{\hbar}2\mu_{B}Bt  \right)\exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right)
\end{align}$$

Let $\mathbf{B}=(u,v,w)$ be the Bloch vector. Then:
$$\begin{align}
 & \rho_{e e}= \frac{1-w}{2},\  \rho_{ge}= \frac{u-iv}{2} \\
\implies  & u= \cos\left(  \frac{1}{\hbar}2\mu_{B}Bt \right) \exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & v= - \sin\left(  \frac{1}{\hbar}2\mu_{B}Bt \right) \exp\left( - \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})t \right) \\
 & w=1-e^{-\Gamma t}
\end{align}$$
## b)

We have:
$$\begin{align}
u^{2}+v^{2}+w^{2} & = \exp(-(\Gamma+\gamma_{g}+\gamma_{e})t)+(1-e^{-\Gamma t})^{2} \\
 & = \exp(-(\Gamma+\gamma_{g}+\gamma_{e})t)+1- 2e^{-\Gamma t}+e^{-2\Gamma t }
\end{align}$$
The time derivative is given by:
$$\begin{align}
-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+ 2\Gamma e^{-\Gamma t}-2\Gamma e^{-2\Gamma t} & = -(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+2\Gamma e^{-\Gamma t}(1-e^{-\Gamma t}) \\
 & < -(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+2\Gamma e^{-\Gamma t}\text{ for }t>0 \\

\end{align}$$
