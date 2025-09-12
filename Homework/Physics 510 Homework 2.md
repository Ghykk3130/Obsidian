# 1.
Consider the sphere in the problem placed far from any matter. The sphere is only allowed to exchange energy with the surroundings through heat. Consider changing the state of the sphere by putting in a small amount of heat $\rlap{d}\bar{\phantom{w}}Q$ reversibly. Then we have:
$$C= \frac{\rlap{d}\bar{\phantom{w}}Q}{dT}= \frac{dU}{dT}$$
now put the sphere on a horizontal surface in gravitational field. Change the state of the sphere such that the initial and final states are the same as the previous case. Then we have:
$$C^{'}= \frac{\rlap{d}\bar{\phantom{w}}Q^{'}}{dT}= \frac{dU^{'}- \rlap{d}\bar{\phantom{w}}W}{dT}$$
Since $U$ is a state function, I have: 
$$dU=dU^{'}$$
Also, 
$$\begin{align}
\rlap{d}\bar{\phantom{w}}W & =\int_{sphere} d^{3}r\rho gdy \\
 & = \int_{sphere}d^{3}r\rho g(-\alpha ydT) \\
 & =-\alpha dTg\int_{sphere}d^{3}r\rho y \\
 & =-\alpha dTgmR
\end{align}$$
Then I have:
$$C^{'}=C+\alpha mgR$$
Similarly, for the sphere hanging from the ceiling, I have:
$$\begin{align}
 & C^{''}= \frac{dU^{''}- \rlap{d}\bar{\phantom{w}}W^{'}}{dT} \\
 & dU^{''}=dU \\
 & \rlap{d}\bar{\phantom{w}}W^{'}=\alpha dTg\int_{sphere}d^{3}r\rho y=\alpha dTgmR \\
\implies & C^{''}=C-\alpha mgR
\end{align}$$
Then their heat capacity difference is:
$$C+\alpha mgR-(C-\alpha mgR)=2\alpha mgR$$
# 2.
- a). is not consistent with thermodynamic laws. It violates the first law. 
- b). is consistent with thermodynamic laws. The first law is obviously satisfied. Now take the two heat reservoirs, the engine, and the work reservoir as an isolated system. The total change of entropy in one cycle is $\Delta S = \Delta S_{1}+\Delta S_{2} \geq \frac{50}{800}- \frac{10}{400}= \frac{3}{80} >0$. So it does not violate the second law.
- c). is not consistent with thermodynamic laws. It violates the second law because all heat are (solely) turned into work.
- d). is not consistent with thermodynamic laws. The efficiency should be bounded above by $1- \frac{T_{2}}{T_{1}}=  0.5$, but the actual efficiency is $0.8$. 
# 3.
Consider any reversible engine $E$. Suppose $T_{1}>T_{2}$. Run a Carnot engine and take the work as input. 
![[4c5951bbd74936b95036a648cca912c8.jpg|300]]

Then by the second law, I have:
$$\begin{align}
 & Q_{1}\geq Q_{2} \\
\implies & Q_{1} \geq W\left( 1- \frac{T_{2}}{T_{1}} \right)^{-1} \\
\implies  & Q_{1}\geq \eta Q_{1}\left( 1- \frac{T_{2}}{T_{1}} \right)^{-1} \\
\implies  & \eta \leq 1- \frac{T_{2}}{T_{1}}
\end{align}$$
Since $E$ is a reversible engine, and Carnot engine is by default reversible, I can run everything backward. 
![[078dbd32c28a84d620fcebbef1ad77f8.jpg|300]]

Similarly, I have:
$$\begin{align}
 & Q_{2} \geq Q_{1} \\
\implies & \eta Q_{1}\left( 1- \frac{T_{2}}{T_{1}} \right)^{-1} \geq Q_{1} \\
\implies  & \eta\geq 1- \frac{T_{2}}{T_{1}}
\end{align}$$
Therefore, I have:
$$\eta=1- \frac{T_{2}}{T_{1}}$$
# 4.
Suppose a reversible engine $E$ is absorbing (the sign could be either positive or negative, so not just absorbing strictly speaking.) heat from $T_{1},\dots T_{N}$.

We supplement the heat absorbed from $T_{1},\dots T_{N}$ by running $N$ Carnot engines between a heat reservoir $T_{0}$ and $T_{i},i=1,\dots,N$. 
![[344c7bc69fead86347a1ed6a24f36c5a.jpg]]

Then the equivalent heat engine is denoted by $E+C_{1}+\dots+C_{N}$. We now further decompose the total heat absorbed from $T_{0}$ into $Q=Q_{1}-Q_{2}$

Then the efficiency of the equivalent heat engine is given by:
$$\eta= \frac{Q_{1}-Q_{2}}{Q_{1}}=1- \frac{Q_{2}}{Q_{1}}$$
Since $E$ is reversible, and $C_{i},i=1,\dots,N$ are reversible, then $E+C_{1}+\dots+C_{N}$ is reversible. Then for a reversible engine running between $T_{0}$ and $T_{0}$, I have:
$$\begin{align}
 & \eta=\eta_{Carnot}=1- \frac{T_{0}}{T_{0}}=0 \\
\implies & 1- \frac{Q_{2}}{Q_{1}}=0 \\
\implies  & Q_{2}=Q_{1} \\
\implies  & Q=0
\end{align}$$
Then I have:
$$\begin{align}
0 & =Q \\
 & =\sum_{i}Q_{i_{0}} \\
 & =\sum T_{0} \frac{Q_{i}}{T_{i}}  \\
\implies & \sum_{i} \frac{Q_{i}}{T_{i}}=0
\end{align}$$
# 5.
Consider running a cyclic engine between $T_{1},T_{2},T_{3}$ to exchange heat among them and output some work. 

Suppose before running the heat engine, the heat sources are all in thermal equilibrium with themselves. (I don't mean that they are in thermal equilibrium with each other, I just want to say that their state quantities are well defined.) the initial temperatures of the heat sources are $T_{1i},T_{2i},T_{3i}$.

Suppose after running the heat engine, and the three systems again reach thermal equilibrium with themselves, the final temperatures are $T_{1f},T_{2f},T_{3f}$.

Take the three heat sources plus the heat engine as the system. Since the heat engine is cyclic, the work output of of the system is the sum of the (negative) change in the internal energy of the heat sources. I have:
$$\begin{align}
W & =-\Delta U_{1}-\Delta U_{2}-\Delta U_{3} \\
 & =C_{1}(T_{1i}-T_{1f})+C_{2}(T_{2i}-T_{2f})+C_{3}(T_{3i}-T_{3f}) \\
 & =C_{1}T_{1i}+C_{2}T_{2i}+C_{3}T_{3i}-(C_{1}T_{1f}+C_{2}T_{2f}+C_{3}T_{3f})
\end{align}$$
Note that the process does not need to be reversible for me to write down $\Delta U=C(T_{f}-T_{i})$. Because $U$ is just a function of $T$. After fixing the initial and final states, I can construct a reversible path connecting them to calculate $U$. If I extract out heat reversibly, I must have $\Delta U=\int \rlap{d}\bar{\phantom{w}}Q=\int CdT=C(T_{f}-T_{i})$.

Then it suffices to minimize $C_{1}T_{1f}+C_{2}T_{2f}+C_{3}T_{3f}$. Take the three heat source, the heat engine, and the work reservoir which absorbs the work from the engine as an isolated system. Then the second law implies:
$$\begin{align}
\Delta S_{1}+\Delta S_{2}+\Delta S_{3} \geq 0 \\
\implies \int_{T_{1i}}^{T_{1f}} \frac{C_{1}dT_{1}}{T_{1}}+ \int_{T_{2i}}^{T_{2f}} \frac{C_{2}dT_{2}}{T_{2}}+ \int_{T_{3i}}^{T_{3f}} \frac{C_{3}dT_{3}}{T_{3}}  & \geq 0 \\
\implies C_{1}\ln \frac{T_{1f}}{T_{1i}}+C_{2}\ln \frac{T_{2f}}{T_{2i}}+C_{3} \ln \frac{T_{3f}}{T_{3i}} \geq 0  \\
\left( \frac{T_{1f}}{T_{1i}} \right)^{C_{1}} \left(  \frac{T_{2f}}{T_{2i}} \right)^{C_{2}} \left(  \frac{T_{3f}}{T_{3i}} \right)^{C_{3}} \geq  1 \dots*)\end{align}$$
This equation constrains the available volume in $\mathbb{R}^{3}$ spanned by $T_{1f},T_{2f},T_{3f}$. The surface $\left(  \frac{T_{1f}}{T_{1i}} \right)^{C_{1}} \left( \frac{T_{2f}}{T_{2i}} \right)^{C_{2}} \left( \frac{T_{3f}}{T_{3i}} \right)^{C_{3}}=1$ is plotted in a unit cube. Then the allowed region is everything "above" this surface.

![[ba3f4b1ecc47b8ef894b3036ac1b9f3d.jpg|300]]

We need to minimize $C_{1}T_{1f}+C_{2}T_{2f}+C_{3}T_{3f}= (C_{1}\hat{x}+C_{2}\hat{y}+C_{3}\hat{z})\cdot(T_{1f}\hat{x}+T_{2f}\hat{y}+T_{3f}\hat{z})$

That is, we want to find the vector $T_{1f}\hat{x}+T_{2f}\hat{y} +{T_{3f}}\hat{z}$ such that its projection along $C_{1}\hat{x}+C_{2}\hat{y}+C_{3}\hat{z}$ is minimized. Obviously, the projection is minimized if $T_{1f}\hat{x}+T_{2f}\hat{y}+T_{3f}\hat{z}$ is somewhere on the surface. This is because if $T_{1f}\hat{x}+T_{2f}\hat{y}+T_{3f}\hat{z}$ is above the surface, then connect this point with the origin. The vector pointing to the intersection of this line and the surface would produce a smaller projection. 

Note that if the engine is reversible, then $*)$ takes equality. Then $T_{1f}\hat{x}+T_{2f}\hat{y}+ T_{3f}\hat{z}$ can indeed lie on the surface. 

Then want to find at which point on the surface is $C_{1}T_{1f}+C_{2}T_{2f}+C_{3}T_{3f}$ minimized. Use Lagrange multiplier to find:
$$\begin{align}
 & \frac{C_{1}}{T_{1f}}=\lambda C_{1} &  \\
 &  \frac{C_{2}}{T_{2f}} = \lambda C_{2} \\
 & \frac{C_{3}}{T_{3f}}=\lambda C_{3} \\
 & \left(  \frac{T_{1f}}{T_{1i}} \right)^{C_{1}}\left(  \frac{T_{2f}}{T_{2i}} \right)^{C_{2}}\left(  \frac{T_{3f}}{T_{3i}} \right)^{C_{3}}=1
\end{align}$$
$$\begin{align}
\implies  & \lambda=T_{1i}^{- \frac{C_{1}}{C_{1}+C_{2}+C_{3}}}T_{2i}^{ -\frac{C_{2}}{C_{1}+C_{2}+C_{3}}}T_{3i}^{- \frac{C_{3}}{C_{1}+C_{2}+C_{3}}} \\
 & T_{1f}=T_{2f}=T_{3f}=T_{1i}^{ \frac{C_{1}}{C_{1}+C_{2}+C_{3}}}T_{2i}^{ \frac{C_{2}}{C_{1}+C_{2}+C_{3}}}T_{3i}^{ \frac{C_{3}}{C_{1}+C_{2}+C_{3}}} \\
\implies  & W_{max}=C_{1}T_{1i}+C_{2}T_{2i}+C_{3}T_{3i}-(C_{1}+C_{2}+C_{3})T_{1i}^{ \frac{C_{1}}{C_{1}+C_{2}+C_{3}}}T_{2i}^{ \frac{C_{2}}{C_{1}+C_{2}+C_{3}}}T_{3i}^{ \frac{C_{3}}{C_{1}+C_{2}+C_{3}}}
\end{align}$$
Or adopting the notation in the problem, I write:
$$W_{max}=C_{1}T_{1}+C_{2}T_{2}+C_{3}T_{3}-(C_{1}+C_{2}+C_{3})T_{1}^{ \frac{C_{1}}{C_{1}+C_{2}+C_{3}}}T_{2}^{ \frac{C_{2}}{C_{1}+C_{2}+C_{3}}}T_{3}^{ \frac{C_{3}}{C_{1}+C_{2}+C_{3}}}$$
# 6.
 
Consider putting $T_{1},T_{2}$ into contact for a very brief moment, allowing a tiny amount of signed heat flow $\rlap{d}\bar{\phantom{w}}Q$ from $T_{2}$ to $T_{2}$. Then move them apart. Know that:
$$U=U(S,x) \implies S=S(U,x)$$
Then, since the heat reservoirs don't exchange work:
- a). $dS=dS_{1}+dS_{2}=\left( \frac{\partial S_{1}}{\partial U_{1}} \right)_{x_{1}}dU_{1}+ \left( \frac{\partial S_{2}}{\partial U_{2}} \right)_{x_{2}} dU_{2}= \frac{dU_{1}}{T_{1}}+ \frac{dU_{2}}{T_{2}}$ . $\text{first law}\implies dU_{1}=- \rlap{d}\bar{\phantom{w}}Q,dU_{2}= \rlap{d}\bar{\phantom{w}}Q$. Then $\frac{- \rlap{d}\bar{\phantom{w}}Q}{T_{1}}+ \frac{\rlap{d}\bar{\phantom{w}}Q}{T_{2}}\geq 0$. Then $T_{1}>0>T_{2}\implies \rlap{d}\bar{\phantom{w}}Q < 0$. So $T_{2}$ is hotter.
- b). Similarly, I have $\frac{-\rlap{d}\bar{\phantom{w}}Q}{T_{1}}+ \frac{\rlap{d}\bar{\phantom{w}}Q}{T_{2}} \geq 0$. But this time $0>T_{2}>T_{1}\implies\rlap{d}\bar{\phantom{w}}Q<0$. So $T_{2}$ is hotter. 

