/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 13: Personality Disorders: Before the Interview Begins – Core Concepts
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch13 = {
  chapter: "ch13",
  intro: "Chapter 13 opens the three chapters on personality disorders, and unlike the mood and psychosis chapters it has no parade of cases. It is the theory you need before you interview: what a personality disorder is, why the diagnosis lives in the history rather than in the room, how labels harm and how they help, and where personality comes from. Shea starts with a quotation from an old occult encyclopedia that read character in the shape of the hand, a reminder that humans have always classified one another, sometimes foolishly. Then he introduces Mr. Fellows, a man who insulted him within minutes and wept at their last session twelve weeks later, and uses him to make the chapter's central point: nobody chooses a personality disorder. Rigid defenses that once protected against pain go on to manufacture new pain. Chapter 14 turns these ideas into interviewing technique, and Chapter 15 explains the psychodynamics. The practice items and the simulation 'Tracks in the snow' are built on this chapter and the next.",

  highYield: {
    mustKnow: [
      "A personality disorder is a set of defenses that once protected the person from pain, has become rigid and limited in number, and now creates new pain: lost friends, broken marriages, blown jobs. The coolness that shields Mr. Fellows from rejection also ensures he never gets close enough to be loved. He did not choose this; it grew in him from his environment, his pain, and his limits.",
      "Seeing obnoxious behavior as a response to pain is a clinical tool, not sentimentality. It lowers angry [[Countertransference]] and raises compassion, which is what keeps the patient coming back.",
      "The DSM-5 general definition: an enduring pattern of inner experience and behavior that deviates markedly from the expectations of the person's culture, shows in at least two of cognition, affectivity, interpersonal functioning, and impulse control, is inflexible and pervasive, causes distress or impairment, is stable with onset by adolescence or early adulthood, and is not better explained by another mental disorder, a substance, or a medical condition.",
      "A personality disorder is a [[Historical diagnosis]]. Behavior in the interview gives clues, but the criteria are met by evidence that the pattern goes back to adolescence or early adulthood and has persisted without major interruption.",
      "The history is in the social history. Shea likens it to a snowfield with the tracks of the personality written across it: parents, siblings, dating, marriage, work, friendships. An accurately reported, entirely normal social history is not consistent with a personality disorder.",
      "Ego-syntonic patterns don't trouble the patient but harm others (the person with antisocial traits who empties a trusting employer's savings). Ego-dystonic patterns hurt the patient (the self-imposed exile of avoidant personality). Many patients have both, and syntonic patterns can become dystonic as the costs pile up.",
      "Patients whose problems are mostly ego-syntonic often come because someone else sent them (family, lawyer, employer) and are hard to engage. As a triage or consulting interviewer, think about assigning them to an experienced clinician rather than a trainee.",
      "Personality diagnoses are fictions. There are no 'borderlines' or 'narcissists', only people whose patterns fit clusters that professionals have named. As labels they carry four dangers ([[Label theory]]): stereotype, stigma, oversimplification, and permanence.",
      "Oversimplification can be dangerous. Rising grandiosity in a patient with narcissistic personality disorder may be the first sign of a manic episode. Ask whether this is the person's usual pattern or something new.",
      "People grow out of personality disorders, through therapy or time. When you take over a patient who already has the diagnosis, do your own differential: respect the previous clinician's diagnosis but don't simply adopt it, and move outgrown diagnoses to the past history.",
      "Used well, the diagnosis helps in eight ways. It points to a psychotherapy (for example [[Dialectical behavior therapy]], [[Mentalization-based therapy]], STEPPS, transference-focused, or schema therapy for borderline personality disorder). It suggests medication: low-dose antipsychotics in schizotypal personality disorder, and mood stabilizers or some antipsychotics for impulsivity, anger, and mood in borderline personality disorder. It shapes how you discuss treatment, guides engagement, warns of therapeutic missteps, opens up the psychodynamics, connects you to the literature, and makes research possible.",
      "Tailor the conversation to the personality. A patient with obsessive–compulsive traits wants the details, the reading, the structure, and often CBT. A patient with histrionic traits who hated homework may do better hearing from a fellow patient and with a narrative or psychodynamic model. A patient with narcissistic traits should not be challenged prematurely, because the [[Narcissistic insult]] becomes a no-show.",
      "The leaving clinician: if you are rotating out in six months and you do not recognize a borderline personality disorder early, you may build an intense dependency that ends as an abandonment, with suicidal behavior a real risk. Recognize it in the first or second interview and refer to someone who can stay.",
      "[[Map and terrain]]: a personality diagnosis is a map. It tells you where the water and the hazards are, which engagement moves create safety, which treatments to consider, and what problems to expect. It tells you nothing about what it is like to be this person. A diagnosis may take one session; understanding takes many.",
      "Where personality comes from: every wing of the matrix, each shaping the others. [[Temperament]] (Thomas and Chess) is visible in infancy, personality is fairly settled by school age, and personality traits, normal and disordered, are about 50% heritable. The family and society wings can then amplify a biological vulnerability, as with Khalid, or create one, as childhood maltreatment leaves [[Limbic scars]]."
    ],
    pitfalls: [
      "Diagnosing a personality disorder from behavior in a single interview (a rude patient, a dramatic one) without the historical evidence that the pattern dates back to adolescence or early adulthood.",
      "Taking the social history as a list of dates and jobs, and missing the tracks: how each job ended, why relationships failed, whether any friendship has lasted.",
      "Taking a patient's devaluation personally and defending yourself, which confirms that you are like everyone else who has rejected them.",
      "Reacting to a label in the referral ('borderline, very difficult') before meeting the person, or saying 'not another borderline' at the nurses' station.",
      "Treating everyone with the same diagnosis as the same patient, for example never referring anyone with antisocial personality disorder to individual therapy because 'they don't benefit.'",
      "Attributing every new symptom to the known personality disorder and missing a first manic episode, a depression, a substance problem, or a medical illness.",
      "Inheriting a personality diagnosis without re-examining it, and leaving an outgrown diagnosis on the active list for good.",
      "Starting long-term individual therapy with a patient who has borderline personality disorder when you will leave in a few months.",
      "Prescribing homework-heavy CBT to someone who loathes structure, or long open-ended storytelling to someone who craves structure, without asking how this person learns and decides.",
      "Mistaking the map for the terrain: believing that knowing the diagnosis means knowing the person."
    ],
    phrases: [
      { say: "It sounds as if the group didn't feel like the right place for you. Tell me what didn't work, so I don't repeat it.", when: "Responding to devaluation of a previous clinician without defending the colleague or arguing; the patient is invited to teach you. Composed." },
      { say: "Tell me about your last job. How did it end? And the one before that?", when: "Reading the social history for tracks: patterns of how things end matter more than the dates. Composed." },
      { say: "Do you have friends you've known for a long time? What usually happens to friendships for you?", when: "Probing for the interpersonal tracks of a personality disorder without accusation. Composed." },
      { say: "You mentioned he's more grandiose than usual this week. Is this his ordinary pattern, or something new? How has he been sleeping, and has his energy changed?", when: "Refusing the oversimplified answer: a change in a stable pattern may be a new illness, such as an emerging mania. Composed." },
      { say: "I know you like to look at things carefully. Here's a handout on the pros and cons of this medicine, and a website that isn't selling anything. Let's decide together after you've read it.", when: "Tailoring a medication discussion to a patient with obsessive–compulsive traits. Composed." },
      { say: "You have a fascinating story, and I'd like to hear more of it next time.", when: "A closing line that helps ensure a second interview with a patient who has histrionic traits." },
      { say: "I've read the referral note, but I'd rather hear it from you. What's been happening?", when: "Meeting a patient who arrives with a label, and making your own assessment. Composed." }
    ]
  },

  sections: [
    {
      id: "gestalt",
      title: "Mr. Fellows: what a personality disorder feels like from both chairs",
      lede: "Defenses that once protected and now wound, the reframe that keeps you compassionate, and the child inside the adult.",
      blocks: [
        { type: "p", text: "Shea's opening quotation is from an occult encyclopedia that read a 'passionate character' in a thick, fleshy hand. Palm reading of this kind (cheirology) has been retired to the museum, but the urge it reflects, to classify one another, is as alive as ever. Personality theory has advanced a great deal and still has much to learn, and assessing personality well means knowing the limits of our categories and the controversies around them. Because the DSM-5 lists ten personality disorders, these chapters don't give each one its own case. Shorter illustrations carry principles that apply to any personality disorder: Chapter 13 covers the concepts, Chapter 14 the interviewing technique, and Chapter 15 the psychodynamics." },
        { type: "case", title: "Mr. Fellows", text: "Summarized from the chapter. Referred for outpatient therapy after an emergency visit, Mr. Fellows had quit group therapy after two sessions because the therapist was 'inexperienced' and listened too much to the 'screwball people.' He arrived in a dirty plaid shirt and an army jacket, fidgeting with a battered cap, with a handshake that was crushing and then limp. He grew up in a tough neighborhood where he never belonged ('I'm a sensitive guy'), had a very high IQ, argued with teachers, and was a loner. He opposed violence and crime but carried pepper spray to protect himself and others, and admitted to past drinking problems. His father beat him and called him a failure; he had lost touch with most of his family and was unwelcome in their homes. He considered himself a gifted writer and had been working on a novel for years. He had a lifelong habit of 'finding the nearest argument' and dominating conversations because he was smarter than most people. Within minutes he dismissed his previous therapist as a loser, said he didn't need help, said psychotherapists don't know what they're doing, and asked only for a letter getting him moved to a safer halfway house. At the next session, told that more evaluation was needed first, he said he hoped someday Shea would be murdered while the police insisted on further inquiry before responding. Shea felt a twinge of fear. Further interviewing showed narcissistic personality disorder with antisocial, borderline, and paranoid traits, plus intermittent alcohol problems." },
        { type: "p", text: "Therapy uncovered what lay beneath: a lifelong sense of vulnerability and one question he could never shake off, 'Am I really worth loving?' To protect himself from that pain he developed entitlement, put-downs, grandiose fantasies, and an interpersonal coolness that kept rejection at bay, a rejection that had first arrived as his father's beatings. This is how a disordered personality works. Defenses that once protected the person, at certain times and in certain places, become rigid and few. The person is left with a [[Defensive structure]] that is inflexible, often fails to reduce pain over time, and creates new pain of its own. Mr. Fellows's coolness may protect him from losing someone he loves, but it also ensures he never forms that relationship. He does not know another way to function, and that is the tragedy. His loneliness and self-loathing can be enormous. He did not choose a personality disorder; it grew in him out of his environment, his pains, and his psychological limits." },
        { type: "pearl", title: "The reframe is a clinical tool", text: "Seeing irritating and sometimes frankly obnoxious behavior as a response to pain and anxiety lowers angry countertransference and raises compassion. The Mr. Fellows who wished Shea murdered cried with a sense of loss at the end of their time-limited therapy, twelve sessions after the first handshake." },
        { type: "exchange", title: "Not taking the bait", lines: [
          { who: "Pt.", t: "Honestly, the last guy was useless. I don't think any of you know what you're doing. I just need a letter for the housing office." },
          { who: "Clin.", t: "It sounds as if the group really didn't work for you. What was it about it that didn't fit?", tag: "non-defensive; neither defending the colleague nor agreeing" },
          { who: "Pt.", t: "He let everyone ramble. I sat there for an hour listening to nonsense." },
          { who: "Clin.", t: "So time matters to you, and you want to get somewhere. Let's make sure today counts. Tell me about the housing problem, and then I'd like to understand a bit more about you, so that whatever I write is accurate.", tag: "agrees with what can be agreed, and links the request to the assessment" },
          { who: "Pt.", t: "Fine. But I'm not here for therapy." },
          { who: "Clin.", t: "Fair enough. Let's start with what you came for." }
        ], note: "Composed. The clinician doesn't argue, doesn't defend the previous therapist, and doesn't promise the letter. He finds the legitimate need inside the hostility and builds on it." },
        { type: "p", text: "Mr. Fellows also illustrates a point that is easy to miss. Adult psychopathology makes sense only in light of childhood and adolescent development; adults don't appear from nowhere at eighteen. Many important therapeutic interactions mirror parent–child behavior and feelings, and patients with personality disorders can stir parental responses in the clinician even in the first interview. An interviewer who isn't aware of this can disrupt the alliance without knowing why." }
      ],
      practice: [{ kind: "practice", id: "c13p1", label: "Practice: non-defensiveness with devaluation" }]
    },

    {
      id: "definition",
      title: "The DSM-5 definition, and why the diagnosis is historical",
      lede: "The general criteria, and what they mean for where you look.",
      blocks: [
        { type: "p", text: "The DSM-5 describes a [[Personality disorder]] (once often called a character disorder) as an enduring pattern of inner experience and behavior that deviates markedly from the expectations of the individual's culture, is pervasive and inflexible, begins in adolescence or early adulthood, is stable over time, and leads to distress or impairment. The general criteria apply to every specific personality disorder." },
        { type: "table", head: ["Criterion", "What it requires", "What it means in the interview"], rows: [
          ["A", "A pattern that deviates markedly from cultural expectations, in at least two of: cognition (how self, others, and events are perceived and interpreted), affectivity (range, intensity, lability, appropriateness of emotion), interpersonal functioning, impulse control", "Know the patient's culture before calling anything deviant (the kulturbrille of Chapter 6)"],
          ["B", "Inflexible and pervasive across a broad range of personal and social situations", "Look for the same pattern at home, at work, with friends, and with strangers, not only in one relationship"],
          ["C", "Clinically significant distress or impairment", "Either the patient suffers (ego-dystonic) or the patient's life and others are damaged (ego-syntonic)"],
          ["D", "Stable, long-standing, onset traceable at least to adolescence or early adulthood", "The heart of the historical diagnosis: date the pattern"],
          ["E", "Not better explained by another mental disorder", "Rule out mania, depression, psychosis, PTSD, and the rest; a change in a stable pattern suggests a new illness"],
          ["F", "Not due to a substance or medical condition (e.g., head trauma)", "Ask about drugs, alcohol, medications, head injury, and neurological illness"]
        ] },
        { type: "p", text: "Because the DSM-5 requires the pathological feelings and behaviors to be consistent and persistent over time, a personality disorder is a [[Historical diagnosis]]. The deciding criteria lie in the patient's history, not in how the patient behaves in the interview. What happens in the room often gives important clues, as Mr. Fellows's hostility did, but the diagnosis rests on evidence that the pattern goes back to adolescence or young adulthood. A personality disorder leaves historical artifacts, and they are usually buried in the social history." },
        { type: "pearl", title: "One interview is a sample, not a history", text: "Anyone can be rude, dramatic, clingy, or suspicious on a frightening day in an emergency department. What makes a personality disorder is that the same pattern runs through the person's life from early on, across settings, without major interruption. In the interview, look for the clues; in the history, look for the proof." }
      ],
      practice: [{ kind: "quiz", id: "ch13", label: "Quiz: Chapter 13" }]
    },

    {
      id: "social-history",
      title: "Tracks in the snow: reading the social history",
      lede: "Ego-syntonic and ego-dystonic patterns, what they mean for engagement, and why a normal social history rules a personality disorder out.",
      blocks: [
        { type: "p", text: "The historical artifacts take one of two forms, or both. Either the person's rigid defenses produce behavior and consequences that disturb other people, or they produce behavior and consequences that disturb the person. [[Ego-syntonic]] behaviors don't trouble the patient: someone with an antisocial personality may steal the life savings of an employer who trusted him completely, with no regret, and the damage falls on the employer. [[Ego-dystonic]] behaviors hurt the patient and are seen by the patient as a problem: someone with an avoidant personality may shun almost all contact and live in self-imposed exile, harming no one but suffering greatly. Many patients show both, and syntonic behavior can become dystonic as the person begins to see what it is costing them." },
        { type: "compare",
          a: { title: "Mostly ego-syntonic", items: [
            "The pattern doesn't bother the patient; it bothers others",
            "Often brought in by family, a lawyer, or an employer",
            "Little investment in help; hard to engage in the first interview and in therapy",
            "As a triage or consulting interviewer, consider an experienced clinician rather than a trainee for ongoing care"
          ] },
          b: { title: "Mostly ego-dystonic", items: [
            "The pattern causes the patient distress and is seen as a problem",
            "More likely to seek help on their own",
            "Engagement often easier; the suffering is the starting point",
            "Look for depression, anxiety, and suicide risk alongside the personality pattern"
          ] }
        },
        { type: "p", text: "Whatever their form, the manifestations of a personality disorder show up as recognizable dysfunctional patterns with parents, siblings, dates, spouses, employers, and friends. To an experienced interviewer, Shea says, the social history is a snowfield, and the personality's tracks cross its surface. The social history is not a sterile record of which job was held when; it is a mirror in which a personality disorder may first appear. Put more boldly: a completely normal social history, accurately reported, is not consistent with a personality disorder, because somewhere along the line the pathological traits will have disrupted relationships. In the initial interview this means actively looking for consistent patterns from adolescence or early adulthood onward, without major interruption. Mr. Fellows's history was littered with weak relationships, a poor work record, endless arguments, and maladaptive grandiosity, all consistent over time and clearly set by late adolescence." },
        { type: "exchange", title: "Following the tracks", lines: [
          { who: "Clin.", t: "Tell me about your work. Where are you now, and how long have you been there?" },
          { who: "Pt.", t: "Eight months at a call center. Before that a hardware store, before that a bank." },
          { who: "Clin.", t: "How did the hardware store job end?", tag: "how things end, not only when" },
          { who: "Pt.", t: "The manager had it in for me. Same as at the bank, actually. I called him out in front of everyone." },
          { who: "Clin.", t: "Has that happened at other places too, a boss who seemed to have it in for you?" },
          { who: "Pt.", t: "Pretty much everywhere. People get threatened when you're smart." },
          { who: "Clin.", t: "And outside work, friends? Is there anyone you've known for a long time?", tag: "checking whether the pattern is pervasive" },
          { who: "Pt.", t: "Not really. People drift off." }
        ], note: "Composed. Three jobs, three bosses who 'had it in' for him, few lasting friendships: a track worth following back to adolescence. It is a clue, not yet a diagnosis; Chapter 14 shows how to confirm or rule out the pattern." }
      ],
      practice: [{ kind: "practice", id: "c13p2", label: "Practice: reading the social history" }, { kind: "sim", id: "sim-tracks", label: "Simulation: Tracks in the snow" }]
    },

    {
      id: "label-theory",
      title: "Labels that harm: stereotype, stigma, oversimplification, permanence",
      lede: "Why every personality diagnosis is a fiction, and the four ways it can hurt a patient.",
      blocks: [
        { type: "p", text: "The first thing to understand about personality diagnoses in every system, DSM or ICD, is that they are fictions. There are no 'borderlines' and no 'narcissists.' There are people whose thoughts, feelings, and behaviors fit patterns that groups of professionals have identified, classified, and named. As fictions they are labels, and the dangers described by [[Label theory]] apply with special force." },
        { type: "table", head: ["Danger", "What it looks like", "The antidote"], rows: [
          ["Stereotype", "Deciding that everyone with the diagnosis is alike; for example, never referring anyone with antisocial personality disorder to individual therapy because 'they don't benefit,' when some do", "One size does not fit all; assess the person in front of you"],
          ["Pejorative label", "Therapists who suddenly 'have no room' once a caller mentions borderline personality disorder; 'Oh God, not another borderline' in the emergency department; strong countertransference provoked by the label alone", "Admit the bias most of us carry; don't apply these labels unless the criteria are clearly met"],
          ["Oversimplification", "Attributing every problem to the label: rising grandiosity in narcissistic personality disorder read as 'just his narcissism' when it is the start of a first manic episode, left untreated until too late", "Ask whether the change departs from the person's usual pattern; screen for mood, substances, and medical causes"],
          ["Permanence", "A diagnosis that follows the patient for life, even after therapy or time has transformed the pattern", "Re-evaluate; move an outgrown diagnosis to the past psychiatric history"]
        ] },
        { type: "p", text: "Because people can outgrow personality disorders, a clinician who takes over a patient already carrying one should, if trained to make differential diagnoses, make their own. The diagnosis may be outdated. Respect other clinicians' diagnoses without automatically agreeing; even the best diagnostician makes mistakes or has a bad day. Personality diagnoses carry great weight and should be routinely re-evaluated." },
        { type: "exchange", title: "A label in the referral", lines: [
          { who: "Nurse", t: "Your next one's in room 3. The referral says 'borderline, very difficult.' Good luck." },
          { who: "Clin.", t: "Thanks. Do you know who made that diagnosis, and when?", tag: "checking the source before accepting it" },
          { who: "Nurse", t: "An ER doctor, last year, after one visit." },
          { who: "Clin.", t: "(entering) Good morning. I've read the referral, but I'd rather hear it from you. What's been happening?", tag: "a fresh start, and her own assessment" }
        ], note: "Composed. One emergency visit is not a history. The clinician notices her own reaction to the label, finds out where it came from, and lets the patient tell her story first." },
        { type: "p", text: "After so many cautions, should we use personality diagnoses at all? Shea's answer is a simple yes, because used appropriately they help people a great deal." }
      ],
      practice: [{ kind: "practice", id: "c13p5", label: "Practice: not slapping a label" }, { kind: "practice", id: "c13p3", label: "Practice: avoiding the oversimplified answer" }]
    },

    {
      id: "benefits",
      title: "Eight ways an accurate diagnosis helps",
      lede: "Choosing a therapy and a medication, talking about treatment, engaging the patient, avoiding missteps, understanding the psychodynamics, using the literature, and making research possible.",
      blocks: [
        { type: "list", items: [
          "It points to a psychotherapy. The clearest example is borderline personality disorder, for which several therapies appear more effective: [[Dialectical behavior therapy]], [[Mentalization-based therapy]], STEPPS (systems training for emotional predictability and problem solving), transference-focused psychotherapy, and schema-focused therapy. Recognizing the disorder and referring to the right therapy and the right therapist (someone trained for and comfortable with this work) can be pivotal to recovery and, where suicide is concerned, life-saving. Even in a limited number of sessions, knowing the personality helps you pick the approach most likely to work for this person, as a teacher matches visual, verbal, or experiential learners.",
          "It suggests medication. People with schizotypal personality disorder sometimes benefit greatly from low-dose antipsychotics combined with supportive therapy and psychoeducation, and where the schizotypal pattern is a prodrome of schizophrenia, treatment may someday be shown to soften or prevent it. In borderline personality disorder the research is inconclusive but promising: mood stabilizers most consistently help impulse control, anger, anxiety, mood, and global functioning, and some antipsychotics, such as olanzapine, may reduce aggression and irritability.",
          "It shapes how you talk about treatment (see below).",
          "It guides engagement, including the closing (see below).",
          "It helps you avoid therapeutic missteps, such as the leaving clinician's (see below).",
          "It complements psychodynamic understanding. Shea finds that patients who meet DSM criteria for a disorder later show the psychodynamics classically associated with it (a patient with DSM borderline personality disorder later shows [[Splitting]] and a lack of object constancy). The psychodynamic frame, developed in Chapter 15, makes self-cutting and rage more understandable and more predictable, and the DSM gets you there faster.",
          "It opens the literature. Accurate diagnosis lets residents and experienced clinicians alike find the reviews, web resources, and supervisors that help with the hardest therapeutic dilemmas.",
          "It makes research possible. A study showing that a therapy works for 'borderline' patients is useless unless the researcher means the same thing by the word as you do. A reliable diagnostic system is how the field gains new tools."
        ] },
        { type: "p", text: "No medication works inside the bottle, and no psychotherapy works if the patient doesn't buy into it. Schizophrenia, bipolar disorder, and depression don't occur in empty shells; they occur in people with distinctive personalities, who will each understand and cope with the illness, and approach its treatment, in their own way. People process information, learn, and make choices differently, so Shea presents treatment options in the way that suits the patient's personality. Prescribers often have to discuss medication in the closing phase of a first interview, and an interviewer who has noticed the patient's style earlier in the hour has a much better chance of an open-minded discussion." },
        { type: "compare",
          a: { title: "Obsessive–compulsive traits", items: [
            "Loves details, direction, and assignments; often loved school",
            "Offer the patient education material on the pros and cons, or an unbiased website, and decide together afterwards",
            "Practically asking for a structured therapy such as CBT"
          ] },
          b: { title: "Histrionic traits", items: [
            "Dramatic, dislikes details and structure; school, tests, and homework may carry bad memories",
            "Offer a conversation with another patient who has taken the medication and found it helpful; stories persuade more than reading",
            "May find homework-based CBT or solution-focused therapy a poor fit, and do better with a time-limited psychodynamic or narrative model, a chance to 'tell their story'"
          ] }
        },
        { type: "p", text: "One of the most important goals of a first interview is to make sure there is a second, and that depends on how safe and comfortable the patient feels by the end. Recognizing personality traits helps. With a patient who has many narcissistic needs, avoid challenging too soon; an early challenge can be felt as a [[Narcissistic insult]] and become a no-show. With a patient who has histrionic traits, a closing line that says the story is fascinating and you look forward to hearing more next time may seal the next appointment." },
        { type: "case", title: "The clinician who is leaving", text: "Summarized from the chapter. Imagine a clinician six months from moving away, kept busy by the clinical director up to the last day. If this clinician doesn't make a personality differential early, or never makes one, a borderline personality disorder may be missed until a powerful dependency has formed. Had the diagnosis been made in the first or second interview, the right course would have been to refer to a therapist who is staying and can offer a stable, long-term relationship. Missed, there is a real chance that by six months the patient will be intensely dependent, despite promising 'don't worry, I won't get too attached,' and will experience the departure as an abandonment, with suicidal behavior or suicide possible. For residents on rotations, this is a daily consideration." },
        { type: "exchange", title: "Tailoring a medication discussion", lines: [
          { who: "Pt.", t: "Before I agree to anything, I want to know exactly what this drug does, the side effects, the percentages." },
          { who: "Clin.", t: "That makes sense. You like to look at things carefully before deciding. I'll give you a handout with the benefits and side effects, and the name of a site that isn't selling anything.", tag: "matching the patient's style" },
          { who: "Pt.", t: "And the studies?" },
          { who: "Clin.", t: "I'll include the main ones. Let's meet again next week once you've read them and go through your questions one by one. Then we'll decide together." }
        ], note: "Composed. With a meticulous patient, information and structure build trust. The same pitch to a patient with histrionic traits would land as homework." }
      ],
      practice: [{ kind: "practice", id: "c13p4", label: "Practice: tailoring a medication discussion" }]
    },

    {
      id: "map",
      title: "The map is not the terrain",
      lede: "Shea's metaphor for using personality diagnoses wisely.",
      blocks: [
        { type: "p", text: "Only a clinician who understands a diagnostic system's limits can use its benefits wisely, and Shea offers a metaphor. You and a friend, neither of whom has ever set foot in a desert, are to be dropped into one in the American Southwest for a survival weekend. Beforehand you would study a map: water, first aid, highways, even cell towers that could bring rescuers. The map could save your lives. But after hours with it, neither of you would say you now know what it is like to be in a desert. The only way to know that is to be there." },
        { type: "list", items: [
          "A personality diagnosis is a map. It can tell you which engagement techniques create safety (don't put a person with narcissistic traits on the spot).",
          "It can point to treatment (DBT for borderline process, an antipsychotic for schizotypal process).",
          "It can predict problems (over-dependency in someone with borderline process).",
          "It can save a life (by suggesting effective ways to help someone with borderline process through a suicidal crisis).",
          "It tells you nothing about the person beneath the diagnosis. For that you must listen, and listen, and listen."
        ] },
        { type: "pearl", title: "One session for the diagnosis, many for the person", text: "A personality diagnosis can sometimes be made in a single session; compassionate understanding takes many. As long as you never mistake the map for the terrain, the diagnosis for the person, these diagnoses can greatly improve engagement, care, and treatment." }
      ],
      practice: [{ kind: "quiz", id: "ch13", label: "Quiz: Chapter 13" }]
    },

    {
      id: "etiology",
      title: "Where personality comes from: the matrix and Khalid",
      lede: "Temperament and heritability, reciprocal matrix effects, and how trauma can change the brain.",
      blocks: [
        { type: "p", text: "Rather than rehearse the competing theories of etiology, Shea uses the matrix of Chapter 7 as a unifying frame. Every wing (biological, psychological, dyadic, familial, cultural and societal, and worldview) shapes the developing personality, each influencing and influenced by the others. Together they determine the anxieties and needs that give rise to a person's unconscious defenses and conscious coping strategies." },
        { type: "p", text: "In the biological wing, Thomas and Chess showed that infants have characteristic [[Temperament|temperaments]] that can persist into later life: intensity of reaction, activity level, attention span, threshold of response to stimulation, mood, and distractibility. Genes and intrauterine factors may contribute. Several studies suggest that by school age children often have a personality structure similar to the one they will show as adolescents and adults, and both normal and disordered personality traits are moderately heritable, usually estimated at about 50%. Nature clearly plays a major part, and it ripples outward from the biological wing with healing and damaging effects on the others." },
        { type: "case", title: "Khalid", text: "Summarized from the chapter, a hypothetical child. Khalid is born easily distractible. School is hard, and since he doesn't know why, he concludes he is a failure, and his self-esteem suffers. The same distractibility makes him seem disobedient at home. His parents are called in about his 'lack of effort' and 'clear underachievement'; frustrated, even capable parents begin to show displeasure and subtle rejection, which further tatters his self-worth, and perhaps a sibling becomes the apple of his father's eye, which Khalid does not miss. Add a family already steeped in psychopathology, a neighborhood hostile to his ethnicity or religion, or an alcoholic parent who beats him, and fear and agitation make concentration worse while marital arguments over his behavior intensify. Damaging matrix effects feed one another across the wings. The only question left is which defenses and compensatory traits will form to get him through, and those will shape his personality and, perhaps, his diagnosis." },
        { type: "p", text: "The process can also run the other way. A child with no biological attention problem, born into an abusive, alcoholic family, can develop personality problems of their own, including damage to the brain's attention systems. There is strong evidence that early childhood trauma causes lasting changes in limbic structures ([[Limbic scars]]): the family wing acting on the biological wing, with environment altering neurophysiology and perhaps even brain structure. An abused child develops defenses to keep anxiety bearable: becoming reclusive and timid, coming to see themselves as inferior and unwanted, keeping others at a distance to avoid rejection, or building grandiosity to shore up a fragile self-esteem. Perhaps, Shea suggests, this is how Mr. Fellows came to be." },
        { type: "pearl", title: "No single cause", text: "Arguing over which wing mattered most is largely pointless; the mix differs in every person. And most people, whatever their matrix, end up with a reasonably healthy personality. The chapters that follow concern those in whom an inflexible set of defenses emerges, as with Khalid and Mr. Fellows." }
      ],
      practice: [{ kind: "quiz", id: "ch13", label: "Quiz: Chapter 13" }]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The full account of Mr. Fellows, including his own words at the first and second sessions; the DSM-5 general criteria for personality disorder as reprinted in the chapter; Shea's discussion of the eight benefits of personality diagnosis in his own words; and the desert-map metaphor." },
    { title: "Chapters this one connects to", text: "Chapter 14 turns these concepts into interviewing technique: narrowing the differential, signal signs and symptoms, probe questions, and verifying that a pattern is persistent. Chapter 15 explains the psychodynamics of borderline, narcissistic, and other difficult personality disorders, including splitting and object relations. Chapter 7 for the matrix and matrix effects; Chapter 6 for culture and the kulturbrille; Chapter 2 for non-defensiveness with an angry or devaluing patient; Chapter 9 for the manic episode that oversimplification can miss." },
    { title: "Sources Shea draws on", text: "The DSM-5 general definition and criteria; Nelson and Schulz on treatment advances in borderline personality disorder; Ingenhoven's meta-analysis of pharmacotherapy for severe personality disorders; Linehan and colleagues on olanzapine with DBT; Thomas and Chess on temperament; Shiner and Tackett on personality development across the life span; twin studies of personality heritability (Bouchard and Loehlin; Jang and Livesley); Dannlowski on limbic changes after childhood maltreatment; and van der Kolk on biological responses to trauma." }
  ]
};
