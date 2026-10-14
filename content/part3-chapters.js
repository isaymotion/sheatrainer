/*
  Psychiatric Interviewing Trainer — Part III content (Chapters 16–18)
  Mastering Complex Interviewing Tasks Demanded in Everyday Clinical Practice
  Based on Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Written in our own words. All clinical examples are composed for teaching; they are not transcripts from the book.

  Same schema as part1-chapters.js. Chapters appear in the app as they are added;
  Chapters still listed in UPCOMING (app.js) show as "Coming soon" until then.
*/
window.TRAINER = window.TRAINER || { parts: {} };
(function () {
  var part = (window.TRAINER.parts.part3 = window.TRAINER.parts.part3 || {});
  part.id = "part3";
  part.numeral = "III";
  part.title = "Mastering Complex Interviewing Tasks Demanded in Everyday Clinical Practice";
  part.blurb = "The mental status, and the sensitive exploration of suicidal, violent, and homicidal ideation.";
  part.simulations = part.simulations || [];
  part.drills = part.drills || [];

  part.chapters = [
    /* ───────────────────────── CHAPTER 16 ───────────────────────── */
    {
      id: "ch16", num: 16, title: "The Mental Status", sub: "How to perform and document it effectively",
      summary: "The mental status is an objective snapshot of the patient during the interview itself. Most of it is woven invisibly into the conversation; formal cognitive testing is added when the picture calls for it. Write what you saw and what the patient said, in precise shared terms, with pertinent negatives, and save your opinions for the formulation.",
      concepts: [
        { h: "Empathy can fog the lens", b: "Looking with the patient is our natural stance, but leaning on it alone can hide what is in front of us, such as a subtle loosening of associations. The mental status asks you to step back far enough to observe with objective compassion." },
        { h: "Impact status vs mental status", b: "The impact status is your moment-to-moment read of the patient's affect and behavior, including how you are affecting them. The mental status is the composite of everything observed across the interview: a snapshot of the session, set against the ongoing story told in the HPI." },
        { h: "Two parts, one mostly invisible", b: "Most of the mental status is the symptom review and observation woven through the interview with good facilics, so the patient never feels examined. The second part, formal cognitive testing (orientation, digit spans, recall, drawings), is a distinct, optional section expanded by age and suspicion of delirium or dementia." },
        { h: "Facts here, opinions in the formulation", b: "The HPI and mental status record facts: the patient's words, behaviors, and symptoms. Diagnoses, interpretations, and treatment plans belong in the Narrative Summary and Clinical Formulation. The mental status covers only what this patient showed and said today; don't repeat the HPI, refer to it." },
        { h: "Six headings", b: "Appearance and behavior; speech characteristics and thought process; thought content; perception; mood and affect; sensorium, cognitive functioning, and insight. Checklists can flag pathology, but a checklist alone is never an adequate mental status." },
        { h: "Process vs content", b: "\"Thought disorder\" is ambiguous. Problems in how thoughts are formed (derailment, tangentiality, illogic) are a formal thought disorder and go under thought process. Problems in what is believed are delusions and go under thought content. A patient can be floridly psychotic with perfectly formed sentences." },
        { h: "Ruminations, obsessions, compulsions", b: "Ruminations are absorbing worries that don't feel foreign. Obsessions are intrusive, unwanted, and feel odd and painful; the patient tries to stop them. Compulsions are acts or mental acts the patient feels driven to repeat, often to relieve an obsession's anxiety. Ask every patient." },
        { h: "Mood is told, affect is seen", b: "Mood is the patient's report of how they have been feeling, and is relatively lasting. Affect is what you observe in the room, and can change minute to minute. If the patient won't describe mood, say so; you can always describe affect. Name the affect first, then judge its appropriateness." },
        { h: "Consciousness first", b: "Always document level of consciousness. A fluctuating sensorium raises delirium, a potentially lethal emergency. Attention-heavy bedside tests (digit spans, vigilance, clock, cube) are sensitive to it; the MoCA and CAM help structure the search." }
      ],
      pearls: [
        "Describe, don't label: write what the clothes, hands, and movements looked like, not \"odd\" or \"inappropriate.\"",
        "Quote the patient. Their exact words show conviction better than \"clearly delusional.\"",
        "Grade severity: mild, moderate, or severe tangentiality or derailment.",
        "Pertinent negatives show you looked: \"no evidence of responding to internal stimuli.\"",
        "Write \"denied hallucinations,\" not \"no hallucinations.\"",
        "Suicide, violence, and self-harm get a line in every mental status: ideation, plan, intent, and any action taken.",
        "State the affect, then whether it fits the content.",
        "Record exactly which cognitive tests you did, and say when you did none."
      ],
      practice: [],
      quiz: [
        { q: "What best distinguishes the impact status from the mental status?", opts: ["The impact status is formal cognitive testing; the mental status is observation", "The impact status is a moment-to-moment read of the patient's affect and behavior; the mental status is the composite of observations across the interview", "The impact status is recorded in the HPI; the mental status in the formulation", "They are two names for the same thing"], a: 1, w: "The impact status is the quick, subjective take at any single moment (including your own effect on the patient). The mental status is the objective snapshot of the whole interview." },
        { q: "Which statement belongs in the Narrative Summary and Clinical Formulation rather than the mental status?", opts: ["\"States, 'The cameras in the ceiling are for me.'\"", "\"Clothes stained; hair uncombed; picked at her sleeve throughout.\"", "\"Presentation most consistent with a manic episode with psychotic features.\"", "\"Denied current suicidal ideation, plan, or intent.\""], a: 2, w: "A diagnostic impression is an opinion about what the facts mean. The mental status records the facts themselves." },
        { q: "A patient is grossly delusional and agitated but speaks in clear, logically connected sentences. How should thought process be described?", opts: ["Formal thought disorder, because the patient is psychotic", "Without derailment, tangentiality, or illogic; the delusions are documented under thought content", "Content thought disorder under thought process", "Flight of ideas"], a: 1, w: "\"Psychotic\" is not the same as \"formal thought disorder.\" Formal thought disorder concerns how thoughts are formed; delusions are thought content." },
        { q: "A patient wanders from topic to topic and eventually returns to answer the original question. This is:", opts: ["Tangential thought", "Circumstantial thought", "Derailment", "Thought blocking"], a: 1, w: "Circumstantial thought takes the long way around but gets back. Tangential thought wanders off and never returns." },
        { q: "Pressured speech is best described as:", opts: ["Speech that is simply fast", "Speech that is loud", "Speech without the normal pauses, hard to interrupt, which can occur even at a normal rate", "Speech with long latencies before answers"], a: 2, w: "Pressure is the loss of natural pauses, \"speech without punctuation.\" It usually accompanies a fast rate but is not the same thing." },
        { q: "A patient stops mid-sentence, looks distracted, and never returns to the thought. Which term fits?", opts: ["Thought blocking", "Illogical thought", "Long response latency", "Circumstantiality"], a: 0, w: "Thought blocking is often a sign of psychosis, as when a hallucination interrupts. It is different from a long silence before answering." },
        { q: "Which feature most distinguishes an obsession from a rumination?", opts: ["Obsessions are about the past", "Obsessions feel intrusive, odd, and painful, and the patient tries to stop them", "Ruminations are always about guilt", "Ruminations always lead to compulsions"], a: 1, w: "Ruminating patients are absorbed in their worries but don't experience the process as foreign. Obsessions feel alien and the patient fights them." },
        { q: "A woman looking at a coat on a hook suddenly sees it as a crouching figure. This is:", opts: ["A visual hallucination", "A visual illusion", "A delusion", "Derealization"], a: 1, w: "Illusions distort a real stimulus. Hallucinations arise without any external trigger, as in seeing a figure in an empty hallway." },
        { q: "A patient cries through much of the interview but says, \"My mood is great.\" How should the mental status read?", opts: ["\"Mood: depressed.\"", "\"Mood: euthymic. Affect: euthymic.\"", "\"Mood: 'great' (patient's words). Affect: sad, tearful at several points.\"", "Leave mood blank"], a: 2, w: "Record what the patient reports and what you observe. The discrepancy, and its meaning (perhaps denial), is discussed in the formulation." },
        { q: "Which screening tool was developed specifically to detect delirium?", opts: ["MMSE", "MoCA", "Confusion Assessment Method (CAM)", "Digit span alone"], a: 2, w: "The CAM was built for delirium. The MMSE and MoCA screen broader cognitive impairment, though Shea finds the MoCA better than the MMSE at catching delirium." }
      ],
      glossary: [
        { term: "Impact status", def: "The clinician's moment-to-moment read of the patient's immediate affect and behavior, including the effect the clinician's own behavior is having." },
        { term: "Mental status", def: "An objective description of the patient's appearance, behavior, thought, feeling, and perception during the interview itself, documented under six standard headings." },
        { term: "Informal cognitive examination", def: "Gauging orientation, attention, and memory by how the patient handles ordinary questions throughout the interview, without formal tests." },
        { term: "Formal cognitive examination", def: "A distinct section of testing (orientation, digit spans, recall, constructions, or a standardized battery), expanded according to the patient's age and suspected delirium or dementia." },
        { term: "Pertinent negative", def: "An abnormality you looked for and did not find, recorded to show the reader it was examined (e.g., no evidence of responding to internal stimuli)." },
        { term: "Narrative Summary and Clinical Formulation", def: "The section of the record where the clinician integrates history and mental status and gives opinions: diagnoses, etiology, and treatment plans." },
        { term: "Formal thought disorder", def: "A disturbance in how thoughts are formed and connected (derailment, severe tangentiality, illogic), documented under thought process." },
        { term: "Content thought disorder", def: "An older term for disturbed thought content, essentially delusions. Shea suggests avoiding the ambiguous \"thought disorder\" family of terms." },
        { term: "Pressured speech", def: "Speech without the normal pauses, hard to interrupt or get a word into. Usually fast, but can occur at a normal rate." },
        { term: "Tangential thought", def: "Thoughts drift off on tangents from the patient's own statements, with some connection between steps, and never return to the original point." },
        { term: "Circumstantial thought", def: "Thoughts take detours like tangential thought but eventually come back to the original topic." },
        { term: "Derailment", def: "The DSM-5 term for loosening of associations: successive thoughts seem unconnected to the listener. Moderate to severe degrees indicate psychosis unless feigned." },
        { term: "Word salad", def: "Derailment so severe that speech is essentially incoherent." },
        { term: "Flight of ideas", def: "Tangential thought or loosening of associations combined with marked pressure and usually rapid speech; often driven by distractions or plays on words. Typical of mania." },
        { term: "Thought blocking", def: "The patient stops mid-sentence and never returns to the idea, as if interrupted, often by a hallucination. Frequently a sign of psychosis." },
        { term: "Illogical thought", def: "Conclusions that don't follow from the premises. Distinct from a delusion, which is a false belief that may be reasoned quite logically." },
        { term: "Rumination", def: "Persistent, absorbing preoccupation with worries or guilt that does not feel foreign to the patient; common in depression and anxiety." },
        { term: "Obsession", def: "A recurrent, intrusive thought, image, or impulse that feels odd and distressing and that the patient tries to suppress." },
        { term: "Compulsion", def: "A behavior or mental act the patient feels driven to repeat, often to relieve the anxiety of an obsession, though recognized as excessive." },
        { term: "Reassurance compulsion", def: "A compulsion to ask others the same question repeatedly to quiet an obsession, such as asking a partner again and again whether one looks all right." },
        { term: "Mood", def: "The patient's own report of how they have been feeling; a symptom, relatively persistent." },
        { term: "Affect", def: "The emotional state the clinician observes in the interview through face, voice, and body; a sign, often transient." },
        { term: "Restricted affect", def: "Some decrease in the range and intensity of facial expression." },
        { term: "Blunted affect", def: "A fairly striking decrease in facial animation and emotional expression." },
        { term: "Flat affect", def: "Essentially no spontaneous facial expression." },
        { term: "Labile affect", def: "Rapid, often abrupt shifts in expressed emotion." },
        { term: "Level of consciousness", def: "Alertness and its stability: alert, hyper-alert, somnolent, or fluctuating. Fluctuation raises concern for delirium." },
        { term: "Digit span", def: "Repeating strings of digits forward and backward; a quick test of attention. Record the longest string managed in each direction." },
        { term: "Vigilance test", def: "The patient taps each time a target letter is heard in a string of random letters; sensitive to the inattention of delirium." },
        { term: "MMSE", def: "Folstein Mini-Mental State Examination: a 30-point standardized battery (orientation, registration, attention and calculation, recall, language, following commands). Its form requires a paid license." },
        { term: "MoCA", def: "Montreal Cognitive Assessment: a free one-page screening battery available in many languages. Shea finds it more efficient than the MMSE for detecting delirium." },
        { term: "CAM", def: "Confusion Assessment Method: a tool designed specifically to detect delirium." }
      ]
    }
  ];
})();
