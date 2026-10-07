# Problem 1

We have:
$$\begin{align}
\mathbf{P} & = - \int  \frac{d^{3}x d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \left( - \frac{i}{2} \right)\sqrt{  \frac{E_{\mathbf{p}}}{E_{\mathbf{p}^{'}}} }(a_{\mathbf{p}}e^{-ip\cdot x}-a^{\dagger}_{\mathbf{p}}e^{ip\cdot x})\nabla(a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}+ a^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = \frac{i}{2} \int \frac{d^{3}p}{(2\pi)^{3}}(a_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip_{}^{0}t }(-i\mathbf{p})+ a_{\mathbf{p}}a^{\dagger}_{\mathbf{p}}(-i\mathbf{p})+a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}(-i\mathbf{p})-a^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}(-i\mathbf{p})) \\
 & = \frac{1}{2}\int \frac{d^{3}p}{(2\pi)^{3}}(a_{\mathbf{p}}a_{\mathbf{p}}^{\dagger}+a_{\mathbf{p}}^{\dagger}a_{\mathbf{p}})\mathbf{p} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3} }\mathbf{p}a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}
\end{align}$$
The integrals of $a_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}(-i\mathbf{p}),\ a^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}(-i\mathbf{p})$ vanish because they are odd functions of $\mathbf{p}$. And in the las line, we used normal ordering, and simply ignored the vacuum energy. 
# Problem 2

We have:
$$\begin{align}
Q & = \int d^{3}x \psi ^{\dagger}(x)\psi(x) \\
 & = \int \frac{d^{3}xd^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{2\sqrt{ E_{\mathbf{p}}E_{\mathbf{p}^{'}} }} \sum_{s,r}(a^{s\dagger}_{\mathbf{p}}u^{s\dagger}(p)e^{ip\cdot x}+b^{s}_{\mathbf{p}}v^{s\dagger}(p)e^{-ip\cdot x})(a^{r}_{\mathbf{p}^{'}}u^{r}(p^{'})e^{-ip^{'}\cdot x}+b^{r\dagger}_{\mathbf{p}^{'}}v^{r}(p^{'})e^{ip^{'}\cdot x}) \\
 & = \sum_{r,s}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(a^{s\dagger}_{\mathbf{p}}a^{r}_{\mathbf{p}^{'}}u^{s\dagger}(p) u^{r}(p)+a^{s \dagger}_{\mathbf{p}}b^{r \dagger}_{-\mathbf{p}}u^{s\dagger}(p) v^{r}(-p)e^{2ip^{0}t}+ b^{s}_{\mathbf{p}}a^{r}_{-\mathbf{p}}v^{s\dagger}(p)u^{r}(-p)e^{-2ip^{0}t}+b^{s}_{\mathbf{p}}b^{r\dagger}_{\mathbf{p}}v^{s\dagger}(p)v^{s}(p)) \\
 & = \sum_{r,s}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(a^{s\dagger}_{\mathbf{p}}a^{r}_{\mathbf{p}^{}}u^{s\dagger}(p) u^{r}(p)+ b^{s}_{\mathbf{p}}b^{r\dagger}_{\mathbf{p}}v^{s\dagger}(p)v^{s}(p)) \\ & = \sum_{s}\int \frac{d^{3}p}{(2\pi)^{3}}(a^{s\dagger}_{\mathbf{p}}a^{s}_{\mathbf{p}}+ b^{s}_{\mathbf{p}}b^{s\dagger}_{\mathbf{p}}) \\
 & = \sum_{s}\int \frac{d^{3}p}{(2\pi)^{3}}(a^{s\dagger}_{\mathbf{p}}a^{s}_{\mathbf{p}}-b^{s}_{\mathbf{p}}b^{s\dagger}_{\mathbf{p}})
\end{align}$$
In the last line we ignored the vacuum energy, and adopt the normal ordering. Note that for anti-commutators, normal ordering pull out a minus sign, since $\{ b^{s}_{\mathbf{p}},b^{s\dagger}_{\mathbf{q}} \}=\delta(\mathbf{p}-\mathbf{q})\implies b^{s}_{\mathbf{p}}b^{s\dagger}_{\mathbf{q}}=\delta(\mathbf{p}-\mathbf{q})-b^{s\dagger}_{\mathbf{q}}b^{s}_{\mathbf{p}}$.
# Problem 3
## (a)

We have:
$$\begin{align}
\{ \gamma^{\mu},\gamma^{\nu} \} & = \gamma^{\mu}\gamma^{\nu}+\gamma^{\nu}\gamma^{\mu} \\
 & = U \gamma^{\mu}_{W}U^{\dagger}U\gamma^{\nu}_{W}U^{\dagger}+ U \gamma^{\nu}_{W}U^{\dagger}U\gamma^{\mu}_{W}U^{\dagger} \\
 & = U\{ \gamma^{\mu}_{W},\gamma^{\nu}_{W} \}U^{\dagger} \\
 & = 2Ug^{\mu \nu}U^{\dagger} \\
 & = 2g^{\mu \nu}
\end{align}$$
Then $\gamma^{\mu}$ still satisfies the Dirac algebra.
## (b)

Observe that:
$$\begin{align}
U_{D}^{\dagger}U_{D} & = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & -1 \\
1 & 1
\end{pmatrix} \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
-1 & 1
\end{pmatrix} \\
 & = \frac{1}{2}\begin{pmatrix}
2 & 0 \\
0 & 2
\end{pmatrix} \\
 & = 1
\end{align}$$
Then $U_{D}$ is unitary.

Next we compute:
$$\begin{align}
\gamma^{0} & = U_{D}\gamma^{\mu}_{W}U_{D}^{\dagger} \\
 & = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
-1 & 1
\end{pmatrix} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & -1 \\
1 & 1
\end{pmatrix} \\
 & = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}
\end{align}$$
$$\begin{align}
\gamma^{i} & = U_{D}\gamma^{\mu}_{W}U^{\dagger}_{D} \\
 & = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
-1 & 1
\end{pmatrix} \begin{pmatrix}
0 & \sigma^{i} \\
-\sigma^{i} & 0
\end{pmatrix} \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & -1 \\
1 & 1
\end{pmatrix} \\
 & = \frac{1}{2}\begin{pmatrix}
1 & 1 \\
-1 & 1
\end{pmatrix} \begin{pmatrix}
\sigma^{i} & \sigma^{i} \\
-\sigma^{i} & \sigma^{i}
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & \sigma^{i} \\
-\sigma^{i} & 0
\end{pmatrix} \\
 & = \gamma^{i}_{W}
\end{align}$$
## (c)

We have:
$$\begin{align}
 & (i\gamma^{\mu}\partial_{\mu}-m)\psi(x)=0 \\
\implies & (\gamma^{\mu}p_{\mu}-m)u_{D}(p)=0
\end{align}$$
We compute:
$$\begin{align}
\gamma^{\mu}p_{\mu} & = \gamma^{0}p^{0}-\gamma^{i}p^{i} \\
 & = \begin{pmatrix}
p^{0} & -\sigma^{i}p^{i} \\
\sigma^{i}p^{i} & -p^{0}
\end{pmatrix} \\
 & = \begin{pmatrix}
p^{0} & -\boldsymbol{\sigma}\cdot \mathbf{p} \\
\boldsymbol{\sigma}\cdot \mathbf{p} & -p^{0}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
\gamma^{\mu}p_{\mu}\begin{pmatrix}
(E_{\mathbf{p}}+m)\xi \\
\boldsymbol{\sigma}\cdot \mathbf{p}\xi
\end{pmatrix} & = \begin{pmatrix}
E_{\mathbf{p}}(E_{\mathbf{p}}+m)\xi-(\mathbf{p}\cdot \boldsymbol{\sigma}^{})^{2}\xi \\
\mathbf{p}\cdot \boldsymbol{\sigma}(E_{\mathbf{p}}+m)\xi - E_{\mathbf{p}}\boldsymbol{\sigma}\cdot \mathbf{p}\xi
\end{pmatrix}
\end{align}$$
It's easy to show that $(\mathbf{a}\cdot \boldsymbol{\sigma})(\mathbf{b}\cdot \sigma)=\mathbf{a}\cdot \mathbf{b}+i\boldsymbol{\sigma}\cdot(\mathbf{a}\times \mathbf{b})$:
$$\begin{align}
(\boldsymbol{\sigma}\cdot \mathbf{a})(\boldsymbol{\sigma}\cdot \mathbf{b}) & = \begin{pmatrix}
a^{3} & a^{1}-ia^{2} \\
a^{1}+ia^{2} & -a^{3}
\end{pmatrix} \begin{pmatrix}
b^{3} & b^{1}-ib^{2} \\
b^{1}+ib^{2} & -b^{3}
\end{pmatrix} \\
 & = \begin{pmatrix}
a^{1}b^{1}+a^{2}b^{2}+a^{3}b^{3}+i(a^{1}b^{2}-a^{2}b^{1}) & a^{3}b^{1}-b^{3}a^{1}+i(a^{2}b^{3}-a^{3}b^{2}) \\
a^{3}b^{1}-b^{3}a^{1}-i(a^{2}b^{3}-a^{3}b^{2})  & a^{1}b^{1}+a^{2}b^{2}+a^{3}b^{3}+i(a^{2}b^{1}-b^{2}a^{1})
\end{pmatrix} \\
 & = \begin{pmatrix}
\mathbf{a}\cdot \mathbf{b}+i(\mathbf{a}\times \mathbf{b})^{3} & (\mathbf{a}\times \mathbf{b})^{2}+i(\mathbf{a}\times \mathbf{b})^{1} \\
-(\mathbf{a}\times \mathbf{b})^{2}+i(\mathbf{a}\times \mathbf{b})^{1} & \mathbf{a}\cdot \mathbf{b}-i(\mathbf{a}\times \mathbf{b})^{3}
\end{pmatrix} \\ & = \mathbf{a}\cdot \mathbf{b}+i[(\mathbf{a}\times \mathbf{b})^{1}\sigma^{1}+(\mathbf{a}\times \mathbf{b})^{2}\sigma^{2}+(\mathbf{a}\times \mathbf{b})^{3}\sigma^{3}] \\
 & = \mathbf{a}\cdot \mathbf{b}+i  \hat{\sigma} \cdot(\mathbf{a}\times \mathbf{b})
\end{align}$$
Then $(\boldsymbol{\sigma}\cdot \mathbf{p})^{2}=|\mathbf{p}|^{2}$. Then we have:
$$\begin{align}
\gamma^{\mu}p_{\mu}\begin{pmatrix}
(E_{\mathbf{p}}+m)\xi \\
\boldsymbol{\sigma}\cdot \mathbf{p}
\end{pmatrix} & = \begin{pmatrix}
(m^{2}+E_{\mathbf{p}}m)\xi \\
\mathbf{p}\cdot \boldsymbol{\sigma}m \xi
\end{pmatrix}
\end{align}$$
So we have:
$$\begin{align}
(\gamma^{\mu}p_{\mu}-m)\begin{pmatrix}
(E_{\mathbf{p}}+m)\xi \\
\boldsymbol{\sigma}\cdot \mathbf{p}
\end{pmatrix} & = 0
\end{align}$$
Then $\psi(x)$ is indeed a solution.
## (d)

We compute:
$$\begin{align}
\bar{u}_{D}(p)u_{D}(p) & = \frac{1}{E_{\mathbf{p}}+m} \begin{pmatrix}
(E_{\mathbf{p}}+m)\xi ^{\dagger} & (\boldsymbol{\sigma}\cdot \mathbf{p})^{\dagger}\xi ^{\dagger}
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \begin{pmatrix}
(E_{\mathbf{p}}+m)\xi \\
\boldsymbol{\sigma}\cdot \mathbf{p} \xi
\end{pmatrix} \\
 & = \frac{1}{E_{\mathbf{p}}+m} \begin{pmatrix}
(E_{\mathbf{p}}+m)\xi ^{\dagger} & (\boldsymbol{\sigma}\cdot \mathbf{p})\xi ^{\dagger}
\end{pmatrix}\begin{pmatrix}
(E_{\mathbf{p}}+m)\xi \\
-\boldsymbol{\sigma}\cdot \mathbf{p} \xi
\end{pmatrix} \\
 & = \frac{1}{E_{\mathbf{P}}+m}((E_{\mathbf{p}}+m)^{2}-(\boldsymbol{\sigma}\cdot \mathbf{p})^{2}) \\
 & = \frac{1}{E_{\mathbf{p}}+m}(E_{\mathbf{p}}^{2}+2mE_{\mathbf{p}}+m^{2}-|\mathbf{p}|^{2}) \\
 & = \frac{1}{E_{\mathbf{p}}+m}(2mE_{\mathbf{p}}+2m^{2}) \\
 & = 2m
\end{align}$$
Then in the Dirac representation, $u$ is correctly normalized.
# Problem 4
## (a)

In the vector representation, since $\mathcal{J}^{\mu \nu}$ is anti-symmetric, we have:
$$\begin{align}
- \frac{i}{2}\sum_{\mu,\nu}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} & = -i \sum_{\nu\geq \mu} \omega_{\mu \nu}\mathcal{J}^{\mu \nu}
\end{align}$$
If the only nonvanishing parameter is $\omega_{03}=\eta$, we have:
$$\begin{align}
- \frac{i}{2}\sum_{\mu,\nu}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} & = -i \eta \mathcal{J}^{03} \\
 & = -i \eta \cdot i \begin{pmatrix}
0 &  &  & 1 \\
 & 0 &  &  \\
 &  & 0 &  \\
1 &  &  & 0
\end{pmatrix} \\
 & = \eta \begin{pmatrix}
0 &  &  & 1 \\
 & 0 &  &  \\
 &  & 0 &  \\
1 &  &  & 0
\end{pmatrix}
\end{align}$$
For odd powers of this matrix, we get:
$$\begin{align}
\eta^{n} \begin{pmatrix}
0 &  &  & 1 \\
 & 0 &  &  \\
 &  & 0 &  \\
1 &  &  & 0
\end{pmatrix},\ n\text{ is odd}
\end{align}$$
For even powers of this matrix, we get: 
$$\begin{align}
\eta^{n}\begin{pmatrix}
1 &  &   \\
 & 0 &  &  \\
 &  & 0 &  \\
 &  &  & 1
\end{pmatrix},\ n\text{ is even, }n\neq 0
\end{align}$$
For $n=0$, we just get $1$. Then:
$$\begin{align}
\exp\left( - \frac{i}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right) & = \sum_{n\text{ odd}} \frac{\eta^{n}}{n!} \begin{pmatrix}
0 &  &  & 1 \\
 & 0 &  &  \\
 &  & 0 &  \\
1 &  &  & 0
\end{pmatrix}+ \sum_{n\text{ even}} \frac{\eta^{n}}{n!} \begin{pmatrix}
1 &  &   \\
 & 0 &  &  \\
 &  & 0 &  \\
 &  &  & 1
\end{pmatrix} +1 \\
 & = \begin{pmatrix}
\cosh \eta &  &  & \sinh \eta \\
 & 1 &  &  \\
 &  & 1 &  \\
\sinh \eta &  &  & \cosh \eta
\end{pmatrix}
\end{align}$$
In the spinor representation, we have:
$$\begin{align}
S^{03} & = \frac{i}{4}[\gamma^{0},\gamma^{3}] \\
 & = \frac{i}{2}\begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
- \frac{i}{2}\omega_{\mu \nu}  S^{\mu \nu} & =- \frac{\eta}{2}\begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3}
\end{pmatrix}
\end{align}$$
Similarly, for odd powers, we have:
$$\begin{align}
\begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3}
\end{pmatrix}^{n}= \begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3}
\end{pmatrix} 
\end{align}$$
For even powers, we just get $1$. Then:
$$\begin{align}
\exp\left( - \frac{i}{2}\omega_{\mu\nu}S^{\mu \nu} \right) & =\sum_{n\text{ odd}}\left( - \frac{\eta}{2} \right)^{n} \frac{1}{n!} \begin{pmatrix}
\sigma^{3} & 0 \\
0 & -\sigma^{3}
\end{pmatrix}+ \sum_{n\text{ even}} \left( - \frac{\eta}{2} \right)^{n} \frac{1}{n!} \\
 & = \begin{pmatrix}
\sinh\left( - \frac{\eta}{2} 
 \right)\sigma^{3}& 0 \\ \\
 0 & - \sinh\left( - \frac{\eta}{2} \right)\sigma^{3}
\end{pmatrix}+ \cosh\left(  \frac{\eta}{2} \right) \\
 & = \begin{pmatrix}
-\sinh \frac{\eta}{2} \sigma^{3}+ \cosh \frac{\eta}{2} & 0 \\
0 & \sinh \frac{\eta}{2}\sigma^{3}+\cosh \frac{\eta}{2}
\end{pmatrix}
\end{align}$$
## (b)

No. Dirac spinors does not have any invariant components, since it's all the components have to be transformed by some linear combination of $\sinh \frac{\eta}{2}$ and $\cosh \frac{\eta}{2}$.
## (c)

Here I just notices that the problem said the detailed derivation is not needed. Since I already derive part (a), I'll leave it there. For part (c), the derivation is very similar, and I can write down the results directly:

For the vector representation, we have:
$$\begin{align}
\exp\left( - \frac{i}{2}\omega_{\mu \nu}\mathcal{J}^{\mu \nu} \right) & = \begin{pmatrix}
1 &  &  &  \\
 & \cos \theta & -\sin \theta &  \\
 & \sin \theta & \cos \theta &  \\
 &  &  & 1
\end{pmatrix}
\end{align}$$
For the spinor representation, we have:
$$\begin{align}
\exp\left( - \frac{i}{2}\omega_{\mu \nu}S^{\mu \nu} \right) & = \begin{pmatrix}
e^{- i \theta /2} &  &  &  \\
 & e^{i\theta /2} &  &  \\
 &  & e^{-i\theta /2} &  \\
 &  &  & e^{i\theta /2}
\end{pmatrix}
\end{align}$$
## (d)

Note that $\cos \theta,\ \sin \theta$ are both functions that are periodic in $2\pi$. So in vector representation, rotating $\theta=2\pi$ just gets back to itself.

But in the spinor representation, the matrix is not periodic in $2\pi$. Rotating $2\pi$ just gives you a minus sign in the front.
# Problem 5
## (a)

We have:
$$\begin{align}
(e^{i\alpha \gamma^{5}}\psi)^{\dagger} & = \psi ^{\dagger}(e^{i\alpha \gamma^{5}})^{\dagger} \\
 & = \psi ^{\dagger}e^{-i\alpha(\gamma^{5})^{\dagger}} \\
 & = \psi ^{\dagger}e^{-i\alpha \gamma^{5}}
\end{align}$$
In the last homework, we showed that:
$$\{ \gamma^{5},\gamma^{\mu} \}=0$$
Then:
$$\begin{align}
 & \gamma^{5}\gamma^{0}=-\gamma^{0}\gamma^{5} \\
\implies & \gamma^{0}\gamma^{5}\gamma^{0}=-\gamma^{5}
\end{align}$$
Then:
$$\begin{align}
(e^{i\alpha \gamma^{5}}\psi)^{\dagger}\gamma^{0} & = \psi ^{\dagger}e^{-i\alpha \gamma^{5}}\gamma^{0} \\
 & = \psi ^{\dagger}\gamma^{0}\gamma^{0}e^{-i\alpha \gamma^{5}}\gamma^{0} \\
 & = \bar{\psi} e^{i\alpha \gamma^{5}}
\end{align}$$
Then we have:
$$\begin{align}
\bar{\psi} \rightarrow \bar{\psi}e^{i\alpha \gamma^{5}}
\end{align}$$
## (b)

We have:
$$\begin{align}
 & \gamma^{5}\gamma^{\mu}=-\gamma^{\mu}\gamma^{5} \\

\end{align}$$
For even $n$, we have:
$$\begin{align}
(\gamma^{5})^{n} \gamma^{\mu} & = \gamma^{\mu}(\gamma^{5})^{n}
\end{align}$$
For odd $n$, we have:
$$\begin{align}
(\gamma^{5})^{n}\gamma^{\mu} & = -\gamma^{\mu}(\gamma^{5})^{n}
\end{align}$$
Then:
$$\begin{align}
e^{i\alpha \gamma^{5}}\gamma^{\mu} & = \sum_{n\text{ even}} \frac{1}{n!}(i\alpha \gamma^{5})^{n}\gamma^{\mu}+ \sum_{n\text{ odd}} \frac{1}{n!} (i\alpha \gamma^{5})^{n}\gamma^{\mu}  \\
 & = \gamma^{\mu}\left[ \sum_{n\text{ even} } \frac{1}{n!}(i\alpha \gamma^{5})^{n} - \sum_{n\text{ odd}} \frac{1}{n!}(i\alpha \gamma^{5})^{n} \right] \\
 & = \gamma^{\mu}( \cosh(i\alpha \gamma^{5})-\sinh(i\alpha \gamma^{5})) \\
 & = \gamma^{\mu}e^{-i\alpha \gamma^{5}}
\end{align}$$
Then:
$$\begin{align}
V^{\mu} & \rightarrow  \bar{\psi} e^{i\alpha \gamma^{5}}\gamma^{\mu}e^{i\alpha \gamma^{5}}\psi \\
 & = \bar{\psi}\gamma^{\mu}e^{-i\alpha \gamma^{5}}e^{i\alpha \gamma^{5}}\psi \\
 & = \bar{\psi} \gamma^{\mu}\psi=V^{\mu}
\end{align}$$
It is invariant.
## (c)

For $m=0$, clearly we have:
$$\begin{align}
\mathcal{L} & \rightarrow \bar{\psi} e^{i\alpha \gamma^{5}}(i\gamma^{\mu}\partial_{\mu})e^{i\alpha \gamma^{5}}\psi \\
 & = \bar{\psi}i e^{i\alpha \gamma^{5}}\gamma^{\mu}e^{i\alpha \gamma^{5}}\partial_{\mu}\psi \\
 & = \bar{\psi}i \gamma^{\mu}\partial_{\mu}\psi=\mathcal{L}
\end{align}$$
The lagrangian is invariant in this case. But if $m\neq 0$, in general:
$$\begin{align}
\mathcal{L} & \rightarrow \bar{\psi} e^{i\alpha \gamma^{5}}(i\gamma^{\mu}\partial_{\mu})e^{i\alpha \gamma^{5}}\psi-m \bar{\psi} e^{i\alpha \gamma^{5}}e^{i\alpha \gamma^{5}}\psi
\end{align}$$
The term $e^{i\alpha \gamma^{5}}e^{i\alpha \gamma^{5}}=e^{2i\alpha \gamma^{5}}\neq{0}$ in general. Therefore the lagrangian would change.
## (d)

If $\alpha\ll 1$, we have:
$$\begin{align}
 & e^{i\alpha \gamma^{5}}\psi \approx \psi+i\alpha \gamma^{5}\psi \\
\implies & \Delta \psi= i\gamma^{5}\psi
\end{align}$$
We know that:
$$\begin{align}
 &  \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\psi)}  = \bar{\psi}i\gamma^{\mu}
\end{align}$$
Then the Noether current is:
$$\begin{align}
j_{5}^{\mu} & = \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\psi)}\Delta \psi \\
 & = -\bar{\psi} \gamma^{\mu}\gamma^{5}\psi
\end{align}$$
## (3)

We have:
$$\begin{align}
\partial_{\mu}j^{\mu}_{5} & = -(\partial_{\mu}\bar{\psi})\gamma^{\mu}\gamma^{5}\psi-\bar{\psi}\gamma^{\mu}\gamma^{5}(\partial_{\mu}\psi) \\
 
\end{align}$$
We know that the Dirac equation implies:
$$\begin{align}
 & (i\gamma^{\mu}\partial_{\mu}-m)\psi=0\implies \gamma^{\mu}\partial_{\mu}\psi =-im\psi \\
 & \bar{\psi}(-i\gamma^{\mu} \overset{\leftarrow}{\partial}_{\mu}-m)=0\implies \partial_{\mu}\bar{\psi}\gamma^{\mu}=im\bar{\psi}
\end{align}$$
Then:
$$\begin{align}
\partial_{\mu}j^{\mu}_{5} & = -im\bar{\psi} \gamma^{5}\psi-im\bar{\psi}\gamma^{5}\psi \\
 & = -2im\bar{\psi}\gamma^{5}\psi
\end{align}$$
This is nonzero unless $m=0$.




