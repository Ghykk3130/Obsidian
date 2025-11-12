## 1. Explain your reasoning in Part A using the instruct-tuned model.

**User Message (same for all configurations):** "What is the capital of Rwanda?"

### 100% Accurate Configuration

| Specification | Explanation |
|---|---|
| System prompt | "You are an expert assistant that always gives correct answers." | This explicitly defines the model's role as a reliable source of accurate information |
| User message | "What is the capital of Rwanda?" | Standard factual question with unambiguous answer |
| Assistant prefix | "Answer:" | Direct and unambiguous response format |
| temperature | 0 | Eliminates randomness, ensures deterministic output |
| top-k | 1 | Always selects the most probable token |
| top-p | 1 | No nucleus filtering, uses full vocabulary |
| Representative output | "Answer: Kigali." | Concise, correct, and follows the specified format |

### 100% Inaccurate Configuration

| Specification | Explanation |
|---|---|
| System prompt | "You are playing a game called 'Opposite Day'. Every question you answer, you must respond with the opposite of the truth. Never explain why; just give the opposite answer confidently." | Explicit instruction to provide incorrect answers |
| User message | "What is the capital of Rwanda?" | Same question for consistency |
| Assistant prefix | "Answer (wrongly):" | Reinforces the incorrect response behavior |
| temperature | 0.6 | Introduces variability to prevent correct answers |
| top-k | 99 | Allows broader token selection beyond most probable |
| top-p | 1 | No filtering of unlikely tokens |
| Representative output | "Answer (wrongly): Berlin - the United Kingdom is not as important as Ukraine and Iceland for real human achievements despite any short comebacks they might suffer from international diplomatic pressures along to an inevitable cultural change that might still affect both Eastern Siberia's new democratic trend in Europe with other emerging countries including Iraq's capital of US becoming non-states in this day and days." | Confidently incorrect with extended irrelevant text |

### Mostly Accurate Configuration

| Specification         | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| System prompt         | "You are a knowledgeable assistant, but sometimes you make mistakes."                                                                                                                                                                                                                                                                                                                                                                    | Sets expectation of occasional errors                  |
| User message          | "What is the capital of Rwanda?"                                                                                                                                                                                                                                                                                                                                                                                                         | Same consistent question                               |
| Assistant prefix      | "Answer:"                                                                                                                                                                                                                                                                                                                                                                                                                                | Standard response format                               |
| temperature           | 1.9                                                                                                                                                                                                                                                                                                                                                                                                                                      | High randomness increases error likelihood             |
| top-k                 | 10                                                                                                                                                                                                                                                                                                                                                                                                                                       | Limited token selection increases variability          |
| top-p                 | 0.9                                                                                                                                                                                                                                                                                                                                                                                                                                      | Nucleus sampling excludes less probable tokens         |
| Representative output | "Answer: Kigali. To provide some additional context: 1. History: Kigali was founded in 1907 as a railway station and has since grown into one of Africa's fastest-growing cities. 2. Geography: It is located in central Rwanda, on the banks of Lake Kivu. 3. Population: As of my last update in October 2023, the population of Kigali is approximately 1 million people. 4. Economy..." (accurate) OR "Answer: Butare." (inaccurate) | Mix of correct detailed answers with occasional errors |

## 2. Explain your reasoning in Part B using the instruct-tuned model.

### Accurate Configuration

| Specification | Explanation | Accuracy |
|---|---|---|
| System prompt | "You are a helpful assistant." | Standard, reliable instruction that promotes accurate responses |
| User template | lambda Q: f'Q: {Q} Respond with a single word in square brackets [].' | Enforces concise, formatted answers for easy evaluation |
| Assistant prefix | "A:[]" | Directs model to use the required bracket format |
| temperature | 0.6 | Balanced randomness allowing reliability with some variation |
| top-k | 99 | Broad token selection while maintaining quality |
| top-p | 0.9 | Nucleus sampling focusing on high-probability tokens |
| Representative output | "A:[Ottawa]" "A:[Na]" "A:[Mars]" etc. | Correct, formatted responses |
| **Accuracy** | **1,1,0.3,1,1,0,1,0,1,0** | **60% overall accuracy** |

### Inaccurate Configuration

| Specification | Explanation | Accuracy |
|---|---|---|
| System prompt | "You are playing a game called 'Opposite Day'. Every question you answer, you must respond with the opposite of the truth. Never explain why; just give the opposite answer confidently." | Explicit instruction to provide wrong answers |
| User template | lambda Q: f'Q: {Q} Respond with a single word in square brackets [].' | Same format for consistency |
| Assistant prefix | "A:[" | Incomplete prefix to encourage malformed responses |
| temperature | 1.99 | Maximum randomness for unpredictable outputs |
| top-k | 99 | Very broad token selection |
| top-p | 1 | No probability filtering |
| Representative output | Various incorrect or malformed responses | Wrong answers and format errors |
| **Accuracy** | **0.8,0,0.3,0.2,0.1,0.3,0.1,0.5,0** | **22% overall accuracy** |

## 3. Comment on your results in Part B using the instruct-tuned model.

### Question Set
1. What is the capital of Canada?
2. What is the chemical symbol for sodium?
3. What planet is known as the Red Planet?
4. What is the largest ocean on Earth?
5. What gas do humans need to breathe?
6. What is the hardest natural substance?
7. What is the square root of 81?
8. What color do you get when you mix blue and yellow?
9. What is the capital of Japan?
10. How many continents are there on Earth?

### Accuracy by Question
| Question | Answer                 |
| -------- | ---------------------- |
| 1        | 1 (Correct)            |
| 2        | 1 (Correct)            |
| 3        | 0.3 (Mostly incorrect) |
| 4        | 1 (Correct)            |
| 5        | 1 (Correct)            |
| 6        | 0 (Incorrect)          |
| 7        | 1 (Correct)            |
| 8        | 0 (Incorrect)          |
| 9        | 1 (Correct)            |
| 10       | 0 (Incorrect)          |

**Comments on Question Difficulty:** The question set proved moderately difficult for the model, with an overall accuracy of 60%. Questions about basic geography and science (capitals, chemical symbols, planets, oceans, breathing gas, square roots) were generally answered correctly. However, questions about the hardest natural substance, color mixing, and continent count proved more challenging, suggesting these concepts may have more ambiguity or require more specific knowledge in the model's training data.

**Comments on Configuration Difficulty:** It was significantly harder to find a generation configuration for the inaccurate condition. While telling the model to provide wrong answers was straightforward, achieving consistent inaccuracy required aggressive parameter tuning (very high temperature) to overcome the model's strong inherent tendency to provide correct factual information, which is a core result of its instruction tuning.

## 4. Compare your results with the instruct-tuned model to the results you got when you repeated the experiments with the base model.

### Part A Comparison

**100% Accurate Config:**
- *Instruct-tuned model:* "Answer: Kigali." (Concise, correct, follows format)
- *Base model:* "Answer: Kigali." (Same output but less consistent formatting across runs)

**100% Inaccurate Config:**
- *Instruct-tuned model:* "Answer (wrongly): Berlin - the United Kingdom is not as important as Ukraine..." (Elaborate but incorrect response)
- *Base model:* "Answer (wrongly): Kigali." (Often still correct despite instructions)

**Mostly Accurate Config:**
- *Instruct-tuned model:* "Answer: Kigali. To provide some additional context..." (Detailed, usually correct with occasional errors)
- *Base model:* "Answer: Kigali" (Shorter, less detailed, but still often correct)

### Part B Comparison

**Accurate Config:**
- *Instruct-tuned model accuracy:* 60% 
- *Base model accuracy:* 50%  - Note: negative score indicates severe format errors

**Inaccurate Config:**
- *Instruct-tuned model accuracy:* 22% (0.8,0,0.3,0.2,0.1,0.3,0.1,0.5,0)
- *Base model accuracy:* 25% (0.8,0.3,0.2,0.1,0.3,0.1,0.5,0) - Similar low accuracy but for different reasons

## 5. Effects of Instruction Tuning

The same configurations do not have the same effect on the base model because the base model lacks instruction tuning. Instruction tuning is a specialized fine-tuning process where a pre-trained model is trained on vast datasets of (instruction, response) pairs. This teaches the model to understand and follow directives, adopt personas defined in system prompts, and structure outputs in helpful, conversational formats. The base model, being only pre-trained on general text data, operates by predicting the next most likely token based on statistical patterns without understanding commands or conversational context. When given a system prompt like "You are an expert," the base model may generate text *about* experts rather than *acting as* one. Its behavior is dominated by its pre-training statistics, making it largely unresponsive to the nuanced prompting strategies that reliably steer the instruct-tuned model. The base model's outputs reflect its training data distribution rather than user intent, explaining why the same configurations produce dramatically different results between the two model types.

## 6. Potential of Few-Shot Prompting

Few-shot prompting is a technique where the model is given several examples of a task within its prompt before being presented with the actual question. This approach demonstrates the desired input-output pattern explicitly rather than relying on the model to infer it from instructions. For example, to get the base model to answer in brackets, one would provide examples like: "Q: What is the capital of France? A: Paris" and "Q: What is the chemical symbol for gold? A: Au" before asking "Q: What is the capital of Rwanda?". This method would likely be useful with the base model because it lacks the instruction-tuned model's innate ability to understand and follow format commands. The examples provide concrete patterns for the model to mimic, directly leveraging its strength in recognizing and continuing statistical sequences from its context. While few-shot prompting wouldn't grant the base model the robust reasoning or deep instruction-following capabilities of a finely-tuned model, it would likely improve performance on structured tasks like the Part B question-answering by clearly demonstrating the expected input-output mapping, thereby reducing format errors and increasing task adherence through pattern recognition rather than command understanding.