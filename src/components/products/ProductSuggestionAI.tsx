'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Lightbulb, PackagePlus } from 'lucide-react';
import { suggestRelatedProducts, type SuggestRelatedProductsOutput } from '@/ai/flows/product-suggestion';
import { useToast } from '@/hooks/use-toast';

interface ProductSuggestionAIProps {
  productDescription: string;
  productPortfolio: string;
  currentProductId: string;
}

export default function ProductSuggestionAI({ productDescription, productPortfolio, currentProductId }: ProductSuggestionAIProps) {
  const [suggestions, setSuggestions] = useState<SuggestRelatedProductsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestRelatedProducts({
        productDescription,
        productPortfolio,
        customerRequirements: 'General industrial use, high precision needed.', // Example requirement
      });
      
      // Filter out the current product from suggestions
      if (result && result.suggestedProducts) {
        result.suggestedProducts = result.suggestedProducts.filter(
          name => !name.toLowerCase().includes(productDescription.split(' ')[0].toLowerCase()) && 
                  !productDescription.toLowerCase().includes(name.toLowerCase())
        );
      }
      setSuggestions(result);

    } catch (error) {
      console.error('Error getting product suggestions:', error);
      toast({
        variant: "destructive",
        title: "AI Suggestion Error",
        description: "Could not fetch product suggestions at this time. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-8 bg-secondary shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-headline text-primary">
          <Lightbulb className="mr-2 h-6 w-6 text-accent" />
          Intelligent Product Suggestions
        </CardTitle>
        <CardDescription>
          Discover related instruments and accessories based on this product.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!suggestions && !isLoading && (
          <Button onClick={handleGetSuggestions} disabled={isLoading} aria-live="polite">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <PackagePlus className="mr-2 h-4 w-4" />
                Get AI Suggestions
              </>
            )}
          </Button>
        )}
        
        {isLoading && (
          <div className="flex items-center text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Fetching recommendations... please wait.
          </div>
        )}

        {suggestions && (
          <div className="space-y-4">
            <Alert variant="default" className="bg-background">
              <Lightbulb className="h-5 w-5 text-primary" />
              <AlertTitle className="font-semibold text-primary">AI Recommendations</AlertTitle>
              <AlertDescription className="space-y-3">
                {suggestions.suggestedProducts && suggestions.suggestedProducts.length > 0 ? (
                  <>
                    <p className="font-medium text-foreground">Suggested Products:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {suggestions.suggestedProducts.map((product, index) => (
                        <li key={index}>{product}</li>
                      ))}
                    </ul>
                    <p className="mt-3"><span className="font-medium text-foreground">Reasoning:</span> {suggestions.reasoning}</p>
                  </>
                ) : (
                  <p>No additional specific suggestions found beyond this excellent product. Explore our full catalog for more options!</p>
                )}
                 <Button onClick={handleGetSuggestions} variant="outline" size="sm" className="mt-4">
                    <PackagePlus className="mr-2 h-4 w-4" />
                    Refresh Suggestions
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
