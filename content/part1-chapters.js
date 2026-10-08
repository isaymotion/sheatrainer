/*
  Psychiatric Interviewing Trainer — Part I content (Chapters 1–8)
  Based on Shea, Psychiatric Interviewing: The Art of Understanding (3rd ed.).
  All clinical exchanges are composed for teaching; they are not transcripts from the book.

  Schema for each chapter
    concepts: [{ h, b }]                        key ideas
    pearls:   [ "..." ]                         pocket-card reminders
    practice: [{ id, skill, ctx, p, cue, opts:[{ t, v: "best"|"ok"|"poor", w }] }]
    quiz:     [{ q, opts:[...], a, w }]         a = index of the correct option
    glossary: [{ term, def }]
*/
window.TRAINER = window.TRAINER || { parts: {} };
(function () {
  var part = (window.TRAINER.parts.part1 = window.TRAINER.parts.part1 || {});
  part.id = "part1";
  part.numeral = "I";
  part.title = "Clinical Interviewing: The Principles Behind the Art";
  part.blurb = "Engagement, empathy, structure, validity, the person beneath the diagnosis, assessment, and nonverbal behavior.";

  part.chapters = [
    /* ───────────────────────── CHAPTER 1 ───────────────────────── */
    {
      id: "ch1", num: 1, title: "The Delicate Dance", sub: "Engagement and empathy",
      summary: "An interview is a two-way system that both people shape. Good interviewing is the art of choice, not habit. Engagement is the goal, blending is the gauge, and empathy is a precise tool that must be matched to how trusting or guarded the patient is.",
      concepts: [
        { h: "The interview is a two-way system", b: "Both participants shape each other's behavior and create recognizable patterns. In \"feeding the wanderer,\" the clinician rewards a tangent by writing notes as the patient veers off, offering empathic filler, and then asking about the new topic. When a patient drifts, audit yourself first." },
        { h: "Intentionality", b: "Ivey's idea: acting from a sense of capability and choosing among many possible responses to fit this patient, this situation, and this culture. Strategic empathy, avoiding the paranoid spiral, and choosing a defusing statement are all intentionality in action." },
        { h: "Eight goals and a map", b: "Engage, collect a valid database, understand the person, assess, define problems and goals together, plan disposition together, begin healing, and instill hope so the patient returns. The map runs engagement → data gathering → understanding → assessment → treatment plan, with arrows in both directions: engagement is never finished." },
        { h: "The person-centered compass", b: "We are in the room to help the person who came to us. The patient is an intersection of biology, psychology, intimate relationships, family, culture, and spirituality. Understand what they see as the problem before offering answers." },
        { h: "Engagement vs blending", b: "Engagement is the growing sense of safety and respect. Blending is the set of observable clues that engagement is working. Triangulate three gauges: your subjective sense, objective speech variables (duration of utterance, reaction time latency, interruptions), and the patient's self-report near the end." },
        { h: "Unipolar blending", b: "Hypomanic or histrionic patients may open up unusually fast. It feels like superb rapport but is one-sided and superficial. If you feel charmed within minutes, check the objective signs before trusting the feeling." },
        { h: "Empathy, not identification", b: "Empathy recognizes the patient's emotional perspective while keeping your own: the \"as if.\" Identification adopts the feelings as your own and risks burnout and countertransference. Barrett-Lennard's empathy cycle has five phases: the patient expresses, you recognize, you convey, the patient perceives, the patient signals acceptance. It can break at any phase." },
        { h: "Strategic empathy: stance and valence", b: "First judge the stance: trusting or guarded. Then choose the valence, set by two dials: implied certainty (\"It sounds like…\" vs a declarative statement) and intuited attribution (mirroring their words vs naming an unspoken feeling or link). Low valence is safe but modest; high valence is powerful but can backfire with guarded patients." },
        { h: "The paranoid spiral", b: "The clinician offers empathy, the patient corrects it, the clinician feels the bond slip and adds stronger empathy, and the patient feels intruded upon. At the first disavowal, stop empathic statements. Switch to interested, non-empathic questions (\"greasing the wheels\") and pure reflections of the patient's exact words." },
        { h: "Defusing anger", b: "When a patient is angry at you or your institution, high certainty helps: \"It makes sense you'd be upset,\" \"No wonder you're upset,\" \"Who wouldn't be upset!\" The angrier the patient, the stronger the defusing statement. Apologize sincerely; give any explanation briefly and last." },
        { h: "Paraphrases for a young alliance", b: "Generic paraphrases keep key words but show you processed the content. Stems (\"What I'm hearing is…\") and check-outs (\"Did I get that right?\") hand the patient the final word. Sensory paraphrases match visual, auditory, or kinesthetic language; metaphorical paraphrases capture the whole message in an image." },
        { h: "Did it land?", b: "Use two or three brief empathic statements in the first 5 to 10 minutes, then scatter them. Keep them short. Havens' test: effective empathy deepens the narrative, with more talk and more feeling. Much empathy is nonverbal: face, tone, and soft empathic noises." }
      ],
      pearls: [
        "Before the door: take ten seconds to name your own state. Rushed, angry, tired?",
        "First disavowal of an empathic statement: stop empathy and get curious.",
        "Patient angry at you: defuse first, apologize, explain briefly and last.",
        "Patient wandering: check whether your notes, nods, and questions are feeding it.",
        "Before you close: ask how the conversation felt and explore any hesitation."
      ],
      practice: [
        {
          id: "c1p1", skill: "Avoiding the paranoid spiral",
          ctx: "Emergency department. A man brought in by his brother sits near the door with his arms folded. He has just said his coworkers are \"watching\" him. You replied that it sounds stressful.",
          p: "I didn't say stressful. I said watching.", cue: "Leans back, jaw tight.",
          opts: [
            { t: "I'm sorry, I meant it must be really frightening to feel watched all the time.", v: "poor", w: "This raises both certainty and attribution after a disavowal, which is the engine of the paranoid spiral. He will likely feel more intruded upon." },
            { t: "Watching. What have you noticed them doing?", v: "best", w: "Exact-word reflection plus genuine, non-empathic interest. This is Robinson's \"greasing the wheels\": it respects his need for distance and invites him to elaborate, which is also how safety-relevant material surfaces." },
            { t: "You seem upset with me. Let's talk about what's happening between us.", v: "poor", w: "A process comment increases intimacy, which a guarded patient does not want this early. Save it for later, if at all." }
          ]
        },
        {
          id: "c1p2", skill: "Defusing statements",
          ctx: "Outpatient clinic. You are 40 minutes late. The patient is standing when you walk in.",
          p: "Forty minutes! I left work early for this. What is going on here?", cue: "Coat still on, voice raised.",
          opts: [
            { t: "I was helping someone in crisis on the unit. I'd do the same for you, so I hope you understand.", v: "poor", w: "Leading with an explanation turns the focus to defending yourself. Anger usually escalates." },
            { t: "No wonder you're upset. Forty minutes is a long time to wait, and I'm truly sorry.", v: "best", w: "A moderate-to-strong defusing statement plus a sincere apology. It is hard to stay angry with someone who agrees with you. A brief reason can come later, as an afterthought." },
            { t: "I know waiting is no fun.", v: "poor", w: "Understated empathy minimizes the feeling and often irritates an angry patient further." }
          ]
        },
        {
          id: "c1p3", skill: "Choosing empathic valence",
          ctx: "Twenty minutes into an intake. She has been open and tearful throughout, and your gentle reflections have landed well. Her mother died last month.",
          p: "Since Mom died I just feel numb and hollow. Like I'm walking around empty.", cue: "Makes eye contact, voice soft.",
          opts: [
            { t: "It sounds like you've been feeling numb and hollow.", v: "ok", w: "A safe reflecting statement. It seldom backfires, but with a trusting patient this far in, it conveys only modest understanding." },
            { t: "Losing her has left an emptiness that nothing seems to fill.", v: "best", w: "With a trusting patient and a solid alliance, a higher-certainty statement can deepen the sense of being understood. Watch what comes next: more talk and feeling means it landed." },
            { t: "I know exactly how you feel. I lost my mother too.", v: "poor", w: "This is identification, not empathy. It shifts the focus to you and loses the \"as if.\" Most patients want someone trying to understand what they feel, not someone who feels it with them." }
          ]
        },
        {
          id: "c1p4", skill: "Monitoring blending",
          ctx: "Two minutes into a first interview, the patient is sharing vivid, intimate stories with dramatic flair. She interrupts you eagerly and answers before you finish questions. You feel you have great rapport.",
          p: "And honestly, I feel like I can tell you anything. You get me in a way my last three therapists never did!", cue: "Rapid speech, leaning toward you.",
          opts: [
            { t: "Enjoy the strong rapport and let her keep going. Structure can wait.", v: "poor", w: "Your subjective sense is being duped. This may be unipolar blending: fast, one-sided, superficial openness." },
            { t: "Note the long utterances, very short latencies, and frequent interruptions, and plan to explore sleep, energy, and mood elevation.", v: "best", w: "Checking objective speech variables catches what the felt sense misses. Consider hypomania or a histrionic process and explore it." },
            { t: "Tell her directly that she's sharing a lot very quickly and ask why.", v: "poor", w: "A blunt process comment, plus a \"why\" question, risks shaming her this early. Gather data first." }
          ]
        },
        {
          id: "c1p5", skill: "Sensory paraphrase with a check-out",
          ctx: "A middle-aged man describing a business failure. He has used visual language throughout.",
          p: "I just can't see any way out of this. Everywhere I look, it's the same dead end.", cue: "Stares at the floor.",
          opts: [
            { t: "So the way you see it right now, every door looks closed. Is that close?", v: "best", w: "A visual stem matches his language, the paraphrase shows you processed it, and the check-out hands him the final word." },
            { t: "You feel stuck.", v: "ok", w: "Accurate and brief, but it switches to kinesthetic language and offers no check-out. Fine, just less attuned." },
            { t: "It's probably not as bad as it looks. Things usually work out.", v: "poor", w: "Premature reassurance invalidates his experience and tells him you didn't really hear it." }
          ]
        },
        {
          id: "c1p6", skill: "Patient self-report at the close",
          ctx: "You are wrapping up. You ask how it has been talking with you today.",
          p: "It was… fine. Yeah. Fine.", cue: "Hesitates, glances away, small shrug.",
          opts: [
            { t: "Great. Let's get your next appointment scheduled.", v: "poor", w: "You missed the nonverbal disagreement. Unspoken discomfort is a common reason patients never return." },
            { t: "I noticed a little hesitation there. Was there anything I said or did that felt uncomfortable, or anything I missed?", v: "best", w: "Gently naming the hesitation and asking non-defensively greatly increases the chance of a second visit and often yields useful feedback." },
            { t: "Fine is good! Most people find the first visit a bit awkward.", v: "ok", w: "Normalizing is kind, but it closes the door on whatever the hesitation meant." }
          ]
        }
      ],
      quiz: [
        { q: "Which statement best distinguishes engagement from blending?", opts: ["They are synonyms for rapport.", "Engagement is the goal (safety and respect); blending is the observable gauge of whether it is working.", "Blending is the goal; engagement is the technique.", "Engagement is verbal; blending is nonverbal."], a: 1, w: "Shea separates the goal from the measuring instrument. Without a gauge, you cannot tell whether your techniques are working." },
        { q: "A guarded patient typically shows which speech pattern?", opts: ["Long utterances, very short latency, frequent eager interruptions", "Short utterances, long latency, occasional interruptions to correct you", "Long utterances, long latency, no interruptions", "Short utterances, very short latency, frequent interruptions"], a: 1, w: "Guarded: curt answers, long pauses, and corrections of your inaccuracies. The wandering pattern is the reverse." },
        { q: "With a guarded patient, what is the key signal to stop empathic statements?", opts: ["A long pause", "Tearfulness", "Disavowal: the patient corrects or rejects your empathic words", "A short answer"], a: 2, w: "Disavowal is the red flag. Continuing, especially at higher valence, drives the paranoid spiral." },
        { q: "Which response is lowest in both implied certainty and intuited attribution?", opts: ["\"Your world fell apart.\"", "\"It sounds like this loss echoes losing your father.\"", "\"It sounds like you've been crying a lot,\" after she says she has been crying a lot", "\"There is so much pain in a loss like this.\""], a: 2, w: "\"It sounds like\" lowers certainty, and mirroring her own words keeps attribution minimal." },
        { q: "A delirious patient hears your empathic statement as an insult. Where did the empathy cycle break?", opts: ["Phase 1, patient expresses", "Phase 2, clinician recognizes", "Phase 4, patient perceives", "Phase 5, patient accepts"], a: 2, w: "Delirium, severe psychosis, or mania can limit the patient's ability to perceive empathy or even language." },
        { q: "Why do defusing statements work with angry patients despite their high certainty?", opts: ["They distract the patient.", "Strong agreement with the patient's view transforms the moment; it is hard to stay angry with someone who agrees.", "They signal the clinician's authority.", "They are low-attribution reflections."], a: 1, w: "Unlike guarded patients, angry patients respond well to high certainty, as long as it is sincere." }
      ],
      glossary: [
        { term: "Intentionality", def: "Choosing deliberately among many possible responses to fit the patient, situation, and culture (Ivey)." },
        { term: "Feeding the wanderer", def: "An interactional pattern in which the clinician unintentionally rewards tangents through note taking, empathic filler, and follow-up questions." },
        { term: "Engagement", def: "The developing sense of safety and respect that lets a patient share freely and trust the clinician." },
        { term: "Blending", def: "The observable behavioral and emotional clues that engagement is progressing." },
        { term: "DOU / RTL", def: "Duration of utterance and reaction time latency: Wiens' speech-timing clues to blending." },
        { term: "Unipolar blending", def: "Rapid, one-sided, superficial openness (often hypomanic or histrionic) that feels like excellent rapport." },
        { term: "Identification", def: "Continuing to feel and endorse the patient's feelings as one's own; loss of the \"as if.\"" },
        { term: "Empathy cycle", def: "Barrett-Lennard's five phases: patient expresses, clinician recognizes, clinician conveys, patient perceives, patient signals acceptance." },
        { term: "Empathic valence", def: "The potential intensity of an empathic statement, set by implied certainty and intuited attribution." },
        { term: "Reflecting statement", def: "Mirrors back the patient's own words; very low attribution, seldom backfires." },
        { term: "Paranoid spiral", def: "Escalating disengagement as the clinician pushes more, and stronger, empathy on a paranoid patient." },
        { term: "Greasing the wheels", def: "Interested, non-empathic conversational questioning that helps delusional material emerge (Robinson)." },
        { term: "Defusing statement", def: "A high-certainty statement agreeing that the patient's anger makes sense." },
        { term: "Metaphorical paraphrase", def: "Capturing the central message of what a patient says in a single image, such as a treadmill." },
        { term: "Person-centered", def: "Viewing the patient as a unique intersection of biology, psychology, relationships, family, culture, and spirituality, and understanding their view of the problem before offering answers." },
        { term: "Strategic empathy", def: "Using empathy deliberately, matched to the patient's defenses and stance, rather than the same way by habit with everyone." },
        { term: "Interpersonal stance", def: "Where a patient falls between trusting and guarded; it predicts how empathic statements will land." },
        { term: "Implied certainty", def: "One dial of empathic valence: how sure you sound that you know what the patient feels (\"It sounds like…\" is low)." },
        { term: "Intuited attribution", def: "One dial of empathic valence: how much you read in beyond what the patient actually said." },
        { term: "Generic paraphrase", def: "Restating the patient's key words with slightly new phrasing or emphasis, adding no opinion (Ivey)." },
        { term: "Stem and check-out", def: "A lead-in before a paraphrase (\"What I'm hearing is…\") and a question after it (\"Is that close?\") (Ivey)." }
      ]
    },

    /* ───────────────────────── CHAPTER 2 ───────────────────────── */
    {
      id: "ch2", num: 2, title: "Beyond Empathy", sub: "Safety, genuineness, expertise, collaboration",
      summary: "Patients care less about our credentials than about who we are. Four more levers deepen engagement: a safe relationship, genuineness, conveyed expertise, and collaborative goal setting that secures the second visit.",
      concepts: [
        { h: "The person before the letters", b: "Patients silently ask: Will this person collaborate or patronize? Accept or judge? Are they warm, trustworthy, capable? They want our character and ethics, not our biography. Their concerns about us are less roadblocks than gateways." },
        { h: "Sullivan's self-system", b: "Conscious and unconscious processes that protect self-esteem when meeting someone new, running at a high pitch in the waiting room. Lower it; read its activity as a preview of the patient's defenses; and notice that yours is active too." },
        { h: "Unconditional positive regard", b: "In assessment, this means suspending moral judgment so the patient leaves feeling unjudged. Many patients have faced a \"parade of frowns.\" Find your blind spots by noticing topics you routinely skip: sexuality, spirituality, substances, violence, trauma." },
        { h: "Non-defensiveness and no hidden needs", b: "A lecturing, \"educational\" reply often means the clinician's own self-system is activated, and it activates the patient's. Take nothing for yourself: no trafficking in ordinary social satisfactions such as admiration, companionship, or prestige." },
        { h: "Genuineness has three marks", b: "Responsiveness (reacting naturally to humor, tears, anger), spontaneity (appropriate, weighed self-expression), and consistency (no jarring warm-then-cold shifts). Blankness is not neutrality: an expressionless face tends to read as dislike." },
        { h: "Expertise through questions", b: "Expertise shows less in what we tell than in what we ask. Well-timed fact-oriented questions metacommunicate three things: they want to know exactly what I feel; they have seen this before; they are thorough." },
        { h: "The normalizing OCD screen", b: "OCD is often hidden for years by shame. Frame with others who are depressed, normalize common worries, give concrete examples (germs and washing, checking locks), ask directly, then respond with calm familiarity and hope." },
        { h: "Collaborative interviewing", b: "Borden's alliance has three pillars: agreement on goals, agreement on tasks, and the bond. Cheng's WWII analogy: shared goals can bond people who do not yet trust each other. Collaboration is not doing whatever the patient asks." },
        { h: "Goal questions and the miracle question", b: "Ask what would make this visit worth their time and what they want to be different. Let them complain, then reframe complaints as goals. De Shazer's miracle question: \"What are some of the things that would be different?\" invites several goals." },
        { h: "The number one goal", b: "From the clinician's side, the top goal of an initial interview is ensuring there is a second one. We cannot help someone who is not in our office." }
      ],
      pearls: [
        "At the door: warm greeting, your name and role, and what happens next.",
        "Charged topic: ask what it means to them. No frowns.",
        "Challenged by family: empathize, defer the debate, keep gathering history.",
        "Patient jokes: let yourself smile. Don't run over it.",
        "Depressed or anxious: use a normalizing OCD screen.",
        "\"I don't need to be here\": ask what would make the visit worthwhile."
      ],
      practice: [
        {
          id: "c2p1", skill: "Curiosity instead of evaluation",
          ctx: "Follow-up after a hospitalization for psychosis. You ask how things have been since discharge.",
          p: "Much better. I'm getting along at home, and I stopped needing those pills.", cue: "Relaxed, smiling.",
          opts: [
            { t: "So you haven't been taking your medication as prescribed.", v: "poor", w: "Evaluative and parental. His self-system rises, and honesty about adherence now feels risky." },
            { t: "What was it like for you when you were taking them?", v: "best", w: "Curiosity keeps the self-system calm and yields his reasons, such as side effects. Paradoxically, this clinician is better placed to discuss restarting later." },
            { t: "We're going to have to talk about that later.", v: "poor", w: "It sounds like a threat, like being sent to the principal's office." }
          ]
        },
        {
          id: "c2p2", skill: "Non-defensiveness",
          ctx: "A parent at a family meeting about her adult son with schizophrenia.",
          p: "Nothing the doctors do helps him. I read about a supplement that cured someone. I want you to use it.", cue: "Arms crossed, voice tight.",
          opts: [
            { t: "That's unproven and possibly unsafe. You can't believe everything you read online.", v: "poor", w: "A defensive, paternalistic lecture. She feels dismissed and will share less." },
            { t: "It sounds like you've been through a great deal of frustration. In a bit, let's talk through the pros and cons of different options, including that one. First, help me understand what's been happening with your son.", v: "best", w: "Gentle empathy lands on her real feeling, the request is scheduled rather than rejected, and the history keeps flowing." },
            { t: "Sure, we can add it.", v: "poor", w: "Collaboration is not abandoning clinical judgment or doing whatever is asked." }
          ]
        },
        {
          id: "c2p3", skill: "Responsiveness to humor",
          ctx: "An anxious but well-integrated college student in her first ever appointment.",
          p: "You're not going to lock me up, are you? Ha.", cue: "Laughs nervously, fidgets with her sleeve.",
          opts: [
            { t: "(no smile) Let's go over your symptoms.", v: "poor", w: "Running over humor feels like a joke falling flat. Anxiety rises, and pseudo-professional blandness reads as coldness." },
            { t: "(smiling) Not today. Tell me what worries you about being here.", v: "best", w: "A small, genuine response welcomes her full personality, then turns to the fear behind the joke." },
            { t: "Only if you misbehave!", v: "poor", w: "Humor that plays with her actual fear can frighten. Spontaneity must be weighed for impact." }
          ]
        },
        {
          id: "c2p4", skill: "Normalizing screen for OCD",
          ctx: "Twenty minutes into an intake for depression. You have reviewed her depressive symptoms.",
          p: "So that's about it. I've just been really down.", cue: "Calm, cooperative.",
          opts: [
            { t: "You don't have any weird rituals or anything, do you?", v: "poor", w: "A negative question with a pejorative word. It practically invites \"no.\"" },
            { t: "Many people I see who are this depressed also tell me they worry a lot. Some worry about bills; others have worries that feel odd to them, like germs that make them wash over and over, or needing to check the stove or locks many times. Has anything like that happened to you?", v: "best", w: "The long setup gives permission, concrete examples help her recognize herself, and the closed question lets her say yes without being first to confess something she fears is bizarre." },
            { t: "Do you have obsessions or compulsions?", v: "ok", w: "Direct, but technical and easy to deny. Shame keeps many people with OCD silent for years." }
          ]
        },
        {
          id: "c2p5", skill: "Solution-focused goal setting",
          ctx: "A 16-year-old brought in by his mother, who has stepped out.",
          p: "I don't have a problem. My mom's the one who needs help.", cue: "Hood up, slumped.",
          opts: [
            { t: "Your mom says you're irritable and quit soccer. That sounds like depression.", v: "poor", w: "Parent-centered, not person-centered. A diagnosis imposed before any alliance usually ends the conversation." },
            { t: "Okay. What would make coming here today worth your time?", v: "best", w: "A goal question accepts his frame and lets his own words set the agenda. Complaints can then be reframed as goals." },
            { t: "Can you tell me why she brought you?", v: "ok", w: "A swing question. A reluctant teen can simply answer \"No.\"" }
          ]
        },
        {
          id: "c2p6", skill: "Consistency and non-defensiveness",
          ctx: "Late in an interview with a patient struggling with self-esteem.",
          p: "Be honest. What do you really think of me?", cue: "Direct gaze, a little challenging.",
          opts: [
            { t: "Honestly? I think you're avoiding responsibility.", v: "poor", w: "An abrupt confrontation breaks consistency and safety." },
            { t: "I'm glad you asked directly. I'm not sure a verdict from me would help much, but could we look at what's making that question important right now?", v: "best", w: "Non-defensive and consistent, it turns the question into shared exploration of what is happening between you." },
            { t: "I think you're a wonderful person.", v: "poor", w: "Premature reassurance can feel hollow and invites further testing. It may also reflect our own need to be liked." }
          ]
        }
      ],
      quiz: [
        { q: "Shea's three marks of clinician genuineness are:", opts: ["Warmth, empathy, positive regard", "Responsiveness, spontaneity, consistency", "Honesty, humility, humor", "Neutrality, warmth, expertise"], a: 1, w: "Genuineness is present when behavior suggests the clinician is at ease with themselves and with the patient." },
        { q: "Borden's model of the therapeutic alliance has which three components?", opts: ["Empathy, regard, genuineness", "Goals, tasks, bond", "Safety, trust, hope", "Engagement, data, plan"], a: 1, w: "Two of the three pillars concern collaborative goal setting and planning." },
        { q: "Which is NOT one of the three metacommunications of good fact-oriented questions?", opts: ["They want to know exactly what I feel.", "They've seen this before.", "They are thorough.", "They agree with my view of the problem."], a: 3, w: "Good fact questions convey interest, familiarity, and thoroughness, not agreement." },
        { q: "Why does Shea prefer \"What are some of the things that would be different?\" in the miracle question?", opts: ["It is shorter.", "It invites several goals rather than narrowing to one.", "It avoids the word miracle.", "It is a closed question."], a: 1, w: "The plural invites a richer list of goals the patient chooses." },
        { q: "According to Sullivan, the clinician should not traffic in which of these?", opts: ["Expert knowledge", "Attention to the patient's needs", "Ordinary social satisfactions such as admiration or companionship", "Fact-oriented questions"], a: 2, w: "If the patient senses we need something from them, they must monitor what they say, and safety erodes." }
      ],
      glossary: [
        { term: "Self-system", def: "Sullivan: conscious and unconscious processes that protect self-esteem when meeting new people." },
        { term: "Unconditional positive regard", def: "Rogers: caring for the person uncontaminated by evaluation; in assessment, suspending moral judgment." },
        { term: "Parade of frowns", def: "The sequence of judgmental reactions many patients have met before seeing us." },
        { term: "Non-defensiveness", def: "Meeting challenges with curiosity rather than self-protective posturing or lecturing." },
        { term: "Genuineness", def: "Behavior showing ease with self and patient: responsiveness, spontaneity, consistency." },
        { term: "Professional blandness", def: "Misreading neutrality as expressionlessness; tends to read as dislike (Ryle)." },
        { term: "Fact-oriented question", def: "A usually closed question about concrete symptoms or situations; conveys expertise when well timed." },
        { term: "Metacommunication", def: "The implicit message a question or statement sends beyond its literal content." },
        { term: "Collaborative interviewing", def: "Approaches that help patients discover their own goals, methods, and motivators." },
        { term: "Miracle question", def: "De Shazer: imagining life after an overnight miracle to surface the patient's goals." }
      ]
    },

    /* ───────────────────────── CHAPTER 3 ───────────────────────── */
    {
      id: "ch3", num: 3, title: "The Dynamic Structure", sub: "Phases, PACE, and the degree of openness",
      summary: "The interview unfolds in five phases. The introduction lowers anxiety, the opening secures engagement while you silently assess PACE, and every verbalization has a degree of openness you can use to transform shut-down, wandering, and rehearsed interviews.",
      concepts: [
        { h: "Five phases", b: "Introduction (first contact to the first question about why they came, a minute or two), opening (about 5 to 7 minutes of nondirective listening), body (structured data gathering), closing (questions, impressions, plan), and termination (the final words and gestures)." },
        { h: "The introduction", b: "Address the fears patients bring: Who is this? Whose side are they on? Are they competent? What do they know about me? How long? Will I be hurt? Do I have control? Ask how they would like to be addressed, preview the session, and explain confidentiality and its local exceptions matter-of-factly." },
        { h: "The opening and PACE", b: "Speak little; aim for mostly open-ended verbalizations. Silently assess PACE: Patient perspective (their view and conscious goals), Assessment of mental state (early clues), Clinician perspective (your view and their unconscious goals), Evaluation of the interview (shut-down, wandering, rehearsed, or going well)." },
        { h: "Release control to gain control", b: "Honoring a patient's need for dignity and self-determination, such as the manic vice president offered water and admiration for his business card, often lets you structure the interview more, not less." },
        { h: "The Degree of Openness Continuum", b: "Open: open-ended questions and gentle commands. Variable: swing questions (\"Can you…\"), qualitative questions (\"How's your…\"), statements of inquiry, empathic statements, facilitating statements. Closed: closed-ended questions and statements. The variable middle behaves closed with a shut-down patient and wide open with a wanderer." },
        { h: "Statements of inquiry lead", b: "A statement with a question mark is inherently leading. Eliminate negative statements of inquiry such as \"So you're not suicidal?\" which signal the answer you want." },
        { h: "Shut-down interviews", b: "Short utterances and long latencies. String six or seven open questions and gentle commands together, piggy-back empathy onto open questions, follow any topic where answers lengthen, drop \"Can you…\", and defer sensitive topics for now." },
        { h: "Wandering interviews", b: "Engage first, then climb a graded ladder: mostly closed questions, stop facilitating, return to the topic, focusing statements, stress importance, explain the need, then strong structure or a process comment. \"Before we get to that, help me with…\" honors the topic." },
        { h: "Rehearsed interviews", b: "A pat, well-worn script. Any question that tracks the script reinforces it. Break it with behaviorally specific questions and affective interjection: follow the emotional charge." },
        { h: "The closing", b: "Leave real time. Signal the shift, ask for the patient's view, share tentative impressions, plan together with a teach-back, invite feedback, give next steps. The most common supervision problem is an overlong body that forces a rushed close." }
      ],
      pearls: [
        "Introduction: name, role, name preference, plan, time frame, confidentiality.",
        "Opening: mostly open questions, talk little, run PACE silently.",
        "Shut down: \"Tell me…\", not \"Can you tell me…\".",
        "Wandering: closed questions, fewer nods, \"Before we get to that, help me…\".",
        "Rehearsed: ask for specifics and follow the emotion.",
        "Stop the body early enough to close without rushing."
      ],
      practice: [
        {
          id: "c3p1", skill: "A calming introduction",
          ctx: "Emergency department. His brother called ahead with concerns. You've just shaken hands.",
          p: "I'm not sure why I'm here. What did they tell you?", cue: "Glances at your clipboard.",
          opts: [
            { t: "Your brother says you've been behaving strangely. When did it start?", v: "poor", w: "Reveals collateral bluntly, applies a secondhand label, and appears to take the brother's side. Nearly every introductory fear is activated." },
            { t: "Your brother called and shared some worries. Soon we'll decide together what, if anything, I share with him. Mostly I want to hear your view of what, if anything, has been going on. We'll talk for about 40 minutes and then plan together. How does that sound?", v: "best", w: "Collateral is acknowledged openly, he keeps control, \"if anything\" avoids presuming a problem, and the roadmap answers \"what is going on here?\"" },
            { t: "It doesn't matter what they told me. Let's just start.", v: "poor", w: "Dismisses a legitimate concern and offers no sense of control or predictability." }
          ]
        },
        {
          id: "c3p2", skill: "Unlocking a shut-down interview",
          ctx: "A 16-year-old has answered your last four closed questions with \"fine\" and \"idk.\" Arms crossed.",
          p: "Idk.", cue: "Looking at her phone.",
          opts: [
            { t: "Can you tell me about school?", v: "poor", w: "A swing question. In a shut-down interview it is easily answered \"Not really.\"" },
            { t: "Tell me what a typical school day is like for you, from the moment you wake up.", v: "best", w: "A gentle command on a familiar topic. Follow it with several more open prompts in a row; one or two then a closed question undoes the gain." },
            { t: "Do you like school?", v: "poor", w: "Another closed question keeps the shut-down pattern going." }
          ]
        },
        {
          id: "c3p3", skill: "Focusing a wanderer",
          ctx: "Minute 18 of a depression intake. You asked about appetite.",
          p: "Appetite? Oh, at my cousin's wedding the food was amazing, and my aunt, who has never forgiven my mother, sat right next to…", cue: "Animated, quick replies, good eye contact.",
          opts: [
            { t: "Mm-hmm, go on.", v: "poor", w: "Feeding the wanderer. Facilitators act wide open with a wandering patient." },
            { t: "Sounds like a big family event. Before we get to the wedding, help me with your appetite. Are you eating less than usual?", v: "best", w: "Piggy-back empathy, a cut-off that honors the topic, \"help me\" as a shared goal, then a closed question. Tone makes this caring rather than curt." },
            { t: "We really need to stay on topic. Appetite, please.", v: "poor", w: "Too blunt as a first step. Escalate gradually; most patients respond at the gentler rungs." }
          ]
        },
        {
          id: "c3p4", skill: "Breaking a rehearsed script",
          ctx: "New outpatient, recently moved to town.",
          p: "I'm bipolar, need a lithium refill. No racing thoughts, sleep's great, not spending money. My roommate will probably call you. Ignore her, she overreacts.", cue: "Fast, practiced delivery.",
          opts: [
            { t: "So you're not having any manic symptoms?", v: "poor", w: "A negative statement of inquiry tracks the script and invites \"no.\"" },
            { t: "You mentioned your roommate twice. Tell me about her.", v: "best", w: "Affective interjection follows the emotional charge off the storyline, where unplanned and important information often surfaces." },
            { t: "Walk me through the last time your mood shifted. What happened first?", v: "ok", w: "A behaviorally specific question also disrupts recitation and is a good alternative, though it misses the charged cue he just offered." }
          ]
        },
        {
          id: "c3p5", skill: "Avoiding negative statements of inquiry",
          ctx: "Midway through an intake with a man who recently lost his job and his marriage.",
          p: "It's been a rough few months. I don't really see the point of much anymore.", cue: "Flat voice.",
          opts: [
            { t: "So you're not suicidal, though?", v: "poor", w: "It signals the answer you want and can yield dangerously invalid data." },
            { t: "With everything you've been going through, have you had thoughts of killing yourself?", v: "best", w: "Clear, direct, and framed through his pain. Neutral wording makes \"yes\" an acceptable answer." },
            { t: "Any suicidal ideation?", v: "ok", w: "Neutral but clinical jargon. Plain language is more engaging and clearer." }
          ]
        },
        {
          id: "c3p6", skill: "Protecting the closing",
          ctx: "Five minutes remain. You haven't shared impressions or discussed a plan. Family history and medical history are still incomplete.",
          p: "…and that's pretty much my whole work history.", cue: "Checks the clock.",
          opts: [
            { t: "Just a few more quick questions about your family and health.", v: "poor", w: "Sprinting through data leaves the patient disjointed and feeling you care more about data than about them." },
            { t: "We've covered a lot. With the time we have left, I'd like to share some thoughts and plan next steps together. We can pick up the rest next visit.", v: "best", w: "An introduced gate into an unhurried closing that consolidates hope. The remaining data can follow." },
            { t: "Let's schedule a follow-up and I'll explain everything next time.", v: "ok", w: "Securing a return matters, but patients leave wanting to know what is wrong, whether they can be helped, and what happens next." }
          ]
        }
      ],
      quiz: [
        { q: "How long does Shea suggest the opening phase typically lasts?", opts: ["1 to 2 minutes", "5 to 7 minutes", "15 to 20 minutes", "Half the interview"], a: 1, w: "Protect these minutes even on a busy shift; patients often decide in them whether they basically like you." },
        { q: "\"Can you describe what the panic feels like?\" is best classified as:", opts: ["Open-ended question", "Gentle command", "Swing question", "Closed-ended question"], a: 2, w: "It asks whether they will answer. Open when engagement is high, closed when it is low. Drop \"Can you\" to make it a gentle command." },
        { q: "What does the E in PACE stand for?", opts: ["Empathy", "Evaluation of the interview", "Engagement", "Exploration of goals"], a: 1, w: "Is the interview shut-down, wandering, rehearsed, or going well? If not well, change strategy." },
        { q: "Which pair of techniques best breaks a rehearsed interview?", opts: ["Swing questions and facilitators", "Behaviorally specific questions and affective interjection", "Strings of open questions and piggy-back empathy", "Closed questions and process comments"], a: 1, w: "The DOC alone doesn't help here; you need questions that demand fresh reflection." },
        { q: "The most common closing problem Shea sees in supervision is:", opts: ["Too much empathy", "Forgetting confidentiality", "An overextended body forcing a rushed closing", "Too many open questions"], a: 2, w: "Stop data gathering early enough to close calmly." }
      ],
      glossary: [
        { term: "PACE", def: "Patient perspective, Assessment of mental state, Clinician perspective, Evaluation of the interview." },
        { term: "Gentle command", def: "\"Tell me…\" or \"Describe…\" said with interest, without limiting the answer." },
        { term: "Swing question", def: "\"Can you…?\" or \"Would you…?\": open or closed depending on engagement." },
        { term: "Qualitative question", def: "\"How's your…?\": can be answered with a single word such as \"fine.\"" },
        { term: "Statement of inquiry", def: "A statement said as a question; inherently leading." },
        { term: "Piggy-back empathic statement", def: "Empathy joined to a question so it doesn't stall the flow: open for shut-down, closed for wandering." },
        { term: "Affective interjection", def: "Steering a rehearsed story toward an emotionally charged topic to break the script." },
        { term: "Loquacious interview", def: "A wandering variant: stays on topic but buries you in irrelevant detail." },
        { term: "Naming emotions", def: "Morrison: when a patient stalls, naming feelings that often cause it (shame, fear) and asking if any fit." },
        { term: "Unconscious goals", def: "Psychodynamic needs the patient may not recognize, such as the need to feel important or in control." }
      ]
    },

    /* ───────────────────────── CHAPTER 4 ───────────────────────── */
    {
      id: "ch4", num: 4, title: "Facilics", sub: "Transforming interviews into conversations",
      summary: "Facilics is the study of how interviewers structure interviews while gathering data. With regions, expansions, pivot points, and gates, you can cover a large database while the patient experiences a conversation, not an interrogation.",
      concepts: [
        { h: "Regions", b: "A content region is several sentences gathering data on one topic (depression criteria, substances, family history). A process region focuses on the interaction or a non-data task: free facilitation, transformational (resolving a roadblock), or psychodynamic (watching how and why the patient answers). The introduction plus opening form the scouting region, both process and content." },
        { h: "Tracking needs focusing", b: "Tracking follows the patient's statements and feelings; most trainees arrive good at it. Focusing sensitively guides the patient to what matters for planning. Without it, even a talkative patient produces an unguided interview." },
        { h: "Pacing a 50-minute intake", b: "0–15 minutes: scouting plus two or three content expansions. 15–30: keep choosing and fully expanding regions. 30–45: deepen what proved important and cover what remains. Last 7 or so: closing." },
        { h: "Two gremlins", b: "An overly long scouting region (use the five-minute fix: at 5 minutes ask what PACE has told you and how you'll enter the body), and the dead zone: a second quarter lost to interesting but unhelpful material, followed by a panicked sprint. If behind at 30 minutes, choose what matters most, drop the rest, and keep a normal pace." },
        { h: "Finish what you start", b: "Once inside a region, usually expand it fully before leaving. Leaving early creates errors of omission and mental juggling that pulls attention from the person." },
        { h: "Blended vs stilted expansions", b: "A stilted expansion is a checklist that ignores what was just said. A blended expansion gathers the same data, but each question flows from the patient's words, with brief empathy along the way." },
        { h: "Pivot points", b: "The moment a patient moves into a new region and you choose whether to follow. Recognizing pivots instantly may be the single greatest secret to structuring. Usually pull back to finish the current region, except for strong emotion, suicide, violence, incest, or key memories: follow those now, because the window may close." },
        { h: "Gates", b: "Spontaneous (the patient moves, you follow), natural (cue off the patient's last sentence), referred (\"Earlier you mentioned…\"), implied (a topically similar region), phantom (from nowhere; jarring), introduced (you announce the transition), and observed (cue off nonverbal behavior)." },
        { h: "Manufactured and referred gates", b: "Chain natural gates through stepping-stone regions to reach a delicate topic, such as stress → drinking → fights → arguments at home → wanting to hurt his wife. Referred gates re-enter incomplete regions and give the cognitive exam a purpose instead of an apology." }
      ],
      pearls: [
        "At 5 minutes: check PACE and choose your entry into the body.",
        "Every 15 minutes: Where am I? What's left? Adjust.",
        "Pivot point: usually stay, unless it's charged or risky.",
        "Changing topics: cue off their last sentence.",
        "Missed something: \"Earlier you mentioned…\"",
        "Ten minutes left: an introduced gate into the closing."
      ],
      practice: [
        {
          id: "c4p1", skill: "Building a natural gate",
          ctx: "Inside the depression region. You want to move into substance use.",
          p: "It takes me two hours to fall asleep most nights. My mind just won't shut off.", cue: "Rubs his eyes.",
          opts: [
            { t: "Some people use a drink or two to help knock themselves out. Has that been part of it for you?", v: "best", w: "A natural gate: the cue statement about sleep becomes the springboard, so he experiences the new topic as part of the same conversation. The normalization helps too." },
            { t: "Did your father drink heavily?", v: "poor", w: "A phantom gate: no cue, no reference, no topical link. It feels like the interviewer is reading from a list." },
            { t: "Okay. Now I'm going to ask about alcohol and drugs.", v: "ok", w: "An introduced gate is clear but more mechanical. Save explicit announcements for transitions that need them." }
          ]
        },
        {
          id: "c4p2", skill: "Rescuing with a referred gate",
          ctx: "Minute 38. You realize you never assessed suicide. Early on, she said she felt \"like a burden\" to her family.",
          p: "…so my sister usually drives me to appointments now.", cue: "Quietly matter-of-fact.",
          opts: [
            { t: "Before we finish, are you suicidal?", v: "poor", w: "A phantom gate into the most sensitive region, phrased in a way that is easy to deny." },
            { t: "Earlier you said you feel like a burden. Sometimes when people feel that way, they think others would be better off without them. Have you had thoughts like that?", v: "best", w: "Anchoring the question in her own earlier words shows you listened and makes the topic feel natural. The normalization lowers shame." },
            { t: "I ask everyone some routine safety questions. Have you had any thoughts of hurting yourself?", v: "ok", w: "Acceptable and common, but less engaging than linking to what she actually said." }
          ]
        },
        {
          id: "c4p3", skill: "Following a pivot point",
          ctx: "Midway through exploring PTSD criteria in a young woman.",
          p: "The nightmares are the worst part. They're about my uncle. He used to come into my room at night.", cue: "Voice drops; she stops moving.",
          opts: [
            { t: "We'll come back to that. First, how many nights a week are the nightmares?", v: "poor", w: "A spontaneous disclosure of possible abuse is an invitation that may not return. This is an exception to finishing the region first." },
            { t: "That sounds very important. If you're willing, can you tell me more about what happened with your uncle? Share only what feels okay.", v: "best", w: "Follows the pivot gently and gives her control over the pace. Know your reporting obligations, and keep a calm, unhurried tone." },
            { t: "How old were you?", v: "ok", w: "Following is right, but a fact question first can feel abrupt. Open gently, then gather specifics." }
          ]
        },
        {
          id: "c4p4", skill: "Introducing the cognitive exam",
          ctx: "Earlier the patient mentioned trouble concentrating in the evenings.",
          p: "Yeah, by evening I'm just foggy.", cue: "Cooperative.",
          opts: [
            { t: "I have to ask some silly questions now. I hope you don't mind.", v: "poor", w: "An apologetic tone and fidgeting signal something odd is afoot and can create anxiety." },
            { t: "You mentioned feeling foggy in the evenings. Depression can affect concentration, so I'd like to ask some questions that can pick up even subtle changes. Some are simple and some harder. We'll start easy.", v: "best", w: "A referred gate gives the exam a purpose tied to his own concern and conveys expertise instead of insecurity." },
            { t: "These are routine. I ask everyone.", v: "ok", w: "Normalizes the exam but misses the chance to link it to what he told you." }
          ]
        },
        {
          id: "c4p5", skill: "Recovering from a dead zone",
          ctx: "Minute 30 of a 50-minute intake. You have covered only the presenting problem, after a long, fascinating story about her career.",
          p: "…and that's how I ended up managing the whole department.", cue: "Pleased, relaxed.",
          opts: [
            { t: "Rapid-fire through every remaining region: family, medical, developmental, substances, suicide.", v: "poor", w: "The second error of the dead zone. She will feel you care more about data than about listening." },
            { t: "Decide consciously what matters most (lethality, substances, key safety and social history), explore those at a normal pace, and defer the rest.", v: "best", w: "Regroup, don't sprint. The aim is to minimize omissions of what matters, not to cover everything." },
            { t: "Keep following her story; engagement is high.", v: "poor", w: "More free facilitation deepens the dead zone." }
          ]
        },
        {
          id: "c4p6", skill: "Blended expansion",
          ctx: "Early in the depression region.",
          p: "Everything at home is falling apart. I can feel the pressure building.", cue: "Hands clenched in lap.",
          opts: [
            { t: "How's your appetite?", v: "poor", w: "A stilted expansion: correct region, wrong feel. The question ignores what she just said." },
            { t: "That sounds like a lot to carry. How has it been affecting how you feel day to day?", v: "best", w: "Brief empathy, then an open question that grows from her words. Later questions can cue off her answer (\"drained\" → sleep)." },
            { t: "Tell me more about home.", v: "ok", w: "Fine for free facilitation, but in the body you need to move through the depression region. This may lead into a long social-history detour." }
          ]
        }
      ],
      quiz: [
        { q: "What is a pivot point?", opts: ["The midpoint of the interview", "A moment when the patient moves into a new region and you decide whether to follow", "A transition you announce explicitly", "The switch from opening to body"], a: 1, w: "Recognizing pivots the instant they occur is, in Shea's view, perhaps the single greatest secret to structuring interviews." },
        { q: "The \"dead zone\" refers to:", opts: ["Long silences in shut-down interviews", "A second quarter lost to interesting but unhelpful material", "The final minutes after the closing", "A region that cannot be expanded"], a: 1, w: "Its two errors: too much free facilitation, then a panicked sprint." },
        { q: "How does an implied gate differ from a phantom gate?", opts: ["Implied gates are patient-initiated.", "Implied gates move to a topically similar region; phantom gates come from nowhere.", "Phantom gates use nonverbal cues.", "There is no difference."], a: 1, w: "Neither uses a direct cue or a reference back. What matters is how related the topics are." },
        { q: "Which is an exception to \"finish the region before leaving\"?", opts: ["The patient changes topic to the weather", "The patient spontaneously raises suicidal thoughts", "The patient asks about parking", "You remember a question from the last region"], a: 1, w: "Follow pivots into suicide, violence, incest, strong emotion, and key memories. The invitation may disappear." },
        { q: "The two parts of a natural gate are:", opts: ["An apology and a question", "A cue statement from the patient and your transitional question", "An observation and a nod", "A summary and a closed statement"], a: 1, w: "Because it grows from the patient's own words, the patient feels they raised the new topic." }
      ],
      glossary: [
        { term: "Facilics", def: "The study of how interviewers structure interviews while gathering data (from Latin facilis, graceful movement)." },
        { term: "Content region", def: "A stretch of several sentences gathering data on one topic." },
        { term: "Process region", def: "A stretch focused on the interaction or a non-data task: free facilitation, transformational, or psychodynamic." },
        { term: "Scouting region", def: "Introduction plus opening, about 7 minutes; both process and content." },
        { term: "Unguided interview", def: "A hodgepodge interview from poor focusing, even with a normally verbal patient." },
        { term: "Stilted / blended expansion", def: "Checklist-style vs conversational exploration of a region." },
        { term: "Natural gate", def: "A cue statement from the patient plus your transitional question." },
        { term: "Referred gate", def: "\"Earlier you mentioned…\": re-enters or opens a region by referring back." },
        { term: "Manufactured gate", def: "Serial natural gates through stepping-stone regions to reach a delicate topic." },
        { term: "Phantom gate", def: "A clinician-initiated jump with no cue, no reference, and no topical link." },
        { term: "Observed gate", def: "A transition cued by the patient's nonverbal behavior." },
        { term: "Dead zone", def: "A second quarter lost to interesting but unhelpful material." }
      ]
    },

    /* ───────────────────────── CHAPTER 5 ───────────────────────── */
    {
      id: "ch5", num: 5, title: "Validity Techniques", sub: "Exploring sensitive material",
      summary: "Validity asks one question: are we hearing the truth? Most distortion isn't lying. It comes from defenses, memory, miscommunication, stigma, and fear of consequences. Four clusters of techniques help raise and explore sensitive topics accurately.",
      concepts: [
        { h: "Why patients don't always tell the truth", b: "Unconscious defenses, fallible memory, miscommunication, limited self-knowledge, stigma, and real fears about consequences. Deliberate deceit is relatively rare. Sometimes the obstacle is the clinician's own style and blind spots." },
        { h: "Cluster 1: improving recall", b: "Anchor questions tie memory to landmarks in time (\"before or after you started high school?\") or to a specific place (\"Where were you during the worst one?\"). Tagging questions offer a list for forgotten facts. Exaggeration uses gentle humor to shrink disproportionate shame, with a secure alliance." },
        { h: "Cluster 2: avoiding miscommunication", b: "Define everyday words that have clinical meanings, such as depression, panic, or addiction. Clarify norms when a patient's family experience may hide abuse or heavy drinking: after an unconvincing \"no,\" describe concretely what you mean and ask again." },
        { h: "Cluster 3: raising a taboo topic", b: "Normalization references others (\"Some people who…\"). Shame attenuation type 1 cues off the patient's own pain or stress; type 2 asks through the patient's own rationalization (\"Ever had bosses who liked to throw their weight around?\"), without condoning. Induction to bragging precedes the question with a genuine compliment." },
        { h: "Cluster 4: exploring once inside", b: "Behavioral incidents ask for facts or sequence rather than opinions. Gentle assumption presumes the behavior (\"What other drugs have you tried?\"). Denial of the specific asks about each item separately. A catch-all question finds outliers. Symptom amplification offers high numbers so even a minimized answer reveals the problem." },
        { h: "The verbal video", b: "For suicide attempts and violence: set the scene, run it forward with \"What happened next?\", spot gaps where the story jumps (\"it just ran its course\"), and rewind. Ask the perpetrator's parting words." },
        { h: "Cautions", b: "Avoid cannon questions that bundle several items. Avoid gentle assumption with people eager to please, easily intimidated, with limited intellect, and with children when abuse is in question; it can create false reports. Keep amplification numbers believable." },
        { h: "Special situations", b: "For suspected malingering, embed atypical (\"bogus\") symptoms among real ones (Resnick). To gauge motivation or delusional conviction, use soundings: a graded series of gentle statements of inquiry that reveal where agreement stops (Havens). For the sexual history, be calm, matter-of-fact, and non-leading." }
      ],
      pearls: [
        "Suicide screen: \"With all you're going through, have you had thoughts of killing yourself?\"",
        "Methods: \"What other ways…?\" then each method separately, then a catch-all.",
        "Attempt or assault: verbal video; rewind at gaps; ask the parting words.",
        "Substances: gentle assumption, specifics, high numbers; past and present.",
        "Unconvincing \"no\": clarify norms by describing exactly what you mean.",
        "Never: \"You're not suicidal, are you?\" or cannon questions."
      ],
      practice: [
        {
          id: "c5p1", skill: "Starting a verbal video",
          ctx: "Emergency department, the morning after an ingestion. Medically cleared.",
          p: "I took some pills, but it wasn't serious. I just wanted to sleep.", cue: "Picks at her hospital bracelet.",
          opts: [
            { t: "Were you really trying to die?", v: "ok", w: "Intent must be asked directly at some point, but an opinion question this early tends to return a socially acceptable answer. Facts first." },
            { t: "Let's go through last night step by step so I understand. Where were you when you took them?", v: "best", w: "Sets the scene for a verbal video. Concrete facts and sequence bypass minimization and let you judge intent yourself." },
            { t: "Okay, as long as it wasn't serious. How's your mood been otherwise?", v: "poor", w: "Accepts the minimization and leaves the most important data unexplored." }
          ]
        },
        {
          id: "c5p2", skill: "Shame attenuation and amplification",
          ctx: "A man who describes his \"buddies\" as his main social life. You suspect heavy drinking.",
          p: "My wife complains, but I drink socially, like everyone.", cue: "Slight smirk.",
          opts: [
            { t: "Do you think you have a drinking problem?", v: "poor", w: "An opinion question that asks him to label himself \"bad.\" Expect \"no.\"" },
            { t: "When you're out with the guys, can you hold your own? On a big night, how much would you put away: a twelve-pack, more?", v: "best", w: "Asks from inside his own frame (holding your own flatters rather than shames) and sets a high ceiling so even a minimized answer reveals the pattern. Follow with specifics." },
            { t: "How much do you drink?", v: "ok", w: "Neutral, but easy to minimize without a number or frame." }
          ]
        },
        {
          id: "c5p3", skill: "Clarifying norms",
          ctx: "A young man describes a father who drank heavily and was \"strict.\" You ask about abuse.",
          p: "No, I was never abused. He was just old-school.", cue: "Shrugs.",
          opts: [
            { t: "Okay. Let's move on to school.", v: "poor", w: "In families where harm was the norm, a sincere \"no\" can hide real abuse." },
            { t: "When I ask about being hurt, I mean things like being hit with a belt or fists, being slapped, or being left with bruises. Did anything like that happen?", v: "best", w: "Describing concrete behaviors lets him recognize experiences he never labeled as abuse, with minimal disengagement." },
            { t: "Are you sure? It sounds like abuse to me.", v: "poor", w: "Confrontational and judgmental, and it imposes your label on his family." }
          ]
        },
        {
          id: "c5p4", skill: "Denial of the specific",
          ctx: "She has acknowledged thinking about overdosing. You want to know about other methods.",
          p: "Mostly just the pills, I guess.", cue: "Brief pause before answering.",
          opts: [
            { t: "Have you thought about shooting, hanging, jumping, or cutting?", v: "poor", w: "A cannon question. Patients hear only part, often answer only the last item, and need to lie only once." },
            { t: "What other ways have you thought of, even briefly? … Have you thought of shooting yourself? … Of hanging?", v: "best", w: "Gentle assumption, then each method separately with a pause to watch the response. Finish with a catch-all." },
            { t: "But you haven't thought about other ways, right?", v: "poor", w: "A negative statement of inquiry signals the answer you want." }
          ]
        },
        {
          id: "c5p5", skill: "Soundings",
          ctx: "A woman in a controlling marriage. You want to know how ready she really is to leave.",
          p: "I know I need to get out. I'll leave him soon.", cue: "Looks away when she says \"soon.\"",
          opts: [
            { t: "You need to leave today. It isn't safe.", v: "poor", w: "Directive and confrontational. It measures nothing and may push her away." },
            { t: "You think about leaving a lot? … You feel you can do it? … Within the next month or two?", v: "best", w: "A graded series of gentle probes reveals where agreement stops (\"soon\" may mean \"not soon\"), which informs realistic safety planning." },
            { t: "What would help you take that step?", v: "ok", w: "A motivational question. Valuable, but it aims to increase motivation rather than measure it." }
          ]
        },
        {
          id: "c5p6", skill: "Behavioral incident over opinion",
          ctx: "A man overwhelmed by work and his father's hospitalization.",
          p: "My wife's been pretty supportive, I guess.", cue: "Short pause.",
          opts: [
            { t: "Is she affectionate?", v: "poor", w: "Another opinion question invites another socially acceptable summary." },
            { t: "When you get home from work, what usually happens?", v: "best", w: "A fact-finding behavioral incident. Concrete details let you form your own judgment and often bring emotion with them." },
            { t: "It sounds like the marriage is solid.", v: "poor", w: "A leading statement that closes the topic on a possibly false conclusion." }
          ]
        }
      ],
      quiz: [
        { q: "How does normalization differ from type 1 shame attenuation?", opts: ["Normalization references other people; shame attenuation cues off this patient's own pain or stress.", "They are identical.", "Shame attenuation uses compliments.", "Normalization only works for suicide."], a: 0, w: "\"Some people who…\" vs \"With all the pain you're in…\"" },
        { q: "Why does a cannon question reduce validity?", opts: ["It is too open.", "It bundles several items; patients hear or answer only part and need to lie only once.", "It sounds judgmental.", "It uses technical terms."], a: 1, w: "Ask each item separately: denial of the specific." },
        { q: "In a verbal video, a \"Nixon gap\" is:", opts: ["A deliberate lie", "A skipped portion of the sequence, handled by rewinding", "A long pause", "A missing date"], a: 1, w: "Go back to where the gap began and restart with \"What happened next?\"" },
        { q: "Gentle assumption should be avoided with:", opts: ["Patients who minimize drinking", "Patients eager to please, easily intimidated, with limited intellect, and children when exploring abuse", "Patients with depression", "Any patient over 65"], a: 1, w: "With these patients, assuming a behavior can create false reports or memories." },
        { q: "Which probe is a classic \"bogus symptom\" for suspected feigned PTSD?", opts: ["\"Do you have nightmares?\"", "\"Are your flashbacks in black and white?\"", "\"Do loud noises startle you?\"", "\"Do you avoid reminders?\""], a: 1, w: "Flashbacks are not typically black and white. Embed such items among typical questions." },
        { q: "Soundings differ from motivational interviewing because soundings:", opts: ["Increase motivation", "Measure current motivation or conviction", "Confront denial", "Use only open questions"], a: 1, w: "Havens' soundings gauge depth; MI aims to change it." }
      ],
      glossary: [
        { term: "Anchor question", def: "Ties recall to a memorable time or a specific place to sharpen memory." },
        { term: "Tagging question", def: "Offers a list so the patient can identify a forgotten, non-sensitive fact." },
        { term: "Exaggeration", def: "Playful overstatement that shrinks a patient's disproportionate shame." },
        { term: "Clarifying norms", def: "Describing concretely what a term includes when the patient's family norms may differ." },
        { term: "Normalization", def: "Framing a question to show others have had the same experience." },
        { term: "Shame attenuation", def: "Framing a question through the patient's pain or stress, or through their own rationalizations." },
        { term: "Induction to bragging", def: "A genuine compliment that precedes a question about a negative behavior." },
        { term: "Behavioral incident", def: "Asking for concrete facts (fact-finding) or sequence (sequencing) instead of opinions." },
        { term: "Gentle assumption", def: "Presuming a behavior non-judgmentally: \"What other…?\"" },
        { term: "Denial of the specific", def: "Asking about list items one at a time after an unconvincing \"no.\"" },
        { term: "Catch-all question", def: "\"Is there anything we haven't discussed?\" to catch outliers." },
        { term: "Symptom amplification", def: "Offering high numbers so minimized answers still reveal a problem." },
        { term: "Soundings", def: "Graded statements of inquiry that measure motivation or conviction (Havens)." }
      ]
    },

    /* ───────────────────────── CHAPTER 6 ───────────────────────── */
    {
      id: "ch6", num: 6, title: "The Person Beneath the Diagnosis", sub: "Uniqueness, wellness, and culture",
      summary: "Treatment plans are co-created with people, not dictated by diagnoses. Our own distortions can hinder understanding; interpersonal and phenomenological inquiry, the wellness triad, and cultural curiosity deepen it.",
      concepts: [
        { h: "Two arrows to the plan", b: "Diagnosis supports evidence-based choices; understanding the person determines whether the plan will be embraced. Jennifer's first clinician made a reasonable recommendation she never followed. The second noticed her cross, learned of her family's opposition to medication, and began with therapy." },
        { h: "Parataxic distortion", b: "Sullivan: each person sees the other partly through unconscious templates. Check yourself first: Does this patient remind me of a past patient? Of family, friends, enemies, bosses, or public figures? Then explore the patient's view non-defensively." },
        { h: "Intersubjectivity", b: "Clinician and patient construct the data together. The clinician is a pair of eyeglasses ground by personal history, not a calibrated thermometer." },
        { h: "Reliably invalid", b: "Unconscious shifts in style (cutting off a patient you dislike, skipping follow-ups) and habits that consistently produce wrong data: negative questions, cannon questions, and too few behavioral incidents." },
        { h: "The interpersonal perspective", b: "Ask yourself how this person believes others see them, and how they are trying to come across to you. Questions about teachers, siblings, report card day, and online life open this door." },
        { h: "Probing wisely", b: "Watch for shame: averted gaze, hesitant speech. Relieve it by asking what it has been like to share today, and praise their courage." },
        { h: "Phenomenological inquiry", b: "Explore what it is like to be this person, often through the senses: What do you see, hear, feel? A shift to the present tense can deepen recall and affect, but avoid it with unstable or psychotic patients." },
        { h: "The wellness triad", b: "Strengths (character traits), skills (specific, teachable abilities), and interests (how free time is spent). Each can suggest treatment resources. Pair the presenting problem with presenting solutions." },
        { h: "Kulturbrille", b: "Boas: everyone wears cultural glasses. Lowered eyes may mean respect; a soft \"yes\" may mean \"no.\" Tendencies describe groups, never individuals: use them to generate questions, not to replace asking." },
        { h: "Cultural resources", b: "Ask about traditional healers, family decision making, and trusted authorities, then test the plan: \"What will your family, pastor, or healer think of this?\"" }
      ],
      pearls: [
        "Notice objects: jewelry, shirts, tattoos, books. They can open a person's world.",
        "Strong reaction? Who does this patient remind me of? Am I asking differently?",
        "Never: \"You're not suicidal, are you?\"",
        "Before closing: name one real strength you noticed.",
        "Test the plan: \"What will your family think of this?\"",
        "After hard disclosures: \"What has it been like to share this today?\""
      ],
      practice: [
        {
          id: "c6p1", skill: "Observed gate into culture",
          ctx: "A 19-year-old college student with moderate depression, 20 minutes in.",
          p: "So yeah, that's basically everything.", cue: "Touches a small pendant at her neck, then looks troubled.",
          opts: [
            { t: "Okay. Let's move on to your family history.", v: "poor", w: "A missed cue. Small objects and gestures can open the cultural and family forces that decide follow-through." },
            { t: "I noticed you touched your pendant just now. Is there a story behind it?", v: "best", w: "An observed gate with genuine curiosity. It may open her family's beliefs about treatment before you recommend anything." },
            { t: "You look worried. Is something wrong?", v: "ok", w: "Also an observed gate, but \"something wrong\" can feel pathologizing. Curiosity about the object is gentler." }
          ]
        },
        {
          id: "c6p2", skill: "Checking a quiet yes",
          ctx: "You've proposed starting an antidepressant.",
          p: "Yes… maybe.", cue: "Eyes lowered, soft voice, no other movement.",
          opts: [
            { t: "Great, I'll send the prescription to your pharmacy.", v: "poor", w: "In some families and cultures, openly disagreeing with an authority feels disrespectful. Later non-follow-through may be misread as deceit." },
            { t: "Many people have mixed feelings about medication, and that's completely fine to say here. What parts feel uncertain?", v: "best", w: "Normalizing ambivalence makes disagreement safe and surfaces family views before the plan fails." },
            { t: "Are you sure that's okay?", v: "poor", w: "This often produces an even more emphatic false \"yes.\"" }
          ]
        },
        {
          id: "c6p3", skill: "Relieving shame after disclosure",
          ctx: "Near the end of an interview. He has disclosed behaviors he has never told anyone.",
          p: "…so that's everything. I've never said that out loud.", cue: "Eye contact gone, picking at his hands.",
          opts: [
            { t: "Thank you. Let's go over your medical history.", v: "poor", w: "Moving on leaves him alone with the shame and may cost the second appointment." },
            { t: "What has it been like to share this with me today?", v: "best", w: "Invites him to voice his fear of being judged, which you can then gently examine. Reinforce the courage it took." },
            { t: "Lots of people do that. It's no big deal.", v: "ok", w: "Normalizing is kind but can minimize something he experiences as huge." }
          ]
        },
        {
          id: "c6p4", skill: "Making a strength explicit",
          ctx: "A single mother, three kids, caring for her mother on dialysis, working full time.",
          p: "I'm failing at everything. I'm barely keeping the kids fed and getting Mom to dialysis.", cue: "Tearful, slumped.",
          opts: [
            { t: "You're doing great!", v: "poor", w: "Generic praise is easy to dismiss and doesn't show you understood." },
            { t: "Three kids, your mom's dialysis three times a week, and a job. How do you keep all of that going?", v: "best", w: "A concrete, sincere acknowledgment makes an implicit strength explicit. Her organizing skill can become a planning resource." },
            { t: "What has helped you cope so far?", v: "ok", w: "Asking about presenting solutions is useful, though it doesn't yet name the strength you can see." }
          ]
        },
        {
          id: "c6p5", skill: "Recognizing parataxic distortion",
          ctx: "Within minutes, the patient's political remarks irritate you. You notice you are asking fewer follow-up questions.",
          p: "Anyway, people like me get ignored by everyone.", cue: "Watching your reaction.",
          opts: [
            { t: "Gently challenge his political views to build honesty.", v: "poor", w: "Your reaction is driving the interview. Debate is not the task, and it will cost the alliance." },
            { t: "Name the bias to yourself, ask who he reminds you of, and deliberately return to your usual thoroughness.", v: "best", w: "Check yourself first. Then ask the follow-up you would ask a patient you liked." },
            { t: "Shorten the interview to limit the friction.", v: "poor", w: "An unconscious style shift that yields a less valid database." }
          ]
        },
        {
          id: "c6p6", skill: "Phenomenological inquiry",
          ctx: "A man whose partner moved out two months ago.",
          p: "Sundays are the worst. I just sit in the apartment.", cue: "Flat, quiet.",
          opts: [
            { t: "Why are Sundays worse?", v: "poor", w: "\"Why\" questions can sound judgmental and ask for an explanation rather than an experience." },
            { t: "Picture last Sunday. What do you see around you?", v: "best", w: "Entering through the senses conveys interest in the person and can lead to the core feeling, and then naturally to safety questions." },
            { t: "That sounds lonely.", v: "ok", w: "Empathic and accurate, but it names the feeling for him rather than letting him discover and describe it." }
          ]
        }
      ],
      quiz: [
        { q: "How does kulturbrille differ from parataxic distortion?", opts: ["They are the same.", "Kulturbrille comes from shared cultural bias; parataxic distortion from individual unconscious templates.", "Kulturbrille affects only patients.", "Parataxic distortion is always conscious."], a: 1, w: "Both participants wear both, often invisibly." },
        { q: "The three components of the wellness triad are:", opts: ["Hope, meaning, support", "Strengths, skills, interests", "Coping, resilience, gratitude", "Family, friends, faith"], a: 1, w: "Strengths are traits, skills are teachable abilities, interests are how free time is spent." },
        { q: "Which is an example of being \"reliably invalid\"?", opts: ["Using behavioral incidents", "\"You're not feeling more depressed, are you?\"", "A normalizing OCD screen", "A referred gate"], a: 1, w: "Negative questions consistently bias toward \"no.\"" },
        { q: "Why might a shift to the present tense help in phenomenological inquiry, and when should you avoid it?", opts: ["It speeds the interview; avoid with children.", "It makes images more vivid; avoid with unstable or psychotic patients.", "It reduces shame; avoid with older adults.", "It is never helpful."], a: 1, w: "Vivid recall can be destabilizing for some patients." }
      ],
      glossary: [
        { term: "Parataxic distortion", def: "Perceiving another through unconscious templates rather than as they are (Sullivan)." },
        { term: "Intersubjectivity", def: "Joint construction of clinical data by both participants' subjectivities." },
        { term: "Reliably invalid", def: "Consistent habits that yield wrong data, such as negative and cannon questions." },
        { term: "Interpersonal perspective", def: "Understanding a person through how they believe others see them (Whitehorn, Sullivan)." },
        { term: "Phenomenological inquiry", def: "Exploring the patient's lived experience, often through the senses." },
        { term: "Presenting solutions", def: "What the patient has already tried that has helped." },
        { term: "Wellness triad", def: "Strengths, skills, and interests." },
        { term: "Kulturbrille", def: "Boas: the cultural glasses through which each person sees." },
        { term: "Mutual constitution", def: "Culture and psyche continually shape each other." }
      ]
    },

    /* ───────────────────────── CHAPTER 7 ───────────────────────── */
    {
      id: "ch7", num: 7, title: "Assessment Perspectives", sub: "The human matrix and core pains",
      summary: "Assessment is a cognitive art running throughout the interview. Three lenses used together, DSM-5 diagnosis, matrix treatment planning, and core pains, catch omissions and generate options to share collaboratively.",
      concepts: [
        { h: "Assessment as a bridge", b: "How you organize data decides which treatment options come to mind. If you never ask about neurovegetative symptoms, you won't think of an antidepressant; ignore stressors and you won't think of social work." },
        { h: "Two-step diagnosis", b: "Primary delineation identifies the broad regions involved (mood, anxiety, psychotic, substance, and so on). Secondary delineation seeks criteria for specific diagnoses within each. Scan all regions to avoid errors of omission." },
        { h: "Context the structure no longer forces", b: "Always conceptualize personality structure, medical conditions, psychosocial stressors, and current functioning. Beware the red herring: a plausible stressor can hide a medical cause. Ask why the patient came in tonight rather than tomorrow." },
        { h: "V-codes", b: "Conditions that are a focus of care but not attributable to a mental disorder, such as bereavement, marital, occupational, or adherence problems. They let you name the real focus honestly." },
        { h: "The human matrix", b: "Six nested wings: biological, psychological, dyadic, family, cultural/societal/environmental, and worldview. Each is both a place to find problems and a place to find solutions." },
        { h: "Intra- and inter-wing interventions", b: "Intra-wing treats a problem within its own wing (marital problem → couples therapy). Inter-wing treats it from another wing (treating one partner's depression to unlock stalled couples work). For every wing, ask both directions." },
        { h: "Matrix effects", b: "Healing effects (a change in one wing helps another), damaging effects (one helps here but harms there, like Ted's new apartment far from his veteran community), and red herrings (a problem in one wing appears to come from another)." },
        { h: "The matrix question", b: "\"How might your life change if…?\" A neutral question about imagined impact surfaces hopes and concerns before an intervention causes harm." },
        { h: "Eight core pains", b: "Intense loneliness, feeling worthless or bad, feeling rejected or wronged, a sense of failure, loss of external control, loss of internal control, fear of the unknown, and loss of meaning. They guide treatment and how you respond in the room." }
      ],
      pearls: [
        "After every intake, spend five minutes jotting DSM-5 areas, each matrix wing, and the leading core pains.",
        "Ask \"Why tonight?\" to locate the precipitant.",
        "Use behavioral incidents and amplification to assess functioning.",
        "Before recommending a change, ask how it might ripple through other wings.",
        "Recommend only what is actually available."
      ],
      practice: [
        {
          id: "c7p1", skill: "The matrix question",
          ctx: "A veteran living with other veterans in a tent encampment. A housing program has an apartment available across town.",
          p: "A place of my own? Sounds alright, I guess.", cue: "Neutral expression.",
          opts: [
            { t: "Great. I'll get the paperwork started today.", v: "poor", w: "A seemingly positive intervention can damage other wings: community, safety, purpose, and access to services." },
            { t: "We've housed a lot of vets through this program. How do you think things would change for you if we got you a place?", v: "best", w: "A neutral matrix question lets concerns surface, such as losing the people who feel like family, so the plan can be reshaped before harm occurs." },
            { t: "Wouldn't you rather have a real home?", v: "poor", w: "A leading question that assumes your values and invites agreement over truth." }
          ]
        },
        {
          id: "c7p2", skill: "Assessing functioning validly",
          ctx: "An acutely psychotic patient who does not want admission. You ask whether the voices bother him often.",
          p: "Not often.", cue: "Glances away.",
          opts: [
            { t: "Good. That's reassuring.", v: "poor", w: "Accepting an opinion answer may miss frequent command hallucinations." },
            { t: "Over the last two days, how often have you heard them: 10, 30, 60 times a day? … What do they say?", v: "best", w: "Symptom amplification, then a behavioral incident. Functioning and risk can look very different once facts emerge." },
            { t: "Are they telling you to hurt yourself?", v: "ok", w: "Command hallucinations must be asked about, but asking frequency and content first gives a fuller, more valid picture." }
          ]
        },
        {
          id: "c7p3", skill: "Responding to a core pain: failure",
          ctx: "Closing phase. You suggest weekly therapy.",
          p: "Therapy never works for me. I'll probably just mess it up again.", cue: "Shrugs, looks down.",
          opts: [
            { t: "This time will be different, I promise.", v: "poor", w: "A promise you can't keep, and it skips over the fear itself." },
            { t: "What happened the last times? And what are you most worried might happen this time?", v: "best", w: "Surfaces the predicted failure so it can be addressed. You might also note specific ways she has done well today." },
            { t: "Let's just give it a try and see.", v: "ok", w: "Reasonable, but it leaves the core pain untouched, a common reason patients don't return." }
          ]
        },
        {
          id: "c7p4", skill: "Finding the precipitant",
          ctx: "A man with years of low mood presents to the ED at 11 p.m.",
          p: "I've felt like this forever, honestly.", cue: "Calm, tired.",
          opts: [
            { t: "What made you decide to come in tonight rather than tomorrow?", v: "best", w: "Locates the precipitating stressor, which is key for crisis work and for safety." },
            { t: "How long exactly is forever?", v: "ok", w: "Useful for defining the time course, but it doesn't answer the urgent question of why now." },
            { t: "So nothing has really changed?", v: "poor", w: "A leading statement of inquiry that may close off the very event that brought him in." }
          ]
        }
      ],
      quiz: [
        { q: "Which correctly lists the six wings of the human matrix?", opts: ["Biological, psychological, dyadic, family, cultural/societal/environmental, worldview", "Mind, body, spirit, family, work, community", "Genetic, developmental, cognitive, social, economic, legal", "Axis I through Axis V plus spirituality"], a: 0, w: "Each wing sits inside the next larger one, and changes ripple through all of them." },
        { q: "Treating one partner's biological depression so that stalled couples therapy can progress is an example of:", opts: ["An intra-wing intervention", "An inter-wing intervention", "A red herring effect", "A V-code"], a: 1, w: "Biological wing → dyadic wing. Inter-wing thinking is the often-forgotten heart of Engel's model." },
        { q: "A red herring effect is:", opts: ["A misleading patient statement", "A problem in one wing that appears to originate in another", "A damaging side effect", "An irrelevant stressor"], a: 1, w: "Example: a slow-growing frontal tumor blamed on a coincidental foreclosure." },
        { q: "Which is NOT one of Shea's eight core pains?", opts: ["Intense loneliness", "Loss of meaning", "Fear of the unknown", "Low intelligence"], a: 3, w: "The eight: loneliness, worthlessness, rejection, failure, loss of external control, loss of internal control, fear of the unknown, loss of meaning." }
      ],
      glossary: [
        { term: "Primary delineation", def: "Identifying the broad diagnostic regions involved." },
        { term: "Secondary delineation", def: "Seeking criteria for specific diagnoses within each region." },
        { term: "V-codes", def: "Conditions that are a focus of care but not attributable to a mental disorder." },
        { term: "Matrix treatment planning", def: "Shea's renamed biopsychosocialspiritual model, emphasizing interaction among six wings." },
        { term: "Inter-wing intervention", def: "Treating a problem in one wing from a different wing." },
        { term: "Healing / damaging matrix effect", def: "A change in one wing that helps / harms another." },
        { term: "Red herring effect", def: "A problem in one wing appearing to originate in another." },
        { term: "Matrix question", def: "\"How might your life change if…?\": surfaces the ripple effects of a planned intervention." },
        { term: "Core pains", def: "Eight fundamental pains beneath complex presentations." }
      ]
    },

    /* ───────────────────────── CHAPTER 8 ───────────────────────── */
    {
      id: "ch8", num: 8, title: "Nonverbal Behavior", sub: "The interview as mime",
      summary: "Much of what passes between clinician and patient is nonverbal. Read the patient's behavior as hypotheses in context, and use your own space, movement, voice, and attention intentionally to engage, including with guarded and potentially violent patients.",
      concepts: [
        { h: "Emblems vs nonverbal activities", b: "Emblems have agreed meanings (a thumbs-up, a shrug), though they vary by culture. Nonverbal activities have no fixed meaning: illustrators, regulators, adaptors, and affective displays. Interpret activities cautiously, as hypotheses." },
        { h: "Proxemics", b: "Hall's distances: intimate, personal, social (most interviews at about 4 to 7 feet), public. Sensory intensity, not the tape measure, creates felt distance. A loud voice or strong perfume can invade personal space from across the room. Norms vary by culture and individual." },
        { h: "Kinesics and paralanguage", b: "How movements are made matters as much as what they are. Tone, pitch, rate, and fluency can turn praise into sarcasm. Don't fill every silence; its meaning varies across cultures." },
        { h: "Immediacy and its valence", b: "Warmth and closeness created by distance, lean, eye contact, smiles, and voice. Like empathic statements, immediacy has valence: guarded and paranoid patients need it turned down." },
        { h: "Clues to hidden psychopathology", b: "Psychosis tends to erode the nonverbal behaviors that maintain social interaction: odd pauses, gaze drifting past you, few gestures, unclear turn-taking. Exaggerated cut-offs, such as hands over the ears, may signal psychotic process." },
        { h: "Anxiety, deception, ambivalence", b: "Learn each patient's baseline adaptors; a sudden increase is informative. Deception clues show something is withheld, not why. Incongruent paramessages (angry words, resigned tone) can reveal ambivalence." },
        { h: "Spotting an unspoken no", b: "During planning, closed hands, folded arms, leaning back, or a hand-to-chin weighing gesture can signal hesitancy. Rather than \"Are you sure?\", ask about pros and cons." },
        { h: "Engaging with your body", b: "Sit about 4 to 5 feet apart at a slight angle; avoid a desk between you. Nod intentionally and know your frequency. Match the channel to the patient: a downcast patient can't see nods but can hear \"uh-huh.\" Keep rough notes minimal and none during suicide, abuse, or violence questions." },
        { h: "The guarded and paranoid patient", b: "Tone down immediacy: more distance, less eye contact, fewer nods and gestures, a softer, slower voice, and no note taking." },
        { h: "Calming potential violence", b: "Know the early signs (angry edge, pacing, jabbing finger, staring) and late signs (clenched fists, raised fist, vacuum gestures, threats). Refuse the dominance reciprocal: calm voice, less eye contact, hands low and open, smaller posture, more space, no touch, sit near the door without blocking theirs." },
        { h: "Video, phone, and text", b: "Video brings a phantom presence effect: look into the camera periodically and add verbal empathy. Phone leaves only paralanguage, so watch baseline speech changes. Text strips everything but words and timing; for difficult risk assessments, work toward an in-person evaluation." }
      ],
      pearls: [
        "Downcast patient: switch from nods to spoken facilitators.",
        "Paranoid patient: more distance, less eye contact, no notes.",
        "Escalating patient: calm voice, hands low and open, more space, near the door.",
        "Planning: weighing gestures call for a pros-and-cons question.",
        "Video: look into the camera every so often.",
        "Watch a muted recording of yourself once this month."
      ],
      practice: [
        {
          id: "c8p1", skill: "Matching the channel",
          ctx: "A young man sits slumped, head down, hands in his lap. You have been speaking quietly and nodding often.",
          p: "…dunno. Stuff's just bad.", cue: "Never looks up.",
          opts: [
            { t: "Keep nodding warmly; he'll notice eventually.", v: "poor", w: "Nods are visual. A patient looking down never sees them." },
            { t: "Use a livelier voice and more spoken facilitators like \"uh-huh\" and \"go on.\"", v: "best", w: "Use the channel he can receive. In Shea's vignette, this shift led to sitting up and improved eye contact within minutes." },
            { t: "Ask him to look at you when he talks.", v: "poor", w: "A directive that heightens self-consciousness and may feel controlling." }
          ]
        },
        {
          id: "c8p2", skill: "Lowering immediacy",
          ctx: "An actively paranoid woman agrees to talk with you in a small consult room.",
          p: "Why are you writing? Who's going to read that?", cue: "Eyes on your notepad, body angled away.",
          opts: [
            { t: "Pull your chair closer and lean in to show you care.", v: "poor", w: "High immediacy can feel invasive and threatening to a paranoid patient." },
            { t: "Put the notepad away, sit a bit farther with your chair angled, soften and slow your voice, and break eye contact often.", v: "best", w: "The golden rule with guarded patients is to tone down immediacy. Note taking feeds fears of being analyzed." },
            { t: "Explain that notes are confidential and continue writing.", v: "ok", w: "Answering the question honestly matters, but continuing to write ignores the cue." }
          ]
        },
        {
          id: "c8p3", skill: "Refusing the dominance reciprocal",
          ctx: "ED. A man is pacing and refuses to sit. You are standing in the doorway.",
          p: "I'm not sitting down. You people think you're so smart.", cue: "Fast speech, jabbing finger.",
          opts: [
            { t: "(standing tall, firm, loud) Sit down now or I'm calling security.", v: "poor", w: "A dominance display invites escalation of the violence reciprocal." },
            { t: "(calm, hands low and open) It might help you relax some if you sit over here. Let's see if we can sort some things out.", v: "best", w: "A gentle invitation with submissive, non-threatening body language. Escalate the request gently, never the tone. If he still won't sit, assume serious impairment of control and alert staff." },
            { t: "(stepping closer, hand on his shoulder) Hey, calm down, buddy.", v: "poor", w: "Touch enters intimate space and is especially risky with an angry patient." }
          ]
        },
        {
          id: "c8p4", skill: "Reading a weighing gesture",
          ctx: "You suggest starting an antidepressant along with therapy.",
          p: "Mm. Okay.", cue: "Chin resting on hand, eyes down.",
          opts: [
            { t: "Are you sure that's okay with you?", v: "poor", w: "Often produces an even more emphatic false \"yes.\"" },
            { t: "What are your thoughts on the pros and cons of trying an antidepressant?", v: "best", w: "The gesture suggests active weighing. Inviting pros and cons gives permission to voice doubts, such as fear of weight gain, before the plan fails." },
            { t: "Great. I'll send it in.", v: "poor", w: "Proceeding over hidden hesitancy is a common route to nonadherence." }
          ]
        },
        {
          id: "c8p5", skill: "Note taking during sensitive topics",
          ctx: "You are about to ask about suicidal thoughts. You've been taking rough notes on a laptop.",
          p: "Honestly, some nights I don't know why I bother.", cue: "Voice catches.",
          opts: [
            { t: "Keep typing so you capture her exact words.", v: "poor", w: "You need your eyes for this. Typing signals that the screen matters more than she does." },
            { t: "Stop typing, partially close the laptop, lean slightly forward, and ask gently.", v: "best", w: "No note taking during suicide, incest, or domestic violence questions. Your full attention is both engaging and diagnostic." },
            { t: "Ask her to pause while you finish your note.", v: "poor", w: "Interrupts a vulnerable moment for documentation." }
          ]
        },
        {
          id: "c8p6", skill: "The phantom presence effect",
          ctx: "A video visit with a socially anxious patient. You keep looking at his face on your screen.",
          p: "It's easier doing this from home, honestly.", cue: "Small smile, eyes on his screen.",
          opts: [
            { t: "Look into the camera periodically and add more verbal empathy and spoken facilitators.", v: "best", w: "Looking at the face on screen appears downcast. Looking into the camera restores eye contact, and extra verbal empathy compensates for lost presence." },
            { t: "Keep watching his face closely on screen.", v: "ok", w: "Watching is useful for reading him, but he experiences you as looking away. Alternate." },
            { t: "Suggest switching to in-person right away.", v: "poor", w: "For a socially anxious patient, lower immediacy may be exactly why video helps. Reserve the push for in-person when risk calls for it." }
          ]
        }
      ],
      quiz: [
        { q: "Ekman and Friesen's four kinds of nonverbal activities are:", opts: ["Emblems, signals, gestures, postures", "Illustrators, regulators, adaptors, affective displays", "Proxemics, kinesics, paralanguage, immediacy", "Cut-offs, displacements, reciprocals, echoes"], a: 1, w: "Adaptors and affective displays are the richest windows into feelings." },
        { q: "Most interviews take place in which of Hall's zones?", opts: ["Intimate", "Personal", "Social, about 4 to 7 feet", "Public"], a: 2, w: "Begin about 4 to 6 feet away, then adjust to the patient's responsive zone." },
        { q: "With a paranoid patient, the golden rule is to:", opts: ["Increase eye contact to build trust", "Tone down immediacy", "Mirror their posture", "Take detailed notes"], a: 1, w: "More distance, less eye contact, fewer nods, softer voice, no notes." },
        { q: "A genuine smile typically involves:", opts: ["Only the mouth", "The eyes, with lines at the corners and narrowed lids", "Raised eyebrows", "Showing the teeth"], a: 1, w: "Anxious, hostile, or deceptive smiles often don't reach the eyes." },
        { q: "Which is a LATE warning sign of imminent violence?", opts: ["Faster speech with an angry edge", "Pacing", "Clenched fists with white knuckles", "Sarcastic challenges"], a: 2, w: "Late signs include intention movements, vacuum gestures, a raised fist, and verbal threats." }
      ],
      glossary: [
        { term: "Emblem", def: "A nonverbal communication with a culturally agreed meaning." },
        { term: "Adaptor", def: "A mostly unconscious comfort behavior, such as touching the face or fidgeting." },
        { term: "Proxemics", def: "The study of the use of space." },
        { term: "Kinesics", def: "The study of body movement." },
        { term: "Paralanguage", def: "How words are said: tone, pitch, loudness, rhythm, fluency." },
        { term: "Immediacy", def: "The felt warmth, closeness, and involvement created by nonverbal behavior." },
        { term: "Cut-off", def: "A nonverbal adaptor that shuts out stress, such as covering the ears or averting the eyes." },
        { term: "Incongruent paramessages", def: "Conflicting messages across channels that often reveal ambivalence." },
        { term: "Kinesic reciprocal", def: "Scheflen: an escalating shared behavior pattern such as courting, parenting, or dominance." },
        { term: "Responsive zone", def: "The distance at which the patient feels comfortable and your movements still register." },
        { term: "Phantom presence effect", def: "The reduced immediacy of a clinician who is only an image on a screen." }
      ]
    }
  ];
})();
