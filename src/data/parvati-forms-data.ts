
import type { ParvatiForm, NavForm } from '@/types';
import { getMahadeviByName } from './mahadevi-helpers';
// Import navadurgaForms from tridevi-data.ts where it's now defined
// This creates a slight dependency, but it's logical as Navadurga is part of Durga's detailed data.
import { trideviData } from './tridevi-data'; // This will allow access to the defined navadurgaForms

// Access navadurgaForms from the Durga entry in trideviData
const durgaEntry = trideviData.find(g => g.slug === 'durga');
const navadurgaForms: NavForm[] = durgaEntry?.navadurga || [];


const parvatiBaseForForms = getMahadeviByName("Maa Parvati");

export const parvatiFormsData: ParvatiForm[] = (parvatiBaseForForms?.notable_forms || []).map(formName => {
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
