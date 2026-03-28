# Acheson 5.6

Fix $t$, assume that $C(t)$ is parametrized by $\boldsymbol{\alpha}(s,t), s\in[0,1]$. Then we have:
$$\begin{align}
\mathscr{C}(t) & = \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \mathbf{a}(\boldsymbol{\alpha}(s,t),t)
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{0}^{1}ds \left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a}+ \int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt}
\end{align}$$
By definition, if $s$ is fixed, because $\boldsymbol{\alpha}(s,t)$ describes positions of the same group of particles, we have:
$$\frac{\partial \boldsymbol{\alpha}}{\partial t}=\mathbf{u}(\boldsymbol{\alpha}(s,t),t)$$
Then:
$$\begin{align}
\frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} & = \frac{\partial }{\partial s} \frac{\partial \boldsymbol{\alpha}}{\partial t} \\
 & = \frac{\partial}{\partial s}\mathbf{u}(\boldsymbol{\alpha}(s,t),t) \\
\frac{D\mathbf{a}}{Dt} & = \frac{\partial \mathbf{a}}{\partial t}+ \mathbf{u}\cdot \nabla \mathbf{a}
\end{align}$$
We then have:
$$\begin{align}
\int_{0}^{1}ds\left( \frac{d}{dt} \frac{\partial \boldsymbol{\alpha}}{\partial s} \right)\cdot \mathbf{a} & = \int_{C(t)} d\boldsymbol{u}\cdot \mathbf{a} \\
 & = \int_{C(t)} d\mathbf{x}\cdot(\nabla \mathbf{u})\cdot \mathbf{a} \\
\int_{0}^{1}ds \frac{\partial \boldsymbol{\alpha}}{\partial s}\cdot \frac{D\mathbf{a}}{Dt} & = \int_{C(t)} d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+\mathbf{u}\cdot \nabla \mathbf{a} \right)
\end{align}$$
Then adopting Einstein summation convention, we have:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{C(t)}\left(  \frac{\partial a_{i}}{\partial t}dx_{i}+u_{j} \left(\frac{\partial}{\partial x_{j}}a_{i}\right)dx_{i}+ dx_{i} \left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} \right)
\end{align}$$
We force out the cross product by:
$$\begin{align}
u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} & = dx_{i}\left( u_{j} \frac{\partial}{\partial x_{j}}a_{i}+ a_{j} \frac{\partial}{\partial x_{i}}u_{j} \right) \\
 & = dx_{i}\left( u_{j} \frac{\partial}{\partial x_{j}} a_{i}- u_{j} \frac{\partial}{\partial x_{i}}a_{j}+ u_{j} \frac{\partial}{\partial x_{i}}a_{j}+a_{j} \frac{\partial}{\partial x_{i}}u_{j} \right)
\end{align}$$
Recall that:
$$\begin{align}
[(\nabla \times \mathbf{a})\times \mathbf{u}]_{i} & = \epsilon_{ijk}\epsilon_{jlm}\left(  \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \\
 & = (\delta_{kl}\delta_{im}-\delta_{km}\delta_{il}) \left( \frac{\partial}{\partial x_{l}}a_{m} \right)u_{k} \\
 & = u_{k} \frac{\partial}{\partial x_{k}}a_{i}- u_{k} \frac{\partial}{\partial x_{i}}a_{k}
\end{align}$$
Then we have:
$$\begin{align}
u_{j}\left( \frac{\partial}{\partial x_{j}}a_{i} \right)dx_{i}+ dx_{i}\left( \frac{\partial}{\partial x_{i}}u_{j} \right)a_{j} & = dx_{i}\left[ ((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ \frac{\partial}{\partial x_{i}}(u_{j}a_{j})  \right] \\
 & = dx_{i}[((\nabla \times \mathbf{a})\times \mathbf{u})_{i}+ (\nabla(\mathbf{u}\cdot \mathbf{a}))_{i}]
\end{align}$$
Then:
$$\begin{align}
\frac{d}{dt}\mathscr{C} & = \int_{C(t)}d\mathbf{x}\cdot\left(  \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u}+ \nabla(\mathbf{u}\cdot \mathbf{a}) \right) \\
 & = \int_{C(t)}d\mathbf{x}\cdot\left( \frac{\partial \mathbf{a}}{\partial t}+(\nabla \times \mathbf{a})\times \mathbf{u} \right)
\end{align}$$
The last step is because $\int d\mathbf{x}\cdot \nabla(\mathbf{u}\cdot \mathbf{a})= [\mathbf{u}\cdot \mathbf{a}]_{i}^{f}=0$ on any loop. 