
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, LayoutGrid, ShieldAlert, Gem, BookOpen, Heart, Sword, Sparkles } from 'lucide-react';
import { trideviData } from '@/data/content';
import { Badge } from '@/components/ui/badge';
import type { TrideviDetails } from '@/types';
import type { Metadata } from 'next';

const pageTitle = "Tridevi & Major Goddess Forms (Durga, Lakshmi, Saraswati, Parvati, Kali)";
const pageDescription = "Learn about the Tridevi (Durga, Lakshmi, Saraswati) and other major forms of the Divine Mother like Parvati and Kali. Explore their aspects, powers, and significance in Shaktism.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Tridevi", "Durga", "Lakshmi", "Saraswati", "Parvati", "Kali", 
    "Major Goddesses", "Hindu Trinity Feminine", "Shakti Forms", "Adi Parashakti"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/tridevi',
    images: [
      {
        url: `https://i.pinimg.com/736x/4e/6b/33/4e6b33b4983c6eb94de52d43a2a77228.jpg`, 
        width: 1200,
        height: 630,
        alt: 'Tridevi - Durga, Lakshmi, Saraswati',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://i.pinimg.com/736x/4e/6b/33/4e6b33b4983c6eb94de52d43a2a77228.jpg`],
  },
};

// Helper to get the correct icon for each goddess
const getGoddessIcon = (slug: TrideviDetails['slug']) => {
  switch (slug) {
    case 'durga': return ShieldAlert;
    case 'lakshmi': return Gem;
    case 'saraswati': return BookOpen;
    case 'parvati': return Heart;
    case 'kali': return Sword;
    default: return Sparkles; // Default icon
  }
};

export default function TrideviMajorFormsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <LayoutGrid className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Discover the principal manifestations of the Divine Feminine: Maa Durga, Maa Lakshmi, Maa Saraswati, Maa Parvati, and Maa Kali. Each represents unique aspects of Adi Shakti's power and grace.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trideviData.map((goddess) => {
          const IconComponent = getGoddessIcon(goddess.slug);
          const linkHref = goddess.slug === 'kali' ? `/mahavidyas/kali` : `/tridevi/${goddess.slug}`;
          
          return (
            <Card 
              key={goddess.slug} 
              className="flex flex-col bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] group"
            >
              <CardHeader className="p-0 relative">
                <Image
                  src={goddess.imageUrl || `https://picsum.photos/seed/${goddess.imageHint}/600/400`}
                  alt={goddess.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-56"
                  data-ai-hint={goddess.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <IconComponent className="w-7 h-7 text-white drop-shadow-md" />
                    <CardTitle className="text-3xl text-white drop-shadow-lg">{goddess.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-200 drop-shadow-md font-medium">{goddess.aspect}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <p className="text-foreground/80 mb-4 line-clamp-3 flex-grow min-h-[4.5rem]">
                  {goddess.introduction || goddess.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-secondary mb-1">Key Attributes:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {goddess.attributes.slice(0, 3).map(attr => ( 
                      <Badge key={attr} variant="outline" className="text-xs px-2 py-0.5">{attr}</Badge>
                    ))}
                    {goddess.attributes.length > 3 && <Badge variant="outline" className="text-xs px-2 py-0.5">...</Badge>}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/50">
                  <Button asChild variant="link" className="text-accent p-0 font-semibold text-base">
                    <Link href={linkHref}>
                      Explore {goddess.name.split(' ').pop()} <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <section className="mt-16 text-center p-8 bg-secondary/10 rounded-lg">
        <h3 className="text-2xl font-semibold text-secondary mb-3">The Pillars of Shakti</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          These goddesses are central to understanding the vastness of the Divine Mother. Their stories, symbolism, and worship offer profound paths to spiritual connection and empowerment.
        </p>
      </section>
    </div>
  );
}
