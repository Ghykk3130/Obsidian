我们假设超导体自由能泛函为：
$$\begin{align}
 F(\psi,\psi ^{*},\mathbf{A})= \int d^{3}r\left[ \frac{\hbar^{2}}{2m^{*}} \left|\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi\right|^{2} +a|\psi|^{2}+ \frac{b}{2}|\psi |^{4}+ \frac{B^{2}}{2\mu_{0}} \right]
\end{align}$$
我们推导Euler-Lagrange方程。将$\psi,\psi ^{*}$视为独立的复标量场。考虑变分$\delta \psi ^{*}$。注意到：
$$\begin{align}
\delta \int d^{3}r\left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi  \right|^{2} & = \int d^{3}r\left( i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\delta\psi ^{*} \cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right) \psi \\
 & = \int d^{3}r i\nabla\delta \psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi- \int d^{3}r \frac{e^{*}\mathbf{A}}{\hbar}\delta \psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi \\
 & =- \int d^{3}r i\delta \psi ^{*} \nabla \cdot\left(- i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi ^{}- \int d^{3}r \frac{e^{*}\mathbf{A}}{\hbar}\delta \psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi\\
 & = \int d^{3}r \delta \psi ^{*}\left( i\nabla+ \frac{e^{*}\mathbf{A}}{\hbar} \right)^{2} \psi ^{}
\end{align}$$
其中我们利用了$\mathbf{v}\cdot \nabla f=\nabla \cdot(f\mathbf{v})-f\nabla \cdot \mathbf{v}$，并且让边界项$\nabla \cdot(f\mathbf{v})$的积分为零。然后：
$$\begin{align}
\delta \int d^{3}r|\psi|^{2}= \int d^{3}r\delta\psi ^{*} \psi
\end{align}$$
然后：
$$\begin{align}
\delta \int d^{3}r |\psi|^{4} & = \delta \int d^{3}r(\psi ^{*}\psi)^{2} \\
 & = \int d^{3}r((\psi ^{*}+\delta \psi ^{*})\psi)^{2}-\int d^{3}r (\psi ^{*}\psi)^{2} \\
 & =2 \int d^{3}r |\psi|^{2}\delta\psi ^{*} \psi
\end{align}$$
于是：
$$\begin{align}
\delta F & = \int d^{3}r \left[ \frac{\hbar^{2}}{2m^{*}} \left( i\nabla+ \frac{e^{*}\mathbf{A}}{\hbar}  \right)^{2}\psi ^{}+a\psi ^{}+b|\psi|^{2}\psi ^{} \right]\delta \psi ^{*}=0
\end{align}$$
我们得到：
$$\begin{align}
\boxed{\frac{\hbar^{2}}{2m^{*}}\left( i\nabla+ \frac{e^{*}\mathbf{A}}{\hbar} \right)^{2}\psi+a\psi+b|\psi|^{2}\psi=0}
\end{align}$$
这称为第一Ginzberg-Landau方程。

接下来考虑变分$\delta \mathbf{A}$。那么：
$$\begin{align}
\delta \int d^{3}r \left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi  \right|^{2} & = \int d^{3}r \left( i\nabla- \frac{e^{*}(\mathbf{A}+\delta \mathbf{A})}{\hbar} \right)\psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}(\mathbf{A}+\delta \mathbf{A})}{\hbar} \right)\psi- \int d^{3}r \left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi  \right|^{2} \\
 & = \int d^{3}r\left( - \frac{e^{*}\delta \mathbf{A}}{\hbar} \right)\psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi+\int d^{3}r\left( i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi ^{*}\cdot\left( - \frac{e^{*}\delta \mathbf{A}}{\hbar} \right)\psi \\
 & = \int d^{3}r\frac{e^{*}\delta \mathbf{A}}{\hbar}\cdot i \psi ^{*} \overset{\leftrightarrow}{\nabla}\psi+ \int d^{3}r \frac{2(e^{*})^{2}}{\hbar^{2}} \mathbf{A}|\psi |^{2}\cdot\delta \mathbf{A}
\end{align}$$
然后：
$$\begin{align}
\delta \int d^{3}r \frac{B^{2}}{2\mu_{0}} & = \int d^{3}r \frac{1}{2\mu_{0}}(\nabla \times(\mathbf{A}+\delta \mathbf{A}))^{2}- \int d^{3}r \frac{1}{2\mu_{0}}(\nabla \times \mathbf{A})^{2} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}(\nabla \times \mathbf{A})\cdot(\nabla \times\delta \mathbf{A}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\mathbf{B}\cdot(\nabla \times\delta \mathbf{A}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\epsilon_{ijk}B_{i}\partial_{j}\delta A_{k} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\partial_{j}(\epsilon_{ijk}B_{i}\delta A_{k})- \int d^{3}r \frac{1}{\mu_{0}}\delta A_{k}\partial_{j}B_{i} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\nabla \cdot(-\mathbf{B}\times\delta \mathbf{A})+\int d^{3}r \frac{1}{\mu_{0}}\delta \mathbf{A}\cdot(\nabla \times \mathbf{B}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\delta \mathbf{A}\cdot(\nabla \times \mathbf{B}) \\
 & = \int d^{3}r \delta \mathbf{A}\cdot \mathbf{j}_{s}
\end{align}$$
于是：
$$\begin{align}
\delta F & =  \frac{\hbar^{2}}{2m^{*}}\left( \int d^{3}r\frac{e^{*}\delta \mathbf{A}}{\hbar}\cdot i \psi ^{*} \overset{\leftrightarrow}{\nabla}\psi+ \int d^{3}r \frac{2(e^{*})^{2}}{\hbar^{2}} \mathbf{A}|\psi |^{2}\cdot\delta \mathbf{A}\right)+\int d^{3}r \delta \mathbf{A}\cdot \mathbf{j}_{s}=0 \\
\implies  & \boxed{\mathbf{j}_{s}=\frac{\hbar e^{*}}{2m^{*}}i \psi ^{}  \overset{\leftrightarrow}{\nabla}\psi ^{*}- \frac{(e^{*})^{2}}{m^{*}}\mathbf{A}|\psi |^{2}}
\end{align}$$
这称为第二Ginzberg-Landau方程。

