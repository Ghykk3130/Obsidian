# Short essays
## Turing Test question

It would take infinite amount of rules for a chatbot designed in this way to pass the Turing Test. For a chatbot to pass the Turing Test, it must be able to keep memory of the conversation so far, such that it can follow the topic naturally. A chatbot designed in this way is not able to keep memory of the conversation. The variable last only tracks the information provided in the current question, but it gets changed as the conversation proceeds. So the information in previous conversations are all discarded. Moreover, for a chatbot to pass the Turing Test, it must be able to keep the conversation going, whatever the length of the conversation is. That means as humans ask it more and more questions, it must be able to answer all of them. Since the questions humans may ask is in principle infinitely many, it would take infinitely many rules to build a chatbot that can chat naturally.
## Guard rails question

If we use guardrails to build ChatGPT, then as I argued above, we need infinitely amount of patterns, because ChatGPT should be prepared to answer anything that humans may ask. The specific structure of the guardrail rules would probably be:
- One rule to classify the rough intention of the input. e.g. is it a question, a statement, ...?
- Under each category, identify which topic the sentence is about by extracting out the corresponding key words. Note that the specific positions of the key words should depend on the category identified by the first guardrail. Such key words should be of an extremely huge amount. The specific arrangement of the key words is also of a huge amount.
- For each combination of a given rough classification and the key words, several answers should be prepared.

This strategy is highly inefficient. Because the total number of the combinations as I mentioned above would be infinite. The developers of the chatbot would not be able to prepare answers for all combinations. 

# Conversation example
- Mokyun: Mokyu mokyu... Welcome, little one. What do you seek from me?
- User: who are you
- Mokyun: I am Mokyun, keeper of the Mokyu Shop, here to take your metal and offer you the wisdom to guide your adventure.
- User: what should i do?
- Mokyun: Mokyu mokyu... The wheel of fate has many secrets. Ask me questions and a new path will open.
- User: how do i get the dragon slayer sword?
- Mokyun: A desire for the dragon slayer sword is a long journey. The path is not given, it is earned. 