
import Link from 'next/link';
import { sacredChantsData } from '@/data/sacred-chants-data'; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Library, ChevronRight, Mic2, TextQuote, BookOpenText, LanguagesIcon, Globe, ListChecks } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Sacred Chants Library - Stotras, Mantras & Shlokas for Shakti Worship";
const pageDescription = "Immerse yourself in divine vibrations. Explore a library of Stotras, Shlokas, and Mantras dedicated to Maa Adi Shakti and her various forms. Find texts, translations, and meanings for your spiritual practice.";
const ogImageUrl = `${siteUrl}/og-images/sacred-chants-library.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Sacred Chants", "Stotras", "Mantras", "Shlokas", "Hindu hymns", "devotional chants", 
    "Argala Stotram", "Keelakam Stotram", "Mahakali Stotram", "Shri Suktam", "Kanakadhara Stotram",
    "Saraswati Stuti", "Lalita Ashtakam", "Annapurna Stotram", "Shiva Shakti Stotram", "Kali Kavach",
    "Tara Stotram", "Bhuvaneshwari Stotram", "Chhinnamasta Kavach", "Bhairavi Stotram", 
    "Dhumavati Stotra", "Bagalamukhi Stotra", "Matangi Stotram", "Kamala Stotra", "Shakti mantra"
  ],
  alternates: {
    canonical: '/sacred-chants',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/sacred-chants`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Sacred Chants Library - Divine Hymns and Mantras for Shakti Worship',
      },
    ],
    type: 'website', 
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function SacredChantsPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/sacred-chants`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": sacredChantsData.map((chant, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork", // Could be MusicComposition, AudioObject if audio is primary
          "name": chant.title,
          "description": chant.description,
          "url": `${siteUrl}/sacred-chants/${chant.id}`,
          "genre": chant.type,
          "keywords": [chant.title, chant.type, ...(Array.isArray(chant.deityFocus) ? chant.deityFocus : [chant.deityFocus || ""])].join(", "),
          "author": chant.author ? { "@type": "Person", "name": chant.author } : { "@type": "Organization", "name": "Traditional" },
          "publisher": {
            "@type": "Organization",
            "name": "Shakti Darshan"
          }
        }
      }))
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16" aria-labelledby="sacred-chants-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <Library className="w-16 h-16 text-primary" />
          </div>
          <h1 id="sacred-chants-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
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
                className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-[1.03] group border border-border/30"
              >
                <CardHeader className="pb-4 bg-gradient-to-br from-card via-muted/20 to-card">
                  <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl text-primary mb-1 flex items-center gap-2.5 group-hover:text-accent transition-colors duration-300">
                          <Mic2 className="w-7 h-7 text-primary/80 group-hover:text-accent/80 transition-colors duration-300" /> 
                          {chant.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs whitespace-nowrap shadow-sm px-3 py-1">{chant.type}</Badge>
                  </div>
                  {chant.deityFocus && (
                    <CardDescription className="text-sm text-secondary font-medium pt-1">
                      Focus: {Array.isArray(chant.deityFocus) ? chant.deityFocus.join(', ') : chant.deityFocus}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-start gap-3 text-foreground/80 mb-4">
                      <TextQuote className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0"/>
                      <p className="line-clamp-3 text-base h-[4.5rem]"> 
                          {chant.description}
                      </p>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1.5 border-t border-border/30 pt-4 mt-4">
                      {chant.language && <p className="flex items-center gap-1.5"><LanguagesIcon className="w-4 h-4"/> <strong>Language:</strong> {Array.isArray(chant.language) ? chant.language.join(', ') : chant.language}</p>}
                      {chant.origin && <p className="flex items-center gap-1.5"><Globe className="w-4 h-4"/> <strong>Origin:</strong> {chant.origin}</p>}
                      {chant.verses?.length > 0 && <p className="flex items-center gap-1.5"><ListChecks className="w-4 h-4"/> <strong>Verses:</strong> {chant.verses.length}</p>}
                      {chant.scriptureReference && <p className="flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/> <strong>Source:</strong> {chant.scriptureReference}</p>}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto border-t border-border/30 pt-4 p-6">
                  <Button asChild variant="link" className="text-accent p-0 font-semibold text-md group-hover:text-accent-foreground transition-colors">
                    <Link href={`/sacred-chants/${chant.id}`}>
                      Read Full Text & Details <ChevronRight className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center p-8 lg:p-12 bg-muted/50 rounded-2xl shadow-lg border border-border/30">
              <Library className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
              <CardTitle className="text-2xl text-primary mb-3 tracking-tight">Library Under Curation</CardTitle>
              <p className="text-lg text-muted-foreground">
                  The library of sacred chants is currently being curated. Please check back soon for inspiring hymns and mantras.
              </p>
          </Card>
        )}
        
        <section className="mt-16 text-center p-8 lg:p-12 bg-secondary/10 rounded-2xl shadow-lg border border-secondary/20" aria-labelledby="divine-echoes-title">
          <h3 id="divine-echoes-title" className="text-2xl md:text-3xl font-semibold text-secondary mb-4 tracking-tight">Divine Echoes</h3>
          <p className="text-foreground/80 text-lg max-w-xl mx-auto">
            Each chant carries profound spiritual energy. Delve deeper to experience their transformative power. Audio recitations and guided chanting videos will be added in future updates.
          </p>
        </section>
      </div>
    </>
  );
}
