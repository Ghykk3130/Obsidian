
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