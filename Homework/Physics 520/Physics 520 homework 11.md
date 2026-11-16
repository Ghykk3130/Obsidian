# Problem 1
## (a)

We know that the supercurrent is given by:
$$\begin{align}
 & \mathbf{j}_{s}=-en_{s}\mathbf{v}_{s} \\
\implies & \frac{\partial}{\partial t}\mathbf{j}_{s}=-en_{s} \frac{\partial \mathbf{v}_{s}}{\partial t} \\
\implies &  {\frac{\partial}{\partial t}\mathbf{j}_{s}=  \frac{n_{s}e^{2}}{m}\mathbf{E}}
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial}{\partial t}(\nabla \times \mathbf{j}_{s}) = - \frac{n_{s}e^{2}}{m} \frac{\partial \mathbf{B}}{\partial t} \\
\implies & \frac{\partial}{\partial t}\left( \nabla \times \mathbf{j}_{s}+ \frac{n_{s}e^{2}}{m}\mathbf{B} \right)=0
\end{align}$$
Recall that:
$$\begin{align}
 & \nabla \times \mathbf{B}= \mu_{0}\mathbf{j}_{s} \\
\implies & \nabla \times(\nabla \times \mathbf{B})=\nabla(\nabla \cdot \mathbf{B})-\nabla^{2}\mathbf{B}=-\nabla^{2}\mathbf{B} =\mu_{0}\nabla \times \mathbf{j}_{s}
\end{align}$$
Then:
$$\begin{align}
 &  \frac{\partial}{\partial t}\left(  \nabla^{2}-\frac{n_{s}e^{2}\mu_{0}}{m}  \right)\mathbf{B}=0 \\
\implies &  \frac{\partial}{\partial t}(\lambda^{2}\nabla^{2}-1)\mathbf{B}=0,\ \lambda^{2}= \frac{m}{n_{s}e^{2}\mu_{0}}
\end{align}$$
We assume:
$$\begin{align}
(\lambda^{2}\nabla^{2}-1 )\mathbf{B}=0
\end{align}$$
Then:
$$\begin{align}
 & \mu_{0}\lambda^{2}\nabla \times \mathbf{j}_{s}=-\mathbf{B} \\
\implies  & { \nabla \times \mathbf{j}_{s}=- \frac{n_{s}e^{2}}{m}\mathbf{B} } \\
\implies & \nabla \times\left( \frac{1}{\mu_{0}}\nabla \times \mathbf{B} \right)=- \frac{n_{s}e^{2}}{m}\mathbf{B} \\
\implies & \nabla \times(\nabla \times \mathbf{B})=- \frac{\mathbf{B}}{\lambda^{2}}
\end{align}$$
## (b)

We have:
$$\begin{align}
 & (\lambda^{2}\nabla^{2}-1)\mathbf{B}=0
\end{align}$$
By symmetry of the problem, we assume $\mathbf{B}=\mathbf{B}(x)$. Then the solution is given by:
$$\begin{align}
\mathbf{B}= \mathbf{C}e^{- x/\lambda }+\mathbf{D} e^{x/\lambda}
\end{align}$$
Know that $B(\infty)=0$. Then $\mathbf{B}=\mathbf{C}e^{-x /\lambda}$. Assume that the current is not a surface current with Dirac distribution. Then $B_{\parallel}$ should be continuous. Then:
$$\begin{align}
\mathbf{B}=\hat{\mathbf{z}}B_{z}(0)e^{-x /\lambda}
\end{align}$$
Then:
$$\begin{align}
\mathbf{j}_{s} & = \frac{1}{\mu_{0}}\nabla \times \mathbf{B} \\
 & = \hat{\mathbf{y}}\left( - \frac{1}{\mu_{0}}B_{z}(0)\partial_{x}e^{-x /\lambda} \right) \\
 & =  \frac{B_{z}(0)}{\lambda \mu_{0}}e^{-x/\lambda}  \hat{\mathbf{y}}
\end{align}$$
Observe that this current is indeed not a surface current with Dirac distribution, meaning that our assumption makes sense.
## (c)

Still, the solution is:
$$\begin{align}
\mathbf{B}=\mathbf{C}e^{-x/\lambda}+\mathbf{D}e^{x/\lambda}
\end{align}$$
And we again assume that the current is not a surface current with Dirac distribution. Then:
$$\begin{align}
 & B_{0}=Ce^{L/\lambda}+De^{-L/\lambda} \\
 & B_{0} = Ce^{-L/\lambda}+De^{L/\lambda}
\end{align}$$
and $\mathbf{C},\mathbf{D}\parallel   \hat{\mathbf{z}}$. Then it's easy to solve:
$$\begin{align}
 & C=D= \frac{B_{0}}{2}\text{sech}\left(  \frac{L}{\lambda} \right)
\end{align}$$
Then:
$$\begin{align}
\mathbf{B} & = \hat{\mathbf{z}} \frac{B_{0}}{2}\text{sech}\left(  \frac{L}{\lambda} \right)(e^{-x/\lambda}+e^{x/\lambda}) \\
 & = B_{0} \hat{\mathbf{z}} \text{sech}\left(  \frac{L}{\lambda} \right)\cosh\left( \frac{x}{\lambda} \right)
\end{align}$$
Then we compute:
$$\begin{align}
\mathbf{j}_{s} & = \frac{1}{\mu_{0}}\nabla \times \mathbf{B} \\
 & = - \frac{B_{0}\text{sech}\left(  \frac{L}{\lambda} \right)}{\mu_{0}\lambda} \sinh\left(  \frac{x}{\lambda} \right)\hat{\mathbf{y} }
\end{align}$$
Observe that this current is indeed not a surface current with Dirac distribution, meaning that our assumption makes sense again.
# Problem 2
## (a)

Know that $\psi$ does not depend on $\mathbf{r}$. So:
$$\begin{align}
\Delta F & = \int d^{3}r\left( a|\psi|^{2}+ \frac{b}{2}|\psi |^{4} \right) \\
 & = V\left( a|\psi|^{2}+ \frac{b}{2}|\psi|^{4} \right)
\end{align}$$
## (b)

We set:
$$\begin{align}
 &  \frac{\partial \Delta F}{\partial|\psi|}=2aV|\psi|+2b|\psi |^{3}=0 \\
\implies & |\psi|(aV+b|\psi|^{2})=0
\end{align}$$
We know that if we are slightly below $T_{c}$, the non-zero $|\psi|$ is stable. Then we have:
$$\begin{align}
 & a_{0}(T-T_{c})V+ b|\psi|^{2}=0 \\
\implies & |\psi|= \sqrt{  \frac{a_{0}(T_{c}-T)}{b} }
\end{align}$$
If we are slightly above $T_{c}$, then $|\psi|=0$ is stable. Then:
$$\begin{align}
|\psi|=\left\{\begin{aligned}
 & 0,\ T>T_{c} \\
 & \sqrt{ \frac{a_{0}(T_{c}-T)}{b} },\ T<T_{c}
\end{aligned}\right.
\end{align}$$
For $T<T_{c}$, we have:
$$\begin{align}
\Delta F & = V\left[ a \frac{a_{0}(T_{c}-T)}{b}+ \frac{b}{2}\left(  \frac{a_{0}(T_{c}-T)}{b} \right)^{2} \right] \\
 & = - \frac{a_{0}^{2}V}{2b}(T_{c}-T)^{2}
\end{align}$$
$$\begin{align}
S & = - \frac{\partial \Delta F}{\partial T} \\
 & =  \frac{a_{0}^{2}V}{b}(T-T_{c}) \\
\implies \frac{\partial S}{\partial T} & = \frac{a_{0}^{2}V}{b} \\
\implies C & = \frac{T\partial S}{\partial T}= \frac{a_{0}^{2}V}{b}T
\end{align}$$
For $T>T_{c}$, we have:
$$\begin{align}
 & \Delta F=0 \\
\implies &  S= -\frac{\partial \Delta F}{\partial T}=0 \\
\implies & C= T \frac{\partial S}{\partial T }= 0
\end{align}$$



