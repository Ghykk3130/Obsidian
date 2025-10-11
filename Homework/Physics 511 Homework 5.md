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
$$S_{Hx}=A \exp\left(  i\frac{eB}{m}t \right)+B\exp\left( -i \frac{eB}{m}t \right)$$
We guess $A=B= \frac{S_{x}(0)}{2}$. Then we found out that this guess is consistent with the initial condition. 


# 2),

