
$$\mathbf{v}= \frac{\mathbf{p}}{m}= \frac{1}{i\hbar}[\mathbf{r},H]$$
$$\begin{align} \\
 & \frac{1}{i\hbar}e^{-i\mathbf{k}\cdot \mathbf{r}}[\mathbf{r},H]e^{i\mathbf{k}\cdot \mathbf{r}}=\frac{\partial H(\mathbf{k})}{\hbar \partial \mathbf{k}},\ H(\mathbf{k})= \frac{|\mathbf{p}+\hbar \mathbf{k}|^{2}}{2m}+V(\mathbf{r}) \\

\end{align}$$
$$\begin{align}
\implies & 
\langle v_{j}\rangle= \bra{\psi_{n,\mathbf{k}}}  \frac{\partial H(\mathbf{k})}{\hbar \partial k_{j}}\ket{\psi_{n,\mathbf{k}}} = \frac{\partial\epsilon_{n}(\mathbf{k})}{\hbar \partial k_{j}}+\Omega^{n}_{t,k_{j}}
\end{align}$$

$$\ket{\psi_{n,\mathbf{k}}}=e^{id_{n}}e^{i\gamma_{n}}\left( \ket{u_{n,\mathbf{k}}} -i\hbar \sum_{m\neq n} \frac{\ket{u_{m,\mathbf{k}}} \bra{u_{m,\mathbf{k}}} \partial_{t}u_{n,\mathbf{k}}\rangle}{\epsilon_{n}-\epsilon_{m}}\right)$$

$$\bra{\psi_{n,\mathbf{k}}} \mathcal{O}\ket{\psi_{n,\mathbf{k}}} = \bra{u_{n,\mathbf{k}}} e^{-i\mathbf{k}\cdot \mathbf{r}}\mathcal{O}e^{i\mathbf{k}\cdot \mathbf{r}}\ket{u_{n,\mathbf{k}}}\implies\text{suffices to use the basis }\{ \ket{u_{n,\mathbf{k}}}  \}  $$


$$\mathbf{v}= \frac{\partial\epsilon(\mathbf{k})}{\hbar \partial \mathbf{k}}$$



$H=H(\mathbf{R}(t)),\ \dot{\mathbf{H}}\text{ small}$

$$\ket{\psi} = e^{id_{n}}e^{i\gamma_{n}} \left( \ket{n} - i\hbar \sum_{m\neq n}  \frac{\ket{m} \bra{m} \partial_{t}n\rangle}{\epsilon_{n}-\epsilon_{m}}\right)$$

$$\begin{align}
 & \ket{n(t)} \text{ - instantaneous eigenkets} \\
 & d_{n}\text{ - dynamic phase} \\
 & \gamma_{n}\text{ - Berry phase}
\end{align}$$


$$\gamma_{n}=\int_{0}^{T}dt i \bra{n} \frac{\partial}{\partial t}n\rangle=\oint d\mathbf{R}\cdot i\bra{n}  \frac{\partial}{\partial \mathbf{R}}n\rangle=\int d^{2}R \hat{\mathbf{n}}\cdot \boldsymbol{\Omega}$$





$$\boldsymbol{\Omega}^{n}= i \bra{ \frac{\partial}{\partial \mathbf{R}}n}\times \ket{ \frac{\partial}{\partial \mathbf{R}}n}  $$


$$\text{Gauge choice: }\mathbf{E}= - \frac{\partial \mathbf{A}}{\partial t}$$

$$H(\mathbf{q},t)=e^{-i\mathbf{q}\cdot \mathbf{r}}H(t)e^{i\mathbf{q}\cdot \mathbf{r}}= \frac{|\mathbf{p}+\hbar \mathbf{q}+|e|\mathbf{A}|^{2}}{2m}+V$$$$\epsilon_{n}=\epsilon_{n}(\mathbf{k})$$
$$\mathbf{j}= \frac{1}{(2\pi)^{2}}\int_{\text{BZ}} d^{2}ke\mathbf{v}f(\epsilon_{n}(\mathbf{k}))$$
$$C= \frac{1}{2\pi}\int_{\text{BZ}} d^{2}k\Omega_{k_{x},k_{y}}$$

>[!Note] Setup
>Time-dependent Hamiltonian $H = H(\mathbf{R}(t))$, with $\dot{\mathbf{R}} \to 0$.
>Let $|n(\mathbf{R})\rangle$ be the instantaneous eigenkets with energy $\epsilon_n$.

> [!theorem] First-Order Perturbed State
> The state evolves with a dynamic phase $d_n$ and Berry phase $\gamma_n$:
> $$|\psi(t)\rangle = e^{id_n} e^{i\gamma_n} \left( |n\rangle \underbrace{ - i\hbar \sum_{m \neq n} \frac{|m\rangle\langle m|\partial_t n\rangle}{\epsilon_n - \epsilon_m} }_{\text{First-order correction}} \right)$$

> [!Success] Geometric Phase (Closed Loop)
> Using Stokes' theorem, the Berry phase over a closed path in parameter space is:
> $$
> \begin{aligned}
> \gamma_n &= \oint d\mathbf{R} \cdot i\langle n | \nabla_{\mathbf{R}} | n \rangle \\
> &= \int d\mathbf{S} \cdot \boldsymbol{\Omega}_n \quad (\text{Berry Curvature})
> \end{aligned}
> $$
Define the velocity operator:
$$\mathbf{v} = \frac{\mathbf{p}}{m} = \frac{1}{i\hbar}[\mathbf{r}, H]$$

Transforming to the cell-periodic basis $\{|u_{n,\mathbf{k}}\rangle\}$, the effective operator becomes:
$$\tilde{\mathbf{v}}(\mathbf{k}) = \frac{1}{i\hbar} e^{-i\mathbf{k}\cdot\mathbf{r}}[\mathbf{r}, H]e^{i\mathbf{k}\cdot\mathbf{r}} = \frac{\partial H(\mathbf{k})}{\hbar \partial \mathbf{k}}$$

Evaluating the expectation value $\langle \psi_{n,\mathbf{k}} | \tilde{v}_j | \psi_{n,\mathbf{k}} \rangle$ using the first-order perturbed state:

> [!Success] Emergence of Anomalous Velocity
> The cross-terms between the 0th-order and 1st-order states yield an extra geometric contribution transverse to the band dispersion:
> $$\langle v_j \rangle = \frac{\partial \epsilon_n(\mathbf{k})}{\hbar \partial k_j} + \Omega^n_{t, k_j}$$


**1. Adiabatic Setup**
Time-dependent Hamiltonian $H = H(\mathbf{R}(t))$, with $\dot{\mathbf{R}} \to 0$.
Let $|n(\mathbf{R})\rangle$ be the instantaneous eigenkets with energy $\epsilon_n$.

**2. First-Order Perturbed State**
The state evolves with a dynamic phase $d_n$ and Berry phase $\gamma_n$:
$$|\psi(t)\rangle = e^{id_n} e^{i\gamma_n} \left( |n\rangle \underbrace{ - i\hbar \sum_{m \neq n} \frac{|m\rangle\langle m|\partial_t n\rangle}{\epsilon_n - \epsilon_m} }_{\text{First-order correction}} \right)$$

> [!success] Geometric Phase (Closed Loop)
> Using Stokes' theorem, the Berry phase over a closed path in parameter space isolates the geometric contribution:
> $$
> \begin{aligned}
> \gamma_n &= \oint d\mathbf{R} \cdot i\langle n | \nabla_{\mathbf{R}} | n \rangle \\
> &= \int d\mathbf{S} \cdot \boldsymbol{\Omega}_n \quad (\text{Berry Curvature})
> \end{aligned}
> $$

**Evaluating the Anomalous Term**
Recall the velocity expectation value derived from the perturbed state:
$$\langle v_i \rangle = \frac{\partial \epsilon_n(\mathbf{k})}{\hbar \partial k_i} + \Omega^n_{t, q_i}$$

**Transformation of Derivatives**
Using the definition $\mathbf{k} = \mathbf{q} + \frac{|e|}{\hbar}\mathbf{A}(t)$, the temporal derivative transforms according to the chain rule:
$$\partial_t = \dot{\mathbf{k}} \cdot \nabla_{\mathbf{k}} = -\frac{|e|}{\hbar}\mathbf{E} \cdot \nabla_{\mathbf{k}}$$
Substituting this into the definition of $\Omega^n_{t, q_i}$ directly yields the transverse anomalous component.

> [!Success] Semiclassical Equation of Motion
> The velocity of the Bloch electron acquires an anomalous term proportional to the Berry curvature $\boldsymbol{\Omega}^n(\mathbf{k})$:
> $$\mathbf{v} = \frac{\partial \epsilon_n(\mathbf{k})}{\hbar \partial \mathbf{k}} + \frac{|e|}{\hbar} \mathbf{E} \times \boldsymbol{\Omega}^n(\mathbf{k})$$




**1. Stokes' Theorem on the Brillouin Zone**
The Chern number is defined over the 2-torus BZ: $C = \frac{1}{2\pi}\int_{\text{BZ}} \Omega_{k_z} d^2k$.
Applying Stokes' theorem to the BZ boundary ($\partial\text{BZ} = \text{AB}\cup\text{BC}\cup\text{CD}\cup\text{DA}$):
$$C = \frac{1}{2\pi} \left[ \int_{0}^{\frac{2\pi}{a}} \Delta A_{k_x}(k_x) dk_x + \int_{0}^{\frac{2\pi}{b}} \Delta A_{k_y}(k_y) dk_y \right]$$

**2. Gauge Transformation across Edges**
States on opposite BZ edges describe the same physical state up to a gauge phase:
$$|\psi(k_x, 0)\rangle = e^{i\theta(k_x)}|\psi(k_x, \frac{2\pi}{b})\rangle \implies \Delta A_{k_x} = -\frac{\partial \theta}{\partial k_x}$$
$$|\psi(\frac{2\pi}{a}, k_y)\rangle = e^{i\phi(k_y)}|\psi(0, k_y)\rangle \implies \Delta A_{k_y} = -\frac{\partial \phi}{\partial k_y}$$
Integration directly yields the phase accumulation along the boundary:
$$2\pi C = \theta(0)-\theta\left(\frac{2\pi}{a}\right) + \phi(0)-\phi\left(\frac{2\pi}{b}\right)$$

**3. Single-Valuedness at BZ Corners**

The four corners of the BZ correspond to the exact same point in reciprocal space. Evaluating the phase consistency along the corners requires:
$$e^{-i\theta\left( \frac{2\pi}{a} \right)}e^{i\phi(0)}=e^{i\phi\left( \frac{2\pi}{b} \right)}e^{-i\theta(0)}$$

> [!Success] Topological Quantization
> Taking the logarithm of the corner consistency condition strictly dictates that the total phase winding must be an integer multiple of $2\pi$:
> $$2\pi C = 2\pi m \implies C \in \mathbb{Z}$$



**Integrating the Hall Current**
For a 2D insulator, the Fermi sea consists of completely filled bands. The integral of the band dispersion term over the periodic Brillouin zone exactly vanishes: $\int_{\text{BZ}} \frac{\partial \epsilon}{\partial \mathbf{k}} d^2k = 0$. 

Applying an electric field $\mathbf{E} = E \hat{\mathbf{y}}$, the velocity becomes $\mathbf{v} = \frac{|e|}{\hbar}E\Omega_{k_x, k_y} \hat{\mathbf{x}}$.
The macroscopic charge current density $j_x$ is obtained by integrating the velocity of all occupied states over the BZ:
$$
\begin{aligned}
j_x &= \frac{1}{(2\pi)^2} \int_{\text{BZ}} e v_x d^2k \\
&= \frac{1}{(2\pi)^2} \int_{\text{BZ}} e \left( \frac{|e|}{\hbar} \Omega_{k_x, k_y} E \right) d^2k \\
&= -\frac{e^2}{\hbar (2\pi)^2} E \int_{\text{BZ}} \Omega_{k_x, k_y} d^2k
\end{aligned}
$$

Using the definition of the Chern number $C = \frac{1}{2\pi}\int_{\text{BZ}} \Omega_{k_x, k_y} d^2k$, we substitute $\int \Omega d^2k = 2\pi C$:
$$j_x = -\frac{e^2}{h} C E$$

> [!Success] TKNN Formula (1982)
> From $j_x = \sigma_{xy} E_y$, the Hall conductivity is strictly determined by the topological invariant of the bulk band:
> $$\sigma_{xy} = -\frac{e^2}{h}C$$
> Since the Chern number $C \in \mathbb{Z}$, the Hall conductivity must be exactly quantized.


$$\begin{aligned}
j_x &= -\frac{e^2}{\hbar (2\pi)^2} E \int_{\text{BZ}} \Omega_{k_x, k_y} d^2k=- \frac{e^{2}}{h}CE
\end{aligned}$$

In a 2D system, breaking the $z \to -z$ inversion symmetry (e.g., via a potential gradient $\nabla V$) introduces a relativistic spin-orbit coupling.

$$H(\mathbf{k}) = \underbrace{\frac{\hbar^2 k^2}{2m^{*}}}_{\text{Kinetic Energy}} + \underbrace{\lambda(\mathbf{k}\times \sigma)\cdot   \hat{\mathbf{z}}}_{\text{Rashba SOC}} - \underbrace{\Delta \sigma_z}_{\text{Exchange Interaction}}$$

The Berry curvature $\Omega$ is determined by the solid angle subtended by the unit vector $\hat{\mathbf{n}}(\mathbf{k}) = \mathbf{h}/|\mathbf{h}|$ on the Bloch sphere.

$$\Omega_{\pm} = \mp \frac{\Delta \lambda^2}{2(\lambda^2k^2 + \Delta^2)^{3/2}}$$