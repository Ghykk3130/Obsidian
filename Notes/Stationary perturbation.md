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
>$$\Delta_{n}^{(k)}= \lambda \bra{n^{(0)}} V \ket{n^{(k-1)}} $$
## Proof.

我们有：
$$\begin{align}
 & (E_{n}^{(0)}-H_{0}) \ket{n} = (\lambda V-\Delta_{n})\ket{n}  \\
\implies & \bra{n^{(0)}} (E_{n}^{(0)}-H_{0})\ket{n} =\bra{n^{(0)}} (\lambda V-\Delta_{n})\ket{n}  \\
\implies & \lambda \bra{n^{(0)}} V\ket{n}= \Delta_{n}\bra{n^{(0)}} n\rangle=\Delta_{n} \\
\implies & \lambda \bra{n^{(0)}} V \sum_{k=0}^{\infty}\lambda^{k}\ket{n^{(k)}} = \sum_{k=1}^{\infty}\lambda^{k}\Delta_{n}^{(k)} \\
\implies & \Delta_{n}^{(k)}= \lambda \bra{n^{(0)}} V \ket{n^{(k-1)}}   
\end{align}$$
其中第三行最后是因为注意到由[[Stationary perturbation#^29d3b0|proposition 1.1]]，$\ket{n}$中除了$\ket{n^{(0)}}$部分其余都垂直于$\ket{n^{(0)}}$。
>[!Right]
>$\blacksquare$

所以要计算能量修正，首先需要计算态修正。

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
## Ex:


