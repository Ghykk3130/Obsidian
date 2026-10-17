# Problem 1
## (a)

$[\phi]=M^{1}$, $[\psi]=M^{3/2}$, $[g]=M^{0}$.
## (b)

$$(\Box-m^{2})\phi=- \frac{\lambda}{2!}\phi^{2}$$
## (c)

$\gamma_{\mu}\gamma^{\mu}=4$, $\gamma_{\mu}\rlap{/}k\gamma^{\mu}=-3 \rlap{/}k$.
## (d)

The label for the four-vector field is $\left( \frac{1}{2}, \frac{1}{2} \right)$. The label for the left-handed Weyl spinor is $\left( \frac{1}{2},0 \right)$。
# Problem 2
## (a)

We have:
$$\begin{align}
U(P)\bar{\psi}(x)\gamma^{\mu}\gamma^{5}\psi(x)U^{-1}(P) & = U\bar{\psi}U^{-1}\gamma^{\mu}\gamma^{5}U \psi U^{-1} \\
 & = \eta_{a}^{*}\bar{\psi}(Px)\gamma^{0}\gamma^{\mu}\gamma^{5}\eta_{a}\gamma^{0}\psi(Px) \\
 & = \bar{\psi}\gamma^{0}\gamma^{\mu}\gamma^{0}\gamma^{0}\gamma^{5}\gamma^{0}\psi \\
 & = -\bar{\psi}(\gamma^{\mu})^{\dagger}\gamma^{5}\psi \\
 & = \left\{ \begin{aligned}
 & -\bar{\psi}\gamma^{\mu}\gamma^{5}\psi,\ \mu=0 \\
 & \bar{\psi}\gamma^{\mu}\gamma^{5}\psi,\ \mu=1,2,3
\end{aligned}\right.
\end{align}$$
We have:
$$\begin{align}
U(P)\bar{\psi}\sigma^{\mu \nu}\psi U^{-1}(P) & = U \bar{\psi} \frac{i}{2}[\gamma^{\mu},\gamma^{\nu}]\psi U^{-1} \\
 & = U \bar{\psi} U ^{-1} \frac{i}{2}[\gamma^{\mu},\gamma^{\nu}]U\psi U^{-1} \\
 & = \eta_{a}^{*} \bar{\psi}(Px) \gamma^{0} \frac{i}{2}[\gamma^{\mu},\gamma^{\nu}] \eta_{a}\gamma^{0}\psi(Px) \\
 & = \bar{\psi} \frac{i}{2}[(\gamma^{\mu} )^{\dagger},(\gamma^{\nu})^{\dagger}]\psi \\
 & = \left\{ \begin{aligned}
 & -\bar{\psi}\sigma^{\mu \nu}\psi,\ \text{one of }\mu,\nu \text{ is temoral, another is spatial} \\
 & \bar{\psi}\sigma^{\mu \nu}\psi,\ \mu,\nu\text{ are both spatial or both temporal}
\end{aligned}\right.
\end{align}$$
## (b)
$$\begin{align}
U(C)\bar{\psi}(x)\gamma^{\mu}\psi(x) U^{-1}(C) & = U \bar{\psi}U^{-1}\gamma^{\mu}U\psi U^{-1} \\
 & = -i(\gamma^{0}\gamma^{2}\psi)^{T}\gamma^{\mu}(-i)(\bar{\psi}\gamma^{0}\gamma^{2})^{T} \\
 & = - \psi^{T}\gamma^{2}\gamma^{0}\gamma^{\mu}\gamma^{2}\gamma^{0}(\bar{\psi})^{T} \\
 & = \psi^{T}\gamma^{2}\gamma^{0}\gamma^{\mu}\gamma^{0}\gamma^{2}(\bar{\psi})^{T} \\
 & = \psi^{T}\gamma^{2}(\gamma^{\mu})^{\dagger}\gamma^{2}(\bar{\psi})^{T}
\end{align}$$
If $\mu$ is temporal, we can show:
$$\begin{align}
\gamma^{2}(\gamma^{0})^{\dagger}\gamma^{2} & = \gamma^{2}\gamma^{0}\gamma^{2} \\
 & = -(\gamma^{2})^{2}\gamma^{0} \\
 & = \gamma^{0} \\
 & = (\gamma^{0})^{T}
\end{align}$$
If $\mu$ is spatial, we can show:
$$\begin{align}
\gamma^{2}(\gamma^{i})^{\dagger}\gamma^{2} & = -\gamma^{2}\gamma^{i}\gamma^{2} \\
 & = -\gamma^{2}(2g^{i 2}-\gamma^{2}\gamma^{i}) \\
 & = \left\{ \begin{aligned}
 & \gamma^{2},\ i=2 \\
 & -\gamma^{i},\ i=1,3
\end{aligned}\right. \\
 & = (\gamma^{i})^{T}
\end{align}$$
Then:
$$\begin{align}
U(C)\bar{\psi}(x)\gamma^{\mu}\psi(x) U^{-1}(C)  & = \psi^{T}(\gamma^{\mu})^{T}(\bar{\psi})^{T} 
\end{align}$$
It's also easy to show that:
$$\begin{align}
\{ \psi_{a}(x),\bar{\psi}_{b}(y) \}_{\text{ET}} & = \bar{\psi}_{b}\psi_{a}+\psi_{a}\bar{\psi}_{b} \\
 & = (\psi ^{\dagger})_{c}(\gamma^{0})_{c b} \psi_{a}+ \psi_{a}(\psi ^{\dagger})_{c }(\gamma^{0})_{cb} \\
 & = \delta(\mathbf{x}-\mathbf{y})\delta_{ac}(\gamma^{0})_{c b} \\
 & = \delta(\mathbf{x}-\mathbf{y})(\gamma^{0})_{ab}
\end{align}$$
Then:
$$\begin{align}
\psi^{T}(\gamma^{\mu})^{T}(\bar{\psi})^{T} & = \psi_{a }(\gamma^{\mu T})_{ a b}(\bar{\psi})_{ b} \\  & =-(\bar{\psi})_{b}(\gamma^{\mu T})_{ab}\psi_{a}  \\
 & =-(\bar{\psi})_{b}(\gamma^{\mu})_{ba }\psi_{a} \\
 & = -\bar{\psi} \gamma^{\mu}\psi_{}
\end{align}$$
Here we adopt normal ordering so that exchanging the field operators give a minus sign.

Similarly, we have:
$$\begin{align}
U(C)\bar{\psi}(x)\gamma^{\mu}\gamma^{5}\psi(x)U^{-1}(C) & = U\bar{\psi}U^{-1}\gamma^{\mu}\gamma^{5} U \psi U^{-1} \\
 & = \psi^{T}\gamma^{2}(\gamma^{0}\gamma^{\mu}\gamma^{0})(\gamma^{0}\gamma^{5}\gamma^{0})\gamma^{2}(\bar{\psi})^{T} \\
 & = -\psi^{T}\gamma^{2}(\gamma^{\mu})^{\dagger}\gamma^{5}\gamma^{2}(\bar{\psi})^{T} \\
 & = \psi^{T}\gamma^{2}(\gamma^{\mu})^{\dagger}\gamma^{2}\gamma^{5}(\bar{\psi})^{T} \\
 & = \psi^{T}(\gamma^{\mu})^{T}\gamma^{5}(\bar{\psi})^{T} \\
 & = \psi_{a}(\gamma^{\mu})_{ba}(\gamma^{5})_{b c}(\bar{\psi})_{c} \\
 & = -(\bar{\psi})_{c}(\gamma^{\mu})_{ba}(\gamma^{5})_{bc}\psi_{a} \\
 & = -(\bar{\psi})_{c}(\gamma^{\mu})_{ba}(\gamma^{5 T})_{cb} \psi_{a} \\
 & = -\bar{\psi} (\gamma^{5})^{T}\gamma^{\mu}\psi_{a} \\
 & = -\bar{\psi}\gamma^{5}\gamma^{\mu}\psi_{} \\
 & = \bar{\psi} \gamma^{\mu}\gamma^{5}\psi
\end{align}$$
## (c)
$$\begin{align}
U(T)i\bar{\psi}(x)\gamma^{5}\psi(x) U^{-1}(T) & = (-i)U\bar{\psi}U^{-1} (\gamma^{5})^{*}U\psi U^{-1} \\
 & = (-i)\bar{\psi}(Tx)\gamma^{3}\gamma^{1}\gamma^{5}\gamma^{1}\gamma^{3}\psi(Tx) \\
 & = (-i)\bar{\psi}\gamma^{3}\gamma^{5}\gamma^{3}\psi \\
 & = -i\bar{\psi}\gamma^{5}\psi(Tx)
\end{align}$$
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T) & = U\bar{\psi}U^{-1}(\gamma^{\mu})^{*}\psi U\psi U^{-1} \\
 & = \bar{\psi}\gamma^{3}\gamma^{1}(\gamma^{\mu})^{*}\gamma^{1}\gamma^{3}  \psi
\end{align}$$
If $\mu=0$, we have:
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T) & = \bar{\psi}\gamma^{3}\gamma^{1}\gamma^{0}\gamma^{1}\gamma^{3}\psi \\
 & = \bar{\psi}\gamma^{0}\gamma^{3}\gamma^{1}\gamma^{1}\gamma^{3}\psi \\
 & = -\bar{\psi}\gamma^{0}\gamma^{3}\gamma^{3}\psi \\
 & = \bar{\psi}\gamma^{0}\psi
\end{align}$$
If $\mu=1$, we have:
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T) & = \bar{\psi}\gamma^{3}\gamma^{1}\gamma^{1}\gamma^{1}\gamma^{3} \psi \\
 & = -\bar{\psi}\gamma^{3}\gamma^{1}\gamma^{3}\psi \\
 & = -\bar{\psi}\gamma^{1}\psi
\end{align}$$
If $\mu=2$, we have:
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T) & = -\bar{\psi}\gamma^{3}\gamma^{1}\gamma^{2}\gamma^{1}\gamma^{3}\psi \\
 & = -\bar{\psi}\gamma^{2}\gamma^{3}\gamma^{1}\gamma^{1}\gamma^{3}\psi \\
 & = \bar{\psi}\gamma^{2}\gamma^{3}\gamma^{3}\psi \\
 & = -\bar{\psi}\gamma^{2}\psi
\end{align}$$
If $\mu=3$, we have:
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T) & = \bar{\psi}\gamma^{3}\gamma^{1}\gamma^{3}\gamma^{1}\gamma^{3}\psi \\
 & = \bar{\psi}\gamma^{1}\gamma^{1}\gamma^{3}\psi \\
 & = -\bar{\psi}\gamma^{3} \psi
\end{align}$$
Then:
$$\begin{align}
U(T)\bar{\psi}\gamma^{\mu}\psi U^{-1}(T)=\left\{\begin{aligned}
& \bar{\psi}\gamma^{\mu}\psi(Tx),\ \mu\text{ temporal}\\
& -\bar{\psi}\gamma^{\mu}\psi(Tx),\ \mu\text{ spatial}
\end{aligned}\right.
\end{align}$$
# Problem 3









