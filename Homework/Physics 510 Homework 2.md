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

# 6.

