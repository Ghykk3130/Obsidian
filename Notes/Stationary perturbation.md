# 1. Non-degenerate

考虑原始Hamiltonian $H_{0}$，原始本征态$\ket{n^{(0)}}$，原始本征能量$E_{n}^{(0)}$。考虑加入微扰$\lambda V$，其中$\lambda$为tuning parameter。令微扰后的能量修正为$\Delta_{n}$。那么fix $n$，我们有本征值问题：
$$(H_{0}+\lambda V)\ket{n} =(E_{n}^{(0)}+\Delta_{n})\ket{n} $$

我们先强行解方程，再进行迭代。

>[!Success] Proposition 1.1
>We have:
>$$\ket{n} =\ket{n^{(0)}} + \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}(\lambda V-\Delta_{n})\ket{n} $$

^29d3b0

## Proof.

变换形式：
$$(E_{n}^{(0)}-H_{0})\ket{n} =(\lambda V-\Delta_{n})\ket{n} $$
若$E_{n}^{(0)}$的特征子空间非简并，那么显然算子$E_{n}^{(0)}-H_{0}$在$span\{ \ket{n^{(0)}} \}$中为零，在其之外是非异的。

>[!Quote] Idea 1.1
>对于一个一般的方程：
>$$A \ket{\psi} =\ket{\phi}\text{, }A\text{ singular} $$
>我们可以将全空间分解：
>$$\mathcal{H}=\mathrm{Im}(A) \oplus \text{Ker}(A)$$
>那么，相应地，$\ket{\psi}$也可作分解：
>$$\ket{\psi} =\ket{\psi_{1}} +\ket{\psi_{2}} \text{ where }\ket{\psi_{1}} \in \mathrm{Im}(A),\ \ket{\psi_{2}} \in \text{Ker}(A)$$
>这样一来，方程变为：
>$$\begin{align}
 & A\ket{\psi_{1}} =\ket{\phi},\ \ket{\psi_{2}} \text{ arbitrary }\in \text{Ker}(A) 
\end{align}$$
>
>所以我们只需要解非齐次解$\ket{\psi_{1}}$，然后再加上任意齐次解$\text{Ker}(A)$中的矢量。当然最终解要满足边界条件，或者别的什么条件。

所以我们考虑齐次解$\ket{n} \in (1-\ket{n^{(0)}}\bra{n^{(0)}})\mathcal{H}$，我们可以解得：
$$\ket{n} = \frac{1}{(E_{n}^{(0)}-H_{0})|_{(1-\ket{n^{(0)} }\bra{n^{(0)}}  )\mathcal{H}}}(\lambda V-\Delta_{n})\ket{n} \text{ for }\ket{n} \in (1-\ket{n^{(0)}} \bra{n^{(0)}} )\mathcal{H}$$
这个逆可以直接求出来：
$$\begin{align}
  (E_{n}^{(0)}-H_{0}) |_{(1-\ket{n^{(0)}} \bra{n^{(0)}} )\mathcal{H} } &  = E_{n}^{(0)}- \sum_{n^{'}\neq n}E_{n^{'}}^{(0)}\ket{n^{'(0)}} \bra{n^{'(0)}}  \\
   & = E_{n}^{(0)}\sum_{n^{'}\neq n} \ket{n^{'(0)}} \bra{n^{'(0)}} -\sum_{n^{'}\neq n}E_{n^{'}}^{(0)}\ket{n^{'(0)}} \bra{n^{'(0)}}  \\
 & = \sum_{n^{'}\neq n} (E_{n}^{(0)}-E_{n^{'}}^{(0)})\ket{n^{'(0)}} \bra{n^{'(0)}}  \\
\implies  \frac{1}{(E_{n}^{(0)}-H_{0})|_{(1-\ket{n^{(0)}} \bra{n^{(0)}} )} } & = \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}  
\end{align}$$
所以非齐次解为：
$$\ket{n} = \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}(\lambda V-\Delta_{n})\ket{n} $$
我们再加上齐次解得到：
$$\ket{n} =c\ket{n^{(0)}} + \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}(\lambda V-\Delta_{n})\ket{n} $$
不妨暂时先取$c=1$，最后perturbation算完后再进行overall normalization。
>[!Right]
>$\blacksquare$

现在开始微扰。令：
$$\begin{align}
 & \Delta_{n} =\sum_{k=1}^{\infty}\lambda^{k}\Delta_{n}^{(k)} \\
 & \ket{n} = \sum_{k=0}^{\infty}\lambda^{k} \ket{n^{(k)}} 
\end{align}$$
其中$\Delta_{n}$的求和从一次项开始是因为$\lambda=0$时显然没有能量修正。我们有：

>[!Success] Proposition 1.2
>$$\Delta_{n}^{(k)}=  \bra{n^{(0)}} V \ket{n^{(k-1)}} $$
## Proof.

我们有：
$$\begin{align}
 & (E_{n}^{(0)}-H_{0}) \ket{n} = (\lambda V-\Delta_{n})\ket{n}  \\
\implies & \bra{n^{(0)}} (E_{n}^{(0)}-H_{0})\ket{n} =\bra{n^{(0)}} (\lambda V-\Delta_{n})\ket{n}  \\
\implies & \lambda \bra{n^{(0)}} V\ket{n}= \Delta_{n}\bra{n^{(0)}} n\rangle=\Delta_{n} \\
\implies & \lambda \bra{n^{(0)}} V \sum_{k=0}^{\infty}\lambda^{k}\ket{n^{(k)}} = \sum_{k=1}^{\infty}\lambda^{k}\Delta_{n}^{(k)} \\
\implies & \Delta_{n}^{(k)}= \bra{n^{(0)}} V \ket{n^{(k-1)}}   
\end{align}$$
其中第三行最后是因为注意到由[[Stationary perturbation#^29d3b0|proposition 1.1]]，$\ket{n}$中除了$\ket{n^{(0)}}$部分其余都垂直于$\ket{n^{(0)}}$。
>[!Right]
>$\blacksquare$

>[!Warning]
>在真正写能量修正时，$k$阶修正不是$\Delta_{n}^{(k)}$，而是$\lambda^{k}\Delta_{n}^{(k)}$!

要计算能量修正，首先需要计算态修正。

>[!Success] Proposition 1.3
>$$\begin{align}
 & \Delta_{n}^{(1)}= V_{nn} \\  & \ket{n^{(1)}} = \sum_{n^{'}\neq n} \ket{n^{'(0)}} \frac{V_{n^{'}n} }{E_{n}^{(0)}-E_{n^{'} }^{(0)} } \\
 & \Delta_{n}^{(2)}= \sum_{n^{'}\neq n} \frac{|V_{n^{'}n}|^{2}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}} \\
 & \ket{n^{(2)}} =\sum_{n^{'},n^{''}\neq n} \ket{n^{'(0)}}  \frac{V_{n^{'}n^{''}}}{E_{n^{}}^{(0)}-E_{n^{'}}^{(0)}} \frac{V_{n^{''}n}}{E_{n}^{(0)}-E_{n^{''}}^{(0)}}-\sum_{n^{'}\neq n}\ket{n^{'(0)}}  \frac{V_{n^{'}n}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}} \frac{V_{nn}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}} \\
 & \Delta_{n}^{(3)}=\sum_{n^{'},n^{''}\neq n} \frac{V_{nn^{'}}V_{n^{'}n^{''}}V_{n^{''}n}}{(E_{n}^{(0)}-E_{n^{'}}^{(0)})(E_{n}^{(0)}-E_{n^{'}}^{(0)})}- \sum_{n^{'}\neq n} \frac{|V_{n^{'}n}|^{2}V_{nn}}{(E_{n}^{(0)}-E_{n^{'}}^{(0)})^{2} }
\end{align}$$
## Proof.

我们有：
$$\begin{align}
 &  \ket{n} = \ket{n^{(0)}} + \sum _{n^{'}\neq n}^{\infty}  \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}(\lambda V- \Delta_{n}) \ket{n}  \\
\implies & \sum_{k=0}^{\infty}\lambda^{k}\ket{n^{(k)}} = \ket{n^{(0)}} + \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}\left( \lambda V- \sum_{k=1 }^{\infty}\lambda^{k}\Delta_{n}^{(k)}  \right)\sum_{k=0}^{\infty}\lambda^{k}\ket{n^{(k)}} 
\end{align}$$
首先：
$$\Delta_{n}^{(1)}= \bra{n^{(0)}} V \ket{n^{(0)}} =V_{nn}$$
匹配$\mathcal{O}(\lambda)$项得到：
$$\begin{align}
  \ket{n^{(1)}}  & = \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}} V \ket{n^{(0)}} - \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n}^{(0)}-E_{n^{'}}^{(0)}}\Delta_{n}^{(1)}\ket{n^{(0)}}  \\
 & = \sum_{n^{'}\neq n} \ket{n^{'(0)}}  \frac{V_{n^{'}n}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}}
\end{align}$$
所以：
$$\begin{align}
\Delta_{n}^{(2)} & = \bra{n^{(0)}} V \ket{n^{(1)}}  \\
 & = \sum_{n^{'}\neq n} \frac{|V_{n^{'}n}|^{2}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}} 
\end{align}$$
匹配$\mathcal{O}(\lambda^{2})$项得到：
$$\begin{align}
\ket{n^{(2)}}  & = \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n^{}}^{(0)}-E_{n^{'}}^{(0)} } V \ket{n^{(1)}}-  \sum_{n^{'}\neq n} \frac{\ket{n^{'(0)}} \bra{n^{'(0)}} }{E_{n^{}}^{(0)}-E_{n^{'}}^{(0)} }\Delta_{n}^{(1)} \ket{n^{(1)}}  \\
 
\end{align} $$
所以：
$$\ket{n^{(2)}} = \sum_{n^{'},n^{''}\neq n} \ket{n^{'(0)}}  \frac{V_{n^{'}n^{''}}}{E_{n^{}}^{(0)}-E_{n^{'}}^{(0)}} \frac{V_{n^{''}n}}{E_{n}^{(0)}-E_{n^{''}}^{(0)}}-\sum_{n^{'}\neq n}\ket{n^{'(0)}}  \frac{V_{n^{'}n}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}} \frac{V_{nn}}{E_{n}^{(0)}-E_{n^{'}}^{(0)}}$$
然后：
$$\begin{align}
\Delta_{n}^{(3)} & = \bra{n^{(0)}} V \ket{n^{(2)}}  \\
 & = \sum_{n^{'},n^{''}\neq n} \frac{V_{nn^{'}}V_{n^{'}n^{''}}V_{n^{''}n}}{(E_{n}^{(0)}-E_{n^{'}}^{(0)})(E_{n}^{(0)}-E_{n^{'}}^{(0)})}- \sum_{n^{'}\neq n} \frac{|V_{n^{'}n}|^{2}V_{nn}}{(E_{n}^{(0)}-E_{n^{'}}^{(0)})^{2} }
\end{align}$$
>[!Right]
>$\blacksquare$
## Ex: quadratic stark shift

考虑给氢原子$s$轨道加上$\mathbf{E}=E  \hat{\mathbf{z}}$。那么产生微扰$|e|E z$。则有一阶能量修正：
$$\begin{align}
\Delta^{(1)} & = \bra{1,0,0} z \ket{1,0,0} 
\end{align}$$
因为$z$具有odd parity，而$\ket{1,0,0}$具有even parity，所以：
$$\Delta^{(1)}=0$$
考虑二阶能量修正：
$$\begin{align}
\Delta^{(2)} & =  \sum_{n^{'}\neq 1,l^{'},m^{'}} \frac{|\bra{n^{'},l^{'},m^{'}} z \ket{1,0,0}|^{2} }{E_{1 }^{(0)}-E_{n^{'}}^{(0)}} \\
 & = \sum \frac{\bra{1,0,0}z \ket{n^{'},l^{'},m^{'}} \bra{n^{'},l^{'},m^{'}} z \ket{1,0,0}  }{E_{1}^{(0)}-E_{n^{'}}^{(0)}}
\end{align}$$
我们注意到分母：
$$E_{1}^{(0)}- E_{2}^{(0)} \leq E_{1}^{(0)}- E_{n^{'}}^{(0)}\leq E_{1}^{(0)}-E_{\infty}^{(0)}\implies \frac{3}{4} E_{1}^{(0)}\leq \text{denominator}\leq E_{1}^{(0)}$$
所以可以求得$\Delta^{(2)}$的上下界：
$$\begin{align}
\text{bound}  & = \frac{1}{E_{1}^{(0)}-E_{m}^{(0)}} \sum_{n^{'}\neq 1,l^{'},m^{'}} \bra{1,0,0} z \ket{n^{'},l^{'},m^{'}} \bra{n^{'},l^{'},m^{'}} z \ket{1,0,0} \text{ where }m=2\text{ or }\infty\\
 & = \frac{1}{E_{1}^{(0)}-E_{m}^{(0)} }\sum_{n^{'},l^{'},m^{'}}\bra{1,0,0} z \ket{n^{'},l^{'},m^{'}} \bra{n^{'},l^{'},m^{'}} z \ket{1,0,0} \\
 & = \frac{1}{E_{1}^{(0)}-E_{m}^{(0)}  } \bra{1,0,0} z^{2}\ket{1,0,0}    
\end{align}$$
其中第一步到第二步是因为$\bra{1,0,0}z\ket{1,0,0}=0$。可以计算：
$$\begin{align}
\bra{1,0,0} z^{2}\ket{1,0,0}  & = \bra{1,0,0} r^{2}\cos ^{2}\theta \ket{1,0,0}  \\
 & = a_{0}^{2}
\end{align}$$
所以：
$$\frac{4}{3} \frac{e^{2}E^{2}}{E_{1}^{(0)}}a_{0}^{2}\leq e^{2}E^{2} \Delta^{(2)}\leq \frac{e^{2}E^{2}}{E_{1}^{(0)}}a_{0}^{2}$$
其中$E_{1}^{(0)}\approx -13.6eV <0$。

## Ex: SHO

考虑：
$$H_{0}= \frac{p^{2}}{2m}+ \frac{1}{2}m\omega^{2}x^{2},\ V=\frac{1}{2}m\epsilon^{}\omega^{2}x^{2}$$
我们研究$\ket{0^{(0)}}$的微扰。将$\frac{1}{2}m\epsilon^{2}\omega^{2}$当作tuning parameter，则有：
$$\begin{align}
 \Delta_{0}  ^{(1)} & = \bra{0^{(0)}} x^{2}\ket{0^{(0)}}  
\end{align}$$
>[!Quote] Idea 1.2
>在SHO中，遇到$x,p$有关的项需要和本征态作运算，可以利用：
>$$x= \sqrt{ \frac{\hbar}{2m\omega} }(a^{\dagger}+a),\ p=i \sqrt{ \frac{m\hbar \omega}{2} }(a^{\dagger}-a)$$

那么容易计算：
$$\begin{align}
 \Delta_{0}  ^{(1)} & = \frac{\hbar}{2m\omega}\bra{0^{(0)}} (\sqrt{ 2 }\ket{2^{(0)}} +\ket{0^{(0)}} ) \\
 & = \frac{\hbar}{2m\omega}
\end{align}$$
接着计算二阶能量修正。我们计算：
$$\begin{align}
x^{2}_{0 n^{'} } & = \bra{0^{(0)}} x^{2}\ket{n^{'(0)}}  \\
 & = \frac{\hbar}{2m\omega} \bra{0^{(0)}}(\sqrt{ (n+1)(n+2) }\ket{n+2^{(0)}} + \sqrt{ n(n-1) }\ket{n-2^{(0)}} +(2n+1)\ket{n^{(0)}} ) \\
 & = \frac{\hbar}{\sqrt{ 2 }m\omega}\delta_{n^{'},2}+ \frac{\hbar}{2m\omega}\delta_{n^{'},0} 
\end{align}$$
所以：
$$\begin{align}
\Delta_{0} ^{(2)} & = \sum_{n^{'}\neq 0} \frac{|x^{2}_{n^{'}0}|^{2}}{E_{0}^{(0)}-E_{n^{'}}^{(0)}} \\
 & = - \frac{\hbar}{4m^{2}\omega^{3}}
\end{align}$$
那么保留到$\mathcal{O}(\epsilon^{2})$：
$$\Delta_{0}\approx \hbar \omega\left( \frac{1}{4}\epsilon- \frac{1}{16}\epsilon^{2} \right)$$
通过替换$\omega\leadsto \sqrt{ 1+\epsilon^{} }\omega$，我们可以获得精确解：
$$\begin{align}
E_{0} & = \frac{1}{2} \sqrt{ 1+\epsilon^{} }\hbar\omega \\
 & \approx \frac{1}{2}\left( 1+ \frac{1}{2}\epsilon^{}- \frac{1}{8}\epsilon^{2} \right)\hbar \omega
\end{align}$$
和微扰的计算结果一致。

我们可以计算本征态一阶修正：
$$\begin{align}
 \ket{0^{(1)}}  & = \sum_{n^{'}\neq 0}\ket{n^{'(0)}}  \frac{x^{2}_{n^{'}0}}{E_{0}^{(0)}-E_{n^{'}}^{(0)}} \\
 & = - \frac{1}{2\sqrt{ 2 }m\omega^{2}}\ket{2^{(0)}} 
\end{align}$$
所以保留到$\mathcal{O}(\epsilon^{})$：
$$\ket{0} = \ket{0^{(0)}} - \epsilon\frac{1}{4\sqrt{ 2 }}\ket{2^{(0)}} $$
同理，我们可以精确解得本征态：
$$\begin{align}
 \bra{x} 0\rangle & = \frac{1}{\pi^{1/4}(\hbar /m\omega)^{1/4}} (1+\epsilon^{})^{1/8}\exp\left( - \frac{x^{2}}{2\hbar /m\omega}(1+\epsilon^{})^{1/2} \right) \\
 & \approx \frac{1}{\pi^{1/4}(\hbar /m\omega)^{1/4}}\left( 1+ \frac{1}{8}\epsilon^{} \right)\exp\left( - \frac{x^{2}}{2\hbar /m\omega}\left( 1+ \frac{1}{2}\epsilon^{} \right) \right) \\
 & \approx \frac{1}{\pi^{1/4}(\hbar /m\omega)^{1/4}}\left( 1+ \frac{1}{8}\epsilon^{} \right)\left[ \exp\left( - \frac{x^{2}}{2\hbar /m\omega} \right)- \frac{x^{2}}{4\hbar /m\omega}\epsilon\exp\left( - \frac{x^{2}}{2\hbar /m\omega} \right) \right] \\
 & \approx \frac{1}{\pi^{1/4}(\hbar /m\omega)^{1/4}}\exp\left( - \frac{x^{2}}{2\hbar /m\omega} \right)+ \epsilon\left[\frac{1}{8\pi^{1/4}(\hbar /m\omega)^{1/4}}\exp\left( - \frac{x^{2}}{2\hbar /m\omega} \right)- \frac{1}{\pi^{1/4}(\hbar /m\omega)^{1/4}} \frac{x^{2}}{4\hbar /m\omega}\exp\left( - \frac{x^{2}}{2\hbar /m\omega} \right)\right] \\
 & = \bra{x} 0^{(0)}\rangle- \epsilon \frac{1}{4\sqrt{ 2 }} \bra{x} 2^{(0)}\rangle
\end{align}$$

