# Problem 1
## (a)

The unit cell in the real space is a triangular lattice with length $\sqrt{ 3 }a$. The lattice unit vectors are:
$$\mathbf{a}_{1}= \frac{{ 3 }}{2}  a\hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a \hat{\mathbf{y}},\ \mathbf{a}_{2}= \frac{3}{2}  \hat{\mathbf{x}}a- \frac{\sqrt{ 3 }}{2} a \hat{\mathbf{y}}$$
![[966c66f45a73572375ad6f7a7180ea17.jpg|centering|300]]
The reciprocal lattice vectors are given by:
$$\mathbf{b}_{1}=  \frac{2\pi\mathbf{z}\times \mathbf{a}_{2}}{\mathbf{a}_{1}\cdot(\mathbf{z}\times \mathbf{a}_{2})}= \frac{2\pi}{3a}  \hat{\mathbf{x}}+ \frac{2}{3a}\sqrt{ 3 }{\pi}  \hat{\mathbf{y}},\ \mathbf{b}_{2}= \frac{2\pi \mathbf{a}_{1}\times \mathbf{z}}{\mathbf{a}_{2}\cdot(\mathbf{a}_{1}\times \mathbf{a})}= \frac{2\pi}{3a}  \hat{\mathbf{x}}- \frac{2}{3a}\sqrt{ 3 }\pi   \hat{\mathbf{y}}$$
## (b)

![[4cfb9e8f8a7ee939439ab908c0e40a83.jpg|centering|300]]
We have:
$$\begin{align}
 M  =  & \left( \frac{1}{2}, \frac{1}{2}  \right),\ \left( 0 , \frac{1}{2}  \right),\ \left( - \frac{1}{2},0 \right) \\
 & \left( - \frac{1}{2},- \frac{1}{2} \right),\ \left( 0, - \frac{1}{2} \right),\ \left(  \frac{1}{2}, 0 \right)
\end{align}$$
$$\begin{align}
K & = \left( \frac{1}{2}, \frac{5}{6} \right),\ \left( - \frac{5}{6},- \frac{1}{3} \right),\ \left( \frac{1}{6},- \frac{1}{3} \right) \\
K^{'} & = \left( - \frac{1}{3}, \frac{1}{3} \right),\ \left( - \frac{1}{3},- \frac{5}{6} \right),\ \left( \frac{5}{6}, \frac{1}{3} \right)
\end{align}$$
## (d)

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
$$E= \epsilon_{0}\pm t \sqrt{  1+4 \cos\left(  \frac{3a}{2}k_{x} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)}$$
From $\Gamma\rightarrow M$, we have $k_{y}=0,\ 0\leq k_{x}\leq \frac{2\pi}{3a}$:
$$E= \epsilon_{0}\pm t\sqrt{ 1+4\cos\left(  \frac{3a}{2}k_{x} \right)+4 }$$
![[e1e6a87f5b7d48f7973e2755bab38e23.jpg|centering|300]]
From $\Gamma\rightarrow K$, we have $k_{x}=\sqrt{ 3 }k_{y},\ 0\leq k_{y}\leq \frac{2\pi}{3\sqrt{ 3 }a}$:
$$E= \epsilon_{0}\pm t\sqrt{ 1+4\cos\left(  \frac{3\sqrt{ 3 }a}{2}k_{y} \right)\cos\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4\cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right) }$$
![[53ec8da443c114a6fc59ad9b41bbe974.jpg|centering|300]]
Observe that each atom contribute one electron, and there are $2N$ atoms in total. Know that the number of available sites in the Brillouin zone is equal to the number of unit cells which is $N$, and each site can hold two electrons due to spin degeneracy. We conclude that electrons must spread the area of the Brillouin zone. Note that the maximum energy of the lower band is achieved at K, so we take $\epsilon_{F}=\epsilon_{0}$ so that the lower band is fully occupied. 
## (e)

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
$$E\approx \epsilon_{0}\pm t \frac{3}{2} \frac{a}{\hbar}|p|$$
Similarly, we can show that the expansion near other K points should yield the same result.
# Problem 2
## (a)

The unit cell in real space is a triangular lattice with length $2a$. The unit vectors are:
$$\mathbf{a}_{1}= 2a  \hat{\mathbf{x}},\ \mathbf{a}_{2}=a  \hat{\mathbf{x}}+ \sqrt{ 3 }a  \hat{\mathbf{y}}$$
![[b8dc30937e6df70f00830668d26a2180.jpg|centering|300]]
## (b)

The reciprocal lattice is also a triangular lattice. We find its unit vectors by:
$$\begin{align}
\mathbf{b}_{1}= \frac{2\hat{\pi}\mathbf{z}\times \mathbf{a}_{2}}{\mathbf{a}_{1}\cdot(\mathbf{z}\times \mathbf{a}_{2})}= \frac{2\pi}{\sqrt{ 3 }a}  \hat{\mathbf{y}},\ \mathbf{b}_{2}= \frac{2\pi \mathbf{a}_{1}\times   \hat{\mathbf{z}} }{\mathbf{a}_{2}\cdot(\mathbf{a}_{1}\times  \hat{\mathbf{z}})}= \frac{\pi}{a}  \hat{\mathbf{x}}+  \frac{\pi}{\sqrt{ 3 }a}  \hat{\mathbf{y}}
\end{align}$$
## (c)
![[bf3540103208f70e17eb809b289a4fa5.jpg|centering|300]]
We have:
$$\begin{align}
 M  =  & \left( \frac{1}{2}, \frac{1}{2}  \right),\ \left( 0 , \frac{1}{2}  \right),\ \left( - \frac{1}{2},0 \right) \\
 & \left( - \frac{1}{2},- \frac{1}{2} \right),\ \left( 0, - \frac{1}{2} \right),\ \left(  \frac{1}{2}, 0 \right)
\end{align}$$
$$\begin{align}
K & = \left( \frac{1}{2}, \frac{5}{6} \right),\ \left( - \frac{5}{6},- \frac{1}{3} \right),\ \left( \frac{1}{6},- \frac{1}{3} \right) \\
K^{'} & = \left( - \frac{1}{3}, \frac{1}{3} \right),\ \left( - \frac{1}{3},- \frac{5}{6} \right),\ \left( \frac{5}{6}, \frac{1}{3} \right)
\end{align}$$
## (d)

There are three inequivalent atoms within a unit cell of a Kagome lattice. Name them as A, B, C. Their nearest neighbors vectors are

$$\begin{align}
 & \boldsymbol{\delta}_{BA}\in \left\{   \frac{1}{2}a  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a \hat{\mathbf{y}},\ - \frac{1}{2}a  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a  \hat{\mathbf{y}}  \right\} \\
 & \boldsymbol{\delta}_{CA}\in \left\{  \frac{1}{2}a  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2}a \hat{\mathbf{y}},\ - \frac{1}{2}a  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}a \hat{\mathbf{y}}  \right\} \\
 & \boldsymbol{\delta}_{BC}\in \{ \hat{a}\mathbf{x},  -\hat{a}\mathbf{x} \}
\end{align}$$
Other nearest neighbor vectors are defined in the opposite direction. (e.g. $\boldsymbol{\delta}_{BA}=-\boldsymbol{\delta}_{AB}$.)
![[b5198f3ef6a0e71a1de9fe6fa80ab5c4.jpg|centering|400]]
Then similar to problem 1, we write down the hamiltonian:
$$H= \sum_{\text{cyc}(A,B,C)}\left( \epsilon_{0}\sum_{n} \ket{\mathbf{R}^{A}_{n}} \bra{\mathbf{R}^{A}_{n}} +\sum_{n,\boldsymbol{\delta}_{AB}}(-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AB}} \bra{\mathbf{R}^{A}_{n}} +\sum_{n,\boldsymbol{\delta}_{AC}}(-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AC}} \bra{\mathbf{R}^{A}_{n}} \right) $$
Here $\sum_{\text{cyc}(A,B,C)}$ represents the cyclic sum by summing all cyclic permutations of $(A,B,C)$. We guess the eigenfunction: $\ket{\phi_{\mathbf{k}}}=\sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\ket{\mathbf{R}^{B}_{m}}+\beta_{c} e^{i\mathbf{k}\cdot \mathbf{R}^{C}_{m}}\ket{\mathbf{R}^{C}_{m}})$
Write down the Schrodinger's equation $H\ket{\phi_{\mathbf{k}}}=E\ket{\phi_{\mathbf{k}}}$. The LHS gives:
$$\begin{align}
H\ket{\phi_{\mathbf{k}}} = &  \sum_{\text{cyc}(A,B,C)}\left( \sum_{m}\epsilon_{0}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}} + \sum_{m,\boldsymbol{\delta}_{AB}}(-t)\ket{\mathbf{R}^{A}_{m}+\boldsymbol{\delta}_{AB}} \beta_{A} e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}+ \sum_{m,\boldsymbol{\delta}_{AC}}(-t)\ket{\mathbf{R}^{A}_{m}+\boldsymbol{\delta}_{AC}} \beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}} \right)   \\

 = &  \sum_{\text{cyc}(A,B,C)}\left(\sum_{m}\epsilon_{0}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}} + \sum_{m,\boldsymbol{\delta}_{BA}}(-t)\ket{\mathbf{R}^{B}_{m}} \beta_{A}e^{i\mathbf{k}\cdot(\mathbf{R}^{B}_{m}+\boldsymbol{\delta}_{BA})}+ \sum_{m,\boldsymbol{\delta}_{CA}}(-t)\ket{\mathbf{R}^{C}_{m}} \beta_{A}e^{i\mathbf{k}\cdot (\mathbf{R}^{C}_{m}+\boldsymbol{\delta}_{CA})}  \right)
\end{align}$$
The RHS is just:
$$E\ket{\phi_{\mathbf{k}}} =E\sum_{m}(\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{m}}\ket{\mathbf{R}^{A}_{m}}+\beta_{B}e^{i\mathbf{k}\cdot \mathbf{R}^{B}_{m}}\ket{\mathbf{R}^{B}_{m}}+\beta_{c} e^{i\mathbf{k}\cdot \mathbf{R}^{C}_{m}}\ket{\mathbf{R}^{C}_{m}})$$
Due to the linear independence of the basis kets, we have:
$$\begin{align}
 & E\beta_{A}=\epsilon_{0}\beta_{A}-t\sum_{\boldsymbol{\delta}_{BA}}\beta_{BA}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{BA}}-t\sum_{\boldsymbol{\delta}_{CA}}\beta_{C}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{CA}} \\
 & E\beta_{B}=\epsilon_{0}\beta_{B}-t\sum_{\boldsymbol{\delta}_{CB}}\beta_{C}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{CB}}-t\sum_{\boldsymbol{\delta}_{AB}}\beta_{A}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AB}} \\
& E\beta_{C}=\epsilon_{0}\beta_{C}-t\sum_{\boldsymbol{\delta}_{AC}}\beta_{A}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AC}}-t\sum_{\boldsymbol{\delta}_{BC}}\beta_{B}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{BC}}
\end{align}$$
We have:
$$\begin{align}
\gamma_{BA  } & = \sum_{\boldsymbol{\delta}_{BA}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{BA}} \\
&=e^{i\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{i\left(-\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}\\
&=2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\end{align}$$
$$\begin{align}
\gamma_{CA} & =\sum_{\boldsymbol{\delta}_{CA}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{CA}} \\
&=e^{i\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)}
 +e^{i\left(-\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)}\\

&=2\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\end{align}$$
$$\begin{align}
\gamma_{BC} & = \sum_{\boldsymbol{\delta}_{BC}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{BC}} \\
 & = e^{iak_{x}}+e^{-iak_{x}} \\
 & = 2\cos ak_{x}
\end{align}$$
Notice the $\gamma$'s have spatial inversion symmetry. Then $\gamma_{AB}(\mathbf{k})=\gamma_{BA}(-\mathbf{k})=\gamma_{BA}(\mathbf{k})$. Similar for other $\gamma$'s. 

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
\end{pmatrix}
$$

We derive the eigen equation:
$$
\begin{align}
0
&=
\begin{vmatrix}
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
\end{vmatrix}\\
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
\cos(a k_x)
\end{align}
$$
$$
\begin{align}
\implies0
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
\cos(a k_x)
\end{align}
$$
Observe that:
$$
\begin{align}
&\cos^2\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
+\cos^2\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)\\ & =  \frac{1+\cos(ak_{x}-\sqrt{ 3 }ak_{y})}{2}+ \frac{1+ \cos(ak_{x}+\sqrt{ 3 }ak_{y})}{2} \\

&=1+\cos(a k_x)\cos(\sqrt{3}a k_y)
\end{align}
$$
while
$$
\begin{align}
&2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)\\
&=\cos^2(a k_x)+\cos(a k_x)\cos(\sqrt{3}a k_y)
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
\cos(a k_x)
\end{align}
$$
Then the eigen equation turns into:
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
&=\left(
\epsilon_0-E+2t
\right)
\quad\left[
(\epsilon_0-E)^2-2t(\epsilon_0-E)
-8t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)
\right]
\end{align}
$$
Therefore, the three solutions are:
$$
\epsilon_0-E+2t=0
\qquad\Longrightarrow\qquad
E=\epsilon_0+2t
$$
And
$$
\begin{align}
 & 0
=(\epsilon_0-E)^2-2t(\epsilon_0-E)
-8t^2\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x) \\
\implies & \epsilon_{0}-E= t\pm t\sqrt{1+8\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)} \\
\implies & E=\epsilon_{0}-t\pm t\sqrt{1+8\cos\left(\frac{a k_x}{2}-\frac{\sqrt{3}a k_y}{2}\right)
\cos\left(\frac{a k_x}{2}+\frac{\sqrt{3}a k_y}{2}\right)
\cos(a k_x)}
\end{align}
$$
The top band is clearly a flat band. From $\Gamma\rightarrow M$, we have that $k_{x}=\sqrt{ 3 }k_{y},\ 0\leq k_{y}\leq \frac{\pi}{2\sqrt{ 3 }a}$. The lower two bands are:
$$E=\epsilon_{0}-t\pm t \sqrt{ 1+ 8\cos ^{2} (\sqrt{ 3 }ak_{y}) }$$
The drawing is:![[246446d327258d74173034a0d77be130.jpg|centering|300]]
From $\Gamma\rightarrow K$, we have that $k_{y}=0, 0\leq k_{x}\leq \frac{2\pi}{3a}$. The lower two bands are:
$$E= \epsilon_{0}-t\pm t\sqrt{ 1+8 \cos ^{2}\left(  \frac{ak_{x}}{2} \right)\cos(ak_{x}) }=\epsilon_{0}-t\pm t\sqrt{ 1+ 4\cos ^{2}(ak_{x})+4\cos(ak_{x}) }$$
The drawing is:
![[a5847da500f7c1d936aaa49da07056d6.jpg|centering|300]]The band energies at M point are $\epsilon_{0}+2t,\ \epsilon_{0},\ \epsilon_{0}-2t$ respectively. The band energies at K point are $\epsilon_{0}+2t,\ \epsilon_{0}-t$ respectively.
## (e)

As derived above, the dispersion of the flat band is $E=\epsilon_{0}+2t$.

# Problem 3
## (a)

The unit cell is a cube with length $2a$. The unit vectors are given by:
$$\mathbf{a}_{1}= 2a  \hat{\mathbf{x}},\ \mathbf{a}_{2}= 2a  \hat{\mathbf{y}},\ \mathbf{a}_{3}=2a  \hat{\mathbf{z}}$$
![[924d827a37bd1cbec04e5e7c75061c7c.jpg|centering|400]]
## (b)

Since the three lattice vectors in the real space are already orthogonal to each other, the length of the reciprocal lattice vectors is just $\frac{2\pi}{2a}= \frac{\pi}{a}$. Clearly, they should be parallel to their counterparts in the real space. We have:
$$\mathbf{b}_{1}= \frac{\pi}{a}  \hat{\mathbf{x}},\ \mathbf{b}_{2}= \frac{\pi}{a}  \hat{\mathbf{y}},\ \mathbf{b}_{3}= \frac{\pi}{a}  \hat{\mathbf{z}}$$
![[0629a4b90aaaf686dc3e9be04e69dda4.jpg|centering|300]]
The high symmetry points are:
$$\begin{align}
 & \Gamma=(0,0,0),\ A=\left( 0,0, \frac{1}{2}  \right),\ X=\left(  \frac{1}{2} ,0,0 \right) \\
 & M=\left(  \frac{1}{2} , \frac{1}{2} ,0 \right),\ H=\left(  \frac{1}{2} , \frac{1}{2} , \frac{1}{2} \right)  
\end{align}$$
## (c)

Define the nearest neighbor vectors:
$$\begin{align}
 & \boldsymbol{\delta}_{AB}\in \{  a \hat{\mathbf{z}},\ -a \hat{\mathbf{z}} \} \\
 & \boldsymbol{\delta}_{AC}\in \{ a \hat{\mathbf{y}},-a  \hat{\mathbf{y}} \} \\
 & \boldsymbol{\delta}_{AD}\in \{ a \hat{\mathbf{x}},-\hat{a}\mathbf{x} \} \\

\end{align}$$
![[fe8263df5cbac56b02cb4e291f09043f.jpg|centering|300]]
Similar to problem 2, we can write down the hamiltonian:
$$\begin{align}
H = &   \epsilon_{0}\sum_{n}\ket{\mathbf{R}^{A}_{n}} \bra{\mathbf{R}^{A}_{n}} +\sum_{n,\boldsymbol{\delta}_{AB}}(-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AB}} \bra{\mathbf{R}^{A}_{n}} + \sum_{n,\boldsymbol{\delta}_{AC}}(-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AC}} \bra{\mathbf{R}^{A}_{n}} +\sum_{n,\boldsymbol{\delta}_{AD}} (-t)\ket{\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AD}} \bra{\mathbf{R}^{A}_{n}}  \\
 & + \left[  \epsilon_{0}\sum_{n}\ket{\mathbf{R}^{B}_{n}} \bra{\mathbf{R}^{B}_{n}} + \sum_{n,\boldsymbol{\delta}_{BA}}(-t)|\mathbf{R}^{B}_{n}+\boldsymbol{\delta}_{BA}\rangle\bra{\mathbf{R}^{B}_{n}}  +(B\leftrightarrow C)+(C\leftrightarrow D)\right]
\end{align}$$
We guess the eigen function:
$$\ket{\phi_{\mathbf{k}}} =\sum_{n}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}} +(A\leftrightarrow B)+(A\leftrightarrow C)+(A\leftrightarrow D)$$
Substitute into the Schrodinger's equation to get:
$$\begin{align}
H\ket{\phi_{\mathbf{k}}}  = &  \epsilon_{0}\sum_{n}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}} + \sum_{n,\boldsymbol{\delta}_{BA}}(-t)\beta_{A}\ket{\mathbf{R}^{B}_{n}} e^{i\mathbf{k}\cdot(\mathbf{R}^{B}_{n}+\boldsymbol{\delta}_{BA})}+\sum_{n,\boldsymbol{\delta}_{CA}}(-t)\beta_{A}\ket{\mathbf{R}^{C}_{n}} e^{i\mathbf{k}\cdot(\mathbf{R}^{C}_{n}+\boldsymbol{\delta}_{CA})}+ \sum_{n,\boldsymbol{\delta}_{DA}}(-t)\beta_{A}\ket{\mathbf{R}^{D}_{n}} e^{i\mathbf{k}\cdot(\mathbf{R}^{D}_{n}+\boldsymbol{\delta}_{DA})} \\
 & + \left[ \epsilon_{0} \sum_{n}\beta_{B}\ket{\mathbf{R}^{B}_{n}}  +\sum_{n,{\boldsymbol{\delta}_{AB}}} (-t)\beta_{B} \ket{\mathbf{R}^{A}_{n}} e^{i\mathbf{k}\cdot(\mathbf{R}^{A}_{n}+\boldsymbol{\delta}_{AB})}+(B\leftrightarrow C)+(C\leftrightarrow D) \right]
\end{align}$$
On the other hand:
$$E\ket{\phi_{\mathbf{k}}} =E\left[\sum_{n}\beta_{A}e^{i\mathbf{k}\cdot \mathbf{R}^{A}_{n}}\ket{\mathbf{R}^{A}_{n}} +(A\leftrightarrow B)+(A\leftrightarrow C)+(A\leftrightarrow D)\right]$$
Due to the linear independence of the basis, we get:
$$\begin{align}
 & E\beta_{A}=\epsilon_{0}\beta_{A}-t\sum_{\boldsymbol{\delta}_{AB}}\beta_{B}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AB}}-t\sum_{\boldsymbol{\delta}_{AC}}\beta_{C}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AC}}-t \sum_{\boldsymbol{\delta}_{AD}} \beta_{D}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AD}} \\
 & E \beta_{B}= \epsilon_{0}\beta_{B}-t \sum_{\boldsymbol{\delta}_{BA}}\beta_{A}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{BA}} \\
 & E \beta_{C}=\epsilon_{0}\beta_{C}-t\sum_{\boldsymbol{\delta}_{CA}}\beta_{A}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{CA}} \\
 & E \beta_{D}=\epsilon_{0}\beta_{D}-t\sum_{\boldsymbol{\delta}_{DA}}\beta_{A}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{DA}}
\end{align}$$
We calculate:
$$\begin{align}
\gamma_{AB} & =\sum_{\boldsymbol{\delta}_{AB}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AB}} \\
 & = e^{ik_{z}a}+e^{-ik_{z}a} \\
 & = 2\cos(k_{z}a) \\
\gamma_{AC} & = \sum_{\boldsymbol{\delta}_{AC}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AC}} \\
 & = e^{ik_{y}a}+e^{-ik_{y}a} \\
 & = 2\cos(k_{y}a) \\
 \gamma_{AD} & = \sum_{\boldsymbol{\delta}_{AD}}e^{i\mathbf{k}\cdot\boldsymbol{\delta}_{AD}} \\
 & = e^{ik_{x}a}+e^{-ik_{x}a} \\
 & = 2\cos(k_{x}a)
\end{align}$$
Then we need to solve:
$$\begin{align}
 & \begin{vmatrix}
\epsilon_{0}-E & -2t\cos(k_{z}a) & -2t\cos(k_{y}a) & -2t\cos*k_{x}a &  \\
-2t\cos(k_{z}a) & \epsilon_{0}-E & 0 & 0 \\
-2t\cos(k_{y}a)0 & \epsilon_{0}-E & 0 \\
-2t\cos(k_{x}a) & 0 & 0 & \epsilon_{0}-E
\end{vmatrix}=0 \\
\implies & (\epsilon_{0}-E)^{4} +2t \cos(k_{y}a) (-2t)\cos(k_{z}a)  (\epsilon_{0}-E)^{2}-2t\cos(k_{y}a)(\epsilon_{0}-E)^{2}2t \cos(k_{y}a)-2t\cos(k_{y}a)(\epsilon_{0}-E)^{2}2t\cos (k_{y}a)=0 \\
\implies & (\epsilon_{0}-E)^{4}-4t^{2}(\cos ^{2}(k_{z}a)+\cos ^{2}(k_{y}a)+\cos ^{2}(k_{x}a))(\epsilon_{0}-E)^{2}=0 \\
\end{align}$$
Two solutions are:
$$E=\epsilon_{0}$$
Another two solutions are:
$$\begin{align}
 & (\epsilon_{0}-E)^{2}-4t^{2}(\cos ^{2}(k_{z}a)+\cos ^{2}(k_{y}a)+\cos ^{2}(k_{x}a))=0 \\
\implies & E=\epsilon_{0}\pm 2t \sqrt{ \cos ^{2}(k_{x}a)+\cos ^{2}(k_{y}a)+\cos ^{2}(k_{z}a) }
\end{align}$$
## (d)

For $\Gamma$, $k_{x}=0,\ k_{y}=0$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}\pm 2\sqrt{ 3 }t$$
For X, $k_{x}= \frac{\pi}{2a},\ k_{y}=k_{z}=0$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}\pm 2\sqrt{ 2 }t$$
For M, $k_{x}= \frac{\pi}{2a},\ k_{y}= \frac{\pi}{2a},\ k_{z}=0$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}\pm 2t$$
For L, $k_{x}= \frac{\pi}{2a},\ k_{y}=0,\ k_{z}= \frac{\pi}{2a}$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}\pm 2t$$
For A, $k_{x}=k_{y}=0,\ k_{z}= \frac{\pi}{2a}$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}\pm 2\sqrt{ 2 }t$$
For H, $k_{x}=k_{y}=k_{z}= \frac{\pi}{2a}$. The band energies are:
$$\epsilon_{0},\ \epsilon_{0},\ \epsilon_{0},\ \epsilon_{0}$$
The spaghetti diagram is:
![[508b2c80cf79d3418ac9799d61b9aaad.jpg|centering|500]]
## (e)

As shown in part (c), the energy of the flat bands is $\epsilon_{0}$. 

According to the calculation above, H should be a Dirac point. Let the moment be $\mathbf{k}= \frac{\pi}{2a} \hat{\mathbf{x}}+ \frac{\pi}{2a}  \hat{\mathbf{y}}+ \frac{\pi}{2a}  \hat{\mathbf{z}}+ \frac{\mathbf{p}}{\hbar}$, where $p$ is small. Then we have:
$$\begin{align}
\cos(k_{j}a)\approx-a \frac{p_{j}}{\hbar}
\end{align}$$
Therefore the dispersion of the two bands that are not flat is approximated by:
$$\begin{align}
E & \approx \epsilon_{0}\pm 2t \sqrt{ \left( \frac{a}{\hbar} \right)^{2}(p_{x}^{2}+p_{y}^{2}+p_{z}^{2}) } \\
 &= \epsilon_{0}\pm \frac{2at}{\hbar}p
\end{align}$$
The group velocity is given by:
$$\frac{\partial E}{\partial p}= \pm \frac{2at}{\hbar}$$
Or if you want the group velocity to be a vector, we simply have $\frac{\partial E}{\partial \mathbf{p}}= \pm \frac{2at}{\hbar}  \hat{\mathbf{p}}$.







