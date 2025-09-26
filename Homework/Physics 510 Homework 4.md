# 1.
I have:
$$\begin{align}
\kappa_{S} & = - \frac{1}{V}\left(  \frac{\partial V}{\partial p} \right)_{S} \\
 & = \frac{1}{V} \frac{( \partial S / \partial p)_{V}}{(\partial S / \partial V)_{p}}
\end{align}$$
Now compute:
$$\begin{align}
\left(  \frac{\partial S}{\partial p} \right)_{V} & = \left(  \frac{\partial S}{\partial T} \right)_{V}\left(  \frac{\partial T}{\partial p} \right)_{V} \\
 & = \frac{C_{V}}{T}\left(  \frac{\partial T}{\partial p} \right)_{V}
\end{align}$$
Find that:
$$\begin{align}
\left( \frac{\partial T}{\partial p} \right)_{V} & = - \frac{(\partial V / \partial p)_{T}}{(\partial V / \partial T)_{p}} \\
 & = - \frac{-V\kappa_{T}}{V\beta_{p}} \\
 & = \frac{\kappa_{T}}{\beta_{p}}
\end{align}$$
So:
$$\left( \frac{\partial S}{\partial p} \right)_{V}= \frac{C_{V}\kappa_{T}}{\beta_{p}T}$$
Now compute:
$$\begin{align}
\left(  \frac{\partial S}{\partial V} \right)_{p} & =\left(  \frac{\partial S}{\partial T} \right)_{p}\left(  \frac{\partial T}{\partial V} \right)_{p} \\
 & = \frac{C_{p}}{T} \frac{1}{V\beta_{p}}
\end{align}$$
Therefore:
$$\begin{align}
\kappa_{S} & = \frac{1}{V} \frac{C_{V}\kappa_{T}}{T\beta_{p}} \frac{TV\beta_{p}}{C_{p}} \\
 &=  \frac{C_{V}}{C_{p}}\kappa_{T} \\
 &= \frac{C_{p}- \frac{TV\beta^{2}_{p}}{\kappa_{T}}}{C_{p}}\kappa_{T} \\
 & = \kappa_{T}- \frac{TV\beta^{2}_{p}}{C_{p}}
\end{align}$$
Then:
$$\kappa_{T}=\kappa_{S}+ \frac{\beta^{2}_{p}VT}{C_{P}}$$
From, this, together with the relation given in the problem, I know:
$$\beta^{2}_{p}VT= \kappa_{T}(C_{p}-C_{V})=C_{p}(\kappa_{T}-\kappa_{S})$$
Then:
$$\begin{align}
\implies & \frac{C_{p}-C_{V}}{C_{p}}= \frac{\kappa_{T}-\kappa_{S}}{\kappa_{T}} \\
\implies & \frac{C_{V}}{C_{p}}= \frac{\kappa_{S}}{\kappa_{T}} \\
\implies  & \frac{C_{p}}{C_{V}} = \frac{\kappa_{T}}{\kappa_{S}}
\end{align}$$
# 2.
I have:
$$\begin{align}
\left( \frac{\partial S}{\partial U} \right)_{V} & = \frac{1}{T}
\end{align}$$
Then:
$$\begin{align}
\left( \frac{\partial^{2}S}{\partial U^{2}} \right)_{V} & = \frac{\partial}{\partial U}\left(  \frac{1}{T} \right) \\
 &=  - \frac{1}{T^{2}} \left(  \frac{\partial T}{\partial U} \right)_{V} \\
 & = - \frac{1}{T^{2}} \frac{1}{C_{V}}
\end{align}$$
Similarly:
$$\left( \frac{\partial F}{\partial V} \right)_{T}= -p$$
Then:
$$\begin{align}
\left( \frac{\partial^{2}F}{\partial V^{2}} \right)_{T} & =- \left(  \frac{\partial p}{\partial V} \right)_{T} \\
 & =\frac{1}{V\kappa_{T}}
\end{align}$$
# 3.
## a).
Since the the two subsystems don't interact, I have:
$$S_{tot}(U_{1},U_{2},V_{1},V_{2})=S(U_{1},V_{1})+S(U_{2},V_{2})$$
If I move energy $\delta U$, then the change is:
$$\delta S_{tot}= \left( \frac{\partial S}{\partial U_{1}} \right)_{V_{1}}\delta U+ \left(  \frac{\partial S}{\partial U_{2}} \right)_{V_{2}}(-\delta U)$$
Since the derivative functions are evaluated at the same $U$, I have:
$$\left( \frac{\partial S}{\partial U_{1}} \right)_{V_{1}}=\left(  \frac{\partial S}{\partial U_{2}} \right)_{V_{2}}$$
Then:
$$\delta S_{tot}=0$$

This is expected. We prove this by showing that the condition in the problem is exactly the same as the condition for equilibrium. Then since the first order variation of a system at equilibrium should be zero, and the system in the problem is in equilibrium, the variation in its entropy should be zero. I know that the two systems are trivially in equilibrium, but I still want to formulate my proof rigorously.

Calculate the equilibrium condition: if I the two systems as a whole are isolated, and their volumes are fixed, the entropy must be maximized at equilibrium:
$$\delta S_{tot}= \left( \frac{\partial S}{\partial U_{1}} \right)_{V_{1}}\delta U_{1}+ \left(  \frac{\partial S}{\partial U_{2}} \right)_{V_{2}}\delta U_{2}=0$$
Impose the constraint $\delta U_{1}+\delta U_{2}=0$, and using the arbitrariness of $\delta U_{1}$, we have:
$$\left( \frac{\partial S}{\partial U_{1}} \right)_{V_{1}}= \left(  \frac{\partial S}{\partial U_{2}} \right)_{V_{2}}$$
Since $S_{1},S_{2}$ have the same functional structure, and the derivative $\frac{\partial U}{\partial S}$ is monotone, and thus a bijective map $S\mapsto \frac{\partial U}{\partial S}$. The inverse of the derivative should also be bijective. Then the above equality shows:
$$U_{1}=U_{2}$$
This is exactly the same condition given in the problem.  
## b).
Fix the volumes. Consider the Taylor expansion:
$$\begin{align}
S_{tot}(U_{1}+\delta U_{1},U_{2}+\delta U_{2}) & = S_{tot}(U_{1},U_{2})+ \frac{\partial S_{tot}}{\partial U_{1}}\delta U_{1}+ \frac{\partial S_{tot}}{\partial U_{2}}\delta U_{2}+ \frac{\partial^{2}S_{tot}}{\partial U_{1}^{2}}(\delta U_{1})^{2}+ \frac{\partial^{2}S_{tot}}{\partial U_{2}^{2}} ( \delta U_{2})^{2}+ 2 \frac{\partial^{2}S_{tot}}{\partial U_{1}\partial U_{2}}\delta U_{1}\delta U_{2} \\
 & =S_{tot}(U_{1},U_{2})+ \frac{\partial S}{\partial U_{1}}\delta U_{1}+ \frac{\partial S}{\partial U_{2} }\delta U_{2}+ \frac{\partial^{2}S}{\partial U_{1}^{2}}(\delta U_{1})^{2}+ \frac{\partial^{2}S}{\partial U_{2}^{2}}(\delta U_{2})^{2} \\
 & = S_{tot}(U_{1},U_{2})+ \frac{\partial^{2}S}{\partial U_{1}^{2}}(\delta U_{1})^{2}+ \frac{\partial^{2}S}{\partial U_{2}^{2}}(\delta U_{2})^{2}
\end{align} $$
Then cross term vanished because the $\frac{\partial S_{tot}}{\partial U_{2}}= \frac{\partial S_{2}}{\partial U_{2}}$ depends only on $U_{2}$. The first-order term vanished because of equilibrium.

Set $\delta U_{1}=\delta U,\delta U_{2}= - \delta U$. Then the second-order term is:
$$\frac{\partial^{2}S}{\partial U_{1}^{2}}(\delta U)^{2}+ \frac{\partial^{2}S}{\partial U_{2}^{2}}(\delta U)^{2}$$
Know that:
$$\begin{align}
\frac{\partial^{2}S}{\partial U^{2}} & = \frac{\partial}{\partial U}\left( \frac{1}{T} \right) \\
 & = - \frac{1}{T^{2}} \frac{\partial T}{\partial U} \\
 & =- \frac{1}{T^{2}} \frac{1}{C_{V}}
\end{align}$$
Then since equilibrium implies equal temperature, I have:
$$\delta^{2}S= - \frac{1}{T_{1}^{2}} \frac{1}{C_{V}}\delta U^{2}- \frac{1}{T_{2}} \frac{1}{C_{V}}\delta U^{2}= - \frac{2}{T^{2}_{1}C_{V}}\delta U_{}^{2}$$
Then if $C_{V}>0$, I have:
$$\delta^{2}S<0$$
If $C_{V}<0$, similarly:
$$\delta^{2}S>0$$
If this condition prevails, the system would move towards increasing entropy, and thus transfer more energy between the two subsystems. The equilibrium is unstable. 

But this cannot happen, so we must conclude that any perturbation would decrease the entropy, such that the equilibrium point is stable. Therefore must conclude that $C_{V}>0$
## c).

Fix the temperatures of the two systems. Then the Helmholtz free energy is:
$$F(T_{1},T_{2},V_{1},V_{2})= F_{1}(T_{1},V_{1})+F_{2}(T_{2},V_{2})$$
Then the second order variation is:
$$\begin{align}
\delta^{2}F & = \frac{\partial^{2}F}{\partial V_{1}^{2}}\delta V_{1}^{2}+ \frac{\partial^{2}F}{\partial V_{2}^{2}}\delta V_{2}^{2}+ 2 \frac{\partial^{2}F}{\partial V_{1}\partial V_{2}}\delta V_{1}\delta V_{2} \\
 & = \frac{\partial^{2}F_{1}}{\partial V_{1}^{2}}\delta V_{1}^{2}+ \frac{\partial^{2}F_{2}}{\partial V_{2}^{2}}\delta V_{2}^{2}
\end{align}$$
I have that:
$$\begin{align}
\left( \frac{\partial^{2} F}{\partial V^{2}} \right)_{T} & = - \left( \frac{\partial p}{\partial V} \right)_{T} \\
 & = \frac{1}{\kappa_{T}V_{1}}
\end{align}$$
Substitute this in and impose the constraint that $\delta V_{1}+\delta V_{2}=0$ to get:
$$\delta^{2}F= \left( \frac{1}{\kappa_{T}V_{1}}+ \frac{1}{\kappa_{T}V_{2}} \right)\delta V_{1}^{2}=\frac{2}{\kappa_{T}V_{1}}\delta V_{1}^{2}$$
This is because we in the problem we assume $V_{1}=V_{2}$

Then the Helmholtz free energy increases if $\kappa_{T}>0$. The Helmholtz free energy decreases if $\kappa_{T}<0$. If I have $\kappa_{T}<0$, then the system is unstable, because any displacement from the current point would be favored by the Helmholtz free energy. Then the volume of one subsystem would keep increasing, and the volume of the other subsystem would keep decreasing.  This cannot happen. Therefore, we are forced to conclude that $\kappa_{T}>0$.
# 4. 

Know that:
$$\begin{align}
C_{V} & = T \left(  \frac{\partial S}{\partial T} \right)_{V}
\end{align}$$
From $T=\left(  \frac{\partial U}{\partial S} \right)_{V}$, we know:
$$\begin{align}
(dT)_{V} & = (\frac{\partial^{2}U}{\partial S^{2}})_{V}dS
\end{align}$$
Therefore:
$$\begin{align}
C_{V} & =T \frac{dS}{\left( \frac{\partial^{2}U}{\partial S^{2}} \right)_{V}dS  } \\
 & = T \left( \frac{\partial^{2}U}{\partial S^{2} } \right)_{V}^{-1}
\end{align}$$
Furthermore:
$$\begin{align}
\left( \frac{\partial^{2}U}{\partial S^{2}} \right)_{V} & =\left( \frac{\partial}{\partial S} \right)_{V}\left( \frac{\partial U}{\partial S} \right)_{V} \\
 & =\left( \frac{\partial}{\partial S} \right)_{V}\left(  \left( \frac{\partial S}{\partial U} \right)_{V}^{-1} \right) \\
 & = -\left( \frac{\partial S}{\partial U} \right)_{V}^{-2}\left(  \frac{\partial}{\partial S} \right)_{V} \left(  \frac{\partial S}{\partial U} \right)_{V}
\end{align}$$
Notice that in the last line, $\left( \frac{\partial S}{\partial U} \right)_{V}$ is assumed to be a function of $U$, so to take derivative with respect to $S$, consider the chain rule:
$$\begin{align}
\left( \frac{\partial^{2}U}{\partial S^{2}} \right)_{V} & =-\left( \frac{\partial S}{\partial U} \right)_{V}^{-2}\left(  \frac{\partial U}{\partial S} \right)\left( \frac{\partial}{\partial U} \right)_{V}\left( \frac{\partial S}{\partial U} \right)_{V} \\
 & = -\left(  \frac{\partial S}{\partial U} \right)_{V}^{-3}\left( \frac{\partial^{2}S}{\partial U^{2}} \right)_{V} \\
 & =-T^{3}\left( \frac{\partial^{2} S}{\partial U^{2}} \right)_{V}
\end{align}$$
Then:
$$C_{V}=- \frac{1}{T^{2}}\left(  \frac{\partial^{2}S}{\partial U^{2}} \right)_{V}$$
Know that at equilibrium, I must have $\delta^{2}S<0$. Then:
$$\left( \frac{\partial^{2}S}{\partial U^{2}} \right)_{V}<0$$
Then:
$$C_{V}>0$$
This makes physical sense, because if we maintain a constant volume of a system, after absorbing heat, the temperature should normally increase.

Now argue that $C_{p}>C_{V}$. We have:
$$C_{p}=T \left(  \frac{\partial S}{\partial T} \right)_{p}$$
Choose $S,V$ as my variables, I have:
$$\begin{align}
dT & = \left(\frac{\partial T}{\partial S} \right)_{V}dS+ \left( \frac{\partial T}{\partial V} \right)_{S}dV \\
 & = U_{SS}dS+U_{SV}dV
\end{align}$$
Fixing constant $p$ would yield a constraint on the differentials:
$$\begin{align}
dp & = \left( \frac{\partial p}{\partial S} \right)_{V}dS+ \left( \frac{\partial p}{\partial V} \right)_{S}dV \\
 & = -U_{SV}dS- U_{VV}dV=0 \\
\implies & dV= - \frac{U_{SV}}{U_{VV}}dS
\end{align}$$
Then I have:
$$\begin{align}
C_{p} & =T \frac{dS}{U_{SS}dS+U_{SV}dV} \\
 & = T \frac{dS}{U_{SS}dS+U_{SV}\left( - \frac{U_{SV}}{U_{VV}} \right)dS} \\
 & = T \frac{1}{U_{SS}- \frac{U_{SV}^{2}}{U_{VV}}}
\end{align}$$
I know that at equilibrium, the internal energy must be minimized. Then the Hessian matrix is positive-definite. Find the eigenequation of the Hessian matrix:
$$\begin{align}
\begin{vmatrix}
U_{SS}-\lambda & U_{SV} \\
U_{SV} & U_{VV}-\lambda
\end{vmatrix} & =0 \\
\implies \lambda^{2}-(U_{VV}+U_{SS})\lambda+U_{SS}U_{VV}-U_{SV}^{2} & =0
\end{align}$$
For positive-definiteness, require:
$$\begin{align}
 & \lambda_{1}+ \lambda_{2}= U_{VV}+U_{SS}>0, \\
 & \lambda_{1}\lambda_{2}=U_{SS}U_{VV}-U_{SV}^{2}>0
\end{align}$$
Then:
$$U_{SS}U_{VV}-U^{2}_{SV}>0\implies U_{SS}U_{VV}>0$$
Know that $U_{VV}+U_{SS}>0$. Then must conclude:
$$U_{VV},U_{SS}>0$$
Then:
$$U_{SS}>U_{SS}- \frac{U_{SV}^{2}}{U_{VV}}>0$$
Therefore:
$$C_{p}>C_{V}>0$$
This makes physical sense, because In an isobaric system, if we increase the temperature, the system would expand to maintain a constant temperature. Know that $dS=\frac{dU}{T}+p \frac{dV}{T}$. Then both the increase in the internal energy and expansion in volume would contribute to the increase of the entropy. But in a system with constant volume, if we increase the temperature, only the increase in the internal energy would contribute to the increase of the entropy. Therefore $C_{p}>C_{V}$  


Know that:
$$\kappa_{S}= - \frac{1}{V}\left(  \frac{\partial V}{\partial p} \right)_{S}$$
Recall:
$$p=-\left(  \frac{\partial U}{\partial V} \right)_{S}$$
Then:
$$(dp)_{S}=- \left( \frac{\partial^{2}U}{\partial V^{2}} \right)dV$$
Then:
$$\begin{align}
\kappa_{S} & =- \frac{1}{V} \frac{dV}{-\left( \frac{\partial^{2}U}{\partial V^{2}} \right)dV} \\
 & = \frac{1}{V}\left( \frac{\partial^{2}U}{\partial V^{2}} \right)_{S}^{-1}
\end{align}$$
Know that at equilibrium, I have just showed that $U_{VV}>0$. Then:
$$\kappa_{T}>0$$
From $1.$ I know:
$$\frac{\kappa_{T}}{\kappa_{S}}= \frac{C_{p}}{C_{V}}$$
Know that $\frac{C_{p}}{C_{V}}>1,\kappa_{T}>0$, then I must have:
$$\kappa_{S}>0$$
Then:
$$\frac{\kappa_{T}}{\kappa_{S}}>1\implies \kappa_{T}>\kappa_{S}$$
Then:
$$\kappa_{T}>\kappa_{S}>0$$
 $\kappa_{S}>0$ makes sense because for an isolated system, if we reversibly compress it, the volume usually decrease. Then $\kappa_{S}= -\frac{1}{V}\left( \frac{\partial V}{\partial p} \right)_{S}>0$. For an isothermal system, if we compress it, to maintain the constant temperature, heat must be ejected and thus the entropy decreases. Know that $dV= \frac{T}{p}dS- \frac{dU}{p}$. Then both the decrease in the entropy and the decrease in the internal energy contributes to the decrease in the volume. However, for an adiabatic system, if we impose the constraint that $\delta S=0$, then the only contribution to the volume decrease is from the decrease of the internal energy. Therefore $\kappa_{T}>\kappa_{S}$. 
# 5.
## i).
By the arguments above, the system is stable if and only if:
$$\kappa_{T}>0$$
Consider:
$$\begin{align}
\kappa_{T} & = - \frac{1}{V}\left(  \frac{\partial V}{\partial p} \right)_{T} \\
 & =- \frac{1}{V} \frac{\partial}{\partial p}\left( \frac{NkT}{p} \right) \\
 & = \frac{1}{V} \frac{NkT}{p^{2}} \\
 & = \frac{pV}{p^{2}V} \\
 & = \frac{1}{p}
\end{align}$$
Then if $p>0$, then the ideal gas is stable. If $p<0$, the ideal gas would be unstable.
## ii).
Similarly, we want to estimate the sign of $\kappa_{T}$. Differentiate the equation of state with the constraint that $dT=0$ to get:
$$\begin{align}
 & \left( dp- 2 \frac{a}{v^{3}}dv \right)(v-b)+ \left( p+ \frac{a}{v^{2}} \right)dv=0 \\
\implies & \left( \frac{\partial v}{\partial p} \right)_{T}= (v-b)\left(  \frac{a}{v^{2}}- \frac{2ab}{v^{3}}-p \right)^{-1}
\end{align}$$
Holding $N$ constant implicitly, I get:
$$\begin{align}
\kappa_{T} & =- \frac{1}{V}\left(  \frac{\partial V}{\partial T} \right)_{T} \\
 & =- \frac{1}{Nv}\left(  \frac{\partial}{\partial T}(Nv) \right)_{T} \\
 & = - \frac{1}{v}\left( \frac{\partial v}{\partial T} \right)_{T}
\end{align}$$
Then:
$$\kappa_{T}= \frac{bv^{2}-v^{3}}{av-2ab-pv^{3}}$$
The sign of this expression is the same as the sign of this:
$$(bv^{2}-v^{3})(av-2ab-pv^{3})$$
And the sign of this is also the same as the sign of this:
$$(b-v)(av-2ab-pv^{3})$$
Then as long as $(b-v)(av-2ab-pv^{3})>0$, or equivalently $\frac{bv^{2}-v^{3}}{av-2ab-pv^{3}}>0$, then the van del Waals gas is stable. If $(b-v)(av-2ab-pv^{3})<0$, or equivalently $\frac{bv^{2}-v^{3}}{av-2ab-pv^{3}}>0$, then the van del Waals gas is unstable.  