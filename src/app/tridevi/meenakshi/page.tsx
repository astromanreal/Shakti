
import Image from 'next/image';
import Link from 'next/link';
import { meenakshiData } from '@/data/meenakshi-data';
import type { OtherMajorFormDetail, MantraStotraItem, TempleDetail } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Heart, Eye, Zap, BookOpen, Users, CalendarDays, Sparkles, Atom, Layers, Landmark, Palette, Info, MessageSquare, ArrowLeftCircle, Shield, Star, Brain, Link as LinkIcon, BookCopy, Award, ExternalLink, Sword, ShieldCheck, Users2
} from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export async function generateMetadata(): Promise<Metadata> {
  const goddess = meenakshiData;
  const pageTitle = `${goddess.name} - ${goddess.title} | Shakti Darshan`;
  const pageDescription = `${goddess.description?.substring(0, 155)}... Explore her iconography, mantras, temples, and philosophical significance as the warrior queen of Madurai.`;
  const pageUrl = `${siteUrl}/tridevi/meenakshi`;
  const imageUrl = goddess.imageUrl || `${siteUrl}/og-images/tridevi/meenakshi.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [goddess.name, goddess.title, ...(goddess.coreAttributes?.slice(0,3) || []), 'Madurai', 'Warrior Queen', 'Divine Feminine', 'Hindu Goddess', 'Maa Adi Shakti'],
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
        section: "Major Forms of Adi Shakti",
        tags: [goddess.name, goddess.title, 'Meenakshi', 'Madurai'],
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

function DetailSectionCard({ title, icon: Icon, children, className }: { title: string, icon?: React.ElementType, children: React.ReactNode, className?: string }) {
  return (
    <Card className={cn("shadow-lg rounded-xl border border-border/40 overflow-hidden bg-card/70 backdrop-blur-sm", className)}>
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

export default function MeenakshiPage() {
  const goddess = meenakshiData;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${goddess.name} - ${goddess.title}`,
    "description": goddess.description,
    "image": goddess.imageUrl || `${siteUrl}/og-images/tridevi/meenakshi.jpg`,
    "author": { "@type": "Organization", "name": "Shakti Darshan" },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}/tridevi/meenakshi` },
    "keywords": [goddess.name, goddess.title, ...(goddess.coreAttributes || [])].join(", ")
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
        <Button asChild variant="outline" className="mb-6 group">
          <Link href="/tridevi">
            <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
            Back to Major Forms
          </Link>
        </Button>

        <header className="text-center mb-10 md:mb-12 py-6 bg-gradient-to-br from-green-500/10 via-background to-yellow-500/10 rounded-2xl shadow-lg border border-green-500/20">
          <div className="inline-flex items-center justify-center bg-green-600/20 p-3.5 rounded-full mb-5 ring-4 ring-green-600/30">
            <ShieldCheck className="w-14 h-14 text-green-700" /> {/* Icon for Meenakshi */}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-2 drop-shadow-md tracking-tight">{goddess.name}</h1>
          <p className="text-xl md:text-2xl text-yellow-600 font-semibold mb-4">{goddess.title}</p>
          {goddess.meaning && <p className="text-sm text-muted-foreground italic mb-2">&ldquo;{goddess.meaning}&rdquo;</p>}
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto px-2">
            {goddess.description}
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-20 space-y-6">
            <Card className="shadow-xl rounded-xl border-2 border-green-500/30 overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={goddess.imageUrl || "https://placehold.co/600x700.png"}
                  alt={`Sacred image of ${goddess.name}`}
                  width={600}
                  height={700}
                  className="rounded-t-lg object-cover object-top w-full h-auto max-h-[300px] lg:max-h-[400px]"
                  data-ai-hint={goddess.imageHint || "Maa Meenakshi divine warrior queen"}
                  priority
                />
              </CardHeader>
              <CardContent className="p-5 bg-green-500/5">
                {goddess.coreAttributes && goddess.coreAttributes.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-3 text-green-700 flex items-center"><Star className="w-5 h-5 mr-2"/>Core Attributes</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {goddess.coreAttributes.map(attr => <Badge key={attr} variant="secondary" className="bg-green-100 text-green-800 border-green-300 text-xs shadow-sm">{attr}</Badge>)}
                    </div>
                  </>
                )}
                {goddess.alternativeNames && goddess.alternativeNames.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-green-700">Alternative Names</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {goddess.alternativeNames.map(name => <Badge key={name} variant="outline" className="text-xs border-green-400 text-green-700">{name}</Badge>)}
                    </div>
                  </>
                )}
                {goddess.keyMantras && goddess.keyMantras.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-green-700">Key Mantras</h3>
                    {goddess.keyMantras.map((mantra, index) => (
                      <Badge key={index} variant="outline" className="block w-full text-left text-sm p-2.5 my-1.5 font-mono shadow-sm break-words whitespace-normal border-green-500 bg-green-500/10 text-green-900 hover:bg-green-500/20">
                        {mantra.sanskrit || mantra.name}
                      </Badge>
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
            {goddess.primaryAttributes && (
                <Card className="shadow-lg rounded-xl border border-green-500/20 p-5 bg-green-500/5">
                    <h3 className="text-lg font-semibold mb-3 text-green-700 flex items-center"><Info className="w-5 h-5 mr-2"/>Primary Info</h3>
                    <p className="text-sm"><strong className="text-green-600">Gender:</strong> {goddess.primaryAttributes.gender}</p>
                    <p className="text-sm"><strong className="text-green-600">Nature:</strong> {goddess.primaryAttributes.nature}</p>
                    <p className="text-sm"><strong className="text-green-600">Energy:</strong> {goddess.primaryAttributes.energyType}</p>
                    <p className="text-sm"><strong className="text-green-600">Planet:</strong> {goddess.primaryAttributes.planet}</p>
                    {goddess.primaryAttributes.affiliation && goddess.primaryAttributes.affiliation.length > 0 && (
                        <div className="text-sm"><strong className="text-green-600">Affiliation:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {goddess.primaryAttributes.affiliation.map(aff => <Badge key={aff} variant="default" className="bg-green-600 hover:bg-green-700 text-xs">{aff}</Badge>)}
                            </div>
                        </div>
                    )}
                </Card>
            )}
          </div>

          {/* Right Scrollable Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6 md:space-y-8">
            {goddess.iconography && (
              <DetailSectionCard title="Iconography & Symbolism" icon={Palette}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-4">
                  <p><strong className="text-secondary">Skin Color:</strong> {Array.isArray(goddess.iconography.skinColor) ? goddess.iconography.skinColor.join(', ') : goddess.iconography.skinColor}</p>
                  <p><strong className="text-secondary">Arms:</strong> {goddess.iconography.numberOfArms}</p>
                  <p><strong className="text-secondary">Mount:</strong> {goddess.iconography.mount}</p>
                  <p><strong className="text-secondary">Posture:</strong> {goddess.iconography.posture}</p>
                  <p><strong className="text-secondary">Expressions:</strong> {goddess.iconography.expressions}</p>
                </div>
                {goddess.iconography.commonWeapons && goddess.iconography.commonWeapons.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-secondary mb-1.5">Divine Implements:</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {goddess.iconography.commonWeapons.map(item => <Badge key={item} variant="destructive" className="text-xs bg-red-100 text-red-700 border-red-300">{item}</Badge>)}
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
              <DetailSectionCard title="Mythology & Sacred Texts" icon={BookOpen}>
                  <p><strong className="text-secondary">Meaning of Name:</strong> {goddess.originsAndMythology.meaningOfName}</p>
                  <p><strong className="text-secondary">Abode:</strong> {goddess.originsAndMythology.abode}</p>
                  {goddess.originsAndMythology.parents && <p><strong className="text-secondary">Parents:</strong> {goddess.originsAndMythology.parents}</p>}
                  <p><strong className="text-secondary">Origin Story:</strong> {goddess.originsAndMythology.originStory}</p>
                  <p><strong className="text-secondary">Symbolic Victory:</strong> {goddess.originsAndMythology.symbolicVictory}</p>
                  <p><strong className="text-secondary">Eternal Consort:</strong> {goddess.originsAndMythology.eternalConsort}</p>
                  <p><strong className="text-secondary">Symbolic Role:</strong> {goddess.originsAndMythology.symbolicRole}</p>
                  {goddess.originsAndMythology.textsMentioningHer && goddess.originsAndMythology.textsMentioningHer.length > 0 && (
                    <div className="mt-3">
                        <h4 className="font-semibold text-secondary mb-1.5">Mentioned In:</h4>
                        <div className="flex flex-wrap gap-1.5">
                            {goddess.originsAndMythology.textsMentioningHer.map(text => <Badge key={text} variant="outline" className="text-xs">{text}</Badge>)}
                        </div>
                    </div>
                  )}
              </DetailSectionCard>
            )}

            <DetailSectionCard title="Forms, Festivals & Temples" icon={Landmark}>
              {goddess.notableForms && goddess.notableForms.length > 0 && (
                <div>
                  <h4 className="font-semibold text-secondary mb-1.5">Notable Forms:</h4>
                  <div className="flex flex-wrap gap-1.5">
                      {goddess.notableForms.map(form => <Badge key={form} variant="default" className="bg-green-600 hover:bg-green-700 text-xs">{form}</Badge>)}
                  </div>
                </div>
              )}
              {goddess.majorFestivals && goddess.majorFestivals.length > 0 && (
                <>
                  <Separator className="my-4" />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1.5">Major Festivals:</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {(goddess.majorFestivals as FestivalDetail[]).map(festival => <Badge key={festival.name} variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs">{festival.name}</Badge>)}
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
                            <div key={idx} className="p-3 border rounded-md bg-muted/30 shadow-sm">
                                <h5 className="font-medium text-primary">{temple.name} <span className="text-xs text-muted-foreground">({temple.location})</span></h5>
                                {temple.description && <p className="text-xs text-foreground/80 mt-0.5">{temple.description}</p>}
                            </div>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </DetailSectionCard>

            {goddess.mantrasAndStotras && (goddess.mantrasAndStotras as MantraStotraItem[]).length > 0 && (
              <DetailSectionCard title="Deeper Wisdom & Devotion" icon={BookCopy}>
                <h4 className="font-semibold text-secondary mb-2">Mantras & Stotras:</h4>
                  {(goddess.mantrasAndStotras as MantraStotraItem[]).map((item, idx) => (
                      <div key={idx} className="mb-3 p-3 border rounded-md bg-muted/30 shadow-sm">
                          <h5 className="font-medium text-primary">{item.name}</h5>
                          {item.sanskrit && <p className="font-mono text-sm text-green-800 bg-green-500/10 p-2 rounded mt-1">{item.sanskrit}</p>}
                          {item.meaning && <p className="text-xs text-muted-foreground mt-1"><strong>Meaning:</strong> {item.meaning}</p>}
                          {item.description && <p className="text-xs text-foreground/80 mt-1">{item.description}</p>}
                      </div>
                  ))}
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
            
            {goddess.culturalInfluence && (
              <DetailSectionCard title="Cultural Impact & Connections" icon={Sparkles}>
                <h4 className="font-semibold text-secondary mb-1.5">Cultural Influence:</h4>
                <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
                    {goddess.culturalInfluence.literature && <li><strong>Literature:</strong> {goddess.culturalInfluence.literature.join(', ')}</li>}
                    {goddess.culturalInfluence.danceForms && <li><strong>Dance Forms:</strong> {goddess.culturalInfluence.danceForms.join(', ')}</li>}
                    {goddess.culturalInfluence.artAndSculpture && <li><strong>Art & Sculpture:</strong> {goddess.culturalInfluence.artAndSculpture}</li>}
                    {goddess.culturalInfluence.media && <li><strong>Media:</strong> {goddess.culturalInfluence.media.join(', ')}</li>}
                </ul>
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
                        <li><strong>Women Empowerment:</strong> {goddess.modernRelevance.womenEmpowerment}</li>
                        <li><strong>Spiritual Balance:</strong> {goddess.modernRelevance.spiritualBalance}</li>
                        <li><strong>Festivals & Unity:</strong> {goddess.modernRelevance.festivalsAndUnity}</li>
                    </ul>
                  </>
                )}
              </DetailSectionCard>
            )}

            {goddess.furtherReading && goddess.furtherReading.length > 0 && (
              <DetailSectionCard title="Further Exploration" icon={LinkIcon}>
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
                      <p className="italic text-green-700/90">&ldquo;{goddess.closingNote}&rdquo;</p>
                    </>
                  )}
              </DetailSectionCard>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
