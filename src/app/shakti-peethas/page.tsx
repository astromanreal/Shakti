import { shaktiPeethaData } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { MapPin, Zap, Heart, Brain } from 'lucide-react';
import ShaktiPeethaMap from '@/components/shakti-peetha-map';
import type { Metadata } from 'next';

const pageTitle = "Sacred Shakti Peethas - Pilgrimage Sites of Divine Feminine Power";
const pageDescription = "Discover the holy Shakti Peethas, pilgrimage sites where parts of Devi Sati's body fell, imbuing these locations with immense spiritual power. Each Peetha is a vibrant center of Shakti worship.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Shakti Peethas", "51 Shakti Peethas", "Devi Sati", "Hindu pilgrimage sites", "sacred sites India",
    "Kamakhya", "Kalighat", "Jwalaji", "Vaishno Devi", "Hinglaj Mata", "Divine Feminine Power"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/shakti-peethas',
    images: [
      {
        url: `https://picsum.photos/seed/shakti-peethas-map/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'Map of Shakti Peethas',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/shakti-peethas-map/1200/630`],
  },
};

export default function ShaktiPeethasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <MapPin className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {pageDescription}
        </p>
      </header>

      <section className="mb-12">
        <ShaktiPeethaMap />
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shaktiPeethaData.map((peetha) => (
            <Card 
              key={peetha.id} 
              className="flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-border group"
            >
              <CardHeader className="p-0 relative">
                <Image
                  src={`https://picsum.photos/seed/${peetha.imageHint.toLowerCase().replace(/\s+/g, '-')}/400/250`}
                  alt={peetha.name}
                  width={400}
                  height={250}
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={peetha.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                     <CardTitle className="text-2xl text-white drop-shadow-md group-hover:text-primary transition-colors duration-300">{peetha.name}</CardTitle>
                  </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardDescription className="text-sm text-muted-foreground mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-secondary flex-shrink-0" /> {peetha.location}
                </CardDescription>

                <div className="space-y-2 mb-4 text-sm text-foreground/90">
                  <p className="flex items-center gap-2"><Heart className="w-4 h-4 text-red-500"/> <strong className="font-semibold text-secondary">Body Part:</strong> {peetha.bodyPart}</p>
                  <p className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500"/> <strong className="font-semibold text-secondary">Shakti:</strong> {peetha.shakti}</p>
                  <p className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-500"/> <strong className="font-semibold text-secondary">Bhairava:</strong> {peetha.bhairava}</p>
                </div>
                
                <div className="text-sm text-foreground/80 mb-4 flex-grow min-h-[6rem]">
                    <p className="font-semibold text-foreground mb-1 flex items-center gap-2"><Brain className="w-4 h-4 text-purple-500" />Significance:</p>
                    <p className="line-clamp-4 hover:line-clamp-none transition-all duration-200">{peetha.significance}</p> 
                </div>


                <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs px-3 py-1">{peetha.templeType}</Badge>
                  <Badge variant="outline" className="text-xs px-3 py-1">{peetha.associatedFestival}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {shaktiPeethaData.length === 0 && (
         <Card className="text-center p-8 bg-muted mt-8">
            <p className="text-lg text-muted-foreground">
                Information about the sacred Shakti Peethas is being compiled and will be available soon.
            </p>
        </Card>
      )}
    </div>
  );
}
