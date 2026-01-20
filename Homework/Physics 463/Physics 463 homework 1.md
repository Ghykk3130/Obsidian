# 1. 
We have:
$$\begin{align}
\tilde{f}(q) & = \int_{\mathbb{R}}dx e^{- \frac{x^{2}}{2a^{2}}}e^{-iqx} \\
 & = \int dx \exp\left( - \frac{1}{2a^{2}}(x+ia^{2}q)^{2}- \frac{a^{2}}{2}q^{2} \right) \\
 & = \sqrt{ 2\pi a^{2} }\exp\left( - \frac{a^{2}}{2}q^{2} \right)
\end{align}$$
Note that the width of the original function is $\sigma_{x}=a$, and the width of the transformed function is $\sigma_{q}= \frac{1}{a}$. Then we have that $\sigma_{x}\sigma_{q}=1$.

![[Pasted image 20260117161122.png|center|400]]

![[Pasted image 20260117160513.png|center|400]]

It's evident from the plot that the wider the x-space function is, the narrower the q-space function would be, consistent with our argument above.

# 2.
We first compute:
$$\begin{align}
g(q) & = \int_{\mathbb{R}}dxf(x)e^{-iqx} \\
\end{align}$$
Then:
$$\begin{align}
h(s) & = \int_{\mathbb{R}}dqg(q)e^{-iqs} \\
 & = \int dq\int dxf(x)e^{-iqx}e^{-iqs} \\
 & = \int{dx}f(x)\int dq e^{-iqx}e^{-iqs} \\
 & = \int dx f(x)2\pi\delta(x+s) \\
 & = 2\pi f(-s)
\end{align}$$
# 3.
We require that $q$ satisfies the periodic boundary condition:
$$q_{m}L= 2\pi m\text{ where }L=5a\text{ is the x-space length of the lattice}$$
Note that $q$ is quantized with index $m$. Then:
$$q_{m}= \frac{2\pi m}{L}= \frac{2\pi m}{5a}$$
Clearly, the x-space lattice length determines the separation $\Delta q$. The longer $L$ is, the smaller $\Delta q$ will be.

Observe that:
$$\psi_{q_{m}+ \frac{2\pi}{a}}(x_{l})= \exp\left( iq_{m}x_{l}+ i \frac{2\pi}{a}la\right)=\exp(iq_{m}x_{l})=\psi_{q_{m}}(x_{l})$$
Therefore, can require that:
$$q_{m}\in\left[ 0, \frac{2\pi}{a} \right)\implies m=0,1,2,3,4,$$
$q$ outside this range does not give rise to new basis functions of the Hilbert space. 

![[Drawing 2026-01-17 16.28.15.excalidraw|center|400]]

# 4.
## a.

If $f$ is real, we have:
$$\begin{align}
\tilde{f}(q)^{*} & = \left(\int_{\mathbb{R}}dxf(x)e^{-iqx}\right)^{*} \\
 & = \int dx f(x) e^{iqx} \\
 & = \int dxf(x)e^{-i(-q)x} \\
 & = \tilde{f}(-q)
\end{align}$$
If $f$ is imaginary, we have:
$$\begin{align}
\tilde{f}(q)^{*} & = \left( \int_{\mathbb{R}}dxf(x)e^{-iqx} \right)^{*} \\
 & = -\int dxf(x)e^{iqx} \\
 & = -\int dx f(x)e^{-i(-q)x} \\
 & = - \tilde{f}(-q)
\end{align}$$
## b.

Let $f$ be even. Then:
$$\begin{align}
\tilde{f}(-q) & = \int_{\mathbb{R}}dx f(x)e^{iqx} \\
  & = \int_{\mathbb{R}}dxf(-x)e^{-iq(-x)} \\
 & = \int_{\mathbb{R}} \left| \frac{\partial(-x)}{\partial x}  \right| d(-x)f(-x)e^{-iq(-x)}  \\
 & = \int_{\mathbb{R}} d(-x)f(-x)e^{-iq(-x)} \\
 & = \int_{\mathbb{R}}dx f(x)e^{-iqx} \\
 & = \tilde{f}(q)
\end{align}$$
Then $\tilde{f}$ is even.

Let $f$ be odd. Then:
$$\begin{align}
\tilde{f}(-q)& = \int_{\mathbb{R}}dx f(x)e^{iqx} \\
  & = -\int_{\mathbb{R}}dxf(-x)e^{-iq(-x)} \\
 & = -\int_{\mathbb{R}} \left| \frac{\partial(-x)}{\partial x}  \right| d(-x)f(-x)e^{-iq(-x)}  \\
 & = -\int_{\mathbb{R}} d(-x)f(-x)e^{-iq(-x)} \\
 & = -\int_{\mathbb{R}}dx f(x)e^{-iqx} \\
 & = -\tilde{f}(q)
\end{align}$$
Then $\tilde{f}$ is odd.
## c.

Let $f$ be real, even. Then:
$$\tilde{f}(q)^{*}=f(-q)=f(q)\implies \tilde{f}\text{ is real and even}$$
Let $f$ be imaginary, even. Then:
$$\tilde{f}(q)^{*}=-f(-q)=-f(q)\implies \tilde{f}\text{ is imaginary and even}$$
Let $f$ be real, odd. Then:
$$\tilde{f}^{*}(q)= \tilde{f}(-q)=-\tilde{f}(q)\implies \tilde{f}\text{ is imaginary and odd}$$
Let $f$ be imaginary, odd. Then:
$$\tilde{f}^{*}(q)=-\tilde{f}(-q)=\tilde{f}(q)\implies \tilde{f}\text{ is real and odd}$$
## d.
$$\begin{align}
\tilde{f^{'}} & = \int_{\mathbb{R}}dx f^{'} (x)e^{-iqx} \\
 & = \int dx f(x+a)e^{-iqx} \\
 & = \int dx f(x)e^{-iqx}e^{iqa} \\
 & = e^{iqa}\tilde{f}(q)
\end{align}$$
# 5.

We have:
$$\begin{align}
\tilde{\psi}_{T}(q) & = \int_{\mathbb{R}}dx \sum_{-\infty}^{\infty}\delta(x-nT)e^{-iqx} \\
 & = \sum_{-\infty}^{\infty} \int dx\delta(x-nT)e^{-iqx} \\
 & = \lim_{ N \to \infty } \sum_{-N}^{N}e^{-iqnT} \\
 & = \lim_{ N \to \infty } D_{N}(-qT) \\
 & = 2\pi \sum_{m=-\infty}^{\infty}\delta(-qT-2\pi m) \\
 & = 2\pi \sum_{m=-\infty}^{\infty}\delta(qT-2\pi m) \\
 & = \frac{2\pi}{T} \sum_{m=-\infty}^{\infty}\delta\left( q- \frac{2\pi m}{T} \right)
\end{align}$$



