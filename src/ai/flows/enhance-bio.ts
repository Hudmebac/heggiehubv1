// src/ai/flows/enhance-bio.ts
'use server';
/**
 * @fileOverview This file defines a Genkit flow to enhance a LinkedIn bio with witty and humorous elements.
 *
 * - enhanceBio - A function that takes a LinkedIn profile ID, fetches the bio, and enhances it.
 * - EnhanceBioInput - The input type for the enhanceBio function.
 * - EnhanceBioOutput - The return type for the enhanceBio function.
 */

import {ai} from '@/ai/ai-instance';
import {getLinkedInProfile} from '@/services/linkedin';
import {z} from 'genkit';

const EnhanceBioInputSchema = z.object({
  linkedinProfileId: z
    .string()
    .describe('The LinkedIn profile ID of the person whose bio is to be enhanced.'),
});
export type EnhanceBioInput = z.infer<typeof EnhanceBioInputSchema>;

const EnhanceBioOutputSchema = z.object({
  enhancedBio: z.string().describe('The enhanced bio with witty and humorous elements.'),
});
export type EnhanceBioOutput = z.infer<typeof EnhanceBioOutputSchema>;

export async function enhanceBio(input: EnhanceBioInput): Promise<EnhanceBioOutput> {
  return enhanceBioFlow(input);
}

const enhanceBioPrompt = ai.definePrompt({
  name: 'enhanceBioPrompt',
  input: {
    schema: z.object({
      originalBio: z.string().describe('The original bio from LinkedIn.'),
    }),
  },
  output: {
    schema: z.object({
      enhancedBio: z
        .string()
        .describe('The enhanced bio with witty and humorous elements injected.'),
    }),
  },
  prompt: `You are a professional bio enhancer specializing in injecting wit and humor into LinkedIn profiles.

  Your task is to take the original bio and rewrite it to be more engaging and humorous while maintaining a professional tone.

  Original Bio: {{{originalBio}}}

  Enhanced Bio:`, 
});

const enhanceBioFlow = ai.defineFlow<
  typeof EnhanceBioInputSchema,
  typeof EnhanceBioOutputSchema
>({
  name: 'enhanceBioFlow',
  inputSchema: EnhanceBioInputSchema,
  outputSchema: EnhanceBioOutputSchema,
},
async input => {
  const linkedInProfile = await getLinkedInProfile(input.linkedinProfileId);
  const {output} = await enhanceBioPrompt({
    originalBio: linkedInProfile.summary,
  });
  return output!;
});
