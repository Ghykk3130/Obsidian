# 1.
## a.
We compute:
$$\begin{align}
a \ket{\lambda} & = a e^{-|\lambda|^{2}/2 }e^{\lambda a^{\dagger}}\ket{0}  \\
 & = e^{-|\lambda|^{2}/2}a \sum_{j} \frac{1}{j!} \lambda^j (a^{\dagger})^j \ket{0} \\
 & = e^{-|\lambda|^{2}/2} a \sum \frac{1}{j!} \sqrt{ j! } \ket{j} \\
 & = e^{-|\lambda|^{2}/2}\sum \frac{1}{j!}\lambda^j \sqrt{ j! } \sqrt{ j }\ket{j-1} \\
 & = e^{-|\lambda|^{2}/2} \lambda\sum \frac{1}{(j-1)!} \lambda^{j-1}\sqrt{ (j-1)! } \ket{j-1} \\
 & = e^{-|\lambda|^{2}/2}\lambda\sum \frac{1}{(j-1)!} (a^{\dagger})^{j-1}\ket{0} \\
 & = \lambda \ket{\lambda}       
\end{align}$$
So $\ket{\lambda}$ is an eigenket of the annihilation operator.

Now compute the modulus:
$$\begin{align}
\bra{\lambda} \lambda \rangle & = \bra{0} e^{-|\lambda|^{2}/2}e^{\lambda a} e^{-|\lambda|^{2}/2} e^{\lambda a^{\dagger}}\ket{0} \\
 & = e^{-|\lambda|^{2}} \bra{0} e^{\lambda ^{*} a} e^{\lambda a^{\dagger}}\ket{0} \\
 & = e^{-|\lambda|^{2}} \left( \sum_{k} \frac{1}{k!} \lambda ^{*k} \bra{0} a^k  \right) \left( \sum_{j} \frac{1}{j!} \lambda^j a^{\dagger j} \ket{0}  \right) \\
 & = e^{-|\lambda|^{2}}\sum_{j,k} \frac{1}{k!} \frac{1}{j!} \lambda ^{*k}\lambda ^j \sqrt{ k! } \sqrt{ j! } \bra{k} j\rangle \\
 & = e^{-|\lambda|^{2}}\sum_{k} \frac{1}{k!} (|\lambda|^{2})^{k} \\
 & = e^{-|\lambda|^{2}}e^{|\lambda|^{2}} \\
 & = 1  
\end{align}$$
Then $\ket{\lambda}$ is normalized.

## b.
