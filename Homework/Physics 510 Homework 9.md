# 1.
## (a).
Let the density operator be written as a classical mixture of $\ket{\psi_{k}}$ with probability $p_{k}$. Then:
$$\begin{align}
\rho_{\alpha \alpha} & =\bra{\alpha} \rho \ket{\alpha}  \\
 & = \bra{\alpha} \sum_{k}p_{k}\ket{\psi_{k}} \bra{\psi_{k}} \alpha\rangle \\
 & = \sum_{k}p_{k}|\bra{\alpha} \psi_{k}\rangle |^{2}
\end{align}$$
Since $p_{k},|\bra{\alpha}\psi_{k}\rangle|\in \mathbb{R}$, then $\rho_{\alpha \alpha}\in \mathbb{R}$
## (b).
$$\begin{align}
\rho ^{\dagger} & =\left( \sum_{k}p_{k}\ket{\psi_{k}} \bra{\psi_{k}}  \right)^{\dagger} \\
 & = \sum p_{k} \ket{\psi_{k}} \bra{\psi_{k}}  \\
 & = \rho
\end{align}$$
Then $\rho$ is Hermitian.
## (c).
Pick an arbitrary orthonormal basis $\{ \ket{\alpha} \}$. By $(a)$ I know that:
$$\begin{align}
Tr(\rho) & =\sum_{\alpha}\rho_{\alpha \alpha} \\
 & = \sum_{\alpha,k}p_{k}|\bra{\alpha} \psi_{k}\rangle |^{2} \\
\end{align}$$
Since $\ket{\psi_{k}}$ is normalized, we must have:
$$\sum_{\alpha}|\bra{\alpha} \psi_{k}\rangle|^{2}=1$$
Then:
$$\begin{align}
Tr(\rho) & =\sum_{k}p_{k} \\
 & =1
\end{align}$$
This is because that the probability $p_{k}$ also has to be normalized.
## (d).
We have:
$$\begin{align}
\rho^{2} & =\left( \sum_{i}p_{i}\ket{\psi_{i}} \bra{\psi_{i}}   \right)\left( \sum_{j}p_{j}\ket{\psi_{j}} \bra{\psi_{j}}  \right) \\
 & = \sum_{i}p_{i}^{2}\ket{\psi_{i}} \bra{\psi_{i}}   
\end{align}$$
Then similarly, after choosing an orthonormal basis $\{ \ket{\alpha} \}$, I have:
$$\begin{align}
Tr(\rho^{2}) & =\sum_{i}p_{i}^{2}
\end{align}$$
Know that $0\leq p_{i} \leq{1}$, then $p_{i}^{2}\leq p_{i}$. Therefore:
$$Tr(\rho^{2})=\sum_{i}p_{i}^{2}\leq \sum_{i}p_{i}=1$$

## (e).
If the state is pure, assume that $\rho=\ket{\psi}\bra{\psi}$. Then:
$$\rho^{2}=\ket{\psi} \bra{\psi}\psi\rangle\bra{\psi} =\ket{\psi} \bra{\psi} =\rho $$
If the state is mixed, 

>[!Note] Claim
>$\text{mixed state}\implies Tr(\rho^{2}) <1$. 
### Proof of claim
Assume we have a mixture of states $\ket{\psi_{k}},k=1,\dots,N,N\geq 2$, with probability $p_{k}$. Then:
$$\begin{align}
Tr(\rho^{2}) & =\sum_{k}p_{k}^{2} \\
 & = p_{1}^{2}+(p_{2}^{2}+\dots+p_{N}^{2}) \\
 & \leq p_{1}^{2}+(p_{2}+\dots+p_{N})^{2}
\end{align}$$
Know that:
$$\left\{\begin{align}
 & p_{1}+(p_{2}+\dots+p_{N})=1 \\
 & p_{k}>0,\forall k
\end{align}\right.
\implies 0<p_{1},(p_{2}+\dots+p_{N})<1$$
Then:
$$p_{1}^{2}<p_{1}\text{ and }(p_{2}+\dots+p_{N})^{2}<p_{2}+\dots+p_{N}$$
Then:
$$Tr(\rho^{2})<p_{1}+(p_{2}+\dots+p_{N})=1$$
>[!Right]
>$\blacksquare$

Then, back to the problem, if the state is not pure, then we have:
$$Tr(\rho^{2}) \neq 1$$
Then must have:
$$\rho^{2} \neq \rho$$
Otherwise, if $\rho^{2}=\rho$, I have $Tr(\rho^{2})=Tr(\rho)=1$.

# 2.
**Conditions for density matrix:**
Know that if the density operator is $\rho=\sum_{k}p_{k} \ket{\psi_{k}}\bra{\psi_{k}}$, then we have:
$$\begin{align}
 & \bra{i} \rho \ket{j} =\sum_{k}p_{k}\bra{i} \psi_{k}\rangle \bra{\psi_{k}} j\rangle \\
 & \bra{j} \rho \ket{i} =\sum_{k}p_{k}\bra{j} \psi_{k}\rangle \bra{\psi_{k}} i\rangle 
\end{align}$$
where $\{ \ket{i} \}$ is an arbitrary orthonormal basis. Then must have $\bra{i}\rho \ket{j}=\bra{j}\rho \ket{i}^{*}$. Then $\beta=\alpha ^{*}$. 

Also, I observe, for $i\neq j$:
$$\begin{align}
|\alpha| & =|\bra{i} \rho \ket{j}  |  \\
& = \sum_{k}p_{k} |\bra{i} \psi_{k}\rangle ||\bra{\psi_{k}} j\rangle | \\
\end{align}$$
According to GM-QM inequality:
$$\sqrt{ |\bra{i} \psi_{k}\rangle||\bra{\psi_{k}} j\rangle| }\leq \sqrt{ \frac{|\bra{i} \psi_{k}\rangle|^{2}+|\bra{\psi_{k}} j\rangle|^{2}}{2} }= \frac{1}{\sqrt{ 2 }}$$
Then:
$$|\beta|=|\alpha|\leq \frac{1}{2}\sum_{k}p_{k}= \frac{1}{2}$$ For the diagonal element, I have:
$$\begin{align}
\sum_{i} \bra{i} \rho \ket{i}  & =\sum_{k}p_{k}\sum_{i}|\bra{i} \psi_{k}\rangle|^{2} \\
 & =\sum_{k}p_{k}=1
\end{align}$$
Therefore, must obtain $\gamma+\gamma=1\implies \gamma= \frac{1}{2}$.

**Conditions for pure state:**
If there is only one possible $k$, meaning that the state is pure, then:
$$\sqrt{ |\bra{i} \psi\rangle| }$$
