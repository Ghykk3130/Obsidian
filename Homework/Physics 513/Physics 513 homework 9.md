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

![[be1a6d1e2ffed29817f6207c40983fe0.jpg|centering|300]]
## (b)

For the s-channel-like Feynman diagram, we count that $S=2$. Then the k-space propagator is:
$$\begin{align}
 \frac{(-i\lambda)^{2}}{2} \int d^{4}x d^{4}y{e^{-ip_{1}\cdot x}} {e^{-ip_{2}\cdot x}} {e^{ip_{3}\cdot y}} {e^{ip_{4}\cdot y}}D^{2}_{F}(y-x) & = \int d^{4}x d^{4}y \frac{d^{4}p}{(2\pi)^{4}  } \frac{d^{4}q}{(2\pi)^{4}} \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{q^{2}-m^{2}+i\epsilon}\exp(-ip_{1}\cdot x-ip_{2}\cdot x+ip_{3}\cdot y+ip_{4}\cdot y-ip\cdot(y-x)-iq\cdot(y-x)) \\
 & = \frac{(-i\lambda)^{2}}{2}\int {d^{4}p}{d^{4}q} \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{q^{2}-m^{2}+i\epsilon}\delta(-p_{1}-p_{2}+p+q)\delta(p_{3}+p_{4}-p-q) \\
 & = \frac{(-i\lambda)^{2}}{2}\delta(p_{3}+p_{4}-p_{1}-p_{2}) \int {d^{4}p}{d^{4}q} \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{q^{2}-m^{2}+i\epsilon}\delta(-p_{1}-p_{2}+p+q) \\
 & =\frac{(-i\lambda)^{2}}{2} \delta(p_{3}+p_{4}-p_{1}-p_{2})\int d^{4}p \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{(p_{1}+p_{2}-p)^{2}-m^{2}+i\epsilon}
\end{align}$$
For the t-channel-like Feynman diagram, the k-space propagator is:
$$\begin{align}
\frac{(-i\lambda)^{2}}{2}\int d^{4}x d^{4}y e^{-ip_{1}\cdot x}e^{ip_{3}\cdot x}e^{-ip_{2}\cdot y}e^{ip_{4}\cdot y}D_{F}^{2}(y-x) & = \frac{(-i\lambda)^{2}}{2}\int d^{4}p d^{4}q \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{q^{2}-m^{2}+i\epsilon}\delta(-p_{1}+p_{3}+p+q)\delta(-p_{2}+p_{4}-p-q) \\
 & = \frac{(-i\lambda)^{2}}{2}\delta(p_{3}+p_{4}-p_{1}-p_{2})\int d^{4}p \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{(p_{1}-p_{3}-p)^{2}-m^{2}+i\epsilon}
\end{align}$$
Similarly, For the u-channel-like Feynman diagram, the k-space propagator is:
$$\begin{align}
\frac{(-i\lambda)^{2}}{2}\int d^{4}x d^{4}y e^{-ip_{1}\cdot x} e^{ip_{4}\cdot x}e^{-ip_{2}\cdot y}e^{ip_{3}\cdot y}D^{2}_{F}(y-x)= \frac{(-i\lambda)^{2}}{2}\delta(p_{3}+p_{4}-p_{1}-p_{2})\int d^{4}p \frac{i}{p^{2}-m^{2}+i\epsilon} \frac{i}{(p_{1}-p_{4}-p)^{2}-m^{2}+i\epsilon}
\end{align}$$


# Problem 3
## (a)

![[d57373321170c3cded3726e509cd144a.jpg|centering|400]]
## (b)

For the first diagram, clearly $S=1$. Then we want:
$$\begin{align}
(-ig)^{2} \int d^{4}x d^{4}y  e^{-ip_{A}\cdot x}e^{ip_{1}\cdot x}e^{-ip_{B}\cdot y}e^{ip_{2}\cdot y}D_{F}(y-x) & = (-ig)^{2} (2\pi)^{4} \delta(p_{A}+p_{B}-p_{1}-p_{2})\int d^{4}p \frac{i}{p^{2}-m_{3}^{2}+i\epsilon}\delta(-p_{A}+p_{1}+p) \\
 & = (-ig)^{2}(2\pi)^{4}\delta(p_{A}+p_{B}-p_{1}-p_{2}) \frac{i}{(p_{A}-p_{1})^{2}-m_{3}^{2}+i\epsilon}
\end{align}$$
For the second diagram, $S$ is still $1$. We have:
$$\begin{align}
(-ig)^{2} \int d^{4}x d^{4}y e^{-ip_{A}\cdot x}e^{ip_{2}\cdot x}e^{-ip_{B}\cdot y}e^{-ip_{1}\cdot y}D_{F}(y-x)= (-ig)^{2}(2\pi)^{4}\delta(p_{A}+p_{B}-p_{1}-p_{2}) \frac{i}{(p_{A}-p^{}_{2})^{2}-m_{3}^{2}+i\epsilon}
\end{align}$$
Then remove $i(2\pi)^{4}\delta$ to obtain the M-matrix:
$$\begin{align}
\mathcal{M} & = (-ig)^{2} \left( \frac{1}{(p_{A}-p_{1})^{2}-m_{3}^{2}+i\epsilon}+ \frac{1}{(p_{A}-p_{2})^{2}-m_{3}^{2}+i\epsilon} \right) \\
 & = -g^{2}\left( \frac{1}{(p_{A}-p_{1})^{2}-m_{3}^{2}+i\epsilon}+ \frac{1}{(p_{A}-p_{2})^{2}-m_{3}^{2}+i\epsilon} \right)
\end{align}$$
## (c)

We know that $\mathbf{p}_{A}+\mathbf{p}_{B}=0$. $E_{A}=\sqrt{ |\mathbf{p}_{A}|^{2}+m_{1} ^{2}}=\sqrt{ |\mathbf{p}_{B}|^{2}+m_{1}^{2} }=E_{B}= \frac{E_{\text{cms}}}{2}$. Then:
$$\begin{align}
\frac{d\sigma}{d\Omega} & = \frac{1}{2E_{A}2E_{B}} \frac{1}{|\mathbf{v}_{A}-\mathbf{v}_{B}|} |\mathcal{M} |^{2} \frac{|\mathbf{p}_{1}|^{}}{16\pi^{2} E_{\text{cms}}} \\
 & = \frac{1}{4E_{A}^{2}} \frac{1}{\left| \frac{\mathbf{p}_{A}}{E_{A}}- \frac{-\mathbf{p}_{A}}{E_{A}}  \right|}|\mathcal{M} |^{2} \frac{|\mathbf{p}_{1}|}{16\pi^{2}E_{\text{cms}}} \\
 & = \frac{1}{2E_{\text{cms}}} \frac{|\mathbf{p}_{1}|}{2|\mathbf{p}_{A}|} \frac{|\mathcal{M}|^{2}}{16\pi^{2}E_{\text{cms}} } \\
 & = \frac{1}{64\pi^{2}E_{\text{cms}}^{2}} \frac{|\mathbf{p}_{1}|}{|\mathbf{p}_{A}|}|\mathcal{M}|^{2} 
\end{align}$$

We note that if the states are indistinguishable, there might be a factor of $\frac{1}{2!}$ in the front, depending on at which step you want to add it. (You can add it after integrating, as long as it is added in the end.)

# Problem 5

Since the incident beam is unpolarized, their spin state is $\ket{m_{a},m_{b}}$ with all possible $m_{a},m_{b}$. Assume that the probability to choose each $\ket{m_{a},m_{b}}$ are equal. Then the probability must be $\frac{1}{(2s_{a}+1)(2s_{b}+1)}$. The initial and states are unpolarized. So we add the probability of starting from any possible spins and ending in any possible spins, each with probability $\frac{1}{(2s_{a}+1)(2s_{b}+1)}$:
$$\begin{align}
\frac{d\sigma}{d\Omega^{'}}(a+b\rightarrow a^{'}+b^{'}) & \propto\frac{(2s_{a}+1)(2s_{b}+1) (2s_{a}^{'}+1)(2s_{b}^{'}+1)}{(2s_{a}+1)(2s_{b}+1)} |\mathcal{M}(a+b\rightarrow a^{'}+b^{'})|^{2} \frac{|\mathbf{k}^{'}|}{|\mathbf{k}|} \\
 & = (2s ^{'}_{a}+1 )(2s ^{'}_{b}+1) |\mathcal{M}(a+b\rightarrow a^{'}+b^{'}) |^{2} \frac{|\mathbf{k}^{'}|}{|\mathbf{k}|}
\end{align}$$
Similarly:
$$\begin{align}
\frac{d\sigma}{d\Omega}(a^{'}+b^{'}\rightarrow a+b)= (2s_{a}+1)(2s_{b}+1)|\mathcal{M}(a^{'}+b^{'}\rightarrow a+b) |^{2} \frac{|\mathbf{k}^{}|}{|\mathbf{k}^{'}|}
\end{align}$$
It suffices to show:
$$\begin{align}
|\bra{a^{'},b^{'}} S \ket{a,b} |= |\bra{a,b} S\ket{a^{'},b^{'}} |
\end{align}$$

