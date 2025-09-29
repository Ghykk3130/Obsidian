# 1.
Yungang Grottoes is a Buddhist site built in the Northern Wei dynasty around 460 AD. The caves suggests the investment of the Northern Wei imperial group into religion, which might contribute to the Northern Wei's collapse. 

There were two construction phases of the Yungang Grottoes. The first phase (c. 460-467) was related to imperial authority. Five caves were constructed and Buddhas representing the first five Northern Wei emperors were erected. This might be considered as a atonement of the imperial group for the persecution of Buddhism. The second phase (c. 483-494) emerged later, with more concentration on commoners' work. Carvings in this period featured more narrative complex themes in Buddhism. 

There were threats to the preservation of the caves due to natural erosion, industrial pollution from a nearby city, and the water seepage from a Ming fortress above the caves. 
# 2.

A neural network is a computational model inspired by the structure of the human brain. The basic unit of a biological brain are neurons. Neurons work by receiving signals from nearby neurons and output an electric signal activate the next neuron. Inspired by this structure, computer scientists built neural networks by artificial neurons mimicking the structure of biological neurons. Mathematically, an artificial neuron is a function that takes the output data of other neurons as its input, and output a value between zero and one. By specifying how these functions are composed, computer scientists are able to create a network, which is a function composed of many neuron functions. Such a network is what people call as a neural network.

Neural networks always adopt layered structures, which allow them to break complicated tasks into easier subtasks. In general, a layer in a neural network is a collection of neuron functions. A typical neural networks have three types of layers: one input layer, one output layer, and possibly many hidden intermediate layers. The input layer is the layer that receives the raw input data. For example, if we are given a neural network that performs the function of recognizing human written numbers from zero to nine, the raw input data are the human written numbers converted. The first layer might convert the image into pixels. The output layer is the final layer that produces the result of the neural network's computation. In the example given above, the output layer would gives a number between one to nine. To complete this job, there are many intermediate layers that break down the task. In the example given above, the first intermediate layer might be a layer that recognizes the line shapes of numbers. The second intermediate layer might be a layer that combine the line shapes into featured parts. Then the output layer can output the result based on the featured parts.

In a given layer, each neuron gets activated based on the outputs of neurons in the previous layer. To give a plausible result, the outputs of the neurons in the previous layer need to be weighted before passing into neurons in this layer. For example, for a layer that recognizes the line shapes of numbers, who take inputs from the layer that converts image of numbers into pixels, one must assign negative weights for pixels around a specific desired line, and assign negative weights for pixels fall onto the desired line. Then, in order to treat the output of all neurons on a relatively equal ground, we squeeze the weighted sum with a Sigmoid function.






