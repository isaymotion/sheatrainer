/*
  Psychiatric Interviewing Trainer — Part II simulated interviews and technique drills.
  All cases and dialogue are composed for teaching. Names are fictional.
  Same schema as part1-practice.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
(function () {
  var part = (window.TRAINER.parts.part2 = window.TRAINER.parts.part2 || {});

  part.simulations = [
    /* ─────────── 1. Mood: hidden bipolar history ─────────── */
    {
      id: "sim-opposite", title: "Just the opposite", chapters: [9],
      setting: "Outpatient intake, minute 15 of 50.",
      who: "Mr. Leonard Abad, 59, retired fire captain, here with his wife. Severe depression for about two months.",
      goal: "Explore depression conversationally, uncover a past manic episode, and address firearm safety.",
      startB: 40, start: "n1",
      nodes: {
        n1: {
          p: "I don't enjoy anything. My wife says I should go fishing. I haven't touched my rods since spring.",
          cue: "Speaks slowly with long pauses; his wife watches him.",
          choices: [
            { t: "What did fishing used to be like for you, before all this?", b: 8, d: 6, fb: "You learned what he normally enjoys, a baseline for anhedonia that also engages him as a person.", next: "n2" },
            { t: "Okay. How's your appetite? Sleep? Energy? Concentration?", b: -8, d: 6, fb: "A stilted, checklist expansion. Correct region, wrong feel; he becomes a respondent, not a partner.", next: "n2" },
            { t: "You should try to go anyway. It might help.", b: -6, d: 0, fb: "Advice before understanding. It echoes what his wife says and suggests you don't grasp anhedonia.", next: "n2" }
          ]
        },
        n2: {
          p: "It was my peace. Now even my grandkids… I love them, but I can't feel it. And I'm up at four every morning with my mind racing over everything that's wrong.",
          cue: "Eyes wet; his voice drops.",
          choices: [
            { t: "Jolted awake by worries, one after another, and dreading the day ahead?", b: 10, d: 8, fb: "You named the distinctive quality of early morning awakening. Recognition makes him feel understood and confirms a melancholic picture.", next: "n3" },
            { t: "Lots of people wake early as they get older.", b: -8, d: -4, fb: "Normalizing away a key neurovegetative symptom.", next: "n3" }
          ]
        },
        n3: {
          p: "Exactly. Like there's no future. I don't see the point anymore.",
          cue: "Looks at the floor.",
          choices: [
            { t: "With all the pain you're in, have you had thoughts of killing yourself?", b: 5, d: 12, fb: "Shame attenuation framed through his pain, asked plainly. Hopelessness demands a direct suicide inquiry.", next: "n4" },
            { t: "You're not thinking of hurting yourself, are you?", b: -4, d: -8, fb: "A negative question invites \"no.\" With hopelessness this explicit, that could be a dangerous miss.", next: "n3x" }
          ]
        },
        n3x: {
          p: "No.",
          cue: "His wife's eyes widen; she looks at him.",
          choices: [
            { t: "You said you don't see the point anymore. Sometimes people who feel that way think about ending their life. Has that happened for you?", b: 6, d: 12, fb: "A referred gate and normalization recover the inquiry, and his wife's reaction told you something.", next: "n4" },
            { t: "Good. Let's talk about your medical history.", b: 0, d: -10, fb: "Accepting the denial leaves a possible lethal risk unexplored.", next: "endMissed" }
          ]
        },
        n4: {
          p: "(long pause) I've taken my service revolver out of the safe a few times. Just held it.",
          cue: "His wife covers her mouth.",
          choices: [
            { t: "(calmly) Thank you for telling me. When you held it, was it loaded? What stopped you?", b: 4, d: 14, fb: "Calm, fact-finding behavioral incidents. Details of rehearsal, intent, and protective factors matter for safety planning.", next: "n5" },
            { t: "You need to get rid of that gun today.", b: -6, d: 2, fb: "Firearm safety is essential, but leading with a directive before understanding can shut down disclosure. Return to it as part of a collaborative safety plan.", next: "n5" }
          ]
        },
        n5: {
          p: "Loaded. My granddaughter's photo on the dresser, I guess. I'm not sure it'll stop me next time.",
          cue: "Quiet, steady.",
          choices: [
            { t: "That matters a lot, and we'll make a plan together for the gun and for your safety tonight. One more important question: has there ever been a time, even years ago, when you felt just the opposite of this? Super energized, barely sleeping, ready to take on the world?", b: 4, d: 12, fb: "Safety first, then the bipolar question. The answer changes treatment, and deep depression hides the memory.", next: "n6" },
            { t: "Let's start an antidepressant and see you in two weeks.", b: -8, d: -10, fb: "Imminent risk needs a safety plan now, and you haven't screened for mania before an antidepressant.", next: "endRisky" }
          ]
        },
        n6: {
          p: "(faint smile) Years ago, at the station. Didn't sleep for days. The guys called me Motormouth. I took the engine out without orders once.",
          cue: "His wife nods slowly.",
          choices: [
            { t: "(to his wife, with his permission) Do you remember that time? What was it like at home?", b: 6, d: 12, fb: "Patients seal over past manias; family often recall the severity and any danger more fully.", next: "endGood" },
            { t: "That sounds like a fun time. Anyway, about the antidepressant…", b: -6, d: -10, fb: "You found a probable manic episode and moved past it. An antidepressant alone could trigger mania or a mixed state.", next: "endRisky" }
          ]
        },
        endGood: { end: true, p: "WIFE: He was a different man. Three weeks. They put him in the hospital. He'd never talk about it.", cue: "Mr. Abad looks down, then nods.", debrief: "Conversational exploration uncovered melancholic depression, active suicidal rehearsal with a loaded firearm, and a probable past manic episode: likely bipolar I disorder, current episode depressed. In practice: immediate collaborative safety planning (including firearm removal), supervisor involvement, a full suicide assessment, and treatment planning that accounts for bipolar disorder. Ask about substances too." },
        endRisky: { end: true, debrief: "Two traps closed at once: imminent firearm risk without a safety plan, and an antidepressant started without asking about mania. Every depressed patient needs the \"just the opposite\" question, and family collateral helps because past manias are sealed over." },
        endMissed: { end: true, debrief: "A negative question, accepted at face value, left hopelessness unexplored. His wife's reaction was a cue. A referred gate (\"You said you don't see the point…\") can reopen the door. Hopelessness is a stronger predictor of suicide than depressed mood." }
      }
    },

    /* ─────────── 2. Mood: dysphoric mania ─────────── */
    {
      id: "sim-angst", title: "Before the antidepressant", chapters: [9],
      setting: "Psychiatric consultation requested by a therapist.",
      who: "Maya Torres, 19, college freshman with long-standing OCD. Her therapist asks for an antidepressant for severe, angry depression.",
      goal: "Look for a mixed state before any antidepressant is started.",
      startB: 35, start: "n1",
      nodes: {
        n1: {
          p: "Everything's unbearable. I'm so angry all the time. At everyone. The whole world is rotten.",
          cue: "Intense, palpable angst; she sits on the edge of her seat.",
          choices: [
            { t: "That sounds unbearable. How have your sleep and appetite been?", b: 6, d: 8, fb: "Empathy, then neurovegetative symptoms. Compare their severity to her angst: mild symptoms with intense angst is a clue.", next: "n2" },
            { t: "Your therapist mentioned depression. We can start medication today.", b: -4, d: -6, fb: "Premature. Broad anger at the world plus intense angst should make you look for a mixed state first.", next: "n2" }
          ]
        },
        n2: {
          p: "Sleep is weird. I'm up till three doing pull-ups or reorganizing my room. I'm not even tired. I eat okay.",
          cue: "Fidgeting, but no pressured speech.",
          choices: [
            { t: "Do you feel driven to do something about how bad things are, to do it now, even if it doesn't seem smart?", b: 6, d: 12, fb: "One of Shea's three questions for dysphoric mania. The answer helps separate inner drivenness from the helplessness of agitated depression.", next: "n3" },
            { t: "So you're not sleeping much. That's insomnia from depression.", b: -2, d: -4, fb: "Decreased need for sleep with energy to spare is not the same as depressive insomnia.", next: "n3" }
          ]
        },
        n3: {
          p: "Yes. Like something's pushing me. Sometimes I want to cut just to see blood, to let it out. It doesn't feel like me.",
          cue: "Shows faint marks on her wrist.",
          choices: [
            { t: "Thank you for trusting me with that. When those urges come, do you also have thoughts of killing yourself?", b: 8, d: 12, fb: "Self-harm urges felt as foreign, with drivenness, raise concern. A direct suicide inquiry comes first.", next: "n4" },
            { t: "Cutting is a sign of borderline personality disorder.", b: -10, d: -6, fb: "Label slapping. Dysphoric manic behavior is easily mislabeled as borderline personality disorder.", next: "n4" }
          ]
        },
        n4: {
          p: "Sometimes. Not a plan. Just flashes. They scare me.",
          cue: "Eyes fill with tears.",
          choices: [
            { t: "That makes sense. Have you ever taken an antidepressant, say for your OCD? What happened?", b: 4, d: 12, fb: "Treatment-emergent agitation is a key historical clue to bipolar process.", next: "n5" },
            { t: "Let's start sertraline for the depression and OCD.", b: -6, d: -10, fb: "You haven't asked about prior antidepressant reactions, past hypomania, or family history.", next: "endMissed" }
          ]
        },
        n5: {
          p: "In high school. My parents said I got \"an attitude\" and stopped sleeping. They stopped it after a month.",
          cue: "Shrugs.",
          choices: [
            { t: "Does anyone in your family have bipolar disorder, serious mood swings, or problems with alcohol or drugs?", b: 4, d: 12, fb: "Family history rich in mood and substance disorders is another tip-off for a mixed state.", next: "endGood" },
            { t: "That was probably just a side effect. Let's try a different one.", b: -6, d: -10, fb: "Agitation, poor sleep, and irritability on an antidepressant suggest bipolar process. Another antidepressant alone risks harm.", next: "endMissed" }
          ]
        },
        endGood: { end: true, p: "My uncle was bipolar. My mom's dad drank.", cue: "She looks at you.", debrief: "Intense angst out of proportion to neurovegetative symptoms, broad anger, inner drivenness, foreign self-harm urges, decreased need for sleep, a past antidepressant reaction, and a family history: a likely mixed state (Shea's proposed dysphoric mania). Advise against an antidepressant without a mood stabilizer and involve her therapist, family (with consent), and supervisor. Monitor for self-harm, suicide, and violence." },
        endMissed: { end: true, debrief: "The depressive pain camouflaged a probable mixed state. Before any antidepressant: current hypomanic signs, past hypomania or mania, prior antidepressant reactions, and family bipolar history. Missed mixed states can worsen on antidepressants alone." }
      }
    },

    /* ─────────── 3. Beneath the mood disorder ─────────── */
    {
      id: "sim-shade", title: "The window shade", chapters: [10],
      setting: "Community clinic, mid-interview.",
      who: "Mrs. Rosa Delgado, 55, school cafeteria manager, with moderate to severe depression after her husband's job loss.",
      goal: "Open a cage of rumination, hear the warning signs, and support tears.",
      startB: 40, start: "n1",
      nodes: {
        n1: {
          p: "The mortgage. I keep thinking about the mortgage. We'll lose the house and it's my fault for not working more hours.",
          cue: "She has returned to this four times.",
          choices: [
            { t: "The money is a real problem and we'll come back to it. The depression may also be making it harder to solve. If we drift, I'll gently bring us back. How has all this affected your sleep?", b: 8, d: 10, fb: "Validate, explain why, promise to return, set a frame. This is how a cage opens.", next: "n2" },
            { t: "Please stop worrying about the mortgage for now.", b: -8, d: 0, fb: "She can't. The cage tightens and she feels unheard.", next: "n1x" },
            { t: "Tell me more about the mortgage.", b: 2, d: -4, fb: "Following once can help her ventilate, but repeatedly following feeds the rumination.", next: "n1x" }
          ]
        },
        n1x: {
          p: "It's all I think about. What will we do?",
          cue: "Wringing her hands.",
          choices: [
            { t: "It's a heavy weight. I want to help with it, and to do that I need to understand the depression too. We'll come back to the house, I promise. How long does it take you to fall asleep?", b: 8, d: 10, fb: "Recovery: acknowledgment, a reason, a promise, a focused question.", next: "n2" }
          ]
        },
        n2: {
          p: "Hours. And at work I sometimes just want to close my eyes and make everything go away.",
          cue: "Rubs her eyes.",
          choices: [
            { t: "Not sleepy, but an almost oddly strong urge to shut your eyes and shut the world out?", b: 10, d: 8, fb: "The window shade response. Recognition that you know this experience deepens engagement.", next: "n3" },
            { t: "You should take some time off.", b: -6, d: 0, fb: "Advice skips the possible meaning of \"make everything go away.\"", next: "n3" }
          ]
        },
        n3: {
          p: "Yes. I didn't think anyone else felt that. Honestly, my family would be better off without me dragging them down.",
          cue: "Voice breaks.",
          choices: [
            { t: "You feel like a burden to them. Sometimes when people feel that way, they have thoughts of killing themselves. Have you?", b: 6, d: 14, fb: "You heard perceived burdensomeness, one of the strongest interpersonal warning signs, and asked directly.", next: "n4" },
            { t: "Your family loves you. They'd never think that.", b: -8, d: -10, fb: "Reassurance dismisses the warning sign and closes the door.", next: "endMissed" }
          ]
        },
        n4: {
          p: "(starts crying) Sometimes. At night. I'm sorry, I didn't want to cry.",
          cue: "Tears; she reaches for her sleeve.",
          choices: [
            { t: "(gently, pausing) There's nothing to be sorry for. Would you like a tissue? Take your time.", b: 10, d: 4, fb: "Allow, offer, listen. Defenses drop, and what comes next is often the most important material.", next: "n5" },
            { t: "It's okay. Let's move on to something easier.", b: -8, d: -6, fb: "Ending tears early often reflects our own discomfort.", next: "n5" }
          ]
        },
        n5: {
          p: "I've thought about the pills my husband takes for his back. I haven't done anything.",
          cue: "Wipes her eyes, looks up.",
          choices: [
            { t: "Thank you for telling me. About how many are in the house? What has kept you from acting on the thoughts?", b: 5, d: 12, fb: "Fact-finding on means and protective factors, continuing the suicide assessment calmly.", next: "endGood" },
            { t: "You'd never actually do it, though.", b: -10, d: -10, fb: "A leading statement that invites reassurance rather than truth.", next: "endMissed" }
          ]
        },
        endGood: { end: true, p: "A full bottle. My grandson. I couldn't do that to him.", cue: "She breathes out.", debrief: "Opening the cage let you gather the depression data; the window shade question built trust; and hearing burdensomeness led to suicidal ideation, a means, and a protective factor. In practice, continue with intent and planning, safety planning including securing the medication, and involve family with consent." },
        endMissed: { end: true, debrief: "Perceived burdensomeness is one of the most reliable interpersonal warning signs of a suicide attempt. Reassurance or a leading question closes the door. Hear the theme and ask directly." }
      }
    },

    /* ─────────── 4. Psychosis: alcohol withdrawal ─────────── */
    {
      id: "sim-floor", title: "Something on the floor", chapters: [11],
      setting: "Emergency department, 1 a.m. Three police officers are still in the hallway.",
      who: "Mr. Ray Castillo, 41, found trying to climb a fence. Sweating, clothes soiled. He denies drinking.",
      goal: "Recognize a potentially fatal organic psychosis and act.",
      startB: 30, start: "n1",
      nodes: {
        n1: {
          p: "There's something following me. Little black things. You see them?",
          cue: "Points at the floor, then pulls his feet up. Hands trembling.",
          choices: [
            { t: "When did they start? Do you see them more in the dark?", b: 4, d: 10, fb: "Vivid, moving visual hallucinations of small creatures, worse in darkness, point toward an organic cause such as withdrawal.", next: "n2" },
            { t: "There's nothing there. Let's talk about your mental health history.", b: -8, d: 0, fb: "Arguing with the experience, then a swing-type question away from it. You've also skipped the urgent medical possibilities.", next: "n2" },
            { t: "Sounds like schizophrenia. Do you hear voices too?", b: -4, d: 2, fb: "Premature. Visual hallucinations rarely occur alone in schizophrenia; new ones suggest organic causes.", next: "n2" }
          ]
        },
        n2: {
          p: "Since yesterday. Worse when the lights go off. I told you, I don't drink.",
          cue: "Sweating heavily; his attention drifts mid-sentence.",
          choices: [
            { t: "Okay. Since your last drink, if there was one, has your sleep been rough? Feeling jumpy or shaky? Any upset stomach?", b: 6, d: 12, fb: "Ask about symptoms, not a problem. Patients who deny drinking often admit withdrawal symptoms.", next: "n3" },
            { t: "The officers found you outside a bar. Don't lie to me.", b: -12, d: 0, fb: "Confrontation hardens denial and the interview.", next: "n3" }
          ]
        },
        n3: {
          p: "Haven't slept in two days. Can't keep anything down. My hands won't stop.",
          cue: "His attention fluctuates; he startles at a noise.",
          choices: [
            { t: "Check his vital signs now, cut the interview short, and get an immediate medical evaluation for withdrawal and delirium tremens.", b: 4, d: 12, fb: "Sweating, tremor, insomnia, nausea, fluctuating attention, and visual hallucinations: withdrawal delirium can be fatal. Act now.", next: "n4" },
            { t: "Continue the full psychiatric intake; medicine can see him after.", b: -4, d: 4, fb: "A thorough interview isn't worth a missed DT. Suspected DTs need immediate medical care.", next: "endMissed" }
          ]
        },
        n4: {
          p: "OFFICER: Need anything else from us before we go?",
          cue: "The officers are heading out.",
          choices: [
            { t: "Yes, thanks. Where did you find him? Any known drinking or drugs? Was anyone hurt, and is there any chance he hit his head?", b: 0, d: 14, fb: "Collegial, specific questions. Police often know key facts, including possible head trauma as another cause of confusion.", next: "endGood" },
            { t: "No, we've got it.", b: 0, d: -6, fb: "A lost source of collateral you may not get elsewhere.", next: "endOk" }
          ]
        },
        endGood: { end: true, p: "OFFICER: Behind the bar on Fifth. Locals say he drinks all day. He went down hard on the pavement when we got him.", cue: "Medical staff arrive to start treatment.", debrief: "Vivid visual hallucinations, autonomic signs, and fluctuating attention pointed to alcohol withdrawal delirium, a potentially fatal emergency, and the officers added heavy drinking and a possible head injury. Psychosis is a syndrome: always ask what is causing it." },
        endOk: { end: true, debrief: "You recognized the emergency and acted, which matters most. The officers could also have told you where he was found, his drinking, and whether he hit his head. Interview law enforcement collegially." },
        endMissed: { end: true, debrief: "Delirium tremens can be fatal without prompt treatment. When withdrawal is suspected, cut the interview short and get immediate medical evaluation." }
      }
    },

    /* ─────────── 5. Delusional disorder and dangerousness ─────────── */
    {
      id: "sim-neighbor", title: "The neighbor", chapters: [11],
      setting: "Private outpatient clinic.",
      who: "Mrs. Helen Marsh, 61, retired librarian, well dressed and articulate, asking for help with her neighbor.",
      goal: "Explore a delusion without colluding or arguing, and assess dangerousness.",
      startB: 40, start: "n1",
      nodes: {
        n1: {
          p: "My neighbor is pumping something through the wall vents at night. I've kept a log for months. You believe me, don't you?",
          cue: "Hands you a neat notebook of dates and times.",
          choices: [
            { t: "It's an unusual situation, so I'd like to understand more before deciding. What have you noticed most recently?", b: 8, d: 8, fb: "You're neither for nor against. Rapport holds and the story keeps coming (Robinson).", next: "n2" },
            { t: "Yes, I believe you.", b: 4, d: 0, fb: "Colluding with a delusion undermines trust later, and may reinforce it.", next: "n2" },
            { t: "That sounds like a delusion. Have you been diagnosed with anything before?", b: -14, d: 0, fb: "Confronting the belief ends disclosure and the risk assessment with it.", next: "n1x" }
          ]
        },
        n1x: {
          p: "I knew you'd be like the others. I'm wasting my time.",
          cue: "Gathers her notebook.",
          choices: [
            { t: "I'm sorry, I jumped ahead. I'd genuinely like to hear what you've been dealing with. What's happened most recently?", b: 10, d: 4, fb: "A non-defensive repair returns to curiosity about her experience.", next: "n2" },
            { t: "Suit yourself.", b: -10, d: 0, fb: "The interview ends with no risk assessment.", next: "endLeft" }
          ]
        },
        n2: {
          p: "A metallic smell. My throat burns. I've seen him watching from his window. He wants me out of that house, or dead.",
          cue: "Fluent, organized speech. Affect appropriate.",
          choices: [
            { t: "That sounds frightening. Have you felt a need to protect yourself against him, or to take some action?", b: 4, d: 12, fb: "Robinson's dangerousness questions, asked calmly. She seems normal outside the delusion, which is typical of delusional disorder.", next: "n3" },
            { t: "Why would he want you dead?", b: 3, d: 6, fb: "Exploring logic is reasonable, but \"or dead\" calls for the safety question.", next: "n3" }
          ]
        },
        n3: {
          p: "I bought a handgun last month. For protection. I'm not a violent person.",
          cue: "Watches your reaction.",
          choices: [
            { t: "(calmly) If he came up your driveway one evening and reached into his pocket, what do you think you'd do?", b: 2, d: 15, fb: "Resnick's concrete scenario reveals whether she'd act pre-emptively.", next: "n4" },
            { t: "A gun is a terrible idea. You need to get rid of it.", b: -10, d: 0, fb: "An alarmed directive stops disclosure before you learn about intent.", next: "endPartial" }
          ]
        },
        n4: {
          p: "I'd have to protect myself first. It's him or me.",
          cue: "Quiet, certain.",
          choices: [
            { t: "Thank you for being honest with me. That tells me how frightened you've been. I want to help make sure no one gets hurt, including you.", b: 6, d: 6, fb: "Calm acknowledgment keeps the alliance while you move toward urgent safety steps with your supervisor.", next: "endGood" },
            { t: "That would be murder.", b: -12, d: 0, fb: "Moral confrontation won't reduce risk and may end cooperation.", next: "endPartial" }
          ]
        },
        endGood: { end: true, debrief: "A persecutory delusion, a newly purchased weapon, and a stated intent to act pre-emptively against an identifiable person: high risk. Next steps in practice: immediate consultation, safety measures, possible involuntary evaluation, and duty-to-protect obligations under local law. New delusions after 40 also need a medical workup." },
        endPartial: { end: true, debrief: "You learned there is a weapon, which is critical, but alarm or moral confrontation stopped the disclosure before you learned whether she intended to act. Stay matter-of-fact, use a concrete scenario, then act with your team." },
        endLeft: { end: true, debrief: "Arguing with a delusion cost the interview, and a possibly dangerous situation went unassessed. Don't be the arbiter of reality: stay curious and keep listening." }
      }
    },

    /* ─────────── 6. Beneath the psychosis: voices and commands ─────────── */
    {
      id: "sim-voice", title: "Another voice", chapters: [12],
      setting: "University counseling center, self-referral.",
      who: "Eli Navarro-Cruz, 20, sophomore. For fifteen minutes he has sounded like many overwhelmed students.",
      goal: "Notice a soft sign, explore voices respectfully, and assess commands.",
      startB: 45, start: "n1",
      nodes: {
        n1: {
          p: "I can't study. It's like there's another guy in there arguing with me.",
          cue: "A slight pause before \"another guy.\" He glances to his left.",
          choices: [
            { t: "Another guy? Tell me what you mean.", b: 6, d: 10, fb: "Gently asking about an odd phrase can reveal psychotic content.", next: "n2" },
            { t: "Everyone has an inner critic during exams.", b: -4, d: -8, fb: "Premature reassurance passes over a possible soft sign.", next: "n1x" }
          ]
        },
        n1x: {
          p: "Yeah… I guess.",
          cue: "He goes quiet.",
          choices: [
            { t: "When you're that stressed, do your thoughts ever get so intense they sound almost like a voice?", b: 6, d: 10, fb: "A soft, normalized opener that gets you back into the region.", next: "n2" },
            { t: "Let's talk about time management.", b: 0, d: -6, fb: "The opening closes.", next: "endMissed" }
          ]
        },
        n2: {
          p: "It's not my ears exactly, but I hear him. Like a thought, but not mine. He says I'm worthless.",
          cue: "Looks relieved to be asked.",
          choices: [
            { t: "That sounds frightening. Does he ever tell you to do things?", b: 6, d: 12, fb: "Empathy keeps him talking, and whenever voices are present, ask about commands.", next: "n3" },
            { t: "Inside or outside your head? Male or female? Loud or soft?", b: 2, d: 6, fb: "Phenomenology matters, but a rapid battery feels like a checklist, and commands come first.", next: "n3" }
          ]
        },
        n3: {
          p: "He tells me to stop studying so I'll fail. And lately… when I'm alone, he whispers \"do it.\"",
          cue: "Voice drops.",
          choices: [
            { t: "Do what? Does he mean hurting yourself, or ending your life?", b: 4, d: 14, fb: "Commands can be indirect before direct ones emerge. Follow up specifically.", next: "n4" },
            { t: "You don't have to listen to him.", b: -4, d: -6, fb: "Well meant, but it skips what \"do it\" means.", next: "n4" }
          ]
        },
        n4: {
          p: "Cut. Or take all my pills. I've been fighting it, but it's getting louder.",
          cue: "Holds his forearm.",
          choices: [
            { t: "How much do you feel you can stop yourself? What have you done so far to stay safe?", b: 6, d: 14, fb: "Ability to resist and protective actions are two of the four dimensions of danger.", next: "endGood" },
            { t: "That's psychosis. You need to go to the hospital right now.", b: -8, d: 2, fb: "Hospitalization may well be needed, but announcing it abruptly cuts off the assessment of how dangerous this is.", next: "endPartial" }
          ]
        },
        endGood: { end: true, p: "I gave my roommate my pills. But I don't know about tonight.", cue: "He looks at you, waiting.", debrief: "Tapping odd language opened psychotic material, empathy kept it flowing, and you followed indirect commands to direct ones and assessed resistance. Uncertainty about tonight calls for an immediate full safety assessment with your supervisor, likely urgent psychiatric evaluation, and a medical and substance workup for first-episode psychosis." },
        endPartial: { end: true, debrief: "You recognized serious risk, which matters. Assessing ability to resist and protective actions first, calmly, tells you how urgent it is and keeps him engaged in the plan." },
        endMissed: { end: true, debrief: "An odd phrase is a doorway. Passing over it with reassurance can miss emerging psychosis and dangerous voices. Ask gently what the patient means." }
      }
    },

    /* ─────────── 7. Personality: the differential ─────────── */
    {
      id: "sim-tracks", title: "Tracks in the snow", chapters: [13, 14],
      setting: "Inpatient unit, the day after transfer for an overdose.",
      who: "Ms. Dana Whitfield, 29, legal assistant. She speaks with an odd blandness.",
      goal: "Narrow the field, verify persistence, and stay non-defensive.",
      startB: 35, start: "n1",
      nodes: {
        n1: {
          p: "My last doctor dumped me. They all do eventually. People are basically out for themselves.",
          cue: "Flat delivery; she watches for your reaction.",
          choices: [
            { t: "Dumped you. What happened?", b: 6, d: 8, fb: "Exact-word reflection and curiosity. Feeling dumped and \"they all do\" are signal symptoms worth following.", next: "n2" },
            { t: "I'm sure your last doctor had good reasons.", b: -12, d: 0, fb: "Defending a colleague puts you on the other side of her split.", next: "n1x" }
          ]
        },
        n1x: {
          p: "See? You're already on their side.",
          cue: "Turns away.",
          choices: [
            { t: "You're right, I don't know what happened. I'd like to hear it from you.", b: 10, d: 4, fb: "Non-defensive repair.", next: "n2" }
          ]
        },
        n2: {
          p: "She went on vacation. I called her eleven times. Then she said I needed a new therapist. I was so angry I threw my phone through a window.",
          cue: "No change in her voice.",
          choices: [
            { t: "When you're feeling your normal self, not depressed, how often have you broken things when you're angry? Was it like that back in high school too?", b: 4, d: 14, fb: "Rules out state dependency and anchors to adolescence, both needed before anger counts as a trait.", next: "n3" },
            { t: "That's classic borderline personality disorder.", b: -10, d: 0, fb: "Label slapping, and a label she may already dread.", next: "n3" }
          ]
        },
        n3: {
          p: "Since I was fourteen. Walls, doors. I cut too. It doesn't hurt. It's a relief.",
          cue: "Pushes up her sleeve slightly.",
          choices: [
            { t: "What are you feeling right before you cut, and what does the relief feel like?", b: 6, d: 12, fb: "Phenomenology of self-harm, asked without alarm, helps you understand its function.", next: "n4" },
            { t: "Cutting is very dangerous. You need to stop.", b: -8, d: 0, fb: "A lecture invites a power struggle.", next: "n4" }
          ]
        },
        n4: {
          p: "Dead inside, like there's nothing there. You're not going to stop me, you know.",
          cue: "A challenging stare.",
          choices: [
            { t: "You're right, I can't stop you. I'd like to understand it, and to work with you on what helps when that deadness comes.", b: 10, d: 6, fb: "Non-defensive agreement removes the battle, and collaboration on goals is critical with splitting.", next: "n5" },
            { t: "If you keep cutting, we'll have to keep you here longer.", b: -12, d: 0, fb: "A threat teaches her to hide behavior and casts you as \"all bad.\"", next: "endRupture" }
          ]
        },
        n5: {
          p: "Huh. Nobody's said that before. Most people freak out.",
          cue: "Her shoulders drop a little.",
          choices: [
            { t: "Has anyone ever talked with you about DBT, a therapy designed for exactly these patterns?", b: 4, d: 6, fb: "An accurate diagnosis points toward specialized therapies such as DBT, and an experienced therapist who can provide continuity.", next: "endGood" },
            { t: "Interesting. Why do you think people freak out?", b: -4, d: 0, fb: "An interpretive turn this early risks a rupture with a patient who splits.", next: "endOk" }
          ]
        },
        endGood: { end: true, debrief: "Signal symptoms (feeling dumped, idealize-then-devalue, rages, painless self-harm, emptiness) narrowed the field, and anchoring to adolescence and ruling out state verified persistence. Staying non-defensive kept her engaged. A likely borderline personality disorder points toward DBT or similar therapies with a therapist who can offer stable, long-term care. Continue a careful suicide assessment after an overdose." },
        endOk: { end: true, debrief: "Good data and a fragile alliance. With splitting, avoid interpretive questions early; collaborate on goals and next steps instead." },
        endRupture: { end: true, debrief: "A threat turned you from potential ally into adversary. With a patient who splits, non-defensiveness and collaboration are essential, and self-harm is better understood than forbidden." }
      }
    },

    /* ─────────── 8. Engaging: the grandiose pole ─────────── */
    {
      id: "sim-friend", title: "Listen, my friend", chapters: [15],
      setting: "Outpatient intake. His wife insisted he come.",
      who: "Mr. Victor Lang, 47, owner of a regional car dealership group.",
      goal: "Engage a patient relying on the grandiose pole without a narcissistic rupture.",
      startB: 25, start: "n1",
      nodes: {
        n1: {
          p: "Listen, my friend. I run four dealerships. I don't have time for this. My wife thinks I'm depressed. I'm not.",
          cue: "Leans back, checks his watch.",
          choices: [
            { t: "Four dealerships is a lot to run. Your time is clearly valuable, so let's make this worth it. What would make today useful for you?", b: 10, d: 4, fb: "A genuine acknowledgment and a goal question: a complementary shift that keeps him one-up.", next: "n2" },
            { t: "Your wife seems worried, and she's probably right.", b: -12, d: 0, fb: "Puts him one-down and sides with his wife. Expect a narcissistic rupture.", next: "n1x" },
            { t: "We'll need about an hour to do this properly.", b: -4, d: 0, fb: "Accurate, but it dismisses his frame.", next: "n2" }
          ]
        },
        n1x: {
          p: "I knew this was a waste of time.",
          cue: "Reaches for his keys.",
          choices: [
            { t: "That came out wrong. You know your situation far better than I do. I'd really like your help understanding what's been going on.", b: 12, d: 2, fb: "Asking for help is a complementary shift that can repair the moment.", next: "n2" },
            { t: "It's your choice.", b: -8, d: 0, fb: "He leaves, and there is no second interview.", next: "endLeft" }
          ]
        },
        n2: {
          p: "Useful? Fine. I can't sleep, and my sales manager is an idiot. Lost my temper at a dinner last week. My wife's making a big deal of it.",
          cue: "Brief glance down when he mentions the dinner.",
          choices: [
            { t: "Losing sleep while carrying all that would wear anyone down. What happened at the dinner?", b: 6, d: 10, fb: "Empathy without challenge, then a behavioral incident. The glance down hints at shame beneath the bravado.", next: "n3" },
            { t: "So you have anger issues.", b: -10, d: 0, fb: "A label he will hear as an insult.", next: "n3" }
          ]
        },
        n3: {
          p: "A partner's dinner. Some kid from a competitor made a crack about our numbers. I said a few things. People left early.",
          cue: "Jaw tightens.",
          choices: [
            { t: "Your numbers dipped this year?", b: 2, d: 10, fb: "A gentle statement of inquiry that follows the likely injury: a threat to his sense of being on top.", next: "n4" },
            { t: "Do you think you overreacted?", b: -8, d: 0, fb: "An interpretive, evaluative question too early puts him one-down.", next: "n4" }
          ]
        },
        n4: {
          p: "First bad year in twenty. I haven't told anyone. Not even her.",
          cue: "His voice softens for the first time.",
          choices: [
            { t: "That's a lot to carry alone. I appreciate you trusting me with it. How have you been feeling in yourself these past months, and have you had any thoughts that life isn't worth it?", b: 8, d: 12, fb: "Gratitude for his trust, then mood and a safety question. Unstable narcissistic structure can hide severe depressions.", next: "endGood" },
            { t: "Well, everyone has bad years.", b: -6, d: 0, fb: "Minimizing a disclosure that cost him a lot to make.", next: "endOk" }
          ]
        },
        endGood: { end: true, p: "Some nights I wonder what the point is. The insurance would cover everything.", cue: "He looks away.", debrief: "Complementary shifts let a man who couldn't afford to feel one-down reveal a hidden failure, depression, and passive suicidal thoughts with a financial motive. Beneath grandiosity is often a fragile self. Continue a full suicide assessment and screen for substances; plan an approach that protects his dignity." },
        endOk: { end: true, debrief: "He shared something important, but minimizing it left the depression and safety unexplored. Thank him for his trust and follow the disclosure." },
        endLeft: { end: true, debrief: "Putting a grandiose-pole patient one-down early often produces a no-show. Genuine compliments and asking for his help keep him in the room." }
      }
    }
  ];

  part.drills = [
    {
      id: "mood-pictures", speaker: "", prompt: "Which picture fits best?", title: "Mood presentations", chapter: 9,
      about: "Name the mood picture or specifier each brief description best fits.",
      categories: ["Major depressive episode", "Persistent depressive disorder", "Manic episode", "Hypomanic episode", "Mixed features", "Atypical features", "Melancholic features"],
      items: [
        { say: "Three weeks of low mood nearly every day, poor sleep, no appetite, no energy, trouble concentrating, and guilt, a clear change from her usual self.", a: "Major depressive episode", w: "Five or more of nine symptoms for at least two weeks, representing a change." },
        { say: "Down more days than not for three years, low energy and low self-esteem, never well for more than a few weeks at a time.", a: "Persistent depressive disorder", w: "At least two years, never symptom-free for more than two months." },
        { say: "Ten days of barely sleeping, racing thoughts, spending his savings, and believing he was chosen to lead a movement. He was hospitalized.", a: "Manic episode", w: "At least a week (or any duration if hospitalized), with marked impairment, hospitalization, or psychosis." },
        { say: "Five days of feeling unusually energized and productive with little sleep. Friends noticed she was talking faster. She kept working and was never hospitalized.", a: "Hypomanic episode", w: "At least four days, an observable change, without marked impairment or psychosis." },
        { say: "Full criteria for major depression, plus racing thoughts, decreased need for sleep, and increased risky activity on most days.", a: "Mixed features", w: "A depressive episode with three or more manic or hypomanic symptoms most days." },
        { say: "Her mood brightens when friends visit. She sleeps eleven hours, has gained weight, her arms feel heavy as lead, and she has always been very sensitive to rejection.", a: "Atypical features", w: "Mood reactivity plus two of: increased appetite or weight, hypersomnia, leaden paralysis, rejection sensitivity." },
        { say: "Nothing brings even momentary pleasure. Worse every morning, wakes at 3 a.m., has lost fifteen pounds, and is consumed by guilt.", a: "Melancholic features", w: "Near-total loss of pleasure or reactivity plus features such as morning worsening, early waking, weight loss, and guilt." }
      ]
    },
    {
      id: "delusion-types", speaker: "Patient", prompt: "Which subtype is this?", title: "Delusional disorder subtypes", chapter: 11,
      about: "Name the subtype of delusional disorder each belief fits.",
      categories: ["Persecutory", "Jealous", "Erotomanic", "Somatic", "Grandiose", "Mixed"],
      items: [
        { say: "My coworkers are poisoning my coffee and reporting my movements to my landlord.", a: "Persecutory", w: "Being conspired against, spied on, poisoned, or harassed." },
        { say: "My husband is having an affair. I can tell by the way he parks the car.", a: "Jealous", w: "A partner is unfaithful, sometimes called Othello syndrome." },
        { say: "The news anchor loves me. She sends me signals with her earrings, but her producer keeps us apart.", a: "Erotomanic", w: "Another person, often of higher status, is in love with the patient. Ask who stands in the way." },
        { say: "I give off a terrible odor. That's why people move away from me on the bus.", a: "Somatic", w: "Beliefs about bodily functions or sensations: odor, infestation, deformity, illness." },
        { say: "I've discovered a formula that will end world hunger, but the scientists are too jealous to admit it.", a: "Grandiose", w: "A great unrecognized talent, insight, or discovery." },
        { say: "My wife is cheating, and she and her lover have hired men to drive me insane so she can divorce me.", a: "Mixed", w: "No single theme predominates; here, jealous and persecutory together." },
        { say: "There are parasites under my skin. I can feel them crawling and I've tried bleach to kill them.", a: "Somatic", w: "A delusion of infestation. Ask what they have done to help themselves, and consider medical and substance causes." }
      ]
    },
    {
      id: "first-rank", speaker: "Patient", prompt: "Which first-rank symptom is this?", title: "First-rank symptoms", chapter: 12,
      about: "Identify the Schneiderian first-rank symptom each experience describes.",
      categories: ["Somatic passivity", "Made feelings", "Made impulses", "Thought insertion", "Thought withdrawal", "Thought broadcasting", "Voices commenting", "Delusional perception"],
      items: [
        { say: "Something is squirming around inside my chest, and it isn't me moving it.", a: "Somatic passivity", w: "Bodily sensations imposed from outside the patient's control." },
        { say: "I wasn't angry at all. Then this rage was put into me from outside.", a: "Made feelings", w: "An emotion experienced as imposed by an outside agent." },
        { say: "Out of nowhere I get urges to shout at strangers. They're not my urges.", a: "Made impulses", w: "Urges the patient would never normally have, felt as coming from outside." },
        { say: "These thoughts aren't mine. Someone is pushing them into my head.", a: "Thought insertion", w: "Foreign thoughts placed into the mind." },
        { say: "I'll be in the middle of a thought and it's just pulled out of my head.", a: "Thought withdrawal", w: "Thoughts removed by an alien force. It may be felt physically, believed, or both." },
        { say: "People on the train can hear what I'm thinking. I have no privacy.", a: "Thought broadcasting", w: "Thoughts leak out so others can know them." },
        { say: "A voice describes everything I do: now she's opening the door, now she's sitting down.", a: "Voices commenting", w: "Voices giving a running commentary on the patient's actions." },
        { say: "When I saw the red car parked outside, I knew instantly that I had been chosen.", a: "Delusional perception", w: "A normal perception suddenly acquires a special, personal meaning." }
      ]
    },
    {
      id: "personality-probes", speaker: "Clinician", prompt: "Which region does this probe test?", title: "Personality probe questions", chapter: 14,
      about: "Which personality disorder region is each probe question testing?",
      categories: ["Obsessive-compulsive", "Dependent", "Avoidant", "Schizoid", "Antisocial", "Histrionic", "Narcissistic", "Borderline", "Schizotypal", "Paranoid"],
      items: [
        { say: "Do you drive yourself hard, always feeling you should do a little more?", a: "Obsessive-compulsive", w: "Perfectionism and never having done enough." },
        { say: "Would you rather others make most of the important decisions at home?", a: "Dependent", w: "Seeking a caretaker to handle decisions." },
        { say: "Most of your life, have you worried that people won't like you?", a: "Avoidant", w: "Longing for acceptance but fearing rejection." },
        { say: "Do you enjoy being around people, or much prefer being alone?", a: "Schizoid", w: "Little desire for relationships at all." },
        { say: "If a situation warranted it, would you find it pretty easy to lie?", a: "Antisocial", w: "Deceitfulness and manipulation." },
        { say: "Do you often find yourself the center of attention, even when you don't mean to be?", a: "Histrionic", w: "Needing center stage." },
        { say: "When you get down to it, are most people not quite up to your standards?", a: "Narcissistic", w: "Superiority and devaluation of others." },
        { say: "If someone hurts you, do you sometimes feel like hurting yourself, like cutting?", a: "Borderline", w: "Self-harm in response to interpersonal pain." },
        { say: "Have you ever felt you had special powers, like ESP?", a: "Schizotypal", w: "Magical thinking and unusual perceptual experiences." },
        { say: "Do people often tend to be disloyal or dishonest?", a: "Paranoid", w: "Pervasive distrust and suspiciousness." }
      ]
    },
    {
      id: "self-stages", speaker: "", prompt: "Which dynamic does this suggest?", title: "Stages of the self", chapter: 15,
      about: "Which dynamic does each moment in the interview suggest?",
      categories: ["Part self / part object", "Merger object", "Splitting", "Grandiose pole", "Idealizing pole", "Stable self"],
      items: [
        { say: "\"I can sometimes move people's thoughts from across the room.\" He drifts in and out of attention, with fleeting suspiciousness toward you.", a: "Part self / part object", w: "Magical thinking and low-grade paranoia suggest stage 1. Go slow, with low immediacy." },
        { say: "\"Can I keep your business card in my wallet? It helps me feel calmer.\" She panics whenever her partner leaves the house.", a: "Merger object", w: "A transitional object and panic when alone. Discuss dependency openly and plan the frame." },
        { say: "\"You're the best doctor I've ever had,\" she says. Ten minutes later, after a limit: \"You're just like the rest of them.\"", a: "Splitting", w: "Idealization then devaluation. Go slow, avoid interpretation, collaborate." },
        { say: "\"Listen, my friend. I've built three companies. Frankly, you're lucky to have me as a patient.\"", a: "Grandiose pole", w: "Boasting and putting you in your place. Use complementary shifts." },
        { say: "\"My pastor is the wisest man alive, and my surgeon is the best in the country. I hear you're the best too.\"", a: "Idealizing pole", w: "Superlatives about many people. Accept idealization for now." },
        { say: "Describing a friend's cancer, his voice softens. \"I've been trying to figure out what she needs, not what I'd want.\"", a: "Stable self", w: "Genuine empathy and realistic views of others. Interpretations and gentle challenges are safer here." }
      ]
    }
  ];
})();
