"use client";

import { useState, useEffect } from 'react';
import { enhanceBio } from '@/ai/flows/enhance-bio';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from 'lucide-react';

export function BioSection() {
  const [bio, setBio] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchAndEnhanceBio = async () => {
    setLoading(true);
    setError(null);
    try {
      // Replace with actual LinkedIn Profile ID if available
      const result = await enhanceBio({ linkedinProfileId: 'craig-heggie-123' });
      setBio(result.enhancedBio);
    } catch (err) {
      console.error("Error enhancing bio:", err);
      setError('Failed to enhance bio. Please try again.');
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not fetch or enhance the bio.",
      })
      // Fallback bio
      setBio("Experienced Software Engineer with a passion for innovation... and occasionally breaking things just to see how they work. Let's build something amazing (or at least amusing).");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndEnhanceBio();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fetch on initial mount

  return (
    <section id="bio" className="section-padding bg-secondary/10 dark:bg-black/20">
      <div className="container mx-auto">
        <Card className="shadow-lg border border-border transition-shadow duration-300 hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl mb-2">About Me</CardTitle>
            <CardDescription>A slightly more entertaining version, AI-enhanced!</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : error ? (
              <p className="text-destructive">{error}</p>
            ) : (
              <p className="text-lg leading-relaxed">{bio}</p>
            )}
          </CardContent>
           <CardFooter>
             <Button
               onClick={fetchAndEnhanceBio}
               disabled={loading}
               variant="secondary" // Use secondary variant for orange button
               className="group text-secondary-foreground" // Ensure text is readable on orange
               >
               {loading ? 'Enhancing...' : 'Enhance Again'}
              <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 animate-pulse" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
