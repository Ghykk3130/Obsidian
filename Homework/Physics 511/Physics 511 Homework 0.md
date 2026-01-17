# 1).
## a) 
We used Griffith's textbook.
## b)
I am very familiar with Drac's notation. 
## c)
The most confusing thing is the commutation relation. In QM we take this for granted. I don't know how it is related to classical commutation relation, and why do we introduce $i\hbar$ in the front.
I am very confused about the idea of Hilbert's space and how it is related to the physical space. For example, how does a rotation in $\mathbb{R}^{3}$ correspond to a rotation of the state in the Hilbert's space? I am also confused about angular momentum construction using representation theory. I hope we can learn more about the mathematical background like group theory and representation. I think I can understand better if I can learn more about the mathematics behind. Also, another confusing topic is angular momentum addition and Clebsch-Gorden coefficient. I have difficulty understanding why fixing $n,l,m_{l},s,m_{s}$ would fix the state of a Hydrogen atom, (in Cohen's textbook, he calls the observables corresponding to them a complete set of commutative observables. Why this is "complete"?). Why $n,l,s,j,m_{j}$ could also completely fix the state?

## d)
We used Taylor's mechanics and a little bit of Goldstein's mechanics.
# 2).
I know everything formally except for d). Well, I know d), but I don't know what the formal statement is and how to prove it.
# 3).
## a)
Consider an electron moving in a circular orbit around a positive charge. Then I have:
$$m \frac{v^{2}}{r}= \frac{1}{4\pi\epsilon_{0}} \frac{e^{2}}{r^{2}}\dots{1})$$
Then the acceleration is:
$$a= \frac{v^{2}}{r}= \frac{1}{4\pi\epsilon_{0}m} \frac{e^{2}}{r^{2}}\dots 2)$$
Solve for $r$ in $1)$ and substitute the result into $2)$ to obtain:
$$a= \frac{4\pi\epsilon_{0}}{e^{2}}mv^4$$
Use $\frac{dE}{dt}= \frac{2}{3} \frac{a^{2}}{c^{3}} \frac{e^{2}}{4\pi\epsilon_{0}}$ (we omit the minus sign because we only care about the magnitude):
$$\frac{dE}{dt}=\frac{2}{3} \frac{4\pi\epsilon_{0}}{e^{2}} \frac{v^8}{c^{3}}m^{2}$$
The time it takes to complete one revolution is:
$$T=\frac{2\pi r}{v}=2\pi \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{mv^{3}}$$
Then the energy loss per cycle is:
$$\Delta E=\int_{0}^T \frac{dE}{dt}dt= \frac{4\pi}{3}m \frac{v^5}{c^{3}}$$
So the ratio is:
$$\text{ratio}=\frac{\Delta E}{KE}= \frac{ \frac{4\pi}{3}m \frac{v^5}{c^{3}} }{ \frac{1}{2}mv^{2} }= \frac{8\pi}{3} \frac{v^{3}}{c^{3}}$$
Since $v\ll c$, we are safe to conclude that the ratio is very small.
## b)
The kinetic energy is:
$$KE= \frac{1}{2}mv^{2}=\frac{1}{2}m \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{mr}= \frac{1}{2} \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{r}$$
Therefore:
$$KE+U=- \frac{1}{2} \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{r}$$
Then using $2)$ and substituting $v$ with $r$ using $1)$, the differential equation would be:
$$\begin{align}
\frac{d}{dt}\left(  -\frac{1}{2} \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{r} \right) & =- \frac{2}{3} \frac{a^{2}}{c^{3}} \frac{e^{2}}{4\pi\epsilon_{0}} \\
 & =- \frac{2}{3} \frac{4\pi\epsilon_{0}}{e^{2}} \frac{v^8}{c^{3}}m^{2} \\
 & =- \frac{2}{3} \frac{4\pi\epsilon_{0}}{e^{2}} \frac{m^{2}}{e^{2}} \left(  \frac{e^{2}}{4\pi\epsilon_{0}} \frac{1}{mr} \right)^4 \\
\implies  \frac{dr}{dt} & = - \frac{4}{3} \frac{1}{c^{3}} \left(  \frac{e^{2}}{4\pi\epsilon_{0}} \right)^{2} \frac{1}{m^{2}r^{2}}
\end{align}$$
To solve the differential equation:
$$\begin{align}
r^{2}dr & = -\frac{4 }{3}\left(  \frac{e^{2}}{4\pi\epsilon_{0}} \right)^{2} \frac{1}{m^{2}c^{3}}dt \\
\int_{a_{b}}^{0}r^{2}dr & = -\frac{4 }{3}\left(  \frac{e^{2}}{4\pi\epsilon_{0}} \right)^{2} \frac{1}{m^{2}c^{3}}\int_{0}^{\Delta t}dt \\
\implies \Delta t & = \frac{1}{4} \left(  \frac{4\pi\epsilon_{0}}{e^{2}} \right)^{2}c^{3}a_{b}^{3}m^{2}
\end{align}$$
Substitute in $a_{b}=\text{Bohr's radius} \approx5.3\times{1}0^{-11}m,m=\text{electron mass}\approx {9}.1\times{1}0^{-31}kg,e\approx 1.6\times {1}0^{-19}C,\epsilon_{0}= 8.85\times {1}0^{-12}F\cdot m^{-1}$, we get:
$$\Delta t \approx 1.56\times 10^{-11}s$$
## c)
The electron speed would be:
$$\text{1)}\implies v= \sqrt{ \frac{e^{2}}{4\pi\epsilon_{0}}  \frac{1}{a_{b}m}}\approx 2\times {1}0^6m\cdot s^{-1}\ll c$$
So the approximation in $a)$ is justified.



