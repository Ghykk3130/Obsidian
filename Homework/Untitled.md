**Integration technique:**
$$\begin{align}
\int CdT & = \int\frac{N\epsilon^{2}}{kT^{2}} \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+ \exp\left(  - \frac{\epsilon}{kT} \right)+2}dT \\
 & = \frac{N\epsilon^{2}}{k}\int \frac{1}{T^{2}} \frac{\exp\left(  \frac{\epsilon}{kT} \right)}{\left( \exp\left(  \frac{\epsilon}{kT} \right)+1 \right)^{2}}dT \\
 & = \frac{N\epsilon^{2}}{k}\left(  -\frac{k}{\epsilon} \right)\int \frac{1}{\left( \exp\left(  \frac{\epsilon}{kT} \right)+1 \right)^{2} }d\left(  \exp\left(  \frac{\epsilon}{kT} \right)+1 \right) \\
 & = \frac{N\epsilon^{2}}{k} \frac{k}{\epsilon} \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+1} \\
 & = N\epsilon \frac{1}{\exp\left(  \frac{\epsilon}{kT} \right)+1} 
\end{align}$$

**Caveat:**
- Find $\left(  \frac{\partial^{2}S}{\partial U^{2}} \right)$ first find the inner then outer. Inner better to be an explicit state quantity.
- Choose variables wisely for spherical caps.
- Only calculate the absorbed heat one cycle for heat engine.
- For possible heat exchange, check the first law, second law or Clausius' theorem.
- Approximate $\coth x$.
- Use equipartition theorem to avoid summing over functionals.
- Initial conditions should be satisfied on the entire boundary.
- For 2d system, reduce the dimension in the phase space for $\Omega$ calculation.
- In thermodynamic limit, only ignore $\mathcal{O}(\ln N)$ term.
- Don't forget the volume integral in phase space.
- Expand potential by brut force when necessary.
- When using Laplace's method, extend the integral to the entire real line.
- Don't forget $\frac{1}{2}$ factor when doing multi-var Taylor expansion.

Why not extending the canonical ensemble directly to grand canonical?
Because we know the ratio of probability of a system with fixed $T$, but don't know the ratio across different $T$. 