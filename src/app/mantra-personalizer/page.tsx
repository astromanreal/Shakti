"use client";

import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { personalizeMantra, PersonalizeMantraInput, PersonalizeMantraOutput } from "@/ai/flows/mantra-personalizer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { Metadata } from 'next';

// Metadata for static export, page itself is client-side.
// For client components, metadata is typically defined in the nearest server component parent (e.g., layout.tsx or a server component page wrapper).
// However, since this is a page.tsx file, we can export metadata directly.
const pageTitle = "AI Mantra Personalizer - Get Your Custom Mantra";
const pageDescription = "Receive a personalized mantra based on your preferred deity and spiritual intention. Our AI spiritual guide crafts mantras aligned with your needs for wealth, health, knowledge, etc.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Mantra Personalizer", "AI Mantra", "custom mantra", "personalized mantra", 
    "spiritual intentions", "deity preference", "Hindu mantras AI", "Vedic AI"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/mantra-personalizer',
    images: [
      {
        url: `https://picsum.photos/seed/ai-mantra-personalizer/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'AI Mantra Personalizer',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/ai-mantra-personalizer/1200/630`],
  },
};


const formSchema = z.object({
  deityPreference: z.string().min(2, {
    message: "Deity preference must be at least 2 characters.",
  }).max(50, {
    message: "Deity preference must be at most 50 characters.",
  }),
  userIntention: z.string().min(5, {
    message: "User intention must be at least 5 characters.",
  }).max(200, {
    message: "User intention must be at most 200 characters.",
  }),
});

function SimpleMarkdownRenderer({ markdown }: { markdown: string }) {
  if (!markdown) return null;

  const html = markdown
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold mt-2 mb-1">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mt-3 mb-2">$1</h1>')
    .replace(/\n/g, '<br />');

  return <div dangerouslySetInnerHTML={{ __html: html }} className="prose dark:prose-invert max-w-none" />;
}


export default function MantraPersonalizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PersonalizeMantraOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      deityPreference: "",
      userIntention: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const input: PersonalizeMantraInput = {
        deityPreference: values.deityPreference,
        userIntention: values.userIntention,
      };
      const response = await personalizeMantra(input);
      setResult(response);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4 mx-auto w-fit">
            <Wand2 className="w-10 h-10 text-primary" />
          </div>
          <CardTitle className="text-3xl">Mantra Personalizer</CardTitle>
          <CardDescription>
            Receive a personalized mantra based on your preferred deity and intention, crafted by our AI spiritual guide.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="deityPreference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Preferred Deity</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Durga, Lakshmi, Saraswati" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter the name of the deity you feel most connected to for this mantra.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userIntention"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Your Intention</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., For wealth and prosperity, for courage and strength, for knowledge and wisdom"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Clearly state the purpose or goal for which you seek this mantra.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 bg-accent hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Personalizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Personalize Mantra
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-8 max-w-2xl mx-auto">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="mt-8 max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Personalized Mantra</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Personalized Mantra:</h3>
              <div className="p-4 bg-muted rounded-md">
                 <SimpleMarkdownRenderer markdown={result.personalizedMantra} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Explanation:</h3>
               <div className="p-4 bg-muted rounded-md">
                <SimpleMarkdownRenderer markdown={result.explanation} />
              </div>
            </div>
          </CardContent>
          <CardFooter>
             <p className="text-sm text-muted-foreground">
              Remember to chant your mantra with devotion and focus. May it bring you closer to your spiritual goals.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
