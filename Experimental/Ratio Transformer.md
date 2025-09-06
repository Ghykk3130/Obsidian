# Configuration 1
Configuration: $lock\ in\ amplifier \rightarrow isolation\ transformer \rightarrow ratio\ transformer \rightarrow   resistor\ connected\ in\ parallel\ with\ the\ oscilloscope$
Reading: 
	Frequency: stable
	Amplitude: stable
	
Features:
	Amplitude decreases significantly at $100 \Omega$ . (or several hundreds of volts.) See resistance drop in this measurement from $130 \Omega$ . 
	 

Problems: 
1. After charging the laptop, see slightly more error. ($R = 1M \Omega$, oscilloscope input impedance = $1 M \Omega$)

2. After connecting a multimeter in parallel with the resistor and oscilloscope, see more error. 

3. At $R = 20 \Omega$ , $f = 0.2 M Hz$ , starts to see errors. The frequency measurement is fluctuating. Like:
	As the frequency goes higher, one curve reduces in intensity. Frequency becomes less fluctuating. Like (f = $2 M \Omega$)
	
4. At $R = 5.3 K \Omega$ , oscilloscope input impedance = $1M \Omega$ , when no signal input, can see a pattern.  The resistor is still connected. As long as the oscilloscope is connected to something, there is a background noise reading.

5. At oscilloscope impedance = $1M\Omega$ , original configuration, when no signal input, can see a background noise. As long as the oscilloscope is connected to something, there is a background noise reading.

Pictures:
	($R = 1M \Omega$, oscilloscope input impedance = $1 M \Omega$, before charging the laptop)
	 ![[77439ef9002062211972044c985c323.jpg|400]] ^f609fe
	 ($R = 1M \Omega$, oscilloscope input impedance = $1 M \Omega$, after charging the laptop)
	![[98404031a1dbce9d1b93276bc7c616a.jpg|400]] ^bc041c
	($R = 20 \Omega$ , oscilloscope input impedance = $1 M \Omega$, $f = 0.2 M Hz$, before charging the laptop)
	![[f46322a84eed5a03368eddc4b48c0e7.jpg|400]] ^2f16d5
	($R = 20 \Omega$ , oscilloscope input impedance = $1 M \Omega$, $f = 2 M Hz$, before charging the laptop)
	![[d8588c11783be27bc6446babbb54abe.jpg|400]]
	($R = 5.3 K \Omega$ , oscilloscope input impedance = $1 M \Omega$, $f = 2 M Hz$, before charging the laptop)
	![[5dcfbd01797098d4d37b42123c3aeb7.jpg|400]]
	($R = 5.3 K \Omega$ , oscilloscope input impedance = $1M \Omega$, no input, before charging the laptop)
	![[866ed4ee5c5bae29c2d11ae54e5b879.jpg|400]]
	($R = 101 K \Omega$ , oscilloscope input impedance = $1 M \Omega$, $f = 2 M Hz$, before charging the laptop)
	![[4e18f3fdf452596a5d8d92ce6482b27.jpg|400]]
	(original configuration, oscilloscope input impedance = $1M \Omega$ , $f = 2MHz$ , before charging the laptop)
	![[ac26819ce743d94ec4e65fddcc25750.jpg|400]]
	(original configuration, oscilloscope input impedance = $1M \Omega$ , no input signal, oscilloscope is still connected, before charging the laptop)
	![[63ea3e7fabf09ea5bc178432503bf3f.jpg|400]]
	($R = 47 \Omega$ , oscilloscope input impedance = $1 M \Omega$, $f = 2 M Hz$, before charging the laptop)
	![[e0b0d6ecb0786fd68c8c1bf222dc48c.jpg|400]]
# Configuration 2
Configuration: $lock\ in\ amplifier \rightarrow \times 11(5.6K \Omega + 56 K \Omega)\ noninverting\ amplifier \rightarrow isolation\ transformer \rightarrow ratio\ transformer \rightarrow oscilloscope$
Problems:
1. Amplifier on $\rightarrow$ the center of the curve $1.16V$. Amplifier off $\rightarrow$ the center of the curve almost $0$ 
2. When turn on the amplifier, the signal depends on the time from the last time the amplifier was turned off. The perfect triangular wave only appears if we leave it off for long enough time. 
3. When turn on the amplifier, the signal depends on whether channel 2 of the oscilloscope is connected between the non-inverting input and the ground. If channel 2 is not connected, cannot get perfect triangular wave from the output to the ground. 

Pictures:
	($f = 0.1 M Hz$ , Note that the height of the curve is $12V$.)
	![[59ff1f9d6d66faa52eb32050babeae4.jpg|400]]
	($f = 0.1MHz$ , oscilloscope impedance = $1MHz$, blue curve-the voltage between the non-inverting input and the ground, yellow curve-the voltage between the output and the ground, amplifier off for $20s$ then on, note that the vertical scales are different)
	![[de99489371d892a7da0eed6a12f85a4.jpg|400]]
	(The same configuration as above, but different vertical scale)
	![[8ff9b2632624e31939ad5679a9250d5.jpg|400]]
	($f = 0.1MHz$ , oscilloscope impedance = $1MHz$, blue curve-the voltage between the non-inverting input and the ground, yellow curve-the voltage between the output and the ground, amplifier off, note that the vertical scales are different)
	![[44e5608fecddea4fb72d47c49240736.jpg|400]]
	($f = 0.1MHz$ , oscilloscope impedance = $1MHz$, blue curve-the voltage between the non-inverting input and the ground, yellow curve-the voltage between the output and the ground, amplifier off for $60s$ then on, note that the vertical scales are different)
	![[79bda27e9ff991e753f6d1df41dc777.jpg|400]]
	($f = 0.1MHz$ , oscilloscope impedance = $1MHz$, blue curve-the voltage between the non-inverting input and the ground, yellow curve-the voltage between the output and the ground, amplifier off for $5s$ then on, note that the vertical scales are different)
	![[afe3fb0125ccecd3991cd813fd769d0.jpg|400]]
# Configuration 3
configuration: 
	The configuration as below without $R_D$ . Test with $C_S = 0.1 pF, C_x = 1pF$ . 
![[3b365a7a50b135a6efe7822e71cd934.jpg|700]]
	The signal received is automatically $180^{\circ}$ out of phase with the original signal.
	Channel B of the isolation transformer is connected to channel 4 on the ratio transformer. Channel A is connected to channel 2 on the ratio transformer 
	
Problems:
	1. When setting $S = 8, f = 600kHz$, get $R = 2.509 m V, \theta = 66.09^{\circ}, X = 1.017 mV, Y = 2.296 mV$ . 
	2. Tuning strategy: Use the transformer to minimize R. (?) When balance, $S = 0.3957, f = 600kHz, R = 0.759 mV, \theta = -127.81^{\circ}, X = -0.465 mV, Y = -0.6 mV$
	3. After adding a variable resistor with $R_D = 0$ in without changing $S$ in 2, get $R = 0.957 mV, \theta = -115.69^{\circ}, X = -0.416 mV, Y = -0.864 mV$

# Configuration 4
Configuration: the configuration of configuration 3 with an additional $R_D$ in series or parallel with $C_s$ or $C_x$.

Features:
1. When connecting $R_D$ in series with $C_s = 1 pF$, harder and harder to balance at lower frequencies (tested from $600 kHz$ to $100kHz$) At $100kHz$, need almost hundreds k or mega ohm to vanish the phase. 
2. The point of balance failure is between $375 KHz$ and $400 KHz$. In this range, the closer the frequency to $400 KHz$, the more back-and -forth tuning needed to balance. At $400 KHz$, almost take forever to balance. The rate of convergence is getting smaller. 
3. At $600 KHz$ and $500 KHz$, when $R_D$ in series with $C_s = 1 pF$, can find $Y$ zero using $10 K$ knob, but cannot capture this zero using smaller knobs. When $R_D$ in series with $C_x = 8 pF$, $Y$ always negative. 
4. Without the mega-ohm resistor, with the new isolation transformer, the threshold frequency is slightly below $600 K Hz$. 

Problems:
	1. Tuning strategy: nullify $Y$ using the transformer. Then nullify $X$ using $R_D$ . When setting $S = 8,f = 600kHz$, get $X = 1.007 mV, Y = -2.576 mV$
	2. When tuning, first try to tune $Y$ to 0. Get $S = 0.23211, f = 600kHz$. Never get $\theta = 0^{\circ}$. Always $\theta = 180^{\circ}$ 
	3. When tuning $X$ using $R_D$ without changing $S$ in 2, any $R_D \neq 0$ would make $X$ larger. Get $X = -1.124mV, Y = 0mV$ 
	4. Now change tuning strategy. Use $R_D$ to nullify $\theta$, then use transformer to nullify $R$ . Doing so repeatedly. First set $S = 0.8, R_D = 0$ as a guess. Never be able to nullify $\theta$. The minimum value is when $R_D = 0, \theta = -68.08^{\circ}$ .  
	5. At around $225 KHz$, observe oscillation in $X$ and $Y$. In the band between $225 KHz$ and $400 K Hz$, also observe oscillation.
	6. Measure the signal into the lock-in amplifier after the capacitor (connect directly into the oscilloscope.). Observe reflected signals at $500 K Hz$ and $600 KHz$. ![[404e98b42b3c6f961789f08a5c49821.jpg|400]]
	

Log (sensitivity = $2mV$, time constant = $2ms$, amplitude = $0.5 V$):
1. $R_D = 0, S = 0.8, f = 600 kHz,$, get $R = 3.157 mV, \theta = -76.96^{\circ}$ 
2. $R_D = 0, S = 0.8, f = 20 kHz,$, get $R = 0.342 mV, \theta = -2.16^{\circ}$  
3. $R_D$ in series with $C_s = 1 p F$. First tune phase to 0 at $f = 100 kHz$, $R_D = 128 k \Omega, S = 0.8$, get $X = -3.4244 mV, Y = 0.0004 mV$ . Keep $R_D$, can never tune magnitude to zero using the ratio transformer.
4. $R_D$ in series with $C_x = 8 pF$. When $f = 100 kHz, R_D = 0, S = 0.8$, get $X = 0.4054 mV, Y = -0.0510 mV$. First tune phase to $0$ at $R_D = 136 \Omega$, get $X = 0.4120 mV, Y = 0 mV$. Then tune magnitude to $0$ at $S = 0.7119$, get $X = -0.0002 mV, Y = 0.0444mV$. Then tune phase to $0$ at $R_D = 14 \Omega$, get $X = -0.0068 mV, Y = 0 mV$. Then tune magnitude to $0$ at $S = 0.7131$, get $X = 0 mV, Y = -0.0016 mV$. Then tune phase to $0$ at $R_D = 17.3 \Omega$, get $X = 0.0002 mV, Y = 0 mV$. Then tune magnitude to $0$ at $S = 0.71306$, get $X = 0, Y = 0$. Conclusion: $R_D = 17.3 \Omega, S = 0.71306$, get everything vanished.
	![[512b22c5436b535c5eb364a89b628e9.jpg|400]]
5. $R_D$ in series with $C_x = 8 pF$. When $f = 600 kHz,R_D = 0, S = 0.8$, get $X = 0.8706 mV, Y = -2.2422 mV$. Try to tune phase to zero. Change $100 \Omega$ knob, can get the phase smaller, but not small enough. Change $1k\Omega$ knob, can first make phase smaller then bigger. Still not small enough. When change knobs with higher order of magnitude, only make phase bigger.  When change $1 M \Omega$ knob, first get higher, but start to get smaller a little bit from $8 M \Omega$ to $9 M \Omega$ . 
6. $R_D$ in series with $C_s = 1 pF$. When $f = 600 k Hz, R_D = 0, S = 0.8$, get $X = 0.9596 mV, Y = -2.6776 mV$.  Try to tune phase to zero. Change the $10k \Omega$ knob, from $0$ to $10 K \Omega$, $Y$ changes from $-2.6856 mV$ to $0.2138mV$. Setting $10 K \Omega$ knob to $0$, change the smaller knobs, can only get negative values. Cannot find the zero point of phase.
7. $R_D$ in series with $C_s = 1 pF$. When $f = 500 k Hz, R_D = 0, S = 0.8$, get $X = 1.135 mV, Y = -1.7678 mV$.  Try to tune phase to zero. Change the $10k \Omega$ knob, from $0$ to $10 K \Omega$, $Y$ changes from $-1.7678 mV$ to $0.2276mV$. Setting $10 K \Omega$ knob to $0$, change the smaller knobs, can only get negative values.
8. $R_D$ in series with $C_s = 1 pF$. When $f = 400 k Hz, R_D = 0, S = 0.8$, get $X = 1.0268 mV, Y = -1.0706 mV$.  Try to tune phase to zero. Change the $10k \Omega$ knob, from $0$ to $10 K \Omega$, $Y$ changes from $-1.0706 mV$ to $0.0032mV$. Setting $10 K \Omega$ knob to $0$, change the smaller knobs, can only get negative values.
9. $R_D$ in series with $C_s = 1 pF$. When $f = 300 k Hz, R_D = 0, S = 0.8$, get $X = 0.8144 mV, Y = -0.5806 mV$.  Try to tune phase to zero. Change the $100k \Omega$ knob, from $0$ to $100 K \Omega$, $Y$ changes from $-0.5806 mV$ to $0.6854mV$. Set $100 K \Omega$ knob to $0$, change the smaller knobs. At $R_D = 10 K \Omega$, get $Y = -0.4118 mV$. At $R_D = 20 k \Omega$, get $Y = 0.2002 mV$. Set $100 K \Omega, 10 K \Omega$ knobs to $0$, change the smaller knobs, can only get negative values. Best: at $R_D = 9999.99 \Omega$, get $Y = -0.0328 mV, X = -2.8468 mV$. Try to tune magnitude to $0$. Change the $10^{-1}$ knob, make it smaller and smaller, can only get bigger $X$ value. Best: at $S = 0.9$, get $Y = -0.2204 mV, X = -2.8042 mV$.  
10. $R_D$ in series with $C_x = 8 pF$. When $f = 300kHz, R_D = 0, S = 0.8$, get $X = 0.7464 mV, Y = -0.4536 mV$. First tune phase to $0$ at $4854 \Omega$, get $X = 2.1888 mV, Y = 0 mV$. Then tune magnitude to $0$ at $S = 0.33711$, get $X = 0 mV, Y = 0.8218 mV$. Try to tune phase to $0$. (Now the tunning goes from positive to negative.) Can cross zero when switching from $10 K \Omega$ to $20 K \Omega$. Change smaller knobs, can never cross zero. Best: at $R_D = 19910 \Omega, S = 0.33711$, get $X = 1.4954 mV, Y = 0.1204 mV$.
11. $R_D$ in series with $C_x = 8 pF$. When $f = 200kHz, R_D = 0, S = 0.8$, get $X = 0.5594 mV, Y = -0.1978 mV$. Tune phase to $0$ at $R_D = 1054.7 \Omega$, get $X = 0.8510 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.61411$, get $X = 0, Y = 0.18 mV$. Tune phase to $0$ at $R_D = 27.4 \Omega$, get $X = -0.2878 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.67411$, get $X = 0, Y = -0.0652 mV$. Tune phase to $0$ at $R_D = 123 \Omega$, get $X = 0.021 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.67034$, get $X = 0, Y = 0.0068 mV$. Tune phase to $0$ at $R_D = 114 \Omega$, get $X = -0.0014 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.6706001$, get $X = 0, Y = -0.0004 mV$. Tune phase to $0$ at $R_D = 114.2 \Omega$, get $X = -0.0002 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.6706003$. Conclusion: $R_D = 114.2 \Omega, S = 0.6706003$, get everything vanished.
	![[04729c2df3343bb2ccefd6ae739ad55.jpg|400]]
12. $R_D$ in series with $C_x = 8 pF$. Start with $f = 300kHz, R_D = 0, S = 0.67$. First tune phase to $0$ at $R_D = 4073 \Omega$, get $X = 1.3092 mV, Y = -0.0002 mV$. Then tune magnitude to $0$ at $S = 0.4053$, get $X = 0, Y = 0.5094 mV$. Try to tune the magnitude to $0$. Decreasing $R_D$ would decrease $Y$. But at $R_D = 0$, get $X =  -1.1284, Y = 0.2158$, cannot get smaller $Y$. 
13. (This datum might be wrongly recorded. Suspect that it's taken when $R_D$ is in series with $C_s = 1 pF$.) $R_D$ in series with $C_x = 8 pF$. Start with $f = 250kHz, R_D = 0, S = 0.8$, get $X = 0.7096 mV, Y = -0.4444 mV$. Tune phase to $0$ at $R_D = 23490 \Omega$, get $X = -3.0532 mV, Y = 0.0002 mV$.  Try to tune magnitude to zero. Best: when $R_D = 23490 \Omega, S = 0.999$, get $X = -2.9946 mV, Y = -0.1078 mV$.
14. $R_D$ in series with $C_x = 8 pF$. Start with $f = 250kHz, R_D = 0, S = 0.8$, get $X = 0.6438 mV, Y = -0.3024 mV$. Tune phase to $0$ at $R_D = 4004 \Omega$, get $X = 1.7038 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.4360001$, get $X = 0.0004 mV, Y = 0.4932 mV$. Tune phase to $0$ at $R_D = 21570 \Omega$, get $X = 2.0568 mV, Y = -0.0004 mV$. Tune magnitude to $0$ at $S = 0.0123$, get $X = -0.0002 mV, Y = 0.5880 mV$. Tune phase to $0$ at $R_D = 3217 K\Omega$, get $X = 0.0606 mV, Y = 0$. Try to tune magnitude to $0$, Best: when $R_D = 3217 K\Omega, S = 0$, get $X = 0.0016 mV, Y = 0.0156 mV$.
15. $R_D$ in series with $C_s = 1 pF$. Start with $f = 250kHz, R_D = 0, S = 0.8$,c get $X = 0.7038 mV, Y = -0.3846 mV$. Tune phase to $0$ at $R_D = 21010 \Omega$, get $X = -3.0496 mV, Y = -0.0002 mV$. Try to tune magnitude to zero. Best: when $R_D = 21010 \Omega, S = 0.999$, get $X = -2.9940 mV, Y = -0.2228 mV$.
16. $R_D$ in series with $C_s = 1 pF$. Start with $f = 225kHz, R_D = 0, S = 0.8$, get $X = 0.6534 mV, Y = -0.3628 mV$. Try to tune phase to $0$. Best: when $R_D = 29990 \Omega, S = 0.8$, get $X = -3.0636 mV, Y = -0.0130 mV$. Change the tuning strategy: try tuning magnitude first. Tune magnitude to $0$ at $S = 0.65032$, get $X = -0.0002 mV, Y = -0.2076 mV$. Tune phase to $0$ at $R_D = 23400 \Omega$, get $X = -3.1018 mV, Y = -0.0002 mV$. Try to tune magnitude to $0$. Best: when $R_D = 23400 \Omega, S = 0.99999$, get $X = -2.9828, Y = -0.3500$. Stuck on the upper limit of $S$.
17. $R_D$ in series with $C_x = 8 pF$. Start with $f = 225kHz, R_D = 0, S = 0.8$, get $X = 0.5982 mV, Y = -0.2662 mV$.  Tune phase to $0$ at $R_D = 2010 \Omega$, get $X = 1.1698 mV, Y = -0.0002 mV$. Tune magnitude to $0$ at $S = 0.5436$, get $X = -0.0002 mV, Y = 0.2804 mV$. Try to tune phase to $0$. Best: when $R_D = 0 \Omega, S = 0.5436$, get $X = -0.5668 mV, Y = 0.0122 mV$. Stuck on the lower limit of $R_D$. Change strategy, tune magnitude first. Tune magnitude to $0$ at $S = 0.66261$, get $X = 0, Y = -0.1252 mV$. Tune phase to $0$ at $R_D = 160 \Omega$, get $X = 0.0374, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.6538001$, get $X = 0, Y = 0.0072 mV$. Tune phase to $0$ at $R_D = 150.4 \Omega$, get $X = -0.0028 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.65404$, get $X = 0, Y = -0.0014 mV$. Tune phase to $0$ at $R_D = 152.2 \Omega$, get $X = 0.0006 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.65401$, get $X = 0, Y = 0.0002 mV$. Conclusion: when $R_D = 152.2 \Omega, S = 0.65401$, get everything vanished. 
	![[8d6eb3e355649f657e62175c89b5f11.jpg|400]]
18. $R_D$ in series with $C_x = 8 pF$. Start with $f = 250kHz, R_D = 0, S = 0.8$, get $X = 0.6474 mV, Y = -0.3112 mV$. Tune magnitude to $0$ at $S = 0.6518$, get $X = 0.0002 mV, Y = -0.1518 mV$. Tune phase to $0$ at $R_D = 176 \Omega$, get $X = 0.0502 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.64204$, get $X = -0.0002 mV, Y = 0.0174 mV$. Tune phase to $0$ at $R_D = 154 \Omega$< get $X = -0.0058 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.64271$, get $X = 0, Y = -0.003 mV$. Tune phase to $0$ at $R_D = 156.02 \Omega$, get $X = 0, Y = -0.0002 mV$. Conclusion: at $R_D = 156.02 \Omega, S = 0.64271$, get everything vanished. 
	![[1133a6fb4a4d6df0ca34f6aae4c5a8c.jpg|400]]
19. $R_D$ in series with $C_x = 8 pF$. Start with $f = 300kHz, R_D = 0, S = 0.8$, get $X = 0.7414 mV, Y = -0.4512 mV$. Tune magnitude to $0$ at $S = 0.63132$, get $X = 0, Y = -0.2088 mV$. Tune phase to $0$ at $R_D = 1082 \Omega$, get $X = 0.3696 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.55041$, get $X = 0, Y = 0.1162 mV$. Tune phase to $0$ at $R_D = 90.2 \Omega$, get $X = -0.3376 mV, Y = -0.0002 mV$. Tune magnitude to $0$ at $S = 0.62361$, get $X = 0, Y = -0.1088 mV$. Tune phase to $0$ at $R_D = 214 \Omega$, get $X = 0.0652 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.6129001$, get $X = 0.0002 mV, Y = 0.0330 mV$. Tune phase to $0$ at $R_D = 173 \Omega$, get $X = -0.0250 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.6152003$, get $X = 0, Y = -0.0178 mV$. Tune phase to $0$ at $R_D = 191.1 \Omega$, get $X = 0.007 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.61432$, get $X = 0, Y = 0.0042 mV$. Tune phase to $0$ at $R_D = 186 \Omega$, get $X = -0.002 mV, Y = -0.0002 mV$. Tune magnitude to $0$ at $S = 0.6146001$, get $X = 0.0004 mV, Y = -0.0016 mV$. Tune phase to $0$ at $R_D = 187.11 \Omega$, get $X = 0.0004 mV, Y = 0$. Tune magnitude to $0$ at $S= 0.6146$, get $X = 0, Y = 0.0004 mV$. Tune phase to $0$ at $R_D = 187 \Omega$, get $X = 0.0004 mV, Y = 0$. Tune magnitude to $0$ at $S= 0.6145001$, get $X = 0.0002 mV, Y = 0.0002 mV$. Conclusion: at $R_D = 187 \Omega, S = 0.6145001$, get everything vanished. 
	![[8b671481c72cb904c3bc1af0d27cb0d.jpg|400]]
20. $R_D$ in series with $C_x = 8 pF$. Start with $f = 400kHz, R_D = 0, S = 0.8$, get $X = 0.9204 mV, Y = -0.8528 mV$. Tune magnitude to $0$ at $S = 0.57103$, get $X = 0.0002 mV, Y = -0.4484 mV$. Tune phase to $0$ at $R_D = 445.w \Omega$, get $X = 0.3392 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.5127$, get $X = -0.0002 mV, Y = 0.2444 mV$. Tune phase to $0$ at $R_D = 177.2 \Omega$, get $X = -0.2340 mV, Y = -0.0002 mV$. Tune magnitude to $0$ at $S= 0.5505$, get $X = -0.0002 mV, Y = -0.1758 mV$. Tune phase to $0$ at $R_D = 364 \Omega$, get $X = 0.1564 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5233001$, get $X = 0, Y = 0.1144 mV$. Tune phase to $0$ at $R_D = 244 \Omega$, get $X = -0.0996 mV, Y = 0$. Tune magnitude to $0$ at $S= 0.54102$, get $X = 0, Y = -0.07 mV$. Tune phase to $0$ at $R_D = 323 \Omega$, get $X = 0.067 mV, Y = 0$.  Tune magnitude to $0$ at $S = 0.5312$, get $X = -0.0002 mV, Y = 0.0554 mV$. Tune phase to $0$ at $R_D = 256.2 \Omega$, get $X = -0.0602 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5406001$, get $X = 0.0002 mV, Y = -0.0478 mV$. Tune phase to $0$ at $R_D = 315 \Omega$, get $X = 0.0544 mV, Y = -0.0002 mV$. Tune magnitude to $0$ at $S = 0.53161$, get $X = 0.0002 mV, Y = 0.0416 mV$. Tune phase to $0$ at $R_D = 263 \Omega$, get $X = -0.0484 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5402$, get $X = 0.0002 mV, Y = -0.0362 mV$.  Tune phase to $0$ at $R_D = 310.3 \Omega$, get $X = 0.044 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5320001$, get $X = 0.0002 mV, Y = 0.0302 mV$. Tune phase to $0$ at $R_D = 267.1 \Omega$, get $X = -0.0414 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5400001$, get $X = 0.0002 mV, Y = -0.0268 mV$. Tune phase to $0$ at $R_D = 307.01 \Omega$, get $X = 0.0392 mV, Y = -0.0002 mV$.  Tune magnitude to $0$ at $S = 0.5321$, get $X = 0, Y = 0.0258 mV$. Tune phase to $0$ at $R_D = 268 \Omega$, get $X = -0.038 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.5347001$, get $X = 0, Y = -0.0418 mV$. Tune phase to $0$ at $R_D = 316.7 \Omega$, get $X = 0.0458 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5315001$, get $X = 0.0002 mV, Y = 0.05 mV$. Tune phase to $0$ at $R_D = 257.3 \Omega$, get $X = -0.0516 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.5405$, get $X = 0.0002 mV, Y = -0.045mV$. Tune phase to $0$ at $R_D = 314.1 \Omega$, get $X = 0.0532 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.5316001$, get $X = 0, Y = 0.0414 mV$. Tune phase to $0$ at $R_D = 262.15 \Omega$, get $X = -0.049 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5409001$, get $X = 0, Y = -0.0574 mV$. Tune phase to $0$ at $R_D = 327.11 \Omega$, get $X = 0.0592 mV, Y = 0.0004 mV$. Tune magnitude to $0$ at $S = 0.5314$, get $X = 0, Y = 0.0494 mV$. Conclusion: when $X$ is around $0$, $Y$ is always around $0.02 \sim 0.06$. when $Y$ is around $0$, $X$ is always around $0.03 \sim 0.06$. $R_D$ is around $250 \sim 350 \Omega$. $S$ is around $0.53 \sim 0.55$. 
21. $R_D$ in series with $C_x = 8 pF$. Start with $f = 400kHz, R_D = 0, S = 0.8$, get $X = 0.9140 mV, Y = -0.8650 mV$. try to tune phase to $0$. No $R_D$ can make the phase $0$. Only get negative values.
22. $R_D$ in series with $C_s = 1 pF$. Start with $f = 400kHz, R_D = 0, S = 0.8$, get $X = 1.0462 mV, Y = -1.0264 mV$. Tune magnitude to $0$ at $S = 0.5418001$, get $X = 0, Y = -0.5272 mV$. Cannot tune phase to $0$. Change tuning strategy. Try to tune phase to $0$. Cannot tune phase to $0$.
23. $R_D$ in series with $C_s = 1 pF$. Start with $f = 350kHz, R_D = 0, S = 0.8$, get $X = 0.9246 mV, Y = -0.7838 mV$. Tune magnitude to $0$ at $S = 0.572$, get $X = 0.0002 mV, Y = -0.4316 mV$. Cannot tune phase to $0$. Change tuning strategy. First tune phase to $0$ at $R_D = 13300.91 \Omega$, get $X = -2.7884 mV, Y = 0.0002 mV$. Cannot tune magnitude to $0$. 
24. $R_D$ in series with $C_x = 8 pF$. Start with $f = 350kHz, R_D = 0, S = 0.8$, get $X = 0.8364 mV, Y = -0.6304 mV$. Tune magnitude to $0$ at $S = 0.6108001$, get $X = 0.0002 mV, Y = -0.2768 mV$. Tune phase to $0$ at $R_D = 262 \Omega$, get $X = 0.1516 mV, Y =0$. Tune magnitude to $0$ at $S = 0.56324$, get $X = 0, Y = 0.0042 mV$. Tune phase to $0$ at $R_D = 256.21 \Omega$, get $X = -0.004 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.56371$, get $X = 0, Y = -0.003 mV$. Tune phase to $0$ at $R_D = 260.1 \Omega$, get $X = 0.003 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5633101$, get $X = 0, Y = 0.0024 mV$. Tune phase to $0$ at $R_D = 257.1 \Omega$, get $X = -0.0024 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5637$, get $X - 0.0002 mV, Y = -0.0012 mV$. Tune phase to $0$ at $R_D = 258.21 \Omega$, get $X = 0, Y = 0. Conclusion: at $R_D = 258.21 \Omega, S = 0.5637$, get everything vanished.
	![[298478ddb94dec829309dee5f41e37c 1.jpg|400]]
25. $R_D$ in series with $C_x = 8 pF$. Start with $f = 375kHz, R_D = 0, S = 0.8$, get $X = 0.8812 mV, Y = -0.7350 mV$. Tune magnitude to $0$ at $S = 0.6002202$, get $X = 0, Y = -0.3178 mV$. Tune phase to $0$ at $R_D = 305 \Omega$, get $X = 0.2082 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.54292$, get $X = 0, Y = 0.0428 mV$. Tune phase to $0$ at $R_D = 252.13 \Omega$, get $X = -0.0458 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5514$, get $X = 0, Y = -0.0286 mV$. Tune phase to $0$ at $R_D = 277.14$, get $X = 0.0164 mV, Y = 0.0002 mV$. Tune magnitude to $0$ at $S = 0.5502$, get $X = 0, Y = 0.0158 mV$. Tune phase to $0$ at $R_D = 263.2 \Omega$, get $X = -0.0094 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.55093$, get $X = 0, Y = -0.0078 mV$. Tune phase to $0$ at $R_D = 270.3 \Omega$, get $X = 0.0048 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5505001$, get $X = 0, Y = 0.0038 mV$. Tune phase to $0$ at $R_D = 266.24 \Omega$, get $X = -0.0034 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5509001$, get $X = 0, Y = 0.003 mV$. Tune phase to $0$ at $R_D = 270.2 \Omega$, get $X = 0.0034 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5506$, get $X = 0, Y = 0.0028 mV$. Tune phase to $0$ at $R_D = 267 \Omega$, get $X = -0.0018 mV, Y = 0$. Tune magnitude to $0$ at $S = 0.5506102$, get $X = -0.0002 mV, Y = -0.0014 mV$. Tune phase to $0$ at $R_D = 268.04 \Omega$, get $X = 0.0002 mV, Y = 0$. Conclusion: at $R_D = 268.04 \Omega, S = 0.5506102$, get everything vanished.
	![[2f50a2a4c86806428c3724138e4d44a.jpg|400]]
26. $R_D$ in series with $C_s = 1 pF$. When $f = 600 k Hz, R_D = 0, S = 0.8$, get $X = 0.9404 mV, Y = -2.6710 mV$. Tune magnitude to $0$ at $S = 0.5009004$, get $X = 0.0002 mV, Y = -1.4936 mV$. Try to tune phase to $0$. Crossing zero when changing $10K$ knob. But when try to fine tune with smaller knobs, cannot cross zero.

Correction: the magnitude above should refer to $X$, the phase above should refer to $Y$. 

27. $R_D$ in series with $C_x = 8 pF$. Start with $f = 400kHz$. At $AR_D = 327.11 \Omega, S = 0.5314$, get $X = 0.0068 mV, Y = 0.0544 mV, R = 0.0548 mV$. Tune $X$ to $0$ at $S = 0.5309301$, get $X = 0, Y = 0.0642 mV, R = 0.064$. Tune $Y$ to $0$ at $R_D = 260.06 \Omega$, get $X = -0.0548 mV, Y = -0.0002 mV, R = 0.0548 mV$. Conclusion: Cannot make $R$ smaller. 
28. $R_D$ in series with $C_x = 8 pF$. Start with $f = 500kHz$, get $X = 1.0344 mV, Y = -1.4412 mV$. Tune $X$ to $0$ at $S = 0.5311002$, get $X = 0.0002 mV, Y = -0.7396 mV$. Cannot tune $Y$ to $0$. Y is always negative.
29. $R_D$ in series with $C_s = 1 pF$. Start with $f = 500kHz$, get $X = 1.1744 mV, Y = -1.694 mV$. Tune $X$ to $0$ at $S = 0.5024102$, get $X = 0.0002 mV, Y = -0.7622 mV$. Cannot tune $Y$ to $0$. Observe a zero when tuning with $10 K \Omega$ knob, but cannot find this zero using smaller knobs.  
30. $R_D$ in series with $C_x = 8 pF$. Start with $f = 400 kHz$. Conclusion: at $R_D = 317 \Omega$, $S = 0.5228001$, get everything vanished.
	![[4139c668b70551e168679fa9ed2843b.jpg|400]]
31. $R_D$ in series with $C_x = 8 pF$. Start with $f= 500 kHz$. Conclusion: at $R_D = 406.93 \Omega$, $S = 0.4329913$, get everything vanished.
	![[98376206ce8a6d5bfb8c0c2bae07136.jpg|400]]
32. $R_D$ in series with $C_x = 8 pF$. Start with $f= 600 kHz$. Without the mega-ohm variable resistor. Conclusion: at $R_D = 629.2 \Omega$, $S = 0.331093$, get $X = 0.0756 mV, Y = 0$, cannot get a better value. Take forever to balance.  
33. $R_D$ in series with $C_x = 8 pF$. Start with $f = 550 kHz$. Conclusion: at $R_D = 376.62 \Omega, S = 0.421333$, get everything vanished.
	![[2edcae2873ed8f5b2eea1327757634c.jpg|400]]
34. $R_D$ in series with $C_x = 8 pF$. Start with $f = 600 KHz$. Conclusion: at $R_D = 450.3 \Omega, S = 0.3620404$, balance. 
	![[c076ea87549f000d3a421d64fa67de0.jpg|400]]
35. $R_D$ in series with $C_x = 8 pF$. Start with $f = 700 KHz$. Unable to balance. 
36. $R_D$ in series with $C_s = 1 pF$. Start with $f = 700 KHz$. Stuck when tuning $X$ to $0$ at some point. Only get negative $X$.  

# Configuration 5

Configuration: Lock-in amplifier $\rightarrow$ isolation transformer $\rightarrow$ ratio transformer $\rightarrow$ oscilloscope
	We want to compare the bandwidth of the new and old isolation transformer. 
	Other settings: $S = 1$, oscilloscope input impedance $= 1 M\Omega$
	Note: Channel A, B of the isolation transformer are connected to channel 2,3 of the ratio transformer. We ground channel 6 of the ratio transformer by connecting the shield and the inner conductor of channel 6. Checked using a multimeter that channel 6 shares the same ground as the oscilloscope ground. 

Data: in excel file 

# Configuration 6

Configuration: similar to configuration 4. Replace $C_x$ with a $1 pF$ capacitor, and $C_s$ with a $0.1 pF$ capacitor. Sensitivity $= 2 mV$. Amplitude $= 0.5 V$. 

Features:
1. Balancing is too easy. Don't need high precision to balance. In particular, very easy to balance at $500 KHz$, but cannot balance at $600 K Hz$. Normally would not expect a threshold at $600K Hz$. Too sharp?

Log:
1. $R_D$ in series with $C_x = 1 pF$. Start with $f = 600 KHz$, $S = 1,R_D = 0$, get $X = 1.553 mV, Y = -0.736 mV$. First tune $X$ to $0$, but then cannot tune $Y$ to $0$. Always get negative $Y$.
2. $R_D$ in series with $C_s = 0.1 pF$. Start with $f = 600 KHz$, $S = 1,R_D = 0$, get $X = 1.5628 mV, Y = -0.7858 mV$. First tune $X$ to $0$, but cannot tune $Y$ to $0$. See a zero with $10k \Omega$ knob, but cannot capture it with smaller knobs. 
3. $R_D$ in series with $C_s = 0.1 pF$. Start with $f = 100 KHz$, $S = 1,R_D = 0$, get $X = 1.5978 mV, Y = -0.0856 mV$. Tune $X$ to $0$. Cannot tune $Y$ to $0$. Always get negative $Y$.
4. $R_D$ in series with $C_x = 1 pF$. Start with $f = 100 KHz$, $S = 1,R_D = 0$, get $X = 1.6018 mV, Y = -0.0678 mV$. Conclusion: balance at $R_D = 240 \Omega, S = 0.1367$.
	![[fdc1d04c4915e70e20b9d2889b76b2b.jpg|400]]
5. $R_D$ in series with $C_x = 1 pF$. Start with $f = 200 KHz$, $S = 1,R_D = 0$. Conclusion: balance at $R_D = 230 \Omega, S = 0.1312$
	![[bf12821d090af4bc10c5a7946f4243a.jpg|400]]
6. $R_D$ in series with $C_x = 1 pF$. Start with $f = 400 KHz$, $S = 1,R_D = 0$. Conclusion: balance at $R_D = 302 \Omega, S = 0.1118$. 
	![[df9320e0190572205eeed022e17eab4.jpg|400]]
7. $R_D$ in series with $C_x = 1 pF$. Start with $f = 600 KHz$, $S = 1,R_D = 0$. First tune $X$ to $0$, but then cannot tune $Y$ to $0$. Always get negative $Y$.
8. $R_D$ in series with $C_x = 1 pF$. Start with $f = 500 KHz$, $S = 1,R_D = 0$, get $X = 1.573 mV, Y = 0.5928 mV$. Conclusion: balance at $R_D = 515 \Omega, S = 0.0855$.
	![[31f34c5915134a368c019350227bc8a.jpg|400]]
9. $R_D$ in series with $C_x = 1 pF$. Start with $f = 500 KHz$, $S = 1,R_D = 0$. Conclusion: balance at $R_D = 321 \Omega$, $S = 0.0845$. 
	![[6261bd6ea14a2ae0753007ee7c14262.jpg|400]]

# Configuration 8

Configuration: similar to configuration 3. Replace $C_x$ with a $1 pF$ capacitor, and $C_s$ with a $0.1 pF$ capacitor. Sensitivity $= 2 mV$. Amplitude $= 0.5 V$. Use $A -B$ mode, connect channel $6$ with ground and to $B/I$ channel. 

Features:
1. Cannot ground the "inner circuit" after the isolation transformer. Because if we ground the "inner circuit" with the chassis ground after the isolation transformer, it'll be automatically grounded to the generator, and cannot isolate. Because the chassis grounds before and after the isolation transformer are the same.  

Log:
1. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 500 KHz$. Conclusion: balance at $R_D = 33 \Omega, S = 0.4131$.
	![[7d1071dc4310b3e53d6aaccd804b160.jpg|400]]
2. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 600 KHz$. First tune $X$ to $0$, but cannot tune $Y$ to $0$. Cannot capture zero on $Y$.
3. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 600 KHz$. Cannot find zero on $X$ or $Y$

# Configuration 9

Configuration:
![[36a460d87340b4f42a11f66ec358b9b.jpg|400]]

Data:
1. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 500 KHz$. Conclusion: balance at $R_D = 106.33 \Omega, S = 0.563001$ 
	![[5e54e1c2202f60ff83373052305ee3b.jpg|400]]
2. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 600 KHz$. Best: magnitude $130 \mu V$ . Cannot tune the magnitude down further. 
3. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 600 KHz$. Can see a zero on $Y$ using $10K$ knob but cannot capture it with smaller knobs.  

# Configuration 10

Configuration: similar to configuration 7. Use front-panel external reference. Set the phase offset to $0$ .

Log:
1. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 500 KHz$. Conclusion: balance at $R_D = 309.22 \Omega, S = 0.0862022$
	![[44d3e0892d65c71ff020910ae07e4b9.jpg|400]]

# Configuration 11

Configuration:
	![[46387143c0ece343820a4ae0e93bf42.jpg|500]]
	Note that the signal at tap 2 is in phase with the signal at tap 5. Check the inner configuration of the ratio transformer to verify.  

Problems:
1. See large fluctuations. Suspect that it's because we use external reference mode, or because the signal from the waveform generator is not clean. 
2. Extremely unstable. E.g. see $X = 1$ when $R_D = 100 \Omega$. Change $R_D$ to $200$ and switch back to $100$. See a reading different from $X = 1$. The larger $A$ is, the more significant this phenomenon would be. 
3. $S$ unstable. E.g. at $A = 0.5 V, f = 400 K hz$, rotate knob and switch back would introduce a shift of several $\mu V$. 
4. Lock-in unstable. E.g. at $A = 5 V, f = 100 KHz$, touching the front panel introduces a shift of $10 \mu V$ or so. At $A =  0.5,f = 100 K Hz$, touching the front panel introduces a shift of several $\mu V$. Suspect grounding issue. 

Features:
2. The only trustworthy configuration is: A,B channels connected to tap 2,3. Then the difference between tap 5,6 follows the ratio. The difference between tap 2,5 follows $1-s$. 
3. Need high precision on $R_D$. At $A = 5V, f = 600K,3K Hz$, $0.01 \Omega$ knob would introduce a shift of several $\mu V$ in $Y$. Conclude that this is not due to frequency. 

Log:
1. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 1 KHz, A = 0.5 V$. $Y$ cannot cross $0$ at some point.  
2. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 1 KHz, A = 0.5 V$. Y cannot cross $0$. 
3. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 100 KHz, A = 0.5 V$. Y cannot cross $0$.  
4. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 100 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 66.8 \Omega, S = 0.653451$ 
	![[f9ba1a884448d02c1319ef0ae1e769f.jpg|400]]
5. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 200 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 84.72 \Omega, S = 0.652407$. 
	![[cf02dff611c132f1d2b28a458b52477.jpg|400]]
6. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 300 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 113.73 \Omega, S = 0.647164$
	![[74093d3674f6a91df978a48d326d0e0.jpg|400]]
7. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 400 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 137.46 \Omega, S = 0.646895$
	![[d1d49a75d7f94f4348df54d1be600fd.jpg|400]]
8. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 500 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 156.13 \Omega, S = 0.641058$
	![[5951f1ca84e7a2d4cd0e93a3f3c3b01.jpg|400]]
9. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 600 KHz, A = 0.5 V$. Conclusion: balance at $R_D = 185.31 \Omega, S = 0.632TenTenTen9$
	![[a98c4c0bb525ff44a0e621ea47208b1.jpg|400]]
10. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 600 KHz, A = 5 V$. Cannot tune because of problem 2 and feature 3,4.
11. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 300 KHz, A = 5 V$. Cannot tune because of problem 2 and feature 3,4. Best: at $R_D = 110.4 \Omega, S = 0.653337$, get   $X = 0.0012 mV, Y = -0.001 mV$
12. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 100 KHz, A = 5 V$. Cannot tune because of problem 2 and feature 3,4. Best: at $R_D = 56.7 \Omega, S = 0.6612672$, get $X = -0.0002 mV, Y = 0.0052 mV$

# Configuration 12

Configuration: 
	similar to configuration 3. Break the grounding of the primary and secondary inside the isolation transformer. The reference signal is from channel A instead of the waveform generator (source), so that the secondary ground and the primary ground are completely isolated. The secondary ground is just a shield, there should be no current flowing in the secondary ground. 
	Excitation: $5V$. 
	Let $R_D$ denote the precision resistor box, $R_E$ denote the extra potentiometer. 


Log:
1. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 100 KHz$. Conclusion: balance at $R_D = 880 \Omega, S = 0.1367$.
	![[66a51c46def73a3ec67233f41b37c43.jpg|400]]
2. $R_D$ in series with with $C_x = 1 pF$. Start with $f = 400 KHz$. $Y$ cannot cross $0$. 
3. $R_D$ in series with with $C_s = 0.1 pF$. Start with $f = 400 KHz$. $X$ cannot cross $0$. 
4. $R_D, R_E$ in series with $C_s = 0.1 pF$. Start with $f = 300 KHz$. Conclusion: balance at $R_D = 964 \Omega, R_E = 502.1 \Omega, S = 0.04167$
	![[ca947411bb4e80130d3c9f7afde41f4.jpg|400]]
5. $R_D$ in series with $C_s = 0.1 pF$. Start with $f = 300 KHz$. Conclusion: balance at $R_D = 29TEN1 \Omega, S = 0.03297$
	![[2ed27a491b434d91992c743b70e9467.jpg|400]]
6. $R_D,R_{E1}, R_{E2}$ in series with $C_s = 0.1 pF$. Start with $f = 400 KHz$. Conclusion: balance at $R_D = 971 \Omega,R_{E1} = 906 \Omega, R_{E2} = 502.1 \Omega, S = 0.01761$
	![[7210f3a6a65e22f56d24f069e7ac7c7.jpg|400]]
7. $R_D$ in series with $C_s = 0.1 pF$. Start with $f = 400 KHz$. $Y$ cannot cross $0$. 
8. $R_D,R_{E1}, R_{E2}$ in series with $C_s = 0.1 pF$. Start with $f = 400 KHz$. Conclusion: balance at $R_D = 752 \Omega, R_{E1} = 906 \Omega, R_{E2} = 502.1 \Omega,S = 0.02213$
9. $R_D,R_{E1}, R_{E2}$ in series with $C_s = 0.1 pF$. Start with $f = 400 KHz$. Conclusion: balance at $R_D = 773.1 \Omega, R_{E1} = 906 \Omega, R_{E2} = 502.1 \Omega,S = 0.02182$
10. $100 pF$ in series with $C_s,C_x$, $R_D,R_{E1}, R_{E2}$ in series with $C_s = 0.1 pF$. Start with $f = 400 KHz$. Conclusion: balance at $R_D = 830.1 \Omega, R_{E1} = 906 \Omega, R_{E2} = 502.1 \Omega,S = 0.01656$
11. $100 pF$ in series with $C_s,C_x$, $R_D,R_{E1}, R_{E2}$ in series with $C_s = 0.1 pF$. Start with $f = 500 KHz$. Y cannot cross $0$. 
# Testing $A-B$ mode

Configuration: connect channel $A,B$ of the lock-in in parallel to channel $1$ of a waveform generator. Connect channel $2$ of the waveform to the reference channel of the lock-in. Checked on the oscilloscope that the signals in parallel are almost identical. Channel $2$ should in tracking with channel $1$.

Features:
1. At $3 K Hz$, get $R = 0.8 \mu V$. At $30 KHz$, get $R = 0.2 \mu V$. At $300 KHz$, get $R = 1.4 \mu V$. At $1 MHz$, get $R = 20.2 \mu V$. In general, higher frequency means larger error. Not sure if this error is from the waveform generator or the lock-in. 
2. The phase in $A - B$ mode is not necessarily $0$. Suspect that it's just the phase of the error. 

# Testing $tap2 - tap 5$, $tap5 - tap 6$ and $tap 3 - tap 4$ of ratio transformer

Configuration: tap 2, 5, 6 connected to channel 1, 2, 3 on the oscilloscope. Use math to measure the difference. Test with $A = 0.5 V, f = 500 K Hz$ from the waveform generator. Use configuration 11 without lock-in and capacitors. 

Features:
1. At $S = 0.2$, get $tap5 - tap6 = 188 mV, tap2 - tap5 = 760 mV,tap2 - tap 6 = 944 mV$. Since $188 \times 4  = 752 \approx 760$, $188 + 760 = 948 \approx 944$, conclude that the ratio transformer functions properly. 
2. At $S = 0.2$, get $tap3 - tap4 = 110 mV$. Since $994 \times 0.1 = 99.4 \approx 110$, and we get almost the same $tap3 - tap4$ value at different $S$, conclude that the ratio transformer functions properly.
3. The signal from $TAP 3 - TAP 4$ is clean from $100 K Hz \sim 2 MHz$. 
4. The signal from $TAP 5 - TAP6$ is clean from $200 K Hz \sim 2 MHz$. A little bit noisy at $100 KHz$, oscilloscope can still read the frequency correctly. 
5. Measure $TAP 5 - TAP 6$. See bandwidth limitation at $f = 1MHz$. Below $1MHz$, the output is relatively stable. 
6. The signal from $TAP 2 - TAP5$ is clean from $100 K Hz \sim 2 MHz$.  

