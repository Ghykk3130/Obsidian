# 1.
## (a)
We have that:
$$\begin{align}
F & = - \frac{1}{\beta}\ln Z \\
 & = -kTN(\gamma+\ln(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })) \\
 & = -NJ-kTN\ln(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })
\end{align}$$
Set $h=0$, then we have:
$$F=-NJ-KTN\ln(1+e^{-2\gamma})$$
Then:
$$\begin{align}
S & = - \left( \frac{\partial F}{\partial T} \right)_{V,N} \\
 & = kN\ln(1+e^{-2\gamma})+kNT \frac{\frac{2J}{kT^{2}}e^{-2\gamma}}{1+e^{-2\gamma}}
\end{align}$$
Then:
$$\begin{align}
\left( \frac{\partial S}{\partial T} \right)_{V,N} & = kN \frac{\frac{2J}{kT^{2}}e^{-2\gamma}}{1+e^{-2\gamma}}- \frac{2NJ}{T}  \frac{e^{-2\gamma}}{1+e^{-2\gamma}}+ \frac{2NJ}{T} \frac{\frac{2J}{kT^{2}}e^{2\gamma}}{(e^{2\gamma}+1)^{2}} \\
 & = \frac{4NJ^{2}}{kT^{3}} \frac{1}{e^{2\gamma}+e^{-2\gamma}+2} \\
 & = \frac{4NJ^{2}}{kT^{3}} \frac{1}{2\cosh(2\gamma)+2} \\
 & = \frac{4NJ^{2}}{kT^{3}} \frac{1}{4\cosh ^{2}\gamma} \\
 & = \frac{NJ^{2}}{kT^{3}}\text{sech}^{2}\gamma
\end{align}$$
Then:
$$\begin{align}
C & = T\left( \frac{\partial S}{\partial T} \right)_{V,N} \\
 & = \frac{NJ^{2}}{kT^{2}}\text{sech}^{2}\gamma \\
 & = Nk\beta^{2}J^{2}\text{sech}^{2}(\beta J)
\end{align}$$
 Now compute the susceptibility. Know that:
 $$\begin{align}
M & = \frac{1}{Z}\sum_{\{ S_{i} \}}\mu \sum_{i}S_{i}\exp\left( -\beta\left( -J\sum_{<i,j>}S_{i}S_{j}-\mu h\sum_{i}S_{i} \right) \right) \\
 & = \frac{1}{Z}\mu\sum \frac{\partial}{\partial \alpha}\exp\left( -\beta\left( -J\sum S_{i}S_{j}-\mu h\sum S_{i} \right) \right) \\
 & = \frac{1}{Z} \mu\frac{\partial}{\partial \alpha}Z \\
 & = \mu \frac{\partial}{\partial \alpha}\ln Z
\end{align}$$
We have that:
$$\begin{align}
\ln Z & = N\gamma+ N\ln(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })
\end{align}$$
Since we are considering small $h$, thus small $\alpha$, and we are taking second derivatives, we expand to the second order:
$$\begin{align}
\ln(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} }) & \approx \ln\left( 1+ \frac{1}{2}\alpha^{2}+\sqrt{ \alpha^{2}+e^{-4\gamma} } \right) \\
 & \approx \frac{1}{2}\alpha^{2}+ \sqrt{ \alpha^{2}+e^{-4\gamma} }- \frac{1}{2}\left( \frac{1}{2}\alpha^{2}+ \sqrt{ \alpha^{2}+e^{-4\gamma} } \right)^{2} \\
 & \approx \frac{1}{2}\alpha^{2}+\sqrt{ \alpha^{2}+e^{-4\gamma} }- \frac{1}{2}(\alpha^{2}+e^{-4\gamma}) \\
 & = \sqrt{ \alpha^{2}+e^{-4\gamma} }- \frac{1 }{2} e^{-4\gamma} 
\end{align}$$
Then we have that:
$$\begin{align}
M & \approx \mu N \frac{1}{2} \frac{2\alpha}{\sqrt{ \alpha^{2}+e^{-4\gamma}  }} \\
 & = \mu N \alpha e^{2\gamma}(1+\alpha^{2}e^{4\gamma})^{-1/2} \\
 & \approx \mu N\alpha e^{2\gamma}\text{ when }\alpha \text{ is small}
\end{align}$$
Then:
$$\begin{align}
\chi & = (\frac{\partial M}{\partial h})|_{h=0} \\
 & \approx \mu Ne^{2\gamma}\beta \mu \\
 & = N\mu^{2}\beta e^{2\beta J}
\end{align}$$
## (b)

Here I used $10000$ spins, with two initial states, $10000$ spins up and $5000$ spins up. I used $h=0$. The first plot was made with $\frac{kT}{J}=2$. The second was made with $\frac{kT}{J}=4$.

I observe that they all converge to zero, confirming that the 1D Ising model is always in the paramagnetic phase. I noticed that, number of steps need before equilibrium is roughly inversely proportional to the temperature. For the bottom plot, The system forgets its initial ordered state relatively quickly. The magnetization of blue line converges to zero after approximately 50,000 iterations, and the magnetization of the orange line converges to zero after 25,000 iterations. For the top plot, When the temperature is halved, the relaxation process slows down significantly. After 100,000 iterations, the blue is only just beginning to converge, and after 50,000 iterations, the orange line is also just beginning to converge. 

![[Pasted image 20251207223951.png|center|500]]

![[Pasted image 20251207224012.png|center|500]]
## (c)

I chose the $10000$ spins state with all spins up as the initial state. The simulation demonstrates the peak in the middle, and the decaying afterwards, which is a main feature of the analytical solution. Overall, the simulation is in good agreement with the theoretical solution I found in part (a). 

![[Pasted image 20251208001652.png|center|500]]

## (d)

We know that
$$\begin{align}
\langle M \rangle & = \frac{1}{Z}\sum_{\{ S_{i} \}}\mu \sum_{i}S_{i}\exp\left( \beta J\sum_{<i,j>} S_{i}S_{j}+\alpha \sum_{i}S_{i} \right) \\
 & = \frac{1}{Z}\sum_{\{ S_{i} \}}\mu \frac{\partial}{\partial \alpha}\exp\left( \beta J\sum_{<i,j>}S_{i}S_{j}+\alpha \sum_{i}S_{i} \right) \\
 & = \mu \frac{\partial }{\partial \alpha }\ln Z
\end{align}$$
Similarly:
$$\begin{align}
\langle M^{2}\rangle & = \frac{1}{Z}\sum_{\{ S_{i} \}}\mu^{2}\left( \sum_{i}S_{i} \right)^{2}\exp\left( \beta J\sum_{<i,j>}S_{i}S_{j}+\alpha \sum_{i}S_{i} \right) \\
 & = \frac{1}{Z}\sum_{\{ S_{i} \}}\mu^{2} \frac{\partial^{2}}{\partial \alpha^{2}}\exp\left( \beta J\sum_{<i,j>}S_{i}S_{j}+\alpha \sum_{i}S_{i} \right) \\
 & = \mu^{2} \frac{1}{Z} \frac{\partial^{2}}{\partial \alpha^{2}}Z
\end{align}$$
We have:
$$\begin{align}
\chi & = \frac{\partial}{\partial h}\langle M \rangle \\
 & = \mu \frac{\partial}{\partial h} \frac{\partial}{\partial \alpha}\ln Z
\end{align}$$
We omit the symbol for evaluation at $h=0$ for simplicity. Since the only $h$ dependence comes from $\alpha$, we have:
$$\begin{align}
\chi & = \mu \frac{\partial \alpha}{\partial h} \frac{\partial^{2}}{\partial \alpha^{2}}\ln Z \\
 & = \mu^{2}\beta \frac{\partial^{2}}{\partial \alpha^{2}}\ln Z \\
 & = \mu^{2}\beta\left( - \frac{1}{Z^{2}}\left( \frac{\partial Z}{\partial \alpha} \right)^{2}+ \frac{1}{Z} \frac{\partial^{2}}{\partial \alpha^{2}}Z \right)
\end{align}$$
Observe that:
$$\begin{align}
\beta(\langle M^{2}\rangle-\langle M\rangle^{2}) & = \beta \mu^{2}\left( \frac{1}{Z} \frac{\partial^{2}}{\partial \alpha^{2}}Z-\left( \frac{\partial}{\partial \alpha}\ln Z \right)^{2} \right)  \\
 & = \beta \mu^{2}\left(  \frac{1}{Z} \frac{\partial^{2}}{\partial \alpha^{2}}Z-- \frac{1}{Z^{2}}\left( \frac{\partial Z}{\partial \alpha} \right)^{2} \right)
\end{align}$$
So $\chi=\beta(\langle M^{2}\rangle-\langle M \rangle^{2})$

## (e)

For this simulation, I still used 10000 spins with all spins up as the initial state. (although the initial state is not important since we will reach equilibrium when start taking the data points.)

![[Pasted image 20251208034210.png|center|500]]


Here is a table of other calculated properties from my Python for these data points. Note that the quantities are all measured in their reduced forms.

![[Pasted image 20251208034257.png|center|500]]

# 2.
## (a)
We know that:
$$Z=Tr(M^N)$$
Now study:
$$\begin{align}
\sum_{s_{1}}\dots \sum_{s_{N}}s_{k}M_{s_{1}s_{2}}\dots M_{s_{N}s_{1}} & = \sum_{s_{1}}\dots \sum_{s_{N}}M_{s_{1}s_{2}}\dots M_{s_{k-1}s_{k}}s_{k}M_{s_{k}s_{k+1}}\dots M_{s_{N}s_{1}} \\
 & = \sum_{s_{1}}\dots \sum_{s_{N}}M_{s_{1}s_{2}}\dots \sum_{s_{k}^{'}} M_{s_{k-1}s_{k} }\delta_{s_{k}s_{k}^{'}}s_{k}M_{s_{k}^{'}s_{k+1}}\dots M_{s_{N}s_{1}}
\end{align}$$
So if I let:
$$S_{s_{k}s_{k}^{'}}=s_{k}\delta_{s_{k}s_{k}^{'}},\text{ or more explicitly }S=\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}$$
Then the sum can be rewritten as:
$$\begin{align}
\sum_{s_{1}}\dots \sum_{s_{N}}s_{k}M_{s_{1}s_{2}}\dots M_{s_{N}s_{1}}  & = Tr(M^{k-1}SM^{N-k+1})=Tr(SM^N)
\end{align}$$
So we have:
$$\langle s_{k}\rangle= \frac{Tr(SM^N)}{Tr(M^N)}$$
Know that:
$$M=\begin{pmatrix}
e^{\alpha+\gamma} & e^{-\gamma} \\
e^{-\gamma} & e^{-\alpha+\gamma}
\end{pmatrix} $$
Solve for the eigenvalues:
$$\begin{vmatrix}
e^{\alpha +\gamma}-\lambda & e^{-\gamma} \\
e^{-\gamma} & e^{-\alpha+\gamma}-\lambda 
\end{vmatrix}=0\implies \lambda_{1,2}=e^{\gamma}(\cosh \alpha\pm \sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })$$
For $N\rightarrow \infty$, we only care about $\lambda_{1}=e^{\gamma}(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })$. We can find the corresponding eigenvector:
$$\ket{v_{1}} = \frac{1}{C_{1}}\begin{pmatrix}
1 \\
B_{1}
\end{pmatrix}\text{ where }B_{1}=e^{2\gamma}(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })-e^{\alpha+2\gamma},\ C_{1}^{2}= 1^{2}+B^{2}$$
$$\ket{v_{2}} =\frac{1}{C_{2}}\begin{pmatrix}
1  \\
B_{2}
\end{pmatrix}\text{ where }B_{2}=e^{2\gamma}(\cosh \alpha-\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })-e^{\alpha+2\gamma},\ C_{2}^{2}=1^{2}+B_{2}^{2}$$

Then we can compute, under $N\rightarrow \infty$, that:
$$\begin{align}
SM^N & \approx S \lambda_{1}^N\ket{v_{1}} \bra{v_{1}} 
\end{align}$$
Then:
$$\begin{align}
Tr(SM^N) & \approx Tr(\lambda_{1}^NS\ket{v_{1}} \bra{v_{1}} ) \\
\end{align}$$
If we expand under the $\ket{v_{1}}$ basis, we obtain:
$$Tr(SM^N)= \lambda^N\bra{v_{1}} S \ket{v_{1}} =\lambda_{1}^N \frac{1-B_{1}^{2}}{1+B_{1}^{2}}$$

Similarly, we can find:
$$\begin{align}
Tr(M^N) & \approx Tr(\lambda^N\ket{v_{1}} \bra{v_{1}} ) \\
 & = \lambda_{1}^N
\end{align}$$
This is because $\ket{v_{1}}\bra{v_{1}}$ is just a projection matrix, it must be equivalent to the identity operator under some basis. Then:
$$\begin{align}
\langle s_{k}\rangle  & = \frac{1-B_{1}^{2}}{1+B_{1}^{2}} , \text{ where }B_{1}=e^{2\gamma}(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })-e^{\alpha+2\gamma}
\end{align}$$
Notice that at $h=0$, we have that $\alpha=0$. Then $B_{1}=1$. So:
$$\langle s_{k}\rangle=0$$

## (b)

I have:
$$\begin{align}
\langle s_{l}s_{k}\rangle & = \frac{1}{Z}\sum_{s_{1}}\dots \sum_{s_{N}} s_{l}s_{k}M_{s_{1}s_{2}}\dots M_{s_{N}s_{1}}
\end{align}$$
WLOG, assume that $l<k$. Then:
$$\begin{align}
\sum_{s_{1}}\dots \sum_{s_{N}}s_{l}s_{k}M_{s_{1}s_{2}}\dots M_{s_{N}s_{1}} & = \sum_{s_{1}}\dots \sum_{s_{N}}M_{s_{1}s_{2}}\dots M_{s_{l-1}s_{l}}s_{l}M_{s_{l}s_{l+1} }\dots M_{s_{k-1},s_{k}}s_{k}M_{s_{k},s_{k+1}}\dots M_{s_{N}s_{1}} \\
 & = Tr(M^{l-1}SM^{k-l}SM^{N-k+1})
\end{align}$$
Know that under $N\rightarrow \infty$, only the larger eigenvalue is significant. So:
$$\begin{align}
Tr(M^{l-1}SM^{k-l}SM^{N-k-1}) & \approx Tr((\lambda_{1}^{l-1}\ket{v_{1}} \bra{v_{1}} +\lambda_{2}^{l-1}\ket{v_{2}} \bra{v_{2}}  )S(\lambda_{1}^{k-l}\ket{v_{1}} \bra{v_{1}} +\lambda_{2}^{k-1}\ket{v_{2}} \bra{v_{2}}  )S\lambda_{1}^{N-k-1}\ket{v_{1}} \bra{v_{1}}  ) \\
 & = \lambda_{1}^N\bra{v_{1}} S\ket{v_{1}} ^{2}+\lambda_{1}^{N-k+l}\lambda_{2}^{k-l}\bra{v_{1}} S\ket{v_{2}} ^{2}
\end{align}$$
We already computed that:
$$\bra{v_{1}} S \ket{v_{1}} = \frac{1-B_{1}^{2}}{1+B_{1}^{2}}$$
We can also compute:
$$\begin{align}
\bra{v_{1}} S\ket{v_{2}}  & = \begin{pmatrix}
1 & B_{1} 
\end{pmatrix}\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}\begin{pmatrix}
1 \\
B_{2}
\end{pmatrix} \frac{1}{C_{1}C_{2}} \\
 & = \frac{1-B_{1}B_{2}}{C_{1}C_{2}}
\end{align}$$

Again, we have:
$$Z=Tr(M^N)=\lambda_{1}^N$$
Then:
$$\langle s_{l}s_{k}\rangle=\left( \frac{1-B_{1}^{2}}{1+B_{1}^{2}} \right)^{2}+ \left( \frac{\lambda_{2}}{\lambda_{1}} \right)^{k-l}\left(  \frac{1-B_{1}B_{2}}{C_{1}C_{2}} \right)^{2} $$
Therefore:
$$\begin{align}
c(l,k) & = \left( \frac{1-B^{2}}{1+B^{2}} \right)^{2}+\left(  \frac{\lambda_{2}}{\lambda_{1}} \right)^{k-l}\left( \frac{1-B_{1}B_{2}}{C_{1}C_{2}} \right)^{2}-\left( \frac{1-B^{2}}{1+B^{2}} \right)^{2} \\
 & =\left(  \frac{\lambda_{2}}{\lambda_{1}} \right)^{k-l}\left( \frac{1-B_{1}B_{2}}{C_{1}C_{2}} \right)^{2} \\
  \\ & = \left( \frac{\lambda_{2}}{\lambda_{1}} \right)^{k-l} \frac{1+B_{1}^{2}B_{2}^{2}-2B_{1}B_{2}}{1+B_{1}^{2}B_{2}^{2}+B_{1}^{2}+B_{2}^{2}} \\
\text{ where } & B_{1}=e^{2\gamma}(\cosh \alpha+\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })-e^{\alpha+2\gamma},\ B_{2}=e^{2\gamma}(\cosh \alpha-\sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })-e^{\alpha+2\gamma} \\
 & \lambda_{1,2}=e^{\gamma}(\cosh \alpha\pm \sqrt{ \sinh ^{2}\alpha+e^{-4\gamma} })
\end{align}$$
Notice that at $h=0$, we have that:
$$B_{1}=1,B_{2}=-1,\lambda_{1,2}=e^{\gamma}\pm e^{-\gamma}$$
So in this case, we have:
$$c(l,k)=\left( \frac{\lambda_{2}}{\lambda_{1}} \right)^{k-l}=\tanh^{k-l} \gamma$$
Similarly, if $l<k$, we have that:
$$c(l,k)=\tanh^{l-k}\gamma$$
If $l=k$, we have:
$$\begin{align}
\langle s_{k}^{2}\rangle & = \frac{1}{Z}\sum_{s_{1}}\dots \sum_{s_{N}}s_{k}^{2}M_{s_{1}s_{2} }\dots M_{s_{N}s_{1}} \\
 & = \frac{Tr(M^{k-1}S^{2}M^{N-k+1})}{Tr(M^N)} \\
 & = \frac{Tr(S^{2}M^N)}{Tr(M^N)}
\end{align}$$
Under $N\rightarrow \infty$, we have that:
$$\begin{align}
Tr(S^{2}M^N) & \approx Tr(S^{2}\lambda_{1}^N\ket{v_{1}} \bra{v_{1}}   ) \\
 & = \lambda_{1}^N \bra{v_{1}} S^{2}\ket{v_{1}}  \\
 & = \lambda_{1}^N\bra{v_{1}} v_{1}\rangle \\
 & = \lambda_{1}^N
\end{align}$$
Then:
$$\langle s_{k}^{2}\rangle= \frac{\lambda_{1}^N}{\lambda_{1}^N}=1$$
So:
$$\langle s_{k}^{2}\rangle-\langle s_{k}\rangle^{2}=1-0=1$$

If $k<l$, similarly we have:
$$c(l,k)=\tanh^{k-l}\gamma$$
So in summary, we have:
$$c(l,k)= \tanh^{|l-k|}\gamma $$
## (c)

Here I let $k-l=r$, and plot two example curves for $r=1,2$. For each $r$ I used the average of the correlation lengths between all spins as the y axis. More specifically, I used $\frac{1}{N}\sum_{i}(\langle s_{i}s_{i+r}\rangle-\langle s_{i}\rangle \langle s_{i+r}\rangle)$ instead of $\langle s_{i}s_{i+r}\rangle-\langle s_{i}\rangle\langle s_{i+r}\rangle$ for some specific $i$. I used 10000 spins. Note that the higher the temperature is, the lower the correlation will be. The samples agrees highly with the theoretical curves, because I used very large numbers of iteration steps, and also the average correlation lengths.

![[Pasted image 20251208061836.png|center|500]]

I also plotted the simulation results without averaging. I took $i=0$ in this case. Note that the residuals are significantly larger in this case.

![[Pasted image 20251208135129.png|center|500]]

Note that the problem asks us to plot the correlation length. It is not clear whether the correlation length and the correlation function are the same thing in this problem. I would assume that they are different. The correlation length $\xi$ is defined such that:
$$c(l,k)=\exp\left( - \frac{|l-k|}{\xi} \right)$$
So we have:
$$\begin{align}
c(l,k) & = \tanh^{|l-k|}\gamma \\
 & = \exp(|l-k|\ln \tanh \gamma)
\end{align}$$
So:
$$\xi= - \frac{1}{\ln \tanh \gamma}$$
For each temperature, we used $|l-k|=1,\dots,8$ to calculate a set of values for $c(l,k)$, and then perform a fitting to extract out the parameter $\xi$. For this simulation, I also performed the averaging. The overall trend is in agreement with the theoretical prediction. At high temperatures, there are some fluctuations. This is because at high temperatures, the correlation length is close to zero. Then the fluctuation in the simulation would be significant when we performed the fitting, thus leading to differences. This difference even gets more significant after taking the log. 

![[Pasted image 20251208170001.png|center|500]]



# 3.
## (a)

I choose the initial condition that $x(0)=1,v(0)=0$. It's easy to compute the analytic solution:
$$x(t)=\cos(t)$$
Now I implement the algorithm with $\text{stepsize}=0.1$. Then I have:

![[Pasted image 20251208045237.png|center|500]]

I noticed that the amplitude of the oscillation grows for our numerical solution. This implies a violation of conservation of energy, and therefore is physically impossible.

## (b)

Here again I chose the initial condition that $x(0)=1,\dot{x}(0)=0$. Let $\text{stepsize}=0.1$.Then I obtain:

![[Pasted image 20251208045634.png|center|500]]

I noticed that the  the numerical solution follows closely with the analytic solution. In particular, the problem of diverging amplitude is solved. This is because the dynamics of this algorithm respect the property of the phase space.

## (c)
### (i)

Here I set the simulation steps to $200000$, and record the energy every $100$ steps. I made a finer integration with a step size of $0.001$. This is because the Lennard-Jones potential is extremely sharp. I'll have to use a small step size to account for the sudden changes caused by this sharp potential.  I used $\frac{\text{max energy}-\text{min energy}}{\text{mean energy}}$ to calculate the energy drift.

![[Pasted image 20251208213143.png|center|500]]

I observe that the energy is almost conserved. This confirms the idea that the Verlet method is symplectic.

## (ii)

Note that this is a 2D system. We have:
$$H=\sum_{} \frac{p_{ix}^{2}}{2m}+\sum \frac{p_{iy}^{2}}{2m}$$
So there are $2N$ thermodynamic degrees of freedom. So by equipartition theorem, we have that:
$$E=NkT\implies \frac{N}{2}m \langle v^{2}\rangle=NkT\implies  T= \frac{m\langle v^{2}\rangle}{2k}$$
Note that in 2D the Maxwell-Boltzmann distribution is:
$$\rho(v)=\frac{mv}{kT}\exp\left( - \frac{mv^{2}}{2kT} \right)$$

![[Pasted image 20251208220956.png|center|500]]

The simulation is in good agreement with the theoretical prediction. Note that samples accumulate around the peak of the distribution. The theoretical Maxwell-Boltzmann curve assumes a canonical ensemble, and our simulation operates in the microcanonical ensemble, where the total energy is strictly conserved.

With such a small number of particles, the conservation of energy imposes a cutoff on the maximum kinetic energy any single particle can possess. Because the high-velocity tail is physically impossible in our simulation,  the missing probability mass are shifted to the center. In the thermodynamic limit, the relative fluctuation would vanish, and the simulation, which is based on microcanonical ensemble, should converge to the theoretical distribution.

To confirm this idea, I increase the number of particles to 100. The simulation looks very similar to the theoretical prediction. This is in agreement with our argument above.

![[Pasted image 20251208222816.png|center|500]]







