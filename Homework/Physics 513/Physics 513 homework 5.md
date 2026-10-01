# Problem 1
## (a)

We have:
$$\begin{align}
[L^{i},L^{j}] & = \frac{i}{4}[\epsilon^{ikl}J^{kl},\epsilon^{j{mn}}J^{mn}] \\
 & = \frac{i}{4}\epsilon^{ikl}\epsilon^{jmn}(-g^{km}J^{ln}-g^{ln}J^{km}+g^{kn}J^{lm}+g^{lm}J^{kn}) \\
 & = \frac{i}{4}(\epsilon^{ikl}\epsilon^{jkn}J^{l n}+\epsilon^{ikl}\epsilon^{jml}J^{km}-\epsilon^{ikl}\epsilon^{jmk}J^{lm}-\epsilon^{ikl}\epsilon^{jln}J^{kn}) \\
 & = \frac{i}{2}(\epsilon^{ikl}\epsilon^{jkn}J^{l n}- \epsilon^{ikl}\epsilon^{jmk}J^{lm})  \\ & = i \epsilon^{ikl}\epsilon^{jkn}J^{l n}
\\
 & = i(\delta^{ij}\delta^{ln}-\delta^{in}\delta^{lj})J^{l n} \\
 & = i(\delta^{ij}J^{ll}-J^{ji}) 
\end{align}$$
Similarly, we compute:
$$\begin{align}
[L^{i},K^{j} ] & = \left[ \frac{1}{2}\epsilon^{ikl}J^{kl},J^{j{0}} \right] \\
 & = \frac{1}{2}\epsilon^{ikl}[J^{kl},J^{j{0}}] \\
 & = \frac{i}{2}\epsilon^{ikl}(g^{k{0}}J^{lj}+g^{lj}J^{k 0}-g^{kj}J^{l 0}-g^{l 0}J^{kj}) \\
 & = \frac{i}{2}(g^{lj}J^{k 0}-g^{kj}J^{l 0}) \\
 & = i\epsilon^{ikl}g^{lj}J^{k 0} \\
 & = -i\epsilon^{ikj}J^{k 0} \\
 & = i\epsilon^{ijk}J^{k 0}
\end{align}$$
Similarly, we compute:
$$\begin{align}
[K^{i},K^{j}] & = i(g^{i 0}J^{0 j}+g^{0 j}J^{i 0}-g^{ij }J^{0 0}-g^{0 0}J^{ij}) \\
 & = -ig^{ij}J^{0 0}-i g^{0 0}J^{ij} \\
 & = i(\delta^{ij}J^{00}-J^{ij})
\end{align}$$
## (b)

We have:
$$\begin{align}
[J^{i}_{+},J^{j}_{-}] & = \left[  \frac{1}{2}(L^{i}+iK^{i}), \frac{1}{2}(L^{j}-iK^{j}) \right] \\
 & = \frac{1}{4}[L^{i},L^{j}]+ \frac{1}{4}[K^{i},K^{j}]+ \frac{i}{4}[K^{i},L^{j}]- \frac{i}{4}[L^{i},K^{j}] \\
 & = \frac{i}{4}(\delta^{ij}J^{ll}-J^{ji})+ \frac{i}{4}(\delta^{ij}J^{00}-J^{ij})+ \frac{i}{4}\cdot i\epsilon^{ijk}J^{k 0}- \frac{i}{4}\cdot i \epsilon^{ijk}J^{k 0} \\
 & = \frac{i}{4}\delta^{ij}\text{Tr}(J)+ \frac{i}{4}(-J^{ji}-J^{ij}) \\
 & = 0
\end{align}$$
This is because $J$ is antisymmetric. The trace is zero. 

Clearly, if we are computing $[J^{i}_{+},J^{j}_{+}]$, we only need to change a sign. we get:
$$\begin{align}
[J^{i}_{+},J^{j}_{+}] & = \frac{i}{4}(\delta^{ij}J^{ll}-J^{ji})- \frac{i}{4}(\delta^{ij}J^{00}-J^{ij})+ \frac{i}{4}\cdot i \epsilon^{ijk}J^{k 0}+ \frac{i}{4}\cdot i \epsilon^{ijk}J^{k 0} \\
 & = \frac{i}{4}
\end{align}$$