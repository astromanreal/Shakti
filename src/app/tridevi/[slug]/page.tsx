
import Image from 'next/image';
import Link from 'next/link';
import { trideviData } from '@/data/tridevi-data';
import type { TrideviDetails, NavForm, FestivalDetail, MantraStotraItem, TempleDetail, AvatarForm } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
    ScrollText, ShieldAlert, Gem, BookOpen, Heart, Users, Award, CalendarDays, Star, 
    Info, Atom, Brain, Landmark, Waves, Palette, LinkIcon, Mountain, Group, Sparkles,
    Briefcase, Anchor, BookCopy, ExternalLink, ShieldQuestion, Zap, Bot, SunMoon, Lightbulb, HandCoins, Scale, Edit3, HandHeart, FileText, ChevronRight, Sword
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

type TrideviPageProps = {
  params: { slug: TrideviDetails['slug'] };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export async function generateMetadata({ params }: TrideviPageProps): Promise<Metadata> {
  const goddess = trideviData.find((g) => g.slug === params.slug);

  if (!goddess) {
    return {
      title: 'Goddess Not Found | Shakti Darshan',
      description: 'The requested goddess page could not be found. Explore other aspects of Maa Adi Shakti and the Divine Feminine.',
      robots: { index: false, follow: false },
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `Maa ${goddess.name} - ${goddess.aspect} | Attributes, Mantra & Forms | ${siteName}`;
  const pageDescription = `Discover Maa ${goddess.name}, the ${goddess.aspect}. Explore her divine attributes, iconography, mantras, major forms like ${goddess.notable_forms?.[0] || ''}, festivals, and significance in Hindu goddess worship and Sanatan Dharma. ${goddess.introduction.substring(0, 100)}...`;
  const pageUrl = `${siteUrl}/tridevi/${params.slug}`;
  const imageUrl = goddess.imageUrl || `${siteUrl}/og-images/tridevi/${goddess.slug}.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [goddess.name, goddess.aspect, 'Tridevi', 'Divine Feminine', 'Hindu Goddess', ...goddess.attributes.slice(0,3), 'Maa Adi Shakti', 'Shakti mantra', 'Hindu goddess worship'],
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
          alt: `Divine image of Maa ${goddess.name} - ${goddess.aspect}`,
        },
      ],
      type: 'article', 
      article: {
        // publishedTime: "YYYY-MM-DDTHH:MM:SSZ", // Add if available
        // modifiedTime: "YYYY-MM-DDTHH:MM:SSZ", // Add if available
        authors: [`${siteUrl}/about`],
        section: "Tridevi & Major Forms",
        tags: [goddess.name, goddess.aspect, 'Tridevi', 'Hindu Goddess'],
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
  return trideviData.map((goddess) => ({
    slug: goddess.slug,
  }));
}

function SectionCard({ title, icon: Icon, children, cardClassName, titleClassName }: { title: string | React.ReactNode, icon?: React.ElementType, children: React.ReactNode, cardClassName?: string, titleClassName?: string }) {
  return (
    <Card className={cn("shadow-xl rounded-xl border border-border/50 overflow-hidden", cardClassName)}>
      <CardHeader className="bg-muted/30">
        <CardTitle className={cn("text-2xl text-primary flex items-center gap-2", titleClassName)}>
          {Icon && <Icon className="w-7 h-7" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">{children}</CardContent>
    </Card>
  );
}

export default function TrideviPage({ params }: TrideviPageProps) {
  const goddess = trideviData.find((g) => g.slug === params.slug);

  if (!goddess) {
    return <div className="container mx-auto px-4 py-8 text-center">Goddess not found. Please check the URL or return to the overview.</div>;
  }

  const getGoddessIcon = (slug: string) => {
    if (slug === 'durga') return <ShieldAlert className="w-10 h-10 text-primary" />;
    if (slug === 'lakshmi') return <Gem className="w-10 h-10 text-primary" />;
    if (slug === 'saraswati') return <BookOpen className="w-10 h-10 text-primary" />;
    if (slug === 'parvati') return <Heart className="w-10 h-10 text-primary" />;
    if (slug === 'kali') return <Sword className="w-10 h-10 text-primary" />;
    return <ScrollText className="w-10 h-10 text-primary" />;
  }

  const isDurga = goddess.slug === 'durga';
  const isLakshmi = goddess.slug === 'lakshmi';
  const isSaraswati = goddess.slug === 'saraswati';

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": `Maa ${goddess.name} - ${goddess.aspect}`,
    "description": goddess.introduction,
    "image": goddess.imageUrl || `${siteUrl}/og-images/tridevi/${goddess.slug}.jpg`,
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
      "@id": `${siteUrl}/tridevi/${goddess.slug}`
    },
    "keywords": [goddess.name, goddess.aspect, 'Tridevi', 'Divine Feminine', 'Hindu Goddess', ...goddess.attributes.slice(0,3)].join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-10">
        <header className="mb-12 text-center" aria-labelledby={`goddess-title-${goddess.slug}`}>
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg">
            {getGoddessIcon(goddess.slug)}
          </div>
          <h1 id={`goddess-title-${goddess.slug}`} className="text-4xl md:text-6xl font-bold text-primary mb-2 drop-shadow-md">{goddess.name}</h1>
          <p className="text-2xl text-secondary font-medium mb-4">{goddess.aspect}</p>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            {goddess.introduction}
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <Card className="sticky top-10 shadow-xl rounded-xl overflow-hidden border-2 border-primary/30 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={goddess.imageUrl || `https://placehold.co/600x700.png`}
                  alt={`Divine image of Maa ${goddess.name}`}
                  width={600}
                  height={700}
                  className="rounded-t-lg shadow-md object-cover object-top w-full h-auto max-h-[400px] lg:max-h-[550px]"
                  data-ai-hint={goddess.imageHint}
                  priority
                />
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-b from-card to-muted/20">
                <h3 className="text-xl font-semibold mb-3 text-secondary flex items-center">
                  <Star className="w-6 h-6 mr-2"/> Core Attributes
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {goddess.attributes.map((attr, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 text-sm shadow-sm">{attr}</Badge>
                  ))}
                </div>
                
                {goddess.consort && (
                  <p className="text-md mb-2"><strong className="text-foreground">Consort:</strong> {goddess.consort}</p>
                )}

                {goddess.alternativeNames && goddess.alternativeNames.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-secondary">Alternative Names</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {goddess.alternativeNames.map(name => <Badge key={name} variant="outline" className="text-xs">{name}</Badge>)}
                    </div>
                  </>
                )}

                <h3 className="text-lg font-semibold mt-4 mb-2 text-secondary">Key Mantras</h3>
                {(goddess.detailedMantrasAndStotras?.mantras ? goddess.detailedMantrasAndStotras.mantras.slice(0,2) : goddess.mantras).map((mantraItem, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="block w-full text-left text-sm p-3 my-2 font-mono shadow-sm break-words whitespace-normal hover:bg-accent/10"
                  >
                    {typeof mantraItem === 'string' ? mantraItem : (mantraItem.sanskrit || mantraItem.name)}
                    {typeof mantraItem !== 'string' && mantraItem.sanskrit && mantraItem.name !== mantraItem.sanskrit && <span className="block text-xs opacity-80 mt-1">{mantraItem.name}</span>}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {goddess.primaryAttributes && (
              <SectionCard title="Primary Attributes" icon={Info}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-md">
                      <p><strong className="text-secondary">Gender:</strong> {goddess.primaryAttributes.gender}</p>
                      <p><strong className="text-secondary">Nature:</strong> {goddess.primaryAttributes.nature}</p>
                      <p><strong className="text-secondary">Energy Type:</strong> {goddess.primaryAttributes.energyType}</p>
                      <p><strong className="text-secondary">Planet:</strong> {goddess.primaryAttributes.planet}</p>
                      <div>
                          <strong className="text-secondary">Affiliation:</strong>
                          <div className="flex flex-wrap gap-1 mt-1">
                              {goddess.primaryAttributes.affiliation.map(aff => <Badge key={aff} variant='default' className="text-xs">{aff}</Badge>)}
                          </div>
                      </div>
                  </div>
              </SectionCard>
            )}

            {goddess.originsAndMythology && Object.keys(goddess.originsAndMythology).length > 0 && (
              <SectionCard title="Origins & Mythology" icon={Atom}>
                {Object.entries(goddess.originsAndMythology).map(([key, value]) => (
                  <div key={key} className="mb-3 text-md leading-relaxed">
                    <strong className="text-secondary capitalize">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>{' '}
                    {Array.isArray(value) ? (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {value.map((item: string) => <Badge key={item} variant='outline' className="text-sm">{item}</Badge>)}
                      </div>
                    ) : (
                      String(value) 
                    )}
                  </div>
                ))}
              </SectionCard>
            )}
            
            {goddess.detailedIconography ? (
               <SectionCard title="Iconography" icon={Palette}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-md">
                      <p><strong className="text-secondary">Skin Color:</strong> {goddess.detailedIconography.skinColor.join(', ')}</p>
                      <p><strong className="text-secondary">Number of Arms:</strong> {goddess.detailedIconography.numberOfArms}</p>
                      <p><strong className="text-secondary">Mount:</strong> {goddess.detailedIconography.mount}</p>
                      <p><strong className="text-secondary">Posture:</strong> {goddess.detailedIconography.posture}</p>
                      <p><strong className="text-secondary">Expressions:</strong> {goddess.detailedIconography.expressions.join(', ')}</p>
                  </div>
                  <div className="mt-3">
                      <strong className="text-secondary">{goddess.slug === 'lakshmi' ? 'Common Attributes:' : 'Common Weapons:'}</strong>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                          {goddess.detailedIconography.commonWeapons.map(item => <Badge key={item} variant='destructive' className="text-xs">{item}</Badge>)}
                      </div>
                  </div>
              </SectionCard>
            ) : (
              <SectionCard title="Iconography & Symbolism" icon={ScrollText}>
                  <p className="text-md whitespace-pre-line leading-relaxed text-foreground/90">{goddess.iconographyDetails}</p>
              </SectionCard>
            )}

             {goddess.detailedSymbolism && (
              <SectionCard title="Symbolism Deep Dive" icon={Lightbulb}>
                  <ul className="list-disc list-inside space-y-2 text-md">
                      {Object.entries(goddess.detailedSymbolism).map(([key, value]) => (
                          <li key={key}><strong className="capitalize text-secondary">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}</li>
                      ))}
                  </ul>
              </SectionCard>
            )}

            {goddess.notable_forms && goddess.notable_forms.length > 0 && (
              <SectionCard title="Notable Forms" icon={Users}>
                <div className="flex flex-wrap gap-2">
                  {goddess.notable_forms.map((form, index) => (
                    <Badge key={index} variant="default" className="text-md px-3 py-1.5 shadow-sm">{form}</Badge>
                  ))}
                </div>
              </SectionCard>
            )}
            
            {goddess.detailedFestivals && goddess.detailedFestivals.length > 0 ? (
               <SectionCard title="Major Festivals" icon={CalendarDays}>
                  <Accordion type="single" collapsible className="w-full mt-0">
                      {goddess.detailedFestivals.map(festival => (
                          <AccordionItem value={festival.name} key={festival.name} className="border-b-0">
                              <AccordionTrigger className="text-lg hover:text-accent font-medium py-3">{festival.name}</AccordionTrigger>
                              <AccordionContent className="space-y-1 text-sm pb-3">
                                  {festival.type && <p><strong className="text-muted-foreground">Type:</strong> {festival.type}</p>}
                                  {festival.time && <p><strong className="text-muted-foreground">Time:</strong> {festival.time}</p>}
                                  {festival.region && <p><strong className="text-muted-foreground">Region:</strong> {festival.region}</p>}
                                  {festival.description && <p><strong className="text-muted-foreground">Details:</strong> {festival.description}</p>}
                                  <p><strong className="text-muted-foreground">Significance:</strong> {festival.significance}</p>
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
              </SectionCard>
            ) : goddess.festivals && goddess.festivals.length > 0 && (
               <SectionCard title="Major Festivals" icon={CalendarDays}>
                  <div className="flex flex-wrap gap-2">
                      {goddess.festivals.map((festival, index) => (
                          <Badge key={index} variant="secondary" className="text-md px-3 py-1.5 shadow-sm">{festival}</Badge>
                      ))}
                  </div>
              </SectionCard>
            )}

              {goddess.majorTemples && goddess.majorTemples.length > 0 && (
                  <SectionCard title="Prominent Temples" icon={Landmark}>
                      <div className="space-y-3">
                          {goddess.majorTemples.map((temple) => (
                              <div key={temple.id} className="p-3 border rounded-md bg-muted/20">
                                  <h4 className="font-semibold text-secondary">{temple.name}</h4>
                                  <p className="text-sm text-muted-foreground">{temple.location}</p>
                                  <p className="text-xs mt-1">{temple.significance}</p>
                              </div>
                          ))}
                      </div>
                  </SectionCard>
              )}
          </div>
        </div>
        
        <Separator className="my-12 bg-border/50" />

        {isDurga && goddess.avatarsForms && (
          <section className="mb-12" aria-labelledby="durga-avatars-title">
              <h2 id="durga-avatars-title" className="text-3xl font-semibold text-center mb-8 text-secondary flex items-center justify-center gap-2"><Sparkles className="w-8 h-8" /> Avatars & Forms of Maa Durga</h2>
              <div className="grid md:grid-cols-2 gap-6">
                  {goddess.avatarsForms.filter(form => form.name !== "Navadurga").map(form => ( 
                      <Card key={form.name} className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                          <CardHeader><CardTitle className="text-xl text-primary">{form.name}</CardTitle></CardHeader>
                          <CardContent><p className="text-sm text-foreground/80">{form.description}</p></CardContent>
                      </Card>
                  ))}
              </div>
          </section>
        )}

        {goddess.slug === 'durga' && goddess.navadurga && (
          <section className="mb-12" aria-labelledby="navadurga-title">
            <h2 id="navadurga-title" className="text-3xl font-semibold text-center mb-8 text-secondary flex items-center justify-center gap-2"><ShieldQuestion className="w-8 h-8" /> The Navadurga</h2>
            <Tabs defaultValue={goddess.navadurga[0].name} className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-6 shadow-md bg-muted p-1 rounded-lg">
                {goddess.navadurga.map((form) => (
                  <TabsTrigger key={form.name} value={form.name} className="text-xs sm:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg">{form.name}</TabsTrigger>
                ))}
              </TabsList>
              {goddess.navadurga.map((form: NavForm) => (
                <TabsContent key={form.name} value={form.name}>
                  <Card className="shadow-xl rounded-xl overflow-hidden border border-primary/20">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="text-2xl text-primary">{form.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="md:flex md:gap-6 items-start p-6">
                       <div className="md:w-1/3 mb-4 md:mb-0 flex-shrink-0">
                         <Image
                            src={`https://placehold.co/400x500.png`}
                            alt={`Image of Navadurga form: ${form.name}`}
                            width={400}
                            height={500}
                            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[350px] border-2 border-secondary/30"
                            data-ai-hint={form.imageHint}
                          />
                       </div>
                       <div className="md:w-2/3 space-y-3 text-md">
                          <p><strong className="text-secondary">Narrative:</strong> {form.story}</p>
                          <p><strong className="text-secondary">Divine Powers:</strong> {form.powers}</p>
                          <p><strong className="text-secondary">Iconography:</strong> {form.iconography}</p>
                          <div className="mt-4">
                            <strong className="text-secondary mr-2">Sacred Mantra:</strong>
                             <Badge variant="outline" className="p-2.5 font-mono text-sm bg-muted/50 border-primary/50 shadow-sm">{form.mantra}</Badge>
                          </div>
                       </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        )}

        {goddess.detailedMantrasAndStotras && (
          <SectionCard title="Mantras & Stotras" icon={BookCopy} cardClassName="mb-12" >
              <Accordion type="multiple" className="w-full space-y-3">
                  {goddess.detailedMantrasAndStotras.mantras.map((mantra, idx) => (
                      <AccordionItem value={`mantra-${idx}`} key={`mantra-${idx}`} className="border bg-card rounded-lg shadow-sm hover:shadow-md">
                          <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-secondary hover:text-secondary/80">{mantra.name}</AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 space-y-1 text-md">
                              {mantra.sanskrit && <p className="font-mono text-primary-foreground/80 bg-primary/10 p-2 rounded-sm">{mantra.sanskrit}</p>}
                              {mantra.meaning && <p><strong className="text-muted-foreground">Meaning:</strong> {mantra.meaning}</p>}
                              {mantra.description && <p><strong className="text-muted-foreground">Description:</strong> {mantra.description}</p>}
                          </AccordionContent>
                      </AccordionItem>
                  ))}
                   {goddess.detailedMantrasAndStotras.stotras.map((stotra, idx) => (
                      <AccordionItem value={`stotra-${idx}`} key={`stotra-${idx}`} className="border bg-card rounded-lg shadow-sm hover:shadow-md">
                          <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-accent hover:text-accent/80">{stotra.name}</AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 space-y-1 text-md">
                              {stotra.source && <p><strong className="text-muted-foreground">Source:</strong> {stotra.source}</p>}
                              {stotra.author && <p><strong className="text-muted-foreground">Author:</strong> {stotra.author}</p>}
                              <p><strong className="text-muted-foreground">Description:</strong> {stotra.description}</p>
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
          </SectionCard>
        )}
        
        {goddess.shaktiPeethasInfo && (
          <SectionCard title="Shakti Peethas Connection" icon={Mountain} cardClassName="mb-12">
              <p className="text-md mb-2">{goddess.shaktiPeethasInfo.description}</p>
              {goddess.shaktiPeethasInfo.total && <p className="text-sm mb-3"><strong className="text-secondary">Total Number (General):</strong> {goddess.shaktiPeethasInfo.total}</p>}
              <div>
                  <strong className="text-secondary">Important Associated Peethas/Sites:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                      {goddess.shaktiPeethasInfo.importantOnes.map(p => <Badge key={p} variant="default">{p}</Badge>)}
                  </div>
              </div>
               <Link href="/shakti-peethas" passHref>
                  <Button variant="link" className="mt-4 text-accent hover:underline flex items-center p-0">
                      Explore All Shakti Peethas <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
               </Link>
          </SectionCard>
        )}

        {goddess.philosophicalInsights && Object.keys(goddess.philosophicalInsights).length > 0 && (
          <SectionCard title="Philosophical Insights" icon={Brain} cardClassName="mb-12">
             <div className="space-y-3 text-md">
               {Object.entries(goddess.philosophicalInsights).map(([key, value]) => (
                 <p key={key}>
                   <strong className="text-secondary capitalize">{key.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace(/^./, str => str.toUpperCase())}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                 </p>
               ))}
             </div>
          </SectionCard>
        )}
        
        {goddess.culturalInfluence && (
          <SectionCard title="Cultural Influence" icon={Group} cardClassName="mb-12">
             <div className="space-y-3 text-md">
                  {goddess.culturalInfluence.literature && <div><strong className="text-secondary">Literature:</strong> {goddess.culturalInfluence.literature.join(', ')}.</div>}
                  {goddess.culturalInfluence.danceForms && <div><strong className="text-secondary">Dance Forms:</strong> {goddess.culturalInfluence.danceForms.join(', ')}.</div>}
                  {goddess.culturalInfluence.artAndSculpture && <div><strong className="text-secondary">Art & Sculpture:</strong> {goddess.culturalInfluence.artAndSculpture}.</div>}
                  {goddess.culturalInfluence.moviesAndMedia && <div><strong className="text-secondary">Movies & Media:</strong> {goddess.culturalInfluence.moviesAndMedia.join(', ')}.</div>}
             </div>
          </SectionCard>
        )}
        
        {goddess.relatedDeities && goddess.relatedDeities.length > 0 && (
           <SectionCard title="Related Deities & Animals" icon={Sparkles} cardClassName="mb-12">
              <p className="mb-2"><strong className="text-secondary">Related Deities:</strong> {goddess.relatedDeities.join(', ')}.</p>
              {goddess.associatedAnimals && goddess.associatedAnimals.length > 0 && <p><strong className="text-secondary">Associated Animals:</strong> {goddess.associatedAnimals.join(', ')}.</p>}
          </SectionCard>
        )}

        {goddess.modernRelevance && (
           <SectionCard title="Modern Relevance" icon={SunMoon} cardClassName="mb-12">
             <div className="space-y-2 text-md">
                 <p><strong className="text-secondary">Women Empowerment:</strong> {goddess.modernRelevance.womenEmpowerment}</p>
                 <p><strong className="text-secondary">Spiritual Balance:</strong> {goddess.modernRelevance.spiritualBalance}</p>
                 <p><strong className="text-secondary">Festivals & Unity:</strong> {goddess.modernRelevance.festivalsAndUnity}</p>
                 {isLakshmi && goddess.modernRelevance.householdWorship && <p><strong className="text-secondary">Household Worship:</strong> {goddess.modernRelevance.householdWorship}</p>}
                 {isLakshmi && goddess.modernRelevance.businessAndFinance && <p><strong className="text-secondary">Business & Finance:</strong> {goddess.modernRelevance.businessAndFinance}</p>}
                 {isSaraswati && goddess.modernRelevance.educationFocus && <p><strong className="text-secondary">Focus on Education:</strong> {goddess.modernRelevance.educationFocus}</p>}
             </div>
          </SectionCard>
        )}
        
        {goddess.externalLinks && (
          <SectionCard title="Further Reading" icon={ExternalLink} cardClassName="mb-12">
              <ul className="list-disc list-inside space-y-1">
                  {Object.entries(goddess.externalLinks).map(([key, value]) => (
                      <li key={key}>
                          <Link href={value} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline capitalize">
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </Link>
                      </li>
                  ))}
              </ul>
          </SectionCard>
        )}

        {goddess.slug === 'lakshmi' && goddess.ashtaLakshmi && (
           <section className="mb-12" aria-labelledby="ashta-lakshmi-title">
            <h2 id="ashta-lakshmi-title" className="text-3xl font-semibold text-center mb-8 text-secondary flex items-center justify-center gap-2"><HandCoins className="w-8 h-8" /> The Ashta Lakshmi</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {goddess.ashtaLakshmi.map((form) => (
                <Card key={form.name} className="shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 flex flex-col">
                  <CardHeader className="p-0">
                     <Image
                        src={`https://placehold.co/400x250.png`}
                        alt={`Image of Ashta Lakshmi form: ${form.name}`}
                        width={400}
                        height={250}
                        className="rounded-t-lg object-cover w-full h-40"
                        data-ai-hint={form.imageHint}
                      />
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <CardTitle className="text-xl text-primary mt-2 mb-2">{form.name}</CardTitle>
                    <p className="text-sm mb-2 text-foreground/80 flex-grow min-h-[4rem]">{form.description}</p>
                    <p className="text-sm mt-auto pt-2 border-t border-border/30"><strong className="text-secondary">Blessings:</strong> {form.blessings}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {goddess.slug === 'saraswati' && goddess.saraswatiAspects && (
          <section className="mb-12" aria-labelledby="saraswati-aspects-title">
            <h2 id="saraswati-aspects-title" className="text-3xl font-semibold text-center mb-8 text-secondary flex items-center justify-center gap-2"><Edit3 className="w-8 h-8" /> Aspects of Maa Saraswati</h2>
            {goddess.saraswatiAspects.map((aspect, index) => (
              <Card key={index} className="mb-6 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{aspect.title}</CardTitle>
                </CardHeader>
                <CardContent className="md:flex md:gap-4 items-center">
                  {aspect.imageHint && (
                    <div className="md:w-1/4 mb-4 md:mb-0 flex-shrink-0">
                      <Image
                          src={`https://placehold.co/300x200.png`}
                          alt={`Illustration for Saraswati aspect: ${aspect.title}`}
                          width={300}
                          height={200}
                          className="rounded-lg shadow-md object-cover border border-muted/50"
                          data-ai-hint={aspect.imageHint}
                        />
                    </div>
                  )}
                  <p className="md:w-3/4 text-md leading-relaxed">{aspect.description}</p>
                </CardContent>
              </Card>
            ))}
            {goddess.vandana && (
              <Card className="mt-8 shadow-xl bg-primary/5 border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2"><FileText className="w-7 h-7"/> Saraswati Vandana</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium whitespace-pre-line font-serif italic text-primary-foreground/90">{goddess.vandana}</p>
                </CardContent>
              </Card>
            )}
          </section>
        )}
         <Separator className="my-12" />
          <Card className="mt-12 p-8 bg-accent/10 text-center rounded-xl shadow-lg border border-accent/30" aria-labelledby={`goddess-conclusion-${goddess.slug}`}>
          <CardTitle id={`goddess-conclusion-${goddess.slug}`} className="text-2xl text-accent mb-3 flex items-center justify-center gap-2"><HandHeart className="w-8 h-8" /> Path to Divine Understanding</CardTitle>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
            The essence of {goddess.name} reveals profound truths about the cosmos and the divine feminine. May your exploration be enlightening.
          </p>
        </Card>
      </div>
    </>
  );
}
