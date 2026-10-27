/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 10: Interviewing Techniques for Understanding the Person Beneath the Mood Disorder
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch10 = {
  chapter: "ch10",
  intro: "Chapter 9 taught you to recognize a mood disorder. Chapter 10 asks a different question: what is it like to be the person who has one? Shea takes the matrix from Chapter 7, collapses it to five wings (biological, psychological, dyadic, familial and societal, worldview), and walks outward through them using depression as the prototype, because every psychiatric disorder damages a person's whole matrix in the same way. The payoff is practical. Patients can tell within minutes whether an interviewer knows these symptoms from the inside, and when they sense that you do, they feel safer and say more, including the suicidal thoughts that a checklist never reaches. The chapter also insists on an uncomfortable truth: the moment you sit down, you become part of the patient's matrix, affected by the depression and affecting it. The practice items and the simulation 'The window shade' are built on this chapter; read it before you interview your first severely depressed inpatient.",

  highYield: {
    mustKnow: [
      "Phenomenological familiarity is a clinical tool. Questions that show you know how depression feels (the heaviness, the urge to shut the eyes, the worries that arrive before dawn) tell the patient you have seen this before and respect its complexity. Engagement deepens, and intimate material, including suicidal ideation, surfaces more readily.",
      "The interview begins with the first look. Slowed movement, delayed acknowledgment, unkempt appearance, and the heaviness patients describe ([[Leaden paralysis]] in DSM-5 language) are the body's version of depression. Milder decrements in responsiveness are often the first clue to a milder depression.",
      "The depressive paradox: cognitively the patient feels the depression is caused by their own flaws, while emotionally it feels like something that has invaded them from outside. The loss of control threatens the ideal self; Jaspers called the whole state an [[Ossification]]. Asking what the body has felt like, and what losing energy and appetite has done to the person's view of themselves, lets this be said aloud.",
      "In an [[Agitated depression]] energy is everywhere but useless: disorganized, nagging, driving the hands and legs, worst in the morning when melancholic. In a [[Dysphoric mania]] energy is organized and driven, and plans (including plans for suicide or violence) can be intricate. Ask what time of day is worst; the calm patient you see at four in the afternoon may have been pacing at eight.",
      "Depression warps the perception of time and space. Without a sense that anything can change, the future becomes meaningless, Minkowski's [[Blocking of the future]], which partly explains why depressed patients seem unmotivated. The [[Shrinking active world]] contracts the part of the environment the person still engages with, cutting off reward, and you, the interviewer, may not be inside it.",
      "The [[Window shade response]]: a compelling urge to shut the eyes, even while standing or walking, to shut out an overwhelming world, with immediate relief. In Shea's experience it is a reliable marker of moderate to severe depression, absent in pure anxiety disorders, and patients are often surprised and engaged when you know to ask about it.",
      "[[Ideational caging]] traps thought in a few ruminative themes; in the interview it shows as a patient who returns to one topic or asks the same question again despite reassurance. Open the cage by acknowledging the worry, explaining why you need the other material, setting a frame for returning to the question, and asking it again in a calm, firmer tone. It is the wandering-interview strategy of Chapter 3 applied to depression, and it does not always work.",
      "Beck's distortions (overgeneralization, exaggeration, ignoring the positive) and his [[Cognitive triad]] (negative views of the world, the self, and the future) are audible in ordinary conversation. Self-blame is a milder cousin of [[Delusional guilt]]; the [[Immunity to logic]] means facts simply fail to update the patient's conclusions. Hearing these processes helps you detect depression that is presenting somatically or atypically, and flags a candidate for cognitive therapy.",
      "Four content themes feed one another: loneliness that becomes a conviction of being alone, self-loathing with guilt, helplessness, and hopelessness. Guilt can slide into [[Perceived burdensomeness]], Joiner's reliable interpersonal harbinger of suicide; probe beneath 'don't waste your time on me.' Beck showed [[Hopelessness]] predicts suicide better than depressed mood itself, so ask about the future and then ask directly.",
      "Defenses disguise depression: denial and repression (the patient does not know they are depressed), isolation and rationalization (everything is loaded onto one symptom, 'I just can't sleep'), anger (the first glimpse of a depression, and the [[Anger–guilt–depression loop]]), [[Projection]] (self-hatred becomes 'others want to punish me'; paranoia can hide a lethal depression), and the [[Pseudo-hypomanic defense]] (too cheerful for the story being told).",
      "Depression is interpersonal. The patient withdraws, interactions lose warmth, others respond with coolness, and the patient's world becomes hostile in fact, a self-fulfilling prophecy and a forerunner of Seligman's [[Learned helplessness]]. Your own frustration, irritation, guilt, unexpected sadness, or feeling of being ineffectual are both diagnostic clues and [[Countertransference]] risks; the interview needs a calm and calming pace.",
      "The interviewer changes the patient too. With atypical depression, persistent depressive disorder, or depression alongside a personality disorder, an overly warm, extroverted interviewer can brighten a mood-reactive patient and then underestimate the depression ([[Mood reactivity]]). Cheerful people also annoy depressed patients. Aim for the middle ground of gentle warmth and interested listening.",
      "First tears: allow them briefly, name what you see ('you seem sad right now,' or ask whether the patient is trying not to cry), normalize crying as the body's way of saying it hurts, then ask whether a tissue is wanted while offering one. Tears lower defenses; core pains emerge if you do not shut the moment down. Only uncontrollable crying needs a reassuring, firm redirection.",
      "The whole family has the depression. Relatives are essential informants and partners in treatment planning, and their frustration, helplessness, and anger (sometimes aimed at you) may be the first diagnostic clue. Interview a struggling family member alone for a few minutes and ask who is supporting them; screen them for depression and suicidal thoughts if needed. Some families also need the patient to stay ill ([[Family homeostasis]]).",
      "Culture and society shape how a depression is stigmatized, how much shame it adds, and how freely relatives report its severity. Ask about cultural and religious views of depression and suicide when you do not know them; the asking itself opens doors. Then spend a few minutes on the [[Worldview|framework for meaning]] (religion, family, work, country, a team, a former uniform): it reveals supports, guilt-fuelling beliefs, and the places where a treatment recommendation would be heard as an 'artificial answer.'"
    ],
    pitfalls: [
      "Running the neurovegetative review without ever asking how the symptoms feel to the person, so the patient learns that you collect data but have never met depression.",
      "Mistaking the morning pacing of an agitated depression for a dysphoric mania, or the reverse, without asking whether the energy is organized and driven or frantic and useless.",
      "Treating a patient's slowness, vagueness, and need for repeated questions as a difficult interview rather than as data, and letting the resulting frustration leak into your tone, which the patient reads as 'you find me irritating too.'",
      "Following the caged patient back to the mortgage a fifth time (feeding the rumination) or telling them to stop worrying (tightening the cage), instead of acknowledging, explaining, framing, and returning.",
      "Hearing 'don't bother with me, help someone you can help' as modesty rather than as possible burdensomeness, and moving on without asking about suicide.",
      "Accepting a paranoid presentation at face value, with few neurovegetative symptoms and denied suicidal ideation, and not considering that the paranoia may be projected self-hatred over a depression that could kill the patient tonight.",
      "Being cheered along by a buoyant patient describing catastrophic stressors, and missing the quiver of the chin that the pseudo-hypomanic front cannot quite hide.",
      "Being so warm and upbeat that a mood-reactive patient brightens, then documenting that the depression looks mild.",
      "Handing over a tissue (or changing the subject) the instant tears appear, which tells the patient that crying is a problem and closes the moment when defenses were lowest.",
      "Interviewing the patient as if the depression stopped at their skin: ignoring the family's information, their exhaustion, the possibility that one of them is now depressed too, and the possibility that the family system quietly depends on the patient's illness.",
      "Recommending medication or psychotherapy before learning that this patient believes human remedies are artificial, and rupturing the alliance with the recommendation itself."
    ],
    phrases: [
      { say: "What has your body felt like to you lately? And when the energy and the appetite went, what did that do to how you see yourself?", when: "Entering the biological wing through the person's experience rather than a symptom count; it also lets the paradox of self-blame and invasion be spoken. Composed." },
      { say: "Which part of the day is worst for you?", when: "After observing agitation or hearing of restlessness; the answer dates the melancholic morning pattern and reminds you that the patient in front of you at four o'clock looked different at eight." },
      { say: "When the depression is at its worst, do you ever get a strong urge just to close your eyes, not to sleep, but to shut everything out, and does it strike you as odd how badly you want to?", when: "Screening for the window shade response. The 'odd to you' clause separates it from sleepiness, and the question itself is engaging. Composed." },
      { say: "I know the money is hard to set aside, and we'll come back to it. To help you, though, I need to understand what the depression itself has done to you, so I'll ask a few specific questions and bring us back if we drift. Once more: how long is it taking you to fall asleep?", when: "Opening an ideational cage: acknowledge, explain, frame, return, in a calm but firmer tone. Composed." },
      { say: "Have you been especially hard on yourself lately? Deep down, do you feel you're basically a good person, or do you have doubts about that?", when: "Carlat-style questions for subtle guilt and self-loathing, asked before probing for burdensomeness. Composed." },
      { say: "Right now, what ways of getting help do you see for yourself? And when you look ahead, what do you see for yourself in the future?", when: "Gauging helplessness and hopelessness. A blank look, a dismal shake of the head, or 'nothing' should raise your concern and lead to a direct question about hopelessness and suicide. Composed." },
      { say: "You seem sad to me right now, even as you're joking.", when: "Said quietly to a patient whose cheerfulness does not match the story; it may open a floodgate of tears behind a pseudo-hypomanic defense. Composed." },
      { say: "It's all right to cry. Everyone does; it's the body's way of telling us we're hurting. (pause) Maybe you can tell me a little about what's hurting most.", when: "First tears: normalizing, then an invitation into the core pain while defenses are down. Composed." },
      { say: "I can see how much you're carrying for your mother through this. I'm wondering who is supporting you.", when: "Alone with an exhausted family member for a few minutes; be ready for 'no one' and for tears, and for a brief screen of their own mood and safety." },
      { say: "I'm not sure how depression is talked about in your family or your church. Is it something people speak about openly, or something that gets hushed up?", when: "When you do not know the patient's cultural or religious frame for depression and suicide; asking makes it safer to disclose serious symptoms. Composed." }
    ]
  },

  sections: [
    {
      id: "biological",
      title: "The biological wing: the body as first messenger",
      lede: "Appearance, slowness, heaviness, the depressive paradox, and the two kinds of agitation.",
      blocks: [
        { type: "p", text: "Shea opens with Baudelaire's low sky weighing like a lid, and the image is clinical as well as literary. Walk into the room of a severely depressed person and the biology is on display before a word is spoken: hair uncombed, clothes mismatched, nails dirty, a vacant look, and a slowness of movement with a delay of seconds (or no response at all) before the person acknowledges you. In milder depressions the same thing shows as a subtle drop in responsiveness. Train yourself to register that first look as the first data of the interview." },
        { type: "p", text: "The slowness parallels what patients describe from inside: a heaviness, as if a shawl were pressing on the shoulders, with limbs that feel weighted ([[Leaden paralysis]] in the DSM-5's atypical features, met in Chapter 9). With the heaviness comes an intense inertia, so that starting any movement feels disproportionately costly and resting feels like the only reasonable choice. Shea quotes a young woman who could sit for two hours looking at clothes on the bedroom floor, unable to summon the decision to pick them up because the decision itself seemed to cost more than it could be worth." },
        { type: "p", text: "Her opening words, that it is 'so strange,' point to a paradox worth remembering. On the cognitive level depressed patients blame themselves: their speech becomes a web of self-recrimination, and they experience the depression as actively caused by their own flaws. On the emotional level the same people feel invaded, as if the depression had come over them from outside, something they neither understand nor control. This incipient loss of control threatens their sense of who they are supposed to be. Jaspers compressed the whole state into one word, [[Ossification]]: body and feeling turned to bone. Why the body changes this way is not settled; the changes may be a damaging inter-wing effect (a psychological withdrawal from painful circumstances, a social signal that help is needed, a cultural mechanism for removing a malfunctioning member from danger, a spiritual withdrawal from a meaningless world) or a direct intra-wing result of altered neurochemistry, or any mixture. Whatever the cause, the person's own body has become a stranger, one more step into isolation. Energy withers; appetite and libido dry up; and each loss is read as further proof of failure." },
        { type: "list", items: [
          "Ask what the body has felt like recently.",
          "Ask what it is like to have lost energy and drive.",
          "Having heard about lost sleep, appetite, and energy, ask how all those changes have made the person feel about themselves.",
          "These questions let the patient ventilate and signal that you are interested in a person whose depression only they can describe, not in a symptom list."
        ] },
        { type: "compare",
          a: { title: "Agitated depression", items: [
            "Energy 'all over the place' yet no sustained energy for anything: frantic inertia.",
            "Hands wring, fingers pick and pluck, sitting takes willpower, legs demand pacing.",
            "Tasks cannot be begun; the agitation itself disables.",
            "Thought races as well, but the whole is disorganized.",
            "With melancholic features, worse in the morning."
          ] },
          b: { title: "Dysphoric mania (Chapter 9)", items: [
            "Energy is organized and driven; the patient is compelled to try tasks.",
            "Initial approach to tasks is often surprisingly well organized, even if few are finished.",
            "Can develop and initiate intricate plans, including plans for self-harm, suicide, or violence.",
            "Anger and a bitter angst often lead; neurovegetative symptoms may be mild.",
            "Changes treatment: antidepressants alone can make it worse."
          ] }
        },
        { type: "pearl", title: "Ask which part of the day is worst", text: "An [[Agitated depression]] nags the body with an intermittent voice. The composed patient you interview at four in the afternoon may have been pacing and plucking at eight in the morning. One question about the worst time of day recovers that history and helps identify melancholia." }
      ],
      practice: [{ kind: "drill", id: "mood-pictures", label: "Drill: Mood presentations" }]
    },

    {
      id: "perception",
      title: "Time blocked, space shrinking",
      lede: "Two alterations in how the world is perceived, and why the interviewer may be standing outside it.",
      blocks: [
        { type: "p", text: "Depression has what Shea calls a calling card: a set of changes inside the mind that most, though not all, depressed people show in some combination. He groups them into four areas, perception of the world, cognitive processes, thought content, and psychodynamic defenses, and the next four sections of this guide follow that order. Knowing them does two things at once: it sharpens your ear for the subtle clues of a depression that has not announced itself, and it deepens the empathy with which you ask." },
        { type: "p", text: "The first perceptual change concerns time. In a severe major depressive episode the idea that anything could change, now or later, is conspicuously missing. Flatness smothers spontaneity, each moment seems a replica of the last, and time passes slowly enough to hurt. Our ordinary sense of a future depends on the sense that the future might be different; take that away and the future becomes meaningless, every day a copy. The phenomenologist Minkowski named this the [[Blocking of the future]], and Shea suggests it is one reason depressed people look unmotivated. If nothing can be different, why try to make it so?" },
        { type: "p", text: "The second change concerns space. Shea's 'active world' is the part of the environment a person still bothers to engage with, and in depression it shrinks, a cataract forming over the mind. The [[Shrinking active world]] matters behaviorally because it short-circuits environmental reward; the patient becomes a behavioral isolate. His patient described walking past blooming roses on her way to work, roses she loved, and simply not seeing them while depressed, because all her attention was turned inward on the pain and on controlling it." },
        { type: "pearl", title: "You may not be in the room", text: "It can be a shock to realize that the interviewer is not necessarily part of the patient's active world. To engage a severely depressed person you have to enter their world as best you can, which usually means becoming more active yourself while accepting, patiently, that answers will be slow and sparse. A change in your usual style is part of the technique, not a failure of it." }
      ],
      practice: [{ kind: "quiz", id: "ch10", label: "Quiz: Chapter 10" }]
    },

    {
      id: "window-shade",
      title: "The window shade response",
      lede: "A reliable marker of moderate to severe depression that few interviewers know to ask about.",
      blocks: [
        { type: "p", text: "Depressed patients retreat to bed for much of the day, and Shea's observation is that they are seldom going there mainly to sleep (the sleep is fitful at best). They go because bed is the one place in our culture where it is acceptable to shut your eyes, and shutting the eyes shuts out the world with an immediate, desperately needed relief. The sheets pulled over the head and the shades drawn to darken the room are the same move at larger scale." },
        { type: "p", text: "From there comes the phenomenon Shea considers nearly unique to withdrawn depressive states: a need to close the eyes even while standing or walking, sometimes almost overpowering, as if the person were pulling down the ultimate window shade. He learned it from an articulate lawyer who, during a depression, kept up his morning walks through beautiful woodland and found himself compelled to close his eyes for several paces at a time, not from sleepiness but from an urge that came over him almost against his will, because the relief felt so good, and then sat in court three hours later doing his best for a client. The [[Window shade response]] is not reported, in Shea's experience, by patients with agitated depressions or with pure anxiety disorders such as generalized anxiety disorder or OCD. He has found it a surprisingly reliable marker of a moderate to severe depressive episode." },
        { type: "exchange", title: "Asking about the shade", lines: [
          { who: "Clin.", t: "You've described days when everything feels like too much. When it's at its worst, do you ever get a strong urge just to close your eyes, not to sleep, but to shut everything out?" },
          { who: "Pt.", t: "(looks up for the first time) How did you know that? I do it at my desk. I'll shut them for a minute and it's the only time I feel any relief." },
          { who: "Clin.", t: "Does it strike you as odd how badly you want to?", tag: "the 'odd to you' clause" },
          { who: "Pt.", t: "Very. I've never told anyone. I thought it was just me being strange." }
        ], note: "Composed. Notice the engagement: the patient is surprised that the interviewer knows the sensation, and that surprise builds trust. Phrase the question so that sleepiness is excluded, and listen for the relief, the sense of compulsion, and the 'strangeness' that patients report." },
        { type: "pearl", title: "Why it earns a place in your routine", text: "Two gains in one question: a marker that helps you gauge severity when the patient minimizes, and a moment in which the patient learns that this interviewer has met depression before. Pair it with the Chapter 9 question about early morning awakening and you have two phenomenological questions that do more for the alliance than any amount of reassurance." }
      ],
      practice: [{ kind: "practice", id: "c10p2", label: "Practice: the window shade question" }, { kind: "sim", id: "sim-shade", label: "Simulation: The window shade" }]
    },

    {
      id: "cognition",
      title: "Cognitive processes: caging, distortions, and the immunity to logic",
      lede: "How depressed thinking moves, how it traps itself, and how to open the cage long enough to finish the interview.",
      blocks: [
        { type: "p", text: "In a melancholic depression the stream of thought slows, as if frozen; in an agitated depression it boils and races. Either way it becomes disjointed, and concentration slips away. On top of speed and flow, depression produces [[Ideational caging]]: the mind is trapped inside a small network of limiting themes, ruminating about the past, the present, or the future, and cannot attend to anything new, including the therapeutic. In the interview a cage shows as a patient who keeps returning to one topic, or asks the same question again and again despite reasonable reassurance. It can stall an interview completely." },
        { type: "steps", items: [
          "Acknowledge the worry without arguing with it ('no question, the money situation has to be addressed').",
          "Explain why you need the other material (the depression is also a big problem, may be making the money harder to fix, and the sleep questions will help decide what could help fastest).",
          "Set a frame: say that you will ask some important questions and will gently pull the conversation back if it drifts.",
          "Return to the question, in a calm but firmer tone, and ask it again.",
          "Accept that with poor timing, or in a severe depression, the cage may not open. Note that too; it is a measure of severity."
        ] },
        { type: "exchange", title: "Opening a cage", lines: [
          { who: "Clin.", t: "Tell me a little about what all this has done to your sleep." },
          { who: "Pt.", t: "Sleep. There's no sleep. The rent is due on the fifth and I don't have it. The kids. What are we going to do?" },
          { who: "Clin.", t: "The rent is real, and we'll come back to it. I'm also trying to understand your depression, because it may be making the rent even harder to deal with, and knowing about your sleep tells me what kind of treatment could help fastest. So, how long does it take you to fall asleep?", tag: "acknowledge, explain" },
          { who: "Pt.", t: "I don't know. I lie there and all I see is the fifth of the month. It's my fault. It's all my fault." },
          { who: "Clin.", t: "I know it's hard to put the money down even for a minute. Here's what I'd like to do: I'm going to ask you a few specific questions, and if we drift, I'll bring us back. It will help us help you sooner. Think carefully: how long is it taking you to fall asleep?", tag: "frame, return; calm but firmer" },
          { who: "Pt.", t: "Hours. Two, three hours. And then I'm awake again at four." }
        ], note: "Composed. The clinician never argues that the rent does not matter and never asks the patient to stop worrying; both tighten the cage. This is the Chapter 3 strategy for the [[Focusing statement|wandering interview]], applied to rumination." },
        { type: "p", text: "Aaron Beck catalogued the distortions that run through depressed thinking. Overgeneralization: 'everything has fallen apart,' 'nobody cares.' Exaggeration: a boss's frown becomes certain dismissal. Ignoring the positive: a manager in the best sales season her shop had ever had declares that missing her own extravagant quota will mean she has failed completely. Across all of these runs Beck's [[Cognitive triad]], a negative view of the world, a negative view of the self, and a negative view of the future." },
        { type: "table", head: ["Distortion in the triad", "What it sounds like", "What drives it"], rows: [
          ["Negative view of the world", "Every misfortune heard about (an accident, a cancer, an injured dog) is taken as proof that the world is bad and the depression justified", "A negative filter over perception; the patient continually validates the depression"],
          ["Negative view of the self", "Reflexive self-blame for things that are plainly not the patient's doing; apologies for existing", "Self-blame as a cognitive trap; its ominous relative is [[Delusional guilt]]"],
          ["Negative view of the future", "Reassurance and evidence change nothing; tomorrow will be exactly as feared", "[[Immunity to logic]] combined with the blocking of the future"]
        ] },
        { type: "case", title: "Minkowski's apartment-mate", text: "Summarized from the chapter. Minkowski lived for months with a man in a psychotic depression who was certain each evening that he would be mutilated and executed that night, and who kept his companion awake with his terror. Minkowski assumed the morning would prove the fear false. It did, day after day, and the patient's conviction did not shift at all: the facts went past him without ever being used to plan or predict. Minkowski realized that ordinary thinking is empirical, interested in facts because they shape expectations of the future, and that this carry-over from past and present into the future was simply missing in his patient. Shea's point is that a milder version of the same immunity accompanies many non-psychotic depressions and frustrates families, therapists, and first interviewers alike." },
        { type: "pearl", title: "Listen for the process, not only the mood", text: "Caging, overgeneralization, and immunity to logic can betray a depression that presents atypically or through physical complaints, when the patient never says the word 'sad.' In milder cases, hearing these processes also flags a candidate for cognitive therapy later." }
      ],
      practice: [{ kind: "practice", id: "c10p1", label: "Practice: opening a cage" }]
    },

    {
      id: "themes",
      title: "Thought content: loneliness, self-loathing, helplessness, hopelessness",
      lede: "Four themes that reinforce one another, and the suicide warning signs hidden inside them.",
      blocks: [
        { type: "p", text: "Process and content blur, but Shea singles out four content themes that blend into and perpetuate each other. The first is loneliness so intense that it becomes qualitatively different from everyday loneliness: caging and the shrinking active world cut the person off from friends, family, and the clinician, until the patient no longer merely feels lonely but is convinced they are alone, permanently cut off. Joiner's work on suicide adds a cruel twist: acutely suicidal patients can feel this even while surrounded by people who love them, and the presence of loved ones can be turned by the depression into the thought of being a burden to them." },
        { type: "p", text: "The second theme is self-loathing, with intense guilt: the patient is repulsed by their own company, which deepens the loneliness, and feels they have no purpose except their pain. Here lies one of the most dangerous cognitions in psychiatry, [[Perceived burdensomeness]], the belief that 'I am truly a burden to the people I love,' which Joiner regards as among the most reliable interpersonal harbingers of a suicide attempt. It often arrives obliquely: 'don't bother with me, talk to someone you can actually help.' Probe beneath such remarks for the lethal logic that others would be better off if the patient were dead, and move into a suicide assessment (Chapter 17) when you find it." },
        { type: "p", text: "Carlat's questions help subtle guilt surface: whether the person has been especially critical of themselves lately, and whether, deep down, they feel they are essentially a good person or have doubts about it. From isolation and self-disgust the third theme, helplessness, follows naturally and fuels the inertia that keeps patients from treatment ('why bother?'). You can ask directly whether the person has been feeling helpless; a more sensitive gauge is to ask what ways of getting help they can see for themselves right now. A blank negative or a dismal shake of the head should raise your level of concern." },
        { type: "p", text: "All of the above converge on the fourth theme, [[Hopelessness]]. Beck demonstrated that hopelessness predicts suicide more specifically and sensitively than depressed mood does. Measure it indirectly first, by asking what the person sees for themselves in the future, then directly: are you feeling hopeless?" },
        { type: "exchange", title: "Beneath a dismissal", lines: [
          { who: "Pt.", t: "You shouldn't waste your time on me. My daughter has enough on her plate without hauling me to appointments." },
          { who: "Clin.", t: "It sounds as if you feel you've become a weight on her.", tag: "reflecting the burden theme, not reassuring it away" },
          { who: "Pt.", t: "I am a weight. She'd never say it, but she'd be better off." },
          { who: "Clin.", t: "Better off how? Sometimes when people feel they're a burden, they start to think their family would be better off if they weren't here at all. Has that thought come to you?", tag: "normalization into a direct suicide question" },
          { who: "Pt.", t: "(long pause) Most nights." }
        ], note: "Composed. 'Don't bother with me' was the doorway. Had the clinician said 'of course you're not a burden' and moved on, the nightly thought would have stayed hidden." }
      ],
      practice: [{ kind: "practice", id: "c10p3", label: "Practice: hearing burdensomeness" }]
    },

    {
      id: "defenses",
      title: "Defenses that hide depression",
      lede: "Denial, isolation, anger, projection, and the too-cheerful patient, drawing on MacKinnon, Michels, and Buckley.",
      blocks: [
        { type: "p", text: "Shea borrows from MacKinnon, Michels, and Buckley's discussion of the depressed patient and keeps the defenses most likely to confuse an initial interviewer. The first pair is denial and repression. As with Mr. Whitstone in Chapter 9, some people cannot admit depression into awareness; they deny it verbally and may truly not know they are depressed. Careful questioning usually finds it anyway, through neurovegetative symptoms or through depressive cognition such as caging and overgeneralization. The second pair is [[Isolation (defense)|isolation]] and rationalization: all the depressive rumination is loaded onto one symptom complex ('I've got no real problems, I just can't sleep and I get headaches every day') while depression itself is denied." },
        { type: "p", text: "Anger may be the first glimpse of a depression. Abraham and Freud read depression as anger turned inward, arising from perceived abandonment, rejection, frustration, attack, betrayal, or injustice. Anger regularly pierces the sadness of an agitated depression, and Shea has watched it shoot through the apathy of a supposed melancholia as diatribes against former doctors or relatives. A patient who attacks you verbally in the first minutes may be showing you their depression. Anger and depression can also lock into the [[Anger–guilt–depression loop]]: the patient lashes out at a friend, feels guilty for the outburst, sinks deeper, grows more irritable, and lashes out again. Anger also runs through borderline personality disorder, persistent depressive disorder, atypical depression, and mixed bipolar states, so it is a signal to think, not a diagnosis." },
        { type: "case", title: "The paranoid patient who was depressed", text: "Summarized from the chapter. A colleague consulted on a medical inpatient who presented as psychotically paranoid, denied all suicidal ideation, and reported few neurovegetative symptoms. Psychiatric transfer was planned for the morning, with checks through the night but no one-to-one observation. In a gap between checks the patient hanged himself, quickly and efficiently. Shea's lesson: [[Projection]] can turn unbearable self-incrimination into 'other people hate me' or 'others want to punish me,' and that second statement may be suicidal ideation projected outward. Depression and paranoia can alternate. When a paranoid picture is in front of you, ask yourself what it may be defending against, and weigh suicide risk accordingly." },
        { type: "p", text: "The last defense is the [[Pseudo-hypomanic defense]]: be wary of anyone who seems too happy while describing a string of unsettling stressors. Watched closely, the buoyant patient often betrays the sadness in a minute quiver of the chin or a catch in the voice. A quiet observation at that moment, that the person seems sad to you even as they talk, can open a floodgate of tears." },
        { type: "exchange", title: "Behind the smile", lines: [
          { who: "Pt.", t: "(grinning) So, lost the job in March, wife left in June, and now I'm sleeping in the car. Hat trick! At least the parking's free." },
          { who: "Clin.", t: "(pause) You tell it with a lot of humor." },
          { who: "Pt.", t: "What else can you do, right? Gotta laugh." },
          { who: "Clin.", t: "You know, as you're talking, you look sad to me.", tag: "quiet, after noticing the chin quiver" },
          { who: "Pt.", t: "(the grin goes; his voice catches) I haven't slept in the car once without crying." }
        ], note: "Composed. The clinician neither joins the jokes nor confronts them; a single soft observation, timed to a nonverbal leak, lets the front come down." }
      ],
      practice: [{ kind: "practice", id: "c10p5", label: "Practice: seeing through a cheerful front" }]
    },

    {
      id: "dyadic",
      title: "The dyadic wing: the patient, the interviewer, and the feelings between them",
      lede: "How depression poisons interaction, what it does to you, and what you do to it.",
      blocks: [
        { type: "p", text: "Two people interacting form a dyadic system, and depression often shows itself first in the flow of communication and affection within one. It is an interpersonal illness, seldom confined to a single person. Shea's patient described the mechanism: convinced that everyone can see her depression, she feels every interaction requires putting on a front, the front costs energy, the energy is already gone, so she avoids people; even buying a coffee, she speaks more softly, does not smile, does not meet the clerk's eye, and just wants it over. Withdrawal removes the chance of positive reinforcement. Worse, the remaining interactions lose quality: less smiling, less spontaneity, more curtness, which others read as coolness or aloofness and answer with reserve or a snapped reply. The patient has, without intending it, created a hostile world with no rewards in it, a self-fulfilling prophecy." },
        { type: "p", text: "This cycle can lead into Seligman's [[Learned helplessness]]. Animals exposed to inescapable aversive stimuli eventually stop trying to escape, stop exploring, and so never discover that escape has become possible; the helplessness ensures its own survival. Humans add the ability to reframe such experiences into self-derogatory beliefs ('obviously nobody likes me,' 'I don't even know why I bother'). Questions that search for interpersonal dysfunction and learned helplessness include whether the person is going out as much as before; what it is like to be around people at work; what feelings come up when they meet a friend on the street; how people seem to be treating them; whether they have been irritable or flying off the handle; whether being around friends takes a lot of energy; and whether they are spending as much time on social media as they used to." },
        { type: "table", head: ["What you may feel", "What it may mean diagnostically", "What it risks"], rows: [
          ["Frustration: slow answers, vagueness, questions repeated, an interview that looms long", "Be on the lookout for a major depressive episode", "Haste or irritation in your tone, read by the patient as 'you find me irritating too'"],
          ["Anger, then guilt at catching yourself being uncaring", "The guilt itself can be the first clue to depression, and a glimpse of what the family lives with daily", "Distancing by voice or nonverbal cue; damaged engagement"],
          ["Unexpected sadness rising in you", "Sometimes the first suggestion of an atypical depression", "Over-identification; losing the observing stance"],
          ["Feeling ineffectual or out of touch as the patient introverts", "Expected with a shrinking active world; not a sign the interview is failing", "Giving up on engagement too early"]
        ] },
        { type: "p", text: "These reactions make the interviewer's inner life a diagnostic instrument and a hazard at once. Shea's prescription is continuous, adaptive creativity: look inward periodically, adjust pace and expectations, and bring a style that is both calm and calming, because any hint of haste or irritation is disengaging to a depressed patient and hardly a platform for an alliance. [[Countertransference]] is the name for the hazard; awareness is the remedy." },
        { type: "p", text: "The coin has a second face: the interviewer shapes the patient's presentation. This happens most with atypical depression, persistent depressive disorder (dysthymia), and depressions that accompany a personality disorder, because these patients are highly responsive to their surroundings. A patient with dysthymia or a histrionic personality can brighten deceptively fast when someone shows interest, the [[Mood reactivity]] of Chapter 9. An overly warm, extroverted interviewer can therefore shift the affect, see a patient who does not look very depressed, and downplay the complaints. Remember too that 'happy people' annoy depressed people, who feel they cannot possibly understand. The right place to stand is the calming middle ground: gentle warmth and interested listening." }
      ],
      practice: [{ kind: "practice", id: "c10p4", label: "Practice: first tears" }]
    },

    {
      id: "tears",
      title: "Tears",
      lede: "What to do the first time a patient cries, and the questions to ask yourself beforehand.",
      blocks: [
        { type: "steps", items: [
          "Allow it. The first time a patient cries in an interview, let them cry for a brief period rather than rushing in.",
          "If the patient is on the brink, name it softly: 'you seem sad right now,' or MacKinnon and Michels's question, whether they are trying not to cry. Either invites ventilation and reduces discomfort.",
          "Address the embarrassment that is almost always there: crying is all right, everyone does it, it is the body's way of saying we are hurting. After a brief pause, invite the person to say a little more about what is hurting.",
          "After some time to ventilate, ask whether the patient would like a tissue while holding one out. Asking, rather than handing it over, is itself a message.",
          "Listen. As defenses drop during and after tears, core pains and startling information often emerge. Changing the subject or cutting the moment short loses them.",
          "Only if crying becomes uncontrollable and prevents progress, redirect reassuringly but firmly: this is obviously upsetting and would be for anyone; take a moment to collect yourself, because it is important that we keep talking about what is troubling you."
        ] },
        { type: "p", text: "The tissue deserves a second look because of its metacommunications. Offering it while asking conveys that crying is a normal part of sadness, respects what the patient needs right now, and, by leaving the decision with the patient, communicates confidence that they are still in control and able to decide. Nothing about the gesture says 'please stop.'" },
        { type: "exchange", title: "First tears", lines: [
          { who: "Pt.", t: "She died in February. I was supposed to visit that weekend and I... (voice breaks; looks away)" },
          { who: "Clin.", t: "(softly) Are you trying not to cry?" },
          { who: "Pt.", t: "(nods; tears come)" },
          { who: "Clin.", t: "(waits) It's all right to cry. Everyone does. It's the body's way of telling us we're hurting. (pause) Maybe you can tell me a little about what hurts most.", tag: "normalize, then invite" },
          { who: "Pt.", t: "That I chose the overtime. I chose money over my mother." },
          { who: "Clin.", t: "(after a moment, holding out a tissue) Would you like a tissue?" }
        ], note: "Composed. The clinician waited, named, normalized, and only then offered the tissue; the guilt that emerged in the lowered-defense moment is exactly the material that an abrupt change of topic would have buried." },
        { type: "p", text: "Interviewers tend to shut crying down prematurely, partly because another person's pain is disturbing and partly because tears make us feel awkwardly helpless. Shea therefore makes self-examination part of basic training. What do I feel when someone cries? Do I ever see crying people as weak or ineffectual? How often do I cry, and how do I feel about myself when I do? Have I seen my parents, family, or friends cry, and what did I feel then? Answering these lowers the risk that your [[Countertransference]] will decide how you handle a crying patient. Many strong alliances have begun with a clinician's calm, mature response to a patient's first tears." }
      ],
      practice: [{ kind: "practice", id: "c10p4", label: "Practice: first tears" }, { kind: "sim", id: "sim-shade", label: "Simulation: The window shade" }]
    },

    {
      id: "family",
      title: "The familial and societal wing: the whole family has the depression",
      lede: "Relatives as informants, as co-sufferers, as part of the system that keeps a depression going, and the culture around all of them.",
      blocks: [
        { type: "p", text: "Begin with the practical. Family members may be the only reliable historians when a patient is too withdrawn or cognitively slowed to give one, and they know which past interventions helped, harmed, or did nothing. They are also natural partners in treatment planning. Not inviting their input, or ignoring it once given, is both foolish and insulting to the people who will live with the symptoms after the interview ends." },
        { type: "p", text: "On a deeper level, a depression can seem to have a life of its own, independent of the person labeled as depressed, and nowhere is this clearer than in a family. Family interaction can be the root of the depression (a hateful sibling rivalry, incest). A biochemically driven depression can reverberate through a family (a spouse laid off because of a severe endogenous episode, every member feeling the pain as if the imbalance were in their own brain). And family pathology can feed a depression that began elsewhere, as when an abusive spouse reinforces depressive guilt by calling the patient worthless and a disappointment to the children. Culture adds its own layer: in some Asian families a member's depression is felt as a reflection on the whole family, adding shame and guilt for the patient and giving relatives a quiet reason to understate the disability when you ask." },
        { type: "case", title: "Mrs. Thomas and her family", text: "Summarized from the chapter. Shea supervised an interview with a 70-year-old woman with an agitated major depression, her husband and adult son present. She fidgeted and cried throughout, switched topics abruptly to plead with her husband that she could not go on, complained about the hospital, and threatened to leave if she did not get her sleeping pills. Her husband refused a chair and stood behind her the whole time, lips pressed together, arms folded. Her son sat turned away, staring at his shoes, until he snapped at the interviewer to ask why she could not have the medication. The trainee's eye contact faltered and he mumbled through the mental status. Nobody in the room was comfortable, including the supervisor. Shea's reading: diagnostically one person had an agitated depression, but in reality the entire family, and even the hospital system, was having the episode. The relatives' frustration, anger, and helplessness (they cannot feel the anhedonia, so they cannot understand why she does not help herself, and their own lives are constantly interrupted) may be the first clue to the diagnosis, and their anger may land on you." },
        { type: "p", text: "The family therefore needs care too. Watching a child or spouse suffer while being unable to relieve it is, Shea writes from his own experience, a pain beyond words, and relatives sometimes develop a major depression of their own, as if the illness had replicated like a virus. If a family member looks depressed, interview them alone for a few minutes and ask, gently, who is supporting them; some burst into tears and answer 'no one.' Be ready to ask about suicidal thoughts and to connect them with help. The Murray-Swank article reprinted in Appendix IV gives practical strategies for building an alliance with families of patients with severe mental illness." },
        { type: "p", text: "A less comfortable possibility, from Bowen and Minuchin's family systems work: a family may need the patient's depression as a stabilizer. A relative with low self-esteem gains worth as 'the only one who really helps Mom'; an adult child who always felt put down finds it exhilarating to be in charge of a parent. At an unconscious level such relatives may not want the patient to get better and can undercut the recommendations you make in the closing phase. This [[Family homeostasis]] is one more reason to explore the dynamics around the [[Identified patient]] rather than treating the family as a neutral audience." },
        { type: "list", items: [
          "Who in your family seems to understand your depression, and who doesn't?",
          "Who in your family are you worried about right now? (The answer can reveal a relative who is not coping.)",
          "How do you think your family sees your depression?",
          "What suggestions have they been making about how to feel better? Has anyone told you to pull yourself together, or said they're tired of you being depressed all the time?",
          "Do you feel pressure from anyone at home to get better?",
          "What pressures has your spouse been under lately? Do you think your spouse sees you as a problem?",
          "Asked sensitively, these questions surface tensions that direct questioning would meet with denial, and often reveal guilt about being a burden, anger at perceived neglect, or detachment from a spouse."
        ] },
        { type: "p", text: "Beyond the family lie larger systems. Depression shows up as plummeting participation at work, in church and community groups, and on social media; those same systems may have triggered the episode (a forced retirement after layoffs, a move driven by taxes) or may buffer it. Society pays in billions of dollars of treatment and lost productivity, a damaging matrix effect on a national scale, and in turn society's stigma, housed in the cultural wing, increases the guilt and shame in the psychological wing and persuades families to downplay what they see. When you do not know how a patient's culture regards depression or suicide, ask: whether depression is talked about openly or hushed up where they come from, how their family and friends see it, how their faith regards suicide and what it means for the afterlife. It does not matter whether a Muslim clinician trained in Pakistan is asking a Christian American or the reverse; the asking itself can become the gateway to a life-saving conversation." }
      ],
      practice: [{ kind: "practice", id: "c10p6", label: "Practice: supporting the family" }]
    },

    {
      id: "worldview",
      title: "The worldview wing: the framework for meaning",
      lede: "A few minutes on religion, spirituality, and whatever else gives the patient's life its mission, and why a recommendation can fail without them.",
      blocks: [
        { type: "p", text: "Throughout the book Shea asks you to learn how patients view their symptoms, their problems, their lives, and their beliefs: the [[Worldview|framework for meaning]] of Chapter 7, the outermost wing of the matrix. An initial interview rarely has time to explore it in depth, but even a few minutes can yield clues for engagement and for later therapy, deepen your understanding of the person beneath the depression, and point to causes: never having built a framework for meaning, or watching one collapse, can trigger or perpetuate a depression as an [[Existential crisis]]." },
        { type: "p", text: "Demographic questions about religious background make easy springboards. Asked in a nonjudgmental tone, a question about what role religion plays, if any, in the person's life is usually answered naturally and specifically, and the presence of religious doubt or ambivalence in the current crisis registers quickly. (Chapter 20 develops the techniques for exploring religious and spiritual beliefs in detail.) Religion is not the only axis. Family, work, community, charity, patriotism, and subcultures such as sport or hip hop can each carry a person's sense of mission, and ignorance of them disrupts engagement and, as Chapters 6 and 7 showed, predicts whether the patient will follow your recommendations." },
        { type: "exchange", title: "Where a recommendation would fail", lines: [
          { who: "Clin.", t: "When you were feeling better, what did you like to do with your free time?" },
          { who: "Pt.", t: "I sang. Choir, mostly. Gospel. When the choir sings, people feel God in the room." },
          { who: "Clin.", t: "(with warmth) That sounds like it mattered a great deal. Has your faith been a place you've turned to through this?", tag: "following the lead, not the checklist" },
          { who: "Pt.", t: "I pray every day. People can't fix this. Doctors, pills, all of that is man's answer, and man's answers are hollow. Maybe I'm asking God for too much. Maybe that's why." }
        ], note: "Composed. Three findings in four lines: a potential support (pastoral counseling, choir, the congregation), a possible source of guilty rumination (asking too much of God, being to blame), and a clear warning that medication or psychotherapy, if proposed too soon or framed as 'the answer,' will be heard as hollow. The clinician now proceeds slowly, finding out what help this patient actually wants." },
        { type: "case", title: "Mr. Kulp and boot camp", text: "Summarized from the chapter. Shea was asked to see a 55-year-old man with alcoholism and moderately severe Parkinson's disease, admitted with suicidal ideation after a drinking binge; the stiffening of his body had battered the self-image of a man who prided himself on being an energetic breadwinner and a tough Marine. Asked whether he liked to read, he showed off a shelf of books about Marines and war heroes, and talked about boot camp. The information seemed incidental until Shea recommended an alcohol rehabilitation program and watched him balk: too long, too tough. Shea agreed it was a tough commitment, then likened it to boot camp, which had also been tough, and necessary, and had made a soldier of him; perhaps he and his family needed this program the same way. Mr. Kulp entered rehabilitation. Shea does not claim the reframe alone did it, but the program had stopped being foreign and had become something a Marine could respect." },
        { type: "pearl", title: "Reconnaissance of every wing", text: "Culture shapes depression and depression marks every wing of the matrix in return. The sensitive interviewer makes a quick reconnaissance of each system, biological, psychological, dyadic, familial and societal, and worldview, in the first interview and keeps returning to them. From that survey the puzzle of this person's depression becomes clearer, and so do the places where help might enter." }
      ],
      practice: [{ kind: "quiz", id: "ch10", label: "Quiz: Chapter 10" }]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The patients' own descriptions of heaviness, inward focus, and the window shade response, quoted at length; the Beck excerpts on the cognitive triad; Minkowski's full account of his months with a psychotically depressed man; the complete dialogue in which a clinician opens a financial cage; and the questions lists for the dyadic, family, and cultural wings. The chapter's epigraph from Baudelaire's Spleen is worth reading in full for its portrait of depressive time and space." },
    { title: "Appendix IV", text: "Murray-Swank, Dixon, and Stewart's article on practical interview strategies for building an alliance with the families of patients who have severe mental illness, reprinted in the appendix. Shea recommends it as the companion to this chapter's family section." },
    { title: "Chapters this one connects to", text: "Chapter 7 for the matrix, its wings, core pains, and healing and damaging matrix effects; Chapter 3 for the focusing strategies reused here to open an ideational cage; Chapter 9 for agitated depression, dysphoric mania, atypical features, mood reactivity, and leaden paralysis; Chapter 17 for the suicide assessment that perceived burdensomeness and hopelessness should trigger; Chapter 20 for exploring religious and spiritual beliefs and cross-cultural diversity." },
    { title: "Sources Shea draws on", text: "Jaspers's General Psychopathology (ossification); Minkowski's phenomenology of depressive time (blocking of the future); Beck's Cognitive Therapy and the Emotional Disorders and his 1975 JAMA paper with Kovacs and Weissman on hopelessness; Joiner's Why People Die by Suicide and the interpersonal theory of suicide; Carlat's The Psychiatric Interview; MacKinnon, Michels, and Buckley's The Psychiatric Interview in Clinical Practice (defenses, tears); Seligman on learned helplessness via Akiskal and McKinney; Bowen and Minuchin on family systems via Gurman and Kniskern; and Frankl, Yalom, Josephson and Peteet, and Cloninger on meaning and worldview." }
  ]
};
