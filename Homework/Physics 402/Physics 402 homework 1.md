  # Question 1

For $400\ nm$, we have:
$$\begin{align}
E & = \frac{hc}{\lambda}\approx \frac{6.63\times 10^{-34}\times 3\times 10^{8}}{400\times 10^{-9}\times 1.6 \times 10^{-19}}\approx 3.11\ eV
\end{align}$$
For $1000\ nm$, we have:
$$E= \frac{hc}{\lambda}\approx \frac{6.63 \times 10^{-34}\times 3 \times 10^{8}}{1000\times 10^{-9}\times 1.6 \times 10^{-19}}\approx 1.24\ eV$$
For $12\ \mu m$, we have:
$$\begin{align}
E= \frac{hc}{\lambda}\approx \frac{6.63 \times 10^{-34}\times 3 \times 10^{8}}{12\times 10^{-6}\times 1.6 \times 10^{-19}}\approx 0.104\ eV
\end{align}$$
For $1\ cm$, we have:
$$E= \frac{hc}{\lambda}\approx \frac{6.63 \times 10^{-34}\times 3 \times 10^{8}}{1\times 10^{-2}\times 1.6 \times 10^{-19}}\approx 1.24\times 10^{-4}\ eV$$
# Question
## 1)

Take a spherical surface centered around the light source. The total power flowing through the surface is $250\ W$. The solid angle is $4\pi$. Since the power is radiated in a uniform way, we have:
$$I_{e}= \frac{250}{4\pi}\approx 19.89\ W / \text{sr}$$
## 2)

We have:
$$\begin{align}
M_{e} & = \frac{250}{5 \times 10^{-4}}= 5 \times 10^{5}\ W / m^{2}
\end{align}$$
## 3)

The power through the surface is:
$$\begin{align}
250 \times \frac{A}{4\pi R^{2}}
\end{align}$$
Then the irradiance is simply:
$$\begin{align}
E_{e} & = \frac{250 \times \frac{A}{4\pi R^{2}}}{A} \\
 & = \frac{250}{4\pi \times 1^{2} } \\
 & \approx 19.89\ W/ m^{2}
\end{align}$$
## 4)

The flux gets through would be:
$$\begin{align}
250 \times \frac{(2.5 \times 10^{-2})^{2}\pi}{4\pi \times 1^{2} } & = 0.0390625\ W
\end{align}$$
# Question 3
## 1)

The time it takes for light to travel through $x_{i}$ is $\frac{x_{i}}{\frac{c}{n_{i}}}= \frac{n_{i}x_{i}}{c}$. Then the corresponding optical path length is $n_{i}x_{i}$. Then the total optical path length is:
$$\sum_{i}n_{i}x_{i}$$
## 2)

By definition of the optical path length, which is just the effective distance traveled by light in the vacuum in the same amount of time as light travels through the media, the total time it takes to travel through the system is:
$$\begin{align}
t & = \frac{\text{OPL}}{c} \\
 & = \frac{1}{c}\sum_{i}n_{i}x_{i}
\end{align}$$
# Question 4

The first image is formed by the light coming out of the bubble and travels directly through the plane interface. Adopt the apparent depth formula to get:
$$\begin{align}
s_{1}= \frac{s}{n}\approx 3.33\ cm
\end{align}$$
The firs image is $3.33\ cm$ below the plane interface.

If the light first touches the spherical mirror and gets reflected back, and then pass through the plane interface, we get another image. To calculate the position of the image formed by the spherical mirror, we have:
$$\begin{align}
 & \frac{1}{7.5-5}+ \frac{1}{s_{2}^{'}}= - \frac{2}{-7.5} \\
\implies & s_{2}^{'}=-7.5\ cm
\end{align}$$
This is a virtual image. So the distance of this image to the plane interface is $7.5+7.5=15\ cm$. Then adopt the apparent depth formula again to get:
$$\begin{align}
s_{2}= \frac{15}{n}\approx 10\ cm
\end{align}$$
The second image is $10\ cm$ below the plane interface. 
# Question 5

Notice that there are four possibilities. 

If $R_{1}=5\ cm,\ R_{2}=10\ cm$, we have:
$$\begin{align}
 & \frac{1}{f}= \frac{1.5-1}{1}\left(  \frac{1}{5}- \frac{1}{10} \right) \\
\implies & f=20\ cm
\end{align}$$
![[8e2c3b8f1b998ab8049d9fe7ae5da82e.jpg|centering|200]]
If $R_{1}=-5\ cm,\ R_{2}=10\ cm$, we have:
$$\begin{align}
 & \frac{1}{f}= \frac{1.5-1}{1}\left( - \frac{1}{5}- \frac{1}{10} \right) \\
 \implies & f=- \frac{20}{3}\ cm\approx - 6.67\ cm
\end{align}$$
![[d32f010de2ae7f8a3e3506d6c998483b.jpg|centering|200]]
If $R_{1}= 5\ cm,\ R_{2}=-10\ cm$, we have:
$$\begin{align}
 &  \frac{1}{f}= \frac{1.5-1}{1}\left(  \frac{1}{5}+ \frac{1}{10} \right) \\
\implies & f= \frac{20}{3}\ cm\approx 6.67\ cm
\end{align}$$
![[ad8612a3d1862b585721dac97bacd1f4.jpg|centering|200]]
If $R_{1}=-5\ cm,\ R_{2}=-10\ cm$, we have:
$$\begin{align}
 &  \frac{1}{f}= \frac{1.5-1}{1}\left(  - \frac{1}{5}+ \frac{1}{10} \right) \\
\implies & f= -20\ cm
\end{align}$$
![[1ea34c77acda998ec15addc14c6432e8.jpg|centering|200]]

Since addition operation is commutative, the situation where the first lens has $|R_{1}|=10\ cm$, and the second lens has $|R_{2}|=5\ cm$ is repetitive. 
# Question 6

Let the separation between the lenses be $t$. We calculate the ABCD matrix:
$$\begin{align}
M & = \begin{pmatrix}
1 & 0 \\
- \frac{1}{f_{2}} & 1
\end{pmatrix} \begin{pmatrix}
1 & t \\
0 & 1
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
- \frac{1}{f_{1}} & 1
\end{pmatrix} \\
 & = \begin{pmatrix}
1 & 0 \\
- \frac{1}{f_{2}} & 1
\end{pmatrix} \begin{pmatrix}
1- \frac{t}{f_{1}} & t \\
- \frac{1}{f_{1}} & 1
\end{pmatrix} \\
 & = \begin{pmatrix}
1- \frac{t}{f_{1}}- \frac{1}{f_{1}} & t \\
- \frac{1}{f_{2}}\left( 1- \frac{t}{f_{1}} \right)- \frac{1}{f_{1}} & - \frac{t}{f_{2}} +1
\end{pmatrix}
\end{align}$$
We know that:
$$\begin{align}
\frac{1}{f} & = - C \\
 & = \frac{1}{f_{1}}+ \frac{1}{f_{2}}- \frac{t}{f_{1}f_{2}}
\end{align}$$

## 1)

Let $t=0,\ f_{1}=-5\ cm,\ f_{2}= 15\ cm$. We have:
$$\begin{align}
f & = -7.5\ cm
\end{align}$$
In this case, the order does not matter, since the expression is symmetric in $f_{1},f_{2}$. Due to the symmetry in the expression, interchanging  $f_{1},f_{2}$ wouldn't make a difference. 
## 2)

Let $t=8\ cm,\ f_{1}=-5\ cm,\ f_{2}=15\ cm$. We have:
$$\begin{align}
f= -37.5\ cm
\end{align}$$
In this case, the order still doesn't matter, for that the expression is symmetric in $f_{1},f_{2}$. 
# Question 7
## 1)

We have:
$$\begin{align}
 &  \frac{1}{s}+ \frac{1}{s ^{'}} = \frac{1}{f} \\
 & s+ s ^{'}=L
\end{align}$$
Then we have:
$$\begin{align}
 & \frac{1}{s}+ \frac{1}{L-s}= \frac{1}{f} \\
\implies & (L-s +s)f=s(L-s) \\
\implies & s^{2}-Ls+Lf =0
\end{align}$$
Know that $s_{1}+s_{2}=L,\ s_{1}s_{2}=Lf$. Then:
$$\begin{align}
 & |s_{1}-s_{2} |= \sqrt{ (s_{1}+s_{2})^{2}-4s_{1}s_{2} }= \sqrt{ L(L-4f) }=D \\
\implies & f= \frac{L^{2}-D^{2}}{4L}
\end{align}$$
## 2)

If $L< 4f$, we have:
$$\begin{align}
L^{2}-4Lf <0
\end{align}$$
Then the quadratic equation has no real solution. Therefore no image could be formed. 
## 3)

We have:
$$\begin{align}
\delta f & = \frac{\partial f}{\partial L}\delta L+ \frac{\partial f}{\partial D}\delta D \\
 & = \left(  \frac{1}{4}+ \frac{D^{2}}{4L^{2}} \right)\delta L - \frac{D}{2L}\delta D
\end{align}$$
Then:
$$\begin{align}
\sigma_{f}= \sqrt{ \left(  \frac{1}{4}+ \frac{D^{2}}{4L^{2}} \right)^{2} \sigma_{L}^{2}+ \frac{D^{2}}{4L^{2}}\sigma_{D}^{2} }
\end{align}$$
If $L \approx 4f$, then $D\approx 0$. Then the error in $\sigma_{f}$ would just be:
$$\begin{align}
\sigma_{f}\approx \sqrt{ \left(  \frac{1}{4} \right)^{2} \sigma_{L}^{2} }
\end{align}$$
It is smaller than when $D\neq 0$.  So $L \approx 4f$ is better.
# Question 8
## 1)

Obviously, the system matrix is a composition of a translation, a thin lens refraction, and then a translation. We have:
$$\begin{align}
M & = \begin{pmatrix}
1 & 15 \\
0 & 1
\end{pmatrix}  \begin{pmatrix}
1 & 0 \\
- \frac{1}{10} & 1
\end{pmatrix} \begin{pmatrix}
1 & 30 \\
0 & 1
\end{pmatrix} \\
 & = \begin{pmatrix}
1 & 15 \\
0 & 1
\end{pmatrix}\begin{pmatrix}
1 & 30 \\
- \frac{1}{10} & - 2
\end{pmatrix} \\
 & = \begin{pmatrix}
- \frac{1}{2} & 0 \\
- \frac{1}{10} & - 2
\end{pmatrix}
\end{align}$$
## 2)

$B=0$ just means that the input and output planes are conjugate to each other. Since the final height is independent of the incident angle. If light is emitted from a source on the input plane, it would converge on the output plane.  

$A$ in this case is the linear magnification. We have $y^{'}=Ay$ in this case. 
# Question 9

Since the radius is $10\ cm$, the system matrix is a translation sandwiched between two refractions.

We compute:
$$\begin{align}
M & =  \begin{pmatrix}
1 & 0 \\
- \frac{1}{10}\left(  \frac{1.5}{1}-1 \right) & 1.5
\end{pmatrix}   \begin{pmatrix}
1 & 20 \\
0 & 1
\end{pmatrix}  \begin{pmatrix}
1 & 0 \\
 \frac{1}{10}\left(  \frac{1}{1.5}-1 \right)
 & \frac{1}{1.5}\end{pmatrix}  \\
 & = \begin{pmatrix}
1 & 0 \\
- \frac{1}{20} & \frac{3}{2}
\end{pmatrix} \begin{pmatrix}
1 & 20 \\
0 & 1
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
- \frac{1}{30} & \frac{2}{3}
\end{pmatrix} \\
 & = \begin{pmatrix}
1 & 0 \\
- \frac{1}{20} & \frac{3}{2} 
\end{pmatrix}\begin{pmatrix}
\frac{1}{3} & \frac{40}{3} \\
- \frac{1}{30} & \frac{2}{3}
\end{pmatrix} \\
 & = \begin{pmatrix}
\frac{1}{3} & \frac{40}{3} \\
- \frac{1}{15} & \frac{1}{3}
\end{pmatrix}\end{align}$$
We first find the distance between the focal point and the input plane:
$$p= \frac{D}{C}=-5\ cm$$
Then we find the focal length:
$$f_{1}= \frac{1}{C}= -15\ cm$$
Therefore the distance between the left principal point and the input plane is $|-15-(-5)|=10\ cm$. Since the first focal point is to the left of the input plane, clearly the left principal point is to the right of the input plane. It is at the center of the ball. By symmetry, the second principal point should also be located at the center of the ball. 

## 2)

For sunlight, the image formed by the effective system is at the focal point: $- \frac{1}{C}= 15\ cm$ away from the second principal point. Obviously $f_{1}=f_{2}$ since the system is spherically symmetric. Since the second principal point is at the center of the ball, and the ball radius is $10\ cm$, the sunlight would be focused $5\ cm$ to the ball surface.
# Question 10
## 1)
$$\begin{align}
M & = \begin{pmatrix}
1 & 0 \\
\frac{n_{L}-n^{'}}{n^{'}R_{2}} &  \frac{n_{L}}{n^{'}}
\end{pmatrix} \begin{pmatrix}
 1 & t \\
0 & 1
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
\frac{n-n_{L}}{n_{L}R_{1}} & \frac{n}{n_{L}}
\end{pmatrix} \\
 & = \begin{pmatrix}
 1 & 0 \\
\frac{n_{L}-n^{'}}{n^{'}R_{2}} & \frac{n_{L}}{n^{'}}
\end{pmatrix} \begin{pmatrix}
1+ t \frac{n-n_{L}}{n_{L}R_{1}} & t \frac{n}{n_{L}} \\
\frac{n-n_{L}}{n_{L}R_{1}} & \frac{n}{n_{L}}
\end{pmatrix} \\
 & = \begin{pmatrix}
1+ t \frac{n-n_{L}}{n_{L}R_{1}} & t \frac{n}{n_{L}} \\
\left( 1+ t \frac{n-n_{L}}{n_{L}R_{1}}  \right) \frac{n_{L}-n^{'}}{n^{'}R_{2}}+ \frac{n_{L}}{n^{'}} \frac{n-n_{L}}{n_{L}R_{1}} & t \frac{n}{n_{L}} \frac{n_{L}-n^{'}}{n^{'}R_{2}}+ \frac{n}{n^{'}}
\end{pmatrix}
\end{align}$$
## 2)

We have that:
$$\begin{align}
\frac{1}{f_{1}} & = \frac{n^{'}}{n}C \\
 & = \frac{n^{'}}{n}\left[  \left( 1+t \frac{n-n_{L}}{n_{L}R_{1}} \right) \frac{n_{L}-n^{'}}{n^{'}R_{2}}+ \frac{n_{L}}{n^{'}} \frac{n-n_{L}}{n_{L}R_{1}} \right] \\
 & = \frac{n^{'}}{n}\left(  \frac{n_{L}-n^{'}}{n^{'}R_{2}} + \frac{n-n_{L}}{n^{'}R_{1}}+ t \frac{(n-n_{L})(n_{L}-n^{'})}{n^{'}n_{L}R_{1}R_{2}}\right) \\
 & = \frac{n_{L}-n^{'}}{n^{}R_{2}}- \frac{n_{L}-n}{nR_{1}}- \frac{(n_{L}-n^{'})(n_{L}-n)}{n^{}n_{L}} \frac{t}{R_{1}R_{2}}
\end{align}$$
We also have:
$$\begin{align}
f_{2} & =- \frac{1}{C} \\
 & = - \frac{n^{'}}{n}f_{1}
\end{align}$$

