# A conceptual model of semiconductors

## Bands

Consider a bulk material. We are interested in two bands: 1) valance band 2) conduction band. The conduction band is higher than the valance band, and they are separated by a forbidden region. 

Electrons can be promotes from the valance band into the conduction band. This 2) creates and electron in the conduction band, and 2) creates a hole in the valance band.

## Doped materials

Consider a pure semiconductor. The separation between the valance and conduction band of material 1 is too large so that it's hard to conduct current. We change this by change the band structure. We change the band structure by doping it with some other materials with a different energy structures. Call the original material material 1, and the doping material material 2. 
### n-type
Material 2 has some electrons that has higher energy that is close to the conduction band of material 1. Then we can promote the electrons of material 2 into the conduction band of material 1 to create a current in the conduction band.

### p-type
Material 2 has some empty levels that is close to the valance band of material 1. Then we can promote the electrons in the valance band of material 1 into those empty levels to create holes in the valance band of material 1, and create current in the valance band. 

## The p-n junction

Consider putting an n-type material and a p-type material together. Then 1) electrons in the conduction band of the n-type material diffuse into the conduction band of the p-type material. 2) holes in the valance band of the p-type material diffuse into the valance band of the n-type material.

This creates an electric field from the n-type material to the p-type material. Then there would be an extra scalar potential inside the p-type material. The energy of the conduction band and valance band of the p-type material would be shifted up by this scalar potential. (Electrons are negatively charged, so the energy is shifted up.)

We can add external electric field to modify the scalar potential.
## Reversed biased
If we increase the original scalar potential by adding and external scalar potential, then the energy shift would be more significant.

## Forward biased
If we reduce the original scalar potential by adding and external scalar potential, then the energy shift would be reduced.


# Field effect transistors

## Junction FET
![[Pasted image 20250722072849.png|600]]
### Operation
When $V_{gs}=0$, the reverse bias voltage formed by diffusion is not strong enough $\implies$ the depletion region is not wide enough $\implies$ current can flow between the drain and the source. 

When $V_{gs} \downarrow$ ($V_{gs}<0$), the reverse bias voltage is enhanced $\implies$ the depletion region widens $\implies$ the channel narrows and finally closes. 
### Overall behavior
Fix $V_{gs}$, we have $I_{d}\propto V_{ds}$ for $V_ds$ small. This is just like a resistor. 

If $V_{gs}$ is not enough to close the channel $\forall x$, then after $V_{ds}$ reaches a certain point, the current is controlled by the width of the channel, and remains constant.

$V_{gs}\downarrow$ ($V_{gs}<0$), the depletion increases $\implies$ channel narrow $\implies$ the resistance $\uparrow$ 
![[Pasted image 20250722075016.png|600]]

There is almost no current flow to the gate because of the reverse bias voltage. $\implies$ input impedance of the gate = $\infty$
### Threshold voltage
At any point $x$ in the channel, if the gate-to-channel voltage $|\phi(x)-\phi_{gate}|$ is too large, then the channel would be closes at $x$. Define this threshold gate-to-channel voltage as $V_{t}$. Explicitly, $\phi_{gate}-\phi(x)=V_{t}$. The entire channel is closed if it is closed at any point $x$.

Know that the channel would first close at the drain, because given $V_{gs}$, the potential difference between the drain and the gate is the largest. Then

$\phi_{gate}-\phi_{drain(sat)}=V_{gs}-V_{ds(sat)}=V_{t}$

### Equations 
$V_{gs}-V_{ds(sat)}=V_{t}$
$I_{d(sat)} = KV_{ds(sat)}^{2}$ (This is valid only if $V_{gs}$ is not enough to close the channel.)


## Metal-oxide semiconductor FET
![[Pasted image 20250722084455.png|600]]

### Operation
Take the operation of n-channel enhancement mode MOSFET for example.

$V_{gs}>0$ $\implies$ electrons inside p is brought up to form a layer (n-channel) near the oxide, connecting the source and drain $\implies$ current can flow between source and drain

$V_{gs} \uparrow$ $\implies$ the n-channel widens, conductivity $\uparrow$ 

The operation of n-channel depletion mode MOSFET can be inferred easily.
![[Pasted image 20250722085003.png|600]]

### Connection with JFET
MOSFET can be viewed as a JFET with different offset for $V_{gs}$. n-channel JFET operates with $V_{gs}<0$. n-channel enhancement mode MOSFET operates with $V_{gs} >0$. n-channel depletion mode FET operates with $V_{gs}$ that can either $>0$ or $<0$.

The overall shapes of their $I_{d}-V_{ds}$ curves are the same.  


# HEMT
![[Pasted image 20250822114227.png]]
