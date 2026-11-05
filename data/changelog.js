/* What's new. Newest entry FIRST. version = semver string (also the key for the unseen badge),
   date = ISO YYYY-MM-DD. Item type: feature | update | correction | content.
   Optional per entry: teaser (shown on Home while it is the newest entry). Optional per item: href ('#/...') shown as "Open".
   Every entry below the newest is a release listed in the app before the design refresh (dates, titles and text unchanged;
   versions were assigned in date order when the list moved to this file).
   For every release: add an entry here, then bump APP_META.version, VERSION in sw.js, and "Latest version" in the footer / README. */
window.APP_CHANGELOG = [
  {
    "version": "11.0.0",
    "date": "2026-11-05",
    "title": "Design refresh",
    "teaser": "New look: the same top bar, menu, search, theme, text size and backup as the other isaymotion apps. Your progress, bookmarks and flashcard schedule are kept.",
    "items": [
      {
        "type": "feature",
        "text": "Same look and controls as the other isaymotion apps: top bar, menu, search, theme and text size, backup with undo, offline support."
      },
      {
        "type": "feature",
        "text": "Other apps are one tap away from the menu."
      },
      {
        "type": "feature",
        "text": "Language switch on the About page (Tagalog interface strings are a draft)."
      }
    ]
  },
  {
    "version": "10.0.0",
    "date": "2026-11-02",
    "title": "Text size",
    "items": [
      {
        "type": "feature",
        "text": "Text size: tap Aa in the top bar to make text smaller or larger. Your choice is saved on this device."
      }
    ]
  },
  {
    "version": "9.3.0",
    "date": "2026-10-30",
    "title": "Sagot sa Tagalog: response practice in Filipino",
    "teaser": "New: a Sagot sa Tagalog switch in Response practice. For Chapters 1, 3, 5 and 9, the patient's line and the three options appear in Tagalog with the English underneath; the explanations stay in English.",
    "items": [
      {
        "type": "feature",
        "text": "A Sagot sa Tagalog button above the practice card, remembered on this device. Items without a Tagalog version yet say so and show in English."
      },
      {
        "type": "feature",
        "text": "Twenty-four items so far: engagement and empathic valence (Chapter 1), the opening and focusing (Chapter 3), validity techniques (Chapter 5), and the mood region (Chapter 9)."
      },
      {
        "type": "feature",
        "text": "Composed for training; draft wording under review. With the drills, the Sa Tagalog interviews and the three Bataan cases, every part of the trainer now has a Filipino path."
      }
    ]
  },
  {
    "version": "9.2.0",
    "date": "2026-10-30",
    "title": "Three interviews written in Filipino: Bataan cases",
    "items": [
      {
        "type": "content",
        "text": "Nasa kuwarto si Nanay (Chapters 3 and 7): honour the mother, earn the floor for Liza without shaming either of them, and raise suicide with normalization while the family is in the room."
      },
      {
        "type": "content",
        "text": "Nerbiyos daw (Chapters 6 and 10): take the idiom and the chest heaviness seriously, build the verbal video of a panic attack, hear the depression behind it, and ask for the patient's own explanatory model instead of arguing with her sister-in-law's kulam."
      },
      {
        "type": "content",
        "text": "Ang kasama (Chapters 5 and 7): get usable collateral about alcohol and withdrawal from a nephew who does not want to shame his uncle: normalization, a medical reason, shame attenuation, high anchors."
      },
      {
        "type": "content",
        "text": "Patient lines and your choices are Tagalog or Taglish with the English underneath; cues, coaching and debriefs are in English. Composed for training; draft wording under review."
      }
    ]
  },
  {
    "version": "9.1.0",
    "date": "2026-10-30",
    "title": "Sa Tagalog: play four interviews in Filipino",
    "items": [
      {
        "type": "feature",
        "text": "A Sa Tagalog button at the top of an interview that has Filipino lines. Your choice is remembered on this device, and the whole transcript switches with it."
      },
      {
        "type": "feature",
        "text": "Four interviews so far: Watching (the paranoid spiral, Chapters 1 and 5), Just a few pills (the CASE Approach, Chapter 5), I don't have a problem (a guarded adolescent, Chapters 2 and 3), and The man who won't sit (de-escalation, Chapter 8)."
      },
      {
        "type": "feature",
        "text": "Patient lines are Taglish where a real patient would be; clinician lines keep po and kayo for adults and ikaw for the teenager. Cues, coaching and debriefs stay in English because they teach Shea's reasoning."
      },
      {
        "type": "feature",
        "text": "All wording is composed for training and marked draft until reviewed. Usap Tayo links to these interviews from its de-escalation, suicide and delusions sections."
      }
    ]
  },
  {
    "version": "9.0.0",
    "date": "2026-10-30",
    "title": "Three Tagalog clinical drills",
    "items": [
      {
        "type": "feature",
        "text": "Mga Salitang Pahiwatig (18 items): a patient's line in Tagalog; decide what it most likely signals and which region of the interview to open next."
      },
      {
        "type": "feature",
        "text": "Po, Kayo, Ikaw (12 items): choose the opening line whose register fits the person in front of you: an elderly widow, a teenager, a colleague, an angry patient, a child, a patient who asks you to drop the po."
      },
      {
        "type": "feature",
        "text": "Pakinggan (12 items): hear the interpersonal move in a Tagalog line (disavowal, minimization, deference, the family taking the floor, the doorknob hesitation) and pick the reply that keeps the alliance and the data."
      },
      {
        "type": "feature",
        "text": "All Tagalog wording is composed for training and marked draft until reviewed. Feedback stays in English and carries the gloss."
      },
      {
        "type": "feature",
        "text": "Usap Tayo now links to these drills from its opening, history and Shea-techniques sections."
      }
    ]
  },
  {
    "version": "8.2.0",
    "date": "2026-10-29",
    "title": "Chapter 15 study guide: The Psychodynamic Lens",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 15 in ten sections: safety in the room; the four stages of the self; part self / part object and going slow; merger and transitional objects (Debbie) and early boundaries; splitting, linguistic polarization, and idealization–devaluation; Kohut's bipolar self; signal signs and symptoms of grandiosity and idealization; complementary shifts (Dale, and asking a teen for help); accepting the pedestal and handling countertransference; and the stable self, with a stage-matched engagement table."
      },
      {
        "type": "content",
        "text": "Twelve glossary terms added to Chapter 15 (introjection, holding environment, black/whiting, linguistic polarization, object constancy, bipolar self, grandiose and idealizing imago, mirror transference, mentalization, stable self, nonverbal leakage)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on three Chapter 15 sections, with links back from Usap Tayo."
      },
      {
        "type": "content",
        "text": "Study guides now cover every chapter in Parts I to III."
      }
    ]
  },
  {
    "version": "8.1.0",
    "date": "2026-10-29",
    "title": "Chapter 14 study guide: Personality Disorders, the Differential Diagnosis",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 14 in nine sections: the anxiety-prone, poorly empathic, and psychotic-prone disorders; label slapping, countertransference, and refusing to diagnose; limiting the field with signal signs and symptoms (Ms. Dole); probe questions, with a composed example for each region; expanding a diagnosis with Mrs. Jacobs; tapping for epiphenomena with Tommy; and dimensions, hidden strengths (Nancy), and prototype systems."
      },
      {
        "type": "content",
        "text": "Six glossary terms added to Chapter 14 (Shea's three groups, stable vs unstable narcissism, passive-aggressive personality, process comment, tapping for epiphenomena, the Alternative DSM-5 Model)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on two Chapter 14 sections, with links back from Usap Tayo."
      }
    ]
  },
  {
    "version": "8.0.0",
    "date": "2026-10-29",
    "title": "Chapter 13 study guide: Personality Disorders, Core Concepts",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 13 in seven sections: Mr. Fellows and what a personality disorder feels like from both chairs; the DSM-5 general criteria and the historical diagnosis; reading the social history and ego-syntonic versus ego-dystonic patterns; label theory; eight ways an accurate diagnosis helps, including tailoring treatment discussions and the clinician who is leaving; the map and the terrain; and where personality comes from (temperament, heritability, Khalid, limbic scars)."
      },
      {
        "type": "content",
        "text": "Four glossary terms added to Chapter 13 (map and terrain, narcissistic insult, dialectical behavior therapy, mentalization-based therapy)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on two Chapter 13 sections, with links back from Usap Tayo."
      }
    ]
  },
  {
    "version": "7.1.0",
    "date": "2026-10-28",
    "title": "Chapter 12 study guide: Beneath the Psychosis",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 12 in nine sections: sleep, the porous ego, and the first-rank symptoms with a question for each; akathisia and the approach to a catatonic patient; what voices are and the relationship patients form with them; raising voices without disengaging and exploring their phenomenology (Kenney); command hallucinations and the four dimensions of dangerousness; thought process, the agitated patient, and the gates into psychotic material; the wounded self, the precox feeling, and agreeing to disagree; families, mourning, the alliance with parents, and confidentiality; culture, subculture, and language; and the worldview wing with Jake."
      },
      {
        "type": "content",
        "text": "Fourteen glossary terms added to Chapter 12 (made symptoms, thought withdrawal, thought insertion, phenomenological leverage, audible thoughts, thought leakage, auditory illusion, negativism, ambitendency, precox feeling, agree to disagree, recovery vs rehabilitation, counterprojection, koro)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on six Chapter 12 sections, and Usap Tayo now links back from its phrase sections to the Chapter 10, 11 and 12 guides."
      }
    ]
  },
  {
    "version": "7.0.0",
    "date": "2026-10-28",
    "title": "Chapter 11 study guide: Psychotic Disorders",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 11 in eleven sections: what psychosis is, visual hallucinations and withdrawal, intoxication and medications and the interview with the police, schizophrenia's signature, mood versus psychosis and the schizoaffective middle, delusional disorders with dangerousness and paraphrenia, the life cycle of a psychosis and its soft signs, hallucinations that are not psychosis, delirium and the bedside tests, medical psychosis and the screening physical, and micropsychotic episodes, flashbacks, and partial complex seizures."
      },
      {
        "type": "content",
        "text": "Twenty-four glossary terms added to Chapter 11 (including schizophreniform and brief psychotic disorder, schizoaffective disorder, the schizo–bipolar continuum, distance from a delusion, overvalued idea, Othello syndrome, folie à deux, confrontation with a paranoid persecutor, partition delusion, psychotic matrix, the Confusion Assessment Method, the anticholinergic syndrome, and partial complex seizures)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on five Chapter 11 sections."
      }
    ]
  },
  {
    "version": "6.1.0",
    "date": "2026-10-27",
    "title": "Chapter 10 study guide: Beneath the Mood Disorder",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 10: the body as first messenger and the depressive paradox, agitated depression versus dysphoric mania, blocking of the future and the shrinking active world, the window shade response, opening an ideational cage, Beck's distortions and the immunity to logic, loneliness, burdensomeness, helplessness and hopelessness, the defenses that hide depression, the dyadic wing and countertransference, first tears, the family as co-sufferer and informant, culture and stigma, and the framework for meaning."
      },
      {
        "type": "content",
        "text": "Nine glossary terms added to Chapter 10 (ossification, delusional guilt, hopelessness, isolation as a defense, projection, countertransference, family homeostasis, identified patient, existential crisis)."
      },
      {
        "type": "content",
        "text": "Sa Tagalog cards on five Chapter 10 sections."
      }
    ]
  },
  {
    "version": "6.0.0",
    "date": "2026-10-27",
    "title": "Sa Tagalog: links to Usap Tayo and a new drill",
    "items": [
      {
        "type": "feature",
        "text": "'Sa Tagalog' cards at the end of forty study-guide sections (Chapters 1 to 9 and 16 to 18): why the topic matters in Filipino, one example phrase, and a link to the matching section of Usap Tayo, the companion Tagalog app. Usap Tayo links back here from each of its psychiatry sections."
      },
      {
        "type": "feature",
        "text": "New technique drill: Sabihin sa Tagalog. Twelve of Shea's validity techniques and mood questions; pick the respectful Tagalog wording that keeps the technique, and learn why the leading, closed, or rude options lose it."
      },
      {
        "type": "feature",
        "text": "Tagalog wording is original, conversational Filipino written for training; it is marked as draft until reviewed."
      }
    ]
  },
  {
    "version": "5.7.0",
    "date": "2026-10-27",
    "title": "Chapter 9 study guide: Mood Disorders",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 9: how diagnostic systems are built, major depression and SIG E CAPS, exploring anhedonia and the neurovegetative symptoms conversationally, melancholia, anxiety and alcohol, the bipolar trap and euphoric mania, mixed states and dysphoric mania, bipolar II, induced episodes and cyclothymia, denial of depression, culture, atypical features and the organic screen, persistence and the history of the present illness, and the family history."
      },
      {
        "type": "content",
        "text": "Sixteen glossary terms added to Chapter 9 (including categorical vs dimensional systems, SIG E CAPS, early morning awakening, euphoric mania, agitated depression, mood-congruent / mood-incongruent, sealing over, hypomanic episode, cyclothymic disorder, rapid cycling, mood reactivity, rejection sensitivity, leaden paralysis, nervios)."
      }
    ]
  },
  {
    "version": "5.6.0",
    "date": "2026-10-27",
    "title": "Chapter 8 study guide: Nonverbal Behavior",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 8: the interview as mime, proxemics, kinesics, and paralanguage, immediacy and context, nonverbal hints of hidden psychopathology (Mary), anxiety, deception, and ambivalence, the unspoken no and kinesic reciprocals, engaging with your body, the guarded patient and your own habits, note taking, calming potential violence, and technology."
      },
      {
        "type": "content",
        "text": "Seven glossary terms added to Chapter 8 (illustrators and regulators, affective display, displacement activity, micro-expression, postural echoing, intention movements and vacuum gestures, naked communication effect). All Part I and Part III study guides are now complete."
      }
    ]
  },
  {
    "version": "5.5.0",
    "date": "2026-10-27",
    "title": "Chapter 7 study guide: Assessment Perspectives and the Human Matrix",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 7: assessment as a bridge, the healing power and limits of diagnosis, the two delineations and the lost axes, the DSM-5 applied to Debbie, matrix treatment planning (Engel, intra- and inter-wing interventions, Mr. Franklin), all six wings with Debbie and Ted, the eight core pains, and Debbie's course."
      },
      {
        "type": "content",
        "text": "Five glossary terms added to Chapter 7 (six wings, intra-wing intervention, hidden diagnosis, worldview, caring/healing/teaching)."
      }
    ]
  },
  {
    "version": "5.4.0",
    "date": "2026-10-27",
    "title": "Chapter 6 study guide: Understanding the Person Beneath the Diagnosis",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 6: the two arrows to treatment planning (Jennifer), parataxic distortion and intersubjectivity, reliability and the reliably invalid, Whitehorn's interpersonal perspective, phenomenological inquiry and the tense shift, the wellness triad of strengths, skills, and interests (Jamal), kulturbrille, and culture in treatment planning (Anna's mother)."
      },
      {
        "type": "content",
        "text": "Four glossary terms added to Chapter 6 (Daseins-analysis, present-tense shift, VIA Inventory of Strengths, patient skill)."
      }
    ]
  },
  {
    "version": "5.3.0",
    "date": "2026-10-27",
    "title": "Chapter 5 study guide: Validity Techniques",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 5: why patients don't always tell the truth; anchor, tagging, and exaggeration; defining terms and clarifying norms; normalization, both types of shame attenuation, induction to bragging; the behavioral incident and verbal video; gentle assumption, denial of the specific, the catch-all, symptom amplification; doublets and triplets; bogus symptoms, soundings, and the sexual history; and the closing interview with Billy."
      },
      {
        "type": "content",
        "text": "Four glossary terms added to Chapter 5 (defining technical terms, patient-opinion question, endorsement of bogus symptoms, validity doublet)."
      }
    ]
  },
  {
    "version": "5.2.0",
    "date": "2026-10-27",
    "title": "Chapter 4 study guide: Facilics",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 4: content and process regions, using time (the 5-minute check, the dead zone), stilted versus blended expansions, pivot points and spontaneous gates, natural and manufactured gates, referred gates for the cognitive exam and sensitive topics, phantom, implied, introduced, and observed gates."
      },
      {
        "type": "content",
        "text": "Nine glossary terms added to Chapter 4 (free facilitation, transformational, and psychodynamic regions; tracking; pivot point; spontaneous, implied, and introduced gates; split expansion)."
      }
    ]
  },
  {
    "version": "5.1.0",
    "date": "2026-10-27",
    "title": "Chapter 3 study guide: The Dynamic Structure of the Interview",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 3: the introduction and confidentiality, the opening and PACE, the Degree of Openness Continuum, transforming shut-down, wandering, and rehearsed interviews, the body's database, and the closing and termination."
      },
      {
        "type": "content",
        "text": "Seven glossary terms added to Chapter 3 (Degree of Openness Continuum, open-ended question, closed-ended and variable verbalizations, facilitating and focusing statements, return visit)."
      }
    ]
  },
  {
    "version": "5.0.0",
    "date": "2026-10-27",
    "title": "Chapter 18 study guide: Exploring Violent and Homicidal Ideation",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 18: the three domains of violence, what structured instruments can and cannot predict, risk factors, the tetrad of lethality for violence, paranoid process and Knoll and Meloy's four steps, domestic violence caveats, and the CADE Approach region by region."
      },
      {
        "type": "content",
        "text": "Chapter 18 key ideas, pocket card, quiz, and flashcards (26 terms). Part III is now complete."
      }
    ]
  },
  {
    "version": "4.1.0",
    "date": "2026-10-26",
    "title": "Chapter 17 study guide: Exploring Suicidal Ideation",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 17: risk factors, warning signs, and protective factors; the tetrad of lethality; the equation of suicidal intent; timing the inquiry; and the CASE Approach region by region, with composed examples of the verbal video, gentle assumption, and denials of the specific."
      },
      {
        "type": "content",
        "text": "Chapter 17 key ideas, pocket card, quiz, and flashcards (41 terms)."
      }
    ]
  },
  {
    "version": "4.0.0",
    "date": "2026-10-26",
    "title": "Themes, spaced repetition, and backups",
    "items": [
      {
        "type": "feature",
        "text": "Theme button in the top bar: match your device, or always use light or dark. Your choice is saved on this device and can also be changed under Settings on the Progress page."
      },
      {
        "type": "feature",
        "text": "Flashcards now use spaced repetition. Rate each card Again, Good, or Easy, and it comes back after 1, 3, 7, 14, or 30 days depending on how well you know it."
      },
      {
        "type": "feature",
        "text": "Export a backup of your progress to a file, and import it on another browser or device (Progress page)."
      },
      {
        "type": "feature",
        "text": "Keyboard shortcuts: Alt+Left arrow goes back and Alt+Right arrow goes forward."
      },
      {
        "type": "feature",
        "text": "Going back or forward now returns you to where you were on the page."
      },
      {
        "type": "feature",
        "text": "This What's new page."
      }
    ]
  },
  {
    "version": "3.2.0",
    "date": "2026-10-14",
    "title": "Chapter 16 study guide: The Mental Status",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 16, the first chapter of Part III, with high-yield points, glossary terms, and bookmarks."
      }
    ]
  },
  {
    "version": "3.1.0",
    "date": "2026-10-14",
    "title": "Chapter menu, back and forward buttons, and search",
    "items": [
      {
        "type": "feature",
        "text": "A menu (three bars, upper left) lists every part and chapter and shows which have study guides."
      },
      {
        "type": "feature",
        "text": "Back and forward arrows in the top bar."
      },
      {
        "type": "feature",
        "text": "Search across chapters, study guides, glossary terms, practice cases, interviews, and drills. Press / or Ctrl+K to open it."
      }
    ]
  },
  {
    "version": "3.0.0",
    "date": "2026-10-14",
    "title": "Chapter 2 study guide: Beyond Empathy",
    "items": [
      {
        "type": "content",
        "text": "A full study guide for Chapter 2."
      }
    ]
  },
  {
    "version": "2.1.0",
    "date": "2026-10-08",
    "title": "Chapter 1 study guide, bookmarks, and glossary pop-ups",
    "items": [
      {
        "type": "content",
        "text": "The first full chapter study guide, with a high-yield box and links into practice."
      },
      {
        "type": "content",
        "text": "Bookmark any study guide section and find it later under Bookmarks."
      },
      {
        "type": "content",
        "text": "Tap an underlined term to see its glossary definition."
      }
    ]
  },
  {
    "version": "2.0.0",
    "date": "2026-10-08",
    "title": "Part II: The Interview and Psychopathology",
    "items": [
      {
        "type": "content",
        "text": "Chapters 9 to 15 with key ideas, practice moments, quizzes, drills, and flashcards."
      },
      {
        "type": "content",
        "text": "Eight new simulated interviews."
      },
      {
        "type": "content",
        "text": "A new sunflower app icon."
      }
    ]
  },
  {
    "version": "1.0.0",
    "date": "2026-10-02",
    "title": "First release: Part I",
    "items": [
      {
        "type": "feature",
        "text": "Chapters 1 to 8 with key ideas, pocket cards, and vocabulary."
      },
      {
        "type": "feature",
        "text": "Response practice, chapter quizzes, technique drills, and flashcards."
      },
      {
        "type": "feature",
        "text": "Eight branching simulated interviews with the sunflower blending gauge."
      },
      {
        "type": "feature",
        "text": "Progress saved in your browser."
      }
    ]
  }
];
