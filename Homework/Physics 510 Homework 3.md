
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
