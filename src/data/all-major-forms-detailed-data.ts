
import type { OtherMajorFormDetail, MantraStotraItem, FestivalDetail } from '@/types';

// --- KAMAKSHI DETAILED DATA ---
const kamakshiDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Maa Kamakshi",
  title: "The Goddess of Love and Desire",
  meaningOfName: "Kamakshi means 'She whose eyes awaken desire' (Kama = desire, Akshi = eyes).",
  description: "Maa Kamakshi is the benevolent and fierce form of the Divine Mother, embodying love, beauty, compassion, and ultimate power. Worshipped as the supreme deity in Kanchipuram, she is an incarnation of Tripura Sundari and a form of Adi Shakti.",
  coreAttributes: [
    "Love and Compassion",
    "Divine Beauty",
    "Cosmic Power",
    "Boon-giver",
    "Wisdom",
    "Feminine Sovereignty"
  ],
  consort: "None explicitly in her independent form (but associated with Shiva in Adi Shakti tradition)",
  alternativeNames: [
    "Tripura Sundari",
    "Lalita",
    "Rajarajeshwari",
    "Shodashi",
    "Kameshwari"
  ],
  keyMantras: [
    { name: "Kamakshi Bija Mantra", sanskrit: "ॐ ऐं क्लीं सौः॥" },
    { name: "Kamakshi Moola Mantra", description: "A central mantra invoking her grace.", sanskrit: "ॐ ऐं क्लीं सौः कामाक्ष्यै नमः॥" }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Supreme Goddess, Compassionate yet Fierce, Tantric Deity",
    energyType: "Shakti – the creative force of the universe",
    planet: "Venus (commonly associated with love and beauty)",
    affiliation: [
      "Shaktism",
      "Sri Vidya",
      "Tantra"
    ]
  },
  originsAndMythology: {
    meaningOfName: "Kamakshi means 'She whose eyes awaken desire' (Kama = desire, Akshi = eyes).",
    abode: "Sri Chakra within Kanchipuram Temple",
    originStory: "Maa Kamakshi is considered a form of Lalita Tripura Sundari, who emerged to defeat the demon Bhandasura. She appeared from the third eye of Lalita Devi in the Sri Chakra Mandala.",
    symbolicRole: "Represents the creative force of the universe and divine love that transcends desire. She grants both worldly and spiritual fulfillment (Kama and Moksha).",
    parents: "Self-born or aspect of Adi Parashakti"
  },
  textsMentioningHer: [
    "Lalita Sahasranama",
    "Lalita Trishati",
    "Devi Bhagavata Purana",
    "Kamakshi Vilasam",
    "Tripura Rahasya"
  ],
  iconography: {
    skinColor: ["Golden"],
    numberOfArms: 4,
    mount: "Parrot (symbolic of desire and speech)",
    posture: "Seated in Padmasana over the Sri Yantra",
    expressions: "Graceful, Serene, Commanding",
    commonWeapons: [
      "Sugarcane Bow",
      "Five Arrows (representing the five senses)",
      "Noose (Pasha)",
      "Goad (Ankusha)"
    ]
  },
  symbolismDeepDive: {
    sugarcaneBow: "Symbol of desire controlled by the mind",
    fiveArrows: "Control over the five senses",
    pasha: "Bond of illusion and karma",
    ankusha: "Spiritual discipline and awakening"
  },
  notableForms: [
    "Lalita Tripura Sundari",
    "Rajarajeshwari",
    "Kameshwari"
  ],
  majorFestivals: [
    { name: "Navaratri", time: "Autumn (Ashwin) & Spring (Chaitra)", significance: "Nine nights of elaborate worship." },
    { name: "Kamakshi Jayanti", time: "Varies", significance: "Celebrates her divine appearance." },
    { name: "Varalakshmi Vratam", time: "Friday before Shravana Purnima", significance: "Worship for prosperity and well-being." },
    { name: "Lalita Panchami", time: "Fifth day of Ashwin Navaratri", significance: "Dedicated to Lalita Tripurasundari." },
    { name: "Aadi Pooram", time: "Aadi month (Tamil calendar)", significance: "Celebrates the Goddess's coming of age." }
  ],
  prominentTemples: [
    {
      id: "kamakshi-amman-kanchipuram", name: "Kamakshi Amman Temple",
      location: "Kanchipuram, Tamil Nadu",
      description: "Main temple and spiritual center of Kamakshi worship. One of the 51 Shakti Peethas."
    },
    {
      id: "mangala-gauri-gaya", name: "Mangala Gauri Temple",
      location: "Gaya, Bihar",
      description: "Shakti Peetha related to Kamakshi’s energy."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Kamakshi Moola Mantra",
      sanskrit: "ॐ ऐं क्लीं सौः कामाक्ष्यै नमः॥",
      meaning: "Om – the universal sound, Aim – for wisdom, Kleem – for attraction and love, Sauh – for liberation. Salutations to Goddess Kamakshi.",
      description: "This is a potent seed mantra used in Sri Vidya worship and for invoking Maa Kamakshi’s grace."
    },
    {
      name: "Kamakshi Stotram",
      description: "A beautiful devotional hymn describing the divine beauty and power of Kamakshi."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "Maa Kamakshi represents desire that leads to liberation – transcending material lust and transforming it into divine longing (Mumukshutva).",
    relationToTridevi: "She reflects the combined energies of Saraswati (wisdom), Lakshmi (abundance), and Parvati (power).",
    associatedConcept: "Sri Vidya – the highest tantric tradition in Shaktism",
    innerBattle: "Teaches control of desires not through suppression, but through conscious transformation and channeling.",
    liberation: "Maa Kamakshi is the bestower of both worldly desires (Kama) and final liberation (Moksha)."
  },
  culturalInfluence: {
    literature: "Prominently featured in Sri Vidya texts like the Lalita Sahasranama, Tripura Rahasya.",
    danceForms: "Many Bharatanatyam and Odissi dance performances feature her tales.",
    artAndSculpture: "Often shown with Sri Yantra backdrop and in meditative seated posture.",
    moviesAndMedia: "Her story and temple are featured in many South Indian spiritual TV series."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Tripura Sundari",
      "Lalita Devi",
      "Kameshwara (Shiva in Sri Vidya)",
      "Bala Tripurasundari (child form)"
    ],
    associatedAnimals: [
      "Parrot",
      "Lion (in fierce forms)",
      "Elephant (symbolic of royal presence)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "Represents divine sovereignty and inner strength, embodying beauty, power, and wisdom.",
    spiritualBalance: "Symbol of balancing Kama (desire) and Moksha (liberation).",
    festivalsAndUnity: "Worshipped widely across South India and by Sri Vidya practitioners globally. Seen as a bridge between Tantra and devotion (Bhakti)."
  },
  furtherReading: [
    { title: "Wikipedia - Kamakshi", url: "https://en.wikipedia.org/wiki/Kamakshi" },
    { title: "Kamakshi Temple Kanchipuram", url: "https://www.kanchipuramtemples.in/kamakshi-amman-temple/" },
    { title: "Hindupedia - Kamakshi", url: "https://hindupedia.com/en/Kamakshi" }
  ],
  closingNote: "The divine gaze of Maa Kamakshi awakens the seeker’s desire—not for the world, but for the eternal. May she bless your path with wisdom, beauty, and liberation.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Maa Kamakshi divine feminine Kanchipuram",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Kamakshi Amman Kanchipuram temple worship",
};

// --- MEENAKSHI DETAILED DATA ---
const meenakshiDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Maa Meenakshi",
  title: "Queen of Madurai",
  meaningOfName: "Meenakshi means 'Fish-Eyed One', symbolizing watchfulness and divine vision.",
  description: "Maa Meenakshi is an incarnation of Parvati, worshipped as the presiding goddess of Madurai. She is known for her courage, wisdom, and ruling strength, blending divine femininity with warrior spirit. Her story celebrates feminine power, dharma, and devotion.",
  coreAttributes: [
    "Divine Ruler",
    "Warrior Goddess",
    "Protector of Dharma",
    "Embodiment of Love and Strength",
    "Consort of Lord Sundareswarar (Shiva)"
  ],
  consort: "Lord Sundareswarar (Shiva)",
  alternativeNames: [
    "Tatpur Sundari",
    "Angayarkanni",
    "Kanchanamalai's Daughter",
    "Madurai Meenakshi"
  ],
  keyMantras: [
    { name: "Meenakshi Moola Mantra", sanskrit: "ॐ मीनाक्ष्यै नमः॥" },
    { name: "Meenakshi Pancharatnam" },
    { name: "Meenakshi Stotram" }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Goddess of Power and Royalty",
    energyType: "Shakti (Leadership and Courage)",
    planet: "Sun (symbol of leadership and royalty)",
    affiliation: ["Shaivism", "Shaktism"]
  },
  originsAndMythology: {
    meaningOfName: "Fish-eyed goddess (Meen = fish, Akshi = eyes)",
    abode: "Madurai, Tamil Nadu",
    parents: "King Malayadhwaja Pandya and Queen Kanchanamalai",
    textsMentioningHer: [
      "Meenakshi Purana",
      "Skanda Purana",
      "Shiva Purana (regional versions)",
      "Tamizh folk epics"
    ],
    originStory: "Born to Pandya rulers after intense yagna to obtain a child, Meenakshi emerged as a three-breasted warrior goddess. A prophecy revealed the third breast would vanish when she met her divine consort. She conquered all directions, met Shiva (Sundareswarar), and upon recognizing him, her third breast disappeared.",
    symbolicVictory: "Represents divine feminine strength and cosmic balance through love and power.",
    eternalConsort: "Sundareswarar (a form of Shiva)",
    symbolicRole: "Divine queen and warrior who upholds righteousness and cosmic order."
  },
  iconography: {
    skinColor: ["Emerald green"],
    numberOfArms: 2,
    mount: "Lion",
    posture: "Standing regally with parrot in one hand and flower in the other",
    expressions: "Majestic, Compassionate, Fierce",
    commonWeapons: [
      "Sword",
      "Shield",
      "Lotus",
      "Abhaya Mudra"
    ]
  },
  symbolismDeepDive: {
    thirdBreast: "Symbol of divine power and prophecy",
    sword: "Courage and sovereignty",
    greenColor: "Fertility, abundance, and healing energy",
    parrot: "Wisdom and love",
    lion: "Royal strength and fearlessness"
  },
  notableForms: [
    "Meenakshi Kalyanam (Wedding Form)",
    "Meenakshi Amman",
    "Sri Meenakshi Devi"
  ],
  majorFestivals: [
    { name: "Meenakshi Thirukalyanam", time: "Chithirai (April-May)", significance: "Annual divine marriage festival, the highlight of Chithirai festival." },
    { name: "Chithirai Festival", time: "Chithirai (April-May)", significance: "Grand 12-day festival in Madurai celebrating Meenakshi and Sundareswarar." },
    { name: "Navratri", time: "Autumn (Ashwin)", significance: "Nine nights of worship, with special decorations for Meenakshi." },
    { name: "Thai Poosam", time: "Thai (Jan-Feb)", significance: "Important festival associated with Lord Murugan, also celebrated at Meenakshi temple." }
  ],
  prominentTemples: [
    {
      id: "meenakshi-amman-madurai", name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      description: "One of the grandest temples in India, symbolizing feminine divinity and architectural splendor. Center of the annual Chithirai Festival celebrating her celestial wedding."
    },
    {
      id: "kanchanamalai-sivagangai", name: "Kanchanamalai Temple",
      location: "Sivagangai, Tamil Nadu",
      description: "Temple dedicated to Meenakshi's mother, Kanchanamalai, often visited in tandem with Meenakshi worship."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Meenakshi Moola Mantra",
      sanskrit: "ॐ मीनाक्ष्यै नमः॥",
      meaning: "Salutations to the emerald-hued Goddess Meenakshi.",
      description: "Chanted for blessings in marriage, strength, and victory over challenges."
    },
    {
      name: "Meenakshi Pancharatnam",
      description: "A five-verse stotra composed by Adi Shankaracharya in praise of Meenakshi."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "Maa Meenakshi represents the divine union of power and grace, showing that femininity encompasses both fierce protection and nurturing love.",
    relationToTridevi: "As a manifestation of Parvati, she embodies the Shakti aspect of power and cosmic protection.",
    associatedConcept: "Divine rulership balanced with spiritual purity and compassion.",
    innerBattle: "The story of her warrior conquests before recognizing her divine partner reflects self-realization and surrender to divine truth.",
    liberation: "Her story teaches that dharma, inner strength, and recognition of the divine within are paths to liberation."
  },
  culturalInfluence: {
    literature: [
      "Meenakshi Purana",
      "Tales of her marriage and battles in Tamil epics"
    ],
    danceForms: "Depicted in Bharatanatyam and other South Indian dance forms during temple rituals and festivals.",
    artAndSculpture: "Iconic in South Indian temples, especially with emerald complexion and crowned warrior form.",
    moviesAndMedia: "Featured in Tamil spiritual dramas and temple documentaries."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Parvati (form)",
      "Sundareswarar (Shiva)",
      "Murugan (as royal family deity)"
    ],
    associatedAnimals: [
      "Parrot",
      "Lion"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "Symbol of a powerful queen and warrior who balances power with compassion and wisdom.",
    spiritualBalance: "Embodiment of fearless leadership, dharmic living, and spiritual devotion.",
    festivalsAndUnity: "Her divine wedding (Thirukalyanam) is one of the largest celebrations of feminine divinity in India, uniting devotees across traditions."
  },
  furtherReading: [
    { title: "Wikipedia - Meenakshi", url: "https://en.wikipedia.org/wiki/Meenakshi" },
    { title: "Meenakshi Amman Temple Official Site", url: "https://maduraimeenakshi.org" }
  ],
  closingNote: "May Maa Meenakshi's fierce grace and protective strength inspire your path. Her divine presence continues to guide dharma and love in the world.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Maa Meenakshi divine warrior queen",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Meenakshi Amman Madurai temple grandeur",
};

// --- LALITA TRIPURASUNDARI DETAILED DATA ---
const lalitaDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Lalita Tripurasundari",
  title: "The Supreme Divine Beauty of the Three Worlds",
  meaningOfName: "‘Lalita’ means 'She Who Plays'; ‘Tripurasundari’ means 'The Most Beautiful in the Three Worlds'.",
  description: "Devi Lalita Tripurasundari is the supreme goddess of the Sri Vidya tradition. She embodies the union of beauty, power, wisdom, and bliss. She is both graceful and fierce, seated on a throne with Shiva, Brahma, Vishnu, and Rudra as her legs, ruling over the universe with compassion and supreme intelligence.",
  coreAttributes: [
    "Supreme Goddess of Sri Vidya",
    "Eternal Beauty",
    "Cosmic Ruler",
    "Embodiment of Bliss (Ananda)",
    "Holder of Kameshwara's Power"
  ],
  consort: "Kameshwara (a form of Shiva as the Lord of Desire)",
  alternativeNames: [
    "Rajarajeshwari",
    "Lalita Devi",
    "Sundari",
    "Kameshvari",
    "Tripura Sundari"
  ],
  keyMantras: [
    { name: "Sri Mate Namah", sanskrit: "ॐ श्री माते नमः॥" },
    { name: "Lalita Moola Mantra", sanskrit: "ॐ ऐं ह्रीं श्रीं लालितायै नमः॥" },
    { name: "Shodashi Mantra", description: "A powerful 16-syllable mantra of Lalita." },
    { name: "Lalita Sahasranama", description: "Recitation of her 1000 names." }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Supreme Goddess, Ruler of the Cosmos, Embodiment of Beauty and Bliss",
    energyType: "Shakti (Creative, Preserving, and Destructive Energy)",
    planet: "Moon and Venus (symbolizing beauty, love, and mystic insight)",
    affiliation: ["Shaktism", "Sri Vidya", "Tantra"]
  },
  originsAndMythology: {
    meaningOfName: "Lalita means 'Playful', Tripurasundari means 'Most Beautiful in the Three Worlds'.",
    abode: "Manidvipa (Celestial island in the highest spiritual plane)",
    parents: "Self-born from the supreme Shakti or beyond birth",
    textsMentioningHer: [
      "Lalita Sahasranama",
      "Tripura Rahasya",
      "Brahmanda Purana",
      "Tantra Scriptures (Lalita Tantra, Kularnava Tantra)"
    ],
    originStory: "Born from the fire of pure consciousness to destroy the demon Bhandasura, Devi Lalita arose with her army of Shaktis and generals like Dandanatha, Mantrini, and Sampatkari. She rules from the divine city of Sri Pura on Mount Meru.",
    symbolicVictory: "Her destruction of Bhandasura symbolizes the annihilation of ego and ignorance by the divine grace of wisdom and bliss.",
    eternalConsort: "Kameshwara (Shiva as Lord of Desire)",
    symbolicRole: "Embodiment of divine will, blissful love, and cosmic intelligence."
  },
  iconography: {
    skinColor: ["Reddish-golden", "Coral-hued"],
    numberOfArms: 4,
    mount: "Lion",
    posture: "Seated on a lotus on a throne supported by the Trimurti and Ishvara",
    expressions: "Playful, Serene, All-Knowing, Powerful",
    commonWeapons: [
      "Sugarcane Bow (Mind)",
      "Five Flower Arrows (Senses)",
      "Noose (Attachment)",
      "Goad (Repulsion)"
    ]
  },
  symbolismDeepDive: {
    SugarcaneBow: "Symbolizes the sweet nature of the mind when tamed",
    FiveArrows: "Represent control over the five senses",
    Noose: "Represents binding of soul to body or attachment",
    Goad: "Pushes the soul toward liberation",
    LotusSeat: "Spiritual unfoldment and divine purity",
    SriChakra: "Her geometric form, symbolizing the totality of existence"
  },
  notableForms: [
    "Shodashi",
    "Lalita Mahatripurasundari",
    "Rajarajeshwari",
    "Kameshvari"
  ],
  majorFestivals: [
    { name: "Navratri (Especially as Shodashi on the 6th night)", time: "Autumn & Spring", significance: "Worship of her forms, particularly Shodashi." },
    { name: "Lalita Panchami", time: "Fifth day of Ashwin Navaratri", significance: "Dedicated to Lalita Tripurasundari's appearance." },
    { name: "Sri Chakra Puja", time: "Regularly by Sri Vidya practitioners", significance: "Worship of her yantra." },
    { name: "Varalakshmi Vratam", time: "Friday before Shravana Purnima", significance: "Worship for auspiciousness." }
  ],
  prominentTemples: [
    {
      id: "sri-lalita-naimisharanya", name: "Sri Lalita Devi Temple",
      location: "Naimisharanya, Uttar Pradesh",
      description: "One of the Shakti Peethas where Devi's heart is believed to have fallen. A highly revered center for Sri Vidya worship."
    },
    {
      id: "rajarajeshwari-bangalore", name: "Rajarajeshwari Temple",
      location: "Bangalore, Karnataka",
      description: "Temple dedicated to Rajarajeshwari, a powerful form of Lalita, known for tantric and Sri Chakra worship."
    },
    {
      id: "kamakshi-kanchipuram-assoc", name: "Kanchi Kamakshi Temple",
      location: "Kanchipuram, Tamil Nadu",
      description: "Although Kamakshi is a distinct form, she is often identified with Tripurasundari in Sri Vidya traditions."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Lalita Moola Mantra",
      sanskrit: "ॐ ऐं ह्रीं श्रीं लालितायै नमः॥",
      meaning: "Salutations to the beautiful goddess Lalita, who is the essence of divine sound, wisdom, and prosperity.",
      description: "Chanted for spiritual awakening, clarity, and attracting divine grace."
    },
    {
      name: "Lalita Sahasranama",
      description: "A thousand names of the Goddess, each revealing cosmic secrets and dimensions of the divine feminine."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "Devi Lalita represents the unity of Sat (existence), Chit (consciousness), and Ananda (bliss). She is the absolute Shakti who manifests the universe through play.",
    relationToTridevi: "Tripurasundari is often considered the supreme synthesis of Saraswati, Lakshmi, and Parvati—representing knowledge, wealth, and power.",
    associatedConcept: "Sri Chakra—Her divine yantra and representation of the cosmos, mapping the path from the material to the supreme.",
    innerBattle: "She slays the inner Bhandasura—ego, illusion, and ignorance—with divine awareness.",
    liberation: "Sri Vidya path through Lalita worship leads to ultimate liberation (Moksha) through joy and knowledge."
  },
  culturalInfluence: {
    literature: [
      "Tripura Rahasya",
      "Lalita Sahasranama Stotra",
      "Kularnava Tantra",
      "Brahmanda Purana"
    ],
    danceForms: "Depicted in Bharatanatyam and Kerala’s classical traditions as the cosmic queen.",
    artAndSculpture: "Her Sri Chakra is revered in temples and sacred geometry. Often depicted with delicate yet commanding features.",
    moviesAndMedia: "Featured in mythological dramas and tantric documentaries."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Kameshwara (Consort)",
      "Bala Tripurasundari (Her youthful form)",
      "Mantrini and Dandanatha (Divine attendants)",
      "Durga and Kali (Her warrior aspects)"
    ],
    associatedAnimals: [
      "Lion",
      "Swan (as symbol of wisdom in certain texts)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "Lalita stands as the icon of spiritual beauty, wisdom, and fearless sovereignty—an ideal of empowered femininity.",
    spiritualBalance: "Represents the union of worldly enjoyment and spiritual transcendence—offering bliss without renunciation.",
    festivalsAndUnity: "Worshipped across India during Navratri and Sri Chakra pujas, transcending regional barriers with profound spiritual appeal."
  },
  furtherReading: [
    { title: "Tripura Rahasya (Translated Text)", url: "https://www.sacred-texts.com/hin/tripa/index.htm" },
    { title: "Wikipedia - Lalita Tripurasundari", url: "https://en.wikipedia.org/wiki/Tripura_Sundari" }
  ],
  closingNote: "May the grace of Lalita Tripurasundari illuminate your path with wisdom, bliss, and divine awareness. She is the radiant queen who plays the universe into being.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Lalita Tripurasundari Sri Vidya",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Lalita Tripurasundari Sri Chakra divine",
};

// --- ANNAPURNA DETAILED DATA ---
const annapurnaDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Annapurna",
  title: "Goddess of Nourishment and Abundance",
  meaningOfName: "‘Annapurna’ means 'Full of Food' or 'She who is the giver of food and nourishment'.",
  description: "Devi Annapurna is the Hindu goddess of food, nourishment, and sustenance. A manifestation of Parvati, she represents the divine assurance that no being shall go hungry. Worshipped for abundance, balance, and service, Annapurna Devi is both nurturing and commanding, symbolizing that material prosperity must serve spiritual growth.",
  coreAttributes: [
    "Nourishment",
    "Abundance",
    "Generosity",
    "Divine Sustenance",
    "Compassion"
  ],
  consort: "Lord Shiva (Mahadeva)",
  alternativeNames: [
    "Annapoorna",
    "Annapurneshwari",
    "Annada",
    "Bhikshatana’s Consort",
    "Vishweshwari"
  ],
  keyMantras: [
    { name: "Annapurna Moola Mantra", sanskrit: "ॐ अन्नपूर्णायै नमः॥" },
    { name: "Annapurna Stotra Verse 1", sanskrit: "अन्नपूर्णे सदापूर्णे शङ्करप्राणवल्लभे। ज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति॥", meaning: "O Annapurna, ever full, beloved of Shankara! Grant me alms, O Parvati, for attainment of wisdom and renunciation."}
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Goddess of Food, Generosity, and Spiritual Nourishment",
    energyType: "Shakti (Nurturing and Sustaining Energy)",
    planet: "Earth (symbol of fertility and sustenance)",
    affiliation: [
      "Shaktism",
      "Shaivism"
    ]
  },
  originsAndMythology: {
    meaningOfName: "Annapurna literally translates to 'She who is full of food'.",
    abode: "Kashi (Varanasi), her spiritual home",
    parents: "Himalaya and Mena (as a form of Parvati)",
    textsMentioningHer: [
      "Skanda Purana",
      "Shiva Purana",
      "Annapurna Upanishad",
      "Devi Bhagavata Purana"
    ],
    originStory: "Once, Lord Shiva remarked that the world is an illusion and food is a part of that illusion. In response, Parvati vanished, causing all food to disappear from the world. As people starved, Shiva realized his error and sought Parvati’s return. She appeared as Annapurna and offered him food with love, restoring balance.",
    symbolicVictory: "She teaches that spiritual growth must be supported by basic sustenance. The body must be nourished for the soul to evolve.",
    eternalConsort: "Shiva (as Bhikshatana, who receives alms from her)",
    symbolicRole: "Represents the sacred act of giving, compassion, and the unity of material and spiritual wellbeing."
  },
  iconography: {
    skinColor: ["Golden", "Wheat-colored"],
    numberOfArms: 4, 
    mount: "Lion",
    posture: "Seated or standing with a bowl of food in one hand and a serving spoon or ladle in another",
    expressions: "Calm, Generous, Benevolent",
    commonWeapons: [
      "Ladle (offering nourishment)",
      "Pot of Food",
      "Rosary (Japa Mala)",
      "Sacred Scriptures"
    ]
  },
  symbolismDeepDive: {
    FoodBowl: "Nourishment, material abundance, and spiritual generosity",
    LadleSpoon: "Selfless service and distribution of abundance",
    Lion: "Power and protective maternal force",
    Rosary: "Spiritual wisdom and meditation as forms of nourishment",
    KashiAbode: "Symbol of spiritual truth and eternal presence"
  },
  notableForms: [
    "Bala Annapurna (as child)",
    "Vishalakshi Annapurna",
    "Annapurneshwari",
    "Annada Devi"
  ],
  majorFestivals: [
    { name: "Annapurna Jayanti", time: "Margashirsha Month", significance: "Celebrates the birth/appearance of Devi Annapurna." },
    { name: "Navratri", time: "Autumn (Ashwin) & Spring (Chaitra)", significance: "Especially celebrated in Varanasi." },
    { name: "Annadanam Seva Days", time: "Various", significance: "Special days dedicated to food donation in her name." },
    { name: "Full Moon Days", time: "Purnima", significance: "Auspicious for her worship." }
  ],
  prominentTemples: [
    {
      id: "annapurna-devi-mandir-kashi", name: "Annapurna Devi Mandir",
      location: "Kashi (Varanasi), Uttar Pradesh",
      description: "The most sacred temple dedicated to Devi Annapurna. Located near the Kashi Vishwanath Temple. Pilgrims offer Annadanam (food donation) here."
    },
    {
      id: "annapoorneshwari-horanadu", name: "Annapoorneshwari Temple",
      location: "Horanadu, Karnataka",
      description: "Devotees are served meals daily as prasad. The temple is set amidst Western Ghats and is a major center for Annadana."
    },
    {
      id: "annapurna-temple-indore", name: "Annapurna Temple",
      location: "Indore, Madhya Pradesh",
      description: "Architecturally rich temple dedicated to Devi Annapurna, known for large-scale food distribution."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Annapurna Stotra (Verse 1)",
      sanskrit: "अन्नपूर्णे सदापूर्णे शङ्करप्राणवल्लभे। ज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति॥",
      meaning: "O Annapurna, ever full, beloved of Shankara! Grant me alms, O Parvati, for attainment of wisdom and renunciation.",
      description: "This verse is recited to invoke the blessings of food, wisdom, and detachment for spiritual growth."
    },
    {
      name: "Annapurna Ashtakam",
      description: "A devotional hymn composed by Adi Shankaracharya praising the nurturing and spiritual power of Goddess Annapurna."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "She shows the nurturing face of the Goddess, linking material life with spiritual duties. Feeding someone is considered the greatest service (Annadanam).",
    relationToTridevi: "An aspect of Parvati, symbolizing Shakti’s compassionate and sustaining dimension.",
    associatedConcept: "Annadanam—offering food as the highest dharma.",
    innerBattle: "Conquers the ego of renunciation that neglects the basic needs of the body and society.",
    liberation: "Service and generosity as paths to spiritual elevation."
  },
  culturalInfluence: {
    literature: [
      "Shiva Purana",
      "Annapurna Ashtakam by Adi Shankaracharya",
      "Devi Bhagavata Purana"
    ],
    danceForms: "Themes of giving and nourishment feature in devotional Bharatanatyam and Odissi dance performances.",
    artAndSculpture: "Portrayed in temples across India with a golden pot and ladle, symbolizing divine sustenance.",
    moviesAndMedia: "Featured in spiritual documentaries, temple-focused series, and mythological serials."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Parvati",
      "Shiva (as Bhikshatana)",
      "Durga (as warrior-nourisher)",
      "Lakshmi (for wealth, Annapurna for food)"
    ],
    associatedAnimals: [
      "Lion",
      "Cow (as symbol of nourishment and abundance)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "Embodies the divine role of woman as provider and nurturer, yet powerful and self-assured.",
    spiritualBalance: "Combines compassion with the wisdom of sustenance as a sacred act.",
    festivalsAndUnity: "Her temples are major centers for food donation, bringing communities together through shared meals and service."
  },
  furtherReading: [
    { title: "Wikipedia - Annapurna (Hinduism)", url: "https://en.wikipedia.org/wiki/Annapurna_(goddess)" },
    { title: "Annapurna Stotra (Shankaracharya)", url: "https://www.stotranidhi.com/en/annapurna-stotram-by-adi-shankaracharya-in-sanskrit/" }
  ],
  closingNote: "May the blessings of Devi Annapurna fill your life with abundance, selfless service, and gratitude for the simplest and most profound gift—nourishment.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Annapurna goddess nourishment",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Annapurna Devi Kashi providing food",
};

// --- MAHAGAURI DETAILED DATA ---
const mahagauriDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Mahagauri",
  title: "The Radiant Form of Purity and Austerity",
  meaningOfName: "‘Mahagauri’ means ‘extremely white’ or ‘greatly fair’, symbolizing absolute purity, calmness, and wisdom.",
  description: "Devi Mahagauri is the eighth form of Navadurga, representing peace, inner purification, and spiritual clarity. She is the transformed, purified form of Goddess Kali after her intense penance to attain Shiva. Mahagauri is graceful, compassionate, and is believed to cleanse the souls of her devotees, leading them to liberation.",
  coreAttributes: [
    "Purity",
    "Peace",
    "Forgiveness",
    "Wisdom",
    "Calmness",
    "Spiritual Strength"
  ],
  consort: "Lord Shiva (Mahadeva)",
  alternativeNames: [
    "Shwetambardhara",
    "Vrisharudha",
    "Gauri",
    "Mahashweta"
  ],
  keyMantras: [
    { name: "Mahagauri Moola Mantra", sanskrit: "ॐ देवी महागौर्यै नमः॥" },
    { name: "Mahagauri Dhyana Mantra", sanskrit: "श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोददा॥" }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Embodiment of Purity and Inner Peace",
    energyType: "Shakti (Calm, Cleansing Energy)",
    planet: "Moon",
    affiliation: [
      "Shaktism",
      "Shaivism",
      "Navadurga"
    ]
  },
  originsAndMythology: {
    meaningOfName: "Mahagauri means ‘greatly white’, denoting purity and brightness.",
    abode: "Mount Kailash",
    parents: "Himavan and Menaka (as Parvati)",
    textsMentioningHer: [
      "Devi Bhagavata Purana",
      "Shiva Purana",
      "Markandeya Purana (Durga Saptashati)"
    ],
    originStory: "Mahagauri is believed to have performed intense penance in the Himalayas to attain Lord Shiva. Due to the harsh environment, her skin became dark. Pleased by her devotion, Shiva purified her with the sacred Ganga, transforming her into the radiant Mahagauri.",
    symbolicVictory: "Victory over the inner darkness through devotion and discipline.",
    eternalConsort: "Shiva (as Mahadeva)",
    symbolicRole: "She purifies devotees and bestows wisdom, peace, and relief from past karmas."
  },
  iconography: {
    skinColor: ["White and radiant"],
    numberOfArms: 4,
    mount: "White Bull (Nandi)",
    posture: "Seated gracefully or riding a bull",
    expressions: "Serene, Calm, Compassionate",
    commonWeapons: [
      "Trident (Trishul)",
      "Damaru",
      "Abhaya Mudra (gesture of protection)",
      "Varada Mudra (boon-giving gesture)"
    ]
  },
  symbolismDeepDive: {
    WhiteComplexion: "Represents divine purity and peace of mind",
    BullMount: "Strength, perseverance, and dharmic steadiness",
    Trident: "Control over the mind, body, and soul",
    Damaru: "Sound of creation and rhythm of the cosmos",
    AbhayaVaradaMudra: "Fearlessness and divine benevolence"
  },
  notableForms: [
    "Navadurga Form 8",
    "Parvati (original form)",
    "Kanya Devi (as young girl)"
  ],
  majorFestivals: [
    { name: "Durga Ashtami (8th Day of Navratri)", time: "Eighth day of Navaratri", significance: "Dedicated to Mahagauri worship." },
    { name: "Navratri", time: "Autumn (Ashwin) & Spring (Chaitra)", significance: "Worshipped on the eighth day of Navaratri." },
    { name: "Chaitra Navratri", time: "Spring", significance: "Worshipped as part of the Navadurga." }
  ],
  prominentTemples: [
    {
      id: "mahagauri-kalka-delhi", name: "Kalka Mandir (Mahagauri Temple)",
      location: "Delhi, India",
      description: "Dedicated to various forms of Durga, including Mahagauri."
    },
    {
      id: "mahagauri-vindhyachal", name: "Vindhyachal Devi Temple",
      location: "Uttar Pradesh, India",
      description: "Important Shakti Peetha associated with the forms of Durga and Gauri."
    },
    {
      id: "mahagauri-jwalaji", name: "Jwalamukhi Devi Temple",
      location: "Himachal Pradesh, India",
      description: "Although focused on Jwala form, also reveres other forms like Mahagauri."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Mahagauri Dhyana Mantra",
      sanskrit: "श्वेते वृषे समारूढा श्वेताम्बरधरा शुचिः। महागौरी शुभं दद्यान्महादेवप्रमोददा॥",
      meaning: "She rides a white bull, wears white garments, and is spotless. May Mahagauri bless us with auspiciousness, delighting Lord Mahadeva.",
      description: "Chanted during Navratri to invoke peace, purification, and spiritual upliftment."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "Mahagauri is the embodiment of serenity, reflecting the refined soul after intense devotion.",
    relationToTridevi: "As Parvati, she reflects the peaceful side of Shakti—calm after transformation.",
    associatedConcept: "Inner purification through tapasya (austerity) and surrender.",
    innerBattle: "Symbolizes shedding ego, darkness, and past sins to become radiant with divine light.",
    liberation: "Path of cleansing karmic burdens and attaining inner stillness and truth."
  },
  culturalInfluence: {
    literature: [
      "Devi Mahatmya",
      "Durga Saptashati",
      "Navadurga Stotra"
    ],
    danceForms: "Represented in classical Indian dances like Bharatanatyam and Kathak during Navratri.",
    artAndSculpture: "Often seen seated on a bull in white clothing, worshipped during the eighth day of Navratri.",
    moviesAndMedia: "Occasionally depicted in TV serials and mythological retellings of Navadurga stories."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Parvati",
      "Durga",
      "Shiva",
      "Skanda",
      "Gauri"
    ],
    associatedAnimals: [
      "White Bull (Nandi)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "Symbol of a woman’s power to transform herself through inner strength and purity.",
    spiritualBalance: "Mahagauri inspires those on the spiritual path to embrace stillness, truth, and discipline.",
    festivalsAndUnity: "Her worship unites people during Navratri and promotes ideals of purity and forgiveness."
  },
  furtherReading: [
    { title: "Mahagauri on Wikipedia", url: "https://en.wikipedia.org/wiki/Mahagauri" },
    { title: "Navadurga Explained", url: "https://www.drikpanchang.com/navratri/navadurga/mahagauri.html" }
  ],
  closingNote: "May the serene light of Mahagauri wash away all impurities and guide you to the ultimate truth and inner peace.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Mahagauri goddess purity Navadurga",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Mahagauri Navadurga serene white",
};

// --- CHANDIKA / CHAMUNDA DETAILED DATA ---
const chamundaDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Chandika / Chamunda",
  title: "The Fierce Destroyer of Evil and Embodiment of Wrathful Shakti",
  meaningOfName: "‘Chandika’ means ‘the fiery one’ or ‘violent anger’, while ‘Chamunda’ is derived from ‘Chanda’ and ‘Munda’, the two asuras she vanquished. She represents the terrifying aspect of Devi Durga who annihilates demonic forces.",
  description: "Chandika or Chamunda is one of the fiercest forms of the Divine Mother. She is the personification of cosmic wrath against adharma (unrighteousness), yet ultimately protective of her devotees. She is primarily worshipped for protection from evil, inner transformation, and destruction of ego. Her terrifying iconography reflects the immense spiritual power needed to overcome deep inner darkness.",
  coreAttributes: [
    "Wrathful Protection",
    "Destruction of Ego",
    "Karmic Cleansing",
    "Fearlessness",
    "Inner Transformation",
    "Liberation from Negativity"
  ],
  consort: "None (She is self-manifested and independent)", 
  alternativeNames: [
    "Chandika",
    "Chamundi",
    "Chandika Kali",
    "Raksha Devi",
    "Chamunda Mata"
  ],
  keyMantras: [
    { name: "Chamunda Beej Mantra", sanskrit: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥" },
    { name: "Chandika Invocation", sanskrit: "या देवी सर्वभूतेषु चण्डिका रूपेण संस्थिता॥ नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥" }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Fierce Warrior Goddess, Slayer of Demons",
    energyType: "Ugra Shakti (Fierce, Liberating Energy)",
    planet: "Ketu (associated with spiritual detachment and otherworldliness)",
    affiliation: [
      "Shaktism",
      "Tantra",
      "Navadurga",
      "Dasha Mahavidya (as Kali/Bhairavi aspect)"
    ]
  },
  originsAndMythology: {
    meaningOfName: "Chandika means 'She who is furious', and Chamunda means 'the slayer of Chanda and Munda'.",
    abode: "Cremation grounds (symbolizing transcendence over fear and death)",
    parents: "Emerged from Durga's brow",
    textsMentioningHer: [
      "Devi Mahatmyam (Durga Saptashati)",
      "Markandeya Purana",
      "Kalika Purana",
      "Devi Bhagavata Purana"
    ],
    originStory: "Chamunda emerged from the forehead of Goddess Durga (as Chandika) during her battle with the asuras Chanda and Munda. She swiftly decapitated the two demons and presented their heads to Durga, who then gave her the name Chamunda.",
    symbolicVictory: "Her victory symbolizes the annihilation of inner demons like ego, anger, and ignorance.",
    symbolicRole: "Represents the final purifier, removing all impurities from the devotee’s psyche."
  },
  iconography: {
    skinColor: ["Dark", "Black", "Ashen"],
    numberOfArms: 4, 
    mount: "Owl or Jackal (sometimes none)",
    posture: "Standing or seated in cremation ground or atop defeated demons",
    expressions: "Fierce, terrifying, powerful",
    commonWeapons: [
      "Sword",
      "Trident (Trishul)",
      "Skull-Mace",
      "Scimitar",
      "Kapaala (Skull Bowl)",
      "Damaru"
    ]
  },
  symbolismDeepDive: {
    DarkComplexion: "Represents destruction of illusion and entry into the realm of truth.",
    SkullBowl: "Symbolizes acceptance of impermanence and destruction of ego.",
    Weapons: "Tools of divine justice and inner cleansing.",
    CremationGrounds: "Mastery over fear, ego, and death.",
    Trident: "Control over time (past, present, future)."
  },
  notableForms: [
    "Chamunda (from Durga's forehead)",
    "Chandika Devi",
    "Mahakali",
    "Ashta Matrika (Chamunda is one among them)",
    "Charchika (form of Chamunda in Eastern traditions)"
  ],
  majorFestivals: [
    { name: "Navratri (especially Ashtami & Navami)", time: "Autumn & Spring", significance: "Worship of her fierce protective aspect." },
    { name: "Durga Puja (Sandhi Puja period)", time: "Autumn", significance: "Crucial time for Chamunda's invocation." },
    { name: "Chandika Homam rituals", time: "As per devotee needs", significance: "Fire rituals for protection and obstacle removal." },
    { name: "Chamunda Jayanti", time: "Varies", significance: "Celebrates her appearance." }
  ],
  prominentTemples: [
    {
      id: "chamundeshwari-mysore-chamunda", name: "Chamundeshwari Temple",
      location: "Mysore, Karnataka",
      description: "Famous hilltop temple dedicated to Chamunda Devi, patron goddess of Mysore kings."
    },
    {
      id: "chandika-devi-haridwar", name: "Chandika Devi Temple",
      location: "Haridwar, Uttarakhand",
      description: "One of the Siddhapeethas near the sacred Ganga, visited for protection and blessings."
    },
    {
      id: "chamunda-devi-himachal", name: "Chamunda Devi Temple",
      location: "Kangra, Himachal Pradesh",
      description: "A revered Shakti Peetha believed to be the site where Sati’s forehead fell."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Chamunda Beej Mantra",
      sanskrit: "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥",
      meaning: "Seed mantra invoking the fierce protection and energy of Goddess Chamunda.",
      description: "Used in tantric sadhanas for protection, victory, and karmic cleansing."
    },
    {
      name: "Argala Stotram (invocation)",
      sanskrit: "या देवी सर्वभूतेषु चण्डिका रूपेण संस्थिता॥ नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      description: "Part of the Devi Mahatmyam worship, praising Devi's Chandika form."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "She is the fierce aspect of the Divine Mother, who destroys to protect and liberate.",
    relationToTridevi: "Chamunda is an intense manifestation of Durga (a form of Parvati), representing pure transformative power.",
    associatedConcept: "Ugra Shakti – Wrathful Compassion; she destroys to renew.",
    innerBattle: "The slayer of internal enemies (ego, fear, delusion) that hinder spiritual growth.",
    liberation: "Moksha through karmic burning and surrender to divine fierceness."
  },
  culturalInfluence: {
    literature: [
      "Devi Mahatmyam (Chanda-Munda episode)",
      "Tantric texts (as protector goddess)",
      "Kavachams and Stutis"
    ],
    danceForms: "Represented in Bharatanatyam and Theyyam performances as fierce goddess dance.",
    artAndSculpture: "Often seen with skulls, flames, and fierce expressions in tantric mandalas and Nepalese art.",
    moviesAndMedia: "Portrayed as the destroyer of demons in Indian mythological TV shows and documentaries."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Durga",
      "Mahakali",
      "Bhairavi",
      "Kali",
      "Charchika"
    ],
    associatedAnimals: [
      "Owl",
      "Jackal",
      "Dog (symbol of deathlessness in tantra)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "A symbol of fearlessness, boundary-setting, and strength in the face of adversity.",
    spiritualBalance: "Represents necessary destruction of inner blocks and toxic patterns.",
    festivalsAndUnity: "Worshipped especially in regions needing strong spiritual protection and inner awakening."
  },
  furtherReading: [
    { title: "Chamunda Wikipedia", url: "https://en.wikipedia.org/wiki/Chamunda" },
    { title: "Devi Mahatmyam - Chanda Munda Slaying", url: "https://www.sacred-texts.com/hin/dg/dg19.htm" }
  ],
  closingNote: "May Devi Chamunda grant you the strength to conquer your inner demons and lead you to truth and liberation through her fierce love and protection.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Chamunda Chandika demon slayer",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Chamunda Devi fierce warrior",
};

// --- SATI DETAILED DATA ---
const satiDetailed: Omit<OtherMajorFormDetail, 'id' | 'category' | 'iconName' | 'shortDescription'> = {
  name: "Sati",
  title: "The Eternal Devotee and First Incarnation of Shakti",
  meaningOfName: "‘Sati’ means 'the virtuous one' or 'the truthful one'. She represents unwavering devotion, self-sacrifice, and the divine feminine’s role in upholding dharma.",
  description: "Devi Sati, the first incarnation of Adi Shakti, is the devoted daughter of Daksha and the eternal consort of Lord Shiva. Her life and self-immolation are seen as cosmic acts that challenged ego and re-established divine order. Sati’s sacrifice laid the foundation for the manifestation of Parvati, her rebirth, and the eternal cycle of Shakti in the universe.",
  coreAttributes: [
    "Devotion",
    "Self-Sacrifice",
    "Dharma Upholder",
    "Divine Love",
    "Cosmic Reset",
    "Spiritual Dignity"
  ],
  consort: "Lord Shiva (Mahadeva)",
  alternativeNames: [
    "Dakshayani",
    "Shakti",
    "Uma (in later birth)",
    "Mahadevi"
  ],
  keyMantras: [
    { name: "Sati Dhyana Mantra", sanskrit: "ॐ सत्यमायै नमः॥" },
    { name: "Invocation to Shiva's Consort", sanskrit: "ॐ नमः शिवायै पत्न्यै॥" }
  ],
  primaryAttributes: {
    gender: "Female",
    nature: "Embodiment of Devotion and Divine Feminine",
    energyType: "Pure Shakti (Primordial Feminine Energy)",
    planet: "Moon (symbol of purity and devotion)",
    affiliation: [
      "Shaktism",
      "Shaivism",
      "Hindu Cosmology"
    ]
  },
  originsAndMythology: {
    meaningOfName: "Sati means 'truthful' or 'virtuous woman', representing purity of heart and intention.",
    abode: "Initially Daksha's palace, later Mount Kailash (in Parvati form)",
    parents: "Daksha Prajapati and Prasuti (Virani)",
    textsMentioningHer: [
      "Shiva Purana",
      "Vayu Purana",
      "Linga Purana",
      "Devi Bhagavata Purana"
    ],
    originStory: "Born as the daughter of King Daksha and Queen Prasuti, Sati married Lord Shiva despite her father's opposition. During Daksha’s Yajna, she immolated herself in protest of her father’s insult to Shiva, an act that led to the birth of Shakti Peethas.",
    symbolicVictory: "Her self-sacrifice exposed ego and pride, reasserting divine truth.",
    symbolicRole: "Represents pure devotion, divine sacrifice, and the rebirth of feminine cosmic power."
  },
  iconography: {
    skinColor: ["Golden", "Fair"],
    numberOfArms: 2,
    mount: "Nandi (by association with Shiva)",
    posture: "Standing or seated near a Yajna fire or beside Shiva",
    expressions: "Calm, devoted, dignified",
    commonWeapons: [ // Changed from commonSymbols to commonWeapons for consistency
      "Lotus (Purity)",
      "Fire (Sacrifice)",
      "Trident (in Shiva’s presence)"
    ]
  },
  symbolismDeepDive: {
    Fire: "Her immolation symbolizes the destruction of ego and rebirth of truth.",
    Lotus: "Her inherent purity and detachment.",
    Yajna: "Represents spiritual integrity even in conflict with one’s own family.",
    RebirthAsParvati: "Demonstrates the eternal nature of divine feminine energy."
  },
  notableForms: [
    "Sati (Original Form)",
    "Parvati (Reincarnation)",
    "Mahadevi (Supreme Goddess)",
    "Shakti Peetha Embodiment"
  ],
  majorFestivals: [
    { name: "Navratri", time: "Autumn & Spring", significance: "Remembered as the primal Shakti." },
    { name: "Mahashivratri", time: "Phalguna month", significance: "Celebrated as the consort of Shiva." },
    { name: "Durga Ashtami", time: "Eighth day of Navratri", significance: "Honoring Shakti's sacrifice and power." }
  ],
  prominentTemples: [
    {
      id: "shakti-peethas-all", name: "Shakti Peethas",
      location: "Across India, Nepal, Bangladesh, Pakistan",
      description: "51+ sacred sites where Sati's body parts fell after her self-immolation; each is a unique center of Shakti worship."
    },
    {
      id: "sati-kund-bihar", name: "Sati Kund",
      location: "Bihar, India",
      description: "A sacred site said to be associated with Sati’s self-immolation."
    },
    {
      id: "sati-devi-kothi", name: "Sati Devi Temple",
      location: "Kothi, Himachal Pradesh",
      description: "An ancient shrine dedicated to the memory of Sati and her sacrifice."
    }
  ],
  mantrasAndStotras: [
    {
      name: "Sati Stuti",
      sanskrit: "ॐ सत्यमायै नमः॥",
      meaning: "Salutations to the truthful and virtuous Devi.",
      description: "A mantra invoking the devotion and purity of Sati."
    },
    {
      name: "Shakti Peetha Dhyana Mantra",
      sanskrit: "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता॥ नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
      description: "Praise to the goddess who resides in all beings as pure power — a tribute to Sati’s eternal presence."
    }
  ],
  philosophicalInsights: {
    divineFeminine: "Sati’s story is the genesis of Shakti worship, symbolizing unwavering commitment to divine truth and justice.",
    relationToTridevi: "She is the primal form of Parvati, who later manifests as Durga and Kali, forming the Tridevi’s aspect of Power.",
    associatedConcept: "Shakti Peethas – sacred geography created from her sacrifice.",
    innerBattle: "Her life inspires strength to stand for truth against injustice, even when it’s painful.",
    liberation: "Through self-sacrifice and union with the divine, the soul transcends ego and attains moksha."
  },
  culturalInfluence: {
    literature: [
      "Shiva Purana (Daksha Yajna story)",
      "Devi Bhagavata Purana",
      "Tantric and Puranic traditions"
    ],
    danceForms: "Classical Indian dances sometimes depict her story, especially the Daksha Yajna.",
    artAndSculpture: "Depicted in temple murals, sculptures near Shiva, or in Shakti Peethas.",
    moviesAndMedia: "Central figure in mythological TV serials and retellings of Shiva’s story."
  },
  relatedDeitiesAndAnimals: {
    relatedDeities: [
      "Shiva (Consort)",
      "Parvati (Rebirth)",
      "Durga (Manifestation)",
      "Daksha (Father, antagonist)"
    ],
    associatedAnimals: [
      "Nandi (bull, Shiva's mount)",
      "Lion (in later warrior forms)"
    ]
  },
  modernRelevance: {
    womenEmpowerment: "An icon of standing up for self-respect and divine principles, regardless of external pressure.",
    spiritualBalance: "Her story teaches about letting go of ego, clinging, and injustice to allow spiritual rebirth.",
    festivalsAndUnity: "Her presence through Shakti Peethas unifies vast regions under the sacred feminine tradition."
  },
  furtherReading: [
    { title: "Sati (Hindu goddess) - Wikipedia", url: "https://en.wikipedia.org/wiki/Sati_(Hindu_goddess)" },
    { title: "Shiva Purana: Daksha Yajna Story", url: "https://www.wisdomlib.org/hinduism/book/shiva-purana-english" }
  ],
  closingNote: "Devi Sati’s story is a divine reminder of strength, sacrifice, and transformation. Through her fire, the universe was cleansed, and through her rebirth, Shakti emerged again to protect and guide the world.",
  imageUrl: "https://placehold.co/400x250.png",
  imageHint: "Sati goddess Shakti Peetha",
  detailImageUrl: "https://placehold.co/800x500.png",
  detailImageHint: "Sati Devi Daksha Yagna",
};


export const allMajorFormsDetailedData: OtherMajorFormDetail[] = [
  {
    id: "kamakshi",
    category: "Other Prominent Forms",
    iconName: "Eye",
    shortDescription: kamakshiDetailed.description!.substring(0, 150) + "...",
    ...kamakshiDetailed,
  },
  {
    id: "meenakshi",
    category: "Other Prominent Forms",
    iconName: "ShieldCheck",
    shortDescription: meenakshiDetailed.description!.substring(0, 150) + "...",
    ...meenakshiDetailed,
  },
  {
    id: "lalita-tripurasundari",
    category: "Other Prominent Forms",
    iconName: "Gem",
    shortDescription: lalitaDetailed.description!.substring(0, 150) + "...",
    ...lalitaDetailed,
  },
  {
    id: "annapurna",
    category: "Other Prominent Forms",
    iconName: "Gift",
    shortDescription: annapurnaDetailed.description!.substring(0, 150) + "...",
    ...annapurnaDetailed,
  },
  {
    id: "mahagauri",
    category: "Other Prominent Forms",
    iconName: "Sparkles",
    shortDescription: mahagauriDetailed.description!.substring(0, 150) + "...",
    ...mahagauriDetailed,
  },
  {
    id: "chamunda", // Using "chamunda" as the ID as per previous structure
    category: "Other Prominent Forms",
    iconName: "Sword",
    shortDescription: chamundaDetailed.description!.substring(0, 150) + "...",
    ...chamundaDetailed,
  },
  {
    id: "sati",
    category: "Other Prominent Forms",
    iconName: "Flame",
    shortDescription: satiDetailed.description!.substring(0, 150) + "...",
    ...satiDetailed,
    // Ensuring all fields from OtherMajorFormDetail are present, even if some are derived or defaulted
    meaningOfName: satiDetailed.meaningOfName || satiDetailed.meaning,
    mantrasAndStotras: satiDetailed.mantrasAndStotras?.map(m => ({
        name: m.name,
        sanskrit: m.sanskrit || (m as any).text, // Handle potential 'text' field
        meaning: m.meaning,
        description: m.description
    })) || [],
    majorFestivals: (satiDetailed.majorFestivals as any[])?.map(f => ({
        name: typeof f === 'string' ? f : f.name,
        time: typeof f === 'string' ? "Varies" : f.time,
        significance: typeof f === 'string' ? `Worship of ${satiDetailed.name}` : f.significance,
    })) || [],
    iconography: {
        ...satiDetailed.iconography,
        skinColor: Array.isArray(satiDetailed.iconography?.skinColor) ? satiDetailed.iconography.skinColor : [satiDetailed.iconography?.skinColor || "Golden"],
    }
  }
];

    