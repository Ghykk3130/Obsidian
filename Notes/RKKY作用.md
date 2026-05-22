# 1. 线性响应

考虑一自由电子气。由于自旋简并，总自旋为零。现在绝热地放入一些自旋。令新放入的自旋密度为$\mathbf{s} ^{\text{ext}}(\mathbf{r})$。这些自自旋密度和电子交换作用，产生自旋屏蔽。

参考[[Friedel震荡]]，我们定义线性响应的本构关系：
$$\begin{align}
 & s ^{\text{ext}}(\mathbf{r})=\int d^{3}r^{'} \chi
\end{align}$$






忽略电子间的关联。写出单电子 Hamiltonian：$H= \frac{p^{2}}{2m} - \mathbf{h}^{\text{ext}}(\mathbf{r}) \cdot \hat{\mathbf{s}}$。其中电子自旋算符 $\hat{\mathbf{s}} = \frac{1}{2}\boldsymbol{\sigma}$。

将 $-\mathbf{h}^{\text{ext}}(\mathbf{r}) \cdot \frac{\boldsymbol{\sigma}}{2}$ 当作微扰，$\{ \ket{\mathbf{k}, \alpha} \}$ 当作 unperturbed ket（其中 $\alpha, \beta \in \{\uparrow, \downarrow\}$ 为自旋指标）。那么：
$$
\begin{align}

\bra{\mathbf{k}^{'}, \beta} \left( -\mathbf{h}^{\text{ext}}(\mathbf{r}) \cdot \frac{\boldsymbol{\sigma}}{2} \right) \ket{\mathbf{k}, \alpha} & = - \frac{1}{2V}\int d^{3}r \mathbf{h}^{\text{ext}}(\mathbf{r}) \cdot \boldsymbol{\sigma}_{\beta\alpha} e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} \ & = - \frac{\mathbf{h}^{\text{ext}}(\mathbf{k}^{'}-\mathbf{k}^{}) \cdot \boldsymbol{\sigma}_{\beta\alpha}}{2V}

\end{align}
$$

于是一阶微扰波函数为：

$$ \ket{\psi_{\mathbf{k}\alpha}} = \ket{\mathbf{k}\alpha} + \frac{1}{2V}\sum_{\mathbf{k}^{'}, \beta}\ket{\mathbf{k}^{'}\beta} \frac{\mathbf{h}^{\text{ext}}(\mathbf{k}^{'}-\mathbf{k}^{}) \cdot \boldsymbol{\sigma}_{\beta\alpha}}{\epsilon_{\mathbf{k}}-\epsilon_{\mathbf{k}^{'}}} $$

实空间自旋密度算符为 $\hat{\mathbf{s}}(\mathbf{r}) = \frac{1}{2}\boldsymbol{\sigma} \delta(\hat{\mathbf{x}} - \mathbf{r})$。我们计算诱导自旋密度 $\mathbf{s}^{\text{int}}(\mathbf{r})$（背景由于自旋简并抵消为0）：
$$
\begin{align}

\mathbf{s}^{\text{int}}(\mathbf{r}) & = \sum_{\mathbf{k}, \alpha } \bra{\psi_{\mathbf{k}\alpha}} \hat{\mathbf{s}}(\mathbf{r}) \ket{\psi_{\mathbf{k}\alpha}} f_{F}(\epsilon_{\mathbf{k}}) \

& = \frac{1}{4V^{2}} \sum_{\mathbf{k},\mathbf{k}^{'}} \sum_{\alpha,\beta} \left( e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} \boldsymbol{\sigma}_{\alpha\beta} \frac{\mathbf{h}^{\text{ext}}(\mathbf{k}^{'}-\mathbf{k}^{}) \cdot \boldsymbol{\sigma}_{\beta\alpha}}{\epsilon_{\mathbf{k}}-\epsilon_{\mathbf{k}^{'}}} f_{F}(\epsilon_{\mathbf{k}})+\text{c.c.} \right)

\end{align}
$$


这里是与电荷推导唯一不同的地方：我们需要处理泡利矩阵的乘积。取自旋密度的第 $i$ 个分量，利用泡利矩阵迹的恒等式 $\sum_{\alpha\beta} \sigma_{\alpha\beta}^i \sigma_{\beta\alpha}^j = \text{Tr}(\sigma^i \sigma^j) = 2\delta_{ij}$：

$$ s_i^{\text{int}}(\mathbf{r}) = \frac{1}{4V^{2}} \sum_{\mathbf{k},\mathbf{k}^{'}} \left( e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} 2\delta_{ij} \frac{h_j^{\text{ext}}(\mathbf{k}^{'}-\mathbf{k}^{})}{\epsilon_{\mathbf{k}}-\epsilon_{\mathbf{k}^{'}}} f_{F}(\epsilon_{\mathbf{k}})+\text{c.c.} \right) $$

化简为矢量形式：

$$ \mathbf{s}^{\text{int}}(\mathbf{r}) = \frac{1}{2V^{2}} \sum_{\mathbf{k},\mathbf{k}^{'}} \left( e^{i(\mathbf{k}-\mathbf{k}^{'})\cdot \mathbf{r}} \frac{\mathbf{h}^{\text{ext}}(\mathbf{k}^{'}-\mathbf{k}^{})}{\epsilon_{\mathbf{k}}-\epsilon_{\mathbf{k}^{'}}} f_{F}(\epsilon_{\mathbf{k}})+\text{c.c.} \right) $$

令 $\mathbf{k}\leadsto \mathbf{k}+ \frac{\mathbf{q}}{2},\ \mathbf{k}^{'}\leadsto \mathbf{k}- \frac{\mathbf{q}}{2}$，与 $\mathbf{s}^{\text{int}}(\mathbf{r})= \frac{1}{V}\sum_{\mathbf{q}}\mathbf{s}^{\text{int}}(\mathbf{q})e^{i\mathbf{q}\cdot \mathbf{r}}$ 比较，严格对应得到：

$$ \chi_s(\mathbf{q}) = -\frac{1}{2V}\sum_{\mathbf{k}} \frac{f_{F}\left( \epsilon_{\mathbf{k}+ \frac{\mathbf{q}}{2}} \right)-f_{F}\left( \epsilon_{\mathbf{k}- \frac{\mathbf{q}}{2}} \right)}{\epsilon_{\mathbf{k}+ \frac{\mathbf{q}}{2}}-\epsilon_{\mathbf{k}- \frac{\mathbf{q}}{2}}} $$

比较你得出的电荷极化率 $\chi(\mathbf{q})$，我们发现除去常数前缀外，求和部分完全一致。设 $\chi_0 = \frac{m k_F}{2\pi^2\hbar^2}$ 为单自旋态密度，积分结果同样由 Lindhard 函数给出：

$$ \boxed{\chi_s(\mathbf{q}) = \chi_0 F(x)} $$

### 3. RKKY 震荡相互作用

考虑在原点放入一个局域磁矩 $\mathbf{S}_1$。它通过交换作用 $-J \mathbf{S}_1 \cdot \hat{\mathbf{s}}$ 与电子耦合。

这等价于施加了一个外部的“点磁荷”场 $\mathbf{h}^{\text{ext}}(\mathbf{r}) = J\mathbf{S}_1\delta(\mathbf{r})$。于是：

$$ \mathbf{h}^{\text{ext}}(\mathbf{q}) = \int d^{3}r J\mathbf{S}_1\delta(\mathbf{r}) e^{-i\mathbf{q}\cdot \mathbf{r}} = J\mathbf{S}_1 $$

> 注意：库仑势的傅里叶变换是 $\frac{4\pi Q}{q^2}$，而局域交换势的傅里叶变换是常数 $J\mathbf{S}_1$。

我们知道 $\mathbf{s}^{\text{int}}(\mathbf{q}) = \chi_s(\mathbf{q})\mathbf{h}^{\text{ext}}(\mathbf{q}) = J \chi_s(\mathbf{q}) \mathbf{S}_1$。故实空间中电子自旋极化密度为：
$$
\begin{align}

\mathbf{s}^{\text{int}}(\mathbf{r}) & = \frac{1}{V}\sum_{\mathbf{q}} J \chi_s(\mathbf{q}) \mathbf{S}_1 e^{i\mathbf{q}\cdot \mathbf{r}} \

& \approx \int \frac{d^{3}q}{(2\pi)^3} J \chi_0 F\left(\frac{q}{2k_F}\right) \mathbf{S}_1 e^{i\mathbf{q}\cdot \mathbf{r}} \

& = \frac{J \chi_0}{2\pi^2 r} \int_0^\infty dq , q F\left(\frac{q}{2k_F}\right) \sin(qr) \mathbf{S}_1

\end{align}
$$
现在在位置 $\mathbf{r}$ 处放入第二个局域磁矩 $\mathbf{S}_2$。它感受到的能量为 $H_{\text{RKKY}} = -J \mathbf{S}_2 \cdot \mathbf{s}^{\text{int}}(\mathbf{r})$：

$$ H_{\text{RKKY}}(\mathbf{r}) = - \frac{J^2 \chi_0}{2\pi^2 r} (\mathbf{S}_1 \cdot \mathbf{S}_2) \int_0^\infty dq \, q F\left(\frac{q}{2k_F}\right) \sin(qr) $$



**渐近分析：**

依然在 $x \approx 1$ ($q \approx 2k_F$) 附近展开 Lindhard 函数。发散项依然由 $F_{\text{sing}}(q) \propto \frac{q-2k_F}{2k_F}\ln|q-2k_F|$ 主导。

利用上一轮非解析积分的严格结果：

$$ \int_0^\infty dq \, q \sin(qr) (q-2k_F)\ln|q-2k_F| \sim \frac{\cos(2k_F r)}{r^2} $$

将这个 $1/r^2$ 的积分结果与前面的前缀 $1/r$ 相乘，我们得到：

$$ H_{\text{RKKY}}(\mathbf{r}) \propto - J^2 \frac{\cos(2k_F r)}{r^3} \mathbf{S}_1 \cdot \mathbf{S}_2 $$

于是，两个自旋之间的有效相互作用同样呈现波矢为 $2k_F$ 的交替震荡，并以 $\frac{1}{r^{3}}$ 衰减。这证明了你的直觉：RKKY 相互作用和 Friedel 震荡在数学结构上完全对应，前者是体系对点电荷（标量）的响应，后者是体系对点磁矩（自旋矢量）的响应。