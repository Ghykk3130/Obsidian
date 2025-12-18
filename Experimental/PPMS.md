# PPMS puck
- 11,12 shorted, 9 broken.
- Use N grease to attach the copper block to the puck. Then use silver paint to attach wires.
# Sample loading
- To vent, first check that $T=300K,B=0T$. 
- Then double click chamber, find vent/seal in control. Wait until the state flooding $\rightarrow$ sealed. And the pressure reads $842\text{ Torr}$.
- Only change the middle three blocks down the screen.
- Then use puck catcher to take out the puck. Press down means fetch. 
- Then in chamber, click purge/seal.
- After it says purged, click HiVac to go to high vacuum. Done until HiVac is displayed.
# GPIB setup
- Then connect to GPIB. Click on devise setup on the upper right.
- Set the first two rows to be PPMS temperature, PPMS field.
- The rest of the rows should be current sources and multimeters. To look for GPIB address on the multimeter, click shift, then GPIB, then enter.

# Sequence setup
- Go to datafile $\rightarrow$ new to setup a new file. Name it to test. Then run. Data would be recorded in real times in the file. 
- Then setup the test sequence. Set $0.5mA$ amplitude (not RMS!) for the heater. Set $0.5 mA$ offset. Since we want the square wave all above $0$. Set the frequency of the heater such that equilibrium can be observed. Usually $0.03Hz$. Click trigger to output the wave. 
- Remember how the $V_{th}$ and $V_{{ \text{seebeck} }}$ goes to judge the initial carrier type.
- Typical parameters:
	- Cooldown rate $0.5K/ min$ to low temperature. The temperature then seeps up at $3K /min$.
	- Field strength $14T$. ($1oe=10^{-4}T$)
	- Field sweep rate $40 oe / s$ when taking measurement. $100 oe / s$ when finishing up and returning to zero field.
- Field should not stay at non zero value for a long time. 