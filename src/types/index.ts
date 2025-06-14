
export interface NavForm {
  name: string;
  story: string;
  powers: string;
  iconography: string;
  mantra: string;
  imageHint: string;
}

export interface AshtaLakshmiForm {
  name: string;
  description: string;
  blessings: string;
  stotras?: string[];
  imageHint: string;
}

export interface SaraswatiAspect {
  title: string;
  description: string;
  imageHint?: string;
}

// Base interface for common fields from the Mahadevis JSON structure
export interface MahadeviBaseData {
  name: string;
  aspect: string;
  attributes: string[];
  description: string; // Short description
  consort: string | null;
  symbolism: string; // For general iconography / key symbolism text
  notable_forms: string[];
  festivals: string[]; // Simple list of festivals
  imageUrl?: string;
  imageHint?: string;
}

// New interfaces for detailed Durga data structure
export interface PrimaryAttributes {
  gender: string;
  nature: string;
  energyType: string;
  affiliation: string[];
  planet: string;
}

export interface OriginsAndMythologyContent {
  meaningOfName?: string;
  abode?: string;
  parents?: string;
  textsMentioningHer?: string[];
  originStory?: string;
  symbolicVictory?: string;
  eternalConsort?: string;
  symbolicRole?: string;
  children?: string;
}


export interface DetailedIconography {
  skinColor: string[];
  numberOfArms: number;
  mount: string;
  commonWeapons: string[]; // Can be attributes for Lakshmi
  posture: string;
  expressions: string[] | string; // Allow string for Meenakshi
}

export interface AvatarForm {
  name: string;
  description: string;
  forms?: string[];
}

export interface SymbolismDetail {
  [key: string]: string;
}

export interface FestivalDetail {
  name: string;
  type?: string;
  time?: string; // For Tridevi, was string, now consistent
  region?: string;
  description?: string;
  significance: string;
  month?: string; // Added for Kamakhya
}

export interface MantraStotraItem {
  name: string;
  sanskrit?: string;
  meaning?: string;
  description?: string;
  source?: string;
  author?: string;
  text?: string;
}

export interface DetailedMantrasAndStotras {
  mantras: MantraStotraItem[];
  stotras: MantraStotraItem[];
}

export interface TempleDetail {
  id?: string;
  name: string;
  location: string;
  significance?: string;
  description?: string;
}

export interface ShaktiPeethasInfo {
  total?: number;
  importantOnes: string[];
  description: string;
  notableSites?: string[];
}

export type PhilosophicalInsights = Record<string, string | string[]>;


export interface CulturalInfluenceDetail {
  literature: string[] | string; // Allow string for Kamakshi
  danceForms: string[] | string; // Allow string for Kamakhya
  artAndSculpture: string;
  moviesAndMedia: string[] | string; // Allow string for Kamakshi
  worshipPractices?: string;
}

export interface ModernRelevanceDetail {
  womenEmpowerment: string;
  spiritualBalance: string;
  festivalsAndUnity: string;
  householdWorship?: string;
  businessAndFinance?: string;
  educationFocus?: string;
  worshipSummary?: string;
  modernSignificance?: string;
}

export interface ExternalLinks {
  [key: string]: string;
}

export interface ResourceLink {
  title: string;
  url: string;
}

export interface PeethaResources {
  officialWebsite?: string;
  wikipedia?: string;
  officialLinks?: ResourceLink[]; // For 'additionalLinks' or similar
  map?: string; // For googleMaps
}

export interface TrideviDetails extends MahadeviBaseData {
  slug: 'durga' | 'lakshmi' | 'saraswati' | 'parvati' | 'kali' | 'kamakshi' | 'meenakshi';
  introduction: string;
  iconographyDetails: string;
  mantras: string[];
  imageHint: string;
  imageUrl?: string;

  navadurga?: NavForm[];
  ashtaLakshmi?: AshtaLakshmiForm[];
  saraswatiAspects?: SaraswatiAspect[];
  vandana?: string;

  alternativeNames?: string[];
  primaryAttributes?: PrimaryAttributes;
  originsAndMythology?: OriginsAndMythologyContent;
  detailedIconography?: DetailedIconography;
  avatarsForms?: AvatarForm[];
  detailedSymbolism?: SymbolismDetail;
  symbolismDeepDive?: SymbolismDetail;
  detailedFestivals?: FestivalDetail[];
  detailedMantrasAndStotras?: DetailedMantrasAndStotras;
  majorTemples?: TempleDetail[];
  shaktiPeethasInfo?: ShaktiPeethasInfo;
  philosophicalInsights?: PhilosophicalInsights;
  culturalInfluence?: CulturalInfluenceDetail;
  relatedDeities?: string[];
  associatedAnimals?: string[];
  modernRelevance?: ModernRelevanceDetail;
  externalLinks?: ExternalLinks | Array<{ title: string; url: string }>;
}


export interface MahavidyaDetails {
  slug: string;
  name: string;
  description: string;
  iconography: string;
  associates: string[];
  keyTeachings: string[];
  mantras: string[];
  imageHint: string;
  imageUrl?: string;

  aspect?: string;
  consort?: string | null;
  notableForms?: string[];
  festivals?: string[];
  attributesList?: string[];

  essence: string;
  keyThemes: string[];
  iconographySummary: string;
  sadhanaSummary: string;
  colorTheme: string;
}

// Updated ShaktiPeetha interface for richer data
export interface ShaktiPeethaLocation {
  place?: string; // Made optional for flexibility
  city?: string; // Added for Kalighat structure
  district?: string; // Added for Jwalaji structure
  state: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  region?: string; // Added for Sharada Peetha
  division?: string; // Added for Jeshoreshwari
}

export interface ShaktiPeethaFestival extends FestivalDetail {
  month?: string;
}

export interface TempleFeatures {
  architecture: string;
  mainShrine: string;
  waterPresence?: string;
  otherShrines?: string[];
}

export interface Mythology {
  story: string;
  symbolism: string;
}

export interface AccessibilityInfo {
  nearestAirport?: string;
  nearestRailway?: string;
  nearestRailwayStation?: string; // Added for Kalighat
  localTransport?: string; // Added for Kalighat
  transportation?: string;
  trek?: string;
  currentStatus?: string; // Added for Sharada Peetha
  nearestTown?: string; // Added for Sharada Peetha
  transport?: string; // Added for Sharada Peetha & others
  nearestMetroStation?: string; // Added for Dakshineswar
}

export interface VisitorInfo {
  openingHours?: string;
  entryFee?: string;
  dressCode?: string;
  bestTimeToVisit?: string;
}

export interface MediaLinks {
  images?: string[];
  videos?: string[];
  mapEmbed?: string;
}

export interface DeityDetail {
  name: string;
  description: string;
}

export interface ShaktiPeetha {
  id: string;
  name: string;
  alternateNames?: string[]; // New
  location: string;
  detailedLocation?: ShaktiPeethaLocation;
  bodyPart: string;
  shakti: string; // Will store goddess.name
  bhairava: string; // Will store bhairava.name
  shaktiDetail?: DeityDetail; // New for detailed description
  bhairavaDetail?: DeityDetail; // New for detailed description
  significance: string | string[];
  templeType: string;
  associatedFestival: string;
  festivals?: ShaktiPeethaFestival[];
  imageHint: string;
  coordinates?: { lat: number; lng: number };
  imageUrl?: string;

  templeSignificance?: string; // Added for Kalighat, can map to significance
  mainAttractions?: string[]; // New
  architecture?: string; // New
  spiritualImportance?: string; // New
  keywords?: string[]; // Can map to tags

  templeFeatures?: TempleFeatures;
  culturalImpact?: string[];
  historicalNotes?: string[];
  mythology?: Mythology;
  spiritualPractices?: string[];
  accessibility?: AccessibilityInfo;
  visitorInfo?: VisitorInfo;
  media?: MediaLinks;
  resources?: PeethaResources;
  tags?: string[];
  lastUpdated?: string;
}


export interface VerseDetail {
  verse_number: number;
  sanskrit: string;
  hindi: string;
  english: string;
  explanation: string;
  english_transliteration?: string;
}

export interface SacredChant {
  id: string;
  title: string;
  description: string;
  type: 'Stotra' | 'Shloka' | 'Mantra' | 'Chalisa' | 'Sahasranama' | 'Vandana';
  deityFocus?: string | string[];
  verses: VerseDetail[];
  audioUrl?: string;
  videoUrl?: string;
  imageHint?: string;
  origin?: string;
  language?: string | string[];
  associatedForms?: string[];
  benefits?: string[];
  notes?: string;
  scriptureReference?: string;
  author?: string;
  total_verses?: number;
  recommended_practice?: {
    frequency?: string;
    time?: string;
    offering?: string;
    note?: string;
  };
  origin_story?: string;
  associated_texts?: string[];
  imageUrl?: string;
}

export interface ParvatiForm {
  name: string;
  description: string;
  iconography: string;
  story?: string;
  imageHint: string;
}


export interface TimelineEvent {
  title: string;
  era: string;
  description: string;
  significance: string;
  manifestation: string | string[];
  key_elements: string[];
}

export interface DivineStory {
  slug: string;
  title: string;
  source: string | { name: string; text: string; scripturalContext: string; }; // Updated
  summary: string;
  keyFigures: string[] | Array<{ name: string; role: string; }>; // Updated
  deities?: string[];
  themes?: string[];
  stotraTitle?: string; // Kept for backward compatibility
  stotraVerses?: string[]; // Kept for backward compatibility
  imageHint?: string;
  imageUrl?: string;
  // New detailed fields
  verseHighlight?: {
    title: string;
    verses: string[];
    translation: string[];
  };
  culturalSignificance?: {
    festivals: Array<{ name: string; importance: string; }>;
    worshipForm: string;
  };
  locationsAssociated?: Array<{ name: string; significance: string; }>;
  resources?: {
    wikipedia?: string;
    deviMahatmyam?: string;
    durgaSaptashatiExplanation?: string;
    markandeyaPurana?: string;
  };
  relatedStotras?: Array<{ name: string; link: string; }>;
  visualRepresentation?: {
    iconicPose: string;
    symbols: string[];
  };
}


export interface PanchaPrakritiFormDetails {
  name: string;
  alternate_names?: string[];
  role: string;
  key_attributes: string[];
  significance: string;
  special_iconography: string[];
  imageHint: string;
  imageUrl?: string;
}

export interface PanchaPrakritiImportanceDetails {
  on_worship: string;
  on_spiritual_practice: string;
  on_theology: string;
}

export interface PanchaPrakritiRitualsDetails {
  "Ganesh Janani Durga": string[];
  "Lakshmi": string[];
  "Sarasvati": string[];
  "Savitri": string[];
  "Radha": string[];
}

export interface PanchaPrakritisData {
  overview: string;
  key_form_of_devi: string;
  key_form_image_url?: string;
  forms: PanchaPrakritiFormDetails[];
  unifying_theme: string;
  importance: PanchaPrakritiImportanceDetails;
  rituals_and_practices: PanchaPrakritiRitualsDetails;
}

// This was for the overview cards, may become redundant or sourced from allMajorFormsDetailedData
export interface OtherProminentFormSummary {
  id: string;
  name: string;
  title: string;
  location: string;
  description: string; // This is shortDescription
  category: "Other Prominent Forms";
  imageUrl?: string;
  imageHint?: string;
  icon?: React.ElementType;
}

// Types for Devi Mahatmyam Forms Page
export interface DeviForm {
  id: string;
  name: string;
  role: string;
  context: string;
  attributes: string[];
  description?: string;
  imageHint?: string;
  imageUrl?: string;
  icon?: React.ElementType;
}

export interface DeviMahatmyamSection {
  id: string;
  title: string;
  introduction?: string;
  forms: DeviForm[];
  icon?: React.ElementType;
}

export interface DeviMahatmyamPageData {
  pageTitle: string;
  pageDescription: string;
  heroImage?: string;
  heroImageHint?: string;
  introduction: string;
  sections: DeviMahatmyamSection[];
  conclusion?: string;
}

// Unified type for detailed data of Kamakshi, Meenakshi, and other major forms.
export interface OtherMajorFormDetail {
  id: string; // Slug
  name: string;
  title: string;
  meaning?: string;
  meaningOfName?: string;
  shortDescription: string; // For overview cards
  description?: string; // Full description for detail page
  coreAttributes: string[];
  consort?: string | null;
  alternativeNames?: string[];
  keyMantras: MantraStotraItem[]; // Changed from string[] to MantraStotraItem[]
  primaryAttributes?: PrimaryAttributes;
  originsAndMythology?: OriginsAndMythologyContent;
  textsMentioningHer?: string[];
  iconography?: Partial<DetailedIconography> & { skinColor?: string | string[] };
  symbolism?: Partial<SymbolismDetail>;
  symbolismDeepDive?: SymbolismDetail;
  notableForms?: string[];
  majorFestivals?: FestivalDetail[] | string[];
  prominentTemples?: TempleDetail[];
  mantrasAndStotras?: MantraStotraItem[] | DetailedMantrasAndStotras;
  philosophicalInsights?: Partial<PhilosophicalInsights>;
  culturalInfluence?: Partial<CulturalInfluenceDetail>;
  relatedDeitiesAndAnimals?: {
    relatedDeities: string[];
    associatedAnimals: string[];
  };
  modernRelevance?: Partial<ModernRelevanceDetail>;
  furtherReading?: Array<{ title: string; url: string }>;
  closingNote?: string;
  imageUrl?: string; // For overview card and OG image
  imageHint?: string; // For overview card
  detailImageUrl?: string; // Specific, larger image for detail page hero
  detailImageHint?: string; // Hint for detail page hero image
  category?: string;
  iconName?: string;
}

