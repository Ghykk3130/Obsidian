# Problem 1
## (a)

We first evaluate:
$$\begin{align}
 \bra{0} \psi(x)\bar{\psi}(y)\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r}\bra{0} (a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(b^{\dagger}_{\mathbf{p}})^{s}v^{s}(p)e^{ip\cdot x})((a^{\dagger}_{\mathbf{q}})^{r}\bar{u}^{r}(q)e^{ip\cdot y}+b^{r}_{\mathbf{q}}\bar{v}^{r}(q)e^{-ip\cdot y})\ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} \bra{0} a^{s}_{\mathbf{p}}(a^{\dagger}_{\mathbf{q}})^{r}u^{s}(p)\bar{u}^{r}(q)e^{-ip\cdot x+iq\cdot y} \ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} (2\pi)^{3}\delta(\mathbf{p}-\mathbf{q})\delta^{s r} u^{s}(p)\bar{u}^{r}(q)e^{-ip\cdot x+iq\cdot y} \\
 & = \int \frac{d^{3}p}{(2\pi)^{{3}}} \frac{1}{ 2E_{\mathbf{p}} }\sum_{s} u^{s}(p)\bar{u}^{s}(p)e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\rlap{/}p+m)e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(i \rlap{/}\partial_{x}+m)e^{-ip\cdot(x-y)} \\
 & = (i\rlap{/}\partial_{}+m)D_{W}(x-y)
\end{align}$$
Similarly:
$$\begin{align}
 \bra{0} \bar{\psi}(y){\psi}(x)\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r}\bra{0}((a^{\dagger}_{\mathbf{q}})^{r}\bar{u}^{r}(q)e^{ip\cdot y}+b^{r}_{\mathbf{q}}\bar{v}(q)e^{-ip\cdot y}) (a^{s}_{\mathbf{p}}u^{s}(p)e^{-ip\cdot x}+(b^{\dagger}_{\mathbf{p}})^{s}v^{s}(p)e^{ip\cdot x})\ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} \bra{0} b^{r}_{\mathbf{q}}(b^{\dagger}_{\mathbf{p}})^{s}v^{r}(q)\bar{v}^{s}(p)e^{-ip\cdot y+iq\cdot x} \ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} \frac{d^{3}q}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{q}} }}\sum_{s,r} (2\pi)^{3}\delta(\mathbf{p}-\mathbf{q})\delta^{s r} v^{r}(q)\bar{v}^{s}(p)e^{-ip\cdot y+iq\cdot x} \\
 & = \int \frac{d^{3}p}{(2\pi)^{{3}}} \frac{1}{ 2E_{\mathbf{p}} }\sum_{s} v^{s}(p)\bar{v}^{s}(p)e^{-ip\cdot(y-x)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\rlap{/}p-m)e^{-ip\cdot(y-x)} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(-i \rlap{/}\partial_{x}-m)e^{-ip\cdot(y-x)} \\
 & = -(i\rlap{/}\partial_{}+m)D_{W}(y-x)
\end{align}$$
Therefore:
$$\begin{align}
S_{F}(x-y)= (i\rlap{/}\partial_{x}+m)\left[\theta(x^{0}-y^{0})D_{W}(x-y)+\theta(y^{0}-x^{0})D_{W}(y-x)\right]
\end{align}$$
## (b)

We first evaluate:
$$\begin{align}
i\rlap{/}_{}\partial_{ca}(\theta(x^{0}-y^{0})\psi_{a}(x)\bar{\psi}_{b}(y)) & = i\partial_{0}(\gamma^{0})_{ca}(\theta(x^{0}-y^{0})\psi_{a}\bar{\psi}_{b})+ i\partial_{i}(\gamma^{i})_{ca}(\theta(x^{0}-y^{0})\psi_{a}\bar{\psi}_{b}) \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}+ i(\gamma^{0})_{ca}\theta(x^{0}-y^{0})\partial_{0}(\psi_{a}\bar{\psi}_{b})+ i\theta(x^{0}-y^{0})(\gamma^{i})_{ca} \partial_{i}(\psi_{a}\bar{\psi}_{b}) \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}+i\theta(x^{0}-y^{0})\rlap{/}\partial_{ca}(\psi_{a}\bar{\psi}_{b})
\end{align}$$
Then:
$$\begin{align}
(i\rlap{/}\partial-m)_{ca}(\theta(x^{0}-y^{0})\psi_{a}\bar{\psi}_{b}) & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}+i\theta(x^{0}-y^{0})\rlap{/}\partial_{ca}(\psi_{a}\bar{\psi}_{b}) -m\delta_{ca}\theta(x^{0}-y^{0})\psi_{a}\bar{\psi}_{b} \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}+\theta(x^{0}-y^{0})(i\rlap{/}\partial-m )_{ca}(\psi_{a}\bar{\psi}_{b}) \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}+\theta(x^{0}-y^{0})(i\rlap{/}\partial-m )_{ca}(\psi_{a})\bar{\psi}_{b} \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\psi_{a}\bar{\psi}_{b}
\end{align}$$
Similarly, it's easy to show:
$$\begin{align}
(i\rlap{/}\partial-m)_{ca}(-\theta(y^{0}-x^{0})\bar{\psi}_{b}(y)\psi_{a}(x)) & = i\delta(y^{0}-x^{0})(\gamma^{0})_{ca}\bar{\psi}_{b}\psi_{a}
\end{align}$$
Then:
$$\begin{align}
(i\rlap{/}\partial-m)_{ca}S_{F}(x-y)_{ab} & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}(\psi_{a}\bar{\psi}_{b}+\bar{\psi}_{b}\psi_{a} ) \\
 & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}\{ \psi_{a}(x),\bar{\psi}_{b}(y) \}
\end{align}$$
We compute:
$$\begin{align}
\{ \psi_{a}(x),\bar{\psi}_{b}(y) \}_{\text{ET}} & = \{ \psi_{a},\psi ^{\dagger}_{c}(\gamma^{0})_{c b} \} \\
 & = \delta_{ac}\delta(\mathbf{x}-\mathbf{y})(\gamma^{0})_{c b} \\
 & = (\gamma^{0})_{ab}\delta(\mathbf{x}-\mathbf{y})
\end{align}$$
Then:
$$\begin{align}
(i\rlap{/}\partial-m)_{ca}S_{F}(x-y)_{ab} & = i\delta(x^{0}-y^{0})(\gamma^{0})_{ca}(\gamma^{0})_{a b}\delta(\mathbf{x}-\mathbf{y}) \\
 & = i\delta(x^{}-y^{})\delta_{cb}
\end{align}$$
## (c)

We have:
$$\begin{align}
 & (i\rlap{/}\partial-m)_{ca}S_{C}(x-y)_{ab}=i\delta(x-y)\delta_{c b} \\
\implies & (i\rlap{/}\partial-m)_{ca} \int \frac{d^{4}p}{(2\pi)^{4}}\tilde{S}_{C}(p)e^{-ip\cdot(x-y)}=i\delta_{c b}\int \frac{d^{4}p}{(2\pi)^{4}}e^{-ip\cdot(x-y)} \\
\implies & (\rlap{/}p-m )_{ca}(\tilde{S}_{C} )_{ab}=i\delta_{c b}
\end{align}$$
Observe that:
$$\begin{align}
(\rlap{/}p+m)(\rlap{/}p-m) & = \rlap{/}p \rlap{/}p-m^{2} \\
 & = p_{\mu}\gamma^{\mu}p_{\nu}\gamma^{\nu}-m^{2} \\
 & = \frac{1}{2}p_{\mu}\gamma^{\mu}p_{\nu}\gamma^{\nu}+ \frac{1}{2}p_{\nu}\gamma^{\mu}p_{\mu}\gamma^{\nu}-m^{2} \\
 & = \frac{1}{2}p_{\mu}\gamma^{\mu}p_{\nu}\gamma^{\nu}+ \frac{1}{2}p_{\mu}\gamma^{\nu}p_{\nu}\gamma^{\mu}-m^{2} \\
 & = \frac{1}{2}p_{\mu}p_{\nu}\{ \gamma^{\mu},\gamma^{\nu} \}-m^{2} \\
 & = p^{2}-m^{2}
\end{align}$$
Then $(\rlap{/}p-m)^{-1}= \frac{\rlap{/}p+m}{p^{2}-m^{2}}$. We have:
$$\begin{align}
 & (\rlap{/}p-m )\tilde{S}_{C}=i \\
\implies & (p^{2}-m^{2})\tilde{S}_{C}=i(\rlap{/}p+m) \\
\implies & \tilde{S}_{C}= \frac{i(\rlap{/}p+m)}{p^{2}-m^{2}}
\end{align}$$
Then:
$$\begin{align}
S_{C}(x-y) & = \int_{C} \frac{d^{4}p}{(2\pi)^{4}} \frac{i(\rlap{/}p+m)}{p^{2}-m^{2}}e^{-ip\cdot(x-y)} \\
 & = \int \frac{d^{4}p}{(2\pi)^{4}} \frac{(-\rlap{/}\partial_{x}+im)e^{-ip\cdot(x-y)} }{p^{2}-m^{2} } \\
 & = (i \rlap{/}\partial+m)\int \frac{d^{4}p}{(2\pi)^{4}} \frac{i}{p^{2}-m^{2}}e^{-ip\cdot(x-y)} \\
 & = (i\rlap{/}\partial+m) D_{C}(x-y)
\end{align}$$
## (d)

We integrate:
$$\begin{align}
S_{F}(x-y) & = (i\rlap{/}\partial+m)\int \frac{d^{4}p}{(2\pi)^{4} } \frac{i}{p^{2}-m^{2}+i\epsilon}e^{-ip\cdot(x-y)}
\end{align}$$
Observe that if we ignore the $\epsilon^{2}$ term:
$$\begin{align}
\frac{i}{p^{2}-m^{2}+i\epsilon} & = \frac{i}{(p^{0})^{2}-E_{\mathbf{p}}^{2}+i\epsilon} \\
 & = \frac{i}{2E_{\mathbf{p}}}\left[  \frac{1}{p^{0}-E_{\mathbf{p}}+i\epsilon}- \frac{1}{p^{0}+E_{\mathbf{p}}-i\epsilon} \right]
\end{align}$$
When $x^{0}> y^{0}$, we choose the lower half plane as our contour. Then:
$$\begin{align}
\int \frac{dp^{0}}{2\pi} \frac{i}{p^{2}-m^{2}+i\epsilon}e^{-ip\cdot(x-y)} & = \int \frac{dp^{0}}{2\pi} \frac{i}{2E_{\mathbf{p}}}\left[  \frac{1}{p^{0}-E_{\mathbf{p}}+i\epsilon}- \frac{1}{p^{0}+E_{\mathbf{p}}-i\epsilon} \right]e^{-ip\cdot(x-y)} \\
 & = \int \frac{dp^{0}}{2\pi} \frac{i}{2E_{\mathbf{p}}} \frac{1}{p^{0}-E_{\mathbf{p}}+i\epsilon}e^{-ip\cdot(x-y)} \\
 & = \frac{1}{2\pi} \frac{i}{2E_{\mathbf{p}}}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}e^{-iE_{\mathbf{p}}(x^{0}-y^{0})} (-2\pi i) \\
 & = \frac{1}{2E_{\mathbf{p}}}e^{-ip\cdot(x-y)}\text{ where }p\text{ lies on the mass sheel}
\end{align}$$
So:
$$\begin{align}
S_{F}(x-y) & = (i\rlap{/}\partial+m) \int \frac{d^{3}p}{(2\pi)^{3}} \frac{e^{-ip\cdot(x-y)}}{2E_{\mathbf{p}}} \\
 & = (i\rlap{/}\partial+m) D_{W}(x-y)
\end{align}$$

When $x^{0}<y^{0}$, we choose the upper half plane as our contour. Then:
$$\begin{align}
\int \frac{dp^{0}}{2\pi} \frac{i}{p^{2}-m^{2}+i\epsilon}e^{-ip\cdot(x-y)} & = \int \frac{dp^{0}}{2\pi} \frac{i}{2E_{\mathbf{p}}}\left[  \frac{1}{p^{0}-E_{\mathbf{p}}+i\epsilon}- \frac{1}{p^{0}+E_{\mathbf{p}}-i\epsilon} \right]e^{-ip\cdot(x-y)} \\
 & = -\int \frac{dp^{0}}{2\pi} \frac{i}{2E_{\mathbf{p}}} \frac{1}{p^{0}+E_{\mathbf{p}}-i\epsilon}e^{-ip\cdot(x-y)} \\
 & = -\frac{1}{2\pi} \frac{i}{2E_{\mathbf{p}}}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}e^{iE_{\mathbf{p}}(x^{0}-y^{0})} 2\pi i \\
 & = \frac{1}{2E_{\mathbf{p}}}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})} e^{-iE_{\mathbf{p}}(y^{0}-x^{0})}\text{ where }p\text{ lies on the mass sheel} \\
\end{align}$$
So:
$$\begin{align}
S_{F}(x-y) & = (i\rlap{/}\partial+m) \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}e^{-iE_{\mathbf{p}}(y^{0}-x^{0})} \\
 & = (i\rlap{/}\partial+m) \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{-i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}e^{-iE_{\mathbf{p}}(y^{0}-x^{0})} \\
 & = (i\rlap{/}\partial+m)\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{-ip\cdot(y-x)} \\
 & = (i\rlap{/}\partial+m)D_{W}(y-x)
\end{align}$$
Then:
$$S_{F}= (i\rlap{/}\partial+m)(\theta(x^{0}-y^{0})D_{W}(x-y)+\theta(y^{0}-x^{0})D_{W}(y-x))$$
# Problem 2
## (a)

![[82f14706b4f5e49fddef792db131b112.jpg|centering|300]]
## (b)


# Problem 3
## (a)

![[4fa8755d794197d07337dd3be0804483.jpg|centering|400]]

# Problem 4

## (a)

