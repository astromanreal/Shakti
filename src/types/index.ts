

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
  imageUrl?: string; // Added for specific Mahadevi images
}

// New interfaces for detailed Durga data structure
export interface PrimaryAttributes {
  gender: string;
  nature: string;
  energyType: string;
  affiliation: string[];
  planet: string;
}

export type OriginsAndMythologyContent = Record<string, string | string[]>;


export interface DetailedIconography {
  skinColor: string[];
  numberOfArms: number;
  mount: string;
  commonWeapons: string[]; // For Durga: weapons. For Lakshmi: attributes like lotus, coins. For Saraswati: items she holds.
  posture: string;
  expressions: string[];
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
  time: string;
  region?: string;
  description?: string;
  significance: string;
}

export interface MantraStotraItem {
  name: string;
  sanskrit?: string;
  meaning?: string;
  description?: string;
  source?: string;
  author?: string;
}

export interface DetailedMantrasAndStotras {
  mantras: MantraStotraItem[];
  stotras: MantraStotraItem[];
}

export interface TempleDetail {
  id: string; // Added ID for unique key
  name: string;
  location: string;
  significance: string;
}

export interface ShaktiPeethasInfo {
  total?: number;
  importantOnes: string[];
  description: string;
  notableSites?: string[];
}

export type PhilosophicalInsights = Record<string, string | string[]>;


export interface CulturalInfluenceDetail {
  literature: string[];
  danceForms: string[];
  artAndSculpture: string;
  moviesAndMedia: string[];
  worshipPractices?: string; // Added for Saraswati
}

export interface ModernRelevanceDetail {
  womenEmpowerment: string;
  spiritualBalance: string;
  festivalsAndUnity: string;
  // Lakshmi specific fields
  householdWorship?: string;
  businessAndFinance?: string;
  // Saraswati specific fields
  educationFocus?: string;
  worshipSummary?: string; // Consolidating worship practices here might be better than in culturalInfluence
  modernSignificance?: string; // General modern significance
}

export interface ExternalLinks {
  [key: string]: string;
}


export interface TrideviDetails extends MahadeviBaseData {
  slug: 'durga' | 'lakshmi' | 'saraswati' | 'parvati' | 'kali';
  introduction: string;
  iconographyDetails: string; // General summary for card
  mantras: string[]; // For card / simple display
  imageHint: string;
  imageUrl?: string; // Already here

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
  detailedFestivals?: FestivalDetail[];
  detailedMantrasAndStotras?: DetailedMantrasAndStotras;
  majorTemples?: TempleDetail[];
  shaktiPeethasInfo?: ShaktiPeethasInfo;
  philosophicalInsights?: PhilosophicalInsights;
  culturalInfluence?: CulturalInfluenceDetail;
  relatedDeities?: string[];
  associatedAnimals?: string[];
  modernRelevance?: ModernRelevanceDetail;
  externalLinks?: ExternalLinks;
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
  imageUrl?: string; // Added imageUrl property

  aspect?: string;
  consort?: string | null;
  notableForms?: string[];
  festivals?: string[];
  attributesList?: string[];
}


export interface ShaktiPeetha {
  id: string;
  name: string;
  location: string;
  bodyPart: string;
  shakti: string;
  bhairava: string;
  significance: string;
  templeType: string;
  associatedFestival: string;
  imageHint: string;
  coordinates?: { lat: number; lng: number };
}

export interface VerseDetail {
  verse_number: number;
  sanskrit: string;
  hindi: string;
  english: string; // This can be transliteration or direct English translation
  explanation: string; // This is the field for conceptual explanation
  english_transliteration?: string; // Explicit field if needed
}

export interface SacredChant {
  id: string;
  title: string;
  description: string; // Overall description of the Stotram
  type: 'Stotra' | 'Shloka' | 'Mantra' | 'Chalisa' | 'Sahasranama' | 'Vandana';
  deityFocus?: string | string[]; // Made flexible
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
  imageUrl?: string; // Added for specific chant images
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
  source: string;
  summary: string;
  keyFigures: string[];
  stotraTitle?: string;
  stotraVerses: string[];
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
  rit