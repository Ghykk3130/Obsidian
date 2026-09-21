# Problem 1
## (a)

The electron in the k-space moves on an orbit that is an intersection of a plane perpendicular to the magnetic field and an energy contour.
## (b)

Know that:
$$\begin{align}
\dot{\mathbf{k}}\cdot \mathbf{B} & = \frac{1}{\hbar}(-e\mathbf{v}\times \mathbf{B})\cdot \mathbf{B}=0
\end{align}$$
Then the orbit in the k-space is perpendicular to $\mathbf{B}$. Assume that the band is parabolic $\epsilon= \frac{\hbar^{2}k^{2}}{2m}$. Then:
$$\begin{align}
\mathbf{v} & = \frac{\partial\epsilon}{\hbar\partial \mathbf{k}} \\
 & = \frac{\hbar \mathbf{k}}{m}
\end{align}$$
Since $\mathbf{k}$ is 


We have:
$$\begin{align}
\mathbf{v} \cdot  \dot{\mathbf{k}} & = \mathbf{v}\cdot \frac{1}{\hbar}(-e\mathbf{v}\times \mathbf{B})=0
\end{align}$$
This means that the infinitesimal movements in $\mathbf{r}$ and $\mathbf{k}$ are perpendicular. Then the path in the real space and in the k-space are perpendicular. 

Let $\hat{\mathbf{e}}_{\parallel}= \frac{\mathbf{B}}{B}$, $\hat{\mathbf{e}_{}}_{\perp}= \frac{\mathbf{k}_{\perp}}{k_{\perp}}$. Define $\hat{\mathbf{e}}_{\phi}=\hat{\mathbf{e}_{}}_{\perp}\times   \hat{\mathbf{e}}_{\parallel}$. For parabolic band, we have:
$$\begin{align}
 & \dot{\mathbf{k}}= \frac{1}{\hbar}(-e) \mathbf{v}\times \mathbf{B}= \frac{1}{\hbar}(-e) \frac{\partial}{\hbar\partial \mathbf{k}}\left(  \frac{\hbar^{2}k^{2}}{2m} \right)\times \mathbf{B} \\
\implies & \dot{\mathbf{k}}= \frac{-eB}{m} \mathbf{k}\times \mathbf{B} 
\end{align}$$
Decompose to get:
$$\begin{align}
 & \frac{d}{dt}(k_{\parallel} \hat{\mathbf{e}}_{\parallel})= \dot{k}_{\parallel} \hat{\mathbf{e}}_{\parallel}= - \frac{e}{m}\mathbf{k}\times \mathbf{B}=0 \\
 & \frac{d}{dt}(k_{\perp}  \hat{\mathbf{e}}_{\perp})= \dot{ k}_{\perp}  \hat{\mathbf{e}}_{\perp}+ k_{\perp} \frac{d}{dt}  \hat{\mathbf{e}}_{\perp}= \frac{-eB}{m}k_{\perp}  \hat{\mathbf{e}}_{\phi}
\end{align}$$
The first equation just gives $\dot{ k}_{\parallel}=0$. The second equation gives:
$$\begin{align}
 & \dot{k}_{\perp}+ k_{\perp}  \hat{\mathbf{e}}_{\perp}\cdot \frac{d}{dt}  \hat{\mathbf{e}}_{\perp}=0 \\
\implies &  \dot{k}_{\perp}+ k_{\perp} \frac{1}{2} \frac{d}{dt}|\hat{\mathbf{e}}_{\perp}|^{2}= \dot{k}_{\perp}=0
\end{align}$$
And:
$$\begin{align}
\frac{d}{dt}  \hat{\mathbf{e}}_{\perp}= \frac{-eB}{m}  \hat{\mathbf{e}}_{\phi}
\end{align}$$
Let $\hat{\mathbf{e}}_{\perp}=\cos(\omega t+\varphi) \hat{\mathbf{x}}+ \sin(\omega t+\varphi) \hat{\mathbf{y}}$, $\hat{\mathbf{e}}_{\phi}=\sin(\omega t+\varphi) \hat{\mathbf{x}}- \cos(\omega t+\varphi) \hat{\mathbf{y}}$. Then $\omega= \frac{eB}{m}$. Then the k-space orbit is circular with angular frequency $\frac{eB}{m}$ and radius $k_{\perp}$. Now:
$$\begin{align}
\mathbf{v}= \frac{\hbar}{m}\mathbf{k}\implies  \dot{\mathbf{r}}= \frac{\hbar}{m}\mathbf{k}= \frac{\hbar}{m}(k_{\parallel} \hat{\mathbf{e}}_{\parallel}+ k_{\perp} \hat{\mathbf{e}}_{\perp})
\end{align}$$
Decompose:
$$\begin{align}
\dot{x}= \frac{\hbar k_{\perp}}{m} \cos (\omega t+\varphi)\implies x= k_{\perp} \frac{\hbar}{eB}\sin(\omega t+ \varphi)
\end{align}$$
Clearly, the radius is scaled with a factor $\frac{\hbar}{eB}$. 
# Problem 2
## (a)

Let $\mathbf{B}=B \hat{\mathbf{z}}$. Choose the Landau gauge so that $\mathbf{A}=xB \hat{\mathbf{y}}$. Then:
$$\begin{align}
H & = \frac{|\mathbf{p}+exB \hat{\mathbf{y}}|^{2}}{2m_{e}} \\
 & = \frac{1}{2m_{e}}(p_{x}^{2}+(p_{y}+exB)^{2})
\end{align}$$
Observe that :
$$\begin{align}
[p_{y},H] =0
\end{align}$$
Then write the eigenstate as $\psi(\mathbf{r})= e^{ik_{y}y}f(x)$. Then:
$$\begin{align}
 & \frac{1}{2m_{e}}(p_{x}^{2}+(p_{y}+exB)^{2})e^{ik_{y}y}f(x)=E e^{ik_{y}y}f(x) \\
\implies & \frac{1}{2m_{e}}(\hbar k_{y}+exB)^{2}e^{ik_{y}y}f+ e^{ik_{y}y} \frac{1}{2m_{e}}p_{x}^{2}f=E e^{ik_{y}y}f \\
\implies & \left[  \frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}} \right]f=Ef
\end{align}$$
Observe that $\frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}}$ is just the hamiltonian of a harmonic oscillator centered at $x_{0}=- \frac{\hbar k_{y}}{eB}$ with angular frequency $\omega_{c}= \frac{eB}{m_{e}}$. Then we obtain the spectrum:
$$\begin{align}
E_{n}= \left( n+ \frac{1}{2} \right)\hbar \frac{eB}{m_{e}}
\end{align}$$


## (b)



## (c)

Let $\mathbf{B}=B \hat{\mathbf{z}}$. Choose the Landau gauge so that $\mathbf{A}=xB \hat{\mathbf{y}}$. Then:
$$\begin{align}
H & = \frac{|\mathbf{p}+exB \hat{\mathbf{y}}|^{2}}{2m_{e}} \\
 & = \frac{1}{2m_{e}}(p_{x}^{2}+p_{z}^{2}+(p_{y}+exB)^{2})
\end{align}$$
Observe that :
$$\begin{align}
[p_{y},H] =0,\ [p_{z},H]=0
\end{align}$$
Then write the eigenstate as $\psi(\mathbf{r})= e^{ik_{y}y+ik_{z}z}f(x)$. Then:
$$\begin{align}
 & \frac{1}{2m_{e}}(p_{x}^{2}+p_{z}^{2}+(p_{y}+exB)^{2})e^{ik_{y}y+ik_{z}z}f(x)=E e^{ik_{y}y+ik_{z}z}f(x) \\
\implies & \frac{1}{2m_{e}}(\hbar^{2}k_{z}^{2}+(\hbar k_{y}+exB)^{2})e^{ik_{y}y+ik_{z}z}f+ e^{ik_{y}y+ik_{z}z} \frac{1}{2m_{e}}p_{x}^{2}f=E e^{ik_{y}y+ik_{z}z}f \\
\implies & \left[  \frac{p_{x}^{2}}{2m_{e}}+  \frac{\hbar^{2}k_{z}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}} \right]f=Ef
\end{align}$$
Observe that $\frac{p_{x}^{2}}{2m_{e}}+ \frac{1}{2} \frac{(\hbar k_{y}+exB)^{2}}{m_{e}}$ is just the hamiltonian of a harmonic oscillator centered at $x_{0}= -\frac{\hbar k_{y}}{eB}$ with angular frequency $\omega_{c}= \frac{eB}{m_{e}}$. Then we obtain the spectrum:
$$\begin{align}
E_{n,k_{z}}= \left( n+ \frac{1}{2} \right)\hbar \frac{eB}{m_{e}}+ \frac{\hbar^{2}k_{z}^{2}}{2m_{e}}
\end{align}$$

