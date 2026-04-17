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
Now compare the actual solutions with the approximations. If $\gamma$ is small and $\omega$ is very different from $\omega_{21}$, or formally $|\omega-\omega_{21}|\gg \frac{\gamma}{\hbar}$, then:
$$\begin{align}
|c_{2} |^{2} & = \frac{1}{1+ (\omega-\omega_{21})^{2}\hbar^{2} /(4\gamma^{2})} \sin ^{2}\left( \frac{|\omega-\omega_{21}|}{2}\left[ 1+ \frac{\gamma^{2}4}{(\omega-\omega_{21})^{2}\hbar^{2}} \right]^{1/2}t \right) \\
 & \approx \frac{1}{(\omega-\omega_{21})^{2} \hbar^{2} /(4\gamma^{2})} \sin ^{2}\left(  \frac{|\omega-\omega_{21}|^{}}{2}t \right) \\
 & = \frac{\gamma^{2} /\hbar^{2}}{(\omega-\omega_{21})^{2} /4 }\sin ^{2}\left(  \frac{\omega_{21}-\omega}{2}t \right)
\end{align}$$
The absolute value sign was wiped because $\sin ^{2}$ is even. This is consistent with the perturbation solution. Now if $\omega$ is very close to $\omega_{21}$, formally $|\omega-\omega_{21}|\ll \frac{\gamma}{\hbar}$, then:
$$\begin{align}
|c_{2} |^{2} & = \frac{\frac{\gamma^{2}4}{\hbar^{2}(\omega-\omega_{21})^{2}}}{\frac{\gamma^{2}4}{\hbar^{2}(\omega-\omega_{21})^{2}}+1}\sin ^{2}\left( \frac{\gamma}{\hbar}\left[ 1+ \frac{\hbar^{2}(\omega-\omega_{21})^{2}}{4\gamma^{2}} \right]^{1/2}t \right) \\
 & \approx \sin ^{2}\left( \frac{\gamma}{\hbar}t \right)
\end{align}$$
However,
$$\begin{align}
|c_{2}^{(1)}|^{2} & \approx \frac{\gamma^{2} /\hbar^{2}}{(\omega-\omega_{21})^{2} /4} \frac{(\omega-\omega_{21})^{2}t^{2}}{4} \\
 & = \frac{\gamma^{2}}{\hbar^{2}}t^{2}
\end{align}$$
This is unbounded and therefore unphysical. In this case, the two approaches disagree.
# Sakurai 5.38

The perturbation can be written as:
$$\begin{align}
V & =  V_{0}\cos(kz-\omega t) \\
 & = \frac{V_{0}}{2}(e^{i(kz-\omega t)}+ e^{-i(kz-\omega t)})
\end{align}$$
Then $\mathscr{V}= \frac{V_{0}}{2}e^{ikz}$. We need to compute $\bra{\mathbf{p}}  \mathscr{V}\ket{1,0,0}$. It suffices to compute:
$$\begin{align}
\bra{\mathbf{p}} e^{ikz}\ket{1,0,0}  & = \int d^{3}r \frac{1}{L^{3/2}}e^{- \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{r}} e^{ikz} \frac{1}{\sqrt{ \pi a_{0}^{3} }} e^{- \frac{r}{a_{0}}}
\end{align}$$
Let $\mathbf{k}=k  \hat{\mathbf{z}}$. Then the exponent can be written as $- \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{r}+i\mathbf{k}\cdot \mathbf{r}- \frac{r}{a_{0}}=i\left( - \frac{\mathbf{p}}{\hbar}+\mathbf{k} \right)\cdot \mathbf{r}- \frac{r}{a_{0}}$. Let $\mathbf{q}= \frac{-\mathbf{p}}{\hbar}+\mathbf{k}$, and choose the z-axis to by parallel to $\mathbf{q}$. This z-axis should not be confused with the z-axis that defines $\cos(kz-\omega t)$. This z-axis is just for the convenience of integration. We integrate in the spherical coordinates:
$$\begin{align}
\int d^{3}r \exp\left( - \frac{i}{\hbar}\mathbf{p}\cdot \mathbf{r}+ikz - \frac{r}{a_{0}} \right) & = \int dr d\theta d\phi r^{2}\sin \theta \exp\left( iqr\cos \theta- \frac{r}{a_{0}} \right) \\
 & = -2\pi \int r^{2}dr \int d(\cos \theta)\exp\left( iqr\cos \theta- \frac{r}{a_{0}} \right) \\
 & = -2\pi \int drr^{2} e^{- \frac{r}{a_{0}}} \frac{e^{-iqr}-e^{iqr}}{iqr} \\
 & = \frac{-2\pi}{iq} \int dr r\left[ \exp\left( -iqr- \frac{r}{a_{0}} \right)-\exp\left( iqr- \frac{r}{a_{0}} \right) \right]  \\
 & = \frac{-2\pi}{iq }\left(  \frac{-1}{-iq- \frac{1}{a_{0}}}- \frac{-1}{iq- \frac{1}{a_{0}}} \right) \\
 & = 2\pi\left( \frac{1}{-iq- \frac{1}{a_{0}}}- \frac{1}{iq- \frac{1}{a_{0}}} \right) \\
 & = \frac{4\pi}{1 /a_{0}^{2}+q^{2}}
\end{align}$$
Then we have:
$$\begin{align}
|\bra{\mathbf{p}} \mathscr{V}\ket{1,0,0}|^{2} & = \frac{v_{0}^{2}}{4} \frac{16\pi^{2}}{\pi a_{0}^{3}L^{3}}\left(  \frac{1}{1 /a_{0}^{2}+q^{2}} \right)^{2} \\
 & = 4 \frac{V_{0}^{2}\pi}{a_{0}^{3}L^{3}} \left( \frac{1}{1 /a_{0}^{2}+q^{2}} \right)^{2}
\end{align}$$
The density of states of free electrons in a box is obviously $\frac{L^{3}}{(2\pi)^{3}}$. Then:
$$w= \frac{2\pi}{\hbar} \cdot 4 \frac{V_{0}^{2}\pi}{a_{0}^{3}L^{3}}\left( \frac{1}{1/ a_{0}^{2}+q^{2}} \right)^{2} \cdot \frac{L^{3}}{(2\pi)^{3}}=\frac{V_{0}^{2}a_{0}^{3}}{\pi \hbar } \left( \frac{1}{1 +a_{0}^{3}|\mathbf{k}- \mathbf{p} /\hbar|^{2}} \right)^{2}\text{, with } \frac{p^{2}}{2m}\approx\hbar \omega+E_{1}$$
