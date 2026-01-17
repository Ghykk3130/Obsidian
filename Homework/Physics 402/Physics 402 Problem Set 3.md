# 1).
## a).
The image of the object is given by:
$$\begin{align}
 & \frac{1}{s_{o}}+ \frac{1}{s_{o}^{'}}= \frac{1}{f} \\
 & s_{o}= 12cm, f=5cm \\
\implies & s_{o}^{'}= \frac{60}{7}cm \\
\implies & m=- \frac{s_{o}^{'}}{s_{o}}= - \frac{5}{7} \\
\implies & h_{o}^{'}= mh_{o}= - \frac{10}{7}cm
\end{align}$$
So the image of the object is a real image located at $\frac{60}{7}cm$ to the right of the lens. The image is inverted with a height of $- \frac{10}{7}cm$.

Since the images of the diaphragm and the lens in the object space are all real, and the diaphragm subtends the smallest angle, we know that the diaphragm is the aperture stop. 

Then the entrance pupil is obviously the diaphragm itself, because there's no optics between the object and the diaphragm. 

The exit pupil is given by:
$$\begin{align}
 & \frac{1}{s_{p}}+ \frac{1}{s_{p}^{'}}= \frac{1}{f} \\
 & s_{p}=3cm,f=5cm \\
\implies & s_{p}^{'}=- \frac{15}{2}cm \\
\implies & m=- \frac{s_{p}^{'}}{s_{p}}=\frac{5}{2} \\
\implies & h_{p}^{'}=mh_{p}=5 cm
\end{align}$$
where $h_{p}$ is the diameter of the diaphragm. So the exit pupil is located at $\frac{15}{2}cm$ to the left of the lens, with a diameter of $5cm$. It is not inverted.

Since there are two elements in the optical system, the lens is obviously the field stop. 

The entrance window is can be calculated by similar triangle. Set the diameter of the entrance window as $d$. By simple geometry, we know that:
$$\frac{d}{12-3}=\frac{5}{3}\implies d=15cm$$

Therefore the entrance window is located at the object plane with a diameter of $15cm$. The exit window is the lens itself, since there's no optics between the lens and the output plane. 

Sketch:
<div style="text-align:center">
<img src="884776f337f1aa951c057554c7df6007.jpg" width="600">
</div>
Note that the sketch is purely schematic and not to scale.
## b).
Obviously, the image of the object is formed at exactly the same position with the same magnification as in a). Because the equations are the same. The image is at $\frac{60}{7}cm$ to the right of the lens, inverted, with a size of $\frac{10}{7}cm$.

Consider the image of the diaphragm in the object space:
$$\begin{align}
 & \frac{1}{s_{d}}+ \frac{1}{s_{d}^{'}}= \frac{1}{f} \\
 & s_{d}=2.5cm, f=5cm \\
\implies & s_{d}^{'}= -5 cm \\
\implies & m= - \frac{s_{d}^{'}}{s_{d}}=2 \\
\implies & h_{d}^{'} = mh_{d}=4cm
\end{align}$$
Since it subtends a smaller angle than the lens, it is the aperture stop. By the calculation above, the entrance pupil is located at $5cm$ to the right of the lens, not inverted, with a diameter of $4cm$. 

The exit pupil is obviously the diaphragm itself. 

Similarly, since there are only two elements in the optical system, the lens is the field stop. 

The entrance and exits windows are obviously the lens itself.

Sketch:
<div style="text-align:center">
<img src="21474e58f25eb52e43f782b50970770c.jpg" width="600">
</div>

# 2).
## a).
Set object distance as $s$. Then the image distance is $L-s$. Then I have:
$$\begin{align}
 & \frac{1}{s}+ \frac{1}{L-s}=\frac{1}{f} \\
 \implies & s^{2}-Ls+fL=0 \\
\implies  & s_{1}+s_{2}=-Ls,s_{1}s_{2}=fL \\
\implies & |s_{1}-s_{2}|=\sqrt{ (s_{1}+s_{2})^{2}-4s_{1}s_{2} }=\sqrt{ L^{2} -fL}=D \\
\implies & f= \frac{L^{2}-D^{2}}{4L}
\end{align}$$
Note that in the second step, I applied Vieta's formulas.
## b).
If $L<4f$, we cannot find any real images on the screen. This is because for the derivation in a). to hold, we require the quadratic equation to have real roots. This requires that:
$$L^{2}-4fL\geq {0}\implies L\geq 4f$$
If this is not satisfied, we don't have any real solutions of $s$.

## c).
It's better to have $L$ much larger than $f$. This is because if $L$ is large, then $D$ is large, which is evident from the equation in a). . Then the error in measuring the distances would be small. If $L \cong 4f$, then $D$ is almost zero and very hard to measure.

# 3).
Set the refractive index of the lens material to be $n_{2}$, the refractive index of the environment to be $n_{1}$. The radii of curvature of the front and back surfaces of the two lenses are denoted by $R_{11},R_{12},R_{21},R_{22}$. 

Know that $\frac{1}{f}= \frac{1}{f_{1}}+ \frac{1}{f_{2}}- \frac{L}{f_{1}f_{2}}$, which means $f=f(n_{1},n_{2})$. $n_{1},n_{2}$ are different for different colors. Then want $f$ to be independent of $n_{1},n_{2}$. Then we set:
$$\begin{align}
 & \frac{\partial}{\partial n_{1}}\left( \frac{1}{f} \right)=0, \frac{\partial}{\partial n_{2}}\left(  \frac{1}{f} \right)=0 \\  \implies& \frac{\partial}{\partial n_{2}}\left(  \frac{1}{f_{1}} \right)+ \frac{\partial}{\partial n_{2}}\left( \frac{1}{f_{2}} \right)- \frac{\partial}{\partial n_{2}}\left(  \frac{1}{f_{1}f_{2}} \right)=0 \\
 & \frac{\partial}{\partial n_{1}}\left( \frac{1}{f_{1}} \right)+ \frac{\partial}{\partial n_{1}}\left( \frac{1}{f_{2}} \right)-\frac{\partial}{\partial n_{1}}\left( \frac{1}{f_{1}f_{2}} \right)=0 \\
\implies & \frac{1}{n_{1}}\left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right)+ \frac{1}{n_{1}}\left( \frac{1}{R_{21}}- \frac{1}{R_{22}} \right)-2L \frac{n_{2}-n_{1}}{n_{`}}  \frac{1}{n_{1}} \left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right)\left( \frac{1}{R_{21}}- \frac{1}{R_{22}} \right)=0 \\
 & -\frac{n_{2}}{n_{1}^{2}}\left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right) - \frac{n_{2}}{n_{1}^{2}}\left( \frac{1}{R_{21}}- \frac{1}{R_{22}} \right)-2L \frac{n_{2}-n_{1}}{n_{1}}\left( -\frac{n_{2}}{n_{1}^{2}} \right)\left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right)\left( \frac{1}{R_{21}}- \frac{1}{R_{22}} \right)=0 \\
\implies  & 2L= \frac{n_{1}}{n_{2}-n_{1}}\left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right)^{{-1}}\left( \frac{1}{R_{21}}- \frac{1}{R_{22}} \right)^{-1}\left( \frac{1}{R_{11}}- \frac{1}{R_{12}}+\frac{1}{R_{21}}- \frac{1}{R_{22}} \right) \\
\implies & 2L= \frac{n_{1}}{n_{2}-n_{1}}\left( \frac{1}{R_{21}}-\frac{1}{R_{22}} \right)^{-1}+ \frac{n_{1}}{n_{2}-n_{1}}\left( \frac{1}{R_{11}}- \frac{1}{R_{12}} \right)^{-1} \\
\implies & L= \frac{f_{1}+f_{2}}{2}\end{align}$$

Then clearly, we have:
$$\begin{align}
 & \frac{1}{f}=\frac{1}{f_{1}}+\frac{1}{f_{2}}- \frac{L}{f_{1}f_{2}} \\
\implies & f=2\left( \frac{1}{f_{1}}+\frac{1}{f_{2}} \right)^{-1} \\
\implies  & M= \frac{25}{f}= 12.5\left( \frac{1}{f_{1}}+\frac{1}{f_{2}} \right)
\end{align}$$
# 4).
## a).
For the objective and lens, I have:
$$\begin{align}
 & \frac{1}{s_{o}}+ \frac{1}{s_{o}^{'}}=\frac{1}{f_{o}} \\
 & \frac{1}{s_{e}}+ \frac{1}{s_{e}^{'}}= \frac{1}{f_{e}} \\
 & s_{o}=1.2cm,f_{o}=1cm,s_{e}^{'}=-25cm,f_{e}=3cm,s_{e}+s^{'}_{o}=L \\
\implies & s^{'}_{o}=6cm \\
\end{align}$$
The magnification of the objective lens is:
$$m= - \frac{6}{1.2}=-5$$
The angular magnification of the eyepiece is:
$$M=\frac{25}{f_{3}}+1=\frac{25}{3}+1=\frac{28}{3}$$
Therefore, the total magnifying power is:
$$M\cdot m=-\frac{140}{3}\approx -46.67$$
## b).
If I take the image of the objective lens as the object for the eyepiece, I can solve for the objective distance:
$$\begin{align}
 & \frac{1}{s}+\frac{1}{-25cm}=\frac{1}{3cm} \\
\implies & s= \frac{75}{28}cm
\end{align}$$
Then this means the separation between the two lenses is:
$$L=\frac{75}{28}+6\approx8.68cm$$
