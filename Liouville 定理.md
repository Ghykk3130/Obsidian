>[!Definition]
>Given a Hamiltonian system, define the phase flow $g^t$ as:
>$$g^{t}:(q(0)),p(0)\rightarrow(q(t),p(t))$$
>where $(q(0),p(0))$ is an arbitrary point in the phase space, $(q(t),p(t))$ is the solution of the Hamilton's equation starting from $(q(0),p(0))$ at time $t$.

>[!Proposition 1]
>Phase flows constitute a 1-parameter group.
## Proof.
任取一点$(q(0),p(0))$，则$g^{t_{1}}g^{t_{2}}(q(0),p(0))=g^{t_{1}}(q(t_{2}),p(t_{2}))$。其中，$(q(t_{2}),p(t_{2}))$为从$(q(0),p(0))$开始，经过$t_{2}$后的解。而$g^{t_{1}}(q(t_{2}),p(t_{2}))$为从$(q(t_{2}),p(t_{2}))$开始经过$t_{1}$后的解。这个解显然等于从$(q(0),p(0))$开始经过$t_{1}+t_{2}$后的解。于是：
$$g^{t_{1}}g^{t_{2}}=g^{t_{1}+t_{2}}\in \{ \text{phase flow} \}$$
取$q^0=\mathbb{1}$为单位元。显然任取$g^{t}$，我们有：
$$g^{-t}g^{t}=\mathbb{1}$$
这是因为Hamilton方程的可逆性。
>[!Right]
>$\blacksquare$

