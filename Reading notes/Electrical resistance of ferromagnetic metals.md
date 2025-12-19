# Fermi golden rule

令$H$为引起跃迁的微扰Hamiltonian。令$\Gamma_{i\rightarrow j}$为从$i\rightarrow f$跃迁的概率对时间的Radon-Nikodym导数。我们有：
$$\Gamma_{i\rightarrow j} = \frac{2\pi}{\hbar} |\bra{i} H\ket{j} |^{2} \delta(E_{i}-E_{j})(1-f_{j})$$
其中，$f_{j}$为末态$\ket{j}$的占据数。

我们可以进而求跃迁到某一能带中的时间概率密度：
$$\begin{align}
\Gamma_{i\rightarrow \text{band }\epsilon_{n}} & =\sum_{\vec{k}}\frac{2\pi}{\hbar} |\bra{i} H\ket{n, \vec{k}}   |^{2}\delta(E_{i}-\epsilon_{n}(\vec{k}))(1-f(\vec{k})) \\
 & = \frac{V}{(2\pi)^{3}}\int d^{3}k \frac{2\pi}{\hbar} |\bra{i} H\ket{n, \vec{k}}   |^{2}\delta(E_{i}-\epsilon_{n}(\vec{k}))(1-f(\vec{k})) \\
 & = \int d\epsilon \rho_{n}(\epsilon) \frac{2\pi}{\hbar}|\bra{i} H \ket{n,\vec{k}}  |^{2} \delta(E_{i}-\epsilon)(1-f(\vec{k})) \\
 & = \sum_{\vec{k}\text{ s.t. } \epsilon_{\vec{k}}=E_{i}} \frac{2\pi}{\hbar} |\bra{i} H \ket{n,\vec{k}}   |^{2} \rho_{n}(E_{i})(1-f(\vec{k}))
\end{align}$$
其中，$\rho_{n}(\epsilon)$为能带$\epsilon_{n}$决定出来的态密度。

一般考虑$\epsilon_{F}$附近的band之间的跳跃。即：
$$\Gamma= \sum_{\vec{k}\text{s.t. }\epsilon_{\vec{k}}=\epsilon_{F}} \frac{2\pi}{\hbar}|\bra{i} H \ket{n,\vec{k}} |^{2} \rho_{n}(\epsilon_{F})(1-f(\vec{k}))$$
# s-d interband transition

考虑d-band顶端被$\epsilon_{F}$截断，所以d-band与s-band共同参与导电。但是对于一般valence band为d-band，conduction band 为s-band。我们试图argue s-band中的载流子很容易被散射入d-band，造成resistance。

我们有：
- d-band因为overlap小，曲率小，所以effective mass大，不怎么贡献电流。所以如果s-band载流子被大量散射入d-band，那电流就会显著减小。
- 因为d-band degeneracy比s-band大，所以态密度更高。由Fermi golden rule，电子就容易进入d-band。

磁化的影响：
- 在Curie temperature一下，d-band电子自旋自发ordering。存在align和anti-align两种，则d-band劈裂。
- 劈裂的一支沉入Fermi sea，由于$f(\vec{k})$充满，由Fermi golden rule，不再有电子散射进入。
- s-band电子只能进入另外一支。而态密度减小了。电子没那么容易被散射进这支d-band。所以电阻减小。
![[Pasted image 20251218234206.png|center|300]]




