
import Image from 'next/image';
import { mahavidyaData } from '@/data/mahavidya-data';
import type { MahavidyaDetails } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookMarked, Zap, Users, Brain, MessageSquare, Star, Shield, CalendarDays, Eye, Lightbulb, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';

type MahavidyaPageProps = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export async function generateMetadata({ params }: MahavidyaPageProps): Promise<Metadata> {
  const mahavidya = mahavidyaData.find((g) => g.slug === params.slug);

  if (!mahavidya) {
    return {
      title: 'Mahavidya Not Found | Shakti Darshan',
      description: 'The requested Mahavidya page could not be found. Explore other aspects of Maa Adi Shakti and the Divine Feminine on Shakti Darshan.',
      robots: { index: false, follow: false },
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${mahavidya.name} - ${mahavidya.essence || 'Cosmic Wisdom'} | Das Mahavidyas | ${siteName}`;
  const pageDescription = `${mahavidya.name}, one of the Das Mahavidyas, represents ${mahavidya.essence}. Explore her iconography, mantras, teachings, and significance in Tantra and Shaktism. ${mahavidya.description.substring(0, 100)}...`;
  const pageUrl = `/mahavidyas/${params.slug}`;
  const imageUrl = mahavidya.imageUrl || `${siteUrl}/og-images/mahavidyas/${mahavidya.slug}.jpg`;


  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [mahavidya.name, 'Mahavidya', 'Das Mahavidyas', mahavidya.essence, mahavidya.aspect || 'Wisdom Goddess', ...mahavidya.keyThemes.slice(0,3), 'Tantra', 'Shaktism', 'Maa Adi Shakti'],
    alternates: {
      canonical: pageUrl,
    },
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
          alt: `Image of Mahavidya ${mahavidya.name}`,
        },
      ],
      type: 'article', 
      article: { 
        authors: [`${siteUrl}/about`], 
        section: "Das Mahavidyas",
        tags: [mahavidya.name, 'Mahavidya', 'Tantra', ...mahavidya.keyThemes],
      }
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
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <Card className="max-w-md mx-auto p-8 bg-destructive/10 border-destructive">
                <CardTitle className="text-2xl text-destructive mb-4">Mahavidya Not Found</CardTitle>
                <CardDescription>
                    The Wisdom Goddess you are looking for does not exist or may have been moved.
                </CardDescription>
                 <Button asChild className="mt-6">
                    <Link href="/mahavidyas">Back to Mahavidyas</Link>
                </Button>
            </Card>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${mahavidya.name} - ${mahavidya.essence}`,
    "description": mahavidya.description,
    "image": mahavidya.imageUrl || `${siteUrl}/og-images/mahavidyas/${mahavidya.slug}.jpg`,
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
      "@id": `${siteUrl}/mahavidyas/${mahavidya.slug}`
    },
    "keywords": [mahavidya.name, "Mahavidya", "Das Mahavidyas", mahavidya.essence, ...mahavidya.keyThemes].join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-10">
        <Button asChild variant="outline" className="mb-8 group text-sm">
          <Link href="/mahavidyas">
            <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
            Back to Mahavidyas
          </Link>
        </Button>
        <header className="mb-12 text-center" aria-labelledby={`mahavidya-title-${mahavidya.slug}`}>
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg">
            <Zap className="w-16 h-16 text-primary" />
          </div>
          <h1 id={`mahavidya-title-${mahavidya.slug}`} className="text-4xl md:text-6xl font-bold text-primary mb-2 drop-shadow-md">
            {mahavidya.name}
          </h1>
          {mahavidya.essence && (
               <p className="text-2xl text-secondary font-medium mb-4">{mahavidya.essence}</p>
          )}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {mahavidya.description.split('.')[0]}.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <Card className="sticky top-20 shadow-xl rounded-xl overflow-hidden border-2 border-primary/30 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={mahavidya.imageUrl || `https://placehold.co/600x700.png`}
                  alt={`Sacred image of Mahavidya ${mahavidya.name}`}
                  width={600}
                  height={700}
                  className="rounded-t-lg shadow-md object-cover object-top w-full h-auto max-h-[450px] lg:max-h-[600px]"
                  data-ai-hint={mahavidya.imageHint}
                  priority 
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
                    className="block w-full text-left text-sm p-3 my-2 font-mono shadow-sm break-words whitespace-normal bg-secondary/20 text-secondary-foreground"
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
            <Card className="shadow-lg rounded-xl border border-border/50">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <BookMarked className="w-7 h-7"/> Detailed Description
                  </CardTitle>
              </CardHeader>
              <CardContent><p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{mahavidya.description}</p></CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl border border-border/50">
               <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                      <Eye className="w-7 h-7"/> Iconography & Symbolism
                  </CardTitle>
              </CardHeader>
              <CardContent><p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{mahavidya.iconography}</p></CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl border border-border/50">
              <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                       <Star className="w-7 h-7"/> Core Attributes / Key Themes
                  </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                  {(mahavidya.attributesList || mahavidya.keyThemes || mahavidya.associates).map((item, index) => ( 
                      <Badge key={index} variant="outline" className="text-md px-3 py-1.5 shadow-sm border-secondary/50 bg-secondary/10 text-secondary-foreground">{item}</Badge>
                  ))}
              </CardContent>
            </Card>
            
            <Card className="shadow-lg rounded-xl border border-border/50">
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

            {mahavidya.sadhanaSummary && (
              <Card className="shadow-lg rounded-xl border border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <Lightbulb className="w-7 h-7" /> Sadhana Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{mahavidya.sadhanaSummary}</p>
                </CardContent>
              </Card>
            )}

            {mahavidya.notableForms && mahavidya.notableForms.length > 0 && (
              <Card className="shadow-lg rounded-xl border border-border/50">
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
              <Card className="shadow-lg rounded-xl border border-border/50">
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

        <Card className="mt-12 p-8 bg-accent/10 text-center rounded-xl shadow-lg border-2 border-accent/20" aria-labelledby={`conclusion-title-${mahavidya.slug}`}>
          <CardTitle id={`conclusion-title-${mahavidya.slug}`} className="text-2xl text-accent mb-3">Path to Cosmic Understanding</CardTitle>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            The wisdom of {mahavidya.name} offers a unique lens through which to perceive the ultimate reality and the boundless power of Adi Shakti. Her teachings guide seekers towards profound transformation and liberation.
          </p>
        </Card>
      </div>
    </>
  );
}


    