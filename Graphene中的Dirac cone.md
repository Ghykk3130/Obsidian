# 1. Graphene的tight-binding

![[Drawing 2026-01-15 01.08.49.excalidraw|center|300]]

可以证明，将graphene每个原子作为晶格点不构成Bravais lattice。每个unit cell里面必须包含两个原子。这两个原子中的一个必须由另一个平移之后旋转得到。用$A,B$标记。

令：
$$H= -t\sum_{\vec{R}\in \Lambda}(\ket{\vec{R},A} \bra{\vec{R},B} + \ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{1},B} +\ket{\vec{R},A} \bra{\vec{R}+\vec{a}_{2},B}+\text{h.c.}) $$
其中对角元可以设为零，因为仅仅是一个常数。