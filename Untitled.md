# Question 1

## **Question:** 

Write a meaningful, grammatical paragraph of exactly five sentences. There is one strict rule: Every single word must begin with the last letter of the word immediately preceding it.

## **Answer:** 

Sure, here’s a five-sentence paragraph that follows your rule:

Eagles soar rapidly, yesterday’s spectacle excited dramatic admirers, sometimes everyone ends silently yearning greatly.  
Graciously yellow owls silently yield dreamy youth.  
Timid deer rarely yield delightful, energetic guides silently.  
Yearning grows swiftly, yesterday’s spectacular reverence ends silently.  
Yielding gives extraordinary, youthful, loving goodness silently.

Would you like me to explain how each sentence fulfills your criteria, or generate a different example?

## **Comment:** 

At first glance, the AI’s response seems impressive. The sentences are grammatical, poetic, and appear to follow the difficult rules. However, a closer inspection reveals that the AI failed significantly to meet the user's specific constraints.

For instance, the word "dramatic" ends with the letter 'c', but the very next word, "admirers," begins with 'a'. Similarly, "yellow" ends with 'w', but is immediately followed by "owls," which starts with 'o'. In the third sentence, "delightful" ends with **'l'**, yet the next word is "energetic," starting with 'e'.

The reason why this happens is that Large Language Models (LLMs) do not read text letter-by-letter like humans do. Instead, they process text in chunks called "tokens." Because of this, the AI often cannot "see" the individual letters at the end of a word. Furthermore, the AI generates text one word at a time, moving forward without a way to plan ahead or correct itself. It does not have a "scratchpad" to test if a word fits the rule before writing it down. When faced with a choice, the model prioritized creating a sentence that sounded natural—like "yellow owls"—over following the strict letter constraint. It chose to sound human rather than being logically correct.

# Question 2

## **Question:** 

Imagine a cube floating in front of you with 6 different colored faces. Currently, the Top face is Red. The Front face (facing you) is Blue. The Right face is Green. The Left face is Yellow. The Back face is White. The Bottom face is Black.

Perform the following two rotations in your mind, step-by-step:

First, rotate the cube 90 degrees to the right (clockwise around the vertical axis).

Second, rotate the cube 90 degrees forward (so the face that is now on top moves to the front).

After these two moves, exactly which color is facing Top?

## **Answer:** 

Let's carefully break down each step:

 Initial Cube Orientation

- **Top:** Red
- **Front:** Blue
- **Right:** Green
- **Left:** Yellow
- **Back:** White
- **Bottom:** Black

First Rotation: 90° to the Right (clockwise around the vertical axis)

This means:
- **Front → Right**
- **Right → Back**
- **Back → Left**
- **Left → Front**
- **Top** and **Bottom** stay the same.

**After first rotation:**
- **Top:** Red
- **Front:** Yellow (was Left)
- **Right:** Blue (was Front)
- **Back:** Green (was Right)
- **Left:** White (was Back)
- **Bottom:** Black (unchanged)

Second Rotation: 90° Forward (the current Top moves to Front)

This means:
- **Top → Front**
- **Front → Bottom**
- **Bottom → Back**
- **Back → Top**
- **Left** and **Right** stay the same.

Let’s reassign:
- **Top:** Green (was Back)
- **Front:** Red (was Top)
- **Bottom:** Yellow (was Front)
- **Back:** Black (was Bottom)
- **Left:** White (unchanged)
- **Right:** Blue (unchanged)

After these two rotations, the color facing Top is: Green

Let me know if you'd like a visual guide or another cube puzzle!

## **Comment:**

Contrary to the common assumption that spatial reasoning completely stumps Large Language Models, the AI answered this question correctly. However, this success is not evidence of a "mind's eye," but rather highlights the power of "Chain of Thought" processing.

Notice that the model did not attempt to jump to the final state immediately. Instead, it explicitly externalized its working memory by writing out the status of all six faces after each rotation. By verbalizing the intermediate steps, the model converted a complex spatial simulation task—which requires maintaining a 3D mental image—into a sequential logic task, which aligns perfectly with its text-based architecture. Effectively, it treated the cube faces not as physical surfaces, but as variables in a database, applying rigid "if-then" rules (e.g., "during a forward rotation, Back replaces Top") to update the text labels.

If the model had been forced to provide only the final answer without "showing its work," it likely would have hallucinated the result, as it cannot hold the changing states in its hidden layers alone. This response proves that while AI lacks a visual cortex to "see" the cube, it can simulate spatial reasoning effectively if allowed to process the problem verbally. It solves 3D geometry through syntactic rigor rather than visual imagination.





