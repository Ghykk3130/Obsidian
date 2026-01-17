# 1.
The matrix representation of $\hat{H_{}}_{new}$ under the basis $\ket{1},\ket{2}$ is:
$$\begin{pmatrix}
E_{0} & V_{12} \\
V_{12} & E_{0}
\end{pmatrix}$$
Then to diagonalize this matrix, we set:
$$\begin{vmatrix}
\lambda-E_{0} & -V_{12} \\
-V_{12} & \lambda-E_{0}
\end{vmatrix} =0$$
$$\implies \lambda=E_{0}+V_{12},E_{0}-V_{12}$$
Then I have eigenvectors:
$$\begin{align}
 & \ket{1^{'}} = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
 1
\end{pmatrix}= \frac{1}{\sqrt{ 2 }}(\ket{1} +\ket{2} ) \\
 & \ket{2^{'}} = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1  \\
 -1
\end{pmatrix}= \frac{1}{\sqrt{ 2 }}(\ket{1} -\ket{2} )
\end{align}$$
with corresponding eigenvalues $E_{0}+V_{12},E_{0}-V_{12}$.

Clearly, if the ratio $\frac{E_{0}}{V_{12}}$ is fixed, then the eigenvectors that I found should be the same. But their corresponding eigenvalues would be related the absolute magnitude of $E_{0},V_{12}$.
# 2.
## a).
$$\begin{align}
\vec{\sigma}\cdot \vec{a} & =\sigma_{i}a_{i} \\
 & =\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}a_{x}+\begin{pmatrix}
0 & -i \\
i & 0 
\end{pmatrix}a_{y}+\begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}a_{z}
\end{align}$$
## b).
First, take $\hat{n}=\sin \beta \cos \alpha \hat{x}+\sin \beta \cos \alpha \hat{y}+\cos \beta \hat{z}$we have:
$$\begin{align}
\vec{\sigma}\cdot \hat{n} & =\begin{pmatrix}
\cos \beta & \sin \beta \cos \alpha-i\sin \beta \sin \alpha \\
\sin \beta \cos \alpha+i\sin \beta \sin \alpha & -\cos \beta
\end{pmatrix} \\
 & =\begin{pmatrix}
\cos \beta & e^{-i\alpha}\sin \beta \\
e^{i\alpha}\sin \beta
 & -\cos \beta\end{pmatrix}
\end{align}$$
To find the eigenvectors and eigenvalues, we set:
$$\begin{align}
  \begin{vmatrix}
\lambda-\cos \beta & -\sin \beta \cos \alpha+i\sin \beta \sin \alpha \\
-\sin \beta \cos \alpha-i\sin \beta \sin \alpha & \lambda+\cos \beta
\end{vmatrix} & =0 \\
  \implies \lambda^{2}- 1 & =0 \\
  \implies \lambda & =\pm{1}
\end{align}$$
The corresponding eigenvectors are:
$$\begin{align}
v_{1} & = \frac{1}{2\sin  \frac{\beta}{2}}\begin{pmatrix}
\sin \beta \\
(1-\cos \beta)(\cos \alpha+i\sin \alpha)
\end{pmatrix}=\begin{pmatrix}
\cos \frac{\beta}{2} \\
e^{i\alpha}\sin \frac{\beta}{2} 
\end{pmatrix} \\
v_{2} & = \frac{1}{2\cos \frac{\beta}{2}}\begin{pmatrix}
\sin \beta \\
-(1+\cos \beta)(\cos \alpha+i\sin \alpha)
\end{pmatrix}=\begin{pmatrix}
\sin \frac{\beta  }{2}  \\

-e^{i\alpha}\cos \frac{\beta}{2}
\end{pmatrix} \\
\end{align}$$
Then the matrix $\vec{\sigma}\cdot \hat{n}$ is diagonalized by:
$$\vec{\sigma}\cdot \hat{n}=P\begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}P^{^{\dagger}}$$
where I have:
$$P=\begin{pmatrix}
\cos \frac{\beta}{2} & \sin \frac{\beta}{2} \\
e^{i\alpha}\sin \frac{\beta}{2} & -e^{i\alpha}\cos \frac{\beta}{2}
\end{pmatrix}$$
Then:
$$\begin{align}
\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2}\phi \right) & =\sum_{j}\left(  \frac{i\phi}{2} \right)^j (\vec{\sigma}\cdot \hat{n})^j  \\
\end{align}$$
For $j=2k$, I have:
$$\begin{align}
\sum_{j=2k}\left( \frac{i\phi}{2} \right)^j(\vec{\sigma}\cdot \hat{n}) & =\sum_{k} \frac{1}{2^k}(-1)^k\left( \frac{\phi}{2} \right)^{2k}PI^{2k}P^{^{\dagger}} \\
 & =\sum_{k}\frac{1}{2^k}(-1)^k\left(  \frac{\phi}{2} \right)^{2k}I \\
 & =I\cos \frac{\phi}{2} 
\end{align}$$
For $j=2k+1$, I have:
$$\begin{align}
\sum_{j=2k+1}\left(  \frac{i\phi}{2} \right)^{j}(\vec{\sigma}\cdot \hat{n}) & =\sum_{k} \frac{1}{(2k+1)!}i(-1)^k \left( \frac{\phi}{2} \right)^{2k+1}P \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}P^{^{\dagger}}  \\
 & =\sum_{k} \frac{1}{(2k+1)!}i(-1)^k \left(  \frac{\phi}{2} \right)^{2k}P\begin{pmatrix}
1 & 0 \\
0 & -1 
\end{pmatrix}P^{^{\dagger}} \\
 & =i\sin \frac{\phi}{2}P \begin{pmatrix}
1 & 0  \\
0 & -1
\end{pmatrix}P^{^{\dagger}} \\
 & =i\sin \frac{\phi}{2} \begin{pmatrix}
\cos \beta & e^{-i\alpha}\sin \beta \\
e^{i\alpha}\sin \beta
 & -\cos \beta\end{pmatrix}
\end{align}$$
Then the sum should be:
$$\begin{align}
\exp\left(  \frac{i\vec{\sigma}\cdot \hat{n}}{2}\phi \right)  & = \begin{pmatrix}
\cos \frac{\phi}{2} & 0 \\
0 & \cos \frac{\phi}{2} 
\end{pmatrix}+ i\sin \frac{\phi}{2} \begin{pmatrix}
\cos \beta & e^{-i\alpha}\sin \beta \\
e^{i\alpha}\sin \beta & -\cos \beta
\end{pmatrix} \\
 & =\begin{pmatrix}
\cos \frac{\phi}{2}+i\sin \frac{\phi}{2}\cos \beta & ie^{-i\alpha}\sin \beta \sin \frac{\phi}{2} \\
ie^{i\alpha}\sin \beta \sin \frac{\phi}{2} & \cos \frac{\phi}{2}-i\sin \frac{\phi}{2}\cos \beta \\
\end{pmatrix}\end{align}$$
## c).
First, take $\beta=\alpha= \frac{\pi}{2}$, I have:
$$\exp\left( \frac{i\vec{\sigma}\cdot \hat{y}}{2} \right)=\begin{pmatrix}
\cos \frac{\phi}{2} & \sin \frac{\phi}{2} \\
-\sin \frac{\phi}{2} & \cos \frac{\phi}{2}
\end{pmatrix}$$
Also, I know:
$$\begin{align}
\vec{\sigma}\cdot a & =\begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}a_{x}+ \begin{pmatrix}
0 & -i \\i & 0

\end{pmatrix}a_{y}+ \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}a_{z} \\
 & =\begin{pmatrix}
a_{z} & a_{x}-ia_{y} \\
a_{x}+ia_{y} & -a_{z}
\end{pmatrix}
\end{align}$$
Then we find:
$$\begin{align}
\exp\left( \frac{i\vec{\sigma} \cdot \hat{y}}{2} \right)(\vec{\sigma}\cdot a)\exp\left(  \frac{-i\vec{\sigma}\cdot \hat{y}}{2} \right) & =\begin{pmatrix}
\cos \frac{\phi}{2} & \sin \frac{\phi}{2} \\
-\sin \frac{\phi}{2} & \cos \frac{\phi}{2 }
\end{pmatrix} \begin{pmatrix}
a_{z} & a_{x}-ia_{y} \\
a_{x}+ i a_{y} & -a_{z}
\end{pmatrix}\begin{pmatrix}
\cos  \frac{\phi}{2} & -\sin \frac{\phi}{2}  \\
\sin \frac{\phi}{2} & \cos \frac{\phi}{2}

\end{pmatrix} \\
 & =\begin{pmatrix}
\cos \frac{\phi}{2} & \sin \frac{\phi}{2} \\
-\sin \frac{\phi}{2} &  \cos \frac{\phi}{2}
\end{pmatrix}\begin{pmatrix}
a_{z}\cos \frac{\phi}{2}+(a_{x}-ia_{y})\sin \frac{\phi}{2}   & a_{z}\left( -\sin \frac{\phi}{2} \right)+(a_{x}-ia_{y})\cos \frac{\phi}{2} \\
(a_{x}+ i a_{y})\cos \frac{\phi}{2}-a_{z}\sin \frac{\phi}{2} & (a_{x}+ia_{y})\left( -\sin \frac{\phi}{2} \right)-a_{z}\cos \frac{\phi}{2}
\end{pmatrix} \\
 & =\begin{pmatrix}
\cos \phi a_{z}+\sin \phi a_{x} & -\sin \phi a_{z}+\cos \phi a_{x}-ia_{y} \\
-\sin \phi a_{z} +\cos \phi  a_{x}  +ia_{y} & -\cos \phi a_{z}-\sin \phi a_{x}
\end{pmatrix}
\end{align}$$
We know that:
$$\vec{\sigma}\cdot a^{'}=\begin{pmatrix}
a_{z}^{'} & a_{x}^{'}-ia_{y}^{'} \\
a_{x}^{'}+ia_{y}^{'} & -a_{z}^{'}
\end{pmatrix}$$
Match the real and imaginary parts to get:
$$\begin{pmatrix}
a_{x}^{'} \\
a_{y}^{'} \\
a_{z}^{'}
\end{pmatrix}=\begin{pmatrix}
\cos \phi & 0 & -\sin \phi \\
0 & 1 & 0 \\
\sin \phi & 0 & \cos \phi
\end{pmatrix}\begin{pmatrix}
a_{x} \\
a_{y} \\
a_{z}
\end{pmatrix}$$
Clearly, this corresponds to a counterclockwise rotation about the $y$ axis by an angle of $\phi$, as viewed opposite to the positive direction of $y$.

# 3.
## a).
Directly borrow the result from $2)$, I can write down the representation of $\hat{\mathcal{O}}$:
$$\hat{\mathcal{O}}= \frac{\hbar}{2} \begin{pmatrix}
\cos \beta & e^{-i\alpha}\sin \beta \\
e^{i\alpha}\sin \beta
 & -\cos \beta\end{pmatrix}$$
The eigenvalues, again borrow from the result in $2)$ are $\pm \frac{\hbar}{2}$.
## b).
Again, I already calculated everything in $2b)$. Here I would write down the result directly:
$$\begin{align}
 & |+n \rangle=\cos \frac{\beta}{2}|+z\rangle+e^{i\alpha}\sin \frac{\beta}{2} |-z\rangle \\
 & |-n\rangle=\sin \frac{\beta}{2}|+z\rangle-e^{i\alpha} \cos \frac{\beta}{2} |-z\rangle
\end{align}$$
## c).
For $|+x\rangle$, set $\beta= \frac{\pi}{2},\alpha=0$, I obtain:
$$|+x\rangle= \frac{\sqrt{ 2 }}{2}|+z\rangle+ \frac{\sqrt{ 2 }}{2}|-z\rangle$$
For $|-x\rangle$, set $\beta= \frac{\pi}{2}, \alpha=\pi$, I obtain:
$$|-x\rangle= \frac{\sqrt{ 2 }}{2}|+z\rangle- \frac{\sqrt{  2}}{2}|-z\rangle$$
## d).
The eigenvector of $S_{x}$ that corresponds to the eigenvalue $\frac{\hbar}{2}$ is $|+x\rangle$. Then the probability to get this value is:
$$\begin{align}
|\langle+x |+n\rangle|^{2} & =| \frac{\sqrt{ 2 }}{2}\cos \frac{\beta}{2}+\frac{\sqrt{ 2 }}{2}e^{i\alpha}\cos \ \frac{\beta}{2} |^{2} \\
 & =2\cos ^{2} \frac{\alpha}{2}\cos ^{2} \frac{\beta}{2}
\end{align}$$
Set $\alpha=\pi ,\beta= \frac{\pi}{2}$, I have the probability $=0$. Set $\alpha=0, \beta= \frac{\pi}{2}$, I have the probability $=1$.
# 4.
$$\begin{align}
[S_{x},S_{y}] & =i\frac{\hbar^{2}}{4} (|+\rangle \langle-|+|-\rangle \langle +|)(-|+\rangle \langle - | + |- \rangle \langle + |)- i \frac{\hbar^{2}}{4}(-|+\rangle \langle-|+ |-\rangle \langle + |)(|+ \rangle \langle-|+ | - \rangle \langle + |) \\
 & = i \frac{\hbar^{2}}{4}(-|-\rangle \langle-|+ | + \rangle \langle+|)- i \frac{\hbar^{2}}{4}(|-\rangle\langle-|- |+\rangle \langle + |) \\
 & =i \frac{\hbar^{2}}{2}(-|-\rangle\langle-|+|+\rangle\langle+|) \\
 & =i\hbar S_{z}
\end{align}$$
Then by the property of the commutator, I have:
$$[S_{y},S_{x}]=-i\hbar S_{z}$$
I also have:
$$\begin{align}
\{S_{x},S_{y}\} & =i \frac{\hbar^{2}}{4}+\rangle\langle-|-\rangle\langle+|)(-|+\rangle\langle-|+|-\rangle\langle+|)+i \frac{\hbar^{2}}{4}(-|+\rangle\langle-|+|-\rangle\langle+|)(|+\rangle\langle-|+|-\rangle\langle+|) \\
 & =0
\end{align}$$
So the computations would follow:
$$\begin{align}
[S_{y},S_{z}] & = i \frac{\hbar^{2}}{4}(-|+\rangle\langle-|+|-\rangle\langle+|)(|+\rangle\langle+|-|-\rangle\langle-|) -i \frac{\hbar^{2}}{4}(|+\rangle\langle +| -|-\rangle\langle-|)(-|+\rangle\langle-|+|-\rangle\langle+|)\\
 & =i \frac{\hbar^{2}}{2}(|+\rangle\langle-|+|-\rangle\langle+|) \\
 & =i\hbar S_{x}
\end{align}$$
$$\implies[S_{z},S_{y}]=-i\hbar S_{x}$$
$$\begin{align}
\{S_{y},S_{z}\} & =
i \frac{\hbar^{2}}{4}(-|+\rangle\langle-|+|-\rangle\langle+|)(|+\rangle\langle+|-|-\rangle\langle-|) +i \frac{\hbar^{2}}{4}(|+\rangle\langle +| -|-\rangle\langle-|)(-|+\rangle\langle-|+|-\rangle\langle+|) \\
 & =0\end{align}$$
 Again:
 $$\begin{align}
[S_{z},S_{x}] & = \frac{\hbar^{2}}{4}(|+\rangle\langle+|-|-\rangle\langle-|)(|+\rangle\langle-|+|-\rangle\langle+|)- \frac{\hbar^{2}}{4}+\rangle\langle-|+|-\rangle\langle+|)(|+\rangle\langle+|-|-\rangle\langle-|) \\
 & =- \frac{\hbar^{2}}{2}(-|+\rangle\langle-|+|-\rangle\langle+|) \\
 & =i\hbar S_{y} \end{align}$$
 $$\implies[S_{x},S_{z}]=-i\hbar S_{y}$$
 $$\begin{align}
\{S_{z},S_{x}\} & =\frac{\hbar^{2}}{4}(|+\rangle\langle+|-|-\rangle\langle-|)(|+\rangle\langle-|+|-\rangle\langle+|)+ \frac{\hbar^{2}}{4}+\rangle\langle-|+|-\rangle\langle+|)(|+\rangle\langle+|-|-\rangle\langle-|) \\
 & =0
\end{align}$$
Now we compute:
$$\begin{align}
\{S_{x},S_{x}\} & =2S_{x}^{2} \\
 & = \frac{\hbar^{2}}{2}(|+\rangle\langle-|+|-\rangle\langle+|)^{2} \\
 & = \frac{\hbar^{2}}{2}I
\end{align}$$
$$\begin{align}
\{S_{y},S_{y}\} & =2S_{y}^{2} \\
 & =-\frac{\hbar^{2}}{2}(-|+\rangle\langle-|+|-\rangle\langle+|)^{2} \\
 &=\frac{\hbar^{2}}{2}I
\end{align}$$
$$\begin{align}
\{S_{z},S_{z}\} & = 2S_{z}^{2}  \\
 & = \frac{\hbar^{2}}{2}(|+\rangle\langle+|-|-\rangle\langle-|)^{2} \\
 & = \frac{\hbar^{2}}{2}I
\end{align}$$
Then the relations in the problem are all verified.
# 5.
The atoms that pass through the first SG device are all in $|+z\rangle$ state. 

For the second SG device, denote its orientation as $\hat{n}$. If its angle with respect to the $+z$ axis of the first SG is $\theta$, by problem 3 b), we find:
$$\begin{align}
 & |+\hat{n}\rangle= \cos \frac{\theta}{2}|+z\rangle+ i \sin \frac{\theta}{2}|-z\rangle \\
 & |-\hat{n}\rangle=\sin \frac{\theta}{2}|+z\rangle-i \cos \frac{\theta}{2}|-z\rangle
\end{align}$$
Therefore, the probability that the $|+z\rangle$ atoms make through is:
$$|\langle+\hat{n}|+z\rangle|^{2}= \cos ^{2} \frac{\theta}{2}$$
Then the atoms are all in $|+\hat{n}\rangle$ state. Therefore, the probability that they make through the last device is:
$$|\langle-z|+\hat{n}\rangle|^{2}=\sin ^{2} \frac{\theta}{2}$$
So the overall number of the atoms that finally survive is:
$$N= \frac{N_{0}}{2}\cos ^{2} \frac{\theta}{2}\sin ^{2} \frac{\theta}{2}=\frac{N_{0}}{2}
\left( 1- \sin ^{2} \frac{\theta}{2} \right)\sin ^{2} \frac{\theta}{2}$$
Clearly, this is maximized when $\sin ^{2} \frac{\theta}{2}= \frac{1}{2}$
$$\implies \frac{1-\cos \theta}{2}= \frac{1}{2}\implies \theta= \frac{\pi}{2}$$
