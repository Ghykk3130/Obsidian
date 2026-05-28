
gre常见思路：
- 看个位


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



