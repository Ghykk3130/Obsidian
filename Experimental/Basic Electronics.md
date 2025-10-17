
## 3.1.4

1. The energy barrier: 
	For n material, there are more electrons in the conduction band. For p material, there are less electrons in the conduction band. Putting p and n together such that electrons can diffuse. Then electrons would move from n to p in the conduction band. As electrons accumulate in the p side, a potential is difference arises from the n side to the p side. This lifts up all energy levels in the p side. Say the energy levels shift by $\Delta E$ . 
2. Estimate the current under external voltage source:
	Reduction: the p side has a continuous spectrum of levels, each level fit in two electrons (because the spin space is of dimension two.) The total number of electrons in each level is: $2exp(-\frac{E}{kT})/Z$ . So

	The total number of electrons in the conduction band in the p side is : $2\int_{E_0 + \Delta E - |e|V}^{\infty} exp(-\frac{E}{kT})/Z dE = 2kT exp(-\frac{E_0 + \Delta E - |e|V}{kT})/Z$  
	The total number of electrons in the conduction band in the n side is :
	$2\int_{E_0 }^{\infty} exp(-\frac{E}{kT})/Z dE = 2kT exp(-\frac{E_0 + \Delta E}{kT})/Z$

	The net electron flow from n to p is $C(exp(\frac{|e|V}{kT}) - 1)$ 

	The current is obviously proportional to this value.
## 4.2

1. How does the current flows in npn?
	Electrons flow out of the emitter. If electrons recombine with holes in the bas, then the base eject electrons due to charge neutrality. If electrons do not recombine, they flow into the collector. So $I_e = I_b + I_c$ . Semiconductors are doped such that $I_e, I_c \gg I_b$ .
2. Operation regions:
	1. linear active region: when the voltage is large enough, $I_c/I_b \approx constan \gg 1$ 
	2. saturation region: if the voltage is too small, the depletion created by the barrier would not be strong enough. So $I_c$ is no longer $\gg$ $I_b$. But as the voltage increase, $I_c$ would grow very fast such that $I_c \gg I_b$ is satisfied. 
## 4.3

Think of the voltage applied to the base as some kind of control of how hard for current to get through the transistor. If the voltage applied to base is large, then $I_b$ would be large. Intuitively, $I_c$ should be large because it is roughly proportional to $I_b$ . So the voltage drop across $R_c$ would be large, and $V_{ce}$ would be small. On the other hand, if the voltage applied to the base is small, the transistor is very impeded. Current $I_c$ would be small and the voltage drop across $R_c$ would be small.   

## 4.41

1. Thevenin's theorem:
	Consider a combination of voltage sources, current sources and impedances and two pins connect to the outside. It is equivalent to the configuration of a voltage source in series with an impedance such that:
	1. The voltage source is the voltage source you get when the two pins are open circuited.
	2. The impedance is the impedance you get between these two pins when all sources are killed (meaning that voltages sources are replaced by short circuits, and current sources are replaced by open circuits.)
## Bandwidth

$BW = \frac{|input|}{|output|} = 3\ dB$ (Recall if $\frac{a}{b} = r$, the corresponding dB is $10log(r)$. However, when we are given voltages, we need to use $20log$ . Because $BW$ is defined in terms of power ratio, and $P \propto V^2$ . ) 

Ex: Consider an RC filter, with the output signal the voltage across the capacitor. Easy to find $|\frac{V_c}{V_{in}}| = \frac{1}{\sqrt{\omega^2C^2R^2 + 1}}$ . The BW can be calculated easily. 

## Practical Transformer and Its Bandwidth

### Source of Errors

1. Copper loss: the resistance due to the copper wire of the transformer.

2. Flux leakage: a certain portion of flux from the primary winding does not go through the secondary winding, thus this portion of magnetic filed functions exactly the same as the magnetic field of an inductor, introducing an inductance.

3. No-load loss: when the secondary winding is open circuited, there are two more losses (it's not that when the secondary is not open circuited, these two losses disappear. It's just easier to see them if the secondary is open circuited.)
	1. Iron loss: part of the current would induce things like eddy current in the transformer core. This is modeled by a resistance (because the impedance caused by this effect is in phase with the voltage that drives it.)
	2. magnetizing current: other part of the current simply generates the magnetic field through an inductor. 


4. When there is load, there are an extra inductance caused by the electromagnetic induction to transfer power to the secondary. This is modeled by an ideal transformer coil (inductor.)

![[Pasted image 20250524191915.png|700]]


### The Bandwidth

An ideal transformer would have infinite bandwidth. Because the ratio of the output and the input is fixed and equal to $\frac{N_2}{N_1}$ . It's not even a function of frequency. So it treats signals of any frequency equally. 

For a practical transformer, the $|\frac{V_{out}}{V_{in}}|$ versus $\omega$ graph is as follows:

![[Pasted image 20250524192531.png|600]]

The diagram:

![[b1d92f429b71c3fac562a8eda6927f1.jpg]]

The code: 

```python

import matplotlib.pyplot as plt
import numpy as np

j = 1j

def V_3(O,V_1,R_1,L_1,R_e,L_e,L_p,L_s,N_1,N_2):
    Z_1 = (j*O*R_e*L_e*L_p)/(j*O*L_e*L_p + R_e*L_p + R_e*L_e)
    V_2 = (Z_1*V_1)/(R_1 + j*O*L_1 + Z_1)
    V_3 = (N_2/N_1)*V_2
    return V_3
    
def V_4(O,V_1,R_1,L_1,R_e,L_e,R_2,L_2,L_p,L_s,N_1,N_2,Z_l):
    V_4 = V_3(O,V_1,R_1,L_1,R_e,L_e,L_p,L_s,N_1,N_2) * (Z_l/(L_s + R_2 + L_2 + Z_l))
    return V_4

[V_1,R_1,L_1,R_e,L_e,R_2,L_2,L_p,L_s, N_1,N_2,Z_l] = [1,1,1,1,1,1,1,1,1,1,1,1]
O = np.arange(0,5,0.1)

y_values_without_buffer = abs(V_4(O,V_1,R_1,L_1,R_e,L_e,R_2,L_2,L_p,L_s,N_1,N_2,Z_l)/V_1)
y_values_with_buffer = abs(V_3(O,V_1,R_1,L_1,R_e,L_e,L_p,L_s,N_1,N_2)/V_1)

plt.plot(O, y_values_without_buffer, label = 'without buffer')
plt.plot(O, y_values_with_buffer, label = 'with buffer')

plt.legend()
plt.show()
```

For Mathematica computation of bandwidth:

```Mathematica
Subscript[Z, 
   1] = (I*\[Omega]*Subscript[R, e]*Subscript[L, e]*
     Subscript[L, p])/(I*\[Omega]*Subscript[L, e]*Subscript[L, p] + 
     Subscript[R, e]*Subscript[L, p] + 
     Subscript[R, e]*Subscript[L, e]);
Subscript[V, 
   2] = (Subscript[Z, 1]*Subscript[V, 1])/(Subscript[R, 1] + 
     I*\[Omega]*Subscript[L, 1] + Subscript[Z, 1]);
Subscript[V, 3] = (Subscript[N, 2]/Subscript[N, 1])*Subscript[V, 2];
Subscript[V, 4] = 
  Subscript[V, 
    3]*(Subscript[Z, 
      l]/(Subscript[L, s] + Subscript[R, 2] + Subscript[L, 2] + 
       Subscript[Z, l]));
Bw = Abs[Subscript[V, 4]/Subscript[V, 1]];
FullSimplify[ComplexExpand[Bw], 
 Element[{\[Omega], Subscript[R, e], Subscript[L, e], Subscript[R, 1],
    Subscript[L, 1], Subscript[R, 2], Subscript[L, 2], 
   Subscript[N, 1], Subscript[N, 2], Subscript[L, p], Subscript[L, s],
    Subscript[Z, l]}, PositiveReals]]
```

If we assume the load is an oscilloscope and model the oscilloscope as a resistor connected in parallel with a capacitor, then:

```Mathematica
Subscript[Z, 
   1] = (I*\[Omega]*Subscript[R, e]*Subscript[L, e]*
     Subscript[L, p])/(I*\[Omega]*Subscript[L, e]*Subscript[L, p] + 
     Subscript[R, e]*Subscript[L, p] + 
     Subscript[R, e]*Subscript[L, e]);
Subscript[V, 
   2] = (Subscript[Z, 1]*Subscript[V, 1])/(Subscript[R, 1] + 
     I*\[Omega]*Subscript[L, 1] + Subscript[Z, 1]);
Subscript[V, 3] = (Subscript[N, 2]/Subscript[N, 1])*Subscript[V, 2];
Subscript[V, 4] = 
  Subscript[V, 
    3]*(Subscript[Z, 
      l]/(Subscript[L, s] + Subscript[R, 2] + Subscript[L, 2] + 
       Subscript[Z, l]));
Subscript[Z, 
  l] = (1/(I*\[Omega]*Subscript[C, o]))*
   Subscript[R, 
    o]/(1/(I*\[Omega]*Subscript[C, o]) + Subscript[R, o]);
Bw = Abs[Subscript[V, 4]/Subscript[V, 1]];
FullSimplify[ComplexExpand[Bw], 
 Element[{\[Omega], Subscript[R, e], Subscript[L, e], Subscript[R, 1],
    Subscript[L, 1], Subscript[R, 2], Subscript[L, 2], 
   Subscript[N, 1], Subscript[N, 2], Subscript[L, p], Subscript[L, s],
    Subscript[C, o], Subscript[R, o]}, PositiveReals]]
```

# Flattens the bandwidth of low-pass filter

```Mathematica
Subscript[Z, 1] = 1/(I*\[Omega]*C);
Subscript[Z, 2] = 
  Subscript[R, 2]*Subscript[Z, 1]/(Subscript[R, 2] + Subscript[Z, 1]);

Subscript[G, 1] = 
  Subscript[Z, 1]/(Subscript[R, 1] + Subscript[Z, 1]);
Subscript[G, 2] = Subscript[Z, 2]/(Subscript[R, 1] + Subscript[Z, 2]);

Subscript[G, 1 abs] = Abs[Subscript[G, 1]];
Subscript[G, 2 abs] = Abs[Subscript[G, 2]];

FullSimplify[ComplexExpand[Subscript[G, 1 abs]], 
 ELement[{C, Subscript[R, 1], Subscript[R, 2], \[Omega]}, 
  PositiveReals]]
FullSimplify[ComplexExpand[Subscript[G, 2 abs]], 
 ELement[{C, Subscript[R, 1], Subscript[R, 2], \[Omega]}, 
  PositiveReals]]

```

# Practical capacitor

1. We modeled a practical capacitor as an ideal capacitor in series with a resistor. Note that $R = R(\omega)$ . $R = R_s + \frac{1}{R_{in}(\omega C)^2} + \frac{DF}{\omega C}$ 

2. Q Factor: Consider a dissipative system. $Q = 2\pi \frac{maximum\ energy\ stored\ in\ one\ cycle}{energy\ dissipated\ in\ one\ cycle}$

3. Dissipation factor: $\tan\delta$, where $\delta$ is the phase difference between the total current and the capacitive current for parallel model, (the phase difference between the total voltage and the capacitive voltage for the series model.)

4. The relation between the Q factor and $DF$ : 
		Consider an ideal capacitor in series with a resistor connected to a voltage source $V_0e^{i\omega t}$ . Then $I = V_{0}^{i\omega t} / Z, Z = \frac{1}{i\omega C} + R$ . So $I$ is sinusoidal. Write $I = I_0 e^{i\omega t}$ .
		The energy stored at any instance is $\frac{1}{2}CV^2$ . So we seek the maximum $V$ . $V = I \frac{1}{i\omega C}$, and $Z$ is a constant. So we seek maximum $I$. This is $|I_0|$ . So $E_{stored, max} = \frac{1}{2}C\frac{|I_0|^2}{\omega^2 C^2}$ 
		The energy dissipated per cycle: $\int_{0}^{\frac{2\pi}{\omega}} I^2 R dt = |I_0|^2 R \frac{2\pi}{\omega}$    
		So $Q = \frac{1}{RC\omega} = |Z_{capacitor}| / R$ 
		Note that $DF = tan \delta = R/|Z_{capacitor}|$ $\Rightarrow$ $Q \cdot DF = 1$  