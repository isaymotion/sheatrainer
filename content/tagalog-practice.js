/*
  Psychiatric Interviewing Trainer — "Sagot sa Tagalog" overlay for response-practice items.

  Keyed by practice item id: { p: <patient line in Tagalog>, opts: [<option text by original index, or null>] }.
  Options that are actions rather than speech (and anything missing) stay in English. Explanations stay in
  English. Covers Chapters 1, 3, 5 and 9 so far (engagement, the opening, validity techniques, mood).
  Every line is composed for training and is DRAFT until reviewed by Dr. Navarro or a native-speaking clinician.
  The toggle lives in the practice view ("Sagot sa Tagalog"); remembered under sheatrainer.practiceTl.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.tagalogPractice = {
  c1p1: { p: "Hindi ko sinabing stressful. Sinabi ko, binabantayan.",
    opts: ["Pasensya na po, ang ibig ko pong sabihin, nakakatakot sigurong lagi kayong binabantayan.", "Binabantayan. Ano po ang napansin ninyong ginagawa nila?", "Mukhang naiinis po kayo sa akin. Pag-usapan natin kung ano ang nangyayari sa ating dalawa."] },
  c1p2: { p: "Apatnapung minuto! Umalis ako nang maaga sa trabaho para dito. Ano ba ang nangyayari?",
    opts: ["May tinutulungan po akong nasa krisis sa ward. Gagawin ko rin po iyon para sa inyo, kaya sana maintindihan ninyo.", "Tama po kayong mainis. Matagal po ang apatnapung minuto, at humihingi po ako ng tawad.", "Alam ko po, hindi masarap maghintay."] },
  c1p3: { p: "Mula nang mamatay si Mama, parang manhid na lang ako at walang laman. Parang naglalakad akong walang laman.",
    opts: ["Mukhang manhid po kayo at parang walang laman.", "Iniwan po ng pagkawala niya ang isang kawalan na parang walang makakapuno.", "Alam na alam ko po ang pakiramdam ninyo. Namatay rin ang nanay ko."] },
  c1p4: { p: "At sa totoo lang, parang kaya kong sabihin sa 'yo ang lahat. Naiintindihan mo ako na hindi nagawa ng tatlong therapist ko dati!" },
  c1p5: { p: "Wala na akong makitang paraan para makaahon. Kahit saan ako tumingin, pare-parehong dead end.",
    opts: ["Kaya sa paningin ninyo ngayon, lahat ng pinto, sarado. Tama po ba ang pagkakaintindi ko?", "Parang stuck po kayo.", "Baka hindi naman po kasing-sama ng tingin ninyo. Kadalasan, nag-aayos din ang mga bagay."] },
  c1p6: { p: "Okay naman... Oo. Okay lang.",
    opts: ["Mabuti. I-schedule na po natin ang susunod ninyong appointment.", "Napansin ko pong may konting pag-aalinlangan. May nasabi o nagawa po ba akong hindi komportable para sa inyo, o may nakaligtaan ako?", "Mabuti kung okay! Karamihan po, medyo awkward ang unang pagbisita."] },
  c3p1: { p: "Hindi ko alam kung bakit ako narito. Ano ang sinabi nila sa inyo?",
    opts: ["Sabi po ng kapatid ninyo, kakaiba na raw ang kilos ninyo. Kailan po nagsimula?", "Tumawag po ang kapatid ninyo at may mga inalala. Mamaya, pagpapasyahan natin nang magkasama kung ano, kung mayroon man, ang sasabihin ko sa kanya. Ang gusto ko po talagang marinig ay ang pananaw ninyo kung ano ang nangyayari, kung mayroon man. Mga apatnapung minuto tayong mag-uusap, tapos magpaplano tayo. Okay po ba iyon?", "Hindi na po mahalaga kung ano ang sinabi nila. Magsimula na lang tayo."] },
  c3p2: { p: "Ewan.",
    opts: ["Puwede mo bang ikuwento ang school?", "Ikuwento mo sa akin ang isang karaniwang araw mo sa school, mula paggising mo.", "Gusto mo ba ang school?"] },
  c3p3: { p: "Gana sa pagkain? Ay, sa kasal ng pinsan ko, ang sarap ng pagkain, tapos yung tiya ko, na hindi pa rin napapatawad ang nanay ko, umupo mismo sa tabi ng...",
    opts: ["Mm-hmm, sige po, ituloy ninyo.", "Mukhang malaking pagtitipon iyon. Bago tayo dumating sa kasal, tulungan po ninyo ako sa gana ninyo sa pagkain. Mas kaunti po ba ang kinakain ninyo kaysa dati?", "Kailangan po talaga nating manatili sa paksa. Gana sa pagkain, please."] },
  c3p4: { p: "Bipolar ako, kailangan ko ng refill ng lithium. Walang racing thoughts, maayos ang tulog, hindi ako gumagastos. Baka tumawag sa inyo ang roommate ko. Huwag ninyo siyang pansinin, OA siya.",
    opts: ["Kaya wala po kayong kahit anong sintomas ng mania?", "Dalawang beses po ninyong nabanggit ang roommate ninyo. Ikuwento po ninyo siya.", "Ikuwento po ninyo ang huling beses na nagbago ang mood ninyo. Ano po ang unang nangyari?"] },
  c3p5: { p: "Mahirap ang mga nakaraang buwan. Hindi ko na talaga makita ang saysay ng kahit ano.",
    opts: ["Pero hindi naman po kayo suicidal, di po ba?", "Sa lahat po ng pinagdadaanan ninyo, nagkaroon na po ba kayo ng pag-iisip na magpakamatay?", "May suicidal ideation po ba?"] },
  c3p6: { p: "...at iyon na po ang buong history ko sa trabaho.",
    opts: ["Ilang mabilis na tanong na lang po tungkol sa pamilya at kalusugan ninyo.", "Marami na po tayong natalakay. Sa natitirang oras, gusto ko pong magbahagi ng ilang kaisipan at magplano tayo nang magkasama ng mga susunod na hakbang. Ituloy po natin ang iba sa susunod na pagbisita.", "Mag-schedule na lang po tayo ng follow-up at ipapaliwanag ko po ang lahat sa susunod."] },
  c5p1: { p: "Uminom ako ng mga gamot, pero hindi naman seryoso. Gusto ko lang makatulog.",
    opts: ["Talaga po bang sinusubukan ninyong mamatay?", "Ikuwento po natin ang kagabi nang paisa-isa para maintindihan ko. Nasaan po kayo noong ininom ninyo ang mga iyon?", "Okay po, basta hindi seryoso. Kumusta naman po ang mood ninyo sa pangkalahatan?"] },
  c5p2: { p: "Nagrereklamo ang misis ko, pero social drinker lang ako, tulad ng lahat.",
    opts: ["Sa tingin po ninyo, may problema kayo sa pag-inom?", "Kapag kasama ninyo ang mga tropa, nakakasabay po ba kayo? Sa malaking inuman, gaano po karami ang nauubos ninyo: isang kaha? Higit pa?", "Gaano po karami ang iniinom ninyo?"] },
  c5p3: { p: "Hindi, hindi ako inabuso. Old-school lang siya.",
    opts: ["Okay po. Sa school naman po tayo.", "Kapag nagtatanong po ako tungkol sa pananakit, ang ibig ko pong sabihin ay mga bagay tulad ng paghampas ng sinturon o suntok, pagsampal, o pag-iwan ng pasa. May nangyari po bang ganoon?", "Sigurado po kayo? Para po sa akin, pang-aabuso iyon."] },
  c5p4: { p: "Yung gamot lang, siguro.",
    opts: ["Naisip na po ba ninyong barilin, bigtiin, tumalon, o hiwain ang sarili ninyo?", "Ano pa po ang ibang paraan na naisip ninyo, kahit sandali lang? ... Naisip na po ba ninyong barilin ang sarili ninyo? ... Magbigti?", "Pero hindi naman po kayo nag-isip ng ibang paraan, di po ba?"] },
  c5p5: { p: "Alam kong kailangan kong umalis. Iiwan ko na siya, malapit na.",
    opts: ["Kailangan po ninyong umalis ngayon. Hindi po ligtas.", "Madalas po ninyong naiisip ang pag-alis? ... Pakiramdam po ninyo, kaya ninyo? ... Sa loob ng isa o dalawang buwan?", "Ano po ang makakatulong para magawa ninyo ang hakbang na iyon?"] },
  c5p6: { p: "Medyo supportive naman ang misis ko, siguro.",
    opts: ["Malambing po ba siya?", "Kapag umuuwi po kayo galing trabaho, ano po ang karaniwang nangyayari?", "Mukhang matatag po ang pagsasama ninyo."] },
  c9p1: { p: "Kaya ganoon na nga. Hindi pa ako naging ganito kababa sa buong buhay ko.",
    opts: ["Nagkaroon na po ba kayo ng manic episode, o na-diagnose na kayong bipolar?", "Inilarawan po ninyo ang sobrang lungkot. Nagkaroon na po ba ng panahon, kahit ilang taon na ang nakalipas, na kabaligtaran ang pakiramdam ninyo: sobrang lakas ng enerhiya, halos hindi kailangang matulog, handang harapin ang buong mundo, sa paraang parang kakaiba kahit para sa inyo?", "Dahil walang history ng mania, makatuwiran po ang antidepressant. Pag-usapan natin ang mga pagpipilian."] },
  c9p2: { p: "Ewan ko. Lagi na lang akong pagod.",
    opts: ["May anhedonia po ba kayo?", "Kapag mas maayos po ang pakiramdam ninyo, anong mga bagay ang kinagigiliwan ninyo?", "Nawalan na po ba kayo ng interes sa mga bagay-bagay?"] },
  c9p3: { p: "Oo, at halos hindi na kami nag-uusap ng asawa ko.",
    opts: ["(nag-aalangan) May, um, itatanong po ako na medyo personal, kung okay lang...", "Madalas po, pinapahina ng depresyon ang mga pangunahing pangangailangan tulad ng gana sa pagkain at pagnanasa. Nagbago po ba ang interes ninyo sa sex? Interes po ang ibig kong sabihin, hindi kung nakikipagtalik kayo.", "Kumusta po ang sex life ninyo?"] },
  c9p4: { p: "Hindi ako depressed. Hindi rin ako malungkot. Gusto ko lang umuwi.",
    opts: ["Kung ganoon po, puwede na nating alisin ang depresyon.", "Sige po. Pakiramdam po ba ninyo, kayo pa rin ang dating kayo nitong mga nakaraan? Nasa sarili po?", "Malinaw pong tumuturo sa depresyon ang mga sintomas ninyo, tawagin man ninyo iyon o hindi."] },
  c9p5: { p: "Ilang taon na akong depressed. Walang nangyayaring tama sa buhay ko.",
    opts: ["Ilang taon ng depresyon. Pag-usapan po natin ang gamot para sa major depression.", "May mga taong araw-araw na lang mabigat ang pakiramdam; sa iba naman, pabalik-balik na parang roller coaster. Saan po ninyo ilalagay ang sarili ninyo?", "Gumagaan po ba ang depresyon ninyo, kahit isang araw?"] },
  c9p6: { p: "Hindi, walang may sakit sa isip sa pamilya ko.",
    opts: ["Okay po, walang family history. Magpatuloy na tayo.", "Sinabi po ninyong naaalala ninyo ang tatay ninyo sa sarili ninyo. Sa anong paraan po? At sa panig niya, mga lolo at lola, tito, tita, pinsan: may nagkaroon po ba ng depresyon, matinding pagbabago ng mood, problema sa alak o droga, o nervous breakdown? May namatay na po ba dahil sa pagpapakamatay?", "May schizophrenia o bipolar disorder po ba sa pamilya?"] }
};
