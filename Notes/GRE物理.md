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
选C。尽管选D也可以，但是D没法很精确。原子电中性的本质是电场的平方反比定律。将原子看作是正电中心以及周围的均匀负电球壳。解方程可得$F\propto \frac{Q}{R^{2}}$。那么此时力将是零。但是如果不符合平方反比，就不能得到这样的结果。球壳体系即使是电中性的也可以和试探电荷作用。

19. ![[Pasted image 20260807210421.png|center|300]]
我们考虑的矩阵元是$\bra{n^{'},l^{'},m_{l}^{'},s ^{'}, m_{s}^{'}}\mathbf{r}\ket{n,l,m_{l},s,m_{s}}$。我们量子化的轴是z轴，但是电场不一定是沿着z轴的，所以必须要考虑$\mathbf{r}$的矩阵元，而不是只是$z$的矩阵元。我们知道$\mathbf{r}$可以分解为球张量$r^{(1)}_{0}= z,\ r^{(1)}_{\pm_{1}}= \mp\frac{x\pm iy}{\sqrt{ 2 }}$，然后用Wigner-Eckart定理得到selection rule。但是，由于$r^{(1)}$算子只和轨道角动量作用，所以只需要对于$l,m_{l}$用selection rule即可。