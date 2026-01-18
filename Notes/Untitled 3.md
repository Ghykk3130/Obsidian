# Lecture 2
## 2.1 1-d Fourier transform
Consider a constrained real space $\left[ - \frac{L}{2}, \frac{L}{2} \right]$. Consider periodic basis functions:
$$\psi_{q}(x)=\psi_{q}(x+L)$$.Then can expand any period functions $f(x)$ over the real space:
$$\begin{align}
 & f(x)= \sum_{q}\tilde{f}(x)\psi_{q}(x),\ \psi_{q}(x)= Ae^{iqx} \\
 & \tilde{f}(q)= \frac{1}{LA}\int_{- \frac{L}{2}}^{L/2}dx\psi ^{*}_{q}(x)f(x)
\end{align}$$
Have conventions:
$$\begin{align}
 &A= \frac{1}{L}\implies f_{}(x)= \frac{1}{L}  \sum_{q}e^{iqx}\tilde{f}(q)
\end{align}$$
$\psi_{q}$ should satisfied:
$$\begin{align}
 & \text{orthogonality: } \int_{- \frac{L}{2}}^{\frac{L}{2}}\psi ^{*}_{q^{'}}(x)\psi_{q}(x)dx=A^{2}L\delta_{q-q^{'},0} \\
 & \text{ completeness: } \sum_{q}\psi_{q}(x)= AL\sum_{m}\delta(x-mL)=AL\delta(x)
\end{align}$$
Can show that:
$$\begin{align}
\tilde{f}(q) & = \sum_{q^{'}}\delta_{q^{'}-q,0}\tilde{f}(q^{{'}} ) \\
 & = \sum_{q^{'}} \frac{1}{L}\int_{-\frac{L}{2}}^{\frac{L}{2}}dxe^{i(q^{'}-q)x}\tilde{f}(q^{'}) \\
 & = \frac{1}{L}\int_{- \frac{L}{2}}^{L/2} dxe^{-iqx}\sum_{q^{'}}e^{iq^{'}x}\tilde{f}(q^{'}) \\
 & = \frac{1}{LA}\int_{- \frac{L}{2}}^{L/2}  dxe^{-iqx} f(x)
\end{align}$$
Periodic boundary condition:
$$q= \frac{2\pi n}{L}$$
As $L\rightarrow \infty$, we can replace sums with integrals. We have integrate over the momentum space:
$$\sum_{q}=\sum_{n}\leadsto \frac{L}{2\pi}\int dq$$
Can generalize to the continuous case:
$$f(x)= \int_{-\infty}^{\infty} \frac{dq}{2\pi}e^{iqx}\tilde{f}(q), \tilde{f}(q)= \int_{-\infty}^{\infty}dxe^{-iqx}f(x)$$
Orthogonality:
$$\int_{\mathbb{R}}dq e^{iqx}=2\pi\delta(x)$$
## 2.2 Generalization to d dimensions

Periodic boundary condition:
$$f(x_{1}..,x_{i},\dots,x_{d})=f(x_{1},\dots,x_{i}+L_{i},\dots,x_{d})$$
Higher dimension generalization:
$$\begin{align}
 & f(\vec{x})=A\sum_{q}e^{i\vec{q}\cdot \vec{x}}\tilde{f}(\vec{q}) \\
 & \tilde{f}(\vec{q})=\int d^d  xe^{-i\vec{q}\cdot \vec{x}}f(\vec{x})
\end{align}$$
Continuous version:
$$\begin{align}
 &  f(\vec{x})= \int_{\mathbb{R}^d} \frac{d^dq}{(2\pi)^d} e^{i\vec{q}\cdot \vec{x}}\tilde{f}(\vec{q}) \\
 & \tilde{f}(\vec{q})=\int_{\mathbb{R}^d} d^dxe^{-i\vec{q}\cdot \vec{x}}f(\vec{x})
\end{align}$$
## 2.3 Real space as a lattice

Consider a discretized reals space $x=na, n=1,\dots,N$

Consider the basis functions $\psi_{q}(x)=Ae^{iqx}$. Then $q$ is discretized:
$$\exp(iqx)=\exp(iq(x+ Na))\implies q= \frac{2\pi m}{Na}$$
So $q$ forms a discrete set of points in the $q-\text{space}$, with spacing $\frac{2\pi}{Na}$. Then want the boundary of $q$. Claim that $q,q+ \frac{2\pi}{a}$ give the same mode. Since:
$$\exp(iqx)=\exp\left( i\left( q+ \frac{2\pi}{a} \right)x \right)$$
So can confine:
$$q\in\left[ - \frac{\pi}{a}, \frac{\pi}{a} \right)$$
**Orthogonality and completeness:**
$$\begin{align}
 & \sum_{n=1}^N e^{i(q-q^{'})na}=N\delta_{q,q^{'}} \\
 & \sum_{q\in \text{FBZ}}= N\delta_{n,0}
\end{align}$$
If the lattice is unbounded, take $N\rightarrow \infty$. Then $q$ becomes continuous. The first Brillouin zone is still well-defined. We have:
$$\begin{align}
 & f(x)= \frac{1}{L}\sum_{q\in \text{FBZ}} e^{iqx}\tilde{f}(q) \\
 & \tilde{f}(q)= a\sum_{n}e^{-iqna}f(na)
\end{align}$$
Continuous version:
$$\begin{align}
 &  f(x)= \int_{\text{FBZ}} \frac{dq}{2\pi}e^{iqx}\tilde{f}(q) \\
 &  \text{same}
\end{align}$$
