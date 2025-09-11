# 1.
The internal energy of a hydrostatic system at equilibrium is:
$$U=\frac{3}{2}NkT=\frac{3}{2}pV$$

Code for the 3d plot:
```python
import matplotlib.pyplot as plt

import numpy as np

  

def U(p,V):

  return (3/2)*p*V

  

p = np.arange(0,10,0.01)

V = np.arange(0,10,0.01)

  

X, Y = np.meshgrid(p, V)

Z = U(X, Y)

  

fig = plt.figure(figsize=(10,8))

axis = fig.add_subplot(1, 1, 1, projection = '3d')

plt.xlabel('p(Pa)')

plt.ylabel('V($m^3$)')

axis.set_zlabel('U(J)')

  

axis.plot_surface(X, Y, Z)

plt.show()
```
The plot:
![[Pasted image 20250831222254.png|500]]

Code for the contour plot:
```python
import matplotlib.pyplot as plt

import numpy as np

  

def p(V, a):

  return a/V

  

x = np.arange(0,2.5,0.01)

y_1 = p(x, 4)

y_2 = p(x, 8/3)

y_3 = p(x, 16/3)

  

plt.plot(x, y_1, color = 'b')

plt.plot(x, y_2, color = 'b')

plt.plot(x, y_3, color = 'b')

  

plt.scatter(1, 4, color = 'r', label = 'system 1')

plt.scatter(2, 2, color = 'g', label = 'system 2')

plt.scatter(1, 8/3, color = 'r')

plt.scatter(2, 8/3, color = 'g')

  

plt.text(1 + 0.01, 4 + 0.01, 'i', color = 'r' )

plt.text(2 + 0.01, 2 + 0.01, 'i', color = 'g' )

plt.text(1 + 0.01, 8/3 + 0.01, 'f', color = 'r')

plt.text(2 + 0.01, 8/3 + 0.01, 'f', color = 'g')

  

y_3 = p(x, 1)

y_4 = p(x, 2)

y_5 = p(x, 3)

  

plt.plot(x, y_3, color = 'b')

plt.plot(x, y_4, color = 'b')

plt.plot(x, y_5, color = 'b')

  

plt.ylim(0, 4.5)

plt.xlim(0, 2.5)

plt.legend()

plt.show()
```
The plot:
![[Pasted image 20250905003456.png|500]]

It would make sense to draw a solid line between the initial and final states of a given system if the process is carried out quasi-statically, such that the macroscopic quantities are well defined. Here It doesn't make sense to draw solid lines to connect the initial and final states. This is because this process is not reversible.  
# 2.
## a). 
I know that a if differential $d\phi$ is exact, then $\phi$ is a function of the position. Then consider two arbitrary points. One point is the initial state and another is a final state. Consider any two paths $C_{1}, C_{2}$ connecting them, and denote the area enclosed by $D$. Then I have:
$$\int_{C_{1}}d\phi=\int_{C_{2}}d\phi$$
$$ \begin{align}
\implies\int_{C_{1}-C_{2}}d\phi & =0 \\
\implies \oint_{C=C_{1}-C_{2}}d\phi & =0 \\
\implies \oint_{C} \left( \frac{\partial \phi}{\partial x}dx+\frac{\partial \phi}{\partial y}dy \right) & =0, \forall C \\
\implies \int_{ D} da\left(  \frac{\partial^{2} \phi}{\partial y\partial x}- \frac{\partial^{2}\phi}{\partial x\partial y} \right) & =0, \forall D \\
\implies \frac{\partial^{2}\phi}{\partial x\partial y} & =\frac{\partial^{2}\phi}{\partial y\partial x}
\end{align}$$
But:
$$\frac{\partial}{\partial y}(4x+3y^{2})=6y\neq \frac{\partial}{\partial x}(2xy)=2y$$
Then $d\phi$ is not exact.

To find the integrating factor, want $\mu$ such that $\mu d(\phi)$ is exact. Then require that:
$$\frac{\partial}{\partial y}(\mu(4x+3y^{2}))=\frac{\partial}{\partial x}(\mu(2xy))$$
Let $\mu=x^{2}$, then the equation above holds. 

To find $\Delta \phi$ on the straight line, use $y=x$:
$$\begin{align}
\int_{\text{straight line}}d\phi & =\int_{0}^1((4x+3x^{2})dx+2x(x)dx) \\
 & =\frac{11}{3}
\end{align}$$
To find $\Delta \phi$ on path $ii)$:
$$\begin{align}
\int_{\text{path ii)}}d\phi & =\int_{0}^1(4x+3)dx \\
 & =5
\end{align}$$
Repeat for $\mu d\phi$:
$$\begin{align}
\int_{\text{straight line}}\mu d\phi & =\int_{0}^1(x^{2}(4x+3x^{2})+x^{2}\cdot {2}x^{2} )dx \\
 & =2
\end{align}$$
$$\begin{align}
\int_{\text{path ii)}}\mu d\phi & =\int_{0}^1 x^{2}(4x+3)dx \\
 & =2
\end{align}$$
## b).
The condition $\nabla \times(u  \hat{x}+v  \hat{y}+w  \hat{z})=0$ would be necessary. Because if this equation holds, then:
$$\exists U,s.t.\ -\nabla U=u  \hat{x}+v  \hat{y}+  w\hat{z}$$
$$\begin{align}
\implies \Delta \phi & =\int d\phi \\
 & =\int(u  \hat{x}+v  \hat{y}+ w  \hat{z})\cdot d\vec{r} \\
 & =-\int \nabla U\cdot d\vec{r} \\
 & =-\Delta U
\end{align}$$
$U$ depends only on the position $\implies$ $\Delta \phi$ depends only on the initial and final states.

## c).
$\rlap{\textrm{d}}{\bar{\phantom{w}}}W$ is not exact, since:
$$\frac{\partial}{\partial y}(2xy)=2x \neq \frac{\partial }{\partial x}(x)=1$$
$\rlap{\textrm{d}}{\bar{\phantom{w}}}Q$ is not exact, since:
$$\frac{\partial}{\partial y}(y)=1\neq \frac{\partial }{\partial x}(x^{2})=2x$$
$dU=(2xy+y)dx+(x+x^{2})dy$ is exact, since:
$$\frac{\partial}{\partial y}(2xy+y)=2x+1=\frac{\partial}{\partial x}(x+x^{2})=2x+1$$
The reason why we have an exact differential equal to an inexact differential is because by setting $\rlap{\textrm{d}}{\bar{\phantom{w}}}Q=0$, we are choosing a single path such that $\rlap{\textrm{d}}{\bar{\phantom{w}}}Q=0$. 

# 3.
## a).
**Scenario 1:**

The plunger, gas, and the mass constitute an isolated system. Then:
$$mgy_{i}+Mgy_{i}+ \frac{3}{2}N_{A}kT_{0}=mgy_{f}+Mgy_{f}+ \frac{3}{2}N_{A}kT_{f}$$
I also have, since the system is in both thermal equilibrium and mechanical equilibrium at the initial and final state, that:
$$\begin{align}
 & Mg=p_{i}A \\
 & p_{i}Ay_{i}=N_{A}kT_{0} \\
 & (m+M)g =p_{f}A \\
 & p_{f}Ay_{f}=N_{A}kT_{f}
\end{align}$$
Solve for $y_{f}$ to get:
$$y_{f}= \frac{\left(  \frac{5}{2}+ \frac{m}{M} \right)N_{A}kT_{0}}{  \frac{5}{2}(m+M)g}$$
**Scenario 2:**

Similarly, I also have:
$$\begin{align}
 & Mg=p_{i}A \\
 & p_{i}Ay_{i}=N_{A}kT_{0} \\
 & (m+M)g =p_{f}A \\
 & p_{f}Ay_{f}=N_{A}kT_{f}
\end{align}$$
Since the process is quasi-static, and the gas is thermally isolated, I have:
$$\left\{ \begin{align}
 & dU=-pdV \\
 & U= \frac{3}{2}N_{A}kT= \frac{3}{2}pV
\end{align}\right.\implies pV^{5/3}=\text{const.}$$
Easy to get from the initial state that:
$$\text{const.}=(N_{A}kT_{0})^{5/3}(Mg)^{-2/3} A^{2/3}$$
Therefore:
$$y_{f}= \left( \frac{M}{m+M} \right)^{3/5} \frac{N_{A}kT_{0}}{Mg}$$
## b).
**Scenario 1:**

Suppose now the system goes from state $f$ to state $f^{'}$. Then at these two states, I still have:
$$\begin{align}
 & p_{f}A=(m+M)g \\
 & p_{f}Ay_{f}=N_{A}kT_{f} \\
 & p_{f^{'}}A=Mg \\
 & p_{f^{'}}Ay_{f^{'}}=N_{A}kT_{f^{'}}
\end{align}$$
And the energy conservation also holds:
$$Mgy_{f}+ \frac{3}{2}N_{A}kT_{f}=Mgy_{f^{'}}+ \frac{3}{2}N_{A}kT_{f^{'}}$$
From problem $a)$, I have:
$$T_{f}= \left( \frac{5}{2}+ \frac{m}{M} \right)T_{0}$$
Substitute this into the energy conservation equation, and express $T_{f^{'}}$ by $y_{f^{'}}$.
Then, solve for $y_{f^{'}}$ to get:
$$y_{f^{'}}= \frac{\left(  \frac{5}{2}+ \frac{m}{M} \right)N_{A}kT_{0}}{\left( m+ \frac{5}{2}M \right)g}$$
This is different from $y_{i}= \frac{N_{A}kT_{0}}{Mg}$. So I would conclude that this process is irreversible.

**Scenario 2:**

Again, state $f$ and state $f^{'}$ are described by these equations:
$$\begin{align}
 & p_{f}A=(m+M)g \\
 & p_{f}Ay_{f}=N_{A}kT_{f} \\
 & p_{f^{'}}A=Mg \\
 & p_{f^{'}}Ay_{f^{'}}=N_{A}kT_{f^{'}}
\end{align}$$
Also, since the removal is quasi-static, I still have:
$$\left\{ \begin{align}
 & dU=-pdV \\
 & U= \frac{3}{2}N_{A}kT= \frac{3}{2}pV
\end{align}\right.\implies pV^{5/3}=\text{const.}$$
I claim that this constant is the same constant as in $a)$, because state $i$ and state $f$ share the same constant. State $f$ and state $f^{'}$ share the same constant. Therefore these three states lie on the same curve determined by the equation above. 

Since the structure and all the constants in my equations here are identical to scenario 2 in $a)$, I would claim that $y_{i}$ satisfies these equations and therefore:
$$y_{f^{'}}=y_{i}=\frac{N_{A}kT_{0}}{Mg}$$
Then I would say that this process is reversible.

## c).
**Scenario 1:**

It's easy to find that:
$$\begin{align}
 & U_{i}= \frac{3}{2}N_{A}kT_{0} \\
 & U_{f}= \frac{3}{2}N_{A}kT_{f}= \frac{3}{2}N_{A}k\left(  \frac{5}{2}+ \frac{m}{M} \right)T_{0} \\
 & V_{i}=Ay_{i}=A \frac{N_{A}kT_{0}}{Mg} \\
 & V_{f}= Ay_{f}=A \frac{\left(  \frac{5}{2}+ \frac{m}{M} \right)N_{A}kT_{0}}{ \frac{5}{2}(m+M)g}
\end{align}$$
Substitute in the Sackur-Tetrode equation to get:
$$\begin{align}
\Delta S=N_{A}k\ln\left(   \frac{2}{5}\left(   \frac{5}{2}+ \frac{m}{M} \right)^{5/2} \cdot \frac{M}{M+m} \right)
\end{align}$$
**Scenario 2:**

It's easy to find that:
$$\begin{align}
 & U_{i}= \frac{3}{2} N_{A}kT_{0} \\
 & U_{f}= \frac{3}{2}N_{A}kT_{f}=\frac{3}{2}p_{f} Ay_{f}= \frac{3}{2} \left(  \frac{M}{m+M} \right)^{-2/5}N_{A}kT_{0} \\
 & V_{i}=Ay_{i}=A \frac{N_{A}kT_{0}}{Mg} \\
 & V_{f}=Ay_{f}=A \left(  \frac{M}{m+M} \right)^{3/5} \frac{N_{A}kT_{0}}{Mg}
\end{align}$$
Then:
$$\Delta S=N_{A}k\ln\left(  \frac{V_{f}}{V_{i}} \left( \frac{U_{f}}{U_{i}} \right)^{3/2} \right)=0$$
These results are consistent with the reversibility. The first process is not reversible, so by the second law, we must have that $\Delta S>0$. The second process is reversible. Since the gas is thermally isolated, I have that $\Delta S=\int \frac{\rlap{\textrm{d}}{\bar{\phantom{w}}} Q}{T}=\int \frac{0}{T}=0$. Therefore $\Delta S=0$ makes sense. 

# 4.
Let $AB,BC,CD,DA$ on the $p-V$ diagram represent processes $a),b),c),d)$ respectively. Then the only heat inflow is on $AB$. I have:
$$\begin{align}
\Delta Q_{a} & =\int_{A}^B TdS \\
 & =T_{1}\int dS \\
 & =T_{1}(S_{B}-S_{A}) \\
 & =4\alpha T_{1}^4 (V_{B}-V_{A})
\end{align}$$

The work done on $AB$:
$$\begin{align}
W_{AB} & =\int_{A}^B-pdV \\
 & =-\alpha T_{1}^4\int dV \\
 & =-\alpha T_{1}^4(V_{B}-V_{A}) \\
 & =\alpha T_{1}^4(V_{A}-V_{B})
\end{align}$$
Similarly, I have:
$$W_{CD}=\alpha T_{2}^4(V_{C}-V_{D})$$
The work done on $BC$:
$$\begin{align}
W_{BC} & =\Delta U_{BC}-Q_{BC} \\
 & =\Delta U \\
 & =3\alpha(V_{C}T_{2}^4-V_{B}T_{1}^4)
\end{align}$$
Similarly, I have:
$$W_{DA}=3\alpha(V_{A}T_{1}^4-V_{D}T_{2}^4)$$
Since on the $BC$ and $DA$ curves, we are at constant entropy. I have:
$$\begin{align}
 & V_{B}T_{1}^{3}=V_{C}T_{2}^{3} \\
 & V_{D}T_{2}^{3}=V_{A}T_{1}^{3}
\end{align}$$
The efficiency is:
$$\begin{align}
\eta & =\frac{-(W_{AB}+W_{BC}+W_{CD}+W_{DA})}{\Delta Q_{a}} \\
 & =- \frac{\alpha T_{1}^4(V_{A}-V_{B})+ \alpha T_{2}^4(V_{C}-V_{D}+ 3\alpha(V_{C}T_{2}^4-V_{B}T_{1}^4)+ 3\alpha(V_{A}T_{1}^4-V_{D}T_{2}^4)) }{4\alpha T_{1}^4(V_{B}-V_{A})} \\
 & = \frac{1}{4}+ \frac{T_{2}^4(V_{D}-V_{C})+3(V_{B}T_{1}^4-V_{C}T_{2}^4)+3(V_{D}T_{2}^4-V_{A}T_{1}^4)}{4T_{1}^4(V_{B}-V_{A})} \\
 & = \frac{1}{4}+ \left[ T_{2}^4\left(  \left( \frac{T_{1}}{T_{2}} \right)^{3}- \left( \frac{T_{1}}{T_{2}}\right)^{3}\frac{V_{B}}{V_{A}} \right)+ 3 \left(  \frac{V_{A}}{V_{B}}T_{1}^4 - \left(  \frac{T_{1}}{T_{2}} \right)^{3} \frac{V_{B}}{V_{A}}T_{2}^4\right)+ 3 \left(  \left( \frac{T_{1}}{T_{2}} \right)^{3}T_{2}^4-T_{1}^4 \right)  \right]\cdot \frac{1}{4T_{1}^4\left(  \frac{V_{B}}{V_{A}}-1 \right)} \\
 & = \frac{1}{4}+ \left[ 3T_{1}^4(V_{B}-V_{A})+T_{1}^{3}T_{2}(V_{A}-V_{B}) \right]\cdot \frac{1}{4T_{1}^4(V_{B}-V_{A})} \\
 & = \frac{1}{4}+ \frac{3}{4}- \frac{T_{2}}{T_{1}} \\
 & =1- \frac{T_{2}}{T_{1}}
\end{align}$$


