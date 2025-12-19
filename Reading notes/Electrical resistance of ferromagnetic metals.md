# Fermi golden rule

令$H$为引起跃迁的微扰Hamiltonian。令$\Gamma_{i\rightarrow j}$为从$i\rightarrow f$跃迁的概率对时间的Radon-Nikodym导数。我们有：
$$\Gamma_{i\rightarrow j} = \frac{2\pi}{\hbar} |\bra{i} H\ket{j} |^{2} \delta(E_{i}-E_{j})$$
我们可以进而求跃迁到某一能带中的时间概率密度：
$$\begin{align}
\Gamma_{i\rightarrow \text{band }\epsilon_{n}} & =\sum_{\vec{k}}\frac{2\pi}{\hbar} |\bra{i} H\ket{n, \vec{k}}   |^{2}\delta(E_{i}-\epsilon_{n}(\vec{k})) \\
 & = \frac{V}{(2\pi)^{3}}\int d^{3}k \frac{2\pi}{\hbar} |\bra{i} H\ket{n, \vec{k}}   |^{2}\delta(E_{i}-\epsilon_{n}(\vec{k})) \\
 & = \int d\epsilon \rho_{n}(\epsilon) \frac{2\pi}{\hbar}|\bra{i} H \ket{n,\vec{k}}  |^{2} \delta(E_{i}-\epsilon) \\
 & = \sum_{\vec{k}\text{ s.t. } \epsilon_{\vec{k}}=E_{i}} \frac{2\pi}{\hbar} |\bra{i} H \ket{n,\vec{k}}   |^{2} \rho_{n}(E_{i})
\end{align}$$
其中，$\rho_{n}(\epsilon)$为能带$\epsilon_{n}$决定出来的态密度。


# s-d interband transition

考虑metallic ferromagnetic metals。valence band为d-band，conduction band 为s-band。我们试图argue s-band中的载流子很容易被散射入d-band，造成resistance。

我们有：
- d-band因为overlap小，曲率小，所以effective mass大，不怎么贡献电流。所以如果s-band载流子被大量散射入d-band，那电流就会显著减小。
- 因为d-band degeneracy比s-band大，所以态密度更高。由Fermi golden rule，电子就容易进入d-band。


