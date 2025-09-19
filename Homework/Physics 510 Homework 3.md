
# 1.
Want to find $U=U(S,V)$. Know that:
$$p=-\left( \frac{\partial U}{\partial V} \right)_{S}$$
We get:
$$\begin{align}
 & U=3pV \\
\implies & U=-3\left( \frac{\partial U}{\partial V} \right)_{S}V \\
\implies & \frac{dU}{U}=- \frac{1}{3} \frac{dV}{V} \\
\implies & \ln U= - \frac{1}{3}\ln V+\text{const.} \\
\implies  & U=a(S)V^{-1/3}\text{ for some a(S)}
\end{align}$$
We also know that:
$$T=\left( \frac{\partial U}{\partial S} \right)_{V}$$
Then we have:
$$\begin{align}
 & p=\sigma T^{4}   \\
\implies & - \left(  \frac{\partial U}{\partial V} \right)_{S}=\sigma\left( \frac{\partial U}{\partial S} \right)_{V}^{4} \\
\implies & \left(  -\frac{1}{\sigma} \frac{\partial U}{\partial V} \right)^{1/4}=\frac{\partial U}{\partial S}  \\
\implies & \left( \frac{a}{3\sigma} V^{-4/3} \right)^{1/4}= \frac{\partial a}{\partial S}V^{-1/3} \\
\implies & a^{-1/4}da= \left(  \frac{1}{3\sigma} \right)^{1/4}dS \\
\implies &  \frac{4}{3}a^{3/4}=\left(   \frac{1}{3\sigma} \right)^{1/4}S+\text{const.} \\
\implies & a= \left( \left(   \frac{1}{3\sigma} \right)^{1/4} \frac{3}{4}S +\text{const.} \right)^{4/3}
\end{align}$$
From $p=\sigma T^{4}$, we know that $\sigma$ is intensive. $S$ is obviously extensive. Thus the constant has to be extensive. But since it is a constant for all photon gas systems, then it cannot change as you double the size of the photon gas system. Therefore the constant is forced to be zero.

Then:
$$\begin{align}
 a(S) & =\left( - \frac{1}{3\sigma} \right)^{1/3}\left(  \frac{3}{4} \right)^{4/3}S^{4/3} \\
 & =\left(  \frac{27}{256} \frac{1}{\sigma} \right)^{1/3}S^{4/3} \\
\implies U & =\left(  \frac{27}{256} \frac{1}{\sigma} \right)^{1/3}S^{4/3}V^{-1/3}
\end{align}$$
# 2.
## a).
We know that:
$$dF=-SdT+Jdx$$
Then we have:
$$\begin{align}
 & \frac{\partial^{2}F}{\partial x\partial T}= \frac{\partial^{2}F}{\partial T\partial x} \\
 \implies & -\left( \frac{\partial S}{\partial x} \right)_{T}= \left( \frac{\partial J}{\partial T} \right)_{x}
\end{align}$$
We know that:
$$\left( \frac{\partial J}{\partial T} \right)_{x}=-b+cx$$
Therefore:
$$\left( \frac{\partial S}{\partial x} \right)_{T}=b-cx$$
## b).
We first express $C_{x}$ in terms of a thermodynamic potential:
$$\begin{align}
 & C_{x}  =T\left( \frac{\partial S}{\partial T} \right)_{x} \\
  & S=-\left( \frac{\partial F}{\partial T} \right)_{x} \\
\implies & C_{x}=-T \frac{\partial^{2}F}{\partial T^{2}}\end{align}$$
Therefore, I have:
$$A(x)=- \frac{\partial^{2}F}{\partial T^{2}}$$
Then:
$$\begin{align}
\frac{dA}{dx} & =- \frac{\partial}{\partial x} \frac{\partial^{2}}{\partial T^{2}}F \\
 & =- \frac{\partial^{2}}{\partial T^{2}} \frac{\partial}{\partial x}F \\
 & =- \frac{\partial^{2}}{\partial T^{2}}J \\
 & =- \frac{\partial}{\partial T}(-b+cx) \\
 & =0
\end{align}$$
## c).
From $a).$ we know that:
$$\begin{align}
 & \left( \frac{\partial S}{\partial x} \right)_{T} =b-cx \\
\implies & S= bx- \frac{c}{2}x^{2}+d(T)\text{ for some function }d(T) \\
\end{align}$$
From $b).$ we know that:
$$\begin{align}
 & \left( \frac{\partial S}{\partial T} \right)_{x}=A \\
\implies &  \frac{d}{dT}d=A \\
\implies & d(T)=AT+\text{const.}
\end{align}$$
Know that:
$$S(0,0)=S_{0}\implies d(0)=\text{const.}=S_{0}$$
Then:
$$S=bx- \frac{c}{2}x^{2}+AT+S_{0}$$

To solve for $S(T,J)$, I can calculate $x=x(T,J)$:
$$\begin{align}
 J & =ax-bT+cTx \\
 \implies & x= \frac{J+bT}{a+cT}
\end{align}$$
Then I have:
$$S(T,J)=b \frac{J+bT}{a+cT}- \frac{c}{2}\left( \frac{J+bT}{a+cT} \right)^{2}+AT+S_{0}$$
Then:
$$\begin{align}
\left( \frac{\partial S}{\partial T} \right)_{J} & =b \frac{ab-cJ}{(a+cT)^{2}}-c \frac{J+bT}{a+cT} \frac{ab-cJ}{(a+cT)^{2}}+A \\
\implies C_{J} & =T(b \frac{ab-cJ}{(a+cT)^{2}}-c \frac{J+bT}{a+cT} \frac{ab-cJ}{(a+cT)^{2}}+A)
\end{align}$$
## d).
No. Because $S=S(T,J)$ is not in the natural variable. The proper thermodynamic potential should be: $U(S,x)\implies S(U,x)$, instead of $S(T,J)$.

# 3.
## a).
Increasing the mass causes the band to length means:
$$\frac{1}{L}\left( \frac{\partial L}{\partial f} \right)_{T}>0$$
With a fixed mass, increasing the temperature causes the length to shrink means:
$$\frac{1}{L}\left( \frac{\partial L}{\partial T} \right)_{f}<0$$
## b).
Know that:
$$\begin{align}
\left( \frac{\partial f}{\partial T} \right)_{L} & =- \frac{(\partial L / \partial f )_{T} }{(\partial L / \partial T)_{f}}=- \frac{ \frac{1}{L} \frac{\partial L}{\partial f} }{ \frac{1}{L} \frac{\partial L}{\partial T} }>0
\end{align}$$
So I would expect the force to increase as I increase the temperature.

## c).
I have:
$$dU=TdS+fdL\implies dF=-sdT+fdL$$
Then I have:
$$\frac{\partial^{2}F}{\partial T\partial L}=\frac{\partial^{2}F}{\partial L\partial T}\implies\left( \frac{\partial f}{\partial T} \right)_{L}= - \left(  \frac{\partial S}{\partial L} \right)_{T}$$
Therefore:
$$\begin{align}
\left( \frac{\partial S}{\partial L} \right)_{T}=- \left( \frac{\partial f}{\partial T} \right)_{L}<0
\end{align}$$
If I increase the length, the entropy would decrease.
## d).
It suffices to determine the sign of $\left( \frac{\partial T}{\partial L} \right)_{S}$. I have:
$$\begin{align}
\left( \frac{\partial T}{\partial L} \right)_{S} & =- \frac{(\partial S / \partial L)_{T}}{(\partial S / \partial T)_{L}}
\end{align}$$
Know that:
$$\begin{align}
\left( \frac{\partial S}{\partial T} \right)_{L} & =\frac{C_{L}}{T}>0
\end{align}$$
Also from c) I know :
$$\begin{align}
\left( \frac{\partial S}{\partial L} \right)_{T} & =-\left( \frac{\partial f}{\partial T} \right)_{L}<0
\end{align}$$
Then:
$$\left( \frac{\partial T}{\partial L} \right)_{S}>0$$
This means that the temperature would increase once I release the rubber band.
# 4.
## a).
$\sigma$ is neither extensive nor intensive. Because if I double the size of the system, the energy will double. But the multiplicative factor of $A$ is just $2^{2/3}$. This means the multiplicative factor of $\sigma$ is $2^{1/3}$. 

The unit of $\sigma$ is $\frac{[E]}{[L^{2}]}=J\cdot m^{-2}=kg\cdot s^{-2}$

## b).
The system has constant temperature. Since the volume of the droplet doesn't change, the work variable $V$ also holds constant. Therefore the Helmholtz free energy must be minimized in this situation.

## c).
Without any constraint, the system can be characterized by:
$$\begin{align}
 & \text{air pressure }=p \\
 & \text{volume of the droplet }=V \\
 & \text{temperature, entropy of the air, droplet, solid}=T_{a},S_{a},T_{d},S_{d},T_{s},S_{s} \\
 & \text{the suface areas and tension }=A_{sg},A_{lg},A_{sl},\sigma_{sg},\sigma_{lg},\sigma_{sl}\end{align}$$
 Then the differential of the Helmholtz free energy is:
 $$dF=-S_{a}dT_{a}-S_{d}dT_{d}-pdV_{d}-S_{s}dT_{s}+\sigma_{sg}dA_{sg}+\sigma_{lg}dA_{lg}+\sigma_{sl}dA_{sl}$$
 But now, since the droplet has constant volume, and temperature is fixed, we have:
$$dF=\sigma_{sg}dA_{sg}+\sigma_{lg}dA_{lg}+\sigma_{sl}dA_{sl}$$
## d).
