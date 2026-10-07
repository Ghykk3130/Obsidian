# Problem 1
## (a)

We can compute:
$$\begin{align}
(\hat{\sigma}\cdot \mathbf{a})(\hat{\sigma}\cdot \mathbf{b}) & = \begin{pmatrix}
a_{3} & a_{1}-ia_{2} \\
a_{1}+ia_{2} & -a_{3}
\end{pmatrix} \begin{pmatrix}
b_{3} & b_{1}-ib_{2} \\
b_{1}+ib_{2} & -b_{3}
\end{pmatrix} \\
 & = \begin{pmatrix}
a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}+i(a_{1}b_{2}-a_{2}b_{1}) & a_{3}b_{1}-b_{3}a_{1}+i(a_{2}b_{3}-a_{3}b_{2}) \\
a_{3}b_{1}-b_{3}a_{1}-i(a_{2}b_{3}-a_{3}b_{2})  & a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3}+i(a_{2}b_{1}-b_{2}a_{1})
\end{pmatrix} \\
 & = \begin{pmatrix}
\mathbf{a}\cdot \mathbf{b}+i(\mathbf{a}\times \mathbf{b})_{3} & (\mathbf{a}\times \mathbf{b})_{2}+i(\mathbf{a}\times \mathbf{b})_{1} \\
-(\mathbf{a}\times \mathbf{b})_{2}+i(\mathbf{a}\times \mathbf{b})_{1} & \mathbf{a}\cdot \mathbf{b}-i(\mathbf{a}\times \mathbf{b})_{3}
\end{pmatrix} \\ & = \mathbf{a}\cdot \mathbf{b}+i[(\mathbf{a}\times \mathbf{b})_{1}\sigma_{x}+(\mathbf{a}\times \mathbf{b})_{2}\sigma_{y}+(\mathbf{a}\times \mathbf{b})_{3}\sigma_{z}] \\
 & = \mathbf{a}\cdot \mathbf{b}+i  \hat{\sigma} \cdot(\mathbf{a}\times \mathbf{b})
\end{align}$$
## (b)

We compute:
$$\begin{align}
  & \frac{1}{2} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}\xi_{+}= \frac{1}{2}\xi_{+} \\
\implies & \begin{pmatrix}
0 & 0 \\
0 & -1
\end{pmatrix}\xi_{+}=0 \\
\implies & \xi_{+}= \begin{pmatrix}
1 \\
0
\end{pmatrix}
\end{align}$$
For the spinor with the other helicity, we have:
$$\begin{align}
 & \frac{1}{2}\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}\xi_{-}=- \frac{1}{2}\xi_{-} \\
\implies & \begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}\xi_{-}=0 \\
\implies & \xi_{-}=\begin{pmatrix}
0 \\
1
\end{pmatrix}
\end{align}$$
## (c)

We have:
$$\begin{align}
[S_{x},S_{y}] & = \frac{1}{4}[ \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}\begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} - \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} ] \\
 & = \frac{1}{4}[ \begin{pmatrix}
i & 0 \\
0 & -i 
\end{pmatrix}- \begin{pmatrix}
-i & 0 \\
0 & i
\end{pmatrix}] \\
 & = \frac{i}{2}\sigma_{z} \\ & = i S_{z}

\end{align}$$
The proofs for the other two commutation relations should be similar. Observe that:
$$\begin{align}
S^{2} & = S_{x}^{2}+S_{y}^{2}+S_{z}^{2} \\
 & = \frac{1}{4}+ \frac{1}{4}+ \frac{1}{4} \\
 & = \frac{3}{4}
\end{align}$$
Then we have:
$$[S^{2},S_{z}]=\left[  \frac{3}{4},S_{z} \right]=0$$
since $\frac{3}{4}$ is a scalar matrix.
## (d)

From part (a) we know that:
$$\begin{align}
 & \sigma_{i}a_{i}\sigma_{j}b_{j}=a_{i}b_{i}+i\epsilon_{ijk}a_{i}b_{j}\sigma_{k} \\
\implies & S_{i}a_{i}S_{j}b_{j}= \frac{a_{i}b_{i}}{4}+ \frac{i}{2}\epsilon_{ijk}a_{i}b_{j}S_{k}
\end{align}$$
Fix $l$, take $\mathbf{a}=\mathbf{X}$, $b_{j}=\delta_{jl}$. Then:
$$\begin{align}
 & S_{i}X_{i}S_{l}b_{l}= \frac{X_{l}b_{l}}{4}+ \frac{i}{2}\epsilon_{ilk}X_{i}S_{k} \\
\implies & S_{i}X_{i}S_{l}= \frac{X_{l}}{4}+ \frac{i}{2}\epsilon_{ilk}X_{i}S_{k}
\end{align}$$
Here we do not sum over $l$. Similarly, take $\mathbf{b}=\mathbf{X}$, $a_{i}=\delta_{il}$, we have:
$$\begin{align}
 & S_{l}a_{l}S_{j}X_{j}= \frac{a_{l}X_{l}}{4}+ \frac{i}{2}\epsilon_{ljk}X_{j}S_{k} \\
\implies & S_{l}S_{j}X_{j}= \frac{X_{l}}{4}+ \frac{i}{2}\epsilon_{ljk}X_{j}S_{k}
\end{align}$$
Then:
$$\begin{align}
[\mathbf{S}\cdot \mathbf{X},\mathbf{S}]_{l} & = S_{i}X_{i}S_{l}-S_{l}S_{i}X_{i} \\
 & = \frac{i}{2}\epsilon_{ilk}X_{i}S_{k}- \frac{i}{2}\epsilon_{lik}X_{i}S_{k} \\
 & = i \epsilon_{lki}S_{k}X_{i} \\
 & = i(\mathbf{S}\times \mathbf{X})_{l}
\end{align}$$
Therefore:
$$[\mathbf{S}\cdot \mathbf{X},\mathbf{S}]=i\mathbf{S}\times \mathbf{X}$$
## (e)

We compute:
$$\begin{align}
[S_{+},S_{-}] & = [S_{x}+iS_{y},S_{x}-iS_{y}] \\
 & = i[S_{y},S_{x}]-i[S_{x},S_{y}] \\
 & = 2i[S_{y},S_{x}] \\
 & = 2S_{z}
\end{align}$$
Next we compute:
$$\begin{align}
[S_{z},S_{\pm}] & = [S_{z},S_{x}\pm iS_{y}] \\
 & = [S_{z},S_{x}]\pm i[S_{z},S_{y}] \\
 & = iS_{y}\pm i(-iS_{x}) \\
 & = \pm (S_{x}\pm iS_{y})  \\
 & = \pm S_{\pm}
\end{align}$$
## (f)

We have:
$$\begin{align}
S_{z}S_{-}\ket{S,S_{z}}  & = ([S_{z},S_{-}]+S_{-}S_{z})\ket{S,S_{z}}  \\
 & = (S_{z}-1)S_{-}\ket{S,S_{z}} 
\end{align}$$
Then $S_{-}\ket{S,S_{z}} \propto \ket{S,S_{z}-1}$. Similarly:
$$\begin{align}
S_{z}S_{+}\ket{S,S_{z}}  & = ([S_{z},S_{+}]+S_{+}S_{z})\ket{S,S_{z}}  \\
 & = (S_{z}+1)S_{+}\ket{S,S_{z}} 
\end{align}$$
Then $S_{+}\ket{S,S_{z}}\propto \ket{S,S_{z}+1}$.

We have:
$$\begin{align}
S^{2} & = S_{x}^{2}+S_{y}^{2}+S_{z}^{2} \\
 & = S_{z}^{2}+S_{+}S_{-}-i[S_{y},S_{x}] \\
 & = S_{z}^{2}-S_{z}+S_{+}S_{-}
\end{align}$$
We let $S_{-}\ket{S,S_{z}}=C\ket{S,S_{z}-1}$. Then we have:
$$\begin{align}
\bra{S,S_{z}} S_{+}S_{-}\ket{S,S_{z}}  & = \bra{S,S_{z}} (S^{2}-S_{z}(S_{z}-1))\ket{S,S_{z}}  \\
 & = S(S+1)-S_{z}(S_{z}-1)
\end{align}$$
The LHS is simply $|C|^{2}$. Then take real and positive C to get:
$$\begin{align}
S_{-}\ket{S,S_{z}} =\sqrt{ S(S+1)-S_{z}(S_{z}-1) }\ket{S,S_{z}-1} 
\end{align}$$
Similarly, we can compute:
$$\begin{align}
S^{2} & = S_{z}^{2}+S_{-}S_{+}+i[S_{y},S_{x}] \\
 & = S_{z}^{2}+S_{z}+S_{-}S_{+}
\end{align}$$
Let $S_{+}\ket{S,S_{z}}=D\ket{S,S_{z}+1}$. We get:
$$\begin{align}
|D|^{2} & = \bra{S,S_{z}} (S^{2}-S_{z}(S_{z}+1))\ket{S,S_{z}}  \\
 & = S(S+1)-S_{z}(S_{z}+1)
\end{align}$$
Then take real and positive $D$ to get:
$$\begin{align}
S_{+}\ket{S,S_{z}} =\sqrt{ S(S+1)-S_{z}(S_{z}+1) }\ket{S,S_{z}+1} 
\end{align}$$
# Problem 2
## (a)

Assume that the magnetic field is in the z direction. Then $A_{z}=0$. We have:
$$\begin{align}
v_{F} \hat{\sigma}\cdot(\mathbf{p}+e\mathbf{A}) & = v_{F}[\begin{pmatrix}
0&p_{x}+eA_{x} \\
p_{x}+eA_{x}& 0
\end{pmatrix}+ \begin{pmatrix}
0 & -i(p_{y}+eA_{y}) \\
i(p_{y}+eA_{y}) & 0
\end{pmatrix}] \\
 & = \begin{pmatrix}
0  & w \\
w^{*} & 0
\end{pmatrix}
\end{align}$$
where:
$$w=v_{F}(p_{x}+eA_{x}-i(p_{y}+eA_{y}))$$
## (b)

We choose the Landau gauge $\mathbf{A}=xB \hat{\mathbf{y}}$. Then we have:
$$\begin{align}
w= v_{F}[p_{x}-i(p_{y}+eBx)]
\end{align}$$
Observe that this looks like the raising and lowering operators. We define:
$$\begin{align}
P_{x}=p_{x},P_{y}=p_{y}+eBx,a=P_{x}-iP_{y}
\end{align}$$
We observe that:
$$\begin{align}
[P_{x},P_{y}] & = [p_{x},p_{y}+eBx] \\
 & = eB[p_{x},x] \\
 & = -ieB\hbar
\end{align}$$
Then:
$$\begin{align}
[P_{x}-iP_{y},P_{x}+iP_{y}] & = i[P_{x},P_{y}]-i[P_{y},P_{x}] \\
 & = 2eB\hbar
\end{align}$$
Then define:
$$\begin{align}
a= \frac{1}{\sqrt{ 2eB\hbar }}(P_{x}-iP_{y})
\end{align}$$
We would have:
$$[a,a^{\dagger}]=1$$
Now we have:
$$\begin{align}
w & = v_{F}(P_{x}-iP_{y}) \\
 & =  v_{F}\sqrt{ 2eB\hbar } \frac{P_{x}-iP_{y}}{\sqrt{ 2eB\hbar }} \\
 & = \epsilon_{D} a,\ \epsilon_{D}=v_{F}\sqrt{ 2eB\hbar }
\end{align}$$
Then we need to solve the "massless Dirac equation":
$$\begin{align}
\epsilon_{D}\begin{pmatrix}
0 & a \\
a^{\dagger} & 0
\end{pmatrix} \begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}=E\begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}
\end{align}$$
We first notice that:
$$\begin{align}
[a,(a^{\dagger})^{n}] & = a(a^{\dagger})^{n}-(a^{\dagger})^{n}a \\
 & = (1+a^{\dagger}a) (a^{\dagger})^{n-1}-(a^{\dagger})^{n}a \\
 & = \dots \\
 & = n (a^{\dagger})^{n-1}
\end{align}$$
Then:
$$\begin{align}
 & [a,(a^{\dagger})^{n}]\ket{0}   = n(a^{\dagger})^{n-1}\ket{0}  \\
\implies & a(a^{\dagger})^{n}\ket{0} =n (a^{\dagger})^{n-1}\ket{0}  \\
\implies & a^{\dagger}\ket{n} =\sqrt{ n+1 }\ket{n+1} 
\end{align}$$
Therefore $\ket{n}= \frac{(a^{\dagger})^{n}}{\sqrt{ n! }}$. We would have:
$$\begin{align}
a\ket{n}  & = a \frac{(a^{\dagger})^{n}}{\sqrt{ n! }}\ket{0}  \\
 & = n \frac{(a^{\dagger})^{n-1}}{\sqrt{ n! }}\ket{0} \\ & = \sqrt{ n } \frac{(a^{\dagger})^{n-1}}{\sqrt{ (n-1)! }}\ket{0}  \\

 & = \sqrt{ n }\ket{n-1}  
\end{align}$$
Then:
$$\begin{align}
a^{\dagger}a\ket{n}  & = a^{\dagger} \sqrt{ n }\ket{n-1}  \\
 & = n \ket{n} 
\end{align}$$
$$\begin{align}
aa^{\dagger}\ket{n}  & = (1+a^{\dagger}a)\ket{n}  \\
 & = (n+1)\ket{n} 
\end{align}$$
So if the hamiltonian can be transformed into a diagonal matrix, it would be helpful. We have:
$$\begin{align}
 & \epsilon_{D}\begin{pmatrix}
0 & a \\
a^{\dagger} & 0
\end{pmatrix} \begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}=E\begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix} \\
\implies & \epsilon_{D}^{2} \begin{pmatrix}
aa^{\dagger} & 0 \\
0 & a^{\dagger}a
\end{pmatrix} \begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}= E^{2} \begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}
\end{align}$$
We let:
$$\begin{align}
\begin{pmatrix}
\psi_{A} \\
\psi_{B}
\end{pmatrix}= C \begin{pmatrix}
\ket{n-1} \\
\ket{n}  
\end{pmatrix}
\end{align}$$
Then:
$$\begin{align}
 & \epsilon_{D}^{2} \begin{pmatrix}
n \ket{n-1}  \\
n \ket{n} 
\end{pmatrix}=E^{2} \begin{pmatrix}
\ket{n-1}  \\
\ket{n} 
\end{pmatrix}
\end{align}$$
Then we have:
$$\begin{align}
 & E^{2}=\epsilon_{D}^{2} n \\
\implies & E(n,B)=\pm \epsilon_{D}\sqrt{ n },\ \epsilon_{D}=v_{F}\sqrt{ 2eB\hbar }
\end{align}$$
## (c)

Imagine at $B_{n}$, the magnetic field is such that the $E(n,B_{n})=\epsilon_{F}$. Then we change the magnetic field to $B_{n+1}$, such that $E(n+1,B_{n+1})=\epsilon_{F}$. Then we have:
$$\begin{align}
 & v_{F}\sqrt{ 2eB_{n}\hbar }\sqrt{ n }=\epsilon_{F} \\
 & v_{F}\sqrt{ 2eB_{n+1}\hbar }\sqrt{ n+1 }=\epsilon_{F} \\
\implies & n= \frac{\epsilon_{F}^{2}}{v_{F}^{2}2eB_{n}\hbar} \\
 & n+1= \frac{\epsilon_{F}^{2}}{v_{F}^{2} 2eB_{n+1}\hbar} \\
\implies & \Delta\left(  \frac{1}{B} \right)= \frac{1}{B_{n+1}}- \frac{1}{B_{n}}= \frac{2v_{F}^{2} e\hbar}{\epsilon_{F}^{2}}
\end{align}$$
Therefore the oscillation is still periodic in $\frac{1}{B}$.
## (d)

