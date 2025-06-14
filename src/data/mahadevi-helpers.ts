
import type { MahadeviBaseData } from '@/types';

// Raw data for Mahadevis from the user's JSON
export const rawMahadevisJSON = {
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
export const processedMahadevisData: MahadeviBaseData[] = rawMahadevisJSON.Mahadevis.map(m => ({
  ...m,
  notable_forms: m.notable_forms,
  consort: m.consort === "None (Form of Shakti)" ? null : m.consort,
}));

// Helper function to get Mahadevi base data by name
export const getMahadeviByName = (name: string): MahadeviBaseData | undefined => {
  return processedMahadevisData.find(m => m.name === name);
};
