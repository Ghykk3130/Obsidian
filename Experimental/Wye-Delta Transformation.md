# Basic principle

Consider a three-terminal system. The principle of transformation is that the resistance between any two terminals are the same.

# $\Delta$ to Y

![[73d6fc95a8803cf8a0301a100fa6d20.jpg]]

Apply the basic principle. We have:
$\begin{align}R_1 + R_2 &= \frac{(r_1 + r_3)r_2}{r_1 + r_2 + r_3} \\  R_2 + R_3 &= \frac{(r_1 + r_2)r_3}{r_1 + r_2 + r_3} \\ R_1 + R_3 &= \frac{(r_2 + r_3)r_1}{r_1 + r_2 + r_3} \end{align}$

Subtract 1) from 3) and add 2) to get $R_1 = \frac{r_1r_2}{r_1 + r_2}$ 

# Y to $\Delta$

Now we have:
$\begin{align} R_1 &= \frac{r_1r_2}{r_1 + r_2 + r_3} \\ R_2 &= \frac{r_2r_3}{r_1 + r_2 + r_3} \\ R_3 &= \frac{r_1r_3}{r_1 + r_2 + r_3} \end{align} \ ...\ *)$

$\Rightarrow$ $R_1R_2 + R_1R_3 + R_2R_3 = \frac{r_1r_2r_3}{r_1 + r_2 + r_3}$

Divide both sides with the first equality in $*)$ to get $r_3 = \frac{R_1R_2 + R_1R_3 + R_2R_3}{R_1}$ 