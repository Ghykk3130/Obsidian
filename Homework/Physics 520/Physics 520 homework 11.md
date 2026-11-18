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
 &  \frac{\partial \Delta F}{\partial|\psi|}=2aV|\psi|+2bV|\psi |^{3}=0 \\
\implies & |\psi|(a+b|\psi|^{2})=0
\end{align}$$
We know that if we are slightly below $T_{c}$, the non-zero $|\psi|$ is stable. Then we have:
$$\begin{align}
 & a_{0}(T-T_{c})+ b|\psi|^{2}=0 \\
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
\Delta S & = - \frac{\partial \Delta F}{\partial T} \\
 & =  \frac{a_{0}^{2}V}{b}(T-T_{c}) \\
\implies \frac{\partial S}{\partial T} & = \frac{a_{0}^{2}V}{b} \\
\implies \Delta C & = \frac{T\partial S}{\partial T}= \frac{a_{0}^{2}V}{b}T
\end{align}$$
Here $\Delta S$ is $S_{s}-S_{n}$, $\Delta C$ is $C_{s}-C_{n}$. For $T>T_{c}$, we have:
$$\begin{align}
 & \Delta F=0 \\
\implies &  \Delta S= -\frac{\partial \Delta F}{\partial T}=0   
\implies & \Delta C= T \frac{\partial S}{\partial T }= 0
\end{align}$$

![[a9c545832ebe1174d9c15b203a1bdd25.jpg|centering|400]]

![[f3985382042dd8755b7346003a1a24c2.jpg|centering|400]]
![[e05018f14922ee171554b29273a426cd.jpg|centering|400]]

![[9b2672e6bf5124208a6ad38e21f09278.jpg|centering|400]]
# Problem 3
## (a)

If the magnetic field is zero, the GL equation reduces to:
$$\begin{align}
 & - \frac{\hbar^{2} \partial^{2}_{x}}{2m^{*}}\psi+a\psi+b|\psi|^{2}\psi=0 \\
\implies & - \frac{\hbar^{2}\partial^{2}_{x}}{2m^{*}}\psi+a\psi+b\psi^{3}=0
\end{align}$$
if $\psi\in \mathbb{R}$. Then:
$$\begin{align}
 & - \frac{\hbar^{2} \partial_{x}^{2}}{2m^{*}b \psi_{0}^{3}}\psi+ \frac{a}{b} \frac{\psi}{\psi_{0}^{3}}+ f^{3}=0
\end{align}$$
Observe that:
$$\begin{align}
 & \frac{a}{b} \frac{1}{\psi_{0}^{3}}= \frac{a}{b} \frac{b}{|a|} \sqrt{  \frac{b}{|a|} }=- \frac{1}{\psi_{0}} \\
 & \frac{1}{b\psi_{0}^{2}}= \frac{1}{b\cdot \frac{|a|}{b}}= \frac{1}{|a|}
\end{align}$$
Then:
$$\begin{align}
 & - \frac{\hbar^{2}\partial^{2}_{x}}{2m^{*}|a|}f- f+f^{3}=0 \\
\implies & \xi^{2} \frac{d^{2}}{dx^{2}}f=-f+f^{3},\ \xi= \hbar \sqrt{  \frac{1}{2m^{*}|a|} }
\end{align}$$
## (b)

We have:
$$\begin{align}
 & \xi^{2} \frac{d^{2}f}{dx^{2}}=-f+f^{3} \\
\implies & \xi^{2} 2 \frac{df}{dx} \frac{d^{2}f}{dx^{2}}=(-f+f^{3})2 \frac{df}{dx} \\
\implies & \xi^{2} \frac{d}{dx}\left(  \left(  \frac{df}{dx} \right)^{2} \right)= \frac{d}{dx}\left( - f^{2}+ \frac{f^{4}}{2} \right) \\
\implies & \xi^{2} \left(  \frac{df}{dx} \right)^{2}=-f^{2}+ \frac{f^{4}}{2}+C
\end{align}$$
Take $x\rightarrow \infty$. Then $\frac{df}{dx}=0$, $f= \frac{\psi}{\psi_{0}}=1$. Then:
$$\begin{align}
0=-1+ \frac{1}{2}+C\implies C= \frac{1}{2}
\end{align}$$
Then:
$$\begin{align}
 & \xi^{2}\left(  \frac{df}{dx} \right)^{2}=\frac{1}{2}(f^{2}-1)^{2} \\
\implies &  \xi \frac{df}{dx}=\pm \frac{1}{\sqrt{ 2 }}(f^{2}-1)
\end{align}$$
If we take $+$， then:
$$\begin{align}
 & \int \frac{df}{f^{2}-1}= \frac{1}{\sqrt{ 2 }\xi}\int dx \\
\implies & \frac{1}{2} \int \frac{df}{f-1}- \frac{1}{2} \int \frac{df}{f+1}= \frac{1}{\sqrt{ 2 }\xi}\int dx \\
\implies &  \frac{1}{2} \ln| \frac{f-1}{f+1} |= \frac{1}{\sqrt{ 2 }} \frac{x}{\xi}+C
\end{align}$$
If $x\rightarrow \infty$, then $f\rightarrow -1$, conflicting our assumption. Then we must have:
$$\begin{align}
 & \xi \frac{df}{dx}=- \frac{1}{\sqrt{ 2 }}(f^{2}-1) \\
\implies & - \int \frac{df}{f^{2}-1}= \frac{1}{\sqrt{ 2 }\xi}\int dx \\
\implies & \frac{1}{2}\ln | \frac{f-1}{f+1} |= - \frac{1}{\sqrt{ 2 }\xi}x+C \\
\implies & \left| \frac{f-1}{f+1} \right|= C\exp\left( -  \frac{\sqrt{ 2 }}{\xi}x \right) \\
\implies & \frac{1-f}{f+1}=C \exp\left( - \frac{\sqrt{ 2 }}{\xi}x  \right) \\
\implies & f= \frac{1-Ce^{-\sqrt{ 2 }x/\xi}}{1+Ce^{-\sqrt{ 2x/\xi }}}= \frac{1-\exp\left( - \frac{\sqrt{ 2 }x}{\xi}+C^{'} \right)}{1+ \exp\left( - \frac{\sqrt{ 2 }x}{\xi}+C^{'} \right)}=\tanh\left( \frac{x}{\sqrt{ 2 }\xi}+ C^{''} \right)
\end{align}$$
Clearly, we have:
$$c= \frac{1}{\sqrt{ 2 }\xi}$$

# Problem 4
## (a)

We know that:
$$\begin{align}
\mathbf{j}_{s} & = - \frac{1}{\mu_{0}\lambda^{2}}\mathbf{A} \\
 & = - \frac{1}{2\mu_{0}\lambda^{2}}\mathbf{B}\times \mathbf{r} \\
 & = - \frac{1}{2\mu_{0}\lambda^{2}}Br\sin \theta   \hat{\boldsymbol{\phi}}
\end{align}$$
Therefore the current is:
$$\begin{align}
j_{s}rdr d\theta & = - \frac{1}{2\mu_{0}\lambda^{2}}Br^{2}\sin \theta dr d\theta
\end{align}$$
The moment is:
$$\begin{align}
- \frac{1}{2\mu_{0} \lambda}Br^{2}\sin \theta dr d\theta \cdot \pi(r\sin \theta)^{2} & = - \frac{\pi }{2\mu_{0}} \frac{Br^{4}\sin ^{3}\theta}{\lambda^{2}} dr \theta \\
 & = - C \frac{Br^{4}\sin ^{3}\theta}{\lambda^{2}}dr d\theta,\ C= \frac{\pi}{2\mu_{0}}
\end{align}$$
## (b)

We integrate:
$$\begin{align}
m & = - C \frac{B}{\lambda^{2}}\int r^{4}\sin ^{3}\theta dr d\theta \\
 & = C \frac{B}{\lambda^{2}} \frac{R^{5}}{5}\int d(\cos \theta)(1- \cos ^{2}\theta) \\
 & = C \frac{B}{\lambda^{2}} \frac{R^{5}}{5}\left[  \cos \theta- \frac{\cos ^{3}\theta}{3} \right]_{0}^{\pi} \\
 & = C \frac{B}{\lambda^{2}} R^{5}\left( - \frac{4}{15} \right)
\end{align}$$
Then:
$$\begin{align}
M & = \frac{m}{  \frac{4}{3}\pi R^{3}} \\
 & = - \frac{1}{10\mu_{0} } \frac{B}{\lambda^{2}}R^{2}
\end{align}$$
Then:
$$\begin{align}
\chi & = \frac{M}{H} \\
 & = - \frac{1}{10\mu_{0}} \frac{R^{2}}{\lambda^{2}}
\end{align}$$
# Problem 5
## (a)

We consider the variation $\delta \mathbf{A}$. Then:
$$\begin{align}
\delta \int d^{3}r \left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi  \right|^{2} & = \int d^{3}r \left( i\nabla- \frac{e^{*}(\mathbf{A}+\delta \mathbf{A})}{\hbar} \right)\psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}(\mathbf{A}+\delta \mathbf{A})}{\hbar} \right)\psi- \int d^{3}r \left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi  \right|^{2} \\
 & = \int d^{3}r\left( - \frac{e^{*}\delta \mathbf{A}}{\hbar} \right)\psi ^{*}\cdot\left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi+\int d^{3}r\left( i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi ^{*}\cdot\left( - \frac{e^{*}\delta \mathbf{A}}{\hbar} \right)\psi \\
 & = \int d^{3}r\frac{e^{*}\delta \mathbf{A}}{\hbar}\cdot i \psi ^{*} \overset{\leftrightarrow}{\nabla}\psi+ \int d^{3}r \frac{2(e^{*})^{2}}{\hbar^{2}} \mathbf{A}|\psi |^{2}\cdot\delta \mathbf{A}
\end{align}$$
Then:
$$\begin{align}
\delta \int d^{3}r \frac{B^{2}}{2\mu_{0}} & = \int d^{3}r \frac{1}{2\mu_{0}}(\nabla \times(\mathbf{A}+\delta \mathbf{A}))^{2}- \int d^{3}r \frac{1}{2\mu_{0}}(\nabla \times \mathbf{A})^{2} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}(\nabla \times \mathbf{A})\cdot(\nabla \times\delta \mathbf{A}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\mathbf{B}\cdot(\nabla \times\delta \mathbf{A}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\epsilon_{ijk}B_{i}\partial_{j}\delta A_{k} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\partial_{j}(\epsilon_{ijk}B_{i}\delta A_{k})- \int d^{3}r \frac{1}{\mu_{0}}\delta A_{k}\partial_{j}B_{i} \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\nabla \cdot(-\mathbf{B}\times\delta \mathbf{A})+\int d^{3}r \frac{1}{\mu_{0}}\delta \mathbf{A}\cdot(\nabla \times \mathbf{B}) \\
 & = \int d^{3}r \frac{1}{\mu_{0}}\delta \mathbf{A}\cdot(\nabla \times \mathbf{B}) \\
 & = \int d^{3}r \delta \mathbf{A}\cdot \mathbf{j}_{s}
\end{align}$$
Therefore
$$\begin{align}
\delta \Delta F & =  \frac{\hbar^{2}}{2m^{*}}\left( \int d^{3}r\frac{e^{*}\delta \mathbf{A}}{\hbar}\cdot i \psi ^{*} \overset{\leftrightarrow}{\nabla}\psi+ \int d^{3}r \frac{2(e^{*})^{2}}{\hbar^{2}} \mathbf{A}|\psi |^{2}\cdot\delta \mathbf{A}\right)+\int d^{3}r \delta \mathbf{A}\cdot \mathbf{j}_{s}=0 \\
\implies  & {\mathbf{j}_{s}=\frac{\hbar e^{*}}{2m^{*}}i \psi ^{}  \overset{\leftrightarrow}{\nabla}\psi ^{*}- \frac{(e^{*})^{2}}{m^{*}}\mathbf{A}|\psi |^{2}}
\end{align}$$
If we take $\psi=|\psi|e^{i\theta}$, we have:
$$\begin{align}
\psi \overset{\leftrightarrow}{\nabla}\psi ^{*} & = |\psi|^{2} e^{i\theta}\nabla e^{-i\theta}- |\psi|^{2} e^{-i\theta}\nabla e^{i\theta} \\
 & = -i{2}|\psi|^{2} \nabla \theta
\end{align}$$
where we assume that $|\psi|$ does not depend on $\mathbf{r}$. Then:
$$\begin{align}
 & \mathbf{j}_{s}= \frac{\hbar e^{*}}{2m^{*} }2 |\psi|^{2} \nabla \theta- \frac{(e^{*})^{2}}{m^{*}}\mathbf{A}|\psi|^{2} \\
\implies & \mathbf{v}_{s}= \frac{\hbar}{m^{*}}\nabla \theta- \frac{e^{*}}{m^{*}}\mathbf{A} = \frac{1}{m^{*}}(\hbar \nabla \theta-e^{*}\mathbf{A})
\end{align}$$
## (b)

We have:
$$\begin{align}
\Delta F & = \int d^{3}r \left[  \frac{\hbar^{2}}{2m^{*}}\left| \left( -i\nabla- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi \right| ^{2} +a|\psi|^{2}+ \frac{b}{2}|\psi|^{4}+ \frac{B^{2}}{2\mu_{0}}\right] \\
 & = \int d^{3}r \left[  \frac{\hbar^{2}}{2m^{*}}\left|\left( \nabla \theta- \frac{e^{*}\mathbf{A}}{\hbar} \right)\psi\right|^{2}+a|\psi|^{2}+ \frac{b}{2}|\psi|^{4}+ \frac{B^{2}}{2\mu_{0}}  \right] \\
 & = \int d^{3}r \left[   \frac{m^{*}}{2}v_{s}^{2}|\psi|^{2}+a|\psi|^{2}+ \frac{b}{2}|\psi|^{4}+ \frac{B_{0}^{2}}{2\mu_{0}}  \right] \\
 & = \left(  \frac{m^{*}}{2}v^{2}_{s}|\psi|^{2}+a|\psi|^{2}+ \frac{b}{2}|\psi|^{4}+ \frac{B^{2}_{0}}{2\mu_{0}} \right)V
\end{align}$$
where $V=2\pi adL$ is the volume of the cylinder. 
## (c)

Now we have:
$$\begin{align}
\Delta F & = \left(  \frac{m^{*}}{2}v_{s}^{2}|\psi|^{2}+a|\psi|^{2}+ \frac{b}{2}|\psi|^{4} \right)2\pi adL
\end{align}$$
We want:
$$\begin{align}
 &  \frac{\partial \Delta F}{\partial v_{s}}=0\implies m^{*}v_{s}|\psi |^{2}=0 \\
 & \frac{\partial \Delta F}{\partial|\psi|}=0\implies m^{*}v^{2}_{s}|\psi|+ 2a|\psi |+ 2b|\psi|^{3}=0
\end{align}$$
From the first equation, we know that $m^{*}v_{s}^{2}|\psi|^{2}=0$. From the second equation, we obtained:
$$\begin{align}
 & 2a|\psi|+ 2b|\psi|^{3}=0 \\
\implies & |\psi|( a+ b|\psi|^{2})=0
\end{align}$$
If we are below $T_{c}$, then the minima is:
$$\begin{align}
|\psi| & = \sqrt{  \frac{a_{0}(T_{c}-T)}{b} }
\end{align}$$
Then $\mathbf{v}_{s}=0$. 
## (d)

We have:
$$\begin{align}
 & \mathbf{v}_{s}= \frac{1}{m^{*}}\left( \hbar\nabla \theta- e^{*}\mathbf{A} \right) \\
\implies & \mathbf{A}= \frac{\hbar}{e^{*}}\nabla \theta- \frac{m^{*}}{e^{*}}\mathbf{v}_{s} \\
\implies & \oint d\mathbf{r}\cdot \mathbf{A}= \frac{\hbar}{e^{*}}\oint d\mathbf{r}\cdot \nabla \theta- \frac{m^{*}}{e^{*}}\oint d\mathbf{r}\cdot \mathbf{v}_{s}
\end{align}$$
By symmetry of the problem, we know that $\mathbf{v}_{s}=\mathbf{v}_{s}(r)$. However, in the cylinder, we fix $r=a$. So $\oint d\mathbf{r}\cdot \mathbf{v}_{s}= 2\pi a v_{s}$. Then:
$$\begin{align}
 & \oint d^{2}r \nabla \times \mathbf{A}= \frac{\hbar}{e^{*}}2\pi n- \frac{m^{*}}{e^{*}}2\pi a v_{s} \\
\implies &  \frac{m^{*}}{e^{*}}2\pi a v_{s}= \frac{\hbar}{e^{*}}2\pi n- \Phi \\
\implies & v_{s} = \frac{\hbar}{m^{*}a}\left( n- \frac{\Phi}{\Phi_{0}} \right),\ \Phi_{0}= \frac{h}{e^{*}}
\end{align}$$
## (e)

If the cylinder is thick, then we are effectively having a lot of superconducting loops. Each loop has quantized flux, but with difference area. Then if you take average of their magnetic flux, it would turn out to be not quantized!

## (f)

We have:
$$\begin{align}
\frac{\delta \Delta F}{\delta \psi ^{*}} & = \frac{1}{2}m^{*}v^{2}_{s}\psi+ a\psi+ b|\psi|^{2}\psi=0 \\
\implies|\psi|^{2} & = \left( - \frac{a}{b} \right)\left( 1+ \frac{m^{*}}{2a}v_{s}^{2} \right)
\end{align}$$
Then:
$$\begin{align}
\Delta F & = V\left(  \frac{1}{2}m^{*}v^{2}_{s}|\psi|^{2}+ a|\psi|^{2}+ \frac{b}{2}|\psi|^{4} \right) \\
 & = V\left[ \left( - \frac{a^{2}}{b} \right)\left( 1+ \frac{m^{*}}{2a}v^{2}_{s} \right)^{2}+ \frac{b}{2}\cdot \frac{a^{2}}{b^{2}}\left( 1+ \frac{m^{*}}{2a}v^{2}_{s} \right)^{2} \right] \\
 & = V\left( - \frac{a^{2}}{2b} \right)\left( 1+ \frac{m^{*}}{2a}v^{2}_{s} \right)^{2} \\
 & = V\left(  - \frac{a^{2}}{2b} \right)\left( 1- \frac{m^{*}}{2|a|}v^{2}_{s} \right)^{2}
\end{align}$$
Know that $|\psi|^{2}> 0$, then $1- \frac{m^{*}}{2|a|}v^{2}_{s}>0$. Therefore to minimize $\Delta F$, we maximize $\left( 1- \frac{m^{*}}{2|a|}v^{2}_{s} \right)^{2}$, meaning that we minimize $v^{2}_{s}$. Then we minimize $\left| n- \frac{\Phi}{\Phi_{0}} \right|$
$$\begin{align}
n= \left\lfloor   \frac{\Phi}{\Phi_{0}}+ \frac{1}{2}  \right\rfloor 
\end{align}$$
![[6663e639d2ff12df6a93396accea8fec.jpg|centering|400]]


# Problem 6
## (a)

If there is no magnetic field or current, and we assume the wavefunction to be uniform, we know that:
$$\begin{align}
\Delta F & = \int dx \left( a|\psi|^{2}+ \frac{b}{2}|\psi|^{4} \right) \\
 & = L\left( a|\psi|^{2}+ \frac{b}{2}|\psi|^{4} \right)
\end{align}$$
Then:
$$\begin{align}
 & \frac{\partial \Delta F}{\partial|\psi|}=0 \\
\implies & |\psi_{0} |= \sqrt{ \frac{a_{0}(T_{c}-T)}{b} }
\end{align}$$
Here we know that the non-zero solution corresponds to the minimum. If we take into account the phase factor, we have:
$$\begin{align}
\psi_{0}= \sqrt{ \frac{a_{0}(T_{c}-T)}{b} }e^{i\theta_{0}}
\end{align}$$
## (b)

The second GL equation tells us that:
$$\begin{align}
j_{s} & = \frac{\hbar e^{*}}{2m^{*}} i \psi \overset{\leftrightarrow}{\partial_{x}}\psi ^{*}- \frac{(e^{*})^{2}}{m^{*} }A|\psi|^{2}
\end{align}$$
We compute:
$$\begin{align}
\psi \overset{\leftrightarrow}{\partial_{x}}\psi ^{*} &  = |\psi|^{2} e^{iqx}\partial_{x}e^{-iqx}-|\psi|^{2} e^{-iqx}\partial_{x}e^{iqx} \\
 & = -2iq|\psi|^{2}
\end{align}$$
Then:
$$\begin{align}
 & j_{s}= |\psi|^{2} e^{*} v_{s}= \frac{\hbar e^{*}}{2m^{*}}2q|\psi|^{2}- \frac{(e^{*})^{2}}{m^{*}}A|\psi|^{2} \\
\implies & v_{s}= \frac{1}{m^{*}}(\hbar q-e^{*}A)
\end{align}$$
## (c)

We have:
$$\begin{align}
(-i\hbar \nabla-e^{*}A)\psi & = (\hbar q-e^{*}A)\psi \\
 & = m^{*}v_{s} \psi
\end{align}$$
Then:
$$\begin{align}
\Delta F & = \int dx\left[ a|\psi|^{2}+ \frac{b}{2}|\psi|^{4}+ \frac{1}{2m^{*}}(m^{*}v_{s})^{2}|\psi|^{2}+ \frac{B^{2}}{2\mu_{0}} \right] 
\end{align}$$
We take:
$$\begin{align}
\frac{\delta \Delta F}{\delta \psi ^{*}} & = \frac{1}{2}m^{*}v^{2}_{s}\psi+ a\psi+ b|\psi|^{2}\psi=0 \\
\implies|\psi|^{2} & = \left( - \frac{a}{b} \right)\left( 1+ \frac{m^{*}}{2a}v_{s}^{2} \right) \\
\implies |\psi|^{} & = \psi_{0}\sqrt{ 1- \frac{m^{*}}{2|a|}v^{2}_{s} }
\end{align}$$
Know that $j_{s}=|\psi|^{2}e^{*}v_{s}$, then:
$$\begin{align}
 & |\psi |^{2}= \psi_{0}^{2}\left( 1- \frac{m^{*}}{2|a||\psi|^{4}(e^{*})^{2}}j_{s}^{2} \right) \\
\implies & j_{s}^{2}= \frac{2|a|(e^{*})^{2}}{m^{*}\psi_{0}^{2}}|\psi |^{4}(\psi_{0}^{2}-|\psi|^{2}) \\
\implies & j_{s}= e^{*} \sqrt{ \frac{2b}{m^{*}} }|\psi|^{2}\sqrt{ \psi_{0}^{2}-|\psi|^{2} }
\end{align}$$
![[36fc8676e4ab4568bd0093f2bf5036fd.jpg|centering|400]]
## (d)

If the current is larger than the maximum of the function $j_{s}=e^{*} \sqrt{ \frac{2b}{m^{*}} }|\psi|^{2}\sqrt{ \psi_{0}^{2}- |\psi|^{2} }$, then $\frac{1}{2}m^{*}v^{2}_{s}+a+b|\psi|^{2}=0$ has no solution. In order for $\frac{\delta \Delta F}{\delta \psi ^{*}}=0$, we must have $\psi=0$, meaning that the superconducting state is destroyed. 

We have:
$$\begin{align}
j_{s}^{2}= \frac{2b(e^{*})^{2}}{m^{*}}|\psi|^{4}(\psi^{2}_{0}-|\psi|^{2})
\end{align}$$
It suffices to maximize this against $|\psi|^{2}$. We take the derivative:
$$\begin{align}
 & 2|\psi|^{2}(\psi_{0}^{2}-|\psi|^{2})+ |\psi|^{4}(-1)=0 \\
\implies & |\psi|=\sqrt{ \frac{2}{3} }\psi_{0}
\end{align}$$
Then:
$$\begin{align}
 & j_{s}= \frac{2\sqrt{ 2 }}{3\sqrt{ 3 }} e^{*} \sqrt{ \frac{b}{m^{*}} } \psi_{0}^{3}= \frac{2}{3} \frac{e^{*}}{b^{}} \sqrt{ \frac{2}{3m^{*}} } (a_{0}(T_{c}-T))^{3/2}
\end{align}$$

