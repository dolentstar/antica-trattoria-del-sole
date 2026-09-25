// Dati del sito. Il template (index.html) legge solo questo file.
window.SITE = {
  layout: "trattoria",
  name: "Antica Trattoria del Sole",
  shortName: "Trattoria del Sole",
  tagline: "Trattoria · Ristorante",
  since: "",
  city: "Torino",
  seoTitle: "Antica Trattoria del Sole · Torino, via Bardonecchia",
  seoDescription: "Antica Trattoria del Sole, via Bardonecchia 100/c Torino. Pesce fresco ogni giorno e cucina piemontese: vitello tonnato, agnolotti del plin, brasati, finanziera. Aperti a pranzo e cena.",
  logo: "img/logo.webp",
  address: "Via Bardonecchia 100/c, 10139 Torino",
  addressShort: "Via Bardonecchia 100/c, Torino",
  addressLead: "Per prenotare un tavolo chiamate il ristorante o il cellulare 366 321 0514.",
  mapsQuery: "Antica Trattoria del Sole, Via Bardonecchia 100/c, Torino",
  phone: "011 742 8055",
  phoneIntl: "+390117428055",
  whatsapp: "",
  email: "anticatrattoriadelsole@gmail.com",
  social: { facebook: "https://www.facebook.com/anticatrattoriadelsoletorino/", instagram: "" },
  piva: "",
  footerLine: "Una storia lunga oltre 70 anni, a pranzo e a cena.",
  rating: { value: "4,1", count: "322", source: "Google" },
  theme: { primary: "#1f4a33", primaryDark: "#143323", accent: "#b0701a", accentLight: "#f3d95a", soft: "#e8efe9", cream: "#f8f3e3", paper: "#fcf9f0", line: "#e6dfc8" },

  hero: {
    image: "img/sala.webp",
    imageAlt: "La sala dell'Antica Trattoria del Sole con le tovaglie gialle",
    eyebrow: "Via Bardonecchia · Torino",
    title: "Una storia",
    titleEm: "lunga oltre 70 anni",
    lead: "Locali rustici, servizio curato e una cucina che mette insieme il pesce fresco di ogni giorno e i piatti della tradizione piemontese.",
    cta: "Prenota un tavolo",
    badges: ["Pesce fresco ogni giorno", "Cucina piemontese", "Pasta fatta in casa", "Pranzo e cena"]
  },

  pillars: [
    { t: "Il pesce", d: "Il cavallo di battaglia della casa: reperito fresco ogni giorno presso fornitori fidati." },
    { t: "La tradizione piemontese", d: "Vitello tonnato, agnolotti del plin, finanziera, brasati e fritto misto alla piemontese." },
    { t: "Pasta di produzione propria", d: "Agnolotti del plin e tagliolini preparati in casa." },
    { t: "Carni scelte", d: "Specialità piemontesi e carni di provenienza argentina e irlandese." }
  ],

  story: {
    image: "img/insegna.webp",
    imageAlt: "L'insegna gialla dell'Antica Trattoria del Sole in via Bardonecchia",
    eyebrow: "Chi siamo",
    title: "Nata come trattoria con stallaggio",
    paragraphs: [
      "L'Antica Trattoria del Sole è nata come trattoria con stallaggio oltre 70 anni fa. Per più di 40 anni è stata gestita dalla stessa famiglia, entrando nella storia del borgo.",
      "Oggi è un ristorante accogliente che mantiene il <strong>carattere rustico dei suoi locali</strong>, con una cucina ricercata che esalta i sapori tipici: il pesce, cucinato senza snaturarne gli aromi, e le specialità piemontesi, insieme a quanto di meglio offre la stagione."
    ],
    bullets: ["Pesce e crostacei freschi", "Fritto misto alla piemontese su prenotazione", "Bunet, panna cotta e zabaione", "Aperti a pranzo e a cena"]
  },

  menu: {
    eyebrow: "In cucina",
    title: "Alcuni dei nostri piatti",
    lead: "Il menù segue il mercato e la stagione: qui trovate alcune delle specialità della casa. Per il pesce del giorno, i prezzi e le disponibilità chiedete al personale.",
    notes: [
      "Il fritto misto alla piemontese si prepara su prenotazione.",
      "Alcuni piatti possono contenere allergeni: chiedete al personale le informazioni sugli allergeni."
    ],
    categories: [
 {id:"antipasti", t:"Antipasti", s:"Antipasti", items:[
  ["Vitello tonnato","","","Classico"],
  ["Flan con verdure di stagione","",""],
  ["Acciughe al verde","",""],
  ["Involtino di peperone arrostito","","con crema di tomino"],
 ]},
 {id:"primi", t:"Primi di pasta fresca", s:"Primi", note:"Pasta di produzione propria", items:[
  ["Agnolotti del plin","",""],
  ["Tagliolini al ragù di Fassona","","razza Piemontese"],
 ]},
 {id:"pesce", t:"Dal mare", s:"Pesce", items:[
  ["Pesce del giorno","","reperito fresco ogni giorno: chiedete al personale le proposte","Ogni giorno"],
  ["Crostacei","","ampia scelta: chiedete al personale"],
 ]},
 {id:"piemonte", t:"Secondi della tradizione", s:"Tradizione", items:[
  ["Brasati e arrosti","","cotti a bassa temperatura"],
  ["Frittura di cervella","","con carciofi o con funghi porcini"],
  ["Finanziera","",""],
  ["Fritto misto alla piemontese","","su prenotazione"],
 ]},
 {id:"carne", t:"Carni", s:"Carni", items:[
  ["Carni di provenienza argentina e irlandese","","chiedete al personale i tagli disponibili"],
 ]},
 {id:"dolci", t:"Dolci", s:"Dolci", items:[
  ["Bunet piemontese","",""],
  ["Crème caramel","",""],
  ["Panna cotta d'Antan","",""],
  ["Zabaione","","al marsala o al moscato"],
  ["Semifreddo al torrone","","con cioccolato caldo"],
 ]},
]
  },

  gallery: {
    eyebrow: "Il locale",
    title: "Benvenuti al Sole",
    lead: "Sale accoglienti dal carattere rustico, a pranzo e a cena.",
    images: [
      { src: "img/sala.webp", alt: "La sala principale" },
      { src: "img/pasta-cozze.webp", alt: "Pasta con cozze e vongole" },
      { src: "img/sala-2.webp", alt: "La seconda sala" },
      { src: "img/staff.webp", alt: "Lo staff al banco" },
      { src: "img/insegna.webp", alt: "L'insegna in via Bardonecchia" }
    ]
  },

  // lunedì → domenica; [ora, min, ora, min]; [] = chiuso
  hours: [
  ["Lunedì",   [[19,30,23,30]]],
  ["Martedì",  [[12,15,14,30],[19,30,23,30]]],
  ["Mercoledì",[[12,15,14,30],[19,30,23,30]]],
  ["Giovedì",  [[12,15,14,30],[19,30,23,30]]],
  ["Venerdì",  [[12,15,14,30],[19,30,23,30]]],
  ["Sabato",   [[12,15,14,30],[19,30,23,30]]],
  ["Domenica", [[12,15,14,30],[19,30,23,30]]],
],
  hoursNote: "Lunedì aperti solo a cena. Per prenotare: 011 742 8055 o 366 321 0514."
};
