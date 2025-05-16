import Image from 'next/image';
import { sacredChantsData } from '@/data/sacred-chants-data'; 
import type { SacredChant, VerseDetail } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
    BookOpenText, Languages, Tag, Users, Target, ListChecks, Info, Music, Video, Globe, Mic2, LanguagesIcon, FileText, Brain, MessageSquare, CalendarDays, Award, Link as LinkIcon, ArrowLeftCircle, BookMarked, ChevronDown 
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

type SacredChantDetailPageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: SacredChantDetailPageProps): Promise<Metadata> {
  const chant = sacredChantsData.find((c) => c.id === params.id);

  if (!chant) {
    return {
      title: 'Chant Not Found | Shakti Darshan',
      description: 'The requested sacred chant page could not be found.',
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${chant.title} - ${chant.type} | Sacred Chants | ${siteName}`;
  const pageDescription = chant.description.substring(0, 160) + (chant.description.length > 160 ? '...' : '');
  const pageUrl = `/sacred-chants/${params.id}`;
  const imageUrl = `https://picsum.photos/seed/${chant.imageHint || chant.id}/1200/630`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [chant.title, chant.type, chant.deityFocus || 'Sacred Chant', 'Hindu Hymn', 'Stotra', 'Mantra'],
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
          alt: chant.title,
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
  return sacredChantsData.map((chant) => ({
    id: chant.id,
  }));
}

export default function SacredChantDetailPage({ params }: SacredChantDetailPageProps) {
  const chant = sacredChantsData.find((c) => c.id === params.id);

  if (!chant) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Card className="max-w-md mx-auto p-8 bg-destructive/10">
            <CardTitle className="text-2xl text-destructive mb-4">Chant Not Found</CardTitle>
            <CardDescription>
                The sacred chant you are looking for does not exist or may have been moved.
            </CardDescription>
             <Button asChild className="mt-6">
                <Link href="/sacred-chants">Back to Library</Link>
            </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-12 text-center relative">
        <Button asChild variant="outline" className="absolute top-0 left-0 md:left-4 text-sm shadow-sm hover:shadow-md transition-shadow">
          <Link href="/sacred-chants">
            <ArrowLeftCircle className="w-4 h-4 mr-2" />
            Back to Library
          </Link>
        </Button>
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg mt-12 md:mt-0">
          <Mic2 className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-md">
          {chant.title}
        </h1>
        <div className="flex justify-center items-center gap-4 mt-3 mb-4">
            <Badge variant="secondary" className="text-md px-4 py-1.5 shadow-sm">{chant.type}</Badge>
            {chant.deityFocus && <Badge variant="outline" className="text-md px-4 py-1.5 shadow-sm">Focus: {chant.deityFocus}</Badge>}
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">{chant.description}</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-xl rounded-xl border border-border/50 sticky top-10">
                <CardHeader className="p-0">
                    <Image
                        src={`https://picsum.photos/seed/${chant.imageHint || chant.id}/600/400`}
                        alt={chant.title}
                        width={600}
                        height={400}
                        className="rounded-t-lg shadow-md object-cover w-full h-auto max-h-[300px]"
                        data-ai-hint={chant.imageHint || `${chant.type} ${chant.deityFocus || 'sacred chant'}`}
                    />
                </CardHeader>
                <CardContent className="p-6">
                    {chant.origin && (
                        <p className="text-sm text-foreground/80 mb-2 flex items-center gap-2"><Globe className="w-4 h-4 text-muted-foreground"/> <strong>Origin:</strong> {chant.origin}</p>
                    )}
                    {chant.language && (
                        <p className="text-sm text-foreground/80 mb-2 flex items-center gap-2"><LanguagesIcon className="w-4 h-4 text-muted-foreground"/> <strong>Language:</strong> {Array.isArray(chant.language) ? chant.language.join(', ') : chant.language}</p>
                    )}
                    {chant.verses?.length > 0 && (
                        <p className="text-sm text-foreground/80 mb-3 flex items-center gap-2"><ListChecks className="w-4 h-4 text-muted-foreground"/> <strong>Verses:</strong> {chant.verses.length}</p>
                    )}
                    {chant.scriptureReference && (
                        <p className="text-sm text-foreground/80 flex items-center gap-2"><BookOpenText className="w-4 h-4 text-muted-foreground"/> <strong>Scripture:</strong> {chant.scriptureReference}</p>
                    )}
                </CardContent>
            </Card>
            
            {chant.audioUrl && (
                 <Card className="shadow-xl rounded-xl border border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-accent flex items-center gap-2"><Music className="w-5 h-5"/> Listen</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href={chant.audioUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all text-sm">
                            {chant.audioUrl}
                        </Link>
                         <p className="text-xs text-muted-foreground mt-1">(Opens in new tab)</p>
                    </CardContent>
                 </Card>
            )}
             {chant.videoUrl && (
                 <Card className="shadow-xl rounded-xl border border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-accent flex items-center gap-2"><Video className="w-5 h-5"/> Watch</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Link href={chant.videoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all text-sm">
                            {chant.videoUrl}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-1">(Opens in new tab)</p>
                    </CardContent>
                 </Card>
            )}
            {chant.associatedForms && chant.associatedForms.length > 0 && (
                <Card className="shadow-xl rounded-xl border border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2"><Users className="w-6 h-6"/> Associated Forms</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {chant.associatedForms.map(form => <Badge key={form} variant="default">{form}</Badge>)}
                    </CardContent>
                </Card>
            )}

            {chant.benefits && chant.benefits.length > 0 && (
                <Card className="shadow-xl rounded-xl border border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2"><Target className="w-6 h-6"/> Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                            {chant.benefits.map((benefit, idx) => <li key={idx}>{benefit}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </div>

        <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-xl rounded-xl border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <BookMarked className="w-7 h-7" /> Verses
                </CardTitle>
              </CardHeader>
              <CardContent>
                {chant.verses && chant.verses.length > 0 ? (
                  <Accordion type="multiple" className="w-full space-y-3">
                    {chant.verses.map((verse) => (
                      <AccordionItem value={`verse-${verse.verse_number}`} key={verse.verse_number} className="border bg-muted/20 rounded-lg shadow-sm hover:shadow-md">
                        <AccordionTrigger className="px-4 py-3 text-lg font-semibold text-secondary hover:text-secondary/80">
                          Verse {verse.verse_number}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 space-y-3">
                          <div>
                            <h4 className="text-md font-semibold text-foreground mb-1 flex items-center gap-1"><LanguagesIcon className="w-4 h-4 text-primary/70"/> Sanskrit:</h4>
                            <p className="font-serif text-lg text-foreground/90 bg-primary/5 p-2 rounded-sm">{verse.sanskrit}</p>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-foreground mb-1 flex items-center gap-1"><LanguagesIcon className="w-4 h-4 text-primary/70"/> Hindi Translation:</h4>
                            <p className="text-md text-foreground/80 bg-secondary/5 p-2 rounded-sm">{verse.hindi}</p>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-foreground mb-1 flex items-center gap-1"><LanguagesIcon className="w-4 h-4 text-primary/70"/> English Translation:</h4>
                            <p className="text-md text-foreground/80 bg-accent/5 p-2 rounded-sm">{verse.english}</p>
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-foreground mb-1 flex items-center gap-1"><Brain className="w-4 h-4 text-primary/70"/> Explanation:</h4>
                            <p className="text-md text-foreground/70 bg-muted/40 p-2 rounded-sm">{verse.explanation}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <p className="text-muted-foreground">No verses available for this chant.</p>
                )}
              </CardContent>
            </Card>
            
            {chant.notes && (
                <Card className="shadow-xl rounded-xl border border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl text-primary flex items-center gap-2"><Info className="w-6 h-6"/> Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-foreground/80 whitespace-pre-line">{chant.notes}</p>
                    </CardContent>
                </Card>
            )}
        </div>
      </div>
      
      <Separator className="my-12 bg-border/50" />

      <Card className="mt-12 p-8 bg-accent/10 text-center rounded-xl shadow-lg">
        <CardTitle className="text-2xl text-accent mb-3">The Power of Sacred Sound</CardTitle>
        <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
          Chanting these sacred texts with devotion and understanding can bring peace, clarity, and spiritual upliftment.
        </p>
        <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/sacred-chants">Return to Library</Link>
        </Button>
      </Card>
    </div>
  );
}
