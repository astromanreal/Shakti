
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { trideviData } from '@/data/tridevi-data'; 
import { parvatiFormsData } from '@/data/parvati-forms-data';
import type { TrideviDetails, ParvatiForm } from '@/types';
import { Flower2, Heart, Users, Award, CalendarDays, Star, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

const parvatiInfoBase = trideviData.find(g => g.slug === 'parvati');
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const ogImageUrl = `${siteUrl}/og-images/parvati.jpg`;

const pageTitle = `Maa Parvati - ${parvatiInfoBase?.aspect || 'The Mother Goddess'}`;
const pageDescription = parvatiInfoBase?.introduction || "Explore Maa Parvati, the gentle Mother Goddess, consort of Lord Shiva. Learn about her aspects, forms like Annapurna and Gauri, symbolism, festivals, and stories.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Maa Parvati", "Parvati", "Mother Goddess", "Gauri", "Annapurna", "Shailaputri", 
    "consort of Shiva", "Hindu Goddess", "Shakti", "Divine Feminine"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/parvati',
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Maa Parvati - The Mother Goddess',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};


export default function ParvatiPage() {
  const parvatiDetails = trideviData.find(g => g.slug === 'parvati') as TrideviDetails | undefined;

  if (!parvatiDetails) {
    return <div className="container mx-auto px-4 py-8 text-center">Maa Parvati's details not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Heart className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">{parvatiDetails.name}</h1>
        <p className="text-2xl text-secondary font-medium mb-4">{parvatiDetails.aspect}</p>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {parvatiDetails.introduction}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
            <Card className="sticky top-10 shadow-xl rounded-xl overflow-hidden border-2 border-primary/30">
                <CardHeader className="p-0">
                <Image
                    src={parvatiDetails.imageUrl || `https://placehold.co/600x700.png`}
                    alt={parvatiDetails.name}
                    width={600}
                    height={700}
                    className="rounded-t-lg shadow-md object-cover object-top w-full h-auto max-h-[450px] lg:max-h-[600px]"
                    data-ai-hint={parvatiDetails.imageHint}
                />
                </CardHeader>
                <CardContent className="p-6 bg-gradient-to-b from-card to-muted/30">
                    <h3 className="text-xl font-semibold mb-3 text-secondary flex items-center">
                        <Star className="w-6 h-6 mr-2"/> Core Attributes
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {parvatiDetails.attributes.map((attr, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">{attr}</Badge>
                        ))}
                    </div>
                    
                    {parvatiDetails.consort && (
                        <p className="text-md mb-2"><strong className="text-foreground">Consort:</strong> {parvatiDetails.consort}</p>
                    )}

                    <h3 className="text-lg font-semibold mt-4 mb-2 text-secondary">Key Mantras</h3>
                    {parvatiDetails.mantras.map((mantra, index) => (
                        <Badge 
                        key={index} 
                        variant="outline" 
                        className="block w-full text-left text-sm p-3 my-2 font-mono shadow-sm break-words whitespace-normal"
                        >
                        {mantra}
                        </Badge>
                    ))}
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-xl rounded-xl border border-border/50">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <Shield className="w-7 h-7"/> Iconography & Symbolism
                    </CardTitle>
                </CardHeader>
                <CardContent><p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{parvatiDetails.iconographyDetails}</p></CardContent>
            </Card>
             <Card className="shadow-xl rounded-xl border border-border/50">
                <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center gap-2">
                        <CalendarDays className="w-7 h-7"/> Major Festivals
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {parvatiDetails.festivals.map((festival, index) => (
                        <Badge key={index} variant="secondary" className="text-md px-3 py-1.5 shadow-sm">{festival}</Badge>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
      
      <Separator className="my-12" />

      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary flex items-center justify-center gap-3">
          <Users className="w-10 h-10" /> Forms of Maa Parvati
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parvatiFormsData.map((form) => (
            <Card key={form.name} className="hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col">
              <CardHeader className="relative p-0">
                <Image
                  src={`https://placehold.co/400x250.png`}
                  alt={form.name}
                  width={400}
                  height={250}
                  className="rounded-t-lg object-cover w-full h-48"
                  data-ai-hint={form.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                    <CardTitle className="text-2xl text-white drop-shadow-md">{form.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardDescription className="text-sm mb-3 text-foreground/80 line-clamp-3 flex-grow min-h-[4.5rem]">{form.description}</CardDescription>
                <p className="text-xs text-muted-foreground line-clamp-2"><strong className="text-foreground/90">Iconography:</strong> {form.iconography}</p>
                {form.story && <p className="mt-2 text-xs text-muted-foreground line-clamp-2"><strong className="text-foreground/90">Story Snippet:</strong> {form.story}</p>}
              </CardContent>
            </Card>
          ))}
           {parvatiFormsData.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground">
                Details about Maa Parvati&apos;s forms are being compiled.
            </p>
           )}
        </div>
      </section>
      
      <Separator className="my-12" />
      <Card className="mt-12 bg-accent/10 p-8 text-center rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-accent mb-3">The Universal Mother</h3>
        <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
          Maa Parvati&apos;s life and forms teach us about devotion, perseverance, and the harmonious balance of power and grace. Her divine play enriches the cosmos.
        </p>
      </Card>
    </div>
  );
}
