# 1.
I have:
$$\begin{align}
\kappa_{S} & = - \frac{1}{V}\left(  \frac{\partial V}{\partial p} \right)_{S} \\
 & = \frac{1}{V} \frac{( \partial S / \partial p)_{V}}{(\partial S / \partial V)_{p}}
\end{align}$$
Now compute:
$$\begin{align}
\left(  \frac{\partial S}{\partial p} \right)_{V} & = \left(  \frac{\partial S}{\partial T} \right)_{V}\left(  \frac{\partial T}{\partial p} \right)_{V} \\
 & = \frac{C_{V}}{T}\left(  \frac{\partial T}{\partial p} \right)_{V}
\end{align}$$
Find that:
$$\begin{align}
\left( \frac{\partial T}{\partial p} \right)_{V} & = - \frac{(\partial V / \partial p)_{T}}{(\partial V / \partial T)_{p}} \\
 & = - \frac{-V\kappa_{T}}{V\beta_{p}} \\
 & = \frac{\kappa_{T}}{\beta_{p}}
\end{align}$$
So:
$$\left( \frac{\partial S}{\partial p} \right)_{V}= \frac{C_{V}\kappa_{T}}{\beta_{p}T}$$
Now compute:
$$\begin{align}
\left(  \frac{\partial S}{\partial V} \right)_{p} & =\left(  \frac{\partial S}{\partial T} \right)_{p}\left(  \frac{\partial T}{\partial V} \right)_{p} \\
 & = \frac{C_{p}}{T} \frac{1}{V\beta_{p}}
\end{align}$$
Therefore:
$$\begin{align}
\kappa_{S} & = \frac{1}{V} \frac{C_{V}\kappa_{T}}{T\beta_{p}} \frac{TV\beta_{p}}{C_{p}} \\
 &=  \frac{C_{V}}{C_{p}}\kappa_{T} \\
 &= \frac{C_{p}- \frac{TV\beta^{2}_{p}}{\kappa_{T}}}{C_{p}}\kappa_{T} \\
 & = \kappa_{T}- \frac{TV\beta^{2}_{p}}{C_{p}}
\end{align}$$
Then:
$$\kappa_{T}=\kappa_{S}+ \frac{\beta^{2}_{p}VT}{C_{P}}$$
