
import type { TrideviDetails, MahavidyaDetails, ParvatiForm, ShaktiPeetha, TimelineEvent, DivineStory, PanchaPrakritisData, MahadeviBaseData, NavForm, AshtaLakshmiForm, SaraswatiAspect, FestivalDetail, MantraStotraItem, TempleDetail } from '@/types';
import type { SacredChant, VerseDetail } from '@/types';

// Raw data for Mahadevis from the user's JSON
const rawMahadevisJSON = {
  "Mahadevis": [
    {
      "name": "Maa Durga",
      "aspect": "Warrior Goddess",
      "attributes": ["Power", "Protection", "Courage", "Righteousness"],
      "description": "The invincible warrior goddess and embodiment of Shakti. She destroys evil and restores dharma.",
      "consort": "None (Form of Shakti)",
      "symbolism": "Rides a lion or tiger, holds various weapons, often depicted with 8-10 arms.",
      "notable_forms": ["Mahishasuramardini", "Chandi", "Navadurga"],
      "festivals": ["Navratri", "Durga Puja"],
      "imageUrl": "https://i.pinimg.com/736x/fb/fd/92/fbfd92806e9d8fe53648d49768112eab.jpg",
      "imageHint": "goddess durga majestic"
    },
    {
      "name": "Maa Lakshmi",
      "aspect": "Goddess of Wealth",
      "attributes": ["Prosperity", "Fortune", "Auspiciousness", "Abundance"],
      "description": "The goddess of wealth and prosperity who blesses her devotees with material and spiritual riches.",
      "consort": "Lord Vishnu",
      "symbolism": "Sits or stands on a lotus, holds lotus flowers, gold coins flowing from hand, accompanied by elephants.",
      "notable_forms": ["Ashta Lakshmi", "Mahalakshmi"],
      "festivals": ["Diwali", "Varalakshmi Vratam"],
      "imageUrl": "https://i.pinimg.com/736x/06/29/e7/0629e77e94953e85b18788f7debb4c08.jpg",
      "imageHint": "goddess lakshmi golden abundance"
    },
    {
      "name": "Maa Saraswati",
      "aspect": "Goddess of Wisdom",
      "attributes": ["Knowledge", "Arts", "Music", "Learning"],
      "description": "The goddess of wisdom, intellect, speech, and the fine arts. She represents clarity and purity of mind.",
      "consort": "Brahma (sometimes considered)",
      "symbolism": "Seated on a white lotus or swan, holds a veena, a book, a rosary.",
      "notable_forms": ["Sharada", "Vagdevi"],
      "festivals": ["Vasant Panchami", "Saraswati Puja"],
      "imageUrl": "https://i.pinimg.com/736x/3b/d8/79/3bd8795e7614a482616a72766917ae43.jpg",
      "imageHint": "goddess saraswati serene veena"
    },
    {
      "name": "Maa Parvati",
      "aspect": "Mother Goddess",
      "attributes": ["Love", "Devotion", "Fertility", "Strength"],
      "description": "The gentle and nurturing form of Shakti, Parvati is the consort of Lord Shiva and the mother of Ganesha and Kartikeya.",
      "consort": "Lord Shiva",
      "symbolism": "Depicted as a beautiful and benevolent woman, often with Shiva or her children.",
      "notable_forms": ["Annapurna", "Gauri", "Sati", "Shailaputri"],
      "festivals": ["Teej", "Gauri Tritiya", "Navratri"],
      "imageUrl": "https://i.pinimg.com/736x/48/54/61/4854618ac9026399d6dbcfbde52f8ae6.jpg",
      "imageHint": "goddess parvati gentle motherly"
    },
    {
      "name": "Maa Kali",
      "aspect": "Goddess of Time & Destruction",
      "attributes": ["Destruction", "Liberation", "Transformation", "Fearlessness"],
      "description": "The fierce and terrifying aspect of the Divine Mother. Kali destroys ignorance and ego, granting liberation.",
      "consort": "Lord Shiva",
      "symbolism": "Dark-skinned, fierce expression, tongue out, garland of skulls, standing on Shiva.",
      "notable_forms": ["Dakshina Kali", "Chamunda", "Bhadra Kali"],
      "festivals": ["Kali Puja", "Diwali", "Navratri"],
      "imageUrl": "https://i.pinimg.com/736x/51/22/ed/5122ed1cbccdd281e8f3c4748fc05f26.jpg",
      "imageHint": "goddess kali fierce transformative"
    }
  ]
};

// Processed base Mahadevi data
const processedMahadevisData: MahadeviBaseData[] = rawMahadevisJSON.Mahadevis.map(m => ({
  ...m,
  notable_forms: m.notable_forms,
  consort: m.consort === "None (Form of Shakti)" ? null : m.consort,
}));

// Helper function to get Mahadevi base data by name
const getMahadeviByName = (name: string): MahadeviBaseData | undefined => {
  return processedMahadevisData.find(m => m.name === name);
};

// Raw Mahavidya Data - Updated with user's JSON structure and image URLs
const rawMahavidyaDataOriginal = {
  "dasha_mahavidyas": [
    {
      "name": "Kali",
      "description": "Kali is the goddess of destruction and transformation. She is often depicted with a fierce form, representing the destructive aspect of time, which clears the path for creation. Kali is also seen as a mother figure who protects her devotees and removes negative influences.",
      "iconography": "Kali is depicted as a dark, fearsome figure with four arms. She often wears a garland of skulls, and her tongue is protruding, symbolizing her role as the slayer of evil forces.",
      "associates": ["Time", "Destruction", "Transformation"],
      "key_teachings": [
        "Embrace the transformative power of destruction for rebirth.",
        "Overcome fear and illusion to reach enlightenment.",
        "The universe is in constant flux and destruction is part of the cosmic order."
      ],
      "mantra": "ॐ क्लीं कालिकायै नमः (Om Kleem Kalikayai Namah)",
      "imageUrl": "https://i.pinimg.com/736x/1d/88/7a/1d887ac6b6c62066d4b39bb1208ea60a.jpg"
    },
    {
      "name": "Tara",
      "description": "Tara is a goddess of protection, compassion, and liberation. She represents the energy of the Divine Mother who assists in the removal of obstacles and provides spiritual guidance, especially for those seeking liberation from material bondage.",
      "iconography": "Tara is often depicted in a seated or standing posture, holding a blue lotus, symbolizing purity, and a sword to cut through ignorance.",
      "associates": ["Compassion", "Protection", "Liberation"],
      "key_teachings": [
        "Offer protection and guidance to those who seek it.",
        "Compassion and wisdom are keys to overcoming suffering.",
        "Liberation from attachment and delusion brings peace."
      ],
      "mantra": "ॐ तारे तारे तरे स्वाहा (Om Tare Tare Tare Svaha)",
      "imageUrl": "https://i.pinimg.com/736x/4c/30/98/4c30988b160b52b07e8d9768092a00f8.jpg"
    },
    {
      "name": "Tripura Sundari",
      "description": "Tripura Sundari is the goddess of beauty, cosmic energy, and wisdom. She is the embodiment of the ultimate truth and the force that governs creation, preservation, and dissolution. She is also known as the Goddess of the Three Worlds.",
      "iconography": "Tripura Sundari is depicted as a youthful, radiant woman with a serene and auspicious appearance, symbolizing the ultimate beauty and peace of the universe.",
      "associates": ["Beauty", "Cosmic Energy", "Wisdom"],
      "key_teachings": [
        "Divine beauty transcends physical form and represents spiritual truth.",
        "The divine energy within can lead to self-realization.",
        "The three realms of existence (earth, heaven, and the netherworld) are under her protection."
      ],
      "mantra": "ॐ त्रिपुरसुन्दरी महाक्रूरी स्वाहा (Om Tripurasundari Mahakroori Svaha)",
      "imageUrl": "https://i.pinimg.com/736x/88/ce/13/88ce1372ff3c871da12840e6e1ac0929.jpg"
    },
    {
      "name": "Bhuvaneshwari",
      "description": "Bhuvaneshwari is the goddess of the universe, associated with the creation and maintenance of the cosmos. She is the mother of the world and is often seen as the embodiment of space, time, and material creation.",
      "iconography": "Bhuvaneshwari is depicted as a beautiful, regal woman with a peaceful, compassionate expression. She is often shown surrounded by the universe and symbols of creation.",
      "associates": ["Creation", "Cosmic Mother", "Space"],
      "key_teachings": [
        "All creation is a manifestation of the Divine Mother.",
        "Embrace the inherent divinity of the universe and understand its interconnectedness.",
        "Cosmic order is nurtured and protected by feminine power."
      ],
      "mantra": "ॐ भूवनेश्वरि स्वाहा (Om Bhuvaneshwari Svaha)",
      "imageUrl": "https://i.pinimg.com/736x/8c/27/c8/8c27c898a7200ccfc8fdddc957d37bf4.jpg"
    },
    {
      "name": "Chinnamasta",
      "description": "Chinnamasta is the goddess of self-sacrifice and transformation. She is depicted as a self-decapitated goddess who symbolizes the transcendence of duality, ego, and attachment.",
      "iconography": "Chinnamasta is often portrayed holding her own severed head, with blood flowing from the neck, representing the ultimate self-sacrifice and the energy that sustains life.",
      "associates": ["Self-Sacrifice", "Transcendence", "Liberation"],
      "key_teachings": [
        "True freedom comes when one transcends the ego and attachment.",
        "Self-sacrifice is a path to spiritual awakening.",
        "The flow of life and death is one unified force."
      ],
      "mantra": "ॐ छिन्नमस्तायै नमः (Om Chinnamastayai Namah)",
      "imageUrl": "https://i.pinimg.com/736x/74/12/6a/74126a6ac6c821aec2c150f3027a769e.jpg"
    },
    {
      "name": "Bhairavi",
      "description": "Bhairavi is the goddess of fierce protection and destruction of evil. She represents both the fearsome and nurturing aspects of the Divine Mother.",
      "iconography": "Bhairavi is depicted as a wrathful goddess with a terrible form, wielding weapons to destroy the forces of darkness and ignorance.",
      "associates": ["Fearlessness", "Protection", "Destruction of Evil"],
      "key_teachings": [
        "Fear and darkness can be conquered with the strength of divine will.",
        "Protection from evil forces comes through devotion and courage.",
        "The destruction of negative forces leads to spiritual enlightenment."
      ],
      "mantra": "ॐ भैरवायै नमः (Om Bhairavayai Namah)",
      "imageUrl": "https://i.pinimg.com/736x/51/37/42/513742963ba55e7c9d6e248fd79e7034.jpg"
    },
    {
      "name": "Dhumavati",
      "description": "Dhumavati is the goddess of the void, loss, and dissolution. She is associated with the power of destruction and the impermanence of life.",
      "iconography": "Dhumavati is depicted as an old, sorrowful woman, often shown in a disheveled state, symbolizing the inescapable process of aging and the dissolving of all things.",
      "associates": ["Destruction", "Impermanence", "Loss"],
      "key_teachings": [
        "Embrace loss and impermanence as integral parts of life.",
        "The void is not to be feared, but understood as a space for transformation.",
        "Only by letting go of attachments can one experience liberation."
      ],
      "mantra": "ॐ धूमावती स्वाहा (Om Dhumavati Svaha)",
      "imageUrl": "https://i.pinimg.com/736x/f5/d9/3b/f5d93bfce338bb12f71c665237709d6e.jpg"
    },
    {
      "name": "Bagalamukhi",
      "description": "Bagalamukhi is the goddess of immobilization and power over enemies. She is known for her ability to paralyze or stop the actions of those who cause harm.",
      "iconography": "Bagalamukhi is depicted as a yellow-robed goddess, holding a club in one hand and a captive enemy in the other, often with their tongue tied or mouth sealed.",
      "associates": ["Paralysis of Evil", "Victory over Enemies", "Power"],
      "key_teachings": [
        "Victory is achieved by subduing negative forces with focused power.",
        "The power to protect oneself from harm comes from inner strength and wisdom.",
        "Control over the mind and emotions is the ultimate victory."
      ],
      "mantra": "ॐ बगलामुखि स्वाहा (Om Bagalamukhi Svaha)",
      "imageUrl": "https://i.pinimg.com/736x/08/5b/ff/085bff8e649c19be7119915bcf264d6c.jpg"
    },
    {
      "name": "Matangi", // Corrected from Matrika
      "description": "Matangi is the goddess of inner wisdom, unconventional knowledge, and command over speech and arts. As the embodiment of Ucchishta (leftover energy), she represents transformation of impure into pure and is deeply venerated in Tantric practices.",
      "iconography": "Matangi is often depicted with a green complexion, holding a veena, a skull, and sometimes a parrot. She is associated with outcastes and pollution.",
      "associates": ["Speech", "Music", "Knowledge", "Outcastes"],
      "key_teachings": [
        "Divine wisdom can be found in unconventional and even 'impure' sources.",
        "True knowledge transcends social boundaries and norms.",
        "The power of speech (Vak) is sacred and transformative."
      ],
      "mantra": "ॐ ह्रीं ऐं क्लीं सौः उच्छिष्टचण्डालिनी मातङ्ग्यै नमः (Om Hreem Aim Kleem Sauh Ucchishtachandalini Matangyai Namah)",
      "imageUrl": "https://i.pinimg.com/736x/14/11/ea/1411ea2613f41cf73bd40db5aedde39e.jpg"
    },
    {
      "name": "Kamala",
      "description": "Kamala is the goddess of wealth, prosperity, and fertility. She is often depicted as a goddess of abundance, providing spiritual and material well-being.",
      "iconography": "Kamala is depicted as a beautiful woman seated on a lotus, holding lotus flowers, and surrounded by wealth and prosperity.",
      "associates": ["Wealth", "Prosperity", "Fertility"],
      "key_teachings": [
        "True wealth is not just material, but spiritual.",
        "Prosperity flows from spiritual discipline and devotion.",
        "Fertility and abundance are gifts of the divine."
      ],
      "mantra": "ॐ कमलायै नमः (Om Kamalayai Namah)",
      "imageUrl": "https://i.pinimg.com/736x/98/5b/b8/985bb891fbf75bc948ce8f9d9afddf04.jpg"
    }
  ]
};


const mahavidyaList = rawMahavidyaDataOriginal.dasha_mahavidyas;


// Export MahavidyaData
const mahavidyaDataInternal: MahavidyaDetails[] = mahavidyaList.map(m => {
  const slug = m.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  const imageHint = `${slug} wisdom goddess`;

  if (m.name === "Kali") {
    const kaliBase = getMahadeviByName("Maa Kali")!; // Assumes Maa Kali is in processedMahadevisData
    const originalKaliMahavidyaData = rawMahavidyaDataOriginal.dasha_mahavidyas.find(original => original.name === "Kali")!;

    return {
      slug: 'kali',
      name: "Maa Kali", // Using "Maa Kali" for consistency
      description: kaliBase?.description || originalKaliMahavidyaData.description,
      iconography: kaliBase?.symbolism || originalKaliMahavidyaData.iconography,
      associates: originalKaliMahavidyaData.associates,
      keyTeachings: originalKaliMahavidyaData.key_teachings,
      mantras: [originalKaliMahavidyaData.mantra],
      imageHint: 'kali mahavidya fierce',
      imageUrl: originalKaliMahavidyaData.imageUrl,
      aspect: kaliBase?.aspect,
      consort: kaliBase?.consort,
      notableForms: kaliBase?.notable_forms,
      festivals: kaliBase?.festivals,
      attributesList: kaliBase?.attributes,
    };
  }

  return {
    slug,
    name: m.name,
    description: m.description,
    iconography: m.iconography,
    associates: m.associates,
    keyTeachings: m.key_teachings,
    mantras: [m.mantra],
    imageHint,
    imageUrl: m.imageUrl,
  };
});
export const mahavidyaData = mahavidyaDataInternal;


// Detailed Durga JSON provided by user
const durgaDetailedData = {
  "name": "Maa Durga",
  "alternativeNames": ["Devi", "Shakti", "Bhavani", "Chandi", "Kali", "Mahishasura Mardini", "Parvati"],
  "type": "Devi",
  "pantheon": "Hinduism",
  "primaryAttributes": {
    "gender": "Female",
    "nature": "Warrior Goddess, Mother, Protector, Divine Feminine",
    "energyType": "Shakti (Cosmic Energy)",
    "affiliation": ["Shaktism", "Shaivism", "Vaishnavism"],
    "planet": "Moon"
  },
  "originsAndMythology": {
    "originStory": "Maa Durga was created by the combined powers of Brahma, Vishnu, and Shiva to defeat the demon Mahishasura, who could not be defeated by any man or god. Each god gave her their weapons and powers. She emerged from divine light as a radiant warrior goddess riding a lion.",
    "symbolicVictory": "Defeated Mahishasura after a fierce battle, symbolizing the victory of Dharma (righteousness) over Adharma (evil).",
    "textsMentioningHer": [
      "Devi Mahatmyam (Markandeya Purana)",
      "Devi Bhagavatam",
      "Skanda Purana",
      "Kalika Purana",
      "Shiva Purana"
    ]
  },
  "iconography": {
    "skinColor": ["Golden", "Red", "Dark Blue"],
    "numberOfArms": 8,
    "mount": "Lion or Tiger",
    "commonWeapons": ["Trishul (Trident)", "Sudarshan Chakra", "Conch", "Sword", "Bow and Arrow", "Mace", "Thunderbolt", "Lotus"],
    "posture": "Standing or seated on a lion, in a dynamic battle posture, or in a peaceful motherly form",
    "expressions": ["Calm", "Fierce", "Compassionate"]
  },
  "avatarsForms": [
    { "name": "Mahishasura Mardini", "description": "Slayer of Mahishasura, a powerful demon. One of her most iconic warrior forms." },
    { "name": "Navadurga", "forms": ["Shailaputri", "Brahmacharini", "Chandraghanta", "Kushmanda", "Skandamata", "Katyayani", "Kalaratri", "Mahagauri", "Siddhidatri"], "description": "Nine divine forms worshipped during Navratri, each representing a unique cosmic function and spiritual symbolism." },
    { "name": "Chandi", "description": "Fierce and aggressive form mentioned in the Devi Mahatmyam, known for slaying demons like Chanda, Munda, and Raktabija." },
    { "name": "Kali", "description": "A powerful, terrifying form of Durga representing time and destruction of evil. Emerges from Durga’s forehead in battle." },
    { "name": "Jagadamba", "description": "Universal Mother form; represents nurturing, creation, and divine motherhood." }
  ],
  "symbolism": {
    "lion": "Power, courage, and determination",
    "weapons": "Divine tools to destroy ego, ignorance, and evil",
    "thirdEye": "Supreme knowledge and intuition",
    "eightHands": "Mastery over all directions and complete cosmic control",
    "redSaree": "Fierce compassion, energy, and divine love"
  },
  "festivals": [
    { "name": "Navratri", "type": "Nine-Night Festival", "time": "Twice a year (Chaitra & Ashwin months)", "significance": "Worship of nine forms of Durga; spiritual cleansing and Shakti invocation" },
    { "name": "Durga Puja", "time": "Ashwin (Sept–Oct)", "region": "Primarily West Bengal, Odisha, Assam, Tripura, Bihar", "significance": "Celebrates the victory over Mahishasura. Culminates in Vijayadashami." },
    { "name": "Vijayadashami (Dussehra)", "significance": "Marks Durga’s victory over Mahishasura and the triumph of good over evil" }
  ],
  "mantrasAndStotras": {
    "mantras": [
      { "name": "Durga Gayatri Mantra", "sanskrit": "ॐ कात्यायनाय विद्महे कन्न्यकुमारि धीमहि। तन्नो दुर्गिः प्रचोदयात्॥", "meaning": "We meditate upon the daughter of Katyayana, may Goddess Durga enlighten us." },
      { "name": "Durga Dvatrinshannam Mala", "description": "32 names of Durga to protect against fear and evil" }
    ],
    "stotras": [
      { "name": "Argala Stotram", "source": "Devi Mahatmyam", "description": "Grants protection, victory, and blessings" },
      { "name": "Durga Saptashati (Devi Mahatmyam)", "description": "700 verses in praise of Durga from Markandeya Purana" },
      { "name": "Kavacha Stotram", "description": "Armor-like prayer to protect the devotee" }
    ]
  },
  "temples": [
    { "id": "vaishno-devi", "name": "Vaishno Devi Temple", "location": "Jammu and Kashmir, India", "significance": "One of the most visited shrines of Durga in her Vaishno form" },
    { "id": "kamakhya-durga", "name": "Kamakhya Temple", "location": "Assam, India", "significance": "Major Shakti Peetha; associated with Tantra and fertility" },
    { "id": "dakshineswar-kali-durga", "name": "Dakshineswar Kali Temple", "location": "West Bengal, India", "significance": "Dedicated to Kali (form of Durga); visited by Ramakrishna Paramhansa" },
    { "id": "chamundeshwari-mysore", "name": "Chamundeshwari Temple", "location": "Mysore, Karnataka, India", "significance": "Durga is worshipped as Chamundeshwari who slayed Mahishasura" }
  ],
  "shaktiPeethasInfo": {
    "total": 51,
    "importantOnes": ["Kamakhya (Assam)", "Kalighat (Kolkata)", "Vaishno Devi (Jammu)", "Jwalamukhi (Himachal Pradesh)", "Kanyakumari (Tamil Nadu)"],
    "description": "Places where parts of Sati’s body fell. These sites are considered highly sacred and powerful centers of Shakti worship."
  },
  "philosophicalInsights": {
    "divineFeminine": "Durga represents the unified divine feminine energy. She embodies all forms of wisdom, power, and creativity.",
    "innerBattle": "Durga’s battles with demons symbolize the inner struggles of the human soul against ego, anger, greed, and ignorance.",
    "liberation": "Worship of Durga leads to spiritual purification, fearlessness, and eventually, liberation (moksha)."
  },
  "culturalInfluence": {
    "literature": ["Devi Bhagavata Purana", "Kalika Purana", "Markandeya Purana"],
    "danceForms": ["Chhau", "Odissi", "Bharatanatyam during Navratri"],
    "artAndSculpture": "Depicted in ancient temples, modern paintings, clay idols in Bengal, bronze statues in South India",
    "moviesAndMedia": ["Mahishasura Mardini (Mythological film)", "TV serials on Devi", "Songs and bhajans in regional languages"]
  },
  "relatedDeities": ["Parvati", "Lakshmi", "Saraswati", "Kali", "Skanda (son)", "Ganesha (son)"],
  "associatedAnimals": ["Lion", "Tiger", "Owl (as Kali)"],
  "modernRelevance": {
    "womenEmpowerment": "Symbol of feminine power and leadership",
    "spiritualBalance": "Teaches courage with compassion, strength with peace",
    "festivalsAndUnity": "Unites people across religions, languages, and regions"
  },
  "externalLinks": {
    "wikipedia": "https://en.wikipedia.org/wiki/Durga",
    "vedicLibrary": "https://sanskritdocuments.org/doc_devii/durgasaptashati.html",
    "navadurgaInfo": "https://www.hindujagruti.org/hinduism/knowledge/article/navadurga.html"
  }
};

// Detailed Lakshmi JSON provided by user
const lakshmiDetailedData = {
  "name": "Maa Lakshmi",
  "alternativeNames": ["Shri", "Padma", "Kamala", "Chanchala", "Indira", "Mahadevi"],
  "type": "Devi",
  "pantheon": "Hinduism",
  "primaryAttributes": {
    "gender": "Female",
    "nature": "Goddess of Wealth, Fortune, Prosperity, Beauty, and Abundance",
    "energyType": "Shakti (Divine Energy of Vishnu)",
    "affiliation": ["Shaktism", "Vaishnavism"],
    "planet": "Venus (Shukra)"
  },
  "originsAndMythology": {
    "originStory": "Maa Lakshmi emerged from the cosmic ocean during the Samudra Manthan (Churning of the Ocean) seated on a lotus, carrying nectar and divine prosperity. She chose Vishnu as her eternal consort.",
    "eternalConsort": "Lord Vishnu (the Preserver)",
    "symbolicRole": "Goddess of material and spiritual wealth, beauty, and auspiciousness. Presides over Dharma, Artha, Kama, and Moksha.",
    "textsMentioningHer": [
      "Rigveda (as Shri)",
      "Lakshmi Tantra",
      "Vishnu Purana",
      "Padma Purana",
      "Devi Bhagavata Purana",
      "Bhagavad Gita (Chapter 10: vibhūti)"
    ]
  },
  "iconography": {
    "skinColor": ["Golden", "Pink", "White"],
    "numberOfArms": 4,
    "mount": "Owl (Uluka)",
    "commonAttributes": [
      "Lotus flowers",
      "Gold coins pouring from her hand",
      "Abhaya (protection) mudra",
      "Gada (mace) or Pot of Amrita"
    ],
    "posture": "Usually standing or seated on a fully bloomed pink or white lotus",
    "expressions": ["Graceful", "Peaceful", "Benevolent"]
  },
  "avatarsForms": [
    {
      "name": "Ashtalakshmi",
      "description": "Eight forms of Lakshmi representing various types of wealth and blessings",
      "forms": [
        "Adi Lakshmi (Primordial Wealth)",
        "Dhana Lakshmi (Monetary Wealth)",
        "Dhanya Lakshmi (Agricultural Wealth)",
        "Gaja Lakshmi (Animal & Royal Wealth)",
        "Santana Lakshmi (Progeny)",
        "Veera Lakshmi (Courage & Valor)",
        "Vijaya Lakshmi (Victory)",
        "Vidya Lakshmi (Knowledge)"
      ]
    },
    { "name": "Rajyalakshmi", "description": "Goddess of royalty and governance" },
    { "name": "Vaibhava Lakshmi", "description": "Lakshmi of grandeur and glory, often worshipped for overall prosperity" },
    { "name": "Bhudevi", "description": "Goddess Earth, one of the forms of Lakshmi" },
    { "name": "Sridevi", "description": "Heavenly aspect of Lakshmi worshipped along with Bhudevi" }
  ],
  "symbolism": {
    "owl": "Spiritual wisdom, watchfulness in darkness",
    "lotus": "Spiritual purity and detachment",
    "fourHands": "Dharma (righteousness), Artha (wealth), Kama (desires), Moksha (liberation)",
    "goldCoins": "Continuous flow of material and spiritual wealth",
    "abhayaMudra": "Fearlessness and protection"
  },
  "festivals": [
    {
      "name": "Diwali (Lakshmi Puja)",
      "type": "Festival of Lights",
      "time": "Kartik Amavasya (Oct-Nov)",
      "region": "India-wide",
      "significance": "Main festival for invoking wealth, purity, and fortune. Celebrated with lighting lamps and worshipping Lakshmi with Vishnu and Ganesha.",
      "description": "Main festival for invoking wealth, purity, and fortune. Celebrated with lighting lamps and worshipping Lakshmi with Vishnu and Ganesha."
    },
    {
      "name": "Varalakshmi Vratam",
      "type": "Vrata (Vow/Fast)",
      "time": "Friday before Shravan Purnima (Aug)",
      "region": "South India",
      "significance": "Married women worship Lakshmi for the well-being of family and wealth",
      "description": "Married women worship Lakshmi for the well-being of family and wealth"
    },
    {
      "name": "Sharad Purnima",
      "type": "Harvest Festival",
      "time": "Ashwin Purnima",
      "region": "India-wide",
      "significance": "Celebration of Lakshmi’s showering of nectar (amrit) on Earth",
      "description": "Celebration of Lakshmi’s showering of nectar (amrit) on Earth"
    },
    {
      "name": "Kojagiri Purnima",
      "type": "Night Vigil",
      "time": "Ashwin Purnima",
      "region": "Various parts of India",
      "description": "Worshipped at midnight as 'Who is awake?' (Ko-Jaagarti); Lakshmi blesses those awake and engaged in devotion",
      "significance": "Worshipped at midnight; Lakshmi blesses those awake and engaged in devotion"
    }
  ],
  "mantrasAndStotras": {
    "mantras": [
      {
        "name": "Shri Lakshmi Gayatri Mantra",
        "sanskrit": "ॐ महालक्ष्म्यै च विद्महे विष्णुपत्नी च धीमहि। तन्नो लक्ष्मीः प्रचोदयात्॥",
        "meaning": "We meditate on Mahalakshmi, consort of Vishnu. May Lakshmi enlighten our minds."
      },
      {
        "name": "Shri Suktam",
        "source": "Rigveda",
        "description": "Powerful hymn invoking Lakshmi's blessings for prosperity and purity"
      }
    ],
    "stotras": [
      {
        "name": "Kanakadhara Stotram",
        "author": "Adi Shankaracharya",
        "description": "Legend says Lakshmi poured gold for a poor lady upon hearing this stotra"
      },
      {
        "name": "Lakshmi Ashtottara Shatanamavali",
        "description": "108 sacred names of Lakshmi"
      },
      {
        "name": "Lakshmi Sahasranama",
        "description": "1000 names of Lakshmi from the Lakshmi Tantra"
      }
    ]
  },
  "temples": [
    { "id": "mahalakshmi-kolhapur", "name": "Mahalakshmi Temple", "location": "Kolhapur, Maharashtra", "significance": "One of the 18 Maha Shakti Peethas" },
    { "id": "mahalakshmi-mumbai", "name": "Mahalakshmi Temple", "location": "Mumbai, Maharashtra", "significance": "Famous seashore temple dedicated to Lakshmi, Saraswati, and Kali" },
    { "id": "srivilliputhur-andal", "name": "Srivilliputhur Andal Temple", "location": "Tamil Nadu", "significance": "Dedicated to Goddess Andal (Lakshmi avatar)" },
    { "id": "padmavathi-tiruchanur", "name": "Padmavathi Temple", "location": "Tiruchanur, Andhra Pradesh", "significance": "Padmavathi is Lakshmi, consort of Lord Venkateshwara" }
  ],
  "shaktiPeethasInfo": {
    "total": 51,
    "description": "Lakshmi is associated with the nurturing aspects of Shakti. Her temples are sometimes included in the Shakti Peetha lists where she is worshipped as the heart or womb of Devi.",
    "importantOnes": [
      "Kolhapur (Mahalakshmi Peeth)",
      "Kamarupa (Kamakhya - Fertility and Prosperity)",
      "Jwalaji (Flame of abundance)"
    ],
    "notableSites": [
      "Kolhapur (Mahalakshmi Peeth)",
      "Kamarupa (Kamakhya - Fertility and Prosperity)",
      "Jwalaji (Flame of abundance)"
    ]
  },
  "philosophicalInsights": {
    "spiritualMeaning": "True wealth is spiritual insight, inner peace, and generosity. Lakshmi grants both material and divine riches.",
    "balanceMessage": "She favors cleanliness, honesty, compassion, and detachment. She leaves homes of greed, chaos, and violence.",
    "worshipGuidelines": "Worship with clean surroundings, gratitude, charity, and humility invites her grace."
  },
  "culturalInfluence": {
    "literature": ["Shri Suktam (Rigveda)", "Lakshmi Tantra (Pancharatra text)", "Padma Purana", "Skanda Purana"],
    "artAndSculpture": "Depicted in jewelry, murals, sculptures holding lotuses with elephants flanking her",
    "danceForms": ["Bharatanatyam", "Kuchipudi", "Mohiniyattam during Lakshmi Puja"],
    "moviesAndMedia": ["TV serials on Mahalakshmi", "Lakshmi-themed devotional songs in many Indian languages"]
  },
  "relatedDeities": ["Vishnu (Consort)", "Ganesha (invoked with Lakshmi)", "Saraswati (Goddess of Knowledge, often worshipped together)", "Kubera (Wealth Deity, Treasurer of Gods)"],
  "associatedAnimals": ["Owl", "Elephant", "Cow"],
  "modernRelevance": {
    "womenEmpowerment": "Symbol of feminine prosperity and self-sufficiency; revered as the ideal of grace, beauty, and abundance.",
    "spiritualBalance": "Represents balance between material and spiritual prosperity.",
    "festivalsAndUnity": "Diwali and other festivals unite communities in her worship.",
    "householdWorship": "Lakshmi is worshipped in almost every Hindu home for daily prosperity and health.",
    "businessAndFinance": "Lakshmi’s blessings are sought for new ventures, business growth, and financial decisions."
  },
  "externalLinks": {
    "wikipedia": "https://en.wikipedia.org/wiki/Lakshmi",
    "vedicLibrary": "https://sanskritdocuments.org/doc_devii/shrisuktam.html",
    "ashtalakshmiInfo": "https://www.drikpanchang.com/festivals/ashtalakshmi/ashta-lakshmi.html"
  }
};

// Detailed Saraswati JSON (provided by user)
const saraswatiDetailedData = {
  "goddess": {
    "name": "Maa Saraswati",
    "alternateNames": ["Sharada", "Vagdevi", "Bharati", "Savitri"],
    "meaningOfName": "Saraswati means 'the flowing one' – symbolizing the flow of wisdom and consciousness.",
    "depiction": {
      "complexion": "Fair or white, symbolizing purity and illumination",
      "vehicles": ["Swan (Hamsa)", "Peacock"],
      "seatedOn": "Lotus or white lotus throne",
      "numberOfArms": 4,
      "holds": [
        "Veena (a stringed musical instrument)",
        "Book (Vedas or scriptures)",
        "Mala (rosary symbolizing meditation and spiritual knowledge)",
        "Water pot (symbol of purification)"
      ],
      "symbolism": {
        "Veena": "Mastery over arts and harmony in creation",
        "Swan": "Discrimination between good and bad, pure and impure",
        "Peacock": "Colorful splendor of the arts and ego that must be overcome",
        "Lotus": "Enlightenment and knowledge amidst the ignorance of the world"
      }
    },
    "abode": "Brahmaloka or the realm of knowledge",
    "consort": "None (although associated with Brahma in some traditions)",
    "mantra": "ॐ ऐं सरस्वत्यै नमः॥ (Om Aim Saraswatyai Namah)",
    "festival": {
      "name": "Vasant Panchami",
      "type": "Major Festival",
      "region": "India-wide",
      "description": "Celebrated to honor Saraswati, it marks the arrival of spring and is considered auspicious for beginning education, music, and arts.",
      "timing": "Fifth day of Magha (January–February)",
      "otherFestivals": []
    },
    "associatedElements": [
      "Knowledge",
      "Wisdom",
      "Speech (Vak)",
      "Music",
      "Education",
      "Creativity",
      "Spiritual Enlightenment"
    ],
    "scripturalReferences": [
      {
        "text": "Rigveda",
        "reference": "Mentioned as the goddess of speech and wisdom",
        "verses": ["RV 6.61", "RV 10.17.9"]
      },
      {
        "text": "Yajurveda",
        "reference": "Associated with Vak (speech) and sacred knowledge"
      },
      {
        "text": "Puranas",
        "reference": "Elaborate stories in the Devi Bhagavata Purana, Skanda Purana, Padma Purana"
      }
    ],
    "philosophicalSignificance": {
      "description": "Maa Saraswati represents the Adi Shakti aspect of divine knowledge. She is the embodiment of Vāk (speech), intelligence, learning, and creative expression.",
      "relationToOtherTridevi": "She forms the Tridevi along with Lakshmi (wealth) and Parvati (power). Saraswati governs the mind and consciousness, the source of wisdom and transcendence."
    },
    "worshipPractices": {
      "idealFor": [
        "Students",
        "Artists",
        "Musicians",
        "Teachers",
        "Seekers of knowledge"
      ],
      "rituals": [
        "Offering white flowers, fruits, and sweets",
        "Keeping books and musical instruments near her idol for blessing",
        "Chanting Saraswati Vandana and Mantras",
        "Maintaining silence or purity on Vasant Panchami"
      ]
    },
    "famousTemples": [
      {
        "id": "saraswati-basar",
        "name": "Saraswati Temple, Basar",
        "location": "Telangana, India",
        "significance": "Prominent temple for Maa Saraswati in Basar."
      },
      {
        "id": "koothanur-saraswati",
        "name": "Koothanur Maha Saraswathi Temple",
        "location": "Tamil Nadu, India",
        "significance": "Famous Saraswati temple in Koothanur."
      },
      {
        "id": "shringeri-sharadamba",
        "name": "Shringeri Sharadamba Temple",
        "location": "Karnataka, India",
        "significance": "Historic temple dedicated to Sharadamba, a form of Saraswati."
      },
      {
        "id": "saraswati-pushkar",
        "name": "Saraswati Mandir, Pushkar",
        "location": "Rajasthan, India",
        "significance": "Saraswati temple in the holy city of Pushkar."
      }
    ],
    "iconographyNote": "She is often depicted dressed in pure white, sitting calmly with a serene expression, showing that true knowledge brings peace and light.",
    "modernCulturalSignificance": "Invoked in schools, universities, and during ceremonies related to learning. Her image is revered globally as a symbol of education and intellect.",
    "associatedConcept": "Vak Shakti – the power of speech and the manifestation of consciousness as words and wisdom."
  }
};

// Detailed Parvati JSON provided by user
const parvatiDetailedData = {
  "goddess": {
    "name": "Maa Parvati",
    "alternateNames": ["Uma", "Gauri", "Shailaputri", "Annapurna", "Bhavani", "Mahadevi"],
    "meaningOfName": "Parvati means 'Daughter of the Mountain' (Parvata), symbolizing strength and spiritual elevation.",
    "depiction": {
      "complexion": "Golden or fair (Gauri), sometimes dark (as in Kali or Durga forms)",
      "vehicles": ["Lion", "Tiger", "Nandi (the bull)"],
      "seatedOn": "Lotus or with Shiva on Mount Kailash",
      "numberOfArms": "2 or 4 (varies by form)",
      "holds": [
        "Trident (Trishul)",
        "Mirror",
        "Bell",
        "Lotus",
        "Abhaya Mudra (gesture of protection)"
      ],
      "symbolism": {
        "Trident": "Control over the three gunas (Sattva, Rajas, Tamas)",
        "Mirror": "Self-reflection and inner awareness",
        "Lion/Tiger": "Courage and righteous strength",
        "Lotus": "Spiritual blossoming and purity"
      }
    },
    "abode": "Mount Kailash",
    "consort": "Lord Shiva (Mahadeva)",
    "children": ["Ganesha", "Kartikeya (Skanda/Murugan)", "Ashokasundari (lesser known)"],
    "mantra": "ॐ पार्वत्यै नमः॥ (Om Parvatyai Namah)",
    "festival": {
      "name": "Navratri",
      "type": "Major Festival",
      "region": "India-wide",
      "description": "Nine nights dedicated to the worship of the Divine Feminine in her various forms including Parvati, Durga, and Kali.",
      "timing": "Twice a year (Chaitra & Ashwin months)",
      "otherFestivals": [
        "Teej",
        "Hartalika Teej",
        "Gauri Puja",
        "Gangaur"
      ]
    },
    "associatedElements": [
      "Fertility",
      "Devotion",
      "Love",
      "Marital Harmony",
      "Spiritual Strength",
      "Transformation"
    ],
    "scripturalReferences": [
      {
        "text": "Shiva Purana",
        "reference": "Extensive stories about her birth, penance, marriage to Shiva, and divine deeds"
      },
      {
        "text": "Skanda Purana",
        "reference": "Details about her children and consortship with Shiva"
      },
      {
        "text": "Devi Bhagavata Purana",
        "reference": "Aspects of her as the Supreme Mother (Mahadevi)"
      }
    ],
    "philosophicalSignificance": {
      "description": "Maa Parvati is the embodiment of Shakti – divine feminine energy that animates the universe. She balances Shiva’s detached stillness with dynamic nurturing energy. She represents the path of devotion (Bhakti) and austerity (Tapas).",
      "relationToOtherTridevi": "She is the aspect of Power and Destruction in the Tridevi, alongside Lakshmi (Wealth) and Saraswati (Wisdom)."
    },
    "worshipPractices": {
      "idealFor": [
        "Married women seeking blessings for their families",
        "Spiritual aspirants practicing penance or devotion",
        "Couples seeking harmony and fertility",
        "Anyone invoking inner strength and balance"
      ],
      "rituals": [
        "Offering red flowers, sindoor (vermilion), and fruits",
        "Fasting and prayers during Teej and Navratri",
        "Recitation of Parvati stotras and hymns",
        "Worship as Annapurna for food and nourishment blessings"
      ]
    },
    "famousTemples": [
      {
        "id": "meenakshi-amman",
        "name": "Meenakshi Amman Temple",
        "location": "Madurai, Tamil Nadu",
        "significance": "Major temple dedicated to Meenakshi (Parvati)."
      },
      {
        "id": "kamakhya-parvati",
        "name": "Kamakhya Temple",
        "location": "Assam, India",
        "significance": "Shakti Peetha also associated with Parvati's forms."
      },
      {
        "id": "mangaladevi-kerala",
        "name": "Mangaladevi Temple",
        "location": "Kerala, India",
        "significance": "Temple dedicated to Mangaladevi (a form of Parvati)."
      },
      {
        "id": "annapurna-varanasi",
        "name": "Annapurna Devi Mandir",
        "location": "Varanasi, Uttar Pradesh",
        "significance": "Temple for Annapurna, Parvati as goddess of food."
      }
    ],
    "iconographyNote": "She is often shown with a serene face, gentle eyes, and in union with Shiva. Her forms range from peaceful (Gauri) to fierce (Durga, Kali) depending on the need of the cosmic balance.",
    "modernCulturalSignificance": "Symbol of divine motherhood and marital devotion in Indian culture. Worshipped widely across India and Nepal in both peaceful and warrior forms.",
    "associatedConcept": "Adi Shakti – The primal energy and universal mother from whom all goddesses and creation originate."
  }
};

// Detailed Kali JSON data from user
const kaliDetailedData = {
  "goddess": {
    "name": "Maa Kali",
    "alternateNames": ["Kalika", "Mahakali", "Chandika", "Kalaratri", "Bhadrakali"],
    "meaningOfName": "Kali derives from 'Kala' meaning time or black, symbolizing destruction, transformation, and the eternal force of time.",
    "depiction": {
      "complexion": "Dark blue or black, representing the vast, infinite, and timeless nature of the universe.",
      "vehicles": ["Tiger", "Lion"],
      "seatedOn": "Lord Shiva's body (symbolizing destruction and regeneration)",
      "numberOfArms": "4 to 10 (in various forms)",
      "holds": [
        "Dagger or Sword (representing destruction of ego and ignorance)",
        "Severed Head (representing victory over ego and the cycle of birth and death)",
        "Trident (symbol of the three gunas: Sattva, Rajas, Tamas)",
        "Mala (rosary of skulls symbolizing the continual cycle of life and death)"
      ],
      "symbolism": {
        "Darkness": "Represents the dissolution of ignorance, ignorance being the cause of all suffering in the material world.",
        "Sword": "Destruction of the ego and the unreal.",
        "SeveredHead": "The cutting off of attachment and illusion.",
        "Trident": "Representation of her control over creation, preservation, and destruction.",
        "SkullNecklace": "The reminder that time and death are inevitable."
      }
    },
    "abode": "Kailash or the cremation grounds (symbolizing destruction and regeneration)",
    "consort": "Lord Shiva (symbolizing the balance of destructive and creative forces)",
    "children": ["None (though considered a divine aspect of Adi Shakti)"],
    "mantra": "ॐ क्लीं काली महाकाली महाक्रूरी महाक्रत्ये महाशक्ति महाक्रिया महाश्वे महापापं महादेवि महा कालिका महाक्रूरा महाक्राच करज्यां नमः। (Om Kleem Kali Mahakali Mahakruri Mahakrtye Mahashakti Mahakriya Mahashve Mahapapam Mahadevi Maha Kalika Mahakrura Mahakrach Karajyam Namah)",
    "festival": {
      "name": "Kali Puja",
      "type": "Major Festival",
      "region": "West Bengal, Assam, Odisha",
      "description": "Kali Puja is celebrated to honor the goddess Kali, particularly in West Bengal and Assam, during Diwali or in the month of Ashvin.",
      "timing": "Celebrated on the new moon night (Amavasya) of the Hindu month Ashvin (October–November)",
      "otherFestivals": [
        "Navratri (Maha Ashtami)",
        "Bhairavi Puja",
        "Chaitra Navratri"
      ]
    },
    "associatedElements": [
      "Destruction",
      "Transformation",
      "Time",
      "Power",
      "Death and Rebirth",
      "Liberation"
    ],
    "scripturalReferences": [
      {
        "text": "Devi Mahatmya (Durga Saptashati)",
        "reference": "Describes Kali’s role in the destruction of the demon Raktabija and her transformation into the ferocious form of the goddess Durga.",
        "verses": ["Chapter 10", "Chapters 11–12"]
      },
      {
        "text": "Kali Purana",
        "reference": "Describes the mythology of Kali, her fearsome and transformative nature, and her role in the universe.",
        "verses": ["Kali's role in the cosmic destruction and regeneration."]
      }
    ],
    "philosophicalSignificance": {
      "description": "Maa Kali represents the ultimate force of destruction that is essential for transformation. She destroys the illusion of the material world and empowers devotees to transcend the cycle of birth and death (samsara). She embodies the forces of nature that are violent but necessary for the renewal and regeneration of the cosmos.",
      "relationToOtherTridevi": "Maa Kali is the destroyer in the Tridevi, alongside Lakshmi (wealth) and Parvati (power). Her destructive nature is seen as a necessary force for renewal and balance."
    },
    "worshipPractices": {
      "idealFor": [
        "Those seeking spiritual liberation (Moksha)",
        "Those looking to overcome fear and ego",
        "People going through personal or spiritual transformation",
        "Seekers of strength and power"
      ],
      "rituals": [
        "Offerings of red flowers, sweets, and raw foods (symbolizing her fierce nature)",
        "Reciting Kali Stotras and mantras",
        "Observing fasts during Kali Puja and Navratri",
        "Praying at night, as Kali is associated with the darkness and night-time",
        "Worshipping with tantric rituals for deep spiritual empowerment"
      ]
    },
    "famousTemples": [
      {
        "id": "kali-ghat-kolkata",
        "name": "Kali Ghat Temple",
        "location": "Kolkata, West Bengal, India",
        "significance": "One of the 51 Shakti Peethas, dedicated to Maa Kali."
      },
      {
        "id": "dakshineswar-kali-kolkata",
        "name": "Dakshineswar Kali Temple",
        "location": "Kolkata, West Bengal, India",
        "significance": "Famous Kali temple associated with Sri Ramakrishna Paramahamsa."
      },
      {
        "id": "kalighat-temple-kolkata-duplicate",
        "name": "Kalighat Temple",
        "location": "Kolkata, West Bengal, India",
        "significance": "A major pilgrimage site for Kali devotees."
      },
      {
        "id": "kali-vaikom-kerala",
        "name": "Kali Temple of Vaikom",
        "location": "Kerala, India",
        "significance": "Important Kali temple in Kerala."
      }
    ],
    "iconographyNote": "Kali is depicted as dark-skinned or black, standing or dancing on the body of Shiva (her consort), often with a wild and fearsome expression. She is often shown with her tongue out, signifying the destruction of the ego and material attachments.",
    "modernCulturalSignificance": "Kali is seen as the embodiment of strength, transformation, and the feminine power of destruction. She is revered in many parts of India and beyond, especially in tantric traditions and spiritual communities seeking to break free from worldly attachments.",
    "associatedConcept": "Shakti – the primordial energy that drives the cosmos. Kali is a manifestation of this ultimate force, representing the destruction of the old and the birth of the new."
  }
};


// Navadurga Forms Data
const navadurgaForms: NavForm[] = durgaDetailedData.avatarsForms.find(f => f.name === "Navadurga")?.forms?.map(formName => {
    const base = { name: formName, story: "", powers: "", iconography: "", mantra: "", imageHint: "" };
    switch (formName) {
        case "Shailaputri":
            base.story = "Daughter of the Himalayas, embodying patience and strength.";
            base.powers = "Bestows fortune, health, and stability.";
            base.iconography = "Rides Nandi (bull), trident in right hand, lotus in left.";
            base.mantra = "Om Devi Shailaputryai Namah";
            base.imageHint = "Shailputri goddess Himalayas";
            break;
        case "Brahmacharini":
            base.story = "One who practices devout austerity and celibacy to attain Brahma.";
            base.powers = "Grants virtue, spiritual knowledge, and control over senses.";
            base.iconography = "Walks barefoot, holds a Japa mala (rosary) and Kamandalu (water pot).";
            base.mantra = "Om Devi Brahmacharinyai Namah";
            base.imageHint = "Brahmacharini goddess ascetic";
            break;
        case "Chandraghanta":
            base.story = "Wears the crescent moon on her head, symbolizing peace and prosperity.";
            base.powers = "Destroys evil spirits, brings courage, and ensures well-being.";
            base.iconography = "Golden complexion, rides a tiger or lion, ten hands with various weapons and a bell (ghanta).";
            base.mantra = "Om Devi Chandraghantayai Namah";
            base.imageHint = "Chandraghanta goddess moon bell";
            break;
        case "Kushmanda":
            base.story = "Creator of the cosmic egg (\"Anda\") with her divine smile.";
            base.powers = "Source of all energy and light, bestows health and power.";
            base.iconography = "Rides a lioness, eight arms holding discus, mace, lotus, bow, arrow, rosary, nectar pot, and sometimes a blood-filled pot.";
            base.mantra = "Om Devi Kushmandayai Namah";
            base.imageHint = "Kushmanda goddess cosmic egg";
            break;
        case "Skandamata":
            base.story = "Mother of Lord Skanda (Kartikeya), the commander of the gods' army.";
            base.powers = "Blesses with progeny, wisdom, and maternal love.";
            base.iconography = "Rides a lion, holds baby Skanda on her lap, four arms.";
            base.mantra = "Om Devi Skandamatayai Namah";
            base.imageHint = "Skandamata goddess Kartikeya";
            break;
        case "Katyayani":
            base.story = "Born to Sage Katyayana to destroy Mahishasura.";
            base.powers = "Grants boons, removes obstacles, and ensures victory over enemies.";
            base.iconography = "Rides a lion, four arms, holds sword, shield, lotus, and bestows blessings.";
            base.mantra = "Om Devi Katyayanyai Namah";
            base.imageHint = "Katyayani goddess warrior";
            break;
        case "Kalaratri":
            base.story = "The fierce, dark night aspect, representing destruction of ignorance and fear.";
            base.powers = "Destroys negativity, ignorance, and fear, providing protection.";
            base.iconography = "Dark complexion, rides a donkey, disheveled hair, wields a scimitar and vajra (thunderbolt).";
            base.mantra = "Om Devi Kalaratryai Namah";
            base.imageHint = "Kalaratri goddess dark fierce";
            break;
        case "Mahagauri":
            base.story = "Extremely fair and radiant, purified after intense tapasya.";
            base.powers = "Purifies sins, bestows peace, prosperity, and fulfills desires.";
            base.iconography = "Rides a bull, four arms, holds trident, damaru (drum), and bestows blessings.";
            base.mantra = "Om Devi Mahagauryai Namah";
            base.imageHint = "Mahagauri goddess white serene";
            break;
        case "Siddhidatri":
            base.story = "Giver of all siddhis (supernatural perfections) and spiritual accomplishments.";
            base.powers = "Bestows all 26 types of siddhis and moksha (liberation).";
            base.iconography = "Seated on a lotus, four arms holding mace, discus, conch, and lotus.";
            base.mantra = "Om Devi Siddhidatryai Namah";
            base.imageHint = "Siddhidatri goddess powers";
            break;
        default:
            break;
    }
    return base;
}) || [];


// Ashta Lakshmi Forms Data
const ashtaLakshmiForms: AshtaLakshmiForm[] = lakshmiDetailedData.avatarsForms.find(f => f.name === "Ashtalakshmi")?.forms?.map(formName => {
    const base = { name: formName, description: "", blessings: "", imageHint: "" };
    switch (formName) {
        case "Adi Lakshmi (Primordial Wealth)":
            base.name = "Adi Lakshmi";
            base.description = "The primal mother goddess, the original form of Lakshmi.";
            base.blessings = "Source of all existence, spiritual wealth.";
            base.imageHint = "Adi Lakshmi form primordial";
            break;
        case "Dhana Lakshmi (Monetary Wealth)":
            base.name = "Dhana Lakshmi";
            base.description = "Goddess of wealth in money and gold.";
            base.blessings = "Monetary prosperity and financial stability.";
            base.imageHint = "Dhana Lakshmi form coins";
            break;
        case "Dhanya Lakshmi (Agricultural Wealth)":
            base.name = "Dhanya Lakshmi";
            base.description = "Goddess of agricultural wealth and grain.";
            base.blessings = "Abundance of food and nourishment.";
            base.imageHint = "Dhanya Lakshmi form grains";
            break;
        case "Gaja Lakshmi (Animal & Royal Wealth)":
            base.name = "Gaja Lakshmi";
            base.description = "Goddess of royal power and animal wealth, often depicted with elephants.";
            base.blessings = "Power, authority, and prosperity from livestock.";
            base.imageHint = "Gaja Lakshmi form elephants";
            break;
        case "Santana Lakshmi (Progeny)":
            base.name = "Santana Lakshmi";
            base.description = "Goddess of progeny and family welfare.";
            base.blessings = "Healthy children and family happiness.";
            base.imageHint = "Santana Lakshmi form children";
            break;
        case "Veera Lakshmi (Courage & Valor)":
            base.name = "Veera Lakshmi";
            base.description = "Goddess of courage, strength, and valor.";
            base.blessings = "Victory over obstacles and enemies, inner strength.";
            base.imageHint = "Veera Lakshmi form courage";
            break;
        case "Vidya Lakshmi (Knowledge)":
            base.name = "Vidya Lakshmi";
            base.description = "Goddess of knowledge, arts, and wisdom.";
            base.blessings = "Success in education and artistic pursuits.";
            base.imageHint = "Vidya Lakshmi form books";
            break;
        case "Vijaya Lakshmi (Victory)":
            base.name = "Vijaya Lakshmi";
            base.description = "Goddess of victory in all endeavors.";
            base.blessings = "Success and triumph in all aspects of life.";
            base.imageHint = "Vijaya Lakshmi form victory";
            break;
        default:
            const simpleName = formName.split(" (")[0];
            base.name = simpleName;
            base.description = `Form of Lakshmi representing ${simpleName.replace(" Lakshmi", "")}.`;
            base.blessings = `Blessings related to ${simpleName.replace(" Lakshmi", "")}.`;
            base.imageHint = `${simpleName.toLowerCase().replace(/\s+/g, "-")} form`;
            break;
    }
    return base;
}) || [];


// Saraswati Aspects Data
const saraswatiAspectsForms: SaraswatiAspect[] = [
  { title: 'Embodiment of Vedas', description: 'She is considered the mother of the Vedas and all sacred scriptures, representing divine knowledge.', imageHint: 'Vedas scriptures scroll text' },
  { title: 'Patron of Arts and Music', description: 'All forms of art, music, dance, and creativity flow from her grace, inspiring artists and scholars.', imageHint: 'music instruments art palette' },
  { title: 'Symbol of Purity and Wisdom', description: 'Her white attire and lotus seat signify purity, transcendence, and supreme wisdom.', imageHint: 'white lotus swan pure' },
  { title: 'Power of Speech (Vak Devi)', description: 'She governs speech, ensuring clarity, truthfulness, and eloquence.', imageHint: 'eloquent speech soundwave mouth' },
];
const saraswatiVandana = 'Ya Kundendu Tushara Hara Dhavala Ya Shubhra Vastravrita,\nYa Veena Varadanda Manditakara Ya Shveta Padmasana.\nYa Brahmachyuta Shankara Prabhritibhir Devaih Sada Vandita,\nSa Mam Patu Saraswati Bhagavatee Nihshesha Jadyapaha.';

// Prepare Kali's mantra for trideviData
const kaliMahavidyaEntryForTridevi = mahavidyaDataInternal.find(m => m.slug === 'kali');
const kaliTopLevelMantra = kaliMahavidyaEntryForTridevi?.mantras[0] || kaliDetailedData.goddess.mantra.split('(')[0].trim();


// Export TrideviData
export const trideviData: TrideviDetails[] = [
  (() => {
    const durgaBase = getMahadeviByName("Maa Durga")!;
    return {
      slug: 'durga',
      name: durgaDetailedData.name,
      aspect: durgaBase.aspect,
      attributes: durgaDetailedData.primaryAttributes.affiliation,
      description: durgaBase.description,
      consort: durgaBase.consort,
      symbolism: durgaBase.symbolism,
      notable_forms: durgaDetailedData.avatarsForms.map(f => f.name),
      festivals: durgaDetailedData.festivals.map(f => f.name),

      introduction: 'Maa Durga, a principal form of Adi Shakti, embodies divine feminine energy. She is the fierce protector who vanquishes evil and safeguards righteousness. Her worship brings courage, strength, and victory over adversities.',
      iconographyDetails: `${durgaDetailedData.iconography.posture}. Holds weapons like ${durgaDetailedData.iconography.commonWeapons.join(', ')}.`,
      mantras: durgaDetailedData.mantrasAndStotras.mantras.map(m => m.name),
      imageHint: durgaBase.imageHint,
      imageUrl: durgaBase.imageUrl,

      alternativeNames: durgaDetailedData.alternativeNames,
      primaryAttributes: durgaDetailedData.primaryAttributes,
      originsAndMythology: durgaDetailedData.originsAndMythology,
      detailedIconography: durgaDetailedData.iconography,
      avatarsForms: durgaDetailedData.avatarsForms,
      detailedSymbolism: durgaDetailedData.symbolism,
      detailedFestivals: durgaDetailedData.festivals.map(f => ({...f, type: f.type || "Major Festival", time: f.time || "Varies", significance: f.significance || "", description: f.description || ""})),
      detailedMantrasAndStotras: durgaDetailedData.mantrasAndStotras,
      majorTemples: durgaDetailedData.temples.map((temple, index) => ({ ...temple, id: temple.id || `durga-temple-${index}` })),
      shaktiPeethasInfo: durgaDetailedData.shaktiPeethasInfo,
      philosophicalInsights: durgaDetailedData.philosophicalInsights,
      culturalInfluence: durgaDetailedData.culturalInfluence,
      relatedDeities: durgaDetailedData.relatedDeities,
      associatedAnimals: durgaDetailedData.associatedAnimals,
      modernRelevance: durgaDetailedData.modernRelevance,
      externalLinks: durgaDetailedData.externalLinks,
      navadurga: navadurgaForms,
    };
  })(),
  (() => {
    const lakshmiBase = getMahadeviByName("Maa Lakshmi")!;
    return {
      slug: 'lakshmi',
      name: lakshmiDetailedData.name,
      aspect: lakshmiBase.aspect,
      attributes: lakshmiDetailedData.primaryAttributes.affiliation,
      description: lakshmiBase.description,
      consort: lakshmiDetailedData.originsAndMythology.eternalConsort || lakshmiBase.consort,
      symbolism: lakshmiBase.symbolism,
      notable_forms: lakshmiDetailedData.avatarsForms.map(f => f.name),
      festivals: lakshmiDetailedData.festivals.map(f => f.name),

      introduction: 'Maa Lakshmi is the Hindu goddess of wealth, fortune, power, beauty, fertility, and prosperity. She is the consort and active energy of Lord Vishnu, bestowing both material and spiritual abundance.',
      iconographyDetails: `${lakshmiDetailedData.iconography.posture}. Holds: ${lakshmiDetailedData.iconography.commonAttributes.join(', ')}.`,
      mantras: lakshmiDetailedData.mantrasAndStotras.mantras.map(m => m.name),
      imageHint: lakshmiBase.imageHint,
      imageUrl: lakshmiBase.imageUrl,

      alternativeNames: lakshmiDetailedData.alternativeNames,
      primaryAttributes: lakshmiDetailedData.primaryAttributes,
      originsAndMythology: lakshmiDetailedData.originsAndMythology,
      detailedIconography: {
        ...lakshmiDetailedData.iconography,
        commonWeapons: lakshmiDetailedData.iconography.commonAttributes,
      },
      avatarsForms: lakshmiDetailedData.avatarsForms.map(form => ({
        name: form.name,
        description: form.description,
        forms: form.forms
      })),
      detailedSymbolism: lakshmiDetailedData.symbolism,
      detailedFestivals: lakshmiDetailedData.festivals.map(f => ({...f, type: f.type || "Major Festival", time: f.time || "Varies", significance: f.significance || "", description: f.description || ""})),
      detailedMantrasAndStotras: lakshmiDetailedData.mantrasAndStotras,
      majorTemples: lakshmiDetailedData.temples.map((temple, index) => ({ ...temple, id: temple.id || `lakshmi-temple-${index}` })),
      shaktiPeethasInfo: {
        description: lakshmiDetailedData.shaktiPeethasInfo.description,
        importantOnes: lakshmiDetailedData.shaktiPeethasInfo.importantOnes || lakshmiDetailedData.shaktiPeethasInfo.notableSites || [],
        total: lakshmiDetailedData.shaktiPeethasInfo.total,
        notableSites: lakshmiDetailedData.shaktiPeethasInfo.notableSites || lakshmiDetailedData.shaktiPeethasInfo.importantOnes || [],
      },
      philosophicalInsights: lakshmiDetailedData.philosophicalInsights,
      culturalInfluence: {
        ...lakshmiDetailedData.culturalInfluence,
        literature: lakshmiDetailedData.culturalInfluence.literature,
        danceForms: lakshmiDetailedData.culturalInfluence.danceForms || lakshmiDetailedData.culturalInfluence.classicalDanceDepictions || [],
        artAndSculpture: lakshmiDetailedData.culturalInfluence.artAndSculpture,
        moviesAndMedia: lakshmiDetailedData.culturalInfluence.moviesAndMedia || lakshmiDetailedData.culturalInfluence.mediaReferences || [],
      },
      relatedDeities: lakshmiDetailedData.relatedDeities,
      associatedAnimals: lakshmiDetailedData.associatedAnimals,
      modernRelevance: {
        ...lakshmiDetailedData.modernRelevance,
        spiritualBalance: lakshmiDetailedData.modernRelevance.spiritualBalance || "Represents balance between material and spiritual prosperity.",
        festivalsAndUnity: lakshmiDetailedData.modernRelevance.festivalsAndUnity || "Diwali and other festivals unite communities in her worship."
      },
      externalLinks: lakshmiDetailedData.externalLinks,
      ashtaLakshmi: ashtaLakshmiForms,
    };
  })(),
  (() => {
    const saraswatiBase = getMahadeviByName("Maa Saraswati")!;
    const newData = saraswatiDetailedData.goddess;

    const scripturalRefsTexts = newData.scripturalReferences.map(ref => `${ref.text} (${ref.reference}${ref.verses ? `, Verses: ${ref.verses.join(', ')}` : ''})`);
    const famousTemplesData = newData.famousTemples.map((t, index) => ({ id: t.id || `saraswati-temple-${index}`, name: t.name, location: t.location, significance: t.significance || `A prominent temple dedicated to ${newData.name}, ${t.name} located in ${t.location}.` }));
    const mainFestival = newData.festival;

    return {
      slug: 'saraswati',
      name: newData.name,
      aspect: saraswatiBase.aspect,
      attributes: newData.associatedElements,
      description: saraswatiBase.description,
      consort: newData.consort,
      symbolism: saraswatiBase.symbolism,
      notable_forms: saraswatiBase.notable_forms,
      festivals: [mainFestival.name, ...(mainFestival.otherFestivals || [])],

      introduction: `${newData.meaningOfName}. ${newData.philosophicalSignificance.description}`,
      iconographyDetails: newData.iconographyNote,
      mantras: [newData.mantra.split('(')[0].trim()],
      imageHint: saraswatiBase.imageHint,
      imageUrl: saraswatiBase.imageUrl,

      saraswatiAspects: saraswatiAspectsForms,
      vandana: saraswatiVandana,

      alternativeNames: newData.alternateNames,
      primaryAttributes: {
        gender: "Female",
        nature: "Goddess of Knowledge, Wisdom, Arts, Music, Learning, Creativity, Speech",
        energyType: "Shakti (Divine Knowledge)",
        affiliation: ["Hinduism", "Shaktism"],
        planet: "Mercury"
      },
      originsAndMythology: {
        abode: newData.abode,
        textsMentioningHer: scripturalRefsTexts,
        meaningOfName: newData.meaningOfName,
        originStory: `${newData.name} is often considered self-manifested or born from Brahma's mind. She is the eternal flow of wisdom.`,
        symbolicVictory: "Victory over ignorance and inertia.",
        eternalConsort: newData.consort,
        symbolicRole: "Governs all forms of knowledge and creative expression."

      },
      detailedIconography: {
        skinColor: [newData.depiction.complexion],
        numberOfArms: newData.depiction.numberOfArms,
        mount: newData.depiction.vehicles.join(', '),
        commonWeapons: newData.depiction.holds,
        posture: newData.depiction.seatedOn,
        expressions: ["Serene", "Peaceful", "Illuminated"]
      },
      detailedSymbolism: newData.depiction.symbolism,
      detailedFestivals: [{
        name: mainFestival.name,
        type: mainFestival.type || "Major Festival",
        time: mainFestival.timing,
        description: mainFestival.description,
        significance: mainFestival.description,
        region: mainFestival.region || "India-wide",
      }, ... (mainFestival.otherFestivals || []).map(f => ({name:f, type: "Associated", time: "Varies", significance: `Associated with ${newData.name}`}))],
      detailedMantrasAndStotras: {
        mantras: [{
          name: "Saraswati Moola Mantra",
          sanskrit: newData.mantra,
          meaning: "Salutations to Maa Saraswati, the bestower of wisdom.",
          description: "Primary mantra to invoke Maa Saraswati's blessings for knowledge and arts."
        }],
        stotras: []
      },
      majorTemples: famousTemplesData,
      philosophicalInsights: {
        divineFeminine: newData.philosophicalSignificance.description,
        relationToTridevi: newData.philosophicalSignificance.relationToOtherTridevi,
        associatedConcept: newData.associatedConcept,
        innerBattle: "Represents the conquest of ignorance through knowledge.",
        liberation: "Knowledge (Jnana) as a path to liberation (Moksha)."
      },
      culturalInfluence: {
        literature: scripturalRefsTexts,
        danceForms: ["Various classical dances depict Saraswati, especially during Vasant Panchami."],
        artAndSculpture: "Widely depicted in paintings, sculptures, often in educational institutions. Her depiction includes pure white attire and serene expression.",
        moviesAndMedia: ["Devotional songs dedicated to Saraswati", "Educational programs often invoke her blessings."],
        worshipPractices: newData.worshipPractices.rituals.join('; ')
      },
      relatedDeities: ["Brahma (associated consort in some traditions)", "Lakshmi (Tridevi)", "Parvati (Tridevi)"],
      associatedAnimals: newData.depiction.vehicles,
      modernRelevance: {
        womenEmpowerment: "Inspires pursuit of knowledge and artistic expression among all, particularly women.",
        spiritualBalance: "Emphasizes that true wisdom leads to inner peace and clarity.",
        festivalsAndUnity: `Vasant Panchami is a significant festival uniting people in the celebration of learning. ${newData.modernCulturalSignificance}`,
        educationFocus: `Ideal for: ${newData.worshipPractices.idealFor.join(', ')}.`,
        worshipSummary: `Key rituals include: ${newData.worshipPractices.rituals.join('; ')}.`,
        modernSignificance: newData.modernCulturalSignificance,
      },
      externalLinks: {
        wikipedia: "https://en.wikipedia.org/wiki/Saraswati",
      },
    };
  })(),
  (() => {
    const parvatiBase = getMahadeviByName("Maa Parvati")!;
    const newData = parvatiDetailedData.goddess;
    const scripturalRefsTexts = newData.scripturalReferences.map(ref => `${ref.text} (${ref.reference})`);
    const famousTemplesData = newData.famousTemples.map((t, index) => ({ id: t.id || `parvati-temple-${index}`, name: t.name, location: t.location, significance: t.significance || `A prominent temple dedicated to ${newData.name}, ${t.name} located in ${t.location}.` }));
    const mainFestivalParvati = newData.festival;

    let numberOfArmsParvati = 2;
    if (typeof newData.depiction.numberOfArms === 'number') {
      numberOfArmsParvati = newData.depiction.numberOfArms;
    } else if (typeof newData.depiction.numberOfArms === 'string') {
      const parsedArms = parseInt(newData.depiction.numberOfArms.split(' ')[0], 10);
      if (!isNaN(parsedArms)) {
        numberOfArmsParvati = parsedArms;
      }
    }

    return {
      slug: 'parvati',
      name: newData.name,
      aspect: parvatiBase.aspect,
      attributes: newData.associatedElements,
      description: parvatiBase.description,
      consort: newData.consort,
      symbolism: parvatiBase.symbolism,
      notable_forms: parvatiBase.notable_forms,
      festivals: [mainFestivalParvati.name, ...mainFestivalParvati.otherFestivals],

      introduction: `${newData.meaningOfName}. ${newData.philosophicalSignificance.description}`,
      iconographyDetails: newData.iconographyNote,
      mantras: [newData.mantra.split('(')[0].trim()],
      imageHint: parvatiBase.imageHint,
      imageUrl: parvatiBase.imageUrl,


      alternativeNames: newData.alternateNames,
      primaryAttributes: {
        gender: "Female",
        nature: "Mother Goddess, Consort of Shiva, Embodiment of Love and Devotion",
        energyType: "Shakti (Nurturing and Transformative Energy)",
        affiliation: ["Shaktism", "Shaivism"],
        planet: "Moon (often associated)"
      },
      originsAndMythology: {
        meaningOfName: newData.meaningOfName,
        abode: newData.abode,
        children: newData.children.join(', '),
        textsMentioningHer: scripturalRefsTexts,
        originStory: `Born as the daughter of Himavan, king of the Himalayas. She undertook severe austerities to win Lord Shiva as her husband.`,
        symbolicVictory: "Her penance symbolizes determination and the power of devotion.",
        eternalConsort: newData.consort,
        symbolicRole: "Represents divine feminine power, fertility, love, and devotion."
      },
      detailedIconography: {
        skinColor: [newData.depiction.complexion],
        numberOfArms: numberOfArmsParvati,
        mount: newData.depiction.vehicles.join(', '),
        commonWeapons: newData.depiction.holds,
        posture: newData.depiction.seatedOn,
        expressions: ["Serene", "Loving", "Determined"]
      },
      detailedSymbolism: newData.depiction.symbolism,
      detailedFestivals: [
        { name: mainFestivalParvati.name, type: mainFestivalParvati.type || "Major Festival", time: mainFestivalParvati.timing || "Varies", description: mainFestivalParvati.description, significance: mainFestivalParvati.description || "", region: mainFestivalParvati.region || "India-wide" },
        ...mainFestivalParvati.otherFestivals.map(f => ({ name: f, type: "Regional/Specific", time: "Varies", significance: `Important festival dedicated to Maa Parvati and her forms.`}))
      ],
      detailedMantrasAndStotras: {
        mantras: [{
          name: "Parvati Moola Mantra",
          sanskrit: newData.mantra,
          meaning: "Salutations to Maa Parvati, the daughter of the mountains.",
          description: "Primary mantra to invoke Maa Parvati's blessings for love, devotion, and strength."
        }],
        stotras: []
      },
      majorTemples: famousTemplesData,
      philosophicalInsights: {
        divineFeminine: newData.philosophicalSignificance.description,
        relationToTridevi: newData.philosophicalSignificance.relationToOtherTridevi,
        associatedConcept: newData.associatedConcept,
        innerBattle: "Symbolizes the power of devotion and tapasya (austerity) to overcome obstacles and achieve divine union.",
        liberation: "Path of Bhakti (devotion) and Dharma as means to spiritual growth."
      },
      culturalInfluence: {
        literature: scripturalRefsTexts,
        danceForms: ["Many classical dance forms depict stories of Parvati and Shiva."],
        artAndSculpture: "Widely depicted in temples and art, often with Shiva and her children, Ganesha and Kartikeya.",
        moviesAndMedia: ["Numerous mythological films and TV series feature Parvati's stories."],
        worshipPractices: newData.worshipPractices.rituals.join('; ')
      },
      relatedDeities: ["Shiva (Consort)", "Ganesha (Son)", "Kartikeya (Son)", "Durga (Form)", "Kali (Form)"],
      associatedAnimals: newData.depiction.vehicles,
      modernRelevance: {
        womenEmpowerment: "Represents feminine strength, devotion, and the power of transformation through perseverance.",
        spiritualBalance: "Embodies the balance of asceticism and worldly duties, divine love, and fierce protection.",
        festivalsAndUnity: `Festivals like Navratri and Teej celebrate her various aspects, fostering community and devotion. ${newData.modernCulturalSignificance}`,
        worshipSummary: `Ideal for: ${newData.worshipPractices.idealFor.join(', ')}. Key rituals include: ${newData.worshipPractices.rituals.join('; ')}.`,
        modernSignificance: newData.modernCulturalSignificance
      },
      externalLinks: {
        wikipedia: "https://en.wikipedia.org/wiki/Parvati",
      },
    };
  })(),
  (() => {
    const kaliBase = getMahadeviByName("Maa Kali")!;
    const newData = kaliDetailedData.goddess;

    let numberOfArmsKali = 4;
    if (typeof newData.depiction.numberOfArms === 'number') {
      numberOfArmsKali = newData.depiction.numberOfArms;
    } else if (typeof newData.depiction.numberOfArms === 'string') {
      const parsedArms = parseInt(newData.depiction.numberOfArms.split(' ')[0], 10);
      if (!isNaN(parsedArms)) {
        numberOfArmsKali = parsedArms;
      }
    }

    const famousTemplesDataKali = newData.famousTemples
    .filter((temple, index, self) =>
        index === self.findIndex((t) => t.id ? t.id === temple.id : (t.name === temple.name && t.location === temple.location))
    )
    .map((t, index) => ({
        id: t.id || `kali-temple-${index}`,
        name: t.name,
        location: t.location,
        significance: t.significance || `A prominent temple for ${t.name.includes("Kali") ? "" : "Maa Kali as "}${t.name} in ${t.location}.`
    }));

    const mainFestivalKali = newData.festival;


    return {
      slug: 'kali',
      name: newData.name,
      aspect: kaliBase.aspect,
      attributes: newData.associatedElements,
      description: kaliBase.description,
      consort: newData.consort,
      symbolism: kaliBase.symbolism,
      notable_forms: kaliBase.notable_forms,
      festivals: [mainFestivalKali.name, ...mainFestivalKali.otherFestivals].map(f => typeof f === 'string' ? f : (f as {name: string}).name),

      introduction: 'Maa Kali, the formidable Goddess of Time, Destruction, and Transformation, is a fierce aspect of Adi Shakti. She eradicates ignorance and ego, paving the path to liberation and ultimate truth.',
      iconographyDetails: newData.iconographyNote,
      mantras: [kaliTopLevelMantra],
      imageHint: kaliBase.imageHint,
      imageUrl: kaliBase.imageUrl,


      alternativeNames: newData.alternateNames,
      primaryAttributes: {
        gender: "Female",
        nature: "Goddess of Time, Destruction, Transformation",
        energyType: "Shakti (Primordial Cosmic Energy)",
        affiliation: ["Hinduism", "Shaktism", "Tantra"],
        planet: "Saturn (Shani)"
      },
      originsAndMythology: {
        meaningOfName: newData.meaningOfName,
        abode: newData.abode,
        textsMentioningHer: newData.scripturalReferences.map(ref => `${ref.text}: ${ref.reference} (Verses: ${ref.verses ? ref.verses.join(', ') : 'N/A'})`),
        children: newData.children?.toString(),
        originStory: `Emerged from the brow of Goddess Durga during her battle with demons, or as a primordial force of time and dissolution.`,
        symbolicVictory: "Victory over ego, illusion, and the limitations of time.",
        eternalConsort: newData.consort,
        symbolicRole: "Represents the transformative power of destruction, leading to renewal and liberation."
      },
      detailedIconography: {
        skinColor: [newData.depiction.complexion],
        numberOfArms: numberOfArmsKali,
        mount: newData.depiction.vehicles.join(' / '),
        commonWeapons: newData.depiction.holds,
        posture: newData.depiction.seatedOn,
        expressions: ["Fierce", "Terrifying", "Transformative"]
      },
      detailedSymbolism: newData.depiction.symbolism,
      detailedFestivals: [
        {
            name: mainFestivalKali.name,
            type: mainFestivalKali.type || "Major Festival",
            time: mainFestivalKali.timing,
            description: mainFestivalKali.description,
            significance: mainFestivalKali.description || "",
            region: mainFestivalKali.region || "India-wide",
        },
        ...mainFestivalKali.otherFestivals.map(fName => ({
            name: typeof fName === 'string' ? fName : (fName as {name: string}).name,
            type: "Associated Festival",
            time: "Varies",
            significance: `An important festival associated with Maa Kali.`
        }))
      ],
      detailedMantrasAndStotras: {
          mantras: [{
              name: "Kali Moola Mantra (Full)",
              sanskrit: kaliDetailedData.goddess.mantra,
              meaning: "Salutations to Maa Kali in her multifaceted glory...",
              description: "A comprehensive mantra invoking Maa Kali's fierce energy for protection, transformation, and spiritual liberation."
          },
          {
            name: "Kali Beej Mantra",
            sanskrit: "ॐ क्रीं कालिकायै नमः",
            meaning: "Salutations to the fierce Goddess Kali.",
            description: "A potent seed mantra for invoking Kali's energy."
          }
        ],
          stotras: []
      },
      majorTemples: famousTemplesDataKali,
      philosophicalInsights: {
          divineFeminine: newData.philosophicalSignificance.description,
          relationToTridevi: newData.philosophicalSignificance.relationToOtherTridevi,
          associatedConcept: newData.associatedConcept,
          innerBattle: "Represents the confrontation and annihilation of the ego and deep-seated negativities.",
          liberation: "Offers liberation (Moksha) through the transcendence of time and illusion."
      },
      culturalInfluence: {
          literature: newData.scripturalReferences.map(ref => ref.text),
          danceForms: ["Tandava (Shiva's dance, Kali's energy is complementary)", "Specific Tantric dances"],
          artAndSculpture: "Iconic depictions in various art forms, emphasizing her fierce nature and role in cosmic cycles.",
          moviesAndMedia: ["Films and series portraying Kali's mythology and power."],
          worshipPractices: newData.worshipPractices.rituals.join('; ')
      },
      relatedDeities: ["Shiva (Consort)", "Durga (as an aspect/emergence)", ...kaliBase.notable_forms],
      associatedAnimals: newData.depiction.vehicles,
      modernRelevance: {
          womenEmpowerment: `Symbol of untamed feminine power and the courage to confront darkness. ${newData.modernCulturalSignificance}`,
          spiritualBalance: "Represents the acceptance of destruction as a necessary part of creation and spiritual growth.",
          festivalsAndUnity: `${mainFestivalKali.name} unites devotees in intense worship.`,
          worshipSummary: `Ideal for: ${newData.worshipPractices.idealFor.join(', ')}. Key rituals include: ${newData.worshipPractices.rituals.join('; ')}.`,
          modernSignificance: newData.modernCulturalSignificance,
      },
      externalLinks: {
          wikipedia: "https://en.wikipedia.org/wiki/Kali"
      },
    };
  })(),
];


// Parvati Forms Data
const parvatiBaseForForms = getMahadeviByName("Maa Parvati")!;
export const parvatiFormsData: ParvatiForm[] = parvatiBaseForForms.notable_forms.map(formName => {
  const existingForm = [
    { name: 'Annapurna', description: 'Goddess of food and nourishment, ensuring no one goes hungry.', iconography: 'Holds a jeweled bowl of food and a spoon, symbolizing endless sustenance.', story: 'Famously fed Lord Shiva when he came to Kashi as a beggar, highlighting her role as the provider.', imageHint: 'Annapurna goddess food' },
    { name: 'Kamakhya', description: 'Goddess of desire, creation, and fertility, representing the power of procreation.', iconography: 'Worshipped in the form of a yoni-like stone, symbolizing the womb and creative power.', story: 'Her temple in Assam is a major Shakti Peetha, celebrating the menstruation of the Goddess.', imageHint: 'Kamakhya temple yoni' },
    { name: 'Meenakshi', description: 'The fish-eyed warrior goddess, protector of Madurai.', iconography: 'Depicted with eyes shaped like a fish, holding a parrot, often with a sword.', story: 'Ruled the Pandya kingdom before marrying Lord Sundareswarar (Shiva).', imageHint: 'Meenakshi goddess Madurai' },
    { name: 'Bhavani', description: 'A fierce yet benevolent aspect, embodying strength and the life-giving force.', iconography: 'Often depicted with multiple arms, riding a lion, similar to Durga.', story: 'Worshipped by Shivaji Maharaj, symbolizing righteous power.', imageHint: 'Bhavani goddess fierce' },
  ].find(ef => ef.name === formName);

  if (existingForm) return existingForm;

  let placeholderDesc = `An important form of Maa Parvati, embodying her divine attributes.`;
  let placeholderIconography = `Iconography varies, often reflecting her specific aspect or story.`;
  if(formName === 'Gauri') {
    placeholderDesc = 'The radiant and pure form of Parvati, often worshipped for marital bliss and auspiciousness.';
    placeholderIconography = 'Typically depicted as fair-complexioned, serene, and benevolent.';
  } else if(formName === 'Sati') {
    placeholderDesc = 'Parvati in her previous incarnation as Sati, daughter of Daksha, known for her unwavering devotion to Shiva.';
    placeholderIconography = 'Often depicted in the context of Daksha\'s yagna, symbolizing devotion and sacrifice.';
  } else if(formName === 'Shailaputri') {
    const navadurgaShailaputri = navadurgaForms.find(nf => nf.name === 'Shailaputri');
    if (navadurgaShailaputri) {
      return {
        name: formName,
        description: navadurgaShailaputri.story,
        iconography: navadurgaShailaputri.iconography,
        story: `Daughter of Himavan, the king of the mountains. Her name means 'Daughter of the Mountain'. First among the Navadurgas.`,
        imageHint: `${formName.toLowerCase()} parvati form mountain`
      };
    }
     placeholderDesc = 'Daughter of the Mountain King Himavan, representing stability and strength.';
     placeholderIconography = 'Often depicted riding Nandi, holding a trident and lotus, similar to her Navadurga form.';
  }

  return {
    name: formName,
    description: placeholderDesc,
    iconography: placeholderIconography,
    story: `Details about ${formName} are deeply rooted in Puranic scriptures and local traditions.`,
    imageHint: `${formName.toLowerCase().replace(/\s+/g, '-')} parvati form`
  };
});

// Shakti Peetha Data
export const shaktiPeethaData: ShaktiPeetha[] = [
  {
    id: "kamakhya",
    name: "Kamakhya Shakti Peetha",
    location: "Guwahati, Assam, India",
    bodyPart: "Yoni (womb)",
    shakti: "Kamakhya",
    bhairava: "Umananda",
    significance: "One of the most powerful Shakti Peethas; center of Tantric worship. Celebrated for the Ambubachi Mela.",
    templeType: "Tantric",
    associatedFestival: "Ambubachi Mela",
    imageHint: "Kamakhya Peetha temple"
  },
  {
    id: "kalighat",
    name: "Kalighat Shakti Peetha",
    location: "Kolkata, West Bengal, India",
    bodyPart: "Right toe",
    shakti: "Kalika",
    bhairava: "Nakuleshwar",
    significance: "A key pilgrimage site; the deity is worshipped in fierce form. The name of the city Kolkata is derived from Kalighat.",
    templeType: "Classical",
    associatedFestival: "Kali Puja",
    imageHint: "Kalighat Peetha temple"
  },
  {
    id: "vishalakshi",
    name: "Vishalakshi Shakti Peetha",
    location: "Varanasi, Uttar Pradesh, India",
    bodyPart: "Earrings (Kundal)",
    shakti: "Vishalakshi",
    bhairava: "Kala Bhairava",
    significance: "Situated in the sacred city of Kashi, symbolizing wisdom and spiritual sight.",
    templeType: "Puranic",
    associatedFestival: "Navratri",
    imageHint: "Vishalakshi Peetha Kashi"
  },
  {
    id: "jwalaji",
    name: "Jwalaji Shakti Peetha",
    location: "Kangra, Himachal Pradesh, India",
    bodyPart: "Tongue",
    shakti: "Jwalamukhi",
    bhairava: "Unmatta Bhairava",
    significance: "Eternal flame (Jwala) is worshipped as the divine presence. No idol exists — flame is the deity.",
    templeType: "Elemental (Agni)",
    associatedFestival: "Navratri",
    imageHint: "Jwalaji Peetha flame"
  },
  {
    id: "kanyakumari",
    name: "Kanyakumari Shakti Peetha",
    location: "Kanyakumari, Tamil Nadu, India",
    bodyPart: "Back",
    shakti: "Sharvani",
    bhairava: "Nimish",
    significance: "Southernmost Peetha, associated with purity and spiritual renunciation.",
    templeType: "Seashore",
    associatedFestival: "Chaitra Purnima",
    imageHint: "Kanyakumari Peetha temple"
  },
  {
    id: "taratarini",
    name: "Tara Tarini Shakti Peetha",
    location: "Berhampur, Odisha, India",
    bodyPart: "Breasts",
    shakti: "Tara Tarini",
    bhairava: "Kampa",
    significance: "Symbolizes nourishment and motherhood. Associated with Tantra and Mahavidyas.",
    templeType: "Hill Shrine",
    associatedFestival: "Chaitra Mela",
    imageHint: "TaraTarini Peetha Odisha"
  },
  {
    id: "hinglaj",
    name: "Hinglaj Mata Shakti Peetha",
    location: "Balochistan, Pakistan",
    bodyPart: "Bramharandhra (Top of head)",
    shakti: "Hinglaj Bhavani",
    bhairava: "Bhairava Chandra",
    significance: "One of the oldest Shakti Peethas, venerated by both Hindus and local tribes. Located in a remote desert.",
    templeType: "Cave Shrine",
    associatedFestival: "Hinglaj Yatra",
    imageHint: "Hinglaj Peetha Pakistan"
  },
  {
    id: "chamunda",
    name: "Chamunda Devi Shakti Peetha",
    location: "Chamunda, Himachal Pradesh, India",
    bodyPart: "Hair",
    shakti: "Chamundeshwari",
    bhairava: "Rudra Mahakal",
    significance: "Associated with fierce form of Durga who slayed Chanda and Munda. Important Shakti site in the Himalayas.",
    templeType: "Hill Temple",
    associatedFestival: "Navratri",
    imageHint: "Chamundeshwari Peetha Himachal"
  },
  {
    id: "dakshineswar",
    name: "Dakshineswar Kali Temple (Significance Site)",
    location: "Kolkata, West Bengal, India",
    bodyPart: "Though not traditionally a Shakti Peetha, it holds immense Shakti significance.",
    shakti: "Bhavatarini (Kali)",
    bhairava: "Bhairava (Symbolic)",
    significance: "Closely linked to Sri Ramakrishna’s spiritual realizations. A major center for devotional Shakta worship.",
    templeType: "Modern Classical",
    associatedFestival: "Kali Puja",
    imageHint: "Dakshineswar Kali temple"
  }
];


// Timeline Data
export const timelineData: TimelineEvent[] = [
  {
    title: "Emergence of Adi Shakti",
    era: "Satya Yuga (Primordial Times)",
    description: "Adi Parashakti manifests as the ultimate source of all creation, the unmanifest feminine power from which the cosmos originates. This marks the beginning of creation in the universe.",
    significance: "Establishes the Divine Feminine as the foundational cosmic power, the matrix of all existence, the basis of all energy and creation.",
    manifestation: "Adi Parashakti",
    key_elements: [
      "Cosmic creation",
      "Unmanifest feminine energy",
      "Primordial force of existence"
    ]
  },
  {
    title: "Manifestation as Sita",
    era: "Treta Yuga (Age of Rama)",
    description: "In this era, Adi Shakti incarnates as Sita, consort of Lord Rama. Sita embodies virtues of purity, resilience, and devotion, and plays a pivotal role in the Ramayana.",
    significance: "Demonstrates ideals of dharma, feminine strength, and the trials faced by divine incarnations during the Ramayana. Sita’s journey highlights devotion, loyalty, and the struggle between good and evil.",
    manifestation: "Sita",
    key_elements: [
      "Embodiment of purity and dharma",
      "Resilience in the face of trials",
      "Divine consort of Lord Rama"
    ]
  },
  {
    title: "Incarnations like Draupadi & Subhadra",
    era: "Dvapara Yuga (Age of Krishna)",
    description: "During the Dvapara Yuga, Adi Shakti manifests in forms like Draupadi, whose honor is protected by Krishna, and Subhadra, Krishna's sister and Arjuna's wife. Radha is also considered an essential Shakti.",
    significance: "Plays crucial roles influencing the events of the Mahabharata, highlighting devotion, feminine strength, and divine intervention. Her presence underscores the importance of righteousness (dharma) and divine protection.",
    manifestation: ["Draupadi", "Subhadra", "Radha"],
    key_elements: [
      "Draupadi's honor and Krishna's protection",
      "Radha's eternal love and connection to Krishna",
      "Divine feminine embodiment in the Mahabharata"
    ]
  },
  {
    title: "Compilation of Devi Mahatmyam",
    era: "Kali Yuga (Puranic Age - c. 300-1000 CE)",
    description: "The exploits of Goddess Durga (Mahalakshmi, Mahakali, Mahasaraswati) against demons like Mahishasura and others are codified in the Markandeya Purana. This is the core text of Shaktism.",
    significance: "Becomes a central text for Shaktism, detailing the supreme power and multifaceted nature of the Goddess. The Devi Mahatmyam exemplifies Shakti's power, demonstrating her role in the cosmic battle between good and evil.",
    manifestation: "Durga (Mahalakshmi, Mahakali, Mahasaraswati)",
    key_elements: [
      "Victory over Mahishasura",
      "Devi Mahatmyam as a Shakta scripture",
      "Goddess Durga as the supreme warrior"
    ]
  },
  {
    title: "Rise of Tantric Traditions & Mahavidyas",
    era: "Kali Yuga (Medieval Period - c. 8th-14th CE)",
    description: "Tantric practices focusing on Shakti, Kundalini, and the esoteric worship of the Das Mahavidyas (Ten Wisdom Goddesses) gain prominence among various spiritual schools.",
    significance: "Deepens the esoteric understanding and worship of the Divine Feminine, offering diverse spiritual paths to liberation. The Mahavidyas embody different aspects of Shakti’s divine nature and are worshiped for personal and spiritual empowerment.",
    manifestation: "Mahavidyas (e.g., Kali, Tara, Tripura Sundari, etc.)",
    key_elements: [
      "Tantric worship and Kundalini awakening",
      "Das Mahavidyas - ten powerful divine forms",
      "Esoteric paths to spiritual liberation"
    ]
  },
  {
    title: "Devotional Worship of Goddess Forms",
    era: "Kali Yuga (Bhakti Movement - c. 12th-17th CE)",
    description: "Poet-saints and devotees express intense personal devotion to various forms of the Goddess (Kali, Durga, Lakshmi) through hymns, songs, and prayer rituals.",
    significance: "Popularizes Goddess worship among the masses, emphasizing love, surrender, and emotional connection to the Divine Feminine. The Bhakti movement brings Goddess worship to everyday devotees, fostering unity and devotion across India.",
    manifestation: ["Kali", "Durga", "Lakshmi"],
    key_elements: [
      "Devotional hymns and songs dedicated to the Goddess",
      "Surrender and love as paths to the divine",
      "Popularization of Goddess worship among the masses"
    ]
  },
  {
    title: "Shakti in Contemporary Spirituality",
    era: "Kali Yuga (Modern Era - 19th CE - Present)",
    description: "There has been a renewed interest in feminine spirituality, Goddess traditions, and the reinterpretation of Shakti principles in modern contexts, including feminism and ecological consciousness.",
    significance: "The Divine Feminine continues to inspire spiritual seekers globally, influencing feminist theology, environmentalism, and the quest for inner empowerment. Contemporary Shakti worship embraces both individual and collective transformation.",
    manifestation: "Maa Adi Shakti in modern forms",
    key_elements: [
      "Global interest in feminine spirituality",
      "Shakti's role in feminism and ecological awareness",
      "Modern reinterpretations of Goddess worship"
    ]
  }
];

// Divine Stories Data
export const divineStoriesData: DivineStory[] = [
    {
        slug: "mahisasura-mardini",
        title: "Mahishasura Mardini - The Slaying of Mahishasura",
        source: "Devi Mahatmyam (Markandeya Purana)",
        summary: "The story of how Goddess Durga, created from the combined powers of the gods (Brahma, Vishnu, Shiva, and others), vanquished the invincible buffalo demon Mahishasura. This epic battle, spanning nine days, highlights the supreme power of the Divine Feminine when cosmic order is threatened and evil prevails. Durga's victory re-establishes dharma and peace.",
        keyFigures: ["Maa Durga (Mahalakshmi)", "Mahishasura", "Brahma", "Vishnu", "Shiva", "Gods (Devas)"],
        stotraTitle: "Argala Stotram (Selected Verses)",
        stotraVerses: [
            "Om Jayanti Mangala Kali Bhadrakali Kapalini.",
            "Durga Kshama Shiva Dhatri Swaha Swadha Namoऽstu Te.",
            "Madhu Kaitabha Vidravee Vidhatri Varade Namah.",
            "Rupam Dehi Jayam Dehi Yasho Dehi Dvisho Jahi."
        ]
    },
    {
        slug: "sati-daksha-yagna",
        title: "Sati and the Daksha Yagna",
        source: "Puranas (e.g., Shiva Purana, Bhagavata Purana)",
        summary: "The tale of Sati, an incarnation of Adi Shakti and daughter of Daksha Prajapati. She displayed unwavering devotion and married Lord Shiva against her father's wishes. Daksha later organized a grand yagna (fire sacrifice) but did not invite Shiva or Sati. Sati, feeling insulted by her father's disrespect towards Shiva, went to the yagna uninvited and, unable to bear the humiliation, immolated herself in the sacrificial fire. This tragic event led to Shiva's wrathful destruction of the yagna and the subsequent creation of the Shakti Peethas from Sati's fallen body parts.",
        keyFigures: ["Devi Sati", "Lord Shiva", "Daksha Prajapati", "Virabhadra"],
        stotraTitle: "Devi Aparadha Kshamapana Stotram (Excerpt)",
        stotraVerses: [
            "Na mantram no yantram tadapi cha na jane stutimaho,",
            "Na chaahvaanam dhyaanam tadapi cha na jane stutikathaah.",
            "Na jane mudraaste tadapi cha na jane vilapanam,",
            "Param jane matah tvadanusaranam klesharanam."
        ]
    },
    {
        slug: "emergence-of-kali",
        title: "The Emergence of Kali from Durga's Brow",
        source: "Devi Mahatmyam (Markandeya Purana)",
        summary: "During a fierce battle with the demons Chanda and Munda, and later Raktabija, Goddess Durga (Ambika/Chamunda) became enraged. From her furrowed brow, the terrifying form of Kali emerged. With her lolling tongue and insatiable hunger, Kali devoured the demons. She famously drank every drop of Raktabija's blood before it could touch the ground, preventing his clones from forming, thus ensuring his ultimate defeat.",
        keyFigures: ["Maa Kali", "Maa Durga (Ambika/Chamunda)", "Chanda", "Munda", "Raktabija"],
        stotraTitle: "Kalika Ashtakam (Excerpt)",
        stotraVerses: [
            "Galad-rakta-mundaavali-kantha-maalaa",
            "Maho-ghora-raavaa sadaa-damstra-kaalaa.",
            "Shmashaan-aalayaa mukta-keshojjvalaa saa",
            "Bhajet Kalikaam Shridharaam Bhadra-kaalim."
        ]
    },
     {
        slug: "creation-of-kaushiki",
        title: "The Creation of Kaushiki from Parvati",
        source: "Devi Mahatmyam (Markandeya Purana)",
        summary: "While Parvati was performing austerities, or according to some versions, after being teased by Shiva about her dark complexion (as Kali), a resplendent goddess emerged from her physical sheath (kosha). This goddess was extremely beautiful and luminous, named Kaushiki. After Kaushiki's emergence, Parvati's own form became dark and was known as Kalika (or Kalaratri). Kaushiki then went on to slay the demons Shumbha and Nishumbha.",
        keyFigures: ["Maa Parvati", "Maa Kaushiki", "Maa Kalika", "Shumbha", "Nishumbha"],
        stotraTitle: "Devi Suktam (Rigveda - Condensed)",
        stotraVerses: [
            "Aham Rudrebhir Vasubhish Charami, Aham Adityair Uta Vishvadevaih.",
            "Aham Mitra Varunobha Bibharmi, Aham Indragni Aham Ashwinobha.",
            "Mama Yonir Apsvantah Samudre, Tato Vitishthe Bhuvananu Vishva.",
            "Utamum Lokam Amuna Sprishami, Paro Diva Para Ena Prithivyai."
        ]
    },
];

// Pancha Prakritis Data
export const panchaPrakritiData: PanchaPrakritisData = {
  "overview": "According to the Devi Bhagavata Purana, Mahadevi is worshipped in five distinct forms, collectively referred to as the Panchadevis or Panchaprakritis. These are the manifestations of goddess Bhuvaneshwari and are highly revered in various spiritual traditions.",
  "key_form_of_devi": "Bhuvaneshwari (The Mother Goddess, Supreme Force)",
  "key_form_image_url": "https://i.pinimg.com/736x/bf/47/18/bf47184d05590b5d0223d9759e790d8c.jpg",
  "forms": [
    {
      "name": "Ganesh Janani Durga (Parvati)",
      "alternate_names": ["Parvati", "Durga", "Ganesh Janani"],
      "role": "The mother of Ganesha and consort of Shiva, she is the supreme force upholding dharma.",
      "key_attributes": [
        "Supreme power (Shakti)",
        "Remover of sorrows",
        "Giver of happiness",
        "Protector of devotees",
        "Mother of Ganesha"
      ],
      "significance": "Durga is worshipped as the all-powerful force who protects the universe, sustains dharma, and removes all obstacles in the lives of her devotees.",
      "special_iconography": [
        "Mounted on a lion or tiger",
        "Holding weapons like the trident, sword, and lotus",
        "Form of maternal compassion"
      ],
      "imageHint": "Ganesh Janani Durga Parvati",
      "imageUrl": "https://i.pinimg.com/736x/48/54/61/4854618ac9026399d6dbcfbde52f8ae6.jpg"
    },
    {
      "name": "Lakshmi",
      "alternate_names": ["Shri", "Padma"],
      "role": "The embodiment of wealth, beauty, compassion, and goodness. She is the goddess of fortune and prosperity.",
      "key_attributes": [
        "Wealth and prosperity",
        "Beauty and grace",
        "Compassion and goodness",
        "Source of abundance"
      ],
      "significance": "Lakshmi is revered as the goddess who provides material and spiritual wealth, and is associated with Vishnu. She serves him in Vaikuntha and grants prosperity and happiness.",
      "special_iconography": [
        "Sitting or standing on a lotus",
        "Holding a pot of gold or coins",
        "Flanked by elephants showering water"
      ],
      "imageHint": "PanchaPrakriti Lakshmi goddess",
      "imageUrl": "https://i.pinimg.com/736x/34/01/82/34018239410c412c24da5b9966ecd7cb.jpg"
    },
    {
      "name": "Sarasvati",
      "alternate_names": ["Vagdevi", "Bharati"],
      "role": "The goddess of knowledge, arts, wisdom, and intellect.",
      "key_attributes": [
        "Knowledge and wisdom",
        "Arts and intellect",
        "Grace and purity",
        "Patron of learning and creativity"
      ],
      "significance": "Sarasvati is revered as the divine source of learning, intellectual prowess, poetic skill, and artistic expression. She is often worshipped by students, scholars, and artists.",
      "special_iconography": [
        "Playing the veena",
        "Seated on a lotus",
        "Holding a book and a mala (rosary)"
      ],
      "imageHint": "PanchaPrakriti Sarasvati goddess",
      "imageUrl": "https://i.pinimg.com/736x/a8/55/5e/a8555e27f76ed7d545688be81b2d0829.jpg"
    },
    {
      "name": "Savitri (Gayatri)",
      "alternate_names": ["Gayatri", "Vedamata"],
      "role": "The essence of truth, existence, and supreme bliss, representing the core of the universal soul.",
      "key_attributes": [
        "Truth and existence",
        "Supreme bliss",
        "Purification and salvation",
        "Mother of the Vedas"
      ],
      "significance": "Savitri (or Gayatri) represents the divine essence that pervades the universe. She is worshipped for spiritual enlightenment, mental clarity, and liberation. She grants salvation and purifies the world.",
      "special_iconography": [
        "Radiant golden figure",
        "Represented as a goddess with a sacred flame",
        "Often depicted with three heads and six arms"
      ],
      "imageHint": "PanchaPrakriti Savitri Gayatri",
      "imageUrl": "https://i.pinimg.com/736x/31/93/78/319378b463fa430b6cff4ec807ec8f8b.jpg"
    },
    {
      "name": "Radha",
      "alternate_names": ["Radharani", "Radhika"],
      "role": "The consort of Krishna and presiding deity over the five pranas.",
      "key_attributes": [
        "Beauty and divine love",
        "Consort of Krishna",
        "Symbol of devotion and surrender",
        "Represents the power of prana"
      ],
      "significance": "Radha is considered the epitome of love, devotion, and divine grace. She embodies the deepest form of devotion to Krishna and is worshipped as the personification of prana (life force).",
      "special_iconography": [
        "Depicted as a young woman in playful poses with Krishna",
        "Worshipped in form of a divine goddess of love and grace"
      ],
      "imageHint": "PanchaPrakriti Radha Krishna",
      "imageUrl": "https://i.pinimg.com/736x/74/55/8b/74558bc5b82e4aa326f2913e04dbcadf.jpg"
    }
  ],
  "unifying_theme": "All five forms are considered manifestations of Bhuvaneshwari, the Supreme Goddess, and collectively represent the different aspects of feminine divine energy (Shakti) that govern creation, preservation, and dissolution in the universe.",
  "importance": {
    "on_worship": "Each form of the Panchaprakriti is revered in different contexts for specific spiritual benefits such as wealth, knowledge, protection, and love.",
    "on_spiritual_practice": "Devotees seek the blessings of these forms for a balanced life, spiritual growth, and material well-being. Worship of these forms is believed to lead to liberation (moksha) and harmony in the material world.",
    "on_theology": "Represents the dual aspects of the divine: the personal (Ishvara) and the impersonal (Brahman)."
  },
  "rituals_and_practices": {
    "Ganesh Janani Durga": [
      "Worshipped during Durga Puja and Navratri festivals",
      "Offerings of flowers, sweets, and prayers for removal of obstacles"
    ],
    "Lakshmi": [
      "Worshipped during Diwali for prosperity and wealth",
      "Offerings of sweets, lamps, and prayers for family well-being"
    ],
    "Sarasvati": [
      "Worshipped during Vasant Panchami for knowledge and creativity",
      "Offering flowers and books for blessings of intellect"
    ],
    "Savitri": [
      "Prayers and mantras for truth and purification",
      "Often recited in Gayatri Mantra during morning worship"
    ],
    "Radha": [
      "Worshipped for love and devotion to Krishna",
      "Offerings during Holi and Radha Ashtami"
    ]
  }
};

// Mahadevi (General) Information
export const mahadeviGeneralData = {
  title: "Mahadevi - The Supreme Mother Goddess",
  otherNames: ["Goddess of Power", "Primordial Goddess", "Para Brahman in Shaktism"],
  imageHint: "Mahadevi painting ancient",
  affiliations: ["Durga", "Lakshmi", "Sarasvati", "Gayatri", "Radha", "Parvati", "Tripura Sundari"],
  abode: "Manidvipa",
  mantra: "Ōm āim hrīm śrīm klīm",
  weapons: ["Devi Chakra", "Pasha", "Ankusha", "Trishula (trident)"],
  symbols: ["Hreem", "Om", "Sri Yantra"],
  mount: "Lion",
  texts: [
    "Devi Mahatmya", "Devi-Bhagavata Purana", "Markandeya Purana", "Brahmanda Purana",
    "Kalika Purana", "Lalita Sahasranama", "Soundarya Lahari", "Shiva Purana",
    "Shakta Upanishads (e.g., Devi Upanishad)"
  ],
  festivals: [
    "Navaratri", "Durga Puja", "Vasanta Panchami", "Lakshmi Puja", "Kali Puja",
    "Durga Ashtami", "Lalita Jayanti", "Adi-Puram"
  ],
};

export const philosophyContent = {
  pageTitle: "Feminine Divinity in Indian Philosophy",
  pageDescription: "Delve into the profound philosophical concepts of Shakti as the cosmic energy, exploring Shaktism, Tantra, and the dynamic interplay of Prakriti and Purusha within Sanatana Dharma.",
  sections: [
    {
      id: "shakti-cosmic-energy",
      iconName: "Atom",
      title: "Shakti as Cosmic Energy (Shaktism)",
      content: [
        {
          type: "paragraph",
          text: "Shakti is the primordial cosmic energy, the source of all creation, existence, and change. It's dynamic, active, and manifests as the divine feminine. In Shakta philosophy, Shakti is the supreme power and the essence of all deities and energies."
        },
        {
          type: "subheading",
          text: "Core Belief:"
        },
        {
          type: "paragraph",
          text: "Without Shakti, Shiva is inert—representing potential without expression. With Shakti, Shiva manifests as the universe."
        },
        {
          type: "quote",
          sanskrit: "शिवः शक्त्यायुक्तो यदि भवति शक्तः प्रभवितुं\nन चेदेवं देवो न खलु कुशलः स्पन्दितुमपि॥",
          translation: "Shiva is able to act only when united with Shakti; without her, even he has no power to stir. (Soundarya Lahari, Verse 1)"
        },
        {
          type: "paragraph",
          text: "This idea reflects the Advaita-based non-duality in Shaktism where Shakti and Shiva are inseparable—consciousness and energy coexisting as one."
        }
      ]
    },
    {
      id: "tantra-feminine-energy",
      iconName: "Zap",
      title: "Tantra and Reverence of Feminine Energy",
      content: [
        {
          type: "paragraph",
          text: "Tantra is an esoteric spiritual tradition venerating the feminine as the ultimate source of power and liberation. Shakta Tantras view the Divine Mother as immanent and transcendent, manifest in creation and consciousness."
        },
        {
          type: "subheading",
          text: "Core Belief & Practices:"
        },
        {
          type: "paragraph",
          text: "The human body is a microcosm of the cosmos, with Kundalini (coiled Shakti) at its base, rising through chakras to unite with Shiva in the crown center. Tantra emphasizes balance, inner alchemy, mantra, yantra, and Devi worship to awaken inner Shakti and attain moksha (liberation)."
        },
        {
          type: "symbols",
          items: [
            { name: "Yoni-Linga", meaning: "Union of feminine and masculine principles" },
            { name: "Sri Chakra", meaning: "Cosmic mandala of the goddess (Tripura Sundari) representing creation and dissolution" }
          ]
        }
      ]
    },
    {
      id: "prakriti-purusha",
      iconName: "Layers",
      title: "Prakriti & Purusha: The Feminine-Masculine Dynamic",
      content: [
        {
          type: "paragraph",
          text: "In Samkhya and Yogic philosophy, the universe arises from the interaction of Prakriti (Nature, the feminine principle) and Purusha (Pure Consciousness, the masculine principle)."
        },
        {
          type: "subheading",
          text: "Core Belief:"
        },
        {
          type: "paragraph",
          text: "Prakriti is Shakti—the ever-evolving, dynamic, creative force. Purusha is static, the silent witness. Liberation comes from realizing the distinction and union of these forces."
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Prakriti: Manifest universe, mind, senses, emotions, nature.",
            "Purusha: Conscious awareness beyond attributes (nirguna)."
          ]
        },
        {
          type: "subheading",
          text: "Interpretation in Shaktism:"
        },
        {
          type: "paragraph",
          text: "Shaktism elevates Prakriti (Shakti) to the highest status, viewing the Goddess not as subordinate but as the embodiment of Divinity itself—the power behind manifestation and transcendence."
        }
      ]
    }
  ],
  conclusion: {
    title: "The All-Encompassing Divine Feminine",
    text: "The philosophical exploration of Shakti reveals her as the fundamental reality—the immanent power driving the cosmos and the transcendent consciousness that is the ultimate goal. Her understanding offers a path to holistic spiritual realization.",
    iconName: "Droplets",
  }
};


export const tantraSadhanaContent = {
  pageTitle: "The Path of Divine Energy",
  introduction: {
    overview: "Tantra is the sacred spiritual science that reveres Shakti—the Divine Feminine—as the source of all power, transformation, and liberation. Shakti Sādhana is the inner discipline that seeks to awaken this cosmic energy within.",
    theme: "This page explores the essence of Tantra, its link with the Goddess (Devi), and the transformational path of Shakti Sādhana through mantra, yantra, and inner realization."
  },
  sections: [
    {
      id: "what-is-tantra",
      title: "What is Tantra?",
      iconName: "BookOpen",
      content: [
        "Tantra is a vast and ancient system of spiritual knowledge rooted in the idea that the divine is immanent—present in every aspect of the universe.",
        "Unlike purely renunciatory paths, Tantra embraces the body, senses, and energy as tools for spiritual awakening.",
        "In Shakta Tantra, the Goddess (Devi) is worshipped as the supreme reality—both the manifest and the unmanifest."
      ],
      key_principles: [
        "Divinity resides in everything, including the physical body.",
        "Union of Shiva (consciousness) and Shakti (energy) is the key to liberation.",
        "Mantra, mudra, yantra, and visualization are tools for transformation."
      ]
    },
    {
      id: "shakti-sadhana",
      title: "Shakti Sādhana: The Path of the Divine Mother",
      iconName: "Sparkles",
      content: [
        "Shakti Sādhana is the spiritual discipline of invoking, awakening, and uniting with the inner Shakti—the latent power within every being.",
        "It includes practices of mantra japa (repetition), dhyana (meditation), rituals, and inner contemplation on the Devi as Kundalini Shakti."
      ],
      steps: [
        {
          step: "1. Mantra Initiation (Dīkṣā)",
          description: "Receiving a sacred mantra of the Goddess from a guru to invoke Her energy with devotion and precision."
        },
        {
          step: "2. Daily Japa and Meditation",
          description: "Chanting the mantra regularly with focus and love to awaken Shakti and purify the mind."
        },
        {
          step: "3. Visualization and Yantra Worship",
          description: "Using sacred diagrams (yantras) like Sri Chakra to meditate on the divine form of Devi."
        },
        {
          step: "4. Inner Realization (Atma-Shakti Bodha)",
          description: "Realizing the identity of one’s Self with the Supreme Shakti through devotion and deep inner silence."
        }
      ]
    },
    {
      title: "Sacred Tools in Tantra",
      id: "sacred-tools",
      iconName: "Shapes",
      items: [
        {
          name: "Mantra",
          description: "Vibrational formulae that invoke the presence and power of Shakti (e.g., Aim Hreem Kleem, Durga Mantra, Kali Beejas)."
        },
        {
          name: "Yantra",
          description: "Geometric symbols representing divine forms, used as visual focal points in meditation (e.g., Sri Yantra, Kali Yantra)."
        },
        {
          name: "Mudra",
          description: "Sacred hand gestures that channel and balance pranic energy within the body during ritual or meditation."
        },
        {
          name: "Kundalini",
          description: "The dormant cosmic energy at the base of the spine, awakened through sādhana to rise through the chakras and unite with Shiva."
        }
      ]
    },
    {
      id: "goddess-forms",
      title: "Goddess Forms in Tantric Worship",
      iconName: "Users2",
      devis: [
        {
          name: "Kali",
          aspect: "Fierce time-transformer, destroyer of ego, liberator from bondage"
        },
        {
          name: "Tripura Sundari",
          aspect: "Goddess of beauty, bliss, and transcendental wisdom; center of Sri Vidya"
        },
        {
          name: "Chhinnamasta",
          aspect: "Self-decapitated Devi symbolizing ego-death and self-sacrifice"
        },
        {
          name: "Bhuvaneshwari",
          aspect: "Queen of the Universe, the cosmic expanse"
        }
      ]
    },
    {
      id: "tantric-philosophy",
      title: "Tantric Philosophy: The Divine Union",
      iconName: "Brain",
      summary: "Tantra teaches that true spiritual realization arises from the inner union of Shiva (consciousness) and Shakti (power). Neither is complete without the other. In human terms, this symbolizes the integration of intellect and emotion, awareness and action, stillness and energy.",
      quote: {
        text: "Without Shakti, Shiva is inert; without Shiva, Shakti is blind. Together they dance the rhythm of the cosmos.",
        source: "Tantric Wisdom"
      }
    }
  ],
  closing: {
    message: "Tantra and Shakti Sādhana offer a sacred, direct, and transformative path to the Divine Mother. Through devotion, mantra, inner discipline, and wisdom, the practitioner awakens the dormant energy within and becomes one with the Universal Shakti.",
    invitation: "Begin your journey with love and reverence — the Goddess already resides within you.",
    iconName: "Heart",
  }
};

    