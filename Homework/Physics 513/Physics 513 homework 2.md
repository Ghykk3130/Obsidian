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
Cancel the $2$ to write it as:
$$\Box\phi_{2}+\mu \phi_{1}\phi_{2}+\lambda \phi_{1}^{2}\phi_{2}=0$$
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
 & = (\dot{\phi}_{1})^{2}+|\nabla \phi_{1}|^{2}+(\dot{\phi}_{2})^{2}+|\nabla \phi_{2} |^{2}+m^{2}\phi_{1}^{2}+\mu \phi_{1}\phi_{2}^{2}+\lambda \phi_{1}^{2}\phi_{2}^{2} \\
 & = \frac{1}{4}\pi_{1}^{2}+ \frac{1}{4}\pi_{2}^{2}+|\nabla \phi_{1} |^{2}+|\nabla \phi_{2}|^{2}+m^{2}\phi_{1}^{2}+\mu \phi_{1}\phi_{2}^{2}+\lambda \phi_{1}^{2}\phi_{2}^{2}
\end{align}$$
## (d)

Know that $[\mathcal{L}]=M^{4}$, and $[\partial_{\mu}]=[\partial^{\mu}]=M^{1}$. Therefore $[\phi]=M^{1}$. Observe in the lagrangian we have the term $m^{2}\phi_{1}^{2}$. Then $[m^{2}\phi_{1}^{2}]=M^{4}$. Then $[m]=M^{1}$. The mass dimension of $m^{2}$ is $2$

Similarly, $[\mu \phi_{1}\phi_{2}^{2}]=M^{4}\implies[\mu]=M^{1}$. Its mass dimension is $1$. $[\lambda \phi_{1}^{2}\phi_{2}^{2}]=M^{4}\implies [\lambda]=M^{0}$. Its mass dimension is $0$.
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
Observe these two momenta are complex conjugate to each other, just denote them as $\pi=\pi_{1},\ \pi ^{*}=\pi_{2}$.

The hamiltonian is given by:
$$\begin{align}
\mathcal{H} & = \pi_{1}  \dot{\phi}+\pi_{2}  \dot{\phi}^{*}-\partial_{\mu}\phi ^{*}\partial^{\mu}\phi+m^{2}\phi ^{*}\phi+V \\
 & = 2|\dot{\phi} |^{2}-|\dot{\phi} |^{2}+|\nabla \phi|^{2}+m^{2} |\phi|^{2}+V \\
 & = |\dot{\phi} |^{2}+|\nabla \phi|^{2}+m^{2}|\phi |^{2}+V \\
 & = |\pi|^{2}+|\nabla \phi|^{2}+m^{2}|\phi|^{2}+V
\end{align}$$
To emphasize the independence between the variables and their complex conjugate, we can also write:
$$\mathcal{H}= \pi \pi ^{*}+ \nabla \phi ^{*}\cdot \nabla \phi+m^{2}\phi \phi ^{*}+V(\phi \phi ^{*})$$
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
## (d)

Assume that $\alpha$ is infinitesimal, the field is transformed by:
$$\begin{align}
\phi & \mapsto e^{i\alpha}\phi \\
 & = (1+i\alpha)\phi
\end{align}$$
Then $\alpha \Delta \phi=i\alpha \phi$. Similarly, $\alpha \Delta \phi ^{*}=-i\alpha \phi ^{*}$. We also notice that the lagrangian is invariant under the gauge transformation. Therefore the $J^{\mu}$ term in the Noether current vanishes. Then Noether current is given by:
$$\begin{align}
j^{\mu} & =   \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi)} \Delta \phi+ \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}\phi ^{*})} \Delta \phi ^{*} \\
 & = (\partial^{\mu}\phi ^{*} )i \phi+(\partial^{\mu}\phi)(-i \phi ^{*}) \\
 & = -i\phi ^{*} \overset{\leftrightarrow}{\partial^{\mu}}\phi ^{} ,\ \text{where } f  \overset{\leftrightarrow}{\partial^{\mu}}g=f\partial^{\mu}g-g\partial^{\mu}f
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
The above two equations should give the familiar Maxwell's equations. Although the second so-called Bianchi equation is not asked for, I still derived it here. 
## (b)

For $\partial_{\mu}F^{\mu \nu}=0$. Take $\nu=0$, we have:
$$\begin{align}
 & \partial_{\mu}F^{\mu{0}}=0 \\
\implies & \partial_{\mu}F^{0\mu}=0 \\
\implies & \frac{\partial}{\partial x^{\mu}}E^{\mu}=0 \\
\implies & \nabla \cdot \mathbf{E}=0
\end{align}$$
Now take $\nu=1,2,3$, we have:
$$\begin{align}
 & \partial_{\mu}F^{\mu \nu}=0 \\
\implies & \partial_{0}F^{0\nu}+\sum_{\mu=1}^{3}\partial_{\mu}F^{\mu \nu}=0 \\
\implies & - \frac{\partial E^{\nu}}{\partial t}-\sum_{\mu}\epsilon^{\mu \nu \alpha}\partial_{\mu}B^{\alpha}=0 \\
\implies & - \frac{\partial E^{\nu}}{\partial t}+(\nabla \times \mathbf{B})^{\nu}=0 \\
\implies & \nabla \times \mathbf{B}= \frac{\partial \mathbf{E}}{\partial t}
\end{align}$$
## (c)

We have:
$$\begin{align}
T^{\mu \nu} & = \frac{\partial\mathcal{L}}{\partial(\partial_{\mu}A_{\rho})}\partial^{\nu}A_{\rho}-g^{\mu \nu}\mathcal{L} \\
 & = -F^{\mu \rho}\partial^{\nu}A_{\rho}+ \frac{1}{4}g^{\mu \nu}F_{\rho \sigma}F^{\rho \sigma}
\end{align}$$
## (d)

We have:
$$\begin{align}
\hat{T}^{\mu \nu} & = -F^{\mu \rho}\partial^{\nu}A_{\rho}+ \frac{1}{4}g^{\mu \nu}F_{\rho \sigma}F^{\rho \sigma}+\partial_{\lambda}(F^{\mu \lambda}A^{\nu}) \\
\end{align}$$
Obviously, $\frac{1}{4}g^{\mu \nu}F_{\rho \sigma}F^{\rho \sigma}$ is symmetric. It suffices to show the remaining part is symmetric. Recall we derived that $\partial_{\lambda}F^{\lambda \mu}=0\implies-\partial_{\lambda}F^{\mu \lambda}=0$. Then:
$$\begin{align}
-F^{\mu \rho}\partial^{\nu}A_{\rho}+\partial_{\lambda}(F^{\mu \lambda}A^{\nu}) & = -F^{\mu \rho}\partial^{\nu}A_{\rho}+(\partial_{\lambda}F^{\mu \lambda})A^{\nu}+F^{\mu \lambda}\partial_{\lambda}A^{\nu} \\
 & = -F^{\mu \rho}\partial^{\nu}A_{\rho}+F^{\mu \lambda}\partial_{\lambda}A^{\nu} \\
 & = -F^{\mu \rho}\partial^{\nu}A_{\rho}+F^{\mu \rho}\partial_{\rho}A^{\nu} \\
 & = F^{\mu \rho}F_{\rho}{}^{\nu} 
\end{align}$$
This tensor must be symmetric since:
$$\begin{align}
F^{\mu \rho}F_{\rho}{}^{\nu} & = g_{\rho \sigma}F^{\mu \rho}F^{\sigma \nu} \\
 & = g_{\rho \sigma}(-F^{\rho \mu})(-F^{\nu \sigma}) \\
 & = g_{\sigma \rho}F^{\rho \mu}F^{\nu \sigma} \\
 & = F^{\nu \sigma}F_{\sigma}{}^{\mu}
\end{align}$$
## (e)

We already showed that:
$$\hat{T}^{\mu \nu}=-F^{\mu \rho}F_{\rho}{}^{\nu}+ \frac{1}{4}g^{\mu \nu}F_{\rho \sigma}F^{\rho \sigma}$$
Notice that $F_{\rho \sigma}F^{\rho \sigma}=-F_{\sigma \rho}F^{\rho \sigma}$ is just the trace. We have:
$$\begin{align}
F_{\rho \sigma}F^{\rho \sigma} & = F_{0\sigma}F^{0\sigma}+F_{\rho{0}}F^{\rho{0}}+\sum_{\rho,\sigma\neq 0,i,j}F_{\rho \sigma}F^{\rho \sigma} \\
 & = -2(F^{0\sigma})^{2}+\sum_{\rho,\sigma,i,j}g_{\rho \alpha}g_{\sigma \beta}\epsilon^{\alpha \beta j}B^{j}\epsilon^{\rho \sigma i}B^{i} \\
 & = -2|\mathbf{E}|^{2}+ \sum_{\rho,\sigma,i,j}\delta^{\rho}{}_{\alpha}\delta^{\sigma}{}_{\beta}\epsilon^{\alpha \beta j}B^{j}\epsilon^{\rho \sigma i}B^{i} \\
 & = -2|\mathbf{E}|^{2}+ \sum_{\rho,\sigma,i,j}\epsilon^{\rho \sigma j}B^{j}\epsilon^{\rho \sigma i}B^{i} \\
 & = -2|\mathbf{E}|^{2}+\sum_{\sigma,i,j}(\delta^{\sigma}{}_{\sigma}\delta^{j}{}_{i}-\delta^{\sigma}{}_{i}\delta^{j}{}_{\sigma} )B^{j}B^{i} \\
 & = -2|\mathbf{E}|^{2}+\sum_{i,j}(3\delta^{j}{}_{i}-\delta^{j}{}_{i})B^{j}B^{i} \\
 & = -2|\mathbf{E}|^{2}+ 2|\mathbf{B} |^{2}
\end{align}$$
Note that we use the relation that if the indices are restricted to spatial, then $g_{\rho \alpha}$ is just a delta function with a minus sign.

If $\mu\neq 0$, combined with the fact that $F^{0 0}=0$, we can restrict the indices in the expression below to the spatial. We have:
$$\begin{align}
F^{0 \rho }F_{\rho}{}^{\mu} & =
 g_{\rho \sigma}F^{0 \rho}F^{\sigma \mu} \\
 & = g_{\rho \sigma}E^{\rho}\epsilon^{\sigma \mu \alpha}B^{\alpha} \\
 & = -E^{\rho}\epsilon^{\rho \mu \alpha}B^{\alpha} \\
 & = \epsilon^{\mu \rho \alpha}E^{\rho}B^{\alpha} \\
 & = (\mathbf{E}\times \mathbf{B})^{\mu}
\end{align}$$
If $\mu=0$, restrict $\rho$ to spatial to have:
$$\begin{align}
F^{0 \rho}F_{\rho}{}^{0} & = F^{0 \rho}g_{\rho \mu}F^{\mu{0}} \\
 & = -F^{0\rho}F^{\rho{0}} \\

 & = (F^{0\rho})^{2} \\
 & = |\mathbf{E}|^{2}
\end{align}$$
I also restrict $\mu=1,2,3$ above, since $F^{\mu{0}}=0\text{ for }\mu=0$. Then:
$$\begin{align}
\mathcal{E} & = \hat{T}^{00} \\
 & = |\mathbf{E}|^{2}+ \frac{1}{4}(-2|\mathbf{E}|^{2}+2|\mathbf{B}|^{2}) \\
 & = \frac{1}{2}(|\mathbf{E}|^{2}+|\mathbf{B}|^{2})
\end{align}$$
$$\begin{align}
S^{i} & = \hat{T}^{0i} \\
 & = F^{0\rho}F_{\rho}{}^{i} \\
 & = (\mathbf{E}\times \mathbf{B})^{i}
\end{align}$$




