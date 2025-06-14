
import type { OtherMajorFormDetail, FestivalDetail, MantraStotraItem } from '@/types';

const meenakshiRawData = {
  name: "Maa Meenakshi",
  title: "Queen of Madurai",
  meaning: "Meenakshi means 'Fish-Eyed One', symbolizing watchfulness and divine vision.",
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
    "ॐ मीनाक्ष्यै नमः॥ (Om Meenakshyai Namah)",
    "Meenakshi Pancharatnam",
    "Meenakshi Stotram"
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
    skinColor: "Emerald green", // Will be converted to string[]
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
  majorFestivals: [ // String array
    "Meenakshi Thirukalyanam (Meenakshi's divine wedding)",
    "Chithirai Festival",
    "Navratri",
    "Thai Poosam"
  ],
  prominentTemples: [
    {
      name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      description: "One of the grandest temples in India, symbolizing feminine divinity and architectural splendor. Center of the annual Chithirai Festival celebrating her celestial wedding."
    },
    {
      name: "Kanchanamalai Temple",
      location: "Sivagangai, Tamil Nadu",
      description: "Temple dedicated to Meenakshi's mother, Kanchanamalai, often visited in tandem with Meenakshi worship."
    }
  ],
  mantrasAndStotras: [ // Array of MantraStotraItem
    {
      name: "Meenakshi Moola Mantra",
      text: "ॐ मीनाक्ष्यै नमः॥", // Using 'text' instead of 'sanskrit' to match JSON
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
    danceForms: ["Depicted in Bharatanatyam and other South Indian dance forms during temple rituals and festivals."],
    artAndSculpture: "Iconic in South Indian temples, especially with emerald complexion and crowned warrior form.",
    moviesAndMedia: ["Featured in Tamil spiritual dramas and temple documentaries."]
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
    {
      title: "Wikipedia - Meenakshi",
      url: "https://en.wikipedia.org/wiki/Meenakshi"
    },
    {
      title: "Meenakshi Amman Temple Official Site",
      url: "https://maduraimeenakshi.org"
    }
  ],
  closingNote: "May Maa Meenakshi's fierce grace and protective strength inspire your path. Her divine presence continues to guide dharma and love in the world."
};

export const meenakshiData: OtherMajorFormDetail = {
  id: "meenakshi",
  name: meenakshiRawData.name,
  title: meenakshiRawData.title,
  meaning: meenakshiRawData.meaning,
  shortDescription: meenakshiRawData.description.substring(0, 155) + (meenakshiRawData.description.length > 155 ? "..." : ""),
  description: meenakshiRawData.description,
  coreAttributes: meenakshiRawData.coreAttributes,
  consort: meenakshiRawData.consort,
  alternativeNames: meenakshiRawData.alternativeNames,
  keyMantras: meenakshiRawData.keyMantras.map(m => ({ name: m.split(' (')[0], sanskrit: m.includes('(') ? m.substring(m.indexOf('(') + 1, m.indexOf(')')) : m, description: m })),
  primaryAttributes: meenakshiRawData.primaryAttributes,
  originsAndMythology: {
    ...meenakshiRawData.originsAndMythology,
    parents: meenakshiRawData.originsAndMythology.parents,
  },
  iconography: {
    ...meenakshiRawData.iconography,
    skinColor: [meenakshiRawData.iconography.skinColor], // Ensure skinColor is string[]
  },
  symbolismDeepDive: meenakshiRawData.symbolismDeepDive,
  notableForms: meenakshiRawData.notableForms,
  majorFestivals: meenakshiRawData.majorFestivals.map(name => ({
    name,
    time: "Varies", // Default time
    significance: `Major festival celebrating ${name}.` // Default significance
  })) as FestivalDetail[],
  prominentTemples: meenakshiRawData.prominentTemples.map(t => ({ ...t, id: t.name.toLowerCase().replace(/\s+/g, '-') })),
  mantrasAndStotras: meenakshiRawData.mantrasAndStotras.map(ms => ({
      name: ms.name,
      sanskrit: ms.text, // map text to sanskrit
      meaning: ms.meaning,
      description: ms.description,
  })),
  philosophicalInsights: meenakshiRawData.philosophicalInsights,
  culturalInfluence: meenakshiRawData.culturalInfluence,
  relatedDeitiesAndAnimals: meenakshiRawData.relatedDeitiesAndAnimals,
  modernRelevance: meenakshiRawData.modernRelevance,
  furtherReading: meenakshiRawData.furtherReading,
  closingNote: meenakshiRawData.closingNote,
  imageUrl: "https://placehold.co/600x700.png", // Placeholder, to be replaced
  imageHint: "Maa Meenakshi divine warrior queen",
  iconName: "Shield", // Default icon if needed for overview
  category: "Other Prominent Forms"
};
