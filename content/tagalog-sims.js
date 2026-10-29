/*
  Psychiatric Interviewing Trainer — "Sa Tagalog" overlay for selected simulations.

  Keyed by simulation id, then node id. `p` is the patient's line, `t` the clinician choices by index
  (same order as the choices array in the sim). Anything missing here falls back to English. Cues,
  coaching feedback and debriefs stay in English on purpose: they teach Shea's reasoning, not the language.
  Patient lines are Taglish where a real patient would be; clinician lines keep the respectful register
  (po, kayo) for adults and ikaw for the adolescent. Every line is composed for training and is DRAFT
  until reviewed by Dr. Navarro or a native-speaking clinician.

  The toggle lives in the simulate view (button "Sa Tagalog"); the choice is remembered in
  localStorage under sheatrainer.simTl. The English shows as a gloss under each Tagalog line.
*/
window.TRAINER = window.TRAINER || { parts: {} };
window.TRAINER.tagalogSims = {
  "sim-watching": {
    nodes: {
      n1: { p: "Kinaladkad lang ako dito ng kapatid ko. Wala akong sakit. Binabantayan ako ng mga tao sa trabaho.",
        t: ["Nakakatakot po siguro ang pakiramdam na lagi kayong binabantayan.", "Ano po ang napansin ninyong ginagawa nila?", "Puwede po ba ninyong ikuwento ang history ninyo sa mental health?"] },
      n1x: { p: "Nakakatakot? Hindi ko sinabing nakakatakot. Hindi ka nakikinig. Sinabi ko, binabantayan nila ako.",
        t: ["Ang ibig ko lang pong sabihin, kahit sino ay matatakot kung nasa kalagayan ninyo.", "Binabantayan. Ano po ang napansin ninyong ginagawa nila?", "Mukhang galit po kayo sa akin ngayon."] },
      n1y: { p: "Ano'ng sinasabi mo, baliw ako? Baka mas mabuti pang umalis na lang ako.",
        t: ["Wala pong nagpasya ng kahit ano tungkol sa inyo dito. Gusto ko pong marinig kung paano ninyo ito nakikita, kung papayag kayong manatili. Ano po ang nangyayari sa trabaho?", "Sir, maupo kayo. Kailangan ninyong kumalma."] },
      n2: { p: "Naglagay sila ng camera sa break room. Ngumingiti sa akin ang supervisor ko na parang may alam siya. Noong isang linggo, nalipat ng dalawang puwesto ang kotse ko.",
        t: ["Paano po ninyo naiintindihan kung bakit nila iyon gagawin?", "Baka po nagkataon lang iyon.", "Nalipat ng dalawang puwesto."] },
      n3: { p: "Kasi inireport ko ang mga nawawalang inventory. Gusto nila akong mawala. O mas masahol pa.",
        t: ["Mas masahol pa?", "Ano po sa tingin ninyo ang dapat mangyari ngayon?", "Hindi naman po kayo nagbabalak gumawa ng kahit ano sa kanila, di po ba?"] },
      n3x: { p: "Hindi.",
        t: ["Kanina po, sinabi ninyong gusto nila kayong mawala. Naisip na po ba ninyong gumawa ng paraan para protektahan ang sarili ninyo?", "Okay, mabuti. Pag-usapan na lang po natin ang tulog ninyo."] },
      n4: { p: "Naiisip ko na kailangan kong protektahan ang sarili ko. Nasa kotse ko ang lumang baril ng tatay ko.",
        t: ["(kalmado) Naisip na po ba ninyong gamitin iyon?", "Ilegal at delikado iyan. Tatawag ako ng security.", "Isantabi muna natin iyan at ibang bagay muna ang pag-usapan natin."] },
      endGood: { p: "Minsan. Kung ipagpapatuloy niya. Alam ko kung saan siya pumaparada." },
      endMixed: { p: "Hayaan mo na. Tapos na akong magsalita." },
      endMissed: { p: "Sige. Okay lang ang tulog ko." },
      endLeft: { p: "Aalis na ako." }
    }
  },
  "sim-pills": {
    nodes: {
      n1: { p: "Uminom po ako ng mga gamot kagabi. Hindi naman po seryoso. Gusto ko lang makatulog.",
        t: ["Sinusubukan po ba ninyong magpakamatay?", "Ikuwento po natin ang kagabi nang paisa-isa para maintindihan ko. Nasaan po kayo noong ininom ninyo ang mga iyon?", "Okay po, basta hindi seryoso. Kumusta naman po ang mood ninyo sa pangkalahatan?"] },
      n2: { p: "Sa apartment ko po. Sa banyo. Kagagaling ko lang po sa away namin ng boyfriend ko sa phone.",
        t: ["Ano po ang sumunod na nangyari, pagkatapos ng tawag?", "Anong gamot po ang ininom ninyo, at mga ilan?", "Sa tingin po ninyo, maayos ba ang relasyon ninyo?"] },
      n3: { p: "Ininom ko po yung bote ng pampatulog ng nanay ko. Hindi ko po alam, marami. Tapos, ayun, lumipas na lang, at nagising ako kaninang umaga.",
        t: ["Balikan po natin ang mismong pagkatapos ninyong lunukin ang mga iyon. Ano po ang sumunod na nangyari?", "Mabuti po at nagising kayo. Nakakatulog po ba kayo nang maayos nitong mga nakaraan?", "Bakit po kayo iinom ng ganoon karami?"] },
      n4: { p: "Nag-text po ako sa ate ko, 'Sorry sa lahat.' Tapos pinatay ko ang phone ko para hindi siya makatawag.",
        t: ["Ano po ang ibig ninyong sabihin noong isinulat ninyong 'sorry sa lahat'?", "Kaya mukhang gusto lang po talaga ninyong makatulog.", "Mukhang napakasakit po ng gabing iyon."] },
      n5: { p: "Siguro po, ayoko na lang magising.",
        t: ["Salamat po sa pagsasabi. Hindi po iyon madali. Bukod sa gamot, may iba pa po ba kayong naisip na paraan?", "Okay. Kailangan ko po kayong i-admit."] }
    }
  },
  "sim-teen": {
    nodes: {
      n1: { p: "Wala akong problema. Si Mama ang kailangan ng tulong.",
        t: ["Sabi ng mama mo, lagi kang iritable at tumigil ka sa soccer. Parang depression iyon.", "Okay. Ano ang magiging dahilan para masulit mo ang pagpunta mo dito ngayon?", "Puwede mo bang sabihin kung bakit ka niya dinala dito?"] },
      n1x: { p: "Kita mo? Walang kuwenta ito.",
        t: ["Tama ka. Kaya gawin nating sulit. Kung may isang bagay sa bahay na puwedeng magbago pagkatapos ng araw na ito, ano iyon?", "Pakitabi muna ang phone mo."] },
      n2: { p: "Sabihin mo sa kanya, tigilan na niya ako.",
        t: ["Mukhang tense sa bahay. Kung gumanda ang samahan ninyong dalawa, makakatulong ba iyon?", "Nag-aalala siya sa 'yo. Mama mo siya.", "Ano ang ginagawa niya na parang hindi ka niya tinitigilan?"] },
      n3: { p: "Bahala na. Chine-check niya ang phone ko. Sinisigawan niya ako tungkol sa grades.",
        t: ["Isipin mo: nagising ka bukas at magdamag na nag-iba ang lahat ayon sa gusto mo. Ano ang mga bagay na magiging iba?", "May naiisip ka bang saktan ang sarili mo?"] },
      n4: { p: "Makakatulog talaga ako. Gugustuhin ko ulit pumunta sa practice. At magtitiwala siya sa akin.",
        t: ["Magagandang goals iyan. Bago tayo magpatuloy, ipaliwanag ko muna kung ano ang mananatili sa ating dalawa at kung ano ang kakailanganin kong sabihin, halimbawa kung nasa panganib ang kaligtasan mo.", "Ayos. Sasabihin ko sa mama mo ang mga goals na iyan."] }
    }
  },
  "sim-pacing": {
    nodes: {
      n1: { p: "Hindi ako uupo. Akala ninyo ang gagaling ninyo.",
        t: ["(kalmadong boses, mga kamay nakababa at bukas) Baka po makatulong na makapagpahinga kayo kung uupo kayo dito. Tingnan natin kung may maaayos tayo.", "(nakatayo nang tuwid) Umupo ka na, o tatawag ako ng security.", "(lumalapit, kamay sa balikat niya) Hoy, pare, kalma lang."] },
      n1x: { p: "Huwag mo akong hawakan! Lumayo ka!",
        t: ["(umatras, kitang mga kamay, mas mahina) Sige po. Bibigyan ko kayo ng espasyo. Lalabas muna ako sandali.", "Hindi mo ako puwedeng kausapin nang ganyan."] },
      n2: { p: "Bakit naman? Noong huli, pinigilan nila ako at hinawakan nang sapilitan.",
        t: ["Napakasama po ng ganoong karanasan. Walang hahawak sa inyo dahil lang nakikipag-usap kayo sa akin. Puwede po kayong tumayo kung kailangan ninyo. Dito ako uupo.", "Hindi po mangyayari iyon kung makikipagtulungan kayo."] },
      n3: { p: "Sige. Pero hindi ako magtatagal." },
      endGood: { p: "Ilang linggo nang nagpapatugtog ang kapitbahay ko nang alas-tres ng umaga. Hindi na ako nakakatulog." },
      endOk: { p: "Bakit mo ako tinititigan?" }
    }
  }
};
