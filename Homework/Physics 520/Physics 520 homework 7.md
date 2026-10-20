# Problem 1
## (a)

We have:
$$\begin{align}
M & = \frac{nB}{3k_{B}T} \mu_{\text{eff}}^{2} \\
 & = \frac{nB}{3k_{B}T}\left( 2 \mu_{B}\cdot \frac{3}{4} \right)^{2} \\
 & = \frac{3}{4} \frac{nB\mu_{B}^{2}}{k_{B}T}
\end{align}$$
Then susceptibility is given by:
$$\begin{align}
\chi & = \frac{M}{\mu_{0}B} \\
 & = \frac{3}{4} \frac{n\mu_{0}\mu_{B}^{2}}{k_{B}T}
\end{align}$$
## (b)

Know that the internal energy is:
$$\begin{align}
U & = Ng_{J}\mu_{B}\langle m_{J}\rangle B  \\
 & = N\mu_{B}g_{J}J B_{J}(y)\\
 & = N\mu_{B}B \tanh(y)
\end{align}$$
Then we take the derivative:
$$\begin{align}
S & = \frac{\partial U}{\partial T} \\
 & = N\mu_{B}B \frac{\partial \tanh(y)}{\partial y} \frac{\partial y}{\partial T} \\
 & = N\mu_{B}B \frac{1}{\cosh ^{2}y} \left( - \frac{\mu_{B}B}{k_{B}T^{2}} \right) \\
 & = - \frac{N\mu_{B}^{2}B^{2}}{\cosh ^{2}y} \frac{1}{k_{B}T^{2}} \\
 & = -  Nk_{B} \frac{y^{2}}{\cosh ^{2}y} ,\ y=\beta \mu_{B}B
\end{align}$$
![[Pasted image 20261019163438.png|centering|600]]
We then calculate the specific heat:
$$\begin{align}
c & = \frac{1}{N} T \frac{\partial S }{\partial T} \\
 & = - \frac{1}{N}T \cdot Nk_{B} \frac{\partial}{\partial T}\left(  \frac{y^{2}}{\cosh ^{2}y} \right) \\
 & = -k_{B}T \frac{2y \cosh ^{2}y-2\cosh y\sinh y \cdot y^{2}}{\cosh ^{4}y} \frac{\partial y}{\partial T} \\
 & = k_{B}^{} \frac{2y^{2}\cosh ^{2}y-2y^{3}\cosh y\sinh y}{\cosh ^{4}y} \\
 & = 2k_{B}y^{2} \text{sech}^{2}y(1-y \tanh y)
\end{align}$$
![[Pasted image 20261019163631.png|centering|600]]
## (c)

Without loss of generality, we let $\mathbf{B}=B \hat{\mathbf{z}}$. We have:
$$\begin{align}
\langle m_{J}\rangle & = \sum_{m_{J}}m_{J}\exp(-\beta g_{J} \mu_{B}m_{J}B) \\ & = -\sum_{m_{J}} \frac{\partial}{\partial(\beta g_{J}\mu_{B}B)} \exp(-\beta g_{J}\mu_{B}m_{J}B) \\

 & = - \frac{\partial}{\partial x}\ln Z, x= \beta g_{J}\mu_{B}B
\end{align}$$
We calculate the partition function:
$$\begin{align}
Z & = \sum_{m_{J}=-J}^{J} \exp(-xm_{J}) \\
 & = \frac{e^{Jx}}{1-e^{-x}}- \frac{e^{-x(J+1)}}{1-e^{-x}} \\
 & = \frac{\exp\left(  \frac{2J+1}{2} x\right)- \exp\left( - \frac{2J+1}{2}x \right)}{e^{x /2}-e^{-x /2}} \\
 & = \frac{\sinh\left(  \frac{2J+1}{2}x \right)}{\sinh(x /2)}
\end{align}$$
Then
$$\begin{align}
\langle m_{j}\rangle & = \frac{1}{2}\coth\left(  \frac{x}{2} \right)- \frac{2J+1}{2}\coth\left( \frac{2J+1}{2}x \right) 
\end{align}$$
Then we have:
$$\begin{align}
M & = n\mu_{B}g_{J}\langle m_{J}\rangle  \\
   &   = M_{s} B_{J}(y),\ M_{s}=n\mu_{B}g_{J}J,\ y=Jx=J\mu_{B}g_{J}\beta B
\end{align}$$
## (d)

For $y\ll 1$, we have:
$$\begin{align}
\coth(y) & \approx  \frac{1+ \frac{1}{2!}x^{2}}{x+ \frac{1}{3!}x^{3}} \\
 & \approx \frac{1+ \frac{1}{2}x^{2}}{x}\left( 1- \frac{1}{6}x^{2} \right) \\
 & \approx \frac{1}{x}+ \frac{x}{3}
\end{align}$$
Then we expand the Brillouin function:
$$\begin{align}
B_{J}(y) & \approx \frac{2J+1}{2J}\left(  \frac{2J}{2J+ 1} \frac{1}{y} + \frac{2J+1}{6J}y \right)- \frac{1}{2J} \left(\frac{2J}{y}+ \frac{y}{6J}\right) \\
 & =  \frac{J+1}{3J}y
\end{align}$$

Then we get the low-temperature magnetization:
$$\begin{align}
M & = M_{s} \frac{J+1}{3J}y \\
 & = ng_{J}\mu_{B}J \frac{J+1}{3J} J \beta \mu_{B}BJ g_{J} \\
 & = \frac{n B}{3k_{B}T}g_{J}^{2} \mu_{B}^{2}J(J+1) \\
 & = \frac{nB}{3k_{B}T }\mu_{\text{eff}}^{2},\ \mu_{\text{eff}}= g_{J}\mu_{B}\sqrt{ J(J+1) }
\end{align}$$
## (e)

The shell is exactly half-filled. We have:
$$S= \frac{7}{2},\ L=0,\ J= \frac{7}{2}$$
Then Lande g-factor is:
$$\begin{align}
g_{J} & = \frac{3}{2}+ \frac{S(S+1)-L(L+1)}{2J(J+1)} \\
 & = 2
\end{align}$$
The effective moment is:
$$\begin{align}
\mu_{\text{eff}} & = g_{J}\mu_{B}\sqrt{ J(J+1) } \\
 & = \sqrt{ 63 }\mu_{B}
\end{align}$$
# Problem 2
## (a)

Let $s$ be the number of nearest neighbors. We choose the axis such that $\mathbf{B}=B \hat{\mathbf{z}}$. Then:
$$\begin{align}
H & = -Js \langle S_{j}\rangle\sum_{i}S_{i}^{z}+g\mu_{B}B\sum_{i}S^{z}_{i} \\
 & = g\mu_{B}\left( B- \frac{Js\langle S_{j}\rangle}{g\mu_{B}} \right)\sum_{i}S^{z}_{i} \\
 & = g\mu_{B}B_{\text{eff}}\sum_{i}S^{z}_{i},\ B_{\text{eff}}=B- \frac{Js\langle S_{j}\rangle}{g\mu_{B}}
\end{align}$$
## (b)

This is exactly the model we encountered in Curie, with an effective field. We have:
$$\begin{align}
M & = M_{s} \tanh(y) \\
 & = \frac{ng\mu_{B} }{2} \tanh(y),\ y=\beta \mu_{B}B_{\text{eff}}= \beta \mu_{B}\left( B- \frac{Js\langle S\rangle }{g\mu_{B}} \right)
\end{align}$$
By assumption, we have:
$$\begin{align}
M & =- n\mu_{B} \langle S\rangle
\end{align}$$
Here the minus sign is be because electrons carry negative charge. Therefore the self-exact equation is:
$$\begin{align}
M & = \frac{ng\mu_{B}}{2}\tanh\left( \beta \mu_{B}\left( B+ \frac{sJM}{ng\mu_{B}^{2}} \right) \right)
\end{align}$$

## (c)

At high temperatures, we have $y\rightarrow 0$. Then:
$$\begin{align}
M & \approx \frac{ng\mu_{B}}{2} \beta \mu_{B}\left( B+ \frac{sJM}{ng\mu_{B}^{2}} \right) \\
\implies & M= \frac{ng\mu_{B}^{2}\beta B}{2-\beta sJ}
\end{align}$$
Therefore:
$$\begin{align}
\chi & = \frac{M}{\mu_{0}B} \\
 & = \frac{ng\mu_{B}^{2}\mu_{0}}{(2k_{B}T-sJ)}
\end{align}$$
## (d)

The critical point of the second order phase transition is where the second derivative of the free energy diverges. So:
$$\begin{align}
 & 2k_{B}T_{c}-sJ=0 \\
\implies & T_{c}= \frac{sJ}{2k_{B}}
\end{align}$$
Then the susceptibility can be written as:
$$\chi=  \frac{ng\mu_{B}^{2}\mu_{0}}{2k_{B}(T-T_{c})} $$
## (e)

![[8307835e524d9e20ddee6ba174f94e69.jpg|centering|400]]
## (f)

To repeat part (a), we find that nothing changes. We still write down:
$$\begin{align}
H  = g\mu_{B}B_{\text{eff}}\sum_{i}S^{z}_{i},\ B_{\text{eff}}=B- \frac{Js\langle S_{j}\rangle}{g\mu_{B}}
\end{align}$$
To repeat part (b), we replace the hyperbolic tangent with $B_{1}$:
$$\begin{align}
M & = M_{s} B_{1}(y) \\
 & = \mu_{B}gB B_{1}(y),\ y=\beta \mu_{B}B_{\text{eff}}= \beta \mu_{B}\left( B- \frac{Js\langle S\rangle }{g\mu_{B}} \right)
\end{align}$$
This equation still holds:
$$\begin{align}
M & =- n\mu_{B} \langle S\rangle
\end{align}$$
Then we get:
$$\begin{align}
M & = ng\mu_{B}B_{1}\left( \beta \mu_{B}\left( B+ \frac{sJM}{ng\mu_{B}^{2}} \right) \right)
\end{align}$$
Then we repeat part (c): at high temperatures, we have $y\rightarrow 0$. Then:
$$\begin{align}
M & \approx ng\mu_{B}\beta \mu_{B}\cdot \frac{1+1}{3} \left( B+ \frac{sJM}{ng\mu_{B}^{2}} \right)  \\
 & = \frac{2}{3}ng\mu_{B}^{2}\beta\left( B+ \frac{sJM}{ng\mu_{B}^{2}} \right) \\
\implies & M= \frac{ng\mu_{B}^{2}\beta B}{ \frac{3}{2} -\beta sJ}
\end{align}$$
Therefore:
$$\begin{align}
\chi & = \frac{M}{\mu_{0}B} \\
 & = \frac{ng\mu_{B}^{2}\mu_{0}}{\left(  \frac{3}{2} k_{B}T-sJ \right)}
\end{align}$$
We calculate the critical temperature:
$$\begin{align}
 & \frac{3}{2}k_{B}T_{c}-sJ=0\implies T_{c}=\frac{2}{3} \frac{sJ}{k_{B}}
\end{align}$$
Then:
$$\begin{align}
\chi= \frac{2ng\mu_{B}^{2}\mu_{0}}{3k_{B}(T-T_{c})}
\end{align}$$
# Problem 3
## (a)

For spins on the + sublattice, the field is:
$$B_{\text{eff}}=B-\gamma M_{-}-|\lambda|M_{+}$$
Then:
$$\begin{align}
M_{+} & = M_{s}B_{J}(y) \\
 & = M_{s}B_{J}\left( - \frac{g_{J}\mu_{B}J}{k_{B}T}(-B+\gamma M_{-}+|\lambda|M_{+}) \right) \\
 & = M_{s}B_{J}\left( - \frac{g_{J}\mu_{B}J}{k_{B}T}(\gamma M_{-}+|\lambda|M_{+}) \right)\text{ under zero field}
\end{align}$$
Similarly, for spins on the - sublattice, it's easy to show that under zero field:
$$\begin{align}
M_{-}=M_{s}B_{J}\left( - \frac{g_{J}\mu_{B}J}{k_{B}T}(\gamma M_{+}+|\lambda|M_{-}) \right)
\end{align}$$
Then:
$$\begin{align}
M_{\pm}= M_{s}B_{J}\left( - \frac{g_{J}\mu_{B}J(\gamma M_{\pm}+|\lambda|M_{\mp})}{k_{B}T} \right)
\end{align}$$
We can expand:
$$M_{\pm}\approx M_{s} \frac{J+1}{3J}\left( - \frac{g_{J}\mu_{B}J(\gamma M_{\pm}+|\lambda|M_{\mp})}{k_{B}T} \right)$$
Let $A= M_{s} \frac{g_{J}\mu_{B}J}{k_{B}T} \frac{J+1}{3J}$, $\mathcal{M}=M_{+}-M_{-}$. By taking the difference of the two equations above, we get:
$$\begin{align}
\mathcal{M}=A(|\lambda|-\gamma )\mathcal{M}
\end{align}$$
Then we have:
$$[1-A(|\lambda|-\gamma)]\mathcal{M}=0$$
For non-zero $\mathcal{M}$, we must have:
$$\begin{align}  & A= \frac{1}{|\lambda|-\gamma}
  \\
\implies& M_{s} \frac{g_{J}\mu_{B}(J+1)}{3k_{B}T_{N}}=  \frac{1}{|\lambda|-\gamma} \\
\implies & T_{N}= M_{s} \frac{g_{J}\mu_{B}(J+1)(|\lambda|-\gamma)}{3k_{B}} = \frac{n(|\lambda|-\gamma)\mu_{\text{eff}^{}}^{2}}{3k_{B}}
\end{align}$$
If the field is non-zero, we have:
$$\begin{align}
M_{\pm}= M_{s} \frac{J+1}{3J}\left( - \frac{g_{J}\mu_{B}J(\gamma M_{\pm}+|\lambda|M_{\mp})}{k_{B}T} \right)
\end{align}$$











