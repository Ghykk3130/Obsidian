# Problem 1
## (a)

Since $\tau$ is in the exponent, $\tau$ must be dimensionless. Thus $[\tau]=0$. 

We know that $S= \int d^{4}x \mathcal{L}$, and $[S]=0$. Then $[d^{4}x\mathcal{L}]=0$. Know that $[x]=-1$. So $\mathcal{L}=4$. We also know that $[\partial \tau]=1$. So $[(\partial \tau)^{2}]=2$. Then $[f]=1$.
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
 & = 
\end{align}$$


