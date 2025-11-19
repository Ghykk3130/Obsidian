# Sakurai 3.17

We want:
$$|\bra{j,j} \mathscr{D}^{\dagger}(R_{y}(\epsilon))\ket{j,j} |^{2}$$
Since we want things up to the second order, it suffices to approximate:
$$\begin{align}
\mathscr{D}(R_{y}(\epsilon)) & =\mathbb{1}- \frac{i}{\hbar}J_{y}\epsilon+ \frac{1}{2}\left(  -\frac{i}{\hbar} J_{y}^{}\epsilon\right)^{2}+\mathcal{O}(\epsilon^{3}) \\
 & = \mathbb{1}- \frac{i}{\hbar}J_{y}\epsilon- \frac{1}{2} \frac{\epsilon^{2}}{\hbar^{2}}J_{y}^{2}+\mathcal{O}(\epsilon^{3})
\end{align}$$
Know that:
$$\begin{align}
 & J_{+}=J_{x}+iJ_{y} \\
 & J_{-}=J_{x}-iJ_{y}
\end{align}$$
We can solve:
$$\begin{align}
 & J_{x}= \frac{J_{+}+J_{-}}{2} \\
 & J_{y}= \frac{J_{+}-J_{-}}{2i}
\end{align}$$
Therefore:
$$\begin{align}
\bra{j,j} J_{y} \ket{j,j}  & = - \frac{i}{\hbar}\bra{j,j} (- j\hbar \ket{j,j-1} ) \\
 & =0
\end{align}$$
$$\begin{align}
\bra{j,j }J_{y}^{2}\ket{j,j}  & =\bra{j,j} \left( - \frac{1}{4} \right)(J_{+}^{2}+J_{-}^{2}-J_{+}J_{-}-J_{-}J_{+})\ket{j,j}  \\
 & = - \frac{1}{4} \bra{j,j} (j(j-1)\hbar^{2}\ket{j,j-2} -j^{2}\hbar^{2}\ket{j,j} )  \\
 & = \frac{1}{4} j^{2}\hbar^{2}
\end{align}$$
Then we must have:
$$\begin{align}
|\bra{j,j} \mathscr{D}^{\dagger}(R_{y}(\epsilon))\ket{j,j}  |^{2} & = |1- \frac{1}{8}j^{2}\epsilon^{2}+\mathcal{O}(\epsilon^{3}) |^{2} \\
 & = 1- \frac{1}{4} j^{2}\epsilon^{2}+\mathcal{O}(\epsilon^{3})
\end{align}$$
If I retain to the second order, I get $1- \frac{1}{4}j^{2}\epsilon^{2}$.

# Sakurai 3.19
## a.
Borrowing what I found in Sakurai 3.17:
$$\begin{align}
J^{2} & =J_{x}^{2}+J_{y}^{2}+J_{z}^{2} \\
 & = \frac{1}{4}(J_{+}+J_{-})^{2}- \frac{1}{4}(J_{+}-J_{-})^{2}+J_{z}^{2} \\
 & = \frac{1}{2}J_{+}J_{-}+ \frac{1}{2}J_{-}J_{+}+J_{z}^{2}
\end{align}$$
We compute:
$$\begin{align}
[J_{+},J_{-}] & = [J_{x}+iJ_{y},J_{x}-iJ_{y}] \\
 & = -2i[J_{x},J_{y}] \\
 & = 2\hbar J_{z}
\end{align}$$
Then:
$$\begin{align}
J^{2} & = \frac{1}{2}J_{+}J_{-}+ \frac{1}{2}(J_{+}J_{-}-2\hbar J_{z})+J_{z}^{2} \\
 & = J_{z}^{2}+J_{+}J_{-}- \hbar J_{z}
\end{align}$$
## b.
We have:
$$\begin{align}
 & J_{-}\ket{j,m} =c_{-}\ket{j,m-1}  \\
 \implies& |J_{-}\ket{j,m}  |^{2}=|c_{-}|^{2} \\
\implies & \bra{j,m} J_{+}J_{-}\ket{j,m} =|c_{-}|^{2} 
\end{align}$$
It suffices to compute:
$$\begin{align}

 \bra{j,m} J_{+}J_{-}\ket{j,m}  & =\bra{j,m} (J^{2}-J_{z}^{2}+\hbar J_{z})\ket{j,m} \\
 & = j(j+1)\hbar^{2}-m^{2}\hbar^{2}+m\hbar \\
 & = (j(j+1)-m(m-1))\hbar^{2} 
\end{align}$$
Then I can choose:
$$c_{-}=\sqrt{ j(j+1)-m(m-1) }\hbar$$

# Sakurai 3.21

It suffices to show that $[L_{i},p^{2}]=0,[L_{i},x^{2}]=0,\forall i$. 

Adopting Einstein summation, we first compute:
$$\begin{align}
[L_{i},p^{2}] & =[\epsilon_{ijk}x_{j}p_{k},p^{2}] \\
 & = \epsilon_{ijk}[x_{j}p_{k},p_{l}^{2}] \\
 & = \epsilon_{ijk}([x_{j},p_{l}^{2}]p_{k}+x_{j}[p_{k},p_{l}^{2}]) \\
 & = \epsilon_{ijk}(\delta_{jl}2i\hbar p_{j}p_{k}+0) \\
 & = 2i\hbar\epsilon_{ijk}p_{j}p_{k} \\
 & = 2i\hbar(\vec{p}\times \vec{p})_{i} \\
 & =0
\end{align}$$
We can also compute:
$$\begin{align}
[L_{i},x^{2}] & =[\epsilon_{ijk}x_{j}p_{k},x_{l}^{2}] \\
 & = \epsilon_{ijk}(x_{j}[p_{k},x_{l}^{2}]+[x_{j},x_{l}^{2}]p_{k}) \\
 & = \epsilon_{ijk}(x_{j}\delta_{kl}(-2i\hbar)x_{k}+0) \\
 & = -2i\epsilon_{ijk}x_{j}x_{k} \\
 & = -2i\hbar(\vec{x}\times \vec{x})_{i} \\
 & = 0
\end{align}$$
Therefore:
$$\begin{align}
 & [\vec{L},p^{2}]=e_{i}[L_{i},p^{2}]=0 \\
 & [\vec{L},x^{2}]=e_{i}[L_{i},x^{2}]=0
\end{align}$$
# Extra problem

## a).

Know that:
$$\begin{align}
\bra{\theta,\phi} L^{2}\ket{\psi(0)}  & = -\hbar^{2}\left(  \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}\left( \sin \theta \frac{\partial}{\partial \theta} \right)+ \frac{1}{\sin ^{2}\theta} \frac{\partial^{2}}{\partial \phi^{2}} \right) \sqrt{ \frac{3}{4\pi} }\sin \theta \sin \phi \\
 & = -\hbar^{2} \sqrt{ \frac{3}{4\pi} }\left( \frac{\cos ^{2}\theta}{\sin \theta}\sin \phi-\sin \theta \sin \phi- \frac{\sin \phi}{\sin \theta} \right) \\
 & = 2\hbar^{2} \sqrt{ \frac{3}{4\pi} }\sin \theta \sin \phi \\
 & =  2\hbar^{2}\bra{\theta,\phi} \psi(0)\rangle
\end{align}$$
Therefore, I have:
$$\begin{align}
\bra{\theta,\phi} \psi(t)\rangle & =\bra{\theta,\phi} \exp\left( - \frac{i}{\hbar} \frac{L^{2}}{2I}t \right) \ket{\psi(0)}  \\
 & = \exp\left( - i \frac{\hbar}{I}t \right)\bra{\theta,\phi} \psi(0)\rangle \\
 & = \exp\left( -i \frac{\hbar}{I}t \right) \sqrt{ \frac{3}{4\pi} }\sin \theta \sin \phi
\end{align}$$

