# 1).
Let $e$ be the amount of charge carried by the spin-1/2 particle. Know that the Hamiltonian is given by:
$$\begin{align}
H_{H} & = - g \frac{e}{2m}\vec{S}_{H}\cdot \vec{B} \\
 & = - \frac{e}{m} S_{Hz}^{}B
\end{align}$$
Then the equations of motion are given by:
$$\frac{d}{dt}S_{Hj}= \frac{1}{i\hbar}\left[ S_{Hj}, - \frac{eB}{m}S_{Hz} \right]$$
Know that:
$$\begin{align}
[S_{Hi},S_{Hj}] & =[\mathscr{U}^{\dagger}S_{Si}\mathscr{U},\mathscr{U}^{\dagger}S_{Sj}\mathscr{U}] \\
 & = \mathscr{U}^{\dagger}[S_{Si},S_{Sj}]\mathscr{U} \\
 & = i\hbar\epsilon_{ijk}\mathscr{U}^{\dagger}S_{Sk}\mathscr{U} \\
 & = i\hbar\epsilon_{ijk}S_{Hk}
\end{align}$$
Therefore, we have:
$$\left\{
\begin{align}
 & \frac{d}{dt}S_{Hx} =  \frac{eB}{m}S_{Hy} \\
 & \frac{d}{dt}S_{Hy} = - \frac{eB}{m}S_{Hx} \\
 &  \frac{d}{dt}S_{Hz}= 0 
\end{align}\right.\tag{*}$$
Then obviously:
$$S_{Hz}= S_{z}(0)$$
For $S_{Hx}$, take the first derivative of the first equation of $(*)$, and substitute in the second equation of $(*)$. We get:
$$\frac{d^{2}}{dt^{2}}S_{Hx}+\left(  \frac{eB}{m} \right)^{2}S_{Hx}=0$$
Then we have:
$$S_{Hx}=A \exp\left(  i\frac{eB}{m}t \right)+B^{'}\exp\left( -i \frac{eB}{m}t \right)$$
Similarly, we also have:
$$S_{Hy}=C\exp\left( i \frac{eB}{m}t \right)+ D\exp\left( -i \frac{eB}{m}t \right)$$
The initial conditions are given by:
$$\begin{align}
 & S_{Hx}(0)=S_{x}(0)\implies A+B^{'}=S_{x}(0) \\
 & S_{Hy}(0)=S_{y}(0)\implies C+D=S_{y}(0) \\
\end{align}$$
There is also another constraint:
$$\begin{align}
\frac{d}{dt}S_{Hx}= \frac{eB}{m}S_{Hy} & \implies i \frac{eB}{m}A\exp\left( i \frac{eB}{m}t \right)- i \frac{eB}{m}B^{'}\exp\left( -i \frac{eB}{m}t \right)=  \frac{eB}{m} \left(C\exp\left(  i \frac{eB}{m}t \right)+D \exp\left( -i \frac{eB}{m}t \right)\right) \\
 \text{linearly indepent} &  \implies \left\{\begin{aligned}
 & i A=C \\
 & -i B^{'}=D
\end{aligned} \right.
\end{align}$$
Then I have:
$$\begin{align}
 & A = \frac{1}{2}(S_{x}(0)-iS_{y}(0)) \\
 & B^{'}= \frac{1}{2}(S_{x}(0)+i S_{y}(0)) \\
 & C= \frac{1}{2} (S_{y}(0)+iS_{x}(0)) \\
 & D= \frac{1}{2}(S_{y}(0)-iS_{x}(0))
\end{align}$$
Then substitute in to get:
$$\begin{align}
 & S_{Hx}= 2\mathrm{Re}\left( A\exp\left( i \frac{eB}{m}t \right) \right)= S_{x}(0)\cos \left(  \frac{eB}{m}t \right)+S_{y}(0)\sin\left(  \frac{eB}{m}t \right) \\
 & S_{Hy}= 2 \mathrm{Re}\left(  C\exp\left(  i \frac{eB}{m}t \right) \right)= S_{y}(0)\cos\left(  \frac{eB}{m}t \right)-S_{x}(0)\sin\left(  \frac{eB}{m}t \right)
\end{align}$$
# 2),

**Heisenberg's picture:**

We know that the equations of motion are given by:
$$\begin{align}
 & \frac{dx}{dt}= \frac{1}{i\hbar}[x, H]= \frac{1}{i\hbar}\left[ x, \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2} \right]  = \frac{p}{m} \\
 & \frac{dp}{dt}= \frac{1}{i\hbar}[p,H]= \frac{1}{i\hbar}\left[ p, \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2} \right]=-m\omega^{2}x
\end{align}$$
Then we differentiate twice to decouple:
$$\frac{d^{2}p}{dt^{2}}=-\omega^{2}p \implies p=Ae^{i\omega t}+Be^{-i\omega t}$$
I can also do the same thing to $x$ and get:
$$\frac{d^{2}x}{dt}= -\omega^{2}x \implies x=Ce^{i\omega t}+De^{-i\omega t}$$
Then the constraints are:
$$\begin{align}
 & A+B=p(0) \\
 & C+D=x(0) \\
 & \frac{dx}{dt}= \frac{p}{m}\implies i\omega Ce^{i\omega t}-i\omega De^{-i\omega t}= \frac{A}{m}e^{i\omega t}+ \frac{B}{m}e^{-i\omega t}\implies i\omega C= \frac{A}{m}, -i\omega D= \frac{B}{m}
\end{align}$$
Then I have:
$$\begin{align}
 & A= \frac{1}{2}(p(0)+ im\omega x(0)) \\
 & B= \frac{1}{2}(p(0)-im\omega x(0)) \\
 & C= \frac{1}{2}\left( x(0)- \frac{i}{m\omega}p(0) \right) \\
 & D= \frac{1}{2}\left( x(0)+ \frac{i}{m\omega}p(0) \right)
\end{align}$$
Then I have:
$$\begin{align}
 & p=2\mathrm{Re}(Ae^{i\omega et})= p(0)\cos(\omega t)-m\omega x(0)\sin(\omega t)  \\
 & x= 2 \mathrm{Re}( Ce^{i\omega t})=x(0)\cos(\omega t)+ \frac{p(0)}{m\omega}\sin(\omega t)
\end{align}$$
The general state vector would not evolve in Heisenberg's picture. 

**Schrodinger's picture:**

Know that the Hamiltonian is independent of time, so that:
$$\mathscr{U}(t,0)= \exp\left( - \frac{i}{\hbar}Ht \right)= \exp\left( - \frac{i}{\hbar}\left(  \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2} \right)t \right)$$
So any state ket $\ket{\psi,0}$ would evolve into:
$$\ket{\psi,t} = \exp\left( - \frac{i}{\hbar}\left(  \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2} \right)t \right)\ket{\psi,0} $$
More explicitly, if we know the eigenkets $\ket{a}$ of the Hamiltonian, $\ket{\psi,t}$ would be:
$$\begin{align}
\ket{\psi,t}  & = \mathscr{U}(t,0)\sum_{a} \ket{a}  \bra{a}  \psi,0\rangle  \\
 & = \sum_{a} \exp\left( - \frac{i}{\hbar}E_{a}t \right) \bra{a} \psi,0\rangle
\end{align}$$
That means that each ''component'' $\bra{a}\psi,0\rangle$ is evolved by the factor $\exp\left( - \frac{i}{\hbar}E_{a}t \right)$. However, in Schrodinger's picture, the observables don't evolve with time (except for some cases where the observable depends on time explicitly.)
# 3).
## i).
We compute:
$$\begin{align}
e^{ipl/\hbar}xe^{-ipl/\hbar} & = x+ \frac{il}{\hbar}[p,x]+ \frac{1}{2!}\left(  \frac{il}{\hbar} \right)^{2}[p,[p,x]]+ \dots \\
 & = x+ \frac{il}{\hbar}\cdot (-i\hbar) \\
 & = x+l
\end{align}$$
## ii).
We know that:
$$\begin{align}
\langle x(t)\rangle & =\bra{\psi} x(t) \ket{\psi} 
\end{align}$$
By $2).$ I know that:
$$x(t)= x(0)\cos ( \omega t)+ \frac{p(0)}{m\omega}\sin(\omega t)$$
Therefore:
$$\begin{align}
\langle x(t) \rangle & = \cos(\omega t)\bra{\psi} x(0)\ket{\psi} + \frac{\sin(\omega t)}{m\omega}\bra{\psi} p(0) \ket{\psi} 
\end{align}$$
We compute:
$$\begin{align}
\bra{\psi} x(0)\ket{\psi}  & = \bra{0} e^{ipl/\hbar}x(0) e^{-ipl/\hbar}\ket{0}  \\
 & = \bra{0} x(0) \ket{0} -l \\
 & = l
\end{align}$$
We also have:
$$\begin{align}
\bra{\psi} p(0)\ket{\psi}  & =\bra{\psi} e^{ipl/\hbar}p(0)e^{-ipl/\hbar}\ket{\psi}  \\
 & = \bra{\psi} p(0) \ket{\psi}  \\
 & = 0
\end{align}$$
Then we obtain:
$$\langle x(t) \rangle =l\cos(\omega t)$$
# 4).
We have:
$$\begin{align}
\sum_{a^{'}}|\bra{a^{''}} x \ket{a^{'}} |^{2}(E_{a^{'}}-E_{a^{''}}) & = \sum \bra{a^{''}} x \ket{a^{'}} \bra{a^{'}} x \ket{a^{''}} (E_{a^{'}}-E_{a^{''}}) \\
 & = \frac{1}{2} \sum \bra{a^{''}} x \ket{a^{'}} \bra{a^{'}} x\ket{a^{''}} (2E_{a^{'}}-E_{a^{''}}-E_{a^{''}}) \\
 & = \frac{1}{2}\left(\sum 2\bra{a^{''}} x \ket{a^{'}} \bra{a^{'}} Hx \ket{a^{''}} - E_{a^{''}} \bra{a^{''}} x^{2}\ket{a^{''}} -E_{a^{''}} \bra{a^{''}} x^{2}\ket{a^{''}}\right) \\
 & = \frac{1}{2}(2\bra{a^{''}}xHx\ket{a^{''}} -\bra{a^{''}} Hx^{2} \ket{a^{''}} - \bra{a^{''}} x^{2}H\ket{a^{''}}  ) \\
 & = \frac{1}{2} \bra{a^{''}} (2xHx-Hx^{2}-x^{2}H)\ket{a^{''}}  \\
 & = \frac{1}{2}\bra{a^{''}} [xH-Hx,x]\ket{a^{''}}  \\
 & = \frac{1}{2}\bra{a^{''}} [[x,H],x]\ket{a^{''}}    
\end{align}$$
Know that:
$$\begin{align}
[[x,H],x] & = \left[ \left[ x, \frac{p^{2}}{2m}  \right],x \right] \\
 & = \frac{i\hbar}{m}[p,x] \\
 & = \frac{\hbar^{2}}{m}
\end{align}$$
Then we have:
$$\sum_{a^{'}}|\bra{a^{''}} x \ket{a^{'}} |^{2}(E_{a^{'}}-E_{a^{''}})= \frac{\hbar^{2}}{2m}$$
# 5).
I have:
$$\begin{align}
\frac{d}{dt}\langle A \rangle & = \frac{d}{dt} \bra{\psi} \mathscr{U}^{\dagger}A\mathscr{U}\ket{\psi}  \\
 & = \bra{\psi} \frac{d}{dt}A_{H} \ket{\psi}  \\
 & = \frac{1}{i\hbar}\bra{\psi} [A_{H},H] \ket{\psi}  \\
 & = \frac{1}{i\hbar}\bra{\psi} [\mathscr{U}^{\dagger}A\mathscr{U},H]\ket{\psi}  \\
 & = \frac{1}{i\hbar}  \bra{\psi} \mathscr{U}^{\dagger}[A,H]\mathscr{U}\ket{\psi} \\
 & = \frac{1}{i\hbar} \langle[A,H]\rangle 
\end{align}$$
Then we have:
$$|\langle [A,H]\rangle|= \hbar | \frac{d}{dt}\langle A \rangle |$$
Therefore:
$$\begin{align}
 & \Delta E\Delta A \geq \frac{1}{2}|\langle [A,H]\rangle|
 \\
\implies & \frac{\Delta E\Delta A}{| d\langle A\rangle / dt |}  \geq \frac{\hbar}{2 }\end{align}$$
This means that the amount of time for the mean of an observable to change by one standard deviation times the standard deviation of the energy is bounded below. That means that if the energy uncertainty is large given some initial state, then the mean of the observable changes faster. If the initial state is an energy eigenstate, then the mean of the observable doesn't move. 

