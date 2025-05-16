'use server';

/**
 * @fileOverview A mantra personalization AI agent.
 *
 * - personalizeMantra - A function that handles the mantra personalization process.
 * - PersonalizeMantraInput - The input type for the personalizeMantra function.
 * - PersonalizeMantraOutput - The return type for the personalizeMantra function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeMantraInputSchema = z.object({
  deityPreference: z
    .string()
    .describe('The preferred deity for mantra personalization, e.g., Durga, Lakshmi, Saraswati.'),
  userIntention: z
    .string()
    .describe('The intention or purpose for the mantra, e.g., for wealth, health, knowledge.'),
});
export type PersonalizeMantraInput = z.infer<typeof PersonalizeMantraInputSchema>;

const PersonalizeMantraOutputSchema = z.object({
  personalizedMantra: z
    .string()
    .describe('A personalized mantra based on the deity preference and user intention.'),
  explanation: z
    .string()
    .describe('An explanation of the mantra and its relevance to the specified deity and intention.'),
});
export type PersonalizeMantraOutput = z.infer<typeof PersonalizeMantraOutputSchema>;

export async function personalizeMantra(input: PersonalizeMantraInput): Promise<PersonalizeMantraOutput> {
  return personalizeMantraFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeMantraPrompt',
  input: {schema: PersonalizeMantraInputSchema},
  output: {schema: PersonalizeMantraOutputSchema},
  prompt: `You are an expert in creating personalized mantras based on deity preferences and user intentions.

  Deity Preference: {{{deityPreference}}}
  User Intention: {{{userIntention}}}

  Create a personalized mantra that aligns with the specified deity and intention. Also, provide a brief explanation of the mantra and its relevance.
  The mantra should be in Sanskrit, Hindi, and English.
  The response should be in markdown format.
  `,
});

const personalizeMantraFlow = ai.defineFlow(
  {
    name: 'personalizeMantraFlow',
    inputSchema: PersonalizeMantraInputSchema,
    outputSchema: PersonalizeMantraOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
