// Content for the A2.1 crash app. Vocab format: "article|word|plural|english" ("-" plural = none; empty article = not a noun).
const VOCAB = {
  "Familie": [
    "der|Mann|Männer|man, husband","die|Frau|Frauen|woman, wife","das|Kind|Kinder|child","der|Sohn|Söhne|son",
    "die|Tochter|Töchter|daughter","die|Eltern|-|parents","der|Bruder|Brüder|brother","die|Schwester|Schwestern|sister",
    "die|Oma|Omas|grandma","der|Opa|Opas|grandpa","der|Onkel|Onkel|uncle","die|Tante|Tanten|aunt","das|Baby|Babys|baby",
    "die|Familie|Familien|family","der|Freund|Freunde|friend, boyfriend","die|Freundin|Freundinnen|friend (f), girlfriend",
    "die|Geschwister|-|siblings","der|Nachbar|Nachbarn|neighbour","|verheiratet||married","|ledig||single","|geschieden||divorced"
  ],
  "Wohnen": [
    "die|Wohnung|Wohnungen|apartment","das|Haus|Häuser|house","das|Zimmer|Zimmer|room","die|Küche|Küchen|kitchen",
    "das|Bad|Bäder|bathroom","das|Schlafzimmer|Schlafzimmer|bedroom","das|Wohnzimmer|Wohnzimmer|living room",
    "der|Balkon|Balkone|balcony","der|Tisch|Tische|table","der|Stuhl|Stühle|chair","das|Bett|Betten|bed",
    "der|Schrank|Schränke|cupboard, wardrobe","das|Fenster|Fenster|window","die|Tür|Türen|door","die|Miete|Mieten|rent",
    "der|Vermieter|Vermieter|landlord","der|Schlüssel|Schlüssel|key","die|Treppe|Treppen|stairs","der|Aufzug|Aufzüge|elevator",
    "|umziehen||to move house","|mieten||to rent","|putzen||to clean","|aufräumen||to tidy up"
  ],
  "Essen": [
    "das|Brot|Brote|bread","das|Brötchen|Brötchen|bread roll","der|Käse|-|cheese","die|Milch|-|milk","das|Ei|Eier|egg",
    "das|Fleisch|-|meat","der|Fisch|Fische|fish","das|Gemüse|-|vegetables","das|Obst|-|fruit","der|Apfel|Äpfel|apple",
    "die|Kartoffel|Kartoffeln|potato","der|Reis|-|rice","die|Nudel|Nudeln|noodle, pasta","der|Kaffee|-|coffee","der|Tee|Tees|tea",
    "das|Wasser|-|water","der|Saft|Säfte|juice","das|Bier|Biere|beer","der|Wein|Weine|wine","das|Frühstück|-|breakfast",
    "das|Mittagessen|-|lunch","das|Abendessen|-|dinner","die|Rechnung|Rechnungen|bill","der|Hunger|-|hunger","der|Durst|-|thirst",
    "|lecker||tasty","|kochen||to cook","|bestellen||to order","|schmecken||to taste"
  ],
  "Arbeit": [
    "die|Arbeit|-|work","der|Beruf|Berufe|profession","die|Firma|Firmen|company","der|Chef|Chefs|boss",
    "der|Kollege|Kollegen|colleague","das|Büro|Büros|office","die|Besprechung|Besprechungen|meeting","der|Termin|Termine|appointment",
    "der|Urlaub|Urlaube|vacation","das|Gehalt|Gehälter|salary","die|Stelle|Stellen|job, position","der|Vertrag|Verträge|contract",
    "die|Pause|Pausen|break","die|E-Mail|E-Mails|email","|verdienen||to earn","|sich bewerben||to apply (for a job)",
    "|anfangen||to start","|aufhören||to stop","|pünktlich||punctual","|fertig||finished, ready"
  ],
  "Unterwegs": [
    "der|Bahnhof|Bahnhöfe|train station","der|Zug|Züge|train","der|Bus|Busse|bus","die|U-Bahn|U-Bahnen|subway",
    "die|Straßenbahn|Straßenbahnen|tram","das|Auto|Autos|car","das|Fahrrad|Fahrräder|bicycle","der|Flughafen|Flughäfen|airport",
    "das|Flugzeug|Flugzeuge|airplane","die|Fahrkarte|Fahrkarten|ticket","der|Koffer|Koffer|suitcase","die|Reise|Reisen|trip",
    "die|Haltestelle|Haltestellen|stop (bus, tram)","das|Gleis|Gleise|platform, track","die|Verspätung|Verspätungen|delay",
    "der|Ausweis|Ausweise|ID card","der|Pass|Pässe|passport","|abfahren||to depart","|ankommen||to arrive",
    "|umsteigen||to change (trains)","|fliegen||to fly","|links||left","|rechts||right","|geradeaus||straight ahead"
  ],
  "Gesundheit": [
    "der|Arzt|Ärzte|doctor","die|Apotheke|Apotheken|pharmacy","das|Krankenhaus|Krankenhäuser|hospital",
    "das|Medikament|Medikamente|medicine","der|Kopf|Köpfe|head","der|Bauch|Bäuche|belly","der|Rücken|Rücken|back",
    "die|Hand|Hände|hand","der|Fuß|Füße|foot","das|Bein|Beine|leg","der|Arm|Arme|arm","das|Auge|Augen|eye","der|Zahn|Zähne|tooth",
    "der|Schmerz|Schmerzen|pain","das|Fieber|-|fever","die|Erkältung|Erkältungen|cold (illness)","|krank||sick","|gesund||healthy",
    "|müde||tired","|wehtun||to hurt"
  ],
  "Zeit": [
    "der|Tag|Tage|day","die|Woche|Wochen|week","der|Monat|Monate|month","das|Jahr|Jahre|year","die|Stunde|Stunden|hour",
    "die|Minute|Minuten|minute","der|Morgen|Morgen|morning","der|Nachmittag|Nachmittage|afternoon","der|Abend|Abende|evening",
    "die|Nacht|Nächte|night","das|Wochenende|Wochenenden|weekend","|morgen||tomorrow","|gestern||yesterday","|früh||early",
    "|spät||late","|bald||soon","|später||later","|immer||always","|oft||often","|manchmal||sometimes","|selten||rarely","|nie||never"
  ],
  "Adjektive": [
    "|glücklich||happy","|traurig||sad","|froh||glad","|wütend||angry","|nervös||nervous","|langweilig||boring",
    "|schön||beautiful","|nett||nice","|freundlich||friendly","|lustig||funny","|schwierig||difficult","|einfach||easy, simple",
    "|teuer||expensive","|billig||cheap","|laut||loud","|leise||quiet","|langsam||slow","|voll||full","|leer||empty",
    "|richtig||correct","|falsch||wrong"
  ],
  "Stadt": [
    "die|Stadt|Städte|city","die|Straße|Straßen|street","der|Platz|Plätze|square, seat","der|Park|Parks|park",
    "das|Geschäft|Geschäfte|shop","der|Supermarkt|Supermärkte|supermarket","die|Bäckerei|Bäckereien|bakery",
    "die|Bank|Banken|bank","die|Post|-|post office","das|Rathaus|Rathäuser|town hall","das|Amt|Ämter|government office",
    "das|Geld|-|money","der|Preis|Preise|price","die|Kasse|Kassen|checkout","die|Tasche|Taschen|bag","die|Kleidung|-|clothing",
    "die|Hose|Hosen|trousers","das|Hemd|Hemden|shirt","die|Jacke|Jacken|jacket","der|Schuh|Schuhe|shoe",
    "|bezahlen||to pay","|kosten||to cost","|anprobieren||to try on"
  ],
  "Freizeit": [
    "die|Freizeit|-|free time","das|Hobby|Hobbys|hobby","das|Kino|Kinos|cinema","der|Film|Filme|film","das|Buch|Bücher|book",
    "die|Musik|-|music","das|Konzert|Konzerte|concert","das|Spiel|Spiele|game","der|Ausflug|Ausflüge|outing, day trip",
    "das|Wetter|-|weather","die|Sonne|-|sun","der|Regen|-|rain","der|Schnee|-|snow","der|Frühling|-|spring","der|Herbst|-|autumn",
    "|spazieren gehen||to go for a walk","|fernsehen||to watch TV","|sich treffen||to meet","|einladen||to invite"
  ],
  "Sprache": [
    "die|Nachricht|Nachrichten|message, news","der|Brief|Briefe|letter","das|Handy|Handys|mobile phone",
    "die|Frage|Fragen|question","die|Antwort|Antworten|answer","die|Sprache|Sprachen|language","das|Wort|Wörter|word",
    "der|Kurs|Kurse|course","die|Prüfung|Prüfungen|exam","|anrufen||to call (phone)","|antworten||to answer",
    "|erzählen||to tell","|verstehen||to understand","|wiederholen||to repeat","|üben||to practise","|vergessen||to forget",
    "|sich erinnern||to remember"
  ]
};

// Grammar. f = fill (s with ___, h hint, a accepted answers), o = order tiles (lead + words, a = correct order).
const G = {
  cases: [
    {s:"Ich sehe ___ Mann.",h:"der",a:["den"],en:"I see the man.",r:"sehen takes accusative. Masc der → den."},
    {s:"Ich kaufe ___ Apfel.",h:"ein",a:["einen"],en:"I'm buying an apple.",r:"kaufen takes accusative. Masc ein → einen."},
    {s:"Ich helfe ___ Frau.",h:"die",a:["der"],en:"I help the woman.",r:"helfen always takes dative. Fem die → der."},
    {s:"___ Kind spielt im Garten.",h:"das",a:["das"],en:"The child plays in the garden.",r:"Subject → nominative."},
    {s:"Ich gebe ___ Mann ___ Buch.",h:"der, das",a:["dem das"],en:"I give the man the book.",r:"Recipient = dative (dem). Thing = accusative (das)."},
    {s:"Ich habe ___ Auto.",h:"no car",a:["kein"],en:"I have no car.",r:"Negate a noun with kein, not nicht. Neut acc: kein."},
    {s:"Er hat ___ Zeit.",h:"no time",a:["keine"],en:"He has no time.",r:"Fem: keine."},
    {s:"Wir haben ___ Hund.",h:"no dog",a:["keinen"],en:"We have no dog.",r:"Masc acc: keinen."},
    {s:"Das Buch gehört ___ Lehrer.",h:"der",a:["dem"],en:"The book belongs to the teacher.",r:"gehören takes dative. Masc: dem."},
    {s:"Ich besuche ___ Oma.",h:"die",a:["die"],en:"I visit grandma.",r:"besuchen takes accusative. Fem acc stays die."},
    {s:"Ich danke ___ Kindern.",h:"die, plural",a:["den"],en:"I thank the children.",r:"danken takes dative. Plural dative: den, and the noun gets -n."},
    {s:"Ich suche ___ Bahnhof.",h:"der",a:["den"],en:"I'm looking for the station.",r:"suchen takes accusative. Masc der → den."},
    {s:"Ich trinke ___ Kaffee.",h:"ein",a:["einen"],en:"I'm drinking a coffee.",r:"trinken takes accusative. Masc ein → einen."},
    {s:"Das Essen schmeckt ___ Vater.",h:"der",a:["dem"],en:"Dad likes the food.",r:"schmecken takes dative. Masc: dem."},
    {s:"Ich trinke ___ Bier.",h:"no beer",a:["kein"],en:"I don't drink beer.",r:"Negating a noun → kein."}
  ],
  dativ: [
    {s:"Ich fahre ___ dem Bus zur Arbeit.",h:"with/by",a:["mit"],en:"I take the bus to work.",r:"mit + dative = with / by (transport)."},
    {s:"Ich komme ___ den USA.",h:"from",a:["aus"],en:"I come from the USA.",r:"aus = from (origin)."},
    {s:"Ich wohne ___ drei Jahren in Berlin.",h:"for",a:["seit"],en:"I've lived in Berlin for three years.",r:"seit + dative = for/since (still true now)."},
    {s:"Ich gehe jetzt ___ Hause.",h:"home",a:["nach"],en:"I'm going home now.",r:"nach Hause = going home."},
    {s:"Ich bin ___ Hause.",h:"at home",a:["zu"],en:"I'm at home.",r:"zu Hause = at home."},
    {s:"Ich war gestern ___ Arzt.",h:"at the",a:["beim","bei dem"],en:"I was at the doctor's yesterday.",r:"bei = at someone's place. bei dem → beim."},
    {s:"Ich fahre mit ___ Fahrrad.",h:"das",a:["dem"],en:"I go by bike.",r:"mit → dative. Neut das → dem."},
    {s:"Das Geschenk ist ___ meiner Mutter.",h:"from",a:["von"],en:"The present is from my mother.",r:"von = from (a person)."},
    {s:"Ich gehe ___ Supermarkt.",h:"to the",a:["zum","zu dem"],en:"I'm going to the supermarket.",r:"zu + dem → zum (masc/neut)."},
    {s:"Ich gehe ___ Apotheke.",h:"to the",a:["zur","zu der"],en:"I'm going to the pharmacy.",r:"zu + der → zur (fem)."},
    {s:"Kannst du ___ helfen?",h:"ich",a:["mir"],en:"Can you help me?",r:"helfen → dative. ich → mir."},
    {s:"Das Kleid gefällt ___.",h:"sie, she",a:["ihr"],en:"She likes the dress.",r:"gefallen → dative. sie (she) → ihr."},
    {s:"Ich danke ___.",h:"Sie",a:["ihnen"],en:"Thank you (formal).",r:"danken → dative. Sie → Ihnen."},
    {s:"Gehört das Handy ___?",h:"du",a:["dir"],en:"Is the phone yours?",r:"gehören → dative. du → dir."},
    {s:"Die Schuhe passen ___ nicht.",h:"er",a:["ihm"],en:"The shoes don't fit him.",r:"passen → dative. er → ihm."},
    {s:"Nach ___ Essen trinke ich Kaffee.",h:"das",a:["dem"],en:"After the meal I drink coffee.",r:"nach + dative. das → dem."}
  ],
  perfekt: [
    {s:"Ich ___ gestern ins Kino ___.",h:"gehen",a:["bin gegangen"],en:"I went to the cinema yesterday.",r:"Movement → sein."},
    {s:"Wir ___ Pizza ___.",h:"essen",a:["haben gegessen"],en:"We ate pizza.",r:"No movement → haben. essen → gegessen."},
    {s:"Er ___ nach Hamburg ___.",h:"fahren",a:["ist gefahren"],en:"He drove to Hamburg.",r:"Movement → sein."},
    {s:"Ich ___ lange ___.",h:"schlafen",a:["habe geschlafen"],en:"I slept for a long time.",r:"No movement → haben."},
    {s:"Sie ___ um 7 Uhr ___.",h:"aufstehen",a:["ist aufgestanden"],en:"She got up at 7.",r:"Change of state → sein. Separable: auf-ge-standen."},
    {s:"Was ___ du am Wochenende ___?",h:"machen",a:["hast gemacht"],en:"What did you do at the weekend?",r:"haben. Regular: ge-mach-t."},
    {s:"Mein Sohn ___ krank ___.",h:"werden",a:["ist geworden"],en:"My son got sick.",r:"werden = change of state → sein."},
    {s:"Ich ___ zu Hause ___.",h:"bleiben",a:["bin geblieben"],en:"I stayed at home.",r:"bleiben takes sein. Memorize it."},
    {s:"Er ___ Informatik ___.",h:"studieren",a:["hat studiert"],en:"He studied computer science.",r:"-ieren verbs: no ge-."},
    {s:"Wann ___ ihr ___?",h:"ankommen",a:["seid angekommen"],en:"When did you (pl) arrive?",r:"Movement → sein. ihr → seid."},
    {s:"Ich ___ meine Mutter ___.",h:"anrufen",a:["habe angerufen"],en:"I called my mother.",r:"Has a direct object → haben."},
    {s:"Der Zug ___ pünktlich ___.",h:"abfahren",a:["ist abgefahren"],en:"The train left on time.",r:"Movement → sein."},
    {s:"Du ___ den Film ___.",h:"sehen",a:["hast gesehen"],en:"You saw the film.",r:"haben. sehen → gesehen."},
    {s:"Was ___ ___?",h:"passieren",a:["ist passiert"],en:"What happened?",r:"passieren → sein, and -ieren has no ge-."},
    {s:"Ich ___ 2015 nach Deutschland ___.",h:"kommen",a:["bin gekommen"],en:"I came to Germany in 2015.",r:"Movement → sein."}
  ],
  trennbar: [
    {s:"Ich ___ um 6 Uhr ___.",h:"aufstehen",a:["stehe auf"],en:"I get up at 6.",r:"Separable: prefix to the end."},
    {s:"Der Film ___ um 20 Uhr ___.",h:"anfangen",a:["fängt an"],en:"The film starts at 8 pm.",r:"Separable, and a → ä for er/sie/es."},
    {s:"Wir ___ am Samstag ___.",h:"einkaufen",a:["kaufen ein"],en:"We go shopping on Saturday.",r:"Separable: ein to the end."},
    {s:"___ du mich morgen ___?",h:"anrufen",a:["rufst an"],en:"Will you call me tomorrow?",r:"Question: verb first, prefix still at the end."},
    {s:"Ich ___ die Kinder um 16 Uhr ___.",h:"abholen",a:["hole ab"],en:"I pick up the kids at 4.",r:"Separable: ab to the end."},
    {s:"Der Zug ___ um 9 Uhr ___.",h:"ankommen",a:["kommt an"],en:"The train arrives at 9.",r:"Separable: an to the end."},
    {s:"Er ___ heute Abend ___.",h:"fernsehen",a:["sieht fern"],en:"He's watching TV tonight.",r:"Separable, and e → ie."},
    {s:"Ich möchte morgen früh ___.",h:"aufstehen",a:["aufstehen"],en:"I want to get up early tomorrow.",r:"With a modal, the separable verb stays in one piece at the end."},
    {s:"Er ___ gut Deutsch.",h:"sprechen",a:["spricht"],en:"He speaks German well.",r:"e → i: er spricht."},
    {s:"Du ___ mit dem Auto.",h:"fahren",a:["fährst"],en:"You go by car.",r:"a → ä: du fährst."},
    {s:"Sie ___ ein Buch.",h:"lesen",a:["liest"],en:"She's reading a book.",r:"e → ie: sie liest."},
    {s:"Er ___ den Bus.",h:"nehmen",a:["nimmt"],en:"He takes the bus.",r:"nehmen → er nimmt (irregular)."},
    {s:"Was ___ du?",h:"essen",a:["isst"],en:"What are you eating?",r:"e → i: du isst."},
    {s:"Mein Sohn ___ lange.",h:"schlafen",a:["schläft"],en:"My son sleeps late.",r:"a → ä: er schläft."},
    {s:"___ du das?",h:"sehen",a:["siehst"],en:"Do you see that?",r:"e → ie: du siehst."}
  ],
  modal: [
    {s:"___ du schwimmen?",h:"können",a:["kannst"],en:"Can you swim?",r:"können: ich kann, du kannst."},
    {s:"Ich ___ heute arbeiten.",h:"müssen",a:["muss"],en:"I have to work today.",r:"müssen: ich muss."},
    {s:"Er ___ einen Kaffee.",h:"möchten",a:["möchte"],en:"He'd like a coffee.",r:"möchten: er möchte (no -t)."},
    {s:"Hier ___ man nicht rauchen.",h:"dürfen",a:["darf"],en:"You can't smoke here.",r:"dürfen = be allowed. man darf."},
    {s:"Was ___ ich machen?",h:"sollen",a:["soll"],en:"What should I do?",r:"sollen: ich soll."},
    {s:"Wir ___ nach Spanien fahren.",h:"wollen",a:["wollen"],en:"We want to go to Spain.",r:"wollen: wir wollen."},
    {s:"Ich ___ gestern nicht kommen.",h:"können, past",a:["konnte"],en:"I couldn't come yesterday.",r:"Präteritum: konnte (no umlaut)."},
    {s:"Er ___ lange arbeiten.",h:"müssen, past",a:["musste"],en:"He had to work late.",r:"Präteritum: musste."},
    {s:"Wir ___ ins Kino gehen.",h:"wollen, past",a:["wollten"],en:"We wanted to go to the cinema.",r:"Präteritum: wollten."},
    {s:"Als Kind ___ ich keine Cola trinken.",h:"dürfen, past",a:["durfte"],en:"As a kid I wasn't allowed cola.",r:"Präteritum: durfte."},
    {s:"Ihr ___ Deutsch lernen.",h:"müssen",a:["müsst"],en:"You (pl) have to learn German.",r:"müssen: ihr müsst."},
    {s:"Sie ___ gut kochen.",h:"können, she",a:["kann"],en:"She can cook well.",r:"können: sie kann."},
    {s:"Du ___ mehr Wasser trinken.",h:"sollen",a:["sollst"],en:"You should drink more water.",r:"sollen: du sollst."},
    {s:"Ich ___ keinen Fisch.",h:"mögen",a:["mag"],en:"I don't like fish.",r:"mögen: ich mag."},
    {s:"___ ich das Fenster öffnen?",h:"dürfen",a:["darf"],en:"May I open the window?",r:"dürfen: ich darf."}
  ],
  nebensatz: [
    {s:"Ich bleibe zu Hause, weil ich krank ___.",h:"sein",a:["bin"],en:"I'm staying home because I'm sick.",r:"weil sends the verb to the end."},
    {t:"o",lead:"Ich lerne Deutsch, weil",w:["ich","in Berlin","wohne"],a:"ich in Berlin wohne",en:"I'm learning German because I live in Berlin.",r:"weil → verb to the end."},
    {t:"o",lead:"Ich glaube, dass",w:["er","heute","kommt"],a:"er heute kommt",en:"I think he's coming today.",r:"dass → verb to the end."},
    {s:"___ es regnet, bleiben wir drinnen.",h:"if/when",a:["wenn"],en:"If it rains, we stay inside.",r:"wenn = if / whenever."},
    {t:"o",lead:"Ich bin müde, weil",w:["ich","schlecht","habe","geschlafen"],a:"ich schlecht geschlafen habe",en:"I'm tired because I slept badly.",r:"The conjugated verb (habe) goes last, after the participle."},
    {s:"Ich weiß, ___ du recht hast.",h:"that",a:["dass"],en:"I know that you're right.",r:"dass = that."},
    {t:"o",lead:"Wenn ich Zeit habe,",w:["ich","lese","ein Buch"],a:"lese ich ein Buch",en:"When I have time, I read a book.",r:"After a wenn clause, the main clause starts with its verb."},
    {t:"o",lead:"Er sagt, dass",w:["er","keine Zeit","hat"],a:"er keine Zeit hat",en:"He says he has no time.",r:"dass → verb to the end."},
    {t:"o",lead:"Ich gehe früh ins Bett, weil",w:["ich","muss","früh","aufstehen"],a:"ich früh aufstehen muss",en:"I go to bed early because I have to get up early.",r:"The modal goes last, after the infinitive."},
    {s:"Ich komme nicht, ___ ich krank bin.",h:"because",a:["weil"],en:"I'm not coming because I'm sick.",r:"weil = because."},
    {t:"o",lead:"Wenn das Wetter gut ist,",w:["wir","gehen","in den Park"],a:"gehen wir in den Park",en:"If the weather's good, we go to the park.",r:"Main clause after wenn: verb first."},
    {t:"o",lead:"Ich hoffe, dass",w:["du","morgen","kommen","kannst"],a:"du morgen kommen kannst",en:"I hope you can come tomorrow.",r:"Modal last."},
    {s:"Ich rufe dich an, ___ ich in Berlin bin.",h:"when",a:["wenn"],en:"I'll call you when I'm in Berlin.",r:"wenn = when (present/future)."},
    {t:"o",lead:"Sie ist glücklich, weil",w:["ihr Sohn","angerufen","hat"],a:"ihr Sohn angerufen hat",en:"She's happy because her son called.",r:"Conjugated verb last."}
  ],
  possessiv: [
    {s:"Ich besuche ___ Bruder.",h:"mein",a:["meinen"],en:"I visit my brother.",r:"Accusative masc: meinen."},
    {s:"Ich helfe ___ Schwester.",h:"mein",a:["meiner"],en:"I help my sister.",r:"helfen → dative. Fem: meiner."},
    {s:"Ich spiele mit ___ Kindern.",h:"mein",a:["meinen"],en:"I play with my kids.",r:"mit → dative. Plural: meinen + -n."},
    {s:"Hast du ___ Schlüssel?",h:"dein, masc",a:["deinen"],en:"Do you have your key?",r:"Accusative masc: deinen."},
    {s:"Er wohnt bei ___ Eltern.",h:"sein",a:["seinen"],en:"He lives with his parents.",r:"bei → dative plural: seinen."},
    {s:"Wir fahren mit ___ Auto.",h:"unser",a:["unserem"],en:"We go in our car.",r:"mit → dative neut: unserem."},
    {s:"Sie ruft ___ Mann an.",h:"ihr",a:["ihren"],en:"She calls her husband.",r:"Accusative masc: ihren."},
    {s:"Ich gebe ___ Tochter das Buch.",h:"mein",a:["meiner"],en:"I give my daughter the book.",r:"Recipient → dative. Fem: meiner."},
    {s:"Ich freue ___ auf das Wochenende.",h:"reflexive",a:["mich"],en:"I'm looking forward to the weekend.",r:"ich → mich."},
    {s:"Er interessiert ___ für Fußball.",h:"reflexive",a:["sich"],en:"He's interested in football.",r:"er → sich."},
    {s:"Wir treffen ___ um 8 Uhr.",h:"reflexive",a:["uns"],en:"We're meeting at 8.",r:"wir → uns."},
    {s:"Freust du ___?",h:"reflexive",a:["dich"],en:"Are you happy (about it)?",r:"du → dich."},
    {s:"Ihr müsst ___ beeilen.",h:"reflexive",a:["euch"],en:"You (pl) have to hurry.",r:"ihr → euch."},
    {s:"Ich interessiere mich ___ Musik.",h:"for",a:["für"],en:"I'm interested in music.",r:"sich interessieren für."},
    {s:"Ich freue mich ___ den Urlaub.",h:"looking forward",a:["auf"],en:"I'm looking forward to the holiday.",r:"sich freuen auf = look forward to."}
  ],
  zeit: [
    {s:"___ Montag habe ich Deutschkurs.",h:"on",a:["am"],en:"On Monday I have German class.",r:"Days: am."},
    {s:"___ Januar ist es kalt.",h:"in",a:["im"],en:"It's cold in January.",r:"Months and seasons: im."},
    {s:"Der Kurs beginnt ___ 9 Uhr.",h:"at",a:["um"],en:"The course starts at 9.",r:"Clock time: um."},
    {s:"___ Wochenende gehen wir schwimmen.",h:"at the",a:["am"],en:"At the weekend we go swimming.",r:"am Wochenende."},
    {s:"___ Sommer fahren wir nach Italien.",h:"in",a:["im"],en:"In summer we go to Italy.",r:"Seasons: im."},
    {s:"Ich habe ___ zwei Wochen angefangen.",h:"ago",a:["vor"],en:"I started two weeks ago.",r:"vor + time = ago (dative)."},
    {s:"___ dem Essen putze ich die Zähne.",h:"after",a:["nach"],en:"After eating I brush my teeth.",r:"nach + dative = after."},
    {s:"___ dem Frühstück trinke ich Kaffee.",h:"before",a:["vor"],en:"Before breakfast I drink coffee.",r:"vor + dative = before."},
    {s:"Ich trinke ___ Kaffee. Jeden Tag!",h:"always",a:["immer"],en:"I always drink coffee.",r:"immer = always."},
    {s:"Ich esse ___ Fleisch.",h:"never",a:["nie"],en:"I never eat meat.",r:"nie = never."},
    {s:"Wir gehen ___ ins Kino.",h:"sometimes",a:["manchmal"],en:"We sometimes go to the cinema.",r:"manchmal = sometimes."},
    {s:"Ich fahre ___ mit dem Fahrrad.",h:"usually",a:["meistens"],en:"I usually go by bike.",r:"meistens = mostly, usually."},
    {s:"Er kommt ___ zu spät.",h:"often",a:["oft"],en:"He's often late.",r:"oft = often."},
    {s:"Ich bin ___ 2021 in Berlin.",h:"since",a:["seit"],en:"I've been in Berlin since 2021.",r:"seit = since (still true)."},
    {s:"Der Termin ist ___ Dienstag ___ 10 Uhr.",h:"on, at",a:["am um"],en:"The appointment is on Tuesday at 10.",r:"am + day, um + clock time."}
  ],
  mix2: [
    {t:"o",lead:"Ich bin müde, weil",w:["ich","spät","ins Bett","gegangen","bin"],a:"ich spät ins Bett gegangen bin",en:"I'm tired because I went to bed late.",r:"In a weil clause: participle, then the auxiliary last."},
    {t:"o",lead:"Er sagt, dass",w:["er","den Film","gesehen","hat"],a:"er den Film gesehen hat",en:"He says he saw the film.",r:"Auxiliary last."},
    {t:"o",lead:"Wir sind glücklich, weil",w:["wir","eine Wohnung","gefunden","haben"],a:"wir eine Wohnung gefunden haben",en:"We're happy because we found an apartment.",r:"Auxiliary last."},
    {s:"Ich glaube, dass sie nach Hause ___ ___.",h:"gehen",a:["gegangen ist"],en:"I think she went home.",r:"dass clause: participle, then ist."},
    {s:"Er ist nicht gekommen, weil er krank ___ ___.",h:"werden",a:["geworden ist"],en:"He didn't come because he got sick.",r:"werden → sein. Auxiliary last."},
    {t:"o",lead:"Gestern",w:["habe","ich","lange","geschlafen"],a:"habe ich lange geschlafen",en:"Yesterday I slept for a long time.",r:"Verb in position 2: Gestern habe ich..."},
    {t:"o",lead:"Am Wochenende",w:["sind","wir","nach Potsdam","gefahren"],a:"sind wir nach Potsdam gefahren",en:"At the weekend we went to Potsdam.",r:"Verb in position 2. Movement → sein."},
    {s:"Ich habe gehört, dass du umgezogen ___.",h:"sein",a:["bist"],en:"I heard you moved.",r:"umziehen → sein. du → bist."},
    {t:"o",lead:"Weil es geregnet hat,",w:["sind","wir","zu Hause","geblieben"],a:"sind wir zu Hause geblieben",en:"Because it rained, we stayed home.",r:"After a weil clause the main clause starts with its verb."},
    {t:"o",lead:"Sie erzählt, dass",w:["sie","um 6 Uhr","aufgestanden","ist"],a:"sie um 6 Uhr aufgestanden ist",en:"She says she got up at 6.",r:"aufstehen → sein. Auxiliary last."},
    {s:"Ich bin froh, dass du mich ___ ___.",h:"anrufen",a:["angerufen hast"],en:"I'm glad you called me.",r:"Participle, then hast."},
    {t:"o",lead:"Wenn ich Zeit habe,",w:["koche","ich","für die Familie"],a:"koche ich für die Familie",en:"When I have time, I cook for the family.",r:"Main clause after wenn: verb first."}
  ]
};

// 12-day plan. topics = grammar banks to draw from. n = number of grammar items.
const PLAN = [
  {d:"2026-11-11",icon:"🧩",title:"Fälle",sub:"Nom / Akk / Dat + kein",topics:["cases"],n:12,talk:"your family and what you have at home. Use accusative and dative (ich habe einen..., ich helfe meiner...)."},
  {d:"2026-11-12",icon:"🎯",title:"Dativ",sub:"aus bei mit nach seit von zu",topics:["dativ"],n:12,talk:"how you get around Berlin and where you go in a normal week. Use mit, zu, bei, nach, seit."},
  {d:"2026-11-13",icon:"⏪",title:"Perfekt",sub:"haben oder sein?",topics:["perfekt"],n:12,talk:"what you did last weekend. Use Perfekt, and push me on haben vs sein."},
  {d:"2026-11-14",icon:"✂️",title:"Trennbar",sub:"aufstehen, er spricht",topics:["trennbar"],n:12,talk:"my daily routine, morning to night. Use separable verbs (aufstehen, anfangen, abholen, einkaufen)."},
  {d:"2026-11-15",icon:"💪",title:"Modalverben",sub:"kann, muss, konnte",topics:["modal"],n:12,talk:"what I can, must and want to do this week, and what I couldn't do last week (konnte, musste)."},
  {d:"2026-11-16",icon:"🏁",title:"Checkpoint",sub:"Tage 1 bis 5",topics:["cases","dativ","perfekt","trennbar","modal"],n:15,talk:"anything: a free conversation that mixes cases, Perfekt and modals."},
  {d:"2026-11-17",icon:"🔚",title:"weil / dass",sub:"Verb ans Ende",topics:["nebensatz"],n:12,talk:"why I'm learning German and what I think about life in Berlin. Make me use weil, dass and wenn."},
  {d:"2026-11-18",icon:"🪞",title:"Possessiv",sub:"meinem, mich, sich",topics:["possessiv"],n:12,talk:"what I'm looking forward to and what I'm interested in (sich freuen auf, sich interessieren für)."},
  {d:"2026-11-19",icon:"🕐",title:"Zeit",sub:"am, im, um, vor",topics:["zeit"],n:12,talk:"my schedule this week and how often I do things (immer, oft, manchmal, nie)."},
  {d:"2026-11-20",icon:"🔗",title:"Nebensatz + Perfekt",sub:"weil ich ... bin",topics:["mix2"],n:12,talk:"a story about something that went wrong recently, using Perfekt and weil."},
  {d:"2026-11-21",icon:"🗣️",title:"Sprechtag",sub:"20 Min reden",topics:["cases","dativ","perfekt","trennbar","modal","nebensatz","possessiv","zeit","mix2"],n:8,talk:"a 20 minute free conversation: work, family, plans for the A2.2 course. Use everything."},
  {d:"2026-11-22",icon:"🎓",title:"Finale",sub:"Bereit für A2.2",topics:["cases","dativ","perfekt","trennbar","modal","nebensatz","possessiv","zeit","mix2"],n:20,talk:"anything. At the end, give me the 3 things I should watch for in class."}
];
const COURSE_START = "2026-11-23";
