
import { divineStoriesData } from '@/data/divine-stories-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
    BookHeart, Users, ArrowLeftCircle, ChevronRight, Drama, MessageSquare, 
    BookOpenText, Shield, Info, ExternalLink, Link as LinkIcon, CalendarDays, MapPin, 
    Library, Type, Users2 as UsersIconLucide, Sun, Sparkles, FileText, HelpCircle, Milestone, Eye
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type StoryPageProps = {
  params: { slug: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.shaktidarshan.com';

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = divineStoriesData.find((s) => s.slug === params.slug);

  if (!story) {
    return {
      title: 'Divine Story Not Found | Shakti Darshan',
      description: 'The requested divine story could not be found. Explore other tales of Maa Adi Shakti and the Divine Feminine on Shakti Darshan.',
      robots: { index: false, follow: false },
    };
  }

  const pageTitle = `${story.title} - Divine Story | Shakti Darshan`; 
  const pageDescription = `${story.summary.substring(0, 120)}... Explore themes of ${story.themes?.join(', ') || 'divine play'} and key figures like ${Array.isArray(story.keyFigures) && typeof story.keyFigures[0] === 'object' ? (story.keyFigures[0] as {name:string}).name : story.keyFigures?.[0] || 'the Goddess'}. From ${typeof story.source === 'string' ? story.source : story.source?.name}.`;
  const pageUrl = `${siteUrl}/stories/${story.slug}`;
  
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [story.title, typeof story.source === 'string' ? story.source : (story.source?.name || ''), ...(story.themes || []), ...(Array.isArray(story.keyFigures) ? story.keyFigures.map(kf => typeof kf === 'string' ? kf : kf.name) : []), 'Divine Story', 'Hindu Mythology', 'Shakti Tales'],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Shakti Darshan',
      type: 'article',
      article: {
        authors: [`${siteUrl}/about`], 
        section: "Divine Stories",
        tags: [story.title, ...(story.themes || [])],
      }
    },
    twitter: {
      card: 'summary_large_image', 
      title: pageTitle,
      description: pageDescription,
    },
  };
}

export async function generateStaticParams() {
  return divineStoriesData.map((story) => ({
    slug: story.slug,
  }));
}

const SectionWrapper: React.FC<{title: string, icon: React.ElementType, children: React.ReactNode, className?: string, cardId?: string}> = ({title, icon: Icon, children, className, cardId}) => (
    <Card id={cardId} className={cn("shadow-lg rounded-xl border border-border/30 overflow-hidden bg-card/80 backdrop-blur-sm", className)}>
        <CardHeader className="bg-muted/20 border-b border-border/20 py-4 px-5">
            <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2.5">
                <Icon className="w-6 h-6 text-primary/90" />
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-5 md:p-6 space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            {children}
        </CardContent>
    </Card>
);

export default function StoryPage({ params }: StoryPageProps) {
  const story = divineStoriesData.find((s) => s.slug === params.slug);

  if (!story) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <Card className="max-w-md mx-auto p-8 bg-destructive/10 border-destructive">
                <CardTitle className="text-2xl text-destructive mb-4">Story Not Found</CardTitle>
                <CardDescription>
                    The story you are looking for does not exist or may have been moved.
                </CardDescription>
                 <Button asChild className="mt-6">
                    <Link href="/stories">Back to Stories</Link>
                </Button>
            </Card>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "description": story.summary,
    "author": { "@type": "Organization", "name": "Shakti Darshan" },
    "publisher": {
      "@type": "Organization",
      "name": "Shakti Darshan",
      "logo": { "@type": "ImageObject", "url": `${siteUrl}/logo.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${siteUrl}/stories/${story.slug}` },
    "keywords": [story.title, typeof story.source === 'string' ? story.source : (story.source?.name || ''), ...(story.themes || []), ...(Array.isArray(story.keyFigures) ? story.keyFigures.map(kf => typeof kf === 'string' ? kf : kf.name) : [])].join(", "),
    "articleSection": "Divine Stories"
  };

  const sourceName = typeof story.source === 'string' ? story.source : story.source?.name;
  const sourceText = typeof story.source === 'object' ? story.source.text : '';
  const sourceContext = typeof story.source === 'object' ? story.source.scripturalContext : '';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-10">
        <Button asChild variant="outline" className="mb-8 group text-sm">
          <Link href="/stories">
            <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
            Back to All Stories
          </Link>
        </Button>

        <header className="mb-12 text-center border-b-2 border-primary/20 pb-8" aria-labelledby={`story-title-${story.slug}`}>
            <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
              <BookHeart className="w-16 h-16 text-primary" />
            </div>
            <h1 id={`story-title-${story.slug}`} className="text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">{story.title}</h1>
            {sourceName && (
              <CardDescription className="text-md text-foreground/70">
                Source: <strong className="text-secondary">{sourceName}</strong>
                {sourceText && <span className="block text-xs italic">({sourceText}{sourceContext ? ` - ${sourceContext}` : ''})</span>}
              </CardDescription>
            )}
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-8">
                <SectionWrapper title="The Divine Narrative" icon={Drama} cardId="divine-narrative">
                    <p className="text-lg text-foreground/90 whitespace-pre-line leading-relaxed">{story.summary}</p>
                </SectionWrapper>

                {story.verseHighlight && story.verseHighlight.verses.length > 0 && (
                    <SectionWrapper title={story.verseHighlight.title || "Sacred Verses"} icon={MessageSquare} cardId="verse-highlight">
                         <Accordion type="single" collapsible className="w-full" defaultValue="verse-section">
                            <AccordionItem value="verse-section" className="border-none">
                                <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/80 hover:no-underline py-3 px-1">
                                    View Verses & Translation
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 space-y-4">
                                    {story.verseHighlight.verses.map((verse, index) => (
                                        <div key={index} className="p-3 border-l-4 border-accent/50 bg-accent/5 rounded-r-md">
                                            <p className="font-serif text-md text-accent-foreground/90 whitespace-pre-line mb-1">{verse}</p>
                                            {story.verseHighlight.translation && story.verseHighlight.translation[index] && (
                                                <p className="text-sm italic text-muted-foreground">{story.verseHighlight.translation[index]}</p>
                                            )}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </SectionWrapper>
                )}

                {story.culturalSignificance && (story.culturalSignificance.festivals?.length || story.culturalSignificance.rituals?.length || (story.culturalSignificance as any).worshipForm || (story.culturalSignificance as any).textualReference) && (
                    <SectionWrapper title="Cultural Significance" icon={Milestone} cardId="cultural-significance">
                        {(story.culturalSignificance.festivals && story.culturalSignificance.festivals.length > 0) && (
                            <div className="mb-3">
                                <h4 className="text-md font-semibold text-secondary mb-1.5 flex items-center gap-1.5"><CalendarDays className="w-4 h-4"/>Key Festivals:</h4>
                                {story.culturalSignificance.festivals.map(festival => (
                                    <p key={festival.name} className="text-sm text-foreground/80 ml-2"><strong>{festival.name}:</strong> {festival.importance}</p>
                                ))}
                            </div>
                        )}
                         {(story.culturalSignificance.rituals && story.culturalSignificance.rituals.length > 0) && (
                            <div className="mb-3">
                                <h4 className="text-md font-semibold text-secondary mb-1.5 flex items-center gap-1.5"><Sparkles className="w-4 h-4"/>Associated Rituals:</h4>
                                 {story.culturalSignificance.rituals.map(ritual => (
                                    <p key={ritual.name} className="text-sm text-foreground/80 ml-2"><strong>{ritual.name}:</strong> {ritual.importance}</p>
                                ))}
                            </div>
                        )}
                         {(story.culturalSignificance as any).worshipForm && (
                            <p className="text-sm text-foreground/80"><strong className="text-secondary">Worship Form:</strong> {(story.culturalSignificance as any).worshipForm}</p>
                         )}
                          {(story.culturalSignificance as any).textualReference && Array.isArray((story.culturalSignificance as any).textualReference) && (
                            <div className="mb-3">
                                <h4 className="text-md font-semibold text-secondary mb-1.5 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/>Textual References:</h4>
                                {(story.culturalSignificance as any).textualReference.map((ref: {source: string; context: string}, index: number) => (
                                    <p key={index} className="text-sm text-foreground/80 ml-2"><strong>{ref.source}:</strong> {ref.context}</p>
                                ))}
                            </div>
                        )}
                    </SectionWrapper>
                )}

                {story.locationsAssociated && story.locationsAssociated.length > 0 && (
                    <SectionWrapper title="Associated Sacred Locations" icon={MapPin} cardId="associated-locations">
                        {story.locationsAssociated.map(loc => (
                            <div key={loc.name} className="mb-2 p-2 border-b border-border/20 last:border-b-0">
                                <p className="font-semibold text-primary">{loc.name}</p>
                                <p className="text-xs text-muted-foreground">{loc.significance}</p>
                            </div>
                        ))}
                    </SectionWrapper>
                )}
                 {story.visualRepresentation && (story.visualRepresentation.iconicScene || story.visualRepresentation.symbols?.length > 0) && (
                    <SectionWrapper title="Visual & Symbolic Representation" icon={Eye} cardId="visual-representation">
                        {story.visualRepresentation.iconicScene && <p><strong className="text-secondary">Iconic Scene:</strong> {story.visualRepresentation.iconicScene}</p>}
                        {story.visualRepresentation.symbols && story.visualRepresentation.symbols.length > 0 && (
                            <div className="mt-2">
                                <strong className="text-secondary">Key Symbols:</strong>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {story.visualRepresentation.symbols.map(symbol => <Badge key={symbol} variant="outline">{symbol}</Badge>)}
                                </div>
                            </div>
                        )}
                    </SectionWrapper>
                )}
            </div>

            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
                {story.keyFigures && story.keyFigures.length > 0 && (
                    <SectionWrapper title="Key Figures" icon={UsersIconLucide} cardId="key-figures">
                        <ul className="space-y-2.5">
                        {Array.isArray(story.keyFigures) && story.keyFigures.map((figure, index) => {
                            const name = typeof figure === 'string' ? figure : figure.name;
                            const role = typeof figure === 'string' ? '' : figure.role;
                            return (
                            <li key={index} className="p-2.5 bg-muted/40 rounded-md shadow-sm">
                                <p className="font-semibold text-secondary">{name}</p>
                                {role && <p className="text-xs text-muted-foreground italic">{role}</p>}
                            </li>
                            );
                        })}
                        </ul>
                    </SectionWrapper>
                )}

                {story.themes && story.themes.length > 0 && (
                    <SectionWrapper title="Themes Explored" icon={Type} cardId="themes-explored">
                        <div className="flex flex-wrap gap-2">
                        {story.themes.map((theme) => (
                            <Badge key={theme} variant="default" className="text-sm px-3 py-1 shadow-sm bg-primary/80 hover:bg-primary">
                            {theme}
                            </Badge>
                        ))}
                        </div>
                    </SectionWrapper>
                )}

                {(story.resources || story.relatedStotras) && (
                    <SectionWrapper title="Explore Further" icon={LinkIcon} cardId="explore-further">
                         {story.resources && Object.values(story.resources).some(val => val) && (
                            <div className="mb-3">
                                <h4 className="text-md font-semibold text-secondary mb-1.5 flex items-center gap-1.5"><BookOpenText className="w-4 h-4"/>Resources:</h4>
                                <ul className="space-y-1 text-sm">
                                    {Object.entries(story.resources).map(([key, value]) => {
                                        if (!value) return null;
                                        let title = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim();
                                        if (title.toLowerCase().includes("devi mahatmyam")) title = "Devī Māhātmyam";
                                        else if (title.toLowerCase().includes("wikipedia")) title = "Wikipedia";
                                        else if (title.toLowerCase().includes("stotram")) title += " Link";


                                        return (
                                        <li key={key}>
                                            <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent-foreground text-left">
                                                <a href={value as string} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    {title} <ExternalLink className="w-3 h-3"/>
                                                </a>
                                            </Button>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                        {story.relatedStotras && story.relatedStotras.length > 0 && (
                             <div className={cn(story.resources && Object.values(story.resources).some(val => val) && "mt-3 pt-3 border-t border-border/20")}>
                                <h4 className="text-md font-semibold text-secondary mb-1.5 flex items-center gap-1.5"><Library className="w-4 h-4"/>Related Stotras:</h4>
                                <ul className="space-y-1 text-sm">
                                    {story.relatedStotras.map(stotra => (
                                         <li key={stotra.name}>
                                            <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent-foreground text-left">
                                                <a href={stotra.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                    {stotra.name} <ExternalLink className="w-3 h-3"/>
                                                </a>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </SectionWrapper>
                )}
            </div>
        </div>

        <Separator className="my-12" />
        <Card className="mt-12 p-6 bg-primary/5 text-center rounded-xl shadow-lg border-primary/20" aria-labelledby="story-conclusion-title">
          <CardTitle id="story-conclusion-title" className="text-xl text-primary mb-3">Reflections on the Tale</CardTitle>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Reflecting on these divine stories and sacred verses deepens our connection to the eternal truths embodied by Maa Shakti.
          </p>
          <Button asChild variant="link" className="mt-4 text-accent font-semibold text-md">
            <Link href="/stories">Explore More Stories <ChevronRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </Card>
      </div>
    </>
  );
}

    
