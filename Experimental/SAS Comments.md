
## Comment1: 

Spontaneous emission with $\Delta t, \Delta E$. If the characteristic time of the spontaneous emission is $\frac{1}{\gamma}$, then $\Delta E \sim \hbar \gamma$ . This corresponds to a frequency $\Gamma = \Delta \nu = \frac{\gamma}{2\pi}$ . The central line has frequency $\nu_{0}$ with half of the linewidth as $\Gamma$. This is just plotting the distribution of the energy with a natural linewidth, and scaling the plot by converting the energy into the corresponding frequency. 

## Comment 2:

The rate of the stimulated emission is proportional to the intensity. Write $\alpha I$ . Ideally, this should be $\alpha_{0} I *\mathbb{1}_{\nu_{0}}$ , because there's no broadening. Only light with frequency $\nu_{0}$ would stimulate the emission. f there is broadening, replace $\alpha_{0}\mathbb{1}_{\nu_{0}}$ with $\alpha_{0} \mathcal{L}(\nu, \nu_{0})$.  The 4 in the denominator arises because $\Gamma$ is half linewidth. You should write $\mathcal{L}(\nu, \nu_{0}) = \frac{1}{1 + (\nu - \nu_{0})^2/(\Gamma/2)^2}$ 

The natural linewidth implies that atoms do not just absorb (or get stimulated by) exactly the frequency $\nu$ corresponding to its energy. There could be a "wiggle space" .  

## Comment 3: 
Let $N_2$ denote the number of particles in state 2 at time t, let $N_{20}$ denote the number of particles in state 2 at time 0. The rate of spontaneous emission is given by: 

$\frac{dN_2}{dt} = \frac{d}{dt}(N_{20}e^{-\gamma t}) = -{\gamma} N_{20}e^{-\gamma t} = -{\gamma} N_2$ 
  
The rate of stimulated emission is given by (at the maximum absorption, that is the incoming light is $\nu_{0}$):

$\frac{d N_{2}}{dt} = \alpha_{0} \mathcal{L}(\nu_{0},\nu_{0}) I N_{2}= \alpha_{0}I N_{2}$ 

Set them (the absolute values) equal then done.

## Comment 4: 
First note that by Einstein AB coefficients, we have:

$\frac{B_{21}}{B_{12}} = \frac{g_{1}}{g_{2}}$ 

To remember this, just keep in mind that the larger $g_{1}$ is, the more "space" there is in the ground state. Then particles in the excited state would be more willing to decay. 

Here we assume the degeneracies in the ground and excited states are the same, so the rate of stimulated emission and absorption are the same.

Then the difference between energy at $x + dx$  and at $x$ is caused by the stimulated emission and absorption. The incoming light would cause a change in the number of particles in each state (as time varies) in the small volume between $x$ and $x + dx$. The change of the number of particles in each state in this small volume would be reflected by the difference in the EM energy across this small volume (as time varies), because photons are emitted or absorbed. Therefore( here A is not the A coefficient, but the area):

$\begin{aligned} d(E(x+d x)-E(x)) & =(P_1 n_0 d x A B_{21}I h \nu-P_0 n_0 d x A B_{12}I h \nu )dt \\ & =(\left(P_1-P_0\right) n_0 d x A \alpha_0 \mathcal{L}\left(v, v_0\right) I h \nu) dt\end{aligned}$

Divide both sides by $A dt$ then done. 

## Comment 5
Here it is the non-degenerate distribution of the velocity, not the speed. So you don't see the $v^2$ factor in the front. This might also because it's just a one-dimensional problem.

## Comment 6:
This is an approximation. Suppose the laser frequency in the lab frame is $\nu_{0}^{'}$ , the particle is moving at $v$ . then the velocity of the light source seen in the particle frame is $-v$ .  then the frequency in the particle frame is :

$\nu_{0}^{'} (1 - \frac{v}{c})$ 

Set it equal to $\nu_{0}$ to get $\nu_{0}^{'} = \frac{\nu_{0}}{1 - v/c} \approx \nu_{0}(1 + \frac{v}{c})$ 

## Comment 7
consider a small velocity group $dn$ corresponding to $v$. Then this group only absorbs the fraction of light with frequency centered around $\nu_{0}^{'}$ calculated as above in the lab frame. (There's a broadening effect of of each velocity group due to natural linewidth.)

Write down the equation for this small velocity group:

$\begin{aligned} & I(x+d x)-I(x)=d n d x\left(P_1-P_0\right) \alpha_0 \mathcal{L}\left(\nu, \nu_0^{\prime}\right) I h \nu \\ & \Rightarrow \frac{d I}{d x}=-h \nu \alpha_0\left(P_0-P_1\right) \mathcal{L}\left(\nu, \nu_0^{\prime}\right) d n I\end{aligned}$

then we obtain 13)

### How to understand 13) ?

First, the stimulation effect is determined by i) How much light stimulate the excited particles. ii) How much energy the excited atom would released. 

To account for ii), the stimulated light must be of the same frequency as the incoming light. The stronger the incoming light is, the stronger the stimulated light would be. So there is a $h \nu$ term. 

Now consider how to include i).  The stimulation effect should ideally happen exactly at $\mathbb{1}_{\nu{0}^{'}}$, with a proportional constant $\alpha_{0}$, but here due to natural linewidth broadening, we replace it with $\alpha_{0} \mathcal{L}(\nu, \nu_{0}^{'})$ . Finally, only the population corresponding to the small velocity group with shifted lab stimulation frequency $\nu_{0}^{'}$ would get stimulated . Note that this population should be the "effective" population, which is the population at the excited state minus the population at the ground state. Don't forget to put a minus sign in the front because of the definition of $\kappa$.  Therefore we have: 

$d\kappa = h\nu \alpha_{0} \mathcal{L}(\nu, \nu_{0}^{'}) dn (P_0 - P_1)$ 

$h \nu$ is the "emission" part, $\alpha_{0} \mathcal{L}(\nu, \nu_{0}^{'}dn(P_0 - P_1))$ is the "absorption" or "stimulated" part. 



Invoke Maxwell distribution to expand $dn$ using 9). Then we obtain 14). 

## Comment 8

$v_{probe}$ means the velocity of the velocity group that is in resonance with the incoming beam with frequency $\nu$. There's no any detuning for this velocity group. So you look for the center of the Lorentzian of the stimulation coefficient. 
## Comment 9

Recall: $\mathcal{L}\left(\nu, \nu_0^{\prime}\right)=\frac{1}{1+\left(\nu-\nu_0^{\prime}\right)^2 /(\Gamma / 2)^2}$

Then I can say the distribution is concentrated in $\nu - \frac{\Gamma}{2} \sim \nu + \frac{\Gamma}{2}$ . So the critical points are:
$\nu_{0}^{'} = \nu \pm \frac{\Gamma}{2}$ 

I know that $\nu_{0}^{'} = \nu_{0}(1 + \frac{v}{c})$ . Then solve for $v$ at the critical points to get:

$v = c(\frac{\nu}{\nu_{0}} \pm \frac{\Gamma}{2\nu_{0}} - 1)= v_{probe} \pm c \frac{\Gamma}{2\nu_{0}}$  

we get $\pm c \frac{\Gamma}{2\nu_{0}} \approx 2.34\ m/s$    
  
## Comment 10

This is obvious because $m$ is too small. 

## Comment 11

Why do we want to integrate $d\kappa$ ?

We have for each small velocity group $dn$ that:

$\frac{d I}{dx} =  -d \kappa I$

This should be interpreted as the incoming light $I$ would stimulate the small velocity group $dn$ to contribute $-d \kappa I dx$ to the light passing through.
	
The total magnification of I should be the summation of the contributions from each small velocity group. So schematically:

$\frac{d I_{total}}{dx} = - \Sigma (d\kappa) I_{total}$

Intuitively, why the absorption coefficient is Gaussian as a function of $\nu$? This is because for each laser frequency $\nu$, there is a velocity group who get affected most (whose $\nu_{0}^{'}$ is exactly $\nu$ .). And the population of that velocity group is Gaussian (although not directly as a function of $\nu$ . $\nu$ and $v_{probe}$ follows a linear relationship so it's still Gaussian after a change of variable.)   

## Comment 12

There is an implicit equation: $P_0 + P_1 = 1$ . Note that the stronger $I$ is, the more $P_1$ would climb up to $P_0$ (though still bounded above by $P_0$). This should clearly be controlled by an $\alpha$ in the front by absorption.  

At the same time, $\gamma$ would attenuate the increase in the population of $P_1$, because the larger $\gamma$ is, the faster the spontaneous emission would be.

>[! Idea]
>We see that $P_0 - P_1 = \frac{1}{1 + \frac{2I}{I_{sat}}}$ has $\alpha$ dependence in $I_{sat}$,and $\alpha = \alpha_0 \mathcal{L}(\nu, \nu_{0}^{'})$ has velocity dependence in $\nu_{0}^{'}$. Intuitively, this means that the equilibrium population is different for different velocity groups. That is, only the velocity of the velocity group is such that the absorption is maximized would the group be mostly stimulated. 

We see how this implies the weak-field approximation. Say if $I$ is very small, then we just obtain $P_0 - P_1  = 1$ 

>[! Idea]
>What is weak-field approximation? It is just supposing the incoming light is so weak such that all velocity groups almost have the same stimulation. Then $P_0 - P_1$ would be independent of $v$, and equals one. 
> 
## Comment 13

$\kappa = h\nu \alpha_{0} \mathcal{L} (P_0 - P_1) n_0$

Substitute in $P_0 - P_1 = \frac{1}{1+\frac{2\alpha I}{\gamma}}$ . Then
$\begin{aligned} \kappa & =h \nu \alpha_0 n_0 \frac{1}{1+\frac{2 \alpha I}{\gamma}} \mathcal{L} \\ & =h \nu \alpha_0 n_0 \frac{1}{1+\frac{2 I}{\gamma} \alpha_0 \mathcal{L}} \mathcal{L} \\ & =h \nu \alpha_0 n_0 \frac{1}{\frac{1}{\mathcal{L}}+\frac{2 I \alpha_0}{\gamma}}\end{aligned}$
$\begin{aligned} & =h \nu \alpha_0 n_0 \frac{1}{1+\frac{\left(\mathcal{L}-\nu_0\right)^2}{\Gamma^2}+\frac{2 I}{I_{\text {sat }}}} \\ & =h v \alpha_0 n_0 \frac{1}{1+\frac{2 I}{I_{\text {sat }}}} \frac{1}{1+\frac{4\left(\nu-\nu_0\right)^2}{\Gamma^2\left(1+\frac{2 I}{I_{\text {sat }}}\right)}}\end{aligned}$
Then set $\Gamma^{'} = \Gamma \sqrt{1 + \frac{2I}{I_{sat}}}$  ,  $\mathcal{L}^{'}(\nu, \nu_{0}) = \frac{1}{1+\frac{4\left(\nu-\nu_0\right)^2}{\Gamma^2\left(1+\frac{2 I}{I_{\text {sat }}}\right)}}$ done. 

Why we want to do this?  

This is because we want to put all the varying things into the form of a Lorentzian and integrate the Lorentzian to obtain the overall absorption constant, as we did in comment 11. 

Then observe that there is a Lorentzian in the in the denominator of 20) . We want to put it in the form of some constant times a Lorentzian. So we collect everything related to Lorentzian and throw them into $\mathcal{L}^{'}(\nu, \nu_{0})$ 
## Comment 14

Let's calculate the time characteristic time. Recall how the population varies with time:

$\frac{dP_{1}}{dt} = -\gamma P_{1} - \alpha I P_1 + \alpha I P_{0}$ 

Invoke $P_0 + P_1 = 1$, then

$\frac{dP_1}{dt} = -(\gamma + 2\alpha I) P_1 + \alpha I$ 

So the characteristic time is $(\gamma + 2\alpha I)^{-1}$ 
## Comment 15

Now suppose that we don't have the weak-field approximation. Instead, we have that for stationary states,$I$ is too big to be ignored.  $P_0 - P_1 = \frac{1}{1 + \frac{2I}{I_{sat}}}$ 

Then the absorption associated with the small velocity group $dn$ with the lab absorption frequency $\nu_{0}^{'}$ by 21) is:

$\begin{aligned} d \kappa & =\frac{h \nu \alpha_0 d n}{1+2 I / I_{\text {sat }}} \mathcal{L}^{\prime}\left(\nu, \nu_0^{\prime}\right) \\ & =\frac{h \nu \alpha_0}{1+2 I / I_{\text {sat }}} \mathcal{L}^{\prime}\left(\nu, \nu_0^{\prime}\right) n_0 \sqrt{\frac{m}{2 k T \pi}} \exp \left(-\frac{m v^2}{2 k T}\right) d v\end{aligned}$

Integrate to obtain the result. 

>[! Idea]
>1) The relaxation from the weak-field approximation only attenuates the amplitude of $\kappa_{0}$, not the standard deviation. 
>2) We see that the larger $I$ is, the smaller $\kappa_{0}$ would be. This is intuitively because most of atoms are stimulated and fall to the ground state. There's nothing to be stimulated.



>[! Caveat]
>Note that you cannot take $P_0 - P_1$ as a constant and naively carry out the integral as in comment 11. This is because you have $\alpha$ dependence in $I_{sat}$, and $\alpha = \alpha_{0} \mathcal{L}(\nu, \nu_{0}^{'})$ . Clearly $\nu_{0}^{'}$ depends on $v$, so it's not a constant.

## Comment 16

Intuitively, if the lab absorption frequency is too far off from the frequency of the incoming light, then it's very hard for the stimulation effect to be comparable to spontaneous emission. The stimulation responds very weakly to the incoming light. Recall that $I_{sat}$ is the intensity required for the stimulation to reach a comparable amount (actually equal) to spontaneous emission. So we require $I_{sat}$ to be very large in this case. Then $P_{0} - P_{1} \approx 1$   

## Comment 17

Suppose we only have the pump beam. We focus on one particular velocity group. We have the population difference: $P_0 - P_1 = \frac{1}{1 + \frac{2I}{I_{sat}}}$ 

Why this would depend on the velocity of the velocity group? 

only the velocity group whose lab absorption frequency that matches with the laser would absorb significantly. And $P_0 - P_1$ would be appreciably different from $1$.  Groups that are too far away would stay almost uninfluenced. Because almost nothing gets excited, $P_0 - P_1 \approx 1$ . 

However, if the laser beam is too weak, even the velocity group whose lab absorption frequency matches the laser would not get excited too much, with $P_0 - P_1 \approx 1$. This is weak field approximation. 

For most of frequencies that are away from the lab absorption frequency, the Lorentzian is almost zero. Then $\frac{2I}{I_{sat}}$ would be very large. The population difference is almost 1. 

Once we get near to the center of the Lorentzian, $I_{sat}$ suddenly increases to suppress the value of $\frac{2I}{I_{sat}}$ down to a comparable amount with 1. Then $P_0 - P_1$ would be something between zero and one, introducing a jump.

Intuitively, this is when the laser frequency matches with the lab absorption frequency of the velocity group.

For a particular laser frequency, it's possible that the velocity group that corresponds to it is so small by Maxwell distribution. Then you won't see too much jump in the total population difference.   

## Comment 18

To get the curve on the right, first find the population of ground state atoms in the small velocity group $v$ :

$d n_{\text {ground }}=P_0 d n(v)=P_0 n_0 A \exp \left(-\frac{m v^2}{2 k T}\right) d v$

Also, we can solve for $P_0$ using 

$\left\{\begin{array}{l}P_0-P_1=\frac{1}{1+\frac{2 I}{I_{\text {sat }}}} \\ P_0+P_1=1\end{array}\right.$

Then,

$\frac{dn_{ground}}{dv} = \left(1-\frac{1}{\frac{I_{\text {sat }}}{I}+2}\right) n_0 A \exp \left(-\frac{m v^2}{2 k T}\right)$

The dip would occur where $I_{sat}$ gets small. It is at $v_{pump}$ 

The intuition for the plots is: the ground state atoms in the velocity group $v_{pump}$ would be pumped off, and leave a dip in the distribution of the ground state atoms. 

The pump off center is zero only when $\nu = \nu_{0}$ . 

## Comment 19

The infinitesimal absorption coefficient of the probe beam associated with the small velocity group $v$ is :

$d \kappa = h \nu \alpha I (P_{0} - P_{1}) dn$ 

Let's write out everything explicitly. 

$\alpha = \alpha_{0} \mathcal{L}(\nu, \nu_{0}^{'})$ . $\nu_{0}^{'} = \nu_{0}(1 + \frac{v}{c})$ . Here $\nu_{0}^{'}$ is the lab absorption frequency of the probe beam. It's different from the lab absorption frequency of the pump beam $\nu_{0}^{''}$ . Here we are using $\nu_{0}^{'}$ because we are calculating the absorption coefficient of the probe beam. We want to measure how much the intensity of the probe beam changes after passing through the material. 

$P_0 - P_1$ is where the influence of the pump beam comes into play. The probe beam is weak, so it almost exerts no influence on the population. The pump beam is entirely responsible for the population difference. Then $P_0 - P_1 = \frac{1}{1 + 2I/I_{sat}}$ , $I_{sat} = \frac{\gamma}{\alpha_{0}\mathcal{L}(\nu, \nu_0^{''})}$  , $\nu_{0}^{''} = \nu_{0}(1 - \frac{v}{c})$ 

$dn$ is just given by Maxwell distribution. $dn = n_{0}A exp(-\frac{mv^2}{2KT})$ 

We integrate to obtain a function of $\nu$ 

Intuitively what happens here is: the probe beam and the pump beam would affect velocity groups that move at exactly the opposite directions.  

## Comment 20

Transitions between 1 and 2 are not allowed.

## Comment 21

Here an orbital is specified by $n, l$ . The state of each electron is specified by $| n, l, m_l \rangle \otimes | s, m_s \rangle$ So for the electrons occupying the same orbital states, they have the same $n, l, m_l$.  

### Why are there only two electrons after fixing $n, l, m_l$ ? 

Suppose there are three electrons. We know that the spatial states are exactly the same, so the combined spatial state can only be symmetric. Then the combined spin state must be antisymmetric. The total antisymmetric state is given be the Slater's determinant (after expanded):

$\begin{align} | spin \rangle & = \frac{1}{\sqrt{3!}} (|\psi_1 \rangle |\psi_2 \rangle | \psi_3 \rangle + |\psi_2 \rangle |\psi_3 \rangle | \psi_1 \rangle + |\psi_3 \rangle |\psi_1 \rangle | \psi_2 \rangle \\ & - (|\psi_2 \rangle |\psi_1 \rangle | \psi_3 \rangle + |\psi_1 \rangle |\psi_3 \rangle | \psi_2 \rangle + |\psi_3\rangle |\psi_2 \rangle | \psi_1 \rangle)) \end{align}$ 

Since there are only two basis kets for the spin, WLOG let's say $|\psi_1 \rangle = | \psi_2 \rangle$.  Then the combined spin state vanishes. The two basis kets can at most support two electrons with antisymmetric spins. 

The two electrons would be in the singlet state. The total spin is zero. 

### The total antisymmetric state of n electrons spin coupling would always have zero total spin

We prove this for three spin coupling. The total antisymmetric wavefunction is:

$\begin{align} | spin \rangle & = \frac{1}{\sqrt{3!}} (|\psi_1 \rangle |\psi_2 \rangle | \psi_3 \rangle + |\psi_2 \rangle |\psi_3 \rangle | \psi_1 \rangle + |\psi_3 \rangle |\psi_1 \rangle | \psi_2 \rangle \\ & - (|\psi_2 \rangle |\psi_1 \rangle | \psi_3 \rangle + |\psi_1 \rangle |\psi_3 \rangle | \psi_2 \rangle + |\psi_3\rangle |\psi_2 \rangle | \psi_1 \rangle)) \end{align}$

Notice that this wavefunction includes all the singlets of the pairs chosen among the three electrons. For example $| \psi_1 \rangle | \psi_2 \rangle |\psi_3 \rangle - | \psi_2 \rangle | \psi_1 \rangle |\psi_3 \rangle$ is included as the singlet of electron 1 and 2. 

Recall that applying $L^2 = L_1^2 + L_2^2 + 2\vec{L_1} \cdot \vec{L_2}$ on the singlet of electron 1 and 2 would return zero. And here the $L^2$ for three electrons is $L^2 = L_1^2 + L_2^2 + L_3^2 + 2\vec{L_1} \cdot \vec{L_2} + 2\vec{L_1} \cdot \vec{L_3} + 2\vec{L_2} \cdot \vec{L_3}$ , which includes all the $L^2$ operators for two electrons. This would still annihilates all the singlets.  

### Why summing up the orbital angular momenta of electrons in with the same $n, l$ would result in zero?

We have proved that the spatial wavefunction has to be totally symmetric because they are all the same. It suffices to show that the only possible value of the z component of the total angular momentum is zero. Then because the z component is bounded above by $L$, we can conclude that $L$ is zero. 

Take the p state for example. We have six electrons, with $m_l = 1,1,0,0,-1,-1$ . The total wavefunction is the sum of all permutations of the tensor products of these states (with a normalization constant). Explicitly(we suppress $l$):

$| spatial \rangle  = \frac{1}{\sqrt{6!}} (|1 \rangle | 1 \rangle | 0 \rangle | 0 \rangle |-1 \rangle | -1 \rangle + ... )$ where the $...$ includes all permutations. 

Easy to see that applying $L_z$ on $|spatial \rangle$ would result in zero. 

## Comment 22

These two states have different energies due to L-S coupling. The extra term $\vec{L}\cdot \vec{S} = \frac{1}{2}(J^2 - L^2 - S^2)$ is introduced. ($L,S$ are the same but $J$ is different. )

## Comment 23

There are two mechanism for splitting: 
i) fine structure caused by L-S coupling. Introduce $\vec{L} \cdot \vec{S}$ in the Hamiltonian. So we add $\vec{J} = \vec{L} + \vec{S}$ 
ii) hyperfine structure caused by the J-I coupling. Introduce $-\vec{\mu} \cdot \vec{B} = -\lambda \vec{I} \cdot \vec{B}$ in the Hamiltonian. So we add $\vec{F} = \vec{J} + \vec{I}$

## Comment 24

To use the selection rule, determine $F$ and $F^{'}$ for initial and final states. Then $\Delta F = F^{'} - F$ are allowed. Note that the transition from $F = 0 \rightarrow F^{'} = 0$ is forbidden. 

Say if the isotope has $I = \frac{3}{2}$, then for the two hyperfine levels of $\prescript{2}{}{S}_{1/2}$ , we have $F = 1\ or\ 2$ . The first hyperfine level may correspond to $F^{'} = 0, 1, 2$.  The second may correspond to $F^{'} = 1,2,3$ . All of these are allowed $F^{'}$ for $\prescript{2}{}{P}_{3/2}$  

## Comment 25

consider the number of modes in a cavity of length $L$ . (L is controlled by the piezo controller.) $N = \frac{L}{\lambda/2}$ . 

As we adjust $L$ slightly, the laser would adjust $\lambda$ such that $N$ is maintained. If we adjust $L$ too much, then the laser would no longer be able to adjust $\lambda$ and then $N$ would hop. And laser frequency would be back. 

## Comment 26

The peaks of the Fabry-Perot cavity is separated by FSR. This serves as labels on a ruler. As you sweep the laser frequency, you can see different peaks occur. Then once you see a new peak occurs, you know that you has shifted the laser frequency by one FRS.  

## Comment 27

When in resonance, the light would be absorbed by the rubidium, and you see the dip.

## Question 1

Why do we temporarily block the pump beam and unblock the probe beam. 

## Question 2

When we minimize the effect of the mode hop, do we leave both the probe and pump beams unblocked? 

## Comment 28

Why do we need quadratic equations? It is completely not trivial to assume that the rate of scanning is linear. Therefore the solution to the equation $\frac{d\nu}{dt} = rate$ is not necessarily linear. 

We use a quadratic equation to fit the points on the solution empirically. Then we can ask at a specific time what the frequency is according to our prediction. 

## Comment 29

Recall: $\kappa = \kappa_0 exp(-\frac{(\nu - \nu_0)^2}{2\sigma_{\nu}^2})$, and $I = I_0 exp(-\kappa x)$ .

The transmission fraction is $\frac{I}{I_0}$ and we take $x = L$ . Suppose we are in resonance so $\nu = \nu_0, \Rightarrow \kappa = \kappa_0$ Then

$\kappa_0 = -ln(\frac{I}{I_0})\frac{I}{L}$ 

Recall $\kappa_0 = n_0h\nu\alpha_0\sqrt{\frac{m}{2\pi k T}}\frac{c}{\nu_0}\frac{\pi\Gamma}{2}$ (use $\nu = \nu_0$ ) $\Rightarrow$ $\alpha_0 = -ln(\frac{I}{I_0})\frac{1}{L}\frac{2}{n_0hc\pi \Gamma}\sqrt{\frac{2\pi k T}{m}}$ 

Recall $I_{sat} = \frac{\gamma}{\alpha}$ $\Rightarrow$ $I_{sat} = ...$ 

Note that Beer's law would be violated without the weak field approximation. This is because there is $I$ dependence in $\kappa_0$, and therefore the differential equation $\frac{dI}{dx} = -\kappa I$ cannot be easily solved. 

## Question 3

What do you mean by return the Rb cell to its original position? Did we misplace it? 

