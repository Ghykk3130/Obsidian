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

We have:
$$\begin{align}
U(C)U(P)U(T)\psi(x)U^{\dagger}(T)U^{\dagger}(P)U^{\dagger}(C) & = U(C)U(P)\gamma^{1}\gamma^{3}\psi(Tx)U^{\dagger}(P)U^{\dagger}(C) \\
 & = U(C)\gamma^{1}\gamma^{3} \gamma^{0}\eta_{a}\psi(PTx)U^{\dagger}(C) \\
 & = (\gamma^{1})^{*}(\gamma^{3})^{*}(\gamma^{0})^{*} U(C)\psi(-x)U^{\dagger}(C) \\
 & = \gamma^{1}\gamma^{3}\gamma^{0}(-i)(\bar{\psi}\gamma^{0}\gamma^{2})^{T} \\
 & = (-i)\gamma^{1}\gamma^{3}\gamma^{0}\gamma^{2}\gamma^{0}(\bar{\psi})^{T} \\
 & = i\gamma^{1}\gamma^{3}\gamma^{2}(\bar{\psi})^{\dagger} \\
 & = i \gamma^{1}\gamma^{3}\gamma^{2}(\gamma^{0})^{\dagger}\psi ^{*} \\
 & = i\gamma^{1}\gamma^{3}\gamma^{2}\gamma^{0}\psi ^{*} \\
 & = i\gamma^{0}\gamma^{1}\gamma^{2}\gamma^{3}\psi ^{*} \\
 & = \gamma^{5}\psi ^{*}(-x)
\end{align}$$
# Problem 4
## (a)

If we define:
$$\mathcal{P}a_{p}\mathcal{P}^{\dagger}=a_{-\mathbf{p}},\ \mathcal{P}b^{\dagger}_{\mathbf{p}}\mathcal{P}^{\dagger}=b_{-\mathbf{p}}$$
Then:
$$\begin{align}
\mathcal{P}\phi(x)\mathcal{P}^{\dagger} & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(\mathcal{P}a_{\mathbf{p}}\mathcal{P}^{\dagger}e^{-ip\cdot x}+\mathcal{P}b^{\dagger}_{\mathbf{p}}\mathcal{P}^{-1}e^{ip\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a_{-\mathbf{p}}e^{-i\tilde{p}\cdot \tilde{x}}+b^{\dagger}_{-\mathbf{p}}e^{i\tilde{p}\cdot \tilde{x}}) \\
 & = \int \frac{d^{3}\tilde{p}}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a_{-\mathbf{p}}e^{-i\tilde{p}\cdot \tilde{x}}+b^{\dagger}_{-\mathbf{p}}e^{i\tilde{p}\cdot \tilde{x}}) \\
 & = \phi(\tilde{x}) \\
 & = \phi(t,-\mathbf{x})
\end{align}$$
Next, if we define:
$$\begin{align}
\mathcal{C}a_{\mathbf{p}}\mathcal{C}^{\dagger}= b_{\mathbf{p}},\ \mathcal{C}b^{\dagger}_{\mathbf{p}}\mathcal{C}^{\dagger}=a^{\dagger}_{\mathbf{p}}
\end{align}$$
Then:
$$\begin{align}

\mathcal{C}\phi(x)\mathcal{C}^{\dagger} & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(\mathcal{C}a_{\mathbf{p}}\mathcal{C}^{\dagger}e^{-ip\cdot x}+\mathcal{C}b^{\dagger}_{\mathbf{p}}\mathcal{C}^{-1}e^{ip\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(b^{}_{\mathbf{p}}e^{-i{p}\cdot {x}}+a^{\dagger}_{\mathbf{p}}e^{i{p}\cdot {x}}) \\
  & = \phi ^{*}(x)

\end{align}$$
Next, if we set:
$$\mathcal{T}a_{\mathbf{p}}\mathcal{T}^{-1}=a_{-\mathbf{p}},\ \mathcal{T}b_{\mathbf{p}}\mathcal{T}^{-1}=b_{-\mathbf{p}}$$
Then:
$$\begin{align}

\mathcal{T}\phi(x)\mathcal{T}^{\dagger} & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(\mathcal{T}a_{\mathbf{p}}\mathcal{T}^{\dagger}e^{-ip\cdot x}+\mathcal{T}b^{\dagger}_{\mathbf{p}}\mathcal{T}^{-1}e^{ip\cdot x}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a^{}_{-\mathbf{p}}e^{i{p}\cdot {x}}+b^{\dagger}_{-\mathbf{p}}e^{-i{p}\cdot {x}}) \\
  & = \int \frac{d^{3}(-p)}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}(a_{-\mathbf{p}}e^{ip^{0}t-i\mathbf{p}\cdot \mathbf{x}}+ b^{\dagger}_{-\mathbf{p}}e^{-ip^{0}t+i\mathbf{p}\cdot \mathbf{x}}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}\left( a_{\mathbf{p}}e^{ip^{0}t+i\mathbf{p}\cdot \mathbf{x}}+ b^{\dagger}_{\mathbf{p}}e^{-ip^{0}t-i\mathbf{p}\cdot \mathbf{x}}  \right) \\
 & = \phi(-t,\mathbf{x})
\end{align}$$
## (b)

We first study:
$$\begin{align}
\mathcal{P}\phi ^{*}(x)\mathcal{P}^{\dagger} & = (\mathcal{P}\phi\mathcal{P}^{\dagger})^{\dagger} \\
 & = \phi ^{*}(Px)
\end{align}$$
$$\begin{align}
\mathcal{T}\phi ^{*}(x)\mathcal{T}^{\dagger} & = (\mathcal{T}\phi\mathcal{T}^{\dagger})^{\dagger} \\
 & = \phi ^{*}(x)
\end{align}$$
$$\begin{align}
\mathcal{C}\phi ^{*}(x)\mathcal{C}^{\dagger} & = (\mathcal{C}\phi\mathcal{C}^{\dagger})^{\dagger} \\
 & = \phi ^{}(Tx)
\end{align}$$
Then:
$$\begin{align}
\mathcal{P}J^{\mu}(x)\mathcal{P}^{\dagger} & = i\mathcal{P}[\phi ^{*}(\partial^{\mu}\phi)-(\partial^{\mu}\phi ^{*})\phi]\mathcal{P}^{\dagger} \\
 & = i(\phi ^{*}(Px)(\partial^{\mu}\phi(Px))-(\partial^{\mu}\phi ^{*}(Px))\phi(Px)) \\
 
 & = PJ^{\mu}(Px)
\end{align}$$
Here $P$ is the operator on four-vectors to revert the spatial part but keep the temporal part. This term is there because $\partial^{\mu}= \frac{\partial}{\partial x_{\mu}}$. If $\mu$ is spatial, we need to add a minus sign in the front to differentiate with respect to $Px$. If $\mu$ is temporal, we do not need to do anything.

Next:
$$\begin{align}
\mathcal{C}J^{\mu}(x)\mathcal{C}^{\dagger} & = i \mathcal{C}[\phi ^{*}\partial^{\mu }\phi-(\partial^{\mu}\phi ^{*})\phi]\mathcal{C}^{\dagger} \\
 & = i(\phi \partial^{\mu}\phi ^{*}-(\partial^{\mu}\phi)\phi ^{*}) \\
 & = i[(\partial^{\mu}\phi ^{*})\phi-\phi ^{*}\partial^{\mu}\phi] \\
 & = -J^{\mu}(x)
\end{align}$$
Next:
$$\begin{align}
\mathcal{T}J^{\mu}(x)\mathcal{T}^{\dagger} & = -i \mathcal{T}[\phi ^{*}\partial^{\mu}\phi-(\partial^{\mu}\phi ^{*})\phi]\mathcal{T}^{\dagger} \\
 & = -i[\phi ^{*}(Tx) \partial^{\mu}\phi(Tx)-(\partial^{\mu}\phi ^{*}(Tx))\phi(Tx)] \\
 & = -TJ^{\mu}(Tx)
\end{align}$$
Here the $T$ operator is there due to similar reasons to spatial inversion. 
## (c)

Let $\Theta=CPT$. Under CPT, a complex scalar field is transformed into its Hermitian conjugate at the inverted spacetime point, $$\Theta\phi(x)\Theta^{-1}\sim \phi^\dagger(-x)$$ while a Dirac spinor is transformed into a fixed matrix times its charge-conjugate spinor at $-x$. The precise matrix convention is not important here. For a local product of fields, CPT therefore conjugates the fields and coefficients, reverses the appropriate fermionic order, and sends $x$ to $-x$. The gamma-matrix factors transform consistently with their Lorentz indices. Because the operator is a Lorentz scalar, all Lorentz indices are fully contracted, so the signs and Lorentz matrices associated with spacetime inversion cancel within the complete scalar contraction. Locality and fermionic statistics ensure that reordering the conjugated fermion fields gives the signs required by Hermitian conjugation. Thus, schematically, $$\Theta\mathcal O(x)\Theta^{-1} = \mathcal O^\dagger(-x)$$ Since $\mathcal O$ is Hermitian, $$\Theta\mathcal O(x)\Theta^{-1} = \mathcal O(-x)$$ Therefore the corresponding term in the action is invariant, since $$\int d^4x\,\mathcal O(-x) = \int d^4x\,\mathcal O(x)$$
