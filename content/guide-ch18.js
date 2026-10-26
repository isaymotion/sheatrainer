/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 18: Exploring Violent and Homicidal Ideation
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch18 = {
  chapter: "ch18",
  intro: "Read Chapter 17 first. This chapter is deliberately shorter because its main tool, the CASE Approach, has already been taught; here it becomes the CADE Approach, the Chronological Assessment of Dangerous Events. What is new is the content: the three domains of violence, the risk factors that matter, a tetrad of lethality for violence, paranoid process and the road to mass murder, the special caution domestic violence demands, and the plain fact that the person you are interviewing may hurt you. Shea's aim is modest and serious: to help you spot the patient likely to be violent in the next one to two weeks, in a field where no method has yet been proven to do that.",

  highYield: {
    mustKnow: [
      "Three domains: Meloy's [[Affective violence|affective]] (hot, impulsive, intoxicated) and [[Predatory violence|predatory]] (cold, planned, pleasurable, remorseless) violence, plus Shea's [[Biologically induced violence|biologically induced]] violence from pathophysiology or structural brain damage. Knowing them tells you when to ask and where your blind spots are.",
      "[[Actuarial approach|Actuarial]] tools ([[HCR-20]], [[COVR]], VRAG, PCL-R) predict violence over months, not over the next hours or two weeks, and reading from a page costs you the patient's face. Learn them for ongoing or forensic work; rely on the interview in the initial assessment.",
      "The single most robust predictor is past violence; recent violence against the intended victim is stronger still. Alcohol and drug use disorders are the diagnoses that matter most (10 to 16 times the risk), far ahead of serious mental illness (about 5 times, and only during specific active processes).",
      "[[Psychopathy]] is a small, far more dangerous subset of antisocial personality. [[Intermittent explosive disorder]] is over-diagnosed and excluded by any other explaining disorder, substance, or antisocial personality.",
      "The [[Tetrad of lethality (violence)|tetrad of lethality]] for violence: a recent serious act, dangerous psychotic process, intent shown in the interview, and the lying patient with corroborative evidence. Lingering anger after affective violence argues for a cool-down admission; a predator's calm is a mask.",
      "Dangerous psychosis means the same three processes as in suicide ([[Command hallucination|command hallucinations]], [[Alien control|alien control]], hyper-religiosity, especially a [[Mission from God]]) plus [[Paranoid process|paranoid process]], which also appears in [[Dysphoric mania|dysphoric mania]] and psychotic depression. Find out what the patient intends to do about the persecutors and whether they are armed.",
      "[[Knoll and Meloy's four steps]]: perceive danger; conclude violence is the only remedy and therefore good; fantasize the act; resolve, plan, procure, practice. Questions exist for each step; the model adapts to non-psychotic grievance and to violence against an individual.",
      "Do not rely on the patient's account of violent intent. Victims, family, police, prior clinicians, the EHR, courts, and social media often know more. Document and telephone the receiving clinician, or the commitment is reversed at the door.",
      "Domestic violence is about power and control, and the assessment can provoke new violence: consult first, safety-plan with the victim, never ask the batterer in front of the victim, never reveal what the victim said. [[Snider's five questions]] for a female victim predict further violence.",
      "[[CADE Approach]]: set the stage through one of many [[Homicidal gates|gates]], screen everyone, then presenting, recent, past, and immediate violent events with verbal videos, behavioral incidents that defeat [[Minimization|minimization]], [[Gentle assumption|gentle assumption]], [[Denial of the specific|denials of the specific]], the [[Catch-all question|catch-all]], and [[Symptom amplification|symptom amplification]].",
      "Past violence deserves more time here than in suicide assessment: the worst act, how many, how recent, violence toward the person now in the fantasies, weapons then and now, arrests and restraining orders, and a [[Superego window|superego window]] on whether violent thoughts trouble or arouse.",
      "Safety contracts are essentially worthless as deterrents to violence and insulting to a predator. Think about your own safety throughout; if it crosses your mind that you are in danger, leave the room."
    ],
    pitfalls: [
      "Assuming a diagnosis of schizophrenia means danger, or, in the effort to de-stigmatize, forgetting that active paranoid or command processes do.",
      "Being reassured by the calm of a predator before or after an act of violence.",
      "Asking a suspected batterer about his violence while the partner is in the room, or confronting him with what she disclosed.",
      "Accepting 'I hurt him pretty bad' or 'I'd never hurt her' instead of asking about fists, bruises, stitches, weapons carried, and nights spent following.",
      "Asking for the intended victim's full name before engagement is secure, and spooking the patient into silence.",
      "Contracting for safety with an antisocial patient, and losing his respect along with the information.",
      "Skipping sexual violence because the patient has no other history of violence, or because the questions are uncomfortable.",
      "Pressing on with a sexual sadist whose victims share your sex, or with any patient, when your intuition says you are not safe."
    ],
    phrases: [
      { say: "Have you ever lost your temper?", when: "Tardiff's routine screen when there is little suspicion. A bridge into the topic for every initial interview." },
      { say: "When you two argue like that, has she ever sort of lost control and hit you or attacked you? How about you, how often have you struck or grabbed her, if at all?", when: "The [[Worst-argument technique]]: the partner first, then gentle assumption." },
      { say: "Did you use your fist, an open hand, or any kind of weapon? Did she need to go to an emergency room? Any stitches, how many?", when: "Behavioral incidents during the verbal video of a presenting assault. Replace every opinion question." },
      { say: "What have you thought about doing to protect yourself? Have you armed yourself with anything at home?", when: "With paranoid process, after the delusion is on the table. The delusion matters less than the plan." },
      { say: "How many times in the past month have you been thinking about hurting her, daily, a couple of times a day, more?", when: "Symptom amplification for the frequency of recent violent ideation." },
      { say: "Right now, are you planning on hurting or killing her? After you leave, do you think the thoughts will come back? Are you planning to go and see her?", when: "Immediate events. 'I need to stay away from her' is reassuring; 'I just have to talk to her, she'll understand' is not." }
    ]
  },

  sections: [
    {
      id: "domains",
      title: "Three domains of violence, and a primer's limits",
      lede: "Violence comes from very different headspaces. Naming them keeps you asking.",
      blocks: [
        { type: "p", text: "The chapter opens on how ordinary violence is. The most likely place to be assaulted is one's own home; roughly a quarter of women in the United States report threatened, attempted, or completed physical or sexual assault by an intimate partner in their lifetime; a meaningful fraction of women treated in emergency departments are there because of a partner. Homicide is among the leading causes of death in young adults, and hundreds of very young children are murdered each year. Clinicians meet violence daily, mostly through its victims. This chapter is about the harder, rarer task: spotting the person about to commit it, within the next one to two weeks." },
        { type: "p", text: "Shea is candid that no method has been empirically proven to do this. He takes that as a reason to use the most sensible techniques available, not to give up. The chapter is a primer: a foundation for everyday practice, with pointers to fuller texts (Simon and Tardiff; Mills, Kroner, and Morgan; Meloy and Hoffman) for advanced study." },
        { type: "table", head: ["Domain", "Headspace", "Typical settings"], rows: [
          ["[[Affective violence]] (Meloy)", "Intense anger and emotion; impulsive; often interpersonal stress and intoxication", "Intimate partner violence, child and older adult abuse, workplace, school, street"],
          ["[[Predatory violence]] (Meloy)", "Planned beforehand; often pleasurable; little or no remorse", "Rape, sadistic abuse of children, sociopathic and psychopathic violence"],
          ["[[Biologically induced violence]] (Shea)", "Driven directly by brain pathophysiology or structural pathology", "Schizophrenia, dysphoric mania, LSD, PCP, bath salts; tumors, seizures, infection, trauma, MS, dementia"]
        ] },
        { type: "p", text: "Violence can also arise from combinations of the three. The practical value of the list is in catching blind spots. A clinician who rarely sees psychosis may miss its subtle signs and never ask the questions that psychosis calls for (see Chapters 11, 12, and 17). A clinician who finds the exploration of psychological, physical, or sexual sadism unnerving may avoid it. Some avoidance is wise: if a female interviewer unexpectedly uncovers a sexual sadist whose victims are women, the detailed history may be better taken by a male colleague, and the reverse for a male interviewer with a patient who targets men." },
        { type: "pearl", title: "Every patient is a potential perpetrator", text: "Most patients are not perpetrators of domestic violence, but almost any could be, and some are involved in gang violence or in what schools euphemistically call bullying. You cannot know unless you ask, and you cannot get the truth unless you ask well. Shea's view is that residencies train this poorly, from domestic violence through rape, pedophilia, and mass murder." },
        { type: "p", text: "Because a sound homicide assessment has so much in common with a sound suicide assessment (Tardiff's point), the main tool already exists. The CASE Approach adapted to violent and homicidal ideation is the [[CADE Approach]], the Chronological Assessment of Dangerous Events. That is why this chapter is short." }
      ],
      practice: [{ kind: "quiz", id: "ch18", label: "Quiz: Chapter 18" }]
    },

    {
      id: "instruments",
      title: "What structured instruments can and cannot do",
      lede: "Actuarial tools predict the next twenty weeks. They do not predict tonight.",
      blocks: [
        { type: "p", text: "Several structured approaches have been developed: the [[HCR-20]], the [[COVR]], the Violence Risk Appraisal Guide, and psychological measures such as Hare's Psychopathy Checklist-Revised and the Novaco Anger Scale. Their emphasis on statistical risk factors, static and dynamic, is the [[Actuarial approach|actuarial approach]], in contrast with clinical judgment." },
        { type: "compare",
          a: { title: "Not shown to predict", items: ["[[Immediate / imminent / short-term risk|Immediate]] violence (24 to 48 hours after the interview)", "Imminent violence (up to 2 weeks)", "The timeframes this chapter cares about"] },
          b: { title: "Shown to predict", items: ["Violence over the following months", "COVR validated for the 20 weeks after completion", "Often better than clinicians over these longer windows"] } },
        { type: "p", text: "Shea therefore does not recommend their routine use in the initial assessment by everyday clinicians: they take time, lack evidence for immediate and imminent prediction, require you to take your eyes off the patient and miss nonverbal clues of deceit, and disrupt the natural flow that engagement depends on. For a clinician who will follow a patient over time, or a forensic consultant asked about the next six months, they are valuable and worth learning. The wider debate on how well anyone can predict violence, from the MacArthur study and the work of Monahan, Lidz, and Appelbaum, is beyond the chapter." },
        { type: "p", text: "As with suicide, statistical risk factors earn their place by changing the interview. They point to venues worth exploring (dangerous psychotic process, current substance use, intense interpersonal anger), and a heavy load of them in a patient who dismissively denies all violent ideation should make you suspect deceit." }
      ]
    },

    {
      id: "risk-factors",
      title: "Risk factors for violence",
      lede: "If you want to be a betting man, bet on past violence.",
      blocks: [
        { type: "p", text: "The single most robust statistical indicator of violence is a history of violence. Tardiff adds a general tendency toward poor impulse control, so ask also about destruction of property, a criminal record, reckless driving, reckless spending, sexual acting out, and suicide attempts. Young men have the highest rates. Growing up in an impoverished, violent area with peer pressure toward violence raises risk, as does growing up abused or watching other family members abused." },
        { type: "p", text: "Among diagnoses, alcoholism and street drug use matter most. Antisocial and borderline personality disorders, conditions secondary to a general medical condition (including intellectual disability and dementia), and disorders in which psychotic or manic process can emerge are the other common correlates. Shea is careful on psychosis: most people with psychotic process, most of the time, are very safe, and the public belief that schizophrenia means danger is a damaging myth. But during exacerbations of specific processes, paranoid delusions and command hallucinations above all, risk rises." },
        { type: "p", text: "Within antisocial personality disorder lies a small subset that is much more dangerous: [[Psychopathy]]. Most people with antisocial personality are not psychopathic. Those who are lack almost all superego function and tend to enjoy violence, including toward animals. This is Meloy's predatory domain, where serial rapists, serial murderers, and torturers are found. [[Intermittent explosive disorder]], with a one-year prevalence around 2.7%, is real but often misapplied: it can be diagnosed only when no other disorder (schizophrenia, schizoaffective disorder, bipolar disorder, PTSD, disruptive mood dysregulation disorder) explains the violence, so in domestic violence with alcohol, drugs, or antisocial personality present it is the wrong label." },
        { type: "list", items: [
          "HCR-20 historical items not already covered: young age at first violent incident, relationship instability, employment problems, early maladjustment, prior supervision failure (probation, for instance).",
          "HCR-20 clinical items: lack of insight, negative attitudes.",
          "HCR-20 risk-management items: a violent plan that lacks feasibility, exposure to destabilizers, lack of interpersonal support, noncompliance with past remediation, current stress."
        ] },
        { type: "p", text: "Much of this surfaces naturally: the social history yields relationship, employment, and support problems; the treatment history yields supervision failure and noncompliance; the history of present stressors yields insight, attitudes, and current stress. The predictive weight of past violence, and of violence and marked maladjustment in childhood, is why the CADE spends more time on past events than the CASE does." }
      ]
    },

    {
      id: "tetrad",
      title: "The tetrad of lethality for violence",
      lede: "Four presentations that should make you think about the next two weeks.",
      blocks: [
        { type: "p", text: "The final formulation of risk weighs statistical factors alongside the patient's immediate presentation and the clinician's intuition. Four aspects of that presentation alert the clinician to immediate, imminent, or short-term violence, and the list mirrors the suicide tetrad from Chapter 17." },
        { type: "steps", items: [
          "The patient presents after a recent serious act of violence, often brought by police.",
          "A type of psychotic process that may precipitate violence is present.",
          "The interview itself indicates that the patient intends to engage in violence.",
          "The patient is lying, and significant corroborative evidence suggests violence is more likely in the immediate, imminent, or short-term timeframe."
        ] },
        { type: "p", text: "For the first element, the more severe the act and the more hostile the patient remains, the greater the concern. Here Meloy's domains earn their keep. After [[Affective violence|affective violence]], a simmering anger during the interview suggests the patient needs a cool-down, and hospitalization may be the way to provide it. With a [[Predatory violence|predator]], the calm demeanor before or after an act means nothing; look through the presenting affect, because it is almost always a mask." },
        { type: "p", text: "Ask whether the potential victim has been the patient's target before, as is usual in domestic violence. A [[Powder keg environment]] forms when the former victim is present, when the patient is surrounded by others with poor impulse control (anger begets anger), or when alcohol or drugs are in the picture for the patient or companions. Most homicides occur between people who know each other well. Corroborative interviews reveal these settings." }
      ],
      practice: [{ kind: "sim", id: "sim-pacing", label: "Interview: The man who won't sit (potential violence)" }]
    },

    {
      id: "psychosis",
      title: "Dangerous psychotic process and paranoia",
      lede: "Most psychotic patients are safe. Some, at specific times, are not, and they are often in the most danger themselves.",
      blocks: [
        { type: "p", text: "De-stigmatizing serious mental illness is part of our work, and it is right to challenge the myth that schizophrenia or bipolar disorder make a person dangerous by nature. It is also easy, in that effort, to forget that specific active processes do. Lake points out the paradox that psychotic patients are often the ones at highest risk of harm: from their own command hallucinations, from poorly trained police, or through [[Suicide by cop]]. Mental health workers are at elevated risk too; the annual rate of nonfatal violence for psychiatrists and custodial mental health staff has been several times the all-occupation rate." },
        { type: "p", text: "The numbers deserve care. People with serious mental disorders are about five times more likely to be violent than those without; people with alcohol or substance use disorders are ten to sixteen times more likely. Roughly 14% of people with severe mental illness commit a violent act in a given year, against a background in which nearly half are untreated, a lack of resources that stigma has helped produce and that violence then reinforces. None of this makes an individual patient five times more dangerous. A specific patient is usually no more dangerous than anyone else unless, at this specific time, one of the processes below is active or mania is marked. Preventing psychotic violence protects victims and protects patients, who may otherwise live with unbearable guilt once the psychosis lifts; some do not survive it." },
        { type: "p", text: "The three processes carry over from suicide assessment: [[Command hallucination|command hallucinations]], [[Alien control|alien control]], and hyper-religiosity, explored with the techniques in Chapters 11, 12, and 17. For violence, attend especially to a [[Mission from God]] to rid the earth of some evil; intense preoccupation with right and wrong can signal homicidal ideation." },
        { type: "exchange", title: "A mission", lines: [
          { who: "Patient", t: "The city is full of filth. Dealers, drunks. God doesn't want them here." },
          { who: "Clinician", t: "How do you mean?" },
          { who: "Patient", t: "He has his ways." },
          { who: "Clinician", t: "Has he given you any ideas about how to get rid of them?" },
          { who: "Patient", t: "He wants their eyes taken. I might do it." },
          { who: "Clinician", t: "Is there anyone in particular you've thought of hurting?" },
          { who: "Patient", t: "The man at the corner. Him." },
          { who: "Clinician", t: "What have you thought of doing to him?" }
        ], note: "Composed. The clinician follows the religious preoccupation down to method and a named target, asking matter-of-factly at every step." },
        { type: "p", text: "The fourth, and the one of immense importance for violence, is [[Paranoid process]]. It is common in schizophrenia and schizoaffective disorder but also in bipolar disorder, where the anger of [[Dysphoric mania|dysphoric mania]] often has a paranoid edge, from hostile wariness to frank delusion, and in psychotic depression. Some authors think psychotic rampage killings are more often driven by dysphoric mania than by schizophrenia. Whatever the cause, finding the delusion is only half the job. The interviewer must learn whether the patient believes it enough to have pursued ways of acting on it." },
        { type: "exchange", title: "What will you do about them?", lines: [
          { who: "Patient", t: "The people upstairs can hear my thoughts. They're going to cut my feet off." },
          { who: "Clinician", t: "What have you thought about doing to protect yourself?" },
          { who: "Patient", t: "I'll put a screwdriver in their necks." },
          { who: "Clinician", t: "Have you armed yourself with a screwdriver or anything else at home?" },
          { who: "Patient", t: "I keep it by the door. Last night I sat up with it till morning." }
        ], note: "Composed. Acting on the premise that the delusion is a real threat, to the point of arming and keeping watch, strongly suggests admission. Any neighbor could be in danger for crossing his path. Chapter 11 describes Resnick's confrontation with the paranoid persecutor and Robinson's techniques for gauging dangerousness." }
      ],
      practice: [{ kind: "sim", id: "sim-neighbor", label: "Interview: The neighbor (delusional disorder and dangerousness)" }, { kind: "sim", id: "sim-voice", label: "Interview: Another voice" }]
    },

    {
      id: "mass-murder",
      title: "Mass murder and the four steps of paranoid violence",
      lede: "You will probably never interview a mass murderer. The model still helps with every paranoid patient.",
      blocks: [
        { type: "p", text: "Mass murders are sometimes committed by people who are not psychotic, but a significant share are driven by psychosis, and nearly half of psychotic perpetrators had mental health care before their rampages. They tend to give warnings, directly to friends, family, or classmates, or indirectly on websites and social media. Shea names Virginia Tech, Aurora, and Tucson as cases with warnings. Wherever you work, the person in front of you might be discoverable with the right training." },
        { type: "p", text: "Lake's profile of the psychotic mass murderer: acts alone, often in daylight; seldom tries to escape and is often killed at the scene; plans carefully; may know the act is illegal but believes it must be done for the greater good, to kill Satan, protect children from demons, prevent a holocaust or genocide; holds the delusion with no distance at all; and, unusually for violence, is typically free of alcohol and drugs at the time." },
        { type: "p", text: "Knoll and Meloy proposed a common phenomenology for paranoid process as it moves toward implementation. Shea finds the same progression in paranoid violence against individuals, which everyday clinicians are far more likely to meet, and offers questions for each step. [[Knoll and Meloy's four steps]]:" },
        { type: "table", head: ["Step", "What the patient concludes", "Questions that reflect it"], rows: [
          ["1. Present danger", "I, or others, face serious harm. Resentment, fear, anger, and righteous condemnation settle into a dark mood, aimed at specific people or at a group, a system, women, the government.", "Tell me more about the people trying to hurt you. What specifically do they do? Do they feel any remorse? Do they taunt or reject you? How set are they on hurting or killing you?"],
          ["2. No other remedy", "Nothing legal or non-violent will stop them. Violence is defensive, necessary, and good. From inside the worldview, the decision is neither illogical nor immoral.", "Have you tried to reason or compromise with them? Are there ways to be safe: police, moving, the principal? On 0 to 10, how sure are you they will try to kill you? How soon do you need to act?"],
          ["3. Fantasy", "The act and its effect on the persecutors are pictured, repeatedly.", "What have you pictured doing to protect yourself, or to right this wrong? Do you fantasize about making them pay? Movie or game scenes you picture doing to them? Torture? What would you say as you killed them? How much of your day, 50%, 70%, 90%?"],
          ["4. Resolve", "A decision to proceed: planning, procuring, practicing, a date. Explored fully with the CADE.", "How would you kill them? What other ways have you thought of? Have you looked online for methods? Have you gotten the weapons? Practiced? Is there a plan? A date?"]
        ] },
        { type: "p", text: "The model adapts to a non-psychotic person you worry about. Replace paranoid process with an evolving bitterness, contempt, and hatred for a group: those who abused a student, those seen as undeserving of their status, women who are felt to have rejected a lonely man. The four steps become: the wrong will continue; nothing but violence can right it or punish the wrongdoers; violence is fantasized; a resolve forms, with planning and procurement." },
        { type: "pearl", title: "When you find a marked paranoid system with any hint of violence", text: "Consult a colleague about how to proceed, make sure of your own safety in this and future sessions, and consider warning potential victims under the [[Tarasoff duty]], which in the United States requires clinicians to contact people they believe to be in danger even at the cost of confidentiality. The general violence textbooks cover the duty in detail." }
      ]
    },

    {
      id: "corroboration",
      title: "Don't rely on the patient: corroboration and domestic violence",
      lede: "The first rule about a patient's account of violent intent is not to rely on it.",
      blocks: [
        { type: "p", text: "The third element of the tetrad, intent shown in the interview, gets the whole final part of the chapter. The fourth, the lying patient, gets this rule. Family and friends may be far better sources. So may police, previous and current therapists, and crisis clinicians. The EHR can show arrests, violent episodes, involuntary commitments, and restraining orders; court records help; and anything the patient has posted publicly can matter, since mass murderers frequently leave a trail on social media." },
        { type: "p", text: "Appelbaum and Roth note that receiving hospitals often reverse involuntary commitments at the door because what the patient, family, or police said was never adequately recorded or passed along. Write it down, send it, and telephone the clinician who will assess the patient." },
        { type: "p", text: "Domestic violence, whether [[Intimate partner violence|intimate partner violence]], older adult abuse, or child abuse, is where perpetrators most reliably minimize or deny, and where victims usually give the better history. It is driven by the perpetrator's need for power and control, which makes the assessment itself a risk: an interview in which a perpetrator is made to discuss his behavior can feel threatening to him and increase the danger to the adult or child victim. Shea's guidance for the situation where both present at once, as in an emergency department:" },
        { type: "list", items: [
          "Consider consultation before, and after, interviewing the perpetrator.",
          "Discuss safety frankly and build a collaborative safety plan with the victim before interviewing the perpetrator.",
          "Never ask the alleged batterer about the violence in front of the alleged victim.",
          "Never tell the perpetrator what the victim disclosed. Use corroborating information from police, neighbors, courts, and medical staff instead.",
          "For practical question sets, Shea recommends the Oregon Department of Human Services material and the questions of Ganley and Schechter."
        ] },
        { type: "p", text: "From emergency department research by Snider and colleagues, twenty candidate questions for female victims of partner violence were tested for predictive value and five stood out. [[Snider's five questions]]:" },
        { type: "steps", items: [
          "Has the physical violence increased in frequency or severity over the past 6 months?",
          "Has he ever used a weapon or threatened you with a weapon?",
          "Do you believe he is capable of killing you?",
          "Have you ever been beaten by him while you were pregnant?",
          "Is he violently and constantly jealous of you?"
        ] }
      ]
    },

    {
      id: "stage",
      title: "Setting the stage for the CADE",
      lede: "Homicide has more gates than suicide. Use whichever one the patient is already standing near.",
      blocks: [
        { type: "p", text: "Part 3 is the heart of the chapter, and it assumes you know the CASE Approach; without Chapter 17 the techniques below can be misread. The strategy is the same. Set the stage, then explore presenting, recent, past, and immediate violent events, ideation and behavior, in that order. The goal is to learn whether a concrete plan exists, what action has been taken on it, and anything else that reflects intent, along with signs that the patient may act impulsively. If you come to believe a specific person is at risk, the [[Tarasoff duty]] applies." },
        { type: "p", text: "Where suicide offered three affective gateways, violence offers at least nine [[Homicidal gates]]: psychosis, interpersonal conflict, money and other practical needs, revenge, jealousy, political concerns, gang membership and organized crime, terrorism, and violence for pleasure or pathological sexual desire. Any of them can open an exploration of dangerousness." },
        { type: "exchange", title: "The worst argument", lines: [
          { who: "Clinician", t: "Tell me about the worst argument the two of you have had. What was it about, and how did it go?" },
          { who: "Patient", t: "Money, like always. She was screaming, I was screaming. It got ugly." },
          { who: "Clinician", t: "When it gets like that, has she ever sort of lost control and hit you, or come at you?" },
          { who: "Patient", t: "She's thrown stuff. Slapped me once." },
          { who: "Clinician", t: "And you, in arguments like that? How often have you struck her or grabbed her, if at all?", tag: "Gentle assumption" },
          { who: "Patient", t: "(pause) A few times. Grabbed her arms, mostly. Once I pushed her into the wall." }
        ], note: "Composed. The [[Worst-argument technique]]: the patient first describes the intensity of the fight, is asked about the partner's violence, and so feels equally heard and safer; the gentle assumption ('how often, if at all') then draws a more valid answer than 'have you ever.' Partner violence sometimes runs both ways, and the sequence reveals that too. Shea notes women are often perpetrators as well; his examples simply happen to run male to female." },
        { type: "p", text: "Ganley and Schechter's sequence does the same thing with a normalization and a run of fact-finding behavioral incidents: all families have conflicts, how does yours resolve them; what happens when your partner wants their way; have you been hurt in an argument, has your partner used force or broken things, have you felt threatened; tell me about the worst and most recent episodes, are you afraid; and only then, have you ever used force against your partner, worst episode, most recent, is your partner afraid of you. Even with little suspicion, Tardiff advises routine screening with something as simple as 'Have you ever lost your temper?' Once violence is on the table, you are looking for stated intent and, more importantly, reflected intent, which here means the feelings, thoughts, planning, and actions that suggest impending violence and often say more than the answer to 'Do you think you'll act on these thoughts?'" }
      ],
      practice: [{ kind: "drill", id: "validity", label: "Drill: validity techniques" }]
    },

    {
      id: "presenting-recent",
      title: "Presenting and recent violent events",
      lede: "The verbal video, built to defeat minimization, and the two months where recent violence predicts more.",
      blocks: [
        { type: "p", text: "When a patient arrives after a violent episode, build the [[Verbal video|verbal video]] exactly as for a suicide attempt: a series of [[Behavioral incident|behavioral incidents]], rewinding any gap ('Go back to when you slapped your son. What happened next?'). Clarify the actual acts: fist, open hand, or weapon. Learn the motivation and how planned or impulsive it was, ask directly how the patient feels about the act and about the victim now, and find out what happened afterward and how they came to be in front of you." },
        { type: "compare",
          a: { title: "Opinion questions (invite minimization)", items: ["Did you hurt her badly?", "Was it serious?", "Do you think you went too far?"] },
          b: { title: "Behavioral incidents (cut through it)", items: ["Did you leave any bruises?", "Did she need to go to an emergency room?", "Did she get stitches? How many?", "Were X-rays taken? Any broken bones?", "How many times did you actually strike her, 10, 20, 30? (symptom amplification)"] } },
        { type: "p", text: "Ask directly, and without judgment: At any point did you threaten to kill him? When people get this angry they often feel out of control at some point; were you ever afraid you were? Did the urge to kill your son cross your mind, even for an instant? The tone is matter-of-fact interest in what happened. Then move smoothly into the previous two months." },
        { type: "p", text: "[[Recent suicide events|Recent events]] were the richest region in the CASE; recent violent events may be even more telling, because recent violence predicts future violence and recent assault on the intended victim predicts it best. The task is to uncover planning and action in the past two months: methods, the timing and place of any proposed or completed assault, and whether accomplices are involved. The same persistent sequence applies, with gentle assumption, denial of the specific, the catch-all, and symptom amplification ('How many times in the past five to eight weeks have you thought about hurting her, daily, a couple of times a day, more?' and 'How close have you come to actually hitting her?'). If the questions anger the patient, back off and tend to engagement; the irritation itself tells you something. Shea is blunt that this is not an arena for the squeamish and that role play is the way to get comfortable. It is always acceptable, and often advisable, to excuse yourself and consult, and to call security before proceeding if your safety is in question." },
        { type: "case", title: "The pleasant young man who follows his ex", text: "Summarized from the chapter. A 27-year-old presents for depression after a break-up his girlfriend initiated, and mentions that he has been following her. The clinician builds the picture with behavioral incidents: where she lives and works, when he follows (mostly when she comes home), whether he looks in windows or uses binoculars (thought of it), whether he photographs her (no), how many nights in the past month (six or seven, after an amplification of 10, 15, 20), whether he thinks about hurting her while following (never), what he carries (nothing). Along the way the clinician has learned, naturally, where she works and how she gets home, so that she could be identified if a warning became necessary; her surname is left until the assessment is done, so as not to spook him. The clinician names the behavior as stalking and illegal and asks if he wants help stopping, then, by normalization and gentle assumption, explores sexual fantasies about her: forced sex, a knife, cutting. When the patient grows distressed, the clinician backs off to preserve engagement, checks whether he carries a weapon when following (no), and widens the lens: other women, other following, rape ('No. Sometimes I worry about that, though'), and, with a catch-all, pornography and, troublingly, occasional masturbation to images of children. A predator, or a predator in the making, has come into view in a patient who presented as pleasant and sad." },
        { type: "p", text: "Shea gives that illustration at length because training in uncovering violence, and sexual violence in particular, is thin across disciplines, yet the task arises in private practice, college counseling, and community clinics as well as emergency rooms. Any person with a history of violence of any kind should be screened for sexual violence, and incest, rape, and pedophilia are disturbingly common in people with no other violent history. Partner rape is a common part of intimate partner violence. For current domestic violence, symptom amplification ('How many times do you think you've hit her, 20, 40, more?') is the tool for an honest frequency, now and for the more distant past." }
      ],
      practice: [{ kind: "sim", id: "sim-pills", label: "Interview: Just a few pills (verbal video)" }]
    },

    {
      id: "past-immediate",
      title: "Past violence, immediate intent, and your own safety",
      lede: "Past violence gets more time here than in the CASE. Immediate intent gets direct questions and open eyes.",
      blocks: [
        { type: "p", text: "Time still limits the past region in an initial assessment, but because past violence predicts future violence so strongly, it warrants explorations the CASE does not. It is also where the best evidence of a predator, as opposed to an affectively or biologically driven patient, tends to appear." },
        { type: "list", items: [
          "What is the worst act of violence? Build a verbal video and get specifics; 'I hurt him pretty bad' is an opinion.",
          "Roughly how many acts of violence have there been?",
          "When was the most recent?",
          "Has there been violence in the past against anyone who is now the object of violent ideation or fantasy?",
          "Has a weapon been used, and is one being considered now?",
          "Arrests, jail, restraining orders related to violence?"
        ] },
        { type: "p", text: "Particularly severe past violence should raise your concern and prompt you to check, in the immediate region, whether a similar act is being contemplated now. Meloy suggests exploring thoughts and feelings before, during, and after past acts, a [[Superego window]]: how much guilt and shame are there, and do violent thoughts trouble the patient or arouse him? Two further probes: Is there anything you have done that has made you feel guilty? and the [[Price question]], If the price were right, is there anything you would not do? Sociopathy and predatory process sometimes bloom in the answers. Predators can also take pride in their skill, so an [[Induction to bragging|induction to bragging]] occasionally works: you seem very clever at covering your tracks; if you could find a completely foolproof way to rape one of the students, do you think you would? If yes, what have you thought of doing?" },
        { type: "p", text: "[[Immediate suicide events|Immediate events]] are approached calmly and plainly. If a victim has been named, ask about that person's safety outright: Right now, are you planning on hurting or killing her? How well in control of those desires do you feel? After you leave, will the thoughts return? If they do, what will you do? Is the patient planning to seek out the person they are angry with? 'No, I need to stay away from her' and meaning it is mildly reassuring; 'I've got to at least talk to her, she'll understand' is not." },
        { type: "p", text: "Safety contracting fares worse here than in suicide assessment. As an assessment tool it may help only with patients truly upset by their violence; with sociopaths and predators, who feel no guilt, it is useless. As a deterrent Shea considers it essentially worthless: predators are professional liars, and even sincere perpetrators of affective violence find that all bets are off in the next angry exchange. With an antisocial patient the gesture can make you look naive ('what a stooge'). Better to be candid." },
        { type: "exchange", title: "Earning trust", lines: [
          { who: "Clinician", t: "I think we both know that, given your history, I'd be foolish to trust you, and I don't. That doesn't mean I don't want to help you. It means we each have to earn it. So tell me, as honestly as you can: how dangerous do you think you are right now?" }
        ], note: "Composed from Shea's model statement. Candor can catch a predator off guard and engage him as a more worthy opponent." },
        { type: "pearl", title: "The patient may assault you", text: "This is the other difference from suicide assessment, and it applies at any point in the interview. Think about safety throughout and quit the interview if it becomes an issue. If it crosses your mind that you might be in danger, you should probably leave the room; your intuition may be ahead of you. Although clinicians predict violence over weeks and months poorly, immediate violence can often be predicted, and the [[Predictors of immediate assault|predictors]] follow common sense: irritability, boisterousness, verbal and physical threats, attacks on objects, confusion." },
        { type: "p", text: "That last predictor points to biology. In every initial interview, and especially in the emergency department, consider whether the person could become violent from an organic cause. Look for alcohol on the breath, unsteady gait, slurred speech, dyscoordination, nystagmus, pupillary signs, and confusion; tremor, incontinence, abnormal eye movements, poor hygiene, cushingoid facies, and exophthalmos can all point to an organic driver. Every violent patient in an emergency department needs a physical examination, vital signs, and the laboratory tests the picture calls for." },
        { type: "p", text: "A final note on incest. Once the CADE has been applied to the child principally suspected of being abused, find out about the other children. Gentle assumption is effective ('Which of your other children have you had thoughts of having sex with, even fleeting thoughts?'), and if that is denied, a denial of the specific for each child by name. These patients lie and minimize so readily that asking separately about each child can yield surprises, not least through the nonverbal leakage you may see as you name them." }
      ]
    },

    {
      id: "conclusion",
      title: "Conclusion",
      lede: "On the macro level violence will outlast us. On the micro level, one prevented act is a very good thing.",
      blocks: [
        { type: "p", text: "Skillfully used, the CADE Approach yields a rich database across all four regions. Combined with the statistical risk factors gathered elsewhere in the interview and with corroborative sources, it supports the clinician's best estimate of immediate or imminent violence. The limiting factor, as with suicide, is the interviewer's skill, tenacity, sensitivity, and intuition. Shea closes with the thought that preventing even one act of violence over a career, domestic, gang-related, or psychotic, is a very good thing, and that the pains prevented extend far beyond the bruises, as the chapter's opening line from Dianne Feinstein suggests." },
        { type: "p", text: "The chapter also marks the end of the printed book. Part IV, five bonus chapters on transforming anger and disengagement, culturally adaptive interviewing, vantage points for psychotherapy, motivational interviewing, and the Medication Interest Model, together with the appendices, lives in the companion ebook." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The full stalking interview with Timothy, which runs considerably longer than the summary here and shows the clinician's handling of distress, backing off, and the catch-all into sexual material; the complete HCR-20 item list; the Knoll and Meloy question sets in full; and Ganley and Schechter's domestic violence sequence." },
    { title: "Earlier chapters this one depends on", text: "Chapter 17 for the CASE Approach, which the CADE assumes; Chapter 5 for the validity techniques including induction to bragging; Chapter 11 for Resnick's confrontation with the paranoid persecutor and Robinson's techniques for gauging the dangerousness of paranoid ideation; Chapter 12 for command hallucinations; and Chapter 9 for dysphoric mania." },
    { title: "Resources Shea recommends", text: "Simon and Tardiff, Textbook of Violence Assessment and Management; Mills, Kroner, and Morgan, Clinician's Guide to Violence Risk Assessment; Meloy and Hoffman, International Handbook of Threat Assessment; Tardiff's pocket guide, Assessment and Management of Violent Patients; the Oregon DHS domestic violence materials; and the MacArthur Violence Risk Assessment Study for the prediction debate." }
  ]
};
