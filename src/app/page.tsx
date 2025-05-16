
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, ChevronRight, BookOpen, Star, Shield, Gem, Music, Droplet, Heart, Sun, Layers, Aperture } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { mahadeviGeneralData } from '@/data/content';

const pageTitle = "Maa Adi Shakti – The Eternal Source of Divine Feminine Power";
const pageDescription = "Welcome to Shakti Darshan, a sacred digital portal dedicated to Maa Adi Shakti, the supreme divine feminine force. Explore her infinite forms, powers, and wisdom, including Tridevi, Mahavidyas, and Shakti Peethas.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com'; // Fallback to default if not set
const defaultOgImage = `${siteUrl}/og-mahadevi-home.jpg`; // Updated OG image path

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Darshan", "Adi Shakti", "Mahadevi", "Divine Feminine", "Hindu Goddesses", 
    "Tridevi", "Durga", "Lakshmi", "Saraswati", "Puranas", "Indian Spirituality", "Homepage"
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
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'Mahadevi - The Supreme Goddess',
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


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Welcome to Shakti Darshan, a sacred digital portal dedicated to Maa Adi Shakti, the supreme divine feminine force. Explore her infinite forms, powers, and wisdom.
        </p>
      </header>

      <section className="mb-16">
        <Card className="shadow-2xl border-2 border-secondary/30 bg-gradient-to-br from-card via-muted/20 to-card overflow-hidden">
          <CardHeader className="bg-secondary/10 p-6">
            <div className="flex flex-col items-center text-center">
              <Layers className="w-16 h-16 text-secondary mb-4" />
              <CardTitle className="text-3xl md:text-4xl font-bold text-secondary">
                {mahadeviGeneralData.title}
              </CardTitle>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {mahadeviGeneralData.otherNames.map(name => (
                  <Badge key={name} variant="secondary" className="text-sm">{name}</Badge>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-1 gap-8 items-start">
              <div className="space-y-6"> 
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2"><Star className="w-5 h-5" /> Affiliations</h3>
                  <div className="flex flex-wrap gap-2">
                    {mahadeviGeneralData.affiliations.map(affiliation => (
                      <Badge key={affiliation} variant="outline" className="px-3 py-1 text-base">{affiliation}</Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <h4 className="font-semibold text-secondary flex items-center gap-1"><Aperture className="w-4 h-4" /> Abode:</h4>
                    <p className="text-foreground/90">{mahadeviGeneralData.abode}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary flex items-center gap-1"><Music className="w-4 h-4" /> Mantra:</h4>
                    <p className="text-foreground/90 font-mono">{mahadeviGeneralData.mantra}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary flex items-center gap-1"><Shield className="w-4 h-4" /> Weapons:</h4>
                    <p className="text-foreground/90">{mahadeviGeneralData.weapons.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary flex items-center gap-1"><Droplet className="w-4 h-4" /> Symbols:</h4>
                    <p className="text-foreground/90">{mahadeviGeneralData.symbols.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary flex items-center gap-1"><Sun className="w-4 h-4" /> Mount:</h4>
                    <p className="text-foreground/90">{mahadeviGeneralData.mount}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5" /> Principal Texts</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {mahadeviGeneralData.texts.join(', ')}.
                  </p>
                </div>

                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2"><Heart className="w-5 h-5" /> Major Festivals</h3>
                   <div className="flex flex-wrap gap-2">
                    {mahadeviGeneralData.festivals.map(festival => (
                      <Badge key={festival} variant="default" className="px-3 py-1 text-sm">{festival}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>


      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-secondary">Meet the Tridevi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Maa Durga', description: 'The invincible warrior goddess, embodiment of power and protection.', href: '/tridevi/durga', imgSrc: 'https://i.pinimg.com/736x/fb/fd/92/fbfd92806e9d8fe53648d49768112eab.jpg', hint: 'goddess durga' },
            { name: 'Maa Lakshmi', description: 'The goddess of wealth, prosperity, and auspiciousness.', href: '/tridevi/lakshmi', imgSrc: 'https://i.pinimg.com/736x/06/29/e7/0629e77e94953e85b18788f7debb4c08.jpg', hint: 'goddess lakshmi' },
            { name: 'Maa Saraswati', description: 'The goddess of wisdom, knowledge, arts, and music.', href: '/tridevi/saraswati', imgSrc: 'https://i.pinimg.com/736x/3b/d8/79/3bd8795e7614a482616a72766917ae43.jpg', hint: 'goddess saraswati' },
          ].map((goddess) => (
            <Card key={goddess.name} className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <Image
                  src={goddess.imgSrc}
                  alt={goddess.name}
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  data-ai-hint={goddess.hint}
                />
                <CardTitle className="mt-4 text-2xl text-primary">{goddess.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 h-20">{goddess.description}</CardDescription>
                <Button asChild variant="link" className="text-accent p-0 mt-4">
                  <Link href={goddess.href}>
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-secondary/10 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-secondary">Discover Her Myriad Forms</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          Journey through the diverse manifestations of the Divine Mother, from the fierce Mahavidyas to the nurturing aspects of Parvati, and explore the sacred geography of the Shakti Peethas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/mahavidyas">The Das Mahavidyas</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/shakti-peethas">Shakti Peethas</Link>
          </Button>
           <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/mantra-personalizer">Personalize Your Mantra</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

