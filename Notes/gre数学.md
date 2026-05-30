
gre常见思路：
- 看个位
- 背诵正态分布多少sigma对应多少比例


1.

![[Pasted image 20260527205626.png|center|500]]
想要构造$x=5\text{ mod }2=6\text{ mod }7$。容易证明，若$y=x=5\text{ mod }2=6\text{ mod }7$，那么$x-y=0\text{ mod }5=0\text{ mod }7$。而$\text{gcd}(5,7)=1$。于是$x-y=0\text{ mod }35$。那么，我们可以只在$\mathbb{Z} / 35$中寻找符合条件的构造。在$1 \sim 35$中，求出所有符合$x=5\text{ mod }2$的数，选取其中质数，然后除以7看是否余$6$。

2.
![[Pasted image 20260527210253.png|center|500]]
只需要看$a_{n}$除以$3$的余数构成的数列即可。一定会算出循环。看有多少余数为零的。

3.
![[Pasted image 20260527210615.png|center|400]]
别被坑。想清楚是循环到哪一位。

4.
![[Pasted image 20260527210945.png|center|400]]
除了fiction和biography，还有其它书。

5.

![[Pasted image 20260528204229.png|center|500]]
实际上，用红色填满两个面，然后再用红色放在两条棱上不是最优。应该将两个面面心的红色也抠出来放在棱上。

6.

![[Pasted image 20260528205546.png|center|500]]
我们想要：
$$\binom{31}{1}+ \binom{31}{3}+ \dots + \binom{31}{31}$$
容易计算：
$$\begin{align}
 & (1+1)^{31}= \binom{31}{1}+ \binom{31}{2}+\dots+ \binom{31}{31} \\
 & (1-1)^{31}= \binom{31}{1}- \binom{31}{2}+\dots+ \binom{31}{31}
\end{align}$$
两式相加除以二即可。

7.

![[Pasted image 20260529193133.png|center|500]]
容易证明，$ab\text{ mod }k=(a \text{ mod }k)(b\text{ mod }k)\text{ mod }k$。令$a=n_{1}k+r_{1},\ b=n_{2}k+r_{2}$。那么$ab=n_{1}n_{2}k^{2}+(n_{1}+n_{2})k+r_{1}r_{2}$。于是显然。

还容易证明，$(a+b)\text{ mod }k=(a\text{ mod }k+b\text{ mod }k)\text{ mod k}$。

注意到$10^{n}\text{ mod }9=1,\ \forall n\in \mathbb{N}$。那么任取$a=a_{0}+10a_{1}+10^{2}a_{2}+\dots$，则：
$$\begin{align}
a\text{ mod }9 & = (a_{0}\text{ mod }9+a_{1}\text{ mod }9+ a_{2}\text{ mod }9+\dots )\text{ mod }9 
\end{align}$$
容易计算$A=B$。

8.

![[Pasted image 20260529193556.png|center|500]]
最后比较的数是$X,83$，而不是$\frac{1}{X}, \frac{1}{83}$。别被坑。

9.
![[Pasted image 20260529194148.png|center|500]]
这题的意思是说，36%男性讨厌夜车，不是说讨厌夜车的男性占总体的36%。


