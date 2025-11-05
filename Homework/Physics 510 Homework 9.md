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
