# 1).
The light from the air bubble as two fates. The light that does not touch the mirror, under paraxial approximation, would form an image. We have:
$$s^{'}= - \frac{n_{2}}{n_{1}}s$$
Substitute in $n_{1}=1.5, n_{2}=1,s=5 cm$, we get $s^{'}=- \frac{10}{3}cm$. So the firs image is located at $\frac{10}{3}cm$ to the right of the air-glass bisection plane.

For the light that touch the mirror, after being reflected by the mirror and refracted by the air, they form another image. The image formed by the mirror is given by:
$$\frac{1}{r}+ \frac{1}{r^{'}}= \frac{-2}{R}$$
Substitute in $r=2.5cm, R=-7.5cm$, we get: $r^{'}=-7.5cm$. Then we can calculate the image formed by the refractor:
$$r^{''}=- \frac{n_{2}}{n_{1}}(-r^{'}+7.5)=-10cm$$
So the second image is located at $10cm$ to the right of the air-glass bisection plane.

# 2).
## a).
If the two lenses are cemented together, we have:
$$\begin{align}
 & \frac{1}{s_{1}}+ \frac{1}{s_{1}^{'}}= \frac{1}{f_{1}} \\
 &  \frac{1}{s_{2}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{2}}
\end{align}$$
Since they are cemented together, we have: $s_{2}=-s_{1}^{'}$. Then add these two equations together to get:
$$\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{1}}+ \frac{1}{f_{2}}$$
So the equivalent focal length would be:
$$f= \frac{f_{1}f_{2}}{f_{1}+f_{2}}=-7.5cm$$
The order of the lenses should not matter. Due to the symmetry in the equations, if I switch the order of the lenses, and repeat the argument above, after adding the two equations I still get $\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{1}}+ \frac{1}{f_{2}}$.

## b).
If the two lenses are separated by $8cm$, and light encounters the $-5cm$ lens first, we have:
$$\begin{align}
 & \frac{1}{s_{1}}+ \frac{1}{s_{1}^{'}}= \frac{1}{f_{1}} \\
 &  \frac{1}{s_{2}}+ \frac{1}{s_{2}^{'}}= \frac{1}{f_{2}}
\end{align}$$
But this time, I have: $s_{2}=t-s_{1}^{'},t=8cm$. Set $f_{1}=-5cm,f_{2}=15cm,s_{1}=\infty$, I get: $s_{1}^{'}=f_{1}=-5cm$. Then $s_{2}=13cm$. Then:
$s_{2}^{'}=-97.5cm$

Therefore the equivalent focal length would be $f=-97.5cm$.

If light encounters the $15cm$ lens first, we set $f_{1}=15cm,f_{2}=-5cm,s_{1}=\infty$ to get: $s_{1}^{'}=15 cm$. Then $s_{2}=t-s_{1}^{'}=-7cm$. Then $s_{2}^{'}=-17.5cm$

Therefore the equivalent focal length would be $f=-17.5cm$.

By explicit computation, we showed that the order of the lenses matter in this case. We see that in this case, the symmetry in the equations is broken due to the nonzero $t$. So we don't expect to get the same result if we switch the order of the lenses.

# 3).

We know:
$$\begin{align}
 & \frac{n_{1}}{s_{1}}+ \frac{n_{2}^{}}{s_{1}^{'}}= \frac{n_{2}-n_{1}}{R_{1}} \\
 & \frac{n_{2}}{s_{2}}+ \frac{n_{1}}{s_{2}^{'}}= \frac{n_{1}-n_{2}}{R_{2}}
\end{align}$$
Since it's a thin lens, we have: $s_{2}=-s_{1}^{'}$. Then add these two equations together to get the lensmaker equation:
$$\frac{1}{s_{1}}+ \frac{1}{s_{2}^{'}}= \frac{n_{2}-n_{1}}{n_{1}}\left(  \frac{1}{R_{1}}- \frac{1}{R_{2}} \right)$$
Take $n_{1}=1,n_{2}=1.5,R_{1}=5 cm,R_{2}=10 cm$, meaning the surface are all concave surfaces, we get:
$$f= \left(  \frac{n_{2}-n_{1}}{n_{1}}\left(  \frac{1}{R_{1}}- \frac{1}{R_{2}} \right) \right)^{-1}=20cm$$

If we face the lens the other way, we set $R_{1}=-5cm, R_{2}=-10cm$. Obviously in this case we get:
$$f=-20cm$$
![[08fedcaded32f1abed5597700641e25f.jpg]]

The left one is the positive focal length version. The right one is the negative focal length version.

# 4).

I would assume that there are three types of media in this problem. The water, the glass, and the air. 

For the surface between the water and the glass, we have:
$$\frac{n_{1}}{s_{1}}+ \frac{n_{2}}{s_{1}^{'}}= \frac{n_{2}-n_{2}}{R}$$
Here I take $n_{1}=n_{water}=1.3, n_{2}=n_{glass}=1.5,R=30cm,s_{1}=20cm$. We ger: $s_{1}^{'}=- \frac{180}{7}cm$

The for the surface between the glass and the air, we have:

$$\frac{n_{2}}{s_{2}}+ \frac{n_{3}}{s_{2}^{'}}= \frac{n_{3}-n_{2}}{-R}$$
Here I take $n_{3}=n_{air}=1$. Since it's a thin lens, I have:
$$s_{2}=-s_{1}^{'}$$
Then we get: $s_{2}^{'}=-24cm$

The transverse magnification is given by:
$$\begin{align}
 & m_{1}=- \frac{s_{1}^{'}}{s_{1}} \frac{n_{1}}{n_{2}}=\frac{39}{35},m_{2}=- \frac{s_{2}^{'}}{s_{2}} \frac{n_{2}}{n_{3}}= \frac{7}{5} \\
\implies & m=m_{1}m_{2}=\frac{39}{25} =1.56
\end{align}$$
So the fish appears at $24cm$ inside the tank behind the lens. The magnification is $1.56$.

