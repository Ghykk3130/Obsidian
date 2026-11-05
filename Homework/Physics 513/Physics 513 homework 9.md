# Problem 1
## (a)

We first evaluate:
$$\begin{align}
 \bra{0} \psi(x)\bar{\psi}(y)\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r}\bra{0} (a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(b^{\dagger}_{\mathbf{p}})^{s}v^{s}(p)e^{ip\cdot x})((a^{\dagger}_{\mathbf{q}})^{r}\bar{u}^{r}(q)e^{ip\cdot y}+b^{r}_{\mathbf{q}}\bar{v}^{r}(q)e^{-ip\cdot y})\ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} \bra{0} a^{s}_{\mathbf{p}}(a^{\dagger}_{\mathbf{q}})^{r}u^{s}(p)\bar{u}^{r}(q)e^{-ip\cdot x+iq\cdot y} \ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} (2\pi)^{3}\delta(\mathbf{p}-\mathbf{q})\delta^{s r} u^{s}(p)\bar{u}^{r}(q)e^{-ip\cdot x+iq\cdot y} \\
 & = \int \frac{d^{3}p}{(2\pi)^{{3}}} \frac{1}{ 2E_{\mathbf{p}} }\sum_{s} u^{s}(p)\bar{u}^{s}(p)e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\rlap{/}p+m)e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(i \rlap{/}\partial_{x-y}+m)e^{-ip\cdot(x-y)} \\
 & = (i\rlap{/}\partial_{}+m)D_{W}(x-y)
\end{align}$$
Similarly:
$$\begin{align}
 \bra{0} \psi(x)\bar{\psi}(y)\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r}\bra{0}((a^{\dagger}_{\mathbf{q}})^{r}\bar{u}^{r}(q)e^{ip\cdot y}+b^{r}_{\mathbf{q}}\bar{v}(q)e^{-ip\cdot y}) (a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(b^{\dagger}_{\mathbf{p}})^{s}v^{s}(p)e^{ip\cdot x})\ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} \bra{0} b^{r}_{\mathbf{q}}(b^{\dagger}_{\mathbf{p}})^{s}v^{r}(q)\bar{v}^{s}(p)e^{-ip\cdot y+iq\cdot x} \ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} (2\pi)^{3}\delta(\mathbf{p}-\mathbf{q})\delta^{s r} v^{r}(q)\bar{v}^{s}(p)e^{-ip\cdot y+iq\cdot x} \\
 & = \int \frac{d^{3}p}{(2\pi)^{{3}}} \frac{1}{ 2E_{\mathbf{p}} }\sum_{s} v^{s}(p)\bar{v}^{s}(p)e^{-ip\cdot(y-x)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\rlap{/}p+m)e^{-ip\cdot(y-x)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(i \rlap{/}\partial_{y-x}+m)e^{-ip\cdot(y-x)} \\
 & = (i\rlap{/}\partial_{}+m)D_{W}(y-x)
\end{align}$$
Therefore:
$$\begin{align}
S_{F}(x-y)= (i\rlap{/}\partial+m)\left[\theta(x^{0}-y^{0})D_{W}(x-y)-\theta(y^{0}-x^{0})D_{W}(y-x)\right]
\end{align}$$
## (b)

# Problem 3
## (a)



# Problem 4

## (a)

