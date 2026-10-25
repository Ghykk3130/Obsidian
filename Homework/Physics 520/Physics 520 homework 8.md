# Problem 1
## (a)

Choose $M$ to minimize the free energy. We find the minimum:
$$\begin{align}
 & \frac{\partial F}{\partial M}= 2a_{0}(T-T_{c})M+4bM^{3}-\mu_{0}H=0 \\
\implies & 2a_{0}(T-T_{c})dM+12bM^{2}dM-\mu_{0}dH=0 \\
\implies & \chi=\frac{dM}{dH}= \frac{\mu_{0}}{2a_{0}(T-T_{c})  +12bM^{2}}
\end{align}$$
Since susceptibility is defined for $H\rightarrow 0$, then we set $H=0$ to find the $M$. For $T>T_{c}$, we have:
$$\begin{align}
 & \frac{\partial F}{\partial M}=2a_{0}(T-T_{c})M+4bM^{3}=0
\end{align}$$
It's very obvious that the only root is $M=0$, since $2a_{0}(T-T_{c})+4bM^{2}=0$ has no real solution. It's also obvious that this root is a minimum from the graph. Then:
$$\chi = \frac{\mu_{0}}{2a_{0}(T-T_{c})}$$
## (b)

We have:
$$\begin{align}
 & 2a_{0}(T-T_{c}) M+4bM^{3}-\mu_{0}H=0 \\
\implies & M^{2}= \frac{a_{0}(T_{c}-T)}{2b}+ \frac{\mu_{0}H}{4bM}
\end{align}$$
The constants are:
$$\begin{align}
u= \frac{a_{0}(T_{c}-T)}{2b},\ v= \frac{\mu_{0}}{4b}
\end{align}$$
Observe that for $T=T_{c}$ the curve will pass through the origin. This can be used to determine $T_{c}$. 
![[22eef311cea9111f36efba40847d0b93.jpg|centering|300]]
# Problem 2
## (a)

We have:
$$\begin{align}
\frac{dS_{i}^{l}}{dt} & = \frac{1}{i\hbar}\langle [S_{i}^{l},H]\rangle \\
 & = \frac{1}{i\hbar}\left\langle  \left[ S_{i}^{l}, \sum_{\text{neighboring }j}(-J)\mathbf{S}_{i}\cdot \mathbf{S}_{j} \right]  \right\rangle \\
 & = \frac{1}{i\hbar}\left\langle  \sum_{j}(-J)[S_{i}^{l},S_{i}^{m}] S_{j}^{m} \right\rangle \\
 \\
 & = \frac{1}{i\hbar}\sum_{j}(-J) \langle i\epsilon_{lmn}S_{i}^{n}S_{j}^{m}\rangle \\
 & =  \frac{1}{\hbar} \sum_{j}J\langle  (\mathbf{S}_{i}\times \mathbf{S}_{j})^{l}\rangle
\end{align}$$
Classically, this means:
$$\begin{align}
\hbar \frac{d\mathbf{S}_{i}}{dt}=J\mathbf{S}_{i}\times \sum_{\text{neighboring }j}\mathbf{S}_{j}
\end{align}$$
We then derive the EOM. We have:
$$\begin{align}
\hbar \frac{dS_{i}^{z}}{dt} & = J \left[ \delta S_{i}^{x}\sum_{j}\delta S_{j}^{y}-\delta S_{i}^{y}\sum_{j}\delta S^{x}_{j} \right] \\
 & = 0
\end{align}$$
Then the z component is a constant $S$. Then we compute:
$$\begin{align}
\hbar \frac{dS_{i}^{x}}{dt} & = J\left[ \delta S_{i}^{y}\sum_{j}S_{j}^{z}-S_{i}^{z}\sum_{j}\delta S_{j}^{y} \right] \\
 & = J\sum_{j}(S\delta S_{i}^{y}-S\delta S^{y}_{j})
\end{align}$$
$$\begin{align}
\hbar \frac{dS_{i}^{y} }{dt} & = J\left[ S_{i}^{z}\sum_{j}\delta S_{j}^{x}- \delta S_{i}^{x}\sum_{j}S^{z}_{j} \right] \\
 & = J\sum_{j}(S\delta S^{x}_{j}-S\delta S^{x}_{i})
\end{align}$$
## (b)

We take a cubic lattice as an example. We substitute the solution into the EOM:
$$\begin{align}
 & \hbar i\omega A_{x}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{i}}  = J\sum_{j}(SA_{y}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{i}}-SA_{y}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{j}}) \\
\implies & i\hbar \omega A_{x}= 6JS A_{y}-JSA_{y}\sum_{j}e^{-i\mathbf{k}\cdot(\mathbf{R}_{j}-\mathbf{R}_{i})} \\
\implies & i\hbar \omega A_{x}=6JSA_{y}-2JSA_{y}(\cos k_{x}a+\cos k_{y}a+\cos k_{z}a)
\end{align}$$
Then because of the $i$ in the front, $A_{y}$ is $\frac{\pi}{2}$ ahead of $A_{x}$. Then $S_{i}^{x}$ and $S_{i}^{y}$ are out of phase by $\frac{\pi}{2}$. This means that $(S_{i}^{x},S^{y}_{i})$ is "circularly polarized", rotating in the xy-plane. 

For the other EOM, we have:
$$\begin{align}
 & \hbar i\omega A_{y}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{i}}=J\sum_{j}(SA_{x}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{j}}-SA_{x}e^{i\omega t-i\mathbf{k}\cdot \mathbf{R}_{i}}) \\
\implies & i\hbar \omega A_{y}=JSA_{x}\sum_{j}e^{-i\mathbf{k}\cdot(\mathbf{R}_{j}-\mathbf{R}_{i})}-6JSA_{x} \\
\implies & i\hbar \omega A_{y}=2JSA_{x}(\cos k_{x}a+\cos k_{y}a+\cos k_{z}a) -6JSA_{x}
\end{align}$$
Let $2(\cos k_{x}a+\cos k_{y}a+\cos k_{z}a)=\gamma(\mathbf{k})$. Then we have:
$$\begin{align}
\begin{pmatrix}
i\hbar \omega & JS(\gamma-6) \\
JS(6-\gamma) & i\hbar \omega
\end{pmatrix} \begin{pmatrix}
A_{x} \\
A_{y}
\end{pmatrix}=0
\end{align}$$
Set the determinant to zero, we get:
$$\begin{align}
 & \hbar^{2}\omega^{2}= J^{2}S^{2}(6-\gamma)^{2} \\
\implies & \hbar \omega= JS(6-2[\cos k_{x}a+\cos k_{y}a+\cos k_{z}a])
\end{align}$$
We ignore the negative branch since we assume positive energy.
## (c)

