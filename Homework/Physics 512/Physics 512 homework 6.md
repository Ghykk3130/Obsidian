# Sakurai 5.30
## (a)
We have equations:
$$\begin{align}
 &  i\hbar   \dot{c}_{1}= V_{12} e^{i\omega_{12}t}c_{2},\ i\hbar  \dot{c}_{2}= V_{21} e^{i\omega_{21}t}c_{1} \\
\implies &    \dot{c}_{1}= \frac{\gamma}{i\hbar}e^{i(\omega_{12}+\omega)t}c_{2},\  \dot{c}_{2}= \frac{\gamma}{i\hbar}e^{i(\omega_{21}-\omega)t}c_{1}
\end{align}$$
To decouple the equations, we take derivatives:
$$\begin{align}
 & \ddot{c}_{1}= \frac{\gamma}{\hbar}(\omega_{12}+\omega)e^{i(\omega_{12}+\omega)t}c_{2}+ \frac{\gamma}{i\hbar}e^{i(\omega_{12}+\omega)t} \dot{c}_{2}=i(\omega_{12}+\omega)  \dot{c}_{1}- \frac{\gamma^{2}}{\hbar^{2}} c_{1}
\end{align}$$
The characteristic equation is:
$$\begin{align}
 & -\Omega^{2}=-(\omega_{12}+\omega)\Omega- \frac{\gamma^{2}}{\hbar^{2}} \\
\implies & \Omega^{(1)}_{\pm}= \frac{\omega_{12}+\omega\pm \sqrt{ (\omega_{12}+\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}{2}
\end{align}$$
The solution is:
$$c_{1}=A_{+}e^{i\Omega^{(1)}_{+}t}+A_{-}e^{i\Omega^{(1)}_{-}t}$$
Similarly, by replacing $(\omega_{12}+\omega)\leadsto (\omega_{21}-\omega)$, we obtained the solution for $c_{2}$:
$$\begin{align}
 & \Omega^{(2)}_{\pm}= \frac{\omega_{21}-\omega\pm \sqrt{ (\omega_{21}-\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}{2} \\
 & c_{2}=B_{+}e^{i\Omega^{(2)}_{+}t}+B_{-}e^{i\Omega^{(2)}_{-}t}
\end{align}$$
The initial conditions give:
$$\begin{align}
 & c_{1}(0)=1\implies A_{-}=1-A_{+} \\
 & c_{2}(0)=0\implies B_{-}=-B_{+}
\end{align}$$
The initial conditions also enter into derivatives by:
$$\begin{align}
 & \left. \dot{c}_{2} \right|_{t=0}= i\Omega^{(2)}_{+}B_{+}-i\Omega^{(2)}_{-}B_{+}= \frac{\gamma}{i\hbar}c_{1}(0)= \frac{\gamma}{i\hbar}i \\
\implies & B_{+}=- \frac{\gamma}{\hbar} \frac{1}{\sqrt{ (\omega_{21}-\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}
\end{align}$$
Then:
$$\begin{align}
c_{2} &= - \frac{\gamma}{\hbar \sqrt{  (\omega_{12}-\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}\left[ -\exp\left( it\Omega^{(2)}_{+} \right)+\exp(i\Omega^{(2)}_{-}t) \right] \\
 & = \frac{\gamma}{\hbar} \frac{1}{\sqrt{ (\omega_{12}-\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}\exp\left( i \frac{\omega_{21}-\omega}{2}t \right) 2i \sin \left( \frac{\sqrt{ (\omega_{21}-\omega)^{2}+ \frac{4\gamma^{2}}{\hbar^{2}} }}{2}t \right)
\end{align}$$
Therefore:
$$\begin{align}
|c_{2}|^{2} & = \frac{\gamma^{2} / \hbar^{2}}{\gamma^{2} /\hbar^{2}+(\omega-\omega_{21}^{} )^{2} /4} \sin ^{2}\left( \left[  \frac{\gamma^{2}}{\hbar^{2}}+ \frac{(\omega-\omega_{21}^{})^{2}}{4}\right]^{1/2}t  \right)
\end{align}$$
By probability conservation, $|c_{1}|^{2}=1-|c_{2}|^{2}$.
## (b)

We know that:
$$\begin{align}
c_{2}^{(1)} & = - \frac{i}{\hbar}\int_{0}^{t}dt^{'}e^{i\omega_{21}t^{'}}V_{21} \\
 & = - \frac{i}{\hbar}\int_{0}^{t}dt^{'}\exp(i(\omega_{21}-\omega)t^{'})\gamma \\
 & = - \frac{\gamma}{\hbar} \frac{1}{\omega_{21}-\omega}(e^{i(\omega_{21}-\omega)t}-1) \\
 & = \frac{\gamma}{\hbar(\omega-{\omega_{21}})}e^{i \frac{\omega_{21}-\omega}{2}t}2i \sin\left(  \frac{\omega_{21}-\omega}{2}t \right)
\end{align}$$
Then:
$$|c_{2}^{(1)}|= \frac{4\gamma^{2}}{\hbar^{2}} \frac{\sin ^{2}\left(  \frac{\omega_{21}-\omega}{2}t \right)}{(\omega-\omega_{21})^{2}}= \frac{\gamma^{2} /\hbar^{2}}{(\omega-\omega_{21})^{2} /4}\sin ^{2}\left(  \frac{\omega_{21}-\omega}{2}t \right)$$
Similarly,
$$c_{1}^{(1)}= - \frac{i}{\hbar}\int_{0}^{t}dt^{'}e^{i\omega_{11}t^{'}}V_{11}=0\implies c_{1}^{(1)}=c_{1}^{(1)}(0)=1$$
Now compare the actual solutions with the approximations. If $\gamma$ is small and $\omega$ is very different from $\omega_{21}$, then:
$$\begin{align}
|c_{2} |^{2} & = \frac{1}{1+ (\omega-\omega_{21})^{2}\hbar^{2} /(4\gamma^{2})} \sin ^{2}\left( \frac{|\omega-\omega_{21}|}{2}\left[ 1+ \frac{\gamma^{2}4}{(\omega-\omega_{21})^{2}\hbar^{2}} \right]^{1/2}t \right) \\
 & \approx \frac{1}{(\omega-\omega_{21})^{2} \hbar^{2} /(4\gamma^{2})} \sin ^{2}\left(  \frac{|\omega-\omega_{21}|^{}}{2}t \right) \\
 & = \frac{\gamma^{2} /\hbar^{2}}{(\omega-\omega_{21})^{2} /4 }\sin ^{2}\left(  \frac{\omega_{21}-\omega}{2}t \right)
\end{align}$$
The absolute value sign was wiped because $\sin ^{2}$ is even. This is consistent with the perturbation solution. Now if $\omega$ is very close to $\omega_{21}$, then:
$$\begin{align}
|c_{2}|^{2} & = \frac{1}{1+(\omega-\omega_{21})^{2}\hbar^{2} /(4\gamma^{2})}\sin ^{2}\left( \frac{\gamma^{}}{\hbar^{}}\left[ 1+ \frac{(\omega-\omega_{21})^{2}\hbar^{2}}{4\gamma^{2}} \right]^{1/2}t  \right) \\
 & \approx \sin ^{2}\left( \frac{\gamma^{}}{\hbar^{}}t \right) \\
 & \approx \frac{\gamma^{2}}{\hbar^{2}}t^{2}\text{ for small }\gamma
\end{align}$$
This is unbounded and therefore unphysical. It is very different from 
