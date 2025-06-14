
import Image from 'next/image';
import Link from 'next/link';
import { allMajorFormsDetailedData } from '@/data/all-major-forms-detailed-data';
import type { OtherMajorFormDetail, MantraStotraItem, FestivalDetail, TempleDetail } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Heart, Eye, Zap, BookOpen, Users, CalendarDays, Sparkles, Atom, Layers, Landmark, Palette, Info, MessageSquare, ArrowLeftCircle, Shield, Star, Brain, Link as LinkIcon, BookCopy, Award, ExternalLink, Sword, ShieldCheck, Users2, Gem, Gift, Flame
} from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

type FormPageProps = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export async function generateMetadata({ params }: FormPageProps): Promise<Metadata> {
  const goddess = allMajorFormsDetailedData.find((g) => g.id === params.slug);

  if (!goddess) {
    return {
      title: 'Form Not Found | Shakti Darshan',
      description: 'The requested goddess page could not be found. Explore other aspects of Maa Adi Shakti and the Divine Feminine on Shakti Darshan.',
      robots: { index: false, follow: false },
    };
  }

  const pageTitle = `${goddess.name} - ${goddess.title} | Shakti Darshan`;
  const pageDescription = `${goddess.description?.substring(0, 155)}... Explore her iconography, mantras, temples, and philosophical significance.`;
  const pageUrl = `${siteUrl}/tridevi/forms/${goddess.id}`;
  const imageUrl = goddess.detailImageUrl || goddess.imageUrl || `${siteUrl}/og-images/tridevi/forms/${goddess.id}.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [goddess.name, goddess.title, ...(goddess.coreAttributes?.slice(0,3) || []), 'Divine Feminine', 'Hindu Goddess', 'Maa Adi Shakti'],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Shakti Darshan',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `Divine image of ${goddess.name} - ${goddess.title}` }],
      type: 'article',
      article: {
        authors: [`${siteUrl}/about`],
        section: goddess.category || "Major Forms of Adi Shakti",
        tags: [goddess.name, goddess.title, ...(goddess.alternativeNames?.slice(0,2) || [])],
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
  return allMajorFormsDetailedData.map((form) => ({
    slug: form.id,
  }));
}

function DetailSectionCard({ title, icon: Icon, children, className, cardId }: { title: string, icon?: React.ElementType, children: React.ReactNode, className?: string, cardId?: string }) {
  return (
    <Card id={cardId} className={cn("shadow-lg rounded-xl border border-border/40 overflow-hidden bg-card/70 backdrop-blur-sm", className)}>
      <CardHeader className="bg-muted/20 border-b border-border/30">
        <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2.5">
          {Icon && <Icon className="w-6 h-6 text-primary/80" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 md:p-6 space-y-3 text-sm md:text-base text-foreground/90 leading-relaxed">
        {children}
      </CardContent>
    </Card>
  );
}

const IconMap: Record<string, React.ElementType> = {
  Eye, ShieldCheck, Gem, Gift, Sparkles, Sword, Flame, Default: Heart
};

export default function MajorFormDetailPage({ params }: FormPageProps) {
  const goddess = allMajorFormsDetailedData.find((g) => g.id === params.slug);

  if (!goddess) {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
          <Card className="w-full max-w-lg text-center shadow-xl p-8 bg-destructive/5 border-destructive">
            <CardTitle className="text-3xl font-bold text-destructive mb-4">Form Not Found</CardTitle>
            <CardDescription className="text-lg text-foreground/80 mb-6">
              The divine form you are seeking is not currently detailed or the path is incorrect.
            </CardDescription>
            <Button asChild variant="outline">
              <Link href="/tridevi">
                <ArrowLeftCircle className="w-5 h-5 mr-2" />
                Back to Major Forms Overview
              </Link>
            </Button>
          </Card>
        </div>
      );
  }
  
  const HeroIcon = IconMap[goddess.iconName || 'Default'] || Heart;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${goddess.name} - ${goddess.title}`,
    "description": goddess.description || goddess.shortDescription,
    "image": goddess.detailImageUrl || goddess.imageUrl || `${siteUrl}/og-images/tridevi/forms/${goddess.id}.jpg`,
    "author": { "@type": "Organization", "name": "Shakti Darshan" },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}/tridevi/forms/${goddess.id}` },
    "keywords": [goddess.name, goddess.title, ...(goddess.coreAttributes || [])].join(", ")
  };

  const hasDetailedContent = goddess.philosophicalInsights || (goddess.originsAndMythology && Object.keys(goddess.originsAndMythology).length > 0);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
        <Button asChild variant="outline" className="mb-6 group text-sm">
          <Link href="/tridevi">
            <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
            Back to Major Forms
          </Link>
        </Button>

        <header className="text-center mb-10 md:mb-12 py-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl shadow-lg border border-primary/20">
          <div className={`inline-flex items-center justify-center bg-primary/20 p-3.5 rounded-full mb-5 ring-4 ring-primary/30`}>
            <HeroIcon className="w-14 h-14 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-md tracking-tight">{goddess.name}</h1>
          <p className="text-xl md:text-2xl text-secondary font-semibold mb-4">{goddess.title}</p>
          {goddess.meaning && <p className="text-sm text-muted-foreground italic mb-2">&ldquo;{goddess.meaning}&rdquo;</p>}
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-2">
            {goddess.description || goddess.shortDescription}
          </p>
        </header>

        {!hasDetailedContent && (
          <Card className="text-center p-8 my-12 bg-muted/30">
            <Info className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl text-primary">More Details Coming Soon</CardTitle>
            <CardDescription className="text-md text-foreground/75 mt-2">
              Detailed information about {goddess.name} is currently being compiled and will be available here shortly. Thank you for your patience.
            </CardDescription>
          </Card>
        )}

        {hasDetailedContent && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Sticky Column */}
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-20 space-y-6">
              <Card className="shadow-xl rounded-xl border-2 border-primary/30 overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={goddess.detailImageUrl || goddess.imageUrl || "https://placehold.co/600x700.png"}
                    alt={`Sacred image of ${goddess.name}`}
                    width={600}
                    height={700}
                    className="rounded-t-lg object-cover object-top w-full h-auto max-h-[300px] lg:max-h-[400px]"
                    data-ai-hint={goddess.detailImageHint || goddess.imageHint || `${goddess.id} divine form`}
                    priority
                  />
                </CardHeader>
                <CardContent className="p-5 bg-primary/5">
                  {goddess.coreAttributes && goddess.coreAttributes.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-3 text-primary flex items-center"><Star className="w-5 h-5 mr-2"/>Core Attributes</h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {goddess.coreAttributes.map(attr => <Badge key={attr} variant="secondary" className="text-xs shadow-sm">{attr}</Badge>)}
                      </div>
                    </>
                  )}
                  {goddess.alternativeNames && goddess.alternativeNames.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Alternative Names</h3>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {goddess.alternativeNames.map(name => <Badge key={name} variant="outline" className="text-xs">{name}</Badge>)}
                      </div>
                    </>
                  )}
                  {goddess.keyMantras && goddess.keyMantras.length > 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-2 text-primary">Key Mantras</h3>
                      {goddess.keyMantras.map((mantra, index) => (
                        <Badge key={index} variant="outline" className="block w-full text-left text-sm p-2.5 my-1.5 font-mono shadow-sm break-words whitespace-normal border-primary/70 bg-primary/10 text-primary-foreground hover:bg-primary/20">
                          {mantra.sanskrit || mantra.name}
                        </Badge>
                      ))}
                    </>
                  )}
                </CardContent>
              </Card>
              {goddess.primaryAttributes && (
                  <Card className="shadow-lg rounded-xl border border-primary/20 p-5 bg-primary/5">
                      <h3 className="text-lg font-semibold mb-3 text-primary flex items-center"><Info className="w-5 h-5 mr-2"/>Primary Info</h3>
                      <p className="text-sm"><strong className="text-secondary">Gender:</strong> {goddess.primaryAttributes.gender}</p>
                      <p className="text-sm"><strong className="text-secondary">Nature:</strong> {goddess.primaryAttributes.nature}</p>
                      <p className="text-sm"><strong className="text-secondary">Energy:</strong> {goddess.primaryAttributes.energyType}</p>
                      <p className="text-sm"><strong className="text-secondary">Planet:</strong> {goddess.primaryAttributes.planet}</p>
                      {goddess.primaryAttributes.affiliation && goddess.primaryAttributes.affiliation.length > 0 && (
                          <div className="text-sm mt-1"><strong className="text-secondary">Affiliation:</strong>
                              <div className="flex flex-wrap gap-1 mt-1">
                                  {goddess.primaryAttributes.affiliation.map(aff => <Badge key={aff} variant="default" className="text-xs">{aff}</Badge>)}
                              </div>
                          </div>
                      )}
                  </Card>
              )}
            </div>

            {/* Right Scrollable Content */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6 md:space-y-8">
              {goddess.iconography && (
                <DetailSectionCard title="Iconography & Symbolism" icon={Palette} cardId="iconography">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-4">
                    {goddess.iconography.skinColor && <p><strong className="text-secondary">Skin Color:</strong> {Array.isArray(goddess.iconography.skinColor) ? goddess.iconography.skinColor.join(', ') : goddess.iconography.skinColor}</p>}
                    {goddess.iconography.numberOfArms && <p><strong className="text-secondary">Arms:</strong> {goddess.iconography.numberOfArms}</p>}
                    {goddess.iconography.mount && <p><strong className="text-secondary">Mount:</strong> {goddess.iconography.mount}</p>}
                    {goddess.iconography.posture && <p><strong className="text-secondary">Posture:</strong> {goddess.iconography.posture}</p>}
                    {goddess.iconography.expressions && <p><strong className="text-secondary">Expressions:</strong> {Array.isArray(goddess.iconography.expressions) ? goddess.iconography.expressions.join(', ') : goddess.iconography.expressions}</p>}
                  </div>
                  {goddess.iconography.commonWeapons && goddess.iconography.commonWeapons.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-secondary mb-1.5">Divine Implements:</h4>
                      <div className="flex flex-wrap gap-1.5">
                          {goddess.iconography.commonWeapons.map(item => <Badge key={item} variant="destructive" className="text-xs">{item}</Badge>)}
                      </div>
                    </div>
                  )}
                  {goddess.symbolismDeepDive && (
                    <>
                      <Separator className="my-4" />
                      <h4 className="font-semibold text-secondary mb-2">Symbolism Explained:</h4>
                      <ul className="list-disc list-inside space-y-1.5 pl-1">
                        {Object.entries(goddess.symbolismDeepDive).map(([key, value]) => (
                          <li key={key}><strong className="capitalize text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </DetailSectionCard>
              )}

              {goddess.originsAndMythology && (
                <DetailSectionCard title="Mythology & Sacred Texts" icon={BookOpen} cardId="mythology">
                    {goddess.originsAndMythology.meaningOfName && <p><strong className="text-secondary">Meaning of Name:</strong> {goddess.originsAndMythology.meaningOfName}</p>}
                    {goddess.originsAndMythology.abode && <p><strong className="text-secondary">Abode:</strong> {goddess.originsAndMythology.abode}</p>}
                    {goddess.originsAndMythology.parents && <p><strong className="text-secondary">Parents:</strong> {goddess.originsAndMythology.parents}</p>}
                    {goddess.originsAndMythology.originStory && <p><strong className="text-secondary">Origin Story:</strong> {goddess.originsAndMythology.originStory}</p>}
                    {goddess.originsAndMythology.symbolicVictory && <p><strong className="text-secondary">Symbolic Victory:</strong> {goddess.originsAndMythology.symbolicVictory}</p>}
                    {goddess.originsAndMythology.eternalConsort && <p><strong className="text-secondary">Eternal Consort:</strong> {goddess.originsAndMythology.eternalConsort}</p>}
                    {goddess.originsAndMythology.symbolicRole && <p><strong className="text-secondary">Symbolic Role:</strong> {goddess.originsAndMythology.symbolicRole}</p>}
                    {goddess.textsMentioningHer && goddess.textsMentioningHer.length > 0 && (
                      <div className="mt-3">
                          <h4 className="font-semibold text-secondary mb-1.5">Mentioned In:</h4>
                          <div className="flex flex-wrap gap-1.5">
                              {goddess.textsMentioningHer.map(text => <Badge key={text} variant="outline" className="text-xs">{text}</Badge>)}
                          </div>
                      </div>
                    )}
                </DetailSectionCard>
              )}

              {(goddess.notableForms && goddess.notableForms.length > 0 || goddess.majorFestivals && goddess.majorFestivals.length > 0 || goddess.prominentTemples && goddess.prominentTemples.length > 0) && (
                <DetailSectionCard title="Forms, Festivals & Temples" icon={Landmark} cardId="forms-festivals-temples">
                  {goddess.notableForms && goddess.notableForms.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-secondary mb-1.5">Notable Forms:</h4>
                      <div className="flex flex-wrap gap-1.5">
                          {goddess.notableForms.map(form => <Badge key={form} variant="default" className="text-xs">{form}</Badge>)}
                      </div>
                    </div>
                  )}
                  {goddess.majorFestivals && goddess.majorFestivals.length > 0 && (
                    <>
                      <Separator className="my-4" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-1.5">Major Festivals:</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {(goddess.majorFestivals as Array<FestivalDetail | string>).map(festival => (
                              <Badge key={typeof festival === 'string' ? festival : festival.name} variant="secondary" className="text-xs">
                                {typeof festival === 'string' ? festival : `${festival.name} (${festival.time})`}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                  {goddess.prominentTemples && goddess.prominentTemples.length > 0 && (
                    <>
                      <Separator className="my-4" />
                      <div>
                        <h4 className="font-semibold text-secondary mb-2">Prominent Temples:</h4>
                        <div className="space-y-3">
                            {goddess.prominentTemples.map((temple, idx) => (
                                <div key={temple.id || idx} className="p-3 border rounded-md bg-muted/30 shadow-sm">
                                    <h5 className="font-medium text-primary">{temple.name} <span className="text-xs text-muted-foreground">({temple.location})</span></h5>
                                    {temple.description && <p className="text-xs text-foreground/80 mt-0.5">{temple.description}</p>}
                                </div>
                            ))}
                        </div>
                      </div>
                    </>
                  )}
                </DetailSectionCard>
              )}

              {(goddess.mantrasAndStotras || goddess.philosophicalInsights) && (
                <DetailSectionCard title="Deeper Wisdom & Devotion" icon={BookCopy} cardId="wisdom-devotion">
                  {goddess.mantrasAndStotras && (Array.isArray(goddess.mantrasAndStotras) ? goddess.mantrasAndStotras : (goddess.mantrasAndStotras.mantras || goddess.mantrasAndStotras.stotras)) && (
                    <>
                      <h4 className="font-semibold text-secondary mb-2">Mantras & Stotras:</h4>
                      {(Array.isArray(goddess.mantrasAndStotras) ? goddess.mantrasAndStotras : [...(goddess.mantrasAndStotras.mantras || []), ...(goddess.mantrasAndStotras.stotras || [])]).map((item, idx) => (
                          <div key={idx} className="mb-3 p-3 border rounded-md bg-muted/30 shadow-sm">
                              <h5 className="font-medium text-primary">{item.name}</h5>
                              {item.sanskrit && <p className="font-mono text-sm text-secondary-foreground bg-secondary/10 p-2 rounded mt-1">{item.sanskrit}</p>}
                              {item.meaning && <p className="text-xs text-muted-foreground mt-1"><strong>Meaning:</strong> {item.meaning}</p>}
                              {item.description && <p className="text-xs text-foreground/80 mt-1">{item.description}</p>}
                          </div>
                      ))}
                    </>
                  )}
                  {goddess.philosophicalInsights && (
                    <>
                      <Separator className="my-4" />
                      <h4 className="font-semibold text-secondary mb-2">Philosophical Insights:</h4>
                      <ul className="list-disc list-inside space-y-1.5 pl-1">
                          {Object.entries(goddess.philosophicalInsights).map(([key, value]) => (
                              <li key={key}><strong className="capitalize text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {Array.isArray(value) ? value.join(", ") : value}</li>
                          ))}
                      </ul>
                    </>
                  )}
                </DetailSectionCard>
              )}
              
              {(goddess.culturalInfluence || goddess.relatedDeitiesAndAnimals || goddess.modernRelevance) && (
                <DetailSectionCard title="Cultural Impact & Connections" icon={Sparkles} cardId="cultural-impact">
                  {goddess.culturalInfluence && (
                    <>
                      <h4 className="font-semibold text-secondary mb-1.5">Cultural Influence:</h4>
                      <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
                          {typeof goddess.culturalInfluence.literature === 'string' ? <li><strong>Literature:</strong> {goddess.culturalInfluence.literature}</li> : (goddess.culturalInfluence.literature && goddess.culturalInfluence.literature.length > 0 && <li><strong>Literature:</strong> {goddess.culturalInfluence.literature.join(', ')}</li>)}
                          {typeof goddess.culturalInfluence.danceForms === 'string' ? <li><strong>Dance Forms:</strong> {goddess.culturalInfluence.danceForms}</li> : (goddess.culturalInfluence.danceForms && goddess.culturalInfluence.danceForms.length > 0 && <li><strong>Dance Forms:</strong> {goddess.culturalInfluence.danceForms.join(', ')}</li>)}
                          {goddess.culturalInfluence.artAndSculpture && <li><strong>Art & Sculpture:</strong> {goddess.culturalInfluence.artAndSculpture}</li>}
                          {typeof goddess.culturalInfluence.media === 'string' ? <li><strong>Media:</strong> {goddess.culturalInfluence.media}</li> : (goddess.culturalInfluence.media && goddess.culturalInfluence.media.length > 0 && <li><strong>Media:</strong> {goddess.culturalInfluence.media.join(', ')}</li>)}
                      </ul>
                    </>
                  )}
                  {goddess.relatedDeitiesAndAnimals && (
                    <>
                      <Separator className="my-3" />
                      <h4 className="font-semibold text-secondary mb-1.5">Related Deities & Animals:</h4>
                      <p className="text-xs"><strong>Deities:</strong> {goddess.relatedDeitiesAndAnimals.relatedDeities.join(', ')}.</p>
                      <p className="text-xs"><strong>Animals:</strong> {goddess.relatedDeitiesAndAnimals.associatedAnimals.join(', ')}.</p>
                    </>
                  )}
                  {goddess.modernRelevance && (
                    <>
                      <Separator className="my-3" />
                      <h4 className="font-semibold text-secondary mb-1.5">Modern Relevance:</h4>
                      <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
                          {goddess.modernRelevance.womenEmpowerment && <li><strong>Women Empowerment:</strong> {goddess.modernRelevance.womenEmpowerment}</li>}
                          {goddess.modernRelevance.spiritualBalance && <li><strong>Spiritual Balance:</strong> {goddess.modernRelevance.spiritualBalance}</li>}
                          {goddess.modernRelevance.festivalsAndUnity && <li><strong>Festivals & Unity:</strong> {goddess.modernRelevance.festivalsAndUnity}</li>}
                      </ul>
                    </>
                  )}
                </DetailSectionCard>
              )}

              {goddess.furtherReading && goddess.furtherReading.length > 0 && (
                <DetailSectionCard title="Further Exploration" icon={LinkIcon} cardId="further-reading">
                    <h4 className="font-semibold text-secondary mb-2">Further Reading:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {goddess.furtherReading.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline hover:text-accent-foreground transition-colors">
                                    {link.title} <ExternalLink className="inline-block w-3 h-3 ml-0.5" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {goddess.closingNote && (
                      <>
                        <Separator className="my-4" />
                        <h4 className="font-semibold text-secondary mb-2">Closing Note:</h4>
                        <p className="italic text-accent/90">&ldquo;{goddess.closingNote}&rdquo;</p>
                      </>
                    )}
                </DetailSectionCard>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

    