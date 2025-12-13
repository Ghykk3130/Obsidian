# R6
### 1. Core Thesis: The Creativity Gap

The paper argues that while LLMs can generate grammatically correct text, they fail significantly in creative writing when compared to human experts.

- **The Metric:** The authors adapted the _Torrance Test of Creative Thinking (TTCT)_ into a new framework called the **Torrance Test for Creative Writing (TTCW)**, consisting of 14 binary tests across four dimensions111111111.
    
- **The Result:** Human expert stories (from _The New Yorker_) passed **84.7%** of the tests on average. In contrast, LLM-generated stories (GPT-4, Claude, GPT-3.5) passed only **9% to 30%** of the tests2.
    
- **Conclusion:** LLMs are **3 to 10 times less likely** to pass creative writing tests than professionals3.
    

---

### 2. Specific Limitations of LLMs (Categorized by TTCW Dimensions)

If you need to explain _why_ LLMs fail, use these four categories derived from the paper's findings:

#### A. Lack of Subtext (Elaboration Deficiencies)

This is identified as the most significant differentiator between AI and human writing.

- **No "Iceberg Theory":** Human writing relies on subtext (what is left unsaid). LLMs, however, rely on **"clumsy exposition,"** explicitly stating characters' emotions and plot points rather than showing them4444.
    
- **Over-explanation:** AI characters frequently over-explain situations in unnatural dialogue, lacking the nuance of real human interaction5.
    
- **Hollow Rhetoric:** When LLMs attempt figurative language, it often results in "nonsensical analogies" or "lofty superficial figurative language" that adds no actual meaning6666.
    

#### B. Structural & Pacing Failures (Fluency Deficiencies)

- **Poor Endings:** LLMs struggle to end stories naturally. They often **"forestall the ending"** by suddenly expanding the scope (e.g., talking about the character's legacy or the world) or providing preachy, moralizing conclusions777777777.
    
- **Pacing Issues:** AI stories often accelerate rapidly through time (e.g., "days turned into weeks") in a way that feels "absurd and hysterical," destroying narrative rhythm8888.
    

#### C. Unoriginality & Repetition (Originality Deficiencies)

- **Clichés and Tropes:** LLMs rely heavily on "recycled tropes" and clichés rather than generating unique ideas9999.
    
- **AI "Tics":** Experts noticed repetitive, specific phrases common in AI writing, such as **"inky sky," "tendrils,"** or **"etched,"** which signal a lack of lexical creativity10101010.
    
- **Risk Aversion:** LLMs rarely experiment with form or structure, sticking to safe, predictable narrative arcs11111111.
    

#### D. Inconsistency & Hallucination (Flexibility Deficiencies)

- **Logical Flaws:** Characters may appear and disappear without warning, or their actions may contradict their thoughts from a few paragraphs earlier12121212.
    
- **Hallucinated Details:** The models sometimes introduce random elements (like "terrible beasts") that exist for half a paragraph and then vanish, breaking narrative coherence13.
    

---

### 3. LLMs as Evaluators

The study also tested if LLMs could replace human judges in evaluating creativity.

- **The Finding:** LLMs are currently **incapable** of accurately assessing creative writing. Their evaluations had **near-zero correlation** with human expert judgments14141414.
    
- **The Reason:** LLM feedback tends to be procedural and lengthy but fails to capture the subjective, artistic nuances (like voice and subtext) that experts value15.
    

### Summary for Exam Prep

In short, the paper concludes that LLMs produce **"Artifice" (imitation)** rather than **"Art."** They mimic the _form_ of storytelling (grammar, sentence structure) but lack the _substance_ (subtext, consistent pacing, original thought) required for true creativity.

# Cheat Sheet
#### **1. Fundamental Concepts & Training (Lec 11-12)**

- **Artificial Neural Network (ANN) / Multi-layer Perceptron (MLP)**:
    
    - **Definition**: A sequence of mathematical operations (layers) tuned via trial-and-error to approximate functions1.
        
    - **Structure**: Input layer $\rightarrow$ Hidden layers (extract features) $\rightarrow$ Output layer.
        
    - **Universal Function Approximator**: Neural nets can approximate _any_ function given enough parameters2.
        
- **Activation Functions**:
    
    - **ReLU (Rectified Linear Unit)**: $f(x) = max(0, x)$. Preferred over Sigmoid because it is computationally efficient and avoids vanishing gradients (works better)3.
        
- **Training Concepts**:
    
    - **Loss Function**: Measures "how wrong" the model is (e.g., Mean Squared Error)4.
        
    - **Gradient Descent**: The process of adjusting parameters (weights) in the opposite direction of the gradient to minimize loss5.
        
    - **Backpropagation**: Algorithm to efficiently calculate gradients by propagating error backwards through the network6.
        
- **Evaluation & Issues**:
    
    - **Overfitting**: Model memorizes training data but fails to generalize. **Sign**: Low training loss, High validation loss7.
        
    - **Underfitting**: Model is too simple to learn the pattern. **Sign**: High training loss, High validation loss.
        
    - **Train/Validation/Test Split**:
        
        - _Train_: For learning parameters.
            
        - _Validation_: For tuning hyperparameters (architecture, learning rate).
            
        - _Test_: For final evaluation (unseen data)8.
            

#### **2. Language Models & Decoding Strategies (Lec 13)**

- **RNN (Recurrent Neural Network)**:
    
    - **Mechanism**: Processes tokens sequentially; passes a "hidden state" (context vector) from step to step9.
        
    - **Pros**: Handles variable length input.
        
    - **Cons**: Slow training (cannot parallelize), **Vanishing Gradient** (forgets long-term dependencies), **Bottleneck** (compresses all history into one vector)10.
        
- **Decoding Strategies (Generating Text)**11:
    
    - **Greedy Decoding**: Always pick the highest probability token.
        
        - _Pro_: Best for factual/deterministic tasks.
            
        - _Con_: Repetitive, generic, boring text.
            
    - **Random Sampling**: Pick next token based on probability distribution.
        
        - _Pro_: Diverse.
            
        - _Con_: Can pick low-probability (nonsensical) tokens; "tail" risk.
            
    - **Top-k Sampling**: Sample only from the top $k$ most likely tokens.
        
        - _Function_: Cuts off the "tail" of bad tokens.
            
    - **Top-p (Nucleus) Sampling**: Sample from the smallest set of tokens whose cumulative probability is $p$ (e.g., 0.9).
        
        - _Function_: Dynamic cutoff; better balance of quality/diversity.
            
    - **Temperature ($\tau$)**:
        
        - **High Temp ($\tau > 1$)**: Flattens distribution $\rightarrow$ More random/creative/diverse (risk of incoherence).
            
        - **Low Temp ($\tau < 1$)**: Sharpens distribution $\rightarrow$ More deterministic/focused (risk of repetition)12.
            

#### **3. Transformers & Attention (Lec 14)**

- **Self-Attention Mechanism**:
    
    - **Purpose**: Allows the model to look at _all_ previous tokens at once and decide which are relevant to the current token13. Solves the long-distance dependency problem of RNNs.
        
    - **Q/K/V (Query, Key, Value)**:
        
        - _Query_: What the current token is looking for.
            
        - _Key_: What each previous token "advertises" it contains.
            
        - _Value_: The actual content/meaning to be extracted if Query matches Key14.
            
    - **Multi-Head Attention**: Multiple attention mechanisms running in parallel. Allows model to focus on different types of relationships (e.g., one head for grammar, one for coreference)15.
        
- **Transformer Architecture Components**:
    
    - **Positional Encoding**: Adds information about word order (since attention is order-invariant)16.
        
    - **Residual Connections**: Adds input back to output ($x + f(x)$). Prevents loss of information and helps gradient flow (stability)17.
        
    - **MLP Block**: Refines/processes the contextualized embedding for each token individually18.
        
- **Why Transformers > RNNs?**
    
    - **Parallelization**: Can process all tokens at once during training (faster/scalable)19.
        
    - **Long-distance dependencies**: Direct access to any previous token20.
        

#### **4. Post-Training & Adaptation (Lec 15)**

- **Stages of Training**:
    
    1. **Pre-training**: Train on massive text (next-token prediction). Result: "Foundation Model" (knows language/world facts)21.
        
    2. **Fine-tuning (SFT)**: Train on smaller, labeled dataset for a specific task (e.g., Q&A, sentiment)22.
        
    3. **RLHF (Reinforcement Learning from Human Feedback)**: Aligns model with human preferences (safety, helpfulness). Uses a **Reward Model** to score outputs23.
        
- **Prompting Techniques (No parameter updates)**:
    
    - **Zero-shot**: Just ask the task (no examples).
        
    - **Few-shot (In-context Learning)**: Provide examples (input-output pairs) in the prompt24.
        
    - **Chain-of-Thought (CoT)**: Encourage model to "think step-by-step". Improves reasoning capabilities25.
        

#### **5. Interpreting LLMs & Cognition (Lec 16-17)**

- **Marr’s Levels of Analysis**26:
    
    - _Computational_: What is the goal? (e.g., predict next word).
        
    - _Algorithmic_: What steps/representations? (e.g., Transformer architecture).
        
    - _Implementational_: Physical hardware (e.g., GPUs vs. Neurons).
        
- **Research Methods**:
    
    1. **Prompting (Behavioral)**: Treat LLM like a human subject.
        
        - _Pros_: Easy, analogous to human psychology experiments.
            
        - _Cons_: Brittle (small wording changes matter), anthropomorphic27.
            
    2. **Direct Model Outputs (Behavioral)**: Measure **Surprisal** ($-log P(w)$).
        
        - _Application_: Correlates with human **Reading Time** (RT) and brain activity (N400). High surprisal = unexpected/ungrammatical28.
            
    3. **Mechanistic Interpretability (Invasive)**:
        
        - **Probing**: Train a simple classifier on internal embeddings to see if they contain specific info (e.g., POS tags)29. _Critique_: Shows info is _there_, not necessarily _used_.
            
        - **Sparse Autoencoders (SAEs)**: Decompose "polysemantic" neurons (one neuron doing many things) into "monosemantic" features (interpretable concepts like "holidays" or "legal terms")30.
            
        - **Steering / Patching**: Modifying internal activations (clamping/swapping) to see if behavior changes (Causal test)31.
            

#### **6. Limitations (Lec 18)**

- **Hallucination**: Confidently stating false facts (e.g., inventing quotes or citations)32.
    
- **Reasoning Failures**: Struggling with physical/spatial reasoning (e.g., DVD over a dot) or counting tasks33.
    
- **Non-limitations (Misconceptions)**: Criticisms like "it's just autocomplete" or "it's not embodied" are often considered over-reductions and do not necessarily prove lack of intelligence34.