/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 16: The Mental Status
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges and the documentation examples (Mr. L.) are composed for teaching; they are not transcripts from the book.
  Schema: see content/guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch16 = {
  chapter: "ch16",
  intro: "Part III opens with a skill every graduate is expected to have on day one: performing and writing a sound mental status. Shea's point is that how you document it mirrors how you interviewed. A vague, opinion-laden mental status usually comes from an interviewer who never quite stepped back to look. This guide follows one composed patient, Mr. L., through all six headings, contrasting a weak note with a strong one.",

  highYield: {
    mustKnow: [
      "Two ways of looking: the [[impact status]] is your moment-to-moment read of the patient (and of your effect on them); the [[mental status]] is the composite snapshot of the whole interview.",
      "Empathy is essential, but used alone it can fog observation. Clinicians who only look \"with\" the patient can miss soft signs of psychosis such as mild [[derailment]].",
      "Most of the mental status is invisible: the symptom review woven through the interview via [[Natural gate|natural gates]]. [[Formal cognitive examination|Formal cognitive testing]] is a separate, optional section scaled to age and suspicion.",
      "The HPI and mental status hold facts; the [[Narrative Summary and Clinical Formulation]] holds opinions. No diagnoses in the mental status, and no copying the HPI: refer to it.",
      "Six headings: appearance and behavior; speech and thought process; thought content; perception; mood and affect; sensorium, cognition, and insight. A checklist alone is never enough, clinically or medicolegally.",
      "\"Psychotic\" does not equal [[formal thought disorder]]. Process (how thoughts connect) goes under speech; delusions go under thought content. Grade severity.",
      "[[Tangential thought]] never returns; [[circumstantial thought]] does. [[Pressured speech]] is the loss of pauses, not just speed. [[Flight of ideas]] = tangents or derailment plus pressure.",
      "[[Obsession|Obsessions]] feel foreign and are resisted; [[rumination|ruminations]] don't. Ask every patient about obsessions and compulsions, since few volunteer them.",
      "Every mental status addresses dangerousness: suicidal and homicidal ideation, plan, intent, and any action taken; self-harm and, when psychosis is present, self-mutilation.",
      "[[Mood]] is reported; [[affect]] is observed. You can always describe affect. Write \"denied hallucinations,\" not \"no hallucinations.\"",
      "Always record [[level of consciousness]]. Fluctuation means rule out [[delirium]]. Attention tests ([[digit span]], [[vigilance test]], clock, cube), the [[MoCA]], and the [[CAM]] help find it."
    ],
    pitfalls: [
      "Subjective labels in place of description: \"disheveled,\" \"odd,\" \"inappropriate,\" \"stylish.\"",
      "Putting your conclusion in the mental status: \"The patient is psychotic and can't care for herself.\"",
      "Calling every psychotic patient \"thought disordered.\"",
      "\"Positive for loosening of associations\" with no grade of severity and no mention of rate or volume.",
      "\"Within normal limits\" everywhere, leaving the reader unsure whether you looked.",
      "Overriding the patient's words: writing \"mood depressed\" when the patient said \"I'm fine.\"",
      "\"Affect appropriate\" without saying what the affect was, or appropriate to what.",
      "\"Cognition grossly intact\" with no hint of which tests, if any, were done.",
      "Leaving out the suicide and violence lines because you asked but forgot to write them down."
    ],
    phrases: [
      { say: "Some people under this much stress find that certain thoughts get stuck, like worries about germs or whether they locked the door, and they have to do something to settle them. Has anything like that happened to you?", when: "A normalizing screen for [[obsession|obsessions]] and [[compulsion|compulsions]] for any patient." },
      { say: "Sometimes when people haven't slept for days, their mind plays tricks: hearing a voice when no one's there, or seeing something out of the corner of the eye. Has anything like that happened?", when: "Asking about perceptual disturbances without implying the patient is \"crazy.\"" },
      { say: "How would you describe your mood over the past couple of weeks?", when: "Getting the patient's own word for mood, which you then quote." },
      { say: "I'd like to do a few quick exercises that check concentration and memory. I ask a lot of people these, especially when sleep has been off. Some are easy and some are meant to be tricky, so don't worry if you miss a few.", when: "Introducing formal cognitive testing so it doesn't feel like a trap." },
      { say: "I'm going to say some numbers. When I stop, say them back to me in the same order.", when: "Starting a [[digit span]]. Speak at about one digit per second, in an even voice." }
    ]
  },

  sections: [
    {
      id: "seeing", title: "Seeing wisely: impact status and mental status",
      lede: "Why observation needs a little distance, and the two lenses Shea uses.",
      blocks: [
        { type: "p", text: "Shea opens with Osler's line about the value of experience lying in seeing wisely rather than seeing much. Observing accurately is harder than it sounds. We aren't cameras, and our best qualities as interviewers, empathy and sensitivity, can work against us here. A clinician who stays entirely inside the patient's point of view can start to see what they hope is there instead of what is. Shea describes watching a clinician empathize so fully with a subtly psychotic patient that the loosening of associations went unnoticed, and the patient was never offered antipsychotic treatment." },
        { type: "p", text: "The remedy isn't less empathy. It is the ability to move, when needed, to a more objective vantage point: looking at the patient as well as with them. Shea calls the result an objective compassion." },
        { type: "compare",
          a: { title: "Impact status", items: [
            "Your quick, subjective read at any single moment",
            "Focuses on the patient's immediate affect and behavior",
            "Includes how your own behavior is landing",
            "Used in real time to repair or explore"
          ] },
          b: { title: "Mental status", items: [
            "A composite of all observations across the interview",
            "An attempt at an objective snapshot of today's presentation",
            "Includes recent symptoms the patient reports",
            "Documented under six headings in the record"
          ] }
        },
        { type: "p", text: "A helpful image: the history is a long video of the patient's illness up to today; the mental status is a still photograph taken during your meeting." },
        { type: "p", text: "The impact status draws on everything in Chapter 8 on nonverbal behavior. Note the patient's baseline (posture, eye contact, voice) early, so that shifts stand out. When [[blending]] drops, ask yourself whether something you did caused it. Catching it early lets you repair the moment before real disengagement. At other times the shift is worth exploring, and it may reveal a projection or a [[parataxic distortion]]." },
        { type: "case", title: "A grin that said more than the words", text: "Summarized from the chapter. In therapy, a graduate student talked about an upcoming meeting with her supervisor, and as she did she broke into a childlike grin and her voice turned helpless. Shea asked what she had been feeling and gently described what he saw. That observation opened a productive exploration of her habit of not taking herself seriously, and she later rehearsed the meeting while holding an adult posture and tone." },
        { type: "pearl", title: "Watch for the change, not just the state", text: "A single sad face tells you little. A face that goes blank every time a particular person is mentioned tells you a lot. Baseline first, then shifts." }
      ]
    },
    {
      id: "what", title: "What the mental status is, and how it hides in the interview",
      lede: "Six headings, two broad parts, and why the patient shouldn't notice it happening.",
      blocks: [
        { type: "p", text: "The mental status tries to describe objectively the patient's behaviors, thoughts, feelings, and perceptions during the interview. It is weighted toward what you saw today, but recent symptoms the patient reports (last night's voices, this week's suicidal thoughts) are recorded there too. It is usually its own section of the electronic health record (EHR)." },
        { type: "steps", items: [
          "Appearance and behavior",
          "Speech characteristics and thought process",
          "Thought content",
          "Perception",
          "Mood and affect",
          "Sensorium, cognitive functioning, and insight"
        ] },
        { type: "p", text: "Clinicians vary a little in their headings, and some write everything as one paragraph, which Shea finds hard to follow. Checklists are common and can flag pathology at a glance, but a checklist with no description is a weak clinical picture. It also invites a lawyer to argue that the clinician didn't take the time to look." },
        { type: "table", head: ["", "Part 1: woven-in review and observation", "Part 2: formal cognitive testing"], rows: [
          ["What it is", "Sensitive questions exploring mood, anxiety, psychosis, suicide, and so on, plus everything you notice while asking them", "Orientation, attention, memory, and intellectual tasks: digit spans, object recall, drawings, standardized batteries"],
          ["Where it happens", "Throughout the interview, guided by [[facilics]] and [[Natural gate|natural gates]]", "In a distinct, recognizable section"],
          ["Does the patient notice?", "Ideally not. It feels like a conversation.", "Yes, so introduce it with care"],
          ["When", "Every initial assessment", "Optional; expanded with age and suspicion of [[delirium]] or dementia"]
        ] },
        { type: "exchange", title: "A symptom check that doesn't feel like one", lines: [
          { who: "Patient", t: "Since the layoff I just lie there at night going over everything I should have done differently." },
          { who: "Clinician", t: "That sounds exhausting. When you're lying there, how long does it usually take you to fall asleep?", tag: "gate into sleep" },
          { who: "Patient", t: "Two hours, maybe. Then I'm up again at four." },
          { who: "Clinician", t: "When the thoughts go round like that, do they feel like ordinary worries, or more like something forcing its way in that you're trying to push out?", tag: "rumination vs obsession" }
        ], note: "Composed. The patient's own words open the gate, and each question gathers mental status data (sleep, thought content) without announcing a checklist." }
      ],
      practice: [{ kind: "quiz", id: "ch16", label: "Chapter 16 quiz" }]
    },
    {
      id: "documenting", title: "Documenting: facts here, opinions there",
      lede: "The mental status is distinct from the HPI and the formulation, and writing it well trains you to see well.",
      blocks: [
        { type: "p", text: "Shea teaches the mental status largely through how it's written, because the note reflects the interview. A clinician who can't settle into an observing stance tends to produce a mental status with gaps, premature conclusions, or chunks of history explaining the pathology. A disorganized note usually means a disorganized interview." },
        { type: "table", head: ["Section", "What goes there", "Sources"], rows: [
          ["History of the Present Illness (HPI)", "The story up to today: symptoms, behaviors, concerns", "Mostly the patient, plus family, prior clinicians, and records"],
          ["Mental status", "What the patient showed and said during this interview, plus recently reported symptoms", "The patient only, like a blood pressure taken today"],
          ["[[Narrative Summary and Clinical Formulation]]", "Your synthesis: DSM-5 impressions, ideas about cause, treatment plans", "Everything, plus your knowledge and judgment"]
        ] },
        { type: "p", text: "A diagnosis is an interpretation of the facts, so it never appears in the HPI or mental status. Neither does \"clearly very psychotic.\" Instead, quote the words that show how firmly the patient holds the belief, and let the reader see it." },
        { type: "p", text: "Avoid duplicating material. If the HPI already describes a delusional system in detail, the mental status can refer to it (\"see HPI\") and focus on what the patient believes today, including beliefs they now disown." },
        { type: "exchange", title: "Thought content that refers instead of repeating", lines: [
          { who: "Note", t: "History of a detailed belief that his neighbors are tapping his phone (see HPI). Today he states the tapping continues and that the clinic's phone is \"probably part of it.\" Asked whether stress might be affecting how he sees things, he said, \"I know what I heard on that line.\" He no longer believes his car is being tracked, which he reported last month." }
        ], note: "Composed. Current content, the patient's own words, and a change over time, with no repeated history and no editorializing." },
        { type: "pearl", title: "Why precision matters", text: "Mental status terms have specific meanings. Sloppy usage misleads the next clinician, who may then see what your note primed them to see. The mental status is the one place a colleague can compare today's patient against last month's, so it has to be trustworthy." }
      ]
    },
    {
      id: "appearance", title: "1. Appearance and behavior",
      lede: "Help the reader see the person walk in.",
      blocks: [
        { type: "list", items: [
          "Clothing and self-care, described rather than judged (\"wearing a wool coat buttoned to the neck in August\" rather than \"inappropriately dressed\")",
          "Striking features: tattoos, scars, deformities; looking older or younger than stated age",
          "Eye contact",
          "Mannerisms, tics, and any apparent response to hallucinations (tracking with the eyes, head shaking as if shutting out a voice)",
          "Motor activity: restless, agitated, subdued, tremulous, rigid, pacing, withdrawn",
          "Displacement activities: picking at a cup, twisting a ring, chain smoking",
          "Attitude toward the interviewer, often forgotten: cooperative, guarded, hostile, ingratiating"
        ] },
        { type: "compare",
          a: { title: "Weak (Mr. L.)", items: [
            "Patient appears disheveled and somewhat bizarre.",
            "Eye contact abnormal.",
            "Restless. Dressed inappropriately."
          ] },
          b: { title: "Strong (Mr. L.)", items: [
            "58-year-old man in a suit jacket over flannel pajama pants and untied dress shoes; shirt buttoned unevenly; unshaven for several days; faint body odor, no smell of alcohol.",
            "Clutches a stack of utility envelopes and declines to set them down to shake hands.",
            "Holds intense, prolonged eye contact. Bounces his knee constantly; stood and paced three times.",
            "No evidence of responding to internal stimuli. Cooperative but frequently impatient with questions."
          ] }
        },
        { type: "p", text: "The strong version is composed, but it shows what Shea is after: specifics instead of generalities, plus [[pertinent negative|pertinent negatives]] (no apparent hallucinating, which might point toward delirium; no smell of alcohol). A good mental status lets the reader glimpse your developing differential. Each heading adds pieces that make some diagnoses more likely and others less so. Here, the agitation and self-neglect begin to raise mania." }
      ]
    },
    {
      id: "process", title: "2. Speech and thought process",
      lede: "How the patient talks and how the thoughts hang together, and the trouble with \"thought disorder.\"",
      blocks: [
        { type: "p", text: "Describe rate, volume, tone, and the structure of speech. Before choosing terms, untangle one that causes endless confusion." },
        { type: "compare",
          a: { title: "Formal thought disorder", items: [
            "A problem with how thoughts are formed and linked",
            "Derailment, severe tangentiality, disjointed or illogical thought",
            "Heard in the patient's speech",
            "Documented here, under thought process"
          ] },
          b: { title: "\"Content thought disorder\"", items: [
            "A problem with what the patient believes",
            "In practice, a delusion",
            "Nothing to do with how speech is formed",
            "Documented under thought content"
          ] }
        },
        { type: "p", text: "Many clinicians treat \"formal thought disorder\" as a synonym for \"psychotic.\" It isn't. A patient can be grossly delusional, hallucinating, and agitated, yet form thoughts perfectly well. Because the umbrella terms are so muddled, Shea advises not using them at all and describing the process directly with the terms below." },
        { type: "table", head: ["Term", "What you hear", "Often seen in"], rows: [
          ["Rate", "Speed of speech, slowed or increased", "Slowed: depression, somnolent delirium. Fast: mania, agitated psychosis, stimulant euphoria"],
          ["[[Pressured speech]]", "No natural pauses; hard to interrupt. Can occur at a normal rate. Ranges from mild to an unstoppable torrent", "Mania, hypomania, agitated psychosis, extreme anxiety or anger, histrionic style"],
          ["[[Tangential thought]]", "Each thought spins off the last with some link, drifting further and never returning", "Many conditions; grade the severity"],
          ["[[Circumstantial thought]]", "Same detours, but eventually back to the point", "Anxiety, obsessional styles, some cognitive disorders"],
          ["[[Derailment]] (loosening of associations)", "Links between thoughts are lost to the listener. At its extreme, [[word salad]]", "Mild: severe anxiety or schizotypal style. Moderate to severe: psychosis, unless feigned"],
          ["[[Flight of ideas]]", "Tangents or derailment plus marked pressure, usually fast; often triggered by distractions or puns", "Mania, other severely agitated or psychotic states"],
          ["[[Thought blocking]]", "Stops mid-sentence and never returns, as if interrupted. Not the same as a long pause before answering", "Often psychosis, e.g. an intruding voice"],
          ["[[Illogical thought]]", "Conclusions that don't follow from the premises", "Severe forms can resemble a formal thought disorder"]
        ] },
        { type: "exchange", title: "Hearing the difference (all composed)", lines: [
          { who: "Tangential", t: "Work's been rough. The new manager reorganized everything, like my aunt used to do with her kitchen every spring. She had a great garden, tomatoes the size of your fist. You can't get tomatoes like that in stores anymore." },
          { who: "Circumstantial", t: "Work's been rough. The new manager reorganized everything, like my aunt used to with her kitchen. Anyway, the point is I can't find anything at work, and that's why I'm so behind." },
          { who: "Derailment", t: "Work's been rough, the manager shuffles like a deck, a spring kitchen, tomatoes in the fist and the stores sell the silence now." },
          { who: "Illogical", t: "My manager moved my desk near the window, so she must be planning to promote me, because windows are for important people." }
        ], note: "Notice that the illogical example is a reasoning error, not a fixed false belief. A delusion can be held with perfectly logical reasoning built around it." },
        { type: "compare",
          a: { title: "Weak (Mr. L.)", items: [
            "Positive for loosening of associations and tangentiality.",
            "Otherwise within normal limits."
          ] },
          b: { title: "Strong (Mr. L.)", items: [
            "Speech rapid and moderately pressured, difficult to interrupt; volume mildly increased, with occasional loud bursts.",
            "Moderately tangential, with rare brief episodes of mild derailment.",
            "No thought blocking or illogical thought."
          ] }
        },
        { type: "p", text: "The weak note gives no severity. Is this a hint of loosening or near word salad? It also omits rate and volume, which are often abnormal in mania and agitated psychosis. The strong note gives the next clinician a baseline to measure improvement or decline against, and it documents the grounds for decisions such as hospitalization if they are ever questioned." }
      ]
    },
    {
      id: "content", title: "3. Thought content",
      lede: "Ruminations, obsessions, compulsions, delusions, and dangerousness.",
      blocks: [
        { type: "p", text: "Five things belong here: [[rumination|ruminations]], [[obsession|obsessions]], [[compulsion|compulsions]], delusions, and suicidal or homicidal ideation." },
        { type: "compare",
          a: { title: "Rumination", items: [
            "Absorbing, repetitive worry or guilt",
            "Feels like ordinary (if painful) thinking",
            "The patient is caught up in it and talks about it rather than fighting it",
            "Common in depression and anxiety"
          ] },
          b: { title: "Obsession", items: [
            "Intrusive, unwanted thought, image, or impulse",
            "Feels odd, alien, painful; \"I can't shake it\"",
            "The patient tries to stop it and may fear being bad for having it",
            "Often drives a compulsion"
          ] }
        },
        { type: "p", text: "Common obsessional themes include contamination; violent impulses; sexual-orientation fears; right and wrong; and fears of having harmed someone, such as leaving the stove on or hitting a pedestrian when the car only went over a bump." },
        { type: "p", text: "Compulsions relieve the anxiety, briefly. They can be behaviors (washing, checking, re-driving the route, cleaning the same counter) or mental acts (counting, repeating a phrase or prayer, replaying a conversation to prove nothing bad was said). A [[reassurance compulsion]] pulls in other people: asking a partner over and over whether one looks all right. The patient may repeat the ritual until it \"feels right,\" sometimes hundreds of times and for hours; interrupted, they may need to start over." },
        { type: "pearl", title: "Ask everyone", text: "OCD is common, painful, and treatable, and patients are often too embarrassed to mention it, sometimes for years of therapy. Screening for obsessions and compulsions belongs in every initial assessment." },
        { type: "p", text: "Delusions are firmly held beliefs that are false or not shared by the patient's culture (see Chapter 11). Describe them concretely and in the patient's words." },
        { type: "p", text: "Dangerousness is covered in depth in Chapters 17 and 18, but every mental status addresses it:" },
        { type: "list", items: [
          "Suicidal ideation: presence, any plan, immediate intent, and any action already taken on the plan",
          "Violent or homicidal ideation: the same elements",
          "Non-lethal self-harm, such as cutting",
          "Self-mutilation, specifically asked about when psychosis is present"
        ] },
        { type: "compare",
          a: { title: "Weak (Mr. L.)", items: [
            "Patient is manic and psychotic.",
            "Has some paranoid ideas."
          ] },
          b: { title: "Strong (Mr. L.)", items: [
            "Believes the water utility is sending him coded instructions in his billing statements: \"The account numbers change. That's the message.\" Says he must keep the envelopes with him or \"the instructions are lost.\"",
            "Has not slept in his bed for four nights so he can \"stay on watch.\"",
            "Denies suicidal ideation, plan, or intent. Denies violent or homicidal ideation. Denies thoughts of self-harm or self-mutilation.",
            "No ruminations, obsessions, or compulsions elicited."
          ] }
        },
        { type: "p", text: "The weak note opens with a diagnosis, which belongs in the formulation, and its description of the delusion is too thin to be useful. Worst, it is silent on lethality. Even if the clinician asked, an unrecorded answer looks like an unasked question if something goes wrong." }
      ]
    },
    {
      id: "perception", title: "4. Perception",
      lede: "Hallucinations and illusions, and how to word their absence.",
      blocks: [
        { type: "p", text: "Record the presence or absence of hallucinations and illusions in any sensory channel: auditory, visual, tactile, olfactory, gustatory." },
        { type: "table", head: ["", "Hallucination", "Illusion"], rows: [
          ["Trigger", "None; arises from nothing in the environment", "Always a real sensory input, distorted"],
          ["Visual example", "Seeing a figure standing in an empty doorway", "A coat on a hook becoming a crouching figure"],
          ["Auditory example", "A voice speaking in a silent room", "The hum of a fan turning into whispered words"]
        ] },
        { type: "p", text: "Keep hallucinations and delusions distinct, even though one can lead to the other. A woman who hears a voice calling her worthless, but believes it is her mind misfiring, is hallucinating without being delusional. If she comes to believe a real being is speaking and means to harm her, she now has a delusion as well. See [[Illusion vs hallucination]] from Chapter 11." },
        { type: "p", text: "Wording matters. \"No hallucinations\" claims a fact you can't know. Patients withhold voices for many reasons: fear of being called crazy, fear of involuntary admission, or because the voices told them not to tell. \"Denied\" records exactly what happened." },
        { type: "compare",
          a: { title: "Weak", items: ["No abnormal perceptions."] },
          b: { title: "Strong (Mr. L.)", items: ["Denied auditory, visual, tactile, and olfactory hallucinations and illusions. Not observed responding to internal stimuli."] }
        },
        { type: "pearl", title: "About \"within normal limits\"", text: "Global phrases are acceptable when time is truly short. Otherwise, name what you ruled out. It tells the reader you actually looked, which a blanket \"WNL\" cannot do." }
      ]
    },
    {
      id: "mood", title: "5. Mood and affect",
      lede: "One is a symptom the patient reports; the other is a sign you observe.",
      blocks: [
        { type: "compare",
          a: { title: "Mood", items: [
            "Reported by the patient",
            "How they have been feeling recently, in general",
            "Relatively persistent",
            "A symptom; if they won't say, you can't record it"
          ] },
          b: { title: "Affect", items: [
            "Observed by you, in the room",
            "Face, voice, posture, tears",
            "Often transient",
            "A sign; you can always describe it"
          ] }
        },
        { type: "p", text: "If a patient declines to describe their mood, the mental status simply says so. Your impression of their mood goes in the formulation. When report and observation clash, record both and let the discrepancy speak. Writing \"mood depressed\" over the patient's \"I'm fine\" erases the denial that the next reader needs to see." },
        { type: "exchange", title: "Discordance, documented", lines: [
          { who: "Note", t: "Asked about her mood, she said, \"Honestly, I'm fine.\" Affect sad and constricted for most of the interview, with two brief episodes of tearfulness when discussing her son." }
        ], note: "Composed. In the formulation the clinician can then note that the reported mood conflicts with the HPI and observed affect, and consider what that suggests." },
        { type: "table", head: ["Range terms", "Quality terms"], rows: [
          ["Broad / full range: normal variation in expression", "Buoyant, angry, suspicious, frightened"],
          ["[[Restricted affect|Restricted]]: some decrease in animation", "Flirtatious, silly, threatening, edgy"],
          ["[[Blunted affect|Blunted]]: a striking decrease", "[[Labile affect|Labile]]: rapid shifts"],
          ["[[Flat affect|Flat]]: essentially no spontaneous expression", ""]
        ] },
        { type: "p", text: "\"Affect appropriate\" on its own is ambiguous: appropriate to the content of a delusion, or appropriate for someone without one? State the affect first, then comment on whether it fits." },
        { type: "compare",
          a: { title: "Weak (Mr. L.)", items: ["Mood good. Affect appropriate, irritable at times."] },
          b: { title: "Strong (Mr. L.)", items: [
            "Describes his mood as \"never better, sharp as a tack.\"",
            "Affect expansive and intense, turning irritable whenever questions slowed him down; briefly suspicious and guarded when asked to put the envelopes on the table.",
            "Not tearful; no lability beyond these shifts."
          ] }
        }
      ]
    },
    {
      id: "cognition", title: "6. Sensorium, cognition, and insight",
      lede: "Consciousness, orientation, attention, memory, insight, judgment, and motivation, and how to test them kindly.",
      blocks: [
        { type: "p", text: "Start with [[level of consciousness]]: \"alert, with a stable level of consciousness,\" or \"fluctuated between drowsiness and agitation.\" A fluctuating sensorium means you must determine whether this is [[delirium]], which can cause permanent brain damage or death." },
        { type: "compare",
          a: { title: "Informal cognitive exam", items: [
            "Throughout the interview, non-intrusively",
            "You \"eyeball\" orientation, concentration, and memory from how the patient handles ordinary questions",
            "Every patient"
          ] },
          b: { title: "Formal cognitive exam", items: [
            "Brief (orientation, digit spans, recall) to 20+ minutes",
            "Specific tasks or a standardized battery",
            "Scaled to age and to suspected delirium or dementia"
          ] }
        },
        { type: "table", head: ["Tool", "What it is", "Notes"], rows: [
          ["[[MMSE]] (Folstein)", "30-point battery: orientation, registration, attention and calculation, recall, language, following commands", "In use since the 1970s and well validated; 10 to 20 minutes; the form requires a paid license"],
          ["[[MoCA]]", "One-page screening battery, free, in many languages", "Shea recommends learning it and finds it more efficient for delirium than the MMSE"],
          ["[[CAM]]", "Confusion Assessment Method", "Built specifically to detect delirium (see Chapter 11)"]
        ] },
        { type: "p", text: "Shea relies on four bedside tasks that all demand sustained attention, exactly what delirium erodes. Each has a close variant in the MoCA; if you're giving the MoCA, follow its standardized instructions." },
        { type: "table", head: ["Test", "How", "Why it helps"], rows: [
          ["[[Digit span]]", "Say digits about one per second; patient repeats forward, then a new string backward", "Attention and working memory"],
          ["[[Vigilance test]]", "Read a string of random letters; patient taps each time a target letter is heard", "Sustained attention; misses and false taps are telling"],
          ["Clock drawing", "Draw a clock face with numbers and hands set to a given time", "Planning, visuospatial skill, attention"],
          ["Cube copying", "Copy a drawing of a three-dimensional cube", "Visuospatial construction"]
        ] },
        { type: "p", text: "Also test orientation when delirium is suspected, and look at handwriting. Dysgraphia is common in delirium." },
        { type: "exchange", title: "Introducing testing without a trap", lines: [
          { who: "Clinician", t: "You've been through a lot of sleepless nights. I'd like to try a few quick exercises that look at concentration and memory. I do these with many people. Some are deliberately hard, so don't worry about missing some.", tag: "normalize" },
          { who: "Patient", t: "You think I'm losing it?" },
          { who: "Clinician", t: "No. Lack of sleep can affect concentration, and I want to know how yours is holding up, so I'm not guessing.", tag: "transparent rationale" },
          { who: "Patient", t: "Fine. Go ahead." }
        ], note: "Composed. Shea's video module on formal testing stresses person-centered nuances like these: framing, reassurance, and pacing, so the patient doesn't feel tricked or diminished." },
        { type: "compare",
          a: { title: "Weak (Mr. L.)", items: ["Alert and oriented. Memory fine. Cognition grossly intact."] },
          b: { title: "Strong (Mr. L.)", items: [
            "Alert with a stable level of consciousness; at times hyper-alert, turning toward every hallway noise.",
            "Oriented to person, place, date, and situation.",
            "Digit span seven forward, four backward. Recalled two of three words at five minutes, the third with a category cue. No other formal testing performed.",
            "Insight poor: \"There's nothing wrong with me except I'm tired.\" Judgment poor. Declines admission and medication."
          ] }
        },
        { type: "p", text: "The strong note catches what the weak one misses: a hyper-alert quality. That flags possible delirium, but intact orientation, a solid digit span, and good recall make delirium less likely, steering the reader toward mania, psychosis, substances, or acute stress. The reader also knows exactly what was and wasn't tested, and the patient's insight, judgment, and motivation are on record." }
      ],
      practice: [{ kind: "quiz", id: "ch16", label: "Chapter 16 quiz" }]
    },
    {
      id: "together", title: "Putting it together",
      lede: "Read the weak notes in a row, then the strong ones.",
      blocks: [
        { type: "p", text: "Shea suggests a simple exercise: read all the weak excerpts in sequence, then all the strong ones. The first set leaves a bland, foggy outline. The second brings a specific person into the room. That is the goal: giving a colleague a reliable image of how the patient actually presented." },
        { type: "exchange", title: "Mr. L., the full mental status (composed)", lines: [
          { who: "Appearance", t: "58-year-old man in a suit jacket over flannel pajama pants, untied dress shoes, shirt misbuttoned, unshaven several days; faint body odor, no smell of alcohol. Clutches a stack of utility envelopes. Intense, prolonged eye contact; constant knee bouncing; paced three times. No evidence of responding to internal stimuli. Cooperative but impatient." },
          { who: "Speech/process", t: "Rapid, moderately pressured, mildly loud with occasional bursts. Moderately tangential with rare brief mild derailment. No thought blocking or illogical thought." },
          { who: "Content", t: "Believes the water utility sends him coded instructions through his billing statements (\"The account numbers change. That's the message.\"); keeps the envelopes with him so the instructions aren't lost; has stayed up four nights \"on watch.\" Denies suicidal ideation, plan, or intent; denies violent or homicidal ideation; denies self-harm or self-mutilation. No obsessions or compulsions elicited." },
          { who: "Perception", t: "Denied auditory, visual, tactile, and olfactory hallucinations and illusions." },
          { who: "Mood/affect", t: "Mood \"never better, sharp as a tack.\" Affect expansive and intense, irritable when slowed down, briefly suspicious about the envelopes. Not tearful." },
          { who: "Cognition", t: "Alert, stable consciousness, at times hyper-alert to noises. Oriented ×4. Digit span 7 forward, 4 backward. Recall 2/3 at five minutes, 3/3 with cue. No other formal testing. Insight and judgment poor; declines admission and medication." }
        ], note: "No diagnosis appears anywhere. The reader can nonetheless see the differential forming, and the formulation is where you say what you think it means." },
        { type: "p", text: "In real practice the documented mental status is often shorter. Brevity is fine; vagueness isn't. The same principles keep a brief note accurate. Appendix III of the book covers documentation of the whole initial assessment, with quality-assurance guidelines and a sample write-up." },
        { type: "pearl", title: "The payoff", text: "Done well over time, the impact status and mental status sharpen the mind's eye. A slight welling of the eyes opens a door to pain; a faint loosening of associations hints at psychosis nearby; a glance away during a suicide inquiry warns that intent may be hidden. Without these skills you risk being swallowed by the patient's world; with them, you learn from it." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "Shea's full Clinician A versus Clinician B excerpts for each heading, his own examples of tangential speech and derailment, and his discussion of the MMSE, MoCA, and CAM. The chapter also points to the delirium tests described earlier in Chapter 11." },
    { title: "Video Module 16.1", text: "Principles and Components of the Mental Status: how symptom review, ongoing observation, and cognitive functioning map onto the six EHR headings, with demonstrations of using natural gates to weave the review of symptoms through an interview." },
    { title: "Video Module 16.2", text: "The Formal Cognitive Mental Status Examination: annotated demonstrations of digit spans, the vigilance test, clock drawing, and cube drawing, with person-centered tips for testing sensitively." },
    { title: "Appendix III", text: "Documenting the initial assessment: structure of the record, quality-assurance guidelines, and a sample assessment." },
    { title: "Further reading Shea recommends", text: "Robinson's practical guide to the mental status; Trzepacz and Baker's detailed text; Strub and Black, The Mental Status Examination in Neurology, for uncovering neurologic disease presenting psychiatrically; and Hodges for advanced cognitive assessment and work with older adults." }
  ]
};
