# Kittel 6.1

For non-interacting electron gas, the energy of state $\ket{\mathbf{k}}$ given by:
$$\epsilon= \frac{\hbar^{2}k^{2}}{2m}$$
We can compute the density of states. The equation above defines a sphere with radius $\sqrt{ \frac{2m\epsilon}{\hbar^{2}} }$. Then the volume contained within is $V=\frac{4}{3}\pi\left( \frac{2m\epsilon}{\hbar^{2}} \right)^{ 3/2}$. If we vary $\epsilon$ by $d\epsilon$, the volume change is:
$$\begin{align}
\frac{\partial V}{\partial\epsilon}d\epsilon= 2\pi\left( \frac{2m}{\hbar} \right)^{3/2} \epsilon^{1/2}d\epsilon
\end{align}$$
Therefore, the density of states is:
$$\mathscr{D}(\epsilon)= \frac{V}{(2\pi)^{3}} 2\pi \left( \frac{2m}{\hbar} \right)^{3/2}\epsilon^{1/2}= \frac{V m^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}}\epsilon^{1/2}$$
The energy at $T=0$ is given by:
$$\begin{align}
U_{0} & = \int_{0}^{\epsilon_{F}}d\epsilon \mathscr{D}(\epsilon)\epsilon \\
 & = \frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}} \frac{2}{5}2\epsilon_{F}^{5/2} \\
 & = \frac{4}{5}\pi V \left( \frac{\sqrt{ 2m }}{h} \right)^{3}\epsilon_{F}^{5/2}
\end{align}$$
The Fermi energy is constrained by the total number of electrons:
$$\begin{align}
N & = \int_{0}^{\epsilon_{F}}\epsilon \mathscr{D}(\epsilon) \\
 & = \frac{2}{3} \frac{Vm^{3/2}}{\sqrt{ 2 }\pi^{2}\hbar^{3}}\epsilon_{F}^{3/2} \\
 & = \frac{4}{3}V\pi\left( \frac{\sqrt{ 2m }}{h} \right)^{3}\epsilon_{F}^{3/2}
\end{align}$$
Then it's easy to find:
$$U_{0}= \frac{3}{5}N\epsilon_{F}$$
Note that in the calculation of the density of states, I ignored the spin degeneracy. If we consider the spin degeneracy, $\mathscr{D}$ should be two times larger. It's obvious from the above process that this factor of two would be canceled out, since both the integrals for $U$ and $N$ involve $\mathscr{D}$. 
# Kittel 6.2
## (a)

We know that:
$$\begin{align}
 & N= \frac{4}{3}V\pi\left( \frac{\sqrt{ 2m }}{h} \right)^{3}\epsilon_{F}^{3/2} \\
\implies & \epsilon_{F}= \left( \frac{3N}{4\pi} \right)^{2/3}\left( \frac{h}{\sqrt{ 2m }} \right)^{2} V^{-2/3}
\end{align}$$
Then:
$$U_{0}= \frac{3}{5}N\epsilon_{F}= \frac{3}{5}N\left( \frac{3N}{4\pi} \right)^{2/3}\left( \frac{h}{\sqrt{ 2m }} \right)^{2} V^{-2/3}$$
Therefore:
$$\begin{align}
p & = -\left( \frac{\partial U}{\partial V} \right)_{N}= \frac{2}{5}N\left( \frac{3N}{4\pi} \right)^{2/3}\left( \frac{h}{\sqrt{ 2m }} \right)^{2}V^{-5/3}= \frac{2 }{3} \frac{U_{0}}{V}
\end{align}$$
## (b)

We have:
$$\begin{align}
\left( \frac{\partial p}{\partial V} \right)_{N} & = - \frac{2}{3}N\left( \frac{3N}{4\pi} \right)^{2/3}\left( \frac{h}{\sqrt{ 2m }} \right)^{3} V^{-8/3} \\
\implies-V\left( \frac{\partial p}{\partial V} \right)_{N} & = \frac{2}{3}N\left( \frac{3N}{r\pi} \right)^{2/3}\left( \frac{h}{\sqrt{ 2m }} \right)^{3}V^{-5/3}
\end{align}$$
Then obviously:
$$B=-V\left( \frac{\partial p}{\partial V} \right)_{N}=\frac{5p}{3}= \frac{10U_{0}}{9V}$$
## (c)

We have $C=2.65\text{ cm}^{-3},\ \epsilon_{F}=3.23\ eV$. Then:
$$B= \frac{10U_{0}}{9V}= \frac{2}{3}C\epsilon_{F}=9.13\times 10^{-13}\text{ Pa}$$
# Kittel 6.3

Take a unit area. We have:
$$\begin{align}
n= \int_{0}^{\infty}d\epsilon D(\epsilon) \frac{1}{e^{\beta\epsilon}\mathcal{z}^{-1}+1}
\end{align}$$
Know that $D(\epsilon)= \frac{m}{\pi \hbar^{2}}$, independent of $\epsilon$, it suffices to evaluate:
$$\begin{align}
\int_{0}^{\infty}d\epsilon \frac{1}{e^{\beta\epsilon}\mathcal{z}^{-1}+1} & = \int d\epsilon \frac{e^{-\beta\epsilon}}{\mathcal{z}^{-1}+e^{-\beta\epsilon}} \\
 & = -kT\int d(e^{-\beta\epsilon}) \frac{1}{\mathcal{z}^{-1}+e^{-\beta\epsilon}} \\
 & = kT\ln(1+\mathcal{z})
\end{align}$$
Then:
$$\begin{align}
 & n  = \frac{m}{\pi \hbar^{2}}kT\ln(1+\mathcal{z}) \\
 \implies& z= e^{\beta \mu}= \exp\left( \frac{\pi \hbar^{2}n}{mkT} \right)-1 \\
\implies & \mu= kT\ln\left( \exp\left( \frac{\pi \hbar n}{mkT} \right)-1 \right) 
\end{align}$$
# Kittel 6.6

Assume the problem is one-dimensional. Restrict to a point in the sample. Let $E=E_{0}e^{-i\omega t}$. We make the ansatz that $v=v_{0}e^{-i\omega t}$. Then:
$$\begin{align}
 & m \frac{d v}{d t}=- \frac{mv}{\tau}-|e| E \\
\implies &  -i\omega mv_{0}=- \frac{mv_{0}}{\tau}-|e|E_{0} \\
\implies & v_{0}= \frac{|e|E_{0}}{m} \frac{1}{i\omega-1 /\tau}
\end{align}$$
Then:
$$\begin{align}
j & = -n|e| v \\
 & = -n|e| v_{0}e^{-i\omega t} \\
 & = \frac{ne^{2}\tau}{m} \frac{1+i\tau \omega}{1+\tau^{2}\omega^{2}}E_{0}e^{-i\omega t} \\
 & = \frac{ne^{2}\tau}{m} \frac{1+i\tau \omega}{1+\tau^{2}\omega^{2}}E
\end{align}$$
Therefore the conductivity is $\sigma(\omega)=\sigma(0) \frac{1+i\tau \omega}{1+\tau^{2}\omega^{2}}\text{ where }\sigma(0)= \frac{ne^{2}\tau}{m}$.


