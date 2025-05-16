
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Compass,
  LayoutGrid, 
  MapPin,
  Library,
  Wand2,
  Brain,
  Flame,
  BookHeart,
  CalendarClock,
  ChevronRight,
  Sword, 
  Shapes,
} from 'lucide-react';
import type { Metadata } from 'next';

const pageTitle = "Explore the Realm of Shakti";
const pageDescription = "Navigate through diverse aspects of Maa Adi Shakti. Discover Tridevi, Mahavidyas, Shakti Peethas, sacred chants, philosophy, and more. Your journey into divine wisdom starts here.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const defaultOgImage = `${siteUrl}/og-explore.jpg`; // Replace with a specific OG image for explore page

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Explore Shakti", "Divine Feminine sections", "spiritual portal", "discover goddesses",
    "Tridevi", "Mahavidyas", "Shakti Peethas", "Sacred Chants", "Mantra Personalizer",
    "Feminine Divinity Philosophy", "Tantra Sadhana", "Divine Stories", "Spiritual Timeline", "Pancha Prakritis"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/explore',
    images: [
      {
        url: defaultOgImage, 
        width: 1200,
        height: 630,
        alt: 'Explore Shakti Darshan Sections',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [defaultOgImage],
  },
};

const exploreSections = [
   {
    title: 'Tridevi & Major Forms',
    description: 'Explore the principal goddesses: Durga, Lakshmi, Saraswati, Parvati and Kali.',
    href: '/tridevi',
    icon: LayoutGrid,
    imageUrl: 'https://i.pinimg.com/736x/4e/6b/33/4e6b33b4983c6eb94de52d43a2a77228.jpg',
    imageHint: 'goddesses divine feminine',
  },
  {
    title: 'Pancha Prakritis',
    description: 'Discover the five primary manifestations of Mahadevi: Durga, Lakshmi, Saraswati, Savitri, and Radha.',
    href: '/pancha-prakritis',
    icon: Shapes,
    imageUrl: 'https://i.pinimg.com/736x/e0/52/fe/e052fefd90c8796d1f5d1e4c54cac355.jpg',
    imageHint: 'pancha prakritis five forms',
  },
  {
    title: 'Das Mahavidyas',
    description: 'Delve into the Ten Great Wisdom Goddesses and their profound cosmic truths.',
    href: '/mahavidyas',
    icon: Sword, 
    imageUrl: 'https://i.pinimg.com/736x/76/4b/58/764b58731657f81d9619c5f0bee1813f.jpg',
    imageHint: 'mahavidyas wisdom',
  },
  {
    title: 'Shakti Peethas',
    description: 'Journey to the sacred sites where parts of Devi Sati\'s body fell.',
    href: '/shakti-peethas',
    icon: MapPin,
    imageUrl: 'https://i.pinimg.com/736x/39/c9/02/39c902e6df9c039f893889eb77c16254.jpg',
    imageHint: 'shakti peethas sacred',
  },
  {
    title: 'Sacred Chants Library',
    description: 'Immerse yourself in divine vibrations of Stotras, Shlokas, and Mantras.',
    href: '/sacred-chants',
    icon: Library,
    imageUrl: 'https://i.pinimg.com/736x/96/ba/d2/96bad295781b96f629cfe4731e17288a.jpg',
    imageHint: 'sacred chants library',
  },
  {
    title: 'Mantra Personalizer',
    description: 'Receive a personalized mantra based on your spiritual intentions.',
    href: '/mantra-personalizer',
    icon: Wand2,
    imageUrl: 'https://i.pinimg.com/736x/6a/52/4d/6a524d31d75e198045378c4964c7e850.jpg',
    imageHint: 'mantra personalization ai',
  },
  {
    title: 'Feminine Divinity Philosophy',
    description: 'Explore the philosophical underpinnings of Adi Shakti in Indian thought.',
    href: '/philosophy',
    icon: Brain,
    imageUrl: 'https://i.pinimg.com/736x/52/57/e8/5257e883311ff17457739d809ad2f579.jpg',
    imageHint: 'philosophy shakti',
  },
  {
    title: 'Tantra & Shakti Sadhana',
    description: 'Delve into Tantric practices, Kundalini, and inner alchemy for transformation.',
    href: '/tantra-sadhana',
    icon: Flame,
    imageUrl: 'https://i.pinimg.com/736x/fc/8b/71/fc8b714de8f70aa930478d92c2325c06.jpg',
    imageHint: 'tantra sadhana energy',
  },
  {
    title: 'Divine Stories',
    description: 'Read captivating tales from Puranas and epics featuring Maa Shakti.',
    href: '/stories',
    icon: BookHeart,
    imageUrl: 'https://i.pinimg.com/736x/fb/fd/92/fbfd92806e9d8fe53648d49768112eab.jpg',
    imageHint: 'divine stories mythology',
  },
  {
    title: 'Spiritual Timeline',
    description: 'Trace the presence of Maa Adi Shakti through cosmic ages and history.',
    href: '/timeline',
    icon: CalendarClock,
    imageUrl: 'https://i.pinimg.com/736x/10/ff/87/10ff8757ed3a529fa96217b867a0b662.jpg',
    imageHint: 'spiritual timeline history',
  },
];

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Compass className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Navigate through the diverse aspects of Maa Adi Shakti. Each section offers a unique perspective on the Divine Feminine.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exploreSections.map((section) => (
          <Card key={section.href} className="flex flex-col hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
            <CardHeader className="relative p-0">
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={400}
                height={200}
                className="rounded-t-lg object-cover w-full h-40"
                data-ai-hint={section.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
               <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="flex items-center gap-3">
                    <section.icon className="w-7 h-7 text-white drop-shadow-lg flex-shrink-0" />
                    <CardTitle className="text-2xl text-white drop-shadow-lg">{section.title}</CardTitle>
                </div>
               </div>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <CardDescription className="text-foreground/80 min-h-[4.5rem] line-clamp-3">
                {section.description}
              </CardDescription>
            </CardContent>
            <div className="p-6 pt-2 border-t border-border/30">
              <Button asChild variant="link" className="text-accent p-0 font-semibold text-base group">
                <Link href={section.href}>
                  Explore Section <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <section className="mt-16 text-center p-8 bg-secondary/10 rounded-lg">
        <h3 className="text-2xl font-semibold text-secondary mb-3">Your Journey into Divine Wisdom</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          This portal is designed to guide you through the multifaceted nature of Shakti. May your exploration be enlightening and inspiring.
        </p>
      </section>
    </div>
  );
}

