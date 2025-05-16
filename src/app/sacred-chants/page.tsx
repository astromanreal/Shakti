import Link from 'next/link';
import { sacredChantsData } from '@/data/sacred-chants-data'; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Library, ChevronRight, Mic2, TextQuote, BookOpenText, LanguagesIcon, Globe, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

const pageTitle = "Sacred Chants Library - Stotras, Mantras, Shlokas";
const pageDescription = "Immerse yourself in divine vibrations. Explore a library of Stotras, Shlokas, and Mantras dedicated to Maa Adi Shakti and her various forms. Find texts, translations, and meanings.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Sacred Chants", "Stotras", "Mantras", "Shlokas", "Hindu hymns", "devotional chants", 
    "Argala Stotram", "Keelakam Stotram", "Mahakali Stotram", "Shri Suktam", "Kanakadhara Stotram",
    "Saraswati Stuti", "Lalita Ashtakam", "Annapurna Stotram", "Shiva Shakti Stotram", "Kali Kavach",
    "Tara Stotram", "Bhuvaneshwari Stotram", "Chhinnamasta Kavach", "Bhairavi Stotram", 
    "Dhumavati Stotra", "Bagalamukhi Stotra", "Matangi Stotram", "Kamala Stotra"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/sacred-chants',
    images: [
      {
        url: `https://picsum.photos/seed/sacred-chants-library/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Sacred Chants Library',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/sacred-chants-library/1200/630`],
  },
};


export default function SacredChantsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Library className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {pageDescription}
        </p>
      </header>

      {sacredChantsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sacredChantsData.map((chant) => (
            <Card 
              key={chant.id} 
              className="flex flex-col bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 group border border-border/50 transform-style-preserve-3d hover:-rotate-y-1"
            >
              <div className="transform-style-preserve-3d group-hover:rotate-y-1 transition-transform duration-500 backface-hidden">
                <CardHeader className="pb-4 bg-gradient-to-br from-primary/10 via-card to-secondary/10">
                  <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl text-primary mb-1 flex items-center gap-2">
                          <Mic2 className="w-6 h-6 text-primary/80" /> 
                          {chant.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs whitespace-nowrap shadow-sm">{chant.type}</Badge>
                  </div>
                  {chant.deityFocus && (
                    <CardDescription className="text-sm text-secondary font-medium">
                      Focus: {chant.deityFocus}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-start gap-3 text-foreground/80 mb-4">
                      <TextQuote className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                      <p className="line-clamp-3 text-sm h-16">
                          {chant.description}
                      </p>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1.5 border-t pt-3 mt-3">
                      {chant.language && <p className="flex items-center gap-1.5"><LanguagesIcon className="w-3.5 h-3.5"/> <strong>Language:</strong> {Array.isArray(chant.language) ? chant.language.join(', ') : chant.language}</p>}
                      {chant.origin && <p className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5"/> <strong>Origin:</strong> {chant.origin}</p>}
                      {chant.verses?.length > 0 && <p className="flex items-center gap-1.5"><ListChecks className="w-3.5 h-3.5"/> <strong>Verses:</strong> {chant.verses.length}</p>}
                      {chant.scriptureReference && <p className="flex items-center gap-1.5"><BookOpenText className="w-3.5 h-3.5"/> <strong>Source:</strong> {chant.scriptureReference}</p>}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto border-t border-border/50 pt-4 p-6">
                  <Button asChild variant="link" className="text-accent p-0 font-semibold text-base w-full justify-start group-hover:text-accent/80 transition-colors">
                    <Link href={`/sacred-chants/${chant.id}`}>
                      Read Full Text & Details <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center p-8 bg-muted rounded-lg shadow-lg">
            <Library className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <CardTitle className="text-2xl text-primary mb-2">Library Under Curation</CardTitle>
            <p className="text-lg text-muted-foreground">
                The library of sacred chants is currently being curated. Please check back soon for inspiring hymns and mantras.
            </p>
        </Card>
      )}
      
      <section className="mt-16 text-center p-8 bg-secondary/10 rounded-lg">
        <h3 className="text-2xl font-semibold text-secondary mb-3">Divine Echoes</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          Each chant carries profound spiritual energy. Delve deeper to experience their transformative power. Audio recitations and guided chanting videos will be added in future updates.
        </p>
      </section>
    </div>
  );
}
