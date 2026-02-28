
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, LayoutGrid, ShieldAlert, Gem, BookOpen, Heart, Sword, Sparkles, Aperture, ShieldCheck, Eye, Gift, Flame, Users2 as UsersIconLucide } from 'lucide-react';
import { trideviData } from '@/data/tridevi-data';
import { allMajorFormsDetailedData } from '@/data/all-major-forms-detailed-data'; // Changed import
import { Badge } from '@/components/ui/badge';
import type { TrideviDetails, OtherMajorFormDetail, FestivalDetail } from '@/types'; // Ensure FestivalDetail is imported
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';
const pageTitle = "Major Forms of Maa Adi Shakti: Tridevi, Kali, Parvati & More";
const pageDescription = "Explore the diverse manifestations of the Divine Mother, including the Tridevi (Durga, Lakshmi, Saraswati), Parvati, Kali, and other prominent forms like Kamakshi, Meenakshi, and Lalita Tripurasundari. Discover their significance in Shakti worship.";
const ogImageUrl = `${siteUrl}/og-images/major-shakti-forms.jpg`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Tridevi", "Adi Shakti Manifestations", "Durga", "Lakshmi", "Saraswati", "Parvati", "Kali",
    "Kamakshi", "Meenakshi", "Lalita Tripurasundari", "Annapurna", "Mahagauri", "Chamunda", "Sati",
    "Major Goddesses", "Hindu Trinity Feminine", "Shakti Forms", "Divine Feminine Energy", "Maa Adi Shakti", "Mahadevi"
  ],
  alternates: {
    canonical: '/tridevi',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/tridevi`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Major Forms and Manifestations of Maa Adi Shakti',
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

const IconMap: Record<string, React.ElementType> = {
  ShieldAlert, Gem, BookOpen, Heart, Sword, Sparkles, ShieldCheck, Eye, Gift, Flame, UsersIconLucide, Default: Sparkles
};


const GoddessCard: React.FC<{ goddess: TrideviDetails | OtherMajorFormDetail, linkHref?: string, ctaDisabled?: boolean }> = ({ goddess, linkHref, ctaDisabled }) => {
  const IconComponent = IconMap[goddess.iconName || 'Default'] || getGoddessIcon(goddess.slug || goddess.id);
  
  // Determine the correct slug or id for linking
  const id = (goddess as TrideviDetails).slug || goddess.id;
  let effectiveLinkHref = linkHref;
  if (!effectiveLinkHref) {
    if (id === 'kali') {
      effectiveLinkHref = `/mahavidyas/kali`;
    } else if ((goddess as TrideviDetails).slug) { // It's a Tridevi or Parvati/Kali from trideviData
      effectiveLinkHref = `/tridevi/${id}`;
    } else { // It's an OtherMajorFormDetail
      effectiveLinkHref = `/tridevi/forms/${id}`;
    }
  }
  
  const name = goddess.name;
  // 'aspect' for TrideviDetails, 'title' for OtherMajorFormDetail
  const aspectOrTitle = (goddess as TrideviDetails).aspect || (goddess as OtherMajorFormDetail).title;
  // 'introduction' for TrideviDetails, 'shortDescription' for OtherMajorFormDetail
  const introOrShortDesc = (goddess as TrideviDetails).introduction || (goddess as OtherMajorFormDetail).shortDescription;
  // 'attributes' for TrideviDetails, 'coreAttributes' for OtherMajorFormDetail
  const attributesList = (goddess as TrideviDetails).attributes || (goddess as OtherMajorFormDetail).coreAttributes || [];
  const imageUrl = goddess.imageUrl || `https://placehold.co/400x250.png`;
  const imageHint = goddess.imageHint || `${name.toLowerCase()} spiritual art`;

  // Check if there's enough detail for an enabled "Learn More" button
  const hasFullDetails = !!(goddess as OtherMajorFormDetail).philosophicalInsights || (goddess as TrideviDetails).detailedSymbolism;
  const finalCtaDisabled = ctaDisabled === undefined ? !hasFullDetails : ctaDisabled;


  return (
    <Card
      key={id}
      className="flex flex-col bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1.5 hover:scale-[1.02] group border border-border/30"
      data-ai-hint={`${name.toLowerCase()} sacred motif divine feminine`}
    >
      <CardHeader className="p-0 relative">
        <Image
          src={imageUrl}
          alt={`Divine image of Goddess ${name}`}
          width={400}
          height={250}
          className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-5">
          <div className="flex items-center gap-2.5 mb-1">
            <IconComponent className="w-7 h-7 text-white drop-shadow-md group-hover:text-primary transition-colors duration-300" />
            <CardTitle className="text-2xl text-white drop-shadow-md group-hover:text-primary transition-colors duration-300">{name}</CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-200 drop-shadow-sm font-medium group-hover:text-primary/80 transition-colors duration-300">{aspectOrTitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <p className="text-foreground/80 mb-4 line-clamp-4 flex-grow min-h-[5rem] text-base leading-relaxed">
          {introOrShortDesc}
        </p>
        {attributesList.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-secondary mb-1.5">Key Attributes:</h4>
            <div className="flex flex-wrap gap-1.5">
              {attributesList.slice(0, 3).map((attr:string) => (
                <Badge key={attr} variant="secondary" className="text-xs px-2 py-0.5 shadow-sm">{attr}</Badge>
              ))}
              {attributesList.length > 3 && <Badge variant="secondary" className="text-xs px-2 py-0.5 shadow-sm">...</Badge>}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto border-t border-border/30 pt-4 p-6">
        <Button asChild variant={finalCtaDisabled ? "outline" : "link"} disabled={finalCtaDisabled} className={cn(finalCtaDisabled ? "text-muted-foreground border-muted-foreground/30" : "text-accent p-0 font-semibold text-md group-hover:text-accent-foreground transition-colors")}>
          <Link href={finalCtaDisabled ? "#" : effectiveLinkHref}>
            {finalCtaDisabled ? "Details Coming Soon" : `Explore ${name.split(' ').pop()}`}
            {!finalCtaDisabled && <ChevronRight className="w-5 h-5 ml-1.5 group-hover:translate-x-1 transition-transform" />}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Fallback function if specific IconMap entry is not found
const getGoddessIcon = (slug: TrideviDetails['slug'] | string) => {
  switch (slug) {
    case 'durga': return ShieldAlert;
    case 'lakshmi': return Gem;
    case 'saraswati': return BookOpen;
    case 'parvati': return Heart;
    case 'kali': return Sword;
    default: return Sparkles; // Fallback icon
  }
};


export default function MajorFormsPage() {
  const primaryPillars = trideviData.filter(g => ['durga', 'kali'].includes(g.slug));
  const trideviConsorts = trideviData.filter(g => ['lakshmi', 'saraswati', 'parvati'].includes(g.slug));
  
  // Filter out Kamakshi and Meenakshi from allMajorFormsDetailedData if they are explicitly part of trideviData
  // Or, ensure they are distinct. For now, we assume trideviData is the source for Tridevi, Parvati, Kali
  // And allMajorFormsDetailedData is for others like Kamakshi, Meenakshi.
  const otherForms = allMajorFormsDetailedData.filter(
    form => !primaryPillars.some(p => p.slug === form.id) && !trideviConsorts.some(c => c.slug === form.id)
  );


  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `${siteUrl}/tridevi`,
    "image": ogImageUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        ...primaryPillars.map((goddess, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "WebPage",
            "name": goddess.name,
            "description": goddess.introduction || goddess.description,
            "url": `${siteUrl}${goddess.slug === 'kali' ? `/mahavidyas/kali` : `/tridevi/${goddess.slug}`}`,
            "image": goddess.imageUrl || `${siteUrl}/og-images/tridevi/${goddess.slug}.jpg`
          }
        })),
        ...trideviConsorts.map((goddess, index) => ({
          "@type": "ListItem",
          "position": primaryPillars.length + index + 1,
          "item": {
            "@type": "WebPage",
            "name": goddess.name,
            "description": goddess.introduction || goddess.description,
            "url": `${siteUrl}/tridevi/${goddess.slug}`,
            "image": goddess.imageUrl || `${siteUrl}/og-images/tridevi/${goddess.slug}.jpg`
          }
        })),
        ...otherForms.map((form, index) => ({ // Use filtered otherForms
           "@type": "ListItem",
           "position": primaryPillars.length + trideviConsorts.length + index + 1,
           "item": {
            "@type": "WebPage",
            "name": form.name,
            "description": form.shortDescription,
            "url": `${siteUrl}/tridevi/forms/${form.id}`,
            "image": form.imageUrl || `${siteUrl}/og-images/tridevi/forms/${form.id}.jpg`
           }
        }))
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "url": siteUrl,
      "logo": `${siteUrl}/logo.png`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <section className="relative mb-20 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl" aria-labelledby="major-forms-page-title">
          <Image
            src={ogImageUrl}
            alt="Major Manifestations of Adi Shakti - Divine Feminine Collage"
            fill
            priority
            className="object-cover"
            data-ai-hint="divine feminine collage art various goddesses"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
            <div className="inline-flex items-center justify-center bg-primary/20 p-3 rounded-full mb-4 shadow-md ring-2 ring-primary/30">
                <LayoutGrid className="w-10 h-10 text-primary" />
            </div>
            <h1 id="major-forms-page-title" className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
              {pageTitle.replace(" | Shakti Darshan", "")}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 drop-shadow-md">
              {pageDescription}
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 focus-visible:ring-primary">
              <Link href="/stories">
                Explore Their Divine Stories <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mb-20" aria-labelledby="primary-pillars-title">
          <h2 id="primary-pillars-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <ShieldCheck className="w-10 h-10 text-primary" /> Primary Pillars of Shakti
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {primaryPillars.map((goddess) => (
              <GoddessCard key={goddess.slug} goddess={goddess} />
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-border/40"/>

        <section className="mb-20" aria-labelledby="tridevi-functions-title">
          <h2 id="tridevi-functions-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <Aperture className="w-10 h-10 text-primary" /> The Tridevi: Manifestations of Cosmic Functions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trideviConsorts.map((goddess) => (
               <GoddessCard key={goddess.slug} goddess={goddess} />
            ))}
          </div>
        </section>

        <Separator className="my-16 bg-border/40"/>

        <section className="mb-20" aria-labelledby="other-forms-title">
          <h2 id="other-forms-title" className="text-3xl md:text-4xl font-semibold text-center mb-12 text-accent">
            Other Prominent Manifestations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherForms.map((form) => ( // Use filtered otherForms
              <GoddessCard key={form.id} goddess={form} />
            ))}
          </div>
           {otherForms.length === 0 && (
            <Card className="text-center p-8 bg-muted mt-8">
              <p className="text-lg text-muted-foreground">
                  More details about other prominent forms of the Goddess will be added soon.
              </p>
            </Card>
          )}
        </section>
      </div>
    </>
  );
}

    
