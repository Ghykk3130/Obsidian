定义heat flux为heat的能量密度的流量。即单位时间通过单位面积的heat。Write $\vec{q}$. 于是

$\vec{q} = -k \nabla T$ 

注意热力学第二定律暗示了$k$必定为正。Call $k$ thermal conductivity.

# Fourier热传导定律退化为Newton冷却定律

我们考虑一维的情况。我们的系统是这样的：一个圆柱体(其实不一定是圆柱体。说圆柱体只是方便想象)只有一端可以导热，横截面积为$A$， 其余部分都绝热。圆柱体内部温度一致为$T$，环境温度为$T_0$ 。 我们在靠近导热一段圆柱体的温度在很小的一段距离$\Delta x$内降到了$T_0$ 。 于是：

$\begin{aligned} \int \vec{q} \cdot d \vec{a} & =-k \frac{T-T_0}{\Delta x} A \\ \Rightarrow \frac{d Q}{d t} & =\left(\frac{-k}{\Delta x A}\right)\left(T-T_0\right) \\ \frac{d T}{d t} & =\left(\frac{-k}{\Delta x A C}\right)\left(T-T_0\right)\end{aligned}$

将$\frac{-k}{\Delta x AC}$定义为比例常数then done. 

# Heat Equation

考虑热能的传导。假设没有热源。我们显然有continuity equation:

$\frac{\partial Q}{\partial t} = -\nabla \cdot \vec{q}$ 

假设$k$不是位置的函数，于是（$c$为specific heat）：

$\begin{aligned} & \rho c \frac{\partial T}{\partial t}=\nabla \cdot(k \nabla T) \\ & \Rightarrow \frac{\partial T}{\partial t}=\frac{k}{\rho c} \nabla^2 T\end{aligned}$

定义$\alpha = \frac{k}{\rho c}$为比例常数then done.

# Thermal Impedance

现在我们考虑对一个材料从外部施加一个power产生内部的温度响应。因为我们外部的power是general的，我们只需要研究这个power每一个Fourier component产生的响应即可。这个响应系数一般来说是评率的函数，因为我们已经做了Fourier decomposition了。我们定义这个响应系数为thermal impedance $Z_T$ . Write:

$Z_t(x,\omega) = \frac{\hat{T}(x,\omega)}{\hat{P}(x,\omega)}$

## EX: 

同样地我们考虑一个有一端可以传导热的无限长小圆柱体，来计算这块材料的heat impedance。由Fourier's law of conduction:

$\vec{q} = -k \frac{\partial T}{\partial x} \Rightarrow P = -k\frac{\partial T}{\partial x} A$ 

因为我们想要Fourier component， 所以两边Fourier 变换一下得到:

1） $\hat{P}= -k \frac{\partial \hat{T}}{\partial x} A$ 

但是右手边不是我们想要的$\hat{T}$而是它的导数。这时我们想到我们可以fix $\omega$， 然后用heat equation解出$\hat{T}$， 这样求导不就可以直接求了吗？于是:

$\frac{\partial T}{\partial t} = \alpha \frac{\partial^2 T}{\partial x^2} \Rightarrow i \omega \hat{T} = \alpha \frac{\partial^2 T}{\partial x^2}$ 

这是一个简单的ODE。考虑到解在$\infty$不能发散，我们只取$\hat{T} = constant \cdot exp(-\sqrt{\frac{i\omega}{\alpha}}x)$ 

于是1）变为：$\hat{P} = k\sqrt{\frac{i\omega}{\alpha}} \hat{T}A \Rightarrow Z_T = \frac{1}{kA} \sqrt{\frac{\alpha}{i\omega}}$ 

Remark: 我们发现这个Fourier component是如果把那个根号下虚数算出来，就是一个amplitude递减的震荡的函数。这正是diffusion的含义。