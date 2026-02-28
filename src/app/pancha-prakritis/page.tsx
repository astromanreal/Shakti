

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Shapes, Layers, Users, Info, BookOpenText, Sun, Star, HeartPulse, Zap, ChevronRight,
    GitMerge, Sparkles, Diamond, Leaf, Palette, Music
} from 'lucide-react';
import { panchaPrakritiData } from '@/data/pancha-prakriti-data';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageMetaTitle = "Pancha Prakritis — Five Divine Manifestations of Mahadevi | Shakti Darshan";
const pageMetaDescription = "Discover the Pancha Prakritis, the five core feminine energies of Mahadevi as described in the Devi Bhagavata Purana: Ganesh Janani Durga (Parvati), Lakshmi, Saraswati, Savitri (Gayatri), and Radha.";
const ogImageUrl = `${siteUrl}/og-images/pancha-prakritis-mahakali.jpg`;

export const metadata: Metadata = {
  title: pageMetaTitle,
  description: pageMetaDescription,
  keywords: [
    "Pancha Prakritis", "Panchadevis", "Mahadevi forms", "Ganesh Janani Durga", "Parvati", 
    "Lakshmi", "Saraswati", "Savitri", "Gayatri", "Radha", "Devi Bhagavata Purana", "Feminine Divinity",
    "Maa Adi Shakti", "Hindu goddess worship"
  ],
  alternates: {
    canonical: '/pancha-prakritis',
  },
  openGraph: {
    title: pageMetaTitle,
    description: pageMetaDescription,
    url: `${siteUrl}/pancha-prakritis`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Pancha Prakritis - Five Divine Feminine Forms of Mahadevi',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageMetaTitle,
    description: pageMetaDescription,
    images: [ogImageUrl],
  },
};

const goddessIcons: Record<string, React.ElementType> = {
  "Ganesh Janani Durga (Parvati)": Sun, 
  "Lakshmi": Diamond,
  "Sarasvati": BookOpenText,
  "Savitri (Gayatri)": Leaf, 
  "Radha": HeartPulse,
};

export default function PanchaPrakritisPage() {
  const data = panchaPrakritiData;

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageMetaTitle,
    "description": pageMetaDescription,
    "url": `${siteUrl}/pancha-prakritis`,
    "image": ogImageUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": data.forms.map((form, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing", // Could be more specific like "Deity" or "SpiritualEntity"
          "name": form.name,
          "description": form.role + ". " + form.significance,
          "image": form.imageUrl || `${siteUrl}/og-images/pancha-prakritis/${form.name.toLowerCase().replace(/\s+/g, '-')}.jpg`,
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
        <section className="relative mb-16 md:mb-20 h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl" aria-labelledby="pancha-prakritis-title">
          <Image
            src={data.forms.find(form => form.name === "Ganesh Janani Durga (Parvati)")?.imageUrl || "https://placehold.co/1600x900.png"}
            alt="Pancha Prakritis - The Five Divine Manifestations of Mahadevi"
            fill
            priority
            className="object-cover"
            data-ai-hint="divine feminine energy collage five forms"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
            <h1 id="pancha-prakritis-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {pageMetaTitle.replace(" | Shakti Darshan", "")}
            </h1>
            <p className="text-md md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md">
              {pageMetaDescription}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-primary">
              <Link href="#goddess-profiles">
                Explore Each Goddess <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-16 md:mb-20 py-10 bg-muted/30 rounded-xl shadow-lg border border-border/20" aria-labelledby="understanding-prakritis-title">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="understanding-prakritis-title" className="text-2xl md:text-3xl font-semibold text-secondary mb-6 flex items-center">
                  <Info className="w-8 h-8 mr-3 text-secondary" />
                  Understanding the Pancha Prakritis
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  {data.overview}
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-4">
                  "The Divine Mother manifests in five sacred forms—each reflecting a vital cosmic power, uniting creation, preservation, and transformation within her eternal grace."
                </blockquote>
              </div>
              <div className="grid grid-cols-1 gap-4">
                  {data.forms.map(form => {
                      const Icon = goddessIcons[form.name] || Sparkles;
                      return (
                          <div key={form.name} className="flex items-center p-3 bg-card rounded-lg shadow-sm border border-border/50">
                              <Icon className="w-7 h-7 mr-3 text-primary"/>
                              <span className="text-md font-medium text-foreground/90">{form.name}</span>
                          </div>
                      );
                  })}
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section id="goddess-profiles" className="mb-16 md:mb-20" aria-labelledby="divine-forms-title">
          <h2 id="divine-forms-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <Users className="w-10 h-10" /> The Five Divine Forms
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {data.forms.map((form) => {
              const Icon = goddessIcons[form.name] || Sparkles;
              return (
                  <Card 
                      key={form.name} 
                      className="shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-[1.02] flex flex-col rounded-2xl border border-border/30 bg-card group"
                  >
                  <CardHeader className="relative p-0">
                      <Image
                          src={form.imageUrl || `https://placehold.co/400x250.png`}
                          alt={`Image of Goddess ${form.name}`}
                          width={400}
                          height={250}
                          className="rounded-t-2xl object-cover w-full h-52 transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={form.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-5 w-full">
                          <div className="flex items-center gap-3">
                              <Icon className="w-8 h-8 text-white drop-shadow-lg flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                              <CardTitle className="text-2xl lg:text-3xl text-white drop-shadow-lg group-hover:text-primary transition-colors duration-300">{form.name}</CardTitle>
                          </div>
                          {form.alternate_names && form.alternate_names.length > 0 && (
                              <p className="text-xs text-gray-300 drop-shadow-sm mt-1 group-hover:text-primary/80 transition-colors duration-300">{form.alternate_names.join(', ')}</p>
                          )}
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                      <p className="text-md font-semibold text-secondary mb-2">{form.role}</p>
                      <p className="text-sm text-foreground/80 mb-4 line-clamp-3 min-h-[3.75rem]">{form.significance}</p>
                      
                      <div className="mb-3">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1.5">Key Attributes:</h4>
                      <div className="flex flex-wrap gap-2">
                          {form.key_attributes.map(attr => <Badge key={attr} variant="outline" className="text-xs px-2 py-0.5">{attr}</Badge>)}
                      </div>
                      </div>
                      
                      <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1.5">Special Iconography:</h4>
                      <ul className="list-disc list-inside text-xs text-foreground/70 space-y-0.5 pl-1">
                          {form.special_iconography.map(icon => <li key={icon}>{icon}</li>)}
                      </ul>
                      </div>
                  </CardContent>
                  <CardFooter className="mt-auto border-t border-border/30 pt-4 p-6">
                      <Button asChild variant="link" className="text-accent p-0 font-semibold text-sm group-hover:text-accent-foreground transition-colors" aria-label={`Learn more about ${form.name}`}>
                          <Link href="#"> 
                             Learn More <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                      </Button>
                       <Button variant="ghost" size="sm" className="ml-auto text-accent p-0 text-sm hover:text-accent-foreground" disabled>
                           <Music className="w-4 h-4 mr-1.5" /> Listen to Mantra (Soon)
                      </Button>
                  </CardFooter>
                  </Card>
              );
            })}
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="mb-16 md:mb-20 py-10 bg-primary/5 rounded-xl shadow-xl border border-primary/20" aria-labelledby="unified-essence-title">
          <div className="container mx-auto px-6 text-center">
            <h2 id="unified-essence-title" className="text-2xl md:text-3xl font-semibold text-primary mb-6 flex items-center justify-center">
              <GitMerge className="w-8 h-8 mr-3 text-primary" />
              Unified Essence: Bhuvaneshwari's Manifestations
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
              <Image 
                src={data.key_form_image_url || "https://placehold.co/300x200.png"} 
                alt={`Image of ${data.key_form_of_devi}`}
                width={300} 
                height={200} 
                className="rounded-lg shadow-lg object-cover border-2 border-primary/30"
                data-ai-hint="Bhuvaneshwari mother goddess divine cosmic"
              />
              <div className="md:w-2/3 text-left md:text-left">
                  <p className="text-xl font-semibold text-foreground mb-3">{data.key_form_of_devi}</p>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">{data.unifying_theme}</p>
              </div>
            </div>
             <Card className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-border/30">
                  <CardTitle className="text-xl text-secondary mb-3 flex items-center"><Star className="w-6 h-6 mr-2"/>Importance in Worship</CardTitle>
                  <CardContent className="space-y-3 text-left p-0">
                      <p><strong className="font-medium text-foreground/90">Cosmic Balance:</strong> {data.importance.on_theology}</p>
                      <p><strong className="font-medium text-foreground/90">Spiritual Growth:</strong> {data.importance.on_spiritual_practice}</p>
                      <p><strong className="font-medium text-foreground/90">Devotional Path:</strong> {data.importance.on_worship}</p>
                  </CardContent>
              </Card>
          </div>
        </section>

        <Separator className="my-12 md:my-16" />

        <section className="mb-16 md:mb-20" aria-labelledby="rituals-practices-title">
          <h2 id="rituals-practices-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-secondary flex items-center justify-center gap-3">
            <BookOpenText className="w-10 h-10" /> Rituals & Practices
          </h2>
          <Card className="shadow-xl rounded-2xl border border-border/30">
              <CardHeader className="bg-muted/30">
                  <CardTitle className="text-2xl text-secondary">Worship Traditions</CardTitle>
                  <CardDescription>Common practices and festivals associated with the Pancha Prakritis.</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                  {Object.entries(data.rituals_and_practices).map(([goddessName, practices]) => (
                  <AccordionItem value={goddessName} key={goddessName} className="border-b last:border-b-0">
                      <AccordionTrigger className="text-lg hover:text-accent font-medium py-4">
                          {goddessName === "Ganesh Janani Durga" ? "Ganesh Janani Durga (Parvati)" : goddessName}
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-4 text-md text-foreground/80">
                      <ul className="list-disc list-inside space-y-1.5 pl-2">
                          {practices.map((practice, index) => <li key={index}>{practice}</li>)}
                      </ul>
                      </AccordionContent>
                  </AccordionItem>
                  ))}
              </Accordion>
              </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
