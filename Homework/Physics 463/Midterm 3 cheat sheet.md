- Dispersion relations: $\omega(k)=2  \sqrt{ \frac{C}{m} }|\sin  \frac{ka}{2}|$, $\omega^{2}(k)= C\frac{m+M}{mM}\left( 1\pm \sqrt{ 1- \frac{4mM}{(m+M)^{2}}\sin ^{2} \frac{ka}{2} } \right)$
- Bose-Einstein integral: $g_{n}(\mathcal{z})= \frac{1}{\Gamma(n)}\int_{0}^{\infty}dx \frac{x^{n-1}}{\mathcal{z}^{-1}e^{ x}-1}\text{ for }0\leq \mathcal{z} <1$
- $\ln(x+1)= x- \frac{1}{2}x^{2}+ \frac{1}{3}x^{3}-\dots$
- $\epsilon_{ij}= \frac{1}{2}(\Lambda_{li}\Lambda_{lj}-\delta_{ij})$
- x-space unbounded and continuous:
	- $f(x)=\frac{1}{2\pi} \int \tilde{f}(q)e^{iqx},\ \tilde{f}(q)=\int dx f(x)e^{-iqx}$
	- $\int_{\mathbb{R}}dx e^{iqx}=2\pi\delta(q)$
- x-space bounded and continuous:
	- $f(x)=\sum_{q_{n}}\tilde{f}(q_{n})e^{iq_{n}x},\ \tilde{f}(q_{n})= \frac{1}{L}\int_{-\frac{L}{2}}^{\frac{L}{2}}dxf(x)e^{-iq_{n}x},\ q_{n}= \frac{2\pi n}{L}$
	- $\int_{-\frac{L}{2}}^{\frac{L}{2}}dx \exp(i(q_{n}-q_{n^{'}})x)=L\delta_{n,n^{'}}$
- x-space unbounded and discrete:
	- $f(x_{l})=\int_{-\frac{\pi}{a}}^{\frac{\pi}{a}}dq\tilde{f}(q)e^{iqx_{l}},\ \tilde{f}(q)= \frac{a}{2\pi}\sum_{l\in \mathbb{Z}}f(x_{l})e^{-iqx_{l}},\ x_{l}=la$
	- $\sum_{n\in \mathbb{Z}}e^{inx}=2\pi \sum_{m\in \mathbb{Z}}\delta(x-2\pi m)$
- x-space bounded and discrete:
	- $f(x_{l})=\sum_{n=0}^{N-1}\tilde{f}(q_{n})e^{iq_{n}x_{l}},\ \tilde{f}(q_{n})= \frac{1}{N}\sum_{l=0}^{N-1}f(x_{l})e^{-iq_{n}x_{l}},\ q_{n}= \frac{2\pi n}{Na}$
	- $\sum_{l=0}^{N-1}e^{iq_{n}x_{l}}=N\delta_{q_{n},0}$
- Dimond:
 ![[Drawing 2026-02-03 17.30.27.excalidraw|center|100]]![[Pasted image 20260208161837.png|center|100]]![[Pasted image 20260208161809.png|center|100]]
![[Pasted image 20260208161916.png|center|100]]
- $F=\int_{\mathbb{R}^{3}}d^{3}rn(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}}=\sum_{\mathbf{R}\in \Lambda}e^{-i\Delta \mathbf{k}\cdot \mathbf{R}}S_{\mathbf{G}},\ S_{\mathbf{G}}=\int_{\text{unit cell}}d^{3}rn(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}},\ S_{\mathbf{G}}=\sum_{\mathbf{r}_{i}}e^{-i\Delta \mathbf{k}\cdot \mathbf{r}_{i}}f_{i},\ f_{i}=\int_{\mathbb{R}^{3}}d^{3}rn_{i}(\mathbf{r})e^{-i\Delta \mathbf{k}\cdot \mathbf{r}},\ \Delta \mathbf{k}=\mathbf{k}^{'}-\mathbf{k}^{}$
- NFE selection rule: $\mathbf{k}^{'}-\mathbf{k}=\mathbf{G},\ k^{'}=k$. Perturbation: $E=E_{0}\pm|V_{\mathbf{G}}|$
- $\left( \frac{1}{m^{*}} \right)_{ij}=  \frac{1}{\hbar^{2}} \frac{\partial^{2}\epsilon}{\partial k_{i}\partial k_{j}}$
- If $E_{c}-\mu\gg kT$, $\mu-E_{v}\gg kT$,  $n=N_{c}\exp\left( - \frac{E_{c}-\mu}{kT} \right),\ p=N_{v}\exp\left( - \frac{\mu-E_{v}}{kT} \right)$, $N\propto(m^{*}T)^{d/2}$, $\mu= \frac{E_{c}+E_{v}}{2}+ \frac{d}{4} kT\ln\left( \frac{m_{h}}{m_{e}} \right)= \frac{E_{c}+E_{v}}{2}+ \frac{1}{2}kT\ln\left( \frac{N_{v}}{N_{c}} \right)$
- $E_{\text{ionization}}= 13.6\text{ eV}\times \frac{\frac{m^{*}_{}}{m}}{\epsilon^{2}},\ r_{d}=a_{0} \times \frac{\epsilon}{m^{*}_{} /m}$ 
- $\sigma=n|e|\mu_{e}+p|e|\mu_{h},\ \mu= \frac{|e| \tau}{m^{*}}$, $R_{H}=- \frac{1}{n|e|},\ R_{H}= \frac{1}{p|e|}$, $R_{H}= \frac{p\mu_{h}^{2}-n\mu_{e}^{2}}{|e|(p\mu_{h}+n\mu_{e})^{2}}$
- $N_{c}=2\left( \frac{m^{*}kT}{2\pi \hbar^{2}} \right)^{3/2}$, thermal ionization of donors: $n=(N_{c}N_{d})^{1/2}e^{-(E_{c}-E_{d})/2kT}$, $N_{d}$ is the donor concentration
- $\mathbf{k}_{h}=-\mathbf{k}_{e},\ \epsilon_{h}(\mathbf{k}_{h})=-\epsilon_{e}(\mathbf{k}_{e}),\ \mathbf{v}_{h}(\mathbf{k}_{h})=\mathbf{v}_{e}(\mathbf{k}_{e})$





