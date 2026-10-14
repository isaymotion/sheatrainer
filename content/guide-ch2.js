/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 2: Beyond Empathy
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book.
  Schema: see content/guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch2 = {
  chapter: "ch2",
  intro: "Chapter 1 taught empathy. This chapter adds four more ways to build an alliance quickly: making the relationship feel safe, being genuine, showing expertise through the questions you ask, and setting goals together. It closes Shea's first station on the map, engagement, before Chapter 3 turns to structure.",

  highYield: {
    mustKnow: [
      "Patients care less about our credentials than about the person before the letters: will this clinician collaborate or talk down, accept or judge, and do they know what they're doing?",
      "Sullivan's [[self-system]] is running at full alert in the waiting room. Lowering it is a central task of the first minutes, its activity previews the patient's defenses, and your own self-system is active too.",
      "[[Unconditional positive regard]] in an initial interview means suspending moral judgment so the patient leaves feeling unjudged. Don't join the [[parade of frowns]] many patients have already met.",
      "Find your blind spots by noticing which topics you routinely skip, such as sexuality, religion, substances, or violence. Those are often the topics you hold strong opinions about.",
      "[[Non-defensiveness]]: a lecturing \"educational\" reply usually means your own self-system has been triggered, and it triggers the patient's in turn. Take nothing from the patient for yourself, not even admiration.",
      "[[Genuineness]] has three marks: responsiveness, spontaneity, and consistency. An expressionless face is not neutral; it tends to read as dislike ([[professional blandness]]).",
      "Expertise shows more in what you ask than in what you say. Well-timed [[fact-oriented question|fact-oriented questions]] tell the patient you want the details, you've seen this before, and you're thorough.",
      "Screen every depressed or anxious patient for OCD with a normalizing question. Many people live with it for over a decade before anyone asks.",
      "[[Collaborative interviewing]] builds alliances through shared goals, sometimes where empathy can't. Ask what would make the visit helpful, and use the [[miracle question]]. The top goal of a first interview is making sure there is a second one."
    ],
    pitfalls: [
      "Sounding like a parent: \"So you haven't been taking your medication as prescribed.\" Curiosity gets you further than evaluation.",
      "Answering a family's request for an unproven treatment with a lecture. Acknowledge the frustration and schedule the discussion instead.",
      "\"Running over\" a patient's joke with a somber face in the name of professionalism.",
      "Shifting from warm to cool, or into sudden confrontation, partway through an interview.",
      "Staying with open-ended questions for the whole interview. You lose the database, and the chance to be seen as a skilled caregiver.",
      "Opening with the family's view of the problem (\"Your parents say you're depressed\") instead of the patient's own.",
      "Telling a reluctant patient which problems to work on, instead of letting them choose their own goals first."
    ],
    phrases: [
      { say: "What was it like for you when you were taking them?", when: "A patient says they stopped their medication. Curiosity instead of correction." },
      { say: "It sounds like you've been through a lot of frustration. Let's talk through the options in a bit; first, help me understand…", when: "A family member demands a treatment you have doubts about." },
      { say: "Tell me about the bad experiences you've had, so I can make sure I'm not doing the same thing.", when: "A patient says past clinicians treated them badly." },
      { say: "Some people I see who are this depressed also tell me about worries that feel odd to them, like germs or checking the stove. Anything like that for you?", when: "A normalizing OCD screen for anyone presenting with depression or anxiety." },
      { say: "What would make this a helpful visit?  What would you like to be different?", when: "Goal questions, especially when a patient says they don't need to be here." },
      { say: "If you woke up tomorrow and a miracle had happened, what are some of the things that would be different?", when: "The miracle question. The plural invites several goals." }
    ]
  },

  sections: [
    {
      id: "letters", title: "The person before the letters",
      lede: "What patients are really asking about us before they decide to open up.",
      blocks: [
        { type: "p", text: "Shea opens with a novelist's advice to reveal nothing and be cautious in any company. Many patients take that stance with us, especially around taboo subjects such as suicide, incest, domestic violence, and substance use. The letters on our door, M.D., Ph.D., M.S.W., R.N., matter less to them than the person behind it." },
        { type: "list", items: [
          "Will this person collaborate with me, or patronize me?",
          "Will they accept me, or judge me?",
          "Are they warm or cool, trustworthy or careless?",
          "Do they actually know what they're doing?"
        ] },
        { type: "p", text: "Patients want to know our character, ethics, and humanity, not the facts of our private lives, and they want to know whether we're competent. Earlier bad experiences with mental health professionals can make these questions sharper." },
        { type: "p", text: "In everyday life we test someone's character over many meetings before sharing anything intimate. In a first interview we ask a stranger to do it within minutes, on the strength of a few letters after our name. It's an odd situation, but it holds real promise if a resilient alliance forms. Shea reframes the patient's concerns as gateways rather than roadblocks: how we answer them, through the interview itself, deepens engagement beyond empathy." }
      ]
    },
    {
      id: "safety", title: "Making the relationship safe",
      lede: "Lowering the self-system, suspending judgment, and finding your own blind spots.",
      blocks: [
        { type: "p", text: "Waiting-room minutes can pass slowly, filled with fear of rejection and self-reproach: \"It's come to this. I must be weak to need a shrink.\" For most people, including many clinicians, admitting a need for psychological help is genuinely upsetting. Handling that anxiety well is one of the central tasks of the initial interview. If it goes badly, there may be no second visit." },
        { type: "p", text: "Harry Stack Sullivan called the machinery behind this anxiety the [[self-system]]: a vast set of conscious and unconscious processes, alerts, and warning signals that protect self-esteem when we meet someone new. It is running at a high pitch while the patient flips through a magazine or stares at a phone." },
        { type: "table", head: ["Implication", "What it means for you"], rows: [
          ["Lower the alarm", "One of your first goals is to reduce the patient's anxiety, and with it the need for an overactive self-system."],
          ["Read the preview", "How the self-system activates in the first ten minutes previews the patient's defenses against interpersonal anxiety, healthy and otherwise."],
          ["Notice your own", "Your self-system is usually aroused too when you meet a new patient. The interplay of all three sits at the heart of engagement."]
        ] },
        { type: "pearl", title: "Before the first question", text: "Greet the patient by name, introduce yourself and your role, and say briefly what will happen next. Predictability lowers anxiety before the real interview starts. Chapter 3 covers the introduction in detail." },
        { type: "p", text: "Empathy calms the self-system, and so does Carl Rogers' [[unconditional positive regard]]: a genuine caring for the patient as a person with potential, uncontaminated by evaluation of their thoughts, feelings, or behavior. In an initial interview this becomes a suspension of moral opinion. The patient should leave feeling that you didn't pass judgment, which may contrast sharply with the [[parade of frowns]] they've met from family, friends, and employers." },
        { type: "p", text: "Regard is for the person, not an endorsement of every behavior. It helps to work out your own reactions in advance to charged subjects such as divorce, religion, sexual orientation, suicide, violence, child abuse, rape, and abortion. Whatever your views, the goal in the room is to learn what the issue means to this patient. Armand Nicholi's reminder is worth keeping: whatever their background or presentation, the patient is far more like you than different." },
        { type: "pearl", title: "Find your blind spots", text: "Look back over your recent write-ups. Which sections are always thin? One clinician never knows a patient's religious beliefs; another never asks about sexuality. Those gaps often mark the topics you feel most strongly about, and they're where unconditional positive regard is hardest to convey." },
        { type: "p", text: "Judgment can also slip in through ordinary word choice. Clinicians can sound like parents at unexpected moments." },
        { type: "exchange", title: "Concern with a price tag", lines: [
          { who: "Clinician", t: "How have things been since you left the hospital?" },
          { who: "Patient", t: "Much better. I'm getting along at home, and I stopped needing those pills." },
          { who: "Clinician", t: "So you haven't been taking your medication like you're supposed to.", tag: "evaluative" },
          { who: "Patient", t: "They made my head foggy." },
          { who: "Clinician", t: "We'll need to talk about that later.", tag: "sounds like a threat" }
        ], note: "Composed. The phrasing evokes a parent scolding a child, and \"later\" sounds like being sent to the principal's office." },
        { type: "exchange", title: "Concern without a price tag", lines: [
          { who: "Clinician", t: "Which medicines were you taking?" },
          { who: "Patient", t: "Something for the voices, and a small pill for the stiffness." },
          { who: "Clinician", t: "What were you like while you were on them?" },
          { who: "Patient", t: "Like walking around in a fog." },
          { who: "Clinician", t: "That sounds like an unpleasant side effect.", tag: "empathic" }
        ], note: "Composed. Curiosity keeps the self-system quiet and brings out his reasons. Shea suggests this clinician is better placed to discuss restarting medication later." }
      ],
      practice: [{ kind: "practice", id: "c2p1", label: "Practice: curiosity instead of evaluation" }]
    },
    {
      id: "defensive", title: "Non-defensiveness and no hidden needs",
      lede: "Two more ingredients of safety, both about the clinician's own self-system.",
      blocks: [
        { type: "p", text: "Patients pick up defensiveness quickly, and it tells them they'd better watch what they say. A defensive, lecturing, \"educational\" reply is often a sign that the clinician's self-system has been triggered, and it triggers the patient's in return." },
        { type: "exchange", title: "A defensive reply", lines: [
          { who: "Parent", t: "Nothing the doctors try works for my son. I read about a supplement that cured someone. I want you to use it." },
          { who: "Clinician", t: "Let me be clear: that's unproven and maybe unsafe. We don't do that here.", tag: "defensive" },
          { who: "Parent", t: "But people say it helps." },
          { who: "Clinician", t: "You can't believe everything you read.", tag: "paternalistic" }
        ], note: "Composed. In Shea's example, a mother asks for megavitamin therapy for her son with schizophrenia." },
        { type: "exchange", title: "The same moment, handled openly", lines: [
          { who: "Parent", t: "…I want you to use it." },
          { who: "Clinician", t: "It sounds like you've been through a great deal of frustration. In a bit, let's talk through the pros and cons of the options, including that one. First, I'd like to hear more about your son so I understand what we're facing.", tag: "empathy, then deferral" },
          { who: "Parent", t: "All right. It started about three years ago…" }
        ], note: "Composed. A gentle empathic statement lands on the parent's real feeling. The request is neither accepted nor rejected; it is scheduled." },
        { type: "p", text: "Sullivan adds a subtler threat to safety. Part of an overactive self-system is a not entirely unreasonable fear that strangers have hidden motives, that one will be used. Deliberate exploitation is, we hope, rare, but clinicians can have motives outside their awareness, such as needing a patient to make them feel liked, important, or admired. If the patient senses you need something from them, the relationship is no longer safe; they have to watch what they say in case help is withdrawn." },
        { type: "compare",
          a: { title: "What the clinician offers", items: ["Expert knowledge of relationships and personality problems.", "Attention focused on the patient's needs.", "A relationship that asks nothing back."] },
          b: { title: "What the clinician doesn't seek", items: ["Companionship or friendship from the patient.", "Prestige or standing in the patient's eyes.", "Support for their own sense of importance."] } },
        { type: "p", text: "Sullivan observed that when clinicians hold to this, many suspicious people discover they can actually talk to them." },
        { type: "pearl", title: "A quiet self-check", text: "Are you pleased when a patient praises you, and a little deflated when they don't? Mild versions are human. Strong versions are worth bringing to supervision." }
      ],
      practice: [{ kind: "practice", id: "c2p2", label: "Practice: non-defensiveness" }]
    },
    {
      id: "genuine", title: "Genuineness",
      lede: "Responsiveness, spontaneity, and consistency: a clinician at ease with themselves and the patient.",
      blocks: [
        { type: "p", text: "Like empathy, genuineness sounds vague until it's defined in behavior. Shea's working definition: the clinician's behavior suggests they feel at ease with themselves and with the patient. Three marks usually show it." },
        { type: "table", head: ["Mark", "What it looks like"], rows: [
          ["Responsiveness", "Reacting naturally to humor, tears, anger, and fear rather than holding a fixed, somber mask."],
          ["Spontaneity", "Sharing appropriate spontaneous reactions after weighing their likely impact: well-timed humor, a flexible way of structuring the interview, an open response to the patient's questions."],
          ["Consistency", "No jarring shifts, such as warm early and cold later, or a sudden turn to confrontation (Egan)."]
        ] },
        { type: "p", text: "Humor is the clearest test. Some clinicians meet a patient's joke with an awkward, somber non-response, as if humor didn't belong in an interview. The patient feels like someone whose joke fell flat at a party, and anxiety rises at once. Calling that professionalism is odd when it makes patients more anxious. The same flat non-response is often applied to tears, anger, and fear." },
        { type: "compare",
          a: { title: "Pseudo-professionalism", items: ["Somber and expressionless.", "Treats natural reactions as unprofessional.", "Raises patient anxiety; many patients balk at it."] },
          b: { title: "True professionalism", items: ["No need to feign professionalism.", "At ease in body language and reactions: attentively relaxed.", "Gently responsive, with appropriate spontaneity."] } },
        { type: "p", text: "Spontaneity is not permission to say whatever comes to mind. A skilled clinician keeps weighing the impact of every statement and shares a spontaneous feeling only when it fits this patient. Too buoyant a style can intimidate quiet or anxious patients; too wooden a style can frighten them, and a frightened patient may hold back suicidal thoughts. Adjust to each patient and setting." },
        { type: "p", text: "Shea traces the myth of [[professional blandness]] to a misreading of the psychoanalytic \"neutral screen.\" As Ryle noted, an expressionless face isn't neutral at all; it usually reads as dislike, and it may push the patient toward negative transference. Whatever its place in some therapies, it doesn't serve an assessment whose goal includes an alliance strong enough to bring the patient back." },
        { type: "exchange", title: "Consistency under pressure", lines: [
          { who: "Patient", t: "Be honest. What do you really think of me?" },
          { who: "Clinician A", t: "Honestly? I think you're avoiding responsibility and hoping things fix themselves.", tag: "abrupt confrontation" },
          { who: "Clinician B", t: "I'm not sure a verdict from me would help much, but I'm glad you asked directly. Could we look at what's happening between us right now?", tag: "shared exploration" }
        ], note: "Composed, in the spirit of Egan's contrast. B stays consistent and non-defensive, and turns the question into something to explore together." },
        { type: "case", title: "Doctors scare me too", text: "In an emergency department, a physician judged a patient to be pleasant, well integrated, and very anxious, so humor seemed safe. Asked what coming in had been like, she said it felt unsettling because past doctors had treated her badly. He smiled and said doctors scared him too. When she pointed out that he was one, he said that was the scary part, and she laughed. He then asked about her bad experiences so he wouldn't repeat them, and she opened up." },
        { type: "p", text: "That brief exchange shows responsiveness, spontaneity, and non-defensiveness at once, and it reflects a paradox Shea notes: when patients know there's a way to voice complaints, they feel less frightened and need it less. Experienced interviewers often seem to enjoy interviewing, their own self-systems \"purring quietly,\" and patients feel that balance." }
      ],
      practice: [{ kind: "practice", id: "c2p3", label: "Practice: responding to humor" }, { kind: "practice", id: "c2p6", label: "Practice: consistency" }]
    },
    {
      id: "expertise", title: "Expertise through questions",
      lede: "Answering the patient's most pressing question: can this person help me?",
      blocks: [
        { type: "p", text: "Of all the questions a patient is silently asking, this one may most shape their interest in whatever you recommend. Patients exchange money, time, and trust for what we offer. They expect a good listener, but at a deeper level they expect expertise." },
        { type: "compare",
          a: { title: "Expertise doesn't mean", items: ["Having all the answers.", "Guaranteeing relief.", "Pride or superiority (Shea admits the word makes him uneasy)."] },
          b: { title: "Expertise does mean", items: ["Rigorous training in a body of knowledge useful to the patient.", "Knowledge the patient doesn't commonly have.", "Filling the healer's role, whether shaman or social worker."] } },
        { type: "p", text: "How do you convey it? Mostly not through what you tell the patient, but through what you ask. It's the quality of the questions, not the quantity of your words. Questions vary along several continua, and each kind can help or fail depending on timing and fit." },
        { type: "table", head: ["Continuum", "One end", "Other end"], rows: [
          ["Openness", "Open-ended: \"Tell me about your sleep.\"", "Closed-ended: \"Do you wake early?\""],
          ["Depth", "Non-probing", "Probing"],
          ["Target", "Fact-finding: symptoms, events", "Opinion-finding: the patient's views"],
          ["Format", "Unstructured: follows the conversation", "Structured: a systematic review"]
        ] },
        { type: "p", text: "Shea singles out the [[fact-oriented question]]: a usually closed question about the concrete realities of the patient's symptoms or situation, such as \"Are you having trouble falling asleep?\" Some interviewers avoid them as disengaging, and they can be when asked at the wrong moment, too often, or like a checklist. Asked sensitively, they engage powerfully and yield data you need for planning and triage." },
        { type: "exchange", title: "Fact-finding that stays warm", lines: [
          { who: "Patient", t: "I'm on edge all the time since I started this new job." },
          { who: "Clinician", t: "On a typical day this past month, how much of the day are you worrying?", tag: "fact-oriented" },
          { who: "Patient", t: "Most of it, honestly." },
          { who: "Clinician", t: "That sounds exhausting.", tag: "empathic" },
          { who: "Clinician", t: "Some people notice tension in their body, like tight muscles, a twitch, or an upset stomach. Any of that for you?", tag: "normalized fact question" },
          { who: "Patient", t: "My jaw is sore every morning. I didn't think that was related." }
        ], note: "Composed. Shea's example follows a woman anxious about graduate school through worry, muscle tension, an eye twitch, GI symptoms, and concentration, while ruling out panic attacks. The pattern supported generalized anxiety disorder, which changes treatment." },
        { type: "p", text: "Well-asked fact questions send three implicit messages, or [[metacommunication|metacommunications]], that build confidence in you." },
        { type: "steps", items: [
          "This clinician wants to know exactly what I'm experiencing.",
          "The questions hit things I've felt, so this clinician has seen problems like mine before.",
          "This clinician is thorough and exploring many areas, not just skimming."
        ] },
        { type: "pearl", title: "Friends listen; clinicians listen and ask", text: "Good friends can listen sensitively. Only a good clinician can listen sensitively and question knowledgeably. An interviewer who stays open-ended throughout loses that chance, and loses diagnostic distinctions, such as generalized anxiety versus panic disorder, that change treatment." }
      ]
    },
    {
      id: "ocd", title: "The normalizing OCD screen",
      lede: "A single well-timed closed question can be more engaging than any empathic statement.",
      blocks: [
        { type: "p", text: "Obsessive-compulsive disorder has a lifetime prevalence of about 2.5%, yet outpatient clinicians see far fewer cases than that predicts. People with OCD are often deeply embarrassed and guilt-ridden, and many privately believe they must be among the craziest people alive. They tend to present with depression, anxiety, marital or work problems, not with their OCD. Studies suggest an average of roughly 11 to 14 years of suffering before they seek help. Unless someone asks directly, the symptoms may never come out." },
        { type: "steps", items: [
          "Frame it with others: \"Some people I see who are as depressed as you…\"",
          "Normalize ordinary worries, such as money or relationships.",
          "Name concrete examples that feel odd: germs and repeated washing, checking the stove or locks.",
          "Ask directly with a closed question: \"Has anything like that happened to you?\"",
          "Respond to a yes with calm familiarity, then name the condition and offer hope."
        ] },
        { type: "p", text: "The long setup is deliberate. It lets the patient say yes without being the first to confess something they believe is bizarre." },
        { type: "case", title: "A secret held for a decade", text: "About twenty minutes into an interview with a woman who came in for severe depression, Shea asked a normalizing question about odd worries such as germs or checking. She hesitantly admitted fearing germs and washing her hands around a hundred times a day, sometimes missing work. When he said matter-of-factly that this is common, named OCD, told her she wasn't crazy, and said there were treatments, she wept with relief. She had told no one in over ten years." },
        { type: "p", text: "Shea says he can hardly recall an empathic statement in his career that matched the engaging power of that one question. It conveyed that he had seen this before, that many others share it, and that help exists, all at once. Normalizing here doesn't mean minimizing: the symptoms are real and treatable, not \"nothing.\"" },
        { type: "pearl", title: "Who to screen", text: "Screen everyone who presents with depression or anxiety. A related version for new parents: many experience upsetting, unwanted thoughts of harm coming to the baby that they would never act on; ask whether that has happened." }
      ],
      practice: [{ kind: "practice", id: "c2p4", label: "Practice: the OCD screen" }]
    },
    {
      id: "collab", title: "Collaborative interviewing",
      lede: "Moving with patients rather than against them.",
      blocks: [
        { type: "p", text: "All person-centered interviewing is collaborative, but recent decades have produced specific models built around \"moving with\" patients: solution-focused therapy, motivational interviewing, Shea's medication interest model, and Jobes' collaborative approach to helping suicidal patients find reasons for living. Shea groups them as [[collaborative interviewing]] models." },
        { type: "p", text: "They help patients discover for themselves three things: the goals they want to reach, the methods they want to use, and their own reasons to stick with those methods. Collaborative goal setting can forge strong alliances even where empathy works poorly or would backfire." },
        { type: "p", text: "K. S. Cheng offers a historical analogy. One of the most powerful alliances of modern times, among the United States, Britain, and the Soviet Union in the Second World War, wasn't built on mutual empathy, trust, or respect. It was built on a shared goal, and it was strong enough to defeat the Third Reich. Clinically, with a paranoid patient or an angry teenager forced into treatment, a shared goal may be the core of the first alliance; empathy and respect can come later." },
        { type: "table", head: ["Borden's pillar", "What it means"], rows: [
          ["Agreement on goals", "The outcomes treatment is aiming for."],
          ["Agreement on tasks", "The steps you'll take to get there."],
          ["The bond", "Trust, respect, genuineness, regard, and empathy."]
        ] },
        { type: "p", text: "Two of Borden's three pillars of the alliance concern goals and planning, which is exactly what collaborative models emphasize. They don't replace the engagement skills covered so far; they add a focus on seeing the world first through the patient's eyes." },
        { type: "compare",
          a: { title: "Collaboration is", items: ["Understanding the goals the patient sees as important.", "Building a shared understanding of goals and methods.", "Helping patients discover what may be best for them."] },
          b: { title: "Collaboration is not", items: ["Doing whatever the patient asks.", "Abandoning clinical judgment.", "Imposing the clinician's, or the family's, agenda."] } }
      ]
    },
    {
      id: "goals", title: "Goal questions and the miracle question",
      lede: "Two solution-focused tools you can use in a first interview.",
      blocks: [
        { type: "exchange", title: "How not to begin", lines: [
          { who: "Clinician", t: "So what's the problem that brings you in?" },
          { who: "Teen", t: "I don't have a problem. My mom's the one who needs help." },
          { who: "Clinician", t: "Your mom says you're irritable, not sleeping, and you quit soccer. It sounds like depression that needs treatment.", tag: "parent-centered" },
          { who: "Teen", t: "I knew this was pointless. I'm leaving." }
        ], note: "Composed, following the structure of Cheng's example. The interview is parent-centered, and the teen never got to say what he sees as the problem." },
        { type: "p", text: "Solution-focused interviewing aims to hear, in the patient's own words, what they want. Don't assume; there are sometimes surprises. Cheng suggests two goal questions: what would make this a helpful visit, and what would you like to see different as a result of coming?" },
        { type: "exchange", title: "The same teen, goal-first", lines: [
          { who: "Teen", t: "I don't have a problem. My mom's the one who needs help." },
          { who: "Clinician", t: "Okay. What would make coming here today worth your time?", tag: "goal question" },
          { who: "Teen", t: "Tell her to get off my back." },
          { who: "Clinician", t: "Sounds tense at home. If things got better between the two of you, would that help?", tag: "complaint reframed as a goal" },
          { who: "Teen", t: "Yeah. A lot." },
          { who: "Clinician", t: "What else would you want to be different?", tag: "more goals" }
        ], note: "Composed. Letting the patient complain openly works, because a complaint can often be reframed as a goal. Chapter 22 calls a related idea \"rolling with\" the patient's concerns." },
        { type: "p", text: "Steve de Shazer's [[miracle question]] helps patients who are stuck in the past and convinced the future can't be different, which undermines hope and problem solving. Shea's preferred wording: \"If you woke up in the morning and a miracle had happened, so that your life was the way you wanted it to be, what are some of the things that would be different?\" Asking for \"some of the things\" opens the door to several goals; asking \"how would it be different\" can narrow to one." },
        { type: "p", text: "In Cheng's example, one answer produced six goals: waking up on time, procrastinating less, eating breakfast, fewer fights at the breakfast table, more confidence, and saying no at work. Now imagine that man was pressured into coming by his wife and had admitted to \"a little\" drinking and a \"tiny\" temper." },
        { type: "compare",
          a: { title: "Ending A", items: ["The clinician proposes working on his drinking and temper.", "He didn't choose those goals.", "A second session becomes unlikely."] },
          b: { title: "Ending B", items: ["The clinician notes drinking as a possible later focus, if he wants.", "Asks which two of his own miracle goals he'd like to start with.", "A second session is much more likely."] } },
        { type: "pearl", title: "The number one goal", text: "From the clinician's side, the top goal of an initial interview is making sure there is a second one. As the alliance grows, this man may discover for himself that heavy drinking makes it hard to wake on time and keep breakfast civil, and choose to work on it, far more motivated than if he'd been told. Those seeds are planted in the first interview." }
      ],
      practice: [{ kind: "practice", id: "c2p5", label: "Practice: goal setting" }, { kind: "sim", id: "sim-teen", label: "Interview: I don't have a problem" }, { kind: "quiz", id: "ch2", label: "Chapter 2 quiz" }]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The full dialogues, including the anxious graduate-school applicant, the complete OCD interview, the emergency department humor exchange, and Cheng's examples." },
    { title: "Video Module 2.1", text: "Conveying Empathy with Fact-Finding Questions: expanded didactics and an annotated interview exploring depressive symptoms." }
  ]
};
