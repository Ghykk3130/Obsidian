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