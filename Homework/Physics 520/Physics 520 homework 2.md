# Problem 1
## (1)

The unit cell in the real space is a triangular lattice with length $\sqrt{ 3 }a$. The lattice unit vectors are:
$$\mathbf{a}_{1}= \frac{{ 3 }}{2}  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2} \hat{\mathbf{y}},\ \mathbf{a}_{2}= \frac{3}{2}  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}  \hat{\mathbf{y}}$$
The reciprocal lattice vectors are given by:
$$\mathbf{b}_{1}=  \frac{2\pi\mathbf{z}\times \mathbf{a}_{2}}{\mathbf{a}_{1}\cdot(\mathbf{z}\times \mathbf{a}_{2})}= \frac{2\pi}{3}  \hat{\mathbf{x}}+ \frac{2}{3}\sqrt{ 3 }{\pi}  \hat{\mathbf{y}},\ \mathbf{b}_{2}= \frac{2\pi \mathbf{a}_{1}\times \mathbf{z}}{\mathbf{a}_{2}\cdot(\mathbf{a}_{1}\times \mathbf{a})}= \frac{2\pi}{3}  \hat{\mathbf{x}}- \frac{2}{3}\sqrt{ 3 }\pi   \hat{\mathbf{y}}$$
## (2)

![[5e0748b5a0735528d877f86f86d9090b.jpg|centering|400]]
There are three inequivalent M points. We have:
$$M=\left( \frac{1}{2}, \frac{1}{2} \right),\ M^{'}=(0,1),\ M^{''}=(-1,0)$$
Similarly, there are three inequivalent K points. We have:
$$K=\left(  \frac{1}{6} , \frac{2}{3} \right),\ K^{'}=\left( -\frac{1}{6}, \frac{1}{3} \right),K^{''}=\left( - \frac{2}{3}, - \frac{1}{6} \right)$$
## (3)

Let the nearest neighbor vectors be $\boldsymbol{\delta}_{1}=  a  \hat{\mathbf{x}},\ \boldsymbol{\delta}_{2}=- \frac{1}{2}a  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}  a \hat{\mathbf{y}},\ \boldsymbol{\delta}_{3}=- \frac{1}{2}a \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}}$. Let $\ket{\mathbf{R}_{n}^{A}},\ \ket{\mathbf{R}_{n}^{B}}= \ket{\mathbf{R}_{n}^{A}+  a  \hat{\mathbf{x}}}$ denote the pz orbitals at position $\mathbf{R}^{A}_{n},\ \mathbf{R}^{B}_{n}$ respectively. 
![[7ea829d5fe8f2dc0b192b660cb082e7b.jpg|centering|300]]
Require that the matrix elements obey:
$$\begin{align}
 & \bra{\mathbf{R}^{A}_{n}} H \ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}} =\bra{\mathbf{R}^{B}_{n} }H \ket{\mathbf{R}^{B}_{n}+\boldsymbol{\delta}} =-t \\
 & \bra{\mathbf{R}^{A}_{n}} H \ket{\mathbf{R}^{A}_{n}} =\epsilon_{0} ^{A},\ \bra{\mathbf{R}^{B}_{n}} H \ket{\mathbf{R}^{B}_{n}} =\epsilon^{B}_{0} \\
 & \text{matrix element }=0\text{ otherwise} 
\end{align}$$
Then the hamiltonian is:
$$\begin{align}
H & = \sum_{n}(\ket{\mathbf{R}^{n}_{A}} \bra{\mathbf{R}^{A}_{n}} + \ket{\mathbf{R}^{B}_{n}} \bra{\mathbf{R}^{B}_{n}} )H \sum_{m}(\ket{\mathbf{R}^{A}_{m}} \bra{\mathbf{R}^{A}_{m}} + \ket{\mathbf{R}^{B}_{m}} \bra{\mathbf{R}^{B}_{m}} ) \\
 & = \epsilon_{0}^{A}\sum_{n}\ket{\mathbf{R}^{A}_{n}} \bra{\mathbf{R}^{A}_{n}} + \sum_{n,i} (-t) \ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{i}} \bra{\mathbf{R}^{A}_{n}}+\epsilon^{B}_{0}\sum_{n}\ket{\mathbf{R}^{B}_{n}} \bra{\mathbf{R}^{B}_{n}} +\sum_{n,i}(-t)\ket{\mathbf{R}^{B}_{n}+\boldsymbol{\delta}_{i}} \bra{\mathbf{R}^{B}_{n}}  
\end{align}$$
We guess the solution: $\ket{\phi_{\mathbf{k}}}=\sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{n}}\ket{\mathbf{R}^{B}_{n}})$. Substitute into the Schrodinger's equation:
$$\begin{align}
 & H\ket{\phi_{\mathbf{k}}}=E\ket{\phi_{\mathbf{k}}} \\
\implies & \sum_{m}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}} \epsilon_{0}^{A}\ket{\mathbf{R}^{A}_{m}} +\sum_{m}\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\epsilon_{0}^{B}\ket{\mathbf{R}^{B}_{m}}+ \sum_{m,i} \beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}(-t) \ket{\mathbf{R}^{A}_{m}+\boldsymbol{\delta}_{i}} + \sum_{m,i} \beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}(-t)\ket{\mathbf{R}^{B}_{m}+\boldsymbol{\delta}_{i}}=E    \sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{n}}\ket{\mathbf{R}^{B}_{n}}) \\
\implies &    \sum_{m}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}} \epsilon_{0}^{A}\ket{\mathbf{R}^{A}_{m}} +\sum_{m}\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\epsilon_{0}^{B}\ket{\mathbf{R}^{B}_{m}}+\sum_{m,i}\beta_{A}e^{i\mathbf{k}\cdot(\mathbf{R}^{B}_{m}+\boldsymbol{\delta}_{i})}(-t)\ket{\mathbf{R}^{B}_{m}}+\sum_{m,i}\beta_{B}e^{i\mathbf{k}\cdot (\mathbf{R}^{A}_{m}+\boldsymbol{\delta}_{i})} (-t)\ket{\mathbf{R}^{{A}}_{m}}=  E    \sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{n}}\ket{\mathbf{R}^{B}_{n}})
\end{align}$$
Due to the linear independence of the basis, we can decouple:
$$\begin{align}
 & \beta_{A}\epsilon^{A}_{0}+\beta_{B}\sum_{i}(-t)e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{i}}=E \beta_{A} \\
 & \beta_{B}\epsilon^{B}_{0}+\beta_{A}\sum_{i}(-t)e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{i}}=E\beta_{B} \\
\implies & E\begin{pmatrix}
\beta_{A} \\
\beta_{B}
\end{pmatrix}= \begin{pmatrix}
\epsilon_{0}^{A} & -t\sum_{i}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{i}} \\ -t\sum_{i}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{i}} & \epsilon^{B}_{0}

\end{pmatrix} \begin{pmatrix}
\beta_{A} \\
\beta_{B}
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
 & (\epsilon^{A}_{0}-E)(\epsilon^{B}_{0}-E)-t^{2}\left| \sum_{i}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{i}} \right|^{2}=0 \\
\implies & E^{2}-(\epsilon_{0}^{A}+\epsilon_{0}^{B})E+\epsilon_{0}^{A}\epsilon_{0}^{B}-t^{2}\left| e^{ik_{x}a}+ e^{i\left( - \frac{a}{2}k_{x}+ \frac{\sqrt{ 3 }}{2}ak_{y} \right)}+ e^{i\left( - \frac{a}{2}k_{x}- \frac{\sqrt{ 3 }}{2}ak_{y} \right)}\right|^{2}=0 \\
\implies & E^{2}-(\epsilon_{0}^{A}+\epsilon_{0}^{B})E+\epsilon_{0}^{A}\epsilon_{0}^{B}-t^{2}\left(1+ 4\cos\left(  \frac{3a}{2}k_{x} \right)\cos\left( \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4 \cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)  \right)^{}=0 \\
\implies & E= \frac{\epsilon^{A}_{0}+\epsilon_{0}^{B}}{2}\pm \frac{1}{2}\sqrt{ (\epsilon_{0}^{A}-\epsilon_{0}^{B})^{2}+4t^{2}\left(1+ 4\cos\left(  \frac{3a}{2}k_{x} \right)\cos\left( \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4 \cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)  \right)^{}}
\end{align}$$
For graphene, assume that $\epsilon_{0}^{A}=\epsilon_{0}^{B}=\epsilon_{0}$, we write:
$$E= \epsilon_{0}\pm |t| \sqrt{  1+4 \cos\left(  \frac{3a}{2}k_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)}$$
From $\Gamma\rightarrow M$, we have $k_{y}=0,\ 0\leq k_{x}\leq \frac{2\pi}{3a}$:
$$E= \epsilon_{0}\pm |t|\sqrt{ 1+4\cos\left(  \frac{3a}{2}k_{x} \right)+4 }$$
![[e1e6a87f5b7d48f7973e2755bab38e23.jpg|centering|300]]
From $\Gamma\rightarrow K$, we have $k_{x}=\sqrt{ 3 }k_{y},\ 0\leq k_{y}\leq \frac{2\pi}{3\sqrt{ 3 }a}$:
$$E= \epsilon_{0}\pm \sqrt{ 1+4\cos\left(  \frac{3\sqrt{ 3 }a}{2}k_{y} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) }$$
![[53ec8da443c114a6fc59ad9b41bbe974.jpg|centering|300]]
Observe that each atom contribute one electron, and there are $2N$ atoms in total. Know that the number of available sites in the Brillouin zone is equal to the number of unit cells which is $N$, and each site can hold two electrons due to spin degeneracy. We conclude that electrons must spread the area of the Brillouin zone. Note that the maximum energy of the lower band is achieved at K, so we take $\epsilon_{F}=\epsilon_{0}$ so that the lower band is fully occupied. 
## (4)

The chemical potential is only reached at the K points. We expand around $\mathbf{k}= \frac{2\pi}{3a}  \hat{\mathbf{x}}+ \frac{2\pi}{3\sqrt{ 3 }a} \hat{\mathbf{y}}$. We have:
$$\begin{align}
 & \cos\left(  \frac{3a}{2}\left( k_{x}+ \frac{p_{x}}{\hbar} \right) \right)\approx \left.\cos\left(  \frac{3a}{2}k_{x} \right)\right|_{\mathbf{k}}+ \left.\cos ^{'}\left(  \frac{3a}{2}k_{x} \right)\right|_{\mathbf{k}} \frac{p_{x}}{\hbar}+ \frac{1}{2} \left. \cos ^{''}\left(  \frac{3a}{2}k_{x} \right)\right|_{\mathbf{k}} \frac{p_{x}^{2}}{\hbar^{2}}= -1+ \frac{9a^{2}}{8} \frac{p_{x}^{2}}{\hbar^{2}} \\
 & \cos\left(  \frac{\sqrt{ 3 }a}{2}\left( k_{y}+ \frac{p_{y}}{\hbar} \right) \right)\approx \left. \cos\left(  \frac{\sqrt{ 3 }a}{2}k_{y} \right)  \right|_{\mathbf{k}}+ \left. \cos ^{}\left(  \frac{\sqrt{ 3 }a}{2}k_{y} \right)  \right|_{\mathbf{k}} \frac{p_{y}}{\hbar}+  \frac{1}{2} \left. \cos ^{''}\left(  \frac{\sqrt{ 3 }a}{2}k_{y} \right)  \right|_{\mathbf{k}} \frac{p_{y}^{2}}{\hbar^{2}}= \frac{1}{2}- \frac{3}{4}a  \frac{p_{y}}{\hbar}- \frac{3}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}}\end{align}$$
 Then keep to the second order term:
 $$\begin{align}
1+4\cos\left(  \frac{3 a}{2}\left( k_{x}+ \frac{p_{x}}{\hbar} \right) \right)\cos\left(  \frac{\sqrt{ 3 }}{2}a\left( k_{y }+ \frac{p_{y}}{\hbar}  \right) \right)+ 4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}a\left( k_{y}+ \frac{p_{y}}{\hbar} \right) \right) & \approx 1+4\left( -1+ \frac{9a^{2}}{8} \frac{p_{x}^{2}}{\hbar^{2}} \right)\left(  \frac{1}{2}- \frac{3}{4}a \frac{p_{y}}{\hbar}- \frac{3}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}} \right)+4\left( \frac{1}{2}- \frac{3}{4}a \frac{p_{y}}{\hbar}- \frac{3}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}} \right)^{2} \\
 & \approx 1+4\left( - \frac{1}{2}+ \frac{3}{4}a \frac{p_{y}}{\hbar}+ \frac{3}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}}  + \frac{9}{16}a^{2} \frac{p_{x}^{2}}{\hbar^{2}} \right)+4\left(  \frac{1}{4}+ \frac{9}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}}- \frac{3}{4}a \frac{p_{y}}{\hbar}- \frac{3}{16}a^{2} \frac{p_{y}^{2}}{\hbar^{2}} \right) \\
 & = \frac{9}{4}a^{2} \frac{p^{2}}{\hbar^{2}}
\end{align}$$
Then the dispersion is linear:
$$E\approx \epsilon_{0}\pm |t| \frac{3}{2} \frac{a}{\hbar}|p|$$
Due to the symmetry of the bands, the expansion near other K points should yield the same result.
# Problem 2
## (1)

The unit cell in real space is a triangular lattice with length $2a$. The unit vectors are:
$$\mathbf{a}_{1}= 2a  \hat{\mathbf{x}},\ \mathbf{a}_{2}=a  \hat{\mathbf{x}}+ \sqrt{ 3 }a  \hat{\mathbf{y}}$$
## (2)

The reciprocal lattice is also a triangular lattice. We find its unit vectors by:
$$\begin{align}
\mathbf{b}_{1}= \frac{2\hat{\pi}\mathbf{z}\times \mathbf{a}_{2}}{\mathbf{a}_{1}\cdot(\mathbf{z}\times \mathbf{a}_{2})}= \frac{2\pi}{\sqrt{ 3 }a}  \hat{\mathbf{y}},\ \mathbf{b}_{2}= \frac{2\pi \mathbf{a}_{1}\times   \hat{\mathbf{z}} }{\mathbf{a}_{2}\cdot(\mathbf{a}_{1}\times  \hat{\mathbf{z}})}= \frac{\pi}{a}  \hat{\mathbf{x}}+  \frac{\pi}{\sqrt{ 3 }a}  \hat{\mathbf{y}}
\end{align}$$
## (3)
![[749e65f5ccd64de180bd177d6f23949f.jpg|centering|300]]
$$\begin{align}
 & M=\left(  \frac{1}{2}, \frac{1}{2} \right),\ K=\left(  \frac{1}{3}, \frac{2}{3} \right) \\
 & M^{'}=\left( 0, \frac{1}{2} \right),\ K^{'}=\left( - \frac{1}{3}, \frac{1}{3} \right) \\
 & M^{''}=\left( - \frac{1}{2},0 \right),\ K^{''}=\left( - \frac{2}{3},- \frac{1}{3} \right)
\end{align}$$
## (4)

There are three inequivalent atoms within a unit cell of a Kagome lattice. Name them as A, B, C. Their nearest neighbors vectors are denoted by $\boldsymbol{\delta}_{A},\ \boldsymbol{\delta}_{B},\ \boldsymbol{\delta}_{C}$. 
![[3b3d2ee9a8c29f054866dfd1dbe29001.jpg|centering|500]]
Then similar to problem 1, we write down the hamiltonian:
$$H= \epsilon_{0}\sum_{n} \ket{\mathbf{R}^{A}_{n}} \bra{\mathbf{R}^{A}_{n}} +\sum_{n,\boldsymbol{\delta}_{A}}(-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{A}} \bra{\mathbf{R}^{A}_{n}} +(A\leftrightarrow B)+(A\leftrightarrow C)$$
We guess the eigenfunction: $\ket{\phi_{\mathbf{k}}}=\sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\ket{\mathbf{R}^{B}_{m}}+\beta_{c} e^{i\mathbf{k}\cdot \mathbf{R}^{C}_{m}}\ket{\mathbf{R}^{C}_{m}})$
Write down the Schrodinger's equation $H\ket{\phi_{\mathbf{k}}}=E\ket{\phi_{\mathbf{k}}}$. The LHS gives:
$$\begin{align}
H\ket{\phi_{\mathbf{k}}}   = &  \sum_{m}\epsilon_{0}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}} +\sum_{m,\boldsymbol{\delta}_{A}} \ket{\mathbf{R}^{A}_{m}+\boldsymbol{\delta}_{A}} \beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}+(A\leftrightarrow B)+(A\leftrightarrow C) \\
 = &  \sum_{m}\epsilon_{0}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}} + \sum_{m,\boldsymbol{\delta}_{A}}(-t)\ket{\mathbf{R}^{B}_{m}} \beta_{A}e^{i\mathbf{k}\cdot(\mathbf{R}^{B}_{m}-\boldsymbol{\delta}_{A})}+ \sum_{m,\boldsymbol{\delta}_{A}}(-t)\ket{\mathbf{R}^{C}_{m}} \beta_{A}e^{i\mathbf{k}\cdot (\mathbf{R}^{C}_{m}-\boldsymbol{\delta}_{A})} \\
 & +\sum_{m}\epsilon_{0}\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\ket{\mathbf{R}^{B}_{m}} + \sum_{m,\boldsymbol{\delta}_{B}}(-t)\ket{\mathbf{R}^{C}_{m}} \beta_{B}e^{i\mathbf{k}\cdot(\mathbf{R}^{C}_{m}-\boldsymbol{\delta}_{B})}+ \sum_{m,\boldsymbol{\delta}_{B}}(-t)\ket{\mathbf{R}^{A}_{m}} \beta_{B}e^{i\mathbf{k}\cdot (\mathbf{R}^{A}_{m}-\boldsymbol{\delta}_{B})} \\
  & +\sum_{m}\epsilon_{0}\beta_{C}e^{i\mathbf{k}\cdot \mathbf{R}^{C}_{m}}\ket{\mathbf{R}^{C}_{m}} + \sum_{m,\boldsymbol{\delta}_{C}}(-t)\ket{\mathbf{R}^{A}_{m}} \beta_{C}e^{i\mathbf{k}\cdot(\mathbf{R}^{A}_{m}-\boldsymbol{\delta}_{C})}+ \sum_{m,\boldsymbol{\delta}_{C}}(-t)\ket{\mathbf{R}^{B}_{m}} \beta_{C}e^{i\mathbf{k}\cdot (\mathbf{R}^{B}_{m}-\boldsymbol{\delta}_{C})} 
\end{align}$$
The RHS is just:
$$E\ket{\phi_{\mathbf{k}}} =E\sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\ket{\mathbf{R}^{B}_{m}}+\beta_{c} e^{i\mathbf{k}\cdot \mathbf{R}^{C}_{m}}\ket{\mathbf{R}^{C}_{m}})$$
Due to the linear independence of the basis kets, we have:
$$\begin{align}
 & E\beta_{A}=\epsilon_{0}\beta_{A}-t\sum_{\boldsymbol{\delta}_{B}}\beta_{B}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{B}}-t\sum_{\boldsymbol{\delta}_{C}}\beta_{C}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{C}} \\
 & E\beta_{B}=\epsilon_{0}\beta_{B}-t\sum_{\boldsymbol{\delta}_{C}}\beta_{C}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{C}}-t\sum_{\boldsymbol{\delta}_{A}}\beta_{A}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{A}} \\
& E\beta_{C}=\epsilon_{0}\beta_{C}-t\sum_{\boldsymbol{\delta}_{A}}\beta_{A}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{A}}-t\sum_{\boldsymbol{\delta}_{B}}\beta_{B}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{B}}
\end{align}$$
in which
$$\begin{align}
 & \boldsymbol{\delta}_{A}\in \left\{  \frac{1}{2}a   \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}},\ \frac{1}{2}a  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a \hat{\mathbf{y}},\ - \frac{1}{2}a  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}},\  - \frac{1}{2}a \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}}  \right\} \\
 & \boldsymbol{\delta}_{B}\in \left\{  a \hat{\mathbf{x}}, \frac{1}{2}a \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}  \hat{\mathbf{y}},\ -a  \hat{\mathbf{x}},\ - \frac{1}{2}a  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}  \hat{\mathbf{y}}  \right\} \\
 & \boldsymbol{\delta}_{C}\in \left\{  a  \hat{\mathbf{x}},\  \frac{1}{2}a \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}},\ -a  \hat{\mathbf{x}},\ - \frac{1}{2}a  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}}  \right\}
\end{align}$$





### Matrix diagonalization

The four vectors listed under each \(\boldsymbol{\delta}_{A,B,C}\) describe the four nearest neighbors of the corresponding site. In each term of the three coupled equations above, we use the two vectors that connect the two sublattices appearing in that term. Thus, the two vectors used in a particular sum are opposite to one another, and their phase factors give a cosine. In the expressions below, the factor \(a\) is included in the \(y\)-components of \(\boldsymbol{\delta}_{B}\) for dimensional consistency.

In the first equation, the \(\boldsymbol{\delta}_{B}\) vectors connecting \(B\) to \(A\) are
$$
\frac{a}{2}\hat{\mathbf{x}}-\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
\qquad
-\frac{a}{2}\hat{\mathbf{x}}+\frac{\sqrt{3}a}{2}\hat{\mathbf{y}}.
$$
Therefore,
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{B}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{B}}
&=e^{-i\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{-i\left(-\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}\\
&=e^{-i\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{i\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}\\
&=2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right).
\end{align}
$$

The \(\boldsymbol{\delta}_{C}\) vectors connecting \(C\) to \(A\) are
$$
\frac{a}{2}\hat{\mathbf{x}}+\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
\qquad
-\frac{a}{2}\hat{\mathbf{x}}-\frac{\sqrt{3}a}{2}\hat{\mathbf{y}}.
$$
Thus,
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{C}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{C}}
&=e^{-i\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{-i\left(-\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}\\
&=e^{-i\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{i\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}\\
&=2\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right).
\end{align}
$$

For the second equation, the \(\boldsymbol{\delta}_{C}\) vectors connecting \(C\) to \(B\) are \(a\hat{\mathbf{x}}\) and \(-a\hat{\mathbf{x}}\). Hence,
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{C}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{C}}
&=e^{-i a k_x}+e^{-i(-a k_x)}\\
&=e^{-i a k_x}+e^{i a k_x}\\
&=2\cos(a k_x).
\end{align}
$$
The \(\boldsymbol{\delta}_{A}\) vectors connecting \(A\) to \(B\) are
$$
\frac{a}{2}\hat{\mathbf{x}}-\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
\qquad
-\frac{a}{2}\hat{\mathbf{x}}+\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
$$
so
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{A}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{A}}
&=e^{-i\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{-i\left(-\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}\\
&=2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right).
\end{align}
$$

For the third equation, the \(\boldsymbol{\delta}_{A}\) vectors connecting \(A\) to \(C\) are
$$
\frac{a}{2}\hat{\mathbf{x}}+\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
\qquad
-\frac{a}{2}\hat{\mathbf{x}}-\frac{\sqrt{3}a}{2}\hat{\mathbf{y}},
$$
and therefore
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{A}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{A}}
&=e^{-i\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{-i\left(-\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}\\
&=2\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right).
\end{align}
$$
The \(\boldsymbol{\delta}_{B}\) vectors connecting \(B\) to \(C\) are \(a\hat{\mathbf{x}}\) and \(-a\hat{\mathbf{x}}\), giving
$$
\begin{align}
\sum_{\boldsymbol{\delta}_{B}}e^{-i\mathbf{k}\cdot\boldsymbol{\delta}_{B}}
&=e^{-i a k_x}+e^{-i(-a k_x)}\\
&=2\cos(a k_x).
\end{align}
$$

Substituting these sums into the three equations already obtained gives
$$
\begin{align}
E\beta_A
&=\epsilon_0\beta_A
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)\beta_B
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\beta_C,\\
E\beta_B
&=\epsilon_0\beta_B
-2t\cos(a k_x)\beta_C
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)\beta_A,\\
E\beta_C
&=\epsilon_0\beta_C
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\beta_A
-2t\cos(a k_x)\beta_B.
\end{align}
$$

Therefore, the matrix equation is
$$
E
\begin{pmatrix}
\beta_A\\
\beta_B\\
\beta_C
\end{pmatrix}
=
\begin{pmatrix}
\epsilon_0
&
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
&
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\\
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
&
\epsilon_0
&
-2t\cos(a k_x)
\\
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
&
-2t\cos(a k_x)
&
\epsilon_0
\end{pmatrix}
\begin{pmatrix}
\beta_A\\
\beta_B\\
\beta_C
\end{pmatrix}.
$$

For a nonzero solution, the determinant of the matrix on the right minus \(E I\) must vanish:
$$
\begin{align}
0
&=\det
\begin{pmatrix}
\epsilon_0-E
&
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
&
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\\
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
&
\epsilon_0-E
&
-2t\cos(a k_x)
\\
-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
&
-2t\cos(a k_x)
&
\epsilon_0-E
\end{pmatrix}\\
&=(\epsilon_0-E)
\left[(\epsilon_0-E)^2-4t^2\cos^2(a k_x)\right]\\
&\quad
-\left[-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)\right]
\left[
-2t\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)(\epsilon_0-E)\right.\\
&\qquad\left.
-4t^2\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\cos(a k_x)
\right]\\
&\quad
+\left[-2t\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\right]
\left[
4t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)\cos(a k_x)\right.\\
&\qquad\left.
+2t(\epsilon_0-E)\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\right]\\
&=(\epsilon_0-E)^3\\
&\quad
-4t^2(\epsilon_0-E)\left[
\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2(a k_x)
\right]\\
&\quad
-16t^3\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x).
\end{align}
$$

Expanding the powers of \((\epsilon_0-E)\), this is the following cubic equation directly in \(E\):
$$
\begin{align}
0
&=-E^3+3\epsilon_0E^2
-\left[3\epsilon_0^2-4t^2\left\{
\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2(a k_x)
\right\}\right]E\\
&\quad
+\epsilon_0^3
-4\epsilon_0t^2\left\{
\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2(a k_x)
\right\}\\
&\quad
-16t^3\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x).
\end{align}
$$

We now simplify the trigonometric part directly:
$$
\begin{align}
&\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\\
&=1+\cos(a k_x)\cos(\sqrt{3}a k_y),
\end{align}
$$
because
$$
2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
=\cos(a k_x)+\cos(\sqrt{3}a k_y).
$$
Therefore,
$$
\begin{align}
&\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2(a k_x)\\
&=1+\cos(a k_x)\cos(\sqrt{3}a k_y)+\cos^2(a k_x),
\end{align}
$$
while
$$
\begin{align}
&2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)\\
&=\cos^2(a k_x)+\cos(a k_x)\cos(\sqrt{3}a k_y).
\end{align}
$$
Thus,
$$
\begin{align}
&\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2(a k_x)\\
&=1+2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x).
\end{align}
$$

Substituting this identity into the determinant equation and factoring gives
$$
\begin{align}
0
&=(\epsilon_0-E)^3
-4t^2(\epsilon_0-E)
-8t^2(\epsilon_0-E)
\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)\\
&\quad
-16t^3\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)\\
&=\left[
\epsilon_0-E+2t
\right]\\
&\quad\times\left[
(\epsilon_0-E)^2-2t(\epsilon_0-E)
-8t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)
\right].
\end{align}
$$

Therefore, the three solutions are obtained from the two factors:
$$
\epsilon_0-E+2t=0
\qquad\Longrightarrow\qquad
E_1=\epsilon_0+2t,
$$
and
$$
\begin{align}
0
&=(\epsilon_0-E)^2-2t(\epsilon_0-E)
-8t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x).
\end{align}
$$
Solving this quadratic equation for \(\epsilon_0-E\) gives
$$
\begin{align}
\epsilon_0-E
&=\frac{2t\pm\sqrt{4t^2
+32t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)}}{2}\\
&=t\pm t\sqrt{1+8\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)}.
\end{align}
$$
Consequently, the two dispersive bands are
$$
\begin{align}
E_{\pm}(\mathbf{k})
&=\epsilon_0-t\pm t\sqrt{
1+8\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)
}.
\end{align}
$$
The full diagonalized spectrum is therefore
$$
\boxed{
E_1(\mathbf{k})=\epsilon_0+2t,\qquad
E_{\pm}(\mathbf{k})=\epsilon_0-t\pm t\sqrt{
1+8\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)
}
}.
$$
The first band is independent of \(\mathbf{k}\), so it is the Kagome flat band. For \(t>0\), the other two bands are the dispersive bands.
