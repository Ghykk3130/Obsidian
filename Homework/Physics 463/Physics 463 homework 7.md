# 1.
## (a)

We know that:
$$\begin{align}
\frac{p^{2}}{2m} (e^{ikx}u_{k}(x) ) & = - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}(e^{ikx}u_{k}) \\
 & = - \frac{\hbar^{2}}{2m} \frac{d}{dx}\left(  ike^{ikx}u_{k}+ e^{ikx} \frac{d}{dx}u_{k} \right) \\
 & = - \frac{\hbar^{2}}{2m }\left( -k^{2}e^{ikx}u_{k}+ 2ike^{ikx} \frac{d}{dx}u_{k}+ e^{ikx} \frac{d^{2}}{dx^{2}}u_{k} \right) \\
 & = - \frac{\hbar^{2}}{2m}e^{ikx}\left(  \frac{d}{dx}+ik \right)^{2}u_{k} \\
 & = \frac{1}{2m}e^{ikx}\left( -i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}
\end{align}$$
Therefore, for where the potential is zero, the Schrodinger equation is:
$$\begin{align}
 &  \frac{p^{2}}{2m}(e^{ikx}u_{k})=E e^{ikx}u_{k} \\
\implies &  \frac{1}{2m}e^{ikx}\left( - i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}= Ee^{ikx}u_{k} \\
\implies &  \frac{1}{2m}\left( - i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}=Eu_{k}
\end{align}$$
Or we can also show the equivalence:
$$\begin{align}
\left( -i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k} & =-\hbar^{2}u_{k}^{''}+2(-i\hbar)(\hbar k)u_{k}^{'}+\hbar^{2}k^{2}u_{k} \\
  & = -\hbar^{2}(u_{k}^{''}+2iku_{k}^{'}-k^{2}u_{k})= 2mEu_{k}
\end{align}$$
Then substitute in $q= \frac{\sqrt{ 2mE }}{\hbar}$:
$$u_{k}^{''}+2iku_{k}^{'}+(q^{2}-k^{2})u_{k}=0$$
To solve the equation, we make the ansatz that $u_{k}(x)=Ae^{i\kappa x}$. Then:
$$\begin{align}
 & \frac{1}{2m}\left( -i\hbar \frac{d}{dx}+\hbar k \right)(\hbar \kappa+\hbar k)u_{k}=Eu_{k} \\
\implies &  \frac{1}{2m}\hbar^{2}(\kappa+k)^{2}u_{k}=Eu_{k} \\
\implies & \kappa= \pm \sqrt{ \frac{2mE}{\hbar^{2}} }-k=\pm q-k
\end{align}$$
Therefore:
$$u_{k}(x)=Ae^{i(q-k)x}+Be^{-i(q+k)x}$$
## (b)

We integrate around $0$, take $\epsilon\rightarrow 0$:
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi_{k}+\lambda \sum_{n}\delta(x-na)\psi_{k}=E\psi_{k} \\
\implies & - \frac{\hbar}{2m}[\psi^{'}_{k}]_{-\epsilon}^{\epsilon}+ \lambda \int_{-\epsilon}^{\epsilon}dx\sum_{n}\delta(x-na)\psi_{k}=\int_{-\epsilon}^{\epsilon}dx E\psi_{k} \\
\implies & - \frac{\hbar}{2m}[\psi^{'}_{k}]_{-\epsilon}^{\epsilon}+\lambda \psi_{k}(0)=0\\
\implies & \lim_{ x \to 0+ }   \psi_{k}^{'}-\lim_{ x \to 0- }\psi^{'}_{k}= \frac{2m\lambda}{\hbar^{2}}\psi_{k}(0) 
\end{align}$$
The continuity of $\psi_{k}$ implies:
$$\begin{align}
 & \lim_{ x \to 0- } e^{ikx}u_{k}(x)=\lim_{ x \to 0+ } e^{ikx}u_{k}(x) \\
\implies & \lim_{ x \to 0- } u_{k}(x)=\lim_{ x \to 0+ } u_{k}(x)
\end{align}$$
We also have:
$$\begin{align}
\psi_{k}^{'}(x) & = ike^{ikx}u_{k}+e^{ikx}u_{k}^{'}
\end{align}$$
Then:
$$\begin{align}
 & \lim_{ x \to 0+ } (ike^{ikx}u_{k}+e^{ikx}u_{k}^{'})-\lim_{ x \to 0- } (ike^{ikx}u_{k}+e^{ikx}u_{k}^{'})= \frac{2m\lambda}{\hbar^{2}}u_{k}(0) \\
\implies & \lim_{ x \to 0+ } u_{k}^{'}-\lim_{ x \to 0- } u_{k}^{'}= \frac{2m\lambda}{\hbar^{2}}u_{k}(0)
\end{align}$$
## (c)

We assume that:
$$\begin{align}
 & u_{k}(x)=Ae^{i(q-k)x}+Be^{-i(q+k)x},\ x \in [-a,0) \\
 & u_{k}(x)=Ce^{i(q-k)x}+De^{-i(q+k)x},\ x \in [0,a)
\end{align}$$
Then:
$$\begin{align}
 & \lim_{ x \to 0- } u_{k}=\lim_{ x \to 0+ } u_{k} \\
\implies & A+B=C+D
\end{align}\tag{ *}$$
$$\begin{align}
 & u_{k}(a^{-})=u_{k}(0^{-}) \\
\implies & Ce^{i(q-k)a}+De^{-i(q+k)a}=A+B \\
\implies & (Ce^{i(q-k)a}-A)+(De^{-i(q+k)a}-B )=0
\end{align}\tag{* *}$$
The periodicity in derivatives give:
$$\begin{align}
 & u_{k}^{'}(a^{-})=u_{k}^{'}(0^{-}) \\
\implies & iC(q-k)e^{i(q-k)a}+(-i)D(q+k)e^{-i(q+k)a}=iA(q-k)+(-i)B(q+k) \\
\implies & i(q-k)(Ce^{i(q-k)a}-A)+(-i)(q+k)(De^{-i(q+k)a }-B)=0
\end{align}$$
Then combined with $(* *)$, if $q\neq 0$, we obtain:
$$A=Ce^{i(q-k)a},\ B=De^{-i(q+k)a}$$
Then substitute into $(*)$, we get:
$$\begin{align}
 & (q-e^{i(q-k)a})C+(q-e^{-i(q+k)a})D=0
\end{align}$$
We also have:
$$\begin{align}
 & u_{k}^{'}(0^{+})-u_{k}^{'}(0^{-})= \frac{2m\lambda}{\hbar^{2}}u_{k}(0) \\
\implies & \left[i(q-k)(1- e^{i(q-k)a})- \frac{2m\lambda}{\hbar^{2}}\right]C +\left[ (-i)(q+k)(q-e^{-i(q+k)a})- \frac{2m\lambda}{\hbar^{2}} \right]D=0
\end{align}$$
In order for the non-trivial solution $(C,D)$ to exist, we have:
$$\begin{align}
 & \left[ i(q-k)(1-e^{i(q-k)a})- \frac{2m\lambda}{\hbar^{2}} \right](1-e^{-i(q+k)a})+\left[ i(q+k)\left( 1-e^{-i(q+k)a} \right)+ \frac{2m\lambda}{\hbar^{2}} \right](1-e^{i(q-k)a})=0 \\
\implies & 2(q-k)e^{-ika}(\cos qa-\cos ka)+2(q+k)e^{-ika}(\cos qa-\cos ka )+ \frac{4m\lambda}{\hbar^{2}}e^{- \frac{i}{2}(q+k)a}\sin\left(  \frac{q+k}{2}a \right)+ \frac{4m\lambda}{\hbar^{2}}e^{ \frac{i}{2}(q-k)a}\sin \left(  \frac{q-k}{2}a \right)=0
\end{align}$$
We know that:
$$\begin{align}
e^{- \frac{i}{2}(q+k)a}\sin\left(  \frac{q+k}{2}a \right)+ e^{ \frac{i}{2}(q-k)a} \sin\left(  \frac{q-k}{2}a \right) & = \frac{1}{2i}\left[ e^{- \frac{i}{2}(q+k)a}\left( e^{ \frac{i}{2}(q+k)a}- e^{- \frac{i}{2}(q+k)a} \right)+e^{ \frac{i}{2}(q-k)a} \left( e^{ \frac{i}{2}(q-k)a} - e^{ - \frac{i}{2}(q-k)a}\right) \right] \\
 & = e^{-ika} \frac{1}{2i}(e^{iqa}-e^{-iqa}) \\
 & = \sin(qa)e^{-ika} 
\end{align}$$
Then we obtain:
$$\begin{align}
 & 4qe^{-ika}(\cos qa-\cos ka)+ \frac{4m\lambda}{\hbar^{2}}e^{-ika}\sin qa=0 \\
\implies & \cos ka= \cos qa+ \frac{m\lambda}{q\hbar^{2}}\sin qa
\end{align}$$
From this equation, we find that the assumption $q\neq 0$ makes sense, since if $q=0$, then $\text{RHS}=1+ \frac{m\lambda a}{\hbar^{2}}>1$, and there's no solution for $k$.
## (d)

We know that $|\cos ka|\leq 1$, therefore it makes sense to require $|\cos qa+ \frac{m\lambda}{q\hbar^{2}}\sin qa|\leq 1$. 

![[Pasted image 20260331210712.png|center|500]]

Here I plotted the RHS of the equation versus $q$. So for each $k$, there is a horizontal line $\cos ka$ corresponding to it. We find the intersection between this line and the curve in the plot to determine $q$, and thus determine $E$. Each intersection corresponds to a band. We see that bandgap arises for two neighboring intersections, if we scan $\cos ka$ from -1 to 1 and the two neighboring intersections don't collide. Roughly speaking, whenever the $-1,1$ lines truncate the curve, we get a bandgap. This simply means there is always an energy gap between them.
## (e)

Take $\lambda=0$. We then get:
$$\begin{align}
k=q= \frac{\sqrt{ 2mE }}{\hbar}
 \end{align}$$
This is exactly the dispersion relation for free electron gas. 

If we increase $\lambda$, then the curve in part $(d)$ would be stretched vertically, making the band gap larger. 
# Kittel 7.4
## (a)

Assume that the potential of a single atom is $u(\mathbf{r})$. Let $\mathbf{r}_{j}$ be the positions of atoms in the primitive cell. Then the total potential is:
$$U(\mathbf{r})=\sum_{\mathbf{R}}\sum_{\mathbf{r}_{j}}u(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R})$$
If we do Fourier transform to $U$, we get:
$$\begin{align}
 & \sum_{\mathbf{G}}U_{\mathbf{G}}e^{i\mathbf{G}\cdot \mathbf{r}}= \sum_{\mathbf{R}}\sum_{\mathbf{r}_{j}}u(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) \\
\implies & U_{\mathbf{G}}= \frac{1}{(2\pi)^{3} } \sum_{\mathbf{R}}\sum_{\mathbf{r}_{j}}\int d^{3}r e^{-i\mathbf{G}\cdot \mathbf{r}}u(\mathbf{r}-\mathbf{r}_{j}-\mathbf{R}) = \frac{1}{(2\pi)^{3}} \sum_{\mathbf{R}}\sum_{\mathbf{r}_{j}}\int d^{3}r e^{-i\mathbf{G}\cdot \mathbf{r}}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}}u(\mathbf{r})=\frac{N}{(2\pi)^{3}}\sum_{\mathbf{r}_{j}}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}}\int d^{3}re^{-i\mathbf{G}\cdot \mathbf{r}}u(\mathbf{r})

\end{align}$$
Define the structure factor $S_{\mathbf{G}}=\sum_{\mathbf{r}_{j}}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}}$. 

For a diamond structure, if $\mathbf{G}=2\cdot \frac{2\pi}{a}  \hat{\mathbf{x}}$. The positions are: 
$$\begin{align}
 & \mathbf{r}_{1}=(0,0,0),\ \mathbf{r}_{2}=\left( \frac{1}{2}, \frac{1}{2},0 \right)a,\ \mathbf{r}_{3}= \left( \frac{1}{2},0, \frac{1}{2}  \right)a,\ \mathbf{r}_{4}= \left( 0, \frac{1}{2}, \frac{1}{2} \right)a \\
 & \mathbf{r}_{5}=\left( \frac{1}{4}, \frac{1}{4}, \frac{1}{4} \right)a,\ \mathbf{r}_{6}=\left( \frac{3}{4}, \frac{3}{4}, \frac{1}{4} \right)a,\ \mathbf{r}_{7}=\left( \frac{3}{4}, \frac{1}{4}, \frac{3}{4} \right)a,\ \mathbf{r}_{8}=\left( \frac{1}{4}, \frac{3}{4}, \frac{3}{4} \right)a
\end{align}$$
Then:
$$\begin{align}
\sum_{\mathbf{r}_{j}}e^{-i\mathbf{G}\cdot \mathbf{r}_{j}} & = 1+1+1+1-1-1-1-1=0
\end{align}$$
If $\mathbf{G}= 2\cdot \frac{2\pi}{a} \hat{\mathbf{y}}\text{ or }2\cdot \frac{2\pi}{a} \hat{\mathbf{z}}$, the calculations are similar, and we obtain an overall factor of $0$. 
## (b)

In the first-order approximation, we know that if $\mathbf{k}$ is on the zone boundary, meaning that there exists a reciprocal lattice vector $\mathbf{G}$ such that $|\mathbf{k}|=|\mathbf{G}-\mathbf{k}|$, then the splitting from the perturbation would create a bandgap of size $2|U_{\mathbf{G}}|$.

It's obvious from the geometry that if $\mathbf{k}$ is on the zone boundary defined by $\mathbf{A}$, then clearly $|\mathbf{k}|=|\mathbf{k}-2\mathbf{A}|$. Therefore $\mathbf{G}$ can be chosen to be $2\mathbf{A}$. We have proved that $U_{2\mathbf{A}}=0$, therefore, the bandgap vanishes.
# Kittel 7.6

First we compute the Fourier transform of $U$:
$$\begin{align}
U(x,y) & = -4U\cos\left( \frac{2\pi}{a}x \right)\cos\left( \frac{2\pi}{a}y \right) \\
 & = -4U \frac{e^{i \frac{2\pi}{a}x}+e^{-i \frac{2\pi}{a}x}}{2} \frac{e^{i \frac{2\pi}{a}y}+e^{-i \frac{2\pi}{a}y}}{2} \\
 & = -U\left[ \exp\left( i\left( \frac{2\pi}{a}x+ \frac{2\pi}{a}y \right) \right)+\exp\left( i\left( - \frac{2\pi}{a}x+ \frac{2\pi}{a}y \right) \right)+\exp\left( i\left( \frac{2\pi}{a}x- \frac{2\pi}{a}y \right) \right)+\exp\left( i\left( -\frac{2\pi}{a}x- \frac{2\pi}{a}y \right) \right) \right]
\end{align}$$
So there are only four choices of $\mathbf{G}$. We also need to satisfy the condition that $|\mathbf{k}^{'}|=|\mathbf{k}|$. Then we can only take $\mathbf{G}=\left(  \frac{2\pi}{a}, \frac{2\pi}{a} \right),\ (- \frac{2\pi}{a}, - \frac{2\pi}{a})$.

Therefore, the matrix of central equation is:
$$\begin{pmatrix}
\frac{\hbar^{2}\pi^{2}}{ma^{2}}-\epsilon & -U \\
-U & \frac{\hbar^{2}\pi^{2}}{ma^{2}}-\epsilon
\end{pmatrix}$$
Then:
$$\begin{align}
 & \left( \frac{\hbar^{2}\pi^{2}}{ma^{2}}-\epsilon \right)^{2}-U^{2}=0\implies\epsilon= \frac{\hbar^{2}\pi^{2}}{ma^{2}}\pm U
\end{align}$$
Then the bandgap is $2U$. It is not specified whether $U>0$ or not. For simplicity, I assumed this is the case. 





