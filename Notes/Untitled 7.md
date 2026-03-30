
## Presentation Title: Algebraic Structures of Elliptic Curves and their Cryptographic Applications

### Part 1: Algebraic Geometry & Group Construction

_Focus: Defining the set and the binary operation $E(K) \times E(K) \to E(K)$ rigorously._

- **The Weierstrass Equation**: Define the curve $E$ over a field $K$ (start with $\mathbb{R}$ for clarity, then generalize) as the set of solutions to:
    
    $$y^2 = x^3 + ax + b$$
    
    where $a, b \in K$. Define the condition for smoothness (non-singularity) using the discriminant $\Delta = -16(4a^3 + 27b^2) \neq 0$, ensuring no cusps or self-intersections.
    
- **The Point at Infinity**: Introduce the projective plane $\mathbb{P}^2(K)$ to explain the "Point at Infinity" $\mathcal{O}$ as the identity element of the group, rather than just "defining it into existence."
    
- **The Group Law (Addition)**:
    
    - Formally state the **Chord-and-Tangent** rule.
        
    - **Algebraic Derivation**: Instead of drawing, show the derivation of $P + Q = R$. If $P=(x_1, y_1)$ and $Q=(x_2, y_2)$, and $P \neq Q$, the slope $\lambda$ is:
        
        $$\lambda = \frac{y_2 - y_1}{x_2 - x_1}$$
        
        Then the coordinates of $R = (x_3, y_3)$ are:
        
        $$x_3 = \lambda^2 - x_1 - x_2, \quad y_3 = \lambda(x_1 - x_3) - y_1$$
        
- **Group Axioms**: Briefly verify that $(E, +)$ satisfies closure, identity ($\mathcal{O}$), inverse (reflection across x-axis), and associativity (noting that associativity is non-trivial but fundamental).
### Part 2: Number Theory & The Discrete Log Problem

_Focus: Mapping the continuous curve to a finite field $\mathbb{F}_p$._

- **Elliptic Curves over Finite Fields**: Define $E(\mathbb{F}_p)$ where coordinates are elements of the integers modulo $p$.
    
- **Group Order**: Introduce **Hasse’s Theorem** to bound the number of points $N$ in the group:
    
    $$|N - (p + 1)| \le 2\sqrt{p}$$
    
- **The Scalar Multiplication**: Define $kP = P + P + \dots + P$ ($k$ times).
    
- **The ECDLP (Hard Problem)**: Formally state the Elliptic Curve Discrete Logarithm Problem: Given $P$ and $Q \in E(\mathbb{F}_p)$, find the integer $k$ such that $Q = kP$.
    
- **Computational Complexity**: Mention that while $kP$ can be calculated in $O(\log k)$ steps using the **Double-and-Add** algorithm, reversing the process is sub-exponentially difficult (unlike RSA, which is susceptible to index calculus in certain fields).
    
### Part 3: Cryptographic Protocols & Efficiency

_Focus: Implementing the mathematical hardness into secure communication._

- **ECDH (Diffie-Hellman Key Exchange)**:
    
    1. **Public Parameters**: A base point $G$ on curve $E$.
        
    2. **Alice’s contribution**: Selects private key $d_A$, computes public key $Q_A = d_A G$.
        
    3. **Bob’s contribution**: Selects private key $d_B$, computes public key $Q_B = d_B G$.
        
    4. **Shared Secret**: $S = d_A Q_B = d_A (d_B G) = d_B (d_A G)$.
        
- **ECDSA (Digital Signature Algorithm)**: Briefly explain how scalar multiplication is used to verify the origin of a message without revealing the private key.
    
- **Comparison with RSA**: Provide a quantitative table showing security parity.
    
    | Security Strength (bits) | RSA Key Size | ECC Key Size |
    
    | :--- | :--- | :--- |
    
    | 128 | 3072 | 256 |
    
    | 256 | 15360 | 512 |
    
- **Conclusion**: Summarize why ECC is the standard for mobile devices and blockchain (e.g., Bitcoin’s `secp256k1` curve) due to low bandwidth and high security.

### Suggested Time Allocation (Total: 18 Minutes)

- **Part 1 (Mathematical Setup):** 6 Minutes.
    
- **Part 2 (The Hard Problem):** 6 Minutes.
    
- **Part 3 (Applications):** 6 Minutes.
    
