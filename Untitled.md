In an isolated system moving with well defined initial and final states, we can argue that $\Delta S\geq{0}$ easily. Consider the system's initial and finial states are denotes by points $A,B$. Then the classical textbook argument would be: construct a reversible path from $B$ to $A$. Then by Clausius theorem, I have:
$$\begin{align}
 & \oint \frac{{\delta Q}}{T} \leq 0 \\
\implies & \int_{A}^B \frac{\delta Q_{irrev}}{T}+\int_{B}^{A} \frac{\delta Q_{rev}}{T} \leq 0 \\
  \implies  & \int_{A}^{B} \frac{\delta Q_{rev}}{T} \geq \int_{A}^{B} \frac{\delta Q_{irrev}}{T} = 0 \\
\implies & \Delta S \geq{0}
\end{align}$$
However, this argument is restricted to the case where the system moves quasi-statically (such that the temperature inside $\frac{\delta Q_{irrev}}{T}$ is well defined), and has well defined temperatures in the initial and final states. 

My first question is: does the conclusion that $\Delta S\geq 0$ still holds if the irreversible process is not carried out quasi-statically? That means we cannot write down $\int_{A}^{B} \frac{\delta Q_{irrev}}{T}$ because the temperature is not well defined.

The setup of my second question is: consider two objects with temperature $T_{1},T_{2}$ at the beginning. They are isolated from the rest of the universe. We allow heat to flow freely between them. Then at some point, we break the thermal contact between them, and wait long enough for the two systems to settle down to thermal equilibrium with themselves. (I don't mean they are in thermal equilibrium with each other. I just wait longer than the relaxation time such that the two systems have well defined temperatures. ) 

My second question is: can we make conclusion on the total entropy change of the system $T_{1}+T_{2}$? I know from my intuition that the entropy of this system should increase. But since 1). the temperature inside this system is not uniform (we have two subsystems $T_{2},T_{2}$), 2). the same problem as my question 1, the classical textbook argument fails. How can I draw the conclusion correctly.




