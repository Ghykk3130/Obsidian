On page 134 of Callen's _Thermodynamics and an Introduction to Thermostatistics, 2nd edition_, the derivation of the minimum energy principle from the maximum entropy principle is given. 

When arguing that $dU$ with $S$ holding constant must vanish, Callen wrote:
$$\left( \frac{\partial U}{\partial X} \right)_{S}= - \frac{(\partial S / \partial X)_{U}}{(\partial S / \partial U)_{X}} \dots *)$$
where $X=X_{j}^{(i)}$ is the jth extensive parameter of the ith subsystem. All other $X$'s are also held constant implicitly. 

I don't know why this equation above is true. The equation is not trivial for a composite system. Here is my attempt to prove the equation above:

Consider a simple case where the system is composed of two non-interacting subsystems. The two subsystems have work variables $x_{1},x_{2}$ respectively. Then we have:
$$U=U(S_{1},S_{2},x_{1},x_{2}) \dots **)$$
We want to show, for example, $\left( \frac{\partial U}{\partial x_{1}} \right)_{S,S_{1},S_{2},x_{2}}=0$.

Then we need to solve from $**)$ that:
$$\begin{align}
 & S_{1}=S_{1}(U,S_{2},x_{1},x_{2}) \\
 & S_{2}=S_{2}(U,S_{1},x_{1},x_{2}) \\
 & x_{2}=x_{2}(U,S_{1},S_{2},x_{1})
\end{align}$$
Then the constraint on the differentials would be:
$$\begin{align}
 & dS_{1} =\frac{\partial S_{1}}{\partial U}dU+ \frac{\partial S_{1}}{\partial S_{2} }dS_{2}+ \frac{\partial S_{1}}{\partial x_{1}}dx_{1}+ \frac{\partial S_{1}}{\partial x_{2}}dx_{2}=0 \\
 & dS_{2}=\frac{\partial S_{2}}{\partial U}dU+ \frac{\partial S_{2}}{\partial S_{1} }dS_{2}+ \frac{\partial S_{2}}{\partial x_{1}}dx_{1}+ \frac{\partial S_{2}}{\partial x_{2}}dx_{2}=0 \\
 & dx_{2}=\frac{\partial x_{2}}{\partial U}dU+ \frac{\partial x_{2}}{\partial S_{1}}dS_{1}+ \frac{\partial x_{2}}{\partial S_{2}}dS_{2}+ \frac{\partial x_{2}}{\partial x_{1}}dx_{1}=0
\end{align}$$
The constraint $dS=0$ is automatically satisfied by $dS_{1}=0,dS_{2}=0$. Then I should solve for $dU, dx_{1}$, and then calculate $\left( \frac{\partial U}{\partial x_{1}} \right)_{S,S_{1},S_{2},x_{2}}$. The entropy maximum principle might be used to reduce this expression to zero. 

However, I didn't see why Callen wrote $*)$. Although this is trivial for uniform system, it is completely not trivial for a composite system. I try to derive $*)$ based on the procedure that I described above, but I cannot solve the systems of equations because it is not a square matrix, and I cannot do inverse. 

Is my understanding wrong? Or is there any implicit assumption in Callen's book?

