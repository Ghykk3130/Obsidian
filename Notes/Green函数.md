# 1. 推迟Green函数

令$A,B$为Schrodinger绘景中的可观测量。令$A(t)=e^{iHt}Ae^{-iHt}$为Heisenberg绘景中的$A$算子。那么定义Green函数为：

>[!Note] Definition 1.1
>Define the retarded and advanced Green's functions:
>$$G^{R}_{AB}(t)=-i\theta(t) \langle [A(t),B]_{\pm}\rangle,\ G^{A}_{AB}(t)=i\theta(-t)\langle [A(t),B]_{\pm}\rangle$$
>where $+$ is for bosons and $-$ is for fermions.

我们可以将Green函数变换到频域。为了收敛性，给频率加上小虚部。我们有：
$$\begin{align}
G^{R}_{AB}(\omega)=\int_{-\infty}^{\infty}dt e^{i(\omega+i 0^{+})t}G^{R}_{AB}(t)=\langle \langle A|B \rangle \rangle_{\omega}
\end{align}$$
$\langle \langle A|B\rangle \rangle_{\omega}$被称为Zubarev记号。我们计算：
$$\begin{align}
G^{R}_{AB}(\omega) & = -i \int_{-\infty}^{\infty}dt e^{i(\omega+i 0^{+})t}\theta(t)  \frac{1}{Z} \sum_{n} e^{-\beta E_{n}} \bra{n} [A(t),B]_{\pm}\ket{n} \\
 & = -\frac{i}{Z} \int_{0}^{\infty} dt e^{i(\omega+i 0^{+})t} \sum_{n} e^{-\beta E_{n}}\left[ \bra{n} e^{iHt}Ae^{-iHt}B \ket{n}\pm \bra{n} B e^{iHt}A e^{-iHt}\ket{n} \right]    \\
 & = -\frac{i}{Z} \int dt e^{i(\omega+i 0^{+})t}\sum_{n,m}e^{-\beta E_{n}}[\bra{n} e^{iHt}A e^{-iHt}\ket{m} \bra{m} B\ket{n} \pm \bra{n} B \ket{m} \bra{m} e^{iHt}Ae^{-iHt}\ket{n}  ] \\
 & = -\frac{i}{Z} \sum_{n,m}e^{-\beta E_{n}} \int dt [\exp(i(\omega+i 0^{+}+E_{n}-E_{m})t)A_{nm}B_{mn}\pm \exp(i(\omega+i 0^{+}+E_{m}-E_{n})t)B_{nm}A_{mn}] \\
 & = -\frac{i}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[ \frac{\exp(i(\omega+i 0^{+}+E_{n}-E_{m})\infty)-1}{i(\omega+i 0^{+}+E_{n}-E_{m})}A_{nm}B_{mn}\pm \frac{\exp(i(\omega+i 0^{+}+E_{m}-E_{n})\infty)-1}{i(\omega+i 0^{+}+E_{m}-E_{n})}B_{nm}A_{mn} \right] 
\end{align}$$
由于$i 0^{+}$，所以分子可以收敛。那么得到Lehmann谱表示：
$$\boxed{G^{R}_{AB}(\omega)=  \frac{1}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[  \frac{A_{nm}B_{mn}}{\omega+i 0^{+}+E_{n}-E_{m}}\pm \frac{B_{nm}A_{mn}}{\omega+i 0^{+}+E_{m}-E_{n}}  \right]}$$
容易看出，另一种写法是：
$$G^{R}_{AB}(\omega)= \frac{1}{Z}\sum_{n}e^{-\beta E_{n}}\left[ \bra{n} A \frac{1}{\omega+i 0^{+}+E_{n}-H}B\ket{n}\pm \bra{n} B \frac{1}{\omega+i 0^{+}+E_{n}-H}A\ket{n}  \right]$$
同理，容易计算超前Green函数：
$$\begin{align}
G^{A}_{AB}(\omega)=   \frac{1}{Z} \sum_{n,m}e^{-\beta E_{n}}\left[  \frac{A_{nm}B_{mn}}{\omega-i 0^{+}+E_{n}-E_{m}}\pm \frac{B_{nm}A_{mn}}{\omega-i 0^{+}+E_{m}-E_{n}}  \right]
\end{align}$$
所以得到：
$$\boxed{G^{R}_{AB}(\omega)=G^{A*}_{AB}(\omega)}$$



