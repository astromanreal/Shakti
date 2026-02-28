

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { 
  Brain, Atom, Zap, Layers, BookOpen, Droplets, AlignCenter, ChevronRight, CircleDot, Users, Sparkles, Heart, BarChart3, BookMarked, Mountain, Library as LibraryIcon, Flame, Eye
} from 'lucide-react'; 
import type { Metadata } from 'next';
import { philosophyContent } from '@/data/philosophy-content';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Philosophy of Shakti - Cosmic Energy & Divine Feminine in Hinduism";
const pageDescription = "Explore Shakti as Supreme Consciousness-Energy in Indian philosophy. Delve into Shaktism, Tantra, Kundalini, and the dynamic interplay of Prakriti & Purusha within Sanatana Dharma. Understand the spiritual power of the Divine Feminine.";
const ogImageUrl = `${siteUrl}/og-images/philosophy-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Philosophy", "Shaktism", "Tantra", "Prakriti Purusha", "Divine Feminine philosophy", 
    "Indian philosophy", "Cosmic Energy", "Advaita", "Kundalini", "Sanatana Dharma", "Sri Chakra", "Yoni-Linga",
    "Maa Adi Shakti", "Hindu goddess worship", "Spiritual feminine power"
  ],
  alternates: {
    canonical: '/philosophy',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/philosophy`,
    images: [
      {
        url: ogImageUrl, 
        width: 1200,
        height: 630,
        alt: 'Symbolic representation of Shakti Philosophy - Sri Chakra and Cosmic Energy Flow',
      },
    ],
    type: 'article', // The content of this page is article-like
    article: { // Optional: More details for 'article' type
        // publishedTime: "YYYY-MM-DDTHH:MM:SSZ", // Add if available
        // modifiedTime: "YYYY-MM-DDTHH:MM:SSZ", // Add if available
        authors: [`${siteUrl}/about`], 
        section: "Philosophy",
        tags: ["Shaktism", "Tantra", "Divine Feminine", "Hindu Philosophy"],
      }
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

const iconMap: { [key: string]: React.ElementType } = {
  Atom: Atom,
  Zap: Zap,
  Layers: Layers,
  Droplets: Droplets,
  BookOpen: BookOpen,
  Brain: Brain,
  Heart: Heart,
  BarChart3: BarChart3,
  BookMarked: BookMarked,
  Mountain: Mountain,
  LibraryIcon: LibraryIcon,
  Flame: Flame,
  Eye: Eye,
  Users: Users, 
};

const SectionWrapper: React.FC<{id: string; title: string; iconName: string; children: React.ReactNode; className?: string;}> = ({id, title, iconName, children, className}) => {
    const IconComponent = iconMap[iconName] || Brain;
    return (
        <section id={id} className={cn("py-10 md:py-12 scroll-mt-20", className)} aria-labelledby={`section-title-${id}`}>
            <Card className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card via-background to-muted/20 overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01]">
              <CardHeader className="bg-secondary/5 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary/20 p-3 rounded-full ring-2 ring-secondary/30">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
                  </div>
                  <CardTitle id={`section-title-${id}`} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary tracking-tight">
                    {title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                {children}
              </CardContent>
            </Card>
        </section>
    );
};

export default function PhilosophyPage() {
  const shaktismSection = philosophyContent.sections.find(s => s.id === "shakti-cosmic-energy");
  const tantraSection = philosophyContent.sections.find(s => s.id === "tantra-feminine-energy");
  const prakritiPurushaSection = philosophyContent.sections.find(s => s.id === "prakriti-purusha");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": ogImageUrl,
    "author": {
      "@type": "Organization",
      "name": "Shakti Darshan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/philosophy`
    },
    // "datePublished": "YYYY-MM-DD", 
    // "dateModified": "YYYY-MM-DD", 
    "keywords": metadata.keywords?.join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-3xl shadow-2xl border border-border/20 mb-16 md:mb-20 relative overflow-hidden" aria-labelledby="philosophy-page-title">
          <Image 
              src="https://placehold.co/1200x400.png" 
              alt="Sri Chakra and Kundalini cosmic energy visualization" 
              fill 
              objectFit="cover" 
              className="opacity-20 absolute inset-0 z-0"
              data-ai-hint="sri chakra kundalini cosmic energy flow"
              priority
          />
          <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
              <Sparkles className="w-16 h-16 text-primary" />
              </div>
              <h1 id="philosophy-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 tracking-tight">
              {philosophyContent.pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              {philosophyContent.pageDescription.split('.')[0]}. Delve into the core tenets of Shaktism, Tantra, and more.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg">
                  <Link href="#shakti-cosmic-energy">
                  <Atom className="w-5 h-5 mr-2" /> Explore Shaktism
                  </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 shadow-md hover:shadow-lg">
                  <Link href="#tantra-feminine-energy">
                  <Zap className="w-5 h-5 mr-2" /> Understand Tantra
                  </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-md hover:shadow-lg">
                  <Link href="#prakriti-purusha">
                  <Layers className="w-5 h-5 mr-2" /> Prakriti & Purusha
                  </Link>
              </Button>
              </div>
          </div>
        </section>

        {shaktismSection && (
          <SectionWrapper 
              id="shakti-cosmic-energy" 
              title="Shakti as Cosmic Energy" 
              iconName={shaktismSection.iconName}
          >
            <p className="text-xl font-semibold text-accent mb-6">Key Message: Shakti is not a part of divinity—She is the divinity.</p>
            {shaktismSection.content.find(item => item.type === "paragraph" && item.text?.startsWith("Shakti is the primordial")) && 
              <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-4">{(shaktismSection.content.find(item => item.type === "paragraph" && item.text?.startsWith("Shakti is the primordial")) as any).text}</p>
            }
            
            {shaktismSection.content.find(item => item.type === "quote") && 
              (() => {
                  const quoteItem = shaktismSection.content.find(item => item.type === "quote") as any;
                  return (
                      <blockquote className="my-6 p-5 border-l-4 border-accent bg-accent/10 rounded-r-lg shadow-md">
                      <p className="text-md lg:text-lg italic text-accent-foreground/90 font-serif whitespace-pre-line">"{quoteItem.sanskrit}"</p>
                      <footer className="mt-2 text-sm text-accent-foreground/70">- {quoteItem.translation}</footer>
                      </blockquote>
                  );
              })()
            }

             <div className="mt-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary mt-4 mb-2">Subsections:</h3>
              <p className="text-md text-foreground/80"><strong className="text-secondary">🔸 Shakti = Dynamic Force; Shiva = Silent Consciousness.</strong> {(shaktismSection.content.find(item => item.type === "paragraph" && item.text?.includes("Shiva is inert")) as any)?.text.replace("Without Shakti, Shiva is inert—representing potential without expression. With Shakti, Shiva manifests as the universe.", "")}</p>
              <p className="text-md text-foreground/80"><strong className="text-secondary">🔸 Without Shakti, there is no movement, no manifestation.</strong></p>
              <p className="text-md text-foreground/80"><strong className="text-secondary">🔸 All deities derive energy through Shakti.</strong></p>
            </div>
          </SectionWrapper>
        )}
        
        <Separator className="my-12 md:my-16 bg-border/40"/>

        {tantraSection && (
          <SectionWrapper 
              id="tantra-feminine-energy" 
              title="Tantra and Sacred Feminine Power" 
              iconName={tantraSection.iconName}
          >
               {(tantraSection.content.find(c => c.type === 'paragraph' && c.text?.includes("Tantra is an esoteric")) as any)?.text && (
                   <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-4">
                      {(tantraSection.content.find(c => c.type === 'paragraph' && c.text?.includes("Tantra is an esoteric")) as any).text}
                   </p>
              )}
              <h3 className="text-xl font-semibold text-primary my-4">Subsections:</h3>
              <ul className="list-disc list-inside space-y-2 text-md text-foreground/80 pl-2 mb-4">
                  <li><strong className="text-secondary">🔹 What is Tantra?</strong> – Origin, esoteric nature, and misunderstood perceptions.</li>
                  <li><strong className="text-secondary">🔹 Kundalini & Chakras:</strong> Shakti's journey to unite with Shiva.</li>
                  <li><strong className="text-secondary">🔹 Sri Chakra & Yoni–Linga:</strong> Sacred geometry and the cosmic union.</li>
              </ul>
               <h3 className="text-xl font-semibold text-primary my-4">Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 text-md text-foreground/80 pl-2">
                  <li><strong className="text-secondary">Microcosm-Macrocosm Parallel:</strong> Body as a temple.</li>
                  <li><strong className="text-secondary">Practices in Tantra:</strong> Mantra, Yantra, Mudra, and Devī Bhakti.</li>
              </ul>

               {(tantraSection.content.find(c => c.type === 'symbols' && c.items?.length > 0) as any)?.items && (
                  <div className="mt-6">
                       <h4 className="text-lg font-semibold text-accent mb-2">Sacred Symbols & Practices:</h4>
                       {(tantraSection.content.find(c => c.type === 'symbols') as any).items.map((symbol: {name:string, meaning:string}) => (
                           <Badge key={symbol.name} variant="outline" className="text-md mr-2 mb-2 p-2.5 shadow-sm border-accent/50 bg-accent/10 text-accent-foreground text-base">
                             <strong>{symbol.name}:</strong> {symbol.meaning}
                           </Badge>
                        ))}
                  </div>
               )}
          </SectionWrapper>
        )}

        <Separator className="my-12 md:my-16 bg-border/40"/>

        {prakritiPurushaSection && (
          <SectionWrapper 
              id="prakriti-purusha" 
              title="Philosophical Duality: Nature and Consciousness" 
              iconName={prakritiPurushaSection.iconName}
          >
            <h3 className="text-xl font-semibold text-primary mt-4 mb-2">Subsections:</h3>
              <ul className="list-disc list-inside space-y-2 text-md text-foreground/80 pl-2 mb-4">
                <li><strong className="text-secondary">🔸 Samkhya School:</strong> Duality as cosmic framework. {(prakritiPurushaSection.content.find(item => item.type === "paragraph" && item.text?.startsWith("In Samkhya")) as any)?.text.replace("In Samkhya and Yogic philosophy, the universe arises from the interaction of Prakriti (Nature, the feminine principle) and Purusha (Pure Consciousness, the masculine principle).","")}</li>
                <li><strong className="text-secondary">🔸 Prakriti as Shakti:</strong> Ever-active, creative, generative. {(prakritiPurushaSection.content.find(item => item.type === "list" && item.title === "Examples") as any)?.items[0].replace("Prakriti: ","")}</li>
                <li><strong className="text-secondary">🔸 Purusha as Shiva:</strong> Witness, pure, immutable consciousness. {(prakritiPurushaSection.content.find(item => item.type === "list" && item.title === "Examples") as any)?.items[1].replace("Purusha: ","")}</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-2">Interpretation in Shaktism:</h3>
              <p className="text-md lg:text-lg text-foreground/90 leading-relaxed">
                  The feminine is not lesser, but the very ground of divinity. Ultimate reality is the unity of dynamic energy and silent awareness. {(prakritiPurushaSection.content.find(item => item.type === "paragraph" && item.text?.startsWith("Shaktism elevates Prakriti")) as any)?.text.replace("Shaktism elevates Prakriti (Shakti) to the highest status, viewing the Goddess not as subordinate but as the embodiment of Divinity itself—the power behind manifestation and transcendence.","")}
              </p>
          </SectionWrapper>
        )}

        <Separator className="my-12 md:my-16 bg-border/40"/>

        <SectionWrapper id="holistic-realization" title="The All-Encompassing Divine Feminine" iconName={philosophyContent.conclusion.iconName}>
          <p className="text-xl font-semibold text-accent mb-6">
            Shakti is both immanent (within all creation) and transcendent (beyond all form). Understanding Her multifaceted nature leads to balance, liberation, and a profound sense of oneness with the cosmos.
          </p>
           <p className="text-md lg:text-lg text-foreground/90 leading-relaxed mb-4">
            {philosophyContent.conclusion.text}
          </p>
        </SectionWrapper>

        <Separator className="my-12 md:my-16 bg-border/40"/>

        <section id="explore-further" className="py-10 md:py-12" aria-labelledby="explore-further-title">
          <h2 id="explore-further-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary">Explore Further</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Das Mahavidyas", href: "/mahavidyas", icon: Users, description: "Discover the Ten Wisdom Goddesses." },
              { title: "Shakta Temples", href: "/shakti-peethas", icon: Mountain, description: "Visit sacred Shakti Peethas." },
              { title: "Scriptural Texts", href: "/sacred-chants", icon: LibraryIcon, description: "Dive into hymns and stotras." },
              { title: "Tantric Sadhanas", href: "/tantra-sadhana", icon: Flame, description: "Learn about Tantric practices." }
            ].map(item => {
              const Icon = item.icon;
              return (
                <Card key={item.href} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-2 w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center pt-4 border-t border-border/20">
                    <Button asChild variant="link" className="text-accent font-semibold">
                      <Link href={item.href}>Learn More <ChevronRight className="w-4 h-4 ml-1"/></Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
