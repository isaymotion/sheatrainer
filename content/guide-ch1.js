/*
  Psychiatric Interviewing Trainer — Study guide, Chapter 1: The Delicate Dance
  Written in our own words as a companion to Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  Clinical exchanges are composed for teaching; they are not transcripts from the book.

  Schema
    guide = {
      chapter: "ch1",
      intro: "...",
      highYield: { mustKnow:[...], pitfalls:[...], phrases:[{ say, when }] },
      sections: [{ id, title, lede?, blocks:[...], practice?:[{ kind, id?, label }] }],
      deeper: [{ title, text }]                      what to read or watch in the book itself
    }
    Block types
      { type:"p", text }                             paragraph
      { type:"list", items:[...] }                   bulleted list
      { type:"steps", items:[...] }                  ordered list (only for true sequences)
      { type:"table", head:[...], rows:[[...]] }
      { type:"compare", a:{ title, items }, b:{ title, items } }
      { type:"case", title, text }                   a summarized case
      { type:"exchange", title?, lines:[{ who, t, tag? }], note? }   composed dialogue
      { type:"pearl", title, text }                  a callout
    Inline markup in any text: [[term]] or [[glossary term|shown text]] links to the glossary.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.guides = window.TRAINER.guides || {};
window.TRAINER.guides.ch1 = {
  chapter: "ch1",
  intro: "This chapter lays the foundation for the whole book: what an interview is, what an initial assessment is trying to accomplish, how to tell whether the alliance is forming, and how to use empathy deliberately rather than by habit. Read it once straight through, then come back to the sections you bookmark before your next call shift.",

  highYield: {
    mustKnow: [
      "Good interviewing is the art of choice, not habit. Shea borrows Ivey's term, [[intentionality]]: always having more than one response available and choosing the one that fits this patient, this setting, and this culture.",
      "[[Engagement]] is the goal; [[blending]] is the gauge. Read blending three ways: your own felt sense, objective speech timing ([[DOU / RTL]] and interruptions), and the patient's self-report near the end.",
      "A guarded patient gives short answers after long pauses. A wandering patient gives long answers almost instantly and interrupts. Very fast, intense rapport may be [[unipolar blending]] from hypomania or histrionic process.",
      "Empathy keeps the \"as if\": you recognize the feeling and step back out. [[Identification]] adopts the feeling as your own and leads toward burnout and countertransference.",
      "The [[empathy cycle]] has five phases, and it can break at any of them: the patient expresses, you recognize, you convey, the patient perceives, the patient signals acceptance.",
      "[[Strategic empathy]]: first judge the [[interpersonal stance]] (trusting or guarded), then choose the [[empathic valence]] by turning two dials, [[implied certainty]] and [[intuited attribution]].",
      "At the first disavowal of an empathic statement by a guarded or paranoid patient, stop empathic statements. Switch to interested questions ([[greasing the wheels]]) and pure [[reflecting statement|reflecting statements]] in the patient's exact words.",
      "With anger aimed at you or your institution, high certainty helps: a [[defusing statement]] plus a sincere apology, with any explanation brief and last."
    ],
    pitfalls: [
      "Feeding the wanderer: taking notes, nodding, and asking follow-ups just as the patient drifts away from the topic you need.",
      "Trusting your felt sense of great rapport in the first few minutes without checking the objective signs.",
      "Saying \"I can feel your pain\" or \"I know exactly how you feel.\" That is identification, not empathy.",
      "Answering a disavowal with more empathy, at higher valence. That is the engine of the paranoid spiral.",
      "Leading with your explanation when a patient is angry at you. It turns the conversation into your defense.",
      "Empathic statements that run on for several sentences and stack up attributions. Patients usually go quiet."
    ],
    phrases: [
      { say: "It sounds like…", when: "Lowers implied certainty. Safe with trusting and guarded patients alike." },
      { say: "There's a particular kind of exhaustion that comes with…", when: "An impersonal \"there is\" statement: validating and universal, best with trusting patients." },
      { say: "What have you noticed?  How do you put it together?", when: "Greasing the wheels with a guarded or paranoid patient." },
      { say: "It makes sense you'd be upset.  No wonder you're upset.  Who wouldn't be upset!", when: "Defusing statements, in rising order of certainty. Match the strength to the anger." },
      { say: "What I'm hearing is… Is that close?", when: "A stem and a check-out around a paraphrase. They hand the patient the final word." },
      { say: "You look a little hesitant. Did I say or do anything that felt uncomfortable?", when: "When a closing \"fine\" doesn't match the patient's face." },
      { say: "I can't know what you're feeling, but if you want to talk, I'm here.", when: "A bridge to a patient too depressed or withdrawn to respond." }
    ]
  },

  sections: [
    {
      id: "two-way", title: "The interview is a two-way system",
      lede: "Both people in the room shape what happens, including the patterns that go wrong.",
      blocks: [
        { type: "p", text: "Shea opens with an image worth keeping: interviewing is like exploring a dark room in an old house with a single candle. Details emerge slowly, and a draft can snuff the light. Some clinicians move through the room as if they already know the floor plan. That knowledge isn't a gift; it is a set of principles that can be learned and named. Naming them matters for the same reason art historians name color, composition, and perspective: a shared language lets you think about what you're doing, talk about it in supervision, and do it on purpose." },
        { type: "case", title: "Who is wandering?", text: "A resident has engaged a woman well. She came in for depression, and he now wants to explore her depressive symptoms. When he asks about mood, she moves to her husband, then to her old job. He takes a note as she shifts, offers a brief \"I'm sure,\" then asks what kind of work she did. Ten minutes later he still has almost nothing on her depression. On a second look, it isn't clear who wandered more: the patient, or the interviewer who went with her." },
        { type: "p", text: "Shea names the pattern [[feeding the wanderer]]. Three small behaviors rewarded the detour: writing as she drifted (which signals \"this is important\"), empathic filler that rewarded the new topic, and a follow-up question that committed both people to it. The same moves can be useful when you want free association. What matters is that you choose them." },
        { type: "pearl", title: "Audit yourself first", text: "When a patient drifts, look at your own pen, nods, and questions before blaming the patient. Chapter 3 covers how to refocus gracefully." },
        { type: "p", text: "Shea's general definition of any interview has four parts: a verbal and nonverbal dialogue; between two people whose behavior shapes each other's communication; producing recognizable patterns of interaction; with one person asking questions toward goals while the other answers and has goals of their own. What makes an interview clinical is the particular set of goals it pursues." }
      ],
      practice: [{ kind: "drill", id: "doc", label: "Drill: degree of openness" }]
    },
    {
      id: "goals-map", title: "Goals, a map, and a compass",
      lede: "What the initial assessment is trying to do, and what keeps you oriented when it gets hard.",
      blocks: [
        { type: "p", text: "The initial assessment has eight broad goals. Notice how many of them are done with the patient rather than to the patient." },
        { type: "table", head: ["Goal", "In practice"], rows: [
          ["Engage", "Build a sound therapeutic alliance."],
          ["Collect data", "Gather a thorough and valid database."],
          ["Understand", "Develop an evolving, compassionate understanding of the person."],
          ["Assess", "Arrive at an assessment and a tentative diagnosis."],
          ["Define problems and goals", "Agree together on practical problems and therapeutic goals."],
          ["Plan", "Agree together on a disposition and a tentative treatment plan."],
          ["Begin healing", "Ease some anxiety and pain before the patient leaves."],
          ["Instill hope", "Leave the patient hopeful, and make sure they come back."]
        ] },
        { type: "p", text: "The same goals produce very different interviews depending on the setting. A crisis consult in a busy emergency department after domestic violence, a community intake in a fifty-minute hour, and a long psychotherapy consultation each sculpt the interview differently. The setting should decide the style, but only a clinician willing to change style can let it." },
        { type: "p", text: "Running through all of them is the central challenge of initial interviewing: gather a valid, thorough database in limited time while engaging the patient sensitively. The shorter the time, the harder the task." },
        { type: "steps", items: [
          "Engagement: safety, respect, and the beginning of an alliance.",
          "Data gathering: a thorough and valid database.",
          "Understanding: the patient's view of the world, their fears, pains, and hopes.",
          "Assessment: a tentative differential diagnosis and a practical problem list.",
          "Treatment planning: co-created, realistic, and workable within the system."
        ] },
        { type: "p", text: "That sequence is Shea's map of the interview. It runs forward, but the processes intertwine, and the arrows run backward too: engagement has to be tended for the whole interview, not just at the start. Part I of the book devotes a chapter or more to each station." },
        { type: "p", text: "When the map isn't enough, Shea offers a compass: we are in the room to help the person who came to us. It sounds too obvious to say, yet time pressure, fatigue, paperwork, and our own needs make it surprisingly easy to lose. [[Person-centered]] interviewing, in the lineage of Rogers' client-centered counseling, sees the patient as a unique intersection of biology, psychology, intimate relationships, family, culture, and spirituality. It means understanding what the patient sees as the problem and wants from us before offering our own answers, and treating the patient as someone full of potential solutions rather than as the problem." },
        { type: "pearl", title: "A 3 a.m. check", text: "On call, ask yourself: am I trying to finish my note, or trying to help this person? The answer changes how you interview." }
      ]
    },
    {
      id: "blending", title: "Engagement and blending",
      lede: "How to tell, in the room, whether the alliance is forming.",
      blocks: [
        { type: "p", text: "Engagement starts before the first question. From the first sight, sound, and handshake, both people compare impressions with memory and try to sense where the other will fit. The patient is doing a mental status examination on you, too. Picture a patient who ignores your offered hand. A clinician who keeps the hand out and asks, a bit testily, whether they don't want to shake, or one who makes a dry remark about their mood, is teaching the patient whether this clinician gets angry, pushes, and is safe." },
        { type: "compare",
          a: { title: "Engagement: the goal", items: ["A growing sense of safety and respect.", "The patient feels freer to share problems.", "Confidence grows that you can understand them."] },
          b: { title: "Blending: the gauge", items: ["The observable clues that engagement is working.", "A way to monitor your techniques in real time.", "An early warning to change course before the alliance is damaged."] } },
        { type: "p", text: "Shea insists on the distinction because studying engagement techniques is of little use without a way to measure whether they're working. He describes three complementary gauges." },
        { type: "table", head: ["Gauge", "What you watch", "Watch out for"], rows: [
          ["Subjective", "Your own felt sense of how the interview is going, calibrated to what a good interview feels like for you: more conversation than interrogation, more interested, more relaxed.", "It can be fooled by charm, and it lags behind real change."],
          ["Objective", "Wiens' speech variables: duration of utterance, reaction time latency, and how often the patient interrupts. Body language comes in Chapter 8.", "Medication effects or blunted affect can make engagement look weaker than it is."],
          ["Self-report", "Near the end, ask how it has been to talk with you today.", "Many patients say \"fine\" to be polite; watch whether their face agrees."]
        ] },
        { type: "table", head: ["Pattern", "Duration of utterance", "Reaction time", "Interruptions", "Often seen with"], rows: [
          ["Guarded", "Short", "Long", "Occasional, to correct you", "Suspicious or paranoid patients"],
          ["Wandering", "Long", "Very short", "Frequent, from eagerness", "Hypomanic, histrionic, or anxious patients"]
        ] },
        { type: "p", text: "Speech timing is also the fastest way to see whether a technique is working. With a hesitant patient, a rising [[DOU / RTL|duration of utterance]] is often the earliest sign of success, well before your felt sense catches up." },
        { type: "pearl", title: "Unipolar blending", text: "Some patients, especially hypomanic or histrionic ones, open up far faster than most. The rapport feels wonderful but is one-sided and shallow; a student once called it [[unipolar blending]]. If you feel captivated in the first minutes, step back and check the objective signs. The feeling itself may be the clue that something is wrong." },
        { type: "case", title: "When the gauges disagree", text: "Shea describes a soft-spoken young man whose interview felt flat to him, with little animation and poor objective signs. At the end the patient said, and meant, that he had felt at home and enjoyed the conversation. He had schizophrenia in remission; residual blunting or medication had made engagement look weak when it wasn't. The mismatch showed how others probably misread him as aloof, which pointed toward social skills work or a medication review." },
        { type: "p", text: "When blending is weak, three explanations are possible: you are disengaging the patient (change your style, for instance toning down an extroverted manner with a paranoid patient), the patient's psychopathology or defenses are blocking engagement (consider which), or both. Asking \"Is it me, is it them, or both?\" often yields clinical information." },
        { type: "p", text: "Engagement sits first on the map for a reason. People don't share freely with someone they don't like, so data become less valid. The intimate corners of the patient's world stay hidden. Diagnosis rests on shaky data. And the patient may not come back, which makes the whole first interview moot." }
      ],
      practice: [{ kind: "practice", id: "c1p4", label: "Practice: monitoring blending" }, { kind: "practice", id: "c1p6", label: "Practice: self-report at the close" }]
    },
    {
      id: "empathy-cycle", title: "Empathy and the empathy cycle",
      lede: "Empathy is a two-person event that can fail at five different points.",
      blocks: [
        { type: "p", text: "Most of us assume we know what empathy is. Rogers described it as perceiving another person's inner frame of reference accurately, with its feelings and meanings, as if you were that person, without ever losing the \"as if.\" Shea's shorter version: accurately recognizing someone's immediate emotional perspective while keeping your own." },
        { type: "compare",
          a: { title: "Empathy", items: ["Recognizes the feeling quickly.", "May briefly feel it too, then steps back.", "No investment in whether the feeling is right or matches yours.", "Your own perspective stays intact."] },
          b: { title: "Identification", items: ["Keeps feeling the patient's anger or sadness.", "Adopts the feeling as your own, outside awareness.", "Agrees the feeling is accurate and reasonable.", "Boundaries blur; burnout and countertransference follow."] } },
        { type: "p", text: "Persistent strong identification is a signal to bring the case to supervision, and sometimes to start or return to your own therapy. Shea's warning example is announcing \"I can feel your pain\" to a patient with borderline features, who already struggles with a diffuse sense of identity. Most patients aren't looking for someone who feels what they feel; they want someone trying to understand what they feel." },
        { type: "p", text: "Barrett-Lennard's [[empathy cycle]] turns empathy into something you can study, because a breakdown can happen at any of its five phases." },
        { type: "table", head: ["Phase", "What can go wrong", "Example"], rows: [
          ["1. Patient expresses a feeling", "Defenses keep the real feeling from being voiced.", "A parent who insists a child's obvious developmental delay is just a phase."],
          ["2. Clinician recognizes it", "Your own state, defenses, or projections distort what you see.", "Still rattled from supervision; or projecting your own divorce onto a patient's separation."],
          ["3. Clinician conveys it", "The wrong valence for the patient, poor timing, or too many words.", "A confident empathic statement to a guarded patient."],
          ["4. Patient perceives it", "Psychopathology limits what the patient can take in.", "Delirium or severe psychosis; a manic patient too busy talking to register it."],
          ["5. Patient signals acceptance", "Psychopathology blocks any visible response.", "Severe regressive depression or catatonic stupor."]
        ] },
        { type: "p", text: "In phase 1, empathy aimed at a feeling the patient hasn't acknowledged can feel intrusive. Respect the defense early." },
        { type: "pearl", title: "You are the instrument", text: "We have no microscope or scanner; the interviewer is the measuring device, and it can bias its own readings. Before walking in, pause for a moment and name what you're feeling: rushed, irritated, sad, tired. Naming the bias moves you a step away from invalid data." },
        { type: "p", text: "Phase 2 is also where intuition lives. Margulies and Havens describe two frames of mind behind it. Disciplined naiveté is listening receptively, trying to feel the patient's world without sorting it into causes, categories, or moral judgments. Imaginative projection is actively stepping into the patient's inner experience, their \"inscape,\" the way a poet or artist would. Both work best when blending is strong." },
        { type: "p", text: "The skilled interviewer alternates intuition and analysis within minutes, and each can guide the other. An intuitive sense of a patient's terror of falling apart can deepen engagement now and prompt a diagnostic look at personality structure later. An analytic observation that a patient is avoiding your eyes and growing more anxious can prompt a gentle question about what coming to see a therapist has been like." },
        { type: "p", text: "Phases 4 and 5 call for patience. A delirious patient may hear an empathic remark as an insult; a manic patient may mainly want an audience. A patient in a severe, regressed depression may seem hollow, yet still be taking in what you say. A simple bridge can matter: you can't know what they're feeling, but if they want to talk, you'll be there. Culture shapes how empathy is offered and received on both sides of the dyad; Chapter 20 returns to this." }
      ]
    },
    {
      id: "strategic", title: "Strategic empathy: stance and valence",
      lede: "Empathy used on purpose, matched to the person in front of you.",
      blocks: [
        { type: "p", text: "With most first-visit patients, some empathic statements land as ordinary, some land powerfully, and a few drive a small group of patients away. Shea compares it to compliments: some people can't accept a sincere one because it pushes them toward a self-image that feels wrong, or a good feeling they can't yet tolerate. Empathic statements backfire the same way, pushing people into positions they don't want to occupy. [[Strategic empathy]] means using empathy deliberately, according to the patient's needs and defenses, rather than the same way with everyone." },
        { type: "compare",
          a: { title: "Trusting patients", items: ["Most of your patients.", "A wide range of empathic statements works, with little risk.", "You can move from gentle to powerful as trust grows."] },
          b: { title: "Guarded patients", items: ["High anxiety or fear, including involuntary evaluations.", "A situational fear of you, such as an immediate negative transference.", "Long-standing suspiciousness, or psychotic paranoia.", "Empathy closes distance they need; they retreat or attack."] } },
        { type: "p", text: "Empathic statements reduce interpersonal distance. That intimacy is exactly what a guarded patient doesn't want, and for a paranoid patient the worst fear is someone getting inside their head. Respecting the need for distance is itself a form of empathy." },
        { type: "p", text: "[[Empathic valence]] is how intensely a statement tends to engage or disengage. Low-valence statements engage trusting patients mildly but seldom backfire. High-valence statements can deepen trust powerfully, and backfire badly with guarded patients. Valence has two dials." },
        { type: "table", head: ["Dial", "Question it answers", "Low", "High"], rows: [
          ["[[Implied certainty]]", "How sure do I sound that I know what they feel?", "\"It sounds like…\", \"I wonder if…\"", "Declarative: \"Everything you counted on gave way at once.\""],
          ["[[Intuited attribution]]", "How much am I reading in beyond what was said?", "Mirror their own words back (a reflecting statement).", "Name an unspoken feeling, or link to an earlier loss."]
        ] },
        { type: "exchange", title: "Two dials, one trusting patient", lines: [
          { who: "Patient", t: "Since my brother died in March, the house is so quiet. I can't make myself do anything." },
          { who: "Clinician", t: "It sounds like it's been hard to get going since he died.", tag: "low certainty, low attribution" },
          { who: "Clinician", t: "The quiet is where you feel his absence most.", tag: "high certainty, some attribution" },
          { who: "Clinician", t: "It sounds like the quiet frightens you a little, the way it did when your father died.", tag: "low certainty, high attribution" }
        ], note: "Composed for this guide. With a trusting patient and a solid alliance, the second or third can be the moment they feel truly understood. With a guarded patient, the first is the safer choice." },
        { type: "p", text: "High-certainty statements sometimes start with an impersonal \"It is\" or \"There is\": \"There is so much grief in a loss like this.\" They suggest a shared human experience and can shore up a faltering alliance with a trusting patient. They are still high certainty, so they carry the same risk with guarded patients." },
        { type: "exchange", title: "When high valence backfires", lines: [
          { who: "Patient", t: "My landlord won't return my calls. Everyone's against me and I've got no one." },
          { who: "Clinician", t: "It's lonely to face all of that with no one on your side.", tag: "high certainty" },
          { who: "Patient", t: "How would you know? You don't know my life." }
        ], note: "Composed. A guarded patient can experience being told what he feels as trespassing on a private world. \"It sounds like it's been a lot to handle alone\" would have been safer. A reflecting statement is safer still." },
        { type: "p", text: "Pure [[reflecting statement|reflecting statements]] mirror back essentially the patient's own words. They rarely sound inaccurate or invasive to anyone, and they show attentive listening, but they convey limited understanding and can sound mechanical if overused. Their great virtue is with paranoid patients." },
        { type: "p", text: "Shea's six guideposts reduce to this: use empathic statements regularly; know that they vary on two dials; match them to where the patient falls between trusting and guarded; low-valence statements work with nearly everyone and seldom backfire; with guarded patients stay gentle, and if a stronger statement is disavowed, back off, sometimes from empathy altogether; with trusting patients, start gentle and move toward higher valence as trust deepens." }
      ],
      practice: [{ kind: "drill", id: "valence", label: "Drill: empathic valence" }, { kind: "practice", id: "c1p3", label: "Practice: choosing valence" }]
    },
    {
      id: "paranoid", title: "The paranoid spiral",
      lede: "Why naturally empathic clinicians fall into it, and how to step out.",
      blocks: [
        { type: "p", text: "Active psychotic paranoia is the most extreme form of guardedness. These patients need precise accuracy in how they're described and a great deal of psychological distance. Even gentle empathy may be rejected, and confident or intuitive empathy feels like someone getting inside their head. Shea saw the spiral often in the psychiatric emergency room, especially among empathic trainees, and admits falling into it repeatedly as a first-year resident." },
        { type: "steps", items: [
          "You offer an empathic statement, often a gentle one.",
          "The patient corrects or rejects your words, testily.",
          "You feel the connection slip, and it's jarring if empathy has always worked for you.",
          "By habit, you offer more empathy, often stronger.",
          "The patient feels intruded upon and pulls further away, toward silence or hostility."
        ] },
        { type: "p", text: "The endpoint can be stony silence or rising hostility close to the edge of violence. A remark like \"I'm not defenseless\" may be a veiled threat worth taking seriously." },
        { type: "exchange", title: "Stepping out at the first disavowal", lines: [
          { who: "Patient", t: "My coworkers have been watching me. Every shift." },
          { who: "Clinician", t: "That sounds stressful." },
          { who: "Patient", t: "I didn't say stressful. I said watching.", tag: "disavowal" },
          { who: "Clinician", t: "Watching. What have you noticed them doing?", tag: "exact words, then greasing the wheels" },
          { who: "Patient", t: "They take turns at the window. They write things down when I walk by." },
          { who: "Clinician", t: "How do you put that together?" }
        ], note: "Composed. After the disavowal, no more empathic statements: only the patient's exact words and genuine curiosity about how he sees it." },
        { type: "p", text: "At the first disavowal, avoid empathic statements until engagement is clearly sound. If you reintroduce empathy later, start gentle and watch closely; any further pulling away means leaving empathy out for the rest of the interview. That takes real discipline for clinicians who use empathy reflexively." },
        { type: "p", text: "Instead, use what David Robinson calls [[greasing the wheels]]: an interested, non-empathic, conversational manner that invites the patient to elaborate the delusion. Pair it with pure reflections in the patient's exact words. The patient feels safer because you aren't pushing closeness, and the conversation keeps going." },
        { type: "pearl", title: "Why it matters for safety", text: "Paranoid delusions can hold the seeds of danger to self or others. In Shea's contrasting version of his example, the interviewer who greased the wheels learned that the patient was considering shooting her neighbor, information that could save a life. Such a disclosure calls for a detailed violence risk assessment, your supervisor, safety planning, and your local duty-to-protect obligations." },
        { type: "p", text: "There is a diagnostic bonus too. Early in an interview, a disavowal of an ordinary empathic statement may be the first hint that a patient is paranoid, prompting a careful search for psychotic process." }
      ],
      practice: [{ kind: "practice", id: "c1p1", label: "Practice: avoiding the spiral" }, { kind: "sim", id: "sim-watching", label: "Interview: Watching" }]
    },
    {
      id: "anger-paraphrase", title: "Defusing anger and strengthening a young alliance",
      lede: "Two more difficult moments: a patient angry at you, and a bond that is still fragile.",
      blocks: [
        { type: "p", text: "Sooner or later a patient will be angry with you. Paradoxically, these moments can strengthen the alliance if handled well; Chapter 19 is devoted to them. Ordinary empathy can backfire here too. An understated \"I know waiting isn't fun\" minimizes the feeling, and a defensive explanation of why you were late makes things worse." },
        { type: "list", items: [
          "Mild: \"It makes sense to me that you'd be upset.\"",
          "Moderate: \"No wonder you're upset.\"",
          "Strong: \"Who wouldn't be upset!\""
        ] },
        { type: "p", text: "These [[defusing statement|defusing statements]] work precisely because they carry high certainty: you are strongly agreeing with the patient's view. The angrier the patient, the stronger the statement. Follow with a sincere apology. Give any reason briefly, as an afterthought, and keep the focus on the patient. Shea also shows compensation (not charging for the session) and a touch of well-timed humor helping the repair. It works only if it's sincere." },
        { type: "exchange", title: "A defusing statement in action", lines: [
          { who: "Patient", t: "Forty minutes! I left work early for this." },
          { who: "Clinician", t: "Who wouldn't be upset! That's a long wait, and I'm truly sorry.", tag: "defusing statement plus apology" },
          { who: "Patient", t: "Well… you shouldn't keep people waiting." },
          { who: "Clinician", t: "You're right. An emergency came up on the unit, and that still wasn't fair to you.", tag: "agree first, reason last" }
        ], note: "Composed for this guide." },
        { type: "p", text: "A new alliance is fragile, and paraphrases help it hold throughout the interview. A [[generic paraphrase]] keeps the patient's key words but shows you've processed them, with slightly different phrasing or emphasis and no opinion added. Keep it short. Add \"It sounds like…\" if the patient seems wary. Ivey notes paraphrases can free a patient who keeps repeating a story because they fear no one is listening, and can honor a trauma survivor's need to retell from different angles." },
        { type: "p", text: "Ivey also suggests a [[stem and check-out]] around the paraphrase: a lead-in such as \"What I'm hearing is…\", and a closing question such as \"Is that close?\" Check-outs are especially useful with patients who care about accuracy, because they hand over the final word." },
        { type: "table", head: ["Patient's style", "Sounds like", "Matching stem or check-out"], rows: [
          ["Visual", "\"I can't see a way out.\"", "\"So the way you see it…\" / \"Does that look right?\""],
          ["Auditory", "\"Nobody hears me.\"", "\"What I'm hearing is…\" / \"Does that ring true?\""],
          ["Kinesthetic", "\"It weighs on me.\"", "\"It feels like…\" / \"How does that sit with you?\""]
        ] },
        { type: "p", text: "A [[metaphorical paraphrase]] (Sommers-Flanagan and Sommers-Flanagan) captures the central message in a single image, such as spinning your wheels or an uphill battle. Stressed patients often feel scattered, and a good metaphor can crystallize their thinking. In Shea's example, a stalled doctoral student embraced the image of a treadmill, added that her committee controlled the speed, and then realized on her own that stalling might be a way to avoid deciding what to do with her life. In a first interview the main aim is the alliance; an insight like that is a bonus." }
      ],
      practice: [{ kind: "practice", id: "c1p2", label: "Practice: defusing statements" }, { kind: "practice", id: "c1p5", label: "Practice: sensory paraphrase" }, { kind: "sim", id: "sim-forty", label: "Interview: Forty minutes" }]
    },
    {
      id: "landing", title: "Making empathy land",
      lede: "Frequency, timing, length, and how to tell whether it worked.",
      blocks: [
        { type: "table", head: ["Variable", "Guidance"], rows: [
          ["Frequency", "There's no magic number. Well-received clinicians tend to scatter empathic statements every few minutes, roughly every 2 to 10. Too many sounds superficial or paternalistic; too few makes you seem inscrutable."],
          ["Timing", "Use at least two or three in the first 5 to 10 minutes. Many patients decide early whether you accept them or will think them silly or weak."],
          ["Length", "Short and unambiguous. A long, stacked statement full of guesses about what the patient feels overwhelms them, and they usually go quiet."]
        ] },
        { type: "exchange", title: "Too long", lines: [
          { who: "Patient", t: "The hospital keeps sending bills from years ago. I just don't have the money." },
          { who: "Clinician", t: "That sounds like such a hard spot, with all those pressures. I bet you feel stranded and alone, like everyone's against you and there's nowhere to turn…", tag: "far too long" },
          { who: "Patient", t: "Uh-huh." }
        ], note: "Composed. Better: \"That sounds like a heavy weight to carry,\" then pause." },
        { type: "p", text: "The test of an empathic statement is what happens next. Havens' standard: does your response deepen the patient's narrative, or do they stop or change the subject? Do expressions of feeling grow or shrink? Effective empathy usually increases how much the patient says, which links straight back to blending: a rising duration of utterance after an empathic statement is objective evidence that it landed. Some of the most powerful moments come when empathic flow reaches a memory the patient had kept out of awareness." },
        { type: "p", text: "Finally, most empathy probably isn't carried by empathic statements at all. Facial expression, posture, tone of voice, and what Havens calls empathic noises, a soft \"mm,\" carry a great deal of it. A perfectly worded statement in a hurried voice can fail where a warm face and a simple sound succeed. Chapter 8 covers nonverbal behavior in depth." },
        { type: "pearl", title: "A self-review exercise", text: "With consent, record a practice interview and watch it with the sound off. What do your face and posture communicate without your words?" }
      ],
      practice: [{ kind: "quiz", id: "ch1", label: "Chapter 1 quiz" }]
    }
  ],

  deeper: [
    { title: "Read in the book", text: "The full discussion, including Shea's annotated dialogues for each valence example, both versions of the paranoid spiral, and the complete angry-patient exchange." },
    { title: "Video Module 1.1", text: "An introduction to the book's integrated video program. Watch it before the other modules." },
    { title: "Video Module 1.2", text: "Effectively Using Empathic Statements: expanded didactics with annotated interview excerpts." }
  ]
};
