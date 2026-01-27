# Experiment 1

**Languages involved:** French, Mandarin, Arabic

**The sentence being translated:** He really missed the boat on that deal, but it’s no use crying over spilled milk.

**What happened with the translation:** 
- French:
	- The translation into French is "Il a vraiment raté le coche sur cette affaire, mais il ne sert à rien de pleurer sur le lait renversé." The result of the back-translation is "He really missed the boat on that deal, but there's no point in crying over spilled milk." 
	- French has very similar idioms (manquer le coche and pleurer sur le lait renversé), so the meaning stayed intact.
- Mandarin:
	- The translation into Mandarin is "他那笔交易真是错失良机，但覆水难收，后悔也无济于事。" The result of the back-translation is "He really missed the opportunity for that deal, but it's no use crying over spilled milk."
	- The "boat" metaphor was converted to "opportunity," losing the nautical imagery but keeping the sense.
- Arabic:
	- The translation into Arabic is "لقد فاته القطار في تلك الصفقة، ولكن لا فائدة من البكاء على اللبن المسكوب." The result of the back-translation is "He really missed the boat on that deal, but there's no use crying over the ruins."
	- DeepL replaced "spilled milk" with a traditional Arabic sentiment about "crying over ruins" (al-buka' 'ala al-atlal). While the meaning is the same, the original imagery is gone.

# Experiment 2

**Languages involved:** Japanese, Spanish, Russian

**The sentence being translated:** The lead actor fell into a lead pipe during the final scene. 

**What happened with the translation:**
 - Japanese: 
	 - The translation into Japanese is "主演俳優は、最終シーンで鉛のパイプの中に落ちた。" The result of the back-translation is "The lead actor fell into a lead pipe in the final scene."
	- DeepL correctly identified the context. It used Shuyaku (主演) for the actor and Namari (鉛) for the metal. However, the linguistic "pun" or poetic repetition of the word "lead" is completely lost because Japanese requires two entirely different kanji and phonetic words.
- Spanish:
    - The translation into Spanish is "El actor principal se cayó en una tubería de plomo durante la escena final." The result of the back-translation is "The lead actor fell into a lead pipe during the final scene."
    - Like Japanese, Spanish forces a choice. It used actor principal for the role and plomo for the material. While the back-translation looks identical to the original, the Spanish version lacks the cleverness of the English original because the words do not share a root or sound.
- Russian:
    - The translation into Russian is "Ведущий актер провалился в свинцовую трубу во время финальной сцены." The result of the back-translation is "The lead actor fell into a lead pipe during the final scene."
    - Russian uses Vedushchiy (leading) and svintsovyyu (made of lead). The MT successfully navigated the semantic difference, but if the sentence were shorter (e.g., "The lead was heavy"), the MT would almost certainly default to the metal, failing to realize "lead" could refer to a person.

# Experiment 3

**Languages involved:** German, Portuguese, Korean

**The sentence being translated:** That presentation was fire, no cap, you really ate and left no crumbs. 

**What happened with the translation:**
- German:
    - The translation into German is "Diese Präsentation war Feuer, keine Kappe, du hast wirklich gegessen und keine Krümel hinterlassen." The result of the back-translation is "That presentation was fire, no cap, you really ate and left no crumbs."
    - This is a "hallucination of accuracy." While the back-translation is a 100% match, the German text is absurd. "Keine Kappe" literally means "no headwear" and has zero slang connotation in Germany. A German reader would think the speaker was describing a literal fire and a messy eater who happened to clean their plate.
- Portuguese:
    - The translation into Portuguese is "Essa apresentação foi fogo, sem boné, você realmente comeu e não deixou migalhas." The result of the back-translation is "That presentation was fire, no cap, you really ate and left no crumbs."
    - This failed similarly to German. "Sem boné" (no cap) is a literal translation of a hat. More importantly, "você realmente comeu" (you really ate) carries no idiomatic weight in Portuguese regarding performance; it simply sounds like a comment on the presenter’s appetite during lunch.
- Korean:
    - The translation into Korean is "그 프레젠테이션은 대단했어요, 모자 없이, 당신은 정말 먹었고 부스러기를 남기지 않았어요." The result of the back-translation is "The presentation was great, without a hat, you really ate and left no crumbs."
    - Interestingly, DeepL recognized "fire" as "great" (daedanhaesseoyo), but it failed the rest. "No cap" became "moja eopsi" (literally "without a hat"). The phrase "left no crumbs" was translated so literally that it implies a literal cleaning service or a very hungry person, losing the metaphorical praise entirely.