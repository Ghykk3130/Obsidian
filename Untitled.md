# 1. Similarity matrices

**gpt2:**
<div style='text-align:center'>
<img src='Pasted image 20251005205111.png'>
</div>

**gpt2-medium:**
<div styel='text-align:center'>
<img src='Pasted image 20251005205341.png'>
</div>

**gpt2-large:**
<div style='text-align:center'>
<img src='Pasted image 20251005205645.png'>
</div>

# 2. Questions
>[! Note]
>The five word pairs that I choose are:
>(money, gold), (money, sun), (sun, sky), (war, blood), (war, light)
## 2.1 Comment on the results of word pairs
### (money, gold)

The similarity scores I got from gpt2, gpt2-medium, gpt2-large are $5.5$, $5.8$, $5.6$ respectively. The similarity score I got from gpt2 is lower than the similarity I got from gpt2-medium. The similarity score I got from gpt2 is higher lower than the similarity score I got form gpt2-large. The score I would give to this word pair is $6.6$. This is significantly higher than the scores given by these three models.

### (money, sun)

The similarity scores I got from gpt2, gpt2-medium, gpt2-large are $2.5$, $2.7$, $2.3$ respectively. The similarity score I got from gpt2 is lower than the similarity I got from gpt2-medium. The similarity score I got from gpt2 is higher than the similarity score I got from gpt2-large. The score I would give to this word pair is $2$. This is roughly the same the scores given by these three models.
## (sun, sky)

The similarity scores I got from gpt2, gpt2-medium, gpt2-large are $6.5$, $6.6$, $7$ respectively. The similarity score I got from gpt2 is lower than the similarity I got from gpt2-medium. The similarity score I got from gpt2 is lower than the similarity score I got from gpt2-large. The score I would give to this word pair is $6.3$. This is close to the scores given by these three models.
### (war, blood)

The similarity scores I got from gpt2, gpt2-medium, gpt2-large are $3.2$, $4.2$, $3.8$ respectively. The similarity score I got from gpt2 is lower than the similarity I got from gpt2-medium. The similarity score I got from gpt2 is lower than the similarity score I got from gpt2-large. The score I would give to this word pair is $6.6$. This is significantly higher than the scores given by these three models.

### (war, light)

The similarity scores I got from gpt2, gpt2-medium, gpt2-large are $1.8$, $1.8$, $2.6$ respectively. The similarity score I got from gpt2 is equal to the similarity I got from gpt2-medium. The similarity score I got from gpt2 is lower than the similarity score I got from gpt2-large. The score I would give to this word pair is $2$. This is close to the scores given by these three models.

## 2.2 Other questions

Based on the results I obtained, I think the gpt2-medium model aligns best with my predictions. For example, for the word pair (sun, sky), gpt2-medium gave a similarity score of $6.6$, which is relatively high. Also, for the word pair (war, blood), it gave a fairly high similarity of $4.2$. In contrast, the other two models, although they gave high similarity for (sun, sky), did not rate (war, blood) as highly similar. This suggests that, overall, gpt2-medium matches human judgments the best. For the other word pairs, gpt2-medium also produced many scores that were close to my own evaluations.

Some of the results were surprising, particularly with the GPT-2 Large model. I had expected that increasing the number of parameters and layers would yield embeddings that more accurately reflected human semantic intuitions. However, GPT-2 Large sometimes produced similarity scores that were less aligned with my judgments. For instance, in the pair (money, gold), GPT-2 Large gave 5.6, which is slightly lower than gpt2-medium's rating, and in (war, blood), it produced 3.8 while I rated it much higher at 6.6. This indicates that a larger model does not necessarily guarantee more human-like semantic associations.

Across all three models, there were consistent differences between model scores and my judgments, particularly in the associations I expected to be strong. For instance, I anticipated that (money, gold) would receive very high similarity scores and that (war, blood) would also be strongly associated as I discussed earlier. Surprisingly, all three models underestimated these connections. As a human, I personally may associate these words strongly, or sometimes, for example, think that gold is somehow equivalent to money. But the similarity ratings given by gpt models reflect limitations in the models’ pretraining data or the way they encode relationships that humans consider highly meaningful or culturally significant. It seems that LLM embeddings only capture statistical patterns of token co-occurrence, which is probably different from human conceptual knowledge, so some obvious semantic associations may be underrepresented.

When it comes to the differences across models, gpt2-medium seems to provide the closest alignment with my intuition, while gpt2-large does not always outperform smaller ones in capturing semantic similarity. The differences observed suggest that model size alone is not a perfect predictor of accuracy in human-aligned meaning representations, and that embeddings reflect patterns in the training corpus rather than purely human-like reasoning. 