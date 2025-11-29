# Sakurai 3.23
## a.
Observe that $f(r)$ is independent of $\theta,\phi$. Then it suffices to compute:
$$L^{2}(x+y+3z)=-\hbar^{2}\left( \frac{1}{\sin \theta} \frac{\partial}{\partial \theta}\left( \frac{1}{\sin \theta }  \frac{\partial}{\partial \theta} \right)+ \frac{1}{\sin ^{2}\theta} \frac{\partial^{2}}{\partial \phi^{2}} \right)(r\sin \theta \cos \phi+r\sin \theta \sin \phi+r\cos \theta)$$
We have:
$$\begin{align}
L^{2}(r\sin \theta \cos \phi) & = -\hbar^{2}\left(  \frac{-\sin ^{2}\theta \cos \phi+\cos ^{2}\theta \cos \phi}{\sin \theta}r - \frac{\cos \phi}{\sin \theta}r\right) \\
 & = 2\hbar^{2}r\sin \theta \cos \phi 
\end{align}$$
This belongs to the subspace with $l=1$.

Similarly, we can compute:
$$\begin{align}
L^{2}(r\sin \theta \sin \phi) & =-\hbar^{2}\left(  \frac{-\sin ^{2}\theta \sin \phi+\cos ^{2}\theta \sin \phi}{\sin \theta}r- \frac{\sin \phi}{\sin \theta}r \right) \\
 & =2\hbar^{2}r\sin \theta \sin \phi
\end{align}$$
This also belongs to the subspace with $l=1$.

We also have:
$$\begin{align}
L^{2}(3r\cos \theta) & = -\hbar^{2}(-3r\cos \theta)=6\hbar^{2}r\cos \theta
\end{align}$$
This belongs to the subspace with $l=1$.

Therefore, we would only get $l=1$ when $L^{2}$ is measured.

## b.
Know that:
$$\begin{align}
 & Y_{1}^{-1}(\theta,\phi)= \frac{1}{2}\sqrt{ \frac{3}{2\pi} }e^{-i\phi}\sin \theta \\
 & Y_{1}^0(\theta,\phi)= \frac{1}{2} \sqrt{ \frac{3}{\pi} }\cos \theta \\
 & Y_{1}^1(\theta,\phi)=- \frac{1}{2} \sqrt{ \frac{3}{2\pi} }e^{i\phi}\sin \theta 
\end{align}$$
Then it's easy to find:
$$\begin{align}
 & x= r\sqrt{ \frac{2\pi}{3} }(Y_{1}^{-1}-Y_{1}^1)  \\
 & y=ir\sqrt{ \frac{2\pi}{3} }(Y_{1}^{-1}+Y_{1}^1 ) \\
 & 3z= 6 \sqrt{ \frac{\pi}{3} }rY_{1}^0
\end{align}$$
Therefore, we have:
$$\begin{align}
\psi(r) & = rf(r)\left( \sqrt{ \frac{2\pi}{3} }(\ket{1,-1} -\ket{1,1} )+ i \sqrt{ \frac{2\pi}{3} }(\ket{1,-1} +\ket{1,1} )+ 6\sqrt{ \frac{\pi}{3} }\ket{1,0}  \right) \\
 & = rf(r)\left(  \sqrt{ \frac{2\pi}{3} }(1+i)\ket{1,-1} +\sqrt{ \frac{2\pi}{3 }}(i-1)\ket{1,1} + 6\sqrt{ \frac{\pi}{3} }\ket{1,0}  \right)
\end{align}$$
We do not need to worry about the normalization of the r component, because they are such that the overall normalization is zero. 

Then:
$$\begin{align}
 & Prob(\text{m=-1}) = \frac{|\sqrt{ \frac{2\pi}{3} }(1+i) |^{2}}{|\sqrt{ \frac{2\pi}{e} }(1+i)|^{2}+|\sqrt{ \frac{2\pi}{3} }(i-1)|^{2}+|6\sqrt{ \frac{\pi}{3} }|^{2}} = \frac{1}{11} \\
 & Prob(m=1)=\frac{|\sqrt{ \frac{2\pi}{3} }(i-1) |^{2}}{|\sqrt{ \frac{2\pi}{e} }(1+i)|^{2}+|\sqrt{ \frac{2\pi}{3} }(i-1)|^{2}+|6\sqrt{ \frac{\pi}{3} }|^{2}} = \frac{1}{11}= \frac{1}{11} \\
 & Prob(m=0)= \frac{|6\sqrt{ \frac{\pi}{3} }|^{2}}{|\sqrt{ \frac{2\pi}{e} }(1+i)|^{2}+|\sqrt{ \frac{2\pi}{3} }(i-1)|^{2}+|6\sqrt{ \frac{\pi}{3} }|^{2}} = \frac{10}{11}
\end{align}$$
## c.
Know that:
$$\begin{align}
H & = - \frac{\hbar^{2}}{2m}\nabla^{2}+V(r) \\
 & = - \frac{\hbar^{2}}{2m}\left( \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2}  \frac{\partial}{\partial r}  \right) - \frac{L^{2}}{\hbar^{2}r^{2}}\right) +V
\end{align}$$
Therefore, we have:
$$\begin{align}
 & - \frac{\hbar^{2}}{2m}\left( \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r} \right)- \frac{L^{2}}{\hbar^{2}r^{2}} \right)\psi(\vec{x})= E\psi(\vec{x}) \\
\implies &  - \frac{\hbar^{2}}{2m} \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r}  \right)\psi+  \frac{\hbar^{2}}{mr^{2}}\psi+V\psi=E\psi \\
\implies & V=E+ \frac{1}{\psi} \frac{\hbar^{2}}{2m}
 \frac{1}{r^{2}} \frac{\partial}{\partial r}\left( r^{2} \frac{\partial}{\partial r}  \right)\psi- \frac{\hbar^{2}}{mr^{2}}\end{align}$$

# Sakurai 3.25
## a.
It's easy to compute:
$$\begin{align}
& L_{x}= -i\hbar(y\partial_{z}-z\partial_{y})=i\hbar(\sin \phi \partial_{\theta}+\cot \theta \cos \phi \partial_{\phi}) \\
 & L_{y}=-i\hbar(z\partial_{x}-x\partial_{z})=i\hbar(-\cos \phi \partial_{\theta}+\cot\theta \sin \phi \partial_{\phi})
\end{align}$$
Then:
$$\begin{align}
L_{-} & = L_{x}-iL_{y} \\
 & = \hbar(i\sin \phi-\cos \phi) \frac{\partial}{\partial \theta}+\hbar(i\cot \theta \cos \phi+\cot \theta \sin \phi)  \frac{\partial}{\partial \phi}
\end{align}$$
Therefore:
$$\begin{align}
L_{-}Y_{1/ 2}^{1 /2} \propto &\left(\hbar(i\sin \phi-\cos \phi) \frac{\partial}{\partial \theta}+\hbar(i\cot \theta \cos \phi+\cot \theta \sin \phi)  \frac{\partial}{\partial \phi}\right) e^{i\phi/2}\sqrt{ \sin \theta } \\
 & = \hbar(i\sin \phi-\cos \phi) \frac{1}{2} e^{i\phi/2} \frac{\cos \theta}{\sqrt{ \sin \theta }}+\hbar(i\cot \theta \cos \phi+\coth \eta \sin \phi) \frac{i}{2}e^{i\phi/2} \sqrt{ \sin \theta } \\
 & = \frac{\hbar}{2}e^{i\phi/2} \frac{1}{\sqrt{ \sin \theta }}(i\sin \phi \cos \theta-\cos \phi \cos \theta-i\cot \theta \sin \theta \cos \phi+i\cot \theta \sin \theta \sin \phi) \\
 & = \frac{\hbar}{2}e^{i\phi/2} \frac{1}{\sqrt{ \sin \theta }} 2\cos \theta e^{i(\pi-\phi)} \\
 & = - \hbar \frac{\cos \theta}{\sqrt{ \sin \theta }}e^{-i \frac{\phi}{2}}
\end{align}$$
So:
$$Y_{1/ 2}^{-1 /2}\propto  \frac{\cos \theta}{\sqrt{ \sin \theta }} e^{-i \frac{\phi}{2}}$$
## b.
It suffices to show that $L_{-}Y_{1 /2}^{-1 /2}\neq 0$. We compute:
$$\begin{align}
L_{-}Y_{1 /2}^{-1 /2}  & \propto \left(\hbar(i\sin \phi-\cos \phi) \frac{\partial}{\partial \theta}+\hbar(i\cot \theta \cos \phi+\cot \theta \sin \phi)  \frac{\partial}{\partial \phi}\right) \frac{\cos \theta}{\sqrt{ \sin \theta }}e^{-i \frac{\phi}{2}} \\
 & = \hbar e^{-i \frac{\phi}{2}} \frac{1}{\sqrt{ \sin \theta }}\left[(i\sin \phi-\cos \phi) \frac{-\sin ^{2}\theta- \frac{1}{2}\cos ^{2}\theta}{\sin \theta}+(i\cot \theta \cos \phi+\cot \theta \sin \phi)\left( - \frac{i}{2} \right)\cos \theta\right] \\
 & = \hbar e^{-i \frac{\phi}{2}} \frac{1}{\sqrt{ \sin \theta }}\left[- \frac{1}{2}(i\sin \phi \sin \theta-\cos \phi \sin \theta)- \frac{1}{2\sin \theta}(i\sin \phi-\cos \phi)+ \frac{1}{2}\left(  \frac{\cos ^{2}\theta}{\sin \theta}\cos \phi-i \frac{\cos ^{2}\theta}{\sin \theta}\sin \phi \right)\right] \\
 & = \frac{\hbar}{2}e^{-i \frac{\phi}{2}} \frac{1}{\sqrt{ \sin \theta }}e^{i(\pi-\phi)}\left( -\sin \theta- \frac{1}{\sin \theta}- \frac{\cos ^{2}\theta}{\sin \theta} \right) \\
 & = \hbar e^{-i \frac{3}{2}\phi} \frac{1}{\sin^{3/2}\theta}
\end{align}$$
So we have:
$$0=Y_{1 /2}^{-3/ 2}\propto e^{i \frac{3}{2}\phi} \frac{1}{\sin^{3 /2}\theta}$$
which is obviously impossible.

# Sakurai 3.34

**For $\ket{0,0}$:**

Know that $\ket{0,0}$ must be a linear combination of $\ket{+\ -},\ket{-\ +},\ket{0\ 0}$. Then we have:
$$\begin{align}
 & \sqrt{ 0(0+1)-1(1+1) }\bra{+\ 0} 0,1\rangle=\sqrt{1(1+1)-1(1-1)  }\bra{0\ 0}0,0\rangle+ \sqrt{ 1(1+1)-0(0-1) }\bra{+\ -}0,0\rangle \\
\implies & 0=\bra{0\ 0} 0,0\rangle+\bra{+\ -}0,0\rangle \\
\implies & \bra{0\ 0} 0,0\rangle=-\bra{+\ -} 0,0\rangle    
\end{align}$$
Similarly, we also have:
$$\begin{align}
& \sqrt{ 0(0+1)-1(1+1) }\bra{0\ +} 0,1\rangle=\sqrt{1(1+1)-1(1-1)  }\bra{0\ 0}0,0\rangle+ \sqrt{ 1(1+1)-0(0-1) }\bra{-\ +}0,0\rangle \\
\implies & 0=\bra{0\ 0} 0,0\rangle+\bra{-\ +}0,0\rangle \\
\implies & \bra{0\ 0} 0,0\rangle=-\bra{-\ +} 0,0\rangle   
\end{align}$$
Therefore, we have:
$$\begin{align}
\ket{0,0}  & = \ket{0\ 0} \bra{0\ 0} 0,0\rangle+\ket{+\ -} \bra{+\ -} 0,0 \rangle+\ket{-\ +} \bra{-\ + }0,0\rangle \\
 & = \bra{0\ 0} 0,0\rangle(\ket{0\ 0} -\ket{+\ -} -\ket{-\ +} ) 
\end{align}$$
After normalization, we must have:
$$\ket{0, 0}= \frac{1}{\sqrt{ 3 }}(\ket{0\ 0} -\ket{+\ -} -\ket{-\ +} ) $$
**For $\ket{1,0}$:**

Know that $\ket{1,0}$ must be a linear combination of  $\ket{+\ -},\ket{-\ +},\ket{0\ 0}$.

We have:
$$\begin{align}
 & \sqrt{ 1(1+1)-(-1)\cdot {0} }\bra{+\ -} 1,0\rangle= \sqrt{ 1(1+1)-1\cdot 0 }\bra{0\ -} 1,-1\rangle \\
\implies & \bra{+\ -} 1,-1\rangle=\bra{0\ -} 1,-1\rangle
\end{align}$$
We also have:
$$\begin{align}
 & \sqrt{ 1(1+1)-0\cdot( -1) }\bra{0\ -} 1,-1\rangle=\sqrt{ 1(1+1)-0\cdot( 01+1) }\bra{+\ -} 1,0\rangle+ \sqrt{ 1(1+1)-(-1)\cdot 0 }\bra{0\ 0} 1,0\rangle \\
\implies & \bra{0\ 0} 1,0\rangle=0
\end{align}$$
We then compute:
$$\begin{align}
 & \sqrt{ 1(1+1)-(-1)\cdot 0 }\bra{0\ 0} 1,0\rangle= \sqrt{ 1(1+1)-0(0-1) }\bra{-\ -} 1,-1\rangle+ \sqrt{ 1(1+1)-(-1)\cdot 0 }\bra{0\ -} 1,-1\rangle \\
\implies & \bra{-\ -} 1,-1\rangle=-\bra{0\ -} 1,-1\rangle
\end{align}$$
We then obtain:
$$\begin{align}
 & \sqrt{ 1(1+1)-0(0-1) }\bra{-\ 0} 1,-1\rangle=\sqrt{ 1(1+1)-(-1)(-1+1) }\bra{0\ 0 } 1,0\rangle+ \sqrt{ 1(1+1)-0(0+1) }\bra{-\ +} 1,0\rangle \\
\implies & \bra{-\ +} 1,0\rangle=\bra{-\ 0} 1,-1\rangle 
\end{align}$$
Then we have:
$$\begin{align}
\ket{1,0}  & = \ket{+\ -} \bra{+\ -} 1,0\rangle+\ket{-\ +} \bra{-\ +} 1,0\rangle+\ket{0\ 0} \bra{0\ 0} 1,0\rangle \\
 & = \bra{+\ -} 1,0\rangle(\ket{+\ -}+\ket{-\ +}  )
\end{align}  $$After normalization, we must have:
$$\ket{1,0} = \frac{1}{\sqrt{ 2 }}(\ket{+\ -}+\ket{-\ +}  )$$
**For $\ket{1,1}$:**

Know that $\ket{1,1}$ must be a linear combination of $\ket{+\ 0},\ket{0\ +}$.

We have:
$$\begin{align}
 &  0= \sqrt{ 1(1+1)-1 (1-1) }\bra{0\ +} 1,1\rangle+ \sqrt{ 1(1+1)-1(1-1) }\bra{+\ 0} 1,1\rangle \\
\implies & \bra{0\ +} 1,1\rangle=-\bra{+\ 0} 1,1\rangle 
\end{align}$$
Therefore:
$$\begin{align}
 & \ket{1,1} =\ket{+\ 0} \bra{+\ 0} 1,1\rangle+\ket{0\ +} \bra{0\ +} 1,1\rangle \\
 & = \bra{+\ 0} 1,1\rangle(\ket{+\ 0} -\ket{0\ +} )
\end{align}$$
After normalization, we must have:
$$\ket{1,1} = \frac{1}{\sqrt{ 2 }}(\ket{+\ 0} -\ket{0\ +} )$$
**For $\ket{2,0}$:**

Know that $\ket{2,0}$ must be a linear combination of $\ket{+\ -},\ket{-\ +},\ket{0\ 0}$. 

We have:
$$\begin{align}
 & \sqrt{ 2(2+1)-(-3)(-2) }\bra{-\ -} 2,-2\rangle=0 \\
\implies &  \bra{-\ -} 2,-2\rangle=0
\end{align}$$
Then we can compute:
$$\begin{align}
 & \sqrt{ 2(2+1)-(-2)(-1) }\bra{0\ -} 2,-1\rangle= \sqrt{ 1(1+1)-0(0-1) }\bra{-\ -} 2,-2\rangle \\
\implies &  \bra{0\ -} 2,-1\rangle=0
\end{align}$$
Then we have:
$$\begin{align}
 & 0= \sqrt{ 1(1+1)-0(0+{1}) }\bra{+\ -} 2,0\rangle+ \sqrt{ 1(1+1)-(-1) \cdot 0 }\bra{0\ 0} 2,0\rangle \\
\implies & \bra{+\ -} 2,0\rangle=- \bra{0\ 0} 2,0\rangle
\end{align}$$
Then we have:
$$\begin{align}
 & \sqrt{ 2(2+1)-(-1)\cdot 0 }\bra{0\ 0} 2,0\rangle=\sqrt{ 1(1+1)-0(-1) }\bra{-\ 0} 2,-1\rangle \\
\implies & \bra{-\ 0} 2,-1\rangle=\sqrt{ 3 }\bra{0\ 0} 2,0\rangle
\end{align}$$
Next:
$$\begin{align}
 & \sqrt{ 2(2+1)-0(0-1) }\bra{-\ 0} 2,-1\rangle=\sqrt{ 1(1+1)-(-1)\cdot 0 }\bra{0\ 0} 2,0\rangle+ \sqrt{ 1(1+1)-0(0+1) } \bra{0\ +} 2,0\rangle \\
\implies & \sqrt{ 3 }\bra{-\ 0} 2,-1\rangle=\bra{0\ 0} 2,0\rangle+\bra{0\ +} 2,0\rangle 
\end{align}$$
Therefore, we have:
$$\begin{align}
\ket{2,0} &  = \ket{+\ -}\bra{+\ -} 2,0\rangle+\ket{-\ +} \bra{-\ +} 2,0\rangle+ \ket{0\ 0} \bra{0\ 0} 2,0\rangle \\
 & = \bra{+\ -} 2,0\rangle(\ket{+\ -} - \ket{0\ 0} +4\ket{-\ +} ) 
\end{align}$$
After normalization, we have:
$$\ket{2,0} = \frac{1}{3\sqrt{ 2 }}(\ket{+
\ -} -\ket{0
 0} +4\ket{-\ +} )$$
**For $\ket{2,1}$:**

