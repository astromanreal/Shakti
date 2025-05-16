import Image from 'next/image';
import Link from 'next/link';
import { mahavidyaData } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Zap, WandSparkles } from 'lucide-react'; 
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

const pageTitle = "The Das Mahavidyas - Ten Great Wisdom Goddesses";
const pageDescription = "Explore the Ten Great Wisdom Goddesses, profound and often fierce manifestations of Adi Shakti. Each Mahavidya embodies a unique cosmic truth and a potent path to spiritual realization and liberation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Das Mahavidyas", "Ten Wisdom Goddesses", "Mahavidyas", "Kali", "Tara", "Tripura Sundari", 
    "Bhuvaneshwari", "Chinnamasta", "Bhairavi", "Dhumavati", "Bagalamukhi", "Matangi", "Kamala",
    "Tantric Goddesses", "Shaktism", "Cosmic Truths"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/mahavidyas',
    images: [
      {
        url: `https://picsum.photos/seed/das-mahavidyas-overview/1200/630`, 
        width: 1200,
        height: 630,
        alt: 'The Das Mahavidyas - Ten Great Wisdom Goddesses',
      },
    ],
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
    images: [`https://picsum.photos/seed/das-mahavidyas-overview/1200/630`],
  },
};


export default function MahavidyasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
          <Zap className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {pageTitle}
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {pageDescription}
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mahavidyaData.map((mahavidya) => (
          <Card 
            key={mahavidya.slug} 
            className="flex flex-col bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03] group"
          >
            <CardHeader className="p-0 relative">
              <Image
                src={`https://picsum.photos/seed/${mahavidya.slug}/400/250`}
                alt={mahavidya.name}
                width={400}
                height={250}
                className="object-cover w-full h-48" 
                data-ai-hint={mahavidya.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <CardTitle className="text-2xl text-white drop-shadow-lg flex items-center gap-2">
                  <WandSparkles className="w-6 h-6" /> {mahavidya.name}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardDescription className="text-foreground/80 mb-4 line-clamp-3 flex-grow min-h-[4.5rem]">
                {mahavidya.description}
              </CardDescription>
              
              <div className="mt-2 mb-4">
                <h4 className="text-sm font-semibold text-secondary mb-1">Primary Mantra:</h4>
                <Badge variant="secondary" className="text-xs sm:text-sm p-2 font-mono truncate block w-full text-left">
                  {mahavidya.mantras[0]}
                </Badge>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border/50">
                <Button asChild variant="link" className="text-accent p-0 font-semibold text-base">
                  <Link href={`/mahavidyas/${mahavidya.slug}`}>
                    Explore {mahavidya.name} <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
       <section className="mt-16 text-center p-8 bg-secondary/10 rounded-lg">
        <h3 className="text-2xl font-semibold text-secondary mb-3">Journey into Profound Wisdom</h3>
        <p className="text-foreground/80 max-w-xl mx-auto">
          The Mahavidyas represent diverse and potent paths to understanding the ultimate reality. Their worship often involves transformative sadhanas and a deep exploration of Tantric philosophy.
        </p>
      </section>
    </div>
  );
}
