
考虑一个半导体laser，又一个current source提供载流子（激发态的电子）。用$N,S$表示载流子和光子的体密度。想要这两个随时间演化的微分方程。

## 对于载流子：

流入电流显然增加载流子密度。因为是数量，所以要除以$q$。因为是体密度，所以要除以半导体体积$V$。 所以第一项是$\frac{I}{qV}$ 。 

激发态电子还要自发辐射，跃迁到低能（就不算作载流子了）。设自发辐射characteristic time为$\tau_n$，则这一项贡献为$-\frac{N}{\tau_n}$。

激发态电子还要i）受激辐射来减少 ii） 第能级电子吸收光子跃迁上来。由Einstein AB coefficient可得这一项贡献为$-B_{21}NI +B_{12}N_0I$ 
因为$I$显然正比于光子体密度，我们rewrite一下将这一项写成$-g(N-N_0) S$ 

## 对于光子：

第一项贡献显然是从高能级受激辐射产生的光子减去被电子吸收回去的光子。但是因为这是一个产生光的原件，只有一部分光会留在半导体内。我们用$\Gamma$表示这个fraction。 于是第一项为$\Gamma g(N - N_0)S$ 。

光子自身寿命导致数量减少。第二项为$-\frac{S}{\tau_p}$ , where $\tau_p$ is the characteristic time of photon decay.

此外还有自发辐射的光子。但是因为是自发辐射，只有一部分是和我们想要的laser光子frequency，polarization等是相同的。这个fraction用$\beta$表示。于是第三项为$\beta \frac{N}{\tau_n}$ 。