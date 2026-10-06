# Problem 1

We have:
$$\begin{align}
\mathbf{P} & = - \int  \frac{d^{3}x d^{3}pd^{3}p^{'}}{(2\pi)^{6}} \left( - \frac{i}{2} \right)\sqrt{  \frac{E_{\mathbf{p}}}{E_{\mathbf{p}^{'}}} }(a_{\mathbf{p}}e^{-ip\cdot x}-a^{\dagger}_{\mathbf{p}}e^{ip\cdot x})\nabla(a_{\mathbf{p}^{'}}e^{-ip^{'}\cdot x}+ a^{\dagger}_{\mathbf{p}^{'}}e^{ip^{'}\cdot x}) \\
 & = \frac{i}{2} \int \frac{d^{3}p}{(2\pi)^{3}}(a_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip_{}^{0}t }(-i\mathbf{p})+ a_{\mathbf{p}}a^{\dagger}_{\mathbf{p}}(-i\mathbf{p})+a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}(-i\mathbf{p})-a^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}(-i\mathbf{p})) \\
 & = \frac{1}{2}\int \frac{d^{3}p}{(2\pi)^{3}}(a_{\mathbf{p}}a_{\mathbf{p}}^{\dagger}+a_{\mathbf{p}}^{\dagger}a_{\mathbf{p}})\mathbf{p} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3} }\mathbf{p}a^{\dagger}_{\mathbf{p}}a_{\mathbf{p}}
\end{align}$$
The integrals of $a_{\mathbf{p}}a_{-\mathbf{p}}e^{-2ip^{0}t}(-i\mathbf{p}),\ a^{\dagger}_{\mathbf{p}}a^{\dagger}_{-\mathbf{p}}e^{2ip^{0}t}(-i\mathbf{p})$ vanish because they are odd functions of $\mathbf{p}$. And in the las line, we used normal ordering, and simply ignored the vacuum energy. 
# Problem 2

We have:
$$\begin{align}
Q & = \int d^{3}x \psi ^{\dagger}(x)\psi(x) \\
 & = \int \frac{d^{3}xd^{3}pd^{3}p^{'}}{(2\pi)^{6}} \frac{1}{2\sqrt{ E_{\mathbf{p}}E_{\mathbf{p}^{'}} }} \sum_{s,r}(a^{s\dagger}_{\mathbf{p}}u^{s\dagger}(p)e^{ip\cdot x}+b^{s}_{\mathbf{p}}v^{s\dagger}(p)e^{-ip\cdot x})(a^{r}_{\mathbf{p}^{'}}u^{r}(p^{'})e^{-ip^{'}\cdot x}+b^{r\dagger}_{\mathbf{p}^{'}}v^{r}(p^{'})e^{ip^{'}\cdot x}) \\
 & = \sum_{r,s}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(a^{s\dagger}_{\mathbf{p}}a^{r}_{\mathbf{p}^{'}}u^{s\dagger}(p) u^{r}(p)+a^{s \dagger}_{\mathbf{p}}b^{r \dagger}_{-\mathbf{p}}u^{s\dagger}(p) v^{r}(-p)e^{2ip^{0}t}+ b^{s}_{\mathbf{p}}a^{r}_{-\mathbf{p}}v^{s\dagger}(p)u^{r}(-p)e^{-2ip^{0}t}+b^{s}_{\mathbf{p}}b^{r\dagger}_{\mathbf{p}}v^{s\dagger}(p)v^{s}(p)) \\
 & = \sum_{r,s}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(a^{s\dagger}_{\mathbf{p}}a^{r}_{\mathbf{p}^{}}u^{s\dagger}(p) u^{r}(p)+ b^{s}_{\mathbf{p}}b^{r\dagger}_{\mathbf{p}}v^{s\dagger}(p)v^{s}(p)) \\ & = \sum_{s}\int \frac{d^{3}p}{(2\pi)^{3}}(a^{s\dagger}_{\mathbf{p}}a^{s}_{\mathbf{p}}+ b^{s}_{\mathbf{p}}b^{s\dagger}_{\mathbf{p}}) \\
 & = \sum_{s}\int \frac{d^{3}p}{(2\pi)^{3}}(a^{s\dagger}_{\mathbf{p}}a^{s}_{\mathbf{p}}-b^{s}_{\mathbf{p}}b^{s\dagger}_{\mathbf{p}})
\end{align}$$
In the last line we ignored the vacuum energy, and adopt the normal ordering.


