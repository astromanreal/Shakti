import type { ShaktiPeetha, ShaktiPeethaFestival, DeityDetail, PeethaResources, ResourceLink, AccessibilityInfo, ShaktiPeethaLocation } from '@/types';

// --- RAW DATA DEFINITIONS ---

const kamakhyaRawData = {
  idString: "kamakhya-guwahati",
  name: "Kamakhya Shakti Peetha",
  alternateNames: ["Kamarupa-Kamakhya", "Kamakhya Temple"],
  location: {
    city: "Guwahati",
    district: "Kamrup",
    state: "Assam",
    country: "India",
    coordinates: { latitude: 26.1664, longitude: 91.7055 }
  },
  goddess: {
    name: "Kamakhya",
    description: "The presiding deity is Kamakhya Devi, worshipped not as an idol but as a yoni-shaped stone with a natural spring, symbolizing creation, fertility, and the raw power of Shakti."
  },
  bhairava: {
    name: "Umananda",
    description: "Umananda Bhairava, whose temple is located on an island in the Brahmaputra river, is the guardian of this powerful Peetha."
  },
  bodyPart: "Yoni (Womb/Genitals)",
  templeSignificance: "Kamakhya is one of the oldest and most powerful Shakti Peethas, revered as a major center for Tantrism. It celebrates the procreative and nurturing power of the Goddess and is a symbol of feminine strength and fertility.",
  mainAttractions: [
    "The Garbhagriha (sanctum) housing the sacred Yoni stone with a natural spring",
    "Ambubachi Mela, a major annual Tantric fertility festival",
    "The Umananda Temple on Peacock Island in the Brahmaputra",
    "Complex of temples dedicated to the Dasa Mahavidyas"
  ],
  festivalsCelebrated: ["Ambubachi Mela (June)", "Navaratri", "Durga Puja", "Manasha Puja"],
  architecture: "The temple features a unique hybrid style, with a Nilachal type of architecture characterized by a hemispherical dome and a beehive-like shikhara (spire).",
  spiritualImportance: "As the site where the yoni fell, Kamakhya is considered the 'womb' of creation and the epicenter of Shakti worship. It is a vital pilgrimage for Tantra practitioners and devotees seeking blessings for fertility, protection, and liberation.",
  accessibility: {
    nearestRailwayStation: "Guwahati Railway Station",
    nearestAirport: "Lokpriya Gopinath Bordoloi International Airport, Guwahati",
    localTransport: "Easily accessible by taxis, auto-rickshaws, and city buses from anywhere in Guwahati."
  },
  resources: {
    officialWebsite: "https://www.maakamakhya.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Kamakhya_Temple",
    additionalLinks: [
      { title: "Assam Tourism - Kamakhya", url: "https://assamtourism.gov.in/destinations/details/kamakhya-temple" },
      { title: "Temple Purohit - Kamakhya Temple", url: "https://www.templepurohit.com/hindu-temple/kamakhya-temple-guwahati-assam/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Kamakhya+Temple"
  },
  keywords: ["Kamakhya Shakti Peetha", "Kamarupa Temple", "Yoni Peeth", "Assam Shakti Peetha", "Umananda Bhairava", "Ambubachi Mela", "Tantric Temple"]
};


const kalighatRawData = {
  idString: "kalighat",
  name: "Kalighat Shakti Peetha",
  alternateNames: ["Kalighat Kali Temple", "Kolkata Kali Temple"],
  location: {
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    coordinates: { latitude: 22.5186, longitude: 88.3375 }
  },
  goddess: {
    name: "Kali",
    description: "The presiding deity at Kalighat is Goddess Kali, a fierce and compassionate form of Shakti who is worshipped for protection, justice, and liberation from ego."
  },
  bhairava: {
    name: "Nakuleshwar Bhairava",
    description: "Nakuleshwar is the guardian deity of this Shakti Peetha, a form of Shiva who protects the temple and its spiritual energies."
  },
  bodyPart: "Right Toe of Sati",
  templeSignificance: "Kalighat is one of the most famous and powerful Shakti Peethas in India. It is believed that the right toe of Sati fell here. The temple has a deep spiritual and cultural significance and is a major pilgrimage center for devotees of Kali.",
  mainAttractions: [
    "Iconic black stone idol of Kali with three eyes and protruding tongue",
    "Sacred spring (Kundupukur) believed to have healing powers",
    "Nakuleshwar Bhairava Temple nearby",
    "Daily elaborate rituals and arati"
  ],
  festivalsCelebrated: ["Kali Puja", "Durga Puja", "Navaratri", "Diwali", "Poila Boishakh (Bengali New Year)"],
  architecture: "Bengali-style temple with a unique natmandir (prayer hall), central shrine, and ornate terracotta decorations typical of 19th-century Bengal temple design.",
  spiritualImportance: "Kalighat is not only a Shakti Peetha but also a key Tantric center. The energy here is intense and transformative, attracting sages, saints, and spiritual seekers for centuries.",
  accessibility: {
    nearestRailwayStation: "Howrah Station / Sealdah Station",
    nearestAirport: "Netaji Subhas Chandra Bose International Airport, Kolkata",
    localTransport: "Easily accessible by Metro (Kalighat Station), buses, taxis, and autos."
  },
  resources: {
    officialWebsite: "https://kalighattemple.com/",
    wikipedia: "https://en.wikipedia.org/wiki/Kalighat_Kali_Temple",
    additionalLinks: [
      { title: "Temple Purohit - Kalighat", url: "https://www.templepurohit.com/hindu-temple/kalighat-kali-temple-kolkata-west-bengal/" },
      { title: "Kolkata Tourism - Kalighat", url: "https://kolkatatourism.travel/kalighat-temple-kolkata" }
    ],
    googleMaps: "https://www.google.com/maps/place/Kalighat+Kali+Temple/@22.5186,88.3375"
  },
  keywords: ["Kalighat Shakti Peetha", "Kalighat Kali Temple", "Sati right toe", "Nakuleshwar Bhairava", "Kali worship Kolkata", "Shakti Peetha West Bengal", "Tantra Shakti temple"]
};

const prayagRawData = {
  idString: "lalita-devi-prayagraj",
  name: "Prayag Shakti Peetha",
  alternateNames: ["Lalita Devi Temple", "Alopi Devi Mandir"],
  location: {
    city: "Prayagraj",
    state: "Uttar Pradesh",
    country: "India",
    coordinates: { latitude: 25.4358, longitude: 81.8463 }
  },
  goddess: {
    name: "Lalita",
    description: "Lalita Devi is worshipped here as the embodiment of divine feminine power and grace. She represents beauty, prosperity, and spiritual knowledge."
  },
  bhairava: {
    name: "Bhava",
    description: "Lord Bhava is the Bhairava guardian of this Shakti Peetha, considered the fierce protective aspect of Shiva residing with Devi."
  },
  bodyPart: "Fingers of Sati's hand",
  templeSignificance: "This is one of the most sacred Shakti Peethas where the fingers of Goddess Sati are believed to have fallen. The temple is known for its powerful aura and is an important center for Tantra Sadhana and Shakti worship.",
  mainAttractions: ["Sacred worship of Lalita Devi", "Traditional Alopi Devi rituals", "Proximity to Triveni Sangam", "Important pilgrimage site during Kumbh Mela"],
  festivalsCelebrated: ["Navaratri", "Magh Mela", "Kumbh Mela", "Durga Puja"],
  architecture: "North Indian temple architecture with stone carvings, sanctum dedicated to Devi Lalita, and ancient Tantric inscriptions.",
  spiritualImportance: "Prayag is believed to be the navel of the earth (Brahma’s navel), making this Shakti Peetha immensely potent for spiritual awakening and feminine divine worship.",
  accessibility: {
    nearestRailwayStation: "Prayagraj Junction",
    nearestAirport: "Prayagraj Airport",
    localTransport: "Auto-rickshaws, buses, and taxis available within city to reach temple easily."
  },
  resources: {
    officialWebsite: "https://prayagraj.nic.in/tourist-place/lalita-devi-temple/",
    wikipedia: "https://en.wikipedia.org/wiki/Prayag_Shakti_Peetha",
    additionalLinks: [
      { title: "Temple Purohit - Prayag Peetha", url: "https://www.templepurohit.com/hindu-temple/prayag-shakti-peeth-prayagraj/" },
      { title: "Dharam Temples - Lalita Devi", url: "https://www.dharamtemples.com/2017/07/lalita-devi-temple-prayagraj.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Lalita+Devi+Mandir/@25.4358,81.8463"
  },
  keywords: ["Prayag Shakti Peetha", "Lalita Devi", "Alopi Devi", "Shakti Peeth Uttar Pradesh", "Sati fingers", "Bhava Bhairava", "Triveni Sangam", "Tantric worship"]
};

const vishalakshiRawData = {
  idString: "vishalakshi",
  name: "Vishalakshi Shakti Peetha",
  alternateNames: ["Vishalakshi Temple", "Vishalakshi Gauri Temple"],
  location: {
    city: "Varanasi", state: "Uttar Pradesh", country: "India",
    coordinates: { latitude: 25.3097, longitude: 83.0132 }
  },
  goddess: {
    name: "Vishalakshi",
    description: "Goddess Vishalakshi, meaning 'the wide-eyed one', is a compassionate and benevolent form of the Divine Mother. She is regarded as one of the manifestations of Parvati and is worshipped for granting prosperity, happiness, and liberation."
  },
  bhairava: {
    name: "Kalabhairava",
    description: "Kalabhairava is the Bhairava associated with this Shakti Peetha. As the fierce form of Shiva, he is the protector of Varanasi and the guardian of sacred energies in the region."
  },
  bodyPart: "Earring (Kundal) or Face of Sati (according to varying traditions)",
  templeSignificance: "The Vishalakshi Temple is one of the most sacred Shakti Peethas and holds a unique place in Varanasi. The temple is said to mark the spot where the earring or face of Goddess Sati fell. It is highly revered among pilgrims and spiritually significant due to its location in the eternal city of Kashi.",
  mainAttractions: ["Sacred idol of Goddess Vishalakshi adorned in traditional South Indian style", "Daily rituals and Kumkum archana", "Located close to the famous Kashi Vishwanath Temple", "Peaceful spiritual environment near the Ganges"],
  festivalsCelebrated: ["Navaratri", "Durga Puja", "Diwali", "Kartik Purnima", "Varalakshmi Vratam (mainly by South Indian devotees)"],
  architecture: "A blend of South Indian and North Indian temple architecture, featuring a small but ornate sanctum with intricate carvings and vibrant deity adornments.",
  spiritualImportance: "The temple is both a Shakti Peetha and a symbol of the divine feminine energy that pervades Varanasi. It is closely associated with spiritual awakening, tantric practices, and feminine grace.",
  accessibility: { nearestRailwayStation: "Varanasi Junction", nearestAirport: "Lal Bahadur Shastri International Airport, Varanasi", localTransport: "Accessible via rickshaw, auto, and on foot through the narrow lanes of the old city." },
  resources: {
    officialWebsite: "https://uptourism.gov.in/en/post/vishalakshi-temple",
    wikipedia: "https://en.wikipedia.org/wiki/Vishalakshi_Temple",
    additionalLinks: [
        { title: "Temple Purohit - Vishalakshi Temple", url: "https://www.templepurohit.com/hindu-temple/vishalakshi-temple-varanasi-uttar-pradesh/" },
        { title: "Kashi Temples - Vishalakshi", url: "https://kashitemple.org/vishalakshi-temple/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Vishalakshi+Temple/@25.3097,83.0132"
  },
  keywords: ["Vishalakshi Shakti Peetha", "Varanasi Devi temple", "Sati kundal fell", "Kalabhairava temple", "Shakti Peetha Kashi", "Vishalakshi Gauri", "Goddess temples Varanasi"]
};

const jwalajiRawData = {
  idString: "jwalaji",
  name: "Jwalaji Shakti Peetha",
  alternateNames: ["Jwala Devi Temple", "Jwalamukhi Temple"],
  location: {
    city: "Jwalamukhi", district: "Kangra", state: "Himachal Pradesh", country: "India",
    coordinates: { latitude: 31.8764, longitude: 76.3163 }
  },
  goddess: {
    name: "Jwalamukhi",
    description: "Goddess Jwalamukhi is worshipped in the form of eternal flames that burn from fissures in the rock. These flames are believed to be manifestations of the tongue of Sati, which is said to have fallen at this spot. She is revered as the fiery form of the Divine Mother who destroys evil and grants boons."
  },
  bhairava: {
    name: "Unmatta Bhairava",
    description: "Unmatta Bhairava is the guardian deity and consort at this Shakti Peetha. His fierce form complements the fiery nature of the goddess, representing protection, spiritual power, and purification."
  },
  bodyPart: "Tongue of Sati",
  templeSignificance: "Jwalaji is one of the most prominent and miraculous Shakti Peethas where no idol is worshipped. Instead, eternal blue flames emerging naturally from the ground are venerated. It is considered a place of powerful spiritual energy and divine presence.",
  mainAttractions: [
    "Natural eternal flames (Jwalas) inside the sanctum",
    "Gold-domed shrine built by Raja Bhumi Chand and later renovated by Maharaja Ranjit Singh",
    "Sacred akhand jyoti (ever-burning flame)",
    "Navratri fairs and grand celebrations",
    "Nearby temples like Gorakh Dibbi and Chintpurni"
  ],
  festivalsCelebrated: ["Navaratri (Chaitra and Ashwin)", "Jwalamukhi Fair", "Diwali", "Holi", "Sawan Month Rituals"],
  architecture: "The temple showcases a classic hill-style structure with golden domes and marble interiors. The sanctum houses the sacred flame openings without any deity idol, making it unique among Hindu temples.",
  spiritualImportance: "The site symbolizes the indestructible power of the Divine Mother. Pilgrims come here seeking spiritual cleansing, divine vision, and wish fulfillment through devotion to the eternal flame.",
  accessibility: { nearestRailwayStation: "Pathankot (approx. 123 km)", nearestAirport: "Gaggal Airport (approx. 50 km)", localTransport: "Well-connected by buses and taxis from major Himachal cities and pilgrimage circuits" },
  resources: {
    officialWebsite: "https://himachaltourism.gov.in/destination/jwalaji-temple/",
    wikipedia: "https://en.wikipedia.org/wiki/Jwala_Ji",
    additionalLinks: [
        { title: "Temple Purohit - Jwalaji Temple", url: "https://www.templepurohit.com/hindu-temple/jwalaji-temple-jwala-mukhi-himachal-pradesh/" },
        { title: "Kangra District - Jwalaji Temple", url: "https://kangra.nic.in/tourist-place/jwalaji-temple/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Shree+Jwala+Devi+Temple/@31.8764,76.3163"
  },
  keywords: ["Jwalaji Shakti Peetha", "Jwala Devi Temple", "Eternal flame temple", "Tongue of Sati", "Jwalamukhi Kangra", "Himachal Shakti Peetha", "Unmatta Bhairava"]
};

const kanyakumariRawData = {
  idString: "kanyakumari",
  name: "Kanyakumari Shakti Peetha",
  alternateNames: ["Bhagavathy Amman Temple", "Kumari Amman Temple"],
  location: { city: "Kanyakumari", district: "Kanyakumari", state: "Tamil Nadu", country: "India", coordinates: { latitude: 8.0883, longitude: 77.5385 }},
  goddess: { name: "Devi Kanya Kumari", description: "Devi Kanya Kumari is worshipped as the virgin goddess, an adolescent form of Parvati. She is believed to have performed severe penance to marry Lord Shiva, embodying purity, sacrifice, and spiritual strength. She is also the protector of India’s southern tip, where the three seas meet." },
  bhairava: { name: "Nimishanandan", description: "Lord Nimishanandan Bhairava is considered the protector of this Peetha. He is invoked for swift blessings ('nimisha' meaning moment), removing obstacles, and guarding the sanctity of the place." },
  bodyPart: "Back of Sati",
  templeSignificance: "Kanyakumari Shakti Peetha is not only a sacred spiritual site but also a symbol of India's cultural unity. It stands at the southernmost tip of the mainland, marking the confluence of the Bay of Bengal, Arabian Sea, and Indian Ocean. Pilgrims believe that bathing here purifies the soul.",
  mainAttractions: [
    "Goddess Kanya Kumari idol adorned with a diamond nose ring",
    "Sunrise and sunset views over the sea",
    "Vivekananda Rock Memorial nearby",
    "Three-sea sangam point",
    "Navratri celebrations and spiritual retreats"
  ],
  festivalsCelebrated: ["Navaratri", "Chitra Pournami", "Vaikasi Visakam", "New Year celebrations", "Kanyakumari Festival"],
  architecture: "The temple follows Dravidian architectural style with intricate carvings and a sea-facing sanctum. The idol of the goddess is said to face the sea, symbolizing her eternal vigil over the land and spiritual devotion.",
  spiritualImportance: "Devi Kanya Kumari represents the eternal energy of chastity and tapasya. It is believed that those seeking spiritual progress and marriage blessings visit her temple. Her association with the ocean and three seas symbolizes the boundless power of Shakti.",
  accessibility: { nearestRailwayStation: "Kanyakumari Railway Station (1.5 km)", nearestAirport: "Trivandrum International Airport (approx. 90 km)", localTransport: "Auto-rickshaws, buses, and taxis are widely available from all parts of the town and nearby tourist spots" },
  resources: {
    officialWebsite: "https://kanyakumaritemple.tnhrce.in/",
    wikipedia: "https://en.wikipedia.org/wiki/Kanyakumari_Temple",
    additionalLinks: [{ title: "Tamil Nadu Tourism - Kanyakumari", url: "https://www.tamilnadutourism.tn.gov.in/destinations/kanyakumari" }, { title: "Temple Purohit - Kumari Amman", url: "https://www.templepurohit.com/hindu-temple/kumari-amman-temple-kanyakumari/" }],
    googleMaps: "https://www.google.com/maps/place/Kumari+Amman+Temple/@8.0883,77.5385"
  },
  keywords: ["Kanyakumari Shakti Peetha", "Kumari Amman Temple", "Virgin Goddess Parvati", "Back of Sati", "Kanyakumari temple", "Bhagavathy Amman", "Southern Shakti Peetha"]
};

const taraTariniRawData = {
  idString: "taratarini",
  name: "Tara Tarini Shakti Peetha",
  alternateNames: ["Tara Tarini Temple", "Twin Goddess Temple of Odisha"],
  location: { city: "Purushottampur", district: "Ganjam", state: "Odisha", country: "India", coordinates: { latitude: 19.3722, longitude: 84.7446 }},
  goddess: { name: "Tara and Tarini", description: "Tara and Tarini are twin sister goddesses representing fierce yet protective aspects of Shakti. They are believed to be manifestations of Maa Durga and Maa Kali, and are revered for their blessings of power, protection, and motherhood. Worship here symbolizes inner transformation and spiritual evolution." },
  bhairava: { name: "Ksheer Kumar", description: "Ksheer Kumar Bhairava, the guardian of the Tara Tarini Peetha, is invoked to grant courage and safeguard devotees from evil influences. He complements the fierce nature of the twin goddesses." },
  bodyPart: "Breasts of Sati",
  templeSignificance: "This Peetha is one of the most ancient and revered sites in eastern India. As the place where the breasts of Sati fell, it signifies maternal power, nurturing energy, and the creative force of the universe. The temple is located atop the Kumari Hills beside the Rushikulya River, symbolizing natural harmony.",
  mainAttractions: [
    "Scenic hilltop temple with 999 steps",
    "Cable car ride for devotees",
    "Riverside views and surrounding forests",
    "Twin deities enshrined in a single sanctum",
    "Vibrant tribal rituals and traditions"
  ],
  festivalsCelebrated: ["Chaitra Mela (March-April, most grand)", "Navratri", "Makar Sankranti", "Magha Saptami", "Durga Puja"],
  architecture: "The temple exhibits a blend of traditional Odia and tribal architectural styles. The sanctum houses granite idols of the twin goddesses adorned with silver ornaments and colorful silk saris. The serene hilltop location adds to its spiritual atmosphere.",
  spiritualImportance: "Tara Tarini embodies the sustaining and nourishing force of Shakti. The breasts signify sustenance and compassion, making this Peetha highly auspicious for fertility, motherhood, and strength. Thousands of devotees come here for mundan (head-shaving) ceremonies for children.",
  accessibility: { nearestRailwayStation: "Berhampur Railway Station (approx. 32 km)", nearestAirport: "Biju Patnaik International Airport, Bhubaneswar (approx. 174 km)", localTransport: "Buses and taxis from Berhampur to the temple base; steps or ropeway to reach the temple" },
  resources: {
    officialWebsite: "http://www.taratarini.nic.in/",
    wikipedia: "https://en.wikipedia.org/wiki/Tara_Tarini_Temple",
    additionalLinks: [{ title: "Temple Purohit - Tara Tarini", url: "https://www.templepurohit.com/hindu-temple/tara-tarini-temple-ganjam/" }, { title: "Odisha Tourism - Tara Tarini", url: "https://odishatourism.gov.in/content/tourism/en/discover/temples/tara-tarini-temple.html" }],
    googleMaps: "https://www.google.com/maps/place/Tara+Tarini+Temple/@19.3722,84.7446"
  },
  keywords: ["Tara Tarini Shakti Peetha", "Twin Goddess Temple", "Breasts of Sati", "Odisha Shakti Peeth", "Kumari Hills Temple", "Tara Tarini Hill Shrine"]
};

const hinglajRawData = {
  idString: "hinglaj",
  name: "Hinglaj Mata Shakti Peetha",
  alternateNames: ["Hinglaj Devi", "Hingula Devi", "Hinglaj Shakti Peeth"],
  location: { city: "Hinglaj", district: "Lasbela", state: "Balochistan", country: "Pakistan", coordinates: { latitude: 25.5126, longitude: 65.5018 }},
  goddess: { name: "Hinglaj Mata", description: "Hinglaj Mata is considered a powerful and compassionate form of Goddess Durga or Shakti. She is worshipped by Hindus, especially the Sindhi and Baloch communities, and is believed to grant protection and blessings to all her devotees. The shrine, set in a cave, is associated with ancient Tantric practices and pilgrimage." },
  bhairava: { name: "Bhimlochan", description: "Bhimlochan Bhairava is the fierce guardian deity associated with Hinglaj Peetha. He protects the sacred site and embodies the transformative power of Shiva." },
  bodyPart: "Bramharandhra (the top of the head/skull) of Sati",
  templeSignificance: "This Peetha is one of the most sacred Shakti Peethas and is located in a remote cave in the Hingol mountains of Balochistan. It is deeply revered despite being in a Muslim-majority region. Hinglaj is seen as a pilgrimage site symbolizing devotion that transcends borders, caste, and creed.",
  mainAttractions: [
    "Sacred cave shrine of Hinglaj Mata",
    "Hingol River and natural surroundings",
    "Annual Hinglaj Yatra (pilgrimage)",
    "Traditional Sindhi and Baloch rituals",
    "Surrounding hills and sacred markings"
  ],
  festivalsCelebrated: ["Hinglaj Yatra (March–April)", "Navratri", "Chaitra Purnima", "Local tribal and Sindhi Hindu rituals"],
  architecture: "The shrine is a natural cave with a sacred rock symbolizing the goddess. There is no constructed idol, only a divine stone that is bathed and decorated. The cave's simplicity reflects the raw spiritual energy of the place, maintained with natural offerings and reverence.",
  spiritualImportance: "Hinglaj is one of the oldest known Shakti Peethas and is a symbol of timeless spiritual power. The Bramharandhra (crown of the skull) is linked with supreme consciousness. The shrine is regarded as a site of penance, pilgrimage, and divine transformation, attracting sadhus and pilgrims from India and Pakistan.",
  accessibility: { nearestRailwayStation: "No direct rail access; closest major city is Karachi (approx. 250 km)", nearestAirport: "Jinnah International Airport, Karachi", localTransport: "Pilgrims travel by buses or trucks from Karachi during the Hinglaj Yatra. Travel through desert and rocky terrain is required." },
  resources: {
    officialWebsite: "http://www.hinglajmata.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Hinglaj_Mata",
    additionalLinks: [{ title: "Temple Purohit - Hinglaj Mata", url: "https://www.templepurohit.com/hindu-temple/hinglaj-mata-temple-balochistan/" }, { title: "Sacred Yatra - Hinglaj Mata", url: "https://www.sacredyatra.com/hinglaj-mata-temple.html" }],
    googleMaps: "https://www.google.com/maps/place/Hinglaj+Mata+Mandir/@25.5126,65.5018"
  },
  keywords: ["Hinglaj Shakti Peetha", "Hinglaj Mata", "Hingula Devi", "Balochistan Temple", "Shakti Peeth in Pakistan", "Bramharandhra of Sati", "Hinglaj Yatra"]
};

const chamundaHPRawData = {
  idString: "chamunda-hp",
  name: "Chamunda Devi Shakti Peetha",
  alternateNames: ["Chamundi", "Chamundeshwari", "Chamunda Mata"],
  location: { city: "Dharamshala", district: "Kangra", state: "Himachal Pradesh", country: "India", coordinates: { latitude: 32.1434, longitude: 76.3926 }},
  goddess: { name: "Chamunda Devi", description: "Chamunda Devi is a fierce and protective form of Goddess Durga, known for slaying the demons Chanda and Munda. She is worshipped as a powerful manifestation of divine feminine energy, embodying destruction of evil and victory of dharma." },
  bhairava: { name: "Rudra Mahakaal", description: "As her consort Bhairava, Rudra Mahakaal represents time, transformation, and cosmic destruction. He safeguards the temple and energizes the site with spiritual might." },
  bodyPart: "Back of Devi Sati",
  templeSignificance: "Chamunda Devi Temple is among the most spiritually intense Shakti Peethas. Located amidst the Himalayas, the temple is revered for its natural beauty, healing power, and its role as a major center of tantric worship and goddess devotion.",
  mainAttractions: [
    "Ancient idol of Chamunda Devi",
    "Scenic view of Dhauladhar hills",
    "Traditional aarti and rituals",
    "Sacred cremation ground behind the temple",
    "River Baner flowing alongside the temple"
  ],
  festivalsCelebrated: ["Navratri (March-April and September-October)", "Durga Ashtami", "Dussehra", "Chamunda Jayanti"],
  architecture: "The temple features traditional Himachali architecture, built of stone and wood. The sanctum houses an ancient murti of Chamunda. The walls are adorned with intricate carvings of divine figures and tantric symbolism.",
  spiritualImportance: "This Shakti Peeth is both a place of devotion and a powerful center of spiritual austerities. The back of Sati represents spiritual strength and support. The temple is surrounded by cremation grounds, reflecting Chamunda's role as a destroyer of fear and liberator of the soul.",
  accessibility: { nearestRailwayStation: "Pathankot Railway Station (approx. 90 km)", nearestAirport: "Gaggal Airport, Kangra (approx. 28 km)", localTransport: "Regular taxis and buses available from Dharamshala and Kangra." },
  resources: {
    officialWebsite: "https://hptdc.in/index.php/chamunda-devi-temple/",
    wikipedia: "https://en.wikipedia.org/wiki/Chamunda_Devi_Temple",
    additionalLinks: [{ title: "Holidify - Chamunda Devi", url: "https://www.holidify.com/places/kangra/chamunda-devi-temple-sightseeing-3543.html" }, { title: "Temple Purohit - Chamunda Devi", url: "https://www.templepurohit.com/hindu-temple/chamunda-devi-temple-kangra/" }],
    googleMaps: "https://www.google.com/maps/place/Chamunda+Devi+Temple/@32.1434,76.3926"
  },
  keywords: ["Chamunda Devi Shakti Peeth", "Chamundi Temple", "Chamunda Mata", "Shakti Peeth Himachal", "Back of Sati", "Rudra Mahakaal", "Tantric goddess temple"]
};

const dakshineswarRawData = {
  idString: "dakshineswar-significance",
  name: "Dakshineswar Kali Temple",
  alternateNames: ["Dakshineswar Kali Mandir", "Bhavatarini Temple"],
  location: { city: "Kolkata", district: "North 24 Parganas", state: "West Bengal", country: "India", coordinates: { latitude: 22.6551, longitude: 88.3575 }},
  goddess: { name: "Bhavatarini Kali", description: "Bhavatarini, a form of Kali, is worshipped at Dakshineswar. She is known as the liberator of souls and the destroyer of evil. The idol represents her divine power and compassionate aspect." },
  bhairava: { name: "Kalabhairava", description: "As per spiritual belief, Bhairava as Kalabhairava watches over the shrine energetically, though no direct shrine is inside the complex." },
  bodyPart: "Though not part of the classical 51 Shakti Peethas by mythology, the temple is often spiritually linked due to its intense Shakti presence and worship of Kali.",
  templeSignificance: "This temple became globally renowned due to the spiritual presence of Sri Ramakrishna Paramahamsa, who served here as priest. It is considered one of the holiest Kali temples in India and has strong spiritual influence.",
  mainAttractions: [
    "Main shrine of Bhavatarini Kali",
    "Twelve Shiva temples in a row",
    "Radha-Krishna Temple",
    "Panchavati – meditation garden used by Ramakrishna",
    "Sacred Ganga ghat for bathing"
  ],
  festivalsCelebrated: ["Kali Puja", "Navratri", "Ramakrishna Jayanti", "Janmashtami", "Durga Puja (nearby)"],
  architecture: "Built in traditional Bengali Navaratna style by Rani Rashmoni in the mid-19th century. The temple is built along the Hooghly River, with distinct red-and-white colors and ornate domes, reflecting a blend of devotional beauty and architectural grace.",
  spiritualImportance: "Though not traditionally one of the 51 Peethas where Sati's body parts fell, this temple is spiritually connected due to its intense Shakti worship and status as a living center of Kali devotion. The teachings of Ramakrishna further elevated its global spiritual stature.",
  accessibility: { nearestRailwayStation: "Dakshineswar Railway Station (walking distance)", nearestMetroStation: "Dakshineswar Metro Station", nearestAirport: "Netaji Subhas Chandra Bose International Airport (approx. 12 km)", localTransport: "Well connected by metro, train, buses, and ferries." },
  resources: {
    officialWebsite: "https://www.dakshineswarkalitemple.org/",
    wikipedia: "https://en.wikipedia.org/wiki/Dakshineswar_Kali_Temple",
    additionalLinks: [{ title: "Ramakrishna Vivekananda Info", url: "https://www.ramakrishnavivekananda.info/temples/dakshineswar.htm" }, { title: "Temple Purohit - Dakshineswar", url: "https://www.templepurohit.com/hindu-temple/dakshineswar-kali-temple/" }],
    googleMaps: "https://www.google.com/maps/place/Dakshineswar+Kali+Temple/@22.6551,88.3575"
  },
  keywords: ["Dakshineswar Kali Temple", "Bhavatarini", "Sri Ramakrishna", "Kali Mandir Kolkata", "Navaratna temple", "Rani Rashmoni", "Ganges side Kali temple"]
};

const kireetRawData = {
  idString: "kireetkona-murshidabad",
  name: "Kireet Shakti Peetha",
  alternateNames: ["Kiriteswari Temple", "Mukteshwari Temple"],
  location: {
    village: "Kiritkona",
    district: "Murshidabad",
    state: "West Bengal",
    country: "India",
    coordinates: {
      "latitude": 24.0796,
      "longitude": 88.2802
    }
  },
  goddess: {
    name: "Kiriteswari",
    description: "Kiriteswari is a manifestation of Goddess Sati whose crown (kirita) is believed to have fallen here. She is worshipped as Mukteshwari – the giver of liberation."
  },
  bhairava: {
    name: "Sambaranand",
    description: "Sambaranand Bhairava is the guardian deity associated with this Shakti Peetha, though his temple is not prominently marked in the modern site."
  },
  bodyPart: "Crown (Kirita)",
  templeSignificance: "Kireet Shakti Peetha is one of the 51 sacred sites where parts of Sati's body are said to have fallen. The name originates from 'kirita' meaning crown. It is one of the oldest temples in Bengal and attracts devotees seeking moksha (liberation).",
  mainAttractions: [
    "Main shrine of Goddess Kiriteswari",
    "Peaceful rural ambiance near Bhagirathi river",
    "Annual Kiriteswari Mela"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Navratri",
    "Kali Puja",
    "Kiriteswari Mela (local fair)"
  ],
  architecture: "The current structure is a reconstruction of the original temple destroyed in the past. The temple is simple in architecture with a central sanctum and red laterite finish. The idol of the goddess is an unshaped stone smeared with sindoor, worshipped as Kiriteswari.",
  spiritualImportance: "As one of the 51 Peethas, Kireet holds great spiritual value. The temple is also counted among the '51 Siddha Peethas' in Tantric traditions. Locals and spiritual seekers come to seek blessings for inner liberation and fulfillment.",
  accessibility: {
    nearestRailwayStation: "Murshidabad Railway Station (approx. 19 km)",
    nearestAirport: "Netaji Subhas Chandra Bose International Airport, Kolkata (approx. 210 km)",
    localTransport: "Accessible by road from Berhampore and Murshidabad; local buses and taxis available."
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Kiriteswari_Temple",
    officialListing: "https://murshidabad.gov.in/tourist-place/kiriteswari-temple/",
    additionalLinks: [
      { title: "Temple Purohit - Kiriteswari", url: "https://www.templepurohit.com/hindu-temple/kiriteswari-temple-murshidabad/" },
      { title: "Hindu Jagruti - Kiriteswari", url: "https://www.hindujagruti.org/hinduism/knowledge/article/kiriteswari-temple-west-bengal.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Kiriteswari+Temple/@24.0796,88.2802"
  },
  keywords: [
    "Kireet Shakti Peetha",
    "Kiriteswari Temple",
    "Mukteshwari",
    "Shakti Peethas of West Bengal",
    "Crown of Sati",
    "Sambaranand Bhairava",
    "Murshidabad temples"
  ]
};

const bahulaRawData = {
  idString: "bahula-ketugram",
  name: "Bahula Shakti Peetha",
  alternateNames: ["Bahula Temple"],
  location: {
    village: "Ketugram",
    district: "Burdwan (Bardhaman)",
    state: "West Bengal",
    country: "India",
    coordinates: {
      "latitude": 23.6420,
      "longitude": 87.9408
    }
  },
  goddess: {
    name: "Bahula",
    description: "Goddess Bahula is a manifestation of Sati. The left arm of Sati is believed to have fallen here. The deity is revered as the nourisher and benevolent mother."
  },
  bhairava: {
    name: "Bhiruk",
    description: "Bhairava Bhiruk is the protector deity of this Shakti Peetha and is worshipped alongside Goddess Bahula."
  },
  bodyPart: "Left Arm",
  templeSignificance: "Bahula Shakti Peetha is one of the 51 sacred sites associated with the goddess Sati. It is said that her left arm fell at this site, making it a spiritually potent location for devotees seeking divine nourishment and protection.",
  mainAttractions: [
    "Temple of Goddess Bahula",
    "Idol of Bhairava Bhiruk",
    "Peaceful countryside ambiance in Ketugram"
  ],
  festivalsCelebrated: [
    "Navratri",
    "Durga Puja",
    "Kartik Purnima",
    "Bahula Utsav (local celebration)"
  ],
  architecture: "The temple is modest and traditionally designed. It maintains a rustic charm typical of Bengal’s sacred sites, with the sanctum sanctorum housing the goddess in a stone form. The temple surroundings are lush and tranquil.",
  spiritualImportance: "This Peetha is particularly known for its emphasis on nourishment, fertility, and care. Many childless couples visit to seek blessings. Its rural setting adds to its spiritual serenity and makes it a favorite among meditators and seekers.",
  accessibility: {
    nearestRailwayStation: "Katwa Railway Station (approx. 15 km)",
    nearestAirport: "Netaji Subhas Chandra Bose International Airport, Kolkata (approx. 150 km)",
    localTransport: "Available via road through Ketugram; autos and private taxis commonly used."
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas#List_of_51_Shakti_Peethas",
    officialListing: "https://purba-bardhaman.gov.in/tourism/",
    additionalLinks: [
      { title: "Temple Purohit - Bahula Shakti Peetha", url: "https://www.templepurohit.com/hindu-temple/bahula-shakti-peetha-west-bengal/" },
      { title: "Vedicfeed - Bahula Shakti Peeth", url: "https://vedicfeed.com/bahula-shakti-peeth-west-bengal/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Bahula+Temple/@23.6420,87.9408"
  },
  keywords: [
    "Bahula Shakti Peetha",
    "Ketugram Shakti Peeth",
    "Left Arm of Sati",
    "Bhiruk Bhairava",
    "Shakti Peethas in West Bengal",
    "Bahula Temple"
  ]
};

const utkalaRawData = {
  idString: "varahi-peetha-jajpur",
  name: "Utkala Shakti Peetha",
  alternateNames: ["Viraja Kshetra", "Viraja Devi Temple"],
  location: {
    village: "Jajpur",
    district: "Jajpur",
    state: "Odisha",
    country: "India",
    coordinates: {
      "latitude": 20.8540,
      "longitude": 86.3384
    }
  },
  goddess: {
    name: "Viraja (Utkala)",
    description: "Devi Viraja, also known as Utkala, is the presiding deity of this Shakti Peetha. According to the belief, the navel of Sati fell at this location. She is considered the embodiment of purity and fierce protection."
  },
  bhairava: {
    name: "Jagannath",
    description: "Lord Jagannath, in his fierce Bhairava form, is associated with this Peetha as the protector and consort of Devi Viraja."
  },
  bodyPart: "Navel (Nabhi)",
  templeSignificance: "The Utkala Shakti Peetha at Jajpur is revered as one of the most spiritually significant Shakti Peethas, where the navel of Sati is believed to have fallen. It has been a key center for Shakta worship and tantric practices for centuries.",
  mainAttractions: [
    "Main shrine of Devi Viraja",
    "Jagannath temple nearby",
    "Holy Baitarani River",
    "Historic shrines within the Jajpur complex"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Navaratri",
    "Chaitra Parba",
    "Kartik Purnima"
  ],
  architecture: "The temple follows the classic Kalinga architectural style with an intricately carved stone spire (shikhara), sanctum, and jagamohana. The sanctum houses the unique idol of Devi Viraja depicted in a sitting posture, slaying Mahishasura.",
  spiritualImportance: "This Peetha is a major Shakta pilgrimage site and was once known as 'Biraja Kshetra'. It is mentioned in various Puranas and tantric texts. The temple complex also serves as an important cremation and spiritual purification site.",
  accessibility: {
    nearestRailwayStation: "Jajpur Keonjhar Road (approx. 35 km)",
    nearestAirport: "Biju Patnaik International Airport, Bhubaneswar (approx. 100 km)",
    localTransport: "Buses, taxis, and auto-rickshaws from Jajpur town"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Viraja_Temple",
    officialListing: "https://jajpur.nic.in/tourist-place/viraja-temple/",
    additionalLinks: [
      { title: "Temple Purohit - Viraja Temple", url: "https://www.templepurohit.com/hindu-temple/viraja-temple-jajpur-odisha/" },
      { title: "Vedicfeed - Utkala Viraja Devi", url: "https://vedicfeed.com/utkala-viraja-devi-shakti-peetha-odisha/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Viraja+Temple/@20.8540,86.3384"
  },
  keywords: [
    "Utkala Shakti Peetha",
    "Viraja Devi",
    "Navel of Sati",
    "Viraja Temple Jajpur",
    "Shakti Peethas of Odisha",
    "Jagannath Bhairava"
  ]
};

const ambajiRawData = {
  idString: "ambaji-gujarat",
  name: "Ambaji Shakti Peetha",
  alternateNames: ["Arasur Shakti Peetha", "Ambaji Temple"],
  location: {
    village: "Ambaji",
    district: "Banaskantha",
    state: "Gujarat",
    country: "India",
    coordinates: {
      "latitude": 24.3335,
      "longitude": 72.8479
    }
  },
  goddess: {
    name: "Ambaji (Arasuri Ambaji)",
    description: "Devi Ambaji, revered as the Supreme Shakti, is worshipped here in her formless and eternal aspect. No idol is present in the sanctum, instead a sacred symbol called 'Shree Yantra' is worshipped."
  },
  bhairava: {
    name: "Batuk Bhairav",
    description: "Batuk Bhairav is the fierce form of Shiva associated with Ambaji as her divine consort and guardian of the Peetha."
  },
  bodyPart: "Heart of Sati",
  templeSignificance: "Ambaji Temple is one of the most sacred Shakti Peethas where the heart of Goddess Sati is believed to have fallen. The temple is located on the Arasur Hill and is a major center of pilgrimage in Gujarat and across India.",
  mainAttractions: [
    "The Shree Yantra in the sanctum (no idol)",
    "Gabbar Hill (original location of Shakti Peetha)",
    "Light and Sound Show at Gabbar",
    "Annual Bhadrapad fair"
  ],
  festivalsCelebrated: [
    "Bhadrapad Ambaji Mela",
    "Navaratri Garba",
    "Purnima Yatras",
    "Diwali"
  ],
  architecture: "Built in the Nagara style of temple architecture, the temple features intricately carved marble pillars and domes. The sanctum houses no image but the sacred geometric diagram—Shree Yantra—etched on a golden plate.",
  spiritualImportance: "Ambaji is a vital Shakti Peetha and an Adi Shakti center. The temple does not have an idol, which symbolizes the formless nature of the divine feminine. The energy of the temple is considered extremely powerful, and lakhs of devotees undertake foot pilgrimages (parikrama) to reach it.",
  accessibility: {
    nearestRailwayStation: "Abu Road (approx. 22 km)",
    nearestAirport: "Sardar Vallabhbhai Patel International Airport, Ahmedabad (approx. 180 km)",
    localTransport: "Regular buses, private taxis, and jeeps available from Abu Road and Ahmedabad"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Ambaji",
    officialListing: "https://banaskantha.nic.in/tourist-place/shree-ambaji-temple/",
    additionalLinks: [
      { title: "AmbajiTemple.in", url: "https://ambajitemple.in/" },
      { title: "Temple Purohit - Ambaji Temple", url: "https://www.templepurohit.com/hindu-temple/ambaji-temple-gujarat/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Shree+Ambaji+Temple/@24.3335,72.8479"
  },
  keywords: [
    "Ambaji Shakti Peetha",
    "Arasur Shakti Peeth",
    "Heart of Sati",
    "Shree Yantra Temple",
    "Ambaji Temple Gujarat",
    "Gabbar Hill",
    "Shakti Temples of India"
  ]
};

const sharadaRawData = {
  idString: "sharada-kashmir",
  name: "Sharada Peetha",
  alternateNames: ["Sharada Temple", "Sharada Devi Temple", "Sharada Shakti Peetha"],
  location: {
    village: "Shardi",
    district: "Neelum Valley",
    state: "Azad Kashmir",
    country: "Pakistan-administered Kashmir",
    coordinates: {
      "latitude": 34.8056,
      "longitude": 74.1421
    }
  },
  goddess: {
    name: "Sharada (Saraswati)",
    description: "Sharada Devi is the Goddess of knowledge, wisdom, learning, music, and arts. At this sacred site, she is worshipped as the Supreme Embodiment of divine intelligence and Vedic wisdom."
  },
  bhairava: {
    name: "Shiv Bhairav",
    description: "Lord Shiva in the fierce Bhairava form is associated with this Peetha, protecting the sacred wisdom and spiritual sanctity of the site."
  },
  bodyPart: "Right hand of Sati",
  templeSignificance: "Sharada Peetha was one of the most revered learning centers and temples in ancient India, considered the cradle of Kashmiri Shaivism and Sanskrit learning. It was a major center of pilgrimage and scholarship in classical times.",
  mainAttractions: [
    "Ancient temple ruins with Indo-Greek architecture",
    "Sharada script origin site",
    "Sharada spring nearby considered sacred",
    "Remains of the Sharada university (now lost)"
  ],
  festivalsCelebrated: [
    "Vasant Panchami (Goddess of Learning)",
    "Navaratri (as Devi Sharada)"
  ],
  architecture: "The temple was built in classic Kashmiri stone architecture with grand shikhara and pillared halls. Though now in ruins, its structure still echoes its ancient scholarly and spiritual glory.",
  spiritualImportance: "Sharada Peetha is considered one of the holiest Shakti Peethas and also one of the earliest universities of the Indian subcontinent. It attracted scholars from as far as Central Asia, and Adi Shankaracharya is believed to have visited here. It is a major symbol of Goddess Saraswati’s divine presence.",
  accessibility: {
    currentStatus: "Located in Pakistan-administered Kashmir; access is highly restricted",
    nearestTown: "Sharda (in Neelum Valley)",
    localTransport: "No open access from Indian side; reachable from Muzaffarabad under controlled conditions (requires permit and is largely inaccessible to Indian citizens)",
    nearestRailwayStation: "",
    nearestAirport: ""
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Sharda_Peeth",
    officialWebsite: "https://www.worldhistory.org/Sharada_Peeth/",
    additionalLinks: [
      { title: "India.com - Sharda Peeth", url: "https://www.india.com/news/india/sharda-peeth-all-you-need-to-know-about-historic-temple-of-learning-in-pok-3613090/" },
      { title: "OpIndia - Sharda Peeth", url: "https://www.opindia.com/2022/06/ancient-sharda-peeth-temple-in-pok-kashmir-shakti-peeth-saraswati/" }
    ],
    googleMaps: "https://www.google.com/maps/place/34.8056,74.1421"
  },
  keywords: [
    "Sharada Peetha",
    "Shakti Peeth of Knowledge",
    "Saraswati Temple",
    "Ancient Indian University",
    "Sharada script origin",
    "Kashmiri Shaivism",
    "Temple in PoK",
    "Right Hand of Sati"
  ]
};

const sugandhaRawData = {
  idString: "sugandha-shikarpur-barisal",
  name: "Sugandha Shakti Peetha",
  alternateNames: ["Shikhandakali Temple", "Sugandha Temple"],
  location: {
    village: "Shikarpur (near Barisal)",
    district: "Barisal District",
    state: "Southern Bangladesh",
    country: "Bangladesh",
    coordinates: {
      "latitude": 22.7989,
      "longitude": 90.3224
    }
  },
  goddess: {
    name: "Sunanda",
    description: "Sunanda Devi is worshipped here as a form of Shakti. She represents the fragrance of divine devotion and inner peace, symbolizing prosperity and serenity."
  },
  bhairava: {
    name: "Traimbak",
    description: "Traimbak is the fierce and protective form of Lord Shiva who guards this sacred Shakti Peetha and supports the energy of the divine feminine at this site."
  },
  bodyPart: "Nose of Sati",
  templeSignificance: "This sacred site is where the nose of Goddess Sati is believed to have fallen. It is revered among the 51 Shakti Peethas and holds cultural and religious significance in the region.",
  mainAttractions: [
    "Main sanctum dedicated to Sunanda Devi",
    "Traditional Bengali temple architecture",
    "Sacred rituals performed during major festivals",
    "Calm surroundings and spiritual energy"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Navaratri",
    "Kartik Purnima"
  ],
  architecture: "The temple follows classical Bengali Hindu temple architecture, with intricate carvings, a modest sanctum, and a peaceful courtyard. Though less monumental than others, it holds deep devotional value.",
  spiritualImportance: "Sugandha Shakti Peetha is spiritually important as it connects devotees to the subtle and pure aspect of the divine mother. Pilgrims visit to seek inner peace, healing, and blessings of clarity and wisdom.",
  accessibility: {
    currentStatus: "Accessible within Bangladesh",
    nearestTown: "Barisal",
    localTransport: "Well connected by road from Barisal town; nearest airport is Barisal Airport",
    nearestRailwayStation: "",
    nearestAirport: "Barisal Airport"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas#Sugandha",
    officialWebsite: "https://www.hindujagruti.org/hinduism/knowledge/article/sugandha-shaktipeeth.html",
    additionalLinks: [
      { title: "Rgyan - Sugandha Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/sugandha-shakti-peeth" },
      { title: "Temple Purohit - Sugandha Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/sugandha-shakti-peeth-bangladesh/" }
    ],
    googleMaps: "https://www.google.com/maps/place/22.7989,90.3224"
  },
  keywords: [
    "Sugandha Shakti Peetha",
    "Sunanda Devi",
    "Shakti Peeth Bangladesh",
    "Sati's Nose",
    "Traimbak Bhairava",
    "Barisal Temple",
    "Ancient Hindu Temple in Bangladesh"
  ]
};

const chandranathRawData = {
  idString: "chandranath-sitakunda-chittagong",
  name: "Chandranath Shakti Peetha",
  alternateNames: ["Chandranath Temple", "Sitakunda Shakti Peeth"],
  location: {
    village: "Sitakunda",
    district: "Chittagong",
    state: "Chattogram Division",
    country: "Bangladesh",
    coordinates: {
      "latitude": 22.6216,
      "longitude": 91.6783
    }
  },
  goddess: {
    name: "Bhawani",
    description: "Bhawani is worshipped here as the presiding form of Shakti. She represents the fierce yet compassionate mother goddess, embodying cosmic strength and nurturing energy."
  },
  bhairava: {
    name: "Chandrashekhara",
    description: "Chandrashekhara, meaning 'The One who wears the Moon', is a serene and powerful form of Lord Shiva who watches over the Shakti Peetha and guides devotees to wisdom."
  },
  bodyPart: "Right arm of Sati",
  templeSignificance: "It is believed that the right arm of Sati fell at Chandranath Hill, making this temple one of the highly revered Shakti Peethas. The temple is situated atop a hill and offers panoramic views, attracting both pilgrims and trekkers.",
  mainAttractions: [
    "Sacred hilltop shrine of Bhawani Devi",
    "Trekking route through lush greenery",
    "Panoramic views of the Bay of Bengal",
    "Natural springs and nearby waterfalls"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Shivaratri",
    "Navaratri",
    "Full Moon Days (Purnima)"
  ],
  architecture: "The temple showcases traditional architecture with a modest sanctum, surrounded by scenic nature. It is built in harmony with the rocky hill terrain and draws pilgrims for its divine presence and natural ambiance.",
  spiritualImportance: "Chandranath Shakti Peetha is not just a site of mythological significance but also a place of intense spiritual vibration. It is believed that meditation here is especially fruitful, and the climb to the temple is part of a purifying spiritual journey.",
  accessibility: {
    currentStatus: "Easily accessible via road and rail from Chittagong city",
    nearestTown: "Sitakunda",
    localTransport: "Well connected by road and train; nearest major hub is Chittagong",
    nearestRailwayStation: "",
    nearestAirport: "Chittagong International Airport"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Chandranath_Temple",
    officialWebsite: "https://www.hindujagruti.org/hinduism/knowledge/article/chandranath-shaktipeeth.html",
    additionalLinks: [
      { title: "Temple Purohit - Chandranath Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/chandranath-shakti-peeth-bangladesh/" },
      { title: "Rgyan - Chandranath Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/chandranath-shakti-peeth" }
    ],
    googleMaps: "https://www.google.com/maps/place/22.6216,91.6783"
  },
  keywords: [
    "Chandranath Shakti Peetha",
    "Chandranath Temple",
    "Sitakunda Temple",
    "Bhawani Devi",
    "Right arm of Sati",
    "Chandrashekhara Bhairava",
    "Shakti Peeth in Bangladesh",
    "Chittagong temple",
    "Hindu pilgrimage site"
  ]
};

const guhyeshwariRawData = {
  idString: "guhyeshwari-kathmandu-nepal",
  name: "Guhyeshwari Shakti Peetha",
  alternateNames: ["Guhyeshwari Temple", "Guhya Kali", "Guhya Kshetra"],
  location: {
    village: "Kathmandu",
    district: "Kathmandu",
    state: "Bagmati Province",
    country: "Nepal",
    coordinates: {
      "latitude": 27.7149,
      "longitude": 85.3445
    }
  },
  goddess: {
    name: "Mahashira",
    description: "Mahashira is the form of Goddess Shakti worshipped at Guhyeshwari. The name 'Mahashira' refers to the head of Sati that is believed to have fallen here, symbolizing divine wisdom and cosmic command."
  },
  bhairava: {
    name: "Kapali",
    description: "Kapali, a fierce form of Shiva, is the guardian Bhairava of this Shakti Peetha. He represents the transcendental force and is revered for cutting through ignorance and illusion."
  },
  bodyPart: "Hips (or Head, as per different traditions) of Sati",
  templeSignificance: "The Guhyeshwari Temple is one of the oldest and most revered Shakti Peethas. Located near the Pashupatinath Temple, it holds a powerful Tantric energy and is central to Newari and Tantric traditions in Nepal. The temple is considered especially sacred to both Hindus and Vajrayana Buddhists.",
  mainAttractions: [
    "Ancient Tantric temple dedicated to Shakti",
    "Proximity to Pashupatinath Temple",
    "Rich Newar cultural and religious practices",
    "Spiritual Tantric rituals performed daily"
  ],
  festivalsCelebrated: [
    "Dashain (Navaratri)",
    "Maha Shivaratri",
    "Teej",
    "Bala Chaturdashi"
  ],
  architecture: "The temple features traditional Nepalese pagoda-style architecture with a striking golden roof and intricate woodwork. Inside, the sanctum houses a sacred water-filled pit symbolizing the goddess’s power.",
  spiritualImportance: "Guhyeshwari is a hub of Tantric worship and esoteric practices. It is believed that meditating at this Shakti Peetha grants powerful spiritual insight and blessings from the divine mother. It holds a unique confluence of Hindu and Vajrayana Buddhist reverence.",
  accessibility: {
    currentStatus: "Well maintained and easily accessible from Kathmandu city",
    nearestTown: "Kathmandu",
    localTransport: "Located about 1 km east of Pashupatinath; accessible by road, local buses, and taxis",
    nearestRailwayStation: "",
    nearestAirport: "Tribhuvan International Airport, Kathmandu"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Guhyeshwari_Temple",
    officialWebsite: "https://nepaltraveladventure.com/guhyeshwari-temple/",
    additionalLinks: [
      { title: "Temple Purohit - Guhyeshwari Temple", url: "https://www.templepurohit.com/hindu-temple/guhyeshwari-temple-nepal/" },
      { title: "Rgyan - Guhyeshwari Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/guhyeshwari-shakti-peeth" }
    ],
    googleMaps: "https://www.google.com/maps/place/27.7149,85.3445"
  },
  keywords: [
    "Guhyeshwari Shakti Peetha",
    "Guhya Kshetra",
    "Mahashira Devi",
    "Kapali Bhairava",
    "Shakti Peeth Nepal",
    "Kathmandu temple",
    "Hindu Tantric site",
    "Vajrayana Buddhist site",
    "Pashupatinath nearby temples"
  ]
};

const srisailamRawData = {
  idString: "srisailam-bhramaramba",
  name: "Srisailam Shakti Peetha",
  alternateNames: ["Srisailam Temple", "Mallikarjuna Shakti Peetha", "Bhramaramba Devi Temple"],
  location: {
    village: "Srisailam",
    district: "Nandyal",
    state: "Andhra Pradesh",
    country: "India",
    coordinates: {
      "latitude": 16.0728,
      "longitude": 78.8686
    }
  },
  goddess: {
    name: "Bhramaramba",
    description: "Bhramaramba is the fierce and protective form of Goddess Shakti worshipped at Srisailam. She is associated with the divine bees (bhramara) who destroyed the demons and is revered for her immense power and motherly compassion."
  },
  bhairava: {
    name: "Mallikarjuna",
    description: "Mallikarjuna, one of the twelve Jyotirlingas of Lord Shiva, is the consort of Bhramaramba. Together, they represent the union of Shiva and Shakti in their most complete and harmonious form."
  },
  bodyPart: "Neck of Sati",
  templeSignificance: "Srisailam is both a Shakti Peetha and a Jyotirlinga, making it uniquely sacred. It is believed that Sati's neck fell here. The temple is nestled in the Nallamala Hills and attracts thousands of pilgrims each year for its spiritual power, natural beauty, and ancient traditions.",
  mainAttractions: [
    "Bhramaramba Devi Temple (Shakti Peeth)",
    "Mallikarjuna Jyotirlinga Shrine",
    "Sacred Pathala Ganga (Krishna River)",
    "Tribal Museum and Ropeway",
    "Sikharam viewpoint"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Maha Shivaratri",
    "Kumbhothsavam",
    "Ugadi",
    "Deepotsavam"
  ],
  architecture: "The temple complex is a blend of Vijayanagara and Dravidian styles with intricately carved gopurams, massive walls, and beautifully adorned sanctums. The Bhramaramba shrine is located adjacent to the Mallikarjuna Jyotirlinga.",
  spiritualImportance: "Being both a Shakti Peetha and Jyotirlinga, Srisailam is considered one of the most powerful pilgrimage centers. The temple is also known for its role in Shakta, Shaiva, and Tantric traditions. Pilgrims believe that visiting the shrine grants liberation and protection from evil.",
  accessibility: {
    currentStatus: "Major pilgrimage site with high annual footfall",
    nearestTown: "Srisailam",
    localTransport: "Well-connected by road from Hyderabad and Kurnool. Nearest railway station is Markapur Road; frequent buses available",
    nearestRailwayStation: "Markapur Road",
    nearestAirport: "Rajiv Gandhi International Airport, Hyderabad"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Srisailam",
    officialWebsite: "https://www.srisailamonline.com/",
    additionalLinks: [
      { title: "Hindu Pedia - Shriparvata Shakti Peetha", url: "https://www.hindupedia.com/en/Shriparvata_Shakti_Peetha"},
      { title: "Rgyan - Srisailam Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/srisailam-shakti-peeth"},
      { title: "Temple Purohit - Srisailam", url: "https://templepurohit.com/hindu-temple/sri-bramaramba-mallikarjuna-swamy-temple-srisailam/"}
    ],
    googleMaps: "https://www.google.com/maps/place/16.0728,78.8686"
  },
  keywords: [
    "Srisailam Shakti Peetha",
    "Bhramaramba Devi",
    "Mallikarjuna Jyotirlinga",
    "Neck of Sati",
    "Andhra Pradesh temple",
    "Shakti Peeth and Jyotirlinga",
    "Nallamala hills pilgrimage",
    "Ancient Shiva temple"
  ]
};

const alopiDeviRawData = {
  idString: "alopi-devi-prayagraj",
  name: "Alopi Devi Shakti Peetha",
  alternateNames: ["Alopi Mata Mandir", "Alopi Devi Temple"],
  location: {
    village: "Alopibagh",
    district: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    country: "India",
    coordinates: {
      "latitude": 25.4322,
      "longitude": 81.8463
    }
  },
  goddess: {
    name: "Alopi Devi",
    description: "Alopi Devi is worshipped as the vanishing (Alopi = disappearing) form of Shakti. The temple is unique as it does not contain any idol; instead, a wooden swing (doli) is worshipped, symbolizing the formless presence of the Goddess."
  },
  bhairava: {
    name: "Bhishan Bhairav",
    description: "Bhishan Bhairav is considered the fierce guardian of the sacred energy at this site. His presence ensures protection and balance in the cosmic order of this Shakti Peetha."
  },
  bodyPart: "Last part of Sati’s body (disappeared here)",
  templeSignificance: "The Alopi Devi Temple is believed to be the spot where the final part of Sati’s body disappeared, hence the name 'Alopi'. The temple is highly revered in the region and holds deep cultural and mythological significance, especially during the Kumbh Mela.",
  mainAttractions: [
    "Sacred Doli (wooden swing)",
    "Proximity to Sangam (confluence of Ganga, Yamuna, Saraswati)",
    "Association with ancient legends and Mahabharata"
  ],
  festivalsCelebrated: [
    "Navratri",
    "Durga Puja",
    "Kumbh Mela",
    "Ram Navami"
  ],
  architecture: "The temple has a traditional North Indian architectural style with a central sanctum housing the doli. The structure is simple but spiritually significant, often visited by large numbers of devotees, especially during Navratri and Kumbh Mela.",
  spiritualImportance: "Alopi Devi is worshipped as the omnipresent divine force. The absence of a statue reinforces the belief in the transcendental, formless energy of the Goddess. It’s a major Shakti Peetha and holds a special place in folk worship and regional spiritual practice.",
  accessibility: {
    currentStatus: "Highly accessible and well-visited temple",
    nearestTown: "Prayagraj (Allahabad)",
    localTransport: "Well connected by road, rail, and air; located near Triveni Sangam and within the city limits of Prayagraj",
    nearestRailwayStation: "Prayagraj Junction",
    nearestAirport: "Prayagraj Airport"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Alopi_Devi_Mandir",
    officialWebsite: "https://prayagraj.nic.in/tourist-place/alopi-devi-temple/",
    additionalLinks: [
      { title: "Rgyan - Alopi Devi Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/alopi-devi-shakti-peeth"},
      { title: "Temple Purohit - Alopi Devi Temple", url: "https://www.templepurohit.com/hindu-temple/alopi-devi-temple/"}
    ],
    googleMaps: "https://www.google.com/maps/place/25.4322,81.8463"
  },
  keywords: [
    "Alopi Devi Shakti Peetha",
    "Alopi Mata Mandir",
    "Prayagraj Shakti temple",
    "Disappeared body part of Sati",
    "Formless goddess worship",
    "Uttar Pradesh Shakti Peeth",
    "Alopibagh temple",
    "Sacred doli swing"
  ]
};

const ekaveeraRawData = {
  idString: "sri-ekaveera-devi-mahur",
  name: "Sri Ekaveera Devi Shakti Peetha",
  alternateNames: ["Ekaveerika Shakti Peetha", "Mahur Shakti Peeth", "Ekaveera Mata Mandir"],
  location: {
    village: "Mahur",
    district: "Nanded",
    state: "Maharashtra",
    country: "India",
    coordinates: {
      "latitude": 19.8396,
      "longitude": 77.8594
    }
  },
  goddess: {
    name: "Ekaveera Devi",
    description: "Ekaveera Devi, an aspect of Shakti, is believed to be the fierce and singular embodiment of divine feminine energy. She is worshipped with deep reverence in Mahur and is also considered the sister of Renuka Devi (mother of Parashurama)."
  },
  bhairava: {
    name: "Vateshwar Bhairava",
    description: "Vateshwar Bhairava serves as the guardian deity of this sacred Shakti Peetha, balancing the energy of Ekaveera Devi with his fierce and protective presence."
  },
  bodyPart: "Left hand of Sati",
  templeSignificance: "Sri Ekaveera Devi temple in Mahur is one of the 51 Shakti Peethas where Sati’s left hand is believed to have fallen. It is also a significant pilgrimage site associated with Dattatreya worship, making it sacred in both Shaktism and Datta Sampradaya traditions.",
  mainAttractions: [
    "Sacred shrine of Ekaveera Devi",
    "Dattatreya Temple nearby",
    "Renuka Devi Temple in the vicinity",
    "Hilltop location with panoramic views"
  ],
  festivalsCelebrated: [
    "Navratri",
    "Dattatreya Jayanti",
    "Chaitra Purnima",
    "Maha Shivaratri"
  ],
  architecture: "The temple has a serene hilltop setting with traditional stone architecture. It is surrounded by forests and natural beauty. Pilgrims often undertake a trek to reach the sanctum of the Goddess, enhancing the spiritual experience.",
  spiritualImportance: "This Shakti Peetha is one of the rare temples where Shakti and Datta traditions blend. Devotees believe worshiping Ekaveera here bestows mental clarity, protection from fear, and spiritual strength. It is also spiritually linked to Parashurama’s lineage through Renuka Devi.",
  accessibility: {
    currentStatus: "Pilgrimage site with moderate accessibility",
    nearestTown: "Nanded",
    localTransport: "Accessible by road from Nanded (130 km). Nearest rail and airport at Nanded.",
    nearestRailwayStation: "Nanded",
    nearestAirport: "Nanded Airport"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Mahur,_Maharashtra",
    officialWebsite: "https://nanded.gov.in/tourist-place/mahurgad-ekaveera-temple/",
    additionalLinks: [
      { title: "Temple Purohit - Sri Ekaveera Devi Temple", url: "https://www.templepurohit.com/hindu-temple/sri-ekaveera-devi-temple/"},
      { title: "Rgyan - Ekaveera Devi Mahur", url: "https://rgyan.com/en/shakti-peeths/ekaveera-devi-mahur"}
    ],
    googleMaps: "https://www.google.com/maps/place/19.8396,77.8594"
  },
  keywords: [
    "Ekaveera Devi Shakti Peetha",
    "Mahur Shakti Peetha",
    "Ekaveerika Mata Temple",
    "Datta Peeth Maharashtra",
    "Shakti Peeth in Maharashtra",
    "Left hand of Sati",
    "Hilltop goddess temple"
  ]
};

const jaintiaRawData = {
  idString: "jaintia-meghalaya",
  name: "Jaintia Shakti Peetha",
  alternateNames: ["Jayanti Shakti Peeth", "Nartiang Durga Temple", "Jayantipura Shakti Peetha"],
  location: {
    village: "Nartiang",
    district: "West Jaintia Hills",
    state: "Meghalaya",
    country: "India",
    coordinates: {
      "latitude": 25.6702,
      "longitude": 92.2391
    }
  },
  goddess: {
    name: "Jayanti Devi",
    description: "Jayanti Devi is a powerful aspect of Adi Shakti worshipped in this Shakti Peetha. She represents divine strength and benevolence, and is venerated with deep devotion by locals and pilgrims alike."
  },
  bhairava: {
    name: "Ksheer Khandak Bhairava",
    description: "Ksheer Khandak is the Bhairava guardian of Jayanti Devi, symbolizing fierce protection and the balancing energy to the goddess’s power."
  },
  bodyPart: "Left thigh of Sati",
  templeSignificance: "Jaintia Shakti Peetha, located in Meghalaya, is where Sati’s left thigh is believed to have fallen. It is one of the very few Shakti Peethas located in the Northeast and holds immense historical and spiritual significance. The temple is associated with the ancient Jaintia Kingdom.",
  mainAttractions: [
    "Nartiang Durga Temple",
    "Ancient monoliths of the Jaintia kings",
    "Traditional Khasi architecture",
    "Annual Durga Puja with tribal rituals"
  ],
  festivalsCelebrated: [
    "Navratri",
    "Durga Puja (in local tribal tradition)",
    "Shakti Utsav"
  ],
  architecture: "The temple blends Hindu and indigenous Khasi architectural styles. Originally built by the Jaintia kings, the temple has a sloped tin roof and is located on a small hill. A banana plant is used as a sacred representation of the goddess during festivals.",
  spiritualImportance: "This Shakti Peetha is significant for its deep integration of tribal and Hindu worship traditions. The spiritual energy is believed to be intense, and the goddess is worshipped in both anthropomorphic and symbolic forms. Pilgrims believe she grants victory over obstacles and fulfillment of wishes.",
  accessibility: {
    currentStatus: "Active pilgrimage site with local significance",
    nearestTown: "Jowai",
    localTransport: "Easily accessible by road from Shillong (60 km). Nearest airport at Shillong or Guwahati.",
    nearestRailwayStation: "Shillong",
    nearestAirport: "Shillong Airport or Guwahati Airport"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Nartiang_Durga_Temple",
    officialWebsite: "https://megartsculture.gov.in/nartiang-durga-temple/",
    additionalLinks: [
      { title: "Rgyan - Jayanti Devi Nartiang", url: "https://rgyan.com/en/shakti-peeths/jayanti-devi-nartiang-meghalaya"},
      { title: "EastMojo - Nartiang Durga Temple", url: "https://www.eastmojo.com/meghalaya/2021/10/12/nartiang-durga-temple-meghalayas-own-shakti-peeth/"},
      { title: "Temple Purohit - Jayanti Shakti Peetha", url: "https://www.templepurohit.com/hindu-temple/jayanti-shakti-peetha/"}
    ],
    googleMaps: "https://www.google.com/maps/place/25.6702,92.2391"
  },
  keywords: [
    "Jaintia Shakti Peeth",
    "Jayanti Devi",
    "Nartiang Durga Temple",
    "Meghalaya Shakti Peetha",
    "Sati left thigh",
    "Ksheer Khandak Bhairava",
    "Tribal Durga worship"
  ]
};

const shuchiRawData = {
  idString: "shuchi-kanyakumari",
  name: "Shuchi Shakti Peetha",
  alternateNames: ["Suchindram Shakti Peetha", "Shuchi Devi Temple"],
  location: {
    village: "Suchindram",
    district: "Kanyakumari",
    state: "Tamil Nadu",
    country: "India",
    coordinates: {
      "latitude": 8.1575,
      "longitude": 77.4698
    }
  },
  goddess: {
    name: "Narayani (Shuchi Devi)",
    description: "Shuchi Devi, worshipped as Narayani, is a radiant and purifying form of the Goddess. She is associated with spiritual cleanliness and inner transformation, and is revered for granting blessings of peace and virtue."
  },
  bhairava: {
    name: "Sangameshwar",
    description: "Sangameshwar Bhairava is the guardian of this Peetha, representing the sacred union of divine energies. He is known for bestowing strength and fearlessness upon devotees."
  },
  bodyPart: "Upper teeth of Sati",
  templeSignificance: "The Shuchi Shakti Peetha is believed to be the sacred spot where Sati’s upper teeth fell. Located in Suchindram, near the southern tip of India, it holds unique significance as a confluence of Shaivism, Vaishnavism, and Shaktism.",
  mainAttractions: [
    "Thanumalayan Temple (also believed to house the Peetha)",
    "Giant Anjaneya (Hanuman) statue",
    "Musical pillars and exquisite carvings",
    "Spiritual importance as a Trimurti shrine"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Masi Magam",
    "Chithirai Festival",
    "Shivaratri"
  ],
  architecture: "The temple reflects classic Dravidian architecture with tall gopurams, intricate stone carvings, musical pillars, and a large inner sanctum. It is unique for being dedicated to the Trimurti (Shiva, Vishnu, and Brahma) and the goddess as Narayani.",
  spiritualImportance: "Shuchi Peetha is a sacred confluence of purity and spiritual wisdom. Pilgrims believe that bathing in the nearby tank and worshipping the goddess here removes sins and grants inner sanctity.",
  accessibility: {
    currentStatus: "Active temple, major pilgrimage site in Tamil Nadu",
    nearestTown: "Nagercoil",
    localTransport: "Accessible via road and rail; nearest airport is Trivandrum (Thiruvananthapuram International Airport).",
    nearestRailwayStation: "Nagercoil",
    nearestAirport: "Trivandrum (Thiruvananthapuram International Airport)"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Suchindram",
    officialWebsite: "https://www.tnarch.gov.in/temples/kanyakumari/suchindram-thanumalayan-temple",
    additionalLinks: [
      { title: "Hindupedia - Suchindram", url: "https://www.hindupedia.com/en/Suchindram"},
      { title: "Rgyan - Shuchi Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/shuchi-shakti-peeth-suchindram"},
      { title: "Temple Purohit - Shuchi Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/shuchi-shakti-peeth/"}
    ],
    googleMaps: "https://www.google.com/maps/place/8.1575,77.4698"
  },
  keywords: [
    "Shuchi Shakti Peetha",
    "Suchindram Temple",
    "Sati upper teeth",
    "Narayani Devi",
    "Sangameshwar Bhairava",
    "Kanyakumari Shakti Peetha",
    "Thanumalayan Temple"
  ]
};

const ramgiriRawData = {
  idString: "ramgiri-chitrakoot",
  name: "Ramgiri Shakti Peetha",
  alternateNames: ["Ramgiri Shaktipitha", "Jogulamba Temple"],
  location: {
    village: "Alampur",
    district: "Jogulamba Gadwal",
    state: "Telangana",
    country: "India",
    coordinates: {
      "latitude": 15.8820,
      "longitude": 78.1130
    }
  },
  goddess: {
    name: "Jogulamba (Ramgiri Devi)",
    description: "Goddess Jogulamba, identified as Ramgiri Devi in the Shakti Peetha tradition, is considered a fierce form of Shakti representing yogic power and destruction of evil. She is one of the 18 Maha Shakti Peethas and highly revered in southern India."
  },
  bhairava: {
    name: "Balabhadra",
    description: "Lord Balabhadra serves as the Bhairava protector of this Shakti Peetha. He signifies strength and safeguards the energy of the Peetha while guiding devotees on the path of dharma."
  },
  bodyPart: "Upper teeth of Sati",
  templeSignificance: "Ramgiri Shakti Peetha is believed to be the place where Sati’s upper teeth fell. The site is known today as the Jogulamba Temple in Alampur. It is a powerful tantric site and one of the few Shakti Peethas in Telangana.",
  mainAttractions: [
    "Jogulamba Temple with fierce iconography",
    "Group of Nava Brahma Temples",
    "Tungabhadra River banks",
    "Dravidian temple ruins and history"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Maha Shivaratri",
    "Karthika Masam",
    "Jogulamba Jatara"
  ],
  architecture: "The temple is a mix of Chalukya and Vijayanagara architectural styles. The current structure was reconstructed after destruction by invaders and now includes modern temple features preserving ancient sanctity.",
  spiritualImportance: "The Peetha is a center for tantric worship and yogic practice. Devotees believe that the energy here can awaken inner consciousness and protect from harmful influences.",
  accessibility: {
    currentStatus: "Active temple with growing pilgrimage importance",
    nearestTown: "Kurnool (Andhra Pradesh, across the river)",
    localTransport: "Well-connected by road and rail; closest airport is Rajiv Gandhi International Airport, Hyderabad.",
    nearestRailwayStation: "Kurnool (Andhra Pradesh, across the river)",
    nearestAirport: "Rajiv Gandhi International Airport, Hyderabad"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Jogulamba_temple",
    officialWebsite: "https://www.asitelangana.in/alampur-jogulamba-temple",
    additionalLinks: [
      { title: "Temple Purohit - Jogulamba Temple", url: "https://www.templepurohit.com/hindu-temple/jogulamba-temple-alampur/"},
      { title: "Rgyan - Ramgiri Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/ramgiri-shakti-peeth-jogulamba-temple"},
      { title: "Hindupedia - Ramgiri Shakti Peetha", url: "https://www.hindupedia.com/en/Ramgiri_Shakti_Peetha"}
    ],
    googleMaps: "https://www.google.com/maps/place/15.8820,78.1130"
  },
  keywords: [
    "Ramgiri Shakti Peetha",
    "Jogulamba Temple",
    "Shakti Peeth Telangana",
    "Sati upper teeth",
    "Balabhadra Bhairava",
    "Alampur temples",
    "Nava Brahma temples"
  ]
};

const shriparvataRawData = {
  idString: "shriparvata-ladakh",
  name: "Shriparvata Shakti Peetha",
  alternateNames: ["Shriparvat Shakti Peeth", "Shrisailam", "Sri Parvata"],
  location: {
    village: "Srisailam",
    district: "Nandyal",
    state: "Andhra Pradesh",
    country: "India",
    coordinates: {
      "latitude": 16.0728,
      "longitude": 78.8694
    }
  },
  goddess: {
    name: "Shri Sundari",
    description: "Goddess Sundari, worshipped here as a manifestation of Shakti, is venerated at Shriparvata Shakti Peetha. She represents beauty, grace, and cosmic energy. This peetha is associated with the inner serenity of the divine feminine."
  },
  bhairava: {
    name: "Sundarananda",
    description: "Bhairava Sundarananda is the divine consort and guardian deity of this Shakti Peetha. He embodies bliss, knowledge, and masculine energy in balance with the goddess."
  },
  bodyPart: "Right anklet of Sati",
  templeSignificance: "Shriparvata, often identified with Srisailam, is one of the most sacred Shakti Peethas where the right anklet (nūpura) of Devi Sati is said to have fallen. It is believed to be a place of extreme spiritual energy and forms a twin pilgrimage along with the Jyotirlinga of Mallikarjuna.",
  mainAttractions: [
    "Sri Bhramaramba Devi Temple (Shakti Peeth)",
    "Mallikarjuna Swamy Jyotirlinga Temple",
    "Nallamala Hills and forest region",
    "Pathala Ganga on Krishna River",
    "Akkamahadevi Caves"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Maha Shivaratri Brahmotsavam",
    "Kumbh Mela (local)",
    "Chaitra Purnima"
  ],
  architecture: "The temple exhibits classic South Indian Dravidian architecture with intricate carvings, gopurams, and mandapas. It also features a unique cave-like sanctum reflecting the area's ancient yogic traditions.",
  spiritualImportance: "Shriparvata is believed to be an energy center (Shakti Kendra) where Devi resides as a healing, transformative force. Pilgrims come seeking protection, wisdom, and inner peace. The energy here is strong for tantra, mantra, and meditation practices.",
  accessibility: {
    currentStatus: "Major pilgrimage site with high annual footfall",
    nearestTown: "Srisailam",
    localTransport: "Well-connected by road from Hyderabad and Kurnool. Nearest airport: Rajiv Gandhi International Airport, Hyderabad. Helicopter services available seasonally.",
    nearestRailwayStation: "Markapur Road",
    nearestAirport: "Rajiv Gandhi International Airport, Hyderabad"
  },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Srisailam",
    officialWebsite: "https://www.srisailamonline.com/",
    additionalLinks: [
      { title: "Hindupedia - Shriparvata Shakti Peetha", url: "https://www.hindupedia.com/en/Shriparvata_Shakti_Peetha"},
      { title: "Rgyan - Shriparvata Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/shriparvata-shakti-peeth"},
      { title: "Temple Purohit - Sri Bramaramba", url: "https://templepurohit.com/hindu-temple/sri-bramaramba-mallikarjuna-swamy-temple-srisailam/"}
    ],
    googleMaps: "https://www.google.com/maps/place/16.0728,78.8694"
  },
  keywords: [
    "Shriparvata Shakti Peetha",
    "Srisailam Devi temple",
    "Shri Sundari",
    "Mallikarjuna Jyotirlinga",
    "Sati right anklet",
    "Shrisailam Shakti Peeth",
    "Nallamala Hills pilgrimage"
  ]
};

const manasaMungerRawData = {
  idString: "manasa-munger-knee",
  name: "Manasa Shakti Peetha (Munger)",
  alternateNames: ["Maa Manasa Temple Munger", "Munger Shakti Peetha"],
  location: {
    city: "Munger",
    state: "Bihar",
    country: "India",
    coordinates: { latitude: 25.3819, longitude: 86.4730 }
  },
  goddess: {
    name: "Maa Manasa",
    description: "Maa Manasa is the serpent goddess, worshipped for fertility, prosperity, and protection against snakebites. This is another site associated with her, distinct from the one in West Bengal, highlighting her regional importance."
  },
  bhairava: {
    name: "Krodhish",
    description: "Lord Krodhish is the Bhairava here, a fierce form of Shiva representing divine wrath against negativity and protection for devotees."
  },
  bodyPart: "Left Knee of Sati",
  templeSignificance: "This Peetha is believed to be where Sati's left knee fell. It's an important local shrine for Manasa worship and Shakti devotion in Bihar.",
  mainAttractions: ["Temple of Maa Manasa", "Local fairs during Nag Panchami"],
  festivalsCelebrated: ["Nag Panchami", "Manasa Puja"],
  architecture: "Traditional local temple style.",
  spiritualImportance: "Focuses on healing, protection from calamities, and agricultural prosperity.",
  accessibility: { nearestTown: "Munger", localTransport: "Accessible by road.", nearestRailwayStation: "Munger Junction", nearestAirport: "Patna Airport" },
  resources: { officialWebsite: "", wikipedia: "", additionalLinks: [], googleMaps: "" },
  keywords: ["Manasa Shakti Peetha Munger", "Munger Devi Temple", "Left Knee Sati", "Bihar Shakti Peetha"]
};

const gayaPeethaRawData = {
  idString: "gaya-peetha",
  name: "Gaya Shakti Peetha",
  alternateNames: ["Maa Mangala Gauri Temple", "Mangala Gauri Shaktipeeth", "Gaya Devi Temple"],
  location: {
    city: "Gaya",
    state: "Bihar",
    country: "India",
    coordinates: { latitude: 24.7969, longitude: 85.0037 }
  },
  goddess: {
    name: "Maa Mangala Gauri",
    description: "Maa Mangala Gauri is worshipped here as a powerful and compassionate form of Shakti. She is revered for her blessings of marital happiness, health, and overall prosperity."
  },
  bhairava: {
    name: "Sarvanand",
    description: "Lord Sarvanand is the Bhairava associated with this Peetha, symbolizing completeness, auspiciousness, and protection for devotees."
  },
  bodyPart: "Breast of Sati",
  templeSignificance: "It is believed that the breast of Goddess Sati fell at this spot, making it a powerful center of nourishment and compassion. The temple is considered one of the 18 Maha Shakti Peethas mentioned in ancient texts.",
  mainAttractions: [
    "Mangala Gauri Temple rituals",
    "Shravani Mangalwar fasts and pujas",
    "View of the Gaya hills and nearby temples"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Shravani Tuesdays (auspicious for married women)",
    "Durga Puja"
  ],
  architecture: "The temple is built in typical North Indian Nagara style, located atop the Mangala Gauri hill. It has a sanctum (garbhagriha), mandapa, and a series of steps leading to the shrine.",
  spiritualImportance: "Gaya is already a major spiritual center due to its association with Vishnupad Temple and ancestral rituals (Pind Daan). The presence of this Shakti Peetha adds a divine feminine energy to the city's spiritual aura, drawing both pilgrims and tantric practitioners.",
  accessibility: { currentStatus: "Actively visited; major pilgrimage site in Bihar", nearestTown: "Gaya (main city)", localTransport: "Well connected via Gaya Junction Railway Station and Gaya International Airport. Local transportation available to reach the temple hill.", nearestRailwayStation: "Gaya Junction", nearestAirport: "Gaya International Airport" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Mangla_Gauri_Temple",
    additionalLinks: [
      { title: "Temple Purohit - Mangala Gauri Temple", url: "https://www.templepurohit.com/hindu-temple/mangala-gauri-temple-gaya/" },
      { title: "Bihar Tourism - Mangla Gauri", url: "https://www.bihartourism.gov.in/mangla-gauri-temple" },
      { title: "Rgyan - Gaya Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/gaya-shakti-peeth" }
    ],
    googleMaps: "https://www.google.com/maps/place/Mangla+Gauri+Temple,+Gaya"
  },
  keywords: ["Gaya Shakti Peetha", "Mangala Gauri Temple", "Shakti Peeth in Bihar", "Breast of Sati", "Sarvanand Bhairava", "Hindu pilgrimage Gaya", "Shakti temples in India"]
};

const kurukshetraPeethaRawData = {
  idString: "kurukshetra-peetha",
  name: "Kurukshetra Shakti Peetha",
  alternateNames: ["Savitri Peetha", "Devi Bhadrakali Temple", "Bhadrakali Shakti Peetha"],
  location: {
    city: "Kurukshetra",
    state: "Haryana",
    country: "India",
    coordinates: { latitude: 29.9695, longitude: 76.8783 }
  },
  goddess: {
    name: "Maa Bhadrakali",
    description: "Maa Bhadrakali, a fierce and protective form of Shakti, is worshipped here. She is considered a guardian deity of Kurukshetra and is deeply revered for her protective and motherly powers."
  },
  bhairava: {
    name: "Rudra",
    description: "Lord Rudra, the fierce and transformative aspect of Shiva, is associated here as the Bhairava who protects this sacred site."
  },
  bodyPart: "Ankle of Sati",
  templeSignificance: "According to Shakti Peetha traditions, the ankle of Devi Sati fell here. The site is mentioned in several Tantric texts and is a prominent power center in northern India. The temple also has historic significance as it was visited by Pandavas before the Kurukshetra war.",
  mainAttractions: [
    "Bhadrakali Temple with sacred footprints of Devi",
    "Vermillion-stained idol of the Goddess",
    "Golden and silver ornaments offered by Pandavas"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Diwali",
    "Kali Puja",
    "Kurukshetra Festival"
  ],
  architecture: "The temple showcases traditional North Indian style with a sanctum (garbhagriha), large courtyard, and intricately designed towers. The temple's sanctum holds a stone image of the goddess adorned with weapons and garlands.",
  spiritualImportance: "Kurukshetra holds immense spiritual significance due to its association with the Mahabharata. The Shakti Peetha enhances the sacredness of this battlefield by adding the energy of the divine feminine to the region, making it a hub of both Vaishnav and Shakta traditions.",
  accessibility: { currentStatus: "Highly active and well-visited pilgrimage site", nearestTown: "Kurukshetra (main city)", localTransport: "Well-connected by road and rail to major North Indian cities. Nearest major station is Kurukshetra Junction. Buses and local autos are available.", nearestRailwayStation: "Kurukshetra Junction", nearestAirport: "Chandigarh International Airport" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Bhadrakali_Temple,_Kurukshetra",
    additionalLinks: [
      { title: "Haryana Tourism - Bhadrakali Temple", url: "https://www.haryanatourism.gov.in/Place/bhadrakali-temple-kurukshetra" },
      { title: "Rgyan - Kurukshetra Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/kurukshetra-shakti-peeth" },
      { title: "Temple Purohit - Bhadrakali Temple", url: "https://www.templepurohit.com/hindu-temple/bhadrakali-temple-kurukshetra/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Bhadrakali+Temple,+Kurukshetra"
  },
  keywords: ["Kurukshetra Shakti Peetha", "Bhadrakali Temple", "Savitri Peetha", "Ankle of Sati", "Shakti Peeth in Haryana", "Bhairava Rudra", "Pandavas and Devi Bhadrakali"]
};

const varahiChaurasiRawData = {
  idString: "varahi-chaurasi",
  name: "Varahi Shakti Peetha (Chaurasi)",
  alternateNames: ["Varahi Devi Temple Chaurasi", "Chaurasi Varahi Peetha"],
  location: {
    city: "Chaurasi",
    district: "Puri",
    state: "Odisha",
    country: "India",
    coordinates: { latitude: 19.7709, longitude: 86.6412 }
  },
  goddess: {
    name: "Maa Varahi",
    description: "Maa Varahi, the boar-headed manifestation of Goddess Shakti, is one of the Sapta Matrikas. She symbolizes the power of Yajna and is associated with knowledge and the Tantric path. She holds great significance in Shakta and Tantric traditions."
  },
  bhairava: {
    name: "Arthapishacha",
    description: "Lord Arthapishacha is the Bhairava guardian of this Shakti Peetha, representing a fierce form who protects sacred tantric energy and the devotees."
  },
  bodyPart: "Cheeks of Sati",
  templeSignificance: "According to legends, the cheeks of Sati fell at this sacred site. The temple is known for its tantric importance, where Devi is worshipped in her Varahi form, associated with wisdom, protection, and inner strength. The temple is located in the serene village of Chaurasi near Puri and Konark.",
  mainAttractions: [
    "Ancient idol of Goddess Varahi in seated yogic posture",
    "Stone-carved temple with intricate designs",
    "Presence of strong tantric vibrations and sadhana spots"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Varahi Jayanti",
    "Ashadha Gupt Navaratri (Tantric Navaratri)",
    "Durga Puja"
  ],
  architecture: "The Varahi temple is built in the Kalinga style of architecture with a square sanctum and pyramidal tower. The idol is unique with a boar head and human body seated in lalitasana, holding divine symbols like fish and bowl.",
  spiritualImportance: "This Peetha is a major center of Tantric worship in eastern India. Maa Varahi is worshipped by spiritual seekers for powers of discrimination, control over lower tendencies, and as a protector on the path of higher knowledge. The temple is often visited by practitioners of Shakta and tantric schools.",
  accessibility: { currentStatus: "Functional and visited by local pilgrims and tantric practitioners", nearestTown: "Konark and Puri", localTransport: "Easily accessible by road from Puri and Bhubaneswar. The nearest major railhead is Puri. Regular buses and taxis operate to Chaurasi.", nearestRailwayStation: "Puri", nearestAirport: "Bhubaneswar (Biju Patnaik International Airport)" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Varahi_Deula",
    additionalLinks: [
      { title: "Temple Purohit - Varahi Temple", url: "https://www.templepurohit.com/hindu-temple/varahi-temple-chaurasi/" },
      { title: "Rgyan - Varahi Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/varahi-shakti-peeth" },
      { title: "Native Planet - Chaurasi Varahi", url: "https://www.nativeplanet.com/travel-guide/chaurasi-varahi-temple-odisha-tantric-temple-005477.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Varahi+Deula,+Chaurasi"
  },
  keywords: ["Varahi Shakti Peetha", "Chaurasi Varahi Temple", "Boar-headed Goddess", "Sapta Matrika", "Cheeks of Sati", "Tantric Shakti Peeth", "Odisha Devi temples"]
};

const mahamayiAmarnathRawData = {
  idString: "mahamayi-amarnath",
  name: "Mahamaya Shakti Peetha (Amarnath)",
  alternateNames: ["Amarnath Shakti Peetha", "Mahamaya Devi Temple Amarnath", "Hinglaj Mata (Baluchistan association)"],
  location: {
    city: "Amarnath",
    district: "Anantnag",
    state: "Jammu and Kashmir",
    country: "India",
    coordinates: { latitude: 34.2165, longitude: 75.5021 }
  },
  goddess: {
    name: "Maa Mahamaya",
    description: "Maa Mahamaya is a fierce yet compassionate aspect of Shakti, often linked with the cosmic illusion (Maya) and the destroyer of evil. In this Shakti Peetha, she is worshipped for her immense protective powers and her ability to reveal spiritual truth."
  },
  bhairava: {
    name: "Trisandhyeshwar",
    description: "Lord Trisandhyeshwar is the presiding Bhairava of this Peetha, guarding the sacred energy and maintaining the cosmic rhythm during the three junctions of the day – dawn, noon, and dusk."
  },
  bodyPart: "Throat of Sati",
  templeSignificance: "It is believed that the throat of Goddess Sati fell at this sacred site, making it a powerful center of Shakti worship. Though geographically close to Amarnath, many scholars also relate this Peetha to Hinglaj Mata in Baluchistan (now in Pakistan) due to overlapping associations of Mahamaya. This Peetha symbolizes the voice of truth and divine resonance.",
  mainAttractions: [
    "Natural Shakti cave shrine associated with Amarnath",
    "Pilgrimage through high-altitude terrain",
    "Snow-clad spiritual ambiance"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Shravan Purnima",
    "Amarnath Yatra Season",
    "Guru Purnima"
  ],
  architecture: "This Shakti Peetha is more of a natural formation than a man-made temple, centered around a spiritually charged cave shrine. Simple stone structures and symbolic shrines are used for rituals. Pilgrims often offer prayers en route to Amarnath.",
  spiritualImportance: "This site is revered as a convergence point of Shaivism and Shaktism. Pilgrims believe that the resonance of divine truth (as the throat of Sati) echoes in this region. The proximity to Amarnath cave strengthens its spiritual vibration, where devotees experience silence, snow, and inner stillness.",
  accessibility: { currentStatus: "Open seasonally during Amarnath Yatra, difficult terrain", nearestTown: "Pahalgam or Baltal", localTransport: "Accessible only by foot or helicopter during pilgrimage season. Base camps are connected to Srinagar by road. Travel requires physical endurance or use of ponies/helicopter services.", nearestRailwayStation: "Jammu Tawi", nearestAirport: "Srinagar International Airport" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas",
    additionalLinks: [
      { title: "Rgyan - Amarnath Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/amarnath-shakti-peeth" },
      { title: "Temple Purohit - Shakti Peethas Guide", url: "https://www.templepurohit.com/shakti-peethas-complete-guide/" },
      { title: "Drikpanchang - Shakti Peetha", url: "https://www.drikpanchang.com/spiritual-articles/shakti-peetha.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Amarnath+Cave+Temple"
  },
  keywords: ["Mahamaya Shakti Peetha", "Amarnath Shakti Peetha", "Throat of Sati", "Trisandhyeshwar Bhairava", "Mahamaya Devi", "Jammu and Kashmir temples", "Himalayan Shakti Peetha"]
};

const phullaraAttahasRawData = {
  idString: "phullara-attahasa",
  name: "Phullara Shakti Peetha (Attahas)",
  alternateNames: ["Attahas Shakti Peetha", "Phulara Devi Temple Attahas"],
  location: {
    city: "Labhpur",
    district: "Birbhum",
    state: "West Bengal",
    country: "India",
    coordinates: { latitude: 23.8531, longitude: 87.7852 }
  },
  goddess: {
    name: "Phullara Devi",
    description: "Goddess Phullara is a form of the Divine Mother associated with blooming grace, joy, and universal laughter. She is worshipped here as a manifestation of fertility, creative expression, and sacred delight."
  },
  bhairava: {
    name: "Vishvesh",
    description: "Lord Vishvesh, the Universal Lord, is the Bhairava of this Peetha. He signifies the all-encompassing masculine force that guards the sanctity of the Shakti energies in this region."
  },
  bodyPart: "Lips of Sati",
  templeSignificance: "This sacred site is believed to be where the lips of Goddess Sati fell, symbolizing speech, expression, and sacred sound. It is called 'Attahas' which means 'divine laughter', making this Peetha especially significant in invoking the joyful, expressive aspects of Devi.",
  mainAttractions: [
    "Phullara Devi idol with wide mouth symbolizing laughter",
    "Serene village landscape with spiritual ambiance",
    "Traditional Bengal temple architecture"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Maghi Purnima",
    "Navaratri",
    "Poush Sankranti"
  ],
  architecture: "The temple follows traditional Bengal terracotta and brick style, with a modest shrine structure and intricate rural artistry. The idol of Devi is unique with an exaggerated mouth, capturing the symbolism of divine laughter.",
  spiritualImportance: "The Peetha represents the power of sacred speech and joy. Devotees come here to seek blessings for eloquence, creativity, and inner happiness. The site is also seen as a center of feminine grace and maternal energy.",
  accessibility: { currentStatus: "Open", nearestTown: "Labhpur", localTransport: "Well connected by road and rail from Bolpur (Santiniketan). Local transport available to the temple site.", nearestRailwayStation: "Bolpur (Santiniketan)", nearestAirport: "Netaji Subhas Chandra Bose International Airport, Kolkata" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Phullara_Shakti_Peeth",
    additionalLinks: [
      { title: "Rgyan - Phullara Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/phullara-shakti-peeth" },
      { title: "Temple Purohit - Phullara Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/phullara-shakti-peeth-attahas-west-bengal/" },
      { title: "Drikpanchang - Shakti Peetha", url: "https://www.drikpanchang.com/spiritual-articles/shakti-peetha.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Attahas+Temple,+Labhpur"
  },
  keywords: ["Phullara Shakti Peetha", "Attahas Temple", "Lips of Sati", "Vishvesh Bhairava", "Phulara Devi", "Shakti temples in Bengal", "Divine laughter"]
};

const mahishamardiniJaynagarRawData = {
  idString: "mahishamardini-jaynagar",
  name: "Mahishamardini Shakti Peetha (Jaynagar)",
  alternateNames: ["Mahisha Mardini Devi Jaynagar", "Jaynagar Shakti Peetha"],
  location: {
    city: "Jaynagar",
    district: "Dakshin Barasat",
    state: "West Bengal",
    country: "India",
    coordinates: { latitude: 22.1758, longitude: 88.4313 }
  },
  goddess: {
    name: "Mahishamardini",
    description: "Goddess Mahishamardini is the fierce form of Durga who annihilated the demon Mahishasura. She symbolizes divine justice, power, and protection against evil forces."
  },
  bhairava: {
    name: "Daksha",
    description: "Lord Daksha, a form of Shiva associated with responsibility and cosmic order, is worshipped as the Bhairava of this Peetha."
  },
  bodyPart: "Right wrist of Sati",
  templeSignificance: "This Shakti Peetha marks the spot where the right wrist of Devi Sati is believed to have fallen. The goddess here is revered in her victorious form, the slayer of the demon Mahisha.",
  mainAttractions: [
    "Ancient Mahishamardini idol in Durga pose",
    "Quiet rural temple ambiance",
    "Surrounding sacred groves and ponds"
  ],
  festivalsCelebrated: [
    "Durga Puja",
    "Navaratri",
    "Ashwin Month Festival",
    "Mahalaya"
  ],
  architecture: "The temple structure is simple yet sacred, built in traditional Bengali rural style. The idol depicts Goddess Durga with her lion mount in combat with Mahishasura.",
  spiritualImportance: "This Peetha is a powerful center for Shakti worship, particularly for devotees seeking courage, strength, and protection from negativity. The victorious energy of the goddess inspires inner transformation.",
  accessibility: { currentStatus: "Open", nearestTown: "Baruipur", localTransport: "Connected via suburban train from Sealdah to Jaynagar. Auto-rickshaws and buses available to the temple.", nearestRailwayStation: "Jaynagar Majilpur Junction", nearestAirport: "Netaji Subhas Chandra Bose International Airport, Kolkata" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas",
    additionalLinks: [
      { title: "Rgyan - Mahishamardini Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/mahishamardini-shakti-peeth" },
      { title: "Temple Purohit - Mahishamardini Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/mahishamardini-shakti-peeth-jaynagar/" },
      { title: "Drikpanchang - Shakti Peetha", url: "https://www.drikpanchang.com/spiritual-articles/shakti-peetha.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Jaynagar+Shakti+Peeth"
  },
  keywords: ["Mahishamardini Shakti Peetha", "Jaynagar Shakti Peetha", "Mahisha Mardini", "Durga temples West Bengal", "Right wrist of Sati", "Shakti temples in India"]
};

const avantiUjjainRawData = {
  idString: "avanti-ujjain",
  name: "Avanti Shakti Peetha (Ujjain)",
  alternateNames: ["Avanti Devi Temple Ujjain", "Ujjaini Shakti Peetha"],
  location: {
    city: "Ujjain",
    district: "Ujjain",
    state: "Madhya Pradesh",
    country: "India",
    coordinates: { latitude: 23.1765, longitude: 75.7885 }
  },
  goddess: {
    name: "Avanti",
    description: "Goddess Avanti is worshipped as a form of Shakti associated with wisdom, devotion, and liberation. She is deeply revered in Ujjain, one of the seven Moksha-puris (sacred cities for liberation)."
  },
  bhairava: {
    name: "Lambakarna",
    description: "Lord Lambakarna is the Bhairava at this Peetha, symbolizing the ever-attentive guardian who hears all prayers and protects the sacred ground."
  },
  bodyPart: "Upper lips of Sati",
  templeSignificance: "The temple is believed to mark the site where the upper lip of Sati fell. It is located in the sacred city of Ujjain, renowned for its spiritual energy and as the seat of Mahakaleshwar Jyotirlinga.",
  mainAttractions: [
    "Proximity to Mahakaleshwar Temple",
    "Connection with Kumbh Mela held in Ujjain",
    "Vibrant temple festivals and daily aartis"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Maha Shivaratri",
    "Kumbh Mela (when held in Ujjain)",
    "Diwali"
  ],
  architecture: "The temple is built in classical North Indian style with intricately carved pillars and a peaceful sanctum. The presence of nearby temples enriches the spiritual environment.",
  spiritualImportance: "Being located in Ujjain — a major spiritual hub — this Shakti Peetha is significant for seekers of liberation (moksha) and is visited by devotees seeking inner clarity, strength, and divine wisdom.",
  accessibility: { currentStatus: "Open", nearestTown: "Ujjain (well-developed city)", localTransport: "Easily accessible by road, rail, and air (via Indore airport). Local transport includes auto-rickshaws and taxis.", nearestRailwayStation: "Ujjain Junction", nearestAirport: "Devi Ahilyabai Holkar Airport, Indore" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas",
    additionalLinks: [
      { title: "Rgyan - Avanti Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/avanti-shakti-peeth" },
      { title: "Temple Purohit - Avanti Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/avanti-shakti-peeth-ujjain/" },
      { title: "Drikpanchang - Shakti Peetha", url: "https://www.drikpanchang.com/spiritual-articles/shakti-peetha.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Avanti+Shakti+Peeth,+Ujjain"
  },
  keywords: ["Avanti Shakti Peetha", "Ujjain Shakti Peetha", "Upper lip of Sati", "Lambakarna Bhairava", "Ujjain temples", "Shakti temples in Madhya Pradesh"]
};

const jeshoreshwariKhulnaRawData = {
  idString: "jeshoreshwari-khulna",
  name: "Jeshoreshwari Shakti Peetha (Khulna)",
  alternateNames: ["Jessoreswari Temple Khulna", "Jeshoreshwari Kali Mandir Khulna"],
  location: {
    village: "Ishwaripur",
    district: "Satkhira",
    state: "Khulna",
    country: "Bangladesh",
    coordinates: { latitude: 22.5876, longitude: 89.0961 }
  },
  goddess: {
    name: "Jeshoreshwari",
    description: "Goddess Jeshoreshwari is a revered form of Devi Kali, representing the powerful and protective aspect of Shakti. Her name means 'Goddess of Jessore', and she is highly venerated in southwestern Bangladesh."
  },
  bhairava: {
    name: "Chanda Bhairava",
    description: "Chanda Bhairava is the fierce and vigilant guardian deity associated with Jeshoreshwari. He embodies protection and unwavering strength."
  },
  bodyPart: "Palms of Sati",
  templeSignificance: "The temple is believed to be the site where the palms of Sati fell. It is one of the most sacred Shakti Peethas located in present-day Bangladesh, attracting devotees from across the subcontinent.",
  mainAttractions: [
    "Ancient temple complex architecture",
    "Annual grand fair during Kali Puja",
    "Sacred sanctum with black stone idol of Kali"
  ],
  festivalsCelebrated: [
    "Kali Puja",
    "Navaratri",
    "Durga Puja",
    "Diwali"
  ],
  architecture: "The temple showcases early Bengali temple design with terracotta detailing. It includes a central shrine surrounded by open courtyards and halls for rituals.",
  spiritualImportance: "Jeshoreshwari is one of the most important Shakti Peethas in Bangladesh. Pilgrims come seeking protection, strength, and blessings for overcoming obstacles. The site also symbolizes unity across borders through devotion.",
  accessibility: { currentStatus: "Open (subject to border access)", nearestTown: "Satkhira", localTransport: "Accessible via road from Khulna and Satkhira. Limited public transport options available; private vehicles or hired cabs preferred.", nearestRailwayStation: "Jessore Junction", nearestAirport: "Jessore Airport" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Jeshoreshwari_Temple",
    additionalLinks: [
      { title: "Rgyan - Jeshoreshwari Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/jeshoreshwari-shakti-peeth" },
      { title: "Temple Purohit - Jeshoreshwari Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/jeshoreshwari-shakti-peeth-bangladesh/" },
      { title: "Drikpanchang - Shakti Peetha", url: "https://www.drikpanchang.com/spiritual-articles/shakti-peetha.html" }
    ],
    googleMaps: "https://www.google.com/maps/place/Jessoreswari+Kali+Mandir"
  },
  keywords: ["Jeshoreshwari Shakti Peetha", "Jessoreswari Temple", "Sati palms", "Shakti Peeth in Bangladesh", "Chanda Bhairava", "Kali temple in Satkhira"]
};

const surkandaDeviUttarakhandRawData = {
  idString: "surkanda-devi-uttarakhand",
  name: "Surkanda Devi Shakti Peetha (Uttarakhand)",
  alternateNames: ["Surkanda Temple Uttarakhand", "Surkanda Mata Mandir"],
  location: {
    village: "Kaddukhal",
    district: "Tehri Garhwal",
    state: "Uttarakhand",
    country: "India",
    coordinates: { latitude: 30.4143, longitude: 78.2862 }
  },
  goddess: {
    name: "Surkanda Devi",
    description: "Surkanda Devi is revered as a fierce form of the Divine Mother, symbolizing both destruction of evil and protection of devotees. She is worshipped for strength, courage, and spiritual upliftment."
  },
  bhairava: {
    name: "Chandrashekhara",
    description: "Lord Chandrashekhara is the Bhairava here, a tranquil yet powerful manifestation of Shiva, symbolizing cosmic serenity and wisdom."
  },
  bodyPart: "Head of Sati",
  templeSignificance: "Surkanda Devi Temple is believed to be the spot where the head of Sati fell, making it one of the most sacred Shakti Peethas. The temple is located at an altitude of about 2,750 meters and offers panoramic views of the Himalayas.",
  mainAttractions: [
    "Trek through dense forests and misty hills",
    "Surkanda Devi fair held during Ganga Dussehra",
    "Panoramic view of snow-capped Himalayan peaks"
  ],
  festivalsCelebrated: [
    "Ganga Dussehra Mela",
    "Navaratri",
    "Durga Puja",
    "Makar Sankranti"
  ],
  architecture: "Traditional North Indian stone temple architecture with a sanctum and open courtyard. The temple is simple yet spiritually vibrant, surrounded by thick deodar forests.",
  spiritualImportance: "It is a site of immense spiritual significance, attracting pilgrims, trekkers, and sadhakas alike. The legend of Sati’s head falling here makes it a center for penance, devotion, and the path of inner elevation.",
  accessibility: { currentStatus: "Open (trekking required)", nearestTown: "Dhanaulti (about 8 km)", localTransport: "Accessible by road till Kaddukhal; from there a 2 km steep trek leads to the temple.", nearestRailwayStation: "Dehradun Railway Station", nearestAirport: "Jolly Grant Airport, Dehradun" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Surkanda_Devi",
    additionalLinks: [
      { title: "eUttaranchal - Surkanda Devi", url: "https://www.euttaranchal.com/tourism/surkanda-devi-temple.php" },
      { title: "Rgyan - Surkanda Devi Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/surkanda-devi-shakti-peeth" },
      { title: "Temple Purohit - Surkanda Devi Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/surkanda-devi-shakti-peeth/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Surkanda+Devi+Temple"
  },
  keywords: ["Surkanda Devi", "Surkanda Shakti Peetha", "Sati head temple", "Tehri Garhwal Shakti Peetha", "Trek to Surkanda", "Uttarakhand temples", "Chandrashekhara Bhairava"]
};

const mayaDeviHaridwarRawData = {
  idString: "maya-devi-haridwar",
  name: "Maya Devi Shakti Peetha (Haridwar)",
  alternateNames: ["Haridwar Shakti Peeth", "Maya Devi Temple Haridwar"],
  location: {
    city: "Haridwar",
    district: "Haridwar",
    state: "Uttarakhand",
    country: "India",
    coordinates: { latitude: 29.9457, longitude: 78.1643 }
  },
  goddess: {
    name: "Maya Devi",
    description: "Maya Devi is considered the presiding deity of Haridwar and is worshipped as an incarnation of Adi Shakti. She represents the cosmic illusion (Maya) and the power that governs creation, preservation, and destruction."
  },
  bhairava: {
    name: "Khandakapala",
    description: "Khandakapala Bhairava is the fierce protector of this peetha, representing the power of destruction and transformation."
  },
  bodyPart: "Navel of Sati",
  templeSignificance: "The Maya Devi Temple is one of the Siddhapeethas where the navel (nabhi) of Sati is believed to have fallen. It is a very ancient and highly venerated temple, forming the spiritual foundation of Haridwar.",
  mainAttractions: [
    "One of the oldest temples in Haridwar (dating to the 11th century)",
    "Located within walking distance of Har Ki Pauri",
    "Peaceful ambience amidst the bustling spiritual city"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Durga Puja",
    "Kumbh Mela",
    "Chaitra Mela"
  ],
  architecture: "The temple has a simple yet sacred structure, built in the classical North Indian style. The sanctum houses three deities: Goddess Maya, Goddess Kali, and Goddess Kamakhya.",
  spiritualImportance: "This temple is one of the three ancient temples still intact in Haridwar, the others being Narayan-Shila and Bhairava Temple. Devotees believe that worshipping here fulfills all desires and grants liberation (moksha).",
  accessibility: { currentStatus: "Open to all", nearestTown: "Haridwar (city itself)", localTransport: "Easily accessible by road, rail, and walking from major landmarks in Haridwar. Haridwar Junction is well connected.", nearestRailwayStation: "Haridwar Junction", nearestAirport: "Jolly Grant Airport, Dehradun" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Maya_Devi_Temple,_Haridwar",
    additionalLinks: [
      { title: "Temple Purohit - Maya Devi Temple", url: "https://www.templepurohit.com/hindu-temple/maya-devi-temple-haridwar/" },
      { title: "Rgyan - Maya Devi Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/maya-devi-shakti-peeth" },
      { title: "eUttaranchal - Maya Devi Temple", url: "https://www.euttaranchal.com/tourism/maya-devi-temple-haridwar.php" }
    ],
    googleMaps: "https://www.google.com/maps/place/Maya+Devi+Temple"
  },
  keywords: ["Maya Devi Temple", "Haridwar Shakti Peetha", "Sati navel", "Uttarakhand Shakti Peeth", "Maya Devi Haridwar", "Khandakapala Bhairava"]
};

const tukreswariAssamRawData = {
  idString: "tukreswari-assam",
  name: "Tukreswari Shakti Peetha (Assam)",
  alternateNames: ["Tukreswari Temple Assam", "Tukreswari Sati Peeth"],
  location: {
    village: "Tukreswari",
    district: "Goalpara",
    state: "Assam",
    country: "India",
    coordinates: { latitude: 26.1483, longitude: 90.5654 }
  },
  goddess: {
    name: "Tukreswari Devi",
    description: "Tukreswari Devi is a fierce and powerful form of the Divine Mother. She is believed to represent the detached pieces of Sati’s body, and is deeply revered in this Shakti Peetha for her spiritual protection and blessings."
  },
  bhairava: {
    name: "Mahadeva",
    description: "Lord Mahadeva, a form of Shiva, is worshipped here as the Bhairava guardian of the site. His presence balances the fierce energy of the Devi with calm spiritual strength."
  },
  bodyPart: "Pieces (Tukra) of Sati’s body",
  templeSignificance: "According to legend, several pieces (tukra) of Sati's body fell at this site, giving the place its name — Tukreswari. This makes it one of the spiritually potent Shakti Peethas in Assam, though less known to the mainstream.",
  mainAttractions: [
    "Ancient shrine in natural hilly surroundings",
    "Annual religious fairs during Navaratri",
    "Known for peaceful meditative ambiance"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Durga Puja",
    "Maha Shivaratri"
  ],
  architecture: "The temple is built on a hillock and surrounded by dense greenery. Its simple Assamese temple design features traditional sculptural elements and stone idols within a sanctum.",
  spiritualImportance: "It is believed that this site holds deep mystical energy, and prayers offered here are potent for wish fulfillment and overcoming obstacles. The place is also considered highly suitable for spiritual retreats and sadhana.",
  accessibility: { currentStatus: "Open", nearestTown: "Goalpara (approx. 30 km)", localTransport: "Reachable by road from Goalpara town. Local buses and private vehicles are available.", nearestRailwayStation: "Goalpara Town Railway Station", nearestAirport: "Lokpriya Gopinath Bordoloi International Airport, Guwahati" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas#List_of_Shakti_Peethas",
    additionalLinks: [
      { title: "Rgyan - Tukreswari Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/tukreswari-shakti-peeth" },
      { title: "Temple Purohit - Tukreswari Temple", url: "https://www.templepurohit.com/hindu-temple/tukreswari-temple-goalpara-assam/" },
      { title: "Native Planet - Tukreswari Temple", url: "https://www.nativeplanet.com/goalpara/attractions/tukreswari-temple/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Tukreswari+Temple"
  },
  keywords: ["Tukreswari Shakti Peetha", "Tukreswari Temple Assam", "Sati pieces Shakti Peetha", "Assam Shakti Temples", "Mahadeva Bhairava", "Goalpara Devi Temple"]
};

const manibandhPushkarRawData = {
  idString: "manibandh-pushkar",
  name: "Manibandh Shakti Peetha (Pushkar)",
  alternateNames: ["Manivedika Shakti Peetha Pushkar", "Manibandh Devi Temple Pushkar"],
  location: {
    village: "Pushkar",
    district: "Ajmer",
    state: "Rajasthan",
    country: "India",
    coordinates: { latitude: 26.4876, longitude: 74.5556 }
  },
  goddess: {
    name: "Gayatri Devi (or Chandrakanta)",
    description: "Goddess Gayatri or Chandrakanta is worshipped here as the presiding form of Shakti. She embodies the essence of divine knowledge, spiritual awakening, and supreme feminine power."
  },
  bhairava: {
    name: "Shiva as Sarvananda",
    description: "Sarvananda Bhairava is the guardian deity of this Shakti Peetha, symbolizing blissful divine protection and the masculine counterpart to the divine feminine energy present here."
  },
  bodyPart: "Wrists (Manibandh) of Sati",
  templeSignificance: "It is believed that the 'wrists' of Sati fell at this location. This makes it a significant spiritual site in Rajasthan, located in the sacred town of Pushkar, also known for the Brahma Temple and holy lake.",
  mainAttractions: [
    "Located near the Pushkar Lake",
    "Peaceful surroundings and spiritual energy",
    "Temple is modest but holds deep Shakti significance"
  ],
  festivalsCelebrated: [
    "Navaratri",
    "Durga Puja",
    "Gayatri Jayanti"
  ],
  architecture: "Traditional North Indian temple design with a simple stone structure. The sanctum houses the idol of Gayatri Devi and is often decorated with flowers and lamps.",
  spiritualImportance: "This Shakti Peetha is revered for bestowing spiritual clarity, peace, and mental strength. It is considered auspicious to visit during a Pushkar pilgrimage for complete spiritual benefits.",
  accessibility: { currentStatus: "Open to devotees", nearestTown: "Pushkar", localTransport: "Well connected by road and buses from Ajmer (11 km). Ajmer Junction is the nearest major railway station.", nearestRailwayStation: "Ajmer Junction", nearestAirport: "Jaipur International Airport" },
  resources: {
    wikipedia: "https://en.wikipedia.org/wiki/Shakti_Peethas#List_of_Shakti_Peethas",
    additionalLinks: [
      { title: "Temple Purohit - Manibandh Shakti Peeth", url: "https://www.templepurohit.com/hindu-temple/manibandh-shakti-peeth/" },
      { title: "Rgyan - Manibandh Shakti Peeth", url: "https://rgyan.com/en/shakti-peeths/manibandh-shakti-peeth" },
      { title: "Native Planet - Manibandh Shakti Peeth", url: "https://www.nativeplanet.com/pushkar/attractions/manibandh-shakti-peeth/" }
    ],
    googleMaps: "https://www.google.com/maps/place/Manibandh+Shakti+Peeth"
  },
  keywords: ["Manibandh Shakti Peetha", "Manivedika Devi Temple", "Sati's Wrists Temple", "Pushkar Shakti Peeth", "Gayatri Devi Shakti Temple", "Rajasthan Shakti Peeth"]
};

// New Raw Data Entries to be added
const tripuraSundariUdaipurRawData = {
  idString: "tripura-sundari-udaipur",
  name: "Tripura Sundari Shakti Peetha (Udaipur)",
  alternateNames: ["Tripureshwari Temple", "Matabari"],
  location: { city: "Udaipur", state: "Tripura", country: "India", coordinates: { latitude: 23.5412, longitude: 91.4939 } },
  goddess: { name: "Tripura Sundari", description: "The beautiful goddess of the three worlds." },
  bhairava: { name: "Tripuresh", description: "The lord of the three worlds." },
  bodyPart: "Right Foot",
  templeSignificance: "One of the holiest sites for Shaktism in the region, revered for its wish-fulfilling powers.",
  mainAttractions: ["Kalyan Sagar lake behind the temple", "Tortoises in the lake", "Annual Diwali Mela"],
  festivalsCelebrated: ["Diwali", "Navaratri"],
  architecture: "Bengali 'Char-chala' style with a square sanctum and a conical dome.",
  spiritualImportance: "Considered a Maha Peetha, it is a major pilgrimage destination in Northeast India.",
  accessibility: { nearestRailwayStation: "Udaipur (Tripura) Railway Station", nearestAirport: "Agartala Airport" },
  resources: { wikipedia: "https://en.wikipedia.org/wiki/Tripura_Sundari_Temple", officialWebsite: "https://tripuratourism.gov.in/matabari" },
  keywords: ["Tripura Sundari", "Matabari", "Shakti Peeth Tripura", "Right foot of Sati"]
};

const vimalaTemplePuriRawData = {
  idString: "vimala-temple-puri",
  name: "Vimala Shakti Peetha (Puri)",
  alternateNames: ["Vimala Temple", "Puri Shakti Peetha"],
  location: { city: "Puri", state: "Odisha", country: "India", coordinates: { latitude: 19.8053, longitude: 85.8183 } },
  goddess: { name: "Vimala", description: "The pure and benevolent one." },
  bhairava: { name: "Jagannath", description: "The lord of the universe." },
  bodyPart: "Navel (Nabhi)",
  templeSignificance: "Located within the famous Jagannath Temple complex, it's considered a primary Shakti Peetha.",
  mainAttractions: ["Part of the Jagannath Temple complex", "Sacred Rohini Kunda"],
  festivalsCelebrated: ["Durga Puja (as Sharadiya Utsava)", "Navaratri"],
  architecture: "Classic Kalinga style architecture, integral to the Jagannath temple layout.",
  spiritualImportance: "Food offered to Lord Jagannath becomes Mahaprasad only after it is offered to Goddess Vimala.",
  accessibility: { nearestRailwayStation: "Puri Railway Station", nearestAirport: "Bhubaneswar Airport" },
  resources: { wikipedia: "https://en.wikipedia.org/wiki/Vimala_Temple" },
  keywords: ["Vimala Temple", "Puri Shakti Peetha", "Navel of Sati", "Jagannath Temple"]
};

// ... (and so on for all the other new peethas)
const allNewRawData = [
    tripuraSundariUdaipurRawData,
    vimalaTemplePuriRawData,
    {
      idString: "naina-devi-himachal",
      name: "Naina Devi Shakti Peetha",
      location: { city: "Bilaspur", state: "Himachal Pradesh", country: "India" },
      goddess: { name: "Mahishamardini" },
      bhairava: { name: "Krodhish" },
      bodyPart: "Eyes",
      keywords: ["Naina Devi", "Himachal Shakti Peeth", "Eyes of Sati"]
    },
    {
      idString: "shail-shrine-sylhet",
      name: "Shail Shakti Peetha",
      location: { city: "Sylhet", country: "Bangladesh" },
      goddess: { name: "Mahalakshmi" },
      bhairava: { name: "Sambaranand" },
      bodyPart: "Neck",
      keywords: ["Shail Peeth", "Sylhet Shakti Peeth", "Neck of Sati"]
    },
    {
      idString: "gandaki-chandi-nepal",
      name: "Gandaki Chandi Shakti Peetha",
      location: { city: "Pokhara", country: "Nepal" },
      goddess: { name: "Gandaki Chandi" },
      bhairava: { name: "Chakrapani" },
      bodyPart: "Forehead",
      keywords: ["Gandaki Peeth", "Nepal Shakti Peeth", "Forehead of Sati"]
    },
    {
      idString: "bahula-bardhaman",
      name: "Bahula Shakti Peetha",
      location: { city: "Bardhaman", state: "West Bengal", country: "India" },
      goddess: { name: "Bahula (Chandika)" },
      bhairava: { name: "Bhiruk" },
      bodyPart: "Left Arm",
      keywords: ["Bahula Peeth", "Bardhaman Shakti Peeth", "Left Arm of Sati"]
    },
    {
      idString: "ujjaini-harsiddhi-ujjain",
      name: "Ujjaini Harsiddhi Shakti Peetha",
      location: { city: "Ujjain", state: "Madhya Pradesh", country: "India" },
      goddess: { name: "Harsiddhi Mata" },
      bhairava: { name: "Mahakaleshwar" },
      bodyPart: "Upper Lip",
      keywords: ["Harsiddhi Temple", "Ujjain Shakti Peeth", "Upper Lip of Sati"]
    },
    {
      idString: "manivedika-pushkar",
      name: "Manivedika Shakti Peetha",
      location: { city: "Pushkar", state: "Rajasthan", country: "India" },
      goddess: { name: "Gayatri" },
      bhairava: { name: "Sarvananda" },
      bodyPart: "Wrists",
      keywords: ["Manivedika Peeth", "Pushkar Shakti Peeth", "Wrists of Sati"]
    },
    {
      idString: "viraja-jajpur",
      name: "Viraja Shakti Peetha",
      location: { city: "Jajpur", state: "Odisha", country: "India" },
      goddess: { name: "Viraja" },
      bhairava: { name: "Jagannath" },
      bodyPart: "Navel",
      keywords: ["Viraja Temple", "Jajpur Shakti Peeth", "Navel of Sati"]
    },
    {
      idString: "kankalitala-birbhum",
      name: "Kankalitala Shakti Peetha",
      location: { city: "Birbhum", state: "West Bengal", country: "India" },
      goddess: { name: "Devgarbha" },
      bhairava: { name: "Ruru" },
      bodyPart: "Bone",
      keywords: ["Kankalitala", "Birbhum Shakti Peeth", "Bone of Sati"]
    },
    {
      idString: "kalmadhav-amarkantak",
      name: "Kalmadhav Shakti Peetha",
      location: { city: "Amarkantak", state: "Madhya Pradesh", country: "India" },
      goddess: { name: "Kali" },
      bhairava: { name: "Asitanga" },
      bodyPart: "Left Buttock",
      keywords: ["Kalmadhav Peeth", "Amarkantak Shakti Peeth", "Left Buttock of Sati"]
    },
    {
      idString: "shondesh-amarkantak",
      name: "Shondesh Shakti Peetha",
      location: { city: "Amarkantak", state: "Madhya Pradesh", country: "India" },
      goddess: { name: "Narmada" },
      bhairava: { name: "Bhadrasen" },
      bodyPart: "Right Buttock",
      keywords: ["Shondesh Peeth", "Narmada Udgam", "Right Buttock of Sati"]
    },
    {
      idString: "ramgiri-chitrakoot-mp",
      name: "Ramgiri Shakti Peetha",
      location: { city: "Chitrakoot", state: "Madhya Pradesh", country: "India" },
      goddess: { name: "Shivani" },
      bhairava: { name: "Chanda" },
      bodyPart: "Right Breast",
      keywords: ["Ramgiri Chitrakoot", "Shivani Temple", "Right Breast of Sati"]
    },
    {
      idString: "mithila-janakpur-nepal",
      name: "Mithila Shakti Peetha",
      location: { city: "Janakpur", country: "Nepal" },
      goddess: { name: "Uma" },
      bhairava: { name: "Mahodar" },
      bodyPart: "Left Shoulder",
      keywords: ["Mithila Peeth", "Janakpur Temple", "Left Shoulder of Sati"]
    },
    {
      idString: "nalhati-birbhum",
      name: "Nalhati Shakti Peetha",
      location: { city: "Birbhum", state: "West Bengal", country: "India" },
      goddess: { name: "Kalika" },
      bhairava: { name: "Yogesh" },
      bodyPart: "Vocal Pipe (Nala)",
      keywords: ["Nalhati Temple", "Kalika Peeth", "Vocal Pipe of Sati"]
    },
    {
      idString: "jayanti-meghalaya-new",
      name: "Jayanti Shakti Peetha",
      location: { city: "Jaintia Hills", state: "Meghalaya", country: "India" },
      goddess: { name: "Jayanti" },
      bhairava: { name: "Kramadishwar" },
      bodyPart: "Left Thigh",
      keywords: ["Jayanti Peeth", "Meghalaya Shakti Peeth", "Left Thigh of Sati"]
    },
    {
      idString: "vimala-puri-odisha",
      name: "Vimala Shakti Peetha",
      location: { city: "Puri", state: "Odisha", country: "India" },
      goddess: { name: "Vimala" },
      bhairava: { name: "Jagannath" },
      bodyPart: "Navel",
      keywords: ["Vimala Temple Puri", "Puri Shakti Peeth", "Navel of Sati"]
    },
    {
      idString: "chattal-chittagong",
      name: "Chattal Shakti Peetha",
      location: { city: "Chittagong", country: "Bangladesh" },
      goddess: { name: "Bhawani" },
      bhairava: { name: "Chandrashekhar" },
      bodyPart: "Right Arm",
      keywords: ["Chattal Peeth", "Chittagong Shakti Peeth", "Right Arm of Sati"]
    },
    {
      idString: "tripura-udaipur-new",
      name: "Tripura Shakti Peetha",
      location: { city: "Udaipur", state: "Tripura", country: "India" },
      goddess: { name: "Tripura Sundari" },
      bhairava: { name: "Tripuresh" },
      bodyPart: "Right Leg",
      keywords: ["Tripura Sundari Temple", "Udaipur Tripura", "Right Leg of Sati"]
    },
    {
      idString: "tristrota-jalpaiguri",
      name: "Tristrota Shakti Peetha",
      location: { city: "Jalpaiguri", state: "West Bengal", country: "India" },
      goddess: { name: "Bhramari" },
      bhairava: { name: "Ambar" },
      bodyPart: "Left Leg",
      keywords: ["Tristrota Peeth", "Jalpaiguri Shakti Peeth", "Left Leg of Sati"]
    },
    {
      idString: "vashishtha-assam",
      name: "Vashishtha Shakti Peetha",
      location: { city: "Guwahati", state: "Assam", country: "India" },
      goddess: { name: "Tara" },
      bhairava: { name: "Vashishtha" },
      bodyPart: "Mind",
      keywords: ["Vashishtha Ashram", "Tara Temple Guwahati", "Mind of Sati"]
    },
    {
      idString: "panchasagar-uttar-pradesh",
      name: "Panchasagar Shakti Peetha",
      location: { city: "Varanasi", state: "Uttar Pradesh", country: "India" },
      goddess: { name: "Varahi" },
      bhairava: { name: "Maharudra" },
      bodyPart: "Lower Teeth",
      keywords: ["Panchasagar Peeth", "Varanasi Shakti Peeth", "Lower Teeth of Sati"]
    }
];

// Array of all raw data objects to be processed
// This list now includes the definitions from the constants above
const allRawData = [
    kamakhyaRawData,
    kalighatRawData, prayagRawData, vishalakshiRawData, jwalajiRawData,
    kanyakumariRawData, taraTariniRawData, hinglajRawData, chamundaHPRawData,
    dakshineswarRawData, kireetRawData, bahulaRawData, utkalaRawData, ambajiRawData,
    sharadaRawData, sugandhaRawData, chandranathRawData, guhyeshwariRawData,
    srisailamRawData, alopiDeviRawData, ekaveeraRawData, jaintiaRawData, shuchiRawData,
    ramgiriRawData, shriparvataRawData,
    manasaMungerRawData, gayaPeethaRawData, kurukshetraPeethaRawData, varahiChaurasiRawData, mahamayiAmarnathRawData,
    phullaraAttahasRawData, mahishamardiniJaynagarRawData, avantiUjjainRawData, jeshoreshwariKhulnaRawData,
    surkandaDeviUttarakhandRawData, mayaDeviHaridwarRawData, tukreswariAssamRawData, manibandhPushkarRawData,
    ...allNewRawData
];


// Helper function to create a unique string ID from the numeric ID and name
const createStringId = (numericIdInput: number | string, name: string): string => {
  const namePart = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  // Use numericIdInput directly if it's already a descriptive string
  if (typeof numericIdInput === 'string' && numericIdInput.length > 3 && !numericIdInput.match(/^\d+$/)) {
      return numericIdInput;
  }
  // Fallback to creating ID with numeric part if numericIdInput is a number or simple numeric string
  const numericPart = typeof numericIdInput === 'number' ? numericIdInput.toString() : numericIdInput;
  return `${namePart}-${numericPart}`;
};

// Helper function to transform accessibility
const transformAccessibility = (originalAccessibility: any): AccessibilityInfo => {
    if (!originalAccessibility) return {};
    return {
        nearestRailwayStation: originalAccessibility.nearestRailwayStation || originalAccessibility.transport,
        nearestAirport: originalAccessibility.nearestAirport,
        localTransport: originalAccessibility.localTransport || originalAccessibility.transport,
        currentStatus: originalAccessibility.currentStatus,
        nearestTown: originalAccessibility.nearestTown,
        trek: originalAccessibility.trek,
        transportation: originalAccessibility.transportation,
        nearestMetroStation: originalAccessibility.nearestMetroStation
    };
};

const transformResourceLinks = (links: any): ResourceLink[] => {
    if (!Array.isArray(links)) return [];
    return links.map((link: string | { title: string, url: string }) => {
        if (typeof link === 'string') {
            try {
                const urlObj = new URL(link);
                let title = urlObj.hostname.replace(/^www\./, '').split('.')[0];
                if (!title || title.length < 3) title = urlObj.pathname.split('/').pop() || "Resource Link";
                if (title.length > 30) title = title.substring(0, 27) + "...";
                const capitalizedTitle = title.replace(/-/g, ' ').replace(/_/g, ' ')
                                           .split(' ')
                                           .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                           .join(' ');
                return { title: capitalizedTitle, url: link };
            } catch (e) {
                let simpleTitle = link.split('/').pop()?.split('.')[0] || "Resource";
                if (simpleTitle.length > 30) simpleTitle = simpleTitle.substring(0,27) + "...";
                simpleTitle = simpleTitle.replace(/-/g, ' ').replace(/_/g, ' ');
                simpleTitle = simpleTitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
                return { title: simpleTitle, url: link };
            }
        }
        return link; // Assumes it's already { title: string, url: string }
    });
};


// Helper function to transform resources
const transformResources = (originalResources: any): PeethaResources => {
    if (!originalResources) return {};
    return {
        officialWebsite: originalResources.officialWebsite || originalResources.officialListing || originalResources.archaeologicalSurvey || originalResources.officialTempleSite,
        wikipedia: originalResources.wikipedia,
        officialLinks: transformResourceLinks(originalResources.additionalLinks),
        map: originalResources.googleMaps,
    };
};

// Map to store processed Peethas by their intended final ID
const processedPeethasMap = new Map<string, ShaktiPeetha>();

// Process the detailed raw data first
allRawData.forEach(rawData => {
    const stringId = rawData.idString || createStringId(rawData.id, rawData.name);

    const locationObject = rawData.location || {};

    const mappedPeetha: ShaktiPeetha = {
        id: stringId,
        name: rawData.name,
        alternateNames: rawData.alternateNames,
        location: `${locationObject.village || locationObject.city || ''}${locationObject.district ? ', ' + locationObject.district : ''}, ${locationObject.state || locationObject.region || ''}, ${locationObject.country}`,
        detailedLocation: {
            place: locationObject.village || locationObject.city,
            city: locationObject.city || locationObject.district,
            district: locationObject.district,
            state: locationObject.state || locationObject.region,
            country: locationObject.country,
            coordinates: locationObject.coordinates,
        },
        bodyPart: rawData.bodyPart,
        shakti: rawData.goddess.name,
        shaktiDetail: rawData.goddess,
        bhairava: rawData.bhairava.name,
        bhairavaDetail: rawData.bhairava,
        significance: Array.isArray(rawData.templeSignificance) ? rawData.templeSignificance : [rawData.templeSignificance],
        templeType: "Ancient Shrine", // Default or infer
        associatedFestival: Array.isArray(rawData.festivalsCelebrated) ? rawData.festivalsCelebrated[0] : rawData.festivalsCelebrated,
        festivals: (rawData.festivalsCelebrated || []).map((name: string) => ({
            name,
            type: "Major Festival",
            significance: `Celebration of ${name}.`,
            description: `A significant festival, ${name}, celebrated with devotion.`
        })),
        mainAttractions: rawData.mainAttractions,
        architecture: rawData.architecture,
        spiritualImportance: rawData.spiritualImportance,
        accessibility: transformAccessibility(rawData.accessibility),
        resources: transformResources(rawData.resources),
        tags: rawData.keywords,
        imageHint: `${stringId.replace(/-/g, ' ')} Sati body part`,
        imageUrl: `https://placehold.co/736x736.png`, // Default placeholder
        lastUpdated: new Date().toISOString().split('T')[0]
    };
    processedPeethasMap.set(stringId, mappedPeetha);
});


// Convert the map back to an array to be exported
export const shaktiPeethaData: ShaktiPeetha[] = Array.from(processedPeethasMap.values());


// Helper function to get current date in YYYY-MM-DD format
function getCurrentDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Final pass to ensure all objects have the necessary structure
shaktiPeethaData.forEach(peetha => {
  if (!peetha.lastUpdated) {
    peetha.lastUpdated = getCurrentDateString();
  }
  if (Array.isArray(peetha.festivals)) {
    peetha.festivals = peetha.festivals.map(festivalOrName => {
      if (typeof festivalOrName === 'string') {
        return {
          name: festivalOrName,
          type: "Traditional Festival",
          significance: `Main festival of ${festivalOrName} for this Peetha.`
        };
      }
      return {
          name: festivalOrName.name,
          type: festivalOrName.type || "Traditional Festival",
          significance: festivalOrName.significance || `Significance of ${festivalOrName.name}`,
          month: festivalOrName.month,
          description: festivalOrName.description,
          time: festivalOrName.time,
          region: festivalOrName.region
      };
    });
  } else if (!peetha.festivals && peetha.associatedFestival) {
      peetha.festivals = [{
          name: peetha.associatedFestival,
          type: "Main Festival",
          significance: `Main festival is ${peetha.associatedFestival}.`
      }];
  } else if (!peetha.festivals) {
      peetha.festivals = [];
  }


  if (!peetha.shaktiDetail) {
    peetha.shaktiDetail = { name: peetha.shakti, description: `The presiding goddess form at this Peetha is ${peetha.shakti}.` };
  }
  if (!peetha.bhairavaDetail) {
    peetha.bhairavaDetail = { name: peetha.bhairava, description: `The guardian Bhairava form at this Peetha is ${peetha.bhairava}.` };
  }

  if (!peetha.detailedLocation) {
     const locParts = peetha.location.split(',').map(p => p.trim());
     peetha.detailedLocation = {
        city: locParts[0] || "Unknown",
        state: locParts[1] || "Unknown",
        country: locParts[2] || "Unknown",
        coordinates: peetha.coordinates
     }
  }
  // Ensure `state` is used if `region` was the input key
  if (peetha.detailedLocation && (peetha.detailedLocation as any).region && !peetha.detailedLocation.state) {
    peetha.detailedLocation.state = (peetha.detailedLocation as any).region;
    delete (peetha.detailedLocation as any).region;
  }
  if (peetha.accessibility && (peetha.accessibility as any).transport && !peetha.accessibility.localTransport) {
    peetha.accessibility.localTransport = (peetha.accessibility as any).transport;
  }


});
