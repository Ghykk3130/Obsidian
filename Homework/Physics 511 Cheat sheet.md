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
Pictures: $X_{H}=\mathscr{U}^{\dagger}X_{S}\mathscr{U}$, $\frac{dX}{dt}= \frac{1}{i\hbar}[X,H]$. In Heisenberg's picture, the basis kets are transformed by $U^{\dagger}$. So $\ket{\psi}_{H}=U^{\dagger}\ket{\psi}_{S}$
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
$$K(x^{'},t^{'};x,t)= \bra{x^{'}} \mathscr{U}(t^{'},t)\ket{x} =\phantom{.}_{H}\bra{x^{'},t^{'}} x,t^{}\rangle_{H}$$
1-D free space propagator:
$$K(x^{'},t^{'};x,t)= \sqrt{ \frac{m}{2\pi i\hbar(t^{'}-t)} }\exp\left( \frac{im}{2\hbar(t^{'}-t)}(x^{'}-x)^{2} \right)$$3-D free space propagator:
$$\bra{\vec{r}_{k}} \mathscr{U}(t_{k},t_{k-1})\ket{\vec{r}_{k-1}} =\left(  \frac{m}{2\pi \hbar\delta t_{k-1}} \right)^{3/2} e^{-\frac{3}{4}\pi i}\exp\left(  \frac{im}{2\hbar\ \delta t_{k-1}}|\vec{r}_{k}-\vec{r}_{k-1}|^{2} \right) $$
In general:
$$K=\int_{\{ \Gamma \}}\mathscr{D}(\Gamma)\exp\left( \frac{i}{\hbar}S(\Gamma) \right)$$
# 7. Rotation
$J_{x,y,z}$ under $j=\frac{1}{2}$:
$$J_{x}= \frac{\hbar}{2} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix},J_{y}=\frac{\hbar}{2} \begin{pmatrix}
0 & -i \\
i & 0 
\end{pmatrix},J_{z}=\frac{\hbar}{2} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}$$
$J_{x,y,z}$ under $j=1$:
$$J_{x}=\frac{\hbar}{\sqrt{ 2 }}\begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 1 \\
0 & 1 & 0
\end{pmatrix},J_{y}= \frac{\hbar}{\sqrt{ 2 }}\begin{pmatrix}
0 & -i & 0 \\
i & 0 & -i \\
0 & i & 0
\end{pmatrix},J_{z}=\hbar \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -1
\end{pmatrix}$$
Spherical tensor commutation relations: $[J^{}_{\pm },T^{(q)}_{k}]=\hbar \sqrt{ q(q+1)-k(k\pm 1) }T^{(q)}_{k \pm 1},[J^{}_{z},T^{(q)}_{k}]=\hbar k T^{(q)}_{k}$

Transformation rule: $\mathscr{D}T^{(q)}_{k}\mathscr{D}^{\dagger}=\sum_{m^{'}}\mathscr{D}_{k^{'}k}T^{(q)}_{k^{'}}$

Wigner-D matrix:
$$\begin{align}
\bra{j,m} \mathscr{D}(R_{z}(\gamma)R_{y}(\beta)R_{z}(\alpha) )\ket{j,m^{'}}  & =  \exp(-im\gamma-im^{'}\alpha)d_{mm^{'}}
\end{align}$$
Wigner-d matrix:
$$\begin{align}
(d^{(1)})& = \begin{pmatrix}
\frac{1+\cos \theta}{2} & - \frac{\sin \theta}{\sqrt{ 2 }} & \frac{1-\cos \theta}{2} \\
\frac{\sin \theta}{\sqrt{ 2 }} & \cos \theta & - \frac{\sin \theta}{\sqrt{ 2 }} \\
\frac{1-\cos \theta}{ 2} &  \frac{\sin \theta}{\sqrt{ 2 }} & \frac{1+\cos \theta}{2}
\end{pmatrix} \\
 & = \begin{pmatrix}
\cos ^{2} \frac{\theta}{2} & -\sqrt{ 2 }\sin \frac{\theta}{2}\cos \frac{\theta}{2} & \sin ^{2} \frac{\theta}{2} \\
\sqrt{ 2 }\sin \frac{\theta}{2}\cos \frac{\theta}{2} & \cos \theta & -\sqrt{ 2 }\sin \frac{\theta}{2}\cos \frac{\theta}{2} \\
\sin ^{2} \frac{\theta}{2} & \sqrt{ 2 }\sin  \frac{\theta}{2}\cos \frac{\theta}{2} & \cos ^{2} \frac{\theta}{2}
\end{pmatrix}
\end{align}$$
$$\begin{align}
(d^{(1/2)})=\begin{pmatrix}
\cos \frac{\theta}{2} & - \sin \frac{\theta}{2} \\
\sin \frac{\theta}{2} & \cos \frac{\theta}{2}
\end{pmatrix}
\end{align}$$
$$d^{(j)}_{m^{'}m}(\theta)= \sum_{k}(-1)^{k-m+m^{'}} \frac{\sqrt{ (j+m)!(j-m)!(j+m^{'})!(j-m^{'})! }}{(j+m-k)!k!(j-k-m^{'})!(k-m+m^{'})!}\left( \cos \frac{\theta}{2} \right)^{2j-2k+m-m^{'}}\left( \sin \frac{\theta}{2} \right)^{(2k-m+m^{'})}$$
# 8. Central potential
$$\begin{align}
 & \partial_{x}  = \cos \phi \sin \theta \partial_{r}+ \frac{1}{r}\cos \theta \cos \phi \partial_{\theta}- \frac{1}{r}\csc \theta \sin \phi \partial_{\phi} \\
 & \partial_{y}= \sin \theta \sin \phi+ \frac{1}{r} \cos \theta \sin \phi \partial_{\theta}+ \frac{1}{r} \cos \phi \csc \theta \partial_{\phi} \\
 & \partial_{z}= \cos \theta \partial_{r}- \frac{1}{r}\sin \theta \partial_{\theta}
\end{align}$$
$$\begin{align}
 & L_{z}= -i\hbar(x\partial_{y}-y\partial_{x})=-i\hbar \partial_{\phi} \\
 & L_{x}= -i\hbar(y\partial_{z}-z\partial_{y})=i\hbar(\sin \phi \partial_{\theta}+\cot \theta \cos \phi \partial_{\phi}) \\
 & L_{y}=-i\hbar(z\partial_{x}-x\partial_{z})=i\hbar(-\cos \phi \partial_{\theta}+\cot\theta \sin \phi \partial_{\phi})
\end{align}$$
$$\nabla^{2}= \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r^{}} \right)+ \frac{1}{r^{2}\sin \theta} \frac{\partial}{\partial \theta}\left( \sin \theta \frac{\partial}{\partial \theta} \right)+ \frac{1}{r^{2}\sin ^{2} \theta} \frac{\partial^{2}}{\partial \phi^{2}}$$
$$L^{2}= -\hbar^{2}\left[\frac{1}{\sin \theta} \frac{\partial}{\partial \theta}\left( \sin \theta \frac{\partial}{\partial \theta} \right)+ \frac{1}{\sin ^{2}\theta} \frac{\partial^{2}}{\partial \phi^{2}}\right]$$
$$\frac{p^{2}}{2m}=  - \frac{\hbar^{2}}{2m}\nabla^{2}=\frac{1}{2m}\left( p_{r}^{2}+ \frac{L^{2}}{r^{2}} \right)=- \frac{\hbar^{2}}{2m} \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r} \right)+ \frac{L^{2}}{2mr^{2}}$$
# 9. Spherical harmonics
![[Pasted image 20251216201628.png|center|500]]
# 10. Clebsch-Gorden

![[Pasted image 20251216203905.png|center|500]]

$$\sqrt{ j(j+1)-m(m\pm 1) }\bra{m_{1},m_{2}}m\pm 1\rangle= \sqrt{ j_{1}(j_{1}+1)-m_{1}(m_{1}\mp 1) }\bra{m_{1}\mp 1,m_{2}}m\rangle +\sqrt{ j_{2}(j_{2}+1)-m_{2}(m_{2}\mp 1) } \bra{m_{1},m_{2} \mp 1} m \rangle   $$
# 11. Spherical tensor
$$[J\pm,T^{(k)}_{q}]=\hbar \sqrt{ k(k+1)-q(q\pm 1) }T^{(k)}_{q\pm 1},[J_{z},T^{(k)}_{q}]=\hbar q T^{(k)}_{q}$$
$$\mathscr{D}T^{(k)}_{q}\mathscr{D}^{\dagger}=\sum_{q^{'}}\mathscr{D}^{(k)}_{q^{'}q}T^{(k)}_{q^{'}}$$
$$\bra{\alpha,j,m} T^{(k)_{}}_{q}\ket{\alpha^{'},j^{'},m^{'}} = \bra{j^{'},k,m^{'},q}j^{'},k,j,m\rangle \frac{\bra{\alpha,j} |T^{(k)}_{}|\ket{\alpha^{'},j^{'}} }{\sqrt{ 2j+1 }} $$
$$T^{(k)}_{q}= \sum_{q_{1},q_{2}}\bra{k_{1},k_{2},q_{1},q_{2}} k_{1},k_{2},k,q\rangle U^{(k_{1})}_{q_{1}}V^{(k_{2})}_{q_{2}}$$
$$\mathscr{D}^{(k_{1})}_{q_{1}m_{1}}(R)\mathscr{D}_{q_{2}m_{2}}^{(k_{2})}(R)=\sum_{J,\mu,\nu}\bra{k_{1},k_{2},q_{1},q_{2}}k_{1},k_{2}, J,\mu\rangle \bra{k_{1},k_{2},J,\nu} k_{1},k_{2},m_{1},m_{2}\rangle\mathscr{D}_{\mu \nu}^{(J)}(R) $$
$$\bra{\alpha^{'},j,m^{'}} V^{(1)}_{q}\ket{\alpha,j,m} = \frac{\bra{\alpha^{'},j,m} \vec{J}\cdot \vec{V}\ket{\alpha,j,m} }{\hbar^{2}j(j+1)}\bra{\alpha,j,m^{'}} J^{(1)}_{q}\ket{\alpha,j,m}$$
# 12. SHO
$$\psi_{n}(x)=\left( \frac{m\omega}{\pi \hbar} \right)^{1/4} \frac{1}{\sqrt{ 2^nn! }}H_{n}\left(  \sqrt{ \frac{m\omega}{\hbar} }x \right)\exp\left( - \frac{m\omega}{2\hbar}x^{2} \right)$$
$$\begin{align}
 & H_{0}=1 \\
 & H_{1}(\xi)=2\xi \\
 & H_{2}(\xi)=4\xi^{2}-2 \\
 & H_{3}(\xi)=8\xi^{3}-12\xi \\
 & H_{4}(\xi)=16 \xi^4-48 \xi^{2}+12
\end{align}$$
# 13. Hydrogen atom
$$\begin{align}
 & \psi_{n}(r,\theta,\phi )\propto \left( \frac{r}{a_{0}} \right)^l e^{- \frac{r}{na_{0}}}L^{2l+1}_{n-l-1}\left(  \frac{2r}{na_{0}} \right)Y_{l}^m(\theta,\phi) \\
 & L_{0}^1(\rho)=1 \\
 & L_{1}^1(\rho)=2-\rho \\
 & L_{0}^3(\rho)=1 \\
 & L_{2}^1(\rho)= \frac{1}{2}(6-6\rho + \rho^{2})  \\
 & L_{1}^{3}=4-\rho \\
 & L_{0}^5(\rho)=1
\end{align}$$

# Things to be aware of
1. Negative sign in Gaussian integrals
2. Factorial in Taylor expansion
3. The negative sign in expansion of $\cos$
4. Extra one in Taylor expansion