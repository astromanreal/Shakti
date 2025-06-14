
'use server';
/**
 * @fileOverview AI-powered mantra and stotra generator.
 *
 * - generatePersonalizedMantra - A function that generates a personalized mantra or stotra.
 * - MantraGeneratorInput - The input type for the generatePersonalizedMantra function.
 * - MantraGeneratorOutput - The return type for the generatePersonalizedMantra function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MantraGeneratorInputSchema = z.object({
  deity: z.string().describe('The chosen deity for the mantra/stotra. E.g., "Maa Durga", "Lord Shiva", "Adi Shakti".'),
  intent: z.string().describe('The user\'s specific intention, prayer, or purpose for the mantra/stotra. E.g., "For courage and overcoming obstacles," "For peace and wisdom in studies," "Gratitude for blessings received."'),
  chantType: z.enum(['mantra', 'stotra']).default('stotra').describe('The desired type of chant: a short mantra or a longer stotra (hymn).'),
  language: z.enum(['sanskrit_devanagari', 'english_translation', 'hindi_translation']).default('sanskrit_devanagari').describe('The desired output language for the chant.'),
});
export type MantraGeneratorInput = z.infer<typeof MantraGeneratorInputSchema>;

const MantraGeneratorOutputSchema = z.object({
  generatedChant: z.string().describe('The AI-generated personalized mantra or stotra.'),
  explanation: z.string().optional().describe('A brief explanation of the chant\'s meaning or focus, if applicable.'),
  deityResponse: z.string().optional().describe('A short, thematic response or blessing from the perspective of the chosen deity, related to the user\'s intent.'),
});
export type MantraGeneratorOutput = z.infer<typeof MantraGeneratorOutputSchema>;

// Placeholder function - actual implementation will call the Genkit flow.
export async function generatePersonalizedMantra(input: MantraGeneratorInput): Promise<MantraGeneratorOutput> {
  // return mantraGeneratorFlow(input);
  console.log("AI Flow: Generating personalized mantra for:", input);
  // Simulate AI response for now
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  let chant = `ॐ श्रीं ह्रीं क्लीं ${input.deity.replace("Maa ", "").replace("Lord ", "")} देव्यै नमः।\n तव कृपया मम ${input.intent.toLowerCase().substring(0,20)}... सिद्धिर्भवतु।`;
  let explanation = `This is a sample AI-generated chant focusing on ${input.deity} for the purpose of ${input.intent}. It invokes the deity and seeks blessings for the stated intention.`;
  if (input.chantType === 'stotra') {
    chant = `जय जय ${input.deity}, कृपा सागराय।\n${input.intent} हेतोः, प्रसीदतु सदा मयि॥\n(Victory to ${input.deity}, ocean of compassion.\nFor the purpose of ${input.intent}, may you always be pleased with me.)`;
    explanation = `This is a sample AI-generated short stotra for ${input.deity} based on your intent: "${input.intent}". It praises the deity and requests their grace.`;
  }
  
  return {
    generatedChant: `// Placeholder: AI generated ${input.chantType} for ${input.deity} regarding "${input.intent}" in ${input.language} will appear here. Full feature under development.\n${chant}`,
    explanation: explanation,
    deityResponse: `// Placeholder: A message from ${input.deity} regarding your intent for "${input.intent}" will appear here. Full feature under development.\nMay your devotion bring you peace and fulfillment.`
  };
}

const prompt = ai.definePrompt({
  name: 'mantraGeneratorPrompt',
  input: { schema: MantraGeneratorInputSchema },
  output: { schema: MantraGeneratorOutputSchema },
  prompt: \`You are a knowledgeable and respectful AI assistant specializing in Hindu spirituality, deities, and the creation of devotional chants (mantras and stotras).
Your task is to generate a personalized chant based on the user's chosen deity and their stated intention.
The chant should be respectful, theologically sound (within reasonable AI limits), and appropriate for the deity and intent.

Deity: {{{deity}}}
User's Intention: {{{intent}}}
Desired Chant Type: {{{chantType}}}
Desired Language: {{{language}}}

Guidelines:
1.  **Respect and Reverence**: All generated content must be deeply respectful of Hindu traditions and deities.
2.  **Deity Consistency**: The chant should align with the known attributes, symbolism, and common invocations for the specified {{{deity}}}. If the deity is "Adi Shakti (General)", focus on universal divine feminine energy.
3.  **Intent Focus**: The chant should clearly reflect and address the user's {{{intent}}}.
4.  **Chant Type**:
    *   If 'mantra', generate a short, potent phrase or a few lines (1-4 lines). It can be a mix of Bija mantras, deity names, and key phrases related to the intent.
    *   If 'stotra', generate a short hymn of 2-4 couplets (4-8 lines total). It should have a devotional and praiseful tone.
5.  **Language**:
    *   If 'sanskrit_devanagari', provide the chant in Devanagari script.
    *   If 'english_translation', provide an English translation of a Sanskrit-style chant.
    *   If 'hindi_translation', provide a Hindi translation/rendition of a Sanskrit-style chant.
    *   For translations, you can first think in Sanskrit and then translate, or compose directly in the target language while maintaining a devotional Sanskrit-like structure.
6.  **Explanation**: Provide a brief, clear explanation of the generated chant's meaning, focus, or how it relates to the deity and intent.
7.  **Deity Response (Optional but Recommended)**: If possible, add a short, thematic, and benevolent message as if from the {{{deity}}} responding to the user's prayer or intent. This should be comforting and aligned with the deity's nature.

Output Format:
Ensure your output strictly adheres to the JSON schema defined for MantraGeneratorOutput.

Example (if user chose Maa Durga for courage, type stotra, language English):
{
  "generatedChant": "O Mother Durga, fierce and bright,\nGrant me courage, fill me with light.\nWith your sword, cut fears away,\nVictory and strength bestow today.",
  "explanation": "This stotra invokes Maa Durga, praising her radiant and fierce nature, and asks for courage, light, removal of fears, and blessings of victory and strength, aligning with the user's intent.",
  "deityResponse": "Fear not, my child. My strength is yours. Walk your path with a brave heart, and I shall be your shield."
}

Prioritize authentic-sounding language and traditional phrasing where possible, but creativity in line with the user's request is encouraged. Avoid making up new, complex theological concepts. Stick to established imagery and prayer structures.
If the request is ambiguous or potentially disrespectful, you can generate a more generic positive chant related to the deity.
For safety, avoid generating chants for highly esoteric or potentially harmful intentions. Focus on positive spiritual growth, well-being, and devotion.

Generate the chant now.
  \`,
  config: {
    safetySettings: [
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  },
});

const mantraGeneratorFlow = ai.defineFlow(
  {
    name: 'mantraGeneratorFlow',
    inputSchema: MantraGeneratorInputSchema,
    outputSchema: MantraGeneratorOutputSchema,
  },
  async (input) => {
    // For now, we are returning the placeholder.
    // When ready to use the LLM:
    // const { output } = await prompt(input);
    // if (!output) {
    //   throw new Error("Failed to generate response from LLM.");
    // }
    // return output;
    
    // Using the placeholder logic from the wrapper function for now.
    console.log("Genkit Flow: Simulating mantra generation for:", input);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    
    let chant = `ॐ श्रीं ह्रीं क्लीं ${input.deity.replace("Maa ", "").replace("Lord ", "")} देव्यै नमः। तव कृपया मम ${input.intent.toLowerCase().substring(0,30)}... सिद्धिर्भवतु।`;
    let explanation = `This is an AI-generated chant focusing on ${input.deity} for the purpose of '${input.intent}'. It invokes the deity and seeks blessings for the stated intention.`;
    let deityResponse = `May your devotion to me, ${input.deity}, regarding '${input.intent}' bring you peace and fulfillment.`;

    if (input.chantType === 'stotra') {
      chant = `जय जय श्री ${input.deity.replace("Maa ", "").replace("Lord ", "")} देव्यै नमः।\nत्वं हि शक्ति, त्वं हि शान्ति, त्वं हि सर्वार्थदायिनी॥\nमम हृदये वसतु नित्यं, ${input.intent.toLowerCase().substring(0,40)}... प्रपूरयतु॥\n(Victory to Goddess ${input.deity}! You are power, peace, and the giver of all desires. Reside in my heart always, and fulfill my intent for ${input.intent.toLowerCase().substring(0,40)}...)`;
      explanation = `This is an AI-generated short stotra for ${input.deity} based on your intent: "${input.intent}". It praises the deity and requests their grace to fulfill your intention.`;
      deityResponse = `Beloved devotee, your prayer for '${input.intent}' reaches me, ${input.deity}. Trust in my divine play, and may your righteous desires be fulfilled.`
    }

    if (input.language === 'english_translation') {
        chant = `(Sample English Translation for ${input.deity})\nOm and Salutations to the Divine Mother ${input.deity}!\nFor ${input.intent}, may your grace shower upon me.\nGrant me strength, grant me peace, lead me to the light.`;
        explanation = `This is an English translation of a devotional chant for ${input.deity}, focusing on your intent: "${input.intent}".`;
    } else if (input.language === 'hindi_translation') {
        chant = `(प्रिय ${input.deity} के लिए हिन्दी में स्तुति)\nहे माँ ${input.deity}, आपकी सदा ही जय हो।\nमेरी यह प्रार्थना '${input.intent}', स्वीकार करो माँ, कृपा करो।`;
        explanation = `यह ${input.deity} के लिए आपकी भावना "${input.intent}" पर आधारित एक हिन्दी स्तुति है।`;
    }
    
    return {
      generatedChant: chant,
      explanation: explanation,
      deityResponse: deityResponse,
    };
  }
);
