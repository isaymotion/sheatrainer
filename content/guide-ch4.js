/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 4: Facilics
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book. Book cases are summarized.
  Schema: see the top of guide-ch1.js.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch4 = {
  chapter: "ch4",
  intro: "Chapter 3 left you with a problem: a dozen databases to gather in thirty to forty minutes without the patient feeling interviewed. Chapter 4 is the solution. Facilics is Shea's supervision language for how interviewers structure as they gather: which topics (regions), when (a quarter-by-quarter clock), how (blended rather than stilted expansions), and above all how to move between topics (gates). The chapter's single most useful idea is the pivot point, the instant a patient drifts into a new topic and you choose whether to follow. Learn the five gates by name, then watch your own next interview for them.",

  highYield: {
    mustKnow: [
      "[[Facilics]] (from facilis, grace in movement) is the study of how interviewers structure interviews while gathering data: what topics, when, how, and how they move between them under time pressure. Its two activities are mindful awareness of your own structuring and a set of techniques for shaping it.",
      "A region is a stretch of several sentences with one focus. [[Content region|Content regions]] gather data on a topic; process regions attend to the interaction: the [[Free facilitation region|free facilitation]], [[Transformational region|transformational]], and [[Psychodynamic region|psychodynamic]] regions, plus psychoeducation, crisis work, and ventilation.",
      "Twelve broad content regions make up an intake. Nobody covers them all in one interview; Shea doubts he ever has. The art is maximizing useful information while the patient experiences a conversation.",
      "The psychiatric review of symptoms is single screening questions woven into the flow, not a region. A positive answer followed by a criteria exploration becomes a region. Missing comorbid disorders (OCD, substance use) can cost lives.",
      "The [[Scouting region|scouting region]] (introduction plus opening, about 7 minutes) is both process and content at once.",
      "[[Tracking]] you brought from life; focusing you must learn. The [[Unguided interview|unguided interview]] is what happens when a normally verbal patient meets a clinician who cannot focus.",
      "The clock: by 15 minutes, scouting plus two or three expansions; by 30, eight to ten regions; the third quarter for what proved important and what remains; the last 5 to 10 minutes for the closing. Check at 5 minutes and every 15.",
      "Two gremlins: the overlong scouting region (fix it at the 5-minute check) and the [[Dead zone|dead zone]], a second quarter lost to interesting material, which breeds the second error, a frantic phantom-gated scramble at 30 minutes. If behind, regroup, drop what matters least, and proceed at a normal pace.",
      "Once in a region, expand it fully. Leaving early means returning, juggling, errors of omission, and attention stolen from the person. [[Stilted / blended expansion|Blended]] expansions gather the same data as stilted ones but flow from the patient's words.",
      "[[Pivot point|Pivot points]]: the patient moves to a new region; you choose. Nine times in ten, pull back gently. Follow when the material is highly charged, highly sensitive (suicide, incest, domestic violence), or a memory worth catching now. Recognizing pivots instantly is arguably the greatest secret of structuring.",
      "Five cornerstone gates: [[Spontaneous gate|spontaneous]] (patient moves, you follow), [[Natural gate|natural]] (cue statement plus transitional question), [[Referred gate|referred]] ('Earlier you mentioned…'), [[Implied gate|implied]] (a topically similar region, no cue), [[Phantom gate|phantom]] (from nowhere). Plus [[Manufactured gate|manufactured]] (serial natural gates), [[Introduced gate|introduced]], and [[Observed gate|observed]] gates.",
      "Natural gates are the cornerstone of conversational structuring; master clinicians use them constantly. Referred gates are the rescue tool (20 to 40% of Shea's gates in an intake) and the graceful door into the cognitive exam and sensitive histories. Phantom gates mostly signal a clinician in trouble."
    ],
    pitfalls: [
      "Following every pivot point: the wandering interview with a loquacious patient, the unguided interview with an ordinary one.",
      "Letting the scouting region drift into the second quarter.",
      "Enjoying the dead zone, then sprinting at 30 minutes with 'Let me just ask a few more things' and 'Oh, I forgot to ask.'",
      "Checklist expansions that ignore what the patient just said: the 'Meet the Press' feel.",
      "Split and parallel expansions without tracking what has been gathered.",
      "Apologizing your way into the cognitive exam ('some silly questions now'); the apology creates the anxiety it tries to prevent.",
      "'By the way, are you a prostitute?' A phantom gate into a delicate topic where a referred gate was waiting.",
      "Learning one style and believing the others inferior; it is the surest way to lose flexibility."
    ],
    phrases: [
      { say: "How do you mean?  Tell me more about that.", when: "Following a pivot point with a spontaneous gate, when you have decided to move." },
      { say: "Have you ever used anything like a nightcap to knock yourself out?", when: "A natural gate: cued off a sleep complaint to enter the drug and alcohol region." },
      { say: "Earlier you mentioned that sometimes when you were alone you'd have scary thoughts. Tell me a little more about those moments.", when: "A referred gate into psychotic phenomena, or into any region left incomplete." },
      { say: "A little earlier you said you were worried about your concentration and memory. I have some questions that would give us both a clearer idea how much they've been affected. Does that sound all right?", when: "A referred gate into the cognitive examination, with purpose and no apology." },
      { say: "Sometimes when people drink they notice they want to let off steam, pick a fight, flex the old beer muscles. Do you know what I mean?", when: "The second step of a manufactured gate from stress to drinking to brawls to violence at home." },
      { say: "We've covered a lot of ground. We have about ten minutes left, and I think it's a good time to share some thoughts and brainstorm options. First, is there anything you think we should have talked about that I missed?", when: "An introduced gate from the body into the closing." },
      { say: "It looks like you're starting to well up. What are you feeling?", when: "An observed gate into a free facilitation or psychodynamic region." }
    ]
  },

  sections: [
    {
      id: "conversation",
      title: "Secrets from everyday conversation",
      lede: "A café conversation has structure: topics, expanded, joined by transitions that grow out of what was just said.",
      blocks: [
        { type: "p", text: "Chapter 3 described the macrostructure, five phases and their tasks. This chapter turns to the microstructure: how every sentence relates to the one before and the one after, especially in the body, where that weave decides whether the patient feels interviewed by a clipboard or engaged by a knowledgeable person who cares. Shea's starting observation is that a highly engaged interview behaves like ordinary conversation, so ordinary conversation may hold the clues." },
        { type: "p", text: "Eavesdrop on two friends over coffee and you find a gentle, unconscious structure. One raises a topic; both expand it, one asking questions to understand better and showing interest. When it is spent, someone moves to a new topic, usually prompted by something already said, often by the last sentence. Succeeding topics, connected by transitions, swelling and ebbing with interest. A flowing interview has the same elements: the clinician knows which topics matter for this kind of interview, guides toward them by cueing off the patient's words, expands each fully in conversational mode, and has structured imperceptibly." },
        { type: "p", text: "This is among the hardest skill sets clinicians acquire, because gathering a large database in a tight time is not something life teaches. The Degree of Openness Continuum showed that a precise supervision language speeds learning. Facilics is such a language for structuring, developed at Western Psychiatric Institute and Clinic and refined in the Dartmouth Interviewing Mentorship Program; before it, trainees had to wing it. A behaviorally concrete language also makes self-supervision possible for a whole career, in the spirit of Osler's remark that medical education is a life course." },
        { type: "pearl", title: "Two activities", text: "Facilics in practice is (1) learning to notice, as it happens, how you are structuring the interview, and (2) applying specific strategies and techniques to shape the data gathering gracefully. The first is the foundation of the second." }
      ],
      practice: [{ kind: "quiz", id: "ch4", label: "Quiz: Chapter 4" }]
    },

    {
      id: "regions",
      title: "Regions: what topics?",
      lede: "A region is any stretch of several sentences with a unified focus, on a topic or on the interaction itself.",
      blocks: [
        { type: "p", text: "The novice's first problem in the body is knowing what to gather, so the first facilic concept is the region: a section of at least several sentences in which there is either a unified attempt to gather data on a specific topic or a unified focus on the process of interaction or on a non-data task. [[Content region|Content regions]] do the former; process regions the latter. Broad content regions contain smaller ones (substance use contains cocaine, opiates, cannabis; social history contains living conditions, employment, domestic violence). Ten or more broad regions are visited in an intake, in no set order." },
        { type: "table", head: ["Content region", "Notes"], rows: [
          ["History of the presenting problem and stresses", "Often shared spontaneously in the opening"],
          ["Interviewee's perspective", "Views on problem and solution, what help is hoped for, fears and expectations"],
          ["History of the presenting illness (HPI)", "Chronology, type, severity, and duration of the primary DSM-5 disorder's symptoms"],
          ["Comorbid DSM-5 diagnoses", "Screening questions are woven through the interview (the psychiatric review of symptoms); a positive screen expanded into criteria becomes a region. Commonly missed: OCD, substance use"],
          ["Social history", "Interpersonal and environmental; stressors; incest and domestic violence; experiences of bias"],
          ["Framework for meaning and spirituality", "Worldview, with cultural sensitivity (Chapter 20)"],
          ["Family history", "Psychiatric illness, suicide, substance use, developmental delay, seizures in blood relatives"],
          ["Suicidal and homicidal ideation, planning, behavior, intent", "Never omitted; woven into the flow, documented under mental status"],
          ["Past psychiatric history and treatment", "Prior problems, therapy, medication, hospitalization"],
          ["Developmental and psychogenetic history", "Often deferred to later sessions if time is short"],
          ["Medical history", "Illnesses, review of systems, medications, allergies, current providers"],
          ["Cognitive mental status", "A discrete, identifiable region; formal when delirium, dementia, or other impairment is suspected (Chapter 16)"]
        ] },
        { type: "p", text: "The list is intimidating, and Shea says so: it is rarely, perhaps never, possible to cover it all in one interview, and he is not sure he has done so in thirty years. The art is prioritizing as the interview proceeds, and a well-trained clinician gathers a surprising amount in fifty minutes. His sample content region is a brief, direct expansion of drug and alcohol use: current drinking, what is used now and how often, how many joints, any pills, and what was used in the past." },
        { type: "p", text: "In a process region the interviewer cares less about a database than about what is happening between the two people or inside the patient's head. Three are common." },
        { type: "list", items: [
          "[[Free facilitation region]]: nondirective listening. The patient wanders; the clinician nods, says 'uh-huh,' offers empathy and open questions. It is the foundation of the opening (which is really content regions mixed with free facilitation), the substance of a psychoanalytic session, and a tool for engagement that also brings to the surface whatever lies just beneath it, including subtle psychosis (Chapter 11).",
          "[[Transformational region]]: the clinician actively works to dissolve a roadblock arising from defenses, anger, or defensiveness. Earlier editions called these resistance regions, but the new name captures that a point of disagreement is an invitation to transform the relationship. Without resolution, later data and the alliance suffer. Chapter 19 is devoted to them.",
          "[[Psychodynamic region]]: questions are asked, but the interest is in how and why the patient answers. How reflective, how insightful, how does the patient take an interpretive question, how good is the observing ego? The answers bear on suitability for time-limited therapy, ego strength, defenses, and readiness for treatment."
        ] },
        { type: "case", title: "Forty years younger", text: "Summarized from the chapter. A patient asks for an older clinician. The young interviewer, without defensiveness, asks what an older clinician could do better, agrees that it is undeniably true that he has not lived the same things, offers that many patients of the same age have shared their years of experience with him, proposes that they make a good team, and promises that if the patient still feels uncomfortable at the end of the hour a switch can be discussed. The patient softens, and the next question, about how people have been pressuring him over his age, opens the story of a wife who left for a younger man." },
        { type: "p", text: "Other process regions exist: ventilation, psychoeducation, crisis intervention, phenomenological questioning. Fluency in both content and process regions, interwoven, is the goal; there is no single correct sequence, and the student who learns one style while scorning others has handicapped their flexibility. Finally, the introduction and opening together form the [[Scouting region|scouting region]], about 7 minutes in which both parties scout out the stranger across from them. It is unique: process and content at once, heavy on free facilitation, yet usually yielding critical history as patients volunteer it." }
      ]
    },

    {
      id: "time",
      title: "Using time: the quarter-by-quarter clock",
      lede: "'I didn't have enough time' and 'How much longer is he going to take?' are the same complaint, heard from both sides of the door.",
      blocks: [
        { type: "p", text: "Many interviews are made or broken before a word is spoken, in the planning. An intake at a community clinic or inpatient unit may need most content regions, many of them thoroughly; a 20-to-30-minute emergency evaluation of a patient well known to the system needs a conscious decision about which regions to shrink or drop. Facilics gives a running sense of where you are in the database, and from that the ability to control pace." },
        { type: "p", text: "Chapter 3 described the wandering interview. Its quieter cousin is the [[Unguided interview]]: a patient of normal verbal output, easily directed, meets a clinician who cannot focus, and the result is a hodgepodge, because the patient does not know which information helps. The reason is [[Tracking]]. Tracking, following the patient's statements and emotional state with pertinent questions, is the mark of a good listener and a prerequisite for interviewing; most trainees arrive with it, learned from friends and family. Few arrive able to focus. Focusing can be learned." },
        { type: "p", text: "The core rule: once inside a content region in the body, expand it relatively fully, usually to completion. Related topics feel natural to the patient. If the patient spins off on a tangent, it is often best not to follow. Leave a region early and you must come back, sometimes several times; make a habit of it and you cannot monitor what has been gathered, so omissions multiply. The cognitive load of remembering what is missing creates anxiety, which steals attention from engagement and from the human being in the room, and it makes the note afterwards far harder to write." },
        { type: "table", head: ["Time", "What should be happening"], rows: [
          ["0 to 7 min", "Scouting region: engagement, PACE, a tentative plan, and a chosen entry region. Often the patient's own talk has already led into the presenting problem or a diagnostic region; expand it."],
          ["By 15 min", "Scouting complete plus two or three content expansions; a surprisingly good idea of the main problems."],
          ["15 to 30 min", "Keep choosing regions and expanding them completely, attending to engagement, peppering with process regions as needed. By 30 minutes, eight to ten pertinent regions covered."],
          ["30 to 45 min", "Expand regions that proved more important than expected; gather what remains for treatment and triage (family, medical, social history, cognitive exam if indicated)."],
          ["Last 5 to 10 min", "Little new data. The closing and termination tasks from Chapter 3."]
        ] },
        { type: "p", text: "The commonest early-training problem is a scouting region that runs deep into the second quarter, long past what engagement requires, and the information it displaces is simply gone. The fix is cognitive discipline: notice when five minutes have passed, ask what PACE has told you, and decide how you will make a graceful transition into the body. If engagement is weak, lengthen the scouting region on purpose; with skill, you will rarely need more than the usual seven minutes. Build the five-minute habit from the start of your career." },
        { type: "pearl", title: "The dead zone", text: "The second gremlin lives in the second quarter. By 15 minutes everything has gone well, and now both parties are so engaged that the patient wanders into interesting places and the clinician, enjoying it, tracks along. Too many free facilitation regions, too many spontaneous gates followed. At 30 minutes little usable information has been gathered: a quarter dead to the purpose of the intake. Shea confesses it happens to everyone, including him; interesting material is enjoyable, and some of it would be valuable in therapy. It is just not useful now." },
        { type: "p", text: "The dead zone begets a second error. The clinician glances at the clock at 30 minutes and takes off like a sprinter: rigid, rapid structure, a barrage of 'Let me just ask a few other questions' and 'Oh, I forgot to ask,' and a patient who concludes that data matter more than listening. The cycle is prevented by structuring steadily through the second quarter. If you nonetheless find yourself behind at 30 minutes, regroup. Do not try to gather everything. Decide what is most important (a suicide assessment not yet done, a substance history, a pivotal piece of social history such as incest), gather it at an engaging, normal pace, deliberately drop what is less critical for an initial assessment (family history, perhaps, unless a medication decision needs it), shorten other regions, and leave the rest for future sessions or clinicians. Rigid focusing is seldom required, and the patient experiences no rush. It is all right to miss data; it is not feasible to get it all." },
        { type: "steps", items: [
          "Before the interview, decide tentatively which content regions fit the time, the patient, and the goals.",
          "At 5 minutes, check the scouting region and decide how you will enter the body.",
          "Structure gently but persistently as soon as you leave scouting and throughout the second quarter.",
          "Once in a region, expand it thoroughly; pull a pivoting patient back, except into highly charged or sensitive areas, where the invitation may vanish if not accepted at once.",
          "Avoid overusing free facilitation regions in the body.",
          "Monitor progress at least every 5 to 10 minutes, and your structuring every 15.",
          "Avoid the dead zone; if behind at 30 minutes, choose what to drop and proceed naturally.",
          "Leave adequate time for a graceful closing and termination."
        ] }
      ],
      practice: [{ kind: "practice", id: "c4p5", label: "Practice: recovering from a dead zone" }]
    },

    {
      id: "expansions",
      title: "Expanding a region: stilted versus blended",
      lede: "Same data, two experiences. One feels like Meet the Press; the other feels like talking with someone.",
      blocks: [
        { type: "p", text: "Exploring a region is its expansion, and interviewers do it in opposite ways. A stilted expansion lacks conversational flow: the patient is run through a forced series of questions as the clinician rigidly hits data points, and feels interviewed. Rigidly structured instruments foster it. In Shea's example a patient says the pressures at home have reached a crisis point, and the clinician replies, 'What's your appetite like?' then sleep, then sexual drive, then energy, each question ignoring the answer before it." },
        { type: "p", text: "A blended expansion covers the same region, here the DSM-5 depressive episode, but each question grows from what the patient just said, with empathy at the right moments. Lower anxiety improves both the quantity and the validity of the data. Video Module 2.1 showed one." },
        { type: "exchange", title: "A blended expansion of depression", lines: [
          { who: "Patient", t: "The pressure at home has hit a breaking point. I'm feeling the heat." },
          { who: "Clinician", t: "It sounds like you've been through a lot. How has it affected the way you feel in general?", tag: "Empathic statement, then open question" },
          { who: "Patient", t: "Drained. Tired all the time. Everything is a chore." },
          { who: "Clinician", t: "What are some of the everyday things that feel like chores now?" },
          { who: "Patient", t: "Honestly, everything. Even my group chats. I used to love those. Now I don't care." },
          { who: "Clinician", t: "That sounds hard. What about sleep, has that been affected too?", tag: "Empathy piggy-backed to the next criterion" },
          { who: "Patient", t: "Terrible. Hours to fall asleep. I'm wired." },
          { who: "Clinician", t: "Tell me about it.", tag: "Gentle command" },
          { who: "Patient", t: "I wake four or five times, and around five I'm up for good, like someone shook me." },
          { who: "Clinician", t: "How do you mean?", tag: "Phenomenological, open" },
          { who: "Patient", t: "An alarm goes off in my head. Then I lie there worrying: the rent, my mother's health, letting everyone down." },
          { who: "Clinician", t: "That sounds miserable, and I'd guess it leaves you wound up and unrested all day. Does it cause problems with your concentration?" },
          { who: "Patient", t: "Everything takes twice as long. Reading, writing, anything." },
          { who: "Clinician", t: "Do you think your appetite has been affected as well?" },
          { who: "Patient", t: "Food tastes like paste. I've lost about five pounds in a month or two." }
        ], note: "Composed after Shea's example. Anhedonia, insomnia with early waking, rumination, poor concentration, appetite, and weight loss have all been gathered, and the patient has felt accompanied rather than examined. Note the empathic statements and the open techniques that ask how the symptom is experienced, not merely whether it exists. The clinician is structuring firmly while the patient feels the flow is unstructured." },
        { type: "p", text: "Two flexible variants. A brief excursion leaves the region briefly (a mention of diazepam during the anxiety region prompts a short medication history) and returns to finish. A [[Split expansion]] expands one region at several points in the interview. Both increase adaptability and both invite omissions unless the clinician tracks what has been gathered; use them judiciously. Humor, too, furthers the natural feel." },
        { type: "pearl", title: "The patient who prefers a checklist", text: "Oddly, some patients like stilted expansions. The patient with hypochondriacal worries and the conviction that nothing is wrong with his head may feel more at home with a review-of-systems flavor that resembles his family doctor's examination. Adapt the style to the patient." }
      ],
      practice: [{ kind: "practice", id: "c4p6", label: "Practice: blended expansion" }]
    },

    {
      id: "pivots",
      title: "Pivot points and spontaneous gates",
      lede: "Arguably the single greatest secret of structuring: noticing the moment the patient changes topic, and choosing.",
      blocks: [
        { type: "p", text: "Gates are the statements or questions that join two regions. Five are cornerstones: spontaneous, natural, referred, implied, and phantom. The [[Spontaneous gate]] needs no effort from the interviewer. The patient unilaterally moves into a new region, a [[Pivot point]], and the clinician follows with something as simple as 'Tell me more about that' or 'How do you mean?'" },
        { type: "exchange", title: "A pivot into mania", lines: [
          { who: "Clinician", t: "Besides having no energy for chores, can you still enjoy your card games or other hobbies?" },
          { who: "Patient", t: "Not really. Everything's flat. I haven't been to cards in months. Which is strange, because there were times I couldn't sit still. I was a human dynamo.", tag: "Pivot point" },
          { who: "Clinician", t: "How do you mean?", tag: "Spontaneous gate" },
          { who: "Patient", t: "Cards, tennis, golf, everything. Nobody could keep up with me." },
          { who: "Clinician", t: "Did you ever move too fast? Get so energized it was hard to finish things?" },
          { who: "Patient", t: "People did keep telling me to slow down. About a year ago I barely slept for a week, cleaning and writing all night." },
          { who: "Clinician", t: "Did your thoughts seem speeded up then?" },
          { who: "Patient", t: "Flying. Everything crystal clear and lightning fast." }
        ], note: "Composed after Shea's example. The move from the depression region into a blended expansion of mania was practically imperceptible, because the patient made it." },
        { type: "p", text: "That seamlessness is also the trap. It is usually undesirable to leave a region before it is complete, and the wandering and unguided interviews can now be redefined: they are what happens when every pivot point is followed by a spontaneous gate, leaving a trail of incomplete expansions and a weak database. Pivot points are decision moments. If the current region is essentially finished, follow. If not, nine times out of ten pull the patient gently back and complete the expansion. A clinician who recognizes pivot points as they occur gains control of the flow and clips the wings of a wandering interview before it takes off." },
        { type: "list", items: [
          "Follow a pivot even mid-expansion when the patient has raised highly charged material that needs ventilating.",
          "Follow when the patient spontaneously mentions highly sensitive material best approached at once: suicide, domestic violence, incest. The invitation to a taboo topic may disappear if not accepted promptly.",
          "Follow for specific memories that warrant immediate attention: screen memories, dreams, traumatic events.",
          "In process regions, in the scouting region, and during free association in therapy, spontaneous gates are generally followed and even nurtured. The point is choice, not refusal."
        ] }
      ],
      practice: [{ kind: "practice", id: "c4p3", label: "Practice: following a pivot point" }, { kind: "drill", id: "gates", label: "Drill: facilic gates" }]
    },

    {
      id: "natural",
      title: "Natural gates and manufactured gates",
      lede: "Cue off the patient's last sentence and the new topic feels like theirs. Chain two together and you can reach anywhere.",
      blocks: [
        { type: "p", text: "A [[Natural gate]] has two parts: the cue statement, the patient's last sentence or two, still inside the region being expanded, which contains material that can bridge elsewhere; and the transitional question, the clinician's question that makes the bridge. Unlike the spontaneous gate, the clinician chooses the destination, but the patient feels the conversation flowing from their own speech, which it is. Such transitions seem natural and caring and are seldom perceived as structuring." },
        { type: "exchange", title: "From sleep to the bottle", lines: [
          { who: "Clinician", t: "Tell me more about what it feels like." },
          { who: "Patient", t: "Miserable. Tired all the time. No sleep. Two hours to fall asleep and then I'm up five times a night.", tag: "Cue statement, still in the depression region" },
          { who: "Clinician", t: "Have you ever used anything like a nightcap to sort of knock yourself out?", tag: "Transitional question into drugs and alcohol" },
          { who: "Patient", t: "A good belt does relax me." },
          { who: "Clinician", t: "How much does it take to make you sleepy?" },
          { who: "Patient", t: "A couple of beers. Sometimes more than a couple. A six-pack or two, honestly, maybe three. I hold it well." },
          { who: "Clinician", t: "What other kinds of things do you like to take to relax?" }
        ], note: "Composed after Shea's example. The clinician, satisfied that the depression region is complete, has entered the substance region without a seam. Figure 4.1 in the book shows a single stress-related cue statement serving as a springboard into half a dozen different regions; the flexibility of the natural gate is limited only by the clinician's awareness and creativity. Master clinicians use them frequently." },
        { type: "p", text: "Natural gates can be coupled in quick succession to reach a delicate topic that offers no direct entry. Shea calls this a [[Manufactured gate]], though it is really just serial natural gates used intentionally, through stepping-stone regions." },
        { type: "case", title: "Stress, drink, brawls, home", text: "Summarized from the chapter. Thirty minutes into an intake, a counselor suspects dangerous domestic violence. The patient is expanding his stressors: debt, creditors, no job, a repossessed car. There is no graceful way straight to violence, but she knows that drinking is a bridge to it. First natural gate: does drinking ever help him get away from all this stress? (He deserves a time-out or two, he says.) Second, cued immediately off the drinking: sometimes when people drink they want to let off steam, pick a fight, flex the beer muscles. (He has been in his share of brawls, and won a few.) Then: has that ever carried over when he and his wife are arguing, does it ever get intense enough that he feels like hitting her? Yes, a few weeks ago. Has he ever wanted to hurt her more seriously? Once in a while; sometimes she deserves it. Deserves what? To be out of the picture. What has he thought of doing? Cracking her upside the head with a hammer. He does not think he would. The counselor has asked a man whether he is a potential murderer in a first meeting without breaking regard, and may have saved a life; a second meeting might have been one too late." },
        { type: "p", text: "When a natural gate enters a sensitive topic it is often introduced with a [[Normalization|normalization]], 'Some of my patients who have been experiencing…', which says the topic is safe because the clinician has heard it before. Chapter 5 covers it. Normalizations are useful for taboo topics but neither typical nor necessary in most natural gates. Video Module 4.1 demonstrates natural gates into OCD, psychosis, dementia, violence, and incest." }
      ],
      practice: [{ kind: "practice", id: "c4p1", label: "Practice: building a natural gate" }]
    },

    {
      id: "referred",
      title: "Referred gates: the rescue tool and the graceful door",
      lede: "'Earlier you mentioned…' says you were listening, and opens any region at will.",
      blocks: [
        { type: "p", text: "A [[Referred gate]] enters a new region by referring back to something the patient said, often many minutes earlier: 'Earlier you had said…', 'I want to hear more about something you mentioned before…'. To the patient it metacommunicates careful listening and a wish to help; it is a structuring tool that is also an engagement technique. Structurally it has no immediate cue statement, because the cue was taken from an earlier part of the interview, so it can open a fresh region almost anywhere and is the standard way to re-enter a region left incomplete. In an intake, 20 to 40% of Shea's gates are referred." },
        { type: "exchange", title: "Into psychotic phenomena", lines: [
          { who: "Clinician", t: "What other feelings did you have when your brother came home?" },
          { who: "Patient", t: "Some excitement, honestly. He'd tell me about college, parties, all of it." },
          { who: "Clinician", t: "Earlier you told me that sometimes, when you were alone, you'd have scary thoughts. Tell me a little more about those moments.", tag: "Referred gate" },
          { who: "Patient", t: "Late at night, with music on, things get weird. Like something bad is coming. And then thoughts keep coming at me, telling me to do things." },
          { who: "Clinician", t: "Do the thoughts ever get so intense they sound almost like a voice?" },
          { who: "Patient", t: "They are voices. Sometimes I cover my ears." }
        ], note: "Composed after Shea's example. A psychodynamic region about siblings winds down and a referred gate opens a region usually hard to broach, with no jolt." },
        { type: "p", text: "The cognitive mental status examination is the classic awkward region, important in patients over 50 and whenever delirium or dementia is suspected. Clinicians fear the simple questions will insult, so they apologize: 'some silly questions now,' 'routine questions I ask everyone,' delivered with an uneasy tone and a shift in the chair. The apology creates the anxiety it means to prevent; the patient wonders why a professional asks silly questions and what is afoot. A referred gate to the patient's own earlier complaint about concentration or memory enters the exam with purpose, conveys concern and expertise, and frames it as a collaborative check." },
        { type: "exchange", title: "Into the cognitive exam", lines: [
          { who: "Clinician", t: "A little earlier you mentioned being worried about problems concentrating and remembering things. I have some questions that would give us both a clearer idea of exactly how much your concentration and thinking have been affected by the depression. I think it's worth checking in some detail. Does that sound all right?", tag: "Referred gate" },
          { who: "Patient", t: "That's why I'm here, to find out what's going on." },
          { who: "Clinician", t: "Some will be very simple and some fairly challenging. Let's start with the simple ones. What is today's date?" }
        ], note: "Composed after Shea's example. If the patient denies any trouble, the transition is still easy: that is fortunate, because depression often affects concentration, so you would like to ask some questions designed to pick up even subtle problems, since finding them would help in planning." },
        { type: "case", title: "A delicate question, asked gracefully", text: "Summarized from the chapter. A dramatic, professional-looking woman of about thirty has, over thirty minutes, described years of heavy drug use, no stable relationships, more than a hundred sexual partners, and an FBI investigation of old friends, and has said early on that she can divorce sex from feeling. Shea begins to suspect antisocial personality camouflaged by charm, and wonders about prostitution. Rather than 'By the way, are you a prostitute?', he refers back: earlier she had mentioned being able to separate her sexual feelings from her emotional ones; had that ability ever let her use her body in a purely practical way, for instance had desperate finances ever made something like prostitution necessary? She had worked the streets in New York for four or five months. Blending stayed high. Relating sensitive material to the patient's own earlier words lowers the perceived social inappropriateness of the question." }
      ],
      practice: [{ kind: "practice", id: "c4p2", label: "Practice: rescuing with a referred gate" }, { kind: "practice", id: "c4p4", label: "Practice: introducing the cognitive exam" }]
    },

    {
      id: "phantom-implied",
      title: "Phantom gates, implied gates, and two more",
      lede: "A question from nowhere jolts the flow. A question from next door barely registers.",
      blocks: [
        { type: "p", text: "A [[Phantom gate]] appears to come from nowhere: no cue statement, no reference back, no topical link. A patient has just said she has not been the same since her best friend died, and the clinician asks, 'Was your father an alcoholic?' The patient is taken aback; frequent phantom gates seriously damage engagement, and even mild ones produce the 'Meet the Press' feeling. They cluster at the end of interviews, when clinicians remember what they forgot, and after a dead zone, when they try to cover too much. If a critical region such as the suicide assessment was omitted, a referred gate will return to it without wrecking the flow." },
        { type: "p", text: "Phantom gates have narrow uses: as a blunt focusing tool in a wandering interview after gentler methods fail; in psychodynamic regions, to catch a patient off guard and observe spontaneous defenses; to break through a manipulative patient's roadblock or derail a rehearsed interview as the vehicle for an affective interjection; and, in therapy once the alliance is solid, to give an interpretive question more bite at an unexpected moment. In initial interviews they find minimal application." },
        { type: "p", text: "An [[Implied gate]] is structurally like a phantom gate (no cue, no reference, clinician-initiated) with one difference: it enters a region topically similar to the one under expansion, so it seems to be merely extending a theme already germane to the patient. It is the predominant gate in the café conversation. From a region about current stressors (a crowded house, four fighting children, money) the clinician asks what it was like growing up in Arkansas, and the patient moves into her childhood in a family of eight without a bump. Implied gates lie on a continuum: when the regions are close they rival natural gates; when the regions are far apart they approach the awkwardness of a phantom gate. They also permit parallel expansion of related regions, such as generalized anxiety and major depression together, which should be used sparingly because it muddies the tracking of what has been gathered." },
        { type: "p", text: "Two miscellaneous gates. The [[Introduced gate]] announces that a transition is coming. Shea finds it useful mainly between the body and the closing ('We've covered a lot of ground; we have about ten minutes left…') and for entering a transformational region when tension has been building: 'Let's take a moment to regroup. I may be wrong, but I've had the feeling for a while that something I'm saying or doing is bothering you, and I don't want that. What have you been feeling about where we've been going?' A hidden concern surfaced that way ('I'm not the problem, my wife is') may be the difference between a second appointment and none." },
        { type: "p", text: "The [[Observed gate]], used more often, notes the patient's nonverbal behavior to enter a free facilitation or psychodynamic region ('It looks like you're starting to well up. What are you feeling?') or a transformational one ('You sound irritated right now. Did I say something that offended you, or seems off base?')." }
      ],
      practice: [{ kind: "drill", id: "gates", label: "Drill: facilic gates" }]
    },

    {
      id: "principles",
      title: "Summary of facilic principles, and the ink without marks",
      lede: "A few simple principles, practiced until discipline turns them into art.",
      blocks: [
        { type: "steps", items: [
          "When the patient moves into a new region you always have a choice; these moments are pivot points.",
          "In the body of an initial interview, where efficient and sensitive data gathering is the priority, usually do not follow; pull the patient gently back and finish the region.",
          "When dynamic understanding is the priority, follow with a simple question, a spontaneous gate; wanderings reveal psychodynamics. Also follow into spontaneously raised sensitive areas and when the patient needs to ventilate.",
          "Natural gates, cued off the last sentence or two, should be used frequently; they structure intentionally while feeling unstructured.",
          "Referred gates re-enter poorly expanded regions and raise new ones gracefully, and are the way into awkward regions such as the cognitive exam.",
          "Implied gates join topically similar regions and allow parallel expansions, used sparingly.",
          "Phantom gates are generally avoided, except for a specific purpose such as derailing a rehearsed interview."
        ] },
        { type: "p", text: "Facilics gives supervisors and trainees a shared language, and a schematic shorthand of symbols for regions and gates lets a supervisor map a whole interview on paper as a springboard for feedback; Appendix I offers an interactive program for learning it and Appendix IV an article for faculty. Appendix II contains a verbatim, annotated transcript of one of Shea's own community mental health intakes, in which the five phases and these principles can be seen in the wild." },
        { type: "p", text: "Once the principles are understood, the body of the interview can be shaped almost at will, and the dialogue unfolds intentionally and in a person-centered way: instead of opposing the patient's hesitancies, the interviewer moves with them, defenses drop, and the secrets that lead to healing are more likely to surface. Shea closes where he began, with Wang Hsia, the eighth-century painter whose brush waved and swept until mountains and rain appeared, a student of movement working from a few principles practiced into art. The clinical dialogue is our painting. The aspiration is that a future student, reading one of our transcripts, will find that 'one cannot find any marks of demarcation in the ink.'" }
      ]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The full drug-and-alcohol content region, the free facilitation and psychodynamic region excerpts, the complete transformational dialogue about the clinician's age, both the stilted and blended depression expansions side by side, Figure 4.1 (one cue statement, many destinations), the whole manufactured-gate dialogue into domestic violence, and the referred-gate entries into psychosis, the cognitive exam, and prostitution." },
    { title: "Video Module 4.1", text: "Creating Graceful Transitions Using Natural Gates: expanded didactics with annotated excerpts of natural gates into OCD, psychotic process, dementia, violence, and incest, several introduced with normalizations." },
    { title: "Appendices", text: "Appendix I, an interactive program for learning the facilic schematic system used in supervision; Appendix II, the annotated verbatim transcript of an initial intake showing the five phases and the facilic principles as they naturally unfold; Appendix IV, Shea and Barney's Psychiatric Clinics article for faculty on using facilics with trainees." },
    { title: "Chapters this one connects to", text: "Chapter 3 for PACE, the five phases, and the wandering and rehearsed interviews that facilics explains anew; Chapter 5 for normalization and the other validity techniques that ride on natural gates; Chapter 11 for free facilitation as a way of surfacing psychosis; Chapter 16 for the cognitive examination itself; Chapter 19 for transformational regions in depth; Chapter 20 for the cultural material in the social history." }
  ]
};
