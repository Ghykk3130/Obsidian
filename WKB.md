# 1. 线性解

对于任意一个线性势能$V(x)=kx,k>0$，我们可以化简Schrodinger方程为Airy方程。首先写出Schrodinger方程：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+kx\psi=E\psi \implies \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(-kx+E)\psi=0
\end{align}$$
令$y = ax$，则：
$$\begin{align}
\frac{\hbar^{2}}{2m}a^{2} \frac{d^{2}}{dy^{2}}\psi+\left( -\frac{k}{a}y+E \right)\psi=0
\end{align}$$
Set $\frac{\hbar^{2}}{2m}a^{2}=1, \frac{k}{a}=b$，则：
$$\begin{align}
 & \frac{d^{2}}{dy^{2}}\psi+(-by+E)\psi=0 \\
 \implies &  \frac{d^{2}}{b^{2/3}dy^{2}}\psi+\left( -b^{1/3}y+ \frac{E}{b^{2/3}} \right)\psi=0
\end{align}$$
Set $\xi= b^{1/3}y- \frac{E}{b^{2/3}}$，则：
$$\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0$$
>[!Note] Definition 1
>Define the Airy equation: $\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0$
>Call the particular solutions to the Airy equation Airy functions. Write $Ai(\xi),Bi(\xi)$. 

# 2. WKB解

考虑一个任意的势阱$V(x)$，我们想估计allowed region和forbidden region的波函数。定义classical turning point为$x_{0}\text{ s.t. }V(x_{0})=E$。也就是allowed region和forbidden region相接的点。

我们有：
$$- \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(V-E)\psi=0\implies \frac{d^{2}}{dx^{2}}\psi+ \frac{2m(E-V)}{\hbar^{2}}\psi=0$$

Set $k(x):= \sqrt{ \frac{2m(E-V)}{\hbar^{2}} }$，则Schrodinger方程可以写为：
$$\frac{d^{2}}{dx^{2}}\psi+k(x)^{2}\psi=0$$
在离classical turning point较远的区域，我们猜解$\psi(x)=\exp\left( \frac{i}{\hbar}W(x) \right)$。则$W(x)$需满足：
$$\frac{i}{\hbar} \frac{d^{2}}{dx^{2}}W- \frac{1}{\hbar^{2}}\left(  \frac{d}{dx}W \right)^{2}+k^{2}=0 \tag{*}$$
我们宣称，在离classical turning point较远的地方，存在：
$$\hbar \left|\frac{d^{2}}{dx^{2}}W\right| \ll \left| \frac{d}{dx}W \right|^{2}$$
### Remark
关于这个近似条件的justification。我们首先有方程：
$$\begin{align}
 & \frac{i}{\hbar} \frac{d^{2}}{dx^{2}}W- \frac{1}{\hbar^{2}}\left( \frac{d}{dx}W \right)^{2}+ \frac{2m(E-V)}{\hbar^{2}}=0 \\
\implies & \hbar \frac{d^{2}}{dx^{2}}W- \left( \frac{d}{dx}W \right) ^{2}+2m(E-V)=0
\end{align}$$
在classical limit $\hbar\rightarrow {0}$下，我们可以忽略$\hbar \frac{d^{2}}{dx^{2}}W$。



则我们可以解得一个初步的近似：
$$W= \pm \int^xdx^{'}\hbar k(x^{'}) $$
其中，$\int^x$的意思是常数待定的定积分。将该解代入$(*)$得到：
$$\begin{align}
 & \pm ik^{'}(x)- \frac{1}{\hbar^{2}}\left(  \frac{d}{dx}W \right)^{2}+k^{2}=0 \\
\implies & W =  \frac{i\hbar}{2}\ln k(x)\pm \int^x\hbar k(x^{'})dx^{'}
\end{align}$$
于是得到进一步的近似：
$$\psi_{\pm}(x)= \frac{1}{\sqrt{ k(x) }}\exp\left(  \pm i\int^xdx^{'}k(x^{'}) \right)$$
不妨再乘上常数，写为：
$$\psi_{\pm}(x)= \frac{C_{\pm}}{\sqrt{ k(x) }}\exp\left( \pm i \int^xdx^{'}k(x^{'}) \right) \tag{**}$$
可以将$\exp$内定积分的常数吸收到$C_{\pm}$中。

**Classical turning point邻域：**

我们线性近classical turning point邻域的势能：
$$V(x)\approx V(x_{0})+V^{'}(x_{0})(x-x_{0})$$
于是在该区域内，有Schrodinger方程：
$$\begin{align}
 & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+(V(x_{0})+V^{'}(x_{0})(x-x_{0})-E)\psi=0 \\
\implies & - \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi + V^{'}(x_{0})(x-x_{0})\psi=0
\end{align}$$
容易看出，这是一个Airy方程：
$$\frac{d^{2}}{d\xi^{2}}\psi-\xi \psi=0,\text{ where }\xi= \left(  -\frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x_{0}-x)$$
我们可以解得：
$$\psi(x)=AAi(\xi)+BBi(\xi)$$

# 3. WKB解与线性解的匹配

## 3.1 Big picture

Idea:
- 在离classical turning point较远位置，我们用WKB解近似波函数。
- 在classical turning point邻域，我们用线性解近似波函数。考虑classical turning point的Taylor展开，这点便是自然。

实际上，我们不关心classical turning point邻域内的线性解。因为：
- classical turning point邻域和较远区域没有明确的界限。所以不可能构造分段函数，使得在较远区域内为WKB解，在邻域内为线性解。
- 因此我们就一般认为WKB解一直直接延伸到classical turning point。尽管这样会造成连续性的问题。但只要不研究classical turning point邻域，WKB解就足够描述波函数了。

尽管我们一般忽略线性解，但是我们必须模糊地定义出邻域到较远区域的过渡区域，或者说从线性解到WKB解的过渡区域。我们认为：
- 这个模糊的区域对于线性解来说已经很远，所以线性解的behavior大概是在$\pm \infty$渐进的behavior。其中靠近forbidden region的模糊区域对应着$+\infty$的渐进，靠近allowed region的模糊区域对应着$-\infty$的渐进。
- 在这个模糊区域，合适的WKB解必须和这个区域内的线性解相“匹配”。 

下面来探讨“匹配”是什么意思。

## 3.2 从classical turning point过渡到forbidden region

不妨考虑从邻域过渡到forbidden region的区域。不妨设从左往右会从allowed region过渡到forbidden region。

在classical turning point邻域，我们取$V(x)\approx V(x_{0})+V^{'}(x_{0})(x-x_{0})$。容易得到Schrodinger方程：
$$- \frac{\hbar^{2}}{2m} \frac{d^{2}}{dx^{2}}\psi+V^{'}(x_{0})(x-x_{0})\psi=0\tag{1}$$
于是两个WKB解分别为：
$$\psi_{\pm}= \frac{1}{(V^{'}(x-x_{0}))^{1/4}}\exp\left( \mp \frac{1}{\hbar} \sqrt{2mV^{'}(x-x_{0}) } \frac{2}{3}(x-x_{0})^{3/2} \right)$$
此处前面还应该有multiplicative constant。我们吸收了一些常数进这个multiplicative constant，并把它略去了。

>[!Note] Caveat
>我们最好使得所有的argument都是实数。在计算根号的时候，最好保证根号里的东西是正数。若是负数，就提出$i$到前面去。不然会很乱。

因为在classical turning point往forbidden region走，$V$一定至少在一段距离内是单调递增函数。（不然这就不是一个classical turning point了。）所以应当取$\psi_{+}$。

在过渡区域内，线性解和WKB解是一样的。我们知道在过渡区域，线性解的渐进表现为：
$$\begin{align}
 & Ai(z) \sim \frac{1}{2\sqrt{ \pi } }z^{-1/4}\exp\left( - \frac{2}{3}z^{3/2} \right) ,\ z\rightarrow \infty\\
 & Bi(z) \sim \frac{1}{\sqrt{ \pi }}z^{-1/4}\exp\left(  \frac{2}{3}z^{3/2} \right),\ z\rightarrow \infty
\end{align}$$
我们把$(1)$化成Airy equation的形式：
$$\frac{d^{2}}{\left( \frac{2mV^{'}}{\hbar^{2}} \right)^{2/3}d(x-x_{0})^{2}}\psi- \left( \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x-x_{0})\psi=0$$
所以线性解为：
$$Ai(\xi)\text{ and }Bi(\xi),\ \xi=\left(  \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x-x_{0})$$
显然只有$Ai$和WKB解是一样的。


接下来，若把过渡区域内的WKB解的势能“写回去”，写成精确的势能，则解可以延伸到forbidden region。即：
$$V^{'}(x-x_{0})=V-E$$
所以两个WKB解“写回去”就是：
$$\begin{align}
\psi_{\pm}  & =\frac{1}{ (V-E)^{1/4} }\exp\left( \mp \frac{1}{\hbar}\int dx^{'}\sqrt{ 2m(V-E) }  \right)
\end{align}$$
前面还应乘以某个常数。

我们应当取的WKB解为：
$$\psi(x)= \frac{1}{ (V-E)^{1/4}}\exp\left( - \frac{1}{\hbar}\int^xdx^{'}\sqrt{ 2m(V-E) } \right)$$

关于在过渡区域得到线性解和WKB解的方法，我们作如下总结：

>[!Note] Idea
>在过渡区域获得线性解的方式：
>- 线性近似势能$V(x)\approx V(x_{0})+V^{'}(x_{0})(x-x_{0})$
>- 代入Schrodinger方程，并变换为Airy equation形式。
>- 匹配对应的Airy function的变量$\xi$，代入Airy function渐进解即可。
>
>在过渡区域获得WKB解的方式：
>- 线性近似势能$V(x)\approx V(x_{0})+V^{'}(x_{0})(x-x_{0})$
>- 代入Schrodinger方程，并匹配$k(x)$
>- 将$k$代入WKB解，并算一下积分即可。

^dfcb57

## 3.3 从classical turning point过渡到allowed region

刚刚我们已经得出，classical turning point邻域内的线性解为$Ai$。在从邻域过渡到allowed region的区域内，线性解有如下渐进behavior：
$$Ai(z)=\frac{1}{\sqrt{ \pi }}|z|^{-1/4}\cos\left( \frac{2}{3}|z|^{3/2}- \frac{\pi}{4} \right),\ z\rightarrow-\infty$$
容易解得过渡区域内线性解：
$$Ai(\xi),\ \text{where }\xi=\left(  \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x-x_{0})$$
我们可以用[[WKB#^dfcb57|Idea]]获得过渡区域内的两个WKB解。通过过渡区域两个WKB解来和$Ai(\xi)$匹配，可以得到allowed region中的解。结果应当是两个解的线性组合。组合系数的相对比例可以算出来。这里就不仅算了。下面explicit地写出allowed region中的WKB解。

在过渡区域内，cos的argument为：
$$\begin{align}
\frac{2}{3}\left( \frac{2mV^{'}}{\hbar^{2}} \right)^{1/2}(x_{0}-x)^{3/2}- \frac{\pi}{4}
\end{align}$$
注意到：
$$k = \sqrt{ \frac{2m(E-V)}{\hbar^{2}} }$$
所以近似下来，容易算得：
$$\int^xdx^{'}k(x^{'})= \frac{2}{3}\left(  \frac{2mV^{'}}{\hbar^{2}} \right)^{1/2}(x_{0}-x)^{3/2}$$
所以将过渡区域内的解“写回去”可以得到：

$$\psi(x)= \frac{2}{(V-E)^{1/4}}\cos\left(  \frac{1}{\hbar}\int^xdx^{'}\sqrt{ 2m(E-V) }- \frac{\pi}{4} \right)$$

### Remark

**为什么前面有个系数2？**

这是因为，在classical turning point邻域，线性解为$Ai(\xi),\ \xi= \left( \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x-x_{0})$。这个解在过渡到forbidden region时为$\frac{1}{2\sqrt{ \pi }}\xi^{-1/4}\exp\left( - \frac{2}{3}\xi^{3/2} \right)$。我们发现WKB的一个解的近似和这个函数一致，所以就将$\xi$全部写为$k$的函数拓展到整个forbidden region的WKB解。其中，我们吸收$2\sqrt{ \pi }$到常数，将解写为：
$$\psi(x)= \frac{1}{ (V-E)^{1/4}}\exp\left( - \frac{1}{\hbar}\int^xdx^{'}\sqrt{ 2m(V-E) } \right)$$

然后，线性解$Ai(\xi)$过渡到allowed region时为$Ai(\xi)=\frac{1}{\sqrt{ \pi }}|\xi|^{-1/4}\cos\left( \frac{2}{3}|\xi|^{3/2}- \frac{\pi}{4} \right)$。我们发现两个WKB解的近似的线性组合和这个函数一致。所以将$\xi$全部写成$k$的函数拓展到整个allowed region的WKB解。其中，为了保持和forbidden region的一致，我们还是吸收$2\sqrt{ \pi }$到常数。但这时前面就会多出系数2。


我们总结一下匹配的想法：

>[!Note] Idea
>匹配的逻辑为：
>- 在forbidden区域的过渡区域，线性近似势能。解得WKB解。取衰减的WKB解。这保证了局部上WKB解是衰减的。（不是全局。因为线性近似的势能是局部的。）我们要求WKB解和线性解的渐进一样。发现只有衰减的WKB解符合，即$Ai$。
>- 将forbidden区域的过渡区域内的WKB解中的线性近似写回去，写为精确的势能。这个解就可以一直延伸到forbidden区域中去。
>- 接下来在整个classical turning point邻域，波函数都是势能线性近似后算出的$Ai$。
>- 在allowed region的过渡区域，解仍然是势能线性近似后的$Ai$。这个解和过渡区域内的WKB解完全一样。所以我们知道过渡区域的WKB解也是这个。（实际上应该是两个WKB解的线性组合。）将WKB解写回去，写为精确的势能。这个解就可以一直延伸到allowed区域中去。

# 4. 

考虑一个这样的势阱：

<div style="text-align:center">
<img src="Pasted image 20251029200725.png">
</div>

考虑$I$中WKB解：
$$\psi_{\pm}= \frac{1}{\left( - \frac{2mV^{'}}{\hbar^{2}}(x_{0}-x) \right)^{1/4}}\exp\left( \mp \sqrt{ - \frac{2mV^{'}}{\hbar^{2}} }(x_{0}-x)^{3/2} \right)$$
其中我吸收了一些东西到常数里面，并略去常数不写。显然应当取$\psi_{+}$。于是“写回去”得到$I$区域中的WKB解：
$$\psi(x)=\frac{1}{(V-E)^{1/4}}\exp\left( \frac{1}{\hbar}\int^xdx^{'}\sqrt{ 2m(V-E) } \right)$$
将积分顺序稍微调换一下，随便取个积分常数，可以写为：
$$\psi(x)= \frac{1}{(V-E)^{1/4}}\exp\left( - \frac{1}{\hbar}\int_{x_{1}}^x dx^{'}\sqrt{ 2m(V-E) }\right)$$
其中，我吸收了一些东西进常数项，并略去常数项不写。

考虑$I$到$II$过渡区域中的线性解：
$$Ai(\xi),\text{ where }\xi=\left( - \frac{2mV^{'}}{\hbar^{2}} \right)^{1/3}(x_{0}-x)$$
考虑在$II$区域线性解的渐进。则有：
$$\begin{align}
Ai(\xi) \sim \frac{1}{\sqrt{ \pi }}|\xi|^{-1/4}\cos\left( \frac{2}{3}|\xi |^{3/2}-\frac{\pi}{4} \right)
\end{align}$$
将它“写回去”，得到$II$中WKB解：
$$\psi(x)= \frac{2}{(E-V)^{1/4}}\cos\left(  \frac{1}{\hbar}\int_{x_{1}}^xdx^{'}\sqrt{ 2m(E-V) }- \frac{\pi}{4} \right)$$

而从$II$到$III$则完全和3.一样。所以得到$II$中WKB解为：
$$\begin{align}
\psi(x) & = \frac{2}{(E-V)^{1/4}}\cos\left(  -\frac{1}{\hbar}\int_{x_{2}}^{x}\sqrt{ 2m(E-V) }- \frac{\pi}{4} \right) \\
 & = \frac{2}{(E-V)^{1/4}}\cos\left(  \frac{1}{\hbar}\int_{x_{2}}^{x_{}}\sqrt{ 2m(E-V) }+ \frac{\pi}{4} \right) \\
 & = \frac{2}{(E-V)^{1/4}}\cos\left( - \frac{1}{\hbar}\int_{x}^{x_{2}}\sqrt{ 2m(E-V) } + \frac{\pi}{4}\right) 
\end{align}$$
$III$中WKB解为：
$$\psi(x)=\frac{1}{(V-E)^{1/4}}\exp\left( - \frac{1}{\hbar} \int_{x_{1}}^{x}\sqrt{ 2m(V-E) } \right)$$



 
