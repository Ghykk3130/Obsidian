# 9.1

1. How to describe the positions of atoms in a monatomic chain? We first take the equilibrium points of atoms as the lattice points. Describe the position of an atom in the chain as the position deviated from the equilibrium position. $x_n = \delta x_n + an$ where $a$ is the length of the unit cell.

2. Wave equation: $m \ddot{\delta x_n} = -\kappa(\delta x_n -\delta x_{n-1}) + \kappa(\delta x_{n+1} -\delta x_{n})$   Solution guess: $A exp(i(\omega t - kan))$ 
	The dispersion relation (substitute in the guess): $\omega = 2 \sqrt{\frac{\kappa}{m}}|sin(\frac{ka}{2})|$  
>[! Remark]
>The wave equation is only defined at a discrete set of spatial points. Think about the wave equation as $Aexp(i(\omega t - kx))$, then the wave is only defined at $x = an$ . This doesn't mean that the atoms are physically at $x = an$ . This just means the displacement of atom in the nth unit cell from the equilibrium is given by $A exp(i(\omega t - kan))$ . This means that we only care about $x = lattice\ points$ .

3. Note that if $k$ is shifted by the reciprocal vector, then i) the behavior at the lattice points is unchanged. ii) The dispersion relation is unchanged. The waves are equivalent. (Because the displacements of atoms described by them are the same.) Although the group velocity of the waves are different.  
4. Velocity of waves: 
	1. Long wavelength regime (acoustic waves): $\omega \approx 2\sqrt{\frac{\kappa}{m}} | \frac{ka}{2}| = \sqrt{\frac{\kappa}{m}} ak \Rightarrow v_{phase} = a \sqrt{\frac{\kappa}{m}}$
	2. At the boundary of Brillouin zones:
	  $v_{group} = \frac{d\omega}{dk} = a \sqrt{\frac{\kappa}{m}} |cos (\frac{Ga}{2})| = 0$ (since $GR = integer \cdot 2\pi$ )
5. Periodic boundary condition: The pattern repeats every $N$ atoms. So $A exp(i(\omega t - kan)) = A exp(i(\omega t - ka(n+N))) \Rightarrow exp(iNka) = 1 \Rightarrow k = \frac{ 2\pi p}{Na}$ The modes allowed are quantized.  

# 12.1

1. A lattice is a module over the integer ring. A primitive basis is a basis of this module. A basis is the position of the atoms with respect to the reference point chosen in the lattice. (described by the primitive basis?)

2. Wigner-Seitz construction: 
	A way to find a unit cell. Connect a lattice point with all the nearest points. Bisecting the lines connecting them with planes. The space enclosed is a unit cell. 

# 12.1.2

1. Reciprocal lattice: 
	consider a wave $exp(i\vec{k}\cdot \vec{r})$ propagating in a lattice. Denote the points in the lattice with $\vec{R}$ . The behavior of the wave on the lattice points are: $exp(i\vec{k}\cdot \vec{R})$ . Suppose we shift the wave vector by $\vec{G}$ and the behavior on the lattice points is still the same. Then $exp(i\vec{k}\cdot \vec{R}) = exp(i(\vec{k}+\vec{G})\cdot \vec{R}) \Rightarrow exp(i\vec{G}\cdot \vec{R}) = 1, \forall \vec{R}$  

	Then say these $\vec{G}$ defines the reciprocal lattice. 

	The intuition is that the reciprocal space doesn't contain all wavevectors. It is restricted to wavevectors that are compatible with the space structure of the lattice. And $\vec{G}$ defines those wavevectors given the spatial structure $\vec{R}$ .   
	
2. Primitive basis of the reciprocal lattice:
	It's easy to show that if $exp(i\vec{G}\cdot \vec{R}) = 1$ is satisfied,  then $\vec{G}$ constitutes a module over some ring. (verify the closure) We want to show that the ring is the integer ring and construct the basis for this module.
	
	Suppose the lattice has basis $\vec{a_j}$ , then since $\vec{G}$ form a module, we assume its basis is $\vec{b_j}$ . Then

	$\vec{G} \cdot \vec{R} = 2\pi l$  for some $l \in \mathbb{Z}$ 
	$\Rightarrow m_i n_j \vec{b_i} \cdot \vec{a_j} = 2\pi l$ if we assume the coordinates of $\vec{G}$ and $\vec{R}$ are $m_i$ and $n_j$  . Now we construct one possible module for $\vec{G}$ 

	Set $\vec{b_i}\cdot \vec{a_j} = 2\pi \delta_{ij}$ , then since $n_j$ is an arbitrary integer, we must have that $m_i$ is $\in \mathbb{Z}$ . We can explicitly write out $\vec{b_i}$ . e.g.

	$\vec{b_1} = 2\pi \frac{\vec{a_2} \times \vec{a_3}}{\vec{a_1} \cdot (\vec{a_2} \times \vec{a_3})}$ 

	 The numerator is constructed such that it is perpendicular to $\vec{a_2}, \vec{a_3}$ , such that only when dotted with $\vec{a_1}$ won't it vanish. And the denominator just normalize the vector obtained when dotted with $\vec{a_1}$ .

	Now it remains to show that such module is unique. 


# 13.1.3

>[! Theorem]
>Poisson summation formula:
>$\Sigma_{n \in \mathbb{Z}} \phi(x + n) = \Sigma_{n \in \mathbb{Z}} \hat{\phi}(n) exp(2\pi in x)$ 
>In particular, if $x = 0$, then $\Sigma_{n} \phi(n) = \Sigma_{n} \hat{\phi}(n)$ 
>
>Note that here the Fourier transform is carried out with the basis $exp(2\pi \nu x)$ . If we use the basis $exp(ikx)$, then the formula becomes $\Sigma \phi(n) = \Sigma \hat{\phi}(2\pi n)$ 

## Pf.

It suffices to show that $\phi(x +n) = \hat{\phi}(n)exp(2\pi i n x)$ for all $n$, not just integer $n$ . 

Notice that the RHS is just the the expansion of $\phi(x)$ under the Fourier basis $exp(2\pi i n x)$ . So we want to show that the Fourier expansion of $\phi(x + n)$ also equals the RHS. 

The Fourier expansion of $\phi(x + n)$ is $\hat{\phi}(n) exp(2\pi i n (x + n)) = exp(2\pi i n x)$ Then done.

1. The (inverse) Fourier transform of the density of direct lattice points is the density of the reciprocal lattice points (1D):

	The density of direct lattice points: $\rho(x)=\sum_n \delta(x-a n)$
	$\mathcal{F}^{-1}(\rho(x))=\sum_n \mathcal{F}^{-1}(\delta(x-a n))=\sum_n e^{i k a n}$

	To apply Poisson summation formula, we take $n$ as the variable, and Fourier transform $e^{ikan}$ . Write $x$ for $n$ :

	 $\begin{aligned} e^{i k a x} \leadsto & \frac{1}{2\pi}\int e^{i(k a) x} e^{-i k^{\prime} x} d x \\ & =\frac{1}{2\pi} 2 \pi \delta\left(k a-k^{\prime}\right) \\ = & \frac{1}{|a|} \delta\left(k-\frac{k^{\prime}}{a}\right)\end{aligned}$

	By Poisson summation formula, $\Sigma_{n} e^{ikan} = \Sigma_{n} \frac{1}{|a|} \delta (k - \frac{2\pi n}{a})$ 

	We remark that the (inverse) Fourier transform of the density peaks at $\frac{2\pi n}{a}$, which are exactly the one-dimensional reciprocal lattice points. (Just verify that $\frac{2\pi n}{a} \cdot n^{'} a = 2\pi \cdot integer$ ) 

2. The D-dimensional version ($D = 3$ for example):

	$\begin{aligned} \rho(\vec{r}) & =\sum_{\vec{R}} \delta^3(\vec{r}-\tilde{R}) \\ \Rightarrow F^{-1}(\rho) & =\sum \mathcal{F}^{-1}\left(\delta^3(\vec{r}-\vec{R})\right)=\sum e^{i \vec{k} \cdot \vec{R}} \\ & =\sum_{n_1, n_2, n_3} e^{i \vec{k} \cdot n_1 \vec{a}_1} e^{i \vec{k} \cdot n_2 \vec{a}_2} e^{i \vec{k} \cdot n_3 \vec{a}_3}\end{aligned}$

	Now let's consider $\Sigma_{n_1} e^{i\vec{k}\cdot \vec{a_1}n_1}$ . We need to perform one-dimensional Fourier transform on this, and take $\vec{k} \cdot \vec{a_1}$ as the wave vector and write $x$ for $n_1$:

	$\begin{aligned} e^{i \vec{k} \cdot \overrightarrow{a_1} x} \leadsto & \frac{1}{2 \pi} \int e^{i(\vec{k} \cdot \vec{a}) x} e^{-i k^{\prime} x} d x \\ & =\delta\left(\vec{k} \cdot \overrightarrow{a_1}-k^{\prime}\right) \\ & =\frac{1}{\left|a_1\right|} \delta\left(\vec{k} \cdot \hat{a_1}-\frac{k^{\prime}}{a_1}\right)\end{aligned}$
	Then by Poisson summation formula:

	$\begin{aligned} \mathcal{F}^{-1}(\rho)= & \left(\sum_{n_1} \delta\left(\vec{k} \cdot \hat{a_1}-\frac{2 \pi n_1}{a_1}\right)\right) \\ & \left(\sum_{n_2} \delta\left(\vec{k} \cdot \hat{a_2}-\frac{2 \pi n_2}{a_2}\right)\right) \\ & \left(\sum_{n_3} \delta\left(\vec{k} \cdot \hat{a_3}-\frac{2 \pi n_3}{a_3}\right)\right) \frac{1}{\left|a_1\right|\left|a_2\right|\left|a_3\right|}\end{aligned}$
	

	 Notice that the RHS can be rewritten as $\frac{1}{v} \Sigma_{\vec{G}} \delta^{3}(\vec{k} - \vec{G})$, where $v = \frac{1}{|a_1||a_2||a_3|} = volume\ of\ the\ unit\ cell$ . This is because the RHS peaks only if 

	$\hat{k} \cdot \hat{a}_j=\frac{2 \pi n_j}{a_j} \Rightarrow \stackrel{\rightharpoonup}{k} \cdot \vec{a}_j=2 \pi n_j$

	This is exactly the definition of reciprocal lattice points (verify that such $\vec{k}$ dotted with any integer linear combination of $\vec{a_j}$ would give the integer multiple of $2\pi$ .)


	In summary, for D-dimensional space, $F^{-1}(\rho)=\frac{1}{\nu} \sum_{\vec{G}} \delta^D(\vec{k}-\vec{G})$

3. Fourier transform any function with period $\vec{R}$

	Here it seems that we need to adapt the convention that
>[! Convention]
Fourier transform means $f(x) \leadsto \int d x e^{i k x} f(x)$
Inverse Fourier transform means $g(k) \leadsto \frac{1}{2 \pi} \int d k e^{-i k x} g(k)$

we need to find $\int_{\mathbb{R}^D} d^3 \vec{r} e^{i \vec{k} \cdot \vec{r}} \rho(\vec{r})$

In order to apply periodicity, we rewrite $\vec{r} = \vec{x} + \vec{R}$ , where $\vec{x}$ is the coordinate inside a unit cell. Then

$\begin{aligned} \mathcal{F}(\rho) & =\sum_{\vec{R}} \int_{\text {unit cell }} d^3 \vec{x} e^{i \vec{k} \cdot (\vec{x}+\vec{R})} \rho(\vec{x}+\vec{R}) \\ & =\sum_{\vec{R}} e^{i \vec{k} \cdot \vec{R}} \int d^3 \vec{x} e^{i \vec{k} \cdot \vec{x}} \rho(\vec{x}) \\ & =\sum_{\vec{R}} e^{i \vec{k} \cdot \vec{R}} S(\vec{k})\end{aligned}$
Apply Poisson summation formula to get (Notice that the Fourier transform of $e^{i\vec{k} \cdot \vec{r}} S(\vec{k})$ is $\delta (\vec{k} - \vec{k}^{'}) S(\vec{k})$ under the convention that $f(x) \leadsto \frac{1}{2\pi}\int f(x)^{-ikx}dx$ , this should be the convention we use when we apply Poisson summation formula.) 

Therefore $\mathcal{F}(\rho) = \Sigma_{\vec{G}} \delta^{D}(\vec{k} - \vec{G}) S(\vec{k})$ 

## 13.1.4

1. Lattice plane:

	A lattice plane is like a cross section of the discrete set of lattice points.
	
2. Geometric interpretation of reciprocal lattice vectors:

	1. Construct reciprocal vectors through direct lattice vectors: know that $\vec{G}$ is a reciprocal vector if $\forall \vec{R}, \exists m \in \mathbb{Z}$ such that $\vec{G} \cdot \vec{R} = 2\pi m$ . We can construct the set of reciprocal lattice points through direct lattice points this way. 
>[!Caveat]
>On the other hand, It is not true that any $\vec{r}$ satisfying $\vec{G} \cdot \vec{r} = 2\pi m$ for some integer $m$ would be a lattice vector. What can be easily shown is only the lattice vectors are a subset of $\{\vec{r}\}$ 

Reciprocal vectors naturally define lattice planes:

Given the set of reciprocal vectors, each element $\vec{G}$ in the set defines a set of planes that contain all lattice points, but might be a proper containment. The spacing between planes is: $d = \frac{2\pi}{G}$ . So for the most extreme case, that is the maximal spacing (take $G_{min}$ in one direction), the set of planes should just contain all lattice points without redundant. 

To find a reciprocal lattice vector, consider a set of parallel lattice planes. This defines $\vec{G}_{min}$ in the normal direction. (find the norm of $\vec{G}_{min}$ by $G_{min} = \frac{2\pi}{d}$ )any other $\vec{G}$ in that direction is an integer multiple of $\vec{G}_{min}$ .  

## 13.1.5

1. Miller indices: The coordinates of reciprocal lattice under the primitive basis of the reciprocal space. Write $\bar{1}$ for $-1$ . Each miller index corresponds to a reciprocal vector and thus naturally corresponds to set of "lattice planes" (some planes in the set might contain no lattice points)
2. Find the Miller indices geometrically: Consider a reciprocal vector or the set of corresponding lattice planes. We have:

	$\vec{G} = h \vec{b}_1 + k \vec{b}_2 + l \vec{b}_3$

	The lattice planes corresponding to it should have 

	$\vec{R} = x_1 \vec{a}_1 + x_2 \vec{a}_2 + x_3 \vec{a}_3$ where $\vec{G} \cdot \vec{R} = 2\pi m \Rightarrow x_1h + x_2 k + x_3 l = m$ 

	So the intersection of one plane in the set with the coordinate axes should satisfy: $\frac{1}{x_1} : \frac{1}{x_2} : \frac{1}{x_3} = h : k : l$ 

	So given the set of parallel lattice planes, we can find the minimal reciprocal vector in the normal direction this way: Find the ratio $h:k:l$ , then scale until $gcd(h,k,l) = 1$ .