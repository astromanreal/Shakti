
import Image from 'next/image';
import Link from 'next/link';
import { shaktiPeethaData } from '@/data/shakti-peetha-data';
import type { ShaktiPeetha, ShaktiPeethaFestival, TempleFeatures, Mythology, AccessibilityInfo, VisitorInfo, ResourceLink, DeityDetail } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Landmark, MapPin, Heart, Zap, Shield, Brain, CalendarDays, Info, ArrowLeftCircle, PackageOpen,
    Building, Palette, BookOpen, Users, Sprout, Mountain, Clock, Ticket, UserCheck, Camera, Video, ExternalLink, Tag, Rss, Clock10, Construction, Youtube, Users2, Link as LinkIcon
} from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

type ShaktiPeethaDetailPageProps = {
  params: { id: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';

export async function generateMetadata({ params }: ShaktiPeethaDetailPageProps): Promise<Metadata> {
  const peetha = shaktiPeethaData.find((p) => p.id === params.id);

  if (!peetha) {
    return {
      title: 'Shakti Peetha Not Found | Shakti Darshan',
      description: 'The requested Shakti Peetha page could not be found. Explore other sacred sites of Maa Adi Shakti.',
      robots: { index: false, follow: false }
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${peetha.name} - Shakti Peetha | ${siteName}`;
  const significanceSummary = Array.isArray(peetha.significance) ? peetha.significance.join(" ") : (peetha.significance || peetha.templeSignificance || "A sacred Shakti Peetha.");
  const pageDescription = `Discover ${peetha.name}, a sacred Shakti Peetha located in ${peetha.detailedLocation?.place || peetha.detailedLocation?.city || peetha.location}. Learn about its significance, the body part of Sati that fell here (${peetha.bodyPart}), and the worship of Devi ${peetha.shakti} and Bhairava ${peetha.bhairava}. ${significanceSummary.substring(0, 100)}...`;
  const pageUrl = `${siteUrl}/shakti-peethas/${params.id}`;
  const imageUrl = peetha.imageUrl || `${siteUrl}/og-images/shakti-peethas/${peetha.id}.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [peetha.name, 'Shakti Peetha', peetha.detailedLocation?.place || peetha.detailedLocation?.city || peetha.location.split(',')[0], peetha.shakti, peetha.bhairava, ...(peetha.tags || peetha.keywords || [])],
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
          alt: `Sacred Shakti Peetha: ${peetha.name}`,
        },
      ],
      type: 'article',
      article: {
        authors: [`${siteUrl}/about`],
        section: "Shakti Peethas",
        tags: [peetha.name, peetha.detailedLocation?.place || peetha.detailedLocation?.city || peetha.location.split(',')[0], peetha.shakti, ...(peetha.tags || peetha.keywords || [])],
        publishedTime: peetha.lastUpdated ? new Date(peetha.lastUpdated).toISOString() : new Date().toISOString(),
        modifiedTime: peetha.lastUpdated ? new Date(peetha.lastUpdated).toISOString() : new Date().toISOString(),
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
  return shaktiPeethaData.map((peetha) => ({
    id: peetha.id,
  }));
}

const DetailItem: React.FC<{ label: string; value?: string | string[] | React.ReactNode; icon?: React.ElementType, className?: string, valueClassName?: string }> = ({ label, value, icon: Icon, className, valueClassName }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <div className={cn("mb-3", className)}>
      <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5 mb-0.5">
        {Icon && <Icon className="w-4 h-4 text-secondary/80" />}
        {label}:
      </h4>
      {Array.isArray(value) ? (
        <ul className="list-disc list-inside pl-2 space-y-0.5 text-sm text-foreground/90">
          {value.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      ) : (
        <div className={cn("text-base text-foreground/90", valueClassName)}>{value}</div>
      )}
    </div>
  );
};

const SectionCard: React.FC<{title: string, icon: React.ElementType, children: React.ReactNode, cardId?: string, cardClassName?: string }> = ({title, icon: Icon, children, cardId, cardClassName}) => (
    <Card id={cardId} className={cn("shadow-lg rounded-xl border border-border/30 overflow-hidden bg-card/90 backdrop-blur-sm", cardClassName)}>
        <CardHeader className="bg-muted/20 border-b border-border/20 py-4 px-5">
            <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2.5">
                <Icon className="w-6 h-6 text-primary/90" />
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-5 md:p-6 space-y-4 text-foreground/80">
            {children}
        </CardContent>
    </Card>
);


export default function ShaktiPeethaDetailPage({ params }: ShaktiPeethaDetailPageProps) {
  const peetha = shaktiPeethaData.find((p) => p.id === params.id);

  if (!peetha) {
    return (
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Card className="w-full max-w-lg text-center shadow-xl p-8 bg-destructive/5 border-destructive">
          <CardTitle className="text-3xl font-bold text-destructive mb-4">Shakti Peetha Not Found</CardTitle>
          <CardDescription className="text-lg text-foreground/80 mb-6">
            The sacred site you are looking for is not currently detailed or the path is incorrect.
          </CardDescription>
          <Button asChild variant="outline">
            <Link href="/shakti-peethas">
              <ArrowLeftCircle className="w-5 h-5 mr-2" />
              Back to Shakti Peethas List
            </Link>
          </Button>
        </Card>
      </div>
    );
  }

  const locationString = peetha.detailedLocation ? 
    `${peetha.detailedLocation.place || peetha.detailedLocation.city}, ${peetha.detailedLocation.state}, ${peetha.detailedLocation.country}` 
    : peetha.location;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": peetha.name,
    "description": Array.isArray(peetha.significance) ? peetha.significance.join(" ") : (peetha.significance || peetha.templeSignificance),
    "image": peetha.imageUrl || `${siteUrl}/og-images/shakti-peethas/${peetha.id}.jpg`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": peetha.detailedLocation?.place || peetha.detailedLocation?.city || locationString.split(',')[0].trim(),
      "addressRegion": peetha.detailedLocation?.state,
      "addressCountry": peetha.detailedLocation?.country
    },
    ...( (peetha.detailedLocation?.coordinates || peetha.coordinates) && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": peetha.detailedLocation?.coordinates?.latitude || peetha.coordinates?.lat,
        "longitude": peetha.detailedLocation?.coordinates?.longitude || peetha.coordinates?.lng
      }
    }),
    "keywords": [peetha.name, "Shakti Peetha", peetha.detailedLocation?.place, peetha.shakti, peetha.bhairava, ...(peetha.tags || peetha.keywords || [])].join(", "),
    "mainEntityOfPage": `${siteUrl}/shakti-peethas/${peetha.id}`
  };

  const hasDetailedContent = peetha.mythology || peetha.templeFeatures || (peetha.festivals && peetha.festivals.length > 0) || peetha.spiritualPractices || peetha.resources || peetha.historicalNotes || peetha.culturalImpact || peetha.accessibility || peetha.visitorInfo || peetha.mainAttractions || peetha.architecture || peetha.spiritualImportance;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(peetha.name)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
         <Button asChild variant="outline" className="mb-6 group text-sm inline-flex items-center shadow-sm hover:shadow-md">
            <Link href="/shakti-peethas">
              <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
              Back to List
            </Link>
          </Button>
        <header className="mb-10 md:mb-12 text-center py-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl shadow-xl border border-primary/20" aria-labelledby={`peetha-title-${peetha.id}`}>
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <Landmark className="w-16 h-16 text-primary" />
          </div>
          <h1 id={`peetha-title-${peetha.id}`} className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 drop-shadow-md tracking-tight">
            {peetha.name}
          </h1>
          {peetha.alternateNames && peetha.alternateNames.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              {peetha.alternateNames.map(altName => <Badge key={altName} variant="secondary" className="text-xs">{altName}</Badge>)}
            </div>
          )}
          <p className="text-xl md:text-2xl text-secondary font-medium flex items-center justify-center gap-2.5">
            <MapPin className="w-6 h-6 flex-shrink-0" /> {locationString}
          </p>
           {peetha.lastUpdated && <p className="text-xs text-muted-foreground mt-3">Last Updated: {new Date(peetha.lastUpdated).toLocaleDateString()}</p>}
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-20 space-y-6">
                <Card className="shadow-xl rounded-xl border-2 border-primary/20 bg-card overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b border-primary/20">
                      <CardTitle className="text-lg text-primary flex items-center gap-2">
                        <Zap className="w-5 h-5"/> Divine Manifestations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 space-y-4">
                        <DetailItem label="Body Part of Sati" value={peetha.bodyPart} icon={Heart} />
                        <div>
                            <DetailItem label="Shakti Form" value={peetha.shakti} icon={Zap} />
                            {peetha.shaktiDetail?.description && <p className="text-xs text-muted-foreground ml-6 -mt-2">{peetha.shaktiDetail.description}</p>}
                        </div>
                        <div>
                            <DetailItem label="Bhairava Form" value={peetha.bhairava} icon={Shield} />
                            {peetha.bhairavaDetail?.description && <p className="text-xs text-muted-foreground ml-6 -mt-2">{peetha.bhairavaDetail.description}</p>}
                        </div>
                    </CardContent>
                </Card>

                {(peetha.tags || peetha.keywords) && (peetha.tags || peetha.keywords)!.length > 0 && (
                    <Card className="shadow-lg rounded-xl border border-border/30 p-5 bg-card/90 backdrop-blur-sm">
                        <h3 className="text-md font-semibold text-secondary mb-2.5 flex items-center gap-1.5"><Tag className="w-4 h-4"/> Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {(peetha.tags || peetha.keywords)!.map(tag => <Badge key={tag} variant="outline" className="text-xs px-2.5 py-1 shadow-sm">{tag}</Badge>)}
                        </div>
                    </Card>
                )}
            </div>

            <div className="lg:col-span-8 xl:col-span-9 space-y-6 md:space-y-8">
                {(peetha.significance || peetha.templeSignificance) && (
                  <SectionCard title="Significance of the Peetha" icon={Brain} cardId="significance">
                      {Array.isArray(peetha.significance) ? (
                          <ul className="list-disc list-inside space-y-2 text-md leading-relaxed">
                              {peetha.significance.map((item, index) => <li key={index}>{item}</li>)}
                          </ul>
                      ) : (
                          <p className="whitespace-pre-line text-md leading-relaxed">{peetha.significance || peetha.templeSignificance}</p>
                      )}
                  </SectionCard>
                )}

                {peetha.spiritualImportance && (
                    <SectionCard title="Spiritual Importance" icon={Sprout} cardId="spiritual-importance">
                        <p className="text-md leading-relaxed">{peetha.spiritualImportance}</p>
                    </SectionCard>
                )}

                {!hasDetailedContent && (
                    <Card className="text-center p-8 my-6 bg-muted/30 border border-border/20">
                        <Construction className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <CardTitle className="text-xl text-primary">More Details Coming Soon</CardTitle>
                        <CardDescription className="text-sm text-foreground/75 mt-2">
                        Rich, detailed information for {peetha.name}, including mythology, temple features, festival details, and visitor information, is currently under preparation and will be available here shortly. Thank you for your patience.
                        </CardDescription>
                    </Card>
                )}

                {peetha.mythology && (
                    <SectionCard title="Mythology & Legend" icon={BookOpen} cardId="mythology">
                        <DetailItem label="The Legend" value={peetha.mythology.story} icon={Rss} valueClassName="text-md leading-relaxed"/>
                        <Separator className="my-4 bg-border/30"/>
                        <DetailItem label="Symbolism" value={peetha.mythology.symbolism} icon={Brain} valueClassName="text-md leading-relaxed"/>
                    </SectionCard>
                )}
                
                {peetha.mainAttractions && peetha.mainAttractions.length > 0 && (
                    <SectionCard title="Main Attractions" icon={Users2} cardId="main-attractions">
                         <ul className="list-disc list-inside space-y-1.5 text-md">
                            {peetha.mainAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
                        </ul>
                    </SectionCard>
                )}

                {peetha.architecture && (
                    <SectionCard title="Temple Architecture" icon={Building} cardId="architecture">
                        <p className="text-md leading-relaxed">{peetha.architecture}</p>
                    </SectionCard>
                )}

                {peetha.festivals && peetha.festivals.length > 0 && (
                    <SectionCard title="Festivals Celebrated" icon={CalendarDays} cardId="festivals">
                        <Accordion type="single" collapsible className="w-full -mt-2">
                            {peetha.festivals.map((festival, index) => (
                                <AccordionItem value={`festival-${index}`} key={index} className="border-b border-border/20 last:border-b-0">
                                    <AccordionTrigger className="text-md font-medium hover:text-accent py-3">
                                        {festival.name} 
                                        {(festival.month || festival.time) && <span className="text-xs text-muted-foreground ml-auto mr-2 pl-2 font-normal">({festival.month || festival.time})</span>}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm space-y-1.5 pt-1 pb-3 px-1">
                                        {festival.type && <p><strong className="text-muted-foreground">Type:</strong> {festival.type}</p>}
                                        {festival.description && <p><strong className="text-muted-foreground">Details:</strong> {festival.description}</p>}
                                        <p><strong className="text-muted-foreground">Significance:</strong> {festival.significance}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </SectionCard>
                )}
                
                {peetha.accessibility && (
                    <SectionCard title="How to Reach" icon={Info} cardId="accessibility">
                        <DetailItem label="Nearest Airport" value={peetha.accessibility.nearestAirport} />
                        <DetailItem label="Nearest Railway Station" value={peetha.accessibility.nearestRailway || peetha.accessibility.nearestRailwayStation} />
                        <DetailItem label="Local Transportation" value={peetha.accessibility.transportation || peetha.accessibility.localTransport} />
                        {peetha.accessibility.trek && <DetailItem label="Trek/Path" value={peetha.accessibility.trek} />}
                    </SectionCard>
                )}

                {peetha.visitorInfo && (
                    <SectionCard title="Visitor Information" icon={UserCheck} cardId="visitor-info">
                        <DetailItem label="Opening Hours" value={peetha.visitorInfo.openingHours} />
                        <DetailItem label="Entry Fee" value={peetha.visitorInfo.entryFee} />
                        <DetailItem label="Dress Code" value={peetha.visitorInfo.dressCode} />
                        <DetailItem label="Best Time to Visit" value={peetha.visitorInfo.bestTimeToVisit} />
                    </SectionCard>
                )}
                
                {peetha.resources && (
                  <SectionCard title="Explore Further" icon={PackageOpen} cardId="resources">
                    <div className="space-y-4">
                      {peetha.resources.officialWebsite && (
                        <div>
                          <h4 className="text-md font-semibold text-secondary mb-2">Official Website:</h4>
                          <Button asChild variant="link" className="p-0 h-auto">
                            <Link href={peetha.resources.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent-foreground transition-colors text-sm flex items-center gap-1.5">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Visit Official Site
                            </Link>
                          </Button>
                        </div>
                      )}
                      {peetha.resources.wikipedia && (
                        <div className={cn(peetha.resources.officialWebsite && "mt-4 pt-4 border-t border-border/20")}>
                          <h4 className="text-md font-semibold text-secondary mb-2">Wikipedia:</h4>
                           <Button asChild variant="link" className="p-0 h-auto">
                            <Link href={peetha.resources.wikipedia} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent-foreground transition-colors text-sm flex items-center gap-1.5">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Read on Wikipedia
                            </Link>
                          </Button>
                        </div>
                      )}
                      {peetha.resources.officialLinks && peetha.resources.officialLinks.length > 0 && (
                        <div className={cn((peetha.resources.officialWebsite || peetha.resources.wikipedia) && "mt-4 pt-4 border-t border-border/20")}>
                          <h4 className="text-md font-semibold text-secondary mb-2">Additional Links:</h4>
                          <ul className="space-y-1.5">
                            {peetha.resources.officialLinks.map((link: ResourceLink, index: number) => (
                              <li key={index}>
                                <Button asChild variant="link" className="p-0 h-auto">
                                  <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent-foreground transition-colors text-sm flex items-center gap-1.5">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    {link.title}
                                  </Link>
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {peetha.resources.map && (
                        <div className={cn( (peetha.resources.officialWebsite || peetha.resources.wikipedia || (peetha.resources.officialLinks && peetha.resources.officialLinks.length > 0) ) && "mt-4 pt-4 border-t border-border/20")}>
                          <h4 className="text-md font-semibold text-secondary mb-2">Map Location:</h4>
                           <Button asChild variant="link" className="p-0 h-auto">
                            <Link href={peetha.resources.map} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent-foreground transition-colors text-sm flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              View on Google Maps
                            </Link>
                          </Button>
                        </div>
                      )}
                      <div className={cn( (peetha.resources.officialWebsite || peetha.resources.wikipedia || (peetha.resources.officialLinks && peetha.resources.officialLinks.length > 0) || peetha.resources.map) && "mt-4 pt-4 border-t border-border/20")}>
                         <Button asChild variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                            <Link href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer">
                                <Youtube className="w-4 h-4 mr-2" /> Search Videos on YouTube
                            </Link>
                         </Button>
                      </div>
                    </div>
                  </SectionCard>
                )}
            </div>
          </div>
      </div>
    </>
  );
}

    
