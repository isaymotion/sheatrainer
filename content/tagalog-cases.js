/*
  Psychiatric Interviewing Trainer — Tagalog-first simulated interviews (Bataan settings).

  These cases are written in Filipino first: the patient's lines (`p`) and your choices (`t`) are Tagalog or
  Taglish, with an English gloss in `en` that the app shows underneath. Cues, coaching (`fb`) and debriefs
  stay in English. `tl: true` on the simulation tells the renderer to show the gloss without the Sa Tagalog
  switch. Same node schema as the other simulations (see part1-practice.js).

  What they teach that the English cases cannot: the family in the room and hiya, when to move from kayo/po
  to ikaw, idioms of distress (nerbiyos, kulam) mapped to Shea's regions, and a reluctant kasama's collateral.
  Every case is composed for training and is DRAFT until reviewed by Dr. Navarro or a native-speaking clinician.
*/
(function () {
  var parts = window.TRAINER.parts;
  var host = parts.part1 || parts.part2 || Object.keys(parts).map(function (k) { return parts[k]; })[0];
  if (!host) return;
  host.simulations = host.simulations || [];

  host.simulations.push({
    id: "sim-nanay", tl: true, title: "Nasa kuwarto si Nanay", chapters: [3, 7],
    setting: "Outpatient department, Mariveles, mid-morning.",
    who: "Liza, 23, a former cashier who stopped going to work two months ago. Her mother brought her and sits beside her, handbag on her lap, answering before Liza can.",
    goal: "Honour the mother without letting her run the interview, earn some time alone with Liza, and open the mood and safety regions.",
    startB: 40, start: "n1",
    nodes: {
      n1: { p: "(Nanay) Dok, mula pa noong Hunyo, nakakulong lang siya sa kuwarto. Hindi kumakain, hindi naliligo. Sinasabi ko sa kanya, magdasal ka, pero ayaw.",
        en: "(Mother) Doctor, since June she's just been shut in her room. Not eating, not bathing. I tell her to pray, but she won't.",
        cue: "Liza looks at the floor. Her mother holds her elbow.",
        choices: [
          { t: "Salamat po, Nanay; malaking tulong po iyon. Mamaya po, tatanungin ko kayo nang mas detalyado. Liza, ikaw muna: ano ang pakiramdam mo nitong mga araw na ito?", en: "Thank you, Nanay; that helps a lot. Later I'll ask you in more detail. Liza, you first: how have you been feeling these days?", b: 10, d: 6, fb: "You honoured the mother, promised her a turn, and addressed Liza by name with ikaw. The mother is not shamed and Liza hears that the interview is hers.", next: "n2" },
          { t: "Nanay, pakihintay po muna sa labas. Si Liza po ang pasyente ko.", en: "Nanay, please wait outside first. Liza is my patient.", b: -10, d: 2, fb: "True, and said too soon. In a Filipino family the mother is the gatekeeper; sent out in the first minute she may take Liza home. Ask for time alone later, with a reason, after she has been heard.", next: "n1x" },
          { t: "Sige po, Nanay. Kailan po siya huling kumain nang maayos, at ilang kilo na po ang nawala sa kanya?", en: "All right, Nanay. When did she last eat properly, and how much weight has she lost?", b: -2, d: 4, fb: "Useful facts, but you have confirmed that the interview belongs to the mother. Liza sinks further into the chair.", next: "n1y" }
        ] },
      n1x: { p: "(Nanay) Ako ang nagdala sa kanya dito, Dok. Hindi siya magsasalita kung wala ako.",
        en: "(Mother) I'm the one who brought her here, Doctor. She won't talk if I'm not here.",
        cue: "She tightens her grip on Liza's arm. Liza says nothing.",
        choices: [
          { t: "Tama po kayo, at salamat po sa pagdadala sa kanya. Manatili po muna kayo. Liza, puwede bang ikaw naman ang magkuwento?", en: "You're right, and thank you for bringing her. Please stay for now. Liza, could you tell it yourself?", b: 8, d: 3, fb: "A recovery: you conceded, kept her in the room, and turned to Liza. The alliance with the mother survives.", next: "n2" },
          { t: "Policy po namin iyon.", en: "That's our policy.", b: -12, d: 0, fb: "Hiding behind policy with a worried mother ends the conversation. 'Policy' is not an explanation she can accept in front of her daughter.", next: "endLeft" }
        ] },
      n1y: { p: "(Nanay) Mga sampung kilo na, Dok. At ang kuwarto niya, Dok, hindi niya nililinis. Noong bata siya, hindi naman siya ganyan.",
        en: "(Mother) About ten kilos, Doctor. And her room, Doctor, she doesn't clean it. When she was a child she wasn't like this.",
        cue: "Liza's eyes are wet. She has not spoken.",
        choices: [
          { t: "Maraming salamat po. Liza, narinig ko ang kuwento ni Nanay. Gusto kong marinig kung paano mo ito nararanasan. Ano ang pinakamahirap nitong mga araw na ito?", en: "Thank you very much. Liza, I've heard Nanay's account. I'd like to hear how you experience it. What's been hardest these past days?", b: 8, d: 4, fb: "You closed the mother's turn with thanks and moved the floor to Liza with an open question. Late, but it works.", next: "n2" },
          { t: "Ano pa po ang napansin ninyo, Nanay?", en: "What else have you noticed, Nanay?", b: -6, d: 3, fb: "The database grows and the patient disappears. Shea's warning: the person beneath the diagnosis is the one who has to come back next week.", next: "n1y2" }
        ] },
      n1y2: { p: "(Nanay) Ayan po, Dok, umiiyak na naman. Ganyan talaga siya.",
        en: "(Mother) There, Doctor, she's crying again. That's how she is.",
        cue: "Liza turns her face away.",
        choices: [
          { t: "Liza, okay lang umiyak dito. Nanay, puwede po bang bigyan ninyo kami ni Liza ng ilang minuto? Pagkatapos, kayo naman po ang kakausapin ko.", en: "Liza, it's all right to cry here. Nanay, could you give Liza and me a few minutes? After that, I'll talk with you.", b: 6, d: 3, fb: "You answered Liza first, then asked for time alone with a reason and a promise. Most mothers accept this once they have been heard.", next: "n3" },
          { t: "Nanay, hayaan po natin siyang umiyak. Ituloy po natin: nag-iinom po ba siya ng gamot?", en: "Nanay, let's let her cry. Let's continue: does she take any medication?", b: -8, d: 2, fb: "Talking across a crying patient to her mother tells Liza she is a topic, not a person.", next: "endMissed" }
        ] },
      n2: { p: "(Liza, softly) Wala lang po, Dok. Pagod lang po ako. Hindi ko po alam.",
        en: "(Liza, softly) It's nothing, Doctor. I'm just tired. I don't know.",
        cue: "Her mother opens her mouth to add something.",
        choices: [
          { t: "Pagod. Ikuwento mo sa akin ang isang karaniwang araw mo ngayon, mula paggising.", en: "Tired. Tell me about a typical day for you now, from waking up.", b: 6, d: 8, fb: "A behavioral incident on her own word keeps the floor with Liza and starts the neurovegetative inventory without jargon.", next: "n3" },
          { t: "Nanay, ano po ang ibig niyang sabihin na pagod?", en: "Nanay, what does she mean by tired?", b: -8, d: 1, fb: "You handed the floor straight back to the mother after Liza's first sentence. She will not try again soon.", next: "n1y" },
          { t: "Depressed ka ba?", en: "Are you depressed?", b: -3, d: 2, fb: "A closed, jargon question to a young woman who just said 'hindi ko alam'. It invites a shrug.", next: "n2x" }
        ] },
      n2x: { p: "(Liza) Hindi ko po alam, Dok. Siguro.",
        en: "(Liza) I don't know, Doctor. Maybe.",
        cue: "A shrug. The mother sighs.",
        choices: [
          { t: "Okay lang. Hindi mo kailangang pangalanan. Ikuwento mo na lang ang isang karaniwang araw mo ngayon.", en: "That's okay. You don't have to name it. Just tell me about a typical day for you now.", b: 5, d: 6, fb: "You dropped the label and asked for the day. Good repair.", next: "n3" },
          { t: "Kailangan kong malaman para sa diagnosis.", en: "I need to know for the diagnosis.", b: -6, d: 0, fb: "Your need is not her motive. The interview becomes a form.", next: "endMissed" }
        ] },
      n3: { p: "(Liza) Nagigising ako nang alas-tres, tapos hindi na makatulog. Nakahiga lang ako. Nakakahiya po, kasi nag-resign ako, tapos si Nanay ang nagpapakain sa akin.",
        en: "(Liza) I wake up at three and can't get back to sleep. I just lie there. It's shameful, because I resigned and now Nanay is the one feeding me.",
        cue: "She glances at her mother, then down.",
        choices: [
          { t: "Mabigat iyon, lalo na't iniisip mo si Nanay. Maraming tao na ganito kabigat ang pakiramdam ang nag-iisip na mas mabuti pang mawala na lang. Nangyari na ba iyon sa 'yo?", en: "That's heavy, especially when you're thinking of Nanay. Many people who feel this heavy think it would be better to just disappear. Has that happened to you?", b: 6, d: 10, fb: "Early waking, guilt and burdensomeness: you heard the themes of Chapter 10 and used normalization to raise suicide with her mother present, in words that do not shame her.", next: "n4" },
          { t: "Nanay, totoo po ba na nag-resign siya?", en: "Nanay, is it true that she resigned?", b: -8, d: 1, fb: "Checking Liza's account with her mother in front of her says you do not believe her.", next: "n1y" },
          { t: "Huwag kang mahiya. Normal lang iyan.", en: "Don't be ashamed. That's normal.", b: -2, d: 0, fb: "Reassurance that argues with her feeling, and the door she opened on burdensomeness closes.", next: "n3x" }
        ] },
      n3x: { p: "(Liza) Sige po.",
        en: "(Liza) Okay.",
        cue: "Flat. The opening has passed.",
        choices: [
          { t: "Balikan natin ang sinabi mo: si Nanay ang nagpapakain sa 'yo. May mga tao na, kapag ganito ang pakiramdam, naiisip na pabigat sila. Naisip mo na ba iyon?", en: "Let's go back to what you said: Nanay is the one feeding you. Some people, when they feel like this, start to think they're a burden. Have you thought that?", b: 5, d: 8, fb: "You returned to her words and raised burdensomeness gently. The door reopens.", next: "n4" },
          { t: "Okay. Kumusta naman ang gana mo sa pagkain?", en: "Okay. How's your appetite?", b: 0, d: 3, fb: "Safe, factual, and the suicide inquiry is now further away than it was.", next: "endMissed" }
        ] },
      n4: { p: "(Liza, very quietly) Minsan po. Para hindi na ako pabigat.",
        en: "(Liza, very quietly) Sometimes. So I wouldn't be a burden anymore.",
        cue: "Her mother's hand goes to her mouth. The room is silent.",
        choices: [
          { t: "Salamat sa pagsasabi. Nanay, mahalaga po na narinig ninyo iyon, at mag-uusap po tayo tungkol dito. Liza, kapag naiisip mo iyon, naisip mo na ba kung paano?", en: "Thank you for telling me. Nanay, it matters that you heard that, and we'll talk about it. Liza, when you think that, have you thought about how?", b: 6, d: 10, fb: "You held both people, then moved to methods with a plain question. The CASE Approach continues from here, and the mother becomes part of the safety plan rather than a bystander.", next: "endGood" },
          { t: "(to the mother) Nanay, narinig ninyo? Kailangan po siyang bantayan.", en: "(to the mother) Nanay, did you hear? She needs to be watched.", b: -8, d: 2, fb: "Liza's disclosure has been handed to her mother as an instruction. She learns that honesty leads to surveillance.", next: "endMixed" }
        ] },
      endGood: { end: true, p: "(Liza) Hindi pa po. Pero natatakot ako na baka dumating ako doon.",
        en: "(Liza) Not yet. But I'm scared I might get there.",
        cue: "She looks at you for the first time. Her mother is crying quietly.",
        debrief: "You honoured the mother, earned the floor for Liza without shaming either of them, heard early waking, guilt and burdensomeness as the themes they are, and raised suicide with normalization in words that Liza could answer in front of her mother. From here: finish the CASE Approach (methods, past events, immediate intent), bring the mother into a safety plan, and get supervision. Chapter 3 on the opening with families; Chapter 7 on collateral; Chapters 10 and 17 on burdensomeness and suicidal ideation." },
      endMixed: { end: true, p: "(Liza) Hindi na po ako magsasalita.",
        en: "(Liza) I'm not going to say any more.",
        cue: "Arms crossed. The mother is already asking you what to do.",
        debrief: "You learned there is suicidal ideation and the mother now knows, which matters. But the disclosure was turned into an order to the family before you explored it, and Liza has closed. In practice: come back to Liza, apologize for moving too fast, and ask for a few minutes alone before the methods questions." },
      endMissed: { end: true, p: "(Nanay) Kaya nga po, Dok. Bigyan niyo na lang po siya ng gamot.",
        en: "(Mother) That's what I'm saying, Doctor. Just give her medicine.",
        cue: "Liza has not spoken for several minutes.",
        debrief: "The interview ended as a conversation between you and the mother, with a prescription as its goal. The sleep, guilt and burdensomeness themes were in the room and the suicide inquiry never happened. Next time: thank the mother, set a sequence, address Liza by name, and ask for time alone once the mother has been heard." },
      endLeft: { end: true, p: "(Nanay) Tara na, Liza. Hahanap na lang tayo ng ibang doktor.",
        en: "(Mother) Let's go, Liza. We'll just find another doctor.",
        cue: "They leave together.",
        debrief: "The gatekeeper was dismissed before she was heard, and she took the patient with her. In Filipino families the first alliance is often with the relative who brought the patient; earn it first, then ask for time alone with a reason and a promise." }
    }
  });

  host.simulations.push({
    id: "sim-nerbiyos", tl: true, title: "Nerbiyos daw", chapters: [6, 10],
    setting: "Rural health unit referral, outpatient department, afternoon. A fishing barangay outside Mariveles.",
    who: "Aling Rosa, 41, sells fish at the market. Referred after three visits to the RHU for chest heaviness, dizziness and 'nerbiyos' with normal tests. Her husband waits outside; her sister-in-law thinks she has been 'nakulam'.",
    goal: "Take the idiom seriously, move from the body to the mood and anxiety regions without dismissing her, and handle the kulam explanation without arguing or endorsing.",
    startB: 45, start: "n1",
    nodes: {
      n1: { p: "Nerbiyos daw po, Dok, sabi sa RHU. Pero ramdam ko po talaga: mabigat ang dibdib ko, nahihilo ako, parang mamamatay ako. Normal daw lahat ng test. Hindi ko po alam kung bakit ako pinapunta dito.",
        en: "They said at the RHU it's nerbiyos, Doctor. But I really feel it: my chest is heavy, I get dizzy, I feel like I'm going to die. All the tests are normal, they say. I don't know why they sent me here.",
        cue: "She presses a hand to her sternum. She is watching your face for the dismissal she expects.",
        choices: [
          { t: "Totoo po ang nararamdaman ninyo, kahit normal ang mga test. Ikuwento po ninyo ang pinakahuling beses na naramdaman ninyo iyon: nasaan kayo, anong oras, ano ang nangyari?", en: "What you're feeling is real, even though the tests are normal. Tell me about the last time you felt it: where were you, what time, what happened?", b: 10, d: 8, fb: "You validated the symptom (not the cause) and asked for a behavioral incident. The body is the first messenger; you let it speak.", next: "n2" },
          { t: "Wala po kayong sakit sa katawan. Sa isip po ito.", en: "There's nothing wrong with your body. This is in the mind.", b: -12, d: 0, fb: "Exactly the dismissal she expected, in the words that make 'nerbiyos' an insult. She will go back to the RHU.", next: "n1x" },
          { t: "May problema po ba kayo sa bahay? Sa asawa ninyo?", en: "Do you have problems at home? With your husband?", b: -4, d: 2, fb: "You jumped past her body to a cause you have guessed. It may be right, and it will feel like an accusation.", next: "n1x" }
        ] },
      n1x: { p: "Kaya nga po, Dok. Lahat kayo, sa isip daw. Pero ang sakit ng dibdib ko, hindi ko iniimbento.",
        en: "That's just it, Doctor. All of you say it's in the mind. But the pain in my chest, I'm not inventing it.",
        cue: "She gathers her bag onto her lap.",
        choices: [
          { t: "Tama po kayo, hindi po ninyo iniimbento. Pasensya na po. Balikan po natin ang dibdib ninyo: kailan po ito huling umatake, at ano ang nangyari noon?", en: "You're right, you're not inventing it. I'm sorry. Let's go back to your chest: when did it last attack, and what happened then?", b: 8, d: 6, fb: "An apology and a return to the body. She puts the bag down.", next: "n2" },
          { t: "Hindi ko po sinabing iniimbento ninyo.", en: "I didn't say you were inventing it.", b: -6, d: 0, fb: "Defending your words instead of hearing hers. The argument is about you now.", next: "endLeft" }
        ] },
      n2: { p: "Noong Martes po, sa palengke. Alas-singko ng umaga, nagbubuhat ako ng isda, tapos biglang parang hindi ako makahinga, nanlamig ang kamay ko, akala ko atake sa puso. Mga sampung minuto, tapos nawala. Pero mula noon, natatakot na akong pumunta sa palengke.",
        en: "On Tuesday, at the market. Five in the morning, I was lifting fish, then suddenly I couldn't breathe, my hands went cold, I thought it was a heart attack. About ten minutes, then it passed. But since then I'm afraid to go to the market.",
        cue: "Her hand is still on her chest. Her voice is steadier now that she is describing, not defending.",
        choices: [
          { t: "Sampung minuto, tapos nawala, at ngayon natatakot na kayong bumalik. May pangalan po ang ganyang atake, at gumagaling ito. Ilang beses na po ito nangyari sa isang buwan?", en: "Ten minutes, then it passed, and now you're afraid to go back. That kind of attack has a name, and it gets better. How many times has it happened in a month?", b: 8, d: 10, fb: "You reflected the structure of a panic attack and its avoidance, offered hope without jargon, and started counting frequency. The anxiety region is open.", next: "n3" },
          { t: "Panic attack po iyan. Hindi po iyan delikado.", en: "That's a panic attack. It's not dangerous.", b: 0, d: 4, fb: "Correct and too quick. 'Hindi delikado' lands as 'hindi seryoso' to someone who thought she was dying.", next: "n3" },
          { t: "Siguro po mabigat lang ang isda. Mag-ingat po kayo sa pagbubuhat.", en: "Maybe the fish was just heavy. Be careful lifting.", b: -6, d: 0, fb: "You have joined the RHU in explaining it away.", next: "endMissed" }
        ] },
      n3: { p: "Mga apat o lima, Dok. Pero hindi lang po iyon. Simula noong Hunyo, hindi na ako makatulog, wala akong gana, umiiyak ako nang walang dahilan. Sabi ng hipag ko, nakulam daw ako. May nainggit daw sa puwesto ko sa palengke.",
        en: "About four or five, Doctor. But it's not only that. Since June I can't sleep, I have no appetite, I cry for no reason. My sister-in-law says I've been nakulam. Someone was envious of my stall at the market, she says.",
        cue: "She watches you closely as she says kulam.",
        choices: [
          { t: "Hunyo pa pala: tulog, gana, pag-iyak. Mahalaga po iyon at babalikan natin. Tungkol sa kulam: kayo po, ano ang paniniwala ninyo tungkol sa nangyayari sa inyo?", en: "Since June, then: sleep, appetite, crying. That matters and we'll come back to it. About the kulam: you yourself, what do you believe is happening to you?", b: 8, d: 8, fb: "You registered the depressive symptoms, promised to return, and asked for her own explanatory model without arguing with the sister-in-law's. This is how Chapter 6 asks about the person beneath the diagnosis.", next: "n4" },
          { t: "Walang kulam, Aling Rosa. Depression po ang tawag diyan.", en: "There's no such thing as kulam, Aling Rosa. That's called depression.", b: -10, d: 2, fb: "Right label, wrong move. You have called her family wrong and given her a diagnosis she cannot take home to them.", next: "n3x" },
          { t: "Sino po ang nainggit? Ano po ang ginawa nila?", en: "Who was envious? What did they do?", b: 2, d: 2, fb: "Interested, and it pulls you into the kulam story before you know what she herself believes.", next: "n4" }
        ] },
      n3x: { p: "Hindi ko po sinabing naniniwala ako, Dok. Sinabi ko, sabi ng hipag ko.",
        en: "I didn't say I believe it, Doctor. I said my sister-in-law says so.",
        cue: "She is embarrassed for you and for herself.",
        choices: [
          { t: "Tama po kayo, pasensya na. Kayo po, ano sa tingin ninyo ang nangyayari sa inyo?", en: "You're right, I'm sorry. You yourself, what do you think is happening to you?", b: 6, d: 5, fb: "Recovered. Her own model is what you needed.", next: "n4" },
          { t: "Mabuti naman po. Ituloy natin.", en: "Good. Let's continue.", b: -3, d: 2, fb: "You missed that she was offering you the family's view to see what you would do with it.", next: "n4" }
        ] },
      n4: { p: "Ewan ko po, Dok. Minsan iniisip ko, baka totoo. Minsan iniisip ko, baka napapagod lang ako. Si Mister, sabi, kulang lang sa dasal. Nakakahiya po sa kanila na ganito ako.",
        en: "I don't know, Doctor. Sometimes I think maybe it's true. Sometimes I think maybe I'm just exhausted. My husband says I just need to pray more. It's shameful to them that I'm like this.",
        cue: "She wipes her eyes with the back of her hand.",
        choices: [
          { t: "Hindi po kasalanan ninyo ito, at hindi po ito kakulangan sa dasal. May sakit po na ganito ang hitsura: atake sa dibdib, hindi makatulog, walang gana, pag-iyak, at mahiyain itong magpakita. Gumagaling po ito. Puwede po bang isama natin si Mister mamaya para maipaliwanag ko sa kanya rin?", en: "This isn't your fault, and it isn't a lack of prayer. There's an illness that looks exactly like this: chest attacks, no sleep, no appetite, crying, and it's shy about showing itself. It gets better. Could we bring your husband in later so I can explain it to him too?", b: 10, d: 6, fb: "You named an illness in her words, took the blame off her, and offered to bring the family in, which is how the kulam explanation loses its grip without a fight.", next: "endGood" },
          { t: "Kung naniniwala po kayo sa kulam, walang gamot na tatalab.", en: "If you believe in kulam, no medicine will work.", b: -10, d: 0, fb: "A threat dressed as a fact. She hears that you have given up on her.", next: "endLeft" },
          { t: "Okay po. Sa mga nakaraang linggo, may naisip po ba kayong saktan ang sarili ninyo?", en: "Okay. In the past weeks, have you thought of hurting yourself?", b: 2, d: 6, fb: "An important question, and placed before you answered the shame she just showed you. Ask it, but answer her first.", next: "endOk" }
        ] },
      endGood: { end: true, p: "Puwede po, Dok. Salamat po. Akala ko, sasabihin din ninyong sa isip ko lang.",
        en: "Yes, Doctor. Thank you. I thought you'd also say it was just in my mind.",
        cue: "Her hand has left her chest.",
        debrief: "You took 'nerbiyos' and the chest heaviness seriously, got the verbal video of a panic attack, heard the depressive syndrome behind it, asked for her own explanatory model instead of arguing with her sister-in-law's, and offered the family a place in the explanation. Still to do: the suicide inquiry (she has guilt and shame; ask), alcohol and medical screens, and the husband's collateral. Chapter 6 on the person beneath the diagnosis; Chapter 10 on the body as first messenger; Chapter 12 on culture and language." },
      endOk: { end: true, p: "Hindi naman po. Pero pagod na pagod na ako.",
        en: "No. But I am so tired.",
        cue: "She has stopped crying and is looking at the door.",
        debrief: "You reached the depression and asked about self-harm, which is right. But the shame she showed you ('nakakahiya sa kanila') was left unanswered, and the family's kulam explanation will meet her at the door. Next time, answer the shame, name the illness in her words, and invite the husband in before the safety question." },
      endMissed: { end: true, p: "Sige po, Dok. Mag-iingat na lang po ako sa pagbubuhat.",
        en: "Okay, Doctor. I'll just be careful lifting.",
        cue: "She thanks you politely and leaves with the same symptoms she came with.",
        debrief: "The body spoke and was explained away, so the panic disorder, the depression and the family's kulam story all went home untouched. 'Nerbiyos' with normal tests is an invitation to take the symptom seriously and build the incident." },
      endLeft: { end: true, p: "Salamat na lang po, Dok.",
        en: "Thank you anyway, Doctor.",
        cue: "She leaves. Her husband looks at you through the door.",
        debrief: "Arguing with the patient (or her family) about the explanation cost the alliance. Shea's approach to culture: validate the experience, ask for the patient's own model, and never make her choose between you and her family in the first visit." }
    }
  });

  host.simulations.push({
    id: "sim-kasama", tl: true, title: "Ang kasama", chapters: [5, 7],
    setting: "Emergency department, Mariveles, 11 p.m. The patient, Mang Ben, 58, is being sutured for a scalp wound after a fall at home and is drowsy.",
    who: "Kuya Erning, 35, Mang Ben's nephew and housemate, who brought him in on a tricycle. He is polite, tired, and careful with his words.",
    goal: "Get usable collateral about alcohol and the fall from a relative who does not want to shame his uncle, using normalization, shame attenuation and gentle assumption.",
    startB: 45, start: "n1",
    nodes: {
      n1: { p: "Nadulas lang po siya sa banyo, Dok. Matanda na po kasi. Wala naman pong iba.",
        en: "He just slipped in the bathroom, Doctor. He's old, you see. Nothing else.",
        cue: "He does not quite meet your eyes. Mang Ben's breath smelled of alcohol when he came in.",
        choices: [
          { t: "Salamat po sa pagdadala sa kanya, Kuya. Madalas po, kapag may nahulog sa bahay, may nainom muna. Hindi po iyon masama; kailangan ko lang malaman para sa gamot. Nakainom po ba siya kanina?", en: "Thank you for bringing him, Kuya. Often, when someone falls at home, they've had something to drink first. That's not a bad thing; I just need to know for his medication. Had he been drinking earlier?", b: 8, d: 8, fb: "Normalization with a medical reason that lets Erning answer without betraying his uncle. The door opens.", next: "n2" },
          { t: "Amoy alak po siya, Kuya. Lasing po ba siya?", en: "He smells of alcohol, Kuya. Is he drunk?", b: -6, d: 3, fb: "True, and 'lasing' is the word that makes a nephew defend his uncle. Expect a denial.", next: "n1x" },
          { t: "Sige po. Ilang beses na po siyang nahulog?", en: "Okay. How many times has he fallen?", b: 2, d: 3, fb: "A fair fact question that accepts the frame of a simple fall and leaves the alcohol for later, when it will be harder to raise.", next: "n1y" }
        ] },
      n1x: { p: "Hindi po, Dok. Konti lang po siguro, pampatulog. Hindi po siya lasenggo.",
        en: "No, Doctor. Maybe just a little, to help him sleep. He's not a drunkard.",
        cue: "He has stepped half a pace back.",
        choices: [
          { t: "Pasensya na po, mali ang salita ko. Hindi ko po siya hinuhusgahan. Kailangan ko lang po malaman kung gaano kadalas, dahil may gamot na delikado kapag may alak.", en: "I'm sorry, that was the wrong word. I'm not judging him. I just need to know how often, because some medicines are dangerous with alcohol.", b: 6, d: 4, fb: "An apology, a reason, and the alliance comes back.", next: "n2" },
          { t: "Kuya, kailangan ninyong sabihin ang totoo.", en: "Kuya, you need to tell the truth.", b: -8, d: 0, fb: "You have called him a liar in defence of his uncle. He will tell you nothing more tonight.", next: "endMissed" }
        ] },
      n1y: { p: "Pangatlo na po siguro ngayong taon, Dok. Pero maliliit lang po.",
        en: "Maybe the third time this year, Doctor. But just small ones.",
        cue: "He adds 'maliliit lang' quickly.",
        choices: [
          { t: "Pangatlo na. Madalas po, kapag paulit-ulit ang pagkahulog, may kinalaman ang inumin. Hindi po iyon kahihiyan; marami pong ganoon dito. Nakainom po ba siya ngayong gabi?", en: "The third time. Often, when falls keep happening, drink has something to do with it. That's nothing to be ashamed of; there are many like that here. Had he been drinking tonight?", b: 6, d: 7, fb: "You used the pattern he gave you, normalized, and asked. Late but well done.", next: "n2" },
          { t: "Okay po. Baka kailangan na niya ng tungkod.", en: "Okay. Maybe he needs a cane.", b: 0, d: 1, fb: "A cane for a man who falls when he drinks. The real cause stays hidden.", next: "endMissed" }
        ] },
      n2: { p: "Nakainom po, Dok. Gin, pagkatapos ng hapunan. Pero araw-araw naman po iyon, hindi po iyon bago. Nakakahiya pong sabihin, pamilya ko po siya.",
        en: "He had been drinking, Doctor. Gin, after dinner. But that's every day; it's nothing new. It's shameful to say; he's my family.",
        cue: "He lowers his voice although his uncle is asleep.",
        choices: [
          { t: "Naiintindihan ko po, at mabuti po na sinabi ninyo; makakatulong po iyon sa kanya. Sa mga gabing pinakamarami siyang nainom, ilang bote po? Dalawang lapad? Tatlo?", en: "I understand, and it's good that you told me; it will help him. On the nights he drinks the most, how many bottles? Two flat bottles? Three?", b: 6, d: 10, fb: "Shame attenuation (you did this for him), then symptom amplification with a high anchor in the units he uses. The real number comes out.", next: "n3" },
          { t: "Araw-araw? Bakit hindi ninyo siya pinipigilan?", en: "Every day? Why don't you stop him?", b: -10, d: 1, fb: "The nephew who brought his uncle to hospital at 11 p.m. has just been blamed for his drinking.", next: "endMissed" },
          { t: "Konti lang po ba, isang baso?", en: "Just a little, one glass?", b: 0, d: 2, fb: "A low anchor invites 'oo, isang baso'. You will record a quarter of the truth.", next: "n3low" }
        ] },
      n3low: { p: "Mga ganoon na nga po, Dok. Isa o dalawang baso.",
        en: "About that, Doctor. One or two glasses.",
        cue: "He looks relieved.",
        choices: [
          { t: "Sa mga gabing pinakamarami, Kuya, lampas po ba sa isang lapad? Dalawa?", en: "On the heaviest nights, Kuya, is it more than one flat bottle? Two?", b: 2, d: 6, fb: "A second try with a high anchor. He revises upward.", next: "n3" },
          { t: "Okay po, salamat.", en: "Okay, thank you.", b: 0, d: 0, fb: "One or two glasses goes in the chart. The withdrawal risk tomorrow is now a surprise.", next: "endMissed" }
        ] },
      n3: { p: "Minsan po dalawang lapad, Dok. Tuwing sahod, mas marami. Sa umaga po, nanginginig ang kamay niya hanggang makainom ulit.",
        en: "Sometimes two flat bottles, Doctor. On payday, more. In the morning his hands shake until he drinks again.",
        cue: "He is talking freely now.",
        choices: [
          { t: "Mahalaga po iyon: ang panginginig sa umaga. Kailan po siya huling uminom, anong oras? At nagkaroon na po ba siya ng kombulsyon o nakakita ng mga bagay na wala naman, pagkatapos tumigil?", en: "That's important: the morning shaking. When did he last drink, what time? And has he ever had a seizure, or seen things that weren't there, after stopping?", b: 6, d: 10, fb: "You heard withdrawal and asked the questions that change tonight's management: time of last drink, seizures, hallucinations. Gentle assumption keeps the flow.", next: "endGood" },
          { t: "Alcoholic po pala siya.", en: "So he's an alcoholic.", b: -6, d: 2, fb: "A label spoken to the family at 11 p.m., with nothing about what happens next. The disclosure feels like a verdict.", next: "endOk" }
        ] },
      endGood: { end: true, p: "Kaninang alas-siyete po, Dok. Noong isang taon, nang tumigil siya ng tatlong araw, nakita daw niya ang mga daga sa dingding. Dinala namin sa Balanga. Hindi ko po alam na mahalaga iyon.",
        en: "At seven tonight, Doctor. Last year, when he stopped for three days, he said he saw rats on the wall. We took him to Balanga. I didn't know that mattered.",
        cue: "He looks at his uncle, then back at you.",
        debrief: "A reluctant relative gave you a full alcohol history, a withdrawal pattern and a prior episode of delirium, because you normalized, gave a medical reason, attenuated his shame and anchored high. That history changes tonight's care. Chapter 5 on validity techniques; Chapter 7 on collateral; the Usap Tayo alcohol withdrawal section for the CIWA-Ar questions in Tagalog." },
      endOk: { end: true, p: "Hindi ko po alam, Dok. Bahala na po kayo.",
        en: "I don't know, Doctor. It's up to you.",
        cue: "He has gone quiet again.",
        debrief: "You got the drinking pattern and the morning shakes, which is most of what you needed. But the label ended the conversation before the time of last drink and the prior withdrawal history. Keep the family talking until the safety questions are done; labels can wait for the morning." },
      endMissed: { end: true, p: "Sige po, Dok. Salamat po.",
        en: "Okay, Doctor. Thank you.",
        cue: "He sits down by his uncle and says nothing more.",
        debrief: "The collateral closed. Mang Ben's alcohol history, withdrawal risk and prior delirium were all in the room with Erning, and shame or blame shut them in. Normalize, give a reason, attenuate shame, anchor high, and never make the relative choose between you and his family." }
    }
  });
})();
