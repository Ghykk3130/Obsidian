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
The the shifted fringe position is:
$$\begin{align}
y_{m}^{'} & = D \tan \theta \\
 & \approx \frac{m\lambda+t-nt}{d}
\end{align}$$
The corresponding displacement is:
$$\begin{align}
\frac{(n-1)t}{d} & \approx 8.67\text{ mm}
\end{align}$$
## (d)

The central fringe shifts toward the unblocked slit. Since the in part (c), the path length of the blocked slit is $d\sin t\theta+nt-t$ more than the unblocked slit. It is clear from $y^{'}_{m}= \frac{m\lambda+t-nt}{d}$ that the $y^{'}_{m}$ gets smaller, since $t-nt<0$.
# Question 3
## (a)

The reflection of the beam first incident on the soap experiences a $\pi$ phase shift. 

For the second reflected beam, the path length difference is $2tn+ \frac{\lambda}{2}$. 

Then for constructive interference, we have:
$$\begin{align}
 & 2tn+ \frac{\lambda}{2}= m\lambda \\
\implies & t= \frac{\left( m- \frac{1}{2} \right)\lambda}{2n}
\end{align}$$
For destructive interference, we have:
$$\begin{align}
 & 2tn+ \frac{\lambda}{2}=\left( m+ \frac{1}{2} \right)\lambda \\
\implies & t= \frac{m\lambda}{2n}
\end{align}$$
## (b)

We find that:
$$\begin{align}
\lambda & = \frac{2nt}{m- \frac{1}{2}} = \frac{831}{m- \frac{1}{2}}\text{ nm}
\end{align}$$
Then since $400< \lambda<700$, we must take $m=2$. Then $\lambda= 553\text{ nm}$.
## (c)

We find that:
$$\lambda= \frac{2nt}{m}= \frac{831}{m}\text{ nm}$$
Then since $400<\lambda<700$, we must take $m=2$. Then $\lambda= 415.5\text{ nm}$.
## (d)

We have:
$$\begin{align}
t= \frac{\left( m- \frac{1}{2} \right)\lambda}{2n}
\end{align}$$
We take $m=1$. Then:
$$\begin{align}
t\approx 103.38\text{ nm}
\end{align}$$
# Question 4
## (a)

We have:
$$\begin{align}
d & = 2h= 1.6\text{ mm}
\end{align}$$
The bright fringes are given by:
$$\begin{align}
 & d\sin \theta+ \frac{\lambda}{2}= m\lambda 
\end{align}$$
Then:
$$\begin{align}
y_{m} & = D\tan {\theta} \\
 & \approx \frac{D}{d}\left( m- \frac{1}{2} \right)\lambda
\end{align}$$
Then the spacing is:
$$\begin{align}
\Delta y= \frac{D\lambda}{d}= 562.5\ \mu\text{m}
\end{align}$$
## (b)

The optical path length difference is introduced solely by reflection. It is $\frac{\lambda}{2}$. Therefore the center is dark.
## (c)

We already have:
$$y_{m}= \frac{D}{d}\left( m- \frac{1}{2} \right)\lambda$$
The first three bright fringes are at:
$$\begin{align}
y_{1} & = \frac{D\lambda}{2d}= 281.25\ \mu\text{m} \\
y_{2} & = y_{1}+\Delta y= 843.75\ \mu\text{m} \\
y_{3} & = y_{2}+\Delta y= 1406.25\ \mu\text{m}
\end{align}$$
## (d)

The positions of the bright and dark fringes change. But the fringe spacing is not changed.
# Question 5
## (a)

![[fa9eebf93978e6c0248a14a7d65a7dc9.jpg|centering|300]]
By symmetry, we first consider one side. Consider a paraxial beam at $\theta$. Then the height of P on the prism is $a \tan \theta \approx a\theta$. The beam is bent by $\gamma$. Therefore the height difference between S1 and P is:
$$|h_{S_{1}}-h_{P}|= a \tan(\theta-\gamma)\approx a(\theta-\gamma)$$
Then:
$$\begin{align}
h_{S_{1}}= h_{P}-a(\theta-\gamma)=a\theta-a(\theta-\gamma)= a\gamma
\end{align}$$
This is independent of $\theta$, meaning that all light converge at S1. By symmetry, the location of S2 is $a\gamma$ below. Then we have two coherent sources. The separation is:
$$\begin{align}
d & = 2a\gamma \approx 2.182\text{ mm}
\end{align}$$
## (b)

We have:
$$\begin{align}
\Delta y & = \frac{(a+b)\lambda}{d} \\
 & \approx 337.6\ \mu\text{m}
\end{align}$$
## (c)

We have:
$$\begin{align}
\lambda & = \frac{d\Delta y}{(a+b)} \\
 & \approx 590\text{ nm}
\end{align}$$
## (d)

The two virtual sources are mutually coherent because they are virtual images of the same light source. Therefore, the waves originating from them maintain a constant phase relationship, even though the virtual sources are spatially separated.
# Question 6

We define:
$$\begin{align}
 & r= \frac{E_{r_{1}}}{E_{i_{1}}},\ t= \frac{E_{t_{2}}}{E_{i_{1}}} \\
 & r^{'}= \frac{E_{r_{2}}}{E_{i_{2}}},\ t^{'}= \frac{E_{t_{1}}}{E_{i_{2}}}
\end{align}$$
where $E_{r_{1}}, E_{i_{1}}$ are the reflected and incident field amplitude in medium 1, $E_{r_{2}},E_{i_{2}}$ are the reflected and incident field amplitude in medium 2.
## (a)

Consider an incident beam. Then:
$$E_{r_{1}}=rE_{i_{1}},\ E_{t_{2}}=tE_{i_{1}}$$
Now reverse the direction. We have:
$$\begin{align}
 & E_{t_{1}}=t^{'}E_{t_{2}}+r E_{r_{1}}=t^{'}tE_{i_{1}}+r^{2}E_{i_{1}} \\
 & E_{r_{2}}=r^{'}E_{t_{2}}+tE_{t_{1}}=r^{'}tE_{i_{1}}+trE_{i_{1}}
\end{align}$$
Due to light reversibility, we must have:
$$\begin{align}
 & t^{'}tE_{i_{1}}+r^{2}E_{i_{1}}=E_{i_{1}}\implies t^{'}t=1-r^{2} \\
 & r^{'}tE_{i_{1}}+trE_{i_{1}}=0\implies r^{'}t+tr=0\implies r^{'}=-r
\end{align}$$
## (b)

For normal incidence, we have:
$$\begin{align}
r^{'} & = \frac{n_{2}-n_{1}}{n_{2}+n_{1}} \\
t^{'} & = \frac{2n_{2}}{n_{1}+n_{2}}
\end{align}$$
Then:
$$\begin{align}
tt^{'} & = \frac{4n_{1}n_{2}}{(n_{1}+n_{2})^{2}} \\
 & = \frac{(n_{1}+n_{2})^{2}-(n_{1}-n_{2})^{2}}{(n_{1}+n_{2})^{2}} \\
 & = 1- \left(  \frac{n_{1}-n_{2}}{n_{1}+n_{2}} \right)^{2} \\
 & = 1- r^{2}
\end{align}$$
$$\begin{align}
r^{'} & = \frac{n_{2}-n_{1}}{n_{2}+n_{1}} \\
 & = - \frac{n_{1}-n_{2}}{n_{1}+n_{2}} \\
 & = -r
\end{align}$$
## (c)

If $n_{2}>n_{2}$, then $r<0$. This means that the sign of the amplitude changes. This is effectively introducing a $\pi$ phase shift. It is the external reflection carries the phase shift, because light shoots from air into some medium with higher refraction index.
## (d)

Because if we are going from a medium with higher $n$ into a medium with lower $n$, we do not have the sign flip, so that we do not have the phase shift.
# Question 7

## (a)

The light traverses the cell twice because in one arm of the Michelson interferometer, you have a mirror to do reflection. That means light going through would eventually come back. 

The change in OPL is:
$$\begin{align}
\Delta\text{OPL} & = 2(n-n_{0})L
\end{align}$$
## (b)

If there are $N$ fringes pass, then:
$$\begin{align}
2(n-n_{0})L & = N\lambda \\
\implies N=  & \frac{2(n_{}-n_{0})L}{\lambda}
\end{align}$$
## (c)

Take $n_{0}=1,\ L=5\text{ cm},\ \lambda=632.8\text{ nm},\ N=42$, we get:
$$n\approx 1.000266$$
## (d)

Know that:
$$\begin{align}
n & = \frac{N\lambda}{2L}+n_{0}
\end{align}$$
Then:
$$\begin{align}
\delta n & = \frac{\lambda}{2L}\delta N \\
 & \approx \pm 6.328\times 10^{-6}
\end{align}$$
# Question 8
## (a)

This is because of beating phenomenon. the two waves have slightly different wavelengths, so their relative phase changes slowly as the optical path difference varies, producing a slowly varying envelope.
## (b)

Let $\lambda_{1},\lambda_{2}$ be the wavelengths corresponding to the two beams. Then the phase shift for beam 1 is:
$$\begin{align}
\frac{2\pi}{\lambda_{1}}\cdot{2}D
\end{align}$$
The phase shift for beam 2 is:
$$\frac{2\pi}{\lambda_{2}}\cdot 2D$$
So there phase difference accumulation is:
$$\begin{align}
\frac{2\pi}{\lambda_{1}}\cdot 2D- \frac{2\pi}{\lambda_{2}}\cdot 2D & = 4\pi D\left(  \frac{1}{\lambda_{1}}- \frac{1}{\lambda_{2}} \right)
\end{align}$$
Since we observe max $\rightarrow$ min $\rightarrow$ max pattern, this means that the phase difference accumulation is $2\pi$. So:
$$\begin{align}
 & 4\pi D\left(  \frac{1}{\lambda_{1}}- \frac{1}{\lambda_{2}} \right)=2\pi \\
\implies & \frac{\Delta \lambda}{\lambda^{2}}\approx \frac{1}{2D} \\
\implies & \Delta \lambda \approx \frac{\lambda^{2}}{2D}
\end{align}$$
## (c)

Set $D=0.289\text{ mm},\ \lambda=589.3\text{ nm}$, we get:
$$\begin{align}
\Delta \lambda \approx 0.601\text{ nm}
\end{align}$$
## (d)

For ordinary fringes, it's just the regular Michelson interferometer application. So we have:
$$\begin{align}
N & = \frac{2D}{\lambda} \\
 & \approx 981
\end{align}$$
This means that we have one envelope brightness change every $981$ ordinary changes. This means that we need to move a lot to see a small wavelength distance. Then we are capable of observing very fine wavelength splittings. 
# Question 9
## (a)

We have:
$$\begin{align}
E & = \sum_{n=0}^{N}E_{0}e^{in\delta} \\
 & = \frac{E_{0}-E_{0}e^{i(N+1)\delta}}{1-e^{i\delta}} \\
 & = \frac{e^{i \frac{N+1}{2}\delta}E_{0}\left( e^{-i \frac{N+1}{2}\delta}-e^{i \frac{N+1}{2}\delta} \right)}{e^{i \frac{\delta}{2}}\left( e^{-i \frac{\delta}{2}}-e^{i \frac{\delta}{2}} \right)} \\
 & = e^{i \frac{N}{2}\delta} E_{0} \frac{\sin }{}
\end{align}$$



