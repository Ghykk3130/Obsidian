# 1.

The image I generated:
![[Pasted image 20260127172146.png|center|500]]
The WS primitive unit cell is marked by blue in the picture. The Rhombic primitive unit cell is marked by red in the picture.

The primitive vectors I used are: 
$$\vec{a}_{1}=(2,0),\ \vec{a}_{2}=(1,\sqrt{ 3 })$$
The bases I used are:
$$\vec{b}_{1}=(1,0),\ \vec{b}_{2}= \left( \frac{1}{2}, \frac{\sqrt{ 3 }}{2} \right),\ \vec{b}_{3}=\left( \frac{3}{2}, \frac{\sqrt{ 3 }}{2} \right)$$
# 2.

![[Pasted image 20260125235435.png|center|300]]
We have:
$$\begin{align}
\vec{a}_{1}= \frac{a}{2}(\hat{x}+\hat{y}-\hat{z}),\ \vec{a}_{2}= \frac{a}{2}(\hat{x}-\hat{y}+\hat{z})
\end{align}$$
Then:
$$\begin{align}
\theta & = \arccos\left(\frac{\vec{a}_{1}\cdot \vec{a}_{2}}{|\vec{a}_{1}||\vec{a}_{2}|}\right) \\
 & = \arccos\left(  \frac{- \frac{a^{2}}{4}}{ \frac{a}{2}\sqrt{ 3 }\cdot \frac{a}{2}\sqrt{ 3 }} \right) \\
 & = \arccos\left( - \frac{1}{3} \right) \approx 109.47 ^{\circ}
\end{align}$$
# 3.

Consider an hpc lattice. Between its first and second layer, the structure is as follow:
![[Drawing 2026-01-26 00.57.47.excalidraw|center|300]]
Since the hpc structure repeats itself every two layers, we have that $c=2h$. It's easy to compute $h$:
$$\begin{align}
h & = a^{2}- \left( \frac{a}{\sqrt{ 3 }} \right)^{2}= \frac{\sqrt{ 2 }}{\sqrt{ 3 }}a
\end{align}$$
Then:
$$\frac{c}{a}= \frac{2 \frac{\sqrt{ 2 }}{\sqrt{ 3 }}a}{a}=\left( \frac{8}{3} \right)^{1/2}$$
# 4.
## (a).
It is a Bravais lattice. The primitive vectors are:
$$\vec{a}_{1}= \frac{a}{2}(\hat{x}+\hat{y}),\ \vec{a}_{2}= \frac{a}{2}(-\hat{x}+\hat{y}),\ \vec{a}_{3}= a\hat{z}$$
## (b).
This is not a Bravais lattice. We choose the primitive vectors:
$$\vec{a}_{1}= a\hat{x},\ \vec{a}_{2}=a\hat{y},\ \vec{a}_{3}=a\hat{z}$$
The bases are:
$$\vec{b}_{1}=0,\ \vec{b}_{2}=\frac{a}{2}(\hat{x}+\hat{z}),\ \vec{b}_{3}=\frac{a}{2}(\hat{y}+\hat{z})$$
## (c).
This is not a Bravais lattice. We choose the primitive vectors:
$$\vec{a}_{1}=a\hat{x},\ \vec{a}_{2}=a\hat{y},\ \vec{a}_{3}=a\hat{z}$$
The bases are:
$$\vec{b}_{1}=0,\ \vec{b}_{2}=\frac{a}{2}\hat{x},\ \vec{b}_{3}= \frac{a}{2}\hat{y},\ \vec{b}_{4}= \frac{a}{2}\hat{z}$$
# 5.
## (a).
The volume is:
$$V=|\vec{a}_{3}\cdot(\vec{a}_{1} \times \vec{a}_{2})|= |\vec{a}_{3}\cdot a^{2} \frac{\sqrt{ 3 }}{2}\hat{z}|= \frac{\sqrt{ 3 }}{2}a^{2}c$$
## (b).
We have: 
$$\begin{align}
 & \vec{b}_{1} = \frac{\vec{a}_{2}\times \vec{a}_{3}}{V} 2\pi= \frac{1}{V}2\pi\left(  \frac{ac}{2}\hat{x}+ \frac{\sqrt{ 3 }}{2}ac\hat{y} \right)= \frac{2\pi}{\sqrt{ 3 }a}\hat{x}+ \frac{2\pi}{a}\hat{y} \\
 & \vec{b}_{2}= \frac{\vec{a}_{3}\times \vec{a}_{1}}{V}2\pi = \frac{1}{V}2\pi\left( - \frac{ac}{2}\hat{x}+\frac{\sqrt{ 3 }}{2}ac\hat{y}  \right)=- \frac{2\pi}{\sqrt{ 3 }a}\hat{x}+\frac{2\pi}{a}\hat{y} \\
 & \vec{b}_{3}= \frac{\vec{a}_{1}\times \vec{a}_{2} }{V}2\pi= \frac{1}{V}2\pi \frac{\sqrt{ 3 }}{2}a^{2}\hat{z}= \frac{2\pi}{c}\hat{z}
\end{align}$$
Then it's obvious that $\vec{b}_{1}$ is $\vec{a}_{1}$ stretched and rotated by $\frac{\pi}{6}$ counterclockwise around the z axis. $\vec{b}_{2}$ is $\vec{a}_{2}$ stretched and rotated $\frac{\pi}{6}$ clockwise around the z axis. $\vec{b}_{3}$ is just $\vec{a}_{3}$ stretched. Therefore, the projection of the reciprocal lattice onto the xy plane is still a hexagonal lattice, with parameter $\frac{4\pi}{\sqrt{ 3 }a}$.
# 5.

WLOG, assume that $\vec{a}_{1},\vec{a}_{2},\vec{a}_{3}$ is chosen in a right-handed way. Then:
$$\begin{align}
\vec{b}_{1}\times \vec{b}_{2} & = \frac{2\pi \vec{a}_{2}\times \vec{a}_{3}}{V_{c}}\times \frac{2\pi \vec{a}_{3}\times \vec{a}_{1}}{V_{c}} \\
 & = \left( \frac{2\pi}{V_{c}} \right)^{2}[((\vec{a}_{2}\times \vec{a}_{3})\cdot \vec{a}_{1})\vec{a}_{3}-((\vec{a}_{2}\times \vec{a}_{3})\cdot \vec{a}_{3})\vec{a}_{1}] \\
 & = \left( \frac{2\pi}{V_{c}} \right)^{2}((\vec{a}_{2}\times \vec{a}_{3})\cdot \vec{a}_{1})\vec{a}_{3} \\
 & = \frac{(2\pi)^{2}}{V_{c}}\vec{a}_{3}
\end{align}$$
Then:
$$\begin{align}
\vec{b}_{3}\cdot(\vec{b}_{1}\times \vec{b}_{2}) & = \frac{(2\pi)^{2}}{V_{c}}\vec{a}_{3}\cdot \frac{2\pi \vec{a}_{1}\times \vec{a}_{2}}{V_{c}} \\
 & = \frac{(2\pi)^{3}}{V_{c}}
\end{align}$$


