# 1.
We need:
$$\begin{align}
U & = \langle H \rangle \\
 & = \frac{\int_{\mathbb{R}^{N+1}} dxd^NyH\exp(-\beta H)}{\int_{\mathbb{R}^{N+1}}dxd^Ny\exp(-\beta H)} \\
 & = \frac{- \frac{\partial}{\partial \beta}\int dxd^Ny\exp(-\beta H)}{\int dxd^Ny\exp(-\beta H)} \\
 & = - \frac{\partial}{\partial \beta}\ln\left( \int dxd^Ny\exp(-\beta H) \right)
\end{align}$$
Now compute:
$$\begin{align}
\int dxd^Ny \exp(-\beta H) & = \int_{\mathbb{R}}dx\exp(-\beta c(x-x^{*})^{2})\int_{\mathbb{R}^{N} }d^Ny \exp(-\beta H_{I}) \\
 & = \frac{\sqrt{ \pi }}{\sqrt{ \beta c }}\int d^Ny\exp(-\beta H_{I})\end{align}
$$
Then:
$$\ln\left( \int dxd^Ny\exp(-\beta H) \right)= \frac{1}{2}\ln \pi- \frac{1}{2}\ln \beta- \frac{1}{2}\ln c+\ln\left( \int d^Ny\exp(-\beta H_{I}) \right)$$
Then:
$$\begin{align}
U & = \frac{1}{2} \frac{1}{\beta}- \frac{\partial}{\partial \beta}\ln\left( \int d^Ny\exp(-\beta H_{I}) \right) \\
 & = \frac{1}{2}kT+U_{I}\text{, where }U_{I}= - \frac{\partial}{\partial \beta}\ln\left( \int d^Ny\exp(-\beta H_{I}) \right)
\end{align}$$
# 2.
## (a)
To calculate the partition function, need to calculate:
$$\begin{align}
\int d^{3N}qd^{3N}p \sum_{\text{all permutations of }\{ S_{z}^i \}_{i}} \exp(-\beta H) & =\int d^{3N}qd^{3N}p \exp\left( -\beta \sum_{i} \frac{p_{i}^{2}}{2m} \right) \sum_{\text{all permutations of }\{ S_{z}^i \}_{i}}\exp\left(  \beta \mu B\sum_{i}S_{z}^i \right)
\end{align}$$
Here $i$ is the index for the ith particle. 

We find:
$$\begin{align}
\int d^{3N}qd^{3N}p\exp\left( -\beta \sum_{i} \frac{p_{i}^{2}}{2m} \right) & =\left( \int d^{3N}q \right) \int d^{3N}p\exp\left( -\beta \sum \frac{p_{i}^{2}}{2m} \right) \\
 & = L^{3N}\int d^{3N}p\exp\left( -\beta \sum \frac{p_{i}^{2}}{2m} \right)
\end{align}$$
We change the variables. Let the volume measure be rewritten:
$$d^{3N}p=dSdR$$
Set $R^{2}=\sum_{i}p_{i}^{2}$. Then:
$$\begin{align}
\int d^{3N}p\exp\left( -\beta \sum \frac{p_{i}^{2}}{2m} \right) & = \int_{0}^{\infty}dR \exp\left( - \frac{\beta}{2m}R^{2} \right)\int dS \\
 & = \int dR \exp\left( - \frac{\beta}{2m} R^{2}\right)S \\
 & = \int dR \exp\left( - \frac{\beta}{2m} R^{2}\right) \frac{2\pi^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)}R^{3N-1} \\
 & = \frac{2\pi^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)} \left(  \frac{2m}{\beta} \right)^{3N/2} \int dyy^{3N-1}\exp(-y^{2})\text{, where }y= \sqrt{ \frac{\beta}{2m} }R \\
 & = \frac{2\pi^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)}\left(  \frac{2m}{\beta} \right)^{3N/2} \frac{1}{2}\int dy^{2}(y^{2})^{3N/2-1} \exp(-y^{2}) \\
 & = \frac{\pi^{3N/2}}{\Gamma\left(  \frac{3N}{2} \right)}\left(  \frac{2m}{\beta} \right)^{3N/2}\Gamma\left(  \frac{3N}{2} \right) \\
 & = \left(  \frac{2\pi m}{\beta} \right)^{3N/2}
\end{align}$$
Now study:
$$\begin{align}
\sum_{\text{all permutations of }\{ S_{z}^i \}_{i}}\exp\left( \beta \mu B\sum_{i}S_{z}^i \right) & = \sum_{S_{z}^i\in \{ -1,0,1 \}}\exp(\beta \mu BS_{z}^i)\dots\sum_{S_{z}^i\in \{ -1,0,1 \}}\exp(\beta \mu BS_{z}^i) \\
 & = \left(\sum_{S_{z}^i\in \{ -1,0,1 \}}\exp(\beta \mu BS_{z}^i)\right)^{N} \\
 & = (\exp(\beta \mu B)+\exp(-\beta \mu B)+1)^N \\
 & = (2\cosh(\beta \mu B)+1)^N
\end{align}$$
Therefore:
$$\begin{align}
\int d^{3N}qd^{3N}p \sum_{\text{all permutations of }\{ S_{z}^i \}_{i}} \exp(-\beta H) & =L^{3N}\left(  \frac{2\pi m}{\beta} \right)^{3N/2}(2\cosh(\beta \mu B)+1)^N \\
 & =V^{N}\left(  \frac{2\pi m}{\beta} \right)^{3N/2}(2\cosh(\beta \mu B)+1)^N
\end{align}$$
Therefore, the partition function is:
$$\begin{align}
Z & = \frac{1}{N! h^{3N}}V^{N}\left(  \frac{2\pi m}{\beta} \right)^{3N/2}(2\cosh(\beta \mu B)+1)^N
\end{align}$$
## (b)
Choose a specific molecule. Consider the marginal distribution obtained from integration:
$$\begin{align}
Prob(\text{ the ith molecule is in state }S_{z}^i) & = \frac{1}{Z}\int \frac{d^{3N}qd^{3N}p}{N!h^{3N}}\sum_{\text{all permutations of }\{ S_{z}^i \}_{i}\text{ except for the chosen particle}} \exp(-\beta H) \\
 & = \frac{1}{Z} \frac{1}{N!h^{3N}}V^{N}\left(  \frac{2\pi m}{\beta} \right)^{3N/2}(2\cosh(\beta \mu B)+1)^{N-1} \exp(\beta \mu BS_{z}^i) \\
 & = \frac{\exp(\beta \mu BS_{z}^i)}{2\cosh(\beta \mu B)+1}
\end{align}$$
So:
$$\begin{align}
 & Prob(\text{ the ith molecule is in state }S_{z}^i=1)= \frac{\exp(\beta \mu B)}{2\cosh(\beta \mu B)+1} \\
 & Prob(\text{ the ith molecule is in state }S_{z}^i=0)= \frac{1}{2\cosh(\beta \mu B)+1} \\
 & Prob(\text{ the ith molecule is in state }S_{z}^i=-1)= \frac{\exp(-\beta \mu B)}{2\cosh(\beta \mu B)+1}
\end{align}$$
## (c)
We know that:
$$\begin{align}
\langle M \rangle & = \frac{1}{Z}\int \frac{d^{3N}qd^{3N}p }{N!h^{3h}}\exp\left( -\beta \sum_{i} \frac{p_{i}^{2}}{2m} \right)\sum_{\text{all permutations}}\exp\left( \beta \mu B\sum_{i} S_{z}^i \right)\mu \sum_{i}S_{z}^i \\
 & = \frac{1}{Z}\int \frac{d^{3N}qd^{3N}p }{N!h^{3h}}\exp\left( -\beta \sum_{i} \frac{p_{i}^{2}}{2m} \right) \sum_{\text{all permutations}} \frac{1}{\beta} \frac{\partial}{\partial B}\exp\left( \beta \mu B\sum S_{z}^i \right)  \\
 & = \frac{1}{Z} \frac{1}{\beta} \frac{\partial}{\partial B} \int \frac{d^{3N}qd^{3N}p }{N!h^{3h}}\exp\left( -\beta \sum_{i} \frac{p_{i}^{2}}{2m} \right) \sum_{\text{all permutations}}\exp\left( \beta \mu B\sum S_{z}^i \right) \\
 & = \frac{1}{Z} \frac{1}{\beta} \frac{\partial}{\partial B }Z \\
 & = \frac{1}{\beta} \frac{\partial}{\partial B}\ln Z
\end{align}$$
Then we have:
$$\begin{align}
\langle M \rangle & = N\mu \frac{2 \sinh(\beta \mu B)}{2\cosh(\beta \mu B)+1}
\end{align}$$

## (d)
First study the approximation:
$$\begin{align}
\frac{2\sinh x}{2\cosh x+1} & \approx \frac{2\left( x+ \frac{x^{3}}{3!}+ \frac{x^5}{5!} \right)}{2\left( 1+ \frac{x^{2}}{2!}+ \frac{x^4}{4!} \right)+1  } \\
 & = \frac{2}{3} \frac{x+ \frac{x^{3}}{3!}+ \frac{x^6}{6!} }{1+ \frac{2}{3}\left(  \frac{x^{2}}{2!}+ \frac{x^4}{4!} \right) } \\
 & \approx \frac{2}{3} \left( x+ \frac{x^{3}}{3!}+ \frac{x^6}{6!} \right)\left( 1- \frac{2}{3}\left(  \frac{x^{2}}{2!}+ \frac{x^4}{4!} \right)+ \frac{4}{9}\left(  \frac{x^{2}}{2!}+ \frac{x^4}{4!} \right)^{2} \right) \\
 & \approx \frac{2}{3}x
\end{align}$$
So at low field, I have:
$$\begin{align}
\langle M \rangle  & \approx N\mu \cdot \frac{2}{3} \beta \mu B
\end{align}$$
So the zero field susceptibility is:
$$\chi= \frac{2}{3}N\beta \mu^{2}= \frac{2}{3} \frac{N\mu^{2}}{kT}$$
# 3. 
## (a)
In general, a 2-dimensional Fourier series is given by:
$$\sum_{n=0}^{\infty}\sum_{m=0}^{\infty}\left( a_{nm}\sin\left(  \frac{n\pi x}{L} \right) \sin\left(  \frac{m \pi y }{L} \right)+b_{nm}\cos\left(  \frac{n\pi x}{L} \right)\cos\left(  \frac{m\pi y}{L} \right)+c_{nm} \sin\left(  \frac{n\pi x}{L} \right)\cos\left(  \frac{m\pi y}{L} \right) +d_{nm}\cos\left(  \frac{n\pi x}{L} \right)\sin \left(  \frac{m\pi y}{L} \right)\right)$$
Now since the boundary condition requires that $h(\partial[0,L]^{2},t)=0$, I the spatial part of $h$ must be given by:
$$\sum_{n,m} a_{nm} \sin\left(  \frac{n\pi x}{L} \right)\sin\left(  \frac{m\pi y}{L} \right)$$
Let the time dependence of $h$ be $g(t)$. Then:
$$h(x,y,t)=g(t)\sum_{n,m} a_{nm}\sin\left(  \frac{n\pi x}{L} \right)\sin\left(  \frac{m\pi y}{L} \right)$$
## (b)
It's obvious that by orthogonality, I have:
$$\begin{align}
\int dxdyh^{2} & = g^{2}(t)\int dxdy \sum_{n,m} a_{nm}^{2}\sin ^{2}\left(  \frac{n\pi x}{L} \right)\sin ^{2}\left(  \frac{m\pi y}{L} \right) \\
 & = g^{2}(t)\left( \frac{L}{2} \right)^{2}\sum_{n,m}a_{nm}^{2}
\end{align}$$
So:
$$\overline{h^{2}}= \frac{1}{L^{2}}\int dxdyh^{2}= \frac{1}{4}g^{2}(t)\sum_{n,m=1}^{\infty}a_{nm}^{2}$$
## (c)
We know that:
$$\nabla^{2}h=g(t)\sum_{n,m} ( n^{2}+m^{2}) a_{nm}\sin\left(  \frac{n\pi x}{L} \right)\sin\left(  \frac{m\pi y}{L} \right) $$
Then, I have:
$$\begin{align}
H & =\int dxdy \kappa(\nabla^{2}h)^{2} \\
 & = \int dxdy \kappa g^{2}(t)\left(  \frac{\pi}{L} \right)^4 \left( \sum_{n,m} ( n^{2}+m^{2}) a_{nm}\sin\left(  \frac{n\pi x}{L} \right)\sin\left(  \frac{m\pi y}{L} \right) \right)^{2}
\end{align}$$
By orthogonality, I obtain:
$$\begin{align}
H & =\int dxdy\kappa g^{2}(t)\left(  \frac{\pi}{L} \right)^4 \sum_{n,m}(n^{2}+m^{2})^{2}  a_{nm}^{2}\sin ^{2}\left(  \frac{n\pi x}{L} \right)\sin ^{2}\left(  \frac{m\pi y}{L} \right) \\
 & =\kappa g^{2}(t)\left(  \frac{\pi}{L} \right)^4  \sum_{n,m}(n^{2}+m^{2})^{2} \cdot\left(  \frac{L}{2} \right)^{2}a_{nm}^{2} \\
 & = \kappa g^{2}(t) \frac{\pi^4}{4L^{2}}\sum_{n,m=1}^{\infty}(n^{2}+m^{2})^{2}a_{nm}^{2}
\end{align}$$
## (d)
By $1.$ I know that:
$$\begin{align}
\left\langle \kappa g^{2}(t) \frac{\pi^4}{4L^{2}}(n^{2}+m^{2})^{2}a_{nm}^{2} \right\rangle= \frac{1}{2}kT
\end{align}$$
Then:
$$\langle a_{nm}^{2} \rangle= 2 (n^{2}+m^{2})^{-2} \frac{kTL^{2}}{\kappa g^{2}(t)\pi^4}$$
Therefore:
$$\begin{align}
\langle \overline{h^{2}}\rangle & = \frac{1}{4}g^{2}(t)\sum_{n,m}\langle a_{nm}^{2}\rangle \\
 & = \frac{1}{2} \frac{kTL^{2}}{\kappa \pi^4}\sum_{n,m=1}^{\infty} \frac{1}{(n^{2}+m^{2})^{2}}
\end{align}$$
## (e)
From $(d)$, I know that:
$$\langle E \rangle= \kappa g^{2}(t) \frac{\pi^4}{4L^{2}}\sum_{n,m} (n^{2}+m^{2})^{2}\langle a_{nm}^{2}\rangle= \sum_{n,m} \frac{1}{2}kT$$
However, this number diverges. We resolve this by claiming that the sum can not be taken to infinity. Imagine there is some periodic lattice structure inside the membrane. Then only the wavevectors inside "the first Brillouin zone" are taken in the sum. If the 2-d unit cell has lengths $a \times b$, then must require:
$$ 0\leq \frac{n\pi}{L} \leq \frac{2\pi}{a}, 0 \leq \frac{m\pi}{L} \leq \frac{2\pi}{b} $$
Therefore we must have some upper bounds on $n,m$, so that the short wavelength modes cannot exist in the membrane.

# 4.
## (a)
$\epsilon_{0}$ cannot be removed, since only part of the particles in the system is in contact with the surface. If all particles have $\epsilon_{0}$ in their Hamiltonians, then $\epsilon_{0}$ can be removed because this is equivalent to shift the total energy by a constant. Then the Boltzmann factor just factors out a constant as a result, which would be canceled out because probabilities are calculated by ratios. But here only part of the particles have this $\epsilon_{0}$ in their Hamiltonians. Then we cannot factor out any constant for the entire system of the surface plus the gas.

## (b)
If the number of particles on the surface is $N$, then the partition function is given by:
$$\begin{align}
Z & = \frac{1}{N!h^{2N}} \int d^{2N}qd^{2N}p \exp\left( - \beta \sum_{i} \frac{p_{i}^{2}}{2m_{e}}  \right) \exp(N\beta\epsilon_{0}) \\
\end{align}$$
Know that:
$$\begin{align}
\int d^{2N}q & = \left( \int_{0}^Ldq_{1} \right)\dots\left( \int_{0}^Ldq_{2N} \right) \\
 & =L^{2N}
\end{align}$$
Also:
$$\begin{align}
\int d^{2N}p\exp\left( -\beta \sum \frac{p_{i}^{2}}{2m_{e}}  \right) & =\left( \int_{\mathbb{R}} dp_{1}\exp\left( - \beta\frac{p_{1}^{2}}{2m_{e}} \right)  \right)\dots\left( \int_{\mathbb{R}} dp_{2N}\exp\left( -\beta \frac{p_{2N}^{2}}{2m_{e}} \right)  \right) \\
 & = \left(  \sqrt{ \frac{2m_{e}}{\beta} } \sqrt{ \pi } \right)^{2N} \\
 & = \left(  \frac{2m_{e}\pi}{\beta} \right)^N
\end{align}$$
Then:
$$Z= \frac{1}{N!h^{2N}}L^{2N}e^{N\beta\epsilon_{0}}\left(  \frac{2m_{e}\pi}{\beta} \right)^N$$
Then I have:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
\end{align}$$
Therefore:
$$\begin{align}
\mu & = \left(  \frac{\partial F}{\partial N} \right)_{T,V} \\
 & = - \frac{1}{\beta} \frac{\partial}{\partial N}\ln Z \\
 & = - \frac{1}{\beta} \frac{\partial}{\partial N}\left( N\ln\left(  \frac{2m_{e}\pi L^{2}}{\beta h^{2}} \right) +N\beta\epsilon_{0}-N\ln N+N\right) \\
 & = - \frac{1}{\beta} \ln\left(  \frac{2m_{e}\pi L^{2}}{\beta h^{2}} \right)+ \frac{1}{\beta} \ln N- \epsilon_{0} \\
 & = -\frac{1}{\beta}\ln\left(  \frac{2m_{e}\pi L^{2}}{\beta h^{2}N} \right)-\epsilon_{0}
\end{align}$$
## (c)
First calculate the partition function of the gas. We fist find:
$$\begin{align}
Z_{g} & = \int \frac{d^{3n}qd^{3n}p }{n! h^{3n}} \exp\left( -\beta \sum_{j} \frac{p_{i}^{2}}{2m} \right) \\
 & = V^n \frac{1}{n!h^{3n}} \left( \int dp_{i} \exp\left( -\beta \frac{p_{i}^{2}}{2m} \right) \right)^{3n} \\
 & = V^n \frac{1}{h^{3n}n!}  \left(  \frac{2\pi m}{\beta} \right)^{ \frac{3}{2}n}
\end{align}$$
where $n$ is the number of particles in the gas. Now fix the number of particles $N$ on the surface. And each of such state has probability proportional to:
$$ \int \frac{d^{2N}qd^{2N}p}{h^{2N}N!} \exp\left(  - \beta \sum_{i} \frac{p_{i}^{2}}{2m_{e}} \right) \exp(\beta N\epsilon_{0})\int \frac{d^{n}qd^np}{h^{3n}n!} \exp\left( -\beta \sum_{j} \frac{p_{j}^{2}}{2m} \right)=Z(N)Z_{g}(n)$$
Now fix $n=M-N$. Then I have:
$$\begin{align}
\langle N \rangle & = \frac{\sum_{N}NZ(N)Z_{g}(M-N)}{\sum_{N}Z(N)Z_{g}(M-N)} 
\end{align}$$
Set $\mathscr{Z}:= \sum_{N}Z(N)Z_{g}(M-N)$. Observe that:
$$\sum_{N}NZ(N)Z_{g}(M-N)=\sum_{N} \frac{1}{\beta} \frac{\partial}{\partial\epsilon_{0}}(Z(N)Z(M-N))= \frac{1}{\beta} \frac{\partial}{\partial\epsilon_{0}} \sum Z(N)Z_{g}(M-N)= \frac{1}{\beta} \frac{\partial}{\partial\epsilon_{0}}\mathscr{Z}$$
So:
$$\langle N \rangle= \frac{1}{\beta} \frac{\partial}{\partial\epsilon_{0}}\ln \mathscr{Z}$$
No compute:
$$\begin{align}
\mathscr{Z} & = \sum_{N} \frac{L^{2N}}{N!h^{2N}}e^{N\beta\epsilon_{0}}\left(  \frac{2\pi m_{e}}{\beta} \right)^N \frac{V^{M-N}}{h^{3(M-N)}(M-N)!} \left(  \frac{2\pi m}{\beta} \right)^{\frac{3}{2}(M-N)} \\
 & = \frac{1}{M!}\sum \frac{M!}{N!(M-N)!} \left(  \frac{2\pi m_{e}}{\beta}\left(  \frac{L}{h} \right)^{2}e^{\beta\epsilon_{0}}  \right)^N\left(  \left(  \frac{2\pi m}{\beta} \right)^{3/2} \frac{V}{h^{3}} \right)^{M-N} \\
 & = \frac{1}{M!} \left(  \frac{2\pi m_{e}}{\beta}\left(  \frac{L}{h} \right)^{2}e^{\beta\epsilon_{0}}+ \left(  \frac{2\pi m}{\beta} \right)^{3/2} \frac{V}{h^{3}} \right)^M 
\end{align}$$
Therefore:
$$\begin{align}
\langle N \rangle & = \frac{1}{\beta} \frac{\partial}{\partial\epsilon_{0}} \left( M \ln\left(  \frac{2\pi m_{e}}{\beta}\left(  \frac{L}{h} \right)^{2} e^{\beta\epsilon_{0}}+ \left(  \frac{2\pi m}{\beta} \right)^{3/2} \frac{V}{h^{3}}\right) \right) \\
 & = M\frac{1}{\beta} \frac{2\pi m_{e}\left(  \frac{L}{h} \right)^{2}e^{\beta\epsilon_{0}}}{\frac{2\pi m_{e}}{\beta}\left(  \frac{L}{h} \right)^{2} e^{\beta\epsilon_{0}}+ \left(  \frac{2\pi m}{\beta} \right)^{3/2} \frac{V}{h^{3}}} \\
 & = M \frac{2\pi m_{e}\left(  \frac{L}{h} \right)^{2}e^{\beta\epsilon_{0}}}{2\pi m_{e}\left(  \frac{L}{h} \right)^{2}e^{\beta\epsilon_{0}}+ (2\pi m)^{3/2} \beta^{-1/2} \frac{V}{h^{3}}} \\
 & = M \frac{1}{1+ \sqrt{  \frac{2\pi m}{\beta} } \frac{m^{}V}{m_{e}hL^{2}e^{\beta\epsilon_{0}}}}
\end{align}$$




