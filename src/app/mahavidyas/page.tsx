
import Image from 'next/image';
import Link from 'next/link';
import { mahavidyaData } from '@/data/mahavidya-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, WandSparkles, Brain, Type, Shield, BookOpenText, Users2, Heart, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Das Mahavidyas: Ten Great Wisdom Goddesses of Tantra & Shakti";
const pageDescription = "Explore the Das Mahavidyas, ten powerful aspects of Adi Shakti. Discover the profound wisdom of Kali, Tara, Tripura Sundari, and other Tantric goddesses, each a unique path to liberation and divine understanding.";
const ogImageUrl = `${siteUrl}/og-images/mahavidyas-overview.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Das Mahavidyas", "Ten Wisdom Goddesses", "Tantric Goddesses", "Kali", "Tara", "Tripura Sundari",
    "Bhuvaneshwari", "Chhinnamasta", "Bhairavi", "Dhumavati", "Bagalamukhi", "Matangi", "Kamala",
    "Shakti Worship", "Tantra", "Maa Adi Shakti"
  ],
  alternates: {
    canonical: '/mahavidyas',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/mahavidyas`,
    images: [{ url: ogImageUrl, width: 1200, height: 630, alt: 'The Das Mahavidyas - Ten Great Wisdoms of Tantra' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function MahavidyasPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/mahavidyas`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": mahavidyaData.map((mahavidya, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "name": mahavidya.name,
          "description": mahavidya.description.substring(0,150) + "...",
          "url": `${siteUrl}/mahavidyas/${mahavidya.slug}`,
          "image": mahavidya.imageUrl || `${siteUrl}/og-images/mahavidyas/${mahavidya.slug}.jpg`
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
        <section className="mb-16 md:mb-20 text-center py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl shadow-xl border border-primary/20" aria-labelledby="mahavidyas-page-title">
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
               <Award className="w-16 h-16 text-primary" />
            </div>
            <h1 id="mahavidyas-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
              The Das Mahavidyas
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold max-w-2xl mx-auto mb-10">
              Ten Great Wisdoms of Tantra – Paths to Liberation
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-accent">
              <Link href="#mahavidya-profiles">Begin Your Journey</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="cosmic-context-title">
           <Card className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-background to-muted/20 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01]">
            <CardHeader className="bg-secondary/5 p-6 sm:p-8">
                <div className="flex items-start md:items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full ring-2 ring-secondary/30 flex-shrink-0">
                    <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                </div>
                <CardTitle id="cosmic-context-title" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                    Cosmic Context of the Mahavidyas
                </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 text-md lg:text-lg text-foreground/90 leading-relaxed">
                <p className="mb-4">
                  The Das Mahavidyas, or Ten Great Wisdoms, are a group of ten powerful aspects of Adi Parashakti in Hinduism. They are all forms of the Divine Mother, representing a spectrum of feminine divinity, from fierce goddesses to the gentle, guiding seekers on various paths to liberation.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-6 text-md">
                  “The Ten Mahavidyas arise from Kali herself, each a form of truth, a challenge to ego, and a gateway to liberation.”
                </blockquote>
                <p>
                  Each Mahavidya embodies a unique facet of cosmic truth and a distinct approach to spiritual understanding. Their worship often involves Tantric practices and profound meditation on their specific energies and forms.
                </p>
            </CardContent>
          </Card>
        </section>

        <section id="mahavidya-profiles" className="mb-16" aria-labelledby="wisdom-goddesses-title">
          <h2 id="wisdom-goddesses-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary">
            Meet the Wisdom Goddesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mahavidyaData.map((mahavidya) => {
              const colorThemeClasses = mahavidya.colorTheme || "text-primary border-primary";
              const borderColorClass = colorThemeClasses.split(' ').find(c => c.startsWith('border-')) || 'border-border/30';
              const textColorClass = colorThemeClasses.split(' ').find(c => c.startsWith('text-')) || 'text-primary';
              
              return (
              <Card
                key={mahavidya.slug}
                className={cn(
                  "flex flex-col bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-[1.02] group border-2",
                  borderColorClass
                )}
              >
                <CardHeader className="p-0 relative">
                  <Image
                    src={mahavidya.imageUrl || `https://placehold.co/400x250.png`}
                    alt={`Image of Mahavidya ${mahavidya.name}`}
                    width={400}
                    height={250}
                    className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={mahavidya.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <CardTitle className={cn("text-2xl lg:text-3xl text-white drop-shadow-lg flex items-center gap-2.5 group-hover:opacity-80 transition-opacity duration-300", textColorClass)}>
                       <WandSparkles className="w-7 h-7" /> {mahavidya.name} – {mahavidya.essence}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <p className={cn("text-sm font-semibold mb-1", textColorClass)}>Essence:</p>
                  <p className="text-foreground/80 mb-3 line-clamp-3 text-sm leading-relaxed min-h-[3.75rem]">
                    {mahavidya.description.substring(0,150)}...
                  </p>

                  <div className="mb-3">
                    <h4 className={cn("text-xs font-semibold mb-1.5", textColorClass)}>Primary Mantra:</h4>
                    <Badge variant="outline" className={cn("text-xs p-2 font-mono truncate block w-full text-left shadow-sm break-words whitespace-normal", borderColorClass, `bg-${borderColorClass.split('-')[1]}/10` )}>
                      {mahavidya.mantras[0]}
                    </Badge>
                  </div>

                  <div className="mb-3">
                    <h4 className={cn("text-xs font-semibold mb-1.5", textColorClass)}>Key Themes:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {mahavidya.keyThemes.slice(0,3).map(theme => (
                        <Badge key={theme} variant="secondary" className={cn("text-xs px-2 py-0.5 shadow-sm", textColorClass.replace('text-', 'bg-') + '/20', textColorClass)}>
                          {theme}
                        </Badge>
                      ))}
                       {mahavidya.keyThemes.length > 3 && <Badge variant="outline" className="text-xs">...</Badge>}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                     <h4 className={cn("text-xs font-semibold mb-1.5", textColorClass)}>Iconography:</h4>
                     <p className="text-xs text-muted-foreground line-clamp-2">{mahavidya.iconographySummary}</p>
                  </div>

                   <div className="mb-3">
                     <h4 className={cn("text-xs font-semibold mb-1.5", textColorClass)}>Sadhana:</h4>
                     <p className="text-xs text-muted-foreground line-clamp-2">{mahavidya.sadhanaSummary}</p>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto border-t border-border/30 pt-4 p-6">
                  <Button asChild variant="link" className={cn("p-0 font-semibold text-md group-hover:opacity-80 transition-opacity", textColorClass)}>
                    <Link href={`/mahavidyas/${mahavidya.slug}`}>
                      Explore {mahavidya.name} <ChevronRight className="w-5 h-5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
            })}
          </div>
        </section>

        <section className="mt-16 text-center p-8 lg:p-12 bg-secondary/10 rounded-2xl shadow-lg border border-secondary/20" aria-labelledby="profound-wisdom-title">
          <h3 id="profound-wisdom-title" className="text-2xl md:text-3xl font-semibold text-secondary mb-4 tracking-tight">Journey into Profound Wisdom</h3>
          <p className="text-foreground/80 text-lg max-w-xl mx-auto">
            The Mahavidyas represent diverse and potent paths to understanding the ultimate reality. Their worship often involves transformative sadhanas and a deep exploration of Tantric philosophy.
          </p>
        </section>
      </div>
    </>
  );
}

    
