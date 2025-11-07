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
 & = \sum_{i,j }p_{i}p_{j}\ket{\psi_{i}} \bra{\psi_{i}} \psi_{j}\rangle \bra{\psi_{j}} 
\end{align}$$
$\rho^{2}$ is Hermitian because:
$$\begin{align}
(\rho^{2})^{\dagger} & =(\rho \rho)^{\dagger} \\
 & = \rho ^{\dagger}\rho ^{\dagger} \\
 & = \rho \rho=\rho^{2}
\end{align}$$
Then the eigenvalues of $\rho^{2}$ are all real. Then $Tr(\rho^{2})\in \mathbb{R}$. Let $\{ \ket{k} \}$ be an orthonormal basis. Then:
$$\begin{align}
Tr(\rho^{2}) & = \sum_{i,j,k}p_{i}p_{j} \bra{k} \psi_{i}\rangle \bra{\psi_{i}}\psi_{j}\rangle \bra{\psi_{j}} k\rangle \\
 & = \sum_{i,j,k}p_{i}p_{j} |\bra{k} \psi_{i}\rangle |^{2} \bra{\psi_{i}}\psi_{j}\rangle \\
 & = \sum_{i,j} p_{i}p_{j} \bra{\psi_{i}} \psi_{j}\rangle  
\end{align}$$
Then:
$$\begin{align}
Tr(\rho^{2}) & \leq|Tr(\rho^{2}) | \\
 & =|\sum_{i,j}p_{i}p_{j}\bra{\psi_{i}} \psi_{j}\rangle| \\
 & \leq \sum_{i,j}p_{i}p_{j}|\bra{\psi_{i}} \psi_{j}\rangle | \\
 & \leq \sum_{i,j}p_{i}p_{j} |\ket{\psi_{i}}||\ket{\psi_{j}} | \\
 & =\sum_{i,j}p_{i}p_{j} \\
 & = \left( \sum_{i}p_{i} \right)\left( \sum_{j}p_{j} \right) \\
 & =1
\end{align}\tag{1}$$
where I assumed that all $\ket{\psi_{i}}$ are normalized.

Now it remains to be shown that $Tr(\rho^{2})=1\implies \text{ensemble is pure}$
It suffices to show that $\text{ensemble not pure}\implies Tr(\rho^{2})\neq 1$

By definition, if the ensemble is not pure, then there exist some $\ket{\psi_{I}},\ket{\psi_{J}}$ that are not colinear. Then in $(1)$, I have:
$$  \begin{align}
Tr(\rho^{2}) & \leq|Tr(\rho^{2}) | \\
 & =|\sum_{i,j}p_{i}p_{j}\bra{\psi_{i}} \psi_{j}\rangle| \\
 & \leq \sum_{i,j}p_{i}p_{j}|\bra{\psi_{i}} \psi_{j}\rangle |  \\
  & =2p_{I}p_{J}|\bra{\psi_{I}}\psi_{jJ}\rangle|+\sum_{i,j\neq I,J}p_{i}p_{j} |\bra{\psi_{i}}\psi_{j}\rangle| \\
 & <2p_{I}p_{J}|\ket{\psi_{I}}  ||\ket{\psi_{J}} |+\sum_{i,j \neq I,J}p_{i}p_{J}|\ket{\psi_{i}}  ||\psi_{j}| \\
 & = \sum_{i,j}p_{i}p_{j} \\
 & = 1
\end{align}$$
Then $Tr(\rho^{2})\neq 1$. 
## (e).
If the state is pure, assume that $\rho=\ket{\psi}\bra{\psi}$. Then:
$$\rho^{2}=\ket{\psi} \bra{\psi}\psi\rangle\bra{\psi} =\ket{\psi} \bra{\psi} =\rho $$
If the state is mixed,  then we have:
$$Tr(\rho^{2}) \neq 1= Tr(\rho)$$
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
 
The necessary conditions that the matrix is a density matrix is that:
- $\gamma=\frac{1}{2}$
- $\alpha ^{*}=\beta$
- $|\alpha|=|\beta|\leq \frac{1}{2}$

**Conditions for pure state:**
It's easy to find the eigenvalues of the matrix:
$$\begin{vmatrix}
\frac{1}{2} - \lambda & \alpha \\
\alpha ^{*} & \frac{1}{2}-\lambda 
\end{vmatrix}=0\implies \lambda= \frac{1}{2}\pm |\alpha|$$
Know that for idempotent operators, the determinant must be $0$ or $1$. Because:
$$\rho^{2}=\rho \implies \det(\rho^{2})=\det(\rho)^{2}=\det(\rho) \implies \det(\rho)=0\text{ or }1$$
Know that:
$$\det(\rho)=\left(  \frac{1}{2}+|\alpha| \right)\left(  \frac{1}{2}- |\alpha| \right)= \frac{1}{4}-|\alpha|^{2}<1$$
Then must conclude:
$$\frac{1}{4}-|\alpha|^{2}=0\implies|\alpha|= \frac{1}{2}$$
Therefore, the necessary condition for $\rho$ to represent a pure state is that $|\alpha|= \frac{1}{2}$

# 3.
Suppose the population ratio of the particles from $(1)$ is $p_{1}$, and the population of the particles from $(2)$ is $p_{2}$, where $p_{1}+p_{2}=1$. Then the density operator is:
$$\rho=p_{1}\ket{+z} \bra{+z} +p_{2}\ket{-x} \bra{-x} $$
Know that the representation of $\ket{+z}\bra{+z}$ in the $\{ \ket{\pm z} \}$ basis is:
$$\begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}$$
Know compute the representation of $\ket{-x}\bra{-x}$. First recall that:
$$\ket{-x} = \frac{\sqrt{ 2 }}{2}\ket{+z} - \frac{\sqrt{ 2 }}{2}\ket{-z} $$
Then:
$$\ket{-x} \bra{-x} = \frac{1}{2}(\ket{+z} -\ket{-z} )(\bra{+z} -\bra{-z} )$$
Then:
$$\begin{align}
 & \bra{+z} -x\rangle\bra{-x} +z\rangle= \frac{1}{2} \\
 & \bra{+z} -x\rangle\bra{-x} -z\rangle=- \frac{1}{2} \\
 & \bra{-z} -x\rangle\bra{-x} +z\rangle = - \frac{1}{2} \\
 & \bra{-z} -x\rangle\bra{-x} -z\rangle= \frac{1}{2}
\end{align}$$
So the matrix representation is:
$$\begin{pmatrix}
\frac{1}{2} & - \frac{1}{2} \\
- \frac{1}{2} & \frac{1}{2}
\end{pmatrix}$$
Therefore the density matrix representation is:
$$p_{1}\begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}+ p_{2}\begin{pmatrix}
\frac{1}{2} & - \frac{1}{2} \\
- \frac{1}{2} &  \frac{1}{2}
\end{pmatrix}= \begin{pmatrix}
p_{1}+ \frac{1}{2}p_{2} & - \frac{1}{2}p_{2} \\
- \frac{1}{2}p_{2} & \frac{1}{2}p_{2}
\end{pmatrix}$$
# 4.
Choose the energy eigenkets $\{ \ket{n} \}$ as the basis. Then:
$$\begin{align}
Z & = Tr(e^{-\beta H}) \\
 & = \sum_{n}\bra{n} e^{-\beta H}\ket{n}  \\
 & = \sum \exp\left( - \beta \hbar \omega\left( n+ \frac{1}{2} \right) \right) \\
 & = \frac{\exp\left( - \beta \frac{\hbar \omega}{2} \right)}{1- \exp(-\beta \hbar \omega)}
\end{align}$$
$\langle x^{2}\rangle$ is given by:
$$\begin{align}
\langle x^{2}\rangle & = Tr(x^{2}\rho) \\
 & = \sum_{n}\bra{n} x^{2} \frac{\exp(-\beta H)}{Z}\ket{n}  \\
 & = \frac{1}{Z} \sum \bra{n}\left(  \frac{-2}{m\omega^{2}} \frac{\partial}{\partial \beta}\exp\left( -\beta\left( \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2} \right) \right) \right)\ket{n} \\
 & = \frac{1}{Z} \frac{-2}{m\omega^{2}} \frac{\partial}{\partial \beta}\sum \bra{n} \exp(-\beta H)\ket{n}  \\
 & =   - \frac{2}{m\omega^{2}} \frac{\partial}{\partial \beta}\ln Z 
\end{align}$$
We compute:
$$\begin{align}
\frac{\partial}{\partial \beta}\ln Z & = - \frac{\hbar \omega}{2}- \frac{\hbar \omega \exp(-\beta \hbar \omega) }{1-\exp(-\beta \hbar \omega)}
\end{align}$$
Therefore:
$$\begin{align}
\langle x^{2}\rangle & = \frac{\hbar}{m\omega}\left( 1+2\exp\left( - \frac{\beta \hbar \omega}{2} \right) \right)
\end{align}$$
# 5.
## (a).

First consider the classical Hamiltonian. Let the number of diatomic molecules be $N$. Consider a single diatomic molecule. The Hamiltonian is given by:
$$\begin{align}
H & = \frac{P^{2}}{2M}+ \frac{p_{r}^{2}}{2\mu}+  \frac{L^{2}}{2I}+ \frac{1}{2}\mu \omega^{2}r^{2} 
\end{align}$$
where $\vec{P}$ is the total momentum. Then the total Hamiltonian is:
$$H= \sum_{i} \left(  \frac{P_{i}^{2}}{2M}+ \frac{p_{ri}^{2}}{2\mu}+ \frac{L_{i}^{2}}{2I}+ \frac{1}{2}\mu \omega^{2}r_{i}^{2} \right)$$
where $i$ is the index of the molecule. Now that the Hamiltonian is separated, the eigenstate of the system must be:
$$\bigotimes_{i=1}^N\ket{\vec{k}_{i}}\otimes \ket{l_{i},m_{i}} \otimes \ket{n_{i}}  $$
where $\ket{\vec{k}_{i}}$ is the eigenstate of $\frac{P_{i}^{2}}{2M}$, $\ket{l_{i},m_{i}}$ is the eigenstate of $\frac{L_{i}^{2}}{2I}$, $\ket{n_{i}}$ is the eigenstate of $\frac{p_{ri}^{2}}{2\mu}+ \frac{1}{2}\mu \omega^{2}r_{i}^{2}$. Then the partition function is given by:
$$\begin{align}
Z & = Tr(e^{-\beta H}) \\
 & = \sum_{\text{all permutations of }\{ \vec{k}_{i} \},\{ \ket{l_{i},m_{i}} \} ,\ket{n_{i}} } \bigotimes_{i}\bra{\vec{k}_{i}} \otimes \bra{l_{i},m_{i}} \otimes \bra{n_{i}} \exp\left( -\beta \sum_{j}\left(  \frac{P_{j}^{2}}{2M}+ \frac{L_{j}^{2}}{2I}+ \frac{p_{rj}^{2}}{2\mu}+ \frac{1}{2}\mu \omega^{2}r_{j}^{2} \right) \right) \bigotimes_{i}\bra{\vec{k}_{i}} \otimes \bra{l_{i},m_{i}} \otimes \bra{n_{i}} \\
 & = \sum \exp\left( -\beta \sum_{j} \left( \frac{\hbar^{2}|\vec{k}_{j}|^{2}}{2M} + \frac{\hbar^{2}l_{j}(l_{j}+1)}{2I}\right) + \left( \frac{1}{2}+n_{j} \right)\hbar \omega\right) \\
 & = \left( \sum_{k} \exp\left( -\beta \frac{\hbar^{2}k^{2}}{2M} \right) \right)^{3N}\left( \sum_{l_{},m_{},|m_{}|\leq l_{}}\exp\left( -\beta \frac{\hbar^{2}l(l+1)}{2I} \right) \right)^{N}\left( \sum_{n}\exp\left( -\beta\left( n+ \frac{1}{2} \right)\hbar \omega \right)  \right)^N \\
\end{align}$$
Since $k$ has to satisfy the boundary condition $k= \frac{n\pi}{L}, n\in Z$, and there are $2l+1$ of $m$, the expression above can be further reduced:
$$\begin{align}
Z & = \left( \sum_{n\in \mathbb{Z}}\exp\left( -\beta \frac{\hbar^{2}n^{2}\pi^{2}}{2ML^{2}} \right) \right)^{3N}\left( \sum_{l\in \mathbb{N}} (2l+1)\exp\left( -\beta \frac{\hbar^{2}l(l+1)}{2I} \right) \right)^N\left( \sum_{n\in \mathbb{N}}\exp\left( -\beta\left( n+ \frac{1}{2} \right)\hbar \omega \right) \right)^N \\
 & =\left( \sum_{n\in \mathbb{Z}}\exp\left( -\beta \frac{\hbar^{2}n^{2}\pi^{2}}{2ML^{2}} \right) \right)^{3N}\left( \sum_{l\in \mathbb{N}} (2l+1)\exp\left( -\beta \frac{\hbar^{2}l(l+1)}{2I} \right) \right)^N \left( \frac{e^{- \frac{\beta \hbar \omega}{2}}}{1-e^{-\beta \hbar \omega}} \right)^N
\end{align}$$
## (b).
Know that:
$$\begin{align}
U & = Tr(H\rho) \\
 & = \frac{1}{Z}Tr(He^{-\beta H}) \\
 & = \frac{1}{Z}Tr\left( - \frac{\partial}{\partial \beta}e^{-\beta H} \right) \\
 & = - \frac{1}{Z} \frac{\partial}{\partial \beta}Tr(e^{-\beta H}) \\
 & = -\frac{1}{Z} \frac{\partial}{\partial \beta}Z \\
 & = - \frac{\partial}{\partial \beta}\ln Z
\end{align}$$
Since $T$ is small, then $\beta$ is large. Therefore:
$$\begin{align}
 & \sum_{n\in \mathbb{Z}}\exp\left( -\beta \frac{\hbar^{2}n^{2}\pi^{2} }{2ML^{2}} \right) \approx 1+ 2\exp\left( -\beta \frac{\hbar^{2}n^{2}\pi^{2} }{2ML^{2}} \right) \\
 & \sum_{l\in \mathbb{N}}(2l+1 )\exp\left( -\beta \frac{\hbar^{2}l(l+1)}{2I} \right)\approx 1+ 3\exp\left( -\beta \frac{\hbar^{2}}{I} \right) \\
 & \frac{e^{-\frac{\beta \hbar \omega }{2 }}}{1-e^{-\beta \hbar \omega}}= \frac{1}{e^{ \frac{\beta \hbar \omega}{2}}-e^{- \frac{\beta \hbar \omega}{2}}} \approx \exp\left( - \frac{\beta \hbar \omega}{2} \right)
\end{align}$$
where in the sum, I kept only the first two terms. Then:
$$\begin{align}
\ln Z  & \approx 3N\ln\left( 1+2\exp\left( -\beta \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right) \right)+N\ln\left( 1+3\exp\left( -\beta \frac{\hbar^{2}}{I} \right) \right)- \frac{N\beta \hbar \omega}{2} \\
 & \approx 6N\exp\left( -\beta \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right)+3N\exp\left( -\beta \frac{\hbar^{2}}{I} \right)- \frac{N\beta \hbar \omega}{2}
\end{align}$$
Then:
$$\begin{align}
U & =- \frac{\partial}{\partial \beta}\ln Z \\
 & \approx 6N\left(  \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right)\exp\left( -\beta \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right)+3N \frac{\hbar^{2}}{I}\exp\left( -\beta \frac{\hbar^{2}}{I} \right)+ \frac{N}{2}\hbar \omega
\end{align}$$
Then:
$$\begin{align}
C & = \left( \frac{\partial U}{\partial T} \right)_{V,N} \\
 & = -k\beta^{2} \frac{\partial U}{\partial \beta} \\
 & = 3Nk\beta^{2}\left( 2 \left( \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right)^{2}\exp\left( -\beta \frac{\hbar^{2}\pi^{2}}{2ML^{2}} \right)+\left(  \frac{\hbar^{2}}{I} \right)^{2}\exp\left( -\beta \frac{\hbar^{2}}{I} \right) \right)
\end{align}$$
## (c).

