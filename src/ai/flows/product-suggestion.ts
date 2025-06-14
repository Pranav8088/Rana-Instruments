'use server';

/**
 * @fileOverview AI flow for suggesting related instruments and accessories based on the
 * product being viewed. Provides personalized recommendations to users browsing the website.
 *
 * - suggestRelatedProducts - A function that suggests related products.
 * - SuggestRelatedProductsInput - The input type for the suggestRelatedProducts function.
 * - SuggestRelatedProductsOutput - The return type for the suggestRelatedProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedProductsInputSchema = z.object({
  productDescription: z
    .string()
    .describe('The description of the product currently being viewed.'),
  customerRequirements: z
    .string()
    .optional()
    .describe('Optional: Specific requirements or application details from the customer.'),
  productPortfolio: z
    .string()
    .describe('The list of available product for suggestions'),
});

export type SuggestRelatedProductsInput = z.infer<typeof SuggestRelatedProductsInputSchema>;

const SuggestRelatedProductsOutputSchema = z.object({
  suggestedProducts: z
    .array(z.string())
    .describe('An array of product names that are related to the viewed product.'),
  reasoning: z.string().describe('The reasoning behind the product suggestions.'),
});

export type SuggestRelatedProductsOutput = z.infer<typeof SuggestRelatedProductsOutputSchema>;

export async function suggestRelatedProducts(input: SuggestRelatedProductsInput): Promise<SuggestRelatedProductsOutput> {
  return suggestRelatedProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedProductsPrompt',
  input: {schema: SuggestRelatedProductsInputSchema},
  output: {schema: SuggestRelatedProductsOutputSchema},
  prompt: `You are an expert in precision measuring instruments. Given a description of a product, its portfolio and the customer's requirement, suggest related instruments and accessories that would be useful for the customer's application.

Product Description: {{{productDescription}}}
Customer Requirements: {{{customerRequirements}}}
Product Portfolio: {{{productPortfolio}}}

Suggest related products and explain your reasoning.

Output the suggestedProducts as a list of product names, and the reasoning behind the suggestions.`,
});

const suggestRelatedProductsFlow = ai.defineFlow(
  {
    name: 'suggestRelatedProductsFlow',
    inputSchema: SuggestRelatedProductsInputSchema,
    outputSchema: SuggestRelatedProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
