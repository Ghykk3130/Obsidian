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




