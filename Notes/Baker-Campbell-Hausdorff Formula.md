考虑两个李代数中元素$A,B$。我们想知道如果我们写：
$$e^Ae^B=e^C$$
那么$C$是什么？

我们可以直接暴力计算出前几项。例如我们大概近似一下得到：
$$\begin{align}
e^Ae^B & \approx\left( 1+A+ \frac{1}{2}A^{2} + \frac{1}{6}A^{3} \right)\left( 1+B+ \frac{1}{2}B^{2}+ \frac{1}{6 }B^{3} \right) \\
 & \approx 1+A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3}
\end{align}$$
回忆起$\ln(1+x)=x- \frac{1}{2}x^{2}+ \frac{1}{3}x^{3}-\dots$ 于是：
$$\begin{align}
C  & = \ln(e^Ae^B) \\
 & \approx \ln\left( 1+A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \right) \\
 & \approx \left( A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \right) \\
 & - \frac{1}{2}\left( A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \right)^{2}  \\
 & + \frac{1}{3} \left(A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3}\right)^{3} \\
 & \approx A+B+ \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB+ \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \\
 & - \frac{1}{2}\left( A^{2}+AB+ \frac{1}{2}A^{3}+ \frac{1}{2}AB^{2}+ A^{2}B + BA+B^{2}+ \frac{1}{2}BA^{2} + \frac{1}{2}B^{3}+ BAB+ \frac{1}{2}A^{3}+ \frac{1}{2}A^{2}B+ \frac{1}{2}B^{2}A+ \frac{1}{2}B^{3} + ABA+ AB^{2}\right) \\
 & + \frac{1}{3}(A^{3}+A^{2}B+ABA+AB^{2}+B^{3}+B^{2}A+BAB+BA^{2}) \\
\end{align}$$
收集一次项：
$$\begin{align}
\mathcal{O}(1):A+B
\end{align}$$
收集二次项：
$$\begin{align}
\mathcal{O}(2) :&  \frac{1}{2}A^{2}+ \frac{1}{2}B^{2}+AB- \frac{1}{2}(A^{2}+AB+BA+B^{2}) \\
 & = \frac{1}{2}[A,B]
\end{align}$$
收集三次项：
$$\begin{align}
\mathcal{O}(3): &  \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \\
 & - \frac{1}{2}\left( \frac{1}{2}A^{3}+ \frac{1}{2}AB^{2}+A^{2}B+ \frac{1}{2}BA^{2}+ \frac{1}{2}B^{3}+BAB+ \frac{1}{2}A^{3}+ \frac{1}{2}A^{2}B+ \frac{1}{2}B^{2}A+ \frac{1}{2}B^{3}+ABA+AB^{2} \right)  \\
 & + \frac{1}{3}\left(A^{3}+A^{2}B+ABA+AB^{2}+B^{3}+B^{2}A+BAB+BA^{2}\right) \\
 & = \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \\
 & - \frac{1}{2}\left(  A^{3}+B^{3}+ \frac{3}{2}AB^{2}+ \frac{3}{2}A^{2}B+ \frac{1}{2}BA^{2}+ \frac{1}{2}B^{2}A+BAB+ABA \right) \\
 & +\frac{1}{3} \left(A^{3}+A^{2}B+ABA+AB^{2}+B^{3}+B^{2}A+BAB+BA^{2}\right) \\
 & = \frac{1}{2}A^{2}B+ \frac{1}{2}AB^{2}+ \frac{1}{6}A^{3}+ \frac{1}{6}B^{3} \\
 & - \frac{1}{2}A^{3}- \frac{1}{2}B^{3}- \frac{3}{4}AB^{2}- \frac{3}{4}A^{2}B- \frac{1}{4}BA^{2}- \frac{1}{4}B^{2}A- \frac{1}{2}BAB- \frac{1}{2}ABA \\
 &  +\frac{1}{3} \left(A^{3}+A^{2}B+ABA+AB^{2}+B^{3}+B^{2}A+BAB+BA^{2}\right) \\
 & =  \frac{1}{12}A^{2}B+ \frac{1}{12}AB^{2}+\frac{1}{12}BA^{2}+ \frac{1}{12}B^{2}A- \frac{1}{6}BAB- \frac{1}{6}ABA \\
 & = \frac{1}{12}(A^{2}B+AB^{2}+BA^{2}+B^{2}A-2BAB-2ABA) \\
 & = \frac{1}{12}((A-B)AB+AB(B-A)+BA(A-B)+(B-A)BA) \\
 &=\frac{1}{12}(AB(B-A)-(B-A)AB+BA(A-B)-(A-B)BA) \\
 & = \frac{1}{12}([AB,B-A]+[BA,A-B]) \\
 & = \frac{1}{12}( [AB,B]-[AB,A]+[BA,A]-[BA,B]) \\
 & = \frac{1}{12}([AB,B]B-A[B,A]+[B,A]A-B[A,B]) \\
 & = \frac{1}{12}([[A,B],B]+[[B,A],A]) \\
 & = \frac{1}{12}([B,[B,A]]+[A,[A,B]])
\end{align}$$
当然我们还可以计算后面任意多次项。可以证明它们全部可以用nested commutator表示。

>[!Note] Theorem (Baker-Campbell-Hausdorff formula)
>$$e^Ae^B=\exp\left( A+B+ \frac{1}{2}[A,B]+ \frac{1}{12}[A,[A,B]]+ \frac{1}{12}[B,[B,A]]+\dots \right)$$
