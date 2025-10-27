In order for LLM to generate reasonable texts，我们需要attention mechanism to take care of the contexts and choose the most probable word that comes after the existing text. 如果没有attention mechanism，那么LLM long range dependency 就不能被捕捉到，一些需要long range dependency的text就不一定被生成出来。例如说在句子the cat left its litter mates and uses the litter x，其中x为我们想生成的词，我们发现cat和x应该具有很强的关联性。如果没有attention机制来捕捉这种关联性，我们就只能根据litter生成x，从而得到更差的结果。

Attention是一种计算token之间关联性的机制。attention这个名字是因为人类会 allocate focus when receiving information. We attend to the most relevant information at each moment。同样地attention mechanism in an LLM assigns different weights to different words depending on their relevance。具体来说，给定一段文字，tokenizer会将它转化成一系列token。在embedding之后，我们得到代表每个token的矢量。根据这些矢量，attention会先计算每对token之间的相似性。（例如cosine similarity。）之后，transformer会将两个相似token以某种方式merge，生成一个包含这两个token信息的新的token。之后我们不断重复embedding, attention的过程，得到一系列包含原text信息的抽象的token。之后，decoder会根据这一系列token决定下一个将要生成的词的分数。sampling将会根据这个分数生成最可能的词。

但是，即便有attention机制，LLM也不一定能生成正确的信息。我们把LLM生成不正确信息的现象称为hallucination problem。LLM don't know facts in a human sense. Instead, they generate the most likely next token based on patterns learned from their training data. Attention机制只能保证LLM做出更好地generation,却不能保证这些信息是正确的。从根本上讲，an LLM is a probabilistic model to predict the next token。它只能生成最有可能的token，却不一定是正确的。If a fact wasn't clearly represented, the model would fabricate something that filles the gap。The implication of hallucination is that truthfulness cannot be guaranteed. LLM可能生成用户最期望看到的回答，但是LLM中没有一种保证这个回答的正确性的机制。因此users need to maintein a critical oversight. 

Hallucination problem可以通过RAG和CoT改善。RAG允许LLM在回答问题时在互联网上搜索，并将搜索到的信息并入用户的prompt中，再进行生成。因为prompt中包含了真实的信息，LLM就更有可能生成正确的信息。CoT允许LLM模仿人类解决问题的方式，将一个问题分成subproblem来完成。原先,the model tries to generate the final answer directly。CoT强制让LLM进行stepwise verification to avoid blind guessing。



