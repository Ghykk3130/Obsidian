![[Pasted image 20260911163203.png|centering|700]]
![[Pasted image 20260911163237.png|centering|700]]
![[Pasted image 20260911163305.png|centering|700]]
![[Pasted image 20260911163408.png|centering|700]]
![[Pasted image 20260911163438.png|centering|700]]
![[Pasted image 20260911163457.png|centering|700]]


We know from Landau quantization, if we choose $B=B \hat{\mathbf{z}}$, and take the Landau gauge $\mathbf{A}=xB \hat{\mathbf{y}}$, then the hamiltonian is:
$$H= \frac{1}{2m}(p_{x}^{2}+(p_{y}+exB)^{2}+p_{z}^{2})$$
Observe that $[p_{y},H]=[p_{z},H]=0$ so that $k_{y},k_{z}$ are still good quantum numbers. Then after some algebra it's easy to find the energy spectrum:
$$E(l,k_{z})= \left( \frac{1}{2}+l \right)\hbar \omega_{c}+ \frac{\hbar^{2}k_{z}^{2}}{2m}$$
In some physics textbooks, it is custom to think of Landau levels as "quantized tubes" called Landau tubes in the k-space. They are defined by:
$$\begin{align}
 & \left( \frac{1}{2}+l \right)\hbar \omega_{c}+ \frac{\hbar^{2}k_{z}^{2}}{2m}= \frac{\hbar^{2}k^{2}}{2m} \\
\implies &  k_{x}^{2}+k_{y}^{2}= \frac{2m\omega_{c}}{\hbar}\left(  \frac{1}{2}+l \right)
\end{align}$$
And electrons are thought of as traveling along the intersection of the Landau tubes and the Fermi surface of free electron gas. My question is, in solving this problem, we do not even need to introduce $k_{x}$, since it's not a good quantum number. How could we still think of Fermi surface in the 3 dimensional k-space? I think Fermi liquid picture might apply here, which means that we still label the states with $(k_{x},k_{y},k_{z})$, but they are not the original free electron state (or Bloch state) anymore. But the problem of this picture is: why are we still assuming a dispersion $E= \frac{\hbar^{2}k^{2}}{2m}$ that is an eigenvalue before we turn on the perturbation field? Therefore, Fermi liquid might not be a correct way of thinking about this model. Are there any better explanations?

