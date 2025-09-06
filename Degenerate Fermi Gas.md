# Big Picture
The behavior of fermi gas at relatively high $\tau$ is well described by classical limit, and theorems like equipartition, so we only study low $\tau$ case, where problems occur.

First we have some fermions and some orbitals. We want to know how those fermions fit into those orbitals, so we write out Fermi-Dirac distribution $f(\epsilon)$ to describe the average number of fermions on orbital $\epsilon$  (occupancy).

After studying how fermions fill those orbitals, we want to study how those orbitals themselves distribute. So we study density of states $\mathcal{D}(\epsilon)$ .

The two things we have done above are quite general, valid for any temperature. So now we study the limiting case as $\tau \rightarrow 0$ . Then Fermi-Drac distribution would look like a step function. We use this approximation when doing integrals and other things. Then we're ready to find thermodynamic quantities with the preparations above.

# Preparations
Now we start what we planned in the big picture.
## $f(\epsilon)$
This is very easy. We take the orbital we are interested in as the grand canonical ensemble. The only two Gibbs factors are $1$ and $e^{\frac{\mu-\epsilon}{\tau}}$ . So $f(\epsilon) = \frac{1\cdot 0}{\mathcal{Z}} + \frac{e^{\frac{\mu - \epsilon}{\tau}}\cdot 1}{\mathcal{Z}} = \frac{1}{e^{\frac{\epsilon - \mu}{\tau}} + 1}$  . Notice that the occupancy is always smaller than one, which is consistent with properties of fermions.
## $\mathcal{D}(\epsilon)$ 
>[! Idea]
>We directly compute the number of states below orbital $\epsilon_{0}$, turn the sum into an integral from zero to $\epsilon$, and then differentiate to find $\mathcal{D}(\epsilon)$ .

Assume we're dealing with electron gas. Then there are two spins. The number of states below $\epsilon_0$ is:
$$
\sum_{\vec{n}} 2=2 \cdot \frac{1}{8} \int_{0}^{n\left(\varepsilon_{0}\right)} 4 \pi \cdot n^{2} d n=2 \cdot \frac{1}{8} \cdot \frac{4 \pi}{3} n\left(\varepsilon_{0}\right)
$$
Since we want to differentiate with respect to $\epsilon$, we write that $n$ in terms of epsilon.

By solving the Schrodinger's equation, we find that:
$\varepsilon_{\vec{n}}=\frac{\hbar^{2}}{2 m}\left(\frac{n \pi}{L}\right)^{2}, \quad 2$ spin states $|\uparrow\rangle,|\downarrow\rangle$ each $\vec{n}$.
$$
\begin{aligned}
& \varepsilon_{0}=\frac{\hbar^{2}}{2 m}\left(\frac{n\left(\varepsilon_{0}\right) \pi}{L}\right)^{2} \Rightarrow n\left(\varepsilon_{0}\right)=\frac{L}{\hbar \pi} \sqrt{2 m \varepsilon_{0}} \\
& number\ of\ states=\frac{\pi}{3}\left(\frac{L}{\hbar \pi}\right)^{3}\left(2 m \varepsilon_{0}\right)^{3 / 2} \\
& \Rightarrow D(\varepsilon)=\frac{\partial}{\partial \varepsilon_{0}} number\ of\ states=\frac{V}{2 \pi^{2}}\left(\frac{2 m}{\hbar^{2}}\right)^{3 / 2} \varepsilon^{1 / 2}
\end{aligned}
$$

