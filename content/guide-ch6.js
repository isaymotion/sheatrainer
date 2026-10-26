/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 6: Understanding the Person Beneath the Diagnosis
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch6 = {
  chapter: "ch6",
  intro: "This chapter is the third way-station on Shea's map: understanding the person. Its thesis fits in a sentence. A treatment plan dictated by a diagnosis is not ideal if the patient will not follow it, and whether they follow it depends on the person beneath the diagnosis. The chapter has three movements: what hinders understanding (our own unconscious distortions and unreliable habits), what deepens it (the interpersonal perspective, phenomenological inquiry, and the wellness triad of strengths, skills, and interests), and the cultural glasses that both patient and clinician wear. Read it for the two questions it plants in your head for every strong reaction you have to a patient, and for the habit of noticing a cross, a tattoo, a hobby, and asking.",

  highYield: {
    mustKnow: [
      "Two arrows lead to treatment planning: one from diagnosis and assessment, one from understanding the person. A plan that is ideal in theory but will not be followed is foolish; plans are co-created with people, not derived from diagnoses.",
      "[[Parataxic distortion]] (Sullivan): patient or clinician perceives the other through unconscious templates. It shows as unusually poor blending, high anxiety, or antagonism. Check yourself first: Does this patient remind me of a previous patient? Of family, friends, enemies, employers, public figures? Political and religious difference stereotypes fast.",
      "[[Intersubjectivity]]: clinician and patient construct the clinical data together. The interviewer is not a calibrated thermometer but an eyeglass ground by personal history; the patient in your head may differ from the one in the chair.",
      "[[Validity / reliability|Reliability]] is about the instrument, which is your style. It fails two ways: unconscious shifts in how you ask (cutting off a patient you dislike, not clarifying a sarcastic one), and being [[Reliably invalid|reliably invalid]], habits that consistently distort: negative questions with a head shake, and [[Cannon question|cannon questions]].",
      "The [[Interpersonal perspective]] (Whitehorn, Sullivan): ask how this person believes others see them, how they are trying to come across to you, and why. Guilt, shame, inadequacy, and fear of failure are the stuff of neurosis; questions about teachers, siblings, gym class, report-card day, and life online open the door.",
      "Probing rarely goes too far when done sensitively, but watch for shame (averted gaze, hesitant speech). Relieve it: 'What has it been like to share this today?' and praise the courage it took.",
      "[[Phenomenological inquiry]] ([[Daseins-analysis]]): understand what it is like to be this person, often through the senses: what were you seeing, hearing, feeling? A [[Present-tense shift|shift to the present tense]] deepens recall and affect; not for unstable or psychotic patients.",
      "The [[Wellness triad]]: strengths (character traits, the [[VIA Inventory of Strengths|VIA list]] helps you notice them), [[Patient skill|skills]] (specific, teachable abilities, raised easily through school and work history), and interests (how free time is spent, and what that implies). Each can become a treatment resource; [[Presenting solutions|presenting solutions]] are what the patient has already tried that helped.",
      "[[Kulturbrille]] (Boas): everyone wears cultural glasses, patient and clinician alike. Lowered eyes may be respect; a mild 'yes' may be a 'no'; lateness may be a different relation to time. Tendencies describe groups, never individuals; use them to generate questions.",
      "[[Mutual constitution]]: culture and psyche make each other up. You cannot understand the person without the culture that shaped them, nor plan treatment without the culture they return to.",
      "Clinicians have treatment biases too, and tend to hear the data that support them. Ask about shamans, healers, family decision makers, and clergy, then test the plan: 'What will your family, your father, your pastor, your shaman think of this?'",
      "Some of the most important cultural interviews are with the people who love the patient. Anna's Pentecostal-minister mother, listened to with respect, became the advocate for an antipsychotic."
    ],
    pitfalls: [
      "Recommending the 'best' evidence-based plan and never asking what the family said on the way out the door.",
      "Trusting a gut dislike without asking who the patient reminds you of.",
      "'You're not having thoughts of hurting yourself, are you?' with a slow shake of the head.",
      "Bundling a review of systems into one breath and accepting the 'no.'",
      "Gathering a thorough database and generating so much guilt that no patient appears for the second appointment.",
      "Pushing a present-tense regression on a patient who cannot tolerate it.",
      "Listening only for weaknesses, because that is what patients present with, and closing without naming a single strength.",
      "Reading a quiet 'yes' from a deferential patient as agreement, then labeling them unmotivated at the next visit.",
      "Hearing in the data only the interventions you already prefer."
    ],
    phrases: [
      { say: "I can't help noticing the cross you're wearing. It's quite pretty. Was it a gift?", when: "An object as a door into the person; the observed gate that followed uncovered a family's opposition to medication." },
      { say: "I'm wondering what you're feeling as we're talking. I sense you're a little displeased with the interview so far.", when: "When the clinician is clear of distortion and suspects it in the patient. Non-defensive, it brings hostility into the open." },
      { say: "What was report-card day like for you? What was gym class like? Which of your brothers or sisters are you most like?", when: "Interpersonal perspective: how the patient believes others see them, through the adolescent years." },
      { say: "What has it been like for you to share such complicated material today?", when: "When shame appears. Then: 'You've done an excellent job of sharing difficult material.'" },
      { say: "What were you looking at as you sat there? What else are you feeling in the room?", when: "Phenomenological inquiry through the senses, with a shift into the present tense." },
      { say: "I know it may feel strange, like bragging, but I won't take it that way. I'm genuinely interested in what you do well.", when: "Biswas-Diener's framing for a patient or culture uncomfortable naming strengths." },
      { say: "We all have things we're skilled at and a few we're terrible at. For fun, let's start with the unskilled. What are you remarkably terrible at?", when: "Humor to open the skills region with a well-engaged patient who has shown humor." },
      { say: "What do you think your parents (your father, your shaman, your pastor) will think of our plan?", when: "Testing the plan against the culture the patient returns to, before they leave." }
    ]
  },

  sections: [
    {
      id: "jennifer",
      title: "Two clinicians, one cross",
      lede: "Both gathered the same data and made the same diagnosis. Only one patient came back.",
      blocks: [
        { type: "p", text: "As engagement and data gathering integrate, something clears like a mist: the clinician begins to see the world through the patient's eyes, and the Victorian room grows familiar. This is the third way-station, understanding, which overlaps with the first two but deserves its own study, because it feeds not only diagnosis but treatment planning. On Shea's map (Figure 6.1) a second arrow runs to treatment planning, not from diagnosis but from understanding the person." },
        { type: "p", text: "The trap is the belief that an ideal plan follows by algorithm from a DSM-5 diagnosis. The spirit is admirable, the logic incomplete: an ideal plan that does not work is foolish. Whether a plan works depends on the patient's interest, agreement, and ability to follow through, so plans are made for people, not diagnoses, and co-created with them, in psychiatry as in diabetes or hypertension." },
        { type: "case", title: "Jennifer", text: "Summarized from the chapter. An eighteen-year-old still at home, hoping for college, with a strong family history of depression, is moderately severely depressed; both clinicians in the thought experiment are skilled, both diagnose major depression, both think an antidepressant reasonable given the pace and depth of the illness. The first recommends a psychiatrist and a therapist; Jennifer thanks him warmly and never appears for either. The second notices a meticulously kept, probably heirloom cross and asks about it. A gift from Gran. Jennifer's eyes drop; an observed gate ('You seem lost in thought') opens the part she had not told: her whole born-again family, Gran included, spent half an hour trying to stop her coming, her mother told her to pray harder, and her parting words were a warning that 'they' would try to drug her. The second clinician recommends only psychotherapy, which also works for this depression, reasoning that a medication suggestion would be refused and might cost the whole plan, and that if therapy proves insufficient, the therapist Jennifer has bonded with can raise medication later. Jennifer comes to her first session, cross and open mind in place." },
        { type: "p", text: "Paracelsus said the patient should be the physician's book. This clinician read it, including between the lines, and shaped a plan that fit the family and spiritual milieu rather than an ivory-tower ideal. The chapter that follows is about reading that book better: what hinders understanding, what deepens it, and how culture runs through both." }
      ],
      practice: [{ kind: "quiz", id: "ch6", label: "Quiz: Chapter 6" }, { kind: "practice", id: "c6p1", label: "Practice: observed gate into culture" }]
    },

    {
      id: "parataxic",
      title: "What hinders: parataxic distortion and intersubjectivity",
      lede: "The real characteristics of the other person may be of negligible importance to how you see them.",
      blocks: [
        { type: "p", text: "Both participants form images of each other, and not only consciously. Unknown to anyone, the clinician may resemble the patient's ex-spouse or fit a prejudice, and the patient may resemble someone the clinician once feared or distrusted. Sullivan's term is [[Parataxic distortion]], and it can run either way or both. It is the early seed of transference and countertransference, and in a first interview it can wreck a fragile alliance: a distorting patient withholds, and a distorting clinician forms false impressions and inaccurate gut instincts." },
        { type: "p", text: "Intense distortion is atypical, and when present it shows itself through unusually poor blending, unusually high anxiety, or frank antagonism, one more reason to monitor blending. Repair begins at home. Is something I am doing disengaging this patient? Countertransference can make a clinician hear the story differently than it was told, grow suspicious of its truth, or feel repelled by the patient's views. Two questions help." },
        { type: "list", items: [
          "Does this patient remind me of any previous patient?",
          "Does this patient remind me of a family member, a friend or enemy, an employer, a public figure?",
          "And: what are my own biases, racial, religious, political? Shea has watched supervisees on both ends of the political spectrum develop sudden, intense dislike for a patient of the opposite persuasion, a problem that has grown with national division."
        ] },
        { type: "exchange", title: "Bringing it into the open", lines: [
          { who: "Clinician", t: "I sense you're feeling a little displeased with how this is going so far, and I'm wondering what's going on." },
          { who: "Patient", t: "Honestly? I find you very controlling." },
          { who: "Clinician", t: "That's useful for me to hear. When have you felt that way with someone before?" }
        ], note: "Composed. Once the clinician is satisfied that the distortion is not their own, a non-defensive question can defuse the patient's. Specific ill will ('I find you controlling') is not to be feared; it carries psychodynamic clues to be explored later, and letting the patient voice their view of the interview is itself the gateway to understanding them." },
        { type: "p", text: "Sullivan, who died in 1949, pioneered the interpersonal theory of psychiatry: patients are not social isolates, and understanding one means entering their interactions with family, friends, culture, and even the therapist's unconscious. Later theorists such as Ogden developed [[Intersubjectivity]], the study of the unconscious interplay between the two subjectivities in the room. Dunn's summary, which Shea loves for its verb, is that analyst and patient together 'construct the clinical data.' The facts gathered in an interview are educated guesses, chiseled by both unconsciouses. The instrument is not a thermometer calibrated for accuracy but a human eyeglass fitted by personal history, and the patient sitting before the clinician may be quite different from the one sitting inside the clinician's head." }
      ],
      practice: [{ kind: "practice", id: "c6p5", label: "Practice: recognizing parataxic distortion" }]
    },

    {
      id: "reliability",
      title: "What hinders: reliability and the reliably invalid",
      lede: "Validity asks whether the patient tells the truth. Reliability asks whether your instrument, your style, stays the same.",
      blocks: [
        { type: "p", text: "Chapter 5 was about validity. Intersubjectivity raises a sibling concept: [[Validity / reliability|reliability]], in statistics the degree to which a measure contains variable error, like a ruler that gives different lengths on two tries. In interviewing the measuring instrument is your style. Does the way you ask change from patient to patient, and does it bias answers? The unconscious patterns of the interviewer can distort not only the interpretation of data but the way the instrument is used." },
        { type: "p", text: "Two problem areas. First, unconsciously changing style, which shadows countertransference and strain, and is different from intentionally adapting style to a patient. Pressed for time or beginning to dislike someone, a clinician cuts off responses, casts a scowl, or declines to ask the sarcastic patient to clarify a vague answer that a pleasant patient would have been asked to clarify. The interview shortens and the database weakens. Negative feelings are not wrong; their effect must simply be considered, and sometimes they are clues to both parties." },
        { type: "p", text: "Second, being [[Reliably invalid]]: habits that consistently increase the risk of invalid data. A clinician who seldom uses behavioral incidents is probably reliably invalid. So are the clever devices humans develop for not hearing what they do not want to hear, serviceable at dinner with the in-laws, dangerous in the clinic. Interviewers may not want a positive answer about suicide, homicide, child abuse, or a worsening symptom, because it means more time, legal action, fear, or a sense of failure, so they cajole a no." },
        { type: "list", items: [
          "'You don't really feel more depressed, do you?'",
          "'You're not feeling any chest pain today, are you?'",
          "'You're not having thoughts of hurting yourself, are you?' (the 'unusually sophisticated' clinician adds a slow shake of the head)",
          "'You're not really thinking of spending the whole week here, are you?' (to a parent-in-law)"
        ] },
        { type: "p", text: "The negative form biases strongly toward no, because the patient wants to please. It is among the commonest errors Shea sees in supervision and worst around sexuality and suicidality, where patients already hesitate and clinicians sometimes fear the answer. The other reliably invalid habit is the [[Cannon question]]. 'When did you begin to feel depressed, to feel hopeless, to feel life was not worth living?' 'Around May.' Which of the three began in May? Depression probably preceded hopelessness by months. The review of systems is a notorious site: 'Any problems with your eyes, ears, heart, or stomach?' 'No.' Only one word may stick in the patient's mind." }
      ],
      practice: [{ kind: "practice", id: "c6p2", label: "Practice: checking a quiet yes" }]
    },

    {
      id: "interpersonal",
      title: "What deepens: the interpersonal perspective",
      lede: "Not the fear of death but the fear of life: how does this person believe others see them?",
      blocks: [
        { type: "p", text: "Anxiety has many causes, physiological and psychosocial; this section, drawn from John Whitehorn and Sullivan, takes the interpersonal ones. The question to hold through the interview is how this patient feels they are viewed by others. Guilt, shame, inadequacy, and fear of failure are the stuff of neurosis, and many paralyzing defenses exist to deflect them. Whitehorn observed that even in war the greatest dread is not death but being maimed or failing in one's duty, because one dreads the reactions of others. A child builds self-worth from perceived parental and family attitudes, which is why chaotic childhoods so often precede borderline and narcissistic structure. An actress once told Shea she could play any role once she knew what the character felt guilty about." },
        { type: "list", items: [
          "What were some of your teachers like? Tell me about the kids in your neighborhood.",
          "What was it like walking home from school, or riding the bus?",
          "Which of your brothers or sisters are you most like? Who is the happiest in your family? Who do you admire most?",
          "What do you think are some of your parents' concerns for you?",
          "What was gym class like for you? What was report-card day like?",
          "Did you enjoy social networking? Did kids say bad things about you or harass you online? Were you ever flamed or threatened there?"
        ] },
        { type: "p", text: "These are samples of pathways into interpersonal affect; the list could be endless, and the clinician attends equally to present concerns about spouse, family, friends, bosses, and online harassment. More immediate still is how those fears generalize to the interview itself. Whitehorn: attitudes appear not in answer to prepared questions but later, in reaction to what the patient feels is the interviewer's response. Two reflections reward the clinician: How is this patient trying to come across to me? Why do they need to present themselves this way? A patient who fears being seen as weak or 'nuts' for seeing a shrink can be helped by a late ventilation question: 'What has it been like for you to come to see a mental health professional?'" },
        { type: "p", text: "Attitudes toward others reveal character more clearly than direct questions. Whitehorn suggested exploring sentiments and prejudices: toward parents and siblings, church and state, the hometown, the various isms. A depressed fourteen-year-old who would not talk about himself talked at length when asked what he would change at school, revealing a moral seriousness about racial integration and prejudice that hinted at a harsh superego and an inner field of land mines." },
        { type: "p", text: "Can one probe too much? Sensitively done, questioning seldom goes too far, but the trick is attunement to the guilt it generates. A thorough database with no patient at the second appointment is a poor trade. Watch for embarrassment and shame (averted gaze, a hesitant first step into speech), know which topics typically raise anxiety, and when the signs appear, lower the tension: 'What has it been like for you to share such complicated material today?' Then reinforce the courage: 'You've done an excellent job of sharing difficult material. It's really helping me understand.'" },
        { type: "case", title: "John", text: "Summarized from the chapter. A man of about thirty, ostensibly seeking assertiveness training, discloses voyeurism, exhibitionism, and frotteurism, eye contact vanishing and hands picking at each other. Near the end the clinician asks what sharing has been like; John has never told anyone and feels ashamed whenever he meets someone new. What has he feared the clinician is thinking? That he is sick or disgusting. Has the clinician done or said anything to convey that? No. 'Good, because I have a feeling there's only one person in this room who thinks you're sick or disgusting, and it isn't me.' John relaxes, and the clinician proposes finding out why the behaviors developed so they can be changed. He was treated successfully with cognitive-behavioral methods; the exchange dismantled a projection that could have ended therapy before it began." },
        { type: "pearl", title: "Knowing what we could do and perhaps should not", text: "Some patients are not ready for certain issues; others benefit from exploration. Experience guides the judgment, with Umberto Eco's monk in mind: learning is not only knowing what we must or can do, but what we could do and perhaps should not." }
      ],
      practice: [{ kind: "practice", id: "c6p3", label: "Practice: relieving shame after disclosure" }]
    },

    {
      id: "phenomenology",
      title: "What deepens: phenomenological inquiry",
      lede: "Through the doors of perception into the patient's inner home, which may be turbulent, beautiful, or terrifying.",
      blocks: [
        { type: "p", text: "[[Phenomenological inquiry]] has roots in existentialism and phenomenological psychology (Rollo May's Existence is the classic introduction). The clinician tries to see the world as the patient experiences it, to understand the phenomenon of being this person: Medard Boss's [[Daseins-analysis]], analysis of being-in-the-world. The practical door is the senses. Ask what the patient was seeing, hearing, feeling, smelling, tasting, and feelings, attitudes, and thoughts follow. It also tells the patient they are a person to the clinician, not a case." },
        { type: "exchange", title: "The candlelit room", lines: [
          { who: "Patient", t: "I was sick of everything. I wanted to get away from everyone who could hurt me. So I went to my room, turned off the light, lit a few candles, and sat there." },
          { who: "Clinician", t: "What were you looking at as you sat there?", tag: "Sensory" },
          { who: "Patient", t: "Nothing, really. The candlelight made the shadow of the vase dance on the wall." },
          { who: "Clinician", t: "Do you remember anything else that caught your eye?" },
          { who: "Patient", t: "My prom picture. I thought how cruel it is that relationships have to end. He means nothing to me now, and I don't think I ever meant anything to him." },
          { who: "Clinician", t: "What else are you feeling in the room?", tag: "Shift to present tense" },
          { who: "Patient", t: "Lonely. Empty. I wanted to curl into a tiny ball, like a cocoon." },
          { who: "Clinician", t: "What does the world feel like from inside your cocoon?" },
          { who: "Patient", t: "Distant, dark, numb. Blank. And angry. Angry at my mother for never caring, for putting me in the cocoon in the first place. I don't remember her ever hugging me. (crying) Once, at the train station, going to my grandparents for the summer, I waited to see what she'd do when she said goodbye. She said goodbye." },
          { who: "Clinician", t: "That must have hurt. Do you expect people to hurt you?" },
          { who: "Patient", t: "Yes. Maybe I'm used to it. Maybe I even like it." },
          { who: "Clinician", t: "Going back to that night with the candles, did you have any thoughts of wanting to kill yourself?" },
          { who: "Patient", t: "Yes. It all seemed silly, so I started thinking about the Valium I'd saved up." }
        ], note: "Composed after Shea's example. The hollowness of the patient's world, her neediness, and her latent expectation of rejection (which may provoke the very hostility she expects) all become real, and the excursion seeds many regions for later exploration, perhaps including borderline structure. Associations may be those felt at the time or new ones stirred by recounting; either is rich." },
        { type: "pearl", title: "The tense shift", text: "Notice 'What else are you feeling in the room?' A [[Present-tense shift|move from past to present tense]] can produce a mild regression in which images become more real and less memory-derived, unlocking repressed memory and affect, here an unexpected anger at a cool, distant mother. Do not use it with a patient who cannot tolerate regression, such as an unstable or psychotic patient. Phenomenological inquiry need not be sensory; attitudes, opinions, recollections, and feelings shared as they arise in the dyad are entrances too." }
      ],
      practice: [{ kind: "practice", id: "c6p6", label: "Practice: phenomenological inquiry" }]
    },

    {
      id: "wellness",
      title: "What deepens: the wellness triad",
      lede: "Patients present their weaknesses. It is easy, and costly, to lose sight of what is right with them.",
      blocks: [
        { type: "p", text: "Client-centered counseling and person-centered medicine have long insisted on uncovering and maximizing the patient's inherent strengths. Beside the presenting problem, Shea looks for [[Presenting solutions]], what the patient has already tried that helped at all, to draw on in collaborative planning. Positive psychology (Seligman, Peterson, and others) maps happiness, resilience, and strength much as diagnostic systems map pathology, and the two approaches balance each other. Shea's three markers of wellness, the [[Wellness triad]], are strengths, skills, and interests. Each fleshes out the person and may suggest treatment built on attributes already present." },
        { type: "p", text: "A reassurance first. No one can cover all the wellness questions, or all the regions in this book, in one intake, and no one should try; much of this belongs to ongoing therapy, and in a busy clinic the initial interview may only touch it. Omissions are inevitable; the point is that they be chosen rather than left to chance. Assessment is ongoing in every session, ending only with the soft click of the door at the last one." },
        { type: "p", text: "Strengths are generalized character traits, and both parties tend to overlook them. Peterson and Seligman's [[VIA Inventory of Strengths]] lists twenty-four in six families: knowledge (creativity, curiosity, love of learning, perspective, open-mindedness), courage (bravery, persistence, integrity, vitality), humanity (love, kindness, social intelligence), justice (citizenship, fairness, leadership), temperance (forgiveness, humility, prudence, self-regulation), and transcendence (appreciation of beauty, gratitude, hope, humor, spirituality). A free 240-item self-assessment exists online for ongoing work. For the interviewer the list is a lens: it helps you see the bravery and persistence not only of the deployed soldier but of the spouse in front of you holding the family together under daily dread, strengths the patient may have lost sight of too." },
        { type: "list", items: [
          "Explore and acknowledge at once: 'However do you find the toughness to keep everything going at home while every day you fear he could be killed? It's really quite remarkable.' There is much to learn if the answer is 'I've never viewed myself as tough.'",
          "Or file the strength and return it in the closing, where a genuine compliment surprises, feeds planning ('How could we tap your ability to organize so well as we plan for your burnout?'), and ends the hour on a positive note that makes a next hour likelier.",
          "Ask directly when there is time: 'When you look at yourself, what would you view as some of your best strengths?' 'What would your wife (partner, best friend, boss) say they are?'",
          "For patients or cultures that find self-praise awkward, Biswas-Diener's local-culture statement: 'I know it may feel strange, like bragging, but I won't take it that way. I'm genuinely interested in what you do well.'"
        ] },
        { type: "p", text: "[[Patient skill|Skills]] are specific, teachable abilities aimed at goals: creative (music, art, mathematics, writing, web and game design), task-related (problem solving, organizing, selling, financial planning), interpersonal (listening, comforting, nurturing, teaching, reading people, public speaking, social networking), athletic (a sport, coaching, conditioning, yoga, martial arts), manual (carpentry, gardening, precision work), and career training. Unlike strengths, skills are easy to raise, because the social history already asks about school and work. 'We all vary in the skills we have. What would you say are some of yours?' and, if hesitant, 'What would your friends, teachers, or family say?' The region opens onto self-esteem, secret ambitions, lost dreams, defenses, and the pressure of others' expectations." },
        { type: "case", title: "Jamal", text: "Summarized from the chapter. A tall young Black college graduate with styled dreadlocks, seven months into a fruitless job search in a recession, depressed, strapped for rent with his girlfriend. The clinician first makes an implicit strength explicit: his tenacity in looking is evident, and many who sit in that chair lack it. Then, with humor and a straight face: we all have things we are skilled at and a few we are terrible at; for fun, what are you remarkably terrible at? Singing, it turns out (American Idol is out), but he was a pretty good drummer, won competitions in high school, and truth be told wanted to make it as a studio drummer. His father offered to support a year or two of trying. What stopped him? He does not know; fear of failure, maybe. The clinician turns the question toward the future (the world still needs drummers), notes how his face lit up, wonders whether drumming might help the depression, and whether tutoring a kid could help the rent. Four minutes: a skill uncovered, the alliance strengthened, competence demonstrated, a psychodynamic thread opened, and collaborative planning begun." },
        { type: "p", text: "Interests, hobbies, and pastimes are how a person spends unobligated time, and like the decoration of a house they reflect both who the person is and how they wish to be seen; defenses are at work beneath them. 'What types of photos do you like to post?' can reveal a need for recognition when the answer is a steady stream of accomplishments and purchases. Hobbies become identities (biker, goth, athlete) and refuges (the back room of the comic shop for the outsider in the hallways). The same hobby can demand social skill or allow escape from it: the card collector may hole up alone or haggle happily at shows, the gamer may play solo or seek a party of friends, family, or strangers, so ask how this patient pursues it before assuming. Interests also suggest plans the patient has not thought of, as Jamal's drumming did, or as a web-comfortable patient with OCD might use an online support community, or a frightened suicidal patient might use a crisis chat line rather than a phone." },
        { type: "p", text: "Raise it plainly: 'When you're not working, how do you like to spend your time?' 'Do you have hobbies, sports, things you really like to do?' And when the hobby is unusual, a gentle command with real curiosity ('Tell me more about that, I'm not familiar with it') can break the ice in a lukewarm interview." }
      ],
      practice: [{ kind: "practice", id: "c6p4", label: "Practice: making a strength explicit" }]
    },

    {
      id: "culture-glasses",
      title: "Culture: the glasses we all wear",
      lede: "We do not interview patients alone. We interview cultures, through our own.",
      blocks: [
        { type: "p", text: "Richard Shweder: culture and psyche make each other up. A person does not exist outside the culture that formed them, and a culture does not exist without its people; Kitayama and Cohen call this [[Mutual constitution]], and it means culture is not a thing out there nor the psyche a thing in the brain, but two sets of processes attuned to each other. So we cannot understand the person beneath the diagnosis without the culture still shaping them, and we cannot plan treatment without the culture they return to, which may doom any plan that ignores it, as Jennifer's family nearly did. Both the patient's and the clinician's cultures shape concerns, symptoms, even diagnoses, and the interview unfolds at their interface, changing both participants and, subtly, the culture itself. Chapter 20 takes up culturally adaptive interviewing in full; this chapter introduces two arenas, misperception and treatment planning." },
        { type: "p", text: "Franz Boas's [[Kulturbrille]] are the cultural glasses each of us wears at all times, lenses that clarify and distort. Where parataxic distortions come from the unconscious of the individual, kulturbrille distortions come from the unconsciously absorbed biases of a culture, and they run in both directions, as invisible as contact lenses. Unrecognized, they damage engagement, understanding, planning, and help." },
        { type: "table", head: ["Cultural tendency (a tendency, never a rule for an individual)", "How a naive clinician may misread it"], rows: [
          ["A more relaxed relation to time, as some Native American patients may hold, attuned to the turning of a day rather than a clock", "Lateness read as resistance or irresponsibility; the clinician's insistence on fifty minutes and exact appointments read by the patient as pushiness, 'more interested in time than me'"],
          ["Reluctance to voice disagreement with a respected figure, as many (not all) Asian and Asian American patients may feel at a first meeting", "The mildest possible 'yes' to a recommendation, which in the patient's culture signals a probable 'no,' heard as agreement; at the next visit the patient seems ambivalent, unmotivated, or deceitful"],
          ["Lowered, infrequent eye contact as deference to an elder or professional", "Poor blending, shyness, lack of confidence, or 'attitude' in an adolescent"]
        ] },
        { type: "p", text: "All the largest subcultures in the United States prize trustworthiness and keeping one's word, and so do clinicians of every background. The misperception arises where that shared value meets differing norms for expressing disagreement: the patient who gave a soft yes out of respect is later judged untrustworthy for not doing what he 'agreed' to. The lesson is not a catalogue of group traits but a habit: let known tendencies generate questions and checks ('How does this plan actually sit with you?'), never conclusions about the person in front of you." }
      ],
      practice: [{ kind: "sim", id: "sim-wedding", label: "Interview: The cousin's wedding (culture and the quiet yes)" }]
    },

    {
      id: "culture-planning",
      title: "Culture and treatment planning: roadblocks, resources, and Anna's mother",
      lede: "Culture sets the standards for what is, what can be, how one feels about it, and what to do.",
      blocks: [
        { type: "p", text: "Goodenough's definition of culture, standards for deciding what is, what can be, how one feels about it, what to do, and how to go about it, explains why patients arrive as agents of change shaped by culture. The limits fall on clinicians too. We walk in with biases: for or against medication, for CBT or psychodynamic work, for or against involving families, open or closed to alternative therapies. We are entitled to them, but they can distort what we hear, so that we notice the data supporting our preferred intervention and miss one that is new to us yet central to the patient's subculture. Even the validity of the database depends on spotting these kulturbrille distortions." },
        { type: "list", items: [
          "Where shamans or medicine people matter (the Hmong, Native American and First Nations communities), ask: 'Have you talked to a shaman about your problems? What were his opinions?' The answers may contain interventions the patient is already inclined to pursue, and respectful discussion metacommunicates that the clinician is not narrow or bigoted, which powerfully secures engagement. If the patient wishes, invite the shaman to consult on the plan.",
          "After brainstorming a plan in the closing: 'What do you think your shaman will think of our plan?' Better to learn of a cultural roadblock now than after the patient has gone home and decided against it.",
          "Where decisions belong to the family rather than the individual, as some Asian American patients hold, involve the family early. With almost any young Asian American patient: 'What do you think your parents will think of our ideas?'",
          "Where the father traditionally heads the family, as in many Latino cultures: 'What do you think your father will think of this treatment?' A father's opposition can be intense, and the patient's own choice may need considerable support."
        ] },
        { type: "p", text: "Culture is not only a roadblock. Clergy and key family members can advocate for interventions the patient, and even the culture, distrusts. A patient lost in psychosis may accept a life-saving antipsychotic not from a clinician of another culture but from a trusted figure within their own." },
        { type: "case", title: "Anna and her mother", text: "Summarized from the chapter. Anna, twenty-four, African American, admitted after her first break of schizophrenia, piercing and frightened eyes, a colorful shawl wrapped like armor against demonic voices and fears of possession. She refuses medication. Her mother is the minister of their Pentecostal church, fluent in tongues and exorcism, and Shea expects her to oppose both diagnosis and antipsychotic. In a session alone with the mother, each shares and listens. She has already performed an exorcism; Shea asks about its effect, about Anna's behavior since, about other possessions and exorcisms she has seen and what she expects for the future. After she has spoken at length, she asks what he thinks. He describes schizophrenia, the brain and neurotransmitters, and the subtle prodrome (withdrawal, poor sleep, wariness, agitation, moments lost in thought), and she nods with the quiet 'hmmm' of recognition. Could he help, if this is what it is? Later: 'I'm not so sure she's possessed. It's not like any possession I've ever seen.' At the door: she agrees it is probably what he calls schizophrenia, but he should know that Satan causes it; he is always behind our suffering. She smiles and leaves. She persuades Anna to try the medication; Anna remits within a month and stays well, and her mother keeps her from services 'until God has healed the chemistry of your brain.'" },
        { type: "p", text: "Two cultures met, both saved face, both joined forces. Shea believes his openness and respect for her beliefs and her past healing set the tone for hers, though no one can be sure. What he is sure of is that for twenty minutes two people took off their cultural glasses and saw that they shared a mission. Some of the most important cultural interviews are not with our patients but with the people who love them, and it was Anna who gained most from the clearer vision." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The two full Jennifer scenarios and the cross dialogue, Figure 6.1 (the interview map with its two arrows), the Sullivan and Dunn quotations on parataxic distortion and intersubjectivity, the complete candlelit-room inquiry, the full VIA strengths and skills lists, the whole Jamal exchange with Shea's annotations, and the Anna narrative in Shea's own voice." },
    { title: "Chapters this one connects to", text: "Chapters 1 and 2 for engagement, blending, and genuineness; Chapter 3 for the negative statement of inquiry; Chapter 4 for presenting solutions and the observed gate; Chapter 5 for validity, the behavioral incident, and cannon questions; Chapter 7 for the assessment perspectives (DSM-5, matrix treatment planning, core pains) that complement understanding; Chapter 14 for borderline structure; Chapter 20 for culturally adaptive interviewing, worldview, and spirituality." },
    { title: "Sources Shea draws on", text: "Sullivan's The Psychiatric Interview and interpersonal theory; Ogden and Dunn on intersubjectivity; Whitehorn's 1944 guide to interviewing; Rollo May's Existence and Medard Boss's Daseins-analysis; Seligman and Peterson's Character Strengths and Virtues and the Authentic Happiness site; Biswas-Diener on positive psychology coaching; Shea's own Happiness Is; Boas on kulturbrille; Kitayama and Cohen's Handbook of Cultural Psychology; Goodenough on culture; the Sommers-Flanagans on Asian American and Latino cultural considerations." }
  ]
};
