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
\epsilon_{ij} & = \frac{1}{2}(\Lambda_{li}\Lambda_{lj}-\delta_{ij} )\implies\epsilon \overset{\wedge}{=}
\end{align}$$
