# Problem 1

(a) The structure is legal. The index $\mu$ and index $\nu$ are the repeated indices that we should sum over. 

(b) The structure is legal. The index $\mu$ is contracted, leaving $\rho,\nu$ as the free indices.  

(c) The structure is legal. The indices $\mu,\rho$ are contracted, leaving $\nu$ as the free index.

(d) The structure is illegal, since there are two $\nu$ in the lower indices, they cannot be contracted. 

(e) The structure is illegal. There are two $\rho$'s in the lower indices, but only one $\rho$ in the upper index. They cannot be contracted. 

(f) The structure is legal. The RHS has two free indices. The $\rho$ on the LHS is contracted, leaving two indices consistent with the RHS.

(g) The structure is legal. $\rho$ on the LHS is contracted, and $\sigma$ on the RHS is contracted. This leaves $\mu,\nu$ as the free indices. 

(h) The structure is illegal. The LHS is a 2-tensor, while the RHS is a 3-tensor. 

(i) The structure is illegal. $\rho$ is contracted on the LHS, leaving the LHS as a (1,1) type tensor. But the RHS is a (2,0) type tensor.

(j) The structure is legal. $\rho$ on the LHS, and $\rho$ on the RHS are contracted, leaving both sides as tensors that are comparable. 

# Problem 2
## (a)
$$\begin{align}
C_{\sigma \lambda}B^{\nu}{}_{\rho}B^{\mu}{}_{\nu}D^{\rho \sigma}=B^{\mu}{}_{\nu}B^{\nu}{}_{\rho}D^{\rho \sigma}C_{\sigma \lambda}
\end{align}$$
## (b)
$$A^{\mu}{}_{\nu}\eta^{\nu \rho}A^{\alpha}{}_{\mu}=B^{\rho \alpha}$$
## (c)

>[!Success] Lemma 1
>$$A^{\mu}{}_{\nu}B^{\nu}{}_{\lambda}=A^{\mu \nu}B_{\nu \lambda}$$
### Proof.
$$\begin{align}
A^{\mu}{}_{\nu}B^{\nu}{}_{\lambda} & = g_{\nu \nu^{'}}g^{\nu \nu^{''}}A^{\mu \nu^{'}}B_{\nu^{''}\lambda} \\
 & = g_{\nu^{'}\nu}g^{\nu \nu^{''}}A^{\mu \nu^{'}}B_{\nu^{''}\lambda} \\
 & = \delta_{\nu^{'}}{}^{\nu^{''}}A^{\mu \nu^{'}}B_{\nu^{''}\lambda} \\
 & = A^{\mu \nu^{'}}B_{\nu^{'}\lambda}=A^{\mu \nu}B_{\nu \lambda}
\end{align}$$

Similarly, it is easy to show that:
$$   A_{\mu \nu}B^{\nu \lambda}=A_{\mu}{}^{\nu}B_{\nu}{}^{\lambda},\ A_{\mu \nu}B^{\nu }{}_{\lambda}=A_{\mu}{}^{\nu}B_{\nu}{}_{\lambda},\ A^{\mu \nu}B_{\nu}{}^{\lambda}=A^{\mu}{}_{\nu}B^{\nu \lambda}$$
Then we have:
$$\begin{align}
A^{\rho}{}_{\mu}B^{\nu \lambda}D^{\mu}{}_{\nu}C_{\lambda \rho} & =A_{\rho \mu}B^{\nu \lambda}D^{\mu}{}_{\nu}C_{\lambda}{}^{\rho} \\
 & = A_{\sigma \mu}B^{\nu \lambda}D^{\mu}{}_{\nu}C_{\lambda}{}^{\sigma} \\
 & = A_{\sigma \rho}B^{\mu \lambda}D^{\rho}{}_{\mu}C_{\lambda}{}^{\sigma} \\
 & = C_{\lambda}{}^{\sigma}D^{\rho}{}_{\mu}A_{\sigma \rho}B^{\mu \lambda}
\end{align}$$
## (d)

The first and the third are the same. We have:
$$\begin{align}
B^{\lambda}{}_{\rho}D^{\alpha}{}_{\mu}A^{\mu}{}_{\lambda}C^{\rho}{}_{\alpha} & = B^{\rho}{}_{\lambda}D^{\alpha}{}_{\mu}A^{\lambda}{}_{\mu}C^{\rho}{}_{\alpha} \\
 & = B^{\rho}{}_{\lambda}D^{\mu}{}_{\alpha}A^{\lambda}{}_{\mu}C^{\rho}{}_{\alpha} \\
 & = B^{\rho}{}_{\lambda}D^{\mu}{}_{\alpha}A^{\lambda}{}_{\mu}C^{\alpha}{}_{\rho} \\
 & = B^{\alpha}{}_{\mu}D^{\lambda}{}_{\rho}A^{\mu}{}_{\lambda}C^{\rho}{}_{\alpha}
\end{align}$$
# Problem 3
## (a)
$$\epsilon^{0123}=1,\ \epsilon^{1230}=-1,\ \epsilon^{1213}=0$$
## (b)

Observe that $p_{i\mu}$ is a matrix with zero determinant. Since:
$$\begin{align}
p_{i\mu}=\begin{pmatrix}
p_{10} & p_{11} & p_{12} & p_{13} \\
p_{20} & p_{21} & p_{22} & p_{23} \\p_{30} & p_{31} & p_{32} & p_{33} \\

p_{40} & p_{41} & p_{42} & p_{42} \\

\end{pmatrix}
\end{align}$$
We perform the third type of elementary row operation: we add row 1 to row 4, then row 2 to row 4, then row 3 to row 4. Then we obtain a matrix with a row of zeros since $\sum_{i}p_{i\mu}=0$. Recall that the third type of elementary row operation does not change the determinant. Then $\det(p_{i\mu})=0$.

Recall that $\det(p_{i\mu})=\epsilon^{\mu \nu \rho \sigma}p_{1\mu}p_{2\nu}p_{3\rho}p_{4\sigma}$. Therefore $\epsilon^{\mu \nu \rho \sigma}p_{1\mu}p_{2\nu}p_{3\rho}p_{4\sigma}=0$.
# Problem 4
## (a)

The 3-momentum of the positron given by:
$$\begin{align}
 & E^{2}-p_{p}^{2}=m_{e}^{2}\implies p_{p}=\sqrt{ E^{2}-m_{e}^{2} }
\end{align}$$
Since the electron is stationary, the total 3-momentum of the system is:
$$P=p_{p}=\sqrt{ E^{2}-m_{e}^{2} }$$
The energy of the electron is clearly $E_{e}=m_{e}$. Then the total 4-momentum of the system is $(E+m_{e},\mathbf{P})$. 

By the conservation of energy and the conservation of momentum, the 4-momentum does not change after the collision. Since the 4-momentum is an invariant, and the total momentum in the COM frame is zero, we have:
$$\begin{align}
 & E_{CM}^{2}-0= (E+m_{e})^{2}-P^{2} \\
\implies & E_{CM}=\sqrt{ (E+m_{e})^{2}-(E^{2}-m_{e}^{2}) }=\sqrt{ 2m_{e}(E+m_{e}) }
\end{align}$$
## (b)

$$E_{CM}=\sqrt{ 2m_{e}c^{2}(E+m_{e}c^{2}) }$$
## (c)

For photons, we have: $E^{2}-0=p^{2}\implies E=p$. In the COM frame, since the total momentum is zero, the magnitude of the momenta of the two photons are equal. Then their energy are equal. We have:
$$E_{ph}= \frac{E_{CM}}{2}= \sqrt{ \frac{m_{e}(E+m_{e})}{2} }$$
## (d)

$$\begin{align}
\lambda & = \frac{h}{p} \\
 & = \frac{h}{E} \\
 & = 248.55\ \text{fm}
\end{align}$$
The length scale that would be typically probed would be around $248.55\ \text{fm}$.
# Problem 5
## (a)

Lab frame:
![[f7de5dbc610573c63a4baa02fac8a524.jpg|centering|300]]
COM frame:
![[1efa853734d938604c7bf46a7bd6aa43.jpg|centering|300]]
## (b)

The 3-momentum of 1 is given by:
$$\begin{align}
 & E_{\text{lab}}^{2}-p_{\text{lab}}^{2}=m_{1}^{2} \\
\implies & p_{\text{lab}}=\sqrt{ E^{2}_{\text{lab}}-m_{1}^{2} }
\end{align}$$
The 3-momentum of 2 is clearly zero. The energy of 2 is just $m_{2}$. Then the total 4-momentum is $(E_{\text{lab}}+m_{2},p_{\text{lab}})$.

After the collision, the 4-momentum in the lab frame is still unchanged. The the 4-momentum in the cms is $(E_{\text{cms}},0)$. Then:
$$\begin{align}
  E_{\text{cms}}^{2} & = (E_{\text{lab}}+m_{2})^{2}-p_{\text{lab}}^{2}
 \\
 & = m_{1}^{2}+m_{2}^{2}+2m_{2}E_{\text{lab}}\end{align}$$
## (c)

If we collide beams in their cms, we know that before and after the collision, the total momenta are zero. Therefore, by the invariant of 4-momentum, we have:
$$\begin{align}
 & E_{\text{before}}^{2}=E^{2}_{\text{after}} \\
\implies & E_{\text{after}}=E_{\text{before}}
\end{align}$$
If $E_{\text{before}}\sim \mathcal{O}(E_{\text{lab}})$, then $E_{\text{after}}\sim \mathcal{O}(E_{\text{lab}})$. However, if we expose a stationary target to a high energy beam, assuming that $E_{\text{lab}}$ is large, we have $E_{\text{cms}}\sim \mathcal{O}(\sqrt{ E_{\text{lab}} })$. This means that in this case, a lot of energy goes into the particle motion instead of the energy after collision. But in the first case, nothing goes into particle motion, so the collision is more efficient. 
## (d)

In the cms, set the energy of 1 to be $E_{1}$, the energy of 2 to be $E_{2}$. Then we have:
$$\begin{align}
 & E_{1}^{2}-p^{'2}=m_{1}^{2} \tag{1} \\
 & E_{2}^{2}-p^{'2}=m_{2}^{2}\tag{2}
\end{align}$$
From the derivation of (b) we know that:
$$E^{2}_{\text{cms}}=(E_{\text{lab}}+m_{2})^{2}-p_{\text{lab}}^{2} \tag{3}$$
From the conservation of energy, we know that:
$$\begin{align}
E_{1}+E_{2}=E_{\text{cms}} \tag{4}
\end{align}$$
From (2), we have:
$$E_{2}=\sqrt{ p^{'2}+m_{2}^{2} }$$
Substitute into (4) to get:
$$\begin{align}
E_{1}=E_{\text{cms}}-E_{2}=E_{\text{cms}}-\sqrt{ p^{'2}+m_{2}^{2} }
\end{align}$$
Substitute into (1) to get:
$$(E_{\text{cms}}-\sqrt{ p^{'2}+m_{2}^{2} })^{2}-p^{'2}=m_{1}^{2}\tag{5}$$
We also know that:
$$E_{\text{lab}}=\sqrt{ p_{\text{lab}}^{2}+m_{1}^{2} }$$
Substitute this into (3) to get:
$$E_{\text{cms}}^{2}=(\sqrt{ p_{\text{lab}}^{2}+m_{1}^{2} }+m_{2})^{2}-p_{\text{lab}}^{2} \tag{6}$$
It suffices to eliminate $m_{1}$ from (5) and (6). From (6) we know:
$$\begin{align}
 & (\sqrt{ p^{2}_{\text{lab}}+m_{1}^{2} }+m_{2})^{2}=E_{\text{cms}}^{2}+p_{\text{lab}}^{2} \\
\implies & \sqrt{ p^{2}_{\text{lab}}+m_{1}^{2} }=\sqrt{ E^{2}_{\text{cms}}+p^{2}_{\text{lab}} }-m_{2} \\
\implies & m_{1}^{2}=(\sqrt{ E^{2}_{\text{cms}}+p_{\text{lab}}^{2} }-m_{2})^{2}-p^{2}_{\text{lab}}
\end{align}$$
Then substitute this into (5) to get:
$$\begin{align}
 & (E_{\text{cms}}-\sqrt{ p^{'2}+m_{2}^{2} })^{2}-p^{'2}=(\sqrt{ E^{2}_{\text{cms}}+p_{\text{lab}}^{2} }-m_{2})^{2}-p^{2}_{\text{lab}} \\
\implies & E_{\text{cms}}^{2}+m_{2}^{2}-2E_{\text{cms}}\sqrt{ p^{'2}+m_{2}^{2} }=E^{2}_{\text{cms}}+m_{2}^{2}-2m_{2}\sqrt{ E^{2}_{\text{cms}} +p^{2}_{\text{lab}}}  \\
\implies & E_{\text{cms}}\sqrt{ p^{'2}+m_{2}^{2} }=m_{2}\sqrt{ E^{2}_{\text{cms}}+p^{2}_{\text{lab}} } \\
\implies & E^{2}_{\text{cms}}(p^{'2}+m_{2}^{2})=m_{2}^{2}(E^{2}_{\text{cms}}+p^{2}_{\text{lab}}) \\
\implies & p^{'}= \frac{m_{2}p_{\text{lab}}}{E_{\text{cms}}}
\end{align}$$
## (e)

From the conservation of 4-momentum, we have:
$$\begin{align}
 & p_{1}^{\mu}+p_{2}^{\mu}=p_{3}^{\mu}+p_{4}^{\mu} \\
\implies & p_{1}^{\mu}-p_{3}^{\mu}=p_{4}^{\mu}-p_{2}^{\mu}
\end{align}$$
Then:
$$\begin{align}
q^{2} & = (p_{4}-p_{2})_{\mu}(p_{4}-p_{2})^{\mu} 
\end{align}$$
Obviously, $p_{2}^{\mu}=(m_{2},0,0,0)$. $p_{4}^{0}=E_{4}$. Then:
$$\begin{align}
q^{2} & = (E_{4}-m_{2})^{2}-\sum_{\lambda=1}^{3}(p_{4}^{\lambda})^{2}
\end{align}$$
We have $\sum_{\lambda=1}^{3}(p_{4}^{\lambda})^{2}=E_{4}^{2}-m_{4}^{2}$. Then:
$$\begin{align}
q^{2} & =(E_{4}-m_{2})^{2}-(E_{4}^{2}-m_{4}^{2}) \\
 & = -2m_{4}(E_{4}-m_{4})
\end{align}$$
## (f)

