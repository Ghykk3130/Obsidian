# Kittel 3.5
## (a)

The Coulomb interaction is given by:
$$\begin{align}
U_{col} & = 2N \cdot 2 \cdot\left( \frac{-q^{2}}{R_{0}}+ \frac{q^{2}}{2R_{0}}- \frac{q^{2}}{3R_{0}}+\dots \right)\cdot \frac{1}{2} \\
 & = 2N \cdot\left( \frac{-q^{2}}{R_{0}} \right)\left( 1- \frac{1}{2}+ \frac{1}{3}-\dots \right) \\
 & = 2N\left( - \frac{q^{2}}{R_{0}} \right)\ln{2}
\end{align}$$
where the $\frac{1}{2}$ comes from double counting. Then the total energy is:
$$\begin{align}
U & = 2N\frac{A}{R_{0}^{n} }- 2N \frac{q^{2}}{R_{0}}\ln{2}
\end{align}$$
We take derivative to find:
$$\begin{align}
 & \frac{\partial U }{\partial R_{0} }= 0 \\
\implies &  \frac{-nA}{R_{0}^{n+1}}+ \frac{q^{2}}{R_{0}^{2}}\ln{2}=0 \\
\implies & A= \frac{q^{2}\ln {2} R_{0}^{n-1}}{n}
\end{align}$$
Therefore:
$$U=\frac{2N}{R_{0}^{n}} \frac{q^{2}\ln{2} R_{0}^{n-1}}{n}- 2N \frac{q^{2}}{R_{0}}\ln 2=- \frac{2N q^{2} \ln 2}{R_{0}}\left( 1- \frac{1}{n} \right)$$
## (b)

We have:
$$\begin{align}
U(R) & = 2N \frac{A}{R^{n}}- \frac{q^{2}}{R} \ln 2 \cdot 2N \\
 & = \frac{2N}{R^{n}} \frac{q^{2}\ln{2} R_{0}^{n-1}}{n}- \frac{q^{2}}{R}\ln 2 \cdot{2}N
\end{align}$$
Then:
$$\begin{align}
U(R_{0}(1-\delta)) & = \frac{2N}{R_{0}^{n}(1-\delta)^{n}} \frac{q^{2} \ln{2} R_{0}^{n-1}}n{}- \frac{q^{2}}{R_{0}(1-\delta)}\ln 2 \cdot 2N \\
 & \approx 2N \cdot \frac{1^{2} \ln 2}{n R_{0}}\left( 1+n\delta+ \frac{n(n+1)}{2}\delta^{2} \right) - 2N \cdot \frac{q^{2}\ln 2}{R_{0}}(1+\delta+\delta^{2}) \\
 & = - \frac{2Nq^{2} \ln 2}{R_{0}}\left( 1- \frac{1}{n} \right)+ \frac{Nq^{2}\ln 2 (n-1)}{R_{0}}\delta^{2}
\end{align}$$
Therefore:
$$\begin{align}
W & = U(R_{0}(1-\delta))-U(R_{0}) \\
 & \approx \frac{Nq^{2} \ln{2}(n-1) }{R_{0}}\delta^{2}
\end{align}$$
If we distribute this across each ion:
$$\frac{W}{2N}= \frac{1}{2} \frac{q^{2}\ln 2(n-1)}{R_{0}}\delta^{2}$$
# 2.
## (1)

Clearly, the mapping is given by:
$$\begin{align}
 & R_{x}= r_{x}+\tan \theta r_{y} \\
 & R_{y}= r_{y}
\end{align}$$
Then, the deformation gradient is given by:
$$\begin{align}
\Lambda & \overset{\wedge}{=} \begin{pmatrix}
\partial R_{x} /\partial r_{x} & \partial R_{x} / \partial r_{y} \\
\partial R_{y} /\partial r_{x} & \partial R_{y} /\partial r_{y}
\end{pmatrix} \\
 & = \begin{pmatrix}
1 & \tan \theta \\
0 & 1
\end{pmatrix}
\end{align}$$
Then the strain tensor is given by:
$$\begin{align}
\epsilon_{ij} & = \frac{1}{2}(\Lambda_{li}\Lambda_{lj}-\delta_{ij} )\implies\epsilon \overset{\wedge}{=} \frac{1}{2}\begin{pmatrix}
0 & \tan \theta \\
\tan \theta & \tan ^{2}\theta
\end{pmatrix}
\end{align}$$
## (2)

We have:
$$\begin{align}
\epsilon^{2}= \frac{1}{4}\begin{pmatrix}
\tan ^{2}\theta & \tan ^{3}\theta \\
\tan ^{3}\theta & \tan ^{2}\theta+\tan ^{4}\theta
\end{pmatrix}
\end{align}$$
Therefore:
$$\begin{align}
f & = \mu \left( \frac{1}{4}\tan ^{2}\theta+ \frac{1}{4}\tan ^{2}\theta+ \frac{1}{4}\tan ^{4}\theta \right)+ \frac{\lambda}{2}\left( \frac{1}{2}\tan ^{2}\theta \right)^{2} \\
 & =\mu\left( \frac{1}{2}\tan ^{2}\theta+ \frac{1}{4}\tan ^{4}\theta \right)+ \lambda \frac{1}{8}\tan ^{4}\theta
\end{align}$$
Know that:
$$\begin{align}
 & \frac{1}{2}\tan ^{2}\theta+ \frac{1}{4}\tan ^{4}\theta= \frac{1}{2}\theta^{2}+ \mathcal{O}(\theta^{3}) \\
 & \tan ^{4}\theta= \theta^{4}+\mathcal{O }(\theta^{5})
\end{align}$$
## (3)

We know $\epsilon$. So it's easy to compute:
$$F= \frac{1}{2}C_{11}\tan ^{4}\theta+ C_{44}\tan ^{2}\theta$$
# Kittel 4.1
## (a)

Since the displacement is given by:
$$u_{s}=u\cos(\omega t-sKa)$$
Then the kinetic energy of atom s is $\frac{1}{2}M\left( \frac{du_{s}}{dt} \right)^{2}$. So the total kinetic energy is:
$$\frac{1}{2}\sum_{s}\left( \frac{du_{s}}{dt} \right)^{2}$$
The interaction between the nearest neighbors s, s+1 is $\frac{1}{2}C(u_{s}-u_{s+1})^{2}$. So the total interaction energy is:
$$\frac{1}{2}C\sum_{s}(u_{s}-u_{s+1})^{2}$$
So the total energy is:
$$E= \frac{1}{2}\sum_{s}\left( \frac{du_{s}}{dt} \right)^{2}+ \frac{1}{2}C\sum_{s}(u_{s}-u_{s+1})^{2}$$
## (b)

