# R166 结构

R166 一般指$RMn_{6}Sn_6$，其中$R$为稀土元素
- $Mn$构成Kagome lattice层
- $Mn$的Kagome lattice层间，要么隔着$Sn$层，要么隔着$Sn$和$R$混起来的层
- $Sn_{3}$可以被doped称$Ga$

# Magnetic ordering

离子自旋由未配对电子提供。其实也就是所有的valence electron。内层电子总自旋为零。

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

总结来说，就是，$R$的anisotropy和$Mn$的anisotropu各自把各自掰向axis或者plane。然后$Mn$之间全部平行，并且因为平行交换能一样，不会反过来影响$Mn$的orientation。然后$R$和$Mn$因为取向不同互相掰，在$R=Tm$，稍弱$Ga$ doping时，它们强度相当。这时施加field，可能形成稳定skyrmion。