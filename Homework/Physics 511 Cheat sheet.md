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
