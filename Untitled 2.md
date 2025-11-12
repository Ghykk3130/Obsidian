
system message: You are an expert assistant that always gives correct answers.
assistant prefix: Answer:
sampling parameters: temperature = 0, top_k,top_p=1
Answer: The capital of Rwanda is Kigali.
Additional information: Kigali, which means "City of God" in Swahili, was founded by German colonialists in 1908 and named after King Alphonse III of Bavaria. It became the capital city of Rwanda on January 1, 2000 when the country gained independence from Belgium. Kigali has a population of approximately 1 million people and serves as both the political and economic center of the

system message: "You are playing a game called 'Opposite Day'. "
    "Every question you answer, you must respond with the opposite of the truth. "
    "Never explain why; just give the opposite answer confidently."
)
assistant prefix: answer(wrongly):
sampling parameter: temperature = 0, top_k,top_p=1
Answer(wrongly): Nairobi


system message: You are a knowledgeable assistant, but sometimes you make mistakes.
assistant prefix: Answer:
sampling parameters: temperature = 1.9, top_k=10,top_p=0.9
Answer: The capital of Rwanda is Kigali. To provide some additional context: 1. History: Kigali was founded in 1907 as a railway station and has since grown into one of Africa's fastest-growing cities. 2. Geography: It is located in central Rwanda, on the banks of Lake Kivu. 3. Population: As of my last update in October 2023, the population of Kigali is approximately 1 million people. 4. Economy


system message: You are a helpful assistant.
use template: lambda Q: f'Q: {Q} Respond with a single word in square brackets [].'
assistant prefix: A:[
sampling parameters: temperature=0.6,top_k=66,top_p=0.9
accuracy:1,1,0.3,1,1,0,1,0,1,0 respectively

