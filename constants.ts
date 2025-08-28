
import { GameData, PageType, QuestType } from './types';

// To replace images, change the URLs here.
// These are placeholder images related to wood and mystery.
export const IMAGE_PLACEHOLDERS = {
  start: 'https://www.publicdomainpictures.net/pictures/120000/nahled/medieval-workshop-142642403990v.jpg',
  diary: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRy8aZdskR_dP21YgeuRBBuyioSg0x1oZBg&s',
  tree_parts: 'https://pixnio.com/free-images/2016/06/07/trunk-cross-sectional-wood-logs-576x432.jpg',
  roots: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJtIrR4Mt-nVggpdg68wAiwqrUYMQriQ7ww&s',
  bark: 'https://live.staticflickr.com/5528/12273874806_ffe89502ce_b.jpg',
  processing: 'https://www.legnoo.store/img/cms/news/2020/5-Attrezzi-per-lavorare-legno/attrezzi-indispensabili-legno-pialla.jpg',
  sawmill: 'https://www.feichter.com/assets/imager/assets/images/Archivbilder/4158/S%C3%A4ge-01_ef7923e6e458e7870e9459e93a524f45.jpg',
  wood_types: 'https://salp.it/wp-content/uploads/2019/12/Pannello-Esploso-grezzo2000x1500.jpg',
  plywood: 'https://putzer.com/media/image/product/519/lg/de-sperrholzplatte-pappel-10-mm.jpg',
  chipboard: 'https://static.tosize.com/General/Products/Regular/MDF/Gefineerd/34225/image-thumb__34225__it_it_watermark_1500x750/spaanplaat-eiken-mix-hout-plaatmaterialen-opmaatzagen.webp',
  end: 'https://thumbs.dreamstime.com/b/il-vecchio-libro-di-incantesimi-cuoio-%C3%A8-chiuso-con-un-eccezionale-sfondo-magico-generato-dall-ai-373004074.jpg',
};

export const GAME_DATA: GameData = {
  start: {
    id: 'start',
    type: PageType.Intermezzo,
    title: 'Il Mistero del Legno Perduto',
    text: "Sei un giovane apprendista nella bottega del leggendario Mastro Geppetto. Ma oggi, la bottega è silenziosa. Geppetto è scomparso! Sul suo banco di lavoro, trovi solo un diario di legno intagliato con una nota: 'Per trovarmi, devi prima capire il mio mondo. Segui i miei enigmi.'",
    imageUrl: IMAGE_PLACEHOLDERS.start,
    imageAlt: 'Una bottega di un falegname misteriosa e antica.',
    choice: {
      text: "Apri il diario e inizia l'avventura",
      nextPageId: 'bivio1',
    },
  },
  bivio1: {
    id: 'bivio1',
    type: PageType.Bivio,
    title: 'Il Diario di Geppetto - Capitolo 1',
    text: "La prima pagina del diario mostra lo schizzo dettagliato di un grande albero. Ci sono diverse annotazioni. Cosa vuoi esaminare per primo?",
    imageUrl: IMAGE_PLACEHOLDERS.diary,
    imageAlt: 'Un diario aperto con il disegno di un albero.',
    choices: [
      {
        text: 'Esamina il tronco, il cuore dell\'albero. (Percorso principale)',
        nextPageId: 'main_quest1',
        questType: QuestType.Main,
      },
      {
        text: 'Leggi l\'appunto sulle radici. (Sfida!)',
        nextPageId: 'side_quest1a',
        questType: QuestType.Side,
        sideQuestId: 'radici'
      },
      {
        text: 'Decifra la nota sulla corteccia. (Sfida!)',
        nextPageId: 'side_quest1b',
        questType: QuestType.Side,
        sideQuestId: 'corteccia'
      },
    ],
  },
  main_quest1: {
    id: 'main_quest1',
    type: PageType.Quest,
    questType: QuestType.Main,
    title: 'Il Cuore dell\'Albero',
    text: "Geppetto scrive: 'Il legno migliore, quello più antico, resistente e pregiato che non teme il tempo, si trova al centro del tronco. Come si chiama?'",
    imageUrl: IMAGE_PLACEHOLDERS.tree_parts,
    imageAlt: 'La sezione di un tronco con i suoi anelli.',
    choices: [
      { text: 'Alburno', nextPageId: 'main_quest1', isCorrect: false },
      { text: 'Durame', nextPageId: 'intermezzo_mq1_correct', isCorrect: true },
      { text: 'Libro', nextPageId: 'main_quest1', isCorrect: false },
    ],
  },
  intermezzo_mq1_correct: {
    id: 'intermezzo_mq1_correct',
    type: PageType.Intermezzo,
    title: 'Pagina Sbloccata!',
    text: "Corretto! Il durame è il cuore del legno. Una nuova pagina del diario si illumina di una luce tenue, rivelando il prossimo indizio. Sembra che Geppetto sia andato verso la segheria.",
    imageUrl: IMAGE_PLACEHOLDERS.processing,
    imageAlt: 'Un sentiero nel bosco che porta verso una segheria.',
    choice: {
      text: 'Prosegui verso la segheria',
      nextPageId: 'bivio2',
    },
  },
  side_quest1a: {
    id: 'side_quest1a',
    type: PageType.Quest,
    questType: QuestType.Side,
    sideQuestId: 'radici',
    title: 'L\'Ancora della Vita',
    text: "Accanto al disegno delle radici c'è un indovinello: 'Non ho bocca ma mangio dalla terra, non ho gambe ma ancoro giganti. Cosa sono?'",
    imageUrl: IMAGE_PLACEHOLDERS.roots,
    imageAlt: 'Radici di un albero che si estendono nel terreno.',
    choices: [
      { text: 'I rami', nextPageId: 'bivio1', isCorrect: false },
      { text: 'Le foglie', nextPageId: 'bivio1', isCorrect: false },
      { text: 'Le radici', nextPageId: 'bivio1', isCorrect: true },
    ],
  },
  side_quest1b: {
    id: 'side_quest1b',
    type: PageType.Quest,
    questType: QuestType.Side,
    sideQuestId: 'corteccia',
    title: 'Lo Scudo dell\'Albero',
    text: "Una nota a margine dice: 'La parte più esterna è come un'armatura. A cosa serve principalmente la corteccia?'",
    imageUrl: IMAGE_PLACEHOLDERS.bark,
    imageAlt: 'Dettaglio della corteccia di un albero.',
    choices: [
      { text: 'A produrre fiori', nextPageId: 'bivio1', isCorrect: false },
      { text: 'A proteggere l\'albero', nextPageId: 'bivio1', isCorrect: true },
      { text: 'A rendere l\'albero più alto', nextPageId: 'bivio1', isCorrect: false },
    ],
  },
   bivio2: {
    id: 'bivio2',
    type: PageType.Bivio,
    title: 'La Segheria Abbandonata',
    text: "Arrivi alla vecchia segheria. L'aria odora di resina e segatura. Ci sono vari macchinari e cataste di legno lavorato. Un altro biglietto di Geppetto ti attende. 'Il legno grezzo diventa utile solo con la giusta lavorazione.'",
    imageUrl: IMAGE_PLACEHOLDERS.sawmill,
    imageAlt: 'Una vecchia segheria con macchinari per il legno.',
    choices: [
      {
        text: 'Scopri i segreti dei pannelli di legno. (Percorso principale)',
        nextPageId: 'main_quest2',
        questType: QuestType.Main,
      },
      {
        text: 'Investiga su un pannello fatto di tanti fogli sottili. (Sfida!)',
        nextPageId: 'side_quest2a',
        questType: QuestType.Side,
        sideQuestId: 'compensato',
      },
       {
        text: 'Esamina un pannello che sembra fatto di segatura. (Sfida!)',
        nextPageId: 'side_quest2b',
        questType: QuestType.Side,
        sideQuestId: 'truciolare',
      },
    ],
  },
  main_quest2: {
    id: 'main_quest2',
    type: PageType.Quest,
    questType: QuestType.Main,
    title: 'L\'Arte dell\'Incollaggio',
    text: "Geppetto scrive: 'Per creare porte leggere ed economiche, uso una tecnica speciale: un telaio di legno riempito di cartone e ricoperto da fogli sottili. Come si chiama questo materiale?'",
    imageUrl: IMAGE_PLACEHOLDERS.wood_types,
    imageAlt: 'Diversi tipi di pannelli di legno impilati.',
    choices: [
      { text: 'Truciolare', nextPageId: 'main_quest2', isCorrect: false },
      { text: 'Compensato', nextPageId: 'main_quest2', isCorrect: false },
      { text: 'Tamburato', nextPageId: 'end', isCorrect: true },
    ],
  },
  side_quest2a: {
    id: 'side_quest2a',
    type: PageType.Quest,
    questType: QuestType.Side,
    sideQuestId: 'compensato',
    title: 'Fogli Sovrapposti',
    text: "Trovi un pannello molto flessibile ma resistente, composto da 3 fogli di legno incollati. Che materiale è?",
    imageUrl: IMAGE_PLACEHOLDERS.plywood,
    imageAlt: 'Un pannello di compensato curvo.',
    choices: [
        { text: 'Compensato', nextPageId: 'bivio2', isCorrect: true },
        { text: 'Multistrato', nextPageId: 'bivio2', isCorrect: false },
        { text: 'Paniforte', nextPageId: 'bivio2', isCorrect: false },
    ],
  },
  side_quest2b: {
    id: 'side_quest2b',
    type: PageType.Quest,
    questType: QuestType.Side,
    sideQuestId: 'truciolare',
    title: 'Scarti Preziosi',
    text: "Un grande pannello, usato per un mobile economico, sembra fatto di segatura e colla pressate insieme. Di cosa si tratta?",
    imageUrl: IMAGE_PLACEHOLDERS.chipboard,
    imageAlt: 'Un mobile economico fatto di truciolare.',
    choices: [
        { text: 'Medium Density', nextPageId: 'bivio2', isCorrect: false },
        { text: 'Truciolare', nextPageId: 'bivio2', isCorrect: true },
        { text: 'Legno massello', nextPageId: 'bivio2', isCorrect: false },
    ],
  },
  end: {
    id: 'end',
    type: PageType.End,
    title: 'Hai Trovato Geppetto!',
    text: "L'ultima risposta sblocca una porta segreta dietro una catasta di legno tamburato. Dentro, trovi Geppetto che sorseggia un caffè. 'Ci hai messo un po'!' dice con un sorriso. 'Ma ora conosci i segreti del legno. Sono fiero di te!'",
    imageUrl: IMAGE_PLACEHOLDERS.end,
    imageAlt: 'Geppetto che sorride e offre una tazza di caffè.',
    choice: {
        text: 'Gioca di nuovo',
    }
  }
};

export const MAX_SCORE = 4; // 2 main quests + 2 side quests per branch
