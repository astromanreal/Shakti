
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    Sparkles, 
    ChevronRight, 
    BookOpen, 
    Users, 
    MapPin, 
    Shapes, 
    Award, 
    Flame,
    CalendarClock,
    Music2,
    Quote,
    Aperture,
    Library as LibraryIcon
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Shakti Darshan – Divine Sanctuary of Cosmic Power & Feminine Wisdom";
const pageDescription = "Welcome to Shakti Darshan, your sacred portal to explore the multifaceted Divine Feminine. Discover Maa Adi Shakti's forms, wisdom, mantras, and sacred traditions like Tridevi, Mahavidyas, and Shakti Peethas.";
const ogImageUrl = `${siteUrl}/og-images/homepage-shakti-darshan.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Darshan", "Adi Shakti", "Divine Feminine", "Hindu Goddesses", "Homepage", 
    "Spiritual Sanctuary", "Cosmic Power", "Mahavidyas", "Shakti Peethas", "Tridevi",
    "Maa Adi Shakti", "Sanatan Dharma", "Spiritual feminine power", "Hindu goddess worship"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Shakti Darshan Homepage - Gateway to Divine Feminine Wisdom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

const myriadFormsData = [
  {
    icon: Users,
    title: "🔮 The Das Mahavidyas",
    link: "/mahavidyas",
    label: "Wisdom Goddesses",
    newTitle: "The Das Mahavidyas",
    subtitle: "Ten gateways to transcendence and inner power.",
    buttonText: "Unveil the Wisdoms",
    backgroundImageHint: "abstract fusion 10 mahavidyas faces yantra"
  },
  {
    icon: MapPin,
    title: "🕉️ Shakti Peethas",
    link: "/shakti-peethas",
    label: "Sacred Geography",
    newTitle: "Shakti Peethas",
    subtitle: "Where the divine feminine sanctifies the Earth.",
    buttonText: "Visit Sacred Grounds",
    backgroundImageHint: "map silhouette glowing sacred sites"
  },
  {
    icon: LibraryIcon,
    title: "💫 Tridevi & Major Forms",
    link: "/tridevi",
    label: "Primary Aspects",
    newTitle: "Tridevi & Major Forms",
    subtitle: "Meet the triune goddess and other core emanations.",
    buttonText: "Explore the Pantheon",
    backgroundImageHint: "tridevi cosmic energy forms"
  },
  {
    icon: Shapes,
    title: "🪔 Pancha Prakritis",
    link: "/pancha-prakritis",
    label: "Fivefold Nature",
    newTitle: "Pancha Prakritis",
    subtitle: "Witness Mahadevi's five nurturing essences of creation.",
    buttonText: "Discover the Natures",
    backgroundImageHint: "abstract five elements nature mandala"
  },
  {
    icon: Award,
    title: "📖 Devi Mahatmyam Forms",
    link: "/devi-mahatmyam-forms",
    label: "Epic Manifestations",
    newTitle: "Devi Mahatmyam Forms",
    subtitle: "Explore warrior goddesses from the Durga Saptashati.",
    buttonText: "Witness the Glory",
    backgroundImageHint: "durga saptashati epic battle abstract"
  },
  {
    icon: Flame,
    title: "🧘‍♀️ Tantra & Shakti Sadhana",
    link: "/tantra-sadhana",
    label: "Transformative Path",
    newTitle: "Tantra & Shakti Sadhana",
    subtitle: "Ignite the fire within through ancient energy practices.",
    buttonText: "Ignite Your Sadhana",
    backgroundImageHint: "kundalini serpent yantra glowing flame"
  }
];

const wisdomQuotes = [
  {
    quote: "She is the flame in the heart of time. The power behind the gods. The source from which all things rise and return.",
    source: "Shakti Darshan Inspiration"
  },
  {
    quote: "Without Shakti, Shiva is Shava (a corpse). Consciousness without power is inert; power without consciousness is blind.",
    source: "Traditional Tantric Saying"
  },
  {
    quote: "All knowledge, all power, all bliss is within you, for you are She. Realize your true nature.",
    source: "Inspired by Upanishadic & Shakta Thought"
  }
];


export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shakti Darshan",
    "url": siteUrl,
    "description": pageDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="container mx-auto px-4 py-8 space-y-16 md:space-y-24">
        {/* 1. Hero Banner (Sacred Welcome) */}
        <section 
          className="relative text-center py-16 md:py-24 rounded-3xl shadow-2xl border border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
          data-ai-hint="animated Manidvipa or Shakti Yantra soft glow"
          aria-labelledby="hero-title"
        >
          <div className="relative z-10 px-4">
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
              Welcome to Shakti Darshan
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold max-w-2xl mx-auto mb-6">
              A divine sanctuary to explore the cosmic power of Maa Adi Shakti
            </p>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-10 italic">
             “She is the flame in the heart of time. The power behind the gods. The source from which all things rise and return.”
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-accent">
              <Link href="/explore">
                <Sparkles className="w-6 h-6 mr-2.5" /> Explore the Divine Realm
              </Link>
            </Button>
          </div>
        </section>

        {/* 2. Section: Discover Her Myriad Forms */}
        <section aria-labelledby="manifestations-title">
          <header className="text-center mb-12">
            <h2 id="manifestations-title" className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
              Manifestations of the Divine Mother
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Journey through the diverse forms and aspects of Adi Shakti.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {myriadFormsData.map((form) => {
              const IconComponent = form.icon;
              return (
                <Card 
                  key={form.newTitle} 
                  className="relative flex flex-col rounded-2xl shadow-xl group overflow-hidden h-80 md:h-96 border border-primary/20 hover:border-primary/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-105"
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"
                    data-ai-hint={form.backgroundImageHint}
                    aria-hidden="true"
                  >
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full p-5 text-center text-white">
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm text-xs px-2 py-1">
                        {form.label}
                      </Badge>
                    </div>

                    <div className="flex-grow flex flex-col justify-center items-center pt-8">
                      <IconComponent className="w-12 h-12 mb-3 text-primary group-hover:text-accent transition-all duration-300" />
                      <CardTitle className="text-2xl font-semibold mb-1 drop-shadow-lg group-hover:text-primary transition-colors">
                        {form.newTitle}
                      </CardTitle>
                      <p className="text-sm text-gray-200 group-hover:text-white mb-4 drop-shadow-sm px-2 line-clamp-2">
                        {form.subtitle}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        variant="default" 
                        className="w-full bg-accent hover:bg-accent/80 text-accent-foreground shadow-lg hover:shadow-xl ring-2 ring-transparent hover:ring-accent/70 focus:ring-accent transform hover:scale-105 transition-all duration-300 ease-in-out py-3"
                        aria-label={`Explore ${form.newTitle}`}
                      >
                        <Link href={form.link}>
                          {form.buttonText} <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 3. Section: Timeline of Shakti */}
        <section aria-labelledby="timeline-title">
          <Card className="shadow-xl rounded-2xl border-2 border-secondary/20 bg-gradient-to-tl from-secondary/5 via-background to-card p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center bg-secondary/10 p-3.5 rounded-full mb-6 ring-4 ring-secondary/30">
              <CalendarClock className="w-12 h-12 text-secondary" />
            </div>
            <CardTitle id="timeline-title" className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              The Eternal Presence of the Goddess
            </CardTitle>
            <CardDescription className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Trace Maa Adi Shakti’s role across Yugas, incarnations, and spiritual traditions—from primordial creation to the present age.
            </CardDescription>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-md px-8 py-6 rounded-xl shadow-md hover:shadow-lg">
              <Link href="/timeline">
                View the Full Timeline <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </Card>
        </section>

        {/* 4. Section: Chant & Connect */}
        <section aria-labelledby="sacred-sounds-title">
          <Card className="shadow-xl rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/5 via-background to-card p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center bg-accent/10 p-3.5 rounded-full mb-6 ring-4 ring-accent/30">
                <Music2 className="w-12 h-12 text-accent" />
              </div>
              <CardTitle id="sacred-sounds-title" className="text-3xl md:text-4xl font-bold text-accent mb-4 tracking-tight">
                Sacred Sounds of the Goddess
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
               Immerse yourself in divine vibrations. Explore powerful mantras and stotras dedicated to Maa Adi Shakti.
              </CardDescription>
              <div className="space-y-4 my-6">
                  <div className="p-4 bg-muted rounded-lg shadow-sm border border-border/30" data-ai-hint="audio waveform animation subtle">
                      <p className="font-semibold text-primary text-xl">ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे</p>
                  </div>
                   <div className="p-4 bg-muted rounded-lg shadow-sm border border-border/30" data-ai-hint="yantra animation subtle light">
                      <p className="font-semibold text-secondary text-xl">ॐ दुं दुर्गायै नमः</p>
                  </div>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-md px-8 py-6 rounded-xl shadow-md hover:shadow-lg">
                  <Link href="/sacred-chants">
                   Open Sacred Chant Library <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
              </Button>
          </Card>
        </section>

        {/* 5. Section: Featured Wisdom */}
        <section aria-labelledby="wisdom-title">
          <header className="text-center mb-10">
            <h2 id="wisdom-title" className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
              Wisdom of Shakti
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Profound teachings illuminating the nature of the Divine Feminine.
            </p>
          </header>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {wisdomQuotes.map((item, index) => (
              <Card 
                key={index} 
                className="shadow-xl rounded-2xl border-2 border-primary/30 bg-gradient-to-tr from-card via-background to-muted/10 p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
                data-ai-hint="sacred scroll texture parchment"
                role="article"
                aria-labelledby={`quote-title-${index}`}
              >
                <CardContent className="p-0">
                  <Quote className="w-10 h-10 text-primary/50 mb-4" aria-hidden="true" />
                  <p id={`quote-title-${index}`} className="text-lg italic text-foreground/90 leading-relaxed mb-4 font-serif">
                    “{item.quote}”
                  </p>
                </CardContent>
                <CardFooter className="p-0 pt-4 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground font-medium">— {item.source}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. Footer CTA */}
        <section className="text-center py-12 mt-12 bg-gradient-to-r from-secondary/10 via-background to-primary/10 rounded-3xl shadow-2xl border border-border/20" aria-labelledby="footer-cta-title">
          <Aperture className="w-16 h-16 text-accent mx-auto mb-6 opacity-80" aria-hidden="true" />
          <h2 id="footer-cta-title" className="text-3xl md:text-4xl font-bold text-accent mb-5 tracking-tight">
            Begin Your Inner Journey
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-primary mb-8">
            <Link href="/explore">
              <Sparkles className="w-6 h-6 mr-2.5" /> Start Exploring Shakti Darshan
            </Link>
          </Button>
          <p className="font-mono text-xl text-primary/80 tracking-wider">
            ॐ ऐं ह्रीं श्रीं क्लीं आदि शक्त्यै नमः
          </p>
        </section>
      </div>
    </>
  );
}
