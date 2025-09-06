 
## Comment 1

The shot noise level is the noise caused by the spontaneous emission (white noise), interfering with the coherent laser light. 

## Comment 2

Think of the laser as an oscillator of the population of the cavity and the photons. This is because the rate of change of these two populations are i) coupled. Because the photons would stimulate the electrons to form cavities and when cavities are formed, that in turn create photons. ii) governed by two differential equations.

Why is the amplitude noise first rise then drops?

Then if we solve these two differential equations, we would find the natural frequency of the oscillation is the relaxation frequency. Thus, if we decompose the amplitude noise into frequencies, the frequencies that are close to the relaxation frequency would "resonate" and get amplified. Other frequency components are weak. 

## Question 1

Why does the amplitude noise first rises and then drops as a function of frequency? 
## Question 2

What is the simple conceptual model to understand FM and AM modulation? What is modulation index? 

## Comment 3

The distributed feedback laser (DFB) just means a laser equipped with a grating. That grating can select modes and therefore allow  single-mode generation. 

## Comment 4

Where does the frequency noise come from? 

The fundamental noise comes from spontaneous emission. The spontaneous photons have different phase than the stimulated photons. This shift the phase randomly. Recall that the instantaneous (angular) frequency is $\nu = \frac{d \phi}{dt}$. 

Other noises might include the fluctuations in the cavity length (shift the frequency directly).

## Question 3

How to find the spectral density of the noise? Why it peaks at low frequencies?

## Comment 5

Why the wavelength is approximately increasing with the temperature?

To get a simple feeling, we don't consider the change in the frequency $\nu$ as $L$ changes. Consider the modes inside the laser cavity: $m \frac{1}{2}\frac{c}{n} \frac{1}{\nu} = L \Rightarrow \nu = \frac{cm}{2nL}, m \in \mathbb{Z}$ 

If the temperature increases, $L$ would increase. The laser would adjust the injection current, which in turn decreases $n$ to maintain a constant $\nu$ . Then the wavelength $\lambda = \frac{c}{n} \frac{1}{\nu}$ would increase until a mode hop occurs.  

The overall curve appears increasing is because:

Consider every time $\frac{1}{n}$ drops down such that $\frac{cm}{2L} = c_0$  would there be a mode hop. So just right after the mode hop, $\frac{cm}{2L}$ gets adjusted to $\frac{c(m+1)}{2L}$ , and therefore $\frac{1}{n}$ gets adjusted to $\frac{m}{m+1} \frac{1}{n}$ . $m$ must keep increasing, so the wavelength right after the mode hop $\lambda  = \frac{c}{n} \frac{1}{\nu}$ must increase with $m$ .    

## Comment 6

Changing the injection current would also change the amplitude and frequency. Intuitively, the amplitude alters because the density of carriers changes, more photons can be released. The frequency alters because i) the change in the injection current would change $n$ ii) the thermal effect would change the cavity length. 

The AM response is weaker than the FM response. So we think of changing the injection current as a way to solely alter the frequency. 

## Comment 7

The feedback comes from the back reflection of the lens.

## Comment 8

The collimation system consists of the longitudinal lens (which moves along the propagation axis) and the transverse lens (which moves perpendicular to the propagation axis).

The longitudinal lens adjusts the position of the beam waist of the Gaussian beam. The transverse lens adjusts the spot size of the beam. 

## Comment 9

We first use a spectrometer to adjust roughly to the desired frequency using the temperature controller. Then we fine tune until the cell gives fluorescence.  

## Comment 10

AR coating means the $T$ is large and $R$ is small

## Comment 11

How does the rotation of the grating shift the frequency?

Recall that for the Littrow configuration, the mth mode is given observed in the direction defined by $\theta_d$ such that $m \lambda = d(sin \theta_i + sin \theta_d)$ , where $d$ is the spacing of grooves of the grating. $\theta_i, \theta_d$ are measured with respect to the normal direction of the entire grating (not individual grooves.)

The first order is the strongest, and we direct the first order back to the diode. Recall that for the Littrow configuration, the incident light is perpendicular to the surface of the grooves and the first order is the direct back reflection. So $\theta_i = \theta_d \Rightarrow \lambda = 2sin \theta_i$ 

If $\theta_i$ changes, the wavelength selected would be changed. (We assume the rotation is small such that the grating is always in the Littrow configuration)

## Comment 12

Why do we need the aperture before the Fabry-Perot cavity? 

This is because the Fabry-Perot cavity with curved mirrors would support Gaussian mode. We need to ensure that the curvature and beam waist of the incident beam to match the modes supported inside the cavity to achieve the desired reflection. (Otherwise the mode could not exist inside the cavity.)

Why if the mode matching is correct, then the reflected beam would have the same size of the incident beam?

This is because we expect the incident beam to match one of the modes, and this modes get enhanced and reflected back. The incident and reflected beams are exactly the same.

Why the divergence angle has to be small? 

Or the curvature of the wavefront would not match. 

## Question 4

Don't understand the reasoning here. Why this is a reason for the dominant effect of FM?
## Things to read

1. Debye model
2. Energy band theory
3. The equations governed the oscillations of the cavity and photon populations inside the laser.
4. Skin effect review. Longitudinal and transverses modes review. 
5. Gaussian beam