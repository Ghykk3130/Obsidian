# Question 1
## (a)

Assume $I_{1}$ corresponds to $\mathbf{E}_{1}e^{i\omega t}$. $I_{2}$ corresponds to $\mathbf{E}_{2}e^{i\omega t+\delta}$. Then:
$$\begin{align}
\mathbf{E} & = \mathbf{E}_{1}e^{i\omega t}+\mathbf{E}_{2}e^{i\omega t+i\delta}
\end{align}$$
Then:
$$\begin{align}
I & = \frac{\epsilon_{0}}{2}E^{2} \\
 & = \frac{\epsilon_{0}}{2}(\mathbf{E}_{1}e^{-i\omega t}+\mathbf{E}_{2}e^{-i\omega t-i\delta} )\cdot(\mathbf{E}_{1}e^{i\omega t}+\mathbf{E}_{2}e^{-i\omega t+i\delta}) \\
 & = \frac{\epsilon_{0}}{2}(E_{1}^{2}+E_{2}^{2}+\mathbf{E}_{1}\cdot \mathbf{E}_{2} e^{-i\delta}+\mathbf{E}_{1}\cdot \mathbf{E}_{2}e^{i\delta}) \\
 & = \frac{\epsilon_{0}}{2}(E_{1}^{2}+E_{2}^{2}+2\mathbf{E}_{1}\cdot \mathbf{E}_{2}\cos\delta)
\end{align}$$
Assume that the polarization vectors are parallel. Then $E_{1}= \sqrt{ \frac{2I_{1}}{\epsilon_{0}} },\ E_{2}=\sqrt{ \frac{2I_{2}}{\epsilon_{0}} },\ \mathbf{E}_{1}\cdot \mathbf{E}_{2}=E_{1}E_{2}$. Then:
$$\begin{align}
I & = I_{1}+I_{2}+2\sqrt{ I_{1}I_{2} }\cos\delta
\end{align}$$
## (b)

Take $\delta=2\pi m,\ m\in \mathbb{Z}$, we get:
$$\begin{align}
I_{\text{max}}= I_{1}+I_{2}+2\sqrt{ I_{1}I_{2} }
\end{align}$$
Take $\delta=2\pi\left( m+ \frac{1}{2} \right),\ m\in \mathbb{Z}$, we get:
$$I_{\text{min}}=I_{1}+I_{2}-2\sqrt{ I_{1}I_{2} }$$
Then the visibility is given by:
$$\begin{align}
V & = \frac{I_{\text{max}}-I_{\text{min}}}{I_{\text{max}}+I_{\text{min}}} \\
 & = \frac{2\sqrt{ I_{1}I_{2} }}{I_{1}+I_{2}}
\end{align}$$
## (c)

For a maximum, we require a $2\pi$ phase difference. Then:
$$\begin{align}
\Delta\text{OPL}= \lambda= 632.8\text{ nm}
\end{align}$$
For a minimum, we require a $\pi$ phase difference. Then:
$$\Delta\text{OPL}= \frac{\lambda}{2}= 316.4\text{ nm}$$
## (d)

We want $I=I_{1}+I_{2}$. Then we must have $\cos\delta=0$. Then:
$$\begin{align}
\delta= \frac{\pi}{2}\text{ or } \frac{3\pi}{2}
\end{align}$$
# Question 2
## (a)

For bright fringes, we must have:
$$\begin{align}
d \sin \theta= \lambda m,\ m\in \mathbb{Z}
\end{align}$$
Then by geometry, it is clear that:
$$\begin{align}
y_{m} & = D\tan \theta \\
 & \approx D \sin \theta \\
 & = \frac{D}{d}\lambda m
\end{align}$$
Therefore, the spacing is:
$$\begin{align}
\Delta y & = \frac{ D\lambda}{d} \\
 & \approx 3.641\text{ mm}
\end{align}$$
## (b)

We calculate:
$$\begin{align}
y_{4} & = 4 \times \Delta y \\
 & \approx 14.564\text{ mm}
\end{align}$$
## (c)

If we add a glass, then the path length difference becomes $d\sin \theta+ nt-t$. Then:
$$\begin{align}
 d\sin \theta+nt-t= m\lambda
\end{align}$$
