# M1
## a).
$$\begin{align}
[C,Q] \ket{\psi_{q}}  & =(CQ-QC)\ket{\psi_{q}} \\
 & = q\ket{\psi_{-q}} -(-q\ket{\psi_{-q}} ) \\
 & = 2q \ket{\psi_{-q}}  \\
 & = 2q C \ket{\psi_{q}}  
\end{align}$$
So:
$$[C,Q]=2qC$$
Similarly, easy to show:
$$\{ C,Q \}=0$$
## b)
Claim that the common eigenvectors are $\frac{1}{\sqrt{ 2 }}\ket{\psi_{q}}+ \frac{1}{\sqrt{ 2 }}\ket{\psi_{{-q}}}$
# L1
## a)
Eve would get $\frac{\hbar}{2}$ with probability $\cos ^{2} \frac{\theta}{2}$, $-\frac{\hbar}{2}$ with probability $\sin ^{2} \frac{\theta}{2}$.

## b)
After Eve's measurement:
$$\begin{align}
 & \cos ^{2} \frac{\theta}{2} \text{ probabiltiy to get into } \cos \frac{\theta}{2} \ket{+z} + \sin \frac{\theta}{2} \ket{-z}  \\
 & \sin ^{2} \frac{\theta}{2} \text{probabiltiy to get into }\sin \frac{\theta}{2} \ket{+z} - \cos  \frac{\theta}{2} \ket{-z}  
\end{align}$$
So:
$$P(\text{same};\theta_{spy})= \cos^4 \frac{\theta_{spy}}{2}+ \sin^4 \frac{\theta_{spy}}{2}$$
## c)
$$\begin{align}
\int_{0}^{2\pi} d\theta\left(  \cos^4 \frac{\theta}{2}+ \sin^4 \frac{\theta}{2} \right)
\end{align}$$
Easy to show:
$$\begin{align}
\int_{0}^{2\pi}d\theta \cos^4 \frac{\theta}{2} & = \int d\theta \left(  \frac{1}{4}- \frac{1}{2}\cos \theta+ \frac{1}{4}\cos ^{2}\theta \right) \\
 & = \frac{\pi}{2}+0 + \frac{\pi}{4} \\ & = \frac{3}{4}\pi
\end{align}$$
Obviously,
$$\int_{0}^{2\pi}d\theta \cos^4 \frac{\theta}{2}=\int_{0}^{2\pi}d\theta \sin^4 \frac{\theta}{2}$$
So:
$$\int d\theta\left( \cos^4 \frac{\theta}{2}+ \sin^4 \frac{\theta}{2}\right)= \frac{3}{2}\pi $$
So the average value is:
$$\frac{1}{2\pi} \frac{3}{2}\pi= \frac{3}{4}$$
# L2
## a)
$$\begin{align}
\bra{\psi,t=0} \psi,t=0 \rangle & = |A|^{2} \sum \left(  \frac{1}{2} \right)^n \\
 & = 2|A|^{2}=1 \\
\implies A & = \frac{1}{\sqrt{ 2 }}
\end{align}$$
## b)
$$\begin{align}
\bra{n} \mathscr{U} \ket{m}  & = \bra{n} e^{- \frac{i}{\hbar}Ht} \ket{m}  \\
 & = \delta_{nm} e^{- \frac{i}{\hbar}E_{m}t} \\
 & = \delta_{nm} e^{- i \left(  \frac{1}{2}+m \right)\omega t}
\end{align}$$
The matrix looks like:
$$\begin{pmatrix}
e^{- \frac{1}{2}i\omega t} & 0 & 0 & \dots  & \dots \\
0 & e^{- \frac{3}{2}i\omega t} & 0 & \dots &\dots  \\
0 & 0 & e^{- \frac{5}{2}i\omega t} & \dots & \dots \\
 \dots & \dots & \dots & \dots & \dots \\
\end{pmatrix}$$
## c) 
$$\begin{align}  \ket{\psi(t)} & = \frac{1}{\sqrt{ 2 }} \sum \left(  \frac{1}{\sqrt{ 2 }} \right)^n \mathscr{U} \ket{n}  \\
 & = \frac{1}{\sqrt{ 2 }} \sum\left(  \frac{1}{\sqrt{ 2 }} \right)^n e^{- i\left( \frac{1}{2}+n \right)\omega t}\ket{n} 
\end{align}$$
## d)
The expectation value is given by:
$$\begin{align}
\langle H \rangle & = \frac{1}{2} \sum_{n,m}\bra{m} \left(  \frac{1}{\sqrt{ 2 }} \right)^m e^{i\left(  \frac{1}{2}+m \right)\omega t} H  \left(  \frac{1}{\sqrt{ 2 }} \right)^n e^{-i\left(  \frac{1}{2}+n \right)\omega t}\ket{n} \\
 & =  \sum_{n} \cdot \left(  \frac{1}{2} \right)^{n+1} \left(  \frac{1}{2}+n \right) \hbar \omega
\end{align}$$
Note that this does not change with time.

The state $\ket{\psi(t)}$ is not an eigenstate of $H$.

$\langle x \rangle$ should not be time-independent. The reason why $\langle H \rangle$ is time independent is because during the time evolution, each eigensubspace is non-degenerate. Each ket $\ket{n}$ just rotate a little bit, without jumping to other eigensubspaces. Then the expectation value would stay the same.

But during the time evolution, $\ket{n}$ would swept across multiple eigensubspaces of $x$, because $[x,H]\neq 0$. Then the component pickup for each eigencomponent constantly changes with time, leading to a time-dependent expectation value. 


