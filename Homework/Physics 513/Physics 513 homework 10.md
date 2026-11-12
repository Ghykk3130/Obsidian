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

Let:
$$\mathcal{L}_{\text{int}}=- \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2}$$
We know that the coefficient in front of $\Phi^{i}\Phi^{j}\Phi^{k}\Phi^{l}$ is $\frac{\partial^{4}}{\partial \Phi_{i}\partial \Phi_{j}\partial \Phi_{k}\partial \Phi_{l}}\left( - \frac{\lambda}{4}(\Phi^{i}\Phi^{i})^{2} \right)$. We compute:
$$\begin{align}
\frac{\partial}{\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} & = \frac{\partial}{\partial \Phi^{i}}(\Phi^{n}\Phi^{n}\Phi^{m}\Phi^{m}) \\
 & = 2\Phi^{i}(\Phi^{m})^{2}+ (\Phi^{n})^{2} 2\Phi^{i} \\
 & = 4\Phi^{i}(\Phi^{n})^{2}
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial^{2}}{\partial \Phi^{j}\partial \Phi^{i}} (\Phi^{n}\Phi^{n})^{2} = 4\delta^{ij}(\Phi^{n})^{2}+ 8\Phi^{n}\Phi^{j} \\
\implies &  \frac{\partial^{3}}{\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}= 8\delta^{ij}\Phi^{k}+8\Phi^{k}\Phi^{j}+8\Phi^{n}\delta^{jk} \\
\implies & \frac{\partial^{4}}{\partial \Phi^{l}\partial \Phi^{k}\partial \Phi^{j}\partial \Phi^{i}}(\Phi^{n}\Phi^{n})^{2}  = 8\delta^{ij}\delta^{kl}+8\delta^{kl}\Phi^{j}+8\Phi^{k}\delta^{jl}+8\Phi^{l}\delta^{jk}
\end{align}$$


