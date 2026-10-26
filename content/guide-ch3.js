/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 3: The Dynamic Structure of the Interview
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch3 = {
  chapter: "ch3",
  intro: "Chapter 3 gives the interview a shape. Five phases unfold in roughly fifty minutes: an introduction that lowers anxiety, an opening in which you say little and silently run PACE, a body that gathers a large database while conveying expertise, a closing that consolidates hope and a plan, and a termination. The chapter's second gift is the Degree of Openness Continuum, a way of classifying every question and statement you make so that you can deliberately open up a shut-down interview, rein in a wandering one, and break a rehearsed one. Read it with your own habits in mind; most of us use swing questions and statements of inquiry far more than we think.",

  highYield: {
    mustKnow: [
      "Five phases: introduction (first sight to the first question about why they came, a minute or two), opening (about 5 to 7 minutes, cornerstone of engagement), body (30 to 40 minutes of structured data gathering), closing (summary, impressions, plan, feedback), termination (the goodbye). The phases blend; the clinician chooses how.",
      "The introduction answers the patient's fears before they harden: who is this, are they competent and understanding, what do they know about me, whose side are they on, how long, will I be hurt, do I have any control. Name, role, how they want to be addressed, what to expect, time frame, confidentiality.",
      "Ask how the patient would like to be addressed. It conveys respect, hands them control of an ego issue, and the answer itself is data. Exceptions: last names with a paranoid patient and often with much older patients; first names with children and adolescents, but ask which one.",
      "In the opening the clinician speaks little and 60 to 90% of verbalizations are open-ended. Premature structuring and strings of closed questions are the two classic errors; confusion correlates with how long the clinician's mouth is open.",
      "[[PACE]] runs silently through the opening: the patient's perspective and conscious goals, assessment of immediate mental state, the clinician's perspective and the patient's [[Unconscious goals|unconscious goals]], evaluation of the interview itself. Two questions uncover the first: what do you think the main problem is, and what do you hope we can accomplish today?",
      "Release control to gain control: meet an unconscious need (to feel important, to feel in control) and the self-system relaxes; the manic vice president gives you a mania history instead of a fight.",
      "The [[Degree of Openness Continuum]]: open-ended questions and [[Gentle command|gentle commands]] are open; [[Swing question|swing]], [[Qualitative question|qualitative]], [[Statement of inquiry|statements of inquiry]], empathic, and [[Facilitating statement|facilitating]] statements are [[Variable verbalization|variable]]; closed questions and closed statements are [[Closed-ended verbalization|closed]]. A statement can be more open than a question.",
      "Variable verbalizations are the trap: open with an engaged patient, closed with a guarded one, and they creep back as habits exactly when an interview is shutting down.",
      "Every statement of inquiry leads a little; a [[Negative statement of inquiry|negative statement of inquiry]] ('So you're not suicidal?') asks for no and produces invalid data. Eliminate it.",
      "Shut-down (short [[DOU / RTL|DOU]], long RTL, poor eye contact): six or seven open-ended verbalizations in a row on a topic the patient wants to talk about, [[Piggy-back empathic statement|piggy-back]] any empathy onto an open question, drop 'Can you' to turn a swing question into a gentle command, avoid why and 'what are you feeling as we talk.'",
      "Wandering (long DOU, short RTL, tangents): recognize it in the opening, transform it in the body. Engage first, structure second. Then closed questions almost exclusively, stop feeding the wanderer, and a graded ladder of [[Focusing statement|focusing statements]] up to the piggy-backed [[Cut-off|cut-off]].",
      "Rehearsed (a pat script, early diagnostic labels, a pre-emptive symptom review): the DOC does not help because any question that tracks the script feeds it. Break it with behaviorally specific questions and [[Affective interjection|affective interjection]].",
      "The body must gather roughly a dozen databases in 30 to 40 minutes, a skill no one brings from ordinary conversation. Its questions also convey expertise, and expertise plus caring makes hope, which secures the [[Return visit|return visit]].",
      "Leave time for the closing. Signal the shift, ask the patient's own understanding and what they hoped for, share tentative impressions, explain and teach back the plan, ask what the interview was like and what you could have done better, give concrete next steps."
    ],
    pitfalls: [
      "'I'll be conducting the interview': brisk handshake, no smile, and the patient's wife quoted in the first minute. Every fear on the list aroused at once.",
      "Assuming a first-name basis without asking.",
      "Asking about suicide, drugs, or sex in a shut-down opening. These are the topics to avoid until output rises.",
      "Answering a shut-down with faster questions, apologetic swing questions, and stand-alone empathy, the three habits that return under pressure.",
      "Structuring a wanderer in the opening and starting a duel for control; or never structuring at all because you fear the rebuff.",
      "Nodding, 'uh-huh,' and note taking while the patient drifts: feeding the wanderer.",
      "Focusing bluntly before trying the gentle rungs of the ladder.",
      "Letting a rehearsed story box you in so that asking anything feels rude.",
      "Overrunning the body and rushing the closing, leaving the patient unsure what just happened.",
      "A cool, formal termination that undoes an hour of warmth."
    ],
    phrases: [
      { say: "Do you prefer Mr. Fenner, William, or Bill?", when: "Introduction. Respect, control, and a first piece of data." },
      { say: "Tell me a little about what brought you here today.", when: "Turning the interview over to the patient at the start of the opening; then say as little as possible." },
      { say: "In your opinion, what do you think the main problem is right now? What are some of the things you hope we might accomplish today?", when: "The two PACE questions for the patient's perspective and conscious goals." },
      { say: "Tell me what it's really like in there.", when: "A gentle command in a shut-down interview. Drop 'Can you' and keep going." },
      { say: "Before we get to the important things at home, help me get a clearer picture of your sleep. Over the past two weeks, have you been waking earlier than usual?", when: "A cut-off that honors the tangent, promises to return, and lands on a closed question." },
      { say: "You mentioned your sister several times. Tell me a little about her.", when: "Affective interjection: leading a rehearsed patient off the script through a charged topic." },
      { say: "Try to tell me in your own words what I've been explaining, so I can be sure I'm being clear.", when: "Teach-back in the closing." },
      { say: "Is there anything I could have done differently that would have made you more comfortable?", when: "Closing. Sometimes useful criticism; always a message that the patient will be listened to." }
    ]
  },

  sections: [
    {
      id: "five-phases",
      title: "Five phases and a choice",
      lede: "The interview changes whether you want it to or not. The question is whether you move with it.",
      blocks: [
        { type: "p", text: "Shea opens with Marcus Aurelius on change, because an interview is a relationship and relationships never hold still. Two people become a dyad, and the dyad's needs, agendas, and fears shift as it goes. The clinician can struggle against that or shape it. Under the complexity, Shea argues, are rules, and from the rules come strategies: the dynamic structure of the interview is the tension between engagement, time, and the database, and it can be sculpted on purpose. Doing so is one of the differences between a good clinician and an outstanding one." },
        { type: "table", head: ["Phase", "Runs from… to…", "Length", "Main job"], rows: [
          ["1. Introduction", "First sight, until you feel ready to ask why they came", "A minute or two", "Lower anxiety; address the patient's fears"],
          ["2. Opening", "Your first inquiry, until you start focusing on topics you chose", "About 5 to 7 minutes", "Secure engagement; run PACE silently"],
          ["3. Body", "Structured exploration of the database", "30 to 40 minutes of a 50-minute intake", "Gather the data; convey expertise"],
          ["4. Closing", "Signaled shift to summary and planning", "Enough time, never rushed", "Consolidate hope; answer the patient's questions; plan"],
          ["5. Termination", "The actual goodbye", "Moments", "Warmth; a last glimpse of dynamics"]
        ] },
        { type: "p", text: "The division is admittedly artificial. The phases merge, and where they merge depends partly on paths the clinician chooses. Keeping them separate for study makes the choices visible." }
      ],
      practice: [{ kind: "quiz", id: "ch3", label: "Quiz: Chapter 3" }]
    },

    {
      id: "introduction",
      title: "The introduction: creating a safe environment",
      lede: "By the end of a minute or two, the patient has an impression of you. It may decide the rest of therapy.",
      blocks: [
        { type: "p", text: "The goal is simple: engage by lowering anxiety, or in Sullivan's terms, reduce the patient's need for an overactive [[Self-system|self-system]]. The patient's goal is equally simple, to find out what is going on here, and it is driven by the fears Chapter 2 described." },
        { type: "list", items: [
          "Who is this clinician? Is he or she competent? Understanding?",
          "What does he or she already know about me? Whose side is this person on?",
          "How long will this take? Am I going to be hurt?",
          "Do I have any control here? (One patient's phrase for the fear: being 'mind-raped.')"
        ] },
        { type: "p", text: "Not every patient carries every fear, but most carry several, consciously or not. After some friendly small talk, the clinician addresses them directly or indirectly, in whatever style feels natural. Shea contrasts a brusque opening, in which the clinician announces that he will be 'conducting the interview,' demands the story from the beginning, and quotes the wife's report within three exchanges, with a warmer one. The warmer version offers to hang up the coat, chats about parking, offers tea, asks whether the patient has seen a therapist before (and jokes that he had better be nicer than usual), asks how the patient wants to be addressed, acknowledges what the wife said on the phone and promises to settle together how much she will be told, lays out the plan and the time (about 40 minutes talking, 10 minutes on options), and explains confidentiality. By the time the first open question arrives, the patient has been shown respect, has been told the clinician is on no one's side, and has heard that the question of whether anything is wrong is still open: 'what, if anything, has been going on.'" },
        { type: "p", text: "When a patient is referred by another clinician or from an inpatient unit, Storr's touch fits: you have read the notes, you know it is tedious to repeat, but you find it hard to remember details from other people's notes and would be grateful to hear it again, starting with what their kind of depression is really like. Some clinicians also end the introduction with 'Before we go on, do you have any questions?'" },
        { type: "pearl", title: "What should I call you?", text: "Shea declines to join the debate about first names and simply asks. It conveys respect, gives the patient control over an ego issue, and reveals dynamics: a manic patient who insists on 'Dr. Jones,' a regressed one who sheepishly asks for 'Jim,' an ambivalent 'Jim, Jack, or Jimmy, it doesn't matter.' He always greets with the last name first. Exceptions: keep the last name with a patient known to be paranoid, for whom distance is comfortable; expect older patients to prefer it; use first names with children and adolescents from the start, but ask which one, since the family's 'Sue' may want to be 'Susan.'" },
        { type: "p", text: "Some clinicians go further and describe the whole hour: concerns and stresses first, then background (family, health, schooling, past symptoms) because it helps understanding, then brainstorming about relief, about 50 minutes in all. This lowers fear of the unknown and quietly teaches the patient that a great deal must be covered, which makes later transitions easy ('As I mentioned, I'd like to learn more about your family. How many children besides Jenny?'). The format bends to the patient: a floridly psychotic patient who needs to tell the story now should be allowed to cut the introduction short. It is a guide, not a rule." }
      ],
      practice: [{ kind: "practice", id: "c3p1", label: "Practice: a calming introduction" }]
    },

    {
      id: "confidentiality",
      title: "Addressing confidentiality",
      lede: "Clarity about privacy builds trust. Questions about it are a message in themselves.",
      blocks: [
        { type: "p", text: "Near the end of the introduction or on the way into the opening, confidentiality is explained in a matter-of-fact tone: what is said here stays here, with sensible exceptions. If something suggests the patient may kill themselves or hurt someone else, the clinician may need to talk to others, would ask permission first, but would break confidentiality if refused in order to keep people safe; abuse of a child or of an elder in the patient's care must by law be reported. Beyond danger, contact with anyone else, family, another clinician, a lawyer, needs written permission." },
        { type: "list", items: [
          "If a patient asks further questions about confidentiality, the Sommers-Flanagans note, they are often signalling that trust is a live issue and more discussion is warranted.",
          "Say who can see the written record (you and your office manager, say), and that insurers may ask for diagnoses and care.",
          "Trainees: explain that a supervisor checks your work and that cases are sometimes discussed with a small group of other trainees, always to give the patient the best care.",
          "Know your institution's exact rules for the electronic record, who on a team or ward can open it, and say so explicitly. Confidentiality is evolving with the EHR."
        ] },
        { type: "p", text: "Even done well, this block of complex information can disrupt the flow just as the conversation is starting. Some clinics and emergency departments have a trained receptionist review confidentiality in detail beforehand, with a signed statement. In that case Shea simply asks in the introduction whether there are any questions, and then reviews the key points and exceptions himself during the closing, where they fit naturally, consolidate understanding for future sessions, and answer questions the hour itself may have raised." }
      ]
    },

    {
      id: "opening",
      title: "The opening: say little, listen, and run PACE",
      lede: "By the end of seven minutes, most patients have decided whether they like you. Changing that later takes a large chisel.",
      blocks: [
        { type: "p", text: "The opening begins with the first inquiry into the patient's situation and ends when the clinician starts focusing on topics of the clinician's choosing. Whether the whole interview is 30 minutes in an emergency department or 60 in a clinic, it lasts about 5 to 7 minutes, because it is the cornerstone of [[Engagement|engagement]]. The introduction forms the first impression; the opening confirms or rejects it. Many patients who drop out after two or three sessions had their disapproval seeded in these minutes." },
        { type: "p", text: "The patient has three goals: to decide whether it is safe to share with this clinician, to decide what to share, and to tell the story right so that the clinician understands. Self-exposure begins here, so the self-system is active despite a good introduction. The clinician's goal is to secure the engagement begun in the introduction, because its durability will decide how much probing and structuring the patient tolerates later." },
        { type: "list", items: [
          "Tell me a little about what brought you here today.",
          "Perhaps you can begin by letting me know what some of your concerns have been recently.",
          "To start with, tell me a little about what has been happening, from your perspective, over the past several weeks.",
          "What are some of the stresses you've been coping with recently?"
        ] },
        { type: "p", text: "Such openers let the patient start wherever they feel safe. Give plenty of room to wander. Watch for signs of [[Blending|blending]]: a relaxing posture, a long duration of utterance. Nurture the flow with 'Go on,' 'And then what happened,' 'Uh-huh,' and a few low-valence empathic statements, which circumvent the fear of imminent rejection. The distinctive feature of the opening is that the clinician speaks very little, with 60 to 90% or more of verbalizations open-ended, making it the least verbally active phase of an assessment. Two errors stand out: structuring before the patient has relaxed, and too many closed questions. Both take control from the patient and raise anxiety, and both add clinician speech; early in an interview, Shea notes, confusion correlates with how long the clinician's mouth is open. The opening is for reflection, not action, unless a specific hesitancy needs transforming." },
        { type: "p", text: "Some clinicians bridge introduction and opening with a few demographic questions (age, residence, occupation, family) before handing over the floor. Shea prefers not to, finding it hinders the natural start, but it is a matter of preference." },
        { type: "p", text: "Most of the opening's work is invisible. The clinician is scouting for the engagement techniques that will suit this patient and for how to structure the body, building a tentative game plan. Four things are assessed, remembered by the acronym [[PACE]]: the patient's perspective and conscious goals; assessment of immediate mental state; the clinician's perspective of the problem and the patient's unconscious goals; and evaluation of the interview itself. Matching the patient's goals with your own is the contractual element Lazare describes; every initial interview has one, explicit or not, and interviews break down when goals are not shared, or are known and ignored." }
      ],
      practice: [{ kind: "drill", id: "doc", label: "Drill: degree of openness" }]
    },

    {
      id: "pace-patient",
      title: "P: the patient's perspective and conscious agenda",
      lede: "Listen to what the patient says the goal is, and to what the patient implies.",
      blocks: [
        { type: "p", text: "Two perspectives decide whether a contract forms: the patient's idea of what is wrong, and what the patient expects of the interview and interviewer. Shea asks two questions, or variants, somewhere in the opening: In your opinion, what exactly do you think the main problem is at this time? What are some of the things you hope we might be able to accomplish today? Many roadblocks arise when the clinician never learns the answers." },
        { type: "case", title: "'I'm not nuts, it's my chemistry'", text: "Summarized from the chapter. A nervous man in his mid-thirties, sent by his wife, opens by saying it is hard to explain, that he does not know what his wife thinks but he is not crazy, that it is something to do with his chemistry, that he is 'speeded up' and 'juiced up' and has been reading about fitness and emotion. The implied goals: make sure the clinician understands he is not crazy (and perhaps makes his wife understand), and establish that the problem is physical, not mental. The blundering reply would redirect to his wife's view or to psychology. Instead the clinician asks what he has come up with, hears about endorphins and running, asks how often he runs and how he got into fitness, and learns of a father who was a jock and two more successful brothers. The patient's agenda has been honored, the topic he feels safe in has been used, and the conversation has moved itself into family relations." },
        { type: "compare",
          a: { title: "Common appropriate conscious needs", items: ["Someone to listen sensitively to the story", "Confirmation of specific beliefs", "Relief from pain, in general or through a specific intervention", "Someone to discover secrets they have been afraid to share", "Reassurance that they are sane, or discovery that they are not", "Someone to tell them what is happening to them"] },
          b: { title: "Agendas that strain the alliance", items: ["Addictive drugs", "Hospital admission for shelter", "Proof of 'seeing a therapist' for a legal matter, or appearing ill for legal purposes", "Confirmation that the regular therapist is wrong", "Getting a relative off their back", "Being told to tell relatives there is nothing wrong"] } },
        { type: "p", text: "When the clinician suspects a problematic agenda, it can be sought gently: 'At this point it might help both of us to clarify what we want to accomplish. What specifically would you like me to do for you today?'" }
      ]
    },

    {
      id: "pace-assessment",
      title: "A and C: immediate mental state, the clinician's view, and unconscious goals",
      lede: "Much can be learned from a glance with years behind it. And the art lies in what is not said.",
      blocks: [
        { type: "p", text: "During the introduction and opening, the [[Scouting region|scouting period]], the clinician passively notes the patient's immediate mental state for three kinds of clue. Diagnostic clues: a smoldering psychosis often shows itself subtly here, in an occasional loosening of associations, a slightly inappropriate affect, or an overriding intensity of feeling, suggesting that questions about psychosis will be worth asking later. Clues to concerns about the interview itself: unresolved hesitancy or anger leaves invalid data in its wake, so it must usually be worked through before the body. And clues that the format itself must change: the question of whether this patient can tolerate a standard interview at all." },
        { type: "exchange", title: "Bringing the fear to the surface", lines: [
          { who: "Clinician", t: "It can be a bit anxiety-provoking to talk with someone like me, especially the first time we meet. I'm wondering what, if anything, might be concerning you as we talk today." },
          { who: "Patient", t: "(long pause) I guess I keep thinking you're going to decide I'm crazy." }
        ], note: "Composed. A less assumptive variant asks simply what the patient is feeling as you talk. Morrison's [[Naming emotions|naming emotions]] goes a step further when a patient stalls: 'Sometimes people have trouble with a question when they feel ashamed, or anxious, or afraid. Are you having any of those feelings now?'" },
        { type: "p", text: "The third clue is about impulse control, often in the emergency department: the patient pacing and shaking a fist at voices, who escalates as questioning begins. The best interview may be a short one, and interrupting it briefly to alert the charge nurse to possible violence may be the wisest move." },
        { type: "p", text: "The clinician's own perspective may differ from the patient's (an FBI plot versus a paranoid delusion), or agree on the problem and differ on its cause; often they coincide. Early tentative formulation shapes strategy. If an elderly man brought because 'he can't take care of himself' shows disorganization, blocking, and memory loss in the opening, the cognitive examination is moved forward and lengthened, and if the deficit is severe, the time is better spent with the family, who can give a reliable history." },
        { type: "p", text: "Unconscious goals are the psychodynamic drives, often arising from core pains, that the patient may not recognize. They can be the real reason for coming and the main obstacle to the assessment. Much of the art is speculating on what is not said and why, and on what the patient has 'half mentioned.'" },
        { type: "case", title: "The vice president", text: "Summarized from the chapter. A man of about thirty, speech pressured, brought by the father he tear-gassed in a family fight, who has threatened to commit him. He announces that he is not crazy, his father is, that he is an important man with no time to waste, that the whole thing should be wrapped up quickly. He interrupts to demand water. He shows his business card. The clinician fetches the water, admires the card ('I see you're a vice president, no wonder your time is valuable'), agrees to get to the point, invites him to tell the misunderstanding his way and take all the time he needs, and asks what stresses he is 'handling' rather than what problems are 'unsettling' him. Two unstated needs, to feel important (perhaps fear of inferiority underneath) and to feel in control (with commitment looming, a real threat), have been met. Within minutes he is answering questions about sleep that will document his mania, and the risk of a violent emergency room incident has fallen." },
        { type: "pearl", title: "Release control to gain control", text: "It is not the specific words that matter but the principle: listen for the patient's psychodynamic needs even when a major illness is active, and attend to them. A relaxed self-system needs fewer narcissistic put-downs and accusations. Video Module 3.1 shows the introduction, opening, and early body unfolding with the patient from Chapter 1." }
      ],
      practice: [{ kind: "sim", id: "sim-watching", label: "Interview: Watching (a paranoid opening)" }]
    },

    {
      id: "doc",
      title: "E: the Degree of Openness Continuum",
      lede: "Every question and every statement has a degree of openness. Some statements are more open than some questions.",
      blocks: [
        { type: "p", text: "Interviews develop personalities, set by the quality and quantity of communication. The ideal patient produces lots of valid, relevant information, focuses easily, relaxes steadily. Ideal interviews are rare; good ones are not, and the key is spotting a bad one before it becomes a painful lesson. Three patterns recur: shut-down, wandering, and rehearsed. All warrant a change of strategy, and the change is made with words, so Shea first dissects the words." },
        { type: "p", text: "'Can you tell me a little bit about your past?' Open, because it invites almost anything? Or closed, because a sullen inmate forced to see the prison psychologist can answer 'not really'? Textbooks disagree. The answer is that openness is a continuum, that both open and closed questions are useful at the right moment, and that some questions are open and closed at once. The [[Degree of Openness Continuum]] is a supervision language that sorts any verbalization into nine mutually exclusive types in three bands, by how much it tends to produce spontaneous, lengthy answers, how little it limits the answer set, and how well it opens a moderately shut-down patient." },
        { type: "table", head: ["Band", "Type", "Example"], rows: [
          ["Open-ended", "[[Open-ended question]]", "What are some of your thoughts about the marriage?"],
          ["Open-ended", "[[Gentle command]]", "Tell me something about your brother."],
          ["Variable", "[[Swing question]]", "Can you describe your feelings?"],
          ["Variable", "[[Qualitative question]]", "How's your mood been?"],
          ["Variable", "[[Statement of inquiry]]", "So you left the marriage after three years?"],
          ["Variable", "Empathic statement", "It sounds like a troubling time for you."],
          ["Variable", "[[Facilitating statement]]", "Uh-huh. Go on. I see."],
          ["Closed-ended", "Closed-ended question", "Do you think your son will pass? What medication is he taking?"],
          ["Closed-ended", "Closed-ended statement", "Please sit over there. Anxiety can be helped with behavioral therapies."]
        ] },
        { type: "p", text: "Open-ended verbalizations are hard to answer in a word even when the patient is guarded. 'How' and 'what' questions are open unless they ask for a specific fact, name, number, time, or place: 'How would you handle college differently?' is open; 'How many credits did you take?' is not. A gentle command ('Tell me…', 'Describe for me…') directs the patient to speak without limiting the answer, said gently and with real interest; 'Tell me what you find unpleasant about your job' qualifies, 'Tell me who your favorite colleague is' does not. Gentle commands are among the most powerful tools for helping hesitant patients share. [[Closed-ended verbalization|Closed-ended]] questions, yes/no or fact-seeking (and sometimes opinion-seeking), are easy to answer tersely and shorten responses even in good engagement, which is exactly what a wanderer needs. Closed statements expect no reply at all." },
        { type: "p", text: "The middle band is the one to understand. [[Variable verbalization|Variable verbalizations]] produce long answers when engagement is high and terse ones when the patient is defensive, angry, or embarrassed. They are tickets to monologue in a shut-down interview. A swing question literally asks whether the patient will answer; 'Can you tell me about your past?' is both open and closed because it swings with engagement. A qualitative question asks about the quality of a state ('How's your…'): if it starts with how, contains a form of 'to be,' and could be answered 'fine,' that is what it is. A statement of inquiry is a sentence with a question mark, turned into clarification, summary, confrontation, or interpretation by tone of voice; because it opens with a supposed fact, it always leads a little, and strongly when it introduces a new issue or a judgment, often beginning 'So…'. A supervisor who counts statements of inquiry learns how leading a trainee's style is." },
        { type: "pearl", title: "The negative statement of inquiry", text: "'So you're not feeling suicidal?' tells the patient that no is the answer you expect or want, and yields invalid, here dangerously invalid, data. Shea sees no redeeming value except one: said with a doubting tone on 'not,' it can challenge a malingering or antisocial patient right after a patently false statement. Otherwise eliminate it from your style entirely." },
        { type: "p", text: "Empathic statements convey understanding of the patient's feelings and usually open patients up, though with guarded or paranoid patients they can backfire (Chapter 1). Facilitating statements signal listening and urge more speech, but each is weaker than a gentle command, and with hostile patients they too can backfire: Shea recalls an intoxicated man in the emergency room mocking his nods and 'uh-huhs' ('yeah, you're a shrink all right') minutes before attacking a safety officer." }
      ],
      practice: [{ kind: "drill", id: "doc", label: "Drill: degree of openness" }, { kind: "practice", id: "c3p5", label: "Practice: avoiding negative statements of inquiry" }]
    },

    {
      id: "shut-down",
      title: "Transforming shut-down interviews",
      lede: "Short answers, long pauses, eyes on crossed arms. The interviewer usually helps build it.",
      blocks: [
        { type: "p", text: "In a shut-down interview the patient's [[DOU / RTL|DOU]] is short, the RTL long, eye contact poor, the body language eloquent (Shea recalls a patient yawning with impeccable timing). But all interviews are interactions, and the interviewer feeds the pattern with a low ratio of open-ended to variable and closed verbalizations, with focusing statements, and by withholding nods and warmth. Frustration sharpens the tone, and the sharpness deepens the shutdown." },
        { type: "p", text: "The habits return exactly when they are least useful. Silence is unnerving, so questions come faster; swing questions appear with an almost pleading tone; empathic statements multiply because empathy usually improves blending, but not today; closed questions pile up because they are easier to compose. Shea's example is an interview with a former inmate: a barrage of closed questions about prison ('Were the guards tough?' 'Did it get lonely?'), a swing question ('Could you tell me a little about what that felt like?' 'Not much to tell'), two real open questions that are too few, and a qualitative question answered 'just dandy.' The only person less comfortable than the patient is the interviewer." },
        { type: "exchange", title: "Six or seven in a row", lines: [
          { who: "Clinician", t: "How long were you inside?" },
          { who: "Patient", t: "Two years." },
          { who: "Clinician", t: "Most people hate it, but some handle it better than others. What did you do to keep yourself going?", tag: "Open-ended question" },
          { who: "Patient", t: "Push-ups and cards. Push-ups and cards. Gets old." },
          { who: "Clinician", t: "I honestly don't know much about what it's like in there. Tell me something about it.", tag: "Gentle command" },
          { who: "Patient", t: "(half smile) You wouldn't last a day." },
          { who: "Clinician", t: "Tell me what it's really like.", tag: "Gentle command" },
          { who: "Patient", t: "Boring. Same thing every day, an hour out of the cell. Dinner's an event. And you stop being a nobody. You become a con." },
          { who: "Clinician", t: "How do you mean, a con?", tag: "Open-ended question" },
          { who: "Patient", t: "Nobody's fool. You watch your back every minute. You never know who's carrying a shank." },
          { who: "Clinician", t: "I have to plead ignorant. What exactly is a shank?", tag: "Open-ended question" },
          { who: "Patient", t: "(almost warmly) You really wouldn't last. It's a knife you make. File down a toothbrush. I saw a guy once who…" }
        ], note: "Composed after Shea's example. A series of open-ended verbalizations on a topic where the patient can instruct the clinician, with no swing questions and no stand-alone empathy, turns a two-word answerer into a storyteller." },
        { type: "steps", items: [
          "Use six or seven open-ended questions and gentle commands in a row. One or two followed by a closed or variable verbalization undoes the gain.",
          "No stand-alone empathic statements. If empathy will help, lead with it and attach an open-ended technique: a [[Piggy-back empathic statement|piggy-back]] ('That sounds like a really tough divorce; tell me more about what your husband has been doing').",
          "Follow any topic on which the DOU rises, even briefly.",
          "Avoid sensitive topics (lethality, substances, sex) for now.",
          "Choose general background or strong-opinion topics: the neighborhood, the people at work, what the boss does that seems unfair.",
          "No swing questions. Drop 'Can you' and you have a gentle command.",
          "More eye contact, nodding, and warm paralanguage, except with hostile or paranoid patients.",
          "No long pauses in a first interview; they breed defensiveness here, whatever their uses in therapy."
        ] },
        { type: "p", text: "Most of these apply to any opening, with one caveat: the long pure strings of open-ended techniques are specific to shut-down interviews. In a naturally blending interview, open techniques are interwoven with empathy and clarifying closed questions. If these methods fail, a deeper roadblock has formed, and Chapter 19 addresses it, including naming suspected concerns about the interview itself. There are also patients for whom the recipe is wrong: a grossly disorganized patient, anxious or psychotic, may be unable to conceptualize at the level an open question demands, and does better with concrete closed questions and statements of inquiry; some adolescents and adults need to warm up on less probing closed questions." },
        { type: "pearl", title: "Two open questions to avoid", text: "'Why' questions sound judgmental, summon a parent in critical mode, and imply a single right answer; replace 'Why did you drop out?' with 'What were some of the things going through your mind when you decided to leave?' And the stereotypical shrink question, 'What are you feeling as we talk?', produces consternation in shut-down patients and in most children and adolescents, who rarely have access to inner feelings on demand. Save it for high blending, therapy, or particular breakdowns." }
      ],
      practice: [{ kind: "practice", id: "c3p2", label: "Practice: unlocking a shut-down interview" }]
    },

    {
      id: "wandering",
      title: "Transforming wandering interviews",
      lede: "Recognize it in the opening. Transform it in the body. Engage first, structure second.",
      blocks: [
        { type: "p", text: "The wandering interview is the gremlin most feared in a busy clinic. The patient's tangential thought derails each line of questioning, speech is mildly pressured, the DOU long, the RTL short, eye contact often good, and every question springs a new leak. A variant, the [[Loquacious interview|loquacious interview]], stays on topic but buries it in irrelevant detail. Causes range from histrionic structure and early mania to the commonest, simple anxiety." },
        { type: "p", text: "Again the clinician helps. Open-ended questions and gentle commands invite the walk; absent focusing lets it continue; nods, 'uh-huhs,' and note taking reward it, each a metacommunication that what was just said matters and should continue: [[Feeding the wanderer|feeding the wanderer]]. Clinicians can learn to quiet all of these, but only once they notice them. The remedy is the mirror image of the shut-down recipe, applied as the opening ends." },
        { type: "steps", items: [
          "Cut the ratio of open and variable verbalizations to closed ones. Rarely an open question (perhaps as the first in a new topic), minimal variable verbalizations: with a wanderer, all five function as open, and a swing question opens the gate to a wild gallop.",
          "Stop the nodding and paralanguage that say 'go on.'",
          "Gently return to the question that preceded the tangent.",
          "If it continues, a [[Focusing statement|focusing statement]]: 'For a moment, let's focus on what your mood was like back then.'",
      "Then stress importance: 'This is such an important area, I'd like us to focus on it for a few minutes.'",
          "Rarely needed: explain the constraint. 'We have limited time, so I'm going to focus on some very important areas you mentioned, one topic at a time, so I can understand clearly.'",
          "Rarer still: strong structure with consent. 'We need to focus on the last two weeks of your mood. If we wander, you'll notice I'll bring us back. Is that all right? Over the past two weeks, how long has it taken you to fall asleep?'",
          "Or address the process: 'I've noticed that when I ask questions we seem to wander off. What do you think may be going on?'"
        ] },
        { type: "p", text: "Sometimes the patient must be cut off in mid-sentence. It is forceful and belongs after gentler rungs, though clinicians typically wait too long. Engagement survives a [[Cut-off|cut-off]] when it is piggy-backed: an empathic lead, then a closed question ('It really sounds like you've been through a lot. Have you been feeling depressed over the past two weeks?'), or an acknowledgment of importance ('So much of what you're saying matters that we need to focus a bit. Has your mood been down these past two weeks?'). Patients who were well engaged in the introduction and opening are rarely put off; they want you to get what you need." },
        { type: "exchange", title: "Reining in a wanderer, gently", lines: [
          { who: "Clinician", t: "Tell me what your sleep has been like.", tag: "Gentle command, entering the topic" },
          { who: "Patient", t: "Sleep. Nobody in my family sleeps. My father was up all night, and my uncle, well, he drank, and they say drinkers don't sleep…" },
          { who: "Clinician", t: "How has your sleep been over the past two weeks?", tag: "Qualitative question, refocusing" },
          { who: "Patient", t: "Bad. I'm wound up about the pay cut. My boss is the one who needs a psychiatrist, you should see him…" },
          { who: "Clinician", t: "It sounds like the worry about your boss keeps you up. How many hours does it take you to fall asleep?", tag: "Piggy-back, then closed" },
          { who: "Patient", t: "Two, maybe three." },
          { who: "Clinician", t: "Once you're asleep, do you stay asleep or wake during the night?" },
          { who: "Patient", t: "Out like a light. Like after my chemistry final, when I was so tired I… though why I'd want to go home, honestly…" },
          { who: "Clinician", t: "Before we get to the important things at home, help me get a clearer picture of your sleep. These past two weeks, have you been waking earlier than usual?", tag: "Cut-off that honors the tangent" },
          { who: "Patient", t: "No, I can't say I have." }
        ], note: "Composed after Shea's example. Note how the qualitative question set the patient off, as a variable verbalization will with a wanderer, and how 'help me' metacommunicates a shared goal. Later in the body the clinician may deliberately loosen the reins again to explore feelings; the point is that the reaction can be controlled in either direction." },
        { type: "p", text: "Three factors decide success: timing (the wander is spotted in the opening but transformed in the body; premature focusing starts a duel for control that leaves both wounded), the DOC (essentially only closed questions while reversing the pattern), and delivery (the same focusing phrase in a concerned tone is rarely heard as a ploy; said in frustration it disengages a timid patient). Wandering is one of the commonest reasons clinicians seek supervision, usually because they fear the rebuff and so never learn to structure." },
        { type: "list", items: [
          "Common errors: continuing to feed the wanderer into the body.",
          "Fearing to focus or interrupt; done well, focusing is well tolerated.",
          "Structuring during the opening, which should be nearly unstructured.",
          "Focusing bluntly before trying the subtle rungs."
        ] }
      ],
      practice: [{ kind: "practice", id: "c3p3", label: "Practice: focusing a wanderer" }, { kind: "sim", id: "sim-wedding", label: "Interview: The cousin's wedding (a wandering patient)" }]
    },

    {
      id: "rehearsed",
      title: "Transforming rehearsed interviews",
      lede: "A pat story, told so often it bores the teller. The DOC won't save you here.",
      blocks: [
        { type: "p", text: "The rehearsed interview appears with the patient who knows the system too well, who has told the story many times, or who is using a script to control the interview: the malingerer, the drug seeker, the disability claimant with a feigned illness, or the patient steering away from a hidden problem (alcohol) toward a safer one (a spouse's personality). The history seems simple, and no history is simple; both parties can settle into half-truths, and validity suffers. It announces itself with early diagnostic labels ('I'm a schizophrenic'), an unsolicited DSM-style symptom review, a long DOU and short RTL, and eye contact that is usually good but may fall when the patient feels guilty about the deceit." },
        { type: "p", text: "Here the DOC offers little advantage, because open, variable, and closed questions can all feed a script; any question that tracks with the patient reinforces the direction. Poor focusing and generous facilitation collude. Two methods break the mechanical storytelling. The first is to ask for behaviorally specific facts, which forces reflection and improves the database. The second is [[Affective interjection|affective interjection]]: moving the patient into territory that demands new thinking or that carries emotional charge the patient, at some level, wants to discuss." },
        { type: "exchange", title: "Through the gate of affect", lines: [
          { who: "Patient", t: "I got out of the hospital two months ago and moved here, so I need new doctors. I'm a little edgy and I need my lithium. I'm bipolar. No racing thoughts, sleeping great, energy fine. My sister will probably call; don't listen to her, she overreacts. I'm not spending money, nothing like that." },
          { who: "Clinician", t: "You mentioned your sister a couple of times. Tell me a little about her.", tag: "Affective interjection" },
          { who: "Patient", t: "She needs to keep her nose out of my business." },
          { who: "Clinician", t: "What has she been doing lately that's been so upsetting?" },
          { who: "Patient", t: "Mouthing off. Getting me in trouble." },
          { who: "Clinician", t: "In what sort of ways?" },
          { who: "Patient", t: "She called the police last month and the next thing I know I'm committed. Said I was a danger to her kids. The real danger to those kids is their mother." }
        ], note: "Composed after Shea's example. Led off the script through the gate of affect, the patient reveals an involuntary commitment a month ago that the rehearsed version had edited out. Things are rarely as cut and dried as a script insists." },
        { type: "p", text: "Shea closes the section by explaining why the opening received so many pages: it is where the first understanding is born, the alliance solidified, and the platform laid. Done well, the clinician enters the patient's world as an invited guest, with no need to break in." }
      ],
      practice: [{ kind: "practice", id: "c3p4", label: "Practice: breaking a rehearsed script" }]
    },

    {
      id: "body",
      title: "The body: a database no one learns to gather over coffee",
      lede: "Empathic listening you brought with you. Covering hundreds of data points in forty minutes, you did not.",
      blocks: [
        { type: "p", text: "The chapter describes the challenge of the body and leaves the solutions to Chapter 4, because they deserve a chapter of their own. Why does this phase produce so much anxiety in trainees? Because, Shea argues, it is unlike anything they have done before. People who choose this field are already good listeners; empathy and collaborative listening are refined versions of what we do with friends. But no one sits down over two lattes intending to cover hundreds of predetermined data points, in a fixed time, while reining in a loquacious friend. That skill is new, and it is as complicated as surgery: communicating empathy while gathering a large factual database is a different matter from being empathic while a patient wanders." },
        { type: "list", items: [
          "History of the presenting problem and primary DSM-5 diagnosis (begun in the opening, refined here; often several problems and diagnoses)",
          "The interviewee's perspective (mostly from the opening, with nuances here)",
          "Screening for other DSM-5 diagnoses: mood, anxiety, schizophrenia spectrum, eating, substance, personality",
          "Social history, including education, employment, living circumstances, and sensitive areas such as incest and domestic violence",
          "Framework for meaning and spirituality, explored with cultural sensitivity",
          "Family history",
          "Suicidal and homicidal ideation, planning, behaviors, and intent",
          "Past psychiatric history and treatment",
          "Developmental and psychogenetic history",
          "Medical history",
          "Informal mental status",
          "Formal cognitive examination, sometimes optional"
        ] },
        { type: "p", text: "All of it in 30 to 40 minutes. 'Hmm,' Shea writes. 'This doesn't look easy. It isn't.' Good clinicians do not merely listen; they explore, because patients cannot know which information matters for their care. The gifted ones do it so the patient feels they had an engaging conversation with a caring person rather than an interview with a clipboard. The magic is a skill: knowing which questions to ask and when, and accepting quietly that not everything can be learned in one interview." },
        { type: "p", text: "Something else happens in the body. Arguably the single most important goal of an initial interview is securing a second one, and by the end of the body most patients have decided whether they will return. They return not only because the clinician is caring (friends supply that) but because they believe the clinician can help, which means expertise has been conveyed. The strongest communicator of expertise is the quality of our fact-finding questions, which say that we have seen this before and are comfortable with it. A shaman casts stones; we cast questions. Caring plus expertise produces hope, and hope produces the [[Return visit|return visit]]. Chapter 4 teaches how." }
      ]
    },

    {
      id: "closing",
      title: "The closing: consolidating hope",
      lede: "Leave the time. The commonest supervision problem is a body that runs over and a closing that is rushed.",
      blocks: [
        { type: "p", text: "As the interview nears its end the patient wonders whether it was worth it, and a set of questions surfaces, consciously or not: What is wrong with me? Am I crazy? Did I say what you needed? Do you understand me? Did you like me? Do I have a diagnosis? Will I get better? Can I be helped? What are my options? What happens next, and will I see you again? The patient has, in a sense, a right to hear tentative answers, and even tentative ones reassure. Sullivan held that a patient should gain something from the assessment itself; an orderly inquiry with a concerned listener is itself calming." },
        { type: "list", items: [
          "Shea's list of what a patient should take away: feeling better; comfortable with the interviewer; sensing that the interviewer was comfortable too; trusting the clinician; seeing the clinician as balanced, calm, down to earth, and accessible; and believing the clinician may be able to help, which is expertise conveyed.",
          "Together these mean hope has been generated. The closing is where it is consolidated, or, if handled badly, destroyed."
        ] },
        { type: "case", title: "A straightforward closing", text: "Summarized from the chapter. Near the end of the body, a middle-aged woman with probable major depression is finishing her family history. The clinician signals the shift ('we're coming to the close; I'd like to summarize and discuss ways of helping you help yourself'), but first asks how she puts together what is happening to her (she thinks her bad qualities are catching up with her, that she is a burden), what she thinks explains the timing (the children leaving), and whether there is anything to add (a bad college semester that in retrospect looked the same, for which no help was sought because her parents thought her lazy). The clinician asks what help she hoped for ('a magic pill,' she laughs), hears how hard it was to walk in, and asks what made her stay. Then impressions: normalizing her fear, praising her account, agreeing about the home stresses and recommending weekly therapy, and explaining the neurovegetative symptoms and family history as pointing to a biological component for which medication may help, with no promises. A referral to the mood disorders clinic, a check that it makes sense, and a teach-back in her own words. Then: what was this interview like for you, and is there anything I could have done differently (more magazines in the lobby). She will not see this clinician again; a card with the clinic's number and the assessment clinic's own for emergencies, and a parting that she made a good decision." },
        { type: "p", text: "The closing takes time and must appear unhurried, concerned, and calm, because engagement here secures the return visit or the follow-through on a referral. It is give-and-take: the clinician really wants the patient's opinions, including of the clinician's own performance. That question sometimes yields good criticism and always metacommunicates that the clinician cares how they come across and knows they can improve, so the patient expects to be listened to rather than ordered about." },
        { type: "p", text: "Two optional components. Prescribers are often expected to introduce a medication at the first visit; it is a fine art needing at least 5 to 7 minutes and often more, so either shorten the body or run over (Shea has done both), or defer it to the next session. Done well, it covers the patient's past experiences with medications and any sense of being sensitive to them (then start low, a powerful sign of listening), what they have heard and who they know who takes it (a friend's horror story can sink a drug; pick an equivalent or address the fear directly), side effects explained frankly and the fact that they may precede benefits, the patient's role in reporting them, the clinician as consultant with the patient making the final decision, and the specific benefits expected, with the clinician's own successes. Chapter 23 expands this into the Medication Interest Model." },
        { type: "p", text: "The second is asking permission to contact corroborative informants, which is why confidentiality often returns here. Concerns deserve exploration and are sometimes right (an abusive partner should not learn of therapy). Morrison's framing reassures the rest: what you have told me is confidential and I will respect that, but you also have a right to the best help I can give, for which I need to know more; I will tell your wife only what we have agreed, and nothing else without your permission." }
      ],
      practice: [{ kind: "practice", id: "c3p6", label: "Practice: protecting the closing" }]
    },

    {
      id: "termination",
      title: "Termination, and the glass bead game",
      lede: "A warm goodbye, and sometimes a last clue.",
      blocks: [
        { type: "p", text: "Termination is the actual closing words and gestures: a handshake, a smile, and for a triage clinician who will not see the patient again, a simple 'I hope things go well for you.' The only common error is a sudden formality and coolness, a pseudo-professionalism that risks alienating a patient after an hour of warmth. A quiet warmth between two people who have worked together fits better." },
        { type: "p", text: "If you will be the patient's therapist, watch the exit. Termination is a mini-loss, and responses to loss can show dependence and difficulty separating: the patient who dawdles at the door for one more sign of approval, the one who turns cool as if resenting the end of the hour (an early hint of entitlement or borderline rage), a peculiarly soft knock, an unusually rapid set of departing footsteps." },
        { type: "p", text: "Shea ends with Hesse's Glass Bead Game, the fictional art of synthesizing opposites gracefully. The player Hesse describes can be a strict logician and full of music, devoted to order and to imagination, able at any moment to change position without resistance or losing his head. The strategies in this chapter feel awkward at first and become natural with practice, and from that practice a more penetrating intuition grows. Talented interviewers are neither purely intuitive nor purely analytic; they are both. Flexibility and creativity are born from understanding and discipline." }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "Both full introduction dialogues (the brusque Dr. James and the warm one), the complete confidentiality script with the Sommers-Flanagans' additions, Table 3.1 (the DOC with all nine types) and Table 3.2 (the typology of shut-down, wandering, and rehearsed interviews by DOU, RTL, eye contact, question ratio, focusing, and facilitation), the two complete prison interviews, the full wandering-patient dialogue, and the entire closing with the depressed woman, which is worth reading aloud." },
    { title: "Video Module 3.1", text: "Macrostructure of the Interview: the graceful unfolding of the introduction, opening, and body, with the patient first met in Chapter 1, showing the transition from opening into the body in real time." },
    { title: "Chapters this one leans on and leads to", text: "Chapter 1 for engagement, blending, DOU and RTL, and the valence of empathic statements; Chapter 2 for the patient's fears and for how fact-finding questions convey expertise; Chapter 4 for facilics, the solution to the body's database problem; Chapter 19 for deep-rooted shut-downs and naming the patient's concerns about the interview; Chapter 23 for the Medication Interest Model." },
    { title: "Sources Shea draws on", text: "Sullivan on the self-system and on what a patient should gain from the assessment; Storr on re-taking a referred patient's history; the Sommers-Flanagans on confidentiality; Lazare on the contractual nature of the encounter; Morrison's The First Interview for naming emotions and the corroborative-source script; Clara Hill's response-mode research on how clinicians phrase questions; Alfred Benjamin on why questions; Al Chung-liang Huang on fluidity under uncertainty; and Hesse's The Glass Bead Game." }
  ]
};
