1. Dopler公式$$f^{'}= f^{} \frac{v\pm v_{o}}{v\mp v_{s}}$$
2. 衰变有alpha衰变。释放alpha粒子，即氦核。还有beta衰变。beta+衰变是质子释放正电子和中微子变成中子。beta-衰变是中子释放电子和反中微子变成质子。gamma衰变是原子核自身的能级跃迁，释放光子。
3. SR公式：$E^{2}=p^{2}c^{2}+m^{2}c^{4}$，$p=\gamma mv= \frac{1}{\sqrt{ 1-\left( \frac{v}{c} \right)^{2} }}mv$，$E=\gamma mc^{2}$。
4. 令$\mathcal{O}^{'}$系沿x轴运动。那么：
$$\begin{align}
 & E^{'}_{x}=E_{x} \\
 & E^{'}_{y}=\gamma(E_{y}-vB_{z}) \\
 & E^{'}_{z}=\gamma(E_{z}+vB_{y}) \\
 & B^{'}_{x}=B_{x} \\
 & B^{'}_{y}=\gamma\left( B_{y}+ \frac{v}{c^{2}}E_{z} \right) \\
 & B^{'}_{z}=\gamma\left( B_{z}- \frac{v}{c^{2}}E_{y} \right)
\end{align}$$
5. 金属体系载流子浓度随温度近似不变。电导率随温度的改变主要由电子-声子散射引起。半导体体系载流子浓度随温度强烈变化。电导率随温度的额改变主要由热涨落引起。
6. 主量子数的字母，K,L,M,N分别对应$n=1,2,3,4$。
7. 实际上，对于核电荷为$Z|e|$的类氢原子，相应电离能应该是$E\propto Z^{2}$。不能naive地认为，只是库伦作用增加了$Z$倍。实际上，电子还拉近了，与核的距离为原来的$\frac{1}{Z}$。
8. ![[Pasted image 20260731170126.png|center|300]]
要快速看的话，只需要带入答案即可。值得注意的是，并不要看到有些选项带入答案行不通就不尝试带入答案。只要有一个选项带入答案行得通，并且看得出来就可以了。例如此处，D这种不解微分方程是看不出来的，就没法直接带入验证。但是B显然正确。假如中间的球不动，两边相反振动，那么两边就只是用k的弹簧连载固定点上而已，频率刚好是$\sqrt{ \frac{k}{m} }$。

9. Compton散射公式：$\Delta \lambda= \frac{h}{Mc}(1-\cos \theta)$。其中，$\Delta \lambda=\lambda^{'}-\lambda$为散射前后光子波长变化。$M$为被光子碰撞的粒子的静质量。$\theta$为散射角。

10. ![[Pasted image 20260807160248.png|centering|300]]
想要判断电场是否在xy面内，显然可以通过对称性。对系统作关于xy面的镜面对称，系统不变。所以电场必在xy面内。

11. dielectric constant指$\epsilon_{r}=\frac{\epsilon}{\epsilon_{0}}$。理想导体，$\epsilon_{r}=\infty$。
12. ![[Pasted image 20260807170242.png|centering|400]]
只需要根据u是常数就可以判断了。u具有速度量纲，又是常数，所以肯定是E。

13. 令交流电源内部impedance为$Z$。当外电路impedance为$Z^{*}$时具有最大功率。
14. 尺缩效应指动尺变短，因子为$\sqrt{ 1- \left( \frac{v}{c} \right)^{2} }$。
15. ![[Pasted image 20260807193051.png|centering|400]]
你可能算出来是1/4。注意圆偏振光变成线偏振光强度会减半。

16. ![[Pasted image 20260807195305.png|centering|400]]
应该变宽。增加密度，其实电子的跃迁就越迅速地发生。会想起FGR中，谱线最开始应该很宽，然后之后缩成dirac delta的。这其实也是$\Delta E \Delta t\geq \hbar$的体现。

17. ![[Pasted image 20260807201315.png|centering|300]]
选B。

18. ![[Pasted image 20260807202115.png|centering|400]]
选E。尽管选D也可以，但是D没法很精确。球壳内无电场的本质是平方反比定律。这是$\nabla \cdot \mathbf{E}= 0$的直接结果。而平方反比定律其实就是这个方程的解而已。

19. ![[Pasted image 20260807210421.png|center|300]]
我们考虑的矩阵元是$\bra{n^{'},l^{'},m_{l}^{'},s ^{'}, m_{s}^{'}}\mathbf{r}\ket{n,l,m_{l},s,m_{s}}$。我们量子化的轴是z轴，但是电场不一定是沿着z轴的，所以必须要考虑$\mathbf{r}$的矩阵元，而不是只是$z$的矩阵元。我们知道$\mathbf{r}$可以分解为球张量$r^{(1)}_{0}= z,\ r^{(1)}_{\pm_{1}}= \mp\frac{x\pm iy}{\sqrt{ 2 }}$，然后用Wigner-Eckart定理得到selection rule。但是，由于$r^{(1)}$算子只和轨道角动量作用，所以只需要对于$l,m_{l}$用selection rule即可。

20. 对于包含电感的电路，初始条件为电感电流连续。因为$V=-L \frac{dI}{dt}$。假设电路中电压都是有限的。那么在电路状态变化前后取小区间积分得到变化：$\Delta I= \lim_{ \epsilon \to 0 }\int_{-\epsilon}^{\epsilon} dt \left( - \frac{V}{L} \right)=-\lim_{ \epsilon \to 0 } \frac{V}{L}\epsilon=0$。对于包含电容的电路，初始条件为电压连续。因为$q=CV\implies I=C \frac{dV}{dt}$。假设电路中电流是有限的，同样积分得到$\Delta V=0$。
21. 回忆起Carnot cycle的守恒量为$\Delta S=0$ for one cycle。这是因为系统可逆，而$S$是状态量。因为绝热膨胀不改变熵，所以实际上熵的变化仅发生在等温膨胀中。高温等温膨胀系统获得$\Delta S_{1}= \frac{Q_{1}}{T_{1}}$。低温等温膨胀系统获得$\Delta S_{2}=- \frac{Q_{2}}{T_{2}}$。所以$\frac{Q_{1}}{T_{1}}= \frac{Q_{2}}{T_{2}}$。

22. ![[Pasted image 20260808152032.png|centering|300]]
若$d$太大，显然从几何光学角度，不能成像。所以这种几何光学带来的模糊效应为$\propto d$。若$d$太小，则由于衍射也不能成像。而衍射的“强度”可以由亮斑大小衡量。显然亮斑大小$\propto \frac{\lambda D}{d}$。当这两种效应平衡时，我们有$d= \frac{\lambda D}{d}\implies d=\sqrt{ \lambda D }$。
23. ![[Pasted image 20260808153318.png|centering|300]]
显然在$x=0$时，加速度为零。并且在$x=\infty$时，加速度为$g$。那么直接选D。

24. 光电效应中，我们不认为外加电场能有助于电子逸出材料。因为我们假设电场是足够小的。如果电场足够大，能够直接通过偶极作用将电子拉出材料，这就不是光电效应了。电场只影响电子飞出后的运动。
25. 不要看错题干要求求什么。
26. ![[Pasted image 20260808163434.png|centering|300]]
Bragg diffraction条件是有2的。$2d\cos \theta=n\lambda$。选D。

27. ![[Pasted image 20260808164036.png|centering|300]]
显然，当$\mu=1$时，由于横向的推力严格小于纵向压力等于摩擦力，所以$M=\infty$。所以选C, D。然后取$\mu \rightarrow 0$，此时显然$M$必须非常小。那么压力几乎由$m$提供。而推力为$\frac{Mg}{2}$。故$\frac{Mg}{2}= \mu mg\implies M=2m$。所以选D。

28. ![[Pasted image 20260808164617.png|centering|300]]
显然可以选IV。接下来II也不对。因为若$\nabla \cdot \mathbf{B}\neq 0$，那么$\mathbf{B}$不能写成某个矢量场的旋度。但是II却告诉我们$\mathbf{B}=- \nabla \times\left( \int dt \mathbf{E} \right)$，所以II也不对。正确的II应该加上磁荷流。即$\nabla \times \mathbf{E}=- \frac{\partial \mathbf{B}}{\partial t}+\mathbf{j}_{m}$。
29. ![[Pasted image 20260808165802.png|centering|300]]
如果负载和线的阻抗不匹配，就会发生反射。具体来说，反射系数为$\Gamma= \frac{Z_{1}-Z_{2}}{Z_{1}+Z_{2}}$。
30. ![[Pasted image 20260808170829.png|centering|300]]
回忆起单缝衍射暗纹推导：$\frac{w}{2}\sin \theta= n\frac{\lambda}{2}$。这个不能用来推导亮纹。因为类似地如果考虑亮纹$\frac{w}{2}\sin \theta=n\lambda$，那么亮纹中间位置的光又会和它们相消形成暗纹。

所以此中，每条缝的暗纹为$w\sin \theta=n\lambda$。同时，也可将这个看作双缝干涉。那么干涉的亮纹条件为$d\sin \theta=m\lambda$。如果过两个单缝衍射的亮纹恰好被双缝干涉给消掉，那么我们就观察不到纹样了。这等价于两个单缝衍射的暗纹处于双缝干涉的亮纹。于是将上面两个方程相除得到$\frac{d}{w}= \frac{m}{n}$ for some $m,n\in \mathbb{Z}$。结合$d>w$，就可以选D。

31. ![[Pasted image 20260809152116.png|centering|500]]
望远镜由两个凸透镜组成。非常遥远的天体的光，近似为平行光，透过物镜，成像在焦点。（其实是焦点稍微靠右一点。）如果是完全成像在交点，那么物体完全缩成一个点。但现在稍微骗了一点，如何找到这个很小的像的高度？可以通过过物镜中心不偏折的光线，找它与焦点的垂线的交点。目镜的焦点和物镜重合。实像的光再透过目镜成平行光。所以眼睛看到的是无穷远处的虚像。那么对于眼睛来说，最终像的张角近似为$-w^{'}$。而显然，真实天体的张角近似为$w$。那么显然角放大率为$M=\frac{-w^{'}}{w}= -\frac{f_{o}}{f_{e}}$。直觉上来讲，$f_{o}$越大，那么$y$就越大。所以$M\propto f_{o}$。而$f_{e}$越小，偏转能力越强。所以放地越大。所以$M\propto \frac{1}{f_{e}}$。

![[Pasted image 20260809155010.png|centering|500]]
类似地，显微镜的物镜成放大实像，目镜成放大虚像。并且由于物镜的实像近似在目镜焦点，目镜的成像近似在无穷远处。 首先，将物体放在明视距离$D$，物体张角为$\frac{y}{D}$。现在将物体置于放大镜下。物体张角为$-w^{'}$。显然，$w^{'}= \frac{y_{1}}{f_{e}}$。所以角放大率为$M=- \frac{y_{1} /f_{e} }{y/D}= -\frac{y_{1}}{y} \frac{D}{f_{e}}$。而对于物镜来说，容易计算$\frac{y_{1}}{y}= \frac{\Delta}{f_{o}}$。所以$M=- \frac{\Delta D}{f_{0}f_{e}}$。这相当于物镜的线放大率乘以目镜的角放大率。直觉上来讲，焦距越短，对光线的偏转就越强，物体就放地越大。所以$M\propto \frac{1}{f_{o}f_{e}}$。而镜筒越长，光线传播距离越长，$y_{1}$就会越大。所以$M\propto D$。

而对于简单放大镜，也就是将物体放在凸透镜焦点。显然成像在无穷远处。显然角放大率为$M= \frac{y /D}{y / f}= \frac{f}{D}$。

32. 阅读log plot的方法：先看底数判断是对什么的log。然后轴上每一点取对数得到对数轴上的点。
![[Pasted image 20260809164327.png|centering|300]]
例如截距是$6\times 10^{3}$。所以实际上对应的纵轴点是$lg(6 \times 10^{3})=3+lg{6}$。那么可以得到线的解析式$lg y=kx+b$。然后$y= 10^{kx+b}$。

33. 如何理解电导率越大，趋肤深度越小？电导率越大，导体中引起的感应电流越大。电磁场的能量迅速被传递给了电子，自身能量衰减很快。那么电磁波就越难以在导体中传播。理想导体趋肤深度为零。导体内部将没有电磁场。电磁场就都在表面（外侧）。在得到导体界面边界条件$\hat{\mathbf{n}}\times(\mathbf{E}_{1}-\mathbf{E}_{2})=0$时，我们总是想象电磁场的变化是足够平缓的，以至于电磁场不可能是Dirac delta之类的东西。那么这个边界条件通过对$\nabla \times \mathbf{E}=- \frac{\partial \mathbf{B}}{\partial t}$积分得到。右手边在面积极限下为零。而为什么我们不对于$\nabla \cdot \mathbf{E}= \frac{\rho}{\epsilon_{0}}$积分呢？因为$\rho$可以是Dirac delta。即使在面积极限下也可以非零。
34. ![[Pasted image 20260810133047.png|centering|300]]
这题思路非常明确。首先肯定是奇函数。然后只能AB。AB的区别就是有没有偶数项。取一个偶数项出来看看Fourier coefficient是不是零就可以了。例如取$\sin 2\omega t$成分。只需要检验$\int_{-\pi  /\omega}^{\pi /\omega}dt V(t)\sin 2\omega t=0$。而且不用真的算积分，画画图就一目了然了。

35. 若$X, Y$独立，容易通过计算直接证明：
$$\begin{align}
\text{Var}(XY) & = \mathbb{E}(X^{2}Y^{2})-\mathbb{E}(X)^{2}\mathbb{E}(Y)^{2} \\
 & = \mathbb{E}(X^{2})\mathbb{E}(Y^{2})-\mathbb{E}(X)^{2}\mathbb{E}(Y)^{2} \\
 & = [\text{Var}(X)+\mathbb{E}(X)^{2}][\text{Var}(Y)+\mathbb{E}(Y)^{2}]-\mathbb{E}(X)^{2}\mathbb{E}(Y)^{2} \\
 & = \text{Var}(X) \text{Var}(Y)+\mathbb{E}(X)^{2}\text{Var}(X)+\mathbb{E}(Y)^{2}\text{Var}(Y)
\end{align}$$
对于任意物理量$f=f(x,y)$，它距离平衡值的偏移都必须由$x,y$的偏移贡献。那么：
$$\begin{align}
\delta f & = \frac{\partial f}{\partial x}\delta x+ \frac{\partial f}{\partial y}\delta y
\end{align}$$
显然：
$$\begin{align}
\text{Var}(f) & = \text{Var}(\delta f) \\
 & = \text{Var}\left(  \frac{\partial f}{\partial x}\delta x \right)+ \text{Var}\left(  \frac{\partial f}{\partial y}\delta y \right) \\
 & = \left(  \frac{\partial f}{\partial x} \right)^{2} \sigma_{x}^{2}+ \left(  \frac{\partial f}{\partial y} \right)^{2}\sigma_{y}^{2}
\end{align}$$
例如$Z=XY$。那么近似有$\left( \frac{\sigma_{Z}}{Z} \right)^{2}=\left(  \frac{\sigma_{X}}{X} \right)^{2}+\left(  \frac{\sigma_{Y}}{Y} \right)^{2}$。类似地，$Z= \frac{X}{Y}$，同样有$\left( \frac{\sigma_{Z}}{Z} \right)^{2}=\left(  \frac{\sigma_{X}}{X} \right)^{2}+\left(  \frac{\sigma_{Y}}{Y} \right)^{2}$。

36. ![[Pasted image 20260810150406.png|centering|300]]
不要用$\hbar k$乱猜。稍微算一下，都不用动笔，根据积分的奇偶selection rule就知道是A。

37.
![[Pasted image 20260810150548.png|centering|300]]
显然，面积的变化是线性的。不要忘了还要对时间求导。所以感生电动势是常数。

38. ![[Pasted image 20260810153410.png|centering|300]]
原处恒星的成像如果严格按照几何光学，则不会模糊。但是衍射会让它模糊，会让恒星的像看起来扩大。所以双星系统如果两个像都很模糊，叠在一起，就不好。显然，令镜面大小为$D$。衍射的“强度”$\propto \frac{\lambda}{D}$。而双星距离的“大小”为$\theta$。我们希望双星比起衍射来说距离是远的。也就是我们希望$\theta \gg \frac{\lambda}{D}$。而临界条件为$\theta= 1.22 \frac{\lambda}{D}$。选C。

39. 切伦科夫辐射：考虑带电粒子穿过介质。介质中原子的正负电中心在微扰下分离，然后又相互拉扯进行震荡，产生辐射。一般来说，这些原子的辐射会全部抵消，因为没有特殊的相位关系。考虑如下情况：带电粒子分别经过A，B两点，激发辐射。先A后B。当带电粒子激发B时，A的电磁波刚好传播到B。这样就可以叠加增强。于是辐射不会抵消。那么显然需要粒子速度和介质中光速一样。于是$v= \frac{c}{n}$。
40. ![[Pasted image 20260810161625.png|centering|300]]
我们需要记住，若系统由一系列质点$\{ \mathbf{r}_{j} \}$构成，受力为$\{ \mathbf{F}_{j} \}$。那么总力矩就绝不是$\mathbf{R}\times \mathbf{F}$，而必须是$\sum_{j}\mathbf{r}_{j}\times \mathbf{F}_{j}$。记住一个例子。一个圆球，对径点上施加相反的力。显然$\mathbf{F}=0$。但是总力矩却不是零。这道题老老实实列一下Lagrangian就出来了。A。
41. ![[Pasted image 20260810162132.png|centering|300]]
这题没什么好说的。不要将等式错列成$100m^{2}c^{4}=m^{2}c^{4}+p^{2}c^{2}$就行。应该是$(100m^{}c^{2})^{2}=m^{2}c^{4}+p^{2}c^{2}$。

42. ![[Pasted image 20260810164411.png|centering|300]]
别乱套公式。记得normalize。应该是$N_{0}\frac{e^{0}}{e^{0}+e^{-\beta\epsilon}}$。选B。

43. ![[Pasted image 20260810165458.png|centering|300]]
读题这一块。C的意思是，当熵为$N_{0}k\ln 2$时，系统温度是$\infty$。这是一个负温度系统。在$T=\infty$时，二能级的两个态概率严格相等，导致$S=k \ln( 2^{N_{0}})=N_{0}k\ln 2$。当系统能量再度升高时，温度转变为负。
44. ![[Pasted image 20260810165957.png|centering|300]]
遇到振动问题，首先想一下微分方程是二阶还是一阶，根据这个来判断是否开根号。比如这里就是B，对$\frac{1}{4}$开根号。

45. ![[Pasted image 20260810170319.png|centering|400]]
转动惯量是$m\left(  \frac{b}{2} \right)^{2}+ m\left(  \frac{b}{2} \right)^{2}$！两个要加起来！
46. 考虑光垂直入射到介质分界面上。我们定义波阻抗$Z= \frac{E}{H}$。注意到波阻抗的量纲和一般的阻抗是一样的。假设介质并没有任何特殊之处，例如把光的偏振分解了，然后每个分量传播速度不同之类的，那么反射，折射就都是线偏振的。在界面上容易得到：$E_{i}+E_{r}=E_{t}$。注意左手边$E_{i},E_{r}$都是正的。这就假设了两者方向一样。另外假设介质比较绝缘，表面没有自由电流。那么显然$\mathbf{H}$的平行分量应该连续。由于$E_{i},E_{r}$方向一样，$H_{i},H_{r}$方向就相反。于是$H_{i}= \frac{E_{i}}{Z_{1}},\ H_{r}=- \frac{E_{r}}{Z_{1}}$。那么则有：
$$\begin{align}
 &  H_{i}+H_{r}=H_{t} \\
\implies & \frac{Z_{2}}{Z_{1}}(E_{i}-E_{r})= E_{t} \\
\implies &  \frac{E_{r}}{E_{i}}= \frac{Z_{2}-Z_{1}}{Z_{2}+Z_{1}}
\end{align}$$
显然如果是平面波，$Z= \frac{E}{H}= \frac{\mu E}{B}= \mu v= \sqrt{  \frac{\mu_{r}}{\epsilon_{r}} }$。而$n= \sqrt{ \epsilon_{r}\mu_{r} }$。假设$\mu_{r}$几乎是一个常数。那么$\frac{H_{r}}{H_{i}}\approx \frac{n_{1}-n_{2}}{n_{1}+n_{2}}$。

由此可见，当光进入折射率大的介质时，相位会发生180度转变。而进入折射率小的介质却不会。这就类似于绳波。如果末端固定，由于要维持末端不动的边界条件，反射波必须和入射波相位差180度。

47. ![[Pasted image 20260811152731.png|centering|200]]如果电容和电感的impedance没有完全抵消，那么总impedance总比$R$大一点点，导致电流不够小。以impedance的那个复平面图来思考。
48. ![[Pasted image 20260811153117.png|centering|300]]
这道题是通过开关断开后的电容器放电来判断的。不是通过开关闭合的充电来判断的。选B。

49. ![[Pasted image 20260811154746.png|centering|300]]
首先回忆$C= \epsilon \frac{A}{d}$。为什么$C\propto  \frac{1}{d}$呢？因为带相同电荷的板子，距离越近，电压$\int dl E$越小。所以$C= \frac{Q}{V}$越大。在中间放入电介质，电容会增大。一方面，因为电介质的$\epsilon$更大，其电容更大，所以电容器的“平均电容”变大了。另一方面，由于我们把一个大的电容器拆成了小电容器的串联，电容变大了。可能的疑惑是，电容器串联电容难道不会变小吗？但是这不是在原电容的基础上串联的。由于中间塞了一个电解质，原电容器中间的距离实际上被分成了三部分。每部分的板间距都$<d$。所以每部分的电容都$>C$。然后再串联的。

那么电荷增大，于是选E。

50. ![[Pasted image 20260811155838.png|centering|300]]
只需要记住，质子质量大约为电子质量2000倍。

51. ![[Pasted image 20260811163746.png|centering|300]]
只需要知道pion是介子。然后实际上ABCD就都排除了。然后只有弱相互作用能改变奇异数。强相互作用和电磁奇异数都守恒。
52. 记住等温膨胀$p\propto V^{-1}$，绝热膨胀$p\propto V^{-5 /3}$。在试图比较谁更陡峭时，我们不能直接求导。因为二者的比例系数是未知的，即使求导也没用。我们可以假设气体从同一点开始，进行等温或者绝热膨胀。等温体积膨胀两倍时，压强为原来的$\frac{1}{2}$。绝热体积膨胀两倍时，压强为原来的$\left( \frac{1}{2} \right)^{5 /3}$。所以降得更小。一个直觉时，等温膨胀时，气体做功压强下降后，还可以从外界吸热，使得自己压强降得没那么厉害。但是绝热膨胀就无法吸热，所以压强下降得更加迅速。
53. ![[Pasted image 20260812151524.png|centering|200]]
选C。
54. 球面镜成像公式$\frac{1}{s}+ \frac{1}{s ^{'}}=- \frac{2}{R}$。若对于入射光来说，球面镜是凸的，那么$R>0$。如果是凹的，那么，$R<0$。$s ^{'}>0$为实像，在入射光同侧。$s ^{'}<0$为虚像，在入射光对侧。
55. 对于Poisson分布，$\sigma=\sqrt{ \lambda }$。
56. ![[Pasted image 20260812155746.png|centering|300]]
立体角一圈下来是$4\pi$。不要光算一个立体角就选D。应该看这个立体角占总立体角的比例。所以选C。
57. ![[Pasted image 20260812155901.png|centering|300]]
无语了。选个方差最小的就行了。
58. ![[Pasted image 20260812160502.png|centering|300]]
选E。X射线使用电子轰击金属。电子被金属电磁作用导致减速，释放连续谱的辐射。这是第一种辐射，也就是bremsstrahlung。然后金属的内层电子被激发，又跃迁下来，产生离散谱的辐射。这是第二种辐射。第二种要能量足够大，才行。
59. 平行轴定理。令刚体绕过质心的轴的转动惯量为$I$。那么刚体绕距离质心$a$的平行轴的转动惯量为$I+Ma^{2}$。圆盘转动惯量$\frac{1}{2}MR^{2}$。实心球转动惯量$\frac{2}{5}MR^{2}$。空心球壳转动惯量$\frac{2}{3}MR^{2}$。实心长方体转动惯量$\frac{1}{12}M(a^{2}+b^{2})$。杆绕中心的转动惯量$\frac{1}{12}ML^{2}$。
60. ![[Pasted image 20260812163015.png|centering|300]]
无语了。这题它说speed increasing，意思是说切向加速度。不是说总加速度。

61. ![[Pasted image 20260812164831.png|centering|300]]
如果要用自然单位制的话，SI单位的速度也要换算。选D。
62. ![[Pasted image 20260812165118.png|centering|300]]
读题问题。$S^{'}$中同时发生的意思不是说这两个事件在两个参考系发生的时间点一样。而是说这两个事件是在$S^{'}$中同时发生的，间隔为零。显然$(\Delta x)^{2}-c^{2}(\Delta t)^{2}=(\Delta x^{'})^{2}>0$选C。
63. ![[Pasted image 20260812165349.png|centering|300]]
选D。用右手定则看积分正负是不可靠的。
64. 对于理想气体，其速度rms可以这样计算：$\frac{1}{2}m\langle v^{2}\rangle= \frac{3}{2}kT$。但是，速度rms绝不是Maxwell分布的最高点。由于Maxwell分布是boltzmann factor推出来的，简单推导会发现最高点速度满足$\frac{1}{2}mv^{2}= kT$。
65. ![[Pasted image 20260813133710.png|centering|300]]该题中，波矢$k$应当不变。
66. ![[Pasted image 20260813140352.png|centering|300]]
回忆起，primitive cell是一种特殊的unit cell。它将每个真实原子当作格点。primitive cell的每个只包含一个原子。bcc的primitive cell的primitive vector都是斜着取的。不是沿着棱取的。这里一个conventional unit cell体积$a^{3}$，包含两个原子。所以一个primitive cell只包含一个原子。
67. ![[Pasted image 20260813140749.png|centering|300]]
选B。不用考虑高温的声子散射使得电阻率再升高的情况。
68. ![[Pasted image 20260813144115.png|centering|300]]
注意，这里给的是频率，不是角频率。

69. ![[Pasted image 20260813144323.png|centering|300]]
如果衰变有两个通道，那么总的分布就是这两个Poisson分布的乘积。或者更简单一点，就是两个exponential decay的乘积。那么$e^{- \frac{t}{\tau_{1}}}\cdot e^{- \frac{t}{\tau_{2}}}= e^{-\left(  \frac{1}{\tau_{1}}+ \frac{1}{\tau_{2}} \right)t}$。所以新的衰变常数满足$\frac{1}{\tau}= \frac{1}{\tau_{1}}+ \frac{1}{\tau_{2}}$。直观上来讲，由于衰变的通道变多，总的衰变常数一定比每个单独的衰变常数要短。
70. ![[Pasted image 20260813145604.png|centering|300]]
应当记住，结合能是负的。因为这是吸引所造成的一个凹陷的势阱。那么令裂变产物结合能为$V$。那么$-238\times 7.6=2V+2\times 100$。选E。
71. ![[Pasted image 20260813145842.png|centering|300]]不要忘记，光从空气进入油相位要变180。
72. ![[Pasted image 20260813153117.png|centering|300]]
这里速度很大，运用相对论Dopler公式。红移：$\frac{\lambda_{\text{shifted}}}{\lambda}= \sqrt{  \frac{1+\beta}{1-\beta} },\ \beta= \frac{v}{c}$。蓝移：$\frac{\lambda_{\text{shifted}}}{\lambda}=\sqrt{  \frac{1-\beta}{1+\beta} }$。选D。
73. ![[Pasted image 20260813153456.png|centering|200]]
读题问题。downward acceleration指未叠加前的向下加速度的和。不是指总加速度。
74. 考虑一个参考系$\mathcal{O}^{'}$在lab frame中以$u$运动。$\mathcal{O}^{'}$中物体速度为$v^{'}$。那么lab frame中物体速度为$v= \frac{1}{1+ \frac{uv^{'}}{c^{2}}}(u+v^{'})$。狭义相对论速度变换。
75. 回忆Bloch球。将实空间任意轴$\hat{\mathbf{n}}$映射到Bloch球上的$(\theta,\phi)$位置。然后$+ \frac{1}{2}$对应的量子态为$\left( \cos \frac{\theta}{2}, e^{i\phi} \sin \frac{\theta}{2} \right)$。$- \frac{1}{2}$对应的是$(\theta,\phi)$的对径点$(\pi-\theta,\pi+\phi)$。对应的量子态是$\left( \sin \frac{\theta}{2},-e^{i\phi}\cos \frac{\theta}{2} \right)$。

76. ![[Pasted image 20260813162838.png|centering|300]]
可以记一下，电流圆环中心磁场为$\frac{\mu_{0}I}{2R}$。
77. ![[Pasted image 20260813170705.png|centereing|300]]
体系电偶极矩为零。因为球体的对称性，没有电偶极矩。选E。回忆起偶极辐射$P\propto \omega^{4}p^{2}\sin ^{2}\theta$。
78. ![[Pasted image 20260813171023.png|centering|300]]
要相信代换是能代换出来的。选E。




