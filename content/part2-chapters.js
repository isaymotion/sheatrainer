/*
  Psychiatric Interviewing Trainer — Part II content (Chapters 9–15)
  The Interview and Psychopathology: From Differential Diagnosis to Understanding
  Based on Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  DSM-5 criteria are paraphrased for study. All clinical exchanges are composed for teaching;
  they are not transcripts from the book. Medication points follow Shea's discussion and are not prescribing guidance.

  Same schema as part1-chapters.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
(function () {
  var part = (window.TRAINER.parts.part2 = window.TRAINER.parts.part2 || {});
  part.id = "part2";
  part.numeral = "II";
  part.title = "The Interview and Psychopathology: From Differential Diagnosis to Understanding";
  part.blurb = "Mood disorders, psychotic disorders, and personality disorders: reaching a sound differential, and understanding the person living with each.";

  part.chapters = [
    /* ───────────────────────── CHAPTER 9 ───────────────────────── */
    {
      id: "ch9", num: 9, title: "Mood Disorders", sub: "Arriving at a sound differential",
      summary: "Depression wears many costumes. Explore its symptoms conversationally, never forget to ask about mania and hypomania, look past the obvious stressor for substances and medical causes, test whether \"depressed for years\" is truly persistent, and take a specific family history.",
      concepts: [
        { h: "No perfect diagnostic system", b: "Validity (describing each tree accurately) and reliability (different interviewers reaching the same diagnosis, quickly) pull against each other. Every system is a compromise. Shea's \"descriptive essence\" is how well a label and its criteria evoke the disorder; high essence makes criteria easier to remember and ask about. DSM-5 stays mainly categorical but adds dimensional specifiers such as anxious distress, mixed features, melancholic, atypical, psychotic, and peripartum onset." },
        { h: "Major depression and SIG E CAPS", b: "Five of nine symptoms for at least two weeks, representing a change, one of them depressed mood or loss of interest or pleasure. SIG E CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor change, Suicidality, plus depressed mood. A patient need not say \"depressed\": pervasive anhedonia alone can meet the core criterion." },
        { h: "Exploring anhedonia", b: "First learn what the person usually enjoys (the wellness triad), then ask whether they still feel like doing it and whether it is as enjoyable. Interpersonal pleasure, such as time with grandchildren, is a sensitive probe. Asking about pleasures also shows interest in the person." },
        { h: "Neurovegetative symptoms, woven in", b: "Sleep, appetite, weight, energy, libido, diurnal variation, psychomotor change. Avoid \"I need to ask a few questions.\" Cue off the patient's words, scatter empathy, and get behavioral specifics (minutes to fall asleep, pounds lost and over how long). Early morning awakening has a distinctive quality: jolted awake by worries, unable to fall back asleep, dreading the day. Ask about libido matter-of-factly, normalized, and clarify drive vs activity." },
        { h: "Melancholia and anxious distress", b: "Melancholic features: near-total loss of pleasure or reactivity plus features such as morning worsening, waking two or more hours early, marked psychomotor change, anorexia, and excessive guilt. Intense anxiety in depression (Fawcett) signals heightened suicide risk; rating it is a safety probe, not a nicety." },
        { h: "The bipolar trap", b: "Deep depression crowds out clues to mania, and patients seal over past episodes. Ask every depressed patient about a time they felt \"just the opposite,\" describe it concretely, and ask what problems it caused. Seek collateral: families often remember severity, and sometimes danger, the patient leaves out." },
        { h: "Mania and hypomania", b: "Mania: at least a week of elevated, expansive, or irritable mood with increased energy, plus three or more features (four if only irritable), with marked impairment, hospitalization, or psychosis. Hypomania: the same kinds of symptoms for at least four days, an observable change without marked impairment or psychosis. Euphoria can flip to irritability and violence within seconds, especially when limits are set." },
        { h: "Mixed states and dysphoric mania", b: "Partial blends of manic and depressive symptoms are common, and are often misread as agitated depression, especially in youth. Shea's proposed dysphoric mania: intense angst, broad anger at the world, and an inner drive to do something now, sometimes felt as foreign. Clues: persistent anger, palpable angst, angst out of proportion to neurovegetative symptoms." },
        { h: "Before any antidepressant", b: "Search for current hypomanic signs, past mania or hypomania, and a family history of bipolar disorder. Ask whether past antidepressants brought agitation, poor sleep, or irritability; families recognize this quickly. Treatment-emergent suicidal ideation often feels sudden, foreign, and compelling. Screen for hypomania with phrasing that makes the experience odd and unexplained, which reduces false positives." },
        { h: "Depression in disguise", b: "When patients deny depression, climb a ladder: describe your mood; depressed? sad? when did you last feel like crying? feeling yourself, up to par? Know cultural idioms such as nervios, problems of the heart, or somatic presentations. Atypical features: mood reactivity plus overeating, oversleeping, leaden paralysis, or lifelong rejection sensitivity; these should prompt a search for bipolar process." },
        { h: "Always think organic", b: "Ask about prescription, over-the-counter, and herbal medicines, and consider endocrine, infectious, degenerative, and neoplastic causes. An obvious stressor never rules out a biological cause. With current heavy drinking, any major depression diagnosis is tentative; take a full substance history." },
        { h: "Persistence, onset, and look-alikes", b: "\"Depressed for years\" often signals something other than major depression. Ask whether the mood ever lifts and whether it is steady or a roller coaster. Look-alikes fluctuate more: dysthymia, cyclothymia, personality disorders, substances, adjustment disorder, medical causes. Patients date onset too late, remembering when they felt worst; ask about the months before and anchor to holidays." },
        { h: "The family history", b: "Blanket questions yield false negatives. Name the relatives (each side), name the problems in plain language, ask separately about alcohol and drugs, and always ask directly about suicide. Where stigma is strong, ask whether anyone had difficulties like yours. A sarcastic tone about a sibling can open family dynamics." }
      ],
      pearls: [
        "Every depressed patient: ask about a time they felt \"just the opposite.\"",
        "Before an antidepressant: current hypomania, past mania or hypomania, family bipolar history.",
        "Current heavy drinking makes major depression a tentative diagnosis.",
        "Think organic: medications, thyroid, delirium, tumors, even with obvious stressors.",
        "\"Depressed for years\": test persistence; consider dysthymia and personality.",
        "Family history: name the relatives, name the problems, ask about suicide."
      ],
      practice: [
        {
          id: "c9p1", skill: "Screening for past mania",
          ctx: "A 58-year-old retired engineer with severe depression, early morning awakening, and no interest in anything. You have finished the depression criteria.",
          p: "So that's where I am. I've never felt this low in my life.", cue: "Slow, quiet speech, eyes down.",
          opts: [
            { t: "Have you ever had manic episodes or been diagnosed with bipolar disorder?", v: "ok", w: "Direct, but technical and easy to deny. Patients often don't recognize their own past episodes as mania." },
            { t: "You've described feeling very low. Has there ever been a time, even years ago, when you felt just the opposite: super energized, barely needing sleep, ready to take on the world, in a way that seemed a bit odd even to you?", v: "best", w: "Concrete, plain-language description of the opposite state. Deep depression crowds out these memories, so you must ask, and then ask what problems it caused." },
            { t: "Since there's no history of mania, an antidepressant makes sense. Let's talk about options.", v: "poor", w: "You assumed an answer you never obtained. Missing bipolar disorder before an antidepressant can cause real harm." }
          ]
        },
        {
          id: "c9p2", skill: "Exploring anhedonia",
          ctx: "Early in the depression region with a 66-year-old grandmother.",
          p: "I don't know. I'm just tired all the time.", cue: "Sighs, hands folded.",
          opts: [
            { t: "Do you have anhedonia?", v: "poor", w: "Jargon, and a checklist feel. She may not know what you mean." },
            { t: "When you're feeling more yourself, what kinds of things do you enjoy?", v: "best", w: "Learn what she normally enjoys first, then ask about change. It engages her as a person and gives you a baseline." },
            { t: "Have you lost interest in things?", v: "ok", w: "A reasonable closed question, but without a baseline you won't know how much has changed." }
          ]
        },
        {
          id: "c9p3", skill: "Asking about libido",
          ctx: "You have covered sleep, appetite, and energy. He mentioned his marriage is strained.",
          p: "Yeah, and my wife and I barely talk anymore.", cue: "Matter-of-fact.",
          opts: [
            { t: "(hesitating) I, um, have to ask something a little personal, if that's okay…", v: "poor", w: "Hesitation signals the topic is embarrassing and invites an embarrassed answer." },
            { t: "Depression often dampens basic drives like appetite and sexual desire. Has your interest in sex changed? I mean interest, not whether you're having sex.", v: "best", w: "In context, normalized, matter-of-fact, and clear about drive vs activity. Many patients are relieved to hear it is common." },
            { t: "How's your sex life?", v: "ok", w: "Direct, but it confuses activity with drive, and a strained marriage may explain activity alone." }
          ]
        },
        {
          id: "c9p4", skill: "When depression is denied",
          ctx: "A 64-year-old executive, recently hospitalized after surgery, with poor sleep, poor appetite, and trouble concentrating.",
          p: "I'm not depressed. I'm not sad either. I just want to go home.", cue: "Arms crossed, irritable.",
          opts: [
            { t: "Then we can rule out depression.", v: "poor", w: "Many depressed patients deny depression and sadness. His symptoms say otherwise." },
            { t: "Fair enough. Have you been feeling like yourself lately? Up to par?", v: "best", w: "The next rung of the ladder. Many people who reject \"depressed\" will talk openly about not feeling themselves." },
            { t: "Your symptoms clearly point to depression, whether you call it that or not.", v: "poor", w: "Arguing over the label activates defenses and loses the history you need." }
          ]
        },
        {
          id: "c9p5", skill: "Testing persistence",
          ctx: "A 26-year-old woman, tearful, angry at a friend who betrayed her.",
          p: "I've been depressed for years. Nothing ever goes right for me.", cue: "Wipes tears, then a flash of anger.",
          opts: [
            { t: "Years of depression. Let's talk about medication for major depression.", v: "poor", w: "\"For years\" often signals something other than a sustained major depressive episode. You haven't tested it." },
            { t: "Some people say their mood stays low day after day; others say it comes and goes like a roller coaster. Where would you put yourself?", v: "best", w: "A continuum question tests persistence without leading. Follow with: has there been a stretch of two weeks or more when you felt down the entire time?" },
            { t: "Does your depression ever lift, even for a day?", v: "ok", w: "A good question, though the continuum version gets richer information." }
          ]
        },
        {
          id: "c9p6", skill: "Taking a family history",
          ctx: "Late in an intake. He mentioned earlier that he reminds himself of his father.",
          p: "No, nobody in my family has any mental illness.", cue: "Quick answer.",
          opts: [
            { t: "Okay, no family history. Let's move on.", v: "poor", w: "Blanket questions yield false negatives. Many people don't count drinking, a \"breakdown,\" or a suicide as mental illness." },
            { t: "You said you remind yourself of your father. In what ways? And on his side, grandparents, aunts, uncles, cousins: anyone with depression, serious mood swings, drinking or drug problems, or a nervous breakdown? Has anyone ever died by suicide?", v: "best", w: "A referred gate, then specific relatives and plain-language problems, with a separate direct suicide question. Repeat for the other side." },
            { t: "Any schizophrenia or bipolar disorder in the family?", v: "ok", w: "More specific, but patients may not recognize the terms. Describe them in everyday words." }
          ]
        }
      ],
      quiz: [
        { q: "What does SIG E CAPS stand for?", opts: ["Sleep, Irritability, Grandiosity, Energy, Concentration, Anxiety, Psychosis, Suicidality", "Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidality", "Sadness, Insomnia, Guilt, Emptiness, Crying, Apathy, Pain, Stress", "Sleep, Isolation, Grief, Energy, Cognition, Affect, Psychosis, Somatic"], a: 1, w: "Plus depressed mood as the ninth symptom. Gross's mnemonic, popularized by Carlat." },
        { q: "Before starting an antidepressant, Shea emphasizes checking which three things?", opts: ["Weight, blood pressure, liver function", "Current hypomania, past mania or hypomania, and family history of bipolar disorder", "Insurance, adherence history, and side-effect fears", "Sleep, appetite, and libido"], a: 1, w: "Missing bipolar process before an antidepressant can trigger mania or a mixed state." },
        { q: "Which three clues suggest a dysphoric mania rather than agitated depression?", opts: ["Hopelessness, guilt, and early waking", "Persistent anger at the world, intense angst, and angst out of proportion to neurovegetative symptoms", "Euphoria, grandiosity, and pressured speech", "Weight gain, hypersomnia, and leaden paralysis"], a: 1, w: "Classic euphoric signs may be absent. Ask whether they feel driven to act now." },
        { q: "Atypical features require mood reactivity plus two of which?", opts: ["Early waking, anorexia, guilt, agitation", "Increased appetite or weight, hypersomnia, leaden paralysis, rejection sensitivity", "Hallucinations, delusions, catatonia, disorganization", "Irritability, grandiosity, racing thoughts, distractibility"], a: 1, w: "Spotting atypical features should prompt a careful search for bipolar process." },
        { q: "Why do patients often date the onset of depression too late?", opts: ["They exaggerate symptoms", "They remember when they felt worst, not when it began", "Memory is perfect for recent events", "They confuse depression with mania"], a: 1, w: "Ask whether they felt completely normal in the months before, and anchor to holidays and events." },
        { q: "In a family history, which question does Shea say to always ask directly?", opts: ["Whether anyone was hospitalized", "Whether anyone has tried to kill themselves or died by suicide", "Whether anyone took antidepressants", "Whether anyone had schizophrenia"], a: 1, w: "Suicide in the family is an important risk factor and is often omitted unless asked directly." }
      ],
      glossary: [
        { term: "Validity / reliability", def: "Accuracy of description / agreement across interviewers." },
        { term: "Descriptive essence", def: "How clearly criteria and a label capture a disorder's real-life hallmarks (Shea)." },
        { term: "Specifier", def: "A DSM-5 dimensional add-on, such as with anxious distress or with mixed features." },
        { term: "Anhedonia", def: "A diminished ability to experience or anticipate pleasure." },
        { term: "Neurovegetative symptoms", def: "Disturbed regulatory physiology: sleep, appetite, weight, energy, libido, diurnal variation, psychomotor change." },
        { term: "Melancholic features", def: "Pervasive loss of pleasure plus features such as morning worsening and early waking." },
        { term: "Mixed features", def: "Manic and depressive symptoms in the same episode." },
        { term: "Dysphoric mania", def: "Shea's proposed mixed subtype: angst, anger, inner drivenness, unpleasant racing thoughts." },
        { term: "Bipolar II disorder", def: "Major depression plus hypomania, never full mania." },
        { term: "Atypical features", def: "Mood reactivity plus increased appetite or weight, hypersomnia, leaden paralysis, or rejection sensitivity." },
        { term: "Persistent depressive disorder", def: "Depressed mood more days than not for at least two years (one year in youth), never symptom-free for more than two months." },
        { term: "DMDD", def: "Disruptive mood dysregulation disorder: chronic irritability and outbursts in youth, not episodic." }
      ]
    },

    /* ───────────────────────── CHAPTER 10 ───────────────────────── */
    {
      id: "ch10", num: 10, title: "Beneath the Mood Disorder", sub: "Understanding the person living with depression",
      summary: "When patients sense you know what depression feels like from the inside, they feel safer and share more, including suicidal thoughts. Depression marks every wing of the matrix, and it touches the interviewer and the family too.",
      concepts: [
        { h: "The body as first messenger", b: "Grooming, slowness, and delayed responses are data from the first seconds. Patients describe heaviness and profound inertia. Ask what their body has felt like and how these losses have made them feel about themselves; many see them as further proof of failure." },
        { h: "A curious paradox", b: "Cognitively, patients blame themselves as the root of the problem. Emotionally, the depression feels as if it comes over them from outside, like an invasion." },
        { h: "Agitated depression vs dysphoric mania", b: "Agitated depression: energy everywhere but none to do anything, hand-wringing, often worse in the morning. Dysphoric mania: driven, relatively organized energy, sometimes with intricate plans, including for self-harm or violence." },
        { h: "Time blocked, space shrinking", b: "Minkowski's blocking of the future: change seems impossible, so motivation evaporates. The shrinking active world: the part of life the patient still engages contracts, and reward is short-circuited. You may not be part of the patient's active world yet, so be more active and patient with slow answers." },
        { h: "The window shade response", b: "Shea describes a compelling urge to shut the eyes to shut out the world, even while standing or walking. It is a surprisingly reliable marker of moderate to severe depression. Patients are often surprised and relieved that you know it." },
        { h: "Ideational caging", b: "Thought trapped in a small circle of ruminative themes. Acknowledge the concern, explain why you need other information, promise to return, set a gentle frame, and refocus. Sometimes the cage won't open, and that is information too." },
        { h: "Beck's distortions and triad", b: "Overgeneralization, exaggeration, ignoring the positive, self-blame. The cognitive triad: negative views of the world, the self, and the future, with an \"immunity to logic.\" Listening for them can reveal depression in somatic or atypical presentations." },
        { h: "Four themes and two warnings", b: "Loneliness, guilt and self-loathing, helplessness, hopelessness. Joiner's perceived burdensomeness (\"I am a burden\") and Beck's hopelessness are strong suicide warning signs. When they appear, ask directly about suicidal thoughts, plans, and intent. A blank answer to \"What help do you see for yourself?\" signals seriousness." },
        { h: "Defenses that hide depression", b: "Denial, isolation and rationalization, anger (an attack on the interviewer can betray depression), projection (self-hatred felt as others' hatred, so a paranoid patient may hide suicide risk), and a pseudo-hypomanic cheerful front. The anger–guilt–depression loop feeds itself; naming it can relieve guilt." },
        { h: "The dyadic wing and you", b: "Withdrawal breeds rejection and rejection breeds withdrawal. Your frustration, anger then guilt, unexpected sadness, or sense of being ineffectual are clinical data. An overly cheerful interviewer can temporarily brighten a reactive patient and mask the depression; aim for gentle warmth." },
        { h: "Tears", b: "Allow them, name them gently (\"You seem sad right now\"), offer rather than impose a tissue, and listen closely as defenses drop. Know your own reactions to crying; many clinicians end it too early." },
        { h: "Family, culture, and worldview", b: "Families are informants and partners who may be suffering themselves: ask who is supporting them. Some family systems unconsciously need the depression. Ask humbly how depression is viewed in the patient's community, and explore meaning and faith; framing treatment within the patient's worldview can turn refusal into engagement." }
      ],
      pearls: [
        "Ask about the window shade: an urge to shut the eyes to shut the world out.",
        "Caged patient: validate, explain why, set a frame, return gently.",
        "Burdensomeness or hopelessness: ask directly about suicide.",
        "Paranoid patient: consider hidden depression and suicide risk.",
        "Tears: allow, name, offer a tissue, listen.",
        "Family member: \"Who is supporting you?\""
      ],
      practice: [
        {
          id: "c10p1", skill: "Opening a cage",
          ctx: "A 52-year-old woman with severe depression. You asked about sleep.",
          p: "The bills. I can't stop thinking about the bills. We're going to lose the house, and it's all my fault.", cue: "Wringing her hands; she has returned to this three times.",
          opts: [
            { t: "Let's not talk about the bills right now.", v: "poor", w: "Dismissing the theme feels uncaring and usually tightens the cage." },
            { t: "The money is a real problem, and we'll come back to it. The depression may also be making it harder to solve. Understanding your sleep helps me know what could help fastest. I'll gently bring us back if we drift. How long does it take you to fall asleep?", v: "best", w: "Validate, give a reason tied to helping, promise to return, set a frame, then a focused question." },
            { t: "Tell me more about the bills.", v: "ok", w: "Following can help her ventilate once, but repeated following feeds the rumination and leaves the database empty." }
          ]
        },
        {
          id: "c10p2", skill: "The window shade question",
          ctx: "A lawyer with moderate depression describes exhausting days at work.",
          p: "Sometimes at my desk I just want everything to stop.", cue: "Rubs his eyes.",
          opts: [
            { t: "When you're at your lowest, do you ever feel a strong urge just to close your eyes? Not sleepy, but wanting to shut everything out?", v: "best", w: "Shea's window shade question. Recognition that you know this experience deepens engagement, and \"wanting everything to stop\" should lead next to a careful suicide inquiry." },
            { t: "You should take a vacation.", v: "poor", w: "Advice before understanding, and it skips the possible suicidal meaning of \"everything to stop.\"" },
            { t: "When you say you want everything to stop, do you mean you've had thoughts of ending your life?", v: "ok", w: "Important and necessary. Asking it now is fine; the window shade question can come later." }
          ]
        },
        {
          id: "c10p3", skill: "Hearing burdensomeness",
          ctx: "An older man with depression, living with his daughter's family.",
          p: "They've got enough on their plate without having to take care of me too.", cue: "Flat voice, looking away.",
          opts: [
            { t: "I'm sure they're happy to have you.", v: "poor", w: "Reassurance dismisses one of the strongest interpersonal suicide warning signs." },
            { t: "It sounds like you feel you're a burden to them. Sometimes when people feel that way, they think their family would be better off without them. Have you had thoughts like that?", v: "best", w: "Names Joiner's perceived burdensomeness and moves directly, with normalization, into suicide inquiry." },
            { t: "What do they have on their plate?", v: "ok", w: "Interesting social history, but it steers away from the warning sign he just gave you." }
          ]
        },
        {
          id: "c10p4", skill: "First tears",
          ctx: "A young woman describing her mother's death last year begins to cry.",
          p: "(crying) I'm sorry. I didn't think I'd do this.", cue: "Reaches for her sleeve.",
          opts: [
            { t: "(quickly) It's okay, it's okay. Let's move on to something easier.", v: "poor", w: "Ending tears early often reflects our discomfort. You may close the door on the most important material." },
            { t: "(gently, pausing) There's nothing to be sorry for. Would you like a tissue? Take your time.", v: "best", w: "Allow it, offer rather than impose, and listen. Many powerful alliances begin with a calm response to first tears." },
            { t: "(hands her a tissue right away and keeps going) So when did she pass?", v: "ok", w: "A kind gesture, but pressing on with facts misses the moment." }
          ]
        },
        {
          id: "c10p5", skill: "Seeing through a cheerful front",
          ctx: "A man describes a layoff, a divorce, and moving into his car, smiling and joking throughout.",
          p: "(laughs) So yeah, it's been a heck of a year! But hey, I'm a survivor.", cue: "His chin quivers briefly.",
          opts: [
            { t: "(laughs along) You really are a survivor.", v: "poor", w: "Joining the front keeps the depression hidden." },
            { t: "(quietly) As you talk, you seem sort of sad to me.", v: "best", w: "A gentle observation can open a floodgate. Beware the patient who is too happy while describing many stressors." },
            { t: "You're obviously in denial.", v: "poor", w: "An interpretation that will feel like an attack." }
          ]
        },
        {
          id: "c10p6", skill: "Supporting the family",
          ctx: "A brief moment with the adult daughter of an older patient with severe depression.",
          p: "I try to do everything for her. It's been a long year.", cue: "Dark circles under her eyes.",
          opts: [
            { t: "Thanks. Can you tell me about her medication schedule?", v: "ok", w: "Useful collateral, but you missed her own distress." },
            { t: "You've been an enormous support to her. I'm wondering who is providing support for you?", v: "best", w: "Shea's question. Family members may develop their own depression, and sometimes you need to ask about their safety too." },
            { t: "She's lucky to have you.", v: "ok", w: "Kind, but it stops short of asking about her." }
          ]
        }
      ],
      quiz: [
        { q: "The \"window shade response\" refers to:", opts: ["Staying in a dark room all day", "A compelling urge to shut the eyes to shut out the world", "Closing the blinds to avoid visitors", "Visual hallucinations in depression"], a: 1, w: "Shea finds it a surprisingly reliable marker of moderate to severe depression." },
        { q: "Joiner's \"perceived burdensomeness\" is important because it:", opts: ["Predicts response to antidepressants", "Is among the most reliable interpersonal warning signs of a suicide attempt", "Distinguishes bipolar from unipolar depression", "Indicates personality disorder"], a: 1, w: "When it appears, ask directly about suicidal thoughts, plans, and intent." },
        { q: "Which defense can make a paranoid patient's suicide risk easy to miss?", opts: ["Sublimation", "Projection of self-hatred onto others", "Humor", "Altruism"], a: 1, w: "In a paranoid patient, consider underlying depression and suicide risk even when ideation is denied." },
        { q: "Beck's cognitive triad consists of negative views of:", opts: ["Past, present, future", "World, self, future", "Family, friends, work", "Body, mind, spirit"], a: 1, w: "Often with an \"immunity to logic\": evidence fails to change the conclusion." },
        { q: "Why might a very cheerful, extroverted interviewer underestimate a depression?", opts: ["Patients lie to cheerful interviewers", "Patients with mood reactivity may brighten temporarily in the room", "Cheerful interviewers ask fewer questions", "Depression is contagious"], a: 1, w: "Aim for gentle warmth, and weigh the history, not just the affect in the room." }
      ],
      glossary: [
        { term: "Blocking of the future", def: "Minkowski: when change seems impossible, the future loses meaning." },
        { term: "Shrinking active world", def: "The engaged part of the patient's environment contracts; reward is lost." },
        { term: "Window shade response", def: "A compelling urge to shut the eyes to shut out the world (Shea)." },
        { term: "Ideational caging", def: "Thinking trapped in a small circle of ruminative themes." },
        { term: "Cognitive triad", def: "Beck: negative views of the world, the self, and the future." },
        { term: "Immunity to logic", def: "Evidence fails to change depressive conclusions." },
        { term: "Perceived burdensomeness", def: "Joiner: the belief \"I am a burden,\" an interpersonal suicide warning sign." },
        { term: "Learned helplessness", def: "Seligman: giving up after inescapable adversity." },
        { term: "Pseudo-hypomanic defense", def: "A cheerful front concealing depression." },
        { term: "Anger–guilt–depression loop", def: "Irritability leads to lashing out, guilt, deeper depression, and more irritability." }
      ]
    },

    /* ───────────────────────── CHAPTER 11 ───────────────────────── */
    {
      id: "ch11", num: 11, title: "Psychotic Disorders", sub: "Arriving at a sound differential",
      summary: "Psychosis is a syndrome, not a diagnosis. Always ask what is causing it. Rule out withdrawal, intoxication, medications, delirium, and medical illness; separate schizophrenia from psychotic mood and delusional disorders; spot soft signs; and explore delusions safely, including dangerousness.",
      concepts: [
        { h: "What psychosis is", b: "A breakdown of perceptual, cognitive, or reasoning functions so the person experiences the world in ways strikingly different from others in their culture. Shea: it is less the content than the process of thinking that marks psychosis." },
        { h: "Time course separates the disorders", b: "Brief psychotic disorder (1 day to under 1 month), schizophreniform (1 to under 6 months), schizophrenia (6 months or more, including at least 1 month of active symptoms), delusional disorder (delusions at least 1 month, schizophrenia criteria never met), schizoaffective (mood episodes plus at least 2 weeks of psychosis without mood symptoms)." },
        { h: "Visual hallucinations point organic", b: "Vivid, frightening, nocturnal, moving, worse in darkness, small animals or insects: think medical or drug causes. Schizophrenia's visual hallucinations rarely occur alone. An illusion misperceives a real stimulus; a hallucination arises from nothing." },
        { h: "Withdrawal can kill", b: "Alcohol and sedative withdrawal progress from poor sleep, anxiety, tremor, sweating, and rising vitals to seizures and delirium tremens. Patients who deny drinking often admit withdrawal symptoms, so ask about symptoms, not \"a problem,\" and check vital signs. Suspected DTs: cut the interview short and get immediate medical care." },
        { h: "Drugs, medications, and police", b: "Psychosis erupting within hours in a previously well person strongly suggests a drug cause (PCP, methamphetamine, cocaine, hallucinogens, synthetic cannabinoids). Anticholinergics readily cause delirium. Interview officers collegially: where was he found, known substance use, violence, and any head injury or Taser." },
        { h: "Schizophrenia's signature", b: "Blunted or inappropriate affect, delusions (often bizarre) plus another core symptom, and deficit symptoms: diminished expression, avolition, alogia, anhedonia, asociality. Families can name avolition as laziness; naming it as a symptom relieves conflict. Family collateral can be decisive because psychosis fluctuates." },
        { h: "Which came first, mood or psychosis?", b: "In psychotic mood disorders, mood symptoms usually come first and psychosis emerges at the peak. In schizophrenia, psychosis precedes significant mood symptoms. Ask what mood, sleep, and energy were like before the voices began. Schizophrenia and psychotic bipolar disorder may lie on a continuum." },
        { h: "Delusional disorder", b: "Patients often seem strikingly normal until the delusion comes up. Subtypes: persecutory, jealous, erotomanic, somatic, grandiose, mixed, unspecified. In erotomania, ask what is stopping the person from admitting their love; if it is their spouse, consider risk to that spouse. New delusions after 40 require a medical search." },
        { h: "Assessing dangerousness", b: "Robinson: do you feel a need to protect yourself, or to take action against him? Resnick: pose a concrete scenario with the feared persecutor and ask what the patient would do. Ask about weapons and steps already taken." },
        { h: "The life cycle and soft signs", b: "Delusional mood (something feels wrong), delusional perception (ordinary things gain special meaning), delusional ideas. Soft signs: vagueness, mild loosening, idiosyncratic phrasing, long latency, intense or inappropriate affect, guardedness, preoccupation with the distant past. They call for careful probing; tap intense affect and ask what odd phrases mean." },
        { h: "Exploring delusions and \"Do you believe me?\"", b: "Robinson: grease the wheels, uncover extent and logic, gauge conviction, and find actions taken. Don't be the arbiter of reality: \"It's an unusual story, so I want to hear more before deciding,\" then return to a charged detail. Distinguish culturally sanctioned experiences and bereavement phenomena from psychosis." },
        { h: "Delirium hiding in a known illness", b: "A patient's psychotic episodes from a single cause tend to look alike. If this one looks different, suspect a new cause. In every psychotic patient, check consciousness and attention: digit span, vigilance (tapping at each A), copying, writing. Not all delirious patients are disoriented; hypoactive delirium is common and easily missed." },
        { h: "Medical psychosis and micropsychosis", b: "Encephalitis, tumors, endocrine and metabolic disorders, Wernicke's, and autoimmune encephalitis can mimic primary psychosis without delirium; ensure a screening physical exam promptly. Micropsychotic episodes in some personality disorders last minutes to hours with abrupt onset and no prodrome. Partial complex seizures can produce sudden psychotic phenomena; ask about lost time and auras." }
      ],
      pearls: [
        "Psychosis is a syndrome. Ask what is causing it.",
        "New visual hallucinations: think organic first.",
        "Ask about withdrawal symptoms, not a drinking \"problem\"; check vitals.",
        "Every psychotic patient: check consciousness and attention.",
        "\"Do you believe me?\": keep an open mind and keep listening.",
        "Paranoid delusion: ask about protecting oneself, action, weapons, and a concrete scenario."
      ],
      practice: [
        {
          id: "c11p1", skill: "Uncovering withdrawal",
          ctx: "ED. A 40-year-old man brought by police, sweating, tremulous, distractible. He denies drinking.",
          p: "I told you, I don't have a drinking problem.", cue: "Hands shaking, glancing at the corner of the room.",
          opts: [
            { t: "Come on, the officers said they found you outside a bar.", v: "poor", w: "Confrontation makes denial harder to drop and the interview more hostile." },
            { t: "Fair enough. Since your last drink, has your sleep been rough? Have you felt shaky or jumpy, or had an upset stomach?", v: "best", w: "Ask about symptoms, not a problem. Patients who deny drinking often admit withdrawal symptoms. Pair this with vital signs." },
            { t: "Okay. Let's talk about your mood.", v: "poor", w: "Accepting the denial could miss a potentially fatal withdrawal state." }
          ]
        },
        {
          id: "c11p2", skill: "Responding to \"Do you believe me?\"",
          ctx: "A woman with a fixed belief that her neighbor is pumping gas through the vents.",
          p: "You believe me, don't you? Everyone else says I'm crazy.", cue: "Searching your face.",
          opts: [
            { t: "Yes, I believe you.", v: "poor", w: "Colluding with a delusion undermines trust later and may reinforce it." },
            { t: "It's an unusual situation, so I'd like to understand more before deciding. What have you noticed most recently?", v: "best", w: "You stay neither for nor against, keep rapport, and return to the material with curiosity (Robinson)." },
            { t: "No, there's no gas. It's part of your illness.", v: "poor", w: "Arguing ends the conversation and the risk assessment with it." }
          ]
        },
        {
          id: "c11p3", skill: "Assessing dangerousness",
          ctx: "A man with a persecutory delusion that a coworker is plotting to kill him.",
          p: "He's been planning it for months. I'm not going to let him get me.", cue: "Jaw tight, eyes narrowed.",
          opts: [
            { t: "Have you felt a need to protect yourself against him, or to take action against him?", v: "best", w: "Robinson's questions, asked calmly and matter-of-factly. Follow with weapons, steps already taken, and a concrete scenario." },
            { t: "You're not going to hurt him, are you?", v: "poor", w: "A negative question invites a reassuring \"no.\"" },
            { t: "Why would he want to kill you?", v: "ok", w: "Exploring the logic is useful, but \"I'm not going to let him get me\" needs the safety question now." }
          ]
        },
        {
          id: "c11p4", skill: "Checking attention in a known patient",
          ctx: "A man with long-standing schizophrenia, usually relapsing slowly with paranoia, was brought in after a sudden rage. He now seems calm.",
          p: "I'm fine. Can I go home?", cue: "Drowsy, asks where he is on the way back from the bathroom.",
          opts: [
            { t: "This is his schizophrenia flaring. Increase his antipsychotic.", v: "poor", w: "This episode looks different from his usual pattern. That should raise suspicion of a new cause." },
            { t: "Check his level of consciousness and attention (for example digit span and vigilance) and get an urgent medical workup.", v: "best", w: "Fluctuating awareness and failing attention suggest delirium, which always warrants aggressive medical evaluation." },
            { t: "He seems calm now, so the sedation worked. Plan discharge.", v: "poor", w: "Drowsiness and disorientation are not reassuring. Hypoactive delirium is easy to miss." }
          ]
        },
        {
          id: "c11p5", skill: "Tapping odd language",
          ctx: "A 23-year-old woman diagnosed with anxiety, evasive, giggling at odd moments.",
          p: "(giggles) I guess I'm just too anxious to be a woman.", cue: "Avoids eye contact.",
          opts: [
            { t: "Lots of women feel anxious. Let's talk about your sleep.", v: "poor", w: "You passed over an idiosyncratic phrase, which may be a doorway to psychotic content." },
            { t: "When you say \"too anxious to be a woman,\" what do you mean?", v: "best", w: "Non-judgmentally asking what an odd phrase means can reveal illogical thinking or emerging delusions." },
            { t: "That sounds hard.", v: "ok", w: "Empathic, but it leaves the soft sign unexplored." }
          ]
        },
        {
          id: "c11p6", skill: "Interviewing police",
          ctx: "Three officers brought in an agitated man. One is about to leave.",
          p: "OFFICER: We're heading out. He's all yours.", cue: "Radio crackling.",
          opts: [
            { t: "Thanks. Before you go: where did you find him, any alcohol or drugs you know of, was anyone hurt, and was there any chance he hit his head?", v: "best", w: "Collegial and specific. Officers often know key facts, including possible head trauma as a cause of confusion." },
            { t: "Did you really need three people to bring him in?", v: "poor", w: "Countertransference toward police costs you collateral." },
            { t: "Okay, thanks.", v: "poor", w: "A missed opportunity for history you may not get elsewhere." }
          ]
        }
      ],
      quiz: [
        { q: "Which time course defines schizophreniform disorder?", opts: ["1 day to under 1 month", "1 month to under 6 months", "At least 6 months", "At least 2 years"], a: 1, w: "It meets schizophrenia's core symptoms; decline in functioning isn't required." },
        { q: "Which feature of visual hallucinations most suggests an organic cause?", opts: ["Concrete faces seen during the day", "Vivid, frightening images worse in darkness, such as small animals or insects", "Images accompanying auditory hallucinations", "Images described calmly"], a: 1, w: "No feature is definitive, but new-onset visual hallucinations should raise suspicion of an organic process." },
        { q: "In psychotic mood disorders, the usual sequence is:", opts: ["Psychosis first, then mood symptoms", "Mood symptoms first, psychosis at the peak", "Both appear simultaneously", "Mood symptoms only after recovery"], a: 1, w: "In schizophrenia, psychosis typically precedes significant mood symptoms." },
        { q: "Resnick's \"confrontation\" technique for dangerousness involves:", opts: ["Challenging the delusion directly", "Posing a concrete scenario with the feared persecutor and asking what the patient would do", "Asking about childhood trauma", "Telling the patient they are psychotic"], a: 1, w: "Answers range from \"nothing\" to a pre-emptive \"self-defense\" attack." },
        { q: "Which is a key feature of a micropsychotic episode?", opts: ["A long prodrome of soft signs", "Abrupt, stress-triggered onset with prompt return to baseline", "Duration of several weeks", "Always caused by drugs"], a: 1, w: "Most frequent in paranoid, schizotypal, and borderline personality disorders." },
        { q: "Delirium is primarily a disturbance of:", opts: ["Mood", "Attention and awareness", "Long-term memory only", "Personality"], a: 1, w: "It develops over hours to days, fluctuates, and requires a medical cause. Not all delirious patients are disoriented." }
      ],
      glossary: [
        { term: "Hard signs of psychosis", def: "Delusions, hallucinations, grossly disorganized speech or behavior." },
        { term: "Soft signs of psychosis", def: "Subtle clues such as vagueness, odd affect, long latency, and idiosyncratic phrasing." },
        { term: "Delusional mood / perception", def: "Early phases: something feels wrong; ordinary perceptions gain special meaning." },
        { term: "Illusion vs hallucination", def: "A misperception of a real stimulus vs a perception arising from nothing." },
        { term: "Deficit (negative) symptoms", def: "Lost functions: diminished expression, avolition, alogia, anhedonia, asociality." },
        { term: "Delusional disorder", def: "Delusions for at least a month, with schizophrenia's core criteria never met and functioning otherwise preserved." },
        { term: "Erotomanic delusion", def: "The belief that another person, often of higher status, is in love with the patient." },
        { term: "Paraphrenia", def: "Late-life delusions with hallucinations and relatively preserved personality." },
        { term: "Delirium", def: "An acute, fluctuating disturbance of attention and awareness with cognitive change and a medical cause." },
        { term: "Micropsychotic episode", def: "Brief, stress-triggered psychotic experiences in some personality disorders." },
        { term: "Delirium tremens", def: "Severe alcohol withdrawal delirium; potentially fatal without prompt treatment." },
        { term: "Charles Bonnet syndrome", def: "Visual hallucinations with preserved insight in older adults with visual impairment." }
      ]
    },

    /* ───────────────────────── CHAPTER 12 ───────────────────────── */
    {
      id: "ch12", num: 12, title: "Beneath the Psychosis", sub: "Understanding the person living with psychotic process",
      summary: "Fear walks hand in hand with psychosis. Understanding its inner terror helps us uncover it gently: first-rank symptoms, voices and commands, akathisia, catatonia, families in pain, culture and language, and the personal meaning of symptoms.",
      concepts: [
        { h: "Sleep as an early warning", b: "Trouble falling asleep is a sensitive early sign of emerging psychosis and may progress to day-night reversal. Families have often been lying awake listening; ask them." },
        { h: "The porous ego", b: "Shea's image: the world seems to invade the self, and inner experience seems to leak out. Intense forms bring a terrifying sense of annihilation, the fear behind much psychotic withdrawal and sudden defensive violence." },
        { h: "Schneider's first-rank symptoms", b: "Seven of invasion (somatic passivity; made feelings, impulses, and acts; thought withdrawal, insertion, broadcasting), three voices (audible thoughts, voices arguing about the patient, voices commenting), and delusional perception. Not pathognomonic; they must sit in a psychotic matrix. Ask about the experience first, then its explanation: you may catch a delusion being born." },
        { h: "Akathisia", b: "An intensely unpleasant inner restlessness, most often from antipsychotics, sometimes from SSRIs. It is subjective; the patient may not pace. Easily mistaken for psychotic agitation, leading to higher doses that worsen it. It has been linked to suicidal or violent behavior. Ask about a restlessness inside, a need to keep moving." },
        { h: "Catatonia", b: "Stupor, mutism, negativism, ambitendency, posturing, echolalia, waxy flexibility. It occurs in schizophrenia, mood disorders, and medical illness. Speak gently, assume the patient may be processing everything, explain what is happening, and generally avoid touch in a first interview." },
        { h: "Exploring voices", b: "Voices are unique: acoustic qualities, location, number, person, content, source, triggers, control, and affect. Location inside the head is not a reliable sign of non-psychosis. To raise the topic before psychosis appears: when you're very stressed, do your thoughts ever get so intense they sound almost like a voice? When psychosis is already shared, tie into it." },
        { h: "Command hallucinations", b: "Whenever voices are present, ask about commands. Weigh four dimensions: content, auditory quality (loud, repetitive, insistent), the patient's ability to resist and what they have done to stay safe, and the authority and emotion of the voice. Commands tied to a delusion of a greater good, from a revered source, are more dangerous." },
        { h: "Logic and the agitated patient", b: "Thought may race, loosen, or block. Paleologic links shared attributes to identity. If reasonable statements increase agitation, the patient isn't hearing them normally; you may be part of the delusion. Stop reasoning, stay calm, give space, step back." },
        { h: "Screening unobtrusively", b: "Use natural gates: odd or frightening experiences, nightmares that intrude by day, special abilities, the TV or social media seeming to talk about them, a family member's voices. A religious gate can surface a special mission. An angry reaction to screening is itself data; be especially gentle afterward." },
        { h: "The wounded self and the interviewer", b: "Deficit symptoms and demoralization linger after voices fade; help patients believe in themselves again and avoid labels like \"a schizophrenic.\" Your confusion, filling in the gaps, inability to feel with the patient, and frustration are data. Agree to disagree rather than argue about insight. A very calming interviewer may make psychotic signs recede temporarily." },
        { h: "Families", b: "Families grieve the person they knew and may face fear, stigma, and blame. Ask their view of the problems, causes, what helps, and past experiences with professionals. Answer unspoken fears: we depend on you; loving parents don't cause schizophrenia; I won't change anything before hearing what has worked. Ask the patient who counts as family and seek consent, except when safety requires collateral." },
        { h: "Culture, language, meaning", b: "Culture-specific presentations (such as koro) can be missed by Western screens, and culturally normal spirit experiences can be mistaken for psychosis; true psychosis sits in a matrix of soft signs. Use interpreters in the exact dialect; delusions may emerge only in the first language. Delusions can carry deep personal meaning, and their loss can be grieved." }
      ],
      pearls: [
        "Ask the family how he's been sleeping, and what happens at night.",
        "Inner restlessness on an antipsychotic: ask about akathisia before raising the dose.",
        "Voices present: always ask about commands, and ability to resist.",
        "Catatonia: speak gently, explain, avoid touch.",
        "Reasoning increases agitation: stop, give space, step back.",
        "Agree to disagree; keep the door open."
      ],
      practice: [
        {
          id: "c12p1", skill: "Raising voices gently",
          ctx: "A college student, overwhelmed, describes nights lying awake as his thoughts spiral.",
          p: "My head just won't shut up at night.", cue: "Picks at his sleeve.",
          opts: [
            { t: "Are you hearing voices?", v: "ok", w: "Direct and acceptable, though it may feel stigmatizing before psychosis is apparent." },
            { t: "When you're that stressed, do your thoughts ever get so intense they sound almost like a voice?", v: "best", w: "Shea's favorite opener: tied to his pain, softened by \"almost,\" and easy to answer honestly." },
            { t: "That's normal with exams. Try some sleep hygiene.", v: "poor", w: "Premature reassurance closes a door that may hide emerging psychosis." }
          ]
        },
        {
          id: "c12p2", skill: "Asking about commands",
          ctx: "A woman has described a male voice that comments on her actions.",
          p: "He's always there, telling me I'm useless.", cue: "Glances toward the ceiling.",
          opts: [
            { t: "Does he ever tell you to do things? What does he tell you to do?", v: "best", w: "Whenever voices are present, ask about commands, starting with the simplest questions." },
            { t: "Does the voice sound male or female?", v: "ok", w: "Phenomenology matters, but commands come first when safety is uncertain." },
            { t: "You know the voice isn't real, right?", v: "poor", w: "Challenging reality ends disclosure about the most dangerous content." }
          ]
        },
        {
          id: "c12p3", skill: "Assessing ability to resist",
          ctx: "A man reports a voice he believes is God, telling him to cut off his hand to prove he is chosen.",
          p: "I've been fighting it, but it's getting harder.", cue: "Holding his left wrist.",
          opts: [
            { t: "How much do you think you can stop yourself? What have you done so far to keep yourself safe?", v: "best", w: "Ask about ability to resist and protective actions. A command from a revered source tied to a greater good is especially dangerous; this needs immediate safety measures." },
            { t: "God would never ask you to do that.", v: "poor", w: "A theological argument with a delusion won't reduce risk and may end disclosure." },
            { t: "How long have you heard the voice?", v: "ok", w: "Useful history, but the immediate danger comes first." }
          ]
        },
        {
          id: "c12p4", skill: "Recognizing akathisia",
          ctx: "Inpatient, three days after an antipsychotic was started. The nurse reports he is pacing and asks for a higher dose.",
          p: "I can't sit. I feel like I'm going to jump out of my skin.", cue: "Shifting from foot to foot.",
          opts: [
            { t: "Increase the antipsychotic for agitation.", v: "poor", w: "If this is akathisia, raising the dose will worsen it." },
            { t: "Is it a restlessness inside your body, like your legs have to keep moving? When did it start?", v: "best", w: "Akathisia is felt as a true bodily need to move and often follows a new medication. Also ask about suicidal thoughts, which have been linked to it." },
            { t: "Try to sit and relax for me.", v: "poor", w: "He can't; the request shames him and misses the cause." }
          ]
        },
        {
          id: "c12p5", skill: "Agreeing to disagree",
          ctx: "Near the end of an interview with a patient who has had three hospitalizations for psychosis.",
          p: "I don't have schizophrenia. I don't need any of this.", cue: "Arms crossed.",
          opts: [
            { t: "But the evidence is clear. Your voices and your hospitalizations prove it.", v: "poor", w: "Heated efforts to convince harden positions and cost the relationship." },
            { t: "We see it differently, and that's okay. I'll always tell you honestly what I think, and I hope you'll do the same. My door stays open.", v: "best", w: "Calm and sincere. Keeping the relationship available matters more than winning the argument today." },
            { t: "Fine. Then there's nothing more I can do.", v: "poor", w: "Withdrawal punishes honesty and closes the door." }
          ]
        },
        {
          id: "c12p6", skill: "Addressing a family's fears",
          ctx: "The mother of a 20-year-old with first-episode psychosis, at the end of a family meeting.",
          p: "Did we do something wrong? Is this because of how we raised him?", cue: "Eyes red, gripping her bag.",
          opts: [
            { t: "Family dynamics can play a role. We'll explore that in therapy.", v: "poor", w: "This confirms her fear of blame at the moment she most needs support." },
            { t: "Schizophrenia is an illness of the brain. Loving parents don't cause it. You've been through so much. How have you been coping?", v: "best", w: "Answers the unspoken fear directly, then turns to her own pain. Offer resources such as NAMI." },
            { t: "We don't know yet.", v: "ok", w: "Honest about uncertainty, but it leaves her alone with guilt." }
          ]
        }
      ],
      quiz: [
        { q: "Schneider's first-rank symptoms are best understood as:", opts: ["Pathognomonic of schizophrenia", "Important experiences that must be embedded in a psychotic matrix to indicate psychosis", "Signs of malingering", "Only relevant in mania"], a: 1, w: "Schneider thought them pathognomonic; they are not." },
        { q: "Akathisia is easily mistaken for:", opts: ["Catatonia", "Psychotic agitation", "Hypersomnia", "Depression only"], a: 1, w: "It is felt as a true bodily need to move. Raising the antipsychotic can worsen it." },
        { q: "Which factor makes a command hallucination more dangerous?", opts: ["Heard inside the head", "Attributed to a revered figure and tied to a delusion of a greater good", "Spoken softly", "Heard only at night"], a: 1, w: "Also weigh content, insistence, and the patient's ability to resist." },
        { q: "With a catatonic patient in a first interview, Shea advises:", opts: ["Speak loudly to get a response", "Speak gently, explain, assume they may be processing, and generally avoid touch", "Shake them gently", "End the interview immediately"], a: 1, w: "Shea once shook an unresponsive patient, and she tried to bite him." },
        { q: "If reasonable statements make an agitated psychotic patient more agitated, you should:", opts: ["Explain more clearly", "Stop reasoning, stay calm, give space, step back", "Raise your voice", "Insist they listen"], a: 1, w: "You may have been incorporated into the delusion." }
      ],
      glossary: [
        { term: "Porous ego", def: "Shea: the world seems to invade the self, and the self to leak out." },
        { term: "First-rank symptoms", def: "Schneider's eleven symptoms, such as thought insertion, made feelings, and voices commenting." },
        { term: "Somatic passivity", def: "Bodily sensations imposed from outside the patient's control." },
        { term: "Thought broadcasting", def: "Thoughts leaking out, or deliberately sent, so others can know them." },
        { term: "Akathisia", def: "A medication-induced, intensely unpleasant inner restlessness." },
        { term: "Command hallucination", def: "A voice telling the patient to do something." },
        { term: "Functional hallucination", def: "A real sound that triggers a separate hallucination, heard at the same time." },
        { term: "Paleologic", def: "Rosenbaum: faulty logic linking shared attributes to identity." },
        { term: "Waxy flexibility", def: "A catatonic sign: limbs stay where the examiner places them." },
        { term: "Culture-bound syndrome", def: "A presentation shaped by a particular culture, such as koro." }
      ]
    },

    /* ───────────────────────── CHAPTER 13 ───────────────────────── */
    {
      id: "ch13", num: 13, title: "Personality Disorders", sub: "Core concepts",
      summary: "No one chooses a personality disorder. Rigid defenses that once protected against pain go on to create new pain. The diagnosis is historical, written in the social history. Used carefully, labels guide treatment and engagement; used carelessly, they stereotype and stick.",
      concepts: [
        { h: "Defenses that create new pain", b: "Early pain (rejection, abuse, vulnerability, biological limits) leads to defenses that protect temporarily. When they rigidify, used across every situation, they cost friends, marriages, and jobs. Coolness may prevent the loss of a loved one, and prevents ever finding one." },
        { h: "A compassionate reframe", b: "Seeing irritating, even obnoxious, behavior as a response to pain and anxiety reduces angry countertransference and increases compassion, which the patient can feel. Patients with personality disorders can quickly pull clinicians into parental roles: scolding, rescuing, withdrawing." },
        { h: "General criteria", b: "An enduring pattern deviating from cultural expectations in at least two of cognition, affectivity, interpersonal functioning, and impulse control; inflexible and pervasive; causing distress or impairment; stable from adolescence or early adulthood; not better explained by another disorder, substance, or medical condition." },
        { h: "A historical diagnosis", b: "The critical evidence lies in the history, not in one stressful interview. Shea's image: the social history is a snowfield where the tracks of personality dysfunction crisscross. A truly normal social history, accurately reported, argues against a personality disorder." },
        { h: "Ego-syntonic vs ego-dystonic", b: "Syntonic behaviors don't disturb the patient but may harm others; these patients often arrive under pressure and are harder to engage. Dystonic behaviors cause the patient pain and bring more motivation. Many patients show both." },
        { h: "Label theory", b: "Personality labels can stereotype, become pejorative (\"we're full\"), offer oversimplified answers, and become permanent tags. New grandiosity may be early mania, not \"just narcissism.\" Don't apply labels unless criteria are clearly met, and reassess inherited diagnoses yourself." },
        { h: "Benefits of accurate diagnosis", b: "Choosing psychotherapies (DBT, MBT, STEPPS, TFP, schema-focused for borderline), informing medication thinking, tailoring how you discuss options, protecting engagement, avoiding missteps, linking to psychodynamics, opening literature and supervision, and sharing a research language." },
        { h: "Tailoring the conversation", b: "A patient with obsessive-compulsive traits may want balanced reading material and time to decide. A patient with histrionic traits may respond better to personal stories than homework. Narcissistic needs call for avoiding premature challenges; histrionic traits call for warmth." },
        { h: "The clinician who is leaving", b: "A clinician due to rotate or relocate who skips a personality differential may foster intense dependence in a patient with borderline personality disorder, then leave. The departure can be felt as abandonment, with risk of suicidal behavior. Consider your own schedule." },
        { h: "The map is not the terrain", b: "A diagnosis is a map: water, highways, likely roadblocks. It cannot tell you what it is like to be in the desert. A diagnosis may take one session; understanding the person takes many." },
        { h: "Where personality comes from", b: "Temperament (Thomas and Chess) is inborn and persists; traits are roughly 50% heritable. The matrix explains the rest: a distractible child labeled lazy, frustrated parents, falling self-esteem. Early trauma can alter limbic structures. Different children reach different solutions: withdrawal, inferiority, distancing, grandiosity." }
      ],
      pearls: [
        "Look for tracks in the social history, not just behavior in the room.",
        "Ask how jobs and relationships ended, and whether friendships last.",
        "Reframe obnoxious behavior as a response to pain.",
        "Notice your reaction to a personality label in a referral.",
        "New grandiosity or irritability: is this different from their usual pattern?",
        "Rotating soon? Think twice before starting long-term therapy."
      ],
      practice: [
        {
          id: "c13p1", skill: "Non-defensiveness with devaluation",
          ctx: "A new outpatient referred after leaving group therapy.",
          p: "Therapists are useless. All I need from you is a letter saying I have to move to a safer place. That's it.", cue: "Overly firm handshake that went suddenly weak.",
          opts: [
            { t: "I don't write letters for people I've just met.", v: "poor", w: "Accurate, perhaps, but curt. He will hear rejection, which is exactly what his defenses brace for." },
            { t: "It sounds like getting somewhere safer really matters to you. Help me understand what's been happening where you are now, so I can see what makes sense.", v: "best", w: "Lands on the real concern, safety, without promising or refusing, and keeps him talking." },
            { t: "Why do you think all therapists are useless?", v: "poor", w: "A \"why\" question about his devaluation invites argument." }
          ]
        },
        {
          id: "c13p2", skill: "Reading the social history",
          ctx: "A 34-year-old asking for help with \"stress at work.\"",
          p: "I've had a lot of jobs. That's just the economy.", cue: "Shrugs.",
          opts: [
            { t: "The economy has been rough.", v: "poor", w: "Accepting the explanation leaves the most informative history unexplored." },
            { t: "About how many jobs since you turned 18? And how did each one tend to end?", v: "best", w: "Behavioral specifics across time reveal patterns more validly than self-description. The social history is where personality tracks show." },
            { t: "Do you think you have trouble keeping jobs?", v: "ok", w: "An opinion question; it may get a defensive \"no.\"" }
          ]
        },
        {
          id: "c13p3", skill: "Avoiding the oversimplified answer",
          ctx: "A patient with long-standing narcissistic personality disorder is described by her therapist as \"more grandiose than ever\" this week.",
          p: "I barely need sleep anymore. I'm launching three companies this month.", cue: "Rapid speech.",
          opts: [
            { t: "That's her narcissism. Keep doing what you're doing.", v: "poor", w: "Attributing every change to the label can miss an emerging manic episode." },
            { t: "Is this different from her usual pattern? Ask about sleep, energy, and speed of thought, and screen for mania, substances, and medical causes.", v: "best", w: "Don't let the label stop the search for another cause." },
            { t: "Confront the grandiosity to keep her grounded.", v: "poor", w: "A premature challenge risks a narcissistic rupture and still misses the diagnosis." }
          ]
        },
        {
          id: "c13p4", skill: "Tailoring a medication discussion",
          ctx: "A meticulous accountant with obsessive-compulsive personality traits, considering a medication.",
          p: "I don't like being rushed into decisions.", cue: "Notebook open, pen ready.",
          opts: [
            { t: "Here's a balanced summary of benefits and side effects and a reliable website. Take a week, jot down questions, and we'll go through them together.", v: "best", w: "Respects his need for detail and control, and the decision stays his." },
            { t: "Let me tell you how much another patient loved this medication.", v: "ok", w: "Personal stories may persuade someone with histrionic traits more than someone who values data." },
            { t: "Most people just try it and see.", v: "poor", w: "Dismisses the way he makes decisions and invites passive resistance." }
          ]
        },
        {
          id: "c13p5", skill: "Not slapping a label",
          ctx: "A referral note reads \"borderline, very difficult.\" You are meeting the patient for the first time.",
          p: "I suppose they already told you I'm a nightmare.", cue: "Watching you closely.",
          opts: [
            { t: "I like to hear people's own story before anyone else's. What's been happening that brought you in?", v: "best", w: "Sets the label aside and reassesses for yourself. Labels can trigger countertransference before the patient says a word." },
            { t: "They did mention you can be difficult.", v: "poor", w: "Confirms her fear and starts with a stereotype." },
            { t: "Don't worry about that.", v: "ok", w: "Kind but vague. It doesn't show her you'll see her freshly." }
          ]
        }
      ],
      quiz: [
        { q: "A personality disorder diagnosis is \"historical\" because:", opts: ["It is based on past diagnoses in the chart", "The pattern must be persistent from adolescence, so the key evidence lies in the history", "It only applies to older adults", "It can't change"], a: 1, w: "Interview behavior offers clues, but one stressful meeting can mislead." },
        { q: "Ego-syntonic behaviors are those that:", opts: ["Cause the patient distress", "Don't disturb the patient, though they may harm others", "Are always illegal", "Are caused by medications"], a: 1, w: "These patients often arrive under pressure from family, employers, or courts, and are harder to engage." },
        { q: "Which is NOT one of the label-theory dangers Shea describes?", opts: ["Stereotyping", "Pejorative use", "Oversimplified explanation", "Improved research communication"], a: 3, w: "A shared research language is one of the benefits of accurate diagnosis." },
        { q: "The DSM-5 general criteria require the enduring pattern to affect at least two of:", opts: ["Sleep, appetite, energy, libido", "Cognition, affectivity, interpersonal functioning, impulse control", "Work, school, family, friends", "Mood, anxiety, psychosis, substances"], a: 1, w: "It must also be inflexible, pervasive, and cause distress or impairment." },
        { q: "Shea's metaphor for a personality diagnosis is:", opts: ["A thermometer", "A map that is not the terrain", "A mirror", "A key"], a: 1, w: "The map shows roadblocks and resources; it can't show what it's like to be the person." }
      ],
      glossary: [
        { term: "Personality disorder", def: "An enduring, inflexible, pervasive pattern that deviates from cultural expectations and causes distress or impairment." },
        { term: "Defensive structure", def: "The set of coping mechanisms a person relies on; rigid and limited in personality disorders." },
        { term: "Historical diagnosis", def: "A diagnosis made from the life history rather than from behavior in the interview." },
        { term: "Ego-syntonic", def: "Behaviors that don't disturb the patient, though they may harm others." },
        { term: "Ego-dystonic", def: "Behaviors the patient experiences as painful and problematic." },
        { term: "Label theory", def: "How diagnostic labels can stereotype, stigmatize, oversimplify, and stick." },
        { term: "Temperament", def: "Inborn behavioral tendencies (Thomas and Chess) that can persist into adulthood." },
        { term: "Limbic scars", def: "Lasting brain changes described in research on childhood maltreatment." }
      ]
    },

    /* ───────────────────────── CHAPTER 14 ───────────────────────── */
    {
      id: "ch14", num: 14, title: "Personality Disorders", sub: "The differential diagnosis",
      summary: "With seven to twelve minutes to spare in an intake, narrow the field with signal signs, signal symptoms, and brief probe questions; then expand the one or two likeliest disorders, verifying persistence, ruling out state dependency, and tapping for epiphenomena to judge severity.",
      concepts: [
        { h: "Three groups by how life feels", b: "Anxiety-prone (obsessive-compulsive, dependent, avoidant): life riddled with tension. Poorly empathic (schizoid, antisocial, histrionic, narcissistic): a trail of people who felt used or ignored. Psychotic-prone (borderline, schizotypal, paranoid): immature defenses and micropsychotic episodes under stress." },
        { h: "Anxiety-prone portraits", b: "Obsessive-compulsive: a pressure cooker of perfectionism, lists, and control; even a schedule for play. Dependent: seeks a caretaker, fears showing anger, may stay in an abusive relationship. Avoidant: longs for affection but won't risk rejection. Avoidant people want relationships; schizoid people don't seek them." },
        { h: "Poorly empathic portraits", b: "Schizoid: the content loner. Antisocial: a chameleon who recognizes others' needs and uses them. Histrionic: swept up in their own drama, needing applause. Narcissistic: a stable variant that feels superior and an unstable variant whose grandiosity masks fragility and severe depressions." },
        { h: "Psychotic-prone portraits", b: "Borderline: life without an inner self, dependency turning to rage, emptiness, black-and-white thinking, frequent non-lethal self-harm. Shea's \"glass people.\" Schizotypal: magical hunches, odd speech, social awkwardness. Paranoid: scours interactions for deception; guardedness protects a deep sense of inferiority." },
        { h: "Label slapping", b: "Diagnosing from interview behavior or intuition without confirming criteria. A dramatic, entertaining patient may be early hypomanic, not histrionic. The question is whether she has behaved that way since adolescence." },
        { h: "Two opposite errors", b: "Moral judgment sabotages exploration, because many traits arouse guilt; skill at uncovering personality pathology parallels unconditional positive regard. The opposite error is hesitating to diagnose at all. If there is time to explore history and the data are reasonably valid, a diagnosis can often be made or strongly suspected in one interview." },
        { h: "Step 1: limit the field", b: "Passive scouting for signal signs (behaviors in the room, such as caustic remarks, demands, innuendo, on-and-off tears, child-like helplessness, manipulation) and signal symptoms (self-mutilation, extreme perfectionism, legal trouble, frequent anger, very low self-esteem). Then weave in brief probe questions with natural or referred gates, never as a checklist." },
        { h: "Probes rule out as much as they rule in", b: "\"I'm a party animal\" all but eliminates schizoid personality. Use only the probes you need. A state can mimic a trait (mania looks histrionic) or hide one (a depressed schizoid man may say he wishes he had friends). Ask about the person when well, over the years." },
        { h: "Step 2: expand and verify", b: "Explore the full criteria of the likeliest one or two disorders. Anchor to adolescence (\"Back in high school…\"), rule out state dependency (\"When you're feeling your normal self…\"), use normalization, amplification, and phenomenology, and stay non-defensive when provoked." },
        { h: "Tapping for epiphenomena", b: "A trait counts only if it is rigid, maladaptive, and impairing. Probe the trait, ask \"How do you know?\" or for an example, watch the nonverbals, then ask about a specific consequence (\"Do you laugh a lot?\" for over-seriousness)." },
        { h: "Dimensions and hidden strengths", b: "The DSM-5 alternative dimensional model is vivid but too slow for an intake; explore traits as time permits with entrance questions anchored to history. A missing trait can be a hidden strength, such as a patient with borderline personality disorder who carefully weighs pros and cons." }
      ],
      pearls: [
        "Narrow first: signal signs, signal symptoms, then a few probes.",
        "Anchor to adolescence: \"Has that been typical of you since high school?\"",
        "Rule out state: \"When you're feeling your normal self…\"",
        "\"How do you know?\" separates a trait from a pathology.",
        "Don't diagnose histrionic from a dramatic hour; ask about the years.",
        "Look for the trait that isn't there; it may be a strength."
      ],
      practice: [
        {
          id: "c14p1", skill: "Anchoring to adolescence",
          ctx: "A woman with recurrent anger outbursts in her marriage, currently depressed.",
          p: "I throw things when I'm angry. Last week I broke a mirror.", cue: "Says it flatly.",
          opts: [
            { t: "That sounds like borderline personality disorder.", v: "poor", w: "Label slapping. You haven't established persistence or ruled out the depression as the cause." },
            { t: "When you're feeling your normal self, not depressed, how often has that happened? Was it like that back in high school too?", v: "best", w: "Rules out state dependency and checks historical persistence, both required before the behavior counts as a trait." },
            { t: "What did you throw?", v: "ok", w: "A behavioral incident is useful, but persistence and state are the key questions here." }
          ]
        },
        {
          id: "c14p2", skill: "Using a probe to rule out",
          ctx: "A man who says he is \"kind of a loner.\" You wonder about schizoid vs avoidant personality.",
          p: "I mostly keep to myself.", cue: "Shy smile.",
          opts: [
            { t: "If you had better skills with people, would you want to be around them more?", v: "best", w: "Avoidant people want relationships but fear rejection; schizoid people don't seek them. One probe separates them." },
            { t: "Are you schizoid?", v: "poor", w: "Jargon, and stigmatizing." },
            { t: "Do you have any friends?", v: "ok", w: "Useful, but it doesn't distinguish desire from avoidance." }
          ]
        },
        {
          id: "c14p3", skill: "Tapping for epiphenomena",
          ctx: "A graduate student whose grades show tremendous effort.",
          p: "Yeah, I'd say I'm pretty perfectionistic.", cue: "Answers quickly.",
          opts: [
            { t: "How do you know? Can you give me an example?", v: "best", w: "Pathological traits yield examples readily. Many people say yes to \"perfectionistic\" without meeting the criterion." },
            { t: "Good, that's a strength in grad school.", v: "poor", w: "It may be, but you haven't judged whether it is rigid and impairing." },
            { t: "So you have obsessive-compulsive personality disorder.", v: "poor", w: "One answer is not a criterion, let alone a diagnosis." }
          ]
        },
        {
          id: "c14p4", skill: "Staying non-defensive when provoked",
          ctx: "Exploring self-harm with a woman transferred after an overdose.",
          p: "You're not going to stop me from cutting, you know.", cue: "Challenging stare.",
          opts: [
            { t: "You're right. I can't stop you. I'd like to understand what cutting does for you, though. What do you feel right before?", v: "best", w: "Agreeing non-defensively removes the power struggle, and curiosity about the experience keeps the history coming. Return to safety later in the interview." },
            { t: "If you keep cutting, we'll have to admit you.", v: "poor", w: "A threat turns the interview into a battle and teaches her to hide behavior." },
            { t: "Let's move on.", v: "poor", w: "Avoidance leaves critical safety information unexplored." }
          ]
        },
        {
          id: "c14p5", skill: "Avoiding label slapping",
          ctx: "A colorfully dressed woman, entertaining and dramatic, mildly pressured, in her first visit.",
          p: "Oh, I'm always the life of the party, darling!", cue: "Laughs loudly, gestures widely.",
          opts: [
            { t: "Note histrionic personality disorder on the intake.", v: "poor", w: "Interview behavior is a clue, not a historical diagnosis. This could be early hypomania." },
            { t: "Has that been true of you for as long as you can remember, or is this a newer feeling? How have you been sleeping lately?", v: "best", w: "Checks persistence and screens for a state such as hypomania, stimulant use, or cyclothymia." },
            { t: "You seem to enjoy being the center of attention.", v: "ok", w: "A fair probe, but it doesn't address whether this is new." }
          ]
        },
        {
          id: "c14p6", skill: "Finding a hidden strength",
          ctx: "Second session with a woman with borderline personality disorder who regrets many life decisions.",
          p: "(laughs) Impulsive? Hardly. I second-guess everything to death.", cue: "Surprised by the question.",
          opts: [
            { t: "Then you probably don't have borderline personality disorder.", v: "poor", w: "Not everyone with a diagnosis has every trait." },
            { t: "That sounds like a real strength. Many people with what you're facing struggle with impulsive decisions. Could we use that pros-and-cons skill when anger builds?", v: "best", w: "Dimensional exploration found a strength that becomes a treatment tool and improves her self-image." },
            { t: "Second-guessing can be a problem too.", v: "ok", w: "Possibly true, but you missed the chance to name a strength." }
          ]
        }
      ],
      quiz: [
        { q: "Shea's \"psychotic-prone\" group includes:", opts: ["Obsessive-compulsive, dependent, avoidant", "Schizoid, antisocial, histrionic, narcissistic", "Borderline, schizotypal, paranoid", "Histrionic, narcissistic, borderline"], a: 2, w: "Immature defenses can sweep these patients into micropsychotic episodes under stress." },
        { q: "\"Label slapping\" means:", opts: ["Refusing to diagnose", "Diagnosing from interview behavior or intuition without confirming criteria", "Using DSM labels at all", "Telling the patient the diagnosis"], a: 1, w: "Interview behavior guides exploration; it isn't evidence of a historical diagnosis." },
        { q: "A signal sign differs from a signal symptom in that a signal sign is:", opts: ["Reported history", "Behavior observed in the interview", "A lab finding", "A probe question"], a: 1, w: "Signal symptoms are reported, such as self-mutilation or legal trouble." },
        { q: "\"State dependency\" refers to:", opts: ["A trait that is truly lifelong", "A trait actually caused by another disorder such as mania, depression, or drugs", "Dependence on a caretaker", "Being in a particular US state"], a: 1, w: "Ask about the person \"when you're feeling your normal self.\"" },
        { q: "Tapping for epiphenomena helps determine:", opts: ["Whether a trait is present at all", "Whether a trait is severe and rigid enough to be pathological", "Which medication to use", "Whether the patient is lying"], a: 1, w: "Pathological traits produce associated experiences and examples readily." },
        { q: "About how much time does Shea estimate is typically available for personality exploration in an intake?", opts: ["1–2 minutes", "7–12 minutes", "25–30 minutes", "The whole interview"], a: 1, w: "That's why limiting the field first is essential." }
      ],
      glossary: [
        { term: "Label slapping", def: "Premature personality diagnosis based on interview behavior or intuition." },
        { term: "Signal sign", def: "A behavior observed in the interview that suggests disorders to explore." },
        { term: "Signal symptom", def: "A reported symptom or history pointing toward certain disorders." },
        { term: "Probe question", def: "A brief question testing whether a diagnostic region deserves expansion." },
        { term: "State dependency", def: "A \"trait\" actually caused by another disorder, such as mania, depression, or drugs." },
        { term: "Epiphenomena", def: "Associated experiences that a truly pathological trait produces." },
        { term: "Entrance question", def: "A question for raising a dimensional trait, anchored to history." },
        { term: "Prototype-based system", def: "Diagnosis by matching narrative descriptions, such as the SWAP-II." }
      ]
    },

    /* ───────────────────────── CHAPTER 15 ───────────────────────── */
    {
      id: "ch15", num: 15, title: "Engaging Personality Disorders", sub: "Object relations and self psychology",
      summary: "Object relations and self psychology study how a person comes to feel psychologically safe in a room with another human being. Recognize which stage of the self a patient is relying on, and match your engagement to it.",
      concepts: [
        { h: "Making the unexplainable understandable", b: "Sudden rage or self-cutting leaves clinicians on edge and breeds aversion. Object relations (Kernberg) and self psychology (Kohut) explain such moments and suggest responses. If a patient doesn't feel safe by the end, there probably won't be a second interview." },
        { h: "Four stages of the self", b: "1. Discovering the body's boundaries (part self, part object): regression here looks like psychosis or schizotypal process. 2. Seeking safety by merging with others: borderline structure. 3. Securing the self through grandiosity and idealization: narcissistic structure. 4. A stable self capable of empathy." },
        { h: "Stage 1 in the interview", b: "Intermittent preoccupation, missing nonverbal engagement, fleeting magical thinking, low-grade paranoia. These patients may be exquisitely prone to paranoia toward the interviewer. Go slow, lower immediacy, avoid probing that feels intrusive." },
        { h: "Merger and transitional objects", b: "Winnicott: a held infant feels whole. Some adults, often abused as children, remain dependent on merger objects to feel safe. A wristband, jewelry, the clinician, even the office chair can become one. Signal symptoms: panic or emptiness when alone; relationships swinging from dependence to fury." },
        { h: "Engaging merger dynamics", b: "Early dependency can form fast; patients may push for special exceptions. Discuss dependency matter-of-factly and plan the frame deliberately. In the closing you might ask how you'll both know if they're becoming too dependent. Transitions such as rotation changes carry special risk." },
        { h: "Splitting", b: "Experiencing people as all good or all bad, a toddler's rapid safety radar that is problematic in adults. A canceled appointment can be heard only as \"doesn't care.\" Signal signs: polarized language (always, never, best, worst), idealize-then-devalue, rapidly changing opinions of you, pitting people against each other." },
        { h: "Engaging a patient who splits", b: "Go slow and choose words carefully; the alliance can flip in an instant. Avoid interpretive questions early. Collaborate on the interview's goals and the plan: here this is critical, not just useful. Expect shifts and don't take them personally." },
        { h: "Kohut's bipolar self", b: "Two routes to a secure self. The grandiose pole (\"I am powerful\") needs mirroring and is threatened by being put one-down. The idealizing pole (\"I am connected to someone powerful\") needs the hero to stay ideal. In narcissistic structure, others are recognized as separate but not as having needs of their own." },
        { h: "Signal signs of the bipolar self", b: "Bold claims of achievement, \"you're lucky to have me,\" putting you in your place (\"Listen, my friend…\"), flat affect about others' pain, superlatives about many people, and a reluctant patient with little distress. Signal symptoms: mood dips when mirroring fails, jealousy and envy, hypochondriasis." },
        { h: "Complementary shifts", b: "A response that puts the patient one-up, maintaining a mirror transference: a genuine compliment you truly feel, or asking for their help (\"I'd really like your help understanding what's actually going on\"). The patient no longer has to defend against feeling inferior. A false compliment violates trust." },
        { h: "Accepting idealization, and countertransference", b: "For a patient who needs an idealized figure, too much humility can shatter hope early: \"I'm glad your friend thinks so highly of me. We'll certainly try.\" Challenge idealization later. Notice subtle countertransference such as boredom when reduced to an audience, and nonverbal leakage." },
        { h: "Stage-matched engagement", b: "With a stable self, interpretations and gentle challenges are safer. Calibrate how much you challenge to the stage the patient seems to function at, and look in your own mirror: most of us have overcome some of the same challenges." }
      ],
      pearls: [
        "Paranoid flickers and magical thinking: go slow, low immediacy.",
        "Transitional objects and panic when alone: discuss dependency openly.",
        "Polarized language and flips about you: avoid interpretation; collaborate.",
        "Boasting or one-upping: complementary shift, genuine compliment, ask for help.",
        "\"You're the best\": accept it for now, gently.",
        "Before rotating off: plan transitions early with merger-dependent patients."
      ],
      practice: [
        {
          id: "c15p1", skill: "A complementary shift",
          ctx: "A 26-year-old with schizophrenia who distrusts psychiatrists makes a sophisticated point about antipsychotic side effects.",
          p: "Your journals admit these drugs cause problems. You people just don't read them.", cue: "Leaning forward, challenging.",
          opts: [
            { t: "I'm well aware of the literature.", v: "poor", w: "Putting him one-down invites a defensive escalation." },
            { t: "That's a sophisticated point. Where did you learn it?", v: "best", w: "A genuine compliment and real curiosity put him in the expert role. Disagreement may remain, but the alliance can grow." },
            { t: "Let's not get into the literature.", v: "ok", w: "Avoids conflict but misses a chance to engage him as a capable person." }
          ]
        },
        {
          id: "c15p2", skill: "Asking a teen for help",
          ctx: "A 15-year-old brought in by parents for defiance. You've already met with the parents.",
          p: "Whatever they told you is a lie.", cue: "Slouched, hood up.",
          opts: [
            { t: "Your parents seem pretty reasonable to me.", v: "poor", w: "Siding with the parents puts him one-down and ends the conversation." },
            { t: "I've heard their side. Parents don't always see the whole picture. I could really use your help understanding what's actually going on.", v: "best", w: "A complementary shift: genuinely, his view may be more accurate, and he becomes the expert." },
            { t: "Lying is a strong word.", v: "poor", w: "Challenging his language starts a battle over control." }
          ]
        },
        {
          id: "c15p3", skill: "Accepting idealization",
          ctx: "A first visit with a woman with fragile self-esteem who was referred by a friend.",
          p: "My friend says you're the best therapist in the city. You'll fix this, right?", cue: "Hopeful, eager.",
          opts: [
            { t: "Oh, I don't know about the best. I'm just one of many.", v: "poor", w: "For a patient who needs an idealized figure to feel safe, humility can shatter hope before therapy starts." },
            { t: "I'm glad your friend thinks so highly of me. We'll certainly look carefully at everything that matters to you and work on real changes together.", v: "best", w: "Accept the pedestal briefly in service of her current needs, without promising a cure. Challenge idealization later." },
            { t: "No one can fix you. You'll have to do the work.", v: "poor", w: "Accurate in the long run, but premature and deflating." }
          ]
        },
        {
          id: "c15p4", skill: "Responding to splitting",
          ctx: "A patient who praised you warmly ten minutes ago, after you explained that the unit she requested isn't appropriate.",
          p: "You're just like all the others. You don't care at all.", cue: "Pouting, turned away.",
          opts: [
            { t: "That's splitting. Can you see how you went from loving me to hating me in ten minutes?", v: "poor", w: "An early interpretation will likely be felt as an attack and deepen the rupture." },
            { t: "It sounds like that really felt like I don't care. I do want to find what will help most. Can we look at the options together?", v: "best", w: "Validate the felt experience, then collaborate on the plan. With splitting, collaboration is critical." },
            { t: "I'm sorry, I'll see what I can do about that unit.", v: "poor", w: "Giving in to avoid her anger reinforces the pattern and makes the next limit harder." }
          ]
        },
        {
          id: "c15p5", skill: "Planning for merger dynamics",
          ctx: "Closing a first session with a woman who has rapidly formed intense attachments and panics when alone. You will rotate off this clinic in five months.",
          p: "I feel so much better already. Can I call you whenever I need to?", cue: "Holding a small bracelet she touches often.",
          opts: [
            { t: "Of course, call anytime.", v: "poor", w: "An unplanned frame can foster dependency that becomes painful when you leave." },
            { t: "I'm glad today helped. Let's plan how we'll stay in touch between sessions. And how will we both know if you're starting to rely on me more than is good for you? I also want to be honest that I'm here for five months, so let's think now about what continuity looks like.", v: "best", w: "Discuss dependency matter-of-factly, set the frame deliberately, and plan transitions early, which protects her from feeling abandoned." },
            { t: "No, only during sessions.", v: "ok", w: "Clear limits matter, but delivered flatly they may feel like rejection." }
          ]
        },
        {
          id: "c15p6", skill: "Stage 1: going slow",
          ctx: "A guarded man with magical thinking who believes he can sometimes influence people at a distance.",
          p: "I can tell what you're thinking right now.", cue: "Intermittently preoccupied, little eye contact.",
          opts: [
            { t: "What am I thinking?", v: "ok", w: "Curious, but it can feel like a test and heighten suspicion." },
            { t: "(calmly, lower intensity) Tell me more about how that happens for you.", v: "best", w: "Low immediacy and gentle interest suit a patient who may be prone to paranoia toward the interviewer." },
            { t: "That's not actually possible.", v: "poor", w: "Challenging magical thinking early feels intrusive and threatening." }
          ]
        }
      ],
      quiz: [
        { q: "In Shea's simplified model, borderline structure reflects difficulty at which stage?", opts: ["Discovering the body's boundaries", "Seeking safety by merging with others", "Grandiosity and idealization", "A stable self"], a: 1, w: "Narcissistic structure reflects stage 3; psychosis and schizotypal process stage 1." },
        { q: "A complementary shift is:", opts: ["Agreeing with everything the patient says", "A response that puts the patient one-up, such as a genuine compliment or asking for their help", "Changing the topic", "Interpreting the transference"], a: 1, w: "It maintains a mirror transference so the patient need not defend against feeling inferior." },
        { q: "Which is a signal sign of splitting?", opts: ["Long latency before answers", "Polarized language such as always, never, best, worst", "Flat affect about others' pain", "Waxy flexibility"], a: 1, w: "Also idealization then devaluation, rapidly shifting views of you, and pitting people against each other." },
        { q: "Kohut's idealizing pole provides safety by:", opts: ["Feeling one's own greatness", "Identifying with someone seen as powerful", "Merging physically with a caregiver", "Withdrawing from others"], a: 1, w: "If the hero is revealed as flawed, the patient may turn on them." },
        { q: "With a patient who splits, early in the relationship you should:", opts: ["Offer interpretations quickly", "Go slow, avoid interpretations, and collaborate on goals and plans", "Confront inconsistencies", "Grant special exceptions"], a: 1, w: "A misread intention can instantly turn you from \"all good\" to \"all bad.\"" }
      ],
      glossary: [
        { term: "Object relations", def: "How the mind builds internal images (\"objects\") of self and others." },
        { term: "Self psychology", def: "Kohut: how caregiver interactions build a secure, continuous sense of self." },
        { term: "Part self / part object", def: "The earliest stage, when the boundaries of self and world are still being discovered." },
        { term: "Merger object", def: "A person or internal image one must be close to in order to feel whole and safe." },
        { term: "Transitional object", def: "Winnicott: an item carrying the comfort of a merger object." },
        { term: "Splitting", def: "Experiencing people as all good or all bad (Klein, Kernberg)." },
        { term: "Selfobject", def: "Kohut: an experience with another that solidifies the self." },
        { term: "Mirroring", def: "Reflecting back a person's sense of greatness; a need of the grandiose pole." },
        { term: "Idealizing transference", def: "Identifying with the clinician as an idealized, powerful figure." },
        { term: "Complementary shift", def: "Shea: a response that puts the patient one-up on the clinician." }
      ]
    }
  ];
})();
