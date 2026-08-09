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

