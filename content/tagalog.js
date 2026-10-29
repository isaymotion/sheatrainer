/*
  Psychiatric Interviewing Trainer — Tagalog links and the "Sabihin sa Tagalog" drill.

  Tagalog content lives in Usap Tayo (https://isaymotion.github.io/Tagalog/), the companion app,
  so phrases are written and reviewed in one place. This file only holds:
    1. links: which Usap Tayo section each study-guide section points to, with a one-line teaser
       (English + Tagalog) so the card is useful offline.
    2. one technique drill whose Tagalog options are specific to Shea's techniques.
  Every Tagalog line here is an original, conversational phrasing written for training (not from the
  book) and is marked DRAFT until reviewed by Dr. Navarro or a native-speaking clinician.
  Respectful register (po, kayo) is used in teasers; Usap Tayo shows the everyday register as well.

  links key: "chN:sectionId" -> { s: usapTayoSectionId, why, en?, tl? }   (s may be replaced by href)
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.tagalog = {
  app: "Usap Tayo",
  base: "https://isaymotion.github.io/Tagalog/#/psych/s/",
  status: "Draft Tagalog wording, under review.",
  sections: {
    opening: "Opening and rapport", consent: "Confidentiality and consent", "cc-hpi": "Chief complaint and history of present illness",
    depression: "Mood and depression", mania: "Mania and hypomania", anxiety: "Anxiety, panic, and OCD", trauma: "Trauma and PTSD",
    hallucinations: "Psychosis: hallucinations", delusions: "Psychosis: delusions", suicide: "Suicide and self-harm risk",
    violence: "Violence and homicide risk", deescalation: "De-escalation with an agitated patient", substance: "Alcohol, drugs, and gambling",
    history: "Past psychiatric, medical, and medication history", "family-hx": "Family history", social: "Personal and social history",
    collateral: "Collateral history from family", "mse-cog": "MSE: orientation, attention, memory", "mse-describe": "MSE: describing observations",
    explain: "Explaining diagnosis and treatment", closing: "Closing the interview", "shea-techniques": "Shea's validity techniques in Tagalog",
    meds: "Medication side effects and adherence", "wd-alcohol": "Alcohol withdrawal: asking, CIWA-Ar, explaining"
  },
  links: {
    "ch1:anger-paraphrase": { s: "deescalation", why: "Defusing statements and apologies, in the words an angry patient will actually hear.", en: "You're right to be upset about the wait. I'm sorry.", tl: "Tama po kayong mainis sa paghihintay. Pasensya na po." },
    "ch2:ocd": { s: "anxiety", why: "The normalizing OCD screen and the other anxiety questions, in Tagalog.", en: "Many people check the stove or the lock more than once. Does that happen to you?", tl: "Maraming tao ang paulit-ulit na tumitingin sa kalan o sa kandado. Nangyayari po ba iyon sa inyo?" },
    "ch2:collab": { s: "explain", why: "Explaining a diagnosis and a plan collaboratively.", en: "Before I explain, what do you think is going on?", tl: "Bago ko po ipaliwanag, ano po sa tingin ninyo ang nangyayari?" },
    "ch3:introduction": { s: "opening", why: "Introductions, names, and the first minutes of rapport.", en: "What would you like me to call you?", tl: "Ano po ang gusto ninyong itawag ko sa inyo?" },
    "ch3:confidentiality": { s: "consent", why: "Confidentiality and its limits, said simply." },
    "ch3:opening": { s: "cc-hpi", why: "Open questions for the chief complaint, and how to let the patient run.", en: "Tell me what brought you here today.", tl: "Ikuwento po ninyo kung ano ang nagdala sa inyo rito ngayon." },
    "ch3:closing": { s: "closing", why: "Closing with hope, summarizing, and asking what was missed.", en: "Is there anything we haven't talked about that you want me to know?", tl: "May hindi po ba tayo napag-usapan na gusto ninyong malaman ko?" },
    "ch4:expansions": { s: "depression", why: "The neurovegetative symptoms, phrased so they weave into conversation rather than sounding like a checklist." },
    "ch5:recall": { s: "shea-techniques", why: "Anchor questions and the other recall aids in Tagalog.", en: "Around the fiesta, were you already feeling this way, or did it start after?", tl: "Noong pista po, ganito na po ba ang pakiramdam ninyo, o nagsimula lang pagkatapos?" },
    "ch5:raising": { s: "shea-techniques", why: "Normalization and shame attenuation, worded for Filipino patients.", en: "Many people who are this stressed have thoughts of hurting themselves. Has that happened to you?", tl: "Maraming tao na ganito ka-stress ang nagkakaroon ng pag-iisip na saktan ang sarili. Nangyari na po ba iyon sa inyo?" },
    "ch5:behavioral-incident": { s: "shea-techniques", why: "Behavioral incidents: the sequence questions and the fact questions.", en: "What happened next? What did you do then?", tl: "Ano po ang sumunod na nangyari? Ano po ang ginawa ninyo pagkatapos?" },
    "ch5:finishing-lists": { s: "shea-techniques", why: "Gentle assumption, symptom amplification, denial of the specific, and the catch-all question.", en: "What other ways have you thought of ending your life?", tl: "Ano pa po ang ibang paraan na naisip ninyo para tapusin ang buhay ninyo?" },
    "ch5:special": { s: "substance", why: "Alcohol, drugs, and gambling, with the amplified quantity questions." },
    "ch6:wellness": { s: "social", why: "Interests, work, relationships, and strengths: the wellness triad in Tagalog." },
    "ch6:culture-glasses": { href: "https://isaymotion.github.io/Tagalog/#/lessons/idioms-distress", title: "Lesson: idioms of distress", why: "Mabigat ang dibdib, nerbiyos, tulala: how Filipino patients name distress." },
    "ch8:violence": { s: "deescalation", why: "The de-escalation phrases and the hospital's 12-step checklist.", en: "I'm here to help, not to force you. Let's sit down and talk.", tl: "Nandito po ako para tumulong, hindi para pilitin kayo. Maupo po tayo at mag-usap." },
    "ch9:exploring": { s: "depression", why: "Anhedonia, sleep, appetite, energy, and libido in Tagalog.", en: "Lately, do you still enjoy the things you used to enjoy, or has that changed?", tl: "Nitong mga nakaraang linggo, nasisiyahan pa po ba kayo sa mga bagay na dati ninyong kinagigiliwan, o nagbago na?" },
    "ch9:melancholia-anxiety": { s: "history", why: "Past diagnoses, admissions, medications, and therapy.", en: "Have you ever been admitted, or seen a doctor, for your nerves or your mood?", tl: "Na-admit na po ba kayo, o nagpatingin sa doktor, dahil sa nerbiyos o sa pakiramdam ninyo?" },
    "ch9:bipolar-trap": { s: "mania", why: "The 'just the opposite' question and the manic symptoms.", en: "Has there ever been a stretch of days when you felt the opposite: full of energy, hardly needing sleep, ready to take on anything?", tl: "Nagkaroon na po ba ng ilang araw na kabaligtaran ang pakiramdam ninyo: sobrang lakas ng enerhiya, halos hindi na kailangang matulog, kayang-kaya ang lahat?" },
    "ch9:mixed-states": { s: "shea-techniques", why: "The drivenness question that separates a dysphoric mania from an agitated depression.", en: "Do you feel you have to do something about this right now, even if part of you knows it isn't wise?", tl: "Pakiramdam po ba ninyo kailangan ninyong gumawa ng aksyon ngayon na, kahit alam ninyong hindi ito matalino?" },
    "ch9:soft-bipolarity": { s: "mania", why: "The two hypomania screens, with the 'odd to you' clause.", en: "Do you get spells, even just hours, when you suddenly feel unusually up and energized for no reason, and it strikes you as odd?", tl: "May mga pagkakataon po ba, kahit ilang oras lang, na bigla kayong sumisigla nang sobra na walang dahilan, at kakaiba ito para sa inyo?" },
    "ch9:disguise": { s: "depression", why: "Sad, unhappy, not yourself, and nerbiyos: the words that reach a patient who denies depression.", en: "When was the last time you felt like crying?", tl: "Kailan po ang huling beses na naramdaman ninyong gusto ninyong umiyak?" },
    "ch9:persistence": { s: "cc-hpi", why: "Dating the onset and framing the two-week window.", en: "Just the past two weeks now: how has your sleep been?", tl: "Nitong nakaraang dalawang linggo lang po: kumusta ang tulog ninyo?" },
    "ch9:family-history": { s: "family-hx", why: "Naming the relatives, saying alcohol out loud, and asking about suicide separately.", en: "Has anyone in your family ever tried to take their own life, or died that way?", tl: "May kamag-anak po ba kayong sumubok magpakamatay, o namatay sa ganoong paraan?" },
    "ch10:biological": { s: "depression", why: "Asking how the body feels, and what losing energy and appetite has done to the person's view of themselves.", en: "What has your body felt like to you lately?", tl: "Ano po ang pakiramdam ng katawan ninyo nitong mga nakaraang araw?" },
    "ch10:window-shade": { s: "depression", why: "The window shade question, phrased so sleepiness is excluded and the oddness is named.", en: "When it's at its worst, do you get a strong urge just to close your eyes, not to sleep, but to shut everything out?", tl: "Kapag pinakamalala po, nakakaramdam ba kayo ng matinding gustong ipikit lang ang mga mata, hindi para matulog, kundi para isara ang lahat?" },
    "ch10:themes": { s: "suicide", why: "Burdensomeness and hopelessness lead straight into the suicide questions in Tagalog.", en: "Sometimes when people feel they're a burden, they think their family would be better off without them. Has that thought come to you?", tl: "Minsan po, kapag pakiramdam ng isang tao na pabigat siya, naiisip niyang mas mabuti pa para sa pamilya kung wala siya. Sumagi na po ba sa isip ninyo ang ganoon?" },
    "ch10:tears": { s: "shea-techniques", why: "Naming tears and normalizing them without closing the moment.", en: "It's all right to cry. It's the body's way of telling us we're hurting.", tl: "Ayos lang po umiyak. Paraan ito ng katawan para sabihing nasasaktan tayo." },
    "ch10:family": { s: "collateral", why: "Talking with the family: their account, their exhaustion, and who is supporting them.", en: "I can see how much you're carrying for your mother. I'm wondering who is supporting you.", tl: "Nakikita ko po kung gaano kalaki ang pinapasan ninyo para sa inyong ina. Sino po ang umaalalay sa inyo?" },
    "ch11:visual-withdrawal": { s: "wd-alcohol", why: "Asking about withdrawal symptoms matter-of-factly, without the word 'problem', then scoring the CIWA-Ar in Tagalog.", en: "Since you stopped drinking, has your sleep been off? Any shakiness, or feeling sick to your stomach?", tl: "Mula nang tumigil kayo sa pag-inom, naapektuhan po ba ang tulog ninyo? Nanginginig po ba kayo, o nasusuka?" },
    "ch11:schizophrenia": { s: "hallucinations", why: "Asking about voices directly, and asking the family what they have seen at home.", en: "Do you ever hear voices when no one is around, or sounds other people can't hear?", tl: "Nakakarinig po ba kayo ng mga boses kahit walang tao, o ng mga tunog na hindi naririnig ng iba?" },
    "ch11:delusional-disorders": { s: "delusions", why: "Exploring a delusion by type, with the conviction, action, and dangerousness questions.", en: "Do you feel you need to protect yourself from him? Have you felt you might have to take action against him?", tl: "Pakiramdam po ba ninyo kailangan ninyong ipagtanggol ang sarili ninyo laban sa kanya? Naisip na po ba ninyong gumawa ng aksyon laban sa kanya?" },
    "ch11:life-cycle": { s: "delusions", why: "Robinson's curious, respectful questions and a non-affirming answer to 'Do you believe me?' in Tagalog.", en: "I'm interested in what you just said. How did all this start?", tl: "Interesado po ako sa sinabi ninyo. Paano po nagsimula ang lahat ng ito?" },
    "ch11:delirium": { s: "mse-cog", why: "Orientation, digit span, and attention testing in Tagalog, with instructions the patient can follow.", en: "I'm going to say some numbers. Wait until I point to you, then repeat them back.", tl: "Magsasabi po ako ng mga numero. Hintayin ninyong ituro ko kayo, saka ninyo ulitin." },
    "ch12:porous-ego": { s: "delusions", why: "The first-rank symptoms asked directly: something moving inside, made feelings, thoughts pulled out or pushed in, thoughts leaking.", en: "Have you ever felt that someone or something can take thoughts out of your mind, or put thoughts in that aren't yours?", tl: "Naramdaman na po ba ninyong may kayang kumuha ng mga iniisip ninyo mula sa isip ninyo, o maglagay ng mga iniisip na hindi sa inyo?" },
    "ch12:akathisia-catatonia": { s: "meds", why: "The akathisia question and the other side-effect checks, before anyone raises the dose.", en: "Do you feel restless, like you can't sit still?", tl: "Hindi po ba kayo mapakali, parang hindi kayo makaupo nang matagal?" },
    "ch12:raising-voices": { s: "hallucinations", why: "Shea's back-door question for voices, tied to the patient's stress, and the phenomenology questions.", en: "When you're very stressed, do your thoughts ever get so intense that they sound almost like a voice to you?", tl: "Kapag sobrang stressed po kayo, nagiging napakatindi ba ng mga iniisip ninyo na para na itong boses na naririnig ninyo?" },
    "ch12:commands": { s: "suicide", why: "Command hallucinations and the ability to resist them, leading into the suicide and violence questions.", en: "Do the voices ever tell you to hurt yourself, or to end your life? How far can you stop yourself from doing what they say?", tl: "Sinasabihan po ba kayo ng mga boses na saktan ang sarili ninyo, o tapusin ang buhay ninyo? Gaano po ninyo kayang pigilan ang sarili ninyo sa sinasabi nila?" },
    "ch12:families": { s: "collateral", why: "Meeting the family where they are: what they think is wrong, what has helped, and who is supporting them.", en: "Nobody knows him better than you. What do you think has been going on with him?", tl: "Walang nakakakilala sa kanya nang higit sa inyo. Ano po sa tingin ninyo ang nangyayari sa kanya?" },
    "ch12:culture-language": { s: "opening", why: "Asking early which language the patient thinks in, before concluding there are no delusions in Tagalog or English.", en: "Which language are you most comfortable in? Which one do you think in?", tl: "Aling wika po ang pinakakomportable sa inyo? Alin po ang ginagamit ninyo sa pag-iisip?" },
    "ch13:social-history": { s: "social", why: "The personal and social history in Tagalog: work, relationships, and friendships, asked so the tracks of a pattern can show.", en: "Tell me about your last job. How did it end?", tl: "Ikuwento po ninyo ang huling trabaho ninyo. Paano po ito natapos?" },
    "ch13:benefits": { s: "explain", why: "Explaining a diagnosis and treatment options in a way that fits how the patient likes to decide.", en: "Here is some reading on the benefits and side effects. Let's decide together after you've looked at it.", tl: "Heto po ang babasahin tungkol sa mga benepisyo at side effects. Pag-usapan po natin at magpasya tayo nang magkasama pagkatapos ninyo itong mabasa." },
    "ch14:probes": { s: "social", why: "Weaving personality probe questions into the social history in Tagalog: work, friendships, and how relationships end.", en: "Do you enjoy being around people, or do you much prefer being on your own?", tl: "Nasisiyahan po ba kayong kasama ang ibang tao, o mas gusto po ninyong mag-isa?" },
    "ch14:expand": { s: "shea-techniques", why: "Anchoring a trait to adolescence and separating it from a current episode, with the validity techniques in Tagalog.", en: "Thinking back to high school, was that true of you then too?", tl: "Noong high school po kayo, ganito na rin po ba kayo?" },
    "ch15:merger": { s: "closing", why: "Closing a first session with warm, explicit boundaries, and naming dependency openly with a patient who fears abandonment.", en: "What can we do together so that you don't end up relying on me more than is good for you?", tl: "Ano po ang puwede nating gawin nang magkasama para hindi kayo umasa sa akin nang higit sa nakabubuti sa inyo?" },
    "ch15:splitting": { s: "explain", why: "Making the treatment plan collaborative, which matters most when a patient sees people as all good or all bad.", en: "Let's look at the options together and see what each one offers.", tl: "Tingnan po natin nang magkasama ang mga pagpipilian at kung ano ang maitutulong ng bawat isa." },
    "ch15:complementary": { s: "deescalation", why: "With an angry patient, genuine respect and curiosity often calm faster than argument: the complementary shift in Tagalog.", en: "You know a great deal about this medicine. Where did you learn all this?", tl: "Ang dami po ninyong alam tungkol sa gamot na ito. Saan po ninyo ito natutunan?" },
    "ch16:appearance": { s: "mse-describe", why: "Standard wording for the observed parts of the MSE." },
    "ch16:process": { s: "mse-describe", why: "Describing speech and thought process." },
    "ch16:content": { s: "delusions", why: "Delusions by type, with conviction and action questions." },
    "ch16:perception": { s: "hallucinations", why: "Hallucinations and perceptual disturbances." },
    "ch16:mood": { s: "depression", why: "Mood in the patient's own words." },
    "ch16:cognition": { s: "mse-cog", why: "Orientation, attention, memory, abstraction, insight, and judgment." },
    "ch17:before-asking": { s: "suicide", why: "Raising suicide gently: the screen, then the exploration.", en: "Many people who are this stressed have thoughts of hurting themselves. Has that happened to you?", tl: "Maraming tao na ganito ka-stress ang nagkakaroon ng pag-iisip na saktan ang sarili. Nangyari na po ba iyon sa inyo?" },
    "ch17:case-approach": { s: "shea-techniques", why: "The CASE Approach's validity techniques in Tagalog: gentle assumption, denial of the specific, behavioral incidents.", en: "Have you ever thought of overdosing on your medicines?", tl: "Naisip na po ba ninyong uminom nang sobra-sobrang gamot?" },
    "ch17:presenting": { s: "suicide", why: "Making the verbal video of the presenting event.", en: "Did you take the pills out of the bottle? How many were in your hand?", tl: "Inilabas po ba ninyo ang mga tableta sa bote? Ilan po ang nasa kamay ninyo?" },
    "ch17:recent": { s: "suicide", why: "Recent events: the method list, one method at a time." },
    "ch17:past-immediate": { s: "suicide", why: "Past attempts, immediate intent, and protective factors." },
    "ch18:corroboration": { s: "collateral", why: "Collateral history from family, in Tagalog." },
    "ch18:stage": { s: "violence", why: "Setting the stage before asking about violence.", en: "With everything you've been carrying, have you ever felt like hitting someone?", tl: "Sa dami po ng pinagdadaanan ninyo, naramdaman na po ba ninyong gusto ninyong manakit ng tao?" },
    "ch18:presenting-recent": { s: "violence", why: "Presenting and recent violent events, step by step." },
    "ch18:past-immediate": { s: "violence", why: "Past violence and immediate intent." }
  }
};

/* "Sabihin sa Tagalog" drill: choose the Tagalog wording that keeps Shea's technique and the respect.
   Options are per item (opts), unlike the other drills, which draw from a shared category list. */
(function () {
  var parts = window.TRAINER.parts;
  var host = parts.part1 || parts.part2 || Object.keys(parts).map(function (k) { return parts[k]; })[0];
  if (!host) return;
  host.drills = host.drills || [];
  host.drills.push({
    id: "sabihin-tagalog", speaker: "Clinician", prompt: "Which Tagalog wording keeps the technique?", title: "Sabihin sa Tagalog", chapter: 5,
    about: "Shea's validity techniques and mood questions, in Filipino. Pick the respectful wording that keeps the technique intact; the wrong options are leading, closed, rude, or lose the point. Draft wording under review.",
    categories: [],
    items: [
      { ctx: "Gentle assumption for suicide methods, after the patient has described one method.", say: "What other ways have you thought of ending your life?",
        a: "Ano pa po ang ibang paraan na naisip ninyo para tapusin ang buhay ninyo?",
        opts: ["Ano pa po ang ibang paraan na naisip ninyo para tapusin ang buhay ninyo?", "Wala na po bang iba? Iyon lang po?", "Hindi naman po kayo nag-isip ng ibang paraan, di po ba?", "Bakit mo naman naisip iyon?"],
        w: "Gentle assumption assumes there were other methods and asks which. 'Iyon lang po?' invites a no; the third is a leading denial; the fourth asks why, drops the respect, and leaves the list unfinished." },
      { ctx: "Symptom amplification for drinking, setting the anchor high.", say: "On the days you drink the most, how many bottles do you finish? Ten? Fifteen?",
        a: "Sa mga araw na pinakamarami kayong nainom, ilang bote po ang nauubos ninyo? Sampu? Labinlima?",
        opts: ["Sa mga araw na pinakamarami kayong nainom, ilang bote po ang nauubos ninyo? Sampu? Labinlima?", "Umiinom po ba kayo? Konti lang po siguro?", "Ilang bote po ang naiinom ninyo? Dalawa? Tatlo?", "Lasenggo po ba kayo?"],
        w: "Amplification names a high number so that minimizing still lands near the truth. A low anchor (dalawa, tatlo) does the opposite; 'konti lang siguro' invites minimizing; 'lasenggo' is an insult." },
      { ctx: "Denial of the specific, after a general denial of suicidal thoughts.", say: "Have you ever thought of overdosing on your medicines?",
        a: "Naisip na po ba ninyong uminom nang sobra-sobrang gamot?",
        opts: ["Naisip na po ba ninyong uminom nang sobra-sobrang gamot?", "Naisip na po ba ninyong saktan ang sarili ninyo sa kahit anong paraan?", "Hindi naman po kayo mag-o-overdose, di po ba?", "Sigurado po ba kayong wala kayong naiisip na ganoon?"],
        w: "Denial of the specific names one concrete method at a time. The second is another general question that will get the same general no; the third and fourth press the patient to confirm the denial." },
      { ctx: "Behavioral incident: moving the story forward in time.", say: "What happened next? What did you do then?",
        a: "Ano po ang sumunod na nangyari? Ano po ang ginawa ninyo pagkatapos?",
        opts: ["Ano po ang sumunod na nangyari? Ano po ang ginawa ninyo pagkatapos?", "Bakit po ninyo ginawa iyon?", "Nagsisi po ba kayo pagkatapos?", "Siguro po natakot kayo pagkatapos, ano po?"],
        w: "A behavioral incident asks for the next concrete fact or action. 'Bakit' asks for an opinion about motive, 'nagsisi ba' asks for a feeling, and the last supplies the answer." },
      { ctx: "Behavioral incident: a fact question about the presenting event.", say: "Did you take the pills out of the bottle? How many were in your hand?",
        a: "Inilabas po ba ninyo ang mga tableta sa bote? Ilan po ang nasa kamay ninyo?",
        opts: ["Inilabas po ba ninyo ang mga tableta sa bote? Ilan po ang nasa kamay ninyo?", "Seryoso po ba kayo noon, o gusto lang ninyong makuha ang atensyon nila?", "Marami po ba? Konti lang po ba?", "Nagbibiro lang po kayo noon, di po ba?"],
        w: "Fact questions build the verbal video: the bottle, the number in the hand. The others ask the patient to judge their own intent, offer vague quantities, or invite a face-saving denial." },
      { ctx: "Shame attenuation before asking about violence.", say: "With everything you've been carrying, have you ever felt like hitting someone?",
        a: "Sa dami po ng pinagdadaanan ninyo, naramdaman na po ba ninyong gusto ninyong manakit ng tao?",
        opts: ["Sa dami po ng pinagdadaanan ninyo, naramdaman na po ba ninyong gusto ninyong manakit ng tao?", "Marahas po ba kayong tao?", "Nanakit na po ba kayo ng tao? Oo o hindi lang po.", "Hindi naman po kayo nananakit, di po ba?"],
        w: "Shame attenuation frames the behavior as an understandable response to the patient's burden. 'Marahas ba kayo' asks for a self-label, the yes-or-no demand shuts the door, and the last leads toward denial." },
      { ctx: "Normalization when raising self-harm for the first time.", say: "Many people who are this stressed have thoughts of hurting themselves. Has that happened to you?",
        a: "Maraming tao na ganito ka-stress ang nagkakaroon ng pag-iisip na saktan ang sarili. Nangyari na po ba iyon sa inyo?",
        opts: ["Maraming tao na ganito ka-stress ang nagkakaroon ng pag-iisip na saktan ang sarili. Nangyari na po ba iyon sa inyo?", "Hindi po kayo nag-iisip na saktan ang sarili ninyo, tama po ba?", "Kailangan ko pong itanong ito para sa form: may suicidal ideation po ba kayo?", "Nag-iisip po ba kayong magpakamatay? Masama po iyon."],
        w: "Normalization tells the patient that others in this situation have had the thought before asking. The others lead toward no, hide behind a form, or attach a judgment." },
      { ctx: "Catch-all question to finish a list of methods.", say: "Is there anything else you've thought of doing, even once?",
        a: "May iba pa po ba kayong naisip gawin sa sarili ninyo, kahit minsan lang?",
        opts: ["May iba pa po ba kayong naisip gawin sa sarili ninyo, kahit minsan lang?", "Sigurado po akong wala nang iba, di po ba?", "Tapos na po tayo diyan. Kumusta ang tulog ninyo?", "Ayan, nakakatakot naman po iyan. Iba na lang po ang pag-usapan natin."],
        w: "The catch-all ('even once') gently finishes the list. The others close it for the patient, change the subject, or react with alarm." },
      { ctx: "Anchor question to date the onset of a depression.", say: "Around the fiesta, were you already feeling this way, or did it start after?",
        a: "Noong pista po, ganito na po ba ang pakiramdam ninyo, o nagsimula lang pagkatapos?",
        opts: ["Noong pista po, ganito na po ba ang pakiramdam ninyo, o nagsimula lang pagkatapos?", "Kailan po eksaktong petsa nagsimula? Kailangan ko po ng buwan at araw.", "Matagal na po ba?", "Simula pa po ba noong bata kayo?"],
        w: "An anchor ties recall to a memorable event. Demanding an exact date, asking 'matagal na ba?', or jumping to childhood all produce vaguer answers." },
      { ctx: "Exploring anhedonia after learning what the patient used to enjoy.", say: "Lately, do you still enjoy the things you used to enjoy, or has that changed?",
        a: "Nitong mga nakaraang linggo, nasisiyahan pa po ba kayo sa mga bagay na dati ninyong kinagigiliwan, o nagbago na?",
        opts: ["Nitong mga nakaraang linggo, nasisiyahan pa po ba kayo sa mga bagay na dati ninyong kinagigiliwan, o nagbago na?", "May anhedonia po ba kayo?", "Wala na po kayong ganang gumawa ng kahit ano, tama po?", "Tamad na po ba kayo ngayon?"],
        w: "Ask about the specific pleasures already named, in plain words. 'Anhedonia' is jargon, the third supplies the answer, and 'tamad' is exactly the guilt the patient already fears." },
      { ctx: "Screening for past mania in a severely depressed patient.", say: "Has there ever been a stretch of days when you felt the opposite: full of energy, hardly needing sleep, ready to take on anything?",
        a: "Nagkaroon na po ba ng ilang araw na kabaligtaran ang pakiramdam ninyo: sobrang lakas ng enerhiya, halos hindi na kailangang matulog, kayang-kaya ang lahat?",
        opts: ["Nagkaroon na po ba ng ilang araw na kabaligtaran ang pakiramdam ninyo: sobrang lakas ng enerhiya, halos hindi na kailangang matulog, kayang-kaya ang lahat?", "Bipolar po ba kayo?", "Masaya naman po kayo minsan, di po ba?", "Hindi po siguro kayo nagka-mania, dahil depressed po kayo?"],
        w: "Describe the experience, and include that it can follow a low period. Asking 'bipolar ba kayo' asks for a diagnosis the patient cannot give; the others assume the answer." },
      { ctx: "Testing persistence when the patient says 'depressed for years.'", say: "For some people the low mood stays day after day; for others it comes and goes. Which is more like you?",
        a: "May mga taong araw-araw na lang mabigat ang pakiramdam; sa iba naman, pabalik-balik. Alin po ang mas katulad ninyo?",
        opts: ["May mga taong araw-araw na lang mabigat ang pakiramdam; sa iba naman, pabalik-balik. Alin po ang mas katulad ninyo?", "Araw-araw po ba? Talaga po?", "Hindi naman po siguro araw-araw, may masaya rin po siguro?", "Ilang taon na po ba? Hindi po ba masyadong matagal iyon?"],
        w: "The continuum question lets the patient place themselves between two normal patterns. The others doubt the patient, supply the answer, or argue with the history." }
    ]
  });
})();
