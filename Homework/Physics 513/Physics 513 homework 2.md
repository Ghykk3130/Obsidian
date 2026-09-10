# Problem 1
## (a)

Since $\tau$ is in the exponent, $\tau$ must be dimensionless. Thus $[\tau]=M^{0}$. The mass dimension is $0$.  

We know that $S= \int d^{4}x \mathcal{L}$, and $[S]=M^{0}$. Then $[d^{4}x\mathcal{L}]=M^{0}$. Know that $[x]=M^{-1}$. So $\mathcal{L}=4$. We also know that $[\partial \tau]=M$. So $[(\partial \tau)^{2}]=M^{2}$. Then $[f]=M^{1}$. The mass dimension is $1$.
## (b)

We have:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\tau) } & = -f^{2} e^{-2\tau} \frac{\partial}{\partial(\partial_{\mu}\tau)}[g^{\sigma \nu}(\partial_{\sigma}\tau)\partial_{\nu}\tau] \\
 & = -f^{2}e^{-2\tau} g^{\mu \nu}\partial_{\nu}\tau- f^{2} e^{-2\tau}g^{\sigma \mu}\partial_{\sigma}\tau \\
 & = -2f^{2} e^{-2\tau}g^{\mu \nu}\partial_{\nu}\tau \\
 & = -2f^{2}e^{-2\tau}\partial^{\mu}\tau
\end{align}$$
Then:
$$\begin{align}
\partial_{\mu} \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\tau)} & = -2f^{2} \partial_{\mu}(e^{-2\tau}\partial^{\mu}\tau) \\
 & = -2f^{2}[-2e^{-2\tau}(\partial_{\mu}\tau)\partial^{\mu}\tau+ e^{-2\tau}\partial_{\mu}\partial^{\mu}\tau ] \\
 & = 4f^{2}e^{-2\tau}(\partial \tau)^{2}-2f^{2}e^{-2\tau}\Box\tau
\end{align}$$
Next, we compute:
$$\frac{\partial\mathcal{L}}{\partial \tau}= 2f^{2} e^{-2\tau}(\partial \tau)^{2}$$
Then:
$$\begin{align}
 & 4f^{2}e^{-2\tau}(\partial \tau)^{2}-2f^{2}e^{-2\tau}\Box\tau-2f^{2}e^{-2\tau}(\partial \tau)^{2}=0 \\
\implies & \Box\tau=(\partial \tau)^{2}
\end{align}$$
# Problem 2
## (a)

We have:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi_{1})} & = \frac{\partial}{\partial(\partial_{\mu}\phi_{1})}(\partial_{\mu}\phi_{1}\partial^{\mu}\phi_{1}) \\
 & = \frac{\partial}{\partial(\partial_{\mu}\phi_{1})}(g^{\nu \rho}\partial_{\rho}\phi_{1}\partial_{\nu}\phi_{1}) \\
 & = g^{\nu \mu}\partial_{\nu}\phi_{1}+g^{\mu \rho}\partial_{\rho}\phi_{1} \\
 & = 2\partial^{\mu}\phi_{1}
\end{align}$$
Then:
$$\partial_{\mu} \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi_{1})}= 2\Box\phi_{1}$$
We also have:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial \phi_{1}} & = -2m^{2}\phi_{1}-\mu \phi_{2}^{2}-2\lambda \phi_{1}\phi_{2}^{2}
\end{align}$$
Then the EOM of $\phi_{1}$ is:
$$2\Box\phi_{1}+2m^{2}\phi_{1}+\mu \phi_{2}^{2}+2\lambda \phi_{1}\phi_{2}^{2}=0$$
Similarly:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi_{2})} & = \frac{\partial}{\partial(\partial_{\mu}\phi_{2})}(\partial_{\mu}\phi_{2}\partial^{\mu}\phi_{2}) \\
 & = 2\partial^{\mu}\phi_{2}
\end{align}$$
Then:
$$\partial_{\mu}  \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi_{2})}=2\Box\phi_{2}$$
Next we compute:
$$\frac{\partial\mathcal{L}}{\partial \phi_{2}}= -2\mu \phi_{1}\phi_{2}-2\lambda \phi_{1}^{2}\phi_{2}$$
Then the EOM of $\phi_{2}$ is:
$$2\Box\phi_{2}+2\mu \phi_{1}\phi_{2}+2\lambda \phi_{1}^{2}\phi_{2}=0$$
## (b)

We have:
$$\begin{align}
\pi_{1} & = \frac{\partial\mathcal{L}}{\partial(\partial_{0}\phi_{1})} \\
 & = \frac{\partial}{\partial(\partial_{0}\phi_{1})}((\partial_{0}\phi_{1})^{2}) \\
 & = 2\partial_{0}\phi_{1} \\
 & = 2  \dot{\phi}_{1}
\end{align}$$
Similarly:
$$\begin{align}
\pi_{2} & = \frac{\partial\mathcal{L}}{\partial(\partial_{0}\phi_{2})} \\
 & = \frac{\partial}{\partial(\partial_{0}\phi_{1})}((\partial_{0}\phi_{2})^{2}) \\
 & = 2\partial_{0}\phi_{2} \\
 & = 2  \dot{\phi}_{2}
\end{align}
$$
## (c)

We perform the Legendre transformation:
$$\begin{align}
\mathcal{H} & = \pi_{a}  \dot{\phi}_{a}-\mathcal{L} \\
 & = 2(\dot{\phi}_{1})^{2}+  2(\dot{\phi}_{2})^{2}-\partial_{\mu}\phi_{1}\partial^{\mu}\phi_{1}-\partial_{\mu}\phi_{2}\partial^{\mu}\phi_{2}+m^{2}\phi_{1}^{2}+\mu \phi_{1}\phi^{2}+\lambda \phi_{1}^{2}\phi_{2}^{2} \\
 & = (\dot{\phi}_{1})^{2}+|\nabla \phi_{1}|^{2}+(\dot{\phi}_{2})^{2}+|\nabla \phi_{2} |^{2}+m^{2}\phi_{1}^{2}+\mu \phi_{1}\phi_{2}^{2}+\lambda \phi_{1}^{2}\phi_{2}^{2}
\end{align}$$
## (d)

Know that $[\mathcal{L}]=4$, and $[\partial_{\mu}]=[\partial^{\mu}]=1$. Therefore $[\phi]=1$. Observe in the lagrangian we have the term $m^{2}\phi_{1}^{2}$. Then $[m^{2}\phi_{1}^{2}]=4$. Then $[m]=1$. 

Similarly, $[\mu \phi_{1}\phi_{2}^{2}]=4\implies[\mu]=1$. $[\lambda \phi_{1}^{2}\phi_{2}^{2}]=4\implies [\lambda]=0$.
# Problem 3
## (a)

We have:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi)} & = \frac{\partial}{\partial(\partial_{\mu }\phi)}(g^{\rho \sigma}\partial_{\sigma}\phi ^{*}\partial_{\rho}\phi) \\
 & = g^{\mu \sigma}\partial_{\sigma }\phi ^{*} \\
 & = \partial^{\mu}\phi ^{*}
\end{align}$$
We also have:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial \phi} & = -m^{2}\phi ^{*}- V^{'}\phi ^{*}
\end{align}$$
Therefore, the Euler-Lagrange equation for $\phi ^{*}$ is:
$$\begin{align}
 & \partial_{\mu}\partial^{\mu}\phi ^{*}+m^{2}\phi ^{*}+V^{'}\phi ^{*}=0 \\
\implies & (\Box+m^{2}+V^{'})\phi ^{*}=0
\end{align}$$
Next, we compute:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi ^{*})} & = \partial^{\mu}\phi
\end{align}$$
Similarly:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial \phi ^{*}} & = -m^{2}\phi- V^{'}\phi
\end{align}$$
Therefore, the Euler-Lagrange equation for $\phi$ is:
$$\begin{align}
 & \partial_{\mu}\partial^{\mu}\phi+m^{2}\phi+V^{'}\phi=0 \\
\implies & (\Box\phi+m^{2}+V^{'})\phi=0
\end{align}$$
## (b)

We have:
$$\begin{align}
\pi_{1} & = \frac{\partial\mathcal{L}}{\partial(  \dot{\phi})}= \dot{\phi}^{*}
\end{align}$$
This is the canonical momenta conjugate to $\phi$. Similarly:
$$\begin{align}
\pi_{2} & = \frac{\partial\mathcal{L}}{\partial   \dot{\phi}^{*}}= \dot{\phi}
\end{align}$$
The hamiltonian is given by:
$$\begin{align}
\mathcal{H} & = \pi_{1}  \dot{\phi}+\pi_{2}  \dot{\phi}^{*}-\partial_{\mu}\phi ^{*}\partial^{\mu}\phi+m^{2}\phi ^{*}\phi-V \\
 & = 2|\dot{\phi} |^{2}-|\dot{\phi} |^{2}+|\nabla \phi|^{2}+m^{2} |\phi|^{2}-V \\
 & = |\dot{\phi} |^{2}+|\nabla \phi|^{2}+m^{2}|\phi |^{2}-V
\end{align}$$
## (c)

Since $\alpha$ is independent of $x^{\mu}$, we have:
$$\begin{align}
\partial_{\mu}\phi ^{*} \partial^{\mu}\phi & = \partial_{\mu}(e^{-i\alpha}\phi ^{*})\partial^{\mu}(e^{i\alpha}\phi ^{*}) \\
 & = e^{-i\alpha}e^{i\alpha}\partial_{\mu}\phi ^{*}\partial^{\mu}\phi \\
 & = \partial_{\mu}\phi ^{*}\partial^{\mu}\phi
\end{align}$$
Even more obviously:
$$(e^{-i\alpha}\phi ^{*})e^{i\alpha}\phi= \phi ^{*}\phi$$
Therefore:
$$\begin{align}
\mathcal{L}^{'} & = \partial_{\mu}(e^{-i\alpha}\phi ^{*})\partial^{\mu}(e^{i\alpha}\phi)-m^{2}(e^{-i\alpha}\phi ^{*})(e^{i\alpha}\phi)-V(e^{-i\alpha}\phi ^{*}e^{i\alpha}\phi) \\
 & = \partial_{\mu}\phi ^{*}\partial^{\mu}\phi-m^{2}\phi ^{*}\phi-V(\phi ^{*}\phi)=\mathcal{L}
\end{align}$$
The lagrangian is invariant.
## (c)

Assume that $\alpha$ is infinitesimal, the field is transformed by:
$$\begin{align}
\phi & \mapsto e^{i\alpha}\phi \\
 & = (1+i\alpha)\phi
\end{align}$$
Then $\bar{\delta}\phi=i\alpha \phi$. Similarly, $\bar{\delta}\phi ^{*}=-i\alpha \phi ^{*}$. Then Noether current is given by:
$$\begin{align}
j^{\mu} & =   \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi)}\bar{\delta}\phi+ \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi ^{*})}\bar{\delta}\phi ^{*} \\
 & = (\partial^{\mu}\phi ^{*} )i\alpha \phi+(\partial^{\mu}\phi)(-i\alpha \phi ^{*}) \\
 & = -i\alpha \phi ^{*} \overset{\leftrightarrow}{\partial^{\mu}}\phi ^{} 
\end{align}$$
# Problem 4
## (a)

We have:
$$\begin{align}
\mathcal{L}&=- \frac{1}{4}F_{\mu \nu}F^{\mu \nu}
 \\
 & =- \frac{1}{4}(\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu})(\partial^{\mu}A^{\nu}-\partial^{\nu}A^{\mu}) \\
 & = - \frac{1}{4}(\partial_{\mu}A_{\nu})\partial^{\mu}A^{\nu}+ \frac{1}{4}(\partial_{\nu}A_{\mu})\partial^{\mu}A^{\nu}+ \frac{1}{4}(\partial_{\mu}A_{\nu})\partial^{\nu}A^{\mu}- \frac{1}{4}(\partial_{\nu}A_{\mu})\partial^{\nu}A^{\mu} \\
 & = - \frac{1}{2}(\partial_{\mu}A_{\nu})\partial^{\mu}A^{\nu}+ \frac{1}{2}(\partial_{\nu}A_{\mu})\partial^{\mu}A^{\nu}
\end{align}$$
Then $\frac{\partial\mathcal{L}}{\partial A_{\mu}}=0$. It's easy to compute:
$$\begin{align}
\frac{\partial}{\partial (\partial_{\mu}A_{\nu})}((\partial_{\rho}A_{\sigma})\partial^{\rho}A^{\sigma}) & = \frac{\partial}{\partial(\partial_{\mu}A_{\nu})}(g^{\rho \alpha}g^{\sigma \beta}(\partial_{\rho}A_{\sigma})\partial_{\alpha}A_{\beta}) \\
 & = g^{\mu \alpha}g^{\nu \beta}\partial_{\alpha}A_{\beta}+ g^{\rho \mu}g^{\sigma \nu}\partial_{\rho}A_{\sigma} \\
 & = 2\partial^{\mu}A^{\nu}
\end{align}$$
$$\begin{align}
\frac{\partial}{\partial(\partial_{\mu}A_{\nu})} ((\partial_{\rho}A_{\sigma})\partial^{\sigma}A^{\rho}) & = \frac{\partial }{\partial(\partial_{\mu}A_{\nu}) }(g^{\sigma \alpha}g^{\rho \beta}(\partial_{\rho}A_{\sigma})\partial_{\alpha}A_{\beta}) \\
 & = g^{\nu \alpha}g^{\mu \beta}\partial_{\alpha}A_{\beta}+ g^{\sigma \mu}g^{\rho \nu}\partial_{\rho}A_{\sigma} \\
 & = \partial_{}^{\nu}A_{}^{\mu}
\end{align}$$
Therefore:
$$\begin{align}
\frac{\partial\mathcal{L}}{\partial(\partial_{\mu}A_{\nu})} 
 & = \partial^{\nu}A^{\mu}-\partial^{\mu}A^{\nu}=-F^{\mu \nu}
\end{align}$$
Then:
$$\begin{align}
\partial_{\mu} \frac{\mathcal{L}}{\partial(\partial_{\mu}A_{\nu})} & = \partial_{\mu}\partial^{\nu}A^{\mu}-\Box A^{\nu}=0 \\

\end{align}$$
Or equivalently write $\partial_{\mu}F^{\mu \nu}=0$.

Also observe that:
$$\begin{align}
\partial_{[\mu}F_{\lambda \rho]} & = \partial_{\mu}F_{\lambda \rho}+\partial_{\lambda}F_{\rho \mu}+\partial_{\rho}F_{\mu \lambda} \\
 & = \partial_{\mu}\partial_{\lambda}A_{\rho}- \partial_{\mu}\partial_{\rho}A_{\lambda}+\partial_{\lambda}\partial_{\rho}A_{\mu}-\partial_{\lambda}\partial_{\mu}A_{\rho}+\partial_{\rho}\partial_{\mu}A_{\lambda}-\partial_{\rho}\partial_{\lambda}A_{\mu} \\
 & = \partial_{\mu}\partial_{\lambda}A_{\rho}-\partial_{\lambda}\partial_{\mu}A_{\rho}+\partial_{\rho}\partial_{\mu}A_{\lambda}-\partial_{\mu}\partial_{\rho}A_{\lambda}+\partial_{\lambda}\partial_{\rho}A_{\mu}-\partial_{\rho}\partial_{\lambda}A_{\mu} \\
 & =0
\end{align}$$
The above two equations should give the familiar Maxwell's equations.
## (b)

For $\partial_{\mu}F^{\mu \nu}=0$. Take $\nu=0$, we have:
$$\begin{align}
 & \partial_{\mu}\partial^{0}A^{\mu}-\Box \phi=0 \\
\implies & \frac{\partial}{\partial t}\left(  \frac{\partial \phi}{\partial t}+\nabla \cdot \mathbf{A} \right)-\Box\phi=0 \\
\implies & \frac{\partial^{2}}{\partial t^{2}}\phi+\frac{\partial}{\partial t}(\nabla \cdot \mathbf{A})-\left(  \frac{\partial^{2}}{\partial t^{2}}-\nabla^{2} \right)\phi=0 \\
\implies & \nabla \cdot \frac{\partial \mathbf{A}}{\partial t}+\nabla \cdot \nabla \phi=0 \\
\implies & \nabla \cdot\left( -\nabla \phi- \frac{\partial \mathbf{A}}{\partial t} \right)=0 \\
\implies & \nabla \cdot \mathbf{E}=0 \end{align}$$
Next take $\nu=1,2,3$, we have:
$$\begin{align} \\
 & \partial_{\mu}\partial^{\nu}A^{\mu}-\Box A^{\nu}=0 \\

\implies   &  \partial^{\nu}(\partial_{0}A^{0}+\partial_{1}A^{1}  +\partial_{2}A^{2}+\partial_{3}A^{3})-(\partial_{0}\partial_{0}-\partial_{1}\partial_{1}-\partial_{2}\partial_{2}-\partial_{3}\partial_{3})A^{\nu}=0 \\
\implies & -\partial_{\nu}(\partial_{0}A^{0}+\partial_{1}A^{1}  +\partial_{2}A^{2}+\partial_{3}A^{3})-(\partial_{0}\partial_{0}-\partial_{1}\partial_{1}-\partial_{2}\partial_{2}-\partial_{3}\partial_{3})A^{\nu}=0 \\
\implies & -\partial_{\nu}\left(  \frac{\partial \phi}{\partial t}+\nabla \cdot \mathbf{A} \right)- \frac{\partial^{2}}{\partial t^{2}}A^{\nu}+ \nabla^{2}A^{\nu}=0 \\
\implies & \frac{\partial}{\partial t}(-\nabla \phi)-\nabla(\nabla \cdot \mathbf{A})- \frac{\partial^{2}}{\partial t^{2}}\mathbf{A}+\nabla^{2}\mathbf{A}=0
\end{align}$$
Recall that:
$$\begin{align}
 \nabla \times \mathbf{B} & = \nabla \times(\nabla \times \mathbf{A}) \\
 & = \nabla(\nabla \cdot \mathbf{A})-\nabla^{2}\mathbf{A} \\
 
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial}{\partial t}\left( -\nabla \phi- \frac{\partial \mathbf{A}}{\partial t} \right)-\nabla \times \mathbf{B}=0 \\
\implies & \frac{\partial \mathbf{E}}{\partial t}=\nabla \times \mathbf{B}
\end{align}$$
For $\partial_{[\lambda}F_{\mu \nu]}=0$,  take $(\lambda,\mu,\nu)=(1,2,3)$, we have:
$$\begin{align}
 & \partial_{1}F_{23}+\partial_{2}F_{31}+\partial_{3}F_{21}=0 \\
\implies & \partial_{1}(-B_{x})+\partial_{2}(-B_{y})+\partial_{3}(-B_{z})=0 \\
\implies & \nabla \cdot \mathbf{B}=0
\end{align}$$
Take $(\lambda,\mu,\nu)=(0,1,2)$, we have:
$$\begin{align}
 & \partial_{0}F_{12}+\partial_{1}F_{20}+\partial_{2}F_{01}=0 \\
\implies & \partial_{0}(-B_{z}) +\partial_{1}(-E_{y})+\partial_{2}(E_{x})=0 \\
\implies & (\nabla \times \mathbf{E})_{z}=-\frac{\partial}{\partial t}B_{z}
\end{align}$$
Take $(\lambda,\mu,\nu)=(0,2,3)$, similarly we get $(\nabla \times \mathbf{E})_{x}=- \frac{\partial}{\partial t}B_{x}$. Take $(\lambda,\mu,\nu)=(0,1,3)$, similarly we get $(\nabla \times \mathbf{E})_{y}=- \frac{\partial}{\partial t}B_{y}$. Then:
$$\nabla \times \mathbf{E}=- \frac{\partial}{\partial t}\mathbf{B}$$
## (c)






