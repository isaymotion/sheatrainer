/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 5: Validity Techniques
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch5 = {
  chapter: "ch5",
  intro: "Chapters 3 and 4 taught how to gather a database; this one asks whether the database is true. Shea's working definition of validity is a single question, 'Are we hearing the truth?', and his answer is that most distortion is not lying. It comes from defenses, from the goo of memory, from words that mean different things to different people, from family norms that hide abuse, and from fear. The chapter organizes the remedies into four clusters: improving recall, avoiding miscommunication, raising a taboo topic, and exploring it once raised. These techniques are the engine of the suicide and violence chapters later in the book, so learn them here by name and by example; the Chapter 17 and 18 guides assume you have.",

  highYield: {
    mustKnow: [
      "[[Validity / reliability|Validity]] in the clinic is one question: are we hearing the truth? Manipulative deceit is relatively rare. Defenses (rationalization, denial, repression), fallible memory, miscommunication, limited self-knowledge, stigma, and real fears about consequences do most of the distorting. Sometimes the obstacle is the clinician's own style.",
      "Uncovering a secret safely is also an intervention: the patient learns that a taboo can be spoken to someone who neither over- nor under-reacts, which brings them back for a second visit and may, months later, send them to a phone rather than a gun.",
      "Cluster 1, recall: [[Anchor question|anchor questions]] by time (Carlat: 'before or after you started high school?') and by place (the CBT variant that locks a patient into one specific episode); [[Tagging question|tagging questions]] offer a list for a forgotten non-sensitive fact; [[Exaggeration]] (Othmer) uses humor to deflate inordinate shame.",
      "Cluster 2, miscommunication: [[Defining technical terms|define technical terms]] even when they sound ordinary (depression, addiction); [[Clarifying norms|clarify norms]] when a family's culture made abuse or heavy drinking feel normal, so a convincing 'no' is not minimization but ignorance.",
      "Cluster 3, raising the topic: [[Normalization]] ('Sometimes people who…'); [[Shame attenuation]] type 1 through the patient's pain or stress, type 2 through the patient's own rationalizations; [[Induction to bragging]] (Othmer), a direct compliment preceding the question.",
      "Cluster 4, exploring it: [[Behavioral incident]] (Pascal) asks for facts or sequence, never opinions; [[Gentle assumption]] presumes the behavior ('What other…'); [[Denial of the specific]] names list items one at a time after an unconvincing no; the [[Catch-all question]] sweeps for outliers; [[Symptom amplification]] offers high numbers so minimization still reveals the problem.",
      "The [[Verbal video]]: serial behavioral incidents that let you see an attempt or an assault unfold; rewind every [[Nixon gap]]; ask the perpetrator's parting words.",
      "Gentle assumptions are leading questions. Do not use them with people eager to please, easily intimidated, or of limited intellect, and never with children when exploring abuse.",
      "Never fire a [[Cannon question]]. One item per question, a pause, and a chance to watch the face.",
      "Symptom amplification must start high and go higher, but not absurdly high; a number that reveals ignorance of the topic costs credibility.",
      "Techniques combine into [[Validity doublet|doublets and triplets]]. Nearly every technique is also a fact-finding behavioral incident; tag it by its more specific name.",
      "For suspected malingering, Resnick's [[Endorsement of bogus symptoms|endorsement of bogus symptoms]], embedded among typical questions. For gauging motivation or delusional conviction, Havens's [[Soundings|soundings]]: a graded series of statements of inquiry, gently voiced."
    ],
    pitfalls: [
      "Accepting the first convincing 'no' to 'Were you ever abused?' from a patient whose family made abuse the norm.",
      "Taking 'I've always been depressed' at face value without defining what you mean by depression.",
      "Asking patient-opinion questions ('Is he affectionate?') when you need facts ('When did he last hug you?').",
      "Siding with the patient while using shame attenuation; the technique suspends judgment, it does not endorse.",
      "Using a gentle assumption on a child, a dependent patient, or anyone who will say what you seem to want.",
      "'Shooting, overdosing, hanging, jumping?' in one breath.",
      "'How many peyote buttons, 100, 200?' An amplification so high the patient laughs at you.",
      "Running a verbal video in every region; it is slow, so spend it where validity matters most.",
      "Sounding challenging rather than gentle when taking soundings."
    ],
    phrases: [
      { say: "Did he ever hit you before you moved here? How about back in graduate school?", when: "Serial time-anchored questions walking a patient back through a history she has misted over." },
      { say: "Picture the very worst one. Where were you? What road?", when: "A place-anchored question to lock the patient into one specific panic attack or episode." },
      { say: "Just to clarify, I don't mean the ordinary sadness we all feel. I mean so down that it affected your sleep, appetite, concentration, or work. When did you first feel something that severe?", when: "Defining a technical term that sounds ordinary." },
      { say: "Problems like that can happen in different ways. Growing up, did he ever touch you in your private areas, or ask you to watch him undress, or watch you shower?", when: "Clarifying norms after a convincing 'no' to abuse." },
      { say: "When you're out with your buddies, do you have trouble holding your liquor, or are you pretty good at holding it?", when: "Type 2 shame attenuation through the patient's own pride, then nail down numbers." },
      { say: "What other street drugs have you tried? … How about coke? … Speed, even once? … Downers like Valium?", when: "Gentle assumption, then denials of the specific one at a time; probe the distant past as well as the recent." },
      { say: "Go back for a moment to right after he hit you. What exactly happened next? … What was the last thing he said?", when: "Rewinding a Nixon gap, and the parting-words question, in a verbal video of domestic violence." },
      { say: "You dream of this? … You might want to do it? … You feel you can? … Within a month or two?", when: "Soundings, each followed by a pause, to measure the depth of an intention." }
    ]
  },

  sections: [
    {
      id: "challenge",
      title: "Are we hearing the truth?",
      lede: "Three explorers in the same Victorian room, each with a candle, each missing something different, because of how they search.",
      blocks: [
        { type: "p", text: "Shea returns to the book's opening metaphor. A weak candle limits what can be seen, but so does the explorer: one holds his hands at shoulder height and misses what sits on the table, another ignores her ears and never hears the clock, a third fears dark corners and never finds the chess set. The style of exploration alters the database. Validity, then, depends not only on the patient's defenses but on the clinician's own habits, and sometimes the clinician is the obstacle." },
        { type: "p", text: "Statisticians speak of content, empirical, and construct validity. For the clinician in a hectic clinic the question is simpler: are we hearing the truth? Shea has found manipulative deceit relatively rare. What stands between us and the truth is a crowd of other things: unconscious defenses (rationalization, intellectualization, denial, repression), the vagaries of memory, unrecognized miscommunication, the limits of anyone's self-knowledge, fear of stigma, and realistic worry about what will happen to the patient or their family if they tell. And we work in the dark. We never know for certain what is in another mind; even direct speech is a second-generation copy of experience, with dropouts and distortions." },
        { type: "list", items: [
          "We need the real problem to help: you cannot remove a gun from a house you do not know is there.",
          "Sharing a secret safely is a new interpersonal experience. The patient discovers that incest, domestic violence, or suicide can be spoken of to someone who shows compassion and neither over- nor under-reacts. That discovery decides the hardest question they face on leaving: should I come back? It can also, months later on a desperate night, send them to a phone instead of a gun.",
          "Some patients endanger others: the intoxicated patient at risk of domestic violence, the patient with command hallucinations or paranoid delusions. Raising psychosis without disengaging is a validity skill, and it can prevent tragedies from the unpublicized to the infamous.",
          "Some patients' intentions run against their own interest: the patient with schizophrenia who hides persistent voices to return to work too soon, or the disability seeker who invents them. Watch for hidden agendas: documentation for court, admission to dodge a court date, addictive drugs."
        ] },
        { type: "p", text: "The techniques come from decades of innovators across counseling, psychology, psychiatry, nursing, and social work. Some are built specifically to reduce deception and can help even an antisocial patient share more of the truth about domestic violence or trouble with the law. They fall into four clusters: improving generalized recall, avoiding miscommunication, raising a sensitive or taboo topic, and exploring it once raised." }
      ],
      practice: [{ kind: "quiz", id: "ch5", label: "Quiz: Chapter 5" }]
    },

    {
      id: "recall",
      title: "Cluster one: improving generalized recall",
      lede: "Neurons are not microchips. They are goo, and memory drops out and rewrites itself.",
      blocks: [
        { type: "p", text: "Oscar Wilde blamed words for blurring reality; Shea adds neurons. From thirty-five years of intermittent journals he offers two personal lessons. A week of pub adventures in London with a fellow medical student, described over pages, has vanished entirely: no face, no conversation, no laugh. And a relative who yelled at his five-year-old son was remembered for years as having sworn at the boy; the journal, written in quotation marks that same day as ammunition, shows he never did. The false fact had become the most upsetting part of the memory, within hours. Dropout and distortion are normal, and they are happening when patients report 'the facts' more often than we think." },
        { type: "p", text: "[[Anchor question|Anchor questions]] stir the memory banks by kindling nearby circuits. Carlat coined the term, drawing on Sudman and Bradburn's finding that people date distant events by other memorable events: personal (graduation, an accident, buying a house, a move, a new job), cultural (an assassination, a moon landing, a famous trial, 9/11), or calendar markers (holidays, the turn of a century). Not 'When did you first start drinking?' but 'Did you begin drinking before or after you started high school?'" },
        { type: "exchange", title: "Walking back through time", lines: [
          { who: "Clinician", t: "If you can, give me a better idea of when he actually started to become violent." },
          { who: "Patient", t: "About a year ago. Yeah, that's about right." },
          { who: "Clinician", t: "You told me you moved here about two years ago. Had he ever hit or slapped you before the move?", tag: "Time-anchored" },
          { who: "Patient", t: "(pause) Yes. He slapped me once, badly, back in our old apartment. We called it the Nest. I'd forgotten that." },
          { who: "Clinician", t: "How about before that, back when you were in graduate school? On a date, or if he stayed over?", tag: "Time-anchored" },
          { who: "Patient", t: "(looks up, surprised) He did. After a party. He said I'd been flirting. I wasn't. He slapped me across the face. I'd put it out of my mind." },
          { who: "Clinician", t: "Tell me a little more about what happened that night." }
        ], note: "Composed after Shea's example. Serial time anchors walk the patient back through a history of violence she had dated at one year. Insight, and the therapeutic process, have begun in the first interview." },
        { type: "p", text: "A second kind of anchor comes from cognitive-behavioral therapists and serves a different purpose. When a patient is about to describe a specific event, a dissociated episode, a panic attack, a suicide attempt, an assault, whose memory may be blurred or repressed, several questions in a row about where they were lock them into one specific memory rather than a composite of similar ones, and the details then tumble out more validly. The suspected panic patient is asked to picture the worst episode, then where she was (driving with her son), then what road (just outside Concord, after the school pickup), and only then what happened: the sudden dread, the racing breath, pulling the car over. Use it only when the details matter and the patient can safely revisit the memory." },
        { type: "p", text: "[[Tagging question|Tagging questions]], also from Carlat, cue a forgotten non-sensitive fact by offering a list: 'Do you remember whether it was called Prozac, Zoloft, Celexa, Effexor?' 'That's it, Celexa.' Useful for medications, therapies, and therapists' names." },
        { type: "case", title: "The candy bar", text: "Summarized from the chapter. A meticulous department-store manager with generalized anxiety and a time-clock for a superego confesses, eyes to the floor, that at ten she stole a candy bar and got away with it; she has stolen nothing since. Sensing shame far out of proportion to the act, the clinician deadpans a summary: at ten she entered a store, pulled a knife, stole hundreds of dollars of clothing and jewelry, and kicked the owner's half-blind cat on the way out. She is aghast, then catches the joke and smiles for the first time in twenty minutes. The clinician presses the bit (a Milky Way, one of the big ones; the statute of limitations has probably expired), then, in a normal voice, wonders aloud whether she tends to come down hard on herself, and whether that might be worth looking at in therapy as a source of her anxiety. She agrees, a little afraid." },
        { type: "p", text: "That is the Othmers' [[Exaggeration]], a validity technique that is also an engagement technique: by placing a trivial 'sin' beside real wrongdoing, it shows the patient the clinician is not aghast and releases tension that could otherwise drive a conscientious patient out of therapy altogether. It needs well-timed humor and an alliance already secured, and is usually done in far fewer words than the example." }
      ]
    },

    {
      id: "miscommunication",
      title: "Cluster two: avoiding miscommunication",
      lede: "Sometimes the patient's convincing 'no' is not minimization. The patient does not know.",
      blocks: [
        { type: "p", text: "Obviously technical terms (bipolar, psychosis, paranoia) get explained. The danger is in words both professionals and the public use, not always in the same sense: depression, addiction. Carlat's remedy is to [[Defining technical terms|define the term]] even though it sounds plain. Asked when she first felt depressed, a patient says she always has. The clinician clarifies: not the sadness everyone feels, but a clinical depression, so low it interfered with sleep, appetite, concentration, or work. 'Oh, that only started a month ago. I've never been depressed like this.' She may have a long dysthymia beneath a new major depression; the clarification prevents treating her as if she had suffered years of the latter." },
        { type: "p", text: "A second problem is not stigma but its opposite. Clinicians ask 'Have you ever been sexually abused?' and receive a convincing 'no' from a patient who was substantially abused, because the patient grew up in a family where psychological, physical, or sexual abuse was the norm and has no idea, beyond vague misgivings, that it was inappropriate. The same happens with physical and verbal abuse and with drinking in families that treat alcoholism as ordinary. Shea's strategy is [[Clarifying norms]]: describe concretely what the term includes." },
        { type: "exchange", title: "Clarifying what counts", lines: [
          { who: "Clinician", t: "You said your dad drank heavily and hit you a lot. Sometimes when drinking and violence are around there can also be sexual abuse. Did your dad ever sexually abuse you, that you remember?", tag: "Normalization" },
          { who: "Patient", t: "No, nothing like that. If he'd tried, I wouldn't have let him." },
          { who: "Clinician", t: "Of course. Problems like that can happen in different ways. Growing up, did your dad ever touch you in your private areas, or fondle you, or ask you to watch him undress, or watch you undress or shower? These can be hard to talk about, but try to remember.", tag: "Clarifying norms" },
          { who: "Patient", t: "Well, sort of. He used to watch me shower all the time. He still asks when I go home. I don't let him anymore." },
          { who: "Clinician", t: "When he did that, what exactly did he do? Did he keep his clothes on?" },
          { who: "Patient", t: "He'd come in and ask me to pull the curtain back. He usually had his pants down." },
          { who: "Clinician", t: "Did he touch himself?" },
          { who: "Patient", t: "(sheepish) Yeah. That's the part I didn't like. He said he'd hurt me if I told my mom. (pause) I think he might have done things with my little sister too." }
        ], note: "Composed after Shea's example. The patient is seventeen; the sister is twelve and still at home. Had the first 'no' been accepted, none of this would have surfaced, and it surfaced with minimal disengagement." }
      ],
      practice: [{ kind: "practice", id: "c5p3", label: "Practice: clarifying norms" }]
    },

    {
      id: "raising",
      title: "Cluster three: raising a sensitive or taboo topic",
      lede: "Normalization says others have felt this. Shame attenuation enters through the patient's pain, or through the patient's own excuses.",
      blocks: [
        { type: "p", text: "[[Normalization]], first described in the second edition, phrases the question so the patient learns they are not the only person who has done or felt this, by stating or implying that the clinician has heard it from others: 'Sometimes people who…', 'Some of my patients who…', 'It's not unusual when…'. It suits almost any sensitive area and especially the guilt-ridden or socially anxious patient who fears being odd or bad. It often rides on natural gates (Chapter 4)." },
        { type: "list", items: [
          "Some of my patients who worry a great deal about their weight tell me they do things to keep from gaining, like making themselves vomit after a meal. Have you ever found yourself doing something like that?",
          "Sometimes when people get really angry they say things they later regret. Has that ever happened to you?",
          "It's not unusual, when there's been a lot of drinking in a family like you've described, for there to be some violence too. Did your dad ever hit you, your mom, or your brothers and sisters?",
          "Sometimes when people are as depressed as you've been, they find themselves having thoughts of killing themselves. Have you been having any thoughts like that? (Or: when people have lost a spouse they loved as much as you loved Anne; when people are in as much pain as you describe.)"
        ] },
        { type: "p", text: "[[Shame attenuation]] comes in two types. Type 1 cues off the patient's own pain or situational stress, with no mention of other people: 'With all of your pain, have you been having any thoughts of killing yourself?' or 'With everything you've been going through…'. Shorter than most normalizations, usable with nearly any patient because pain and stress are universal, and one of Shea's favorite ways to raise suicide. It also opens psychosis gracefully: 'With all the pain you've been having, are your thoughts ever so intense that they sound almost like a voice to you?' The 'almost' leaves a face-saving exit; the patient can say 'sort of, but I don't think they're voices,' and the clinician can go on to sort it out and hunt for commands." },
        { type: "p", text: "Type 2 cues off the patient's defenses, usually rationalizations, to uncover behavior the culture calls bad. What a patient names as the problem ('my boss is an asshole') is often not the problem; the behavior is. Admitting such behavior feels like admitting to being a bad person, so shame and guilt block disclosure. The word attenuate means lessen: if you can intuit how the patient has rationalized the behavior and ask the question from inside that rationalization, the patient may answer openly. The clinician neither agrees nor disagrees with the patient's view; in the spirit of unconditional regard, judgment is suspended and the question is voiced so the patient can answer as they see it." },
        { type: "exchange", title: "Holding your liquor", lines: [
          { who: "Patient", t: "My best times are with my buddies. My wife's friends invented the word boring." },
          { who: "Clinician", t: "Are those the same guys you drink with? Where do you like to go for a brew?" },
          { who: "Patient", t: "Anywhere. We'll tie one on anyplace." },
          { who: "Clinician", t: "When you're out with them like that, do you have a problem holding your liquor, or are you pretty good at holding it?", tag: "Shame attenuation, type 2" },
          { who: "Patient", t: "No problem holding it. I'm not the best, but I hold my own." },
          { who: "Clinician", t: "How much can you put down in a night?" },
          { who: "Patient", t: "(cheerfully) A six-pack, a twelve-pack, no problem. I held down a case once. Sort of." },
          { who: "Clinician", t: "In all seriousness, how many nights a week do you drink a six- or twelve-pack?" },
          { who: "Patient", t: "Two, three. Make that two. Weekends, mostly." }
        ], note: "Composed after Shea's example. The patient who answers 'I hold my own' is stroking his ego, not confessing a flaw; the shameful answer would have been 'I have trouble holding it.' Then behavioral specifics confirm he is not simply bragging. Compare 'Do you think you have a drinking problem?' and its shocked 'no.'" },
        { type: "p", text: "The same move works for job trouble (bosses who need to be big shots, what do you do when one gets on a power trip, how many times fired, five, ten?), yielding an admission of several firings from a patient who had just said there were no problems worth mentioning, and for domestic violence: 'It sounds like you are super stressed. Has the stress ever pushed you to do something you really regretted, like striking your wife or your child, something that's just not like you?'" },
        { type: "p", text: "The Othmers' [[Induction to bragging]] takes shame attenuation a step further. Attaching a positive adjective ('Were you a good fighter?') is still shame attenuation; the distinct technique, in Shea's narrower usage, is an explicit compliment in a prefatory statement, which the patient then wants to live up to. 'You seem sly as a fox' sits better with a deceitful patient than the alternative description. In the chapter's example the clinician remarks that the patient is obviously big and clearly works out and surely takes nothing from anyone, then asks how many fights he has been in, and learns about a tire chain. Mirroring the patient's own earlier profanity strengthened the induction, though swearing is neither necessary nor typical; use what feels natural." }
      ],
      practice: [{ kind: "practice", id: "c5p2", label: "Practice: shame attenuation and amplification" }]
    },

    {
      id: "behavioral-incident",
      title: "Cluster four, part one: the behavioral incident and the verbal video",
      lede: "Ask what happened, not what the patient thinks about what happened.",
      blocks: [
        { type: "p", text: "Pascal and Jenkins's [[Behavioral incident]] rests on a plain idea: when accuracy matters, ask for specific historical details rather than the patient's opinion of them. Opinions are shaped by defenses, stigma, fear of consequences, the need to seem important or to minimize, manipulation, immaturity, misunderstanding, and loyalty. Ask 'Do you date regularly?' and an embarrassed patient says yes; ask how many dates in the past year and you learn the truth without embarrassing anyone. Make your own judgment from the details of the story; do not assume patients can be objective about matters with strong subjective weight." },
        { type: "compare",
          a: { title: "Fact-finding behavioral incidents", items: ["Did you load the gun?", "What thoughts were going through your mind at that moment?", "When you say you threw a fit, what exactly did you do?", "Did you put the razor blade up to your wrist? How long did you leave it there?"] },
          b: { title: "Sequencing behavioral incidents", items: ["What happened next?", "Right after your friend accused you of lying, what was the very next thing you said?", "What did your boyfriend say right after he hit you?", "Tell me the next thing that went through your mind."] } },
        { type: "exchange", title: "Affection, two ways", lines: [
          { who: "Clinician", t: "Is he very affectionate?", tag: "Patient-opinion question" },
          { who: "Patient", t: "(pause) Affectionate enough." },
          { who: "Clinician", t: "When he comes home from work, what's his routine?", tag: "Fact-finding" },
          { who: "Patient", t: "He goes straight to his room to change. I knock to say dinner's ready, peek in, and get back to the stove." },
          { who: "Clinician", t: "Do you remember the last time he hugged you?", tag: "Fact-finding" },
          { who: "Patient", t: "(sadder) I honestly can't." },
          { who: "Clinician", t: "You look a little sad. How long has it been?" },
          { who: "Patient", t: "Around Christmas, I think. Six months. I remember because I was so pleased. It didn't used to be this way. (tears)" }
        ], note: "Composed after Shea's example. The first interviewer found a supportive, affectionate husband and no problems. The second found a marriage in trouble. [[Patient-opinion question|Patient-opinion questions]] remain invaluable for perspective, needs, goals, and for watching defenses at work; they are simply poor at facts, and behavioral incidents are poor at everything else. Techniques are not good or bad, only more or less useful for a task." },
        { type: "p", text: "Shea calls the behavioral incident one of the most powerful techniques he ever learned, and its highest use is the [[Verbal video]] (chain analysis, in CBT): a flexible strategy of interwoven fact-finding and sequencing behavioral incidents that walks the patient through a suicide attempt or an act of domestic violence until the clinician can see it unfold. Downplayed suicidal intent is a mistake that can be fatal. When the patient skips ahead, leaving a [[Nixon gap]], the clinician rewinds to where the gap began and restarts the video." },
        { type: "case", title: "Not that bad", text: "Summarized from the chapter. Late at night in the emergency department a young woman says tonight's violence was 'not that bad'; he has been worse. The clinician must decide whether she can safely go home. Kitchen, he had been drinking and screaming about money; he told her to get out, she said it was her house; he called her a name and hit her. With his fist? Yes. Where? The temple. Did it knock her down? Yes, a dangerous blow that already contradicts 'not that bad.' Then what? 'It just took its course and he left.' A Nixon gap. Go back to right after he hit you; what exactly happened next? He screamed again, picked up a knife, said he ought to shut her up for good; she offered to leave; he threw the knife down and left. The last thing he said? That she had better watch herself or she would be really sorry. Where did he go? She has no idea. Does he have a key? Yes. The clinician observes that he may be drinking right now and still dangerous, and the patient, through her own words, has discovered that going home tonight is not wise." },
        { type: "pearl", title: "The parting words", text: "If the patient does not volunteer the perpetrator's last words, ask directly. Exits sometimes carry explicit threats ('I'm going to get you bad, real soon') that settle the question of a safe haven. Verbal videos take time; in an initial assessment spend them where validity matters most." }
      ],
      practice: [{ kind: "practice", id: "c5p6", label: "Practice: behavioral incident over opinion" }, { kind: "practice", id: "c5p1", label: "Practice: starting a verbal video" }, { kind: "sim", id: "sim-pills", label: "Interview: Just a few pills (verbal video)" }]
    },

    {
      id: "finishing-lists",
      title: "Cluster four, part two: gentle assumption, denial of the specific, the catch-all, and amplification",
      lede: "Presume the behavior, name the items one at a time, sweep for outliers, and offer numbers too high to be flattering.",
      blocks: [
        { type: "p", text: "[[Gentle assumption]], from the sex researchers Pomeroy, Flax, and Wheeler, assumes in a gentle, non-accusatory voice that a suspected behavior is occurring: 'How frequently do you find yourself masturbating?' yields more valid answers than 'Do you masturbate?' Soften it with 'if at all' when needed. The test is simple: any question that asks whether the patient has done something ('Have you ever tried any other street drugs?') is not a gentle assumption; 'What other street drugs have you tried?' is. Other prototypes: What other ways have you thought of killing yourself? What other problems with the law have you had? In the past month, how many doses do you think you've missed? Nobody knows exactly why they work; perhaps they signal familiarity and permission for a positive answer." },
        { type: "pearl", title: "A leading question, used with care", text: "A gentle assumption is a powerful leading question; a television defense attorney would object to each one. Do not use them with patients who feel compelled to please (histrionic or markedly dependent personalities) or who may feel intimidated (children, patients of limited intelligence), who may report what they think they are supposed to have done. Shea considers them inappropriate with children when exploring abuse, where they can generate false memories." },
        { type: "p", text: "[[Denial of the specific]], from the first edition, asks about items from a theoretical list (street drugs, suicide methods) one at a time, typically right after a not-very-believable 'no' to a gentle assumption. It can ferret out deceit, and it can simply jog the memory of an honest patient who forgot something. It is harder to shade the truth on a specific question than a general one, and each separate question is a chance to scan the face for leakage. It is used only when the clinician suspects withholding. In Chapter 17 it is the tool that sometimes draws out a withheld method of choice." },
        { type: "exchange", title: "Finishing the drug list", lines: [
          { who: "Clinician", t: "What other street drugs have you tried in the past?", tag: "Gentle assumption" },
          { who: "Patient", t: "Not much, really." },
          { who: "Clinician", t: "How about coke?", tag: "Denial of the specific" },
          { who: "Patient", t: "Not really. Too expensive." },
          { who: "Clinician", t: "How about if someone gives it to you?" },
          { who: "Patient", t: "(smiles) I'm no fool. Three, four times a month, if it's going around. In college it was a couple of lines a day." },
          { who: "Clinician", t: "Have you ever tried speed, even once or twice?", tag: "Denial of the specific" },
          { who: "Patient", t: "That one I can take or leave." },
          { who: "Clinician", t: "What's it like for you?", tag: "Gentle assumption, cued by 'take or leave'" },
          { who: "Patient", t: "Crashing is no fun. Two or three times last month. In college I'd speed for two or three weeks at a time." },
          { who: "Clinician", t: "Have you ever used a downer like Valium or Xanax?", tag: "Denial of the specific" },
          { who: "Patient", t: "Some, to come down. Nothing in years." }
        ], note: "Composed after Shea's example. Patients often deny or downplay a drug until asked specifically, then admit heavier use in the past, so probe both the recent and the distant past. Note that a single question like 'How about coke?' is asked, answered, and only then followed by the next; bundling them into a [[Cannon question]] ('coke, speed, downers, pot?') lets the patient answer only the last item, lie once, and deny you the nonverbal clues." },
        { type: "p", text: "The [[Catch-all question]], broadened from a tip submitted to Shea's training institute by Sarah Davila, finishes a list by asking whether anything was missed: 'We've talked about a lot of different ways you've been thinking of killing yourself. Is there any method you've thought of, even briefly, that we haven't talked about?' Answers can surprise, and the question sometimes reveals internet searches on suicide. It generalizes: anything else your son does that upsets you; any other bad experiences in Iraq, perhaps with fellow soldiers (which can uncover sexual assault); anything else your wife is upset about; any street or prescription drug used to get high that we haven't discussed." },
        { type: "p", text: "[[Symptom amplification]], also from the first edition, bypasses minimization without confronting it, letting the patient keep the defense while the clinician still learns the truth. The clinician proposes an actual number, sets the upper limit high, and then goes higher: 'How much liquor can you hold in a night, a pint, a fifth?' 'Oh, not a fifth, maybe a pint' still signals a problem. Use it only when you expect minimization. Examples: fights in a lifetime, 30, 40, 50; acid trips, 25, 50, 100 or more; times you've struck your wife, 20, 40, 60; on your worst days, hours spent thinking about suicide, 8, 12, 15." },
        { type: "pearl", title: "Know the territory", text: "The upper limit must not be absurd or reveal ignorance. A trainee asked a seasoned user how many peyote buttons he took at a time, a hundred, two hundred, and after the laughter subsided received the reply, 'You don't know much about peyote, do you, Doc?'" }
      ],
      practice: [{ kind: "practice", id: "c5p4", label: "Practice: denial of the specific" }, { kind: "drill", id: "validity", label: "Drill: validity techniques" }]
    },

    {
      id: "combinations",
      title: "Combinations, overlap, and Ben",
      lede: "A normalization softens a gentle assumption; a shame attenuation hides inside one. Almost everything is also a behavioral incident.",
      blocks: [
        { type: "p", text: "Techniques combine into [[Validity doublet|doublets]]: 'Some of my patients tell me it's easy to forget medications, especially several times a day (normalization); in the past month, roughly how many doses do you think you've missed? (gentle assumption).' One of Shea's favorites inserts one technique inside another. In a direct transcript with a late adolescent who arrived at the emergency department announcing that he was 'really suicidal and crazy,' Shea asked how frequently bosses had taken him aside and complained, 'or harped,' about his work: a shame attenuation planted inside a gentle assumption, because the patient saw authority figures as the problem. Add a number ('10 times, 20, 30') and it is a triplet with symptom amplification." },
        { type: "p", text: "One definitional note. The techniques are cleanly distinct from one another, which is why they are easy to teach, with one overlap: almost all of them are also fact-finding behavioral incidents, since they ask for concrete facts, and symptom amplification always is, since it asks for a number. In supervision, tag such a question by its more specific name, because that name shows its power." },
        { type: "p", text: "Video Module 5.1 brings the techniques to life with Ben, for whom truth-telling is not second nature; Modules 5.2 and 5.3 present his full interview without didactics, first unlabeled so you can name each technique as it appears, then labeled to check your answers." }
      ],
      practice: [{ kind: "drill", id: "validity", label: "Drill: validity techniques" }]
    },

    {
      id: "special",
      title: "Malingering, soundings, and the sexual history",
      lede: "Bogus symptoms for the patient who is feigning; soundings for the depth you cannot see; matter-of-factness for the questions nobody likes to ask.",
      blocks: [
        { type: "p", text: "Most patients are trying to tell the truth; some are malingering, for reasons from the sympathetic (false symptoms to get a bed when homeless) to the problematic (drugs, disability money, dodging court). Subjective disorders such as PTSD and depression are easier to fake; psychosis is chosen when a dangerous picture is needed, for admission or an insanity defense. The clinician's best asset is detailed knowledge of what real symptoms are like and what they feel like, and formal tests such as the Structured Interview of Reported Symptoms score claims of rare or improbable symptoms, which should be rare." },
        { type: "p", text: "For everyday use, Resnick's [[Endorsement of bogus symptoms]]: ask about a symptom highly atypical of the disorder being feigned, embedded among typical questions so it does not stand out. People faking psychosis assume anything crazy-sounding belongs to schizophrenia; it does not, because psychotic symptoms have distinctive phenomenologies. 'When people talk to you, do you sometimes see the words spelled out?' 'Have you ever believed cars were members of an organized religion?' Shea's own: 'Do your voices often slip under the door?' 'Do they slam into the back of your head?' For PTSD: do the flashbacks occur in black and white? For panic: do the attacks hammer at you for many hours on end? For depression: do you wake feeling pretty good and deteriorate through the day? (Depressed patients rarely wake refreshed; they wake early, barraged by worry.) With Ben, it was his answer to the first bogus symptom that made Shea strongly suspect malingering, later confirmed (Video Module 5.4)." },
        { type: "p", text: "Leston Havens's [[Soundings]] measure, rather than build, motivation (building it is Chapter 22). The name comes from the Mississippi leadsman who threw a weighted rope and called the depth, 'Mark twain!' at two dangerous fathoms, which gave Samuel Clemens his pen name. The clinician tosses out a carefully sequenced series of [[Statement of inquiry|statements of inquiry]], each probing deeper, always in a gentle rather than challenging tone, and reads the verbal and nonverbal response to each." },
        { type: "exchange", title: "How deep is 'soon'?", lines: [
          { who: "Patient", t: "I know in my heart he's bad for me. I'll get out soon." },
          { who: "Clinician", t: "You dream of this?", tag: "Sounding" },
          { who: "Patient", t: "I think about it every day." },
          { who: "Clinician", t: "You might want to do it, then, to leave him?", tag: "Sounding" },
          { who: "Patient", t: "I might need to." },
          { who: "Clinician", t: "You feel you can do it?", tag: "Sounding" },
          { who: "Patient", t: "(sighs) I guess so. I think so." },
          { who: "Clinician", t: "You feel you'll be able to within a month or two?", tag: "Sounding" },
          { who: "Patient", t: "I doubt that. No, that's not in the cards." }
        ], note: "Composed after Shea's example. Soundings also measure a patient's distance from a delusion ('You sometimes wonder whether this can really be true about your neighbor?' 'You feel there's too much evidence to doubt it?' 'There's no doubt at all in your mind?') and the intention to act on it ('You've thought of doing something about him?' 'You feel you need to?' 'You've planned to?'), which may reveal a gun bought 'just in case.'" },
        { type: "p", text: "The sexual history unsettles beginners and patients alike; role play and rehearsal in front of a mirror speed the familiarization, and the aim is nonverbal behavior identical to the rest of the interview, because matter-of-fact questions draw matter-of-fact answers. Avoid leading forms that imply a norm ('Do you have orgasms about 80% of the time?'); 'How often, if at all?' is better, and a range with a normalization removes the patient's guesswork about what you expect: 'Women vary a great deal on how frequently, if ever, they have an orgasm. What percentage of the time, 5%, 20%, 80%, almost never?' For orientation, where cultural stigma breeds needless guilt, enter through the developmental history with normalization (adolescents often experiment; did you ever?) and carry it forward (some people find a homosexual or bisexual orientation most natural; at this point in your life, which have you found most comfortable?)." },
        { type: "p", text: "Childhood sexual abuse is sometimes raised by the patient and sometimes nothing hints at it. As Chapter 4 showed, the family history offers a natural gate with a normalization inside: with a parent's drinking, it is not uncommon to hear of violence or sexual abuse in the family; was that true in yours? Or: when you were growing up, did anyone in or outside your family touch you sexually in a way you felt uncomfortable about or wish they hadn't? Even a brief pause can be followed gently: 'It looks like that question struck a chord. What are you remembering?' and 'Just share what you feel comfortable sharing; it might really help me to help you.'" }
      ],
      practice: [{ kind: "practice", id: "c5p5", label: "Practice: soundings" }]
    },

    {
      id: "tapestry",
      title: "The tapestry: an interview with Billy",
      lede: "Watch the techniques dismantle the patient's distortions, and the interviewer's own assumptions.",
      blocks: [
        { type: "case", title: "'I lost it on her'", text: "Summarized from the chapter. Deep in the body of an interview the clinician expands intimate partner violence. The patient says that last weekend he and his wife 'really went at it' and, nagged about getting a job, he 'lost it on her.' Most clinicians, Shea included, would hear violence. A gently asked behavioral incident ('What do you mean, lost it on her?') reveals that he walked out the back door and stayed away for two days without calling: passive-aggressive, not violent. The assumption was wrong. The intuition was not. A validity triplet opens the door: sometimes people have a hard time controlling their emotions (normalization), with all the pent-up stress you two have been under (shame attenuation), how many times have you lost your temper and perhaps hit her? (gentle assumption). 'I've not really done that.' What does 'not really' mean? He has never actually hit her. The clinician clarifies norms: by hit, I mean a fist, an open-handed slap, or pushing. A sigh: he has slapped her a few times. Bruises? Maybe a black eye once or twice. How many times, 20, 30, 40? Six or seven. Stitches or the emergency room? Never." },
        { type: "p", text: "Suspecting antisocial personality, which bears on the referral, the clinician then explores criteria that could easily disengage, exactly as in the video with Ben. A shame attenuation about a tough neighborhood where one had to fight to survive; an induction to bragging (he looks like he takes care of himself and could hold his own) followed by a gentle assumption about fights; a behavioral incident about hospitalizing anyone; a shame attenuation ('even though someone else started them') before asking about arrests; a catch-all about other trouble with the law (vandalism, picked up but never arrested); a time-anchored question about Los Angeles (fired for fighting, police called). Then a normalization about children of abusive parents having to lie to survive, a second about the lying becoming a habit, and a shame attenuation ('Have you become a pretty good liar over the years?') that earns a grin: 'I'm a super good liar. And I ain't lying to you.' Running away from home, with amplification (10, 15, 20? five or six). Fire-setting, through revenge at abusive parents (no, he would have been killed). Hurting something the father loved, such as his dogs (no, but he used to tease cats). What would you do? Cats in a can, kicked; lighter fluid on a tail, lit. How does he see it now? Pretty weird; he feels sort of bad; he calls himself a pacifist." },
        { type: "p", text: "A history dense with antisocial behavior, and hints of true sociopathy in the lack of empathy for people and animals, has been elicited while the patient stayed comfortable, partly because he feels little guilt and largely because the clinician tied each disengaging topic to the patient's own rationalizations. Note too the power of the behavioral incident to cut away the interviewer's projections as well as the patient's distortions." },
        { type: "table", head: ["Cluster", "Techniques"], rows: [
          ["1. Improving generalized recall", "Anchor questions (time, place), tagging questions, exaggeration"],
          ["2. Avoiding miscommunication", "Defining technical terms, clarifying norms"],
          ["3. Raising a sensitive or taboo topic", "Normalization, shame attenuation (types 1 and 2), induction to bragging"],
          ["4. Exploring the topic once raised", "Behavioral incident (and the verbal video), gentle assumption, denial of the specific, catch-all question, symptom amplification"],
          ["Special situations", "Endorsement of bogus symptoms (malingering), soundings (motivation, delusional conviction)"]
        ] },
        { type: "p", text: "Used creatively and flexibly, these techniques cut through the mists of words and give a clearer picture of the problems facing our patients and the behaviors that may harm them or others. The art of interviewing, Shea concludes, takes its place as the first step in the art of healing." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "Shea's two journal anecdotes on memory, the complete exaggeration dialogue with the candy-bar thief, the full clarifying-norms exchange, both affection dialogues side by side, the entire domestic-violence verbal video, the drug-list sequence, and the long closing interview with Billy, each technique labeled in place." },
    { title: "Video Modules 5.1 to 5.4", text: "5.1, Validity Techniques: Effective Use, with Ben, including doublets; 5.2 and 5.3, Ben's complete interview without didactics, first unlabeled for self-testing and then labeled; 5.4, Interviewing Techniques for Uncovering Malingering, showing the endorsement of bogus symptoms that first exposed Ben." },
    { title: "Where these techniques go to work", text: "Chapter 4 for normalizations riding on natural gates; Chapter 17 for the CASE Approach, which sequences shame attenuation, behavioral incidents, gentle assumption, denials of the specific, the catch-all, and symptom amplification into a suicide assessment; Chapter 18 for the same techniques in the CADE Approach to violence; Chapter 11 for soundings and delusional distance; Chapter 22 for motivational interviewing, which builds the motivation that soundings only measure." },
    { title: "Sources Shea draws on", text: "Carlat's The Psychiatric Interview for anchor and tagging questions and defining technical terms; Sudman and Bradburn on dating memories; the Othmers' The Clinical Interview Using DSM-IV for exaggeration and induction to bragging; Pascal's The Practical Art of Diagnostic Interviewing for the behavioral incident; Pomeroy, Flax, and Wheeler for gentle assumption; Resnick on bogus symptoms; Havens on soundings; and the Training Institute for Suicide Assessment and Clinical Interviewing's archive of interviewing tips." }
  ]
};
