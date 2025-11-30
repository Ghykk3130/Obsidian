# 1. Occupation number

考虑任意数量的boson构成的系统。（下面的推导没有依赖boson数量固定的假设！所以也能适用于光子。）计算某个能级$\epsilon_{k}$上的平均粒子数$\langle n_{k}\rangle$。将整个系统当做巨正则系综，则：
$$\begin{align}
\langle n_{k}\rangle & = \frac{1}{Q} \sum_{\{ n_{j} \}}n_{k}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)
\end{align}$$
约掉$j\neq k$的部分得到：
$$\begin{align}
\langle n_{k}\rangle & = \frac{\sum_{\{ n_{j} \}}n_{k}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)}{\sum_{\{ n_{j} \}}\exp\left( -\beta \sum_{j}n_{j}\epsilon_{j}+\alpha \sum_{j}n_{j} \right)} \\
 & = \frac{\sum_{n_{k}}n_{k}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})}{\sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})} \\
 & = \frac{\partial}{\partial \alpha}\ln\left( \sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k}) \right)
\end{align}$$
容易得到：
$$\sum_{n_{k}}\exp(-\beta n_{k}\epsilon_{k}+\alpha n_{k})= \frac{1}{1-\exp(-\beta\epsilon_{k}+\alpha)}$$
所以：
$$\langle n_{k}\rangle= \frac{1}{\exp(\beta\epsilon_{k}-\alpha)-1}$$
定义fugacity $\mathcal{z}=e^{\alpha}=e^{\beta \mu}$，则：
$$\langle n_{k}\rangle= \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon_{k}}-1}$$
>[!Note] Proposition 1
>The occupation number of a state with wavevector $\vec{k}$ is:
>$$\langle n_{\vec{k}}\rangle= \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon_{\vec{k}}}-1}$$

>[!Note] Lemma 1
>For bosons, must have $\mathcal{z}<1$.
## Proof.
要求：
$$\langle n_{k}\rangle= \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon_{k}}-1}>0$$
即可。
>[!Right]
>$\blacksquare$
# 2. BEC

考虑一个$N$个玻色子的气体。假设气体粒子之间没有相互作用。那么多体Schrodinger方程可以分解。一个粒子的Schrodinger方程为：
$$ - \frac{\hbar^{2}}{2m}\nabla^{2}\psi(\vec{r})=\epsilon\psi(\vec{r})$$
可以解得：$\psi(\vec{r})=A\exp(-i\vec{k}\cdot \vec{r})$。考虑周期性边界条件，则有：
$$k_{i}= \frac{2\pi n_{i}}{L},n_{i}\in \mathbb{Z}$$
容易解得：
$$\epsilon_{\vec{k}}= \frac{\hbar^{2}k^{2}}{2m}$$
则必存在约束$N=\sum_{\vec{k}}n_{\vec{k}}$。两边套上平均值得到：
$$\begin{align}
N & =\sum_{\vec{k}}\langle n_{\vec{k}}\rangle \\
 & = \sum_{\vec{k}} \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon_{\vec{k}}}-1}
\end{align}\tag{*}$$
我们考虑用积分来估计求和。我们试图得到以能量为测度的积分。为此，我们作：
$$\begin{align}
\sum_{\vec{k}} & = \sum_{k_{1},k_{2},k_{3}} \Delta n_{1}\Delta n_{2}\Delta n_{3} \\
 & = \left( \frac{L}{2\pi} \right)^{3}\sum_{k_{1},k_{2},k_{3}}\Delta k_{1}\Delta k_{2}\Delta k_{3} \\
 & \approx \left(  \frac{L}{2\pi} \right)^{3} \int d^{3}k \\
 & = \left(  \frac{L}{2\pi} \right)^{3} \int dk 4\pi k^{2} \\
 & = \left(  \frac{L}{2\pi} \right)^{3} \sqrt{ 2 } \frac{m^{3/2}}{\hbar^{3}}4\pi\int d\epsilon\epsilon^{1/2} \\
 & = \frac{Vm^{3/2}}{\sqrt{ 2 }\hbar^{3}\pi^{2}}\int d\epsilon\epsilon^{1/2} 
\end{align}$$
注意到$(*)$右手边，${k}$约小时，$k$增长带来的变动就越大。（因为$e^x$在$0$附近是最平缓的，和其他$x>0$相比。那么倒数倒过来，在$0$附近就是变动最打的。或者求个导就可以知道。）所以用积分近似就越不精确。所以我们把和的第一项拆出来：
$$\begin{align}
N & = \frac{\mathcal{z}}{1-\mathcal{z}}+ \sum_{\vec{k}\neq 0} \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon_{\vec{k}}}-1} \\
 & \approx \frac{\mathcal{z}}{1-\mathcal{z}}+ \frac{Vm^{3/2}}{\hbar^{3}\pi^{2}}\int d\epsilon \epsilon^{1/2} \frac{1}{\frac{1}{\mathcal{z}}e^{\beta\epsilon}-1} \\
 & = \frac{\mathcal{z}}{1-\mathcal{z}}+  \frac{2}{\sqrt{ \pi }} \frac{V}{\lambda^{3}}\int_{0}^{\infty}dx \frac{x^{1/2}}{\mathcal{z}^{-1}e^{x}-1}
\end{align}$$
其中积分下限其实不应该是零，而应该是$\epsilon= \frac{\hbar^{2}}{2m}\left(  \frac{2\pi}{L} \right)^{2}$。但是在热力学极限$L\rightarrow \infty$下就是零了。注意$\lambda=\frac{h}{\sqrt{ 2\pi mkT }}$而不是$\hbar$。

定义:

>[!Note] Definition 1
$$g_{n}(\mathcal{z})= \frac{1}{\Gamma(n)}\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^{ x}-1}\text{ for }0\leq \mathcal{z} <1$$

容易注意到$\Gamma\left( \frac{3}{2} \right)=\left( \frac{1}{2} \right)! = \frac{1}{2}\Gamma\left( \frac{1}{2} \right)= \frac{\sqrt{ \pi }}{2}$。于是：
$$N= \frac{V}{\lambda^{3}}g_{3/ 2}(\mathcal{z})+ \frac{\mathcal{z}}{1-\mathcal{z}}$$
其中$\frac{V}{\lambda^{3}}g_{3 / 2}(\mathcal{z})$可以理解为占据激发态粒子的数量。$\frac{\mathcal{z}}{1-\mathcal{z}}$可以理解为基态粒子数量。
## Remark
但其实量子力学里面没有某个粒子一定占据某一个态一说对吧。我们说有$n$个粒子占据某个态，只是说取$n$个这个态，最后作symmetrization得到一个ket而已。

我们有：
$$1= \frac{V / N}{\lambda^{3}}g_{3 / 2}(\mathcal{z})+ \frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$$
## Remark
上述方程代表了各个热力学量之间的约束。我们有两种运用方式：
- 给定$T,N,V$，我们可以计算该温度下的$\mu$。
- 给定$\mu,N,V$，我们可以计算该化学势下必须有的$T$。



关于这个方程，存在两种情况：
- 情况一：若$\mathcal{z}<1$，则在热力学极限下，显然$\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}=0$。而$V / N\sim\mathcal{O}(1)$不会消失。则有
$$1= \frac{1}{n^{3}\lambda^{3}}g_{3 / 2}(\mathcal{z})$$
- 情况二：若$\mathcal{z}=1$，则即使在热力学极限下，也不能忽略$\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$。则我们不能作上面那种近似，必须保留完整方程：
$$1= \frac{V / N}{\lambda^{3}}g_{3 / 2}(\mathcal{z})+ \frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$$
这两种情况可由下图看出：
<div style="text-align:center">
<img src="5fc3e20e44f8e5cf90913bd31b0c428c.jpg" width="300">
</div>
若$n,T$由某种取值，使得$\frac{1}{n\lambda^{3}}g_{3 / 2}(1)\geq1$，那么因为$1-\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$在热力学极限$N\rightarrow \infty$下在$\mathcal{z}\neq 1$的位置会被压地非常靠近$1$，我们得到情况一。

若$\frac{1}{n\lambda^{3}}g_{3 / 2 }(1)<1$，则会得到一个非零的$\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$的解。当$T$越来越低，$\lambda^{3}$越来越大，或者$n$越来越大，$\frac{1}{n\lambda^{3}}g_{3 / 2}(\mathcal{z})$就会被压地越来越低。相应地，$\frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$就会越来越大。当它足够低时，我们就认为几乎所有的粒子都被压入基态，得到BEC。

显然上述两种情况的临界温度，或者临界密度由下式决定：
$$\frac{1}{n\lambda^{3}}g_{3 / 2}(1)=1$$
## Remark
BEC是一个量子力学效应。它的本质是能级离散，以至于在某些温度，或者密度下，基态的occupation number比激发态高特别多。

# 3. $g_{n}(\mathcal{z})$的性质

>[!Note] Proposition 1
>$$\frac{\partial}{\partial\mathcal{z}}g_{n}(\mathcal{z})= \frac{1}{\mathcal{z}}g_{n-1}(\mathcal{z})$$
## Proof.
$$\begin{align}
\frac{\partial}{\partial z} g_{n}(\mathcal{z}) & = \frac{\partial}{\partial\mathcal{z}} \frac{1}{\Gamma(n)} \int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^{x}-1} \\
 & = \frac{1}{\Gamma(n)}\int dx x^{n-1} \frac{\mathcal{z}^{-2}e^{x}}{(\mathcal{z}^{-1}e^x-1)^{2}} \\
 & = \frac{1}{\Gamma(n)}\left(\left[-\mathcal{z}^{-1} \frac{1}{\mathcal{z}^{-1}e^x-1}x^{n-1}\right]_{0}^{\infty}+ (n-1)\int dx x^{n-2}\mathcal{z}^{-1} \frac{1}{\mathcal{z}^{-1}e^x-1}\right) \\
 & = \frac{n-1}{\Gamma(n) }\int dx x^{n-2} \mathcal{z}^{-1} \frac{1}{\mathcal{z}^{-1}e^x-1} \\
 & = \frac{1}{\Gamma(n-1)} \frac{1}{\mathcal{z}}\int dx x^{n-2} \frac{1}{\mathcal{z}^{-1}e^x-1} \\
 & = \frac{1}{\mathcal{z}} g_{n-1}(\mathcal{z})
\end{align}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>$$\lim_{ \mathcal{z} \to 0 } |g_{n}(\mathcal{z})-\mathcal{z}|=0$$
## Handwave.
我们知道：
$$g_{n}(\mathcal{z})= \frac{1}{\Gamma(n)} \int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^x-1}$$
而当$\mathcal{z}\rightarrow 0$时，integrand大概为：
$$\frac{x^{n-1}}{\mathcal{z}^{-1}e^x-1}\sim  \frac{x^{n-1}}{\mathcal{z}^{-1}e^x}=x^{n-1}\mathcal{z}e^x$$
这玩意积分正是$\mathcal{z} \Gamma(n)$。

>[!Note] Proposition 3
>$$g_{n}(\mathcal{z})=\sum_{k=1}^{\infty} \frac{\mathcal{z}^k}{k^n}$$
## Proof.
注意到：
$$\begin{align}
\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^x-1} & = \int dx x^{n-1} \frac{e^{-x}}{\mathcal{z}^{-1}-e^{-x}} \\
 & = \int dx x^{n-1} e^{-x} \mathcal{z} \frac{1}{1-\mathcal{z}e^{-x}} \\
 & = \int dx x^{n-1}e^{-x}\mathcal{z} \sum_{k=0}^{\infty}\mathcal{z}^ke^{-kx} \\
 & = \int dx x^{n-1} \sum_{k=1}^{\infty}\mathcal{z}^ke^{-kx} \\
 & = \sum_{k} \mathcal{z}^k \int dx x^{n-1}e^{-kx} \\
 & = \sum_{k} \mathcal{z}^k\left(  \frac{1}{k} \right)^n \Gamma(n)
\end{align}$$
所以容易得到：
$$g_{n}(\mathcal{z})= \frac{1}{\Gamma(n)}\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^x-1}=\sum_{k} \frac{\mathcal{z}^k}{k^n} $$
>[!Right]
>$\blacksquare$
# 4. Phase transition

我们计算理想玻色气体的热容。

>[!Note] Proposition 1
>The heat capacity of an ideal Bose gas below the BEC critical temperature is:
$$C_{V}=\frac{15}{4}\left(  \frac{\sqrt{ 2\pi mk }}{h} \right)^{3}V kg_{5 /2}(1)T^{3/2}$$
## Proof.
考虑内能：
$$U=\sum_{\vec{k}}\langle n_{\vec{k}}\rangle\epsilon_{\vec{k}}$$
将求和用积分估计，并换成对能量的测度。容易得到：
$$U=4\sqrt{ 2 }V\pi \frac{m^{3/2}}{h^{3}}\int_{0}^{\infty} d\epsilon\epsilon^{1/2} \frac{\epsilon}{\mathcal{z}^{-1}e^{\beta\epsilon}-1}=\frac{1}{\lambda^{3}}VkT \frac{3}{2} \frac{1}{\Gamma\left( \frac{5}{2} \right)}\int dx \frac{x^{3/2}}{\mathcal{z}^{-1}e^x-1}$$

由于$\frac{1}{n\lambda^{3}}g_{3 /2}(\mathcal{z})$被压地比较低，我们得到$\mathcal{z}=1$。带入后容易解得：
$$U= \frac{3}{2}kT \frac{V}{\lambda^{3}}g_{5 /2}(1)$$
容易算出：
$$C_{V}=\frac{15}{4}\left(  \frac{\sqrt{ 2\pi mk }}{h} \right)^{3}V kg_{5 /2}(1)T^{3/2}$$
>[!Right]
>$\blacksquare$

>[!Note] Proposition 2
>The heat capacity of an ideal Bose gas above the BEC critical temperature is:
>$$C_{V}= Nk\left(  \frac{15}{4} \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}- \frac{9}{4} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})} \right)$$
## Proof.
由于$\frac{1}{n\lambda^{3}}g_{3 /2}(\mathcal{z})$比较高，具体的fugacity由下式给出：
$$N= \frac{V}{\lambda^{3}}g_{3 /2}(\mathcal{z})\tag{*}$$
我们还是有
$$U=4\sqrt{ 2 }V\pi \frac{m^{3/2}}{h^{3}}\int_{0}^{\infty} d\epsilon\epsilon^{1/2} \frac{\epsilon}{\mathcal{z}^{-1}e^{\beta\epsilon}-1}=\frac{1}{\lambda^{3}}VkT \frac{3}{2} \frac{1}{\Gamma\left( \frac{5}{2} \right)}\int dx \frac{x^{3/2}}{\mathcal{z}^{-1}e^x-1}$$
只不过$\mathcal{z}$不能取$1$了。从$(*)$解出$\lambda^{3}$代入上式右手边得到：
$$U= \frac{3}{2}NkT \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}$$
为了计算热容，我们先提出如下命题，方便我们计算导数：

>[!Note] lemma 1
>$$\frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T} = - \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})}$$
### Proof of lemma
$$\begin{align}
 & N = \frac{V}{\lambda^{3}} g_{3 /2}(\mathcal{z}) \\
\implies & \frac{\partial}{\partial T}N = \frac{\partial}{\partial T}\left( \frac{V}{\lambda^{3}}g_{3 /2}(\mathcal{z}) \right) \\
\implies & 0= \frac{\partial}{\partial T}\left(  \frac{1}{\lambda^{3}} \right)g_{3 /2}(\mathcal{z})+ \frac{1}{\lambda^{3}} \frac{\partial\mathcal{z}}{\partial T} \frac{\partial}{\partial\mathcal{z}}g_{3 /2}(\mathcal{z}) \\
\implies & \frac{3}{\lambda} \frac{\partial \lambda}{\partial T}g_{ 3 /2}(\mathcal{z})= \frac{\partial\mathcal{z}}{\partial T} \frac{1}{\mathcal{z}}g_{1 /2}(\mathcal{z}) \\
\implies & 3 \frac{\partial}{\partial T}\ln \lambda g_{3 /2 }(\mathcal{z})= \frac{\partial\mathcal{z}}{\partial T} \frac{1}{\mathcal{z}} g_{1 /2}(\mathcal{z}) \\
\implies & \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T} = - \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})}
\end{align}$$

那么接下来：
$$\begin{align}
C_{V} & = \left(  \frac{\partial U}{\partial T} \right)_{N,V} \\
 & = \frac{3}{2}Nk \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}+ \frac{3}{2}NkT \frac{\partial}{\partial T} \left(  \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}\mathcal(z)} \right)
\end{align}$$
我们只需要计算
$$\begin{align}
 & \frac{\partial}{\partial T}g_{5 /2}(\mathcal{z})  = \frac{\partial\mathcal{z}}{\partial T} \frac{\partial }{\partial\mathcal{z}}g_{5 /2}(\mathcal{z})= \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T}g_{3 /2}(\mathcal{z})= - \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}^{2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})} \\
 &  \frac{\partial}{\partial T}g_{3 /2}(\mathcal{z})= \frac{1}{\mathcal{z}} \frac{\partial\mathcal{z}}{\partial T}g_{1 /2}(\mathcal{z})= - \frac{3}{2} \frac{1}{T}g_{3 /2}(\mathcal{z})
\end{align}$$
因此
$$\begin{align}
\frac{3}{2}NkT \frac{\partial}{\partial T}\left(  \frac{g_{ 5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})} \right) & = \frac{3}{2}NkT \frac{- \frac{3}{2} \frac{1}{T} \frac{g_{3 /2}^{3}(\mathcal{z})g_{1 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})}+ \frac{3}{2} \frac{1}{T}g_{3 /2}(\mathcal{z})g_{5 /2}(\mathcal{z})}{g^{2}_{3 /2}(\mathcal{z})} \\
 & = \frac{9}{4}Nk\left(  \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}- \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2 }( \mathcal{z})} \right)
\end{align}$$
所以：
$$C_{V}= Nk\left(  \frac{15}{4} \frac{g_{5 /2}(\mathcal{z})}{g_{3 /2}(\mathcal{z})}- \frac{9}{4} \frac{g_{3 /2}(\mathcal{z})}{g_{1 /2}(\mathcal{z})} \right)$$
>[!Right]
>$\blacksquare$

那么容易得到热容的temperature dependence：
<div style="text-align:center">
<img src="Pasted image 20251116210714.png" width="500">
</div>
这里我拿了$1mol$的$1m^{3}$的$He$ 4进行计算。

Code：
```mathematica
Num = 10^23;
V = 1;
k = 1.380649*10^-23;
h = 6.6262*10^-34;
m = 6.64648*10^-27;

(* Thermal wavelength *)
\[Lambda][T_] := h/Sqrt[2 Pi m k T];

(* Fugacity *)
z[\[Mu]_, T_] := Exp[\[Mu]/(k T)];

(* Number of excited particles *)
excitednum[\[Mu]_, T_] := V/\[Lambda][T]^3 * PolyLog[3/2, z[\[Mu], T]];

(* Solve for chemical potential \[Mu] above Tc *)
muabove[T_] := \[Mu] /. First[Solve[excitednum[\[Mu], T] == Num, \[Mu]]];

(* Heat capacities *)
Cabove[T_] := Module[{zmu},
  zmu = z[muabove[T], T];
  Num k (15/4*PolyLog[5/2, zmu]/(PolyLog[3/2, zmu]) 
        - 9/4*(PolyLog[3/2, zmu])/PolyLog[1/2, zmu])
];

Cbelow[T_] := 15/4*(Sqrt[2 Pi m k]/h)^3 * V * k * PolyLog[5/2, 1] * T^(3/2);

Tc = ((Num/V)/PolyLog[3/2, 1])^(2/3) * h^2/(2 Pi m k);

hcapacity[T_] := Piecewise[{
  {Cabove[T], T >= Tc},
  {Cbelow[T], 0 <= T <= Tc}
}];

Plot[hcapacity[T]/(Num k), {T, 0.5*Tc, 1.5*Tc},AxesLabel->{"T*constant","C/Nk"}]

```

我们发现热容导数不连续。这是一个second order phase transition。

# 5. No BEC in $d<3$

在三维以下不可能发生BEC。这是因为critical temperature的条件永远达不到。例如说我们考虑$d=2$。

考虑激发态占据数：
$$\sum_{\vec{k}}\langle n_{\vec{k}}\rangle$$
将求和化为积分：
$$\sum_{\vec{k}}\sim \int d^{2}k=\int \pi kdk\sim \int d\epsilon$$
$\langle \epsilon_{\vec{k}}\rangle$代入，则激发态占据数为：
$$\sim \int d\epsilon \frac{1}{\mathcal{z}^{-1}e^{\beta\epsilon}-1}\sim \int dx \frac{1}{\mathcal{z}^{-1}e^x-1}$$
我们发现，这这玩意大概是：
$$\int dx \frac{1}{\mathcal{z}^{-1}e^x-1}\sim g_{1}(\mathcal{z})$$
我们故技重施，考虑[[用gamma函数表示Riemann zeta函数#^45f9a5|用gamma函数表示Riemann zeta函数 idea 1]]，将它化为级数后发现它是：
$$g_{1}(\mathcal{z})= \sum_{k=1}^{\infty} \frac{\mathcal{z}^k}{k}$$
画图可知，这玩意和热力学极限下的$1- \frac{1}{N} \frac{\mathcal{z}}{1-\mathcal{z}}$交点永远在$(r,1),\text{ for some }r<1$。你可能会说，这不一定啊，因为$g_{1}(\mathcal{z})$前面不应该还有一些类似$\frac{V/ N}{\lambda^{3}}$的系数吗？但是因为$g_{1}(\mathcal{z})$一定会在$1$处爆掉，无论前面系数是什么交点都是在一个比$1$小一点的位置。如下图所示，我画了几个前面系数不同的$g_{1}(\mathcal{z})$。

<div style="text-align:center">
<img src="Pasted image 20251116215527.png" width="400">
</div>

因为除了$\mathcal{z}=1$的位置基态占据数在热力学极限下都是零，那么永远不可能有非零的基态占据数。
