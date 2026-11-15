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
这称为第一Landau-Ginzberg方程。

接下来考虑变分$\delta \mathbf{A}$。那么：



