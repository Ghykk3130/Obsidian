# 1.DC bias circuit

![[Pasted image 20250722092142.png|200]]

Want: determine the operating point $(V_{ds},I_{d})$

We have:
$$\left\{ \begin{align}
I_{d}  & = \frac{V_{dd}-V_{ds}}{R_{d}+R_{s}} \\
I_{d} & =KV_{ds(sat)}^{2}  \\ V_{ds(sat)} & =V_{gs}-V_{t} \\
V_{gs} & = \frac{R_{2}}{R_{1}+R_{2}}V_{dd}-I_{d}R_{s}
\end{align}\right.$$
We must require the FET to operate in the saturation region or equation 2 doesn't hold.
Use equation 2,3,4 to find $I_{d}$, and use equation 1 to find $V_{ds}$.

# 2.AC equivaence

Denote the quantities of DC operation with a superscript $DC$.
Consider modulating current and voltages around the DC operation. Denote $v_{ds}=V_{ds}-V_{ds}^{DC}$, $v_{gs}=V_{gs}-V_{gs}^{DC}$ Then

$$\begin{align}
I_{d} & =I_{d}(V_{ds},V_{gs}) \\
 & = \frac{\partial I_{d}}{\partial V_{ds}}(V_{ds}-V_{ds}^{DC}) + \frac{\partial I_{d}}{\partial V_{gs}}(V_{gs}-V_{gs}^{DC}) +I_{d}^{DC} \\
 & = \frac{\partial I_{d}}{\partial V_{ds}}v_{ds}+ \frac{\partial I_{d}}{\partial V_{gs}}v_{gs}+I_{d}^{DC}
\end{align}$$
$\implies$ $i_{d}= \frac{\partial I_{d}}{\partial V_{ds}}v_{ds}+ \frac{\partial I_{d}}{\partial V_{gs}}v_{gs}= \frac{v_{ds}}{r_{out}}+g_{m}v_{gs}$

Obviously, in the saturation region, $r_{out}=\infty$. Think of the AC equivalence as a voltage-controlled current source. 

![[Pasted image 20250722125441.png|400]]

# 3.Black box model of amplifiers

Think of an amplifier as a 2-pin black box. 
![[Pasted image 20250722125736.png|500]]

Important quantities:
1. Voltage gain a: $a= \frac{V_{out}}{V_{in}}$ This is a function of the load.
2. Open-loop gain $a_{OL}$: $a=a_{OL}$ when the load is $\infty$
3. Current gain g: $g= \frac{I_{out}}{I_{in}}$
4. Input impedance $Z_{in}$: $Z_{in}= \frac{V_{in}}{I_{in}}$
5. Output impedance $Z_{out}$: $Z_{out}= \frac{V_{out}}{I_{out}}$ when load $=0$

# 4.FET common-source amplifier

![[Pasted image 20250722131402.png|500]]

Simplification principles:
1. $C_{1},C_{2}$ are used to block the DC signal that sets the operating point from leaking out. We only analyze the AC component and take $C_{1},C_{2}$ to be large, so we treat $C_{1},C_{2}$ as short circuits.
2. The capacitance between point $V_{dd}$ and the ground is large. If we only analyze the AC component, point $V_{dd}$ is also shorted to the ground.
3. Take the transistor as a 3-pin device, and replace it with the AC equivalence.

Simplification:
![[Pasted image 20250722131907.png|600]]

Note:
1. We ignore $r_{out}$ because ideally, $r_{out}=\infty$
2. $R_{L}^{'}$is the parallel equivalence of $R_{L},R_{d}$.
3. $R_{G}$ is the parallel equivalence of $R_{1},R_{2}$.

Black box parameters:

Caveat: $g_mv_{gs}$ or $-g_{m}v_{gs}$ is not $i_{out}$. $i_{out}$ is just part of it that flows into the load.

We have: $$\left\{\begin{align}
v_{out} & =-g_{m}v_{gs}R_{L}^{'} \\
v_{in} & =-(-g_{m}v_{gs})R_{s}+v_{gs}=g_{m}v_{gs}R_{s}+v_{gs}
\end{align} \right.$$
$\implies$ $a= \frac{-g_{m}R_{L}^{'}}{g_{m}R_{s}+1}$

For $a_{OL}$, take $R_{L}=\infty \implies R_{L}^{'}=R_{d}\implies a_{OL}= \frac{-g_{m}R_{d}}{g_{m}R_{s}+1}$

$g= \frac{i_{out}}{i_{in}}= \frac{\frac{v_{out}}{R_{L}}}{\frac{v_{in}}{R_{G}}}= \frac{-\frac{g_{m}v_{gs}R_{L}^{'}}{R_{L}}}{ \frac{g_{m}v_{gs}R_{s}+v_{gs}}{R_{G}}}= \frac{-g_{m}}{g_{m}R_{s}+1} \frac{R_{d}R_{G}}{R_{d}+R_{L}}$

Obviously, $Z_{in}=R_{G}$. $Z_{out}=\frac{v_{out}}{i_{out}}$ when $R_{L}=\infty$ $\implies$ $Z_{out}= \frac{-g_{m}v_{gs}R_{d}}{-g_{m}v_{gs}}=R_{d}$










First do not need the resistor on the right

Impedance of the shunt capacitance should be much smaller than the resistance connecting to drain. 

Evaporate gold pad on stripped pad. 