# R166 结构

R166 一般指$RMn_{6}Sn_6$，其中$R$为稀土元素
- $Mn$构成Kagome lattice层
- $Mn$的Kagome lattice层间，要么隔着$Sn$层，要么隔着$Sn$和$R$混起来的层
- $Sn_{3}$可以被doped称$Ga$

# Magnetic ordering

离子自旋由未配对电子提供。内层电子总自旋为零。例如铁$[Ar]3d^{6}4s^{2}$，最外层$s$轨道tight binding成为conduction band。内层未配对的$6$个$d$上的电子之间全部是铁磁性耦合，加起来构成净磁矩。

交换作用：
- $Mn$的交换作用强。$R$就没什么交换作用
- $Mn$层内ferromagnetic
- $Mn$层间隔着$Sn$是anti-ferromagnetic
- $Mn$层间隔着$Sn,R$是ferromagnetic
- 更远的两个$Mn$层之间，上述两个层各有一个，是ferromagnetic
- $Mn,R$之间是ferrimagnetic

Anisotropy：
- Heisenberg model修正项：$-K\sum_{i}(S_{i}^z)^{2}$。若$K>0$，则倾向于$S_{i}^z\neq 0$。称为easy-axis。若$K<0$，则倾向于$S_{i}^z=0$。称为easy-plane。
- 修正项来源于晶体内电场的L-S coupling。
- 无doping时，$Mn,R$皆为easy-plane。
- 若$R=Tm$，强$Ga$ doping时，$R$变强easy axis。
- 若$R=Tm$，稍弱$Ga$ doping时，$R$的easy axis强度和$Mn$的easy plane强度相当。

总结来说，就是，$R$的anisotropy和$Mn$的anisotropy各自把各自掰向axis或者plane。然后$Mn$之间全部平行，并且因为平行交换能一样，不会反过来影响$Mn$的orientation。然后$R$和$Mn$因为取向不同互相掰，在$R=Tm$，稍弱$Ga$ doping时，它们强度相当。这时施加field，可能形成稳定skyrmion。

# Growth method
- 其中用到tin flux。最后会离心甩出来，但仍有残留。磨样本时最好磨掉。

# Structural characterization method
- X-ray diffraction主要看电子结构。X-ray为入射电磁波。将bulk中电子云想成偶极，在X-ray作用下受迫振动，产生辐射。每个离子的电子云形成的偶极振动。而核虽然也带电荷，也能被X-ray驱动，但是太重了，不怎么动。所以辐射强度很小，可忽略。一般画$\text{Bragg peak v.s. diffraction angle}$。其中：
	- peak位置$\rightarrow$晶格间距
	- peak大小$\rightarrow$电子云密度
- Neutron diffraction主要看磁结构和核结构。Neutron不带电荷，但是有自旋。把Neutron打入样品就相当于一个微小的Stern-Gerlach实验。Neutron受到样品中偶极矩的磁场作用而偏转，形成磁Bragg peak。Neutron还可以直接撞到核上被散射，形成核Bragg peak。
- Rietveld refinement就是给定大致的晶体结构和PXRD（powder X-ray diffraction）图，通过某种最小二乘拟合lattice parameters凑出符合PXRD图的结构。
- Lattice parameters $a,b,c$指unit cell在三个轴上的长度。unit cell不是primitive cell。primitive cell是一种特殊的unit cell。

# Magnetization measurement
- 在平行于axis和plane方向施加磁场，看哪个方向manetization大。哪个方向大说明哪个方向easy。
- 若是ferromagnetic，不用外场就能看magnetization。若是anti-ferromagnetic，要加外场才能看magnetization。我们不知道材料是哪种，所以一般加外场。
![[Drawing 2025-12-02 22.02.14.excalidraw|center|500]]
- 为什么cusp代表反铁磁相：高温时有$\chi \propto \frac{1}{T}$ Curie定律。反铁磁相在低温magnetization为零。随着温度升高，这种相逐渐被破坏，从而越来越容易与外场align。最后到临界温度直接相变，遵从Curie定律下降。即：
![[Drawing 2025-12-02 23.11.14.excalidraw|center|300]]
- 如果是铁磁相，低温下应该存在较高的magnetization，高温下相变为paramagnetic。所以铁磁相只会有一个cusp。即：	![[Drawing 2025-12-02 23.14.03.excalidraw|center|300]]
- 一旦$M_{ab},M_{c}$发生crossover，则代表存在spin reorientation。Spin reorientaion指从easy axis变成easy plane或者反之。总之就是磁化的“容易方向”变了。
- Phase diagram：$Ga$ concentration越高，约easy-axis。$Ga$就是在营造$Mn$的Kagome的easy-axis的晶体场环境。而高温会破坏easy-axis。因为$R$是easy-axis，$Mn$是easy-plane，所以$Ga$在助长$R$的anisotropy。

# MR measurement
- $\text{MR}= \frac{\rho_{xx}(B)-\rho_{x x}(0)}{\rho_{x x}(0)}$。通常情况下，我们有：$$\sigma_{\parallel}= \frac{\sigma}{1+\mu_{n}^{2}B^{2}}$$假设$\tau$不变，则$B$越大，conductance越小。所以$\text{MR}>$

# Things to learn
- Heisenberg model single-site anisotropy and Ising-type anisotropy.
- space group. What is P6/mmm, what are 2c, 2d, 2e sites?
- DFT
- Helimagnetic phase transition
- Neel temperature
- Curie定律
- Hysteresis loop