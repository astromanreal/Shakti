
import type { MahavidyaDetails } from '@/types';
import { getMahadeviByName } from './mahadevi-helpers';

// Raw Mahavidya Data - Updated with user's JSON structure and image URLs
// This data reflects the user's plan for the Mahavidya profile cards
const rawMahavidyaDataOriginal = {
  "dasha_mahavidyas": [
    {
      "name": "Kali",
      "essence": "The Fierce Liberator",
      "keyThemes": ["Time", "Ego Death", "Transcendence"],
      "iconographySummary": "Dark-skinned, tongue out, garland of skulls, stands on Shiva, holds sword and severed head.",
      "sadhanaSummary": "Kali Sadhana for fearlessness, transformation, and moksha.",
      "colorTheme": "text-red-600 border-red-600",
      "description": "Kali is the goddess of destruction and transformation. She is often depicted with a fierce form, representing the destructive aspect of time, which clears the path for creation. Kali is also seen as a mother figure who protects her devotees and removes negative influences.",
      "iconography": "Kali is depicted as a dark, fearsome figure with four arms. She often wears a garland of skulls, and her tongue is protruding, symbolizing her role as the slayer of evil forces.",
      "associates": ["Time", "Destruction", "Transformation", "Liberation", "Fearlessness"], // Expanded associates for keyThemes if needed
      "key_teachings": [
        "Embrace the transformative power of destruction for rebirth.",
        "Overcome fear and illusion to reach enlightenment.",
        "The universe is in constant flux and destruction is part of the cosmic order."
      ],
      "mantra": "ॐ क्लीं कालिकायै नमः",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Tara",
      "essence": "Guidance & Protection",
      "keyThemes": ["Compassion", "Liberation", "Protection", "Wisdom"],
      "iconographySummary": "Blue lotus, sword, often seated or standing, serene yet powerful.",
      "sadhanaSummary": "Tara Sadhana for overcoming obstacles, spiritual guidance, and crossing the ocean of samsara.",
      "colorTheme": "text-blue-500 border-blue-500",
      "description": "Tara is a goddess of protection, compassion, and liberation. She represents the energy of the Divine Mother who assists in the removal of obstacles and provides spiritual guidance, especially for those seeking liberation from material bondage.",
      "iconography": "Tara is often depicted in a seated or standing posture, holding a blue lotus (symbolizing purity) and a sword (to cut through ignorance). Her compassion is boundless.",
      "associates": ["Compassion", "Protection", "Liberation", "Wisdom", "Speech"],
      "key_teachings": [
        "Offer protection and guidance to those who seek it.",
        "Compassion and wisdom are keys to overcoming suffering.",
        "Liberation from attachment and delusion brings peace."
      ],
      "mantra": "ॐ तारे तारे तरे स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Tripura Sundari",
      "essence": "Beauty & Supreme Truth",
      "keyThemes": ["Beauty", "Bliss", "Cosmic Energy", "Sovereignty"],
      "iconographySummary": "Youthful, radiant, serene, auspicious appearance, holding sugarcane bow and flower arrows.",
      "sadhanaSummary": "Tripura Sundari Sadhana for experiencing divine beauty, ultimate truth, and attracting auspiciousness.",
      "colorTheme": "text-pink-500 border-pink-500",
      "description": "Tripura Sundari is the goddess of beauty, cosmic energy, and wisdom. She is the embodiment of the ultimate truth and the force that governs creation, preservation, and dissolution. She is also known as the Goddess of the Three Worlds.",
      "iconography": "Tripura Sundari is depicted as a youthful, radiant woman with a serene and auspicious appearance, symbolizing the ultimate beauty and peace of the universe. She often holds a sugarcane bow, flower arrows, a goad, and a noose.",
      "associates": ["Beauty", "Cosmic Energy", "Wisdom", "Love", "Desire (transcended)"],
      "key_teachings": [
        "Divine beauty transcends physical form and represents spiritual truth.",
        "The divine energy within can lead to self-realization.",
        "The three realms of existence (earth, heaven, and the netherworld) are under her protection."
      ],
      "mantra": "ॐ ऐं ह्रीं श्रीं त्रिपुरसुन्दर्यै नमः", 
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Bhuvaneshwari",
      "essence": "Space & Cosmic Matrix",
      "keyThemes": ["Creation", "Cosmic Mother", "Space", "Sovereignty"],
      "iconographySummary": "Beautiful, regal, peaceful, compassionate expression, surrounded by universe, bestowing boons.",
      "sadhanaSummary": "Bhuvaneshwari Sadhana for understanding cosmic interconnectedness, divine motherhood, and manifesting abundance.",
      "colorTheme": "text-sky-500 border-sky-500",
      "description": "Bhuvaneshwari is the goddess of the universe, associated with the creation and maintenance of the cosmos. She is the mother of the world and is often seen as the embodiment of space, time,and material creation.",
      "iconography": "Bhuvaneshwari is depicted as a beautiful, regal woman with a peaceful, compassionate expression. She is often shown surrounded by the universe and symbols of creation, holding a goad and a noose.",
      "associates": ["Creation", "Cosmic Mother", "Space", "Manifestation", "Knowledge"],
      "key_teachings": [
        "All creation is a manifestation of the Divine Mother.",
        "Embrace the inherent divinity of the universe and understand its interconnectedness.",
        "Cosmic order is nurtured and protected by feminine power."
      ],
      "mantra": "ॐ ह्रीं भुवनेश्वर्यै नमः",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Chinnamasta",
      "essence": "Ego Death & Self-Sacrifice",
      "keyThemes": ["Self-Sacrifice", "Transcendence", "Liberation", "Life Force"],
      "iconographySummary": "Self-decapitated, holding her own severed head, blood flowing nourishing herself and attendants.",
      "sadhanaSummary": "Chinnamasta Sadhana for transcending ego, duality, and realizing the cyclical nature of life and death.",
      "colorTheme": "text-red-700 border-red-700",
      "description": "Chinnamasta is the goddess of self-sacrifice and transformation. She is depicted as a self-decapitated goddess who symbolizes the transcendence of duality, ego, and attachment.",
      "iconography": "Chinnamasta is often portrayed holding her own severed head, with blood flowing from the neck, representing the ultimate self-sacrifice and the energy that sustains life. She stands on a copulating couple.",
      "associates": ["Self-Sacrifice", "Transcendence", "Liberation", "Kundalini", "Courage"],
      "key_teachings": [
        "True freedom comes when one transcends the ego and attachment.",
        "Self-sacrifice is a path to spiritual awakening.",
        "The flow of life and death is one unified force."
      ],
      "mantra": "ॐ श्रीं ह्रीं क्लीं ऐं वज्र वैरोचनीये हूं हूं फट् स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Bhairavi",
      "essence": "Fierce Will & Inner Power",
      "keyThemes": ["Fearlessness", "Protection", "Destruction of Evil", "Kundalini"],
      "iconographySummary": "Wrathful, radiant like fire, wielding weapons to destroy darkness and ignorance, often seated on a corpse.",
      "sadhanaSummary": "Bhairavi Sadhana for courage, overcoming negative forces, and awakening spiritual fire.",
      "colorTheme": "text-orange-700 border-orange-700", 
      "description": "Bhairavi is the goddess of fierce protection and destruction of evil. She represents both the fearsome and nurturing aspects of the Divine Mother.",
      "iconography": "Bhairavi is depicted as a wrathful goddess with a terrible form, wielding weapons to destroy the forces of darkness and ignorance. She is often adorned with a garland of skulls.",
      "associates": ["Fearlessness", "Protection", "Destruction of Evil", "Tapas (Austerity)", "Speech"],
      "key_teachings": [
        "Fear and darkness can be conquered with the strength of divine will.",
        "Protection from evil forces comes through devotion and courage.",
        "The destruction of negative forces leads to spiritual enlightenment."
      ],
      "mantra": "ॐ ह्रीं भैरवी कलौं ह्रीं स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Dhumavati",
      "essence": "Void, Loss & Detachment",
      "keyThemes": ["Void", "Impermanence", "Loss", "Patience"],
      "iconographySummary": "Old, widowed, sorrowful, disheveled, riding a crow, symbolizing dissolution and the formless.",
      "sadhanaSummary": "Dhumavati Sadhana for embracing impermanence, achieving detachment, and transcending suffering.",
      "colorTheme": "text-gray-600 border-gray-600", 
      "description": "Dhumavati is the goddess of the void, loss, and dissolution. She is associated with the power of destruction and the impermanence of life.",
      "iconography": "Dhumavati is depicted as an old, sorrowful woman, often shown in a disheveled state, symbolizing the inescapable process of aging and the dissolving of all things. She often carries a winnowing basket.",
      "associates": ["Void", "Impermanence", "Loss", "Poverty (spiritual)", "Stillness"],
      "key_teachings": [
        "Embrace loss and impermanence as integral parts of life.",
        "The void is not to be feared, but understood as a space for transformation.",
        "Only by letting go of attachments can one experience liberation."
      ],
      "mantra": "ॐ धूं धूं धूमावत्यै स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Bagalamukhi",
      "essence": "Silence, Control & Hypnotic Power",
      "keyThemes": ["Paralysis of Evil", "Victory over Enemies", "Power of Speech (Stambhana)"],
      "iconographySummary": "Yellow-robed, holding a club and pulling the tongue of a captive enemy.",
      "sadhanaSummary": "Bagalamukhi Sadhana for victory over enemies, control over speech, and stopping negative influences.",
      "colorTheme": "text-yellow-500 border-yellow-500",
      "description": "Bagalamukhi is the goddess of immobilization and power over enemies. She is known for her ability to paralyze or stop the actions of those who cause harm.",
      "iconography": "Bagalamukhi is depicted as a yellow-robed goddess, holding a club in one hand and a captive enemy by the tongue in the other, often with their tongue tied or mouth sealed.",
      "associates": ["Paralysis of Evil", "Victory over Enemies", "Power", "Speech Control", "Justice"],
      "key_teachings": [
        "Victory is achieved by subduing negative forces with focused power.",
        "The power to protect oneself from harm comes from inner strength and wisdom.",
        "Control over the mind and emotions is the ultimate victory."
      ],
      "mantra": "ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Matangi",
      "essence": "Inner Speech & Forbidden Knowledge",
      "keyThemes": ["Speech", "Music", "Knowledge", "Outcastes", "Pollution (transcended)"],
      "iconographySummary": "Green complexion, veena, skull, parrot, associated with outcastes and leftovers (Ucchishta).",
      "sadhanaSummary": "Matangi Sadhana for mastery over arts, speech, unconventional wisdom, and transcending social norms.",
      "colorTheme": "text-green-600 border-green-600", 
      "description": "Matangi is the goddess of inner wisdom, unconventional knowledge, and command over speech and arts. As the embodiment of Ucchishta (leftover energy), she represents transformation of impure into pure and is deeply venerated in Tantric practices.",
      "iconography": "Matangi is often depicted with a green complexion, holding a veena, a skull, and sometimes a parrot. She is associated with outcastes and pollution, symbolizing her power to transcend social norms.",
      "associates": ["Speech", "Music", "Knowledge", "Outcastes", "Arts", "Wisdom"],
      "key_teachings": [
        "Divine wisdom can be found in unconventional and even 'impure' sources.",
        "True knowledge transcends social boundaries and norms.",
        "The power of speech (Vak) is sacred and transformative."
      ],
      "mantra": "ॐ ह्रीं ऐं श्रीं नमो भगवति उच्छिष्टचाण्डालि श्री मातङ्गेश्वरि सर्वजनवशंकरि स्वाहा",
      "imageUrl": "https://placehold.co/736x736.png"
    },
    {
      "name": "Kamala",
      "essence": "Abundance & Lakshmi Form",
      "keyThemes": ["Wealth", "Prosperity", "Fertility", "Beauty", "Auspiciousness"],
      "iconographySummary": "Beautiful, seated on lotus, holding lotuses, bathed by elephants, surrounded by wealth.",
      "sadhanaSummary": "Kamala Sadhana for prosperity, beauty, spiritual abundance, and divine grace.",
      "colorTheme": "text-rose-500 border-rose-500", 
      "description": "Kamala is the goddess of wealth, prosperity, and fertility. She is often depicted as a goddess of abundance, providing spiritual and material well-being.",
      "iconography": "Kamala is depicted as a beautiful woman seated on a lotus, holding lotus flowers, and surrounded by wealth and prosperity. Elephants often anoint her with water.",
      "associates": ["Wealth", "Prosperity", "Fertility", "Beauty", "Purity", "Good Fortune"],
      "key_teachings": [
        "True wealth is not just material, but spiritual.",
        "Prosperity flows from spiritual discipline and devotion.",
        "Fertility and abundance are gifts of the divine."
      ],
      "mantra": "ॐ श्रीं ह्रीं क्लीं ऐं सौः कमलात्मिकायै नमः", 
      "imageUrl": "https://placehold.co/736x736.png"
    }
  ]
};

const mahavidyaList = rawMahavidyaDataOriginal.dasha_mahavidyas;

const mahavidyaDataInternal: MahavidyaDetails[] = mahavidyaList.map(m => {
  const slug = m.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
  const imageHint = `${slug.replace("maa-", "")} mahavidya ${m.essence.toLowerCase().split(' ')[0]}`;

  let keyThemes = m.associates || [];
  let iconographySummary = m.iconographySummary || m.iconography.substring(0, 100) + (m.iconography.length > 100 ? '...' : '');
  let sadhanaSummary = m.sadhanaSummary || `${m.name} Sadhana focuses on invoking her divine energy for spiritual growth and specific blessings related to her domain.`;

  if (m.name === "Kali") {
    const kaliBase = getMahadeviByName("Maa Kali"); 
    const originalKaliMahavidyaData = rawMahavidyaDataOriginal.dasha_mahavidyas.find(original => original.name === "Kali")!;

    keyThemes = originalKaliMahavidyaData.keyThemes || kaliBase?.attributes || [];
    iconographySummary = originalKaliMahavidyaData.iconographySummary || kaliBase?.symbolism || "Fierce form, dark-skinned, garland of skulls, holds sword and severed head.";
    sadhanaSummary = originalKaliMahavidyaData.sadhanaSummary || "Kali Sadhana is performed for fearlessness, transformation, and ultimate liberation (moksha).";
    
    return {
      slug: 'kali',
      name: "Maa Kali", 
      description: kaliBase?.description || originalKaliMahavidyaData.description,
      iconography: kaliBase?.symbolism || originalKaliMahavidyaData.iconography,
      associates: originalKaliMahavidyaData.associates, 
      keyTeachings: originalKaliMahavidyaData.key_teachings,
      mantras: [originalKaliMahavidyaData.mantra],
      imageHint: 'kali mahavidya fierce liberator',
      imageUrl: originalKaliMahavidyaData.imageUrl,
      aspect: kaliBase?.aspect,
      consort: kaliBase?.consort,
      notableForms: kaliBase?.notable_forms,
      festivals: kaliBase?.festivals,
      attributesList: kaliBase?.attributes,
      essence: originalKaliMahavidyaData.essence,
      keyThemes: keyThemes,
      iconographySummary: iconographySummary,
      sadhanaSummary: sadhanaSummary,
      colorTheme: originalKaliMahavidyaData.colorTheme,
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
    essence: m.essence,
    keyThemes: keyThemes,
    iconographySummary: iconographySummary,
    sadhanaSummary: sadhanaSummary,
    colorTheme: m.colorTheme,
  };
});

export const mahavidyaData = mahavidyaDataInternal;
