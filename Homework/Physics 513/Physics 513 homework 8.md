# Problem 1
## (a)

For (a), $S=2$. For (b), $S=6$. For (c), $S=2$. For (d), $S=1$. 
## (b)

For (a), $S=1$. For (b), $S=1$. For (c), $S=2$

# Problem 2
## (a)

![[11a9d591074ee52685a7413ab749ad39.jpg|centering|400]]
## (b)

![[57a195a9cab7564ab4e3aa780e5a198c.jpg|centering|500]]
## (c)

Their symmetry factors are all equal to one, because there is no way to permute the internal points to generate a new Feynman diagram. Among all the Feynman diagrams above, there is only one line connecting a pair of internal points.
# Problem 3
## (a)

We first switch to the interaction picture:
$$\begin{align}
H_{I} & = -\int d^{3} x j(x)\phi_{I}(x)
\end{align}$$
Since the state where there is no particle is $\ket{0}$, the evolved state is:
$$\begin{align}
T \exp\left( i \int d^{4}x j(x)\phi_{I}(x) \right) \ket{0} 
\end{align}$$
We want to find how much it overlaps with the no-particle-state. So:
$$\begin{align}
P(0) & = \left| \bra{0} T\exp\left( i \int d^{4}x j(x)\phi_{I}(x) \right)\ket{0}  \right|^{2}
\end{align}$$
## (b)

We first expand to the second order:
$$\begin{align}
\bra{0} T\exp\left( i \int d^{4}xj(x)\phi_{I}(x)  \right)\ket{0}  & \approx \bra{0} \left( T\left\{  1+ i \int d^{4}x j\phi_{I}+\left( \frac{i^{2}}{2} \right)\left( \int d^{4}x j\phi_{I} \right)  \right\} \right)\ket{0}  \\
 & = 1+ i \int d^{4}x j \bra{0}\phi_{I}\ket{0}- \frac{1}{2}\int d^{4}x \int d^{4}y\bra{0} T\phi_{I}(x)\phi_{I}(y)\ket{0} j(x)j(y)  
\end{align}$$
Observe that:
$$\begin{align}
\bra{0} \phi_{I}\ket{0}  & = \bra{0} (\phi^{+}_{I}+\phi^{-}_{I})\ket{0}  \\
 & = \bra{0} \phi^{+}_{I}\ket{0} + \bra{0} \phi^{-}_{I}\ket{0}  \\
 & = 0
\end{align}$$
Then we have:
$$\begin{align}
\bra{0} T\exp\left( i \int d^{4}x j(x)\phi_{I}(x)  \right)\ket{0}  & \approx 1- \frac{1}{2}\int d^{4}x d^{4}y \bra{0} T\phi_{I}(x)\phi_{I}(y)\ket{0} j(x)j(y) \\
 & = 1- \frac{1}{2}\int d^{4 }x d^{4}y D_{F}(x-y)j(x)j(y) \\
 & = 1- A,\ A= \frac{1}{2}\int d^{4 }x d^{4}y D_{F}(x-y)j(x)j(y)
\end{align}$$
where $A\sim\mathcal{O}(j^{2})$. Then:
$$\begin{align}
P(0) & = (1-A^{*})(1-A) \\
 & = 1-2\mathrm{Re}(A)+A^{*}A \\
 & \approx 1-2\mathrm{Re}(A)
\end{align}$$
We calculate:
$$\begin{align}
A & = \frac{1}{2} \int d^{4}x d^{4}y D_{F}(x-y)j(x)j(y) \\
 & = \frac{1}{2}\int d^{4}xd^{4}y \frac{d^{4}k}{(2\pi)^{4}} \frac{i}{k^{2}-m^{2}+i\epsilon}e^{-ik\cdot(x-y)}j(x)j(y) \\
 & = \frac{1}{2}\int d^{4}x d^{4}y \frac{d^{4}k}{(2\pi)^{4}} i\left(  P \frac{1}{k^{2}-m^{2}}-i\pi\delta(k^{2}-m^{2}) \right)e^{-ik\cdot(x-y)}j(x)j(y) \\
\end{align}$$
Then:
$$\begin{align}
\mathrm{Re}(A) & =  \frac{\pi}{2}\int d^{4}xd^{4}y \frac{d^{4}k}{(2\pi)^{4}} \delta(k^{2}-m^{2})e^{-ik\cdot(x-y)}j(x)j(y) \\
 & =  \frac{\pi}{2}\int \frac{d^{4}k}{(2\pi)^{4}}\delta(k^{2}-m^{2})\tilde{j}(-k)\tilde{j}(k) \\
 & =  \frac{\pi}{2}\int \frac{d^{4}k}{(2\pi)^{4}} \left(\frac{\delta(k^{0}= E_{\mathbf{k}})}{2|E_{\mathbf{k}}|} + \frac{\delta(k^{0}= -E_{\mathbf{k}})}{2|E_{\mathbf{k}}|} \right)|\tilde{j}(k) |^{2} \\
 & =  \frac{1}{4}\int d^{3}k \frac{|\tilde{j}(k)|^{2}}{|E_{\mathbf{k}}|} \\
 & =  \frac{1}{2}\int d^{3}k \frac{1}{2|E_{\mathbf{k}} |}|\tilde{j}(k) |^{2}
\end{align}$$
Then clearly we have:
$$\begin{align}
P(0) & \approx 1- \int d^{3}k \frac{1}{2|E_{\mathbf{k}}|}|\tilde{j}(k) |^{2}
\end{align}$$
## (c)

The Feynman diagram for part (b) is:
![[0d1b2a1b0e4d301034349eb9ccb3d440.jpg|centering|300]]
The Feynman diagrams of some higher order terms are:
![[f6c6faea058dd756eddae7f54b08300d.jpg|centering|600]]![[314f71ce6984887603e87ee09cf9ebd5.jpg|centering|600]]
Observe that only the eventh order terms exist, since we need complete contraction. And this is effectively a $\phi^{1}$ theory, each vertex accepts one connection. So the total number needed is always even. 

For $2n$ points, we first arrange them. There are $(2n)!$ ways. Then we pair the neighboring points. Within each pair, there is a degeneracy of $2$. And any arrangement of the pairs is also viewed as equivalent Feynman diagrams. There are $n!$ such ways. So in total, the number of Feynman diagrams is $\frac{(2n)!}{2^{n}n!}$. 

Then we have:
$$\begin{align}
\bra{0} \frac{i^{2n}}{(2n)!} \int d^{4}x_{1} \dots d^{4}x_{2n} T\phi_{1}\dots \phi_{2n} j_{1}\dots j_{2n} \ket{0}  & = \frac{i^{2n}}{(2n)!}\int d^{4}x_{1}\dots d^{4}x_{2n} \bra{0} T\phi_{1}\dots \phi_{2n}j_{1}\dots j_{2n}\ket{0}  \\
 & = \frac{i^{2n}}{(2n)! } \int d^{4}x_{1}\dots d^{4}x_{2n}(D_{12}\dots+D_{13}\dots+\dots)j_{1}\dots j_{2n}  \\
 & = \left(  \frac{i^{2n}}{(2n)!} \int d^{4}x_{1}\dots d^{4}x_{2n}D_{12}\dots j_{1}\dots j_{2n}\right)+ \left(  \frac{i^{2n}}{(2n)!} \int d^{4}x_{1}\dots d^{4}x_{2n}D_{13}\dots j_{1}\dots j_{2n}\right)+ \dots
\end{align}$$
Know that:
$$\begin{align}
\frac{i^{2n}}{(2n)!} \int d^{4}x_{1}\dots d^{4}x_{2n}D_{12}\dots j_{1}\dots j_{2n} & = \frac{i^{2n}}{(2n)!} \int \frac{d^{4}k_{1}}{(2\pi)^{4}}\dots \frac{d^{4}k_{n}}{(2\pi)^{4}}  \frac{i}{k_{1}^{2}-m^{2}+i\epsilon}\dots \frac{i}{k_{n}^{2}-m^{2}+i\epsilon} |\tilde{j}_{1}|^{2}\dots |\tilde{j}_{n}|^{2} \\
 & = \frac{i^{2n}}{(2n)!} \left( \int \frac{d^{4}k}{(2\pi)^{4}} \frac{i}{k^{2}-m^{2}+i\epsilon}|\tilde{j}|^{2} \right)^{n}
\end{align}$$
Then:
$$\begin{align}
\bra{0} \frac{i^{2n}}{(2n)!} \int d^{4}x_{1} \dots d^{4}x_{2n} T\phi_{1}\dots \phi_{2n} j_{1}\dots j_{2n} \ket{0}  & = \frac{(2n)!}{2^{n}n!} \frac{i^{2n}}{(2n)!} \left( \int \frac{d^{4}k}{(2\pi)^{4}} \frac{i}{k^{2}-m^{2}+i\epsilon}|\tilde{j}|^{2} \right)^{n} \\
 & = \frac{(-1)^{n}}{n!}\left(  \frac{1}{2}\int  \frac{d^{4}k}{(2\pi)^{4}} \frac{i}{k^{2}-m^{2}+i\epsilon}|\tilde{j}|^{2} \right)^{n} \\
 & = \frac{(-1)^{n}}{n!}A^{n} 
\end{align}$$
Then we have:
$$\begin{align}
\bra{0} T\exp\left( i \int d^{4}x  j(x)\phi_{I}(x) \right)\ket{0}  & = \sum_{n} \frac{(-1)^{n}}{n!}A^{n} \\
 & = e^{-A}
\end{align}$$
Then we have:
$$\begin{align}
P(0) & = e^{-A^{^{*}}}e^{-A} \\
 & = e^{-2\mathrm{Re}(A)} \\
 & = e^{-\lambda}
\end{align}$$
## (d)

We first expand:
$$\begin{align}
\bra{\mathbf{k}} i \int d^{4}x j(x)\phi_{I}(x)\ket{0}  & = i \int d^{4}x j\bra{\mathbf{k}} \phi \ket{0} 
\end{align}$$
We then compute:
$$\begin{align}
\bra{\mathbf{k}} \phi \ket{0}  & = \bra{0} a_{\mathbf{k}}\int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }} (a_{\mathbf{p}}e^{-ip\cdot x}+a^{\dagger}_{\mathbf{p}}e^{ip\cdot x})\ket{0}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{\sqrt{ 2E_{\mathbf{p}} }}e^{ip\cdot x}\bra{0} a_{\mathbf{k}}a^{\dagger}_{\mathbf{p}}\ket{0}  \\
 & = \frac{e^{ik\cdot x}}{\sqrt{ 2E_{\mathbf{k}} }} 
\end{align}$$
Then:
$$\begin{align}
\bra{\mathbf{k}} i \int d^{4}x j(x)\phi_{I}(x)\ket{0} & = i \int d^{4}x j(x) \frac{e^{ik\cdot x} }{\sqrt{ 2E_{\mathbf{k}}}} \\
 & = i \int d^{4}x \frac{d^{4}p}{(2\pi)^{4}} \tilde{j}(p) \frac{e^{i(-p+k)\cdot x}}{\sqrt{ 2E_{\mathbf{k}} }} \\
 & = i \tilde{j}(k) \frac{1}{\sqrt{ 2E_{\mathbf{k}} }}
\end{align}$$
Notice that since $\ket{\mathbf{k}}\perp \ket{0}$, we don't have constant term. So:
$$\begin{align}
P(\mathbf{k}) & \approx \left| i\bar{j} \frac{1}{\sqrt{ 2E_{\mathbf{k}} }} \right|^{2} \\
 & = \frac{|\tilde{j}(k)|^{2}}{2E_{\mathbf{k}}}
\end{align}$$
Now consider all orders. Obviously, only oddth order terms would survive. Then:
$$\begin{align}
\bra{\mathbf{k}} \frac{i^{2n+1}}{(2n+1)!} \int d^{4}_{1}\dots d^{4}x_{2n+1}j_{1}\dots j_{2n+1} T\phi_{1}\dots \phi_{2n+1}\ket{0}  & = \frac{i^{2n+1}}{(2n+1)!}\int d^{4}x_{1}\dots d^{4}x_{2n+1}j_{1}\dots j_{2n+1} \bra{\mathbf{k}} T\phi_{1}\dots \phi_{2n+1}\ket{0}   
\end{align}$$
The Feynman diagram for $\bra{\mathbf{k}}T\phi_{1}\dots \phi_{2n+1}\ket{0}$ is clearly with $\mathbf{k}$ as the final external point, and we choose one internal points to connect with it. There are $2n+1$ choice. Then there are $2n+1-1=2n$ internal points remaining. So similar to part (c), there are $\frac{(2n)!}{2^{n}n!}$ ways of arranging them. Then we get:
$$\begin{align}
\bra{\mathbf{k}} \frac{i^{2n+1}}{(2n+1)!} \int d^{4}_{1}\dots d^{4}x_{2n+1}j_{1}\dots j_{2n+1} T\phi_{1}\dots \phi_{2n+1}\ket{0}   & = \frac{i^{2n+1}}{(2n+1)!} \left( \int d^{4}x \bra{\mathbf{k}} \phi \ket{0} j \right)\left(  \int ^{4}x D_{12}j_{1}j_{2} \right)^{n} \frac{(2n)!}{2^{n}n!} \cdot (2n+1)\\
 & = \frac{i^{2n}}{(2n)!} \left( i\int d^{4}x \bra{\mathbf{k}} \phi \ket{0} j \right)\left(  \frac{1}{2} \int ^{4}x D_{12}j_{1}j_{2} \right)^{n} \frac{(2n)!}{n!} \\
 & = i^{2n}\frac{1}{n!}B(\mathbf{k})A^{n},\ B(\mathbf{k})= \bra{\mathbf{k}} i \int d^{4}x j(x)\phi_{I}(x)\ket{0} =i \tilde{j}(-k) \frac{1}{\sqrt{ 2E_{\mathbf{k}} }} \\
 & = \frac{(-1)^{n}}{n!}B(\mathbf{k})A^{n}
\end{align}$$
Therefore:
$$\begin{align}
\bra{\mathbf{k}} T\exp\left( i \int d^{4}x j\phi \right) \ket{0}  & = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{n!}BA^{n} \\
 & = B(\mathbf{k}) e^{-A}
\end{align}$$
Then:
$$\begin{align}
P(\mathbf{k}) & = B^{*}e^{-A^{*}}Be^{-A} \\
 & = |B |^{2} e^{-2\mathrm{Re}A} \\
 & = \frac{|\tilde{j}(k)|^{2}}{2E_{\mathbf{k}}} e^{-\lambda}
\end{align}$$
But this is just a probability density in the k-space. The probability should be:
$$\frac{d^{3}k}{(2\pi)^{3}}\frac{|\tilde{j}(k)|^{2}}{2E_{\mathbf{k}}} e^{-\lambda}$$
## (e)

We want to compute:
$$\begin{align}
P(\mathbf{k}_{1},\dots,\mathbf{k}_{n}) & = \left|\bra{\mathbf{k}_{1},\dots,\mathbf{k}_{n}} T\exp\left( i \int d^{4}x j\phi \right)\ket{0} \right|^{2}
\end{align}$$
We first expand to the mth order:
$$\begin{align}
\bra{\mathbf{k}_{1},\dots,\mathbf{k}_{n}}   \frac{i^{m}}{m!}\int d^{4}x_{1}\dots d^{4}x_{m}T\phi_{1}\dots \phi_{m}j_{1}\dots j_{m}\ket{0}  & = \frac{i^{m}}{m!}\int d^{4}x_{1}  \dots d^{4}x_{m}j_{1}\dots j_{m}\bra{\mathbf{k}_{1},\dots,\mathbf{k}_{n}} T\phi_{1}\dots \phi_{m}\ket{0}  
\end{align}$$
Then we look at the Feynman diagram. Notice that we must have $m> n$. Then there are $n$ external points and $m$ internal points. We first choose $n$ out of $m$ internal points to connect with the external points. There are $\frac{m!}{(m-n)!}$ ways of doing so. Next we connect the internal points. There are $m-n$ points remaining. Due to the pairing as explained above, we must have $m-n\in 2\mathbb{N}$. We set $m-n=2l$. Then there are $\frac{(2l)!}{2^{l}l!}$ ways of paring. Then:
$$\begin{align}
\bra{\mathbf{k}_{1},\dots,\mathbf{k}_{n}}   \frac{i^{m}}{m!}\int d^{4}x_{1}\dots d^{4}x_{m}T\phi_{1}\dots \phi_{m}j_{1}\dots j_{m}\ket{0}  & =  \frac{i^{m}}{m!} \frac{m!}{(m-n)!} \prod_{r=1}^{n}\left(  \int d^{4}j \bra{\mathbf{k}_{r}} \phi \ket{0}  \right)^{} \left(  \int d^{4}x d^{4}y D_{xy}j_{x}j_{y} \right)^{l} \cdot \frac{(2l)!}{2^{l}l! } \\
 & = \frac{i^{2l}}{l!}\prod_{r=1}^{n}\left( i \int d^{4}x j\bra{\mathbf{k}_{r}} \phi \ket{0}  \right)\left(  \frac{1}{2}\int d^{4}d^{4}y D_{xy}j_{x}j_{y} \right)^{l} \\
 & = \frac{(-1)^{l}}{l!}\prod_{r=1}^{n}B^{n}(\mathbf{k}_{r})A^{l}
\end{align}$$
Then:
$$\begin{align}
\bra{\mathbf{k}_{1},\dots,\mathbf{k}_{n}} T\exp\left( i \int d^{4}x j\phi \right)\ket{0}  & = \sum_{l} \frac{(-1)^{l}}{l!}\prod_{r=1}^{n}B^{n}(\mathbf{k}_{r})A^{l} \\
 & = \prod_{r=1}^{n}B^{n}(\mathbf{k}_{r})e^{-A}
\end{align}$$
Then:
$$\begin{align}
P(\mathbf{k}_{1},\dots,\mathbf{k}_{n}) & = \prod_{r=1}^{n}B^{*n}(\mathbf{k}_{r})e^{-A^{*}}\prod_{s=1}^{n}B^{n}(\mathbf{k}_{s})e^{A} \\
 & = \prod_{r=1}^{n} |B(\mathbf{k}_{r})|^{n}e^{-2\mathrm{Re}A} \\
 & =\prod_{r=1}^{n}\frac{|\tilde{j}(k_{r})|^{2}}{2E_{\mathbf{k}_{r}}} e^{-\lambda}
\end{align}$$
We calculate the total probability in the k-space:
$$\begin{align}
\int  \frac{d^{3}k_{1}}{(2\pi)^{3}} \dots \frac{d^{3}k_{n}}{(2\pi)^{3}} \prod_{r=1}^{n}\frac{|\tilde{j}(k_{r})|^{2}}{2E_{\mathbf{k}_{r}}} e^{-\lambda} & = \left( \int \frac{d^{3}k}{(2\pi)^{3}} \frac{|\tilde{j}(k)|^{2}}{2E_{\mathbf{k}}} \right)^{n}e^{-\lambda} \\
 & = (2\mathrm{Re}(A))^{n}e^{-\lambda} \\
 & = \lambda^{n}e^{-\lambda}
\end{align}$$
Since the Fock states doesn't care about the order of $\mathbf{k}$'s, so we are overcounting by a factor of $n!$. Then the true probability is:
$$P(n)= \frac{\lambda^{n}e^{-\lambda}}{n!}$$
## (f)

We have:
$$\begin{align}
\sum_{n=0}^{\infty} \frac{\lambda^{n}e^{-\lambda}}{n!} & = e^{-\lambda}\sum_{n} \frac{\lambda^{n}}{n!} \\
 & = e^{-\lambda}e^{\lambda} \\
 & = 1
\end{align}$$
We have:
$$\begin{align}
\sum_{n=0}^{\infty}n \cdot \frac{\lambda^{n}e^{-\lambda}}{n!} & = e^{-\lambda}\sum_{n=1}^{\infty} \frac{\lambda^{n}}{(n-1)!} \\
 & = e^{-\lambda}\lambda \sum_{n} \frac{\lambda^{n-1}}{(n-1)!} \\
 & = e^{-\lambda}e^{\lambda}\lambda \\
 & = \lambda
\end{align}$$
# Problem 4


