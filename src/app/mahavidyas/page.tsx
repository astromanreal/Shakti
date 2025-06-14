
import Image from 'next/image';
import Link from 'next/link';
import { mahavidyaData } from '@/data/mahavidya-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, WandSparkles, Brain, Type, Shield, BookOpenText, Users2, Heart, Award } from 'lucide-react'; // Added Award
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
    "Das Mahavidyas", "Ten Wisdom Goddesses", "Mahavidyas", "Kali", "Tara", "Tripura Sundari",
    "Bhuvaneshwari", "Chinnamasta", "Bhairavi", "Dhumavati", "Bagalamukhi", "Matangi", "Kamala",
    "Tantric Goddesses", "Shaktism", "Cosmic Truths", "Divine Feminine", "Maa Adi Shakti"
  ],
  alternates: {
    canonical: '/mahavidyas',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/mahavidyas`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'The Das Mahavidyas - Ten Great Wisdom Goddesses of Tantra',
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
          "@type": "WebPage", // Could be more specific if each Mahavidya has a dedicated schema type
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
        <section className="relative mb-16 md:mb-20 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-background via-muted/50 to-card" aria-labelledby="mahavidyas-page-title">
          <Image
              src="https://placehold.co/1600x900.png"
              alt="Das Mahavidyas - Ten Great Wisdom Goddesses Conceptual Art"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
              data-ai-hint="mahavidyas divine energy cosmic wisdom"
              priority
          />
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6">
            <div className="inline-flex items-center justify-center bg-primary/20 p-3 rounded-full mb-4 shadow-md ring-2 ring-primary/30">
               <Award className="w-10 h-10 text-primary" />
            </div>
            <h1 id="mahavidyas-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight drop-shadow-lg">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 drop-shadow-md">
              {pageDescription}
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-accent">
              <Link href="#mahavidya-profiles">Begin Your Journey</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16 py-10 bg-muted/30 rounded-xl shadow-lg border border-border/20" aria-labelledby="cosmic-context-title">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="cosmic-context-title" className="text-2xl md:text-3xl font-semibold text-secondary mb-6 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-secondary" />
                  Cosmic Context of the Mahavidyas
                </h2>
                <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                  The Das Mahavidyas, or Ten Great Wisdoms, are a group of ten aspects of Adi Parashakti in Hinduism. They are all forms of the Divine Mother, representing a spectrum of feminine divinity, from fierce goddesses to the gentle, guiding seekers on various paths to liberation.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 my-4 text-md">
                  “The Ten Mahavidyas arise from Kali herself, each a form of truth, a challenge to ego, and a gateway to liberation.”
                </blockquote>
              </div>
              <div className="hidden md:flex justify-center items-center">
                 <Image src="https://placehold.co/300x300.png" alt="Symbolic representation of Mahavidya Tantra" width={200} height={200} className="opacity-70 rounded-full" data-ai-hint="mahavidya symbol tantra wisdom"/>
              </div>
            </div>
          </div>
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
