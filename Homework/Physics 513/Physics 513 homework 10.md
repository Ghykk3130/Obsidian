# Problem 1
## (a1)

We have:
$$\begin{align}
T\Phi^{i}(x)\Phi^{j}(y)= \theta(x^{0}-y^{0})\Phi^{i}(x)\Phi^{j}(y)+\theta(y^{0}-x^{0})\Phi^{j}(y)\Phi^{i}(x)
\end{align}$$
It suffices to compute:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} 
\end{align}$$
If $i\neq j$, we know that $a^{i}_{\mathbf{p}},a^{j}_{\mathbf{p}}$, $b^{i}_{\mathbf{p}},b^{j}_{\mathbf{p}}$ commute. Then the result is necessarily zero because we can move them around and annihilate them with vacuum. If $i=j$, we have:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} = D_{W}(x-y)
\end{align}$$
Then:
$$\begin{align}
\bra{0} \Phi^{i}(x)\Phi^{j}(y)\ket{0} = \delta^{ij}D_{W}(x-y)
\end{align}$$
Then:
$$\begin{align}
\bra{0} T\Phi^{i}(x)\Phi^{j}(y)\ket{0}  & = \theta(x^{0}-y^{0})\delta^{ij}D_{W}(x-y)+\theta(y^{0}-x^{0})\delta^{ij}D_{W}(y-x) \\
 & = \delta^{ij}D_{F}(x-y)
\end{align}$$
## (a2)

We know that the vertex factor is just the "degeneracy" of each contraction result after multiplying the coefficient. 

It's obvious that $\bra{f} \Phi^{i}\Phi^{j}\Phi^{k}\Phi^{l}\ket{i}$ takes the same value for any permutation of $i,j,k,l$. Take 
$$\mathcal{L}_{\text{int}}=- \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2}$$
as a 4th order polynomial. Then we need to count the coefficient. We know that the coefficient in front of $\Phi^{i}\Phi^{j}\Phi^{k}\Phi^{l}$ is $\frac{\partial^{4}}{\partial \Phi_{i}\partial \Phi_{j}\partial \Phi_{k}\partial \Phi_{l}}\left( - \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2} \right)$. We compute:
$$\begin{align}
\frac{\partial}{\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} & = \frac{\partial}{\partial \Phi^{i}}(\Phi^{n}\Phi^{n}\Phi^{m}\Phi^{m}) \\
 & = 2\Phi^{i}(\Phi^{m})^{2}+ (\Phi^{n})^{2} 2\Phi^{i} \\
 & = 4\Phi^{i}(\Phi^{n})^{2}
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial^{2}}{\partial \Phi^{j}\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} = 4\delta^{ij}(\Phi^{n})^{2}+ 8\Phi^{i}\Phi^{j} \\
\implies &  \frac{\partial^{3}}{\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}= 8\delta^{ij}\Phi^{k}+8\delta^{ki}\Phi^{j}+8\Phi^{i}\delta^{jk} \\
\implies & \frac{\partial^{4}}{\partial \Phi^{l}\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}  = 8\delta^{ij}\delta^{kl}+8\delta^{ik}\delta^{jl}+8\delta^{il}\delta^{jk}
\end{align}$$
Then the vertex factor is:
$$\begin{align}
- \frac{\lambda }{4}i\cdot8(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+ \delta^{il}\delta^{jk})=-2\lambda i(\delta^{ij}\delta^{kl}+\delta^{ik}\delta^{jl}+\delta^{il}\delta^{jk})
\end{align}$$
If we take $i=j=k=l$, we get $-6\lambda i$, which is consistent with $\phi^{4}$ theory.
## (a3)

For $\Phi^{1}\Phi^{2}\rightarrow \Phi^{1}\Phi^{2}$, we take $i=1,j=2,k=1,l=2$. Then we get:
$$\begin{align}
i\mathcal{M}=-2\lambda i
\end{align}$$
Then the cross-section is:
$$\begin{align}
 & \frac{d\sigma}{d\Omega}= \frac{1}{64\pi^{2}E^{2}_{\text{CM}}} \frac{|\mathbf{p}_{f}|}{|\mathbf{p}_{i}|}|\mathcal{M} |^{2}
\end{align}$$
In the center of mass frame, we must have:
$$\begin{align}\sqrt{ |\mathbf{p}_{i}|^{2}+m_{1}^{2} }+\sqrt{ |\mathbf{p}_{i} |^{2}+m_{2}^{2} }= \sqrt{ |\mathbf{p}_{f} |^{2}+m_{1}^{2}  }+\sqrt{ |\mathbf{p}_{f}|^{2}+m_{2}^{2} }\implies|\mathbf{p}_{i} |=|\mathbf{p}_{f}|
\end{align}$$
Then:
$$\begin{align}
 &  \frac{d\sigma}{d\Omega}= \frac{1}{64\pi^{2}E^{2}_{\text{CM}}} |\mathcal{M} |^{2} \\
\implies & \sigma= \frac{1}{2} \int d\Omega \frac{1}{64\pi^{2}E^{2}_{\text{CM}} }|\mathcal{M} |^{2} \\ & = \frac{1}{2} 4\pi \frac{1}{64\pi^{2}E^{2}_{\text{CM}}}|\mathcal{M} |^{2} \\
 & = \frac{\lambda^{2}}{8\pi E^{2}_{\text{CM}}}
\end{align}$$
For $\Phi^{1}\Phi^{1}\rightarrow \Phi^{2}\Phi^{2}$, we take $i=j=2,\ k=l=1$. Then we get:
$$\begin{align}
i\mathcal{M}=-2\lambda i
\end{align}$$
Then clearly, we still have:
$$\sigma= \frac{\lambda^{2}}{8\pi E^{2}_{\text{CM}}}$$
For $\Phi^{1}\Phi^{1}\rightarrow \Phi^{1}\Phi^{1}$, we take $i=j=k=l=1$. Then we get:
$$\begin{align}
i\mathcal{M}= -6\lambda i
\end{align}$$
Then clearly, we have:
$$\begin{align}
\sigma= \frac{9\lambda^{2}}{8\pi E^{2}_{\text{CM}}}
\end{align}$$
# (b)

