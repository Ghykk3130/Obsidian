# 1.
## a)
Let $\mathbf{B}$ align with the z-axis. Then denote $\ket{g}=\ket{+  \hat{\mathbf{z}}},\ \ket{e}=\ket{-  \hat{\mathbf{z}}}$. We have that:
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
 \frac{1}{i\hbar}2\mu_{B}B\rho_{eg}- \frac{1}{2}(\Gamma+\gamma_{g}+\gamma_{e})\rho_{eg} & -\Gamma \rho_{e e}
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
 & <-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+\Gamma e^{-\Gamma t} \\
 & <-(\Gamma+\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}+\Gamma e^{-(\Gamma+\gamma_{g}+\gamma_{e})t} \\
 & = -(\gamma_{g}+\gamma_{e})e^{-(\Gamma+\gamma_{g}+\gamma_{e})t}<0
\end{align}$$
Then the length of the Bloch vector is monotonically decreasing. It's obvious that at $t=0$, $u^{2}+v^{2}+w^{2}=1$. Then the ensemble is impure for $t> 0$.
# 2.
## a.
It's easy to compute that:
$$\begin{align}
  L & =- \frac{1}{2} C^{\dagger}C\rho + \text{h.c.}+ C\rho C^{\dagger} \\
 & = - \frac{1}{2} \begin{pmatrix}
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
Let $E_{e}=h \times 100MHz,\ E_{g}=0$, we have:
$$H= \begin{pmatrix}
E_{g} & 0  \\
 0 & E_{e}
\end{pmatrix}$$
Then:
$$\begin{align}
  \begin{pmatrix}
\dot{\rho}_{gg} & \dot{\rho}_{ge} \\
\dot{\rho}_{eg} & \dot{\rho}_{e e}
\end{pmatrix}= - \frac{1}{i\hbar}[\rho,H]+L & =  \begin{pmatrix}
\Gamma \rho_{e e} & - \frac{1}{2}\Gamma \rho_{ge}- \frac{1}{i\hbar}(E_{e}-E_{g})\rho_{ge} \\
 - \frac{1}{2}\Gamma \rho_{eg}+ \frac{1}{i\hbar}(E_{e}-E_{g})\rho_{eg} & -\Gamma \rho_{e e}
\end{pmatrix}
\end{align}$$
With the initial condition:
$$\rho(t=0)= \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }}
\end{pmatrix}  \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} &  \frac{1}{\sqrt{ 2 }}
\end{pmatrix}= \begin{pmatrix}
\frac{1}{2} & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{2}
\end{pmatrix}$$

Then it's easy to solve:
$$\begin{align}
 & \rho_{e e}(t)=\frac{1}{2}e^{-\Gamma t}= \frac{1}{2}e^{- 2\pi \times  10^{7}t},\ \rho_{gg}=1- \frac{1}{2}e^{-\Gamma t}=1- \frac{1}{2}e^{-2\pi  \times 10^{7}t} \\
 & \rho_{ge}(t)= \frac{1}{2}\exp\left( \frac{i}{\hbar}(E_{e}-E_{g})t \right)e^{- \frac{\Gamma}{2}t}= \frac{1}{2}\exp(i 2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t},\ \rho_{eg}(t)= \frac{1}{2}\exp(-i 2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}
\end{align}$$
## b.
We have:
$$\begin{align}
d\rho & = \begin{pmatrix}
0 & \rho ^{*} \\
\rho & 0
\end{pmatrix} \begin{pmatrix}
\rho_{gg} & \rho_{ge} \\
\rho_{eg} & \rho_{e e}
\end{pmatrix}= \begin{pmatrix}
d^{*}\rho_{eg} & d^{*}\rho_{e e} \\
d\rho_{gg} & d\rho_{ge}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
Tr(d\rho) & = d^{*}\rho_{eg}+d\rho_{ge} \\
 & = 2\mathrm{Re}(d\rho_{ge}) \\
 & = 2(\mathrm{Re}(d)\mathrm{Re}(\rho_{ge})-\mathrm{Im}(d)\mathrm{Im}(\rho_{ge})) \\
 & = \mathrm{Re}(d)\cos(2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}- \mathrm{Im}(d) \sin (2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}
\end{align}$$
Therefore:
$$\begin{align}
E & = sTr(d\rho)  \\
 & = s\mathrm{Re}(d)\cos(2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}- s\mathrm{Im}(d) \sin (2\pi \times 10^{8}t)e^{-\pi \times 10^{7}t}
\end{align}$$
 


