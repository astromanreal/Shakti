
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Compass,
  LayoutGrid,
  MapPin,
  Library,
  Brain,
  Flame,
  BookHeart,
  CalendarClock,
  ChevronRight,
  Sword,
  Shapes,
  Award,
  Heart
} from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';
const pageTitle = "Explore the Realm of Shakti - Divine Feminine Portals";
const pageDescription = "Navigate through diverse aspects of Maa Adi Shakti. Discover Tridevi, Mahavidyas, Devi Mahatmyam forms, Shakti Peethas, sacred chants, philosophy, and more. Your journey into divine wisdom starts here.";
const ogImageUrl = `${siteUrl}/og-images/explore-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Explore Shakti", "Divine Feminine sections", "spiritual portal", "discover goddesses",
    "Tridevi", "Mahavidyas", "Devi Mahatmyam Forms", "Shakti Peethas", "Sacred Chants",
    "Feminine Divinity Philosophy", "Tantra Sadhana", "Divine Stories", "Spiritual Timeline", "Pancha Prakritis",
    "Maa Adi Shakti", "Hindu goddess worship"
  ],
  alternates: {
    canonical: '/explore',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/explore',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Explore the Divine Portals of Shakti Darshan',
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

const exploreSections = [
  {
    title: 'Tridevi & Major Forms',
    subtitle: 'Cosmic powers in divine balance—creation, preservation, wisdom.',
    href: '/tridevi',
    icon: LayoutGrid,
    imageUrl: 'https://i.pinimg.com/736x/4e/6b/33/4e6b33b4983c6eb94de52d43a2a77228.jpg',
    ctaLabel: 'Enter the Pantheon',
    themeColorClass: 'text-pink-500',
    borderColorClass: 'border-pink-500/50 hover:border-pink-500',
    shadowColorClass: 'hover:shadow-pink-500/30',
    buttonColorClass: 'bg-pink-500 hover:bg-pink-600',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'tridevi aura subtle cosmic lotus',
  },
  {
    title: 'Pancha Prakritis',
    subtitle: "The fivefold radiance of Mahadevi nourishing all existence.",
    href: '/pancha-prakritis',
    icon: Shapes,
    imageUrl: 'https://i.pinimg.com/736x/48/10/6c/48106c21d34d116fab55a5207cb53dc0.jpg',
    ctaLabel: 'Discover the Forms',
    themeColorClass: 'text-green-600',
    borderColorClass: 'border-green-600/50 hover:border-green-600',
    shadowColorClass: 'hover:shadow-green-600/30',
    buttonColorClass: 'bg-green-600 hover:bg-green-700',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'five elements nature mandala subtle pattern',
  },
  {
    title: 'Das Mahavidyas',
    subtitle: 'Ten divine wisdoms—each a portal to deeper truth.',
    href: '/mahavidyas',
    icon: Sword,
    imageUrl: 'https://i.pinimg.com/736x/ae/07/67/ae0767175fb65b8fe11e5b0f5f655b04.jpg',
    ctaLabel: 'Unveil the Wisdoms',
    themeColorClass: 'text-yellow-500',
    borderColorClass: 'border-yellow-500/50 hover:border-yellow-500',
    shadowColorClass: 'hover:shadow-yellow-500/30',
    buttonColorClass: 'bg-yellow-500 hover:bg-yellow-600',
    buttonTextColorClass: 'text-yellow-950',
    bgPatternHint: 'mahavidyas yantras abstract fire flame',
  },
  {
    title: 'Devi Mahatmyam Forms',
    subtitle: "Epic victories of Shakti, from scripture to spirit.",
    href: '/devi-mahatmyam-forms',
    icon: Award,
    imageUrl: 'https://i.pinimg.com/736x/fb/fd/92/fbfd92806e9d8fe53648d49768112eab.jpg',
    ctaLabel: 'Witness the Glory',
    themeColorClass: 'text-red-600',
    borderColorClass: 'border-red-600/50 hover:border-red-600',
    shadowColorClass: 'hover:shadow-red-600/30',
    buttonColorClass: 'bg-red-600 hover:bg-red-700',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'devi mahatmyam battlefield symbols divine energy',
  },
  {
    title: 'Shakti Peethas',
    subtitle: "Sacred spots where Sati's presence eternally sanctifies.",
    href: '/shakti-peethas',
    icon: MapPin,
    imageUrl: 'https://i.pinimg.com/736x/90/e7/fb/90e7fb7e9e10918f4e54e07b2f9b3da4.jpg',
    ctaLabel: 'Visit Sacred Grounds',
    themeColorClass: 'text-blue-500',
    borderColorClass: 'border-blue-500/50 hover:border-blue-500',
    shadowColorClass: 'hover:shadow-blue-500/30',
    buttonColorClass: 'bg-blue-500 hover:bg-blue-600',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'sacred geography energy lines subtle map texture',
  },
  {
    title: 'Sacred Chants Library',
    subtitle: 'Listen to the sacred pulse of the cosmos.',
    href: '/sacred-chants',
    icon: Library,
    imageUrl: 'https://i.pinimg.com/736x/1f/a6/c8/1fa6c81a9bee7a90074b8ccce45e24eb.jpg',
    ctaLabel: 'Listen & Chant',
    themeColorClass: 'text-orange-500',
    borderColorClass: 'border-orange-500/50 hover:border-orange-500',
    shadowColorClass: 'hover:shadow-orange-500/30',
    buttonColorClass: 'bg-orange-500 hover:bg-orange-600',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'ancient manuscript sound waves subtle texture',
  },
  {
    title: 'Feminine Divinity Philosophy',
    subtitle: 'Explore Shakti as consciousness, cosmos, and core.',
    href: '/philosophy',
    icon: Brain,
    imageUrl: 'https://i.pinimg.com/736x/d0/22/a8/d022a8a95419393f77ca0012ab7d26c5.jpg',
    ctaLabel: 'Seek the Truth',
    themeColorClass: 'text-indigo-500',
    borderColorClass: 'border-indigo-500/50 hover:border-indigo-500',
    shadowColorClass: 'hover:shadow-indigo-500/30',
    buttonColorClass: 'bg-indigo-500 hover:bg-indigo-600',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'cosmic mind nebula thoughts pattern yantra',
  },
  {
    title: 'Tantra & Shakti Sadhana',
    subtitle: 'Awaken your divine energy through sacred practices.',
    href: '/tantra-sadhana',
    icon: Flame,
    imageUrl: 'https://i.pinimg.com/736x/c6/71/92/c671929581345709f4ff7d66243142fa.jpg',
    ctaLabel: 'Ignite Your Sadhana',
    themeColorClass: 'text-purple-600',
    borderColorClass: 'border-purple-600/50 hover:border-purple-600',
    shadowColorClass: 'hover:shadow-purple-600/30',
    buttonColorClass: 'bg-purple-600 hover:bg-purple-700',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'kundalini yantra fire energy abstract texture',
  },
  {
    title: 'Divine Stories',
    subtitle: 'Myths that inspire, empower, and illuminate the path.',
    href: '/stories',
    icon: BookHeart,
    imageUrl: 'https://i.pinimg.com/736x/4d/e2/db/4de2db47ab278db77480c32c819bd79f.jpg',
    ctaLabel: 'Read the Legends',
    themeColorClass: 'text-amber-600',
    borderColorClass: 'border-amber-600/50 hover:border-amber-600',
    shadowColorClass: 'hover:shadow-amber-600/30',
    buttonColorClass: 'bg-amber-600 hover:bg-amber-700',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'mythological scroll ancient patterns storytelling',
  },
  {
    title: 'Spiritual Timeline',
    subtitle: "Trace Shakti’s eternal play across time.",
    href: '/timeline',
    icon: CalendarClock,
    imageUrl: 'https://i.pinimg.com/736x/57/2f/eb/572febe72b700bcb62dbd02bf3e7de1e.jpg',
    ctaLabel: 'View the Ages',
    themeColorClass: 'text-cyan-600',
    borderColorClass: 'border-cyan-600/50 hover:border-cyan-600',
    shadowColorClass: 'hover:shadow-cyan-600/30',
    buttonColorClass: 'bg-cyan-600 hover:bg-cyan-700',
    buttonTextColorClass: 'text-white',
    bgPatternHint: 'time spiral historical symbols cosmic clock',
  },
];

export default function ExplorePage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/explore`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": exploreSections.map((section, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "WebPage",
          "name": section.title,
          "description": section.subtitle,
          "url": `${siteUrl}${section.href}`
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16" aria-labelledby="explore-page-title">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <Compass className="w-16 h-16 text-primary" />
          </div>
          <h1 id="explore-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {exploreSections.map((section) => (
            <Card
              key={section.href}
              className={cn(
                "flex flex-col rounded-3xl shadow-xl border-2",
                "bg-gradient-to-br from-card via-background to-muted/20",
                section.borderColorClass,
                "transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 group",
                `hover:shadow-2xl ${section.shadowColorClass}`
              )}
              data-ai-hint={section.bgPatternHint}
            >
              <CardHeader className="p-0 relative">
                <Image
                  src={section.imageUrl}
                  alt={`${section.title} - Shakti Darshan`}
                  width={400}
                  height={250}
                  className="rounded-t-3xl object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300 rounded-t-3xl"></div>
              </CardHeader>
              <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                <section.icon className={cn("w-10 h-10 mb-3 group-hover:scale-110 transition-transform", section.themeColorClass)} />
                <CardTitle className={cn("text-xl font-semibold mb-2 group-hover:opacity-80 transition-opacity", section.themeColorClass)}>
                  {section.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/75 mb-5 min-h-[3rem] line-clamp-2 leading-relaxed">
                  {section.subtitle}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-0 pb-6 mt-auto">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all",
                    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring",
                    section.buttonColorClass,
                    section.buttonTextColorClass
                  )}
                  aria-label={`Explore ${section.title}`}
                >
                  <Link href={section.href}>
                    {section.ctaLabel} <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mt-20 text-center" aria-labelledby="final-cta-title">
          <Card
            className="bg-gradient-to-br from-secondary/10 via-background to-primary/10 p-8 lg:p-12 rounded-3xl shadow-2xl border-2 border-accent/30 transform hover:scale-102 transition-transform duration-300 hover:shadow-accent/20"
            data-ai-hint="open cosmic lotus radiant devi silhouette wisdom portal"
          >
            <CardHeader className="items-center">
              <div className="p-3 bg-accent/20 rounded-full mb-4 ring-4 ring-accent/30 inline-flex">
                <Heart className="w-12 h-12 text-accent" />
              </div>
              <CardTitle id="final-cta-title" className="text-2xl md:text-3xl font-semibold text-accent mb-3 tracking-tight">
                🕉️ Your Journey into Divine Wisdom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Let this sacred portal guide your steps across Shakti’s realms—from cosmic truths to personal transformation.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-accent">
                <Link href="/">
                  Begin Your Exploration <ChevronRight className="w-6 h-6 ml-2.5"/>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </>
  );
}
