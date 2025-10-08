# 1.
## (a).
The partition function is given by:
$$Z=e^{\beta\epsilon}+e^{-\beta\epsilon}+1+1=2\cosh(\beta\epsilon)+2$$
Then:
$$\begin{align}
\langle U \rangle & = - \frac{1}{Z} \frac{\partial}{\partial \beta}Z \\
 & = - \frac{1}{2\cosh(\beta\epsilon)+2} 2\epsilon \sinh(\beta\epsilon) \\
 &= - \frac{\epsilon \sinh(\beta\epsilon)}{\cosh(\beta\epsilon)+1}
\end{align}$$
## (b).
The probability that the system is in $\epsilon$ is:
$$\frac{e^{-\beta\epsilon}}{2\cosh(\beta\epsilon)+2} \rightarrow \left\{ \begin{align}
 & \frac{1}{4},\text{ as }T\rightarrow \infty \\
 & 0,\text{ as }T\rightarrow 0
\end{align}\right.$$

The probability that the systems is in $0$ is:
$$2 \cdot \frac{e^{0}}{2\cosh(\beta\epsilon)+2}=\frac{1}{\cosh(\beta\epsilon)+1}\rightarrow \left\{\begin{align}
 & \frac{1}{2},\text{ as }T\rightarrow \infty \\
 & 0,\text{ as }T\rightarrow \infty
\end{align} \right.$$
The probability that the system is in $-\epsilon$ is:
$$\frac{e^{\beta\epsilon}}{2\cosh(\beta\epsilon)+2}\rightarrow \left\{ \begin{align}
 & \frac{1}{4},\text{ as }T\rightarrow \infty \\
 & 1, \text{ as }T\rightarrow \infty
\end{align}\right.$$
These results make sense because if $T$ is very high, then the factor $\exp(-\beta E)$ for all states are basically the same, since the energy differences are flattened out by the small $\beta$. This means that all states are equally probable. If $T$ is very low, then the factor $e^{-\beta\epsilon}$ would be very small for all states except for the state with the lowest energy. Because the $\beta$ becomes very large, and only the highest $-\epsilon$ value would dominate.  This means that all states except for the ground state are highly  improbable. This is also consistent with our instinct that in general a system would rest in its lowest state at zero temperature. 

# 2.
## (a).
The number of available quanta is $\frac{E}{\hbar \Omega}$. So the number of ways to distribute it is given by:
$$\Omega= \frac{N!}{\left(  \frac{E}{\hbar \omega} \right)!\left(  N- \frac{E}{\hbar \omega} \right)!}$$
Then take $N\rightarrow \infty$:
$$\begin{align}
\ln \Omega & \approx N\ln N-N- \left(  \frac{E}{\hbar \omega} \right)\ln\left(  \frac{E}{\hbar \omega} \right)- \frac{E }{\hbar \omega }- \left( N- \frac{E}{\hbar \omega} \right)\ln\left( N- \frac{E}{\hbar \omega} \right)-\left( N- \frac{E}{\hbar \omega} \right) \\
 & = \frac{E}{\hbar \omega}\ln\left( N \frac{\hbar \omega}{E} \right)+\left(N- \frac{E}{\hbar \omega} \right) \ln\left(  \frac{N}{N- \frac{E}{\hbar \omega}} \right)
\end{align}$$
So:
$$S=\frac{kE}{\hbar \omega}\ln\left( N \frac{\hbar \omega}{E} \right)+k\left(N- \frac{E}{\hbar \omega} \right) \ln\left(  \frac{N}{N- \frac{E}{\hbar \omega}} \right) $$
## (b).
The partition function is:
$$\begin{align}
Z & =\sum_{\text{all states}} \exp(-\beta H) \\
 & =  \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)\dots\left( \sum_{\text{all states of N}} \exp(-\beta H_{N}) \right) \\
 & = \left(\sum_{\text{all states of 1}}\exp(-\beta H_{1})\right)^N \\
 & = \left( \sum_{n} \exp(-\beta n\hbar \omega) \right)^N \\
 & = \left(  \frac{1}{1-\exp(-\beta \hbar \omega)} \right)^N
\end{align}$$
## (c).



