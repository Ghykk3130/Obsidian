我们先计算：
$$\begin{align}
\bra{0} \phi(x)\phi(y)\ket{0}  & = \bra{0}  \int \frac{d^{3}pd^{3}q}{(2\pi)^{6}} \frac{1}{2\sqrt{ E_{\mathbf{p}}E_{\mathbf{q}} }} a^{}_{\mathbf{p}}e^{-ip\cdot x}a^{\dagger}_{\mathbf{q}}e^{iq\cdot y}\ket{0}  \\
 & = \int \frac{d^{3}pd^{3}q }{(2\pi)^{3} } \frac{1}{2\sqrt{ E_{\mathbf{p}}E_{\mathbf{q}} }}\delta^{3}(\mathbf{p}-\mathbf{q}) e^{-ip\cdot x +iq\cdot y}  \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{-iE_{\mathbf{p}}(x^{0}-y^{0})}e^{i \mathbf{p}\cdot(\mathbf{x}-\mathbf{y})} \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{-ip\cdot(x-y)}
\end{align}$$
将它定义为Wightman函数：
$$\begin{align}
\boxed{D_{W}(x-y)=\bra{0} \phi(x)\phi(y)\ket{0} = \int_{\mathbb{R}^{3}} \frac{d^{3}p}{(2\pi)^{3}} \frac{e^{-ip\cdot(x-y)}}{2E_{\mathbf{p}}}}
\end{align}$$
显然，由于测度$\frac{d^{3}p}{E_{\mathbf{p}}}$是Lorentz不变的，并且$e^{-ip\cdot(x-y)}$也是Lorentz不变的，Wightman函数就是Lorentz不变的。

>[!Quote]
>如何理解这里的Lorentz不变性？考虑$p\in \mathbb{R}^{1,3}$。作Lorentz变换变为$p^{'}$。那么这两点上的测度是不变的：
>$$\frac{d^{3}p}{E_{\mathbf{p}}}= \frac{d^{3}p^{'}}{E_{\mathbf{p}}^{'}}$$
>并且这两点上的被积函数值也是相等的：
>$$e^{-ip^{'}\cdot(x^{'}-y^{'})}=e^{-ip\cdot(x-y)}$$
>所以将测度乘以被积函数在相应Lorentz变换连接的区域内积分就是一样的。

我们定义时序乘积算符：
$$\begin{align}
T[\phi(x),\phi(y)]= \theta(x^{0}-y^{0})\phi(x)\phi(y) +\theta(y^{0}-x^{0})\phi(y)\phi(x)
\end{align}$$
它的作用就是看$\phi(x),\phi(y)$哪个时间大，并且把时间大的放在前面。

那么我们可以计算：
$$\begin{align}
\bra{0} T[\phi(x),\phi(y)]\ket{0}  & = \theta(x^{0}-y^{0})\bra{0} \phi(x)\phi(y)\ket{0} +\theta(y^{0}-x^{0})\bra{0} \phi(y)\phi(x)\ket{0} \\
 & = \theta(x^{0}-y^{0})D_{W}(x-y)+\theta(y^{0}-x^{0})D_{W}(y-x) 
\end{align}$$
为了进一步化简表达式，我们先证明如下引理：

>[!Success] Lemma 1
>$$\begin{align}
\lim_{ \epsilon \to 0^{+} } \int_{-\infty}^{\infty}dp^{0} \frac{e^{-ip^{0}\tau}}{[p^{0}-(E_{\mathbf{p}}-i\epsilon)][p^{0}+(E_{\mathbf{p}}-i\epsilon)]}= - \frac{\pi i}{E_{\mathbf{p}}}[\theta(\tau)e^{-iE_{\mathbf{p}}\tau}+\theta(-\tau)e^{iE_{\mathbf{p}}\tau}]
\end{align}$$
## Proof.

显然可以分情况讨论。假设$\tau>0$。则显然应该取如下contour积分：![[Pasted image 20260929131846.png|centering|300]]
令$\delta p^{0}=p^{0}-(E_{\mathbf{p}}-i\epsilon)$。我们通过泰勒展开来计算留数：
$$\begin{align}
\frac{e^{-ip_{0}\tau}}{[p^{0}-(E_{\mathbf{p}}-i\epsilon)][p^{0}+(E_{\mathbf{p}}-i\epsilon)]} & = \frac{e^{-i(\delta p^{0}+E_{\mathbf{p}}-i\epsilon)\tau}}{\delta p^{0}(\delta p^{0}+2(E_{\mathbf{p}}-i\epsilon)) } \\
 & \approx \frac{e^{-i(E_{\mathbf{p}}-i\epsilon)\tau}(1-i\delta p^{0}\tau)}{2(E_{\mathbf{p}}-i\epsilon)\delta p^{0}}
\end{align}$$
所以显然留数为$\frac{e^{-i(E_{\mathbf{p}}-i\epsilon )\tau}}{(E_{\mathbf{p}}-i\epsilon)}$。所以积分得到：
$$\begin{align}
2\pi i \cdot \frac{e^{-i(E_{\mathbf{p}}-i\epsilon)\tau}}{2(E_{\mathbf{p}}-i\epsilon)} & = \frac{\pi i}{E_{\mathbf{p}}-i\epsilon}e^{-i(E_{\mathbf{p}}-i\epsilon)\tau}
\end{align}$$
令$\epsilon\rightarrow 0^{+}$即可。$\tau<0$的情况同理。
>[!Right]
>$\blacksquare$

那么，我们有：
$$\begin{align}
\bra{0} T[\phi(x),\phi(y)]\ket{0}  & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}( \theta(x^{0}-y^{0})e^{-ip\cdot(x-y)}+\theta(y^{0}-x^{0})e^{-ip\cdot(y-x)}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}(\theta(x^{0}-y^{0})e^{-iE_{\mathbf{p}}(x^{0}-y^{0})}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}+\theta(y^{0}-x^{0})e^{-iE_{\mathbf{p}}(y^{0}-x^{0})}e^{i\mathbf{p}\cdot(\mathbf{y}-\mathbf{x})}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2E_{\mathbf{p}}}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}(\theta(x^{0}-y^{0})e^{-iE_{\mathbf{p}}(x^{0}-y^{0})}+\theta(y^{0}-x^{0})e^{-iE_{\mathbf{p}}(y^{0}-y^{0})}) \\
 & = \int \frac{d^{3}p}{(2\pi)^{3}} \frac{1}{2} \lim_{ \epsilon \to 0^{+} } \int dp^{0} \left(  -\frac{1}{\pi i} \right) \frac{e^{-ip^{0}(x^{0}-y^{0})}e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}}{(p^{0})^{2}-E_{\mathbf{P}}^{2}+2i\epsilon E_{\mathbf{p}}} \\
 & =\lim_{ \epsilon \to 0^{+} }  \int \frac{d^{4}p}{(2\pi)^{4}} i \frac{e^{-ip\cdot(x-y)}}{(p^{0} )^{2}-E_{\mathbf{p}}^{2}+i\epsilon} \\
 & = \lim_{ \epsilon \to 0^{+} } \int \frac{d^{4}p}{(2\pi)^{4}}  \frac{i}{p^{2}-m^{2}+i\epsilon} e^{-ip\cdot(x-y)}
\end{align}$$
其中第二行为了提取出$e^{i\mathbf{p}\cdot(\mathbf{x}-\mathbf{y})}$，我将第二项中$\mathbf{p}$作了替换$\mathbf{p}\leadsto -\mathbf{p}$。第四行中分母的$2i\epsilon E_{\mathbf{p}}$被重写为$i\epsilon$。并且高阶$\epsilon^{2}$被省去。

为了方便起见，我们经常省略积分后在积分外面取$\epsilon\rightarrow 0^{+}$的极限符号。每当我们在被积函数中写$\epsilon$，背后的overtone就是积分后取$\epsilon\rightarrow 0^{+}$的极限。这称为$i\epsilon$ prescription。于是我们可以定义Feynman传播子：
$$\begin{align}
\boxed{D_{F}(x-y)=\bra{0} T[\phi(x),\phi(y)]\ket{0} = \int \frac{d^{4}p}{(2\pi)^{4} } \frac{i}{p^{2}-m^{2}+i\epsilon}e^{-ip\cdot(x-y)}}
\end{align}$$
注意，这里的$p$是无需符合质壳条件的。四个分量全部都是自由的，可以取$(-\infty,\infty)$。



