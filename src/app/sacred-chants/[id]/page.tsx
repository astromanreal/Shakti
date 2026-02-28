
import Image from 'next/image';
import { sacredChantsData } from '@/data/sacred-chants-data'; 
import type { SacredChant, VerseDetail } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
    BookOpenText, Languages, Users, Target, ListChecks, Info, Music, Video, Globe, Mic2, FileText, Brain, Link as LinkIcon, ArrowLeftCircle, BookMarked, ChevronDown, ExternalLink, Volume2, PlayCircle
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

type SacredChantDetailPageProps = {
  params: { id: string };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adishakti.vercel.app/';

export async function generateMetadata({ params }: SacredChantDetailPageProps): Promise<Metadata> {
  const chant = sacredChantsData.find((c) => c.id === params.id);

  if (!chant) {
    return {
      title: 'Sacred Chant Not Found | Shakti Darshan',
      description: 'The requested sacred chant page could not be found. Explore other chants and mantras dedicated to Maa Adi Shakti on Shakti Darshan.',
      robots: { index: false, follow: false }
    };
  }

  const siteName = 'Shakti Darshan';
  const pageTitle = `${chant.title} - ${chant.type} Text, Meaning & Benefits | ${siteName}`;
  const pageDescription = `Explore the sacred chant '${chant.title}', a powerful ${chant.type} dedicated to ${Array.isArray(chant.deityFocus) ? chant.deityFocus.join(', ') : chant.deityFocus}. Find its full text, translation, explanation, and benefits for spiritual practice. ${chant.description.substring(0, 100)}...`;
  const pageUrl = `${siteUrl}/sacred-chants/${params.id}`;
  const imageUrl = chant.imageUrl || `${siteUrl}/og-images/sacred-chants/${chant.id}.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [chant.title, chant.type, ...(Array.isArray(chant.deityFocus) ? chant.deityFocus : [chant.deityFocus || 'Sacred Chant']), 'Hindu Hymn', 'Stotra', 'Mantra', 'Shakti Mantra', 'Divine Feminine chant'].flat(),
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
          alt: `Sacred Chant: ${chant.title}`,
        },
      ],
      type: 'article',
      article: {
        authors: [chant.author || `${siteUrl}/about`],
        section: "Sacred Chants",
        tags: [chant.title, chant.type, ...(Array.isArray(chant.deityFocus) ? chant.deityFocus : [chant.deityFocus || ''])],
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
  return sacredChantsData.map((chant) => ({
    id: chant.id,
  }));
}

const VerseCard: React.FC<{ verse: VerseDetail }> = ({ verse }) => {
    return (
        <Card className="shadow-lg rounded-xl border border-border/50 overflow-hidden break-inside-avoid mb-6">
            <CardHeader className="bg-muted/30">
                <CardTitle className="text-xl text-secondary flex items-center gap-2">
                    <span className="text-primary">{verse.verse_number}.</span>
                    Verse {verse.verse_number}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
                <div className="p-4 bg-primary/5 rounded-lg shadow-inner">
                  <h4 className="text-md font-semibold text-primary mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary/80"/> Sanskrit
                  </h4>
                  <p className="font-serif text-xl text-foreground/95 whitespace-pre-line leading-relaxed">{verse.sanskrit}</p>
                </div>

                <div className="p-4 bg-secondary/5 rounded-lg shadow-inner">
                  <h4 className="text-md font-semibold text-secondary mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-secondary/80"/> Hindi Translation
                  </h4>
                  <p className="text-md text-foreground/90 whitespace-pre-line leading-relaxed">{verse.hindi}</p>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg shadow-inner">
                  <h4 className="text-md font-semibold text-accent mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent/80"/> English Translation
                  </h4>
                  <p className="text-md text-foreground/90 whitespace-pre-line leading-relaxed">{verse.english}</p>
                </div>

                <Separator />
                
                <div className="p-4 bg-muted/40 rounded-lg shadow-inner">
                  <h4 className="text-md font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-muted-foreground/80"/> Explanation
                  </h4>
                  <p className="text-md text-foreground/80 whitespace-pre-line leading-relaxed">{verse.explanation}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default function SacredChantDetailPage({ params }: SacredChantDetailPageProps) {
  const chant = sacredChantsData.find((c) => c.id === params.id);

  if (!chant) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <Card className="max-w-md mx-auto p-8 bg-destructive/10 border-destructive">
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
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article", 
    "headline": chant.title,
    "description": chant.description,
    "image": chant.imageUrl || `${siteUrl}/og-images/sacred-chants/${chant.id}.jpg`,
    "author": {
      "@type": chant.author && chant.author !== "Traditional" && chant.author !== "Unknown (Traditional)" && chant.author !== "Unknown (Ancient Tradition)" ? "Person" : "Organization",
      "name": chant.author || "Shakti Darshan"
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
      "@id": `${siteUrl}/sacred-chants/${chant.id}`
    },
    "keywords": [chant.title, chant.type, ...(Array.isArray(chant.deityFocus) ? chant.deityFocus : [chant.deityFocus || ""])].join(", "),
    "genre": chant.type,
    "inLanguage": Array.isArray(chant.language) ? chant.language.join(", ") : chant.language,
    ...(chant.verses && chant.verses.length > 0 && {
        "articleBody": chant.verses.map(v => `Verse ${v.verse_number}:\nSanskrit: ${v.sanskrit}\nHindi: ${v.hindi}\nEnglish: ${v.english}\nExplanation: ${v.explanation}`).join("\n\n")
    })
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-10">
        <Button asChild variant="outline" className="mb-8 group text-sm">
          <Link href="/sacred-chants">
            <ArrowLeftCircle className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
            Back to Library
          </Link>
        </Button>
        
        <header className="mb-12 md:mb-16 text-center" aria-labelledby={`chant-title-${chant.id}`}>
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-lg ring-4 ring-primary/20">
            <Mic2 className="w-16 h-16 text-primary" />
          </div>
          <h1 id={`chant-title-${chant.id}`} className="text-4xl md:text-5xl font-bold text-primary mb-3 drop-shadow-md tracking-tight">
            {chant.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-4 mb-5">
              <Badge variant="secondary" className="text-md px-4 py-1.5 shadow-sm">{chant.type}</Badge>
              {chant.deityFocus && <Badge variant="outline" className="text-md px-4 py-1.5 shadow-sm">Focus: {Array.isArray(chant.deityFocus) ? chant.deityFocus.join(', ') : chant.deityFocus}</Badge>}
          </div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">{chant.description}</p>
        </header>

        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm mb-12">
                <CardHeader className="pb-4 border-b border-border/30">
                    <CardTitle className="text-xl text-primary flex items-center gap-2.5"><Info className="w-6 h-6"/>Chant Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    <p><strong className="text-muted-foreground">Origin:</strong> {chant.origin}</p>
                    <p><strong className="text-muted-foreground">Author:</strong> {chant.author}</p>
                    <p><strong className="text-muted-foreground">Language:</strong> {Array.isArray(chant.language) ? chant.language.join(', ') : chant.language}</p>
                    <p><strong className="text-muted-foreground">Scripture:</strong> {chant.scriptureReference}</p>
                    <p><strong className="text-muted-foreground">Total Verses:</strong> {chant.verses?.length}</p>
                    {chant.associatedForms && chant.associatedForms.length > 0 && 
                        <div className="md:col-span-2">
                          <strong className="text-muted-foreground">Associated Forms:</strong>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {chant.associatedForms.map(form => <Badge key={form} variant="default" className="text-xs">{form}</Badge>)}
                          </div>
                        </div>
                    }
                </CardContent>
            </Card>

            <Card className="shadow-xl rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm mb-12">
                <CardHeader className="pb-4 border-b border-border/30">
                    <CardTitle className="text-xl text-primary flex items-center gap-2.5"><Target className="w-6 h-6"/>Spiritual Benefits</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <ul className="list-disc list-inside space-y-2 text-md text-foreground/80">
                        {chant.benefits?.map((benefit, idx) => <li key={idx}>{benefit}</li>)}
                    </ul>
                </CardContent>
            </Card>

             {(chant.audioUrl || chant.videoUrl) && (
                 <Card className="shadow-xl rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm mb-12">
                    <CardHeader className="pb-4 border-b border-border/30">
                        <CardTitle className="text-xl text-primary flex items-center gap-2.5"><Volume2 className="w-6 h-6"/>Media</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col sm:flex-row gap-4">
                        {chant.audioUrl && (
                            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                                <Link href={chant.audioUrl} target="_blank" rel="noopener noreferrer">
                                    <Music className="w-5 h-5 mr-2"/> Listen to Chant
                                </Link>
                            </Button>
                        )}
                         {chant.videoUrl && (
                            <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary-foreground shadow-md">
                                <Link href={chant.videoUrl} target="_blank" rel="noopener noreferrer">
                                    <PlayCircle className="w-5 h-5 mr-2"/> Watch Video
                                </Link>
                            </Button>
                        )}
                    </CardContent>
                 </Card>
              )}
        </div>
        
        <Separator className="my-12" />

        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Sacred Verses</h2>
            {chant.verses && chant.verses.length > 0 ? (
                <div>
                    {chant.verses.map((verse) => (
                        <VerseCard key={verse.verse_number} verse={verse} />
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground text-center py-4">No verses available for this chant yet. More content is being added.</p>
            )}
        </div>
        
        {chant.notes && (
          <Card className="mt-12 max-w-4xl mx-auto shadow-xl rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm">
              <CardHeader className="border-b border-border/30">
                  <CardTitle className="text-xl text-primary flex items-center gap-2.5"><Info className="w-6 h-6"/>Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="p-5 md:p-6">
                  <p className="text-md text-foreground/80 whitespace-pre-line leading-relaxed">{chant.notes}</p>
              </CardContent>
          </Card>
        )}
        
        <Separator className="my-12 md:my-16 bg-border/50" />

        <Card className="mt-12 p-8 bg-accent/10 text-center rounded-2xl shadow-lg border-2 border-accent/20 max-w-4xl mx-auto" aria-labelledby="chant-conclusion-title">
          <CardTitle id="chant-conclusion-title" className="text-2xl md:text-3xl text-accent mb-4 tracking-tight">The Power of Sacred Sound</CardTitle>
          <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Chanting these sacred texts with devotion and understanding can bring peace, clarity, and spiritual upliftment.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg">
              <Link href="/sacred-chants">Return to Sacred Chants Library</Link>
          </Button>
        </Card>
      </div>
    </>
  );
}


    
