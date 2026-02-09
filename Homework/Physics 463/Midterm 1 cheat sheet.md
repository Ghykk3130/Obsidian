# 1. FT
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


