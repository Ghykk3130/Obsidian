# 1).
Know that the Hamiltonian is given by:
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
 \text{linear indepent} &  \implies \left\{\begin{aligned}
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

