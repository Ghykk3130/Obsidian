# Sakurai 3.10
## (a)

Let the state vector be:
$$\ket{\psi} =\begin{pmatrix}
\cos \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix}$$
Then:
$$\begin{align}
\langle S_{x}\rangle & = \begin{pmatrix}
\cos \frac{\theta}{2} &  e^{-i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix} \begin{pmatrix}
\cos \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \\
 & = \begin{pmatrix}
\cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2} 
\end{pmatrix}\begin{pmatrix}
e^{i\phi}\sin \frac{\theta}{2} \\
\cos \frac{\theta}{2}
\end{pmatrix} \\
 & = \cos \phi \sin \theta
\end{align}$$
Similarly:
$$\begin{align}
\langle S_{y}\rangle & = \begin{pmatrix}
\cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}\begin{pmatrix}
\cos \frac{\theta}{2} \\
e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \\
 & = \begin{pmatrix}
\cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2} 
\end{pmatrix} \begin{pmatrix}
-ie^{i\phi}\sin \frac{\theta}{2} \\
i\cos \frac{\theta}{2}
\end{pmatrix} \\
 & = \cos \left( \phi- \frac{\pi}{2}  \right)\sin \theta=\sin \phi \sin \theta
\end{align}$$
Also:
$$\begin{align}
\langle S_{z}\rangle & = \begin{pmatrix}
\cos \frac{\theta}{2} & e^{-i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \begin{pmatrix}
\cos \frac{\theta}{2} \\
-e^{i\phi}\sin \frac{\theta}{2}
\end{pmatrix} \\
 & = \cos \theta
\end{align}$$
Then we first solve $\theta=\arccos \langle S_{z}\rangle$. Then we have $\cos \phi=  \frac{\langle S_{x}\rangle}{\sin \theta}$. One solution of $\phi$ is above the x axis, and another is below. Then the sign of $\langle S_{y}\rangle$ determines which solution to pick.

The reason why we don't need the magnitude of $\langle S_{y}\rangle$ is because there are only two parameters to determine a spin-1/2 state.
## (b)

Know that the density matrix has to be Hermitian, since:
$$\rho=p_{1}\ket{\psi_{1}} \bra{\psi_{1}} +p_{2}\ket{\psi_{2}} \bra{\psi_{2}} =\rho ^{\dagger}$$
The sum of the diagonal elements is zero, since:
$$\begin{align}
\rho_{11}+\rho_{22} & = p_{1}|\bra{+\hat{z}} \psi_{1}\rangle|^{2}+p_{2}|\bra{+\hat{z}} \psi_{2}\rangle|^{2}+p_{1}|\bra{-\hat{z}} \psi_{1}\rangle|^{2}+p_{2}|\bra{-\hat{z}} \psi_{2}\rangle|^{2} \\
 & = p_{1}+p_{2}=1
\end{align}$$
Then set:
$$\rho=\begin{pmatrix}
a & c \\
c^{*} & 1-a
\end{pmatrix}$$
Then:
$$\begin{align}
 [S_{x}] & = Tr(S_{x}\rho) \\
 & = Tr\left(\begin{pmatrix}
c^{*}  & 1-a \\
a & c
\end{pmatrix}\right) \\
 & = 2\mathrm{Re}(c)
\end{align}$$
$$\begin{align}
[S_{y}] & = Tr(S_{y}\rho) \\
 & = Tr\left(\begin{pmatrix}
-ic^{*}  &  -i(1-a) \\
ia & ic
\end{pmatrix}\right) \\
 & = 2\mathrm{Re}(ic)=-2\mathrm{Im}(c)
\end{align}$$
$$\begin{align}
[S_{z}] & =Tr(S_{z}\rho) \\
 & = Tr\left(\begin{pmatrix}
a  &  c \\
-c^{*} & a-1
\end{pmatrix}\right) \\
 & = 2a-1
\end{align}$$
Then the density matrix is:
$$\rho=\begin{pmatrix}
\frac{[S_{z}]+1}{2} & \frac{[S_{x}]-i[S_{y}]}{2} \\
 \frac{[S_{x}]+i[S_{y}]}{2} & \frac{1-[S_{z}]}{2}
\end{pmatrix}$$
# Sakurai 3.11
## (a)

We have:
$$\begin{align}
\rho(t) & = \sum_{j}p_{j}\ket{\psi_{j}(t)} \bra{\psi_{j}(t)}  \\
 & = \sum_{j }p_{j}\mathscr{U}(t,t_{0})\ket{\psi_{j}(t_{0})}  \bra{\psi_{j}(t_{0})} \mathscr{U}^{\dagger}(t,t_{0}) \\
 & = \mathscr{U}(t,t_{0})\rho(t_{0})\mathscr{U^{\dagger}}(t,t_{0})
\end{align}$$
## (b)

Know that the ensemble is pure if and only if $\rho^{2}=\rho$. Then if $\rho(t_{0})=\ket{\psi(t_{0})}\bra{\psi(t_{0})}$ is pure, we have:
$$\rho(t)=\mathscr{U}^{\dagger}(t,t_{0})\rho(t_{0})\mathscr{U}(t,t_{0})$$
$$\begin{align}
\rho^{2}(t) & = \mathscr{U}^{\dagger}(t,t_{0}) \rho(t_{0})\mathscr{U}(t,t_{0})\mathscr{U}^{\dagger}(t,t_{0})\rho(t_{0}) \mathscr{U}(t,t_{0}) \\
 & = \mathscr{U}^{\dagger}(t,t_{0})\rho^{2}(t_{0})\mathscr{U}(t,t_{0}) \\
 & = \mathscr{U}^{\dagger}(t,t_{0})\ket{\psi(t_{0})} \bra{\psi(t_{0})} \mathscr{U}(t,t_{0}) \\
 & = \rho(t)
\end{align}$$
Then the ensemble is still pure.
# Sakurai 3.29

We have that:
$$\begin{align}
 & \tilde{V}_{q}^{(1)}=\sum_{q^{'}}d_{qq^{'}}^{(1)}(\beta)V_{q^{'}}^{(1)} \\
\implies & \begin{pmatrix}
\tilde{V}_{1}^{(1)} \\
\tilde{V}_{0}^{(1)} \\
\tilde{V}_{-1}^{(1)}
\end{pmatrix}= \begin{pmatrix}

\cos ^{2} \frac{\beta}{2} & -\sqrt{ 2 }\sin \frac{\beta}{2}\cos \frac{\beta}{2} & \sin ^{2} \frac{\beta}{2} \\
\sqrt{ 2 }\sin \frac{\beta}{2}\cos \frac{\beta}{2} & \cos \beta & -\sqrt{ 2 }\sin \frac{\beta}{2}\cos \frac{\beta}{2} \\
\sin ^{2} \frac{\beta}{2} & \sqrt{ 2 }\sin  \frac{\beta}{2}\cos \frac{\beta}{2} & \cos ^{2} \frac{\beta}{2}
\end{pmatrix}\begin{pmatrix}
V_{1}^{(1)} \\
V_{0}^{(1)} \\
V_{-1}^{(1)}
\end{pmatrix}
\end{align}$$
Know that:
$$\begin{pmatrix}
V_{1}^{(1)} \\ V_{0 }^{(1)}\\

V_{-1}^{(1)} 
\end{pmatrix}=\begin{pmatrix}
- \frac{1}{\sqrt{ 2 }} & - \frac{i}{\sqrt{ 2 }} & 0 \\
0 & 0 & 1 \\
\frac{1}{\sqrt{ 2 }} & - \frac{i}{\sqrt{ 2 }} & 0
\end{pmatrix}\begin{pmatrix}
V_{x} \\
V_{y} \\
V_{z}
\end{pmatrix}=P \begin{pmatrix}
V_{x} \\
V_{y} \\
V_{z}
\end{pmatrix}$$
Then:
$$\begin{pmatrix}
\tilde{V}_{x} \\
\tilde{V}_{y} \\
\tilde{V}_{z}
\end{pmatrix}=P^{-1}\begin{pmatrix}
\tilde{V}_{1}^{(1)} \\
\tilde{V}_{0}^{(1)} \\
V_{-1}^{(1)}
\end{pmatrix}=P^{-1}d^{(1)}\begin{pmatrix}
V_{1}^{(1)} \\
V_{0}^{(1)} \\
V_{-1}^{(1)}
\end{pmatrix}=P^{-1}d^{(1)}P \begin{pmatrix}
V_{x} \\
V_{y} \\
V_{z}
\end{pmatrix}$$
Then it suffices to show:
$$P^{-1}d^{(1)}P=R_{\hat{y}}(\beta)=\begin{pmatrix}
\cos \beta & 0 & \sin \beta \\
0 & 1 & 0 \\
-\sin \beta & 0 & \cos \beta
\end{pmatrix}$$
We have that:
$$P^{-1}=\begin{pmatrix}
- \frac{1}{\sqrt{ 2 }} & 0 &  \frac{1}{\sqrt{ 2 }} \\
\frac{i}{\sqrt{ 2 }} & 0  & \frac{i}{\sqrt{ 2 }} \\
0 & 1 & 0
\end{pmatrix}$$
Then:
$$\begin{align}
P^{-1}d^{(1)}P & = P^{-1} \begin{pmatrix}
- \frac{\cos \beta}{\sqrt{ 2 }} & - \frac{i}{\sqrt{ 2 }} & - \frac{\sin \beta}{\sqrt{ 2 }} \\
-\sin \beta & 0 & \cos \beta \\
\frac{\cos \beta}{\sqrt{ 2 }} & - \frac{i}{\sqrt{ 2 }} &  \frac{\sin \beta}{\sqrt{ 2 }}
\end{pmatrix} \\
 & = \begin{pmatrix}
\cos \beta & 0 & \sin \beta \\
0 & 1 & 0 \\
-\sin \beta & 0 & \cos \beta
\end{pmatrix}
\end{align}$$
# Sakurai 3.32
## (a)

By looking up the spherical harmonics table and doing the substitution, I have:
$$\begin{align}
 & T^{(2)}_{0}= \frac{1}{2}(3z^{2}-r^{2}) \\
 & T^{(2)}_{-1}= \sqrt{ \frac{3}{2} }z(x-iy) \\
 & T^{(2)}_{-2}= \sqrt{ \frac{3}{8} }(x-iy)^{2} \\
 & T^{(2)}_{1}=- \sqrt{ \frac{3}{2} }z(x+{iy} 
) \\ & 
T^{(2)}_{2}= \sqrt{ \frac{3}{8} }(x+{iy}^{})^{2} 
\end{align}$$
Then it's easy to solve that:
$$xy= \frac{i}{\sqrt{ 6 }}(T^{(2)}_{-2}-T^{(2)}_{2}),\ xz= \frac{1}{\sqrt{ 6 }}(T^{(2)}_{-1}-T^{(2)}_{1}),\ x^{2}-y^{2}= \frac{2}{\sqrt{ 6 }}T^{(2)}_{-2}+ \frac{2}{\sqrt{ 6 }}T^{(2)}_{2}$$
## (b)

We want:
$$\begin{align}
e\langle \alpha,j,m^{'}|(x^{2}-y^{2})\ket{\alpha,j,m=j}  & = \frac{2}{\sqrt{ 6 }}e[\bra{\alpha,j,m^{'}}T^{(2)}_{-2}\ket{\alpha,j,m=j} + \bra{\alpha,j,m^{'}} T^{(2)}_{2} \ket{\alpha,j,m=j}  ] \\
 & = \frac{2}{\sqrt{ 6 }}eC[\bra{m=j,-2} j,m^{'}\rangle+ \bra{m=j,2} j,m^{'}\rangle] \\
 
\end{align}$$
where $C$ is a constant independent of $m,m^{'}$ by Wigner-Eckart theorem.

We have that:
$$\begin{align}
Q & = e\bra{\alpha,j,m=j} (3z^{2}-r^{2})\ket{\alpha,j,m=j}  \\
 & = 2e \bra{\alpha,j,m=j} T^{(2)}_{0}\ket{\alpha,j,m=j}  \\
 & = 2eC\bra{m=j,0} j,m=j\rangle \\
\end{align}$$
Then:
$$e\bra{\alpha,j,m^{'}} (x^{2}-y^{2})\ket{\alpha,j,m=j} = \frac{Q}{\sqrt{ 6 }\bra{m=j,0} j,m=j\rangle}[\bra{m=j,-2} j,m^{'}\rangle+\bra{m=j,2} j,m^{'}\rangle]$$

