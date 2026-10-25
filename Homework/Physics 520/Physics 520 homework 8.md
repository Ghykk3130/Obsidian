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

We find the heat capacity under low temperatures. For $T\rightarrow 0$, only low wavelength excitations exist. We can expand:
$$\begin{align}
\hbar \omega & \approx JS\left( 6-2\left( 1- \frac{k_{x}^{2}a^{2}}{2}+1- \frac{k_{y}^{2}a^{2}}{2}+1- \frac{k_{z}^{2}a^{2}}{2} \right) \right) \\
 & = A+B k^{2}
\end{align}$$
where $A,B$ are some constants. Then the dispersion is free-fermi-gas-like. Then clearly $\rho(\omega)\propto \sqrt{ \omega }$. Since spin waves are bosonic, we have:
$$\begin{align}
U & = \int d\omega \rho(\omega) \frac{\hbar \omega}{e^{\beta\hbar \omega}-1} \\
 & \propto \int d\omega \frac{\omega^{3/2}}{e^{\beta \hbar \omega}-1} \\
 & \propto \frac{1}{\beta^{5 /2}}\propto T^{5 /2}
\end{align}$$
Then:
$$\begin{align}
C & = \frac{\partial U}{\partial T}\propto T^{3 /2}
\end{align}$$
## (d)

We know that for each magnon we excite, the angular momentum decreases by $\hbar$. Then $M(0)-M(T)\propto\text{number of magnons}$. Then we have:
$$\begin{align}
   \frac{M(0)-M(T)}{M(0)} & \propto \int d\omega \rho(\omega) \frac{1}{e^{\beta \hbar \omega}-1} \\
 & \propto \int d\omega \sqrt{ \omega } \frac{1}{e^{\beta \hbar \omega}-1}\text{, for }T\rightarrow 0 \\
 & \propto \frac{1}{\beta^{3 /2}}\propto T^{3 /2}
\end{align}$$
## (e)

For part (a), the derivation is the same. The only difference is that $J$ should be negative. 

For part (b), we can assume sublattices $A, B$, and $S^{z}_{A,i}=S,\ S^{z}_{B,i}=-S$. Then it's easy to obtain:
$$\begin{align}
\hbar \frac{dS^{x}_{A,i}}{dt} & =J\sum_{j}(\delta S^{y}_{A,i}S^{z}_{B,j}-S^{z}_{A,i}\delta S^{y}_{B,j}) \\
 & = \sum_{j}J(\delta S^{y}_{A,i}(-S)-S\delta S^{y}_{B,j}) \\
 & = -JS \sum_{j}(\delta S^{y}_{A,i}+\delta S^{y}_{B,j})
\end{align}$$
Similarly, we can obtain:
$$\begin{align}
\hbar \frac{dS^{y}_{A,i}}{dt} & = J\sum_{j}(S^{z}_{A,i}\delta S^{x}_{B,j}-\delta S^{x}_{A,i}S^{z}_{B,j}) \\
 & = JS\sum_{j}(\delta S^{x}_{B,j}+\delta S^{x}_{A,i})
\end{align}$$
We multiply the second equation by $i$ and add it to the first equation:
$$\begin{align}
\hbar \frac{dS^{+}_{A,i}}{dt} & = -JS \sum_{j}(\delta S^{y}_{B,j}-i\delta S^{x}_{B,j}+\delta S^{y}_{A,i}-i\delta S^{x}_{A,i}) \\
 & = iJS\sum_{j}(S^{+}_{B,j}+S^{+}_{A,i})
\end{align}$$
For B, we can obtain similar equations:
$$\begin{align}
 & \hbar \frac{dS^{x}_{B,i}}{dt}= JS\sum_{j} (\delta S^{y}_{B,i}+\delta S^{y}_{A,j}) \\
 & \hbar \frac{dS^{y}_{B,i}}{dt}= -JS\sum_{j}(\delta S^{x}_{A,j}+\delta S^{x}_{B,i}) \\
\implies & \hbar \frac{dS^{+}_{B,i}}{dt}=-iJS \sum_{j}(S^{+}_{A,j}+S^{+}_{B,i})
\end{align}$$
We assume $S^{+}_{A,i}=A e^{i\omega t-\mathbf{k}\cdot \mathbf{r}},\ S^{+}_{B,i}=Be^{i\omega t-\mathbf{k}\cdot \mathbf{r}}$. Then:
$$\begin{align}
 & \hbar i\omega A= iJS\sum_{j}(Be^{-i\mathbf{k}\cdot(\mathbf{R}_{i}-\mathbf{R}_{j})} +A)= 6iJSA+iJSB\gamma \\
 & \hbar i\omega B=-iJS\sum_{j}(Ae^{-i\mathbf{k}\cdot(\mathbf{R}_{i}-\mathbf{R}_{j})}+B)=-6iJSB-iJS\gamma A
\end{align}$$
Then:
$$\begin{align}
\begin{pmatrix}
6iJS-i\hbar \omega & iJS\gamma \\
iJS\gamma & i\hbar \omega+6iJS
\end{pmatrix} \begin{pmatrix}
A \\
B
\end{pmatrix}=0
\end{align}$$
We set the determinant to zero to obtain:
$$\begin{align}
 & (6JS-\hbar \omega)(6JS+\hbar \omega)=J^{2}S^{2}\gamma^{2} \\
\implies & \hbar \omega= JS\sqrt{ 36-\gamma^{2} }=2JS\sqrt{ 9-(\cos k_{x}a+\cos k_{y}a+\cos k_{z}a)^{2} }
\end{align}$$
Then under long wavelength limit, we have:
$$\begin{align}
9-(\cos k_{x}a+\cos k_{y}a+\cos k_{z}a )^{2} & \approx 9-\left( 3- \frac{k_{x}^{2}a^{2}}{2}- \frac{k_{y}^{2}a^{2}}{2}- \frac{k_{z}^{2}a^{2}}{2} \right)^{2} \\
 & \approx 9-(9-3 k_{x}^{2}a^{2}-3k_{y}^{2}a^{2}-3k_{z}^{2}a^{2}) \\
 & \propto k^{2}
\end{align}$$
Therefore:
$$\begin{align}
\hbar \omega \propto k
\end{align}$$
Then:
$$\begin{align}
\rho(\omega)= \frac{4\pi k^{2} }{(2\pi /L)^{3}}\propto \omega^{2}
\end{align}$$
Then we have:
$$\begin{align}
U & = \int d\omega \rho(\omega) \frac{\hbar \omega}{e^{\beta \hbar \omega}-1} \\
 & \propto \int d\omega \frac{\omega^{3}}{e^{\beta \hbar \omega}-1} \\
 & \propto \frac{1}{\beta^{4}}\propto T^{4}
\end{align}$$
Then:
$$\begin{align}
C & = \frac{\partial U}{\partial T}\propto T^{3}
\end{align}$$



