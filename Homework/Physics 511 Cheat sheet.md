# 1. Relating momentum and position spaces

**Given $\bra{x}\psi\rangle$, want $\bra{p}\psi\rangle$:**

$$\begin{align}
\bra{p} \psi\rangle & =\int dx \bra{p} x\rangle \bra{x} \psi\rangle
\end{align}$$
What's $\bra{p}x\rangle$?

$$\begin{align}
 & p\ket{p} =p\ket{p}  \\
\implies  & \bra{x} p\ket{p} = p \bra{x} p\rangle \\
\implies & - i\hbar \frac{\partial}{\partial x} \bra{x} p\rangle=p \bra{x} p\rangle \\
\implies &  \bra{x} p\rangle=A e^{\frac{i}{\hbar}px}
\end{align}$$
Delta normalization:
$$\begin{align}
 & \bra{p^{'}} p\rangle=\delta(p-p^{'}) \\
\implies & \int dx |A |^{2} e^{- \frac{i}{\hbar}p^{'}x}e^{ \frac{i}{\hbar}px}=\delta(p-p^{'}) \\
\implies & |A|^{2} 2\pi\delta\left(  \frac{p-p^{'}}{\hbar} \right)=\delta(p-p^{'}) \\
\implies & |A|^{2}2\pi \hbar\delta(p-p^{'})=\delta(p-p^{'}) \\
\implies & A= \frac{1}{\sqrt{ 2\pi \hbar }}
\end{align} $$
Then:
$$\bra{p} \psi\rangle= \int dx \frac{1}{\sqrt{ 2\pi \hbar }}e^{ -\frac{i}{\bar{h}}px} \bra{x} \psi\rangle$$
# 2. Integrating $\delta$
Know that:
$$\hat{\delta}(k)= \frac{1}{2\pi}\int dx\delta(x)e^{-ikx}= \frac{1}{2\pi}$$
Then:
$$\delta(x)= \int dk \hat{\delta}(k)e^{ikx}= \frac{1}{2\pi}\int dke^{ikx} $$
So:
$$\int dk e^{ikx}=2\pi\delta(x)$$
# 3. Some formulas
$$e^ABe^{-A}=B+ [A,B]+ \frac{1}{2!}[A,[A,B]]+\dots$$
$$e^Ae^B=\exp\left( A+B+ \frac{1}{2}[A,B]+ \frac{1}{12}[A,[A,B]]+ \frac{1}{12}[B,[B,A]]+\dots \right)$$
We do not have $(XY)^a=X^aY^a\text{ if }[X,Y]\neq 0$. Because we are doing: $(XY)^a=XYXY\dots$.

Bohr's magnon: $\frac{e}{2m}$. Usually: $\vec{\mu}=g \frac{e}{2m}\vec{S}$

Time evolution: $i\hbar \frac{\partial}{\partial t}\mathscr{U}=H\mathscr{U}\implies\mathscr{U}=\exp\left( - \frac{i}{\hbar}Ht \right)$

Two ways to deal with time evolution: 1) Use energy eigenkets to expand 2) Taylor expand the time evolution operator. 

Uncertainty: $\sigma_{A}\sigma_{B}\geq \frac{1}{2}|\langle[A,B]\rangle|$

Translation: $\mathscr{T}= \exp\left( - \frac{i}{\hbar}px \right)$

SHO: 
- $$a= \sqrt{ \frac{m\omega}{2\hbar} }\left( x+ \frac{ip}{m\omega} \right)$$
- $$a\ket{n} =\sqrt{ n }\ket{n-1},a^{\dagger}\ket{n} =\sqrt{ n+1 }\ket{n+1} ,[a,a^{\dagger}]=1 $$
Pictures: $X_{H}=\mathscr{U}^{\dagger}X_{S}\mathscr{U}$, $\frac{dX}{dt}= \frac{1}{i\hbar}[X,H]$
# 4. Diagonalization
$$\begin{align}
\langle{ e_{i} }|T|e_{j}\rangle & =\langle e_{i} |T|v_{k}\rangle\langle v_{k}|e_{j}\rangle \\
 & =\lambda_{k}\langle e_{i} |v_{k}\rangle\langle v_{k}|e_{j}\rangle \\
 & =\lambda_{k}\langle e_{i}|v_{l}\rangle\langle v_{l}|v_{k}\rangle\langle v_{k}|e_{j}\rangle \\
 & =\lambda_{k}\langle e_{i}|v_{l} \rangle \delta_{lk} \langle v_{k}|e_{j}\rangle \\
\end{align}$$
# 5. WKB
$$\oint d\vec{q}\cdot \vec{p}=2\pi \hbar(n+\gamma),\text{ for some }\gamma\in \mathbb{R}$$
For WKB we have:
$$\int_{x_{1}}^{x_{2}}\sqrt{ 2m(E-V) }dx=\pi \hbar\left( n+ \frac{1}{2} \right)$$
<div style="text-align:center">
<img src="Pasted image 20251029200725.png", width="400">
</div>

$$\begin{align}
 & \text{transition around }x_{1}: \frac{1}{(V-E)^{1/4}}\exp\left(  -\frac{1}{\hbar}\int_{x_{}}^{x_{1}}dx^{'}\sqrt{ 2m(V-E) }  \right) \rightarrow \frac{2}{(E-V)^{1/4}}\cos\left(  \frac{1}{\hbar}\int_{x_{1}}^{x}dx^{'}\sqrt{ 2m(E-V) } - \frac{\pi}{4}\right) \\
 & \text{transition around }x_{2}: \frac{2}{(E-V)^{1/4}}\cos\left(  \frac{1}{\hbar}\int_{x_{2}}^{x_{}}dx^{'}\sqrt{ 2m(E-V) } + \frac{\pi}{4}\right)\rightarrow \frac{1}{(V-E)^{1/4}}\exp\left( - \frac{1}{\hbar}\int_{x_{2}}^{x}dx^{'}\sqrt{ 2m(V-E) } \right)
\end{align}$$
WKB solution:
Write Schrodinger's equation as:
$$\frac{d^{2}}{dx^{2}}\psi+k^{2}(x)\psi=0$$

$$\psi_{\pm}= \frac{C_{\pm}}{\sqrt{ k(x) }}\exp\left( \pm i \int^xdx^{'}k(x^{'}) \right)$$
Linear solution:
Write the Schrodinger's equation as:
$$\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0,\xi=\left( - \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x_{0}-x)$$
$$\psi=Ai(\xi)\rightarrow \left\{\begin{align}
 & \frac{1}{2\sqrt{ \pi }}\xi^{-1/4}\exp\left( - \frac{2}{3}\xi^{3/2} \right),\xi\rightarrow \infty \\
 & \frac{1}{\sqrt{ \pi }}|\xi |^{-1/4}\cos\left(  \frac{2}{3}|z|^{3/2}- \frac{\pi}{4} \right),\xi\rightarrow-\infty
\end{align}\right.$$
# 6. Propagator
$$K(x^{'},t^{'};x,t)= \bra{x^{'}} \mathscr{U}(t^{'},t)\ket{x} $$
1-D free space propagator:
$$K(x^{'},t^{'};x,t)= \sqrt{ \frac{m}{2\pi i\hbar(t^{'}-t)} }\exp\left( \frac{im}{2\hbar(t^{'}-t)}(x^{'}-x)^{2} \right)$$3-D free space propagator:
$$\bra{\vec{r}_{k}} \mathscr{U}(t_{k},t_{k-1})\ket{\vec{r}_{k-1}} =\left(  \frac{m}{2\pi \hbar\delta t_{k-1}} \right)^{3/2} e^{-\frac{3}{4}\pi i}\exp\left(  \frac{im}{2\hbar\ \delta t_{k-1}}|\vec{r}_{k}-\vec{r}_{k-1}|^{2} \right) $$
