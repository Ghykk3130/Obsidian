# Part A 

## 1. 

I defined my function as $f(x)=\sin x+x$. In the default setting, the total loss is around 40 thousands. To improve performance, I set each layer to 128 nodes to give the network enough capacity to capture the nonlinear behavior. I left ReLU activation function unchanged to enable faster gradient flow. I extended the training to 1000 epochs to allow the network sufficient time to converge. During this tuning process, I monitored the total loss and adjusted parameters iteratively: when the loss decreased too slowly, I considered increasing layer width; when updates were unstable, I reduced the learning rate. These changes gradually stabilized training, allowing the network to learn both the linear and sinusoidal components of the function effectively. By the end of this process, the total loss was reduced to approximately 1.035, showing that the network had successfully captured the shape of $f(x)$ across the training range.

## 2.

The total number of parameter updates is determined by multiplying the number of steps per epoch by the number of epochs. I calculate steps per epoch by dividing the total number of training samples by the batch size. Since I have 1000 training samples and a batch size of 32, there are 1000/32 = 32 steps per epoch. Training my network for 1000 epochs results in 32 × 1000 = 32000 total parameter updates. This means that throughout training, my network’s weights and biases were adjusted 32000 times, giving it repeated opportunities to learn from the data and progressively reduce the loss.

# Part B
## 3.

Flattening an image into a 1-D vector discards all explicit spatial structure between neighboring pixels. Convolutional neural networks (CNNs) exploit local spatial correlations by sharing small convolutional filters across locations; flattening forces the network to learn locality and translation invariance from scratch using fully connected weights, which is extremely parameter-inefficient and requires many more examples. For real-world images, this is especially harmful because objects appear at different positions, scales, and orientations — flattening loses the notion of locality and dramatically increases the number of parameters needed to capture useful features. Flattened vectors also destroy the 2-D topological adjacency (pixels that are neighbors in the image are not necessarily adjacent in the flattened array) so simple features like edges or textures become harder to detect. Better representations include using the natural 2-D grid and a CNN (convolutions + pooling), which enforces local receptive fields, weight sharing, and hierarchical feature extraction, or modern alternatives like vision transformers which process patches while retaining a notion of locality via positional encodings. Data augmentation and multi-scale representations further help robustness to real-world variability. 

## 4.

I ran the evaluation loop repeatedly and selected four representative examples: two correct classifications and two incorrect ones. The processed testing images and their probability-bar graphs are given below. In the two correct cases the network assigned a clear, high probability to the true digit and the processed image had typical stroke thickness and centering. In the two incorrect cases the model’s top probabilities were still very high, nevertheless, for the wrong prediction. The processed input images showed nonstandard handwriting: one example is a 6 with a long neck,  and the 8 is elongated vertically. 

**Incorrect cases:**
![[Pasted image 20251030202145.png]]
![[Pasted image 20251030202157.png]]

![[Pasted image 20251030202321.png]]
![[Pasted image 20251030202332.png]]

**Correct cases:**
![[Pasted image 20251030202241.png]]
![[Pasted image 20251030202253.png]]

![[Pasted image 20251030202418.png]]
![[Pasted image 20251030202427.png]]


## 5.

When examining the input images and their output probability graphs, I noticed that the neural network tends to perform quite well when the digits are written clearly and resemble the training samples. In those cases, the model assigns a very high probability to the correct class, which shows that it has successfully learned consistent patterns in how digits are usually written—like the general placement of strokes and the overall shape of the numbers. However, even when I wrote what looks like a standard “7,” the network became confused and classified it as a “3.” It also misclassified a “6” with a long neck as a “0.” These results suggest that the model relies too heavily on specific visual cues it has seen often during training, instead of forming a more flexible understanding of how digits can vary in real handwriting.

Looking more closely, I think the error with the “7” happens because the model focuses too much on the short horizontal stroke and the curved neck, which it interprets as the upper region of a “3.” It picks up on some correct local shapes but fails to combine them into the right overall structure. For the “6,” the model seems to recognize the round loop correctly but ignores the longer tail that differentiates it from a “0.” These examples show that while the network is good at identifying distinctive local patterns, it doesn’t yet have a strong sense of how all the parts of a digit fit together into a complete whole.

To help the model improve, I’d try adding data augmentation so it sees a wider range of handwriting styles and learns to generalize instead of locking onto just a few familiar features. I might also experiment with changing the architecture—perhaps by introducing convolutional layers—so the model can better capture spatial relationships and understand the overall structure of each digit, instead of getting distracted by small local details.
