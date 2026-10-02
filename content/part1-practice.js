/*
  Psychiatric Interviewing Trainer — Part I simulated interviews and technique drills.
  All cases and dialogue are composed for teaching. Names are fictional.

  Simulation schema
    { id, title, chapters:[n], setting, who, goal, startB, start, nodes: {
        nodeId: { p, cue, choices:[{ t, b, d, fb, next }] }        b = blending change, d = database change
        endId:  { end:true, p?, cue?, debrief }
    } }

  Drill schema
    sets: [{ id, title, about, categories:[...], items:[{ ctx?, say, a, w }] }]   a = category name
*/
window.TRAINER = window.TRAINER || { parts: {} };
(function () {
  var part = (window.TRAINER.parts.part1 = window.TRAINER.parts.part1 || {});

  part.simulations = [
    /* ─────────── 1. Paranoid patient ─────────── */
    {
      id: "sim-watching", title: "Watching", chapters: [1, 5],
      setting: "Emergency department, late evening.",
      who: "Mr. Arturo Reyes, 46, warehouse supervisor. His brother brought him in, worried he has stopped sleeping and is talking about being followed.",
      goal: "Keep engagement without triggering the paranoid spiral, and surface any safety concerns.",
      startB: 30, start: "n1",
      nodes: {
        n1: {
          p: "My brother dragged me here. There's nothing wrong with me. People at work are watching me.",
          cue: "He sits near the door, arms folded, eyeing your notepad.",
          choices: [
            { t: "It must be terrifying to feel watched all the time.", b: -12, d: 0, fb: "High certainty and high attribution with a guarded patient. Being told what he feels may feel like trespassing on a private world.", next: "n1x" },
            { t: "What have you noticed them doing?", b: 8, d: 10, fb: "Interested, non-empathic curiosity. Robinson's \"greasing the wheels\" lets him tell it his way without pushing closeness.", next: "n2" },
            { t: "Can you tell me about your mental health history?", b: -6, d: 2, fb: "A swing question that also changes the subject away from his concern. It signals you see him as a psychiatric case rather than hearing his perspective.", next: "n1x" }
          ]
        },
        n1x: {
          p: "Terrifying? I didn't say terrifying. You're not listening. I said they're watching.",
          cue: "Leans back, jaw tight. A disavowal.",
          choices: [
            { t: "I just meant anyone would be scared in your shoes.", b: -14, d: 0, fb: "This is the paranoid spiral: after a disavowal, more empathy at higher valence. Intimacy he doesn't want is increasing.", next: "n1y" },
            { t: "Watching. What have you noticed them doing?", b: 10, d: 8, fb: "A good recovery. You dropped empathic statements, reflected his exact word, and showed genuine interest in his view.", next: "n2" },
            { t: "You seem angry with me right now.", b: -8, d: 0, fb: "A process comment raises intimacy further. With active paranoia, keep the focus on his experience, not on the two of you.", next: "n1y" }
          ]
        },
        n1y: {
          p: "What are you saying, that I'm crazy? Maybe I should just leave.",
          cue: "Half rises from his chair.",
          choices: [
            { t: "Nobody here has decided anything about you. I'd like to hear how you see it, if you're willing to stay. What's been happening at work?", b: 12, d: 4, fb: "You gave him control and returned to non-empathic interest in his perspective. Releasing control often lets you gain it.", next: "n2" },
            { t: "Sir, sit down. You need to calm down.", b: -15, d: 0, fb: "A command at this moment is a dominance move that confirms his fears.", next: "endLeft" }
          ]
        },
        n2: {
          p: "They put a camera in the break room. My supervisor smiles at me like she knows something. Last week my car got moved two spaces.",
          cue: "Speaks longer now. Briefly meets your eyes.",
          choices: [
            { t: "How do you make sense of why they'd do that?", b: 6, d: 10, fb: "A conversational question that invites him to elaborate the belief. This is where risk-relevant material often lives.", next: "n3" },
            { t: "That's probably just a coincidence.", b: -12, d: 0, fb: "Arguing with a delusion ends the conversation and makes you one more person who doesn't believe him.", next: "n3" },
            { t: "Moved two spaces.", b: 4, d: 5, fb: "A pure reflecting statement using his exact words. Very low attribution and very safe, though it moves the story less than a curious question.", next: "n3" }
          ]
        },
        n3: {
          p: "Because I reported the inventory shortages. They want me gone. Or worse.",
          cue: "Lowers his voice.",
          choices: [
            { t: "Or worse?", b: 4, d: 8, fb: "An exact-word reflection on the most important phrase he just said.", next: "n4" },
            { t: "What do you think needs to happen next?", b: 5, d: 10, fb: "One of Robinson's prompts. It invites him to share what he might do, which is the safety question in conversational form.", next: "n4" },
            { t: "You're not thinking of doing anything to them, are you?", b: -6, d: -6, fb: "A negative statement of inquiry signals the answer you want and can yield dangerously invalid data.", next: "n3x" }
          ]
        },
        n3x: {
          p: "No.",
          cue: "Flat. A knowing look, then silence.",
          choices: [
            { t: "Earlier you said they want you gone. You've thought about doing something to protect yourself?", b: 4, d: 10, fb: "A referred gate plus a gentle sounding. You reopened the topic in his own terms without accusation.", next: "n4" },
            { t: "Okay, good. Let's talk about your sleep.", b: 0, d: -8, fb: "Accepting the \"no\" after a leading question leaves a possible risk unexplored.", next: "endMissed" }
          ]
        },
        n4: {
          p: "I've been thinking I need to protect myself. I've got my dad's old pistol in my car.",
          cue: "Quiet, watching your reaction.",
          choices: [
            { t: "(calmly) You've thought about using it?", b: 3, d: 15, fb: "A gentle sounding, delivered matter-of-factly. You're measuring intent without alarm, which keeps him talking.", next: "endGood" },
            { t: "That's illegal and dangerous. I'm calling security.", b: -15, d: 0, fb: "Safety matters, but an alarmed reaction ends disclosure before you know whether there's a plan or a target. Gather what you can calmly, then act with your team.", next: "endMixed" },
            { t: "Let's set that aside and talk about something else for a moment.", b: 0, d: -10, fb: "Avoiding the most important disclosure in the interview. The window may not reopen.", next: "endMissed" }
          ]
        },
        endGood: { end: true, p: "Sometimes. If she keeps it up. I know where she parks.", cue: "He seems almost relieved to have said it.", debrief: "Avoiding the paranoid spiral kept him talking, and his disclosure of a weapon and a possible target surfaced in a first meeting. Next steps in a real case: a detailed violence risk assessment, involving your supervisor and the treatment team, securing the weapon, safety planning, and your local duty-to-protect obligations. Chapter 18 covers eliciting violent ideation in depth." },
        endMixed: { end: true, p: "Forget it. I'm done talking.", cue: "Arms folded, staring at the wall.", debrief: "You learned there is a weapon, and safety action is warranted. But the alarmed response shut down disclosure before you learned about intent, a plan, or a target. In practice, stay calm, gather what you can, then step out to involve your team." },
        endMissed: { end: true, p: "Fine. Sleep's fine.", cue: "He checks the time.", debrief: "Engagement held in places, but the safety-critical material was never explored. With paranoid patients, delusions may hold the seeds of danger to self or others. Curious, non-empathic questions and soundings help that material emerge." },
        endLeft: { end: true, p: "I'm out of here.", cue: "He stands and walks toward the exit. Staff intervene.", debrief: "The spiral reached its endpoint. The moment to change course was the first disavowal: stop empathic statements, reflect his exact words, and ask with interest what he has noticed." }
      }
    },

    /* ─────────── 2. Angry patient ─────────── */
    {
      id: "sim-forty", title: "Forty minutes", chapters: [1, 2],
      setting: "Outpatient clinic, Tuesday afternoon.",
      who: "Ms. Danielle Price, 38, returning for a follow-up. You are 40 minutes late after an emergency on the inpatient unit.",
      goal: "Transform the patient's anger and keep the alliance.",
      startB: 25, start: "n1",
      nodes: {
        n1: {
          p: "Forty minutes! I took a half day off for this. What is going on here?",
          cue: "Standing, coat on, voice raised.",
          choices: [
            { t: "No wonder you're upset. Forty minutes is a long time to wait, and I'm truly sorry.", b: 14, d: 0, fb: "A defusing statement plus a sincere apology. It's hard to stay angry with someone who agrees with you.", next: "n2" },
            { t: "I'm sorry. I was handling an emergency on the unit, and I'd do the same for you.", b: -10, d: 0, fb: "Leading with your explanation shifts the focus to defending yourself.", next: "n1x" },
            { t: "I know waiting is no fun.", b: -8, d: 0, fb: "Understated empathy minimizes her feeling and tends to irritate.", next: "n1x" }
          ]
        },
        n1x: {
          p: "No fun? I lost half a day's pay. And I'll still get billed for this.",
          cue: "Louder.",
          choices: [
            { t: "You're absolutely right to be upset. You lost pay and you were kept waiting. I'm truly sorry.", b: 12, d: 0, fb: "A good recovery. The angrier the patient, the stronger the defusing statement.", next: "n2" },
            { t: "Billing isn't something I control.", b: -10, d: 0, fb: "Technically true, but defensive. It signals your self-system is activated.", next: "n2" }
          ]
        },
        n2: {
          p: "Well… you shouldn't keep people waiting like that.",
          cue: "Sits down slowly. Less heated.",
          choices: [
            { t: "You're right. An emergency came up, and it still wasn't fair to you. I'd like to waive today's charge.", b: 10, d: 0, fb: "Agreement first, the reason as a brief afterthought, then compensation. Check what your clinic allows before offering.", next: "n3" },
            { t: "Honestly, our clinic is understaffed. It's not really my fault.", b: -10, d: 0, fb: "Deflecting blame reopens the conflict.", next: "n3" },
            { t: "Shall we get started? We've lost a lot of time.", b: -4, d: 0, fb: "Moving on too quickly can feel dismissive. Let the repair finish first.", next: "n3" }
          ]
        },
        n3: {
          p: "Okay. Fine. Just don't make a habit of it. Honestly, it's been a bad week.",
          cue: "Exhales, takes her coat off.",
          choices: [
            { t: "Tell me about the week.", b: 8, d: 10, fb: "A gentle command opens the door she just offered.", next: "end" },
            { t: "Before that, let's review your medications.", b: -5, d: 5, fb: "Medications matter, but she just offered something important. Follow the invitation first.", next: "end" },
            { t: "I'm sure it has. Mine too.", b: -6, d: 0, fb: "Shifting the focus to yourself risks seeming to need something from her.", next: "end" }
          ]
        },
        end: { end: true, debrief: "Anger at you or your institution calls for high-certainty agreement, a sincere apology, and an explanation that is brief and last. When the patient's anger softens, the interview can become more productive than before the conflict. Chapter 19 covers transforming anger in depth." }
      }
    },

    /* ─────────── 3. Shut-down interview ─────────── */
    {
      id: "sim-service", title: "Six years in the service", chapters: [3],
      setting: "Veterans clinic intake.",
      who: "Mr. Calvin Brooks, 31, Army veteran, home for a year. His wife made the appointment.",
      goal: "Transform a shut-down interview into a conversation.",
      startB: 20, start: "n1",
      nodes: {
        n1: {
          p: "Six years.",
          cue: "You've asked three closed questions. Short answers, long pauses, eyes on the floor, arms crossed.",
          choices: [
            { t: "Can you tell me what coming home was like?", b: -4, d: 0, fb: "A swing question. In a shut-down interview it's easily answered \"Not really.\"", next: "n1x" },
            { t: "Some people find coming home harder than deployment. What was it like for you?", b: 10, d: 5, fb: "Normalization plus an open question on a charged topic where he is the expert.", next: "n2" },
            { t: "Do you have nightmares?", b: -6, d: 3, fb: "Another closed question, and a sensitive one this early. It feeds the shut-down pattern.", next: "n1x" }
          ]
        },
        n1x: {
          p: "Not really.",
          cue: "Shrugs.",
          choices: [
            { t: "I've never served. Tell me what civilians don't get about it.", b: 12, d: 5, fb: "A gentle command that makes him the teacher. Topics of expertise and strong opinion help unlock shut-down interviews.", next: "n2" },
            { t: "Have you had any thoughts of suicide?", b: -8, d: 2, fb: "Lethality must be assessed, but deferring sensitive topics until engagement grows usually yields more valid answers.", next: "n2" },
            { t: "(waits in silence)", b: -6, d: 0, fb: "Long pauses can help later in therapy, but in a first meeting they tend to breed defensiveness.", next: "n2" }
          ]
        },
        n2: {
          p: "It's weird. Everything's slow. People complain about nothing.",
          cue: "A slightly longer answer. He glances up.",
          choices: [
            { t: "That sounds isolating. Tell me more about what \"slow\" feels like day to day.", b: 10, d: 8, fb: "Piggy-back empathy: lead with empathy and attach an open request so the momentum continues.", next: "n3" },
            { t: "That must be hard.", b: 0, d: 0, fb: "A stand-alone empathic statement can stall a shut-down patient. Attach an open question.", next: "n3" },
            { t: "Are you sleeping okay?", b: -4, d: 4, fb: "You found a topic where his answers lengthen, then left it for a closed question.", next: "n3" }
          ]
        },
        n3: {
          p: "You never switch off. You watch every doorway. Last week at the mall a car backfired and I was on the ground before I knew it.",
          cue: "Uncrosses his arms. Looks at you.",
          choices: [
            { t: "What happened next, right after you hit the ground?", b: 6, d: 12, fb: "A sequencing behavioral incident. It brings back the specific memory and its feelings.", next: "n4" },
            { t: "That sounds like PTSD. Have you heard of it?", b: -6, d: 0, fb: "Labeling too early cuts off his story and can feel like being filed into a category.", next: "n4" },
            { t: "How do you mean?", b: 4, d: 6, fb: "A safe facilitating question. Fine, though less vivid than asking for the sequence.", next: "n4" }
          ]
        },
        n4: {
          p: "My kid was with me. He was scared. Of me.",
          cue: "Voice drops. Eyes wet.",
          choices: [
            { t: "(pause, softly) That moment stays with you.", b: 10, d: 5, fb: "Engagement is now solid enough for a well-timed, higher-valence empathic statement. Watch for more talk and more feeling.", next: "end" },
            { t: "With all you've been carrying, have you had thoughts of killing yourself?", b: 2, d: 10, fb: "Shame attenuation is the right frame, and this must be asked. Briefly acknowledging the moment first would honor it better.", next: "end" },
            { t: "Let's move on to your medical history.", b: -12, d: 0, fb: "A phantom gate away from the most important moment in the interview.", next: "end" }
          ]
        },
        end: { end: true, debrief: "Shut-down interviews are co-created. Strings of open questions and gentle commands, piggy-back empathy, topics where the patient is the expert, and no swing questions turn them around. Once blending is solid, return to lethality, substances, and trauma history." }
      }
    },

    /* ─────────── 4. Wandering interview and a pivot point ─────────── */
    {
      id: "sim-wedding", title: "The cousin's wedding", chapters: [3, 4],
      setting: "Community mental health intake, minute 18 of 50.",
      who: "Mrs. Lorna Vidal, 52, presenting with low mood. Warm, talkative, easily sidetracked.",
      goal: "Focus a wanderer without disengaging her, and recognize a pivot point you must follow.",
      startB: 55, start: "n1",
      nodes: {
        n1: {
          p: "Appetite? Oh, at my cousin's wedding last month the food was incredible. And my aunt, who has never forgiven my mother for something in 1987, was seated right next to…",
          cue: "Animated, quick replies, good eye contact.",
          choices: [
            { t: "Mm-hmm, go on.", b: 2, d: -6, fb: "Feeding the wanderer. Facilitators act wide open with a wandering patient.", next: "n1x" },
            { t: "Sounds like a big family event. Before we get to the wedding, help me with your appetite. Are you eating less than usual these days?", b: 4, d: 10, fb: "Piggy-back empathy, a cut-off that honors the topic, and a closed question to focus.", next: "n2" },
            { t: "We need to stay on topic. Appetite, please.", b: -8, d: 6, fb: "It works, but it's too blunt as a first step. Escalate gently; most patients respond at the early rungs.", next: "n2" }
          ]
        },
        n1x: {
          p: "…and then my uncle's speech went on forever, which reminds me of my old job, where my manager…",
          cue: "She's off on a new tangent.",
          choices: [
            { t: "This is so important that I'd like us to stay on it for a few minutes. Are you eating less than usual?", b: 2, d: 10, fb: "Stressing importance is a higher rung on the ladder, with a closed question attached.", next: "n2" },
            { t: "(taking notes on her old job) What was your manager like?", b: 0, d: -8, fb: "You've followed her down the alley, and the dead zone grows.", next: "n2" }
          ]
        },
        n2: {
          p: "Less, yes. Food tastes like cardboard. I've lost a dress size. Nobody notices. My kids are busy. Sometimes I think they'd be better off without me to worry about.",
          cue: "Brief pause. She looks at her hands.",
          choices: [
            { t: "Food tastes like cardboard. About how much weight have you lost?", b: -4, d: 4, fb: "A pivot point into a sensitive region. Suicide is an exception to finishing the current region first: follow it now.", next: "n2x" },
            { t: "You said they'd be better off without you. Sometimes when people feel that way, they have thoughts of killing themselves. Have you had thoughts like that?", b: 8, d: 15, fb: "You recognized the pivot, followed it with her own words, and normalized the question.", next: "n3" },
            { t: "I'm sure your kids love you very much.", b: -6, d: -4, fb: "Reassurance closes the door she just opened.", next: "n2x" }
          ]
        },
        n2x: {
          p: "Oh, I don't know. Maybe ten pounds.",
          cue: "Her brightness returns, a little forced.",
          choices: [
            { t: "A moment ago you said your kids might be better off without you. I'd like to come back to that. Have you had thoughts of ending your life?", b: 6, d: 12, fb: "A referred gate rescues the missed pivot.", next: "n3" },
            { t: "And how has your sleep been?", b: 0, d: 2, fb: "The invitation may not return. A possible suicide risk remains unexplored.", next: "endMissed" }
          ]
        },
        n3: {
          p: "Yes. At night, mostly. I've thought about the pills in my bathroom cabinet.",
          cue: "Quiet, steady.",
          choices: [
            { t: "What other ways have you thought about, even briefly?", b: 3, d: 12, fb: "Gentle assumption. Next, ask about specific methods one at a time, then a catch-all.", next: "end" },
            { t: "You wouldn't actually do that, would you?", b: -10, d: -10, fb: "A negative question that invites reassurance rather than truth.", next: "end" },
            { t: "What pills are in the cabinet, and about how many?", b: 3, d: 10, fb: "A fact-finding behavioral incident. Concrete details matter for safety planning.", next: "end" }
          ]
        },
        end: { end: true, debrief: "Focusing a wanderer is a graded ladder, and a caring tone makes it well tolerated. Just as important is recognizing pivot points: when a patient spontaneously moves toward suicide, violence, or abuse, follow immediately. In a real interview, continue with denial of the specific, a catch-all question, intent, and collaborative safety planning (Chapter 17)." },
        endMissed: { end: true, debrief: "The data on appetite and sleep came through, but the most important moment of the interview passed by. Pivot points into suicide are invitations that may not return. If you miss one, a referred gate (\"Earlier you mentioned…\") can bring you back." }
      }
    },

    /* ─────────── 5. Validity techniques after an overdose ─────────── */
    {
      id: "sim-pills", title: "Just a few pills", chapters: [5],
      setting: "Emergency department, morning. Medically cleared after an ingestion overnight.",
      who: "Ms. Kayla Moreno, 24, graduate student.",
      goal: "Use a verbal video to understand what really happened.",
      startB: 40, start: "n1",
      nodes: {
        n1: {
          p: "I took some pills last night. It wasn't serious. I just wanted to sleep.",
          cue: "Picks at her hospital bracelet.",
          choices: [
            { t: "Were you trying to kill yourself?", b: -2, d: 3, fb: "Intent must be asked directly at some point, but an opinion question first tends to return a socially acceptable answer.", next: "n2" },
            { t: "Let's go through last night step by step so I understand. Where were you when you took them?", b: 6, d: 10, fb: "Setting the scene for a verbal video. It doubles as a location anchor.", next: "n2" },
            { t: "Okay, as long as it wasn't serious. How's your mood been otherwise?", b: 0, d: -8, fb: "Accepting the minimization leaves the most important data unexplored.", next: "n2" }
          ]
        },
        n2: {
          p: "My apartment. In the bathroom. I'd just had a fight with my boyfriend on the phone.",
          cue: "Quieter.",
          choices: [
            { t: "What happened next, after the call ended?", b: 3, d: 10, fb: "Sequencing. Keep the video running forward.", next: "n3" },
            { t: "What pills did you take, and about how many?", b: 3, d: 10, fb: "A fact-finding behavioral incident. Good; alternate these with sequencing questions.", next: "n3" },
            { t: "Do you think the relationship is healthy?", b: 0, d: -4, fb: "An opinion detour. Important later, but it pauses the video at the critical moment.", next: "n3" }
          ]
        },
        n3: {
          p: "I took the bottle of my mom's sleeping pills. I don't know, a lot. Then it just kind of ran its course, and I woke up this morning.",
          cue: "Speeds up and looks away at \"ran its course.\"",
          choices: [
            { t: "Let's go back to right after you swallowed them. What happened next?", b: 4, d: 15, fb: "You spotted a gap where the story jumped ahead and rewound to it.", next: "n4" },
            { t: "Good thing you woke up. Have you been sleeping well lately?", b: -2, d: -8, fb: "The story skipped exactly where the most important details were.", next: "n4" },
            { t: "Why would you take that many?", b: -6, d: 2, fb: "\"Why\" questions can sound judgmental and imply a right answer.", next: "n4" }
          ]
        },
        n4: {
          p: "I texted my sister \"I'm sorry for everything.\" Then I turned my phone off so she couldn't call.",
          cue: "Barely audible.",
          choices: [
            { t: "What did you mean when you wrote \"I'm sorry for everything\"?", b: 4, d: 12, fb: "A fact-finding question about her thoughts at that moment, which bears directly on intent.", next: "n5" },
            { t: "So it sounds like you were just trying to sleep.", b: -10, d: -12, fb: "A leading statement that hands her back the minimization.", next: "n5" },
            { t: "That sounds like it was a really painful night.", b: 6, d: 3, fb: "Warm and appropriate. Afterward, return gently to what the text meant.", next: "n5" }
          ]
        },
        n5: {
          p: "I guess I didn't want to wake up.",
          cue: "Tears.",
          choices: [
            { t: "Thank you for telling me. That took courage. Besides pills, are there other ways you've thought about?", b: 8, d: 10, fb: "Acknowledging courage relieves shame, and gentle assumption continues the risk assessment.", next: "end" },
            { t: "Okay. I'm going to need to admit you.", b: -6, d: 0, fb: "Disposition may well be admission, but announcing it abruptly at her most vulnerable moment ends the conversation before you've finished understanding her.", next: "end" }
          ]
        },
        end: { end: true, debrief: "\"It wasn't serious\" became a planned ingestion with a goodbye text and a phone turned off to prevent rescue: markers of serious intent. Serial behavioral incidents let you judge intent yourself rather than relying on her opinion. Rewind at gaps. In a real case, continue with other methods, current intent, protective factors, and collaborative safety planning with your team." }
      }
    },

    /* ─────────── 6. Reluctant adolescent ─────────── */
    {
      id: "sim-teen", title: "I don't have a problem", chapters: [2, 3],
      setting: "Adolescent outpatient clinic. His mother has stepped out.",
      who: "Jordan, 16, brought by his mother for irritability, poor sleep, and quitting soccer.",
      goal: "Build an alliance from shared goals rather than a diagnosis.",
      startB: 20, start: "n1",
      nodes: {
        n1: {
          p: "I don't have a problem. My mom's the one who needs help.",
          cue: "Hood up, slumped, phone in hand.",
          choices: [
            { t: "Your mom says you've been irritable and quit soccer. That sounds like depression.", b: -12, d: 2, fb: "Parent-centered, not person-centered. A diagnosis imposed before any alliance usually ends the conversation.", next: "n1x" },
            { t: "Okay. What would make coming here today worth your time?", b: 10, d: 5, fb: "A goal question lets his own words set the agenda.", next: "n2" },
            { t: "Can you tell me why she brought you?", b: -3, d: 0, fb: "A swing question invites \"No.\"", next: "n1x" }
          ]
        },
        n1x: {
          p: "See? This is pointless.",
          cue: "Starts scrolling his phone.",
          choices: [
            { t: "Fair enough. Then let's make it worth your while. If one thing at home could change after today, what would it be?", b: 10, d: 5, fb: "You accepted his frame and invited a goal. Recovery.", next: "n2" },
            { t: "Please put the phone away.", b: -8, d: 0, fb: "A control battle you don't need to win right now.", next: "n2" }
          ]
        },
        n2: {
          p: "Tell her to get off my back.",
          cue: "Glances up briefly.",
          choices: [
            { t: "Sounds like it's been tense at home. If things got better between you two, would that help?", b: 8, d: 6, fb: "You let him complain, then reframed the complaint as a healthy goal.", next: "n3" },
            { t: "She's worried about you. She's your mom.", b: -8, d: 0, fb: "Taking the parent's side. He'll stop talking.", next: "n3" },
            { t: "What does she do that feels like she's on your back?", b: 5, d: 8, fb: "A behavioral question. Good, and it keeps him talking.", next: "n3" }
          ]
        },
        n3: {
          p: "Whatever. She checks my phone. She yells about grades.",
          cue: "Pushes his hood back a little.",
          choices: [
            { t: "Suppose you woke up tomorrow and overnight things became the way you want them. What are some of the things that would be different?", b: 8, d: 10, fb: "The miracle question pulls him toward possibilities and surfaces goals he chooses.", next: "n4" },
            { t: "Are you having any thoughts of hurting yourself?", b: 0, d: 5, fb: "This must be asked. With an adolescent, explain confidentiality and its limits first so he knows what happens with a \"yes.\"", next: "n4" }
          ]
        },
        n4: {
          p: "I'd actually sleep. I'd want to go to practice again. And she'd trust me.",
          cue: "Looking at you now.",
          choices: [
            { t: "Those are good goals. Before we go further, let me explain what stays between us and what I would need to share, such as if your safety were at risk.", b: 6, d: 5, fb: "Clear confidentiality, including its limits, builds trust before the more sensitive questions.", next: "end" },
            { t: "Great. I'll tell your mom those goals.", b: -12, d: 0, fb: "Sharing without agreement breaks the trust you just built. Decide together what gets shared.", next: "end" }
          ]
        },
        end: { end: true, debrief: "Shared goals can bond people who don't yet trust each other. Sleep, getting back to practice, and being trusted are his goals, and they overlap with what his mother wants. The top goal of a first interview is making sure there is a second one." }
      }
    },

    /* ─────────── 7. Culture and the quiet yes ─────────── */
    {
      id: "sim-pendant", title: "The pendant", chapters: [6, 8],
      setting: "University counseling center intake, minute 25.",
      who: "Nadia, 19, first-year student with moderate depression. Strong family ties; first visit to mental health care.",
      goal: "Understand the person beneath the diagnosis before planning, and catch a hidden no.",
      startB: 50, start: "n1",
      nodes: {
        n1: {
          p: "So yeah, that's basically everything.",
          cue: "She touches a small pendant at her neck, then looks away, troubled.",
          choices: [
            { t: "I noticed you touched your pendant. Is there a story behind it?", b: 8, d: 6, fb: "An observed gate with genuine curiosity.", next: "n2" },
            { t: "You look like something just crossed your mind. What's coming up?", b: 8, d: 8, fb: "An observed gate into what she is feeling right now.", next: "n2" },
            { t: "Okay. Let me tell you what I'd recommend.", b: -2, d: 0, fb: "You're moving to a plan before understanding what might decide whether she follows it.", next: "n3x" }
          ]
        },
        n2: {
          p: "My grandmother gave it to me. My family didn't really want me to come. They think if I see a psychiatrist, I'll just get put on pills instead of praying about it.",
          cue: "Holds the pendant.",
          choices: [
            { t: "That sounds like a hard spot to be in. What do you think about it yourself?", b: 8, d: 8, fb: "Empathy, then her own perspective. She is the one who will live with the plan.", next: "n3" },
            { t: "Medication is very effective for depression. They're misinformed.", b: -12, d: 0, fb: "Dismissing her family's worldview puts her between you and them.", next: "n3" }
          ]
        },
        n3: {
          p: "I don't know. I want to feel better. I just don't want a fight at home.",
          cue: "Looks at you, waiting.",
          choices: [
            { t: "Given what matters to you and your family, one option is to start with talk therapy and revisit medication together later if needed. What do you think?", b: 8, d: 5, fb: "Psychotherapy is a sound choice at this severity, and the plan fits her world. Offering it as a choice keeps it collaborative.", next: "n4" },
            { t: "I recommend starting an antidepressant tomorrow and weekly therapy.", b: -4, d: 0, fb: "A reasonable plan on paper, but it may confirm her family's fears.", next: "n3q" }
          ]
        },
        n3x: {
          p: "(listens as you recommend an antidepressant and weekly therapy)",
          cue: "Eyes lowered.",
          choices: [
            { t: "Continue to the details of the plan.", b: -2, d: 0, fb: "Watch her nonverbal response before going further.", next: "n3q" }
          ]
        },
        n3q: {
          p: "Yes… maybe.",
          cue: "Eyes lowered, chin resting on her hand, voice soft.",
          choices: [
            { t: "Are you sure that's okay?", b: -4, d: -4, fb: "This often produces an even more emphatic false yes.", next: "endQuiet" },
            { t: "Many people have mixed feelings about medication, and it's completely fine to say so here. What parts feel uncertain?", b: 10, d: 10, fb: "You read the weighing gesture and the soft yes, and made disagreement safe.", next: "n3r" },
            { t: "Great. I'll send the prescription.", b: -10, d: 0, fb: "Proceeding over a hidden no.", next: "endQuiet" }
          ]
        },
        n3r: {
          p: "My family would be really upset. They think medication means I'm not trusting God to help me.",
          cue: "Looks up for the first time in a while.",
          choices: [
            { t: "Thank you for telling me. That matters. Would it feel better to start with talk therapy and keep medication as something we can revisit together later if needed?", b: 10, d: 6, fb: "You reshaped the plan around what you learned. Psychotherapy is a sound choice at this severity.", next: "n4" },
            { t: "They'll come around once you feel better.", b: -8, d: 0, fb: "Brushing past the concern she just risked sharing.", next: "endQuiet" }
          ]
        },
        n4: {
          p: "I could do therapy. But what do I tell my parents?",
          cue: "Leans forward slightly.",
          choices: [
            { t: "What do you think they'd be most comfortable with? Some people find it helps to bring a parent to a session, or to talk with someone they trust in their faith community.", b: 8, d: 8, fb: "You tested the plan against her cultural world and looked for allies inside it.", next: "end" },
            { t: "You're an adult. You don't need to tell them anything.", b: -6, d: 0, fb: "Legally true, but it ignores how decisions are made in her family.", next: "end" }
          ]
        },
        end: { end: true, debrief: "An accurate diagnosis with a plan the patient won't follow helps no one. Noticing a small object opened her family's beliefs, and testing the plan against those beliefs turned a possible no-show into a second visit. Medication can be revisited by a trusted therapist later if needed." },
        endQuiet: { end: true, debrief: "She agreed, but the soft yes, lowered eyes, and weighing gesture suggested a hidden no. In some families and cultures, disagreeing with an authority feels disrespectful. Plans like this often end in a missed appointment. Normalizing ambivalence and asking about family views would have surfaced the roadblock first." }
      }
    },

    /* ─────────── 8. Potential violence ─────────── */
    {
      id: "sim-pacing", title: "The man who won't sit", chapters: [8],
      setting: "Emergency department, 2 a.m.",
      who: "Mr. Dale Harmon, 44, brought by police after a dispute with a neighbor. Smells of alcohol. You are standing in the doorway of the interview room.",
      goal: "Recognize warning signs and refuse the dominance reciprocal.",
      startB: 20, start: "n1",
      nodes: {
        n1: {
          p: "I'm not sitting down. You people think you're so smart.",
          cue: "Pacing, fast speech with an angry edge, jabbing a finger. Early warning signs.",
          choices: [
            { t: "(calm voice, hands low and open) It might help you relax some if you sit over here. Let's see if we can sort some things out.", b: 8, d: 0, fb: "A gentle invitation with non-threatening body language.", next: "n2" },
            { t: "(standing tall) Sit down now, or I'm calling security.", b: -15, d: 0, fb: "A dominance display invites escalation.", next: "n1x" },
            { t: "(stepping closer, hand on his shoulder) Hey, buddy, calm down.", b: -20, d: 0, fb: "Touch enters intimate space and is especially dangerous with an agitated, intoxicated patient.", next: "n1x" }
          ]
        },
        n1x: {
          p: "Don't touch me! Back off!",
          cue: "Fists clenched, knuckles white, lips drawn back. Late warning signs.",
          choices: [
            { t: "(step back, hands visible, quieter) Okay. I'm giving you space. I'm going to step out for a moment.", b: 4, d: 0, fb: "With late warning signs, your priority is safety: create distance, leave calmly, and alert staff.", next: "endSafe" },
            { t: "You don't get to talk to me like that.", b: -15, d: 0, fb: "Answering a threat with a challenge completes the violence reciprocal.", next: "endUnsafe" }
          ]
        },
        n2: {
          p: "Why should I? Last time they held me down.",
          cue: "Still pacing, but more slowly.",
          choices: [
            { t: "That sounds awful. Nobody's going to hold you down for talking with me. You can stand if you need to. I'll sit over here.", b: 10, d: 5, fb: "Acknowledging his fear and giving him control. Your smaller, seated posture signals you are not a threat.", next: "n3" },
            { t: "That won't happen if you cooperate.", b: -8, d: 0, fb: "A conditional threat in disguise.", next: "n3" }
          ]
        },
        n3: {
          p: "Fine. But I'm not staying long.",
          cue: "He sits on the edge of a chair about six feet away.",
          choices: [
            { t: "Keep your seat near the door without blocking his path out, angle your chair, keep a soft voice, limit eye contact, and take no notes.", b: 8, d: 5, fb: "You have an exit, he doesn't feel trapped, and your immediacy is turned down.", next: "endGood" },
            { t: "Pull your chair closer, lean in, and hold steady eye contact to show you're listening.", b: -8, d: 0, fb: "Staring can read as a challenge, and closeness can feel like invasion even at six feet.", next: "endOk" }
          ]
        },
        endGood: { end: true, p: "My neighbor's been playing music at 3 a.m. for weeks. I haven't slept.", cue: "Shoulders drop. He looks at you briefly.", debrief: "You refused the dominance reciprocal: calm voice, hands low and open, smaller posture, more space, no touch, and a seat near the door. Make sure someone knows you're with him and know where the safety button is. Predicting long-term violence is hard; recognizing imminent violence usually isn't." },
        endOk: { end: true, p: "Why are you staring at me?", cue: "He stiffens.", debrief: "Engagement started to build, but high immediacy (closeness and steady eye contact) can feel threatening to an agitated patient. Lower immediacy as you would with a guarded or paranoid patient." },
        endSafe: { end: true, debrief: "You recognized late warning signs and chose safety: distance, a calm exit, and alerting staff. The moment to prevent escalation was earlier. Never move toward or touch an agitated patient, and never answer a threat with a challenge." },
        endUnsafe: { end: true, debrief: "The violence reciprocal escalated. With late warning signs (clenched fists, drawn-back lips, threats), step back, keep your hands visible, leave calmly, and alert staff. Never answer a threat with a challenge." }
      }
    }
  ];

  part.drills = [
    {
      id: "doc", title: "Degree of openness", chapter: 3,
      about: "Classify each verbalization on Shea's Degree of Openness Continuum.",
      categories: ["Open-ended question", "Gentle command", "Swing question", "Qualitative question", "Statement of inquiry", "Empathic statement", "Facilitating statement", "Closed-ended question", "Closed-ended statement"],
      items: [
        { say: "What has your first year of college been like?", a: "Open-ended question", w: "Starts with \"What\" and doesn't ask for a specific short answer." },
        { say: "Tell me about your relationship with your sister.", a: "Gentle command", w: "A statement that invites speech without limiting the answer." },
        { say: "Can you describe what the panic feels like?", a: "Swing question", w: "Asks whether they will answer. Open if engaged, closed if not." },
        { say: "How's your sleep?", a: "Qualitative question", w: "Can be answered \"Fine.\"" },
        { say: "You moved back home last spring?", a: "Statement of inquiry", w: "A statement said as a question; inherently leading." },
        { say: "That sounds exhausting.", a: "Empathic statement", w: "Conveys understanding of a feeling." },
        { say: "Mm-hmm. Go on.", a: "Facilitating statement", w: "Encourages continued speech." },
        { say: "Which hospital was that?", a: "Closed-ended question", w: "Asks for a specific fact." },
        { say: "Let's start with your mood over the last two weeks.", a: "Closed-ended statement", w: "Expects no reply; it structures the interview." },
        { say: "Would you say things at work are going well?", a: "Swing question", w: "\"Would you say…\" is a swing form." },
        { say: "So you've been drinking since high school?", a: "Statement of inquiry", w: "Strongly leading statements of inquiry often start with \"So…\"." },
        { say: "Describe a typical evening at home.", a: "Gentle command", w: "\"Describe…\" with an unlimited answer set." },
        { say: "Did you drink last night?", a: "Closed-ended question", w: "Yes or no." },
        { say: "How would you do college differently if you could start over?", a: "Open-ended question", w: "\"How\" here invites reflection, not a number." }
      ]
    },
    {
      id: "gates", title: "Facilic gates", chapter: 4,
      about: "Name the type of transition the clinician uses.",
      categories: ["Spontaneous gate", "Natural gate", "Referred gate", "Implied gate", "Phantom gate", "Introduced gate", "Observed gate"],
      items: [
        { ctx: "Patient (in the depression region): \"I used to be a whirlwind. Nobody could keep up.\"", say: "A whirlwind? How do you mean?", a: "Spontaneous gate", w: "The patient moved into a new region; the clinician simply followed." },
        { ctx: "Patient: \"It takes me two hours to fall asleep.\"", say: "Have you ever used a nightcap to help knock yourself out?", a: "Natural gate", w: "Cues directly off the patient's last statement into the substance region." },
        { ctx: "Twenty minutes later, after discussing work:", say: "Earlier you mentioned that you sometimes get scary thoughts when you're alone. Tell me more about those.", a: "Referred gate", w: "Refers back to something said earlier." },
        { ctx: "Patient: \"I haven't been the same since my best friend died.\"", say: "Did your father drink heavily?", a: "Phantom gate", w: "No cue, no reference, no topical link, and a missed pivot." },
        { ctx: "Discussing current stresses with the kids and money:", say: "What was it like for you growing up?", a: "Implied gate", w: "A topically related region (family) without a direct cue." },
        { ctx: "Ten minutes left:", say: "We've covered a lot. Let me share some thoughts, but first, is there anything I missed?", a: "Introduced gate", w: "The clinician explicitly announces the transition." },
        { ctx: "The patient's eyes are welling up.", say: "You look like something just touched you. What's coming up?", a: "Observed gate", w: "Cues off nonverbal behavior." },
        { ctx: "Patient: \"Since the layoff I'm home alone all day and can't turn my brain off.\"", say: "When the thoughts won't stop, do they ever turn to not wanting to be alive?", a: "Natural gate", w: "Uses the patient's own last sentence as the springboard into the suicide region." }
      ]
    },
    {
      id: "validity", title: "Validity techniques", chapter: 5,
      about: "Identify the validity technique in each question.",
      categories: ["Anchor question", "Tagging question", "Exaggeration", "Defining technical terms", "Clarifying norms", "Normalization", "Shame attenuation", "Induction to bragging", "Behavioral incident", "Gentle assumption", "Denial of the specific", "Catch-all question", "Symptom amplification"],
      items: [
        { say: "Did the drinking start before or after you finished high school?", a: "Anchor question", w: "Ties recall to a landmark in time." },
        { say: "Was it sertraline, fluoxetine, or citalopram?", a: "Tagging question", w: "Offers a list for a forgotten, non-sensitive fact." },
        { say: "Some people who are very worried about their weight make themselves throw up after meals. Has that ever happened to you?", a: "Normalization", w: "References other people's experience." },
        { say: "With all the pain you've been in, have you had thoughts of killing yourself?", a: "Shame attenuation", w: "Type 1: cues off the patient's own pain." },
        { say: "Ever had bosses who liked to throw their weight around?", a: "Shame attenuation", w: "Type 2: asks from inside the patient's own rationalization." },
        { say: "You clearly keep in shape. I bet nobody pushed you around. How many fights have you been in?", a: "Induction to bragging", w: "A genuine compliment precedes the question." },
        { say: "When you say you \"lost it,\" what exactly did you do?", a: "Behavioral incident", w: "Asks for concrete behavior instead of an opinion." },
        { say: "What other street drugs have you tried?", a: "Gentle assumption", w: "Presumes the behavior, non-judgmentally." },
        { ctx: "After an unconvincing \"no\" to other methods:", say: "Have you had any thoughts of shooting yourself?", a: "Denial of the specific", w: "Asks about one item at a time." },
        { say: "Is there any method you've thought of, even briefly, that we haven't talked about?", a: "Catch-all question", w: "Catches outliers after a series of specifics." },
        { say: "On a bad night, how much can you drink: a pint, a fifth?", a: "Symptom amplification", w: "Sets a high ceiling so minimization still reveals the problem." },
        { say: "By hurting you, I mean things like slapping, hitting with a belt, or leaving bruises. Did anything like that happen?", a: "Clarifying norms", w: "Describes concretely what counts when family norms may differ." },
        { say: "I don't mean ordinary sadness. I mean so down it affected your sleep, appetite, and work. When did that first happen?", a: "Defining technical terms", w: "Clarifies an everyday word with a clinical meaning." },
        { ctx: "A perfectionistic patient, ashamed that she once took a candy bar at age 10.", say: "Let me get this straight: you held up the store and kicked the owner's cat on the way out?", a: "Exaggeration", w: "Playful overstatement shrinks disproportionate shame. Requires a secure alliance." }
      ]
    },
    {
      id: "valence", title: "Empathic valence", chapter: 1,
      about: "Rate each empathic statement on Shea's two dials: implied certainty and intuited attribution.",
      categories: ["Low certainty, low attribution", "High certainty, low attribution", "Low certainty, high attribution", "High certainty, high attribution"],
      items: [
        { ctx: "Patient: \"After she left, my whole life started to fall apart.\"", say: "It sounds like your whole life started falling apart.", a: "Low certainty, low attribution", w: "\"It sounds like\" lowers certainty; mirroring her words keeps attribution minimal." },
        { ctx: "Patient: \"When he left, it was like the floor gave way.\"", say: "Everything you counted on gave way at once.", a: "High certainty, low attribution", w: "Declarative, but it stays close to what the patient said." },
        { ctx: "Patient: \"After she left so suddenly, I've been tearful every day.\"", say: "It sounds like it was frightening to lose her so suddenly, a bit like losing your dad when you were young.", a: "Low certainty, high attribution", w: "Tentative framing, but it names an unspoken fear and links to an earlier loss." },
        { ctx: "Same patient.", say: "This loss has reopened the wound of losing your father.", a: "High certainty, high attribution", w: "Declarative and interpretive. Powerful with a trusting patient; risky with a guarded one." },
        { ctx: "Patient: \"I keep crying at work. I can't stop.\"", say: "I wonder if you've been crying a lot at work.", a: "Low certainty, low attribution", w: "Tentative and close to the patient's own words." },
        { ctx: "Patient: \"Caring for Dad every night has been a lot.\"", say: "There's a particular kind of exhaustion that comes from caring for a sick parent.", a: "High certainty, low attribution", w: "An impersonal \"There is…\" statement: validating and high certainty without reading in much." }
      ]
    }
  ];
})();
