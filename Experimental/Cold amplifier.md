# 1. Layout

FHX 35X
![[Pasted image 20250815084807.png|500]]

FHX 35LG
![[Pasted image 20250815084844.png|500]]

Circuit diagram:
![[188cd31b82273ba525698bd4329b9606.jpg|500]]

Layout on the substrate:
![[1e783fd0a713624466194931c80813f4.jpg|500]]

# 2. Log:

08/13/2025
Wire bonding with aluminum wire (diameter=$33\mu m$)
![[5bf207f7e76df0cd7961aeb9635a77d5.jpg|300]]

08/14/2025
Janis probe diagram:
![[29924ad54f9584d657331f4d93c095f2.jpg|500]]

Note: The BNC shielding on top of the Jenis probe are not connected.

08/15/2025
Attach gate to 6, drain to 1, source to 4
Feed the signal into the lock-in, use internal oscillator. No output filter capacitor.

Let $R_{g},R_{d}$ denote the resistors connected to the gate and drain respectively. 
At $V_{gs}=-93.4 mV,\text{amplitude}=200 \mu V,f=100kHz,R_{d}=900\Omega,R_{g}=0$, get $R=1.41 \sim 1.54m V$

08/16/2025
Test FHX35LG
Circuit diagram: 
![[0b5b45bb4b577fcde7d86097e8aeafaa.jpg|200]]

Sweep $V_{d}$ at $1Hz$, with $V_{pp}=4V,\text{offset}=2V$. Set $R_{s}=10k\Omega \ll \text{effective resistance of the transistor}$.
$V_{gs}=0$
![[e271df2c32c85ab03b3c75c7a3631fb4.jpg|400]]
$V_{gs}=-0.2V$
![[57e83c397e7ee4c8e705ddce88698ef3.jpg|400]]
$V_{gs}=-0.5V$
![[cf692ddd4ff66216604756ce495b73ac.jpg|400]]
$V_{gs}=-0.8V$
![[fcefc77d52c004c93bff9e5c66093303.jpg|400]]
$V_{gs}=-1V$
![[d7805ea95c2bee08dc46aa03e5fa17b2.jpg|400]]

08/18/2025
Sweep $V_{d}$ at $1Hz$, with $V_{pp}=2V,\text{offset}=1V$. Set $R_{s}=10\Omega \ll \text{effective resistance of the transistor}$.

Features:
1. Excessive noise in $V_{d}$ from the beginning. Noise almost gone after several minutes. Suspect that this is due to the transistor
2. Observe $I_{gs} \sim 15mA \neq{0}$ at $V_{gs}=-0.36V$. Suspect that the transistor was damaged. 
3. The DC power supply and the oscilloscope automatically share the same ground through the power cord.

$V_{gs}=0$
![[5ec78fdb98f839c47a17a7b58b894979.jpg|400]]

$V_{gs}=-0.36V$
![[f3ba4def249d361cdcac6613ce9e8914.jpg|400]]

$V_{gs}=-0.5V$
![[83a1644b1b1af2a5056db41fcb31062b.jpg|400]]

$V_{gs}=-0.8V$
![[4185bf9a242ca6b4eb74c7b73df0ac1c.jpg|400]]

$V_{gs}=-1V$
![[2759e1ed784c7bc92f1e0c7448fe2002.jpg|400]]

Connect the drain directly to $V_{d}$, the source directly to the ground, the gate directly to $V_{gs}$. Adjust $V_{d}$ such that it's almost DC. Use a multimeter to measure the gate leakage current. Almost get $I_{g}=0$.


08/19/2025
Measure the gate leakage current. Connect a resistor in in series with the gate and measure the voltage drop across the resistor. Calculate the gate leakage current using Ohm's law.

At $V_{d}=0,V_{gs}=1V$, get $I_{g}=7mA$

Changed for another transistor. Didn't observe gate leakage current.


08/20/2025
The same configuration as 08/16. 

Observe a gap in of $V_{d}$. Suspect that there is an activation voltage. Yellow is $V_{d}$. Blue is $V_{R_{S}}$. 
![[ae42e5bd7f0dc294d0c07a4dff0677a1.jpg|400]]

Observe excessive noise in blue. Suspect that this is due to the magnet. Test: create a loop using BNC, and measure the current through it. Observe similar pattern

Build the amplifier circuit. 
Ideally, the maximum amplification is achieved when $V_{g}=0$. But there is a cutoff voltage, under which the amplification in AC is gone. 

At $V_{d}=0.5V,V_{gs}=-0.5V,\text{AC amplitude}=10mV,f=10Hz,R_{d}=100\Omega$. Maximized at $V_{d}=-4.2V$
![[f4626db9d944bbc1e6d0ea5c1b784377.jpg|400]]

Connect the amplifier to the bridge.
![[859543e85f65837c6722482ccdb73293.jpg|500]]

Use $V_{gs}=-0.5V,V_{d}=0.5V,R_{g}=1M\Omega,R_{d}=10\Omega, \text{AC amplitude}=10mV,f=10Hz$. Didn't see sine signal on the oscilloscope. Try other combinations of parameters, also saw nothing. Suspect that the bias T is not mixing the AC and DC properly. 

Suspect that $R_{g}$ is not large enough for proper mixing. Use $R_{g}=1000M\Omega$, still nothing.

Suspect the improper mixing is due to leakage current. Measured the voltage drop across $R_{g}$, found that almost all of $V_{gs}$ is dropped across $R_{g}$. 

Transistor damaged. The gate-source resistance is $200\Omega$. Suspect damaged when baking. 

When testing the damage, more damage was created. Now gate-source resistance is roughly $20\Omega$. Measured when the chip is taken off the probe.


08/21/2025
Made a new sample.

Found that the multimeter resistance mode may damage the gate. So avoid using multimeters in the future.

Test at room temperature if the new sample is working.
- Leave the drain open. Source to the ground, A reference resistor ($100\Omega$) is connected in series with the gate. Supply a small voltage to the gate to avoid damage. Figure out the gate-source resistance by comparing the voltage drop across the reference resistor and the gate to source. 
- Find that there is a finite voltage drop across the resistor. So conclude that there is a large leakage current. 
- Also conclude that the gate-source resistance is comparable with $100\Omega$.
- Problem: didn't read any current on the power supply. Inconsistent

Test the $I-V$ characteristic behavior. 
- The behavior is ideal except for the peak.

Connect a resistor ($1M\Omega \gg R_{s}$) in series with the gate. Still the $I-V$ characteristic test setup. Want to see if there's any damping in the reading.
- No damping in the $I-V$ characteristic curve. 
- Conclude that the gate-source resistance $\gg$ $1M\Omega$. Inconsistent with the first test.


08/26/2025
Use $V_{pp}=100mV,\text{offset}=100mV,R_{s}=1K\Omega$. 
- Looks good in V-t mode and X-Y mode. Looks exactly the same as the data sheet.
- Peak disappears.
- Observe the drain-source resistance begins significant at $V_{gs}=-0.2\sim-0.3V$
- Even use $R_{s}$ very small, we still get perfect looking I-V curves.

 Turn off $V_{gs}$, found that plugging in $V_{gs}$ would make a difference at $I$. Suspect capacitance issue.
![[4d049dbec963840328e98a79c0caf4c9.jpg|400]]

Put $1M\Omega$ at the gate to the ground, $1000M\Omega$ in series with the gate before the $1M\Omega$. By before, I mean that closer to the gate, before the T junction. Observe:
- Curves very insensitive to $V_{gs}$ changes

Try to test the "bias T" build by resistor and capacitor.
- First put in $1000M\Omega$ resistor, without capacitor. Signal not mixing. Only see AC signal with a very small DC offset ($\mu V$)
- Found that $1000M\Omega$ is broken.
- Use $1M\Omega$ and $8pF$. See mixed signal. Still a very small DC offset when DC offset is zero. Observe the pattern at $V_{exc}=1V,\text{DC offest}=-0.3V$. 
![[08f556086c96f45848e8a47c1b3a01d2.jpg|400]]


08/27/2025
The I-V curve testing setup. 
- Observe very large gate current when turning on $V_{gs}$. Current becomes normal after a while. Suspect that it's capacitor charging.
- If unplug $V_{gs}$ when $V_{gs}=0$, still observe that the voltage across the current resistor curves up a little bit. Suspect that it's because $V_{gs}$ acts like a capacitor w.r.t. AC. AC current from $V_{d}$ gets coupled away slightly. Test the idea:
	- At $1Hz$, peak $138mV\rightarrow{1}40mV$ if unplugged
	- At $5Hz$, peak $140mV\rightarrow{1}56mV$ if unplugged

Test the amplifier setup, with lock-in mixing. 
- Observe that when the amplitude and DC offset are zero, there is a small DC offset of $\sim-250\mu V$ on the oscilloscope.
- When amplitude is $10mV$, still see small DC offset of $+$ hundreds of $\mu V$ on the scope.
- Note that the amplitude on the lock-in is rms amplitude.
- Test with $f=100KHz,\text{amplitude}=10mV,\text{DC offset}=-0.2V$. $V_{d}=0.3V$. Get:
	- $R_{d}=200\Omega,V\text{ peak-to-peak}=44mV$
	![[e548bb0abc474128d805af7b387574f6.jpg|400]]
	- $R_{d}=300\Omega$,$V\text{ peak-to-peak}=32mV$. The amplification is also random. In general, the higher $R_{d}$ is, the smaller the amplification would be.
	- When tuning from $R_{d}=130\Omega$ to $R_{d}=120\Omega$, see significant noise. In general, observe that this noise tends to occur when $R_{d}$ is small. But the occurrence is random.
	![[75ad5b3adc5b25aa26c0bb2cc64cf5db 1.jpg|400]]
	- $I_{d}=0$. Suspect that it's because the drain-source resistance is too large.

Test the mixing of AC and DC source. 
	![[2a97c217740adf3629083a4d277d3f59.jpg|400]]
- Use $C_{2}=1pF,C_{1}=8pF,R_{1}=1000M\Omega,R_{{2}}=100M\Omega,V_{DC}=-3V$. Observe a DC offset of $-30mV$ on the oscilloscope. Suspect that this is because the input impedance of the scope is only $1M\Omega$. 
- Also see attenuation of the amplitude of the AC signal. This is expected.

Try rough balancing with the setup above. Haven't put in the transistor yet.
- Use $C_{1}=0.1pF,C_{2}=1pF,R_{1}=1000M\Omega,R_{2}=100M\Omega,f=100KHz,\text{excitation}=100mV$. Able to get a rough balance of $X=-0.02\mu V,Y=-0.56\mu V$. This means that everything before the transistor is working properly.

08/29/2025

Use dual channel balancing. Without any isolation.
- Not sure with the strategy of balancing.
- See noise of $\sim{0}.001mV$. This noise does not decrease if we increase the excitation. Means that the noise does not come from the bridge part, but comes from the amplifier part. Suspect that it's the thermal noise from the warm components, or environmental pickup. 
- $X,Y$ are equally sensitive to relative phase and magnitude. 
- $V_{d}=1.65V$, with a $100pF$ in series with the drain into the lock-in to filter out the DC, $R_{d}=10K\Omega$, with the usual voltage divider at the gate ($1M\Omega$ to the DC power supply, $1000M\Omega$ to the  ground), get a noise about $0.0002mV$ fluctuation. 
- If $V_{d}$ is increased, the noise would increase.
- If balance without the transistor, able to achieve a very good balance without noise. Suspect that the noise is from the transistor. 

09/02/2025

Try balancing at $303KHz$. Use $V_{d}=2.5V, R_{d}=10K\Omega$, with the usual voltage divider at the gate ( to the DC power supply, $1000M\Omega$ to the  ground), $V_{g}=-0.35V$.
- Balance with noise $0.0005mV$ in $R$. $1\%$ change in $S$ is roughly the same size as the noise. 
- The response to $S$ near balance is roughly linear.
- Doubles the excitation, the noise-to-signal ratio improves. The response of $R$ to $S$ is more significant compared to the noise.
- The noise-to-signal ratio improves if $V_{g}$ decreases. Means that the noise is not from the bridge.
- The noise-to-signal ratio doesn't improve if $V_{d}$ changes.

Try to put an isolation transformer before the input of the lock-in. The noise-to-signal ratio doesn't improve.

Want to test if the noise in 09/29/2025 is from the transistor, or the bridge.
- With $\text{excitation}=0, V_{g}=0,V_{d}=0$, See noise $\sim 0.0001mV$.
# 3. Thoughts

Suspect that the inconsistency on 08/21/2025 arises because the gate to source junction cannot be modeled as a resistor. 

Why is there a peak?









connect two resistors $1M\Omega$ from the gate, one to the ground, another to the DC power supply. 
Do everything in the VTI to reduce noise, increase protection. 

 











