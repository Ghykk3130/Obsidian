# 1. Hohenberg-Kohn定理

考虑多电子体系hamiltonian：
$$H=T+V+V_{\text{ee}}$$
其中$V=\sum_{i}v(\mathbf{r}_{i})$为可加势能，$V_{\text{ee}}$为相互作用能。我们先来研究多体波函数与电子密度的关系。考虑电子密度算子$\sum_{i}\delta(\mathbf{r}-\mathbf{r}_{i})$。那么：
$$\begin{align}
n(\mathbf{r}) & = \int d^{3}r_{1}\dots d^{3}r_{N} \Psi^{*} \sum_{i}\delta(\mathbf{r}-\mathbf{r}_{i})\Psi \\
 & = \sum_{i} \int d^{3}r_{1}\dots d^{3}r_{N}\delta(\mathbf{r}-\mathbf{r}_{i})|\Psi|^{2} \\
 & = \sum_{i}\int d^{3}r_{2}\dots d^{3}r_{N}|\Psi(\mathbf{r},\mathbf{r}_{2},\dots,\mathbf{r}_{N})|^{2} \\
 & = N \int d^{3}r_{2}\dots d^{3}r_{N}|\Psi(\mathbf{r},\mathbf{r}_{2},\dots,\mathbf{r}_{N})|^{2}
\end{align}$$
其中第二步到第三步是因为交换任意两个位置，只会多出一个负号。

我们接下来证明Hohenberg-Kohn定理：

>[!Success] Theorem 1.1 (Hohenberg-Kohn theorem)
>The addable potential $v$ is a one to one mapping of the ground state electron density $n$.
## Proof.

首先，如果$v$确定，那么$\Psi$显然唯一确定，那么基态电子密度$n$也唯一确定。

如果$n$确定，假设存在两个可加势$v_{1},v_{2}$，且$v_{1}(\mathbf{r})-v_{2}(\mathbf{r})\neq\text{ const.}$。令：
$$\begin{align}
 & H_{1}=T+V_{\text{ee}}+\sum_{i} v_{1}(\mathbf{r}_{i}) \\
 & H_{2}=T+V_{\text{ee}}+\sum_{i}v_{2}(\mathbf{r}_{i})
\end{align}$$
它们分别解出基态波函数为$\Psi_{1},\ \Psi_{2}$。那么考虑：
$$\begin{align}
E_{1} & = \bra{\Psi_{1}} H_{1} \ket{\Psi_{1}}  \\
 & = \bra{\Psi_{1}} (T+V_{\text{ee}})\ket{\Psi_{1}} + \sum_{i} \int d^{3}r_{1}\dots d^{3}r_{N}|\Psi|^{2} v_{1}(\mathbf{r}_{i}) \\
 & = \bra{\Psi_{1}} (T+V_{\text{ee}})\ket{\Psi_{1}} + \int d^{3}r v_{1}(\mathbf{r})n(\mathbf{r})
\end{align}$$
$$\begin{align}
E_{2} & = \bra{\Psi_{2}} (T+V_{\text{ee}} )\ket{\Psi_{2}} +\int d^{3}rv_{2}(\mathbf{r})n(\mathbf{r})
\end{align}$$
由于$\Psi_{2}$并不是$H_{1}$的基态，那么
$$\begin{align}
E_{1}<\bra{\Psi_{2}} H_{1}\ket{\Psi_{2}}  & = \bra{\Psi_{2}} (T+V_{\text{ee}})\ket{\Psi_{2}} +\int d^{3}rv_{1}(\mathbf{r})n(\mathbf{r}) \\
 & = E_{2}+\int d^{3}r(v_{1}-v_{2}) n
\end{align}$$
同理：
$$\begin{align}
E_{2}< \bra{\Psi_{1}} H_{2}\ket{\Psi_{1}}   & = E_{1}+\int d^{3}r(v_{2}-v_{1})n
\end{align}$$
相加得到$E_{1}+E_{2}<E_{1}+E_{2}\ \rightarrow \leftarrow$。所以$v$是up to a constant唯一确定的。
>[!Right]
>$\blacksquare$

那么如果确定基态电子密度$n$，就确定了hamiltonian。然后系统的任何性质就都确定了。于是$T,V_{\text{ee}}$就都是$n$的泛函。基态总能量写为：
$$E(n)= T(n)+V_{\text{ee}}(n)+\int d^{3}rvn $$
我们只需要对于$n$最小化$E(n)$即可。

# 2. Kohn-Sham方程

定义电子的自作用为Hartree能：
$$V_{H}= \frac{1}{2} \frac{1}{4\pi\epsilon_{0}}\int d^{3}r d^{3}r^{'} \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|^{2}}n(\mathbf{r}^{})n(\mathbf{r}^{'})$$
其中$\frac{1}{2}$是为了减去重复计数。这个自作用并不是精确的，只是一个经典的naive近似。那么能量泛函写为：
$$\begin{align}
E(n) & = T(n)+V_{\text{ee}}(n)+\int d^{3}r vn \\
 & = T_{0}(n)+ V_{H}(n)+ \int d^{3}r vn+E_{\text{xc}}(n)
\end{align}$$
其中，$T_{0}$为电子密度为$n$的自由电子气的动能。交换关联能$E_{\text{xc}}$定义为：
$$E_{\text{xc}}= T-T_{0}+V_{\text{ee}}-V_{H}$$

对$n$变分得到：
$$\begin{align}
\delta E & = \int d^{3}r \delta n\left[  \frac{\delta T_{0}}{\delta n} + \frac{\delta V_{H}}{\delta n}+ \frac{\delta}{\delta n}\int d^{3}rvn + \frac{\delta E_{\text{xc}}}{\delta n} \right]
\end{align}$$

>[!Quote] 如何理解对$n$的变分？
>考虑一个$n$的泛函$f(n)$。我们如果作改变$n(\mathbf{r})\leadsto n(\mathbf{r})+\delta n(\mathbf{r})$，那么相应地引起变化$\delta f$。回忆起函数$g(x_{1},\dots,x_{N})$的离散变分定义为$\delta g= \sum_{i}\frac{\delta g}{\delta x_{i}}\delta x_{i}$。此处$\delta n$是连续的，只需要相应地作：
>$$\delta f= \int d^{3}r \delta(\mathbf{r}) \frac{\delta f}{\delta n}$$

首先忽略高阶项，计算Hartree能变分：
$$\begin{align}
\delta V_{H} & = \frac{1}{2} \frac{1}{4\pi\epsilon_{0}} \int d^{3}r^{'}d^{3}r \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}(n(\mathbf{r})+\delta n(\mathbf{r}))(n(\mathbf{r}^{'})+\delta n(\mathbf{r}^{'}))- \frac{1}{2} \frac{1}{4\pi\epsilon_{0}} \int d^{3}r^{'} d^{3}r \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}n(\mathbf{r})n(\mathbf{r}^{'}) \\
 & = \frac{1}{4\pi\epsilon_{0}}\int d^{3}r^{'}d^{3}r \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}\delta n(\mathbf{r})n(\mathbf{r}^{'})
\end{align}$$
计算可加势能变分：
$$\begin{align}
\delta \int d^{3}r vn & = \int d^{3}rv(n+\delta n)-\int d^{3}rn \\
 & = \int d^{3}r v\delta n
\end{align}$$
注意到$\delta n$不是任意的，而是存在约束$\int d^{3}r n=N$。所以构造辅助泛函：
$$F(n)=E(n)-\epsilon N$$
对辅助泛函变分得到：
$$\begin{align}
 & \delta F=0 \\
\implies &  \frac{\delta T_{0}}{\delta n }+ v + \frac{1}{4\pi\epsilon_{0}}\int d^{3}r^{'}n(\mathbf{r}^{'}) \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}+ \frac{\delta E_{\text{xc}}}{\delta n}=\epsilon
\end{align}\tag{*}$$
定义交换势能为$v_{\text{xc}}= \frac{\delta E_{\text{xc}}}{\delta n}$。定义Kohn-Sham势为$v_{\text{KS}}=v + \frac{1}{4\pi\epsilon_{0}}\int d^{3}r^{'}n(\mathbf{r}^{'}) \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}+ \frac{\delta E_{\text{xc}}}{\delta n}$作为有效可加势。这等价于自由电子气的能量$E=T_{0}+ \int d^{3}r v_{\text{KS}}n$。将这个能量对$n$变分自然能够得到$(*)$。

那么我们不妨解自由电子气Schrodinger方程：
$$\left( - \frac{\hbar^{2}}{2m}\nabla^{2}+v_{\text{KS}} \right)\psi_{i}=\epsilon_{i}\psi_{i}$$
然后令电子密度为$n(\mathbf{r})=\sum_{i}|\psi_{i}(\mathbf{r})|^{2}$。这称为Kohn-Sham方程。显然解Kohn-Sham方程得到：
$$\begin{align}
 & \sum_{i} \int d^{3}r \psi_{i}^{*}\left( - \frac{\hbar^{2}}{2m}\nabla^{2}+v_{\text{KS}} \right)\psi_{i}=\sum_{i}\epsilon_{i} \\
\implies & T_{0}+ \int d^{3}r v_{\text{KS}}|\psi_{i} |^{2}=\sum_{i}\epsilon_{i}
\end{align}$$
那么能量可以写为：
$$\begin{align}
E & = T_{0}+ \int d^{3}r vn+ V_{H}+E_{\text{xc}} \\
 & = \sum_{i}\epsilon_{i}-\int d^{3}rv_{\text{KS}}n + \int d^{3}rvn+ V_{H}+E_{\text{xc}} \\
 & = \sum_{i}\epsilon_{i}- \int d^{3}r \left( v+ \frac{1}{4\pi\epsilon_{0}}\int d^{3}r^{'} \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}n(\mathbf{r}^{'})+ v_{\text{ex}} \right)n(\mathbf{r})+\int d^{3}rn+ V_{H} +E_{\text{xc}} \\
 & = \sum_{i}\epsilon_{i}-V_{H}+E_{\text{xc}}-\int d^{3}r v_{\text{xc}}n
\end{align}$$
我们只需要找到足够好的$E_{\text{xc}}$即可。一般来说，$E_{\text{xc}}$可以分为交换和关联两部分。即$E_{\text{xc}}=E_{x}+E_{c}$。交换部分定义为$V_{\text{ee}}$在$\frac{1}{\sqrt{ N! }}\ket{\psi_{1}}\wedge\dots \wedge \ket{\psi_{N}}$下的期望值，减去Hartree能。我们计算
$$\begin{align}
\langle V_{\text{ee}}\rangle & = \frac{1}{2} \frac{1}{4\pi\epsilon_{0}}\sum_{i,j}\int d^{3}r_{1}\dots d^{3}r_{N} \frac{e^{2}}{|\mathbf{r}_{i}-\mathbf{r}_{j} |}\psi ^{*}_{i}(\mathbf{r}_{i}) 
\end{align}$$


## Ex:

考虑一种ansatz，$E_{\text{xc}}=\int d^{3}r n \epsilon_{\text{xc}}(n)$。即局部存在一种交换势$\epsilon_{\text{xc}}$，它是局部电子密度$n$的函数。那么：
$$\begin{align}
v_{\text{xc}} & = \frac{\delta E_{\text{xc}}}{\delta n}  
\end{align}$$
考虑：
$$\begin{align}
\delta E_{\text{xc}} & =  \int d^{3}r \left( \delta n \epsilon_{\text{xc}}+ n \frac{\partial\epsilon_{\text{xc}}}{\partial n}\delta n \right)
\end{align}$$
>[!Warning]
>注意，这里$\epsilon_{\text{xc}}$也是$n$的函数，所以变分也要对它进行。

所以：
$$v_{\text{xc}}= \epsilon_{\text{xc}}+ n \frac{\partial\epsilon_{\text{xc}}}{\partial n}$$
那么Kohn-Sham方程为：
$$\begin{align}
 & \left[  - \frac{\hbar^{2}}{2m}\nabla^{2}+v+ \frac{1}{4\pi\epsilon_{0}}\int d^{3}r^{'}n(\mathbf{r}^{'}) \frac{e^{2}}{|\mathbf{r}-\mathbf{r}^{'}|}+\epsilon_{\text{xc}}+ n \frac{\partial\epsilon_{\text{xc}}}{\partial n} \right]\psi_{i}=\epsilon_{i}\psi_{i}
\end{align}$$

