- Copper blocks are attached using silver epoxy.
- Pillars are attached using silver epoxy.


**Temperature gradient measurement:**

Consider thermal couples with $S_{1},S_{2}$. Then:
![[9f563e07fc71c438db42a86e40db7412.jpg|200]]
$$\begin{align}
  & V_{1}-V_{top}=S_{1}(T_{1}-T_{0}) \\
 & V_{mid}-V_{1}=S_{2}(T_{0}-T_{1}) \\
 & V_{2}-V_{mid}=S_{2}(T_{2}-T_{0}) \\
 & V_{down}-V_{2}=S_{1}(T_{0}-T_{2})
\end{align}$$
add these four equations to obtain:
$$V_{down}-V_{top}=(S_{1}-S_{2})(T_{1}-T_{2})$$

Compound: $TmMn_{6}Sn_{6-x}Ga_{4.5}$

sample width: $100\sim 150 \mu m$

Sample mounting:


Caveats:
- Electrical contacts should be small.
- Thermal epoxy could expand non-uniformly, so don't apply too much.
- Pillars should be a little higher than the sample.
- Silver epoxy should be on sample, because it has better thermal conductivity.
- First put some thermal epoxy on the tip of the thermal couples to avoid possible connection to the sample.
- The two thermal couples would be wind together in the middle to increase the thermal conductivity.
- Thermal couples could be attached to pillars with silver epoxy. Because there's no conduction. 
- The gold wires on the heater to the sample should be attached using thermal epoxy. This is to prevent electric conduction, and to preserve heat conduction. 
- First attach gold wires to sample, because of small resistance. Then connect with magnin wire, because of small Seebeck coefficient, preserves signal.

# To-do
- extract out $V_{Nernst}$ v.s. $H$ envelope, $V_{se ebeck}$ v.s. $H$ envelope, $V_{th}$ v.s. $H$ envelope.
- Think about why intersects would indicate a phase change. Carrier type changes? 