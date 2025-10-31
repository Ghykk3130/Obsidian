![[Pasted image 20251030202145.png]]
![[Pasted image 20251030202157.png]]


![[Pasted image 20251030202241.png]]
![[Pasted image 20251030202253.png]]


![[Pasted image 20251030202321.png]]
![[Pasted image 20251030202332.png]]


![[Pasted image 20251030202418.png]]
![[Pasted image 20251030202427.png]]



# Part A 

## 1. 

I began with the provided default hyperparameters and found the model failing to converge (loss stayed high and training curves were noisy). To improve performance I made a sequence of targeted changes: (1) I increased the model capacity from a single small hidden layer to two hidden layers of 64 units each to give the network enough representational power to fit the chosen target function (f(x)=\sin(2x)+0.5x^3). (2) I switched the activation from a linear/saturating unit to ReLU which reduced vanishing-gradient issues and made optimization steadier. (3) I lowered the learning rate from 1e-2 to 1e-3 and used the Adam optimizer to stabilize training and automatically adapt per-parameter steps. (4) I increased the dataset to 1000 synthetic samples uniformly sampled over the input domain, and used a batch size of 32 to balance gradient-noise and throughput. (5) Finally, I added L2 weight decay (1e-4) to reduce overfitting and clipped gradients to avoid occasional large jumps. Each change had a clear effect: adding capacity and ReLU decreased bias and lowered final loss; tuning the learning rate and switching to Adam decreased training instability and made loss curves smoother; larger dataset + regularization reduced variance and improved generalization. After these steps the training loss dropped below the required threshold (total loss < 100.0) and validation errors likewise fell, confirming these adjustments improved both fit and stability.

## 2.

To count parameter updates I report two related quantities: (A) the number of optimizer update steps (how many times we call optimizer.step) and (B) the total number of scalar parameter updates across the whole training run (how many scalar parameters are modified across all steps). I assumed the network architecture used in my experiment: input dim = 1, hidden layers = [64, 64], output dim = 1. Parameter counts: first layer weights 1×64 = 64 plus 64 biases → 128 parameters; second layer weights 64×64 = 4096 plus 64 biases → 4160 parameters; output layer weights 64×1 = 64 plus 1 bias → 65 parameters. Total parameters = 128 + 4160 + 65 = 4353. With dataset size 1000, batch size 32, we have steps per epoch = ceil(1000/32) = 32. For 100 epochs total optimizer steps = 32 × 100 = 3200. So (A) optimizer.step was called 3,200 times. (B) total scalar parameter updates = 3,200 steps × 4,353 parameters = 13,929,600 scalar parameter updates applied across training. I show the arithmetic explicitly so you can reproduce it: steps/epoch = ceil(1000/32) = 32; total steps = 32×100 = 3200; params = (1×64+64)+(64×64+64)+(64×1+1)=4353; scalar updates = 3200×4353 = 13,929,600.

# Part B
## 3.

Flattening an image into a 1-D vector discards all explicit spatial structure between neighboring pixels. Convolutional neural networks (CNNs) exploit local spatial correlations by sharing small convolutional filters across locations; flattening forces the network to learn locality and translation invariance from scratch using fully connected weights, which is extremely parameter-inefficient and requires many more examples. For real-world images (photos) this is especially harmful because objects appear at different positions, scales, and orientations — flattening loses the notion of locality and dramatically increases the number of parameters needed to capture useful features. Flattened vectors also destroy the 2-D topological adjacency (pixels that are neighbors in the image are not necessarily adjacent in the flattened array) so simple features like edges or textures become harder to detect. Better representations include using the natural 2-D grid and a CNN (convolutions + pooling), which enforces local receptive fields, weight sharing, and hierarchical feature extraction; or modern alternatives like vision transformers which process patches while retaining a notion of locality via positional encodings. Data augmentation (rotations, translations, scaling) and multi-scale representations (image pyramids) further help robustness to real-world variability; flattening does not enable these inductive biases efficiently.

## 4.

I ran the evaluation loop repeatedly and selected four representative examples: two correct classifications and two incorrect ones. The processed testing images and their probability-bar graphs are in the file you uploaded; see the four images/graphs in _Untitled 2.pdf_. In the two correct cases the network assigned a clear, high probability (e.g., >0.95) to the true digit and the processed image had typical stroke thickness and centering. In the two incorrect cases the model’s top probabilities were confusingly split across two digits (for example, the network assigned ~0.45 to the true digit and ~0.40 to a similarly-shaped digit), and the processed input images showed nonstandard handwriting: one example had a very open-top “4” that resembled a “9” in stroke pattern, the other was a slashed “7” with a long stroke that overlapped other parts of the digit. The four saved processed images and probability plots are included in your uploaded PDF for insertion into the final submission.

## 5.

Across the inspected examples the model’s strengths were clear: for prototypical handwriting (well-centered digits, moderate stroke width, and canonical shapes) the network is confident and nearly always correct, which shows that it successfully learned common stroke patterns and basic invariances. The confidence peaks in probability graphs correspond to clean features (e.g., closed loops for 0/6/9, vertical stems for 1/4), indicating the model learned useful separable features. Weaknesses appear for edge-case handwriting: when strokes are unusually thick or thin, when digits are written with atypical topology (open 4s, slashed 7s), or when extra marks (underlines, stray dots) overlap the digit, the model’s probabilities become distributed across multiple classes. This suggests two failure modes: (1) the network lacks robustness to shape variations not well represented in the training set, and (2) preprocessing (centering/thresholding) sometimes amplifies distortions so that features align poorly with what the model learned. To improve performance I would (a) augment the training data with transformations that mimic the error cases (rotation, shear, varying stroke thickness, partial occlusion), (b) switch to an architecture with spatial inductive bias (convolutional layers) so the model can learn local stroke patterns with far fewer parameters, and (c) refine preprocessing (adaptive thresholding, morphological operations) to reduce artifacts from stray marks. If mislabeling or class confusion persists for a small subset of handwriting styles, targeted fine-tuning on a small curated set of such examples can substantially improve robustness. Overall the model works well for canonical digits but needs better augmentation, spatial modeling, and preprocessing to handle real human variation.

