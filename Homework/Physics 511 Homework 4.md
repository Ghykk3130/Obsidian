>[!Note]
>Sometimes, there will be problems with latex matrix expression rendering. I am totally aware of this issue but cannot fix it. Please don't take points off if you see this.
# 1).
## a).
Know that the Hamiltonian is:
$$H=-\vec{\mu}\cdot \vec{B}=-g \frac{e}{2m}\vec{S}\cdot \vec{B}$$
Take $g=2, B=B_{0}\hat{z}$ to get:
$$H=- \frac{e}{m}S_{z}B_{0}$$
Note that this Hamiltonian is time-independent, therefore the time evolution operator is given by:
$$U(t,t_{0}=0)=\exp\left(  \frac{i}{\hbar} \frac{e}{m}S_{z}B_{0}t \right)$$
Then I have:
$$\begin{align}
\ket{\hat{n}(t)} & = U(t,t_{0}=0)\ket{\hat{n}}  \\
 & = \exp\left(  \frac{i}{\hbar} \frac{e}{m}S_{z}B_{0}t \right) \ket{\hat{n}}  \\
 & = \exp\left(  \frac{i}{\hbar} \frac{e}{m}S_{z}B_{0}t \right)\left( \cos \frac{\beta}{2}\ket{+\hat{z}} +\sin \frac{\beta}{2}\ket{-\hat{z}}   \right) \\
 & = \exp\left(  i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}\ket{+ \hat{z}} + \exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\ket{-\hat{z}} 
\end{align}$$
Know that:
$$\ket{+\hat{x}} = \frac{\sqrt{ 2 }}{2}\ket{+\hat{z}} + \frac{\sqrt{ 2 }}{2}\ket{-\hat{z}} $$
Then:
$$\begin{align}
\bra{+\hat{x}} \hat{n}(t)\rangle & =\left(  \frac{\sqrt{ 2 }}{2}\bra{+\hat{z}} + \frac{\sqrt{ 2 }}{2}\bra{-\hat{z}}  \right)c \\
 & = \frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}+ \frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}
\end{align}$$
Therefore:
$$\begin{align}
|\bra{+\hat{x}} \hat{n}(t)\rangle|^{2} & =\left(\frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}+ \frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\right) \left(\frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}+ \frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\right) \\
 & = \frac{1}{2}\cos ^{2} \frac{\beta}{2}+ \frac{1}{2}\sin ^{2} \frac{\beta}{2}+ \frac{1}{2}\exp\left( -i \frac{eB_{0}}{m}t \right)\sin \frac{\beta}{2}\cos \frac{\beta}{2}+ \frac{1}{2}\exp\left( i \frac{eB_{0}}{m}t \right)\sin \frac{\beta}{2}\cos \frac{\beta}{2} \\
 & = \frac{1}{2}+ \frac{1}{2} \sin \frac{\beta}{2}\cos \frac{\beta}{2}\cos\left(  \frac{eB_{0}}{m}t \right)\cdot{2} \\
 & = \frac{1}{2}+ \sin \frac{\beta}{2}\cos \frac{\beta}{2}\cos\left(  \frac{eB_{0}}{m}t \right) \\
 & = \frac{1}{2}+ \frac{1}{2}\sin \beta \cos\left(  \frac{eB_{0}}{m}t \right)
\end{align}$$
## b).
Recall:
$$\ket{-\hat{x}} =\frac{\sqrt{ 2 }}{2}\ket{+\hat{z}} - \frac{\sqrt{ 2 }}{2}\ket{-\hat{z}} $$
we find:
$$\begin{align}
\bra{-\hat{x}} \hat{n}(t)\rangle & =\left(  \frac{\sqrt{ 2 }}{2}\bra{+\hat{z}} - \frac{\sqrt{ 2 }}{2}\bra{-\hat{z}}  \right)\left(\frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}+ \frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\right) \\
 & = \frac{1}{2} \exp\left( i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}- \frac{1}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}
\end{align}$$
Therefore:
$$\begin{align}
|\bra{-\hat{x}} \hat{n}(t)\rangle|^{2} & =\left(\frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}- \frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\right) \left(\frac{\sqrt{ 2 }}{2}\exp\left( i \frac{e}{2m}B_{0}t \right)\cos \frac{\beta}{2}- \frac{\sqrt{ 2 }}{2}\exp\left( -i \frac{e}{2m}B_{0}t \right)\sin \frac{\beta}{2}\right) \\
 & = \frac{1}{2}\cos ^{2} \frac{\beta}{2}+ \frac{1}{2}\sin ^{2} \frac{\beta}{2}- \frac{1}{2}\exp\left( -i \frac{eB_{0}}{m}t \right)\sin \frac{\beta}{2}\cos \frac{\beta}{2}- \frac{1}{2}\exp\left( i \frac{eB_{0}}{m}t \right)\sin \frac{\beta}{2}\cos \frac{\beta}{2} \\
 & = \frac{1}{2}- \frac{1}{2} \sin \frac{\beta}{2}\cos \frac{\beta}{2}\cos\left(  \frac{eB_{0}}{m}t \right)\cdot{2} \\
 & = \frac{1}{2}- \sin \frac{\beta}{2}\cos \frac{\beta}{2}\cos\left(  \frac{eB_{0}}{m}t \right) \\
 & = \frac{1}{2}- \frac{1}{2}\sin \beta \cos\left(  \frac{eB_{0}}{m}t \right)
\end{align}$$
Then we have:
$$\begin{align}
\langle\hat{S}_{x}\rangle & =\bra{\hat{n}(t)} \hat{S}_{x}\ket{\hat{n}(t)}  \\
 & = \bra{\hat{n}(t)} (\ket{+\hat{x}} \bra{+\hat{x}} +\ket{-\hat{x}} \bra{-\hat{x}} )\hat{S}_{x} \ket{\hat{n}(t)}  \\
 & = \frac{\hbar}{2}|\bra{+\hat{x}} \hat{n}(t)\rangle|^{2}- \frac{\hbar}{2}|\bra{-\hat{x}} \hat{n}(t)\rangle |^{2} \\
  & = \frac{\hbar}{2}\sin \beta \cos\left(  \frac{eB_{0}}{m}t \right)
\end{align}$$
# 2).
## a).
Know that the time evolution operator is:
$$U(t,t_{0}=0)=\exp\left( - \frac{i}{\hbar}Ht \right)$$
because the Hamiltonian is time-independent.

Then we have:
$$\ket{\psi(t)} =\exp\left(  - \frac{i}{\hbar}Ht \right)\ket{\psi(0)} = \exp\left(  - \frac{i}{\hbar}Ht \right)\ket{2} $$
We know that:
$$\begin{align} \begin{pmatrix}
E_{0} & 0 & 0 & A \\
 0& E_{1} & 0 & 0 \\
0 & 0 & E_{1} & 0 \\
A & 0 & 0 & E_{0}
\end{pmatrix}\begin{pmatrix}
0  \\
1  \\
0 \\
0
\end{pmatrix}=
E_{1}\begin{pmatrix}
0  \\
1 \\
0 \\
0
\end{pmatrix}
\end{align}$$
Then:
$$H\ket{2} =E_{1}\ket{2} $$
Then:
$$\begin{align}
\ket{\psi(t)}  & =\exp\left( - \frac{i}{\hbar}Ht \right) \ket{2}  \\
 & = \sum_{j}\left( - \frac{i}{\hbar}t \right)^j \frac{1}{j!}H^j\ket{2}  \\
 & = \sum_{j}\left( - \frac{i}{\hbar}t \right)^j \frac{1}{j!}E_{1}^j\ket{2}  \\
 & = \exp\left( - \frac{i}{\hbar}E_{1}t \right)\ket{2} 
\end{align}$$
## b).
Know that the vector $\frac{1}{\sqrt{ 2 }}\ket{2}+ \frac{1}{\sqrt{ 2 }}\ket{3}$ belongs to the eigensubspace with eigenvalue $E_{1}$, because:
$$\begin{pmatrix}
E_{0} & 0 & 0 & A \\
0 & E_{1} & 0 & 0 \\
0 & 0 & E_{1} & 0 \\
A & 0 & 0 & E_{0}
\end{pmatrix}\begin{pmatrix}
0 \\
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0
\end{pmatrix}= E_{1}\begin{pmatrix}
0  \\
  \frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0
\end{pmatrix}$$
The time evolution operator is completely the same as in $a).$ Therefore, I have:
$$\begin{align}
\ket{\psi(t)}  & = \exp\left( - \frac{i}{\hbar}Ht \right) \left(  \frac{1}{\sqrt{ 2 }}\ket{2} + \frac{1}{\sqrt{ 2 }}\ket{3}  \right) \\
 & = \exp\left( - \frac{i}{\hbar}E_{1}t \right)\left(  \frac{1}{\sqrt{ 2 }}\ket{2}  + \frac{1}{\sqrt{ 2 }}\ket{3} \right)
\end{align}$$
## c).
Consider the eigenequation of the Hamiltonian:
$$\begin{align}
 & \begin{vmatrix}
E_{0}-\lambda & 0 & 0 & A \\
0 & E_{1}-\lambda & 0 & 0  \\
0 & 0 & E_{1}-\lambda & 0 \\
A & 0 & 0 & E_{0}-\lambda
\end{vmatrix}=0 \\
\implies  & (E_{0}-\lambda)\begin{vmatrix}
E_{1}-\lambda & 0 & 0 \\
0 & E_{1}-\lambda & 0 \\
0 & 0 & E_{0}-\lambda
\end{vmatrix}-A\begin{vmatrix}
0 & E_{1}-\lambda & 0 \\
0 & 0 & E_{1}-\lambda \\
A & 0 & 0
\end{vmatrix}=0 \\
\implies & (E_{1}-\lambda)^{2}((E_{0}-\lambda)^{2}-A^{2})=0 \\
\implies & \lambda=E_{1}, E_{0}\pm A
\end{align}$$
For $\lambda=E_{1}$, the eigenvectors are given by:
$$\begin{align}
 & \begin{pmatrix}
E_{0}-E_{1} & 0 & 0 & A \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
A & 0 & 0 & E_{0}-E_{1}
\end{pmatrix}v=0 \\
\implies & v=\begin{pmatrix}
0 \\
1 \\
0 \\
0
\end{pmatrix},\begin{pmatrix}
0  \\
0 \\
1 \\
0
\end{pmatrix}
\end{align}$$
For $\lambda=E_{0}+A$, we have:
$$\begin{align}
 & \begin{pmatrix}
-A & 0 & 0 & A \\
0 & E_{1}  -E_{0}-A & 0 & 0   \\
0 & 0 & E_{1}-E_{0}-A & 0 \\
A & 0 & 0 & -A
\end{pmatrix}v=0 \\
\implies & v=\frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
0 \\
0 \\
1
\end{pmatrix}
\end{align}$$
For $\lambda=E_{0}-A$, we have:
$$\begin{align}
 & \begin{pmatrix}
A & 0 & 0 & A \\
0  & E_{1}-E_{0}+A & 0  & 0\\
0 & 0 & E_{1}-E_{0}+A & 0 \\
A & 0 & 0 & A
\end{pmatrix}v=0 \\
\implies & v= \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
0 \\
0 \\
-1
\end{pmatrix}
\end{align}$$
Therefore we can diagonalize the Hamiltonian representation matrix:
$$\begin{pmatrix}
E_{0} & 0 & 0 & A \\
0 & E_{1} & 0 & 0 \\
0 & 0 & E_{1} & 0 \\
A & 0 & 0 & E_{0}
\end{pmatrix}=\begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}\begin{pmatrix}
E_{1} & 0 & 0 & 0 \\
0 & E_{1} & 0 & 0 \\
0 & 0 & E_{0}+A & 0 \\
0 & 0 & 0 & E_{0}-A
\end{pmatrix}\begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}^{t}$$
Therefore we know, given $j\in \mathbb{N}^{+}$, we have:
$$\begin{align}
\begin{pmatrix}
E_{0} & 0 & 0 & A \\
0 & E_{1} & 0 & 0 \\
0 & 0 & E_{1} & 0 \\
A & 0 & 0 & E_{0}
\end{pmatrix}\begin{pmatrix}
0 \\
0 \\
0 \\
1
\end{pmatrix} & =\begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}\begin{pmatrix}
E_{1} & 0 & 0 & 0 \\
0 & E_{1} & 0 & 0 \\
0 & 0 & E_{0}+A & 0 \\
0 & 0 & 0 & E_{0}-A
\end{pmatrix}\begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}^{t}\begin{pmatrix}
0 \\
0 \\
0 \\
1
\end{pmatrix} \\
 & = \begin{pmatrix}
0 & 0 &  \frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & \frac{1}{\sqrt{ 2 }} & - \frac{1}{\sqrt{ 2 }}
\end{pmatrix}\begin{pmatrix}
0  \\
0 \\
 \frac{1}{\sqrt{ 2 }}(E_{0}+A)^{j} \\
- \frac{1}{\sqrt{ 2 }}(E_{0}-A)^{j}
\end{pmatrix} \\
 &=  \begin{pmatrix}
\frac{1}{2}(E_{0}+A)^{j}- \frac{1}{2}(E_{0}-A)^{j} \\
0 \\
0 \\
\frac{1}{2}(E_{0}+A)^{j}+ \frac{1}{2}(E_{0}-A)^{j}
\end{pmatrix}
\end{align}$$
Therefore:
$$H^{j}\ket{4} = \left( \frac{1}{2}(E_{0}+A)^{j}- \frac{1}{2}(E_{0}-A)^{j} \right)\ket{1} +\left( \frac{1}{2}( E_{0}+A)^{j}+ \frac{1}{2}(E_{0}-A)^{j} \right)\ket{4} $$
Then I have:
$$\begin{align}
\ket{\psi(t)}  & =\exp\left( - \frac{i}{\hbar}Ht \right)\ket{4} \\
 & =\sum_{j}\left(  -\frac{i}{\hbar} t\right)^j \frac{1}{j!}H^j\ket{4} \\
 & = \sum_{j}\left( - \frac{i}{\hbar}t \right)^{j} \frac{1}{j!}\left[\left( \frac{1}{2}(E_{0}+A)^{j}- \frac{1}{2}(E_{0}-A)^{j} \right)\ket{1} +\left( \frac{1}{2}( E_{0}+A)^{j}+ \frac{1}{2}(E_{0}-A)^{j} \right)\ket{4}\right]  \\
 & = \frac{1}{2}\exp\left( - \frac{i}{\hbar}(E_{0}+A)t \right)\ket{1} - \frac{1}{2}\exp\left( - \frac{i}{\hbar}(E_{0}-A)t \right)\ket{1}  + \frac{1}{2}\exp\left( - \frac{i}{\hbar}(E_{0}+A)t \right)\ket{4} - \frac{1}{2}\exp\left(  -\frac{i}{\hbar}(E_{0}-A)t \right)\ket{4} 
\end{align}$$

# 3).
## a).
Note that the Hamiltonian is not necessarily Hermitian because:
$$\hat{H}_{bad}^{\dagger}=\delta ^{*}\ket{a^{''}} \bra{a^{'}} $$
unless states $\ket{a^{'}},\ket{a^{''}}$ are equal, and $\delta\in \mathbb{R}$, we do not have that $\hat{H}_{bad}^{\dagger}=\hat{H}_{bad}$
## b).
If $\ket{a^{'}}\neq \ket{a^{''}}$, then the time evolution operator is given by:
$$\begin{align}
U(t,t_{0}=0) & =\exp\left( - \frac{i}{\hbar}\delta \ket{a^{'}} \bra{a^{''}} t \right) \\
 & =\sum_{j} \left( - \frac{i}{\hbar}t \right)^{j} \frac{1}{j!} (\delta \ket{a^{'}} \bra{a^{''}} )^{j} \\
 & = \mathbb{1}+ \frac{i}{\hbar}t \delta \ket{a^{'}} \bra{a^{''}} 
\end{align}$$
This is because $\ket{a^{'}},\ket{a^{''}}$ are orthogonal. Only the term with $j=0,1$ survives.

Therefore:
$$\begin{align}
\ket{\psi(t)}  & = \left( \mathbb{1}+ \frac{i}{\hbar}t\delta \ket{a^{'}} \bra{a^{''}}  \right)\ket{\psi(0)}  \\
 & = \sum_{a}\left( \mathbb{1}+ \frac{i}{\hbar}t\delta \ket{a^{'}} \bra{a^{''}}  \right)\ket{a} \bra{a} \psi(0)\rangle \\
 & = \ket{\psi(0)}+ \frac{i}{\hbar}t\delta \ket{a^{'}} \bra{a^{''}} \psi(0)\rangle 
\end{align}$$
## c).
$$\begin{align}
\bra{\psi(t)} \psi(t)\rangle & = \left( \bra{\psi(0)}  - \frac{i}{\hbar}t\delta ^{*}\bra{\psi(0)} a^{''}\rangle\bra{a^{'}}  \right)\left(\ket{\psi(0)}+ \frac{i}{\hbar}t\delta \ket{a^{'}} \bra{a^{''}} \psi(0)\rangle\right) \\
 & = 1+ \frac{i}{\hbar}t\delta \bra{\psi(0)} a^{'}\rangle\bra{a^{''}} \psi(0)\rangle- \frac{i}{\hbar}t\delta ^{*}\bra{\psi(0)} a^{''}\rangle\bra{a^{'}} \psi(0)\rangle + \frac{1}{\hbar^{2}}t^{2}|\delta|^{2}|\bra{a^{''}} \psi(0)\rangle|^{2} \\
 & = 1+ 2\mathrm{Re}\left( \frac{i}{\hbar}t\delta \bra{\psi(0)} a^{'}\rangle\bra{a^{''}} \psi(0)\rangle \right) + \frac{1}{\hbar^{2}}t^{2}|\delta|^{2}|\bra{a^{''}} \psi(0)\rangle|^{2}\in \mathbb{R}
\end{align}$$
Notice that this value is greater than $1$ in general, meaning that the probability is not conserved. We therefore realize that the requirement of the Hamiltonian being Hermitian is necessary for the probability to be conserved.

# 4).
## a).
$$\begin{align}
r_{{\pm}} & = \sqrt{ x^{2}+\left( y\pm \frac{d}{2} \right)^{2}+L^{2} } \\
 & = \sqrt{ x^{2}+ y^{2}+L^{2} \pm dy+ \frac{d^{2}}{4} } \\
 & = \sqrt{ x^{2}+y^{2}+L^{2} }\sqrt{ 1 \pm y \frac{d}{x^{2}+y^{2}+L^{2}}+ \frac{d^{2}}{4(x^{2}+y^{2}+L^{2})} } \\
 & \approx   \sqrt{ x^{2}+y^{2}+L^{2} }\left( 1 \pm y \frac{d}{2(x^{2}+y^{2}+L^{2})} \right) \\
 & = \sqrt{ x^{2}+y^{2}+L^{2} } \pm \frac{y}{2} \frac{d}{\sqrt{ x^{2}+y^{2}+L^{2} }}
\end{align}$$
## b).
For constructive interference, we require that the phase difference is $2n\pi,\text{ for some }n\in \mathbb{Z}$. Then:
$$\begin{align}
 & kr_{+}-kr_{-} =2n\pi \\
\implies & k y \frac{d}{\sqrt{ x^{2}+y^{2}+L^{2} }}=2n\pi \\
\implies &  \frac{y}{\sqrt{ x^{2}+y^{2}+L^{2}}}= \frac{2n\pi}{kd}= \frac{n\lambda}{d} \\
\implies &  \frac{y}{r}= n \frac{\lambda}{d}
\end{align}$$
## c).
<div style="tex-align:center">
<img src="wavefunction (2).png">
</div>

Maybe I should say what the unit for the y value is in the axis label. But since the unit is not specify in the question, I shall leave it unspecified.

## d).
<div style="text-align:center">
<img src="wavefunction_contour (1).png">
</div>
## e).

<div style="text-align:center">
<img src="wavefunction_classicalmix (1).png">
</div>

In with both slits unblocked, the state of the electron after passing through the slits is a quantum mix of the state $\ket{\psi_{+}}$ and $\ket{\psi_{-}}$. If we block one of the slits 50 percent of the time, the result would be a classical mix of the two separate cases, which we choose manually without referring to any quantum mechanical superposition.


