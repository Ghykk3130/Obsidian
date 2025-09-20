
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
\left( \frac{\partial S}{\partial T} \right)_{J} & =b \frac{ab-cJ}{(a+cT)^{2}}-c \frac{J+bT}{a+cT} \frac{ab-cJ}{(a+cT)^{2}}+A  \\
 & =\left( b- c \frac{J+bT}{a+cT} \right)\cdot  \frac{ab-cJ}{(a+cT)^{2}}+A \\
 & =\frac{(ab-cJ)^{2}}{(a+cT)^{3}}+A\\
\implies C_{J} & =T\left(\frac{(ab-cJ)^{2}}{(a+cT)^{3}}+A\right)
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
The system has constant temperature. It's reasonable to assume that the gas is the atmosphere, and thus acts as a heat reservoir. Since the volume of the droplet doesn't change, and the volume of the solid obviously doesn't change, the work variable $V$ also holds constant. Therefore under these constraints, the Helmholtz free energy must be minimized in this situation.

## c).
Since there's no work term induced by volume change as I argued above, and the temperature stays the same through out the system, the only variables that contributes to the change in a thermodynamic potential are the variable pair $(\sigma,A)$. Therefore: 
$$dF=\sigma_{sg}dA_{sg}+\sigma_{lg}dA_{lg}+\sigma_{sl}dA_{ls}$$
Know that the surface area of the solid is fixed. Therefore:
$$dA_{ls}+dA_{sg}=0$$
Then:
$$dF=(\sigma_{sl}-\sigma_{sg})dA_{ls}+\sigma_{lg}dA_{lg}$$
It suffices to solve $dF=0$. 

Consider a spherical cap, part of a ball of radius $r$ centered in a spherical coordinate system. Set the angle the cap subtends to $\theta$. Then the solid angle the cap subtends is:
$$\Omega=\int_{0}^{2\pi}d\phi \int_{0}^{\theta}d\theta^{'}\sin \theta^{'}=2\pi(1-\cos \theta)$$
Then the volume of the cap is:
$$\begin{align}
V & = \frac{\Omega}{4\pi} \frac{4}{3}\pi r^{2}- \pi(r\sin \theta)^{2}r\cos \theta \frac{1}{3}  \\
 & =\frac{2}{3} \pi r^{3}(1-\cos \theta)- \frac{1}{3}\pi r^{3}\sin ^{2}\theta \cos \theta \\
 & =\frac{1}{3}\pi r^{3}(2-2\cos \theta-\sin ^{2}\theta \cos \theta) \\
 & =\frac{1}{3}\pi r^{3}(2-2\cos \theta-(1-\cos ^{2}\theta)\cos \theta) \\
 & =\frac{1}{3}\pi r^{3}(\cos \theta-1)^{2}(\cos \theta+2)
\end{align}$$
The first line above means I am subtracting the volume of the cone from the volume of the spherical sector.

Also, from simple geometry, we know that:
$$\begin{align}
A_{ls} & = \pi(r\sin \theta)^{2}=\pi r^{2}(1-\cos ^{2}\theta) \\
A_{lg} & = \frac{\Omega}{4\pi}4\pi r^{2}=2\pi r^{2}(1-\cos \theta)
\end{align}$$
Now set $x:=\cos \theta$. Then the constraint is:
$$\begin{align}
 & dV=0 \\
\implies & \frac{\partial V}{\partial r}dr+ \frac{\partial V}{\partial x}dx =0\\
\implies & \pi r^{2}(x-1)^{2}(x+2)dr+ \pi r^{3}(x-1)(x+1)dx =0 \\
\implies & dr=- \frac{r(x+1)}{(x-1)(x+2)}dx
\end{align}$$
Know that:
$$\begin{align}
dA_{ls} & = \frac{\partial A_{ls}}{\partial r}dr+ \frac{\partial A_{ls}}{\partial x}dx \\
 & =2\pi r(1-x^{2})dr+\pi r^{2}(-2x)dx \\
 & =2\pi r(1-x^{2})\cdot\left( - \frac{r(x+1)}{(x-1)(x+2)}  \right)dx \\
 & =2\pi r^{2}\left( \frac{(x+1)^{2}}{x+2}-x \right)dx
\end{align}$$
$$\begin{align}
dA_{lg} & =\frac{\partial A_{lg}}{\partial r}dr+ \frac{\partial A_{lg}}{\partial x }dx \\
 & =4\pi r(1-x)dr+ 2\pi r^{2}(-1)dx \\
 & =\left( 4\pi r(1-x)\cdot\left( - \frac{r(x+1)}{(x-1)(x+2)} \right) +2\pi r^{2}(-1) \right)dx \\
 & =2\pi r^{2}\left(  \frac{2(x+1)}{x+2} -1\right)  dx
\end{align}$$
Therefore:
$$\frac{dA_{ls}}{dA_{lg}}= \frac{\frac{(x+1)^{2}}{x+2}-x}{\frac{2(x+1)}{x+2}-1}=\frac{1}{x}=\frac{1}{\cos \theta}$$
Therefore:
$$\begin{align}
 & dF=(\sigma_{ls}-\sigma_{sg})dA_{ls}+\sigma_{lg}dA_{lg}=0 \\
\implies & (\sigma_{ls}-\sigma_{sg})dA_{ls}+\sigma_{lg}\cos \theta dA_{ls}=0 \\
\implies & \sigma_{sg}=\sigma_{ls}+\sigma_{lg}\cos \theta
\end{align}$$
## d).
The angle $\theta$ would decrease. This is because the soup molecules are amphiphilic, and repelled to the surface. Then it replace the hydrogen bonds between some water molecules at the surface with dipole-dipole interaction. Then the surface tension $\sigma_{lg}$ is reduced. Then $\theta$ would decrease to compensate for this effect.

## e).
Know that:
$$\begin{align}
 & \sigma_{sg}=\sigma_{ls}+\sigma_{lg}\cos \theta \\
\implies & \theta=\arccos\left( \frac{\sigma_{sg}-\sigma_{ls}}{\sigma_{lg}} \right) \\ \\
\end{align}$$
Then the change in angle would be:
$$\Delta \theta=\arccos\left(  \frac{\sigma_{sg}-\sigma_{ls}}{\sigma_{lg}- \frac{NkT}{A}} \right)-\arccos\left(  \frac{\sigma_{sg}-\sigma_{ls}}{\sigma_{lg}} \right)$$
If $N$ is small, I can approximate:
$$\begin{align}
 & \sigma_{lg}\cos \theta=\sigma_{sg}-\sigma_{ls} \\
\implies & d\sigma_{lg}\cos \theta+ \sigma_{lg}(-\sin \theta)d\theta=0
\end{align}$$
Then:
$$\begin{align}
 & \left( - \frac{NkT}{A} \right)\cos \theta+\sigma_{lg}(-\sin \theta)d\theta=0 \\
\implies  & d\theta=- \frac{NkT}{A\sigma_{lg} }\cot \theta 
\end{align}$$
## f).
I have:
$$\begin{align}
 & \left( \frac{\partial \sigma}{\partial A} \right)_{T}= \frac{NkT}{(A-Nb)^{2}}- \frac{2aN^{2}}{A^{3}} \\
\implies & \sigma=\int dA\left(  \frac{NkT}{(A-Nb)^{2}}- \frac{2aN^{2}}{A^{3}} \right) \\
 & =\frac{4aN^{2}}{A^{2}}- \frac{NkT}{A-Nb}+c(T,N)\text{ where c(T,N) is come function}
\end{align}$$
Then:
$$\begin{align}
\left( \frac{\partial \sigma}{\partial T} \right)_{A} & =- \frac{Nk}{A-Nb}+ \frac{\partial c}{\partial T}
\end{align}$$
Know that:
$$\left( \frac{\partial T}{\partial \sigma} \right)_{A}=- \frac{A-Nb}{Nk}\implies \left( \frac{\partial \sigma}{\partial T} \right)_{A}=- \frac{Nk}{A-Nb}$$
Therefore:
$$\frac{\partial c}{\partial T}=0\implies c=c(N)$$
Then:
$$\sigma(T,A)=\frac{4aN^{2}}{A^{2}}- \frac{NkT}{A-Nb}+c$$
# 5).
There is a typo in the question. The correct Sackur-Tetrode equation is:
$$S(U,V,N)=Nk\left( \ln\left(  \frac{V}{N}\left(  \frac{U}{N} \right)^{3/2}\left(  \frac{4\pi m}{3h^{2}} \right)^{3/2} \right)+ \frac{5}{2} \right)$$
We first find $U=U(S,V,N)$:
$$\begin{align}
 & S(U,V,N)=Nk\left( \ln\left(  \frac{V}{N}\left(  \frac{U}{N} \right)^{3/2}\left(  \frac{4\pi m}{3h^{2}} \right)^{3/2} \right)+ \frac{5}{2} \right) \\
\implies & \frac{S}{Nk}- \frac{5}{2}= \ln\left(  \frac{V}{N}\left(  \frac{U}{N} \right)^{3/2}\left(  \frac{4\pi m}{3h^{2}} \right)^{3/2}  \right) \\
\implies & \exp\left(  \frac{S}{Nk}- \frac{5}{2} \right)=\frac{V}{N}\left(  \frac{U}{N} \right)^{3/2}\left(  \frac{4\pi m}{3h^{2}} \right)^{3/2} \\
\implies & U=N\left(  \frac{N}{V} \right)^{2/3} \frac{3h^{2}}{4\pi m}\exp\left(  \frac{2}{3} \frac{S}{Nk}- \frac{5}{3} \right)
\end{align}$$
Then I have:
$$\begin{align}
T & =\left( \frac{\partial U}{\partial S} \right)_{V,N} \\
 & =N \left(  \frac{N}{V}\right)^{2/3} \frac{3h^{2}}{4\pi m} \frac{2}{3} \frac{1}{Nk} \exp\left(  \frac{2}{3} \frac{S}{Nk}- \frac{5}{3} \right) \\
 & =\left(  \frac{N}{V} \right)^{2/3} \frac{h^{2}}{2\pi m} \frac{1}{k}\exp\left(  \frac{2}{3} \frac{S}{Nk}- \frac{5}{3} \right)
\end{align}$$
Then:
$$\begin{align}
\implies &  \frac{2}{3} \frac{S}{Nk}- \frac{5}{3}= \ln\left(  \left(  \frac{V}{N}\right)^{2/3 } \frac{2\pi m}{h^{2}}kT  \right) \\
\implies & S= \frac{3Nk}{2}\ln\left(  \left(  \frac{V}{N} \right)^{2/3} \frac{2\pi m}{h^{2}}kT \right)+ \frac{5}{2}Nk
\end{align}$$
Then substitute in $U$ to get:
$$\begin{align}
U & =\frac{3}{2 }NkT
\end{align}$$
Then:
$$\begin{align}
F(T,V,N) & =U(T,V,N)-TS(T,V,N) \\
 & = \frac{3}{2}NkT-T\left(  \frac{3}{2}Nk\ln\left(  \left(  \frac{V}{N}\right)^{2/3} \frac{2\pi m}{h^{2}}kT \right)+ \frac{5}{2}Nk \right) \\
 & = \frac{3}{2}NkT\left( 1- \ln\left(  \left(  \frac{V}{N}\right)^{2/3} \frac{2\pi m}{h^{2}}kT \right)  \right)- \frac{5}{2}NkT
\end{align}$$