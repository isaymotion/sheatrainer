/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 17: Exploring Suicidal Ideation
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch17 = {
  chapter: "ch17",
  intro: "This is the chapter you will use on call more than any other. Shea splits a suicide assessment into three tasks: gathering risk factors, warning signs, and protective factors; eliciting what the patient has actually thought, planned, rehearsed, and procured; and forming a judgment of foreseeable risk from both. Section 1 covers the first task through two contrasting patients. Section 2 teaches the second through the CASE Approach, which turns the validity techniques of Chapter 5 into a reliable, conversational way to hear the truth about suicidal intent. Read it slowly, then practice the four-step kick-start and the recent-events sequence out loud until they come without thinking, because you will need them at 3 a.m.",

  highYield: {
    mustKnow: [
      "Three tasks, three skill sets: gather [[Risk factor|risk factors]], [[Warning sign|warning signs]], and [[Protective factor|protective factors]]; elicit ideation, planning, behavior, desire, and intent; then formulate risk. The [[CASE Approach]] does only the second.",
      "No collection of risk factors predicts an imminent attempt. People die by suicide because they decided to, not because they fit a profile. Risk factors tell you to be tenacious, to call a [[Corroborative source|corroborative source]], and which specific questions to ask.",
      "[[Static risk factor|Static]] factors cannot change; [[Dynamic risk factor|dynamic]] ones are the targets for [[Matrix treatment planning|matrix treatment planning]]. Hunt for protective factors as deliberately as for risk.",
      "Three psychotic processes demand direct probing: [[Command hallucination|command hallucinations]], [[Alien control|alien control]], and hyper-religious preoccupation (the [[Abraham syndrome]]). Many suicides in schizophrenia come in a demoralized, relatively non-psychotic phase.",
      "Suicide is interpersonal: [[Thwarted belongingness|thwarted belongingness]] plus [[Perceived burdensomeness|perceived burdensomeness]], made lethal by [[Acquired capability for suicide|acquired capability]]. Evaluate the home the patient returns to, including a family's death wish, conscious or not.",
      "Up to 90% of suicides occur in people with a psychiatric disorder; mood disorders lead. Panic or severe anxiety on top of depression is a red flag. Hopelessness may predict better than depressive severity; feeling trapped and purposeless are the drivers named in [[IS PATH WARM]].",
      "[[Chronic suicide risk|Chronic risk]] (many factors over years) is not the same as immediate risk. The [[Tetrad of lethality|tetrad of lethality]] flags [[Foreseeable risk|foreseeable]] near-term danger: a recent serious attempt, dangerous psychosis, serious intent relayed or enacted, and the patient who denies everything because they mean to die.",
      "[[Equation of suicidal intent]]: real intent = stated + [[Reflected intent|reflected]] + [[Withheld intent|withheld]]. The planning, rehearsing, and procuring a patient has done speaks louder than the number they give you.",
      "Timing follows the [[Elicitation of suicidal ideation triad|elicitation triad]]: sound engagement, intense emotional involvement in the pain through one of three [[Affective gateway|affective gateways]], and ideally a hint from the patient. Asking too early is the commonest error.",
      "Four CASE regions in order: [[Presenting suicide events|presenting]] (hours to weeks), [[Recent suicide events|recent]] (2 months), [[Past suicide events|past]] (earlier), [[Immediate suicide events|immediate]] (now and next). Finish each before moving on.",
      "Presenting events are explored by building a [[Verbal video|verbal video]] with [[Behavioral incident|behavioral incidents]] and rewinding every [[Nixon gap]]. Recent events are mined with [[Gentle assumption|gentle assumption]], then [[Denial of the specific|denials of the specific]] only if you suspect withholding, the [[Catch-all question|catch-all question]], and [[Symptom amplification|symptom amplification]]."
    ],
    pitfalls: [
      "Treating a low checklist score as reassurance when a single critical warning sign (a command hallucination, a loaded gun in hand last week) is present.",
      "Asking about suicide in the first five minutes to 'get it out of the way,' or popping the question from a calm, unrelated topic.",
      "Using a [[Negative statement of inquiry|negative statement of inquiry]] ('You haven't thought of killing yourself?') and accepting the first no.",
      "Asking 'Have you thought of hurting yourself?' and hearing about scratching, when the patient has been loading a rifle.",
      "Starting crisis intervention after the first method the patient mentions, before you know whether a [[Method of choice|method of choice]] is being withheld.",
      "Firing a [[Cannon question|cannon question]] ('Pills, hanging, shooting, jumping?') and taking the single no that follows.",
      "Spending twenty minutes on a decade of past attempts while the past two months, where the method of choice hides, go unexplored.",
      "Reading questions off a scale during the elicitation, missing the glance down and the pause that were the only signs of intent.",
      "Contracting for safety with a borderline or passive-aggressive patient, or treating any contract as a guarantee."
    ],
    phrases: [
      { say: "With everything you're going through, have you been having any thoughts of killing yourself?", when: "[[Shame attenuation]] to open the topic. Say 'killing yourself,' not 'hurting yourself' or 'commit.'" },
      { say: "Have you had any fleeting thoughts of killing yourself, even for a moment or two?", when: "The softened second ask after a first no. Do not leave the topic on one denial." },
      { say: "Have you ever gotten the pills out while you were thinking of killing yourself? When was the last time? Where were you?", when: "The first three steps of the four-step kick-start to a verbal video; then a [[Summarizing invitation|summarizing invitation]]." },
      { say: "What other ways have you thought of killing yourself?", when: "Gentle assumption after the first method is fully explored. Repeat until the patient has none." },
      { say: "On your very worst days, how much time do you spend thinking about killing yourself: 10 hours a day, 14, 18?", when: "Symptom amplification, after the list of methods is complete. Use hours, not percentages, unless the patient is comfortable with numbers." },
      { say: "If you walked out of here tonight, what would stop you from killing yourself a few days from now?", when: "Region of immediate events: desire, intent, and [[Reasons for living|reasons for living]] in one question." }
    ]
  },

  sections: [
    {
      id: "three-tasks",
      title: "Three tasks, one interview",
      lede: "Risk factors cannot tell you what this patient will do tonight. They tell you how hard to look.",
      blocks: [
        { type: "p", text: "Shea opens by insisting on structure. A suicide assessment is not a single question and a gut feeling; it is an integrated process that runs alongside the rest of the interview, much as differential diagnosis runs alongside data gathering. It has two data-gathering components and one cognitive one, and they draw on different skills." },
        { type: "steps", items: [
          "Uncover the patient's [[Risk factor|risk factors]], [[Warning sign|warning signs]], and [[Protective factor|protective factors]].",
          "Elicit the patient's suicidal ideation, planning, behaviors, desire, and intent.",
          "Arrive at a clinical formulation of risk from those two databases, using both analysis and intuition."
        ] },
        { type: "p", text: "The distinction between a risk factor and a warning sign is the first thing to get straight. A risk factor is a feature that turns up more often than expected in large samples of people who have died by suicide: being male, being older, having lost a spouse, drinking heavily. A warning sign (the older term is risk predictor) is a feature of the living person in front of you that suggests an attempt may be coming. Some items, intoxication and psychosis among them, are both." },
        { type: "p", text: "Then comes the sentence residents most need to hear: not one study has shown that any set of risk factors and warning signs can predict the imminent dangerousness of an individual patient. Statistics explain suicides after the fact; they do not cause them. A business collapses, a semester is failed, and a human being in pain makes a decision. Interestingly, the one database with some modest predictive support is the second one, the detailed elicitation of ideation, planning, behavior, and intent, which is where Posner's Columbia scale puts its weight." },
        { type: "case", title: "One point out of ten", text: "Summarized from the chapter. A middle-aged woman is not especially depressed, has never attempted suicide, does not drink or use drugs, has a loving family and spouse, no plan, no chronic illness. On the [[SAD PERSONS]] scale she can score at most one point. The one point is psychosis: she is in a postpartum psychosis, hearing what she believes is Satan commanding her to kill herself or watch her baby be tortured. She is at very high risk and needs admission. The scale, used as a predictor, has failed completely." },
        { type: "p", text: "So why study risk factors at all? Because they change how you interview. A heavy load of risk factors says: suspect that more is going on than the patient admits, be more tenacious, consider calling a [[Corroborative source|corroborative source]] even over a denial, and ask the specific lines of questions a given factor points to (psychosis prompts questions about command hallucinations). Eliciting them with every patient also conditions you to think about suicide every time, including on the days you are tired and behind." },
        { type: "pearl", title: "The friend on the phone", text: "Shea recalls a patient denying all ideation in the emergency department whose risk factors prompted a call to his wife. She had watched him talk about suicide for a month and had seen him with his pistol out the week before. Risk factors did not predict anything. They made the phone call happen." }
      ],
      practice: [{ kind: "quiz", id: "ch17", label: "Quiz: Chapter 17" }]
    },

    {
      id: "factors",
      title: "Static, dynamic, and protective",
      lede: "What you cannot change, what you can, and what is already holding the patient up.",
      blocks: [
        { type: "compare",
          a: { title: "Static risk factors", items: ["Sex and age", "History of previous attempts", "Absence of a spouse or partner", "Stressors that cannot be undone, such as the death of a child"] },
          b: { title: "Dynamic risk factors", items: ["Substance abuse and intoxication", "Psychotic process", "Depression and other psychiatric disorders", "Changeable stressors such as unemployment", "Family dynamics, spiritual life, and other wings of the matrix where inroads are possible"] } },
        { type: "p", text: "Suicidologists have grown more interested in dynamic factors because each one is a potential point of collaborative intervention. A [[Dynamic risk factor|dynamic risk factor]] is a signpost toward [[Matrix treatment planning|matrix treatment planning]]: treating the depression, arranging housing, bringing the family into psychoeducation. A [[Static risk factor|static]] factor can only raise your index of suspicion." },
        { type: "p", text: "Before cataloguing risk, Shea pauses on wellness. [[Protective factor|Protective factors]] are attributes or circumstances that may lower the chance of an attempt. He borrows a two-part list: personal factors that arise from the patient's own matrix, and external or environmental ones." },
        { type: "table", head: ["Personal protective factors", "External protective factors"], rows: [
          ["Beliefs and values that prohibit suicide; a strong sense of the meaning of life", "Strong relationships, especially with family"],
          ["Hope for the future; a sense of personal control; self-worth", "A reasonably safe and stable environment"],
          ["Coping skills, problem solving, anger management, resilience", "Opportunities to contribute to school or community"],
          ["Sobriety; impulse control; a healthy fear of risky behavior and pain", "Restricted access to lethal means"],
          ["Good health and access to care; attention to wellness", "Responsibilities and duties to others"],
          ["Reasons for living; being married or a parent; wanting to keep a pregnancy; children at home", "Pets"]
        ] },
        { type: "p", text: "Rudd adds a counterintuitive one: fear of suicide and of death itself is a good sign, because it suggests the patient has not habituated to the idea of dying. That thought returns later in Joiner's notion of [[Acquired capability for suicide|acquired capability]]. Keep protective factors in mind throughout, because they are the mitigating elements when you weigh foreseeable risk." }
      ]
    },

    {
      id: "psychosis",
      title: "Psychosis and the removal of the last obstacle",
      lede: "When rational thought is disrupted, the final brake on self-destruction can go with it.",
      blocks: [
        { type: "case", title: "Michael, 1:00 a.m.", text: "Summarized from the chapter. A 21-year-old weightlifter arrives at the emergency department with a friend. He has felt 'odd' for months, has ideas of reference, and occasionally loosens his associations. He denies depression but admits recent alcohol, speed, LSD, and marijuana after witnessing a friend's murder. Asked about suicide he answers tersely that he has no intention of killing himself, that this is what he is 'fighting for,' and refuses to elaborate or to be admitted. Sex and age are static risks. The suspicion of psychosis is what changes the interview." },
        { type: "p", text: "Psychosis is a major warning sign because it can strip away the ordinary reasons not to act. Three processes are especially dangerous and should be probed whenever psychosis is suspected: [[Command hallucination|command hallucinations]] (Chapter 12 covers how to ask), feelings of [[Alien control|alien control]], and a particular hyper-religious preoccupation." },
        { type: "p", text: "Alien control is the sense of being operated by an outside agent: a demon, extraterrestrials, a neighbor's implant, radio waves, a television character, or a real or imagined antagonist online. If the patient has already described delusional material, tie the question to it. If not, raise it unobtrusively with a [[Shame attenuation|shame attenuation]]." },
        { type: "exchange", title: "Checking for alien control", lines: [
          { who: "Clinician", t: "With all this stress, have you had any sensations that seem odd or a little scary, like something trying to take you over or control you?", tag: "Shame attenuation" },
          { who: "Patient", t: "Sometimes it feels like they're steering. Like my hands aren't mine." },
          { who: "Clinician", t: "When they steer, do they ever try to get you to do something you wouldn't normally want to do, like hurt yourself, or kill yourself, or hurt someone else?" },
          { who: "Patient", t: "They want me to cut it out. The thing in my chest." },
          { who: "Clinician", t: "What do they want you to use?" }
        ], note: "Composed. Alien control often travels with dangerous commands. Shea's rule: every patient who presents with psychotic process should be asked about alien control at some point in the interview." },
        { type: "p", text: "The third process is the [[Abraham syndrome]]: a conviction that God is testing the patient and wants suicide, homicide, or self-mutilation as proof of love, sometimes fed by a literal reading of a verse about plucking out an offending eye or cutting off an offending hand. Here Shea gives a rare exception to his rule of asking directly. Quoting the verse to a hyper-religious psychotic patient risks the psychosis later reinterpreting your question as God's instruction delivered through you. Instead, after engagement is as good as you can make it, ask two questions in tandem: Are there parts of the Bible that seem particularly important to you? Are there parts where you feel God or something else is directing you to do something specific, perhaps even to harm yourself?" },
        { type: "p", text: "One more point is easy to miss. People with schizophrenia attempt suicide more often not during florid psychosis but in the demoralized, depressed stretches that follow years of loss. Young patients with good education, high expectations, painful insight, fear of further deterioration, and hopelessness are thought to be most at risk." },
        { type: "p", text: "Michael's story continues after a corroborative interview with his friend: a recent discharge from a psychiatric hospital (the first month out is a high-risk window), estrangement from family, living alone on food stamps, mounting anxiety and pacing, a new hunting knife, and a friend who cannot stay with him. The clinician does something under-used: interviews Michael a second time, now entering through his psychosis with [[Greasing the wheels|greasing the wheels]] and questions about alien control. Michael describes 'bad people' who put the knife in his hand the night before, point pressed to his chest, waiting for a sign. He had denied suicide earlier because, in his mind, this would be murder by an outside force, not his own wish. Grounds for admission now exist." },
        { type: "pearl", title: "Anxiety on the unit", text: "Fawcett's work links intense, acute anxiety and agitation to impulsive attempts, including on inpatient units, where roughly one in twenty suicides occur, hanging being the commonest method. Severe anxiety in a newly admitted patient deserves prompt, adequately dosed treatment." }
      ],
      practice: [{ kind: "sim", id: "sim-voice", label: "Interview: Another voice (command hallucinations)" }]
    },

    {
      id: "interpersonal",
      title: "Suicide is an interpersonal act",
      lede: "Assess the systems around the patient, not just the patient.",
      blocks: [
        { type: "p", text: "Shea gathers the social risk factors under a single idea borrowed from Thomas Joiner. The [[Interpersonal theory of suicide]] holds that one of the most dangerous forms of suicidal desire arises when two experiences coincide: [[Thwarted belongingness|thwarted belongingness]], the sense of not being connected to anyone, and [[Perceived burdensomeness|perceived burdensomeness]], the belief that others would be better off without you. Desire becomes danger when a third element is present, the [[Acquired capability for suicide|acquired capability]] to act. Suicide is hard to do; fear of death, fear of pain, fear of surviving damaged, and a biological drive to live all stand in the way. Repeated exposure to death and pain wears those fears down, which is one reason prior attempts, chronic illness, and occupations such as policing, paramedicine, soldiering, and medicine carry extra risk." },
        { type: "list", items: [
          "Belongingness: Do you feel connected to other people? Do you live alone? Do you have someone you can call when you are feeling badly?",
          "Burdensomeness, by [[Normalization|normalization]]: Sometimes people think, 'The people in my life would be better off if I was gone.' Do you think that?",
          "Capability: how familiar and comfortable has this person become with the idea of dying?"
        ] },
        { type: "p", text: "Hopelessness that these interpersonal failures can never improve makes the mixture more dangerous still, because it attacks the patient's framework for meaning. Wang and colleagues found financial stress and assaultive violence (including domestic violence and violence in prisons) to be the two life stressors most strongly tied to attempts, with financial stress correlating more strongly than any disorder except major depression. Multiple major stressors in a year add up. Marital status matters in a descending order: separated, divorced, widowed, never married." },
        { type: "p", text: "Because suicide is interpersonal, the evaluation extends to the environment the patient will return to. Is it supportive or hostile? Even a caring family can become a problem if the patient feels like a burden to it, so a comment like 'my husband would be better off' should sharpen your attention. Shea suggests asking directly how the patient imagines a suicide would affect the family and what they think their responsibilities to their children would be. The answers lead either toward reasons for living or into an interpersonal maelstrom." },
        { type: "p", text: "The darker possibility is a death wish in the supposed support system, conscious or unconscious, benign or malicious. It can show as a family that never removed the firearm a previous clinician asked them to remove, as resistance to a needed admission, or as open hostility. Shea describes a father who, having lost one son to a rifle given on his fifteenth birthday, gave his depressed younger son a rifle on his fifteenth birthday, and a spouse who shouted in the emergency department that the patient should take the pills and no one would be called. Recognizing such dynamics is not a moral judgment; it changes dispositions. Watch also for suicide as revenge ('they'll be sorry when I'm gone'), for which a question about how the patient pictures their funeral can be revealing, and for suicide that has come to seem rational and even humane ('it's the only way I can really help my family'). The more reasonable the suicide feels to the patient, the more worried you should be." },
        { type: "exchange", title: "Teaching a family to ask", lines: [
          { who: "Clinician", t: "If you go home tonight, would you be okay with your mom asking you whether you're having suicidal thoughts?" },
          { who: "Patient", t: "I guess. As long as she doesn't make it weird." },
          { who: "Clinician", t: "Then let's not make it weird. What exact words would you want her to use, tonight and over the next few days?" },
          { who: "Patient", t: "She could just say, 'Are the dark thoughts back?' I'd know what she means." },
          { who: "Clinician", t: "And if she asks that, can you promise to answer her honestly, and tell her what the thoughts actually are?" },
          { who: "Patient", t: "Yeah. I can do that." }
        ], note: "Composed. Shea then meets the family separately, has them practice the question on him, brings everyone together so the parent asks the patient in front of him, and checks how it felt. Giving the patient the words restores control at a moment when control feels lost, and families who have rehearsed actually ask." }
      ]
    },

    {
      id: "weighing",
      title: "Depression, illness, hopelessness, and the second patient",
      lede: "Mrs. Kelly has a long list of risk factors and is probably not in immediate danger. That contrast is the lesson.",
      blocks: [
        { type: "case", title: "Mrs. Kelly", text: "Summarized from the chapter. A frail 50-year-old mother of three, her hands deformed by seven years of rheumatoid arthritis, comes for an outpatient assessment with her daughter. She has been depressed for more than six months with neurovegetative symptoms, feels she is losing her fight, and says her husband would be better off with her dead, 'at least he says so.' She admits occasional thoughts of suicide without plan or intent, is not psychotic, and tests well cognitively. Her daughter describes a woman who was once the life of every party, now in constant friction with a socially restless husband, and fears what will happen when her mother becomes bedridden." },
        { type: "p", text: "Her depression is the headline. A severe psychiatric disorder is probably the single strongest correlate of suicide: up to 90% of people who die by suicide had one, affective disorders first, then substance use disorders, anxiety disorders, schizophrenia, and severe personality disorders. Shea's favorite tip for 'predicting' suicide is therefore unglamorous: do a good diagnostic assessment. Watch for atypical presentations, including depression hiding behind pain syndromes. Fawcett found that depressed patients with panic attacks had three times the suicide rate of other patients and accounted for most of the first-year suicides in his cohort, and most people with a lifetime attempt have had an anxiety disorder." },
        { type: "p", text: "Physical illness raises risk especially when it brings immobility, disfigurement, or chronic pain, or when the patient foresees a frightening decline. Illness interacts with personality. Leonard described three vulnerable types: the controlling, hard-driving person suddenly robbed of control by disease; the dependent, dissatisfied person who has exhausted every caretaker; and the person whose life has been fused with one other person who then dies or leaves. Mrs. Kelly, once always on the go, fits the first." },
        { type: "p", text: "Against this stand several reassuring findings. She denies hopelessness, and Beck's work suggests hopelessness may predict suicide better than depressive severity; Shea calls hope the most powerful antidote. People usually kill themselves to escape pain they believe will never end, so a future that still contains possibilities is protective. Her Catholic faith, which holds suicide to be gravely wrong, is acting as a major protective factor; other patients find the same anchor in children or a role they must fill. There has been no abrupt change in her condition in either direction. And there is no family history of suicide." },
        { type: "list", items: [
          "Sudden worsening (severe insomnia, agitation, marked dysphoria) can mean pain is becoming intolerable. Sudden, unexplained calm can mean the decision has been made. Patients also become more able to act as a depression first lifts and energy returns before mood does; keep this in mind after an antidepressant is started, and distinguish it from the dysphoric activation discussed in Chapter 9.",
          "A family history of suicide matters three ways: heritable illness, a possible heritable component to suicidal ideation itself, and identification with the relative who died ('everyone says I'm just like Aunt Sally').",
          "Rarely, a parent who believes the children will be worse off after her death contemplates taking their lives first. If the context suggests it, approach by normalization: Sometimes parents in your situation think about taking the lives of their children too. Has that thought ever crossed your mind?"
        ] }
      ]
    },

    {
      id: "formulation",
      title: "Mnemonics, chronic risk, and the tetrad of lethality",
      lede: "No formula decides. These are aids to remembering what to ask and to separating long-term concern from tonight's danger.",
      blocks: [
        { type: "table", head: ["Mnemonic", "Letters", "Emphasis"], rows: [
          ["[[SAD PERSONS]] (Patterson et al.)", "Sex, Age, Depression, Previous attempt, Ethanol abuse, Rational thinking loss, Social supports lacking, Organized plan, No spouse, Sickness", "Mostly static factors. A useful checklist; assigning points predicts nothing."],
          ["[[NO HOPE]] (Shea)", "No framework for meaning, Overt change in clinical condition, Hostile interpersonal environment, Out of hospital recently, Predisposing personality factors, Excuses for dying present and strongly believed", "Dynamic factors; the name reminds you to ask about hopelessness."],
          ["[[IS PATH WARM]] (AAS, 2006)", "Ideation, Substance abuse, Purposelessness, Anger, Trapped, Hopelessness, Withdrawing, Anxiety, Recklessness, Mood change", "Warning signs with research support; names the phenomenology of the final days."]
        ] },
        { type: "p", text: "IS PATH WARM earns a note for two words. 'Trapped' separates the cognitive conclusion that there is no hope from the relentless physical sensation of being cornered, which may be what finally drives the act. 'Purposelessness' is the felt form of lost meaning and sits beside Joiner's burdensomeness." },
        { type: "p", text: "Now the contrast between the two patients. Mrs. Kelly carries many risk factors accumulated over years: a major psychiatric disorder, age, debilitating illness, growing hopelessness, a strained and possibly hostile marriage, and a slowly forming rational excuse. That is [[Chronic suicide risk|chronic risk]], serious and deserving of close follow-up, yet she could most likely be treated as an outpatient. Michael had fewer classic factors and was far more dangerous. The absence of most risk factors never means safety when a critical one is present, and the presence of many does not by itself mean an attempt is imminent." },
        { type: "p", text: "Shea is careful with words. Clinicians cannot predict suicide, and even 'imminent risk' promises more than anyone can deliver. What we can and must do is estimate [[Foreseeable risk|foreseeable risk]]: is this patient at reasonably increased risk in the near future? The question is sharpest when the decision is admission versus outpatient care, sometimes against the patient's wishes. For that decision Shea offers the [[Tetrad of lethality|tetrad of lethality]]." },
        { type: "steps", items: [
          "An immediately recent, serious suicide attempt.",
          "Acutely disturbing psychotic processes suggestive of lethality.",
          "Serious suicidal intent relayed by the patient in the interview, or shown by recent behavior outside it.",
          "Flat denial of ideation by a patient who strongly intends to proceed and does not want to be stopped."
        ] },
        { type: "p", text: "Any one of the four should make you strongly consider hospitalization. Mrs. Kelly has none. Michael had three. For the first element, judge an attempt by the lethality of the method (and the patient's knowledge of it: a physician's overdose is more worrying than a layperson's) and by how much room was left for rescue. Was the spot chosen where discovery was likely? Was help nearby? Was there a note where it would be found? Did the patient call anyone afterward? The absence of these suggests frightening seriousness." },
        { type: "p", text: "The third element, intent relayed in the interview, depends entirely on your interviewing skill and is, in Shea's view, the single most important indicator of risk. The fourth is the most dangerous and the easiest to miss. Its clues are indirect: an unusually heavy load of risk factors, one intense factor, a striking lack of protective factors, and often a terseness or irritation when suicide comes up. When you suspect it, pursue corroborative sources and old records, consult a colleague, and consider having a second clinician interview the patient." }
      ]
    },

    {
      id: "before-asking",
      title: "Before you ask: hesitancy, myths, and your own countertransference",
      lede: "Someone you interview this year will already have accepted an invitation to die. Whether they tell you depends partly on you.",
      blocks: [
        { type: "p", text: "Section 2 begins by setting the instrument to maximum sensitivity. You want even the smallest suicidal thought, because small thoughts open the door to larger secrets. Suicide is taboo, the stranger asking about it can lock the patient up, and hesitation is normal. Shea lists what to notice and what to avoid." },
        { type: "list", items: [
          "The slightest hesitation before a denial suggests the thoughts have been there. 'No, not really' usually means yes; answer it with a concerned tone and 'What kind of thoughts have you had?'",
          "Watch for body language of deceit or anxiety, which means no note taking during this part of the interview.",
          "Give no nonverbal sign of your own discomfort: no looking away, no fidgeting. Use eye contact and a conversational feel to deepen engagement, because engagement is what buys the truth.",
          "Semi-structured instruments that make you look at a page or a screen cost you exactly this. Shea would not use them face to face in emergency departments or crisis work, and warns that reading or typing in front of a paranoid, agitated patient can be disengaging and even dangerous.",
          "If the first inquiry leaves you unsatisfied, ask again later. Willingness to share changes over the course of an hour."
        ] },
        { type: "p", text: "The old myth that asking about suicide plants the idea has no case report behind it, ignores that suicide is hardly a secret in any culture, and underestimates how hard suicide is to do. Asking does the opposite: it lets the patient set down a weight carried alone, and it shows that help is one sentence away. Suicidal ideation stops being a sin to hide and becomes a problem to solve." },
        { type: "p", text: "The subtler obstacle is in the interviewer. Anxiety about the topic can read to the patient as moral disapproval, and a patient who senses condemnation closes like a child before an unforgiving parent. Shea suggests asking yourself what you believe about suicide, whether you think it sinful or weak, whether you can imagine it in your own life, and whether anyone you loved died by it. He also names the countertransference few admit: a positive answer makes work. The assessment lengthens, family must be called, commitment may follow, a court date may loom. That reluctance leaks out as forgetting to ask, asking at the very end, hurrying, or asking in a way that begs for no." },
        { type: "exchange", title: "Asking for a no", lines: [
          { who: "Patient", t: "Some days it's just too much. The bills, the kids, my mother calling every hour." },
          { who: "Clinician", t: "You haven't been thinking of killing yourself or anything, though?", tag: "Negative statement of inquiry" },
          { who: "Patient", t: "No, no. Nothing like that." }
        ], note: "Composed. The [[Negative statement of inquiry|negative statement of inquiry]] (Chapter 3) tells the patient what answer is wanted, and patients want to please. Shea watched a second interviewer, asking the same patient without the negative framing, learn of an aspirin overdose five days earlier." },
        { type: "pearl", title: "Do not accept the first no", text: "Shea is consistently surprised by how many people with active ideation deny it when first asked. The topic should almost never be left after a single denial." }
      ],
      practice: [{ kind: "drill", id: "validity", label: "Drill: validity techniques" }]
    },

    {
      id: "intent",
      title: "The equation of suicidal intent",
      lede: "Stated intent is one term in a sum. The other two are where lives are lost or saved.",
      blocks: [
        { type: "p", text: "Why would a dangerous patient tell you the truth? Some do, out of ambivalence or because you interviewed well. But a person who truly wants to die has little incentive to hand over the plan. Shea lists the roadblocks: the impulsive patient who has little ideation before acting; the determined patient who hides intent or the method to avoid being stopped; shame at weakness; a belief that suicide is sinful or taboo; fear of being thought crazy, locked up, or visited by police; fear that family, school, or employers will find out; the conviction that no one can help; and alexithymia, which makes pain hard to put into words. The first two are reasons to hospitalize a patient who denies ideation." },
        { type: "pearl", title: "Real suicidal intent = stated intent + reflected intent + withheld intent", text: "The [[Equation of suicidal intent]]. The more intensely someone wants to die, and the more taboo the topic, the larger the [[Withheld intent|withheld]] term. Withholding can be unconscious: if suicide feels like sin or weakness, denial and rationalization can convince the patient that their intent is smaller than it is, so that an honest answer is still a gross underestimate." },
        { type: "p", text: "[[Reflected intent]] is the quality and quantity of suicidal thought, desire, planning, and action: how long the patient has thought about it, how detailed the plan is, whether the means have been obtained and handled. Shea reaches for motivational theory to explain why this term matters. In Prochaska and DiClemente's stages of change, what predicts whether a drinker will actually get to a meeting is not his proclamation but the reading, the looking up of locations, the arranging of a ride. Actions speak louder than words for hard positive changes; Joiner reminds us suicide is a hard act too. Time spent thinking, planning, and rehearsing may say more about near-term risk than anything the patient states." },
        { type: "p", text: "Patients also disclose in stages, reading your reaction between installments, and some will admit a minor method (a few aspirin weeks ago) while keeping the gun to themselves until, somewhere in the conversation, they decide they do not want to die after all. Which is why the order of operations matters." },
        { type: "case", title: "The premature crisis intervention", text: "Summarized from the chapter. A patient mentions thoughts of overdosing and a handful of aspirin taken weeks ago. The clinician explores that, moves straight into skilled crisis work, and the patient leaves feeling much better with a vague suggestion to find a therapist sometime. No one asked what else he had thought of. He had been thinking about his gun for weeks and had loaded it once. Three days later his girlfriend leaves, he drinks, and the intent returns with a gunshot. Elicit reflected intent fully before you begin to intervene." },
        { type: "p", text: "Two further reasons to be thorough. First, the [[Transportation cure]]: patients who open up to a school counselor, primary care clinician, or crisis line often clam up by the time they reach the emergency department, so gatekeepers must document reflected intent in detail while it is available. Second, a careful record of ideation and action at one point in time gives the next clinician a baseline, and a large discrepancy between what a patient now reports about the past and what was documented then is one of the best indicators of whether the current self-report can be trusted. And when the elicitation is done with warmth, neither over- nor under-reacting, a patient who is later debating between the phone and the gun may remember that talking felt safe." }
      ]
    },

    {
      id: "timing",
      title: "Setting the platform: when to raise it",
      lede: "The clinician does not pop the question. The clinician leads up to it.",
      blocks: [
        { type: "p", text: "The single commonest timing error is asking too early, driven by the interviewer's need to know or wish to get the hard part over. Early inquiry sounds artificial, disengages, and can cost both the truth and the patient's cooperation with whatever safety plan follows. Shea defines the optimal moment as the intersection of three factors, the [[Elicitation of suicidal ideation triad]]." },
        { type: "steps", items: [
          "Engagement is sound. People share secrets with people they feel safe with, which usually takes time and arrives fairly deep into the interview. On the telephone, where nonverbal warmth is missing, it takes even longer.",
          "The patient is intensely emotionally involved in the pain that pulls toward suicide. Strong affect overwhelms defenses and the fear of stigma.",
          "The patient hints at it (not always present): 'I'm not sure it's worth going on,' 'maybe the kids would be better off without me.'"
        ] },
        { type: "p", text: "Emotional involvement is reached through one of three [[Affective gateway|affective gateways]]: depression, anxiety, and hopelessness; turmoil, anger, or confusion over a situational or interpersonal stress; and psychotic process. Wait until the patient is visibly inside one of these, sighing, tearful, or angry, before you ask. Sometimes you must lead the patient there gently, because denial keeps them out. Letting a patient ventilate about the divorce or the bankruptcy also buys the engagement time that makes valid answers more likely; the peak usually comes around the middle of the interview. If one gate fails (a man with psychotic depression denies ideation while talking about sadness), try another (enter through the psychosis, as with Michael)." },
        { type: "p", text: "Some interviewers approach with a mildly ambiguous back door for the very anxious patient: Have you ever thought of a way of ending your pain? Have you ever wished you could go to sleep and never wake up? If the patient does not take the lead, you must then ask directly. Usually the direct methods below are enough and leave no room for misunderstanding." },
        { type: "exchange", title: "Walking through an open gate", lines: [
          { who: "Patient", t: "After the separation I just ran on autopilot. Then it caught up with me. Everything looked empty, like there wasn't much point. Some days it still looks that way." },
          { who: "Clinician", t: "When you say there wasn't much point, did you have any thoughts of killing yourself?", tag: "Referred gate" },
          { who: "Patient", t: "Yes. And honestly, I still do." },
          { who: "Clinician", t: "What kinds of things have you thought about doing?" },
          { who: "Patient", t: "Pills, mostly. I actually took some, once." }
        ], note: "Composed. A hint is a metacommunication: ask me. Walk past it and the moment may not come again if engagement later falters. Conversely, when a patient opens an interview or a crisis call with suicide, acknowledge it and your concern, build engagement first, and return later with a [[Referred gate|referred gate]] ('Earlier you mentioned thoughts of killing yourself. What kinds of thoughts have you been having?')." }
      ],
      practice: [{ kind: "drill", id: "gates", label: "Drill: facilic gates" }]
    },

    {
      id: "case-approach",
      title: "The CASE Approach: validity techniques and four regions",
      lede: "Errors in risk assessment usually come from sound reasoning applied to a poor database.",
      blocks: [
        { type: "p", text: "The suicide literature is enormous on risk factors and judgment and thin on how to conduct the interview. Shea's answer is the Chronological Assessment of Suicide Events, the [[CASE Approach]], first described in the second edition and since taught in settings from college counseling to prisons. It addresses the two big errors in eliciting ideation: omitting critical data, and asking in ways that produce misleading data. It is offered not as the right way or a standard of care but as a reasonable way from which to build your own, compatible with Jobes's CAMS and able to feed valid data into tools like the Columbia scale. It complements the other two tasks and says nothing about formulation. And it rests on one foundation: engagement, engagement, engagement." },
        { type: "p", text: "The practice is like a martial artist's kata: a sequence drilled until it is available when you are exhausted, pressured, and most need it. The sequence is made of the Chapter 5 [[Validity / reliability|validity]] techniques, each with a suicide-specific job." },
        { type: "table", head: ["Technique", "Suicide-specific use", "Example wording"], rows: [
          ["[[Normalization]]", "Raise the topic by showing others have felt this", "Sometimes when people are in this much pain they find themselves thinking of killing themselves. Have you had thoughts like that?"],
          ["[[Shame attenuation]]", "Raise the topic through the patient's own pain, no reference to others", "With everything you're going through, have you been having any thoughts of killing yourself? (Or: With all of your pain, for chronic illness.)"],
          ["[[Behavioral incident]]", "Build the verbal video of an attempt or plan", "How many pills did you take? What did you do right after that?"],
          ["[[Gentle assumption]]", "Look for other methods once the first is explored", "What other ways have you thought of killing yourself?"],
          ["[[Denial of the specific]]", "Only if you suspect withholding; one at a time, pausing", "Have you been having any thoughts of shooting yourself? (pause) Of hanging yourself?"],
          ["[[Catch-all question]]", "Catch unusual methods or ones you forgot to name", "We've talked about a lot of ways; are there any you've thought about that we haven't talked about yet?"],
          ["[[Symptom amplification]]", "Quantify time spent in suicidal thought despite minimizing", "On your very worst days, 10 hours a day, 14, 18?"]
        ] },
        { type: "p", text: "Two wording notes. Say 'killing yourself' (or 'taking your life,' 'thinking of suicide'), never 'hurting yourself,' which invites talk of cutting and burning rather than lethality; those behaviors have a different phenomenology and were covered in Chapter 14. Avoid 'commit,' which carries the flavor of crime and sin. And after a first denial, soften and ask again: Have you had any fleeting thoughts of killing yourself, even for a moment or two? Never bundle denials of the specific into a [[Cannon question]]: patients answer only the last item, and a single lie covers everything, whereas separate questions give you several chances to catch the leakage of deceit." },
        { type: "p", text: "The macrostructure comes from [[Facilics|facilics]] (Chapter 4): errors of omission fall when a large body of data is split into small, well-defined regions, so the clinician can tell when the patient has wandered and when a region is complete. CASE divides the territory into four contiguous timeframes, explored in this order, each finished before the next." },
        { type: "steps", items: [
          "[[Presenting suicide events|Presenting events]]: ideation, plans, or attempts in roughly the past 48 hours to several weeks.",
          "[[Recent suicide events|Recent events]]: the preceding 2 months.",
          "[[Past suicide events|Past events]]: from 2 months back through the patient's life.",
          "[[Immediate suicide events|Immediate events]]: feelings, ideation, and intent during the interview itself, and what comes next."
        ] },
        { type: "p", text: "The order is designed for engagement and validity. Talking about the presenting attempt first feels natural; recent and past follow easily; and by the time trust has been built across those three, the patient is more likely to be honest about the most important region, what they are thinking right now. Picture the inpatient about to go on pass whose inner voice is saying: look fine, get home, get the gun. Only a well-engaged interview, attentive to a flicker of hesitation, has a chance there." }
      ],
      practice: [{ kind: "drill", id: "validity", label: "Drill: validity techniques" }]
    },

    {
      id: "presenting",
      title: "Presenting events: making the verbal video",
      lede: "If you can see the attempt unfolding like a film, you have the facts that reflect intent.",
      blocks: [
        { type: "p", text: "Whatever the patient first offers when suicide is raised, ideation, a plan, or an act, is the presenting event, and its severity drives disposition. For an attempt, the facts that matter are concrete." },
        { type: "list", items: [
          "Method, and how far it was taken: which pills, how many, where the cut was and how many stitches.",
          "Seriousness of intent: who was told before or after, including on social media; whether the place made discovery likely; a note, possessions given away, goodbyes; how many pills were left in the bottle; how many the patient thought it would take.",
          "How the patient feels about surviving ('What are your thoughts about the fact that you're still alive now?').",
          "Planned or impulsive; any research online or in books.",
          "Alcohol or drugs at the time.",
          "Interpersonal drivers: failure, feeling unwanted or a burden, anger meant to make someone else suffer.",
          "The triggering stressor, the degree of hopelessness, and why the attempt failed and how help arrived."
        ] },
        { type: "p", text: "You do not memorize that list. You use [[Behavioral incident|behavioral incidents]], fact-finding ('Did you load it?') and sequencing ('What did you do next?'), to have the patient walk through the event from beginning to end while you build a [[Verbal video]] in your mind, a strategy CBT and DBT clinicians know as behavioral chain analysis. [[Anchor question|Anchor questions]] (when, where) fix the patient in a specific memory rather than a cloud of feeling. When the narration skips a stretch, a [[Nixon gap]], you rewind to where the gap began and ask what happened next until it fills." },
        { type: "steps", items: [
          "The [[Method-in-hand question]]: Have you ever gotten the [method] out while you were thinking of killing yourself?",
          "When was the last time?",
          "Where were you?",
          "A [[Summarizing invitation]]: It sounds like that was a very hard night. Help me understand exactly what happened. You were in the bathroom, you had the bottle out, what did you do next?"
        ] },
        { type: "exchange", title: "Rewinding the video", lines: [
          { who: "Clinician", t: "With everything that's happened this month, have you been having any thoughts of killing yourself?", tag: "Shame attenuation" },
          { who: "Patient", t: "They come and go. Mostly about pills." },
          { who: "Clinician", t: "Have you ever actually gotten pills out while you were thinking about it?", tag: "Method-in-hand" },
          { who: "Patient", t: "Last Thursday. After my shift." },
          { who: "Clinician", t: "Where were you?" },
          { who: "Patient", t: "Kitchen. That's where I keep my meds." },
          { who: "Clinician", t: "So you're in the kitchen, it's late, you've got the bottle out. Walk me through what happened next.", tag: "Summarizing invitation" },
          { who: "Patient", t: "I took some of the antihistamines I use to sleep. Not a lot." },
          { who: "Clinician", t: "Roughly how many is not a lot?", tag: "Fact-finding behavioral incident" },
          { who: "Patient", t: "Six, maybe seven." },
          { who: "Clinician", t: "Were there any left in the bottle?" },
          { who: "Patient", t: "Most of it. It was a new bottle." },
          { who: "Clinician", t: "Anything else that night, any other medicine or alcohol?" },
          { who: "Patient", t: "No. Then I was in the ER." },
          { who: "Clinician", t: "Let's back up a second. Right after you swallowed them, what did you do?", tag: "Rewinding a Nixon gap" },
          { who: "Patient", t: "I called my brother. Told him I'd done something stupid and asked him to drive me." }
        ], note: "Composed. The gap between the pills and the emergency room hid the single most reassuring fact: the patient summoned her own rescue within minutes. Together with the small number taken and the nearly full bottle, that points to lower intended lethality and may spare an unnecessary admission. In a busy department the gap would have stayed open." },
        { type: "p", text: "The same questions find danger as readily as reassurance. For a gun: Have you ever gotten it out while thinking of killing yourself? When? Where were you sitting? Did you load it? Did you put it to your body or head? Was the safety off? How long did you hold it there? What was going through your mind? What stopped you? Where is the gun now? These are the [[Lethal points]]. Compare that with 'Did you come close to using it?' and its easy 'Oh no, not really.' A side effect of the method is that patients, re-living the scene, often start weighing reasons to live and die out loud, which tells you which way they are leaning. Maltsberger's list of what patients hope death will bring (dreamless sleep, reunion with someone lost, escape from a persecutor, destruction of an enemy inside the body, passage to a better world, revenge watched from beyond the grave) is worth exploring when those moments arise." }
      ],
      practice: [{ kind: "sim", id: "sim-pills", label: "Interview: Just a few pills (verbal video)" }]
    },

    {
      id: "recent",
      title: "Recent events: where the method of choice hides",
      lede: "The past two months are the mother lode of reflected intent.",
      blocks: [
        { type: "p", text: "If what the patient reports when suicide is raised is not within the past couple of weeks, you start here. Otherwise, once the presenting verbal video is complete, you cross into the previous 2 months with a [[Bridging question]] about the same method: Over the past 2 months, have you had any other thoughts of overdosing? Name the timeframe precisely, not 'recently,' to keep the patient focused and avoid detours. Vague forays ('How much have you been thinking about suicide?') are invitations to under-report. The task has three parts: find every method contemplated, learn how far each was acted on, and measure how much time the thoughts occupy." },
        { type: "steps", items: [
          "Bridge into the 2-month window on the presenting method; verbal video any intense episode.",
          "[[Gentle assumption]]: What other ways have you thought of killing yourself? For each new method, a verbal video (kick-start with the method-in-hand question). Repeat until the patient denies any other way.",
          "[[Denial of the specific]], only if you suspect withholding, and only a few, drawn from methods common in the patient's culture, each asked separately with a pause.",
          "The [[Catch-all question]], for odd methods you did not think to name and for the pause that gives away one more plan. Ask too about searching the internet for methods; time spent online is itself reflected intent.",
          "[[Symptom amplification]] for frequency and duration: On your very worst days, how much time do you spend thinking about killing yourself, 10 hours a day, 14, 18?"
        ] },
        { type: "p", text: "How far you go depends on your evolving read. A patient with low risk factors, strong protective factors, no presenting event, and one fleeting thought of shooting himself with no gun at home does not need denials of the specific, the catch-all, or amplification; using them would seem strange. A patient with high risk, visible anguish, and details that keep emerging that no one knew about is a different matter. It is here, with a well-timed denial of the specific, that an ambivalent but dangerous patient may finally surrender the [[Method of choice|method of choice]]." },
        { type: "case", title: "The farmer", text: "Summarized from the chapter. A widower in his seventies with diabetes and heart and lung disease, two years past the death of his wife of fifty years, is brought to the emergency department by his son after admitting he took a handful of aspirin and antibiotics two nights earlier. He insists nothing came of it and he will not do anything stupid. The clinician declines to take that stated intent at face value. The verbal video of the presenting event adds five digoxin tablets the son never knew about and a search of the kitchen drawer for rat poison. Bridging into recent events, gentle assumption yields thoughts of hanging (rope never fetched) and, unexpectedly, several trips to the barn to check for pesticide. He denies other methods. Given his risk factors and the steady surfacing of unshared details, the clinician uses a few denials of the specific: carbon monoxide (no), jumping (no), and then, introduced by a normalization about farmers and guns, shooting. A long pause and a glance away: 'I suppose.' The verbal video that follows places him two weeks earlier at the creek where he and his wife used to walk, gun loaded, safety off, barrel in his mouth, put down for reasons he is no longer sure of. Asked how much time the thoughts took, he looks the clinician in the eye: he could not get it out of his mind. Hospitalization is now clearly indicated, and the guns can be removed." },
        { type: "exchange", title: "A denial of the specific, one at a time", lines: [
          { who: "Clinician", t: "What other ways have you thought about killing yourself?", tag: "Gentle assumption" },
          { who: "Patient", t: "That's about it. Nothing else, really." },
          { who: "Clinician", t: "Have you had any thoughts of hanging yourself?", tag: "Denial of the specific" },
          { who: "Patient", t: "No." },
          { who: "Clinician", t: "A lot of people who work with their hands keep tools or a rifle around, and when they're in this much pain, some of them think about using one on themselves. Has that crossed your mind?", tag: "Denial of the specific, with a normalization" },
          { who: "Patient", t: "(pause) Maybe once or twice." },
          { who: "Clinician", t: "Have you ever pictured a place where you'd do it?" }
        ], note: "Composed. Notice the pause before the question about hanging and the single method per question. Notice also that the interviewer did not use the catch-all afterward; once the method of choice is clearly on the table and nothing suggests another unusual plan, the technique is unnecessary. CASE is flexible by design." },
        { type: "p", text: "Behavioral incidents were built to improve the validity of hard facts, but as patients re-imagine the scene they often enter the thoughts and feelings of that moment, which opens a window on reasons to live, or, as with the farmer's 'she was my world,' on a soul with few reasons left. Jobes and Mann argue that reasons for living deserve far more attention in assessment than they usually get." }
      ]
    },

    {
      id: "past-immediate",
      title: "Past events, immediate events, and the question of contracts",
      lede: "Ask the past only what would change today's triage. Ask the present everything.",
      blocks: [
        { type: "p", text: "Clinicians often spend too long in the past. A patient with a long history of self-harm could fill an hour, badly. In the region of [[Past suicide events|past events]] Shea asks only about behaviors, not isolated past thoughts, and only for information that could alter immediate triage and follow-up." },
        { type: "list", items: [
          "What was the most serious past attempt? Is current ideation focused on the same method? Practice can be deadly.",
          "Are today's triggers and psychopathological state (intoxication, intense anxiety, depression, mania, psychosis) like those at the time of the most serious attempt? Does the inner phenomenology (not belonging, being a burden) resemble it?",
          "Roughly how many gestures and attempts in all? Many may signal attempts used as communication, or a patient who has exhausted all hope; either way you need to know.",
          "When was the most recent attempt outside the 2-month window? One within 6 months raises concern."
        ] },
        { type: "p", text: "Even when admission is already decided, finishing this region matters. A patient who has felt safe enough to open up with you may say nothing to the next clinician, and the inpatient team deciding on passes and discharge will depend on what you documented. The region also admits moments of counseling: when the farmer recalled putting away his father's loaded gun as a heartbroken young man, the interviewer observed that he would never have met his wife had he gone through with it, and let the patient reach the thought himself that you never know what the future holds. A seed of hope, planted without derailing the assessment." },
        { type: "p", text: "[[Immediate suicide events|Immediate events]] are Now and Next: suicidal feelings and intent during the interview itself, and whether the patient expects them after leaving. Desire and intent are related but distinct. A patient may have intense pain and a strong wish to die with no intent ('I could never do that to my children'), and pain can eventually override the defenses that kept desire from becoming action." },
        { type: "list", items: [
          "Right now, are you having any thoughts about wanting to kill yourself?",
          "On a scale from 0 to 10, how bad is the pain right now, where 0 is 'tough but I can handle it' and 10 is 'if it doesn't let up I don't know if I can go on'?",
          "I know you can't be sure, but what's your best guess about how likely it is you'll try to kill yourself in the next week, from very unlikely to very likely?",
          "What keeps you from killing yourself? What things in your life make you want to go on living?",
          "How does the future look to you? What would make you feel more, or less, hopeful?",
          "What would you do later tonight or tomorrow if the thoughts came back?"
        ] },
        { type: "p", text: "That last question begins [[Safety planning]], which Shea usually completes in the closing phase where it fits naturally into collaborative treatment planning: a ladder of steps from a warm shower or music through calling a friend to a crisis line or a cab back to the hospital. [[Safety contracting]] is a different animal, and the controversy around it conflates two uses. As a deterrent it guarantees nothing, can give a false sense of security, and may, in a rare patient with a long alliance and a powerful conscience, actually hold; mostly, safety planning is better. It should never precede a full assessment and should be avoided with borderline or passive-aggressive pathology, where it degenerates into debate." },
        { type: "p", text: "Its real value is as an assessment tool in a narrow situation: you have finished the assessment, you are leaning toward sending the patient home, and something does not add up. Then, by first name, eye to eye, in earnest: Can you promise me that you will not act on any suicidal thoughts before calling me or my staff, any hour of the day or night? Can you really promise me that? The [[Interpersonal push]] of that moment can produce the only visible sign of hidden intent: a glance down, a hesitation, a welling up. Ask about it ('It looks like this is hard to agree to. What's going through your mind?') and be prepared to change the disposition. Safety planning, being ultra-collaborative, lacks the push and so cannot do this job." },
        { type: "exchange", title: "Now and next", lines: [
          { who: "Clinician", t: "We've been talking a while. How are you feeling about killing yourself right now, at this moment?" },
          { who: "Patient", t: "A bit better than when I came in. But I don't trust it." },
          { who: "Clinician", t: "Do you see much hope for the future?" },
          { who: "Patient", t: "A little. Not a lot." },
          { who: "Clinician", t: "If you walked out of here tonight, what would stop you from killing yourself a few days from now, or a week or two down the road?" },
          { who: "Patient", t: "You really want to know? Probably nothing. Though I expect you'll want my guns." }
        ], note: "Composed. Nothing more is needed in this region, and no contract is called for: there is nothing left to assess, and the disposition is admission. The CASE data now join the risk factors gathered earlier (age, illness, bereavement, isolation, possible burdensomeness) and the thin protective factors to complete the formulation. And something else has happened: a man who carried this alone has been heard without alarm or judgment. For some patients that is the first sign of hope." },
        { type: "pearl", title: "If something still bothers you", text: "After any interview, continuing doubt about safety or about the honesty of the self-report is a reason to contact corroborative sources, consult, and document why." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "Shea's full discussions of Michael, Mrs. Kelly, Indira, and Mr. Thompson, the complete lists of corroborative-source questions and lethal points for a firearm, Table 17.1 with the SAD PERSONS and NO HOPE acronyms side by side, and Figures 17.1 and 17.2 on the four regions and the bridge into recent events." },
    { title: "Video Modules 17.1 to 17.3", text: "A three-part series on the delicate art of uncovering suicidal ideation and intent: core principles and theory (with material not in the text), annotated clips of the full CASE Approach, and annotated clips of flexible use with patients of high lethality and its effect on the formulation of risk." },
    { title: "Video Modules 17.4 to 17.6 (optional)", text: "The complete interviews with Amy #1, #2, and #3 without didactics, first unlabeled so you can name each validity technique as it appears, then labeled to check yourself." },
    { title: "Earlier chapters this one builds on", text: "Chapter 5 for the seven validity techniques, Chapter 4 for the facilic logic behind the four regions, Chapter 12 for eliciting command hallucinations, Chapter 14 for the different phenomenology of non-lethal self-harm, and Chapter 9 for antidepressant-related activation." },
    { title: "Further reading Shea points to", text: "His own The Practical Art of Suicide Assessment, including its appendix on safety contracting; Jobes's Collaborative Assessment and Management of Suicidality (CAMS); Joiner's interpersonal theory; Maltsberger's Suicide Risk: The Formulation of Clinical Judgment; and Posner's Columbia Suicide Severity Rating Scale." }
  ]
};
