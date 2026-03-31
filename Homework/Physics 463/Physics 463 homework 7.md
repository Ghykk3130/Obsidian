# 1.
## (a)

We know that:
$$\begin{align}
\frac{p^{2}}{2m} (e^{ikx}u_{k}(x) ) & = - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}(e^{ikx}u_{k}) \\
 & = - \frac{\hbar^{2}}{2m} \frac{d}{dx}\left(  ike^{ikx}u_{k}+ e^{ikx} \frac{d}{dx}u_{k} \right) \\
 & = - \frac{\hbar^{2}}{2m }\left( -k^{2}e^{ikx}u_{k}+ 2ike^{ikx} \frac{d}{dx}u_{k}+ e^{ikx} \frac{d^{2}}{dx^{2}}u_{k} \right) \\
 & = - \frac{\hbar^{2}}{2m}e^{ikx}\left(  \frac{d}{dx}+ik \right)^{2}u_{k} \\
 & = \frac{1}{2m}e^{ikx}\left( -i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}
\end{align}$$
Therefore, for where the potential is zero, the Schrodinger equation is:
$$\begin{align}
 &  \frac{p^{2}}{2m}(e^{ikx}u_{k})=E e^{ikx}u_{k} \\
\implies &  \frac{1}{2m}e^{ikx}\left( - i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}= Ee^{ikx}u_{k} \\
\implies &  \frac{1}{2m}\left( - i\hbar \frac{d}{dx}+\hbar k \right)^{2}u_{k}=Eu_{k}
\end{align}$$
To solve the equation, we make the ansatz that $u_{k}(x)=Ae^{i\kappa x}$. Then:
$$\begin{align}
 & \frac{1}{2m}\left( -i\hbar \frac{d}{dx}+\hbar k \right)(\hbar \kappa+\hbar k)u_{k}=Eu_{k} \\
\implies &  \frac{1}{2m}\hbar^{2}(\kappa+k)^{2}u_{k}=Eu_{k} \\
\implies & \kappa= \pm \sqrt{ \frac{2mE}{\hbar^{2}} }-k=\pm q-k
\end{align}$$
Therefore:
$$u_{k}(x)=Ae^{i(q-k)x}+Be^{-i(q+k)x}$$
## (b)

We integrate around $0$, take $\epsilon\rightarrow 0$:
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi_{k}+\lambda \sum_{n}\delta(x-na)\psi_{k}=E\psi_{k} \\
\implies & - \frac{\hbar}{2m}[\psi^{'}_{k}]_{-\epsilon}^{\epsilon}+ \lambda \int_{-\epsilon}^{\epsilon}dx\sum_{n}\delta(x-na)\psi_{k}=\int_{-\epsilon}^{\epsilon}dx E\psi_{k} \\
\implies & - \frac{\hbar}{2m}[\psi^{'}_{k}]_{-\epsilon}^{\epsilon}+\lambda \psi_{k}(0)=0\\
\implies & \lim_{ x \to 0+ }   \psi_{k}^{'}-\lim_{ x \to 0- }\psi^{'}_{k}= \frac{2m\lambda}{\hbar^{2}}\psi_{k}(0) 
\end{align}$$
The continuity of $\psi_{k}$ implies:
$$\begin{align}
 & \lim_{ x \to 0- } e^{ikx}u_{k}(x)=\lim_{ x \to 0+ } e^{ikx}u_{k}(x) \\
\implies & \lim_{ x \to 0- } u_{k}(x)=\lim_{ x \to 0+ } u_{k}(x)
\end{align}$$
We also have:
$$\begin{align}
\psi_{k}^{'}(x) & = ike^{ikx}u_{k}+e^{ikx}u_{k}^{'}
\end{align}$$
Then:
$$\begin{align}
 & \lim_{ x \to 0+ } (ike^{ikx}u_{k}+e^{ikx}u_{k}^{'})-\lim_{ x \to 0- } (ike^{ikx}u_{k}+e^{ikx}u_{k}^{'})= \frac{2m\lambda}{\hbar^{2}}u_{k}(0) \\
\implies & \lim_{ x \to 0+ } u_{k}^{'}-\lim_{ x \to 0- } u_{k}^{'}= \frac{2m\lambda}{\hbar^{2}}u_{k}(0)
\end{align}$$
