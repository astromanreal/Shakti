import Image from 'next/image';
import { mahavidyaData } from '@/data/content';
import type { MahavidyaDetails } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookMarked, Zap, Users, Brain, MessageSquare, Star, Shield, CalendarDays, Eye } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

type MahavidyaPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: MahavidyaPageProps): Promise<Metadata> {
  const mahavidya = mahavidyaData.find((g) => g.slug === params.slug);

  if (!mahavidya) {
    return {
      title: 'Mahavidya Not Found | Shakti Darshan',
      description: 'The requested Mahavidya page could not be found.',
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${mahavidya.name} - ${mahavidya.aspect || 'Cosmic Wisdom'} | ${siteName}`;
  const pageDescription = mahavidya.description.substring(0, 160) + (mahavidya.description.length > 160 ? '...' : '');
  const pageUrl = `/mahavidyas/${params.slug}`;
  const imageUrl = `https://picsum.photos/seed/${mahavidya.imageHint || mahavidya.slug}/1200/630`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [mahavidya.name, 'Mahavidya', 'Das Mahavidyas', mahavidya.aspect || 'Wisdom Goddess', ...mahavidya.associates.slice(0,3)],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: mahavidya.name,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return mahavidyaData.map((goddess) => ({
    slug: goddess.slug,
  }));
}

export default function MahavidyaPage({ params }: MahavidyaPageProps) {
  const mahavidya = mahavidyaData.find((g) => g.slug === params.slug);

  if (!mahavidya) {
    return <div className="container mx-auto px-4 py-8 text-center">Mahavidya not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg">
          <Zap className="w-16 h-16 text-primary" /> {/* Default Icon */}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2 drop-shadow-md">
          {mahavidya.name}
        </h1>
        {mahavidya.aspect && (
             <p className="text-2xl text-secondary font-medium mb-4">{mahavidya.aspect}</p>
        )}
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          {mahavidya.description.split('.')[0]}.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <Card className="sticky top-10 shadow-xl rounded-xl overflow-hidden border-2 border-primary/30">
            <CardHeader className="p-0">
              <Image
                src={`https://picsum.photos/seed/${mahavidya.imageHint}/600/700`}
                alt={mahavidya.name}
                width={600}
                height={700}
                className="rounded-t-lg shadow-md object-cover object-top w-full h-auto max-h-[450px] lg:max-h-[600px]"
                data-ai-hint={mahavidya.imageHint}
              />
            </CardHeader>
            <CardContent className="p-6 bg-gradient-to-b from-card to-muted/30">
              <h3 className="text-xl font-semibold mb-3 text-secondary flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" /> Key Mantras
              </h3>
              {mahavidya.mantras.map((mantra, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="block w-full text-left text-sm p-3 my-2 font-mono shadow-sm break-words whitespace-normal"
                >
                  {mantra}
                </Badge>
              ))}
               {mahavidya.consort && (
                <p className="text-md mt-4"><strong className="text-foreground">Consort:</strong> {mahavidya.consort}</p>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-xl rounded-xl border border-border/50">
            <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <BookMarked className="w-7 h-7"/> Detailed Description
                </CardTitle>
            </CardHeader>
            <CardContent><p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{mahavidya.description}</p></CardContent>
          </Card>

          <Card className="shadow-xl rounded-xl border border-border/50">
             <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Eye className="w-7 h-7"/> Iconography & Symbolism
                </CardTitle>
            </CardHeader>
            <CardContent><p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{mahavidya.iconography}</p></CardContent>
          </Card>

          <Card className="shadow-xl rounded-xl border border-border/50">
            <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                     <Star className="w-7 h-7"/> Core Attributes / Associates
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {(mahavidya.attributesList || mahavidya.associates).map((item, index) => ( 
                    <Badge key={index} variant="outline" className="text-md px-3 py-1.5 shadow-sm">{item}</Badge>
                ))}
            </CardContent>
          </Card>
          
          <Card className="shadow-xl rounded-xl border border-border/50">
            <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Brain className="w-7 h-7"/> Key Teachings
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-md text-foreground/90">
                    {mahavidya.keyTeachings.map((teaching, index) => (
                        <li key={index}>{teaching}</li>
                    ))}
                </ul>
            </CardContent>
          </Card>

          {mahavidya.notableForms && mahavidya.notableForms.length > 0 && (
            <Card className="shadow-xl rounded-xl border border-border/50">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <Users className="w-7 h-7"/> Notable Forms
                  </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                  {mahavidya.notableForms.map((form, index) => (
                      <Badge key={index} variant="default" className="text-md px-3 py-1.5 shadow-sm">{form}</Badge>
                  ))}
              </CardContent>
            </Card>
          )}

          {mahavidya.festivals && mahavidya.festivals.length > 0 && (
            <Card className="shadow-xl rounded-xl border border-border/50">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <CalendarDays className="w-7 h-7"/> Major Festivals
                  </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                  {mahavidya.festivals.map((festival, index) => (
                      <Badge key={index} variant="secondary" className="text-md px-3 py-1.5 shadow-sm">{festival}</Badge>
                  ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Separator className="my-12 bg-border/50" />

      <Card className="mt-12 p-8 bg-accent/10 text-center rounded-xl shadow-lg">
        <CardTitle className="text-2xl text-accent mb-3">Path to Cosmic Understanding</CardTitle>
        <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
          The wisdom of {mahavidya.name} offers a unique lens through which to perceive the ultimate reality and the boundless power of Adi Shakti. Her teachings guide seekers towards profound transformation and liberation.
        </p>
      </Card>
    </div>
  );
}
