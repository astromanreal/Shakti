
import type { TrideviDetails, NavForm, AshtaLakshmiForm, SaraswatiAspect, FestivalDetail, MantraStotraItem, TempleDetail } from '@/types';
import { getMahadeviByName } from './mahadevi-helpers';
import { mahavidyaData } from './mahavidya-data';

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

const saraswatiAspectsForms: SaraswatiAspect[] = [
  { title: 'Embodiment of Vedas', description: 'She is considered the mother of the Vedas and all sacred scriptures, representing divine knowledge.', imageHint: 'Vedas scriptures scroll text' },
  { title: 'Patron of Arts and Music', description: 'All forms of art, music, dance, and creativity flow from her grace, inspiring artists and scholars.', imageHint: 'music instruments art palette' },
  { title: 'Symbol of Purity and Wisdom', description: 'Her white attire and lotus seat signify purity, transcendence, and supreme wisdom.', imageHint: 'white lotus swan pure' },
  { title: 'Power of Speech (Vak Devi)', description: 'She governs speech, ensuring clarity, truthfulness, and eloquence.', imageHint: 'eloquent speech soundwave mouth' },
];
const saraswatiVandana = 'Ya Kundendu Tushara Hara Dhavala Ya Shubhra Vastravrita,\nYa Veena Varadanda Manditakara Ya Shveta Padmasana.\nYa Brahmachyuta Shankara Prabhritibhir Devaih Sada Vandita,\nSa Mam Patu Saraswati Bhagavatee Nihshesha Jadyapaha.';

const kaliMahavidyaEntryForTridevi = mahavidyaData.find(m => m.slug === 'kali');
const kaliTopLevelMantra = kaliMahavidyaEntryForTridevi?.mantras[0] || kaliDetailedData.goddess.mantra.split('(')[0].trim();


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
      imageHint: durgaBase.imageHint || "durga majestic warrior",
      imageUrl: durgaBase.imageUrl || "https://placehold.co/736x736.png",

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
      imageHint: lakshmiBase.imageHint || "lakshmi wealth golden",
      imageUrl: lakshmiBase.imageUrl || "https://placehold.co/736x736.png",

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
        danceForms: lakshmiDetailedData.culturalInfluence.danceForms || [], // Ensure danceForms is always an array
        artAndSculpture: lakshmiDetailedData.culturalInfluence.artAndSculpture,
        moviesAndMedia: lakshmiDetailedData.culturalInfluence.moviesAndMedia || [], // Ensure moviesAndMedia is always an array
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
      notable_forms: saraswatiBase.notable_forms || [],
      festivals: [mainFestival.name, ...(mainFestival.otherFestivals || [])],

      introduction: `${newData.meaningOfName}. ${newData.philosophicalSignificance.description}`,
      iconographyDetails: newData.iconographyNote,
      mantras: [newData.mantra.split('(')[0].trim()],
      imageHint: saraswatiBase.imageHint || "saraswati wisdom serene",
      imageUrl: saraswatiBase.imageUrl || "https://placehold.co/736x736.png",

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
        significance: mainFestival.description || "",
        region: mainFestival.region || "India-wide",
      }, ... (mainFestival.otherFestivals || []).map(f => ({name:f, type: "Associated", time: "Varies", significance: `Important festival associated with ${newData.name}`}))],
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
      notable_forms: parvatiBase.notable_forms || [],
      festivals: [mainFestivalParvati.name, ...mainFestivalParvati.otherFestivals],

      introduction: `${newData.meaningOfName}. ${newData.philosophicalSignificance.description}`,
      iconographyDetails: newData.iconographyNote,
      mantras: [newData.mantra.split('(')[0].trim()],
      imageHint: parvatiBase.imageHint || "parvati motherly gentle",
      imageUrl: parvatiBase.imageUrl || "https://placehold.co/736x736.png",


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
      notable_forms: kaliBase.notable_forms || [],
      festivals: [mainFestivalKali.name, ...mainFestivalKali.otherFestivals].map(f => typeof f === 'string' ? f : (f as {name: string}).name),

      introduction: 'Maa Kali, the formidable Goddess of Time, Destruction, and Transformation, is a fierce aspect of Adi Shakti. She eradicates ignorance and ego, paving the path to liberation and ultimate truth.',
      iconographyDetails: newData.iconographyNote,
      mantras: [kaliTopLevelMantra],
      imageHint: kaliBase.imageHint || "kali fierce transformative",
      imageUrl: kaliBase.imageUrl || "https://placehold.co/736x736.png",


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
        children: (newData.children as string[] | undefined)?.join(', ') || "", // Ensure children is handled as string
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
      relatedDeities: ["Shiva (Consort)", "Durga (as an aspect/emergence)", ...(kaliBase.notable_forms || [])],
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
