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
We can reorder the indices freely once the upper and lower indices are paired with each other. Then it is easy to write:
$$\begin{align}
C_{\sigma \lambda}B^{\nu}{}_{\rho}B^{\mu}{}_{\nu}D^{\rho \sigma}=B^{\mu}{}_{\nu}B^{\nu}{}_{\rho}D^{\rho \sigma}C_{\sigma \lambda}
\end{align}$$
## (b)
The index $\nu,\ \mu$ are contracted, leaving $\rho,\ \alpha$ as the free upper indices.
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

Since $0123$ is an even permutation, $1230$ is an odd permutation, and $1213$ has repeated $1$'s, we have:
$$\epsilon^{0123}=1,\ \epsilon^{1230}=-1,\ \epsilon^{1213}=0$$
## (b)

Observe that $p_{i\mu}$ is a matrix with zero determinant. Since:
$$\begin{align}
p_{i\mu}=\begin{pmatrix}
p_{10} & p_{11} & p_{12} & p_{13} \\
p_{20} & p_{21} & p_{22} & p_{23} \\p_{30} & p_{31} & p_{32} & p_{33} \\

p_{40} & p_{41} & p_{42} & p_{43} \\

\end{pmatrix}
\end{align}$$
We perform the third type of elementary row operation: we add row 1 to row 4, then row 2 to row 4, then row 3 to row 4. Then we obtain a matrix with a row of zeros since $\sum_{i}p_{i\mu}=0$. Recall that the third type of elementary row operation does not change the determinant. Then $\det(p_{i\mu})=0$.

Recall that $\det(p_{i\mu})=\epsilon^{\mu \nu \rho \sigma}p_{1\mu}p_{2\nu}p_{3\rho}p_{4\sigma}$. Therefore $\epsilon^{\mu \nu \rho \sigma}p_{1\mu}p_{2\nu}p_{3\rho}p_{4\sigma}=0$.
# Problem 4
## (a)

The 3-momentum of the positron given by:
$$\begin{align}
 & E^{2}-|\mathbf{p}_{p}|^{2}=m_{e}^{2}\implies | \mathbf{p}_{p}|=\sqrt{ E^{2}-m_{e}^{2} }
\end{align}$$
Since the electron is stationary, the total 3-momentum of the system is:
$$|\mathbf{P}|=|\mathbf{p}_{p}|=\sqrt{ E^{2}-m_{e}^{2} }$$
The energy of the electron is clearly $E_{e}=m_{e}$. Then the total 4-momentum of the system is $(E+m_{e},\mathbf{P})$. 

By the conservation of energy and the conservation of momentum, the 4-momentum does not change after the collision. Since the 4-momentum is an invariant, and the total momentum in the COM frame is zero, we have:
$$\begin{align}
 & E_{CM}^{2}-0= (E+m_{e})^{2}-|\mathbf{P}|^{2} \\
\implies & E_{CM}=\sqrt{ (E+m_{e})^{2}-(E^{2}-m_{e}^{2}) }=\sqrt{ 2m_{e}(E+m_{e}) }
\end{align}$$
## (b)

$m_{e}$ should have the same unit as $E$. So we add $c^{2}$ to it. Note that the LHS is energy, so $2m_{e}$ outside the parenthesis should have the same unit as energy. We add $c^{2}$ to it as well. We get:
$$E_{CM}=\sqrt{ 2m_{e}c^{2}(E+m_{e}c^{2}) }$$
## (c)

For photons, we have: $E^{2}-0=|\mathbf{p}|^{2}\implies E=|\mathbf{p}|$. In the COM frame, since the total momentum is zero, the magnitude of the momenta of the two photons are equal. Then their energy are equal. We have:
$$E_{ph}= \frac{E_{CM}}{2}= \sqrt{ \frac{m_{e}(E+m_{e})}{2} }$$
## (d)
We have:
$$E_{\text{ph}}\approx \sqrt{  \frac{1}{2}\times 0.511\times(50+0.511) }MeV\approx 3.59\ \text{MeV}$$
$$\begin{align}
\lambda & = \frac{h}{p_{\text{ph}}} \\
 & = \frac{hc}{E_{\text{ph}}} \\
 & = 346.17\ \text{fm}
\end{align}$$
The length scale that would be typically probed would be around $346.17\ \text{fm}$.
# Problem 5
## (a)

Lab frame:
![[f7de5dbc610573c63a4baa02fac8a524.jpg|centering|300]]
cms frame:
![[1efa853734d938604c7bf46a7bd6aa43.jpg|centering|300]]
## (b)

The 3-momentum of 1 is given by:
$$\begin{align}
 & E_{\text{lab}}^{2}-|\mathbf{p}_{\text{lab}}|^{2}=m_{1}^{2} \\
\implies & |\mathbf{p}_{\text{lab}}|=\sqrt{ E^{2}_{\text{lab}}-m_{1}^{2} }
\end{align}$$
The 3-momentum of 2 is clearly zero. The energy of 2 is just $m_{2}$. Then the total 4-momentum is $(E_{\text{lab}}+m_{2},\mathbf{p}_{\text{lab}})$.

After the collision, the 4-momentum in the lab frame is still unchanged. The the 4-momentum in the cms is $(E_{\text{cms}},0)$. Then:
$$\begin{align}
  E_{\text{cms}}^{2} & = (E_{\text{lab}}+m_{2})^{2}-|\mathbf{p}_{\text{lab}}|^{2}
 \\
 & = m_{1}^{2}+m_{2}^{2}+2m_{2}E_{\text{lab}}\end{align}$$
## (c)

Assume that the energy is high, so that approximately $E_{\text{cms}}^{2}= 2m_{2}E_{\text{lab}}\implies\left(  \frac{E\text{cms}}{m_{2}}^{} \right)^{2}=2 \frac{E_{\text{lab}}}{m_{2}}$. This means that roughly, the energy required to create particles in the lab frame per mass is almost the square of the energy required to create particles in the cms frame. If the energy is high, then a square would cause a huge energy difference. Therefore, collision in the lab frame is highly inefficient.
## (d)

**The brut-force solution:**

In the cms, set the energy of 1 to be $E_{1}$, the energy of 2 to be $E_{2}$. Then we have:
$$\begin{align}
 & E_{1}^{2}-|\mathbf{p}^{'}|^{2}=m_{1}^{2} \tag{1} \\
 & E_{2}^{2}-|\mathbf{p}^{'}|^{2}=m_{2}^{2}\tag{2}
\end{align}$$
From the derivation of (b) we know that:
$$E^{2}_{\text{cms}}=(E_{\text{lab}}+m_{2})^{2}-p_{\text{lab}}^{2} \tag{3}$$
From the conservation of energy, we know that:
$$\begin{align}
E_{1}+E_{2}=E_{\text{cms}} \tag{4}
\end{align}$$
From (2), we have:
$$E_{2}=\sqrt{ |\mathbf{p}|^{2}+m_{2}^{2} }$$
Substitute into (4) to get:
$$\begin{align}
E_{1}=E_{\text{cms}}-E_{2}=E_{\text{cms}}-\sqrt{ |\mathbf{p}|^{2}+m_{2}^{2} }
\end{align}$$
Substitute into (1) to get:
$$(E_{\text{cms}}-\sqrt{ | \mathbf{p}^{'}|^{2}+m_{2}^{2} })^{2}-|\mathbf{p}^{'}|^{2}=m_{1}^{2}\tag{5}$$
We also know that:
$$E_{\text{lab}}=\sqrt{ |\mathbf{p}_{\text{lab}}|^{2}+m_{1}^{2} }$$
Substitute this into (3) to get:
$$E_{\text{cms}}^{2}=(\sqrt{ |\mathbf{p}_{\text{lab}}|^{2}+m_{1}^{2} }+m_{2})^{2}-|\mathbf{p}_{\text{lab}}|^{2} \tag{6}$$
It suffices to eliminate $m_{1}$ from (5) and (6). From (6) we know:
$$\begin{align}
 & (\sqrt{ |\mathbf{p}_{\text{lab}}|^{2}+m_{1}^{2} }+m_{2})^{2}=E_{\text{cms}}^{2}+|\mathbf{p}_{\text{lab}}|^{2} \\
\implies & \sqrt{ |\mathbf{p}_{\text{lab}}|^{2}+m_{1}^{2} }=\sqrt{ E^{2}_{\text{cms}}+|\mathbf{p}^{}_{\text{lab}}|^{2} }-m_{2} \\
\implies & m_{1}^{2}=(\sqrt{ E^{2}_{\text{cms}}+|\mathbf{p}_{\text{lab}}|^{2} }-m_{2})^{2}-|\mathbf{p}^{}_{\text{lab}}|^{2}
\end{align}$$
Then substitute this into (5) to get:
$$\begin{align}
 & (E_{\text{cms}}-\sqrt{ |\mathbf{p}^{'}|^{2}+m_{2}^{2} })^{2}-|\mathbf{p}^{'}|^{2}=(\sqrt{ E^{2}_{\text{cms}}+|\mathbf{p}_{\text{lab}}|^{2} }-m_{2})^{2}-|\mathbf{p}^{}_{\text{lab}}|^{2} \\
\implies & E_{\text{cms}}^{2}+m_{2}^{2}-2E_{\text{cms}}\sqrt{ |\mathbf{p}^{'}|^{2}+m_{2}^{2} }=E^{2}_{\text{cms}}+m_{2}^{2}-2m_{2}\sqrt{ E^{2}_{\text{cms}} +|\mathbf{p}^{}_{\text{lab}}}|^{2}  \\
\implies & E_{\text{cms}}\sqrt{ |\mathbf{p}^{'}|^{2}+m_{2}^{2} }=m_{2}\sqrt{ E^{2}_{\text{cms}}+|\mathbf{p}^{}_{\text{lab}}|^{2} } \\
\implies & E^{2}_{\text{cms}}(|\mathbf{p}^{'}|^{2}+m_{2}^{2})=m_{2}^{2}(E^{2}_{\text{cms}}+|\mathbf{p}_{\text{lab}}|^{2}) \\
\implies & p^{'}= \frac{m_{2}p_{\text{lab}}}{E_{\text{cms}}}
\end{align}$$
**The elegant solution:**

Observe that the lab frame and the cms frame is connected by a Lorentz boost given by the velocity of the cms $\mathbf{v}_{\text{COM}}$ in the lab frame. Since 2 is not moving in the lab frame, $\mathbf{v}_{\text{COM}}$ is parallel to $\mathbf{p}_{lab}$. Then Set z-axis to be parallel to $\mathbf{p}_{\text{lab}}$. 

Note that for a Lorentz boost in the z direction, the x, y components are unchanged. Therefore $T_{12}=T^{'}_{12}$. Let $p^{\mu}_{1},\ p^{\mu}_{2}$ be the 4-momenta of 1, 2 in the lab frame before collision. Let $p^{'\mu}_{1},p^{'\mu}_{2}$ be the 4-momenta of 1,2 in the cms frame before collision. Then we have:
$$\begin{align}
 & p^{\mu}_{1}+p^{\mu}_{2}  = (E_{\text{cms}},\mathbf{p}_{\text{lab}})+ (m_{2},0)=(E_{\text{cms}}+m_{2},\mathbf{p}_{\text{lab}}) \\
 & p^{\mu}_{1}-p^{\mu}_{2} =(E_{\text{cms}},\mathbf{p}_{\text{lab}})-(m_{2},0)=(E_{\text{cms}}-m_{2},\mathbf{p}_{\text{lab}})
\end{align}$$
After the collision, we have:
$$\begin{align}
 & p^{'\mu}_{1}+p^{'\mu}_{2}=(E^{'}_{1},\mathbf{p}^{'})+(E^{'}_{2},-\mathbf{p}^{'})=(E_{\text{lab}},0) \\
 & p^{'\mu}_{1}-p^{'\mu}_{2}=(E^{'}_{1},\mathbf{p}^{'} )-(E^{'}_{2},-\mathbf{p}^{'})=(E_{1}^{'}-E_{2}^{'},2\mathbf{p}^{'})
\end{align}$$
We compute the matrix element:
$$\begin{align}
T_{12} & = (p_{1}+p_{2})^{0}(p_{1}-p_{2})^{3}-(p_{1}+p_{2})^{3}(p_{1}-p_{2})^{0} \\
 & = (E_{\text{lab}}+m_{2})  p^{3}_{\text{lab}}-(E_{\text{lab}}-m_{2})p^{3}_{\text{lab}} \\
 & = 2m_{2}p^{3}_{\text{lab}}
\end{align}$$
$$\begin{align}
T^{'}_{12} & = (p_{1}^{'}+p_{2}^{'})^{0}(p^{'}_{1}-p^{'}_{2})^{3}-(p^{'}_{1}+p^{'}_{2})^{3}(p^{'}_{1}-p^{'}_{2})^{0} \\
 & = E_{\text{cms}}2p^{'3}
\end{align}$$
We note that the 3-momentum $\mathbf{p}_{\text{lab}}$ only has the third component. Want to argue that $\mathbf{p}^{'}$ also only has the third component. This is obvious since $\mathbf{p}^{'}$ is the transformation of $\mathbf{p}_{\text{lab}}$, and we argued before that the x, y components should be unaffected, therefore they are equal to zero. We can show this more specifically. We have:
$$\Lambda^{\mu}{}_{\nu}=\begin{pmatrix}
\gamma & 0 & 0 & -\gamma v_{\text{COM}} \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
-\gamma v_{\text{COM}} & 0 & 0 & \gamma
\end{pmatrix}$$
Note that in the third column (I'm counting from zero.), $\Lambda^{1}{}_{3}=0,\ \Lambda^{2}{}_{3}=0$. Then $p^{'1}=\Lambda^{1}{}_{\nu}p_{1}^{\nu}=\Lambda^{1}{}_{3}p_{1}^{3}=0$. Similar for $p^{'2}$. Then $T_{12}=2m_{2}p_{\text{lab}},\ T^{'}_{12}=E_{\text{cms}}2p^{'}$. We have:
$$\begin{align}
 & 2m_{2}p_{\text{lab}}=E_{\text{cms}}2p^{'}\implies p^{'}=\frac{m_{2}p_{\text{lab}}}{E_{\text{cms}}}
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

Let $E_{1},E_{2}$ be the energy of 1, 2 in the lab frame. Then $(p_{1}+p_{2})^{2}$ is the square of the total 4-momentum. Since $(p_{1}+p_{2})^{2}$ is an invariant, and the total 4-momentum in the cms is just $(E_{\text{cms}},0)$, we have:
$$\begin{align}
(p_{1}+p_{2})^{2}=E^{2}_{\text{cms}}-0=E^{2}_{\text{cms}}=s
\end{align}$$
Now we work in the cms. Assume that in the cms, the 4-momentum of the four particles are $(\mathcal{E}_{1}, \vec{\mathscr{p}}),\ (\mathcal{E}_{2},- \vec{\mathscr{p}})$ before the collision, and $(\mathcal{E}_{3}, \vec{\mathscr{p}^{'}}), (\mathcal{E}_{4},- \vec{\mathscr{p}^{'}})$ after the collision. 

Then by the conservation of energy, we have:
$$\begin{align}
 & \mathcal{E}_{1}+\mathcal{E}_{2}=\mathcal{E}_{3}+\mathcal{E}_{4} \\
\implies & \sqrt{ m_{1}^{2}+|\vec{\mathscr{p}}|^{2} }+\sqrt{ m_{2}^{2}+|\vec{\mathscr{p_{}}}|^{2} }=\sqrt{ m_{1}^{2}+|\vec{\mathscr{p}}^{'}|^{2} }+\sqrt{ m_{2}^{2}+|\vec{\mathscr{p}}^{'}|^{2} } \\
\implies & \mathscr{p}=\mathscr{p}^{'}
\end{align}$$
Then $q=(\mathcal{E}_{1}-\mathcal{E}_{3},  \vec{\mathscr{p}}  - \vec{\mathscr{p}^{'}} )=(0, \vec{\mathscr{p}}- \vec{{\mathscr{p}}^{'}})$. Then it's clear from the graph that $|\vec{\mathscr{p}}-\vec{\mathscr{p}^{'}}|=2 \mathscr{p}^{'}\sin \frac{\theta^{'}}{2}$. 
![[85f1cc43893fcc0332cb3aedc78da08d.jpg|centering|300]]
Then:
$$\begin{align}
t=q^{2}= -4 \mathscr{p}^{'2}\sin ^{2} \frac{\theta^{'}}{2 }
\end{align}$$
Or adopt the notation in the problem to write $t= -4p^{'2}\sin ^{2} \frac{\theta^{'}}{2}$
# Problem 6
## (a)
$$\begin{align}
\partial_{\mu}\rho & = \partial_{\mu}(x_{\nu}x^{\nu}) \\
 & = (\partial_{\mu}x_{\nu})x^{\nu}+ x_{\nu}\partial_{\mu}x^{\nu} \\
 & = g_{\nu \sigma}(\partial_{\mu}x^{\sigma})x^{\nu}+x_{\nu}\delta_{\mu}{}^{\nu} \\
 & = g_{\nu \sigma} \delta_{\mu}{}^{\sigma}x^{\nu}+ x_{\mu} \\
 & = g_{\mu \nu}x^{\nu}+x_{\mu} \\
 & = 2x_{\mu}
\end{align}$$
## (b)
$$\begin{align}
\partial_{\mu}\partial_{\nu}\rho & = \partial_{\mu}(2x_{\nu}) \\
 & = 2g_{\nu \lambda }\partial_{\mu}x^{\lambda}  \\
 & = 2g_{\nu \lambda}\delta_{\mu}{}^{\lambda}\\
 & = 2g_{\mu \nu}
\end{align}$$
## (c)
$$\begin{align}
\Box\rho & = \partial^{\mu}\partial_{\mu}(x_{\nu}x^{\nu}) \\
 & = \partial^{\mu}(2x_{\mu})  \\
 & =  2\delta^{\mu}{}_{\mu}\\

 & =8
\end{align}$$
## (d)
$$\begin{align}
\Box^{2}\rho^{2} & = \Box \Box(\rho^{2}) \\
  & = \Box(\partial^{\mu}\partial_{\mu}\rho^{2}) \\
 & = \Box(\partial^{\mu}(2\rho \partial_{\mu}\rho)) \\
 & = 2 \Box((\partial^{\mu}\rho)(\partial_{\mu}\rho)+\rho\Box\rho) \\
 & = 2 \Box(g^{\mu \nu}(\partial_{\nu}\rho)(\partial_{\mu}\rho)+8\rho) \\
 & = 2\Box(g^{\mu \nu}4x_{\nu}x_{\mu}+8\rho)  \\
 & = 2\Box(4x_{\mu}x^{\mu}+8\rho) \\
 & = 2\Box(4\rho + 8 \rho) \\
 & = 24 \Box\rho \\
 & = 192\end{align}$$
## (e)
$$\begin{align}
\partial_{\sigma}(x^{\mu}\partial_{\mu}f(\rho)) & = \partial_{\sigma}(x^{\mu}f^{'}\partial_{\mu}\rho) \\
 & = (\partial_{\sigma}x^{\mu})f^{'}\partial_{\mu}\rho+x^{\mu}(\partial_{\mu}\rho)(\partial_{\sigma}f^{'})+x^{\mu}f^{'}\partial_{\sigma}  \partial_{\mu}\rho \\
 & = \delta_{\sigma}{^{\mu}}f^{'}\partial_{\mu}\rho +x^{\mu}(\partial_{\mu}\rho)f^{''}\partial_{\sigma}\rho+x^{\mu}f^{'}\partial_{\sigma}\partial_{\mu}\rho \\
 & = f^{'}2x_{\sigma}+f^{''}x^{\mu}4x_{\mu}x_{\sigma}+2f^{'}x^{\mu}g_{\sigma \mu} \\
  & = 2f^{'}x_{\sigma}+4\rho f^{''}x_{\sigma}+2f^{'}x_{\sigma} \\
 & = 4f^{'}x_{\sigma}+4\rho f^{''}x_{\sigma}
\end{align}$$
## (f)

It suffices to show that $\Box\left(  \frac{1}{\rho} \right)=0$. We have:
$$\begin{align}
\Box\left(  \frac{1}{\rho} \right) & = \partial^{\mu}\partial_{\mu}\left(  \frac{1}{\rho} \right) \\
 & = \partial^{\mu}\left( - \frac{1}{\rho^{2}}\partial_{\mu}\rho \right) \\
 & = \frac{2}{\rho^{3}}(\partial^{\mu}\rho)(\partial_{\mu}\rho)- \frac{1}{\rho^{2}}\partial^{\mu}\partial_{\mu}\rho \\
 & = \frac{2}{\rho^{3}}g^{\mu \nu}(\partial_{\nu}\rho)(\partial_{\mu}\rho)- \frac{8}{\rho^{2}} \\
 & = \frac{2}{\rho^{3}}g^{\mu \nu}4x_{\nu}x_{\mu}- \frac{8}{\rho^{2}} \\
 & = \frac{8}{\rho^{3}}x_{\mu}x^{\mu}- \frac{8}{\rho^{2}} \\
 & = \frac{8}{\rho^{2}}- \frac{8}{\rho^{2}}  \\
& =0
\end{align}$$
It's also obvious that $\Box c_{2}=0$. Then by linearity, we have $\Box\left(  \frac{c_{1}}{\rho}+c_{2} \right)=0$. 

