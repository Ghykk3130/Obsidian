# Problem 1
## (1)

The unit cell in the real space is a triangular lattice with length $\sqrt{ 3 }a$. The lattice unit vectors are:
$$\mathbf{a}_{1}= \frac{{ 3 }}{2}  \hat{\mathbf{x}}+ \frac{\sqrt{ 3 }}{2} \hat{\mathbf{y}},\ \mathbf{a}_{2}= \frac{3}{2}  \hat{\mathbf{x}}- \frac{\sqrt{ 3 }}{2}  \hat{\mathbf{y}}$$


The reciprocal lattice is also a triangular lattice, but with lattice constant $\frac{2\pi}{\sqrt{ 3 }a}$. Since $\mathbf{b}_{1}$ should be perpendicular to $\mathbf{a}_{2}$, and has a length of $\frac{2\pi}{\sqrt{ 3 }a}$. $\mathbf{b}_{2}$ should be perpendicular to $\mathbf{a}_{1}$, and has a length of $\frac{2\pi}{\sqrt{ 3 }a}$, we have:
$$\mathbf{b}_{1}= \frac{\pi}{\sqrt{ 3 }a}  \hat{\mathbf{x}}+ \frac{\pi}{a}  \hat{\mathbf{y}},\ \mathbf{b}_{2}= \frac{\pi}{\sqrt{ 3 }a} \hat{\mathbf{x}}- \frac{\pi}{a}  \hat{\mathbf{y}}$$
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
\implies & E^{2}-(\epsilon_{0}^{A}+\epsilon_{0}^{B})E+\epsilon_{0}^{A}\epsilon_{0}^{B}-4t^{2}\left(1+ 4\cos\left(  \frac{3a}{2}k_{x} \right)\cos\left( \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4 \cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)  \right)^{2}=0 \\
\implies & E= \frac{\epsilon^{A}_{0}+\epsilon_{0}^{B}}{2}\pm \frac{1}{2}\sqrt{ (\epsilon_{0}^{A}-\epsilon_{0}^{B})^{2}+16t^{2}\left(1+ 4\cos\left(  \frac{3a}{2}k_{x} \right)\cos\left( \frac{\sqrt{ 3 }}{2}ak_{y} \right)+4 \cos ^{2}\left(  \frac{\sqrt{ 3 }}{2}ak_{y} \right)  \right)^{2}}
\end{align}$$



